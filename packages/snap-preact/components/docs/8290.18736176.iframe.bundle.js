'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8290],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(P, o, t) {
				t.d(o, { F: () => T });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					E = t('./components/src/utilities/mergeProps.ts'),
					d = t('./components/src/utilities/mergeStyles.ts'),
					c = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const u = () => (0, _.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					v = 'recommendationBundleEasyAdd',
					T = (0, l.PA)((a) => {
						const i = (0, r.u)(),
							I = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a },
							{ treePath: B, disableStyles: R, controller: A, style: s, styleScript: m, themeStyleScript: p, ...O } = I,
							h = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: v,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, e.s)({ disableStyles: R }),
									theme: I?.theme,
									treePath: B,
								},
							},
							M = (0, E.v6)(v, i, {}, I),
							b = (0, d.Z)(M, u);
						return (0, n.Y)(c.g, { controller: A, ...b, ...h.recommendationBundle, ...O });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(P, o, t) {
				t.d(o, { v: () => _ });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (r, l = '0px', e = !1) => {
					const [E, d] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const c = new IntersectionObserver(
								([u]) => {
									d(u.isIntersecting), e && u.isIntersecting && c.unobserve(r.current);
								},
								{ rootMargin: l }
							);
							return (
								r.current && c.observe(r.current),
								() => {
									c.unobserve(r.current);
								}
							);
						}, []),
						E
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(P, o, t) {
				t.d(o, { v: () => r });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					r = (e, E = {}) => {
						const { rootMargin: d = '0px', fireOnce: c = !1, threshold: u = 0, minVisibleTime: v = 0 } = E,
							[T, a] = (0, n.J0)(!1),
							i = (0, n.li)(null),
							I = (0, n.li)(null),
							[B, R] = (0, n.J0)(0),
							A = (0, n.hb)((s) => {
								(e.current = s), R((m) => m + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								a(!1);
								let s = null,
									m = null;
								if (!window.IntersectionObserver || !e.current) return;
								const p = () => {
										m && (window.clearInterval(m), (m = null));
									},
									O = () => {
										v > 0
											? ((I.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													a(!0), c && e.current && s && s.unobserve(e.current);
											  }, v)))
											: (a(!0), c && e.current && s && s.unobserve(e.current));
									},
									h = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (I.current = null), a(!1);
									};
								return (
									(s = new IntersectionObserver(
										([M]) => {
											M.isIntersecting
												? e.current && l(e.current)
													? (p(), O())
													: (h(),
													  m ||
															(m = window.setInterval(() => {
																if (!e.current) {
																	p();
																	return;
																}
																l(e.current) && (p(), O());
															}, _)))
												: (p(), h());
										},
										{ rootMargin: d, threshold: u }
									)),
									e.current && s.observe(e.current),
									() => {
										a(!1), p(), i.current && window.clearTimeout(i.current), s && e.current && s.unobserve(e.current);
									}
								);
							}, [e, B]),
							{ inViewport: T, updateRef: A }
						);
					};
				function l(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(P, o, t) {
				t.d(o, { Q: () => e });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					l = 1e3;
				function e(E) {
					const d = (0, n.li)(null),
						{ inViewport: c, updateRef: u } = (0, _.v)(d, { ...E, fireOnce: !0, threshold: r, minVisibleTime: l });
					return { ref: d, inViewport: c, updateRef: u };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts'(P, o, t) {
				t.r(o), t.d(o, { RecommendationBundleEasyAdd: () => n.F });
				var n = t('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx');
			},
		},
	]);
})();
