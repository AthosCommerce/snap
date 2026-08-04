import { h } from 'preact';
import { useRef } from 'preact/hooks';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatMessage } from '@athoscommerce/snap-store-mobx';
import { ChatResponseInspirationResultData, ChatResponseProductComparisonData } from '@athoscommerce/snap-client';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { LangAttributesObjAttributes } from '../../../../hooks/useLang';
import { Button } from '../../../Atoms/Button';
import { ChatInspirationResultMessage, ChatInspirationResultMessageProps } from '../../../Molecules/ChatInspirationResultMessage';
import {
	ChatProductComparisonMessage,
	ChatProductComparisonMessageProps,
} from '../../../Molecules/ChatProductComparisonMessage/ChatProductComparisonMessage';
import {
	ChatProductQueryMessage,
	ChatProductQueryMessageItem,
	ChatProductQueryMessageProps,
} from '../../../Molecules/ChatProductQueryMessage/ChatProductQueryMessage';
import { useChatGestures } from '../hooks/useChatGestures';
import { ChatLang, chatDefaultLang, langAttrOf } from '../Chat.lang';

const defaultStyles: StyleScript<ChatSideChatProps> = ({ mobile, footerHeight, primaryColorBg }) => {
	const colorPrimary = primaryColorBg!;
	return css({
		'@keyframes ss-chat-slide-up': {
			from: { transform: 'translateY(100%)' },
			to: { transform: 'translateY(0)' },
		},
		...(mobile
			? {
					width: '100%',
					maxWidth: '100%',
					height: `calc(100% - 70px${footerHeight! > 0 ? ` - ${footerHeight}px` : ''})`,
					maxHeight: `calc(100% - 70px${footerHeight! > 0 ? ` - ${footerHeight}px` : ''})`,
			  }
			: { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh', maxHeight: '70vh' }),
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		...(mobile
			? {
					position: 'absolute',
					bottom: footerHeight! > 0 ? footerHeight : 0,
					left: 0,
					right: 0,
					zIndex: 10,
					borderTopLeftRadius: '12px',
					borderTopRightRadius: '12px',
					overflow: 'hidden',
					overscrollBehavior: 'contain',
					boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
					background: '#fff',
					willChange: 'transform',
					animation: 'ss-chat-slide-up 0.3s ease-out',
			  }
			: {}),
		'.ss__chat__secondary__drag-handle': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px 0 2px',
			background: colorPrimary,
			touchAction: 'none',
			cursor: 'grab',
			'.ss__chat__secondary__drag-handle__indicator': {
				width: '36px',
				height: '4px',
				borderRadius: '2px',
				background: 'rgba(255, 255, 255, 0.4)',
			},
		},
		...(mobile
			? {
					'.ss__chat__header': {
						touchAction: 'none',
						cursor: 'grab',
					},
			  }
			: {}),
		'.ss__chat__header__title': {
			flexDirection: 'column',
			gap: '2px',
			'.ss__chat__header__title__primary': {
				fontWeight: 'bold',
			},
			'.ss__chat__header__title__secondary': {
				fontSize: '80%',
				opacity: 0.85,
			},
		},
		// double the component class to reliably out-rank the root-level
		// `.ss__chat__content .ss__chat__messages` background without `!important`
		'&& .ss__chat__content .ss__chat__messages': {
			background: '#fff',
		},
	});
};

export const ChatSideChat = observer((properties: ChatSideChatProps): JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatSideChatProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatSideChat', globalTheme, defaultProps, properties);

	const {
		className,
		internalClassName,
		controller,
		activeMessage,
		mobile,
		onDismiss,
		onProductQuickView,
		primaryColorBg,
		primaryColorFg,
		disableStyles,
		treePath,
	} = props;

	// Ref for the mobile secondary panel — needed for swipe-to-dismiss measurements
	const secondaryRef = useRef<HTMLDivElement>(null);

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const comparisonCount = (activeMessage as ChatResponseProductComparisonData)?.searchResults?.length || '';
	const mergedLang = useLang(
		{
			sideChatRegionLabel: lang.sideChatRegionLabel!,
			inspirationResultTitle: lang.inspirationResultTitle!,
			inspirationResultSubtitle: lang.inspirationResultSubtitle!,
			productComparisonTitle: lang.productComparisonTitle!,
			productComparisonSubtitle: lang.productComparisonSubtitle!,
		} as any,
		{ controller, count: comparisonCount }
	);

	const { swipeOffset, swipeAnimating, swipeHandlers } = useChatGestures({
		panelRef: secondaryRef,
		shouldShowSideChat: true,
		activeMessageId: activeMessage?.id,
		onDismiss: () => onDismiss && onDismiss(),
	});

	const styling = mergeStyles<ChatSideChatProps>(props, defaultStyles);

	if (!activeMessage) {
		return null;
	}

	const subProps: ChatSideChatSubProps = {
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
			primaryColor: primaryColorBg,
			primaryColorText: primaryColorFg,
		},
	};

	const titleLang: { [messageType: string]: LangAttributesObjAttributes | undefined } = {
		inspirationResult: mergedLang.inspirationResultTitle,
		productComparison: mergedLang.productComparisonTitle,
	};
	const subtitleLang: { [messageType: string]: LangAttributesObjAttributes | undefined } = {
		inspirationResult: mergedLang.inspirationResultSubtitle,
		productComparison: mergedLang.productComparisonSubtitle,
	};

	const messageContent = ((): JSX.Element | null => {
		switch (activeMessage.messageType) {
			case 'inspirationResult':
				return (
					<ChatInspirationResultMessage
						{...subProps.inspirationResultMessage}
						chatItem={activeMessage as ChatResponseInspirationResultData}
						controller={controller}
						onProductQuickView={onProductQuickView}
					/>
				);
			case 'productComparison':
				return (
					<ChatProductComparisonMessage
						{...subProps.productComparisonMessage}
						chatItem={activeMessage as ChatResponseProductComparisonData}
						controller={controller}
					/>
				);
			case 'productQuery':
				return (
					<ChatProductQueryMessage
						{...subProps.productQueryMessage}
						chatItem={activeMessage as unknown as ChatProductQueryMessageItem}
						controller={controller}
						displayFields={controller.config.settings?.quickview?.displayFields}
						primaryColor={primaryColorBg}
						primaryColorText={primaryColorFg}
					/>
				);
			default:
				return null;
		}
	})();

	return (
		<CacheProvider>
			<div
				ref={secondaryRef}
				{...styling}
				className={classnames('ss__chat__secondary', className, internalClassName)}
				role="region"
				aria-label={langAttrOf(lang.sideChatRegionLabel, 'aria-label')}
				style={
					mobile
						? {
								// Touch swipe animations need to be inline to prevent visual jumps
								transform: swipeOffset > 0 ? `translateY(${swipeOffset}px)` : undefined,
								transition: swipeAnimating ? 'transform 0.3s ease-out' : 'none',
						  }
						: undefined
				}
			>
				{mobile && (
					<div className="ss__chat__secondary__drag-handle" {...swipeHandlers}>
						<div className="ss__chat__secondary__drag-handle__indicator" />
					</div>
				)}
				<div
					className={'ss__chat__header'}
					onTouchStart={mobile ? swipeHandlers.onTouchStart : undefined}
					onTouchMove={mobile ? swipeHandlers.onTouchMove : undefined}
					onTouchEnd={mobile ? swipeHandlers.onTouchEnd : undefined}
				>
					<div className="ss__chat__header__title">
						<div className="ss__chat__header__title__primary" {...titleLang[activeMessage.messageType]?.value}></div>
						<div className="ss__chat__header__title__secondary" {...subtitleLang[activeMessage.messageType]?.value}></div>
					</div>
					<div className="ss__chat__header__buttons">
						<Button
							className="ss__chat__header__button--close"
							aria-label={langAttrOf(lang.closeChatButton, 'aria-label')}
							icon={{ icon: 'close2', title: langAttrOf(lang.closeChatButton, 'title') }}
							onClick={() => onDismiss && onDismiss()}
						/>
					</div>
				</div>
				<div className="ss__chat__content">
					<div className={'ss__chat__messages'}>{messageContent}</div>
				</div>
			</div>
		</CacheProvider>
	);
});

interface ChatSideChatSubProps {
	inspirationResultMessage: Partial<ChatInspirationResultMessageProps>;
	productComparisonMessage: Partial<ChatProductComparisonMessageProps>;
	productQueryMessage: Partial<ChatProductQueryMessageProps>;
}

export type ChatSideChatProps = {
	controller: ChatController;
	activeMessage?: ChatMessage;
	mobile?: boolean;
	footerHeight?: number;
	onDismiss?: () => void;
	onProductQuickView?: () => void;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatSideChatProps>;
