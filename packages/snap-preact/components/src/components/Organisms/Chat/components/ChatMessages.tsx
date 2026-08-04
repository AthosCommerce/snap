import { h, RefObject } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatMessage } from '@athoscommerce/snap-store-mobx';
import { ChatResponseActionsData } from '@athoscommerce/snap-client';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { useA11y } from '../../../../hooks/useA11y';
import { Icon } from '../../../Atoms/Icon';
import { Image } from '../../../Atoms/Image';
import { ChatMessageUser, ChatMessageUserProps } from '../../../Molecules/ChatMessageUser';
import { ChatMessageText, ChatMessageTextProps } from '../../../Molecules/ChatMessageText';
import { ChatSuggestedQuestions, ChatSuggestedQuestionsProps } from '../../../Molecules/ChatSuggestedQuestions';
import { ChatLang, chatDefaultLang, langAttrOf } from '../Chat.lang';

// messageTypes rendered via the shared ChatMessageText molecule
const TEXT_MESSAGE_TYPES = ['text', 'content', 'productSearchResult', 'inspirationResult', 'productAnswer', 'productRecommendation'];
// text-like messageTypes that never offer a product quick view
const PLAIN_TEXT_MESSAGE_TYPES = ['errorResponse', 'topicDrift'];

const defaultStyles: StyleScript<ChatMessagesProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	const colorPrimaryHover = new Colour(colorPrimary).darkenHex();
	return css({
		'.ss__chat__messages__end': {
			height: '1px',
		},
		'.ss__chat__new-messages': {
			position: 'sticky',
			bottom: '10px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '6px',
			margin: '0 auto',
			width: 'fit-content',
			padding: '6px 16px',
			background: colorPrimary,
			color: colorPrimaryText,
			borderRadius: '999px',
			fontSize: '13px',
			fontWeight: 500,
			cursor: 'pointer',
			boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
			zIndex: 5,
			'&:hover': {
				background: colorPrimaryHover,
			},
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
		'.ss__chat__message': {
			marginBottom: '30px',
			'&.ss__chat__message--with-avatar': {
				display: 'flex',
				alignItems: 'flex-start',
				gap: '10px',
				'.ss__chat__message__content': {
					flex: '1 1 auto',
					minWidth: 0,
				},
			},
			'.ss__chat__message__avatar': {
				flex: '0 0 auto',
				width: '30px',
				height: '30px',
				borderRadius: '50%',
				overflow: 'hidden',
				background: colorPrimary,
				color: colorPrimaryText,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '14px',
				fontWeight: 'bold',
				textTransform: 'uppercase',
				userSelect: 'none',
				'&.ss__chat__message__avatar--image': {
					background: 'none',
				},
				'.ss__image': {
					width: '30px',
					height: '30px',
					margin: 0,
					img: {
						width: '30px',
						height: '30px',
						borderRadius: '50%',
						objectFit: 'cover',
					},
				},
			},
			ul: {
				margin: 0,
				listStyle: 'inside',
			},
			p: {
				margin: 0,
			},
			thead: {
				backgroundColor: '#eee',
			},
			'tbody tr:nth-child(even)': {
				backgroundColor: '#f5f5f5',
			},
			'table th, table td': {
				padding: '0.2em 0.5em',
			},
			'table + h3': {
				margin: '1em 0 0 0',
				fontSize: '1.3em',
			},
		},
		'.ss__chat__welcome': {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100%',
			'.ss__chat__welcome__message': {
				fontSize: '15px',
				lineHeight: 1.5,
				color: '#333',
				padding: '2em',
				textAlign: 'left',
			},
			'.ss__chat-suggested-questions': {
				marginTop: 'auto',
				'.ss__chat-suggested-questions__item': {
					padding: '8px 16px',
				},
			},
		},
	});
};

