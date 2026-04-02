import { css } from '@emotion/react';
import type { ResultProps, ResultTemplatesLegalProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	return css({
		'&.ss__result--sale': {
			'.ss__result__details': {
				'.ss__result__details__pricing': {
					'.ss__result__price:not(.ss__price--strike)': {
						'&, span': {
							color: variables?.colors?.primary,
						},
					},
				},
			},
		},
		'&.ss__result--grid': {
			display: 'block',
		},
		'&.ss__result--list': {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			'.ss__result__image-wrapper, .ss__result__details': {
				minWidth: '1px',
			},
			'.ss__result__image-wrapper': {
				flex: '0 0 33.33%',
				margin: `0 ${custom.spacing.x4}px 0 0`,
			},
			'.ss__result__details': {
				flex: '1 1 0%',
				textAlign: 'left',
				margin: 0,
				'.ss__callout-badge, .ss__result__rating-wrapper': {
					justifyContent: 'flex-start',
				},
				'.ss__result__details__title': {
					flex: '1 1 0%',
					a: {
						fontSize: custom.utils.convertPxToEm(18),
						fontWeight: custom.fonts.weight02,
					},
				},
				'.ss__result__details__pricing': {
					flex: '0 1 auto',
					order: -1,
				},
			},
		},
		'.ss__result__image-wrapper': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
		},
		'.ss__result__details': {
			padding: 0,
			display: 'flex',
			flexFlow: 'row wrap',
			gap: `${custom.spacing.x2}px`,
			'& > *, .ss__result__details__title, .ss__result__details__title, .ss__result__details__pricing': {
				margin: 0,
			},
			'& > *': {
				minWidth: '1px',
				flex: '1 1 100%',
			},
			'.ss__result__details__title': {
				order: -2,
				a: {
					color: variables?.colors?.text,
				},
			},
			'.ss__result__details__pricing': {
				'.ss__result__price': {
					fontSize: custom.utils.convertPxToEm(16),
					'&:not(.ss__price--strike)': {
						fontWeight: custom.fonts.weight01,
					},
				},
				'.ss__price--strike': {
					fontSize: custom.utils.convertPxToEm(14),
					'&, span': {
						color: lightGray,
					},
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'&.ss__result--list': {
				display: 'block',
				'.ss__result__details': {
					textAlign: 'center',
					'.ss__callout-badge, .ss__result__rating-wrapper': {
						justifyContent: 'center',
					},
					'.ss__result__details__title, .ss__result__details__pricing': {
						flex: '1 1 100%',
					},
					'.ss__result__details__pricing': {
						order: 0,
					},
				},
				'.ss__result__image-wrapper': {
					margin: `0 0 ${custom.spacing.x2}px 0`,
				},
			},
		},
	});
};

// Result component props
export const result: ThemeComponent<'result', ResultProps, ResultTemplatesLegalProps> = {
	default: {
		result: {
			themeStyleScript: resultStyleScript,
		},
	},
};
