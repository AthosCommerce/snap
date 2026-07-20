'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1798],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/providers/cache.tsx'),
					f = e('./components/src/providers/controller.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/withTracking.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					W = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					I = (0, f.Bk)(
						(0, M.PA)((D) => {
							const o = (0, T.u)(),
								P = { treePath: (0, i.LU)() },
								n = (0, W.v6)('banner', o, P, D),
								{ controller: a, type: r, className: h, internalClassName: R } = n,
								U = n.content || a?.store?.merchandising.content,
								{ overrideElement: c, shouldRenderDefault: F } = (0, u._)('banner', n);
							if (!F) return c;
							if (r === L.c.INLINE) return console.warn(`BannerType '${L.c.INLINE}' is not supported in <Banner /> component`), null;
							const v = (0, x.Z)(n, j),
								l = U?.[r]?.[0]?.value;
							if (!r || !l) return null;
							const E = (0, b.hb)(
								(0, p.W)((S) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${r}`, h, R),
										...v,
										ref: S.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof l == 'string' ? l : l.join('') },
									})
								),
								[l, r]
							);
							return (0, t.Y)(C._, { children: (0, t.Y)(E, { ...n }) });
						})
					);
				e.d(B, ['l', 0, I]);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const L = () =>
						(0, M.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					b = (0, s.PA)((j) => {
						const I = (0, f.u)(),
							o = {
								separator: '>',
								treePath: (0, T.LU)(),
								data: j.controller
									? (S) => [
											{ label: 'Search' },
											{ label: `Results ${S?.store.search?.query?.string ? `for "${S?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							_ = (0, i.v6)('breadcrumbs', I, o, j),
							{ data: P, separator: n, separatorIcon: a, className: r, internalClassName: h, controller: R, disableStyles: U, treePath: c } = _,
							{ overrideElement: F, shouldRenderDefault: v } = (0, u._)('breadcrumbs', _);
						if (!v) return F;
						const K = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, p.s)({ disableStyles: U }), theme: _?.theme, treePath: c },
							},
							l = (0, W.Z)(_, L);
						let E;
						return (
							typeof P == 'function' ? (E = P(R)) : (E = P),
							E
								? (0, t.Y)(C._, {
										children: (0, t.Y)('div', {
											...l,
											className: O()('ss__breadcrumbs', r, h),
											children: (0, t.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: E.map((S) =>
													(0, t.Y)('li', {
														className: 'ss__breadcrumbs__crumbs__crumb',
														children: S.url ? (0, t.Y)('a', { href: S.url, children: S.label }) : S.label,
													})
												).reduce((S, d) => [
													S,
													(0, t.FD)('li', {
														className: 'ss__breadcrumbs__crumbs__separator',
														children: [
															n !== !1 ? n : (0, t.Y)(t.FK, {}),
															a && (0, t.Y)(x.I, { ...K.icon, ...(typeof a == 'string' ? { icon: a } : a) }),
														],
													}),
													d,
												]),
											}),
										}),
								  })
								: (0, t.Y)(t.FK, {})
						);
					});
				e.d(B, ['B', 0, b]);
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = e('./components/src/hooks/useA11y.tsx');
				const u = ({ transitionSpeed: b, color: j }) =>
						(0, M.AH)({
							transition: `background ${b} ease 0s, left 0s ease ${b}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${b} ease, left 0s ease`, background: j, left: '0' },
						}),
					L = (0, s.PA)((b) => {
						const j = (0, f.u)(),
							D = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, T.LU)() },
							o = (0, p.v6)('overlay', j, D, b),
							{ active: _, onClick: P, disableA11y: n, className: a, internalClassName: r } = o,
							{ overrideElement: h, shouldRenderDefault: R } = (0, W._)('overlay', o);
						if (!R) return h;
						const U = (0, i.Z)(o, u);
						return (0, t.Y)(C._, {
							children: (0, t.Y)('div', {
								onClick: (c) => P && _ && P(c),
								ref: (c) => (n ? null : (0, x.iy)(c, _ ? 0 : -1)),
								className: O()('ss__overlay', { 'ss__overlay--active': _ }, a, r),
								...U,
							}),
						});
					});
				e.d(B, ['h', 0, L]);
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					W = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(W),
					u = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = ({}) => (0, m.AH)({}),
					j = (0, M.PA)((I) => {
						const D = (0, f.u)(),
							o = (0, T.LU)(),
							_ = I.controller?.store.pagination || I.pagination,
							P = {
								infoText: `${_?.multiplePages ? `${_?.begin} - ${_?.end} of` : ''} ${`${_?.totalResults} result${_?.totalResults == 1 ? '' : 's'}`}`,
								treePath: o,
							},
							n = (0, p.v6)('paginationInfo', D, P, I),
							{ controller: a, infoText: r, className: h, internalClassName: R } = n,
							{ overrideElement: U, shouldRenderDefault: c } = (0, L._)('paginationInfo', n);
						if (!c) return U;
						const F = _ || a?.store?.pagination,
							v = (0, i.Z)(n, b),
							K = {
								infoText: {
									value: r,
									attributes: {
										'aria-label': `displaying ${_?.multiplePages ? `${_?.begin} - ${_?.end} of` : ''} ${_?.totalResults} result${
											_?.totalResults == 1 ? '' : 's'
										} ${a?.store?.search.query ? `for "${a?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							l = x()(K, n.lang || {}),
							E = (0, u.u)(l, { pagination: F });
						return F?.totalResults
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...v,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', h, R),
										...E.infoText?.all,
									}),
							  })
							: null;
					});
				e.d(B, ['R', 0, j]);
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					p = e('../../node_modules/classnames/index.js'),
					i = e.n(p),
					W = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(u);
				const b = () => (0, M.AH)({}),
					j = (0, m.PA)((I) => {
						const D = (0, s.u)(),
							o = (0, C.LU)(),
							_ = I.controller?.store.merchandising.landingPage || I.merchandising?.landingPage,
							P = I.controller?.store.pagination || I.pagination,
							n = I.controller?.store.search || I.query,
							a = {
								titleText: `Search result${P?.totalResults == 1 ? '' : 's'} ${
									n?.query ? `for "<span class="ss__search-header__results-query">${n.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${n?.originalQuery?.string}</em>", showing results for "<em>${n?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${n?.didYouMean?.url.href}>${n?.didYouMean?.string}</a>?`,
								noResultsText: `${
									n?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${n.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${n?.query?.string}</span>", but here's something similar:`,
								treePath: o,
							},
							r = (0, f.v6)('searchHeader', D, a, I),
							{
								className: h,
								internalClassName: R,
								titleText: U,
								subtitleText: c,
								correctedQueryText: F,
								noResultsText: v,
								didYouMeanText: K,
								expandedSearchText: l,
								hideTitleText: E,
								hideSubtitleText: S,
								hideCorrectedQueryText: d,
								hideNoResultsText: Y,
								hideExpandedSearchText: $,
								hideDidYouMeanText: N,
							} = r,
							{ overrideElement: J, shouldRenderDefault: g } = (0, x._)('searchHeader', r);
						if (!g) return J;
						const H = (0, T.Z)(r, b),
							A = {
								titleText: { value: U },
								subtitleText: { value: c },
								correctedQueryText: { value: F },
								noResultsText: { value: v },
								didYouMeanText: { value: K },
								expandedSearchText: { value: l },
							},
							k = L()(A, r.lang || {}),
							z = (0, W.u)(k, { pagination: P, search: n });
						return (0, t.Y)(O._, {
							children: (0, t.Y)('header', {
								...H,
								className: i()('ss__search-header', h, R),
								children: _
									? (0, t.Y)('h3', { className: i()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: _.title })
									: (0, t.FD)(t.FK, {
											children: [
												P?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!$ && n?.matchType && n.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: i()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...z.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!E &&
																	(n?.matchType !== 'expanded' || $) &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.titleText?.all,
																	}),
																n?.originalQuery &&
																	!d &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.correctedQueryText?.all,
																	}),
															],
													  })
													: P?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!Y &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.noResultsText?.all,
																	}),
																n?.didYouMean &&
																	!N &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.didYouMeanText?.all,
																	}),
															],
													  }),
												(c || k.subtitleText.value) &&
													!S &&
													(0, t.Y)('h5', {
														className: i()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...z.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
				e.d(B, ['w', 0, j]);
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/components/Atoms/Button/Button.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					L = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(j);
				const D = ({}) =>
						(0, m.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					o = (0, M.PA)((_) => {
						const P = (0, i.u)(),
							a = { treePath: (0, W.LU)() },
							r = (0, f.v6)('filter', P, a, _),
							{
								filter: h,
								facetLabel: R,
								valueLabel: U,
								url: c,
								hideFacetLabel: F,
								onClick: v,
								icon: K,
								separator: l,
								disableStyles: E,
								className: S,
								internalClassName: d,
								treePath: Y,
							} = r,
							{ overrideElement: $, shouldRenderDefault: N } = (0, b._)('filter', r);
						if (!N) return $;
						const J = h?.url?.link || c?.link,
							g = h?.value.label || U,
							H = h?.facet.label || R,
							A = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, C.s)({ disableStyles: E }), theme: r.theme, treePath: Y },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, C.s)({ disableStyles: E, icon: K }),
									theme: r.theme,
									treePath: Y,
								},
							},
							k = (0, T.Z)(r, D),
							z = { filter: { attributes: { 'aria-label': H ? `remove selected ${H} filter ${g}` : g } } },
							V = I()(z, r.lang || {}),
							G = (0, L.u)(V, { label: H, value: g });
						return g
							? (0, t.Y)(p._, {
									children: (0, t.Y)('a', {
										...k,
										className: s()('ss__filter', S, d),
										onClick: (y) => {
											J?.onClick && J.onClick(y), v && v(y);
										},
										href: J?.href,
										tabIndex: 0,
										...G.filter?.all,
										children: (0, t.FD)(x.$, {
											...A.button,
											children: [
												(0, t.Y)(u.I, { ...A.icon, ...(typeof K == 'string' ? { icon: K } : K) }),
												!F &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [H, l && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: l })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: g }),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(B, ['d', 0, o]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(f),
					p = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useIntersection.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					D = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					_ = e('./components/src/hooks/useFuncDebounce.tsx');
				const P = ({ pagination: a, progressIndicatorWidth: r, progressIndicatorSize: h, color: R, backgroundColor: U, theme: c }) =>
						(0, m.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, m.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: r,
										background: U || c?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: h,
										'& .ss__load-more__progress__indicator__bar': {
											width: a ? `${(a.end / a.totalResults) * 100}%` : '',
											background: R || c?.variables?.colors?.primary || '#ccc',
											borderRadius: h,
											height: h,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					n = (0, C.PA)((a) => {
						const r = (0, i.u)(),
							R = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, W.LU)(),
							},
							U = (0, u.v6)('loadMore', r, R, a),
							{
								pagination: c,
								controller: F,
								onClick: v,
								autoFetch: K,
								intersectionOffset: l,
								loading: E,
								loadMoreText: S,
								hideProgressIndicator: d,
								hideProgressText: Y,
								loadingLocation: $,
								loadingIcon: N,
								disableStyles: J,
								className: g,
								internalClassName: H,
								treePath: A,
							} = U,
							{ overrideElement: k, shouldRenderDefault: z } = (0, I._)('loadMore', U);
						if (!z) return k;
						const V = c || F?.store?.pagination,
							G = typeof E == 'boolean' ? E : F?.store?.loading,
							y = (G && $ === 'button') || !V?.next,
							Z = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': G && $ === 'outside' },
										{ 'ss__load-more__button--disabled': y }
									),
									...(0, x.s)({ disableStyles: J }),
									theme: U?.theme,
									treePath: A,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, x.s)({ disableStyles: J }), theme: U?.theme, treePath: A },
							};
						if (!V) return null;
						const oe = (0, L.Z)({ ...U, pagination: V }, P),
							w = {};
						if (K) {
							const q = (0, M.li)(null);
							w.ref = q;
							const ee = (0, b.v)(q, l || '0px'),
								[re, ae] = (0, M.J0)(!0);
							G
								? ae(!0)
								: (0, _.d)(() => {
										ae(!1);
								  }, 500),
								ee && V.next && !re && V.next.url.go({ history: 'replace' });
						}
						const se = {
								loadMoreButton: { value: S, attributes: { 'aria-label': S } },
								progressText: { value: `You've viewed ${V?.end} of ${V?.totalResults} products` },
							},
							_e = T()(se, U.lang || {}),
							ne = (0, j.u)(_e, { pagination: V });
						return V.totalResults
							? (0, t.Y)(p._, {
									children: (0, t.FD)('div', {
										...oe,
										...w,
										className: s()('ss__load-more', { 'ss__load-more--loading': G }, { 'ss__load-more--autoFetch': K }, g, H),
										children: [
											!K &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(D.$, {
															onClick: (q) => {
																V.next?.url.go({ history: 'replace' }), v && v(q);
															},
															...Z.button,
															...ne.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...ne.loadMoreButton.value, children: S }),
																N && G && $ === 'button' ? (0, t.Y)(o.I, { ...Z.icon, ...(typeof N == 'string' ? { icon: N } : N) }) : null,
															],
														}),
														N && G && $ === 'outside' && (0, t.Y)(o.I, { ...Z.icon, ...(typeof N == 'string' ? { icon: N } : N) }),
													],
												}),
											(!d || !Y) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!d &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!Y &&
																(0, t.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...ne.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
				e.d(B, ['e', 0, n]);
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(u),
					b = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = () =>
						(0, m.AH)({
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
					D = (0, M.PA)((o) => {
						const _ = (0, f.u)(),
							n = { pages: 5, treePath: (0, T.LU)() },
							a = (0, i.v6)('pagination', _, n, o),
							{
								pagination: r,
								controller: h,
								pages: R,
								pagesLeft: U,
								pagesRight: c,
								hideFirst: F,
								hideLast: v,
								persistFirst: K,
								persistLast: l,
								hideEllipsis: E,
								hideNext: S,
								hidePrev: d,
								nextButton: Y,
								prevButton: $,
								firstButton: N,
								lastButton: J,
								disableStyles: g,
								className: H,
								internalClassName: A,
								treePath: k,
							} = a,
							{ overrideElement: z, shouldRenderDefault: V } = (0, j._)('pagination', a);
						if (!V) return z;
						const G = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, p.s)({ disableStyles: g }), theme: a?.theme, treePath: k },
							},
							y = r || h?.store?.pagination,
							Z = Number.isInteger(U) && Number.isInteger(c) ? [U, c] : [R],
							oe = y?.getPages(...Z),
							w = oe?.map((ee) => ee.number),
							se = (0, W.Z)(a, I),
							_e = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${y?.last.number}` } },
							},
							ne = L()(_e, a.lang || {}),
							q = (0, b.u)(ne, { pagination: y });
						return w && w.length > 1 && y?.totalResults
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...se,
										className: s()('ss__pagination', H, A),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												y.previous &&
													!d &&
													(0, t.Y)('a', {
														...y.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...q.previous?.all,
														children: $ || (0, t.Y)(x.I, { ...G.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!w.includes(y.first.number) || (K && y.page !== y.first.number)) &&
													!F &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...y.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...q.first?.all,
																children: N || y.first.number,
															}),
															!w.includes(2) && !E && (0, t.Y)('span', { children: '\u2026' }),
														],
													}),
												oe &&
													oe.map((ee) => {
														const re = { page: { attributes: { 'aria-label': `go to page ${ee.number}` } } },
															ae = L()(re, a.lang || {}),
															te = (0, b.u)(ae, { pagination: y, page: ee });
														return ee.active
															? (0, t.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...te.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: ee.number,
															  })
															: (0, t.Y)('a', { ...ee.url.link, className: 'ss__pagination__page', ...te.page?.all, children: ee.number });
													}),
												(!w.includes(y.last.number) || (l && y.page !== y.last.number)) &&
													!v &&
													(0, t.FD)(t.FK, {
														children: [
															!w.includes(y.totalPages - 1) && !E && (0, t.Y)('span', { children: '\u2026' }),
															(0, t.Y)('a', {
																...y.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...q.last?.all,
																children: J || y.last.number,
															}),
														],
													}),
												y.next &&
													!S &&
													(0, t.Y)('a', {
														...y.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...q.next?.all,
														children: Y || (0, t.Y)(x.I, { ...G.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(B, ['d', 0, D]);
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					L = e('./components/src/components/Molecules/List/List.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(b),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, M.PA)((_) => {
						const P = (0, f.u)(),
							a = { label: 'Per Page', type: 'dropdown', treePath: (0, T.LU)() },
							r = (0, i.v6)('perPage', P, a, _),
							{ pagination: h, type: R, controller: U, label: c, disableStyles: F, className: v, internalClassName: K, treePath: l } = r,
							{ overrideElement: E, shouldRenderDefault: S } = (0, I._)('perPage', r);
						if (!S) return E;
						const d = h || U?.store?.pagination,
							Y = {
								select: { ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
								RadioList: { ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
							},
							$ = (0, W.Z)(r, D),
							N = d && d?.pageSizeOptions?.find((H) => H.value == d?.pageSize),
							J = { label: { value: c } },
							g = j()(J, r.lang || {});
						return d?.pageSize && typeof d?.pageSizeOptions == 'object' && d.pageSizeOptions?.length
							? (0, t.FD)(C._, {
									children: [
										R?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(x.l, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__select', v, K),
												...Y.select,
												label: c,
												options: d.pageSizeOptions,
												selected: N,
												onSelect: (H, A) => {
													d.setPageSize(+A.value);
												},
												lang: { buttonLabel: g.label },
											}),
										R?.toLowerCase() == 'list' &&
											(0, t.Y)(L.B, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__list', v, K),
												...Y.List,
												onSelect: (H, A) => {
													d.setPageSize(+A.value);
												},
												requireSelection: !0,
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: g.label },
											}),
										R?.toLowerCase() == 'radio' &&
											(0, t.Y)(u.q, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__radioList', v, K),
												...Y.RadioList,
												onSelect: (H, A) => {
													d.setPageSize(+A.value);
												},
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: g.label },
											}),
									],
							  })
							: null;
					});
				e.d(B, ['F', 0, o]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					C = e.n(s),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/hooks/useMediaQuery.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const I = ({ slideDirection: o, transitionSpeed: _, width: P }) =>
						(0, O.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${o || 'left'} ${_}`,
							left: o == 'left' ? `-${P}` : o != 'right' ? '0' : 'initial',
							right: o == 'right' ? `-${P}` : 'initial',
							bottom: o == 'bottom' ? '-100vh' : 'initial',
							top: o == 'top' ? '-100vh' : o == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: P?.endsWith('%') && parseInt(P.split('%')[0]) > 90 ? P : '90%',
							maxWidth: P,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: o == 'left' || o != 'right' ? '0' : 'initial',
								right: o == 'right' ? '0' : 'initial',
								bottom: o == 'bottom' ? '0' : 'initial',
								top: o == 'top' ? '0' : o == 'bottom' ? 'initial' : '0',
							},
						}),
					D = (0, m.PA)((o) => {
						const _ = (0, x.u)(),
							n = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, u.LU)(),
								rerender: !0,
							},
							a = (0, p.v6)('slideout', _, n, o),
							{
								children: r,
								active: h,
								rerender: R,
								buttonContent: U,
								buttonSelector: c,
								noButtonWrapper: F,
								displayAt: v,
								transitionSpeed: K,
								overlayColor: l,
								onChange: E,
								disableStyles: S,
								className: d,
								internalClassName: Y,
								treePath: $,
							} = a,
							{ overrideElement: N, shouldRenderDefault: J } = (0, b._)('slideout', a);
						if (!J) return N;
						const g = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, T.s)({ disableStyles: S, color: l, transitionSpeed: K }),
									theme: a?.theme,
									treePath: $,
								},
							},
							[H, A] = (0, M.J0)(!!h),
							[k, z] = (0, M.J0)(!!h),
							V = () => {
								const Z = !H;
								H
									? (A(!1),
									  R &&
											setTimeout(() => {
												z(!1);
											}, 250))
									: (A(!0), z(!0)),
									(document.body.style.overflow = Z ? 'hidden' : ''),
									E && E(Z);
							};
						(0, M.vJ)(() => {
							z(!!h), A(!!h);
						}, [h]);
						const G = (0, L.U)(v, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = G && H ? 'hidden' : '';
						const y = (0, i.Z)(a, I);
						return (
							(0, M.vJ)(() => {
								if (c) {
									let Z;
									typeof c == 'string' ? (Z = document.querySelector(c)) : (Z = c), Z && Z.addEventListener('click', () => V());
								}
							}, []),
							G || !R
								? (0, t.FD)(W._, {
										children: [
											U &&
												(F
													? (0, f.Y)(U, { toggleActive: V, active: H, treePath: $ })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => V(),
															children: (0, f.Y)(U, { active: H, treePath: $ }),
													  })),
											(0, t.Y)('div', {
												className: C()('ss__slideout', d, Y, { 'ss__slideout--active': H }),
												style: { visibility: R || G ? 'visible' : 'hidden' },
												...y,
												children: k && (0, f.Y)(r, { toggleActive: V, active: H, treePath: $ }),
											}),
											(0, t.Y)(j.h, { ...g.overlay, active: H, onClick: V }),
										],
								  })
								: null
						);
					});
				e.d(B, ['S', 0, D]);
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					L = e('./components/src/components/Molecules/List/List.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(j);
				const D = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, M.PA)((_) => {
						const P = (0, f.u)(),
							a = { label: 'Sort By', type: 'dropdown', treePath: (0, T.LU)() },
							r = (0, i.v6)('sortBy', P, a, _),
							{ sorting: h, type: R, controller: U, hideLabel: c, disableStyles: F, className: v, internalClassName: K, treePath: l } = r;
						let E = r.label;
						const { overrideElement: S, shouldRenderDefault: d } = (0, b._)('sortBy', r);
						if (!d) return S;
						const Y = h || U?.store?.sorting,
							$ = {
								Select: { ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
								RadioList: { ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, p.s)({ disableStyles: F }), theme: r?.theme, treePath: l },
							},
							N = (0, W.Z)(r, D),
							J = { label: { value: E } },
							g = I()(J, r.lang || {});
						return (
							c && (delete g.label.value, (E = void 0)),
							Y?.current && typeof Y?.options == 'object' && Y.options?.length
								? (0, t.FD)(C._, {
										children: [
											R?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(x.l, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__select', v, K),
													...$.Select,
													label: E,
													options: Y.options,
													selected: Y.current,
													onSelect: (H, A) => {
														A?.url?.go();
													},
													lang: { buttonLabel: g.label },
												}),
											R?.toLowerCase() == 'list' &&
												(0, t.Y)(L.B, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__list', v, K),
													...$.List,
													options: Y.options,
													selected: Y.current,
													titleText: E,
													onSelect: (H, A) => {
														A?.url?.go();
													},
													lang: { title: g.label },
												}),
											R?.toLowerCase() == 'radio' &&
												(0, t.Y)(u.q, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__radioList', v, K),
													...$.RadioList,
													options: Y.options,
													selected: Y.current,
													titleText: E,
													onSelect: (H, A) => {
														A?.url?.go();
													},
													lang: { title: g.label },
												}),
										],
								  })
								: null
						);
					});
				e.d(B, ['g', 0, o]);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(s),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					p = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts');
				const j = () => (0, M.AH)({}),
					I = (0, f.PA)((D) => {
						const o = (0, i.u)(),
							_ = (0, W.LU)(),
							P = { facets: D.controller?.store?.facets, treePath: _ };
						let n = (0, L.v6)('facets', o, P, D);
						const { limit: a, onFacetOptionClick: r, disableStyles: h, className: R, internalClassName: U, controller: c, treePath: F } = n,
							{ overrideElement: v, shouldRenderDefault: K } = (0, x._)('facets', n);
						if (!K) return v;
						const l = (N) => {
								r && r(N), c?.setFocused && c?.setFocused();
							},
							E = {
								components: {
									facetGridOptions: { onClick: l },
									facetHierarchyOptions: { onClick: l },
									facetListOptions: { onClick: l },
									facetPaletteOptions: { onClick: l },
								},
							},
							S = C()(E, n?.theme || {}, { arrayMerge: (N, J) => J });
						n = { ...n, theme: S };
						let { facets: d } = n;
						a && d && a > 0 && (d = d.slice(0, +a));
						const Y = { facet: { internalClassName: 'ss__facets__facet', ...(0, u.s)({ disableStyles: h }), theme: n.theme, treePath: F } },
							$ = (0, b.Z)(n, j);
						return d && d?.length > 0
							? (0, t.Y)(p._, {
									children: (0, t.Y)('div', {
										className: O()('ss__facets', R, U),
										...$,
										children: d.map((N) => (0, t.Y)(T.s, { ...Y.facet, facet: N }, N.field)),
									}),
							  })
							: null;
					});
				e.d(B, ['J', 0, I]);
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(X, B, e) {
				e.d(B, { b: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					s = e.n(O),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(f),
					p = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/hooks/useClickOutside.tsx'),
					I = e('./components/src/hooks/useLang.tsx'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					o = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					_ = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					n = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					a = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx');
				const r = ({ theme: R }) =>
						(0, m.AH)({
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
									color: R?.variables?.colors?.primary,
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
					h = (0, C.PA)((R) => {
						const U = (0, W.u)(),
							c = (0, x.LU)(),
							F = {
								limit: 6,
								iconCollapse: 'angle-down',
								iconExpand: 'angle-up',
								clearAllText: 'Clear All',
								toggleSidebarButtonText: 'Filters',
								facets: R.controller?.store?.facets,
								treePath: c,
							};
						let v = (0, L.v6)('facetsHorizontal', U, F, R);
						const {
								facets: K,
								limit: l,
								alwaysShowToggleSidebarButton: E,
								hideToggleSidebarButton: S,
								onFacetOptionClick: d,
								showSelectedCount: Y,
								hideSelectedCountParenthesis: $,
								clearAllIcon: N,
								showClearAllText: J,
								iconExpand: g,
								clearAllText: H,
								iconCollapse: A,
								toggleSidebarButtonText: k,
								disableStyles: z,
								className: V,
								internalClassName: G,
								controller: y,
								treePath: Z,
							} = v,
							{ overrideElement: oe, shouldRenderDefault: w } = (0, D._)('facetsHorizontal', v);
						if (!w) return oe;
						const se = (Q) => {
								d && d(Q);
							},
							_e = {
								components: {
									facetGridOptions: { onClick: se },
									facetHierarchyOptions: { onClick: se },
									facetListOptions: { onClick: se },
									facetPaletteOptions: { onClick: se },
								},
							},
							ne = T()(_e, v?.theme || {});
						v = { ...v, theme: ne };
						let q = K,
							ee = !1;
						typeof l < 'u' && Number.isInteger(l) && K && ((ee = K.length > +l), l > 0 ? (q = K.slice(0, +l)) : l == 0 && (q = []));
						const [re, ae] = (0, M.J0)(!1),
							te = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, u.s)({ disableStyles: z }),
									theme: v?.theme,
									treePath: Z,
								},
								button: { ...(0, u.s)({ disableStyles: z }), theme: v?.theme, treePath: Z },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, u.s)({ disableStyles: z }),
									theme: v?.theme,
									treePath: `${Z} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !S && (ee || E) ? !0 : void 0,
									...(0, u.s)({ disableStyles: z }),
									theme: v?.theme,
									treePath: `${Z} dropdown`,
								},
								slideout: {
									internalClassName: 'ss__facets-horizontal__slideout',
									onChange: (Q) => ae(Q),
									...(0, u.s)({ disableStyles: z }),
									theme: v?.theme,
									treePath: Z,
								},
								sidebar: { internalClassName: 'ss__facets-horizontal__sidebar', ...(0, u.s)({ disableStyles: z }), theme: v?.theme, treePath: Z },
								toggleSidebarButton: { ...(0, u.s)({ disableStyles: z }), theme: v?.theme, treePath: Z },
							},
							Pe = (0, b.Z)(v, r),
							[le, me] = (0, M.J0)(void 0),
							he = (0, j.L)(() => {
								le && me(void 0);
							}),
							Oe = { toggleSidebarButtonText: { value: k } },
							Me = T()(Oe, v.lang || {}),
							ve = (0, I.u)(Me, { facets: K, sidebarOpenState: re }),
							pe = ({ sidebarOpenState: Q, setSidebarOpenState: ie, subProps: ue }) =>
								(0, t.Y)(P.$, {
									...ue.toggleSidebarButton,
									internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
									onClick: () => ie(!Q),
									children: (0, t.Y)('span', { ...ve.toggleSidebarButtonText.all }),
								}),
							Ee = !!(!S && (ee || E));
						return (q && q?.length > 0) || ee
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										className: s()('ss__facets-horizontal', V, G),
										ref: he,
										...Pe,
										children: [
											(0, t.FD)('div', {
												className: 'ss__facets-horizontal__header',
												children: [
													q?.map((Q) => {
														const ie =
																Q?.values?.filter((de) => de?.filtered).length ||
																Q?.active?.high !== Q?.range?.high ||
																Q?.active?.low !== Q?.range?.low,
															ue = {
																dropdownButton: {
																	attributes: {
																		'aria-label': `currently ${le?.field === Q.field ? 'open' : 'collapsed'} ${Q.label} facet dropdown ${
																			Q.values?.length ? Q.values?.length + ' options' : ''
																		}`,
																	},
																},
																clearAllText: { value: H },
															},
															De = T()(ue, v.lang || {}),
															ce = (0, I.u)(De, { selectedFacet: le, facet: Q });
														return (0, t.Y)(o.m, {
															...te.dropdown,
															internalClassName: s()(
																te.dropdown.internalClassName,
																`ss__facets-horizontal__header__dropdown--${Q.display}`,
																`ss__facets-horizontal__header__dropdown--${Q.field}`
															),
															open: le?.field === Q.field,
															onClick: (de) => {
																le !== Q && de.code !== 'Escape' ? me(Q) : me(void 0);
															},
															button: (0, t.FD)('div', {
																className: 'ss__dropdown__button__heading',
																...ce.dropdownButton.attributes,
																children: [
																	(0, t.FD)('div', {
																		className: 'ss__facet__header__inner',
																		children: [
																			(0, t.Y)('span', { ...ce.dropdownButton.value, children: Q?.label }),
																			Y && ie && Q.type !== 'range'
																				? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: $ ? ie : `(${ie})` })
																				: null,
																			(ce.clearAllText.value || N) && ie
																				? (0, t.Y)(P.$, {
																						...te.button,
																						internalClassName: 'ss__facet__header__clear-all',
																						name: 'reset-facet',
																						onClick: (de) => {
																							de.stopPropagation(), Q?.clear.url.link.onClick();
																						},
																						icon: N || void 0,
																						children: ce.clearAllText.value && J ? (0, t.Y)('label', { ...ce.clearAllText.all }) : null,
																				  })
																				: (0, t.Y)(t.FK, {}),
																		],
																	}),
																	(0, t.Y)(_.I, {
																		...te.icon,
																		...(le?.field === Q.field
																			? { ...(typeof g == 'string' ? { icon: g } : g) }
																			: { ...(typeof A == 'string' ? { icon: A } : A) }),
																	}),
																],
															}),
															disableOverlay: !1,
															children: (0, t.Y)(p.s, { ...te.facet, facet: Q }),
														});
													}),
													Ee && (0, t.Y)(pe, { sidebarOpenState: re, setSidebarOpenState: ae, subProps: te }),
												],
											}),
											Ee && (0, t.Y)(n.S, { ...te.slideout, active: re, children: (0, t.Y)(a.B, { ...te.sidebar, controller: y }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(X, B, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(b);
				const I = (o) => {
						const _ = o.theme?.variables;
						return (0, M.AH)({
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
													fill: _?.colors?.primary,
													stroke: _?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					D = (0, s.PA)((o) => {
						const _ = (0, W.u)(),
							P = (0, x.LU)(),
							n = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: o.controller?.store?.filters,
								separator: ':',
								treePath: P,
							},
							a = (0, T.v6)('filterSummary', _, n, o),
							{
								filters: r,
								title: h,
								type: R,
								filterIcon: U,
								clearAllIcon: c,
								separator: F,
								hideFacetLabel: v,
								hideTitle: K,
								clearAllLabel: l,
								hideClearAll: E,
								onClick: S,
								onClearAllClick: d,
								disableStyles: Y,
								className: $,
								internalClassName: N,
								treePath: J,
							} = a,
							{ overrideElement: g, shouldRenderDefault: H } = (0, L._)('filterSummary', a);
						if (!H) return g;
						const A = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, f.s)({ disableStyles: Y, separator: F, hideFacetLabel: v, icon: U }),
									theme: a.theme,
									treePath: J,
								},
							},
							k = (0, p.Z)(a, I),
							z = { title: { value: h }, clearAllLabel: { value: l } },
							V = j()(z, a.lang || {}),
							G = (0, u.u)(V, { filters: r });
						return r?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...k,
										className: O()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': R === 'list' },
											{ 'ss__filter-summary--inline': R === 'inline' },
											$,
											N
										),
										children: [
											!K && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...G.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													r.map((y) => (0, t.Y)(C.d, { ...A.filter, filter: y, onClick: (Z) => S && S(Z, y) })),
													!E &&
														(0, t.Y)(C.d, {
															...A.filter,
															name: 'clear-all',
															icon: c,
															internalClassName: `${A?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: l,
															onClick: (y) => {
																d && d(y), o.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': l } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(B, ['r', 0, D]);
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(X, B, e) {
				e.d(B, { P: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					W = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					L = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					b = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					j = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					I = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					D = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					o = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					_ = e('./components/src/components/Atoms/Button/Button.tsx'),
					P = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					a = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					r = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					h = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
				const R = ({}) =>
						(0, M.AH)({
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
					U = (0, s.PA)((c) => {
						const F = (0, f.u)(),
							K = { treePath: (0, T.LU)() },
							l = (0, W.v6)('layout', F, K, c),
							{ controller: E, toggleSideBarButton: S, disableStyles: d, className: Y, internalClassName: $, layout: N } = l;
						delete l.treePath;
						const J = (0, x.Z)(l, R),
							g = {
								Banner: {
									controller: E,
									content: E.store.merchandising.content,
									...(0, i.s)({ disableStyles: d }),
									theme: l?.theme,
									treePath: c.treePath,
								},
								SearchHeader: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								FilterSummary: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								LayoutSelector: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								Breadcrumbs: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								Facets: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								FacetsHorizontal: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								Pagination: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								PaginationInfo: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								LoadMore: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								SortBy: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								PerPage: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: l?.theme, treePath: c.treePath },
								ToggleSideBarButton: {
									...S,
									controller: E,
									name: 'sidebar-toggle',
									...(0, i.s)({ disableStyles: d }),
									theme: l?.theme,
									treePath: c.treePath,
								},
							},
							H = S,
							A = E.store.pagination.totalResults > 0;
						function k(y) {
							switch (y) {
								case 'searchHeader':
									return (0, t.Y)(o.w, { ...g.SearchHeader });
								case 'filterSummary':
									if (A) return (0, t.Y)(p.r, { ...g.FilterSummary });
									break;
								case 'layoutSelector':
									if (A) return (0, t.Y)(I.s, { ...g.LayoutSelector });
									break;
								case 'paginationInfo':
									if (A) return (0, t.Y)(D.R, { ...g.PaginationInfo });
									break;
								case 'sortBy':
									if (A) return (0, t.Y)(b.g, { ...g.SortBy });
									break;
								case 'perPage':
									if (A) return (0, t.Y)(j.F, { ...g.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (A)
										return (
											H &&
											(0, t.Y)('div', {
												className: 'ss__layout__sidebar-toggle-button-wrapper',
												children: (0, t.Y)(_.$, { ...g.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (A) return E.store.config.settings?.infinite?.enabled ? (0, t.Y)(L.e, { ...g.LoadMore }) : (0, t.Y)(u.d, { ...g.Pagination });
									break;
								case 'breadcrumbs':
									if (A) return (0, t.Y)(h.B, { ...g.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${V++}` });
								case 'banner.banner':
									return (0, t.Y)(P.l, { ...g.Banner, type: n.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(P.l, { ...g.Banner, type: n.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(P.l, { ...g.Banner, type: n.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(P.l, { ...g.Banner, type: n.c.LEFT, name: 'left' });
								case 'facets':
									if (A) return (0, t.Y)(a.J, { ...g.Facets });
									break;
								case 'facetsHorizontal':
									if (A) return (0, t.Y)(r.b, { ...g.Facets });
									break;
								default:
									return null;
							}
						}
						let z = 0,
							V = 0;
						const G = N?.map((y) => {
							if (Array.isArray(y)) {
								const Z = y.map((w) => k(w));
								return y.some((w, se) => w !== '_' && Z[se])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${z++}`, children: Z })
									: null;
							} else return k(y);
						});
						return G?.some(Boolean) ? (0, t.Y)(C._, { children: (0, t.Y)('div', { ...J, className: O()('ss__layout', Y, $), children: G }) }) : null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(X, B, e) {
				e.d(B, { B: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					O = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					W = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(u),
					b = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = ({ stickyOffset: o }) =>
						(0, M.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: o || 0 }, '& .ss__facets': { width: '100%' } }),
					D = (0, s.PA)((o) => {
						const _ = (0, f.u)(),
							n = { titleText: 'Filters', treePath: (0, T.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							a = (0, i.v6)('sidebar', _, n, o),
							{
								controller: r,
								layout: h,
								hideTitleText: R,
								titleText: U,
								sticky: c,
								disableStyles: F,
								className: v,
								internalClassName: K,
								treePath: l,
							} = a,
							{ overrideElement: E, shouldRenderDefault: S } = (0, j._)('sidebar', a);
						if (!S) return E;
						const d = (0, W.Z)(a, I),
							Y = { titleText: { value: U } },
							$ = L()(Y, a.lang || {}),
							N = (0, b.u)($, { controller: r }),
							J = { Layout: { ...(0, p.s)({ disableStyles: F }), theme: a.theme, treePath: l } },
							g = h?.length;
						return r?.store?.loaded && r?.store?.pagination?.totalResults > 0 && g
							? (0, t.Y)(C._, {
									children: (0, t.FD)('div', {
										...d,
										className: O()('ss__sidebar', v, K, { 'ss__sidebar--sticky': c }),
										children: [
											R
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: O()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...N.titleText.all,
														children: U,
												  }),
											(0, t.Y)('div', { className: O()('ss__sidebar__inner'), children: (0, t.Y)(x.P, { controller: r, layout: h, ...J.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(X, B, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = (m, O) => {
					const s = (0, t.li)(m);
					(s.current = m),
						(0, t.vJ)(() => {
							const C = setTimeout(() => {
								s.current();
							}, O);
							return () => {
								clearTimeout(C);
							};
						}, [m, O]);
				};
				e.d(B, ['d', 0, M]);
			},
			'./components/src/hooks/useIntersection.tsx'(X, B, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = (m, O = '0px', s = !1) => {
					const [C, f] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const T = new IntersectionObserver(
								([p]) => {
									f(p.isIntersecting), s && p.isIntersecting && T.unobserve(m.current);
								},
								{ rootMargin: O }
							);
							return (
								m.current && T.observe(m.current),
								() => {
									T.unobserve(m.current);
								}
							);
						}, []),
						C
					);
				};
				e.d(B, ['v', 0, M]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(X, B, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = 250,
					m = (s, C = {}) => {
						const { rootMargin: f = '0px', fireOnce: T = !1, threshold: p = 0, minVisibleTime: i = 0 } = C,
							[W, x] = (0, t.J0)(!1),
							u = (0, t.li)(null),
							L = (0, t.li)(null),
							[b, j] = (0, t.J0)(0),
							I = (0, t.hb)((D) => {
								(s.current = D), j((o) => o + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								x(!1);
								let D = null,
									o = null;
								if (!window.IntersectionObserver || !s.current) return;
								const _ = () => {
										o && (window.clearInterval(o), (o = null));
									},
									P = () => {
										i > 0
											? ((L.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													x(!0), T && s.current && D && D.unobserve(s.current);
											  }, i)))
											: (x(!0), T && s.current && D && D.unobserve(s.current));
									},
									n = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (L.current = null), x(!1);
									};
								return (
									(D = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? s.current && O(s.current)
													? (_(), P())
													: (n(),
													  o ||
															(o = window.setInterval(() => {
																if (!s.current) {
																	_();
																	return;
																}
																O(s.current) && (_(), P());
															}, M)))
												: (_(), n());
										},
										{ rootMargin: f, threshold: p }
									)),
									s.current && D.observe(s.current),
									() => {
										x(!1), _(), u.current && window.clearTimeout(u.current), D && s.current && D.unobserve(s.current);
									}
								);
							}, [s, b]),
							{ inViewport: W, updateRef: I }
						);
					};
				function O(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(B, ['v', 0, m]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(X, B, e) {
				e.d(B, { U: () => M });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function M(m, O) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(m),
						[C, f] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							f(!!s.matches);
							const T = () => f(!!s.matches);
							return (
								s.addListener(T),
								() => {
									O instanceof Function && O(), s.removeListener(T);
								}
							);
						}, [m]),
						C
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(X, B, e) {
				e.d(B, { N: () => O, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = 'sstracking';
				function s(C) {
					const f = C;
					return (p) => {
						const { controller: i, result: W, banner: x, type: u, content: L, ...b } = p;
						if (p.trackingRef) return (0, t.Y)(f, { ...p });
						!i && (!u || !L) && console.warn('Warning: No controller provided to withTracking', p),
							!W && !x && (!u || !L) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: j, inViewport: I, updateRef: D } = (0, M.Q)(),
							o = (W || x || (u && L?.[u]?.[0]))?.responseId,
							_ = (0, m.li)(o),
							P = (0, m.li)(!1);
						_.current !== o && (P.current = !0),
							(0, m.vJ)(() => {
								_.current !== o && ((_.current = o), D(j.current));
							}, [o, D]),
							(0, m.vJ)(() => {
								P.current && !I && (P.current = !1);
							}, [I, o]);
						const n = u && L && !W && ['search', 'autocomplete'].includes(i?.type || '');
						I && !P.current && (n ? i?.track.banner.impression(L[u][0]) : W?.bundleSeed || i?.track.product.impression(W || x));
						const a = (0, m.hb)(
							(h) => {
								n ? i?.track.banner.click(h, L[u][0]) : i?.track.product.click(h, W || x);
							},
							[i, W, x, u, L]
						);
						(0, m.vJ)(() => {
							const h = j.current;
							if (h)
								return (
									h.setAttribute(O, 'true'),
									h.addEventListener('click', a, !0),
									() => {
										h.removeEventListener('click', a, !0);
									}
								);
						}, [a]);
						const r = {
							...b,
							controller: i,
							result: W,
							banner: x,
							type: u,
							content: L,
							trackingRef: (0, m.hb)(
								(h) => {
									D(h);
								},
								[D]
							),
						};
						return (0, t.Y)(f, { ...r });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(X, B, e) {
				e.d(B, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					O = 1e3;
				function s(C) {
					const f = (0, t.li)(null),
						{ inViewport: T, updateRef: p } = (0, M.v)(f, { ...C, fireOnce: !0, threshold: m, minVisibleTime: O });
					return { ref: f, inViewport: T, updateRef: p };
				}
			},
		},
	]);
})();

//# sourceMappingURL=1798.b72fa4e5.iframe.bundle.js.map
