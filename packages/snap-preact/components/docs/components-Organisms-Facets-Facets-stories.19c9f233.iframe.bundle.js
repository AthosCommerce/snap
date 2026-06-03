(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6721],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(A, p, e) {
				'use strict';
				e.d(p, { P: () => t });
				const t = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(A, p, e) {
				'use strict';
				e.d(p, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let c = l.toLowerCase();
					return (c = c.replace(/[^\w\s]/g, '').trim()), (c = c.replace(/\s/g, '-')), c;
				}
			},
			'./components/src/components/Organisms/Facets/Facets.stories.tsx'(A, p, e) {
				'use strict';
				e.r(p), e.d(p, { Default: () => n, __namedExportsOrder: () => a, default: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					M = e('./components/src/utilities/storybook.tsx'),
					C = e('./components/src/utilities/componentArgs.ts'),
					D = e('./components/src/utilities/snapify.ts');
				const I =
						"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```tsx\nimport { Facets } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
					x = {
						title: 'Organisms/Facets',
						component: c.J,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: M.Z } }, children: I }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, t.Y)('div', { style: { maxWidth: '300px' }, children: (0, t.Y)(d, {}) })],
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
							...C.F,
						},
					},
					r = D.p.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
					n = (d, { loaded: { controller: P } }) => (0, t.Y)(c.J, { ...d, controller: P });
				(n.loaders = [async () => (await r.search(), { controller: r })]),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
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
								...n.parameters?.docs?.source,
							},
						},
					});
				const a = ['Default'];
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(A, p, e) {
				'use strict';
				e.d(p, { J: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					M = e.n(c),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(C),
					I = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					r = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/snap.tsx'),
					d = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useComponent.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts');
				const R = () => (0, l.AH)({}),
					T = (0, I.PA)((H) => {
						const Y = (0, n.u)(),
							K = (0, a.uk)(),
							y = (0, d.LU)(),
							h = { facets: H.controller?.store?.facets, treePath: y };
						let u = (0, _.v6)('facets', Y, h, H);
						const {
							limit: O,
							onFacetOptionClick: E,
							disableStyles: S,
							className: N,
							internalClassName: Z,
							controller: X,
							treePath: Q,
							customComponent: J,
						} = u;
						if (J) {
							const B = (0, P.x)(K?.templates?.library.import.component.facets || {}, J);
							if (B) return (0, t.Y)(B, { ...u });
						}
						const F = (B) => {
								E && E(B), X?.setFocused && X?.setFocused();
							},
							q = {
								components: {
									facetGridOptions: { onClick: F },
									facetHierarchyOptions: { onClick: F },
									facetListOptions: { onClick: F },
									facetPaletteOptions: { onClick: F },
								},
							},
							G = D()(q, u?.theme || {}, { arrayMerge: (B, oe) => oe });
						u = { ...u, theme: G };
						let { facets: L } = u;
						O && L && O > 0 && (L = L.slice(0, +O));
						const ee = { facet: { internalClassName: 'ss__facets__facet', ...(0, v.s)({ disableStyles: S }), theme: u.theme, treePath: Q } },
							te = (0, i.Z)(u, R);
						return L && L?.length > 0
							? (0, t.Y)(r._, {
									children: (0, t.Y)('div', {
										className: M()('ss__facets', N, Z),
										...te,
										children: L.map((B) => (0, t.Y)(x.s, { ...ee.facet, facet: B }, B.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(A, p, e) {
				'use strict';
				e.d(p, { Q: () => l, V: () => t });
				var t = ((c) => ((c.grid = 'grid'), (c.list = 'list'), c))(t || {}),
					l = ((c) => (
						(c.GRID = 'grid'),
						(c.PALETTE = 'palette'),
						(c.LIST = 'list'),
						(c.SLIDER = 'slider'),
						(c.HIERARCHY = 'hierarchy'),
						(c.TOGGLE = 'toggle'),
						c
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(A, p, e) {
				'use strict';
				e.d(p, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(A, p, e) {
				'use strict';
				e.d(p, { p: () => T });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					M = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					C = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					_ = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					R = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(h) {
						const u = h.id;
						if (i[u]) return i[u];
						const O = (i[u] = Y({ client: R, controller: h }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
					static autocomplete(h) {
						const u = h.id;
						if (i[u]) return i[u];
						const O = (i[u] = K({ client: R, controller: h }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
					static search(h) {
						const u = h.id;
						if (i[u]) return i[u];
						const O = (i[u] = H({ client: R, controller: h }));
						return (
							O.on('afterStore', async ({ controller: E }, S) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await S();
							}),
							O.init(),
							O
						);
					}
				}
				function H(y) {
					const h = new r.V(new a.E({ settings: { coreType: 'query', corePrefix: y.controller.id } }), n.X);
					return new l.Tp(y.controller, {
						client: new C.K(y.client.globals, y.client.config),
						store: new I.U(y.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new d.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new _.J(y.client.globals),
					});
				}
				function Y(y) {
					const h = new r.V(new a.E(), n.X).detach(!0);
					return new M.c(y.controller, {
						client: new C.K(y.client.globals, y.client.config),
						store: new x.t(y.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new d.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new _.J(y.client.globals),
					});
				}
				function K(y) {
					const h = new r.V(new a.E(), n.X).detach();
					return new c.Z(y.controller, {
						client: new C.K(y.client.globals, y.client.config),
						store: new D.Y(y.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new d.E(),
						profiler: new P.U(),
						logger: new v.V(),
						tracker: new _.J(y.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(A, p, e) {
				'use strict';
				e.d(p, { Z: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					M = (C) => {
						const D = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								D.current && C.className?.includes('lang-') && !C.className?.includes(c) && window?.Prism?.highlightElement(D.current);
							}, [C.className, C.children, D]),
							(0, t.Y)('code', { ...C, ref: D, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(A, p, e) {
				'use strict';
				e.d(p, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(l, c) {
					var M = {
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
						C = {};
					for (var D in M) C[M[D]] = D;
					var I = {};
					(l.prototype.toName = function (x) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var r,
							n,
							a = C[this.toHex()];
						if (a) return a;
						if (x?.closest) {
							var d = this.toRgb(),
								P = 1 / 0,
								v = 'black';
							if (!I.length) for (var _ in M) I[_] = new l(M[_]).toRgb();
							for (var i in M) {
								var R = ((r = d), (n = I[i]), Math.pow(r.r - n.r, 2) + Math.pow(r.g - n.g, 2) + Math.pow(r.b - n.b, 2));
								R < P && ((P = R), (v = i));
							}
							return v;
						}
					}),
						c.string.push([
							function (x) {
								var r = x.toLowerCase(),
									n = r === 'transparent' ? '#0000' : M[r];
								return n ? new l(n).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(A) {
				function p(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (A.exports = p);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(A, p, e) {
				'use strict';
				e.d(p, { d: () => x });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function l() {
					return (
						(l =
							Object.assign ||
							function (r) {
								for (var n = 1; n < arguments.length; n++) {
									var a = arguments[n];
									for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (r[d] = a[d]);
								}
								return r;
							}),
						l.apply(this, arguments)
					);
				}
				function c(r, n) {
					if (r == null) return {};
					var a = {},
						d = Object.keys(r),
						P,
						v;
					for (v = 0; v < d.length; v++) (P = d[v]), !(n.indexOf(P) >= 0) && (a[P] = r[P]);
					return a;
				}
				var M = function (n) {
						var a = n.getBoundingClientRect();
						return { left: Math.ceil(a.left), width: Math.ceil(a.width) };
					},
					C = function (n) {
						return [].concat(n).sort(function (a, d) {
							return Number(a) - Number(d);
						});
					},
					D = function (n) {
						var a = t.default.useRef(n);
						return (
							(a.current = n),
							t.default.useCallback(function () {
								return a.current;
							}, [])
						);
					},
					I = {
						getPercentageForValue: function (n, a, d) {
							return Math.max(0, Math.min(100, ((n - a) / (d - a)) * 100));
						},
						getValueForClientX: function (n, a, d, P) {
							var v = a.left,
								_ = a.width,
								i = (n - v) / _,
								R = (P - d) * i;
							return R + d;
						},
					};
				function x(r) {
					var n = r.interpolator,
						a = n === void 0 ? I : n,
						d = r.tickSize,
						P = d === void 0 ? 10 : d,
						v = r.values,
						_ = r.min,
						i = r.max,
						R = r.ticks,
						T = r.steps,
						H = r.onChange,
						Y = r.onDrag,
						K = r.stepSize,
						y = t.default.useState(null),
						h = y[0],
						u = y[1],
						O = t.default.useState(),
						E = O[0],
						S = O[1],
						N = D({ activeHandleIndex: h, onChange: H, onDrag: Y, values: v, tempValues: E }),
						Z = t.default.useRef(),
						X = t.default.useCallback(
							function (o) {
								var s = M(Z.current);
								return a.getValueForClientX(o, s, _, i);
							},
							[a, i, _]
						),
						Q = t.default.useCallback(
							function (o, s) {
								if (T) {
									var f = T.indexOf(o),
										m = f + s;
									return m >= 0 && m < T.length ? T[m] : o;
								} else {
									var g = o + K * s;
									return g >= _ && g <= i ? g : o;
								}
							},
							[i, _, K, T]
						),
						J = t.default.useCallback(
							function (o) {
								var s = _,
									f = i;
								if (T)
									T.forEach(function (m) {
										m <= o && m > s && (s = m), m >= o && m < f && (f = m);
									});
								else {
									for (; s < o && s + K < o; ) s += K;
									f = Math.min(s + K, i);
								}
								return o - s < f - o ? s : f;
							},
							[i, _, K, T]
						),
						F = t.default.useCallback(
							function (o) {
								var s = N(),
									f = s.activeHandleIndex,
									m = s.onDrag,
									g = o.type === 'touchmove' ? o.changedTouches[0].clientX : o.clientX,
									b = X(g),
									k = J(b),
									j = [].concat(v.slice(0, f), [k], v.slice(f + 1));
								m ? m(j) : S(j);
							},
							[N, X, J, v]
						),
						q = t.default.useCallback(
							function (o, s) {
								var f = N(),
									m = f.values,
									g = f.onChange,
									b = g === void 0 ? function () {} : g;
								if (o.keyCode === 37 || o.keyCode === 39) {
									u(s);
									var k = o.keyCode === 37 ? -1 : 1,
										j = Q(m[s], k),
										w = [].concat(m.slice(0, s), [j], m.slice(s + 1)),
										W = C(w);
									b(W);
								}
							},
							[N, Q]
						),
						G = t.default.useCallback(
							function (o, s) {
								u(s);
								var f = function m(g) {
									var b = N(),
										k = b.tempValues,
										j = b.values,
										w = b.onChange,
										W = w === void 0 ? function () {} : w,
										V = b.onDrag,
										z = V === void 0 ? function () {} : V;
									document.removeEventListener('mousemove', F),
										document.removeEventListener('touchmove', F),
										document.removeEventListener('mouseup', m),
										document.removeEventListener('touchend', m);
									var $ = C(k || j);
									W($), z($), u(null), S();
								};
								document.addEventListener('mousemove', F),
									document.addEventListener('touchmove', F),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[N, F]
						),
						L = t.default.useCallback(
							function (o) {
								return a.getPercentageForValue(o, _, i);
							},
							[a, i, _]
						),
						ee = t.default.useMemo(
							function () {
								var o = R || T;
								if (!o) {
									for (o = [_]; o[o.length - 1] < i - P; ) o.push(o[o.length - 1] + P);
									o.push(i);
								}
								return o.map(function (s, f) {
									return {
										value: s,
										getTickProps: function (g) {
											var b = g === void 0 ? {} : g,
												k = b.key,
												j = k === void 0 ? f : k,
												w = b.style,
												W = w === void 0 ? {} : w,
												V = c(b, ['key', 'style']);
											return l({ key: j, style: l({ position: 'absolute', width: 0, left: L(s) + '%', transform: 'translateX(-50%)' }, W) }, V);
										},
									};
								});
							},
							[R, L, i, _, T, P]
						),
						te = t.default.useMemo(
							function () {
								var o = C(E || v);
								return [].concat(o, [i]).map(function (s, f) {
									return {
										value: s,
										getSegmentProps: function (g) {
											var b = g === void 0 ? {} : g,
												k = b.key,
												j = k === void 0 ? f : k,
												w = b.style,
												W = w === void 0 ? {} : w,
												V = c(b, ['key', 'style']),
												z = L(o[f - 1] ? o[f - 1] : _),
												$ = L(s) - z;
											return l({ key: j, style: l({ position: 'absolute', left: z + '%', width: $ + '%' }, W) }, V);
										},
									};
								});
							},
							[L, i, _, E, v]
						),
						B = t.default.useMemo(
							function () {
								return (E || v).map(function (o, s) {
									return {
										value: o,
										active: s === h,
										getHandleProps: function (m) {
											var g = m === void 0 ? {} : m,
												b = g.key,
												k = b === void 0 ? s : b,
												j = g.ref,
												w = g.innerRef,
												W = g.onKeyDown,
												V = g.onMouseDown,
												z = g.onTouchStart,
												$ = g.style,
												re = $ === void 0 ? {} : $,
												se = c(g, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return l(
												{
													key: k,
													onKeyDown: function (U) {
														U.persist(), q(U, s), W && W(U);
													},
													onMouseDown: function (U) {
														U.persist(), G(U, s), V && V(U);
													},
													onTouchStart: function (U) {
														U.persist(), G(U, s), z && z(U);
													},
													role: 'slider',
													'aria-valuemin': _,
													'aria-valuemax': i,
													'aria-valuenow': o,
													style: l(
														{ position: 'absolute', top: '50%', left: L(o) + '%', zIndex: s === h ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												se
											);
										},
									};
								});
							},
							[h, L, q, G, _, i, E, v]
						),
						oe = function (s) {
							var f = s === void 0 ? {} : s,
								m = f.style,
								g = m === void 0 ? {} : m,
								b = f.ref,
								k = c(f, ['style', 'ref']);
							return l(
								{
									ref: function (w) {
										(Z.current = w), b && (typeof b == 'function' ? b(w) : (b.current = w));
									},
									style: l({ position: 'relative', userSelect: 'none' }, g),
								},
								k
							);
						};
					return { activeHandleIndex: h, getTrackProps: oe, ticks: ee, segments: te, handles: B };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facets-Facets-stories.19c9f233.iframe.bundle.js.map
