import { renderHook } from '@testing-library/preact';
import { useChatScrollLock, UseChatScrollLockOptions } from './useChatScrollLock';

describe('useChatScrollLock', () => {
	const chatRef = { current: document.createElement('div') };

	afterEach(() => {
		document.body.style.overflow = '';
		document.body.style.overscrollBehavior = '';
	});

	it('locks body scrolling while open and restores it on close', () => {
		document.body.style.overflow = 'scroll';
		const { rerender } = renderHook((props: UseChatScrollLockOptions) => useChatScrollLock(props), {
			initialProps: { open: true, chatRef },
		});

		expect(document.body.style.overflow).toBe('hidden');
		expect(document.body.style.overscrollBehavior).toBe('contain');

		rerender({ open: false, chatRef });
		expect(document.body.style.overflow).toBe('scroll');
	});

	it('does not touch body styles while closed', () => {
		renderHook((props: UseChatScrollLockOptions) => useChatScrollLock(props), {
			initialProps: { open: false, chatRef },
		});
		expect(document.body.style.overflow).toBe('');
	});

	it('blocks touchmove events originating outside the chat', () => {
		renderHook((props: UseChatScrollLockOptions) => useChatScrollLock(props), {
			initialProps: { open: true, chatRef },
		});

		const outside = document.createElement('div');
		document.body.appendChild(outside);

		const event = new Event('touchmove', { bubbles: true, cancelable: true }) as any;
		event.touches = [{ clientX: 0, clientY: 0 }];
		outside.dispatchEvent(event);

		expect(event.defaultPrevented).toBe(true);
		outside.remove();
	});

	it('removes the touch listeners on cleanup', () => {
		const addSpy = jest.spyOn(document, 'addEventListener');
		const removeSpy = jest.spyOn(document, 'removeEventListener');

		const { unmount } = renderHook((props: UseChatScrollLockOptions) => useChatScrollLock(props), {
			initialProps: { open: true, chatRef },
		});
		unmount();

		const added = addSpy.mock.calls.filter(([type]) => type === 'touchstart' || type === 'touchmove').length;
		const removed = removeSpy.mock.calls.filter(([type]) => type === 'touchstart' || type === 'touchmove').length;
		expect(added).toBe(2);
		expect(removed).toBe(2);

		addSpy.mockRestore();
		removeSpy.mockRestore();
	});
});
