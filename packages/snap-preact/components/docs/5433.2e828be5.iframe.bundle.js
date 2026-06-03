'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[195, 671, 2576, 3052, 5433, 7814],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(R, w, _) {
				_.d(w, { P: () => l });
				const l = (f) => f.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(R, w, _) {
				_.d(w, { G: () => f });
				var l = _('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function f(s, t) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...t };
					return (0, l.Z)(s, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(R, w, _) {
				_.d(w, { Z: () => l });
				function l(s, t) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...t };
					if (typeof s != 'number' || Number.isNaN(s)) return;
					const o = f(s, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let n = o.join(e.decimalSeparator);
					return e.symbolAfter ? (n = n + e.symbol) : (n = e.symbol + n), n;
				}
				function f(s, t) {
					const e = s.toString(),
						o = e.indexOf('.'),
						n = o == -1 ? e.length : 1 + o + (t || -1);
					return e.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, w, _) {
				_.d(w, { p: () => l });
				function l(f) {
					if (typeof f != 'string') return f;
					let s = f.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(R, w, _) {
				_.d(w, { x: () => l });
				function l(f, s, t) {
					if (typeof f != 'string' || f.length <= s) return f;
					const e = f.lastIndexOf(' ', s),
						o = e != -1 ? e : s - 1;
					return f.substr(0, o) + (t || '');
				}
			},
			'../../node_modules/colord/plugins/names.mjs'(R, w, _) {
				_.d(w, { A: () => l }), Object.defineProperty(l, 'name', { value: 'default', configurable: !0 });
				function l(f, s) {
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
					var n = {};
					(f.prototype.toName = function (v) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var i,
							c,
							u = e[this.toHex()];
						if (u) return u;
						if (v?.closest) {
							var y = this.toRgb(),
								L = 1 / 0,
								k = 'black';
							if (!n.length) for (var p in t) n[p] = new f(t[p]).toRgb();
							for (var b in t) {
								var E = ((i = y), (c = n[b]), Math.pow(i.r - c.r, 2) + Math.pow(i.g - c.g, 2) + Math.pow(i.b - c.b, 2));
								E < L && ((L = E), (k = b));
							}
							return k;
						}
					}),
						s.string.push([
							function (v) {
								var i = v.toLowerCase(),
									c = i === 'transparent' ? '#0000' : t[i];
								return c ? new f(c).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(R, w, _) {
				_.d(w, { j: () => s });
				var l = Object.prototype.hasOwnProperty;
				function f(t, e, o) {
					for (o of t.keys()) if (s(o, e)) return o;
				}
				function s(t, e) {
					var o, n, v;
					if (t === e) return !0;
					if (t && e && (o = t.constructor) === e.constructor) {
						if (o === Date) return t.getTime() === e.getTime();
						if (o === RegExp) return t.toString() === e.toString();
						if (o === Array) {
							if ((n = t.length) === e.length) for (; n-- && s(t[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (t.size !== e.size) return !1;
							for (n of t) if (((v = n), (v && typeof v == 'object' && ((v = f(e, v)), !v)) || !e.has(v))) return !1;
							return !0;
						}
						if (o === Map) {
							if (t.size !== e.size) return !1;
							for (n of t) if (((v = n[0]), (v && typeof v == 'object' && ((v = f(e, v)), !v)) || !s(n[1], e.get(v)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((n = t.byteLength) === e.byteLength) for (; n-- && t.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((n = t.byteLength) === e.byteLength) for (; n-- && t[n] === e[n]; );
							return n === -1;
						}
						if (!o || typeof t == 'object') {
							n = 0;
							for (o in t) if ((l.call(t, o) && ++n && !l.call(e, o)) || !(o in e) || !s(t[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return t !== t && e !== e;
				}
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(R, w, _) {
				_.d(w, { d: () => v });
				var l = _('../../node_modules/preact/compat/dist/compat.module.js');
				function f() {
					return (
						(f =
							Object.assign ||
							function (i) {
								for (var c = 1; c < arguments.length; c++) {
									var u = arguments[c];
									for (var y in u) Object.prototype.hasOwnProperty.call(u, y) && (i[y] = u[y]);
								}
								return i;
							}),
						f.apply(this, arguments)
					);
				}
				function s(i, c) {
					if (i == null) return {};
					var u = {},
						y = Object.keys(i),
						L,
						k;
					for (k = 0; k < y.length; k++) (L = y[k]), !(c.indexOf(L) >= 0) && (u[L] = i[L]);
					return u;
				}
				var t = function (c) {
						var u = c.getBoundingClientRect();
						return { left: Math.ceil(u.left), width: Math.ceil(u.width) };
					},
					e = function (c) {
						return [].concat(c).sort(function (u, y) {
							return Number(u) - Number(y);
						});
					},
					o = function (c) {
						var u = l.default.useRef(c);
						return (
							(u.current = c),
							l.default.useCallback(function () {
								return u.current;
							}, [])
						);
					},
					n = {
						getPercentageForValue: function (c, u, y) {
							return Math.max(0, Math.min(100, ((c - u) / (y - u)) * 100));
						},
						getValueForClientX: function (c, u, y, L) {
							var k = u.left,
								p = u.width,
								b = (c - k) / p,
								E = (L - y) * b;
							return E + y;
						},
					};
				function v(i) {
					var c = i.interpolator,
						u = c === void 0 ? n : c,
						y = i.tickSize,
						L = y === void 0 ? 10 : y,
						k = i.values,
						p = i.min,
						b = i.max,
						E = i.ticks,
						j = i.steps,
						Q = i.onChange,
						Y = i.onDrag,
						O = i.stepSize,
						F = l.default.useState(null),
						z = F[0],
						K = F[1],
						H = l.default.useState(),
						A = H[0],
						X = H[1],
						$ = o({ activeHandleIndex: z, onChange: Q, onDrag: Y, values: k, tempValues: A }),
						B = l.default.useRef(),
						U = l.default.useCallback(
							function (r) {
								var a = t(B.current);
								return u.getValueForClientX(r, a, p, b);
							},
							[u, b, p]
						),
						W = l.default.useCallback(
							function (r, a) {
								if (j) {
									var m = j.indexOf(r),
										d = m + a;
									return d >= 0 && d < j.length ? j[d] : r;
								} else {
									var g = r + O * a;
									return g >= p && g <= b ? g : r;
								}
							},
							[b, p, O, j]
						),
						G = l.default.useCallback(
							function (r) {
								var a = p,
									m = b;
								if (j)
									j.forEach(function (d) {
										d <= r && d > a && (a = d), d >= r && d < m && (m = d);
									});
								else {
									for (; a < r && a + O < r; ) a += O;
									m = Math.min(a + O, b);
								}
								return r - a < m - r ? a : m;
							},
							[b, p, O, j]
						),
						I = l.default.useCallback(
							function (r) {
								var a = $(),
									m = a.activeHandleIndex,
									d = a.onDrag,
									g = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									h = U(g),
									C = G(h),
									D = [].concat(k.slice(0, m), [C], k.slice(m + 1));
								d ? d(D) : X(D);
							},
							[$, U, G, k]
						),
						Z = l.default.useCallback(
							function (r, a) {
								var m = $(),
									d = m.values,
									g = m.onChange,
									h = g === void 0 ? function () {} : g;
								if (r.keyCode === 37 || r.keyCode === 39) {
									K(a);
									var C = r.keyCode === 37 ? -1 : 1,
										D = W(d[a], C),
										P = [].concat(d.slice(0, a), [D], d.slice(a + 1)),
										T = e(P);
									h(T);
								}
							},
							[$, W]
						),
						q = l.default.useCallback(
							function (r, a) {
								K(a);
								var m = function d(g) {
									var h = $(),
										C = h.tempValues,
										D = h.values,
										P = h.onChange,
										T = P === void 0 ? function () {} : P,
										x = h.onDrag,
										N = x === void 0 ? function () {} : x;
									document.removeEventListener('mousemove', I),
										document.removeEventListener('touchmove', I),
										document.removeEventListener('mouseup', d),
										document.removeEventListener('touchend', d);
									var V = e(C || D);
									T(V), N(V), K(null), X();
								};
								document.addEventListener('mousemove', I),
									document.addEventListener('touchmove', I),
									document.addEventListener('mouseup', m),
									document.addEventListener('touchend', m);
							},
							[$, I]
						),
						M = l.default.useCallback(
							function (r) {
								return u.getPercentageForValue(r, p, b);
							},
							[u, b, p]
						),
						ee = l.default.useMemo(
							function () {
								var r = E || j;
								if (!r) {
									for (r = [p]; r[r.length - 1] < b - L; ) r.push(r[r.length - 1] + L);
									r.push(b);
								}
								return r.map(function (a, m) {
									return {
										value: a,
										getTickProps: function (g) {
											var h = g === void 0 ? {} : g,
												C = h.key,
												D = C === void 0 ? m : C,
												P = h.style,
												T = P === void 0 ? {} : P,
												x = s(h, ['key', 'style']);
											return f({ key: D, style: f({ position: 'absolute', width: 0, left: M(a) + '%', transform: 'translateX(-50%)' }, T) }, x);
										},
									};
								});
							},
							[E, M, b, p, j, L]
						),
						te = l.default.useMemo(
							function () {
								var r = e(A || k);
								return [].concat(r, [b]).map(function (a, m) {
									return {
										value: a,
										getSegmentProps: function (g) {
											var h = g === void 0 ? {} : g,
												C = h.key,
												D = C === void 0 ? m : C,
												P = h.style,
												T = P === void 0 ? {} : P,
												x = s(h, ['key', 'style']),
												N = M(r[m - 1] ? r[m - 1] : p),
												V = M(a) - N;
											return f({ key: D, style: f({ position: 'absolute', left: N + '%', width: V + '%' }, T) }, x);
										},
									};
								});
							},
							[M, b, p, A, k]
						),
						re = l.default.useMemo(
							function () {
								return (A || k).map(function (r, a) {
									return {
										value: r,
										active: a === z,
										getHandleProps: function (d) {
											var g = d === void 0 ? {} : d,
												h = g.key,
												C = h === void 0 ? a : h,
												D = g.ref,
												P = g.innerRef,
												T = g.onKeyDown,
												x = g.onMouseDown,
												N = g.onTouchStart,
												V = g.style,
												ne = V === void 0 ? {} : V,
												oe = s(g, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return f(
												{
													key: C,
													onKeyDown: function (S) {
														S.persist(), Z(S, a), T && T(S);
													},
													onMouseDown: function (S) {
														S.persist(), q(S, a), x && x(S);
													},
													onTouchStart: function (S) {
														S.persist(), q(S, a), N && N(S);
													},
													role: 'slider',
													'aria-valuemin': p,
													'aria-valuemax': b,
													'aria-valuenow': r,
													style: f(
														{ position: 'absolute', top: '50%', left: M(r) + '%', zIndex: a === z ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ne
													),
												},
												oe
											);
										},
									};
								});
							},
							[z, M, Z, q, p, b, A, k]
						),
						ae = function (a) {
							var m = a === void 0 ? {} : a,
								d = m.style,
								g = d === void 0 ? {} : d,
								h = m.ref,
								C = s(m, ['style', 'ref']);
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
					return { activeHandleIndex: z, getTrackProps: ae, ticks: ee, segments: te, handles: re };
				}
			},
		},
	]);
})();
