import { h } from 'preact';
import { MutableRef, useState } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Image, ImageProps } from '../../Atoms/Image';
import { Price, PriceProps } from '../../Atoms/Price';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { defined, cloneWithProps, mergeProps, mergeStyles } from '../../../utilities';
import { filters } from '@athoscommerce/snap-toolbox';
import { ComponentProps, StyleScript } from '../../../types';
import { CalloutBadge, CalloutBadgeProps } from '../CalloutBadge';
import { OverlayBadge, OverlayBadgeProps } from '../OverlayBadge';
import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { Rating, RatingProps } from '../Rating';
import { Button, ButtonProps } from '../../Atoms/Button';
import deepmerge from 'deepmerge';
import { Lang, useLang, useComponent } from '../../../hooks';
import { VariantSelection, VariantSelectionProps } from '../VariantSelection';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<OverlayResultProps> = (props) => {
	const { overlayBackgroundColor, disableSlide } = props;

	return css({
		position: 'relative',
		overflow: 'hidden',
		'& .ss__overlay-result__image-wrapper': {
			position: 'relative',
			width: '100%',

			'& .ss__overlay-result__badge': {
				background: 'rgba(255, 255, 255, 0.5)',
				padding: '10px',
			},

			'& .ss__overlay-result__image': {
				display: 'block',
				width: '100%',
				objectFit: 'cover',
			},
		},

		'& .ss__overlay-result__details': {
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			width: '100%',
			boxSizing: 'border-box',
			padding: '18px 10px 10px',
			background: overlayBackgroundColor,
			color: '#fff',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			alignItems: 'flex-start',
			textAlign: 'left',
			transform: 'translateY(0)',
			transition: disableSlide ? 'none' : 'transform 260ms ease',

			'& .ss__overlay-result__details__title': {
				marginBottom: '4px',
				'& a': {
					color: 'inherit',
					textDecoration: 'none',
				},
			},
			'& .ss__overlay-result__details__pricing': {
				marginBottom: '4px',

				'& .ss__overlay-result__price': {
					color: '#fff',
					fontSize: '1.3em',
				},
				'& .ss__price--strike': {
					color: 'rgba(255,255,255,0.7)',
					fontSize: '0.9em',
				},
			},
			'& .ss__overlay-result__rating': {
				marginBottom: '4px',
			},
			'& .ss__overlay-result__button--addToCart': {
				marginTop: '6px',
			},

			'& .ss__overlay-result__details__extra': {
				display: 'grid',
				gridTemplateRows: disableSlide ? '1fr' : '0fr',
				opacity: disableSlide ? 1 : 0,
				transform: disableSlide ? 'translateY(0)' : 'translateY(1px)',
				transition: disableSlide ? 'none' : 'grid-template-rows 260ms ease, opacity 220ms ease, transform 260ms ease',
				width: '100%',

				'& .ss__overlay-result__details__extra-inner': {
					overflow: 'hidden',
					minHeight: 0,
				},
			},
		},

		'&:hover .ss__overlay-result__details': {
			transform: 'translateY(0)',
		},

		'&:hover .ss__overlay-result__details .ss__overlay-result__details__extra': {
			gridTemplateRows: '1fr',
			opacity: 1,
			transform: 'translateY(0)',
		},
	});
};

