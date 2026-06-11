'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5022],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(Q, h, e) {
				e.d(h, { P: () => t });
				const t = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(Q, h, e) {
				e.d(h, { G: () => a });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(m, u) {
					const r = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...u };
					return (0, t.Z)(m, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(Q, h, e) {
				e.d(h, { Z: () => t });
				function t(m, u) {
					const r = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...u };
					if (typeof m != 'number' || Number.isNaN(m)) return;
					const f = a(m, r.decimalPlaces).split('.');
					(f[0] = f[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + r.thousandsSeparator)),
						r.decimalPlaces > 0 && r.padDecimalPlaces && (f[1] = (f[1] || '').padEnd(r.decimalPlaces, '0'));
					let P = f.join(r.decimalSeparator);
					return r.symbolAfter ? (P = P + r.symbol) : (P = r.symbol + P), P;
				}
				function a(m, u) {
					const r = m.toString(),
						f = r.indexOf('.'),
						P = f == -1 ? r.length : 1 + f + (u || -1);
					return r.substr(0, P);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(Q, h, e) {
				e.d(h, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let m = a.toLowerCase();
					return (m = m.replace(/[^\w\s]/g, '').trim()), (m = m.replace(/\s/g, '-')), m;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(Q, h, e) {
				e.d(h, { x: () => t });
				function t(a, m, u) {
					if (typeof a != 'string' || a.length <= m) return a;
					const r = a.lastIndexOf(' ', m),
						f = r != -1 ? r : m - 1;
					return a.substr(0, f) + (u || '');
				}
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Q, h, e) {
				e.d(h, { FN: () => ge, K: () => oe, og: () => ne });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(P),
					M = e('../../node_modules/swiper/swiper-react.mjs'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					K = e('./components/src/utilities/defined.ts'),
					F = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					C = e('../../node_modules/swiper/modules/index.mjs'),
					$ = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					X = e('./components/src/providers/cache.tsx'),
					se = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ce = e('./components/src/providers/treePath.tsx'),
					be = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const de = ({ vertical: N, theme: U }) =>
						(0, m.AH)({
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
							'.swiper-pagination-bullet-active': { background: U?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: U?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: U?.variables?.colors?.primary || '#000' },
							},
						}),
					oe = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					ne = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ge = (0, f.PA)((N) => {
						const U = (0, se.u)(),
							ve = (0, ce.LU)(),
							Oe = {
								breakpoints: N.vertical ? JSON.parse(JSON.stringify(ne)) : JSON.parse(JSON.stringify(oe)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !N.breakpoints || !Object.keys(N.breakpoints).length ? 5 : void 0,
								slidesPerView: !N.breakpoints || !Object.keys(N.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ve,
							};
						let b = (0, F.v6)('carousel', U, Oe, N),
							G;
						if (
							!(N.theme?.type == 'templates' || U?.type == 'templates') &&
							b.breakpoints &&
							(Object.keys(b.breakpoints).forEach((o) => {
								const _ = b.breakpoints[o];
								_.slidesPerView && (_.slidesPerView = Number(_.slidesPerView) || 1),
									_.slidesPerGroup && (_.slidesPerGroup = Number(_.slidesPerGroup) || 1);
							}),
							(G = (0, be.X)(b.breakpoints)),
							G && Object.keys(G).length)
						) {
							const o = y()(b?.theme || {}, G?.theme || {}, { arrayMerge: (_, ue) => ue });
							b.autoAdjustSlides &&
								b.children.length < G.slidesPerView &&
								((G.slidesPerView = b.children.length), (G.slidesPerGroup = b.children.length)),
								(b = { ...b, ...G, theme: o });
						}
						const {
								children: xe,
								loop: Me,
								nextButton: T,
								prevButton: i,
								hideButtons: g,
								vertical: D,
								onInit: v,
								onBeforeInit: J,
								onAfterInit: S,
								onNextButtonClick: l,
								onPrevButtonClick: c,
								onClick: x,
								disableStyles: n,
								style: R,
								styleScript: d,
								themeStyleScript: j,
								modules: Y,
								className: V,
								internalClassName: O,
								treePath: H,
								...W
							} = b,
							{ overrideElement: re, shouldRenderDefault: ae } = (0, he._)('carousel', b);
						if (!ae) return re;
						let z = b.pagination,
							E = b.navigation,
							q = b.scrollbar;
						const Ee = { icon: { internalClassName: 'ss__carousel__icon', ...(0, K.s)({ disableStyles: n }), theme: b.theme, treePath: H } },
							p = Array.isArray(Y) ? [C.Vx, C.dK, C.Ze, C.Jq].concat(Y) : [C.Vx, C.dK, C.Ze, C.Jq],
							Ce = p.filter((o, _) => p.indexOf(o) === _),
							le = (0, a.li)(null),
							k = (0, a.li)(null),
							ee = (0, a.li)(null),
							we = (0, A.Z)(b, de);
						(0, a.vJ)(() => {
							if (ee.current) {
								const _ = ee.current.querySelector('.swiper');
								_?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									_?.classList.contains('swiper-vertical') && _.classList.add('swiper-container-vertical'),
									_?.classList.contains('swiper-horizontal') && _.classList.add('swiper-container-horizontal');
							}
							me();
						}, [N]),
							z && (typeof z == 'object' ? (z = { clickable: !0, ...z }) : (z = { clickable: !0 })),
							E &&
								(typeof E == 'object'
									? (E = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...E })
									: (E = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							q && (typeof q == 'object' ? (q = { enabled: !0, ...q }) : (q = { enabled: !0 }));
						const me = () => {
							if (ee.current) {
								const _ = ee.current?.querySelectorAll('.swiper-slide-visible');
								_.forEach((ue, Z) => {
									ue.classList.remove('swiper-last-visible-slide'), Z == _.length - 1 && ue.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete W.breakpoints,
							xe?.length
								? (0, t.Y)(X._, {
										children: (0, t.FD)('div', {
											ref: ee,
											...we,
											className: r()('ss__carousel', D ? 'ss__carousel-vertical' : '', V, O),
											children: [
												E !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': g }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: le,
															onClick: c && ((o) => c(o)),
															children: i || (0, t.Y)($.I, { icon: D ? 'angle-up' : 'angle-left', ...Ee.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(M.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														E &&
															o.params.navigation &&
															((o.params.navigation.prevEl = le.current ? le.current : void 0),
															(o.params.navigation.nextEl = k.current ? k.current : void 0)),
															J && J(o);
													},
													onInit: (o) => {
														v && v(o);
													},
													onAfterInit: (o) => {
														E &&
															o.navigation &&
															((o.navigation.onPrevClick = (_) => {
																_.preventDefault(),
																	!(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
															}),
															(o.navigation.onNextClick = (_) => {
																_.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															})),
															S && S(o);
													},
													onClick: (o, _) => {
														x && x(o, _);
													},
													direction: D ? 'vertical' : 'horizontal',
													loop: Me,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Ce,
													...W,
													...G,
													controller: void 0,
													navigation: E,
													pagination: z,
													scrollbar: q,
													onResize: (o) => {
														W.onResize && W.onResize(), o.updateSlidesClasses(), me();
													},
													onTransitionEnd: () => {
														W.onTransitionEnd && W.onTransitionEnd(), me();
													},
													children: xe.map((o) => (o != null ? (0, t.Y)(M.qr, { children: (0, B.Y)(o, { treePath: H }) }) : null)),
												}),
												E !== !1 &&
													(0, t.Y)('div', {
														className: r()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': g }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: k,
															onClick: l && ((o) => l(o)),
															children: T || (0, t.Y)($.I, { icon: D ? 'angle-down' : 'angle-right', ...Ee.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(Q, h, e) {
				e.d(h, { Q: () => Oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					f = e.n(r),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					y = e('./components/src/components/Atoms/Price/Price.tsx'),
					M = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					F = e('./components/src/utilities/cloneWithProps.tsx'),
					A = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					se = e('./components/src/types.ts'),
					ce = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					be = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					he = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					de = e('./components/src/components/Atoms/Button/Button.tsx'),
					oe = e('../../node_modules/deepmerge/dist/cjs.js'),
					ne = e.n(oe),
					ge = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					U = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const ve = () =>
						(0, u.AH)({
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
					Oe = (0, m.PA)((b) => {
						const G = (0, B.u)(),
							xe = (0, K.LU)(),
							Me = {
								layout: se.V.grid,
								treePath: xe,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							T = (0, C.v6)('result', G, Me, b),
							{
								result: i,
								hideBadge: g,
								hideTitle: D,
								hidePricing: v,
								hideImage: J,
								detailSlot: S,
								fallback: l,
								disableStyles: c,
								className: x,
								internalClassName: n,
								layout: R,
								onClick: d,
								controller: j,
								hideVariantSelections: Y,
								hideAddToCartButton: V,
								onAddToCartClick: O,
								addToCartButtonText: H,
								addToCartButtonSuccessText: W,
								addToCartButtonSuccessTimeout: re,
								hideRating: ae,
								trackingRef: z,
								treePath: E,
							} = T,
							{ overrideElement: q, shouldRenderDefault: Ee } = (0, N._)('result', {
								...T,
								customComponent: T.customComponent && T.customComponent !== 'Result' ? T.customComponent : void 0,
							});
						if (!Ee) return q;
						const p = i?.display?.mappings.core || i?.mappings?.core,
							[Ce, le] = (0, a.J0)(!1),
							k = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, A.s)({ disableStyles: c }),
									theme: T.theme,
									treePath: E,
								},
								price: { internalClassName: 'ss__result__price', ...(0, A.s)({ disableStyles: c }), theme: T.theme, treePath: E },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: i,
									...(0, A.s)({ disableStyles: c }),
									theme: T.theme,
									treePath: E,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: i,
									controller: j,
									...(0, A.s)({ disableStyles: c }),
									theme: T.theme,
									treePath: E,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: p?.name || '',
									src: p?.imageUrl || '',
									...(0, A.s)({ disableStyles: c, fallback: l }),
									theme: T.theme,
									treePath: E,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: p?.rating || 0,
									count: Number(p?.ratingCount || 0),
									...(0, A.s)({ disableStyles: c }),
									theme: T.theme,
									treePath: E,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (Z) => {
										le(!0), O && O(Z, i), j?.addToCart([i]), setTimeout(() => le(!1), re);
									},
									...(0, A.s)({ disableStyles: c }),
									theme: T.theme,
									treePath: E,
								},
							};
						let ee = p?.name;
						T.truncateTitle && (ee = X.x(p?.name || '', T.truncateTitle.limit, T.truncateTitle.append));
						const we = (0, $.Z)(T, ve),
							me = { addToCartButtonText: { value: Ce ? W : H } },
							o = ne()(me, T.lang || {}),
							_ = (0, ge.u)(o, { result: i, controller: j }),
							ue = !!(p?.msrp && p?.price && p?.price < p?.msrp);
						return p
							? (0, t.Y)(M._, {
									children: (0, t.FD)('article', {
										...we,
										className: f()('ss__result', `ss__result--${R}`, { 'ss__result--sale': ue }, x, n),
										ref: z,
										children: [
											!J &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: p.url,
														onClick: (Z) => {
															d && d(Z);
														},
														children: g
															? (0, t.Y)(P._, { ...k.image })
															: (0, t.Y)(be.Q, { ...k.overlayBadge, controller: j, children: (0, t.Y)(P._, { ...k.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!g && (0, t.Y)(ce.W, { ...k.calloutBadge, controller: j }),
													!D &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: p.url,
																onClick: (Z) => {
																	d && d(Z);
																},
																dangerouslySetInnerHTML: { __html: ee || '' },
															}),
														}),
													!ae && (0, t.Y)(he.G, { ...k.rating }),
													!v && p.price && p.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ue
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(y.g, { ...k.price, value: p.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(y.g, { ...k.price, value: p.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(y.g, { ...k.price, value: p.price }),
														  })
														: null,
													(0, F.Y)(S, { result: i, treePath: E }),
													!Y && i.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: i.variants?.selections.map((Z) => (0, t.Y)(U.m, { ...k.variantSelection, type: Z.type, selection: Z })),
														  })
														: null,
													!V &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(de.$, { ...k.button, ..._.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Q, h, e) {
				e.d(h, { g: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					u = e.n(m),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(P),
					M = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					B = e('./components/src/components/Molecules/Result/Result.tsx'),
					K = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/utilities/cloneWithProps.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					se = e('./components/src/providers/snap.tsx'),
					ce = e('./components/src/providers/cache.tsx'),
					be = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					de = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					oe = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					ne = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ge = e('./components/src/hooks/useLang.tsx');
				const N = (0, f.PA)((i) => {
					const g = (0, $.u)(),
						D = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						v = (0, K.v6)('bundleSelector', g, D, i),
						{
							children: J,
							checked: S,
							icon: l,
							seedText: c,
							seed: x,
							hideCheckboxes: n,
							onCheck: R,
							title: d,
							className: j,
							internalClassName: Y,
							treePath: V,
							classNamePrefix: O,
						} = v,
						H = V?.lastIndexOf(' '),
						W = H !== -1 ? V?.slice(0, H) : V,
						re = {
							icon: { name: 'bundle-selector', internalClassName: `${O}__wrapper__selector__icon`, size: 15, theme: v?.theme, treePath: W },
							checkbox: {
								internalClassName: `${O}__wrapper__selector__result-wrapper__checkbox`,
								checked: S,
								size: '18px',
								onClick: R,
								lang: { checkbox: { attributes: { 'aria-label': S ? `remove product from bundle ${d}` : `add product to bundle ${d}` } } },
								theme: v?.theme,
								treePath: W,
							},
						},
						ae = y()({}, v.lang || {}),
						z = (0, ge.u)(ae, {});
					return (0, t.FD)('div', {
						className: u()(
							`${O}__wrapper__selector`,
							S ? `${O}__wrapper__selector--selected` : '',
							c || x ? `${O}__wrapper__selector--seed` : '',
							j,
							Y
						),
						children: [
							(0, t.FD)('div', {
								className: `${O}__wrapper__selector__result-wrapper`,
								children: [
									!n && (0, t.Y)(oe.S, { ...re.checkbox }),
									c && (0, t.Y)('div', { className: `${O}__wrapper__selector__result-wrapper__seed-badge`, ...z.seedText?.all }),
									J,
								],
							}),
							l ? (0, t.Y)(ne.I, { ...re.icon, ...(typeof l == 'string' ? { icon: l } : l) }) : void 0,
						],
					});
				});
				var U = e('./components/src/components/Atoms/Button/Button.tsx'),
					ve = e('./components/src/components/Atoms/Price/Price.tsx');
				const Oe = (0, f.PA)((i) => {
					const g = { ...i };
					g.onAddToCart = (O) => {
						d(!0), i.onAddToCart(O), setTimeout(() => d(!1), i.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: D,
							cartStore: v,
							onAddToCart: J,
							ctaIcon: S,
							ctaButtonText: l,
							ctaButtonSuccessText: c,
							treePath: x,
							classNamePrefix: n,
						} = g,
						[R, d] = (0, r.J0)(!1);
					g.addedToCart = R;
					const j = {
							icon: { name: 'bundle-cart', internalClassName: `${n}__wrapper__cta__icon`, size: 50, theme: g?.theme, treePath: x },
							subtotalStrike: { name: 'bundle-msrp', theme: g?.theme, treePath: x },
							subtotalPrice: { name: 'bundle-price', theme: g?.theme, treePath: x },
							button: { theme: g?.theme, treePath: x },
						},
						Y = y()({}, g.lang || {}),
						V = (0, ge.u)(Y, { cartStore: v });
					return (0, t.Y)('div', {
						className: `${n}__wrapper__cta`,
						children: D
							? (0, C.Y)(D, g)
							: (0, t.FD)(t.FK, {
									children: [
										(0, t.FD)('div', {
											className: `${n}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												S
													? (0, t.Y)('div', {
															className: `${n}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(ne.I, { ...j.icon, ...(typeof S == 'string' ? { icon: S } : S) }),
													  })
													: null,
												(0, t.Y)('span', { className: `${n}__wrapper__cta__subtotal__title`, ...V.ctaSubtotalTitle?.all }),
												(0, t.FD)('div', {
													className: `${n}__wrapper__cta__subtotal__prices`,
													children: [
														v.msrp && v.msrp !== v.price
															? (0, t.FD)('label', {
																	className: `${n}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(ve.g, { ...j.subtotalStrike, lineThrough: !0, value: v.msrp })],
															  })
															: null,
														(0, t.Y)('label', {
															className: `${n}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(ve.g, { ...j.subtotalPrice, value: v.price }),
														}),
													],
												}),
											],
										}),
										(0, t.Y)(U.$, {
											...j.button,
											internalClassName: u()(`${n}__wrapper__cta__button`, { [`${n}__wrapper__cta__button--added`]: R }),
											'aria-live': R,
											onClick: (O) => J(O),
											...(R ? V.ctaButtonSuccessText?.all : V.ctaButtonText?.all),
											children: R ? c : l,
										}),
									],
							  }),
					});
				});
				var b = e('./components/src/hooks/useComponent.tsx'),
					G = e('./components/src/hooks/useIntersection.tsx'),
					xe = e('./components/src/utilities/componentNameToClassName.ts');
				const Me = ({
						vertical: i,
						separatorIcon: g,
						carousel: D,
						ctaInline: v,
						hasSeed: J,
						hideSeed: S,
						carouselEnabled: l,
						limit: c,
						alias: x,
					}) => {
						let n = 'ss__recommendation-bundle';
						x && (n = `ss__${(0, xe.b)(x)}`);
						const R = D?.slidesPerView;
						return (0, a.AH)({
							[`.${n}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${n}__wrapper__selector--seed`]: { width: `${i ? '100%' : 'auto'}`, margin: `${g ? 'initial' : 'auto !important'}` },
							[`.${n}__wrapper__seed-container`]: { width: i ? '100%' : `calc(100% / ${R + (v ? 1 : 0)})` },
							[`.${n}__wrapper__cta`]: {
								width: i ? '100%' : `${v ? `calc(100% / ${(l ? R : c || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${n}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${n}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${n}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: i ? '100%' : `calc(calc(100% / ${R + (v ? 1 : 0)}) * ${R - (J && !S ? 1 : 0)})`,
							},
							[`.${n}__wrapper--seed-in-carousel`]: {
								[`.${n}__wrapper__cta`]: { width: i ? '100%' : `calc(100% / ${D?.slidesPerView + (v ? 1 : 0)})` },
								[`.${n}__wrapper__carousel`]: {
									width: i ? '100%' : `calc(calc(100% / ${D?.slidesPerView + (v ? 1 : 0)}) * ${D?.slidesPerView})`,
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
					T = (0, f.PA)((i) => {
						const g = (0, $.u)(),
							D = (0, X.LU)(),
							J = {
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
								title: i.controller?.store?.profile?.display?.templateParameters?.title,
								description: i.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: D,
							},
							S = { name: i.controller?.store?.profile?.tag?.toLowerCase(), ...i };
						let l = (0, K.v6)(S.alias || 'recommendationBundle', g, J, S),
							c = 'ss__recommendation-bundle';
						l.alias && (c = `ss__${(0, xe.b)(l.alias)}`);
						let x;
						if (!(i.theme?.type == 'templates' || g?.type == 'templates') && ((x = (0, be.X)(l.breakpoints)), x && Object.keys(x).length)) {
							const s = y()(l?.theme || {}, x?.theme || {}, { arrayMerge: (w, I) => I });
							l = { ...l, ...x, theme: s };
						}
						const {
								title: n,
								description: R,
								controller: d,
								breakpoints: j,
								results: Y,
								carousel: V,
								preselectedCount: O,
								separatorIcon: H,
								hideCheckboxes: W,
								limit: re,
								seedText: ae,
								vertical: z,
								onAddToCart: E,
								separatorIconSeedOnly: q,
								ctaSlot: Ee,
								hideSeed: p,
								ctaButtonText: Ce,
								ctaButtonSuccessText: le,
								ctaButtonSuccessTimeout: k,
								disableStyles: ee,
								ctaIcon: we,
								ctaInline: me,
								hideSeedText: o,
								lazyRender: _,
								className: ue,
								internalClassName: Z,
								alias: Ze,
								style: _t,
								styleScript: pt,
								themeStyleScript: ft,
								treePath: Pe,
								...Qe
							} = l,
							ke = l.resultComponent,
							Xe = (0, se.uk)(),
							Le = typeof ke == 'string',
							qe = Le ? ke : '',
							et = Xe?.templates?.library.import.component.result || {},
							{ ComponentOverride: tt, shouldWaitForNamedOverride: je } = (0, b.x)(et, Le ? qe : void 0),
							Ae = Le ? tt : ke,
							We = { enabled: !0, offset: '10%', ..._ },
							Se = { enabled: !0, loop: !1, spaceBetween: 10, ...V },
							{ seedInCarousel: Te, prevButton: st, nextButton: ot, hideButtons: nt, loop: Ve, spaceBetween: rt, pagination: at } = Se,
							Re = Se.enabled;
						if (!d || d.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let L = Y || d.store?.results;
						re && (L = L.slice(0, p && L.filter((s) => s.bundleSeed == !0).length ? re + 1 : re));
						const te = d.store.cart;
						if (!te) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(Y && Y.length) && !d.store?.results?.length) return d.log.error('<RecommendationBundle> Component has no results to render!'), null;
						const ie = Y ? Y.filter((s) => s.bundleSeed == !0).pop() : d.store?.results?.filter((s) => s.bundleSeed == !0).pop(),
							lt = Ze == 'recommendationBundleList' ? { hideImage: !0, hideBadge: !0 } : {},
							Ke = {
								carousel: {
									loop: Ve,
									internalClassName: 'ss__recommendation__carousel',
									...(0, F.s)({ disableStyles: ee }),
									theme: l?.theme,
									treePath: Pe,
								},
								result: { internalClassName: 'ss__recommendation__result', ...lt, ...(0, F.s)({ disableStyles: ee }), theme: l?.theme, treePath: Pe },
							},
							$e = !!L.filter((s) => s.bundleSeed == !0).length;
						let ye = l.carousel?.slidesPerView || l.slidesPerView;
						ye ? L.length < Number(ye) && (ye = L.length) : (ye = 2);
						const it = (0, A.Z)({ ...l, carousel: { ...Se, slidesPerView: ye }, hasSeed: $e, carouselEnabled: Re }, Me),
							Ge = typeof O == 'number' ? O : Re ? ye : L.length;
						(0, r.vJ)(() => {
							te.reset(),
								Ge &&
									L?.forEach((s, w) => {
										w < Number(Ge) && te.addItems([s]);
									});
						}, [L.length]);
						const Be = te.items,
							Ue = { ...j };
						if (Re) {
							const s = (w) => {
								const I = w?.slidesPerView || w.slidesPerView || 2,
									pe = w?.slidesPerGroup || w.slidesPerGroup || 2;
								let fe = I,
									De = pe;
								const Ne = !$e || Te ? L.length : L.length - 1;
								return (
									Ne && (Ne >= I ? ((fe = I - (!Te && $e ? 1 : 0)), Te || (De = pe - 1 || 1)) : ((fe = Ne), (De = Ne))),
									{ slidesPerView: fe, slidesPerGroup: De }
								);
							};
							if (!(i.theme?.type == 'templates' || g?.type == 'templates'))
								Object.keys(l.breakpoints).forEach((w) => {
									const I = l.breakpoints[w],
										{ slidesPerView: pe, slidesPerGroup: fe } = s(I);
									Ue[w] = { ...Ue[w], slidesPerView: pe, slidesPerGroup: fe };
								});
							else {
								const { slidesPerView: w, slidesPerGroup: I } = s({ ...Se, slidesPerView: ye });
								x = { ...Se, slidesPerView: w, slidesPerGroup: I };
							}
						}
						const Ie = (s) => {
								s &&
									(Be.findIndex((I) => I.id == s.id) > -1
										? (te.removeItems([s]), te.items.length == 0 && ie && te.items.push(ie))
										: te.addItems([s]));
							},
							ze = (s) => {
								d.addToCart(Be), E && E(s, Be);
							},
							ct = () => {
								if (Ye.current) {
									const s = Ye.current?.base,
										pe = Fe.current?.base?.querySelector(`.swiper-slide-visible .${c}__wrapper__selector`)?.offsetWidth;
									s && (s.style.width = `${pe}px`);
								}
							},
							Ye = (0, r.li)(),
							Fe = (0, r.li)(),
							[dt, mt] = (0, r.J0)(!1),
							Je = (0, r.li)(null);
						(!We?.enabled || (0, G.v)(Je, `${We.offset} 0px ${We.offset} 0px`, !0)) && mt(!0);
						const ut = {
								seedText: { value: ae },
								ctaButtonText: { value: Ce },
								ctaButtonSuccessText: { value: le },
								ctaSubtotalTitle: { value: `Subtotal for ${te.count} items` },
							},
							_e = y()(ut, l.lang || {}),
							He = (0, r.Kr)(
								() =>
									L.map((s, w) => {
										const I = !!s.bundleSeed,
											pe = Be.findIndex((De) => De.id == s.id) > -1;
										let fe = {
											onCheck: (De) => {
												De.stopPropagation(), Ie(s);
											},
											checked: pe,
											hideCheckboxes: W,
											theme: l.theme,
											icon: q ? !1 : H,
											className: w + 1 == L.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: c,
											treePath: Pe,
										};
										return (
											I && (fe = { ...fe, seedText: ae, seed: !0, icon: H, lang: { seedText: _e.seedText } }),
											!I || ((Te || V?.enabled == !1) && I && !p)
												? (0, t.Y)(
														de.o,
														{
															controller: d,
															result: s,
															track: { impression: !I },
															children: (0, t.Y)(N, {
																...fe,
																children: Ae
																	? (0, C.Y)(Ae, { controller: d, treePath: Pe, result: s, seed: I, selected: pe, onProductSelect: Ie })
																	: je
																	? null
																	: (0, t.Y)(B.Q, { ...Ke.result, controller: d, result: s }),
															}),
														},
														s.id
												  )
												: null
										);
									}),
								[L, Be, W, q, H, Te, p, je, Ae, l.theme, ae]
							);
						return (
							o && delete _e.seedText.value,
							L?.length
								? (0, t.Y)(ce._, {
										children: (0, t.Y)('div', {
											...it,
											ref: Je,
											className: u()(c, { [`${c}--stacked`]: !me }, ue, Z),
											children: dt
												? (0, t.FD)(he.l, {
														controller: d,
														children: [
															n && (0, t.Y)('h3', { className: `${c}__title`, children: (0, t.Y)('span', { children: n }) }),
															R &&
																(0, t.Y)('p', { className: 'ss__recommendation-bundle__description', children: (0, t.Y)('span', { children: R }) }),
															(0, t.FD)('div', {
																className: u()(`${c}__wrapper`, { [`${c}__wrapper--seed-in-carousel`]: Te, [`${c}__wrapper--vertical`]: z }),
																children: [
																	Re
																		? (0, t.FD)(t.FK, {
																				children: [
																					!Te &&
																						!p &&
																						ie &&
																						(0, t.Y)('div', {
																							className: `${c}__wrapper__seed-container`,
																							children: (0, t.Y)(de.o, {
																								controller: d,
																								result: ie,
																								track: { impression: !1 },
																								children: (0, t.Y)(N, {
																									seedText: ae,
																									seed: !0,
																									title: ie.display.mappings.core?.name,
																									onCheck: (s) => {
																										s.stopPropagation(), Ie(ie);
																									},
																									checked: Be.findIndex((s) => s.id == ie.id) > -1,
																									icon: H,
																									hideCheckboxes: W,
																									theme: l.theme,
																									ref: Ye,
																									treePath: Pe,
																									classNamePrefix: c,
																									lang: { seedText: _e.seedText },
																									children:
																										Ae && d
																											? (0, C.Y)(Ae, {
																													controller: d,
																													seed: !0,
																													selected: Be.findIndex((s) => s.id == ie.id) > -1,
																													onProductSelect: Ie,
																													result: ie,
																													treePath: Pe,
																											  })
																											: je
																											? null
																											: (0, t.Y)(B.Q, { ...Ke.result, controller: d, result: ie }),
																								}),
																							}),
																						}),
																					(0, t.Y)('div', {
																						className: `${c}__wrapper__carousel`,
																						children: (0, t.Y)(M.FN, {
																							prevButton: st,
																							nextButton: ot,
																							hideButtons: nt,
																							loop: Ve,
																							spaceBetween: rt,
																							pagination: at,
																							breakpoints: Ue,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: z,
																							onResize: () => ct(),
																							...Ke.carousel,
																							...Qe,
																							...x,
																							ref: Fe,
																							children: He,
																						}),
																					}),
																				],
																		  })
																		: (0, t.Y)(t.FK, { children: He }),
																	me &&
																		(0, t.Y)(Oe, {
																			ctaSlot: Ee,
																			cartStore: te,
																			onAddToCart: (s) => ze(s),
																			ctaButtonText: Ce,
																			ctaButtonSuccessText: le,
																			ctaButtonSuccessTimeout: k,
																			ctaIcon: we,
																			treePath: Pe,
																			classNamePrefix: c,
																			lang: {
																				ctaButtonSuccessText: _e.ctaButtonSuccessText,
																				ctaButtonText: _e.ctaButtonText,
																				ctaSubtotalTitle: _e.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!me &&
																(0, t.Y)(Oe, {
																	ctaSlot: Ee,
																	cartStore: te,
																	onAddToCart: (s) => ze(s),
																	ctaButtonText: Ce,
																	ctaButtonSuccessText: le,
																	ctaButtonSuccessTimeout: k,
																	ctaIcon: we,
																	treePath: Pe,
																	classNamePrefix: c,
																	lang: {
																		ctaButtonSuccessText: _e.ctaButtonSuccessText,
																		ctaButtonText: _e.ctaButtonText,
																		ctaSubtotalTitle: _e.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, t.Y)(he.l, {
														controller: d,
														children: L.map((s) => (0, t.Y)(de.o, { controller: d, result: s, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Q, h, e) {
				e.d(h, { l: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					f = e.n(r),
					P = e('./components/src/utilities/mergeStyles.ts');
				const y = () => (0, m.AH)({}),
					M = (0, u.PA)((B) => {
						const { children: K, className: F, internalClassName: A } = B,
							C = (0, a.v2)(K),
							$ = (0, P.Z)(B, y);
						return C.length ? (0, t.Y)('div', { className: f()('ss__recommendation-profile-tracker', F, A), ...$, children: K }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(Q, h, e) {
				e.d(h, { o: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/createImpressionObserver.ts');
				const M = { ResultTracker: () => (0, a.AH)({}) },
					B = (0, m.PA)((K) => {
						const F = (0, f.u)(),
							A = (0, P.v6)('resultTracker', F, {}, K),
							C = { impression: !0, click: !0 },
							{ children: $, result: X, track: se, controller: ce, className: be, internalClassName: he, disableStyles: de, style: oe } = A,
							ne = { ...C, ...se },
							{ ref: ge, inViewport: N } = (0, y.Q)();
						N && ne.impression && ce?.track.product.impression(X);
						const U = {};
						return (
							de ? oe && (U.css = [oe]) : (U.css = [M.ResultTracker(), oe]),
							(0, t.Y)('div', {
								className: r()('ss__result-tracker', `ss__${ce?.type}-result-tracker`, be, he),
								onClick: (ve) => {
									ne.click && ce?.track.product.click(ve, X);
								},
								ref: ge,
								...U,
								children: $,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(Q, h, e) {
				e.d(h, { b: () => t });
				const t = (a) => a.replace(/([A-Z])/g, (m) => '-' + m.toLowerCase());
			},
			'../../node_modules/colord/plugins/names.mjs'(Q, h, e) {
				e.d(h, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(a, m) {
					var u = {
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
					for (var f in u) r[u[f]] = f;
					var P = {};
					(a.prototype.toName = function (y) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var M,
							B,
							K = r[this.toHex()];
						if (K) return K;
						if (y?.closest) {
							var F = this.toRgb(),
								A = 1 / 0,
								C = 'black';
							if (!P.length) for (var $ in u) P[$] = new a(u[$]).toRgb();
							for (var X in u) {
								var se = ((M = F), (B = P[X]), Math.pow(M.r - B.r, 2) + Math.pow(M.g - B.g, 2) + Math.pow(M.b - B.b, 2));
								se < A && ((A = se), (C = X));
							}
							return C;
						}
					}),
						m.string.push([
							function (y) {
								var M = y.toLowerCase(),
									B = M === 'transparent' ? '#0000' : u[M];
								return B ? new a(B).toRgb() : null;
							},
							'name',
						]);
				}
			},
		},
	]);
})();