export const ChatMessages = observer((properties: ChatMessagesProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatMessagesProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatMessages', globalTheme, defaultProps, properties);

	const {
		className,
		internalClassName,
		controller,
		messagesContainerRef,
		messagesEndRef,
		mobile,
		avatarCharacter,
		avatarImage,
		sideChatOpen,
		onProductQuickView,
		scrollToBottom,
		scrollToBottomIfNear,
		showNewMessages,
		setShowNewMessages,
		messagesOverflow,
		hideMessageTypeIndicatorText,
		buttonBelowMessage,
		primaryColorBg,
		primaryColorFg,
		primaryAccentColorBg,
		primaryAccentColorFg,
		disableStyles,
		treePath,
	} = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			newMessagesButton: lang.newMessagesButton!,
		} as any,
		{ controller }
	);

	const styling = mergeStyles<ChatMessagesProps>(props, defaultStyles);

	const subProps: ChatMessagesSubProps = {
		messageUser: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: primaryColorBg,
			primaryColorText: primaryColorFg,
			hideMessageTypeIndicatorText,
		},
		messageText: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: primaryColorBg,
			primaryColorText: primaryColorFg,
			primaryAccentColor: primaryAccentColorBg,
			primaryAccentColorText: primaryAccentColorFg,
			buttonBelowMessage,
		},
		suggestedQuestions: {
			disableStyles,
			theme: props.theme,
			treePath,
			primaryColor: primaryColorBg,
		},
	};

	const visibleChatLength = (store.currentChat?.chat || []).filter((m) => m.messageType !== 'productQuery').length;

	const getMessageContent = (chatItem: ChatMessage): JSX.Element | null => {
		if (chatItem.messageType === 'user') {
			return (
				<ChatMessageUser
					{...subProps.messageUser}
					chatItem={chatItem}
					controller={controller}
					onProductQuickView={mobile ? onProductQuickView : undefined}
					primaryColor={primaryColorBg}
					primaryColorText={primaryColorFg}
				/>
			);
		}

		// `actions` messages exist at runtime but are not part of the ChatMessage union (store type gap)
		if ((chatItem.messageType as string) === 'actions') {
			return <ChatSuggestedQuestions actions={(chatItem as unknown as ChatResponseActionsData).actions} controller={controller} />;
		}

		if (chatItem.messageType === 'productComparison') {
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
					onProductQuickView={mobile ? onProductQuickView : undefined}
					showDetailsButton={mobile && !isFirst}
					sideChatOpen={sideChatOpen}
					primaryColor={primaryColorBg}
					primaryColorText={primaryColorFg}
				/>
			);
		}

		if (TEXT_MESSAGE_TYPES.includes(chatItem.messageType)) {
			return (
				<ChatMessageText
					{...subProps.messageText}
					chatItem={chatItem}
					controller={controller}
					scrollToBottom={scrollToBottomIfNear}
					onProductQuickView={mobile ? onProductQuickView : undefined}
					sideChatOpen={sideChatOpen}
					primaryColor={primaryColorBg}
					primaryColorText={primaryColorFg}
				/>
			);
		}

		if (PLAIN_TEXT_MESSAGE_TYPES.includes(chatItem.messageType)) {
			return (
				<ChatMessageText
					{...subProps.messageText}
					chatItem={chatItem}
					controller={controller}
					scrollToBottom={scrollToBottomIfNear}
					sideChatOpen={sideChatOpen}
					primaryColor={primaryColorBg}
					primaryColorText={primaryColorFg}
				/>
			);
		}

		return null;
	};

	return (
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__chat__messages', className, internalClassName)}
				ref={messagesContainerRef}
				role="log"
				aria-live="polite"
				aria-relevant="additions"
				aria-label={langAttrOf(lang.chatMessagesLabel, 'aria-label')}
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
					.map((chatItem) => {
						const showAvatar = !!(avatarCharacter || avatarImage) && chatItem.messageType !== 'user';
						const messageContent = getMessageContent(chatItem);

						return (
							<div
								key={chatItem.id}
								className={classnames(`ss__chat__message`, `ss__chat__message--${chatItem.messageType}`, {
									'ss__chat__message--with-avatar': showAvatar,
								})}
							>
								{showAvatar && (
									<div
										className={classnames('ss__chat__message__avatar', {
											'ss__chat__message__avatar--image': !!avatarImage,
										})}
										aria-hidden="true"
									>
										{avatarImage ? <Image src={avatarImage} alt="" /> : avatarCharacter}
									</div>
								)}
								{showAvatar ? <div className="ss__chat__message__content">{messageContent}</div> : messageContent}
							</div>
						);
					})}
				<div className="ss__chat__messages__end" ref={messagesEndRef} />
				{showNewMessages && messagesOverflow && (
					<div
						className="ss__chat__new-messages"
						role="button"
						ref={(e) => useA11y(e)}
						onClick={() => {
							scrollToBottom && scrollToBottom();
							setShowNewMessages && setShowNewMessages(false);
						}}
					>
						<Icon icon="angle-down" size="12px" />
						<span {...mergedLang.newMessagesButton?.all}></span>
					</div>
				)}
			</div>
		</CacheProvider>
	);
});

interface ChatMessagesSubProps {
	messageUser: Partial<ChatMessageUserProps>;
	messageText: Partial<ChatMessageTextProps>;
	suggestedQuestions: Partial<ChatSuggestedQuestionsProps>;
}

export type ChatMessagesProps = {
	controller: ChatController;
	messagesContainerRef: RefObject<HTMLDivElement>;
	messagesEndRef?: RefObject<HTMLDivElement>;
	mobile?: boolean;
	avatarCharacter?: string;
	avatarImage?: string;
	sideChatOpen?: boolean;
	onProductQuickView?: () => void;
	scrollToBottom: () => void;
	scrollToBottomIfNear: () => void;
	showNewMessages?: boolean;
	setShowNewMessages: (value: boolean) => void;
	messagesOverflow?: boolean;
	hideMessageTypeIndicatorText?: boolean;
	buttonBelowMessage?: boolean;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
	primaryAccentColorBg?: string;
	primaryAccentColorFg?: string;
} & ComponentProps<ChatMessagesProps>;
