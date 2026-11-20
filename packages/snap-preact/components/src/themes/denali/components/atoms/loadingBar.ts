import { css } from '@emotion/react';
import type { LoadingBarProps, LoadingBarTemplatesLegalProps } from '../../../../components/Atoms/LoadingBar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LoadingBar component
const loadingBarStyleScript = ({ color, theme }: LoadingBarProps) => {
	const variables = theme?.variables;

	return css({
		// the track comes from the `backgroundColor` prop
		'& .ss__loading-bar__bar': {
			background: color || variables?.colors?.accent,
		},
	});
};

// LoadingBar component props
export const loadingBar: ThemeComponent<'loadingBar', LoadingBarProps, LoadingBarTemplatesLegalProps> = {
	default: {
		loadingBar: {
			themeStyleScript: loadingBarStyleScript,
			backgroundColor: custom.colors.gray01,
		},
	},
};
