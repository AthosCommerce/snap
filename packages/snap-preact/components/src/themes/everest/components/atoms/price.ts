import { css } from '@emotion/react';
import type { PriceProps, PriceTemplatesLegalProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Price component
const priceStyleScript = (props: PriceProps) => {
	const variables = props?.theme?.variables;

	return css({
		'&, span, &.ss__price, &.ss__price--strike': {
			color: variables?.colors?.text,
		},
		'& ~ .ss__result__price': {
			paddingLeft: `${custom.spacing.x1 / 2}px`,
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
