'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7615],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(W, f, e) {
				e.d(f, { P: () => t });
				const t = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(W, f, e) {
				e.d(f, { G: () => a });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(i, m) {
					const n = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...m };
					return (0, t.Z)(i, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(W, f, e) {
				e.d(f, { Z: () => t });
				function t(i, m) {
					const n = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...m };
					if (typeof i != 'number' || Number.isNaN(i)) return;
					const _ = a(i, n.decimalPlaces).split('.');
					(_[0] = _[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + n.thousandsSeparator)),
						n.decimalPlaces > 0 && n.padDecimalPlaces && (_[1] = (_[1] || '').padEnd(n.decimalPlaces, '0'));
					let v = _.join(n.decimalSeparator);
					return n.symbolAfter ? (v = v + n.symbol) : (v = n.symbol + v), v;
				}
				function a(i, m) {
					const n = i.toString(),
						_ = n.indexOf('.'),
						v = _ == -1 ? n.length : 1 + _ + (m || -1);
					return n.substr(0, v);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(W, f, e) {
				e.d(f, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let i = a.toLowerCase();
					return (i = i.replace(/[^\w\s]/g, '').trim()), (i = i.replace(/\s/g, '-')), i;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(W, f, e) {
				e.d(f, { x: () => t });
				function t(a, i, m) {
					if (typeof a != 'string' || a.length <= i) return a;
					const n = a.lastIndexOf(' ', i),
						_ = n != -1 ? n : i - 1;
					return a.substr(0, _) + (m || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(W, f, e) {
				e.d(f, { FN: () => ye, K: () => oe, og: () => ce });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(v),
					B = e('../../node_modules/swiper/swiper-react.mjs'),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					V = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					x = e('../../node_modules/swiper/modules/index.mjs'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					z = e('./components/src/providers/cache.tsx'),
					te = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					le = e('./components/src/providers/snap.tsx'),
					fe = e('./components/src/providers/treePath.tsx'),
					ie = e('./components/src/hooks/useDisplaySettings.tsx'),
					we = e('./components/src/hooks/useComponent.tsx');
				const se = ({ vertical: C, theme: j }) =>
						(0, i.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: C ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: j?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: j?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: j?.variables?.colors?.primary || '#000' },
							},
						}),
					oe = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					ce = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ye = (0, _.PA)((C) => {
						const j = (0, te.u)(),
							Ne = (0, le.uk)(),
							Be = (0, fe.LU)(),
							Ie = {
								breakpoints: C.vertical ? JSON.parse(JSON.stringify(ce)) : JSON.parse(JSON.stringify(oe)),
								pagination: !1,
								slidesPerGroup: !C.breakpoints || !Object.keys(C.breakpoints).length ? 5 : void 0,
								slidesPerView: !C.breakpoints || !Object.keys(C.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: Be,
							};
						let h = (0, V.v6)('carousel', j, Ie, C),
							c;
						if (
							!(C.theme?.type == 'templates' || j?.type == 'templates') &&
							h.breakpoints &&
							(Object.keys(h.breakpoints).forEach((o) => {
								const u = h.breakpoints[o];
								u.slidesPerView && (u.slidesPerView = Number(u.slidesPerView) || 1),
									u.slidesPerGroup && (u.slidesPerGroup = Number(u.slidesPerGroup) || 1);
							}),
							(c = (0, ie.X)(h.breakpoints)),
							c && Object.keys(c).length)
						) {
							const o = D()(h?.theme || {}, c?.theme || {}, { arrayMerge: (u, xe) => xe });
							h.autoAdjustSlides &&
								h.children.length < c.slidesPerView &&
								((c.slidesPerView = h.children.length), (c.slidesPerGroup = h.children.length)),
								(h = { ...h, ...c, theme: o });
						}
						const {
							children: b,
							loop: N,
							nextButton: g,
							prevButton: F,
							hideButtons: S,
							vertical: l,
							onInit: p,
							onBeforeInit: P,
							onAfterInit: r,
							onNextButtonClick: y,
							onPrevButtonClick: d,
							onClick: $,
							disableStyles: L,
							customComponent: I,
							style: O,
							styleScript: re,
							themeStyleScript: de,
							modules: J,
							className: ne,
							internalClassName: he,
							treePath: Ee,
							...Z
						} = h;
						if (I) {
							const o = (0, we.x)(Ne?.templates?.library.import.component.carousel || {}, I);
							if (o) return (0, t.Y)(o, { ...h });
						}
						let R = h.pagination,
							H = h.navigation,
							Y = h.scrollbar;
						const be = { icon: { internalClassName: 'ss__carousel__icon', ...(0, M.s)({ disableStyles: L }), theme: h.theme, treePath: Ee } },
							ge = Array.isArray(J) ? [x.Vx, x.dK, x.Ze, x.Jq].concat(J) : [x.Vx, x.dK, x.Ze, x.Jq],
							Se = ge.filter((o, u) => ge.indexOf(o) === u),
							Pe = (0, a.li)(null),
							ve = (0, a.li)(null),
							Q = (0, a.li)(null),
							Me = (0, U.Z)(h, se);
						(0, a.vJ)(() => {
							if (Q.current) {
								const u = Q.current.querySelector('.swiper');
								u?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									u?.classList.contains('swiper-vertical') && u.classList.add('swiper-container-vertical'),
									u?.classList.contains('swiper-horizontal') && u.classList.add('swiper-container-horizontal');
							}
							Te();
						}, [C]),
							R && (typeof R == 'object' ? (R = { clickable: !0, ...R }) : (R = { clickable: !0 })),
							H && typeof H == 'object'
								? (H = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...H })
								: (H = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							Y && (typeof Y == 'object' ? (Y = { enabled: !0, ...Y }) : (Y = { enabled: !0 }));
						const Te = () => {
							if (Q.current) {
								const u = Q.current?.querySelectorAll('.swiper-slide-visible');
								u.forEach((xe, Ye) => {
									xe.classList.remove('swiper-last-visible-slide'), Ye == u.length - 1 && xe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete Z.breakpoints,
							b?.length
								? (0, t.Y)(z._, {
										children: (0, t.FD)('div', {
											ref: Q,
											...Me,
											className: n()('ss__carousel', l ? 'ss__carousel-vertical' : '', ne, he),
											children: [
												(0, t.Y)('div', {
													className: n()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': S }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: Pe,
														onClick: d && ((o) => d(o)),
														children: F || (0, t.Y)(A.I, { icon: l ? 'angle-up' : 'angle-left', ...be.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(B.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														(o.params.navigation.prevEl = Pe.current ? Pe.current : void 0),
															(o.params.navigation.nextEl = ve.current ? ve.current : void 0),
															P && P(o);
													},
													onInit: (o) => {
														p && p(o);
													},
													onAfterInit: (o) => {
														(o.navigation.onPrevClick = (u) => {
															u.preventDefault(), !(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
														}),
															(o.navigation.onNextClick = (u) => {
																u.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															}),
															r && r(o);
													},
													onClick: (o, u) => {
														$ && $(o, u);
													},
													direction: l ? 'vertical' : 'horizontal',
													loop: N,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Se,
													...Z,
													...c,
													controller: void 0,
													navigation: H,
													pagination: R,
													scrollbar: Y,
													onResize: (o) => {
														Z.onResize && Z.onResize(), o.updateSlidesClasses(), Te();
													},
													onTransitionEnd: () => {
														Z.onTransitionEnd && Z.onTransitionEnd(), Te();
													},
													children: b.map((o) => (o != null ? (0, t.Y)(B.qr, { children: (0, T.Y)(o, { treePath: Ee }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: n()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': S }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: ve,
														onClick: y && ((o) => y(o)),
														children: g || (0, t.Y)(A.I, { icon: l ? 'angle-down' : 'angle-right', ...be.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(W, f, e) {
				e.d(f, { g: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					m = e.n(i),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(v),
					B = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					T = e('./components/src/components/Molecules/Result/Result.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					V = e('./components/src/utilities/defined.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/providers/treePath.tsx'),
					te = e('./components/src/providers/cache.tsx'),
					le = e('./components/src/hooks/useDisplaySettings.tsx'),
					fe = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					ie = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					we = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					se = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					oe = e('./components/src/hooks/useLang.tsx');
				const ce = (0, _.PA)((c) => {
					const b = (0, A.u)(),
						N = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						g = (0, M.v6)('bundleSelector', b, N, c),
						{
							children: F,
							checked: S,
							icon: l,
							seedText: p,
							seed: P,
							hideCheckboxes: r,
							onCheck: y,
							title: d,
							className: $,
							internalClassName: L,
							treePath: I,
							classNamePrefix: O,
						} = g,
						re = I?.lastIndexOf(' '),
						de = re !== -1 ? I?.slice(0, re) : I,
						J = {
							icon: { name: 'bundle-selector', internalClassName: `${O}__wrapper__selector__icon`, size: 15, theme: g?.theme, treePath: de },
							checkbox: {
								internalClassName: `${O}__wrapper__selector__result-wrapper__checkbox`,
								checked: S,
								size: '18px',
								onClick: y,
								lang: { checkbox: { attributes: { 'aria-label': S ? `remove product from bundle ${d}` : `add product to bundle ${d}` } } },
								theme: g?.theme,
								treePath: de,
							},
						},
						ne = D()({}, g.lang || {}),
						he = (0, oe.u)(ne, {});
					return (0, t.FD)('div', {
						className: m()(
							`${O}__wrapper__selector`,
							S ? `${O}__wrapper__selector--selected` : '',
							p || P ? `${O}__wrapper__selector--seed` : '',
							$,
							L
						),
						children: [
							(0, t.FD)('div', {
								className: `${O}__wrapper__selector__result-wrapper`,
								children: [
									!r && (0, t.Y)(we.S, { ...J.checkbox }),
									p && (0, t.Y)('div', { className: `${O}__wrapper__selector__result-wrapper__seed-badge`, ...he.seedText?.all }),
									F,
								],
							}),
							l ? (0, t.Y)(se.I, { ...J.icon, ...(typeof l == 'string' ? { icon: l } : l) }) : void 0,
						],
					});
				});
				var ye = e('./components/src/components/Atoms/Button/Button.tsx'),
					C = e('./components/src/components/Atoms/Price/Price.tsx');
				const j = (0, _.PA)((c) => {
					const b = { ...c };
					b.onAddToCart = (O) => {
						d(!0), c.onAddToCart(O), setTimeout(() => d(!1), c.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: N,
							cartStore: g,
							onAddToCart: F,
							ctaIcon: S,
							ctaButtonText: l,
							ctaButtonSuccessText: p,
							treePath: P,
							classNamePrefix: r,
						} = b,
						[y, d] = (0, n.J0)(!1);
					b.addedToCart = y;
					const $ = {
							icon: { name: 'bundle-cart', internalClassName: `${r}__wrapper__cta__icon`, size: 50, theme: b?.theme, treePath: P },
							subtotalStrike: { name: 'bundle-msrp', theme: b?.theme, treePath: P },
							subtotalPrice: { name: 'bundle-price', theme: b?.theme, treePath: P },
							button: { theme: b?.theme, treePath: P },
						},
						L = D()({}, b.lang || {}),
						I = (0, oe.u)(L, { cartStore: g });
					return (0, t.Y)('div', {
						className: `${r}__wrapper__cta`,
						children: N
							? (0, x.Y)(N, b)
							: (0, t.FD)(t.FK, {
									children: [
										(0, t.FD)('div', {
											className: `${r}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												S
													? (0, t.Y)('div', {
															className: `${r}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(se.I, { ...$.icon, ...(typeof S == 'string' ? { icon: S } : S) }),
													  })
													: null,
												(0, t.Y)('span', { className: `${r}__wrapper__cta__subtotal__title`, ...I.ctaSubtotalTitle?.all }),
												(0, t.FD)('div', {
													className: `${r}__wrapper__cta__subtotal__prices`,
													children: [
														g.msrp && g.msrp !== g.price
															? (0, t.FD)('label', {
																	className: `${r}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(C.g, { ...$.subtotalStrike, lineThrough: !0, value: g.msrp })],
															  })
															: null,
														(0, t.Y)('label', {
															className: `${r}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(C.g, { ...$.subtotalPrice, value: g.price }),
														}),
													],
												}),
											],
										}),
										(0, t.Y)(ye.$, {
											...$.button,
											internalClassName: m()(`${r}__wrapper__cta__button`, { [`${r}__wrapper__cta__button--added`]: y }),
											'aria-live': y,
											onClick: (O) => F(O),
											...(y ? I.ctaButtonSuccessText?.all : I.ctaButtonText?.all),
											children: y ? p : l,
										}),
									],
							  }),
					});
				});
				var Ne = e('./components/src/hooks/useIntersection.tsx'),
					Be = e('./components/src/utilities/componentNameToClassName.ts');
				const Ie = ({
						vertical: c,
						separatorIcon: b,
						carousel: N,
						ctaInline: g,
						hasSeed: F,
						hideSeed: S,
						carouselEnabled: l,
						limit: p,
						alias: P,
					}) => {
						let r = 'ss__recommendation-bundle';
						P && (r = `ss__${(0, Be.b)(P)}`);
						const y = N?.slidesPerView;
						return (0, a.AH)({
							[`.${r}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${r}__wrapper__selector--seed`]: { width: `${c ? '100%' : 'auto'}`, margin: `${b ? 'initial' : 'auto !important'}` },
							[`.${r}__wrapper__seed-container`]: { width: c ? '100%' : `calc(100% / ${y + (g ? 1 : 0)})` },
							[`.${r}__wrapper__cta`]: {
								width: c ? '100%' : `${g ? `calc(100% / ${(l ? y : p || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${r}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${r}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${r}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: c ? '100%' : `calc(calc(100% / ${y + (g ? 1 : 0)}) * ${y - (F && !S ? 1 : 0)})`,
							},
							[`.${r}__wrapper--seed-in-carousel`]: {
								[`.${r}__wrapper__cta`]: { width: c ? '100%' : `calc(100% / ${N?.slidesPerView + (g ? 1 : 0)})` },
								[`.${r}__wrapper__carousel`]: {
									width: c ? '100%' : `calc(calc(100% / ${N?.slidesPerView + (g ? 1 : 0)}) * ${N?.slidesPerView})`,
									padding: '0',
								},
							},
							'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': { [`.${r}__wrapper__selector__icon`]: { display: 'none' } },
							'.swiper-slide-visible': { [`.${r}__wrapper__selector__icon`]: { display: 'block' } },
							[`.${r}__wrapper--vertical`]: { flexDirection: 'column' },
							[`.${r}__wrapper__selector`]: {
								alignItems: 'baseline',
								position: 'relative',
								[`&.${r}__wrapper__selector--last`]: { [`.${r}__wrapper__selector__icon`]: { display: 'none' } },
								[`.${r}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
								[`.${r}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
								[`.${r}__wrapper__selector__result-wrapper`]: {
									alignItems: 'center',
									position: 'relative',
									margin: `0px ${5 + (Number(N?.spaceBetween) || 0)}px`,
								},
								[`.${r}__wrapper__selector__result-wrapper__checkbox`]: {
									position: 'absolute',
									top: '0',
									right: '0',
									zIndex: '101',
									cursor: 'pointer',
								},
							},
						});
					},
					h = (0, _.PA)((c) => {
						const b = (0, A.u)(),
							N = (0, z.LU)(),
							F = {
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
								onAddToCart: (s, w) => d?.addToCart && d.addToCart(w),
								title: c.controller?.store?.profile?.display?.templateParameters?.title,
								description: c.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: N,
							},
							S = { name: c.controller?.store?.profile?.tag?.toLowerCase(), ...c };
						let l = (0, M.v6)(S.alias || 'recommendationBundle', b, F, S),
							p = 'ss__recommendation-bundle';
						l.alias && (p = `ss__${(0, Be.b)(l.alias)}`);
						let P;
						if (!(c.theme?.type == 'templates' || b?.type == 'templates') && ((P = (0, le.X)(l.breakpoints)), P && Object.keys(P).length)) {
							const s = D()(l?.theme || {}, P?.theme || {}, { arrayMerge: (w, E) => E });
							l = { ...l, ...P, theme: s };
						}
						const {
								title: r,
								description: y,
								controller: d,
								breakpoints: $,
								results: L,
								carousel: I,
								preselectedCount: O,
								separatorIcon: re,
								hideCheckboxes: de,
								limit: J,
								seedText: ne,
								vertical: he,
								onAddToCart: Ee,
								separatorIconSeedOnly: Z,
								resultComponent: R,
								ctaSlot: H,
								hideSeed: Y,
								ctaButtonText: be,
								ctaButtonSuccessText: ge,
								ctaButtonSuccessTimeout: Se,
								disableStyles: Pe,
								ctaIcon: ve,
								ctaInline: Q,
								hideSeedText: Me,
								lazyRender: Te,
								className: o,
								internalClassName: u,
								alias: xe,
								style: Ye,
								styleScript: nt,
								themeStyleScript: at,
								treePath: ae,
								...Fe
							} = l,
							Ae = { enabled: !0, offset: '10%', ...Te },
							Ce = { enabled: !0, loop: !1, spaceBetween: 10, ...I },
							{ seedInCarousel: me, prevButton: Je, nextButton: Ze, hideButtons: He, loop: Ke, spaceBetween: Qe, pagination: Xe } = Ce,
							ke = Ce.enabled;
						if (!d || d.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let k = L || d.store?.results;
						J && (k = k.slice(0, Y && k.filter((s) => s.bundleSeed == !0).length ? J + 1 : J));
						const K = d.store.cart;
						if (!K) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(L && L.length) && !d.store?.results?.length) return d.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const G = L ? L.filter((s) => s.bundleSeed == !0).pop() : d.store?.results?.filter((s) => s.bundleSeed == !0).pop(),
							qe = xe == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							Re = {
								carousel: {
									loop: Ke,
									internalClassName: 'ss__recommendation__carousel',
									...(0, V.s)({ disableStyles: Pe }),
									theme: l?.theme,
									treePath: ae,
								},
								result: { internalClassName: 'ss__recommendation__result', ...qe, ...(0, V.s)({ disableStyles: Pe }), theme: l?.theme, treePath: ae },
							},
							je = !!k.filter((s) => s.bundleSeed == !0).length;
						let ue = l.carousel?.slidesPerView || l.slidesPerView;
						ue ? k.length < Number(ue) && (ue = k.length) : (ue = 2);
						const et = (0, U.Z)({ ...l, carousel: { ...Ce, slidesPerView: ue }, hasSeed: je, carouselEnabled: ke }, Ie),
							We = typeof O == 'number' ? O : ke ? ue : k.length;
						(0, n.vJ)(() => {
							K.reset(),
								We &&
									k?.forEach((s, w) => {
										w < Number(We) && K.addItems([s]);
									});
						}, [k.length]);
						const pe = K.items,
							$e = { ...$ };
						if (ke) {
							const s = (w) => {
								const E = w?.slidesPerView || w.slidesPerView || 2,
									q = w?.slidesPerGroup || w.slidesPerGroup || 2;
								let ee = E,
									_e = q;
								const Oe = !je || me ? k.length : k.length - 1;
								return (
									Oe && (Oe >= E ? ((ee = E - (!me && je ? 1 : 0)), me || (_e = q - 1 || 1)) : ((ee = Oe), (_e = Oe))),
									{ slidesPerView: ee, slidesPerGroup: _e }
								);
							};
							if (!(c.theme?.type == 'templates' || b?.type == 'templates'))
								Object.keys(l.breakpoints).forEach((w) => {
									const E = l.breakpoints[w],
										{ slidesPerView: q, slidesPerGroup: ee } = s(E);
									$e[w] = { ...$e[w], slidesPerView: q, slidesPerGroup: ee };
								});
							else {
								const { slidesPerView: w, slidesPerGroup: E } = s({ ...Ce, slidesPerView: ue });
								P = { ...Ce, slidesPerView: w, slidesPerGroup: E };
							}
						}
						const De = (s) => {
								s && (pe.findIndex((E) => E.id == s.id) > -1 ? (K.removeItems([s]), K.items.length == 0 && G && K.items.push(G)) : K.addItems([s]));
							},
							Ve = (s) => {
								d.addToCart(pe), Ee && Ee(s, pe);
							},
							tt = () => {
								if (Le.current) {
									const s = Le.current?.base,
										q = Ue.current?.base?.querySelector(`.swiper-slide-visible .${p}__wrapper__selector`)?.offsetWidth;
									s && (s.style.width = `${q}px`);
								}
							},
							Le = (0, n.li)(),
							Ue = (0, n.li)(),
							[st, ot] = (0, n.J0)(!1),
							Ge = (0, n.li)(null);
						(!Ae?.enabled || (0, Ne.v)(Ge, `${Ae.offset} 0px ${Ae.offset} 0px`, !0)) && ot(!0);
						const rt = {
								seedText: { value: ne },
								ctaButtonText: { value: be },
								ctaButtonSuccessText: { value: ge },
								ctaSubtotalTitle: { value: `Subtotal for ${K.count} items` },
							},
							X = D()(rt, l.lang || {}),
							ze = (0, n.Kr)(
								() =>
									k.map((s, w) => {
										const E = !!s.bundleSeed,
											q = pe.findIndex((_e) => _e.id == s.id) > -1;
										let ee = {
											onCheck: (_e) => {
												_e.stopPropagation(), De(s);
											},
											checked: q,
											hideCheckboxes: de,
											theme: l.theme,
											icon: Z ? !1 : re,
											className: w + 1 == k.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: p,
											treePath: ae,
										};
										return (
											E && (ee = { ...ee, seedText: ne, seed: !0, icon: re, lang: { seedText: X.seedText } }),
											!E || ((me || I?.enabled == !1) && E && !Y)
												? (0, t.Y)(
														ie.o,
														{
															controller: d,
															result: s,
															track: { impression: !E },
															children: (0, t.Y)(ce, {
																...ee,
																children: R
																	? (0, x.Y)(R, { controller: d, treePath: ae, result: s, seed: E, selected: q, onProductSelect: De })
																	: (0, t.Y)(T.Q, { ...Re.result, controller: d, result: s }),
															}),
														},
														s.id
												  )
												: null
										);
									}),
								[k, pe, de, Z, re, me, Y, R, l.theme, ne]
							);
						return (
							Me && delete X.seedText.value,
							k?.length
								? (0, t.Y)(te._, {
										children: (0, t.Y)('div', {
											...et,
											ref: Ge,
											className: m()(p, { [`${p}--stacked`]: !Q }, o, u),
											children: st
												? (0, t.FD)(fe.l, {
														controller: d,
														children: [
															r && (0, t.Y)('h3', { className: `${p}__title`, children: (0, t.Y)('span', { children: r }) }),
															y &&
																(0, t.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, t.Y)('span', { children: y }) }),
															(0, t.FD)('div', {
																className: m()(`${p}__wrapper`, { [`${p}__wrapper--seed-in-carousel`]: me, [`${p}__wrapper--vertical`]: he }),
																children: [
																	ke
																		? (0, t.FD)(t.FK, {
																				children: [
																					!me &&
																						!Y &&
																						G &&
																						(0, t.Y)('div', {
																							className: `${p}__wrapper__seed-container`,
																							children: (0, t.Y)(ie.o, {
																								controller: d,
																								result: G,
																								track: { impression: !1 },
																								children: (0, t.Y)(ce, {
																									seedText: ne,
																									seed: !0,
																									title: G.display.mappings.core?.name,
																									onCheck: (s) => {
																										s.stopPropagation(), De(G);
																									},
																									checked: pe.findIndex((s) => s.id == G.id) > -1,
																									icon: re,
																									hideCheckboxes: de,
																									theme: l.theme,
																									ref: Le,
																									treePath: ae,
																									classNamePrefix: p,
																									lang: { seedText: X.seedText },
																									children:
																										R && d
																											? (0, x.Y)(R, {
																													controller: d,
																													seed: !0,
																													selected: pe.findIndex((s) => s.id == G.id) > -1,
																													onProductSelect: De,
																													result: G,
																													treePath: ae,
																											  })
																											: (0, t.Y)(T.Q, { ...Re.result, controller: d, result: G }),
																								}),
																							}),
																						}),
																					(0, t.Y)('div', {
																						className: `${p}__wrapper__carousel`,
																						children: (0, t.Y)(B.FN, {
																							prevButton: Je,
																							nextButton: Ze,
																							hideButtons: He,
																							loop: Ke,
																							spaceBetween: Qe,
																							pagination: Xe,
																							breakpoints: $e,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: he,
																							onResize: () => tt(),
																							...Re.carousel,
																							...Fe,
																							...P,
																							ref: Ue,
																							children: ze,
																						}),
																					}),
																				],
																		  })
																		: (0, t.Y)(t.FK, { children: ze }),
																	Q &&
																		(0, t.Y)(j, {
																			ctaSlot: H,
																			cartStore: K,
																			onAddToCart: (s) => Ve(s),
																			ctaButtonText: be,
																			ctaButtonSuccessText: ge,
																			ctaButtonSuccessTimeout: Se,
																			ctaIcon: ve,
																			treePath: ae,
																			classNamePrefix: p,
																			lang: {
																				ctaButtonSuccessText: X.ctaButtonSuccessText,
																				ctaButtonText: X.ctaButtonText,
																				ctaSubtotalTitle: X.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!Q &&
																(0, t.Y)(j, {
																	ctaSlot: H,
																	cartStore: K,
																	onAddToCart: (s) => Ve(s),
																	ctaButtonText: be,
																	ctaButtonSuccessText: ge,
																	ctaButtonSuccessTimeout: Se,
																	ctaIcon: ve,
																	treePath: ae,
																	classNamePrefix: p,
																	lang: {
																		ctaButtonSuccessText: X.ctaButtonSuccessText,
																		ctaButtonText: X.ctaButtonText,
																		ctaSubtotalTitle: X.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, t.Y)(fe.l, {
														controller: d,
														children: k.map((s) => (0, t.Y)(ie.o, { controller: d, result: s, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(W, f, e) {
				e.d(f, { l: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					_ = e.n(n),
					v = e('./components/src/utilities/mergeStyles.ts');
				const D = () => (0, i.AH)({}),
					B = (0, m.PA)((T) => {
						const { children: M, className: V, internalClassName: U } = T,
							x = (0, a.v2)(M),
							A = (0, v.Z)(T, D);
						return x.length ? (0, t.Y)('div', { className: _()('ss__recommendation-profile-tracker', V, U), ...A, children: M }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(W, f, e) {
				e.d(f, { o: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/classnames/index.js'),
					n = e.n(m),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/createImpressionObserver.ts');
				const B = { ResultTracker: () => (0, a.AH)({}) },
					T = (0, i.PA)((M) => {
						const V = (0, _.u)(),
							U = (0, v.v6)('resultTracker', V, {}, M),
							x = { impression: !0, click: !0 },
							{ children: A, result: z, track: te, controller: le, className: fe, internalClassName: ie, disableStyles: we, style: se } = U,
							oe = { ...x, ...te },
							{ ref: ce, inViewport: ye } = (0, D.Q)();
						ye && oe.impression && le?.track.product.impression(z);
						const C = {};
						return (
							we ? se && (C.css = [se]) : (C.css = [B.ResultTracker(), se]),
							(0, t.Y)('div', {
								className: n()('ss__result-tracker', `ss__${le?.type}-result-tracker`, fe, ie),
								onClick: (j) => {
									oe.click && le?.track.product.click(j, z);
								},
								ref: ce,
								...C,
								children: A,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(W, f, e) {
				e.d(f, { b: () => t });
				const t = (a) => a.replace(/([A-Z])/g, (i) => '-' + i.toLowerCase());
			},
			'../../node_modules/colord/plugins/names.mjs'(W, f, e) {
				e.d(f, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(a, i) {
					var m = {
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
						n = {};
					for (var _ in m) n[m[_]] = _;
					var v = {};
					(a.prototype.toName = function (D) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var B,
							T,
							M = n[this.toHex()];
						if (M) return M;
						if (D?.closest) {
							var V = this.toRgb(),
								U = 1 / 0,
								x = 'black';
							if (!v.length) for (var A in m) v[A] = new a(m[A]).toRgb();
							for (var z in m) {
								var te = ((B = V), (T = v[z]), Math.pow(B.r - T.r, 2) + Math.pow(B.g - T.g, 2) + Math.pow(B.b - T.b, 2));
								te < U && ((U = te), (x = z));
							}
							return x;
						}
					}),
						i.string.push([
							function (D) {
								var B = D.toLowerCase(),
									T = B === 'transparent' ? '#0000' : m[B];
								return T ? new a(T).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
