import { css } from '@emotion/react';
import type { IconProps, IconTemplatesLegalProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Icon component
const iconStyleScript = (props: IconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		fill: 'currentColor',
		stroke: 'currentColor',
	});
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps, IconTemplatesLegalProps> = {
	default: {
		icon: {
			themeStyleScript: iconStyleScript,
			size: `${custom.sizes.icon16}px`,
		},
	},
};
