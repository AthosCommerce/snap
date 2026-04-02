import { css } from '@emotion/react';
import type { SearchInputProps, SearchInputTemplatesLegalProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const darkPrimary = custom.utils.darkenColor(variables?.colors?.primary, 0.15);

	return css({
		'&.ss__search-input': {
			margin: `0 0 ${custom.spacing.x2}px`,
			border: 0,
			height: '35px',
			'& > *': {
				minWidth: '1px',
			},
			'.ss__search-input__input, .ss__search-input__icons, .ss__button': {
				height: '100%',
				lineHeight: 1,
			},
			'.ss__search-input__icons, .ss__search-input__button--close-search-button': {
				flex: '0 1 auto',
			},
			'.ss__button, .ss__search-input__button--close-search-button': {
				width: '35px',
				boxSizing: 'border-box',
				justifyContent: 'center',
				'&, &:hover': {
					border: 0,
				},
				'&, .ss__icon': {
					padding: 0,
				},
				'.ss__icon': {
					fill: custom.colors.white,
					stroke: custom.colors.white,
				},
			},
			'.ss__search-input__input': {
				flex: '1 1 0%',
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.gray01,
				padding: `0 ${custom.spacing.x2}px`,
				minHeight: '1px',
				fontSize: custom.utils.convertPxToEm(14),
				color: variables?.colors?.text,
				'&::-webkit-input-placeholder': {
					color: lightGray,
				},
				'&::-ms-input-placeholder': {
					color: lightGray,
				},
				'&::placeholder': {
					color: lightGray,
				},
			},
			'.ss__search-input__icons': {
				gap: '1px',
				margin: '0 0 0 -1px',
				backgroundColor: darkPrimary,
			},
			'.ss__search-input__button--close-search-button': {
				margin: '0 -1px 0 0',
			},
		},
	});
};

// SearchInput component props
export const searchInput: ThemeComponent<'searchInput', SearchInputProps, SearchInputTemplatesLegalProps> = {
	default: {
		searchInput: {
			themeStyleScript: searchInputStyleScript,
		},
		'searchInput icon': {
			size: `${custom.sizes.icon14}px`,
		},
		'searchInput button.close-search icon': {
			icon: custom.icons.arrowLeft,
		},
		'searchInput button.clear-search icon': {
			icon: custom.icons.close,
		},
		'searchInput button.submit-search icon': {
			icon: custom.icons.search,
		},
	},
};
