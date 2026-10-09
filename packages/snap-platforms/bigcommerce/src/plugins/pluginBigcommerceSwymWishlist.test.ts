import { pluginBigcommerceSwymWishlist, swymWishlistButtonProps, swymWishlistResolver } from './pluginBigcommerceSwymWishlist';
import { swymWishlistResolver as coreMappingsResolver } from '../../../common/src/plugins/pluginSwymWishlist';
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
const searchConfig = { id: 'search', globals: { filters: [] } };

// function to recreate fresh services for each test (otherwise globals are shared)
const createController = (): SearchController => {
	const globals = { siteId: '8uyt2m' };
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

// fires afterStore with results standing in for a BigCommerce feed
const afterStore = (controller: SearchController, results: Product[]) =>
	controller.eventManager.fire('afterStore', {
		controller: { store: { results }, log: controller.log, targeters: controller.targeters },
		request: {},
		response: {},
	});

// a BigCommerce feed carries the product entity id in `uid` and the storefront path in `url`
const chinoPants = {
	type: 'product',
	mappings: { core: { uid: 123, url: '/chino-pants/', name: 'Chino Pants', price: '54.99' } },
	attributes: {},
	variants: { active: { mappings: { core: { uid: 456 } } }, data: [] },
} as unknown as Product;

describe('bigcommerce/pluginBigcommerceSwymWishlist', () => {
	beforeEach(() => {
		delete swymWindow.SwymCallbacks;
		delete swymWindow.SwymViewProducts;
		delete swymWindow.SwymProductVariants;
		delete swymWindow.SwymWatchProducts;
	});

	describe('swymWishlistResolver', () => {
		it('is the core mappings resolver', () => {
			expect(swymWishlistResolver).toBe(coreMappingsResolver);
		});

		it('resolves the product entity id, the active variant entity id and the absolute storefront url', () => {
			expect(swymWishlistResolver.product(chinoPants)).toEqual({ productId: '123', variantId: '456', url: 'http://localhost/chino-pants/' });
		});

		it('uses the product entity id as the variant id without Snap variants', () => {
			const product = { ...chinoPants, variants: undefined } as unknown as Product;

			expect(swymWishlistResolver.product(product)).toEqual({ productId: '123', variantId: '123', url: 'http://localhost/chino-pants/' });
		});
	});

	describe('swymWishlistButtonProps', () => {
		it('builds the button attributes with the entity ids', () => {
			expect(swymWishlistButtonProps(chinoPants)).toEqual({
				className: 'swym-button swym-add-to-wishlist-view-product product_123',
				'data-swaction': 'addToWishlist',
				'data-with-epi': 'true',
				'data-product-id': '123',
				'data-variant-id': '456',
				'data-product-url': 'http://localhost/chino-pants/',
			});
		});
	});

	describe('plugin', () => {
		it('is disabled by default (opt-in)', () => {
			const controller = createController();
			const onEventSpy = jest.spyOn(controller.eventManager, 'on');

			pluginBigcommerceSwymWishlist(controller);

			expect(onEventSpy).not.toHaveBeenCalled();
		});

		it('registers the results by entity id after a search', async () => {
			const controller = createController();
			pluginBigcommerceSwymWishlist(controller, { enabled: true });

			await afterStore(controller, [chinoPants]);

			expect(swymWindow.SwymViewProducts!['123']).toEqual({
				empi: 123,
				epi: 456,
				du: 'http://localhost/chino-pants/',
				dt: 'Chino Pants',
				iu: undefined,
				pr: 54.99,
				op: undefined,
				stk: undefined,
				variants: [{ '': 456 }],
			});
			expect(swymWindow.SwymWatchProducts!['456']).toEqual({ id: 456, available: true });
		});

		it('uses a resolver given in the config instead', async () => {
			const controller = createController();
			pluginBigcommerceSwymWishlist(controller, {
				enabled: true,
				resolver: { product: () => ({ productId: 'custom', variantId: 'v', url: 'https://shop.example.com/custom' }) },
			});

			await afterStore(controller, [chinoPants]);

			expect(swymWindow.SwymViewProducts!['custom']).toBeDefined();
			expect(swymWindow.SwymViewProducts!['123']).toBeUndefined();
		});
	});
});
