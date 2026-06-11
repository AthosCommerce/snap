import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Button, ButtonProps } from '../../Atoms/Button';
import { ChatResultsDisplay, ChatResultsDisplayProps } from '../ChatResultsDisplay';
import type { ChatController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ChatMessageTextProps> = ({ primaryColor, primaryColorText }) => {
	const colorPrimary = primaryColor || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	return css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		gap: '5px',
		background: '#fff',
		padding: '1em',
		borderRadius: '1em',
		borderBottomLeftRadius: '3px',

		'.ss__chat-message-text__text-wrapper': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			gap: '8px',
			'.ss__chat-message-text__text-wrapper__text': {
				alignSelf: 'flex-end',
			},
			'.ss__chat-message-text__view-side-chat': {
				marginLeft: 'auto',
				flex: '0 0 auto',
				width: '2em',
				height: '2em',
				padding: 0,
				borderRadius: '50%',
				border: `1px solid ${colorPrimary}`,
				background: '#fff',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				svg: {
					fill: colorPrimary,
					stroke: colorPrimary,
				},
				'&.ss__chat-message-text__view-side-chat--active': {
					background: colorPrimary,
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
		},
		'.ss__chat-message-text__show-details': {
			alignSelf: 'flex-start',
			border: `1px solid ${colorPrimary}`,
			background: '#fff',
			color: colorPrimary,
			borderRadius: '999px',
			padding: '6px 16px',
			fontSize: '14px',
			fontWeight: 500,
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			gap: '6px',
			marginTop: '4px',
			'&:not(.ss__button--disabled):hover': {
				background: colorPrimary,
				color: colorPrimaryText,
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat-message-text__results': {
			marginTop: '12px',
			'.swiper-container': {
				alignItems: 'center',
				gap: '5px',
				'.swiper-wrapper': {},
				'.swiper-scrollbar': {
					position: 'static',
					width: '95%',
					height: '6px',
					borderRadius: '6px',
					'.swiper-scrollbar-drag': {
						borderRadius: '6px',
					},
				},
				'.swiper-pagination-lock': {
					display: 'none !important',
				},
			},
			'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
				svg: {
					fill: colorPrimary,
					stroke: colorPrimary,
				},
			},
		},
	});
};

export const ChatMessageText = observer((properties: ChatMessageTextProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatMessageTextProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatMessageText', globalTheme, defaultProps, properties);

	const {
		controller,
		chatItem,
		scrollToBottom,
		onProductQuickView,
		showDetailsButton,
		sideChatOpen,
		disableStyles,
		className,
		internalClassName,
		treePath,
	} = props;

	const subProps: ChatMessageTextSubProps = {
		sideChatButton: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		showDetailsButton: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		resultsDisplay: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatMessageTextProps>(props, defaultStyles);

	const text =
		chatItem.overallSummary || chatItem.text || chatItem.comparisonData?.summary || chatItem.errorMessage || chatItem.messageForDrift || '';
	const currentChat = controller.store.currentChat;
	const sideChatLabels: Record<string, { open: string; close: string }> = {
		inspirationResult: { open: 'View inspiration', close: 'Close inspiration' },
		productComparison: { open: 'View comparison', close: 'Close comparison' },
	};
	const sideChatLabel = sideChatLabels[chatItem?.messageType as string];
	const hasSideChatView = !!sideChatLabel && !!chatItem?.id;
	const isSideChatActive = hasSideChatView && !!sideChatOpen && currentChat?.activeMessage?.id === chatItem.id;

	// Show the prominent "Show Details" button when requested (e.g. mobile subsequent comparisons)
	const shouldShowDetailsButton = showDetailsButton && chatItem?.messageType === 'productComparison' && !isSideChatActive;

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-message-text', className, internalClassName)} {...styling}>
				{text && (
					<div className="ss__chat-message-text__text-wrapper">
						<div
							className="ss__chat-message-text__text-wrapper__text"
							dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(text) as string) }}
						/>
						{hasSideChatView ? (
							<Button
								{...subProps.sideChatButton}
								className={classnames('ss__chat-message-text__view-side-chat', {
									'ss__chat-message-text__view-side-chat--active': isSideChatActive,
								})}
								aria-label={isSideChatActive ? sideChatLabel.close : sideChatLabel.open}
								aria-pressed={isSideChatActive}
								icon={{
									icon: isSideChatActive ? 'close-thin' : 'angle-right',
									title: isSideChatActive ? sideChatLabel.close : sideChatLabel.open,
								}}
								onClick={() => {
									if (isSideChatActive) {
										currentChat?.dismissSideChat();
									} else {
										currentChat?.setActiveMessage(chatItem.id);
									}
								}}
							/>
						) : null}
					</div>
				)}
				{shouldShowDetailsButton && (
					<Button
						{...subProps.showDetailsButton}
						className="ss__chat-message-text__show-details"
						aria-label="Show comparison details"
						icon={{ icon: 'angle-right', title: 'Show Details' }}
						onClick={() => {
							currentChat?.setActiveMessage(chatItem.id);
						}}
					>
						<>Show Details</>
					</Button>
				)}
				{chatItem && (
					<ChatResultsDisplay
						{...subProps.resultsDisplay}
						controller={controller}
						chatItem={chatItem}
						scrollToBottom={scrollToBottom}
						onProductQuickView={onProductQuickView}
					/>
				)}
			</div>
		</CacheProvider>
	);
});

interface ChatMessageTextSubProps {
	sideChatButton: Partial<ButtonProps>;
	showDetailsButton: Partial<ButtonProps>;
	resultsDisplay: Partial<ChatResultsDisplayProps>;
}

export type ChatMessageTextProps = {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductQuickView?: () => void;
	showDetailsButton?: boolean;
	sideChatOpen?: boolean;
} & ChatMessageTextTemplatesLegalProps &
	ComponentProps<ChatMessageTextProps>;

export type ChatMessageTextTemplatesLegalProps = {
	primaryColor?: string;
	primaryColorText?: string;
};
