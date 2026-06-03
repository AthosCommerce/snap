(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8595],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx'(g, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => d, NoResults: () => u, __namedExportsOrder: () => S, default: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					b = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/snapify.ts'),
					m = e('./components/src/components/Templates/Search/readme.md'),
					f = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
				const M = {
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
						decorators: [(h) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(h, {}) })],
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
								description: 'Media query for when to render the mobileSidebar',
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
							..._.F,
						},
					},
					E = a.p.search({ id: 'search', globals: { siteId: 'atkzs2' } }),
					T = a.p.search({ id: 'noresults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					d = (h, { loaded: { controller: y } }) => (0, t.Y)(f.j, { ...h, controller: y });
				d.loaders = [async () => (await E.search(), { controller: E })];
				const u = (h, { loaded: { controller: y } }) => (0, t.Y)(f.j, { ...h, controller: y });
				(u.loaders = [async () => (await T.search(), { controller: T })]),
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
				const S = ['Default', 'NoResults'];
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(g, n, e) {
				'use strict';
				e.d(n, { j: () => a });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					_ = e('./components/src/providers/cache.tsx'),
					b = e('./components/src/components/Templates/Search/Search.tsx');
				const a = (0, c.PA)((m) =>
					(0, t.Y)(_._, { children: (0, t.Y)(b.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(g, n, e) {
				'use strict';
				e.d(n, { o: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/classnames/index.js'),
					a = e.n(b),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, c.AH)({}) },
					T = (0, _.PA)((d) => {
						const u = (0, m.u)(),
							S = (0, f.v6)('resultTracker', u, {}, d),
							h = { impression: !0, click: !0 },
							{ children: y, result: p, track: P, controller: D, className: C, internalClassName: v, disableStyles: x, style: o } = S,
							r = { ...h, ...P },
							{ ref: l, inViewport: i } = (0, M.Q)();
						i && r.impression && D?.track.product.impression(p);
						const s = {};
						return (
							x ? o && (s.css = [o]) : (s.css = [E.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: a()('ss__result-tracker', `ss__${D?.type}-result-tracker`, C, v),
								onClick: (O) => {
									r.click && D?.track.product.click(O, p);
								},
								ref: l,
								...s,
								children: y,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(g, n, e) {
				'use strict';
				e.d(n, { F: () => t });
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
			},
			'./components/src/utilities/componentNameToClassName.ts'(g, n, e) {
				'use strict';
				e.d(n, { b: () => t });
				const t = (c) => c.replace(/([A-Z])/g, (_) => '-' + _.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(g, n, e) {
				'use strict';
				e.d(n, { p: () => D });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					u = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					P = { globals: { siteId: 'atkzs2' } };
				class D {
					static recommendation(r) {
						const l = r.id;
						if (p[l]) return p[l];
						const i = (p[l] = v({ client: P, controller: r }));
						return (
							i.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(r) {
						const l = r.id;
						if (p[l]) return p[l];
						const i = (p[l] = x({ client: P, controller: r }));
						return (
							i.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static search(r) {
						const l = r.id;
						if (p[l]) return p[l];
						const i = (p[l] = C({ client: P, controller: r }));
						return (
							i.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
				}
				function C(o) {
					const r = new E.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), T.X);
					return new c.Tp(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new f.U(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new S.U(),
						logger: new h.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function v(o) {
					const r = new E.V(new d.E(), T.X).detach(!0);
					return new b.c(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new M.t(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new S.U(),
						logger: new h.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function x(o) {
					const r = new E.V(new d.E(), T.X).detach();
					return new _.Z(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new m.Y(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new S.U(),
						logger: new h.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(g, n, e) {
				'use strict';
				e.d(n, { Z: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					b = (a) => {
						const m = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								m.current && a.className?.includes('lang-') && !a.className?.includes(_) && window?.Prism?.highlightElement(m.current);
							}, [a.className, a.children, m]),
							(0, t.Y)('code', { ...a, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (g.exports = n);
			},
			'./components/src/components/Templates/Search/readme.md'(g) {
				'use strict';
				g.exports = `# Search Template

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
The \`mobileDisplayAt\` prop specifies a CSS media query for when the MobileSidebar component will render. By default, the component will render at "991px".

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={'400px'} />
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
\`\`\``;
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-SearchHorizontal-SearchHorizontal-stories.e1ac30d5.iframe.bundle.js.map
