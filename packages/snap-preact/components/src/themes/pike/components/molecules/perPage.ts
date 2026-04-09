import { css } from '@emotion/react';
import type { PerPageProps, PerPageTemplatesLegalProps } from '../../../../components/Molecules/PerPage';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the PerPage component
const perPageStyleScript = (props: PerPageProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// perPage styles
	const perPageStyles = css({
		...custom.styles.boxSizing('perPage', props?.treePath, props?.name),
	});

	return perPageStyles;
};

// PerPage component props
export const perPage: ThemeComponent<'perPage', PerPageProps, PerPageTemplatesLegalProps> = {
	default: {
		perPage: {
			themeStyleScript: perPageStyleScript,
		},
	},
};
