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
import { ComponentProps, ResultsLayout, StyleScript } from '../../../types';
import { CalloutBadge, CalloutBadgeProps } from '../../Molecules/CalloutBadge';
import { OverlayBadge, OverlayBadgeProps } from '../../Molecules/OverlayBadge';
import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { Rating, RatingProps } from '../Rating';
import { Button, ButtonProps } from '../../Atoms/Button';
import deepmerge from 'deepmerge';
import { Lang, useLang, useComponent } from '../../../hooks';
import { VariantSelection, VariantSelectionProps } from '../VariantSelection';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<ResultProps> = () => {
	return css({
		'&.ss__result--grid': {
			display: 'flex',
			flexDirection: 'column',
			'& .ss__result__image-wrapper': {
				flex: '1 0 auto',
				minHeight: '0%',
			},
		},
		'&.ss__result--list': {
			display: 'flex',
			flexDirection: 'row',
			'& .ss__result__image-wrapper': {
				flex: '0 0 33%',
			},
			'& .ss__result__details': {
				flex: '1 1 auto',
				textAlign: 'left',
				marginLeft: '20px',
				padding: 0,
			},
		},

		'& .ss__result__image-wrapper': {
			position: 'relative',
			'& .ss__result__badge': {
				background: 'rgba(255, 255, 255, 0.5)',
				padding: '10px',
			},
		},

		'& .ss__result__details': {
			padding: '10px',
			textAlign: 'center',

			'& .ss__result__details__title': {
				marginBottom: '10px',
			},
			'& .ss__result__details__pricing': {
				marginBottom: '10px',

				'& .ss__result__price': {
					fontSize: '1.2em',
				},
				'& .ss__price--strike': {
					fontSize: '80%',
				},
			},
		},
	});
};

export const Result = observer((properties: ResultProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<ResultProps> = {
		layout: ResultsLayout.grid,
		treePath: globalTreePath,
		addToCartButtonText: 'Add To Cart',
		addToCartButtonSuccessText: 'Added!',
		addToCartButtonSuccessTimeout: 2000,
		hideAddToCartButton: true,
		hideRating: true,
	};

	const props = mergeProps('result', globalTheme, defaultProps, properties);

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
		layout,
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

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.result || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const core = result?.display?.mappings.core || result?.mappings?.core;

	const [addedToCart, setAddedToCart] = useState(false);

	const subProps: ResultSubProps = {
		variantSelection: {
			// global theme
			internalClassName: 'ss__result__variant-selection',
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		price: {
			// global theme
			internalClassName: 'ss__result__price',
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		calloutBadge: {
			// default props
			internalClassName: 'ss__result__callout-badge',
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
			internalClassName: 'ss__result__overlay-badge',
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
			internalClassName: 'ss__result__image',
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
			internalClassName: 'ss__result__rating',
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
			internalClassName: 'ss__result__button--addToCart',
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

	const styling = mergeStyles<ResultProps>(props, defaultStyles);

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
				className={classnames('ss__result', `ss__result--${layout}`, { 'ss__result--sale': isOnSale }, className, internalClassName)}
				ref={trackingRef}
			>
				{!hideImage && (
					<div className="ss__result__image-wrapper">
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

				<div className="ss__result__details">
					{!hideBadge && (
						<CalloutBadge
							{...subProps.calloutBadge}
							controller={controller as SearchController | AutocompleteController | RecommendationController}
						/>
					)}
					{!hideTitle && (
						<div className="ss__result__details__title">
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
					{!hideRating && <Rating {...subProps.rating} />}

					{!hidePricing && core.price && core.price > 0 ? (
						<div className="ss__result__details__pricing">
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
						<div className="ss__result__details__variant-selection">
							{result.variants?.selections.map((selection) => {
								return <VariantSelection {...subProps.variantSelection} selection={selection} />;
							})}
						</div>
					)}

					{!hideAddToCartButton && (
						<div className="ss__result__add-to-cart-wrapper">
							<Button {...subProps.button} content={addToCartButtonText} {...mergedLang.addToCartButtonText.all} />
						</div>
					)}
				</div>
			</article>
		</CacheProvider>
	) : null;
});

interface ResultSubProps {
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

export type ResultProps = {
	result: Product;
	controller?: SearchController | AutocompleteController | RecommendationController;
	lang?: Partial<ResultLang>;
	trackingRef?: MutableRef<HTMLElement | null>;
} & ResultTemplatesLegalProps &
	ComponentProps<ResultProps>;

export type ResultTemplatesLegalProps = {
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
	layout?: keyof typeof ResultsLayout | ResultsLayout;
	truncateTitle?: TruncateTitleProps;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, Event>) => void;
	customComponent?: string;
};

export interface ResultLang {
	addToCartButtonText: Lang<ResultPropData>;
	addToCartButtonSuccessText: Lang<ResultPropData>;
}

interface ResultPropData {
	result: Product;
	controller?: SearchController | AutocompleteController | RecommendationController;
}

export type ResultNames = 'seed';
