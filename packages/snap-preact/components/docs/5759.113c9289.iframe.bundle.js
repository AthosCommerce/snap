'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5759],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(b, a, e) {
				const t = (r) => r.replace(/_/g, '-').toLowerCase();
				e.d(a, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(b, a, e) {
				e.d(a, { G: () => r });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function r(o, l) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(o, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(b, a, e) {
				e.d(a, { Z: () => t });
				function t(o, l) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const c = r(o, s.decimalPlaces).split('.');
					(c[0] = c[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (c[1] = (c[1] || '').padEnd(s.decimalPlaces, '0'));
					let d = c.join(s.decimalSeparator);
					return s.symbolAfter ? (d = d + s.symbol) : (d = s.symbol + d), d;
				}
				function r(o, l) {
					const s = o.toString(),
						c = s.indexOf('.'),
						d = c == -1 ? s.length : 1 + c + (l || -1);
					return s.substr(0, d);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(b, a, e) {
				e.d(a, { p: () => t });
				function t(r) {
					if (typeof r != 'string') return r;
					let o = r.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(b, a, e) {
				e.d(a, { x: () => t });
				function t(r, o, l) {
					if (typeof r != 'string' || r.length <= o) return r;
					const s = r.lastIndexOf(' ', o),
						c = s != -1 ? s : o - 1;
					return r.substr(0, c) + (l || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(b, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(d),
					u = e('../../node_modules/swiper/swiper-react.mjs'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					x = e('../../node_modules/swiper/modules/navigation.mjs'),
					R = e('../../node_modules/swiper/modules/pagination.mjs'),
					B = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					k = e('../../node_modules/swiper/modules/a11y.mjs'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					I = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useDisplaySettings.tsx'),
					Y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const ee = ({ vertical: E, theme: N }) =>
						(0, o.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: E ? '100%' : void 0,
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
					V = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					H = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					te = (0, c.PA)((E) => {
						const N = (0, W.u)(),
							ne = (0, j.LU)(),
							pe = {
								breakpoints: E.vertical ? JSON.parse(JSON.stringify(H)) : JSON.parse(JSON.stringify(V)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !E.breakpoints || !Object.keys(E.breakpoints).length ? 5 : void 0,
								slidesPerView: !E.breakpoints || !Object.keys(E.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ne,
							};
						let h = (0, O.v6)('carousel', N, pe, E),
							i;
						if (
							!(E.theme?.type == 'templates' || N?.type == 'templates') &&
							h.breakpoints &&
							(Object.keys(h.breakpoints).forEach((n) => {
								const _ = h.breakpoints[n];
								_.slidesPerView && (_.slidesPerView = Number(_.slidesPerView) || 1),
									_.slidesPerGroup && (_.slidesPerGroup = Number(_.slidesPerGroup) || 1);
							}),
							(i = (0, w.X)(h.breakpoints)),
							i && Object.keys(i).length)
						) {
							const n = p()(h?.theme || {}, i?.theme || {}, { arrayMerge: (_, Q) => Q });
							h.autoAdjustSlides &&
								h.children.length < i.slidesPerView &&
								((i.slidesPerView = h.children.length), (i.slidesPerGroup = h.children.length)),
								(h = { ...h, ...i, theme: n });
						}
						const {
								children: P,
								loop: Z,
								nextButton: re,
								prevButton: C,
								hideButtons: A,
								vertical: X,
								onInit: ie,
								onBeforeInit: K,
								onAfterInit: ae,
								onNextButtonClick: le,
								onPrevButtonClick: ce,
								onClick: z,
								disableStyles: S,
								style: ve,
								styleScript: Pe,
								themeStyleScript: ge,
								modules: fe,
								className: Ee,
								internalClassName: he,
								treePath: de,
								...G
							} = h,
							{ overrideElement: _e, shouldRenderDefault: q } = (0, Y._)('carousel', h);
						if (!q) return _e;
						let M = h.pagination,
							T = h.navigation,
							J = h.scrollbar;
						const f = { icon: { internalClassName: 'ss__carousel__icon', ...(0, y.s)({ disableStyles: S }), theme: h.theme, treePath: de } },
							me = Array.isArray(fe) ? [x.A, R.A, B.A, k.A].concat(fe) : [x.A, R.A, B.A, k.A],
							ue = me.filter((n, _) => me.indexOf(n) === _),
							D = (0, r.li)(null),
							F = (0, r.li)(null),
							L = (0, r.li)(null),
							se = (0, m.Z)(h, ee);
						(0, r.vJ)(() => {
							if (L.current) {
								const _ = L.current.querySelector('.swiper');
								_?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									_?.classList.contains('swiper-vertical') && _.classList.add('swiper-container-vertical'),
									_?.classList.contains('swiper-horizontal') && _.classList.add('swiper-container-horizontal');
							}
							oe();
						}, [E]),
							M && (typeof M == 'object' ? (M = { clickable: !0, ...M }) : (M = { clickable: !0 })),
							T &&
								(typeof T == 'object'
									? (T = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...T })
									: (T = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							J && (typeof J == 'object' ? (J = { enabled: !0, ...J }) : (J = { enabled: !0 }));
						const oe = () => {
							if (L.current) {
								const _ = L.current?.querySelectorAll('.swiper-slide-visible');
								_.forEach((Q, U) => {
									Q.classList.remove('swiper-last-visible-slide'), U == _.length - 1 && Q.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete G.breakpoints,
							P?.length
								? (0, t.Y)(I._, {
										children: (0, t.FD)('div', {
											ref: L,
											...se,
											className: s()('ss__carousel', X ? 'ss__carousel-vertical' : '', Ee, he),
											children: [
												T !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': A }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: D,
															onClick: ce && ((n) => ce(n)),
															children: C || (0, t.Y)(g.I, { icon: X ? 'angle-up' : 'angle-left', ...f.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(u.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														T &&
															n.params.navigation &&
															((n.params.navigation.prevEl = D.current ? D.current : void 0),
															(n.params.navigation.nextEl = F.current ? F.current : void 0)),
															K && K(n);
													},
													onInit: (n) => {
														ie && ie(n);
													},
													onAfterInit: (n) => {
														T &&
															n.navigation &&
															((n.navigation.onPrevClick = (_) => {
																_.preventDefault(),
																	!(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
															}),
															(n.navigation.onNextClick = (_) => {
																_.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															})),
															ae && ae(n);
													},
													onClick: (n, _) => {
														z && z(n, _);
													},
													direction: X ? 'vertical' : 'horizontal',
													loop: Z,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ue,
													...G,
													...i,
													controller: void 0,
													navigation: T,
													pagination: M,
													scrollbar: J,
													onResize: (n) => {
														G.onResize && G.onResize(), n.updateSlidesClasses(), oe();
													},
													onTransitionEnd: () => {
														G.onTransitionEnd && G.onTransitionEnd(), oe();
													},
													children: P.map((n) => (n != null ? (0, t.Y)(u.qr, { children: (0, v.Y)(n, { treePath: de }) }) : null)),
												}),
												T !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': A }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: F,
															onClick: le && ((n) => le(n)),
															children: re || (0, t.Y)(g.I, { icon: X ? 'angle-down' : 'angle-right', ...f.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(a, ['FN', 0, te, 'K', 0, V, 'og', 0, H]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(b, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					c = e.n(s),
					d = e('./components/src/components/Atoms/Image/Image.tsx'),
					p = e('./components/src/components/Atoms/Price/Price.tsx'),
					u = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					B = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					k = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					I = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					W = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					j = e('./components/src/components/Atoms/Button/Button.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(w),
					ee = e('./components/src/hooks/useLang.tsx'),
					V = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					H = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const te = () =>
						(0, l.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					E = (0, o.PA)((N) => {
						const ne = (0, v.u)(),
							pe = (0, y.LU)(),
							h = {
								layout: k.V.grid,
								treePath: pe,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							i = (0, x.v6)('result', ne, h, N),
							{
								result: P,
								hideBadge: Z,
								hideTitle: re,
								hidePricing: C,
								hideImage: A,
								detailSlot: X,
								fallback: ie,
								disableStyles: K,
								className: ae,
								internalClassName: le,
								layout: ce,
								onClick: z,
								controller: S,
								hideVariantSelections: ve,
								hideAddToCartButton: Pe,
								onAddToCartClick: ge,
								addToCartButtonText: fe,
								addToCartButtonSuccessText: Ee,
								addToCartButtonSuccessTimeout: he,
								hideRating: de,
								hideQuickviewButton: G,
								onQuickviewClick: _e,
								trackingRef: q,
								treePath: M,
							} = i,
							{ overrideElement: T, shouldRenderDefault: J } = (0, V._)('result', {
								...i,
								customComponent: i.customComponent && i.customComponent !== 'Result' ? i.customComponent : void 0,
							});
						if (!J) return T;
						const f = P?.display?.mappings.core || P?.mappings?.core,
							[me, ue] = (0, r.J0)(!1),
							D = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: K }), theme: i.theme, treePath: M },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: P,
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: P,
									controller: S,
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: f?.name || '',
									src: f?.imageUrl || '',
									...(0, m.s)({ disableStyles: K, fallback: ie }),
									theme: i.theme,
									treePath: M,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: f?.rating || 0,
									count: Number(f?.ratingCount || 0),
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (U) => {
										_e && _e(U, P), S?.quickview(P);
									},
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (U) => {
										ue(!0), ge && ge(U, P), S?.addToCart([P]), setTimeout(() => ue(!1), he);
									},
									...(0, m.s)({ disableStyles: K }),
									theme: i.theme,
									treePath: M,
								},
							};
						let F = f?.name;
						i.truncateTitle && (F = B.x(f?.name || '', i.truncateTitle.limit, i.truncateTitle.append));
						const L = (0, R.Z)(i, te),
							se = { addToCartButtonText: { value: me ? Ee : fe }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							oe = Y()(se, i.lang || {}),
							n = (0, ee.u)(oe, { result: P, controller: S }, { activeBreakpoint: ne?.activeBreakpoint }),
							_ = !!(f?.msrp && f?.price && f?.price < f?.msrp),
							Q = S?.store?.config?.asyncState?.product?.price ? P.state.priceFetched : !0;
						return f
							? (0, t.Y)(u._, {
									children: (0, t.FD)('article', {
										...L,
										className: c()('ss__result', `ss__result--${ce}`, { 'ss__result--sale': _ }, ae, le),
										ref: q,
										children: [
											!A &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: f.url,
															onClick: (U) => {
																z && z(U);
															},
															children: Z
																? (0, t.Y)(d._, { ...D.image })
																: (0, t.Y)(I.Q, { ...D.overlayBadge, controller: S, children: (0, t.Y)(d._, { ...D.image }) }),
														}),
														!G && S?.quickviewManager && (0, t.Y)(j.$, { ...D.quickviewButton, ...n.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Z && (0, t.Y)(g.W, { ...D.calloutBadge, controller: S }),
													!re &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: f.url,
																onClick: (U) => {
																	z && z(U);
																},
																dangerouslySetInnerHTML: { __html: F || '' },
															}),
														}),
													!de && (0, t.Y)(W.G, { ...D.rating }),
													!C && Q && f.price && f.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: _
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(p.g, { ...D.price, value: f.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(p.g, { ...D.price, value: f.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(p.g, { ...D.price, value: f.price }),
														  })
														: null,
													(0, O.Y)(X, { result: P, treePath: M }),
													!ve && P.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: P.variants?.selections.map((U) => (0, t.Y)(H.m, { ...D.variantSelection, type: U.type, selection: U })),
														  })
														: null,
													!Pe &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(j.$, { ...D.button, ...n.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(a, ['Q', 0, E]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(b, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(d),
					u = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					v = e('./components/src/components/Molecules/Result/Result.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/utilities/lazyRenderMinSize.ts'),
					B = e('./components/src/hooks/useIntersection.tsx'),
					k = e('./components/src/hooks/useComponent.tsx'),
					g = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					j = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useDisplaySettings.tsx'),
					Y = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					ee = e('./components/src/hooks/useLang.tsx'),
					V = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const H = ({ vertical: E }) =>
						(0, o.AH)({ ...R.k, height: E ? '100%' : void 0, '.ss__result__image-wrapper': { height: E ? '85%' : void 0 } }),
					te = (0, c.PA)((E) => {
						const N = (0, I.u)(),
							ne = (0, j.LU)(),
							pe = {
								breakpoints: E.vertical ? JSON.parse(JSON.stringify(u.og)) : JSON.parse(JSON.stringify(u.K)),
								pagination: !1,
								loop: !0,
								title: E.controller?.store?.profile?.display?.templateParameters?.title,
								description: E.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: ne,
							},
							h = { name: E.controller?.store?.profile?.tag?.toLowerCase(), ...E };
						let i = (0, m.v6)('recommendation', N, pe, h),
							P;
						!(E.theme?.type == 'templates' || N?.type == 'templates') &&
							i.breakpoints &&
							((P = (0, w.X)(i.breakpoints)), P && Object.keys(P).length && (i = { ...i, ...P }));
						const {
								title: Z,
								description: re,
								controller: C,
								children: A,
								loop: X,
								results: ie,
								pagination: K,
								nextButton: ae,
								prevButton: le,
								hideButtons: ce,
								disableStyles: z,
								className: S,
								internalClassName: ve,
								style: Pe,
								styleScript: ge,
								themeStyleScript: fe,
								lazyRender: Ee,
								vertical: he,
								hideTitle: de,
								treePath: G,
								..._e
							} = i,
							q = i.resultComponent,
							M = (0, W.uk)(),
							T = typeof q == 'string',
							J = T ? q : '',
							f = M?.templates?.library.import.component.result || {},
							{ ComponentOverride: me, shouldWaitForNamedOverride: ue } = (0, k.x)(f, T ? J : void 0),
							D = T ? me : q,
							F = { enabled: !0, offset: '10%', ...Ee };
						if (!C || C.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const L = ie || C.store?.results;
						if (Array.isArray(A) && A.length !== L.length)
							return (
								C.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const se = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, O.s)({ disableStyles: z, vertical: he }),
									theme: i?.theme,
									treePath: G,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, O.s)({ disableStyles: z }), theme: i?.theme, treePath: G },
							},
							oe = (0, x.Z)(i, H),
							[n, _] = (0, r.J0)(!1),
							Q = (0, r.li)(null);
						(!F?.enabled || (0, B.v)(Q, `${F.offset} 0px ${F.offset} 0px`, !0)) && _(!0);
						const Me = { titleText: { value: `${Z}` } },
							De = p()(Me, i.lang || {}),
							Ce = (0, ee.u)(De, {}, { activeBreakpoint: N?.activeBreakpoint });
						return (Array.isArray(A) && A.length) || L?.length
							? (0, t.Y)(g._, {
									children: (0, t.Y)('div', {
										...oe,
										style: z ? R.k : void 0,
										className: s()('ss__recommendation', S, ve),
										ref: Q,
										children: n
											? (0, t.FD)(Y.l, {
													controller: C,
													children: [
														Z && !de && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...Ce.titleText?.all, children: Z }),
														re && (0, t.Y)('p', { className: 'ss__recommendation__description', children: re }),
														(0, t.Y)(u.FN, {
															prevButton: le,
															nextButton: ae,
															hideButtons: ce,
															loop: X,
															pagination: K,
															...se.carousel,
															..._e,
															children:
																Array.isArray(A) && A.length
																	? A.map(($, Oe) => (0, t.Y)(V.o, { controller: C, result: L[Oe], children: $ }))
																	: L.map(($) =>
																			(0, t.Y)(V.o, {
																				controller: C,
																				result: $,
																				children:
																					D && C
																						? (0, y.Y)(D, {
																								controller: C,
																								result: $,
																								treePath: se.result.treePath,
																								theme: T ? p()(i.theme || {}, { components: { result: { customComponent: q } } }) : i.theme,
																						  })
																						: ue
																						? null
																						: (0, t.Y)(v.Q, { ...se.result, controller: C, result: $ }, $.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(Y.l, {
													controller: C,
													children:
														Array.isArray(A) && A.length
															? A.map(($, Oe) => (0, t.Y)(V.o, { controller: C, result: L[Oe], children: (0, t.Y)(t.FK, {}) }))
															: L.map(($) => (0, t.Y)(V.o, { controller: C, result: $, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(a, ['A', 0, te]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(b, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					c = e.n(s),
					d = e('./components/src/utilities/mergeStyles.ts');
				const p = () => (0, o.AH)({}),
					u = (0, l.PA)((v) => {
						const { children: y, className: O, internalClassName: m } = v,
							x = (0, r.v2)(y),
							R = (0, d.Z)(v, p);
						return x.length ? (0, t.Y)('div', { className: c()('ss__recommendation-profile-tracker', O, m), ...R, children: y }) : null;
					});
				e.d(a, ['l', 0, u]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(b, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/createImpressionObserver.ts');
				const u = { ResultTracker: () => (0, r.AH)({}) },
					v = (0, o.PA)((y) => {
						const O = (0, c.u)(),
							m = (0, d.v6)('resultTracker', O, {}, y),
							x = { impression: !0, click: !0 },
							{ children: R, result: B, track: k, controller: g, className: I, internalClassName: W, disableStyles: j, style: w } = m,
							Y = { ...x, ...k },
							{ ref: ee, inViewport: V } = (0, p.Q)();
						V && Y.impression && g?.track.product.impression(B);
						const H = {};
						return (
							j ? w && (H.css = [w]) : (H.css = [u.ResultTracker(), w]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${g?.type}-result-tracker`, I, W),
								onClick: (te) => {
									Y.click && g?.track.product.click(te, B);
								},
								ref: ee,
								...H,
								children: R,
							})
						);
					});
				e.d(a, ['o', 0, v]);
			},
			'./components/src/hooks/useIntersection.tsx'(b, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (o, l = '0px', s = !1) => {
					const [c, d] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const p = new IntersectionObserver(
								([u]) => {
									d(u.isIntersecting), s && u.isIntersecting && p.unobserve(o.current);
								},
								{ rootMargin: l }
							);
							return (
								o.current && p.observe(o.current),
								() => {
									p.unobserve(o.current);
								}
							);
						}, []),
						c
					);
				};
				e.d(a, ['v', 0, r]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(b, a, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 250,
					o = (s, c = {}) => {
						const { rootMargin: d = '0px', fireOnce: p = !1, threshold: u = 0, minVisibleTime: v = 0 } = c,
							[y, O] = (0, t.J0)(!1),
							m = (0, t.li)(null),
							x = (0, t.li)(null),
							[R, B] = (0, t.J0)(0),
							k = (0, t.hb)((g) => {
								(s.current = g), B((I) => I + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								O(!1);
								let g = null,
									I = null;
								if (!window.IntersectionObserver || !s.current) return;
								const W = () => {
										I && (window.clearInterval(I), (I = null));
									},
									j = () => {
										v > 0
											? ((x.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													O(!0), p && s.current && g && g.unobserve(s.current);
											  }, v)))
											: (O(!0), p && s.current && g && g.unobserve(s.current));
									},
									w = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (x.current = null), O(!1);
									};
								return (
									(g = new IntersectionObserver(
										([Y]) => {
											Y.isIntersecting
												? s.current && l(s.current)
													? (W(), j())
													: (w(),
													  I ||
															(I = window.setInterval(() => {
																if (!s.current) {
																	W();
																	return;
																}
																l(s.current) && (W(), j());
															}, r)))
												: (W(), w());
										},
										{ rootMargin: d, threshold: u }
									)),
									s.current && g.observe(s.current),
									() => {
										O(!1), W(), m.current && window.clearTimeout(m.current), g && s.current && g.unobserve(s.current);
									}
								);
							}, [s, R]),
							{ inViewport: y, updateRef: k }
						);
					};
				function l(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(a, ['v', 0, o]);
			},
			'./components/src/types.ts'(b, a, e) {
				e.d(a, { Q: () => r, V: () => t });
				var t = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(t || {}),
					r = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(r || {});
			},
			'./components/src/utilities/createImpressionObserver.ts'(b, a, e) {
				e.d(a, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					l = 1e3;
				function s(c) {
					const d = (0, t.li)(null),
						{ inViewport: p, updateRef: u } = (0, r.v)(d, { fireOnce: !0, threshold: o, minVisibleTime: l, ...c });
					return { ref: d, inViewport: p, updateRef: u };
				}
			},
			'./components/src/utilities/lazyRenderMinSize.ts'(b, a, e) {
				const t = { minWidth: '1px', minHeight: '1px' };
				e.d(a, ['k', 0, t]);
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(b, a, e) {
				e.r(a), e.d(a, { Recommendation: () => t.A });
				var t = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(b, a, e) {
				e.d(a, { A: () => t }), e.dn(t);
				function t(r, o) {
					var l = {
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
						s = {};
					for (var c in l) s[l[c]] = c;
					var d = {};
					(r.prototype.toName = function (p) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var u,
							v,
							y = s[this.toHex()];
						if (y) return y;
						if (p?.closest) {
							var O = this.toRgb(),
								m = 1 / 0,
								x = 'black';
							if (!d.length) for (var R in l) d[R] = new r(l[R]).toRgb();
							for (var B in l) {
								var k = ((u = O), (v = d[B]), Math.pow(u.r - v.r, 2) + Math.pow(u.g - v.g, 2) + Math.pow(u.b - v.b, 2));
								k < m && ((m = k), (x = B));
							}
							return x;
						}
					}),
						o.string.push([
							function (p) {
								var u = p.toLowerCase(),
									v = u === 'transparent' ? '#0000' : l[u];
								return v ? new r(v).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
