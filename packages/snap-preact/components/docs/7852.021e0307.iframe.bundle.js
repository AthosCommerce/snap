'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7852],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(B, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					P = e.n(s),
					d = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					v = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					o = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					x = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					W = e('./components/src/types.ts'),
					l = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					m = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					O = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(M),
					S = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const b = () =>
						(0, E.AH)({
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
					G = (0, n.PA)(($) => {
						const N = (0, R.u)(),
							z = (0, L.LU)(),
							F = {
								layout: W.V.grid,
								treePath: z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							r = (0, A.v6)('result', N, F, $),
							{
								result: _,
								hideBadge: j,
								hideTitle: Z,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: C,
								className: se,
								internalClassName: ne,
								layout: oe,
								onClick: k,
								controller: I,
								hideVariantSelections: re,
								hideAddToCartButton: ie,
								onAddToCartClick: Y,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: ce,
								hideRating: _e,
								hideQuickviewButton: ue,
								onQuickviewClick: V,
								trackingRef: de,
								treePath: h,
							} = r,
							{ overrideElement: me, shouldRenderDefault: pe } = (0, y._)('result', {
								...r,
								customComponent: r.customComponent && r.customComponent !== 'Result' ? r.customComponent : void 0,
							});
						if (!pe) return me;
						const i = _?.display?.mappings.core || _?.mappings?.core,
							[Ee, w] = (0, u.J0)(!1),
							p = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
								price: { internalClassName: 'ss__result__price', ...(0, o.s)({ disableStyles: C }), theme: r.theme, treePath: h },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: _,
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: _,
									controller: I,
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: i?.name || '',
									src: i?.imageUrl || '',
									...(0, o.s)({ disableStyles: C, fallback: te }),
									theme: r.theme,
									treePath: h,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: i?.rating || 0,
									count: Number(i?.ratingCount || 0),
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (T) => {
										V && V(T, _), I?.quickview(_);
									},
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (T) => {
										w(!0), Y && Y(T, _), I?.addToCart([_]), setTimeout(() => w(!1), ce);
									},
									...(0, o.s)({ disableStyles: C }),
									theme: r.theme,
									treePath: h,
								},
							};
						let H = i?.name;
						r.truncateTitle && (H = x.x(i?.name || '', r.truncateTitle.limit, r.truncateTitle.append));
						const ve = (0, U.Z)(r, b),
							Te = { addToCartButtonText: { value: Ee ? ae : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Pe = f()(Te, r.lang || {}),
							Q = (0, S.u)(Pe, { result: _, controller: I }, { activeBreakpoint: N?.activeBreakpoint }),
							J = !!(i?.msrp && i?.price && i?.price < i?.msrp),
							ge = I?.store?.config?.asyncState?.product?.price ? _.state.priceFetched : !0;
						return i
							? (0, t.Y)(v._, {
									children: (0, t.FD)('article', {
										...ve,
										className: P()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': J }, se, ne),
										ref: de,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: i.url,
															onClick: (T) => {
																k && k(T);
															},
															children: j
																? (0, t.Y)(d._, { ...p.image })
																: (0, t.Y)(m.Q, { ...p.overlayBadge, controller: I, children: (0, t.Y)(d._, { ...p.image }) }),
														}),
														!ue && I?.quickviewManager && (0, t.Y)(D.$, { ...p.quickviewButton, ...Q.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!j && (0, t.Y)(l.W, { ...p.calloutBadge, controller: I }),
													!Z &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: i.url,
																onClick: (T) => {
																	k && k(T);
																},
																dangerouslySetInnerHTML: { __html: H || '' },
															}),
														}),
													!_e && (0, t.Y)(O.G, { ...p.rating }),
													!X && ge && i.price && i.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: J
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(c.g, { ...p.price, value: i.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(c.g, { ...p.price, value: i.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(c.g, { ...p.price, value: i.price }),
														  })
														: null,
													(0, g.Y)(ee, { result: _, treePath: h }),
													!re && _.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: _.variants?.selections.map((T) => (0, t.Y)(K.m, { ...p.variantSelection, type: T.type, selection: T })),
														  })
														: null,
													!ie &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(D.$, { ...p.button, ...Q.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(a, ['Q', 0, G]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(B, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/classnames/index.js'),
					s = e.n(E),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const v = { ResultTracker: () => (0, u.AH)({}) },
					R = (0, n.PA)((L) => {
						const g = (0, P.u)(),
							o = (0, d.v6)('resultTracker', g, {}, L),
							A = { impression: !0, click: !0 },
							{ children: U, result: x, track: W, controller: l, className: m, internalClassName: O, disableStyles: D, style: M } = o,
							f = { ...A, ...W },
							{ ref: S, inViewport: y } = (0, c.Q)();
						y && f.impression && l?.track.product.impression(x);
						const K = {};
						return (
							D ? M && (K.css = [M]) : (K.css = [v.ResultTracker(), M]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${l?.type}-result-tracker`, m, O),
								onClick: (b) => {
									f.click && l?.track.product.click(b, x);
								},
								ref: S,
								...K,
								children: U,
							})
						);
					});
				e.d(a, ['o', 0, R]);
			},
			'./components/src/hooks/useIntersection.tsx'(B, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = (n, E = '0px', s = !1) => {
					const [P, d] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const c = new IntersectionObserver(
								([v]) => {
									d(v.isIntersecting), s && v.isIntersecting && c.unobserve(n.current);
								},
								{ rootMargin: E }
							);
							return (
								n.current && c.observe(n.current),
								() => {
									c.unobserve(n.current);
								}
							);
						}, []),
						P
					);
				};
				e.d(a, ['v', 0, u]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 250,
					n = (s, P = {}) => {
						const { rootMargin: d = '0px', fireOnce: c = !1, threshold: v = 0, minVisibleTime: R = 0 } = P,
							[L, g] = (0, t.J0)(!1),
							o = (0, t.li)(null),
							A = (0, t.li)(null),
							[U, x] = (0, t.J0)(0),
							W = (0, t.hb)((l) => {
								(s.current = l), x((m) => m + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								g(!1);
								let l = null,
									m = null;
								if (!window.IntersectionObserver || !s.current) return;
								const O = () => {
										m && (window.clearInterval(m), (m = null));
									},
									D = () => {
										R > 0
											? ((A.current = Date.now()),
											  o.current && window.clearTimeout(o.current),
											  (o.current = window.setTimeout(() => {
													g(!0), c && s.current && l && l.unobserve(s.current);
											  }, R)))
											: (g(!0), c && s.current && l && l.unobserve(s.current));
									},
									M = () => {
										o.current && window.clearTimeout(o.current), (o.current = null), (A.current = null), g(!1);
									};
								return (
									(l = new IntersectionObserver(
										([f]) => {
											f.isIntersecting
												? s.current && E(s.current)
													? (O(), D())
													: (M(),
													  m ||
															(m = window.setInterval(() => {
																if (!s.current) {
																	O();
																	return;
																}
																E(s.current) && (O(), D());
															}, u)))
												: (O(), M());
										},
										{ rootMargin: d, threshold: v }
									)),
									s.current && l.observe(s.current),
									() => {
										g(!1), O(), o.current && window.clearTimeout(o.current), l && s.current && l.unobserve(s.current);
									}
								);
							}, [s, U]),
							{ inViewport: L, updateRef: W }
						);
					};
				function E(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(a, ['v', 0, n]);
			},
			'./components/src/types.ts'(B, a, e) {
				e.d(a, { Q: () => u, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					u = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(u || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(B, a, e) {
				e.d(a, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					E = 1e3;
				function s(P) {
					const d = (0, t.li)(null),
						{ inViewport: c, updateRef: v } = (0, u.v)(d, { fireOnce: !0, threshold: n, minVisibleTime: E, ...P });
					return { ref: d, inViewport: c, updateRef: v };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundle.ts'(B, a, e) {
				e.r(a), e.d(a, { RecommendationBundle: () => t.g });
				var t = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
			},
		},
	]);
})();
