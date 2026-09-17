import { pluginShopifyCurrency as pluginCurrency, PluginShopifyCurrencyStore } from './pluginShopifyCurrency';
import { MockClient } from '@athoscommerce/snap-shared';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const globals = { siteId: '8uyt2m' };
const searchConfig = { id: 'search' };

const createController = () => {
	return new SearchController(searchConfig, {
		client: new MockClient(globals, {}),
		store: new SearchStore(searchConfig, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	});
};

// mirrors how the real TemplatesStore exposes setCurrency - on the prototype, which is what a deepmerge
// of the controller config strips off. A plain object with a jest.fn would survive that merge (deepmerge
// copies functions by reference) and would not exercise the failure at all.
class MockTemplatesStore {
	currency = 'usd';
	applied: string[] = [];
	library = { import: { currency: { usd: () => undefined, eur: () => undefined, cad: () => undefined } } };

	async setCurrency(code: string) {
		this.applied.push(code);
		this.currency = code;
	}
}

// stands in for the TemplatesStore that the templates integration passes to the plugin
const createStore = (currency?: string): PluginShopifyCurrencyStore & { setCurrency: jest.Mock } => {
	const store = {
		currency,
		setCurrency: jest.fn(async (code: string) => {
			store.currency = code;
		}),
		library: { import: { currency: { usd: () => undefined, eur: () => undefined, cad: () => undefined } } },
	};

	return store;
};

describe('shopify/pluginCurrency', () => {
	let controller: SearchController;

	beforeEach(() => {
		controller = createController();
	});

	afterEach(() => {
		// @ts-ignore - cleaning up the storefront global between tests
		delete window.Shopify;
		jest.restoreAllMocks();
	});

	it('applies the storefront active currency to the templates store', async () => {
		// @ts-ignore
		window.Shopify = { currency: { active: 'EUR' } };
		const store = createStore('usd');

		pluginCurrency(controller, {}, store);
		await Promise.resolve();

		expect(store.setCurrency).toHaveBeenCalledTimes(1);
		expect(store.setCurrency).toHaveBeenCalledWith('eur');
	});

	it('does nothing when the plugin is disabled', () => {
		// @ts-ignore
		window.Shopify = { currency: { active: 'EUR' } };
		const store = createStore('usd');

		pluginCurrency(controller, { enabled: false }, store);

		expect(store.setCurrency).not.toHaveBeenCalled();
	});

	it('does not reapply the currency that is already active', () => {
		// @ts-ignore
		window.Shopify = { currency: { active: 'usd' } };
		const store = createStore('usd');

		pluginCurrency(controller, {}, store);

		expect(store.setCurrency).not.toHaveBeenCalled();
	});

	it('only applies the currency once when attached to multiple controllers', async () => {
		// @ts-ignore
		window.Shopify = { currency: { active: 'CAD' } };
		const store = createStore('usd');

		pluginCurrency(controller, {}, store);
		pluginCurrency(createController(), {}, store);
		await Promise.resolve();

		expect(store.setCurrency).toHaveBeenCalledTimes(1);
		expect(store.setCurrency).toHaveBeenCalledWith('cad');
	});

	it('keeps the configured currency when the storefront currency is unavailable', () => {
		const warn = jest.spyOn(controller.log, 'warn').mockImplementation(() => undefined);
		const store = createStore('eur');

		pluginCurrency(controller, {}, store);

		// `config.currency` is already applied by the templates store - leaving it alone is the fallback
		expect(store.setCurrency).not.toHaveBeenCalled();
		expect(store.currency).toBe('eur');
		expect(warn).toHaveBeenCalled();
	});

	it('keeps the configured currency when the storefront currency is not supported', () => {
		const warn = jest.spyOn(controller.log, 'warn').mockImplementation(() => undefined);
		// @ts-ignore
		window.Shopify = { currency: { active: 'XYZ' } };
		const store = createStore('eur');

		pluginCurrency(controller, {}, store);

		expect(store.setCurrency).not.toHaveBeenCalled();
		expect(store.currency).toBe('eur');
		expect(warn).toHaveBeenCalled();
	});

	it('receives an intact store when attached through the controller config', async () => {
		// the controller deep-merges its config with the defaults before calling `use()` - plugin arguments
		// have to survive that merge with their prototypes intact, or `setCurrency` is stripped off the store
		// @ts-ignore
		window.Shopify = { currency: { active: 'EUR' } };
		const store = new MockTemplatesStore();
		const searchConfigWithPlugin = {
			id: 'search',
			plugins: [[pluginCurrency, { enabled: true }, store]],
		};

		new SearchController(searchConfigWithPlugin as any, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, { urlManager }),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		await Promise.resolve();

		expect(store.applied).toEqual(['eur']);
		expect(store.currency).toBe('eur');
	});

	it('warns and does nothing when no templates store is provided', () => {
		const warn = jest.spyOn(controller.log, 'warn').mockImplementation(() => undefined);
		// @ts-ignore
		window.Shopify = { currency: { active: 'EUR' } };

		pluginCurrency(controller, {});

		expect(warn).toHaveBeenCalled();
	});
});
