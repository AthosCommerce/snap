import { h } from 'preact';
import { css, useTheme } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { RecommendationBundle, RecommendationBundleLang, RecommendationBundleProps } from '../RecommendationBundle';
import { Price, PriceProps } from '../../Atoms/Price';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Icon, IconProps } from '../../Atoms/Icon';
import { Image, ImageProps } from '../../Atoms/Image';
import { BundledCTAProps } from '../RecommendationBundle/BundleCTA';
import { componentNameToClassName } from '../../../utilities/componentNameToClassName';
import classNames from 'classnames';
import { useState } from 'preact/hooks';
import deepmerge from 'deepmerge';
import { useLang } from '../../../hooks';
import { AbstractController, RecommendationController } from '@athoscommerce/snap-controller';
import { Product } from '@athoscommerce/snap-store-mobx';
import { Theme } from '../../../providers';

const defaultStyles: StyleScript<RecommendationBundleListProps> = () => {
	return css({
		'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
			display: 'flex',
			'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': {
				position: 'relative',
				minWidth: '20px',
			},

			'.ss__result__details': {
				textAlign: 'left',
			},
		},

		'.ss__recommendation-profile-tracker': {
			display: 'flex',
			flexDirection: 'column',
		},

		'.ss__recommendation-bundle-list__wrapper': {
			order: '3',
		},

		'.ss__recommendation-bundle-list__wrapper__cta': {
			order: '2',

			'.ss__button': {
				cursor: 'pointer',
			},
			'.ss__recommendation-bundle-list__wrapper__cta__inner__images': {
				display: 'flex',
				flexDirection: 'row',
			},
			'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
				top: '50%',
				position: 'absolute',
				right: '-0.5em',
			},

			'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': {
				display: 'none',
			},

			'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': {
				padding: '0px 15px',
				position: 'relative',
			},
		},
	});
};

const alias = 'recommendationBundleList';

