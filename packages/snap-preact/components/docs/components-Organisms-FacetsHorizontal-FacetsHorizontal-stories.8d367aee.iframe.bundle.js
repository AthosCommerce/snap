(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(b, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => _, __namedExportsOrder: () => C, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts'),
					x = e('./components/src/components/Atoms/Icon/paths.tsx');
				const A =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```jsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```jsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar, not just when facets are overflowing.\n\n```jsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```jsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```jsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```jsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideFiltersButton\nThe `hideFiltersButton` specifies wether the filters button should be rendered or not. If true, the button will render when there are more filters to show than the limit prop allows (unless the alwaysShowFiltersButton prop is passed, which will ignore the limit). \n\n```jsx\n<FacetsHorizontal controller={controller} hideFiltersButton={true}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```jsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```",
					P = {
						title: 'Organisms/FacetsHorizontal',
						component: l.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: O.Z } }, children: A }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(y, {}) })],
						argTypes: {
							facets: {
								description: 'Facets store reference',
								type: { required: !1 },
								table: { type: { summary: 'Facets store object' } },
								control: { type: 'none' },
							},
							limit: {
								description: 'Maximum number of facets to display',
								defaultValue: 6,
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 6 } },
								control: { type: 'number' },
							},
							alwaysShowFiltersButton: {
								defaultValue: !1,
								description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideFiltersButton: {
								defaultValue: !1,
								description: 'Hide the filters button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onFacetOptionClick: {
								description: 'Callback function for when a facet option is clicked',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onFacetOptionClick',
							},
							showSelectedCount: {
								description: 'shows the number of selected options within the facet headers',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSelectedCountParenthesis: {
								description: 'specifies if the parenthesis should render around the selected count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							showClearAllText: {
								description: 'specifies if the clear all text should render',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							clearAllText: {
								description: 'text to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Clear All' } },
								control: { type: 'text' },
							},
							clearAllIcon: {
								description: 'Icon to show in the clear all link',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								options: [...Object.keys(x.c)],
								control: { type: 'select' },
							},
							iconExpand: {
								defaultValue: 'angle-down',
								description: 'Icon for when facet is collapsed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(x.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								defaultValue: 'angle-up',
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(x.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							...d.F,
						},
					},
					E = f.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					_ = (y, { loaded: { controller: v } }) => (0, t.Y)(l.b, { ...y, controller: v });
				(_.loaders = [async () => (await E.search(), { controller: E })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: FacetsHorizontalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <FacetsHorizontal {...args} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const C = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(b, r, e) {
				'use strict';
				e.d(r, { B: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					d = e.n(O),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(f),
					A = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					P = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/snap.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					U = e('./components/src/hooks/useComponent.tsx'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const R = ({ horizontal: s }) =>
					(0, l.AH)({
						display: 'flex',
						flexDirection: s ? 'row' : 'column',
						alignItems: s ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: s ? 'row' : 'column',
							alignItems: s ? 'center' : void 0,
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
				function n(s) {
					const c = (0, E.u)(),
						p = (0, _.uk)(),
						M = { treePath: (0, C.LU)() },
						T = (0, v.v6)('list', c, M, s),
						{
							titleText: F,
							onSelect: K,
							native: W,
							multiSelect: Z,
							hideOptionLabels: X,
							hideOptionIcons: $,
							hideOptionCheckboxes: Q,
							disabled: z,
							hideTitleText: q,
							options: L,
							requireSelection: H,
							disableStyles: V,
							className: ee,
							internalClassName: te,
							treePath: k,
							customComponent: N,
						} = T;
					if (N) {
						const o = (0, U.x)(p?.templates?.library.import.component.list || {}, N);
						if (o) return (0, t.Y)(o, { ...T });
					}
					let g = T.selected;
					const Y = {
							checkbox: { native: W, ...(0, y.s)({ disableStyles: V }), theme: T?.theme, treePath: k },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, y.s)({ disableStyles: V }), theme: T?.theme, treePath: k },
						},
						oe = (0, I.Z)(T, R);
					g && !Array.isArray(g) && (g = [g]);
					const [D, J] = (0, m.J0)(g || []),
						[se] = (0, m.J0)(g || []);
					try {
						if (g) {
							const o = JSON.stringify(se),
								u = JSON.stringify(g),
								a = JSON.stringify(D);
							o !== u && u !== a && J(g);
						}
					} catch {}
					const ne = (o, u) => {
							let a;
							Z
								? D.find((w) => w.value === u.value)
									? ((a = [...D]),
									  a.splice(
											a.findIndex((w) => w.value === u.value),
											1
									  ),
									  a.length == 0 && H && (a = [u]))
									: (a = [...D, u])
								: !H && D.find((w) => w.value === u.value)
								? (a = [])
								: (a = [u]),
								K && K(o, u, a),
								J(a);
						},
						le = {},
						G = x()(le, T.lang || {}),
						re = (0, S.u)(G, { options: L, selectedOptions: D });
					return typeof L == 'object' && L?.length
						? (0, t.Y)(P._, {
								children: (0, t.FD)('div', {
									...oe,
									className: d()('ss__list', { 'ss__list--native': W, 'ss__list--disabled': z }, ee, te),
									children: [
										(F || G?.title?.value) && !q && (0, t.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: F }),
										(0, t.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': F,
											children: L.map((o) => {
												const u = D.some((a) => a.value == o.value);
												return (0, t.FD)('li', {
													className: d()(`ss__list__option ss__list__option--${A.p(o.value?.toString())}`, {
														'ss__list__option--selected': u,
														'ss__list__option--disabled': o?.disabled,
														'ss__list__option--unavailable': o?.available === !1,
													}),
													ref: (a) => (0, j.iy)(a),
													onClick: (a) => !z && !o?.disabled && ne(a, o),
													title: o.label,
													role: 'option',
													'aria-selected': u,
													'aria-disabled': o.disabled || o?.available === !1,
													children: [
														!Q && (0, t.Y)(h.S, { ...Y.checkbox, checked: u, disableA11y: !0, 'aria-label': o.label }),
														o.icon && !$ && (0, t.Y)(B.I, { ...Y.icon, ...(typeof o.icon == 'string' ? { icon: o.icon } : o.icon) }),
														!X && (o.label || !o.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: o.label || o.value }),
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
			'./components/src/types.ts'(b, r, e) {
				'use strict';
				e.d(r, { Q: () => m, V: () => t });
				var t = ((l) => ((l.grid = 'grid'), (l.list = 'list'), l))(t || {}),
					m = ((l) => (
						(l.GRID = 'grid'),
						(l.PALETTE = 'palette'),
						(l.LIST = 'list'),
						(l.SLIDER = 'slider'),
						(l.HIERARCHY = 'hierarchy'),
						(l.TOGGLE = 'toggle'),
						l
					))(m || {});
			},
			'./components/src/utilities/componentArgs.ts'(b, r, e) {
				'use strict';
				e.d(r, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(b, r, e) {
				'use strict';
				e.d(r, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					C = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					j = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(s) {
						const c = s.id;
						if (h[c]) return h[c];
						const p = (h[c] = B({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(s) {
						const c = s.id;
						if (h[c]) return h[c];
						const p = (h[c] = R({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							p.init(),
							p
						);
					}
					static search(s) {
						const c = s.id;
						if (h[c]) return h[c];
						const p = (h[c] = U({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: i }, M) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await M();
							}),
							p.init(),
							p
						);
					}
				}
				function U(n) {
					const s = new P.V(new _.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), E.X);
					return new m.Tp(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new x.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new C.E(),
						profiler: new y.U(),
						logger: new v.V(),
						tracker: new I.J(n.client.globals),
					});
				}
				function B(n) {
					const s = new P.V(new _.E(), E.X).detach(!0);
					return new O.c(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new A.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new C.E(),
						profiler: new y.U(),
						logger: new v.V(),
						tracker: new I.J(n.client.globals),
					});
				}
				function R(n) {
					const s = new P.V(new _.E(), E.X).detach();
					return new l.Z(n.controller, {
						client: new d.K(n.client.globals, n.client.config),
						store: new f.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new C.E(),
						profiler: new y.U(),
						logger: new v.V(),
						tracker: new I.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, r, e) {
				'use strict';
				e.d(r, { Z: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					O = (d) => {
						const f = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								f.current && d.className?.includes('lang-') && !d.className?.includes(l) && window?.Prism?.highlightElement(f.current);
							}, [d.className, d.children, f]),
							(0, t.Y)('code', { ...d, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function r(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (b.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.8d367aee.iframe.bundle.js.map
