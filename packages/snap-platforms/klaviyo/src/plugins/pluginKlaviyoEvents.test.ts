import { pluginKlaviyoEvents, PluginKlaviyoEventsConfig } from './pluginKlaviyoEvents';
import { MockClient } from '@athoscommerce/snap-shared';
import { Product, SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';
import type { AbstractController } from '@athoscommerce/snap-controller';

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager: urlManager,
};
let searchConfig = {
	id: 'search',
};

const globals = { siteId: '8uyt2m' };
const searchConfigDefault = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {},
};

// function to recreate fresh services for each test (otherwise globals are shared)
const createControllerServices = () => {
	return {
		client: new MockClient(globals, {}),
		store: new SearchStore(searchConfig, services),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	};
};

const extractProductDetails = (product: Product) => ({
	id: product.id,
	name: product.mappings?.core?.name,
	url: product.mappings?.core?.url,
	thumbnailImageUrl: product.mappings?.core?.thumbnailImageUrl,
	imageUrl: product.mappings?.core?.imageUrl,
	price: product.mappings?.core?.price,
	msrp: product.mappings?.core?.msrp,
});

describe('klaviyo/pluginKlaviyoEvents', () => {
	let controller: SearchController;
	let pushMock: jest.Mock;

	beforeEach(() => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, createControllerServices());

		pushMock = jest.fn();
		window._learnq = { push: pushMock };
	});

	afterEach(() => {
		delete (window as { _learnq?: unknown })._learnq;
	});

	it('attaches a handler to the track.product.clickThrough event when enabled', () => {
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');

		pluginKlaviyoEvents(controller, { enabled: true });

		expect(onEventSpy).toHaveBeenCalledWith('track.product.clickThrough', expect.any(Function));
	});

	it('is disabled by default (opt-in)', () => {
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');

		pluginKlaviyoEvents(controller);

		expect(onEventSpy).not.toHaveBeenCalled();
	});

	it('can be disabled via config', () => {
		const pluginConfig: PluginKlaviyoEventsConfig = {
			enabled: false,
		};

		const onEventSpy = jest.spyOn(controller.eventManager, 'on');

		pluginKlaviyoEvents(controller, pluginConfig);

		expect(onEventSpy).not.toHaveBeenCalled();
	});

	it('does not attach to unsupported controller types', () => {
		const mockController = {
			type: 'recommendation',
			on: jest.fn(),
		} as unknown as AbstractController;

		pluginKlaviyoEvents(mockController, { enabled: true });

		expect(mockController.on).not.toHaveBeenCalled();
	});

	it('pushes a track event to _learnq on product clickthrough', async () => {
		await controller.search();

		pluginKlaviyoEvents(controller, { enabled: true });

		const product = controller.store.results.find((result) => result.type === 'product') as Product;
		expect(product).toBeDefined();

		await controller.eventManager.fire('track.product.clickThrough', { controller, product });

		const expectedPayload = {
			query: controller.store.search.query?.string || '',
			subject: controller.store.search.subject?.string || '',
			totalResults: controller.store.pagination.totalResults,
			product: extractProductDetails(product),
			results: controller.store.results
				.filter((result) => result.type == 'product' && result.id !== product.id)
				.map((result) => extractProductDetails(result as Product)),
		};

		expect(pushMock).toHaveBeenCalledTimes(1);
		expect(pushMock).toHaveBeenCalledWith(['track', 'Athos Commerce search click', expectedPayload]);
	});

	it('excludes the clicked product from the results payload', async () => {
		await controller.search();

		pluginKlaviyoEvents(controller, { enabled: true });

		const product = controller.store.results.find((result) => result.type === 'product') as Product;

		await controller.eventManager.fire('track.product.clickThrough', { controller, product });

		const [, , payload] = pushMock.mock.calls[0][0];

		expect(payload.results.map((result: { id: string }) => result.id)).not.toContain(product.id);
		expect(payload.results.length).toBe(controller.store.results.filter((result) => result.type === 'product').length - 1);
	});

	it('does not throw when window._learnq is not available', async () => {
		delete (window as { _learnq?: unknown })._learnq;

		await controller.search();

		pluginKlaviyoEvents(controller, { enabled: true });

		const errorSpy = jest.spyOn(controller.log, 'error').mockImplementation(() => {});
		const product = controller.store.results.find((result) => result.type === 'product') as Product;

		await expect(controller.eventManager.fire('track.product.clickThrough', { controller, product })).resolves.not.toThrow();

		// _learnq access throws internally and is caught and logged
		expect(errorSpy).toHaveBeenCalledWith('pluginKlaviyoEvents', 'track.product.clickThrough', expect.any(Object));
	});

	it('logs an error when _learnq.push throws', async () => {
		window._learnq = {
			push: () => {
				throw new Error('learnq error');
			},
		};

		await controller.search();

		pluginKlaviyoEvents(controller, { enabled: true });

		const errorSpy = jest.spyOn(controller.log, 'error').mockImplementation(() => {});
		const product = controller.store.results.find((result) => result.type === 'product') as Product;

		await controller.eventManager.fire('track.product.clickThrough', { controller, product });

		expect(errorSpy).toHaveBeenCalledWith('pluginKlaviyoEvents', 'track.product.clickThrough', expect.any(Object));
		expect(errorSpy).toHaveBeenCalledWith(expect.any(Error));
	});

	it('attaches to autocomplete controllers', () => {
		const mockController = {
			type: 'autocomplete',
			on: jest.fn(),
		} as unknown as AbstractController;

		pluginKlaviyoEvents(mockController, { enabled: true });

		expect(mockController.on).toHaveBeenCalledWith('track.product.clickThrough', expect.any(Function));
	});
});
