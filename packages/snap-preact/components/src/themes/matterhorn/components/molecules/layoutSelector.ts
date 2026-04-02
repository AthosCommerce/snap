import { css } from '@emotion/react';
import type { LayoutSelectorProps, LayoutSelectorTemplatesLegalProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = (props: LayoutSelectorProps) => {
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary || undefined);
	const activeIconColor =
		activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef'
			? Color(custom.colors.white || undefined)
			: Color(custom.colors.black || undefined);

	// dropdown styles
	const dropdownStyles = css({
		'.ss__dropdown': {
			'.ss__dropdown__button .ss__button__content': {
				gap: `${custom.spacing.x2}px`,
			},
		},
	});

	// list styles
	const listStyles = css({
		'.ss__list__options': {
			display: 'flex',
			'.ss__list__option': {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.gray01,
				height: `${custom.sizes.height}px`,
				lineHeight: `${custom.sizes.height}px`,
				padding: `0 ${custom.spacing.x2}px`,
				margin: 0,
			},
			'.ss__list__option--selected': {
				borderColor: activeColor.hex(),
				backgroundColor: activeColor.hex(),
				color: activeIconColor.hex(),
				'&, *': {
					cursor: 'text',
				},
			},
		},
	});

	if (props?.type == 'dropdown') {
		return dropdownStyles;
	} else if (props?.type == 'list') {
		return listStyles;
	} else {
		return dropdownStyles;
	}
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps, LayoutSelectorTemplatesLegalProps> = {
	default: {
		layoutSelector: {
			themeStyleScript: layoutSelectorStyleScript,
			type: 'list',
		},
		'layoutSelector select': {
			hideSelection: false,
			separator: '',
		},
		'layoutSelector list': {
			hideTitleText: true,
			hideOptionLabels: true,
		},
		'layoutSelector radioList': {
			hideTitleText: true,
		},
	},
};
