'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[195, 671, 2576, 3052, 5433, 7814],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(R, _, y) {
				const s = (f) => f.replace(/_/g, '-').toLowerCase();
				y.d(_, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(R, _, y) {
				y.d(_, { G: () => f });
				var s = y('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function f(l, t) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...t };
					return (0, s.Z)(l, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(R, _, y) {
				y.d(_, { Z: () => s });
				function s(l, t) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...t };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const o = f(l, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let a = o.join(e.decimalSeparator);
					return e.symbolAfter ? (a = a + e.symbol) : (a = e.symbol + a), a;
				}
				function f(l, t) {
					const e = l.toString(),
						o = e.indexOf('.'),
						a = o == -1 ? e.length : 1 + o + (t || -1);
					return e.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, _, y) {
				y.d(_, { p: () => s });
				function s(f) {
					if (typeof f != 'string') return f;
					let l = f.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(R, _, y) {
				y.d(_, { x: () => s });
				function s(f, l, t) {
					if (typeof f != 'string' || f.length <= l) return f;
					const e = f.lastIndexOf(' ', l),
						o = e != -1 ? e : l - 1;
					return f.substr(0, o) + (t || '');
				}
			},
			'../../node_modules/colord/plugins/names.mjs'(R, _, y) {
				y.d(_, { A: () => s }), y.dn(s);
				function s(f, l) {
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
					for (var o in t) e[t[o]] = o;
					var a = {};
					(f.prototype.toName = function (v) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var i,
							c,
							u = e[this.toHex()];
						if (u) return u;
						if (v?.closest) {
							var k = this.toRgb(),
								L = 1 / 0,
								w = 'black';
							if (!a.length) for (var p in t) a[p] = new f(t[p]).toRgb();
							for (var b in t) {
								var E = ((i = k), (c = a[b]), Math.pow(i.r - c.r, 2) + Math.pow(i.g - c.g, 2) + Math.pow(i.b - c.b, 2));
								E < L && ((L = E), (w = b));
							}
							return w;
						}
					}),
						l.string.push([
							function (v) {
								var i = v.toLowerCase(),
									c = i === 'transparent' ? '#0000' : t[i];
								return c ? new f(c).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(R, _, y) {
				y.d(_, { j: () => l });
				var s = Object.prototype.hasOwnProperty;
				function f(t, e, o) {
					for (o of t.keys()) if (l(o, e)) return o;
				}
				function l(t, e) {
					var o, a, v;
					if (t === e) return !0;
					if (t && e && (o = t.constructor) === e.constructor) {
						if (o === Date) return t.getTime() === e.getTime();
						if (o === RegExp) return t.toString() === e.toString();
						if (o === Array) {
							if ((a = t.length) === e.length) for (; a-- && l(t[a], e[a]); );
							return a === -1;
						}
						if (o === Set) {
							if (t.size !== e.size) return !1;
							for (a of t) if (((v = a), (v && typeof v == 'object' && ((v = f(e, v)), !v)) || !e.has(v))) return !1;
							return !0;
						}
						if (o === Map) {
							if (t.size !== e.size) return !1;
							for (a of t) if (((v = a[0]), (v && typeof v == 'object' && ((v = f(e, v)), !v)) || !l(a[1], e.get(v)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((a = t.byteLength) === e.byteLength) for (; a-- && t.getInt8(a) === e.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((a = t.byteLength) === e.byteLength) for (; a-- && t[a] === e[a]; );
							return a === -1;
						}
						if (!o || typeof t == 'object') {
							a = 0;
							for (o in t) if ((s.call(t, o) && ++a && !s.call(e, o)) || !(o in e) || !l(t[o], e[o])) return !1;
							return Object.keys(e).length === a;
						}
					}
					return t !== t && e !== e;
				}
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(R, _, y) {
				y.d(_, { d: () => v });
				var s = y('../../node_modules/preact/compat/dist/compat.module.js');
				function f() {
					return (
						(f =
							Object.assign ||
							function (i) {
								for (var c = 1; c < arguments.length; c++) {
									var u = arguments[c];
									for (var k in u) Object.prototype.hasOwnProperty.call(u, k) && (i[k] = u[k]);
								}
								return i;
							}),
						f.apply(this, arguments)
					);
				}
				function l(i, c) {
					if (i == null) return {};
					var u = {},
						k = Object.keys(i),
						L,
						w;
					for (w = 0; w < k.length; w++) (L = k[w]), !(c.indexOf(L) >= 0) && (u[L] = i[L]);
					return u;
				}
				var t = function (c) {
						var u = c.getBoundingClientRect();
						return { left: Math.ceil(u.left), width: Math.ceil(u.width) };
					},
					e = function (c) {
						return [].concat(c).sort(function (u, k) {
							return Number(u) - Number(k);
						});
					},
					o = function (c) {
						var u = s.default.useRef(c);
						return (
							(u.current = c),
							s.default.useCallback(function () {
								return u.current;
							}, [])
						);
					},
					a = {
						getPercentageForValue: function (c, u, k) {
							return Math.max(0, Math.min(100, ((c - u) / (k - u)) * 100));
						},
						getValueForClientX: function (c, u, k, L) {
							var w = u.left,
								p = u.width,
								b = (c - w) / p,
								E = (L - k) * b;
							return E + k;
						},
					};
				function v(i) {
					var c = i.interpolator,
						u = c === void 0 ? a : c,
						k = i.tickSize,
						L = k === void 0 ? 10 : k,
						w = i.values,
						p = i.min,
						b = i.max,
						E = i.ticks,
						T = i.steps,
						Q = i.onChange,
						Y = i.onDrag,
						O = i.stepSize,
						H = s.default.useState(null),
						z = H[0],
						K = H[1],
						X = s.default.useState(),
						A = X[0],
						q = X[1],
						$ = o({ activeHandleIndex: z, onChange: Q, onDrag: Y, values: w, tempValues: A }),
						B = s.default.useRef(),
						U = s.default.useCallback(
							function (r) {
								var n = t(B.current);
								return u.getValueForClientX(r, n, p, b);
							},
							[u, b, p]
						),
						W = s.default.useCallback(
							function (r, n) {
								if (T) {
									var m = T.indexOf(r),
										d = m + n;
									return d >= 0 && d < T.length ? T[d] : r;
								} else {
									var g = r + O * n;
									return g >= p && g <= b ? g : r;
								}
							},
							[b, p, O, T]
						),
						G = s.default.useCallback(
							function (r) {
								var n = p,
									m = b;
								if (T)
									T.forEach(function (d) {
										d <= r && d > n && (n = d), d >= r && d < m && (m = d);
									});
								else {
									for (; n < r && n + O < r; ) n += O;
									m = Math.min(n + O, b);
								}
								return r - n < m - r ? n : m;
							},
							[b, p, O, T]
						),
						I = s.default.useCallback(
							function (r) {
								var n = $(),
									m = n.activeHandleIndex,
									d = n.onDrag,
									g = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									h = U(g),
									C = G(h),
									D = [].concat(w.slice(0, m), [C], w.slice(m + 1));
								d ? d(D) : q(D);
							},
							[$, U, G, w]
						),
						Z = s.default.useCallback(
							function (r, n) {
								var m = $(),
									d = m.values,
									g = m.onChange,
									h = g === void 0 ? function () {} : g;
								if (r.keyCode === 37 || r.keyCode === 39) {
									K(n);
									var C = r.keyCode === 37 ? -1 : 1,
										D = W(d[n], C),
										P = [].concat(d.slice(0, n), [D], d.slice(n + 1)),
										j = e(P);
									h(j);
								}
							},
							[$, W]
						),
						F = s.default.useCallback(
							function (r, n) {
								K(n);
								var m = function d(g) {
									var h = $(),
										C = h.tempValues,
										D = h.values,
										P = h.onChange,
										j = P === void 0 ? function () {} : P,
										x = h.onDrag,
										N = x === void 0 ? function () {} : x;
									document.removeEventListener('mousemove', I),
										document.removeEventListener('touchmove', I),
										document.removeEventListener('mouseup', d),
										document.removeEventListener('touchend', d);
									var V = e(C || D);
									j(V), N(V), K(null), q();
								};
								document.addEventListener('mousemove', I),
									document.addEventListener('touchmove', I),
									document.addEventListener('mouseup', m),
									document.addEventListener('touchend', m);
							},
							[$, I]
						),
						M = s.default.useCallback(
							function (r) {
								return u.getPercentageForValue(r, p, b);
							},
							[u, b, p]
						),
						ee = s.default.useMemo(
							function () {
								var r = E || T;
								if (!r) {
									for (r = [p]; r[r.length - 1] < b - L; ) r.push(r[r.length - 1] + L);
									r.push(b);
								}
								return r.map(function (n, m) {
									return {
										value: n,
										getTickProps: function (g) {
											var h = g === void 0 ? {} : g,
												C = h.key,
												D = C === void 0 ? m : C,
												P = h.style,
												j = P === void 0 ? {} : P,
												x = l(h, ['key', 'style']);
											return f({ key: D, style: f({ position: 'absolute', width: 0, left: M(n) + '%', transform: 'translateX(-50%)' }, j) }, x);
										},
									};
								});
							},
							[E, M, b, p, T, L]
						),
						te = s.default.useMemo(
							function () {
								var r = e(A || w);
								return [].concat(r, [b]).map(function (n, m) {
									return {
										value: n,
										getSegmentProps: function (g) {
											var h = g === void 0 ? {} : g,
												C = h.key,
												D = C === void 0 ? m : C,
												P = h.style,
												j = P === void 0 ? {} : P,
												x = l(h, ['key', 'style']),
												N = M(r[m - 1] ? r[m - 1] : p),
												V = M(n) - N;
											return f({ key: D, style: f({ position: 'absolute', left: N + '%', width: V + '%' }, j) }, x);
										},
									};
								});
							},
							[M, b, p, A, w]
						),
						re = s.default.useMemo(
							function () {
								return (A || w).map(function (r, n) {
									return {
										value: r,
										active: n === z,
										getHandleProps: function (d) {
											var g = d === void 0 ? {} : d,
												h = g.key,
												C = h === void 0 ? n : h,
												D = g.ref,
												P = g.innerRef,
												j = g.onKeyDown,
												x = g.onMouseDown,
												N = g.onTouchStart,
												V = g.style,
												ae = V === void 0 ? {} : V,
												oe = l(g, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return f(
												{
													key: C,
													onKeyDown: function (S) {
														S.persist(), Z(S, n), j && j(S);
													},
													onMouseDown: function (S) {
														S.persist(), F(S, n), x && x(S);
													},
													onTouchStart: function (S) {
														S.persist(), F(S, n), N && N(S);
													},
													role: 'slider',
													'aria-valuemin': p,
													'aria-valuemax': b,
													'aria-valuenow': r,
													style: f(
														{ position: 'absolute', top: '50%', left: M(r) + '%', zIndex: n === z ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ae
													),
												},
												oe
											);
										},
									};
								});
							},
							[z, M, Z, F, p, b, A, w]
						),
						ne = function (n) {
							var m = n === void 0 ? {} : n,
								d = m.style,
								g = d === void 0 ? {} : d,
								h = m.ref,
								C = l(m, ['style', 'ref']);
							return f(
								{
									ref: function (P) {
										(B.current = P), h && (typeof h == 'function' ? h(P) : (h.current = P));
									},
									style: f({ position: 'relative', userSelect: 'none' }, g),
								},
								C
							);
						};
					return { activeHandleIndex: z, getTrackProps: ne, ticks: ee, segments: te, handles: re };
				}
			},
		},
	]);
})();
