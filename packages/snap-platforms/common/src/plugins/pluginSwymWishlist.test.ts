import { pluginSwymWishlist, swymWishlistButtonProps } from './pluginSwymWishlist';
import { MockClient } from '@athoscommerce/snap-shared';
import { Product, SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';
import type { AbstractController } from '@athoscommerce/snap-controller';

type SwymMock = { initializeActionButtons: jest.Mock };
type SwymWindow = Window & {
	SwymCallbacks?: Array<(swat: SwymMock) => void>;
	initSwymBC?: unknown;
	swymJSObject?: { apiToken?: string };
	SwymViewProducts?: Record<string, any>;
	SwymProductVariants?: Record<string, any>;
	SwymWatchProducts?: Record<string, any>;
};

const swymWindow = window as SwymWindow;
const CONTAINER_SELECTOR = '[data-ss-swym-wishlist="search"]';

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = { urlManager };
const searchConfig = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {
		variants: {
			autoSelect: true,
		},
	},
};

// function to recreate fresh services for each test (otherwise globals are shared)
const createController = (siteId = 'z7h1jh', search = 'variants'): SearchController => {
	const client = new MockClient({ siteId }, {});
	client.mockData.updateConfig({ search });

	return new SearchController(searchConfig, {
		client,
		store: new SearchStore(searchConfig, services),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker({ siteId }),
	});
};

const products = (controller: SearchController): Product[] => controller.store.results.filter((result) => result.type === 'product') as Product[];

// a result as the store shapes it: `display` carries the core mappings (and the selected variant's, when one is set)
const fakeProduct = (core: Record<string, unknown>, extra: Record<string, unknown> = {}): Product =>
	({ type: 'product', mappings: { core }, attributes: {}, display: { mappings: { core } }, ...extra } as unknown as Product);

const renderButtons = (ids: string[], parent: Element = document.body): HTMLElement => {
	const grid = document.createElement('div');
	grid.className = 'ss__results';
	grid.innerHTML = ids
		.map(
			(id) =>
				`<div class="ss__result"><button data-swaction="addToWishlist" data-with-epi="true" data-product-id="${id}" data-variant-id="v-${id}" data-product-url="http://localhost/products/${id}"><span class="swym-wishlist-cta">Add to Wishlist</span></button></div>`
		)
		.join('');
	parent.appendChild(grid);
	return grid;
};

// simulates the Swym SDK finishing its load: pending callbacks run, and later pushes run immediately
const loadSwym = (options: { bigCommerce?: boolean } = {}): SwymMock => {
	if (options.bigCommerce) swymWindow.initSwymBC = () => {};
	const swat: SwymMock = { initializeActionButtons: jest.fn() };
	const callbacks = (swymWindow.SwymCallbacks = swymWindow.SwymCallbacks || []);
	callbacks.forEach((callback) => callback(swat));
	callbacks.push = function (callback) {
		callback(swat);
		return Array.prototype.push.call(this, callback);
	};
	return swat;
};

const flush = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));

// a repeated identical search is skipped by the controller, so later afterStore runs are fired directly; `results`
// stands in for the store of a search that returned different products
const afterStore = (controller: SearchController, results?: Product[]) =>
	controller.eventManager.fire('afterStore', {
		controller: results ? { store: { results }, log: controller.log, targeters: controller.targeters } : controller,
		request: {},
		response: { search: {} },
	});

