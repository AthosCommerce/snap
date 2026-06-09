import { isObservableProp } from 'mobx';
import { QuickviewControllerStore } from './QuickviewControllerStore';
import { QuickviewStore } from './QuickviewStore';

describe('QuickviewControllerStore', () => {
	it('owns an observable QuickviewStore on `quickview`', () => {
		const store = new QuickviewControllerStore({ id: 'quickview' });
		expect(store.quickview).toBeInstanceOf(QuickviewStore);
		expect(isObservableProp(store, 'quickview')).toBe(true);
	});

	it('implements update() as a no-op that does not throw', () => {
		const store = new QuickviewControllerStore({ id: 'quickview' });
		expect(() => store.update()).not.toThrow();
		expect(store.quickview.isOpen).toBe(false);
	});
});
