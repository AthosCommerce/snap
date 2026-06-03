'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1356],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(b, a, e) {
				e.d(a, { P: () => s });
				const s = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(b, a, e) {
				e.d(a, { G: () => n });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(r, i) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...i };
					return (0, s.Z)(r, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(b, a, e) {
				e.d(a, { Z: () => s });
				function s(r, i) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...i };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const l = n(r, t.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(t.decimalPlaces, '0'));
					let c = l.join(t.decimalSeparator);
					return t.symbolAfter ? (c = c + t.symbol) : (c = t.symbol + c), c;
				}
				function n(r, i) {
					const t = r.toString(),
						l = t.indexOf('.'),
						c = l == -1 ? t.length : 1 + l + (i || -1);
					return t.substr(0, c);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(b, a, e) {
				e.d(a, { p: () => s });
				function s(n) {
					if (typeof n != 'string') return n;
					let r = n.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(b, a, e) {
				e.d(a, { x: () => s });
				function s(n, r, i) {
					if (typeof n != 'string' || n.length <= r) return n;
					const t = n.lastIndexOf(' ', r),
						l = t != -1 ? t : r - 1;
					return n.substr(0, l) + (i || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(b, a, e) {
				e.d(a, { FN: () => I, K: () => W, og: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					t = e.n(i),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(c),
					d = e('../../node_modules/swiper/swiper-react.mjs'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					f = e('../../node_modules/swiper/modules/index.mjs'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useDisplaySettings.tsx'),
					j = e('./components/src/hooks/useComponent.tsx');
				const y = ({ vertical: g, theme: w }) =>
						(0, r.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: g ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: w?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: w?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: w?.variables?.colors?.primary || '#000' },
							},
						}),
					W = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					V = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					I = (0, l.PA)((g) => {
						const w = (0, B.u)(),
							ae = (0, E.uk)(),
							le = (0, M.LU)(),
							L = {
								breakpoints: g.vertical ? JSON.parse(JSON.stringify(V)) : JSON.parse(JSON.stringify(W)),
								pagination: !1,
								slidesPerGroup: !g.breakpoints || !Object.keys(g.breakpoints).length ? 5 : void 0,
								slidesPerView: !g.breakpoints || !Object.keys(g.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: le,
							};
						let u = (0, v.v6)('carousel', w, L, g),
							T;
						if (
							!(g.theme?.type == 'templates' || w?.type == 'templates') &&
							u.breakpoints &&
							(Object.keys(u.breakpoints).forEach((o) => {
								const m = u.breakpoints[o];
								m.slidesPerView && (m.slidesPerView = Number(m.slidesPerView) || 1),
									m.slidesPerGroup && (m.slidesPerGroup = Number(m.slidesPerGroup) || 1);
							}),
							(T = (0, R.X)(u.breakpoints)),
							T && Object.keys(T).length)
						) {
							const o = _()(u?.theme || {}, T?.theme || {}, { arrayMerge: (m, ie) => ie });
							u.autoAdjustSlides &&
								u.children.length < T.slidesPerView &&
								((T.slidesPerView = u.children.length), (T.slidesPerGroup = u.children.length)),
								(u = { ...u, ...T, theme: o });
						}
						const {
							children: J,
							loop: P,
							nextButton: A,
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
							customComponent: me,
							style: pe,
							styleScript: he,
							themeStyleScript: fe,
							modules: q,
							className: ue,
							internalClassName: ee,
							treePath: se,
							...K
						} = u;
						if (me) {
							const o = (0, j.x)(ae?.templates?.library.import.component.carousel || {}, me);
							if (o) return (0, s.Y)(o, { ...u });
						}
						let x = u.pagination,
							U = u.navigation,
							N = u.scrollbar;
						const te = { icon: { internalClassName: 'ss__carousel__icon', ...(0, O.s)({ disableStyles: de }), theme: u.theme, treePath: se } },
							oe = Array.isArray(q) ? [f.Vx, f.dK, f.Ze, f.Jq].concat(q) : [f.Vx, f.dK, f.Ze, f.Jq],
							ne = oe.filter((o, m) => oe.indexOf(o) === m),
							re = (0, n.li)(null),
							H = (0, n.li)(null),
							S = (0, n.li)(null),
							_e = (0, h.Z)(u, y);
						(0, n.vJ)(() => {
							if (S.current) {
								const m = S.current.querySelector('.swiper');
								m?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									m?.classList.contains('swiper-vertical') && m.classList.add('swiper-container-vertical'),
									m?.classList.contains('swiper-horizontal') && m.classList.add('swiper-container-horizontal');
							}
							C();
						}, [g]),
							x && (typeof x == 'object' ? (x = { clickable: !0, ...x }) : (x = { clickable: !0 })),
							U && typeof U == 'object'
								? (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...U })
								: (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							N && (typeof N == 'object' ? (N = { enabled: !0, ...N }) : (N = { enabled: !0 }));
						const C = () => {
							if (S.current) {
								const m = S.current?.querySelectorAll('.swiper-slide-visible');
								m.forEach((ie, Ee) => {
									ie.classList.remove('swiper-last-visible-slide'), Ee == m.length - 1 && ie.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete K.breakpoints,
							J?.length
								? (0, s.Y)(k._, {
										children: (0, s.FD)('div', {
											ref: S,
											..._e,
											className: t()('ss__carousel', Y ? 'ss__carousel-vertical' : '', ue, ee),
											children: [
												(0, s.Y)('div', {
													className: t()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': F }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: re,
														onClick: G && ((o) => G(o)),
														children: ce || (0, s.Y)(D.I, { icon: Y ? 'angle-up' : 'angle-left', ...te.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(d.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														(o.params.navigation.prevEl = re.current ? re.current : void 0),
															(o.params.navigation.nextEl = H.current ? H.current : void 0),
															$ && $(o);
													},
													onInit: (o) => {
														Z && Z(o);
													},
													onAfterInit: (o) => {
														(o.navigation.onPrevClick = (m) => {
															m.preventDefault(), !(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
														}),
															(o.navigation.onNextClick = (m) => {
																m.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															}),
															Q && Q(o);
													},
													onClick: (o, m) => {
														X && X(o, m);
													},
													direction: Y ? 'vertical' : 'horizontal',
													loop: P,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ne,
													...K,
													...T,
													controller: void 0,
													navigation: U,
													pagination: x,
													scrollbar: N,
													onResize: (o) => {
														K.onResize && K.onResize(), o.updateSlidesClasses(), C();
													},
													onTransitionEnd: () => {
														K.onTransitionEnd && K.onTransitionEnd(), C();
													},
													children: J.map((o) => (o != null ? (0, s.Y)(d.qr, { children: (0, p.Y)(o, { treePath: se }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: t()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': F }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: H,
														onClick: z && ((o) => z(o)),
														children: A || (0, s.Y)(D.I, { icon: Y ? 'angle-down' : 'angle-right', ...te.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(b, a, e) {
				e.d(a, { A: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					t = e.n(i),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(c),
					d = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					p = e('./components/src/components/Molecules/Result/Result.tsx'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useIntersection.tsx'),
					k = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/hooks/useDisplaySettings.tsx'),
					R = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const W = ({ vertical: I }) => (0, r.AH)({ height: I ? '100%' : void 0, '.ss__result__image-wrapper': { height: I ? '85%' : void 0 } }),
					V = (0, l.PA)((I) => {
						const g = (0, B.u)(),
							w = (0, E.LU)(),
							ae = {
								breakpoints: I.vertical ? JSON.parse(JSON.stringify(d.og)) : JSON.parse(JSON.stringify(d.K)),
								pagination: !1,
								loop: !0,
								title: I.controller?.store?.profile?.display?.templateParameters?.title,
								description: I.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: w,
							},
							le = { name: I.controller?.store?.profile?.tag?.toLowerCase(), ...I };
						let L = (0, h.v6)('recommendation', g, ae, le),
							u;
						!(I.theme?.type == 'templates' || g?.type == 'templates') &&
							L.breakpoints &&
							((u = (0, M.X)(L.breakpoints)), u && Object.keys(u).length && (L = { ...L, ...u }));
						const {
								title: T,
								description: J,
								controller: P,
								children: A,
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
								style: me,
								styleScript: pe,
								themeStyleScript: he,
								lazyRender: fe,
								vertical: q,
								hideTitle: ue,
								treePath: ee,
								...se
							} = L,
							K = { enabled: !0, offset: '10%', ...fe };
						if (!P || P.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const x = F || P.store?.results;
						if (Array.isArray(A) && A.length !== x.length)
							return (
								P.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const U = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, v.s)({ disableStyles: G, vertical: q }),
									theme: L?.theme,
									treePath: ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, v.s)({ disableStyles: G }), theme: L?.theme, treePath: ee },
							},
							N = (0, f.Z)(L, W),
							[te, oe] = (0, n.J0)(!1),
							ne = (0, n.li)(null);
						(!K?.enabled || (0, D.v)(ne, `${K.offset} 0px ${K.offset} 0px`, !0)) && oe(!0);
						const H = { titleText: { value: `${T}` } },
							S = _()(H, L.lang || {}),
							_e = (0, j.u)(S, {});
						return (Array.isArray(A) && A.length) || x?.length
							? (0, s.Y)(k._, {
									children: (0, s.Y)('div', {
										...N,
										className: t()('ss__recommendation', X, de),
										ref: ne,
										children: te
											? (0, s.FD)(R.l, {
													controller: P,
													children: [
														T && !ue && (0, s.Y)('h3', { className: 'ss__recommendation__title', ..._e.titleText?.all, children: T }),
														J && (0, s.Y)('p', { className: 'ss__recommendation__description', children: J }),
														(0, s.Y)(d.FN, {
															prevButton: $,
															nextButton: Z,
															hideButtons: Q,
															loop: ce,
															pagination: Y,
															...U.carousel,
															...se,
															children:
																Array.isArray(A) && A.length
																	? A.map((C, o) => (0, s.Y)(y.o, { controller: P, result: x[o], children: C }))
																	: x.map((C) =>
																			(0, s.Y)(y.o, {
																				controller: P,
																				result: C,
																				children:
																					z && P
																						? (0, O.Y)(z, { controller: P, result: C, treePath: U.result.treePath })
																						: (0, s.Y)(p.Q, { ...U.result, controller: P, result: C }, C.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, s.Y)(R.l, {
													controller: P,
													children:
														Array.isArray(A) && A.length
															? A.map((C, o) => (0, s.Y)(y.o, { controller: P, result: x[o], children: (0, s.Y)(s.FK, {}) }))
															: x.map((C) => (0, s.Y)(y.o, { controller: P, result: C, children: (0, s.Y)(s.FK, {}) })),
											  }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(b, a, e) {
				e.d(a, { l: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					l = e.n(t),
					c = e('./components/src/utilities/mergeStyles.ts');
				const _ = () => (0, r.AH)({}),
					d = (0, i.PA)((p) => {
						const { children: O, className: v, internalClassName: h } = p,
							f = (0, n.v2)(O),
							D = (0, c.Z)(p, _);
						return f.length ? (0, s.Y)('div', { className: l()('ss__recommendation-profile-tracker', v, h), ...D, children: O }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(b, a, e) {
				e.d(a, { o: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/classnames/index.js'),
					t = e.n(i),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, n.AH)({}) },
					p = (0, r.PA)((O) => {
						const v = (0, l.u)(),
							h = (0, c.v6)('resultTracker', v, {}, O),
							f = { impression: !0, click: !0 },
							{ children: D, result: k, track: B, controller: E, className: M, internalClassName: R, disableStyles: j, style: y } = h,
							W = { ...f, ...B },
							{ ref: V, inViewport: I } = (0, _.Q)();
						I && W.impression && E?.track.product.impression(k);
						const g = {};
						return (
							j ? y && (g.css = [y]) : (g.css = [d.ResultTracker(), y]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${E?.type}-result-tracker`, M, R),
								onClick: (w) => {
									W.click && E?.track.product.click(w, k);
								},
								ref: V,
								...g,
								children: D,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(b, a, e) {
				e.d(a, { v: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = (r, i = '0px', t = !1) => {
					const [l, c] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const _ = new IntersectionObserver(
								([d]) => {
									c(d.isIntersecting), t && d.isIntersecting && _.unobserve(r.current);
								},
								{ rootMargin: i }
							);
							return (
								r.current && _.observe(r.current),
								() => {
									_.unobserve(r.current);
								}
							);
						}, []),
						l
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(b, a, e) {
				e.d(a, { v: () => r });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 250,
					r = (t, l = {}) => {
						const { rootMargin: c = '0px', fireOnce: _ = !1, threshold: d = 0, minVisibleTime: p = 0 } = l,
							[O, v] = (0, s.J0)(!1),
							h = (0, s.li)(null),
							f = (0, s.li)(null),
							[D, k] = (0, s.J0)(0),
							B = (0, s.hb)((E) => {
								(t.current = E), k((M) => M + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								v(!1);
								let E = null,
									M = null;
								if (!window.IntersectionObserver || !t.current) return;
								const R = () => {
										M && (window.clearInterval(M), (M = null));
									},
									j = () => {
										p > 0
											? ((f.current = Date.now()),
											  h.current && window.clearTimeout(h.current),
											  (h.current = window.setTimeout(() => {
													v(!0), _ && t.current && E && E.unobserve(t.current);
											  }, p)))
											: (v(!0), _ && t.current && E && E.unobserve(t.current));
									},
									y = () => {
										h.current && window.clearTimeout(h.current), (h.current = null), (f.current = null), v(!1);
									};
								return (
									(E = new IntersectionObserver(
										([W]) => {
											W.isIntersecting
												? t.current && i(t.current)
													? (R(), j())
													: (y(),
													  M ||
															(M = window.setInterval(() => {
																if (!t.current) {
																	R();
																	return;
																}
																i(t.current) && (R(), j());
															}, n)))
												: (R(), y());
										},
										{ rootMargin: c, threshold: d }
									)),
									t.current && E.observe(t.current),
									() => {
										v(!1), R(), h.current && window.clearTimeout(h.current), E && t.current && E.unobserve(t.current);
									}
								);
							}, [t, D]),
							{ inViewport: O, updateRef: B }
						);
					};
				function i(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(b, a, e) {
				e.d(a, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					i = 1e3;
				function t(l) {
					const c = (0, s.li)(null),
						{ inViewport: _, updateRef: d } = (0, n.v)(c, { ...l, fireOnce: !0, threshold: r, minVisibleTime: i });
					return { ref: c, inViewport: _, updateRef: d };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(b, a, e) {
				e.r(a), e.d(a, { Recommendation: () => s.A });
				var s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(b, a, e) {
				e.d(a, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(n, r) {
					var i = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						t = {};
					for (var l in i) t[i[l]] = l;
					var c = {};
					(n.prototype.toName = function (_) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var d,
							p,
							O = t[this.toHex()];
						if (O) return O;
						if (_?.closest) {
							var v = this.toRgb(),
								h = 1 / 0,
								f = 'black';
							if (!c.length) for (var D in i) c[D] = new n(i[D]).toRgb();
							for (var k in i) {
								var B = ((d = v), (p = c[k]), Math.pow(d.r - p.r, 2) + Math.pow(d.g - p.g, 2) + Math.pow(d.b - p.b, 2));
								B < h && ((h = B), (f = k));
							}
							return f;
						}
					}),
						r.string.push([
							function (_) {
								var d = _.toLowerCase(),
									p = d === 'transparent' ? '#0000' : i[d];
								return p ? new n(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
