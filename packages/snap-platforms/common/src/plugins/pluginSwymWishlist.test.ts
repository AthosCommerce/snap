import { pluginSwymWishlist, swymWishlistButtonProps, swymWishlistResolver } from './pluginSwymWishlist';
import type { SwymWishlistResolver } from './pluginSwymWishlist';
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

const renderButtons = (ids: string[], parent: Element = document.body): HTMLElement => {
	const grid = document.createElement('div');
	grid.className = 'ss__results';
	grid.innerHTML = ids
		.map(
			(id) =>
				`<div class="ss__result"><button data-swaction="addToWishlist" data-with-epi="true" data-product-id="${id}" data-variant-id="v-${id}" data-product-url="http://localhost/products/${id}"></button></div>`
		)
		.join('');
	parent.appendChild(grid);
	return grid;
};

// simulates the Swym SDK finishing its load: pending callbacks run, and later pushes run immediately
const loadSwym = (): SwymMock => {
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

	describe('swymWishlistResolver', () => {
		it('uses the uid as the product id and the active variant for a product-level feed with Snap variants', async () => {
			const controller = createController();
			await controller.search();
			const product = products(controller)[0];
			const activeVariantId = String(product.variants!.active!.mappings.core!.uid);

			expect(product.mappings.core!.parentId).toBeUndefined();
			expect(activeVariantId).not.toBe(product.mappings.core!.uid);

			expect(swymWishlistResolver.product(product)).toEqual({
				productId: '8318690263298',
				variantId: activeVariantId,
				url: 'http://localhost/products/fort-chino-pants',
			});
		});

		it('uses the parent id as the product and the uid as the variant for a variant-level feed', async () => {
			const controller = createController('8uyt2m', 'variants');
			await controller.search();
			const product = products(controller)[0];

			expect(product.variants).toBeUndefined();

			// the core url is used without its variant query
			expect(swymWishlistResolver.product(product)).toEqual({
				productId: '14908638822766',
				variantId: '53085291676014',
				url: 'http://localhost/products/red-gloves',
			});
		});

		it('uses the product id as the variant id for a product without variants', () => {
			const product = { mappings: { core: { uid: 100, url: 'plain-tee' } }, attributes: {} } as unknown as Product;

			expect(swymWishlistResolver.product(product)).toEqual({ productId: '100', variantId: '100', url: 'http://localhost/plain-tee' });
		});

		it('keeps an absolute core url as is', () => {
			const product = {
				mappings: { core: { uid: '100', url: 'https://shop.example.com/products/plain-tee?variant=200' } },
				attributes: {},
			} as unknown as Product;

			expect(swymWishlistResolver.product(product)!.url).toBe('https://shop.example.com/products/plain-tee');
		});

		it('returns undefined when the product id or the product url cannot be resolved', () => {
			const noId = { mappings: { core: { url: '/products/plain-tee' } }, attributes: {} } as unknown as Product;
			const noUrl = { mappings: { core: { uid: '100' } }, attributes: {} } as unknown as Product;

			expect(swymWishlistResolver.product(noId)).toBeUndefined();
			expect(swymWishlistResolver.product(noUrl)).toBeUndefined();
		});
	});

	describe('swymWishlistButtonProps', () => {
		it('builds the button attributes from the resolved ids', async () => {
			const controller = createController();
			await controller.search();
			const product = products(controller)[0];
			const activeVariantId = String(product.variants!.active!.mappings.core!.uid);

			expect(swymWishlistButtonProps(product)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_8318690263298',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': '8318690263298',
				'data-variant-id': activeVariantId,
				'data-product-url': 'http://localhost/products/fort-chino-pants',
			});
		});

		it('uses the given resolver', () => {
			const resolver: SwymWishlistResolver = { product: () => ({ productId: 'p', variantId: 'v', url: 'https://shop.example.com/p' }) };

			expect(swymWishlistButtonProps({} as Product, resolver)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_p',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': 'p',
				'data-variant-id': 'v',
				'data-product-url': 'https://shop.example.com/p',
			});
		});

		it('returns undefined when the product cannot be resolved', () => {
			expect(swymWishlistButtonProps({ mappings: { core: {} }, attributes: {} } as unknown as Product)).toBeUndefined();
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
				du: 'http://localhost/products/fort-chino-pants',
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
			// the core mappings resolver registers no extra keys
			expect(swymWindow.SwymViewProducts!['fort-chino-pants']).toBeUndefined();

			expect(swymWindow.SwymProductVariants![variantId]).toEqual({
				empi: 8318690263298,
				epi: variantId,
				// the variant's own core url, without its query
				du: 'http://localhost/products/fort-chino-pants',
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
				du: 'http://localhost/products/red-gloves',
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
			const product = {
				type: 'product',
				mappings: { core: { uid: '100', url: '/products/plain-tee' } },
				attributes: {},
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
			} as unknown as Product;

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

		it('registers the product data under the extra keys and with the variant urls of the resolver', async () => {
			const resolver: SwymWishlistResolver = {
				product: (product) => {
					const resolved = swymWishlistResolver.product(product);
					return resolved && { ...resolved, keys: [`custom-${resolved.productId}`] };
				},
				variantUrl: (_, { variantId, product }) => `${product.url}#${variantId}`,
			};
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, resolver });

			await controller.search();

			const variantId = String(products(controller)[0].variants!.data[1].mappings.core!.uid);

			expect(swymWindow.SwymViewProducts!['custom-8318690263298']).toBe(swymWindow.SwymViewProducts!['8318690263298']);
			expect(swymWindow.SwymWatchProducts!['custom-8318690263298']).toBe(swymWindow.SwymWatchProducts!['8318690263298']);
			expect(swymWindow.SwymProductVariants![variantId].du).toBe(`http://localhost/products/fort-chino-pants#${variantId}`);
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
			const other = {
				type: 'product',
				mappings: { core: { uid: '100', url: '/products/plain-tee' } },
				attributes: {},
			} as unknown as Product;
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
				'<div id="other"><button data-swaction="addToWishlist" data-with-epi="true" data-product-id="8318690263298"></button></div>'
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
				'<button data-swaction="addToWishlist" data-product-id="8318690263298"></button><button data-swaction="addToWishlist" data-product-id="8318574559490"></button>';
			document.body.appendChild(grid);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
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

		it('matches buttons by the product id of the configured resolver', async () => {
			const resolver: SwymWishlistResolver = {
				product: (product) => {
					const resolved = swymWishlistResolver.product(product);
					return resolved && { ...resolved, productId: `custom-${resolved.productId}` };
				},
			};
			const swat = loadSwym();
			const controller = createController();
			pluginSwymWishlist(controller, { enabled: true, resolver });
			const grid = renderButtons(['custom-8318690263298', 'custom-8318574559490']);

			await controller.search();
			await flush();

			expect(swat.initializeActionButtons).toHaveBeenCalledTimes(1);
			expect(grid.getAttribute('data-ss-swym-wishlist')).toBe('search');
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
