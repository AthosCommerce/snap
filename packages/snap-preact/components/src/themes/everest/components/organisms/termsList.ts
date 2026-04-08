import { css } from '@emotion/react';
import type { TermsListProps, TermsListTemplatesLegalProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the TermsList component
const termsListStyleScript = (props: TermsListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		backgroundColor: 'transparent',
		flexFlow: 'row nowrap',
		gap: `${custom.spacing.x4}px`,
		'.ss__terms-list-row': {
			flex: '1 1 0%',
			minWidth: '1px',
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
