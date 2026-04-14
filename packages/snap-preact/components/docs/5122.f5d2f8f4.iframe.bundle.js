'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5122],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(S, _, e) {
				e.d(_, { FN: () => M, K: () => U, og: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					n = e.n(P),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(v),
					a = e('../../node_modules/swiper/swiper-react.mjs'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					c = e('../../node_modules/swiper/modules/index.mjs'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					W = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useDisplaySettings.tsx'),
					j = e('./components/src/hooks/useComponent.tsx');
				const D = ({ vertical: d, theme: L }) =>
						(0, m.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: d ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.swiper-pagination-bullet-active': { background: L?.variables?.colors?.primary || 'inherit' },
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
								width: '100%',
							},
							'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: L?.variables?.colors?.primary || '#000' },
							},
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
							'.swiper-horizontal': { touchAction: 'pan-y' },
							'.swiper-vertical': { touchAction: 'pan-x' },
							'.swiper-scrollbar': {
								position: 'absolute',
								bottom: '0',
								left: '0',
								width: '100%',
								height: '2px',
								backgroundColor: '#d9d9d9',
								'&:empty': { display: 'none' },
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: L?.variables?.colors?.primary || '#000' },
							},
						}),
					U = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					V = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					M = (0, O.PA)((d) => {
						const L = (0, w.u)(),
							le = (0, i.uk)(),
							ae = (0, f.LU)(),
							A = {
								breakpoints: d.vertical ? JSON.parse(JSON.stringify(V)) : JSON.parse(JSON.stringify(U)),
								pagination: !1,
								slidesPerGroup: !d.breakpoints || !Object.keys(d.breakpoints).length ? 5 : void 0,
								slidesPerView: !d.breakpoints || !Object.keys(d.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ae,
							};
						let r = (0, h.v6)('carousel', L, A, d),
							g;
						if (
							!(d.theme?.name || L.name) &&
							r.breakpoints &&
							(Object.keys(r.breakpoints).forEach((t) => {
								const o = r.breakpoints[t];
								o.slidesPerView && (o.slidesPerView = Number(o.slidesPerView) || 1),
									o.slidesPerGroup && (o.slidesPerGroup = Number(o.slidesPerGroup) || 1);
							}),
							(g = (0, R.X)(r.breakpoints)),
							g && Object.keys(g).length)
						) {
							const t = u()(r?.theme || {}, g?.theme || {}, { arrayMerge: (o, ie) => ie });
							r.autoAdjustSlides &&
								r.children.length < g.slidesPerView &&
								((g.slidesPerView = r.children.length), (g.slidesPerGroup = r.children.length)),
								(r = { ...r, ...g, theme: t });
						}
						const {
							children: J,
							loop: E,
							nextButton: C,
							prevButton: ce,
							hideButtons: F,
							vertical: Y,
							onInit: Z,
							onBeforeInit: $,
							onAfterInit: Q,
							onNextButtonClick: z,
							onPrevButtonClick: G,
							onClick: X,
							disableStyles: de,
							customComponent: _e,
							style: Ee,
							styleScript: Pe,
							themeStyleScript: pe,
							modules: q,
							className: me,
							internalClassName: ee,
							treePath: se,
							...K
						} = r;
						if (_e) {
							const t = (0, j.x)(le?.templates?.library.import.component.carousel || {}, _e);
							if (t) return (0, s.Y)(t, { ...r });
						}
						let I = r.pagination,
							b = r.navigation,
							k = r.scrollbar;
						const te = { icon: { internalClassName: 'ss__carousel__icon', ...(0, y.s)({ disableStyles: de }), theme: r.theme, treePath: se } },
							ne = Array.isArray(q) ? [c.Vx, c.dK, c.Ze, c.Jq].concat(q) : [c.Vx, c.dK, c.Ze, c.Jq],
							oe = ne.filter((t, o) => ne.indexOf(t) === o),
							re = (0, l.li)(null),
							H = (0, l.li)(null),
							N = (0, l.li)(null),
							ue = (0, p.Z)(r, D);
						(0, l.vJ)(() => {
							if (N.current) {
								const o = N.current.querySelector('.swiper');
								o?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									o?.classList.contains('swiper-vertical') && o.classList.add('swiper-container-vertical'),
									o?.classList.contains('swiper-horizontal') && o.classList.add('swiper-container-horizontal');
							}
							T();
						}, [d]),
							I && (typeof I == 'object' ? (I = { clickable: !0, ...I }) : (I = { clickable: !0 })),
							b && typeof b == 'object'
								? (b = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...b })
								: (b = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							k && (typeof k == 'object' ? (k = { enabled: !0, ...k }) : (k = { enabled: !0 }));
						const T = () => {
							if (N.current) {
								const o = N.current?.querySelectorAll('.swiper-slide-visible');
								o.forEach((ie, ve) => {
									ie.classList.remove('swiper-last-visible-slide'), ve == o.length - 1 && ie.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete K.breakpoints,
							J?.length
								? (0, s.Y)(W._, {
										children: (0, s.FD)('div', {
											ref: N,
											...ue,
											className: n()('ss__carousel', Y ? 'ss__carousel-vertical' : '', me, ee),
											children: [
												(0, s.Y)('div', {
													className: n()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': F }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: re,
														onClick: G && ((t) => G(t)),
														children: ce || (0, s.Y)(B.I, { icon: Y ? 'angle-up' : 'angle-left', ...te.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(a.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (t) => {
														(t.params.navigation.prevEl = re.current ? re.current : void 0),
															(t.params.navigation.nextEl = H.current ? H.current : void 0),
															$ && $(t);
													},
													onInit: (t) => {
														Z && Z(t);
													},
													onAfterInit: (t) => {
														(t.navigation.onPrevClick = (o) => {
															o.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), t.emit('navigationPrev'));
														}),
															(t.navigation.onNextClick = (o) => {
																o.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), t.emit('navigationNext'));
															}),
															Q && Q(t);
													},
													onClick: (t, o) => {
														X && X(t, o);
													},
													direction: Y ? 'vertical' : 'horizontal',
													loop: E,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: oe,
													...K,
													...g,
													controller: void 0,
													navigation: b,
													pagination: I,
													scrollbar: k,
													onResize: (t) => {
														K.onResize && K.onResize(), t.updateSlidesClasses(), T();
													},
													onTransitionEnd: () => {
														K.onTransitionEnd && K.onTransitionEnd(), T();
													},
													children: J.map((t) => (t != null ? (0, s.Y)(a.qr, { children: (0, x.Y)(t, { treePath: se }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: n()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': F }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: H,
														onClick: z && ((t) => z(t)),
														children: C || (0, s.Y)(B.I, { icon: Y ? 'angle-down' : 'angle-right', ...te.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(S, _, e) {
				e.d(_, { A: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/classnames/index.js'),
					n = e.n(P),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(v),
					a = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					x = e('./components/src/components/Molecules/Result/Result.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/hooks/useIntersection.tsx'),
					W = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/hooks/useDisplaySettings.tsx'),
					R = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					D = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const U = ({ vertical: M }) => (0, m.AH)({ height: M ? '100%' : void 0, '.ss__result__image-wrapper': { height: M ? '85%' : void 0 } }),
					V = (0, O.PA)((M) => {
						const d = (0, w.u)(),
							L = (0, i.LU)(),
							le = {
								breakpoints: M.vertical ? JSON.parse(JSON.stringify(a.og)) : JSON.parse(JSON.stringify(a.K)),
								pagination: !1,
								loop: !0,
								title: M.controller?.store?.profile?.display?.templateParameters?.title,
								description: M.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: L,
							},
							ae = { name: M.controller?.store?.profile?.tag?.toLowerCase(), ...M };
						let A = (0, p.v6)('recommendation', d, le, ae),
							r;
						!(M.theme?.name || d.name) && A.breakpoints && ((r = (0, f.X)(A.breakpoints)), r && Object.keys(r).length && (A = { ...A, ...r }));
						const {
								title: g,
								description: J,
								controller: E,
								children: C,
								loop: ce,
								results: F,
								pagination: Y,
								nextButton: Z,
								prevButton: $,
								hideButtons: Q,
								resultComponent: z,
								disableStyles: G,
								className: X,
								internalClassName: de,
								style: _e,
								styleScript: Ee,
								themeStyleScript: Pe,
								lazyRender: pe,
								vertical: q,
								hideTitle: me,
								treePath: ee,
								...se
							} = A,
							K = { enabled: !0, offset: '10%', ...pe };
						if (!E || E.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const I = F || E.store?.results;
						if (Array.isArray(C) && C.length !== I.length)
							return (
								E.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const b = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, h.s)({ disableStyles: G, vertical: q }),
									theme: A?.theme,
									treePath: ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, h.s)({ disableStyles: G }), theme: A?.theme, treePath: ee },
							},
							k = (0, c.Z)(A, U),
							[te, ne] = (0, l.J0)(!1),
							oe = (0, l.li)(null);
						(!K?.enabled || (0, B.v)(oe, `${K.offset} 0px ${K.offset} 0px`, !0)) && ne(!0);
						const H = { titleText: { value: `${g}` } },
							N = u()(H, A.lang || {}),
							ue = (0, j.u)(N, {});
						return (Array.isArray(C) && C.length) || I?.length
							? (0, s.Y)(W._, {
									children: (0, s.Y)('div', {
										...k,
										className: n()('ss__recommendation', X, de),
										ref: oe,
										children: te
											? (0, s.FD)(R.l, {
													controller: E,
													children: [
														g && !me && (0, s.Y)('h3', { className: 'ss__recommendation__title', ...ue.titleText?.all, children: g }),
														J && (0, s.Y)('p', { className: 'ss__recommendation__description', children: J }),
														(0, s.Y)(a.FN, {
															prevButton: $,
															nextButton: Z,
															hideButtons: Q,
															loop: ce,
															pagination: Y,
															...b.carousel,
															...se,
															children:
																Array.isArray(C) && C.length
																	? C.map((T, t) => (0, s.Y)(D.o, { controller: E, result: I[t], children: T }))
																	: I.map((T) =>
																			(0, s.Y)(D.o, {
																				controller: E,
																				result: T,
																				children:
																					z && E
																						? (0, y.Y)(z, { controller: E, result: T, treePath: b.result.treePath })
																						: (0, s.Y)(x.Q, { ...b.result, controller: E, result: T }, T.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, s.Y)(R.l, {
													controller: E,
													children:
														Array.isArray(C) && C.length
															? C.map((T, t) => (0, s.Y)(D.o, { controller: E, result: I[t], children: (0, s.Y)(s.FK, {}) }))
															: I.map((T) => (0, s.Y)(D.o, { controller: E, result: T, children: (0, s.Y)(s.FK, {}) })),
											  }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(S, _, e) {
				e.d(_, { l: () => a });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					O = e.n(n),
					v = e('./components/src/utilities/mergeStyles.ts');
				const u = () => (0, m.AH)({}),
					a = (0, P.PA)((x) => {
						const { children: y, className: h, internalClassName: p } = x,
							c = (0, l.v2)(y),
							B = (0, v.Z)(x, u);
						return c.length ? (0, s.Y)('div', { className: O()('ss__recommendation-profile-tracker', h, p), ...B, children: y }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(S, _, e) {
				e.d(_, { o: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/classnames/index.js'),
					n = e.n(P),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/createImpressionObserver.ts');
				const a = { ResultTracker: () => (0, l.AH)({}) },
					x = (0, m.PA)((y) => {
						const h = (0, O.u)(),
							p = (0, v.v6)('resultTracker', h, {}, y),
							c = { impression: !0, click: !0 },
							{ children: B, result: W, track: w, controller: i, className: f, internalClassName: R, disableStyles: j, style: D } = p,
							U = { ...c, ...w },
							{ ref: V, inViewport: M } = (0, u.Q)();
						M && U.impression && i?.track.product.impression(W);
						const d = {};
						return (
							j ? D && (d.css = [D]) : (d.css = [a.ResultTracker(), D]),
							(0, s.Y)('div', {
								className: n()('ss__result-tracker', `ss__${i?.type}-result-tracker`, f, R),
								onClick: (L) => {
									U.click && i?.track.product.click(L, W);
								},
								ref: V,
								...d,
								children: B,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(S, _, e) {
				e.d(_, { v: () => l });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (m, P = '0px', n = !1) => {
					const [O, v] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const u = new IntersectionObserver(
								([a]) => {
									v(a.isIntersecting), n && a.isIntersecting && u.unobserve(m.current);
								},
								{ rootMargin: P }
							);
							return (
								m.current && u.observe(m.current),
								() => {
									u.unobserve(m.current);
								}
							);
						}, []),
						O
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(S, _, e) {
				e.d(_, { v: () => m });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					m = (n, O = {}) => {
						const { rootMargin: v = '0px', fireOnce: u = !1, threshold: a = 0, minVisibleTime: x = 0 } = O,
							[y, h] = (0, s.J0)(!1),
							p = (0, s.li)(null),
							c = (0, s.li)(null),
							[B, W] = (0, s.J0)(0),
							w = (0, s.hb)((i) => {
								(n.current = i), W((f) => f + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								h(!1);
								let i = null,
									f = null;
								if (!window.IntersectionObserver || !n.current) return;
								const R = () => {
										f && (window.clearInterval(f), (f = null));
									},
									j = () => {
										x > 0
											? ((c.current = Date.now()),
											  p.current && window.clearTimeout(p.current),
											  (p.current = window.setTimeout(() => {
													h(!0), u && n.current && i && i.unobserve(n.current);
											  }, x)))
											: (h(!0), u && n.current && i && i.unobserve(n.current));
									},
									D = () => {
										p.current && window.clearTimeout(p.current), (p.current = null), (c.current = null), h(!1);
									};
								return (
									(i = new IntersectionObserver(
										([U]) => {
											U.isIntersecting
												? n.current && P(n.current)
													? (R(), j())
													: (D(),
													  f ||
															(f = window.setInterval(() => {
																if (!n.current) {
																	R();
																	return;
																}
																P(n.current) && (R(), j());
															}, l)))
												: (R(), D());
										},
										{ rootMargin: v, threshold: a }
									)),
									n.current && i.observe(n.current),
									() => {
										h(!1), R(), p.current && window.clearTimeout(p.current), i && n.current && i.unobserve(n.current);
									}
								);
							}, [n, B]),
							{ inViewport: y, updateRef: w }
						);
					};
				function P(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(S, _, e) {
				e.d(_, { Q: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					P = 1e3;
				function n(O) {
					const v = (0, s.li)(null),
						{ inViewport: u, updateRef: a } = (0, l.v)(v, { ...O, fireOnce: !0, threshold: m, minVisibleTime: P });
					return { ref: v, inViewport: u, updateRef: a };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(S, _, e) {
				e.r(_), e.d(_, { Recommendation: () => s.A });
				var s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
		},
	]);
})();
