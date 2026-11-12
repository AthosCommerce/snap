import { css } from '@emotion/react';
import type { SearchInputProps, SearchInputTemplatesLegalProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
// CSS in JS style script for the SearchInput component
const searchInputStyleScript = ({ theme }: SearchInputProps) => {
	const variables = theme?.variables;

	return css({
		border: `1px solid ${variables?.colors?.secondary}`,
		borderRadius: '2em',
		padding: '0 10px 0 15px',
		'.ss__search-input__input': {
			padding: '8px 0',
			backgroundColor: 'transparent',
			'&::placeholder': {
				color: custom.colors.gray03,
			},
			// browsers treat every text field focus as :focus-visible - the pill edge thickens instead of the ring
			'&:focus': {
				outline: 'none',
			},
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
	},
};
