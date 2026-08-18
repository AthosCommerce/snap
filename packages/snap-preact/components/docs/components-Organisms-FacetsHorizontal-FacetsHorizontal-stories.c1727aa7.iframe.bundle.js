(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(F, p, e) {
				'use strict';
				const t = (r) => r.replace(/_/g, '-').toLowerCase();
				e.d(p, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(F, p, e) {
				'use strict';
				e.d(p, { p: () => t });
				function t(r) {
					if (typeof r != 'string') return r;
					let x = r.toLowerCase();
					return (x = x.replace(/[^\w\s]/g, '').trim()), (x = x.replace(/\s/g, '-')), x;
				}
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(F, p, e) {
				'use strict';
				e.r(p), e.d(p, { Default: () => n, __namedExportsOrder: () => h, default: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					x = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					P = e('./components/src/utilities/storybook.tsx'),
					T = e('./components/src/utilities/componentArgs.ts'),
					k = e('./components/src/utilities/snapify.ts'),
					I = e('./components/src/components/Atoms/Icon/paths.tsx');
				const j =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display.\n\n## Sub-components\n- Facet\n- Dropdown\n- Icon\n- Button\n- Slideout\n- Sidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and sidebar slideout.\n\n```tsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowToggleSidebarButton\nThe `alwaysShowToggleSidebarButton` prop will always render the sidebar-toggle button, not just when facets are overflowing.\n\n```tsx\n<FacetsHorizontal controller={controller} alwaysShowToggleSidebarButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideToggleSidebarButton\nThe `hideToggleSidebarButton` prop specifies whether the toggle sidebar button should be rendered or not. If not hidden, the button will render when there are more filters to show than the limit prop allows (unless the `alwaysShowToggleSidebarButton` prop is passed, which will ignore the limit). \n\n```tsx\n<FacetsHorizontal controller={controller} hideToggleSidebarButton={true}/>\n```\n\n### toggleSidebarButtonText\nThe `toggleSidebarButtonText` prop specifies the text displayed in the toggle sidebar button. Defaults to 'Filters'.\n\n```tsx\n<FacetsHorizontal controller={controller} toggleSidebarButtonText={'Filters'}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```tsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the FacetsHorizontal component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `dropdownButton` | Facet dropdown button text/attributes | `selectedFacet` (IndividualFacetType), `facet` (IndividualFacetType) |\n| `toggleSidebarButtonText` | Sidebar toggle button text | `facets` (IndividualFacetType[]), `sidebarOpenState` (boolean) |\n\n### Example\n\n```tsx\n<FacetsHorizontal\n	controller={controller}\n	lang={{\n		toggleSidebarButtonText: {\n			value: (data) => data.sidebarOpenState ? 'Hide Filters' : 'Show Filters',\n		},\n	}}\n/>\n```\n",
					s = {
						title: 'Organisms/FacetsHorizontal',
						component: x.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(r.oz, { options: { overrides: { code: P.Z } }, children: j }), (0, t.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(v, {}) })],
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
							alwaysShowToggleSidebarButton: {
								defaultValue: !1,
								description: 'Always render sidebar toggle button regardless of facet overflow set by limit prop',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideToggleSidebarButton: {
								defaultValue: !1,
								description: 'Hide the toggle sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							toggleSidebarButtonText: {
								defaultValue: 'Filters',
								description: 'Text to display in the toggle sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Filters' } },
								control: { type: 'text' },
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
								options: [...Object.keys(I.c)],
								control: { type: 'select' },
							},
							iconExpand: {
								description: 'Icon for when facet is collapsed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(I.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(I.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							...T.F,
						},
					},
					l = k.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					n = (v, { loaded: { controller: g } }) => (0, t.Y)(x.b, { ...v, controller: g });
				(n.loaders = [async () => (await l.search(), { controller: l })]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
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
								...n.parameters?.docs?.source,
							},
						},
					});
				const h = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					T = e.n(P),
					k = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(k),
					j = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/utilities/selectionKey.ts'),
					R = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					S = e('./components/src/hooks/useA11y.tsx'),
					J = e('./components/src/hooks/useLang.tsx'),
					Z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const E = ({ horizontal: b }) =>
						(0, x.AH)({
							display: 'flex',
							flexDirection: b ? 'row' : 'column',
							alignItems: b ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: b ? 'row' : 'column',
								alignItems: b ? 'center' : void 0,
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
						}),
					y = (0, s.PA)((b) => {
						const O = (0, n.u)(),
							z = { treePath: (0, h.LU)() },
							L = (0, g.v6)('list', O, z, b),
							{
								titleText: Y,
								onSelect: G,
								native: Q,
								multiSelect: te,
								hideOptionLabels: $,
								hideOptionIcons: oe,
								hideOptionCheckboxes: q,
								disabled: V,
								hideTitleText: le,
								options: X,
								requireSelection: ne,
								disableStyles: ae,
								className: o,
								internalClassName: a,
								treePath: u,
							} = L,
							{ overrideElement: m, shouldRenderDefault: f } = (0, Z._)('list', L);
						if (!f) return m;
						let d = L.selected;
						const D = {
								checkbox: { native: Q, ...(0, v.s)({ disableStyles: ae }), theme: L?.theme, treePath: u },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, v.s)({ disableStyles: ae }), theme: L?.theme, treePath: u },
							},
							A = (0, _.Z)(L, E);
						d && !Array.isArray(d) && (d = [d]);
						const [C, B] = (0, r.J0)(d || []),
							[K, H] = (0, r.J0)(() => (0, c.i)(d));
						if (d) {
							const i = (0, c.i)(d);
							i !== K && (H(i), B(d));
						}
						const N = (i, U) => {
								let M;
								te
									? C.find((ee) => ee.value === U.value)
										? ((M = [...C]),
										  M.splice(
												M.findIndex((ee) => ee.value === U.value),
												1
										  ),
										  M.length == 0 && ne && (M = [U]))
										: (M = [...C, U])
									: !ne && C.find((ee) => ee.value === U.value)
									? (M = [])
									: (M = [U]),
									G && G(i, U, M),
									B(M);
							},
							ie = {},
							se = I()(ie, L.lang || {}),
							re = (0, J.u)(se, { options: X, selectedOptions: C }, { activeBreakpoint: O?.activeBreakpoint });
						return typeof X == 'object' && X?.length
							? (0, t.Y)(l._, {
									children: (0, t.FD)('div', {
										...A,
										className: T()('ss__list', { 'ss__list--native': Q, 'ss__list--disabled': V }, o, a),
										children: [
											(Y || se?.title?.value) && !le && (0, t.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: Y }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': Y,
												children: X.map((i) => {
													const U = C.some((M) => M.value == i.value);
													return (0, t.FD)('li', {
														className: T()(`ss__list__option ss__list__option--${j.p(i.value?.toString())}`, {
															'ss__list__option--selected': U,
															'ss__list__option--disabled': i?.disabled,
															'ss__list__option--unavailable': i?.available === !1,
														}),
														ref: (M) => (0, S.iy)(M),
														onClick: (M) => !V && !i?.disabled && N(M, i),
														title: i.label,
														role: 'option',
														'aria-selected': U,
														'aria-disabled': i.disabled || i?.available === !1,
														children: [
															!q && (0, t.Y)(R.S, { ...D.checkbox, checked: U, disableA11y: !0, 'aria-label': i.label }),
															i.icon && !oe && (0, t.Y)(W.I, { ...D.icon, ...(typeof i.icon == 'string' ? { icon: i.icon } : i.icon) }),
															!$ && (i.label || !i.icon) && (0, t.Y)('label', { className: 'ss__list__option__label', children: i.label || i.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(p, ['B', 0, y]);
			},
			'./components/src/utilities/componentArgs.ts'(F, p, e) {
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
				e.d(p, ['F', 0, t]);
			},
			'./components/src/utilities/selectionKey.ts'(F, p, e) {
				'use strict';
				e.d(p, { i: () => t });
				function t(r) {
					return (r == null ? [] : Array.isArray(r) ? r : [r]).map((P) => `${P?.value}:${P?.label}`).join('|');
				}
			},
			'./components/src/utilities/snapify.ts'(F, p, e) {
				'use strict';
				e.d(p, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					x = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					T = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					k = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					j = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					l = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					_ = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const c = {},
					R = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(y) {
						const b = y.id;
						if (c[b]) return c[b];
						const O = (c[b] = Z({ client: R, controller: y }));
						return (
							O.on('afterStore', async ({ controller: w }, z) => {
								w.log.debug('controller', w), w.log.debug('store', w.store.toJSON()), await z();
							}),
							O.init(),
							O
						);
					}
					static autocomplete(y) {
						const b = y.id;
						if (c[b]) return c[b];
						const O = (c[b] = W({ client: R, controller: y }));
						return (
							O.on('afterStore', async ({ controller: w }, z) => {
								w.log.debug('controller', w), w.log.debug('store', w.store.toJSON()), await z();
							}),
							O.init(),
							O
						);
					}
					static search(y) {
						const b = y.id;
						if (c[b]) return c[b];
						const O = (c[b] = J({ client: R, controller: y }));
						return (
							O.on('afterStore', async ({ controller: w }, z) => {
								w.log.debug('controller', w), w.log.debug('store', w.store.toJSON()), await z();
							}),
							O.init(),
							O
						);
					}
				}
				function J(E) {
					const y = new s.V(new n.E({ settings: { coreType: 'query', corePrefix: E.controller.id } }), l.X);
					return new r.Tp(E.controller, {
						client: new T.K(E.client.globals, E.client.config),
						store: new I.U(E.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
				function Z(E) {
					const y = new s.V(new n.E(), l.X).detach(!0);
					return new P.c(E.controller, {
						client: new T.K(E.client.globals, E.client.config),
						store: new j.t(E.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
				function W(E) {
					const y = new s.V(new n.E(), l.X).detach();
					return new x.Z(E.controller, {
						client: new T.K(E.client.globals, E.client.config),
						store: new k.Y(E.controller, { urlManager: y }),
						urlManager: y,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(F, p, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const x = 'prism-block',
					P = (T) => {
						const k = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								k.current && T.className?.includes('lang-') && !T.className?.includes(x) && window?.Prism?.highlightElement(k.current);
							}, [T.className, T.children, k]),
							(0, t.Y)('code', { ...T, ref: k, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(p, ['Z', 0, P]);
			},
			'../../node_modules/colord/plugins/names.mjs'(F, p, e) {
				'use strict';
				e.d(p, { A: () => t }), e.dn(t);
				function t(r, x) {
					var P = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						T = {};
					for (var k in P) T[P[k]] = k;
					var I = {};
					(r.prototype.toName = function (j) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var s,
							l,
							n = T[this.toHex()];
						if (n) return n;
						if (j?.closest) {
							var h = this.toRgb(),
								v = 1 / 0,
								g = 'black';
							if (!I.length) for (var _ in P) I[_] = new r(P[_]).toRgb();
							for (var c in P) {
								var R = ((s = h), (l = I[c]), Math.pow(s.r - l.r, 2) + Math.pow(s.g - l.g, 2) + Math.pow(s.b - l.b, 2));
								R < v && ((v = R), (g = c));
							}
							return g;
						}
					}),
						x.string.push([
							function (j) {
								var s = j.toLowerCase(),
									l = s === 'transparent' ? '#0000' : P[s];
								return l ? new r(l).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(F) {
				function p(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (F.exports = p);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(F, p, e) {
				'use strict';
				e.d(p, { d: () => j });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function r() {
					return (
						(r =
							Object.assign ||
							function (s) {
								for (var l = 1; l < arguments.length; l++) {
									var n = arguments[l];
									for (var h in n) Object.prototype.hasOwnProperty.call(n, h) && (s[h] = n[h]);
								}
								return s;
							}),
						r.apply(this, arguments)
					);
				}
				function x(s, l) {
					if (s == null) return {};
					var n = {},
						h = Object.keys(s),
						v,
						g;
					for (g = 0; g < h.length; g++) (v = h[g]), !(l.indexOf(v) >= 0) && (n[v] = s[v]);
					return n;
				}
				var P = function (l) {
						var n = l.getBoundingClientRect();
						return { left: Math.ceil(n.left), width: Math.ceil(n.width) };
					},
					T = function (l) {
						return [].concat(l).sort(function (n, h) {
							return Number(n) - Number(h);
						});
					},
					k = function (l) {
						var n = t.default.useRef(l);
						return (
							(n.current = l),
							t.default.useCallback(function () {
								return n.current;
							}, [])
						);
					},
					I = {
						getPercentageForValue: function (l, n, h) {
							return Math.max(0, Math.min(100, ((l - n) / (h - n)) * 100));
						},
						getValueForClientX: function (l, n, h, v) {
							var g = n.left,
								_ = n.width,
								c = (l - g) / _,
								R = (v - h) * c;
							return R + h;
						},
					};
				function j(s) {
					var l = s.interpolator,
						n = l === void 0 ? I : l,
						h = s.tickSize,
						v = h === void 0 ? 10 : h,
						g = s.values,
						_ = s.min,
						c = s.max,
						R = s.ticks,
						S = s.steps,
						J = s.onChange,
						Z = s.onDrag,
						W = s.stepSize,
						E = t.default.useState(null),
						y = E[0],
						b = E[1],
						O = t.default.useState(),
						w = O[0],
						z = O[1],
						L = k({ activeHandleIndex: y, onChange: J, onDrag: Z, values: g, tempValues: w }),
						Y = t.default.useRef(),
						G = t.default.useCallback(
							function (o) {
								var a = P(Y.current);
								return n.getValueForClientX(o, a, _, c);
							},
							[n, c, _]
						),
						Q = t.default.useCallback(
							function (o, a) {
								if (S) {
									var u = S.indexOf(o),
										m = u + a;
									return m >= 0 && m < S.length ? S[m] : o;
								} else {
									var f = o + W * a;
									return f >= _ && f <= c ? f : o;
								}
							},
							[c, _, W, S]
						),
						te = t.default.useCallback(
							function (o) {
								var a = _,
									u = c;
								if (S)
									S.forEach(function (m) {
										m <= o && m > a && (a = m), m >= o && m < u && (u = m);
									});
								else {
									for (; a < o && a + W < o; ) a += W;
									u = Math.min(a + W, c);
								}
								return o - a < u - o ? a : u;
							},
							[c, _, W, S]
						),
						$ = t.default.useCallback(
							function (o) {
								var a = L(),
									u = a.activeHandleIndex,
									m = a.onDrag,
									f = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									d = G(f),
									D = te(d),
									A = [].concat(g.slice(0, u), [D], g.slice(u + 1));
								m ? m(A) : z(A);
							},
							[L, G, te, g]
						),
						oe = t.default.useCallback(
							function (o, a) {
								var u = L(),
									m = u.values,
									f = u.onChange,
									d = f === void 0 ? function () {} : f;
								if (o.keyCode === 37 || o.keyCode === 39) {
									b(a);
									var D = o.keyCode === 37 ? -1 : 1,
										A = Q(m[a], D),
										C = [].concat(m.slice(0, a), [A], m.slice(a + 1)),
										B = T(C);
									d(B);
								}
							},
							[L, Q]
						),
						q = t.default.useCallback(
							function (o, a) {
								b(a);
								var u = function m(f) {
									var d = L(),
										D = d.tempValues,
										A = d.values,
										C = d.onChange,
										B = C === void 0 ? function () {} : C,
										K = d.onDrag,
										H = K === void 0 ? function () {} : K;
									document.removeEventListener('mousemove', $),
										document.removeEventListener('touchmove', $),
										document.removeEventListener('mouseup', m),
										document.removeEventListener('touchend', m);
									var N = T(D || A);
									B(N), H(N), b(null), z();
								};
								document.addEventListener('mousemove', $),
									document.addEventListener('touchmove', $),
									document.addEventListener('mouseup', u),
									document.addEventListener('touchend', u);
							},
							[L, $]
						),
						V = t.default.useCallback(
							function (o) {
								return n.getPercentageForValue(o, _, c);
							},
							[n, c, _]
						),
						le = t.default.useMemo(
							function () {
								var o = R || S;
								if (!o) {
									for (o = [_]; o[o.length - 1] < c - v; ) o.push(o[o.length - 1] + v);
									o.push(c);
								}
								return o.map(function (a, u) {
									return {
										value: a,
										getTickProps: function (f) {
											var d = f === void 0 ? {} : f,
												D = d.key,
												A = D === void 0 ? u : D,
												C = d.style,
												B = C === void 0 ? {} : C,
												K = x(d, ['key', 'style']);
											return r({ key: A, style: r({ position: 'absolute', width: 0, left: V(a) + '%', transform: 'translateX(-50%)' }, B) }, K);
										},
									};
								});
							},
							[R, V, c, _, S, v]
						),
						X = t.default.useMemo(
							function () {
								var o = T(w || g);
								return [].concat(o, [c]).map(function (a, u) {
									return {
										value: a,
										getSegmentProps: function (f) {
											var d = f === void 0 ? {} : f,
												D = d.key,
												A = D === void 0 ? u : D,
												C = d.style,
												B = C === void 0 ? {} : C,
												K = x(d, ['key', 'style']),
												H = V(o[u - 1] ? o[u - 1] : _),
												N = V(a) - H;
											return r({ key: A, style: r({ position: 'absolute', left: H + '%', width: N + '%' }, B) }, K);
										},
									};
								});
							},
							[V, c, _, w, g]
						),
						ne = t.default.useMemo(
							function () {
								return (w || g).map(function (o, a) {
									return {
										value: o,
										active: a === y,
										getHandleProps: function (m) {
											var f = m === void 0 ? {} : m,
												d = f.key,
												D = d === void 0 ? a : d,
												A = f.ref,
												C = f.innerRef,
												B = f.onKeyDown,
												K = f.onMouseDown,
												H = f.onTouchStart,
												N = f.style,
												ie = N === void 0 ? {} : N,
												se = x(f, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return r(
												{
													key: D,
													onKeyDown: function (i) {
														i.persist(), oe(i, a), B && B(i);
													},
													onMouseDown: function (i) {
														i.persist(), q(i, a), K && K(i);
													},
													onTouchStart: function (i) {
														i.persist(), q(i, a), H && H(i);
													},
													role: 'slider',
													'aria-valuemin': _,
													'aria-valuemax': c,
													'aria-valuenow': o,
													style: r(
														{ position: 'absolute', top: '50%', left: V(o) + '%', zIndex: a === y ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ie
													),
												},
												se
											);
										},
									};
								});
							},
							[y, V, oe, q, _, c, w, g]
						),
						ae = function (a) {
							var u = a === void 0 ? {} : a,
								m = u.style,
								f = m === void 0 ? {} : m,
								d = u.ref,
								D = x(u, ['style', 'ref']);
							return r(
								{
									ref: function (C) {
										(Y.current = C), d && (typeof d == 'function' ? d(C) : (d.current = C));
									},
									style: r({ position: 'relative', userSelect: 'none' }, f),
								},
								D
							);
						};
					return { activeHandleIndex: y, getTrackProps: ae, ticks: le, segments: X, handles: ne };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.c1727aa7.iframe.bundle.js.map
