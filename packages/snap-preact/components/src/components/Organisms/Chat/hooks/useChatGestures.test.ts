import { renderHook, act } from '@testing-library/preact';
import { useChatGestures, UseChatGesturesOptions } from './useChatGestures';

const touchEvent = (clientY: number) => ({
	touches: [{ clientY }],
	preventDefault: jest.fn(),
});

describe('useChatGestures', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	const setup = (overrides: Partial<UseChatGesturesOptions> = {}) => {
		const onDismiss = jest.fn();
		const panelRef = { current: { offsetHeight: 400 } as HTMLDivElement };
		const utils = renderHook((props: UseChatGesturesOptions) => useChatGestures(props), {
			initialProps: {
				panelRef,
				shouldShowSideChat: true,
				activeMessageId: 'msg-1',
				onDismiss,
				...overrides,
			} as UseChatGesturesOptions,
		});
		return { onDismiss, panelRef, ...utils };
	};

	it('ignores movement inside the 8px dead-zone so taps still click', () => {
		const { result } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
			result.current.swipeHandlers.onTouchMove(touchEvent(105));
		});
		expect(result.current.swipeOffset).toBe(0);
	});

	it('tracks downward drags past the dead-zone as a translate offset', () => {
		const { result } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
			result.current.swipeHandlers.onTouchMove(touchEvent(140));
		});
		expect(result.current.swipeOffset).toBe(40);
	});

	it('resets the offset when dragging back above the start position', () => {
		const { result } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
			result.current.swipeHandlers.onTouchMove(touchEvent(140));
			result.current.swipeHandlers.onTouchMove(touchEvent(80));
		});
		expect(result.current.swipeOffset).toBe(0);
	});

	it('snaps back when released before the 25% distance threshold', () => {
		const { result, onDismiss } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
		});
		// slow drag → negligible velocity
		act(() => {
			jest.advanceTimersByTime(1000);
			result.current.swipeHandlers.onTouchMove(touchEvent(160)); // 60px < 25% of 400
			result.current.swipeHandlers.onTouchEnd();
		});

		expect(result.current.swipeOffset).toBe(0);
		expect(result.current.swipeAnimating).toBe(true);

		act(() => {
			jest.advanceTimersByTime(300);
		});
		expect(result.current.swipeAnimating).toBe(false);
		expect(onDismiss).not.toHaveBeenCalled();
	});

	it('dismisses when dragged past 25% of the panel height', () => {
		const { result, onDismiss } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
		});
		act(() => {
			jest.advanceTimersByTime(1000);
			result.current.swipeHandlers.onTouchMove(touchEvent(250)); // 150px > 100px (25% of 400)
			result.current.swipeHandlers.onTouchEnd();
		});

		// animates the rest of the way out before dismissing
		expect(result.current.swipeAnimating).toBe(true);
		expect(result.current.swipeOffset).toBe(400);
		expect(onDismiss).not.toHaveBeenCalled();

		act(() => {
			jest.advanceTimersByTime(300);
		});
		expect(onDismiss).toHaveBeenCalledTimes(1);
		expect(result.current.swipeOffset).toBe(0);
	});

	it('dismisses on a quick flick (>0.5 px/ms with >50px travel)', () => {
		const { result, onDismiss } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
		});
		act(() => {
			jest.advanceTimersByTime(60); // 60px over 60ms → 1 px/ms
			result.current.swipeHandlers.onTouchMove(touchEvent(160));
			result.current.swipeHandlers.onTouchEnd();
		});

		act(() => {
			jest.advanceTimersByTime(300);
		});
		expect(onDismiss).toHaveBeenCalledTimes(1);
	});

	it('does nothing on touchend when the swipe never activated', () => {
		const { result, onDismiss } = setup();
		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
			result.current.swipeHandlers.onTouchEnd();
		});
		expect(result.current.swipeAnimating).toBe(false);
		expect(onDismiss).not.toHaveBeenCalled();
	});

	it('resets swipe state when the active message changes', () => {
		const onDismiss = jest.fn();
		const panelRef = { current: { offsetHeight: 400 } as HTMLDivElement };
		const { result, rerender } = renderHook((props: UseChatGesturesOptions) => useChatGestures(props), {
			initialProps: { panelRef, shouldShowSideChat: true, activeMessageId: 'msg-1', onDismiss },
		});

		act(() => {
			result.current.swipeHandlers.onTouchStart(touchEvent(100));
			result.current.swipeHandlers.onTouchMove(touchEvent(180));
		});
		expect(result.current.swipeOffset).toBe(80);

		rerender({ panelRef, shouldShowSideChat: true, activeMessageId: 'msg-2', onDismiss });
		expect(result.current.swipeOffset).toBe(0);
	});
});
