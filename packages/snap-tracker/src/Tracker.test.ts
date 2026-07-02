import { Tracker } from './Tracker';
import { TrackerConfig, TrackErrorEvent, OrderTransactionData } from './types';
import type {
	BeaconConfig,
	Product,
	ChatImpressionSchemaData,
	ChatClickthroughSchemaData,
	ChatAddtocartSchemaData,
	ChatFeedbackSchemaData,
} from '@athoscommerce/beacon';
import { ChatFeedbackSchemaDataFeedbackEnum } from '@athoscommerce/beacon';

const PREFLIGHT_DEBOUNCE_TIMEOUT = 300;
// mocks fetch so beacon client does not make network requests

const globals = {
	siteId: 'xxxzzz',
};

const config: TrackerConfig & BeaconConfig = {
	mode: 'development',
	apis: {
		fetch: global.window.fetch,
	},
};

const resetAllCookies = () => {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	}
};

Object.defineProperty(global.window.navigator, 'cookieEnabled', {
	writable: true,
	value: true,
});

// Mock localStorage
const localStorageMock = (() => {
	let store: Record<string, string> = {};
	return {
		getItem: jest.fn((key: string) => store[key] || null),
		setItem: jest.fn((key: string, value: string) => {
			store[key] = value.toString();
		}),
		removeItem: jest.fn((key: string) => {
			delete store[key];
		}),
		clear: jest.fn(() => {
			store = {};
		}),
	};
})();

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock,
});

describe('Script Block Tracking', () => {
	afterEach(() => {
		global.document.body.innerHTML = '';
	});

	beforeEach(() => {
		jest.clearAllMocks();
		resetAllCookies();
		localStorageMock.clear();
	});

	it('can target track/shopper/login', async () => {
		const shopper = { id: Date.now().toString() };
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/shopper/login">
				shopper = {
					id: "${shopper.id}",
				};
			</script>
		</div>`;

		const tracker = new Tracker(globals, config);
		const trackEvent = jest.spyOn(tracker.track.shopper, 'login');
		const trackBeaconEvent = jest.spyOn(tracker.events.shopper, 'login');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith(shopper, undefined);
		expect(trackBeaconEvent).toHaveBeenCalledWith({ data: shopper, siteId: undefined });

		trackEvent.mockRestore();
	});

	it('can target track/product/view', async () => {
		const item = { sku: 'abc123' };
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/product/view">
				item = ${JSON.stringify(item)};
			</script>
		</div>`;

		const tracker = new Tracker(globals, config);
		const trackEvent = jest.spyOn(tracker.track.product, 'view');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith(item, undefined);

		trackEvent.mockRestore();
	});

	it('can target track/order/transaction', async () => {
		const order = {
			id: '123456',
			total: '10.71',
			transactionTotal: '9.99',
			city: 'Los Angeles',
			state: 'CA',
			country: 'US',
		};
		const items = [
			{
				sku: 'abc123',
				qty: '1',
				price: '9.99',
			},
		];
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/order/transaction">
				order = ${JSON.stringify(order)};
				items = ${JSON.stringify(items)};
			</script>
		</div>`;

		const tracker = new Tracker(globals, config);
		const trackEvent = jest.spyOn(tracker.track.order, 'transaction');

		await new Promise((r) => setTimeout(r));
		expect(trackEvent).toHaveBeenCalledWith({ order, items }, undefined);

		trackEvent.mockRestore();
	});

	it('logs console error if invalid type attribute', async () => {
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/dne"></script>
		</div>`;

		new Tracker(globals, config);
		const consoleError = jest.spyOn(console, 'error');

		await new Promise((r) => setTimeout(r));
		expect(consoleError).toHaveBeenCalled();

		consoleError.mockRestore();
	});
});

