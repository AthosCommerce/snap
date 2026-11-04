import { h } from 'preact';
import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { FilterSummary } from './FilterSummary';
import userEvent from '@testing-library/user-event';

import { MockClient, MockData } from '@athoscommerce/snap-shared';
import { SearchFilterStore, SearchStore } from '@athoscommerce/snap-store-mobx';
import { SearchController, SearchControllerConfig } from '@athoscommerce/snap-controller';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';
import { IconType } from '../../Atoms/Icon';

const services = {
	urlManager: new UrlManager(new UrlTranslator()),
};
const mockData = new MockData().searchMeta('filtered');
const filters = new SearchFilterStore({
	services,
	data: {
		search: mockData.search,
		meta: mockData.meta,
	},
});

describe('FilterSummary Component', () => {
	it('renders with filter list', () => {
		const rendered = render(<FilterSummary filters={filters} />);
		const FilterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const FilterElements = rendered.container.querySelectorAll('.ss__filter:not(.ss__filter-summary__clear-all)');

		expect(FilterSummaryElement).toBeInTheDocument();
		expect(FilterElements.length).toBe(3);
	});

	it('renders clearAll Button', () => {
		const rendered = render(<FilterSummary filters={filters} />);
		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');
		expect(clearAllButton).toBeInTheDocument();
		expect(clearAllButton).toHaveTextContent('Clear All');
	});

	it('custom clearAll Button', () => {
		const clearLabel = 'start over';
		const rendered = render(<FilterSummary filters={filters} clearAllLabel={clearLabel} />);
		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');

		expect(clearAllButton).toBeInTheDocument();
		expect(clearAllButton).toHaveTextContent(clearLabel);
	});

	it('hides clearAll Button', () => {
		const rendered = render(<FilterSummary filters={filters} hideClearAll />);
		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');
		expect(clearAllButton).not.toBeInTheDocument();
	});

	it('renders a default title', () => {
		const rendered = render(<FilterSummary filters={filters} />);
		const title = rendered.container.querySelector('.ss__filter-summary__title');
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('Current Filters');
	});

	it('renders a custom title', () => {
		const rendered = render(<FilterSummary filters={filters} title={'you clicked these earlier'} />);
		const title = rendered.container.querySelector('.ss__filter-summary__title');
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('you clicked these earlier');
	});

	it('can hide the title', () => {
		const rendered = render(<FilterSummary hideTitle={true} filters={filters} title={'you clicked these earlier'} />);
		const title = rendered.container.querySelector('.ss__filter-summary__title');
		expect(title).not.toBeInTheDocument();
	});

	it('renders with specified icons', async () => {
		const args = {
			filters: filters,
			clearAllIcon: 'circle' as IconType,
			filterIcon: 'check' as IconType,
		};

		const rendered = render(<FilterSummary {...args} />);

		const filterIcon = rendered.container.querySelector('.ss__filter-summary .ss__filter .ss__icon');
		const clearAllIcon = rendered.container.querySelector('.ss__filter-summary__clear-all .ss__icon');

		expect(filterIcon).toHaveClass(`ss__icon--${args.filterIcon}`);
		expect(clearAllIcon).toHaveClass(`ss__icon--${args.clearAllIcon}`);
	});

	it('can hide the facet label', () => {
		const rendered = render(<FilterSummary filters={filters} hideFacetLabel={true} />);
		const facetLabel = rendered.container.querySelector('.ss__filter__label');
		expect(facetLabel).not.toBeInTheDocument();
	});

	it('does not render if no filters', () => {
		const rendered = render(<FilterSummary filters={[]} noFiltersText={'nothing selected yet'} />);
		const FilterSummaryElement = rendered.container.querySelector('.ss__filter-summary');

		expect(FilterSummaryElement).not.toBeInTheDocument();
	});

	it('renders default no filters text when hideNoFiltersText is false and there are no filters', () => {
		const rendered = render(<FilterSummary filters={[]} hideNoFiltersText={false} />);
		const FilterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const titleElement = rendered.container.querySelector('.ss__filter-summary__title');
		const noFiltersElement = rendered.container.querySelector('.ss__filter-summary__no-filters');

		expect(FilterSummaryElement).toBeInTheDocument();
		expect(FilterSummaryElement).toHaveClass('ss__filter-summary--no-filters');
		expect(titleElement).toHaveTextContent('Current Filters');
		expect(noFiltersElement).toBeInTheDocument();
		expect(noFiltersElement).toHaveTextContent('No filters applied');
		expect(rendered.container.querySelector('.ss__filter-summary__filters')).not.toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__filter-summary__clear-all')).not.toBeInTheDocument();
	});

	it('renders custom no filters text', () => {
		const noFiltersText = 'nothing selected yet';
		const rendered = render(<FilterSummary filters={[]} hideNoFiltersText={false} noFiltersText={noFiltersText} />);
		const noFiltersElement = rendered.container.querySelector('.ss__filter-summary__no-filters');

		expect(noFiltersElement).toBeInTheDocument();
		expect(noFiltersElement).toHaveTextContent(noFiltersText);
	});

	it('can hide the title while rendering no filters text', () => {
		const rendered = render(<FilterSummary filters={[]} hideNoFiltersText={false} hideTitle />);

		expect(rendered.container.querySelector('.ss__filter-summary__no-filters')).toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__filter-summary__title')).not.toBeInTheDocument();
	});

	it('does not render no filters text when hideNoFiltersText is false and filters are applied', () => {
		const rendered = render(<FilterSummary filters={filters} hideNoFiltersText={false} />);
		const FilterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const FilterElements = rendered.container.querySelectorAll('.ss__filter:not(.ss__filter-summary__clear-all)');

		expect(FilterSummaryElement).toBeInTheDocument();
		expect(FilterSummaryElement).not.toHaveClass('ss__filter-summary--no-filters');
		expect(rendered.container.querySelector('.ss__filter-summary__no-filters')).not.toBeInTheDocument();
		expect(FilterElements.length).toBe(3);
	});

	it('renders with custom seperator', () => {
		const sep = '>>>';
		const rendered = render(<FilterSummary filters={filters} separator={sep} />);
		const FilterElement = rendered.container.querySelector('.ss__filter-summary');

		expect(FilterElement).toBeInTheDocument();
		const seperatorElem = rendered.container.querySelector('.ss__filter__label__separator');

		expect(seperatorElem).toHaveTextContent(sep);
	});

	it('renders with custom onclick func', async () => {
		const onclickfunc = jest.fn();

		const rendered = render(<FilterSummary filters={filters} onClick={onclickfunc} />);
		const FilterSumElement = rendered.container.querySelector('.ss__filter-summary');

		expect(FilterSumElement).toBeInTheDocument();
		const filter = rendered.container.querySelector('.ss__filter-summary .ss__filter')!;

		expect(filter).toBeInTheDocument();

		await userEvent.click(filter);

		expect(onclickfunc).toHaveBeenCalled();
	});

	it('renders with custom on clear all click func', async () => {
		const onclickfunc = jest.fn();

		const rendered = render(<FilterSummary filters={filters} onClearAllClick={onclickfunc} />);
		const FilterSumElement = rendered.container.querySelector('.ss__filter-summary');

		expect(FilterSumElement).toBeInTheDocument();
		const filter = rendered.container.querySelector('.ss__filter-summary .ss__filter-summary__clear-all')!;

		expect(filter).toBeInTheDocument();

		await userEvent.click(filter);

		expect(onclickfunc).toHaveBeenCalled();
	});

	it('renders with classname', () => {
		const args = {
			className: 'classy',
		};

		const rendered = render(<FilterSummary filters={filters} {...args} />);

		const facetsElement = rendered.container.querySelector('.ss__filter-summary');
		expect(facetsElement).toHaveClass(args.className);
	});

	it('disables styles', () => {
		const args = {
			disableStyles: true,
		};

		const rendered = render(<FilterSummary filters={filters} {...args} />);

		const facetsElement = rendered.container.querySelector('.ss__filter-summary');
		expect(facetsElement?.classList).toHaveLength(2);
	});
});

