import { css } from '@emotion/react';
import type { ListProps, ListTemplatesLegalProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the List component
const listStyleScript = ({ hideOptionCheckboxes, hideOptionLabels, horizontal, theme }: ListProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

	return css({
		gap: '8px',

		'& .ss__list__title': {
			color: roles.structure,
			// over text-only rows the title lines up with their text
			paddingLeft: hideOptionCheckboxes && !hideOptionLabels && !horizontal ? '14px' : undefined,
		},

		'& .ss__list__options': {
			gap: '10px',
			// a horizontal list wraps rather than squeezing its options or running out of its container
			flexWrap: horizontal ? 'wrap' : undefined,
			'.ss__list__option': {
				flex: horizontal ? '0 0 auto' : undefined,
			},

			'.ss__list__option--selected': {
				...custom.styles.activeText(roles.brand),
			},
			// text-only options are rounded rows - gray on hover, with the selected one outlined like the active tab
			...(hideOptionCheckboxes && !hideOptionLabels
				? {
						gap: horizontal ? '5px' : '2px',
						'.ss__list__option': {
							flex: horizontal ? '0 0 auto' : undefined,
							border: '2px solid transparent',
							borderRadius: '14px',
							padding: '4px 12px',
							'&:hover': {
								backgroundColor: custom.colors.gray01,
							},
							'&.ss__list__option--selected': {
								backgroundColor: 'transparent',
								borderColor: roles.brand,
							},
						},
				  }
				: {}),
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
		// option icons (e.g. layout icons)
		'list icon': {
			size: '24px',
		},
		// the selector above also reaches the check inside each option's checkbox - it keeps the checkbox's own size
		'list checkbox icon': {
			size: 'calc(18px - 30%)',
		},
	},
};
