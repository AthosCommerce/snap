import {
	o as Ae,
	u as He,
	a as De,
	m as Ee,
	b as Me,
	n as O,
	y as We,
	c as je,
	j as e,
	l as _,
	p as $,
	F as P,
	d as y,
	f as Y,
	I as qe,
	C as Ie,
	e as Ge,
} from './iframe-Bc4KSH0T.js';
import { F as Ye } from './types-DqusP3LW.js';
import { u as Ve } from './useDisplaySettings-7OChHsa4.js';
import { d as V } from './defined-CdKp_MB-.js';
import { u as Q } from './useLang-Dx66cFD0.js';
import { u as ge } from './useA11y-BuGQuOJb.js';
import { c as J } from './createHoverProps-B_zlUBHN.js';
import { F as Qe } from './Facets-DXg3Av-H.js';
import { B as K } from './Banner-CMX4Y7Vh.js';
import { R as Je } from './Results-xmDCY8C2.js';
const Ke = ({
		hideFacets: l,
		horizontalTerms: n,
		controller: g,
		input: m,
		contentSlot: s,
		viewportMaxHeight: E,
		vertical: a,
		width: w,
		theme: b,
	}) => {
		let x = 0;
		if (m) {
			let r;
			typeof m == 'string' ? (r = document.querySelector(m)) : (r = m), (x = r?.getBoundingClientRect()?.bottom || 0);
		}
		const R = !!(g.store.search?.query?.string && g.store.results.length === 0);
		return Ge({
			'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
			display: 'flex',
			flexDirection: a ? 'column' : 'row',
			flexWrap: n && !a ? 'wrap' : void 0,
			position: 'absolute',
			zIndex: '10002',
			border: '1px solid #ebebeb',
			background: '#ffffff',
			width: w,
			maxWidth: '100vw',
			maxHeight: E && x ? `calc(100vh - ${x + 10}px)` : void 0,
			overflowY: E && n && !a ? 'scroll' : void 0,
			'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
			'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
			'&.ss__autocomplete--only-terms': { width: `${a || n || s ? w : '150px'}` },
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
				maxWidth: `${a || n ? 'auto' : '150px'}`,
				minWidth: '150px',
				order: 1,
				background: '#f8f8f8',
				'.ss__autocomplete__terms__options': {
					display: a || n ? 'flex' : void 0,
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
					'.ss__autocomplete__terms__option': {
						flexGrow: a || n ? '1' : void 0,
						textAlign: a || n ? 'center' : void 0,
						wordBreak: 'break-all',
						a: { display: 'block', padding: a || n ? '10px 30px' : '10px', em: { fontStyle: 'normal' } },
						'&.ss__autocomplete__terms__option--active': { background: '#fff', a: { fontWeight: 'bold', color: b?.variables?.colors?.primary } },
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
			'.ss__banner': { 'iframe, img': { maxWidth: '100%', height: 'auto' } },
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
					a: { fontWeight: 'bold', color: b?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
				},
			},
		});
	},
	it = Ae((l) => {
		const n = He(),
			m = {
				termsTitle: '',
				trendingTitle: 'Popular Searches',
				historyTitle: 'Previously Searched',
				facetsTitle: '',
				contentTitle: '',
				width: '100%',
				seeMoreButtonIcon: 'angle-right',
				treePath: De(),
			};
		let s = Ee('autocomplete', n, m, l);
		const { overrideElement: E, shouldRenderDefault: a } = Me('autocomplete', s);
		if (!a) return E;
		const w = J(),
			b = (t) => {
				l.onFacetOptionClick && l.onFacetOptionClick(t), o?.setFocused && o?.setFocused();
			},
			x = (t) => {
				l.onTermClick && l.onTermClick(t), o?.setFocused && o?.setFocused();
			},
			R = {
				components: {
					facet: { valueProps: w, previewOnFocus: !0 },
					facetGridOptions: { onClick: b },
					facetHierarchyOptions: { onClick: b },
					facetListOptions: { onClick: b },
					facetPaletteOptions: { onClick: b },
				},
			};
		if (n?.type !== 'templates') {
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
				i = Ve(s.breakpoints) || {},
				N = O.all([t, R, s?.theme || {}, i?.theme || {}], { arrayMerge: (L, B) => B });
			s = { ...s, ...i, theme: N };
		} else s.theme = O.all([R, s?.theme || {}], { arrayMerge: (t, i) => i });
		let r = s.input;
		r && typeof r == 'string' && (r = document.querySelector(r));
		const {
				hideTerms: le,
				hideFacets: ve,
				hideContent: ye,
				hideBanners: A,
				hideLink: be,
				hideHistory: X,
				hideTrending: ae,
				retainTrending: xe,
				retainHistory: Te,
				vertical: Z,
				termsTitle: M,
				trendingTitle: W,
				historyTitle: j,
				facetsTitle: q,
				contentTitle: z,
				termsSlot: ee,
				facetsSlot: ie,
				contentSlot: re,
				resultsSlot: ce,
				noResultsSlot: _e,
				linkSlot: ue,
				resultComponent: ke,
				onTermClick: Ce,
				seeMoreButtonText: I,
				seeMoreButtonIcon: te,
				disableStyles: G,
				className: Ne,
				internalClassName: Be,
				controller: o,
				treePath: u,
			} = s,
			T = {
				facets: { limit: 3, ...V({ disableStyles: G }), theme: s.theme, treePath: u },
				banner: { internalClassName: 'ss__autocomplete__banner', controller: o, ...V({ disableStyles: G }), theme: s.theme, treePath: u },
				results: {
					internalClassName: 'ss__autocomplete__results',
					breakpoints: s.breakpoints,
					resultComponent: ke,
					...V({ disableStyles: G }),
					theme: s.theme,
					treePath: u,
				},
				icon: { internalClassName: 'ss__autocomplete__icon', size: '10px', ...V({ disableStyles: G }), theme: s.theme, treePath: u },
			},
			{
				search: d,
				terms: S,
				trending: v,
				results: c,
				merchandising: k,
				pagination: H,
				loaded: we,
				filters: se,
				facets: pe,
				state: h,
				loading: Se,
			} = o.store,
			f = o.store.history || [];
		o &&
			typeof r == 'string' &&
			((r = document.querySelector(r)),
			We(() => {
				o.bind();
			}, []));
		const Fe = r === h.focusedInput && (S.length > 0 || v?.length > 0 || f?.length > 0 || (h.input && o.store.loaded)),
			me = v?.filter((t) => t.active).pop(),
			de = f?.filter((t) => t.active).pop();
		let F = !1;
		v?.length && ((xe && o.store.loaded) || (!c.length && !h.input)) && (F = !0);
		let oe = !1;
		f?.length && ((Te && o.store.loaded) || (!c.length && !h.input)) && (oe = !0),
			!h.input && (de || me) && (f?.length && (oe = !0), v?.length && (F = !0));
		const ne = pe.length ? pe.filter((t) => t.display !== Ye.SLIDER) : [],
			Le = (v?.length || f.length) && !we && !Se;
		let he = !!(c.length > 0 || Object.keys(k.content).length > 0 || d?.query?.string);
		((ae && me) || (X && de)) && (he = !1);
		const Oe = !!(d?.query?.string && c.length === 0),
			$e = je(s, Ke),
			fe = () => {
				o.setFocused();
			},
			Pe = I
				? typeof I == 'function'
					? I(o)
					: I
				: `See ${H.totalResults} ${se.length > 0 ? 'filtered' : ''} result${H.totalResults == 1 ? '' : 's'} for "${d.query?.string}"`,
			Re = {
				trendingTitle: { value: W },
				termsTitle: { value: M },
				contentTitle: { value: z },
				historyTitle: { value: j },
				closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
				facetsTitle: { value: q },
				noResultsText: { value: `<p>No results found for "${d.originalQuery?.string || d.query?.string}".</p><p>Please try another search.</p>` },
				seeMoreButton: { value: Pe },
			},
			C = O(Re, s.lang || {}),
			p = Q(C, { controller: o }, { activeBreakpoint: n?.activeBreakpoint });
		return Fe
			? e(Ie, {
					children: _('div', {
						...$e,
						className: y('ss__autocomplete', Ne, Be, {
							'ss__autocomplete--only-terms': Le,
							'ss__autocomplete--vertical': Z,
							'ss__autocomplete--no-results': Oe,
						}),
						onClick: (t) => t.stopPropagation(),
						ref: (t) => ge(t, 0, !0, fe),
						children: [
							e('span', {
								role: 'link',
								ref: (t) => ge(t),
								onClick: () => fe(),
								className: 'ss__autocomplete__close-button',
								style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
								...p.closeButton?.all,
							}),
							!le &&
								(F || S.length > 0 || ee || (!X && f.length > 0)) &&
								e('div', {
									className: y('ss__autocomplete__terms', { 'ss__autocomplete__terms-trending': F }),
									children: ee
										? $(ee, {
												terms: S,
												trending: v,
												termsTitle: M,
												trendingTitle: W,
												showTrending: F,
												history: f,
												historyTitle: j,
												valueProps: w,
												emIfy: U,
												onTermClick: Ce,
												controller: o,
												treePath: u,
										  })
										: _(P, {
												children: [
													S.length > 0
														? _('div', {
																className: 'ss__autocomplete__terms__suggestions',
																children: [
																	M || C.termsTitle.value
																		? e('div', {
																				className: 'ss__autocomplete__title ss__autocomplete__title--terms ss__autocomplete__title--suggestions',
																				children: e('h5', { ...p.termsTitle?.all }),
																		  })
																		: null,
																	e('div', {
																		className: 'ss__autocomplete__terms__options',
																		role: 'list',
																		'aria-label': M,
																		children: S.map((t, i) => {
																			const N = { suggestionsTerm: { attributes: { 'aria-label': `item ${i + 1} of ${S.length}, ${t.value}` } } },
																				L = O(N, s.lang || {}),
																				B = Q(L, { controller: o, term: t, index: i }, { activeBreakpoint: n?.activeBreakpoint });
																			return e('div', {
																				className: y('ss__autocomplete__terms__option', { 'ss__autocomplete__terms__option--active': t.active }),
																				children: e('a', {
																					onClick: (D) => x(D),
																					href: t.url.href,
																					...J(t.preview),
																					role: 'link',
																					...B.suggestionsTerm?.all,
																					children: U(t.value, h.input || ''),
																				}),
																			});
																		}),
																	}),
																],
														  })
														: null,
													F && !ae
														? _('div', {
																className: 'ss__autocomplete__terms__trending',
																children: [
																	W || C.trendingTitle.value
																		? e('div', {
																				className: 'ss__autocomplete__title ss__autocomplete__title--trending',
																				children: e('h5', { ...p.trendingTitle?.all }),
																		  })
																		: null,
																	e('div', {
																		className: 'ss__autocomplete__terms__options',
																		role: 'list',
																		'aria-label': W,
																		children: v.map((t, i) => {
																			const N = { trendingTerm: { attributes: { 'aria-label': `item ${i + 1} of ${v.length}, ${t.value}` } } },
																				L = O(N, s.lang || {}),
																				B = Q(L, { controller: o, term: t, index: i }, { activeBreakpoint: n?.activeBreakpoint });
																			return e('div', {
																				className: y('ss__autocomplete__terms__option', { 'ss__autocomplete__terms__option--active': t.active }),
																				children: e('a', {
																					onClick: (D) => x(D),
																					href: t.url.href,
																					...J(t.preview),
																					role: 'link',
																					...B.trendingTerm?.all,
																					children: U(t.value, h.input || ''),
																				}),
																			});
																		}),
																	}),
																],
														  })
														: null,
													oe && !X
														? _('div', {
																className: 'ss__autocomplete__terms__history',
																children: [
																	j || C.historyTitle.value
																		? e('div', {
																				className: 'ss__autocomplete__title ss__autocomplete__title--history',
																				children: e('h5', { ...p.historyTitle?.all }),
																		  })
																		: null,
																	e('div', {
																		className: 'ss__autocomplete__terms__options',
																		role: 'list',
																		'aria-label': j,
																		children: f.map((t, i) => {
																			const N = { historyTerm: { attributes: { 'aria-label': `item ${i + 1} of ${f.length}, ${t.value}` } } },
																				L = O(N, s.lang || {}),
																				B = Q(L, { controller: o, term: t, index: i }, { activeBreakpoint: n?.activeBreakpoint });
																			return e('div', {
																				className: y('ss__autocomplete__terms__option', { 'ss__autocomplete__terms__option--active': t.active }),
																				children: e('a', {
																					onClick: (D) => x(D),
																					href: t.url.href,
																					...J(t.preview),
																					role: 'link',
																					...B.historyTerm?.all,
																					children: U(t.value, h.input || ''),
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
							!ve &&
								(ie
									? e('div', {
											className: 'ss__autocomplete__facets',
											children: $(ie, { facets: ne, merchandising: k, facetsTitle: q, hideBanners: A, controller: o, valueProps: w, treePath: u }),
									  })
									: ne.length > 0 &&
									  _(P, {
											children: [
												(q || C.facetsTitle.value) && Z
													? e('div', {
															className: y('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
															children: e('h5', { ...p.facetsTitle?.all }),
													  })
													: null,
												_('div', {
													className: 'ss__autocomplete__facets',
													children: [
														(q || C.facetsTitle.value) && !Z
															? e('div', {
																	className: y('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
																	children: e('h5', { ...p.facetsTitle?.all }),
															  })
															: null,
														e(Qe, { ...T.facets, facets: ne }),
														A ? null : e(K, { ...T.banner, content: k.content, type: Y.LEFT, name: 'left' }),
													],
												}),
											],
									  })),
							ye
								? null
								: re
								? e('div', {
										className: 'ss__autocomplete__content',
										children: $(re, { results: c, merchandising: k, search: d, pagination: H, filters: se, controller: o, treePath: u }),
								  })
								: he
								? e('div', {
										className: 'ss__autocomplete__content',
										children: _(P, {
											children: [
												A ? null : e(K, { ...T.banner, content: k.content, type: Y.HEADER, name: 'header' }),
												A ? null : e(K, { ...T.banner, content: k.content, type: Y.BANNER, name: 'banner' }),
												c.length > 0
													? e('div', {
															className: 'ss__autocomplete__content__results',
															children: ce
																? $(ce, { results: c, contentTitle: z, controller: o, treePath: u })
																: _(P, {
																		children: [
																			(z || C.contentTitle.value) && c.length > 0
																				? e('div', {
																						className: y('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																						children: e('h5', { ...p.contentTitle?.all }),
																				  })
																				: null,
																			e(Je, { results: c, ...T.results, controller: o }),
																		],
																  }),
													  })
													: e('div', {
															className: 'ss__autocomplete__content__no-results',
															children: _e
																? $(_e, { search: d, pagination: H, controller: o, treePath: u })
																: e('div', { className: 'ss__autocomplete__content__no-results__text', ...p.noResultsText?.all }),
													  }),
												A ? null : e(K, { ...T.banner, content: k.content, type: Y.FOOTER, name: 'footer' }),
												be
													? null
													: ue
													? $(ue, { search: d, results: c, pagination: H, filters: se, controller: o, treePath: u })
													: d?.query?.string && c.length > 0
													? e('div', {
															className: 'ss__autocomplete__content__info',
															children: _('a', {
																href: h.url.href,
																onClick: () => o?.setFocused && o.setFocused(),
																...p.seeMoreButton.attributes,
																children: [
																	e('span', { ...p.seeMoreButton.value }),
																	e(qe, { ...T.icon, ...(typeof te == 'string' ? { icon: te } : te) }),
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
	U = (l, n) => {
		if (l && n) {
			const g = l.match(Ue(n));
			if (n && l && g && typeof g.index == 'number') {
				const m = l.slice(0, g.index),
					s = l.slice(g.index + n.length, l.length);
				return _(P, { children: [m ? e('em', { children: m }) : '', n, s ? e('em', { children: s }) : ''] });
			}
		}
		return e(P, { children: e('em', { children: l }) });
	},
	Ue = (l) => l?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export { it as A };
