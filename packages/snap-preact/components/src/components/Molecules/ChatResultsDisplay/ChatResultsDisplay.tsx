import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Slideshow, SlideshowProps, SlideshowSlide } from '../Slideshow';
import { ChatResult, ChatResultProps } from '../ChatResult';
import type { ChatController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatResultsDisplayProps> = () => {
	return css({
		width: '100%',
		marginTop: '12px',

		'.ss__chat-results-display__result': {
			height: '100%',
			width: '100%',
			display: 'flex',
			cursor: 'pointer',
			'&:focus-visible': {
				outline: '2px solid #253B80',
				outlineOffset: '2px',
			},
		},
	});
};

const slideshowStyleScript = () => {
	return css({
		'.ss__slideshow__navigation .ss__button': {
			background: 'rgba(255, 255, 255, 0.85)',
			borderRadius: '50%',
			width: '2em',
			height: '2em',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
		},
	});
};

export const ChatResultsDisplay = observer((properties: ChatResultsDisplayProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatResultsDisplayProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatResultsDisplay', globalTheme, defaultProps, properties);

	const { chatItem, controller, scrollToBottom, onProductQuickView, disableStyles, className, internalClassName, treePath } = props;

	const currentChat = controller.store.currentChat;
	const activeMessage = currentChat?.activeMessage;
	const isSideChatOpen =
		!!activeMessage &&
		['inspirationResult', 'productComparison', 'productQuery'].includes(activeMessage.messageType) &&
		currentChat?.dismissedSideChatMessageId !== activeMessage.id;

	const isNarrow = typeof window !== 'undefined' && window.innerWidth < 550;
	// only the tablet range needs the narrower slideshow when the side chat is open;
	// at >= 1200px there's room to keep 2.9 slides alongside the secondary chat
	const isConstrained = !isNarrow && isSideChatOpen && typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1200;
	const slidesToShow = isNarrow || isConstrained ? 1.9 : 2.9;

	const subProps: ChatResultsDisplaySubProps = {
		slideshow: {
			disableStyles,
			theme: props.theme,
			treePath,
			slidesToShow,
			slidesToMove: isNarrow || isConstrained ? 2 : 3,
			loop: false,
			showPagination: false,
			centerInsufficientSlides: false,
			overlayNavigation: true,
			styleScript: slideshowStyleScript,
		},
		chatResult: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatResultsDisplayProps>(props, defaultStyles);

	const handleResultClick = (e: MouseEvent, result: Product): void => {
		// buttons should be able to be clicked without triggering the product click
		if (e.composedPath().some((el) => el instanceof HTMLElement && el.matches('button, .ss__button, a'))) return;
		controller.track.product.click(e, result);
		controller.productQuickView(result);
		onProductQuickView?.();
	};

	const handleResultKeyDown = (e: any, result: Product): void => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			controller.productQuickView(result);
			onProductQuickView?.();
		}
	};

	const renderSlideshow = (results: Product[], key?: string | number) => {
		const slides: SlideshowSlide[] = results.map((result: Product) => ({
			content: (
				<div
					key={result.id}
					className="ss__chat-results-display__result"
					role="button"
					tabIndex={0}
					aria-label={`Open ${(result as any)?.display?.mappings?.core?.name || 'product'}`}
					onClick={(e: any) => handleResultClick(e, result)}
					onKeyDown={(e: any) => handleResultKeyDown(e, result)}
				>
					<ChatResult {...subProps.chatResult} result={result} controller={controller} scrollToBottom={scrollToBottom} />
				</div>
			),
		}));

		return (
			<div key={key} className={classnames('ss__chat-results-display', className, internalClassName)} {...styling}>
				<Slideshow {...subProps.slideshow} slides={slides} />
			</div>
		);
	};

	if (chatItem.messageType === 'productRecommendation' && chatItem.recommendationResult?.length) {
		return (
			<CacheProvider>
				<>
					{chatItem.recommendationResult.map((recommendation: any, index: number) =>
						recommendation.results?.length > 0 ? renderSlideshow(recommendation.results, index) : null
					)}
				</>
			</CacheProvider>
		);
	}

	return chatItem.results?.length > 0 ? <CacheProvider>{renderSlideshow(chatItem.results)}</CacheProvider> : null;
});

interface ChatResultsDisplaySubProps {
	slideshow: Partial<SlideshowProps>;
	chatResult: Partial<ChatResultProps>;
}

export type ChatResultsDisplayProps = {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductQuickView?: () => void;
} & ComponentProps<ChatResultsDisplayProps>;
