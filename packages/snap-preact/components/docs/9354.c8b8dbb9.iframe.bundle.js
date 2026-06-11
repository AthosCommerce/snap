'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9354],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(g, d, t) {
				t.d(d, { P: () => a });
				const a = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(g, d, t) {
				t.d(d, { G: () => l });
				var a = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(r, s) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...s };
					return (0, a.Z)(r, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(g, d, t) {
				t.d(d, { Z: () => a });
				function a(r, s) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...s };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const o = l(r, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let n = o.join(e.decimalSeparator);
					return e.symbolAfter ? (n = n + e.symbol) : (n = e.symbol + n), n;
				}
				function l(r, s) {
					const e = r.toString(),
						o = e.indexOf('.'),
						n = o == -1 ? e.length : 1 + o + (s || -1);
					return e.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(g, d, t) {
				t.d(d, { p: () => a });
				function a(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(g, d, t) {
				t.d(d, { x: () => a });
				function a(l, r, s) {
					if (typeof l != 'string' || l.length <= r) return l;
					const e = l.lastIndexOf(' ', r),
						o = e != -1 ? e : r - 1;
					return l.substr(0, o) + (s || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.tsx'(g, d, t) {
				t.d(d, { Q: () => V });
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					n = t('./components/src/components/Atoms/Image/Image.tsx'),
					i = t('./components/src/components/Atoms/Price/Price.tsx'),
					p = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = t('./components/src/providers/treePath.tsx'),
					B = t('./components/src/utilities/cloneWithProps.tsx'),
					m = t('./components/src/utilities/defined.ts'),
					C = t('./components/src/utilities/mergeProps.ts'),
					T = t('./components/src/utilities/mergeStyles.ts'),
					M = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					O = t('./components/src/types.ts'),
					k = t('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					U = t('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					N = t('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = t('./components/src/components/Atoms/Button/Button.tsx'),
					w = t('../../node_modules/deepmerge/dist/cjs.js'),
					W = t.n(w),
					K = t('./components/src/hooks/useLang.tsx'),
					j = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = t('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const z = () =>
						(0, s.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					V = (0, r.PA)((H) => {
						const G = (0, h.u)(),
							Q = (0, y.LU)(),
							$ = {
								layout: O.V.grid,
								treePath: Q,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							f = (0, C.v6)('result', G, $, H),
							{
								result: u,
								hideBadge: x,
								hideTitle: Z,
								hidePricing: J,
								hideImage: X,
								detailSlot: F,
								fallback: q,
								disableStyles: v,
								className: ee,
								internalClassName: te,
								layout: se,
								onClick: D,
								controller: P,
								hideVariantSelections: ae,
								hideAddToCartButton: re,
								onAddToCartClick: A,
								addToCartButtonText: ne,
								addToCartButtonSuccessText: oe,
								addToCartButtonSuccessTimeout: le,
								hideRating: ie,
								trackingRef: de,
								treePath: b,
							} = f,
							{ overrideElement: ce, shouldRenderDefault: fe } = (0, j._)('result', {
								...f,
								customComponent: f.customComponent && f.customComponent !== 'Result' ? f.customComponent : void 0,
							});
						if (!fe) return ce;
						const c = u?.display?.mappings.core || u?.mappings?.core,
							[me, R] = (0, l.J0)(!1),
							_ = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: v }),
									theme: f.theme,
									treePath: b,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: v }), theme: f.theme, treePath: b },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: u,
									...(0, m.s)({ disableStyles: v }),
									theme: f.theme,
									treePath: b,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: u,
									controller: P,
									...(0, m.s)({ disableStyles: v }),
									theme: f.theme,
									treePath: b,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: c?.name || '',
									src: c?.imageUrl || '',
									...(0, m.s)({ disableStyles: v, fallback: q }),
									theme: f.theme,
									treePath: b,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: c?.rating || 0,
									count: Number(c?.ratingCount || 0),
									...(0, m.s)({ disableStyles: v }),
									theme: f.theme,
									treePath: b,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (E) => {
										R(!0), A && A(E, u), P?.addToCart([u]), setTimeout(() => R(!1), le);
									},
									...(0, m.s)({ disableStyles: v }),
									theme: f.theme,
									treePath: b,
								},
							};
						let L = c?.name;
						f.truncateTitle && (L = M.x(c?.name || '', f.truncateTitle.limit, f.truncateTitle.append));
						const ue = (0, T.Z)(f, z),
							_e = { addToCartButtonText: { value: me ? oe : ne } },
							ge = W()(_e, f.lang || {}),
							pe = (0, K.u)(ge, { result: u, controller: P }),
							I = !!(c?.msrp && c?.price && c?.price < c?.msrp);
						return c
							? (0, a.Y)(p._, {
									children: (0, a.FD)('article', {
										...ue,
										className: o()('ss__result', `ss__result--${se}`, { 'ss__result--sale': I }, ee, te),
										ref: de,
										children: [
											!X &&
												(0, a.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, a.Y)('a', {
														href: c.url,
														onClick: (E) => {
															D && D(E);
														},
														children: x
															? (0, a.Y)(n._, { ..._.image })
															: (0, a.Y)(U.Q, { ..._.overlayBadge, controller: P, children: (0, a.Y)(n._, { ..._.image }) }),
													}),
												}),
											(0, a.FD)('div', {
												className: 'ss__result__details',
												children: [
													!x && (0, a.Y)(k.W, { ..._.calloutBadge, controller: P }),
													!Z &&
														(0, a.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, a.Y)('a', {
																href: c.url,
																onClick: (E) => {
																	D && D(E);
																},
																dangerouslySetInnerHTML: { __html: L || '' },
															}),
														}),
													!ie && (0, a.Y)(N.G, { ..._.rating }),
													!J && c.price && c.price > 0
														? (0, a.Y)('div', {
																className: 'ss__result__details__pricing',
																children: I
																	? (0, a.FD)(a.FK, {
																			children: [
																				(0, a.Y)(i.g, { ..._.price, value: c.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, a.Y)(i.g, { ..._.price, value: c.price, name: 'price' }),
																			],
																	  })
																	: (0, a.Y)(i.g, { ..._.price, value: c.price }),
														  })
														: null,
													(0, B.Y)(F, { result: u, treePath: b }),
													!ae && u.variants?.selections.length
														? (0, a.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: u.variants?.selections.map((E) => (0, a.Y)(Y.m, { ..._.variantSelection, type: E.type, selection: E })),
														  })
														: null,
													!re &&
														(0, a.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, a.Y)(S.$, { ..._.button, ...pe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(g, d, t) {
				t.d(d, { Q: () => l, V: () => a });
				var a = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(a || {}),
					l = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(l || {});
			},
			'./src/Templates/Stores/library/components/Result.ts'(g, d, t) {
				t.r(d), t.d(d, { Result: () => a.Q });
				var a = t('./components/src/components/Molecules/Result/Result.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(g, d, t) {
				t.d(d, { A: () => a }), Object.defineProperty(a, 'name', { value: 'default', configurable: !0 });
				function a(l, r) {
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
					var n = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var p,
							h,
							y = e[this.toHex()];
						if (y) return y;
						if (i?.closest) {
							var B = this.toRgb(),
								m = 1 / 0,
								C = 'black';
							if (!n.length) for (var T in s) n[T] = new l(s[T]).toRgb();
							for (var M in s) {
								var O = ((p = B), (h = n[M]), Math.pow(p.r - h.r, 2) + Math.pow(p.g - h.g, 2) + Math.pow(p.b - h.b, 2));
								O < m && ((m = O), (C = M));
							}
							return C;
						}
					}),
						r.string.push([
							function (i) {
								var p = i.toLowerCase(),
									h = p === 'transparent' ? '#0000' : s[p];
								return h ? new l(h).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(g, d, t) {
				t.d(d, { j: () => r });
				var a = Object.prototype.hasOwnProperty;
				function l(s, e, o) {
					for (o of s.keys()) if (r(o, e)) return o;
				}
				function r(s, e) {
					var o, n, i;
					if (s === e) return !0;
					if (s && e && (o = s.constructor) === e.constructor) {
						if (o === Date) return s.getTime() === e.getTime();
						if (o === RegExp) return s.toString() === e.toString();
						if (o === Array) {
							if ((n = s.length) === e.length) for (; n-- && r(s[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((i = n), (i && typeof i == 'object' && ((i = l(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((i = n[0]), (i && typeof i == 'object' && ((i = l(e, i)), !i)) || !r(n[1], e.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (s = new Uint8Array(s)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((n = s.byteLength) === e.byteLength) for (; n-- && s.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((n = s.byteLength) === e.byteLength) for (; n-- && s[n] === e[n]; );
							return n === -1;
						}
						if (!o || typeof s == 'object') {
							n = 0;
							for (o in s) if ((a.call(s, o) && ++n && !a.call(e, o)) || !(o in e) || !r(s[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
