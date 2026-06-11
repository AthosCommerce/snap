'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2751],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(D, _, t) {
				t.d(_, { X: () => R, a: () => L });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('./components/src/utilities/defined.ts'),
					I = t('./components/src/utilities/mergeProps.ts'),
					h = t('./components/src/utilities/mergeStyles.ts'),
					i = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					u = t('./components/src/components/Atoms/Price/Price.tsx'),
					g = t('./components/src/components/Atoms/Button/Button.tsx'),
					B = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = t('./components/src/components/Atoms/Image/Image.tsx'),
					l = t('./components/src/utilities/componentNameToClassName.ts'),
					A = t('../../node_modules/classnames/index.js'),
					C = t.n(A),
					w = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = t('../../node_modules/deepmerge/dist/cjs.js'),
					a = t.n(x),
					p = t('./components/src/hooks/useLang.tsx');
				const P = () =>
						(0, c.AH)({
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
					T = 'recommendationBundleList',
					L = (0, d.PA)((n) => {
						const m = (0, o.u)(),
							r = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n },
							{ treePath: O, disableStyles: f, controller: v, style: K, styleScript: S, themeStyleScript: b, ...M } = r,
							N = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: ($) => (0, e.Y)(R, { ...$ }),
									vertical: !0,
									separatorIcon: !1,
									alias: T,
									...(0, s.s)({ disableStyles: f }),
									theme: r?.theme,
									treePath: O,
								},
							},
							W = (0, I.v6)(T, m, {}, r),
							U = (0, h.Z)(W, P);
						return (0, e.Y)(i.g, { controller: v, ...U, ...N.recommendationBundle, ...M });
					}),
					R = (0, d.PA)((n) => {
						const m = n.cartStore,
							r = `ss__${(0, l.b)(T)}`;
						n.onAddToCart = (b) => {
							f(!0), n.onAddToCart(b), setTimeout(() => f(!1), n.ctaButtonSuccessTimeout);
						};
						const [O, f] = (0, w.J0)(!1);
						n.addedToCart = O;
						const v = {
								image: { className: `${r}__wrapper__cta__image`, theme: n?.theme, treePath: n.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${r}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: n?.theme,
									treePath: n.treePath,
								},
								icon: { name: 'bundle-cart', className: `${r}__wrapper__cta__icon`, size: 50, theme: n?.theme, treePath: n.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${r}__wrapper__cta__price--strike`, theme: n?.theme, treePath: n.treePath },
								subtotalPrice: { className: `${r}__wrapper__cta__price`, name: 'bundle-price', theme: n?.theme, treePath: n.treePath },
								button: { className: `${r}__wrapper__cta__button`, theme: n?.theme, treePath: n.treePath },
							},
							K = a()({}, n.lang || {}),
							S = (0, p.u)(K, {});
						return (0, e.FD)(e.FK, {
							children: [
								(0, e.FD)('div', {
									className: `${r}__wrapper__cta__inner`,
									children: [
										(0, e.Y)('div', {
											className: `${r}__wrapper__cta__inner__images`,
											children: m.items.map((b) => {
												const M = b.display.mappings.core;
												return (0, e.FD)('div', {
													className: `${r}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, e.Y)('a', { href: M.url, children: (0, e.Y)(E._, { src: M.thumbnailImageUrl, alt: M.name, lazy: !1 }) }),
														(0, e.Y)(B.I, { ...v.separatorIcon }),
													],
												});
											}),
										}),
										(0, e.FD)('div', {
											className: `${r}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												n.ctaIcon
													? (0, e.Y)('div', {
															className: `${r}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, e.Y)(B.I, { ...v.icon, ...(typeof n.ctaIcon == 'string' ? { icon: n.ctaIcon } : n.ctaIcon) }),
													  })
													: (0, e.Y)(e.FK, {}),
												(0, e.Y)('span', { className: `${r}__wrapper__cta__subtotal__title`, children: `Subtotal for ${m.count} items` }),
												(0, e.FD)('div', {
													className: `${r}__wrapper__cta__subtotal__prices`,
													children: [
														m.msrp && m.msrp !== m.price
															? (0, e.FD)('label', {
																	className: `${r}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, e.Y)(u.g, { ...v.subtotalStrike, lineThrough: !0, value: m.msrp })],
															  })
															: (0, e.Y)(e.FK, {}),
														(0, e.Y)('label', {
															className: `${r}__wrapper__cta__subtotal__price`,
															children: (0, e.Y)(u.g, { ...v.subtotalPrice, value: m.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, e.Y)('div', {
									className: `${r}__cta__button__wrapper`,
									children: (0, e.Y)(g.$, {
										...v.button,
										disabled: m.items.length == 0,
										disableStyles: !0,
										internalClassName: C()(`${r}__cta__button`, { [`${r}__cta__button--added`]: O }),
										'aria-live': O,
										onClick: (b) => n.onAddToCart(b),
										...(O ? S.ctaButtonSuccessText?.all : S.ctaButtonText?.all),
										children: n.addedToCart ? n.ctaButtonSuccessText : n.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/hooks/useIntersection.tsx'(D, _, t) {
				t.d(_, { v: () => c });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (o, d = '0px', s = !1) => {
					const [I, h] = (0, e.J0)(!1);
					return (
						(0, e.vJ)(() => {
							const i = new IntersectionObserver(
								([u]) => {
									h(u.isIntersecting), s && u.isIntersecting && i.unobserve(o.current);
								},
								{ rootMargin: d }
							);
							return (
								o.current && i.observe(o.current),
								() => {
									i.unobserve(o.current);
								}
							);
						}, []),
						I
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(D, _, t) {
				t.d(_, { v: () => o });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					o = (s, I = {}) => {
						const { rootMargin: h = '0px', fireOnce: i = !1, threshold: u = 0, minVisibleTime: g = 0 } = I,
							[B, E] = (0, e.J0)(!1),
							l = (0, e.li)(null),
							A = (0, e.li)(null),
							[C, w] = (0, e.J0)(0),
							x = (0, e.hb)((a) => {
								(s.current = a), w((p) => p + 1);
							}, []);
						return (
							(0, e.vJ)(() => {
								E(!1);
								let a = null,
									p = null;
								if (!window.IntersectionObserver || !s.current) return;
								const P = () => {
										p && (window.clearInterval(p), (p = null));
									},
									T = () => {
										g > 0
											? ((A.current = Date.now()),
											  l.current && window.clearTimeout(l.current),
											  (l.current = window.setTimeout(() => {
													E(!0), i && s.current && a && a.unobserve(s.current);
											  }, g)))
											: (E(!0), i && s.current && a && a.unobserve(s.current));
									},
									L = () => {
										l.current && window.clearTimeout(l.current), (l.current = null), (A.current = null), E(!1);
									};
								return (
									(a = new IntersectionObserver(
										([R]) => {
											R.isIntersecting
												? s.current && d(s.current)
													? (P(), T())
													: (L(),
													  p ||
															(p = window.setInterval(() => {
																if (!s.current) {
																	P();
																	return;
																}
																d(s.current) && (P(), T());
															}, c)))
												: (P(), L());
										},
										{ rootMargin: h, threshold: u }
									)),
									s.current && a.observe(s.current),
									() => {
										E(!1), P(), l.current && window.clearTimeout(l.current), a && s.current && a.unobserve(s.current);
									}
								);
							}, [s, C]),
							{ inViewport: B, updateRef: x }
						);
					};
				function d(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/types.ts'(D, _, t) {
				t.d(_, { Q: () => c, V: () => e });
				var e = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(e || {}),
					c = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(c || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(D, _, t) {
				t.d(_, { Q: () => s });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					d = 1e3;
				function s(I) {
					const h = (0, e.li)(null),
						{ inViewport: i, updateRef: u } = (0, c.v)(h, { ...I, fireOnce: !0, threshold: o, minVisibleTime: d });
					return { ref: h, inViewport: i, updateRef: u };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleList.ts'(D, _, t) {
				t.r(_), t.d(_, { RecommendationBundleList: () => e.a });
				var e = t('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx');
			},
		},
	]);
})();
