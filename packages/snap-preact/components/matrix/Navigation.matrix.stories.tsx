import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { Pagination, PaginationProps } from '../src/components/Molecules/Pagination';
import { PaginationInfo, PaginationInfoProps } from '../src/components/Atoms/PaginationInfo';
import { LoadMore, LoadMoreProps } from '../src/components/Molecules/LoadMore';
import { SortBy, SortByProps } from '../src/components/Molecules/SortBy';
import { PerPage, PerPageProps } from '../src/components/Molecules/PerPage';
import { LayoutSelector, LayoutSelectorProps } from '../src/components/Molecules/LayoutSelector';
import { Breadcrumbs, BreadcrumbsProps } from '../src/components/Atoms/Breadcrumbs';
import { SearchHeader, SearchHeaderProps } from '../src/components/Atoms/SearchHeader';
import { Filter, FilterProps } from '../src/components/Molecules/Filter';
import { FilterSummary, FilterSummaryProps } from '../src/components/Organisms/FilterSummary';
import { TabSelection, TabSelectionProps } from '../src/components/Molecules/TabSelection';
import { TabManagerStore } from '../../src/Templates/Stores/TabManagerStore';
import { Matrix } from './Matrix';
import { matrixController, matrixSearched, searchLoader, filteredSearchLoader } from './data';
import type { SearchController } from '@athoscommerce/snap-controller';
import type { UrlState } from '@athoscommerce/snap-url-manager';
import type { ListOption } from '../src/types';

export default {
	title: 'Matrix/Navigation',
};

// renders a component with its own controller (optionally with url state) once it has searched
const ControllerCell = observer(
	({ cell, state, render }: { cell: string; state?: boolean | UrlState; render: (controller: SearchController) => any }) => {
		const controller = matrixController(cell, state);
		return controller.store.loaded ? render(controller) : null;
	}
);

const PAGE_3 = { page: 3 };
const LAST_PAGE = { page: 6 };

export const Paginations = {
	render: () => (
		<Matrix<PaginationProps & { state?: UrlState }>
			minWidth="320px"
			cases={[
				{ label: 'page 1' },
				{ label: 'page 3', props: { state: PAGE_3 } },
				{ label: 'last page', props: { state: LAST_PAGE } },
				{ props: { state: PAGE_3, pages: 3 } },
				{ props: { state: PAGE_3, hideFirst: true, hideLast: true } },
				{ props: { state: PAGE_3, hideEllipsis: true } },
				{ props: { state: PAGE_3, hidePages: true } },
				{ props: { state: PAGE_3, hidePrev: true, hideNext: true } },
				{ props: { state: PAGE_3, persistFirst: true, persistLast: true } },
				{ props: { state: PAGE_3, prevButton: 'Previous', nextButton: 'Next' } },
				{ props: { state: PAGE_3, firstButton: 'First', lastButton: 'Last', hideEllipsis: true } },
			]}
			render={({ state, ...props }, index) => (
				<ControllerCell
					cell={`pagination-${index}`}
					state={state || {}}
					render={(controller) => <Pagination {...props} pagination={controller.store.pagination} />}
				/>
			)}
		/>
	),
	loaders: [searchLoader, async () => ({ pages: await Promise.all([matrixSearched('pages-3', PAGE_3), matrixSearched('pages-6', LAST_PAGE)]) })],
};

export const PaginationInfos = {
	render: () => (
		<Matrix<PaginationInfoProps>
			minWidth="320px"
			cases={[{}, { props: { infoText: 'Showing ${pagination.begin} to ${pagination.end} of ${pagination.totalResults} products' } }]}
			render={(props, index) => (
				<ControllerCell
					cell={`pagination-info-${index}`}
					render={(controller) => <PaginationInfo {...props} pagination={controller.store.pagination} />}
				/>
			)}
		/>
	),
	loaders: [searchLoader],
};

