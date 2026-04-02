import { css } from '@emotion/react';
import type { ResultsProps, ResultsTemplatesLegalProps } from '../../../../components/Organisms/Results';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Results component
const resultsStyleScript = (props: ResultsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// results styles
	const resultStyles = css({
		...custom.styles.boxSizing('results', props?.treePath, props?.name),
		'& > *': {
			minWidth: '1px',
		},
	});

	return resultStyles;
};

// Results component props
export const results: ThemeComponent<'results', ResultsProps, ResultsTemplatesLegalProps> = {
	default: {
		results: {
			themeStyleScript: resultsStyleScript,
			gapSize: `${custom.spacing.x4}px`,
			columns: 4,
		},
	},
	mobile: {
		results: {
			gapSize: `${custom.spacing.x4}px ${custom.spacing.x2}px`,
			columns: 2,
		},
	},
	tablet: {
		results: {
			columns: 3,
		},
	},
	desktop: {},
};
