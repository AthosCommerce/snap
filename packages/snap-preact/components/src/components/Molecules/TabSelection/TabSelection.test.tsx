import { h } from 'preact';
import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { Theme, ThemeProvider } from '../../../providers';
import { TabSelection } from './TabSelection';
import type { Tab, TabManagerStore } from '../../../../../src/Templates/Stores/TabManagerStore';

const createTab = (id: string, totalResults?: number, label?: string): Tab =>
	({
		id,
		label,
		siteId: 'abc123',
		param: id,
		prefetch: true,
		controller: {
			store: {
				loaded: typeof totalResults == 'number',
				pagination: { totalResults },
			},
		},
	} as unknown as Tab);

const createTabManager = (tabs: Tab[], activeIndex = 0) =>
	({
		tabs,
		active: tabs[activeIndex],
		param: 'tab',
		setActive: jest.fn(),
	} as unknown as TabManagerStore);

describe('TabSelection Component', () => {
	it('does not render without a tabManager', () => {
		const rendered = render(<TabSelection />);

		expect(rendered.container.querySelector('.ss__tab-selection')).not.toBeInTheDocument();
	});

	it('does not render without tabs', () => {
		const rendered = render(<TabSelection tabManager={createTabManager([])} />);

		expect(rendered.container.querySelector('.ss__tab-selection')).not.toBeInTheDocument();
	});

	it('renders a tab for each tab in the store', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		expect(rendered.container.querySelector('.ss__tab-selection')).toBeInTheDocument();
		expect(rendered.container.querySelectorAll('.ss__tab-selection__button')).toHaveLength(2);
	});

	it('uses the tab label and falls back to the tab id', () => {
		const tabManager = createTabManager([createTab('Products', 12, 'Shop'), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		const labels = rendered.container.querySelectorAll('.ss__tab-selection__button__label');

		expect(labels[0]).toHaveTextContent('Shop');
		expect(labels[1]).toHaveTextContent('Blog');
	});

	it('renders result counts by default', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		const counts = rendered.container.querySelectorAll('.ss__tab-selection__button__count');

		expect(counts).toHaveLength(2);
		expect(counts[0]).toHaveTextContent('(12)');
	});

	it('can hide result counts', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} showResultCount={false} />);

		expect(rendered.container.querySelectorAll('.ss__tab-selection__button__count')).toHaveLength(0);
	});

	it('does not render a count for a tab that has not loaded', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog')]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		expect(rendered.container.querySelectorAll('.ss__tab-selection__button__count')).toHaveLength(1);
	});

	it('marks the active tab', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)], 1);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		const buttons = rendered.container.querySelectorAll('.ss__tab-selection__button');

		expect(buttons[0]).not.toHaveClass('ss__tab-selection__button--active');
		expect(buttons[1]).toHaveClass('ss__tab-selection__button--active');
		expect(buttons[1]).toHaveAttribute('aria-selected', 'true');
	});

	it('sets the active tab on click', async () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		await userEvent.click(rendered.container.querySelectorAll('.ss__tab-selection__button')[1]!);

		expect(tabManager.setActive).toHaveBeenCalledWith('Blog');
	});

	it('calls onTabClick with the clicked tab', async () => {
		const tabs = [createTab('Products', 12), createTab('Blog', 3)];
		const tabManager = createTabManager(tabs);
		const onTabClick = jest.fn();
		const rendered = render(<TabSelection tabManager={tabManager} onTabClick={onTabClick} />);

		await userEvent.click(rendered.container.querySelectorAll('.ss__tab-selection__button')[1]!);

		expect(onTabClick).toHaveBeenCalledWith(expect.anything(), tabs[1]);
	});

	it('disables tabs with no results by default', async () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 0)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		const emptyTab = rendered.container.querySelectorAll('.ss__tab-selection__button')[1]!;

		expect(emptyTab).toHaveAttribute('aria-disabled', 'true');

		await userEvent.click(emptyTab);

		expect(tabManager.setActive).not.toHaveBeenCalled();
	});

	it('keeps empty tabs selectable with enableEmptyTabs', async () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 0)]);
		const rendered = render(<TabSelection tabManager={tabManager} enableEmptyTabs={true} />);

		const emptyTab = rendered.container.querySelectorAll('.ss__tab-selection__button')[1]!;

		expect(emptyTab).not.toHaveAttribute('aria-disabled', 'true');

		await userEvent.click(emptyTab);

		expect(tabManager.setActive).toHaveBeenCalledWith('Blog');
	});

	it('does not disable the active tab when it has no results', () => {
		const tabManager = createTabManager([createTab('Products', 0), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		expect(rendered.container.querySelectorAll('.ss__tab-selection__button')[0]!).not.toHaveAttribute('aria-disabled', 'true');
	});

	it('renders tab list semantics', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		const tabList = rendered.container.querySelector('.ss__tab-selection__tabs');

		expect(tabList).toHaveAttribute('role', 'tablist');
		expect(tabList).toHaveAttribute('aria-label', 'Result tabs');
		expect(rendered.container.querySelectorAll('[role="tab"]')).toHaveLength(2);
	});

	it('does not render a title by default', () => {
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(<TabSelection tabManager={tabManager} />);

		expect(rendered.container.querySelector('.ss__tab-selection__title')).not.toBeInTheDocument();
	});

	it('renders a title', () => {
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(<TabSelection tabManager={tabManager} titleText={'Search In'} />);

		const title = rendered.container.querySelector('.ss__tab-selection__title');

		expect(title).toBeInTheDocument();
		expect(title?.tagName).toBe('H4');
		expect(title).toHaveTextContent('Search In');
	});

	it('can set custom title lang', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(
			<TabSelection
				tabManager={tabManager}
				titleText={'Search In'}
				lang={{
					title: {
						value: (data) => `Search in ${data.tabManager.tabs.length} catalogs`,
					},
				}}
			/>
		);

		expect(rendered.container.querySelector('.ss__tab-selection__title')).toHaveTextContent('Search in 2 catalogs');
	});

	it('can set custom lang', () => {
		const tabManager = createTabManager([createTab('Products', 12), createTab('Blog', 3)]);
		const rendered = render(
			<TabSelection
				tabManager={tabManager}
				lang={{
					tabList: {
						attributes: {
							'aria-label': 'Catalogs',
						},
					},
					tabButton: {
						value: (data) => `${data.tab.id} tab`,
					},
				}}
			/>
		);

		expect(rendered.container.querySelector('.ss__tab-selection__tabs')).toHaveAttribute('aria-label', 'Catalogs');
		expect(rendered.container.querySelectorAll('.ss__tab-selection__button__label')[0]).toHaveTextContent('Products tab');
	});

	it('renders with classname', () => {
		const className = 'classy';
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(<TabSelection tabManager={tabManager} className={className} />);

		expect(rendered.container.querySelector('.ss__tab-selection')).toHaveClass(className);
	});

	it('can disable styles', () => {
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(<TabSelection tabManager={tabManager} disableStyles />);

		expect(rendered.container.querySelector('.ss__tab-selection')?.classList).toHaveLength(1);
	});

	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				tabSelection: {
					className: 'classy',
				},
			},
		};
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<TabSelection tabManager={tabManager} />
			</ThemeProvider>
		);

		expect(rendered.container.querySelector('.ss__tab-selection')).toHaveClass(globalTheme.components.tabSelection.className);
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				tabSelection: {
					className: 'classy',
				},
			},
		} as Theme;
		const tabManager = createTabManager([createTab('Products', 12)]);
		const rendered = render(<TabSelection tabManager={tabManager} theme={propTheme} />);

		expect(rendered.container.querySelector('.ss__tab-selection')).toHaveClass('classy');
	});
});
