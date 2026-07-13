'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6356],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(h, c, e) {
				e.d(c, { P: () => s });
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(h, c, e) {
				e.d(c, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(h, c, e) {
				e.d(c, { Z: () => s });
				function s(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const a = l(n, t.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(t.decimalPlaces, '0'));
					let r = a.join(t.decimalSeparator);
					return t.symbolAfter ? (r = r + t.symbol) : (r = t.symbol + r), r;
				}
				function l(n, o) {
					const t = n.toString(),
						a = t.indexOf('.'),
						r = a == -1 ? t.length : 1 + a + (o || -1);
					return t.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(h, c, e) {
				e.d(c, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(h, c, e) {
				e.d(c, { x: () => s });
				function s(l, n, o) {
					if (typeof l != 'string' || l.length <= n) return l;
					const t = l.lastIndexOf(' ', n),
						a = t != -1 ? t : n - 1;
					return l.substr(0, a) + (o || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.tsx'(h, c, e) {
				e.d(c, { Q: () => Q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					a = e.n(t),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					b = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					x = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					O = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					y = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					U = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(B),
					V = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const j = () =>
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
					Q = (0, n.PA)((Z) => {
						const X = (0, p.u)(),
							d = (0, T.LU)(),
							q = {
								layout: x.V.grid,
								treePath: d,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							u = (0, D.v6)('result', X, q, Z),
							{
								result: M,
								hideBadge: z,
								hideTitle: ee,
								hidePricing: te,
								hideImage: H,
								detailSlot: $,
								fallback: L,
								disableStyles: I,
								className: se,
								internalClassName: N,
								layout: oe,
								onClick: w,
								controller: k,
								hideVariantSelections: ne,
								hideAddToCartButton: F,
								onAddToCartClick: Y,
								addToCartButtonText: re,
								addToCartButtonSuccessText: E,
								addToCartButtonSuccessTimeout: ae,
								hideRating: le,
								trackingRef: ie,
								treePath: A,
							} = u,
							{ overrideElement: ce, shouldRenderDefault: v } = (0, G._)('result', {
								...u,
								customComponent: u.customComponent && u.customComponent !== 'Result' ? u.customComponent : void 0,
							});
						if (!v) return ce;
						const f = M?.display?.mappings.core || M?.mappings?.core,
							[de, J] = (0, l.J0)(!1),
							W = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: I }),
									theme: u.theme,
									treePath: A,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: I }), theme: u.theme, treePath: A },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: M,
									...(0, m.s)({ disableStyles: I }),
									theme: u.theme,
									treePath: A,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: M,
									controller: k,
									...(0, m.s)({ disableStyles: I }),
									theme: u.theme,
									treePath: A,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: f?.name || '',
									src: f?.imageUrl || '',
									...(0, m.s)({ disableStyles: I, fallback: L }),
									theme: u.theme,
									treePath: A,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: f?.rating || 0,
									count: Number(f?.ratingCount || 0),
									...(0, m.s)({ disableStyles: I }),
									theme: u.theme,
									treePath: A,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (S) => {
										J(!0), Y && Y(S, M), k?.addToCart([M]), setTimeout(() => J(!1), ae);
									},
									...(0, m.s)({ disableStyles: I }),
									theme: u.theme,
									treePath: A,
								},
							};
						let me = f?.name;
						u.truncateTitle && (me = b.x(f?.name || '', u.truncateTitle.limit, u.truncateTitle.append));
						const ue = (0, R.Z)(u, j),
							fe = { addToCartButtonText: { value: de ? E : re } },
							pe = K()(fe, u.lang || {}),
							ge = (0, V.u)(pe, { result: M, controller: k }),
							_e = !!(f?.msrp && f?.price && f?.price < f?.msrp),
							Ee = k?.store?.config?.asyncState?.product?.price ? M.state.priceFetched : !0;
						return f
							? (0, s.Y)(_._, {
									children: (0, s.FD)('article', {
										...ue,
										className: a()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': _e }, se, N),
										ref: ie,
										children: [
											!H &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: f.url,
														onClick: (S) => {
															w && w(S);
														},
														children: z
															? (0, s.Y)(r._, { ...W.image })
															: (0, s.Y)(O.Q, { ...W.overlayBadge, controller: k, children: (0, s.Y)(r._, { ...W.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!z && (0, s.Y)(g.W, { ...W.calloutBadge, controller: k }),
													!ee &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: f.url,
																onClick: (S) => {
																	w && w(S);
																},
																dangerouslySetInnerHTML: { __html: me || '' },
															}),
														}),
													!le && (0, s.Y)(y.G, { ...W.rating }),
													!te && Ee && f.price && f.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: _e
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...W.price, value: f.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...W.price, value: f.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...W.price, value: f.price }),
														  })
														: null,
													(0, P.Y)($, { result: M, treePath: A }),
													!ne && M.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: M.variants?.selections.map((S) => (0, s.Y)(C.m, { ...W.variantSelection, type: S.type, selection: S })),
														  })
														: null,
													!F &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(U.$, { ...W.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(h, c, e) {
				e.d(c, { q: () => G });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(a),
					i = e('./components/src/components/Molecules/Result/Result.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					g = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					O = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					y = e('../../node_modules/preact/compat/dist/compat.module.js'),
					U = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					B = e('./components/src/hooks/useIntersection.tsx'),
					K = e('./components/src/hooks/useComponent.tsx');
				const V = ({ gapSize: C, columns: j }) =>
						(0, n.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: C,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${j}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					G = (0, l.PA)((C) => {
						const j = (0, D.u)(),
							Q = (0, b.LU)(),
							Z = {
								results: C.controller?.store?.results,
								gapSize: '20px',
								title: C.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: Q,
							},
							X = { name: C.controller?.store?.profile?.tag?.toLowerCase(), ...C };
						let d = (0, T.v6)('recommendationGrid', j, Z, X);
						if (!(C.theme?.type == 'templates' || j?.type == 'templates')) {
							const v = (0, x.X)(d?.breakpoints || {}),
								f = r()(d?.theme || {}, v?.theme || {}, { arrayMerge: (de, J) => J });
							d = { ...d, ...v, theme: f };
						}
						const {
								disableStyles: q,
								title: u,
								trim: M,
								lazyRender: z,
								className: ee,
								internalClassName: te,
								treePath: H,
								theme: $,
								controller: L,
							} = d,
							I = d.resultComponent,
							se = (0, R.uk)(),
							N = typeof I == 'string',
							oe = N ? I : '',
							w = se?.templates?.library.import.component.result || {},
							{ ComponentOverride: k, shouldWaitForNamedOverride: ne } = (0, K.x)(w, N ? oe : void 0),
							F = N ? k : I,
							Y = { enabled: !0, offset: '10%', ...z },
							re = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, p.s)({ disableStyles: q }), theme: d?.theme } };
						let E = d.results || L.store.results;
						if (!d.columns && !d.rows) (d.rows = 1), (d.columns = E.length);
						else if (d.columns && !d.rows) {
							if (((d.rows = Math.floor(E.length / d.columns)), M)) {
								const v = E.length % d.columns;
								E = E.slice(0, E.length - v);
							}
						} else if (d.rows && !d.columns) {
							if (M) {
								const v = E.length % d.rows;
								E = E.slice(0, E.length - v);
							}
							d.columns = Math.ceil(E.length / d.rows);
						} else d?.columns && d?.rows && d.columns > 0 && d.rows > 0 && (E = E?.slice(0, d.columns * d.rows));
						const ae = (0, P.Z)(d, V),
							[le, ie] = (0, y.useState)(!1),
							A = (0, U.li)(null);
						return (
							(!Y?.enabled || (0, B.v)(A, `${Y.offset} 0px ${Y.offset} 0px`, !0)) && ie(!0),
							E?.length
								? (0, s.Y)(m._, {
										children: (0, s.Y)('div', {
											...ae,
											ref: A,
											className: t()('ss__recommendation-grid', ee, te),
											children: le
												? (0, s.FD)(g.l, {
														controller: L,
														children: [
															u && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: u }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: E.map((v) =>
																	F && L
																		? (0, _.Y)(F, {
																				controller: L,
																				result: v,
																				theme: N ? r()($ || {}, { components: { result: { customComponent: I } } }) : $,
																				treePath: H,
																		  })
																		: ne
																		? null
																		: (0, s.Y)(O.o, {
																				result: v,
																				controller: L,
																				children: (0, s.Y)(i.Q, { ...re.result, result: v, controller: L, treePath: H }, v.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(g.l, {
														controller: L,
														children: E.map((v) => (0, s.Y)(O.o, { controller: L, result: v, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(h, c, e) {
				e.d(c, { l: () => _ });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					a = e.n(t),
					r = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, n.AH)({}),
					_ = (0, o.PA)((p) => {
						const { children: T, className: P, internalClassName: m } = p,
							D = (0, l.v2)(T),
							R = (0, r.Z)(p, i);
						return D.length ? (0, s.Y)('div', { className: a()('ss__recommendation-profile-tracker', P, m), ...R, children: T }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(h, c, e) {
				e.d(c, { o: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const _ = { ResultTracker: () => (0, l.AH)({}) },
					p = (0, n.PA)((T) => {
						const P = (0, a.u)(),
							m = (0, r.v6)('resultTracker', P, {}, T),
							D = { impression: !0, click: !0 },
							{ children: R, result: b, track: x, controller: g, className: O, internalClassName: y, disableStyles: U, style: B } = m,
							K = { ...D, ...x },
							{ ref: V, inViewport: G } = (0, i.Q)();
						G && K.impression && g?.track.product.impression(b);
						const C = {};
						return (
							U ? B && (C.css = [B]) : (C.css = [_.ResultTracker(), B]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${g?.type}-result-tracker`, O, y),
								onClick: (j) => {
									K.click && g?.track.product.click(j, b);
								},
								ref: V,
								...C,
								children: R,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(h, c, e) {
				e.d(c, { v: () => l });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, o = '0px', t = !1) => {
					const [a, r] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const i = new IntersectionObserver(
								([_]) => {
									r(_.isIntersecting), t && _.isIntersecting && i.unobserve(n.current);
								},
								{ rootMargin: o }
							);
							return (
								n.current && i.observe(n.current),
								() => {
									i.unobserve(n.current);
								}
							);
						}, []),
						a
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(h, c, e) {
				e.d(c, { v: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					n = (t, a = {}) => {
						const { rootMargin: r = '0px', fireOnce: i = !1, threshold: _ = 0, minVisibleTime: p = 0 } = a,
							[T, P] = (0, s.J0)(!1),
							m = (0, s.li)(null),
							D = (0, s.li)(null),
							[R, b] = (0, s.J0)(0),
							x = (0, s.hb)((g) => {
								(t.current = g), b((O) => O + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								P(!1);
								let g = null,
									O = null;
								if (!window.IntersectionObserver || !t.current) return;
								const y = () => {
										O && (window.clearInterval(O), (O = null));
									},
									U = () => {
										p > 0
											? ((D.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													P(!0), i && t.current && g && g.unobserve(t.current);
											  }, p)))
											: (P(!0), i && t.current && g && g.unobserve(t.current));
									},
									B = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (D.current = null), P(!1);
									};
								return (
									(g = new IntersectionObserver(
										([K]) => {
											K.isIntersecting
												? t.current && o(t.current)
													? (y(), U())
													: (B(),
													  O ||
															(O = window.setInterval(() => {
																if (!t.current) {
																	y();
																	return;
																}
																o(t.current) && (y(), U());
															}, l)))
												: (y(), B());
										},
										{ rootMargin: r, threshold: _ }
									)),
									t.current && g.observe(t.current),
									() => {
										P(!1), y(), m.current && window.clearTimeout(m.current), g && t.current && g.unobserve(t.current);
									}
								);
							}, [t, R]),
							{ inViewport: T, updateRef: x }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/types.ts'(h, c, e) {
				e.d(c, { Q: () => l, V: () => s });
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
			'./components/src/utilities/createImpressionObserver.ts'(h, c, e) {
				e.d(c, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					o = 1e3;
				function t(a) {
					const r = (0, s.li)(null),
						{ inViewport: i, updateRef: _ } = (0, l.v)(r, { ...a, fireOnce: !0, threshold: n, minVisibleTime: o });
					return { ref: r, inViewport: i, updateRef: _ };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(h, c, e) {
				e.r(c), e.d(c, { RecommendationGrid: () => s.q });
				var s = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(h, c, e) {
				e.d(c, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
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
					for (var a in o) t[o[a]] = a;
					var r = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							p,
							T = t[this.toHex()];
						if (T) return T;
						if (i?.closest) {
							var P = this.toRgb(),
								m = 1 / 0,
								D = 'black';
							if (!r.length) for (var R in o) r[R] = new l(o[R]).toRgb();
							for (var b in o) {
								var x = ((_ = P), (p = r[b]), Math.pow(_.r - p.r, 2) + Math.pow(_.g - p.g, 2) + Math.pow(_.b - p.b, 2));
								x < m && ((m = x), (D = b));
							}
							return D;
						}
					}),
						n.string.push([
							function (i) {
								var _ = i.toLowerCase(),
									p = _ === 'transparent' ? '#0000' : o[_];
								return p ? new l(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(h, c, e) {
				e.d(c, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function l(o, t, a) {
					for (a of o.keys()) if (n(a, t)) return a;
				}
				function n(o, t) {
					var a, r, i;
					if (o === t) return !0;
					if (o && t && (a = o.constructor) === t.constructor) {
						if (a === Date) return o.getTime() === t.getTime();
						if (a === RegExp) return o.toString() === t.toString();
						if (a === Array) {
							if ((r = o.length) === t.length) for (; r-- && n(o[r], t[r]); );
							return r === -1;
						}
						if (a === Set) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((i = r), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (a === Map) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((i = r[0]), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !n(r[1], t.get(i)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (a === DataView) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o[r] === t[r]; );
							return r === -1;
						}
						if (!a || typeof o == 'object') {
							r = 0;
							for (a in o) if ((s.call(o, a) && ++r && !s.call(t, a)) || !(a in t) || !n(o[a], t[a])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return o !== o && t !== t;
				}
			},
		},
	]);
})();
