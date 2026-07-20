'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[940],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(g, d, e) {
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(d, ['P', 0, s]);
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
					O = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					b = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					T = e('./components/src/types.ts'),
					S = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					Y = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					B = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					k = e('./components/src/components/Atoms/Button/Button.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					z = e.n(w),
					P = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					V = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const H = () =>
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
					L = (0, n.PA)((G) => {
						const $ = (0, p.u)(),
							F = (0, O.LU)(),
							y = {
								layout: T.V.grid,
								treePath: F,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							m = (0, M.v6)('result', $, y, G),
							{
								result: _,
								hideBadge: I,
								hideTitle: Q,
								hidePricing: Z,
								hideImage: J,
								detailSlot: W,
								fallback: X,
								disableStyles: E,
								className: U,
								internalClassName: K,
								layout: N,
								onClick: j,
								controller: R,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: q,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: le,
								hideRating: ie,
								trackingRef: de,
								treePath: v,
							} = m,
							{ overrideElement: me, shouldRenderDefault: ce } = (0, x._)('result', {
								...m,
								customComponent: m.customComponent && m.customComponent !== 'Result' ? m.customComponent : void 0,
							});
						if (!ce) return me;
						const c = _?.display?.mappings.core || _?.mappings?.core,
							[_e, ee] = (0, l.J0)(!1),
							h = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, u.s)({ disableStyles: E }),
									theme: m.theme,
									treePath: v,
								},
								price: { internalClassName: 'ss__result__price', ...(0, u.s)({ disableStyles: E }), theme: m.theme, treePath: v },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: _,
									...(0, u.s)({ disableStyles: E }),
									theme: m.theme,
									treePath: v,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: _,
									controller: R,
									...(0, u.s)({ disableStyles: E }),
									theme: m.theme,
									treePath: v,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: c?.name || '',
									src: c?.imageUrl || '',
									...(0, u.s)({ disableStyles: E, fallback: X }),
									theme: m.theme,
									treePath: v,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: c?.rating || 0,
									count: Number(c?.ratingCount || 0),
									...(0, u.s)({ disableStyles: E }),
									theme: m.theme,
									treePath: v,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (C) => {
										ee(!0), q && q(C, _), R?.addToCart([_]), setTimeout(() => ee(!1), le);
									},
									...(0, u.s)({ disableStyles: E }),
									theme: m.theme,
									treePath: v,
								},
							};
						let te = c?.name;
						m.truncateTitle && (te = b.x(c?.name || '', m.truncateTitle.limit, m.truncateTitle.append));
						const ue = (0, D.Z)(m, H),
							fe = { addToCartButtonText: { value: _e ? re : ae } },
							pe = z()(fe, m.lang || {}),
							ge = (0, P.u)(pe, { result: _, controller: R }),
							se = !!(c?.msrp && c?.price && c?.price < c?.msrp),
							he = R?.store?.config?.asyncState?.product?.price ? _.state.priceFetched : !0;
						return c
							? (0, s.Y)(f._, {
									children: (0, s.FD)('article', {
										...ue,
										className: r()('ss__result', `ss__result--${N}`, { 'ss__result--sale': se }, U, K),
										ref: de,
										children: [
											!J &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: c.url,
														onClick: (C) => {
															j && j(C);
														},
														children: I
															? (0, s.Y)(a._, { ...h.image })
															: (0, s.Y)(Y.Q, { ...h.overlayBadge, controller: R, children: (0, s.Y)(a._, { ...h.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!I && (0, s.Y)(S.W, { ...h.calloutBadge, controller: R }),
													!Q &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: c.url,
																onClick: (C) => {
																	j && j(C);
																},
																dangerouslySetInnerHTML: { __html: te || '' },
															}),
														}),
													!ie && (0, s.Y)(B.G, { ...h.rating }),
													!Z && he && c.price && c.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: se
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...h.price, value: c.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...h.price, value: c.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...h.price, value: c.price }),
														  })
														: null,
													(0, A.Y)(W, { result: _, treePath: v }),
													!oe && _.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: _.variants?.selections.map((C) => (0, s.Y)(V.m, { ...h.variantSelection, type: C.type, selection: C })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(k.$, { ...h.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(d, ['Q', 0, L]);
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(g, d, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					t = e.n(o),
					r = e('../../node_modules/classnames/index.js'),
					a = e.n(r),
					i = e('./components/src/components/Molecules/Result/Result.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useComponent.tsx');
				const T = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					S = () => (0, l.AH)({}),
					Y = (0, n.PA)((B) => {
						const k = (0, u.u)(),
							w = (0, D.LU)(),
							z = { resultWidth: '240px', name: B.controller?.store?.profile?.tag?.toLowerCase(), treePath: w },
							P = (0, O.v6)('recommendationEmail', k, z, B),
							{ controller: x, results: V, resultWidth: H, treePath: L, disableStyles: G, internalClassName: $, className: F } = P,
							y = P.resultComponent,
							m = (0, M.uk)(),
							_ = typeof y == 'string',
							I = _ ? y : '',
							Q = m?.templates?.library.import.component.result || {},
							{ ComponentOverride: Z, shouldWaitForNamedOverride: J } = (0, b.x)(Q, _ ? I : void 0),
							W = _ ? Z : y,
							X = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, p.s)({ disableStyles: G }), theme: P?.theme, treePath: L },
							},
							E = (0, A.Z)(P, S),
							U = V || x?.store?.results || [];
						return U.length > 0
							? (0, s.Y)('div', {
									className: a()('ss__recommendation-email', F, $),
									...E,
									children: U.map((K, N) =>
										(0, s.Y)(
											'div',
											{
												id: `ss-emailrec${N}`,
												className: a()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: H },
												children: W
													? (0, f.Y)(W, {
															controller: x,
															result: K,
															email: !0,
															theme: _ ? t()(P.theme || {}, { components: { result: { customComponent: y }, image: { lazy: !1 } } }) : P.theme,
															treePath: L,
													  })
													: J
													? null
													: (0, s.Y)(i.Q, { result: K, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...X.result }),
											},
											N
										)
									),
							  })
							: (0, s.Y)(s.FK, {});
					});
				e.d(d, ['O', 0, T, 'i', 0, Y]);
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
				e.d(d, { A: () => s }), e.dn(s);
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
							O = t[this.toHex()];
						if (O) return O;
						if (i?.closest) {
							var A = this.toRgb(),
								u = 1 / 0,
								M = 'black';
							if (!a.length) for (var D in o) a[D] = new l(o[D]).toRgb();
							for (var b in o) {
								var T = ((f = A), (p = a[b]), Math.pow(f.r - p.r, 2) + Math.pow(f.g - p.g, 2) + Math.pow(f.b - p.b, 2));
								T < u && ((u = T), (M = b));
							}
							return M;
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
