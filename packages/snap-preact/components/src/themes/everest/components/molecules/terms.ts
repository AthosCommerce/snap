import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = (props: TermsProps) => {
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	return css({
		width: '100%',
		textAlign: 'left',
		'ul, ul li': {
			padding: 0,
			margin: 0,
			listStyle: 'none',
		},
		'.ss__terms__title': {
			'&, h5': {
				padding: 0,
			},
			h5: {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				fontSize: custom.utils.convertPxToEm(16),
				fontWeight: custom.fonts.weight02,
				textTransform: custom.fonts.transform ? custom.fonts.transform : 'none',
				color: variables?.colors?.secondary,
			},
		},
		'.ss__terms__options': {
			flexFlow: 'row wrap',
			justifyContent: 'flex-start',
			gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
			'&, .ss__terms__option': {
				listStyle: 'none',
				padding: 0,
			},
			'.ss__terms__option': {
				flex: '0 1 auto',
				minWidth: '1px',
				color: variables?.colors?.primary,
				a: {
					padding: 0,
					fontSize: custom.utils.convertPxToEm(14),
					color: variables?.colors?.primary,
					em: {
						color: variables?.colors?.text,
						fontStyle: 'normal',
						fontSize: 'inherit',
						fontWeight: 'inherit',
					},
				},
			},
			'.ss__terms__option--active': {
				'a, a em': {
					fontWeight: custom?.fonts?.weight01,
					color: variables?.colors?.primary,
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__terms__title': {
				h5: {
					fontSize: custom.utils.convertPxToEm(14),
				},
			},
			'.ss__terms__options': {
				'.ss__terms__option': {
					a: {
						fontSize: custom.utils.convertPxToEm(12),
					},
				},
			},
		},
	});
};

// Terms component props
export const terms: ThemeComponent<'terms', TermsProps, TermsTemplatesLegalProps> = {
	default: {
		terms: {
			themeStyleScript: termsStyleScript,
			emIfy: true,
		},
	},
};
