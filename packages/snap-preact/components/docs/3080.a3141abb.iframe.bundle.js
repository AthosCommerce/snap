'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3080],
		{
			'./components/src/components/Atoms/Banner/Banner.tsx'(w, W, e) {
				e.d(W, { l: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/providers/cache.tsx'),
					T = e('./components/src/providers/controller.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/withTracking.tsx'),
					m = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/hooks/useComponent.tsx'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					j = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const N = () => (0, p.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					P = (0, T.Bk)(
						(0, g.PA)((f) => {
							const i = (0, L.u)(),
								x = (0, m.uk)(),
								U = { treePath: (0, M.LU)() },
								a = (0, A.v6)('banner', i, U, f),
								{ controller: _, type: o, className: Y, internalClassName: B, customComponent: l } = a,
								K = a.content || _?.store?.merchandising.content;
							if (l) {
								const O = (0, v.x)(x?.templates?.library.import.component.banner || {}, l);
								if (O) return (0, t.Y)(O, { ...a });
							}
							if (o === b.c.INLINE) return console.warn(`BannerType '${b.c.INLINE}' is not supported in <Banner /> component`), null;
							const I = (0, h.Z)(a, N),
								n = K?.[o]?.[0]?.value;
							if (!o || !n) return null;
							const E = (0, j.hb)(
								(0, y.W)((O) =>
									(0, t.Y)('div', {
										className: s()('ss__banner', `ss__banner--${o}`, Y, B),
										...I,
										ref: O.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof n == 'string' ? n : n.join('') },
									})
								),
								[n, o]
							);
							return (0, t.Y)(C._, { children: (0, t.Y)(E, { ...a }) });
						})
					);
			},
			'./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'(w, W, e) {
				e.d(W, { B: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useComponent.tsx');
				const b = () =>
						(0, g.AH)({
							'& .ss__breadcrumbs__crumbs': { padding: '0', display: 'flex' },
							'& .ss__breadcrumbs__crumbs__crumb, & .ss__breadcrumbs__crumbs__separator': { padding: '0 5px', display: 'inline-block' },
						}),
					j = (0, s.PA)((N) => {
						const P = (0, T.u)(),
							f = (0, L.uk)(),
							x = {
								separator: '>',
								treePath: (0, y.LU)(),
								data: N.controller
									? (O) => [
											{ label: 'Search' },
											{ label: `Results ${O?.store.search?.query?.string ? `for "${O?.store.search?.query?.string}"` : ''}` },
									  ]
									: [{ label: 'Search' }],
							},
							c = (0, M.v6)('breadcrumbs', P, x, N),
							{
								data: U,
								separator: a,
								separatorIcon: _,
								className: o,
								internalClassName: Y,
								controller: B,
								disableStyles: l,
								treePath: K,
								customComponent: I,
							} = c;
						if (I) {
							const O = (0, v.x)(f?.templates?.library.import.component.breadcrumbs || {}, I);
							if (O) return (0, t.Y)(O, { ...c });
						}
						const F = {
								icon: { internalClassName: 'ss__breadcrumbs__separator__icon', ...(0, m.s)({ disableStyles: l }), theme: c?.theme, treePath: K },
							},
							n = (0, A.Z)(c, b);
						let E;
						return (
							typeof U == 'function' ? (E = U(B)) : (E = U),
							E
								? (0, t.Y)(C._, {
										children: (0, t.Y)('div', {
											...n,
											className: D()('ss__breadcrumbs', o, Y),
											children: (0, t.Y)('ul', {
												className: 'ss__breadcrumbs__crumbs',
												children: E.map((O) =>
													(0, t.Y)('li', {
														className: 'ss__breadcrumbs__crumbs__crumb',
														children: O.url ? (0, t.Y)('a', { href: O.url, children: O.label }) : O.label,
													})
												).reduce((O, r) => [
													O,
													(0, t.FD)('li', {
														className: 'ss__breadcrumbs__crumbs__separator',
														children: [
															a !== !1 ? a : (0, t.Y)(t.FK, {}),
															_ && (0, t.Y)(h.I, { ...F.icon, ...(typeof _ == 'string' ? { icon: _ } : _) }),
														],
													}),
													r,
												]),
											}),
										}),
								  })
								: (0, t.Y)(t.FK, {})
						);
					});
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(w, W, e) {
				e.d(W, { h: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/snap.tsx'),
					L = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useComponent.tsx'),
					A = e('./components/src/hooks/useA11y.tsx');
				const h = ({ transitionSpeed: b, color: j }) =>
					(0, g.AH)({
						transition: `background ${b} ease 0s, left 0s ease ${b}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${b} ease, left 0s ease`, background: j, left: '0' },
					});
				function v(b) {
					const j = (0, C.u)(),
						N = (0, T.uk)(),
						f = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, L.LU)() },
						i = (0, y.v6)('overlay', j, f, b),
						{ active: x, onClick: c, disableA11y: U, className: a, internalClassName: _, customComponent: o } = i;
					if (o) {
						const B = (0, M.x)(N?.templates?.library.import.component.overlay || {}, o);
						if (B) return (0, t.Y)(B, { ...i });
					}
					const Y = (0, m.Z)(i, h);
					return (0, t.Y)(s._, {
						children: (0, t.Y)('div', {
							onClick: (B) => c && x && c(B),
							ref: (B) => (U ? null : (0, A.iy)(B, x ? 0 : -1)),
							className: D()('ss__overlay', { 'ss__overlay--active': x }, a, _),
							...Y,
						}),
					});
				}
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(w, W, e) {
				e.d(W, { R: () => N });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					h = e.n(A),
					v = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useComponent.tsx');
				const j = ({}) => (0, p.AH)({}),
					N = (0, g.PA)((P) => {
						const f = (0, T.u)(),
							i = (0, L.uk)(),
							x = (0, y.LU)(),
							c = P.controller?.store.pagination || P.pagination,
							U = {
								infoText: `${c?.multiplePages ? `${c?.begin} - ${c?.end} of` : ''} ${`${c?.totalResults} result${c?.totalResults == 1 ? '' : 's'}`}`,
								treePath: x,
							},
							a = (0, m.v6)('paginationInfo', f, U, P),
							{ controller: _, infoText: o, className: Y, internalClassName: B, customComponent: l } = a;
						if (l) {
							const O = (0, b.x)(i?.templates?.library.import.component.paginationInfo || {}, l);
							if (O) return (0, t.Y)(O, { ...a });
						}
						const K = c || _?.store?.pagination,
							I = (0, M.Z)(a, j),
							F = {
								infoText: {
									value: o,
									attributes: {
										'aria-label': `displaying ${c?.multiplePages ? `${c?.begin} - ${c?.end} of` : ''} ${c?.totalResults} result${
											c?.totalResults == 1 ? '' : 's'
										} ${_?.store?.search.query ? `for "${_?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							n = h()(F, a.lang || {}),
							E = (0, v.u)(n, { pagination: K });
						return K?.totalResults
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...I,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: s()('ss__pagination-info', Y, B),
										...E.infoText?.all,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'(w, W, e) {
				e.d(W, { w: () => N });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/snap.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					m = e('../../node_modules/classnames/index.js'),
					M = e.n(m),
					A = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useComponent.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(v);
				const j = () => (0, g.AH)({}),
					N = (0, p.PA)((P) => {
						const f = (0, s.u)(),
							i = (0, C.uk)(),
							x = (0, T.LU)(),
							c = P.controller?.store.merchandising.landingPage || P.merchandising?.landingPage,
							U = P.controller?.store.pagination || P.pagination,
							a = P.controller?.store.search || P.query,
							_ = {
								titleText: `Search result${U?.totalResults == 1 ? '' : 's'} ${
									a?.query ? `for "<span class="ss__search-header__results-query">${a.query.string}</span>"` : ''
								}`,
								correctedQueryText: `No results found for "<em>${a?.originalQuery?.string}</em>", showing results for "<em>${a?.query?.string}</em>" instead.`,
								didYouMeanText: `Did you mean <a href=${a?.didYouMean?.url.href}>${a?.didYouMean?.string}</a>?`,
								noResultsText: `${
									a?.query
										? `<span>
			No results for "<span class="ss__search-header__results-query">${a.query.string}</span>" found.
		</span>`
										: '<span>No results found.</span>'
								}`,
								expandedSearchText: `We couldn't find an exact match for "<span class="ss__search-header__results-query">${a?.query?.string}</span>", but here's something similar:`,
								treePath: x,
							},
							o = (0, L.v6)('searchHeader', f, _, P),
							{
								className: Y,
								internalClassName: B,
								titleText: l,
								subtitleText: K,
								correctedQueryText: I,
								noResultsText: F,
								didYouMeanText: n,
								expandedSearchText: E,
								hideTitleText: O,
								hideSubtitleText: r,
								hideCorrectedQueryText: H,
								hideNoResultsText: z,
								hideExpandedSearchText: S,
								hideDidYouMeanText: J,
								customComponent: d,
							} = o;
						if (d) {
							const V = (0, h.x)(i?.templates?.library.import.component.searchHeader || {}, d);
							if (V) return (0, t.Y)(V, { ...o });
						}
						const $ = (0, y.Z)(o, j),
							R = {
								titleText: { value: l },
								subtitleText: { value: K },
								correctedQueryText: { value: I },
								noResultsText: { value: F },
								didYouMeanText: { value: n },
								expandedSearchText: { value: E },
							},
							G = b()(R, o.lang || {}),
							Q = (0, A.u)(G, { pagination: U, search: a });
						return (0, t.Y)(D._, {
							children: (0, t.Y)('header', {
								...$,
								className: M()('ss__search-header', Y, B),
								children: c
									? (0, t.Y)('h3', { className: M()('ss__search-header__title', 'ss__search-header__title--landing-page'), children: c.title })
									: (0, t.FD)(t.FK, {
											children: [
												U?.totalResults
													? (0, t.FD)(t.FK, {
															children: [
																!S && a?.matchType && a.matchType == 'expanded'
																	? (0, t.Y)('h3', {
																			className: M()('ss__search-header__title', 'ss__search-header__title--expanded'),
																			'aria-atomic': 'true',
																			'aria-live': 'polite',
																			...Q.expandedSearchText?.all,
																	  })
																	: (0, t.Y)(t.FK, {}),
																!O &&
																	(a?.matchType !== 'expanded' || S) &&
																	(0, t.Y)('h3', {
																		className: M()('ss__search-header__title', 'ss__search-header__title--results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...Q.titleText?.all,
																	}),
																a?.originalQuery &&
																	!H &&
																	(0, t.Y)('h5', {
																		className: M()('ss__search-header__subtitle', 'ss__search-header__subtitle--corrected'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...Q.correctedQueryText?.all,
																	}),
															],
													  })
													: U?.totalResults === 0 &&
													  (0, t.FD)('div', {
															className: 'ss__search-header__no-results-wrapper',
															children: [
																!z &&
																	(0, t.Y)('h3', {
																		className: M()('ss__search-header__title', 'ss__search-header__title--no-results'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...Q.noResultsText?.all,
																	}),
																a?.didYouMean &&
																	!J &&
																	(0, t.Y)('h5', {
																		className: M()('ss__search-header__subtitle', 'ss__search-header__subtitle--dym'),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...Q.didYouMeanText?.all,
																	}),
															],
													  }),
												(K || G.subtitleText.value) &&
													!r &&
													(0, t.Y)('h5', {
														className: M()('ss__search-header__subtitle'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...Q.subtitleText?.all,
													}),
											],
									  }),
							}),
						});
					});
			},
			'./components/src/components/Molecules/Filter/Filter.tsx'(w, W, e) {
				e.d(W, { d: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/components/Atoms/Button/Button.tsx'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					b = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(N);
				const f = ({}) =>
						(0, p.AH)({
							textDecoration: 'none',
							display: 'inline-flex',
							'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
							'& .ss__filter__label': { marginRight: '5px', marginLeft: '5px', fontWeight: 'bold' },
						}),
					i = (0, g.PA)((x) => {
						const c = (0, m.u)(),
							U = (0, M.uk)(),
							_ = { treePath: (0, A.LU)() },
							o = (0, T.v6)('filter', c, _, x),
							{
								filter: Y,
								facetLabel: B,
								valueLabel: l,
								url: K,
								hideFacetLabel: I,
								onClick: F,
								icon: n,
								separator: E,
								disableStyles: O,
								className: r,
								internalClassName: H,
								treePath: z,
								customComponent: S,
							} = o;
						if (S) {
							const u = (0, j.x)(U?.templates?.library.import.component.filter || {}, S);
							if (u) return (0, t.Y)(u, { ...o });
						}
						const J = Y?.url?.link || K?.link,
							d = Y?.value.label || l,
							$ = Y?.facet.label || B,
							R = {
								button: { internalClassName: 'ss__filter__button', disableA11y: !0, ...(0, C.s)({ disableStyles: O }), theme: o.theme, treePath: z },
								icon: {
									icon: 'close-thin',
									internalClassName: 'ss__filter__button__icon',
									size: '10px',
									...(0, C.s)({ disableStyles: O, icon: n }),
									theme: o.theme,
									treePath: z,
								},
							},
							G = (0, L.Z)(o, f),
							Q = { filter: { attributes: { 'aria-label': $ ? `remove selected ${$} filter ${d}` : d } } },
							V = P()(Q, o.lang || {}),
							X = (0, b.u)(V, { label: $, value: d });
						return d
							? (0, t.Y)(y._, {
									children: (0, t.Y)('a', {
										...G,
										className: s()('ss__filter', r, H),
										onClick: (u) => {
											J?.onClick && J.onClick(u), F && F(u);
										},
										href: J?.href,
										tabIndex: 0,
										...X.filter?.all,
										children: (0, t.FD)(h.$, {
											...R.button,
											children: [
												(0, t.Y)(v.I, { ...R.icon, ...(typeof n == 'string' ? { icon: n } : n) }),
												!I &&
													(0, t.FD)('span', {
														className: 'ss__filter__label',
														children: [$, E && (0, t.Y)('span', { className: 'ss__filter__label__separator', children: E })],
													}),
												(0, t.Y)('span', { className: 'ss__filter__value', children: d }),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(w, W, e) {
				e.d(W, { e: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(T),
					y = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/hooks/useIntersection.tsx'),
					N = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/hooks/useComponent.tsx'),
					f = e('./components/src/components/Atoms/Button/Button.tsx'),
					i = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = e('./components/src/hooks/useFuncDebounce.tsx');
				const c = ({ pagination: a, progressIndicatorWidth: _, progressIndicatorSize: o, color: Y, backgroundColor: B, theme: l }) =>
						(0, p.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, p.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: _,
										background: B || l?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: o,
										'& .ss__load-more__progress__indicator__bar': {
											width: a ? `${(a.end / a.totalResults) * 100}%` : '',
											background: Y || l?.variables?.colors?.primary || '#ccc',
											borderRadius: o,
											height: o,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					U = (0, C.PA)((a) => {
						const _ = (0, m.u)(),
							o = (0, M.uk)(),
							B = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, A.LU)(),
							},
							l = (0, v.v6)('loadMore', _, B, a),
							{
								pagination: K,
								controller: I,
								onClick: F,
								autoFetch: n,
								intersectionOffset: E,
								loading: O,
								loadMoreText: r,
								hideProgressIndicator: H,
								hideProgressText: z,
								loadingLocation: S,
								loadingIcon: J,
								disableStyles: d,
								className: $,
								internalClassName: R,
								treePath: G,
								customComponent: Q,
							} = l;
						if (Q) {
							const k = (0, P.x)(o?.templates?.library.import.component.loadMore || {}, Q);
							if (k) return (0, t.Y)(k, { ...l });
						}
						const V = K || I?.store?.pagination,
							X = typeof O == 'boolean' ? O : I?.store?.loading,
							u = (X && S === 'button') || !V?.next,
							te = {
								button: {
									internalClassName: s()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': X && S === 'outside' },
										{ 'ss__load-more__button--disabled': u }
									),
									...(0, h.s)({ disableStyles: d }),
									theme: l?.theme,
									treePath: G,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, h.s)({ disableStyles: d }), theme: l?.theme, treePath: G },
							};
						if (!V) return null;
						const oe = (0, b.Z)({ ...l, pagination: V }, c),
							q = {};
						if (n) {
							const k = (0, g.li)(null);
							q.ref = k;
							const ee = (0, j.v)(k, E || '0px'),
								[re, se] = (0, g.J0)(!0);
							X
								? se(!0)
								: (0, x.d)(() => {
										se(!1);
								  }, 500),
								ee && V.next && !re && V.next.url.go({ history: 'replace' });
						}
						const ie = {
								loadMoreButton: { value: r, attributes: { 'aria-label': r } },
								progressText: { value: `You've viewed ${V?.end} of ${V?.totalResults} products` },
							},
							ae = L()(ie, l.lang || {}),
							ne = (0, N.u)(ae, { pagination: V });
						return V.totalResults
							? (0, t.Y)(y._, {
									children: (0, t.FD)('div', {
										...oe,
										...q,
										className: s()('ss__load-more', { 'ss__load-more--loading': X }, { 'ss__load-more--autoFetch': n }, $, R),
										children: [
											!n &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(f.$, {
															onClick: (k) => {
																V.next?.url.go({ history: 'replace' }), F && F(k);
															},
															...te.button,
															...ne.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...ne.loadMoreButton.value, children: r }),
																J && X && S === 'button' ? (0, t.Y)(i.I, { ...te.icon, ...(typeof J == 'string' ? { icon: J } : J) }) : null,
															],
														}),
														J && X && S === 'outside' && (0, t.Y)(i.I, { ...te.icon, ...(typeof J == 'string' ? { icon: J } : J) }),
													],
												}),
											(!H || !z) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!H &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!z &&
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
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(w, W, e) {
				e.d(W, { d: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(v),
					j = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useComponent.tsx');
				const P = () =>
						(0, p.AH)({
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
					f = (0, g.PA)((i) => {
						const x = (0, T.u)(),
							c = (0, L.uk)(),
							a = { pages: 5, treePath: (0, y.LU)() },
							_ = (0, M.v6)('pagination', x, a, i),
							{
								pagination: o,
								controller: Y,
								pages: B,
								pagesLeft: l,
								pagesRight: K,
								hideFirst: I,
								hideLast: F,
								persistFirst: n,
								persistLast: E,
								hideEllipsis: O,
								hideNext: r,
								hidePrev: H,
								nextButton: z,
								prevButton: S,
								firstButton: J,
								lastButton: d,
								disableStyles: $,
								className: R,
								internalClassName: G,
								treePath: Q,
								customComponent: V,
							} = _;
						if (V) {
							const ee = (0, N.x)(c?.templates?.library.import.component.pagination || {}, V);
							if (ee) return (0, t.Y)(ee, { ..._ });
						}
						const X = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, m.s)({ disableStyles: $ }), theme: _?.theme, treePath: Q },
							},
							u = o || Y?.store?.pagination,
							te = Number.isInteger(l) && Number.isInteger(K) ? [l, K] : [B],
							oe = u?.getPages(...te),
							q = oe?.map((ee) => ee.number),
							ie = (0, A.Z)(_, P),
							ae = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${u?.last.number}` } },
							},
							ne = b()(ae, _.lang || {}),
							k = (0, j.u)(ne, { pagination: u });
						return q && q.length > 1 && u?.totalResults
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...ie,
										className: s()('ss__pagination', R, G),
										children: (0, t.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												u.previous &&
													!H &&
													(0, t.Y)('a', {
														...u.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...k.previous?.all,
														children: S || (0, t.Y)(h.I, { ...X.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!q.includes(u.first.number) || (n && u.page !== u.first.number)) &&
													!I &&
													(0, t.FD)(t.FK, {
														children: [
															(0, t.Y)('a', {
																...u.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...k.first?.all,
																children: J || u.first.number,
															}),
															!q.includes(2) && !O && (0, t.Y)('span', { children: '\u2026' }),
														],
													}),
												oe &&
													oe.map((ee) => {
														const re = { page: { attributes: { 'aria-label': `go to page ${ee.number}` } } },
															se = b()(re, _.lang || {}),
															_e = (0, j.u)(se, { pagination: u, page: ee });
														return ee.active
															? (0, t.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	..._e.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: ee.number,
															  })
															: (0, t.Y)('a', { ...ee.url.link, className: 'ss__pagination__page', ..._e.page?.all, children: ee.number });
													}),
												(!q.includes(u.last.number) || (E && u.page !== u.last.number)) &&
													!F &&
													(0, t.FD)(t.FK, {
														children: [
															!q.includes(u.totalPages - 1) && !O && (0, t.Y)('span', { children: '\u2026' }),
															(0, t.Y)('a', {
																...u.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...k.last?.all,
																children: d || u.last.number,
															}),
														],
													}),
												u.next &&
													!r &&
													(0, t.Y)('a', {
														...u.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...k.next?.all,
														children: z || (0, t.Y)(h.I, { ...X.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/PerPage/PerPage.tsx'(w, W, e) {
				e.d(W, { F: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Select/Select.tsx'),
					v = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					b = e('./components/src/components/Molecules/List/List.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(j),
					P = e('./components/src/hooks/useComponent.tsx');
				const f = () => (0, p.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					i = (0, g.PA)((x) => {
						const c = (0, T.u)(),
							U = (0, L.uk)(),
							_ = { label: 'Per Page', type: 'dropdown', treePath: (0, y.LU)() },
							o = (0, M.v6)('perPage', c, _, x),
							{
								pagination: Y,
								type: B,
								controller: l,
								label: K,
								disableStyles: I,
								className: F,
								internalClassName: n,
								treePath: E,
								customComponent: O,
							} = o;
						if (O) {
							const $ = (0, P.x)(U?.templates?.library.import.component.perPage || {}, O);
							if ($) return (0, t.Y)($, { ...o });
						}
						const r = Y || l?.store?.pagination,
							H = {
								select: { ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
								RadioList: { ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
							},
							z = (0, A.Z)(o, f),
							S = r && r?.pageSizeOptions?.find(($) => $.value == r?.pageSize),
							J = { label: { value: K } },
							d = N()(J, o.lang || {});
						return r?.pageSize && typeof r?.pageSizeOptions == 'object' && r.pageSizeOptions?.length
							? (0, t.FD)(C._, {
									children: [
										B?.toLowerCase() == 'dropdown' &&
											(0, t.Y)(h.l, {
												...z,
												className: s()('ss__per-page', 'ss__per-page__select', F, n),
												...H.select,
												label: K,
												options: r.pageSizeOptions,
												selected: S,
												onSelect: ($, R) => {
													r.setPageSize(+R.value);
												},
												lang: { buttonLabel: d.label },
											}),
										B?.toLowerCase() == 'list' &&
											(0, t.Y)(b.B, {
												...z,
												className: s()('ss__per-page', 'ss__per-page__list', F, n),
												...H.List,
												onSelect: ($, R) => {
													r.setPageSize(+R.value);
												},
												requireSelection: !0,
												options: r.pageSizeOptions,
												selected: r.pageSizeOption,
												titleText: K,
												lang: { title: d.label },
											}),
										B?.toLowerCase() == 'radio' &&
											(0, t.Y)(v.q, {
												...z,
												className: s()('ss__per-page', 'ss__per-page__radioList', F, n),
												...H.RadioList,
												onSelect: ($, R) => {
													r.setPageSize(+R.value);
												},
												options: r.pageSizeOptions,
												selected: r.pageSizeOption,
												titleText: K,
												lang: { title: d.label },
											}),
									],
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(w, W, e) {
				e.d(W, { S: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					C = e.n(s),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					L = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					v = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useMediaQuery.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					N = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const P = ({ slideDirection: i, transitionSpeed: x, width: c }) =>
						(0, D.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${i || 'left'} ${x}`,
							left: i == 'left' ? `-${c}` : i != 'right' ? '0' : 'initial',
							right: i == 'right' ? `-${c}` : 'initial',
							bottom: i == 'bottom' ? '-100vh' : 'initial',
							top: i == 'top' ? '-100vh' : i == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: c?.endsWith('%') && parseInt(c.split('%')[0]) > 90 ? c : '90%',
							maxWidth: c,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: i == 'left' || i != 'right' ? '0' : 'initial',
								right: i == 'right' ? '0' : 'initial',
								bottom: i == 'bottom' ? '0' : 'initial',
								top: i == 'top' ? '0' : i == 'bottom' ? 'initial' : '0',
							},
						}),
					f = (0, p.PA)((i) => {
						const x = (0, A.u)(),
							c = (0, h.uk)(),
							a = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, v.LU)(),
								rerender: !0,
							},
							_ = (0, y.v6)('slideout', x, a, i),
							{
								children: o,
								active: Y,
								rerender: B,
								buttonContent: l,
								buttonSelector: K,
								noButtonWrapper: I,
								displayAt: F,
								transitionSpeed: n,
								overlayColor: E,
								disableStyles: O,
								className: r,
								internalClassName: H,
								treePath: z,
								customComponent: S,
							} = _;
						if (S) {
							const u = (0, j.x)(c?.templates?.library.import.component.slideout || {}, S);
							if (u) return (0, t.Y)(u, { ..._ });
						}
						const J = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, L.s)({ disableStyles: O, color: E, transitionSpeed: n }),
									theme: _?.theme,
									treePath: z,
								},
							},
							[d, $] = (0, g.J0)(!!Y),
							[R, G] = (0, g.J0)(!!Y),
							Q = () => {
								d
									? ($(!1),
									  B &&
											setTimeout(() => {
												G(!1);
											}, 250))
									: ($(!0), G(!0)),
									(document.body.style.overflow = d ? 'hidden' : '');
							};
						(0, g.vJ)(() => {
							G(!!Y), d !== Y && $(!!Y);
						}, [Y]);
						const V = (0, b.U)(F, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = V && d ? 'hidden' : '';
						const X = (0, m.Z)(_, P);
						return (
							(0, g.vJ)(() => {
								if (K) {
									let u;
									typeof K == 'string' ? (u = document.querySelector(K)) : (u = K), u && u.addEventListener('click', () => Q());
								}
							}, []),
							V || !B
								? (0, t.FD)(M._, {
										children: [
											l &&
												(I
													? (0, T.Y)(l, { toggleActive: Q, active: d, treePath: z })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => Q(),
															children: (0, T.Y)(l, { active: d, treePath: z }),
													  })),
											(0, t.Y)('div', {
												className: C()('ss__slideout', r, H, { 'ss__slideout--active': d }),
												style: { visibility: B || V ? 'visible' : 'hidden' },
												...X,
												children: R && (0, T.Y)(o, { toggleActive: Q, active: d, treePath: z }),
											}),
											(0, t.Y)(N.h, { ...J.overlay, active: d, onClick: Q }),
										],
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/SortBy/SortBy.tsx'(w, W, e) {
				e.d(W, { g: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Select/Select.tsx'),
					v = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					b = e('./components/src/components/Molecules/List/List.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					N = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(N);
				const f = () => (0, p.AH)({ '.ss__button__content': { display: 'flex', alignItems: 'center' } }),
					i = (0, g.PA)((x) => {
						const c = (0, T.u)(),
							U = (0, L.uk)(),
							_ = { label: 'Sort By', type: 'dropdown', treePath: (0, y.LU)() },
							o = (0, M.v6)('sortBy', c, _, x),
							{
								sorting: Y,
								type: B,
								controller: l,
								hideLabel: K,
								disableStyles: I,
								className: F,
								internalClassName: n,
								treePath: E,
								customComponent: O,
							} = o;
						let r = o.label;
						if (O) {
							const $ = (0, j.x)(U?.templates?.library.import.component.sortBy || {}, O);
							if ($) return (0, t.Y)($, { ...o });
						}
						const H = Y || l?.store?.sorting,
							z = {
								Select: { ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
								RadioList: { ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
								List: { multiSelect: !1, hideOptionCheckboxes: !0, horizontal: !0, ...(0, m.s)({ disableStyles: I }), theme: o?.theme, treePath: E },
							},
							S = (0, A.Z)(o, f),
							J = { label: { value: r } },
							d = P()(J, o.lang || {});
						return (
							K && (delete d.label.value, (r = void 0)),
							H?.current && typeof H?.options == 'object' && H.options?.length
								? (0, t.FD)(C._, {
										children: [
											B?.toLowerCase() == 'dropdown' &&
												(0, t.Y)(h.l, {
													...S,
													className: s()('ss__sortby', 'ss__sortby__select', F, n),
													...z.Select,
													label: r,
													options: H.options,
													selected: H.current,
													onSelect: ($, R) => {
														R?.url?.go();
													},
													lang: { buttonLabel: d.label },
												}),
											B?.toLowerCase() == 'list' &&
												(0, t.Y)(b.B, {
													...S,
													className: s()('ss__sortby', 'ss__sortby__list', F, n),
													...z.List,
													options: H.options,
													selected: H.current,
													titleText: r,
													onSelect: ($, R) => {
														R?.url?.go();
													},
													lang: { title: d.label },
												}),
											B?.toLowerCase() == 'radio' &&
												(0, t.Y)(v.q, {
													...S,
													className: s()('ss__sortby', 'ss__sortby__radioList', F, n),
													...z.RadioList,
													options: H.options,
													selected: H.current,
													titleText: r,
													onSelect: ($, R) => {
														R?.url?.go();
													},
													lang: { title: d.label },
												}),
										],
								  })
								: null
						);
					});
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(w, W, e) {
				e.d(W, { J: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(s),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					y = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/hooks/useComponent.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts');
				const N = () => (0, g.AH)({}),
					P = (0, T.PA)((f) => {
						const i = (0, m.u)(),
							x = (0, M.uk)(),
							c = (0, A.LU)(),
							U = { facets: f.controller?.store?.facets, treePath: c };
						let a = (0, b.v6)('facets', i, U, f);
						const {
							limit: _,
							onFacetOptionClick: o,
							disableStyles: Y,
							className: B,
							internalClassName: l,
							controller: K,
							treePath: I,
							customComponent: F,
						} = a;
						if (F) {
							const S = (0, h.x)(x?.templates?.library.import.component.facets || {}, F);
							if (S) return (0, t.Y)(S, { ...a });
						}
						const n = (S) => {
								o && o(S), K?.setFocused && K?.setFocused();
							},
							E = {
								components: {
									facetGridOptions: { onClick: n },
									facetHierarchyOptions: { onClick: n },
									facetListOptions: { onClick: n },
									facetPaletteOptions: { onClick: n },
								},
							},
							O = C()(E, a?.theme || {}, { arrayMerge: (S, J) => J });
						a = { ...a, theme: O };
						let { facets: r } = a;
						_ && r && _ > 0 && (r = r.slice(0, +_));
						const H = { facet: { internalClassName: 'ss__facets__facet', ...(0, v.s)({ disableStyles: Y }), theme: a.theme, treePath: I } },
							z = (0, j.Z)(a, N);
						return r && r?.length > 0
							? (0, t.Y)(y._, {
									children: (0, t.Y)('div', {
										className: D()('ss__facets', B, l),
										...z,
										children: r.map((S) => (0, t.Y)(L.s, { ...H.facet, facet: S }, S.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'(w, W, e) {
				e.d(W, { b: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					s = e.n(D),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(T),
					y = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					m = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
					P = e('./components/src/hooks/useClickOutside.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useComponent.tsx'),
					x = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					c = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					U = e('./components/src/components/Atoms/Button/Button.tsx');
				const a = ({ theme: o }) =>
						(0, p.AH)({
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
									color: o?.variables?.colors?.primary,
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
					_ = (0, C.PA)((o) => {
						const Y = (0, M.u)(),
							B = (0, A.uk)(),
							l = (0, h.LU)(),
							K = {
								limit: 6,
								iconCollapse: 'angle-up',
								iconExpand: 'angle-down',
								clearAllText: 'Clear All',
								facets: o.controller?.store?.facets,
								treePath: l,
							};
						let I = (0, b.v6)('facetsHorizontal', Y, K, o);
						const {
							facets: F,
							limit: n,
							alwaysShowFiltersButton: E,
							hideFiltersButton: O,
							onFacetOptionClick: r,
							showSelectedCount: H,
							hideSelectedCountParenthesis: z,
							clearAllIcon: S,
							showClearAllText: J,
							iconExpand: d,
							clearAllText: $,
							iconCollapse: R,
							disableStyles: G,
							className: Q,
							internalClassName: V,
							controller: X,
							treePath: u,
							customComponent: te,
						} = I;
						if (te) {
							const Z = (0, i.x)(B?.templates?.library.import.component.facetsHorizontal || {}, te);
							if (Z) return (0, t.Y)(Z, { ...I });
						}
						const oe = (Z) => {
								r && r(Z);
							},
							q = {
								components: {
									facetGridOptions: { onClick: oe },
									facetHierarchyOptions: { onClick: oe },
									facetListOptions: { onClick: oe },
									facetPaletteOptions: { onClick: oe },
								},
							},
							ie = L()(q, I?.theme || {});
						I = { ...I, theme: ie };
						let ae = F,
							ne = !1;
						typeof n < 'u' && Number.isInteger(n) && F && ((ne = F.length > +n), n > 0 ? (ae = F.slice(0, +n)) : n == 0 && (ae = []));
						const k = {
								dropdown: {
									internalClassName: 'ss__facets-horizontal__header__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									focusTrapContent: !0,
									...(0, v.s)({ disableStyles: G }),
									theme: I?.theme,
									treePath: u,
								},
								button: { ...(0, v.s)({ disableStyles: G }), theme: I?.theme, treePath: u },
								icon: {
									internalClassName: 'ss__dropdown__button__heading__icon',
									...(0, v.s)({ disableStyles: G }),
									theme: I?.theme,
									treePath: `${u} dropdown button`,
								},
								facet: {
									internalClassName: 'ss__facets-horizontal__content__facet',
									justContent: !0,
									statefulOverflow: !O && (ne || E) ? !0 : void 0,
									...(0, v.s)({ disableStyles: G }),
									theme: I?.theme,
									treePath: `${u} dropdown`,
								},
								MobileSidebar: {
									internalClassName: 'ss__facets-horizontal__header__mobile-sidebar',
									...(0, v.s)({ disableStyles: G }),
									theme: I?.theme,
									treePath: u,
								},
							},
							ee = (0, j.Z)(I, a),
							[re, se] = (0, g.J0)(void 0),
							_e = (0, P.L)(() => {
								re && se(void 0);
							});
						return (ae && ae?.length > 0) || ne
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										className: s()('ss__facets-horizontal', Q, V),
										ref: _e,
										...ee,
										children: (0, t.FD)('div', {
											className: 'ss__facets-horizontal__header',
											children: [
												ae?.map((Z) => {
													const de =
															Z?.values?.filter((ce) => ce?.filtered).length ||
															Z?.active?.high !== Z?.range?.high ||
															Z?.active?.low !== Z?.range?.low,
														le = {
															dropdownButton: {
																attributes: {
																	'aria-label': `currently ${re?.field === Z.field ? 'open' : 'collapsed'} ${Z.label} facet dropdown ${
																		Z.values?.length ? Z.values?.length + ' options' : ''
																	}`,
																},
															},
															clearAllText: { value: $ },
														},
														Pe = L()(le, I.lang || {}),
														me = (0, f.u)(Pe, { selectedFacet: re, facet: Z });
													return (0, t.Y)(x.m, {
														...k.dropdown,
														internalClassName: s()(
															k.dropdown.internalClassName,
															`ss__facets-horizontal__header__dropdown--${Z.display}`,
															`ss__facets-horizontal__header__dropdown--${Z.field}`
														),
														open: re?.field === Z.field,
														onClick: (ce) => {
															re !== Z && ce.code !== 'Escape' ? se(Z) : se(void 0);
														},
														button: (0, t.FD)('div', {
															className: 'ss__dropdown__button__heading',
															...me.dropdownButton.attributes,
															children: [
																(0, t.FD)('div', {
																	className: 'ss__facet__header__inner',
																	children: [
																		(0, t.Y)('span', { ...me.dropdownButton.value, children: Z?.label }),
																		H && de && Z.type !== 'range'
																			? (0, t.Y)('span', { className: 'ss__facet__header__selected-count', children: z ? de : `(${de})` })
																			: null,
																		(me.clearAllText.value || S) && de
																			? (0, t.Y)(U.$, {
																					...k.button,
																					internalClassName: 'ss__facet__header__clear-all',
																					name: 'reset-facet',
																					onClick: (ce) => {
																						ce.stopPropagation(), Z?.clear.url.link.onClick();
																					},
																					icon: S || void 0,
																					children: me.clearAllText.value && J ? (0, t.Y)('label', { ...me.clearAllText.all }) : null,
																			  })
																			: (0, t.Y)(t.FK, {}),
																	],
																}),
																(0, t.Y)(c.I, {
																	...k.icon,
																	...(re?.field === Z.field
																		? { ...(typeof d == 'string' ? { icon: d } : d) }
																		: { ...(typeof R == 'string' ? { icon: R } : R) }),
																}),
															],
														}),
														disableOverlay: !1,
														children: (0, t.Y)(y.s, { ...k.facet, facet: Z }),
													});
												}),
												!O && (ne || E) && (0, t.Y)(N.R, { controller: X, ...k.MobileSidebar }),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'(w, W, e) {
				e.d(W, { r: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useComponent.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					N = e.n(j);
				const P = (i) => {
						const x = i.theme?.variables;
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
													fill: x?.colors?.primary,
													stroke: x?.colors?.primary,
													marginRight: '0px',
												},
											},
										},
									},
								},
							},
						});
					},
					f = (0, s.PA)((i) => {
						const x = (0, M.u)(),
							c = (0, A.uk)(),
							U = (0, h.LU)(),
							a = {
								title: 'Current Filters',
								type: 'inline',
								clearAllLabel: 'Clear All',
								clearAllIcon: 'close-thin',
								filterIcon: 'close-thin',
								filters: i.controller?.store?.filters,
								separator: ':',
								treePath: U,
							},
							_ = (0, L.v6)('filterSummary', x, a, i),
							{
								filters: o,
								title: Y,
								type: B,
								filterIcon: l,
								clearAllIcon: K,
								separator: I,
								hideFacetLabel: F,
								hideTitle: n,
								clearAllLabel: E,
								hideClearAll: O,
								onClick: r,
								onClearAllClick: H,
								disableStyles: z,
								className: S,
								internalClassName: J,
								treePath: d,
								customComponent: $,
							} = _;
						if ($) {
							const u = (0, b.x)(c?.templates?.library.import.component.filterSummary || {}, $);
							if (u) return (0, t.Y)(u, { ..._ });
						}
						const R = {
								filter: {
									name: 'filter',
									internalClassName: 'ss__filter-summary__filter',
									...(0, T.s)({ disableStyles: z, separator: I, hideFacetLabel: F, icon: l }),
									theme: _.theme,
									treePath: d,
								},
							},
							G = (0, y.Z)(_, P),
							Q = { title: { value: Y }, clearAllLabel: { value: E } },
							V = N()(Q, _.lang || {}),
							X = (0, v.u)(V, { filters: o });
						return o?.length
							? (0, t.Y)(m._, {
									children: (0, t.FD)('div', {
										...G,
										className: D()(
											'ss__filter-summary',
											{ 'ss__filter-summary--list': B === 'list' },
											{ 'ss__filter-summary--inline': B === 'inline' },
											S,
											J
										),
										children: [
											!n && (0, t.Y)('div', { className: 'ss__filter-summary__title', ...X.title?.all }),
											(0, t.FD)('div', {
												className: 'ss__filter-summary__filters',
												children: [
													o.map((u) => (0, t.Y)(C.d, { ...R.filter, filter: u, onClick: (te) => r && r(te, u) })),
													!O &&
														(0, t.Y)(C.d, {
															...R.filter,
															name: 'clear-all',
															icon: K,
															internalClassName: `${R?.filter?.internalClassName} ss__filter-summary__clear-all`,
															hideFacetLabel: !0,
															valueLabel: E,
															onClick: (u) => {
																H && H(u), i.controller?.urlManager.remove('filter').remove('page').go();
															},
															lang: { filter: { attributes: { 'aria-label': E } } },
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Layout/Layout.tsx'(w, W, e) {
				e.d(W, { P: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					v = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					b = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					j = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					N = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					P = e('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
					f = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					i = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					x = e('./components/src/components/Atoms/Button/Button.tsx'),
					c = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					a = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					_ = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					o = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
				const Y = ({}) =>
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
					B = (0, s.PA)((l) => {
						const K = (0, T.u)(),
							F = { treePath: (0, L.LU)() },
							n = (0, M.v6)('layout', K, F, l),
							{ controller: E, toggleSideBarButton: O, disableStyles: r, className: H, internalClassName: z, layout: S } = n;
						delete n.treePath;
						const J = (0, A.Z)(n, Y),
							d = {
								MobileSidebar: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								Banner: {
									controller: E,
									content: E.store.merchandising.content,
									...(0, m.s)({ disableStyles: r }),
									theme: n?.theme,
									treePath: l.treePath,
								},
								SearchHeader: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								FilterSummary: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								LayoutSelector: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								Breadcrumbs: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								Facets: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								FacetsHorizontal: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								Pagination: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								PaginationInfo: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								LoadMore: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								SortBy: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								PerPage: { controller: E, ...(0, m.s)({ disableStyles: r }), theme: n?.theme, treePath: l.treePath },
								ToggleSideBarButton: {
									...O,
									controller: E,
									name: 'sidebar-toggle',
									...(0, m.s)({ disableStyles: r }),
									theme: n?.theme,
									treePath: l.treePath,
								},
							},
							$ = O,
							R = E.store.pagination.totalResults > 0;
						function G(u) {
							switch (u) {
								case 'mobileSidebar':
									if (R) return (0, t.Y)(P.R, { controller: E, ...d.MobileSidebar });
									break;
								case 'searchHeader':
									return (0, t.Y)(i.w, { ...d.SearchHeader });
								case 'filterSummary':
									if (R) return (0, t.Y)(y.r, { ...d.FilterSummary });
									break;
								case 'layoutSelector':
									if (R) return (0, t.Y)(N.s, { ...d.LayoutSelector });
									break;
								case 'paginationInfo':
									if (R) return (0, t.Y)(f.R, { ...d.PaginationInfo });
									break;
								case 'sortBy':
									if (R) return (0, t.Y)(b.g, { ...d.SortBy });
									break;
								case 'perPage':
									if (R) return (0, t.Y)(j.F, { ...d.PerPage });
									break;
								case 'button.sidebar-toggle':
									if (R)
										return (
											$ &&
											(0, t.Y)('div', {
												className: 'ss__button--sidebar-toggle-button-wrapper',
												children: (0, t.Y)(x.$, { ...d.ToggleSideBarButton }),
											})
										);
									break;
								case 'pagination':
									if (R) return E.store.config.settings?.infinite?.enabled ? (0, t.Y)(v.e, { ...d.LoadMore }) : (0, t.Y)(h.d, { ...d.Pagination });
									break;
								case 'breadcrumbs':
									if (R) return (0, t.Y)(o.B, { ...d.Breadcrumbs });
									break;
								case '_':
									return (0, t.Y)('div', { className: `ss__layout__separator ss__layout__separator--${V++}` });
								case 'banner.banner':
									return (0, t.Y)(c.l, { ...d.Banner, type: U.c.BANNER, name: 'banner' });
								case 'banner.footer':
									return (0, t.Y)(c.l, { ...d.Banner, type: U.c.FOOTER, name: 'footer' });
								case 'banner.header':
									return (0, t.Y)(c.l, { ...d.Banner, type: U.c.HEADER, name: 'header' });
								case 'banner.left':
									return (0, t.Y)(c.l, { ...d.Banner, type: U.c.LEFT, name: 'left' });
								case 'facets':
									if (R) return (0, t.Y)(a.J, { ...d.Facets });
									break;
								case 'facetsHorizontal':
									if (R) return (0, t.Y)(_.b, { ...d.Facets });
									break;
								default:
									return null;
							}
						}
						let Q = 0,
							V = 0;
						const X = S?.map((u) => {
							if (Array.isArray(u)) {
								const te = u.map((q) => G(q));
								return u.some((q, ie) => q !== '_' && te[ie])
									? (0, t.Y)('div', { className: `ss__layout__row ss__layout__row--${Q++}`, children: te })
									: null;
							} else return G(u);
						});
						return X?.some(Boolean) ? (0, t.Y)(C._, { children: (0, t.Y)('div', { ...J, className: D()('ss__layout', H, z), children: X }) }) : null;
					});
			},
			'./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'(w, W, e) {
				e.d(W, { R: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					D = e.n(p),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Atoms/Button/Button.tsx'),
					b = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					N = e('./components/src/hooks/useComponent.tsx'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(f),
					x = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const c = ({}) =>
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
					U = (0, s.PA)((a) => {
						const _ = (0, T.u)(),
							o = (0, L.uk)(),
							Y = (0, y.LU)(),
							B = {
								openButtonText: 'Filters',
								clearButtonText: 'Clear All',
								applyButtonText: 'Apply',
								layout: ['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left'],
								titleText: 'Filter Options',
								displayAt: '',
								closeButtonIcon: 'close-thin',
								treePath: Y,
							},
							l = (0, A.v6)('mobileSidebar', _, B, a),
							{
								controller: K,
								layout: I,
								hideHeader: F,
								hideApplyButton: n,
								clearButtonIcon: E,
								hideCloseButton: O,
								closeButtonText: r,
								openButtonText: H,
								clearButtonText: z,
								applyButtonIcon: S,
								applyButtonText: J,
								closeButtonIcon: d,
								openButtonIcon: $,
								titleText: R,
								hideCloseButtonText: G,
								hideOpenButtonText: Q,
								hideClearButtonText: V,
								hideApplyButtonText: X,
								hideTitleText: u,
								displayAt: te,
								hideClearButton: oe,
								disableStyles: q,
								className: ie,
								internalClassName: ae,
								treePath: ne,
								customComponent: k,
							} = l;
						if (k) {
							const ue = (0, N.x)(o?.templates?.library.import.component.mobileSidebar || {}, k);
							if (ue) return (0, t.Y)(ue, { ...l });
						}
						let ee = l.hideFooter;
						n && oe && (ee = !0);
						const re = (0, h.Z)(l, c),
							se = {
								slideout: {
									controller: K,
									displayAt: (te && `(max-width: ${te})`) || '',
									...(0, M.s)({ disableStyles: q }),
									theme: l?.theme,
									treePath: ne,
								},
								button: { ...(0, M.s)({ disableStyles: q }), theme: l?.theme, treePath: ne },
								layout: { ...(0, M.s)({ disableStyles: q }), theme: l?.theme, treePath: ne },
							},
							_e = (0, P.li)(),
							Z = (0, P.li)(),
							de = {
								openButtonText: { value: H },
								clearButtonText: { value: z },
								applyButtonText: { value: J },
								titleText: { value: R },
								closeButtonText: { value: r, attributes: { 'aria-label': r || `close ${H}` } },
							},
							le = i()(de, l.lang || {});
						Q && delete le.openButtonText.value,
							V && delete le.clearButtonText.value,
							G && delete le.closeButtonText.value,
							X && delete le.applyButtonText.value;
						const Pe = (0, j.u)(le, { controller: K }),
							me = (ue) => {
								const { toggleActive: pe } = ue;
								return (0, t.FD)('div', {
									className: 'ss__mobile-sidebar__content',
									ref: (Ee) =>
										(0, b.iy)(Ee, 0, !0, () => {
											_e.current?.base?.focus(), _e.current?.base?.click(), Z.current.base.focus();
										}),
									children: [
										!F &&
											(0, t.FD)('div', {
												className: 'ss__mobile-sidebar__header',
												children: [
													!u &&
														(0, t.Y)('h4', {
															'aria-atomic': 'true',
															'aria-live': 'polite',
															className: 'ss__mobile-sidebar__header__title',
															...Pe.titleText?.all,
														}),
													!O &&
														(0, t.Y)(v.$, {
															internalClassName: 'ss__mobile-sidebar__header__close-button',
															disableStyles: !0,
															onClick: () => pe(),
															ref: (Ee) => {
																Ee && (_e.current = Ee);
															},
															icon: d,
															lang: { button: le.closeButtonText },
															...se.button,
															name: 'close',
														}),
												],
											}),
										(0, t.Y)('div', {
											className: D()('ss__mobile-sidebar__inner'),
											children: (0, t.Y)(x.P, { controller: K, layout: I || [], ...se.layout }),
										}),
										!ee &&
											(0, t.FD)('div', {
												className: 'ss__mobile-sidebar__footer',
												children: [
													!n &&
														(0, t.Y)(v.$, {
															internalClassName: 'ss__mobile-sidebar__footer__apply-button',
															icon: S,
															onClick: () => pe(),
															lang: { button: le.applyButtonText },
															...se.button,
															name: 'apply',
														}),
													!oe &&
														(0, t.Y)(v.$, {
															internalClassName: 'ss__mobile-sidebar__footer__clear-button',
															icon: E,
															onClick: () => {
																K?.urlManager.remove('filter').remove('page').go(), pe();
															},
															lang: { button: le.clearButtonText },
															...se.button,
															name: 'clear',
														}),
												],
											}),
									],
								});
							},
							ce = (0, P.li)();
						return (0, t.Y)(C._, {
							children: (0, t.Y)('div', {
								...re,
								className: D()('ss__mobile-sidebar', ie, ae),
								children: (0, t.Y)(m.S, {
									internalClassName: 'ss__mobile-sidebar__slideout',
									buttonContent: (0, t.Y)(v.$, {
										internalClassName: 'ss__mobile-sidebar__slideout__button',
										icon: $,
										ref: Z,
										onClick: () => {
											setTimeout(() => {
												ce.current?.base?.focus();
											});
										},
										...se.button,
										name: 'slideout',
										lang: { button: le.openButtonText },
									}),
									...se.slideout,
									children: (0, t.Y)(me, { ref: ce }),
								}),
							}),
						});
					});
			},
			'./components/src/hooks/useFuncDebounce.tsx'(w, W, e) {
				e.d(W, { d: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = (p, D) => {
					const s = (0, t.li)(p);
					(s.current = p),
						(0, t.vJ)(() => {
							const C = setTimeout(() => {
								s.current();
							}, D);
							return () => {
								clearTimeout(C);
							};
						}, [p, D]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(w, W, e) {
				e.d(W, { v: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = (p, D = '0px', s = !1) => {
					const [C, T] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const L = new IntersectionObserver(
								([y]) => {
									T(y.isIntersecting), s && y.isIntersecting && L.unobserve(p.current);
								},
								{ rootMargin: D }
							);
							return (
								p.current && L.observe(p.current),
								() => {
									L.unobserve(p.current);
								}
							);
						}, []),
						C
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, W, e) {
				e.d(W, { v: () => p });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					p = (s, C = {}) => {
						const { rootMargin: T = '0px', fireOnce: L = !1, threshold: y = 0, minVisibleTime: m = 0 } = C,
							[M, A] = (0, t.J0)(!1),
							h = (0, t.li)(null),
							v = (0, t.li)(null),
							[b, j] = (0, t.J0)(0),
							N = (0, t.hb)((P) => {
								(s.current = P), j((f) => f + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								A(!1);
								let P = null,
									f = null;
								if (!window.IntersectionObserver || !s.current) return;
								const i = () => {
										f && (window.clearInterval(f), (f = null));
									},
									x = () => {
										m > 0
											? ((v.current = Date.now()),
											  h.current && window.clearTimeout(h.current),
											  (h.current = window.setTimeout(() => {
													A(!0), L && s.current && P && P.unobserve(s.current);
											  }, m)))
											: (A(!0), L && s.current && P && P.unobserve(s.current));
									},
									c = () => {
										h.current && window.clearTimeout(h.current), (h.current = null), (v.current = null), A(!1);
									};
								return (
									(P = new IntersectionObserver(
										([U]) => {
											U.isIntersecting
												? s.current && D(s.current)
													? (i(), x())
													: (c(),
													  f ||
															(f = window.setInterval(() => {
																if (!s.current) {
																	i();
																	return;
																}
																D(s.current) && (i(), x());
															}, g)))
												: (i(), c());
										},
										{ rootMargin: T, threshold: y }
									)),
									s.current && P.observe(s.current),
									() => {
										A(!1), i(), h.current && window.clearTimeout(h.current), P && s.current && P.unobserve(s.current);
									}
								);
							}, [s, b]),
							{ inViewport: M, updateRef: N }
						);
					};
				function D(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/hooks/useMediaQuery.tsx'(w, W, e) {
				e.d(W, { U: () => g });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function g(p, D) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(p),
						[C, T] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							const L = () => T(!!s.matches);
							return (
								s.addListener(L),
								() => {
									D instanceof Function && D(), s.removeListener(L);
								}
							);
						}, []),
						C
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(w, W, e) {
				e.d(W, { N: () => D, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const D = 'sstracking';
				function s(C) {
					const T = C;
					return (y) => {
						const { controller: m, result: M, banner: A, type: h, content: v, ...b } = y;
						if (y.trackingRef) return (0, t.Y)(T, { ...y });
						!m && (!h || !v) && console.warn('Warning: No controller provided to withTracking', y),
							!M && !A && (!h || !v) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: j, inViewport: N, updateRef: P } = (0, g.Q)(),
							f = (M || A || (h && v?.[h]?.[0]))?.responseId,
							i = (0, p.li)(f),
							x = (0, p.li)(!1);
						i.current !== f && (x.current = !0),
							(0, p.vJ)(() => {
								i.current !== f && ((i.current = f), P(j.current));
							}, [f, P]),
							(0, p.vJ)(() => {
								x.current && !N && (x.current = !1);
							}, [N, f]);
						const c = h && v && !M && ['search', 'autocomplete'].includes(m?.type || '');
						N && !x.current && (c ? m?.track.banner.impression(v[h][0]) : M?.bundleSeed || m?.track.product.impression(M || A));
						const U = (0, p.hb)(
							(_) => {
								c ? m?.track.banner.click(_, v[h][0]) : m?.track.product.click(_, M || A);
							},
							[m, M, A, h, v]
						);
						(0, p.vJ)(() => {
							const _ = j.current;
							if (_)
								return (
									_.setAttribute(D, 'true'),
									_.addEventListener('click', U, !0),
									() => {
										_.removeEventListener('click', U, !0);
									}
								);
						}, [U]);
						const a = {
							...b,
							controller: m,
							result: M,
							banner: A,
							type: h,
							content: v,
							trackingRef: (0, p.hb)(
								(_) => {
									P(_);
								},
								[P]
							),
						};
						return (0, t.Y)(T, { ...a });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(w, W, e) {
				e.d(W, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const p = 0.7,
					D = 1e3;
				function s(C) {
					const T = (0, t.li)(null),
						{ inViewport: L, updateRef: y } = (0, g.v)(T, { ...C, fireOnce: !0, threshold: p, minVisibleTime: D });
					return { ref: T, inViewport: L, updateRef: y };
				}
			},
		},
	]);
})();

//# sourceMappingURL=3080.a3141abb.iframe.bundle.js.map
