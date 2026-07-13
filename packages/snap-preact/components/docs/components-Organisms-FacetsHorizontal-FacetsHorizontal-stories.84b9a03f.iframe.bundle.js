(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1249],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(K, b, e) {
				'use strict';
				e.d(b, { P: () => t });
				const t = (c) => c.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(K, b, e) {
				'use strict';
				e.d(b, { p: () => t });
				function t(c) {
					if (typeof c != 'string') return c;
					let x = c.toLowerCase();
					return (x = x.replace(/[^\w\s]/g, '').trim()), (x = x.replace(/\s/g, '-')), x;
				}
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx'(K, b, e) {
				'use strict';
				e.r(b), e.d(b, { Default: () => s, __namedExportsOrder: () => h, default: () => a });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					x = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					k = e('./components/src/utilities/storybook.tsx'),
					w = e('./components/src/utilities/componentArgs.ts'),
					L = e('./components/src/utilities/snapify.ts'),
					R = e('./components/src/components/Atoms/Icon/paths.tsx');
				const B =
						"# FacetsHorizontal\n\nRenders all facets in a horizontal display.\n\n## Sub-components\n- Facet\n- Dropdown\n- Icon\n- Button\n- Slideout\n- Sidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```tsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and sidebar slideout.\n\n```tsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### showSelectedCount\nThe `showSelectedCount` prop shows the number of selected options within the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} />\n```\n\n### hideSelectedCountParenthesis\nThe `hideSelectedCountParenthesis` prop specifies if the parenthesis should render around the selected count in the facet header.\n\n```tsx\n<FacetsHorizontal controller={controller} hideSelectedCountParenthesis={true} />\n```\n\n### alwaysShowToggleSidebarButton\nThe `alwaysShowToggleSidebarButton` prop will always render the sidebar-toggle button, not just when facets are overflowing.\n\n```tsx\n<FacetsHorizontal controller={controller} alwaysShowToggleSidebarButton={true} />\n```\n\n### showClearAllText\nThe `showClearAllText` prop specifies if the clear all text should render.\n\n```tsx\n<FacetsHorizontal controller={controller} showSelectedCount={true} showClearAllText={true} />\n```\n\n\n### clearAllText\nThe `clearAllText` prop specifies the text displayed in the facet header when options are selected. Clicking it clears all currently selected options. Defaults to 'Clear All'\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllText={'Clear All'} />\n```\n\n\n### clearAllIcon\nThe `clearAllIcon` prop specifies the icon displayed in the facet header when options are selected. Clicking it clears all currently selected options.\n\n```tsx\n<FacetsHorizontal controller={controller} clearAllIcon={'ban'} />\n```\n\n### hideToggleSidebarButton\nThe `hideToggleSidebarButton` prop specifies whether the toggle sidebar button should be rendered or not. If not hidden, the button will render when there are more filters to show than the limit prop allows (unless the `alwaysShowToggleSidebarButton` prop is passed, which will ignore the limit). \n\n```tsx\n<FacetsHorizontal controller={controller} hideToggleSidebarButton={true}/>\n```\n\n### toggleSidebarButtonText\nThe `toggleSidebarButtonText` prop specifies the text displayed in the toggle sidebar button. Defaults to 'Filters'.\n\n```tsx\n<FacetsHorizontal controller={controller} toggleSidebarButtonText={'Filters'}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` callback function for when a facet option is clicked. \n\n```tsx\n<FacetsHorizontal controller={controller} onFacetOptionClick={clickfunc}/>\n```",
					a = {
						title: 'Organisms/FacetsHorizontal',
						component: x.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: k.Z } }, children: B }), (0, t.Y)(c.uY, { story: c.h1 })],
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
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							iconExpand: {
								description: 'Icon for when facet is collapsed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							iconCollapse: {
								description: 'Icon for when facet is expanded',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
								options: [...Object.keys(R.c)],
								control: { type: 'select' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Controller object' } },
								control: { type: 'none' },
							},
							...w.F,
						},
					},
					r = L.p.search({ id: 'FacetsHorizontal', globals: { siteId: 'atkzs2' } }),
					s = (v, { loaded: { controller: g } }) => (0, t.Y)(x.b, { ...v, controller: g });
				(s.loaders = [async () => (await r.search(), { controller: r })]),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
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
								...s.parameters?.docs?.source,
							},
						},
					});
				const h = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(K, b, e) {
				'use strict';
				e.d(b, { B: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					k = e('../../node_modules/classnames/index.js'),
					w = e.n(k),
					L = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(L),
					B = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					j = e('./components/src/hooks/useA11y.tsx'),
					I = e('./components/src/hooks/useLang.tsx'),
					X = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Z = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const W = ({ horizontal: d }) =>
						(0, x.AH)({
							display: 'flex',
							flexDirection: d ? 'row' : 'column',
							alignItems: d ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: d ? 'row' : 'column',
								alignItems: d ? 'center' : void 0,
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
					E = (0, a.PA)((d) => {
						const P = (0, s.u)(),
							C = { treePath: (0, h.LU)() },
							S = (0, g.v6)('list', P, C, d),
							{
								titleText: V,
								onSelect: G,
								native: Q,
								multiSelect: ee,
								hideOptionLabels: te,
								hideOptionIcons: $,
								hideOptionCheckboxes: oe,
								disabled: Y,
								hideTitleText: H,
								options: J,
								requireSelection: ne,
								disableStyles: se,
								className: ae,
								internalClassName: o,
								treePath: n,
							} = S,
							{ overrideElement: f, shouldRenderDefault: u } = (0, X._)('list', S);
						if (!u) return f;
						let l = S.selected;
						const p = {
								checkbox: { native: Q, ...(0, v.s)({ disableStyles: se }), theme: S?.theme, treePath: n },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, v.s)({ disableStyles: se }), theme: S?.theme, treePath: n },
							},
							O = (0, _.Z)(S, W);
						l && !Array.isArray(l) && (l = [l]);
						const [T, D] = (0, c.J0)(l || []),
							[F] = (0, c.J0)(l || []);
						try {
							if (l) {
								const y = JSON.stringify(F),
									M = JSON.stringify(l),
									m = JSON.stringify(T);
								y !== M && M !== m && D(l);
							}
						} catch {}
						const U = (y, M) => {
								let m;
								ee
									? T.find((q) => q.value === M.value)
										? ((m = [...T]),
										  m.splice(
												m.findIndex((q) => q.value === M.value),
												1
										  ),
										  m.length == 0 && ne && (m = [M]))
										: (m = [...T, M])
									: !ne && T.find((q) => q.value === M.value)
									? (m = [])
									: (m = [M]),
									G && G(y, M, m),
									D(m);
							},
							N = {},
							z = R()(N, S.lang || {}),
							re = (0, I.u)(z, { options: J, selectedOptions: T });
						return typeof J == 'object' && J?.length
							? (0, t.Y)(r._, {
									children: (0, t.FD)('div', {
										...O,
										className: w()('ss__list', { 'ss__list--native': Q, 'ss__list--disabled': Y }, ae, o),
										children: [
											(V || z?.title?.value) && !H && (0, t.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: V }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': V,
												children: J.map((y) => {
													const M = T.some((m) => m.value == y.value);
													return (0, t.FD)('li', {
														className: w()(`ss__list__option ss__list__option--${B.p(y.value?.toString())}`, {
															'ss__list__option--selected': M,
															'ss__list__option--disabled': y?.disabled,
															'ss__list__option--unavailable': y?.available === !1,
														}),
														ref: (m) => (0, j.iy)(m),
														onClick: (m) => !Y && !y?.disabled && U(m, y),
														title: y.label,
														role: 'option',
														'aria-selected': M,
														'aria-disabled': y.disabled || y?.available === !1,
														children: [
															!oe && (0, t.Y)(i.S, { ...p.checkbox, checked: M, disableA11y: !0, 'aria-label': y.label }),
															y.icon && !$ && (0, t.Y)(Z.I, { ...p.icon, ...(typeof y.icon == 'string' ? { icon: y.icon } : y.icon) }),
															!te &&
																(y.label || !y.icon) &&
																(0, t.Y)('label', { className: 'ss__list__option__label', children: y.label || y.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(K, b, e) {
				'use strict';
				e.d(b, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(K, b, e) {
				'use strict';
				e.d(b, { p: () => I });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					x = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					k = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					w = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					_ = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					j = { globals: { siteId: 'atkzs2' } };
				class I {
					static recommendation(d) {
						const P = d.id;
						if (i[P]) return i[P];
						const A = (i[P] = Z({ client: j, controller: d }));
						return (
							A.on('afterStore', async ({ controller: C }, S) => {
								C.log.debug('controller', C), C.log.debug('store', C.store.toJSON()), await S();
							}),
							A.init(),
							A
						);
					}
					static autocomplete(d) {
						const P = d.id;
						if (i[P]) return i[P];
						const A = (i[P] = W({ client: j, controller: d }));
						return (
							A.on('afterStore', async ({ controller: C }, S) => {
								C.log.debug('controller', C), C.log.debug('store', C.store.toJSON()), await S();
							}),
							A.init(),
							A
						);
					}
					static search(d) {
						const P = d.id;
						if (i[P]) return i[P];
						const A = (i[P] = X({ client: j, controller: d }));
						return (
							A.on('afterStore', async ({ controller: C }, S) => {
								C.log.debug('controller', C), C.log.debug('store', C.store.toJSON()), await S();
							}),
							A.init(),
							A
						);
					}
				}
				function X(E) {
					const d = new a.V(new s.E({ settings: { coreType: 'query', corePrefix: E.controller.id } }), r.X);
					return new c.Tp(E.controller, {
						client: new w.K(E.client.globals, E.client.config),
						store: new R.U(E.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
				function Z(E) {
					const d = new a.V(new s.E(), r.X).detach(!0);
					return new k.c(E.controller, {
						client: new w.K(E.client.globals, E.client.config),
						store: new B.t(E.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
				function W(E) {
					const d = new a.V(new s.E(), r.X).detach();
					return new x.Z(E.controller, {
						client: new w.K(E.client.globals, E.client.config),
						store: new L.Y(E.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new h.E(),
						profiler: new v.U(),
						logger: new g.V(),
						tracker: new _.J(E.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(K, b, e) {
				'use strict';
				e.d(b, { Z: () => k });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const x = 'prism-block',
					k = (w) => {
						const L = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								L.current && w.className?.includes('lang-') && !w.className?.includes(x) && window?.Prism?.highlightElement(L.current);
							}, [w.className, w.children, L]),
							(0, t.Y)('code', { ...w, ref: L, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(K, b, e) {
				'use strict';
				e.d(b, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(c, x) {
					var k = {
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
						w = {};
					for (var L in k) w[k[L]] = L;
					var R = {};
					(c.prototype.toName = function (B) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var a,
							r,
							s = w[this.toHex()];
						if (s) return s;
						if (B?.closest) {
							var h = this.toRgb(),
								v = 1 / 0,
								g = 'black';
							if (!R.length) for (var _ in k) R[_] = new c(k[_]).toRgb();
							for (var i in k) {
								var j = ((a = h), (r = R[i]), Math.pow(a.r - r.r, 2) + Math.pow(a.g - r.g, 2) + Math.pow(a.b - r.b, 2));
								j < v && ((v = j), (g = i));
							}
							return g;
						}
					}),
						x.string.push([
							function (B) {
								var a = B.toLowerCase(),
									r = a === 'transparent' ? '#0000' : k[a];
								return r ? new c(r).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(K) {
				function b(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(b.keys = () => []), (b.resolve = b), (b.id = '../../node_modules/memoizerific sync recursive'), (K.exports = b);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(K, b, e) {
				'use strict';
				e.d(b, { d: () => B });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function c() {
					return (
						(c =
							Object.assign ||
							function (a) {
								for (var r = 1; r < arguments.length; r++) {
									var s = arguments[r];
									for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && (a[h] = s[h]);
								}
								return a;
							}),
						c.apply(this, arguments)
					);
				}
				function x(a, r) {
					if (a == null) return {};
					var s = {},
						h = Object.keys(a),
						v,
						g;
					for (g = 0; g < h.length; g++) (v = h[g]), !(r.indexOf(v) >= 0) && (s[v] = a[v]);
					return s;
				}
				var k = function (r) {
						var s = r.getBoundingClientRect();
						return { left: Math.ceil(s.left), width: Math.ceil(s.width) };
					},
					w = function (r) {
						return [].concat(r).sort(function (s, h) {
							return Number(s) - Number(h);
						});
					},
					L = function (r) {
						var s = t.default.useRef(r);
						return (
							(s.current = r),
							t.default.useCallback(function () {
								return s.current;
							}, [])
						);
					},
					R = {
						getPercentageForValue: function (r, s, h) {
							return Math.max(0, Math.min(100, ((r - s) / (h - s)) * 100));
						},
						getValueForClientX: function (r, s, h, v) {
							var g = s.left,
								_ = s.width,
								i = (r - g) / _,
								j = (v - h) * i;
							return j + h;
						},
					};
				function B(a) {
					var r = a.interpolator,
						s = r === void 0 ? R : r,
						h = a.tickSize,
						v = h === void 0 ? 10 : h,
						g = a.values,
						_ = a.min,
						i = a.max,
						j = a.ticks,
						I = a.steps,
						X = a.onChange,
						Z = a.onDrag,
						W = a.stepSize,
						E = t.default.useState(null),
						d = E[0],
						P = E[1],
						A = t.default.useState(),
						C = A[0],
						S = A[1],
						V = L({ activeHandleIndex: d, onChange: X, onDrag: Z, values: g, tempValues: C }),
						G = t.default.useRef(),
						Q = t.default.useCallback(
							function (o) {
								var n = k(G.current);
								return s.getValueForClientX(o, n, _, i);
							},
							[s, i, _]
						),
						ee = t.default.useCallback(
							function (o, n) {
								if (I) {
									var f = I.indexOf(o),
										u = f + n;
									return u >= 0 && u < I.length ? I[u] : o;
								} else {
									var l = o + W * n;
									return l >= _ && l <= i ? l : o;
								}
							},
							[i, _, W, I]
						),
						te = t.default.useCallback(
							function (o) {
								var n = _,
									f = i;
								if (I)
									I.forEach(function (u) {
										u <= o && u > n && (n = u), u >= o && u < f && (f = u);
									});
								else {
									for (; n < o && n + W < o; ) n += W;
									f = Math.min(n + W, i);
								}
								return o - n < f - o ? n : f;
							},
							[i, _, W, I]
						),
						$ = t.default.useCallback(
							function (o) {
								var n = V(),
									f = n.activeHandleIndex,
									u = n.onDrag,
									l = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									p = Q(l),
									O = te(p),
									T = [].concat(g.slice(0, f), [O], g.slice(f + 1));
								u ? u(T) : S(T);
							},
							[V, Q, te, g]
						),
						oe = t.default.useCallback(
							function (o, n) {
								var f = V(),
									u = f.values,
									l = f.onChange,
									p = l === void 0 ? function () {} : l;
								if (o.keyCode === 37 || o.keyCode === 39) {
									P(n);
									var O = o.keyCode === 37 ? -1 : 1,
										T = ee(u[n], O),
										D = [].concat(u.slice(0, n), [T], u.slice(n + 1)),
										F = w(D);
									p(F);
								}
							},
							[V, ee]
						),
						Y = t.default.useCallback(
							function (o, n) {
								P(n);
								var f = function u(l) {
									var p = V(),
										O = p.tempValues,
										T = p.values,
										D = p.onChange,
										F = D === void 0 ? function () {} : D,
										U = p.onDrag,
										N = U === void 0 ? function () {} : U;
									document.removeEventListener('mousemove', $),
										document.removeEventListener('touchmove', $),
										document.removeEventListener('mouseup', u),
										document.removeEventListener('touchend', u);
									var z = w(O || T);
									F(z), N(z), P(null), S();
								};
								document.addEventListener('mousemove', $),
									document.addEventListener('touchmove', $),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[V, $]
						),
						H = t.default.useCallback(
							function (o) {
								return s.getPercentageForValue(o, _, i);
							},
							[s, i, _]
						),
						J = t.default.useMemo(
							function () {
								var o = j || I;
								if (!o) {
									for (o = [_]; o[o.length - 1] < i - v; ) o.push(o[o.length - 1] + v);
									o.push(i);
								}
								return o.map(function (n, f) {
									return {
										value: n,
										getTickProps: function (l) {
											var p = l === void 0 ? {} : l,
												O = p.key,
												T = O === void 0 ? f : O,
												D = p.style,
												F = D === void 0 ? {} : D,
												U = x(p, ['key', 'style']);
											return c({ key: T, style: c({ position: 'absolute', width: 0, left: H(n) + '%', transform: 'translateX(-50%)' }, F) }, U);
										},
									};
								});
							},
							[j, H, i, _, I, v]
						),
						ne = t.default.useMemo(
							function () {
								var o = w(C || g);
								return [].concat(o, [i]).map(function (n, f) {
									return {
										value: n,
										getSegmentProps: function (l) {
											var p = l === void 0 ? {} : l,
												O = p.key,
												T = O === void 0 ? f : O,
												D = p.style,
												F = D === void 0 ? {} : D,
												U = x(p, ['key', 'style']),
												N = H(o[f - 1] ? o[f - 1] : _),
												z = H(n) - N;
											return c({ key: T, style: c({ position: 'absolute', left: N + '%', width: z + '%' }, F) }, U);
										},
									};
								});
							},
							[H, i, _, C, g]
						),
						se = t.default.useMemo(
							function () {
								return (C || g).map(function (o, n) {
									return {
										value: o,
										active: n === d,
										getHandleProps: function (u) {
											var l = u === void 0 ? {} : u,
												p = l.key,
												O = p === void 0 ? n : p,
												T = l.ref,
												D = l.innerRef,
												F = l.onKeyDown,
												U = l.onMouseDown,
												N = l.onTouchStart,
												z = l.style,
												re = z === void 0 ? {} : z,
												y = x(l, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return c(
												{
													key: O,
													onKeyDown: function (m) {
														m.persist(), oe(m, n), F && F(m);
													},
													onMouseDown: function (m) {
														m.persist(), Y(m, n), U && U(m);
													},
													onTouchStart: function (m) {
														m.persist(), Y(m, n), N && N(m);
													},
													role: 'slider',
													'aria-valuemin': _,
													'aria-valuemax': i,
													'aria-valuenow': o,
													style: c(
														{ position: 'absolute', top: '50%', left: H(o) + '%', zIndex: n === d ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												y
											);
										},
									};
								});
							},
							[d, H, oe, Y, _, i, C, g]
						),
						ae = function (n) {
							var f = n === void 0 ? {} : n,
								u = f.style,
								l = u === void 0 ? {} : u,
								p = f.ref,
								O = x(f, ['style', 'ref']);
							return c(
								{
									ref: function (D) {
										(G.current = D), p && (typeof p == 'function' ? p(D) : (p.current = D));
									},
									style: c({ position: 'relative', userSelect: 'none' }, l),
								},
								O
							);
						};
					return { activeHandleIndex: d, getTrackProps: ae, ticks: J, segments: ne, handles: se };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-FacetsHorizontal-FacetsHorizontal-stories.84b9a03f.iframe.bundle.js.map
