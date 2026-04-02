'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5122],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(k, m, e) {
				e.d(m, { FN: () => U, K: () => I, og: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					n = e.n(v),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(h),
					d = e('../../node_modules/swiper/swiper-react.mjs'),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					R = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/swiper/modules/index.mjs'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					K = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useDisplaySettings.tsx');
				const x = ({ vertical: r, theme: A }) =>
						(0, u.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: r ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: A?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: A?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: A?.variables?.colors?.primary || '#000' },
							},
						}),
					I = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					C = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					U = (0, D.PA)((r) => {
						const A = (0, S.u)(),
							N = (0, a.LU)(),
							G = {
								breakpoints: r.vertical ? JSON.parse(JSON.stringify(C)) : JSON.parse(JSON.stringify(I)),
								pagination: !1,
								slidesPerGroup: !r.breakpoints || !Object.keys(r.breakpoints).length ? 5 : void 0,
								slidesPerView: !r.breakpoints || !Object.keys(r.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: N,
							};
						let i = (0, M.v6)('carousel', A, G, r),
							l;
						if (
							!(r.theme?.name || A.name) &&
							i.breakpoints &&
							(Object.keys(i.breakpoints).forEach((t) => {
								const o = i.breakpoints[t];
								o.slidesPerView && (o.slidesPerView = Number(o.slidesPerView) || 1),
									o.slidesPerGroup && (o.slidesPerGroup = Number(o.slidesPerGroup) || 1);
							}),
							(l = (0, O.X)(i.breakpoints)),
							l && Object.keys(l).length)
						) {
							const t = p()(i?.theme || {}, l?.theme || {}, { arrayMerge: (o, f) => f });
							i.autoAdjustSlides &&
								i.children.length < l.slidesPerView &&
								((l.slidesPerView = i.children.length), (l.slidesPerGroup = i.children.length)),
								(i = { ...i, ...l, theme: t });
						}
						const {
							children: V,
							loop: H,
							nextButton: X,
							prevButton: P,
							hideButtons: g,
							vertical: J,
							onInit: q,
							onBeforeInit: ee,
							onAfterInit: se,
							onNextButtonClick: te,
							onPrevButtonClick: ne,
							onClick: F,
							disableStyles: oe,
							style: ce,
							styleScript: de,
							themeStyleScript: ue,
							modules: ie,
							className: _e,
							internalClassName: le,
							treePath: re,
							...W
						} = i;
						let L = i.pagination,
							j = i.navigation,
							B = i.scrollbar;
						const b = { icon: { internalClassName: 'ss__carousel__icon', ...(0, R.s)({ disableStyles: oe }), theme: i.theme, treePath: re } },
							z = Array.isArray(ie) ? [_.Vx, _.dK, _.Ze, _.Jq].concat(ie) : [_.Vx, _.dK, _.Ze, _.Jq],
							ae = z.filter((t, o) => z.indexOf(t) === o),
							Z = (0, c.li)(null),
							$ = (0, c.li)(null),
							w = (0, c.li)(null),
							me = (0, E.Z)(i, x);
						(0, c.vJ)(() => {
							if (w.current) {
								const o = w.current.querySelector('.swiper');
								o?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									o?.classList.contains('swiper-vertical') && o.classList.add('swiper-container-vertical'),
									o?.classList.contains('swiper-horizontal') && o.classList.add('swiper-container-horizontal');
							}
							Q();
						}, [r]),
							L && (typeof L == 'object' ? (L = { clickable: !0, ...L }) : (L = { clickable: !0 })),
							j && typeof j == 'object'
								? (j = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...j })
								: (j = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							B && (typeof B == 'object' ? (B = { enabled: !0, ...B }) : (B = { enabled: !0 }));
						const Q = () => {
							if (w.current) {
								const o = w.current?.querySelectorAll('.swiper-slide-visible');
								o.forEach((f, Y) => {
									f.classList.remove('swiper-last-visible-slide'), Y == o.length - 1 && f.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete W.breakpoints,
							V?.length
								? (0, s.Y)(K._, {
										children: (0, s.FD)('div', {
											ref: w,
											...me,
											className: n()('ss__carousel', J ? 'ss__carousel-vertical' : '', _e, le),
											children: [
												(0, s.Y)('div', {
													className: n()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': g }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: Z,
														onClick: ne && ((t) => ne(t)),
														children: P || (0, s.Y)(y.I, { icon: J ? 'angle-up' : 'angle-left', ...b.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(d.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (t) => {
														(t.params.navigation.prevEl = Z.current ? Z.current : void 0),
															(t.params.navigation.nextEl = $.current ? $.current : void 0),
															ee && ee(t);
													},
													onInit: (t) => {
														q && q(t);
													},
													onAfterInit: (t) => {
														(t.navigation.onPrevClick = (o) => {
															o.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), t.emit('navigationPrev'));
														}),
															(t.navigation.onNextClick = (o) => {
																o.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), t.emit('navigationNext'));
															}),
															se && se(t);
													},
													onClick: (t, o) => {
														F && F(t, o);
													},
													direction: J ? 'vertical' : 'horizontal',
													loop: H,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ae,
													...W,
													...l,
													controller: void 0,
													navigation: j,
													pagination: L,
													scrollbar: B,
													onResize: (t) => {
														W.onResize && W.onResize(), t.updateSlidesClasses(), Q();
													},
													onTransitionEnd: () => {
														W.onTransitionEnd && W.onTransitionEnd(), Q();
													},
													children: V.map((t) => (t != null ? (0, s.Y)(d.qr, { children: (0, T.Y)(t, { treePath: re }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: n()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': g }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: $,
														onClick: te && ((t) => te(t)),
														children: X || (0, s.Y)(y.I, { icon: J ? 'angle-down' : 'angle-right', ...b.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(k, m, e) {
				e.d(m, { A: () => U });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					n = e.n(v),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(h),
					d = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					T = e('./components/src/components/Molecules/Result/Result.tsx'),
					R = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useIntersection.tsx'),
					y = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/treePath.tsx'),
					a = e('./components/src/hooks/useDisplaySettings.tsx'),
					O = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const C = ({ vertical: r }) => (0, u.AH)({ height: r ? '100%' : void 0, '.ss__result__image-wrapper': { height: r ? '85%' : void 0 } }),
					U = (0, D.PA)((r) => {
						const A = (0, K.u)(),
							N = (0, S.LU)(),
							G = {
								breakpoints: r.vertical ? JSON.parse(JSON.stringify(d.og)) : JSON.parse(JSON.stringify(d.K)),
								pagination: !1,
								loop: !0,
								title: r.controller?.store?.profile?.display?.templateParameters?.title,
								description: r.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: N,
							},
							i = { name: r.controller?.store?.profile?.tag?.toLowerCase(), ...r };
						let l = (0, M.v6)('recommendation', A, G, i),
							V;
						!(r.theme?.name || A.name) && l.breakpoints && ((V = (0, a.X)(l.breakpoints)), V && Object.keys(V).length && (l = { ...l, ...V }));
						const {
								title: H,
								description: X,
								controller: P,
								children: g,
								loop: J,
								results: q,
								pagination: ee,
								nextButton: se,
								prevButton: te,
								hideButtons: ne,
								resultComponent: F,
								disableStyles: oe,
								className: ce,
								internalClassName: de,
								style: ue,
								styleScript: ie,
								themeStyleScript: _e,
								lazyRender: le,
								vertical: re,
								hideTitle: W,
								treePath: L,
								...j
							} = l,
							B = { enabled: !0, offset: '10%', ...le };
						if (!P || P.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const b = q || P.store?.results;
						if (Array.isArray(g) && g.length !== b.length)
							return (
								P.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const z = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, R.s)({ disableStyles: oe, vertical: re }),
									theme: l?.theme,
									treePath: L,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, R.s)({ disableStyles: oe }), theme: l?.theme, treePath: L },
							},
							ae = (0, E.Z)(l, C),
							[Z, $] = (0, c.J0)(!1),
							w = (0, c.li)(null);
						(!B?.enabled || (0, _.v)(w, `${B.offset} 0px ${B.offset} 0px`, !0)) && $(!0);
						const Q = { titleText: { value: `${H}` } },
							t = p()(Q, l.lang || {}),
							o = (0, x.u)(t, {});
						return (Array.isArray(g) && g.length) || b?.length
							? (0, s.Y)(y._, {
									children: (0, s.Y)('div', {
										...ae,
										className: n()('ss__recommendation', ce, de),
										ref: w,
										children: Z
											? (0, s.FD)(O.l, {
													controller: P,
													children: [
														H && !W && (0, s.Y)('h3', { className: 'ss__recommendation__title', ...o.titleText?.all, children: H }),
														X && (0, s.Y)('p', { className: 'ss__recommendation__description', children: X }),
														(0, s.Y)(d.FN, {
															prevButton: te,
															nextButton: se,
															hideButtons: ne,
															loop: J,
															pagination: ee,
															...z.carousel,
															...j,
															children:
																Array.isArray(g) && g.length
																	? g.map((f, Y) => (0, s.Y)(I.o, { controller: P, result: b[Y], children: f }))
																	: b.map((f) =>
																			(0, s.Y)(I.o, {
																				controller: P,
																				result: f,
																				children: (() => {
																					if (F && P) {
																						const Y = F;
																						return (0, s.Y)(Y, { controller: P, result: f, treePath: z.result.treePath });
																					} else return (0, s.Y)(T.Q, { ...z.result, controller: P, result: f }, f.id);
																				})(),
																			})
																	  ),
														}),
													],
											  })
											: (0, s.Y)(O.l, {
													controller: P,
													children:
														Array.isArray(g) && g.length
															? g.map((f, Y) => (0, s.Y)(I.o, { controller: P, result: b[Y], children: (0, s.Y)(s.FK, {}) }))
															: b.map((f) => (0, s.Y)(I.o, { controller: P, result: f, children: (0, s.Y)(s.FK, {}) })),
											  }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(k, m, e) {
				e.d(m, { l: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/dist/preact.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					D = e.n(n),
					h = e('./components/src/utilities/mergeStyles.ts');
				const p = () => (0, u.AH)({}),
					d = (0, v.PA)((T) => {
						const { children: R, className: M, internalClassName: E } = T,
							_ = (0, c.v2)(R),
							y = (0, h.Z)(T, p);
						return _.length ? (0, s.Y)('div', { className: D()('ss__recommendation-profile-tracker', M, E), ...y, children: R }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(k, m, e) {
				e.d(m, { o: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/classnames/index.js'),
					n = e.n(v),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, c.AH)({}) },
					T = (0, u.PA)((R) => {
						const M = (0, D.u)(),
							E = (0, h.v6)('resultTracker', M, {}, R),
							_ = { impression: !0, click: !0 },
							{ children: y, result: K, track: S, controller: a, className: O, internalClassName: x, disableStyles: I, style: C } = E,
							U = { ..._, ...S },
							{ ref: r, inViewport: A } = (0, p.Q)();
						A && U.impression && a?.track.product.impression(K);
						const N = {};
						return (
							I ? C && (N.css = [C]) : (N.css = [d.ResultTracker(), C]),
							(0, s.Y)('div', {
								className: n()('ss__result-tracker', `ss__${a?.type}-result-tracker`, O, x),
								onClick: (G) => {
									U.click && a?.track.product.click(G, K);
								},
								ref: r,
								...N,
								children: y,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(k, m, e) {
				e.d(m, { v: () => c });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (u, v = '0px', n = !1) => {
					const [D, h] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const p = new IntersectionObserver(
								([d]) => {
									h(d.isIntersecting), n && d.isIntersecting && p.unobserve(u.current);
								},
								{ rootMargin: v }
							);
							return (
								u.current && p.observe(u.current),
								() => {
									p.unobserve(u.current);
								}
							);
						}, []),
						D
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(k, m, e) {
				e.d(m, { v: () => u });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					u = (n, D = {}) => {
						const { rootMargin: h = '0px', fireOnce: p = !1, threshold: d = 0, minVisibleTime: T = 0 } = D,
							[R, M] = (0, s.J0)(!1),
							E = (0, s.li)(null),
							_ = (0, s.li)(null),
							[y, K] = (0, s.J0)(0),
							S = (0, s.hb)((a) => {
								(n.current = a), K((O) => O + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								M(!1);
								let a = null,
									O = null;
								if (!window.IntersectionObserver || !n.current) return;
								const x = () => {
										O && (window.clearInterval(O), (O = null));
									},
									I = () => {
										T > 0
											? ((_.current = Date.now()),
											  E.current && window.clearTimeout(E.current),
											  (E.current = window.setTimeout(() => {
													M(!0), p && n.current && a && a.unobserve(n.current);
											  }, T)))
											: (M(!0), p && n.current && a && a.unobserve(n.current));
									},
									C = () => {
										E.current && window.clearTimeout(E.current), (E.current = null), (_.current = null), M(!1);
									};
								return (
									(a = new IntersectionObserver(
										([U]) => {
											U.isIntersecting
												? n.current && v(n.current)
													? (x(), I())
													: (C(),
													  O ||
															(O = window.setInterval(() => {
																if (!n.current) {
																	x();
																	return;
																}
																v(n.current) && (x(), I());
															}, c)))
												: (x(), C());
										},
										{ rootMargin: h, threshold: d }
									)),
									n.current && a.observe(n.current),
									() => {
										M(!1), x(), E.current && window.clearTimeout(E.current), a && n.current && a.unobserve(n.current);
									}
								);
							}, [n, y]),
							{ inViewport: R, updateRef: S }
						);
					};
				function v(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(k, m, e) {
				e.d(m, { Q: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const u = 0.7,
					v = 1e3;
				function n(D) {
					const h = (0, s.li)(null),
						{ inViewport: p, updateRef: d } = (0, c.v)(h, { ...D, fireOnce: !0, threshold: u, minVisibleTime: v });
					return { ref: h, inViewport: p, updateRef: d };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(k, m, e) {
				e.r(m), e.d(m, { Recommendation: () => s.A });
				var s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
		},
	]);
})();
