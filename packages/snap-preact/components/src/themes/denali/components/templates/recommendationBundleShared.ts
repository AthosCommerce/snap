import type { CSSObject } from '@emotion/react';
import type { Theme } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const overlayInset = 8; // matches the overlay badge grid padding (0.5rem)
const overlayGap = 5; // space between the checkbox / seed badge and the overlay badge below it
const checkboxSize = 18; // the bundle selector's checkbox size
const seedBadgeHeight = 21;

// the selector (checkbox and seed badge over the result image) shared by the bundle templates - each
// template renders it under its own classname prefix (`ss__recommendation-bundle`, `ss__recommendation-bundle-vertical`)
export const bundleSelectorSharedStyles = (prefix: string, theme?: Theme): CSSObject => {
	const activeColors = custom.utils.activeColors(theme?.variables?.colors?.secondary || custom.colors.black);
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
				padding: '0px 5px',
				borderRadius: '3px',
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
