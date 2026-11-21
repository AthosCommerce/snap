import { css } from '@emotion/react';
import type { SlideoutProps, SlideoutTemplatesLegalProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';

// the gap between a side panel and the viewport edges
const inset = '10px';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = ({ width, slideDirection }: SlideoutProps) => {
	// a panel from the left or right floats `inset` clear of the viewport, rounded on every corner
	const side = slideDirection != 'top' && slideDirection != 'bottom';

	return css({
		left: slideDirection == 'left' ? `calc(-${width} - ${inset})` : slideDirection != 'right' ? '0' : 'initial',
		right: slideDirection == 'right' ? `calc(-${width} - ${inset})` : 'initial',
		bottom: slideDirection == 'bottom' ? `-100vh` : 'initial',
		top: slideDirection == 'top' ? `-100vh` : slideDirection == 'bottom' ? 'initial' : inset,
		height: side ? `calc(100% - 2 * ${inset})` : undefined,
		background: '#fff',
		// a panel from the top or bottom stays on its edge - only its free corners are rounded
		borderRadius: slideDirection == 'top' ? '0 0 30px 30px' : slideDirection == 'bottom' ? '30px 30px 0 0' : '30px',

		'&.ss__slideout--active': {
			left: slideDirection == 'left' ? inset : slideDirection != 'right' ? '0' : 'initial',
			right: slideDirection == 'right' ? inset : 'initial',
			bottom: slideDirection == 'bottom' ? '0' : 'initial',
			top: slideDirection == 'top' ? '0' : slideDirection == 'bottom' ? 'initial' : inset,
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
