import { css } from '@emotion/react';
import type { TermsListProps, TermsListTemplatesLegalProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the TermsList component
const termsListStyleScript = (props: TermsListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		backgroundColor: 'transparent',
		alignContent: 'flex-start',
		gap: `${custom.spacing.x4}px`,
		...custom.styles.boxSizing('termsList', props?.treePath, props?.name),
	});

	// terms list horizontal styles
	const termsListHorizontalStyles = css([
		sharedStyles,
		{
			flexFlow: 'row nowrap',
			'.ss__terms-list__row': {
				flex: '1 1 0%',
				minWidth: '1px',
			},
		},
	]);

	// terms list vertical styles
	const termsListVerticalStyles = css([
		sharedStyles,
		{
			flexFlow: 'column nowrap',
		},
	]);

	return props?.verticalOptions ? termsListVerticalStyles : termsListHorizontalStyles;
};

// TermsList component props
export const termsList: ThemeComponent<'termsList', TermsListProps, TermsListTemplatesLegalProps> = {
	default: {
		termsList: {
			themeStyleScript: termsListStyleScript,
			suggestionTitle: 'Search Suggestions',
		},
	},
};
