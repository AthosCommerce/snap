import { css } from '@emotion/react';
import type { SlideoutProps, SlideoutTemplatesLegalProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = (props: SlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Slideout component props
export const slideout: ThemeComponent<'slideout', SlideoutProps, SlideoutTemplatesLegalProps> = {
	default: {
		slideout: {
			themeStyleScript: slideoutStyleScript,
			overlayColor: '',
		},
		'slideout button.slideout': {
			icon: custom.icons.filter,
		},
	},
};
