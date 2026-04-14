'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7853],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Be, N, e) {
				e.d(N, { FN: () => be, K: () => X, og: () => ie });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					k = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					E = e.n(M),
					$ = e('../../node_modules/mobx-react-lite/es/index.js'),
					te = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(te),
					H = e('../../node_modules/swiper/swiper-react.mjs'),
					j = e('./components/src/utilities/cloneWithProps.tsx'),
					L = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					oe = e('./components/src/utilities/mergeStyles.ts'),
					v = e('../../node_modules/swiper/modules/index.mjs'),
					Y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					pe = e('./components/src/providers/cache.tsx'),
					ge = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ne = e('./components/src/providers/snap.tsx'),
					ue = e('./components/src/providers/treePath.tsx'),
					re = e('./components/src/hooks/useDisplaySettings.tsx'),
					Ee = e('./components/src/hooks/useComponent.tsx');
				const Q = ({ vertical: f, theme: S }) =>
						(0, k.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: f ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: S?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: S?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: S?.variables?.colors?.primary || '#000' },
							},
						}),
					X = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					ie = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					be = (0, $.PA)((f) => {
						const S = (0, ge.u)(),
							Me = (0, ne.uk)(),
							Se = (0, ue.LU)(),
							Ae = {
								breakpoints: f.vertical ? JSON.parse(JSON.stringify(ie)) : JSON.parse(JSON.stringify(X)),
								pagination: !1,
								slidesPerGroup: !f.breakpoints || !Object.keys(f.breakpoints).length ? 5 : void 0,
								slidesPerView: !f.breakpoints || !Object.keys(f.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: Se,
							};
						let d = (0, Z.v6)('carousel', S, Ae, f),
							i;
						if (
							!(f.theme?.name || S.name) &&
							d.breakpoints &&
							(Object.keys(d.breakpoints).forEach((o) => {
								const l = d.breakpoints[o];
								l.slidesPerView && (l.slidesPerView = Number(l.slidesPerView) || 1),
									l.slidesPerGroup && (l.slidesPerGroup = Number(l.slidesPerGroup) || 1);
							}),
							(i = (0, re.X)(d.breakpoints)),
							i && Object.keys(i).length)
						) {
							const o = A()(d?.theme || {}, i?.theme || {}, { arrayMerge: (l, xe) => xe });
							d.autoAdjustSlides &&
								d.children.length < i.slidesPerView &&
								((i.slidesPerView = d.children.length), (i.slidesPerGroup = d.children.length)),
								(d = { ...d, ...i, theme: o });
						}
						const {
							children: m,
							loop: w,
							nextButton: p,
							prevButton: K,
							hideButtons: x,
							vertical: r,
							onInit: c,
							onBeforeInit: u,
							onAfterInit: n,
							onNextButtonClick: h,
							onPrevButtonClick: a,
							onClick: D,
							disableStyles: y,
							customComponent: T,
							style: b,
							styleScript: q,
							themeStyleScript: ae,
							modules: V,
							className: ee,
							internalClassName: _e,
							treePath: we,
							...W
						} = d;
						if (T) {
							const o = (0, Ee.x)(Me?.templates?.library.import.component.carousel || {}, T);
							if (o) return (0, s.Y)(o, { ...d });
						}
						let B = d.pagination,
							U = d.navigation,
							O = d.scrollbar;
						const he = { icon: { internalClassName: 'ss__carousel__icon', ...(0, L.s)({ disableStyles: y }), theme: d.theme, treePath: we } },
							Pe = Array.isArray(V) ? [v.Vx, v.dK, v.Ze, v.Jq].concat(V) : [v.Vx, v.dK, v.Ze, v.Jq],
							De = Pe.filter((o, l) => Pe.indexOf(o) === l),
							fe = (0, C.li)(null),
							ve = (0, C.li)(null),
							G = (0, C.li)(null),
							Re = (0, oe.Z)(d, Q);
						(0, C.vJ)(() => {
							if (G.current) {
								const l = G.current.querySelector('.swiper');
								l?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									l?.classList.contains('swiper-vertical') && l.classList.add('swiper-container-vertical'),
									l?.classList.contains('swiper-horizontal') && l.classList.add('swiper-container-horizontal');
							}
							Te();
						}, [f]),
							B && (typeof B == 'object' ? (B = { clickable: !0, ...B }) : (B = { clickable: !0 })),
							U && typeof U == 'object'
								? (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...U })
								: (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							O && (typeof O == 'object' ? (O = { enabled: !0, ...O }) : (O = { enabled: !0 }));
						const Te = () => {
							if (G.current) {
								const l = G.current?.querySelectorAll('.swiper-slide-visible');
								l.forEach((xe, Ye) => {
									xe.classList.remove('swiper-last-visible-slide'), Ye == l.length - 1 && xe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete W.breakpoints,
							m?.length
								? (0, s.Y)(pe._, {
										children: (0, s.FD)('div', {
											ref: G,
											...Re,
											className: E()('ss__carousel', r ? 'ss__carousel-vertical' : '', ee, _e),
											children: [
												(0, s.Y)('div', {
													className: E()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': x }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: fe,
														onClick: a && ((o) => a(o)),
														children: K || (0, s.Y)(Y.I, { icon: r ? 'angle-up' : 'angle-left', ...he.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(H.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														(o.params.navigation.prevEl = fe.current ? fe.current : void 0),
															(o.params.navigation.nextEl = ve.current ? ve.current : void 0),
															u && u(o);
													},
													onInit: (o) => {
														c && c(o);
													},
													onAfterInit: (o) => {
														(o.navigation.onPrevClick = (l) => {
															l.preventDefault(), !(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
														}),
															(o.navigation.onNextClick = (l) => {
																l.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															}),
															n && n(o);
													},
													onClick: (o, l) => {
														D && D(o, l);
													},
													direction: r ? 'vertical' : 'horizontal',
													loop: w,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: De,
													...W,
													...i,
													controller: void 0,
													navigation: U,
													pagination: B,
													scrollbar: O,
													onResize: (o) => {
														W.onResize && W.onResize(), o.updateSlidesClasses(), Te();
													},
													onTransitionEnd: () => {
														W.onTransitionEnd && W.onTransitionEnd(), Te();
													},
													children: m.map((o) => (o != null ? (0, s.Y)(H.qr, { children: (0, j.Y)(o, { treePath: we }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: E()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': x }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: ve,
														onClick: h && ((o) => h(o)),
														children: p || (0, s.Y)(Y.I, { icon: r ? 'angle-down' : 'angle-right', ...he.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Be, N, e) {
				e.d(N, { g: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					k = e('../../node_modules/classnames/index.js'),
					M = e.n(k),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					$ = e('../../node_modules/mobx-react-lite/es/index.js'),
					te = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(te),
					H = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					j = e('./components/src/components/Molecules/Result/Result.tsx'),
					L = e('./components/src/utilities/mergeProps.ts'),
					Z = e('./components/src/utilities/defined.ts'),
					oe = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					pe = e('./components/src/providers/treePath.tsx'),
					ge = e('./components/src/providers/cache.tsx'),
					ne = e('./components/src/hooks/useDisplaySettings.tsx'),
					ue = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					re = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Ee = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					Q = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					X = e('./components/src/hooks/useLang.tsx');
				const ie = (0, $.PA)((i) => {
					const m = (0, Y.u)(),
						w = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						p = (0, L.v6)('bundleSelector', m, w, i),
						{
							children: K,
							checked: x,
							icon: r,
							seedText: c,
							seed: u,
							hideCheckboxes: n,
							onCheck: h,
							title: a,
							className: D,
							internalClassName: y,
							treePath: T,
							classNamePrefix: b,
						} = p,
						q = T?.lastIndexOf(' '),
						ae = q !== -1 ? T?.slice(0, q) : T,
						V = {
							icon: { name: 'bundle-selector', internalClassName: `${b}__wrapper__selector__icon`, size: 15, theme: p?.theme, treePath: ae },
							checkbox: {
								internalClassName: `${b}__wrapper__selector__result-wrapper__checkbox`,
								checked: x,
								size: '18px',
								onClick: h,
								lang: { checkbox: { attributes: { 'aria-label': x ? `remove product from bundle ${a}` : `add product to bundle ${a}` } } },
								theme: p?.theme,
								treePath: ae,
							},
						},
						ee = A()({}, p.lang || {}),
						_e = (0, X.u)(ee, {});
					return (0, s.FD)('div', {
						className: M()(
							`${b}__wrapper__selector`,
							x ? `${b}__wrapper__selector--selected` : '',
							c || u ? `${b}__wrapper__selector--seed` : '',
							D,
							y
						),
						children: [
							(0, s.FD)('div', {
								className: `${b}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, s.Y)(Ee.S, { ...V.checkbox }),
									c && (0, s.Y)('div', { className: `${b}__wrapper__selector__result-wrapper__seed-badge`, ..._e.seedText?.all }),
									K,
								],
							}),
							r ? (0, s.Y)(Q.I, { ...V.icon, ...(typeof r == 'string' ? { icon: r } : r) }) : void 0,
						],
					});
				});
				var be = e('./components/src/components/Atoms/Button/Button.tsx'),
					f = e('./components/src/components/Atoms/Price/Price.tsx');
				const S = (0, $.PA)((i) => {
					const m = { ...i };
					m.onAddToCart = (b) => {
						a(!0), i.onAddToCart(b), setTimeout(() => a(!1), i.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: w,
							cartStore: p,
							onAddToCart: K,
							ctaIcon: x,
							ctaButtonText: r,
							ctaButtonSuccessText: c,
							treePath: u,
							classNamePrefix: n,
						} = m,
						[h, a] = (0, E.J0)(!1);
					m.addedToCart = h;
					const D = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: m?.theme, treePath: u },
							subtotalStrike: { name: 'bundle-msrp', theme: m?.theme, treePath: u },
							subtotalPrice: { name: 'bundle-price', theme: m?.theme, treePath: u },
							button: { theme: m?.theme, treePath: u },
						},
						y = A()({}, m.lang || {}),
						T = (0, X.u)(y, { cartStore: p });
					return (0, s.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: w
							? (0, v.Y)(w, m)
							: (0, s.FD)(s.FK, {
									children: [
										(0, s.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												x
													? (0, s.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, s.Y)(Q.I, { ...D.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
													  })
													: null,
												(0, s.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...T.ctaSubtotalTitle?.all }),
												(0, s.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														p.msrp && p.msrp !== p.price
															? (0, s.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, s.Y)(f.g, { ...D.subtotalStrike, lineThrough: !0, value: p.msrp })],
															  })
															: null,
														(0, s.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, s.Y)(f.g, { ...D.subtotalPrice, value: p.price }),
														}),
													],
												}),
											],
										}),
										(0, s.Y)(be.$, {
											...D.button,
											internalClassName: M()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: h }),
											'aria-live': h,
											onClick: (b) => K(b),
											...(h ? T.ctaButtonSuccessText?.all : T.ctaButtonText?.all),
											children: h ? c : r,
										}),
									],
							  }),
					});
				});
				var Me = e('./components/src/hooks/useIntersection.tsx'),
					Se = e('./components/src/utilities/componentNameToClassName.ts');
				const Ae = ({
						vertical: i,
						separatorIcon: m,
						carousel: w,
						ctaInline: p,
						hasSeed: K,
						hideSeed: x,
						carouselEnabled: r,
						limit: c,
						alias: u,
					}) => {
						let n = 'ss__recommendation-bundle';
						u && (n = `ss__${(0, Se.b)(u)}`);
						const h = w?.slidesPerView;
						return (0, C.AH)({
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${i ? '100%' : 'auto'}`, margin: `${m ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: i ? '100%' : `calc(100% / ${h + (p ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: i ? '100%' : `${p ? `calc(100% / ${(r ? h : c || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: i ? '100%' : `calc(calc(100% / ${h + (p ? 1 : 0)}) * ${h - (K && !x ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: i ? '100%' : `calc(100% / ${w?.slidesPerView + (p ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: i ? '100%' : `calc(calc(100% / ${w?.slidesPerView + (p ? 1 : 0)}) * ${w?.slidesPerView})`,
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
									margin: `0px ${5 + (Number(w?.spaceBetween) || 0)}px`,
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
					d = (0, $.PA)((i) => {
						const m = (0, Y.u)(),
							w = (0, pe.LU)(),
							K = {
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
								onAddToCart: (t, _) => a?.addToCart && a.addToCart(_),
								title: i.controller?.store?.profile?.display?.templateParameters?.title,
								description: i.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: w,
							},
							x = { name: i.controller?.store?.profile?.tag?.toLowerCase(), ...i };
						let r = (0, L.v6)(x.alias || 'recommendationBundle', m, K, x),
							c = 'ss__recommendation-bundle';
						r.alias && (c = `ss__${(0, Se.b)(r.alias)}`);
						let u;
						if (!(i.theme?.name || m.name) && ((u = (0, ne.X)(r.breakpoints)), u && Object.keys(u).length)) {
							const t = A()(r?.theme || {}, u?.theme || {}, { arrayMerge: (_, P) => P });
							r = { ...r, ...u, theme: t };
						}
						const {
								title: n,
								description: h,
								controller: a,
								breakpoints: D,
								results: y,
								carousel: T,
								preselectedCount: b,
								separatorIcon: q,
								hideCheckboxes: ae,
								limit: V,
								seedText: ee,
								vertical: _e,
								onAddToCart: we,
								separatorIconSeedOnly: W,
								resultComponent: B,
								ctaSlot: U,
								hideSeed: O,
								ctaButtonText: he,
								ctaButtonSuccessText: Pe,
								ctaButtonSuccessTimeout: De,
								disableStyles: fe,
								ctaIcon: ve,
								ctaInline: G,
								hideSeedText: Re,
								lazyRender: Te,
								className: o,
								internalClassName: l,
								alias: xe,
								style: Ye,
								styleScript: rs,
								themeStyleScript: is,
								treePath: se,
								...Fe
							} = r,
							Ne = { enabled: !0, offset: '10%', ...Te },
							Ce = { enabled: !0, loop: !1, spaceBetween: 10, ...T },
							{ seedInCarousel: le, prevButton: Je, nextButton: He, hideButtons: Ze, loop: Ke, spaceBetween: Qe, pagination: Xe } = Ce,
							ye = Ce.enabled;
						if (!a || a.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let g = y || a.store?.results;
						V && (g = g.slice(0, O && g.filter((t) => t.bundleSeed == !0).length ? V + 1 : V));
						const I = a.store.cart;
						if (!I) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(y && y.length) && !a.store?.results?.length) return a.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const R = y ? y.filter((t) => t.bundleSeed == !0).pop() : a.store?.results?.filter((t) => t.bundleSeed == !0).pop(),
							qe = xe == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							ke = {
								carousel: {
									loop: Ke,
									internalClassName: 'ss__recommendation__carousel',
									...(0, Z.s)({ disableStyles: fe }),
									theme: r?.theme,
									treePath: se,
								},
								result: { internalClassName: 'ss__recommendation__result', ...qe, ...(0, Z.s)({ disableStyles: fe }), theme: r?.theme, treePath: se },
							},
							$e = !!g.filter((t) => t.bundleSeed == !0).length;
						let ce = r.carousel?.slidesPerView || r.slidesPerView;
						ce ? g.length < Number(ce) && (ce = g.length) : (ce = 2);
						const es = (0, oe.Z)({ ...r, carousel: { ...Ce, slidesPerView: ce }, hasSeed: $e, carouselEnabled: ye }, Ae),
							Ve = typeof b == 'number' ? b : ye ? ce : g.length;
						(0, E.vJ)(() => {
							I.reset(),
								Ve &&
									g?.forEach((t, _) => {
										_ < Number(Ve) && I.addItems([t]);
									});
						}, [g.length]);
						const de = I.items,
							je = { ...D };
						if (ye) {
							const t = (_) => {
								const P = _?.slidesPerView || _.slidesPerView || 2,
									F = _?.slidesPerGroup || _.slidesPerGroup || 2;
								let J = P,
									me = F;
								const Ie = !$e || le ? g.length : g.length - 1;
								return (
									Ie && (Ie >= P ? ((J = P - (!le && $e ? 1 : 0)), le || (me = F - 1 || 1)) : ((J = Ie), (me = Ie))),
									{ slidesPerView: J, slidesPerGroup: me }
								);
							};
							if (!(i.theme?.name || m.name))
								Object.keys(r.breakpoints).forEach((_) => {
									const P = r.breakpoints[_],
										{ slidesPerView: F, slidesPerGroup: J } = t(P);
									je[_] = { ...je[_], slidesPerView: F, slidesPerGroup: J };
								});
							else {
								const { slidesPerView: _, slidesPerGroup: P } = t({ ...Ce, slidesPerView: ce });
								u = { ...Ce, slidesPerView: _, slidesPerGroup: P };
							}
						}
						const Oe = (t) => {
								t && (de.findIndex((P) => P.id == t.id) > -1 ? (I.removeItems([t]), I.items.length == 0 && R && I.items.push(R)) : I.addItems([t]));
							},
							We = (t) => {
								a.addToCart(de), we && we(t, de);
							},
							ss = () => {
								if (Le.current) {
									const t = Le.current?.base,
										F = Ue.current?.base?.querySelector(`.swiper-slide-visible .${c}__wrapper__selector`)?.offsetWidth;
									t && (t.style.width = `${F}px`);
								}
							},
							Le = (0, E.li)(),
							Ue = (0, E.li)(),
							[ts, os] = (0, E.J0)(!1),
							Ge = (0, E.li)(null);
						(!Ne?.enabled || (0, Me.v)(Ge, `${Ne.offset} 0px ${Ne.offset} 0px`, !0)) && os(!0);
						const ns = {
								seedText: { value: ee },
								ctaButtonText: { value: he },
								ctaButtonSuccessText: { value: Pe },
								ctaSubtotalTitle: { value: `Subtotal for ${I.count} items` },
							},
							z = A()(ns, r.lang || {}),
							ze = (0, E.Kr)(
								() =>
									g.map((t, _) => {
										const P = !!t.bundleSeed,
											F = de.findIndex((me) => me.id == t.id) > -1;
										let J = {
											onCheck: (me) => {
												me.stopPropagation(), Oe(t);
											},
											checked: F,
											hideCheckboxes: ae,
											theme: r.theme,
											icon: W ? !1 : q,
											className: _ + 1 == g.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: c,
											treePath: se,
										};
										return (
											P && (J = { ...J, seedText: ee, seed: !0, icon: q, lang: { seedText: z.seedText } }),
											!P || ((le || T?.enabled == !1) && P && !O)
												? (0, s.Y)(
														re.o,
														{
															controller: a,
															result: t,
															track: { impression: !P },
															children: (0, s.Y)(ie, {
																...J,
																children: B
																	? (0, v.Y)(B, { controller: a, treePath: se, result: t, seed: P, selected: F, onProductSelect: Oe })
																	: (0, s.Y)(j.Q, { ...ke.result, controller: a, result: t }),
															}),
														},
														t.id
												  )
												: null
										);
									}),
								[g, de, ae, W, q, le, O, B, r.theme, ee]
							);
						return (
							Re && delete z.seedText.value,
							g?.length
								? (0, s.Y)(ge._, {
										children: (0, s.Y)('div', {
											...es,
											ref: Ge,
											className: M()(c, { [`${c}--stacked`]: !G }, o, l),
											children: ts
												? (0, s.FD)(ue.l, {
														controller: a,
														children: [
															n && (0, s.Y)('h3', { className: `${c}__title`, children: (0, s.Y)('span', { children: n }) }),
															h &&
																(0, s.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, s.Y)('span', { children: h }) }),
															(0, s.FD)('div', {
																className: M()(`${c}__wrapper`, { [`${c}__wrapper--seed-in-carousel`]: le, [`${c}__wrapper--vertical`]: _e }),
																children: [
																	ye
																		? (0, s.FD)(s.FK, {
																				children: [
																					!le &&
																						!O &&
																						R &&
																						(0, s.Y)('div', {
																							className: `${c}__wrapper__seed-container`,
																							children: (0, s.Y)(re.o, {
																								controller: a,
																								result: R,
																								track: { impression: !1 },
																								children: (0, s.Y)(ie, {
																									seedText: ee,
																									seed: !0,
																									title: R.display.mappings.core?.name,
																									onCheck: (t) => {
																										t.stopPropagation(), Oe(R);
																									},
																									checked: de.findIndex((t) => t.id == R.id) > -1,
																									icon: q,
																									hideCheckboxes: ae,
																									theme: r.theme,
																									ref: Le,
																									treePath: se,
																									classNamePrefix: c,
																									lang: { seedText: z.seedText },
																									children:
																										B && a
																											? (0, v.Y)(B, {
																													controller: a,
																													seed: !0,
																													selected: de.findIndex((t) => t.id == R.id) > -1,
																													onProductSelect: Oe,
																													result: R,
																													treePath: se,
																											  })
																											: (0, s.Y)(j.Q, { ...ke.result, controller: a, result: R }),
																								}),
																							}),
																						}),
																					(0, s.Y)('div', {
																						className: `${c}__wrapper__carousel`,
																						children: (0, s.Y)(H.FN, {
																							prevButton: Je,
																							nextButton: He,
																							hideButtons: Ze,
																							loop: Ke,
																							spaceBetween: Qe,
																							pagination: Xe,
																							breakpoints: je,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: _e,
																							onResize: () => ss(),
																							...ke.carousel,
																							...Fe,
																							...u,
																							ref: Ue,
																							children: ze,
																						}),
																					}),
																				],
																		  })
																		: (0, s.Y)(s.FK, { children: ze }),
																	G &&
																		(0, s.Y)(S, {
																			ctaSlot: U,
																			cartStore: I,
																			onAddToCart: (t) => We(t),
																			ctaButtonText: he,
																			ctaButtonSuccessText: Pe,
																			ctaButtonSuccessTimeout: De,
																			ctaIcon: ve,
																			treePath: se,
																			classNamePrefix: c,
																			lang: {
																				ctaButtonSuccessText: z.ctaButtonSuccessText,
																				ctaButtonText: z.ctaButtonText,
																				ctaSubtotalTitle: z.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!G &&
																(0, s.Y)(S, {
																	ctaSlot: U,
																	cartStore: I,
																	onAddToCart: (t) => We(t),
																	ctaButtonText: he,
																	ctaButtonSuccessText: Pe,
																	ctaButtonSuccessTimeout: De,
																	ctaIcon: ve,
																	treePath: se,
																	classNamePrefix: c,
																	lang: {
																		ctaButtonSuccessText: z.ctaButtonSuccessText,
																		ctaButtonText: z.ctaButtonText,
																		ctaSubtotalTitle: z.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, s.Y)(ue.l, {
														controller: a,
														children: g.map((t) => (0, s.Y)(re.o, { controller: a, result: t, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Be, N, e) {
				e.d(N, { l: () => H });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/preact/dist/preact.module.js'),
					k = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/classnames/index.js'),
					$ = e.n(E),
					te = e('./components/src/utilities/mergeStyles.ts');
				const A = () => (0, k.AH)({}),
					H = (0, M.PA)((j) => {
						const { children: L, className: Z, internalClassName: oe } = j,
							v = (0, C.v2)(L),
							Y = (0, te.Z)(j, A);
						return v.length ? (0, s.Y)('div', { className: $()('ss__recommendation-profile-tracker', Z, oe), ...Y, children: L }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(Be, N, e) {
				e.d(N, { o: () => j });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					C = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					k = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/classnames/index.js'),
					E = e.n(M),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					te = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/createImpressionObserver.ts');
				const H = { ResultTracker: () => (0, C.AH)({}) },
					j = (0, k.PA)((L) => {
						const Z = (0, $.u)(),
							oe = (0, te.v6)('resultTracker', Z, {}, L),
							v = { impression: !0, click: !0 },
							{ children: Y, result: pe, track: ge, controller: ne, className: ue, internalClassName: re, disableStyles: Ee, style: Q } = oe,
							X = { ...v, ...ge },
							{ ref: ie, inViewport: be } = (0, A.Q)();
						be && X.impression && ne?.track.product.impression(pe);
						const f = {};
						return (
							Ee ? Q && (f.css = [Q]) : (f.css = [H.ResultTracker(), Q]),
							(0, s.Y)('div', {
								className: E()('ss__result-tracker', `ss__${ne?.type}-result-tracker`, ue, re),
								onClick: (S) => {
									X.click && ne?.track.product.click(S, pe);
								},
								ref: ie,
								...f,
								children: Y,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(Be, N, e) {
				e.d(N, { b: () => s });
				const s = (C) => C.replace(/([A-Z])/g, (k) => '-' + k.toLowerCase());
			},
		},
	]);
})();
