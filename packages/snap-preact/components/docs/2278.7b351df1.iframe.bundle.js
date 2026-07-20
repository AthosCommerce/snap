'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[2278],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(v, o, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const m = () => (0, i.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					P = 'recommendationBundleEasyAdd',
					T = (0, l.PA)((a) => {
						const d = (0, n.u)(),
							I = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a },
							{ treePath: R, disableStyles: A, controller: B, style: r, styleScript: _, themeStyleScript: p, ...h } = I,
							O = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: P,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, t.s)({ disableStyles: A }),
									theme: I?.theme,
									treePath: R,
								},
							},
							M = (0, E.v6)(P, d, {}, I),
							b = (0, u.Z)(M, m);
						return (0, s.Y)(c.g, { controller: B, ...b, ...O.recommendationBundle, ...h });
					});
				e.d(o, ['F', 0, T]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, o, e) {
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, l = '0px', t = !1) => {
					const [E, u] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const c = new IntersectionObserver(
								([m]) => {
									u(m.isIntersecting), t && m.isIntersecting && c.unobserve(n.current);
								},
								{ rootMargin: l }
							);
							return (
								n.current && c.observe(n.current),
								() => {
									c.unobserve(n.current);
								}
							);
						}, []),
						E
					);
				};
				e.d(o, ['v', 0, i]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, o, e) {
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 250,
					n = (t, E = {}) => {
						const { rootMargin: u = '0px', fireOnce: c = !1, threshold: m = 0, minVisibleTime: P = 0 } = E,
							[T, a] = (0, s.J0)(!1),
							d = (0, s.li)(null),
							I = (0, s.li)(null),
							[R, A] = (0, s.J0)(0),
							B = (0, s.hb)((r) => {
								(t.current = r), A((_) => _ + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								a(!1);
								let r = null,
									_ = null;
								if (!window.IntersectionObserver || !t.current) return;
								const p = () => {
										_ && (window.clearInterval(_), (_ = null));
									},
									h = () => {
										P > 0
											? ((I.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													a(!0), c && t.current && r && r.unobserve(t.current);
											  }, P)))
											: (a(!0), c && t.current && r && r.unobserve(t.current));
									},
									O = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (I.current = null), a(!1);
									};
								return (
									(r = new IntersectionObserver(
										([M]) => {
											M.isIntersecting
												? t.current && l(t.current)
													? (p(), h())
													: (O(),
													  _ ||
															(_ = window.setInterval(() => {
																if (!t.current) {
																	p();
																	return;
																}
																l(t.current) && (p(), h());
															}, i)))
												: (p(), O());
										},
										{ rootMargin: u, threshold: m }
									)),
									t.current && r.observe(t.current),
									() => {
										a(!1), p(), d.current && window.clearTimeout(d.current), r && t.current && r.unobserve(t.current);
									}
								);
							}, [t, R]),
							{ inViewport: T, updateRef: B }
						);
					};
				function l(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(o, ['v', 0, n]);
			},
			'./components/src/types.ts'(v, o, e) {
				e.d(o, { Q: () => i, V: () => s });
				var s = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(s || {}),
					i = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(i || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, o, e) {
				e.d(o, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					l = 1e3;
				function t(E) {
					const u = (0, s.li)(null),
						{ inViewport: c, updateRef: m } = (0, i.v)(u, { ...E, fireOnce: !0, threshold: n, minVisibleTime: l });
					return { ref: u, inViewport: c, updateRef: m };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts'(v, o, e) {
				e.r(o), e.d(o, { RecommendationBundleEasyAdd: () => s.F });
				var s = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx');
			},
		},
	]);
})();
