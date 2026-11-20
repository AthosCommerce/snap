import { css } from '@emotion/react';
import type { ListProps, ListTemplatesLegalProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the List component
const listStyleScript = ({ hideOptionCheckboxes, hideOptionLabels, theme }: ListProps) => {
	const variables = theme?.variables;

	return css({
		gap: '8px',

		'& .ss__list__title': {
			color: variables?.colors?.secondary,
		},

		'& .ss__list__options': {
			gap: '10px',

			'.ss__list__option--selected': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			// icon-only options: mute the unselected icons
			...(hideOptionCheckboxes && hideOptionLabels
				? { '.ss__list__option:not(.ss__list__option--selected) .ss__list__option__icon': { ...custom.styles.indicator(custom.colors.gray03) } }
				: {}),
		},
	});
};

// List component props
export const list: ThemeComponent<'list', ListProps, ListTemplatesLegalProps> = {
	default: {
		list: {
			themeStyleScript: listStyleScript,
		},
		'list icon': {
			size: '24px',
		},
	},
};
