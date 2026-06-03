'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9055],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(i, o, s) {
				s.d(o, { P: () => d });
				const d = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(i, o, s) {
				s.d(o, { G: () => n });
				var d = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(f, a) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...a };
					return (0, d.Z)(f, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(i, o, s) {
				s.d(o, { Z: () => d });
				function d(f, a) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...a };
					if (typeof f != 'number' || Number.isNaN(f)) return;
					const t = n(f, e.decimalPlaces).split('.');
					(t[0] = t[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (t[1] = (t[1] || '').padEnd(e.decimalPlaces, '0'));
					let r = t.join(e.decimalSeparator);
					return e.symbolAfter ? (r = r + e.symbol) : (r = e.symbol + r), r;
				}
				function n(f, a) {
					const e = f.toString(),
						t = e.indexOf('.'),
						r = t == -1 ? e.length : 1 + t + (a || -1);
					return e.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(i, o, s) {
				s.d(o, { p: () => d });
				function d(n) {
					if (typeof n != 'string') return n;
					let f = n.toLowerCase();
					return (f = f.replace(/[^\w\s]/g, '').trim()), (f = f.replace(/\s/g, '-')), f;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(i, o, s) {
				s.d(o, { x: () => d });
				function d(n, f, a) {
					if (typeof n != 'string' || n.length <= f) return n;
					const e = n.lastIndexOf(' ', f),
						t = e != -1 ? e : f - 1;
					return n.substr(0, t) + (a || '');
				}
			},
			'./src/Templates/Stores/library/components/Result.ts'(i, o, s) {
				s.r(o), s.d(o, { Result: () => d.Q });
				var d = s('./components/src/components/Molecules/Result/Result.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(i, o, s) {
				s.d(o, { A: () => d }), Object.defineProperty(d, 'name', { value: 'default', configurable: !0 });
				function d(n, f) {
					var a = {
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
					for (var t in a) e[a[t]] = t;
					var r = {};
					(n.prototype.toName = function (l) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var c,
							u,
							m = e[this.toHex()];
						if (m) return m;
						if (l?.closest) {
							var _ = this.toRgb(),
								b = 1 / 0,
								g = 'black';
							if (!r.length) for (var h in a) r[h] = new n(a[h]).toRgb();
							for (var p in a) {
								var y = ((c = _), (u = r[p]), Math.pow(c.r - u.r, 2) + Math.pow(c.g - u.g, 2) + Math.pow(c.b - u.b, 2));
								y < b && ((b = y), (g = p));
							}
							return g;
						}
					}),
						f.string.push([
							function (l) {
								var c = l.toLowerCase(),
									u = c === 'transparent' ? '#0000' : a[c];
								return u ? new n(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(i, o, s) {
				s.d(o, { j: () => f });
				var d = Object.prototype.hasOwnProperty;
				function n(a, e, t) {
					for (t of a.keys()) if (f(t, e)) return t;
				}
				function f(a, e) {
					var t, r, l;
					if (a === e) return !0;
					if (a && e && (t = a.constructor) === e.constructor) {
						if (t === Date) return a.getTime() === e.getTime();
						if (t === RegExp) return a.toString() === e.toString();
						if (t === Array) {
							if ((r = a.length) === e.length) for (; r-- && f(a[r], e[r]); );
							return r === -1;
						}
						if (t === Set) {
							if (a.size !== e.size) return !1;
							for (r of a) if (((l = r), (l && typeof l == 'object' && ((l = n(e, l)), !l)) || !e.has(l))) return !1;
							return !0;
						}
						if (t === Map) {
							if (a.size !== e.size) return !1;
							for (r of a) if (((l = r[0]), (l && typeof l == 'object' && ((l = n(e, l)), !l)) || !f(r[1], e.get(l)))) return !1;
							return !0;
						}
						if (t === ArrayBuffer) (a = new Uint8Array(a)), (e = new Uint8Array(e));
						else if (t === DataView) {
							if ((r = a.byteLength) === e.byteLength) for (; r-- && a.getInt8(r) === e.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(a)) {
							if ((r = a.byteLength) === e.byteLength) for (; r-- && a[r] === e[r]; );
							return r === -1;
						}
						if (!t || typeof a == 'object') {
							r = 0;
							for (t in a) if ((d.call(a, t) && ++r && !d.call(e, t)) || !(t in e) || !f(a[t], e[t])) return !1;
							return Object.keys(e).length === r;
						}
					}
					return a !== a && e !== e;
				}
			},
		},
	]);
})();
