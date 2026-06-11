import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Carousel, CarouselProps } from '../Carousel';
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

const carouselStyleScript = () => {
	return css({
		position: 'relative',

		'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			zIndex: 9,

			'.ss__carousel__prev, .ss__carousel__next': {
				background: 'rgba(255, 255, 255, 0.85)',
				borderRadius: '50%',
				width: '2em',
				height: '2em',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
			},
		},
		'.ss__carousel__prev-wrapper': {
			left: 0,
		},
		'.ss__carousel__next-wrapper': {
			right: 0,
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
	// only the tablet range needs the narrower carousel when the side chat is open;
	// at >= 1200px there's room to keep 2.9 slides alongside the secondary chat
	const isConstrained = !isNarrow && isSideChatOpen && typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1200;
	const slidesPerView = isNarrow || isConstrained ? 1.9 : 2.9;
	const visibleSlides = Math.ceil(slidesPerView);

	const subProps: ChatResultsDisplaySubProps = {
		carousel: {
			disableStyles,
			theme: props.theme,
			treePath,
			breakpoints: undefined,
			slidesPerView,
			slidesPerGroup: isNarrow || isConstrained ? 2 : 3,
			loop: false,
			pagination: false,
			centerInsufficientSlides: false,
			freeMode: true,
			styleScript: carouselStyleScript,
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

	const renderCarousel = (results: Product[], key?: string | number) => (
		<div key={key} className={classnames('ss__chat-results-display', className, internalClassName)} {...styling}>
			<Carousel {...subProps.carousel} hideButtons={results.length <= visibleSlides}>
				{results.map((result: Product) => (
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
				))}
			</Carousel>
		</div>
	);

	if (chatItem.messageType === 'productRecommendation' && chatItem.recommendationResult?.length) {
		return (
			<CacheProvider>
				<>
					{chatItem.recommendationResult.map((recommendation: any, index: number) =>
						recommendation.results?.length > 0 ? renderCarousel(recommendation.results, index) : null
					)}
				</>
			</CacheProvider>
		);
	}

	return chatItem.results?.length > 0 ? <CacheProvider>{renderCarousel(chatItem.results)}</CacheProvider> : null;
});

interface ChatResultsDisplaySubProps {
	carousel: Partial<CarouselProps>;
	chatResult: Partial<ChatResultProps>;
}

export type ChatResultsDisplayProps = {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductQuickView?: () => void;
} & ComponentProps<ChatResultsDisplayProps>;
