import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';
import { FacetsHorizontal } from './FacetsHorizontal';
import { IndividualFacetType } from '../Facets/Facets';
import { ThemeProvider } from '../../../providers';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';

import { MockData, MockClient } from '@athoscommerce/snap-shared';
import { SearchResponseModel } from '@athoscommerce/snapi-types';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { SearchController, SearchControllerConfig } from '@athoscommerce/snap-controller';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { QueryStringTranslator, UrlManager, reactLinker } from '@athoscommerce/snap-url-manager';

const mockData = new MockData();
const searchResponse: SearchResponseModel = mockData.search();

describe('FacetsHorizontal Component', () => {
	it('renders', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
		};
		const rendered = render(<FacetsHorizontal {...args} />);
		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement).toBeInTheDocument();
	});

	it('limits number of facets and displays sidebar overflow', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
			limit: 2,
		};
		const rendered = render(<FacetsHorizontal {...args} />);
		const facetsDropdown = rendered.container.querySelectorAll('.ss__facets-horizontal__header__dropdown');
		expect(facetsDropdown).toHaveLength(args.limit);

		const toggleSidebarButton = rendered.container.querySelector('.ss__facets-horizontal__header__toggle-sidebar');
		expect(toggleSidebarButton).toBeInTheDocument();
	});

	it('always shows overflow using alwaysShowToggleSidebarButton', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
			alwaysShowToggleSidebarButton: true,
		};
		const rendered = render(<FacetsHorizontal {...args} />);

		const toggleSidebarButton = rendered.container.querySelector('.ss__facets-horizontal__header__toggle-sidebar');
		expect(toggleSidebarButton).toBeInTheDocument();
	});

	it('renders with className', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
			className: 'classy',
		};

		const rendered = render(<FacetsHorizontal {...args} />);

		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement).toHaveClass(args.className);
	});

	it('disableStyles', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
			disableStyles: true,
		};

		const rendered = render(<FacetsHorizontal {...args} />);

		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement?.classList).toHaveLength(1);
	});

	describe('FacetsHorizontal lang works', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
		};

		const selector = '.ss__facets-horizontal';

		it('immediately available lang options', async () => {
			const langOptions = ['dropdownButton'];

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

					let valueSatisfied = false;
					let altSatisfied = false;
					let labelSatisfied = false;
					let valueTextSatisfied = false;
					let titleSatisfied = false;

					// @ts-ignore
					const rendered = render(<FacetsHorizontal {...args} lang={lang} />);
					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();

					const langElems = rendered.container.querySelectorAll(`[ss-lang=${option}]`);
					expect(langElems.length).toBeGreaterThan(0);
					langElems.forEach((elem) => {
						if (typeof langObj.value == 'function') {
							searchResponse.facets?.forEach((facet, idx) => {
								if (idx < 6) {
									expect(valueMock).toHaveBeenCalledWith({
										selectedFacet: undefined,
										facet: facet,
									});
								}
							});

							if (elem?.innerHTML == value) {
								valueSatisfied = true;
							}
						} else {
							if (elem?.innerHTML == langObj.value) {
								valueSatisfied = true;
							}
						}

						if (elem.getAttribute('alt') == altText) {
							altSatisfied = true;
						}
						if (elem.getAttribute('aria-label') == ariaLabel) {
							labelSatisfied = true;
						}
						if (elem.getAttribute('aria-valuetext') == ariaValueText) {
							valueTextSatisfied = true;
						}
						if (elem.getAttribute('title') == title) {
							titleSatisfied = true;
						}
					});

					expect(valueSatisfied).toBeTruthy();
					expect(altSatisfied).toBeTruthy();
					expect(labelSatisfied).toBeTruthy();
					expect(valueTextSatisfied).toBeTruthy();
					expect(titleSatisfied).toBeTruthy();

					jest.restoreAllMocks();
				});
			});
		});
	});

	it('is themeable with ThemeProvider', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
		};
		const globalTheme = {
			components: {
				facetsHorizontal: {
					className: 'classy',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FacetsHorizontal {...args} />
			</ThemeProvider>
		);
		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement).toBeInTheDocument();
		expect(facetsHorizontalElement).toHaveClass(globalTheme.components.facetsHorizontal.className);
	});

	it('is themeable with theme prop', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
		};
		const propTheme = {
			components: {
				facetsHorizontal: {
					className: 'classy',
				},
			},
		};
		const rendered = render(<FacetsHorizontal {...args} theme={propTheme} />);
		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement).toBeInTheDocument();
		expect(facetsHorizontalElement).toHaveClass(propTheme.components.facetsHorizontal.className);
	});

	it('is theme prop overrides ThemeProvider', () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
		};
		const globalTheme = {
			components: {
				facetsHorizontal: {
					className: 'notClassy',
				},
			},
		};
		const propTheme = {
			components: {
				facetsHorizontal: {
					className: 'classy',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FacetsHorizontal {...args} theme={propTheme} />
			</ThemeProvider>
		);

		const facetsHorizontalElement = rendered.container.querySelector('.ss__facets-horizontal');
		expect(facetsHorizontalElement).toBeInTheDocument();
		expect(facetsHorizontalElement).toHaveClass(propTheme.components.facetsHorizontal.className);
		expect(facetsHorizontalElement).not.toHaveClass(globalTheme.components.facetsHorizontal.className);
	});

	it('opens the facet dropdown when openFacetsInSidebar is not set', async () => {
		const args = {
			facets: searchResponse.facets as IndividualFacetType[],
			hideToggleSidebarButton: true,
		};
		const rendered = render(<FacetsHorizontal {...args} />);

		const dropdown = rendered.container.querySelector('.ss__facets-horizontal__header__dropdown')!;
		await userEvent.click(dropdown.querySelector('.ss__dropdown__button')!);

		expect(dropdown).toHaveClass('ss__dropdown--open');
		expect(dropdown.querySelector('.ss__dropdown__content .ss__facet')).toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__facets-horizontal__slideout')).not.toBeInTheDocument();
	});

	describe('openFacetsInSidebar', () => {
		const globals = { siteId: '8uyt2m' };
		const mockClient = new MockClient(globals, {});
		const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);

		let controller: SearchController;

		// the Slideout renders nothing when window.matchMedia is unavailable (jsdom)
		const originalMatchMedia = window.matchMedia;
		beforeEach(() => {
			Object.defineProperty(window, 'matchMedia', {
				configurable: true,
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: true,
					media: query,
					onchange: null,
					addListener: jest.fn(),
					removeListener: jest.fn(),
					addEventListener: jest.fn(),
					removeEventListener: jest.fn(),
					dispatchEvent: jest.fn(),
				})),
			});
		});
		afterAll(() => {
			Object.defineProperty(window, 'matchMedia', { configurable: true, writable: true, value: originalMatchMedia });
		});

		beforeEach(async () => {
			const searchConfig: SearchControllerConfig = {
				id: uuidv4().split('-').join(''),
				globals: {
					filters: [],
				},
				settings: {},
			};

			controller = new SearchController(searchConfig, {
				client: mockClient,
				store: new SearchStore(searchConfig, { urlManager }),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});

			await controller.search();
		});

		const headerButton = (container: Element, field: string) =>
			container.querySelector(`.ss__facets-horizontal__header__dropdown--${field} .ss__dropdown__button`) as HTMLElement;

		it('renders the slideout even when the toggle button is hidden', () => {
			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} hideToggleSidebarButton={true} />);

			expect(rendered.container.querySelector('.ss__facets-horizontal__header__toggle-sidebar')).not.toBeInTheDocument();

			const slideout = rendered.container.querySelector('.ss__facets-horizontal__slideout');
			expect(slideout).toBeInTheDocument();
			expect(slideout).not.toHaveClass('ss__slideout--active');
		});

		it('does not render dropdown content for the facet headers', () => {
			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);

			expect(rendered.container.querySelectorAll('.ss__facets-horizontal__header__dropdown').length).toBeGreaterThan(0);
			expect(rendered.container.querySelector('.ss__facets-horizontal__header__dropdown .ss__dropdown__content')).not.toBeInTheDocument();
		});

		it('opens the sidebar slideout instead of a dropdown when a facet header is clicked', async () => {
			const facet = controller.store.facets[0];
			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);

			await userEvent.click(headerButton(rendered.container, facet.field));

			// the sidebar's own facets also use Dropdown, so only the header row is checked
			expect(rendered.container.querySelector('.ss__facets-horizontal__header .ss__dropdown--open')).not.toBeInTheDocument();
			await waitFor(() => expect(rendered.container.querySelector('.ss__facets-horizontal__slideout')).toHaveClass('ss__slideout--active'));
			expect(rendered.container.querySelector('.ss__facets-horizontal__slideout .ss__sidebar .ss__facets')).toBeInTheDocument();
		});

		it('expands the clicked facet in the sidebar when it was collapsed', async () => {
			const facet = controller.store.facets[1];
			if (!facet.collapsed) facet.toggleCollapse();
			expect(facet.collapsed).toBe(true);

			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
			await userEvent.click(headerButton(rendered.container, facet.field));

			expect(facet.collapsed).toBe(false);
			await waitFor(() => {
				const sidebarFacet = rendered.container.querySelector(`.ss__facets-horizontal__slideout .ss__facet--${facet.field}`);
				expect(sidebarFacet).toBeInTheDocument();
				expect(sidebarFacet).not.toHaveClass('ss__facet--collapsed');
			});
		});

		it('leaves an already expanded facet expanded', async () => {
			const facet = controller.store.facets[1];
			if (facet.collapsed) facet.toggleCollapse();
			expect(facet.collapsed).toBe(false);

			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
			await userEvent.click(headerButton(rendered.container, facet.field));

			expect(facet.collapsed).toBe(false);
		});

		it('scrolls the clicked facet into view inside the slideout', async () => {
			// jsdom does not implement scrollIntoView
			const scrollIntoView = jest.fn();
			const original = Element.prototype.scrollIntoView;
			Element.prototype.scrollIntoView = scrollIntoView;

			try {
				const facet = controller.store.facets[2];
				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				await userEvent.click(headerButton(rendered.container, facet.field));

				await waitFor(() => expect(scrollIntoView).toHaveBeenCalledTimes(1));
				const scrolledElement = scrollIntoView.mock.contexts[0] as HTMLElement;
				expect(scrolledElement).toHaveClass(`ss__facet--${facet.field}`);
				expect(rendered.container.querySelector('.ss__facets-horizontal__slideout')).toContainElement(scrolledElement);
			} finally {
				Element.prototype.scrollIntoView = original;
			}
		});

		it('moves focus to the opened facet header inside the slideout', async () => {
			const facet = controller.store.facets[1];
			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);

			await userEvent.click(headerButton(rendered.container, facet.field));

			await waitFor(() => {
				const sidebarFacetHeader = rendered.container.querySelector(`.ss__facets-horizontal__slideout .ss__facet--${facet.field} .ss__facet__header`);
				expect(sidebarFacetHeader).toBeInTheDocument();
				expect(document.activeElement).toBe(sidebarFacetHeader);
			});
		});

		it('closes the slideout from the sidebar close button', async () => {
			const facet = controller.store.facets[0];
			const theme = { components: { sidebar: { hideCloseButton: false } } };
			const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} theme={theme} />);

			await userEvent.click(headerButton(rendered.container, facet.field));
			const slideout = rendered.container.querySelector('.ss__facets-horizontal__slideout')!;
			await waitFor(() => expect(slideout).toHaveClass('ss__slideout--active'));

			await userEvent.click(slideout.querySelector('.ss__sidebar__header__close-button')!);
			await waitFor(() => expect(slideout).not.toHaveClass('ss__slideout--active'));
		});

		describe('when the slideout closes', () => {
			const slideout = (container: Element) => container.querySelector('.ss__facets-horizontal__slideout') as HTMLElement;
			const overlay = (container: Element) => container.querySelector('.ss__slideout__overlay') as HTMLElement;

			it('collapses the auto-opened facet again on overlay click', async () => {
				const facet = controller.store.facets[1];
				if (!facet.collapsed) facet.toggleCollapse();

				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				await userEvent.click(headerButton(rendered.container, facet.field));
				expect(facet.collapsed).toBe(false);
				await waitFor(() => expect(slideout(rendered.container)).toHaveClass('ss__slideout--active'));

				await userEvent.click(overlay(rendered.container));

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(facet.collapsed).toBe(true));
			});

			it('collapses the auto-opened facet again on the sidebar close button', async () => {
				const facet = controller.store.facets[1];
				if (!facet.collapsed) facet.toggleCollapse();
				const theme = { components: { sidebar: { hideCloseButton: false } } };

				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} theme={theme} />);
				await userEvent.click(headerButton(rendered.container, facet.field));
				expect(facet.collapsed).toBe(false);
				await waitFor(() => expect(slideout(rendered.container)).toHaveClass('ss__slideout--active'));

				await userEvent.click(slideout(rendered.container).querySelector('.ss__sidebar__header__close-button')!);

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(facet.collapsed).toBe(true));
			});

			it('leaves a facet that was already open untouched', async () => {
				const facet = controller.store.facets[1];
				if (facet.collapsed) facet.toggleCollapse();

				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				await userEvent.click(headerButton(rendered.container, facet.field));
				await waitFor(() => expect(slideout(rendered.container)).toHaveClass('ss__slideout--active'));

				await userEvent.click(overlay(rendered.container));

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				expect(facet.collapsed).toBe(false);
			});

			it('returns focus to the opening header on overlay click', async () => {
				const facet = controller.store.facets[1];
				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				const opener = headerButton(rendered.container, facet.field);

				await userEvent.click(opener);
				await waitFor(() => expect(document.activeElement).not.toBe(opener));

				await userEvent.click(overlay(rendered.container));

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(document.activeElement).toBe(opener));
			});

			it('returns focus to the opening header on the sidebar close button', async () => {
				const facet = controller.store.facets[1];
				const theme = { components: { sidebar: { hideCloseButton: false } } };
				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} theme={theme} />);
				const opener = headerButton(rendered.container, facet.field);

				await userEvent.click(opener);
				await waitFor(() => expect(document.activeElement).not.toBe(opener));

				await userEvent.click(slideout(rendered.container).querySelector('.ss__sidebar__header__close-button')!);

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(document.activeElement).toBe(opener));
			});

			it('closes on the Escape key and returns focus to the opening header', async () => {
				const facet = controller.store.facets[1];
				if (!facet.collapsed) facet.toggleCollapse();
				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				const opener = headerButton(rendered.container, facet.field);

				await userEvent.click(opener);
				await waitFor(() => expect(slideout(rendered.container)).toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(document.activeElement).not.toBe(opener));

				await userEvent.keyboard('{Escape}');

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				await waitFor(() => expect(document.activeElement).toBe(opener));
				await waitFor(() => expect(facet.collapsed).toBe(true));
			});

			it('does not re-open a facet the user collapsed inside the sidebar', async () => {
				const facet = controller.store.facets[1];
				if (!facet.collapsed) facet.toggleCollapse();

				const rendered = render(<FacetsHorizontal controller={controller} openFacetsInSidebar={true} />);
				await userEvent.click(headerButton(rendered.container, facet.field));
				expect(facet.collapsed).toBe(false);

				const sidebarFacetHeaderSelector = `.ss__facets-horizontal__slideout .ss__facet--${facet.field} .ss__facet__header`;
				await waitFor(() => expect(rendered.container.querySelector(sidebarFacetHeaderSelector)).toBeInTheDocument());
				await userEvent.click(rendered.container.querySelector(sidebarFacetHeaderSelector)!);
				expect(facet.collapsed).toBe(true);

				await userEvent.click(overlay(rendered.container));

				await waitFor(() => expect(slideout(rendered.container)).not.toHaveClass('ss__slideout--active'));
				expect(facet.collapsed).toBe(true);
			});
		});
	});
});
