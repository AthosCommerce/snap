import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Sidebar } from './Sidebar';
import { ThemeProvider } from '../../../providers';
import { v4 as uuidv4 } from 'uuid';

import { SearchStore, SearchStoreConfig } from '@athoscommerce/snap-store-mobx';
import { SearchController, SearchControllerConfig } from '@athoscommerce/snap-controller';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';
import { QueryStringTranslator, UrlManager, reactLinker } from '@athoscommerce/snap-url-manager';

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

let controller: any;

describe('Sidebar Component', () => {
	const mockClient = new MockClient(globals, {});
	mockClient.mockData.updateConfig({ search: 'filteredRangeBucket' });

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
		const rendered = render(<Sidebar controller={controller} />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element).toBeInTheDocument();
	});

	it('renders expected subComponents', () => {
		const rendered = render(<Sidebar controller={controller} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		const summary = rendered.container.querySelector('.ss__filter-summary');
		const sortby = rendered.container.querySelector('.ss__sortby__select');
		const perpage = rendered.container.querySelector('.ss__per-page__select');
		const facets = rendered.container.querySelector('.ss__facets');

		expect(title).toBeInTheDocument();
		expect(summary).toBeInTheDocument();
		expect(sortby).toBeInTheDocument();
		expect(perpage).toBeInTheDocument();
		expect(facets).toBeInTheDocument();
	});
	it('can hide title', () => {
		const rendered = render(
			<Sidebar controller={controller} hideTitleText={true} layout={[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]} />
		);
		const element = rendered.container.querySelector('.ss__sidebar');
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(element).toBeInTheDocument();
		expect(title).not.toBeInTheDocument();
	});

	it('has expected default titleText', () => {
		const text = 'Filters';
		const rendered = render(<Sidebar controller={controller} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(title?.innerHTML).toBe(text);
	});

	it('can change titleText', () => {
		const text = 'title text';
		const rendered = render(<Sidebar controller={controller} titleText={text} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(title?.innerHTML).toBe(text);
	});

	it('can hide hide facets', () => {
		const rendered = render(<Sidebar controller={controller} layout={[['filterSummary'], ['sortBy', 'perPage'], ['banner.left']]} />);
		const facets = rendered.container.querySelector('.ss__facets');
		expect(facets).not.toBeInTheDocument();
	});

	it('can hide perpage', () => {
		const rendered = render(<Sidebar controller={controller} layout={[['filterSummary'], ['sortBy'], ['facets'], ['banner.left']]} />);
		const perpage = rendered.container.querySelector('.ss__perpage__select');
		expect(perpage).not.toBeInTheDocument();
	});

	it('can hide hideSortBy', () => {
		const rendered = render(<Sidebar controller={controller} layout={[['filterSummary'], ['perPage'], ['facets'], ['banner.left']]} />);
		const sortby = rendered.container.querySelector('.ss__sortby__select');
		expect(sortby).not.toBeInTheDocument();
	});

	it('can hide FilterSummary', () => {
		const rendered = render(<Sidebar controller={controller} layout={[['sortBy', 'perPage'], ['facets'], ['banner.left']]} />);
		const summary = rendered.container.querySelector('.ss__filter-summary');
		expect(summary).not.toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Sidebar controller={controller} className={className} />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element).toHaveClass(className);
	});

	it('disables styles', () => {
		const rendered = render(<Sidebar controller={controller} disableStyles />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element?.classList).toHaveLength(1);
	});

	describe('sticky prop', () => {
		it('adds sticky class when sticky is true', () => {
			const rendered = render(<Sidebar controller={controller} sticky={true} />);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toHaveClass('ss__sidebar--sticky');
		});

		it('does not add sticky class by default', () => {
			const rendered = render(<Sidebar controller={controller} />);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).not.toHaveClass('ss__sidebar--sticky');
		});

		it('accepts stickyOffset prop', () => {
			const rendered = render(<Sidebar controller={controller} sticky={true} stickyOffset={50} />);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toHaveClass('ss__sidebar--sticky');
		});
	});

	describe('header props', () => {
		it('renders header by default', () => {
			const rendered = render(<Sidebar controller={controller} />);
			const header = rendered.container.querySelector('.ss__sidebar__header');
			expect(header).toBeInTheDocument();
		});

		it('hides header when hideHeader is true', () => {
			const rendered = render(<Sidebar controller={controller} hideHeader={true} />);
			const header = rendered.container.querySelector('.ss__sidebar__header');
			expect(header).not.toBeInTheDocument();
		});

		it('renders close button in header when closeButtonText is provided', () => {
			const rendered = render(<Sidebar controller={controller} closeButtonText={'Close'} hideCloseButton={false} />);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			expect(closeButton).toBeInTheDocument();
		});

		it('hides close button when hideCloseButton is true', () => {
			const rendered = render(<Sidebar controller={controller} hideCloseButton={true} />);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			expect(closeButton).not.toBeInTheDocument();
		});

		it('renders close button with custom text', () => {
			const rendered = render(<Sidebar controller={controller} closeButtonText={'Close Sidebar'} hideCloseButton={false} />);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			expect(closeButton).toBeInTheDocument();
			expect(closeButton?.textContent).toContain('Close Sidebar');
		});

		it('hides close button text when hideCloseButtonText is true', () => {
			const rendered = render(
				<Sidebar
					controller={controller}
					closeButtonText={'Close Sidebar'}
					hideCloseButtonText={true}
					closeButtonIcon={'close'}
					hideCloseButton={false}
				/>
			);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			expect(closeButton).toBeInTheDocument();
			expect(closeButton?.textContent).not.toContain('Close Sidebar');
		});

		it('renders close button with icon', () => {
			const rendered = render(<Sidebar controller={controller} closeButtonIcon={'close'} hideCloseButton={false} />);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			const icon = closeButton?.querySelector('.ss__icon');
			expect(closeButton).toBeInTheDocument();
			expect(icon).toBeInTheDocument();
		});

		it('calls toggleSidebar when close button is clicked', () => {
			const toggleFn = jest.fn();
			const rendered = render(<Sidebar controller={controller} onToggleSidebar={toggleFn} closeButtonText={'Close'} hideCloseButton={false} />);
			const closeButton = rendered.container.querySelector('.ss__sidebar__header__close-button');
			closeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(toggleFn).toHaveBeenCalled();
		});
	});

	describe('footer props', () => {
		it('renders footer by default', () => {
			const rendered = render(<Sidebar controller={controller} />);
			const footer = rendered.container.querySelector('.ss__sidebar__footer');
			expect(footer).toBeInTheDocument();
		});

		it('hides footer when hideFooter is true', () => {
			const rendered = render(<Sidebar controller={controller} hideFooter={true} />);
			const footer = rendered.container.querySelector('.ss__sidebar__footer');
			expect(footer).not.toBeInTheDocument();
		});

		it('renders apply button in footer when applyButtonText is provided', () => {
			const rendered = render(<Sidebar controller={controller} applyButtonText={'Apply'} hideApplyButton={false} />);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			expect(applyButton).toBeInTheDocument();
		});

		it('hides apply button when hideApplyButton is true', () => {
			const rendered = render(<Sidebar controller={controller} hideApplyButton={true} />);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			expect(applyButton).not.toBeInTheDocument();
		});

		it('renders apply button with custom text', () => {
			const rendered = render(<Sidebar controller={controller} applyButtonText={'Apply Changes'} hideApplyButton={false} />);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			expect(applyButton).toBeInTheDocument();
			expect(applyButton?.textContent).toContain('Apply Changes');
		});

		it('hides apply button text when hideApplyButtonText is true', () => {
			const rendered = render(
				<Sidebar
					controller={controller}
					applyButtonText={'Apply Changes'}
					hideApplyButtonText={true}
					applyButtonIcon={'cog'}
					hideApplyButton={false}
				/>
			);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			expect(applyButton).toBeInTheDocument();
			expect(applyButton?.textContent).not.toContain('Apply Changes');
		});

		it('renders apply button with icon', () => {
			const rendered = render(<Sidebar controller={controller} applyButtonIcon={'cog'} hideApplyButton={false} />);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			const icon = applyButton?.querySelector('.ss__icon');
			expect(applyButton).toBeInTheDocument();
			expect(icon).toBeInTheDocument();
		});

		it('calls toggleSidebar when apply button is clicked', () => {
			const toggleFn = jest.fn();
			const rendered = render(<Sidebar controller={controller} onToggleSidebar={toggleFn} applyButtonText={'Apply'} hideApplyButton={false} />);
			const applyButton = rendered.container.querySelector('.ss__sidebar__footer__apply-button');
			applyButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(toggleFn).toHaveBeenCalled();
		});

		it('renders clear button in footer when clearButtonText is provided', () => {
			const rendered = render(<Sidebar controller={controller} clearButtonText={'Clear All'} hideClearButton={false} />);
			const clearButton = rendered.container.querySelector('.ss__sidebar__footer__clear-button');
			expect(clearButton).toBeInTheDocument();
		});

		it('hides clear button when hideClearButton is true', () => {
			const rendered = render(<Sidebar controller={controller} hideClearButton={true} />);
			const clearButton = rendered.container.querySelector('.ss__sidebar__footer__clear-button');
			expect(clearButton).not.toBeInTheDocument();
		});

		it('renders clear button with custom text', () => {
			const rendered = render(<Sidebar controller={controller} clearButtonText={'Start Over'} hideClearButton={false} />);
			const clearButton = rendered.container.querySelector('.ss__sidebar__footer__clear-button');
			expect(clearButton).toBeInTheDocument();
			expect(clearButton?.textContent).toContain('Start Over');
		});

		it('hides clear button text when hideClearButtonText is true', () => {
			const rendered = render(
				<Sidebar
					controller={controller}
					clearButtonText={'Start Over'}
					hideClearButtonText={true}
					clearButtonIcon={'close'}
					hideClearButton={false}
				/>
			);
			const clearButton = rendered.container.querySelector('.ss__sidebar__footer__clear-button');
			expect(clearButton).toBeInTheDocument();
			expect(clearButton?.textContent).not.toContain('Start Over');
		});

		it('renders clear button with icon', () => {
			const rendered = render(<Sidebar controller={controller} clearButtonIcon={'close'} hideClearButton={false} />);
			const clearButton = rendered.container.querySelector('.ss__sidebar__footer__clear-button');
			const icon = clearButton?.querySelector('.ss__icon');
			expect(clearButton).toBeInTheDocument();
			expect(icon).toBeInTheDocument();
		});
	});

	describe('Sidebar lang works', () => {
		const selector = '.ss__sidebar';

		it('immediately available lang options', async () => {
			const langOptions = ['titleText'];

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
					const rendered = render(<Sidebar controller={controller} lang={lang} />);
					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();
					const langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
					expect(langElem).toBeInTheDocument();
					if (typeof langObj.value == 'function') {
						expect(langElem?.innerHTML).toBe(value);
						expect(valueMock).toHaveBeenCalledWith({
							controller: controller,
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

		it('button text lang options', async () => {
			const langOptions = ['closeButtonText', 'applyButtonText', 'clearButtonText'];

			const value = 'custom value';
			const altText = 'custom alt';
			const ariaLabel = 'custom label';
			const ariaValueText = 'custom value text';
			const title = 'custom title';

			const valueMock = jest.fn(() => value);

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
						alt: jest.fn(() => altText),
						'aria-label': jest.fn(() => ariaLabel),
						'aria-valuetext': jest.fn(() => ariaValueText),
						title: jest.fn(() => title),
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

					// must provide the text props so the buttons render
					const rendered = render(
						<Sidebar
							controller={controller}
							// @ts-ignore
							lang={lang}
							closeButtonText={'Close'}
							applyButtonText={'Apply'}
							clearButtonText={'Clear'}
							hideCloseButton={false}
							hideApplyButton={false}
							hideClearButton={false}
						/>
					);
					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();
					const langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
					expect(langElem).toBeInTheDocument();
					if (typeof langObj.value == 'function') {
						expect(langElem?.innerHTML).toBe(value);
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

		// it('custom lang options', async () => {

		// 	//@ts-ignore
		// 	facetOverflowMock.overflow = {
		// 		enabled: true,
		// 		limited: false,
		// 		limit: 12,
		// 		remaining: 0,
		// 		setLimit: () => {},
		// 		toggle: () => {},
		// 		calculate: () => {},
		// 	};

		// 	let _facet = facetOverflowMock as ValueFacet;;

		// 	const lessValue = "less value";
		// 	const lessAltText = "less alt";
		// 	const lessAriaLabel = 'less label';
		// 	const lessAriaValueText = "less value text";
		// 	const lessTitle = "less title";

		// 	const lang = {
		// 		showLessText: {
		// 			value: lessValue,
		// 			attributes: {
		// 				"alt": lessAltText,
		// 				"aria-label": lessAriaLabel,
		// 				"aria-valuetext": lessAriaValueText,
		// 				"title": lessTitle
		// 			}
		// 		},
		// 	}

		// 	const rendered = render(<Facet facet={_facet} lang={lang} />);

		// 	const element = rendered.container.querySelector(selector);
		// 	expect(element).toBeInTheDocument();

		// 	const lessElem = rendered.container.querySelector(`[ss-lang=showLessText]`);

		// 	expect(lessElem).toBeInTheDocument();
		// 	expect(lessElem?.innerHTML).toBe(lessValue);
		// 	expect(lessElem).toHaveAttribute("alt", lessAltText);
		// 	expect(lessElem).toHaveAttribute("aria-label", lessAriaLabel);
		// 	expect(lessElem).toHaveAttribute("aria-valuetext", lessAriaValueText);
		// 	expect(lessElem).toHaveAttribute("title", lessTitle);
		// });
	});

	describe('Sidebar theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Sidebar controller={controller} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.sidebar.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<Sidebar controller={controller} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.sidebar.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					sidebar: {
						className: 'not classy',
					},
				},
			};
			const propTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Sidebar controller={controller} theme={propTheme} />
				</ThemeProvider>
			);

			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.sidebar.className);
			expect(element).not.toHaveClass(globalTheme.components.sidebar.className);
		});
	});
});
