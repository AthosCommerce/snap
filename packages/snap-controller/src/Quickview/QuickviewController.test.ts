import { QuickviewController } from './QuickviewController';
import { QuickviewStore } from '@athoscommerce/snap-store-mobx';
import { ControllerTypes } from '../types';

const services = () => {
	const store = new QuickviewStore({ id: 'quickview' });
	return {
		store,
		client: { search: jest.fn(), products: jest.fn().mockResolvedValue({ variants: { data: [] } }) } as any,
		urlManager: { subscribe: () => {}, detach: () => ({ subscribe: () => {} }) } as any,
		eventManager: { fire: jest.fn().mockResolvedValue(undefined), on: jest.fn() } as any,
		profiler: { create: () => ({ stop: () => {} }), setNamespace: () => {} } as any,
		logger: { dev: () => {}, warn: () => {}, error: () => {}, setNamespace: () => {} } as any,
		tracker: { track: {} } as any,
	};
};

describe('QuickviewController', () => {
	it('has type "quickview" and a no-op search()', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		expect(controller.type).toBe(ControllerTypes.quickview);
		await expect(controller.search()).resolves.toBeUndefined();
	});

	it('opens loading, fetches by parentId, fires the quickview middleware, then updates the store', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		const result: any = { id: 'p1', mappings: { core: {} } };

		await controller.quickview({ result, parentId: 'parent-1' });

		expect(svc.client.products).toHaveBeenCalledWith({ parentId: 'parent-1' });
		expect(svc.eventManager.fire).toHaveBeenCalledWith('quickview', expect.objectContaining({ controller, result }));
		expect(controller.store.isOpen).toBe(true);
		expect(controller.store.loading).toBe(false);
	});

	it('skips the fetch when fetchProductData is false', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		await controller.quickview({ result: { id: 'p1' } as any, config: { fetchProductData: false } });
		expect(svc.client.products).not.toHaveBeenCalled();
	});

	it('resolves parentId from result.mappings.core.parentId, then result.id, when none is passed', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);

		await controller.quickview({ result: { id: 'child-1', mappings: { core: { parentId: 'parent-9' } } } as any });
		expect(svc.client.products).toHaveBeenCalledWith({ parentId: 'parent-9' });

		svc.client.products.mockClear();
		await controller.quickview({ result: { id: 'lone-1', mappings: { core: {} } } as any });
		expect(svc.client.products).toHaveBeenCalledWith({ parentId: 'lone-1' });
	});

	it('warns and does nothing when no result is provided', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		await controller.quickview({ result: undefined as any });
		expect(svc.client.products).not.toHaveBeenCalled();
		expect(controller.store.isOpen).toBe(false);
	});

	it('resets the store when the quickview middleware cancels', async () => {
		const svc = services();
		svc.eventManager.fire = jest.fn().mockRejectedValue(new Error('cancelled'));
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);

		await controller.quickview({ result: { id: 'p1', mappings: { core: {} } } as any });

		expect(controller.store.isOpen).toBe(false);
		expect(controller.store.loading).toBe(false);
	});

	it('surfaces a store error when the quickview middleware throws a non-cancel error', async () => {
		const svc = services();
		svc.eventManager.fire = jest.fn().mockRejectedValue(new Error('boom'));
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);

		await controller.quickview({ result: { id: 'p1', mappings: { core: {} } } as any });

		expect(controller.store.error?.message).toBe(`'quickview' middleware error`);
		expect(controller.store.loading).toBe(false);
	});

	it('delegates addToCart to the originating controller and forwards its meta into the store', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		const source = { addToCart: jest.fn() };
		const meta = { data: { facets: [] } };

		await controller.quickview({ result: { id: 'p1', mappings: { core: {} } } as any, controller: source as any, meta });
		expect(controller.store.meta).toBe(meta);

		const product: any = { id: 'p1' };
		await controller.addToCart([product]);
		expect(source.addToCart).toHaveBeenCalledWith([product]);
	});

	it('passes the originating controller config as storeConfig so the clone inherits settings.variants', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		const updateSpy = jest.spyOn(controller.store, 'update');
		const source = { config: { id: 'search', settings: { variants: { field: 'ss_variants' } } } };

		await controller.quickview({ result: { id: 'p1', mappings: { core: {} } } as any, controller: source as any });
		expect(updateSpy).toHaveBeenCalledWith(expect.objectContaining({ storeConfig: source.config }));

		await controller.quickview({ result: { id: 'p2', mappings: { core: {} } } as any });
		expect(updateSpy).toHaveBeenLastCalledWith(expect.objectContaining({ storeConfig: controller.config }));
	});

	it('warns instead of throwing when addToCart is called with no originating controller', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		await expect(controller.addToCart([{ id: 'p1' } as any])).resolves.toBeUndefined();
	});

	it('out-of-order resolution shows the last-clicked product', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);

		const resultA: any = { id: 'prod-A', mappings: { core: { uid: 'uid-A' } } };
		const resultB: any = { id: 'prod-B', mappings: { core: { uid: 'uid-B' } } };

		let resolveA: (v: any) => void;
		let resolveB: (v: any) => void;
		svc.client.products = jest
			.fn()
			.mockImplementationOnce(() => new Promise((r) => (resolveA = r)))
			.mockImplementationOnce(() => new Promise((r) => (resolveB = r)));

		const callA = controller.quickview({ result: resultA });
		const callB = controller.quickview({ result: resultB });

		// B resolves first, then A resolves — A's continuation must be discarded.
		resolveB!({ variants: { data: [] } });
		resolveA!({ variants: { data: [] } });

		await Promise.all([callA, callB]);

		expect(controller.store.product!.id).toBe('prod-B');
		expect(controller.store.loading).toBe(false);
		expect(controller.store.isOpen).toBe(true);
	});

	it('superseded middleware error cannot clobber the active modal', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);

		const resultA: any = { id: 'prod-A', mappings: { core: { uid: 'uid-A' } } };
		const resultB: any = { id: 'prod-B', mappings: { core: { uid: 'uid-B' } } };

		// Skip the /v1/products fetch so both calls reach eventManager.fire in a
		// predictable order: A fires first (deferred reject), B fires second (resolves).
		const skipFetch = { fetchProductData: false as const };

		let rejectFireA: (err: any) => void;
		svc.eventManager.fire = jest
			.fn()
			.mockImplementationOnce(() => new Promise((_, rej) => (rejectFireA = rej)))
			.mockImplementationOnce(() => Promise.resolve(undefined));

		const callA = controller.quickview({ result: resultA, config: skipFetch });
		const callB = controller.quickview({ result: resultB, config: skipFetch });

		// B settles fully before A's middleware rejects.
		await callB;

		rejectFireA!(new Error('boom'));
		await callA;

		// A's error must not overwrite the modal that B already claimed.
		expect(controller.store.error).toBeUndefined();
		expect(controller.store.product!.id).toBe('prod-B');
	});
});
