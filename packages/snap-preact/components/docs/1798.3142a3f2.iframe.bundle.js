'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1798],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/providers/cache.tsx'),
					T = e('./components/src/providers/controller.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/withTracking.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					K = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					S = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const N = () => (0, d.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					C = (0, T.Bk)(
						(0, D.PA)((p) => {
							const n = (0, A.u)(),
								u = { treePath: (0, i.LU)() },
								l = (0, K.v6)('banner', n, u, p),
								{ controller: r, type: o, className: E, internalClassName: W } = l,
								y = l.content || r?.store?.merchandising.content,
								{ overrideElement: x, shouldRenderDefault: O } = (0, m._)('banner', l);
							if (!O) return x;
							if (o === R.c.INLINE) return console.warn(`BannerType '${R.c.INLINE}' is not supported in <Banner /> component`), null;
							const M = (0, I.Z)(l, N),
								h = y?.[o]?.[0]?.value;
							if (!o || !h) return null;
							const c = (0, S.hb)(
								(0, g.W)((P) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${o}`, E, W),
										...M,
										ref: P.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof h == 'string' ? h : h.join('') },
									})
								),
								[h, o]
							);
							return (0, t.Y)(b._, { children: (0, t.Y)(c, { ...l }) });
						})
					);
				e.d(U, ['l', 0, C]);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const R = () =>
						(0, D.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					S = (0, s.PA)((N) => {
						const C = (0, T.u)(),
							n = {
								separator: '>',
								treePath: (0, A.LU)(),
								data: N.controller
									? (P) => [
											{ label: 'Search' },
											{ label: `Results ${P?.store.search?.query?.string ? `for "${P?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							a = (0, i.v6)('breadcrumbs', C, n, N),
							{ data: u, separator: l, separatorIcon: r, className: o, internalClassName: E, controller: W, disableStyles: y, treePath: x } = a,
							{ overrideElement: O, shouldRenderDefault: M } = (0, m._)('breadcrumbs', a);
						if (!M) return O;
						const j = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, g.s)({ disableStyles: y }), theme: a?.theme, treePath: x },
							},
							h = (0, K.Z)(a, R);
						let c;
						return (
							typeof u == 'function' ? (c = u(W)) : (c = u),
							c
								? (0, t.Y)(b._, {
										children: (0, t.Y)('div', {
											...h,
											className: v()('ss__breadcrumbs', o, E),
											children: (0, t.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: c
													.map((P) =>
														(0, t.Y)('li', {
															className: 'ss__breadcrumbs__crumbs__crumb',
															children: P.url ? (0, t.Y)('a', { href: P.url, children: P.label }) : P.label,
														})
													)
													.reduce((P, B) => [
														P,
														(0, t.FD)('li', {
															className: 'ss__breadcrumbs__crumbs__separator',
															children: [
																l !== !1 ? l : (0, t.Y)(t.FK, {}),
																r && (0, t.Y)(I.I, { ...j.icon, ...(typeof r == 'string' ? { icon: r } : r) }),
															],
														}),
														B,
													]),
											}),
										}),
								  })
								: (0, t.Y)(t.FK, {})
						);
					});
				e.d(U, ['B', 0, S]);
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					I = e('./components/src/hooks/useA11y.tsx');
				const m = ({ transitionSpeed: S, color: N }) =>
						(0, D.AH)({
							transition: `background ${S} ease 0s, left 0s ease ${S}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${S} ease, left 0s ease`, background: N, left: '0' },
						}),
					R = (0, s.PA)((S) => {
						const N = (0, T.u)(),
							p = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, A.LU)() },
							n = (0, g.v6)('overlay', N, p, S),
							{ active: a, onClick: u, disableA11y: l, className: r, internalClassName: o } = n,
							{ overrideElement: E, shouldRenderDefault: W } = (0, K._)('overlay', n);
						if (!W) return E;
						const y = (0, i.Z)(n, m);
						return (0, t.Y)(b._, {
							children: (0, t.Y)('div', {
								onClick: (x) => u && a && u(x),
								ref: (x) => (l ? null : (0, I.iy)(x, a ? 0 : -1)),
								className: v()('ss__overlay', { 'ss__overlay--active': a }, r, o),
								...y,
							}),
						});
					});
				e.d(U, ['h', 0, R]);
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(K),
					m = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const S = ({}) => (0, d.AH)({}),
					N = (0, D.PA)((C) => {
						const p = (0, T.u)(),
							n = (0, A.LU)(),
							a = C.controller?.store.pagination || C.pagination,
							u = {
								infoText: `${a?.multiplePages ? `${a?.begin} - ${a?.end} of` : ''} ${`${a?.totalResults} result${a?.totalResults == 1 ? '' : 's'}`}`,
								treePath: n,
							},
							l = (0, g.v6)('paginationInfo', p, u, C),
							{ controller: r, infoText: o, className: E, internalClassName: W } = l,
							{ overrideElement: y, shouldRenderDefault: x } = (0, R._)('paginationInfo', l);
						if (!x) return y;
						const O = a || r?.store?.pagination,
							M = (0, i.Z)(l, S),
							j = {
								infoText: {
									value: o,
									attributes: {
										'aria-label': `displaying ${a?.multiplePages ? `${a?.begin} - ${a?.end} of` : ''} ${a?.totalResults} result${
											a?.totalResults == 1 ? '' : 's'
										} ${r?.store?.search.query ? `for "${r?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							h = I()(j, l.lang || {}),
							c = (0, m.u)(h, { pagination: O }, { activeBreakpoint: p?.activeBreakpoint });
						return O?.totalResults
							? (0, t.Y)(b._, {
									children: (0, t.Y)('div', {
										...M,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', E, W),
										...c.infoText?.all,
									}),
							  })
							: null;
					});
				e.d(U, ['R', 0, N]);
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/classnames/index.js'),
					i = e.n(g),
					K = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(m);
				const S = () => (0, D.AH)({}),
					N = (0, d.PA)((C) => {
						const p = (0, s.u)(),
							n = (0, b.LU)(),
							a = C.controller?.store.merchandising.landingPage || C.merchandising?.landingPage,
							u = C.controller?.store.pagination || C.pagination,
							l = C.controller?.store.search || C.query,
							r = {
								titleText: `Search result${u?.totalResults == 1 ? '' : 's'} ${
									l?.query ? `for "<span class="ss__search-header__results-query">${l.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${l?.originalQuery?.string}</em>", showing results for "<em>${l?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${l?.didYouMean?.url.href}>${l?.didYouMean?.string}</a>?`,
								noResultsText: `${
									l?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${l.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${l?.query?.string}</span>", but here's something similar:`,
								treePath: n,
							},
							o = (0, T.v6)('searchHeader', p, r, C),
							{
								className: E,
								internalClassName: W,
								titleText: y,
								subtitleText: x,
								correctedQueryText: O,
								noResultsText: M,
								didYouMeanText: j,
								expandedSearchText: h,
								hideTitleText: c,
								hideSubtitleText: P,
								hideCorrectedQueryText: B,
								hideNoResultsText: f,
								hideExpandedSearchText: H,
								hideDidYouMeanText: Y,
							} = o,
							{ overrideElement: V, shouldRenderDefault: $ } = (0, I._)('searchHeader', o);
						if (!$) return V;
						const L = (0, A.Z)(o, S),
							_ = {
								titleText: { value: y },
								subtitleText: { value: x },
								correctedQueryText: { value: O },
								noResultsText: { value: M },
								didYouMeanText: { value: j },
								expandedSearchText: { value: h },
							},
							k = R()(_, o.lang || {}),
							F = (0, K.u)(k, { pagination: u, search: l }, { activeBreakpoint: p?.activeBreakpoint });
						return (0, t.Y)(v._, {
							children: (0, t.Y)('header', {
								...L,
								className: i()('ss__search-header', E, W),
								children: a
									? (0, t.Y)('h3', { className: i()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: a.title })
									: (0, t.FD)(t.FK, {
											children: [
												u?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!H && l?.matchType && l.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: i()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...F.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!c &&
																	(l?.matchType !== 'expanded' || H) &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...F.titleText?.all,
																	}),
																l?.originalQuery &&
																	!B &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...F.correctedQueryText?.all,
																	}),
															],
													  })
													: u?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!f &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...F.noResultsText?.all,
																	}),
																l?.didYouMean &&
																	!Y &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...F.didYouMeanText?.all,
																	}),
															],
													  }),
												(x || k.subtitleText.value) &&
													!P &&
													(0, t.Y)('h5', {
														className: i()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...F.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
				e.d(U, ['w', 0, N]);
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					R = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(N);
				const p = ({}) =>
						(0, d.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					n = (0, D.PA)((a) => {
						const u = (0, i.u)(),
							r = { treePath: (0, K.LU)() },
							o = (0, T.v6)('filter', u, r, a),
							{
								filter: E,
								facetLabel: W,
								valueLabel: y,
								url: x,
								hideFacetLabel: O,
								onClick: M,
								icon: j,
								separator: h,
								disableStyles: c,
								className: P,
								internalClassName: B,
								treePath: f,
							} = o,
							{ overrideElement: H, shouldRenderDefault: Y } = (0, S._)('filter', o);
						if (!Y) return H;
						const V = E?.url?.link || x?.link,
							$ = E?.value.label || y,
							L = E?.facet.label || W,
							_ = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, b.s)({ disableStyles: c }), theme: o.theme, treePath: f },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, b.s)({ disableStyles: c, icon: j }),
									theme: o.theme,
									treePath: f,
								},
							},
							k = (0, A.Z)(o, p),
							F = { filter: { attributes: { 'aria-label': L ? `remove selected ${L} filter ${$}` : $ } } },
							J = C()(F, o.lang || {}),
							Q = (0, R.u)(J, { label: L, value: $ }, { activeBreakpoint: u?.activeBreakpoint });
						return $
							? (0, t.Y)(g._, {
									children: (0, t.Y)('a', {
										...k,
										className: s()('ss__filter', P, B),
										onClick: (w) => {
											V?.onClick && V.onClick(w), M && M(w);
										},
										href: V?.href,
										tabIndex: 0,
										...Q.filter?.all,
										children: (0, t.FD)(I.$, {
											..._.button,
											children: [
												(0, t.Y)(m.I, { ..._.icon, ...(typeof j == 'string' ? { icon: j } : j) }),
												!O &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [L, h && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: h })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: $ }),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(U, ['d', 0, n]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(T),
					g = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/hooks/useIntersection.tsx'),
					N = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('./components/src/components/Atoms/Button/Button.tsx'),
					n = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					a = e('./components/src/hooks/useFuncDebounce.tsx');
				const u = ({ pagination: r, progressIndicatorWidth: o, progressIndicatorSize: E, color: W, backgroundColor: y, theme: x }) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, d.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: o,
										background: y || x?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: E,
										'& .ss__load-more__progress__indicator__bar': {
											width: r ? `${(r.end / r.totalResults) * 100}%` : '',
											background: W || x?.variables?.colors?.primary || '#ccc',
											borderRadius: E,
											height: E,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					l = (0, b.PA)((r) => {
						const o = (0, i.u)(),
							W = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, K.LU)(),
							},
							y = (0, m.v6)('loadMore', o, W, r),
							{
								pagination: x,
								controller: O,
								onClick: M,
								autoFetch: j,
								intersectionOffset: h,
								loading: c,
								loadMoreText: P,
								hideProgressIndicator: B,
								hideProgressText: f,
								loadingLocation: H,
								loadingIcon: Y,
								disableStyles: V,
								className: $,
								internalClassName: L,
								treePath: _,
							} = y,
							{ overrideElement: k, shouldRenderDefault: F } = (0, C._)('loadMore', y);
						if (!F) return k;
						const J = x || O?.store?.pagination,
							Q = typeof c == 'boolean' ? c : O?.store?.loading,
							w = (Q && H === 'button') || !J?.next,
							Z = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': Q && H === 'outside' },
										{ 'ss__load-more__button--disabled': w }
									),
									...(0, I.s)({ disableStyles: V }),
									theme: y?.theme,
									treePath: _,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, I.s)({ disableStyles: V }), theme: y?.theme, treePath: _ },
							};
						if (!J) return null;
						const z = (0, R.Z)({ ...y, pagination: J }, u),
							se = {};
						if (j) {
							const q = (0, D.li)(null);
							se.ref = q;
							const ne = (0, S.v)(q, h || '0px'),
								[ae, te] = (0, D.J0)(!0);
							Q
								? te(!0)
								: (0, a.d)(() => {
										te(!1);
								  }, 500),
								ne && J.next && !ae && J.next.url.go({ history: 'replace' });
						}
						const oe = {
								loadMoreButton: { value: P, attributes: { 'aria-label': P } },
								progressText: { value: `You've viewed ${J?.end} of ${J?.totalResults} products` },
							},
							ee = A()(oe, y.lang || {}),
							re = (0, N.u)(ee, { pagination: J }, { activeBreakpoint: o?.activeBreakpoint });
						return J.totalResults
							? (0, t.Y)(g._, {
									children: (0, t.FD)('div', {
										...z,
										...se,
										className: s()('ss__load-more', { 'ss__load-more--loading': Q }, { 'ss__load-more--autoFetch': j }, $, L),
										children: [
											!j &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(p.$, {
															onClick: (q) => {
																J.next?.url.go({ history: 'replace' }), M && M(q);
															},
															...Z.button,
															...re.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...re.loadMoreButton.value, children: P }),
																Y && Q && H === 'button' ? (0, t.Y)(n.I, { ...Z.icon, ...(typeof Y == 'string' ? { icon: Y } : Y) }) : null,
															],
														}),
														Y && Q && H === 'outside' && (0, t.Y)(n.I, { ...Z.icon, ...(typeof Y == 'string' ? { icon: Y } : Y) }),
													],
												}),
											(!B || !f) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!B &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!f &&
																(0, t.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...re.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
				e.d(U, ['e', 0, l]);
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(m),
					S = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const C = () =>
						(0, d.AH)({
							'& .ss__pagination__page': {
								padding: '5px',
								display: 'inline-block',
								minHeight: '1em',
								minWidth: '1em',
								textAlign: 'center',
								'&.ss__pagination__page--active': { fontWeight: 'bold' },
								'&:hover:not(.ss__pagination__page--active)': {},
							},
						}),
					p = (0, D.PA)((n) => {
						const a = (0, T.u)(),
							l = { pages: 5, treePath: (0, A.LU)() },
							r = (0, i.v6)('pagination', a, l, n),
							{
								pagination: o,
								controller: E,
								pages: W,
								pagesLeft: y,
								pagesRight: x,
								hideFirst: O,
								hideLast: M,
								persistFirst: j,
								persistLast: h,
								hideEllipsis: c,
								hidePages: P,
								hideNext: B,
								hidePrev: f,
								nextButton: H,
								prevButton: Y,
								firstButton: V,
								lastButton: $,
								ellipsisContent: L,
								disableStyles: _,
								className: k,
								internalClassName: F,
								treePath: J,
							} = r,
							{ overrideElement: Q, shouldRenderDefault: w } = (0, N._)('pagination', r);
						if (!w) return Q;
						const Z = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, g.s)({ disableStyles: _ }), theme: r?.theme, treePath: J },
							},
							z = o || E?.store?.pagination,
							se = Number.isInteger(y) && Number.isInteger(x) ? [y, x] : [W],
							oe = z?.getPages(...se),
							ee = oe?.map((te) => te.number),
							re = (0, K.Z)(r, C),
							q = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${z?.last.number}` } },
							},
							ne = R()(q, r.lang || {}),
							ae = (0, S.u)(ne, { pagination: z }, { activeBreakpoint: a?.activeBreakpoint });
						return ee && ee.length > 1 && z?.totalResults
							? (0, t.Y)(b._, {
									children: (0, t.Y)('div', {
										...re,
										className: s()('ss__pagination', k, F),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												z.previous &&
													!f &&
													(0, t.Y)('a', {
														...z.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...ae.previous?.all,
														children: Y || (0, t.Y)(I.I, { ...Z.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!ee.includes(z.first.number) || (j && z.page !== z.first.number)) &&
													!O &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...z.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...ae.first?.all,
																children: V || z.first.number,
															}),
															!ee.includes(2) && !c && (0, t.Y)('span', { children: L ?? (0, t.Y)(t.FK, { children: '\u2026' }) }),
														],
													}),
												!P &&
													oe &&
													oe.map((te) => {
														const le = { page: { attributes: { 'aria-label': `go to page ${te.number}` } } },
															me = R()(le, r.lang || {}),
															ie = (0, S.u)(me, { pagination: z, page: te }, { activeBreakpoint: a?.activeBreakpoint });
														return te.active
															? (0, t.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...ie.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: te.number,
															  })
															: (0, t.Y)('a', { ...te.url.link, className: 'ss__pagination__page', ...ie.page?.all, children: te.number });
													}),
												(!ee.includes(z.last.number) || (h && z.page !== z.last.number)) &&
													!M &&
													(0, t.FD)(t.FK, {
														children: [
															!ee.includes(z.totalPages - 1) && !c && (0, t.Y)('span', { children: L ?? (0, t.Y)(t.FK, { children: '\u2026' }) }),
															(0, t.Y)('a', {
																...z.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...ae.last?.all,
																children: $ || z.last.number,
															}),
														],
													}),
												z.next &&
													!B &&
													(0, t.Y)('a', {
														...z.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...ae.next?.all,
														children: H || (0, t.Y)(I.I, { ...Z.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(U, ['d', 0, p]);
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Molecules/Select/Select.tsx'),
					m = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					R = e('./components/src/components/Molecules/List/List.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(S),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const p = () => (0, d.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					n = (0, D.PA)((a) => {
						const u = (0, T.u)(),
							r = { label: 'Per Page', type: 'dropdown', treePath: (0, A.LU)() },
							o = (0, i.v6)('perPage', u, r, a),
							{ pagination: E, type: W, controller: y, label: x, disableStyles: O, className: M, internalClassName: j, treePath: h } = o,
							{ overrideElement: c, shouldRenderDefault: P } = (0, C._)('perPage', o);
						if (!P) return c;
						const B = E || y?.store?.pagination,
							f = {
								select: { ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
								RadioList: { ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
							},
							H = (0, K.Z)(o, p),
							Y = B && B?.pageSizeOptions?.find((L) => L.value == B?.pageSize),
							V = { label: { value: x } },
							$ = N()(V, o.lang || {});
						return B?.pageSize && typeof B?.pageSizeOptions == 'object' && B.pageSizeOptions?.length
							? (0, t.FD)(b._, {
									children: [
										W?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(I.l, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__select', M, j),
												...f.select,
												label: x,
												options: B.pageSizeOptions,
												selected: Y,
												onSelect: (L, _) => {
													B.setPageSize(+_.value);
												},
												lang: { buttonLabel: $.label },
											}),
										W?.toLowerCase() == 'list' &&
											(0, t.Y)(R.B, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__list', M, j),
												...f.List,
												onSelect: (L, _) => {
													B.setPageSize(+_.value);
												},
												requireSelection: !0,
												options: B.pageSizeOptions,
												selected: B.pageSizeOption,
												titleText: x,
												lang: { title: $.label },
											}),
										W?.toLowerCase() == 'radio' &&
											(0, t.Y)(m.q, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__radioList', M, j),
												...f.RadioList,
												onSelect: (L, _) => {
													B.setPageSize(+_.value);
												},
												options: B.pageSizeOptions,
												selected: B.pageSizeOption,
												titleText: x,
												lang: { title: $.label },
											}),
									],
							  })
							: null;
					});
				e.d(U, ['F', 0, n]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					b = e.n(s),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					A = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useMediaQuery.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const C = ({ slideDirection: n, transitionSpeed: a, width: u }) =>
						(0, v.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${n || 'left'} ${a}`,
							left: n == 'left' ? `-${u}` : n != 'right' ? '0' : 'initial',
							right: n == 'right' ? `-${u}` : 'initial',
							bottom: n == 'bottom' ? '-100vh' : 'initial',
							top: n == 'top' ? '-100vh' : n == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: u?.endsWith('%') && parseInt(u.split('%')[0]) > 90 ? u : '90%',
							maxWidth: u,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: n == 'left' || n != 'right' ? '0' : 'initial',
								right: n == 'right' ? '0' : 'initial',
								bottom: n == 'bottom' ? '0' : 'initial',
								top: n == 'top' ? '0' : n == 'bottom' ? 'initial' : '0',
							},
						}),
					p = (0, d.PA)((n) => {
						const a = (0, I.u)(),
							l = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, m.LU)(),
								rerender: !0,
							},
							r = (0, g.v6)('slideout', a, l, n),
							{
								children: o,
								active: E,
								rerender: W,
								buttonContent: y,
								buttonSelector: x,
								noButtonWrapper: O,
								displayAt: M,
								transitionSpeed: j,
								overlayColor: h,
								onChange: c,
								disableStyles: P,
								className: B,
								internalClassName: f,
								treePath: H,
							} = r,
							{ overrideElement: Y, shouldRenderDefault: V } = (0, S._)('slideout', r);
						if (!V) return Y;
						const $ = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, A.s)({ disableStyles: P, color: h, transitionSpeed: j }),
									theme: r?.theme,
									treePath: H,
								},
							},
							[L, _] = (0, D.J0)(!!E),
							[k, F] = (0, D.J0)(!!E),
							J = () => {
								const Z = !L;
								L
									? (_(!1),
									  W &&
											setTimeout(() => {
												F(!1);
											}, 250))
									: (_(!0), F(!0)),
									(document.body.style.overflow = Z ? 'hidden' : ''),
									c && c(Z);
							};
						(0, D.Nf)(() => {
							F(!!E), _(!!E);
						}, [E]);
						const Q = (0, R.U)(M, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = Q && L ? 'hidden' : '';
						const w = (0, i.Z)(r, C);
						return (
							(0, D.vJ)(() => {
								if (x) {
									let Z;
									typeof x == 'string' ? (Z = document.querySelector(x)) : (Z = x), Z && Z.addEventListener('click', () => J());
								}
							}, []),
							Q || !W
								? (0, t.FD)(K._, {
										children: [
											y &&
												(O
													? (0, T.Y)(y, { toggleActive: J, active: L, treePath: H })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => J(),
															children: (0, T.Y)(y, { active: L, treePath: H }),
													  })),
											(0, t.Y)('div', {
												className: b()('ss__slideout', B, f, { 'ss__slideout--active': L }),
												style: { visibility: W || Q ? 'visible' : 'hidden' },
												...w,
												children: k && (0, T.Y)(o, { toggleActive: J, active: L, treePath: H }),
											}),
											(0, t.Y)(N.h, { ...$.overlay, active: L, onClick: J }),
										],
								  })
								: null
						);
					});
				e.d(U, ['S', 0, p]);
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Molecules/Select/Select.tsx'),
					m = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					R = e('./components/src/components/Molecules/List/List.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(N);
				const p = () => (0, d.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					n = (0, D.PA)((a) => {
						const u = (0, T.u)(),
							r = { label: 'Sort By', type: 'dropdown', treePath: (0, A.LU)() },
							o = (0, i.v6)('sortBy', u, r, a),
							{ sorting: E, type: W, controller: y, hideLabel: x, disableStyles: O, className: M, internalClassName: j, treePath: h } = o;
						let c = o.label;
						const { overrideElement: P, shouldRenderDefault: B } = (0, S._)('sortBy', o);
						if (!B) return P;
						const f = E || y?.store?.sorting,
							H = {
								Select: { ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
								RadioList: { ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, g.s)({ disableStyles: O }), theme: o?.theme, treePath: h },
							},
							Y = (0, K.Z)(o, p),
							V = { label: { value: c } },
							$ = C()(V, o.lang || {});
						return (
							x && (delete $.label.value, (c = void 0)),
							f?.current && typeof f?.options == 'object' && f.options?.length
								? (0, t.FD)(b._, {
										children: [
											W?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(I.l, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__select', M, j),
													...H.Select,
													label: c,
													options: f.options,
													selected: f.current,
													onSelect: (L, _) => {
														_?.url?.go();
													},
													lang: { buttonLabel: $.label },
												}),
											W?.toLowerCase() == 'list' &&
												(0, t.Y)(R.B, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__list', M, j),
													...H.List,
													options: f.options,
													selected: f.current,
													titleText: c,
													onSelect: (L, _) => {
														_?.url?.go();
													},
													lang: { title: $.label },
												}),
											W?.toLowerCase() == 'radio' &&
												(0, t.Y)(m.q, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__radioList', M, j),
													...H.RadioList,
													options: f.options,
													selected: f.current,
													titleText: c,
													onSelect: (L, _) => {
														_?.url?.go();
													},
													lang: { title: $.label },
												}),
										],
								  })
								: null
						);
					});
				e.d(U, ['g', 0, n]);
			},
			'./components/src/components/Molecules/TabSelection/TabSelection.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(b),
					A = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					K = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					N = e('./components/src/components/Atoms/Button/Button.tsx');
				const C = () =>
						(0, D.AH)({
							'.ss__tab-selection__title': { textAlign: 'center' },
							'.ss__tab-selection__tabs': {
								display: 'flex',
								gap: '10px',
								textAlign: 'center',
								alignItems: 'center',
								alignContent: 'center',
								justifyContent: 'center',
							},
							'.ss__tab-selection__button--active': { fontWeight: 'bold' },
							'.ss__tab-selection__button__count': { marginLeft: '5px' },
						}),
					p = (0, s.PA)((n) => {
						const a = (0, g.u)(),
							l = { treePath: (0, i.LU)(), showResultCount: !0, enableEmptyTabs: !1 },
							r = (0, I.v6)('tabSelection', a, l, n),
							{
								tabManager: o,
								titleText: E,
								showResultCount: W,
								enableEmptyTabs: y,
								onTabClick: x,
								disableStyles: O,
								className: M,
								internalClassName: j,
								treePath: h,
							} = r,
							{ overrideElement: c, shouldRenderDefault: P } = (0, S._)('tabSelection', r);
						if (!P) return c;
						if (!o || !o.tabs?.length) return null;
						const B = { button: { ...(0, K.s)({ disableStyles: O }), theme: r.theme, treePath: h } };
						function f(L) {
							const _ = L.store;
							return _?.loaded ? _.pagination?.totalResults : void 0;
						}
						const H = (0, m.Z)(r, C),
							Y = { title: { value: E }, tabList: { attributes: { 'aria-label': 'Result tabs' } } },
							V = T()(Y, { title: r.lang?.title || {}, tabList: r.lang?.tabList || {} }),
							$ = (0, R.u)(V, { tabManager: o }, { activeBreakpoint: a?.activeBreakpoint });
						return (0, t.Y)(A._, {
							children: (0, t.FD)('div', {
								...H,
								className: v()('ss__tab-selection', M, j),
								children: [
									E || r.lang?.title?.value ? (0, t.Y)('h4', { className: 'ss__tab-selection__title', ...$.title?.all }) : null,
									(0, t.Y)('div', {
										className: 'ss__tab-selection__tabs',
										role: 'tablist',
										...$.tabList?.attributes,
										children: o.tabs.map((L) => {
											const _ = o.active?.id === L.id,
												k = f(L.controller),
												F = !y && !_ && k === 0,
												J = L.label || L.id,
												Q = W ? k : void 0,
												w = { tabButton: { value: J, attributes: { 'aria-label': typeof Q == 'number' ? `${J}, ${Q} results` : J } } },
												Z = T()(w, { tabButton: r.lang?.tabButton || {} }),
												z = (0, R.u)(Z, { tab: L, resultCount: k, active: _ }, { activeBreakpoint: a?.activeBreakpoint });
											return (0, t.FD)(
												N.$,
												{
													...B.button,
													internalClassName: v()('ss__tab-selection__button', `ss__tab-selection__button--${L.id}`, {
														'ss__tab-selection__button--active': _,
													}),
													disabled: F,
													role: 'tab',
													'aria-selected': _,
													...z.tabButton?.attributes,
													onClick: (se) => {
														x && x(se, L), o.setActive(L.id);
													},
													children: [
														(0, t.Y)('span', { className: 'ss__tab-selection__button__label', ...z.tabButton?.value }),
														typeof Q == 'number'
															? (0, t.FD)('span', { className: 'ss__tab-selection__button__count', children: ['(', Q, ')'] })
															: null,
													],
												},
												L.id
											);
										}),
									}),
								],
							}),
						});
					});
				e.d(U, ['E', 0, p]);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(s),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					g = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts');
				const N = () => (0, D.AH)({}),
					C = (0, T.PA)((p) => {
						const n = (0, i.u)(),
							a = (0, K.LU)(),
							u = { facets: p.controller?.store?.facets, treePath: a };
						let l = (0, R.v6)('facets', n, u, p);
						const { limit: r, onFacetOptionClick: o, disableStyles: E, className: W, internalClassName: y, controller: x, treePath: O } = l,
							{ overrideElement: M, shouldRenderDefault: j } = (0, I._)('facets', l);
						if (!j) return M;
						const h = (Y) => {
								o && o(Y), x?.setFocused && x?.setFocused();
							},
							c = {
								components: {
									facetGridOptions: { onClick: h },
									facetHierarchyOptions: { onClick: h },
									facetListOptions: { onClick: h },
									facetPaletteOptions: { onClick: h },
								},
							},
							P = b()(c, l?.theme || {}, { arrayMerge: (Y, V) => V });
						l = { ...l, theme: P };
						let { facets: B } = l;
						r && B && r > 0 && (B = B.slice(0, +r));
						const f = { facet: { internalClassName: 'ss__facets__facet', ...(0, m.s)({ disableStyles: E }), theme: l.theme, treePath: O } },
							H = (0, S.Z)(l, N);
						return B && B?.length > 0
							? (0, t.Y)(g._, {
									children: (0, t.Y)('div', {
										className: v()('ss__facets', W, y),
										...H,
										children: B.map((Y) => (0, t.Y)(A.s, { ...f.facet, facet: Y }, Y.field)),
									}),
							  })
							: null;
					});
				e.d(U, ['J', 0, C]);
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(X, U, e) {
				e.d(U, { b: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(T),
					g = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/hooks/useClickOutside.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					n = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					a = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/components/Atoms/Button/Button.tsx'),
					l = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					r = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx');
				const o = ({ theme: W }) =>
						(0, d.AH)({
							margin: '10px 0px',
							'& .ss__facets-horizontal__header': {
								display: 'flex',
								flexWrap: 'wrap',
								gap: '10px',
								'& .ss__facet__header__inner': { display: 'flex' },
								'& .ss__facet__header__selected-count': { margin: '0px 5px' },
								'& .ss__facet__header__clear-all': {
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									marginLeft: '10px',
									border: 'none',
									padding: '0',
									color: W?.variables?.colors?.primary,
									'&:hover': { cursor: 'pointer', textDecoration: 'underline', background: 'none' },
									'& .ss__icon': { marginLeft: '5px' },
								},
								'& .ss__facets-horizontal__header__dropdown': {
									margin: '0 0 10px 0',
									'.ss__dropdown__button': { display: 'flex' },
									'& .ss__dropdown__button__heading': {
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: '5px 10px',
										flexShrink: '0',
										gap: '10px',
									},
									'&.ss__dropdown--open': {
										'& .ss__dropdown__button__heading': { '& .ss__icon': {} },
										'& .ss__dropdown__content': {
											padding: '10px',
											minWidth: '160px',
											width: 'max-content',
											maxHeight: '500px',
											overflowY: 'auto',
											zIndex: 1e3,
										},
									},
								},
							},
							'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
						}),
					E = (0, b.PA)((W) => {
						const y = (0, K.u)(),
							x = (0, I.LU)(),
							O = {
								limit: 6,
								iconCollapse: 'angle-down',
								iconExpand: 'angle-up',
								clearAllText: 'Clear All',
								toggleSidebarButtonText: 'Filters',
								facets: W.controller?.store?.facets,
								treePath: x,
							};
						let M = (0, R.v6)('facetsHorizontal', y, O, W);
						const {
								facets: j,
								limit: h,
								alwaysShowToggleSidebarButton: c,
								hideToggleSidebarButton: P,
								onFacetOptionClick: B,
								showSelectedCount: f,
								hideSelectedCountParenthesis: H,
								clearAllIcon: Y,
								showClearAllText: V,
								iconExpand: $,
								clearAllText: L,
								iconCollapse: _,
								toggleSidebarButtonText: k,
								disableStyles: F,
								className: J,
								internalClassName: Q,
								controller: w,
								treePath: Z,
							} = M,
							{ overrideElement: z, shouldRenderDefault: se } = (0, p._)('facetsHorizontal', M);
						if (!se) return z;
						const oe = (G) => {
								B && B(G);
							},
							ee = {
								components: {
									facetGridOptions: { onClick: oe },
									facetHierarchyOptions: { onClick: oe },
									facetListOptions: { onClick: oe },
									facetPaletteOptions: { onClick: oe },
								},
							},
							re = A()(ee, M?.theme || {});
						M = { ...M, theme: re };
						let q = j,
							ne = !1;
						typeof h < 'u' && Number.isInteger(h) && j && ((ne = j.length > +h), h > 0 ? (q = j.slice(0, +h)) : h == 0 && (q = []));
						const [ae, te] = (0, D.J0)(!1),
							le = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, m.s)({ disableStyles: F }),
									theme: M?.theme,
									treePath: Z,
								},
								button: { ...(0, m.s)({ disableStyles: F }), theme: M?.theme, treePath: Z },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, m.s)({ disableStyles: F }),
									theme: M?.theme,
									treePath: `${Z} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !P && (ne || c) ? !0 : void 0,
									...(0, m.s)({ disableStyles: F }),
									theme: M?.theme,
									treePath: `${Z} dropdown`,
								},
								slideout: {
									internalClassName: 'ss__facets-horizontal__slideout',
									onChange: (G) => te(G),
									...(0, m.s)({ disableStyles: F }),
									theme: M?.theme,
									treePath: Z,
								},
								sidebar: { internalClassName: 'ss__facets-horizontal__sidebar', ...(0, m.s)({ disableStyles: F }), theme: M?.theme, treePath: Z },
								toggleSidebarButton: { ...(0, m.s)({ disableStyles: F }), theme: M?.theme, treePath: Z },
							},
							me = (0, S.Z)(M, o),
							[ie, ue] = (0, D.J0)(void 0),
							he = (0, N.L)(() => {
								ie && ue(void 0);
							}),
							ve = { toggleSidebarButtonText: { value: k } },
							pe = A()(ve, M.lang || {}),
							Oe = (0, C.u)(pe, { facets: j, sidebarOpenState: ae }, { activeBreakpoint: y?.activeBreakpoint }),
							Me = ({ sidebarOpenState: G, setSidebarOpenState: _e, subProps: Ee }) =>
								(0, t.Y)(u.$, {
									...Ee.toggleSidebarButton,
									internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
									onClick: () => _e(!G),
									children: (0, t.Y)('span', { ...Oe.toggleSidebarButtonText.all }),
								}),
							Pe = !!(!P && (ne || c));
						return (q && q?.length > 0) || ne
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										className: s()('ss__facets-horizontal', J, Q),
										ref: he,
										...me,
										children: [
											(0, t.FD)('div', {
												className: 'ss__facets-horizontal__header',
												children: [
													q?.map((G) => {
														const _e =
																G?.values?.filter((de) => de?.filtered).length ||
																G?.active?.high !== G?.range?.high ||
																G?.active?.low !== G?.range?.low,
															Ee = {
																dropdownButton: {
																	attributes: {
																		'aria-label': `currently ${ie?.field === G.field ? 'open' : 'collapsed'} ${G.label} facet dropdown ${
																			G.values?.length ? G.values?.length + ' options' : ''
																		}`,
																	},
																},
																clearAllText: { value: L },
															},
															De = A()(Ee, M.lang || {}),
															ce = (0, C.u)(De, { selectedFacet: ie, facet: G }, { activeBreakpoint: y?.activeBreakpoint });
														return (0, t.Y)(n.m, {
															...le.dropdown,
															internalClassName: s()(
																le.dropdown.internalClassName,
																`ss__facets-horizontal__header__dropdown--${G.display}`,
																`ss__facets-horizontal__header__dropdown--${G.field}`
															),
															open: ie?.field === G.field,
															onClick: (de) => {
																ie !== G && de.code !== 'Escape' ? ue(G) : ue(void 0);
															},
															button: (0, t.FD)('div', {
																className: 'ss__dropdown__button__heading',
																...ce.dropdownButton.attributes,
																children: [
																	(0, t.FD)('div', {
																		className: 'ss__facet__header__inner',
																		children: [
																			(0, t.Y)('span', { ...ce.dropdownButton.value, children: G?.label }),
																			f && _e && G.type !== 'range'
																				? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: H ? _e : `(${_e})` })
																				: null,
																			(ce.clearAllText.value || Y) && _e
																				? (0, t.Y)(u.$, {
																						...le.button,
																						internalClassName: 'ss__facet__header__clear-all',
																						name: 'reset-facet',
																						onClick: (de) => {
																							de.stopPropagation(), G?.clear.url.link.onClick();
																						},
																						icon: Y || void 0,
																						children: ce.clearAllText.value && V ? (0, t.Y)('label', { ...ce.clearAllText.all }) : null,
																				  })
																				: (0, t.Y)(t.FK, {}),
																		],
																	}),
																	(0, t.Y)(a.I, {
																		...le.icon,
																		...(ie?.field === G.field
																			? { ...(typeof $ == 'string' ? { icon: $ } : $) }
																			: { ...(typeof _ == 'string' ? { icon: _ } : _) }),
																	}),
																],
															}),
															disableOverlay: !1,
															children: (0, t.Y)(g.s, { ...le.facet, facet: G }),
														});
													}),
													Pe && (0, t.Y)(Me, { sidebarOpenState: ae, setSidebarOpenState: te, subProps: le }),
												],
											}),
											Pe && (0, t.Y)(l.S, { ...le.slideout, active: ae, children: (0, t.Y)(r.B, { ...le.sidebar, controller: w }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(X, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(S);
				const C = (n) => {
						const a = n.theme?.variables;
						return (0, D.AH)({
							'.ss__filter-summary__title': { fontSize: '1.2em', padding: '6px 0' },
							'.ss__filter-summary__filters': { margin: '5px 0', display: 'flex', gap: '10px', flexWrap: 'wrap' },
							'&.ss__filter-summary--list': {
								'& .ss__filter-summary__clear-all .ss__filter__value': { marginLeft: '5px' },
								'&, .ss__filter-summary__filters': { display: 'block' },
								'.ss__filter-summary__filters': {
									'.ss__filter': {
										display: 'block',
										margin: '0 5px 5px 5px',
										'.ss__filter__button': {
											padding: '0 0 0 0',
											border: 0,
											'&, &:hover, &:not(.ss__button--disabled):hover, &.ss__button--disabled': { backgroundColor: 'transparent' },
											'.ss__button__content': {
												display: 'flex',
												alignItems: 'center',
												'.ss__icon': {
													padding: '4px',
													backgroundColor: '#f8f8f8',
													border: '1px solid black',
													width: '8px',
													height: '8px',
													fill: a?.colors?.primary,
													stroke: a?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					p = (0, s.PA)((n) => {
						const a = (0, K.u)(),
							u = (0, I.LU)(),
							l = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: n.controller?.store?.filters,
								separator: ':',
								treePath: u,
							},
							r = (0, A.v6)('filterSummary', a, l, n),
							{
								filters: o,
								title: E,
								type: W,
								filterIcon: y,
								clearAllIcon: x,
								separator: O,
								hideFacetLabel: M,
								hideTitle: j,
								clearAllLabel: h,
								hideClearAll: c,
								onClick: P,
								onClearAllClick: B,
								disableStyles: f,
								className: H,
								internalClassName: Y,
								treePath: V,
							} = r,
							{ overrideElement: $, shouldRenderDefault: L } = (0, R._)('filterSummary', r);
						if (!L) return $;
						const _ = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, T.s)({ disableStyles: f, separator: O, hideFacetLabel: M, icon: y }),
									theme: r.theme,
									treePath: V,
								},
							},
							k = (0, g.Z)(r, C),
							F = { title: { value: E }, clearAllLabel: { value: h } },
							J = N()(F, r.lang || {}),
							Q = (0, m.u)(J, { filters: o }, { activeBreakpoint: a?.activeBreakpoint });
						return o?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...k,
										className: v()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': W === 'list' },
											{ 'ss__filter-summary--inline': W === 'inline' },
											H,
											Y
										),
										children: [
											!j && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...Q.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													o.map((w) => (0, t.Y)(b.d, { ..._.filter, filter: w, onClick: (Z) => P && P(Z, w) })),
													!c &&
														(0, t.Y)(b.d, {
															..._.filter,
															name: 'clear-all',
															icon: x,
															internalClassName: `${_?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: h,
															onClick: (w) => {
																B && B(w), n.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': h } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(U, ['r', 0, p]);
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(X, U, e) {
				e.d(U, { P: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					R = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					S = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					N = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					C = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					p = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					n = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					a = e('./components/src/components/Atoms/Button/Button.tsx'),
					u = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					r = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					o = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					E = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					W = e('./components/src/components/Molecules/TabSelection/TabSelection.tsx');
				const y = ({}) =>
						(0, D.AH)({
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							gap: '10px',
							'.ss__layout__separator': { flex: '1 1 auto' },
							'.ss__layout__row:empty': { display: 'none' },
							'.ss__layout__row': {
								display: 'flex',
								alignItems: 'center',
								flexWrap: 'wrap',
								flexBasis: '100%',
								minWidth: '100%',
								gap: '10px',
								'& > div:only-child': { width: '100%' },
							},
						}),
					x = (0, s.PA)((O) => {
						const M = (0, T.u)(),
							h = { treePath: (0, A.LU)() },
							c = (0, K.v6)('layout', M, h, O),
							{ controller: P, toggleSideBarButton: B, disableStyles: f, className: H, internalClassName: Y, layout: V, tabManager: $ } = c;
						delete c.treePath;
						const L = (0, I.Z)(c, y),
							_ = {
								Banner: {
									controller: P,
									content: P.store.merchandising.content,
									...(0, i.s)({ disableStyles: f }),
									theme: c?.theme,
									treePath: O.treePath,
								},
								SearchHeader: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								FilterSummary: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								LayoutSelector: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								Breadcrumbs: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								Facets: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								FacetsHorizontal: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								Pagination: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								PaginationInfo: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								LoadMore: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								SortBy: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								PerPage: { controller: P, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
								ToggleSideBarButton: {
									...B,
									controller: P,
									name: 'sidebar-toggle',
									...(0, i.s)({ disableStyles: f }),
									theme: c?.theme,
									treePath: O.treePath,
								},
								TabSelection: { tabManager: $, ...(0, i.s)({ disableStyles: f }), theme: c?.theme, treePath: O.treePath },
							},
							k = B,
							F = P.store.pagination.totalResults > 0;
						function J(z) {
							switch (z) {
								case 'searchHeader':
									return (0, t.Y)(n.w, { ..._.SearchHeader });
								case 'tabSelection':
									return $ ? (0, t.Y)(W.E, { ..._.TabSelection, tabManager: $ }) : null;
								case 'filterSummary':
									if (F) return (0, t.Y)(g.r, { ..._.FilterSummary });
									break;
								case 'layoutSelector':
									if (F) return (0, t.Y)(C.s, { ..._.LayoutSelector });
									break;
								case 'paginationInfo':
									if (F) return (0, t.Y)(p.R, { ..._.PaginationInfo });
									break;
								case 'sortBy':
									if (F) return (0, t.Y)(S.g, { ..._.SortBy });
									break;
								case 'perPage':
									if (F) return (0, t.Y)(N.F, { ..._.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (F)
										return (
											k &&
											(0, t.Y)('div', {
												className: 'ss__layout__sidebar-toggle-button-wrapper',
												children: (0, t.Y)(a.$, { ..._.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (F) return P.store.config.settings?.infinite?.enabled ? (0, t.Y)(R.e, { ..._.LoadMore }) : (0, t.Y)(m.d, { ..._.Pagination });
									break;
								case 'breadcrumbs':
									if (F) return (0, t.Y)(E.B, { ..._.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${w++}` });
								case 'banner.banner':
									return (0, t.Y)(u.l, { ..._.Banner, type: l.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(u.l, { ..._.Banner, type: l.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(u.l, { ..._.Banner, type: l.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(u.l, { ..._.Banner, type: l.c.LEFT, name: 'left' });
								case 'facets':
									if (F) return (0, t.Y)(r.J, { ..._.Facets });
									break;
								case 'facetsHorizontal':
									if (F) return (0, t.Y)(o.b, { ..._.Facets });
									break;
								default:
									return null;
							}
						}
						let Q = 0,
							w = 0;
						const Z = V?.map((z) => {
							if (Array.isArray(z)) {
								const se = z.map((ee) => J(ee));
								return z.some((ee, re) => ee !== '_' && se[re])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${Q++}`, children: se })
									: null;
							} else return J(z);
						});
						return Z?.some(Boolean) ? (0, t.Y)(b._, { children: (0, t.Y)('div', { ...L, className: v()('ss__layout', H, Y), children: Z }) }) : null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(X, U, e) {
				e.d(U, { B: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					v = e.n(d),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(m),
					S = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx');
				const p = ({ stickyOffset: a }) =>
						(0, D.AH)({
							'&.ss__sidebar--sticky': { position: 'sticky', top: a || 0 },
							'& .ss__facets': { width: '100%' },
							'& .ss__sidebar__header': {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								'& .ss__sidebar__title, & .ss__sidebar__header__close-button': { margin: '15px 0' },
								'& .ss__sidebar__header__close-button': { cursor: 'pointer' },
							},
							'& .ss__sidebar__footer': { display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'row' },
						}),
					n = (0, s.PA)((a) => {
						const u = (0, T.u)(),
							r = {
								titleText: 'Filters',
								clearButtonText: 'Clear All',
								applyButtonText: 'Apply',
								closeButtonIcon: 'close-thin',
								hideApplyButton: !0,
								hideClearButton: !0,
								hideCloseButton: !0,
								treePath: (0, A.LU)(),
								layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
							},
							o = (0, i.v6)('sidebar', u, r, a),
							{
								controller: E,
								layout: W,
								hideTitleText: y,
								titleText: x,
								sticky: O,
								hideApplyButton: M,
								hideFooter: j,
								onToggleSidebar: h,
								hideHeader: c,
								hideClearButton: P,
								hideCloseButton: B,
								hideClearButtonText: f,
								hideApplyButtonText: H,
								hideCloseButtonText: Y,
								clearButtonText: V,
								applyButtonText: $,
								closeButtonText: L,
								applyButtonIcon: _,
								clearButtonIcon: k,
								closeButtonIcon: F,
								disableStyles: J,
								className: Q,
								internalClassName: w,
								treePath: Z,
							} = o,
							{ overrideElement: z, shouldRenderDefault: se } = (0, N._)('sidebar', o);
						if (!se) return z;
						const oe = (0, K.Z)(o, p),
							ee = { titleText: { value: x }, closeButtonText: { value: L }, applyButtonText: { value: $ }, clearButtonText: { value: V } },
							re = R()(ee, o.lang || {}),
							q = (0, S.u)(re, { controller: E }, { activeBreakpoint: u?.activeBreakpoint }),
							ne = {
								Layout: { ...(0, g.s)({ disableStyles: J }), theme: o.theme, treePath: Z },
								button: { ...(0, g.s)({ disableStyles: J }), theme: o?.theme, treePath: Z },
							},
							ae = W?.length;
						return E?.store?.loaded && E?.store?.pagination?.totalResults > 0 && ae
							? (0, t.Y)(b._, {
									children: (0, t.FD)('div', {
										...oe,
										className: v()('ss__sidebar', Q, w, { 'ss__sidebar--sticky': O }),
										children: [
											!c &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__header',
													children: [
														y
															? (0, t.Y)('div', {})
															: (0, t.Y)('h4', {
																	className: v()('ss__sidebar__title'),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...q.titleText.all,
																	children: x,
															  }),
														!B &&
															(0, t.Y)(C.$, {
																internalClassName: 'ss__sidebar__header__close-button',
																disableStyles: !0,
																onClick: () => h && h(),
																icon: F,
																...ne.button,
																name: 'close',
																children: !Y && L ? (0, t.Y)('span', { ...q.closeButtonText?.all }) : void 0,
															}),
													],
												}),
											(0, t.Y)('div', { className: v()('ss__sidebar__inner'), children: (0, t.Y)(I.P, { controller: E, layout: W, ...ne.Layout }) }),
											!j &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__footer',
													children: [
														!M &&
															(0, t.Y)(C.$, {
																internalClassName: 'ss__sidebar__footer__apply-button',
																icon: _,
																onClick: h ? () => h() : void 0,
																...ne.button,
																name: 'apply',
																children: !H && $ ? (0, t.Y)('span', { ...q.applyButtonText?.all }) : void 0,
															}),
														!P &&
															(0, t.Y)(C.$, {
																internalClassName: 'ss__sidebar__footer__clear-button',
																icon: k,
																onClick: () => {
																	E?.urlManager.remove('filter').remove('page').go(), h && h();
																},
																...ne.button,
																name: 'clear',
																children: !f && V ? (0, t.Y)('span', { ...q.clearButtonText?.all }) : void 0,
															}),
													],
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(X, U, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = (d, v) => {
					const s = (0, t.li)(d);
					(s.current = d),
						(0, t.vJ)(() => {
							const b = setTimeout(() => {
								s.current();
							}, v);
							return () => {
								clearTimeout(b);
							};
						}, [d, v]);
				};
				e.d(U, ['d', 0, D]);
			},
			'./components/src/hooks/useIntersection.tsx'(X, U, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = (d, v = '0px', s = !1) => {
					const [b, T] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const A = new IntersectionObserver(
								([g]) => {
									T(g.isIntersecting), s && g.isIntersecting && A.unobserve(d.current);
								},
								{ rootMargin: v }
							);
							return (
								d.current && A.observe(d.current),
								() => {
									A.unobserve(d.current);
								}
							);
						}, []),
						b
					);
				};
				e.d(U, ['v', 0, D]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(X, U, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = 250,
					d = (s, b = {}) => {
						const { rootMargin: T = '0px', fireOnce: A = !1, threshold: g = 0, minVisibleTime: i = 0 } = b,
							[K, I] = (0, t.J0)(!1),
							m = (0, t.li)(null),
							R = (0, t.li)(null),
							[S, N] = (0, t.J0)(0),
							C = (0, t.hb)((p) => {
								(s.current = p), N((n) => n + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								I(!1);
								let p = null,
									n = null;
								if (!window.IntersectionObserver || !s.current) return;
								const a = () => {
										n && (window.clearInterval(n), (n = null));
									},
									u = () => {
										i > 0
											? ((R.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													I(!0), A && s.current && p && p.unobserve(s.current);
											  }, i)))
											: (I(!0), A && s.current && p && p.unobserve(s.current));
									},
									l = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (R.current = null), I(!1);
									};
								return (
									(p = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? s.current && v(s.current)
													? (a(), u())
													: (l(),
													  n ||
															(n = window.setInterval(() => {
																if (!s.current) {
																	a();
																	return;
																}
																v(s.current) && (a(), u());
															}, D)))
												: (a(), l());
										},
										{ rootMargin: T, threshold: g }
									)),
									s.current && p.observe(s.current),
									() => {
										I(!1), a(), m.current && window.clearTimeout(m.current), p && s.current && p.unobserve(s.current);
									}
								);
							}, [s, S]),
							{ inViewport: K, updateRef: C }
						);
					};
				function v(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(U, ['v', 0, d]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(X, U, e) {
				e.d(U, { U: () => D });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function D(d, v) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(d),
						[b, T] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							T(!!s.matches);
							const A = () => T(!!s.matches);
							return (
								s.addListener(A),
								() => {
									v instanceof Function && v(), s.removeListener(A);
								}
							);
						}, [d]),
						b
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(X, U, e) {
				e.d(U, { N: () => v, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					D = e('./components/src/utilities/createImpressionObserver.ts'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 'sstracking';
				function s(b) {
					const T = b;
					return (g) => {
						const { controller: i, result: K, banner: I, type: m, content: R, ...S } = g;
						if (g.trackingRef) return (0, t.Y)(T, { ...g });
						!i && (!m || !R) && console.warn('Warning: No controller provided to withTracking', g),
							!K && !I && (!m || !R) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: N, inViewport: C, updateRef: p } = (0, D.Q)(),
							n = (K || I || (m && R?.[m]?.[0]))?.responseId,
							a = (0, d.li)(n),
							u = (0, d.li)(!1);
						a.current !== n && (u.current = !0),
							(0, d.vJ)(() => {
								a.current !== n && ((a.current = n), p(N.current));
							}, [n, p]),
							(0, d.vJ)(() => {
								u.current && !C && (u.current = !1);
							}, [C, n]);
						const l = m && R && !K && ['search', 'autocomplete'].includes(i?.type || '');
						C && !u.current && (l ? i?.track.banner.impression(R[m][0]) : K?.bundleSeed || i?.track.product.impression(K || I));
						const r = (0, d.hb)(
							(E) => {
								l ? i?.track.banner.click(E, R[m][0]) : i?.track.product.click(E, K || I);
							},
							[i, K, I, m, R]
						);
						(0, d.vJ)(() => {
							const E = N.current;
							if (E)
								return (
									E.setAttribute(v, 'true'),
									E.addEventListener('click', r, !0),
									() => {
										E.removeEventListener('click', r, !0);
									}
								);
						}, [r]);
						const o = {
							...S,
							controller: i,
							result: K,
							banner: I,
							type: m,
							content: R,
							trackingRef: (0, d.hb)(
								(E) => {
									p(E);
								},
								[p]
							),
						};
						return (0, t.Y)(T, { ...o });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(X, U, e) {
				e.d(U, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const d = 0.7,
					v = 1e3;
				function s(b) {
					const T = (0, t.li)(null),
						{ inViewport: A, updateRef: g } = (0, D.v)(T, { fireOnce: !0, threshold: d, minVisibleTime: v, ...b });
					return { ref: T, inViewport: A, updateRef: g };
				}
			},
		},
	]);
})();

//# sourceMappingURL=1798.3142a3f2.iframe.bundle.js.map
