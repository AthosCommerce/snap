import { useEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';

export type UseChatOverflowOptions = {
	messagesContainerRef: RefObject<HTMLDivElement>;
	headerRef: RefObject<HTMLDivElement>;
	/**
	 * Whether the chat panel is open. State resets on toggle.
	 */
	open: boolean;
	/**
	 * Whether the controller is currently loading. Triggers a scroll-to-bottom when it flips on.
	 */
	loading: boolean;
	/**
	 * Length of the visible chat. Drives the new-message popup + auto-scroll behavior.
	 */
	visibleChatLength: number;
	/**
	 * The last visible message — needed to differentiate auto-scroll for user vs assistant messages.
	 */
	lastVisibleMessage: { messageType?: string } | undefined;
};

export type UseChatOverflowResult = {
	/** True when there are messages off-screen below the current scroll position. */
	showNewMessages: boolean;
	/** Imperative dismiss for the "New messages" popup. */
	setShowNewMessages: (value: boolean) => void;
	/** True when the messages container is overflowing (used to switch comparison tray between in-flow and overlay). */
	messagesOverflow: boolean;
	/** Live ref tracking whether the user is currently near the bottom. */
	isNearBottomRef: RefObject<boolean>;
	/** Imperatively scroll the messages container to the bottom (smooth). */
	scrollToBottom: () => void;
	/** Conditional scroll: only scrolls if the user is already near the bottom. */
	scrollToBottomIfNear: () => void;
};

/**
 * Manages the auto-scroll, "new message" indicator, and overflow detection for the
 * chat message list. Owns all scroll listeners and ResizeObservers so the host
 * component just consumes the derived state.
 */
export const useChatOverflow = ({
	messagesContainerRef,
	headerRef,
	open,
	loading,
	visibleChatLength,
	lastVisibleMessage,
}: UseChatOverflowOptions): UseChatOverflowResult => {
	const [showNewMessages, setShowNewMessages] = useState(false);
	const [messagesOverflow, setMessagesOverflow] = useState(false);
	const isNearBottomRef = useRef(true);

	const scrollToBottom = (): void => {
		// Scroll the messages container directly (instead of scrollIntoView on the
		// bottom anchor) so the browser never walks up the ancestor chain. On small
		// viewports a smooth scrollIntoView could otherwise animate the document /
		// visual viewport and visually push the fixed-position chat off-screen.
		const container = messagesContainerRef.current;
		if (container) {
			container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
		}
	};

	// Conditional scroll: only scrolls if the user is already near the bottom.
	const scrollToBottomIfNear = (): void => {
		if (isNearBottomRef.current) {
			scrollToBottom();
		}
	};

	// Scroll to bottom when chat opens
	useEffect(() => {
		if (open) {
			scrollToBottom();
			setShowNewMessages(false);
			isNearBottomRef.current = true;
		}
	}, [open]);

	// Handle new messages — auto-scroll for user messages, show popup for response messages when scrolled up
	useEffect(() => {
		if (!open || !lastVisibleMessage) return;
		if (lastVisibleMessage.messageType === 'user') {
			scrollToBottom();
			setShowNewMessages(false);
		} else if (isNearBottomRef.current) {
			scrollToBottom();
			setShowNewMessages(false);
		} else {
			setShowNewMessages(true);
		}
	}, [visibleChatLength]);

	// Scroll to show loading indicator when user sends a message
	useEffect(() => {
		if (open && loading) {
			scrollToBottom();
		}
	}, [loading]);

	// Track scroll position to dismiss the "New messages" popup when user scrolls to bottom
	useEffect(() => {
		const container = messagesContainerRef.current;
		if (!container) return;
		const handleScroll = (): void => {
			const threshold = 100;
			const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
			isNearBottomRef.current = isNearBottom;
			if (isNearBottom) {
				setShowNewMessages(false);
			}
		};
		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, [open]);

	// Track whether the messages container is overflowing so the comparisons header
	// can switch between in-flow (short conversations — top content stays reachable)
	// and overlay (overflowing — avoid layout shift when toggling the tray).
	// Hysteresis: when already in overlay, only return to in-flow if the content
	// would still fit *with* the header re-inserted — otherwise the two states
	// fight each other and the layout flickers.
	useEffect(() => {
		const container = messagesContainerRef.current;
		if (!container || typeof ResizeObserver === 'undefined') return;
		const update = (): void => {
			setMessagesOverflow((prev) => {
				const headerHeight = headerRef.current?.offsetHeight || 0;
				if (prev) {
					// Currently overlay: header isn't taking flow space. Only switch
					// back to in-flow if the content would fit with the header added.
					return container.scrollHeight > container.clientHeight - headerHeight + 1;
				}
				// Currently in-flow: header already takes space — straightforward check.
				return container.scrollHeight > container.clientHeight + 1;
			});
		};
		update();
		const observer = new ResizeObserver(update);
		observer.observe(container);
		if (headerRef.current) observer.observe(headerRef.current);
		return () => observer.disconnect();
	}, [open, visibleChatLength]);

	return {
		showNewMessages,
		setShowNewMessages,
		messagesOverflow,
		isNearBottomRef,
		scrollToBottom,
		scrollToBottomIfNear,
	};
};
