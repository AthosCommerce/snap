'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9712],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(v, d, t) {
				t.d(d, { P: () => a });
				const a = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(v, d, t) {
				t.d(d, { G: () => n });
				var a = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(l, s) {
					const e = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...s };
					return (0, a.Z)(l, e);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(v, d, t) {
				t.d(d, { Z: () => a });
				function a(l, s) {
					const e = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...s };
					if (typeof l != 'number' || Number.isNaN(l)) return;
					const o = n(l, e.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + e.thousandsSeparator)),
						e.decimalPlaces > 0 && e.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(e.decimalPlaces, '0'));
					let r = o.join(e.decimalSeparator);
					return e.symbolAfter ? (r = r + e.symbol) : (r = e.symbol + r), r;
				}
				function n(l, s) {
					const e = l.toString(),
						o = e.indexOf('.'),
						r = o == -1 ? e.length : 1 + o + (s || -1);
					return e.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, d, t) {
				t.d(d, { p: () => a });
				function a(n) {
					if (typeof n != 'string') return n;
					let l = n.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(v, d, t) {
				t.d(d, { x: () => a });
				function a(n, l, s) {
					if (typeof n != 'string' || n.length <= l) return n;
					const e = n.lastIndexOf(' ', l),
						o = e != -1 ? e : l - 1;
					return n.substr(0, o) + (s || '');
				}
			},
			'./components/src/components/Molecules/OverlayResult/OverlayResult.tsx'(v, d, t) {
				t.d(d, { O: () => Z });
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					r = t('./components/src/components/Atoms/Image/Image.tsx'),
					i = t('./components/src/components/Atoms/Price/Price.tsx'),
					g = t('./components/src/providers/cache.tsx'),
					p = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = t('./components/src/providers/treePath.tsx'),
					B = t('./components/src/utilities/cloneWithProps.tsx'),
					f = t('./components/src/utilities/defined.ts'),
					C = t('./components/src/utilities/mergeProps.ts'),
					T = t('./components/src/utilities/mergeStyles.ts'),
					x = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					D = t('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					U = t('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					j = t('./components/src/components/Molecules/Rating/Rating.tsx'),
					W = t('./components/src/components/Atoms/Button/Button.tsx'),
					K = t('../../node_modules/deepmerge/dist/cjs.js'),
					Y = t.n(K),
					z = t('./components/src/hooks/useLang.tsx'),
					F = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					V = t('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const H = (A) => {
						const { overlayBackground: R, disableSlide: E } = A;
						return (0, s.AH)({
							position: 'relative',
							overflow: 'hidden',
							'& .ss__overlay-result__image-wrapper': {
								position: 'relative',
								width: '100%',
								'& .ss__overlay-result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
								'& .ss__overlay-result__image': { display: 'block', width: '100%', objectFit: 'cover' },
							},
							'& .ss__overlay-result__details': {
								position: 'absolute',
								bottom: 0,
								left: 0,
								right: 0,
								width: '100%',
								boxSizing: 'border-box',
								padding: '18px 10px 10px',
								background: R,
								color: '#fff',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-end',
								alignItems: 'flex-start',
								textAlign: 'left',
								transform: 'translateY(0)',
								transition: E ? 'none' : 'transform 260ms ease',
								'& .ss__overlay-result__details__title': { marginBottom: '4px', '& a': { color: 'inherit', textDecoration: 'none' } },
								'& .ss__overlay-result__details__pricing': {
									marginBottom: '4px',
									'& .ss__overlay-result__price': { color: '#fff', fontSize: '1.3em' },
									'& .ss__price--strike': { color: 'rgba(255,255,255,0.7)', fontSize: '0.9em' },
								},
								'& .ss__overlay-result__rating': { marginBottom: '4px' },
								'& .ss__overlay-result__button--addToCart': { marginTop: '6px' },
								'& .ss__overlay-result__details__extra': {
									display: 'grid',
									gridTemplateRows: E ? '1fr' : '0fr',
									opacity: E ? 1 : 0,
									transform: E ? 'translateY(0)' : 'translateY(1px)',
									transition: E ? 'none' : 'grid-template-rows 260ms ease, opacity 220ms ease, transform 260ms ease',
									width: '100%',
									'& .ss__overlay-result__details__extra-inner': { overflow: 'hidden', minHeight: 0 },
								},
							},
							'&:hover .ss__overlay-result__details': { transform: 'translateY(0)' },
							'&:hover .ss__overlay-result__details .ss__overlay-result__details__extra': {
								gridTemplateRows: '1fr',
								opacity: 1,
								transform: 'translateY(0)',
							},
							'&:focus-within .ss__overlay-result__details': { transform: 'translateY(0)' },
							'&:focus-within .ss__overlay-result__details .ss__overlay-result__details__extra': {
								gridTemplateRows: '1fr',
								opacity: 1,
								transform: 'translateY(0)',
							},
							'@media (hover: none)': {
								'& .ss__overlay-result__details .ss__overlay-result__details__extra': {
									gridTemplateRows: '1fr',
									opacity: 1,
									transform: 'translateY(0)',
								},
							},
						});
					},
					Z = (0, l.PA)((A) => {
						const R = (0, p.u)(),
							$ = {
								treePath: (0, O.LU)(),
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								overlayBackground: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
							},
							_ = (0, C.v6)('overlayResult', R, $, A),
							{
								result: m,
								hideBadge: w,
								hideTitle: G,
								hidePricing: J,
								hideImage: Q,
								detailSlot: X,
								fallback: q,
								disableStyles: y,
								className: ee,
								internalClassName: te,
								onClick: M,
								controller: P,
								hideVariantSelections: se,
								hideAddToCartButton: ae,
								onAddToCartClick: L,
								addToCartButtonText: k,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: oe,
								hideRating: le,
								trackingRef: ne,
								treePath: h,
							} = _,
							{ overrideElement: ie, shouldRenderDefault: de } = (0, F._)('overlayResult', {
								..._,
								customComponent:
									!h?.split(' ')?.includes('result') && _.customComponent && _.customComponent !== 'OverlayResult' ? _.customComponent : void 0,
							});
						if (!de) return ie;
						const c = m?.display?.mappings.core || m?.mappings?.core,
							[ce, I] = (0, n.J0)(!1),
							u = {
								variantSelection: {
									internalClassName: 'ss__overlay-result__variant-selection',
									...(0, f.s)({ disableStyles: y }),
									theme: _.theme,
									treePath: h,
								},
								price: { internalClassName: 'ss__overlay-result__price', ...(0, f.s)({ disableStyles: y }), theme: _.theme, treePath: h },
								calloutBadge: {
									internalClassName: 'ss__overlay-result__callout-badge',
									result: m,
									...(0, f.s)({ disableStyles: y }),
									theme: _.theme,
									treePath: h,
								},
								overlayBadge: {
									internalClassName: 'ss__overlay-result__overlay-badge',
									result: m,
									controller: P,
									...(0, f.s)({ disableStyles: y }),
									theme: _.theme,
									treePath: h,
								},
								image: {
									internalClassName: 'ss__overlay-result__image',
									alt: c?.name || '',
									src: c?.imageUrl || '',
									...(0, f.s)({ disableStyles: y, fallback: q }),
									theme: _.theme,
									treePath: h,
								},
								rating: {
									internalClassName: 'ss__overlay-result__rating',
									value: c?.rating || 0,
									count: Number(c?.ratingCount || 0),
									...(0, f.s)({ disableStyles: y }),
									theme: _.theme,
									treePath: h,
								},
								button: {
									internalClassName: 'ss__overlay-result__button--addToCart',
									onClick: (b) => {
										I(!0), L && L(b, m), P?.addToCart([m]), setTimeout(() => I(!1), oe);
									},
									...(0, f.s)({ disableStyles: y }),
									theme: _.theme,
									treePath: h,
								},
							};
						let N = c?.name;
						_.truncateTitle && (N = x.x(c?.name || '', _.truncateTitle.limit, _.truncateTitle.append));
						const _e = (0, T.Z)(_, H),
							fe = { addToCartButtonText: { value: ce ? re : k } },
							me = Y()(fe, _.lang || {}),
							ue = (0, z.u)(me, { result: m, controller: P }),
							S = !!(c?.msrp && c?.price && c?.price < c?.msrp);
						return c
							? (0, a.Y)(g._, {
									children: (0, a.FD)('article', {
										..._e,
										className: o()('ss__overlay-result', { 'ss__overlay-result--sale': S }, ee, te),
										ref: ne,
										children: [
											!Q &&
												(0, a.Y)('div', {
													className: 'ss__overlay-result__image-wrapper',
													children: (0, a.Y)('a', {
														href: c.url,
														onClick: (b) => {
															M && M(b);
														},
														children: w
															? (0, a.Y)(r._, { ...u.image })
															: (0, a.Y)(U.Q, { ...u.overlayBadge, controller: P, children: (0, a.Y)(r._, { ...u.image }) }),
													}),
												}),
											(0, a.FD)('div', {
												className: 'ss__overlay-result__details',
												children: [
													!G &&
														(0, a.Y)('div', {
															className: 'ss__overlay-result__details__title',
															children: (0, a.Y)('a', {
																href: c.url,
																onClick: (b) => {
																	M && M(b);
																},
																dangerouslySetInnerHTML: { __html: N || '' },
															}),
														}),
													(0, a.Y)('div', {
														className: 'ss__overlay-result__details__extra',
														children: (0, a.FD)('div', {
															className: 'ss__overlay-result__details__extra-inner',
															children: [
																!w && (0, a.Y)(D.W, { ...u.calloutBadge, controller: P }),
																!le && (0, a.Y)(j.G, { ...u.rating }),
																!J && c.price && c.price > 0
																	? (0, a.Y)('div', {
																			className: 'ss__overlay-result__details__pricing',
																			children: S
																				? (0, a.FD)(a.FK, {
																						children: [
																							(0, a.Y)(i.g, { ...u.price, value: c.msrp, lineThrough: !0, name: 'msrp' }),
																							'\xA0',
																							(0, a.Y)(i.g, { ...u.price, value: c.price, name: 'price' }),
																						],
																				  })
																				: (0, a.Y)(i.g, { ...u.price, value: c.price }),
																	  })
																	: null,
																(0, B.Y)(X, { result: m, treePath: h }),
																!se && m.variants?.selections.length
																	? (0, a.Y)('div', {
																			className: 'ss__overlay-result__details__variant-selection',
																			children: m.variants?.selections.map((b) => (0, a.Y)(V.m, { ...u.variantSelection, selection: b })),
																	  })
																	: null,
																!ae &&
																	(0, a.Y)('div', {
																		className: 'ss__overlay-result__add-to-cart-wrapper',
																		children: (0, a.Y)(W.$, { ...u.button, content: k, ...ue.addToCartButtonText.all }),
																	}),
															],
														}),
													}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./src/Templates/Stores/library/components/OverlayResult.ts'(v, d, t) {
				t.r(d), t.d(d, { OverlayResult: () => a.O });
				var a = t('./components/src/components/Molecules/OverlayResult/OverlayResult.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(v, d, t) {
				t.d(d, { A: () => a }), Object.defineProperty(a, 'name', { value: 'default', configurable: !0 });
				function a(n, l) {
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
					(n.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var g,
							p,
							O = e[this.toHex()];
						if (O) return O;
						if (i?.closest) {
							var B = this.toRgb(),
								f = 1 / 0,
								C = 'black';
							if (!r.length) for (var T in s) r[T] = new n(s[T]).toRgb();
							for (var x in s) {
								var D = ((g = B), (p = r[x]), Math.pow(g.r - p.r, 2) + Math.pow(g.g - p.g, 2) + Math.pow(g.b - p.b, 2));
								D < f && ((f = D), (C = x));
							}
							return C;
						}
					}),
						l.string.push([
							function (i) {
								var g = i.toLowerCase(),
									p = g === 'transparent' ? '#0000' : s[g];
								return p ? new n(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(v, d, t) {
				t.d(d, { j: () => l });
				var a = Object.prototype.hasOwnProperty;
				function n(s, e, o) {
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
							for (r of s) if (((i = r), (i && typeof i == 'object' && ((i = n(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== e.size) return !1;
							for (r of s) if (((i = r[0]), (i && typeof i == 'object' && ((i = n(e, i)), !i)) || !l(r[1], e.get(i)))) return !1;
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
							for (o in s) if ((a.call(s, o) && ++r && !a.call(e, o)) || !(o in e) || !l(s[o], e[o])) return !1;
							return Object.keys(e).length === r;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
