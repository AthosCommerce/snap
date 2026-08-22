import { h } from 'preact';

import { render, waitFor } from '@testing-library/preact';
import { SnapProvider, ThemeProvider } from '../../../providers';

import { CalloutBadge } from './CalloutBadge';

import { MockClient } from '@athoscommerce/snap-shared';

import { SearchControllerConfig } from '@athoscommerce/snap-controller';
import { createSearchController } from '../../../../../src/create';
import { Product } from '@athoscommerce/snap-store-mobx';

const globals = { siteId: '8uyt2m' };
const clientConfig = {
	globals: {
		siteId: '8uyt2m',
	},
};
const searchConfig: SearchControllerConfig = {
	id: 'search',
};
const CALLOUT_NAME = 'callout';
const mockClient = new MockClient(globals, {});
const controller = createSearchController({ client: clientConfig, controller: searchConfig }, { client: mockClient });

describe('CalloutBadge Component', () => {
	let result: Product;
	beforeAll(async () => {
		expect(controller).toBeDefined();
		expect(controller.store.meta).toBeDefined();

		await controller.search();
		result = (controller.store.results as Product[]).find((result) => result.badges.atLocation('callout').length > 0)! as Product;
		expect(result).toBeDefined();
	});

	it('renders CalloutBadge', () => {
		const rendered = render(<CalloutBadge result={result} tag={CALLOUT_NAME} />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge')!;
		expect(CalloutBadgeEl).toBeInTheDocument();

		const CalloutBadgeComponentEl = rendered.container.querySelector(`.ss__callout-badge > div`)!;
		expect(CalloutBadgeComponentEl).toBeInTheDocument();
	});

	it('will NOT render the wrapper element if there are no badges', () => {
		const rendered = render(<CalloutBadge result={result} tag="NO BADGES!" />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge')!;
		expect(CalloutBadgeEl).not.toBeInTheDocument();

		const CalloutBadgeComponentEl = rendered.container.querySelector(`.ss__callout-badge > div`)!;
		expect(CalloutBadgeComponentEl).not.toBeInTheDocument();
	});

	it('will NOT render (and not throw) when the result has no display data', () => {
		const plainResult = { id: 'plain', mappings: { core: { name: 'Plain' } }, attributes: {} };
		const rendered = render(<CalloutBadge result={plainResult as any} />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge');
		expect(CalloutBadgeEl).not.toBeInTheDocument();
	});

	it('will render the wrapper element if there are no badges when using the `renderEmpty` prop', () => {
		const rendered = render(<CalloutBadge result={result} tag="NO BADGES!" renderEmpty />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge')!;
		expect(CalloutBadgeEl).toBeInTheDocument();

		const CalloutBadgeComponentEl = rendered.container.querySelector(`.ss__callout-badge > div`)!;
		expect(CalloutBadgeComponentEl).not.toBeInTheDocument();
	});

	it('can use componentMap to render a custom component', () => {
		const componentName = 'TestComponent';
		const customComponentClassName = 'custom-component-class';

		const result2 = result;
		result2.badges.atLocation('callout')!.pop()!.component = componentName;

		const rendered = render(
			<CalloutBadge
				result={result2}
				name={CALLOUT_NAME}
				componentMap={{
					[componentName]: () => () => <div className={customComponentClassName}>test</div>,
				}}
			/>
		);

		const CalloutBadgeCustomComponent = rendered.container.querySelector(`.${customComponentClassName}`)!;
		expect(CalloutBadgeCustomComponent).toBeInTheDocument();
	});

	it('waits for async named customComponent override and then renders it', async () => {
		const customComponentClassName = 'async-callout-custom-component';
		let resolveImport: ((value: any) => void) | undefined;

		const snap = {
			templates: {
				library: {
					import: {
						component: {
							calloutBadge: {
								AsyncCalloutBadge: () =>
									new Promise((resolve) => {
										resolveImport = resolve;
									}),
							},
						},
					},
				},
			},
		} as any;

		const rendered = render(
			<SnapProvider snap={snap}>
				<CalloutBadge result={result} customComponent="AsyncCalloutBadge" />
			</SnapProvider>
		);

		expect(rendered.container.querySelector('.ss__callout-badge')).not.toBeInTheDocument();

		resolveImport!(() => <div className={customComponentClassName}>async badge override</div>);

		await waitFor(() => {
			expect(rendered.container.querySelector(`.${customComponentClassName}`)).toBeInTheDocument();
		});
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<CalloutBadge result={result} className={className} />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge')!;

		expect(CalloutBadgeEl).toHaveClass(className);
	});

	it('disables styles', () => {
		const rendered = render(<CalloutBadge result={result} disableStyles />);
		const CalloutBadgeEl = rendered.container.querySelector('.ss__callout-badge')!;

		expect(CalloutBadgeEl?.classList).toHaveLength(2);
	});

	describe('CalloutBadge theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					calloutBadge: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<CalloutBadge result={result} name={CALLOUT_NAME} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__callout-badge');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.calloutBadge.className);
		});

		it('derives its name from a custom tag so named theme selectors apply', () => {
			const globalTheme = {
				type: 'templates',
				components: {
					['calloutBadge.callout' as 'calloutBadge']: {
						className: 'named-classy',
					},
				},
			} as any;
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<CalloutBadge result={result} tag={CALLOUT_NAME} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__callout-badge');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass('named-classy');
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					calloutBadge: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<CalloutBadge result={result} name={CALLOUT_NAME} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__callout-badge');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.calloutBadge.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					calloutBadge: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					calloutBadge: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<CalloutBadge result={result} name={CALLOUT_NAME} theme={propTheme} />
				</ThemeProvider>
			);

			const element = rendered.container.querySelector('.ss__callout-badge');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.calloutBadge.className);
			expect(element).not.toHaveClass(globalTheme.components.calloutBadge.className);
		});
	});
});
