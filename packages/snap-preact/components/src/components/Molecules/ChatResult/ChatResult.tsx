import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath, withTracking } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Price } from '../../Atoms/Price';
import { CalloutBadge } from '../CalloutBadge';
import { OverlayBadge } from '../OverlayBadge';
import { Lang, useLang, useCustomComponentOverride } from '../../../hooks';
import type { ChatController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatResultProps> = ({ theme }) => {
	const colorCta = Colour.concrete(theme?.variables?.colors?.accent) || '#feeeae';
	return css({
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
		boxSizing: 'border-box',
		border: '1px solid #e5e7eb',
		borderRadius: '1em',
		overflow: 'hidden',
		// rest slightly scaled down and grow to full size on hover so the zoom
		// reads as a subtle enlargement without ever exceeding the slide bounds
		// (the surrounding Slideshow clips overflow), which would otherwise crop
		// the card's border on hover
		transform: 'scale(0.96)',
		transition: 'transform 0.3s ease',

		'&:hover': {
			transform: 'scale(1)',
		},

		'.ss__chat-result__image': {
			width: '100%',
			aspectRatio: '1 / 1',
			position: 'relative',
			overflow: 'hidden',
			// fixed-aspect frame: scale the image to fill it and crop overflow so
			// results with different intrinsic image aspect ratios still line up
			// at the same height when displayed side-by-side.
			img: {
				width: '100%',
				height: '100%',
				objectFit: 'cover',
			},
			'.ss__chat-result__image__buttons': {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: '0.5em',
				padding: '0.5em',
				boxSizing: 'border-box',

				'.ss__button': {
					padding: '0.25em 0.5em',
					background: 'rgba(255, 255, 255, 0.9)',
					textAlign: 'center',
					justifyContent: 'center',
					borderRadius: '2em',
					boxShadow: 'inset 0 0 1px 0px rgba(0, 0, 0, 0.5)',
					flex: '1 1 0',
					minWidth: 0,
					fontWeight: 'bold',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},
			},

			'.ss__chat-result__image__icons': {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				gap: '0.5em',
				padding: '0.5em',
				flex: '0 0 auto',
				alignItems: 'flex-start',
				boxSizing: 'border-box',

				'.ss__button': {
					height: '2.5em',
					width: '2.5em',
					backgroundColor: '#000',
					borderRadius: '50%',
					justifyContent: 'center',
					boxSizing: 'border-box',

					'&.ss__chat-result__image__icons__icon--cart': {
						backgroundColor: colorCta,
						svg: {
							fill: '#000',
							stroke: '#000',
						},
					},
					svg: {
						fill: '#fff',
						stroke: '#fff',
					},
				},
			},
		},
		'.ss__chat-result__content': {
			background: '#f9fafb',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5em',
			flex: '1 1 auto',
			padding: '0.5em 0',

			'.ss__chat-result__content__title--primary': {
				padding: '0 0.5em',

				'&.ss__button': {
					display: 'block',
					background: 'none',
					border: 'none',
					color: 'inherit',
					font: 'inherit',
					textAlign: 'left',
					cursor: 'pointer',
					width: 'auto',
				},
			},
			'.ss__chat-result__content__title--secondary': {
				padding: '0 0.5em',
				color: '#6A7282',
				fontSize: '90%',
			},
			'.ss__chat-result__content__price': {
				padding: '0 0.5em',
				color: '#000',
				fontWeight: 'bold',
				fontSize: '1.2em',
			},
		},
	});
};

export const ChatResult = withTracking(
	observer((properties: ChatResultProps) => {
		const globalTheme: Theme = useTheme();
		const globalTreePath = useTreePath();

		const defaultProps: Partial<ChatResultProps> = {
			treePath: globalTreePath,
		};

		const props = mergeProps('chatResult', globalTheme, defaultProps, properties);

		const { controller, result, scrollToBottom, onProductClick, trackingRef, disableStyles, className, internalClassName, treePath } = props;

		const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatResult', {
			...props,
			customComponent: props.customComponent && props.customComponent !== 'ChatResult' ? props.customComponent : undefined,
		});

		if (!shouldRenderDefault) {
			return overrideElement;
		}

		const isInComparison = controller.store.currentChat?.comparisons.items.some((item) => item.result?.id === result.id);
		// a result is "configurable" when it ships with selectable variant options
		// (e.g. color/size); those need a selection before they can be added to cart
		const isConfigurable = !!(result as any).variants?.optionConfig && Object.keys((result as any).variants.optionConfig).length > 0;

		const subProps: ChatResultSubProps = {
			button: {
				disableStyles,
				theme: props.theme,
				treePath,
			},
			image: {
				lazy: false,
				onLoad: scrollToBottom,
				disableStyles,
				theme: props.theme,
				treePath,
			},
		};

		const styling = mergeStyles<ChatResultProps>(props, defaultStyles);

		const productName = result.display.mappings.core?.name;

		//initialize lang
		const defaultLang: Partial<ChatResultLang> = {
			similarButton: {
				value: 'Similar',
				attributes: {
					'aria-label': `Show similar to ${productName || 'product'}`,
				},
			},
			compareButton: {
				value: 'Compare',
				attributes: {
					'aria-label': `Compare ${productName || 'product'}`,
				},
			},
			addedToComparisonButton: {
				attributes: {
					'aria-label': `${productName || 'Product'} added to comparison`,
					title: 'Added to comparison',
				},
			},
			discussButton: {
				attributes: {
					'aria-label': `Discuss ${productName || 'product'}`,
					title: 'Discuss Product',
				},
			},
			addToCartButton: {
				attributes: {
					'aria-label': `Add ${productName || 'product'} to cart`,
					title: 'Add to Cart',
				},
			},
			configureButton: {
				attributes: {
					'aria-label': `Configure ${productName || 'product'}`,
					title: 'Configure',
				},
			},
			productLink: {
				attributes: {
					'aria-label': `Open ${productName || 'product'}`,
				},
			},
		};

		//deep merge with props.lang
		const lang = deepmerge(defaultLang, props.lang || {});
		const mergedLang = useLang(
			lang as any,
			{
				controller,
				result,
			},
			{ activeBreakpoint: globalTheme?.activeBreakpoint }
		);

		return (
			<CacheProvider>
				<div className={classnames('ss__chat-result', className, internalClassName)} ref={trackingRef} {...styling}>
					<div className="ss__chat-result__image">
						<OverlayBadge controller={controller} result={result} renderEmpty={true}>
							<Image
								{...subProps.image}
								className={'ss__chat-result__detail-slot__image'}
								alt={productName || ''}
								src={result.display.mappings.core?.imageUrl || result.display.mappings.core?.parentImageUrl || ''}
							/>
						</OverlayBadge>
						<div className="ss__chat-result__image__buttons">
							{controller.store.features.similarProducts.enabled && (
								<Button
									{...subProps.button}
									className={'ss__chat-result__image__buttons__similar'}
									onClick={() => {
										controller.productSimilar(result);
									}}
									{...mergedLang.similarButton.all}
								/>
							)}
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__buttons__compare'}
								icon={isInComparison ? { icon: 'check-thin' } : undefined}
								aria-pressed={isInComparison}
								onClick={() => {
									// toggle: clicking again removes it from comparison, matching the 'x' icon in the comparison view
									if (isInComparison) {
										controller.store.currentChat?.comparisons.remove(result.id);
										return;
									}
									controller.compareProduct(result);
								}}
								{...(isInComparison ? mergedLang.addedToComparisonButton.attributes : mergedLang.compareButton.all)}
							/>
						</div>
						<div className="ss__chat-result__image__icons">
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__icons__icon--inquire'}
								icon={{ icon: 'chat' }}
								onClick={() => {
									controller.productQuery(result);
								}}
								{...mergedLang.discussButton.attributes}
							/>
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__icons__icon--cart'}
								icon={{ icon: 'cart' }}
								onClick={() => {
									// configurable products need a variant selection — open the product
									// information panel so the user can pick options before adding to cart
									if (isConfigurable) {
										controller.productQuickView(result);
										return;
									}
									controller.track.product.addToCart(result);
									controller.addToCart(result);
								}}
								{...(isConfigurable ? mergedLang.configureButton.attributes : mergedLang.addToCartButton.attributes)}
							/>
						</div>
					</div>
					<div className="ss__chat-result__content">
						{productName &&
							(onProductClick ? (
								<Button
									{...subProps.button}
									internalClassName={'ss__chat-result__content__title--primary'}
									content={productName}
									onClick={(e) => onProductClick(e)}
									{...mergedLang.productLink.attributes}
								/>
							) : (
								<div className="ss__chat-result__content__title--primary">{productName}</div>
							))}
						{result.display.mappings.core?.price != null && (
							<div className="ss__chat-result__content__price">
								<Price value={result.display.mappings.core?.price} />
							</div>
						)}
						<CalloutBadge controller={controller} result={result} />
					</div>
				</div>
			</CacheProvider>
		);
	})
);

interface ChatResultSubProps {
	button: Partial<ButtonProps>;
	image: Partial<ImageProps>;
}

export type ChatResultProps = {
	result: Product;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	lang?: Partial<ChatResultLang>;
	trackingRef?: (el: HTMLElement | null) => void;
} & ComponentProps<ChatResultProps>;

export interface ChatResultLang {
	similarButton?: Lang<ChatResultLangData>;
	compareButton?: Lang<ChatResultLangData>;
	addedToComparisonButton?: Lang<ChatResultLangData>;
	discussButton?: Lang<ChatResultLangData>;
	addToCartButton?: Lang<ChatResultLangData>;
	configureButton?: Lang<ChatResultLangData>;
	productLink?: Lang<ChatResultLangData>;
}

interface ChatResultLangData {
	result: Product;
	controller?: ChatController;
}
