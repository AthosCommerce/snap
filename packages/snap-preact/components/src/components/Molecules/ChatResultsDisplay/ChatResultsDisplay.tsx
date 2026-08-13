import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { useMediaQuery, useCustomComponentOverride } from '../../../hooks';
import { Slideshow, SlideshowProps, SlideshowSlide } from '../Slideshow';
import { ChatResult, ChatResultProps } from '../ChatResult';
import type { ChatController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { ChatResponseProductRecommendationData } from '@athoscommerce/snap-client';
import type { SearchResponseModelResult } from '@athoscommerce/snapi-types';

const defaultStyles: StyleScript<ChatResultsDisplayProps> = () => {
	return css({
		width: '100%',
		marginTop: '12px',

		'.ss__chat-results-display__result': {
			height: '100%',
			width: '100%',
			display: 'flex',
			cursor: 'pointer',
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

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatResultsDisplay', props);

	const currentChat = controller.store.currentChat;
	const activeMessage = currentChat?.activeMessage;
	const isSideChatOpen =
		!!activeMessage &&
		['inspirationResult', 'productComparison', 'productQuery'].includes(activeMessage.messageType) &&
		currentChat?.dismissedSideChatMessageId !== activeMessage.id;

	const isNarrow = useMediaQuery('(max-width: 549px)');
	// only the tablet range needs the narrower slideshow when the side chat is open;
	// at >= 1200px there's room to keep 2.9 slides alongside the secondary chat
	const isTabletRange = useMediaQuery('(min-width: 768px) and (max-width: 1200px)');
	const isConstrained = !isNarrow && isSideChatOpen && isTabletRange;
	const slidesToShow = isNarrow || isConstrained ? 1.9 : 2.9;

	// after all hooks — an override that resolves or fails mid-lifecycle must not
	// change the hook count between renders
	if (!shouldRenderDefault) {
		return overrideElement;
	}

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

	const renderSlideshow = (results: Product[], key?: string | number) => {
		const slides: SlideshowSlide[] = results.map((result: Product) => ({
			content: (
				// deliberately not role="button" — the title Button inside provides the
				// keyboard path, and marking this wrapper interactive would nest interactives
				<div key={result.id} className="ss__chat-results-display__result" onClick={(e: any) => handleResultClick(e, result)}>
					<ChatResult
						{...subProps.chatResult}
						result={result}
						controller={controller}
						scrollToBottom={scrollToBottom}
						onProductClick={(e) => {
							controller.track.product.click(e as any, result);
							controller.productQuickView(result);
							onProductQuickView?.();
						}}
					/>
				</div>
			),
		}));

		return <Slideshow {...subProps.slideshow} key={key} slides={slides} />;
	};

	// the store hydrates message results into Product instances before they reach this component
	const isRecommendation = chatItem.messageType === 'productRecommendation' && !!chatItem.recommendationResult?.length;
	if (!isRecommendation && !chatItem.results?.length) return null;

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-results-display', className, internalClassName)} {...styling}>
				{isRecommendation
					? chatItem.recommendationResult!.map((recommendation, index) =>
							recommendation.results?.length ? renderSlideshow(recommendation.results as Product[], index) : null
					  )
					: renderSlideshow(chatItem.results as Product[])}
			</div>
		</CacheProvider>
	);
});

interface ChatResultsDisplaySubProps {
	slideshow: Partial<SlideshowProps>;
	chatResult: Partial<ChatResultProps>;
}

export type ChatResultsDisplayItem = {
	id?: string;
	messageType?: string;
	results?: (Product | SearchResponseModelResult)[];
	recommendationResult?: (Omit<ChatResponseProductRecommendationData['recommendationResult'][number], 'results'> & {
		results?: (Product | SearchResponseModelResult)[];
	})[];
};

export type ChatResultsDisplayProps = {
	chatItem: ChatResultsDisplayItem;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductQuickView?: () => void;
} & ComponentProps<ChatResultsDisplayProps>;
