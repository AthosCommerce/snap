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
import { Carousel, CarouselProps } from '../../..';

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
						background: '#fff',
						border: '1px solid #E5E7EB',
						padding: '0.25em 0.5em',
						borderRadius: '0.5em',
						cursor: 'pointer',
						textDecoration: 'underline',
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
		Carousel: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,

			breakpoints: undefined,
			slidesPerView: 6,
			slidesPerGroup: 1,
			loop: false,
			hideButtons: true,
			pagination: false,
			centerInsufficientSlides: false,
			freeMode: true,
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
										{searchTerm}
									</button>
								))}
							</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products')}>
								<Carousel {...subProps.Carousel}>
									{section.products.map((product: any) => {
										const display = product?.display || product;
										return (
											<div
												key={product.id}
												className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products__product')}
											>
												<Image
													onClick={(e: any) => {
														controller?.track.product.click(e, product);
														controller?.productQuickView(product);
														onProductQuickView?.();
													}}
													alt={display?.mappings?.core?.name || ''}
													src={display?.mappings?.core?.imageUrl || display?.mappings?.core?.parentImageUrl || ''}
												/>
											</div>
										);
									})}
								</Carousel>
							</div>
						</div>
					))}
				</div>
			</div>
		</CacheProvider>
	) : null;
});

interface ChatInspirationResultMessageSubProps {
	Carousel: Partial<CarouselProps>;
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
