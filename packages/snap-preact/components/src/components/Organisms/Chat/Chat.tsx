import { h } from 'preact';

import { jsx } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps } from '../../../types';
import { chatDefaultStyles } from './Chat.styles';
import { useChatGestures } from './hooks/useChatGestures';
import { useChatOverflow } from './hooks/useChatOverflow';
import { useChatFileUpload } from './hooks/useChatFileUpload';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Button } from '../../Atoms/Button';
import { useRef, useEffect, useMemo, useState } from 'preact/hooks';

import { ChatMessageUser, ChatMessageUserProps } from '../../Molecules/ChatMessageUser';
import { ChatMessageText, ChatMessageTextProps } from '../../Molecules/ChatMessageText';
import { ChatSuggestedQuestions, ChatSuggestedQuestionsProps } from '../../Molecules/ChatSuggestedQuestions';
import { ChatAttachmentContext, ChatAttachmentContextItem, ChatAttachmentContextProps } from '../../Molecules/ChatAttachmentContext';
import { Image } from '../../Atoms/Image';
import { ChatLoadingIndicator, ChatLoadingIndicatorProps } from '../../Atoms/ChatLoadingIndicator';
import { ValueFacet, RangeFacet, FacetValue, FacetRangeValue, ChatAttachmentImage } from '@athoscommerce/snap-store-mobx';

import { Dropdown, FacetSlider, Icon, Overlay, useMediaQuery } from '../../..';
import { ChatInspirationResultMessage, ChatInspirationResultMessageProps } from '../../Molecules/ChatInspirationResultMessage';
import {
	ChatProductComparisonMessage,
	ChatProductComparisonMessageProps,
} from '../../Molecules/ChatProductComparisonMessage/ChatProductComparisonMessage';
import {
	ChatProductQueryMessage,
	ChatProductQueryMessageItem,
	ChatProductQueryMessageProps,
} from '../../Molecules/ChatProductQueryMessage/ChatProductQueryMessage';
import {
	ChatResponseInspirationResultData,
	ChatResponseProductComparisonData,
	ChatResponseActionsData,
} from '@athoscommerce/snap-client/dist/cjs/Client/transforms/chatResponse';

