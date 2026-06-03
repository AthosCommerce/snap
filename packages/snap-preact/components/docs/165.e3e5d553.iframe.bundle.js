'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[165],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(p, c, t) {
				t.d(c, { P: () => n });
				const n = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(p, c, t) {
				t.d(c, { G: () => a });
				var n = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(l, s) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...s };
					return (0, n.Z)(l, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(p, c, t) {
				t.d(c, { Z: () => n });
				function n(l, s) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...s };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const o = a(l, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let r = o.join(e.decimalSeparator);
					return e.symbolAfter ? (r = r + e.symbol) : (r = e.symbol + r), r;
				}
				function a(l, s) {
					const e = l.toString(),
						o = e.indexOf('.'),
						r = o == -1 ? e.length : 1 + o + (s || -1);
					return e.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(p, c, t) {
				t.d(c, { p: () => n });
				function n(a) {
					if (typeof a != 'string') return a;
					let l = a.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(p, c, t) {
				t.d(c, { x: () => n });
				function n(a, l, s) {
					if (typeof a != 'string' || a.length <= l) return a;
					const e = a.lastIndexOf(' ', l),
						o = e != -1 ? e : l - 1;
					return a.substr(0, o) + (s || '');
				}
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(p, c, t) {
				t.d(c, { q: () => A });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/mobx-react-lite/es/index.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/classnames/index.js'),
					e = t.n(s),
					o = t('../../node_modules/deepmerge/dist/cjs.js'),
					r = t.n(o),
					i = t('./components/src/components/Molecules/Result/Result.tsx'),
					m = t('./components/src/utilities/cloneWithProps.tsx'),
					u = t('./components/src/utilities/defined.ts'),
					P = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					f = t('./components/src/providers/cache.tsx'),
					b = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = t('./components/src/providers/treePath.tsx'),
					M = t('./components/src/hooks/useDisplaySettings.tsx'),
					D = t('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					_ = t('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					v = t('../../node_modules/preact/compat/dist/compat.module.js'),
					T = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					k = t('./components/src/hooks/useIntersection.tsx');
				const I = ({ gapSize: y, columns: C }) =>
						(0, l.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: y,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${C}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					A = (0, a.PA)((y) => {
						const C = (0, b.u)(),
							L = (0, O.LU)(),
							w = {
								results: y.controller?.store?.results,
								gapSize: '20px',
								title: y.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: L,
							},
							S = { name: y.controller?.store?.profile?.tag?.toLowerCase(), ...y };
						let d = (0, P.v6)('recommendationGrid', C, w, S);
						if (!(y.theme?.type == 'templates' || C?.type == 'templates')) {
							const E = (0, M.X)(d?.breakpoints || {}),
								Z = r()(d?.theme || {}, E?.theme || {}, { arrayMerge: (q, Q) => Q });
							d = { ...d, ...E, theme: Z };
						}
						const {
								disableStyles: N,
								title: j,
								resultComponent: B,
								trim: U,
								lazyRender: V,
								className: Y,
								internalClassName: z,
								treePath: W,
								theme: G,
								controller: R,
							} = d,
							x = { enabled: !0, offset: '10%', ...V },
							H = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, u.s)({ disableStyles: N }), theme: d?.theme } };
						let h = d.results || R.store.results;
						if (!d.columns && !d.rows) (d.rows = 1), (d.columns = h.length);
						else if (d.columns && !d.rows) {
							if (((d.rows = Math.floor(h.length / d.columns)), U)) {
								const E = h.length % d.columns;
								h = h.slice(0, h.length - E);
							}
						} else if (d.rows && !d.columns) {
							if (U) {
								const E = h.length % d.rows;
								h = h.slice(0, h.length - E);
							}
							d.columns = Math.ceil(h.length / d.rows);
						} else d?.columns && d?.rows && d.columns > 0 && d.rows > 0 && (h = h?.slice(0, d.columns * d.rows));
						const $ = (0, g.Z)(d, I),
							[J, F] = (0, v.useState)(!1),
							K = (0, T.li)(null);
						return (
							(!x?.enabled || (0, k.v)(K, `${x.offset} 0px ${x.offset} 0px`, !0)) && F(!0),
							h?.length
								? (0, n.Y)(f._, {
										children: (0, n.Y)('div', {
											...$,
											ref: K,
											className: e()('ss__recommendation-grid', Y, z),
											children: J
												? (0, n.FD)(D.l, {
														controller: R,
														children: [
															j && (0, n.Y)('h3', { className: 'ss__recommendation-grid__title', children: j }),
															(0, n.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: h.map((E) =>
																	B && R
																		? (0, m.Y)(B, { controller: R, result: E, theme: G, treePath: W })
																		: (0, n.Y)(_.o, {
																				result: E,
																				controller: R,
																				children: (0, n.Y)(i.Q, { ...H.result, result: E, controller: R, treePath: W }, E.id),
																		  })
																),
															}),
														],
												  })
												: (0, n.Y)(D.l, {
														controller: R,
														children: h.map((E) => (0, n.Y)(_.o, { controller: R, result: E, children: (0, n.Y)(n.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(p, c, t) {
				t.d(c, { l: () => m });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/preact/dist/preact.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					r = t('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, l.AH)({}),
					m = (0, s.PA)((u) => {
						const { children: P, className: g, internalClassName: f } = u,
							b = (0, a.v2)(P),
							O = (0, r.Z)(u, i);
						return b.length ? (0, n.Y)('div', { className: o()('ss__recommendation-profile-tracker', g, f), ...O, children: P }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(p, c, t) {
				t.d(c, { o: () => u });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('../../node_modules/classnames/index.js'),
					e = t.n(s),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = t('./components/src/utilities/mergeProps.ts'),
					i = t('./components/src/utilities/createImpressionObserver.ts');
				const m = { ResultTracker: () => (0, a.AH)({}) },
					u = (0, l.PA)((P) => {
						const g = (0, o.u)(),
							f = (0, r.v6)('resultTracker', g, {}, P),
							b = { impression: !0, click: !0 },
							{ children: O, result: M, track: D, controller: _, className: v, internalClassName: T, disableStyles: k, style: I } = f,
							A = { ...b, ...D },
							{ ref: y, inViewport: C } = (0, i.Q)();
						C && A.impression && _?.track.product.impression(M);
						const L = {};
						return (
							k ? I && (L.css = [I]) : (L.css = [m.ResultTracker(), I]),
							(0, n.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, v, T),
								onClick: (w) => {
									A.click && _?.track.product.click(w, M);
								},
								ref: y,
								...L,
								children: O,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(p, c, t) {
				t.d(c, { v: () => a });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = (l, s = '0px', e = !1) => {
					const [o, r] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const i = new IntersectionObserver(
								([m]) => {
									r(m.isIntersecting), e && m.isIntersecting && i.unobserve(l.current);
								},
								{ rootMargin: s }
							);
							return (
								l.current && i.observe(l.current),
								() => {
									i.unobserve(l.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(p, c, t) {
				t.d(c, { v: () => l });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					l = (e, o = {}) => {
						const { rootMargin: r = '0px', fireOnce: i = !1, threshold: m = 0, minVisibleTime: u = 0 } = o,
							[P, g] = (0, n.J0)(!1),
							f = (0, n.li)(null),
							b = (0, n.li)(null),
							[O, M] = (0, n.J0)(0),
							D = (0, n.hb)((_) => {
								(e.current = _), M((v) => v + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								g(!1);
								let _ = null,
									v = null;
								if (!window.IntersectionObserver || !e.current) return;
								const T = () => {
										v && (window.clearInterval(v), (v = null));
									},
									k = () => {
										u > 0
											? ((b.current = Date.now()),
											  f.current && window.clearTimeout(f.current),
											  (f.current = window.setTimeout(() => {
													g(!0), i && e.current && _ && _.unobserve(e.current);
											  }, u)))
											: (g(!0), i && e.current && _ && _.unobserve(e.current));
									},
									I = () => {
										f.current && window.clearTimeout(f.current), (f.current = null), (b.current = null), g(!1);
									};
								return (
									(_ = new IntersectionObserver(
										([A]) => {
											A.isIntersecting
												? e.current && s(e.current)
													? (T(), k())
													: (I(),
													  v ||
															(v = window.setInterval(() => {
																if (!e.current) {
																	T();
																	return;
																}
																s(e.current) && (T(), k());
															}, a)))
												: (T(), I());
										},
										{ rootMargin: r, threshold: m }
									)),
									e.current && _.observe(e.current),
									() => {
										g(!1), T(), f.current && window.clearTimeout(f.current), _ && e.current && _.unobserve(e.current);
									}
								);
							}, [e, O]),
							{ inViewport: P, updateRef: D }
						);
					};
				function s(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(p, c, t) {
				t.d(c, { Q: () => e });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const l = 0.7,
					s = 1e3;
				function e(o) {
					const r = (0, n.li)(null),
						{ inViewport: i, updateRef: m } = (0, a.v)(r, { ...o, fireOnce: !0, threshold: l, minVisibleTime: s });
					return { ref: r, inViewport: i, updateRef: m };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(p, c, t) {
				t.r(c), t.d(c, { RecommendationGrid: () => n.q });
				var n = t('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(p, c, t) {
				t.d(c, { A: () => n }), Object.defineProperty(n, 'name', { value: 'default', configurable: !0 });
				function n(a, l) {
					var s = {
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
					for (var o in s) e[s[o]] = o;
					var r = {};
					(a.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var m,
							u,
							P = e[this.toHex()];
						if (P) return P;
						if (i?.closest) {
							var g = this.toRgb(),
								f = 1 / 0,
								b = 'black';
							if (!r.length) for (var O in s) r[O] = new a(s[O]).toRgb();
							for (var M in s) {
								var D = ((m = g), (u = r[M]), Math.pow(m.r - u.r, 2) + Math.pow(m.g - u.g, 2) + Math.pow(m.b - u.b, 2));
								D < f && ((f = D), (b = M));
							}
							return b;
						}
					}),
						l.string.push([
							function (i) {
								var m = i.toLowerCase(),
									u = m === 'transparent' ? '#0000' : s[m];
								return u ? new a(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(p, c, t) {
				t.d(c, { j: () => l });
				var n = Object.prototype.hasOwnProperty;
				function a(s, e, o) {
					for (o of s.keys()) if (l(o, e)) return o;
				}
				function l(s, e) {
					var o, r, i;
					if (s === e) return !0;
					if (s && e && (o = s.constructor) === e.constructor) {
						if (o === Date) return s.getTime() === e.getTime();
						if (o === RegExp) return s.toString() === e.toString();
						if (o === Array) {
							if ((r = s.length) === e.length) for (; r-- && l(s[r], e[r]); );
							return r === -1;
						}
						if (o === Set) {
							if (s.size !== e.size) return !1;
							for (r of s) if (((i = r), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== e.size) return !1;
							for (r of s) if (((i = r[0]), (i && typeof i == 'object' && ((i = a(e, i)), !i)) || !l(r[1], e.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (s = new Uint8Array(s)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((r = s.byteLength) === e.byteLength) for (; r-- && s.getInt8(r) === e.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((r = s.byteLength) === e.byteLength) for (; r-- && s[r] === e[r]; );
							return r === -1;
						}
						if (!o || typeof s == 'object') {
							r = 0;
							for (o in s) if ((n.call(s, o) && ++r && !n.call(e, o)) || !(o in e) || !l(s[o], e[o])) return !1;
							return Object.keys(e).length === r;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
