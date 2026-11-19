import type { CSSObject } from '@emotion/react';

// styles shared by the autocomplete templates (fixed, modal and slideout)
export const autocompleteSharedStyles: CSSObject = {
	// facets stack with a gap, so the first and last sit the same distance from the column edges
	'.ss__autocomplete__facets .ss__facets': {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
	'.ss__facets .ss__facet': {
		margin: 0,
	},
	'& .ss__dropdown.ss__facet__dropdown': {
		padding: '10px 15px',
		borderRadius: '20px',
	},
	// half the component's facet header/options gap (out-specify the facet's own styles)
	'& .ss__facet .ss__facet__header': {
		paddingBottom: '3px',
	},
	'& .ss__facet .ss__facet__options': {
		marginTop: '4px',
	},
	// the first list option sits as close to the header as the palette's first swatch
	'& .ss__facet .ss__facet-list-options__option:first-child, & .ss__facet .ss__facet-hierarchy-options__option:first-child': {
		paddingTop: 0,
		marginTop: 0,
	},
	'.ss__autocomplete__facets-wrapper .ss__facet-grid-options__option .ss__facet-grid-options__option__value.ss__facet-grid-options__option__value--smaller':
		{
			fontSize: '60%',
		},
	// result columns never grow past their share of a narrow panel (a fixed panel is only as wide as the input) -
	// long titles break and a sale price wraps under its strike price instead of widening the column
	'.ss__autocomplete__content .ss__results': {
		'& > *, .ss__result': {
			minWidth: 0,
		},
		'.ss__result__details__title': {
			overflowWrap: 'anywhere',
		},
		'.ss__result__details__pricing': {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'baseline',
			columnGap: '5px',
		},
	},
	// the label wraps on its own and the icon stays vertically centered beside it
	'.ss__autocomplete__button--see-more .ss__button__content': {
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		'.ss__icon': {
			flex: '0 0 auto',
			margin: 0,
		},
	},
};
