import { css } from '@emotion/react';
import type { LayoutSelectorProps, LayoutSelectorTemplatesLegalProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = ({ theme }: LayoutSelectorProps) => {
	const variables = theme?.variables;
	const secondary = variables?.colors?.secondary || custom.colors.black;
	const activeColors = custom.utils.activeColors(secondary);

	return css({
		'.ss__button__content': {
			gap: '7px',
		},

		// inactive options are muted - ring and icon in the same gray
		'.ss__list__option': {
			padding: '10px',
			borderRadius: '50%',
			color: custom.colors.gray03,
			border: `2px solid ${custom.colors.gray03}`,
			backgroundColor: custom.colors.white,

			'.ss__icon': {
				fill: 'currentColor',
				stroke: 'currentColor',
			},
		},

		// out-specify the list's selected text color (primary) - the fill needs its contrast color
		'.ss__list__option.ss__list__option--selected': {
			'&, &:hover': {
				color: activeColors[1],
				borderColor: activeColors[0],
				backgroundColor: activeColors[0],
			},
			'.ss__icon': {
				color: activeColors[1],
				fill: activeColors[1],
				stroke: activeColors[1],
			},
		},
	});
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps, LayoutSelectorTemplatesLegalProps> = {
	default: {
		layoutSelector: {
			themeStyleScript: layoutSelectorStyleScript,
			type: 'list',
			hideLabel: true,
			hideOptionLabels: true,
		},
		'layoutSelector icon': {
			size: '12px',
		},
	},
};
