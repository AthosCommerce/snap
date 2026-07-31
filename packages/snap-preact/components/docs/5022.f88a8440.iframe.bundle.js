'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5022],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(H, v, e) {
				const t = (i) => i.replace(/_/g, '-').toLowerCase();
				e.d(v, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(H, v, e) {
				e.d(v, { G: () => i });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function i(_, f) {
					const r = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...f };
					return (0, t.Z)(_, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(H, v, e) {
				e.d(v, { Z: () => t });
				function t(_, f) {
					const r = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...f };
					if (typeof _ != 'number' || Number.isNaN(_)) return;
					const h = i(_, r.decimalPlaces).split('.');
					(h[0] = h[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + r.thousandsSeparator)),
						r.decimalPlaces > 0 && r.padDecimalPlaces && (h[1] = (h[1] || '').padEnd(r.decimalPlaces, '0'));
					let P = h.join(r.decimalSeparator);
					return r.symbolAfter ? (P = P + r.symbol) : (P = r.symbol + P), P;
				}
				function i(_, f) {
					const r = _.toString(),
						h = r.indexOf('.'),
						P = h == -1 ? r.length : 1 + h + (f || -1);
					return r.substr(0, P);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(H, v, e) {
				e.d(v, { p: () => t });
				function t(i) {
					if (typeof i != 'string') return i;
					let _ = i.toLowerCase();
					return (_ = _.replace(/[^\w\s]/g, '').trim()), (_ = _.replace(/\s/g, '-')), _;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(H, v, e) {
				e.d(v, { x: () => t });
				function t(i, _, f) {
					if (typeof i != 'string' || i.length <= _) return i;
					const r = i.lastIndexOf(' ', _),
						h = r != -1 ? r : _ - 1;
					return i.substr(0, h) + (f || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(H, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					r = e.n(f),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					D = e('../../node_modules/swiper/swiper-react.mjs'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					j = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					k = e('../../node_modules/swiper/modules/navigation.mjs'),
					W = e('../../node_modules/swiper/modules/pagination.mjs'),
					V = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					Z = e('../../node_modules/swiper/modules/a11y.mjs'),
					ee = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					xe = e('./components/src/providers/cache.tsx'),
					he = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ae = e('./components/src/providers/treePath.tsx'),
					le = e('./components/src/hooks/useDisplaySettings.tsx'),
					ie = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const ge = ({ vertical: L, theme: se }) =>
						(0, _.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: L ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: se?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: se?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: se?.variables?.colors?.primary || '#000' },
							},
						}),
					ce = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					te = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ve = (0, h.PA)((L) => {
						const se = (0, he.u)(),
							Oe = (0, ae.LU)(),
							we = {
								breakpoints: L.vertical ? JSON.parse(JSON.stringify(te)) : JSON.parse(JSON.stringify(ce)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !L.breakpoints || !Object.keys(L.breakpoints).length ? 5 : void 0,
								slidesPerView: !L.breakpoints || !Object.keys(L.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: Oe,
							};
						let b = (0, Y.v6)('carousel', se, we, L),
							p;
						if (
							!(L.theme?.type == 'templates' || se?.type == 'templates') &&
							b.breakpoints &&
							(Object.keys(b.breakpoints).forEach((s) => {
								const l = b.breakpoints[s];
								l.slidesPerView && (l.slidesPerView = Number(l.slidesPerView) || 1),
									l.slidesPerGroup && (l.slidesPerGroup = Number(l.slidesPerGroup) || 1);
							}),
							(p = (0, le.X)(b.breakpoints)),
							p && Object.keys(p).length)
						) {
							const s = C()(b?.theme || {}, p?.theme || {}, { arrayMerge: (l, Se) => Se });
							b.autoAdjustSlides &&
								b.children.length < p.slidesPerView &&
								((p.slidesPerView = b.children.length), (p.slidesPerGroup = b.children.length)),
								(b = { ...b, ...p, theme: s });
						}
						const {
								children: c,
								loop: g,
								nextButton: R,
								prevButton: E,
								hideButtons: G,
								vertical: T,
								onInit: a,
								onBeforeInit: m,
								onAfterInit: x,
								onNextButtonClick: n,
								onPrevButtonClick: y,
								onClick: u,
								disableStyles: A,
								style: z,
								styleScript: K,
								themeStyleScript: w,
								modules: F,
								className: oe,
								internalClassName: ne,
								treePath: Q,
								...U
							} = b,
							{ overrideElement: $, shouldRenderDefault: Me } = (0, ie._)('carousel', b);
						if (!Me) return $;
						let X = b.pagination,
							d = b.navigation,
							J = b.scrollbar;
						const de = { icon: { internalClassName: 'ss__carousel__icon', ...(0, j.s)({ disableStyles: A }), theme: b.theme, treePath: Q } },
							I = Array.isArray(F) ? [k.A, W.A, V.A, Z.A].concat(F) : [k.A, W.A, V.A, Z.A],
							Ce = I.filter((s, l) => I.indexOf(s) === l),
							Pe = (0, i.li)(null),
							me = (0, i.li)(null),
							ue = (0, i.li)(null),
							Ae = (0, O.Z)(b, ge);
						(0, i.vJ)(() => {
							if (ue.current) {
								const l = ue.current.querySelector('.swiper');
								l?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									l?.classList.contains('swiper-vertical') && l.classList.add('swiper-container-vertical'),
									l?.classList.contains('swiper-horizontal') && l.classList.add('swiper-container-horizontal');
							}
							be();
						}, [L]),
							X && (typeof X == 'object' ? (X = { clickable: !0, ...X }) : (X = { clickable: !0 })),
							d &&
								(typeof d == 'object'
									? (d = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...d })
									: (d = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							J && (typeof J == 'object' ? (J = { enabled: !0, ...J }) : (J = { enabled: !0 }));
						const be = () => {
							if (ue.current) {
								const l = ue.current?.querySelectorAll('.swiper-slide-visible');
								l.forEach((Se, ze) => {
									Se.classList.remove('swiper-last-visible-slide'), ze == l.length - 1 && Se.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete U.breakpoints,
							c?.length
								? (0, t.Y)(xe._, {
										children: (0, t.FD)('div', {
											ref: ue,
											...Ae,
											className: r()('ss__carousel', T ? 'ss__carousel-vertical' : '', oe, ne),
											children: [
												d !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': G }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: Pe,
															onClick: y && ((s) => y(s)),
															children: E || (0, t.Y)(ee.I, { icon: T ? 'angle-up' : 'angle-left', ...de.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(D.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (s) => {
														d &&
															s.params.navigation &&
															((s.params.navigation.prevEl = Pe.current ? Pe.current : void 0),
															(s.params.navigation.nextEl = me.current ? me.current : void 0)),
															m && m(s);
													},
													onInit: (s) => {
														a && a(s);
													},
													onAfterInit: (s) => {
														d &&
															s.navigation &&
															((s.navigation.onPrevClick = (l) => {
																l.preventDefault(),
																	!(s.isBeginning && !s.params.loop && !s.params.rewind) && (s.slidePrev(), s.emit('navigationPrev'));
															}),
															(s.navigation.onNextClick = (l) => {
																l.preventDefault(), !(s.isEnd && !s.params.loop && !s.params.rewind) && (s.slideNext(), s.emit('navigationNext'));
															})),
															x && x(s);
													},
													onClick: (s, l) => {
														u && u(s, l);
													},
													direction: T ? 'vertical' : 'horizontal',
													loop: g,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Ce,
													...U,
													...p,
													controller: void 0,
													navigation: d,
													pagination: X,
													scrollbar: J,
													onResize: (s) => {
														U.onResize && U.onResize(), s.updateSlidesClasses(), be();
													},
													onTransitionEnd: () => {
														U.onTransitionEnd && U.onTransitionEnd(), be();
													},
													children: c.map((s) => (s != null ? (0, t.Y)(D.qr, { children: (0, B.Y)(s, { treePath: Q }) }) : null)),
												}),
												d !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': G }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: me,
															onClick: n && ((s) => n(s)),
															children: R || (0, t.Y)(ee.I, { icon: T ? 'angle-down' : 'angle-right', ...de.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(v, ['FN', 0, ve, 'K', 0, ce, 'og', 0, te]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(H, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					h = e.n(r),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					C = e('./components/src/components/Atoms/Price/Price.tsx'),
					D = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					Y = e('./components/src/utilities/cloneWithProps.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					V = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					Z = e('./components/src/types.ts'),
					ee = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					xe = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					he = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					ae = e('./components/src/components/Atoms/Button/Button.tsx'),
					le = e('../../node_modules/deepmerge/dist/cjs.js'),
					ie = e.n(le),
					ge = e('./components/src/hooks/useLang.tsx'),
					ce = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					te = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const ve = () =>
						(0, f.AH)({
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
					L = (0, _.PA)((se) => {
						const Oe = (0, B.u)(),
							we = (0, j.LU)(),
							b = {
								layout: Z.V.grid,
								treePath: we,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							p = (0, k.v6)('result', Oe, b, se),
							{
								result: c,
								hideBadge: g,
								hideTitle: R,
								hidePricing: E,
								hideImage: G,
								detailSlot: T,
								fallback: a,
								disableStyles: m,
								className: x,
								internalClassName: n,
								layout: y,
								onClick: u,
								controller: A,
								hideVariantSelections: z,
								hideAddToCartButton: K,
								onAddToCartClick: w,
								addToCartButtonText: F,
								addToCartButtonSuccessText: oe,
								addToCartButtonSuccessTimeout: ne,
								hideRating: Q,
								trackingRef: U,
								treePath: $,
							} = p,
							{ overrideElement: Me, shouldRenderDefault: X } = (0, ce._)('result', {
								...p,
								customComponent: p.customComponent && p.customComponent !== 'Result' ? p.customComponent : void 0,
							});
						if (!X) return Me;
						const d = c?.display?.mappings.core || c?.mappings?.core,
							[J, de] = (0, i.J0)(!1),
							I = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, O.s)({ disableStyles: m }),
									theme: p.theme,
									treePath: $,
								},
								price: { internalClassName: 'ss__result__price', ...(0, O.s)({ disableStyles: m }), theme: p.theme, treePath: $ },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: c,
									...(0, O.s)({ disableStyles: m }),
									theme: p.theme,
									treePath: $,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: c,
									controller: A,
									...(0, O.s)({ disableStyles: m }),
									theme: p.theme,
									treePath: $,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: d?.name || '',
									src: d?.imageUrl || '',
									...(0, O.s)({ disableStyles: m, fallback: a }),
									theme: p.theme,
									treePath: $,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: d?.rating || 0,
									count: Number(d?.ratingCount || 0),
									...(0, O.s)({ disableStyles: m }),
									theme: p.theme,
									treePath: $,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (l) => {
										de(!0), w && w(l, c), A?.addToCart([c]), setTimeout(() => de(!1), ne);
									},
									...(0, O.s)({ disableStyles: m }),
									theme: p.theme,
									treePath: $,
								},
							};
						let Ce = d?.name;
						p.truncateTitle && (Ce = V.x(d?.name || '', p.truncateTitle.limit, p.truncateTitle.append));
						const Pe = (0, W.Z)(p, ve),
							me = { addToCartButtonText: { value: J ? oe : F } },
							ue = ie()(me, p.lang || {}),
							Ae = (0, ge.u)(ue, { result: c, controller: A }, { activeBreakpoint: Oe?.activeBreakpoint }),
							be = !!(d?.msrp && d?.price && d?.price < d?.msrp),
							s = A?.store?.config?.asyncState?.product?.price ? c.state.priceFetched : !0;
						return d
							? (0, t.Y)(D._, {
									children: (0, t.FD)('article', {
										...Pe,
										className: h()('ss__result', `ss__result--${y}`, { 'ss__result--sale': be }, x, n),
										ref: U,
										children: [
											!G &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: d.url,
														onClick: (l) => {
															u && u(l);
														},
														children: g
															? (0, t.Y)(P._, { ...I.image })
															: (0, t.Y)(xe.Q, { ...I.overlayBadge, controller: A, children: (0, t.Y)(P._, { ...I.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!g && (0, t.Y)(ee.W, { ...I.calloutBadge, controller: A }),
													!R &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: d.url,
																onClick: (l) => {
																	u && u(l);
																},
																dangerouslySetInnerHTML: { __html: Ce || '' },
															}),
														}),
													!Q && (0, t.Y)(he.G, { ...I.rating }),
													!E && s && d.price && d.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: be
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(C.g, { ...I.price, value: d.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(C.g, { ...I.price, value: d.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(C.g, { ...I.price, value: d.price }),
														  })
														: null,
													(0, Y.Y)(T, { result: c, treePath: $ }),
													!z && c.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: c.variants?.selections.map((l) => (0, t.Y)(te.m, { ...I.variantSelection, type: l.type, selection: l })),
														  })
														: null,
													!K &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(ae.$, { ...I.button, ...Ae.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(v, ['Q', 0, L]);
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(H, v, e) {
				e.d(v, { g: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					f = e.n(_),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					D = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					B = e('./components/src/components/Molecules/Result/Result.tsx'),
					j = e('./components/src/utilities/mergeProps.ts'),
					Y = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					k = e('./components/src/utilities/cloneWithProps.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					V = e('./components/src/providers/treePath.tsx'),
					Z = e('./components/src/providers/snap.tsx'),
					ee = e('./components/src/providers/cache.tsx'),
					xe = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					ae = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					le = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					ie = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ge = e('./components/src/hooks/useLang.tsx');
				const ce = (0, h.PA)((c) => {
					const g = (0, W.u)(),
						R = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						E = (0, j.v6)('bundleSelector', g, R, c),
						{
							children: G,
							checked: T,
							icon: a,
							seedText: m,
							seed: x,
							hideCheckboxes: n,
							onCheck: y,
							title: u,
							className: A,
							internalClassName: z,
							treePath: K,
							classNamePrefix: w,
						} = E,
						F = K?.lastIndexOf(' '),
						oe = F !== -1 ? K?.slice(0, F) : K,
						ne = {
							icon: { name: 'bundle-selector', internalClassName: `${w}__wrapper__selector__icon`, size: 15, theme: E?.theme, treePath: oe },
							checkbox: {
								internalClassName: `${w}__wrapper__selector__result-wrapper__checkbox`,
								checked: T,
								size: '18px',
								onClick: y,
								lang: { checkbox: { attributes: { 'aria-label': T ? `remove product from bundle ${u}` : `add product to bundle ${u}` } } },
								theme: E?.theme,
								treePath: oe,
							},
						},
						Q = C()({}, E.lang || {}),
						U = (0, ge.u)(Q, {}, { activeBreakpoint: g?.activeBreakpoint });
					return (0, t.FD)('div', {
						className: f()(
							`${w}__wrapper__selector`,
							T ? `${w}__wrapper__selector--selected` : '',
							m || x ? `${w}__wrapper__selector--seed` : '',
							A,
							z
						),
						children: [
							(0, t.FD)('div', {
								className: `${w}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, t.Y)(le.S, { ...ne.checkbox }),
									m && (0, t.Y)('div', { className: `${w}__wrapper__selector__result-wrapper__seed-badge`, ...U.seedText?.all }),
									G,
								],
							}),
							a ? (0, t.Y)(ie.I, { ...ne.icon, ...(typeof a == 'string' ? { icon: a } : a) }) : void 0,
						],
					});
				});
				var te = e('./components/src/components/Atoms/Button/Button.tsx'),
					ve = e('./components/src/components/Atoms/Price/Price.tsx');
				const L = (0, h.PA)((c) => {
					const g = { ...c };
					g.onAddToCart = async (w) => {
						await c.onAddToCart(w), u(!0), setTimeout(() => u(!1), c.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: R,
							cartStore: E,
							onAddToCart: G,
							ctaIcon: T,
							ctaButtonText: a,
							ctaButtonSuccessText: m,
							treePath: x,
							classNamePrefix: n,
						} = g,
						[y, u] = (0, r.J0)(!1);
					g.addedToCart = y;
					const A = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: g?.theme, treePath: x },
							subtotalStrike: { name: 'bundle-msrp', theme: g?.theme, treePath: x },
							subtotalPrice: { name: 'bundle-price', theme: g?.theme, treePath: x },
							button: { theme: g?.theme, treePath: x },
						},
						z = C()({}, g.lang || {}),
						K = (0, ge.u)(z, { cartStore: E }, { activeBreakpoint: g?.theme?.activeBreakpoint });
					return (0, t.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: R
							? (0, k.Y)(R, g)
							: (0, t.FD)(t.FK, {
									children: [
										(0, t.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												T
													? (0, t.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(ie.I, { ...A.icon, ...(typeof T == 'string' ? { icon: T } : T) }),
													  })
													: null,
												(0, t.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...K.ctaSubtotalTitle?.all }),
												(0, t.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														E.msrp && E.msrp !== E.price
															? (0, t.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(ve.g, { ...A.subtotalStrike, lineThrough: !0, value: E.msrp })],
															  })
															: null,
														(0, t.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(ve.g, { ...A.subtotalPrice, value: E.price }),
														}),
													],
												}),
											],
										}),
										(0, t.Y)(te.$, {
											...A.button,
											internalClassName: f()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: y }),
											'aria-live': y,
											onClick: (w) => G(w),
											...(y ? K.ctaButtonSuccessText?.all : K.ctaButtonText?.all),
											children: y ? m : a,
										}),
									],
							  }),
					});
				});
				var se = e('./components/src/hooks/useComponent.tsx'),
					Oe = e('./components/src/hooks/useIntersection.tsx'),
					we = e('./components/src/utilities/componentNameToClassName.ts');
				const b = ({ vertical: c, separatorIcon: g, carousel: R, ctaInline: E, hasSeed: G, hideSeed: T, carouselEnabled: a, limit: m, alias: x }) => {
						let n = 'ss__recommendation-bundle';
						x && (n = `ss__${(0, we.b)(x)}`);
						const y = R?.slidesPerView;
						return (0, i.AH)({
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${c ? '100%' : 'auto'}`, margin: `${g ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: c ? '100%' : `calc(100% / ${y + (E ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: c ? '100%' : `${E ? `calc(100% / ${(a ? y : m || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: c ? '100%' : `calc(calc(100% / ${y + (E ? 1 : 0)}) * ${y - (G && !T ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: c ? '100%' : `calc(100% / ${R?.slidesPerView + (E ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: c ? '100%' : `calc(calc(100% / ${R?.slidesPerView + (E ? 1 : 0)}) * ${R?.slidesPerView})`,
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
									margin: `0px ${5 + (Number(R?.spaceBetween) || 0)}px`,
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
					p = (0, h.PA)((c) => {
						const g = (0, W.u)(),
							R = (0, V.LU)(),
							G = {
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
								title: c.controller?.store?.profile?.display?.templateParameters?.title,
								description: c.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: R,
							},
							T = { name: c.controller?.store?.profile?.tag?.toLowerCase(), ...c };
						let a = (0, j.v6)(T.alias || 'recommendationBundle', g, G, T),
							m = 'ss__recommendation-bundle';
						a.alias && (m = `ss__${(0, we.b)(a.alias)}`);
						let x;
						if (!(c.theme?.type == 'templates' || g?.type == 'templates') && ((x = (0, xe.X)(a.breakpoints)), x && Object.keys(x).length)) {
							const o = C()(a?.theme || {}, x?.theme || {}, { arrayMerge: (S, M) => M });
							a = { ...a, ...x, theme: o };
						}
						const {
								title: n,
								description: y,
								controller: u,
								breakpoints: A,
								results: z,
								carousel: K,
								preselectedCount: w,
								separatorIcon: F,
								hideCheckboxes: oe,
								limit: ne,
								seedText: Q,
								vertical: U,
								onAddToCart: $,
								separatorIconSeedOnly: Me,
								ctaSlot: X,
								hideSeed: d,
								ctaButtonText: J,
								ctaButtonSuccessText: de,
								ctaButtonSuccessTimeout: I,
								disableStyles: Ce,
								ctaIcon: Pe,
								ctaInline: me,
								hideSeedText: ue,
								lazyRender: Ae,
								className: be,
								internalClassName: s,
								alias: l,
								style: Se,
								styleScript: ze,
								themeStyleScript: ft,
								treePath: Ee,
								...qe
							} = a,
							Re = a.resultComponent,
							et = (0, Z.uk)(),
							Ie = typeof Re == 'string',
							tt = Ie ? Re : '',
							st = et?.templates?.library.import.component.result || {},
							{ ComponentOverride: ot, shouldWaitForNamedOverride: Ke } = (0, se.x)(st, Ie ? tt : void 0),
							Ne = Ie ? ot : Re,
							Ue = { enabled: !0, offset: '10%', ...Ae },
							ke = { enabled: !0, loop: !1, spaceBetween: 10, ...K },
							{ seedInCarousel: Te, prevButton: nt, nextButton: rt, hideButtons: at, loop: Fe, spaceBetween: lt, pagination: it } = ke,
							Le = ke.enabled;
						if (!u || u.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let N = z || u.store?.results;
						ne && (N = N.slice(0, d && N.filter((o) => o.bundleSeed == !0).length ? ne + 1 : ne));
						const q = u.store.cart;
						if (!q) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(z && z.length) && !u.store?.results?.length) return u.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const re = z ? z.filter((o) => o.bundleSeed == !0).pop() : u.store?.results?.filter((o) => o.bundleSeed == !0).pop(),
							ct = l == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							$e = {
								carousel: {
									loop: Fe,
									internalClassName: 'ss__recommendation__carousel',
									...(0, Y.s)({ disableStyles: Ce }),
									theme: a?.theme,
									treePath: Ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...ct, ...(0, Y.s)({ disableStyles: Ce }), theme: a?.theme, treePath: Ee },
							},
							Ye = !!N.filter((o) => o.bundleSeed == !0).length;
						let ye = a.carousel?.slidesPerView || a.slidesPerView;
						ye ? N.length < Number(ye) && (ye = N.length) : (ye = 2);
						const dt = (0, O.Z)({ ...a, carousel: { ...ke, slidesPerView: ye }, hasSeed: Ye, carouselEnabled: Le }, b),
							Je = typeof w == 'number' ? w : Le ? ye : N.length;
						(0, r.vJ)(() => {
							q.reset(),
								Je &&
									N?.forEach((o, S) => {
										S < Number(Je) && q.addItems([o]);
									});
						}, [N.length]);
						const Be = q.items,
							Ve = { ...A };
						if (Le) {
							const o = (S) => {
								const M = S?.slidesPerView || S.slidesPerView || 2,
									pe = S?.slidesPerGroup || S.slidesPerGroup || 2;
								let fe = M,
									De = pe;
								const We = !Ye || Te ? N.length : N.length - 1;
								return (
									We && (We >= M ? ((fe = M - (!Te && Ye ? 1 : 0)), Te || (De = pe - 1 || 1)) : ((fe = We), (De = We))),
									{ slidesPerView: fe, slidesPerGroup: De }
								);
							};
							if (!(c.theme?.type == 'templates' || g?.type == 'templates'))
								Object.keys(a.breakpoints).forEach((S) => {
									const M = a.breakpoints[S],
										{ slidesPerView: pe, slidesPerGroup: fe } = o(M);
									Ve[S] = { ...Ve[S], slidesPerView: pe, slidesPerGroup: fe };
								});
							else {
								const { slidesPerView: S, slidesPerGroup: M } = o({ ...ke, slidesPerView: ye });
								x = { ...ke, slidesPerView: S, slidesPerGroup: M };
							}
						}
						const je = (o) => {
								o && (Be.findIndex((M) => M.id == o.id) > -1 ? (q.removeItems([o]), q.items.length == 0 && re && q.items.push(re)) : q.addItems([o]));
							},
							He = async (o) => {
								await u.addToCart(Be), $ && (await $(o, Be));
							},
							mt = () => {
								if (Ge.current) {
									const o = Ge.current?.base,
										pe = Ze.current?.base?.querySelector(`.swiper-slide-visible .${m}__wrapper__selector`)?.offsetWidth;
									o && (o.style.width = `${pe}px`);
								}
							},
							Ge = (0, r.li)(),
							Ze = (0, r.li)(),
							[ut, _t] = (0, r.J0)(!1),
							Qe = (0, r.li)(null);
						(!Ue?.enabled || (0, Oe.v)(Qe, `${Ue.offset} 0px ${Ue.offset} 0px`, !0)) && _t(!0);
						const pt = {
								seedText: { value: Q },
								ctaButtonText: { value: J },
								ctaButtonSuccessText: { value: de },
								ctaSubtotalTitle: { value: `Subtotal for ${q.count} items` },
							},
							_e = C()(pt, a.lang || {}),
							Xe = (0, r.Kr)(
								() =>
									N.map((o, S) => {
										const M = !!o.bundleSeed,
											pe = Be.findIndex((De) => De.id == o.id) > -1;
										let fe = {
											onCheck: (De) => {
												De.stopPropagation(), je(o);
											},
											checked: pe,
											hideCheckboxes: oe,
											theme: a.theme,
											icon: Me ? !1 : F,
											className: S + 1 == N.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: m,
											treePath: Ee,
										};
										return (
											M && (fe = { ...fe, seedText: Q, seed: !0, icon: F, lang: { seedText: _e.seedText } }),
											!M || ((Te || K?.enabled == !1) && M && !d)
												? (0, t.Y)(
														ae.o,
														{
															controller: u,
															result: o,
															track: { impression: !M },
															children: (0, t.Y)(ce, {
																...fe,
																children: Ne
																	? (0, k.Y)(Ne, {
																			controller: u,
																			theme: Ie ? C()(a.theme || {}, { components: { result: { customComponent: Re } } }) : a.theme,
																			treePath: Ee,
																			result: o,
																			seed: M,
																			selected: pe,
																			onProductSelect: je,
																	  })
																	: Ke
																	? null
																	: (0, t.Y)(B.Q, { ...$e.result, controller: u, result: o }),
															}),
														},
														o.id
												  )
												: null
										);
									}),
								[N, Be, oe, Me, F, Te, d, Ke, Ne, a.theme, Q]
							);
						return (
							ue && delete _e.seedText.value,
							N?.length
								? (0, t.Y)(ee._, {
										children: (0, t.Y)('div', {
											...dt,
											ref: Qe,
											className: f()(m, { [`${m}--stacked`]: !me }, be, s),
											children: ut
												? (0, t.FD)(he.l, {
														controller: u,
														children: [
															n && (0, t.Y)('h3', { className: `${m}__title`, children: (0, t.Y)('span', { children: n }) }),
															y &&
																(0, t.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, t.Y)('span', { children: y }) }),
															(0, t.FD)('div', {
																className: f()(`${m}__wrapper`, { [`${m}__wrapper--seed-in-carousel`]: Te, [`${m}__wrapper--vertical`]: U }),
																children: [
																	Le
																		? (0, t.FD)(t.FK, {
																				children: [
																					!Te &&
																						!d &&
																						re &&
																						(0, t.Y)('div', {
																							className: `${m}__wrapper__seed-container`,
																							children: (0, t.Y)(ae.o, {
																								controller: u,
																								result: re,
																								track: { impression: !1 },
																								children: (0, t.Y)(ce, {
																									seedText: Q,
																									seed: !0,
																									title: re.display.mappings.core?.name,
																									onCheck: (o) => {
																										o.stopPropagation(), je(re);
																									},
																									checked: Be.findIndex((o) => o.id == re.id) > -1,
																									icon: F,
																									hideCheckboxes: oe,
																									theme: a.theme,
																									ref: Ge,
																									treePath: Ee,
																									classNamePrefix: m,
																									lang: { seedText: _e.seedText },
																									children:
																										Ne && u
																											? (0, k.Y)(Ne, {
																													controller: u,
																													seed: !0,
																													selected: Be.findIndex((o) => o.id == re.id) > -1,
																													onProductSelect: je,
																													result: re,
																													treePath: Ee,
																													theme: Ie
																														? C()(a.theme || {}, { components: { result: { customComponent: Re } } })
																														: a.theme,
																											  })
																											: Ke
																											? null
																											: (0, t.Y)(B.Q, { ...$e.result, controller: u, result: re }),
																								}),
																							}),
																						}),
																					(0, t.Y)('div', {
																						className: `${m}__wrapper__carousel`,
																						children: (0, t.Y)(D.FN, {
																							prevButton: nt,
																							nextButton: rt,
																							hideButtons: at,
																							loop: Fe,
																							spaceBetween: lt,
																							pagination: it,
																							breakpoints: Ve,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: U,
																							onResize: () => mt(),
																							...$e.carousel,
																							...qe,
																							...x,
																							ref: Ze,
																							children: Xe,
																						}),
																					}),
																				],
																		  })
																		: (0, t.Y)(t.FK, { children: Xe }),
																	me &&
																		(0, t.Y)(L, {
																			ctaSlot: X,
																			cartStore: q,
																			onAddToCart: (o) => He(o),
																			ctaButtonText: J,
																			ctaButtonSuccessText: de,
																			ctaButtonSuccessTimeout: I,
																			ctaIcon: Pe,
																			treePath: Ee,
																			classNamePrefix: m,
																			lang: {
																				ctaButtonSuccessText: _e.ctaButtonSuccessText,
																				ctaButtonText: _e.ctaButtonText,
																				ctaSubtotalTitle: _e.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!me &&
																(0, t.Y)(L, {
																	ctaSlot: X,
																	cartStore: q,
																	onAddToCart: (o) => He(o),
																	ctaButtonText: J,
																	ctaButtonSuccessText: de,
																	ctaButtonSuccessTimeout: I,
																	ctaIcon: Pe,
																	treePath: Ee,
																	classNamePrefix: m,
																	lang: {
																		ctaButtonSuccessText: _e.ctaButtonSuccessText,
																		ctaButtonText: _e.ctaButtonText,
																		ctaSubtotalTitle: _e.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, t.Y)(he.l, {
														controller: u,
														children: N.map((o) => (0, t.Y)(ae.o, { controller: u, result: o, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(H, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/dist/preact.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					h = e.n(r),
					P = e('./components/src/utilities/mergeStyles.ts');
				const C = () => (0, _.AH)({}),
					D = (0, f.PA)((B) => {
						const { children: j, className: Y, internalClassName: O } = B,
							k = (0, i.v2)(j),
							W = (0, P.Z)(B, C);
						return k.length ? (0, t.Y)('div', { className: h()('ss__recommendation-profile-tracker', Y, O), ...W, children: j }) : null;
					});
				e.d(v, ['l', 0, D]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(H, v, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/classnames/index.js'),
					r = e.n(f),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/createImpressionObserver.ts');
				const D = { ResultTracker: () => (0, i.AH)({}) },
					B = (0, _.PA)((j) => {
						const Y = (0, h.u)(),
							O = (0, P.v6)('resultTracker', Y, {}, j),
							k = { impression: !0, click: !0 },
							{ children: W, result: V, track: Z, controller: ee, className: xe, internalClassName: he, disableStyles: ae, style: le } = O,
							ie = { ...k, ...Z },
							{ ref: ge, inViewport: ce } = (0, C.Q)();
						ce && ie.impression && ee?.track.product.impression(V);
						const te = {};
						return (
							ae ? le && (te.css = [le]) : (te.css = [D.ResultTracker(), le]),
							(0, t.Y)('div', {
								className: r()('ss__result-tracker', `ss__${ee?.type}-result-tracker`, xe, he),
								onClick: (ve) => {
									ie.click && ee?.track.product.click(ve, V);
								},
								ref: ge,
								...te,
								children: W,
							})
						);
					});
				e.d(v, ['o', 0, B]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(H, v, e) {
				const t = (i) => i.replace(/([A-Z])/g, (_) => '-' + _.toLowerCase());
				e.d(v, ['b', 0, t]);
			},
			'../../node_modules/colord/plugins/names.mjs'(H, v, e) {
				e.d(v, { A: () => t }), e.dn(t);
				function t(i, _) {
					var f = {
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
					for (var h in f) r[f[h]] = h;
					var P = {};
					(i.prototype.toName = function (C) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var D,
							B,
							j = r[this.toHex()];
						if (j) return j;
						if (C?.closest) {
							var Y = this.toRgb(),
								O = 1 / 0,
								k = 'black';
							if (!P.length) for (var W in f) P[W] = new i(f[W]).toRgb();
							for (var V in f) {
								var Z = ((D = Y), (B = P[V]), Math.pow(D.r - B.r, 2) + Math.pow(D.g - B.g, 2) + Math.pow(D.b - B.b, 2));
								Z < O && ((O = Z), (k = V));
							}
							return k;
						}
					}),
						_.string.push([
							function (C) {
								var D = C.toLowerCase(),
									B = D === 'transparent' ? '#0000' : f[D];
								return B ? new i(B).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
