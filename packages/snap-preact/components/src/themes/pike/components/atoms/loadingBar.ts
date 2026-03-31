import { css } from '@emotion/react';
import type { LoadingBarProps, LoadingBarTemplatesLegalProps } from '../../../../components/Atoms/Loading';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = (props: LoadingBarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// loading bar styles
	const loadingBarStyles = css({
		...custom.styles.boxSizing('loadingBar', props?.treePath, props?.name),
	});

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
