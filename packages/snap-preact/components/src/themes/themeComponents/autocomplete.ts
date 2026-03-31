import { AutocompleteProps, AutocompleteTemplatesLegalProps } from '../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../providers';

export const autocompleteThemeComponentProps: ThemeComponent<'autocomplete', AutocompleteProps, AutocompleteTemplatesLegalProps> = {
	default: {
		'autocomplete facet': {
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
		'autocomplete facetGridOptions': {
			// onClick: facetClickEvent,
			columns: 3,
		},
		'autocomplete facetHierarchyOptions': {
			// onClick: facetClickEvent,
			hideCount: true,
		},
		'autocomplete facetListOptions': {
			// onClick: facetClickEvent,
			hideCheckbox: true,
			hideCount: true,
		},
		'autocomplete facetPaletteOptions': {
			// onClick: facetClickEvent,
			hideLabel: true,
			columns: 3,
		},
		'autocomplete result': {
			hideBadge: true,
			hideVariantSelections: true,
		},
		'autocomplete recommendationGrid': {
			columns: 4,
			rows: 2,
		},
	},
	mobile: {
		'autocomplete results': {
			columns: 2,
			rows: 1,
		},

		'autocomplete recommendationGrid': {
			columns: 2,
			rows: 1,
		},
		'autocomplete searchInput': {
			closeSearchButton: {
				icon: 'angle-left',
			},
		},
	},
	tablet: {
		'autocomplete results': {
			columns: 3,
			rows: 1,
		},
	},
	desktop: {
		'autocomplete results': {
			columns: 2,
			rows: 2,
		},
		'autocomplete recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