export const ChatOrganism = observer((properties: ChatOrganismProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const isMobile = useMediaQuery('(max-width: 767px)');

	const defaultProps: Partial<ChatOrganismProps> = {
		treePath: globalTreePath,
		logo: 'https://cdn.athoscommerce.net/snap/images/Athos%20Commerce_Icon_white.svg',
		title: 'Athos Conversational Assistant',
		subtitle: 'Your Guided Discovery Expert',
		multiselectFacets: false,
		disableBubbleSuggestedQuestions: isMobile ? true : false,
		primaryColorBg: '#253B80',
		primaryColorFg: '#fff',
		primaryAccentColorBg: '#feeeae',
		primaryAccentColorFg: '#000000',
		secondaryAccentColorBg: '#000000',
		secondaryAccentColorFg: '#ffffff',
		position: 'right',
	};

	let props = mergeProps('chat', globalTheme, defaultProps, properties);

	const {
		className,
		internalClassName,
		controller,
		logo,
		title,
		subtitle,
		offset,
		multiselectFacets,
		disableBubbleSuggestedQuestions,
		primaryColorBg,
		primaryColorFg,
		primaryAccentColorBg,
		primaryAccentColorFg,
		secondaryAccentColorBg,
		secondaryAccentColorFg,
		position,
		disableStyles,
		treePath,
	} = props;
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	const colorPrimaryAccent = primaryAccentColorBg!;
	const colorPrimaryAccentText = primaryAccentColorFg!;
	const colorSecondaryAccent = secondaryAccentColorBg!;
	const colorSecondaryAccentText = secondaryAccentColorFg!;
	const chatPosition: 'left' | 'right' = position === 'right' ? 'right' : 'left';
	const { store } = controller;

	const themeDefaults: Theme = {
		components: {},
	};

	// merge deeply the themeDefaults with the theme props and the displaySettings theme props (do not merge arrays, but replace them)
	const theme = deepmerge(themeDefaults, props?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	props = {
		...props,
		theme,
	};

	const subProps: ChatSubProps = {
		messageUser: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: colorPrimary,
			primaryColorText: colorPrimaryText,
		},
		messageText: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: colorPrimary,
			primaryColorText: colorPrimaryText,
		},
		suggestedQuestions: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: colorPrimary,
		},
		attachmentContext: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		loadingIndicator: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		inspirationResultMessage: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		productComparisonMessage: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		productQueryMessage: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: colorPrimary,
			primaryColorText: colorPrimaryText,
		},
	};

	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

	// Ref for the mobile secondary panel — needed for swipe-to-dismiss measurements
	const secondaryRef = useRef<HTMLDivElement>(null);
	const [mobileProductInfoOpen, setMobileProductInfoOpen] = useState(false);
	const [footerHeight, setFooterHeight] = useState(0);

	const dropEnabled = store.features.imageSearch.enabled && !store.loading && !store.blocked && !store.currentChat?.sessionLimitReached;

	const { fileInputRef, isDraggingFile, dragHandlers } = useChatFileUpload({
		enabled: !!dropEnabled,
		onUpload: (files) => controller.upload(files),
	});

	// productQuery messages are filtered out of the main chat render (they only drive the side-chat panel),
	// so don't auto-scroll when one is added — otherwise clicking a product in the side chat scrolls the main thread.
	const visibleChat = (store.currentChat?.chat || []).filter((m) => m.messageType !== 'productQuery');
	const visibleChatLength = visibleChat.length;
	const lastVisibleMessage = visibleChat[visibleChat.length - 1];

	const { showNewMessages, setShowNewMessages, messagesOverflow, scrollToBottom, scrollToBottomIfNear } = useChatOverflow({
		messagesContainerRef,
		headerRef,
		open: store.open,
		loading: store.loading,
		visibleChatLength,
		lastVisibleMessage,
	});

	// Re-focus the chat input on desktop after a search completes.
	// The input is disabled while loading, which causes the browser to drop focus.
	// On mobile we intentionally skip this so the virtual keyboard dismisses.
	// Only fire on the loading true → false transition — running on mount steals
	// focus away from the Storybook controls whenever the story re-renders.
	const prevLoadingRef = useRef(store.loading);
	useEffect(() => {
		if (prevLoadingRef.current && !store.loading && !isMobile && store.open) {
			controller.focusInput();
		}
		prevLoadingRef.current = store.loading;
	}, [store.loading]);

	// const subProps: ChatSubProps = {};

	const activeMessage = store.currentChat?.activeMessage;

	// On mobile, only auto-open the secondary panel for the first productComparison
	// message in the chat session. Subsequent comparison results show a "Show Details"
	// button instead (handled in MessageText via sideChatLabel toggle).
	const isFirstMobileComparison = (() => {
		if (!isMobile || activeMessage?.messageType !== 'productComparison') return true;
		// If the user explicitly activated a comparison (via "Show Details" or the
		// view-side-chat button), always allow it regardless of position in the chat
		if (store.currentChat?.activeMessageId) return true;
		const comparisonMessages = (store.currentChat?.chat || []).filter((m) => m.messageType === 'productComparison');
		return comparisonMessages.length <= 1;
	})();

	const sideChatTypes = isMobile
		? ['inspirationResult', ...(isFirstMobileComparison ? ['productComparison'] : []), ...(mobileProductInfoOpen ? ['productQuery'] : [])]
		: ['inspirationResult', 'productComparison', 'productQuery'];
	const shouldShowSideChat =
		activeMessage && sideChatTypes.includes(activeMessage?.messageType) && store.currentChat?.dismissedSideChatMessageId !== activeMessage.id;

	const hasSideChat = !!shouldShowSideChat;
	const styling = useMemo(
		() =>
			mergeStyles<{
				mobile: boolean;
				offset?: string | number;
				hasSideChat?: boolean;
				footerHeight: number;
				primaryColorBg: string;
				primaryColorFg: string;
				primaryAccentColorBg: string;
				primaryAccentColorFg: string;
				secondaryAccentColorBg: string;
				secondaryAccentColorFg: string;
				position: 'left' | 'right';
			}>(
				{
					mobile: isMobile,
					offset,
					hasSideChat,
					footerHeight,
					primaryColorBg: colorPrimary,
					primaryColorFg: colorPrimaryText,
					primaryAccentColorBg: colorPrimaryAccent,
					primaryAccentColorFg: colorPrimaryAccentText,
					secondaryAccentColorBg: colorSecondaryAccent,
					secondaryAccentColorFg: colorSecondaryAccentText,
					position: chatPosition,
				},
				chatDefaultStyles
			),
		[
			isMobile,
			offset,
			hasSideChat,
			footerHeight,
			colorPrimary,
			colorPrimaryText,
			colorPrimaryAccent,
			colorPrimaryAccentText,
			colorSecondaryAccent,
			colorSecondaryAccentText,
			chatPosition,
		]
	);

	// Lock body scroll while chat is open so touch/wheel scrolls don't leak to the page behind
	useEffect(() => {
		if (!store.open) return;
		const body = document.body;
		const previousOverflow = body.style.overflow;
		const previousOverscroll = body.style.overscrollBehavior;
		body.style.overflow = 'hidden';
		body.style.overscrollBehavior = 'contain';
		return () => {
			body.style.overflow = previousOverflow;
			body.style.overscrollBehavior = previousOverscroll;
		};
	}, [store.open]);

	// Close chat on Escape key (or dismiss side chat first when it's open)
	useEffect(() => {
		if (!store.open) return;
		const onKeyDown = (e: KeyboardEvent): void => {
			if (e.key !== 'Escape') return;
			if (store.currentChat?.activeMessage && shouldShowSideChat) {
				store.currentChat?.dismissSideChat();
			} else {
				controller.handlers.button.click();
			}
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [store.open, shouldShowSideChat]);

	// Track the primary footer height so the mobile secondary panel can sit above it
	useEffect(() => {
		const el = footerRef.current;
		if (!el) return;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setFooterHeight(entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height);
			}
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [store.open, store.currentChat?.isExpired]);

	// Prevent the background page from scrolling while the chat is open on touch
	// devices. iOS Safari (real iPad/iPhone) rubber-band-scrolls the body when a
	// touchmove inside `.ss__chat__messages` reaches the top/bottom — and
	// `overscroll-behavior: contain` is ignored there.
	//
	// We don't touch body styles (locking via `position: fixed` on `<body>` leaves
	// iPad Safari in a stuck viewport state where the page can't scroll after the
	// lock is released). Instead we install a `touchmove` handler that:
	//   - allows the touchmove if it's inside a scrollable region of the chat
	//     and that region isn't at its scroll edge in the swipe direction;
	//   - calls `preventDefault()` otherwise — which is what blocks both
	//     background scrolling and iOS rubber-band overscroll.
	// Cleanup just removes the listeners, so nothing can leak into the page.
	useEffect(() => {
		if (!store.open) return;
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
	}, [store.open]);

	const HistoryButton = (props: { disabled?: boolean; open?: boolean }) => (
		<Button
			className="ss__chat__header__button--history"
			disabled={props.disabled}
			icon={{
				icon: 'history',
				title: 'Chat History',
			}}
		/>
	);

	const HistoryPopup = (props: { toggleOpen?: () => void }) => (
		<div className="ss__chat__history">
			<div className="ss__chat__history__header">
				<h4>History</h4>
				<div className="ss__chat__history__header__buttons">
					<Button
						content="clear"
						onClick={() => {
							controller.store.clearHistory();
							props.toggleOpen && props.toggleOpen();
						}}
					/>
				</div>
			</div>
			{store.chats.length > 0 ? (
				<div className="ss__chat__history__chats">
					{store.chats
						.slice()
						.reverse()
						.map((chat) => (
							<div key={chat.id} className="ss__chat__history__chats__chat">
								<Button
									className="ss__chat__history__chat__button"
									onClick={() => {
										controller.store.switchChat(chat.id);
									}}
									disabled={chat.id === store.currentChatId}
								>
									<div className="ss__chat__history__chat__button__text">
										{(() => {
											const lastUserMessage = [...chat.chat].reverse().find((message) => message.messageType === 'user');
											if (!lastUserMessage) return 'New Chat';
											const text = lastUserMessage.text;
											return text.length > 50 ? `${text.slice(0, 50)}...` : text;
										})()}
									</div>
									<div className="ss__chat__history__chat__button__date">{chat.createdAt.toLocaleString()}</div>
								</Button>
							</div>
						))}
				</div>
			) : null}
		</div>
	);

	const FacetButton = (props: { label: string; open?: boolean }) => <Button icon={props.open ? 'angle-down' : 'angle-up'}>{props.label}</Button>;

	const getFacetButtonLabel = (facet: ValueFacet | RangeFacet): string => {
		const base = facet.label || facet.field;

		// Slider facets show the active low-high range in the button when narrowed.
		if (facet.type === 'range') {
			const rangeFacet = facet as RangeFacet;
			const active = rangeFacet.active;
			const range = rangeFacet.range;
			if (active && range && (active.low !== range.low || active.high !== range.high)) {
				return `${base} (${active.low ?? '*'}-${active.high ?? '*'})`;
			}
			return base;
		}

		// Count current selections from the urlManager (source of truth for live state).
		// `value.filtered` reflects the server's snapshot at response time and goes stale
		// once the user deselects locally.
		const applied = ((facet as ValueFacet).values || []).filter((value) => {
			if (!value) return false;
			const optionValue =
				'low' in value && 'high' in value
					? `${(value as FacetRangeValue).low ?? '*'}:${(value as FacetRangeValue).high ?? '*'}`
					: (value as FacetValue).value || (value as FacetValue).label;
			return controller.store.isFacetSelected(facet.field, optionValue);
		}).length;

		return applied > 0 ? `${base} (${applied})` : base;
	};

	// Slider dropdown grows to fill the remaining chat width from its anchor,
	// so the price range slider isn't cramped inside a 150px-wide dropdown.
	const SliderFacetDropdown = (props: { facet: RangeFacet; label: string }) => {
		const anchorRef = useRef<HTMLDivElement>(null);
		const [width, setWidth] = useState<number | null>(null);

		useEffect(() => {
			const compute = () => {
				if (!anchorRef.current || !chatRef.current) return;
				const anchor = anchorRef.current.getBoundingClientRect();
				const chat = chatRef.current.getBoundingClientRect();
				const remaining = chat.right - anchor.left - 16;
				setWidth(Math.max(220, remaining));
			};
			compute();
			const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(compute) : null;
			if (ro && chatRef.current) ro.observe(chatRef.current);
			window.addEventListener('resize', compute);
			return () => {
				if (ro) ro.disconnect();
				window.removeEventListener('resize', compute);
			};
		}, []);

		return (
			<div ref={anchorRef} className="ss__chat__actions__facet ss__chat__actions__facet--range">
				<Dropdown
					usePortal
					dropUp
					button={<FacetButton label={props.label} />}
					style={{
						'.ss__dropdown__content': {
							width: width ? `${width}px` : 'auto',
							background: 'white',
							boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
							borderRadius: '6px',
						},
					}}
				>
					<div className="ss__chat__actions__facet__options">
						<div className="ss__chat__actions__facet__slider" style={{ padding: '12px 16px' }}>
							<FacetSlider
								facet={props.facet}
								onChange={() => {
									if (!multiselectFacets) {
										// FacetSlider fires onChange before its urlManager update; defer
										// so controller.search() reads the updated filter state. Force
										// productSearch with the current filters so a slider tweak doesn't
										// fall through to `general` when hasPendingFacetChanges happens to
										// be false (e.g. the slider returned to the seeded range).
										queueMicrotask(() =>
											controller.search({
												data: { requestType: 'productSearch', searchFilters: controller.store.searchFilters },
											} as any)
										);
									}
								}}
							/>
						</div>
					</div>
				</Dropdown>
			</div>
		);
	};

	// TODO: if starting a new chat and it's expired, this button would then disappear
	if (!controller.store.chatEnabled) {
		return <></>;
	}

	const { swipeOffset, swipeAnimating, swipeHandlers } = useChatGestures({
		panelRef: secondaryRef,
		shouldShowSideChat: !!shouldShowSideChat,
		activeMessageId: activeMessage?.id,
		onDismiss: () => {
			const attachments = store.currentChat?.attachments.attached || [];
			const productAttachments = attachments.filter(
				(item: any) => item.type === 'product' && item.requestType !== 'productSimilar' && item.requestType !== 'productComparison'
			);
			productAttachments.forEach((item) => store.currentChat?.attachments.remove(item.id));
			setMobileProductInfoOpen(false);
			store.currentChat?.dismissSideChat();
		},
	});

	const requestType = store.currentChat?.requestType;
	const loadingVerbs = useMemo(() => {
		switch (requestType) {
			case 'productQuery':
				return ['Thinking', 'Searching', 'Analyzing', 'Gathering details'];
			case 'productSearch':
				return ['Searching', 'Browsing catalog', 'Finding products', 'Curating results'];
			case 'productComparison':
				return ['Comparing', 'Analyzing', 'Evaluating', 'Weighing options'];
			case 'imageSearch':
				return ['Analyzing image', 'Identifying', 'Searching', 'Matching'];
			case 'productSimilar':
				return ['Finding similar items', 'Searching', 'Matching', 'Curating'];
			case 'inspirationRequest':
				return ['Brainstorming', 'Imagining', 'Curating', 'Inspiring'];
			case 'general':
			default:
				return undefined;
		}
	}, [requestType]);

	const isWelcomeState = (!store.currentChat?.chat || store.currentChat.chat.length === 0) && !!store.welcomeMessage && !store.currentChat?.isExpired;

	return (
		<CacheProvider>
			<>
				<div
					ref={chatRef}
					className={classnames(
						'ss__chat',
						{
							'ss__chat--open': store.open,
							'ss__chat--minimized': !store.open,
							'ss__chat--mobile': isMobile,
							'ss__chat--welcome': isWelcomeState,
						},
						className,
						internalClassName
					)}
					{...styling}
				>
					{!disableBubbleSuggestedQuestions && !store.open && !store.currentChat && store.suggestedQuestions?.length > 0 && (
						<div className="ss__chat__suggested-questions">
							{store.suggestedQuestions.map((question, index) => (
								<div
									key={index}
									className="ss__chat__suggested-questions__item"
									onClick={() => {
										controller.openChat(question);
									}}
								>
									{question}
								</div>
							))}
						</div>
					)}
					<button
						type="button"
						className={'ss__chat__bubble'}
						aria-label={store.open ? 'Close chat' : 'Open chat'}
						aria-expanded={store.open}
						onClick={() => controller.handlers.button.click()}
					>
						<Icon icon="chat" title="Open Chat" />
					</button>
					{store.open && shouldShowSideChat && activeMessage ? (
						<div
							ref={secondaryRef}
							className={classnames('ss__chat__secondary')}
							role="region"
							aria-label="Conversation details"
							style={
								isMobile
									? {
											// Touch swipe animations need to be inline to prevent visual jumps
											transform: swipeOffset > 0 ? `translateY(${swipeOffset}px)` : undefined,
											transition: swipeAnimating ? 'transform 0.3s ease-out' : 'none',
									  }
									: undefined
							}
						>
							{isMobile && (
								<div className="ss__chat__secondary__drag-handle" {...swipeHandlers}>
									<div className="ss__chat__secondary__drag-handle__indicator" />
								</div>
							)}
							<div
								className={'ss__chat__header'}
								onTouchStart={isMobile ? swipeHandlers.onTouchStart : undefined}
								onTouchMove={isMobile ? swipeHandlers.onTouchMove : undefined}
								onTouchEnd={isMobile ? swipeHandlers.onTouchEnd : undefined}
							>
								<div className="ss__chat__header__title">
									<div className="ss__chat__header__title__primary">
										{(
											{
												inspirationResult: 'Inspiration Scenarios',
												productComparison: 'Product Comparison',
												productQuery: 'Product Information',
											} as any
										)[activeMessage.messageType] || null}
									</div>
									<div className="ss__chat__header__title__secondary">
										{(
											{
												inspirationResult: 'Choose a style direction to explore',
												productComparison: `Comparing ${(activeMessage as ChatResponseProductComparisonData)?.searchResults?.length || ''} products`,
												productQuery: 'Complete product details',
											} as any
										)[activeMessage.messageType] || null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									<Button
										className="ss__chat__header__button--close"
										aria-label="Close chat"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => {
											// clear any product attachments tied to the side chat (discuss product flow)
											// so the attachments bar disappears alongside the secondary panel
											// but preserve productComparison attachments so the user can continue comparing
											const productAttachmentsToRemove = (store.currentChat?.attachments.attached || []).filter(
												(item) =>
													item.type === 'product' &&
													(item as any).requestType !== 'productSimilar' &&
													(item as any).requestType !== 'productComparison'
											);
											productAttachmentsToRemove.forEach((item) => store.currentChat?.attachments.remove(item.id));
											setMobileProductInfoOpen(false);
											store.currentChat?.dismissSideChat();
										}}
									/>
								</div>
							</div>
							<div className="ss__chat__content">
								<div className={'ss__chat__messages'}>
									{/* TODO add ref? */}
									{(
										{
											inspirationResult: (
												<ChatInspirationResultMessage
													{...subProps.inspirationResultMessage}
													chatItem={activeMessage as ChatResponseInspirationResultData}
													controller={controller}
													onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
												/>
											),
											productComparison: (
												<ChatProductComparisonMessage
													{...subProps.productComparisonMessage}
													chatItem={activeMessage as ChatResponseProductComparisonData}
													controller={controller}
												/>
											),
											productQuery: (
												<ChatProductQueryMessage
													{...subProps.productQueryMessage}
													chatItem={activeMessage as unknown as ChatProductQueryMessageItem}
													controller={controller}
													displayFields={controller.config.settings?.quickview?.displayFields}
													primaryColor={colorPrimary}
													primaryColorText={colorPrimaryText}
												/>
											),
										} as any
									)[activeMessage.messageType] || null}
								</div>
							</div>
						</div>
					) : null}
					{store.open ? (
						<div className={'ss__chat__primary'}>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__title">
									{logo ? <img className="ss__chat__header__title__logo" src={logo} /> : null}
									<div className="ss__chat__header__title__text">
										{title ? <div className="ss__chat__header__title__text__primary">{title}</div> : null}
										{subtitle ? <div className="ss__chat__header__title__text__secondary">{subtitle}</div> : null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									{/* <Button
										className="ss__chat__header__button--new" aria-label="New chat"
										icon={{ icon: 'inspire', title: 'Inspire' }}
										onClick={() => {
											controller.inspirationRequest();
										}}
										content={'Inspire'}
									/> */}
									<Button
										// disabled={store.currentChat?.chat && store.currentChat.chat.length <= 1}
										className="ss__chat__header__button--new"
										aria-label="New chat"
										icon={{ icon: controller.store.initChatLoading ? 'spinner' : 'plus2', title: 'New Chat' }}
										onClick={() => controller.store.createChat()}
									/>
									{store.chats.length > 1 && (
										<Dropdown
											disabled={store.chats.length == 1 && store.currentChat && store.currentChat.chat.length <= 1}
											className="ss__chat__header__dropdown-history"
											button={<HistoryButton />}
										>
											<HistoryPopup />
										</Dropdown>
									)}
									<Button
										className="ss__chat__header__button--close"
										aria-label="Close chat"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => controller.handlers.button.click()}
									/>
								</div>
							</div>
							{(() => {
								const feedbackAfterMessages = controller.config.settings?.feedbackAfterMessages;
								const systemMessages = (store.currentChat?.chat || []).filter(
									(msg) => msg.messageType !== 'user' && msg.messageType !== 'productQuery'
								);
								const currentRating = store.currentChat?.sessionFeedback?.rating;
								const hasRated = !!currentRating;
								const shouldShowFeedback =
									feedbackAfterMessages &&
									systemMessages.length >= feedbackAfterMessages &&
									!store.currentChat?.feedbackDismissed &&
									(!hasRated || store.currentChat?.feedbackJustGiven);

								return shouldShowFeedback ? (
									<div className="ss__chat__session-feedback">
										<div className="ss__chat__session-feedback__icon">
											<Icon icon="chat" size="16px" />
										</div>
										<span className="ss__chat__session-feedback__label">
											{hasRated ? 'Thank you for your feedback' : "How's your experience so far?"}
										</span>
										<div className={`ss__chat__session-feedback__actions${hasRated ? ' ss__chat__session-feedback__actions--rated' : ''}`}>
											{(!hasRated || currentRating === 'UP') && (
												<span onClick={() => !hasRated && controller.handleFeedback('UP')}>
													<Icon icon={'thumbs-up'} size="16px" title={'Thumbs Up'} />
												</span>
											)}
											{(!hasRated || currentRating === 'DOWN') && (
												<span onClick={() => !hasRated && controller.handleFeedback('DOWN')}>
													<Icon icon={'thumbs-down'} size="16px" title={'Thumbs Down'} />
												</span>
											)}
										</div>
										{!hasRated && (
											<span
												className="ss__chat__session-feedback__close"
												onClick={() => {
													if (store.currentChat) {
														store.currentChat.feedbackDismissed = true;
														store.currentChat.save();
													}
												}}
											>
												<Icon icon="close-thin" size="14px" />
											</span>
										)}
									</div>
								) : null;
							})()}
							<div className="ss__chat__content">
								<div
									ref={headerRef}
									className={classnames('ss__chat__content__header', {
										'ss__chat__content__header--overlay': messagesOverflow,
									})}
								>
									{/* <div className="ss__chat__attachments">
									{store.currentChat?.attachments.attached
										.filter((item) => item.state === 'active')
										.map((item) => (
											<Attachment key={item.id} attachment={item} controller={controller} />
										))}
								</div> */}
									{store.currentChat?.comparisons.compared && store.currentChat.comparisons.compared.length > 0 && (
										<div className={'ss__chat__content__header__comparisons'}>
											<div className={'ss__chat__content__header__comparisons__header'}>
												<div className={'ss__chat__content__header__comparisons__header__title'}>
													<Icon className={'ss__chat__content__header__comparisons__header__title__icon'} icon={'clipboard'} />
													<span className={'ss__chat__content__header__comparisons__header__title__text'}>
														Compare Products ({store.currentChat?.comparisons.compared.length}/{store.currentChat?.comparisons.maxItems})
													</span>
												</div>
												<div className={'ss__chat__content__header__comparisons__header__actions'}>
													<Button onClick={() => store.currentChat?.comparisons.reset()}>clear</Button>
												</div>
											</div>
											<div className={'ss__chat__content__header__comparisons__content'}>
												<div className={'ss__chat__content__header__comparisons__content__items'}>
													{Array.from({ length: store.currentChat?.comparisons.maxItems }).map((_, index) => {
														const comparisonItem = store.currentChat?.comparisons.compared[index];
														return (
															<div
																className={classnames('ss__chat__content__header__comparisons__content__comparison', {
																	'ss__chat__content__header__comparisons__content__comparison--placeholder': !comparisonItem,
																})}
																key={index}
															>
																{comparisonItem ? (
																	<>
																		<Image
																			// onClick={() => {
																			// 	controller?.productQuickView(product as any);
																			// }}
																			alt={(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.name || ''}
																			src={
																				(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.imageUrl ||
																				(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.parentImageUrl ||
																				''
																			}
																		/>
																		<div
																			className="ss__chat__content__header__comparisons__content__comparison__remove"
																			onClick={() => {
																				store.currentChat?.comparisons.remove(comparisonItem.result.id);
																			}}
																		>
																			<Icon icon={'close-thin'} size={'12px'} />
																		</div>
																	</>
																) : (
																	<>
																		<Icon icon={'plus-thin'} />
																		<div className={'ss__chat__content__header__comparisons__content__comparison--placeholder__text'}>Add</div>
																	</>
																)}
															</div>
														);
													})}
												</div>
												<div
													className={classnames('ss__chat__content__header__comparisons__action', {
														'ss__chat__content__header__comparisons__action--hidden': (store.currentChat?.comparisons.compared.length || 0) < 2,
													})}
												>
													<Button onClick={() => controller.search()} icon={{ icon: 'compare', title: 'Compare' }}>
														Compare
													</Button>
												</div>
											</div>
										</div>
									)}
								</div>
								<div
									className={'ss__chat__messages'}
									ref={messagesContainerRef}
									role="log"
									aria-live="polite"
									aria-relevant="additions"
									aria-label="Chat messages"
									style={visibleChatLength ? { scrollbarGutter: 'stable' } : undefined}
								>
									{(!store.currentChat?.chat || store.currentChat.chat.length === 0) && store.welcomeMessage && !store.currentChat?.isExpired && (
										<div className="ss__chat__welcome">
											<div className="ss__chat__welcome__message">{store.welcomeMessage}</div>
											<ChatSuggestedQuestions {...subProps.suggestedQuestions} questions={store.suggestedQuestions} controller={controller} />
										</div>
									)}
									{store.currentChat?.chat
										.filter((chatItem) => chatItem.messageType !== 'productQuery')
										.map((chatItem, index) => (
											<div key={index} className={`ss__chat__message ss__chat__message--${chatItem.messageType}`}>
												{{
													user: (
														<ChatMessageUser
															{...subProps.messageUser}
															chatItem={chatItem}
															controller={controller}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													text: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													content: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productSearchResult: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													inspirationResult: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productAnswer: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productComparison: (() => {
														// On mobile, only the first productComparison in the session
														// auto-opens the secondary panel. Subsequent ones get a
														// prominent "Show Details" button instead.
														const comparisonMessages = (store.currentChat?.chat || []).filter((m) => m.messageType === 'productComparison');
														const isFirst = comparisonMessages.length > 0 && comparisonMessages[0].id === chatItem.id;
														return (
															<ChatMessageText
																{...subProps.messageText}
																chatItem={chatItem}
																controller={controller}
																scrollToBottom={scrollToBottomIfNear}
																onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
																showDetailsButton={isMobile && !isFirst}
																sideChatOpen={!!shouldShowSideChat}
																primaryColor={colorPrimary}
																primaryColorText={colorPrimaryText}
															/>
														);
													})(),
													productRecommendation: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													actions: (
														<ChatSuggestedQuestions actions={(chatItem as unknown as ChatResponseActionsData).actions} controller={controller} />
													),
													errorResponse: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													topicDrift: (
														<ChatMessageText
															{...subProps.messageText}
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productQuery: null,
												}[chatItem.messageType] || null}
											</div>
										))}
									<div className="ss__chat__messages__end" ref={messagesEndRef} />
									{showNewMessages && messagesOverflow && (
										<div
											className="ss__chat__new-messages"
											onClick={() => {
												scrollToBottom();
												setShowNewMessages(false);
											}}
										>
											<Icon icon="angle-down" size="12px" />
											<span>New messages</span>
										</div>
									)}
								</div>
								<ChatLoadingIndicator {...subProps.loadingIndicator} loading={store.loading} verbs={loadingVerbs} />
								{!store.currentChat?.isExpired ? (
									<div className="ss__chat__content__footer" ref={footerRef} {...dragHandlers}>
										{store.error && <div className="ss__chat__error">{store.error.message}</div>}
										{store.currentChat?.sessionLimitReached && (
											<div className={'ss__chat__topic-drift'}>
												<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
												<div className={'ss__chat__topic-drift__text'}>
													<span>Session limit reached</span>
													<span>This chat has reached its maximum number of interactions. Start a new session to continue.</span>
												</div>
												<Button
													className={'ss__chat__topic-drift__button'}
													onClick={() => {
														controller.store.createChat();
													}}
												>
													New Session
												</Button>
											</div>
										)}
										{store.facets && store.facets.length > 0 && (
											<div className={'ss__chat__actions'}>
												<div className="ss__chat__actions__wrap">
													<div className="ss__chat__actions__facets-header">
														<div className="ss__chat__actions--title">Filter by:</div>
														{multiselectFacets && store.hasPendingFacetChanges && (
															<div className={'ss__chat__actions__facets-apply ss__chat__actions__facets-apply--active'}>
																<Button
																	onClick={() => {
																		controller.search();
																	}}
																>
																	{store.pendingFacetCount > 0 ? `Apply (${store.pendingFacetCount})` : 'Clear facets'}
																</Button>
															</div>
														)}
													</div>
													<div className="ss__chat__actions--facets">
														{store.facets.slice(0, 10).map((facet: ValueFacet | RangeFacet, idx: number) => {
															// range/slider facets render via FacetSlider; everything else needs at least one value to be useful
															if (facet.type !== 'range' && !(facet as ValueFacet).values?.length) return null;
															if (facet.type === 'range') {
																return <SliderFacetDropdown key={idx} facet={facet as RangeFacet} label={getFacetButtonLabel(facet)} />;
															}
															return (
																<div className={`ss__chat__actions__facet ss__chat__actions__facet--${facet.type}`} key={idx}>
																	<Dropdown
																		key={facet.field}
																		usePortal
																		dropUp
																		boundaryRef={chatRef}
																		button={<FacetButton label={getFacetButtonLabel(facet)} />}
																		style={{
																			'.ss__dropdown__content': {
																				width: '150px',
																				maxHeight: '200px',
																				overflowY: 'auto',
																				background: 'white',
																				boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
																				borderRadius: '6px',
																				...(multiselectFacets
																					? {
																							'.ss__chat__actions__facet__option--checkbox': {
																								display: 'flex',
																								alignItems: 'center',
																								gap: '8px',
																								padding: '6px 10px',
																								cursor: 'pointer',
																								width: '100%',
																								boxSizing: 'border-box' as const,
																								background: '#fff',
																								border: 'none',
																								borderBottom: '1px solid #f0f0f0',
																								'&:hover': {
																									background: new Colour(colorPrimary).lightenHex(0.95),
																								},
																								'&:last-child': {
																									borderBottom: 'none',
																								},
																								'.ss__chat__actions__facet__option__checkbox': {
																									width: '16px',
																									height: '16px',
																									borderRadius: '3px',
																									border: '2px solid #ccc',
																									display: 'flex',
																									alignItems: 'center',
																									justifyContent: 'center',
																									flexShrink: 0,
																									'&.ss__chat__actions__facet__option__checkbox--checked': {
																										background: colorPrimary,
																										borderColor: colorPrimary,
																										color: colorPrimaryText,
																										svg: {
																											fill: colorPrimaryText,
																											stroke: colorPrimaryText,
																										},
																									},
																								},
																								'.ss__chat__actions__facet__option__label': {
																									fontSize: '14px',
																									color: '#333',
																									flex: '1 1 auto',
																									textAlign: 'left' as const,
																								},
																							},
																					  }
																					: {
																							'.ss__button': {
																								width: '100%',
																								border: 'none',
																								borderRadius: 0,
																								boxSizing: 'border-box',
																								background: '#fff',
																								'&:hover': {
																									background: new Colour(colorPrimary).lightenHex(0.95),
																								},
																								'&.ss__chat__actions__facet__option--selected': {
																									fontWeight: 'bold',
																								},
																							},
																					  }),
																			},
																		}}
																	>
																		<div className="ss__chat__actions__facet__options">
																			{facet.type === 'range-buckets'
																				? (facet as ValueFacet).values.map((option) => {
																						const rangeOption = option as FacetRangeValue;
																						const optionValue = `${rangeOption.low ?? '*'}:${rangeOption.high ?? '*'}`;
																						if (multiselectFacets) {
																							const isSelected = controller.store.isFacetSelected(facet.field, optionValue);
																							return (
																								<div
																									key={optionValue}
																									className="ss__chat__actions__facet__option--checkbox"
																									onClick={() => {
																										if (isSelected) {
																											controller.store.removeFacet(facet.field, optionValue);
																										} else {
																											controller.store.addFacet({
																												key: facet.field,
																												value: optionValue,
																											});
																										}
																									}}
																								>
																									<div
																										className={classnames('ss__chat__actions__facet__option__checkbox', {
																											'ss__chat__actions__facet__option__checkbox--checked': isSelected,
																										})}
																									>
																										{isSelected && <Icon icon="check-thin" size="10px" />}
																									</div>
																									<span className="ss__chat__actions__facet__option__label">{rangeOption.label}</span>
																								</div>
																							);
																						}
																						return (
																							<Button
																								key={optionValue}
																								className={classnames({
																									'ss__chat__actions__facet__option--selected': controller.store.isFacetSelected(
																										facet.field,
																										optionValue
																									),
																								})}
																								onClick={() => {
																									// Non-multiselect: clicking an already-selected value toggles it off.
																									// `addFacet` is idempotent against an existing urlManager value, so without
																									// the toggle the state wouldn't change, `hasPendingFacetChanges` would stay
																									// false, and the params getter would fall through to `general`.
																									if (controller.store.isFacetSelected(facet.field, optionValue)) {
																										controller.store.removeFacet(facet.field, optionValue);
																									} else {
																										controller.store.addFacet({
																											key: facet.field,
																											value: optionValue,
																										});
																									}
																									// Force productSearch with the current filter state rather than relying
																									// on the params getter's hasPendingFacetChanges promotion — a facet click
																									// in the chat is unambiguously a search intent.
																									controller.search({
																										data: { requestType: 'productSearch', searchFilters: controller.store.searchFilters },
																									} as any);
																								}}
																							>
																								{rangeOption.label}
																							</Button>
																						);
																				  })
																				: (facet as ValueFacet).values.map((option) => {
																						const valueOption = option as FacetValue;
																						const optionValue = valueOption.value || valueOption.label;
																						if (multiselectFacets) {
																							const isSelected = controller.store.isFacetSelected(facet.field, optionValue);
																							return (
																								<div
																									key={optionValue}
																									className="ss__chat__actions__facet__option--checkbox"
																									onClick={() => {
																										if (isSelected) {
																											controller.store.removeFacet(facet.field, optionValue);
																										} else {
																											controller.store.addFacet({
																												key: facet.field,
																												value: optionValue,
																											});
																										}
																									}}
																								>
																									<div
																										className={classnames('ss__chat__actions__facet__option__checkbox', {
																											'ss__chat__actions__facet__option__checkbox--checked': isSelected,
																										})}
																									>
																										{isSelected && <Icon icon="check-thin" size="10px" />}
																									</div>
																									<span className="ss__chat__actions__facet__option__label">{valueOption.label}</span>
																								</div>
																							);
																						}
																						return (
																							<Button
																								key={optionValue}
																								className={classnames({
																									'ss__chat__actions__facet__option--selected': controller.store.isFacetSelected(
																										facet.field,
																										optionValue
																									),
																								})}
																								onClick={() => {
																									// Non-multiselect: clicking an already-selected value toggles it off.
																									// `addFacet` is idempotent against an existing urlManager value, so without
																									// the toggle the state wouldn't change, `hasPendingFacetChanges` would stay
																									// false, and the params getter would fall through to `general`.
																									if (controller.store.isFacetSelected(facet.field, optionValue)) {
																										controller.store.removeFacet(facet.field, optionValue);
																									} else {
																										controller.store.addFacet({
																											key: facet.field,
																											value: optionValue,
																										});
																									}
																									// Force productSearch with the current filter state rather than relying
																									// on the params getter's hasPendingFacetChanges promotion — a facet click
																									// in the chat is unambiguously a search intent.
																									controller.search({
																										data: { requestType: 'productSearch', searchFilters: controller.store.searchFilters },
																									} as any);
																								}}
																							>
																								{valueOption.label}
																							</Button>
																						);
																				  })}
																		</div>
																	</Dropdown>
																</div>
															);
														})}
													</div>
												</div>
											</div>
										)}
										{(() => {
											const activeComparisonSearchResults =
												shouldShowSideChat && activeMessage?.messageType === 'productComparison'
													? (activeMessage as ChatResponseProductComparisonData).searchResults || []
													: null;

											const showCommittedComparisons =
												!activeComparisonSearchResults &&
												store.currentChat?.comparisons.committed &&
												store.currentChat.comparisons.committed.length > 0 &&
												(activeMessage?.messageType === 'user' ||
													activeMessage?.messageType === 'productComparison' ||
													activeMessage?.messageType === 'productQuery');

											const visibleAttachments =
												store.currentChat?.attachments.attached.filter(
													(item) => item.state === 'attached' || item.state === 'active' || item.state === 'loading' || item.state === 'error'
												) || [];

											const productAttachments = visibleAttachments.filter(
												(item) =>
													item.type === 'product' &&
													(item as any).requestType !== 'productSimilar' &&
													(item as any).requestType !== 'productComparison'
											);
											const imageAttachments = visibleAttachments.filter((item) => item.type === 'image');

											const comparisonItems: ChatAttachmentContextItem[] = activeComparisonSearchResults
												? activeComparisonSearchResults.map((result: any) => {
														const d = result?.display || result;
														return {
															id: result?.id,
															name: d?.mappings?.core?.name || '',
															imageUrl:
																d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || d?.mappings?.core?.parentImageUrl || '',
															onClick: () => {
																controller.productQuickView(result);
																if (isMobile) setMobileProductInfoOpen(true);
															},
														};
												  })
												: showCommittedComparisons
												? (store.currentChat?.comparisons.committed || []).map((comparisonItem: any) => {
														const d = comparisonItem?.result?.display || comparisonItem?.result;
														return {
															id: comparisonItem.result?.id,
															name: d?.mappings?.core?.name || '',
															imageUrl:
																d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || d?.mappings?.core?.parentImageUrl || '',
															onClick: () => {
																controller.productQuickView(comparisonItem.result);
																if (isMobile) setMobileProductInfoOpen(true);
															},
														};
												  })
												: [];

											const productItems: ChatAttachmentContextItem[] = productAttachments.map((item: any) => {
												const remove = () => {
													store.currentChat?.attachments.remove(item.id);
													setMobileProductInfoOpen(false);
													store.currentChat?.dismissSideChat();
												};
												return {
													id: item.id,
													name: item.name || '',
													imageUrl: item.thumbnailUrl || '',
													onClick: remove,
													onRemove: remove,
												};
											});

											const imageItems: ChatAttachmentContextItem[] = imageAttachments.map((item: any) => ({
												id: item.id,
												name: item.fileName || 'Image',
												imageUrl: item.base64 || item.thumbnailUrl || '',
												isLoading: item.state === 'loading',
												hasError: !!item.error,
												errorMessage: item.error?.message,
												onRemove: () => store.currentChat?.attachments.remove(item.id),
											}));

											const productTitle = productItems.length > 1 ? 'Compare these products' : 'Ask about this product';
											const hasImageError = imageItems.some((item) => item.hasError);
											const imageTitle = imageItems.length > 0 && !hasImageError ? 'Find products similar to this image:' : '';

											return (
												<>
													{comparisonItems.length > 0 && (
														<ChatAttachmentContext
															{...subProps.attachmentContext}
															title={'Compare these products'}
															items={comparisonItems}
															onClose={() => {
																store.currentChat?.comparisons.resetCommitted();
																store.currentChat?.dismissSideChat();
															}}
														/>
													)}
													{productItems.length > 0 && (
														<ChatAttachmentContext
															{...subProps.attachmentContext}
															title={productTitle}
															items={productItems}
															onClose={() => {
																productAttachments.forEach((item: any) => store.currentChat?.attachments.remove(item.id));
																setMobileProductInfoOpen(false);
																store.currentChat?.dismissSideChat();
															}}
														/>
													)}
													{imageItems.length > 0 && <ChatAttachmentContext {...subProps.attachmentContext} title={imageTitle} items={imageItems} />}
												</>
											);
										})()}

										{(() => {
											const drift = store.currentChat?.topicDrift;
											if (!drift) return null;
											// recommendedAction is the prescription; driftType is the diagnosis.
											// Hide the banner when the backend says to keep flowing, or when no drift was detected.
											if (drift.recommendedAction === 'CONTINUE' || drift.driftType === 'NO_DRIFT') return null;

											const isScopeRedirect = drift.recommendedAction === 'SCOPE_REDIRECT';
											const primaryText = isScopeRedirect ? "I'm here to help with shopping" : 'Looking for something new?';
											const secondaryText = isScopeRedirect
												? 'Try asking about products, comparisons, or recommendations'
												: 'Start a fresh session for better assistance, or keep going in this one?';
											const buttonText = isScopeRedirect ? '' : 'New Session';

											return (
												<div className={'ss__chat__topic-drift'}>
													<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
													<div className={'ss__chat__topic-drift__text'}>
														<span>{primaryText}</span>
														<span>{secondaryText}</span>
													</div>
													{buttonText && (
														<Button
															className={'ss__chat__topic-drift__button'}
															onClick={() => {
																if (isScopeRedirect) {
																	store.currentChat?.dismissTopicDrift();
																	return;
																}
																// Capture image attachments from the current chat before handleTopicDrift /
																// createChat tear down the conversation — an imageSearch that drifted needs
																// the same image attached to the carried-over message in the new session,
																// otherwise params would fall back to a `general` request without the image.
																const previousImageAttachments = (store.currentChat?.attachments.attached || [])
																	.filter((item) => item.type === 'image' && item.state !== 'error')
																	.map((item) => {
																		const img = item as ChatAttachmentImage;
																		return {
																			type: 'image' as const,
																			base64: img.base64,
																			fileName: img.fileName,
																			imageId: img.imageId,
																			imageUrl: img.imageUrl,
																			thumbnailUrl: img.thumbnailUrl,
																			// Already uploaded — skip the 'loading' default state.
																			state: 'attached' as const,
																		};
																	});
																const messageText = store.currentChat?.handleTopicDrift();
																if (messageText) {
																	controller.store.createChat();
																	previousImageAttachments.forEach((cfg) => {
																		controller.store.currentChat?.attachments.add(cfg);
																	});
																	controller.search({ data: { message: messageText } } as any);
																}
															}}
														>
															{buttonText}
														</Button>
													)}
													<span
														onClick={() => {
															store.currentChat?.dismissTopicDrift();
														}}
													>
														<Icon icon="close-thin" size="14px" className={'ss__chat__topic-drift__icon--close'} />
													</span>
												</div>
											);
										})()}
										<div className={'ss__chat__input'}>
											<div className={'ss__chat__input__input'}>
												<input
													type="text"
													name="ss-chat-input"
													disabled={store.loading || store.blocked || store.currentChat?.sessionLimitReached}
													placeholder={(() => {
														const comparedCount = store.currentChat?.comparisons.compared.length || 0;
														const committedCount = store.currentChat?.comparisons.committed.length || 0;
														const attached =
															store.currentChat?.attachments.attached.filter((item) => item.state === 'attached' || item.state === 'active') || [];
														const attachedProducts = attached.filter((item) => item.type === 'product');
														const attachedImages = attached.filter((item) => item.type === 'image' && !item.error);

														if (attachedProducts.length === 1) {
															return 'Ask about this product...';
														}
														if (comparedCount > 1 || attachedProducts.length > 1) {
															return 'What would you like to compare?';
														}
														if (committedCount > 0) {
															return 'Ask about the compared products...';
														}

														if (attachedImages.length > 0) {
															return 'Ask about this image...';
														}
														if (comparedCount === 1) {
															return 'Add another product to compare...';
														}
														return 'Type your message...';
													})()}
													onInput={(e) => controller.handlers.input.input(e as any)}
													onKeyDown={(e) => {
														controller.handlers.input.enterKey(e as any);
														if ((e as any).keyCode === 13 && isMobile && mobileProductInfoOpen) {
															setMobileProductInfoOpen(false);
														}
													}}
													value={controller.store.inputValue}
												/>
												{store.features.imageSearch.enabled && (
													<>
														<Button
															className={'ss__chat__upload-button'}
															disabled={store.loading || store.blocked || store.currentChat?.sessionLimitReached}
															onClick={() => fileInputRef.current?.click()}
															icon={{ icon: 'image', title: 'Upload Image' }}
														/>
														<input
															ref={fileInputRef}
															onChange={async (e) => {
																await controller.upload(e.target.files);
																// reset value
																e.target.value = '';
															}}
															type="file"
															accept="image/*"
															className="ss__chat__input__input__file"
														/>
													</>
												)}
											</div>
											<div className={'ss__chat__input__actions'}>
												{(() => {
													const hasImageAttachment = (store.currentChat?.attachments.attached || []).some(
														(item) => item.type === 'image' && !item.error
													);
													const messageEmpty = !controller.store.inputValue.trim();
													const sendDisabled =
														store.blocked || store.currentChat?.sessionLimitReached || (hasImageAttachment && messageEmpty) || messageEmpty;
													return (
														<Button
															className="ss__chat__send-button"
															icon={{ icon: 'send', title: 'Send Message' }}
															disabled={sendDisabled}
															onClick={() => {
																if (sendDisabled) return;
																controller.search();
																if (isMobile && mobileProductInfoOpen) {
																	setMobileProductInfoOpen(false);
																}
															}}
														/>
													);
												})()}
											</div>
										</div>
										<div className={'ss__chat__disclaimer'}>
											<i>
												Powered by Athos Commerce. AI-powered assistant. It sometimes make mistakes. Avoid sharing personal data.{' '}
												<a href="https://athoscommerce.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
													Privacy Policy
												</a>
											</i>
										</div>
										{isDraggingFile && (
											<div className="ss__chat__content__footer__drop-overlay">
												<Icon icon="image" size="24px" />
												<span>Drop image to upload</span>
											</div>
										)}
									</div>
								) : (
									<div className={'ss__chat__expired'}>
										<div className={'ss__chat__expired__message'}>This chat is expired. Please start a new chat.</div>
										<Button
											className={'ss__chat__expired__button'}
											onClick={() => {
												controller.store.createChat();
											}}
										>
											New Session
										</Button>
									</div>
								)}
							</div>
						</div>
					) : null}
				</div>
				<Overlay style={{ zIndex: 1001 }} color="transparent" active={store.open} onClick={() => controller.handlers.button.click()} />
			</>
		</CacheProvider>
	);
});

export type ChatOrganismProps = {
	controller: ChatController;
	lang?: Partial<ChatLang>;
} & ChatTemplatesLegalProps &
	ComponentProps<ChatOrganismProps>;

export type ChatTemplatesLegalProps = {
	logo?: string;
	title?: string;
	subtitle?: string;
	offset?: string | number;
	multiselectFacets?: boolean;
	disableBubbleSuggestedQuestions?: boolean;
	position?: 'left' | 'right';
	primaryColorBg?: string;
	primaryColorFg?: string;
	primaryAccentColorBg?: string;
	primaryAccentColorFg?: string;
	secondaryAccentColorBg?: string;
	secondaryAccentColorFg?: string;
};

export interface ChatLang {
	// Placeholder for future lang overrides (e.g. header title, send-button label).
}

interface ChatSubProps {
	messageUser: Partial<ChatMessageUserProps>;
	messageText: Partial<ChatMessageTextProps>;
	suggestedQuestions: Partial<ChatSuggestedQuestionsProps>;
	attachmentContext: Partial<ChatAttachmentContextProps>;
	loadingIndicator: Partial<ChatLoadingIndicatorProps>;
	inspirationResultMessage: Partial<ChatInspirationResultMessageProps>;
	productComparisonMessage: Partial<ChatProductComparisonMessageProps>;
	productQueryMessage: Partial<ChatProductQueryMessageProps>;
}
