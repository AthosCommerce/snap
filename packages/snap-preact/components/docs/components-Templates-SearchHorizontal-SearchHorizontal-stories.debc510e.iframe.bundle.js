(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8595],
		{
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx'(f, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => h, NoResults: () => g, __namedExportsOrder: () => O, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/snapify.ts'),
					n = e('./components/src/components/Templates/Search/readme.md'),
					r = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
				const c = {
						title: 'Templates/SearchHorizontal',
						component: r.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(d.oz, { options: { overrides: { code: o.Z } }, children: n }), (0, s.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(T, {}) })],
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
							...u.F,
						},
					},
					b = t.p.search({ id: 'search', globals: { siteId: 'atkzs2' } }),
					S = t.p.search({ id: 'noresults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					h = (T, { loaded: { controller: E } }) => (0, s.Y)(r.j, { ...T, controller: E });
				h.loaders = [async () => (await b.search(), { controller: b })];
				const g = (T, { loaded: { controller: E } }) => (0, s.Y)(r.j, { ...T, controller: E });
				(g.loaders = [async () => (await S.search(), { controller: S })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'NoResults'];
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(f, a, e) {
				'use strict';
				e.d(a, { j: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					o = e('./components/src/components/Templates/Search/Search.tsx');
				const t = (0, d.PA)((n) =>
					(0, s.Y)(u._, { children: (0, s.Y)(o.v, { ...n, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(f, a, e) {
				'use strict';
				e.d(a, { o: () => S });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const b = { ResultTracker: () => (0, d.AH)({}) },
					S = (0, u.PA)((h) => {
						const g = (0, n.u)(),
							O = (0, r.v6)('resultTracker', g, {}, h),
							T = { impression: !0, click: !0 },
							{ children: E, result: y, track: P, controller: D, className: C, internalClassName: v, disableStyles: x, style: l } = O,
							i = { ...T, ...P },
							{ ref: p, inViewport: _ } = (0, c.Q)();
						_ && i.impression && D?.track.product.impression(y);
						const m = {};
						return (
							x ? l && (m.css = [l]) : (m.css = [b.ResultTracker(), l]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${D?.type}-result-tracker`, C, v),
								onClick: (M) => {
									i.click && D?.track.product.click(M, y);
								},
								ref: p,
								...m,
								children: E,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(f, a, e) {
				'use strict';
				e.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/componentNameToClassName.ts'(f, a, e) {
				'use strict';
				e.d(a, { b: () => s });
				const s = (d) => d.replace(/([A-Z])/g, (u) => '-' + u.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(f, a, e) {
				'use strict';
				e.d(a, { p: () => D });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					S = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					P = { globals: { siteId: 'atkzs2' } };
				class D {
					static recommendation(i) {
						const p = i.id;
						if (y[p]) return y[p];
						const _ = (y[p] = v({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(i) {
						const p = i.id;
						if (y[p]) return y[p];
						const _ = (y[p] = x({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
					static search(i) {
						const p = i.id;
						if (y[p]) return y[p];
						const _ = (y[p] = C({ client: P, controller: i }));
						return (
							_.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							_.init(),
							_
						);
					}
				}
				function C(l) {
					const i = new b.V(new h.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), S.X);
					return new d.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.U(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new T.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function v(l) {
					const i = new b.V(new h.E(), S.X).detach(!0);
					return new o.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new c.t(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new T.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function x(l) {
					const i = new b.V(new h.E(), S.X).detach();
					return new u.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new n.Y(l.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new g.E(),
						profiler: new O.U(),
						logger: new T.V(),
						tracker: new E.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(f, a, e) {
				'use strict';
				e.d(a, { Z: () => o });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					o = (t) => {
						const n = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								n.current && t.className?.includes('lang-') && !t.className?.includes(u) && window?.Prism?.highlightElement(n.current);
							}, [t.className, t.children, n]),
							(0, s.Y)('code', { ...t, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(f, a, e) {
				'use strict';
				e.d(a, { j: () => u });
				var s = Object.prototype.hasOwnProperty;
				function d(o, t, n) {
					for (n of o.keys()) if (u(n, t)) return n;
				}
				function u(o, t) {
					var n, r, c;
					if (o === t) return !0;
					if (o && t && (n = o.constructor) === t.constructor) {
						if (n === Date) return o.getTime() === t.getTime();
						if (n === RegExp) return o.toString() === t.toString();
						if (n === Array) {
							if ((r = o.length) === t.length) for (; r-- && u(o[r], t[r]); );
							return r === -1;
						}
						if (n === Set) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((c = r), (c && typeof c == 'object' && ((c = d(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (n === Map) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((c = r[0]), (c && typeof c == 'object' && ((c = d(t, c)), !c)) || !u(r[1], t.get(c)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (n === DataView) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o[r] === t[r]; );
							return r === -1;
						}
						if (!n || typeof o == 'object') {
							r = 0;
							for (n in o) if ((s.call(o, n) && ++r && !s.call(t, n)) || !(n in t) || !u(o[n], t[n])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(f) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (f.exports = a);
			},
			'./components/src/components/Templates/Search/readme.md'(f) {
				'use strict';
				f.exports = `# Search Template

Renders a Search Results Page.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required \`controller\` prop specifies a reference to the search controller.

\`\`\`jsx
<Search controller={controller} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

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

\`\`\`jsx
<Search controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

### hideSidebar
The \`hideSidebar\` prop specifies if the Sidebar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideSidebar={true} />
\`\`\`

### hideTopToolbar
The \`hideTopToolbar\` prop specifies if the top ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideTopToolbar={true} />
\`\`\`

### hideMiddleToolbar
The \`hideMiddleToolbar\` prop specifies if the middle ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideMiddleToolbar={true} />
\`\`\`

### hideBottomToolbar
The \`hideBottomToolbar\` prop specifies if the bottom ToolBar component should be rendered.  

\`\`\`jsx
<Search controller={controller} hideBottomToolbar={true} />
\`\`\`

### toggleSidebarButtonText
The \`toggleSidebarButtonText\` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. 

\`\`\`jsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
\`\`\`

### toggleSidebarStartClosed
The \`toggleSidebarStartClosed\` prop specifies if the sidebar toggle should start closed.

\`\`\`jsx
<Search controller={controller} toggleSidebarStartClosed={true} />
\`\`\`

### hideToggleSidebarButton
The \`hideToggleSidebarButton\` prop hides the Sidebar toggle button.

\`\`\`jsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
\`\`\`

### layoutOptions
The \`layoutOptions\` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




\`\`\`jsx

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

//# sourceMappingURL=components-Templates-SearchHorizontal-SearchHorizontal-stories.debc510e.iframe.bundle.js.map
