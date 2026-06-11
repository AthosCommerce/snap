'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[940],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(g, d, e) {
				e.d(d, { P: () => s });
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(g, d, e) {
				e.d(d, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(g, d, e) {
				e.d(d, { Z: () => s });
				function s(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const r = l(n, t.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = r.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(n, o) {
					const t = n.toString(),
						r = t.indexOf('.'),
						a = r == -1 ? t.length : 1 + r + (o || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(g, d, e) {
				e.d(d, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(g, d, e) {
				e.d(d, { x: () => s });
				function s(l, n, o) {
					if (typeof l != 'string' || l.length <= n) return l;
					const t = l.lastIndexOf(' ', n),
						r = t != -1 ? t : n - 1;
					return l.substr(0, r) + (o || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.tsx'(g, d, e) {
				e.d(d, { Q: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					f = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					M = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					T = e('./components/src/types.ts'),
					B = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					S = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					k = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					Y = e('./components/src/components/Atoms/Button/Button.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(D),
					w = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					z = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const I = () =>
						(0, o.AH)({
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
					V = (0, n.PA)((H) => {
						const G = (0, p.u)(),
							R = (0, C.LU)(),
							$ = {
								layout: T.V.grid,
								treePath: R,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							m = (0, O.v6)('result', G, $, H),
							{
								result: u,
								hideBadge: W,
								hideTitle: Q,
								hidePricing: Z,
								hideImage: U,
								detailSlot: F,
								fallback: J,
								disableStyles: h,
								className: K,
								internalClassName: N,
								layout: se,
								onClick: j,
								controller: A,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: X,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: le,
								hideRating: ie,
								trackingRef: de,
								treePath: P,
							} = m,
							{ overrideElement: me, shouldRenderDefault: ce } = (0, L._)('result', {
								...m,
								customComponent: m.customComponent && m.customComponent !== 'Result' ? m.customComponent : void 0,
							});
						if (!ce) return me;
						const c = u?.display?.mappings.core || u?.mappings?.core,
							[_e, q] = (0, l.J0)(!1),
							E = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, _.s)({ disableStyles: h }),
									theme: m.theme,
									treePath: P,
								},
								price: { internalClassName: 'ss__result__price', ...(0, _.s)({ disableStyles: h }), theme: m.theme, treePath: P },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: u,
									...(0, _.s)({ disableStyles: h }),
									theme: m.theme,
									treePath: P,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: u,
									controller: A,
									...(0, _.s)({ disableStyles: h }),
									theme: m.theme,
									treePath: P,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: c?.name || '',
									src: c?.imageUrl || '',
									...(0, _.s)({ disableStyles: h, fallback: J }),
									theme: m.theme,
									treePath: P,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: c?.rating || 0,
									count: Number(c?.ratingCount || 0),
									...(0, _.s)({ disableStyles: h }),
									theme: m.theme,
									treePath: P,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (v) => {
										q(!0), X && X(v, u), A?.addToCart([u]), setTimeout(() => q(!1), le);
									},
									...(0, _.s)({ disableStyles: h }),
									theme: m.theme,
									treePath: P,
								},
							};
						let ee = c?.name;
						m.truncateTitle && (ee = M.x(c?.name || '', m.truncateTitle.limit, m.truncateTitle.append));
						const ue = (0, b.Z)(m, I),
							fe = { addToCartButtonText: { value: _e ? re : ae } },
							pe = x()(fe, m.lang || {}),
							ge = (0, w.u)(pe, { result: u, controller: A }),
							te = !!(c?.msrp && c?.price && c?.price < c?.msrp);
						return c
							? (0, s.Y)(f._, {
									children: (0, s.FD)('article', {
										...ue,
										className: r()('ss__result', `ss__result--${se}`, { 'ss__result--sale': te }, K, N),
										ref: de,
										children: [
											!U &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: c.url,
														onClick: (v) => {
															j && j(v);
														},
														children: W
															? (0, s.Y)(a._, { ...E.image })
															: (0, s.Y)(S.Q, { ...E.overlayBadge, controller: A, children: (0, s.Y)(a._, { ...E.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, s.Y)(B.W, { ...E.calloutBadge, controller: A }),
													!Q &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: c.url,
																onClick: (v) => {
																	j && j(v);
																},
																dangerouslySetInnerHTML: { __html: ee || '' },
															}),
														}),
													!ie && (0, s.Y)(k.G, { ...E.rating }),
													!Z && c.price && c.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: te
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...E.price, value: c.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...E.price, value: c.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...E.price, value: c.price }),
														  })
														: null,
													(0, y.Y)(F, { result: u, treePath: P }),
													!oe && u.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: u.variants?.selections.map((v) => (0, s.Y)(z.m, { ...E.variantSelection, type: v.type, selection: v })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(Y.$, { ...E.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(g, d, e) {
				e.d(d, { O: () => b, i: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/components/Molecules/Result/Result.tsx'),
					a = e('./components/src/utilities/cloneWithProps.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					_ = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useComponent.tsx');
				const b = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					M = () => (0, l.AH)({}),
					T = (0, n.PA)((B) => {
						const S = (0, C.u)(),
							k = (0, _.LU)(),
							Y = { resultWidth: '240px', name: B.controller?.store?.profile?.tag?.toLowerCase(), treePath: k },
							D = (0, f.v6)('recommendationEmail', S, Y, B),
							{ controller: x, results: w, resultProps: L, resultWidth: z, treePath: I, disableStyles: V, internalClassName: H, className: G } = D,
							R = D.resultComponent,
							$ = (0, y.uk)(),
							m = typeof R == 'string',
							u = m ? R : '',
							W = $?.templates?.library.import.component.result || {},
							{ ComponentOverride: Q, shouldWaitForNamedOverride: Z } = (0, O.x)(W, m ? u : void 0),
							U = m ? Q : R,
							F = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, i.s)({ disableStyles: V }), theme: D?.theme, treePath: I },
							},
							J = (0, p.Z)(D, M),
							h = w || x?.store?.results || [];
						return h.length > 0
							? (0, s.Y)('div', {
									className: t()('ss__recommendation-email', G, H),
									...J,
									children: h.map((K, N) =>
										(0, s.Y)(
											'div',
											{
												id: `ss-emailrec${N}`,
												className: t()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: z },
												children: U
													? (0, a.Y)(U, { controller: x, result: K, ...L, email: !0, treePath: I })
													: Z
													? null
													: (0, s.Y)(r.Q, { result: K, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...F.result, ...L }),
											},
											N
										)
									),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/types.ts'(g, d, e) {
				e.d(d, { Q: () => l, V: () => s });
				var s = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(s || {}),
					l = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(l || {});
			},
			'./src/Templates/Stores/library/components/RecommendationEmail.ts'(g, d, e) {
				e.r(d), e.d(d, { RecommendationEmail: () => s.i });
				var s = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(g, d, e) {
				e.d(d, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(l, n) {
					var o = {
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
						t = {};
					for (var r in o) t[o[r]] = r;
					var a = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var f,
							p,
							C = t[this.toHex()];
						if (C) return C;
						if (i?.closest) {
							var y = this.toRgb(),
								_ = 1 / 0,
								O = 'black';
							if (!a.length) for (var b in o) a[b] = new l(o[b]).toRgb();
							for (var M in o) {
								var T = ((f = y), (p = a[M]), Math.pow(f.r - p.r, 2) + Math.pow(f.g - p.g, 2) + Math.pow(f.b - p.b, 2));
								T < _ && ((_ = T), (O = M));
							}
							return O;
						}
					}),
						n.string.push([
							function (i) {
								var f = i.toLowerCase(),
									p = f === 'transparent' ? '#0000' : o[f];
								return p ? new l(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(g, d, e) {
				e.d(d, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function l(o, t, r) {
					for (r of o.keys()) if (n(r, t)) return r;
				}
				function n(o, t) {
					var r, a, i;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((a = o.length) === t.length) for (; a-- && n(o[a], t[a]); );
							return a === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((i = a), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((i = a[0]), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !n(a[1], t.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o[a] === t[a]; );
							return a === -1;
						}
						if (!r || typeof o == 'object') {
							a = 0;
							for (r in o) if ((s.call(o, r) && ++a && !s.call(t, r)) || !(r in t) || !n(o[r], t[r])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return o !== o && t !== t;
				}
			},
		},
	]);
})();
