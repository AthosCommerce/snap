import { css } from '@emotion/react';
import type { TermsListProps, TermsListTemplatesLegalProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the TermsList component
const termsListStyleScript = ({}: TermsListProps) => {
	return css({
		// no fill of its own - the term cards sit on the panel with a gap, like the facet cards beside them
		background: 'none',
		boxSizing: 'border-box',
		gap: '10px',
		padding: '10px',
		// each card fills its row
		'.ss__terms-list__row .ss__terms': {
			flex: '1 1 0%',
			minWidth: 0,
		},
	});
};

// TermsList component props
export const termsList: ThemeComponent<'termsList', TermsListProps, TermsListTemplatesLegalProps> = {
	default: {
		termsList: {
			themeStyleScript: termsListStyleScript,
		},
	},
};
