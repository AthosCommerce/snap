import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { autocompleteSeeMoreStyles, autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps } from '../../../../components/Templates/AutocompleteFixed';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = ({ width, theme }: AutocompleteFixedProps) => {
	return css({
		...autocompleteSharedStyles,
		...autocompleteSeeMoreStyles(theme?.variables?.colors?.secondary),
		// the panel's corners are concentric with the 20px cards inset 10px inside it
		'.ss__autocomplete-fixed__inner .ss__autocomplete': {
			borderRadius: '30px',
			overflow: 'hidden',
			// the same shadow as the open sort by and facet dropdowns, lifting the panel off the page
			boxShadow: '0 6px 12px 1px #0000001f',
		},
		// the results column of a fixed panel is narrow - the text uses the full card width
		'.ss__autocomplete__content .ss__results .ss__result__details': {
			paddingLeft: 0,
			paddingRight: 0,
		},
		// the panel takes the theme width instead of the store input's, growing left from the input's right edge
		...(width && width !== 'auto'
			? {
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						width: 'auto',
						'.ss__autocomplete': {
							width,
							maxWidth: 'calc(100vw - 20px)',
							left: 'auto',
							right: 0,
						},
					},
			  }
			: {}),
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
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
			width: '940px',
		},

		// list options show their checkboxes, as in the sidebar - a checked box marks a selected option
		'autocompleteFixed facetListOptions': {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed facetListOptions'] || {}),
			hideCheckbox: false,
		},
		// the swatches are too small for a check - the selected one gets a ring instead
		'autocompleteFixed facetPaletteOptions': {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed facetPaletteOptions'] || {}),
			hideIcon: true,
		},
		'autocompleteFixed recommendationGrid': {
			columns: 4,
			rows: 2,
		},
		'autocompleteFixed results': {
			columns: 3,
			rows: 2,
			gapSize: '10px',
		},
	},
	mobile: {
		...autocompleteFixedThemeComponentProps.mobile,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.mobile?.['autocompleteFixed'] || {}),
			width: 'auto',
		},
	},
	desktop: {
		...autocompleteFixedThemeComponentProps.desktop,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.desktop?.['autocompleteFixed'] || {}),
			width: '700px',
		},
	},
	tablet: {
		...autocompleteFixedThemeComponentProps.tablet,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.tablet?.['autocompleteFixed'] || {}),
			width: '600px',
		},
		// the shared tablet props set no grid here, and the default layer's 4 columns overflow the tablet panel
		'autocompleteFixed recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
