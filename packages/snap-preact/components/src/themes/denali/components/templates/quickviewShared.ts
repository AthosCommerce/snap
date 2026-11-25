import type { CSSObject } from '@emotion/react';
import type { Theme } from '../../../../providers';
import { custom } from '../../custom';

// the quickview layout inside both quickview templates (QuickviewLayout itself is not themed directly)
export const quickviewSharedStyles = (theme?: Theme): CSSObject => {
	const variables = theme?.variables;
	const moreInfoColors = custom.utils.activeColors(variables?.colors?.primary || custom.colors.black);

	// nested under `.ss__quickview` to out-specify the layout's own (later inserted) rules
	return {
		'.ss__quickview': {
			'.ss__quickview__title, .ss__quickview__variant-title': {
				color: variables?.colors?.secondary,
			},
			'.ss__quickview__variant-title': {
				textTransform: 'capitalize',
			},
			// a dropdown's pill already names the selection ("Size (XS)") - no heading above it
			'.ss__quickview__variant:has(.ss__variant-selection__dropdown) > .ss__quickview__variant-title': {
				display: 'none',
			},
			'.ss__quickview__price': {
				fontSize: '20px',
				fontWeight: 'bold',
			},
			// the quantity picker sits close to its add to cart button
			'.ss__quickview__row:has(> .ss__quickview__add-to-cart)': {
				gap: '12px',
			},
			// rows stacked directly in the content (the slideout's single column) get the gap the layout's columns have
			'.ss__quickview__content > .ss__quickview__row + .ss__quickview__row': {
				marginTop: '12px',
			},
			// more info is the quickview's closing action, like the sidebar's Apply - a filled bar across its row
			'.ss__quickview__row:has(> .ss__quickview__go-to-product)': {
				paddingTop: '20px',
				'.ss__quickview__go-to-product': {
					flex: '1 1 0%',
					padding: '12px 15px',
					textAlign: 'center',
					'&, &:not(.ss__button--disabled):hover': {
						backgroundColor: moreInfoColors[0],
						borderColor: moreInfoColors[0],
						color: moreInfoColors[1],
					},
					'&:not(.ss__button--disabled):hover': {
						opacity: 0.8,
					},
					'.ss__button__content': {
						justifyContent: 'center',
					},
				},
			},
			// the layout sizes the image arrows to their icon - keep them the slideshow's 32px circles
			'.ss__quickview__carousel .ss__slideshow__navigation .ss__button': {
				boxSizing: 'border-box',
				width: '32px',
			},
			// a quiet icon button, not a pill
			'.ss__button.ss__quickview__close': {
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					border: 0,
					borderRadius: '50%',
					padding: '8px',
					backgroundColor: 'transparent',
				},
				'&:not(.ss__button--disabled):hover': {
					backgroundColor: custom.colors.gray01,
				},
			},
		},
	};
};
