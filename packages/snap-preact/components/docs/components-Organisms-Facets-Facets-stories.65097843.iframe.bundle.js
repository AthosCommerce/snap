(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6721],
		{
			'./components/src/components/Organisms/Facets/Facets.stories.tsx'(h, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => d, __namedExportsOrder: () => g, default: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const D =
						"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```jsx\nimport { Facets } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```jsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
					C = {
						title: 'Organisms/Facets',
						component: n.J,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: O.Z } }, children: D }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(u, {}) })],
						argTypes: {
							facets: {
								description: 'Facets store reference',
								type: { required: !1 },
								table: { type: { summary: 'Facets store object' } },
								control: { type: 'none' },
							},
							limit: {
								description: 'Maximum number of facets to display',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onFacetOnClick',
							},
							...i.F,
						},
					},
					E = p.p.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
					d = (u, { loaded: { controller: P } }) => (0, t.Y)(n.J, { ...u, controller: P });
				(d.loaders = [async () => (await E.search(), { controller: E })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: FacetsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Facets {...args} controller={controller} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(h, a, e) {
				'use strict';
				e.d(a, { J: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					O = e.n(n),
					i = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(i),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					E = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useComponent.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts');
				const x = () => (0, m.AH)({}),
					U = (0, D.PA)((A) => {
						const R = (0, d.u)(),
							I = (0, g.uk)(),
							s = (0, u.LU)(),
							r = { facets: A.controller?.store?.facets, treePath: s };
						let o = (0, T.v6)('facets', R, r, A);
						const {
							limit: l,
							onFacetOptionClick: c,
							disableStyles: M,
							className: b,
							internalClassName: W,
							controller: L,
							treePath: B,
							customComponent: K,
						} = o;
						if (K) {
							const f = (0, P.x)(I?.templates?.library.import.component.facets || {}, K);
							if (f) return (0, t.Y)(f, { ...o });
						}
						const j = (f) => {
								c && c(f), L?.setFocused && L?.setFocused();
							},
							F = {
								components: {
									facetGridOptions: { onClick: j },
									facetHierarchyOptions: { onClick: j },
									facetListOptions: { onClick: j },
									facetPaletteOptions: { onClick: j },
								},
							},
							S = p()(F, o?.theme || {}, { arrayMerge: (f, Y) => Y });
						o = { ...o, theme: S };
						let { facets: y } = o;
						l && y && l > 0 && (y = y.slice(0, +l));
						const w = { facet: { internalClassName: 'ss__facets__facet', ...(0, v.s)({ disableStyles: M }), theme: o.theme, treePath: B } },
							N = (0, _.Z)(o, x);
						return y && y?.length > 0
							? (0, t.Y)(E._, {
									children: (0, t.Y)('div', {
										className: O()('ss__facets', b, W),
										...N,
										children: y.map((f) => (0, t.Y)(C.s, { ...w.facet, facet: f }, f.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(h, a, e) {
				'use strict';
				e.d(a, { Q: () => m, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					m = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(m || {});
			},
			'./components/src/utilities/componentArgs.ts'(h, a, e) {
				'use strict';
				e.d(a, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(h, a, e) {
				'use strict';
				e.d(a, { p: () => U });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					u = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					x = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(r) {
						const o = r.id;
						if (_[o]) return _[o];
						const l = (_[o] = R({ client: x, controller: r }));
						return (
							l.on('afterStore', async ({ controller: c }, M) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await M();
							}),
							l.init(),
							l
						);
					}
					static autocomplete(r) {
						const o = r.id;
						if (_[o]) return _[o];
						const l = (_[o] = I({ client: x, controller: r }));
						return (
							l.on('afterStore', async ({ controller: c }, M) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await M();
							}),
							l.init(),
							l
						);
					}
					static search(r) {
						const o = r.id;
						if (_[o]) return _[o];
						const l = (_[o] = A({ client: x, controller: r }));
						return (
							l.on('afterStore', async ({ controller: c }, M) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await M();
							}),
							l.init(),
							l
						);
					}
				}
				function A(s) {
					const r = new E.V(new g.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), d.X);
					return new m.Tp(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new D.U(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new T.J(s.client.globals),
					});
				}
				function R(s) {
					const r = new E.V(new g.E(), d.X).detach(!0);
					return new O.c(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new C.t(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new T.J(s.client.globals),
					});
				}
				function I(s) {
					const r = new E.V(new g.E(), d.X).detach();
					return new n.Z(s.controller, {
						client: new i.K(s.client.globals, s.client.config),
						store: new p.Y(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new u.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new T.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(h, a, e) {
				'use strict';
				e.d(a, { Z: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					O = (i) => {
						const p = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								p.current && i.className?.includes('lang-') && !i.className?.includes(n) && window?.Prism?.highlightElement(p.current);
							}, [i.className, i.children, p]),
							(0, t.Y)('code', { ...i, ref: p, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (h.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facets-Facets-stories.65097843.iframe.bundle.js.map
