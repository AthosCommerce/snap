'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7827],
		{
			'./components/src/hooks/useIntersection.tsx'(p, s, r) {
				r.d(s, { v: () => c });
				var t = r('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (n, d = '0px', e = !1) => {
					const [I, m] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const i = new IntersectionObserver(
								([a]) => {
									m(a.isIntersecting), e && a.isIntersecting && i.unobserve(n.current);
								},
								{ rootMargin: d }
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
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(p, s, r) {
				r.d(s, { v: () => n });
				var t = r('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					n = (e, I = {}) => {
						const { rootMargin: m = '0px', fireOnce: i = !1, threshold: a = 0, minVisibleTime: h = 0 } = I,
							[O, _] = (0, t.J0)(!1),
							u = (0, t.li)(null),
							b = (0, t.li)(null),
							[R, f] = (0, t.J0)(0),
							w = (0, t.hb)((o) => {
								(e.current = o), f((l) => l + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								_(!1);
								let o = null,
									l = null;
								if (!window.IntersectionObserver || !e.current) return;
								const v = () => {
										l && (window.clearInterval(l), (l = null));
									},
									E = () => {
										h > 0
											? ((b.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													_(!0), i && e.current && o && o.unobserve(e.current);
											  }, h)))
											: (_(!0), i && e.current && o && o.unobserve(e.current));
									},
									T = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (b.current = null), _(!1);
									};
								return (
									(o = new IntersectionObserver(
										([k]) => {
											k.isIntersecting
												? e.current && d(e.current)
													? (v(), E())
													: (T(),
													  l ||
															(l = window.setInterval(() => {
																if (!e.current) {
																	v();
																	return;
																}
																d(e.current) && (v(), E());
															}, c)))
												: (v(), T());
										},
										{ rootMargin: m, threshold: a }
									)),
									e.current && o.observe(e.current),
									() => {
										_(!1), v(), u.current && window.clearTimeout(u.current), o && e.current && o.unobserve(e.current);
									}
								);
							}, [e, R]),
							{ inViewport: O, updateRef: w }
						);
					};
				function d(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/types.ts'(p, s, r) {
				r.d(s, { Q: () => c, V: () => t });
				var t = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(t || {}),
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
			'./components/src/utilities/createImpressionObserver.ts'(p, s, r) {
				r.d(s, { Q: () => e });
				var t = r('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = r('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					d = 1e3;
				function e(I) {
					const m = (0, t.li)(null),
						{ inViewport: i, updateRef: a } = (0, c.v)(m, { ...I, fireOnce: !0, threshold: n, minVisibleTime: d });
					return { ref: m, inViewport: i, updateRef: a };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundle.ts'(p, s, r) {
				r.r(s), r.d(s, { RecommendationBundle: () => t.g });
				var t = r('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
			},
		},
	]);
})();
