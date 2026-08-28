'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9124],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(q, B, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = s('../../node_modules/classnames/index.js'),
					x = s.n(R),
					A = s('./components/src/providers/cache.tsx'),
					I = s('./components/src/providers/controller.tsx'),
					D = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = s('./components/src/providers/withTracking.tsx'),
					L = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					U = s('./components/src/hooks/useA11y.tsx'),
					a = s('./components/src/types.ts'),
					f = s('../../node_modules/mobx-react-lite/es/index.js'),
					y = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({ width: m }) =>
						(0, O.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: m,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					K = (0, I.Bk)(
						(0, p.W)(
							(0, f.PA)((m) => {
								const j = (0, D.u)(),
									N = (0, L.LU)(),
									T = { layout: a.V.grid, width: 'auto', treePath: N },
									d = (0, W.v6)('inlineBanner', j, T, m),
									{ banner: u, className: S, internalClassName: Y, disableA11y: v, layout: $, onClick: l } = d,
									{ overrideElement: _, shouldRenderDefault: k } = (0, y._)('inlineBanner', d);
								if (!k) return _;
								const H = (0, C.Z)(d, h);
								return u && u.value
									? (0, t.Y)(A._, {
											children: (0, t.Y)('div', {
												onClick: (g) => {
													l && l(g, u);
												},
												role: 'article',
												ref: (g) => {
													v || (0, U.iy)(g), m.trackingRef(g);
												},
												className: x()('ss__inline-banner', `ss__inline-banner--${$}`, S, Y),
												...H,
												dangerouslySetInnerHTML: { __html: u.value },
											}),
									  })
									: null;
							})
						)
					);
				s.d(B, ['_', 0, K]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(q, B, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = s('../../node_modules/mobx-react-lite/es/index.js'),
					x = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = s('../../node_modules/classnames/index.js'),
					I = s.n(A),
					D = s('./components/src/components/Atoms/Image/Image.tsx'),
					p = s('./components/src/components/Atoms/Price/Price.tsx'),
					L = s('./components/src/providers/cache.tsx'),
					W = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = s('./components/src/providers/treePath.tsx'),
					U = s('./components/src/utilities/cloneWithProps.tsx'),
					a = s('./components/src/utilities/defined.ts'),
					f = s('./components/src/utilities/mergeProps.ts'),
					y = s('./components/src/utilities/mergeStyles.ts'),
					h = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					K = s('./components/src/types.ts'),
					m = s('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					j = s('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					N = s('./components/src/components/Molecules/Rating/Rating.tsx'),
					T = s('./components/src/components/Atoms/Button/Button.tsx'),
					d = s('../../node_modules/deepmerge/dist/cjs.js'),
					u = s.n(d),
					S = s('./components/src/hooks/useLang.tsx'),
					Y = s('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = s('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const $ = () =>
						(0, x.AH)({
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
					l = (0, R.PA)((_) => {
						const k = (0, W.u)(),
							H = (0, C.LU)(),
							g = {
								layout: K.V.grid,
								treePath: H,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							o = (0, f.v6)('result', k, g, _),
							{
								result: e,
								hideBadge: Z,
								hideTitle: ss,
								hidePricing: es,
								hideImage: ts,
								detailSlot: z,
								fallback: os,
								disableStyles: n,
								className: b,
								internalClassName: V,
								layout: ns,
								onClick: F,
								controller: c,
								hideVariantSelections: rs,
								hideAddToCartButton: ls,
								onAddToCartClick: G,
								addToCartButtonText: as,
								addToCartButtonSuccessText: J,
								addToCartButtonSuccessTimeout: X,
								hideRating: Q,
								hideQuickviewButton: is,
								onQuickviewClick: w,
								trackingRef: i,
								treePath: E,
							} = o,
							{ overrideElement: cs, shouldRenderDefault: _s } = (0, Y._)('result', {
								...o,
								customComponent: o.customComponent && o.customComponent !== 'Result' ? o.customComponent : void 0,
							});
						if (!_s) return cs;
						const r = e?.display?.mappings.core || e?.mappings?.core,
							[Ps, ms] = (0, O.J0)(!1),
							P = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
								price: { internalClassName: 'ss__result__price', ...(0, a.s)({ disableStyles: n }), theme: o.theme, treePath: E },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: e,
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: e,
									controller: c,
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: r?.name || '',
									src: r?.imageUrl || '',
									...(0, a.s)({ disableStyles: n, fallback: os }),
									theme: o.theme,
									treePath: E,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: r?.rating || 0,
									count: Number(r?.ratingCount || 0),
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (M) => {
										w && w(M, e), c?.quickview(e);
									},
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (M) => {
										ms(!0), G && G(M, e), c?.addToCart([e]), setTimeout(() => ms(!1), X);
									},
									...(0, a.s)({ disableStyles: n }),
									theme: o.theme,
									treePath: E,
								},
							};
						let ds = r?.name;
						o.truncateTitle && (ds = h.x(r?.name || '', o.truncateTitle.limit, o.truncateTitle.append));
						const ps = (0, y.Z)(o, $),
							Ms = { addToCartButtonText: { value: Ps ? J : as }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Ds = u()(Ms, o.lang || {}),
							us = (0, S.u)(Ds, { result: e, controller: c }, { activeBreakpoint: k?.activeBreakpoint }),
							Es = !!(r?.msrp && r?.price && r?.price < r?.msrp),
							vs = c?.store?.config?.asyncState?.product?.price ? e.state.priceFetched : !0;
						return r
							? (0, t.Y)(L._, {
									children: (0, t.FD)('article', {
										...ps,
										className: I()('ss__result', `ss__result--${ns}`, { 'ss__result--sale': Es }, b, V),
										ref: i,
										children: [
											!ts &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: r.url,
															onClick: (M) => {
																F && F(M);
															},
															children: Z
																? (0, t.Y)(D._, { ...P.image })
																: (0, t.Y)(j.Q, { ...P.overlayBadge, controller: c, children: (0, t.Y)(D._, { ...P.image }) }),
														}),
														!is && c?.quickviewManager && (0, t.Y)(T.$, { ...P.quickviewButton, ...us.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Z && (0, t.Y)(m.W, { ...P.calloutBadge, controller: c }),
													!ss &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: r.url,
																onClick: (M) => {
																	F && F(M);
																},
																dangerouslySetInnerHTML: { __html: ds || '' },
															}),
														}),
													!Q && (0, t.Y)(N.G, { ...P.rating }),
													!es && vs && r.price && r.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: Es
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(p.g, { ...P.price, value: r.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(p.g, { ...P.price, value: r.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(p.g, { ...P.price, value: r.price }),
														  })
														: null,
													(0, U.Y)(z, { result: e, treePath: E }),
													!rs && e.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: e.variants?.selections.map((M) => (0, t.Y)(v.m, { ...P.variantSelection, type: M.type, selection: M })),
														  })
														: null,
													!ls &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(T.$, { ...P.button, ...us.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				s.d(B, ['Q', 0, l]);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(q, B, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = s('../../node_modules/mobx-react-lite/es/index.js'),
					x = s('../../node_modules/classnames/index.js'),
					A = s.n(x),
					I = s('../../node_modules/deepmerge/dist/cjs.js'),
					D = s.n(I),
					p = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					L = s('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					W = s('./components/src/components/Molecules/Result/Result.tsx'),
					C = s('./components/src/types.ts'),
					U = s('./components/src/utilities/cloneWithProps.tsx'),
					a = s('./components/src/utilities/defined.ts'),
					f = s('./components/src/utilities/mergeProps.ts'),
					y = s('./components/src/utilities/mergeStyles.ts'),
					h = s('./components/src/providers/cache.tsx'),
					K = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = s('./components/src/providers/withTracking.tsx'),
					j = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					T = s('./components/src/hooks/useDisplaySettings.tsx'),
					d = s('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					u = s('./components/src/hooks/useComponent.tsx'),
					S = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const Y = ({ gapSize: l, columns: _ }) =>
						(0, O.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: l,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${_}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / _}% - (${_ - 1} * ${l} / ${_} ) )`,
								marginRight: l,
								marginBottom: l,
								[`&:nth-of-type(${_}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${_})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					v = (0, m.W)(W.Q),
					$ = (0, R.PA)((l) => {
						const _ = (0, K.u)(),
							k = (0, j.uk)(),
							H = (0, N.LU)(),
							g = {
								0: { columns: l.columns || 1 },
								540: { columns: l.columns || 2 },
								768: { columns: l.columns || 3 },
								991: { columns: l.columns || 4 },
							},
							o = { results: l.controller?.store?.results, columns: 4, gapSize: '20px', layout: C.V.grid, breakpoints: g, treePath: H };
						let e = (0, f.v6)('results', _, o, l);
						if (!(l.theme?.type == 'templates' || _?.type == 'templates')) {
							const i = (0, T.X)(e?.breakpoints || {}),
								E = D()(e?.theme || {}, i?.theme || {}, { arrayMerge: (cs, _s) => _s });
							e = { ...e, ...i, theme: E };
						}
						const {
								disableStyles: Z,
								className: ss,
								internalClassName: es,
								layout: ts,
								theme: z,
								excludeBanners: os,
								controller: n,
								treePath: b,
							} = e,
							V = e.resultComponent,
							{ overrideElement: ns, shouldRenderDefault: F } = (0, S._)('results', e);
						if (!F) return ns;
						const c = typeof V == 'string',
							rs = c ? V : '',
							ls = k?.templates?.library.import.component.result || {},
							{ ComponentOverride: G, shouldWaitForNamedOverride: as } = (0, u.x)(ls, c ? rs : void 0),
							J = c ? G : V,
							X = {
								result: { internalClassName: 'ss__results__result', ...(0, a.s)({ disableStyles: Z }), theme: e?.theme, treePath: b },
								inlineBanner: {
									controller: n,
									internalClassName: 'ss__results__inline-banner',
									...(0, a.s)({ disableStyles: Z }),
									theme: e?.theme,
									treePath: b,
								},
							};
						let Q = os ? e.results?.filter((i) => i.type !== p.c.BANNER) : e.results;
						e?.columns && e?.rows && e.columns > 0 && e.rows > 0 && (Q = Q?.slice(0, e.columns * e.rows));
						const is = (0, y.Z)({ ...e, columns: ts == C.V.list ? 1 : e.columns }, Y),
							w = c ? D()(z || {}, { components: { result: { customComponent: V } } }) : z;
						return Q?.length
							? (0, t.Y)(h._, {
									children: (0, t.Y)('div', {
										...is,
										className: A()('ss__results', `ss__results-${e.layout}`, ss, es),
										children: Q.map((i) =>
											i.type === p.c.BANNER
												? (0, O.n)(L._, { ...X.inlineBanner, key: `${n?.id ? `${n?.id}-` : ''}${i.id}`, banner: i, layout: e.layout })
												: as
												? null
												: J && n
												? (0, t.Y)(d.o, {
														result: i,
														controller: n,
														children: (0, U.Y)(J, { key: `${n?.id ? `${n?.id}-` : ''}${i.id}`, controller: n, result: i, theme: w, treePath: b }),
												  })
												: (0, t.Y)(v, { ...X.result, result: i, layout: e.layout, controller: n }, `${n?.id ? `${n?.id}-` : ''}${i.id}`)
										),
									}),
							  })
							: null;
					});
				s.d(B, ['n', 0, $]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(q, B, s) {
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = s('../../node_modules/mobx-react-lite/es/index.js'),
					x = s('../../node_modules/classnames/index.js'),
					A = s.n(x),
					I = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = s('./components/src/utilities/mergeProps.ts'),
					p = s('./components/src/utilities/createImpressionObserver.ts');
				const L = { ResultTracker: () => (0, O.AH)({}) },
					W = (0, R.PA)((C) => {
						const U = (0, I.u)(),
							a = (0, D.v6)('resultTracker', U, {}, C),
							f = { impression: !0, click: !0 },
							{ children: y, result: h, track: K, controller: m, className: j, internalClassName: N, disableStyles: T, style: d } = a,
							u = { ...f, ...K },
							{ ref: S, inViewport: Y } = (0, p.Q)();
						Y && u.impression && m?.track.product.impression(h);
						const v = {};
						return (
							T ? d && (v.css = [d]) : (v.css = [L.ResultTracker(), d]),
							(0, t.Y)('div', {
								className: A()('ss__result-tracker', `ss__${m?.type}-result-tracker`, j, N),
								onClick: ($) => {
									u.click && m?.track.product.click($, h);
								},
								ref: S,
								...v,
								children: y,
							})
						);
					});
				s.d(B, ['o', 0, W]);
			},
		},
	]);
})();
