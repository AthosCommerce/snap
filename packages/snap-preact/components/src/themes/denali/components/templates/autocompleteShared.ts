import type { CSSObject } from '@emotion/react';
import { custom } from '../../custom';

// the search input's close control in the modal and slideout templates, moved outside the pill - a bare X like the
// quickview's and the sidebar's close buttons. each template sets its own `right` offset
export const autocompleteCloseSearchButtonStyles: CSSObject = {
	position: 'absolute',
	top: '50%',
	margin: 0,
	transform: 'translateY(-50%)',
	lineHeight: '0px',
	'&, &:hover, &:not(.ss__button--disabled):hover': {
		border: 0,
		borderRadius: '50%',
		padding: '8px',
		backgroundColor: 'transparent',
	},
	'&:not(.ss__button--disabled):hover': {
		backgroundColor: custom.colors.gray01,
	},
};

// see more as the closing action of the fixed and modal templates, like the quickview's More info - a filled bar
// across the results column, without the separator that pushes it to one side
export const autocompleteSeeMoreStyles = (seeMoreColors: [string, string]): CSSObject => {
	return {
		'.ss__autocomplete__row:has(> .ss__autocomplete__button--see-more) > .ss__autocomplete__separator': {
			display: 'none',
		},
		'.ss__autocomplete__button--see-more': {
			flex: '1 1 0%',
			margin: '10px',
			padding: '12px 15px',
			'&, &:not(.ss__button--disabled):hover': {
				backgroundColor: seeMoreColors[0],
				borderColor: seeMoreColors[0],
				color: seeMoreColors[1],
			},
			'&:not(.ss__button--disabled):hover': {
				opacity: 0.8,
			},
			'.ss__button__content': {
				justifyContent: 'center',
			},
		},
	};
};

// styles shared by the autocomplete templates (fixed, modal and slideout)
export const autocompleteSharedStyles: CSSObject = {
	// the terms column has no fill of its own - the term cards sit on the panel, beside the facet cards
	// (nested under `.ss__autocomplete` to out-specify the layout's own later-inserted rule)
	'.ss__autocomplete .ss__autocomplete__terms-wrapper': {
		background: 'none',
	},
	// in the stacked mobile layout the terms list and the results each pad 10px, doubling the gap between them
	'.ss__autocomplete.ss__autocomplete--mobile .ss__terms-list': {
		paddingBottom: 0,
	},
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
	// no results: the message is a gray card like the term and facet cards, its first line the statement and the
	// rest a muted hint
	'.ss__autocomplete .ss__autocomplete__content__no-results__text': {
		marginBottom: '10px',
		padding: '15px',
		borderRadius: '20px',
		backgroundColor: custom.colors.gray01,
		textAlign: 'center',
		p: {
			margin: 0,
			'&:first-of-type': {
				fontWeight: 'bold',
			},
			'&:not(:first-of-type)': {
				marginTop: '4px',
				color: custom.colors.gray03,
			},
		},
	},
	// the recommendations' title matches the card titles around it, not the store's heading styles
	'.ss__autocomplete .ss__autocomplete__content__no-results .ss__recommendation-grid .ss__recommendation-grid__title': {
		margin: '10px 0',
		color: 'inherit',
		fontSize: '14px',
		fontWeight: 'bold',
		lineHeight: 1.5,
		textTransform: 'none',
		letterSpacing: 'normal',
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
