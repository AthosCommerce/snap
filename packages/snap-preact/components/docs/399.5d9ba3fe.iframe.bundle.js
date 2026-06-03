'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[399],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(c, f, r) {
				r.d(f, { P: () => l });
				const l = (o) => o.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(c, f, r) {
				r.d(f, { G: () => o });
				var l = r('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function o(n, t) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...t };
					return (0, l.Z)(n, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(c, f, r) {
				r.d(f, { Z: () => l });
				function l(n, t) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...t };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const s = o(n, e.decimalPlaces).split('.');
					(s[0] = s[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (s[1] = (s[1] || '').padEnd(e.decimalPlaces, '0'));
					let a = s.join(e.decimalSeparator);
					return e.symbolAfter ? (a = a + e.symbol) : (a = e.symbol + a), a;
				}
				function o(n, t) {
					const e = n.toString(),
						s = e.indexOf('.'),
						a = s == -1 ? e.length : 1 + s + (t || -1);
					return e.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(c, f, r) {
				r.d(f, { p: () => l });
				function l(o) {
					if (typeof o != 'string') return o;
					let n = o.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(c, f, r) {
				r.d(f, { x: () => l });
				function l(o, n, t) {
					if (typeof o != 'string' || o.length <= n) return o;
					const e = o.lastIndexOf(' ', n),
						s = e != -1 ? e : n - 1;
					return o.substr(0, s) + (t || '');
				}
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(c, f, r) {
				r.d(f, { O: () => g, i: () => h });
				var l = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = r('../../node_modules/mobx-react-lite/es/index.js'),
					t = r('../../node_modules/classnames/index.js'),
					e = r.n(t),
					s = r('./components/src/components/Molecules/Result/Result.tsx'),
					a = r('./components/src/utilities/cloneWithProps.tsx'),
					i = r('./components/src/utilities/defined.ts'),
					d = r('./components/src/utilities/mergeProps.ts'),
					m = r('./components/src/utilities/mergeStyles.ts'),
					_ = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = r('./components/src/providers/treePath.tsx');
				const g = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					b = () => (0, o.AH)({}),
					h = (0, n.PA)((u) => {
						const p = (0, _.u)(),
							R = (0, y.LU)(),
							T = { resultWidth: '240px', name: u.controller?.store?.profile?.tag?.toLowerCase(), treePath: R },
							E = (0, d.v6)('recommendationEmail', p, T, u),
							{
								controller: P,
								results: C,
								resultComponent: v,
								resultProps: w,
								resultWidth: A,
								treePath: O,
								disableStyles: j,
								internalClassName: L,
								className: x,
							} = E,
							N = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, i.s)({ disableStyles: j }), theme: E?.theme, treePath: O },
							},
							B = (0, m.Z)(E, b),
							k = C || P?.store?.results || [];
						return k.length > 0
							? (0, l.Y)('div', {
									className: e()('ss__recommendation-email', x, L),
									...B,
									children: k.map((D, M) =>
										(0, l.Y)(
											'div',
											{
												id: `ss-emailrec${M}`,
												className: e()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: A },
												children: v
													? (0, a.Y)(v, { controller: P, result: D, ...w, email: !0, treePath: O })
													: (0, l.Y)(s.Q, { result: D, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...N.result, ...w }),
											},
											M
										)
									),
							  })
							: (0, l.Y)(l.FK, {});
					});
			},
			'./src/Templates/Stores/library/components/RecommendationEmail.ts'(c, f, r) {
				r.r(f), r.d(f, { RecommendationEmail: () => l.i });
				var l = r('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(c, f, r) {
				r.d(f, { A: () => l }), Object.defineProperty(l, 'name', { value: 'default', configurable: !0 });
				function l(o, n) {
					var t = {
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
						e = {};
					for (var s in t) e[t[s]] = s;
					var a = {};
					(o.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var d,
							m,
							_ = e[this.toHex()];
						if (_) return _;
						if (i?.closest) {
							var y = this.toRgb(),
								g = 1 / 0,
								b = 'black';
							if (!a.length) for (var h in t) a[h] = new o(t[h]).toRgb();
							for (var u in t) {
								var p = ((d = y), (m = a[u]), Math.pow(d.r - m.r, 2) + Math.pow(d.g - m.g, 2) + Math.pow(d.b - m.b, 2));
								p < g && ((g = p), (b = u));
							}
							return b;
						}
					}),
						n.string.push([
							function (i) {
								var d = i.toLowerCase(),
									m = d === 'transparent' ? '#0000' : t[d];
								return m ? new o(m).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(c, f, r) {
				r.d(f, { j: () => n });
				var l = Object.prototype.hasOwnProperty;
				function o(t, e, s) {
					for (s of t.keys()) if (n(s, e)) return s;
				}
				function n(t, e) {
					var s, a, i;
					if (t === e) return !0;
					if (t && e && (s = t.constructor) === e.constructor) {
						if (s === Date) return t.getTime() === e.getTime();
						if (s === RegExp) return t.toString() === e.toString();
						if (s === Array) {
							if ((a = t.length) === e.length) for (; a-- && n(t[a], e[a]); );
							return a === -1;
						}
						if (s === Set) {
							if (t.size !== e.size) return !1;
							for (a of t) if (((i = a), (i && typeof i == 'object' && ((i = o(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (s === Map) {
							if (t.size !== e.size) return !1;
							for (a of t) if (((i = a[0]), (i && typeof i == 'object' && ((i = o(e, i)), !i)) || !n(a[1], e.get(i)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (s === DataView) {
							if ((a = t.byteLength) === e.byteLength) for (; a-- && t.getInt8(a) === e.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((a = t.byteLength) === e.byteLength) for (; a-- && t[a] === e[a]; );
							return a === -1;
						}
						if (!s || typeof t == 'object') {
							a = 0;
							for (s in t) if ((l.call(t, s) && ++a && !l.call(e, s)) || !(s in e) || !n(t[s], e[s])) return !1;
							return Object.keys(e).length === a;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