export const RecommendationBundleList = observer((properties: RecommendationBundleListProps) => {
	const globalTheme: Theme = useTheme();

	//mergeprops only uses names that are passed via properties, so this cannot be put in the defaultProps
	const _properties = {
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		...properties,
	};

	const { treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties;

	const subProps: RecommendationBundleListSubProps = {
		recommendationBundle: {
			// default props
			seedText: '',
			ctaInline: false,
			limit: 5,
			preselectedCount: 2,
			carousel: {
				enabled: false,
				seedInCarousel: true,
			},
			ctaSlot: (props) => <CTASlot {...props} />,
			vertical: true,
			separatorIcon: false,
			alias: alias,

			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: _properties?.theme,
			treePath,
		},
	};

	const mergedProps = mergeProps(alias, globalTheme, {}, _properties);
	const styling = mergeStyles<RecommendationBundleListProps>(mergedProps, defaultStyles);

	return <RecommendationBundle controller={controller} {...styling} {...subProps.recommendationBundle} {...additionalProps} />;
});

export type RecommendationBundleListProps = {
	controller: RecommendationController & AbstractController;
	alias?: string | undefined;
	lang?: Partial<RecommendationBundleLang> | undefined;
	results?: Product[] | undefined;
} & RecommendationBundleListTemplatesLegalProps &
	ComponentProps<RecommendationBundleListProps>;

export type RecommendationBundleListTemplatesLegalProps = Omit<
	RecommendationBundleProps,
	'controller' | 'alias' | 'lang' | 'results' | 'seedText' | 'ctaInline' | 'ctaIcon' | 'vertical' | 'slidesPerView' | 'carousel' | 'breakpoints'
>;

interface RecommendationBundleListSubProps {
	recommendationBundle: Partial<RecommendationBundleProps>;
}

interface BundleCTASubProps {
	image: Partial<ImageProps>;
	icon: Partial<IconProps>;
	separatorIcon: Partial<IconProps>;
	subtotalStrike: Partial<PriceProps>;
	subtotalPrice: Partial<PriceProps>;
	button: Partial<ButtonProps>;
}
export const CTASlot = observer((props: BundledCTAProps) => {
	const cartStore = props.cartStore;

	const classNamePrefix = `ss__${componentNameToClassName(alias)}`;

	props.onAddToCart = (e: any) => {
		setAddedToCart(true);

		props.onAddToCart(e);

		setTimeout(() => setAddedToCart(false), props.ctaButtonSuccessTimeout);
	};

	const [addedToCart, setAddedToCart] = useState(false);

	props.addedToCart = addedToCart;

	const subProps: BundleCTASubProps = {
		image: {
			// default props
			className: `${classNamePrefix}__wrapper__cta__image`,
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
		separatorIcon: {
			name: 'bundle-cart-separator',
			// default props
			className: `${classNamePrefix}__wrapper__cta__icon--separator`,
			icon: 'plus',
			size: 12,
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
		icon: {
			name: 'bundle-cart',
			// default props
			className: `${classNamePrefix}__wrapper__cta__icon`,
			size: 50,
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
		subtotalStrike: {
			// default props
			name: 'bundle-msrp',
			className: `${classNamePrefix}__wrapper__cta__price--strike`,
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
		subtotalPrice: {
			// default props
			className: `${classNamePrefix}__wrapper__cta__price`,
			name: 'bundle-price',
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
		button: {
			// default props
			className: `${classNamePrefix}__wrapper__cta__button`,
			// component theme overrides
			theme: props?.theme,
			treePath: props.treePath,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge({}, props.lang || {});
	const mergedLang = useLang(lang as any, {});

	return (
		<>
			<div className={`${classNamePrefix}__wrapper__cta__inner`}>
				<div className={`${classNamePrefix}__wrapper__cta__inner__images`}>
					{cartStore.items.map((item: any) => {
						const core = item.display.mappings.core;
						return (
							<div className={`${classNamePrefix}__wrapper__cta__inner__image-wrapper`}>
								<a href={core!.url}>
									<Image src={core.thumbnailImageUrl} alt={core.name} lazy={false} />
								</a>
								<Icon {...subProps.separatorIcon} />
							</div>
						);
					})}
				</div>

				<div className={`${classNamePrefix}__wrapper__cta__subtotal`} aria-atomic="false" aria-live="polite">
					{props.ctaIcon ? (
						<div className={`${classNamePrefix}__wrapper__cta__subtotal__icon__wrapper`}>
							<Icon {...subProps.icon} {...(typeof props.ctaIcon == 'string' ? { icon: props.ctaIcon } : (props.ctaIcon as Partial<IconProps>))} />
						</div>
					) : (
						<></>
					)}

					<span className={`${classNamePrefix}__wrapper__cta__subtotal__title`}>{`Subtotal for ${cartStore.count} items`}</span>
					<div className={`${classNamePrefix}__wrapper__cta__subtotal__prices`}>
						{cartStore.msrp && cartStore.msrp !== cartStore.price ? (
							<label className={`${classNamePrefix}__wrapper__cta__subtotal__strike`}>
								Was <Price {...subProps.subtotalStrike} lineThrough={true} value={cartStore.msrp} />
							</label>
						) : (
							<></>
						)}
						<label className={`${classNamePrefix}__wrapper__cta__subtotal__price`}>
							<Price {...subProps.subtotalPrice} value={cartStore.price} />
						</label>
					</div>
				</div>
			</div>
			<div className={`${classNamePrefix}__cta__button__wrapper`}>
				<Button
					{...subProps.button}
					disabled={cartStore.items.length == 0}
					disableStyles
					internalClassName={classNames(`${classNamePrefix}__cta__button`, {
						[`${classNamePrefix}__cta__button--added`]: addedToCart,
					})}
					aria-live={addedToCart}
					onClick={(e) => props.onAddToCart(e)}
					{...(addedToCart ? mergedLang.ctaButtonSuccessText?.all : mergedLang.ctaButtonText?.all)}
				>
					{props.addedToCart ? props.ctaButtonSuccessText : props.ctaButtonText}
				</Button>
			</div>
		</>
	);
});
