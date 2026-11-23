import type { CSSObject } from '@emotion/react';
import type { Theme } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const overlayInset = 8; // matches the overlay badge grid padding (0.5rem)
const overlayGap = 5; // space between the checkbox / seed badge and the overlay badge below it
const checkboxSize = 18; // the bundle selector's checkbox size
const seedBadgeHeight = 21;

// add all to cart is the bundle's main action - filled, like Apply, See more and More info
export const bundleCtaButtonSharedStyles = (prefix: string, theme?: Theme): CSSObject => {
	const activeColors = custom.colorRoles(theme?.variables).brandFill;

	return {
		[`.${prefix}__wrapper__cta .${prefix}__wrapper__cta__button`]: {
			padding: '12px 20px',
			'&, &:not(.ss__button--disabled):hover': {
				backgroundColor: activeColors[0],
				borderColor: activeColors[0],
				color: activeColors[1],
			},
			'&:not(.ss__button--disabled):hover': {
				opacity: 0.8,
			},
		},
	};
};

// the selector (checkbox and seed badge over the result image) shared by the bundle templates - each
// template renders it under its own classname prefix (`ss__recommendation-bundle`, `ss__recommendation-bundle-vertical`)
export const bundleSelectorSharedStyles = (prefix: string, theme?: Theme): CSSObject => {
	const activeColors = custom.colorRoles(theme?.variables).brandFill;
	const resultWrapper = `.${prefix}__wrapper__selector__result-wrapper`;
	const badgeGrid = '.ss__overlay-badge .ss__overlay-badge__grid-wrapper';

	return {
		[`.${prefix}__wrapper__selector`]: {
			// the seed badge and checkbox sit inside the image's rounded corners, on the overlay badge inset
			[`& ${resultWrapper}__seed-badge`]: {
				top: `${overlayInset}px`,
				left: `${overlayInset}px`,
				height: `${seedBadgeHeight}px`,
				lineHeight: `${seedBadgeHeight}px`,
				backgroundColor: activeColors[0],
				color: activeColors[1],
				// a pill, like the overlay badges it sits above
				padding: '0px 10px',
				borderRadius: '2em',
			},
			[`& ${resultWrapper}__checkbox`]: {
				top: `${overlayInset}px`,
				right: `${overlayInset}px`,
			},
			// overlay badges start below the checkbox (right) and the seed badge (left) instead of under them
			[`& ${resultWrapper}:has(.ss__checkbox) ${badgeGrid} .ss__overlay-badge__grid-wrapper__slot--right`]: {
				paddingTop: `${checkboxSize + overlayGap}px`,
			},
			[`& ${resultWrapper}:has(${resultWrapper}__seed-badge) ${badgeGrid} .ss__overlay-badge__grid-wrapper__slot--left`]: {
				paddingTop: `${seedBadgeHeight + overlayGap}px`,
			},
		},
	};
};

// list-row bundles (`ss__recommendation-bundle-vertical`, `ss__recommendation-bundle-easy-add`): image left and capped,
// details right, and the CTA as the same gray rounded card as the carousel and list bundles
export const bundleListRowSharedStyles = (prefix: string, theme?: Theme): CSSObject => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return {
		margin: '20px 0',
		...bundleCtaButtonSharedStyles(prefix, theme),
		[`.${prefix}__title`]: {
			color: roles.structure,
		},
		'.ss__result.ss__result--list': {
			alignItems: 'center',
			'.ss__result__image-wrapper': {
				maxWidth: '240px',
			},
		},
		[`.${prefix}__wrapper__cta`]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '15px',
			boxSizing: 'border-box',
			marginTop: '15px',
			padding: '20px',
			backgroundColor: custom.colors.gray01,
			borderRadius: '30px',
			[`.${prefix}__wrapper__cta__subtotal`]: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '5px',
				[`.${prefix}__wrapper__cta__subtotal__title`]: {
					color: roles.structure,
				},
				[`.${prefix}__wrapper__cta__subtotal__price`]: {
					fontSize: '18px',
					fontWeight: 'bold',
				},
				[`.${prefix}__wrapper__cta__subtotal__strike`]: {
					color: custom.colors.gray03,
				},
			},
		},
	};
};