describe('common/pluginSwymWishlist', () => {
	beforeEach(() => {
		document.body.innerHTML = '';
		delete swymWindow.SwymCallbacks;
		delete swymWindow.initSwymBC;
		delete swymWindow.swymJSObject;
		delete swymWindow.SwymViewProducts;
		delete swymWindow.SwymProductVariants;
		delete swymWindow.SwymWatchProducts;
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	describe('attachment', () => {
		it('is disabled by default (opt-in)', () => {
			const controller = createController();
			const onEventSpy = jest.spyOn(controller.eventManager, 'on');

			pluginSwymWishlist(controller);

			expect(onEventSpy).not.toHaveBeenCalled();
			expect(swymWindow.SwymCallbacks).toBeUndefined();
		});

		it('can be disabled via config', () => {
			const controller = createController();
			const onEventSpy = jest.spyOn(controller.eventManager, 'on');

			pluginSwymWishlist(controller, { enabled: false });

			expect(onEventSpy).not.toHaveBeenCalled();
		});

		it('attaches to the afterStore event when enabled', () => {
			const controller = createController();
			const onEventSpy = jest.spyOn(controller.eventManager, 'on');

			pluginSwymWishlist(controller, { enabled: true });

			expect(onEventSpy).toHaveBeenCalledWith('afterStore', expect.any(Function));
			expect(swymWindow.SwymCallbacks).toHaveLength(1);
		});

		it.each(['autocomplete', 'recommendation'])('attaches to %s controllers', (type) => {
			const mockController = { id: type, type, on: jest.fn() } as unknown as AbstractController;

			pluginSwymWishlist(mockController, { enabled: true });

			expect(mockController.on).toHaveBeenCalledWith('afterStore', expect.any(Function));
		});

		it('does not attach to unsupported controller types', () => {
			const mockController = { id: 'finder', type: 'finder', on: jest.fn() } as unknown as AbstractController;

			pluginSwymWishlist(mockController, { enabled: true });

			expect(mockController.on).not.toHaveBeenCalled();
		});
	});

	describe('swymWishlistButtonProps', () => {
		it('uses the uid as the product id and the selected variant for a product-level feed with Snap variants', async () => {
			const controller = createController();
			await controller.search();
			const product = products(controller)[0];
			const active = product.variants!.active!;
			const activeVariantId = String(active.mappings.core!.uid);

			expect(product.mappings.core!.parentId).toBeUndefined();
			expect(activeVariantId).not.toBe(product.mappings.core!.uid);
			// the selected variant's mappings are masked onto the display data
			expect(String(product.display.mappings.core!.uid)).toBe(activeVariantId);

			expect(swymWishlistButtonProps(product)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_8318690263298',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': '8318690263298',
				'data-variant-id': activeVariantId,
				'data-product-url': `http://localhost${active.mappings.core!.url}`,
			});
		});

		it('follows the variant selection', async () => {
			const controller = createController();
			await controller.search();
			const product = products(controller)[0];
			const variant = product.variants!.data[1];
			const variantId = String(variant.mappings.core!.uid);

			expect(swymWishlistButtonProps(product)!['data-variant-id']).not.toBe(variantId);

			product.variants!.setActive(variant);

			expect(swymWishlistButtonProps(product)).toEqual(
				expect.objectContaining({
					'data-product-id': '8318690263298',
					'data-variant-id': variantId,
					'data-product-url': `http://localhost${variant.mappings.core!.url}`,
				})
			);
		});

		it('uses the parent id as the product and the uid as the variant for a variant-level feed', async () => {
			const controller = createController('8uyt2m', 'variants');
			await controller.search();
			const product = products(controller)[0];

			expect(product.variants).toBeUndefined();

			expect(swymWishlistButtonProps(product)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_14908638822766',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': '14908638822766',
				'data-variant-id': '53085291676014',
				'data-product-url': 'http://localhost/products/red-gloves?variant=53085291676014',
			});
		});

		it('uses the uid as both ids for a result without a parent', () => {
			expect(swymWishlistButtonProps(fakeProduct({ uid: 100, url: 'plain-tee' }))).toEqual(
				expect.objectContaining({ 'data-product-id': '100', 'data-variant-id': '100', 'data-product-url': 'http://localhost/plain-tee' })
			);
		});

		it('keeps an absolute core url as is', () => {
			const product = fakeProduct({ uid: '100', url: 'https://shop.example.com/products/plain-tee?variant=100' });

			expect(swymWishlistButtonProps(product)!['data-product-url']).toBe('https://shop.example.com/products/plain-tee?variant=100');
		});

		it('returns undefined when the ids or the url cannot be resolved', () => {
			expect(swymWishlistButtonProps(fakeProduct({ url: '/products/plain-tee' }))).toBeUndefined();
			expect(swymWishlistButtonProps(fakeProduct({ uid: '100' }))).toBeUndefined();
		});
	});

	describe('Swym product data', () => {
		it('registers each product and its variants in the Swym maps after a search', async () => {
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			await controller.search();

			const product = products(controller)[0];
			const core = product.mappings.core!;
			const active = product.variants!.active!;
			const activeId = Number(active.mappings.core!.uid);
			const variant = product.variants!.data[1];
			const variantId = Number(variant.mappings.core!.uid);
			const variantTitle = Object.values(variant.options)
				.map((option) => option.value)
				.join(' / ');

			expect(activeId).not.toBe(variantId);

			const expectedViewProduct = {
				empi: 8318690263298,
				epi: activeId,
				du: `http://localhost${active.mappings.core!.url}`,
				dt: core.name,
				iu: core.thumbnailImageUrl,
				pr: 50,
				op: 60,
				stk: undefined,
				variants: [
					{
						[Object.values(active.options)
							.map((option) => option.value)
							.join(' / ')]: activeId,
					},
				],
			};
			expect(swymWindow.SwymViewProducts!['8318690263298']).toEqual(expectedViewProduct);

			expect(swymWindow.SwymProductVariants![variantId]).toEqual({
				empi: 8318690263298,
				epi: variantId,
				du: `http://localhost${variant.mappings.core!.url}`,
				dt: core.name,
				iu: variant.mappings.core!.thumbnailImageUrl,
				pr: Number(variant.mappings.core!.price),
				op: Number(variant.mappings.core!.msrp),
				stk: undefined,
				variants: [{ [variantTitle]: variantId }],
			});

			const expectedWatchVariant = {
				id: variantId,
				available: variant.available,
				inventory_quantity: undefined,
				title: variantTitle,
			};
			expect(swymWindow.SwymWatchProducts![variantId]).toEqual(expectedWatchVariant);
			expect(swymWindow.SwymWatchProducts!['8318690263298'][variantId]).toBe(swymWindow.SwymWatchProducts![variantId]);
			expect(Object.keys(swymWindow.SwymWatchProducts!['8318690263298'])).toHaveLength(product.variants!.data.length);

			// every product in the results is registered
			products(controller).forEach((result) => {
				expect(swymWindow.SwymViewProducts![String(result.mappings.core!.uid)]).toBeDefined();
			});
		});

		it('registers a single variant entry for products without Snap variants', async () => {
			const controller = createController('8uyt2m', 'variants');
			pluginSwymWishlist(controller, { enabled: true });

			await controller.search();

			const core = products(controller)[0].mappings.core!;

			expect(swymWindow.SwymViewProducts!['14908638822766']).toEqual({
				empi: 14908638822766,
				epi: 53085291676014,
				du: 'http://localhost/products/red-gloves?variant=53085291676014',
				dt: 'red gloves',
				iu: core.thumbnailImageUrl,
				pr: 0,
				op: undefined,
				stk: undefined,
				variants: [{ 'Default Title': 53085291676014 }],
			});
			expect(swymWindow.SwymWatchProducts!['53085291676014']).toEqual({ id: 53085291676014, available: true });
			expect(swymWindow.SwymWatchProducts!['14908638822766']).toEqual({ '53085291676014': { id: 53085291676014, available: true } });
			// the product has no Snap variants, so no variant level entry is registered for it
			expect(swymWindow.SwymProductVariants!['53085291676014']).toBeUndefined();
		});

		it('coerces numeric strings for variant prices and quantities', async () => {
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const product = fakeProduct(
				{ uid: '100', url: '/products/plain-tee' },
				{
					variants: {
						data: [
							{
								mappings: { core: { uid: '300', price: '8.5', msrp: '' } },
								attributes: { title: 'Small', quantity: '5' },
								options: {},
								available: true,
							},
						],
					},
				}
			);

			await afterStore(controller, [product]);

			expect(swymWindow.SwymProductVariants!['300']).toEqual({
				empi: 100,
				epi: 300,
				du: 'http://localhost/products/plain-tee',
				dt: undefined,
				iu: undefined,
				pr: 8.5,
				op: undefined,
				stk: 5,
				variants: [{ Small: 300 }],
			});
			expect(swymWindow.SwymWatchProducts!['300']).toEqual({ id: 300, available: true, inventory_quantity: 5, title: 'Small' });
		});

		it('merges into existing Swym maps instead of replacing them', async () => {
			swymWindow.SwymViewProducts = { 'theme-product': { empi: 1 } };
			swymWindow.SwymProductVariants = { '1': { epi: 1 } };
			swymWindow.SwymWatchProducts = { '1': { id: 1, available: true } };

			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			await controller.search();

			expect(swymWindow.SwymViewProducts['theme-product']).toEqual({ empi: 1 });
			expect(swymWindow.SwymProductVariants['1']).toEqual({ epi: 1 });
			expect(swymWindow.SwymWatchProducts['1']).toEqual({ id: 1, available: true });
			expect(swymWindow.SwymViewProducts['8318690263298']).toBeDefined();
		});
	});

	describe('BigCommerce composite ids', () => {
		it('takes the variant id from a {productId}_{variantId} uid', () => {
			const product = fakeProduct({ uid: '19936_20252', parentId: '19936', url: '/godfather-otf-p/1gfas-am.htm' });

			expect(swymWishlistButtonProps(product)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_19936',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': '19936',
				'data-variant-id': '20252',
				'data-product-url': 'http://localhost/godfather-otf-p/1gfas-am.htm',
			});
		});

		it('uses the product id as the variant id of a product without options until it has been looked up', () => {
			const product = fakeProduct({ uid: '22585', parentId: '22585', url: '/flashbang/' });

			expect(swymWishlistButtonProps(product)).toEqual(expect.objectContaining({ 'data-product-id': '22585', 'data-variant-id': '22585' }));
		});

		it('keeps a uid whose prefix is not the product id as it is', () => {
			const product = fakeProduct({ uid: 'abc_123', parentId: '999', url: '/other/' });

			expect(swymWishlistButtonProps(product)).toEqual(expect.objectContaining({ 'data-product-id': '999', 'data-variant-id': 'abc_123' }));
		});

		it('registers composite ids as numbers, for the result and for its Snap variants', async () => {
			loadSwym({ bigCommerce: true });
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			renderButtons(['19936']);
			const variant = {
				mappings: { core: { uid: '19936_20253', url: '/godfather-otf-p/1gfas-am.htm', price: 20 } },
				options: { color: { value: 'Black' } },
				attributes: {},
				available: true,
			};
			const product = fakeProduct(
				{ uid: '19936_20252', parentId: '19936', url: '/godfather-otf-p/1gfas-am.htm', name: 'Godfather' },
				{ variants: { data: [variant] } }
			);

			await afterStore(controller, [product]);

			expect(swymWindow.SwymViewProducts!['19936']).toEqual(expect.objectContaining({ empi: 19936, epi: 20252 }));
			expect(swymWindow.SwymProductVariants!['20253']).toEqual(expect.objectContaining({ empi: 19936, epi: 20253 }));
			expect(swymWindow.SwymWatchProducts!['20253']).toEqual(expect.objectContaining({ id: 20253 }));
		});
	});

	describe('BigCommerce variant lookup', () => {
		// a BigCommerce product without options carries only its product id, which Swym rejects as a variant id, so its
		// base variant id is looked up through the storefront GraphQL API when the BigCommerce SDK is loaded
		const graphqlResponse = (products: Array<{ id: number; variants: Array<{ id: number; purchasable?: boolean }> }>) => ({
			ok: true,
			json: async () => ({
				data: {
					site: {
						products: {
							edges: products.map((product) => ({
								node: {
									entityId: product.id,
									variants: {
										edges: product.variants.map((variant) => ({ node: { entityId: variant.id, isPurchasable: variant.purchasable !== false } })),
									},
								},
							})),
						},
					},
				},
			}),
		});

		let fetchMock: jest.Mock;
		// only the lookup's own requests - the controllers' beacon tracker also sends through fetch
		const graphqlCalls = () => fetchMock.mock.calls.filter(([url]) => String(url).endsWith('/graphql'));

		beforeEach(() => {
			fetchMock = jest.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
			(global as any).fetch = fetchMock;
		});

		afterEach(() => {
			delete (global as any).fetch;
		});

		it('looks up the variant ids of products without options before binding', async () => {
			fetchMock.mockResolvedValue(
				graphqlResponse([
					{ id: 8937, variants: [{ id: 6438 }] },
					{ id: 583, variants: [{ id: 294, purchasable: false }, { id: 295 }] },
				])
			);
			const swat = loadSwym({ bigCommerce: true });
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, bigCommerce: { token: 'storefront-token' } });
			renderButtons(['8937', '583', '19936']);
			const results = [
				fakeProduct({ uid: '8937', parentId: '8937', url: '/16-oz-square-juice-bottles-pet/' }),
				fakeProduct({ uid: '583', url: '/compostable-lids/' }),
				// a product with options already carries its variant id
				fakeProduct({ uid: '19936_20252', parentId: '19936', url: '/godfather/' }),
			];

			await afterStore(controller, results);
			await flush();

			expect(graphqlCalls()).toHaveLength(1);
			const [url, init] = graphqlCalls()[0];
			expect(url).toBe('http://localhost/graphql');
			expect(init.method).toBe('POST');
			expect(init.headers).toEqual({ 'Content-Type': 'application/json', Authorization: 'Bearer storefront-token' });
			expect(JSON.parse(init.body).variables).toEqual({ ids: [8937, 583] });

			expect(swymWindow.SwymViewProducts!['8937']).toEqual(expect.objectContaining({ empi: 8937, epi: 6438 }));
			// the first purchasable variant is used
			expect(swymWindow.SwymViewProducts!['583']).toEqual(expect.objectContaining({ empi: 583, epi: 295 }));
			expect(swymWindow.SwymViewProducts!['19936']).toEqual(expect.objectContaining({ empi: 19936, epi: 20252 }));
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			// the helper picks the looked up variant id up on later renders
			expect(swymWishlistButtonProps(results[0])).toEqual(expect.objectContaining({ 'data-product-id': '8937', 'data-variant-id': '6438' }));
		});

		it('looks each product up once per page', async () => {
			fetchMock.mockResolvedValue(graphqlResponse([{ id: 101, variants: [{ id: 1001 }] }]));
			loadSwym({ bigCommerce: true });
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, bigCommerce: { token: 'storefront-token' } });
			renderButtons(['101']);
			const results = [fakeProduct({ uid: '101', url: '/one' })];

			await afterStore(controller, results);
			await flush();
			await afterStore(controller, results);
			await flush();

			expect(graphqlCalls()).toHaveLength(1);
			expect(swymWindow.SwymViewProducts!['101'].epi).toBe(1001);
		});

		it('falls back to the token the Swym SDK or its page embed exposes', async () => {
			fetchMock.mockResolvedValue(graphqlResponse([{ id: 201, variants: [{ id: 2001 }] }]));
			const swat = loadSwym({ bigCommerce: true });
			(swat as any).platform = { apiToken: 'sdk-token' };
			swymWindow.swymJSObject = { apiToken: 'embed-token' };
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			renderButtons(['201']);

			await afterStore(controller, [fakeProduct({ uid: '201', url: '/two' })]);
			await flush();
			expect(graphqlCalls()[0][1].headers.Authorization).toBe('Bearer sdk-token');

			// the page embed's token is used when the SDK does not expose one
			fetchMock.mockResolvedValue(graphqlResponse([{ id: 202, variants: [{ id: 2002 }] }]));
			delete (swat as any).platform;
			renderButtons(['202']);
			await afterStore(controller, [fakeProduct({ uid: '202', url: '/two-b' })]);
			await flush();
			expect(graphqlCalls()[1][1].headers.Authorization).toBe('Bearer embed-token');
		});

		it('warns once and still binds when no token is available', async () => {
			const swat = loadSwym({ bigCommerce: true });
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });
			renderButtons(['301']);
			const results = [fakeProduct({ uid: '301', url: '/three' })];

			await afterStore(controller, results);
			await flush();
			await afterStore(controller, results);
			await flush();

			expect(graphqlCalls()).toHaveLength(0);
			expect(warnSpy).toHaveBeenCalledTimes(1);
			expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('No BigCommerce Storefront API token'));
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(swymWindow.SwymViewProducts!['301'].epi).toBe(301);
		});

		it('warns once and still binds when the lookup fails', async () => {
			fetchMock.mockResolvedValue({ ok: false, status: 401, json: async () => ({}) });
			const swat = loadSwym({ bigCommerce: true });
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true, bigCommerce: { token: 'storefront-token' } });
			renderButtons(['401']);
			const results = [fakeProduct({ uid: '401', url: '/four' })];

			await afterStore(controller, results);
			await flush();
			await afterStore(controller, results);
			await flush();

			expect(warnSpy).toHaveBeenCalledTimes(1);
			expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Looking up BigCommerce variant ids failed'), expect.any(Error));
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
		});

		it('does not look up products that already carry a variant id', async () => {
			loadSwym({ bigCommerce: true });
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, bigCommerce: { token: 'storefront-token' } });
			renderButtons(['19936']);

			await afterStore(controller, [fakeProduct({ uid: '19936_20252', parentId: '19936', url: '/godfather/' })]);
			await flush();

			expect(graphqlCalls()).toHaveLength(0);
		});

		it('does not look up variants with the Shopify SDK', async () => {
			loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, bigCommerce: { token: 'storefront-token' } });
			renderButtons(['501']);

			await afterStore(controller, [fakeProduct({ uid: '501', url: '/five' })]);
			await flush();

			expect(graphqlCalls()).toHaveLength(0);
			expect(swymWindow.SwymViewProducts!['501'].epi).toBe(501);
		});
	});

	describe('button initialization', () => {
		it('initializes the buttons of the results inside their common container once Swym loads', async () => {
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const grid = renderButtons(['8318690263298', '8318574559490']);
			// a Swym button elsewhere on the page (e.g. the theme's own) must not pull the container up
			document.body.insertAdjacentHTML(
				'beforeend',
				'<button id="theme" data-swaction="addToWishlist" data-with-epi="true" data-product-id="999"></button>'
			);

			await controller.search();
			await flush();

			// the Swym SDK has not loaded yet
			expect(grid.hasAttribute('data-ss-swym-wishlist')).toBe(false);

			const swat = loadSwym();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(swat.initializeActionButtons).toHaveBeenCalledWith(CONTAINER_SELECTOR);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
			expect(document.querySelector(CONTAINER_SELECTOR)).toBe(grid);
			expect(document.body.hasAttribute('data-ss-swym-wishlist')).toBe(false);
		});

		it('initializes immediately when Swym has already loaded', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			renderButtons(['8318690263298']);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(swat.initializeActionButtons).toHaveBeenCalledWith(CONTAINER_SELECTOR);
		});

		it('waits for the buttons to render', async () => {
			jest.useFakeTimers();
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			await controller.search();
			await jest.advanceTimersByTimeAsync(0);
			expect(swat.initializeActionButtons).not.toHaveBeenCalled();

			const grid = renderButtons(['8318690263298', '8318574559490']);
			// found on the next poll
			await jest.advanceTimersByTimeAsync(100);

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it('stops polling for a superseded search and does not warn for it', async () => {
			jest.useFakeTimers();
			const swat = loadSwym();
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });

			// no buttons render for the first results
			await controller.search();
			await jest.advanceTimersByTimeAsync(100);
			expect(swat.initializeActionButtons).not.toHaveBeenCalled();

			// a second search returns a different product, whose button does render
			const other = fakeProduct({ uid: '100', url: '/products/plain-tee' });
			renderButtons(['100']);
			await afterStore(controller, [other]);
			await jest.advanceTimersByTimeAsync(0);
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			// long past the point where the first search's polling would have given up
			await jest.advanceTimersByTimeAsync(10000);
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(warnSpy).not.toHaveBeenCalled();
		});

		it('initializes again after each search, moving the tag when the container is replaced', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const firstGrid = renderButtons(['8318690263298', '8318574559490']);
			await controller.search();
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			firstGrid.remove();
			const secondGrid = renderButtons(['8318690263298', '8318574559490']);
			await afterStore(controller);
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(firstGrid.hasAttribute('data-ss-swym-wishlist')).toBe(false);
			expect(secondGrid.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it('only matches buttons rendered for the products in the results', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const grid = renderButtons(['not-in-results']);
			document.body.insertAdjacentHTML(
				'beforeend',
				'<div id="other"><button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318690263298"><span class="swym-wishlist-cta">Add</span></button></div>'
			);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.hasAttribute('data-ss-swym-wishlist')).toBe(false);
			expect(document.getElementById('other')!.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it('also matches buttons rendered without data-with-epi', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const grid = document.createElement('div');
			grid.innerHTML =
				'<button data-swaction="addToWishlist" data-product-id="8318690263298"><span class="swym-wishlist-cta">Add</span></button><button data-swaction="addToWishlist" data-product-id="8318574559490"><span class="swym-wishlist-cta">Add</span></button>';
			document.body.appendChild(grid);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it('removes data-with-epi from the buttons before binding when the BigCommerce SDK is loaded', async () => {
			const swat = loadSwym({ bigCommerce: true });
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();

			const buttons = Array.from(grid.querySelectorAll('button'));
			expect(buttons).toHaveLength(2);
			// the BigCommerce SDK binds a `data-with-epi` button with its ids alone and no product URL, which its API
			// rejects - without the attribute it binds through the registered product data instead
			buttons.forEach((button) => {
				expect(button.hasAttribute('data-with-epi')).toBe(false);
				expect(button.getAttribute('data-product-id')).toBeTruthy();
				expect(button.getAttribute('data-variant-id')).toBeTruthy();
			});
			expect(swymWindow.SwymViewProducts!['8318690263298'].du).toMatch(/^http:\/\/localhost\/products\/fort-chino-pants/);
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
		});

		it('keeps data-with-epi on the buttons with the Shopify SDK', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			grid.querySelectorAll('button').forEach((button) => expect(button.getAttribute('data-with-epi')).toBe('true'));
		});

		it('registers the product data again before rebinding when the variant of a button changes', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();
			const epi = Number(products(controller)[0].display.mappings.core!.uid);
			expect(swymWindow.SwymViewProducts!['8318690263298'].epi).toBe(epi);

			// stale registered data is what Swym would bind with on BigCommerce, where it reads the registered product
			swymWindow.SwymViewProducts!['8318690263298'].epi = 'stale';
			grid.querySelector('button')!.setAttribute('data-variant-id', 'another-variant');
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(swymWindow.SwymViewProducts!['8318690263298'].epi).toBe(epi);
		});

		it('warns once with the BigCommerce SDK when buttons have no swym-wishlist-cta element, and still binds them', async () => {
			const swat = loadSwym({ bigCommerce: true });
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });

			const grid = document.createElement('div');
			grid.innerHTML =
				'<button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318690263298" data-variant-id="v-1"></button>' +
				'<button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318574559490" data-variant-id="v-2"><span class="swym-wishlist-cta">Add</span></button>';
			document.body.appendChild(grid);

			await controller.search();
			await flush();

			// Swym's BigCommerce SDK throws while binding a button without the element, so the markup is flagged
			expect(warnSpy).toHaveBeenCalledTimes(1);
			expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("Wishlist buttons without a '.swym-wishlist-cta' element found"));
			// the buttons are still handed to Swym, which binds the ones that have the element
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			await afterStore(controller);
			await flush();

			expect(warnSpy).toHaveBeenCalledTimes(1);
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
		});

		it('does not warn about the swym-wishlist-cta element with the Shopify SDK', async () => {
			const swat = loadSwym();
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });

			const grid = document.createElement('div');
			grid.innerHTML =
				'<button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318690263298" data-variant-id="v-1"></button>' +
				'<button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318574559490" data-variant-id="v-2"></button>';
			document.body.appendChild(grid);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(warnSpy).not.toHaveBeenCalled();
		});

		it('warns once when no buttons render for the results', async () => {
			jest.useFakeTimers();
			const swat = loadSwym();
			const controller = createController();
			const warnSpy = jest.spyOn(controller.log, 'warn').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });

			await controller.search();
			await jest.advanceTimersByTimeAsync(10000);

			expect(swat.initializeActionButtons).not.toHaveBeenCalled();
			expect(warnSpy).toHaveBeenCalledTimes(1);
			expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('[swymWishlist] No wishlist buttons found'));

			await afterStore(controller);
			await jest.advanceTimersByTimeAsync(10000);

			expect(warnSpy).toHaveBeenCalledTimes(1);
		});

		it('re-initializes the container when the variant of a button changes', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			const button = grid.querySelector('button')!;

			// same value and unrelated attributes do not trigger a re-initialization
			button.setAttribute('data-variant-id', button.getAttribute('data-variant-id')!);
			button.setAttribute('class', 'swym-added');
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);

			button.setAttribute('data-variant-id', 'another-variant');
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(swat.initializeActionButtons).toHaveBeenLastCalledWith(CONTAINER_SELECTOR);
		});

		it('stops observing a container that has been replaced', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const firstGrid = renderButtons(['8318690263298']);
			await controller.search();
			await flush();

			firstGrid.remove();
			renderButtons(['8318690263298']);
			await afterStore(controller);
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);

			firstGrid.querySelector('button')!.setAttribute('data-variant-id', 'another-variant');
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
		});

		it('only looks for buttons inside the elements the controller renders into', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			document.body.innerHTML = '<div id="search"></div><div id="recs"></div>';
			controller.createTargeter({ selector: '#search' }, () => {});
			const grid = renderButtons(['8318690263298', '8318574559490'], document.getElementById('search')!);
			// a recommendation rail showing one of the same products must not pull the container up
			const rail = renderButtons(['8318690263298'], document.getElementById('recs')!);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
			expect(rail.hasAttribute('data-ss-swym-wishlist')).toBe(false);
			expect(document.body.hasAttribute('data-ss-swym-wishlist')).toBe(false);
		});

		it('binds the buttons of each element the controller renders into separately', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			// two disjoint targets whose only common ancestor is the body, which also holds a theme wishlist button
			document.body.innerHTML = '<div id="top"></div><div id="theme"></div><div id="bottom"></div>';
			controller.createTargeter({ selector: '#top' }, () => {});
			controller.createTargeter({ selector: '#bottom' }, () => {});
			const top = renderButtons(['8318690263298', '8318574559490'], document.getElementById('top')!);
			const bottom = renderButtons(['8318568333570', '8318690263298'], document.getElementById('bottom')!);
			const theme = renderButtons(['8318690263298'], document.getElementById('theme')!);

			await controller.search();
			await flush();

			expect(top.getAttribute('data-ss-swym-wishlist')).toBe('search');
			expect(bottom.getAttribute('data-ss-swym-wishlist')).toBe('search__1');
			expect(swat.initializeActionButtons.mock.calls).toEqual([['[data-ss-swym-wishlist="search"]'], ['[data-ss-swym-wishlist="search__1"]']]);
			// neither the body nor the theme's button is ever inside a bound container
			expect(document.body.hasAttribute('data-ss-swym-wishlist')).toBe(false);
			expect(theme.closest('[data-ss-swym-wishlist]')).toBeNull();
		});

		it('rebinds only the container whose button changed variant', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			document.body.innerHTML = '<div id="top"></div><div id="bottom"></div>';
			controller.createTargeter({ selector: '#top' }, () => {});
			controller.createTargeter({ selector: '#bottom' }, () => {});
			renderButtons(['8318690263298', '8318574559490'], document.getElementById('top')!);
			const bottom = renderButtons(['8318568333570', '8318690263298'], document.getElementById('bottom')!);

			await controller.search();
			await flush();
			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);

			bottom.querySelector('button')!.setAttribute('data-variant-id', 'another-variant');
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(3);
			expect(swat.initializeActionButtons).toHaveBeenLastCalledWith('[data-ss-swym-wishlist="search__1"]');
		});

		it('looks beside the targeted element when the component is injected next to it', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			document.body.innerHTML = '<form><input id="query" /></form><div id="elsewhere"></div>';
			let injected: Element | undefined;
			controller.createTargeter(
				{ selector: '#query', inject: { action: 'after', element: () => document.createElement('div') } },
				(_target, elem) => {
					injected = elem;
				}
			);
			expect(injected!.previousElementSibling).toBe(document.getElementById('query'));

			const dropdown = renderButtons(['8318690263298', '8318574559490'], injected!);
			const decoy = renderButtons(['8318690263298', '8318574559490'], document.getElementById('elsewhere')!);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(dropdown.getAttribute('data-ss-swym-wishlist')).toBe('search');
			expect(decoy.hasAttribute('data-ss-swym-wishlist')).toBe(false);
		});

		it('sets the tag again before each initialization when another controller has retagged the container', async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');

			// a recommendation controller whose buttons share the container tags it with its own id
			grid.setAttribute('data-ss-swym-wishlist', 'recs');
			grid.querySelector('button')!.setAttribute('data-variant-id', 'another-variant');
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(swat.initializeActionButtons).toHaveBeenLastCalledWith(CONTAINER_SELECTOR);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');

			grid.setAttribute('data-ss-swym-wishlist', 'recs');
			await afterStore(controller);
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(3);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it("leaves another controller's tag in place when its own container is replaced", async () => {
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const firstGrid = renderButtons(['8318690263298', '8318574559490']);
			await controller.search();
			await flush();
			expect(firstGrid.getAttribute('data-ss-swym-wishlist')).toBe('search');

			// the first grid now only holds another controller's buttons, tagged with its id
			firstGrid.innerHTML = '';
			firstGrid.setAttribute('data-ss-swym-wishlist', 'recs');
			const secondGrid = renderButtons(['8318690263298', '8318574559490']);
			await afterStore(controller);
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(2);
			expect(firstGrid.getAttribute('data-ss-swym-wishlist')).toBe('recs');
			expect(secondGrid.getAttribute('data-ss-swym-wishlist')).toBe('search');
		});

		it('logs an error thrown by the Swym SDK through the controller logger', async () => {
			const swat = loadSwym();
			const error = new Error('data-product-url missing');
			swat.initializeActionButtons.mockImplementation(() => {
				throw error;
			});
			const controller = createController();
			const errorSpy = jest.spyOn(controller.log, 'error').mockImplementation(() => {});
			pluginSwymWishlist(controller, { enabled: true });
			const grid = renderButtons(['8318690263298', '8318574559490']);

			await controller.search();
			await flush();

			expect(errorSpy).toHaveBeenCalledTimes(1);
			expect(errorSpy).toHaveBeenCalledWith('[swymWishlist] The Swym SDK failed to initialize the wishlist buttons.', error);

			// the variant observer logs the same way
			grid.querySelector('button')!.setAttribute('data-variant-id', 'another-variant');
			await flush();
			expect(errorSpy).toHaveBeenCalledTimes(2);
		});

		it('does not halt the event chain', async () => {
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true });

			const downstreamHandler = jest.fn(async (_payload, next) => {
				await next();
			});
			controller.on('afterStore', downstreamHandler);

			await controller.search();

			expect(downstreamHandler).toHaveBeenCalledTimes(1);
		});
	});
});
