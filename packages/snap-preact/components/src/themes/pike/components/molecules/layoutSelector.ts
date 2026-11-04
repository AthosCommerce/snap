import { css } from '@emotion/react';
import type { LayoutSelectorProps, LayoutSelectorTemplatesLegalProps } from '../../../../components/Molecules/LayoutSelector';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the LayoutSelector component
const layoutSelectorStyleScript = (props: LayoutSelectorProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	const activeColors = custom.utils.activeColors(variables?.colors?.secondary || custom.colors.secondary);
	const activeColor = activeColors[0];
	const activeIconColor = activeColors[1];

	// dropdown styles
	const dropdownStyles = css({
		'.ss__dropdown': {
			'.ss__dropdown__button .ss__button__content .ss__select__label': {
				paddingRight: `${custom.spacing.x1 / 2}px`,
			},
		},
	});

	// radio styles
	const radioStyles = css();

	// list styles
	const listStyles = css({
		'.ss__list__options': {
			display: 'flex',
			flexFlow: 'nowrap',
			gap: `${custom.spacing.x1}px`,
			'.ss__list__option': {
				flex: '0 1 auto',
				minWidth: props?.hideOptionLabels ? `${custom.sizes.height}px` : '1px',
				width: props?.hideOptionLabels ? `${custom.sizes.height}px` : 'auto',
				height: `${custom.sizes.height}px`,
				lineHeight: `${custom.sizes.height}px`,
				justifyContent: 'center',
				margin: 0,
				...custom.styles.box(undefined, props?.hideOptionLabels ? 0 : `0 ${custom.spacing.x2}px`),
				'.ss__list__option__label': {
					...custom.styles.textOverflow(),
				},
			},
			'.ss__list__option--selected': {
				'&, &:hover': {
					borderColor: activeColor,
					backgroundColor: activeColor,
					color: activeIconColor,
				},
				'&, *': {
					cursor: 'default',
				},
			},
		},
	});

	if (props?.type == 'list') {
		return listStyles;
	} else if (props?.type == 'radio') {
		return radioStyles;
	} else {
		return dropdownStyles;
	}
};

// LayoutSelector component props
export const layoutSelector: ThemeComponent<'layoutSelector', LayoutSelectorProps, LayoutSelectorTemplatesLegalProps> = {
	default: {
		layoutSelector: {
			themeStyleScript: layoutSelectorStyleScript,
		},
		'layoutSelector select': {
			hideSelection: false,
		},
	},
};
