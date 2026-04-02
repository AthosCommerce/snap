import { css } from '@emotion/react';
import type { SearchInputProps, SearchInputTemplatesLegalProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const searchInputHeight = custom.sizes.height;
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const darkPrimary = custom.utils.darkenColor(variables?.colors?.primary, 0.15);

	// search input styles
	const searchInputStyles = css({
		...custom.styles.boxSizing('searchInput', props?.treePath, props?.name),
		'&.ss__search-input': {
			margin: `0 0 ${custom.spacing.x4}px`,
			height: `${searchInputHeight}px`,
			border: 0,
			'& > *': {
				minWidth: '1px',
				'&:first-child, &:last-child': {
					...custom.styles.borderRadius(),
				},
				'&:first-child': {
					borderTopRightRadius: custom.sizes.radius ? 0 : '',
					borderBottomRightRadius: custom.sizes.radius ? 0 : '',
				},
				'&:last-child': {
					borderTopLeftRadius: custom.sizes.radius ? 0 : '',
					borderBottomLeftRadius: custom.sizes.radius ? 0 : '',
					overflow: custom.sizes.radius ? `hidden` : ``,
				},
			},
			'.ss__search-input__input, .ss__search-input__icons, .ss__button': {
				height: '100%',
				lineHeight: 1,
			},
			'.ss__search-input__icons, .ss__search-input__button--close-search-button': {
				flex: '0 1 auto',
			},
			'.ss__button, .ss__search-input__button--close-search-button': {
				width: `${searchInputHeight}px`,
				justifyContent: 'center',
				'&, &:hover': {
					border: 0,
				},
				'&, .ss__icon': {
					padding: 0,
				},
			},
			'.ss__search-input__input': {
				flex: '1 1 0%',
				minHeight: '1px',
				...custom.styles.box(variables?.colors?.text, `0 ${custom.spacing.x2}px`, false),
				fontSize: '14px',
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
			'.ss__button': {
				borderRadius: custom.sizes.radius ? 0 : '',
			},
			'.ss__search-input__button--close-search-button': {
				margin: '0 -1px 0 0',
			},
		},
	});

	return searchInputStyles;
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
			stroke: 'currentColor',
		},
		'searchInput button.submit-search icon': {
			icon: custom.icons.search,
		},
	},
};
