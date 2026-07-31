'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1798],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/providers/cache.tsx'),
					x = e('./components/src/providers/controller.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/withTracking.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					K = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const S = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					f = (0, x.Bk)(
						(0, M.PA)((v) => {
							const n = (0, T.u)(),
								E = { treePath: (0, i.LU)() },
								l = (0, y.v6)('banner', n, E, v),
								{ controller: _, type: o, className: h, internalClassName: A } = l,
								W = l.content || _?.store?.merchandising.content,
								{ overrideElement: c, shouldRenderDefault: Y } = (0, u._)('banner', l);
							if (!Y) return c;
							if (o === I.c.INLINE) return console.warn(`BannerType '${I.c.INLINE}' is not supported in <Banner /> component`), null;
							const g = (0, C.Z)(l, S),
								a = W?.[o]?.[0]?.value;
							if (!o || !a) return null;
							const P = (0, K.hb)(
								(0, D.W)((b) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${o}`, h, A),
										...g,
										ref: b.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof a == 'string' ? a : a.join('') },
									})
								),
								[a, o]
							);
							return (0, t.Y)(L._, { children: (0, t.Y)(P, { ...l }) });
						})
					);
				e.d(R, ['l', 0, f]);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = () =>
						(0, M.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					K = (0, s.PA)((S) => {
						const f = (0, x.u)(),
							n = {
								separator: '>',
								treePath: (0, T.LU)(),
								data: S.controller
									? (b) => [
											{ label: 'Search' },
											{ label: `Results ${b?.store.search?.query?.string ? `for "${b?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							r = (0, i.v6)('breadcrumbs', f, n, S),
							{ data: E, separator: l, separatorIcon: _, className: o, internalClassName: h, controller: A, disableStyles: W, treePath: c } = r,
							{ overrideElement: Y, shouldRenderDefault: g } = (0, u._)('breadcrumbs', r);
						if (!g) return Y;
						const U = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, D.s)({ disableStyles: W }), theme: r?.theme, treePath: c },
							},
							a = (0, y.Z)(r, I);
						let P;
						return (
							typeof E == 'function' ? (P = E(A)) : (P = E),
							P
								? (0, t.Y)(L._, {
										children: (0, t.Y)('div', {
											...a,
											className: p()('ss__breadcrumbs', o, h),
											children: (0, t.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: P.map((b) =>
													(0, t.Y)('li', {
														className: 'ss__breadcrumbs__crumbs__crumb',
														children: b.url ? (0, t.Y)('a', { href: b.url, children: b.label }) : b.label,
													})
												).reduce((b, d) => [
													b,
													(0, t.FD)('li', {
														className: 'ss__breadcrumbs__crumbs__separator',
														children: [
															l !== !1 ? l : (0, t.Y)(t.FK, {}),
															_ && (0, t.Y)(C.I, { ...U.icon, ...(typeof _ == 'string' ? { icon: _ } : _) }),
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
				e.d(R, ['B', 0, K]);
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/hooks/useA11y.tsx');
				const u = ({ transitionSpeed: K, color: S }) =>
						(0, M.AH)({
							transition: `background ${K} ease 0s, left 0s ease ${K}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${K} ease, left 0s ease`, background: S, left: '0' },
						}),
					I = (0, s.PA)((K) => {
						const S = (0, x.u)(),
							v = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, T.LU)() },
							n = (0, D.v6)('overlay', S, v, K),
							{ active: r, onClick: E, disableA11y: l, className: _, internalClassName: o } = n,
							{ overrideElement: h, shouldRenderDefault: A } = (0, y._)('overlay', n);
						if (!A) return h;
						const W = (0, i.Z)(n, u);
						return (0, t.Y)(L._, {
							children: (0, t.Y)('div', {
								onClick: (c) => E && r && E(c),
								ref: (c) => (l ? null : (0, C.iy)(c, r ? 0 : -1)),
								className: p()('ss__overlay', { 'ss__overlay--active': r }, _, o),
								...W,
							}),
						});
					});
				e.d(R, ['h', 0, I]);
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(y),
					u = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const K = ({}) => (0, m.AH)({}),
					S = (0, M.PA)((f) => {
						const v = (0, x.u)(),
							n = (0, T.LU)(),
							r = f.controller?.store.pagination || f.pagination,
							E = {
								infoText: `${r?.multiplePages ? `${r?.begin} - ${r?.end} of` : ''} ${`${r?.totalResults} result${r?.totalResults == 1 ? '' : 's'}`}`,
								treePath: n,
							},
							l = (0, D.v6)('paginationInfo', v, E, f),
							{ controller: _, infoText: o, className: h, internalClassName: A } = l,
							{ overrideElement: W, shouldRenderDefault: c } = (0, I._)('paginationInfo', l);
						if (!c) return W;
						const Y = r || _?.store?.pagination,
							g = (0, i.Z)(l, K),
							U = {
								infoText: {
									value: o,
									attributes: {
										'aria-label': `displaying ${r?.multiplePages ? `${r?.begin} - ${r?.end} of` : ''} ${r?.totalResults} result${
											r?.totalResults == 1 ? '' : 's'
										} ${_?.store?.search.query ? `for "${_?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							a = C()(U, l.lang || {}),
							P = (0, u.u)(a, { pagination: Y }, { activeBreakpoint: v?.activeBreakpoint });
						return Y?.totalResults
							? (0, t.Y)(L._, {
									children: (0, t.Y)('div', {
										...g,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', h, A),
										...P.infoText?.all,
									}),
							  })
							: null;
					});
				e.d(R, ['R', 0, S]);
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					D = e('../../node_modules/classnames/index.js'),
					i = e.n(D),
					y = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u);
				const K = () => (0, M.AH)({}),
					S = (0, m.PA)((f) => {
						const v = (0, s.u)(),
							n = (0, L.LU)(),
							r = f.controller?.store.merchandising.landingPage || f.merchandising?.landingPage,
							E = f.controller?.store.pagination || f.pagination,
							l = f.controller?.store.search || f.query,
							_ = {
								titleText: `Search result${E?.totalResults == 1 ? '' : 's'} ${
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
							o = (0, x.v6)('searchHeader', v, _, f),
							{
								className: h,
								internalClassName: A,
								titleText: W,
								subtitleText: c,
								correctedQueryText: Y,
								noResultsText: g,
								didYouMeanText: U,
								expandedSearchText: a,
								hideTitleText: P,
								hideSubtitleText: b,
								hideCorrectedQueryText: d,
								hideNoResultsText: F,
								hideExpandedSearchText: $,
								hideDidYouMeanText: j,
							} = o,
							{ overrideElement: V, shouldRenderDefault: O } = (0, C._)('searchHeader', o);
						if (!O) return V;
						const N = (0, T.Z)(o, K),
							B = {
								titleText: { value: W },
								subtitleText: { value: c },
								correctedQueryText: { value: Y },
								noResultsText: { value: g },
								didYouMeanText: { value: U },
								expandedSearchText: { value: a },
							},
							w = I()(B, o.lang || {}),
							H = (0, y.u)(w, { pagination: E, search: l }, { activeBreakpoint: v?.activeBreakpoint });
						return (0, t.Y)(p._, {
							children: (0, t.Y)('header', {
								...N,
								className: i()('ss__search-header', h, A),
								children: r
									? (0, t.Y)('h3', { className: i()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: r.title })
									: (0, t.FD)(t.FK, {
											children: [
												E?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!$ && l?.matchType && l.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: i()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...H.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!P &&
																	(l?.matchType !== 'expanded' || $) &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...H.titleText?.all,
																	}),
																l?.originalQuery &&
																	!d &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...H.correctedQueryText?.all,
																	}),
															],
													  })
													: E?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!F &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...H.noResultsText?.all,
																	}),
																l?.didYouMean &&
																	!j &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...H.didYouMeanText?.all,
																	}),
															],
													  }),
												(c || w.subtitleText.value) &&
													!b &&
													(0, t.Y)('h5', {
														className: i()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...H.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
				e.d(R, ['w', 0, S]);
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					I = e('./components/src/hooks/useLang.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(S);
				const v = ({}) =>
						(0, m.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					n = (0, M.PA)((r) => {
						const E = (0, i.u)(),
							_ = { treePath: (0, y.LU)() },
							o = (0, x.v6)('filter', E, _, r),
							{
								filter: h,
								facetLabel: A,
								valueLabel: W,
								url: c,
								hideFacetLabel: Y,
								onClick: g,
								icon: U,
								separator: a,
								disableStyles: P,
								className: b,
								internalClassName: d,
								treePath: F,
							} = o,
							{ overrideElement: $, shouldRenderDefault: j } = (0, K._)('filter', o);
						if (!j) return $;
						const V = h?.url?.link || c?.link,
							O = h?.value.label || W,
							N = h?.facet.label || A,
							B = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, L.s)({ disableStyles: P }), theme: o.theme, treePath: F },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, L.s)({ disableStyles: P, icon: U }),
									theme: o.theme,
									treePath: F,
								},
							},
							w = (0, T.Z)(o, v),
							H = { filter: { attributes: { 'aria-label': N ? `remove selected ${N} filter ${O}` : O } } },
							J = f()(H, o.lang || {}),
							X = (0, I.u)(J, { label: N, value: O }, { activeBreakpoint: E?.activeBreakpoint });
						return O
							? (0, t.Y)(D._, {
									children: (0, t.Y)('a', {
										...w,
										className: s()('ss__filter', b, d),
										onClick: (G) => {
											V?.onClick && V.onClick(G), g && g(G);
										},
										href: V?.href,
										tabIndex: 0,
										...X.filter?.all,
										children: (0, t.FD)(C.$, {
											...B.button,
											children: [
												(0, t.Y)(u.I, { ...B.icon, ...(typeof U == 'string' ? { icon: U } : U) }),
												!Y &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [N, a && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: a })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: O }),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(R, ['d', 0, n]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(x),
					D = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/hooks/useIntersection.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = e('./components/src/components/Atoms/Button/Button.tsx'),
					n = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					r = e('./components/src/hooks/useFuncDebounce.tsx');
				const E = ({ pagination: _, progressIndicatorWidth: o, progressIndicatorSize: h, color: A, backgroundColor: W, theme: c }) =>
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
										width: o,
										background: W || c?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: h,
										'& .ss__load-more__progress__indicator__bar': {
											width: _ ? `${(_.end / _.totalResults) * 100}%` : '',
											background: A || c?.variables?.colors?.primary || '#ccc',
											borderRadius: h,
											height: h,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					l = (0, L.PA)((_) => {
						const o = (0, i.u)(),
							A = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, y.LU)(),
							},
							W = (0, u.v6)('loadMore', o, A, _),
							{
								pagination: c,
								controller: Y,
								onClick: g,
								autoFetch: U,
								intersectionOffset: a,
								loading: P,
								loadMoreText: b,
								hideProgressIndicator: d,
								hideProgressText: F,
								loadingLocation: $,
								loadingIcon: j,
								disableStyles: V,
								className: O,
								internalClassName: N,
								treePath: B,
							} = W,
							{ overrideElement: w, shouldRenderDefault: H } = (0, f._)('loadMore', W);
						if (!H) return w;
						const J = c || Y?.store?.pagination,
							X = typeof P == 'boolean' ? P : Y?.store?.loading,
							G = (X && $ === 'button') || !J?.next,
							z = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': X && $ === 'outside' },
										{ 'ss__load-more__button--disabled': G }
									),
									...(0, C.s)({ disableStyles: V }),
									theme: W?.theme,
									treePath: B,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, C.s)({ disableStyles: V }), theme: W?.theme, treePath: B },
							};
						if (!J) return null;
						const Z = (0, I.Z)({ ...W, pagination: J }, E),
							oe = {};
						if (U) {
							const q = (0, M.li)(null);
							oe.ref = q;
							const se = (0, K.v)(q, a || '0px'),
								[ae, te] = (0, M.J0)(!0);
							X
								? te(!0)
								: (0, r.d)(() => {
										te(!1);
								  }, 500),
								se && J.next && !ae && J.next.url.go({ history: 'replace' });
						}
						const ee = {
								loadMoreButton: { value: b, attributes: { 'aria-label': b } },
								progressText: { value: `You've viewed ${J?.end} of ${J?.totalResults} products` },
							},
							ne = T()(ee, W.lang || {}),
							le = (0, S.u)(ne, { pagination: J }, { activeBreakpoint: o?.activeBreakpoint });
						return J.totalResults
							? (0, t.Y)(D._, {
									children: (0, t.FD)('div', {
										...Z,
										...oe,
										className: s()('ss__load-more', { 'ss__load-more--loading': X }, { 'ss__load-more--autoFetch': U }, O, N),
										children: [
											!U &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(v.$, {
															onClick: (q) => {
																J.next?.url.go({ history: 'replace' }), g && g(q);
															},
															...z.button,
															...le.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...le.loadMoreButton.value, children: b }),
																j && X && $ === 'button' ? (0, t.Y)(n.I, { ...z.icon, ...(typeof j == 'string' ? { icon: j } : j) }) : null,
															],
														}),
														j && X && $ === 'outside' && (0, t.Y)(n.I, { ...z.icon, ...(typeof j == 'string' ? { icon: j } : j) }),
													],
												}),
											(!d || !F) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!d &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!F &&
																(0, t.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...le.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
				e.d(R, ['e', 0, l]);
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u),
					K = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const f = () =>
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
					v = (0, M.PA)((n) => {
						const r = (0, x.u)(),
							l = { pages: 5, treePath: (0, T.LU)() },
							_ = (0, i.v6)('pagination', r, l, n),
							{
								pagination: o,
								controller: h,
								pages: A,
								pagesLeft: W,
								pagesRight: c,
								hideFirst: Y,
								hideLast: g,
								persistFirst: U,
								persistLast: a,
								hideEllipsis: P,
								hidePages: b,
								hideNext: d,
								hidePrev: F,
								nextButton: $,
								prevButton: j,
								firstButton: V,
								lastButton: O,
								ellipsisContent: N,
								disableStyles: B,
								className: w,
								internalClassName: H,
								treePath: J,
							} = _,
							{ overrideElement: X, shouldRenderDefault: G } = (0, S._)('pagination', _);
						if (!G) return X;
						const z = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, D.s)({ disableStyles: B }), theme: _?.theme, treePath: J },
							},
							Z = o || h?.store?.pagination,
							oe = Number.isInteger(W) && Number.isInteger(c) ? [W, c] : [A],
							ee = Z?.getPages(...oe),
							ne = ee?.map((te) => te.number),
							le = (0, y.Z)(_, f),
							q = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${Z?.last.number}` } },
							},
							se = I()(q, _.lang || {}),
							ae = (0, K.u)(se, { pagination: Z }, { activeBreakpoint: r?.activeBreakpoint });
						return ne && ne.length > 1 && Z?.totalResults
							? (0, t.Y)(L._, {
									children: (0, t.Y)('div', {
										...le,
										className: s()('ss__pagination', w, H),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												Z.previous &&
													!F &&
													(0, t.Y)('a', {
														...Z.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...ae.previous?.all,
														children: j || (0, t.Y)(C.I, { ...z.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!ne.includes(Z.first.number) || (U && Z.page !== Z.first.number)) &&
													!Y &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...Z.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...ae.first?.all,
																children: V || Z.first.number,
															}),
															!ne.includes(2) && !P && (0, t.Y)('span', { children: N ?? (0, t.Y)(t.FK, { children: '\u2026' }) }),
														],
													}),
												!b &&
													ee &&
													ee.map((te) => {
														const re = { page: { attributes: { 'aria-label': `go to page ${te.number}` } } },
															me = I()(re, _.lang || {}),
															ie = (0, K.u)(me, { pagination: Z, page: te }, { activeBreakpoint: r?.activeBreakpoint });
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
												(!ne.includes(Z.last.number) || (a && Z.page !== Z.last.number)) &&
													!g &&
													(0, t.FD)(t.FK, {
														children: [
															!ne.includes(Z.totalPages - 1) && !P && (0, t.Y)('span', { children: N ?? (0, t.Y)(t.FK, { children: '\u2026' }) }),
															(0, t.Y)('a', {
																...Z.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...ae.last?.all,
																children: O || Z.last.number,
															}),
														],
													}),
												Z.next &&
													!d &&
													(0, t.Y)('a', {
														...Z.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...ae.next?.all,
														children: $ || (0, t.Y)(C.I, { ...z.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(R, ['d', 0, v]);
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					I = e('./components/src/components/Molecules/List/List.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(K),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					n = (0, M.PA)((r) => {
						const E = (0, x.u)(),
							_ = { label: 'Per Page', type: 'dropdown', treePath: (0, T.LU)() },
							o = (0, i.v6)('perPage', E, _, r),
							{ pagination: h, type: A, controller: W, label: c, disableStyles: Y, className: g, internalClassName: U, treePath: a } = o,
							{ overrideElement: P, shouldRenderDefault: b } = (0, f._)('perPage', o);
						if (!b) return P;
						const d = h || W?.store?.pagination,
							F = {
								select: { ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
								RadioList: { ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
							},
							$ = (0, y.Z)(o, v),
							j = d && d?.pageSizeOptions?.find((N) => N.value == d?.pageSize),
							V = { label: { value: c } },
							O = S()(V, o.lang || {});
						return d?.pageSize && typeof d?.pageSizeOptions == 'object' && d.pageSizeOptions?.length
							? (0, t.FD)(L._, {
									children: [
										A?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(C.l, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__select', g, U),
												...F.select,
												label: c,
												options: d.pageSizeOptions,
												selected: j,
												onSelect: (N, B) => {
													d.setPageSize(+B.value);
												},
												lang: { buttonLabel: O.label },
											}),
										A?.toLowerCase() == 'list' &&
											(0, t.Y)(I.B, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__list', g, U),
												...F.List,
												onSelect: (N, B) => {
													d.setPageSize(+B.value);
												},
												requireSelection: !0,
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: O.label },
											}),
										A?.toLowerCase() == 'radio' &&
											(0, t.Y)(u.q, {
												...$,
												className: s()('ss__per-page', 'ss__per-page__radioList', g, U),
												...F.RadioList,
												onSelect: (N, B) => {
													d.setPageSize(+B.value);
												},
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: O.label },
											}),
									],
							  })
							: null;
					});
				e.d(R, ['F', 0, n]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					L = e.n(s),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useMediaQuery.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const f = ({ slideDirection: n, transitionSpeed: r, width: E }) =>
						(0, p.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${n || 'left'} ${r}`,
							left: n == 'left' ? `-${E}` : n != 'right' ? '0' : 'initial',
							right: n == 'right' ? `-${E}` : 'initial',
							bottom: n == 'bottom' ? '-100vh' : 'initial',
							top: n == 'top' ? '-100vh' : n == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: E?.endsWith('%') && parseInt(E.split('%')[0]) > 90 ? E : '90%',
							maxWidth: E,
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
					v = (0, m.PA)((n) => {
						const r = (0, C.u)(),
							l = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, u.LU)(),
								rerender: !0,
							},
							_ = (0, D.v6)('slideout', r, l, n),
							{
								children: o,
								active: h,
								rerender: A,
								buttonContent: W,
								buttonSelector: c,
								noButtonWrapper: Y,
								displayAt: g,
								transitionSpeed: U,
								overlayColor: a,
								onChange: P,
								disableStyles: b,
								className: d,
								internalClassName: F,
								treePath: $,
							} = _,
							{ overrideElement: j, shouldRenderDefault: V } = (0, K._)('slideout', _);
						if (!V) return j;
						const O = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, T.s)({ disableStyles: b, color: a, transitionSpeed: U }),
									theme: _?.theme,
									treePath: $,
								},
							},
							[N, B] = (0, M.J0)(!!h),
							[w, H] = (0, M.J0)(!!h),
							J = () => {
								const z = !N;
								N
									? (B(!1),
									  A &&
											setTimeout(() => {
												H(!1);
											}, 250))
									: (B(!0), H(!0)),
									(document.body.style.overflow = z ? 'hidden' : ''),
									P && P(z);
							};
						(0, M.vJ)(() => {
							H(!!h), B(!!h);
						}, [h]);
						const X = (0, I.U)(g, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = X && N ? 'hidden' : '';
						const G = (0, i.Z)(_, f);
						return (
							(0, M.vJ)(() => {
								if (c) {
									let z;
									typeof c == 'string' ? (z = document.querySelector(c)) : (z = c), z && z.addEventListener('click', () => J());
								}
							}, []),
							X || !A
								? (0, t.FD)(y._, {
										children: [
											W &&
												(Y
													? (0, x.Y)(W, { toggleActive: J, active: N, treePath: $ })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => J(),
															children: (0, x.Y)(W, { active: N, treePath: $ }),
													  })),
											(0, t.Y)('div', {
												className: L()('ss__slideout', d, F, { 'ss__slideout--active': N }),
												style: { visibility: A || X ? 'visible' : 'hidden' },
												...G,
												children: w && (0, x.Y)(o, { toggleActive: J, active: N, treePath: $ }),
											}),
											(0, t.Y)(S.h, { ...O.overlay, active: N, onClick: J }),
										],
								  })
								: null
						);
					});
				e.d(R, ['S', 0, v]);
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					I = e('./components/src/components/Molecules/List/List.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(S);
				const v = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					n = (0, M.PA)((r) => {
						const E = (0, x.u)(),
							_ = { label: 'Sort By', type: 'dropdown', treePath: (0, T.LU)() },
							o = (0, i.v6)('sortBy', E, _, r),
							{ sorting: h, type: A, controller: W, hideLabel: c, disableStyles: Y, className: g, internalClassName: U, treePath: a } = o;
						let P = o.label;
						const { overrideElement: b, shouldRenderDefault: d } = (0, K._)('sortBy', o);
						if (!d) return b;
						const F = h || W?.store?.sorting,
							$ = {
								Select: { ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
								RadioList: { ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, D.s)({ disableStyles: Y }), theme: o?.theme, treePath: a },
							},
							j = (0, y.Z)(o, v),
							V = { label: { value: P } },
							O = f()(V, o.lang || {});
						return (
							c && (delete O.label.value, (P = void 0)),
							F?.current && typeof F?.options == 'object' && F.options?.length
								? (0, t.FD)(L._, {
										children: [
											A?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(C.l, {
													...j,
													className: s()('ss__sortby', 'ss__sortby__select', g, U),
													...$.Select,
													label: P,
													options: F.options,
													selected: F.current,
													onSelect: (N, B) => {
														B?.url?.go();
													},
													lang: { buttonLabel: O.label },
												}),
											A?.toLowerCase() == 'list' &&
												(0, t.Y)(I.B, {
													...j,
													className: s()('ss__sortby', 'ss__sortby__list', g, U),
													...$.List,
													options: F.options,
													selected: F.current,
													titleText: P,
													onSelect: (N, B) => {
														B?.url?.go();
													},
													lang: { title: O.label },
												}),
											A?.toLowerCase() == 'radio' &&
												(0, t.Y)(u.q, {
													...j,
													className: s()('ss__sortby', 'ss__sortby__radioList', g, U),
													...$.RadioList,
													options: F.options,
													selected: F.current,
													titleText: P,
													onSelect: (N, B) => {
														B?.url?.go();
													},
													lang: { title: O.label },
												}),
										],
								  })
								: null
						);
					});
				e.d(R, ['g', 0, n]);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(s),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					D = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts');
				const S = () => (0, M.AH)({}),
					f = (0, x.PA)((v) => {
						const n = (0, i.u)(),
							r = (0, y.LU)(),
							E = { facets: v.controller?.store?.facets, treePath: r };
						let l = (0, I.v6)('facets', n, E, v);
						const { limit: _, onFacetOptionClick: o, disableStyles: h, className: A, internalClassName: W, controller: c, treePath: Y } = l,
							{ overrideElement: g, shouldRenderDefault: U } = (0, C._)('facets', l);
						if (!U) return g;
						const a = (j) => {
								o && o(j), c?.setFocused && c?.setFocused();
							},
							P = {
								components: {
									facetGridOptions: { onClick: a },
									facetHierarchyOptions: { onClick: a },
									facetListOptions: { onClick: a },
									facetPaletteOptions: { onClick: a },
								},
							},
							b = L()(P, l?.theme || {}, { arrayMerge: (j, V) => V });
						l = { ...l, theme: b };
						let { facets: d } = l;
						_ && d && _ > 0 && (d = d.slice(0, +_));
						const F = { facet: { internalClassName: 'ss__facets__facet', ...(0, u.s)({ disableStyles: h }), theme: l.theme, treePath: Y } },
							$ = (0, K.Z)(l, S);
						return d && d?.length > 0
							? (0, t.Y)(D._, {
									children: (0, t.Y)('div', {
										className: p()('ss__facets', A, W),
										...$,
										children: d.map((j) => (0, t.Y)(T.s, { ...F.facet, facet: j }, j.field)),
									}),
							  })
							: null;
					});
				e.d(R, ['J', 0, f]);
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(k, R, e) {
				e.d(R, { b: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					L = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(x),
					D = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/hooks/useClickOutside.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					n = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					r = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = e('./components/src/components/Atoms/Button/Button.tsx'),
					l = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					_ = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx');
				const o = ({ theme: A }) =>
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
									color: A?.variables?.colors?.primary,
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
					h = (0, L.PA)((A) => {
						const W = (0, y.u)(),
							c = (0, C.LU)(),
							Y = {
								limit: 6,
								iconCollapse: 'angle-down',
								iconExpand: 'angle-up',
								clearAllText: 'Clear All',
								toggleSidebarButtonText: 'Filters',
								facets: A.controller?.store?.facets,
								treePath: c,
							};
						let g = (0, I.v6)('facetsHorizontal', W, Y, A);
						const {
								facets: U,
								limit: a,
								alwaysShowToggleSidebarButton: P,
								hideToggleSidebarButton: b,
								onFacetOptionClick: d,
								showSelectedCount: F,
								hideSelectedCountParenthesis: $,
								clearAllIcon: j,
								showClearAllText: V,
								iconExpand: O,
								clearAllText: N,
								iconCollapse: B,
								toggleSidebarButtonText: w,
								disableStyles: H,
								className: J,
								internalClassName: X,
								controller: G,
								treePath: z,
							} = g,
							{ overrideElement: Z, shouldRenderDefault: oe } = (0, v._)('facetsHorizontal', g);
						if (!oe) return Z;
						const ee = (Q) => {
								d && d(Q);
							},
							ne = {
								components: {
									facetGridOptions: { onClick: ee },
									facetHierarchyOptions: { onClick: ee },
									facetListOptions: { onClick: ee },
									facetPaletteOptions: { onClick: ee },
								},
							},
							le = T()(ne, g?.theme || {});
						g = { ...g, theme: le };
						let q = U,
							se = !1;
						typeof a < 'u' && Number.isInteger(a) && U && ((se = U.length > +a), a > 0 ? (q = U.slice(0, +a)) : a == 0 && (q = []));
						const [ae, te] = (0, M.J0)(!1),
							re = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, u.s)({ disableStyles: H }),
									theme: g?.theme,
									treePath: z,
								},
								button: { ...(0, u.s)({ disableStyles: H }), theme: g?.theme, treePath: z },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, u.s)({ disableStyles: H }),
									theme: g?.theme,
									treePath: `${z} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !b && (se || P) ? !0 : void 0,
									...(0, u.s)({ disableStyles: H }),
									theme: g?.theme,
									treePath: `${z} dropdown`,
								},
								slideout: {
									internalClassName: 'ss__facets-horizontal__slideout',
									onChange: (Q) => te(Q),
									...(0, u.s)({ disableStyles: H }),
									theme: g?.theme,
									treePath: z,
								},
								sidebar: { internalClassName: 'ss__facets-horizontal__sidebar', ...(0, u.s)({ disableStyles: H }), theme: g?.theme, treePath: z },
								toggleSidebarButton: { ...(0, u.s)({ disableStyles: H }), theme: g?.theme, treePath: z },
							},
							me = (0, K.Z)(g, o),
							[ie, ue] = (0, M.J0)(void 0),
							he = (0, S.L)(() => {
								ie && ue(void 0);
							}),
							pe = { toggleSidebarButtonText: { value: w } },
							ve = T()(pe, g.lang || {}),
							Oe = (0, f.u)(ve, { facets: U, sidebarOpenState: ae }, { activeBreakpoint: W?.activeBreakpoint }),
							Me = ({ sidebarOpenState: Q, setSidebarOpenState: _e, subProps: Ee }) =>
								(0, t.Y)(E.$, {
									...Ee.toggleSidebarButton,
									internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
									onClick: () => _e(!Q),
									children: (0, t.Y)('span', { ...Oe.toggleSidebarButtonText.all }),
								}),
							Pe = !!(!b && (se || P));
						return (q && q?.length > 0) || se
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										className: s()('ss__facets-horizontal', J, X),
										ref: he,
										...me,
										children: [
											(0, t.FD)('div', {
												className: 'ss__facets-horizontal__header',
												children: [
													q?.map((Q) => {
														const _e =
																Q?.values?.filter((de) => de?.filtered).length ||
																Q?.active?.high !== Q?.range?.high ||
																Q?.active?.low !== Q?.range?.low,
															Ee = {
																dropdownButton: {
																	attributes: {
																		'aria-label': `currently ${ie?.field === Q.field ? 'open' : 'collapsed'} ${Q.label} facet dropdown ${
																			Q.values?.length ? Q.values?.length + ' options' : ''
																		}`,
																	},
																},
																clearAllText: { value: N },
															},
															De = T()(Ee, g.lang || {}),
															ce = (0, f.u)(De, { selectedFacet: ie, facet: Q }, { activeBreakpoint: W?.activeBreakpoint });
														return (0, t.Y)(n.m, {
															...re.dropdown,
															internalClassName: s()(
																re.dropdown.internalClassName,
																`ss__facets-horizontal__header__dropdown--${Q.display}`,
																`ss__facets-horizontal__header__dropdown--${Q.field}`
															),
															open: ie?.field === Q.field,
															onClick: (de) => {
																ie !== Q && de.code !== 'Escape' ? ue(Q) : ue(void 0);
															},
															button: (0, t.FD)('div', {
																className: 'ss__dropdown__button__heading',
																...ce.dropdownButton.attributes,
																children: [
																	(0, t.FD)('div', {
																		className: 'ss__facet__header__inner',
																		children: [
																			(0, t.Y)('span', { ...ce.dropdownButton.value, children: Q?.label }),
																			F && _e && Q.type !== 'range'
																				? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: $ ? _e : `(${_e})` })
																				: null,
																			(ce.clearAllText.value || j) && _e
																				? (0, t.Y)(E.$, {
																						...re.button,
																						internalClassName: 'ss__facet__header__clear-all',
																						name: 'reset-facet',
																						onClick: (de) => {
																							de.stopPropagation(), Q?.clear.url.link.onClick();
																						},
																						icon: j || void 0,
																						children: ce.clearAllText.value && V ? (0, t.Y)('label', { ...ce.clearAllText.all }) : null,
																				  })
																				: (0, t.Y)(t.FK, {}),
																		],
																	}),
																	(0, t.Y)(r.I, {
																		...re.icon,
																		...(ie?.field === Q.field
																			? { ...(typeof O == 'string' ? { icon: O } : O) }
																			: { ...(typeof B == 'string' ? { icon: B } : B) }),
																	}),
																],
															}),
															disableOverlay: !1,
															children: (0, t.Y)(D.s, { ...re.facet, facet: Q }),
														});
													}),
													Pe && (0, t.Y)(Me, { sidebarOpenState: ae, setSidebarOpenState: te, subProps: re }),
												],
											}),
											Pe && (0, t.Y)(l.S, { ...re.slideout, active: ae, children: (0, t.Y)(_.B, { ...re.sidebar, controller: G }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(k, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(K);
				const f = (n) => {
						const r = n.theme?.variables;
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
													fill: r?.colors?.primary,
													stroke: r?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					v = (0, s.PA)((n) => {
						const r = (0, y.u)(),
							E = (0, C.LU)(),
							l = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: n.controller?.store?.filters,
								separator: ':',
								treePath: E,
							},
							_ = (0, T.v6)('filterSummary', r, l, n),
							{
								filters: o,
								title: h,
								type: A,
								filterIcon: W,
								clearAllIcon: c,
								separator: Y,
								hideFacetLabel: g,
								hideTitle: U,
								clearAllLabel: a,
								hideClearAll: P,
								onClick: b,
								onClearAllClick: d,
								disableStyles: F,
								className: $,
								internalClassName: j,
								treePath: V,
							} = _,
							{ overrideElement: O, shouldRenderDefault: N } = (0, I._)('filterSummary', _);
						if (!N) return O;
						const B = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, x.s)({ disableStyles: F, separator: Y, hideFacetLabel: g, icon: W }),
									theme: _.theme,
									treePath: V,
								},
							},
							w = (0, D.Z)(_, f),
							H = { title: { value: h }, clearAllLabel: { value: a } },
							J = S()(H, _.lang || {}),
							X = (0, u.u)(J, { filters: o }, { activeBreakpoint: r?.activeBreakpoint });
						return o?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...w,
										className: p()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': A === 'list' },
											{ 'ss__filter-summary--inline': A === 'inline' },
											$,
											j
										),
										children: [
											!U && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...X.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													o.map((G) => (0, t.Y)(L.d, { ...B.filter, filter: G, onClick: (z) => b && b(z, G) })),
													!P &&
														(0, t.Y)(L.d, {
															...B.filter,
															name: 'clear-all',
															icon: c,
															internalClassName: `${B?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: a,
															onClick: (G) => {
																d && d(G), n.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': a } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(R, ['r', 0, v]);
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(k, R, e) {
				e.d(R, { P: () => W });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					I = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					K = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					S = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					f = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					v = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					n = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					r = e('./components/src/components/Atoms/Button/Button.tsx'),
					E = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					_ = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					o = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					h = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
				const A = ({}) =>
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
					W = (0, s.PA)((c) => {
						const Y = (0, x.u)(),
							U = { treePath: (0, T.LU)() },
							a = (0, y.v6)('layout', Y, U, c),
							{ controller: P, toggleSideBarButton: b, disableStyles: d, className: F, internalClassName: $, layout: j } = a;
						delete a.treePath;
						const V = (0, C.Z)(a, A),
							O = {
								Banner: {
									controller: P,
									content: P.store.merchandising.content,
									...(0, i.s)({ disableStyles: d }),
									theme: a?.theme,
									treePath: c.treePath,
								},
								SearchHeader: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								FilterSummary: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								LayoutSelector: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Breadcrumbs: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Facets: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								FacetsHorizontal: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Pagination: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								PaginationInfo: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								LoadMore: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								SortBy: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								PerPage: { controller: P, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								ToggleSideBarButton: {
									...b,
									controller: P,
									name: 'sidebar-toggle',
									...(0, i.s)({ disableStyles: d }),
									theme: a?.theme,
									treePath: c.treePath,
								},
							},
							N = b,
							B = P.store.pagination.totalResults > 0;
						function w(G) {
							switch (G) {
								case 'searchHeader':
									return (0, t.Y)(n.w, { ...O.SearchHeader });
								case 'filterSummary':
									if (B) return (0, t.Y)(D.r, { ...O.FilterSummary });
									break;
								case 'layoutSelector':
									if (B) return (0, t.Y)(f.s, { ...O.LayoutSelector });
									break;
								case 'paginationInfo':
									if (B) return (0, t.Y)(v.R, { ...O.PaginationInfo });
									break;
								case 'sortBy':
									if (B) return (0, t.Y)(K.g, { ...O.SortBy });
									break;
								case 'perPage':
									if (B) return (0, t.Y)(S.F, { ...O.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (B)
										return (
											N &&
											(0, t.Y)('div', {
												className: 'ss__layout__sidebar-toggle-button-wrapper',
												children: (0, t.Y)(r.$, { ...O.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (B) return P.store.config.settings?.infinite?.enabled ? (0, t.Y)(I.e, { ...O.LoadMore }) : (0, t.Y)(u.d, { ...O.Pagination });
									break;
								case 'breadcrumbs':
									if (B) return (0, t.Y)(h.B, { ...O.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${J++}` });
								case 'banner.banner':
									return (0, t.Y)(E.l, { ...O.Banner, type: l.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(E.l, { ...O.Banner, type: l.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(E.l, { ...O.Banner, type: l.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(E.l, { ...O.Banner, type: l.c.LEFT, name: 'left' });
								case 'facets':
									if (B) return (0, t.Y)(_.J, { ...O.Facets });
									break;
								case 'facetsHorizontal':
									if (B) return (0, t.Y)(o.b, { ...O.Facets });
									break;
								default:
									return null;
							}
						}
						let H = 0,
							J = 0;
						const X = j?.map((G) => {
							if (Array.isArray(G)) {
								const z = G.map((oe) => w(oe));
								return G.some((oe, ee) => oe !== '_' && z[ee])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${H++}`, children: z })
									: null;
							} else return w(G);
						});
						return X?.some(Boolean) ? (0, t.Y)(L._, { children: (0, t.Y)('div', { ...V, className: p()('ss__layout', F, $), children: X }) }) : null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(k, R, e) {
				e.d(R, { B: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u),
					K = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/components/Atoms/Button/Button.tsx');
				const v = ({ stickyOffset: r }) =>
						(0, M.AH)({
							'&.ss__sidebar--sticky': { position: 'sticky', top: r || 0 },
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
					n = (0, s.PA)((r) => {
						const E = (0, x.u)(),
							_ = {
								titleText: 'Filters',
								clearButtonText: 'Clear All',
								applyButtonText: 'Apply',
								closeButtonIcon: 'close-thin',
								hideApplyButton: !0,
								hideClearButton: !0,
								hideCloseButton: !0,
								treePath: (0, T.LU)(),
								layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']],
							},
							o = (0, i.v6)('sidebar', E, _, r),
							{
								controller: h,
								layout: A,
								hideTitleText: W,
								titleText: c,
								sticky: Y,
								hideApplyButton: g,
								hideFooter: U,
								onToggleSidebar: a,
								hideHeader: P,
								hideClearButton: b,
								hideCloseButton: d,
								hideClearButtonText: F,
								hideApplyButtonText: $,
								hideCloseButtonText: j,
								clearButtonText: V,
								applyButtonText: O,
								closeButtonText: N,
								applyButtonIcon: B,
								clearButtonIcon: w,
								closeButtonIcon: H,
								disableStyles: J,
								className: X,
								internalClassName: G,
								treePath: z,
							} = o,
							{ overrideElement: Z, shouldRenderDefault: oe } = (0, S._)('sidebar', o);
						if (!oe) return Z;
						const ee = (0, y.Z)(o, v),
							ne = { titleText: { value: c }, closeButtonText: { value: N }, applyButtonText: { value: O }, clearButtonText: { value: V } },
							le = I()(ne, o.lang || {}),
							q = (0, K.u)(le, { controller: h }, { activeBreakpoint: E?.activeBreakpoint }),
							se = {
								Layout: { ...(0, D.s)({ disableStyles: J }), theme: o.theme, treePath: z },
								button: { ...(0, D.s)({ disableStyles: J }), theme: o?.theme, treePath: z },
							},
							ae = A?.length;
						return h?.store?.loaded && h?.store?.pagination?.totalResults > 0 && ae
							? (0, t.Y)(L._, {
									children: (0, t.FD)('div', {
										...ee,
										className: p()('ss__sidebar', X, G, { 'ss__sidebar--sticky': Y }),
										children: [
											!P &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__header',
													children: [
														W
															? (0, t.Y)('div', {})
															: (0, t.Y)('h4', {
																	className: p()('ss__sidebar__title'),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...q.titleText.all,
																	children: c,
															  }),
														!d &&
															(0, t.Y)(f.$, {
																internalClassName: 'ss__sidebar__header__close-button',
																disableStyles: !0,
																onClick: () => a && a(),
																icon: H,
																...se.button,
																name: 'close',
																children: !j && N ? (0, t.Y)('span', { ...q.closeButtonText?.all }) : void 0,
															}),
													],
												}),
											(0, t.Y)('div', { className: p()('ss__sidebar__inner'), children: (0, t.Y)(C.P, { controller: h, layout: A, ...se.Layout }) }),
											!U &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__footer',
													children: [
														!g &&
															(0, t.Y)(f.$, {
																internalClassName: 'ss__sidebar__footer__apply-button',
																icon: B,
																onClick: a ? () => a() : void 0,
																...se.button,
																name: 'apply',
																children: !$ && O ? (0, t.Y)('span', { ...q.applyButtonText?.all }) : void 0,
															}),
														!b &&
															(0, t.Y)(f.$, {
																internalClassName: 'ss__sidebar__footer__clear-button',
																icon: w,
																onClick: () => {
																	h?.urlManager.remove('filter').remove('page').go(), a && a();
																},
																...se.button,
																name: 'clear',
																children: !F && V ? (0, t.Y)('span', { ...q.clearButtonText?.all }) : void 0,
															}),
													],
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(k, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = (m, p) => {
					const s = (0, t.li)(m);
					(s.current = m),
						(0, t.vJ)(() => {
							const L = setTimeout(() => {
								s.current();
							}, p);
							return () => {
								clearTimeout(L);
							};
						}, [m, p]);
				};
				e.d(R, ['d', 0, M]);
			},
			'./components/src/hooks/useIntersection.tsx'(k, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = (m, p = '0px', s = !1) => {
					const [L, x] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const T = new IntersectionObserver(
								([D]) => {
									x(D.isIntersecting), s && D.isIntersecting && T.unobserve(m.current);
								},
								{ rootMargin: p }
							);
							return (
								m.current && T.observe(m.current),
								() => {
									T.unobserve(m.current);
								}
							);
						}, []),
						L
					);
				};
				e.d(R, ['v', 0, M]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(k, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = 250,
					m = (s, L = {}) => {
						const { rootMargin: x = '0px', fireOnce: T = !1, threshold: D = 0, minVisibleTime: i = 0 } = L,
							[y, C] = (0, t.J0)(!1),
							u = (0, t.li)(null),
							I = (0, t.li)(null),
							[K, S] = (0, t.J0)(0),
							f = (0, t.hb)((v) => {
								(s.current = v), S((n) => n + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								C(!1);
								let v = null,
									n = null;
								if (!window.IntersectionObserver || !s.current) return;
								const r = () => {
										n && (window.clearInterval(n), (n = null));
									},
									E = () => {
										i > 0
											? ((I.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													C(!0), T && s.current && v && v.unobserve(s.current);
											  }, i)))
											: (C(!0), T && s.current && v && v.unobserve(s.current));
									},
									l = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (I.current = null), C(!1);
									};
								return (
									(v = new IntersectionObserver(
										([_]) => {
											_.isIntersecting
												? s.current && p(s.current)
													? (r(), E())
													: (l(),
													  n ||
															(n = window.setInterval(() => {
																if (!s.current) {
																	r();
																	return;
																}
																p(s.current) && (r(), E());
															}, M)))
												: (r(), l());
										},
										{ rootMargin: x, threshold: D }
									)),
									s.current && v.observe(s.current),
									() => {
										C(!1), r(), u.current && window.clearTimeout(u.current), v && s.current && v.unobserve(s.current);
									}
								);
							}, [s, K]),
							{ inViewport: y, updateRef: f }
						);
					};
				function p(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(R, ['v', 0, m]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(k, R, e) {
				e.d(R, { U: () => M });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function M(m, p) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(m),
						[L, x] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							x(!!s.matches);
							const T = () => x(!!s.matches);
							return (
								s.addListener(T),
								() => {
									p instanceof Function && p(), s.removeListener(T);
								}
							);
						}, [m]),
						L
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(k, R, e) {
				e.d(R, { N: () => p, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'sstracking';
				function s(L) {
					const x = L;
					return (D) => {
						const { controller: i, result: y, banner: C, type: u, content: I, ...K } = D;
						if (D.trackingRef) return (0, t.Y)(x, { ...D });
						!i && (!u || !I) && console.warn('Warning: No controller provided to withTracking', D),
							!y && !C && (!u || !I) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: S, inViewport: f, updateRef: v } = (0, M.Q)(),
							n = (y || C || (u && I?.[u]?.[0]))?.responseId,
							r = (0, m.li)(n),
							E = (0, m.li)(!1);
						r.current !== n && (E.current = !0),
							(0, m.vJ)(() => {
								r.current !== n && ((r.current = n), v(S.current));
							}, [n, v]),
							(0, m.vJ)(() => {
								E.current && !f && (E.current = !1);
							}, [f, n]);
						const l = u && I && !y && ['search', 'autocomplete'].includes(i?.type || '');
						f && !E.current && (l ? i?.track.banner.impression(I[u][0]) : y?.bundleSeed || i?.track.product.impression(y || C));
						const _ = (0, m.hb)(
							(h) => {
								l ? i?.track.banner.click(h, I[u][0]) : i?.track.product.click(h, y || C);
							},
							[i, y, C, u, I]
						);
						(0, m.vJ)(() => {
							const h = S.current;
							if (h)
								return (
									h.setAttribute(p, 'true'),
									h.addEventListener('click', _, !0),
									() => {
										h.removeEventListener('click', _, !0);
									}
								);
						}, [_]);
						const o = {
							...K,
							controller: i,
							result: y,
							banner: C,
							type: u,
							content: I,
							trackingRef: (0, m.hb)(
								(h) => {
									v(h);
								},
								[v]
							),
						};
						return (0, t.Y)(x, { ...o });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(k, R, e) {
				e.d(R, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					p = 1e3;
				function s(L) {
					const x = (0, t.li)(null),
						{ inViewport: T, updateRef: D } = (0, M.v)(x, { ...L, fireOnce: !0, threshold: m, minVisibleTime: p });
					return { ref: x, inViewport: T, updateRef: D };
				}
			},
		},
	]);
})();

//# sourceMappingURL=1798.e1cc2b1e.iframe.bundle.js.map
