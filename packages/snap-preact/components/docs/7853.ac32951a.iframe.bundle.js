'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7853],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Ee, k, e) {
				e.d(k, { FN: () => le, K: () => Pe, og: () => W });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					S = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					I = e('../../node_modules/classnames/index.js'),
					g = e.n(I),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(ne),
					X = e('../../node_modules/swiper/swiper-react.mjs'),
					Y = e('./components/src/utilities/cloneWithProps.tsx'),
					V = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					re = e('./components/src/utilities/mergeStyles.ts'),
					b = e('../../node_modules/swiper/modules/index.mjs'),
					K = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					_e = e('./components/src/providers/cache.tsx'),
					ge = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ie = e('./components/src/providers/treePath.tsx'),
					he = e('./components/src/hooks/useDisplaySettings.tsx');
				const ae = ({ vertical: w, theme: N }) =>
						(0, j.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: w ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: N?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: N?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: N?.variables?.colors?.primary || '#000' },
							},
						}),
					Pe = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					W = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					le = (0, L.PA)((w) => {
						const N = (0, ge.u)(),
							ee = (0, ie.LU)(),
							fe = {
								breakpoints: w.vertical ? JSON.parse(JSON.stringify(W)) : JSON.parse(JSON.stringify(Pe)),
								pagination: !1,
								slidesPerGroup: !w.breakpoints || !Object.keys(w.breakpoints).length ? 5 : void 0,
								slidesPerView: !w.breakpoints || !Object.keys(w.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ee,
							};
						let u = (0, q.v6)('carousel', N, fe, w),
							D;
						if (
							!(w.theme?.name || N.name) &&
							u.breakpoints &&
							(Object.keys(u.breakpoints).forEach((o) => {
								const i = u.breakpoints[o];
								i.slidesPerView && (i.slidesPerView = Number(i.slidesPerView) || 1),
									i.slidesPerGroup && (i.slidesPerGroup = Number(i.slidesPerGroup) || 1);
							}),
							(D = (0, he.X)(u.breakpoints)),
							D && Object.keys(D).length)
						) {
							const o = M()(u?.theme || {}, D?.theme || {}, { arrayMerge: (i, xe) => xe });
							u.autoAdjustSlides &&
								u.children.length < D.slidesPerView &&
								((D.slidesPerView = u.children.length), (D.slidesPerGroup = u.children.length)),
								(u = { ...u, ...D, theme: o });
						}
						const {
							children: Te,
							loop: Oe,
							nextButton: d,
							prevButton: _,
							hideButtons: E,
							vertical: c,
							onInit: R,
							onBeforeInit: f,
							onAfterInit: r,
							onNextButtonClick: l,
							onPrevButtonClick: p,
							onClick: n,
							disableStyles: P,
							style: a,
							styleScript: U,
							themeStyleScript: A,
							modules: T,
							className: v,
							internalClassName: G,
							treePath: z,
							...C
						} = u;
						let B = u.pagination,
							y = u.navigation,
							F = u.scrollbar;
						const be = { icon: { internalClassName: 'ss__carousel__icon', ...(0, V.s)({ disableStyles: P }), theme: u.theme, treePath: z } },
							se = Array.isArray(T) ? [b.Vx, b.dK, b.Ze, b.Jq].concat(T) : [b.Vx, b.dK, b.Ze, b.Jq],
							Ce = se.filter((o, i) => se.indexOf(o) === i),
							te = (0, S.li)(null),
							ce = (0, S.li)(null),
							J = (0, S.li)(null),
							Be = (0, re.Z)(u, ae);
						(0, S.vJ)(() => {
							if (J.current) {
								const i = J.current.querySelector('.swiper');
								i?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									i?.classList.contains('swiper-vertical') && i.classList.add('swiper-container-vertical'),
									i?.classList.contains('swiper-horizontal') && i.classList.add('swiper-container-horizontal');
							}
							ve();
						}, [w]),
							B && (typeof B == 'object' ? (B = { clickable: !0, ...B }) : (B = { clickable: !0 })),
							y && typeof y == 'object'
								? (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...y })
								: (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							F && (typeof F == 'object' ? (F = { enabled: !0, ...F }) : (F = { enabled: !0 }));
						const ve = () => {
							if (J.current) {
								const i = J.current?.querySelectorAll('.swiper-slide-visible');
								i.forEach((xe, Ie) => {
									xe.classList.remove('swiper-last-visible-slide'), Ie == i.length - 1 && xe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete C.breakpoints,
							Te?.length
								? (0, s.Y)(_e._, {
										children: (0, s.FD)('div', {
											ref: J,
											...Be,
											className: g()('ss__carousel', c ? 'ss__carousel-vertical' : '', v, G),
											children: [
												(0, s.Y)('div', {
													className: g()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': E }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: te,
														onClick: p && ((o) => p(o)),
														children: _ || (0, s.Y)(K.I, { icon: c ? 'angle-up' : 'angle-left', ...be.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(X.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														(o.params.navigation.prevEl = te.current ? te.current : void 0),
															(o.params.navigation.nextEl = ce.current ? ce.current : void 0),
															f && f(o);
													},
													onInit: (o) => {
														R && R(o);
													},
													onAfterInit: (o) => {
														(o.navigation.onPrevClick = (i) => {
															i.preventDefault(), !(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
														}),
															(o.navigation.onNextClick = (i) => {
																i.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															}),
															r && r(o);
													},
													onClick: (o, i) => {
														n && n(o, i);
													},
													direction: c ? 'vertical' : 'horizontal',
													loop: Oe,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Ce,
													...C,
													...D,
													controller: void 0,
													navigation: y,
													pagination: B,
													scrollbar: F,
													onResize: (o) => {
														C.onResize && C.onResize(), o.updateSlidesClasses(), ve();
													},
													onTransitionEnd: () => {
														C.onTransitionEnd && C.onTransitionEnd(), ve();
													},
													children: Te.map((o) => (o != null ? (0, s.Y)(X.qr, { children: (0, Y.Y)(o, { treePath: z }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: g()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': E }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: ce,
														onClick: l && ((o) => l(o)),
														children: d || (0, s.Y)(K.I, { icon: c ? 'angle-down' : 'angle-right', ...be.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Ee, k, e) {
				e.d(k, { g: () => Oe });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					j = e('../../node_modules/classnames/index.js'),
					I = e.n(j),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					ne = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(ne),
					X = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					Y = e('./components/src/components/Molecules/Result/Result.tsx'),
					V = e('./components/src/utilities/mergeProps.ts'),
					q = e('./components/src/utilities/defined.ts'),
					re = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_e = e('./components/src/providers/treePath.tsx'),
					ge = e('./components/src/providers/cache.tsx'),
					ie = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					ae = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Pe = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					le = e('./components/src/hooks/useLang.tsx');
				const w = (0, L.PA)((d) => {
					const _ = (0, K.u)(),
						E = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						c = (0, V.v6)('bundleSelector', _, E, d),
						{
							children: R,
							checked: f,
							icon: r,
							seedText: l,
							seed: p,
							hideCheckboxes: n,
							onCheck: P,
							title: a,
							className: U,
							internalClassName: A,
							treePath: T,
							classNamePrefix: v,
						} = c,
						G = T?.lastIndexOf(' '),
						z = G !== -1 ? T?.slice(0, G) : T,
						C = {
							icon: { name: 'bundle-selector', internalClassName: `${v}__wrapper__selector__icon`, size: 15, theme: c?.theme, treePath: z },
							checkbox: {
								internalClassName: `${v}__wrapper__selector__result-wrapper__checkbox`,
								checked: f,
								size: '18px',
								onClick: P,
								lang: { checkbox: { attributes: { 'aria-label': f ? `remove product from bundle ${a}` : `add product to bundle ${a}` } } },
								theme: c?.theme,
								treePath: z,
							},
						},
						B = M()({}, c.lang || {}),
						y = (0, le.u)(B, {});
					return (0, s.FD)('div', {
						className: I()(
							`${v}__wrapper__selector`,
							f ? `${v}__wrapper__selector--selected` : '',
							l || p ? `${v}__wrapper__selector--seed` : '',
							U,
							A
						),
						children: [
							(0, s.FD)('div', {
								className: `${v}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, s.Y)(Pe.S, { ...C.checkbox }),
									l && (0, s.Y)('div', { className: `${v}__wrapper__selector__result-wrapper__seed-badge`, ...y.seedText?.all }),
									R,
								],
							}),
							r ? (0, s.Y)(W.I, { ...C.icon, ...(typeof r == 'string' ? { icon: r } : r) }) : void 0,
						],
					});
				});
				var N = e('./components/src/components/Atoms/Button/Button.tsx'),
					ee = e('./components/src/components/Atoms/Price/Price.tsx');
				const fe = (0, L.PA)((d) => {
					const _ = { ...d };
					_.onAddToCart = (v) => {
						a(!0), d.onAddToCart(v), setTimeout(() => a(!1), d.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: E,
							cartStore: c,
							onAddToCart: R,
							ctaIcon: f,
							ctaButtonText: r,
							ctaButtonSuccessText: l,
							treePath: p,
							classNamePrefix: n,
						} = _,
						[P, a] = (0, g.J0)(!1);
					_.addedToCart = P;
					const U = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: _?.theme, treePath: p },
							subtotalStrike: { name: 'bundle-msrp', theme: _?.theme, treePath: p },
							subtotalPrice: { name: 'bundle-price', theme: _?.theme, treePath: p },
							button: { theme: _?.theme, treePath: p },
						},
						A = M()({}, _.lang || {}),
						T = (0, le.u)(A, { cartStore: c });
					return (0, s.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: E
							? (0, b.Y)(E, _)
							: (0, s.FD)(s.FK, {
									children: [
										(0, s.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												f
													? (0, s.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, s.Y)(W.I, { ...U.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
													  })
													: null,
												(0, s.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...T.ctaSubtotalTitle?.all }),
												(0, s.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														c.msrp && c.msrp !== c.price
															? (0, s.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, s.Y)(ee.g, { ...U.subtotalStrike, lineThrough: !0, value: c.msrp })],
															  })
															: null,
														(0, s.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, s.Y)(ee.g, { ...U.subtotalPrice, value: c.price }),
														}),
													],
												}),
											],
										}),
										(0, s.Y)(N.$, {
											...U.button,
											internalClassName: I()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: P }),
											'aria-live': P,
											onClick: (v) => R(v),
											...(P ? T.ctaButtonSuccessText?.all : T.ctaButtonText?.all),
											children: P ? l : r,
										}),
									],
							  }),
					});
				});
				var u = e('./components/src/hooks/useIntersection.tsx'),
					D = e('./components/src/utilities/componentNameToClassName.ts');
				const Te = ({
						vertical: d,
						separatorIcon: _,
						carousel: E,
						ctaInline: c,
						hasSeed: R,
						hideSeed: f,
						carouselEnabled: r,
						limit: l,
						alias: p,
					}) => {
						let n = 'ss__recommendation-bundle';
						p && (n = `ss__${(0, D.b)(p)}`);
						const P = E?.slidesPerView;
						return (0, S.AH)({
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${d ? '100%' : 'auto'}`, margin: `${_ ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: d ? '100%' : `calc(100% / ${P + (c ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: d ? '100%' : `${c ? `calc(100% / ${(r ? P : l || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: d ? '100%' : `calc(calc(100% / ${P + (c ? 1 : 0)}) * ${P - (R && !f ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: d ? '100%' : `calc(100% / ${E?.slidesPerView + (c ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: d ? '100%' : `calc(calc(100% / ${E?.slidesPerView + (c ? 1 : 0)}) * ${E?.slidesPerView})`,
									padding: '0',
								},
							},
							'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': { [`.${n}__wrapper__selector__icon`]: { display: 'none' } },
							'.swiper-slide-visible': { [`.${n}__wrapper__selector__icon`]: { display: 'block' } },
							[`.${n}__wrapper--vertical`]: { flexDirection: 'column' },
							[`.${n}__wrapper__selector`]: {
								alignItems: 'baseline',
								position: 'relative',
								[`&.${n}__wrapper__selector--last`]: { [`.${n}__wrapper__selector__icon`]: { display: 'none' } },
								[`.${n}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
								[`.${n}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
								[`.${n}__wrapper__selector__result-wrapper`]: {
									alignItems: 'center',
									position: 'relative',
									margin: `0px ${5 + (Number(E?.spaceBetween) || 0)}px`,
								},
								[`.${n}__wrapper__selector__result-wrapper__checkbox`]: {
									position: 'absolute',
									top: '0',
									right: '0',
									zIndex: '101',
									cursor: 'pointer',
								},
							},
						});
					},
					Oe = (0, L.PA)((d) => {
						const _ = (0, K.u)(),
							E = (0, _e.LU)(),
							R = {
								breakpoints: JSON.parse(
									JSON.stringify({
										0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10, ctaInline: !1 },
										768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
										1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
									})
								),
								hideCheckboxes: !1,
								separatorIcon: 'plus-thin',
								seedText: 'This Product',
								separatorIconSeedOnly: !0,
								ctaIcon: 'bag',
								ctaButtonText: 'Add All To Cart',
								ctaButtonSuccessText: 'Bundle Added!',
								ctaButtonSuccessTimeout: 2e3,
								ctaInline: !0,
								onAddToCart: (t, m) => a?.addToCart && a.addToCart(m),
								title: d.controller?.store?.profile?.display?.templateParameters?.title,
								description: d.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: E,
							},
							f = { name: d.controller?.store?.profile?.tag?.toLowerCase(), ...d };
						let r = (0, V.v6)(f.alias || 'recommendationBundle', _, R, f),
							l = 'ss__recommendation-bundle';
						r.alias && (l = `ss__${(0, D.b)(r.alias)}`);
						let p;
						if (!(d.theme?.name || _.name) && ((p = (0, ie.X)(r.breakpoints)), p && Object.keys(p).length)) {
							const t = M()(r?.theme || {}, p?.theme || {}, { arrayMerge: (m, h) => h });
							r = { ...r, ...p, theme: t };
						}
						const {
								title: n,
								description: P,
								controller: a,
								breakpoints: U,
								results: A,
								carousel: T,
								preselectedCount: v,
								separatorIcon: G,
								hideCheckboxes: z,
								limit: C,
								seedText: B,
								vertical: y,
								onAddToCart: F,
								separatorIconSeedOnly: be,
								resultComponent: se,
								ctaSlot: Ce,
								hideSeed: te,
								ctaButtonText: ce,
								ctaButtonSuccessText: J,
								ctaButtonSuccessTimeout: Be,
								disableStyles: ve,
								ctaIcon: o,
								ctaInline: i,
								hideSeedText: xe,
								lazyRender: Ie,
								className: We,
								internalClassName: Ue,
								style: ts,
								styleScript: os,
								themeStyleScript: ns,
								treePath: oe,
								...Ge
							} = r,
							Me = { enabled: !0, offset: '10%', ...Ie },
							we = { enabled: !0, loop: !1, spaceBetween: 10, ...T },
							{ seedInCarousel: de, prevButton: ze, nextButton: Fe, hideButtons: Je, loop: ke, spaceBetween: He, pagination: Ze } = we,
							Se = we.enabled;
						if (!a || a.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let x = A || a.store?.results;
						C && (x = x.slice(0, te && x.filter((t) => t.bundleSeed == !0).length ? C + 1 : C));
						const O = a.store.cart;
						if (!O) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(A && A.length) && !a.store?.results?.length) return a.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const $ = A ? A.filter((t) => t.bundleSeed == !0).pop() : a.store?.results?.filter((t) => t.bundleSeed == !0).pop(),
							Ne = {
								carousel: {
									loop: ke,
									internalClassName: 'ss__recommendation__carousel',
									...(0, q.s)({ disableStyles: ve }),
									theme: r?.theme,
									treePath: oe,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, q.s)({ disableStyles: ve }), theme: r?.theme, treePath: oe },
							},
							Re = !!x.filter((t) => t.bundleSeed == !0).length;
						let me = r.carousel?.slidesPerView || r.slidesPerView;
						me ? x.length < Number(me) && (me = x.length) : (me = 2);
						const Qe = (0, re.Z)({ ...r, carousel: { ...we, slidesPerView: me }, hasSeed: Re, carouselEnabled: Se }, Te),
							je = typeof v == 'number' ? v : Se ? me : x.length;
						(0, g.vJ)(() => {
							O.reset(),
								je &&
									x?.forEach((t, m) => {
										m < Number(je) && O.addItems([t]);
									});
						}, [x.length]);
						const pe = O.items,
							Ae = { ...U };
						if (Se) {
							const t = (m) => {
								const h = m?.slidesPerView || m.slidesPerView || 2,
									Z = m?.slidesPerGroup || m.slidesPerGroup || 2;
								let Q = h,
									ue = Z;
								const ye = !Re || de ? x.length : x.length - 1;
								return (
									ye && (ye >= h ? ((Q = h - (!de && Re ? 1 : 0)), de || (ue = Z - 1 || 1)) : ((Q = ye), (ue = ye))),
									{ slidesPerView: Q, slidesPerGroup: ue }
								);
							};
							if (!(d.theme?.name || _.name))
								Object.keys(r.breakpoints).forEach((m) => {
									const h = r.breakpoints[m],
										{ slidesPerView: Z, slidesPerGroup: Q } = t(h);
									Ae[m] = { ...Ae[m], slidesPerView: Z, slidesPerGroup: Q };
								});
							else {
								const { slidesPerView: m, slidesPerGroup: h } = t({ ...we, slidesPerView: me });
								p = { ...we, slidesPerView: m, slidesPerGroup: h };
							}
						}
						const De = (t) => {
								t && (pe.findIndex((h) => h.id == t.id) > -1 ? (O.removeItems([t]), O.items.length == 0 && $ && O.items.push($)) : O.addItems([t]));
							},
							Le = (t) => {
								a.addToCart(pe), F && F(t, pe);
							},
							Xe = () => {
								if ($e.current) {
									const t = $e.current?.base,
										Z = Ye.current?.base?.querySelector(`.swiper-slide-visible .${l}__wrapper__selector`)?.offsetWidth;
									t && (t.style.width = `${Z}px`);
								}
							},
							$e = (0, g.li)(),
							Ye = (0, g.li)(),
							[qe, es] = (0, g.J0)(!1),
							Ve = (0, g.li)(null);
						(!Me?.enabled || (0, u.v)(Ve, `${Me.offset} 0px ${Me.offset} 0px`, !0)) && es(!0);
						const ss = {
								seedText: { value: B },
								ctaButtonText: { value: ce },
								ctaButtonSuccessText: { value: J },
								ctaSubtotalTitle: { value: `Subtotal for ${O.count} items` },
							},
							H = M()(ss, r.lang || {}),
							Ke = (0, g.Kr)(
								() =>
									x.map((t, m) => {
										const h = !!t.bundleSeed,
											Z = pe.findIndex((ue) => ue.id == t.id) > -1;
										let Q = {
											onCheck: (ue) => {
												ue.stopPropagation(), De(t);
											},
											checked: Z,
											hideCheckboxes: z,
											theme: r.theme,
											icon: be ? !1 : G,
											className: m + 1 == x.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: l,
											treePath: oe,
										};
										return (
											h && (Q = { ...Q, seedText: B, seed: !0, icon: G, lang: { seedText: H.seedText } }),
											!h || ((de || T?.enabled == !1) && h && !te)
												? (0, s.Y)(
														ae.o,
														{
															controller: a,
															result: t,
															track: { impression: !h },
															children: (0, s.Y)(w, {
																...Q,
																children: se
																	? (0, b.Y)(se, { controller: a, treePath: oe, result: t, seed: h, selected: Z, onProductSelect: De })
																	: (0, s.Y)(Y.Q, { ...Ne.result, controller: a, result: t }),
															}),
														},
														t.id
												  )
												: null
										);
									}),
								[x, pe, z, be, G, de, te, se, r.theme, B]
							);
						return (
							xe && delete H.seedText.value,
							x?.length
								? (0, s.Y)(ge._, {
										children: (0, s.Y)('div', {
											...Qe,
											ref: Ve,
											className: I()(l, { [`${l}--stacked`]: !i }, We, Ue),
											children: qe
												? (0, s.FD)(he.l, {
														controller: a,
														children: [
															n && (0, s.Y)('h3', { className: `${l}__title`, children: (0, s.Y)('span', { children: n }) }),
															P &&
																(0, s.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, s.Y)('span', { children: P }) }),
															(0, s.FD)('div', {
																className: I()(`${l}__wrapper`, { [`${l}__wrapper--seed-in-carousel`]: de, [`${l}__wrapper--vertical`]: y }),
																children: [
																	Se
																		? (0, s.FD)(s.FK, {
																				children: [
																					!de &&
																						!te &&
																						$ &&
																						(0, s.Y)('div', {
																							className: `${l}__wrapper__seed-container`,
																							children: (0, s.Y)(ae.o, {
																								controller: a,
																								result: $,
																								track: { impression: !1 },
																								children: (0, s.Y)(w, {
																									seedText: B,
																									seed: !0,
																									title: $.display.mappings.core?.name,
																									onCheck: (t) => {
																										t.stopPropagation(), De($);
																									},
																									checked: pe.findIndex((t) => t.id == $.id) > -1,
																									icon: G,
																									hideCheckboxes: z,
																									theme: r.theme,
																									ref: $e,
																									treePath: oe,
																									classNamePrefix: l,
																									lang: { seedText: H.seedText },
																									children: (() => {
																										if (se && a) {
																											const t = se;
																											return (0, s.Y)(t, {
																												controller: a,
																												seed: !0,
																												selected: pe.findIndex((m) => m.id == $.id) > -1,
																												onProductSelect: De,
																												result: $,
																												treePath: oe,
																											});
																										} else return (0, s.Y)(Y.Q, { ...Ne.result, controller: a, result: $ });
																									})(),
																								}),
																							}),
																						}),
																					(0, s.Y)('div', {
																						className: `${l}__wrapper__carousel`,
																						children: (0, s.Y)(X.FN, {
																							prevButton: ze,
																							nextButton: Fe,
																							hideButtons: Je,
																							loop: ke,
																							spaceBetween: He,
																							pagination: Ze,
																							breakpoints: Ae,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: y,
																							onResize: () => Xe(),
																							...Ne.carousel,
																							...Ge,
																							...p,
																							ref: Ye,
																							children: Ke,
																						}),
																					}),
																				],
																		  })
																		: (0, s.Y)(s.FK, { children: Ke }),
																	i &&
																		(0, s.Y)(fe, {
																			ctaSlot: Ce,
																			cartStore: O,
																			onAddToCart: (t) => Le(t),
																			ctaButtonText: ce,
																			ctaButtonSuccessText: J,
																			ctaButtonSuccessTimeout: Be,
																			ctaIcon: o,
																			treePath: oe,
																			classNamePrefix: l,
																			lang: {
																				ctaButtonSuccessText: H.ctaButtonSuccessText,
																				ctaButtonText: H.ctaButtonText,
																				ctaSubtotalTitle: H.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!i &&
																(0, s.Y)(fe, {
																	ctaSlot: Ce,
																	cartStore: O,
																	onAddToCart: (t) => Le(t),
																	ctaButtonText: ce,
																	ctaButtonSuccessText: J,
																	ctaButtonSuccessTimeout: Be,
																	ctaIcon: o,
																	treePath: oe,
																	classNamePrefix: l,
																	lang: {
																		ctaButtonSuccessText: H.ctaButtonSuccessText,
																		ctaButtonText: H.ctaButtonText,
																		ctaSubtotalTitle: H.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, s.Y)(he.l, {
														controller: a,
														children: x.map((t) => (0, s.Y)(ae.o, { controller: a, result: t, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Ee, k, e) {
				e.d(k, { l: () => X });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					S = e('../../node_modules/preact/dist/preact.module.js'),
					j = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					I = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/classnames/index.js'),
					L = e.n(g),
					ne = e('./components/src/utilities/mergeStyles.ts');
				const M = () => (0, j.AH)({}),
					X = (0, I.PA)((Y) => {
						const { children: V, className: q, internalClassName: re } = Y,
							b = (0, S.v2)(V),
							K = (0, ne.Z)(Y, M);
						return b.length ? (0, s.Y)('div', { className: L()('ss__recommendation-profile-tracker', q, re), ...K, children: V }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(Ee, k, e) {
				e.d(k, { o: () => Y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					S = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('../../node_modules/classnames/index.js'),
					g = e.n(I),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ne = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/createImpressionObserver.ts');
				const X = { ResultTracker: () => (0, S.AH)({}) },
					Y = (0, j.PA)((V) => {
						const q = (0, L.u)(),
							re = (0, ne.v6)('resultTracker', q, {}, V),
							b = { impression: !0, click: !0 },
							{ children: K, result: _e, track: ge, controller: ie, className: he, internalClassName: ae, disableStyles: Pe, style: W } = re,
							le = { ...b, ...ge },
							{ ref: w, inViewport: N } = (0, M.Q)();
						N && le.impression && ie?.track.product.impression(_e);
						const ee = {};
						return (
							Pe ? W && (ee.css = [W]) : (ee.css = [X.ResultTracker(), W]),
							(0, s.Y)('div', {
								className: g()('ss__result-tracker', `ss__${ie?.type}-result-tracker`, he, ae),
								onClick: (fe) => {
									le.click && ie?.track.product.click(fe, _e);
								},
								ref: w,
								...ee,
								children: K,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(Ee, k, e) {
				e.d(k, { b: () => s });
				const s = (S) => S.replace(/([A-Z])/g, (j) => '-' + j.toLowerCase());
			},
		},
	]);
})();
