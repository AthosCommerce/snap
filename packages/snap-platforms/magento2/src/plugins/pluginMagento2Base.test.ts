import { pluginMagento2Base } from './pluginMagento2Base';
import { MockClient } from '@athoscommerce/snap-shared';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';

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
let controller: SearchController;

// function to recreate fresh services for each test (otherwise globals are shared)
const createControllerServices = () => {
	const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
	return {
		client: new MockClient(globals, {}),
		store: new SearchStore(searchConfig, {
			urlManager,
		}),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	};
};

describe('magento2/pluginMagento2Base', () => {
	beforeEach(() => {
		searchConfig = { ...searchConfigDefault };
		controller = new SearchController(searchConfig, createControllerServices());
		localStorage.clear();
	});

	it('can be disabled', () => {
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');

		pluginMagento2Base(controller, { enabled: false });

		expect(onEventSpy).not.toHaveBeenCalled();
		expect((controller.store.custom as any)?.m2).toBeUndefined();

		onEventSpy.mockClear();
	});

	it('reads shopperId from localStorage and calls tracker login', () => {
		const shopperId = '12345';
		localStorage.setItem('mage-cache-storage', JSON.stringify({ 'athoscommerce-tracking': { shopper_id: shopperId } }));

		const loginSpy = jest.spyOn(controller.tracker.track.shopper, 'login');

		pluginMagento2Base(controller);

		expect(loginSpy).toHaveBeenCalledWith({ id: shopperId });

		loginSpy.mockClear();
	});

	it('does not call tracker login when no shopperId in localStorage', () => {
		localStorage.setItem('mage-cache-storage', JSON.stringify({ customer: {} }));

		const loginSpy = jest.spyOn(controller.tracker.track.shopper, 'login');

		pluginMagento2Base(controller);

		expect(loginSpy).not.toHaveBeenCalled();

		loginSpy.mockClear();
	});

	it('does not call tracker login when localStorage has no mage-cache-storage', () => {
		const loginSpy = jest.spyOn(controller.tracker.track.shopper, 'login');

		pluginMagento2Base(controller);

		expect(loginSpy).not.toHaveBeenCalled();

		loginSpy.mockClear();
	});

	it('sets store.custom.m2 with domain, formKey, and uenc from config', () => {
		const formKey = 'test-form-key';
		const uenc = 'test-uenc';

		pluginMagento2Base(controller, { formKey, uenc });

		expect((controller.store.custom as any).m2).toBeDefined();
		expect((controller.store.custom as any).m2.domain).toBe(window.location.hostname);
		expect((controller.store.custom as any).m2.formKey).toBe(formKey);
		expect((controller.store.custom as any).m2.uenc).toBe(uenc);
	});

	it('uses getFormKey and getUenc when not provided in config', () => {
		pluginMagento2Base(controller);

		expect((controller.store.custom as any).m2).toBeDefined();
		// getUenc uses btoa(window.location.href)
		expect((controller.store.custom as any).m2.uenc).toBe(btoa(window.location.href));
	});

	it('registers afterStore event handler', () => {
		const onEventSpy = jest.spyOn(controller.eventManager, 'on');

		pluginMagento2Base(controller);

		expect(onEventSpy).toHaveBeenCalledWith('afterStore', expect.any(Function));

		onEventSpy.mockClear();
	});

	it('sets wishlist, compare, and addToCart custom data on results after search', async () => {
		const formKey = 'test-form-key';
		const uenc = 'test-uenc';
		const domain = window.location.hostname;

		pluginMagento2Base(controller, { formKey, uenc });

		await controller.init();
		await controller.search();

		const result = controller.store.results[0];
		expect(result.type).not.toBe('banner');

		const uid = result.mappings.core?.uid;

		const expectedWishlistData = {
			data: { product: uid, uenc },
			action: '//' + domain + '/wishlist/index/add/',
		};
		const expectedCompareData = {
			data: { product: uid, uenc },
			action: '//' + domain + '/catalog/product_compare/add/',
		};
		const expectedAddToCart = '//' + domain + '/checkout/cart/add/uenc/' + uenc + '/product/' + uid + '/';

		expect((result.custom as any).wishlist).toBe(JSON.stringify(expectedWishlistData).replace(/\//g, '\\/'));
		expect((result.custom as any).compare).toBe(JSON.stringify(expectedCompareData).replace(/\//g, '\\/'));
		expect((result.custom as any).addToCart).toBe(expectedAddToCart);
	});

	it('sets custom data on all non-banner results after search', async () => {
		const uenc = 'test-uenc';

		pluginMagento2Base(controller, { uenc });

		await controller.init();
		await controller.search();

		const nonBannerResults = controller.store.results.filter((r) => r.type !== 'banner');
		expect(nonBannerResults.length).toBeGreaterThan(0);

		nonBannerResults.forEach((result) => {
			expect((result.custom as any).wishlist).toBeDefined();
			expect((result.custom as any).compare).toBeDefined();
			expect((result.custom as any).addToCart).toBeDefined();
		});
	});
});
