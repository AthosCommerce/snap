import { css } from '@emotion/react';
import type { SlideoutProps, SlideoutTemplatesLegalProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = ({ width, slideDirection, theme }: SlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({
		left: slideDirection == 'left' ? `-${width}` : slideDirection != 'right' ? '0' : 'initial',
		right: slideDirection == 'right' ? `-${width}` : 'initial',
		bottom: slideDirection == 'bottom' ? `-100vh` : 'initial',
		top: slideDirection == 'top' ? `-100vh` : slideDirection == 'bottom' ? 'initial' : '0',
		background: '#fff',

		'&.ss__slideout--active': {
			left: slideDirection == 'left' ? '0' : slideDirection != 'right' ? '0' : 'initial',
			right: slideDirection == 'right' ? '0' : 'initial',
			bottom: slideDirection == 'bottom' ? '0' : 'initial',
			top: slideDirection == 'top' ? '0' : slideDirection == 'bottom' ? 'initial' : '0',
		},
	});
};

// Slideout component props
export const slideout: ThemeComponent<'slideout', SlideoutProps, SlideoutTemplatesLegalProps> = {
	default: {
		slideout: {
			themeStyleScript: slideoutStyleScript,
		},
	},
};
