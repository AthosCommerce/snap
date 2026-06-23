import { useEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';

export type UseChatGesturesOptions = {
	/**
	 * Ref to the panel that is being dragged (the mobile secondary panel).
	 */
	panelRef: RefObject<HTMLDivElement>;
	/**
	 * Whether the side chat is currently visible. Used to reset state when it toggles.
	 */
	shouldShowSideChat: boolean;
	/**
	 * Active message id. Used to reset state when the user navigates to a different message.
	 */
	activeMessageId: string | undefined;
	/**
	 * Called when the swipe gesture passes the dismiss threshold and finishes animating out.
	 */
	onDismiss: () => void;
};

export type UseChatGesturesResult = {
	/** Current vertical offset in pixels. */
	swipeOffset: number;
	/** Whether a snap-back / dismiss animation is currently running. */
	swipeAnimating: boolean;
	/** Spread these onto the panel: `onTouchStart`, `onTouchMove`, `onTouchEnd`. */
	swipeHandlers: {
		onTouchStart: (e: any) => void;
		onTouchMove: (e: any) => void;
		onTouchEnd: () => void;
	};
};

/**
 * Drag-down-to-dismiss gesture for the mobile secondary chat panel.
 *
 * Tracks vertical touch movement and applies a translateY offset until the user releases.
 * If the user passes a distance or velocity threshold the panel animates the rest of the way
 * out and `onDismiss` fires; otherwise it snaps back to zero.
 */
export const useChatGestures = ({ panelRef, shouldShowSideChat, activeMessageId, onDismiss }: UseChatGesturesOptions): UseChatGesturesResult => {
	const swipeStartY = useRef(0);
	const swipeStartTime = useRef(0);
	const swipeActive = useRef(false);
	const swipeOffsetRef = useRef(0);
	const animationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [swipeOffset, setSwipeOffsetRaw] = useState(0);
	const [swipeAnimating, setSwipeAnimating] = useState(false);

	const updateSwipeOffset = (value: number): void => {
		swipeOffsetRef.current = value;
		setSwipeOffsetRaw(value);
	};

	// Reset swipe state when secondary panel opens/closes or active message changes
	useEffect(() => {
		updateSwipeOffset(0);
		setSwipeAnimating(false);
		swipeActive.current = false;
	}, [shouldShowSideChat, activeMessageId]);

	const onTouchStart = (e: any): void => {
		swipeStartY.current = e.touches[0].clientY;
		swipeStartTime.current = Date.now();
		swipeActive.current = false; // only activate after dead-zone threshold
		setSwipeAnimating(false);
	};

	const onTouchMove = (e: any): void => {
		const diff = e.touches[0].clientY - swipeStartY.current;
		// Require a minimum drag distance before activating the swipe,
		// so taps on buttons (e.g. close) still fire their click events.
		if (!swipeActive.current) {
			if (Math.abs(diff) < 8) return; // still within dead-zone
			swipeActive.current = true;
		}
		if (diff > 0) {
			e.preventDefault();
			updateSwipeOffset(diff);
		} else {
			updateSwipeOffset(0);
		}
	};

	const onTouchEnd = (): void => {
		if (!swipeActive.current) return;
		swipeActive.current = false;

		const offset = swipeOffsetRef.current;
		const height = panelRef.current?.offsetHeight || 400;
		const elapsed = Date.now() - swipeStartTime.current;
		const velocity = offset / (elapsed || 1); // px per ms

		// Dismiss if dragged past 25% threshold OR a quick flick (>0.5 px/ms with >50px travel)
		const shouldDismiss = offset > height * 0.25 || (velocity > 0.5 && offset > 50);

		if (shouldDismiss) {
			// Animate out then dismiss
			setSwipeAnimating(true);
			updateSwipeOffset(height);
			if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
			animationTimerRef.current = setTimeout(() => {
				onDismiss();
				updateSwipeOffset(0);
				setSwipeAnimating(false);
			}, 300);
		} else {
			// Snap back
			setSwipeAnimating(true);
			updateSwipeOffset(0);
			if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
			animationTimerRef.current = setTimeout(() => setSwipeAnimating(false), 300);
		}
	};

	useEffect(() => {
		return () => {
			if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
		};
	}, []);

	return {
		swipeOffset,
		swipeAnimating,
		swipeHandlers: { onTouchStart, onTouchMove, onTouchEnd },
	};
};
