import { h } from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatAttachmentProduct } from '@athoscommerce/snap-store-mobx';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { useLang, useMediaQuery } from '../../../hooks';
import { useA11y } from '../../../hooks/useA11y';
import { Button } from '../../Atoms/Button';
import { Icon } from '../../Atoms/Icon';
import { Image } from '../../Atoms/Image';
import { Overlay } from '../../Atoms/Overlay';
import { ChatLoadingIndicator, ChatLoadingIndicatorProps } from '../../Atoms/ChatLoadingIndicator';

import { useChatOverflow } from './hooks/useChatOverflow';
import { useChatFileUpload } from './hooks/useChatFileUpload';
import { useChatScrollLock } from './hooks/useChatScrollLock';
import { chatAccentThemeComponents } from './components/chatAccentTheme';
import { ChatLang, chatDefaultLang, langAttrOf, langTextOf } from './Chat.lang';
import { ChatHistory, ChatHistoryProps } from './components/ChatHistory';
import { ChatSideChat, ChatSideChatProps } from './components/ChatSideChat';
import { ChatMessages, ChatMessagesProps } from './components/ChatMessages';
import { ChatSessionFeedback, ChatSessionFeedbackProps } from './components/ChatSessionFeedback';
import { ChatComparisonsTray, ChatComparisonsTrayProps } from './components/ChatComparisonsTray';
import { ChatFacetsBar, ChatFacetsBarProps } from './components/ChatFacetsBar';
import { ChatAttachments, ChatAttachmentsProps } from './components/ChatAttachments';
import { ChatTopicDrift, ChatTopicDriftProps } from './components/ChatTopicDrift';
import { ChatComposer, ChatComposerProps } from './components/ChatComposer';

const isValidImageUrl = (value: string): boolean => {
	try {
		const { protocol } = new URL(value);
		return protocol === 'http:' || protocol === 'https:' || protocol === 'data:';
	} catch {
		return false;
	}
};

// maps the store requestType to the lang key providing the loading indicator verbs
const LOADING_VERB_LANG_KEYS: { [requestType: string]: keyof ChatLang } = {
	productQuery: 'loadingVerbsProductQuery',
	productSearch: 'loadingVerbsProductSearch',
	productComparison: 'loadingVerbsProductComparison',
	imageSearch: 'loadingVerbsImageSearch',
	productSimilar: 'loadingVerbsProductSimilar',
	inspirationRequest: 'loadingVerbsInspirationRequest',
};

export type ChatStylingProps = {
	mobile: boolean;
	hasSideChat: boolean;
	footerHeight: number;
};

