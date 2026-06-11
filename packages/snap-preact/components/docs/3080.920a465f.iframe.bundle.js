'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3080],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(X, W, e) {
				e.d(W, { l: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/providers/cache.tsx'),
					C = e('./components/src/providers/controller.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/withTracking.tsx'),
					r = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					S = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const $ = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					x = (0, C.Bk)(
						(0, g.PA)((M) => {
							const o = (0, I.u)(),
								O = { treePath: (0, r.LU)() },
								n = (0, b.v6)('banner', o, O, M),
								{ controller: a, type: l, className: E, internalClassName: K } = n,
								h = n.content || a?.store?.merchandising.content,
								{ overrideElement: A, shouldRenderDefault: _ } = (0, c._)('banner', n);
							if (!_) return A;
							if (l === p.c.INLINE) return console.warn(`BannerType '${p.c.INLINE}' is not supported in <Banner /> component`), null;
							const j = (0, L.Z)(n, $),
								R = h?.[l]?.[0]?.value;
							if (!l || !R) return null;
							const u = (0, S.hb)(
								(0, f.W)((d) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${l}`, E, K),
										...j,
										ref: d.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof R == 'string' ? R : R.join('') },
									})
								),
								[R, l]
							);
							return (0, t.Y)(B._, { children: (0, t.Y)(u, { ...n }) });
						})
					);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(X, W, e) {
				e.d(W, { B: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const p = () =>
						(0, g.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					S = (0, s.PA)(($) => {
						const x = (0, C.u)(),
							o = {
								separator: '>',
								treePath: (0, I.LU)(),
								data: $.controller
									? (d) => [
											{ label: 'Search' },
											{ label: `Results ${d?.store.search?.query?.string ? `for "${d?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							i = (0, r.v6)('breadcrumbs', x, o, $),
							{ data: O, separator: n, separatorIcon: a, className: l, internalClassName: E, controller: K, disableStyles: h, treePath: A } = i,
							{ overrideElement: _, shouldRenderDefault: j } = (0, c._)('breadcrumbs', i);
						if (!j) return _;
						const y = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, f.s)({ disableStyles: h }), theme: i?.theme, treePath: A },
							},
							R = (0, b.Z)(i, p);
						let u;
						return (
							typeof O == 'function' ? (u = O(K)) : (u = O),
							u
								? (0, t.Y)(B._, {
										children: (0, t.Y)('div', {
											...R,
											className: v()('ss__breadcrumbs', l, E),
											children: (0, t.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: u
													.map((d) =>
														(0, t.Y)('li', {
															className: 'ss__breadcrumbs__crumbs__crumb',
															children: d.url ? (0, t.Y)('a', { href: d.url, children: d.label }) : d.label,
														})
													)
													.reduce((d, T) => [
														d,
														(0, t.FD)('li', {
															className: 'ss__breadcrumbs__crumbs__separator',
															children: [
																n !== !1 ? n : (0, t.Y)(t.FK, {}),
																a && (0, t.Y)(L.I, { ...y.icon, ...(typeof a == 'string' ? { icon: a } : a) }),
															],
														}),
														T,
													]),
											}),
										}),
								  })
								: (0, t.Y)(t.FK, {})
						);
					});
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(X, W, e) {
				e.d(W, { h: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('./components/src/providers/cache.tsx'),
					B = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('./components/src/hooks/useA11y.tsx');
				const L = ({ transitionSpeed: p, color: S }) =>
					(0, g.AH)({
						transition: `background ${p} ease 0s, left 0s ease ${p}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${p} ease, left 0s ease`, background: S, left: '0' },
					});
				function c(p) {
					const S = (0, B.u)(),
						x = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, C.LU)() },
						M = (0, I.v6)('overlay', S, x, p),
						{ active: o, onClick: i, disableA11y: O, className: n, internalClassName: a } = M,
						{ overrideElement: l, shouldRenderDefault: E } = (0, r._)('overlay', M);
					if (!E) return l;
					const K = (0, f.Z)(M, L);
					return (0, t.Y)(s._, {
						children: (0, t.Y)('div', {
							onClick: (h) => i && o && i(h),
							ref: (h) => (O ? null : (0, b.iy)(h, o ? 0 : -1)),
							className: v()('ss__overlay', { 'ss__overlay--active': o }, n, a),
							...K,
						}),
					});
				}
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(X, W, e) {
				e.d(W, { R: () => $ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(b),
					c = e('./components/src/hooks/useLang.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const S = ({}) => (0, m.AH)({}),
					$ = (0, g.PA)((x) => {
						const M = (0, C.u)(),
							o = (0, I.LU)(),
							i = x.controller?.store.pagination || x.pagination,
							O = {
								infoText: `${i?.multiplePages ? `${i?.begin} - ${i?.end} of` : ''} ${`${i?.totalResults} result${i?.totalResults == 1 ? '' : 's'}`}`,
								treePath: o,
							},
							n = (0, f.v6)('paginationInfo', M, O, x),
							{ controller: a, infoText: l, className: E, internalClassName: K } = n,
							{ overrideElement: h, shouldRenderDefault: A } = (0, p._)('paginationInfo', n);
						if (!A) return h;
						const _ = i || a?.store?.pagination,
							j = (0, r.Z)(n, S),
							y = {
								infoText: {
									value: l,
									attributes: {
										'aria-label': `displaying ${i?.multiplePages ? `${i?.begin} - ${i?.end} of` : ''} ${i?.totalResults} result${
											i?.totalResults == 1 ? '' : 's'
										} ${a?.store?.search.query ? `for "${a?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							R = L()(y, n.lang || {}),
							u = (0, c.u)(R, { pagination: _ });
						return _?.totalResults
							? (0, t.Y)(B._, {
									children: (0, t.Y)('div', {
										...j,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', E, K),
										...u.infoText?.all,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(X, W, e) {
				e.d(W, { w: () => $ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					B = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					f = e('../../node_modules/classnames/index.js'),
					r = e.n(f),
					b = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(c);
				const S = () => (0, g.AH)({}),
					$ = (0, m.PA)((x) => {
						const M = (0, s.u)(),
							o = (0, B.LU)(),
							i = x.controller?.store.merchandising.landingPage || x.merchandising?.landingPage,
							O = x.controller?.store.pagination || x.pagination,
							n = x.controller?.store.search || x.query,
							a = {
								titleText: `Search result${O?.totalResults == 1 ? '' : 's'} ${
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
							l = (0, C.v6)('searchHeader', M, a, x),
							{
								className: E,
								internalClassName: K,
								titleText: h,
								subtitleText: A,
								correctedQueryText: _,
								noResultsText: j,
								didYouMeanText: y,
								expandedSearchText: R,
								hideTitleText: u,
								hideSubtitleText: d,
								hideCorrectedQueryText: T,
								hideNoResultsText: P,
								hideExpandedSearchText: H,
								hideDidYouMeanText: Y,
							} = l,
							{ overrideElement: J, shouldRenderDefault: N } = (0, L._)('searchHeader', l);
						if (!N) return J;
						const D = (0, I.Z)(l, S),
							F = {
								titleText: { value: h },
								subtitleText: { value: A },
								correctedQueryText: { value: _ },
								noResultsText: { value: j },
								didYouMeanText: { value: y },
								expandedSearchText: { value: R },
							},
							z = p()(F, l.lang || {}),
							V = (0, b.u)(z, { pagination: O, search: n });
						return (0, t.Y)(v._, {
							children: (0, t.Y)('header', {
								...D,
								className: r()('ss__search-header', E, K),
								children: i
									? (0, t.Y)('h3', { className: r()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: i.title })
									: (0, t.FD)(t.FK, {
											children: [
												O?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!H && n?.matchType && n.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: r()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...V.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!u &&
																	(n?.matchType !== 'expanded' || H) &&
																	(0, t.Y)('h3', {
																		className: r()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...V.titleText?.all,
																	}),
																n?.originalQuery &&
																	!T &&
																	(0, t.Y)('h5', {
																		className: r()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...V.correctedQueryText?.all,
																	}),
															],
													  })
													: O?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!P &&
																	(0, t.Y)('h3', {
																		className: r()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...V.noResultsText?.all,
																	}),
																n?.didYouMean &&
																	!Y &&
																	(0, t.Y)('h5', {
																		className: r()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...V.didYouMeanText?.all,
																	}),
															],
													  }),
												(A || z.subtitleText.value) &&
													!d &&
													(0, t.Y)('h5', {
														className: r()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...V.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(X, W, e) {
				e.d(W, { d: () => o });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					p = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					$ = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n($);
				const M = ({}) =>
						(0, m.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					o = (0, g.PA)((i) => {
						const O = (0, r.u)(),
							a = { treePath: (0, b.LU)() },
							l = (0, C.v6)('filter', O, a, i),
							{
								filter: E,
								facetLabel: K,
								valueLabel: h,
								url: A,
								hideFacetLabel: _,
								onClick: j,
								icon: y,
								separator: R,
								disableStyles: u,
								className: d,
								internalClassName: T,
								treePath: P,
							} = l,
							{ overrideElement: H, shouldRenderDefault: Y } = (0, S._)('filter', l);
						if (!Y) return H;
						const J = E?.url?.link || A?.link,
							N = E?.value.label || h,
							D = E?.facet.label || K,
							F = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, B.s)({ disableStyles: u }), theme: l.theme, treePath: P },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, B.s)({ disableStyles: u, icon: y }),
									theme: l.theme,
									treePath: P,
								},
							},
							z = (0, I.Z)(l, M),
							V = { filter: { attributes: { 'aria-label': D ? `remove selected ${D} filter ${N}` : N } } },
							Z = x()(V, l.lang || {}),
							G = (0, p.u)(Z, { label: D, value: N });
						return N
							? (0, t.Y)(f._, {
									children: (0, t.Y)('a', {
										...z,
										className: s()('ss__filter', d, T),
										onClick: (U) => {
											J?.onClick && J.onClick(U), j && j(U);
										},
										href: J?.href,
										tabIndex: 0,
										...G.filter?.all,
										children: (0, t.FD)(L.$, {
											...F.button,
											children: [
												(0, t.Y)(c.I, { ...F.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												!_ &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [D, R && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: R })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: N }),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(X, W, e) {
				e.d(W, { e: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(C),
					f = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					S = e('./components/src/hooks/useIntersection.tsx'),
					$ = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					i = e('./components/src/hooks/useFuncDebounce.tsx');
				const O = ({ pagination: a, progressIndicatorWidth: l, progressIndicatorSize: E, color: K, backgroundColor: h, theme: A }) =>
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
										width: l,
										background: h || A?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: E,
										'& .ss__load-more__progress__indicator__bar': {
											width: a ? `${(a.end / a.totalResults) * 100}%` : '',
											background: K || A?.variables?.colors?.primary || '#ccc',
											borderRadius: E,
											height: E,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					n = (0, B.PA)((a) => {
						const l = (0, r.u)(),
							K = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, b.LU)(),
							},
							h = (0, c.v6)('loadMore', l, K, a),
							{
								pagination: A,
								controller: _,
								onClick: j,
								autoFetch: y,
								intersectionOffset: R,
								loading: u,
								loadMoreText: d,
								hideProgressIndicator: T,
								hideProgressText: P,
								loadingLocation: H,
								loadingIcon: Y,
								disableStyles: J,
								className: N,
								internalClassName: D,
								treePath: F,
							} = h,
							{ overrideElement: z, shouldRenderDefault: V } = (0, x._)('loadMore', h);
						if (!V) return z;
						const Z = A || _?.store?.pagination,
							G = typeof u == 'boolean' ? u : _?.store?.loading,
							U = (G && H === 'button') || !Z?.next,
							k = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': G && H === 'outside' },
										{ 'ss__load-more__button--disabled': U }
									),
									...(0, L.s)({ disableStyles: J }),
									theme: h?.theme,
									treePath: F,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, L.s)({ disableStyles: J }), theme: h?.theme, treePath: F },
							};
						if (!Z) return null;
						const q = (0, p.Z)({ ...h, pagination: Z }, O),
							ee = {};
						if (y) {
							const w = (0, g.li)(null);
							ee.ref = w;
							const se = (0, S.v)(w, R || '0px'),
								[ne, le] = (0, g.J0)(!0);
							G
								? le(!0)
								: (0, i.d)(() => {
										le(!1);
								  }, 500),
								se && Z.next && !ne && Z.next.url.go({ history: 'replace' });
						}
						const re = {
								loadMoreButton: { value: d, attributes: { 'aria-label': d } },
								progressText: { value: `You've viewed ${Z?.end} of ${Z?.totalResults} products` },
							},
							oe = I()(re, h.lang || {}),
							te = (0, $.u)(oe, { pagination: Z });
						return Z.totalResults
							? (0, t.Y)(f._, {
									children: (0, t.FD)('div', {
										...q,
										...ee,
										className: s()('ss__load-more', { 'ss__load-more--loading': G }, { 'ss__load-more--autoFetch': y }, N, D),
										children: [
											!y &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(M.$, {
															onClick: (w) => {
																Z.next?.url.go({ history: 'replace' }), j && j(w);
															},
															...k.button,
															...te.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...te.loadMoreButton.value, children: d }),
																Y && G && H === 'button' ? (0, t.Y)(o.I, { ...k.icon, ...(typeof Y == 'string' ? { icon: Y } : Y) }) : null,
															],
														}),
														Y && G && H === 'outside' && (0, t.Y)(o.I, { ...k.icon, ...(typeof Y == 'string' ? { icon: Y } : Y) }),
													],
												}),
											(!T || !P) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!T &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!P &&
																(0, t.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...te.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(X, W, e) {
				e.d(W, { d: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(c),
					S = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = () =>
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
					M = (0, g.PA)((o) => {
						const i = (0, C.u)(),
							n = { pages: 5, treePath: (0, I.LU)() },
							a = (0, r.v6)('pagination', i, n, o),
							{
								pagination: l,
								controller: E,
								pages: K,
								pagesLeft: h,
								pagesRight: A,
								hideFirst: _,
								hideLast: j,
								persistFirst: y,
								persistLast: R,
								hideEllipsis: u,
								hideNext: d,
								hidePrev: T,
								nextButton: P,
								prevButton: H,
								firstButton: Y,
								lastButton: J,
								disableStyles: N,
								className: D,
								internalClassName: F,
								treePath: z,
							} = a,
							{ overrideElement: V, shouldRenderDefault: Z } = (0, $._)('pagination', a);
						if (!Z) return V;
						const G = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, f.s)({ disableStyles: N }), theme: a?.theme, treePath: z },
							},
							U = l || E?.store?.pagination,
							k = Number.isInteger(h) && Number.isInteger(A) ? [h, A] : [K],
							q = U?.getPages(...k),
							ee = q?.map((se) => se.number),
							re = (0, b.Z)(a, x),
							oe = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${U?.last.number}` } },
							},
							te = p()(oe, a.lang || {}),
							w = (0, S.u)(te, { pagination: U });
						return ee && ee.length > 1 && U?.totalResults
							? (0, t.Y)(B._, {
									children: (0, t.Y)('div', {
										...re,
										className: s()('ss__pagination', D, F),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												U.previous &&
													!T &&
													(0, t.Y)('a', {
														...U.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...w.previous?.all,
														children: H || (0, t.Y)(L.I, { ...G.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!ee.includes(U.first.number) || (y && U.page !== U.first.number)) &&
													!_ &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...U.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...w.first?.all,
																children: Y || U.first.number,
															}),
															!ee.includes(2) && !u && (0, t.Y)('span', { children: '\u2026' }),
														],
													}),
												q &&
													q.map((se) => {
														const ne = { page: { attributes: { 'aria-label': `go to page ${se.number}` } } },
															le = p()(ne, a.lang || {}),
															ae = (0, S.u)(le, { pagination: U, page: se });
														return se.active
															? (0, t.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...ae.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: se.number,
															  })
															: (0, t.Y)('a', { ...se.url.link, className: 'ss__pagination__page', ...ae.page?.all, children: se.number });
													}),
												(!ee.includes(U.last.number) || (R && U.page !== U.last.number)) &&
													!j &&
													(0, t.FD)(t.FK, {
														children: [
															!ee.includes(U.totalPages - 1) && !u && (0, t.Y)('span', { children: '\u2026' }),
															(0, t.Y)('a', {
																...U.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...w.last?.all,
																children: J || U.last.number,
															}),
														],
													}),
												U.next &&
													!d &&
													(0, t.Y)('a', {
														...U.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...w.next?.all,
														children: P || (0, t.Y)(L.I, { ...G.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(X, W, e) {
				e.d(W, { F: () => o });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Molecules/Select/Select.tsx'),
					c = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					p = e('./components/src/components/Molecules/List/List.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					$ = e.n(S),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, g.PA)((i) => {
						const O = (0, C.u)(),
							a = { label: 'Per Page', type: 'dropdown', treePath: (0, I.LU)() },
							l = (0, r.v6)('perPage', O, a, i),
							{ pagination: E, type: K, controller: h, label: A, disableStyles: _, className: j, internalClassName: y, treePath: R } = l,
							{ overrideElement: u, shouldRenderDefault: d } = (0, x._)('perPage', l);
						if (!d) return u;
						const T = E || h?.store?.pagination,
							P = {
								select: { ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
								RadioList: { ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
							},
							H = (0, b.Z)(l, M),
							Y = T && T?.pageSizeOptions?.find((D) => D.value == T?.pageSize),
							J = { label: { value: A } },
							N = $()(J, l.lang || {});
						return T?.pageSize && typeof T?.pageSizeOptions == 'object' && T.pageSizeOptions?.length
							? (0, t.FD)(B._, {
									children: [
										K?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(L.l, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__select', j, y),
												...P.select,
												label: A,
												options: T.pageSizeOptions,
												selected: Y,
												onSelect: (D, F) => {
													T.setPageSize(+F.value);
												},
												lang: { buttonLabel: N.label },
											}),
										K?.toLowerCase() == 'list' &&
											(0, t.Y)(p.B, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__list', j, y),
												...P.List,
												onSelect: (D, F) => {
													T.setPageSize(+F.value);
												},
												requireSelection: !0,
												options: T.pageSizeOptions,
												selected: T.pageSizeOption,
												titleText: A,
												lang: { title: N.label },
											}),
										K?.toLowerCase() == 'radio' &&
											(0, t.Y)(c.q, {
												...H,
												className: s()('ss__per-page', 'ss__per-page__radioList', j, y),
												...P.RadioList,
												onSelect: (D, F) => {
													T.setPageSize(+F.value);
												},
												options: T.pageSizeOptions,
												selected: T.pageSizeOption,
												titleText: A,
												lang: { title: N.label },
											}),
									],
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(X, W, e) {
				e.d(W, { S: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					B = e.n(s),
					C = e('./components/src/utilities/cloneWithProps.tsx'),
					I = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useMediaQuery.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					$ = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const x = ({ slideDirection: o, transitionSpeed: i, width: O }) =>
						(0, v.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${o || 'left'} ${i}`,
							left: o == 'left' ? `-${O}` : o != 'right' ? '0' : 'initial',
							right: o == 'right' ? `-${O}` : 'initial',
							bottom: o == 'bottom' ? '-100vh' : 'initial',
							top: o == 'top' ? '-100vh' : o == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: O?.endsWith('%') && parseInt(O.split('%')[0]) > 90 ? O : '90%',
							maxWidth: O,
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
					M = (0, m.PA)((o) => {
						const i = (0, L.u)(),
							n = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, c.LU)(),
								rerender: !0,
							},
							a = (0, f.v6)('slideout', i, n, o),
							{
								children: l,
								active: E,
								rerender: K,
								buttonContent: h,
								buttonSelector: A,
								noButtonWrapper: _,
								displayAt: j,
								transitionSpeed: y,
								overlayColor: R,
								disableStyles: u,
								className: d,
								internalClassName: T,
								treePath: P,
							} = a,
							{ overrideElement: H, shouldRenderDefault: Y } = (0, S._)('slideout', a);
						if (!Y) return H;
						const J = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, I.s)({ disableStyles: u, color: R, transitionSpeed: y }),
									theme: a?.theme,
									treePath: P,
								},
							},
							[N, D] = (0, g.J0)(!!E),
							[F, z] = (0, g.J0)(!!E),
							V = () => {
								N
									? (D(!1),
									  K &&
											setTimeout(() => {
												z(!1);
											}, 250))
									: (D(!0), z(!0)),
									(document.body.style.overflow = N ? 'hidden' : '');
							};
						(0, g.vJ)(() => {
							z(!!E), N !== E && D(!!E);
						}, [E]);
						const Z = (0, p.U)(j, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = Z && N ? 'hidden' : '';
						const G = (0, r.Z)(a, x);
						return (
							(0, g.vJ)(() => {
								if (A) {
									let U;
									typeof A == 'string' ? (U = document.querySelector(A)) : (U = A), U && U.addEventListener('click', () => V());
								}
							}, []),
							Z || !K
								? (0, t.FD)(b._, {
										children: [
											h &&
												(_
													? (0, C.Y)(h, { toggleActive: V, active: N, treePath: P })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => V(),
															children: (0, C.Y)(h, { active: N, treePath: P }),
													  })),
											(0, t.Y)('div', {
												className: B()('ss__slideout', d, T, { 'ss__slideout--active': N }),
												style: { visibility: K || Z ? 'visible' : 'hidden' },
												...G,
												children: F && (0, C.Y)(l, { toggleActive: V, active: N, treePath: P }),
											}),
											(0, t.Y)($.h, { ...J.overlay, active: N, onClick: V }),
										],
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(X, W, e) {
				e.d(W, { g: () => o });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Molecules/Select/Select.tsx'),
					c = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					p = e('./components/src/components/Molecules/List/List.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					$ = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n($);
				const M = () => (0, m.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					o = (0, g.PA)((i) => {
						const O = (0, C.u)(),
							a = { label: 'Sort By', type: 'dropdown', treePath: (0, I.LU)() },
							l = (0, r.v6)('sortBy', O, a, i),
							{ sorting: E, type: K, controller: h, hideLabel: A, disableStyles: _, className: j, internalClassName: y, treePath: R } = l;
						let u = l.label;
						const { overrideElement: d, shouldRenderDefault: T } = (0, S._)('sortBy', l);
						if (!T) return d;
						const P = E || h?.store?.sorting,
							H = {
								Select: { ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
								RadioList: { ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, f.s)({ disableStyles: _ }), theme: l?.theme, treePath: R },
							},
							Y = (0, b.Z)(l, M),
							J = { label: { value: u } },
							N = x()(J, l.lang || {});
						return (
							A && (delete N.label.value, (u = void 0)),
							P?.current && typeof P?.options == 'object' && P.options?.length
								? (0, t.FD)(B._, {
										children: [
											K?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(L.l, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__select', j, y),
													...H.Select,
													label: u,
													options: P.options,
													selected: P.current,
													onSelect: (D, F) => {
														F?.url?.go();
													},
													lang: { buttonLabel: N.label },
												}),
											K?.toLowerCase() == 'list' &&
												(0, t.Y)(p.B, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__list', j, y),
													...H.List,
													options: P.options,
													selected: P.current,
													titleText: u,
													onSelect: (D, F) => {
														F?.url?.go();
													},
													lang: { title: N.label },
												}),
											K?.toLowerCase() == 'radio' &&
												(0, t.Y)(c.q, {
													...Y,
													className: s()('ss__sortby', 'ss__sortby__radioList', j, y),
													...H.RadioList,
													options: P.options,
													selected: P.current,
													titleText: u,
													onSelect: (D, F) => {
														F?.url?.go();
													},
													lang: { title: N.label },
												}),
										],
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(X, W, e) {
				e.d(W, { J: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					B = e.n(s),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					f = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts');
				const $ = () => (0, g.AH)({}),
					x = (0, C.PA)((M) => {
						const o = (0, r.u)(),
							i = (0, b.LU)(),
							O = { facets: M.controller?.store?.facets, treePath: i };
						let n = (0, p.v6)('facets', o, O, M);
						const { limit: a, onFacetOptionClick: l, disableStyles: E, className: K, internalClassName: h, controller: A, treePath: _ } = n,
							{ overrideElement: j, shouldRenderDefault: y } = (0, L._)('facets', n);
						if (!y) return j;
						const R = (Y) => {
								l && l(Y), A?.setFocused && A?.setFocused();
							},
							u = {
								components: {
									facetGridOptions: { onClick: R },
									facetHierarchyOptions: { onClick: R },
									facetListOptions: { onClick: R },
									facetPaletteOptions: { onClick: R },
								},
							},
							d = B()(u, n?.theme || {}, { arrayMerge: (Y, J) => J });
						n = { ...n, theme: d };
						let { facets: T } = n;
						a && T && a > 0 && (T = T.slice(0, +a));
						const P = { facet: { internalClassName: 'ss__facets__facet', ...(0, c.s)({ disableStyles: E }), theme: n.theme, treePath: _ } },
							H = (0, S.Z)(n, $);
						return T && T?.length > 0
							? (0, t.Y)(f._, {
									children: (0, t.Y)('div', {
										className: v()('ss__facets', K, h),
										...H,
										children: T.map((Y) => (0, t.Y)(I.s, { ...P.facet, facet: Y }, Y.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(X, W, e) {
				e.d(W, { b: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					s = e.n(v),
					B = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(C),
					f = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					r = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
					x = e('./components/src/hooks/useClickOutside.tsx'),
					M = e('./components/src/hooks/useLang.tsx'),
					o = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					i = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					O = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					n = e('./components/src/components/Atoms/Button/Button.tsx');
				const a = ({ theme: E }) =>
						(0, m.AH)({
							margin: '10px 0px',
							'& .ss__facets-horizontal__header': {
								display: 'flex',
								flexWrap: 'wrap',
								gap: '10px',
								'& .ss__mobile-sidebar': { margin: '0 10px' },
								'& .ss__facet__header__inner': { display: 'flex' },
								'& .ss__facet__header__selected-count': { margin: '0px 5px' },
								'& .ss__facet__header__clear-all': {
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									marginLeft: '10px',
									border: 'none',
									padding: '0',
									color: E?.variables?.colors?.primary,
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
					l = (0, B.PA)((E) => {
						const K = (0, b.u)(),
							h = (0, L.LU)(),
							A = {
								limit: 6,
								iconCollapse: 'angle-down',
								iconExpand: 'angle-up',
								clearAllText: 'Clear All',
								facets: E.controller?.store?.facets,
								treePath: h,
							};
						let _ = (0, p.v6)('facetsHorizontal', K, A, E);
						const {
								facets: j,
								limit: y,
								alwaysShowFiltersButton: R,
								hideFiltersButton: u,
								onFacetOptionClick: d,
								showSelectedCount: T,
								hideSelectedCountParenthesis: P,
								clearAllIcon: H,
								showClearAllText: Y,
								iconExpand: J,
								clearAllText: N,
								iconCollapse: D,
								disableStyles: F,
								className: z,
								internalClassName: V,
								controller: Z,
								treePath: G,
							} = _,
							{ overrideElement: U, shouldRenderDefault: k } = (0, o._)('facetsHorizontal', _);
						if (!k) return U;
						const q = (Q) => {
								d && d(Q);
							},
							ee = {
								components: {
									facetGridOptions: { onClick: q },
									facetHierarchyOptions: { onClick: q },
									facetListOptions: { onClick: q },
									facetPaletteOptions: { onClick: q },
								},
							},
							re = I()(ee, _?.theme || {});
						_ = { ..._, theme: re };
						let oe = j,
							te = !1;
						typeof y < 'u' && Number.isInteger(y) && j && ((te = j.length > +y), y > 0 ? (oe = j.slice(0, +y)) : y == 0 && (oe = []));
						const w = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, c.s)({ disableStyles: F }),
									theme: _?.theme,
									treePath: G,
								},
								button: { ...(0, c.s)({ disableStyles: F }), theme: _?.theme, treePath: G },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, c.s)({ disableStyles: F }),
									theme: _?.theme,
									treePath: `${G} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !u && (te || R) ? !0 : void 0,
									...(0, c.s)({ disableStyles: F }),
									theme: _?.theme,
									treePath: `${G} dropdown`,
								},
								MobileSidebar: {
									internalClassName: 'ss__facets-horizontal__header__mobile-sidebar',
									...(0, c.s)({ disableStyles: F }),
									theme: _?.theme,
									treePath: G,
								},
							},
							se = (0, S.Z)(_, a),
							[ne, le] = (0, g.J0)(void 0),
							ae = (0, x.L)(() => {
								ne && le(void 0);
							});
						return (oe && oe?.length > 0) || te
							? (0, t.Y)(r._, {
									children: (0, t.Y)('div', {
										className: s()('ss__facets-horizontal', z, V),
										ref: ae,
										...se,
										children: (0, t.FD)('div', {
											className: 'ss__facets-horizontal__header',
											children: [
												oe?.map((Q) => {
													const ce =
															Q?.values?.filter((de) => de?.filtered).length ||
															Q?.active?.high !== Q?.range?.high ||
															Q?.active?.low !== Q?.range?.low,
														ue = {
															dropdownButton: {
																attributes: {
																	'aria-label': `currently ${ne?.field === Q.field ? 'open' : 'collapsed'} ${Q.label} facet dropdown ${
																		Q.values?.length ? Q.values?.length + ' options' : ''
																	}`,
																},
															},
															clearAllText: { value: N },
														},
														ie = I()(ue, _.lang || {}),
														_e = (0, M.u)(ie, { selectedFacet: ne, facet: Q });
													return (0, t.Y)(i.m, {
														...w.dropdown,
														internalClassName: s()(
															w.dropdown.internalClassName,
															`ss__facets-horizontal__header__dropdown--${Q.display}`,
															`ss__facets-horizontal__header__dropdown--${Q.field}`
														),
														open: ne?.field === Q.field,
														onClick: (de) => {
															ne !== Q && de.code !== 'Escape' ? le(Q) : le(void 0);
														},
														button: (0, t.FD)('div', {
															className: 'ss__dropdown__button__heading',
															..._e.dropdownButton.attributes,
															children: [
																(0, t.FD)('div', {
																	className: 'ss__facet__header__inner',
																	children: [
																		(0, t.Y)('span', { ..._e.dropdownButton.value, children: Q?.label }),
																		T && ce && Q.type !== 'range'
																			? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: P ? ce : `(${ce})` })
																			: null,
																		(_e.clearAllText.value || H) && ce
																			? (0, t.Y)(n.$, {
																					...w.button,
																					internalClassName: 'ss__facet__header__clear-all',
																					name: 'reset-facet',
																					onClick: (de) => {
																						de.stopPropagation(), Q?.clear.url.link.onClick();
																					},
																					icon: H || void 0,
																					children: _e.clearAllText.value && Y ? (0, t.Y)('label', { ..._e.clearAllText.all }) : null,
																			  })
																			: (0, t.Y)(t.FK, {}),
																	],
																}),
																(0, t.Y)(O.I, {
																	...w.icon,
																	...(ne?.field === Q.field
																		? { ...(typeof J == 'string' ? { icon: J } : J) }
																		: { ...(typeof D == 'string' ? { icon: D } : D) }),
																}),
															],
														}),
														disableOverlay: !1,
														children: (0, t.Y)(f.s, { ...w.facet, facet: Q }),
													});
												}),
												!u && (te || R) && (0, t.Y)($.R, { controller: Z, ...w.MobileSidebar }),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(X, W, e) {
				e.d(W, { r: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useLang.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					$ = e.n(S);
				const x = (o) => {
						const i = o.theme?.variables;
						return (0, g.AH)({
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
													fill: i?.colors?.primary,
													stroke: i?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					M = (0, s.PA)((o) => {
						const i = (0, b.u)(),
							O = (0, L.LU)(),
							n = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: o.controller?.store?.filters,
								separator: ':',
								treePath: O,
							},
							a = (0, I.v6)('filterSummary', i, n, o),
							{
								filters: l,
								title: E,
								type: K,
								filterIcon: h,
								clearAllIcon: A,
								separator: _,
								hideFacetLabel: j,
								hideTitle: y,
								clearAllLabel: R,
								hideClearAll: u,
								onClick: d,
								onClearAllClick: T,
								disableStyles: P,
								className: H,
								internalClassName: Y,
								treePath: J,
							} = a,
							{ overrideElement: N, shouldRenderDefault: D } = (0, p._)('filterSummary', a);
						if (!D) return N;
						const F = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, C.s)({ disableStyles: P, separator: _, hideFacetLabel: j, icon: h }),
									theme: a.theme,
									treePath: J,
								},
							},
							z = (0, f.Z)(a, x),
							V = { title: { value: E }, clearAllLabel: { value: R } },
							Z = $()(V, a.lang || {}),
							G = (0, c.u)(Z, { filters: l });
						return l?.length
							? (0, t.Y)(r._, {
									children: (0, t.FD)('div', {
										...z,
										className: v()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': K === 'list' },
											{ 'ss__filter-summary--inline': K === 'inline' },
											H,
											Y
										),
										children: [
											!y && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...G.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													l.map((U) => (0, t.Y)(B.d, { ...F.filter, filter: U, onClick: (k) => d && d(k, U) })),
													!u &&
														(0, t.Y)(B.d, {
															...F.filter,
															name: 'clear-all',
															icon: A,
															internalClassName: `${F?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: R,
															onClick: (U) => {
																T && T(U), o.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': R } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(X, W, e) {
				e.d(W, { P: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					r = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					p = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					S = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					$ = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					x = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					M = e('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
					o = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					i = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					O = e('./components/src/components/Atoms/Button/Button.tsx'),
					n = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					l = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					E = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					K = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
				const h = ({}) =>
						(0, g.AH)({
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
					A = (0, s.PA)((_) => {
						const j = (0, C.u)(),
							R = { treePath: (0, I.LU)() },
							u = (0, b.v6)('layout', j, R, _),
							{ controller: d, toggleSideBarButton: T, disableStyles: P, className: H, internalClassName: Y, layout: J } = u;
						delete u.treePath;
						const N = (0, L.Z)(u, h),
							D = {
								MobileSidebar: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								Banner: {
									controller: d,
									content: d.store.merchandising.content,
									...(0, r.s)({ disableStyles: P }),
									theme: u?.theme,
									treePath: _.treePath,
								},
								SearchHeader: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								FilterSummary: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								LayoutSelector: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								Breadcrumbs: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								Facets: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								FacetsHorizontal: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								Pagination: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								PaginationInfo: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								LoadMore: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								SortBy: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								PerPage: { controller: d, ...(0, r.s)({ disableStyles: P }), theme: u?.theme, treePath: _.treePath },
								ToggleSideBarButton: {
									...T,
									controller: d,
									name: 'sidebar-toggle',
									...(0, r.s)({ disableStyles: P }),
									theme: u?.theme,
									treePath: _.treePath,
								},
							},
							F = T,
							z = d.store.pagination.totalResults > 0;
						function V(k) {
							switch (k) {
								case 'mobileSidebar':
									if (z) return (0, t.Y)(M.R, { controller: d, ...D.MobileSidebar });
									break;
								case 'searchHeader':
									return (0, t.Y)(i.w, { ...D.SearchHeader });
								case 'filterSummary':
									if (z) return (0, t.Y)(f.r, { ...D.FilterSummary });
									break;
								case 'layoutSelector':
									if (z) return (0, t.Y)(x.s, { ...D.LayoutSelector });
									break;
								case 'paginationInfo':
									if (z) return (0, t.Y)(o.R, { ...D.PaginationInfo });
									break;
								case 'sortBy':
									if (z) return (0, t.Y)(S.g, { ...D.SortBy });
									break;
								case 'perPage':
									if (z) return (0, t.Y)($.F, { ...D.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (z)
										return (
											F &&
											(0, t.Y)('div', {
												className: 'ss__button--sidebar-toggle-button-wrapper',
												children: (0, t.Y)(O.$, { ...D.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (z) return d.store.config.settings?.infinite?.enabled ? (0, t.Y)(p.e, { ...D.LoadMore }) : (0, t.Y)(c.d, { ...D.Pagination });
									break;
								case 'breadcrumbs':
									if (z) return (0, t.Y)(K.B, { ...D.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${G++}` });
								case 'banner.banner':
									return (0, t.Y)(n.l, { ...D.Banner, type: a.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(n.l, { ...D.Banner, type: a.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(n.l, { ...D.Banner, type: a.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(n.l, { ...D.Banner, type: a.c.LEFT, name: 'left' });
								case 'facets':
									if (z) return (0, t.Y)(l.J, { ...D.Facets });
									break;
								case 'facetsHorizontal':
									if (z) return (0, t.Y)(E.b, { ...D.Facets });
									break;
								default:
									return null;
							}
						}
						let Z = 0,
							G = 0;
						const U = J?.map((k) => {
							if (Array.isArray(k)) {
								const q = k.map((re) => V(re));
								return k.some((re, oe) => re !== '_' && q[oe])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${Z++}`, children: q })
									: null;
							} else return V(k);
						});
						return U?.some(Boolean) ? (0, t.Y)(B._, { children: (0, t.Y)('div', { ...N, className: v()('ss__layout', H, Y), children: U }) }) : null;
					});
			},
			'./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'(X, W, e) {
				e.d(W, { R: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					v = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					r = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					c = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					o = e.n(M),
					i = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const O = ({}) =>
						(0, g.AH)({
							'& .ss__mobile-sidebar__header': {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								'& .ss__mobile-sidebar__header__close-button': { cursor: 'pointer' },
							},
							'& .ss__mobile-sidebar__title': {
								justifyContent: 'space-between',
								flexDirection: 'row',
								display: 'flex',
								'& .ss__icon': { cursor: 'pointer' },
							},
							'& .ss__mobile-sidebar__slideout__button': { cursor: 'pointer' },
							'& .ss__mobile-sidebar__footer': { display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'row' },
							'& .ss__facets': { width: '100%' },
						}),
					n = (0, s.PA)((a) => {
						const l = (0, C.u)(),
							E = (0, I.LU)(),
							K = {
								openButtonText: 'Filters',
								clearButtonText: 'Clear All',
								applyButtonText: 'Apply',
								layout: ['filterSummary', 'facets', 'banner.left'],
								titleText: 'Filter Options',
								displayAt: '',
								closeButtonIcon: 'close-thin',
								treePath: E,
							},
							h = (0, b.v6)('mobileSidebar', l, K, a),
							{
								controller: A,
								layout: _,
								hideHeader: j,
								hideApplyButton: y,
								clearButtonIcon: R,
								hideCloseButton: u,
								closeButtonText: d,
								openButtonText: T,
								clearButtonText: P,
								applyButtonIcon: H,
								applyButtonText: Y,
								closeButtonIcon: J,
								openButtonIcon: N,
								titleText: D,
								hideCloseButtonText: F,
								hideOpenButtonText: z,
								openButtonContent: V,
								hideClearButtonText: Z,
								hideApplyButtonText: G,
								hideTitleText: U,
								displayAt: k,
								hideClearButton: q,
								disableStyles: ee,
								className: re,
								internalClassName: oe,
								treePath: te,
							} = h,
							{ overrideElement: w, shouldRenderDefault: se } = (0, $._)('mobileSidebar', h);
						if (!se) return w;
						let ne = h.hideFooter;
						y && q && (ne = !0);
						const le = (0, L.Z)(h, O),
							ae = {
								slideout: {
									controller: A,
									displayAt: (k && `(max-width: ${k})`) || '',
									...(0, r.s)({ disableStyles: ee }),
									theme: h?.theme,
									treePath: te,
								},
								button: { ...(0, r.s)({ disableStyles: ee }), theme: h?.theme, treePath: te },
								layout: { ...(0, r.s)({ disableStyles: ee }), theme: h?.theme, treePath: te },
							},
							Q = (0, x.li)(),
							ce = (0, x.li)(),
							ue = {
								openButtonText: { value: T },
								clearButtonText: { value: P },
								applyButtonText: { value: Y },
								titleText: { value: D },
								closeButtonText: { value: d, attributes: { 'aria-label': d || `close ${T}` } },
							},
							ie = o()(ue, h.lang || {});
						z && delete ie.openButtonText.value,
							Z && delete ie.clearButtonText.value,
							F && delete ie.closeButtonText.value,
							G && delete ie.applyButtonText.value;
						const _e = (0, S.u)(ie, { controller: A }),
							de = (he) => {
								const { toggleActive: Ee } = he;
								return (0, t.FD)('div', {
									className: 'ss__mobile-sidebar__content',
									ref: (me) =>
										(0, p.iy)(me, 0, !0, () => {
											Q.current?.base?.focus(), Q.current?.base?.click(), ce.current.base.focus();
										}),
									children: [
										!j &&
											(0, t.FD)('div', {
												className: 'ss__mobile-sidebar__header',
												children: [
													!U &&
														(0, t.Y)('h4', {
															'aria-atomic': 'true',
															'aria-live': 'polite',
															className: 'ss__mobile-sidebar__header__title',
															..._e.titleText?.all,
														}),
													!u &&
														(0, t.Y)(c.$, {
															internalClassName: 'ss__mobile-sidebar__header__close-button',
															disableStyles: !0,
															onClick: () => Ee(),
															ref: (me) => {
																me && (Q.current = me);
															},
															icon: J,
															lang: { button: ie.closeButtonText },
															...ae.button,
															name: 'close',
														}),
												],
											}),
										(0, t.Y)('div', {
											className: v()('ss__mobile-sidebar__inner'),
											children: (0, t.Y)(i.P, { controller: A, layout: _ || [], ...ae.layout }),
										}),
										!ne &&
											(0, t.FD)('div', {
												className: 'ss__mobile-sidebar__footer',
												children: [
													!y &&
														(0, t.Y)(c.$, {
															internalClassName: 'ss__mobile-sidebar__footer__apply-button',
															icon: H,
															onClick: () => Ee(),
															lang: { button: ie.applyButtonText },
															...ae.button,
															name: 'apply',
														}),
													!q &&
														(0, t.Y)(c.$, {
															internalClassName: 'ss__mobile-sidebar__footer__clear-button',
															icon: R,
															onClick: () => {
																A?.urlManager.remove('filter').remove('page').go(), Ee();
															},
															lang: { button: ie.clearButtonText },
															...ae.button,
															name: 'clear',
														}),
												],
											}),
									],
								});
							},
							Pe = (0, x.li)();
						return (0, t.Y)(B._, {
							children: (0, t.Y)('div', {
								...le,
								className: v()('ss__mobile-sidebar', re, oe),
								children: (0, t.Y)(f.S, {
									internalClassName: 'ss__mobile-sidebar__slideout',
									buttonContent: (0, t.Y)(c.$, {
										internalClassName: 'ss__mobile-sidebar__slideout__button',
										icon: N,
										ref: ce,
										onClick: () => {
											setTimeout(() => {
												Pe.current?.base?.focus();
											});
										},
										...ae.button,
										name: 'slideout',
										children: V || (0, t.Y)('span', { ..._e.openButtonText.all }),
									}),
									...ae.slideout,
									children: (0, t.Y)(de, { ref: Pe }),
								}),
							}),
						});
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(X, W, e) {
				e.d(W, { d: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = (m, v) => {
					const s = (0, t.li)(m);
					(s.current = m),
						(0, t.vJ)(() => {
							const B = setTimeout(() => {
								s.current();
							}, v);
							return () => {
								clearTimeout(B);
							};
						}, [m, v]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(X, W, e) {
				e.d(W, { v: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = (m, v = '0px', s = !1) => {
					const [B, C] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const I = new IntersectionObserver(
								([f]) => {
									C(f.isIntersecting), s && f.isIntersecting && I.unobserve(m.current);
								},
								{ rootMargin: v }
							);
							return (
								m.current && I.observe(m.current),
								() => {
									I.unobserve(m.current);
								}
							);
						}, []),
						B
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(X, W, e) {
				e.d(W, { v: () => m });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					m = (s, B = {}) => {
						const { rootMargin: C = '0px', fireOnce: I = !1, threshold: f = 0, minVisibleTime: r = 0 } = B,
							[b, L] = (0, t.J0)(!1),
							c = (0, t.li)(null),
							p = (0, t.li)(null),
							[S, $] = (0, t.J0)(0),
							x = (0, t.hb)((M) => {
								(s.current = M), $((o) => o + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								L(!1);
								let M = null,
									o = null;
								if (!window.IntersectionObserver || !s.current) return;
								const i = () => {
										o && (window.clearInterval(o), (o = null));
									},
									O = () => {
										r > 0
											? ((p.current = Date.now()),
											  c.current && window.clearTimeout(c.current),
											  (c.current = window.setTimeout(() => {
													L(!0), I && s.current && M && M.unobserve(s.current);
											  }, r)))
											: (L(!0), I && s.current && M && M.unobserve(s.current));
									},
									n = () => {
										c.current && window.clearTimeout(c.current), (c.current = null), (p.current = null), L(!1);
									};
								return (
									(M = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? s.current && v(s.current)
													? (i(), O())
													: (n(),
													  o ||
															(o = window.setInterval(() => {
																if (!s.current) {
																	i();
																	return;
																}
																v(s.current) && (i(), O());
															}, g)))
												: (i(), n());
										},
										{ rootMargin: C, threshold: f }
									)),
									s.current && M.observe(s.current),
									() => {
										L(!1), i(), c.current && window.clearTimeout(c.current), M && s.current && M.unobserve(s.current);
									}
								);
							}, [s, S]),
							{ inViewport: b, updateRef: x }
						);
					};
				function v(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/hooks/useMediaQuery.tsx'(X, W, e) {
				e.d(W, { U: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function g(m, v) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(m),
						[B, C] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							C(!!s.matches);
							const I = () => C(!!s.matches);
							return (
								s.addListener(I),
								() => {
									v instanceof Function && v(), s.removeListener(I);
								}
							);
						}, [m]),
						B
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(X, W, e) {
				e.d(W, { N: () => v, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 'sstracking';
				function s(B) {
					const C = B;
					return (f) => {
						const { controller: r, result: b, banner: L, type: c, content: p, ...S } = f;
						if (f.trackingRef) return (0, t.Y)(C, { ...f });
						!r && (!c || !p) && console.warn('Warning: No controller provided to withTracking', f),
							!b && !L && (!c || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: $, inViewport: x, updateRef: M } = (0, g.Q)(),
							o = (b || L || (c && p?.[c]?.[0]))?.responseId,
							i = (0, m.li)(o),
							O = (0, m.li)(!1);
						i.current !== o && (O.current = !0),
							(0, m.vJ)(() => {
								i.current !== o && ((i.current = o), M($.current));
							}, [o, M]),
							(0, m.vJ)(() => {
								O.current && !x && (O.current = !1);
							}, [x, o]);
						const n = c && p && !b && ['search', 'autocomplete'].includes(r?.type || '');
						x && !O.current && (n ? r?.track.banner.impression(p[c][0]) : b?.bundleSeed || r?.track.product.impression(b || L));
						const a = (0, m.hb)(
							(E) => {
								n ? r?.track.banner.click(E, p[c][0]) : r?.track.product.click(E, b || L);
							},
							[r, b, L, c, p]
						);
						(0, m.vJ)(() => {
							const E = $.current;
							if (E)
								return (
									E.setAttribute(v, 'true'),
									E.addEventListener('click', a, !0),
									() => {
										E.removeEventListener('click', a, !0);
									}
								);
						}, [a]);
						const l = {
							...S,
							controller: r,
							result: b,
							banner: L,
							type: c,
							content: p,
							trackingRef: (0, m.hb)(
								(E) => {
									M(E);
								},
								[M]
							),
						};
						return (0, t.Y)(C, { ...l });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(X, W, e) {
				e.d(W, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					v = 1e3;
				function s(B) {
					const C = (0, t.li)(null),
						{ inViewport: I, updateRef: f } = (0, g.v)(C, { ...B, fireOnce: !0, threshold: m, minVisibleTime: v });
					return { ref: C, inViewport: I, updateRef: f };
				}
			},
		},
	]);
})();

//# sourceMappingURL=3080.920a465f.iframe.bundle.js.map