export const OverlayResult = observer((properties: OverlayResultProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<OverlayResultProps> = {
		treePath: globalTreePath,
		addToCartButtonText: 'Add To Cart',
		addToCartButtonSuccessText: 'Added!',
		addToCartButtonSuccessTimeout: 2000,
		hideAddToCartButton: true,
		overlayBackgroundColor: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
	};

	const props = mergeProps('overlayResult', globalTheme, defaultProps, properties);

	const {
		result,
		hideBadge,
		hideTitle,
		hidePricing,
		hideImage,
		detailSlot,
		fallback,
		disableStyles,
		className,
		internalClassName,
		onClick,
		controller,
		hideVariantSelections,
		hideAddToCartButton,
		onAddToCartClick,
		addToCartButtonText,
		addToCartButtonSuccessText,
		addToCartButtonSuccessTimeout,
		hideRating,
		trackingRef,
		treePath,
		customComponent,
	} = props;

	if (!treePath?.split(' ')?.includes('result') && customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.overlayResult || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const core = result?.display?.mappings.core || result?.mappings?.core;

	const [addedToCart, setAddedToCart] = useState(false);

	const subProps: OverlayResultSubProps = {
		variantSelection: {
			// global theme
			internalClassName: 'ss__overlay-result__variant-selection',
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		price: {
			// global theme
			internalClassName: 'ss__overlay-result__price',
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		calloutBadge: {
			// default props
			internalClassName: 'ss__overlay-result__callout-badge',
			result,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		overlayBadge: {
			// default props
			internalClassName: 'ss__overlay-result__overlay-badge',
			result,
			controller: controller as SearchController | AutocompleteController | RecommendationController,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		image: {
			// default props
			internalClassName: 'ss__overlay-result__image',
			alt: core?.name || '',
			src: core?.imageUrl || '',
			// inherited props
			...defined({
				disableStyles,
				fallback: fallback,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		rating: {
			// default props
			internalClassName: 'ss__overlay-result__rating',
			value: core?.rating || 0,
			count: Number(core?.ratingCount || 0),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		button: {
			// default props
			internalClassName: 'ss__overlay-result__button--addToCart',
			onClick: (e) => {
				setAddedToCart(true);

				if (onAddToCartClick) {
					onAddToCartClick(e, result);
				}
				controller?.addToCart([result]);

				setTimeout(() => setAddedToCart(false), addToCartButtonSuccessTimeout);
			},

			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	let displayName = core?.name;
	if (props.truncateTitle) {
		displayName = filters.truncate(core?.name || '', props.truncateTitle.limit, props.truncateTitle.append);
	}

	const styling = mergeStyles<OverlayResultProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		addToCartButtonText: {
			value: addedToCart ? addToCartButtonSuccessText : addToCartButtonText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		result: result,
		controller: controller,
	});

	const isOnSale = Boolean(core?.msrp && core?.price && core?.price < core?.msrp);

	return core ? (
		<CacheProvider>
			<article
				{...styling}
				className={classnames('ss__overlay-result', { 'ss__overlay-result--sale': isOnSale }, className, internalClassName)}
				ref={trackingRef}
			>
				{!hideImage && (
					<div className="ss__overlay-result__image-wrapper">
						<a
							href={core!.url}
							onClick={(e: React.MouseEvent<HTMLAnchorElement, Event>) => {
								onClick && onClick(e);
							}}
						>
							{!hideBadge ? (
								<OverlayBadge
									{...subProps.overlayBadge}
									controller={controller as SearchController | AutocompleteController | RecommendationController}
								>
									<Image {...subProps.image} />
								</OverlayBadge>
							) : (
								<Image {...subProps.image} />
							)}
						</a>
					</div>
				)}

				<div className="ss__overlay-result__details">
					{!hideTitle && (
						<div className="ss__overlay-result__details__title">
							<a
								href={core.url}
								onClick={(e: React.MouseEvent<HTMLAnchorElement, Event>) => {
									onClick && onClick(e);
								}}
								dangerouslySetInnerHTML={{
									__html: displayName || '',
								}}
							/>
						</div>
					)}

					<div className="ss__overlay-result__details__extra">
						<div className="ss__overlay-result__details__extra-inner">
							{!hideBadge && (
								<CalloutBadge
									{...subProps.calloutBadge}
									controller={controller as SearchController | AutocompleteController | RecommendationController}
								/>
							)}

							{!hideRating && <Rating {...subProps.rating} />}

							{!hidePricing && core.price && core.price > 0 ? (
								<div className="ss__overlay-result__details__pricing">
									{isOnSale ? (
										<>
											<Price {...subProps.price} value={core.msrp} lineThrough={true} name={'msrp'} />
											&nbsp;
											<Price {...subProps.price} value={core.price} name={'price'} />
										</>
									) : (
										<Price {...subProps.price} value={core.price!} />
									)}
								</div>
							) : null}

							{cloneWithProps(detailSlot, { result, treePath })}

							{!hideVariantSelections && result.variants?.selections.length && (
								<div className="ss__overlay-result__details__variant-selection">
									{result.variants?.selections.map((selection) => {
										return <VariantSelection {...subProps.variantSelection} selection={selection} />;
									})}
								</div>
							)}

							{!hideAddToCartButton && (
								<div className="ss__overlay-result__add-to-cart-wrapper">
									<Button {...subProps.button} content={addToCartButtonText} {...mergedLang.addToCartButtonText.all} />
								</div>
							)}
						</div>
					</div>
				</div>
			</article>
		</CacheProvider>
	) : null;
});

interface OverlayResultSubProps {
	calloutBadge: CalloutBadgeProps;
	overlayBadge: Omit<OverlayBadgeProps, 'children'>;
	price: PriceProps;
	image: ImageProps;
	rating: RatingProps;
	button: ButtonProps;
	variantSelection: Partial<VariantSelectionProps>;
}
export interface TruncateTitleProps {
	limit: number;
	append?: string;
}

export type OverlayResultProps = {
	result: Product;
	controller?: SearchController | AutocompleteController | RecommendationController;
	lang?: Partial<OverlayResultLang>;
	trackingRef?: MutableRef<HTMLElement | null>;
} & OverlayResultTemplatesLegalProps &
	ComponentProps<OverlayResultProps>;

export type OverlayResultTemplatesLegalProps = {
	disableSlide?: boolean;
	overlayBackgroundColor?: string;
	hideBadge?: boolean;
	hideTitle?: boolean;
	hideImage?: boolean;
	hidePricing?: boolean;
	hideRating?: boolean;
	hideVariantSelections?: boolean;
	hideAddToCartButton?: boolean;
	addToCartButtonText?: string;
	onAddToCartClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, result: Product) => void;
	addToCartButtonSuccessText?: string;
	addToCartButtonSuccessTimeout?: number;
	detailSlot?: JSX.Element | JSX.Element[];
	fallback?: string;
	truncateTitle?: TruncateTitleProps;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, Event>) => void;
	customComponent?: string;
};

export interface OverlayResultLang {
	addToCartButtonText: Lang<OverlayResultPropData>;
	addToCartButtonSuccessText: Lang<OverlayResultPropData>;
}

interface OverlayResultPropData {
	result: Product;
	controller?: SearchController | AutocompleteController | RecommendationController;
}

export type OverlayResultNames = 'seed';
