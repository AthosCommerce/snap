import { pluginShopifySwymWishlist, swymWishlistButtonProps, swymWishlistResolver } from './pluginShopifySwymWishlist';
import { MockClient } from '@athoscommerce/snap-shared';
import { Product, SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { SearchController } from '@athoscommerce/snap-controller';

type SwymWindow = Window & {
	SwymCallbacks?: Array<(swat: unknown) => void>;
	SwymViewProducts?: Record<string, any>;
	SwymProductVariants?: Record<string, any>;
	SwymWatchProducts?: Record<string, any>;
};

const swymWindow = window as SwymWindow;

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

describe('shopify/pluginShopifySwymWishlist', () => {
	beforeEach(() => {
		delete swymWindow.SwymCallbacks;
		delete swymWindow.SwymViewProducts;
		delete swymWindow.SwymProductVariants;
		delete swymWindow.SwymWatchProducts;
	});

	describe('swymWishlistResolver', () => {
		it('uses the product id, the active variant and the handle for a product-level feed with Snap variants', async () => {
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
				keys: ['fort-chino-pants'],
			});
		});

		it('uses the parent id as the product and the uid as the variant for a variant-level feed', async () => {
			const controller = createController('8uyt2m', 'variants');
			await controller.search();
			const product = products(controller)[0];

			expect(product.attributes.handle).toBeUndefined();
			expect(product.variants).toBeUndefined();

			// no handle in this feed - the core url is used without its variant query
			expect(swymWishlistResolver.product(product)).toEqual({
				productId: '14908638822766',
				variantId: '53085291676014',
				url: 'http://localhost/products/red-gloves',
				keys: [],
			});
		});

		it('falls back to ss_id for the variant of a product-level feed without Snap variants', () => {
			const product = {
				mappings: { core: { uid: '100', url: '/products/plain-tee' } },
				attributes: { ss_id: 200, handle: 'plain-tee' },
			} as unknown as Product;

			expect(swymWishlistResolver.product(product)).toEqual({
				productId: '100',
				variantId: '200',
				url: 'http://localhost/products/plain-tee',
				keys: ['plain-tee'],
			});
		});

		it('keeps an absolute core url as is', () => {
			const product = {
				mappings: { core: { uid: '100', url: 'https://shop.example.com/products/plain-tee?variant=200' } },
				attributes: { ss_id: '200' },
			} as unknown as Product;

			expect(swymWishlistResolver.product(product)!.url).toBe('https://shop.example.com/products/plain-tee');
		});

		it('returns undefined when the variant id or the product url cannot be resolved', () => {
			const noVariant = { mappings: { core: { uid: '100', url: '/products/plain-tee' } }, attributes: {} } as unknown as Product;
			const noUrl = { mappings: { core: { uid: '100' } }, attributes: { ss_id: '200' } } as unknown as Product;

			expect(swymWishlistResolver.product(noVariant)).toBeUndefined();
			expect(swymWishlistResolver.product(noUrl)).toBeUndefined();
		});

		it('selects a variant on the product page through the variant query parameter', () => {
			const product = { productId: '100', variantId: '200', url: 'http://localhost/products/plain-tee' };

			expect(swymWishlistResolver.variantUrl!({} as any, { variantId: '300', product })).toBe('http://localhost/products/plain-tee?variant=300');
		});
	});

	describe('swymWishlistButtonProps', () => {
		it('builds the button attributes with the Shopify ids', async () => {
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
	});

	describe('plugin', () => {
		it('is disabled by default (opt-in)', () => {
			const controller = createController();
			const onEventSpy = jest.spyOn(controller.eventManager, 'on');

			pluginShopifySwymWishlist(controller);

			expect(onEventSpy).not.toHaveBeenCalled();
		});

		it('registers the product data by handle, with variant urls selecting the variant', async () => {
			const controller = createController();
			pluginShopifySwymWishlist(controller, { enabled: true });

			await controller.search();

			const product = products(controller)[0];
			const variantId = String(product.variants!.data[1].mappings.core!.uid);

			expect(swymWindow.SwymViewProducts!['fort-chino-pants']).toBe(swymWindow.SwymViewProducts!['8318690263298']);
			expect(swymWindow.SwymWatchProducts!['fort-chino-pants']).toBe(swymWindow.SwymWatchProducts!['8318690263298']);
			expect(swymWindow.SwymProductVariants![variantId].du).toBe(`http://localhost/products/fort-chino-pants?variant=${variantId}`);
		});

		it('uses a resolver given in the config instead of the Shopify one', async () => {
			const controller = createController();
			pluginShopifySwymWishlist(controller, {
				enabled: true,
				resolver: { product: () => ({ productId: 'custom', variantId: 'v', url: 'https://shop.example.com/custom' }) },
			});

			await controller.search();

			expect(swymWindow.SwymViewProducts!['custom']).toBeDefined();
			expect(swymWindow.SwymViewProducts!['fort-chino-pants']).toBeUndefined();
		});
	});
});
