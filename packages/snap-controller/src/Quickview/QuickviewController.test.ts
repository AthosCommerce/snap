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

		await controller.quickview({ result: { id: 'p1', mappings: { core: {} } } as any, controller: source, meta });
		expect(controller.store.meta).toBe(meta);

		const product: any = { id: 'p1' };
		await controller.addToCart([product]);
		expect(source.addToCart).toHaveBeenCalledWith([product]);
	});

	it('warns instead of throwing when addToCart is called with no originating controller', async () => {
		const svc = services();
		const controller = new QuickviewController({ id: 'quickview' }, svc as any);
		await expect(controller.addToCart([{ id: 'p1' } as any])).resolves.toBeUndefined();
	});
});
