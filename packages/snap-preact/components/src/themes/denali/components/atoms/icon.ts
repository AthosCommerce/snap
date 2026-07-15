import { css } from '@emotion/react';
import type { IconProps, IconTemplatesLegalProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Icon component
const iconStyleScript = ({ color, height, width, size, theme }: IconProps) => {
	const variables = theme?.variables;

	return css({
		fill: color || variables?.colors?.primary,
		stroke: color || variables?.colors?.primary,
		width: width || size,
		height: height || size,
	});
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps, IconTemplatesLegalProps> = {
	default: {
		icon: {
			themeStyleScript: iconStyleScript,
		},
	},
};
