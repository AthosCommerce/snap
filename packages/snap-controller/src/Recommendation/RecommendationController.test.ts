import 'whatwg-fetch';
import { v4 as uuidv4 } from 'uuid';

import { Product, RecommendationStore, RecommendationStoreConfig } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { Tracker } from '@athoscommerce/snap-tracker';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { MockClient } from '@athoscommerce/snap-shared';
import { waitFor } from '@testing-library/preact';
import { RecommendationController } from './RecommendationController';

const globals = { siteId: '8uyt2m' };

const mockSkus = ['product_sku1', 'product_sku2'];

const recommendConfig: RecommendationStoreConfig = {
	id: 'search',
	tag: 'trending',
	globals: {
		product: mockSkus[0],
	},
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager,
};

// mocks fetch so beacon client does not make network requests
jest.spyOn(global.window, 'fetch').mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

describe('Recommendation Controller', () => {
	beforeEach(() => {
		recommendConfig.id = uuidv4().split('-').join('');
	});

	afterEach(() => {
		const cookies = document.cookie.split(';');

		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i];
			const eqPos = cookie.indexOf('=');
			const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		}
	});

	it(`throws an error when no tag is provided in config`, async function () {
		expect(() => {
			const configWithoutTag: RecommendationStoreConfig = {
				id: recommendConfig.id,
				tag: '',
			};

			// @ts-ignore
			new RecommendationController(configWithoutTag, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(configWithoutTag, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();
	});

	const events = ['beforeSearch', 'afterSearch', 'afterStore'];
	events.forEach((event) => {
		it(`tests ${event} middleware cancellation handled`, async function () {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});

			const spy = jest.spyOn(controller.log, 'warn');
			controller.on(event, () => false); // return false to stop middleware

			controller.init();
			await controller.search();

			expect(spy).toHaveBeenCalledWith(`'${event}' middleware cancelled`);
			spy.mockClear();

			// store should not have been updated
			if (['beforeSearch'].includes(event)) {
				expect(controller.store.results.length).toBe(0);
			}
		});
	});

	events.forEach((event) => {
		it(`tests ${event} middleware error handled`, async function () {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});

			const spy = jest.spyOn(controller.log, 'error');
			controller.on(event, () => {
				throw 'errrrrr!';
			}); // throw an error

			controller.init();
			await controller.search();

			expect(spy).toHaveBeenCalledWith(`error in '${event}' middleware`);
			spy.mockClear();
		});
	});

	it(`sets proper loading states`, async function () {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		// calling init to ensure event timings line up for asserting loading and loaded states
		await controller.init();

		expect(controller.store.loaded).toBe(false);
		expect(controller.store.loading).toBe(false);

		const searchPromise = controller.search();

		expect(controller.store.loaded).toBe(false);
		expect(controller.store.loading).toBe(true);

		await searchPromise;

		expect(controller.store.loaded).toBe(true);
		expect(controller.store.loading).toBe(false);
	});

	it(`tests searchOnPageShow triggers search on persisted pageshow event `, async function () {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();

		const searchSpy = jest.spyOn(controller, 'search');

		expect(searchSpy).not.toHaveBeenCalled();

		// Mock PageTransitionEvent
		class MockPageTransitionEvent extends Event {
			public persisted: boolean;

			constructor(type: string, eventInitDict?: EventInit & { persisted?: boolean }) {
				super(type, eventInitDict);
				this.persisted = eventInitDict?.persisted ?? false;
			}
		}

		const event = new MockPageTransitionEvent('pageshow', {
			bubbles: true,
			persisted: true,
		});

		window.dispatchEvent(event);

		await waitFor(() => {
			expect(searchSpy).toHaveBeenCalled();
		});
	});

	it(`can turn off searchOnPageShow`, async function () {
		const customConfig = {
			...recommendConfig,
			settings: {
				searchOnPageShow: false,
			},
		};
		const controller = new RecommendationController(customConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();

		const searchSpy = jest.spyOn(controller, 'search');

		expect(searchSpy).not.toHaveBeenCalled();

		// Mock PageTransitionEvent
		class MockPageTransitionEvent extends Event {
			public persisted: boolean;

			constructor(type: string, eventInitDict?: EventInit & { persisted?: boolean }) {
				super(type, eventInitDict);
				this.persisted = eventInitDict?.persisted ?? false;
			}
		}

		const event = new MockPageTransitionEvent('pageshow', {
			bubbles: true,
			persisted: true,
		});

		window.dispatchEvent(event);

		await waitFor(() => {
			expect(searchSpy).not.toHaveBeenCalled();
		});
	});

	it(`tests searchOnPageShow doesnt trigger search if persisted is false or undefined on the pageshow event`, async function () {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();

		const searchSpy = jest.spyOn(controller, 'search');

		expect(searchSpy).not.toHaveBeenCalled();

		// Mock PageTransitionEvent
		class MockPageTransitionEvent extends Event {
			public persisted: boolean;

			constructor(type: string, eventInitDict?: EventInit & { persisted?: boolean }) {
				super(type, eventInitDict);
				this.persisted = eventInitDict?.persisted ?? false;
			}
		}

		const event = new MockPageTransitionEvent('pageshow', {
			bubbles: true,
			persisted: false,
		});

		window.dispatchEvent(event);

		const event2 = new MockPageTransitionEvent('pageshow', {
			bubbles: true,
		});

		window.dispatchEvent(event2);

		await waitFor(() => {
			expect(searchSpy).not.toHaveBeenCalled();
		});
	});

	it('can invoke controller track.product.render', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const trackfn = jest.spyOn(controller.tracker.events.recommendations, 'render');

		await controller.search();

		expect(trackfn).toHaveBeenCalledTimes(1);

		trackfn.mockClear();
	});

	it('can invoke controller track.product.impression', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const trackfn = jest.spyOn(controller.tracker.events.recommendations, 'impression');

		await controller.search();

		controller.store.results.forEach((result) => {
			controller.track.product.impression(result);
		});

		expect(trackfn).toHaveBeenCalledTimes(controller.store.results.length);

		trackfn.mockClear();
	});

	it('can invoke controller track.product.clickThrough', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const trackfn = jest.spyOn(controller.tracker.events.recommendations, 'clickThrough');

		await controller.search();

		const event = new MouseEvent('click');
		controller.track.product.clickThrough(event, controller.store.results[0]);

		expect(trackfn).toHaveBeenCalledTimes(1);

		trackfn.mockClear();
	});

	it('can invoke controller track.product.click', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const clickfn = jest.spyOn(controller.tracker.events.recommendations, 'clickThrough');

		await controller.search();

		const result = controller.store.results[0];
		const href = result.mappings.core?.url!;

		const aElem = document.createElement('a');
		aElem.setAttribute('href', href);
		aElem.onclick = (e) => {
			controller.track.product.click(e, result);
		};
		aElem.click();

		expect(clickfn).toHaveBeenCalledTimes(1);
		clickfn.mockClear();
	});

	it('can use addToCart', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();

		const eventfn = jest.spyOn(controller.eventManager, 'fire');

		controller.addToCart([controller.store.results[0], controller.store.results[1]]);

		expect(eventfn).toHaveBeenCalledWith('addToCart', { controller, products: [controller.store.results[0], controller.store.results[1]] });

		controller.tracker.cookies.cart.clear();
	});

	it('can set cart param', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const items = ['product123', 'product456'];
		controller.tracker.cookies.cart.add(items);
		expect(controller.params.cart).toEqual(items);

		controller.tracker.cookies.cart.clear();
	});

	it('can invoke controller track.product.addToCart', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const clickfn = jest.spyOn(controller.tracker.events.recommendations, 'addToCart');

		await controller.search();

		const result = controller.store.results[0];

		controller.track.product.addToCart(result);

		expect(clickfn).toHaveBeenCalledTimes(1);
		clickfn.mockClear();
	});

	it('can set lastViewed param', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const product = { sku: 'product123' };
		controller.tracker.track.product.view(product);

		expect(controller.params.lastViewed).toEqual([product.sku]);
	});

	it('can set shopper param', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const shopper = { id: 'user123' };
		controller.tracker.track.shopper.login(shopper);

		expect(controller.params.shopper).toEqual(shopper.id);
	});

	describe('bundle beacon events', () => {
		const createBundleController = () => {
			const client = new MockClient(globals, {});
			client.mockData.updateConfig({ recommend: { profile: 'bundle' } });
			return new RecommendationController(recommendConfig, {
				client,
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		};

		it('sends render event to bundles endpoint for bundle type profiles', async () => {
			const controller = createBundleController();
			const bundlesRenderFn = jest.spyOn(controller.tracker.events.bundles, 'render');
			const recsRenderFn = jest.spyOn(controller.tracker.events.recommendations, 'render');

			await controller.search();

			expect(bundlesRenderFn).toHaveBeenCalledTimes(1);
			expect(recsRenderFn).not.toHaveBeenCalled();

			bundlesRenderFn.mockClear();
			recsRenderFn.mockClear();
		});

		it('sends impression event to bundles endpoint for bundle type profiles', async () => {
			const controller = createBundleController();
			const bundlesImpressionFn = jest.spyOn(controller.tracker.events.bundles, 'impression');
			const recsImpressionFn = jest.spyOn(controller.tracker.events.recommendations, 'impression');

			await controller.search();

			controller.store.results.forEach((result) => {
				controller.track.product.impression(result);
			});

			expect(bundlesImpressionFn).toHaveBeenCalledTimes(controller.store.results.length);
			expect(recsImpressionFn).not.toHaveBeenCalled();

			bundlesImpressionFn.mockClear();
			recsImpressionFn.mockClear();
		});

		it('sends clickThrough event to bundles endpoint for bundle type profiles', async () => {
			const controller = createBundleController();
			const bundlesClickFn = jest.spyOn(controller.tracker.events.bundles, 'clickThrough');
			const recsClickFn = jest.spyOn(controller.tracker.events.recommendations, 'clickThrough');

			await controller.search();

			const event = new MouseEvent('click');
			controller.track.product.clickThrough(event, controller.store.results[0]);

			expect(bundlesClickFn).toHaveBeenCalledTimes(1);
			expect(recsClickFn).not.toHaveBeenCalled();

			bundlesClickFn.mockClear();
			recsClickFn.mockClear();
		});

		it('sends addToCart event to bundles endpoint for bundle type profiles', async () => {
			const controller = createBundleController();
			const bundlesAddToCartFn = jest.spyOn(controller.tracker.events.bundles, 'addToCart');
			const recsAddToCartFn = jest.spyOn(controller.tracker.events.recommendations, 'addToCart');

			await controller.search();

			const result = controller.store.results[0];
			controller.track.product.addToCart(result);

			expect(bundlesAddToCartFn).toHaveBeenCalledTimes(1);
			expect(recsAddToCartFn).not.toHaveBeenCalled();

			bundlesAddToCartFn.mockClear();
			recsAddToCartFn.mockClear();
		});

		it('sends events to recommendations endpoint for non-bundle type profiles', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
			const bundlesRenderFn = jest.spyOn(controller.tracker.events.bundles, 'render');
			const recsRenderFn = jest.spyOn(controller.tracker.events.recommendations, 'render');

			await controller.search();

			expect(recsRenderFn).toHaveBeenCalledTimes(1);
			expect(bundlesRenderFn).not.toHaveBeenCalled();

			bundlesRenderFn.mockClear();
			recsRenderFn.mockClear();
		});
	});

	it('logs error if 429', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const handleError = jest.spyOn(controller, 'handleError');

		const error = new Error('Retry rate limit exceeded.');
		controller.client.recommend = jest.fn(() => {
			throw { err: error, fetchDetails: { status: 429, url: 'test.com' } };
		});

		await controller.search();

		expect(controller.store.error).toStrictEqual({
			code: 429,
			type: 'warning',
			message: 'Too many requests try again later',
		});

		expect(handleError).toHaveBeenCalledWith(error, { status: 429, url: 'test.com' });
		handleError.mockClear();
	});

	it('logs error if 500', async () => {
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const handleError = jest.spyOn(controller, 'handleError');

		const error = new Error('Invalid Search Request or Service Unavailable');
		controller.client.recommend = jest.fn(() => {
			throw { err: error, fetchDetails: { status: 500, url: 'test.com' } };
		});

		await controller.search();

		expect(controller.store.error).toStrictEqual({
			code: 500,
			type: 'error',
			message: 'Invalid Search Request or Service Unavailable',
		});

		expect(handleError).toHaveBeenCalledWith(error, { status: 500, url: 'test.com' });
		handleError.mockClear();
	});
});

