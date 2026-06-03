(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8907],
		{
			'./components/src/components/Templates/Search/Search.stories.tsx'(h, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => i, NoResults: () => d, __namedExportsOrder: () => S, default: () => M });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/utilities/componentArgs.ts'),
					E = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/snapify.ts'),
					_ = e('./components/src/components/Templates/Search/readme.md'),
					f = e('./components/src/components/Templates/Search/Search.tsx');
				const M = {
						title: 'Templates/Search',
						component: f.v,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(m.oz, { options: { overrides: { code: E.Z } }, children: _ }), (0, o.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, o.Y)('div', { style: { maxWidth: '1200px' }, children: (0, o.Y)(p, {}) })],
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
					T = l.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					i = (p, { loaded: { controller: b } }) => (0, o.Y)(f.v, { ...p, controller: b });
				i.loaders = [async () => (await y.search(), { controller: y })];
				const d = (p, { loaded: { controller: b } }) => (0, o.Y)(f.v, { ...p, controller: b });
				(d.loaders = [async () => (await T.search(), { controller: T })]),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
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
								...i.parameters?.docs?.source,
							},
						},
					}),
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
					});
				const S = ['Default', 'NoResults'];
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(h, r, e) {
				'use strict';
				e.d(r, { o: () => T });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/classnames/index.js'),
					l = e.n(E),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/createImpressionObserver.ts');
				const y = { ResultTracker: () => (0, m.AH)({}) },
					T = (0, g.PA)((i) => {
						const d = (0, _.u)(),
							S = (0, f.v6)('resultTracker', d, {}, i),
							p = { impression: !0, click: !0 },
							{ children: b, result: u, track: P, controller: D, className: C, internalClassName: v, disableStyles: x, style: t } = S,
							n = { ...p, ...P },
							{ ref: a, inViewport: c } = (0, M.Q)();
						c && n.impression && D?.track.product.impression(u);
						const s = {};
						return (
							x ? t && (s.css = [t]) : (s.css = [y.ResultTracker(), t]),
							(0, o.Y)('div', {
								className: l()('ss__result-tracker', `ss__${D?.type}-result-tracker`, C, v),
								onClick: (O) => {
									n.click && D?.track.product.click(O, u);
								},
								ref: a,
								...s,
								children: b,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(h, r, e) {
				'use strict';
				e.d(r, { F: () => o });
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
			},
			'./components/src/utilities/componentNameToClassName.ts'(h, r, e) {
				'use strict';
				e.d(r, { b: () => o });
				const o = (m) => m.replace(/([A-Z])/g, (g) => '-' + g.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(h, r, e) {
				'use strict';
				e.d(r, { p: () => D });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					i = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					p = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					P = { globals: { siteId: 'atkzs2' } };
				class D {
					static recommendation(n) {
						const a = n.id;
						if (u[a]) return u[a];
						const c = (u[a] = v({ client: P, controller: n }));
						return (
							c.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(n) {
						const a = n.id;
						if (u[a]) return u[a];
						const c = (u[a] = x({ client: P, controller: n }));
						return (
							c.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
					static search(n) {
						const a = n.id;
						if (u[a]) return u[a];
						const c = (u[a] = C({ client: P, controller: n }));
						return (
							c.on('afterStore', async ({ controller: s }, O) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await O();
							}),
							c.init(),
							c
						);
					}
				}
				function C(t) {
					const n = new y.V(new i.E({ settings: { coreType: 'query', corePrefix: t.controller.id } }), T.X);
					return new m.Tp(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new f.U(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(t.client.globals),
					});
				}
				function v(t) {
					const n = new y.V(new i.E(), T.X).detach(!0);
					return new E.c(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new M.t(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(t.client.globals),
					});
				}
				function x(t) {
					const n = new y.V(new i.E(), T.X).detach();
					return new g.Z(t.controller, {
						client: new l.K(t.client.globals, t.client.config),
						store: new _.Y(t.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new S.U(),
						logger: new p.V(),
						tracker: new b.J(t.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(h, r, e) {
				'use strict';
				e.d(r, { Z: () => E });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 'prism-block',
					E = (l) => {
						const _ = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								_.current && l.className?.includes('lang-') && !l.className?.includes(g) && window?.Prism?.highlightElement(_.current);
							}, [l.className, l.children, _]),
							(0, o.Y)('code', { ...l, ref: _, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
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

//# sourceMappingURL=components-Templates-Search-Search-stories.a31d34dd.iframe.bundle.js.map