describe('Tracker', () => {
	afterAll(() => {
		resetAllCookies();
	});

	afterEach(() => {
		(global.window as any).navigator.cookieEnabled = true;
	});

	beforeEach(() => {
		jest.clearAllMocks();
		resetAllCookies();
		localStorageMock.clear();
	});

	it('can do nothing', () => {
		expect(true).toBe(true);
	});

	it('can create instance', async () => {
		const tracker = new Tracker(globals, config);
		// @ts-ignore - private property access
		expect(tracker.mode).toStrictEqual(tracker.config.mode);
		// @ts-ignore - private property access
		expect(tracker.globals).toStrictEqual(globals);
		// @ts-ignore - private property access
		expect(tracker.localStorage).toBeDefined();

		expect(tracker.track).toBeDefined();
		expect(tracker.track.error).toBeDefined();
		expect(tracker.track.shopper.login).toBeDefined();
		expect(tracker.track.product.view).toBeDefined();
		expect(tracker.track.product.click).toBeDefined();
		expect(tracker.track.cart.view).toBeDefined();
		expect(tracker.track.order.transaction).toBeDefined();
	});

	it('throws if globals does not contain siteId', async () => {
		expect(() => {
			// @ts-ignore
			new Tracker({});
		}).toThrow();
	});

	it('has a method for getting the context', async () => {
		// running in dev mode
		const tracker = new Tracker(globals, config);
		const context = tracker.getContext();
		expect(context).toBeDefined();
		expect(context.userId).toBeDefined();
		expect(context.sessionId).toBeDefined();
		expect(context.shopperId).toBeDefined(); // should not have a value
		expect(context.shopperId).toBe('');
		expect(context.pageLoadId).toBeDefined();
		expect(context.timestamp).toBeDefined();
		expect(context.pageUrl).toBeDefined();
		expect(context.initiator).toBeDefined();
		expect(context.attribution).not.toBeDefined();
		expect(context.dev).toBe(true);
		expect(context.currency).not.toBeDefined();
	});

	it('has a method for getting the globals', async () => {
		const tracker = new Tracker(globals, config);
		const trackerGlobals = tracker.getGlobals();

		expect(trackerGlobals).toBeDefined();
		expect(trackerGlobals.siteId).toBe(globals.siteId);
	});

	it('can pass config to set the AppMode', async () => {
		const customConfig: TrackerConfig = {
			mode: 'production',
		};

		const tracker = new Tracker(globals, customConfig);

		// @ts-ignore - private property
		expect(tracker.mode).toBe('production');

		const devTracker = new Tracker(globals, config);

		// @ts-ignore - private property
		expect(devTracker.mode).toBe('development');
	});

	it('will make preflight request when there are cart products set', async () => {
		const tracker = new Tracker(globals, config);
		const sendPreflight = jest.spyOn(tracker, 'sendPreflight');
		// simulate product cart tracking
		const productData = [{ parentId: 'product123', uid: 'product123', sku: 'product123', qty: 1, price: 10.99 }];
		tracker.storage.cart.set(productData);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));

		expect(sendPreflight).toHaveBeenCalledTimes(1);
	});

	it('will make preflight request when there are viewed products set', async () => {
		const tracker = new Tracker(globals, config);
		const sendPreflight = jest.spyOn(tracker, 'sendPreflight');
		// simulate product view tracking
		const productData = { sku: 'product123' };
		tracker.track.product.view(productData);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));

		expect(sendPreflight).toHaveBeenCalledTimes(1);
	});

	it('will make preflight request when there is a shopperId set', async () => {
		const tracker = new Tracker(globals, config);
		const sendPreflight = jest.spyOn(tracker, 'sendPreflight');
		// simulate shopper login
		const shopperData = { id: 'shopper123' };
		tracker.track.shopper.login(shopperData);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));

		expect(sendPreflight).toHaveBeenCalledTimes(1);
	});

	it('can retarget DOM elements', () => {
		const tracker = new Tracker(globals, config);
		const retargetSpy = jest.spyOn(tracker, 'retarget');

		// Add new DOM element after initialization
		global.document.body.innerHTML = `<div>
			<script type="searchspring/track/product/view">
				item = ${JSON.stringify({ sku: 'abc123' })};
			</script>
		</div>`;

		tracker.retarget();

		expect(retargetSpy).toHaveBeenCalledTimes(1);
		retargetSpy.mockRestore();
	});

	it('can track errors', () => {
		const tracker = new Tracker(globals, { mode: 'production', href: 'http://example.com' });
		const errorData: TrackErrorEvent = {
			message: 'Test error',
			stack: 'Error stack trace',
			details: { context: 'Testing' },
		};

		const eventsSpy = jest.spyOn(tracker.events.error, 'snap');

		tracker.track.error(errorData);

		const { message, stack, ...details } = errorData;

		expect(eventsSpy).toHaveBeenCalledWith({
			data: {
				message,
				stack,
				details,
			},
			siteId: undefined,
		});

		eventsSpy.mockRestore();
	});

	it('does not track errors in development mode', () => {
		const devTracker = new Tracker(globals, { mode: 'development' });
		const errorData: TrackErrorEvent = {
			message: 'Test error',
			stack: 'Error stack trace',
		};

		const eventsSpy = jest.spyOn(devTracker.events.error, 'snap');

		devTracker.track.error(errorData);

		expect(eventsSpy).not.toHaveBeenCalled();

		eventsSpy.mockRestore();
	});

	it('does not track errors when doNotTrack includes error', () => {
		const noTrackTracker = new Tracker(globals, {
			mode: 'production',
			doNotTrack: ['error'],
		});

		const errorData: TrackErrorEvent = {
			message: 'Test error',
			stack: 'Error stack trace',
		};

		const eventsSpy = jest.spyOn(noTrackTracker.events.error, 'snap');

		noTrackTracker.track.error(errorData);

		expect(eventsSpy).not.toHaveBeenCalled();

		eventsSpy.mockRestore();
	});

	it('can track product view events', () => {
		const tracker = new Tracker(globals, config);

		const productData = { parentId: 'product123', uid: 'product123', sku: 'product123' };

		const eventsSpy = jest.spyOn(tracker.events.product, 'pageView');

		tracker.track.product.view(productData);

		expect(eventsSpy).toHaveBeenCalledWith({
			data: {
				result: productData,
			},
			siteId: undefined,
		});

		eventsSpy.mockRestore();
	});

	it('handles order transaction events with legacy format', () => {
		const tracker = new Tracker(globals, config);

		const orderData: OrderTransactionData = {
			order: {
				id: '12345',
				total: '59.99',
				transactionTotal: '49.99',
				city: 'New York',
				state: 'NY',
				country: 'US',
			},
			items: [
				{
					parentId: 'product123',
					uid: 'product123',
					sku: 'product123',
					qty: '2',
					price: '24.99',
				},
			],
		};

		const eventsSpy = jest.spyOn(tracker.events.order, 'transaction');

		tracker.track.order.transaction(orderData);

		expect(eventsSpy).toHaveBeenCalled();
		// Check that the first argument to the spy's first call has the expected structure
		expect(eventsSpy.mock.calls[0][0].data).toEqual({
			orderId: '12345',
			total: 59.99,
			transactionTotal: 49.99,
			city: 'New York',
			state: 'NY',
			country: 'US',
			results: [
				{
					parentId: 'product123',
					uid: 'product123',
					sku: 'product123',
					qty: 2,
					price: 24.99,
				},
			],
		});

		eventsSpy.mockRestore();
	});

	it('can handle currency settings', () => {
		const tracker = new Tracker({ ...globals, currency: { code: 'EUR' } }, config);

		expect(tracker.getContext().currency).toStrictEqual({ code: 'EUR' });

		// Test changing the currency
		tracker.setCurrency({ code: 'USD' });

		expect(tracker.getContext().currency).toStrictEqual({ code: 'USD' });
	});

	it('correctly handles product ID extraction', () => {
		const tracker = new Tracker(globals, config);
		const product = { uid: 'product123', sku: 'sku456' };

		// @ts-ignore - Testing private method
		const productId = tracker.getProductId(product);

		expect(productId).toBe(product.sku); // Expecting sku to be preferred
	});

	it('can get viewed products', () => {
		const tracker = new Tracker(globals, config);
		// First view a product
		const productData = { sku: 'viewed-product-123' };
		tracker.track.product.view(productData);

		// Now check if it's in viewed products
		const viewedProducts = tracker.cookies.viewed.get();

		expect(viewedProducts).toContain('viewed-product-123');
	});
});

