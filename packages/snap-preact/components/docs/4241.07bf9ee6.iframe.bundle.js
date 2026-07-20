'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4241],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(v, s, e) {
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const d = () =>
						(0, c.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					P = 'recommendationBundleVertical',
					T = (0, u.PA)((a) => {
						const l = (0, n.u)(),
							E = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a },
							{ treePath: h, disableStyles: M, controller: b, style: r, styleScript: _, themeStyleScript: p, ...O } = E,
							R = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: P,
									...(0, t.s)({ disableStyles: M }),
									theme: E?.theme,
									treePath: h,
								},
							},
							B = (0, I.v6)(P, l, {}, E),
							f = (0, m.Z)(B, d);
						return (0, o.Y)(i.g, { controller: b, ...f, ...R.recommendationBundle, ...O });
					});
				e.d(s, ['a', 0, T]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, s, e) {
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (n, u = '0px', t = !1) => {
					const [I, m] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const i = new IntersectionObserver(
								([d]) => {
									m(d.isIntersecting), t && d.isIntersecting && i.unobserve(n.current);
								},
								{ rootMargin: u }
							);
							return (
								n.current && i.observe(n.current),
								() => {
									i.unobserve(n.current);
								}
							);
						}, []),
						I
					);
				};
				e.d(s, ['v', 0, c]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, s, e) {
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					n = (t, I = {}) => {
						const { rootMargin: m = '0px', fireOnce: i = !1, threshold: d = 0, minVisibleTime: P = 0 } = I,
							[T, a] = (0, o.J0)(!1),
							l = (0, o.li)(null),
							E = (0, o.li)(null),
							[h, M] = (0, o.J0)(0),
							b = (0, o.hb)((r) => {
								(t.current = r), M((_) => _ + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								a(!1);
								let r = null,
									_ = null;
								if (!window.IntersectionObserver || !t.current) return;
								const p = () => {
										_ && (window.clearInterval(_), (_ = null));
									},
									O = () => {
										P > 0
											? ((E.current = Date.now()),
											  l.current && window.clearTimeout(l.current),
											  (l.current = window.setTimeout(() => {
													a(!0), i && t.current && r && r.unobserve(t.current);
											  }, P)))
											: (a(!0), i && t.current && r && r.unobserve(t.current));
									},
									R = () => {
										l.current && window.clearTimeout(l.current), (l.current = null), (E.current = null), a(!1);
									};
								return (
									(r = new IntersectionObserver(
										([B]) => {
											B.isIntersecting
												? t.current && u(t.current)
													? (p(), O())
													: (R(),
													  _ ||
															(_ = window.setInterval(() => {
																if (!t.current) {
																	p();
																	return;
																}
																u(t.current) && (p(), O());
															}, c)))
												: (p(), R());
										},
										{ rootMargin: m, threshold: d }
									)),
									t.current && r.observe(t.current),
									() => {
										a(!1), p(), l.current && window.clearTimeout(l.current), r && t.current && r.unobserve(t.current);
									}
								);
							}, [t, h]),
							{ inViewport: T, updateRef: b }
						);
					};
				function u(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(s, ['v', 0, n]);
			},
			'./components/src/types.ts'(v, s, e) {
				e.d(s, { Q: () => c, V: () => o });
				var o = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(o || {}),
					c = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(c || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, s, e) {
				e.d(s, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					u = 1e3;
				function t(I) {
					const m = (0, o.li)(null),
						{ inViewport: i, updateRef: d } = (0, c.v)(m, { ...I, fireOnce: !0, threshold: n, minVisibleTime: u });
					return { ref: m, inViewport: i, updateRef: d };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleVertical.ts'(v, s, e) {
				e.r(s), e.d(s, { RecommendationBundleVertical: () => o.a });
				var o = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx');
			},
		},
	]);
})();
