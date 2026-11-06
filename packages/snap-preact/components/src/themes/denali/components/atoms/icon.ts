import { css } from '@emotion/react';
import type { IconProps, IconTemplatesLegalProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Icon component
const iconStyleScript = ({ height, width, size }: IconProps) => {
	return css({
		stroke: 'currentColor',
		width: width || size,
		height: height || size,
	});
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps, IconTemplatesLegalProps> = {
	default: {
		icon: {
			themeStyleScript: iconStyleScript,
			color: 'currentColor',
		},
	},
};
