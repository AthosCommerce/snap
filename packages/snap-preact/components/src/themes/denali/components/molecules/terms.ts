import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = ({ theme, vertical }: TermsProps) => {
	const variables = theme?.variables;

	return css({
		// terms sit bare on the panel, so they read apart from the gray facet cards - a list of rows when vertical
		// (the desktop terms column), a wrapping row of chips otherwise
		boxSizing: 'border-box',
		padding: '10px 0',

		// a list's title lines up with the text of its rows, a chip row's with the chips
		'& .ss__terms__title': {
			padding: vertical ? '0 14px 3px' : '0 0 3px',
		},
		// titles are small muted labels, leaving the weight to the terms - and not left to the store's h5 styles
		// (the doubled classes out-specify a store's own heading rules, e.g. `.site .content .theme h5`)
		'&.ss__terms .ss__terms__title.ss__terms__title h5': {
			color: custom.colors.gray04,
			fontSize: '12px',
			fontWeight: 'normal',
			lineHeight: 1.5,
			textTransform: 'none',
			letterSpacing: 'normal',
		},
		// the active (previewed) term is bold and outlined like the search input
		'& .ss__terms__options .ss__terms__option': {
			borderRadius: '14px',
			padding: 0,
			// every term carries the outline's width, so the active one does not shift
			border: '2px solid transparent',
			// long multi-word terms wrap between words, not mid-letter
			wordBreak: 'normal',
			overflowWrap: 'anywhere',
			// a chip is filled, so it reads as tappable without a hover
			backgroundColor: vertical ? undefined : custom.colors.gray01,
			'&, a': {
				color: 'inherit',
			},
			// the link fills the term, so the whole of it is the hit area
			a: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: '8px',
				padding: '4px 12px',
			},
			'&:hover': {
				backgroundColor: vertical ? custom.colors.gray01 : custom.colors.gray02,
			},
			'&.ss__terms__option--active': {
				backgroundColor: 'transparent',
				borderColor: variables?.colors?.secondary,
			},
			'&.ss__terms__option--active a': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			// in the list a chevron points at the results the active term previews, in the column beside it
			...(vertical
				? {
						'&.ss__terms__option--active a:after': {
							content: '""',
							flex: '0 0 auto',
							width: '5px',
							height: '5px',
							marginRight: '2px',
							borderTop: '2px solid currentColor',
							borderRight: '2px solid currentColor',
							transform: 'rotate(45deg)',
						},
				  }
				: {}),
		},
		// a vertical list is one term per row - a horizontal one wraps from the left
		'& .ss__terms__options': {
			margin: '4px 0 0',
			padding: 0,
			justifyContent: 'flex-start',
			gap: vertical ? '2px' : '5px',
			flexDirection: vertical ? 'column' : 'row',
			flexWrap: vertical ? 'nowrap' : 'wrap',
		},
	});
};

// Terms component props
export const terms: ThemeComponent<'terms', TermsProps, TermsTemplatesLegalProps> = {
	default: {
		terms: {
			themeStyleScript: termsStyleScript,
		},
	},
};
