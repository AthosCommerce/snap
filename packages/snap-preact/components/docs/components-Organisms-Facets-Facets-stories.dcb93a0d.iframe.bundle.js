(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6721],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(F, _, e) {
				'use strict';
				const o = (c) => c.replace(/_/g, '-').toLowerCase();
				e.d(_, ['P', 0, o]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(F, _, e) {
				'use strict';
				e.d(_, { p: () => o });
				function o(c) {
					if (typeof c != 'string') return c;
					let b = c.toLowerCase();
					return (b = b.replace(/[^\w\s]/g, '').trim()), (b = b.replace(/\s/g, '-')), b;
				}
			},
			'./components/src/components/Organisms/Facets/Facets.stories.tsx'(F, _, e) {
				'use strict';
				e.r(_), e.d(_, { Default: () => n, __namedExportsOrder: () => s, default: () => x });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					b = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					O = e('./components/src/utilities/storybook.tsx'),
					C = e('./components/src/utilities/componentArgs.ts'),
					M = e('./components/src/utilities/snapify.ts');
				const j =
						"# Facets\n\nRenders all facets utilizing the `<Facet />` component.\n\n## Sub-components\n- Facet\n\n## Usage\n```tsx\nimport { Facets } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<Facets controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```tsx\n<Facets controller={controller} facets={facets} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop takes a callback function for when a facet option is clicked.\n\n```tsx\n<Facets controller={controller} facets={facets} limit={3}/>\n```",
					x = {
						title: 'Organisms/Facets',
						component: b.J,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: O.Z } }, children: j }), (0, o.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, o.Y)('div', { style: { maxWidth: '300px' }, children: (0, o.Y)(d, {}) })],
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
					r = M.p.search({ id: 'Facets', globals: { siteId: 'atkzs2' } }),
					n = (d, { loaded: { controller: E } }) => (0, o.Y)(b.J, { ...d, controller: E });
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
				const s = ['Default'];
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(F, _, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					O = e.n(b),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(C),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					r = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts');
				const l = () => (0, c.AH)({}),
					L = (0, j.PA)((k) => {
						const Y = (0, n.u)(),
							J = (0, s.LU)(),
							U = { facets: k.controller?.store?.facets, treePath: J };
						let i = (0, h.v6)('facets', Y, U, k);
						const { limit: u, onFacetOptionClick: P, disableStyles: D, className: y, internalClassName: K, controller: B, treePath: G } = i,
							{ overrideElement: Z, shouldRenderDefault: Q } = (0, d._)('facets', i);
						if (!Q) return Z;
						const N = ($) => {
								P && P($), B?.setFocused && B?.setFocused();
							},
							z = {
								components: {
									facetGridOptions: { onClick: N },
									facetHierarchyOptions: { onClick: N },
									facetListOptions: { onClick: N },
									facetPaletteOptions: { onClick: N },
								},
							},
							q = M()(z, i?.theme || {}, { arrayMerge: ($, te) => te });
						i = { ...i, theme: q };
						let { facets: I } = i;
						u && I && u > 0 && (I = I.slice(0, +u));
						const W = { facet: { internalClassName: 'ss__facets__facet', ...(0, E.s)({ disableStyles: D }), theme: i.theme, treePath: G } },
							ee = (0, g.Z)(i, l);
						return I && I?.length > 0
							? (0, o.Y)(r._, {
									children: (0, o.Y)('div', {
										className: O()('ss__facets', y, K),
										...ee,
										children: I.map(($) => (0, o.Y)(x.s, { ...W.facet, facet: $ }, $.field)),
									}),
							  })
							: null;
					});
				e.d(_, ['J', 0, L]);
			},
			'./components/src/utilities/componentArgs.ts'(F, _, e) {
				'use strict';
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
				e.d(_, ['F', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(F, _, e) {
				'use strict';
				e.d(_, { p: () => k });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					C = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					j = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					g = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const l = {},
					L = { globals: { siteId: 'atkzs2' } };
				class k {
					static recommendation(u) {
						const P = u.id;
						if (l[P]) return l[P];
						const D = (l[P] = J({ client: L, controller: u }));
						return (
							D.on('afterStore', async ({ controller: y }, K) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await K();
							}),
							D.init(),
							D
						);
					}
					static autocomplete(u) {
						const P = u.id;
						if (l[P]) return l[P];
						const D = (l[P] = U({ client: L, controller: u }));
						return (
							D.on('afterStore', async ({ controller: y }, K) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await K();
							}),
							D.init(),
							D
						);
					}
					static search(u) {
						const P = u.id;
						if (l[P]) return l[P];
						const D = (l[P] = Y({ client: L, controller: u }));
						return (
							D.on('afterStore', async ({ controller: y }, K) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await K();
							}),
							D.init(),
							D
						);
					}
				}
				function Y(i) {
					const u = new r.V(new s.E({ settings: { coreType: 'query', corePrefix: i.controller.id } }), n.X);
					return new c.Tp(i.controller, {
						client: new C.K(i.client.globals, i.client.config),
						store: new j.U(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new d.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(i.client.globals),
					});
				}
				function J(i) {
					const u = new r.V(new s.E(), n.X).detach(!0);
					return new O.c(i.controller, {
						client: new C.K(i.client.globals, i.client.config),
						store: new x.t(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new d.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(i.client.globals),
					});
				}
				function U(i) {
					const u = new r.V(new s.E(), n.X).detach();
					return new b.Z(i.controller, {
						client: new C.K(i.client.globals, i.client.config),
						store: new M.Y(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new d.E(),
						profiler: new E.U(),
						logger: new h.V(),
						tracker: new g.J(i.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(F, _, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const b = 'prism-block',
					O = (C) => {
						const M = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								M.current && C.className?.includes('lang-') && !C.className?.includes(b) && window?.Prism?.highlightElement(M.current);
							}, [C.className, C.children, M]),
							(0, o.Y)('code', { ...C, ref: M, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(_, ['Z', 0, O]);
			},
			'../../node_modules/colord/plugins/names.mjs'(F, _, e) {
				'use strict';
				e.d(_, { A: () => o }), e.dn(o);
				function o(c, b) {
					var O = {
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
					for (var M in O) C[O[M]] = M;
					var j = {};
					(c.prototype.toName = function (x) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var r,
							n,
							s = C[this.toHex()];
						if (s) return s;
						if (x?.closest) {
							var d = this.toRgb(),
								E = 1 / 0,
								h = 'black';
							if (!j.length) for (var g in O) j[g] = new c(O[g]).toRgb();
							for (var l in O) {
								var L = ((r = d), (n = j[l]), Math.pow(r.r - n.r, 2) + Math.pow(r.g - n.g, 2) + Math.pow(r.b - n.b, 2));
								L < E && ((E = L), (h = l));
							}
							return h;
						}
					}),
						b.string.push([
							function (x) {
								var r = x.toLowerCase(),
									n = r === 'transparent' ? '#0000' : O[r];
								return n ? new c(n).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(F) {
				function _(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (F.exports = _);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(F, _, e) {
				'use strict';
				e.d(_, { d: () => x });
				var o = e('../../node_modules/preact/compat/dist/compat.module.js');
				function c() {
					return (
						(c =
							Object.assign ||
							function (r) {
								for (var n = 1; n < arguments.length; n++) {
									var s = arguments[n];
									for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (r[d] = s[d]);
								}
								return r;
							}),
						c.apply(this, arguments)
					);
				}
				function b(r, n) {
					if (r == null) return {};
					var s = {},
						d = Object.keys(r),
						E,
						h;
					for (h = 0; h < d.length; h++) (E = d[h]), !(n.indexOf(E) >= 0) && (s[E] = r[E]);
					return s;
				}
				var O = function (n) {
						var s = n.getBoundingClientRect();
						return { left: Math.ceil(s.left), width: Math.ceil(s.width) };
					},
					C = function (n) {
						return [].concat(n).sort(function (s, d) {
							return Number(s) - Number(d);
						});
					},
					M = function (n) {
						var s = o.default.useRef(n);
						return (
							(s.current = n),
							o.default.useCallback(function () {
								return s.current;
							}, [])
						);
					},
					j = {
						getPercentageForValue: function (n, s, d) {
							return Math.max(0, Math.min(100, ((n - s) / (d - s)) * 100));
						},
						getValueForClientX: function (n, s, d, E) {
							var h = s.left,
								g = s.width,
								l = (n - h) / g,
								L = (E - d) * l;
							return L + d;
						},
					};
				function x(r) {
					var n = r.interpolator,
						s = n === void 0 ? j : n,
						d = r.tickSize,
						E = d === void 0 ? 10 : d,
						h = r.values,
						g = r.min,
						l = r.max,
						L = r.ticks,
						k = r.steps,
						Y = r.onChange,
						J = r.onDrag,
						U = r.stepSize,
						i = o.default.useState(null),
						u = i[0],
						P = i[1],
						D = o.default.useState(),
						y = D[0],
						K = D[1],
						B = M({ activeHandleIndex: u, onChange: Y, onDrag: J, values: h, tempValues: y }),
						G = o.default.useRef(),
						Z = o.default.useCallback(
							function (t) {
								var a = O(G.current);
								return s.getValueForClientX(t, a, g, l);
							},
							[s, l, g]
						),
						Q = o.default.useCallback(
							function (t, a) {
								if (k) {
									var f = k.indexOf(t),
										m = f + a;
									return m >= 0 && m < k.length ? k[m] : t;
								} else {
									var p = t + U * a;
									return p >= g && p <= l ? p : t;
								}
							},
							[l, g, U, k]
						),
						N = o.default.useCallback(
							function (t) {
								var a = g,
									f = l;
								if (k)
									k.forEach(function (m) {
										m <= t && m > a && (a = m), m >= t && m < f && (f = m);
									});
								else {
									for (; a < t && a + U < t; ) a += U;
									f = Math.min(a + U, l);
								}
								return t - a < f - t ? a : f;
							},
							[l, g, U, k]
						),
						z = o.default.useCallback(
							function (t) {
								var a = B(),
									f = a.activeHandleIndex,
									m = a.onDrag,
									p = t.type === 'touchmove' ? t.changedTouches[0].clientX : t.clientX,
									v = Z(p),
									w = N(v),
									R = [].concat(h.slice(0, f), [w], h.slice(f + 1));
								m ? m(R) : K(R);
							},
							[B, Z, N, h]
						),
						q = o.default.useCallback(
							function (t, a) {
								var f = B(),
									m = f.values,
									p = f.onChange,
									v = p === void 0 ? function () {} : p;
								if (t.keyCode === 37 || t.keyCode === 39) {
									P(a);
									var w = t.keyCode === 37 ? -1 : 1,
										R = Q(m[a], w),
										T = [].concat(m.slice(0, a), [R], m.slice(a + 1)),
										S = C(T);
									v(S);
								}
							},
							[B, Q]
						),
						I = o.default.useCallback(
							function (t, a) {
								P(a);
								var f = function m(p) {
									var v = B(),
										w = v.tempValues,
										R = v.values,
										T = v.onChange,
										S = T === void 0 ? function () {} : T,
										V = v.onDrag,
										X = V === void 0 ? function () {} : V;
									document.removeEventListener('mousemove', z),
										document.removeEventListener('touchmove', z),
										document.removeEventListener('mouseup', m),
										document.removeEventListener('touchend', m);
									var H = C(w || R);
									S(H), X(H), P(null), K();
								};
								document.addEventListener('mousemove', z),
									document.addEventListener('touchmove', z),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[B, z]
						),
						W = o.default.useCallback(
							function (t) {
								return s.getPercentageForValue(t, g, l);
							},
							[s, l, g]
						),
						ee = o.default.useMemo(
							function () {
								var t = L || k;
								if (!t) {
									for (t = [g]; t[t.length - 1] < l - E; ) t.push(t[t.length - 1] + E);
									t.push(l);
								}
								return t.map(function (a, f) {
									return {
										value: a,
										getTickProps: function (p) {
											var v = p === void 0 ? {} : p,
												w = v.key,
												R = w === void 0 ? f : w,
												T = v.style,
												S = T === void 0 ? {} : T,
												V = b(v, ['key', 'style']);
											return c({ key: R, style: c({ position: 'absolute', width: 0, left: W(a) + '%', transform: 'translateX(-50%)' }, S) }, V);
										},
									};
								});
							},
							[L, W, l, g, k, E]
						),
						$ = o.default.useMemo(
							function () {
								var t = C(y || h);
								return [].concat(t, [l]).map(function (a, f) {
									return {
										value: a,
										getSegmentProps: function (p) {
											var v = p === void 0 ? {} : p,
												w = v.key,
												R = w === void 0 ? f : w,
												T = v.style,
												S = T === void 0 ? {} : T,
												V = b(v, ['key', 'style']),
												X = W(t[f - 1] ? t[f - 1] : g),
												H = W(a) - X;
											return c({ key: R, style: c({ position: 'absolute', left: X + '%', width: H + '%' }, S) }, V);
										},
									};
								});
							},
							[W, l, g, y, h]
						),
						te = o.default.useMemo(
							function () {
								return (y || h).map(function (t, a) {
									return {
										value: t,
										active: a === u,
										getHandleProps: function (m) {
											var p = m === void 0 ? {} : m,
												v = p.key,
												w = v === void 0 ? a : v,
												R = p.ref,
												T = p.innerRef,
												S = p.onKeyDown,
												V = p.onMouseDown,
												X = p.onTouchStart,
												H = p.style,
												re = H === void 0 ? {} : H,
												ae = b(p, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return c(
												{
													key: w,
													onKeyDown: function (A) {
														A.persist(), q(A, a), S && S(A);
													},
													onMouseDown: function (A) {
														A.persist(), I(A, a), V && V(A);
													},
													onTouchStart: function (A) {
														A.persist(), I(A, a), X && X(A);
													},
													role: 'slider',
													'aria-valuemin': g,
													'aria-valuemax': l,
													'aria-valuenow': t,
													style: c(
														{ position: 'absolute', top: '50%', left: W(t) + '%', zIndex: a === u ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												ae
											);
										},
									};
								});
							},
							[u, W, q, I, g, l, y, h]
						),
						ne = function (a) {
							var f = a === void 0 ? {} : a,
								m = f.style,
								p = m === void 0 ? {} : m,
								v = f.ref,
								w = b(f, ['style', 'ref']);
							return c(
								{
									ref: function (T) {
										(G.current = T), v && (typeof v == 'function' ? v(T) : (v.current = T));
									},
									style: c({ position: 'relative', userSelect: 'none' }, p),
								},
								w
							);
						};
					return { activeHandleIndex: u, getTrackProps: ne, ticks: ee, segments: $, handles: te };
				}
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Facets-Facets-stories.dcb93a0d.iframe.bundle.js.map
