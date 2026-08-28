'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7615],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(Y, p, e) {
				const t = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(p, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(Y, p, e) {
				e.d(p, { G: () => l });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(i, m) {
					const r = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...m };
					return (0, t.Z)(i, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(Y, p, e) {
				e.d(p, { Z: () => t });
				function t(i, m) {
					const r = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...m };
					if (typeof i != 'number' || Number.isNaN(i)) return;
					const f = l(i, r.decimalPlaces).split('.');
					(f[0] = f[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + r.thousandsSeparator)),
						r.decimalPlaces > 0 && r.padDecimalPlaces && (f[1] = (f[1] || '').padEnd(r.decimalPlaces, '0'));
					let x = f.join(r.decimalSeparator);
					return r.symbolAfter ? (x = x + r.symbol) : (x = r.symbol + x), x;
				}
				function l(i, m) {
					const r = i.toString(),
						f = r.indexOf('.'),
						x = f == -1 ? r.length : 1 + f + (m || -1);
					return r.substr(0, x);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(Y, p, e) {
				e.d(p, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let i = l.toLowerCase();
					return (i = i.replace(/[^\w\s]/g, '').trim()), (i = i.replace(/\s/g, '-')), i;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(Y, p, e) {
				e.d(p, { x: () => t });
				function t(l, i, m) {
					if (typeof l != 'string' || l.length <= i) return l;
					const r = l.lastIndexOf(' ', i),
						f = r != -1 ? r : i - 1;
					return l.substr(0, f) + (m || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Y, p, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					r = e.n(m),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(x),
					k = e('../../node_modules/swiper/swiper-react.mjs'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					W = e('./components/src/utilities/defined.ts'),
					te = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					z = e('../../node_modules/swiper/modules/navigation.mjs'),
					R = e('../../node_modules/swiper/modules/pagination.mjs'),
					se = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					re = e('../../node_modules/swiper/modules/a11y.mjs'),
					Ce = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Ae = e('./components/src/providers/cache.tsx'),
					Ie = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Ee = e('./components/src/providers/treePath.tsx'),
					he = e('./components/src/hooks/useDisplaySettings.tsx'),
					Re = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const Te = ({ vertical: N, theme: G }) =>
						(0, i.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: N ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: G?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: G?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: G?.variables?.colors?.primary || '#000' },
							},
						}),
					ge = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					be = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					Me = (0, f.PA)((N) => {
						const G = (0, Ie.u)(),
							$e = (0, Ee.LU)(),
							je = {
								breakpoints: N.vertical ? JSON.parse(JSON.stringify(be)) : JSON.parse(JSON.stringify(ge)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !N.breakpoints || !Object.keys(N.breakpoints).length ? 5 : void 0,
								slidesPerView: !N.breakpoints || !Object.keys(N.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: $e,
							};
						let _ = (0, te.v6)('carousel', G, je, N),
							M;
						if (
							!(N.theme?.type == 'templates' || G?.type == 'templates') &&
							_.breakpoints &&
							(Object.keys(_.breakpoints).forEach((o) => {
								const d = _.breakpoints[o];
								d.slidesPerView && (d.slidesPerView = Number(d.slidesPerView) || 1),
									d.slidesPerGroup && (d.slidesPerGroup = Number(d.slidesPerGroup) || 1);
							}),
							(M = (0, he.X)(_.breakpoints)),
							M && Object.keys(M).length)
						) {
							const o = S()(_?.theme || {}, M?.theme || {}, { arrayMerge: (d, _e) => _e });
							_.autoAdjustSlides &&
								_.children.length < M.slidesPerView &&
								((M.slidesPerView = _.children.length), (M.slidesPerGroup = _.children.length)),
								(_ = { ..._, ...M, theme: o });
						}
						const {
								children: Se,
								loop: h,
								nextButton: g,
								prevButton: D,
								hideButtons: b,
								vertical: I,
								onInit: E,
								onBeforeInit: a,
								onAfterInit: u,
								onNextButtonClick: v,
								onPrevButtonClick: n,
								onClick: P,
								disableStyles: c,
								style: F,
								styleScript: V,
								themeStyleScript: $,
								modules: y,
								className: J,
								internalClassName: oe,
								treePath: H,
								...O
							} = _,
							{ overrideElement: me, shouldRenderDefault: Be } = (0, Re._)('carousel', _);
						if (!Be) return me;
						let Z = _.pagination,
							A = _.navigation,
							j = _.scrollbar;
						const ue = { icon: { internalClassName: 'ss__carousel__icon', ...(0, W.s)({ disableStyles: c }), theme: _.theme, treePath: H } },
							pe = Array.isArray(y) ? [z.A, R.A, se.A, re.A].concat(y) : [z.A, R.A, se.A, re.A],
							ke = pe.filter((o, d) => pe.indexOf(o) === d),
							ae = (0, l.li)(null),
							fe = (0, l.li)(null),
							X = (0, l.li)(null),
							Le = (0, U.Z)(_, Te);
						(0, l.vJ)(() => {
							if (X.current) {
								const d = X.current.querySelector('.swiper');
								d?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									d?.classList.contains('swiper-vertical') && d.classList.add('swiper-container-vertical'),
									d?.classList.contains('swiper-horizontal') && d.classList.add('swiper-container-horizontal');
							}
							ve();
						}, [N]),
							Z && (typeof Z == 'object' ? (Z = { clickable: !0, ...Z }) : (Z = { clickable: !0 })),
							A &&
								(typeof A == 'object'
									? (A = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...A })
									: (A = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							j && (typeof j == 'object' ? (j = { enabled: !0, ...j }) : (j = { enabled: !0 }));
						const ve = () => {
							if (X.current) {
								const d = X.current?.querySelectorAll('.swiper-slide-visible');
								d.forEach((_e, Ge) => {
									_e.classList.remove('swiper-last-visible-slide'), Ge == d.length - 1 && _e.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete O.breakpoints,
							Se?.length
								? (0, t.Y)(Ae._, {
										children: (0, t.FD)('div', {
											ref: X,
											...Le,
											className: r()('ss__carousel', I ? 'ss__carousel-vertical' : '', J, oe),
											children: [
												A !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': b }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: ae,
															onClick: n && ((o) => n(o)),
															children: D || (0, t.Y)(Ce.I, { icon: I ? 'angle-up' : 'angle-left', ...ue.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(k.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														A &&
															o.params.navigation &&
															((o.params.navigation.prevEl = ae.current ? ae.current : void 0),
															(o.params.navigation.nextEl = fe.current ? fe.current : void 0)),
															a && a(o);
													},
													onInit: (o) => {
														E && E(o);
													},
													onAfterInit: (o) => {
														A &&
															o.navigation &&
															((o.navigation.onPrevClick = (d) => {
																d.preventDefault(),
																	!(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
															}),
															(o.navigation.onNextClick = (d) => {
																d.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															})),
															u && u(o);
													},
													onClick: (o, d) => {
														P && P(o, d);
													},
													direction: I ? 'vertical' : 'horizontal',
													loop: h,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ke,
													...O,
													...M,
													controller: void 0,
													navigation: A,
													pagination: Z,
													scrollbar: j,
													onResize: (o) => {
														O.onResize && O.onResize(), o.updateSlidesClasses(), ve();
													},
													onTransitionEnd: () => {
														O.onTransitionEnd && O.onTransitionEnd(), ve();
													},
													children: Se.map((o) => (o != null ? (0, t.Y)(k.qr, { children: (0, B.Y)(o, { treePath: H }) }) : null)),
												}),
												A !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': b }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: fe,
															onClick: v && ((o) => v(o)),
															children: g || (0, t.Y)(Ce.I, { icon: I ? 'angle-down' : 'angle-right', ...ue.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(p, ['FN', 0, Me, 'K', 0, ge, 'og', 0, be]);
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Y, p, e) {
				e.d(p, { g: () => Se });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					m = e.n(i),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(x),
					k = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					B = e('./components/src/components/Molecules/Result/Result.tsx'),
					W = e('./components/src/utilities/lazyRenderMinSize.ts'),
					te = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/defined.ts'),
					z = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/utilities/cloneWithProps.tsx'),
					se = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					re = e('./components/src/providers/treePath.tsx'),
					Ce = e('./components/src/providers/snap.tsx'),
					Ae = e('./components/src/providers/cache.tsx'),
					Ie = e('./components/src/hooks/useDisplaySettings.tsx'),
					Ee = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					he = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Re = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					Te = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ge = e('./components/src/hooks/useLang.tsx');
				const be = (0, f.PA)((h) => {
					const g = (0, se.u)(),
						D = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						b = (0, te.v6)('bundleSelector', g, D, h),
						{
							children: I,
							checked: E,
							icon: a,
							seedText: u,
							seed: v,
							hideCheckboxes: n,
							onCheck: P,
							title: c,
							className: F,
							internalClassName: V,
							treePath: $,
							classNamePrefix: y,
						} = b,
						J = $?.lastIndexOf(' '),
						oe = J !== -1 ? $?.slice(0, J) : $,
						H = {
							icon: { name: 'bundle-selector', internalClassName: `${y}__wrapper__selector__icon`, size: 15, theme: b?.theme, treePath: oe },
							checkbox: {
								internalClassName: `${y}__wrapper__selector__result-wrapper__checkbox`,
								checked: E,
								size: '18px',
								onClick: P,
								lang: { checkbox: { attributes: { 'aria-label': E ? `remove product from bundle ${c}` : `add product to bundle ${c}` } } },
								theme: b?.theme,
								treePath: oe,
							},
						},
						O = S()({}, b.lang || {}),
						me = (0, ge.u)(O, {}, { activeBreakpoint: g?.activeBreakpoint });
					return (0, t.FD)('div', {
						className: m()(
							`${y}__wrapper__selector`,
							E ? `${y}__wrapper__selector--selected` : '',
							u || v ? `${y}__wrapper__selector--seed` : '',
							F,
							V
						),
						children: [
							(0, t.FD)('div', {
								className: `${y}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, t.Y)(Re.S, { ...H.checkbox }),
									u && (0, t.Y)('div', { className: `${y}__wrapper__selector__result-wrapper__seed-badge`, ...me.seedText?.all }),
									I,
								],
							}),
							a ? (0, t.Y)(Te.I, { ...H.icon, ...(typeof a == 'string' ? { icon: a } : a) }) : void 0,
						],
					});
				});
				var Me = e('./components/src/components/Atoms/Button/Button.tsx'),
					N = e('./components/src/components/Atoms/Price/Price.tsx');
				const G = (0, f.PA)((h) => {
					const g = { ...h };
					g.onAddToCart = async (y) => {
						await h.onAddToCart(y), c(!0), setTimeout(() => c(!1), h.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: D,
							cartStore: b,
							onAddToCart: I,
							ctaIcon: E,
							ctaButtonText: a,
							ctaButtonSuccessText: u,
							treePath: v,
							classNamePrefix: n,
						} = g,
						[P, c] = (0, r.J0)(!1);
					g.addedToCart = P;
					const F = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: g?.theme, treePath: v },
							subtotalStrike: { name: 'bundle-msrp', theme: g?.theme, treePath: v },
							subtotalPrice: { name: 'bundle-price', theme: g?.theme, treePath: v },
							button: { theme: g?.theme, treePath: v },
						},
						V = S()({}, g.lang || {}),
						$ = (0, ge.u)(V, { cartStore: b }, { activeBreakpoint: g?.theme?.activeBreakpoint });
					return (0, t.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: D
							? (0, R.Y)(D, g)
							: (0, t.FD)(t.FK, {
									children: [
										(0, t.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												E
													? (0, t.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(Te.I, { ...F.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
													  })
													: null,
												(0, t.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...$.ctaSubtotalTitle?.all }),
												(0, t.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														b.msrp && b.msrp !== b.price
															? (0, t.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(N.g, { ...F.subtotalStrike, lineThrough: !0, value: b.msrp })],
															  })
															: null,
														(0, t.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(N.g, { ...F.subtotalPrice, value: b.price }),
														}),
													],
												}),
											],
										}),
										(0, t.Y)(Me.$, {
											...F.button,
											internalClassName: m()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: P }),
											'aria-live': P,
											onClick: (y) => I(y),
											...(P ? $.ctaButtonSuccessText?.all : $.ctaButtonText?.all),
											children: P ? u : a,
										}),
									],
							  }),
					});
				});
				var $e = e('./components/src/hooks/useComponent.tsx'),
					je = e('./components/src/hooks/useIntersection.tsx'),
					_ = e('./components/src/utilities/componentNameToClassName.ts');
				const M = ({ vertical: h, separatorIcon: g, carousel: D, ctaInline: b, hasSeed: I, hideSeed: E, carouselEnabled: a, limit: u, alias: v }) => {
						let n = 'ss__recommendation-bundle';
						v && (n = `ss__${(0, _.b)(v)}`);
						const P = D?.slidesPerView;
						return (0, l.AH)({
							...W.k,
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${h ? '100%' : 'auto'}`, margin: `${g ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: h ? '100%' : `calc(100% / ${P + (b ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: h ? '100%' : `${b ? `calc(100% / ${(a ? P : u || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: h ? '100%' : `calc(calc(100% / ${P + (b ? 1 : 0)}) * ${P - (I && !E ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: h ? '100%' : `calc(100% / ${D?.slidesPerView + (b ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: h ? '100%' : `calc(calc(100% / ${D?.slidesPerView + (b ? 1 : 0)}) * ${D?.slidesPerView})`,
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
									margin: `0px ${5 + (Number(D?.spaceBetween) || 0)}px`,
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
					Se = (0, f.PA)((h) => {
						const g = (0, se.u)(),
							D = (0, re.LU)(),
							I = {
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
								title: h.controller?.store?.profile?.display?.templateParameters?.title,
								description: h.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: D,
							},
							E = { name: h.controller?.store?.profile?.tag?.toLowerCase(), ...h };
						let a = (0, te.v6)(E.alias || 'recommendationBundle', g, I, E),
							u = 'ss__recommendation-bundle';
						a.alias && (u = `ss__${(0, _.b)(a.alias)}`);
						let v;
						if (!(h.theme?.type == 'templates' || g?.type == 'templates') && ((v = (0, Ie.X)(a.breakpoints)), v && Object.keys(v).length)) {
							const s = S()(a?.theme || {}, v?.theme || {}, { arrayMerge: (C, w) => w });
							a = { ...a, ...v, theme: s };
						}
						const {
								title: n,
								description: P,
								controller: c,
								breakpoints: F,
								results: V,
								carousel: $,
								preselectedCount: y,
								separatorIcon: J,
								hideCheckboxes: oe,
								limit: H,
								seedText: O,
								vertical: me,
								onAddToCart: Be,
								separatorIconSeedOnly: Z,
								ctaSlot: A,
								hideSeed: j,
								ctaButtonText: ue,
								ctaButtonSuccessText: pe,
								ctaButtonSuccessTimeout: ke,
								disableStyles: ae,
								ctaIcon: fe,
								ctaInline: X,
								hideSeedText: Le,
								lazyRender: ve,
								className: o,
								internalClassName: d,
								alias: _e,
								style: Ge,
								styleScript: _t,
								themeStyleScript: ht,
								treePath: ne,
								...qe
							} = a,
							Pe = a.resultComponent,
							et = (0, Ce.uk)(),
							we = typeof Pe == 'string',
							tt = we ? Pe : '',
							st = et?.templates?.library.import.component.result || {},
							{ ComponentOverride: ot, shouldWaitForNamedOverride: Ye } = (0, $e.x)(st, we ? tt : void 0),
							xe = we ? ot : Pe,
							We = { enabled: !0, offset: '10%', ...ve },
							ye = { enabled: !0, loop: !1, spaceBetween: 10, ...$ },
							{ seedInCarousel: le, prevButton: nt, nextButton: rt, hideButtons: at, loop: Fe, spaceBetween: lt, pagination: it } = ye,
							De = ye.enabled;
						if (!c || c.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let T = V || c.store?.results;
						H && (T = T.slice(0, j && T.filter((s) => s.bundleSeed == !0).length ? H + 1 : H));
						const L = c.store.cart;
						if (!L) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(V && V.length) && !c.store?.results?.length) return c.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const K = V ? V.filter((s) => s.bundleSeed == !0).pop() : c.store?.results?.filter((s) => s.bundleSeed == !0).pop(),
							ct = _e == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							Ve = {
								carousel: {
									loop: Fe,
									internalClassName: 'ss__recommendation__carousel',
									...(0, U.s)({ disableStyles: ae }),
									theme: a?.theme,
									treePath: ne,
								},
								result: { internalClassName: 'ss__recommendation__result', ...ct, ...(0, U.s)({ disableStyles: ae }), theme: a?.theme, treePath: ne },
							},
							Ke = !!T.filter((s) => s.bundleSeed == !0).length;
						let ie = a.carousel?.slidesPerView || a.slidesPerView;
						ie ? T.length < Number(ie) && (ie = T.length) : (ie = 2);
						const dt = (0, z.Z)({ ...a, carousel: { ...ye, slidesPerView: ie }, hasSeed: Ke, carouselEnabled: De }, M),
							Je = typeof y == 'number' ? y : De ? ie : T.length;
						(0, r.vJ)(() => {
							L.reset(),
								Je &&
									T?.forEach((s, C) => {
										C < Number(Je) && L.addItems([s]);
									});
						}, [T.length]);
						const ce = L.items,
							Ue = { ...F };
						if (De) {
							const s = (C) => {
								const w = C?.slidesPerView || C.slidesPerView || 2,
									q = C?.slidesPerGroup || C.slidesPerGroup || 2;
								let ee = w,
									de = q;
								const Oe = !Ke || le ? T.length : T.length - 1;
								return (
									Oe && (Oe >= w ? ((ee = w - (!le && Ke ? 1 : 0)), le || (de = q - 1 || 1)) : ((ee = Oe), (de = Oe))),
									{ slidesPerView: ee, slidesPerGroup: de }
								);
							};
							if (!(h.theme?.type == 'templates' || g?.type == 'templates'))
								Object.keys(a.breakpoints).forEach((C) => {
									const w = a.breakpoints[C],
										{ slidesPerView: q, slidesPerGroup: ee } = s(w);
									Ue[C] = { ...Ue[C], slidesPerView: q, slidesPerGroup: ee };
								});
							else {
								const { slidesPerView: C, slidesPerGroup: w } = s({ ...ye, slidesPerView: ie });
								v = { ...ye, slidesPerView: C, slidesPerGroup: w };
							}
						}
						const Ne = (s) => {
								s && (ce.findIndex((w) => w.id == s.id) > -1 ? (L.removeItems([s]), L.items.length == 0 && K && L.items.push(K)) : L.addItems([s]));
							},
							He = async (s) => {
								await c.addToCart(ce), Be && (await Be(s, ce));
							},
							mt = () => {
								if (ze.current) {
									const s = ze.current?.base,
										q = Ze.current?.base?.querySelector(`.swiper-slide-visible .${u}__wrapper__selector`)?.offsetWidth;
									s && (s.style.width = `${q}px`);
								}
							},
							ze = (0, r.li)(),
							Ze = (0, r.li)(),
							[ut, pt] = (0, r.J0)(!1),
							Xe = (0, r.li)(null);
						(!We?.enabled || (0, je.v)(Xe, `${We.offset} 0px ${We.offset} 0px`, !0)) && pt(!0);
						const ft = {
								seedText: { value: O },
								ctaButtonText: { value: ue },
								ctaButtonSuccessText: { value: pe },
								ctaSubtotalTitle: { value: `Subtotal for ${L.count} items` },
							},
							Q = S()(ft, a.lang || {}),
							Qe = (0, r.Kr)(
								() =>
									T.map((s, C) => {
										const w = !!s.bundleSeed,
											q = ce.findIndex((de) => de.id == s.id) > -1;
										let ee = {
											onCheck: (de) => {
												de.stopPropagation(), Ne(s);
											},
											checked: q,
											hideCheckboxes: oe,
											theme: a.theme,
											icon: Z ? !1 : J,
											className: C + 1 == T.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: u,
											treePath: ne,
										};
										return (
											w && (ee = { ...ee, seedText: O, seed: !0, icon: J, lang: { seedText: Q.seedText } }),
											!w || ((le || $?.enabled == !1) && w && !j)
												? (0, t.Y)(
														he.o,
														{
															controller: c,
															result: s,
															track: { impression: !w },
															children: (0, t.Y)(be, {
																...ee,
																children: xe
																	? (0, R.Y)(xe, {
																			controller: c,
																			theme: we ? S()(a.theme || {}, { components: { result: { customComponent: Pe } } }) : a.theme,
																			treePath: ne,
																			result: s,
																			seed: w,
																			selected: q,
																			onProductSelect: Ne,
																	  })
																	: Ye
																	? null
																	: (0, t.Y)(B.Q, { ...Ve.result, controller: c, result: s }),
															}),
														},
														s.id
												  )
												: null
										);
									}),
								[T, ce, oe, Z, J, le, j, Ye, xe, a.theme, O]
							);
						return (
							Le && delete Q.seedText.value,
							T?.length
								? (0, t.Y)(Ae._, {
										children: (0, t.Y)('div', {
											...dt,
											style: ae ? W.k : void 0,
											ref: Xe,
											className: m()(u, { [`${u}--stacked`]: !X }, o, d),
											children: ut
												? (0, t.FD)(Ee.l, {
														controller: c,
														children: [
															n && (0, t.Y)('h3', { className: `${u}__title`, children: (0, t.Y)('span', { children: n }) }),
															P &&
																(0, t.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, t.Y)('span', { children: P }) }),
															(0, t.FD)('div', {
																className: m()(`${u}__wrapper`, { [`${u}__wrapper--seed-in-carousel`]: le, [`${u}__wrapper--vertical`]: me }),
																children: [
																	De
																		? (0, t.FD)(t.FK, {
																				children: [
																					!le &&
																						!j &&
																						K &&
																						(0, t.Y)('div', {
																							className: `${u}__wrapper__seed-container`,
																							children: (0, t.Y)(he.o, {
																								controller: c,
																								result: K,
																								track: { impression: !1 },
																								children: (0, t.Y)(be, {
																									seedText: O,
																									seed: !0,
																									title: K.display.mappings.core?.name,
																									onCheck: (s) => {
																										s.stopPropagation(), Ne(K);
																									},
																									checked: ce.findIndex((s) => s.id == K.id) > -1,
																									icon: J,
																									hideCheckboxes: oe,
																									theme: a.theme,
																									ref: ze,
																									treePath: ne,
																									classNamePrefix: u,
																									lang: { seedText: Q.seedText },
																									children:
																										xe && c
																											? (0, R.Y)(xe, {
																													controller: c,
																													seed: !0,
																													selected: ce.findIndex((s) => s.id == K.id) > -1,
																													onProductSelect: Ne,
																													result: K,
																													treePath: ne,
																													theme: we
																														? S()(a.theme || {}, { components: { result: { customComponent: Pe } } })
																														: a.theme,
																											  })
																											: Ye
																											? null
																											: (0, t.Y)(B.Q, { ...Ve.result, controller: c, result: K }),
																								}),
																							}),
																						}),
																					(0, t.Y)('div', {
																						className: `${u}__wrapper__carousel`,
																						children: (0, t.Y)(k.FN, {
																							prevButton: nt,
																							nextButton: rt,
																							hideButtons: at,
																							loop: Fe,
																							spaceBetween: lt,
																							pagination: it,
																							breakpoints: Ue,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: me,
																							onResize: () => mt(),
																							...Ve.carousel,
																							...qe,
																							...v,
																							ref: Ze,
																							children: Qe,
																						}),
																					}),
																				],
																		  })
																		: (0, t.Y)(t.FK, { children: Qe }),
																	X &&
																		(0, t.Y)(G, {
																			ctaSlot: A,
																			cartStore: L,
																			onAddToCart: (s) => He(s),
																			ctaButtonText: ue,
																			ctaButtonSuccessText: pe,
																			ctaButtonSuccessTimeout: ke,
																			ctaIcon: fe,
																			treePath: ne,
																			classNamePrefix: u,
																			lang: {
																				ctaButtonSuccessText: Q.ctaButtonSuccessText,
																				ctaButtonText: Q.ctaButtonText,
																				ctaSubtotalTitle: Q.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!X &&
																(0, t.Y)(G, {
																	ctaSlot: A,
																	cartStore: L,
																	onAddToCart: (s) => He(s),
																	ctaButtonText: ue,
																	ctaButtonSuccessText: pe,
																	ctaButtonSuccessTimeout: ke,
																	ctaIcon: fe,
																	treePath: ne,
																	classNamePrefix: u,
																	lang: {
																		ctaButtonSuccessText: Q.ctaButtonSuccessText,
																		ctaButtonText: Q.ctaButtonText,
																		ctaSubtotalTitle: Q.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, t.Y)(Ee.l, {
														controller: c,
														children: T.map((s) => (0, t.Y)(he.o, { controller: c, result: s, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Y, p, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					f = e.n(r),
					x = e('./components/src/utilities/mergeStyles.ts');
				const S = () => (0, i.AH)({}),
					k = (0, m.PA)((B) => {
						const { children: W, className: te, internalClassName: U } = B,
							z = (0, l.v2)(W),
							R = (0, x.Z)(B, S);
						return z.length ? (0, t.Y)('div', { className: f()('ss__recommendation-profile-tracker', te, U), ...R, children: W }) : null;
					});
				e.d(p, ['l', 0, k]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(Y, p, e) {
				const t = (l) => l.replace(/([A-Z])/g, (i) => '-' + i.toLowerCase());
				e.d(p, ['b', 0, t]);
			},
			'./components/src/utilities/lazyRenderMinSize.ts'(Y, p, e) {
				const t = { minWidth: '1px', minHeight: '1px' };
				e.d(p, ['k', 0, t]);
			},
			'../../node_modules/colord/plugins/names.mjs'(Y, p, e) {
				e.d(p, { A: () => t }), e.dn(t);
				function t(l, i) {
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
						r = {};
					for (var f in m) r[m[f]] = f;
					var x = {};
					(l.prototype.toName = function (S) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var k,
							B,
							W = r[this.toHex()];
						if (W) return W;
						if (S?.closest) {
							var te = this.toRgb(),
								U = 1 / 0,
								z = 'black';
							if (!x.length) for (var R in m) x[R] = new l(m[R]).toRgb();
							for (var se in m) {
								var re = ((k = te), (B = x[se]), Math.pow(k.r - B.r, 2) + Math.pow(k.g - B.g, 2) + Math.pow(k.b - B.b, 2));
								re < U && ((U = re), (z = se));
							}
							return z;
						}
					}),
						i.string.push([
							function (S) {
								var k = S.toLowerCase(),
									B = k === 'transparent' ? '#0000' : m[k];
								return B ? new l(B).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
