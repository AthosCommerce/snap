import createQuickviewController from './createQuickviewController';
import { QuickviewController } from '@athoscommerce/snap-controller';

describe('createQuickviewController', () => {
	it('creates a QuickviewController with a QuickviewControllerStore', () => {
		const controller = createQuickviewController({
			client: { globals: { siteId: '8uyt2v' } },
			controller: { id: 'quickview' },
		} as any);

		expect(controller).toBeInstanceOf(QuickviewController);
		expect(controller.store.quickview).toBeDefined();
		expect(controller.type).toBe('quickview');
	});
});
