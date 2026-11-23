import { css } from '@emotion/react';
import type { TermsProps, TermsTemplatesLegalProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = ({ theme, vertical }: TermsProps) => {
	const variables = theme?.variables;
	const roles = custom.colorRoles(variables);

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
			// the link fills the term, so the whole of it is the hit area. it stays a block, not a flex row, so a
			// highlighted part of the term flows inline with the rest
			a: {
				display: 'block',
				position: 'relative',
				padding: vertical ? '4px 28px 4px 12px' : '4px 12px',
			},
			'&:hover': {
				backgroundColor: vertical ? custom.colors.gray01 : custom.colors.gray02,
			},
			'&.ss__terms__option--active': {
				backgroundColor: 'transparent',
				borderColor: roles.brand,
			},
			'&.ss__terms__option--active a': {
				...custom.styles.activeText(roles.brand),
			},
			// in the list a chevron points at the results the active term previews, in the column beside it
			...(vertical
				? {
						'&.ss__terms__option--active a:after': {
							content: '""',
							position: 'absolute',
							top: '50%',
							right: '14px',
							width: '5px',
							height: '5px',
							borderTop: '2px solid currentColor',
							borderRight: '2px solid currentColor',
							transform: 'translateY(-50%) rotate(45deg)',
						},
				  }
				: {}),
		},
		// the part of a suggestion the shopper has not typed is a highlight - popular and recent searches have
		// nothing typed to complete, so the whole term would be marked, and they keep the plain text color
		'& .ss__terms__options .ss__terms__option em': {
			fontStyle: 'normal',
		},
		'&.ss__terms-list__terms--suggestions .ss__terms__options .ss__terms__option em': {
			color: roles.highlight,
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
			// marks the part of each term the shopper has not typed
			emIfy: true,
		},
	},
};
