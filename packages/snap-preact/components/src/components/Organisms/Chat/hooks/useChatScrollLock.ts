import { useEffect } from 'preact/hooks';
import type { RefObject } from 'preact';

export type UseChatScrollLockOptions = {
	/** Whether the chat panel is open — the lock is only active while open. */
	open: boolean;
	/** Ref to the chat root element — touches outside it are always blocked. */
	chatRef: RefObject<HTMLDivElement>;
};

/**
 * Prevents the background page from scrolling while the chat is open.
 *
 * Locks body overflow for wheel/keyboard scrolling, and installs a `touchmove`
 * handler for touch devices. iOS Safari (real iPad/iPhone) rubber-band-scrolls
 * the body when a touchmove inside `.ss__chat__messages` reaches the top/bottom —
 * and `overscroll-behavior: contain` is ignored there.
 *
 * We don't reposition the body (locking via `position: fixed` on `<body>` leaves
 * iPad Safari in a stuck viewport state where the page can't scroll after the
 * lock is released). Instead the `touchmove` handler:
 *   - allows the touchmove if it's inside a scrollable region of the chat
 *     and that region isn't at its scroll edge in the swipe direction;
 *   - calls `preventDefault()` otherwise — which is what blocks both
 *     background scrolling and iOS rubber-band overscroll.
 * Cleanup just removes the listeners, so nothing can leak into the page.
 */
export const useChatScrollLock = ({ open, chatRef }: UseChatScrollLockOptions): void => {
	// Lock body scroll while chat is open so touch/wheel scrolls don't leak to the page behind
	useEffect(() => {
		if (!open) return;
		const body = document.body;
		const previousOverflow = body.style.overflow;
		const previousOverscroll = body.style.overscrollBehavior;
		body.style.overflow = 'hidden';
		body.style.overscrollBehavior = 'contain';
		return () => {
			body.style.overflow = previousOverflow;
			body.style.overscrollBehavior = previousOverscroll;
		};
	}, [open]);

	useEffect(() => {
		if (!open) return;
		if (typeof document === 'undefined') return;

		let startX = 0;
		let startY = 0;
		let scrollEl: HTMLElement | null = null;

		// Walk up from the touch target to find the first ancestor inside the chat
		// that is actually scrollable in either axis. Stop at the chat root so we
		// never consider elements outside the chat.
		const findScrollableInChat = (start: HTMLElement | null): HTMLElement | null => {
			const chatRoot = chatRef.current;
			if (!chatRoot) return null;
			let el: HTMLElement | null = start;
			while (el && chatRoot.contains(el)) {
				const style = getComputedStyle(el);
				const scrollableY = (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
				const scrollableX = (style.overflowX === 'auto' || style.overflowX === 'scroll') && el.scrollWidth > el.clientWidth;
				if (scrollableY || scrollableX) {
					return el;
				}
				if (el === chatRoot) break;
				el = el.parentElement;
			}
			return null;
		};

		const onTouchStart = (e: TouchEvent) => {
			if (!e.touches[0]) return;
			startX = e.touches[0].clientX;
			startY = e.touches[0].clientY;
			scrollEl = findScrollableInChat(e.target as HTMLElement | null);
		};

		const onTouchMove = (e: TouchEvent) => {
			const target = e.target as Node | null;
			const chatRoot = chatRef.current;
			const inChat = !!(chatRoot && target && chatRoot.contains(target));
			// Touches outside the chat shouldn't scroll the background.
			if (!inChat) {
				if (e.cancelable) e.preventDefault();
				return;
			}
			// Inside the chat but no scrollable container — block to prevent body scroll.
			if (!scrollEl) {
				if (e.cancelable) e.preventDefault();
				return;
			}
			// Inside a scrollable container — only block when at the edge in the
			// swipe direction, so internal scrolling continues to work. Detect the
			// dominant axis so horizontally-scrollable rows (e.g. the facets row)
			// also get to handle their own touch gestures.
			const currentX = e.touches[0]?.clientX ?? startX;
			const currentY = e.touches[0]?.clientY ?? startY;
			const deltaX = currentX - startX;
			const deltaY = currentY - startY;
			const horizontal = Math.abs(deltaX) > Math.abs(deltaY);
			if (horizontal) {
				const scrollsX = scrollEl.scrollWidth > scrollEl.clientWidth;
				if (!scrollsX) {
					if (e.cancelable) e.preventDefault();
					return;
				}
				const atLeft = scrollEl.scrollLeft <= 0;
				const atRight = scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 1;
				if ((atLeft && deltaX > 0) || (atRight && deltaX < 0)) {
					if (e.cancelable) e.preventDefault();
				}
			} else {
				const scrollsY = scrollEl.scrollHeight > scrollEl.clientHeight;
				if (!scrollsY) {
					if (e.cancelable) e.preventDefault();
					return;
				}
				const atTop = scrollEl.scrollTop <= 0;
				const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1;
				if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
					if (e.cancelable) e.preventDefault();
				}
			}
		};

		document.addEventListener('touchstart', onTouchStart, { passive: true });
		document.addEventListener('touchmove', onTouchMove, { passive: false });
		return () => {
			document.removeEventListener('touchstart', onTouchStart);
			document.removeEventListener('touchmove', onTouchMove);
		};
	}, [open]);
};
