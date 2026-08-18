import { QuickviewStore } from '@athoscommerce/snap-store-mobx';

import { QuickviewManager } from './QuickviewManager';

const services = () => {
	const store = new QuickviewStore({ id: 'quickview' });
	return { store };
};

// A stand-in for the controller that opened the quickview. The manager runs entirely on the
// opener's services: it fetches through its client, logs through its logger, fires the 'quickview'
// middleware on its event manager, reads its config and meta store, and delegates tracking and
// add-to-cart back to it.
const sourceController = (overrides: any = {}) =>
	({
		id: 'search',
		config: { id: 'search' },
		store: {},
		client: { products: jest.fn().mockResolvedValue({ variants: { data: [] } }) },
		log: { dev: jest.fn(), warn: jest.fn(), error: jest.fn() },
		eventManager: { fire: jest.fn().mockResolvedValue(undefined), on: jest.fn() },
		addToCart: jest.fn(),
		track: { product: { clickThrough: jest.fn(), click: jest.fn(), impression: jest.fn(), addToCart: jest.fn() } },
		...overrides,
	} as any);

// show() requires `mappings.core.parentId` (the id for the /v1/products request), so the
// helper always carries one — derived from the product id unless overridden.
const product = (id = 'p1', overrides: any = {}): any => ({ id, type: 'product', mappings: { core: { parentId: `${id}-parent` } }, ...overrides });