describe('Cart inferance from context', () => {
	let tracker: Tracker;
	let config: TrackerConfig & BeaconConfig;
	let mockFetchApi: jest.Mock;
	beforeEach(() => {
		jest.clearAllMocks();
		resetAllCookies();
		localStorageMock.clear();
		mockFetchApi = jest.fn().mockResolvedValue({
			status: 200,
			json: () => Promise.resolve({}),
		} as Response);
		config = { mode: 'development', apis: { fetch: mockFetchApi } };
		tracker = new Tracker(globals, config);
	});

	it('empty cart should not trigger any requests', async () => {
		// empty cart should not trigger any requests
		const cart: Product[] = [];
		tracker = new Tracker(
			{
				...globals,
				cart,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, 0));
		expect(mockFetchApi).not.toHaveBeenCalled();
	});
	it('can set current cart from globals', async () => {
		// set initial cart

		// set initial cart
		const cart = [
			{ parentId: 'productUid1', uid: 'productUid1', sku: 'productSku1', qty: 1, price: 9.99 },
			{ parentId: 'productUid2', uid: 'productUid2', sku: 'productSku2', qty: 2, price: 10.99 },
		];
		tracker = new Tracker(
			{
				...globals,
				cart,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));

		expect(tracker.storage.cart.get()).toEqual(cart);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/add'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		// simulate updated cart with one item added
		const newProduct = { parentId: 'productUid3', uid: 'productUid3', sku: 'productSku3', qty: 3, price: 9.99 };
		const cart2 = [...cart, newProduct];
		tracker = new Tracker(
			{
				...globals,
				cart: cart2,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart2);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/add'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		// simulate adding 1 quantity of existing item in cart
		const cart3 = [...cart, { parentId: 'productUid3', uid: 'productUid3', sku: 'productSku3', qty: 4, price: 9.99 }];
		tracker = new Tracker(
			{
				...globals,
				cart: cart3,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart3);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/add'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		// simulate removing 1 quantity of exisiting item in cart
		const cart4 = [...cart, { parentId: 'productUid3', uid: 'productUid3', sku: 'productSku3', qty: 1, price: 9.99 }];
		tracker = new Tracker(
			{
				...globals,
				cart: cart4,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart4);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/remove'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		// missing properties should not be added to cart storage, but should still send an error event
		const cart5 = [{ uid: 'productUid3', sku: 'productSku3' }] as any;
		tracker = new Tracker(
			{
				...globals,
				cart: cart5,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart4); // should be previous cart
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/log/snap'), expect.any(Object));
		expect(mockFetchApi).not.toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		// simulate removing product from cart
		const cart6 = [...cart];
		tracker = new Tracker(
			{
				...globals,
				cart: cart6,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart6);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/remove'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();

		expect(tracker.storage.cart.get().length).toBeGreaterThan(0);
		// simulate removing all products from cart
		const cart7: Product[] = [];
		tracker = new Tracker(
			{
				...globals,
				cart: cart7,
			},
			config
		);
		await new Promise((resolve) => setTimeout(resolve, PREFLIGHT_DEBOUNCE_TIMEOUT));
		expect(tracker.storage.cart.get()).toEqual(cart7);
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/cart/remove'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/v1/preflight'), expect.any(Object));
		mockFetchApi.mockClear();
		expect(mockFetchApi).not.toHaveBeenCalled();
	});
});

describe('Chat Events', () => {
	const QUEUE_DEBOUNCE_TIMEOUT = 300;
	let tracker: Tracker;
	let chatConfig: TrackerConfig & BeaconConfig;
	let mockFetchApi: jest.Mock;

	beforeEach(() => {
		jest.clearAllMocks();
		resetAllCookies();
		localStorageMock.clear();
		mockFetchApi = jest.fn().mockResolvedValue({
			status: 200,
			json: () => Promise.resolve({}),
		} as Response);
		chatConfig = { mode: 'development', apis: { fetch: mockFetchApi } };
		tracker = new Tracker(globals, chatConfig);
	});

	it('has chat event methods on the tracker', () => {
		expect(tracker.events.chat).toBeDefined();
		expect(tracker.events.chat.impression).toBeDefined();
		expect(tracker.events.chat.clickThrough).toBeDefined();
		expect(tracker.events.chat.addToCart).toBeDefined();
		expect(tracker.events.chat.feedback).toBeDefined();
	});

	it('can send chat impression events', async () => {
		const impressionData: ChatImpressionSchemaData = {
			chatSessionId: 'session-123',
			responseId: 'response-456',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
				},
			],
		};

		tracker.events.chat.impression({ data: impressionData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/impression'), expect.any(Object));
	});

	it('can send impression with empty results for zero-result responses', async () => {
		const impressionData: ChatImpressionSchemaData = {
			chatSessionId: 'session-abc',
			responseId: 'response-xyz',
			results: [],
		};

		tracker.events.chat.impression({ data: impressionData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/impression'), expect.any(Object));
	});

	it('impression sends correct payload structure', () => {
		const impressionData: ChatImpressionSchemaData = {
			chatSessionId: 'session-abc',
			responseId: 'response-xyz',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
				},
				{
					type: 'product',
					parentId: 'parent-2',
					uid: 'uid-2',
				},
			],
		};

		const impressionSpy = jest.spyOn(tracker.events.chat, 'impression');

		tracker.events.chat.impression({ data: impressionData });

		expect(impressionSpy).toHaveBeenCalledWith({
			data: impressionData,
		});

		impressionSpy.mockRestore();
	});

	it('can send chat clickthrough events', async () => {
		const clickthroughData: ChatClickthroughSchemaData = {
			chatSessionId: 'session-123',
			responseId: 'response-456',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
				},
			],
		};

		tracker.events.chat.clickThrough({ data: clickthroughData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/clickthrough'), expect.any(Object));
	});

	it('clickthrough sends correct payload structure', () => {
		const clickthroughData: ChatClickthroughSchemaData = {
			chatSessionId: 'session-abc',
			responseId: 'response-xyz',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
				},
			],
		};

		const clickthroughSpy = jest.spyOn(tracker.events.chat, 'clickThrough');

		tracker.events.chat.clickThrough({ data: clickthroughData });

		expect(clickthroughSpy).toHaveBeenCalledWith({
			data: clickthroughData,
		});

		clickthroughSpy.mockRestore();
	});

	it('can send chat addtocart events', async () => {
		const addToCartData: ChatAddtocartSchemaData = {
			chatSessionId: 'session-123',
			responseId: 'response-456',
			results: [
				{
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
					qty: 1,
					price: 19.99,
				},
			],
		};

		tracker.events.chat.addToCart({ data: addToCartData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/addtocart'), expect.any(Object));
	});

	it('addtocart sends correct payload with product quantities', () => {
		const addToCartData: ChatAddtocartSchemaData = {
			chatSessionId: 'session-abc',
			responseId: 'response-xyz',
			results: [
				{
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
					qty: 2,
					price: 29.99,
				},
				{
					parentId: 'parent-2',
					uid: 'uid-2',
					sku: 'sku-2',
					qty: 1,
					price: 14.99,
				},
			],
		};

		const addToCartSpy = jest.spyOn(tracker.events.chat, 'addToCart');

		tracker.events.chat.addToCart({ data: addToCartData });

		expect(addToCartSpy).toHaveBeenCalledWith({
			data: addToCartData,
		});

		addToCartSpy.mockRestore();
	});

	it('addtocart also adds products to cart storage', async () => {
		const addToCartData: ChatAddtocartSchemaData = {
			chatSessionId: 'session-123',
			responseId: 'response-456',
			results: [
				{
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
					qty: 1,
					price: 19.99,
				},
			],
		};

		tracker.events.chat.addToCart({ data: addToCartData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		const cartItems = tracker.storage.cart.get();
		expect(cartItems).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					parentId: 'parent-1',
					uid: 'uid-1',
				}),
			])
		);
	});

	it('can send positive chat feedback events', async () => {
		const feedbackData: ChatFeedbackSchemaData = {
			chatSessionId: 'session-123',
			feedback: ChatFeedbackSchemaDataFeedbackEnum.Positive,
		};

		tracker.events.chat.feedback({ data: feedbackData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/feedback'), expect.any(Object));
	});

	it('can send negative chat feedback events', async () => {
		const feedbackData: ChatFeedbackSchemaData = {
			chatSessionId: 'session-123',
			feedback: ChatFeedbackSchemaDataFeedbackEnum.Negative,
		};

		tracker.events.chat.feedback({ data: feedbackData });
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/feedback'), expect.any(Object));
	});

	it('feedback sends correct payload with feedback enum value', () => {
		const feedbackSpy = jest.spyOn(tracker.events.chat, 'feedback');

		// positive feedback
		tracker.events.chat.feedback({ data: { chatSessionId: 'session-abc', feedback: ChatFeedbackSchemaDataFeedbackEnum.Positive } });
		expect(feedbackSpy).toHaveBeenCalledWith({ data: { chatSessionId: 'session-abc', feedback: ChatFeedbackSchemaDataFeedbackEnum.Positive } });

		// negative feedback
		tracker.events.chat.feedback({ data: { chatSessionId: 'session-abc', feedback: ChatFeedbackSchemaDataFeedbackEnum.Negative } });
		expect(feedbackSpy).toHaveBeenCalledWith({ data: { chatSessionId: 'session-abc', feedback: ChatFeedbackSchemaDataFeedbackEnum.Negative } });

		feedbackSpy.mockRestore();
	});

	it('impression and addtocart events are batched via queueRequest', async () => {
		const impressionData: ChatImpressionSchemaData = {
			chatSessionId: 'session-batch',
			responseId: 'response-1',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
				},
			],
		};

		const addToCartData: ChatAddtocartSchemaData = {
			chatSessionId: 'session-batch',
			responseId: 'response-1',
			results: [
				{
					parentId: 'parent-1',
					uid: 'uid-1',
					sku: 'sku-1',
					qty: 1,
					price: 9.99,
				},
			],
		};

		// send both events before the queue flushes
		tracker.events.chat.impression({ data: impressionData });
		tracker.events.chat.addToCart({ data: addToCartData });

		// should not have been sent yet (queued)
		expect(mockFetchApi).not.toHaveBeenCalledWith(expect.stringContaining('/chat/impression'), expect.any(Object));

		// wait for queue to flush
		await new Promise((resolve) => setTimeout(resolve, QUEUE_DEBOUNCE_TIMEOUT));

		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/impression'), expect.any(Object));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/addtocart'), expect.any(Object));
	});

	it('clickthrough and feedback events are sent immediately', async () => {
		const clickthroughData: ChatClickthroughSchemaData = {
			chatSessionId: 'session-immediate',
			responseId: 'response-1',
			results: [
				{
					type: 'product',
					parentId: 'parent-1',
					uid: 'uid-1',
				},
			],
		};

		tracker.events.chat.clickThrough({ data: clickthroughData });

		// immediate events should fire without waiting for queue debounce
		await new Promise((resolve) => setTimeout(resolve, 0));
		expect(mockFetchApi).toHaveBeenCalledWith(expect.stringContaining('/chat/clickthrough'), expect.any(Object));
	});
});
