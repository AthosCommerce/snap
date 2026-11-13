import type { CSSObject } from '@emotion/react';
import type { Theme } from '../../../../providers';
import { custom } from '../../custom';

// the quickview layout inside both quickview templates (QuickviewLayout itself is not themed directly)
export const quickviewSharedStyles = (theme?: Theme): CSSObject => {
	const variables = theme?.variables;

	// nested under `.ss__quickview` to out-specify the layout's own (later inserted) rules
	return {
		'.ss__quickview': {
			'.ss__quickview__title, .ss__quickview__variant-title': {
				color: variables?.colors?.secondary,
			},
			'.ss__quickview__variant-title': {
				textTransform: 'capitalize',
			},
			// rows stacked directly in the content (the slideout's single column) get the gap the layout's columns have
			'.ss__quickview__content > .ss__quickview__row + .ss__quickview__row': {
				marginTop: '12px',
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
