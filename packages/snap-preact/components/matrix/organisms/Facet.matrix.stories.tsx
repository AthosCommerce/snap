import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { Facet, FacetProps } from '../../src/components/Organisms/Facet';
import { Matrix, MatrixCase, combinations } from '../Matrix';
import { matrixController, searchLoader, filteredSearchLoader } from '../data';

export default {
	title: 'Matrix/Organisms/Facet',
};

const FacetCell = observer(({ cell, filtered, field, props }: { cell: string; filtered?: boolean; field: string; props: Partial<FacetProps> }) => {
	const controller = matrixController(cell, filtered);
	if (!controller.store.loaded) return null;

	const facet = controller.store.facets.find((facet) => facet.field == field);
	return facet ? <Facet {...props} facet={facet} /> : <div>facet "{field}" not found</div>;
});

const facetStory = (story: string, field: string, cases: MatrixCase<FacetProps>[], options: { filtered?: boolean; minWidth?: string } = {}) => ({
	render: () => (
		<Matrix<FacetProps>
			cases={cases}
			minWidth={options.minWidth}
			render={(props, index) => <FacetCell cell={`facet-${story}-${index}`} filtered={options.filtered} field={field} props={props} />}
		/>
	),
	loaders: [options.filtered ? filteredSearchLoader : searchLoader],
});

// header, collapse and overflow props - shared by every display type
export const Header = facetStory(
	'Header',
	'collection_name',
	[
		{},
		{ props: { showSelectedCount: true } },
		{ props: { showSelectedCount: true, hideSelectedCountParenthesis: true } },
		{ props: { showClearAllText: true } },
		{ props: { showClearAllText: true, clearAllText: 'Clear All Selected Collections' } },
		{ props: { showSelectedCount: true, showClearAllText: true } },
		{ props: { disableCollapse: true } },
		{ props: { color: '#3a23ad', iconColor: '#3a23ad' } },
		{ props: { limit: 4 } },
		{ props: { limit: 4, hideShowMoreLessText: true } },
		{ props: { limit: 4, showMoreText: 'Show a lot more options', showLessText: 'Show fewer' } },
		{ props: { disableOverflow: true } },
		{ props: { searchable: true } },
		{ props: { searchable: true, limit: 4 } },
	],
	{ filtered: true }
);

// list options
export const ListOptions = facetStory(
	'ListOptions',
	'collection_name',
	[
		...combinations<FacetProps>({ horizontal: [false, true] }).flatMap((base) =>
			[
				{},
				{ 'facet facetListOptions': { hideCheckbox: true } },
				{ 'facet facetListOptions': { hideCount: true } },
				{ 'facet facetListOptions': { hideCountParenthesis: true } },
				{ 'facet facetListOptions': { hideCheckbox: true, hideCount: true } },
			].map((overrides) => ({ props: { ...base.props, limit: 8 }, overrides }))
		),
	],
	{ filtered: true, minWidth: '300px' }
);

// palette options in both layouts
export const PaletteOptions = facetStory(
	'PaletteOptions',
	'color',
	[
		{},
		{ overrides: { 'facet facetPaletteOptions': { hideLabel: true } } },
		{ overrides: { 'facet facetPaletteOptions': { hideCount: false } } },
		{ overrides: { 'facet facetPaletteOptions': { hideIcon: false } } },
		{ overrides: { 'facet facetPaletteOptions': { columns: 4 } } },
		{ overrides: { 'facet facetPaletteOptions': { columns: 3, gapSize: '15px' } } },
		{ overrides: { 'facet facetPaletteOptions': { gridSize: '36px' } } },
		{ props: { horizontal: true } },
		{ overrides: { 'facet facetPaletteOptions': { layout: 'list' } } },
		{ overrides: { 'facet facetPaletteOptions': { layout: 'list', hideCheckbox: true } } },
		{ overrides: { 'facet facetPaletteOptions': { layout: 'list', hideCount: false } } },
		{ overrides: { 'facet facetPaletteOptions': { layout: 'list', hideIcon: false } } },
		{ props: { horizontal: true }, overrides: { 'facet facetPaletteOptions': { layout: 'list' } } },
	],
	{ filtered: true, minWidth: '300px' }
);

// grid options
export const GridOptions = facetStory(
	'GridOptions',
	'size',
	[
		{},
		{ overrides: { 'facet facetGridOptions': { columns: 4 } } },
		{ overrides: { 'facet facetGridOptions': { columns: 6, gapSize: '2px' } } },
		{ overrides: { 'facet facetGridOptions': { gridSize: '36px' } } },
		{ overrides: { 'facet facetGridOptions': { gridSize: '72px' } } },
		{ props: { horizontal: true } },
	],
	{ filtered: true }
);

// hierarchy options - selected path shows the return option and filtered option
export const HierarchyOptions = facetStory(
	'HierarchyOptions',
	'ss_hierarchy',
	[
		{},
		{ overrides: { 'facet facetHierarchyOptions': { hideCount: true } } },
		{ props: { horizontal: true } },
		{ props: { horizontal: true }, overrides: { 'facet facetHierarchyOptions': { hideCount: true } } },
	],
	{ filtered: true }
);

export const HierarchyUnselected = facetStory('HierarchyUnselected', 'ss_hierarchy', [{}, { props: { horizontal: true } }]);

// horizontal option layouts in a wide container (e.g. a horizontal facets dropdown) - columns follow the container
export const HorizontalWide = {
	render: () => (
		<Matrix<FacetProps & { field: string }>
			minWidth="900px"
			cases={[
				{ props: { field: 'collection_name', horizontal: true } },
				{ props: { field: 'ss_hierarchy', horizontal: true } },
				{ props: { field: 'color', horizontal: true }, overrides: { 'facet facetPaletteOptions': { layout: 'list' } } },
			]}
			render={({ field, ...props }, index) => (
				<FacetCell cell={`facet-HorizontalWide-${index}`} filtered field={field!} props={{ ...props, limit: 12 }} />
			)}
		/>
	),
	loaders: [filteredSearchLoader],
};

// slider - spacing changes with every combination of ticks, sticky labels and range inputs
export const Slider = facetStory('Slider', 'price', [
	...[
		{},
		{ showTicks: true },
		{ stickyHandleLabel: true },
		{ showTicks: true, stickyHandleLabel: true },
		{ separateHandles: true },
		{ trackColor: '#c4e3ff', railColor: '#3a23ad', handleColor: '#3a23ad' },
	].map((slider) => ({ overrides: { 'facet facetSlider': slider } })),
	{ props: { rangeInputs: true } },
	{ props: { rangeInputs: true, hideRangeInputsSubmitButton: true } },
	{ props: { rangeInputs: true, rangeInputsPrefix: '$', rangeInputsSeparatorText: 'to', rangeInputsSubmitButtonText: 'Apply Price' } },
	{ props: { rangeInputs: true }, overrides: { 'facet facetSlider': { showTicks: true, stickyHandleLabel: true } } },
]);

// interchangeable display types - each data shape rendered by every option component
export const DisplayTypes = {
	render: () => (
		<Matrix<FacetProps & { field: string }>
			cases={['collection_name', 'color', 'size'].flatMap((field) =>
				(['list', 'grid', 'palette'] as const).map((displayType) => ({ label: `${field} as ${displayType}`, props: { field, displayType } }))
			)}
			render={({ field, ...props }, index) => (
				<FacetCell cell={`facet-DisplayTypes-${index}`} filtered field={field!} props={{ ...props, limit: 12 }} />
			)}
		/>
	),
	loaders: [filteredSearchLoader],
};
