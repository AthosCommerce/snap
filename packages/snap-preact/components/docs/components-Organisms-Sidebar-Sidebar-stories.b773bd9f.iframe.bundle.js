(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7583],
		{
			'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx'(b, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => u, __namedExportsOrder: () => v, default: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					y = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
					E = e('./components/src/utilities/snapify.ts');
				const x =
						"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```jsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```jsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```jsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```jsx\n<Sidebar controller={controller} sticky={'true'} />\n```\n\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```jsx\n<Sidebar controller={controller} stickyOffset={50} />\n```",
					T = {
						title: 'Organisms/Sidebar',
						component: r.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(d.oz, { options: { overrides: { code: y.Z } }, children: x }), (0, t.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(g, {}) })],
						argTypes: {
							controller: {
								description: 'Search controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'specifies the layout of the sidebar',
								table: {
									category: 'Templates Legal',
									type: {
										summary: "['filterSummary' | 'sortBy' | 'perPage' | 'facets' | 'banner.left' | 'paginationInfo' | 'layoutSelector' | '_']",
									},
									defaultValue: { summary: "[['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']]" },
								},
								control: 'none',
							},
							titleText: {
								description: 'Text to render in the sidebar title',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
								control: { type: 'text' },
							},
							hideTitleText: {
								defaultValue: !1,
								description: 'hides the sidebar title component',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							sticky: {
								description: 'specifies if the sidebar should be sticky',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							stickyOffset: {
								description: 'specifies the offset of the sidebar when sticky is true',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							..._.F,
						},
					},
					f = E.p.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
					u = (g, { loaded: { controller: P } }) => (0, t.Y)(r.B, { ...g, controller: P });
				(u.loaders = [async () => (await f.search(), { controller: f })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SidebarProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Sidebar {...args} controller={controller} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const v = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(b, l, e) {
				'use strict';
				e.d(l, { B: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					y = e('../../node_modules/classnames/index.js'),
					_ = e.n(y),
					E = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(E),
					T = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					f = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					A = e('./components/src/hooks/useA11y.tsx'),
					R = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					I = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const K = ({ horizontal: o }) =>
					(0, r.AH)({
						display: 'flex',
						flexDirection: o ? 'row' : 'column',
						alignItems: o ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: o ? 'row' : 'column',
							alignItems: o ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function n(o) {
					const c = (0, u.u)(),
						i = (0, v.uk)(),
						O = { treePath: (0, g.LU)() },
						M = (0, C.v6)('list', c, O, o),
						{
							titleText: U,
							onSelect: N,
							native: Y,
							multiSelect: Z,
							hideOptionLabels: z,
							hideOptionIcons: G,
							hideOptionCheckboxes: V,
							disabled: J,
							hideTitleText: H,
							options: B,
							requireSelection: w,
							disableStyles: F,
							className: X,
							internalClassName: k,
							treePath: $,
							customComponent: Q,
						} = M;
					if (Q) {
						const s = (0, j.x)(i?.templates?.library.import.component.list || {}, Q);
						if (s) return (0, t.Y)(s, { ...M });
					}
					let D = M.selected;
					const q = {
							checkbox: { native: Y, ...(0, P.s)({ disableStyles: F }), theme: M?.theme, treePath: $ },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, P.s)({ disableStyles: F }), theme: M?.theme, treePath: $ },
						},
						se = (0, L.Z)(M, K);
					D && !Array.isArray(D) && (D = [D]);
					const [S, ee] = (0, d.J0)(D || []),
						[oe] = (0, d.J0)(D || []);
					try {
						if (D) {
							const s = JSON.stringify(oe),
								p = JSON.stringify(D),
								m = JSON.stringify(S);
							s !== p && p !== m && ee(D);
						}
					} catch {}
					const ne = (s, p) => {
							let m;
							Z
								? S.find((W) => W.value === p.value)
									? ((m = [...S]),
									  m.splice(
											m.findIndex((W) => W.value === p.value),
											1
									  ),
									  m.length == 0 && w && (m = [p]))
									: (m = [...S, p])
								: !w && S.find((W) => W.value === p.value)
								? (m = [])
								: (m = [p]),
								N && N(s, p, m),
								ee(m);
						},
						re = {},
						te = x()(re, M.lang || {}),
						le = (0, R.u)(te, { options: B, selectedOptions: S });
					return typeof B == 'object' && B?.length
						? (0, t.Y)(f._, {
								children: (0, t.FD)('div', {
									...se,
									className: _()('ss__list', { 'ss__list--native': Y, 'ss__list--disabled': J }, X, k),
									children: [
										(U || te?.title?.value) && !H && (0, t.Y)('h5', { className: 'ss__list__title', ...le.title?.all, children: U }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': U,
											children: B.map((s) => {
												const p = S.some((m) => m.value == s.value);
												return (0, t.FD)('li', {
													className: _()(`ss__list__option ss__list__option--${T.p(s.value?.toString())}`, {
														'ss__list__option--selected': p,
														'ss__list__option--disabled': s?.disabled,
														'ss__list__option--unavailable': s?.available === !1,
													}),
													ref: (m) => (0, A.iy)(m),
													onClick: (m) => !J && !s?.disabled && ne(m, s),
													title: s.label,
													role: 'option',
													'aria-selected': p,
													'aria-disabled': s.disabled || s?.available === !1,
													children: [
														!V && (0, t.Y)(h.S, { ...q.checkbox, checked: p, disableA11y: !0, 'aria-label': s.label }),
														s.icon && !G && (0, t.Y)(I.I, { ...q.icon, ...(typeof s.icon == 'string' ? { icon: s.icon } : s.icon) }),
														!z && (s.label || !s.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: s.label || s.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(b, l, e) {
				'use strict';
				e.d(l, { B: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					y = e.n(r),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(C),
					h = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useComponent.tsx');
				const R = ({ stickyOffset: I }) =>
						(0, d.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: I || 0 }, '& .ss__facets': { width: '100%' } }),
					j = (0, _.PA)((I) => {
						const K = (0, x.u)(),
							n = (0, T.uk)(),
							c = { titleText: 'Filters', treePath: (0, f.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							i = (0, v.v6)('sidebar', K, c, I),
							{
								controller: a,
								layout: O,
								hideTitleText: M,
								titleText: U,
								sticky: N,
								disableStyles: Y,
								className: Z,
								internalClassName: z,
								treePath: G,
								customComponent: V,
							} = i;
						if (V) {
							const k = (0, A.x)(n?.templates?.library.import.component.sidebar || {}, V);
							if (k) return (0, t.Y)(k, { ...i });
						}
						const J = (0, g.Z)(i, R),
							H = { titleText: { value: U } },
							B = L()(H, i.lang || {}),
							w = (0, h.u)(B, { controller: a }),
							F = { Layout: { ...(0, u.s)({ disableStyles: Y }), theme: i.theme, treePath: G } },
							X = O?.length;
						return a?.store?.loaded && a?.store?.pagination?.totalResults > 0 && X
							? (0, t.Y)(E._, {
									children: (0, t.FD)('div', {
										...J,
										className: y()('ss__sidebar', Z, z, { 'ss__sidebar--sticky': N }),
										children: [
											M
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: y()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...w.titleText.all,
														children: U,
												  }),
											(0, t.Y)('div', { className: y()('ss__sidebar__inner'), children: (0, t.Y)(P.P, { controller: a, layout: O, ...F.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(b, l, e) {
				'use strict';
				e.d(l, { Q: () => d, V: () => t });
				var t = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(t || {}),
					d = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(d || {});
			},
			'./components/src/utilities/componentArgs.ts'(b, l, e) {
				'use strict';
				e.d(l, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(b, l, e) {
				'use strict';
				e.d(l, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					y = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					C = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					L = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					A = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = I({ client: A, controller: o }));
						return (
							i.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = K({ client: A, controller: o }));
						return (
							i.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
					static search(o) {
						const c = o.id;
						if (h[c]) return h[c];
						const i = (h[c] = j({ client: A, controller: o }));
						return (
							i.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							i.init(),
							i
						);
					}
				}
				function j(n) {
					const o = new f.V(new v.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), u.X);
					return new d.Tp(n.controller, {
						client: new _.K(n.client.globals, n.client.config),
						store: new x.U(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new P.U(),
						logger: new C.V(),
						tracker: new L.J(n.client.globals),
					});
				}
				function I(n) {
					const o = new f.V(new v.E(), u.X).detach(!0);
					return new y.c(n.controller, {
						client: new _.K(n.client.globals, n.client.config),
						store: new T.t(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new P.U(),
						logger: new C.V(),
						tracker: new L.J(n.client.globals),
					});
				}
				function K(n) {
					const o = new f.V(new v.E(), u.X).detach();
					return new r.Z(n.controller, {
						client: new _.K(n.client.globals, n.client.config),
						store: new E.Y(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new g.E(),
						profiler: new P.U(),
						logger: new C.V(),
						tracker: new L.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, l, e) {
				'use strict';
				e.d(l, { Z: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					y = (_) => {
						const E = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								E.current && _.className?.includes('lang-') && !_.className?.includes(r) && window?.Prism?.highlightElement(E.current);
							}, [_.className, _.children, E]),
							(0, t.Y)('code', { ..._, ref: E, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (b.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Sidebar-Sidebar-stories.b773bd9f.iframe.bundle.js.map
