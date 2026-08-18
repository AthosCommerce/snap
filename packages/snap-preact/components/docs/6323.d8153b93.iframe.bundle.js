'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6323],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					h = e.n(b),
					L = e('./components/src/providers/cache.tsx'),
					U = e('./components/src/providers/controller.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/withTracking.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					S = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useA11y.tsx'),
					M = e('./components/src/types.ts'),
					X = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const H = ({ width: _ }) =>
						(0, Y.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: _,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					g = (0, U.Bk)(
						(0, E.W)(
							(0, X.PA)((_) => {
								const f = (0, A.u)(),
									c = (0, i.LU)(),
									d = { layout: M.V.grid, width: 'auto', treePath: c },
									v = (0, S.v6)('inlineBanner', f, d, _),
									{ banner: C, className: O, internalClassName: G, disableA11y: Q, layout: q, onClick: I } = v,
									{ overrideElement: $, shouldRenderDefault: se } = (0, x._)('inlineBanner', v);
								if (!se) return $;
								const le = (0, k.Z)(v, H);
								return C && C.value
									? (0, t.Y)(L._, {
											children: (0, t.Y)('div', {
												onClick: (P) => {
													I && I(P, C);
												},
												role: 'article',
												ref: (P) => {
													Q || (0, y.iy)(P), _.trackingRef(P);
												},
												className: h()('ss__inline-banner', `ss__inline-banner--${q}`, O, G),
												...le,
												dangerouslySetInnerHTML: { __html: C.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(V, ['_', 0, g]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					L = e('../../node_modules/classnames/index.js'),
					U = e.n(L),
					A = e('./components/src/components/Atoms/Image/Image.tsx'),
					E = e('./components/src/components/Atoms/Price/Price.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					k = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					H = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					g = e('./components/src/types.ts'),
					_ = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					f = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					c = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					d = e('./components/src/components/Atoms/Button/Button.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(v),
					O = e('./components/src/hooks/useLang.tsx'),
					G = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const q = () =>
						(0, h.AH)({
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
					I = (0, b.PA)(($) => {
						const se = (0, S.u)(),
							le = (0, k.LU)(),
							P = {
								layout: g.V.grid,
								treePath: le,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							T = (0, X.v6)('result', se, P, $),
							{
								result: s,
								hideBadge: W,
								hideTitle: ee,
								hidePricing: o,
								hideImage: w,
								detailSlot: u,
								fallback: z,
								disableStyles: r,
								className: K,
								internalClassName: p,
								layout: j,
								onClick: N,
								controller: R,
								hideVariantSelections: te,
								hideAddToCartButton: ae,
								onAddToCartClick: m,
								addToCartButtonText: pe,
								addToCartButtonSuccessText: he,
								addToCartButtonSuccessTimeout: J,
								hideRating: ce,
								trackingRef: Ce,
								treePath: a,
							} = T,
							{ overrideElement: F, shouldRenderDefault: ne } = (0, G._)('result', {
								...T,
								customComponent: T.customComponent && T.customComponent !== 'Result' ? T.customComponent : void 0,
							});
						if (!ne) return F;
						const l = s?.display?.mappings.core || s?.mappings?.core,
							[_e, Ee] = (0, Y.J0)(!1),
							Z = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, M.s)({ disableStyles: r }),
									theme: T.theme,
									treePath: a,
								},
								price: { internalClassName: 'ss__result__price', ...(0, M.s)({ disableStyles: r }), theme: T.theme, treePath: a },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: s,
									...(0, M.s)({ disableStyles: r }),
									theme: T.theme,
									treePath: a,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: s,
									controller: R,
									...(0, M.s)({ disableStyles: r }),
									theme: T.theme,
									treePath: a,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: l?.name || '',
									src: l?.imageUrl || '',
									...(0, M.s)({ disableStyles: r, fallback: z }),
									theme: T.theme,
									treePath: a,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: l?.rating || 0,
									count: Number(l?.ratingCount || 0),
									...(0, M.s)({ disableStyles: r }),
									theme: T.theme,
									treePath: a,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (ie) => {
										Ee(!0), m && m(ie, s), R?.addToCart([s]), setTimeout(() => Ee(!1), J);
									},
									...(0, M.s)({ disableStyles: r }),
									theme: T.theme,
									treePath: a,
								},
							};
						let me = l?.name;
						T.truncateTitle && (me = H.x(l?.name || '', T.truncateTitle.limit, T.truncateTitle.append));
						const re = (0, x.Z)(T, q),
							De = { addToCartButtonText: { value: _e ? he : pe } },
							Be = C()(De, T.lang || {}),
							ye = (0, O.u)(Be, { result: s, controller: R }, { activeBreakpoint: se?.activeBreakpoint }),
							ge = !!(l?.msrp && l?.price && l?.price < l?.msrp),
							Me = R?.store?.config?.asyncState?.product?.price ? s.state.priceFetched : !0;
						return l
							? (0, t.Y)(i._, {
									children: (0, t.FD)('article', {
										...re,
										className: U()('ss__result', `ss__result--${j}`, { 'ss__result--sale': ge }, K, p),
										ref: Ce,
										children: [
											!w &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: l.url,
														onClick: (ie) => {
															N && N(ie);
														},
														children: W
															? (0, t.Y)(A._, { ...Z.image })
															: (0, t.Y)(f.Q, { ...Z.overlayBadge, controller: R, children: (0, t.Y)(A._, { ...Z.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!W && (0, t.Y)(_.W, { ...Z.calloutBadge, controller: R }),
													!ee &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: l.url,
																onClick: (ie) => {
																	N && N(ie);
																},
																dangerouslySetInnerHTML: { __html: me || '' },
															}),
														}),
													!ce && (0, t.Y)(c.G, { ...Z.rating }),
													!o && Me && l.price && l.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ge
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(E.g, { ...Z.price, value: l.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(E.g, { ...Z.price, value: l.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(E.g, { ...Z.price, value: l.price }),
														  })
														: null,
													(0, y.Y)(u, { result: s, treePath: a }),
													!te && s.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: s.variants?.selections.map((ie) => (0, t.Y)(Q.m, { ...Z.variantSelection, type: ie.type, selection: ie })),
														  })
														: null,
													!ae &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(d.$, { ...Z.button, ...ye.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(V, ['Q', 0, I]);
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					L = e.n(h),
					U = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					k = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					X = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(X);
				const H = ({ vertical: c, theme: d }) =>
						(0, b.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: c ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: d?.variables?.colors?.primary } },
								},
							},
						}),
					g = (c) => c?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					_ = (c, d) => {
						if (c && d) {
							const v = c.match(g(d));
							if (d && c && v && typeof v.index == 'number') {
								const C = c.slice(0, v.index),
									O = c.slice(v.index + d.length, c.length);
								return `${C ? `<em>${C}</em>` : ''}${d}${O ? `<em>${O}</em>` : ''}`;
							}
						}
						return `<em>${c}</em>`;
					},
					f = (0, Y.PA)((c) => {
						const d = (0, A.u)(),
							C = { vertical: !0, previewOnHover: !0, treePath: (0, E.LU)() },
							O = (0, S.v6)('terms', d, C, c),
							{ title: G, onTermClick: Q, limit: q, previewOnHover: I, emIfy: $, className: se, internalClassName: le, controller: P } = O,
							T = P?.store?.state?.input,
							s = O.terms,
							{ overrideElement: W, shouldRenderDefault: ee } = (0, M._)('terms', O);
						if (!ee) return W;
						const o = (0, k.Z)(O, H),
							w = (p, j) => {
								Q && Q(p, j), P?.setFocused && P?.setFocused();
							},
							u = q ? s?.slice(0, q) : s,
							z = { title: { value: G } },
							r = x()(z, O.lang || {}),
							K = (0, y.u)({ title: r.title }, { controller: P }, { activeBreakpoint: d?.activeBreakpoint });
						return u?.length
							? (0, t.Y)(U._, {
									children: (0, t.FD)('div', {
										...o,
										className: L()('ss__terms', se, le),
										children: [
											G ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...K.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': G,
												children: u?.map((p, j) => {
													const N = {
															term: {
																value: `${$ ? _(p.value, T || '') : p.value}`,
																attributes: { 'aria-label': `${G || ''} item ${j + 1} of ${u.length}, ${p.value}` },
															},
														},
														R = x()(N, O.lang || {}),
														te = (0, y.u)(
															{ term: R.term },
															{ index: j, numberOfTerms: u.length, term: p },
															{ activeBreakpoint: d?.activeBreakpoint }
														);
													return (0, t.Y)('li', {
														className: L()('ss__terms__option', { 'ss__terms__option--active': p.active }),
														children: (0, t.Y)('a', {
															onClick: (ae) => w(ae, p),
															href: p.url.href,
															...(I ? (0, i.l)(p.preview) : {}),
															...te.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(V, ['i', 0, f]);
			},
			'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'(ue, V, e) {
				e.d(V, { h: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					L = e('../../node_modules/classnames/index.js'),
					U = e.n(L),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(A),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					S = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/components/Organisms/Results/Results.tsx'),
					y = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					M = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('./components/src/types.ts'),
					d = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useA11y.tsx'),
					C = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					O = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					G = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					Q = e('./components/src/components/Atoms/Button/Button.tsx'),
					q = e('./components/src/components/Molecules/TabSelection/TabSelection.tsx'),
					I = e('./components/src/providers/snap.tsx'),
					$ = e('./components/src/hooks/useCreateController.tsx'),
					se = e('./components/src/hooks/useComponent.tsx');
				function le(s) {
					let W, ee, o;
					const w = (0, I.uk)(),
						u = !!s?.recommendation?.enabled,
						z = u ? s?.recommendation?.component || 'RecommendationGrid' : void 0,
						r = u ? s?.recommendation?.resultComponent || 'Result' : void 0,
						K = w?.templates?.library.import.component.recommendation.default || {},
						p = w?.templates?.library.import.component.result || {},
						{ ComponentOverride: j, shouldWaitForNamedOverride: N } = (0, se.x)(K, z),
						{ ComponentOverride: R, shouldWaitForNamedOverride: te } = (0, se.x)(p, r);
					if (u && ((W = N ? void 0 : j), (ee = te ? void 0 : R), w?.templates)) {
						const m = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, s.recommendation.config);
						(m.id = m.id || `search-${m.tag}`),
							(o = (0, $.i)(w, 'recommendation', m)),
							!o?.store?.loaded && !o?.store?.loading && o?.store.error?.type !== 'error' && o?.search();
					}
					return { RecommendationTemplateComponent: W, RecommendationTemplateResultComponent: ee, recsController: o };
				}
				const P = ({ controller: s, input: W, viewportMaxHeight: ee, width: o, theme: w, column1: u, column2: z, column3: r, column4: K }) => {
						let p = 0;
						if (W) {
							let N;
							typeof W == 'string' ? (N = document.querySelector(W)) : (N = W), (p = N?.getBoundingClientRect()?.bottom || 0);
						}
						const j = !!(s.store.search?.query?.string && s.store.results.length === 0);
						return (0, h.AH)({
							'.ss__autocomplete__column.ss__autocomplete__column--c1': {
								flex: u?.width == 'auto' ? '1 1 auto' : `1 0 ${u?.width}`,
								maxWidth: u?.width == 'auto' ? 'auto' : u?.width,
								alignContent: u?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c2': {
								flex: z?.width == 'auto' ? '1 1 auto' : `1 0 ${z?.width}`,
								maxWidth: z?.width == 'auto' ? 'auto' : z?.width,
								alignContent: z?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c3': {
								flex: r?.width == 'auto' ? '1 1 auto' : `1 0 ${r?.width}`,
								maxWidth: r?.width == 'auto' ? 'auto' : r?.width,
								alignContent: r?.alignContent,
							},
							'.ss__autocomplete__column.ss__autocomplete__column--c4': {
								flex: K?.width == 'auto' ? '1 1 auto' : `1 0 ${K?.width}`,
								maxWidth: K?.width == 'auto' ? 'auto' : K?.width,
								alignContent: K?.alignContent,
							},
							'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							flexWrap: 'wrap',
							display: 'flex',
							flexDirection: 'row',
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							maxWidth: o,
							maxHeight: ee && p ? `calc(100vh - ${p + 10}px)` : void 0,
							overflowY: 'scroll',
							'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
							'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
							'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
							'.ss__autocomplete__facets': {
								display: 'flex',
								width: 'auto',
								flexDirection: 'column',
								columnGap: '20px',
								padding: '10px',
								overflowY: 'auto',
								'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__facets-wrapper': { width: '100%' },
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: '1 1 0%',
								flexDirection: 'column',
								justifyContent: 'space-between',
								overflowY: 'auto',
								margin: j ? '0 auto' : void 0,
								'.ss__autocomplete__content-inner': { padding: '10px' },
								'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
							},
							'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
							'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
							'.ss__banner.ss__banner--footer': { margin: '10px 0' },
							'.ss__autocomplete__button--see-more': {
								padding: '10px',
								height: 'min-content',
								textAlign: j ? 'center' : 'right',
								a: { fontWeight: 'bold', color: w?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
							},
						});
					},
					T = (0, b.PA)((s) => {
						const W = (0, _.u)(),
							ee = {
								facetsTitle: '',
								contentTitle: '',
								layout: [['c1', 'c2', 'c3']],
								column1: { layout: ['termsList'], width: '150px' },
								column2: { layout: ['facets'], width: '150px' },
								column3: { layout: [['tabSelection'], ['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
								width: '100%',
								templates: { recommendation: { enabled: !0 } },
							};
						let o = (0, X.v6)('autocompleteLayout', W, ee, s);
						delete o.treePath, o.layout == 'terms' && (o.templates = { recommendation: { enabled: !1 } });
						const w = (0, g.l)(),
							u = () => {
								a?.setFocused && a?.setFocused();
							},
							z = {
								components: {
									facet: { valueProps: w },
									facetGridOptions: { onClick: u },
									facetHierarchyOptions: { onClick: u },
									facetListOptions: { onClick: u },
									facetPaletteOptions: { onClick: u },
								},
							};
						if (W?.type !== 'templates') {
							const n = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0, searchable: !1, showClearAllText: !1, showSelectedCount: !1 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								B = E().all([n, z, o?.theme || {}], { arrayMerge: (de, D) => D });
							o = { ...o, theme: B };
						} else o.theme = E().all([z, o?.theme || {}], { arrayMerge: (n, B) => B });
						let r = o.input;
						r && typeof r == 'string' && (r = document.querySelector(r));
						const {
							facetsTitle: K,
							contentTitle: p,
							column1: j,
							column2: N,
							column3: R,
							column4: te,
							onReset: ae,
							excludeBanners: m,
							resultComponent: pe,
							templates: he,
							disableStyles: J,
							className: ce,
							internalClassName: Ce,
							controller: a,
							tabManager: F,
						} = o;
						let ne = o.layout;
						const l = {
								button: {
									internalClassName: 'ss__autocomplete__button--see-more',
									onClick: () => {
										a?.setFocused && a.setFocused(), (window.location.href = ge.url.href);
									},
									name: 'see-more',
									...(0, x.s)({ disableStyles: J }),
									theme: o.theme,
									treePath: s.treePath,
								},
								termsList: {
									internalClassName: 'ss__autocomplete__terms-list',
									verticalOptions: !(o.layout == 'terms' || o.layout == 'mobile'),
									controller: a,
									...(0, x.s)({ disableStyles: J }),
									theme: o.theme,
									treePath: s.treePath,
								},
								terms: {
									internalClassName: 'ss__autocomplete__terms',
									vertical: !(o.layout == 'terms' || o.layout == 'mobile'),
									controller: a,
									...(0, x.s)({ disableStyles: J }),
									theme: o.theme,
									treePath: s.treePath,
								},
								facets: { name: 'autocomplete', limit: 3, ...(0, x.s)({ disableStyles: J }), theme: o.theme, treePath: s.treePath },
								facetsHorizontal: { name: 'autocomplete', ...(0, x.s)({ disableStyles: J }), theme: o.theme, treePath: s.treePath },
								banner: { internalClassName: 'ss__autocomplete__banner', ...(0, x.s)({ disableStyles: J }), theme: o.theme, treePath: s.treePath },
								results: {
									columns: 3,
									rows: 2,
									excludeBanners: m,
									internalClassName: 'ss__autocomplete__results',
									resultComponent: pe,
									...(0, x.s)({ disableStyles: J }),
									theme: o.theme,
									treePath: s.treePath,
								},
								icon: {
									internalClassName: 'ss__autocomplete__icon',
									icon: 'angle-right',
									size: '10px',
									...(0, x.s)({ disableStyles: J }),
									theme: o.theme,
									treePath: s.treePath,
								},
								tabSelection: { tabManager: F, ...(0, x.s)({ disableStyles: J }), theme: o.theme, treePath: s.treePath },
							},
							{
								search: _e,
								terms: Ee,
								trending: Z,
								results: me,
								merchandising: re,
								pagination: De,
								filters: Be,
								facets: ye,
								state: ge,
								loading: Me,
								loaded: ie,
							} = a.store,
							Oe = a.store.history || [];
						a &&
							typeof r == 'string' &&
							((r = document.querySelector(r)),
							(0, Y.vJ)(() => {
								a.bind();
							}, []));
						const Ke = r === ge.focusedInput && (Ee.length > 0 || Z?.length > 0 || Oe?.length > 0 || (ge.input && a.store.loaded)),
							Ie = () => !!(me.length > 0 || Object.keys(re.content).length > 0 || _e?.query?.string || Me),
							[Le, We] = (0, Y.J0)(Ie()),
							Ue = () => {
								const n = Z?.filter((de) => de.active).pop(),
									B = Oe?.filter((de) => de.active).pop();
								n || B || Ie() ? We(!0) : We(!1);
							};
						(0, Y.vJ)(() => {
							Ue();
						}, [Z, Oe]);
						const xe = ye.length ? ye.filter((n) => n.display !== c.Q.SLIDER) : [];
						Ue();
						const Ne = (0, H.Z)(o, P),
							Ye = {
								contentTitle: { value: p },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: K },
								noResultsText: {
									value: `<p>No results found for "${_e.originalQuery?.string || _e.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: {
									value: `See ${De.totalResults} ${Be.length > 0 ? 'filtered' : ''} result${De.totalResults == 1 ? '' : 's'} for "${
										_e.query?.string
									}"`,
								},
							},
							Re = E()(Ye, o.lang || {}),
							fe = (0, d.u)(Re, { controller: a }, { activeBreakpoint: W?.activeBreakpoint });
						let ve, Te, Ae;
						const Se = !!(a.store.search?.query?.string && a.store.results.length === 0);
						if (he?.recommendation?.enabled && Se) {
							const n = le(he);
							(Te = n.RecommendationTemplateComponent), (Ae = n.RecommendationTemplateResultComponent), (ve = n.recsController);
						}
						const Pe = (n) => {
							if (typeof n != 'string') {
								const B = n?.map((D) => Pe(D));
								return n.some((D, oe) => D !== '_' && B[oe]) ? (0, t.Y)('div', { className: 'ss__autocomplete__row', children: B }) : null;
							}
							if (n == 'c1' && j?.layout?.length) {
								const B = j.layout.map((D) => Pe(D));
								return j.layout.some((D, oe) => (Array.isArray(D) || D !== '_') && !!B[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c1', children: B })
									: null;
							}
							if (n == 'c2' && N?.layout?.length) {
								const B = N.layout.map((D) => Pe(D));
								return N.layout.some((D, oe) => (Array.isArray(D) || D !== '_') && !!B[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c2', children: B })
									: null;
							}
							if (n == 'c3' && R?.layout?.length) {
								const B = R.layout.map((D) => Pe(D));
								return R.layout.some((D, oe) => (Array.isArray(D) || D !== '_') && !!B[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c3', children: B })
									: null;
							}
							if (n == 'c4' && te?.layout?.length) {
								const B = te.layout.map((D) => Pe(D));
								return te.layout.some((D, oe) => (Array.isArray(D) || D !== '_') && !!B[oe])
									? (0, t.Y)('div', { className: 'ss__autocomplete__column ss__autocomplete__column--c4', children: B })
									: null;
							}
							if (n == 'termsList')
								return !Ee?.length && !Oe?.length && !Z?.length
									? null
									: (0, t.Y)('div', {
											className: U()('ss__autocomplete__terms-wrapper'),
											children: (0, t.Y)(C.G, { controller: a, ...l.termsList }),
									  });
							if (n == 'terms.history')
								return Oe?.length
									? (0, t.Y)(O.i, {
											controller: a,
											terms: a.store.history,
											className: 'ss__terms-list__terms--history',
											name: 'history',
											limit: a.config.settings?.history?.limit,
											...l.terms,
											title: 'History',
									  })
									: null;
							if (n == 'terms.trending')
								return Z?.length
									? (0, t.Y)(O.i, {
											controller: a,
											terms: a.store.trending,
											className: 'ss__terms-list__terms--trending',
											name: 'trending',
											limit: a.config.settings?.trending?.limit,
											...l.terms,
											title: 'Trending',
									  })
									: null;
							if (n == 'terms.suggestions')
								return Ee?.length
									? (0, t.Y)(O.i, {
											controller: a,
											terms: a.store.terms,
											className: 'ss__terms-list__terms--suggestions',
											name: 'suggestions',
											...l.terms,
											title: 'Suggestions',
									  })
									: null;
							if (n == 'facets')
								return xe.length
									? (0, t.FD)('div', {
											className: U()('ss__autocomplete__facets-wrapper'),
											children: [
												K || Re.facetsTitle.value
													? (0, t.Y)('div', {
															className: U()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...fe.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(M.J, { ...l.facets, facets: xe }),
														m ? null : (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (n == 'facetsHorizontal')
								return xe.length
									? (0, t.FD)(t.FK, {
											children: [
												K || Re.facetsTitle.value
													? (0, t.Y)('div', {
															className: U()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: (0, t.Y)('h5', { ...fe.facetsTitle?.all }),
													  })
													: null,
												(0, t.FD)('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(0, t.Y)(G.b, { ...l.facetsHorizontal, facets: xe }),
														m ? null : (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.LEFT, name: 'left' }),
													],
												}),
											],
									  })
									: null;
							if (n == 'content' && Le)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										me.length > 0 || ie
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														m ? null : (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.HEADER, name: 'header' }),
														m ? null : (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.BANNER, name: 'banner' }),
														me.length > 0
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(p || Re.contentTitle.value) && me.length > 0
																			? (0, t.Y)('div', {
																					className: U()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, t.Y)('h5', { ...fe.contentTitle?.all }),
																			  })
																			: null,
																		(0, t.Y)(k.n, { results: me, ...l.results, controller: a }),
																	],
															  })
															: ie
															? (0, t.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...fe.noResultsText?.all }),
																		Te && ve?.store?.loaded
																			? (0, t.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
																					children: (0, t.Y)(Te, {
																						controller: ve,
																						title: ve.store?.profile?.display?.templateParameters?.title,
																						resultComponent: Ae,
																						name: 'noResultsRecommendations',
																						treePath: s.treePath,
																					}),
																			  })
																			: null,
																	],
															  })
															: null,
														m ? null : (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.FOOTER, name: 'footer' }),
													],
											  })
											: null,
								});
							if (n == 'no-results' && Le)
								return (0, t.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										me.length == 0 && !Me
											? (0, t.FD)('div', {
													className: 'ss__autocomplete__content__no-results',
													children: [
														(0, t.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...fe.noResultsText?.all }),
														Te && ve?.store?.loaded
															? (0, t.Y)('div', {
																	className: 'ss__autocomplete__content__no-results__recommendations',
																	children: (0, t.Y)(Te, {
																		controller: ve,
																		title: ve.store?.profile?.display?.templateParameters?.title,
																		resultComponent: Ae,
																		name: 'noResultsRecommendations',
																		treePath: s.treePath,
																	}),
															  })
															: null,
													],
											  })
											: (0, t.Y)(t.FK, {}),
								});
							if (n == 'tabSelection') return F ? (0, t.Y)(q.E, { ...l.tabSelection, tabManager: F }) : null;
							if (n == '_') return (0, t.Y)('div', { className: 'ss__autocomplete__separator' });
							if (n == 'banner.banner') return (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.BANNER, name: 'banner' });
							if (n == 'banner.footer') return (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.FOOTER, name: 'footer' });
							if (n == 'banner.header') return (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.HEADER, name: 'header' });
							if (n == 'banner.left') return (0, t.Y)(y.l, { ...l.banner, content: re.content, type: i.c.LEFT, name: 'left' });
							if (n == 'button.see-more' && Le && _e?.query?.string && me.length > 0)
								return (0, t.FD)(Q.$, {
									...l.button,
									...fe.seeMoreButton.attributes,
									children: [(0, t.Y)('span', { ...fe.seeMoreButton.value }), (0, t.Y)(S.I, { ...l.icon })],
								});
						};
						return (
							typeof o.layout == 'string' &&
								(o.layout === 'terms' && (ne = [['termsList'], ['no-results'], ['_', 'button.see-more']]),
								o.layout === 'mobile' && (ne = [['termsList'], ['content'], ['_', 'button.see-more']]),
								o.layout === 'tablet' && (ne = [['c1', 'c3']]),
								o.layout === 'desktop' && (ne = [['c1', 'c2', 'c3']])),
							typeof ne == 'string' && (a.log.warn(`unsupported layout found. ${o.layout}`), (ne = [])),
							Ke && ne?.length
								? (0, t.Y)(f._, {
										children: (0, t.FD)('div', {
											...Ne,
											className: U()(
												'ss__autocomplete',
												{ 'ss__autocomplete--terms': o.layout === 'terms' },
												{ 'ss__autocomplete--mobile': o.layout === 'mobile' },
												{ 'ss__autocomplete--desktop': o.layout === 'desktop' },
												{ 'ss__autocomplete--tablet': o.layout === 'tablet' },
												ce,
												Ce
											),
											onClick: (n) => n.stopPropagation(),
											ref: (n) => (0, v.iy)(n, 0, !1, ae),
											children: [
												(0, t.Y)('span', {
													role: 'link',
													ref: (n) => (0, v.iy)(n),
													onClick: () => o.onReset && o.onReset(),
													className: 'ss__autocomplete__close-button',
													style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
													...fe.closeButton?.all,
												}),
												ne?.map((n) => Pe(n)),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/classnames/index.js'),
					L = e.n(h),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(U),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					i = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					S = e('./components/src/components/Molecules/Result/Result.tsx'),
					k = e('./components/src/types.ts'),
					y = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					H = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/withTracking.tsx'),
					f = e('./components/src/providers/snap.tsx'),
					c = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useDisplaySettings.tsx'),
					v = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					C = e('./components/src/hooks/useComponent.tsx'),
					O = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const G = ({ gapSize: I, columns: $ }) =>
						(0, Y.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: I,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${$}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / $}% - (${$ - 1} * ${I} / ${$} ) )`,
								marginRight: I,
								marginBottom: I,
								[`&:nth-of-type(${$}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${$})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					Q = (0, _.W)(S.Q),
					q = (0, b.PA)((I) => {
						const $ = (0, g.u)(),
							se = (0, f.uk)(),
							le = (0, c.LU)(),
							P = {
								0: { columns: I.columns || 1 },
								540: { columns: I.columns || 2 },
								768: { columns: I.columns || 3 },
								991: { columns: I.columns || 4 },
							},
							T = { results: I.controller?.store?.results, columns: 4, gapSize: '20px', layout: k.V.grid, breakpoints: P, treePath: le };
						let s = (0, X.v6)('results', $, T, I);
						if (!(I.theme?.type == 'templates' || $?.type == 'templates')) {
							const F = (0, d.X)(s?.breakpoints || {}),
								ne = A()(s?.theme || {}, F?.theme || {}, { arrayMerge: (l, _e) => _e });
							s = { ...s, ...F, theme: ne };
						}
						const { disableStyles: W, className: ee, internalClassName: o, layout: w, theme: u, excludeBanners: z, controller: r, treePath: K } = s,
							p = s.resultComponent,
							{ overrideElement: j, shouldRenderDefault: N } = (0, O._)('results', s);
						if (!N) return j;
						const R = typeof p == 'string',
							te = R ? p : '',
							ae = se?.templates?.library.import.component.result || {},
							{ ComponentOverride: m, shouldWaitForNamedOverride: pe } = (0, C.x)(ae, R ? te : void 0),
							he = R ? m : p,
							J = {
								result: { internalClassName: 'ss__results__result', ...(0, M.s)({ disableStyles: W }), theme: s?.theme, treePath: K },
								inlineBanner: {
									controller: r,
									internalClassName: 'ss__results__inline-banner',
									...(0, M.s)({ disableStyles: W }),
									theme: s?.theme,
									treePath: K,
								},
							};
						let ce = z ? s.results?.filter((F) => F.type !== E.c.BANNER) : s.results;
						s?.columns && s?.rows && s.columns > 0 && s.rows > 0 && (ce = ce?.slice(0, s.columns * s.rows));
						const Ce = (0, x.Z)({ ...s, columns: w == k.V.list ? 1 : s.columns }, G),
							a = R ? A()(u || {}, { components: { result: { customComponent: p } } }) : u;
						return ce?.length
							? (0, t.Y)(H._, {
									children: (0, t.Y)('div', {
										...Ce,
										className: L()('ss__results', `ss__results-${s.layout}`, ee, o),
										children: ce.map((F) =>
											F.type === E.c.BANNER
												? (0, Y.n)(i._, { ...J.inlineBanner, key: `${r?.id ? `${r?.id}-` : ''}${F.id}`, banner: F, layout: s.layout })
												: pe
												? null
												: he && r
												? (0, t.Y)(v.o, {
														result: F,
														controller: r,
														children: (0, y.Y)(he, { key: `${r?.id ? `${r?.id}-` : ''}${F.id}`, controller: r, result: F, theme: a, treePath: K }),
												  })
												: (0, t.Y)(Q, { ...J.result, result: F, layout: s.layout, controller: r }, `${r?.id ? `${r?.id}-` : ''}${F.id}`)
										),
									}),
							  })
							: null;
					});
				e.d(V, ['n', 0, q]);
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					L = e.n(h),
					U = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const X = ({}) =>
						(0, b.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					x = (0, Y.PA)((H) => {
						const g = (0, A.u)(),
							_ = (0, E.LU)(),
							f = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: _,
							},
							c = (0, k.v6)('termsList', g, f, H),
							{
								layout: d,
								historyTitle: v,
								verticalOptions: C,
								trendingTitle: O,
								suggestionTitle: G,
								retainHistory: Q,
								retainTrending: q,
								treePath: I,
								disableStyles: $,
								className: se,
								internalClassName: le,
								controller: P,
							} = c,
							{ overrideElement: T, shouldRenderDefault: s } = (0, i._)('termsList', c);
						if (!s) return T;
						const W = { terms: { vertical: !!C, ...(0, S.s)({ disableStyles: $ }), theme: c.theme, treePath: I } },
							ee = (0, y.Z)(c, X),
							o = P?.store.history || [],
							w = P?.store.terms || [],
							u = P?.store.trending || [],
							z = u?.filter((m) => m.active).pop(),
							r = o?.filter((m) => m.active).pop(),
							{ loaded: K, results: p, state: j } = P?.store;
						let N = !1;
						u?.length && ((q && K) || (!p.length && !j.input)) && (N = !0);
						let R = !1;
						o?.length && ((Q && K) || (!p.length && !j.input)) && (R = !0),
							!P.store.state.input && (r || z) && (o?.length && (R = !0), u?.length && (N = !0));
						const te = (m) => {
								if (typeof m != 'string') {
									const pe = m?.map((J) => te(J));
									return m?.some((J, ce) => J !== '_' && pe[ce]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: pe }) : null;
								}
								if (m == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (m == 'History' && R)
									return (0, t.Y)(M.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: v,
										terms: o,
										controller: P,
										name: 'history',
										limit: P.config.settings?.history?.limit,
										...W.terms,
									});
								if (m == 'Trending' && N)
									return (0, t.Y)(M.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: O,
										terms: u,
										controller: P,
										name: 'trending',
										limit: P.config.settings?.trending?.limit,
										...W.terms,
									});
								if (m == 'Suggestions')
									return w.length
										? (0, t.Y)(M.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: G,
												terms: w,
												controller: P,
												name: 'suggestions',
												...W.terms,
										  })
										: null;
							},
							ae = d?.map((m) => te(m));
						return ae?.some(Boolean)
							? (0, t.Y)(U._, { children: (0, t.Y)('div', { ...ee, className: L()('ss__terms-list', se, le), children: ae }) })
							: null;
					});
				e.d(V, ['G', 0, x]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(ue, V, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					h = e('../../node_modules/classnames/index.js'),
					L = e.n(h),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/createImpressionObserver.ts');
				const i = { ResultTracker: () => (0, Y.AH)({}) },
					S = (0, b.PA)((k) => {
						const y = (0, U.u)(),
							M = (0, A.v6)('resultTracker', y, {}, k),
							X = { impression: !0, click: !0 },
							{ children: x, result: H, track: g, controller: _, className: f, internalClassName: c, disableStyles: d, style: v } = M,
							C = { ...X, ...g },
							{ ref: O, inViewport: G } = (0, E.Q)();
						G && C.impression && _?.track.product.impression(H);
						const Q = {};
						return (
							d ? v && (Q.css = [v]) : (Q.css = [i.ResultTracker(), v]),
							(0, t.Y)('div', {
								className: L()('ss__result-tracker', `ss__${_?.type}-result-tracker`, f, c),
								onClick: (q) => {
									C.click && _?.track.product.click(q, H);
								},
								ref: O,
								...Q,
								children: x,
							})
						);
					});
				e.d(V, ['o', 0, S]);
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(ue, V, e) {
				e.d(V, { x: () => b });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const Y = '.autocomplete__search-input input';
				function b({ input: h, controllers: L, renderInput: U, buttonSelector: A, renderedInputRef: E, setActive: i }) {
					const [S, k] = (0, t.J0)(h),
						[y, M] = (0, t.J0)(!1),
						X = (0, t.li)(null),
						x = async (g) => {
							for (const _ of g) _.config.selector.includes(Y) || (_.config.selector = `${_.config.selector}, ${Y}`), (X.current = _), await _.bind();
						},
						H = () => {
							i && i(!0),
								setTimeout(async () => {
									y || (k(E.current), await x(L), E?.current?.focus()), M(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							let g = !1;
							const _ = () => {
								g = !1;
							};
							if (U && A) {
								let f;
								if ((typeof A == 'string' ? (f = document.querySelector(A)) : (f = A), f)) {
									const c = () => {
											g = !0;
										},
										d = (O) => {
											(g = !1), O.stopPropagation(), H();
										},
										v = () => {
											g || H();
										},
										C = () => H();
									return (
										f.addEventListener('mousedown', c),
										document.addEventListener('mouseup', _, !0),
										f.addEventListener('click', d),
										f.addEventListener('focus', v),
										f.addEventListener('select', C),
										() => {
											f.removeEventListener('mousedown', c),
												document.removeEventListener('mouseup', _, !0),
												f.removeEventListener('click', d),
												f.removeEventListener('focus', v),
												f.removeEventListener('select', C);
										}
									);
								}
							} else if (i) {
								const f = () => {
										g = !0;
									},
									c = (C) => {
										(g = !1), C.stopPropagation(), i(!0);
									},
									d = () => {
										g || i(!0);
									},
									v = () => i(!0);
								return (
									h.addEventListener('mousedown', f),
									document.addEventListener('mouseup', _, !0),
									h.addEventListener('click', c),
									h.addEventListener('focus', d),
									h.addEventListener('select', v),
									() => {
										h.removeEventListener('mousedown', f),
											document.removeEventListener('mouseup', _, !0),
											h.removeEventListener('click', c),
											h.removeEventListener('focus', d),
											h.removeEventListener('select', v);
									}
								);
							}
						}, []),
						(0, t.vJ)(() => {
							if (h !== S && S) {
								const g = () => {
									h.value = S.value;
								};
								return (
									S.addEventListener('input', g),
									() => {
										S.removeEventListener('input', g);
									}
								);
							}
						}, [S]),
						S
					);
				}
			},
			'./components/src/hooks/useCreateController.tsx'(ue, V, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const Y = (b, h, L) => {
					const [U, A] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							b.getController(L.id)
								.then((E) => {
									A(E);
								})
								.catch(async () => {
									let E = L;
									if (h === 'recommendation' && !L.plugins && !L.middleware)
										try {
											const i = await b.getInstantiator('recommendation');
											E = { ...L, plugins: i.config.config.plugins, middleware: i.config.config.middleware };
										} catch {}
									try {
										const i = await b.createController(h, E);
										A(i);
									} catch (i) {
										console.error(`useCreateController: failed to create controller "${L.id}"`, i);
									}
								});
						}, []),
						U
					);
				};
				e.d(V, ['i', 0, Y]);
			},
		},
	]);
})();
