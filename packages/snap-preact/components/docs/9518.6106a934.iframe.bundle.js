'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9518],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'(et, ge, o) {
				o.d(ge, { j: () => Fe });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					ve = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ye = o('../../node_modules/mobx-react-lite/es/index.js'),
					Ee = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					xe = o('../../node_modules/classnames/index.js'),
					g = o.n(xe),
					Te = o('../../node_modules/deepmerge/dist/cjs.js'),
					C = o.n(Te),
					N = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					Oe = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					De = o('./components/src/components/Organisms/Results/Results.tsx'),
					K = o('./components/src/components/Atoms/Banner/Banner.tsx'),
					Pe = o('./components/src/components/Organisms/Facets/Facets.tsx'),
					b = o('./components/src/utilities/cloneWithProps.tsx'),
					S = o('./components/src/utilities/defined.ts'),
					Me = o('./components/src/utilities/mergeProps.ts'),
					Ce = o('./components/src/utilities/mergeStyles.ts'),
					U = o('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					be = o('./components/src/providers/cache.tsx'),
					Ye = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Be = o('./components/src/providers/treePath.tsx'),
					Le = o('./components/src/types.ts'),
					Ae = o('./components/src/hooks/useDisplaySettings.tsx'),
					ne = o('./components/src/hooks/useA11y.tsx'),
					k = o('./components/src/hooks/useLang.tsx'),
					Re = o('./components/src/hooks/useCustomComponentOverride.tsx');
				const Ie = ({
						hideFacets: l,
						horizontalTerms: i,
						controller: v,
						input: d,
						contentSlot: s,
						viewportMaxHeight: j,
						vertical: a,
						width: Y,
						theme: E,
					}) => {
						let x = 0;
						if (d) {
							let c;
							typeof d == 'string' ? (c = document.querySelector(d)) : (c = d), (x = c?.getBoundingClientRect()?.bottom || 0);
						}
						const R = !!(v.store.search?.query?.string && v.store.results.length === 0);
						return (0, Ee.AH)({
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							display: 'flex',
							flexDirection: a ? 'column' : 'row',
							flexWrap: i && !a ? 'wrap' : void 0,
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							width: Y,
							maxWidth: '100vw',
							maxHeight: j && x ? `calc(100vh - ${x + 10}px)` : void 0,
							overflowY: j && i && !a ? 'scroll' : void 0,
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'&.ss__autocomplete--only-terms': { width: `${a || i || s ? Y : '150px'}` },
							'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
								fontWeight: 'normal',
								margin: 0,
								color: '#c5c5c5',
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__autocomplete__title--facets': { order: a ? 2 : void 0 },
							'.ss__autocomplete__terms': {
								display: 'flex',
								flexDirection: 'column',
								flex: '1 1 auto',
								maxWidth: `${a || i ? 'auto' : '150px'}`,
								minWidth: '150px',
								order: 1,
								background: '#f8f8f8',
								'.ss__autocomplete__terms__options': {
									display: a || i ? 'flex' : void 0,
									justifyContent: 'space-evenly',
									flexWrap: 'wrap',
									'.ss__autocomplete__terms__option': {
										flexGrow: a || i ? '1' : void 0,
										textAlign: a || i ? 'center' : void 0,
										wordBreak: 'break-all',
										a: { display: 'block', padding: a || i ? '10px 30px' : '10px', em: { fontStyle: 'normal' } },
										'&.ss__autocomplete__terms__option--active': {
											background: '#fff',
											a: { fontWeight: 'bold', color: E?.variables?.colors?.primary },
										},
									},
								},
							},
							'.ss__autocomplete__facets': {
								display: 'flex',
								flex: '0 0 150px',
								flexDirection: a ? 'row' : 'column',
								columnGap: '20px',
								order: 2,
								padding: a ? '10px 20px' : '10px',
								overflowY: a ? void 0 : 'auto',
								'.ss__facets': { display: 'flex', flexDirection: a ? 'row' : 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: `1 1 ${l ? 'auto' : '0%'}`,
								flexDirection: 'column',
								justifyContent: 'space-between',
								order: 3,
								overflowY: 'auto',
								margin: R ? '0 auto' : void 0,
								padding: a ? '10px 20px' : '10px',
								'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
								'.ss__banner.ss__banner--footer': { margin: '10px 0' },
								'.ss__autocomplete__content__results': { minHeight: '0%' },
								'.ss__autocomplete__content__info': {
									padding: '10px',
									textAlign: R ? 'center' : 'right',
									a: { fontWeight: 'bold', color: E?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
								},
							},
						});
					},
					Fe = (0, ye.PA)((l) => {
						const i = (0, Ye.u)(),
							d = {
								termsTitle: '',
								trendingTitle: 'Popular Searches',
								historyTitle: 'Previously Searched',
								facetsTitle: '',
								contentTitle: '',
								width: '100%',
								seeMoreButtonIcon: 'angle-right',
								treePath: (0, Be.LU)(),
							};
						let s = (0, Me.v6)('autocomplete', i, d, l);
						const { overrideElement: j, shouldRenderDefault: a } = (0, Re._)('autocomplete', s);
						if (!a) return j;
						const Y = (0, U.l)(),
							E = (t) => {
								l.onFacetOptionClick && l.onFacetOptionClick(t), n?.setFocused && n?.setFocused();
							},
							x = (t) => {
								l.onTermClick && l.onTermClick(t), n?.setFocused && n?.setFocused();
							},
							R = {
								components: {
									facet: { valueProps: Y, previewOnFocus: !0 },
									facetGridOptions: { onClick: E },
									facetHierarchyOptions: { onClick: E },
									facetListOptions: { onClick: E },
									facetPaletteOptions: { onClick: E },
								},
							};
						if (i?.type !== 'templates') {
							s.breakpoints = s.breakpoints || {
								0: {
									columns: 2,
									rows: 1,
									hideFacets: s.hideFacets ?? !0,
									vertical: s.vertical ?? !0,
									hideHistory: s.hideHistory ?? !0,
									hideTrending: s.hideTrending ?? !0,
								},
								540: { columns: 3, rows: 1, vertical: s.vertical ?? !0, hideHistory: s.hideHistory ?? !0, hideTrending: s.hideTrending ?? !0 },
								768: { columns: 2, rows: 3 },
							};
							const t = {
									components: {
										facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
										facetGridOptions: { columns: 3 },
										facetHierarchyOptions: { hideCount: !0 },
										facetListOptions: { hideCheckbox: !0, hideCount: !0 },
										facetPaletteOptions: { hideLabel: !0, columns: 3 },
										result: { hideBadge: !0, hideVariantSelections: !0 },
									},
								},
								r = (0, Ae.X)(s.breakpoints) || {},
								P = C().all([t, R, s?.theme || {}, r?.theme || {}], { arrayMerge: (A, M) => M });
							s = { ...s, ...r, theme: P };
						} else s.theme = C().all([R, s?.theme || {}], { arrayMerge: (t, r) => r });
						let c = s.input;
						c && typeof c == 'string' && (c = document.querySelector(c));
						const {
								hideTerms: le,
								hideFacets: Ne,
								hideContent: Ke,
								hideBanners: I,
								hideLink: Se,
								hideHistory: X,
								hideTrending: ie,
								retainTrending: Ue,
								retainHistory: ke,
								vertical: Z,
								termsTitle: H,
								trendingTitle: w,
								historyTitle: G,
								facetsTitle: J,
								contentTitle: z,
								termsSlot: q,
								facetsSlot: ae,
								contentSlot: re,
								resultsSlot: ce,
								noResultsSlot: _e,
								linkSlot: ue,
								resultComponent: $e,
								onTermClick: je,
								seeMoreButtonText: Q,
								seeMoreButtonIcon: ee,
								disableStyles: V,
								className: He,
								internalClassName: we,
								controller: n,
								treePath: u,
							} = s,
							T = {
								facets: { limit: 3, ...(0, S.s)({ disableStyles: V }), theme: s.theme, treePath: u },
								banner: {
									internalClassName: 'ss__autocomplete__banner',
									controller: n,
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								results: {
									internalClassName: 'ss__autocomplete__results',
									breakpoints: s.breakpoints,
									resultComponent: $e,
									...(0, S.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								icon: { internalClassName: 'ss__autocomplete__icon', size: '10px', ...(0, S.s)({ disableStyles: V }), theme: s.theme, treePath: u },
							},
							{
								search: p,
								terms: B,
								trending: y,
								results: _,
								merchandising: O,
								pagination: F,
								loaded: Ge,
								filters: te,
								facets: me,
								state: h,
								loading: Je,
							} = n.store,
							f = n.store.history || [];
						n &&
							typeof c == 'string' &&
							((c = document.querySelector(c)),
							(0, ve.vJ)(() => {
								n.bind();
							}, []));
						const Qe = c === h.focusedInput && (B.length > 0 || y?.length > 0 || f?.length > 0 || (h.input && n.store.loaded)),
							de = y?.filter((t) => t.active).pop(),
							pe = f?.filter((t) => t.active).pop();
						let L = !1;
						y?.length && ((Ue && n.store.loaded) || (!_.length && !h.input)) && (L = !0);
						let se = !1;
						f?.length && ((ke && n.store.loaded) || (!_.length && !h.input)) && (se = !0),
							!h.input && (pe || de) && (f?.length && (se = !0), y?.length && (L = !0));
						const oe = me.length ? me.filter((t) => t.display !== Le.Q.SLIDER) : [],
							Ve = (y?.length || f.length) && !Ge && !Je;
						let he = !!(_.length > 0 || Object.keys(O.content).length > 0 || p?.query?.string);
						((ie && de) || (X && pe)) && (he = !1);
						const Xe = !!(p?.query?.string && _.length === 0),
							Ze = (0, Ce.Z)(s, Ie),
							fe = () => {
								n.setFocused();
							},
							ze = Q
								? typeof Q == 'function'
									? Q(n)
									: Q
								: `See ${F.totalResults} ${te.length > 0 ? 'filtered' : ''} result${F.totalResults == 1 ? '' : 's'} for "${p.query?.string}"`,
							qe = {
								trendingTitle: { value: w },
								termsTitle: { value: H },
								contentTitle: { value: z },
								historyTitle: { value: G },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: J },
								noResultsText: {
									value: `<p>No results found for "${p.originalQuery?.string || p.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: { value: ze },
							},
							D = C()(qe, s.lang || {}),
							m = (0, k.u)(D, { controller: n });
						return Qe
							? (0, e.Y)(be._, {
									children: (0, e.FD)('div', {
										...Ze,
										className: g()('ss__autocomplete', He, we, {
											'ss__autocomplete--only-terms': Ve,
											'ss__autocomplete--vertical': Z,
											'ss__autocomplete--no-results': Xe,
										}),
										onClick: (t) => t.stopPropagation(),
										ref: (t) => (0, ne.iy)(t, 0, !0, fe),
										children: [
											(0, e.Y)('span', {
												role: 'link',
												ref: (t) => (0, ne.iy)(t),
												onClick: () => fe(),
												className: 'ss__autocomplete__close-button',
												style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
												...m.closeButton?.all,
											}),
											!le &&
												(L || B.length > 0 || q || (!X && f.length > 0)) &&
												(0, e.Y)('div', {
													className: g()('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': L }),
													children: q
														? (0, b.Y)(q, {
																terms: B,
																trending: y,
																termsTitle: H,
																trendingTitle: w,
																showTrending: L,
																history: f,
																historyTitle: G,
																valueProps: Y,
																emIfy: $,
																onTermClick: je,
																controller: n,
																treePath: u,
														  })
														: (0, e.FD)(e.FK, {
																children: [
																	B.length > 0
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__suggestions',
																				children: [
																					H || D.termsTitle.value
																						? (0, e.Y)('div', {
																								className:
																									'ss__autocomplete__title ss__autocomplete__title--terms ss__autocomplete__title--suggestions',
																								children: (0, e.Y)('h5', { ...m.termsTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': H,
																						children: B.map((t, r) => {
																							const P = {
																									suggestionsTerm: { attributes: { 'aria-label': `item ${r + 1} of ${B.length}, ${t.value}` } },
																								},
																								A = C()(P, s.lang || {}),
																								M = (0, k.u)(A, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => x(W),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...M.suggestionsTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	L && !ie
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__trending',
																				children: [
																					w || D.trendingTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																								children: (0, e.Y)('h5', { ...m.trendingTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': w,
																						children: y.map((t, r) => {
																							const P = {
																									trendingTerm: { attributes: { 'aria-label': `item ${r + 1} of ${y.length}, ${t.value}` } },
																								},
																								A = C()(P, s.lang || {}),
																								M = (0, k.u)(A, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => x(W),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...M.trendingTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	se && !X
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__history',
																				children: [
																					G || D.historyTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--history',
																								children: (0, e.Y)('h5', { ...m.historyTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': G,
																						children: f.map((t, r) => {
																							const P = { historyTerm: { attributes: { 'aria-label': `item ${r + 1} of ${f.length}, ${t.value}` } } },
																								A = C()(P, s.lang || {}),
																								M = (0, k.u)(A, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (W) => x(W),
																									href: t.url.href,
																									...(0, U.l)(t.preview),
																									role: 'link',
																									...M.historyTerm?.all,
																									children: $(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																],
														  }),
												}),
											!Ne &&
												(ae
													? (0, e.Y)('div', {
															className: 'ss__autocomplete__facets',
															children: (0, b.Y)(ae, {
																facets: oe,
																merchandising: O,
																facetsTitle: J,
																hideBanners: I,
																controller: n,
																valueProps: Y,
																treePath: u,
															}),
													  })
													: oe.length > 0 &&
													  (0, e.FD)(e.FK, {
															children: [
																(J || D.facetsTitle.value) && Z
																	? (0, e.Y)('div', {
																			className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																			children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																	  })
																	: null,
																(0, e.FD)('div', {
																	className: 'ss__autocomplete__facets',
																	children: [
																		(J || D.facetsTitle.value) && !Z
																			? (0, e.Y)('div', {
																					className: g()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																					children: (0, e.Y)('h5', { ...m.facetsTitle?.all }),
																			  })
																			: null,
																		(0, e.Y)(Pe.J, { ...T.facets, facets: oe }),
																		I ? null : (0, e.Y)(K.l, { ...T.banner, content: O.content, type: N.c.LEFT, name: 'left' }),
																	],
																}),
															],
													  })),
											Ke
												? null
												: re
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, b.Y)(re, {
															results: _,
															merchandising: O,
															search: p,
															pagination: F,
															filters: te,
															controller: n,
															treePath: u,
														}),
												  })
												: he
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, e.FD)(e.FK, {
															children: [
																I ? null : (0, e.Y)(K.l, { ...T.banner, content: O.content, type: N.c.HEADER, name: 'header' }),
																I ? null : (0, e.Y)(K.l, { ...T.banner, content: O.content, type: N.c.BANNER, name: 'banner' }),
																_.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__results',
																			children: ce
																				? (0, b.Y)(ce, { results: _, contentTitle: z, controller: n, treePath: u })
																				: (0, e.FD)(e.FK, {
																						children: [
																							(z || D.contentTitle.value) && _.length > 0
																								? (0, e.Y)('div', {
																										className: g()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																										children: (0, e.Y)('h5', { ...m.contentTitle?.all }),
																								  })
																								: null,
																							(0, e.Y)(De.n, { results: _, ...T.results, controller: n }),
																						],
																				  }),
																	  })
																	: (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__no-results',
																			children: _e
																				? (0, b.Y)(_e, { search: p, pagination: F, controller: n, treePath: u })
																				: (0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...m.noResultsText?.all }),
																	  }),
																I ? null : (0, e.Y)(K.l, { ...T.banner, content: O.content, type: N.c.FOOTER, name: 'footer' }),
																Se
																	? null
																	: ue
																	? (0, b.Y)(ue, { search: p, results: _, pagination: F, filters: te, controller: n, treePath: u })
																	: p?.query?.string && _.length > 0
																	? (0, e.Y)('div', {
																			className: 'ss__autocomplete__content__info',
																			children: (0, e.FD)('a', {
																				href: h.url.href,
																				onClick: () => n?.setFocused && n.setFocused(),
																				...m.seeMoreButton.attributes,
																				children: [
																					(0, e.Y)('span', { ...m.seeMoreButton.value }),
																					(0, e.Y)(Oe.I, { ...T.icon, ...(typeof ee == 'string' ? { icon: ee } : ee) }),
																				],
																			}),
																	  })
																	: null,
															],
														}),
												  })
												: null,
										],
									}),
							  })
							: null;
					}),
					$ = (l, i) => {
						if (l && i) {
							const v = l.match(We(i));
							if (i && l && v && typeof v.index == 'number') {
								const d = l.slice(0, v.index),
									s = l.slice(v.index + i.length, l.length);
								return (0, e.FD)(e.FK, { children: [d ? (0, e.Y)('em', { children: d }) : '', i, s ? (0, e.Y)('em', { children: s }) : ''] });
							}
						}
						return (0, e.Y)(e.FK, { children: (0, e.Y)('em', { children: l }) });
					},
					We = (l) => l?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			},
		},
	]);
})();