describe('Recommendation Controller quickview', () => {
	let originalAthos: any;

	beforeEach(() => {
		recommendConfig.id = uuidv4().split('-').join('');
		originalAthos = (window as any).athos;
	});

	afterEach(() => {
		(window as any).athos = originalAthos;
	});

	it('quickview fires controller/quickview with the core parentId and the originating controller', async () => {
		const fire = jest.fn();
		// @ts-ignore
		window.athos = { fire };
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const result: any = { id: 'rec-child-1', mappings: { core: { parentId: 'rec-parent-1' } } };
		await controller.quickview(result);

		expect(fire).toHaveBeenCalledWith('controller/quickview', expect.objectContaining({ result, parentId: 'rec-parent-1', controller }));

		const fallbackResult: any = { id: 'rec-1' };
		await controller.quickview(fallbackResult);

		expect(fire).toHaveBeenCalledWith('controller/quickview', expect.objectContaining({ result: fallbackResult, parentId: 'rec-1', controller }));
	});

	it('quickview warns and does not fire when no result provided', async () => {
		const fire = jest.fn();
		// @ts-ignore
		window.athos = { fire };
		const controller = new RecommendationController(recommendConfig, {
			client: new MockClient(globals, {}),
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.quickview(undefined as any);

		expect(fire).not.toHaveBeenCalled();
	});
});