export const LoadMores = {
	render: () => (
		<Matrix<LoadMoreProps>
			minWidth="320px"
			cases={[
				{},
				{ props: { loadMoreText: 'Show More Products' } },
				{ props: { hideProgressIndicator: true } },
				{ props: { hideProgressText: true } },
				{ props: { loading: true } },
				{ props: { loading: true, loadingLocation: 'outside' } },
				{ props: { progressIndicatorWidth: '100%', progressIndicatorSize: '10px' } },
				{ props: { color: '#3a23ad', backgroundColor: '#e6e1ff' } },
			]}
			render={(props, index) => (
				<ControllerCell cell={`load-more-${index}`} render={(controller) => <LoadMore {...props} pagination={controller.store.pagination} />} />
			)}
		/>
	),
	loaders: [searchLoader],
};

export const SortBys = {
	render: () => (
		<Matrix<SortByProps>
			minWidth="280px"
			minHeight="260px"
			cases={[
				{},
				{ props: { hideLabel: true } },
				{ props: { label: 'Order Results By' } },
				{ props: { type: 'list' } },
				{ props: { type: 'radio' } },
			]}
			render={(props, index) => <ControllerCell cell={`sort-by-${index}`} render={(controller) => <SortBy {...props} controller={controller} />} />}
		/>
	),
	loaders: [searchLoader],
};

export const PerPages = {
	render: () => (
		<Matrix<PerPageProps>
			minWidth="280px"
			cases={[{}, { props: { label: 'Products Per Page' } }, { props: { type: 'list' } }, { props: { type: 'radio' } }]}
			render={(props, index) => <ControllerCell cell={`per-page-${index}`} render={(controller) => <PerPage {...props} controller={controller} />} />}
		/>
	),
	loaders: [searchLoader],
};

const layoutOptions: ListOption[] = [
	{ value: 1, label: '1 Wide', icon: 'square' },
	{ value: 2, label: '2 Wide', icon: 'layout-large' },
	{ value: 3, label: '3 Wide', icon: 'layout-grid' },
];

export const LayoutSelectors = {
	render: () => (
		<Matrix<LayoutSelectorProps>
			minWidth="280px"
			minHeight="200px"
			cases={[
				{},
				{ props: { hideLabel: true } },
				{ props: { hideOptionLabels: true } },
				{ props: { type: 'list' } },
				{ props: { type: 'list', hideOptionLabels: true } },
				{ props: { type: 'radio' } },
				{ props: { type: 'radio', hideOptionLabels: true } },
				{ props: { options: layoutOptions.slice(0, 1), showSingleOption: true } },
			]}
			render={(props) => <LayoutSelector options={layoutOptions} selected={layoutOptions[1]} label="Layout" {...props} />}
		/>
	),
};

const crumbs = [{ label: 'Home', url: '/' }, { label: 'Women', url: '/women' }, { label: 'Tops & Tees', url: '/women/tops' }, { label: 'Sale' }];

export const BreadcrumbsTypes = {
	render: () => (
		<Matrix<BreadcrumbsProps>
			minWidth="320px"
			cases={[
				{},
				{ props: { separator: '/' } },
				{ props: { separatorIcon: 'angle-right' } },
				{ props: { data: [...crumbs.slice(0, 3), { label: 'A Very Long Final Category Name That Should Wrap Somewhere' }] } },
			]}
			render={(props) => <Breadcrumbs data={crumbs} {...props} />}
		/>
	),
};

export const SearchHeaders = {
	render: () => (
		<Matrix<SearchHeaderProps & { state?: UrlState }>
			minWidth="380px"
			cases={[
				{ label: 'query', props: { state: { query: 'bottle' } } },
				{ label: 'corrected query', props: { state: { query: 'botle' } } },
				{ label: 'no results', props: { state: { query: 'zzqxvb' } } },
				{ label: 'no query (category page)', props: { state: {} } },
				{ label: 'filtered', props: { state: { filter: { color: ['Black'] } } } },
				{ props: { state: { query: 'bottle' }, hideSubtitleText: true } },
				{ props: { state: { query: 'bottle' }, titleText: 'Results for <em>"${search.query.string}"</em> in our store' } },
			]}
			render={({ state, ...props }, index) => (
				<ControllerCell cell={`search-header-${index}`} state={state} render={(controller) => <SearchHeader {...props} controller={controller} />} />
			)}
		/>
	),
	loaders: [searchLoader],
};

