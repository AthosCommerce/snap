import { css } from '@emotion/react';
import type { LoadingBarProps, LoadingBarTemplatesLegalProps } from '../../../../components/Atoms/LoadingBar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = (props: LoadingBarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// loading bar styles - a progress indicator on a neutral track (the component colors the bar primary)
	const loadingBarStyles = css({
		'.ss__loading-bar__bar': {
			backgroundColor: props?.color || variables?.colors?.accent,
		},
	});

	return loadingBarStyles;
};

// LoadingBar component props
export const loadingBar: ThemeComponent<'loadingBar', LoadingBarProps, LoadingBarTemplatesLegalProps> = {
	default: {
		loadingBar: {
			themeStyleScript: loadingBarStyleScript,
			// a neutral track, like the load more and carousel scrollbar tracks (the component uses secondary)
			backgroundColor: custom.colors.gray01,
		},
	},
};
