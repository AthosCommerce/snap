import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
// import { Lang } from '../../../hooks';
import { ChatRequestModel, ChatResponseInspirationResultData } from '@athoscommerce/snap-client';
import { Image } from '../../Atoms/Image';
import { Icon, IconProps } from '../../Atoms/Icon';
import { Slideshow, SlideshowProps, SlideshowSlide } from '../Slideshow';

const defaultStyles: StyleScript<ChatInspirationResultMessageProps> = () => {
	return css({
		'.ss__chat-inspiration-result-message__inspiration-sections': {
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
			padding: '1em',

			'.ss__chat-inspiration-result-message__inspiration-sections__section': {
				background: '#F9FAFB',
				borderRadius: '1em',
				padding: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '1em',

				'.ss__chat-inspiration-result-message__inspiration-sections__section__title': {
					fontWeight: 'bold',
					fontSize: '1.2em',
				},
				'.ss__chat-inspiration-result-message__inspiration-sections__section__description': {},
				'.ss__chat-inspiration-result-message__inspiration-sections__section__queries': {
					display: 'flex',
					gap: '1em',
					flexWrap: 'wrap',
					'.ss__chat-inspiration-result-message__inspiration-sections__section__queries__query': {
						display: 'inline-flex',
						alignItems: 'center',
						gap: '0.5em',
						background: '#fff',
						border: '1px solid #E5E7EB',
						padding: '0.25em 0.5em',
						borderRadius: '1em',
						cursor: 'pointer',
						font: 'inherit',
						color: 'inherit',
						'&:focus-visible': {
							outline: '2px solid #253B80',
							outlineOffset: '2px',
						},
					},
				},
				'.ss__chat-inspiration-result-message__inspiration-sections__section__products': {
					'.ss__chat-inspiration-result-message__inspiration-sections__section__products__product': {
						// rest slightly scaled down and grow to full size on hover so the zoom
						// reads as a subtle enlargement without overflowing the slideshow bounds
						transform: 'scale(0.96)',
						transition: 'transform 0.3s ease',
						'&:hover': {
							transform: 'scale(1)',
						},
						'.ss__image': {
							img: {
								width: '80px',
								height: '80px',
								objectFit: 'cover',
								cursor: 'pointer',
								border: '1px solid #E5E7EB',
								borderRadius: '8px',
							},
						},
					},
				},
			},
		},
	});
};

export const ChatInspirationResultMessage = observer((properties: ChatInspirationResultMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatInspirationResultMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatInspirationResultMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, onProductQuickView, disableStyles, className, internalClassName, treePath } = props;

	const subProps: ChatInspirationResultMessageSubProps = {
		slideshow: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,

			slidesToShow: 6,
			slidesToMove: 1,
			loop: false,
			showNavigation: false,
			showPagination: false,
			centerInsufficientSlides: false,
		},
		icon: {
			disableStyles,
			theme: props?.theme,
			treePath,
			size: '1em',
		},
	};

	const styling = mergeStyles<ChatInspirationResultMessageProps>(props, defaultStyles);

	//initialize lang
	// const defaultLang = {
	// 	// label: {
	// 	// 	value: label,
	// 	// },
	// };

	//deep merge with props.lang
	// const lang = deepmerge(defaultLang, props.lang || {});

	const handleProductClick = (e: any, product: any): void => {
		// buttons/links should be clickable without triggering the product click
		if (e.composedPath?.().some((el: EventTarget) => el instanceof HTMLElement && el.matches('button, .ss__button, a'))) return;
		controller?.track.product.click(e, product);
		controller?.productQuickView(product);
		onProductQuickView?.();
	};

	const handleProductKeyDown = (e: any, product: any): void => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			controller?.productQuickView(product);
			onProductQuickView?.();
		}
	};

	const { messageType, inspirationSections } = chatItem;
	if (messageType !== 'inspirationResult') {
		console.warn('ChatInspirationResultMessage received message with unsupported type:', messageType, 'Expected type: inspirationResult');
		return null;
	}

	return inspirationSections.length ? (
		<CacheProvider>
			<div
				className={classnames('ss__chat-inspiration-result-message', className, internalClassName)}
				{...styling}
				// lang={{
				// 	buttonLabel: lang.label,
				// }}
			>
				<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections')}>
					{inspirationSections.map((section, index) => (
						<div key={index} className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section')}>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__title')}>{section.clusterTitle}</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__description')}>
								{section.clusterDescription}
							</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__queries')}>
								{section.searchQueries.map((searchTerm, index) => (
									<button
										type="button"
										key={index}
										className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__queries__query')}
										aria-label={`Search for "${searchTerm}"`}
										onClick={() => {
											if (controller?.store.loading || controller?.store.blocked) return;
											controller?.search({ data: { requestType: 'productSearch', searchTerm } } as Partial<ChatRequestModel>);
										}}
									>
										<Icon {...subProps.icon} icon="search" />
										{searchTerm}
									</button>
								))}
							</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products')}>
								<Slideshow
									{...subProps.slideshow}
									slides={section.products.map((product: any): SlideshowSlide => {
										const display = product?.display || product;
										return {
											content: (
												<div
													key={product.id}
													className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products__product')}
													role="button"
													tabIndex={0}
													aria-label={`Open ${display?.mappings?.core?.name || 'product'}`}
													onClick={(e: any) => handleProductClick(e, product)}
													onKeyDown={(e: any) => handleProductKeyDown(e, product)}
												>
													<Image
														alt={display?.mappings?.core?.name || ''}
														src={display?.mappings?.core?.imageUrl || display?.mappings?.core?.parentImageUrl || ''}
													/>
												</div>
											),
										};
									})}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</CacheProvider>
	) : null;
});

interface ChatInspirationResultMessageSubProps {
	slideshow: Partial<SlideshowProps>;
	icon: Partial<IconProps>;
}

export type ChatInspirationResultMessageProps = {
	chatItem: ChatResponseInspirationResultData;
	controller?: ChatController;
	onProductQuickView?: () => void;
	lang?: Partial<ChatInspirationResultMessageLang>;
} & ChatInspirationResultMessageTemplatesLegalProps &
	ComponentProps<ChatInspirationResultMessageProps>;

export type ChatInspirationResultMessageTemplatesLegalProps = {
	chatItem: ChatResponseInspirationResultData;
};

export interface ChatInspirationResultMessageLang {
	// label: Lang<{
	// 	options: ListOption[];
	// 	selectedOptions: ListOption[];
	// }>;
}
