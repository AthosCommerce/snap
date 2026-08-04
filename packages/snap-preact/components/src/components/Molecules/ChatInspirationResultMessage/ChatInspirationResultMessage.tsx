import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useLang, useA11y, useCustomComponentOverride } from '../../../hooks';
import type { ChatController } from '@athoscommerce/snap-controller';
import { ChatRequestModel, ChatResponseInspirationResultData } from '@athoscommerce/snap-client';
import { Image } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Slideshow, SlideshowProps, SlideshowSlide } from '../Slideshow';

const defaultStyles: StyleScript<ChatInspirationResultMessageProps> = ({ theme }) => {
	const colorPrimary = theme?.variables?.colors?.primary || '#253B80';
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
					'.ss__chat-inspiration-result-message__inspiration-sections__section__queries__query.ss__button': {
						display: 'inline-flex',
						flexDirection: 'row-reverse',
						alignItems: 'center',
						gap: '0.5em',
						background: '#fff',
						border: '1px solid #E5E7EB',
						padding: '0.25em 0.5em',
						borderRadius: '1em',
						cursor: 'pointer',
						font: 'inherit',
						color: 'inherit',
						'.ss__button__content': {
							width: 'auto',
						},
						'&:focus-visible': {
							outline: `2px solid ${colorPrimary}`,
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

let warnedUnsupportedMessageType = false;

export const ChatInspirationResultMessage = observer((properties: ChatInspirationResultMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatInspirationResultMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatInspirationResultMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, onProductQuickView, disableStyles, className, internalClassName, treePath } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatInspirationResultMessage', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

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
		queryButton: {
			disableStyles,
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatInspirationResultMessageProps>(props, defaultStyles);

	const handleProductClick = (e: any, product: any): void => {
		// buttons/links should be clickable without triggering the product click
		if (e.composedPath?.().some((el: EventTarget) => el instanceof HTMLElement && el.matches('button, .ss__button, a'))) return;
		controller?.track.product.click(e, product);
		controller?.productQuickView(product);
		onProductQuickView?.();
	};

	const { messageType, inspirationSections } = chatItem;
	if (messageType !== 'inspirationResult') {
		if (!warnedUnsupportedMessageType) {
			console.warn('ChatInspirationResultMessage received message with unsupported type:', messageType, 'Expected type: inspirationResult');
			warnedUnsupportedMessageType = true;
		}
		return null;
	}

	// Translate a section's applied filters into the API's `searchFilters` shape,
	// grouping multiple values under the same field into one entry.
	const getSectionSearchFilters = (
		section: ChatResponseInspirationResultData['inspirationSections'][number]
	): { key: string; options: ({ key: string } | { low: string; high: string })[] }[] => {
		const grouped: Record<string, { key: string; options: ({ key: string } | { low: string; high: string })[] }> = {};
		(section.filterSummary || []).forEach((filter) => {
			if (!filter?.field || filter?.value == null) return;
			const entry = (grouped[filter.field] = grouped[filter.field] || { key: filter.field, options: [] });
			const value = filter.value as any;
			if (typeof value === 'object' && ('low' in value || 'high' in value)) {
				entry.options.push({ low: value.low == null ? '*' : String(value.low), high: value.high == null ? '*' : String(value.high) });
			} else {
				entry.options.push({ key: String(value) });
			}
		});
		return Object.values(grouped);
	};

	return inspirationSections.length ? (
		<CacheProvider>
			<div className={classnames('ss__chat-inspiration-result-message', className, internalClassName)} {...styling}>
				<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections')}>
					{inspirationSections.map((section, index) => (
						<div key={index} className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section')}>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__title')}>{section.clusterTitle}</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__description')}>
								{section.clusterDescription}
							</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__queries')}>
								{section.searchQueries.map((searchTerm, index) => {
									const queryDefaultLang = {
										searchQueryButton: {
											attributes: {
												'aria-label': `Search for "${searchTerm}"`,
											},
										},
									};
									const queryLang = deepmerge(queryDefaultLang, props.lang || {});
									const queryMergedLang = useLang(queryLang as any, {
										controller,
										chatItem,
										searchTerm,
									});
									return (
										<Button
											{...subProps.queryButton}
											key={index}
											internalClassName={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__queries__query')}
											icon={{ icon: 'search', size: '1em' }}
											content={searchTerm}
											onClick={() => {
												if (controller?.store.loading || controller?.store.blocked) return;
												const searchFilters = getSectionSearchFilters(section);
												controller?.search({
													data: {
														requestType: 'productSearch',
														searchTerm,
														...(searchFilters.length ? { searchFilters } : {}),
													},
												} as Partial<ChatRequestModel>);
											}}
											{...queryMergedLang.searchQueryButton.attributes}
										/>
									);
								})}
							</div>
							<div className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products')}>
								<Slideshow
									{...subProps.slideshow}
									slides={section.products.map((product: any): SlideshowSlide => {
										const display = product?.display || product;
										const productDefaultLang = {
											openProductButton: {
												attributes: {
													'aria-label': `Open ${display?.mappings?.core?.name || 'product'}`,
												},
											},
										};
										const productLang = deepmerge(productDefaultLang, props.lang || {});
										const productMergedLang = useLang(productLang as any, {
											controller,
											chatItem,
											product,
										});
										return {
											content: (
												<div
													key={product.id}
													className={classnames('ss__chat-inspiration-result-message__inspiration-sections__section__products__product')}
													role="button"
													ref={(e) => useA11y(e)}
													onClick={(e: any) => handleProductClick(e, product)}
													{...productMergedLang.openProductButton.attributes}
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
	queryButton: Partial<ButtonProps>;
}

export type ChatInspirationResultMessageProps = {
	chatItem: ChatResponseInspirationResultData;
	controller?: ChatController;
	onProductQuickView?: () => void;
	lang?: Partial<ChatInspirationResultMessageLang>;
} & ComponentProps<ChatInspirationResultMessageProps>;

export interface ChatInspirationResultMessageLang {
	searchQueryButton?: Lang<never>;
	openProductButton?: Lang<never>;
}
