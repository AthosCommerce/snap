'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6356],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(v, c, e) {
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(c, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(v, c, e) {
				e.d(c, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(o, n) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...n };
					return (0, s.Z)(o, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(v, c, e) {
				e.d(c, { Z: () => s });
				function s(o, n) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...n };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const a = l(o, t.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(t.decimalPlaces, '0'));
					let r = a.join(t.decimalSeparator);
					return t.symbolAfter ? (r = r + t.symbol) : (r = t.symbol + r), r;
				}
				function l(o, n) {
					const t = o.toString(),
						a = t.indexOf('.'),
						r = a == -1 ? t.length : 1 + a + (n || -1);
					return t.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, c, e) {
				e.d(c, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let o = l.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(v, c, e) {
				e.d(c, { x: () => s });
				function s(l, o, n) {
					if (typeof l != 'string' || l.length <= o) return l;
					const t = l.lastIndexOf(' ', o),
						a = t != -1 ? t : o - 1;
					return l.substr(0, a) + (n || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.tsx'(v, c, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					a = e.n(t),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					i = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					b = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					A = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					T = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					I = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					U = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(B),
					V = e('./components/src/hooks/useLang.tsx'),
					z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const y = () =>
						(0, n.AH)({
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
					S = (0, o.PA)((q) => {
						const $ = (0, f.u)(),
							ee = (0, D.LU)(),
							d = {
								layout: A.V.grid,
								treePath: ee,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							u = (0, C.v6)('result', $, d, q),
							{
								result: P,
								hideBadge: G,
								hideTitle: te,
								hidePricing: se,
								hideImage: ne,
								detailSlot: F,
								fallback: J,
								disableStyles: h,
								className: w,
								internalClassName: oe,
								layout: N,
								onClick: Y,
								controller: L,
								hideVariantSelections: re,
								hideAddToCartButton: ae,
								onAddToCartClick: H,
								addToCartButtonText: Q,
								addToCartButtonSuccessText: le,
								addToCartButtonSuccessTimeout: E,
								hideRating: ie,
								hideQuickviewButton: ce,
								onQuickviewClick: Z,
								trackingRef: X,
								treePath: k,
							} = u,
							{ overrideElement: M, shouldRenderDefault: de } = (0, z._)('result', {
								...u,
								customComponent: u.customComponent && u.customComponent !== 'Result' ? u.customComponent : void 0,
							});
						if (!de) return M;
						const p = P?.display?.mappings.core || P?.mappings?.core,
							[me, _e] = (0, l.J0)(!1),
							x = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: h }), theme: u.theme, treePath: k },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: P,
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: P,
									controller: L,
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: p?.name || '',
									src: p?.imageUrl || '',
									...(0, m.s)({ disableStyles: h, fallback: J }),
									theme: u.theme,
									treePath: k,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: p?.rating || 0,
									count: Number(p?.ratingCount || 0),
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (W) => {
										Z && Z(W, P), L?.quickview(P);
									},
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (W) => {
										_e(!0), H && H(W, P), L?.addToCart([P]), setTimeout(() => _e(!1), E);
									},
									...(0, m.s)({ disableStyles: h }),
									theme: u.theme,
									treePath: k,
								},
							};
						let ue = p?.name;
						u.truncateTitle && (ue = b.x(p?.name || '', u.truncateTitle.limit, u.truncateTitle.append));
						const ge = (0, R.Z)(u, y),
							Ee = { addToCartButtonText: { value: me ? le : Q }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							he = K()(Ee, u.lang || {}),
							fe = (0, V.u)(he, { result: P, controller: L }, { activeBreakpoint: $?.activeBreakpoint }),
							pe = !!(p?.msrp && p?.price && p?.price < p?.msrp),
							ve = L?.store?.config?.asyncState?.product?.price ? P.state.priceFetched : !0;
						return p
							? (0, s.Y)(_._, {
									children: (0, s.FD)('article', {
										...ge,
										className: a()('ss__result', `ss__result--${N}`, { 'ss__result--sale': pe }, w, oe),
										ref: X,
										children: [
											!ne &&
												(0, s.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, s.Y)('a', {
															href: p.url,
															onClick: (W) => {
																Y && Y(W);
															},
															children: G
																? (0, s.Y)(r._, { ...x.image })
																: (0, s.Y)(T.Q, { ...x.overlayBadge, controller: L, children: (0, s.Y)(r._, { ...x.image }) }),
														}),
														!ce && L?.quickviewManager && (0, s.Y)(U.$, { ...x.quickviewButton, ...fe.quickviewButtonText.attributes }),
													],
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!G && (0, s.Y)(g.W, { ...x.calloutBadge, controller: L }),
													!te &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: p.url,
																onClick: (W) => {
																	Y && Y(W);
																},
																dangerouslySetInnerHTML: { __html: ue || '' },
															}),
														}),
													!ie && (0, s.Y)(I.G, { ...x.rating }),
													!se && ve && p.price && p.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: pe
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(i.g, { ...x.price, value: p.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(i.g, { ...x.price, value: p.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(i.g, { ...x.price, value: p.price }),
														  })
														: null,
													(0, O.Y)(F, { result: P, treePath: k }),
													!re && P.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: P.variants?.selections.map((W) => (0, s.Y)(j.m, { ...x.variantSelection, type: W.type, selection: W })),
														  })
														: null,
													!ae &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(U.$, { ...x.button, ...fe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['Q', 0, S]);
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(v, c, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(a),
					i = e('./components/src/components/Molecules/Result/Result.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/utilities/lazyRenderMinSize.ts'),
					C = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/hooks/useDisplaySettings.tsx'),
					T = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					U = e('../../node_modules/preact/compat/dist/compat.module.js'),
					B = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('./components/src/hooks/useIntersection.tsx'),
					V = e('./components/src/hooks/useComponent.tsx');
				const z = ({ gapSize: y, columns: S }) =>
						(0, o.AH)({
							...m.k,
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: y,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${S}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					j = (0, l.PA)((y) => {
						const S = (0, R.u)(),
							q = (0, A.LU)(),
							$ = {
								results: y.controller?.store?.results,
								gapSize: '20px',
								title: y.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: q,
							},
							ee = { name: y.controller?.store?.profile?.tag?.toLowerCase(), ...y };
						let d = (0, D.v6)('recommendationGrid', S, $, ee);
						if (!(y.theme?.type == 'templates' || S?.type == 'templates')) {
							const M = (0, g.X)(d?.breakpoints || {}),
								de = r()(d?.theme || {}, M?.theme || {}, { arrayMerge: (p, me) => me });
							d = { ...d, ...M, theme: de };
						}
						const {
								disableStyles: u,
								title: P,
								trim: G,
								lazyRender: te,
								className: se,
								internalClassName: ne,
								treePath: F,
								theme: J,
								controller: h,
							} = d,
							w = d.resultComponent,
							oe = (0, b.uk)(),
							N = typeof w == 'string',
							Y = N ? w : '',
							L = oe?.templates?.library.import.component.result || {},
							{ ComponentOverride: re, shouldWaitForNamedOverride: ae } = (0, V.x)(L, N ? Y : void 0),
							H = N ? re : w,
							Q = { enabled: !0, offset: '10%', ...te },
							le = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, f.s)({ disableStyles: u }), theme: d?.theme } };
						let E = d.results || h.store.results;
						if (!d.columns && !d.rows) (d.rows = 1), (d.columns = E.length);
						else if (d.columns && !d.rows) {
							if (((d.rows = Math.floor(E.length / d.columns)), G)) {
								const M = E.length % d.columns;
								E = E.slice(0, E.length - M);
							}
						} else if (d.rows && !d.columns) {
							if (G) {
								const M = E.length % d.rows;
								E = E.slice(0, E.length - M);
							}
							d.columns = Math.ceil(E.length / d.rows);
						} else d?.columns && d?.rows && d.columns > 0 && d.rows > 0 && (E = E?.slice(0, d.columns * d.rows));
						const ie = (0, O.Z)(d, z),
							[ce, Z] = (0, U.useState)(!1),
							X = (0, B.li)(null);
						return (
							(!Q?.enabled || (0, K.v)(X, `${Q.offset} 0px ${Q.offset} 0px`, !0)) && Z(!0),
							E?.length
								? (0, s.Y)(C._, {
										children: (0, s.Y)('div', {
											...ie,
											style: u ? m.k : void 0,
											ref: X,
											className: t()('ss__recommendation-grid', se, ne),
											children: ce
												? (0, s.FD)(T.l, {
														controller: h,
														children: [
															P && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: P }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: E.map((M) =>
																	H && h
																		? (0, _.Y)(H, {
																				controller: h,
																				result: M,
																				theme: N ? r()(J || {}, { components: { result: { customComponent: w } } }) : J,
																				treePath: F,
																		  })
																		: ae
																		? null
																		: (0, s.Y)(I.o, {
																				result: M,
																				controller: h,
																				children: (0, s.Y)(i.Q, { ...le.result, result: M, controller: h, treePath: F }, M.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(T.l, {
														controller: h,
														children: E.map((M) => (0, s.Y)(I.o, { controller: h, result: M, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
				e.d(c, ['q', 0, j]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(v, c, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					a = e.n(t),
					r = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, o.AH)({}),
					_ = (0, n.PA)((f) => {
						const { children: D, className: O, internalClassName: m } = f,
							C = (0, l.v2)(D),
							R = (0, r.Z)(f, i);
						return C.length ? (0, s.Y)('div', { className: a()('ss__recommendation-profile-tracker', O, m), ...R, children: D }) : null;
					});
				e.d(c, ['l', 0, _]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(v, c, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const _ = { ResultTracker: () => (0, l.AH)({}) },
					f = (0, o.PA)((D) => {
						const O = (0, a.u)(),
							m = (0, r.v6)('resultTracker', O, {}, D),
							C = { impression: !0, click: !0 },
							{ children: R, result: b, track: A, controller: g, className: T, internalClassName: I, disableStyles: U, style: B } = m,
							K = { ...C, ...A },
							{ ref: V, inViewport: z } = (0, i.Q)();
						z && K.impression && g?.track.product.impression(b);
						const j = {};
						return (
							U ? B && (j.css = [B]) : (j.css = [_.ResultTracker(), B]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${g?.type}-result-tracker`, T, I),
								onClick: (y) => {
									K.click && g?.track.product.click(y, b);
								},
								ref: V,
								...j,
								children: R,
							})
						);
					});
				e.d(c, ['o', 0, f]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, c, e) {
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (o, n = '0px', t = !1) => {
					const [a, r] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const i = new IntersectionObserver(
								([_]) => {
									r(_.isIntersecting), t && _.isIntersecting && i.unobserve(o.current);
								},
								{ rootMargin: n }
							);
							return (
								o.current && i.observe(o.current),
								() => {
									i.unobserve(o.current);
								}
							);
						}, []),
						a
					);
				};
				e.d(c, ['v', 0, l]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, c, e) {
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					o = (t, a = {}) => {
						const { rootMargin: r = '0px', fireOnce: i = !1, threshold: _ = 0, minVisibleTime: f = 0 } = a,
							[D, O] = (0, s.J0)(!1),
							m = (0, s.li)(null),
							C = (0, s.li)(null),
							[R, b] = (0, s.J0)(0),
							A = (0, s.hb)((g) => {
								(t.current = g), b((T) => T + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								O(!1);
								let g = null,
									T = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										T && (window.clearInterval(T), (T = null));
									},
									U = () => {
										f > 0
											? ((C.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													O(!0), i && t.current && g && g.unobserve(t.current);
											  }, f)))
											: (O(!0), i && t.current && g && g.unobserve(t.current));
									},
									B = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (C.current = null), O(!1);
									};
								return (
									(g = new IntersectionObserver(
										([K]) => {
											K.isIntersecting
												? t.current && n(t.current)
													? (I(), U())
													: (B(),
													  T ||
															(T = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																n(t.current) && (I(), U());
															}, l)))
												: (I(), B());
										},
										{ rootMargin: r, threshold: _ }
									)),
									t.current && g.observe(t.current),
									() => {
										O(!1), I(), m.current && window.clearTimeout(m.current), g && t.current && g.unobserve(t.current);
									}
								);
							}, [t, R]),
							{ inViewport: D, updateRef: A }
						);
					};
				function n(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(c, ['v', 0, o]);
			},
			'./components/src/types.ts'(v, c, e) {
				e.d(c, { Q: () => l, V: () => s });
				var s = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(s || {}),
					l = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(l || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, c, e) {
				e.d(c, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					n = 1e3;
				function t(a) {
					const r = (0, s.li)(null),
						{ inViewport: i, updateRef: _ } = (0, l.v)(r, { fireOnce: !0, threshold: o, minVisibleTime: n, ...a });
					return { ref: r, inViewport: i, updateRef: _ };
				}
			},
			'./components/src/utilities/lazyRenderMinSize.ts'(v, c, e) {
				const s = { minWidth: '1px', minHeight: '1px' };
				e.d(c, ['k', 0, s]);
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(v, c, e) {
				e.r(c), e.d(c, { RecommendationGrid: () => s.q });
				var s = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(v, c, e) {
				e.d(c, { A: () => s }), e.dn(s);
				function s(l, o) {
					var n = {
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
					for (var a in n) t[n[a]] = a;
					var r = {};
					(l.prototype.toName = function (i) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							f,
							D = t[this.toHex()];
						if (D) return D;
						if (i?.closest) {
							var O = this.toRgb(),
								m = 1 / 0,
								C = 'black';
							if (!r.length) for (var R in n) r[R] = new l(n[R]).toRgb();
							for (var b in n) {
								var A = ((_ = O), (f = r[b]), Math.pow(_.r - f.r, 2) + Math.pow(_.g - f.g, 2) + Math.pow(_.b - f.b, 2));
								A < m && ((m = A), (C = b));
							}
							return C;
						}
					}),
						o.string.push([
							function (i) {
								var _ = i.toLowerCase(),
									f = _ === 'transparent' ? '#0000' : n[_];
								return f ? new l(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(v, c, e) {
				e.d(c, { j: () => o });
				var s = Object.prototype.hasOwnProperty;
				function l(n, t, a) {
					for (a of n.keys()) if (o(a, t)) return a;
				}
				function o(n, t) {
					var a, r, i;
					if (n === t) return !0;
					if (n && t && (a = n.constructor) === t.constructor) {
						if (a === Date) return n.getTime() === t.getTime();
						if (a === RegExp) return n.toString() === t.toString();
						if (a === Array) {
							if ((r = n.length) === t.length) for (; r-- && o(n[r], t[r]); );
							return r === -1;
						}
						if (a === Set) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((i = r), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (a === Map) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((i = r[0]), (i && typeof i == 'object' && ((i = l(t, i)), !i)) || !o(r[1], t.get(i)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (a === DataView) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n[r] === t[r]; );
							return r === -1;
						}
						if (!a || typeof n == 'object') {
							r = 0;
							for (a in n) if ((s.call(n, a) && ++r && !s.call(t, a)) || !(a in t) || !o(n[a], t[a])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return n !== n && t !== t;
				}
			},
		},
	]);
})();