export const Filters = {
	render: () => (
		<Matrix<FilterProps>
			minWidth="220px"
			cases={[{}, { props: { hideFacetLabel: true } }, { props: { separator: ' - ' } }, { props: { icon: 'close-thin' } }]}
			render={(props, index) => (
				<ControllerCell cell={`filter-${index}`} state={true} render={(controller) => <Filter {...props} filter={controller.store.filters[0]} />} />
			)}
		/>
	),
	loaders: [filteredSearchLoader],
};

export const FilterSummaries = {
	render: () => (
		<Matrix<FilterSummaryProps & { path?: string }>
			minWidth="420px"
			cases={[
				{ label: 'inline (toolbar)', props: { path: 'toolbar' } },
				{ label: 'inline: hideTitle', props: { path: 'toolbar', hideTitle: true } },
				{ label: 'inline: hideClearAll', props: { path: 'toolbar', hideClearAll: true } },
				{ label: 'inline: hideFacetLabel', props: { path: 'toolbar', hideFacetLabel: true } },
				{ label: 'inline: custom clear all label', props: { path: 'toolbar', clearAllLabel: 'Remove All Filters' } },
				{ label: 'list (toolbar)', props: { path: 'toolbar', type: 'list' } },
				{ label: 'list (sidebar)', props: { type: 'list', path: 'sidebar' } },
				{ label: 'inline (sidebar)', props: { path: 'sidebar' } },
			]}
			render={({ path, ...props }, index) => (
				<ControllerCell
					cell={`filter-summary-${index}`}
					state={true}
					render={(controller) => <FilterSummary {...props} controller={controller} treePath={path ? `storybook ${path}` : undefined} />}
				/>
			)}
		/>
	),
	loaders: [filteredSearchLoader],
};

const tabManagers = new Map<string, TabManagerStore>();

const TabSelectionCell = observer(({ cell, empty, props }: { cell: string; empty?: boolean; props: Partial<TabSelectionProps> }) => {
	const tabs = [
		{ id: 'products', param: 'products', label: 'Products', state: {} },
		{ id: 'content', param: 'content', label: 'Articles & Guides', state: { query: 'bottle' } },
		{ id: 'sale', param: 'sale', label: 'Sale', state: empty ? { query: 'zzqxvb' } : { filter: { color: ['Black'] } } },
	];
	const controllers = tabs.map((tab) => matrixController(`${cell}-${tab.id}`, tab.state));
	if (controllers.some((controller) => !controller.store.loaded)) return null;

	// one store per cell - it subscribes to its controllers' url managers when constructed
	let tabManager = tabManagers.get(cell);
	if (!tabManager) {
		tabManager = new TabManagerStore(
			// tabs are matched to their controllers by id
			tabs.map(({ param, label }, index) => ({ id: controllers[index].id, param, label, siteId: 'atkzs2' })),
			controllers
		);
		tabManagers.set(cell, tabManager);
	}
	return <TabSelection {...props} tabManager={tabManager} />;
});

export const TabSelections = {
	render: () => (
		<Matrix<TabSelectionProps & { empty?: boolean }>
			minWidth="420px"
			cases={[
				{},
				{ props: { showResultCount: true } },
				{ props: { titleText: 'Browse By' } },
				{ label: 'empty tab (disabled)', props: { empty: true, showResultCount: true } },
				{ label: 'empty tab, enableEmptyTabs', props: { empty: true, showResultCount: true, enableEmptyTabs: true } },
			]}
			render={({ empty, ...props }, index) => <TabSelectionCell cell={`tabs-${index}`} empty={empty} props={props} />}
		/>
	),
	loaders: [searchLoader],
};
