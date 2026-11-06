import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../../../components/Templates/AutocompleteSlideout';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = ({}: AutocompleteSlideoutProps) => {
	return css({
		'& .ss__facets__facet': {
			marginBottom: '10px',
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
		'& .ss__dropdown.ss__facet__dropdown': {
			padding: '5px',
			borderRadius: '12px',
		},

		'.ss__autocomplete__facets-wrapper': {
			'.ss__facet-grid-options__option': {
				'.ss__facet-grid-options__option__value.ss__facet-grid-options__option__value--smaller': {
					fontSize: '60%',
				},
			},
		},
		'.ss__autocomplete__button--see-more': {
			margin: '10px',
		},
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
		},

		'autocompleteFixed recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: autocompleteFixedThemeComponentProps.mobile,
	desktop: autocompleteFixedThemeComponentProps.desktop,
	tablet: autocompleteFixedThemeComponentProps.tablet,
};
