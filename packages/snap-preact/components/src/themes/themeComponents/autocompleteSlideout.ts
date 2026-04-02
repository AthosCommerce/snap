import { AutocompleteSlideoutProps, AutocompleteSlideoutTemplatesLegalProps } from '../../components/Templates/AutocompleteSlideout';
import { ThemeComponent } from '../../providers';

export const autocompleteSlideoutThemeComponentProps: ThemeComponent<
	'autocompleteSlideout',
	AutocompleteSlideoutProps,
	AutocompleteSlideoutTemplatesLegalProps
> = {
	default: {
		'autocompleteSlideout results': {
			columns: 2,
			rows: 2,
		},
		'autocompleteSlideout facet': {
			// valueProps,
			previewOnFocus: true,
			limit: 6,
			disableOverflow: true,
			disableCollapse: true,
			searchable: false,
			showClearAllText: false,
			showSelectedCount: false,
			rangeInputs: false,
		},
		'autocompleteSlideout facetGridOptions': {
			// onClick: facetClickEvent,
			columns: 3,
		},
		'autocompleteSlideout facetHierarchyOptions': {
			// onClick: facetClickEvent,
			hideCount: true,
		},
		'autocompleteSlideout facetListOptions': {
			// onClick: facetClickEvent,
			hideCheckbox: true,
			hideCount: true,
		},
		'autocompleteSlideout facetPaletteOptions': {
			// onClick: facetClickEvent,
			hideLabel: true,
			columns: 3,
		},
		'autocompleteSlideout result': {
			hideBadge: true,
			hideVariantSelections: true,
		},
		'autocompleteSlideout recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: {
		autocompleteSlideout: {
			layout: 'mini',
		},
		'autocompleteSlideout recommendationGrid': {
			columns: 2,
			rows: 1,
		},
	},
	tablet: {},
	desktop: {
		'autocompleteSlideout recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
