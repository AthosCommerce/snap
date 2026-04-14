'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1059],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(R, a, e) {
				e.d(a, { q: () => x });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(o),
					i = e('./components/src/components/Molecules/Result/Result.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					L = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					m = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					M = e('../../node_modules/preact/compat/dist/compat.module.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = e('./components/src/hooks/useIntersection.tsx');
				const p = ({ gapSize: h, columns: B }) =>
						(0, c.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: h,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${B}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					x = (0, d.PA)((h) => {
						const B = (0, T.u)(),
							U = (0, g.LU)(),
							y = {
								results: h.controller?.store?.results,
								gapSize: '20px',
								title: h.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: U,
							},
							V = { name: h.controller?.store?.profile?.tag?.toLowerCase(), ...h };
						let l = (0, v.v6)('recommendationGrid', B, y, V);
						if (!h.theme?.name) {
							const E = (0, A.X)(l?.breakpoints || {}),
								Q = n()(l?.theme || {}, E?.theme || {}, { arrayMerge: (q, Z) => Z });
							l = { ...l, ...E, theme: Q };
						}
						const {
								disableStyles: N,
								title: K,
								resultComponent: j,
								trim: S,
								lazyRender: Y,
								className: G,
								internalClassName: z,
								treePath: k,
								theme: H,
								controller: I,
							} = l,
							W = { enabled: !0, offset: '10%', ...Y },
							J = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, f.s)({ disableStyles: N }), theme: l?.theme } };
						let _ = l.results || I.store.results;
						if (!l.columns && !l.rows) (l.rows = 1), (l.columns = _.length);
						else if (l.columns && !l.rows) {
							if (((l.rows = Math.floor(_.length / l.columns)), S)) {
								const E = _.length % l.columns;
								_ = _.slice(0, _.length - E);
							}
						} else if (l.rows && !l.columns) {
							if (S) {
								const E = _.length % l.rows;
								_ = _.slice(0, _.length - E);
							}
							l.columns = Math.ceil(_.length / l.rows);
						} else l?.columns && l?.rows && l.columns > 0 && l.rows > 0 && (_ = _?.slice(0, l.columns * l.rows));
						const b = (0, O.Z)(l, p),
							[$, F] = (0, M.useState)(!1),
							w = (0, D.li)(null);
						return (
							(!W?.enabled || (0, C.v)(w, `${W.offset} 0px ${W.offset} 0px`, !0)) && F(!0),
							_?.length
								? (0, r.Y)(u._, {
										children: (0, r.Y)('div', {
											...b,
											ref: w,
											className: t()('ss__recommendation-grid', G, z),
											children: $
												? (0, r.FD)(L.l, {
														controller: I,
														children: [
															K && (0, r.Y)('h3', { className: 'ss__recommendation-grid__title', children: K }),
															(0, r.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: _.map((E) =>
																	j && I
																		? (0, P.Y)(j, { controller: I, result: E, theme: H, treePath: k })
																		: (0, r.Y)(m.o, {
																				result: E,
																				controller: I,
																				children: (0, r.Y)(i.Q, { ...J.result, result: E, controller: I, treePath: k }, E.id),
																		  })
																),
															}),
														],
												  })
												: (0, r.Y)(L.l, {
														controller: I,
														children: _.map((E) => (0, r.Y)(m.o, { controller: I, result: E, children: (0, r.Y)(r.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, a, e) {
				e.d(a, { l: () => P });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					o = e.n(t),
					n = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, c.AH)({}),
					P = (0, s.PA)((f) => {
						const { children: v, className: O, internalClassName: u } = f,
							T = (0, d.v2)(v),
							g = (0, n.Z)(f, i);
						return T.length ? (0, r.Y)('div', { className: o()('ss__recommendation-profile-tracker', O, u), ...g, children: v }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, a, e) {
				e.d(a, { o: () => f });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const P = { ResultTracker: () => (0, d.AH)({}) },
					f = (0, c.PA)((v) => {
						const O = (0, o.u)(),
							u = (0, n.v6)('resultTracker', O, {}, v),
							T = { impression: !0, click: !0 },
							{ children: g, result: A, track: L, controller: m, className: M, internalClassName: D, disableStyles: C, style: p } = u,
							x = { ...T, ...L },
							{ ref: h, inViewport: B } = (0, i.Q)();
						B && x.impression && m?.track.product.impression(A);
						const U = {};
						return (
							C ? p && (U.css = [p]) : (U.css = [P.ResultTracker(), p]),
							(0, r.Y)('div', {
								className: t()('ss__result-tracker', `ss__${m?.type}-result-tracker`, M, D),
								onClick: (y) => {
									x.click && m?.track.product.click(y, A);
								},
								ref: h,
								...U,
								children: g,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, a, e) {
				e.d(a, { v: () => d });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (c, s = '0px', t = !1) => {
					const [o, n] = (0, r.J0)(!1);
					return (
						(0, r.vJ)(() => {
							const i = new IntersectionObserver(
								([P]) => {
									n(P.isIntersecting), t && P.isIntersecting && i.unobserve(c.current);
								},
								{ rootMargin: s }
							);
							return (
								c.current && i.observe(c.current),
								() => {
									i.unobserve(c.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, a, e) {
				e.d(a, { v: () => c });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 250,
					c = (t, o = {}) => {
						const { rootMargin: n = '0px', fireOnce: i = !1, threshold: P = 0, minVisibleTime: f = 0 } = o,
							[v, O] = (0, r.J0)(!1),
							u = (0, r.li)(null),
							T = (0, r.li)(null),
							[g, A] = (0, r.J0)(0),
							L = (0, r.hb)((m) => {
								(t.current = m), A((M) => M + 1);
							}, []);
						return (
							(0, r.vJ)(() => {
								O(!1);
								let m = null,
									M = null;
								if (!window.IntersectionObserver || !t.current) return;
								const D = () => {
										M && (window.clearInterval(M), (M = null));
									},
									C = () => {
										f > 0
											? ((T.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													O(!0), i && t.current && m && m.unobserve(t.current);
											  }, f)))
											: (O(!0), i && t.current && m && m.unobserve(t.current));
									},
									p = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (T.current = null), O(!1);
									};
								return (
									(m = new IntersectionObserver(
										([x]) => {
											x.isIntersecting
												? t.current && s(t.current)
													? (D(), C())
													: (p(),
													  M ||
															(M = window.setInterval(() => {
																if (!t.current) {
																	D();
																	return;
																}
																s(t.current) && (D(), C());
															}, d)))
												: (D(), p());
										},
										{ rootMargin: n, threshold: P }
									)),
									t.current && m.observe(t.current),
									() => {
										O(!1), D(), u.current && window.clearTimeout(u.current), m && t.current && m.unobserve(t.current);
									}
								);
							}, [t, g]),
							{ inViewport: v, updateRef: L }
						);
					};
				function s(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(R, a, e) {
				e.d(a, { Q: () => t });
				var r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const c = 0.7,
					s = 1e3;
				function t(o) {
					const n = (0, r.li)(null),
						{ inViewport: i, updateRef: P } = (0, d.v)(n, { ...o, fireOnce: !0, threshold: c, minVisibleTime: s });
					return { ref: n, inViewport: i, updateRef: P };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(R, a, e) {
				e.r(a), e.d(a, { RecommendationGrid: () => r.q });
				var r = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(R, a, e) {
				e.d(a, { j: () => c });
				var r = Object.prototype.hasOwnProperty;
				function d(s, t, o) {
					for (o of s.keys()) if (c(o, t)) return o;
				}
				function c(s, t) {
					var o, n, i;
					if (s === t) return !0;
					if (s && t && (o = s.constructor) === t.constructor) {
						if (o === Date) return s.getTime() === t.getTime();
						if (o === RegExp) return s.toString() === t.toString();
						if (o === Array) {
							if ((n = s.length) === t.length) for (; n-- && c(s[n], t[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((i = n), (i && typeof i == 'object' && ((i = d(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((i = n[0]), (i && typeof i == 'object' && ((i = d(t, i)), !i)) || !c(n[1], t.get(i)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (s = new Uint8Array(s)), (t = new Uint8Array(t));
						else if (o === DataView) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s.getInt8(n) === t.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s[n] === t[n]; );
							return n === -1;
						}
						if (!o || typeof s == 'object') {
							n = 0;
							for (o in s) if ((r.call(s, o) && ++n && !r.call(t, o)) || !(o in t) || !c(s[o], t[o])) return !1;
							return Object.keys(t).length === n;
						}
					}
					return s !== s && t !== t;
				}
			},
		},
	]);
})();
