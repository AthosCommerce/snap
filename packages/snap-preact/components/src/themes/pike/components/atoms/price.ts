import { css } from '@emotion/react';
import type { PriceProps, PriceTemplatesLegalProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Price component
const priceStyleScript = (props: PriceProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// price styles - the component colors every price with `primary`; Pike prices are plain text and the
	// owning component marks sale prices with the accent color (e.g. `.ss__result--sale`)
	const priceStyles = css({
		color: 'inherit',
		'&.ss__price--strike': {
			'&, span': {
				color: custom.colors.gray04,
			},
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