describe('QuickviewManager', () => {
	it('has type "quickview" and merges config defaults', () => {
		const manager = new QuickviewManager(services());
		expect(manager.type).toBe('quickview');
		expect(manager.config.id).toBe('quickview');

		const configured = new QuickviewManager(services(), { id: 'qv', settings: { quickview: { clone: false } } });
		expect(configured.config.id).toBe('qv');
		expect(configured.config.settings?.quickview?.clone).toBe(false);
	});

	it('creates its own store when none is passed', () => {
		const manager = new QuickviewManager({});
		expect(manager.store).toBeInstanceOf(QuickviewStore);
		expect(manager.store.isOpen).toBe(false);
	});

	it("opens loading, fetches the result's parent on the source controller client, fires the middleware, then updates the store", async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();
		const result = product('p1', { mappings: { core: { parentId: 'parent-1' } } });

		await manager.show(result, { controller });

		expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'parent-1' });
		expect(controller.eventManager.fire).toHaveBeenCalledWith('quickview', expect.objectContaining({ controller, result }));
		expect(manager.store.isOpen).toBe(true);
		expect(manager.store.loading).toBe(false);
	});

	it('records the opener as the source controller', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(product(), { controller });

		expect(manager.sourceController).toBe(controller);
	});

	it('skips the fetch when fetchProductData is false', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(product(), { controller, config: { fetchProductData: false } });

		expect(controller.client.products).not.toHaveBeenCalled();
	});

	it('fetches by result.mappings.core.parentId', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(product('child-1', { mappings: { core: { parentId: 'parent-9' } } }), { controller });
		expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'parent-9' });
	});

	it('warns and does nothing when the result has no mappings.core.parentId', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(product('lone-1', { mappings: { core: {} } }), { controller });

		expect(controller.log.warn).toHaveBeenCalledWith('No product provided to quickview');
		expect(controller.client.products).not.toHaveBeenCalled();
		expect(manager.store.isOpen).toBe(false);
	});

	it('warns and does nothing when no result is provided', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(undefined as any, { controller });

		expect(controller.log.warn).toHaveBeenCalledWith('No product provided to quickview');
		expect(controller.client.products).not.toHaveBeenCalled();
		expect(manager.store.isOpen).toBe(false);
	});

	it('does not re-point delegation to the caller of a rejected show()', async () => {
		const manager = new QuickviewManager(services());
		const opener = sourceController();
		const other = sourceController({ id: 'other', config: { id: 'other' } });

		await manager.show(product(), { controller: opener });
		await manager.show(undefined as any, { controller: other });

		expect(manager.sourceController).toBe(opener);
	});

	it('warns and does nothing when the result is not a product', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show({ id: 'b1', type: 'banner', mappings: { core: { parentId: 'b1-parent' } } } as any, { controller });

		expect(controller.log.warn).toHaveBeenCalledWith('No product provided to quickview');
		expect(manager.store.isOpen).toBe(false);
	});

	it('still opens when the products fetch fails, warning through the opener logger', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController({ client: { products: jest.fn().mockRejectedValue(new Error('network')) } });

		await manager.show(product(), { controller });

		expect(controller.log.warn).toHaveBeenCalledWith('Failed to load /v1/products for quickview', expect.any(Error));
		expect(manager.store.isOpen).toBe(true);
		expect(manager.store.loading).toBe(false);
	});

	it('underlays its own settings.quickview beneath the source controller config and the per-call config', async () => {
		const manager = new QuickviewManager(services(), {
			id: 'quickview',
			settings: { quickview: { displayFields: ['manager'], clone: false, imagesField: 'manager_images' } },
		});
		const controller = sourceController({ config: { id: 'search', settings: { quickview: { clone: true, imagesField: 'source_images' } } } });

		await manager.show(product(), { controller, config: { imagesField: 'call_images' } });

		// per-call wins over source, source wins over manager, manager-only keys survive
		expect(manager.store.quickviewConfig).toEqual(expect.objectContaining({ displayFields: ['manager'], clone: true, imagesField: 'call_images' }));
	});

	it('forwards the source controller meta data into the store update', async () => {
		const manager = new QuickviewManager(services());
		const meta = { data: { facets: [] } };
		const controller = sourceController({ store: { meta } });
		const update = jest.spyOn(manager.store, 'update');

		await manager.show(product(), { controller });

		// The raw meta data rides along for badge processing on the cloned Product. The store does
		// not retain it — facet-label consumers read meta off `sourceController.store.meta`.
		expect(update).toHaveBeenCalledWith(expect.objectContaining({ meta: meta.data }));
	});

	it('resets the store when the quickview middleware cancels', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController({ eventManager: { fire: jest.fn().mockRejectedValue(new Error('cancelled')), on: jest.fn() } });

		await manager.show(product(), { controller });

		expect(controller.log.warn).toHaveBeenCalledWith(`'quickview' middleware cancelled`);
		expect(manager.store.isOpen).toBe(false);
		expect(manager.store.loading).toBe(false);
	});

	it('surfaces a store error when the quickview middleware throws a non-cancel error', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController({ eventManager: { fire: jest.fn().mockRejectedValue(new Error('boom')), on: jest.fn() } });

		await manager.show(product(), { controller });

		expect(manager.store.error?.message).toBe(`'quickview' middleware error`);
		expect(manager.store.loading).toBe(false);
	});

	it('delegates addToCart to the originating controller', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		await manager.show(product(), { controller });

		const result = product();
		await manager.addToCart([result]);
		expect(controller.addToCart).toHaveBeenCalledWith([result], { quickView: true });
	});

	it("passes the originating controller's store config as storeConfig so the clone inherits settings.variants", async () => {
		const manager = new QuickviewManager(services());
		const updateSpy = jest.spyOn(manager.store, 'update');
		const storeConfig = { id: 'search', settings: { variants: { field: 'ss_variants' } } };
		const controller = sourceController({ store: { config: storeConfig } });

		await manager.show(product(), { controller });

		expect(updateSpy).toHaveBeenCalledWith(expect.objectContaining({ storeConfig }));
	});

	it('warns instead of throwing when addToCart is called with no originating controller', async () => {
		const manager = new QuickviewManager(services());
		await expect(manager.addToCart([product()])).resolves.toBeUndefined();
	});

	describe('track', () => {
		const setSource = async (manager: QuickviewManager, controller: any) => {
			await manager.show(product(), { controller });
		};

		it('delegates track.product.clickThrough to the originating controller with quickView: true', async () => {
			const manager = new QuickviewManager(services());
			const controller = sourceController();
			await setSource(manager, controller);

			const event = {} as MouseEvent;
			const result = product();
			manager.track.product.clickThrough(event, result);

			expect(controller.track.product.clickThrough).toHaveBeenCalledWith(event, result, { quickView: true });
		});

		it('delegates track.product.click to the originating controller with quickView: true', async () => {
			const manager = new QuickviewManager(services());
			const controller = sourceController();
			await setSource(manager, controller);

			const event = {} as MouseEvent;
			const result = product();
			manager.track.product.click(event, result);

			expect(controller.track.product.click).toHaveBeenCalledWith(event, result, { quickView: true });
		});

		it('delegates track.product.impression to the originating controller with quickView: true', async () => {
			const manager = new QuickviewManager(services());
			const controller = sourceController();
			await setSource(manager, controller);

			const result = product();
			manager.track.product.impression(result);

			expect(controller.track.product.impression).toHaveBeenCalledWith(result, { quickView: true });
		});

		it('delegates track.product.addToCart to the originating controller with quickView: true', async () => {
			const manager = new QuickviewManager(services());
			const controller = sourceController();
			await setSource(manager, controller);

			const result = product();
			manager.track.product.addToCart(result);

			expect(controller.track.product.addToCart).toHaveBeenCalledWith(result, { quickView: true });
		});

		it('warns instead of throwing when track methods are called with no originating controller', () => {
			const manager = new QuickviewManager(services());
			const result = product();

			expect(() => manager.track.product.clickThrough({} as MouseEvent, result)).not.toThrow();
			expect(() => manager.track.product.click({} as MouseEvent, result)).not.toThrow();
			expect(() => manager.track.product.impression(result)).not.toThrow();
			expect(() => manager.track.product.addToCart(result)).not.toThrow();
		});
	});

	it('out-of-order resolution shows the last-clicked product', async () => {
		const manager = new QuickviewManager(services());
		const controller = sourceController();

		let resolveA: (v: any) => void;
		let resolveB: (v: any) => void;
		controller.client.products = jest
			.fn()
			.mockImplementationOnce(() => new Promise((r) => (resolveA = r)))
			.mockImplementationOnce(() => new Promise((r) => (resolveB = r)));

		const callA = manager.show(product('prod-A'), { controller });
		const callB = manager.show(product('prod-B'), { controller });

		// B resolves first, then A resolves — A's continuation must be discarded.
		resolveB!({ variants: { data: [] } });
		resolveA!({ variants: { data: [] } });

		await Promise.all([callA, callB]);

		expect(manager.store.product!.id).toBe('prod-B');
		expect(manager.store.loading).toBe(false);
		expect(manager.store.isOpen).toBe(true);
	});

	it('superseded middleware error cannot clobber the active modal', async () => {
		const manager = new QuickviewManager(services());

		// Skip the /v1/products fetch so both calls reach eventManager.fire in a
		// predictable order: A fires first (deferred reject), B fires second (resolves).
		const skipFetch = { fetchProductData: false as const };

		let rejectFireA: (err: any) => void;
		const controller = sourceController({
			eventManager: {
				fire: jest
					.fn()
					.mockImplementationOnce(() => new Promise((_, rej) => (rejectFireA = rej)))
					.mockImplementationOnce(() => Promise.resolve(undefined)),
				on: jest.fn(),
			},
		});

		const callA = manager.show(product('prod-A'), { config: skipFetch, controller });
		const callB = manager.show(product('prod-B'), { config: skipFetch, controller });

		// B settles fully before A's middleware rejects.
		await callB;

		rejectFireA!(new Error('boom'));
		await callA;

		// A's error must not overwrite the modal that B already claimed.
		expect(manager.store.error).toBeUndefined();
		expect(manager.store.product!.id).toBe('prod-B');
	});

	it('abandons an in-flight quickview that was dismissed while loading', async () => {
		const manager = new QuickviewManager(services());
		const updateSpy = jest.spyOn(manager.store, 'update');
		const controller = sourceController();

		let resolveFetch: (v: any) => void;
		controller.client.products = jest.fn().mockImplementation(() => new Promise((r) => (resolveFetch = r)));

		const call = manager.show(product(), { controller });

		// the modal opens in a loading state, then the shopper dismisses it
		expect(manager.store.isOpen).toBe(true);
		manager.store.close();

		resolveFetch!({ variants: { data: [] } });
		await call;

		// the late fetch must not reopen the dismissed modal
		expect(manager.store.isOpen).toBe(false);
		expect(updateSpy).not.toHaveBeenCalled();
	});
});
