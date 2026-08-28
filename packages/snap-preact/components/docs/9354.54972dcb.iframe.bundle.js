'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9354],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(p, d, t) {
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
				t.d(d, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(p, d, t) {
				t.d(d, { G: () => l });
				var s = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(r, a) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...a };
					return (0, s.Z)(r, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(p, d, t) {
				t.d(d, { Z: () => s });
				function s(r, a) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...a };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const o = l(r, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let n = o.join(e.decimalSeparator);
					return e.symbolAfter ? (n = n + e.symbol) : (n = e.symbol + n), n;
				}
				function l(r, a) {
					const e = r.toString(),
						o = e.indexOf('.'),
						n = o == -1 ? e.length : 1 + o + (a || -1);
					return e.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(p, d, t) {
				t.d(d, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(p, d, t) {
				t.d(d, { x: () => s });
				function s(l, r, a) {
					if (typeof l != 'string' || l.length <= r) return l;
					const e = l.lastIndexOf(' ', r),
						o = e != -1 ? e : r - 1;
					return l.substr(0, o) + (a || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.tsx'(p, d, t) {
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					a = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					n = t('./components/src/components/Atoms/Image/Image.tsx'),
					i = t('./components/src/components/Atoms/Price/Price.tsx'),
					h = t('./components/src/providers/cache.tsx'),
					b = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = t('./components/src/providers/treePath.tsx'),
					D = t('./components/src/utilities/cloneWithProps.tsx'),
					f = t('./components/src/utilities/defined.ts'),
					C = t('./components/src/utilities/mergeProps.ts'),
					T = t('./components/src/utilities/mergeStyles.ts'),
					M = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					O = t('./components/src/types.ts'),
					U = t('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					W = t('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = t('./components/src/components/Molecules/Rating/Rating.tsx'),
					x = t('./components/src/components/Atoms/Button/Button.tsx'),
					j = t('../../node_modules/deepmerge/dist/cjs.js'),
					Y = t.n(j),
					z = t('./components/src/hooks/useLang.tsx'),
					V = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = t('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const H = () =>
						(0, a.AH)({
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
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
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
					G = (0, r.PA)(($) => {
						const A = (0, b.u)(),
							Z = (0, y.LU)(),
							F = {
								layout: O.V.grid,
								treePath: Z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							c = (0, C.v6)('result', A, F, $),
							{
								result: m,
								hideBadge: k,
								hideTitle: J,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: E,
								className: se,
								internalClassName: ae,
								layout: re,
								onClick: B,
								controller: P,
								hideVariantSelections: ne,
								hideAddToCartButton: oe,
								onAddToCartClick: R,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ie,
								addToCartButtonSuccessTimeout: de,
								hideRating: ce,
								hideQuickviewButton: ue,
								onQuickviewClick: L,
								trackingRef: me,
								treePath: v,
							} = c,
							{ overrideElement: fe, shouldRenderDefault: _e } = (0, V._)('result', {
								...c,
								customComponent: c.customComponent && c.customComponent !== 'Result' ? c.customComponent : void 0,
							});
						if (!_e) return fe;
						const u = m?.display?.mappings.core || m?.mappings?.core,
							[ge, w] = (0, l.J0)(!1),
							_ = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
								price: { internalClassName: 'ss__result__price', ...(0, f.s)({ disableStyles: E }), theme: c.theme, treePath: v },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: m,
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: m,
									controller: P,
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: u?.name || '',
									src: u?.imageUrl || '',
									...(0, f.s)({ disableStyles: E, fallback: te }),
									theme: c.theme,
									treePath: v,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: u?.rating || 0,
									count: Number(u?.ratingCount || 0),
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (g) => {
										L && L(g, m), P?.quickview(m);
									},
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (g) => {
										w(!0), R && R(g, m), P?.addToCart([m]), setTimeout(() => w(!1), de);
									},
									...(0, f.s)({ disableStyles: E }),
									theme: c.theme,
									treePath: v,
								},
							};
						let I = u?.name;
						c.truncateTitle && (I = M.x(u?.name || '', c.truncateTitle.limit, c.truncateTitle.append));
						const pe = (0, T.Z)(c, H),
							he = { addToCartButtonText: { value: ge ? ie : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							be = Y()(he, c.lang || {}),
							N = (0, z.u)(be, { result: m, controller: P }, { activeBreakpoint: A?.activeBreakpoint }),
							S = !!(u?.msrp && u?.price && u?.price < u?.msrp),
							ve = P?.store?.config?.asyncState?.product?.price ? m.state.priceFetched : !0;
						return u
							? (0, s.Y)(h._, {
									children: (0, s.FD)('article', {
										...pe,
										className: o()('ss__result', `ss__result--${re}`, { 'ss__result--sale': S }, se, ae),
										ref: me,
										children: [
											!q &&
												(0, s.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, s.Y)('a', {
															href: u.url,
															onClick: (g) => {
																B && B(g);
															},
															children: k
																? (0, s.Y)(n._, { ..._.image })
																: (0, s.Y)(W.Q, { ..._.overlayBadge, controller: P, children: (0, s.Y)(n._, { ..._.image }) }),
														}),
														!ue && P?.quickviewManager && (0, s.Y)(x.$, { ..._.quickviewButton, ...N.quickviewButtonText.attributes }),
													],
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!k && (0, s.Y)(U.W, { ..._.calloutBadge, controller: P }),
													!J &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: u.url,
																onClick: (g) => {
																	B && B(g);
																},
																dangerouslySetInnerHTML: { __html: I || '' },
															}),
														}),
													!ce && (0, s.Y)(K.G, { ..._.rating }),
													!X && ve && u.price && u.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: S
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ..._.price, value: u.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ..._.price, value: u.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ..._.price, value: u.price }),
														  })
														: null,
													(0, D.Y)(ee, { result: m, treePath: v }),
													!ne && m.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: m.variants?.selections.map((g) => (0, s.Y)(Q.m, { ..._.variantSelection, type: g.type, selection: g })),
														  })
														: null,
													!oe &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(x.$, { ..._.button, ...N.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				t.d(d, ['Q', 0, G]);
			},
			'./components/src/types.ts'(p, d, t) {
				t.d(d, { Q: () => l, V: () => s });
				var s = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(s || {}),
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
			'./src/Templates/Stores/library/components/Result.ts'(p, d, t) {
				t.r(d), t.d(d, { Result: () => s.Q });
				var s = t('./components/src/components/Molecules/Result/Result.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(p, d, t) {
				t.d(d, { A: () => s }), t.dn(s);
				function s(l, r) {
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
					for (var o in a) e[a[o]] = o;
					var n = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var h,
							b,
							y = e[this.toHex()];
						if (y) return y;
						if (i?.closest) {
							var D = this.toRgb(),
								f = 1 / 0,
								C = 'black';
							if (!n.length) for (var T in a) n[T] = new l(a[T]).toRgb();
							for (var M in a) {
								var O = ((h = D), (b = n[M]), Math.pow(h.r - b.r, 2) + Math.pow(h.g - b.g, 2) + Math.pow(h.b - b.b, 2));
								O < f && ((f = O), (C = M));
							}
							return C;
						}
					}),
						r.string.push([
							function (i) {
								var h = i.toLowerCase(),
									b = h === 'transparent' ? '#0000' : a[h];
								return b ? new l(b).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(p, d, t) {
				t.d(d, { j: () => r });
				var s = Object.prototype.hasOwnProperty;
				function l(a, e, o) {
					for (o of a.keys()) if (r(o, e)) return o;
				}
				function r(a, e) {
					var o, n, i;
					if (a === e) return !0;
					if (a && e && (o = a.constructor) === e.constructor) {
						if (o === Date) return a.getTime() === e.getTime();
						if (o === RegExp) return a.toString() === e.toString();
						if (o === Array) {
							if ((n = a.length) === e.length) for (; n-- && r(a[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (a.size !== e.size) return !1;
							for (n of a) if (((i = n), (i && typeof i == 'object' && ((i = l(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (a.size !== e.size) return !1;
							for (n of a) if (((i = n[0]), (i && typeof i == 'object' && ((i = l(e, i)), !i)) || !r(n[1], e.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (a = new Uint8Array(a)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((n = a.byteLength) === e.byteLength) for (; n-- && a.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(a)) {
							if ((n = a.byteLength) === e.byteLength) for (; n-- && a[n] === e[n]; );
							return n === -1;
						}
						if (!o || typeof a == 'object') {
							n = 0;
							for (o in a) if ((s.call(a, o) && ++n && !s.call(e, o)) || !(o in e) || !r(a[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return a !== a && e !== e;
				}
			},
		},
	]);
})();
