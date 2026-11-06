import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = ({ theme }: TermsProps) => {
	const variables = theme?.variables;

	return css({
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
			justifyContent: 'space-evenly',
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
