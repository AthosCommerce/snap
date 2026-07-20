(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7583],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(W, y, e) {
				'use strict';
				const t = (c) => c.replace(/_/g, '-').toLowerCase();
				e.d(y, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(W, y, e) {
				'use strict';
				e.d(y, { p: () => t });
				function t(c) {
					if (typeof c != 'string') return c;
					let D = c.toLowerCase();
					return (D = D.replace(/[^\w\s]/g, '').trim()), (D = D.replace(/\s/g, '-')), D;
				}
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.stories.tsx'(W, y, e) {
				'use strict';
				e.r(y), e.d(y, { Default: () => s, __namedExportsOrder: () => a, default: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					D = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					S = e('./components/src/utilities/storybook.tsx'),
					O = e('./components/src/utilities/componentArgs.ts'),
					L = e('./components/src/utilities/snapify.ts');
				const U =
						"# Sidebar\n\nRenders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.\n\n\n## Components Used\n- FilterSummary\n- Facets\n- SortBy\n- PerPage\n\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Sidebar controller={controller} />\n```\n\n### layout \nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;\n\n```tsx\n<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>\n```\n\n### hideTitleText\nThe `hideTitleText` prop will disable the sidebar title from rendering.\n\n```tsx\n<Sidebar controller={controller} hideTitleText />\n```\n\n### titleText\nThe `titleText` prop will change the inner text of the sidebar title.\n\n```tsx\n<Sidebar controller={controller} titleText={'Filter By: '} />\n```\n\n### sticky\nThe `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.\n\n```tsx\n<Sidebar controller={controller} sticky={'true'} />\n```\n\n\n### stickyOffset\nThe `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.\n\n```tsx\n<Sidebar controller={controller} stickyOffset={50} />\n```",
					j = {
						title: 'Organisms/Sidebar',
						component: D.B,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: S.Z } }, children: U }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(_, {}) })],
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
							...O.F,
						},
					},
					r = L.p.search({ id: 'Sidebar', globals: { siteId: 'atkzs2' } }),
					s = (_, { loaded: { controller: E } }) => (0, t.Y)(D.B, { ..._, controller: E });
				(s.loaders = [async () => (await r.search(), { controller: r })]),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
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
								...s.parameters?.docs?.source,
							},
						},
					});
				const a = ['Default'];
			},
			'./components/src/components/Molecules/List/List.tsx'(W, y, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					S = e('../../node_modules/classnames/index.js'),
					O = e.n(S),
					L = e('../../node_modules/deepmerge/dist/cjs.js'),
					U = e.n(L),
					j = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					I = e('./components/src/hooks/useA11y.tsx'),
					A = e('./components/src/hooks/useLang.tsx'),
					H = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Z = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const N = ({ horizontal: d }) =>
						(0, D.AH)({
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
					v = (0, r.PA)((d) => {
						const M = (0, a.u)(),
							P = { treePath: (0, _.LU)() },
							w = (0, b.v6)('list', M, P, d),
							{
								titleText: V,
								onSelect: G,
								native: Q,
								multiSelect: ee,
								hideOptionLabels: te,
								hideOptionIcons: Y,
								hideOptionCheckboxes: oe,
								disabled: J,
								hideTitleText: $,
								options: X,
								requireSelection: ne,
								disableStyles: se,
								className: re,
								internalClassName: o,
								treePath: n,
							} = w,
							{ overrideElement: f, shouldRenderDefault: u } = (0, H._)('list', w);
						if (!u) return f;
						let l = w.selected;
						const h = {
								checkbox: { native: Q, ...(0, E.s)({ disableStyles: se }), theme: w?.theme, treePath: n },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, E.s)({ disableStyles: se }), theme: w?.theme, treePath: n },
							},
							T = (0, p.Z)(w, N);
						l && !Array.isArray(l) && (l = [l]);
						const [x, C] = (0, c.J0)(l || []),
							[B] = (0, c.J0)(l || []);
						try {
							if (l) {
								const g = JSON.stringify(B),
									k = JSON.stringify(l),
									m = JSON.stringify(x);
								g !== k && k !== m && C(l);
							}
						} catch {}
						const K = (g, k) => {
								let m;
								ee
									? x.find((q) => q.value === k.value)
										? ((m = [...x]),
										  m.splice(
												m.findIndex((q) => q.value === k.value),
												1
										  ),
										  m.length == 0 && ne && (m = [k]))
										: (m = [...x, k])
									: !ne && x.find((q) => q.value === k.value)
									? (m = [])
									: (m = [k]),
									G && G(g, k, m),
									C(m);
							},
							z = {},
							F = U()(z, w.lang || {}),
							ae = (0, A.u)(F, { options: X, selectedOptions: x });
						return typeof X == 'object' && X?.length
							? (0, t.Y)(s._, {
									children: (0, t.FD)('div', {
										...T,
										className: O()('ss__list', { 'ss__list--native': Q, 'ss__list--disabled': J }, re, o),
										children: [
											(V || F?.title?.value) && !$ && (0, t.Y)('h5', { className: 'ss__list__title', ...ae.title?.all, children: V }),
											(0, t.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': V,
												children: X.map((g) => {
													const k = x.some((m) => m.value == g.value);
													return (0, t.FD)('li', {
														className: O()(`ss__list__option ss__list__option--${j.p(g.value?.toString())}`, {
															'ss__list__option--selected': k,
															'ss__list__option--disabled': g?.disabled,
															'ss__list__option--unavailable': g?.available === !1,
														}),
														ref: (m) => (0, I.iy)(m),
														onClick: (m) => !J && !g?.disabled && K(m, g),
														title: g.label,
														role: 'option',
														'aria-selected': k,
														'aria-disabled': g.disabled || g?.available === !1,
														children: [
															!oe && (0, t.Y)(i.S, { ...h.checkbox, checked: k, disableA11y: !0, 'aria-label': g.label }),
															g.icon && !Y && (0, t.Y)(Z.I, { ...h.icon, ...(typeof g.icon == 'string' ? { icon: g.icon } : g.icon) }),
															!te &&
																(g.label || !g.icon) &&
																(0, t.Y)('label', { className: 'ss__list__option__label', children: g.label || g.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(y, ['B', 0, v]);
			},
			'./components/src/utilities/componentArgs.ts'(W, y, e) {
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
				e.d(y, ['F', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(W, y, e) {
				'use strict';
				e.d(y, { p: () => A });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					D = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					S = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					O = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					j = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					p = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					I = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(d) {
						const M = d.id;
						if (i[M]) return i[M];
						const R = (i[M] = Z({ client: I, controller: d }));
						return (
							R.on('afterStore', async ({ controller: P }, w) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(d) {
						const M = d.id;
						if (i[M]) return i[M];
						const R = (i[M] = N({ client: I, controller: d }));
						return (
							R.on('afterStore', async ({ controller: P }, w) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
					static search(d) {
						const M = d.id;
						if (i[M]) return i[M];
						const R = (i[M] = H({ client: I, controller: d }));
						return (
							R.on('afterStore', async ({ controller: P }, w) => {
								P.log.debug('controller', P), P.log.debug('store', P.store.toJSON()), await w();
							}),
							R.init(),
							R
						);
					}
				}
				function H(v) {
					const d = new r.V(new a.E({ settings: { coreType: 'query', corePrefix: v.controller.id } }), s.X);
					return new c.Tp(v.controller, {
						client: new O.K(v.client.globals, v.client.config),
						store: new U.U(v.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new p.J(v.client.globals),
					});
				}
				function Z(v) {
					const d = new r.V(new a.E(), s.X).detach(!0);
					return new S.c(v.controller, {
						client: new O.K(v.client.globals, v.client.config),
						store: new j.t(v.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new p.J(v.client.globals),
					});
				}
				function N(v) {
					const d = new r.V(new a.E(), s.X).detach();
					return new D.Z(v.controller, {
						client: new O.K(v.client.globals, v.client.config),
						store: new L.Y(v.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new b.V(),
						tracker: new p.J(v.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(W, y, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = 'prism-block',
					S = (O) => {
						const L = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								L.current && O.className?.includes('lang-') && !O.className?.includes(D) && window?.Prism?.highlightElement(L.current);
							}, [O.className, O.children, L]),
							(0, t.Y)('code', { ...O, ref: L, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(y, ['Z', 0, S]);
			},
			'../../node_modules/colord/plugins/names.mjs'(W, y, e) {
				'use strict';
				e.d(y, { A: () => t }), e.dn(t);
				function t(c, D) {
					var S = {
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
						O = {};
					for (var L in S) O[S[L]] = L;
					var U = {};
					(c.prototype.toName = function (j) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var r,
							s,
							a = O[this.toHex()];
						if (a) return a;
						if (j?.closest) {
							var _ = this.toRgb(),
								E = 1 / 0,
								b = 'black';
							if (!U.length) for (var p in S) U[p] = new c(S[p]).toRgb();
							for (var i in S) {
								var I = ((r = _), (s = U[i]), Math.pow(r.r - s.r, 2) + Math.pow(r.g - s.g, 2) + Math.pow(r.b - s.b, 2));
								I < E && ((E = I), (b = i));
							}
							return b;
						}
					}),
						D.string.push([
							function (j) {
								var r = j.toLowerCase(),
									s = r === 'transparent' ? '#0000' : S[r];
								return s ? new c(s).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(W) {
				function y(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(y.keys = () => []), (y.resolve = y), (y.id = '../../node_modules/memoizerific sync recursive'), (W.exports = y);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(W, y, e) {
				'use strict';
				e.d(y, { d: () => j });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function c() {
					return (
						(c =
							Object.assign ||
							function (r) {
								for (var s = 1; s < arguments.length; s++) {
									var a = arguments[s];
									for (var _ in a) Object.prototype.hasOwnProperty.call(a, _) && (r[_] = a[_]);
								}
								return r;
							}),
						c.apply(this, arguments)
					);
				}
				function D(r, s) {
					if (r == null) return {};
					var a = {},
						_ = Object.keys(r),
						E,
						b;
					for (b = 0; b < _.length; b++) (E = _[b]), !(s.indexOf(E) >= 0) && (a[E] = r[E]);
					return a;
				}
				var S = function (s) {
						var a = s.getBoundingClientRect();
						return { left: Math.ceil(a.left), width: Math.ceil(a.width) };
					},
					O = function (s) {
						return [].concat(s).sort(function (a, _) {
							return Number(a) - Number(_);
						});
					},
					L = function (s) {
						var a = t.default.useRef(s);
						return (
							(a.current = s),
							t.default.useCallback(function () {
								return a.current;
							}, [])
						);
					},
					U = {
						getPercentageForValue: function (s, a, _) {
							return Math.max(0, Math.min(100, ((s - a) / (_ - a)) * 100));
						},
						getValueForClientX: function (s, a, _, E) {
							var b = a.left,
								p = a.width,
								i = (s - b) / p,
								I = (E - _) * i;
							return I + _;
						},
					};
				function j(r) {
					var s = r.interpolator,
						a = s === void 0 ? U : s,
						_ = r.tickSize,
						E = _ === void 0 ? 10 : _,
						b = r.values,
						p = r.min,
						i = r.max,
						I = r.ticks,
						A = r.steps,
						H = r.onChange,
						Z = r.onDrag,
						N = r.stepSize,
						v = t.default.useState(null),
						d = v[0],
						M = v[1],
						R = t.default.useState(),
						P = R[0],
						w = R[1],
						V = L({ activeHandleIndex: d, onChange: H, onDrag: Z, values: b, tempValues: P }),
						G = t.default.useRef(),
						Q = t.default.useCallback(
							function (o) {
								var n = S(G.current);
								return a.getValueForClientX(o, n, p, i);
							},
							[a, i, p]
						),
						ee = t.default.useCallback(
							function (o, n) {
								if (A) {
									var f = A.indexOf(o),
										u = f + n;
									return u >= 0 && u < A.length ? A[u] : o;
								} else {
									var l = o + N * n;
									return l >= p && l <= i ? l : o;
								}
							},
							[i, p, N, A]
						),
						te = t.default.useCallback(
							function (o) {
								var n = p,
									f = i;
								if (A)
									A.forEach(function (u) {
										u <= o && u > n && (n = u), u >= o && u < f && (f = u);
									});
								else {
									for (; n < o && n + N < o; ) n += N;
									f = Math.min(n + N, i);
								}
								return o - n < f - o ? n : f;
							},
							[i, p, N, A]
						),
						Y = t.default.useCallback(
							function (o) {
								var n = V(),
									f = n.activeHandleIndex,
									u = n.onDrag,
									l = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									h = Q(l),
									T = te(h),
									x = [].concat(b.slice(0, f), [T], b.slice(f + 1));
								u ? u(x) : w(x);
							},
							[V, Q, te, b]
						),
						oe = t.default.useCallback(
							function (o, n) {
								var f = V(),
									u = f.values,
									l = f.onChange,
									h = l === void 0 ? function () {} : l;
								if (o.keyCode === 37 || o.keyCode === 39) {
									M(n);
									var T = o.keyCode === 37 ? -1 : 1,
										x = ee(u[n], T),
										C = [].concat(u.slice(0, n), [x], u.slice(n + 1)),
										B = O(C);
									h(B);
								}
							},
							[V, ee]
						),
						J = t.default.useCallback(
							function (o, n) {
								M(n);
								var f = function u(l) {
									var h = V(),
										T = h.tempValues,
										x = h.values,
										C = h.onChange,
										B = C === void 0 ? function () {} : C,
										K = h.onDrag,
										z = K === void 0 ? function () {} : K;
									document.removeEventListener('mousemove', Y),
										document.removeEventListener('touchmove', Y),
										document.removeEventListener('mouseup', u),
										document.removeEventListener('touchend', u);
									var F = O(T || x);
									B(F), z(F), M(null), w();
								};
								document.addEventListener('mousemove', Y),
									document.addEventListener('touchmove', Y),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[V, Y]
						),
						$ = t.default.useCallback(
							function (o) {
								return a.getPercentageForValue(o, p, i);
							},
							[a, i, p]
						),
						X = t.default.useMemo(
							function () {
								var o = I || A;
								if (!o) {
									for (o = [p]; o[o.length - 1] < i - E; ) o.push(o[o.length - 1] + E);
									o.push(i);
								}
								return o.map(function (n, f) {
									return {
										value: n,
										getTickProps: function (l) {
											var h = l === void 0 ? {} : l,
												T = h.key,
												x = T === void 0 ? f : T,
												C = h.style,
												B = C === void 0 ? {} : C,
												K = D(h, ['key', 'style']);
											return c({ key: x, style: c({ position: 'absolute', width: 0, left: $(n) + '%', transform: 'translateX(-50%)' }, B) }, K);
										},
									};
								});
							},
							[I, $, i, p, A, E]
						),
						ne = t.default.useMemo(
							function () {
								var o = O(P || b);
								return [].concat(o, [i]).map(function (n, f) {
									return {
										value: n,
										getSegmentProps: function (l) {
											var h = l === void 0 ? {} : l,
												T = h.key,
												x = T === void 0 ? f : T,
												C = h.style,
												B = C === void 0 ? {} : C,
												K = D(h, ['key', 'style']),
												z = $(o[f - 1] ? o[f - 1] : p),
												F = $(n) - z;
											return c({ key: x, style: c({ position: 'absolute', left: z + '%', width: F + '%' }, B) }, K);
										},
									};
								});
							},
							[$, i, p, P, b]
						),
						se = t.default.useMemo(
							function () {
								return (P || b).map(function (o, n) {
									return {
										value: o,
										active: n === d,
										getHandleProps: function (u) {
											var l = u === void 0 ? {} : u,
												h = l.key,
												T = h === void 0 ? n : h,
												x = l.ref,
												C = l.innerRef,
												B = l.onKeyDown,
												K = l.onMouseDown,
												z = l.onTouchStart,
												F = l.style,
												ae = F === void 0 ? {} : F,
												g = D(l, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return c(
												{
													key: T,
													onKeyDown: function (m) {
														m.persist(), oe(m, n), B && B(m);
													},
													onMouseDown: function (m) {
														m.persist(), J(m, n), K && K(m);
													},
													onTouchStart: function (m) {
														m.persist(), J(m, n), z && z(m);
													},
													role: 'slider',
													'aria-valuemin': p,
													'aria-valuemax': i,
													'aria-valuenow': o,
													style: c(
														{ position: 'absolute', top: '50%', left: $(o) + '%', zIndex: n === d ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ae
													),
												},
												g
											);
										},
									};
								});
							},
							[d, $, oe, J, p, i, P, b]
						),
						re = function (n) {
							var f = n === void 0 ? {} : n,
								u = f.style,
								l = u === void 0 ? {} : u,
								h = f.ref,
								T = D(f, ['style', 'ref']);
							return c(
								{
									ref: function (C) {
										(G.current = C), h && (typeof h == 'function' ? h(C) : (h.current = C));
									},
									style: c({ position: 'relative', userSelect: 'none' }, l),
								},
								T
							);
						};
					return { activeHandleIndex: d, getTrackProps: re, ticks: X, segments: ne, handles: se };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Sidebar-Sidebar-stories.93065374.iframe.bundle.js.map
