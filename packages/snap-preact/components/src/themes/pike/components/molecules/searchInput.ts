import { css } from '@emotion/react';
import type { SearchInputProps, SearchInputTemplatesLegalProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const searchInputHeight = custom.sizes.height;
const lightGray = custom.colors.gray04;

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	// the icon buttons are secondary-filled - the 1px seam between them is a darker shade of that fill
	const buttonColor = custom.utils.activeColors(variables?.colors?.secondary || custom.colors.secondary)[0];
	const seamColor = custom.utils.darkenColor(buttonColor, 0.15);

	// search input styles
	const searchInputStyles = css({
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
				...custom.styles.box(undefined, `0 ${custom.spacing.x2}px`, false),
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
			'&.ss__input--disabled': {
				...custom.styles.disabled(),
			},
			'.ss__search-input__icons': {
				'&:empty': {
					display: 'none',
				},
				gap: '1px',
				margin: '0 0 0 -1px',
				backgroundColor: seamColor,
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
			size: `${custom.sizes.icon16}px`,
		},
	},
};
