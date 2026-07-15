import { css } from '@emotion/react';
import type { LayoutSelectorProps, LayoutSelectorTemplatesLegalProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = ({ theme }: LayoutSelectorProps) => {
	const variables = theme?.variables;
	return css({
		'.ss__button__content': {
			gap: '7px',
		},

		'.ss__list__option': {
			padding: '10px',
			borderRadius: '50%',
			color: variables?.colors.secondary,
			border: `2px solid ${variables?.colors.secondary}`,
			opacity: 0.7,

			'.ss__icon': {
				fill: variables?.colors.secondary,
				stroke: variables?.colors.secondary,
			},
		},

		'.ss__list__option--selected': {
			color: variables?.colors.secondary,
			border: `3px solid ${variables?.colors.secondary}`,
			opacity: 1,
			'.ss__icon': {
				fill: variables?.colors.secondary,
				stroke: variables?.colors.secondary,
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
			size: '5px',
		},
	},
};
