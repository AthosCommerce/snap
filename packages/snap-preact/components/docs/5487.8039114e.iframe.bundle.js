'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5487],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(O, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					P = e.n(p),
					h = e('./components/src/components/Atoms/Image/Image.tsx'),
					T = e('./components/src/components/Atoms/Price/Price.tsx'),
					x = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					W = e('./components/src/types.ts'),
					C = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					K = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					f = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = e('./components/src/components/Atoms/Button/Button.tsx'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(M),
					j = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const N = () =>
						(0, E.AH)({
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
					Q = (0, m.PA)(($) => {
						const Y = (0, A.u)(),
							Z = (0, R.LU)(),
							G = {
								layout: W.V.grid,
								treePath: Z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							o = (0, I.v6)('result', Y, G, $),
							{
								result: n,
								hideBadge: H,
								hideTitle: J,
								hidePricing: b,
								hideImage: X,
								detailSlot: w,
								fallback: q,
								disableStyles: d,
								className: ee,
								internalClassName: te,
								layout: se,
								onClick: B,
								controller: u,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: z,
								addToCartButtonText: ae,
								addToCartButtonSuccessText: re,
								addToCartButtonSuccessTimeout: le,
								hideRating: _e,
								trackingRef: ie,
								treePath: _,
							} = o,
							{ overrideElement: ce, shouldRenderDefault: me } = (0, y._)('result', {
								...o,
								customComponent: o.customComponent && o.customComponent !== 'Result' ? o.customComponent : void 0,
							});
						if (!me) return ce;
						const s = n?.display?.mappings.core || n?.mappings?.core,
							[de, V] = (0, c.J0)(!1),
							r = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								price: { internalClassName: 'ss__result__price', ...(0, l.s)({ disableStyles: d }), theme: o.theme, treePath: _ },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: n,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: n,
									controller: u,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: s?.name || '',
									src: s?.imageUrl || '',
									...(0, l.s)({ disableStyles: d, fallback: q }),
									theme: o.theme,
									treePath: _,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: s?.rating || 0,
									count: Number(s?.ratingCount || 0),
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (i) => {
										V(!0), z && z(i, n), u?.addToCart([n]), setTimeout(() => V(!1), le);
									},
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
							};
						let F = s?.name;
						o.truncateTitle && (F = g.x(s?.name || '', o.truncateTitle.limit, o.truncateTitle.append));
						const ue = (0, U.Z)(o, N),
							Ee = { addToCartButtonText: { value: de ? re : ae } },
							pe = v()(Ee, o.lang || {}),
							Pe = (0, j.u)(pe, { result: n, controller: u }, { activeBreakpoint: Y?.activeBreakpoint }),
							k = !!(s?.msrp && s?.price && s?.price < s?.msrp),
							Te = u?.store?.config?.asyncState?.product?.price ? n.state.priceFetched : !0;
						return s
							? (0, t.Y)(x._, {
									children: (0, t.FD)('article', {
										...ue,
										className: P()('ss__result', `ss__result--${se}`, { 'ss__result--sale': k }, ee, te),
										ref: ie,
										children: [
											!X &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: s.url,
														onClick: (i) => {
															B && B(i);
														},
														children: H
															? (0, t.Y)(h._, { ...r.image })
															: (0, t.Y)(K.Q, { ...r.overlayBadge, controller: u, children: (0, t.Y)(h._, { ...r.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!H && (0, t.Y)(C.W, { ...r.calloutBadge, controller: u }),
													!J &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: s.url,
																onClick: (i) => {
																	B && B(i);
																},
																dangerouslySetInnerHTML: { __html: F || '' },
															}),
														}),
													!_e && (0, t.Y)(f.G, { ...r.rating }),
													!b && Te && s.price && s.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: k
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(T.g, { ...r.price, value: s.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(T.g, { ...r.price, value: s.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(T.g, { ...r.price, value: s.price }),
														  })
														: null,
													(0, L.Y)(w, { result: n, treePath: _ }),
													!oe && n.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: n.variants?.selections.map((i) => (0, t.Y)(D.m, { ...r.variantSelection, type: i.type, selection: i })),
														  })
														: null,
													!ne &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(S.$, { ...r.button, ...Pe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(a, ['Q', 0, Q]);
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(O, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx'),
					E = e('./components/src/components/Templates/Search/Search.tsx');
				const p = (0, c.PA)((P) =>
					(0, t.Y)(m._, { children: (0, t.Y)(E.v, { ...P, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(a, ['j', 0, p]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, a, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/classnames/index.js'),
					p = e.n(E),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/createImpressionObserver.ts');
				const x = { ResultTracker: () => (0, c.AH)({}) },
					A = (0, m.PA)((R) => {
						const L = (0, P.u)(),
							l = (0, h.v6)('resultTracker', L, {}, R),
							I = { impression: !0, click: !0 },
							{ children: U, result: g, track: W, controller: C, className: K, internalClassName: f, disableStyles: S, style: M } = l,
							v = { ...I, ...W },
							{ ref: j, inViewport: y } = (0, T.Q)();
						y && v.impression && C?.track.product.impression(g);
						const D = {};
						return (
							S ? M && (D.css = [M]) : (D.css = [x.ResultTracker(), M]),
							(0, t.Y)('div', {
								className: p()('ss__result-tracker', `ss__${C?.type}-result-tracker`, K, f),
								onClick: (N) => {
									v.click && C?.track.product.click(N, g);
								},
								ref: j,
								...D,
								children: U,
							})
						);
					});
				e.d(a, ['o', 0, A]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(O, a, e) {
				const t = (c) => c.replace(/([A-Z])/g, (m) => '-' + m.toLowerCase());
				e.d(a, ['b', 0, t]);
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(O, a, e) {
				e.r(a), e.d(a, { SearchHorizontal: () => t.j });
				var t = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
		},
	]);
})();