const defaultStyles: StyleScript<ChatOrganismProps & ChatStylingProps> = ({
	mobile,
	offset,
	hasSideChat,
	position,
	primaryColorBg,
	primaryColorFg,
}) => {
	const isRight = position !== 'left';
	// horizontal anchor for the root + bubble + suggested questions
	const horizontalAnchor = isRight ? 'right' : 'left';
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	const colorPrimaryHover = new Colour(colorPrimary).darkenHex();
	const offsetValue = offset !== undefined ? (typeof offset === 'number' ? `${offset}px` : offset) : undefined;
	return css({
		position: 'fixed',
		[horizontalAnchor]: '20px',
		bottom: '20px',
		zIndex: 1002,
		color: '#333',

		'.ss__chat__primary': {
			...(mobile
				? { width: '100%', height: '100%', position: 'relative', zIndex: 0 }
				: hasSideChat
				? { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh' }
				: { width: 600, maxWidth: 'calc(100vw - 60px)', height: '70vh' }),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			overflow: 'hidden',
			order: isRight ? 2 : 1,
			'.ss__chat__header__title': {
				gap: '22px',
			},
			'.ss__chat__messages': {
				padding: '1em',
			},
		},
		'.ss__chat__secondary': {
			...(mobile ? {} : { flex: '1 1 0', minWidth: 0, maxWidth: 600 }),
			order: isRight ? 1 : 2,
		},

		'.ss__button': {
			border: 'none',
			background: 'none',
			color: 'inherit',
			'&:not(.ss__button--disabled):hover': {
				background: new Colour(colorPrimary).lightenHex(0.85),
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__bubble': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '20px' : 0,
			[horizontalAnchor]: mobile ? '20px' : 0,
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			background: colorPrimary,
			color: colorPrimaryText,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fontSize: '24px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			zIndex: 10,
			border: 'none',
			padding: 0,
			font: 'inherit',
			'&:hover': {
				background: colorPrimaryHover,
				transform: 'scale(1.05)',
			},
			'&:focus-visible': {
				outline: `2px solid ${colorPrimary}`,
				outlineOffset: '4px',
			},
			'.ss__icon': {
				height: '33px',
				width: '33px',
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
		'.ss__chat__suggested-questions': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '90px' : '70px',
			[horizontalAnchor]: mobile ? '20px' : 0,
			display: 'flex',
			flexDirection: 'column',
			gap: '8px',
			width: '250px',
			zIndex: 10,
			'.ss__chat__suggested-questions__item': {
				background: '#fff',
				borderRadius: '12px',
				padding: '12px 16px',
				fontSize: '14px',
				color: '#333',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
				cursor: 'pointer',
				lineHeight: 1.4,
				'&:hover': {
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
				},
			},
		},
		'&.ss__chat--minimized': {
			width: '60px',
			height: '60px',
			minHeight: '60px',
		},
		'&.ss__chat--open': {
			display: 'flex',
			flexDirection: mobile ? 'column' : 'row',
			gap: mobile ? 0 : '12px',
			...(mobile
				? {
						top: offsetValue || 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: '100%',
						height: offsetValue ? `calc(100% - ${offsetValue})` : '100%',
				  }
				: {
						// Hug the content width — two 600px panels + 12px gap — so the
						// container stays anchored to its side instead of stretching to
						// the opposite viewport edge when the side chat opens.
						width: hasSideChat ? 'min(calc(100vw - 60px), 1212px)' : 'auto',
						maxWidth: 'calc(100vw - 60px)',
						maxHeight: 'calc(100vh - 40px)',
				  }),
			'.ss__chat__bubble': {
				display: 'none',
			},
			// At constrained viewport heights (e.g. browser zoom-in) the fixed 70vh panels
			// leave too little room for the messages view once sticky header/footer content
			// is accounted for. Stretch the chat to fill the window minus the offset.
			...(mobile
				? {}
				: {
						'@media (max-height: 800px)': {
							top: offsetValue || 0,
							bottom: 0,
							height: offsetValue ? `calc(100vh - ${offsetValue})` : '100vh',
							maxHeight: offsetValue ? `calc(100vh - ${offsetValue})` : '100vh',
							'.ss__chat__primary': {
								height: '100%',
							},
							'.ss__chat__secondary': {
								height: '100%',
								maxHeight: '100%',
							},
							// The default 90vh cap on chat content would leave unfilled space when
							// the chat stretches to 100vh; primary's justifyContent: flex-end then
							// pushes its content down while secondary stays anchored to the top,
							// making the panels appear misaligned.
							'.ss__chat__content': {
								maxHeight: '100%',
							},
						},
				  }),
		},
		// Welcome state: only the greeting + suggested questions are shown, so let the
		// chat hug its content instead of taking the full 70vh / 100vh used once a
		// conversation has started. Mobile stays fullscreen by design.
		...(mobile
			? {}
			: {
					'&.ss__chat--welcome.ss__chat--open': {
						'.ss__chat__primary': {
							height: 'auto',
						},
						// With an auto-sized panel, the messages container's overflow/maxHeight
						// constraints (and the welcome's minHeight: 100%) resolve against an
						// undefined parent height and produce a stray scrollbar / clipped layout.
						// Let everything flow at its natural size.
						'.ss__chat__messages': {
							overflow: 'visible',
							maxHeight: 'none',
						},
						'.ss__chat__welcome': {
							minHeight: 0,
						},
						'@media (max-height: 800px)': {
							top: 'auto',
							bottom: '20px',
							height: 'auto',
							maxHeight: 'calc(100vh - 40px)',
							'.ss__chat__primary': {
								height: 'auto',
							},
						},
					},
			  }),
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			fontSize: '16px',
			position: 'relative',
			padding: '10px 15px',
			color: colorPrimaryText,
			background: colorPrimary,
			borderTopLeftRadius: mobile ? 0 : '12px',
			borderTopRightRadius: mobile ? 0 : '12px',

			'.ss__chat__header__title': {
				display: 'flex',
				'.ss__chat__header__title__logo': {
					height: '44px',
					width: 'auto',
				},
				'.ss__chat__header__title__text': {
					display: 'flex',
					flexDirection: 'column',
					'.ss__chat__header__title__text__primary': {
						fontWeight: 'bold',
					},
					'.ss__chat__header__title__text__secondary': {
						fontSize: '80%',
					},
				},
			},

			'.ss__chat__header__buttons': {
				display: 'flex',
				gap: '10px',
				'.ss__button': {
					display: 'flex',
					flexDirection: 'row-reverse',
					padding: '5px',
					border: 0,
					fontSize: '70%',
					'&:hover': {
						backgroundColor: 'transparent',
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
		},
		'.ss__chat__content': {
			background: '#fff',
			maxHeight: mobile ? undefined : '90vh',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'column',
			border: `1px solid ${colorPrimary}`,
			borderTop: 'none',
			marginTop: '-1px',
			borderBottomRightRadius: mobile ? 0 : '12px',
			borderBottomLeftRadius: mobile ? 0 : '12px',
			flexGrow: 1,
			position: 'relative',
			'.ss__chat__content__header': {
				// In overlay mode (only applied when messages overflow), the comparisons
				// tray floats over the messages so toggling it doesn't shift the layout
				// or push the latest message out of view. When messages don't overflow,
				// the tray stays in flow so older messages remain reachable above it.
				'&.ss__chat__content__header--overlay': {
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					zIndex: 20,
				},
			},
			'.ss__chat__messages': {
				flex: '1 1 auto',
				overflowY: 'auto',
				overscrollBehavior: 'contain',
				margin: 0,
				maxHeight: '100%',
				background: new Colour(colorPrimary).lightenHex(0.95),
			},
			'.ss__chat__content__footer': {
				padding: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				flexShrink: 0,
				position: 'relative' as const,
				...(mobile
					? {
							zIndex: 11,
							background: '#fff',
					  }
					: {}),
				'.ss__chat__content__footer__drop-overlay': {
					position: 'absolute' as const,
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px',
					borderRadius: '6px',
					border: `2px dashed ${colorPrimary}`,
					backgroundColor: new Colour(colorPrimary).lightenHex(0.9),
					color: colorPrimary,
					fontWeight: 'bold',
					pointerEvents: 'none' as const,
					zIndex: 12,
					svg: {
						fill: colorPrimary,
						stroke: colorPrimary,
					},
				},
			},
			'.ss__chat__expired': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '12px',
				padding: '16px',
				textAlign: 'center',
				color: '#6A7282',
				'.ss__chat__expired__message': {
					fontSize: '14px',
				},
				'.ss__chat__expired__button': {
					alignSelf: 'center',
				},
			},
		},
	});
};

export const ChatOrganism = observer((properties: ChatOrganismProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const mobileBreakpoint = globalTheme?.variables?.breakpoints?.tablet ?? 767;
	const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);

	const defaultProps: Partial<ChatOrganismProps> = {
		treePath: globalTreePath,
		logo: 'https://cdn.athoscommerce.net/snap/images/Athos%20Commerce_Icon_white.svg',
		title: 'Athos Conversational Assistant',
		subtitle: 'Your Guided Discovery Expert',
		multiselectFacets: false,
		disableBubbleSuggestedQuestions: isMobile ? true : false,
		primaryColorBg: Colour.concrete(globalTheme?.variables?.colors?.primary) || '#253B80',
		primaryColorFg: '#fff',
		primaryAccentColorBg: Colour.concrete(globalTheme?.variables?.colors?.accent) || '#feeeae',
		primaryAccentColorFg: '#000000',
		secondaryAccentColorBg: Colour.concrete(globalTheme?.variables?.colors?.secondary) || '#000000',
		secondaryAccentColorFg: '#ffffff',
		position: 'right',
		hideMessageTypeIndicatorText: false,
		buttonBelowMessage: false,
		poweredByText: 'Powered by Athos Commerce.',
	};

	let props = mergeProps('chat', globalTheme, defaultProps, properties);

	const {
		className,
		internalClassName,
		controller,
		logo,
		title,
		subtitle,
		avatar,
		multiselectFacets,
		disableBubbleSuggestedQuestions,
		primaryColorBg,
		primaryColorFg,
		primaryAccentColorBg,
		primaryAccentColorFg,
		secondaryAccentColorBg,
		secondaryAccentColorFg,
		position,
		hideMessageTypeIndicatorText,
		buttonBelowMessage,
		poweredByText,
		privacyPolicyUrl,
		disableStyles,
		treePath,
	} = props;
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	const colorPrimaryAccent = primaryAccentColorBg!;
	const colorPrimaryAccentText = primaryAccentColorFg!;
	const colorSecondaryAccent = secondaryAccentColorBg!;
	const colorSecondaryAccentText = secondaryAccentColorFg!;
	const chatPosition: 'left' | 'right' = position === 'left' ? 'left' : 'right';

	// A single-character avatar renders as a capitalized letter; a longer value renders
	// as an image when it's a valid image URL. Anything else renders no avatar.
	const avatarCharacter = avatar && avatar.length === 1 ? avatar.toUpperCase() : undefined;
	const avatarImage = avatar && avatar.length > 1 && isValidImageUrl(avatar) ? avatar : undefined;

	const { store } = controller;

	// Track that the widget has been visible so a mid-session disable (status check
	// flips chatEnabled to false) keeps it mounted with the unavailable message
	// instead of vanishing. A disabled status at bootstrap still renders nothing.
	const wasVisibleRef = useRef(false);

	// Accent styling for buttons living inside child components — injected through the
	// theme so each child applies it via its own style pipeline (no `!important` overrides).
	const themeDefaults: Theme = {
		components: chatAccentThemeComponents({
			primaryAccentColorBg: colorPrimaryAccent,
			primaryAccentColorFg: colorPrimaryAccentText,
			secondaryAccentColorBg: colorSecondaryAccent,
			secondaryAccentColorFg: colorSecondaryAccentText,
		}),
	};

	// merge deeply the themeDefaults with the theme props and the displaySettings theme props (do not merge arrays, but replace them)
	const theme = deepmerge(themeDefaults, props?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	props = {
		...props,
		theme,
	};

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			chatUnavailableMessage: lang.chatUnavailableMessage!,
			newSessionButton: lang.newSessionButton!,
			expiredMessage: lang.expiredMessage!,
			dropOverlayText: lang.dropOverlayText!,
		} as any,
		{ controller }
	);

	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

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

	// Lock body scrolling (wheel + touch) to the chat while it is open
	useChatScrollLock({ open: store.open, chatRef });

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

	if (controller.store.chatEnabled) {
		wasVisibleRef.current = true;
	}

	// Dismiss the secondary panel and clear any product attachments tied to the side-chat
	// (discuss product flow), while preserving productSimilar/productComparison attachments.
	const dismissSideChat = (): void => {
		const productAttachmentsToRemove = (store.currentChat?.attachments.attached || []).filter(
			(item): item is ChatAttachmentProduct =>
				item.type === 'product' &&
				(item as ChatAttachmentProduct).requestType !== 'productSimilar' &&
				(item as ChatAttachmentProduct).requestType !== 'productComparison'
		);
		productAttachmentsToRemove.forEach((item) => store.currentChat?.attachments.remove(item.id));
		setMobileProductInfoOpen(false);
		store.currentChat?.dismissSideChat();
	};

	const requestType = store.currentChat?.requestType;
	const loadingVerbLangKey = requestType ? LOADING_VERB_LANG_KEYS[requestType] : undefined;
	const loadingVerbs = loadingVerbLangKey
		? langTextOf(lang[loadingVerbLangKey] as { value?: string })
				?.split(',')
				.map((verb) => verb.trim())
				.filter(Boolean)
		: undefined;

	const isWelcomeState = (!store.currentChat?.chat || store.currentChat.chat.length === 0) && !!store.welcomeMessage && !store.currentChat?.isExpired;

	// props inherited by every extracted chat sub-component
	const inheritedProps = {
		disableStyles,
		theme: props.theme,
		treePath,
		lang: props.lang,
	};
	const primaryColors = {
		primaryColorBg: colorPrimary,
		primaryColorFg: colorPrimaryText,
	};

	const subProps: ChatSubProps = {
		history: { ...inheritedProps },
		sideChat: { ...inheritedProps, ...primaryColors },
		messages: {
			...inheritedProps,
			...primaryColors,
			primaryAccentColorBg: colorPrimaryAccent,
			primaryAccentColorFg: colorPrimaryAccentText,
			hideMessageTypeIndicatorText,
			buttonBelowMessage,
		},
		sessionFeedback: { ...inheritedProps, ...primaryColors },
		comparisonsTray: { ...inheritedProps, ...primaryColors },
		facetsBar: { ...inheritedProps, ...primaryColors },
		attachments: { ...inheritedProps },
		topicDrift: { ...inheritedProps, ...primaryColors },
		composer: { ...inheritedProps, ...primaryColors, poweredByText, privacyPolicyUrl },
		loadingIndicator: { disableStyles, theme: props.theme, treePath },
	};

	const styling = mergeStyles<ChatOrganismProps & ChatStylingProps>(
		{ ...props, mobile: isMobile, hasSideChat, footerHeight, position: chatPosition },
		defaultStyles
	);

	// Hide the widget entirely when chat is disabled at bootstrap (silent disable).
	// When chat becomes disabled mid-session, keep the widget mounted so the footer
	// unavailable message stays visible (with the input disabled).
	if (!controller.store.chatEnabled && !wasVisibleRef.current) {
		return <></>;
	}

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
							{store.suggestedQuestions.map((question) => (
								<div
									key={question}
									className="ss__chat__suggested-questions__item"
									role="button"
									ref={(e) => useA11y(e)}
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
						aria-label={store.open ? langAttrOf(lang.closeChatButton, 'aria-label') : langAttrOf(lang.openChatButton, 'aria-label')}
						aria-expanded={store.open}
						onClick={() => controller.handlers.button.click()}
					>
						<Icon icon="chat" title={langAttrOf(lang.openChatButton, 'title')} />
					</button>
					{store.open && shouldShowSideChat && activeMessage ? (
						<ChatSideChat
							{...subProps.sideChat}
							controller={controller}
							activeMessage={activeMessage}
							mobile={isMobile}
							footerHeight={footerHeight}
							onDismiss={dismissSideChat}
							onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
						/>
					) : null}
					{store.open ? (
						<div
							className={'ss__chat__primary'}
							// On mobile, interacting with the primary chat (header or anywhere within)
							// dismisses the secondary panel. Capture phase so it fires even when an
							// inner control stops propagation.
							onClickCapture={isMobile && shouldShowSideChat ? () => dismissSideChat() : undefined}
						>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__title">
									{logo ? <Image className="ss__chat__header__title__logo" src={logo} alt={title || 'Chat logo'} /> : null}
									<div className="ss__chat__header__title__text">
										{title ? <div className="ss__chat__header__title__text__primary">{title}</div> : null}
										{subtitle ? <div className="ss__chat__header__title__text__secondary">{subtitle}</div> : null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									<Button
										className="ss__chat__header__button--new"
										aria-label={langAttrOf(lang.newChatButton, 'aria-label')}
										icon={{ icon: controller.store.initChatLoading ? 'spinner' : 'plus-rounded', title: langAttrOf(lang.newChatButton, 'title') }}
										onClick={() => controller.store.createChat()}
									/>
									{store.chats.length > 1 && <ChatHistory {...subProps.history} controller={controller} />}
									<Button
										className="ss__chat__header__button--close"
										aria-label={langAttrOf(lang.closeChatButton, 'aria-label')}
										icon={{ icon: 'close-rounded', title: langAttrOf(lang.closeChatButton, 'title') }}
										onClick={() => controller.handlers.button.click()}
									/>
								</div>
							</div>
							<div className="ss__chat__content">
								<ChatSessionFeedback {...subProps.sessionFeedback} controller={controller} />
								<div
									ref={headerRef}
									className={classnames('ss__chat__content__header', {
										'ss__chat__content__header--overlay': messagesOverflow,
									})}
								>
									<ChatComparisonsTray {...subProps.comparisonsTray} controller={controller} />
								</div>
								<ChatMessages
									{...subProps.messages}
									controller={controller}
									messagesContainerRef={messagesContainerRef}
									messagesEndRef={messagesEndRef}
									mobile={isMobile}
									avatarCharacter={avatarCharacter}
									avatarImage={avatarImage}
									sideChatOpen={!!shouldShowSideChat}
									onProductQuickView={() => setMobileProductInfoOpen(true)}
									scrollToBottom={scrollToBottom}
									scrollToBottomIfNear={scrollToBottomIfNear}
									showNewMessages={showNewMessages}
									setShowNewMessages={setShowNewMessages}
									messagesOverflow={messagesOverflow}
								/>
								<ChatLoadingIndicator {...subProps.loadingIndicator} loading={store.loading} verbs={loadingVerbs} />
								{!store.currentChat?.isExpired ? (
									<div className="ss__chat__content__footer" ref={footerRef} {...dragHandlers}>
										{(store.error || store.chatEnabled === false) && (
											<div className="ss__chat__error">{store.error?.message || langTextOf(lang.chatUnavailableMessage)}</div>
										)}
										<ChatTopicDrift {...subProps.topicDrift} controller={controller} variant="sessionLimit" />
										<ChatFacetsBar {...subProps.facetsBar} controller={controller} chatRef={chatRef} multiselectFacets={multiselectFacets} />
										<ChatAttachments
											{...subProps.attachments}
											controller={controller}
											activeMessage={activeMessage}
											sideChatOpen={!!shouldShowSideChat}
											mobile={isMobile}
											onProductQuickView={() => setMobileProductInfoOpen(true)}
											onProductAttachmentsRemoved={() => setMobileProductInfoOpen(false)}
										/>
										<ChatTopicDrift {...subProps.topicDrift} controller={controller} variant="drift" />
										<ChatComposer
											{...subProps.composer}
											controller={controller}
											fileInputRef={fileInputRef}
											onUserSend={() => {
												if (isMobile && mobileProductInfoOpen) {
													setMobileProductInfoOpen(false);
												}
											}}
										/>
										{isDraggingFile && (
											<div className="ss__chat__content__footer__drop-overlay">
												<Icon icon="image" size="24px" />
												<span {...mergedLang.dropOverlayText?.all}></span>
											</div>
										)}
									</div>
								) : (
									<div className={'ss__chat__expired'}>
										<div className={'ss__chat__expired__message'} {...mergedLang.expiredMessage?.all}></div>
										<Button
											className={'ss__chat__expired__button'}
											onClick={() => {
												controller.store.createChat();
											}}
										>
											<span {...mergedLang.newSessionButton?.all}></span>
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
	avatar?: string;
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
	hideMessageTypeIndicatorText?: boolean;
	buttonBelowMessage?: boolean;
	poweredByText?: string;
	privacyPolicyUrl?: string;
};

interface ChatSubProps {
	history: Partial<ChatHistoryProps>;
	sideChat: Partial<ChatSideChatProps>;
	messages: Partial<ChatMessagesProps>;
	sessionFeedback: Partial<ChatSessionFeedbackProps>;
	comparisonsTray: Partial<ChatComparisonsTrayProps>;
	facetsBar: Partial<ChatFacetsBarProps>;
	attachments: Partial<ChatAttachmentsProps>;
	topicDrift: Partial<ChatTopicDriftProps>;
	composer: Partial<ChatComposerProps>;
	loadingIndicator: Partial<ChatLoadingIndicatorProps>;
}
