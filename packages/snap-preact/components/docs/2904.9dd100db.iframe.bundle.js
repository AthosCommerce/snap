'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2904],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(N, c, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					T = e.n(n),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					m = e('./components/src/components/Atoms/Price/Price.tsx'),
					v = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					W = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					Y = e('./components/src/types.ts'),
					i = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					h = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					O = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					I = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(I),
					s = e('./components/src/hooks/useLang.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					o = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const C = () =>
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
					j = (0, r.PA)((R) => {
						const k = (0, L.u)(),
							w = (0, f.LU)(),
							U = {
								layout: Y.V.grid,
								treePath: w,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							a = (0, K.v6)('result', k, U, R),
							{
								result: d,
								hideBadge: $,
								hideTitle: F,
								hidePricing: H,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: b,
								className: se,
								internalClassName: ne,
								layout: oe,
								onClick: V,
								controller: S,
								hideVariantSelections: re,
								hideAddToCartButton: ae,
								onAddToCartClick: Q,
								addToCartButtonText: _e,
								addToCartButtonSuccessText: ie,
								addToCartButtonSuccessTimeout: le,
								hideRating: ce,
								hideQuickviewButton: me,
								onQuickviewClick: J,
								trackingRef: de,
								treePath: x,
							} = a,
							{ overrideElement: ue, shouldRenderDefault: pe } = (0, p._)('result', {
								...a,
								customComponent: a.customComponent && a.customComponent !== 'Result' ? a.customComponent : void 0,
							});
						if (!pe) return ue;
						const l = d?.display?.mappings.core || d?.mappings?.core,
							[Ee, z] = (0, u.J0)(!1),
							M = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
								price: { internalClassName: 'ss__result__price', ...(0, _.s)({ disableStyles: b }), theme: a.theme, treePath: x },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: d,
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: d,
									controller: S,
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: l?.name || '',
									src: l?.imageUrl || '',
									...(0, _.s)({ disableStyles: b, fallback: te }),
									theme: a.theme,
									treePath: x,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: l?.rating || 0,
									count: Number(l?.ratingCount || 0),
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (B) => {
										J && J(B, d), S?.quickview(d);
									},
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (B) => {
										z(!0), Q && Q(B, d), S?.addToCart([d]), setTimeout(() => z(!1), le);
									},
									...(0, _.s)({ disableStyles: b }),
									theme: a.theme,
									treePath: x,
								},
							};
						let G = l?.name;
						a.truncateTitle && (G = W.x(l?.name || '', a.truncateTitle.limit, a.truncateTitle.append));
						const Pe = (0, y.Z)(a, C),
							ve = { addToCartButtonText: { value: Ee ? ie : _e }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							he = A()(ve, a.lang || {}),
							Z = (0, s.u)(he, { result: d, controller: S }, { activeBreakpoint: k?.activeBreakpoint }),
							X = !!(l?.msrp && l?.price && l?.price < l?.msrp),
							Te = S?.store?.config?.asyncState?.product?.price ? d.state.priceFetched : !0;
						return l
							? (0, t.Y)(v._, {
									children: (0, t.FD)('article', {
										...Pe,
										className: T()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': X }, se, ne),
										ref: de,
										children: [
											!q &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: l.url,
															onClick: (B) => {
																V && V(B);
															},
															children: $
																? (0, t.Y)(P._, { ...M.image })
																: (0, t.Y)(h.Q, { ...M.overlayBadge, controller: S, children: (0, t.Y)(P._, { ...M.image }) }),
														}),
														!me && S?.quickviewManager && (0, t.Y)(D.$, { ...M.quickviewButton, ...Z.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!$ && (0, t.Y)(i.W, { ...M.calloutBadge, controller: S }),
													!F &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: l.url,
																onClick: (B) => {
																	V && V(B);
																},
																dangerouslySetInnerHTML: { __html: G || '' },
															}),
														}),
													!ce && (0, t.Y)(O.G, { ...M.rating }),
													!H && Te && l.price && l.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: X
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(m.g, { ...M.price, value: l.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(m.g, { ...M.price, value: l.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(m.g, { ...M.price, value: l.price }),
														  })
														: null,
													(0, g.Y)(ee, { result: d, treePath: x }),
													!re && d.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: d.variants?.selections.map((B) => (0, t.Y)(o.m, { ...M.variantSelection, type: B.type, selection: B })),
														  })
														: null,
													!ae &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(D.$, { ...M.button, ...Z.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(c, ['Q', 0, j]);
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(N, c, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					v = e('./components/src/components/Atoms/Price/Price.tsx'),
					L = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = e('./components/src/components/Atoms/Image/Image.tsx'),
					_ = e('./components/src/utilities/componentNameToClassName.ts'),
					K = e('../../node_modules/classnames/index.js'),
					y = e.n(K),
					W = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(Y),
					h = e('./components/src/hooks/useLang.tsx');
				const O = () =>
						(0, u.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					D = 'recommendationBundleList',
					I = (0, E.PA)((s) => {
						const p = (0, r.u)(),
							o = { name: s.controller?.store?.profile?.tag?.toLowerCase(), ...s },
							{ treePath: C, disableStyles: j, controller: R, style: k, styleScript: w, themeStyleScript: U, ...a } = o,
							d = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (H) => (0, t.Y)(A, { ...H }),
									vertical: !0,
									separatorIcon: !1,
									alias: D,
									...(0, n.s)({ disableStyles: j }),
									theme: o?.theme,
									treePath: C,
								},
							},
							$ = (0, T.v6)(D, p, {}, o),
							F = (0, P.Z)($, O);
						return (0, t.Y)(m.g, { controller: R, ...F, ...d.recommendationBundle, ...a });
					}),
					A = (0, E.PA)((s) => {
						const p = s.cartStore,
							o = `ss__${(0, _.b)(D)}`;
						s.onAddToCart = (U) => {
							j(!0), s.onAddToCart(U), setTimeout(() => j(!1), s.ctaButtonSuccessTimeout);
						};
						const [C, j] = (0, W.J0)(!1);
						s.addedToCart = C;
						const R = {
								image: { className: `${o}__wrapper__cta__image`, theme: s?.theme, treePath: s.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${o}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: s?.theme,
									treePath: s.treePath,
								},
								icon: { name: 'bundle-cart', className: `${o}__wrapper__cta__icon`, size: 50, theme: s?.theme, treePath: s.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${o}__wrapper__cta__price--strike`, theme: s?.theme, treePath: s.treePath },
								subtotalPrice: { className: `${o}__wrapper__cta__price`, name: 'bundle-price', theme: s?.theme, treePath: s.treePath },
								button: { className: `${o}__wrapper__cta__button`, theme: s?.theme, treePath: s.treePath },
							},
							k = i()({}, s.lang || {}),
							w = (0, h.u)(k, {}, { activeBreakpoint: s?.theme?.activeBreakpoint });
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${o}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${o}__wrapper__cta__inner__images`,
											children: p.items.map((U) => {
												const a = U.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${o}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: a.url, children: (0, t.Y)(g._, { src: a.thumbnailImageUrl, alt: a.name, lazy: !1 }) }),
														(0, t.Y)(f.I, { ...R.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${o}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												s.ctaIcon
													? (0, t.Y)('div', {
															className: `${o}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(f.I, { ...R.icon, ...(typeof s.ctaIcon == 'string' ? { icon: s.ctaIcon } : s.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${o}__wrapper__cta__subtotal__title`, children: `Subtotal for ${p.count} items` }),
												(0, t.FD)('div', {
													className: `${o}__wrapper__cta__subtotal__prices`,
													children: [
														p.msrp && p.msrp !== p.price
															? (0, t.FD)('label', {
																	className: `${o}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(v.g, { ...R.subtotalStrike, lineThrough: !0, value: p.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${o}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(v.g, { ...R.subtotalPrice, value: p.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${o}__cta__button__wrapper`,
									children: (0, t.Y)(L.$, {
										...R.button,
										disabled: p.items.length == 0,
										disableStyles: !0,
										internalClassName: y()(`${o}__cta__button`, { [`${o}__cta__button--added`]: C }),
										'aria-live': C,
										onClick: (U) => s.onAddToCart(U),
										...(C ? w.ctaButtonSuccessText?.all : w.ctaButtonText?.all),
										children: s.addedToCart ? s.ctaButtonSuccessText : s.ctaButtonText,
									}),
								}),
							],
						});
					});
				e.d(c, ['X', 0, A, 'a', 0, I]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(N, c, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/classnames/index.js'),
					n = e.n(E),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/createImpressionObserver.ts');
				const v = { ResultTracker: () => (0, u.AH)({}) },
					L = (0, r.PA)((f) => {
						const g = (0, T.u)(),
							_ = (0, P.v6)('resultTracker', g, {}, f),
							K = { impression: !0, click: !0 },
							{ children: y, result: W, track: Y, controller: i, className: h, internalClassName: O, disableStyles: D, style: I } = _,
							A = { ...K, ...Y },
							{ ref: s, inViewport: p } = (0, m.Q)();
						p && A.impression && i?.track.product.impression(W);
						const o = {};
						return (
							D ? I && (o.css = [I]) : (o.css = [v.ResultTracker(), I]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${i?.type}-result-tracker`, h, O),
								onClick: (C) => {
									A.click && i?.track.product.click(C, W);
								},
								ref: s,
								...o,
								children: y,
							})
						);
					});
				e.d(c, ['o', 0, L]);
			},
			'./components/src/hooks/useIntersection.tsx'(N, c, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = (r, E = '0px', n = !1) => {
					const [T, P] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const m = new IntersectionObserver(
								([v]) => {
									P(v.isIntersecting), n && v.isIntersecting && m.unobserve(r.current);
								},
								{ rootMargin: E }
							);
							return (
								r.current && m.observe(r.current),
								() => {
									m.unobserve(r.current);
								}
							);
						}, []),
						T
					);
				};
				e.d(c, ['v', 0, u]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(N, c, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 250,
					r = (n, T = {}) => {
						const { rootMargin: P = '0px', fireOnce: m = !1, threshold: v = 0, minVisibleTime: L = 0 } = T,
							[f, g] = (0, t.J0)(!1),
							_ = (0, t.li)(null),
							K = (0, t.li)(null),
							[y, W] = (0, t.J0)(0),
							Y = (0, t.hb)((i) => {
								(n.current = i), W((h) => h + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								g(!1);
								let i = null,
									h = null;
								if (!window.IntersectionObserver || !n.current) return;
								const O = () => {
										h && (window.clearInterval(h), (h = null));
									},
									D = () => {
										L > 0
											? ((K.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													g(!0), m && n.current && i && i.unobserve(n.current);
											  }, L)))
											: (g(!0), m && n.current && i && i.unobserve(n.current));
									},
									I = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (K.current = null), g(!1);
									};
								return (
									(i = new IntersectionObserver(
										([A]) => {
											A.isIntersecting
												? n.current && E(n.current)
													? (O(), D())
													: (I(),
													  h ||
															(h = window.setInterval(() => {
																if (!n.current) {
																	O();
																	return;
																}
																E(n.current) && (O(), D());
															}, u)))
												: (O(), I());
										},
										{ rootMargin: P, threshold: v }
									)),
									n.current && i.observe(n.current),
									() => {
										g(!1), O(), _.current && window.clearTimeout(_.current), i && n.current && i.unobserve(n.current);
									}
								);
							}, [n, y]),
							{ inViewport: f, updateRef: Y }
						);
					};
				function E(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(c, ['v', 0, r]);
			},
			'./components/src/types.ts'(N, c, e) {
				e.d(c, { Q: () => u, V: () => t });
				var t = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(t || {}),
					u = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(u || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(N, c, e) {
				e.d(c, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					E = 1e3;
				function n(T) {
					const P = (0, t.li)(null),
						{ inViewport: m, updateRef: v } = (0, u.v)(P, { fireOnce: !0, threshold: r, minVisibleTime: E, ...T });
					return { ref: P, inViewport: m, updateRef: v };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleList.ts'(N, c, e) {
				e.r(c), e.d(c, { RecommendationBundleList: () => t.a });
				var t = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx');
			},
		},
	]);
})();
