import { css } from '@emotion/react';
import type { PriceProps, PriceTemplatesLegalProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Price component
const priceStyleScript = ({}: PriceProps) => {
	return css({
		margin: '0',
		color: 'inherit',
		'&.ss__price--strike': {
			'&, span': {
				color: custom.colors.gray03,
			},
		},
	});
};

// Price component props
export const price: ThemeComponent<'price', PriceProps, PriceTemplatesLegalProps> = {
	default: {
		price: {
			themeStyleScript: priceStyleScript,
		},
	},
};
