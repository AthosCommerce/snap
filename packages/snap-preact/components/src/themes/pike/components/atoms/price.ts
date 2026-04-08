import { css } from '@emotion/react';
import type { PriceProps, PriceTemplatesLegalProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Price component
const priceStyleScript = (props: PriceProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// price styles
	const priceStyles = css({
		...custom.styles.boxSizing('price', props?.treePath, props?.name),
		'&, span, &.ss__price, &.ss__price--strike': {
			color: variables?.colors?.text,
		},
		'& ~ .ss__result__price': {
			paddingLeft: `${custom.spacing.x1 / 2}px`,
		},
	});

	return priceStyles;
};

// Price component props
export const price: ThemeComponent<'price', PriceProps, PriceTemplatesLegalProps> = {
	default: {
		price: {
			themeStyleScript: priceStyleScript,
		},
	},
};
