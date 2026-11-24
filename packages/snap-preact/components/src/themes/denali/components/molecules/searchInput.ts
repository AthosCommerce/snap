import { css } from '@emotion/react';
import type { SearchInputProps, SearchInputTemplatesLegalProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
// CSS in JS style script for the SearchInput component
const searchInputStyleScript = ({ theme }: SearchInputProps) => {
	const variables = theme?.variables;

	return css({
		// the same 2px outline as the theme's buttons
		border: `2px solid ${variables?.colors?.secondary}`,
		borderRadius: '2em',
		padding: '0 10px 0 15px',
		'.ss__search-input__input': {
			// the input gives way to the icons - a long placeholder or query is cut off before them
			flex: '1 1 0%',
			minWidth: 0,
			textOverflow: 'ellipsis',
			padding: '8px 0',
			backgroundColor: 'transparent',
			'&::placeholder': {
				color: custom.colors.gray04,
			},
			// browsers treat every text field focus as :focus-visible - the pill edge thickens instead of the ring
			'&:focus': {
				outline: 'none',
			},
		},
		// the component pads each icon 5px inside its own box, which shrinks the glyph to a speck - the icons take
		// their full size and are spaced apart instead
		'.ss__button .ss__icon': {
			padding: 0,
		},
		// clearing the text is a smaller X in a gray disc, like the sort by chevron - it sets it apart from a close
		// button's bare X, which can sit right beside it
		'.ss__search-input__button--clear-search-button .ss__icon': {
			boxSizing: 'border-box',
			width: '20px',
			height: '20px',
			padding: '6px',
			borderRadius: '50%',
			backgroundColor: custom.colors.gray01,
		},
		'.ss__search-input__icons': {
			gap: '10px',
		},
		'.ss__search-input__button--close-search-button': {
			marginRight: '8px',
		},
		'&:focus-within': {
			boxShadow: `inset 0 0 0 1px ${variables?.colors?.secondary}`,
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
			size: 16,
		},
	},
};
