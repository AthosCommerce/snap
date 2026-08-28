'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9943],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(f, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					P = e.n(s),
					d = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					E = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					o = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					I = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					W = e('./components/src/types.ts'),
					l = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					v = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					M = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					g = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(g),
					y = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const k = () =>
						(0, u.AH)({
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
						const j = (0, B.u)(),
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
							r = (0, O.v6)('result', j, F, $),
							{
								result: m,
								hideBadge: N,
								hideTitle: Z,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: R,
								className: se,
								internalClassName: ne,
								layout: oe,
								onClick: S,
								controller: x,
								hideVariantSelections: re,
								hideAddToCartButton: ie,
								onAddToCartClick: Y,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: ce,
								hideRating: _e,
								hideQuickviewButton: de,
								onQuickviewClick: V,
								trackingRef: me,
								treePath: C,
							} = r,
							{ overrideElement: ue, shouldRenderDefault: Ee } = (0, b._)('result', {
								...r,
								customComponent: r.customComponent && r.customComponent !== 'Result' ? r.customComponent : void 0,
							});
						if (!Ee) return ue;
						const i = m?.display?.mappings.core || m?.mappings?.core,
							[pe, w] = (0, _.J0)(!1),
							T = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
								price: { internalClassName: 'ss__result__price', ...(0, o.s)({ disableStyles: R }), theme: r.theme, treePath: C },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: m,
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: m,
									controller: x,
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: i?.name || '',
									src: i?.imageUrl || '',
									...(0, o.s)({ disableStyles: R, fallback: te }),
									theme: r.theme,
									treePath: C,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: i?.rating || 0,
									count: Number(i?.ratingCount || 0),
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (h) => {
										V && V(h, m), x?.quickview(m);
									},
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (h) => {
										w(!0), Y && Y(h, m), x?.addToCart([m]), setTimeout(() => w(!1), ce);
									},
									...(0, o.s)({ disableStyles: R }),
									theme: r.theme,
									treePath: C,
								},
							};
						let H = i?.name;
						r.truncateTitle && (H = I.x(i?.name || '', r.truncateTitle.limit, r.truncateTitle.append));
						const ve = (0, U.Z)(r, k),
							Pe = { addToCartButtonText: { value: pe ? ae : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Te = A()(Pe, r.lang || {}),
							Q = (0, y.u)(Te, { result: m, controller: x }, { activeBreakpoint: j?.activeBreakpoint }),
							J = !!(i?.msrp && i?.price && i?.price < i?.msrp),
							Oe = x?.store?.config?.asyncState?.product?.price ? m.state.priceFetched : !0;
						return i
							? (0, t.Y)(E._, {
									children: (0, t.FD)('article', {
										...ve,
										className: P()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': J }, se, ne),
										ref: me,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: i.url,
															onClick: (h) => {
																S && S(h);
															},
															children: N
																? (0, t.Y)(d._, { ...T.image })
																: (0, t.Y)(v.Q, { ...T.overlayBadge, controller: x, children: (0, t.Y)(d._, { ...T.image }) }),
														}),
														!de && x?.quickviewManager && (0, t.Y)(D.$, { ...T.quickviewButton, ...Q.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!N && (0, t.Y)(l.W, { ...T.calloutBadge, controller: x }),
													!Z &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: i.url,
																onClick: (h) => {
																	S && S(h);
																},
																dangerouslySetInnerHTML: { __html: H || '' },
															}),
														}),
													!_e && (0, t.Y)(M.G, { ...T.rating }),
													!X && Oe && i.price && i.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: J
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(c.g, { ...T.price, value: i.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(c.g, { ...T.price, value: i.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(c.g, { ...T.price, value: i.price }),
														  })
														: null,
													(0, p.Y)(ee, { result: m, treePath: C }),
													!re && m.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: m.variants?.selections.map((h) => (0, t.Y)(K.m, { ...T.variantSelection, type: h.type, selection: h })),
														  })
														: null,
													!ie &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(D.$, { ...T.button, ...Q.addToCartButtonText.all }),
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
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(f, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const E = () => (0, _.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					B = 'recommendationBundleEasyAdd',
					L = (0, u.PA)((p) => {
						const o = (0, n.u)(),
							O = { name: p.controller?.store?.profile?.tag?.toLowerCase(), ...p },
							{ treePath: U, disableStyles: I, controller: W, style: l, styleScript: v, themeStyleScript: M, ...D } = O,
							g = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: B,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, s.s)({ disableStyles: I }),
									theme: O?.theme,
									treePath: U,
								},
							},
							A = (0, P.v6)(B, o, {}, O),
							y = (0, d.Z)(A, E);
						return (0, t.Y)(c.g, { controller: W, ...y, ...g.recommendationBundle, ...D });
					});
				e.d(a, ['F', 0, L]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(f, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/classnames/index.js'),
					s = e.n(u),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, _.AH)({}) },
					B = (0, n.PA)((L) => {
						const p = (0, P.u)(),
							o = (0, d.v6)('resultTracker', p, {}, L),
							O = { impression: !0, click: !0 },
							{ children: U, result: I, track: W, controller: l, className: v, internalClassName: M, disableStyles: D, style: g } = o,
							A = { ...O, ...W },
							{ ref: y, inViewport: b } = (0, c.Q)();
						b && A.impression && l?.track.product.impression(I);
						const K = {};
						return (
							D ? g && (K.css = [g]) : (K.css = [E.ResultTracker(), g]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${l?.type}-result-tracker`, v, M),
								onClick: (k) => {
									A.click && l?.track.product.click(k, I);
								},
								ref: y,
								...K,
								children: U,
							})
						);
					});
				e.d(a, ['o', 0, B]);
			},
			'./components/src/hooks/useIntersection.tsx'(f, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (n, u = '0px', s = !1) => {
					const [P, d] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const c = new IntersectionObserver(
								([E]) => {
									d(E.isIntersecting), s && E.isIntersecting && c.unobserve(n.current);
								},
								{ rootMargin: u }
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
				e.d(a, ['v', 0, _]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(f, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					n = (s, P = {}) => {
						const { rootMargin: d = '0px', fireOnce: c = !1, threshold: E = 0, minVisibleTime: B = 0 } = P,
							[L, p] = (0, t.J0)(!1),
							o = (0, t.li)(null),
							O = (0, t.li)(null),
							[U, I] = (0, t.J0)(0),
							W = (0, t.hb)((l) => {
								(s.current = l), I((v) => v + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								p(!1);
								let l = null,
									v = null;
								if (!window.IntersectionObserver || !s.current) return;
								const M = () => {
										v && (window.clearInterval(v), (v = null));
									},
									D = () => {
										B > 0
											? ((O.current = Date.now()),
											  o.current && window.clearTimeout(o.current),
											  (o.current = window.setTimeout(() => {
													p(!0), c && s.current && l && l.unobserve(s.current);
											  }, B)))
											: (p(!0), c && s.current && l && l.unobserve(s.current));
									},
									g = () => {
										o.current && window.clearTimeout(o.current), (o.current = null), (O.current = null), p(!1);
									};
								return (
									(l = new IntersectionObserver(
										([A]) => {
											A.isIntersecting
												? s.current && u(s.current)
													? (M(), D())
													: (g(),
													  v ||
															(v = window.setInterval(() => {
																if (!s.current) {
																	M();
																	return;
																}
																u(s.current) && (M(), D());
															}, _)))
												: (M(), g());
										},
										{ rootMargin: d, threshold: E }
									)),
									s.current && l.observe(s.current),
									() => {
										p(!1), M(), o.current && window.clearTimeout(o.current), l && s.current && l.unobserve(s.current);
									}
								);
							}, [s, U]),
							{ inViewport: L, updateRef: W }
						);
					};
				function u(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(a, ['v', 0, n]);
			},
			'./components/src/types.ts'(f, a, e) {
				e.d(a, { Q: () => _, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
					_ = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(_ || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(f, a, e) {
				e.d(a, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					u = 1e3;
				function s(P) {
					const d = (0, t.li)(null),
						{ inViewport: c, updateRef: E } = (0, _.v)(d, { fireOnce: !0, threshold: n, minVisibleTime: u, ...P });
					return { ref: d, inViewport: c, updateRef: E };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts'(f, a, e) {
				e.r(a), e.d(a, { RecommendationBundleEasyAdd: () => t.F });
				var t = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx');
			},
		},
	]);
})();
