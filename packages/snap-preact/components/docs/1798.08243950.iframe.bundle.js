'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1798],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/providers/cache.tsx'),
					x = e('./components/src/providers/controller.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const j = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					g = (0, x.Bk)(
						(0, v.PA)((f) => {
							const o = (0, T.u)(),
								P = { treePath: (0, i.LU)() },
								r = (0, y.v6)('banner', o, P, f),
								{ controller: _, type: n, className: h, internalClassName: A } = r,
								U = r.content || _?.store?.merchandising.content,
								{ overrideElement: c, shouldRenderDefault: $ } = (0, u._)('banner', r);
							if (!$) return c;
							if (n === I.c.INLINE) return console.warn(`BannerType '${I.c.INLINE}' is not supported in <Banner /> component`), null;
							const M = (0, C.Z)(r, j),
								a = U?.[n]?.[0]?.value;
							if (!n || !a) return null;
							const E = (0, b.hb)(
								(0, O.W)((S) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${n}`, h, A),
										...M,
										ref: S.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof a == 'string' ? a : a.join('') },
									})
								),
								[a, n]
							);
							return (0, t.Y)(B._, { children: (0, t.Y)(E, { ...r }) });
						})
					);
				e.d(R, ['l', 0, g]);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = () =>
						(0, v.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					b = (0, s.PA)((j) => {
						const g = (0, x.u)(),
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
							l = (0, i.v6)('breadcrumbs', g, o, j),
							{ data: P, separator: r, separatorIcon: _, className: n, internalClassName: h, controller: A, disableStyles: U, treePath: c } = l,
							{ overrideElement: $, shouldRenderDefault: M } = (0, u._)('breadcrumbs', l);
						if (!M) return $;
						const K = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, O.s)({ disableStyles: U }), theme: l?.theme, treePath: c },
							},
							a = (0, y.Z)(l, I);
						let E;
						return (
							typeof P == 'function' ? (E = P(A)) : (E = P),
							E
								? (0, t.Y)(B._, {
										children: (0, t.Y)('div', {
											...a,
											className: p()('ss__breadcrumbs', n, h),
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
															r !== !1 ? r : (0, t.Y)(t.FK, {}),
															_ && (0, t.Y)(C.I, { ...K.icon, ...(typeof _ == 'string' ? { icon: _ } : _) }),
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
				e.d(R, ['B', 0, b]);
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = e('./components/src/hooks/useA11y.tsx');
				const u = ({ transitionSpeed: b, color: j }) =>
						(0, v.AH)({
							transition: `background ${b} ease 0s, left 0s ease ${b}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${b} ease, left 0s ease`, background: j, left: '0' },
						}),
					I = (0, s.PA)((b) => {
						const j = (0, x.u)(),
							f = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, T.LU)() },
							o = (0, O.v6)('overlay', j, f, b),
							{ active: l, onClick: P, disableA11y: r, className: _, internalClassName: n } = o,
							{ overrideElement: h, shouldRenderDefault: A } = (0, y._)('overlay', o);
						if (!A) return h;
						const U = (0, i.Z)(o, u);
						return (0, t.Y)(B._, {
							children: (0, t.Y)('div', {
								onClick: (c) => P && l && P(c),
								ref: (c) => (r ? null : (0, C.iy)(c, l ? 0 : -1)),
								className: p()('ss__overlay', { 'ss__overlay--active': l }, _, n),
								...U,
							}),
						});
					});
				e.d(R, ['h', 0, I]);
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(y),
					u = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = ({}) => (0, m.AH)({}),
					j = (0, v.PA)((g) => {
						const f = (0, x.u)(),
							o = (0, T.LU)(),
							l = g.controller?.store.pagination || g.pagination,
							P = {
								infoText: `${l?.multiplePages ? `${l?.begin} - ${l?.end} of` : ''} ${`${l?.totalResults} result${l?.totalResults == 1 ? '' : 's'}`}`,
								treePath: o,
							},
							r = (0, O.v6)('paginationInfo', f, P, g),
							{ controller: _, infoText: n, className: h, internalClassName: A } = r,
							{ overrideElement: U, shouldRenderDefault: c } = (0, I._)('paginationInfo', r);
						if (!c) return U;
						const $ = l || _?.store?.pagination,
							M = (0, i.Z)(r, b),
							K = {
								infoText: {
									value: n,
									attributes: {
										'aria-label': `displaying ${l?.multiplePages ? `${l?.begin} - ${l?.end} of` : ''} ${l?.totalResults} result${
											l?.totalResults == 1 ? '' : 's'
										} ${_?.store?.search.query ? `for "${_?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							a = C()(K, r.lang || {}),
							E = (0, u.u)(a, { pagination: $ });
						return $?.totalResults
							? (0, t.Y)(B._, {
									children: (0, t.Y)('div', {
										...M,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', h, A),
										...E.infoText?.all,
									}),
							  })
							: null;
					});
				e.d(R, ['R', 0, j]);
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					O = e('../../node_modules/classnames/index.js'),
					i = e.n(O),
					y = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u);
				const b = () => (0, v.AH)({}),
					j = (0, m.PA)((g) => {
						const f = (0, s.u)(),
							o = (0, B.LU)(),
							l = g.controller?.store.merchandising.landingPage || g.merchandising?.landingPage,
							P = g.controller?.store.pagination || g.pagination,
							r = g.controller?.store.search || g.query,
							_ = {
								titleText: `Search result${P?.totalResults == 1 ? '' : 's'} ${
									r?.query ? `for "<span class="ss__search-header__results-query">${r.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${r?.originalQuery?.string}</em>", showing results for "<em>${r?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${r?.didYouMean?.url.href}>${r?.didYouMean?.string}</a>?`,
								noResultsText: `${
									r?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${r.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${r?.query?.string}</span>", but here's something similar:`,
								treePath: o,
							},
							n = (0, x.v6)('searchHeader', f, _, g),
							{
								className: h,
								internalClassName: A,
								titleText: U,
								subtitleText: c,
								correctedQueryText: $,
								noResultsText: M,
								didYouMeanText: K,
								expandedSearchText: a,
								hideTitleText: E,
								hideSubtitleText: S,
								hideCorrectedQueryText: d,
								hideNoResultsText: Y,
								hideExpandedSearchText: H,
								hideDidYouMeanText: N,
							} = n,
							{ overrideElement: Z, shouldRenderDefault: D } = (0, C._)('searchHeader', n);
						if (!D) return Z;
						const F = (0, T.Z)(n, b),
							L = {
								titleText: { value: U },
								subtitleText: { value: c },
								correctedQueryText: { value: $ },
								noResultsText: { value: M },
								didYouMeanText: { value: K },
								expandedSearchText: { value: a },
							},
							q = I()(L, n.lang || {}),
							z = (0, y.u)(q, { pagination: P, search: r });
						return (0, t.Y)(p._, {
							children: (0, t.Y)('header', {
								...F,
								className: i()('ss__search-header', h, A),
								children: l
									? (0, t.Y)('h3', { className: i()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: l.title })
									: (0, t.FD)(t.FK, {
											children: [
												P?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!H && r?.matchType && r.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: i()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...z.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!E &&
																	(r?.matchType !== 'expanded' || H) &&
																	(0, t.Y)('h3', {
																		className: i()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.titleText?.all,
																	}),
																r?.originalQuery &&
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
																r?.didYouMean &&
																	!N &&
																	(0, t.Y)('h5', {
																		className: i()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...z.didYouMeanText?.all,
																	}),
															],
													  }),
												(c || q.subtitleText.value) &&
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
				e.d(R, ['w', 0, j]);
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx'),
					u = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					I = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(j);
				const f = ({}) =>
						(0, m.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					o = (0, v.PA)((l) => {
						const P = (0, i.u)(),
							_ = { treePath: (0, y.LU)() },
							n = (0, x.v6)('filter', P, _, l),
							{
								filter: h,
								facetLabel: A,
								valueLabel: U,
								url: c,
								hideFacetLabel: $,
								onClick: M,
								icon: K,
								separator: a,
								disableStyles: E,
								className: S,
								internalClassName: d,
								treePath: Y,
							} = n,
							{ overrideElement: H, shouldRenderDefault: N } = (0, b._)('filter', n);
						if (!N) return H;
						const Z = h?.url?.link || c?.link,
							D = h?.value.label || U,
							F = h?.facet.label || A,
							L = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, B.s)({ disableStyles: E }), theme: n.theme, treePath: Y },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, B.s)({ disableStyles: E, icon: K }),
									theme: n.theme,
									treePath: Y,
								},
							},
							q = (0, T.Z)(n, f),
							z = { filter: { attributes: { 'aria-label': F ? `remove selected ${F} filter ${D}` : D } } },
							J = g()(z, n.lang || {}),
							G = (0, I.u)(J, { label: F, value: D });
						return D
							? (0, t.Y)(O._, {
									children: (0, t.Y)('a', {
										...q,
										className: s()('ss__filter', S, d),
										onClick: (W) => {
											Z?.onClick && Z.onClick(W), M && M(W);
										},
										href: Z?.href,
										tabIndex: 0,
										...G.filter?.all,
										children: (0, t.FD)(C.$, {
											...L.button,
											children: [
												(0, t.Y)(u.I, { ...L.icon, ...(typeof K == 'string' ? { icon: K } : K) }),
												!$ &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [F, a && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: a })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: D }),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(R, ['d', 0, o]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(x),
					O = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useIntersection.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					l = e('./components/src/hooks/useFuncDebounce.tsx');
				const P = ({ pagination: _, progressIndicatorWidth: n, progressIndicatorSize: h, color: A, backgroundColor: U, theme: c }) =>
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
										width: n,
										background: U || c?.variables?.colors?.secondary || '#f8f8f8',
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
					r = (0, B.PA)((_) => {
						const n = (0, i.u)(),
							A = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, y.LU)(),
							},
							U = (0, u.v6)('loadMore', n, A, _),
							{
								pagination: c,
								controller: $,
								onClick: M,
								autoFetch: K,
								intersectionOffset: a,
								loading: E,
								loadMoreText: S,
								hideProgressIndicator: d,
								hideProgressText: Y,
								loadingLocation: H,
								loadingIcon: N,
								disableStyles: Z,
								className: D,
								internalClassName: F,
								treePath: L,
							} = U,
							{ overrideElement: q, shouldRenderDefault: z } = (0, g._)('loadMore', U);
						if (!z) return q;
						const J = c || $?.store?.pagination,
							G = typeof E == 'boolean' ? E : $?.store?.loading,
							W = (G && H === 'button') || !J?.next,
							V = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': G && H === 'outside' },
										{ 'ss__load-more__button--disabled': W }
									),
									...(0, C.s)({ disableStyles: Z }),
									theme: U?.theme,
									treePath: L,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, C.s)({ disableStyles: Z }), theme: U?.theme, treePath: L },
							};
						if (!J) return null;
						const oe = (0, I.Z)({ ...U, pagination: J }, P),
							ee = {};
						if (K) {
							const k = (0, v.li)(null);
							ee.ref = k;
							const w = (0, b.v)(k, a || '0px'),
								[ae, le] = (0, v.J0)(!0);
							G
								? le(!0)
								: (0, l.d)(() => {
										le(!1);
								  }, 500),
								w && J.next && !ae && J.next.url.go({ history: 'replace' });
						}
						const te = {
								loadMoreButton: { value: S, attributes: { 'aria-label': S } },
								progressText: { value: `You've viewed ${J?.end} of ${J?.totalResults} products` },
							},
							re = T()(te, U.lang || {}),
							ne = (0, j.u)(re, { pagination: J });
						return J.totalResults
							? (0, t.Y)(O._, {
									children: (0, t.FD)('div', {
										...oe,
										...ee,
										className: s()('ss__load-more', { 'ss__load-more--loading': G }, { 'ss__load-more--autoFetch': K }, D, F),
										children: [
											!K &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(f.$, {
															onClick: (k) => {
																J.next?.url.go({ history: 'replace' }), M && M(k);
															},
															...V.button,
															...ne.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...ne.loadMoreButton.value, children: S }),
																N && G && H === 'button' ? (0, t.Y)(o.I, { ...V.icon, ...(typeof N == 'string' ? { icon: N } : N) }) : null,
															],
														}),
														N && G && H === 'outside' && (0, t.Y)(o.I, { ...V.icon, ...(typeof N == 'string' ? { icon: N } : N) }),
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
				e.d(R, ['e', 0, r]);
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u),
					b = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = () =>
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
					f = (0, v.PA)((o) => {
						const l = (0, x.u)(),
							r = { pages: 5, treePath: (0, T.LU)() },
							_ = (0, i.v6)('pagination', l, r, o),
							{
								pagination: n,
								controller: h,
								pages: A,
								pagesLeft: U,
								pagesRight: c,
								hideFirst: $,
								hideLast: M,
								persistFirst: K,
								persistLast: a,
								hideEllipsis: E,
								hideNext: S,
								hidePrev: d,
								nextButton: Y,
								prevButton: H,
								firstButton: N,
								lastButton: Z,
								disableStyles: D,
								className: F,
								internalClassName: L,
								treePath: q,
							} = _,
							{ overrideElement: z, shouldRenderDefault: J } = (0, j._)('pagination', _);
						if (!J) return z;
						const G = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, O.s)({ disableStyles: D }), theme: _?.theme, treePath: q },
							},
							W = n || h?.store?.pagination,
							V = Number.isInteger(U) && Number.isInteger(c) ? [U, c] : [A],
							oe = W?.getPages(...V),
							ee = oe?.map((w) => w.number),
							te = (0, y.Z)(_, g),
							re = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${W?.last.number}` } },
							},
							ne = I()(re, _.lang || {}),
							k = (0, b.u)(ne, { pagination: W });
						return ee && ee.length > 1 && W?.totalResults
							? (0, t.Y)(B._, {
									children: (0, t.Y)('div', {
										...te,
										className: s()('ss__pagination', F, L),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												W.previous &&
													!d &&
													(0, t.Y)('a', {
														...W.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...k.previous?.all,
														children: H || (0, t.Y)(C.I, { ...G.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!ee.includes(W.first.number) || (K && W.page !== W.first.number)) &&
													!$ &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...W.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...k.first?.all,
																children: N || W.first.number,
															}),
															!ee.includes(2) && !E && (0, t.Y)('span', { children: '\u2026' }),
														],
													}),
												oe &&
													oe.map((w) => {
														const ae = { page: { attributes: { 'aria-label': `go to page ${w.number}` } } },
															le = I()(ae, _.lang || {}),
															se = (0, b.u)(le, { pagination: W, page: w });
														return w.active
															? (0, t.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...se.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: w.number,
															  })
															: (0, t.Y)('a', { ...w.url.link, className: 'ss__pagination__page', ...se.page?.all, children: w.number });
													}),
												(!ee.includes(W.last.number) || (a && W.page !== W.last.number)) &&
													!M &&
													(0, t.FD)(t.FK, {
														children: [
															!ee.includes(W.totalPages - 1) && !E && (0, t.Y)('span', { children: '\u2026' }),
															(0, t.Y)('a', {
																...W.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...k.last?.all,
																children: Z || W.last.number,
															}),
														],
													}),
												W.next &&
													!S &&
													(0, t.Y)('a', {
														...W.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...k.next?.all,
														children: Y || (0, t.Y)(C.I, { ...G.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(R, ['d', 0, f]);
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					I = e('./components/src/components/Molecules/List/List.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(b),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const f = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, v.PA)((l) => {
						const P = (0, x.u)(),
							_ = { label: 'Per Page', type: 'dropdown', treePath: (0, T.LU)() },
							n = (0, i.v6)('perPage', P, _, l),
							{ pagination: h, type: A, controller: U, label: c, disableStyles: $, className: M, internalClassName: K, treePath: a } = n,
							{ overrideElement: E, shouldRenderDefault: S } = (0, g._)('perPage', n);
						if (!S) return E;
						const d = h || U?.store?.pagination,
							Y = {
								select: { ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
								RadioList: { ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
							},
							H = (0, y.Z)(n, f),
							N = d && d?.pageSizeOptions?.find((F) => F.value == d?.pageSize),
							Z = { label: { value: c } },
							D = j()(Z, n.lang || {});
						return d?.pageSize && typeof d?.pageSizeOptions == 'object' && d.pageSizeOptions?.length
							? (0, t.FD)(B._, {
									children: [
										A?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(C.l, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__select', M, K),
												...Y.select,
												label: c,
												options: d.pageSizeOptions,
												selected: N,
												onSelect: (F, L) => {
													d.setPageSize(+L.value);
												},
												lang: { buttonLabel: D.label },
											}),
										A?.toLowerCase() == 'list' &&
											(0, t.Y)(I.B, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__list', M, K),
												...Y.List,
												onSelect: (F, L) => {
													d.setPageSize(+L.value);
												},
												requireSelection: !0,
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: D.label },
											}),
										A?.toLowerCase() == 'radio' &&
											(0, t.Y)(u.q, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__radioList', M, K),
												...Y.RadioList,
												onSelect: (F, L) => {
													d.setPageSize(+L.value);
												},
												options: d.pageSizeOptions,
												selected: d.pageSizeOption,
												titleText: c,
												lang: { title: D.label },
											}),
									],
							  })
							: null;
					});
				e.d(R, ['F', 0, o]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					B = e.n(s),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useMediaQuery.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const g = ({ slideDirection: o, transitionSpeed: l, width: P }) =>
						(0, p.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${o || 'left'} ${l}`,
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
					f = (0, m.PA)((o) => {
						const l = (0, C.u)(),
							r = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, u.LU)(),
								rerender: !0,
							},
							_ = (0, O.v6)('slideout', l, r, o),
							{
								children: n,
								active: h,
								rerender: A,
								buttonContent: U,
								buttonSelector: c,
								noButtonWrapper: $,
								displayAt: M,
								transitionSpeed: K,
								overlayColor: a,
								onChange: E,
								disableStyles: S,
								className: d,
								internalClassName: Y,
								treePath: H,
							} = _,
							{ overrideElement: N, shouldRenderDefault: Z } = (0, b._)('slideout', _);
						if (!Z) return N;
						const D = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, T.s)({ disableStyles: S, color: a, transitionSpeed: K }),
									theme: _?.theme,
									treePath: H,
								},
							},
							[F, L] = (0, v.J0)(!!h),
							[q, z] = (0, v.J0)(!!h),
							J = () => {
								const V = !F;
								F
									? (L(!1),
									  A &&
											setTimeout(() => {
												z(!1);
											}, 250))
									: (L(!0), z(!0)),
									(document.body.style.overflow = V ? 'hidden' : ''),
									E && E(V);
							};
						(0, v.vJ)(() => {
							z(!!h), L(!!h);
						}, [h]);
						const G = (0, I.U)(M, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = G && F ? 'hidden' : '';
						const W = (0, i.Z)(_, g);
						return (
							(0, v.vJ)(() => {
								if (c) {
									let V;
									typeof c == 'string' ? (V = document.querySelector(c)) : (V = c), V && V.addEventListener('click', () => J());
								}
							}, []),
							G || !A
								? (0, t.FD)(y._, {
										children: [
											U &&
												($
													? (0, x.Y)(U, { toggleActive: J, active: F, treePath: H })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => J(),
															children: (0, x.Y)(U, { active: F, treePath: H }),
													  })),
											(0, t.Y)('div', {
												className: B()('ss__slideout', d, Y, { 'ss__slideout--active': F }),
												style: { visibility: A || G ? 'visible' : 'hidden' },
												...W,
												children: q && (0, x.Y)(n, { toggleActive: J, active: F, treePath: H }),
											}),
											(0, t.Y)(j.h, { ...D.overlay, active: F, onClick: J }),
										],
								  })
								: null
						);
					});
				e.d(R, ['S', 0, f]);
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Molecules/Select/Select.tsx'),
					u = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					I = e('./components/src/components/Molecules/List/List.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(j);
				const f = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, v.PA)((l) => {
						const P = (0, x.u)(),
							_ = { label: 'Sort By', type: 'dropdown', treePath: (0, T.LU)() },
							n = (0, i.v6)('sortBy', P, _, l),
							{ sorting: h, type: A, controller: U, hideLabel: c, disableStyles: $, className: M, internalClassName: K, treePath: a } = n;
						let E = n.label;
						const { overrideElement: S, shouldRenderDefault: d } = (0, b._)('sortBy', n);
						if (!d) return S;
						const Y = h || U?.store?.sorting,
							H = {
								Select: { ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
								RadioList: { ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, O.s)({ disableStyles: $ }), theme: n?.theme, treePath: a },
							},
							N = (0, y.Z)(n, f),
							Z = { label: { value: E } },
							D = g()(Z, n.lang || {});
						return (
							c && (delete D.label.value, (E = void 0)),
							Y?.current && typeof Y?.options == 'object' && Y.options?.length
								? (0, t.FD)(B._, {
										children: [
											A?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(C.l, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__select', M, K),
													...H.Select,
													label: E,
													options: Y.options,
													selected: Y.current,
													onSelect: (F, L) => {
														L?.url?.go();
													},
													lang: { buttonLabel: D.label },
												}),
											A?.toLowerCase() == 'list' &&
												(0, t.Y)(I.B, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__list', M, K),
													...H.List,
													options: Y.options,
													selected: Y.current,
													titleText: E,
													onSelect: (F, L) => {
														L?.url?.go();
													},
													lang: { title: D.label },
												}),
											A?.toLowerCase() == 'radio' &&
												(0, t.Y)(u.q, {
													...N,
													className: s()('ss__sortby', 'ss__sortby__radioList', M, K),
													...H.RadioList,
													options: Y.options,
													selected: Y.current,
													titleText: E,
													onSelect: (F, L) => {
														L?.url?.go();
													},
													lang: { title: D.label },
												}),
										],
								  })
								: null
						);
					});
				e.d(R, ['g', 0, o]);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					B = e.n(s),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					O = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts');
				const j = () => (0, v.AH)({}),
					g = (0, x.PA)((f) => {
						const o = (0, i.u)(),
							l = (0, y.LU)(),
							P = { facets: f.controller?.store?.facets, treePath: l };
						let r = (0, I.v6)('facets', o, P, f);
						const { limit: _, onFacetOptionClick: n, disableStyles: h, className: A, internalClassName: U, controller: c, treePath: $ } = r,
							{ overrideElement: M, shouldRenderDefault: K } = (0, C._)('facets', r);
						if (!K) return M;
						const a = (N) => {
								n && n(N), c?.setFocused && c?.setFocused();
							},
							E = {
								components: {
									facetGridOptions: { onClick: a },
									facetHierarchyOptions: { onClick: a },
									facetListOptions: { onClick: a },
									facetPaletteOptions: { onClick: a },
								},
							},
							S = B()(E, r?.theme || {}, { arrayMerge: (N, Z) => Z });
						r = { ...r, theme: S };
						let { facets: d } = r;
						_ && d && _ > 0 && (d = d.slice(0, +_));
						const Y = { facet: { internalClassName: 'ss__facets__facet', ...(0, u.s)({ disableStyles: h }), theme: r.theme, treePath: $ } },
							H = (0, b.Z)(r, j);
						return d && d?.length > 0
							? (0, t.Y)(O._, {
									children: (0, t.Y)('div', {
										className: p()('ss__facets', A, U),
										...H,
										children: d.map((N) => (0, t.Y)(T.s, { ...Y.facet, facet: N }, N.field)),
									}),
							  })
							: null;
					});
				e.d(R, ['J', 0, g]);
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(X, R, e) {
				e.d(R, { b: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					s = e.n(p),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(x),
					O = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/hooks/useClickOutside.tsx'),
					g = e('./components/src/hooks/useLang.tsx'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					o = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					l = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					r = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					_ = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx');
				const n = ({ theme: A }) =>
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
					h = (0, B.PA)((A) => {
						const U = (0, y.u)(),
							c = (0, C.LU)(),
							$ = {
								limit: 6,
								iconCollapse: 'angle-down',
								iconExpand: 'angle-up',
								clearAllText: 'Clear All',
								toggleSidebarButtonText: 'Filters',
								facets: A.controller?.store?.facets,
								treePath: c,
							};
						let M = (0, I.v6)('facetsHorizontal', U, $, A);
						const {
								facets: K,
								limit: a,
								alwaysShowToggleSidebarButton: E,
								hideToggleSidebarButton: S,
								onFacetOptionClick: d,
								showSelectedCount: Y,
								hideSelectedCountParenthesis: H,
								clearAllIcon: N,
								showClearAllText: Z,
								iconExpand: D,
								clearAllText: F,
								iconCollapse: L,
								toggleSidebarButtonText: q,
								disableStyles: z,
								className: J,
								internalClassName: G,
								controller: W,
								treePath: V,
							} = M,
							{ overrideElement: oe, shouldRenderDefault: ee } = (0, f._)('facetsHorizontal', M);
						if (!ee) return oe;
						const te = (Q) => {
								d && d(Q);
							},
							re = {
								components: {
									facetGridOptions: { onClick: te },
									facetHierarchyOptions: { onClick: te },
									facetListOptions: { onClick: te },
									facetPaletteOptions: { onClick: te },
								},
							},
							ne = T()(re, M?.theme || {});
						M = { ...M, theme: ne };
						let k = K,
							w = !1;
						typeof a < 'u' && Number.isInteger(a) && K && ((w = K.length > +a), a > 0 ? (k = K.slice(0, +a)) : a == 0 && (k = []));
						const [ae, le] = (0, v.J0)(!1),
							se = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, u.s)({ disableStyles: z }),
									theme: M?.theme,
									treePath: V,
								},
								button: { ...(0, u.s)({ disableStyles: z }), theme: M?.theme, treePath: V },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, u.s)({ disableStyles: z }),
									theme: M?.theme,
									treePath: `${V} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !S && (w || E) ? !0 : void 0,
									...(0, u.s)({ disableStyles: z }),
									theme: M?.theme,
									treePath: `${V} dropdown`,
								},
								slideout: {
									internalClassName: 'ss__facets-horizontal__slideout',
									onChange: (Q) => le(Q),
									...(0, u.s)({ disableStyles: z }),
									theme: M?.theme,
									treePath: V,
								},
								sidebar: { internalClassName: 'ss__facets-horizontal__sidebar', ...(0, u.s)({ disableStyles: z }), theme: M?.theme, treePath: V },
								toggleSidebarButton: { ...(0, u.s)({ disableStyles: z }), theme: M?.theme, treePath: V },
							},
							Pe = (0, b.Z)(M, n),
							[ie, me] = (0, v.J0)(void 0),
							he = (0, j.L)(() => {
								ie && me(void 0);
							}),
							pe = { toggleSidebarButtonText: { value: q } },
							ve = T()(pe, M.lang || {}),
							Oe = (0, g.u)(ve, { facets: K, sidebarOpenState: ae }),
							Me = ({ sidebarOpenState: Q, setSidebarOpenState: _e, subProps: ue }) =>
								(0, t.Y)(P.$, {
									...ue.toggleSidebarButton,
									internalClassName: 'ss__facets-horizontal__header__toggle-sidebar',
									onClick: () => _e(!Q),
									children: (0, t.Y)('span', { ...Oe.toggleSidebarButtonText.all }),
								}),
							Ee = !!(!S && (w || E));
						return (k && k?.length > 0) || w
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										className: s()('ss__facets-horizontal', J, G),
										ref: he,
										...Pe,
										children: [
											(0, t.FD)('div', {
												className: 'ss__facets-horizontal__header',
												children: [
													k?.map((Q) => {
														const _e =
																Q?.values?.filter((de) => de?.filtered).length ||
																Q?.active?.high !== Q?.range?.high ||
																Q?.active?.low !== Q?.range?.low,
															ue = {
																dropdownButton: {
																	attributes: {
																		'aria-label': `currently ${ie?.field === Q.field ? 'open' : 'collapsed'} ${Q.label} facet dropdown ${
																			Q.values?.length ? Q.values?.length + ' options' : ''
																		}`,
																	},
																},
																clearAllText: { value: F },
															},
															De = T()(ue, M.lang || {}),
															ce = (0, g.u)(De, { selectedFacet: ie, facet: Q });
														return (0, t.Y)(o.m, {
															...se.dropdown,
															internalClassName: s()(
																se.dropdown.internalClassName,
																`ss__facets-horizontal__header__dropdown--${Q.display}`,
																`ss__facets-horizontal__header__dropdown--${Q.field}`
															),
															open: ie?.field === Q.field,
															onClick: (de) => {
																ie !== Q && de.code !== 'Escape' ? me(Q) : me(void 0);
															},
															button: (0, t.FD)('div', {
																className: 'ss__dropdown__button__heading',
																...ce.dropdownButton.attributes,
																children: [
																	(0, t.FD)('div', {
																		className: 'ss__facet__header__inner',
																		children: [
																			(0, t.Y)('span', { ...ce.dropdownButton.value, children: Q?.label }),
																			Y && _e && Q.type !== 'range'
																				? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: H ? _e : `(${_e})` })
																				: null,
																			(ce.clearAllText.value || N) && _e
																				? (0, t.Y)(P.$, {
																						...se.button,
																						internalClassName: 'ss__facet__header__clear-all',
																						name: 'reset-facet',
																						onClick: (de) => {
																							de.stopPropagation(), Q?.clear.url.link.onClick();
																						},
																						icon: N || void 0,
																						children: ce.clearAllText.value && Z ? (0, t.Y)('label', { ...ce.clearAllText.all }) : null,
																				  })
																				: (0, t.Y)(t.FK, {}),
																		],
																	}),
																	(0, t.Y)(l.I, {
																		...se.icon,
																		...(ie?.field === Q.field
																			? { ...(typeof D == 'string' ? { icon: D } : D) }
																			: { ...(typeof L == 'string' ? { icon: L } : L) }),
																	}),
																],
															}),
															disableOverlay: !1,
															children: (0, t.Y)(O.s, { ...se.facet, facet: Q }),
														});
													}),
													Ee && (0, t.Y)(Me, { sidebarOpenState: ae, setSidebarOpenState: le, subProps: se }),
												],
											}),
											Ee && (0, t.Y)(r.S, { ...se.slideout, active: ae, children: (0, t.Y)(_.B, { ...se.sidebar, controller: W }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(X, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					j = e.n(b);
				const g = (o) => {
						const l = o.theme?.variables;
						return (0, v.AH)({
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
													fill: l?.colors?.primary,
													stroke: l?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					f = (0, s.PA)((o) => {
						const l = (0, y.u)(),
							P = (0, C.LU)(),
							r = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: o.controller?.store?.filters,
								separator: ':',
								treePath: P,
							},
							_ = (0, T.v6)('filterSummary', l, r, o),
							{
								filters: n,
								title: h,
								type: A,
								filterIcon: U,
								clearAllIcon: c,
								separator: $,
								hideFacetLabel: M,
								hideTitle: K,
								clearAllLabel: a,
								hideClearAll: E,
								onClick: S,
								onClearAllClick: d,
								disableStyles: Y,
								className: H,
								internalClassName: N,
								treePath: Z,
							} = _,
							{ overrideElement: D, shouldRenderDefault: F } = (0, I._)('filterSummary', _);
						if (!F) return D;
						const L = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, x.s)({ disableStyles: Y, separator: $, hideFacetLabel: M, icon: U }),
									theme: _.theme,
									treePath: Z,
								},
							},
							q = (0, O.Z)(_, g),
							z = { title: { value: h }, clearAllLabel: { value: a } },
							J = j()(z, _.lang || {}),
							G = (0, u.u)(J, { filters: n });
						return n?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...q,
										className: p()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': A === 'list' },
											{ 'ss__filter-summary--inline': A === 'inline' },
											H,
											N
										),
										children: [
											!K && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...G.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													n.map((W) => (0, t.Y)(B.d, { ...L.filter, filter: W, onClick: (V) => S && S(V, W) })),
													!E &&
														(0, t.Y)(B.d, {
															...L.filter,
															name: 'clear-all',
															icon: c,
															internalClassName: `${L?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: a,
															onClick: (W) => {
																d && d(W), o.controller?.urlManager.remove('filter').remove('page').go();
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
				e.d(R, ['r', 0, f]);
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(X, R, e) {
				e.d(R, { P: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					I = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					b = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					j = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					g = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					f = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					o = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					l = e('./components/src/components/Atoms/Button/Button.tsx'),
					P = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					_ = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					n = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					h = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
				const A = ({}) =>
						(0, v.AH)({
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
						const $ = (0, x.u)(),
							K = { treePath: (0, T.LU)() },
							a = (0, y.v6)('layout', $, K, c),
							{ controller: E, toggleSideBarButton: S, disableStyles: d, className: Y, internalClassName: H, layout: N } = a;
						delete a.treePath;
						const Z = (0, C.Z)(a, A),
							D = {
								Banner: {
									controller: E,
									content: E.store.merchandising.content,
									...(0, i.s)({ disableStyles: d }),
									theme: a?.theme,
									treePath: c.treePath,
								},
								SearchHeader: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								FilterSummary: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								LayoutSelector: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Breadcrumbs: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Facets: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								FacetsHorizontal: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								Pagination: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								PaginationInfo: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								LoadMore: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								SortBy: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								PerPage: { controller: E, ...(0, i.s)({ disableStyles: d }), theme: a?.theme, treePath: c.treePath },
								ToggleSideBarButton: {
									...S,
									controller: E,
									name: 'sidebar-toggle',
									...(0, i.s)({ disableStyles: d }),
									theme: a?.theme,
									treePath: c.treePath,
								},
							},
							F = S,
							L = E.store.pagination.totalResults > 0;
						function q(W) {
							switch (W) {
								case 'searchHeader':
									return (0, t.Y)(o.w, { ...D.SearchHeader });
								case 'filterSummary':
									if (L) return (0, t.Y)(O.r, { ...D.FilterSummary });
									break;
								case 'layoutSelector':
									if (L) return (0, t.Y)(g.s, { ...D.LayoutSelector });
									break;
								case 'paginationInfo':
									if (L) return (0, t.Y)(f.R, { ...D.PaginationInfo });
									break;
								case 'sortBy':
									if (L) return (0, t.Y)(b.g, { ...D.SortBy });
									break;
								case 'perPage':
									if (L) return (0, t.Y)(j.F, { ...D.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (L)
										return (
											F &&
											(0, t.Y)('div', {
												className: 'ss__layout__sidebar-toggle-button-wrapper',
												children: (0, t.Y)(l.$, { ...D.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (L) return E.store.config.settings?.infinite?.enabled ? (0, t.Y)(I.e, { ...D.LoadMore }) : (0, t.Y)(u.d, { ...D.Pagination });
									break;
								case 'breadcrumbs':
									if (L) return (0, t.Y)(h.B, { ...D.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${J++}` });
								case 'banner.banner':
									return (0, t.Y)(P.l, { ...D.Banner, type: r.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(P.l, { ...D.Banner, type: r.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(P.l, { ...D.Banner, type: r.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(P.l, { ...D.Banner, type: r.c.LEFT, name: 'left' });
								case 'facets':
									if (L) return (0, t.Y)(_.J, { ...D.Facets });
									break;
								case 'facetsHorizontal':
									if (L) return (0, t.Y)(n.b, { ...D.Facets });
									break;
								default:
									return null;
							}
						}
						let z = 0,
							J = 0;
						const G = N?.map((W) => {
							if (Array.isArray(W)) {
								const V = W.map((ee) => q(ee));
								return W.some((ee, te) => ee !== '_' && V[te])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${z++}`, children: V })
									: null;
							} else return q(W);
						});
						return G?.some(Boolean) ? (0, t.Y)(B._, { children: (0, t.Y)('div', { ...Z, className: p()('ss__layout', Y, H), children: G }) }) : null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(X, R, e) {
				e.d(R, { B: () => o });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					p = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(u),
					b = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx');
				const f = ({ stickyOffset: l }) =>
						(0, v.AH)({
							'&.ss__sidebar--sticky': { position: 'sticky', top: l || 0 },
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
					o = (0, s.PA)((l) => {
						const P = (0, x.u)(),
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
							n = (0, i.v6)('sidebar', P, _, l),
							{
								controller: h,
								layout: A,
								hideTitleText: U,
								titleText: c,
								sticky: $,
								hideApplyButton: M,
								hideFooter: K,
								onToggleSidebar: a,
								hideHeader: E,
								hideClearButton: S,
								hideCloseButton: d,
								hideClearButtonText: Y,
								hideApplyButtonText: H,
								hideCloseButtonText: N,
								clearButtonText: Z,
								applyButtonText: D,
								closeButtonText: F,
								applyButtonIcon: L,
								clearButtonIcon: q,
								closeButtonIcon: z,
								disableStyles: J,
								className: G,
								internalClassName: W,
								treePath: V,
							} = n,
							{ overrideElement: oe, shouldRenderDefault: ee } = (0, j._)('sidebar', n);
						if (!ee) return oe;
						const te = (0, y.Z)(n, f),
							re = { titleText: { value: c }, closeButtonText: { value: F }, applyButtonText: { value: D }, clearButtonText: { value: Z } },
							ne = I()(re, n.lang || {}),
							k = (0, b.u)(ne, { controller: h }),
							w = {
								Layout: { ...(0, O.s)({ disableStyles: J }), theme: n.theme, treePath: V },
								button: { ...(0, O.s)({ disableStyles: J }), theme: n?.theme, treePath: V },
							},
							ae = A?.length;
						return h?.store?.loaded && h?.store?.pagination?.totalResults > 0 && ae
							? (0, t.Y)(B._, {
									children: (0, t.FD)('div', {
										...te,
										className: p()('ss__sidebar', G, W, { 'ss__sidebar--sticky': $ }),
										children: [
											!E &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__header',
													children: [
														U
															? (0, t.Y)('div', {})
															: (0, t.Y)('h4', {
																	className: p()('ss__sidebar__title'),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...k.titleText.all,
																	children: c,
															  }),
														!d &&
															(0, t.Y)(g.$, {
																internalClassName: 'ss__sidebar__header__close-button',
																disableStyles: !0,
																onClick: () => a && a(),
																icon: z,
																...w.button,
																name: 'close',
																children: !N && F ? (0, t.Y)('span', { ...k.closeButtonText?.all }) : void 0,
															}),
													],
												}),
											(0, t.Y)('div', { className: p()('ss__sidebar__inner'), children: (0, t.Y)(C.P, { controller: h, layout: A, ...w.Layout }) }),
											!K &&
												(0, t.FD)('div', {
													className: 'ss__sidebar__footer',
													children: [
														!M &&
															(0, t.Y)(g.$, {
																internalClassName: 'ss__sidebar__footer__apply-button',
																icon: L,
																onClick: a ? () => a() : void 0,
																...w.button,
																name: 'apply',
																children: !H && D ? (0, t.Y)('span', { ...k.applyButtonText?.all }) : void 0,
															}),
														!S &&
															(0, t.Y)(g.$, {
																internalClassName: 'ss__sidebar__footer__clear-button',
																icon: q,
																onClick: () => {
																	h?.urlManager.remove('filter').remove('page').go(), a && a();
																},
																...w.button,
																name: 'clear',
																children: !Y && Z ? (0, t.Y)('span', { ...k.clearButtonText?.all }) : void 0,
															}),
													],
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(X, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = (m, p) => {
					const s = (0, t.li)(m);
					(s.current = m),
						(0, t.vJ)(() => {
							const B = setTimeout(() => {
								s.current();
							}, p);
							return () => {
								clearTimeout(B);
							};
						}, [m, p]);
				};
				e.d(R, ['d', 0, v]);
			},
			'./components/src/hooks/useIntersection.tsx'(X, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = (m, p = '0px', s = !1) => {
					const [B, x] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const T = new IntersectionObserver(
								([O]) => {
									x(O.isIntersecting), s && O.isIntersecting && T.unobserve(m.current);
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
						B
					);
				};
				e.d(R, ['v', 0, v]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(X, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 250,
					m = (s, B = {}) => {
						const { rootMargin: x = '0px', fireOnce: T = !1, threshold: O = 0, minVisibleTime: i = 0 } = B,
							[y, C] = (0, t.J0)(!1),
							u = (0, t.li)(null),
							I = (0, t.li)(null),
							[b, j] = (0, t.J0)(0),
							g = (0, t.hb)((f) => {
								(s.current = f), j((o) => o + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								C(!1);
								let f = null,
									o = null;
								if (!window.IntersectionObserver || !s.current) return;
								const l = () => {
										o && (window.clearInterval(o), (o = null));
									},
									P = () => {
										i > 0
											? ((I.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													C(!0), T && s.current && f && f.unobserve(s.current);
											  }, i)))
											: (C(!0), T && s.current && f && f.unobserve(s.current));
									},
									r = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (I.current = null), C(!1);
									};
								return (
									(f = new IntersectionObserver(
										([_]) => {
											_.isIntersecting
												? s.current && p(s.current)
													? (l(), P())
													: (r(),
													  o ||
															(o = window.setInterval(() => {
																if (!s.current) {
																	l();
																	return;
																}
																p(s.current) && (l(), P());
															}, v)))
												: (l(), r());
										},
										{ rootMargin: x, threshold: O }
									)),
									s.current && f.observe(s.current),
									() => {
										C(!1), l(), u.current && window.clearTimeout(u.current), f && s.current && f.unobserve(s.current);
									}
								);
							}, [s, b]),
							{ inViewport: y, updateRef: g }
						);
					};
				function p(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(R, ['v', 0, m]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(X, R, e) {
				e.d(R, { U: () => v });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function v(m, p) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(m),
						[B, x] = (0, t.J0)(!!s.matches);
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
						B
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(X, R, e) {
				e.d(R, { N: () => p, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 'sstracking';
				function s(B) {
					const x = B;
					return (O) => {
						const { controller: i, result: y, banner: C, type: u, content: I, ...b } = O;
						if (O.trackingRef) return (0, t.Y)(x, { ...O });
						!i && (!u || !I) && console.warn('Warning: No controller provided to withTracking', O),
							!y && !C && (!u || !I) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: j, inViewport: g, updateRef: f } = (0, v.Q)(),
							o = (y || C || (u && I?.[u]?.[0]))?.responseId,
							l = (0, m.li)(o),
							P = (0, m.li)(!1);
						l.current !== o && (P.current = !0),
							(0, m.vJ)(() => {
								l.current !== o && ((l.current = o), f(j.current));
							}, [o, f]),
							(0, m.vJ)(() => {
								P.current && !g && (P.current = !1);
							}, [g, o]);
						const r = u && I && !y && ['search', 'autocomplete'].includes(i?.type || '');
						g && !P.current && (r ? i?.track.banner.impression(I[u][0]) : y?.bundleSeed || i?.track.product.impression(y || C));
						const _ = (0, m.hb)(
							(h) => {
								r ? i?.track.banner.click(h, I[u][0]) : i?.track.product.click(h, y || C);
							},
							[i, y, C, u, I]
						);
						(0, m.vJ)(() => {
							const h = j.current;
							if (h)
								return (
									h.setAttribute(p, 'true'),
									h.addEventListener('click', _, !0),
									() => {
										h.removeEventListener('click', _, !0);
									}
								);
						}, [_]);
						const n = {
							...b,
							controller: i,
							result: y,
							banner: C,
							type: u,
							content: I,
							trackingRef: (0, m.hb)(
								(h) => {
									f(h);
								},
								[f]
							),
						};
						return (0, t.Y)(x, { ...n });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(X, R, e) {
				e.d(R, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					p = 1e3;
				function s(B) {
					const x = (0, t.li)(null),
						{ inViewport: T, updateRef: O } = (0, v.v)(x, { ...B, fireOnce: !0, threshold: m, minVisibleTime: p });
					return { ref: x, inViewport: T, updateRef: O };
				}
			},
		},
	]);
})();

//# sourceMappingURL=1798.08243950.iframe.bundle.js.map
