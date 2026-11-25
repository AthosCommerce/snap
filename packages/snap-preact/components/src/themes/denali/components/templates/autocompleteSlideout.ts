import { css } from '@emotion/react';
import { autocompleteSlideoutThemeComponentProps } from '../../../themeComponents/autocompleteSlideout';
import { ThemeComponent } from '../../../../providers';
import { autocompleteCloseSearchButtonStyles, autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteSlideoutStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({
		...autocompleteSharedStyles,
		// see more leads the panel, where the shared layout puts it - a quiet text link rather than a pill
		'.ss__autocomplete__button--see-more': {
			margin: '10px 0 0',
			border: '0px',
		},
		// the search input lines up with the cards and results beneath it, 20px in from the panel's edges - it stops
		// short on the right to leave room for the close button
		'.ss__autocomplete-slideout__inner .ss__autocomplete-slideout__search-input': {
			position: 'relative',
			// the top margin centers the input on the close button, which sits 20px from the panel's top
			margin: '3px 52px 0 10px',
		},
		// the input's close control sits outside the pill, a bare X 20px from the panel's top and right edges like
		// the quickview's and the sidebar's close buttons
		'.ss__autocomplete-slideout__search-input .ss__search-input__button--close-search-button': {
			...autocompleteCloseSearchButtonStyles,
			right: '-45px',
		},
		// the terms list and the results each pad 10px - drop the list's bottom padding so the gap between the
		// term cards and the results matches the 10px between the cards
		'.ss__autocomplete-slideout__inner .ss__terms-list': {
			paddingBottom: 0,
		},
		// the slideout panel is the frame - no second outline around the autocomplete inside it
		'.ss__autocomplete-slideout__inner .ss__autocomplete': {
			border: 0,
		},
	});
};

export const autocompleteSlideout: ThemeComponent<'autocompleteSlideout', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteSlideoutThemeComponentProps.default,
		autocompleteSlideout: {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout'] || {}),
			themeStyleScript: autocompleteSlideoutStyleScript,
			// wider terms and facets columns than the component's 150px, so the term cards' titles and the facet
			// options beside their checkboxes fit on one line. only the width differs from the shared columns - their
			// modules are the same (mirrored in THEME_SELECTORS in eslint/src/utils/banners.cjs)
			column1: {
				layout: ['termsList'],
				width: '180px',
			},
			column2: {
				layout: ['facets'],
				width: '180px',
			},
		},
		// an X rather than the component's back chevron, matching the other slideouts' close buttons
		'autocompleteSlideout slideout searchInput button.close-search icon': {
			icon: 'close-thin',
			size: 16,
		},
		// terms run side by side as chips - one per row leaves most of the wide panel empty
		'autocompleteSlideout termsList': {
			verticalOptions: false,
		},
		// list options show their checkboxes, as in the sidebar - a checked box marks a selected option
		'autocompleteSlideout facetListOptions': {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout facetListOptions'] || {}),
			hideCheckbox: false,
		},
		// the swatches are too small for a check - the selected one gets a ring instead
		'autocompleteSlideout facetPaletteOptions': {
			...(autocompleteSlideoutThemeComponentProps.default?.['autocompleteSlideout facetPaletteOptions'] || {}),
			hideIcon: true,
		},
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
	mobile: autocompleteSlideoutThemeComponentProps.mobile,
	desktop: {
		...autocompleteSlideoutThemeComponentProps.desktop,
		// the shared desktop props set 3 columns - keep the slideout's 2 columns at every width above mobile
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
	tablet: {
		...autocompleteSlideoutThemeComponentProps.tablet,
		// the shared tablet props set no grid here - keep the default layer's grid over the theme's tablet `recommendationGrid` columns
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 2,
		},
	},
};
