(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8907],
		{
			'./components/src/components/Templates/Search/Search.stories.tsx'(h, r, e) {
				'use strict';
				e.r(r);
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/utilities/componentArgs.ts'),
					T = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/snapify.ts'),
					_ = e('./components/src/components/Templates/Search/readme.md'),
					S = e('./components/src/components/Templates/Search/Search.tsx');
				const v = {
						title: 'Templates/Search',
						component: S.v,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(i.oz, { options: { overrides: { code: T.Z } }, children: _ }), (0, o.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, o.Y)('div', { style: { maxWidth: '1200px' }, children: (0, o.Y)(u, {}) })],
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							toggleSidebarButtonText: {
								description: 'Text to render in the toggle Sidebar button.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							toggleSidebarStartClosed: {
								defaultValue: !1,
								description: 'determines if the sidebar toggle should start closed',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideToggleSidebarButton: {
								defaultValue: !1,
								description: 'hide the toggle Sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							mobileDisplayAt: {
								defaultValue: '',
								description:
									'specifies a Boolean or CSS media query for when the Sidebar component should render in mobile view, which will render in a slideout',
								table: { category: 'Templates Legal', type: { summary: 'string | boolean' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							sidebarWidth: {
								defaultValue: '270px',
								description: 'CSS width of the sidebar',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '270px' } },
								control: { type: 'text' },
							},
							hideSidebar: {
								defaultValue: !1,
								description: 'prevents the sidebar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideTopToolbar: {
								defaultValue: !1,
								description: 'prevents the top Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideMiddleToolbar: {
								defaultValue: !1,
								description: 'prevents the middle Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideBottomToolbar: {
								defaultValue: !1,
								description: 'prevents the bottom Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							layoutOptions: {
								description: 'Options for layout selection',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'ListOption[]' } },
								control: { type: 'object' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							...g.F,
						},
					},
					y = l.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					f = l.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					d = (u, { loaded: { controller: b } }) => (0, o.Y)(S.v, { ...u, controller: b });
				d.loaders = [async () => (await y.search(), { controller: y })];
				const m = (u, { loaded: { controller: b } }) => (0, o.Y)(S.v, { ...u, controller: b });
				(m.loaders = [async () => (await f.search(), { controller: f })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default', 'NoResults'];
				e.d(r, ['Default', 0, d, 'NoResults', 0, m, '__namedExportsOrder', 0, E, 'default', 0, v]);
			},
			'./components/src/utilities/componentArgs.ts'(h, r, e) {
				'use strict';
				const o = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				e.d(r, ['F', 0, o]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(h, r, e) {
				'use strict';
				const o = (i) => i.replace(/([A-Z])/g, (g) => '-' + g.toLowerCase());
				e.d(r, ['b', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(h, r, e) {
				'use strict';
				e.d(r, { p: () => C });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					u = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					x = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(n) {
						const s = n.id;
						if (p[s]) return p[s];
						const c = (p[s] = P({ client: x, controller: n }));
						return (
							c.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(n) {
						const s = n.id;
						if (p[s]) return p[s];
						const c = (p[s] = D({ client: x, controller: n }));
						return (
							c.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
					static search(n) {
						const s = n.id;
						if (p[s]) return p[s];
						const c = (p[s] = M({ client: x, controller: n }));
						return (
							c.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
				}
				function M(t) {
					const n = new y.V(new d.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), f.X);
					return new i.Tp(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new S.U(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new m.E(),
						profiler: new E.U(),
						logger: new u.V(),
						tracker: new b.J(t.client.globals),
					});
				}
				function P(t) {
					const n = new y.V(new d.E(), f.X).detach(!0);
					return new T.c(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new v.t(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new m.E(),
						profiler: new E.U(),
						logger: new u.V(),
						tracker: new b.J(t.client.globals),
					});
				}
				function D(t) {
					const n = new y.V(new d.E(), f.X).detach();
					return new g.Z(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new _.Y(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new m.E(),
						profiler: new E.U(),
						logger: new u.V(),
						tracker: new b.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(h, r, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 'prism-block',
					T = (l) => {
						const _ = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								_.current && l.className?.includes('lang-') && !l.className?.includes(g) && window?.Prism?.highlightElement(_.current);
							}, [l.className, l.children, _]),
							(0, o.Y)('code', { ...l, ref: _, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, T]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function r(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (h.exports = r);
			},
			'./components/src/components/Templates/Search/readme.md'(h) {
				'use strict';
				h.exports = `# Search Template

Renders a Search Results Page.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<Search controller={controller} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Search controller={controller} resultComponent={CustomResult} />
\`\`\`

### mobileDisplayAt
The \`mobileDisplayAt\` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. The default breakpoint is "991px". You can also pass a boolean value to enable or disable mobile view regardless of screen size.

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

or 

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={true} />
\`\`\`

### sidebarWidth
The \`sidebarWidth\` prop specifies the CSS width of the Sidebar component. By default, the sidebar width is \`"270px"\`.

\`\`\`tsx
<Search controller={controller} sidebarWidth={'300px'} />
\`\`\`

### hideSidebar
The \`hideSidebar\` prop specifies if the Sidebar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideSidebar={true} />
\`\`\`

### hideTopToolbar
The \`hideTopToolbar\` prop specifies if the top ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideTopToolbar={true} />
\`\`\`

### hideMiddleToolbar
The \`hideMiddleToolbar\` prop specifies if the middle ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideMiddleToolbar={true} />
\`\`\`

### hideBottomToolbar
The \`hideBottomToolbar\` prop specifies if the bottom ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideBottomToolbar={true} />
\`\`\`

### toggleSidebarButtonText
The \`toggleSidebarButtonText\` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. 

\`\`\`tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
\`\`\`

### toggleSidebarStartClosed
The \`toggleSidebarStartClosed\` prop specifies if the sidebar toggle should start closed.

\`\`\`tsx
<Search controller={controller} toggleSidebarStartClosed={true} />
\`\`\`

### hideToggleSidebarButton
The \`hideToggleSidebarButton\` prop hides the Sidebar toggle button.

\`\`\`tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
\`\`\`

### layoutOptions
The \`layoutOptions\` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




\`\`\`tsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'search results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'search results': {
					columns: 2,
				},
			},
		},
	},
]

<Search controller={controller} layoutOptions={layoutOptions} />
\`\`\`
## Lang

The \`lang\` prop allows you to override translatable text strings used by the Search component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`toggleSidebarButtonText\` | Sidebar toggle button text | \`filters\` (SearchFilterStore), \`sidebarOpenState\` (boolean) |

### Example

\`\`\`tsx
<Search
	controller={controller}
	lang={{
		toggleSidebarButtonText: {
			value: (data) => {
				if (data.sidebarOpenState) {
					return 'Close Sidebar';
				}
				return 'Open Sidebar';
			},
		},
	}}
/>
\`\`\`
`;
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Search-Search-stories.5bfda88f.iframe.bundle.js.map
