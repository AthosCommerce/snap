'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ts, B, s) {
				s.d(B, { _: () => N });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = s('../../node_modules/classnames/index.js'),
					h = s.n(M),
					T = s('./components/src/providers/cache.tsx'),
					v = s('./components/src/providers/controller.tsx'),
					O = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = s('./components/src/providers/withTracking.tsx'),
					P = s('./components/src/providers/snap.tsx'),
					W = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useA11y.tsx'),
					S = s('./components/src/types.ts'),
					L = s('../../node_modules/mobx-react-lite/es/index.js'),
					b = s('./components/src/hooks/useComponent.tsx');
				const j = ({ width: x }) =>
						(0, p.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: x,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					N = (0, v.Bk)(
						(0, g.W)(
							(0, L.PA)((x) => {
								const I = (0, O.u)(),
									U = (0, P.uk)(),
									R = (0, W.LU)(),
									F = { layout: S.V.grid, width: 'auto', treePath: R },
									y = (0, A.v6)('inlineBanner', I, F, x),
									{ banner: d, className: u, internalClassName: o, disableA11y: n, layout: _, onClick: l, customComponent: a } = y;
								if (a) {
									const e = (0, b.x)(U?.templates?.library.import.component.inlineBanner || {}, a);
									if (e) return (0, t.Y)(e, { ...y });
								}
								const c = (0, K.Z)(y, j);
								return d && d.value
									? (0, t.Y)(T._, {
											children: (0, t.Y)('div', {
												onClick: (e) => {
													l && l(e, d);
												},
												role: 'article',
												ref: (e) => {
													n || (0, C.iy)(e), (x.trackingRef.current = e);
												},
												className: h()('ss__inline-banner', `ss__inline-banner--${_}`, u, o),
												...c,
												dangerouslySetInnerHTML: { __html: d.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(ts, B, s) {
				s.d(B, { a: () => x });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/mobx-react-lite/es/index.js'),
					M = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = s('../../node_modules/classnames/index.js'),
					T = s.n(h),
					v = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = s('./components/src/providers/snap.tsx'),
					g = s('./components/src/providers/treePath.tsx'),
					P = s('./components/src/utilities/cloneWithProps.tsx'),
					W = s('./components/src/utilities/mergeProps.ts'),
					A = s('./components/src/utilities/mergeStyles.ts'),
					K = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					C = s('./components/src/hooks/useComponent.tsx'),
					S = s('./components/src/hooks/useCreateController.tsx'),
					L = s('../../node_modules/deepmerge/dist/cjs.js'),
					b = s.n(L),
					j = s('./components/src/hooks/useLang.tsx');
				const N = ({}) => (0, M.AH)({}),
					x = (0, p.PA)((I) => {
						const U = (0, v.u)(),
							R = (0, O.uk)(),
							F = (0, g.LU)(),
							y = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: F,
							},
							d = (0, W.v6)('noResults', U, y, I),
							{
								contentSlot: u,
								suggestionsTitleText: o,
								hideSuggestionsTitleText: n,
								hideContactsTitleText: _,
								suggestionsList: l,
								hideContact: a,
								contactsTitleText: c,
								hideSuggestions: e,
								contactsList: r,
								controller: m,
								templates: D,
								className: H,
								internalClassName: J,
								treePath: Y,
								customComponent: Z,
							} = d;
						if (Z) {
							const f = (0, C.x)(R?.templates?.library.import.component.noResults || {}, Z);
							if (f) return (0, t.Y)(f, { ...d });
						}
						const X = (0, A.Z)(d, N),
							Q = l && Array.isArray(l) && l.length !== 0,
							q = r && Array.isArray(r) && r.length !== 0;
						let G, $, i;
						if (D?.recommendation?.enabled) {
							const f = D?.recommendation?.component || 'Recommendation',
								k = (0, O.uk)();
							if (k?.templates) {
								const ns = D?.recommendation?.resultComponent || 'Result',
									w = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, D.recommendation.config);
								(w.id = w.id || `search-${w.tag}`),
									(i = (0, S.i)(k, 'recommendation', w)),
									!i?.store?.loaded && !i?.store?.loading && i?.store.error?.type !== 'error' && i?.search(),
									ns && k?.templates?.library.import.component.result && ($ = (0, C.x)(k?.templates?.library.import.component.result, ns)),
									f &&
										k?.templates?.library.import.component.recommendation.default &&
										(G = (0, C.x)(k?.templates?.library.import.component.recommendation.default, f));
							}
						}
						const E = G,
							V = $,
							ss = {
								suggestionsTitleText: { value: o },
								suggestionsList: {
									value: `${l ? l.map((f) => `<li class="ss__no-results__suggestions__list__option">${f}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: c },
								contactsList: {
									value: `${
										r
											? r
													.map(
														(f) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${K.p(
																f.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																f.title
															}</h4><p class="ss__no-results__contact__detail__content">${f.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							z = b()(ss, d.lang || {}),
							es = (0, j.u)(z, { controller: m });
						return (0, t.FD)('div', {
							className: T()('ss__no-results', H, J),
							...X,
							children: [
								u &&
									(typeof u == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: u } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, P.Y)(u, { controller: m, treePath: Y }) })),
								!e &&
									(o || Q) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											o && !n && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...es.suggestionsTitleText?.all }),
											Q && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...es.suggestionsList?.all }),
										],
									}),
								!a &&
									(c || q) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											c && !_ && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...es.contactsTitleText?.all }),
											q && (0, t.Y)('div', { ...es.contactsList?.all }),
										],
									}),
								E && i?.store?.loaded
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(E, {
												controller: i,
												title: i.store?.profile?.display?.templateParameters?.title,
												resultComponent: V,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ts, B, s) {
				s.d(B, { n: () => u });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = s('../../node_modules/mobx-react-lite/es/index.js'),
					h = s('../../node_modules/classnames/index.js'),
					T = s.n(h),
					v = s('../../node_modules/deepmerge/dist/cjs.js'),
					O = s.n(v),
					g = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = s('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					W = s('./components/src/components/Molecules/Result/Result.tsx'),
					A = s('./components/src/types.ts'),
					K = s('./components/src/utilities/cloneWithProps.tsx'),
					C = s('./components/src/utilities/defined.ts'),
					S = s('./components/src/utilities/mergeProps.ts'),
					L = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/providers/cache.tsx'),
					j = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = s('./components/src/providers/withTracking.tsx'),
					x = s('./components/src/providers/snap.tsx'),
					I = s('./components/src/providers/treePath.tsx'),
					U = s('./components/src/hooks/useDisplaySettings.tsx'),
					R = s('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					F = s('./components/src/hooks/useComponent.tsx');
				const y = ({ gapSize: o, columns: n }) =>
						(0, p.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: o,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${n}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / n}% - (${n - 1} * ${o} / ${n} ) )`,
								marginRight: o,
								marginBottom: o,
								[`&:nth-of-type(${n}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${n})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					d = (0, N.W)(W.Q),
					u = (0, M.PA)((o) => {
						const n = (0, j.u)(),
							_ = (0, x.uk)(),
							l = (0, I.LU)(),
							a = {
								0: { columns: o.columns || 1 },
								540: { columns: o.columns || 2 },
								768: { columns: o.columns || 3 },
								991: { columns: o.columns || 4 },
							},
							c = { results: o.controller?.store?.results, columns: 4, gapSize: '20px', layout: A.V.grid, breakpoints: a, treePath: l };
						let e = (0, S.v6)('results', n, c, o);
						if (!o.theme?.name) {
							const i = (0, U.X)(e?.breakpoints || {}),
								E = O()(e?.theme || {}, i?.theme || {}, { arrayMerge: (V, ss) => ss });
							e = { ...e, ...i, theme: E };
						}
						const {
							disableStyles: r,
							className: m,
							internalClassName: D,
							layout: H,
							theme: J,
							controller: Y,
							treePath: Z,
							customComponent: X,
							resultComponent: Q,
						} = e;
						if (X) {
							const i = (0, F.x)(_?.templates?.library.import.component.results || {}, X);
							if (i) return (0, t.Y)(i, { ...e });
						}
						const q = {
							result: { internalClassName: 'ss__results__result', ...(0, C.s)({ disableStyles: r }), theme: e?.theme, treePath: Z },
							inlineBanner: {
								controller: Y,
								internalClassName: 'ss__results__inline-banner',
								...(0, C.s)({ disableStyles: r }),
								theme: e?.theme,
								treePath: Z,
							},
						};
						let G = e.results;
						e?.columns && e?.rows && e.columns > 0 && e.rows > 0 && (G = e.results?.slice(0, e.columns * e.rows));
						const $ = (0, L.Z)({ ...e, columns: H == A.V.list ? 1 : e.columns }, y);
						return G?.length
							? (0, t.Y)(b._, {
									children: (0, t.Y)('div', {
										...$,
										className: T()('ss__results', `ss__results-${e.layout}`, m, D),
										children: G.map((i) =>
											i.type === g.c.BANNER
												? (0, p.n)(P._, { ...q.inlineBanner, key: i.id, banner: i, layout: e.layout })
												: Q && Y
												? (0, t.Y)(R.o, {
														result: i,
														controller: Y,
														children: (0, K.Y)(Q, { key: i.id, controller: Y, result: i, theme: J, treePath: Z }),
												  })
												: (0, t.Y)(d, { ...q.result, result: i, layout: e.layout, controller: Y }, i.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(ts, B, s) {
				s.d(B, { B: () => x });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = s('../../node_modules/classnames/index.js'),
					h = s.n(M),
					T = s('../../node_modules/mobx-react-lite/es/index.js'),
					v = s('./components/src/providers/cache.tsx'),
					O = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = s('./components/src/providers/snap.tsx'),
					P = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/utilities/defined.ts'),
					A = s('./components/src/utilities/mergeProps.ts'),
					K = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/components/Organisms/Layout/Layout.tsx'),
					S = s('../../node_modules/deepmerge/dist/cjs.js'),
					L = s.n(S),
					b = s('./components/src/hooks/useLang.tsx'),
					j = s('./components/src/hooks/useComponent.tsx');
				const N = ({ stickyOffset: I }) =>
						(0, p.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: I || 0 }, '& .ss__facets': { width: '100%' } }),
					x = (0, T.PA)((I) => {
						const U = (0, O.u)(),
							R = (0, g.uk)(),
							y = { titleText: 'Filters', treePath: (0, P.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							d = (0, A.v6)('sidebar', U, y, I),
							{
								controller: u,
								layout: o,
								hideTitleText: n,
								titleText: _,
								sticky: l,
								disableStyles: a,
								className: c,
								internalClassName: e,
								treePath: r,
								customComponent: m,
							} = d;
						if (m) {
							const Q = (0, j.x)(R?.templates?.library.import.component.sidebar || {}, m);
							if (Q) return (0, t.Y)(Q, { ...d });
						}
						const D = (0, K.Z)(d, N),
							H = { titleText: { value: _ } },
							J = L()(H, d.lang || {}),
							Y = (0, b.u)(J, { controller: u }),
							Z = { Layout: { ...(0, W.s)({ disableStyles: a }), theme: d.theme, treePath: r } },
							X = o?.length;
						return u?.store?.loaded && u?.store?.pagination?.totalResults > 0 && X
							? (0, t.Y)(v._, {
									children: (0, t.FD)('div', {
										...D,
										className: h()('ss__sidebar', c, e, { 'ss__sidebar--sticky': l }),
										children: [
											n
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: h()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...Y.titleText.all,
														children: _,
												  }),
											(0, t.Y)('div', { className: h()('ss__sidebar__inner'), children: (0, t.Y)(C.P, { controller: u, layout: o, ...Z.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(ts, B, s) {
				s.d(B, { M: () => b });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = s('../../node_modules/classnames/index.js'),
					h = s.n(M),
					T = s('../../node_modules/mobx-react-lite/es/index.js'),
					v = s('./components/src/providers/cache.tsx'),
					O = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = s('./components/src/providers/snap.tsx'),
					P = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/hooks/useComponent.tsx'),
					A = s('./components/src/utilities/defined.ts'),
					K = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					S = s('./components/src/components/Organisms/Layout/Layout.tsx');
				const L = ({}) => (0, p.AH)({}),
					b = (0, T.PA)((j) => {
						const N = (0, O.u)(),
							x = (0, g.uk)(),
							U = { treePath: (0, P.LU)(), layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							R = (0, K.v6)('toolbar', N, U, j),
							{
								controller: F,
								toggleSideBarButton: y,
								disableStyles: d,
								className: u,
								internalClassName: o,
								treePath: n,
								layout: _,
								customComponent: l,
							} = R;
						if (l) {
							const r = (0, W.x)(x?.templates?.library.import.component.toolbar || {}, l);
							if (r) return (0, t.Y)(r, { ...R });
						}
						const a = (0, C.Z)(R, L),
							c = {
								Layout: {
									toggleSideBarButton: y,
									internalClassName: 'ss__toolbar__layout',
									...(0, A.s)({ disableStyles: d }),
									theme: R?.theme,
									treePath: n,
								},
							};
						return _?.length
							? (0, t.Y)(v._, {
									children: (0, t.Y)('div', {
										...a,
										className: h()('ss__toolbar', u, o),
										children: (0, t.Y)(S.P, { controller: F, layout: _, ...c.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Templates/Search/Search.tsx'(ts, B, s) {
				s.d(B, { v: () => u });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = s('../../node_modules/mobx-react-lite/es/index.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = s('../../node_modules/classnames/index.js'),
					v = s.n(T),
					O = s('./components/src/components/Organisms/Results/Results.tsx'),
					g = s('./components/src/utilities/mergeProps.ts'),
					P = s('./components/src/utilities/defined.ts'),
					W = s('./components/src/utilities/mergeStyles.ts'),
					A = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/treePath.tsx'),
					C = s('./components/src/providers/cache.tsx'),
					S = s('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					L = s('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					b = s('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					j = s('./components/src/hooks/useMediaQuery.tsx'),
					N = s('./components/src/hooks/useLang.tsx'),
					x = s('./components/src/hooks/useA11y.tsx'),
					I = s('../../node_modules/deepmerge/dist/cjs.js'),
					U = s.n(I);
				const R = (o, n, _) => {
						const l = o.storage,
							c = l.get(n) || _ || void 0,
							[e, r] = (0, p.J0)(c);
						return [
							e,
							(D) => {
								l.set(n, D), r(D);
							},
						];
					},
					F = (o, n) => {
						const _ = o?.layoutOptions || [],
							[l, a] = R(o.controller, 'layoutOptions', _.filter((e) => e.default).pop());
						try {
							if (!_.some((e) => JSON.stringify(e) == JSON.stringify(l))) {
								const e = _.filter((r) => r.default).pop();
								a(e);
							}
						} catch {
							o.controller.log('invalid layoutOptions provided to component', o.inherits ? ` '${o.inherits}'` : '');
						}
						(o.theme = o.theme || {}),
							(o.theme.components = {
								...(o.theme.components || {}),
								layoutSelector: {
									options: _,
									onSelect: (e, r) => {
										r && a(r);
									},
									selected: l,
								},
							});
						let c = !1;
						if (n.components && o.treePath) {
							const e = o.treePath.split(' ')[0];
							Object.keys(n.components).forEach((r) => {
								const m = r.split(' '),
									D = m.splice(-1).pop() ?? '',
									[H] = D.split('.');
								if (
									n.components &&
									H == 'toolbar' &&
									(m[0] == e || m[0] == `*${e}` || m[0] == `*(M)${e}` || m[0] == `*(T)${e}` || m[0] == `*(D)${e}` || !m.length)
								) {
									const J = n.components[r];
									J?.layout && J.layout.toString().indexOf('layoutSelector') > -1 && (c = !0);
								}
							});
						}
						l?.overrides && c && (o.theme = U()(o.theme, { components: l.overrides.components }));
					};
				var y = s('./components/src/utilities/componentNameToClassName.ts');
				const d = (o) => {
						let n = 'ss__search';
						return (
							o.alias && (n = `ss__${(0, y.b)(o.alias)}`),
							(0, h.AH)({
								[`.${n}__header-section`]: { marginBottom: '20px' },
								[`.${n}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
								'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
								[`.${n}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
							})
						);
					},
					u = (0, M.PA)((o) => {
						const n = (0, A.u)(),
							_ = (0, K.LU)(),
							l = {
								toggleSidebarButtonText: 'Filters',
								hideToggleSidebarButton: !0,
								mobileDisplayAt: n?.variables?.breakpoints?.tablet ? `${n.variables?.breakpoints?.tablet}px` : '991px',
								treePath: _,
							},
							a = (0, g.v6)(o.alias || 'search', n, l, o),
							{
								disableStyles: c,
								className: e,
								internalClassName: r,
								controller: m,
								hideSidebar: D,
								toggleSidebarButtonText: H,
								hideTopToolbar: J,
								hideMiddleToolbar: Y,
								hideBottomToolbar: Z,
								resultComponent: X,
								hideToggleSidebarButton: Q,
								mobileDisplayAt: q,
								toggleSidebarStartClosed: G,
								treePath: $,
								alias: i,
							} = a;
						let E = 'ss__search';
						a.alias && (E = `ss__${(0, y.b)(a.alias)}`), n?.name && a.layoutOptions && F(a, n);
						const V = m.store,
							ss = (0, j.U)(`(max-width: ${q})`),
							[z, es] = (0, p.J0)(i !== 'searchHorizontal' && !G),
							f = { toggleSidebarButtonText: { value: H } },
							k = U()(f, a.lang || {}),
							as = (0, N.u)(k, { filters: V.filters, sidebarOpenState: z }),
							ns = () =>
								(0, t.Y)('div', {
									className: v()(`${E}__sidebar-toggle`, z ? `${E}__sidebar-toggle--open` : ''),
									active: z,
									children: (0, t.Y)('span', { ...as.toggleSidebarButtonText.all }),
								}),
							w = {
								onClick: () => {
									es(!z),
										setTimeout(() => {
											if (!z) {
												const ls = document.querySelector('.ss__sidebar')?.querySelector(x.DH);
												ls && ls.focus();
											}
										});
								},
								children: !Q && V.loaded && !ss && (H || as.toggleSidebarButtonText?.value) ? ns : void 0,
							},
							os = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${E}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
									toggleSideBarButton: { ...w },
									...(0, P.s)({ disableStyles: c }),
									theme: a.theme,
									treePath: $,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${E}__content__toolbar--middle-toolbar`,
									layout: ss
										? [['mobileSidebar', '_', 'paginationInfo'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...w },
									...(0, P.s)({ disableStyles: c }),
									theme: a.theme,
									treePath: $,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${E}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...w },
									...(0, P.s)({ disableStyles: c }),
									theme: a.theme,
									treePath: $,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, P.s)({ disableStyles: c }), theme: a.theme, treePath: $ },
								Results: { resultComponent: X, ...(0, P.s)({ disableStyles: c }), theme: a.theme, treePath: $ },
								NoResults: { ...(0, P.s)({ disableStyles: c }), theme: a.theme, treePath: $ },
							},
							rs = (0, W.Z)(a, d);
						return (0, t.Y)(C._, {
							children: (0, t.FD)('div', {
								...rs,
								className: v()(E, e, r, z ? `${E}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${E}__header-section`, children: !J && (0, t.Y)(L.M, { ...os.TopToolbar, controller: m }) }),
									(0, t.FD)('div', {
										className: `${E}__main-section`,
										children: [
											!D &&
												!ss &&
												z &&
												V.loaded &&
												V.pagination.totalResults > 0 &&
												(0, t.Y)('div', { className: `${E}__sidebar`, children: (0, t.Y)(S.B, { ...os.Sidebar, controller: m }) }),
											(0, t.FD)('div', {
												className: v()(`${E}__content`),
												children: [
													!Y && (0, t.Y)(L.M, { ...os.MiddleToolbar, controller: m }),
													V.pagination.totalResults
														? (0, t.Y)(O.n, { ...os.Results, controller: m })
														: V.pagination.totalResults === 0 && (0, t.Y)(b.a, { ...os.NoResults, controller: m }),
													!Z && (0, t.Y)(L.M, { ...os.BottomToolbar, controller: m }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(ts, B, s) {
				s.d(B, { i: () => p });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = (M, h, T) => {
					const [v, O] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							M.getController(T.id)
								.then((g) => {
									O(g);
								})
								.catch(() => {
									M.createController(h, T).then((g) => {
										O(g);
									});
								});
						}, []),
						v
					);
				};
			},
		},
	]);
})();

//# sourceMappingURL=5966.9c3d197e.iframe.bundle.js.map
