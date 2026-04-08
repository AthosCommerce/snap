import { css } from '@emotion/react';
import type { IconProps, IconTemplatesLegalProps } from '../../../../components/Atoms/Icon';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Icon component
const iconStyleScript = (props: IconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// set flex size for icons that are flex children
	let flexSize = '';
	if (props?.width) {
		flexSize = `0 0 ${props.width}`;
	} else if (props?.size) {
		flexSize = `0 0 ${props.size}`;
	}

	// icon styles
	const iconStyles = css({
		minWidth: '1px',
		flex: flexSize,
		lineHeight: 1,
		color: props?.treePath == 'storybook icon' ? variables?.colors?.text : '',
		...custom.styles.boxSizing('icon', props?.treePath, props?.name),
		'&.ss__icon--filters': {
			fill: custom.colors.white,
			stroke: 'currentColor',
			circle: {
				fill: 'inherit',
			},
		},
	});

	return iconStyles;
};

// Icon component props
export const icon: ThemeComponent<'icon', IconProps, IconTemplatesLegalProps> = {
	default: {
		icon: {
			themeStyleScript: iconStyleScript,
			size: `${custom.sizes.icon16}px`,
			color: 'currentColor',
		},
	},
};
