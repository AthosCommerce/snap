import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { Toolbar } from './Toolbar';
import { v4 as uuidv4 } from 'uuid';
import { SearchStore, SearchStoreConfig } from '@athoscommerce/snap-store-mobx';
import { SearchController, SearchControllerConfig } from '@athoscommerce/snap-controller';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';
import { QueryStringTranslator, UrlManager, reactLinker } from '@athoscommerce/snap-url-manager';
import userEvent from '@testing-library/user-event';

const globals = { siteId: '8uyt2m' };

const searchConfigDefault: SearchControllerConfig = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {},
};

let searchConfig: SearchStoreConfig;
const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = { urlManager };
let controller: SearchController;

const mockClient = new MockClient(globals, {});
mockClient.mockData.updateConfig({ search: 'filtered' });

describe('Toolbar Component', () => {
	beforeEach(async () => {
		searchConfig = { ...searchConfigDefault };
		searchConfig.id = uuidv4().split('-').join('');

		controller = new SearchController(searchConfig, {
			client: mockClient,
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();
	});

	it('renders', () => {
		const rendered = render(<Toolbar controller={controller} />);
		const element = rendered.container.querySelector('.ss__toolbar')!;
		expect(element).toBeInTheDocument();
	});

	it('renders expected default sub-components', () => {
		const rendered = render(<Toolbar controller={controller} />);
		const filterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const paginationElement = rendered.container.querySelector('.ss__pagination');
		const paginationInfoElement = rendered.container.querySelector('.ss__pagination-info');
		const sidebarToggleElement = rendered.container.querySelector('.ss__layout__sidebar-toggle-button-wrapper');
		const sortByElement = rendered.container.querySelector('.ss__sortby');
		const perPageElement = rendered.container.querySelector('.ss__per-page');

		const toolbar = rendered.container.querySelector('.ss__toolbar')!;
		expect(toolbar).toBeInTheDocument();
		expect(filterSummaryElement).toBeInTheDocument();
		expect(paginationElement).toBeInTheDocument();
		expect(paginationInfoElement).toBeInTheDocument();
		expect(sidebarToggleElement).not.toBeInTheDocument();
		expect(sortByElement).toBeInTheDocument();
		expect(perPageElement).toBeInTheDocument();
	});

	it('renders toggle sidebar button when passed', () => {
		const rendered = render(
			<Toolbar controller={controller} toggleSideBarButton={{ children: <div className="ss__layout__toggle-sidebar-button">Filters</div> }} />
		);
		const filterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const paginationElement = rendered.container.querySelector('.ss__pagination');
		const paginationInfoElement = rendered.container.querySelector('.ss__pagination-info');
		const sidebarToggleElement = rendered.container.querySelector('.ss__layout__sidebar-toggle-button-wrapper');
		const sortByElement = rendered.container.querySelector('.ss__sortby');
		const perPageElement = rendered.container.querySelector('.ss__per-page');

		const toolbar = rendered.container.querySelector('.ss__toolbar')!;
		expect(toolbar).toBeInTheDocument();
		expect(filterSummaryElement).toBeInTheDocument();
		expect(paginationElement).toBeInTheDocument();
		expect(paginationInfoElement).toBeInTheDocument();
		expect(sidebarToggleElement).toBeInTheDocument();
		expect(sortByElement).toBeInTheDocument();
		expect(perPageElement).toBeInTheDocument();
	});

	it('can pass custom layout', () => {
		const rendered = render(<Toolbar controller={controller} layout={['perPage', 'pagination']} />);
		const filterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const paginationElement = rendered.container.querySelector('.ss__pagination');
		const paginationInfoElement = rendered.container.querySelector('.ss__pagination-info');
		const sidebarToggleElement = rendered.container.querySelector('.ss__layout__sidebar-toggle-button-wrapper');
		const sortByElement = rendered.container.querySelector('.ss__sortby');
		const perPageElement = rendered.container.querySelector('.ss__per-page');

		const toolbar = rendered.container.querySelector('.ss__toolbar')!;
		expect(toolbar).toBeInTheDocument();
		expect(filterSummaryElement).not.toBeInTheDocument();
		expect(paginationInfoElement).not.toBeInTheDocument();
		expect(sidebarToggleElement).not.toBeInTheDocument();
		expect(sortByElement).not.toBeInTheDocument();

		expect(perPageElement).toBeInTheDocument();
		expect(paginationElement).toBeInTheDocument();
	});

	it('arrays equal rows', () => {
		const rendered = render(<Toolbar controller={controller} layout={['perPage', 'pagination', ['sortBy'], ['paginationInfo', 'filterSummary']]} />);

		const sortByElement = rendered.container.querySelector('.ss__layout__row.ss__layout__row--0 .ss__sortby');

		const filterSummaryElement = rendered.container.querySelector('.ss__layout__row.ss__layout__row--1 .ss__filter-summary');
		const paginationInfoElement = rendered.container.querySelector('.ss__layout__row.ss__layout__row--1 .ss__pagination-info');

		const sidebarToggleElement = rendered.container.querySelector('.ss__layout__sidebar-toggle-button-wrapper');
		const perPageElement = rendered.container.querySelector('.ss__per-page');
		const paginationElement = rendered.container.querySelector('.ss__pagination');

		const toolbar = rendered.container.querySelector('.ss__toolbar')!;

		const row = rendered.container.querySelectorAll('.ss__layout__row');

		expect(row).toHaveLength(2);
		expect(row[0].children).toHaveLength(1);
		expect(row[0].classList).toContain('ss__layout__row--0');

		expect(row[1].children).toHaveLength(2);
		expect(row[1].classList).toContain('ss__layout__row--1');

		expect(toolbar).toBeInTheDocument();
		expect(filterSummaryElement).toBeInTheDocument();
		expect(paginationInfoElement).toBeInTheDocument();
		expect(sidebarToggleElement).not.toBeInTheDocument();

		expect(sortByElement).toBeInTheDocument();
		expect(perPageElement).toBeInTheDocument();
		expect(paginationElement).toBeInTheDocument();
	});
	it('can hide set custom toggleSideBarButton', async () => {
		const func = jest.fn();
		const button = {
			content: 'Toggle Sidebar',
			onClick: func,
		};

		const rendered = render(<Toolbar controller={controller} toggleSideBarButton={button} layout={['button.sidebar-toggle']} />);
		const filterSummaryElement = rendered.container.querySelector('.ss__filter-summary');
		const paginationElement = rendered.container.querySelector('.ss__pagination');
		const paginationInfoElement = rendered.container.querySelector('.ss__pagination-info');
		const sortByElement = rendered.container.querySelector('.ss__sortby');
		const perPageElement = rendered.container.querySelector('.ss__per-page');

		const toggleButtonElement = rendered.container.querySelector('.ss__layout__sidebar-toggle-button-wrapper .ss__button');

		const toolbar = rendered.container.querySelector('.ss__toolbar')!;
		expect(toolbar).toBeInTheDocument();
		expect(filterSummaryElement).not.toBeInTheDocument();
		expect(paginationElement).not.toBeInTheDocument();
		expect(paginationInfoElement).not.toBeInTheDocument();
		expect(sortByElement).not.toBeInTheDocument();
		expect(perPageElement).not.toBeInTheDocument();

		expect(toggleButtonElement).toBeInTheDocument();
		expect(func).not.toHaveBeenCalled();

		expect(toggleButtonElement).toHaveTextContent(button.content);
		await userEvent.click(toggleButtonElement!);
		expect(func).toHaveBeenCalled();
	});

	describe('searchInput module', () => {
		let goStates: UrlManager['state'][];
		let goSpy: jest.SpyInstance;

		const createController = async (state: Record<string, unknown>) => {
			const stateUrlManager = urlManager.set(state);
			const stateController = new SearchController(searchConfig, {
				client: mockClient,
				store: new SearchStore(searchConfig, { urlManager: stateUrlManager }),
				urlManager: stateUrlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
			await stateController.search();
			return stateController;
		};

		beforeEach(() => {
			goStates = [];
			// record the state each navigation would load instead of changing the jsdom location shared by every test
			goSpy = jest.spyOn(UrlManager.prototype, 'go').mockImplementation(function (this: UrlManager) {
				goStates.push(this.state);
			});
		});

		afterEach(() => {
			goSpy.mockRestore();
		});

		it('renders a search input holding the current query', async () => {
			const queryController = await createController({ query: 'dress' });
			const rendered = render(<Toolbar controller={queryController} layout={['searchInput']} />);

			const input: HTMLInputElement = rendered.container.querySelector('.ss__layout__search-input.ss__search-input .ss__search-input__input')!;
			expect(input).toBeInTheDocument();
			expect(input.value).toBe('dress');
		});

		it('searches the submitted query on page one without filters', async () => {
			const queryController = await createController({
				query: 'dress',
				page: 3,
				filter: { color: ['red'] },
				sort: { field: 'price', direction: 'asc' },
			});
			const rendered = render(<Toolbar controller={queryController} layout={['searchInput']} />);
			const input: HTMLInputElement = rendered.container.querySelector('.ss__layout__search-input .ss__search-input__input')!;

			await userEvent.clear(input);
			await userEvent.type(input, ' shoes {Enter}');

			expect(goStates).toEqual([{ query: 'shoes', sort: { field: 'price', direction: 'asc' } }]);
		});

		it('searches the submitted query from the submit button', async () => {
			const queryController = await createController({ query: 'dress', page: 2 });
			const rendered = render(<Toolbar controller={queryController} layout={['searchInput']} />);
			const input: HTMLInputElement = rendered.container.querySelector('.ss__layout__search-input .ss__search-input__input')!;
			const submitButton = rendered.container.querySelector('.ss__layout__search-input .ss__search-input__button--submit-search-button')!;

			await userEvent.clear(input);
			await userEvent.type(input, 'shoes');
			await userEvent.click(submitButton);

			expect(goStates).toEqual([{ query: 'shoes' }]);
		});

		it('does not search a blank query', async () => {
			const queryController = await createController({ query: 'dress' });
			const rendered = render(<Toolbar controller={queryController} layout={['searchInput']} />);
			const input: HTMLInputElement = rendered.container.querySelector('.ss__layout__search-input .ss__search-input__input')!;

			await userEvent.clear(input);
			await userEvent.type(input, '   {Enter}');

			expect(goSpy).not.toHaveBeenCalled();
		});

		it('can replace the submit behavior with a themed onSubmit', async () => {
			const onSubmit = jest.fn();
			const queryController = await createController({ query: 'dress' });
			const theme = {
				components: {
					searchInput: {
						onSubmit,
					},
				},
			};
			const rendered = render(<Toolbar controller={queryController} layout={['searchInput']} theme={theme} />);
			const input: HTMLInputElement = rendered.container.querySelector('.ss__layout__search-input .ss__search-input__input')!;

			await userEvent.type(input, 'es{Enter}');

			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.calls[0][1]).toBe('dresses');
			expect(goSpy).not.toHaveBeenCalled();
		});
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Toolbar controller={controller} className={className} />);

		const element = rendered.container.querySelector('.ss__toolbar');
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<Toolbar controller={controller} disableStyles />);

		const element = rendered.container.querySelector('.ss__toolbar');

		expect(element?.classList).toHaveLength(1);
	});

	it('is themeable with ThemeProvider', () => {
		const theme = {
			components: {
				toolbar: {
					className: 'classy',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<Toolbar controller={controller} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__toolbar')!;
		expect(element).toHaveClass(theme.components.toolbar.className);
	});

	it('is themeable with theme prop', () => {
		const theme = {
			components: {
				toolbar: {
					className: 'classy',
				},
			},
		};
		const rendered = render(<Toolbar controller={controller} theme={theme} />);
		const element = rendered.container.querySelector('.ss__toolbar')!;
		expect(element).toHaveClass(theme.components.toolbar.className);
	});

	it('is themeable with theme prop overrides ThemeProvider', () => {
		const theme = {
			components: {
				toolbar: {
					className: 'notClassy',
				},
			},
		};

		const componentTheme = {
			components: {
				toolbar: {
					className: 'classy',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Toolbar controller={controller} theme={componentTheme} />
			</ThemeProvider>
		);

		const element = rendered.container.querySelector('.ss__toolbar')!;
		expect(element).toHaveClass(componentTheme.components.toolbar.className);
		expect(element).not.toHaveClass(theme.components.toolbar.className);
	});
});
