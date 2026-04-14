'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9518],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'(tt, ge, o) {
				o.d(ge, { j: () => We });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					ve = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					ye = o('../../node_modules/mobx-react-lite/es/index.js'),
					Ee = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					xe = o('../../node_modules/classnames/index.js'),
					g = o.n(xe),
					Te = o('../../node_modules/deepmerge/dist/cjs.js'),
					C = o.n(Te),
					K = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					Oe = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					De = o('./components/src/components/Organisms/Results/Results.tsx'),
					S = o('./components/src/components/Atoms/Banner/Banner.tsx'),
					Pe = o('./components/src/components/Organisms/Facets/Facets.tsx'),
					b = o('./components/src/utilities/cloneWithProps.tsx'),
					U = o('./components/src/utilities/defined.ts'),
					Me = o('./components/src/utilities/mergeProps.ts'),
					Ce = o('./components/src/utilities/mergeStyles.ts'),
					k = o('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					be = o('./components/src/providers/cache.tsx'),
					Ye = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Be = o('./components/src/providers/snap.tsx'),
					Le = o('./components/src/providers/treePath.tsx'),
					Ae = o('./components/src/types.ts'),
					Re = o('./components/src/hooks/useDisplaySettings.tsx'),
					ne = o('./components/src/hooks/useA11y.tsx'),
					$ = o('./components/src/hooks/useLang.tsx'),
					Ie = o('./components/src/hooks/useComponent.tsx');
				const Fe = ({
						hideFacets: i,
						horizontalTerms: a,
						controller: d,
						input: v,
						contentSlot: Y,
						viewportMaxHeight: s,
						vertical: l,
						width: B,
						theme: E,
					}) => {
						let x = 0;
						if (v) {
							let c;
							typeof v == 'string' ? (c = document.querySelector(v)) : (c = v), (x = c?.getBoundingClientRect()?.bottom || 0);
						}
						const I = !!(d.store.search?.query?.string && d.store.results.length === 0);
						return (0, Ee.AH)({
							'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
							display: 'flex',
							flexDirection: l ? 'column' : 'row',
							flexWrap: a && !l ? 'wrap' : void 0,
							position: 'absolute',
							zIndex: '10002',
							border: '1px solid #ebebeb',
							background: '#ffffff',
							width: B,
							maxWidth: '100vw',
							maxHeight: s && x ? `calc(100vh - ${x + 10}px)` : void 0,
							overflowY: s && a && !l ? 'scroll' : void 0,
							'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
							'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
							'&.ss__autocomplete--only-terms': { width: `${l || a || Y ? B : '150px'}` },
							'.ss__autocomplete__title--trending, .ss__autocomplete__title--history, .ss__autocomplete__title--terms': {
								fontWeight: 'normal',
								margin: 0,
								color: '#c5c5c5',
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__autocomplete__title--facets': { order: l ? 2 : void 0 },
							'.ss__autocomplete__terms': {
								display: 'flex',
								flexDirection: 'column',
								flex: '1 1 auto',
								maxWidth: `${l || a ? 'auto' : '150px'}`,
								minWidth: '150px',
								order: 1,
								background: '#f8f8f8',
								'.ss__autocomplete__terms__options': {
									display: l || a ? 'flex' : void 0,
									justifyContent: 'space-evenly',
									flexWrap: 'wrap',
									'.ss__autocomplete__terms__option': {
										flexGrow: l || a ? '1' : void 0,
										textAlign: l || a ? 'center' : void 0,
										wordBreak: 'break-all',
										a: { display: 'block', padding: l || a ? '10px 30px' : '10px', em: { fontStyle: 'normal' } },
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
								flexDirection: l ? 'row' : 'column',
								columnGap: '20px',
								order: 2,
								padding: l ? '10px 20px' : '10px',
								overflowY: l ? void 0 : 'auto',
								'.ss__facets': { display: 'flex', flexDirection: l ? 'row' : 'column', columnGap: '20px' },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
									{ paddingLeft: 0 },
								'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
								'.ss__facet-palette-options__icon': { display: 'none' },
							},
							'.ss__autocomplete__content': {
								display: 'flex',
								flex: `1 1 ${i ? 'auto' : '0%'}`,
								flexDirection: 'column',
								justifyContent: 'space-between',
								order: 3,
								overflowY: 'auto',
								margin: I ? '0 auto' : void 0,
								padding: l ? '10px 20px' : '10px',
								'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
								'.ss__banner.ss__banner--footer': { margin: '10px 0' },
								'.ss__autocomplete__content__results': { minHeight: '0%' },
								'.ss__autocomplete__content__info': {
									padding: '10px',
									textAlign: I ? 'center' : 'right',
									a: { fontWeight: 'bold', color: E?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
								},
							},
						});
					},
					We = (0, ye.PA)((i) => {
						const a = (0, Ye.u)(),
							d = (0, Be.uk)(),
							Y = {
								termsTitle: '',
								trendingTitle: 'Popular Searches',
								historyTitle: 'Previously Searched',
								facetsTitle: '',
								contentTitle: '',
								width: '100%',
								seeMoreButtonIcon: 'angle-right',
								treePath: (0, Le.LU)(),
							};
						let s = (0, Me.v6)('autocomplete', a, Y, i);
						const { customComponent: l } = s;
						if (l) {
							const t = (0, Ie.x)(d?.templates?.library.import.component.autocomplete || {}, l);
							if (t) return (0, e.Y)(t, { ...s });
						}
						const B = (0, k.l)(),
							E = (t) => {
								i.onFacetOptionClick && i.onFacetOptionClick(t), n?.setFocused && n?.setFocused();
							},
							x = (t) => {
								i.onTermClick && i.onTermClick(t), n?.setFocused && n?.setFocused();
							},
							I = {
								components: {
									facet: { valueProps: B, previewOnFocus: !0 },
									facetGridOptions: { onClick: E },
									facetHierarchyOptions: { onClick: E },
									facetListOptions: { onClick: E },
									facetPaletteOptions: { onClick: E },
								},
							};
						if (a?.name) s.theme = C().all([I, s?.theme || {}], { arrayMerge: (t, r) => r });
						else {
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
								r = (0, Re.X)(s.breakpoints) || {},
								P = C().all([t, I, s?.theme || {}, r?.theme || {}], { arrayMerge: (R, M) => M });
							s = { ...s, ...r, theme: P };
						}
						let c = s.input;
						c && typeof c == 'string' && (c = document.querySelector(c));
						const {
								hideTerms: le,
								hideFacets: Ke,
								hideContent: Se,
								hideBanners: F,
								hideLink: Ue,
								hideHistory: X,
								hideTrending: ie,
								retainTrending: ke,
								retainHistory: $e,
								vertical: Z,
								termsTitle: H,
								trendingTitle: G,
								historyTitle: w,
								facetsTitle: J,
								contentTitle: z,
								termsSlot: q,
								facetsSlot: ae,
								contentSlot: re,
								resultsSlot: ce,
								noResultsSlot: _e,
								linkSlot: ue,
								resultComponent: je,
								onTermClick: He,
								seeMoreButtonText: Q,
								seeMoreButtonIcon: ee,
								disableStyles: V,
								className: Ge,
								internalClassName: we,
								controller: n,
								treePath: u,
							} = s,
							T = {
								facets: { limit: 3, ...(0, U.s)({ disableStyles: V }), theme: s.theme, treePath: u },
								banner: {
									internalClassName: 'ss__autocomplete__banner',
									controller: n,
									...(0, U.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								results: {
									internalClassName: 'ss__autocomplete__results',
									breakpoints: s.breakpoints,
									resultComponent: je,
									...(0, U.s)({ disableStyles: V }),
									theme: s.theme,
									treePath: u,
								},
								icon: { internalClassName: 'ss__autocomplete__icon', size: '10px', ...(0, U.s)({ disableStyles: V }), theme: s.theme, treePath: u },
							},
							{
								search: p,
								terms: L,
								trending: y,
								results: _,
								merchandising: O,
								pagination: W,
								loaded: Je,
								filters: te,
								facets: me,
								state: h,
								loading: Qe,
							} = n.store,
							f = n.store.history || [];
						n &&
							typeof c == 'string' &&
							((c = document.querySelector(c)),
							(0, ve.vJ)(() => {
								n.bind();
							}, []));
						const Ve = c === h.focusedInput && (L.length > 0 || y?.length > 0 || f?.length > 0 || (h.input && n.store.loaded)),
							de = y?.filter((t) => t.active).pop(),
							pe = f?.filter((t) => t.active).pop();
						let A = !1;
						y?.length && ((ke && n.store.loaded) || (!_.length && !h.input)) && (A = !0);
						let se = !1;
						f?.length && (($e && n.store.loaded) || (!_.length && !h.input)) && (se = !0),
							!h.input && (pe || de) && (f?.length && (se = !0), y?.length && (A = !0));
						const oe = me.length ? me.filter((t) => t.display !== Ae.Q.SLIDER) : [],
							Xe = (y?.length || f.length) && !Je && !Qe;
						let he = !!(_.length > 0 || Object.keys(O.content).length > 0 || p?.query?.string);
						((ie && de) || (X && pe)) && (he = !1);
						const Ze = !!(p?.query?.string && _.length === 0),
							ze = (0, Ce.Z)(s, Fe),
							fe = () => {
								n.setFocused();
							},
							qe = Q
								? typeof Q == 'function'
									? Q(n)
									: Q
								: `See ${W.totalResults} ${te.length > 0 ? 'filtered' : ''} result${W.totalResults == 1 ? '' : 's'} for "${p.query?.string}"`,
							et = {
								trendingTitle: { value: G },
								termsTitle: { value: H },
								contentTitle: { value: z },
								historyTitle: { value: w },
								closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
								facetsTitle: { value: J },
								noResultsText: {
									value: `<p>No results found for "${p.originalQuery?.string || p.query?.string}".</p><p>Please try another search.</p>`,
								},
								seeMoreButton: { value: qe },
							},
							D = C()(et, s.lang || {}),
							m = (0, $.u)(D, { controller: n });
						return Ve
							? (0, e.Y)(be._, {
									children: (0, e.FD)('div', {
										...ze,
										className: g()('ss__autocomplete', Ge, we, {
											'ss__autocomplete--only-terms': Xe,
											'ss__autocomplete--vertical': Z,
											'ss__autocomplete--no-results': Ze,
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
												(A || L.length > 0 || q || (!X && f.length > 0)) &&
												(0, e.Y)('div', {
													className: g()('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': A }),
													children: q
														? (0, b.Y)(q, {
																terms: L,
																trending: y,
																termsTitle: H,
																trendingTitle: G,
																showTrending: A,
																history: f,
																historyTitle: w,
																valueProps: B,
																emIfy: j,
																onTermClick: He,
																controller: n,
																treePath: u,
														  })
														: (0, e.FD)(e.FK, {
																children: [
																	L.length > 0
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
																						children: L.map((t, r) => {
																							const P = {
																									suggestionsTerm: { attributes: { 'aria-label': `item ${r + 1} of ${L.length}, ${t.value}` } },
																								},
																								R = C()(P, s.lang || {}),
																								M = (0, $.u)(R, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => x(N),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...M.suggestionsTerm?.all,
																									children: j(t.value, h.input || ''),
																								}),
																							});
																						}),
																					}),
																				],
																		  })
																		: null,
																	A && !ie
																		? (0, e.FD)('div', {
																				className: 'ss__autocomplete__terms__trending',
																				children: [
																					G || D.trendingTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																								children: (0, e.Y)('h5', { ...m.trendingTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': G,
																						children: y.map((t, r) => {
																							const P = {
																									trendingTerm: { attributes: { 'aria-label': `item ${r + 1} of ${y.length}, ${t.value}` } },
																								},
																								R = C()(P, s.lang || {}),
																								M = (0, $.u)(R, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => x(N),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...M.trendingTerm?.all,
																									children: j(t.value, h.input || ''),
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
																					w || D.historyTitle.value
																						? (0, e.Y)('div', {
																								className: 'ss__autocomplete__title ss__autocomplete__title--history',
																								children: (0, e.Y)('h5', { ...m.historyTitle?.all }),
																						  })
																						: null,
																					(0, e.Y)('div', {
																						className: 'ss__autocomplete__terms__options',
																						role: 'list',
																						'aria-label': w,
																						children: f.map((t, r) => {
																							const P = { historyTerm: { attributes: { 'aria-label': `item ${r + 1} of ${f.length}, ${t.value}` } } },
																								R = C()(P, s.lang || {}),
																								M = (0, $.u)(R, { controller: n, term: t, index: r });
																							return (0, e.Y)('div', {
																								className: g()('ss__autocomplete__terms__option', {
																									'ss__autocomplete__terms__option--active': t.active,
																								}),
																								children: (0, e.Y)('a', {
																									onClick: (N) => x(N),
																									href: t.url.href,
																									...(0, k.l)(t.preview),
																									role: 'link',
																									...M.historyTerm?.all,
																									children: j(t.value, h.input || ''),
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
											!Ke &&
												(ae
													? (0, e.Y)('div', {
															className: 'ss__autocomplete__facets',
															children: (0, b.Y)(ae, {
																facets: oe,
																merchandising: O,
																facetsTitle: J,
																hideBanners: F,
																controller: n,
																valueProps: B,
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
																		F ? null : (0, e.Y)(S.l, { ...T.banner, content: O.content, type: K.c.LEFT, name: 'left' }),
																	],
																}),
															],
													  })),
											Se
												? null
												: re
												? (0, e.Y)('div', {
														className: 'ss__autocomplete__content',
														children: (0, b.Y)(re, {
															results: _,
															merchandising: O,
															search: p,
															pagination: W,
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
																F ? null : (0, e.Y)(S.l, { ...T.banner, content: O.content, type: K.c.HEADER, name: 'header' }),
																F ? null : (0, e.Y)(S.l, { ...T.banner, content: O.content, type: K.c.BANNER, name: 'banner' }),
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
																				? (0, b.Y)(_e, { search: p, pagination: W, controller: n, treePath: u })
																				: (0, e.Y)('div', { className: 'ss__autocomplete__content__no-results__text', ...m.noResultsText?.all }),
																	  }),
																F ? null : (0, e.Y)(S.l, { ...T.banner, content: O.content, type: K.c.FOOTER, name: 'footer' }),
																Ue
																	? null
																	: ue
																	? (0, b.Y)(ue, { search: p, results: _, pagination: W, filters: te, controller: n, treePath: u })
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
					j = (i, a) => {
						if (i && a) {
							const d = i.match(Ne(a));
							if (a && i && d && typeof d.index == 'number') {
								const v = i.slice(0, d.index),
									Y = i.slice(d.index + a.length, i.length);
								return (0, e.FD)(e.FK, { children: [v ? (0, e.Y)('em', { children: v }) : '', a, Y ? (0, e.Y)('em', { children: Y }) : ''] });
							}
						}
						return (0, e.Y)(e.FK, { children: (0, e.Y)('em', { children: i }) });
					},
					Ne = (i) => i?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			},
		},
	]);
})();
