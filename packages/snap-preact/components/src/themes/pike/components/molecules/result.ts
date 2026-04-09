import { css } from '@emotion/react';
import type { ResultProps, ResultTemplatesLegalProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// result styles
	const resultStyles = css({
		...custom.styles.boxSizing('result', props?.treePath, props?.name),
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
		'&, &.ss__result--grid, &.ss__result--list': {
			alignItems: 'stretch',
			gap: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
			'&, .ss__result__details': {
				flexFlow: 'column nowrap',
			},
			'& > *': {
				minWidth: '1px',
			},
			'.ss__result__image-wrapper': {
				flex: '0 1 auto',
				border: `1px solid ${custom.colors.gray02}`,
				a: {
					display: 'block',
				},
				'.ss__image': {
					position: 'relative',
					height: 0,
					padding: '0 0 100% 0',
					overflow: 'hidden',
					'&, img': {
						display: 'block',
					},
					img: {
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						margin: 'auto',
						width: '100%',
						height: '100%',
						objectPosition: 'center center',
					},
				},
			},
			'.ss__result__details': {
				display: 'flex',
				flex: '1 1 0%',
				gap: `${custom.spacing.x2}px`,
				padding: 0,
				margin: 0,
				...custom.styles.baseText(variables?.colors?.text),
				a: {
					color: 'inherit',
				},
				'& > *, .ss__result__details__title, .ss__result__details__title, .ss__result__details__pricing': {
					margin: 0,
				},
				'& > *': {
					flex: '0 1 auto',
					minWidth: '1px',
				},
				'.ss__result__details__title': {
					order: -2,
				},
				'.ss__result__details__pricing': {
					order: -1,
					'.ss__result__price': {
						fontSize: '16px',
						'&:not(.ss__price--strike)': {
							fontWeight: custom.fonts.weight01,
						},
					},
					'.ss__price--strike': {
						fontSize: '14px',
						'&, span': {
							color: lightGray,
						},
					},
				},
				'.ss__result__add-to-cart-wrapper .ss__button': {
					width: `100%`,
				},
				'.ss__result__details__variant-selection, .ss__result__add-to-cart-wrapper': {
					marginTop: 'auto',
					order: 20,
				},
				'.ss__result__details__variant-selection ~ .ss__result__add-to-cart-wrapper, .ss__result__add-to-cart-wrapper ~ .ss__result__details__variant-selection':
					{
						marginTop: 0,
					},
				'.ss__result__details__variant-selection': {
					'.ss__variant-selection': {
						'.ss__slideshow:not(:has(.ss__slideshow__navigation)) .ss__slideshow__container .ss__slideshow__track, .ss__grid .ss__grid__options': {
							justifyContent: 'center',
						},
					},
				},
			},
		},
		'&.ss__result--list': {
			'.ss__result__details': {
				textAlign: 'center',
				'.ss__result__details__title a': {
					fontSize: '18px',
					fontWeight: custom.fonts.weight02,
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small)}`]: {
			'&.ss__result--list': {
				'&, .ss__result__details': {
					flexFlow: 'row wrap',
				},
				'.ss__result__image-wrapper': {
					flex: '0 0 33.33%',
					'a, .ss__overlay-badge, .ss__image': {
						height: '100%',
					},
					'.ss__image': {
						paddingBottom: 0,
						img: {
							position: 'static',
						},
					},
				},
				'.ss__result__details': {
					alignContent: 'center',
					flex: '1 1 0%',
					textAlign: 'left',
					'& > *': {
						flex: '1 1 100%',
					},
					'.ss__result__details__title': {
						flex: '1 1 0%',
					},
					'.ss__result__details__pricing': {
						flex: '0 1 auto',
					},
					'.ss__callout-badge, .ss__result__details__rating-wrapper': {
						justifyContent: 'flex-start',
					},
					'.ss__result__details__variant-selection': {
						display: 'flex',
						flexFlow: 'row wrap',
						alignItems: 'center',
						gap: `${custom.spacing.x2}px`,
						'.ss__variant-selection': {
							width: `calc((100% - ${custom.spacing.x2}px) / 2)`,
							margin: 0,
							'.ss__slideshow:not(:has(.ss__slideshow__navigation)) .ss__slideshow__container .ss__slideshow__track, .ss__grid .ss__grid__options': {
								justifyContent: 'flex-start',
							},
						},
					},
					'.ss__result__add-to-cart-wrapper .ss__button': {
						width: `auto`,
					},
				},
			},
		},
	});

	return resultStyles;
};

// Result component props
export const result: ThemeComponent<'result', ResultProps, ResultTemplatesLegalProps> = {
	default: {
		result: {
			themeStyleScript: resultStyleScript,
		},
	},
};
