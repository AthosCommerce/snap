'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5487],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(O, n, e) {
				e.d(n, { Q: () => Q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					p = e.n(E),
					h = e('./components/src/components/Atoms/Image/Image.tsx'),
					P = e('./components/src/components/Atoms/Price/Price.tsx'),
					x = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					W = e('./components/src/types.ts'),
					T = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					K = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					f = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					S = e('./components/src/components/Atoms/Button/Button.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(C),
					j = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const N = () =>
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
					Q = (0, m.PA)(($) => {
						const k = (0, A.u)(),
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
							o = (0, I.v6)('result', k, G, $),
							{
								result: a,
								hideBadge: Y,
								hideTitle: J,
								hidePricing: b,
								hideImage: X,
								detailSlot: w,
								fallback: q,
								disableStyles: d,
								className: ee,
								internalClassName: se,
								layout: te,
								onClick: B,
								controller: D,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: H,
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
						const t = a?.display?.mappings.core || a?.mappings?.core,
							[de, z] = (0, c.J0)(!1),
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
									result: a,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: a,
									controller: D,
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: t?.name || '',
									src: t?.imageUrl || '',
									...(0, l.s)({ disableStyles: d, fallback: q }),
									theme: o.theme,
									treePath: _,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: t?.rating || 0,
									count: Number(t?.ratingCount || 0),
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (i) => {
										z(!0), H && H(i, a), D?.addToCart([a]), setTimeout(() => z(!1), le);
									},
									...(0, l.s)({ disableStyles: d }),
									theme: o.theme,
									treePath: _,
								},
							};
						let V = t?.name;
						o.truncateTitle && (V = g.x(t?.name || '', o.truncateTitle.limit, o.truncateTitle.append));
						const ue = (0, U.Z)(o, N),
							Ee = { addToCartButtonText: { value: de ? re : ae } },
							pe = v()(Ee, o.lang || {}),
							Pe = (0, j.u)(pe, { result: a, controller: D }),
							F = !!(t?.msrp && t?.price && t?.price < t?.msrp);
						return t
							? (0, s.Y)(x._, {
									children: (0, s.FD)('article', {
										...ue,
										className: p()('ss__result', `ss__result--${te}`, { 'ss__result--sale': F }, ee, se),
										ref: ie,
										children: [
											!X &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: t.url,
														onClick: (i) => {
															B && B(i);
														},
														children: Y
															? (0, s.Y)(h._, { ...r.image })
															: (0, s.Y)(K.Q, { ...r.overlayBadge, controller: D, children: (0, s.Y)(h._, { ...r.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Y && (0, s.Y)(T.W, { ...r.calloutBadge, controller: D }),
													!J &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: t.url,
																onClick: (i) => {
																	B && B(i);
																},
																dangerouslySetInnerHTML: { __html: V || '' },
															}),
														}),
													!_e && (0, s.Y)(f.G, { ...r.rating }),
													!b && t.price && t.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: F
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(P.g, { ...r.price, value: t.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(P.g, { ...r.price, value: t.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(P.g, { ...r.price, value: t.price }),
														  })
														: null,
													(0, L.Y)(w, { result: a, treePath: _ }),
													!oe && a.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: a.variants?.selections.map((i) => (0, s.Y)(M.m, { ...r.variantSelection, type: i.type, selection: i })),
														  })
														: null,
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(S.$, { ...r.button, ...Pe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(O, n, e) {
				e.d(n, { j: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx'),
					u = e('./components/src/components/Templates/Search/Search.tsx');
				const E = (0, c.PA)((p) =>
					(0, s.Y)(m._, { children: (0, s.Y)(u.v, { ...p, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, n, e) {
				e.d(n, { o: () => A });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/classnames/index.js'),
					E = e.n(u),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/createImpressionObserver.ts');
				const x = { ResultTracker: () => (0, c.AH)({}) },
					A = (0, m.PA)((R) => {
						const L = (0, p.u)(),
							l = (0, h.v6)('resultTracker', L, {}, R),
							I = { impression: !0, click: !0 },
							{ children: U, result: g, track: W, controller: T, className: K, internalClassName: f, disableStyles: S, style: C } = l,
							v = { ...I, ...W },
							{ ref: j, inViewport: y } = (0, P.Q)();
						y && v.impression && T?.track.product.impression(g);
						const M = {};
						return (
							S ? C && (M.css = [C]) : (M.css = [x.ResultTracker(), C]),
							(0, s.Y)('div', {
								className: E()('ss__result-tracker', `ss__${T?.type}-result-tracker`, K, f),
								onClick: (N) => {
									v.click && T?.track.product.click(N, g);
								},
								ref: j,
								...M,
								children: U,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(O, n, e) {
				e.d(n, { b: () => s });
				const s = (c) => c.replace(/([A-Z])/g, (m) => '-' + m.toLowerCase());
			},
			'./src/Templates/Stores/library/components/SearchHorizontal.ts'(O, n, e) {
				e.r(n), e.d(n, { SearchHorizontal: () => s.j });
				var s = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
		},
	]);
})();
