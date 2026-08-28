(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8595],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx'(p, n, e) {
				'use strict';
				e.r(n);
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = e('./components/src/utilities/componentArgs.ts'),
					b = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/snapify.ts'),
					m = e('./components/src/components/Templates/Search/readme.md'),
					f = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
				const P = {
						title: 'Templates/SearchHorizontal',
						component: f.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: b.Z } }, children: m }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(_, {}) })],
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
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
									'specifies a CSS media query for when the Sidebar component should render in mobile view, which will render in a slideout',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideSidebar: {
								defaultValue: !1,
								description: 'prevents the sidebar component from rendering',
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
							...h.F,
						},
					},
					T = s.p.search({ id: 'search', globals: { siteId: 'atkzs2' } }),
					S = s.p.search({ id: 'noresults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					d = (_, { loaded: { controller: y } }) => (0, t.Y)(f.j, { ..._, controller: y });
				d.loaders = [async () => (await T.search(), { controller: T })];
				const u = (_, { loaded: { controller: y } }) => (0, t.Y)(f.j, { ..._, controller: y });
				(u.loaders = [async () => (await S.search(), { controller: S })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SearchHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchHorizontal {...args} controller={controller} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default', 'NoResults'];
				e.d(n, ['Default', 0, d, 'NoResults', 0, u, '__namedExportsOrder', 0, E, 'default', 0, P]);
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(p, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('./components/src/providers/cache.tsx'),
					b = e('./components/src/components/Templates/Search/Search.tsx');
				const s = (0, c.PA)((m) =>
					(0, t.Y)(h._, { children: (0, t.Y)(b.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(n, ['j', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(p, n, e) {
				'use strict';
				const t = {
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
				e.d(n, ['F', 0, t]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(p, n, e) {
				'use strict';
				const t = (c) => c.replace(/([A-Z])/g, (h) => '-' + h.toLowerCase());
				e.d(n, ['b', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(p, n, e) {
				'use strict';
				e.d(n, { p: () => x });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					u = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					_ = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					M = { globals: { siteId: 'atkzs2' } };
				class x {
					static recommendation(r) {
						const a = r.id;
						if (g[a]) return g[a];
						const i = (g[a] = v({ client: M, controller: r }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(r) {
						const a = r.id;
						if (g[a]) return g[a];
						const i = (g[a] = C({ client: M, controller: r }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static search(r) {
						const a = r.id;
						if (g[a]) return g[a];
						const i = (g[a] = D({ client: M, controller: r }));
						return (
							i.on('afterStore', async ({ controller: l }, O) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
				}
				function D(o) {
					const r = new T.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), S.X);
					return new c.Tp(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new f.U(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new E.U(),
						logger: new _.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function v(o) {
					const r = new T.V(new d.E(), S.X).detach(!0);
					return new b.c(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new P.t(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new E.U(),
						logger: new _.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function C(o) {
					const r = new T.V(new d.E(), S.X).detach();
					return new h.Z(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new m.Y(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new E.U(),
						logger: new _.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(p, n, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					b = (s) => {
						const m = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								m.current && s.className?.includes('lang-') && !s.className?.includes(h) && window?.Prism?.highlightElement(m.current);
							}, [s.className, s.children, m]),
							(0, t.Y)('code', { ...s, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(n, ['Z', 0, b]);
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function n(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (p.exports = n);
			},
			'./components/src/components/Templates/Search/readme.md'(p) {
				'use strict';
				p.exports = `# Search Template

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

//# sourceMappingURL=components-Templates-SearchHorizontal-SearchHorizontal-stories.ee72460a.iframe.bundle.js.map
