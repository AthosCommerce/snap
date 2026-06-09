import { css } from '@emotion/react';
import type { LoadingBarProps, LoadingBarTemplatesLegalProps } from '../../../../components/Atoms/LoadingBar';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = (props: LoadingBarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// loading bar styles
	const loadingBarStyles = css({});

	return loadingBarStyles;
};

// LoadingBar component props
export const loadingBar: ThemeComponent<'loadingBar', LoadingBarProps, LoadingBarTemplatesLegalProps> = {
	default: {
		loadingBar: {
			themeStyleScript: loadingBarStyleScript,
		},
	},
};