describe('FilterSummary lang works', () => {
	const selector = '.ss__filter-summary';

	it('immediately available lang options', async () => {
		const langOptions = ['title'];

		//text attributes/values
		const value = 'custom value';
		const altText = 'custom alt';
		const ariaLabel = 'custom label';
		const ariaValueText = 'custom value text';
		const title = 'custom title';

		const valueMock = jest.fn(() => value);
		const altMock = jest.fn(() => altText);
		const labelMock = jest.fn(() => ariaLabel);
		const valueTextMock = jest.fn(() => ariaValueText);
		const titleMock = jest.fn(() => title);

		const langObjs = [
			{
				value: value,
				attributes: {
					alt: altText,
					'aria-label': ariaLabel,
					'aria-valuetext': ariaValueText,
					title: title,
				},
			},
			{
				value: valueMock,
				attributes: {
					alt: altMock,
					'aria-label': labelMock,
					'aria-valuetext': valueTextMock,
					title: titleMock,
				},
			},
			{
				value: `<div>${value}</div>`,
				attributes: {
					alt: altText,
					'aria-label': ariaLabel,
					'aria-valuetext': ariaValueText,
					title: title,
				},
			},
		];

		langOptions.forEach((option) => {
			langObjs.forEach((langObj) => {
				const lang = {
					[`${option}`]: langObj,
				};

				// @ts-ignore
				const rendered = render(<FilterSummary filters={filters} lang={lang} />);
				const element = rendered.container.querySelector(selector);
				expect(element).toBeInTheDocument();
				const langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
				expect(langElem).toBeInTheDocument();
				if (typeof langObj.value == 'function') {
					expect(langElem?.innerHTML).toBe(value);

					expect(valueMock).toHaveBeenCalledWith({
						filters: filters,
					});
				} else {
					expect(langElem?.innerHTML).toBe(langObj.value);
				}

				expect(langElem).toHaveAttribute('alt', altText);
				expect(langElem).toHaveAttribute('aria-label', ariaLabel);
				expect(langElem).toHaveAttribute('aria-valuetext', ariaValueText);
				expect(langElem).toHaveAttribute('title', title);

				jest.restoreAllMocks();
			});
		});
	});

	it('noFiltersText lang option renders when there are no filters', () => {
		const value = 'custom no filters value';
		const ariaLabel = 'custom no filters label';
		const valueMock = jest.fn(() => value);

		const globals = { siteId: '8uyt2m' };
		const searchConfig: SearchControllerConfig = { id: 'search', globals: { filters: [] }, settings: {} };
		const controller = new SearchController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager: services.urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const rendered = render(
			<FilterSummary
				controller={controller}
				filters={[]}
				hideNoFiltersText={false}
				lang={{
					noFiltersText: {
						value: valueMock,
						attributes: {
							'aria-label': ariaLabel,
						},
					},
				}}
			/>
		);

		const langElem = rendered.container.querySelector('[ss-lang=noFiltersText]');
		expect(langElem).toBeInTheDocument();
		expect(langElem).toHaveClass('ss__filter-summary__no-filters');
		expect(langElem?.innerHTML).toBe(value);
		expect(langElem).toHaveAttribute('aria-label', ariaLabel);
		expect(valueMock).toHaveBeenCalledWith({ controller });
	});

	it('clearAllLabel lang option is applied to the clear all button', () => {
		const value = 'custom clear all value';
		const ariaLabel = 'custom clear all label';
		const valueMock = jest.fn(() => value);
		const labelMock = jest.fn(() => ariaLabel);

		const rendered = render(
			<FilterSummary
				filters={filters}
				lang={{
					clearAllLabel: {
						value: valueMock,
						attributes: {
							'aria-label': labelMock,
						},
					},
				}}
			/>
		);

		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');
		expect(clearAllButton).toBeInTheDocument();
		expect(clearAllButton).toHaveAttribute('aria-label', ariaLabel);
		expect(clearAllButton?.querySelector('.ss__filter__value')?.innerHTML).toBe(value);
		expect(clearAllButton?.querySelector('.ss__icon')).toBeInTheDocument();
		expect(valueMock).toHaveBeenCalledWith({ value: 'Clear All' });
		expect(labelMock).toHaveBeenCalledWith({ value: 'Clear All' });
	});

	it('clearAllLabel lang value replaces the clear all button text only', () => {
		const rendered = render(<FilterSummary filters={filters} lang={{ clearAllLabel: { value: 'Tout effacer' } }} />);

		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');
		expect(clearAllButton).toHaveTextContent('Tout effacer');
		expect(clearAllButton).not.toHaveTextContent('Clear All');
		expect(clearAllButton).toHaveAttribute('aria-label', 'Clear All');

		const filterValues = Array.from(rendered.container.querySelectorAll('.ss__filter:not(.ss__filter-summary__clear-all) .ss__filter__value')).map(
			(elem) => elem.textContent
		);
		expect(filterValues).toEqual(filters.map((filter) => filter.value.label));
	});
});

