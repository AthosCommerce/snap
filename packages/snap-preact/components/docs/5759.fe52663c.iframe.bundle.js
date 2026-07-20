'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5759],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(M, l, e) {
				const t = (r) => r.replace(/_/g, '-').toLowerCase();
				e.d(l, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(M, l, e) {
				e.d(l, { G: () => r });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function r(o, c) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...c };
					return (0, t.Z)(o, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(M, l, e) {
				e.d(l, { Z: () => t });
				function t(o, c) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...c };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const _ = r(o, s.decimalPlaces).split('.');
					(_[0] = _[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (_[1] = (_[1] || '').padEnd(s.decimalPlaces, '0'));
					let u = _.join(s.decimalSeparator);
					return s.symbolAfter ? (u = u + s.symbol) : (u = s.symbol + u), u;
				}
				function r(o, c) {
					const s = o.toString(),
						_ = s.indexOf('.'),
						u = _ == -1 ? s.length : 1 + _ + (c || -1);
					return s.substr(0, u);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(M, l, e) {
				e.d(l, { p: () => t });
				function t(r) {
					if (typeof r != 'string') return r;
					let o = r.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(M, l, e) {
				e.d(l, { x: () => t });
				function t(r, o, c) {
					if (typeof r != 'string' || r.length <= o) return r;
					const s = r.lastIndexOf(' ', o),
						_ = s != -1 ? s : o - 1;
					return r.substr(0, _) + (c || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(M, l, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					s = e.n(c),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(u),
					p = e('../../node_modules/swiper/swiper-react.mjs'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					D = e('../../node_modules/swiper/modules/navigation.mjs'),
					T = e('../../node_modules/swiper/modules/pagination.mjs'),
					y = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					L = e('../../node_modules/swiper/modules/a11y.mjs'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					b = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					K = e('./components/src/hooks/useDisplaySettings.tsx'),
					w = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const Y = ({ vertical: I, theme: z }) =>
						(0, o.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: I ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: z?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: z?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: z?.variables?.colors?.primary || '#000' },
							},
						}),
					Z = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					V = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					R = (0, _.PA)((I) => {
						const z = (0, W.u)(),
							de = (0, j.LU)(),
							me = {
								breakpoints: I.vertical ? JSON.parse(JSON.stringify(V)) : JSON.parse(JSON.stringify(Z)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !I.breakpoints || !Object.keys(I.breakpoints).length ? 5 : void 0,
								slidesPerView: !I.breakpoints || !Object.keys(I.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: de,
							};
						let i = (0, v.v6)('carousel', z, me, I),
							d;
						if (
							!(I.theme?.type == 'templates' || z?.type == 'templates') &&
							i.breakpoints &&
							(Object.keys(i.breakpoints).forEach((n) => {
								const a = i.breakpoints[n];
								a.slidesPerView && (a.slidesPerView = Number(a.slidesPerView) || 1),
									a.slidesPerGroup && (a.slidesPerGroup = Number(a.slidesPerGroup) || 1);
							}),
							(d = (0, K.X)(i.breakpoints)),
							d && Object.keys(d).length)
						) {
							const n = E()(i?.theme || {}, d?.theme || {}, { arrayMerge: (a, Ee) => Ee });
							i.autoAdjustSlides &&
								i.children.length < d.slidesPerView &&
								((d.slidesPerView = i.children.length), (d.slidesPerGroup = i.children.length)),
								(i = { ...i, ...d, theme: n });
						}
						const {
								children: P,
								loop: ee,
								nextButton: O,
								prevButton: B,
								hideButtons: re,
								vertical: X,
								onInit: ae,
								onBeforeInit: N,
								onAfterInit: ie,
								onNextButtonClick: le,
								onPrevButtonClick: te,
								onClick: F,
								disableStyles: G,
								style: ge,
								styleScript: ve,
								themeStyleScript: he,
								modules: ce,
								className: _e,
								internalClassName: ue,
								treePath: se,
								...J
							} = i,
							{ overrideElement: A, shouldRenderDefault: pe } = (0, w._)('carousel', i);
						if (!pe) return A;
						let U = i.pagination,
							m = i.navigation,
							H = i.scrollbar;
						const oe = { icon: { internalClassName: 'ss__carousel__icon', ...(0, C.s)({ disableStyles: G }), theme: i.theme, treePath: se } },
							x = Array.isArray(ce) ? [D.A, T.A, y.A, L.A].concat(ce) : [D.A, T.A, y.A, L.A],
							ne = x.filter((n, a) => x.indexOf(n) === a),
							$ = (0, r.li)(null),
							k = (0, r.li)(null),
							S = (0, r.li)(null),
							fe = (0, f.Z)(i, Y);
						(0, r.vJ)(() => {
							if (S.current) {
								const a = S.current.querySelector('.swiper');
								a?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									a?.classList.contains('swiper-vertical') && a.classList.add('swiper-container-vertical'),
									a?.classList.contains('swiper-horizontal') && a.classList.add('swiper-container-horizontal');
							}
							q();
						}, [I]),
							U && (typeof U == 'object' ? (U = { clickable: !0, ...U }) : (U = { clickable: !0 })),
							m &&
								(typeof m == 'object'
									? (m = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...m })
									: (m = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							H && (typeof H == 'object' ? (H = { enabled: !0, ...H }) : (H = { enabled: !0 }));
						const q = () => {
							if (S.current) {
								const a = S.current?.querySelectorAll('.swiper-slide-visible');
								a.forEach((Ee, Pe) => {
									Ee.classList.remove('swiper-last-visible-slide'), Pe == a.length - 1 && Ee.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete J.breakpoints,
							P?.length
								? (0, t.Y)(b._, {
										children: (0, t.FD)('div', {
											ref: S,
											...fe,
											className: s()('ss__carousel', X ? 'ss__carousel-vertical' : '', _e, ue),
											children: [
												m !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': re }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: $,
															onClick: te && ((n) => te(n)),
															children: B || (0, t.Y)(g.I, { icon: X ? 'angle-up' : 'angle-left', ...oe.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(p.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														m &&
															n.params.navigation &&
															((n.params.navigation.prevEl = $.current ? $.current : void 0),
															(n.params.navigation.nextEl = k.current ? k.current : void 0)),
															N && N(n);
													},
													onInit: (n) => {
														ae && ae(n);
													},
													onAfterInit: (n) => {
														m &&
															n.navigation &&
															((n.navigation.onPrevClick = (a) => {
																a.preventDefault(),
																	!(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
															}),
															(n.navigation.onNextClick = (a) => {
																a.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															})),
															ie && ie(n);
													},
													onClick: (n, a) => {
														F && F(n, a);
													},
													direction: X ? 'vertical' : 'horizontal',
													loop: ee,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ne,
													...J,
													...d,
													controller: void 0,
													navigation: m,
													pagination: U,
													scrollbar: H,
													onResize: (n) => {
														J.onResize && J.onResize(), n.updateSlidesClasses(), q();
													},
													onTransitionEnd: () => {
														J.onTransitionEnd && J.onTransitionEnd(), q();
													},
													children: P.map((n) => (n != null ? (0, t.Y)(p.qr, { children: (0, h.Y)(n, { treePath: se }) }) : null)),
												}),
												m !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': re }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: k,
															onClick: le && ((n) => le(n)),
															children: O || (0, t.Y)(g.I, { icon: X ? 'angle-down' : 'angle-right', ...oe.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(l, ['FN', 0, R, 'K', 0, Z, 'og', 0, V]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(M, l, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					_ = e.n(s),
					u = e('./components/src/components/Atoms/Image/Image.tsx'),
					E = e('./components/src/components/Atoms/Price/Price.tsx'),
					p = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					L = e('./components/src/types.ts'),
					g = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					b = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					W = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					j = e('./components/src/components/Atoms/Button/Button.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(K),
					Y = e('./components/src/hooks/useLang.tsx'),
					Z = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					V = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const R = () =>
						(0, c.AH)({
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
					I = (0, o.PA)((z) => {
						const de = (0, h.u)(),
							me = (0, C.LU)(),
							i = {
								layout: L.V.grid,
								treePath: me,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							d = (0, D.v6)('result', de, i, z),
							{
								result: P,
								hideBadge: ee,
								hideTitle: O,
								hidePricing: B,
								hideImage: re,
								detailSlot: X,
								fallback: ae,
								disableStyles: N,
								className: ie,
								internalClassName: le,
								layout: te,
								onClick: F,
								controller: G,
								hideVariantSelections: ge,
								hideAddToCartButton: ve,
								onAddToCartClick: he,
								addToCartButtonText: ce,
								addToCartButtonSuccessText: _e,
								addToCartButtonSuccessTimeout: ue,
								hideRating: se,
								trackingRef: J,
								treePath: A,
							} = d,
							{ overrideElement: pe, shouldRenderDefault: U } = (0, Z._)('result', {
								...d,
								customComponent: d.customComponent && d.customComponent !== 'Result' ? d.customComponent : void 0,
							});
						if (!U) return pe;
						const m = P?.display?.mappings.core || P?.mappings?.core,
							[H, oe] = (0, r.J0)(!1),
							x = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, f.s)({ disableStyles: N }),
									theme: d.theme,
									treePath: A,
								},
								price: { internalClassName: 'ss__result__price', ...(0, f.s)({ disableStyles: N }), theme: d.theme, treePath: A },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: P,
									...(0, f.s)({ disableStyles: N }),
									theme: d.theme,
									treePath: A,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: P,
									controller: G,
									...(0, f.s)({ disableStyles: N }),
									theme: d.theme,
									treePath: A,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: m?.name || '',
									src: m?.imageUrl || '',
									...(0, f.s)({ disableStyles: N, fallback: ae }),
									theme: d.theme,
									treePath: A,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: m?.rating || 0,
									count: Number(m?.ratingCount || 0),
									...(0, f.s)({ disableStyles: N }),
									theme: d.theme,
									treePath: A,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (a) => {
										oe(!0), he && he(a, P), G?.addToCart([P]), setTimeout(() => oe(!1), ue);
									},
									...(0, f.s)({ disableStyles: N }),
									theme: d.theme,
									treePath: A,
								},
							};
						let ne = m?.name;
						d.truncateTitle && (ne = y.x(m?.name || '', d.truncateTitle.limit, d.truncateTitle.append));
						const $ = (0, T.Z)(d, R),
							k = { addToCartButtonText: { value: H ? _e : ce } },
							S = w()(k, d.lang || {}),
							fe = (0, Y.u)(S, { result: P, controller: G }),
							q = !!(m?.msrp && m?.price && m?.price < m?.msrp),
							n = G?.store?.config?.asyncState?.product?.price ? P.state.priceFetched : !0;
						return m
							? (0, t.Y)(p._, {
									children: (0, t.FD)('article', {
										...$,
										className: _()('ss__result', `ss__result--${te}`, { 'ss__result--sale': q }, ie, le),
										ref: J,
										children: [
											!re &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: m.url,
														onClick: (a) => {
															F && F(a);
														},
														children: ee
															? (0, t.Y)(u._, { ...x.image })
															: (0, t.Y)(b.Q, { ...x.overlayBadge, controller: G, children: (0, t.Y)(u._, { ...x.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!ee && (0, t.Y)(g.W, { ...x.calloutBadge, controller: G }),
													!O &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: m.url,
																onClick: (a) => {
																	F && F(a);
																},
																dangerouslySetInnerHTML: { __html: ne || '' },
															}),
														}),
													!se && (0, t.Y)(W.G, { ...x.rating }),
													!B && n && m.price && m.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: q
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(E.g, { ...x.price, value: m.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(E.g, { ...x.price, value: m.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(E.g, { ...x.price, value: m.price }),
														  })
														: null,
													(0, v.Y)(X, { result: P, treePath: A }),
													!ge && P.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: P.variants?.selections.map((a) => (0, t.Y)(V.m, { ...x.variantSelection, type: a.type, selection: a })),
														  })
														: null,
													!ve &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(j.$, { ...x.button, ...fe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(l, ['Q', 0, I]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(M, l, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					s = e.n(c),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(u),
					p = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					h = e('./components/src/components/Molecules/Result/Result.tsx'),
					C = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useIntersection.tsx'),
					y = e('./components/src/hooks/useComponent.tsx'),
					L = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/snap.tsx'),
					W = e('./components/src/providers/treePath.tsx'),
					j = e('./components/src/hooks/useDisplaySettings.tsx'),
					K = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					w = e('./components/src/hooks/useLang.tsx'),
					Y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const Z = ({ vertical: R }) => (0, o.AH)({ height: R ? '100%' : void 0, '.ss__result__image-wrapper': { height: R ? '85%' : void 0 } }),
					V = (0, _.PA)((R) => {
						const I = (0, g.u)(),
							z = (0, W.LU)(),
							de = {
								breakpoints: R.vertical ? JSON.parse(JSON.stringify(p.og)) : JSON.parse(JSON.stringify(p.K)),
								pagination: !1,
								loop: !0,
								title: R.controller?.store?.profile?.display?.templateParameters?.title,
								description: R.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: z,
							},
							me = { name: R.controller?.store?.profile?.tag?.toLowerCase(), ...R };
						let i = (0, f.v6)('recommendation', I, de, me),
							d;
						!(R.theme?.type == 'templates' || I?.type == 'templates') &&
							i.breakpoints &&
							((d = (0, j.X)(i.breakpoints)), d && Object.keys(d).length && (i = { ...i, ...d }));
						const {
								title: P,
								description: ee,
								controller: O,
								children: B,
								loop: re,
								results: X,
								pagination: ae,
								nextButton: N,
								prevButton: ie,
								hideButtons: le,
								disableStyles: te,
								className: F,
								internalClassName: G,
								style: ge,
								styleScript: ve,
								themeStyleScript: he,
								lazyRender: ce,
								vertical: _e,
								hideTitle: ue,
								treePath: se,
								...J
							} = i,
							A = i.resultComponent,
							pe = (0, b.uk)(),
							U = typeof A == 'string',
							m = U ? A : '',
							H = pe?.templates?.library.import.component.result || {},
							{ ComponentOverride: oe, shouldWaitForNamedOverride: x } = (0, y.x)(H, U ? m : void 0),
							ne = U ? oe : A,
							$ = { enabled: !0, offset: '10%', ...ce };
						if (!O || O.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const k = X || O.store?.results;
						if (Array.isArray(B) && B.length !== k.length)
							return (
								O.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const S = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, v.s)({ disableStyles: te, vertical: _e }),
									theme: i?.theme,
									treePath: se,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, v.s)({ disableStyles: te }), theme: i?.theme, treePath: se },
							},
							fe = (0, D.Z)(i, Z),
							[q, n] = (0, r.J0)(!1),
							a = (0, r.li)(null);
						(!$?.enabled || (0, T.v)(a, `${$.offset} 0px ${$.offset} 0px`, !0)) && n(!0);
						const Pe = { titleText: { value: `${P}` } },
							De = E()(Pe, i.lang || {}),
							Me = (0, w.u)(De, {});
						return (Array.isArray(B) && B.length) || k?.length
							? (0, t.Y)(L._, {
									children: (0, t.Y)('div', {
										...fe,
										className: s()('ss__recommendation', F, G),
										ref: a,
										children: q
											? (0, t.FD)(K.l, {
													controller: O,
													children: [
														P && !ue && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...Me.titleText?.all, children: P }),
														ee && (0, t.Y)('p', { className: 'ss__recommendation__description', children: ee }),
														(0, t.Y)(p.FN, {
															prevButton: ie,
															nextButton: N,
															hideButtons: le,
															loop: re,
															pagination: ae,
															...S.carousel,
															...J,
															children:
																Array.isArray(B) && B.length
																	? B.map((Q, Oe) => (0, t.Y)(Y.o, { controller: O, result: k[Oe], children: Q }))
																	: k.map((Q) =>
																			(0, t.Y)(Y.o, {
																				controller: O,
																				result: Q,
																				children:
																					ne && O
																						? (0, C.Y)(ne, {
																								controller: O,
																								result: Q,
																								treePath: S.result.treePath,
																								theme: U ? E()(i.theme || {}, { components: { result: { customComponent: A } } }) : i.theme,
																						  })
																						: x
																						? null
																						: (0, t.Y)(h.Q, { ...S.result, controller: O, result: Q }, Q.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(K.l, {
													controller: O,
													children:
														Array.isArray(B) && B.length
															? B.map((Q, Oe) => (0, t.Y)(Y.o, { controller: O, result: k[Oe], children: (0, t.Y)(t.FK, {}) }))
															: k.map((Q) => (0, t.Y)(Y.o, { controller: O, result: Q, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(l, ['A', 0, V]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(M, l, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					_ = e.n(s),
					u = e('./components/src/utilities/mergeStyles.ts');
				const E = () => (0, o.AH)({}),
					p = (0, c.PA)((h) => {
						const { children: C, className: v, internalClassName: f } = h,
							D = (0, r.v2)(C),
							T = (0, u.Z)(h, E);
						return D.length ? (0, t.Y)('div', { className: _()('ss__recommendation-profile-tracker', v, f), ...T, children: C }) : null;
					});
				e.d(l, ['l', 0, p]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(M, l, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/classnames/index.js'),
					s = e.n(c),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/createImpressionObserver.ts');
				const p = { ResultTracker: () => (0, r.AH)({}) },
					h = (0, o.PA)((C) => {
						const v = (0, _.u)(),
							f = (0, u.v6)('resultTracker', v, {}, C),
							D = { impression: !0, click: !0 },
							{ children: T, result: y, track: L, controller: g, className: b, internalClassName: W, disableStyles: j, style: K } = f,
							w = { ...D, ...L },
							{ ref: Y, inViewport: Z } = (0, E.Q)();
						Z && w.impression && g?.track.product.impression(y);
						const V = {};
						return (
							j ? K && (V.css = [K]) : (V.css = [p.ResultTracker(), K]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${g?.type}-result-tracker`, b, W),
								onClick: (R) => {
									w.click && g?.track.product.click(R, y);
								},
								ref: Y,
								...V,
								children: T,
							})
						);
					});
				e.d(l, ['o', 0, h]);
			},
			'./components/src/hooks/useIntersection.tsx'(M, l, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (o, c = '0px', s = !1) => {
					const [_, u] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const E = new IntersectionObserver(
								([p]) => {
									u(p.isIntersecting), s && p.isIntersecting && E.unobserve(o.current);
								},
								{ rootMargin: c }
							);
							return (
								o.current && E.observe(o.current),
								() => {
									E.unobserve(o.current);
								}
							);
						}, []),
						_
					);
				};
				e.d(l, ['v', 0, r]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(M, l, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 250,
					o = (s, _ = {}) => {
						const { rootMargin: u = '0px', fireOnce: E = !1, threshold: p = 0, minVisibleTime: h = 0 } = _,
							[C, v] = (0, t.J0)(!1),
							f = (0, t.li)(null),
							D = (0, t.li)(null),
							[T, y] = (0, t.J0)(0),
							L = (0, t.hb)((g) => {
								(s.current = g), y((b) => b + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								v(!1);
								let g = null,
									b = null;
								if (!window.IntersectionObserver || !s.current) return;
								const W = () => {
										b && (window.clearInterval(b), (b = null));
									},
									j = () => {
										h > 0
											? ((D.current = Date.now()),
											  f.current && window.clearTimeout(f.current),
											  (f.current = window.setTimeout(() => {
													v(!0), E && s.current && g && g.unobserve(s.current);
											  }, h)))
											: (v(!0), E && s.current && g && g.unobserve(s.current));
									},
									K = () => {
										f.current && window.clearTimeout(f.current), (f.current = null), (D.current = null), v(!1);
									};
								return (
									(g = new IntersectionObserver(
										([w]) => {
											w.isIntersecting
												? s.current && c(s.current)
													? (W(), j())
													: (K(),
													  b ||
															(b = window.setInterval(() => {
																if (!s.current) {
																	W();
																	return;
																}
																c(s.current) && (W(), j());
															}, r)))
												: (W(), K());
										},
										{ rootMargin: u, threshold: p }
									)),
									s.current && g.observe(s.current),
									() => {
										v(!1), W(), f.current && window.clearTimeout(f.current), g && s.current && g.unobserve(s.current);
									}
								);
							}, [s, T]),
							{ inViewport: C, updateRef: L }
						);
					};
				function c(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(l, ['v', 0, o]);
			},
			'./components/src/types.ts'(M, l, e) {
				e.d(l, { Q: () => r, V: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(M, l, e) {
				e.d(l, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					c = 1e3;
				function s(_) {
					const u = (0, t.li)(null),
						{ inViewport: E, updateRef: p } = (0, r.v)(u, { ..._, fireOnce: !0, threshold: o, minVisibleTime: c });
					return { ref: u, inViewport: E, updateRef: p };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(M, l, e) {
				e.r(l), e.d(l, { Recommendation: () => t.A });
				var t = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(M, l, e) {
				e.d(l, { A: () => t }), e.dn(t);
				function t(r, o) {
					var c = {
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
					for (var _ in c) s[c[_]] = _;
					var u = {};
					(r.prototype.toName = function (E) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var p,
							h,
							C = s[this.toHex()];
						if (C) return C;
						if (E?.closest) {
							var v = this.toRgb(),
								f = 1 / 0,
								D = 'black';
							if (!u.length) for (var T in c) u[T] = new r(c[T]).toRgb();
							for (var y in c) {
								var L = ((p = v), (h = u[y]), Math.pow(p.r - h.r, 2) + Math.pow(p.g - h.g, 2) + Math.pow(p.b - h.b, 2));
								L < f && ((f = L), (D = y));
							}
							return D;
						}
					}),
						o.string.push([
							function (E) {
								var p = E.toLowerCase(),
									h = p === 'transparent' ? '#0000' : c[p];
								return h ? new r(h).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
