import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = ({ theme, vertical }: TermsProps) => {
	const variables = theme?.variables;

	return css({
		// titles match the facet headers - secondary, bold, and not left to the store's h5 styles
		'& .ss__terms__title h5': {
			color: variables?.colors?.secondary,
			fontSize: '14px',
			fontWeight: 'bold',
			lineHeight: 1.5,
			textTransform: 'none',
			letterSpacing: 'normal',
		},
		'& .ss__terms__options .ss__terms__option': {
			border: `1px solid ${variables?.colors?.secondary}`,
			borderRadius: '28px',
			textAlign: 'center',
			padding: '5px 15px',
			'&, a': {
				color: 'inherit',
			},
			'&.ss__terms__option--active a': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
		},
		'& .ss__terms__options': {
			gap: '5px',
			flexDirection: 'row',
			// a vertical list wraps its pills in a narrow column - center the rows instead of leaving the slack on the right
			justifyContent: vertical ? 'center' : 'flex-start',
		},
	});
};

// Terms component props
export const terms: ThemeComponent<'terms', TermsProps, TermsTemplatesLegalProps> = {
	default: {
		terms: {
			themeStyleScript: termsStyleScript,
		},
	},
};