describe('FilterSummary theming works', () => {
	const services = {
		urlManager: new UrlManager(new UrlTranslator()),
	};
	const mockData = new MockData().searchMeta('filtered');
	const filters = new SearchFilterStore({
		services,
		data: {
			search: mockData.search,
			meta: mockData.meta,
		},
	});

	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				filterSummary: {
					title: 'Lorem Ipsum',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FilterSummary filters={filters} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__filter-summary');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent(globalTheme.components.filterSummary.title);
	});

	it('applies theme lang to the clear all button', () => {
		const globalTheme = {
			components: {
				filterSummary: {
					lang: {
						clearAllLabel: {
							value: 'Tout effacer',
							attributes: {
								'aria-label': 'Tout effacer',
							},
						},
					},
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FilterSummary filters={filters} />
			</ThemeProvider>
		);
		const clearAllButton = rendered.container.querySelector('.ss__filter-summary__clear-all');
		expect(clearAllButton).toHaveTextContent('Tout effacer');
		expect(clearAllButton).not.toHaveTextContent('Clear All');
		expect(clearAllButton).toHaveAttribute('aria-label', 'Tout effacer');
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				filterSummary: {
					title: 'Lorem Ipsum',
				},
			},
		};
		const rendered = render(<FilterSummary filters={filters} theme={propTheme} />);
		const element = rendered.container.querySelector('.ss__filter-summary');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent(propTheme.components.filterSummary.title);
	});

	it('is theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				filterSummary: {
					title: 'shouldnt find this',
				},
			},
		};
		const propTheme = {
			components: {
				filterSummary: {
					title: 'should find this',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FilterSummary filters={filters} theme={propTheme} />
			</ThemeProvider>
		);

		const element = rendered.container.querySelector('.ss__filter-summary');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent(propTheme.components.filterSummary.title);
		expect(element).not.toHaveTextContent(globalTheme.components.filterSummary.title);
	});
});
