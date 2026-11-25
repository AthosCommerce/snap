import { css } from '@emotion/react';
import type { LayoutSelectorProps, LayoutSelectorTemplatesLegalProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = ({ theme }: LayoutSelectorProps) => {
	const variables = theme?.variables;
	const secondary = variables?.colors?.secondary || custom.colors.black;
	const activeColors = custom.utils.activeColors(variables?.colors?.primary || custom.colors.black);

	return css({
		'.ss__button__content': {
			gap: '7px',
		},

		// inactive options keep their full color in a pale ring, like the page chips - only the selected one is filled
		// 36px circles, the height of the sort by pill beside them in a toolbar
		'.ss__list__option': {
			padding: '8px',
			borderRadius: '50%',
			color: secondary,
			border: `2px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.white,

			'.ss__icon': {
				fill: 'currentColor',
				stroke: 'currentColor',
			},
		},

		// the list mutes the unselected icons of a bare icon list - here the ring and fill mark the selection instead
		'&.ss__list .ss__list__options .ss__list__option:not(.ss__list__option--selected) .ss__list__option__icon': {
			...custom.styles.indicator('currentColor'),
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
		// as specific as the list's own icon size, which otherwise ties with a shorter selector and wins
		'layoutSelector list icon': {
			size: '16px',
		},
	},
};
