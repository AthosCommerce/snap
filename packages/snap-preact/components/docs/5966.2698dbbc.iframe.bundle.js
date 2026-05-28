'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ts, f, s) {
				s.d(f, { _: () => H });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = s('../../node_modules/classnames/index.js'),
					O = s.n(C),
					x = s('./components/src/providers/cache.tsx'),
					g = s('./components/src/providers/controller.tsx'),
					D = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = s('./components/src/providers/withTracking.tsx'),
					v = s('./components/src/providers/snap.tsx'),
					j = s('./components/src/providers/treePath.tsx'),
					W = s('./components/src/utilities/mergeProps.ts'),
					N = s('./components/src/utilities/mergeStyles.ts'),
					R = s('./components/src/hooks/useA11y.tsx'),
					Y = s('./components/src/types.ts'),
					A = s('../../node_modules/mobx-react-lite/es/index.js'),
					$ = s('./components/src/hooks/useComponent.tsx');
				const F = ({ width: y }) =>
						(0, h.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: y,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					H = (0, g.Bk)(
						(0, M.W)(
							(0, A.PA)((y) => {
								const K = (0, D.u)(),
									S = (0, v.uk)(),
									B = (0, j.LU)(),
									Q = { layout: Y.V.grid, width: 'auto', treePath: B },
									L = (0, W.v6)('inlineBanner', K, Q, y),
									{ banner: d, className: P, internalClassName: e, disableA11y: a, layout: _, onClick: m, customComponent: l } = L;
								if (l) {
									const o = (0, $.x)(S?.templates?.library.import.component.inlineBanner || {}, l);
									if (o) return (0, t.Y)(o, { ...L });
								}
								const i = (0, N.Z)(L, F);
								return d && d.value
									? (0, t.Y)(x._, {
											children: (0, t.Y)('div', {
												onClick: (o) => {
													m && m(o, d);
												},
												role: 'article',
												ref: (o) => {
													a || (0, R.iy)(o), y.trackingRef(o);
												},
												className: O()('ss__inline-banner', `ss__inline-banner--${_}`, P, e),
												...i,
												dangerouslySetInnerHTML: { __html: d.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(ts, f, s) {
				s.d(f, { a: () => y });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/mobx-react-lite/es/index.js'),
					C = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = s('../../node_modules/classnames/index.js'),
					x = s.n(O),
					g = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = s('./components/src/providers/snap.tsx'),
					M = s('./components/src/providers/treePath.tsx'),
					v = s('./components/src/utilities/cloneWithProps.tsx'),
					j = s('./components/src/utilities/mergeProps.ts'),
					W = s('./components/src/utilities/mergeStyles.ts'),
					N = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					R = s('./components/src/hooks/useComponent.tsx'),
					Y = s('./components/src/hooks/useCreateController.tsx'),
					A = s('../../node_modules/deepmerge/dist/cjs.js'),
					$ = s.n(A),
					F = s('./components/src/hooks/useLang.tsx');
				const H = ({}) => (0, C.AH)({}),
					y = (0, h.PA)((K) => {
						const S = (0, g.u)(),
							B = (0, D.uk)(),
							Q = (0, M.LU)(),
							L = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: Q,
							},
							d = (0, j.v6)('noResults', S, L, K),
							{
								contentSlot: P,
								suggestionsTitleText: e,
								hideSuggestionsTitleText: a,
								hideContactsTitleText: _,
								suggestionsList: m,
								hideContact: l,
								contactsTitleText: i,
								hideSuggestions: o,
								contactsList: c,
								controller: E,
								templates: n,
								className: u,
								internalClassName: T,
								treePath: I,
								customComponent: b,
							} = d;
						if (b) {
							const U = (0, R.x)(B?.templates?.library.import.component.noResults || {}, b);
							if (U) return (0, t.Y)(U, { ...d });
						}
						const Z = (0, W.Z)(d, H),
							V = m && Array.isArray(m) && m.length !== 0,
							q = c && Array.isArray(c) && c.length !== 0;
						let G, J, r;
						if (n?.recommendation?.enabled) {
							const U = n?.recommendation?.component || 'Recommendation',
								k = (0, D.uk)();
							if (k?.templates) {
								const ns = n?.recommendation?.resultComponent || 'Result',
									w = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, n.recommendation.config);
								(w.id = w.id || `search-${w.tag}`),
									(r = (0, Y.i)(k, 'recommendation', w)),
									!r?.store?.loaded && !r?.store?.loading && r?.store.error?.type !== 'error' && r?.search(),
									ns && k?.templates?.library.import.component.result && (J = (0, R.x)(k?.templates?.library.import.component.result, ns)),
									U &&
										k?.templates?.library.import.component.recommendation.default &&
										(G = (0, R.x)(k?.templates?.library.import.component.recommendation.default, U));
							}
						}
						const p = G,
							z = J,
							ss = {
								suggestionsTitleText: { value: e },
								suggestionsList: {
									value: `${m ? m.map((U) => `<li class="ss__no-results__suggestions__list__option">${U}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: i },
								contactsList: {
									value: `${
										c
											? c
													.map(
														(U) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${N.p(
																U.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																U.title
															}</h4><p class="ss__no-results__contact__detail__content">${U.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							X = $()(ss, d.lang || {}),
							es = (0, F.u)(X, { controller: E });
						return (0, t.FD)('div', {
							className: x()('ss__no-results', u, T),
							...Z,
							children: [
								P &&
									(typeof P == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: P } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, v.Y)(P, { controller: E, treePath: I }) })),
								!o &&
									(e || V) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											e && !a && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...es.suggestionsTitleText?.all }),
											V && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...es.suggestionsList?.all }),
										],
									}),
								!l &&
									(i || q) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											i && !_ && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...es.contactsTitleText?.all }),
											q && (0, t.Y)('div', { ...es.contactsList?.all }),
										],
									}),
								p && r?.store?.loaded
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(p, {
												controller: r,
												title: r.store?.profile?.display?.templateParameters?.title,
												resultComponent: z,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ts, f, s) {
				s.d(f, { n: () => P });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = s('../../node_modules/mobx-react-lite/es/index.js'),
					O = s('../../node_modules/classnames/index.js'),
					x = s.n(O),
					g = s('../../node_modules/deepmerge/dist/cjs.js'),
					D = s.n(g),
					M = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					v = s('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					j = s('./components/src/components/Molecules/Result/Result.tsx'),
					W = s('./components/src/types.ts'),
					N = s('./components/src/utilities/cloneWithProps.tsx'),
					R = s('./components/src/utilities/defined.ts'),
					Y = s('./components/src/utilities/mergeProps.ts'),
					A = s('./components/src/utilities/mergeStyles.ts'),
					$ = s('./components/src/providers/cache.tsx'),
					F = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = s('./components/src/providers/withTracking.tsx'),
					y = s('./components/src/providers/snap.tsx'),
					K = s('./components/src/providers/treePath.tsx'),
					S = s('./components/src/hooks/useDisplaySettings.tsx'),
					B = s('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Q = s('./components/src/hooks/useComponent.tsx');
				const L = ({ gapSize: e, columns: a }) =>
						(0, h.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: e,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${a}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / a}% - (${a - 1} * ${e} / ${a} ) )`,
								marginRight: e,
								marginBottom: e,
								[`&:nth-of-type(${a}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${a})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					d = (0, H.W)(j.Q),
					P = (0, C.PA)((e) => {
						const a = (0, F.u)(),
							_ = (0, y.uk)(),
							m = (0, K.LU)(),
							l = {
								0: { columns: e.columns || 1 },
								540: { columns: e.columns || 2 },
								768: { columns: e.columns || 3 },
								991: { columns: e.columns || 4 },
							},
							i = { results: e.controller?.store?.results, columns: 4, gapSize: '20px', layout: W.V.grid, breakpoints: l, treePath: m };
						let o = (0, Y.v6)('results', a, i, e);
						if (!(e.theme?.type == 'templates' || a?.type == 'templates')) {
							const r = (0, S.X)(o?.breakpoints || {}),
								p = D()(o?.theme || {}, r?.theme || {}, { arrayMerge: (z, ss) => ss });
							o = { ...o, ...r, theme: p };
						}
						const {
							disableStyles: c,
							className: E,
							internalClassName: n,
							layout: u,
							theme: T,
							controller: I,
							treePath: b,
							customComponent: Z,
							resultComponent: V,
						} = o;
						if (Z) {
							const r = (0, Q.x)(_?.templates?.library.import.component.results || {}, Z);
							if (r) return (0, t.Y)(r, { ...o });
						}
						const q = {
							result: { internalClassName: 'ss__results__result', ...(0, R.s)({ disableStyles: c }), theme: o?.theme, treePath: b },
							inlineBanner: {
								controller: I,
								internalClassName: 'ss__results__inline-banner',
								...(0, R.s)({ disableStyles: c }),
								theme: o?.theme,
								treePath: b,
							},
						};
						let G = o.results;
						o?.columns && o?.rows && o.columns > 0 && o.rows > 0 && (G = o.results?.slice(0, o.columns * o.rows));
						const J = (0, A.Z)({ ...o, columns: u == W.V.list ? 1 : o.columns }, L);
						return G?.length
							? (0, t.Y)($._, {
									children: (0, t.Y)('div', {
										...J,
										className: x()('ss__results', `ss__results-${o.layout}`, E, n),
										children: G.map((r) =>
											r.type === M.c.BANNER
												? (0, h.n)(v._, { ...q.inlineBanner, key: r.id, banner: r, layout: o.layout })
												: V && I
												? (0, t.Y)(B.o, {
														result: r,
														controller: I,
														children: (0, N.Y)(V, { key: r.id, controller: I, result: r, theme: T, treePath: b }),
												  })
												: (0, t.Y)(d, { ...q.result, result: r, layout: o.layout, controller: I }, r.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(ts, f, s) {
				s.d(f, { B: () => y });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = s('../../node_modules/classnames/index.js'),
					O = s.n(C),
					x = s('../../node_modules/mobx-react-lite/es/index.js'),
					g = s('./components/src/providers/cache.tsx'),
					D = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = s('./components/src/providers/snap.tsx'),
					v = s('./components/src/providers/treePath.tsx'),
					j = s('./components/src/utilities/defined.ts'),
					W = s('./components/src/utilities/mergeProps.ts'),
					N = s('./components/src/utilities/mergeStyles.ts'),
					R = s('./components/src/components/Organisms/Layout/Layout.tsx'),
					Y = s('../../node_modules/deepmerge/dist/cjs.js'),
					A = s.n(Y),
					$ = s('./components/src/hooks/useLang.tsx'),
					F = s('./components/src/hooks/useComponent.tsx');
				const H = ({ stickyOffset: K }) =>
						(0, h.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: K || 0 }, '& .ss__facets': { width: '100%' } }),
					y = (0, x.PA)((K) => {
						const S = (0, D.u)(),
							B = (0, M.uk)(),
							L = { titleText: 'Filters', treePath: (0, v.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							d = (0, W.v6)('sidebar', S, L, K),
							{
								controller: P,
								layout: e,
								hideTitleText: a,
								titleText: _,
								sticky: m,
								disableStyles: l,
								className: i,
								internalClassName: o,
								treePath: c,
								customComponent: E,
							} = d;
						if (E) {
							const V = (0, F.x)(B?.templates?.library.import.component.sidebar || {}, E);
							if (V) return (0, t.Y)(V, { ...d });
						}
						const n = (0, N.Z)(d, H),
							u = { titleText: { value: _ } },
							T = A()(u, d.lang || {}),
							I = (0, $.u)(T, { controller: P }),
							b = { Layout: { ...(0, j.s)({ disableStyles: l }), theme: d.theme, treePath: c } },
							Z = e?.length;
						return P?.store?.loaded && P?.store?.pagination?.totalResults > 0 && Z
							? (0, t.Y)(g._, {
									children: (0, t.FD)('div', {
										...n,
										className: O()('ss__sidebar', i, o, { 'ss__sidebar--sticky': m }),
										children: [
											a
												? (0, t.Y)(t.FK, {})
												: (0, t.Y)('h4', {
														className: O()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														...I.titleText.all,
														children: _,
												  }),
											(0, t.Y)('div', { className: O()('ss__sidebar__inner'), children: (0, t.Y)(R.P, { controller: P, layout: e, ...b.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(ts, f, s) {
				s.d(f, { M: () => $ });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = s('../../node_modules/classnames/index.js'),
					O = s.n(C),
					x = s('../../node_modules/mobx-react-lite/es/index.js'),
					g = s('./components/src/providers/cache.tsx'),
					D = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = s('./components/src/providers/snap.tsx'),
					v = s('./components/src/providers/treePath.tsx'),
					j = s('./components/src/hooks/useComponent.tsx'),
					W = s('./components/src/utilities/defined.ts'),
					N = s('./components/src/utilities/mergeProps.ts'),
					R = s('./components/src/utilities/mergeStyles.ts'),
					Y = s('./components/src/components/Organisms/Layout/Layout.tsx');
				const A = ({}) => (0, h.AH)({}),
					$ = (0, x.PA)((F) => {
						const H = (0, D.u)(),
							y = (0, M.uk)(),
							S = { treePath: (0, v.LU)(), layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							B = (0, N.v6)('toolbar', H, S, F),
							{
								controller: Q,
								toggleSideBarButton: L,
								disableStyles: d,
								className: P,
								internalClassName: e,
								treePath: a,
								layout: _,
								customComponent: m,
							} = B;
						if (m) {
							const c = (0, j.x)(y?.templates?.library.import.component.toolbar || {}, m);
							if (c) return (0, t.Y)(c, { ...B });
						}
						const l = (0, R.Z)(B, A),
							i = {
								Layout: {
									toggleSideBarButton: L,
									internalClassName: 'ss__toolbar__layout',
									...(0, W.s)({ disableStyles: d }),
									theme: B?.theme,
									treePath: a,
								},
							};
						return _?.length
							? (0, t.Y)(g._, {
									children: (0, t.Y)('div', {
										...l,
										className: O()('ss__toolbar', P, e),
										children: (0, t.Y)(Y.P, { controller: Q, layout: _, ...i.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Templates/Search/Search.tsx'(ts, f, s) {
				s.d(f, { v: () => P });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = s('../../node_modules/mobx-react-lite/es/index.js'),
					O = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = s('../../node_modules/classnames/index.js'),
					g = s.n(x),
					D = s('./components/src/components/Organisms/Results/Results.tsx'),
					M = s('./components/src/utilities/mergeProps.ts'),
					v = s('./components/src/utilities/defined.ts'),
					j = s('./components/src/utilities/mergeStyles.ts'),
					W = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = s('./components/src/providers/treePath.tsx'),
					R = s('./components/src/providers/cache.tsx'),
					Y = s('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					A = s('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					$ = s('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					F = s('./components/src/hooks/useMediaQuery.tsx'),
					H = s('./components/src/hooks/useLang.tsx'),
					y = s('./components/src/hooks/useA11y.tsx'),
					K = s('../../node_modules/deepmerge/dist/cjs.js'),
					S = s.n(K);
				const B = (e, a, _) => {
						const m = e.storage,
							i = m.get(a) || _ || void 0,
							[o, c] = (0, h.J0)(i);
						return [
							o,
							(n) => {
								m.set(a, n), c(n);
							},
						];
					},
					Q = (e, a) => {
						const _ = e?.layoutOptions || [],
							m = (n, u) =>
								!n || !u
									? !1
									: n.value !== void 0 && u.value !== void 0
									? n.value === u.value
									: n.label !== void 0 && u.label !== void 0
									? n.label === u.label
									: !1,
							l = (n) => n && { value: n.value, label: n.label },
							[i, o] = B(e.controller, 'layoutOptions', l(_.filter((n) => n.default).pop())),
							c = _.find((n) => m(n, i));
						i && !c && o(l(_.filter((n) => n.default).pop())),
							(e.theme = e.theme || {}),
							(e.theme.components = {
								...(e.theme.components || {}),
								layoutSelector: {
									options: _,
									onSelect: (n, u) => {
										u && o(l(u));
									},
									selected: c,
								},
							});
						let E = !1;
						if (a.components && e.treePath) {
							const n = e.treePath.split(' ')[0];
							Object.keys(a.components).forEach((u) => {
								const T = u.split(' '),
									I = T.splice(-1).pop() ?? '',
									[b] = I.split('.');
								if (
									a.components &&
									b == 'toolbar' &&
									(T[0] == n || T[0] == `*${n}` || T[0] == `*(M)${n}` || T[0] == `*(T)${n}` || T[0] == `*(D)${n}` || !T.length)
								) {
									const Z = a.components[u];
									Z?.layout && Z.layout.toString().indexOf('layoutSelector') > -1 && (E = !0);
								}
							});
						}
						c?.overrides && E && (e.theme = S()(e.theme, { components: c.overrides.components }));
					};
				var L = s('./components/src/utilities/componentNameToClassName.ts');
				const d = (e) => {
						let a = 'ss__search';
						return (
							e.alias && (a = `ss__${(0, L.b)(e.alias)}`),
							(0, O.AH)({
								[`.${a}__header-section`]: { marginBottom: '20px' },
								[`.${a}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
								'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
								[`.${a}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
							})
						);
					},
					P = (0, C.PA)((e) => {
						const a = (0, W.u)(),
							_ = (0, N.LU)(),
							m = {
								toggleSidebarButtonText: 'Filters',
								hideToggleSidebarButton: !0,
								mobileDisplayAt: a?.variables?.breakpoints?.tablet ? `${a.variables?.breakpoints?.tablet}px` : '991px',
								treePath: _,
							},
							l = (0, M.v6)(e.alias || 'search', a, m, e),
							{
								disableStyles: i,
								className: o,
								internalClassName: c,
								controller: E,
								hideSidebar: n,
								toggleSidebarButtonText: u,
								hideTopToolbar: T,
								hideMiddleToolbar: I,
								hideBottomToolbar: b,
								resultComponent: Z,
								hideToggleSidebarButton: V,
								mobileDisplayAt: q,
								toggleSidebarStartClosed: G,
								treePath: J,
								alias: r,
							} = l;
						let p = 'ss__search';
						l.alias && (p = `ss__${(0, L.b)(l.alias)}`), a?.name && l.layoutOptions && Q(l, a);
						const z = E.store,
							ss = (0, F.U)(`(max-width: ${q})`),
							[X, es] = (0, h.J0)(r !== 'searchHorizontal' && !G),
							U = { toggleSidebarButtonText: { value: u } },
							k = S()(U, l.lang || {}),
							as = (0, H.u)(k, { filters: z.filters, sidebarOpenState: X }),
							ns = () =>
								(0, t.Y)('div', {
									className: g()(`${p}__sidebar-toggle`, X ? `${p}__sidebar-toggle--open` : ''),
									active: X,
									children: (0, t.Y)('span', { ...as.toggleSidebarButtonText.all }),
								}),
							w = {
								onClick: () => {
									es(!X),
										setTimeout(() => {
											if (!X) {
												const ls = document.querySelector('.ss__sidebar')?.querySelector(y.DH);
												ls && ls.focus();
											}
										});
								},
								children: !V && z.loaded && !ss && (u || as.toggleSidebarButtonText?.value) ? ns : void 0,
							},
							os = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${p}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
									toggleSideBarButton: { ...w },
									...(0, v.s)({ disableStyles: i }),
									theme: l.theme,
									treePath: J,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${p}__content__toolbar--middle-toolbar`,
									layout: ss
										? [['paginationInfo', '_'], ['mobileSidebar', '_', 'sortBy'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...w },
									...(0, v.s)({ disableStyles: i }),
									theme: l.theme,
									treePath: J,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${p}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...w },
									...(0, v.s)({ disableStyles: i }),
									theme: l.theme,
									treePath: J,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, v.s)({ disableStyles: i }), theme: l.theme, treePath: J },
								Results: { resultComponent: Z, ...(0, v.s)({ disableStyles: i }), theme: l.theme, treePath: J },
								NoResults: { ...(0, v.s)({ disableStyles: i }), theme: l.theme, treePath: J },
							},
							rs = (0, j.Z)(l, d);
						return (0, t.Y)(R._, {
							children: (0, t.FD)('div', {
								...rs,
								className: g()(p, o, c, X ? `${p}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${p}__header-section`, children: !T && (0, t.Y)(A.M, { ...os.TopToolbar, controller: E }) }),
									(0, t.FD)('div', {
										className: `${p}__main-section`,
										children: [
											!n &&
												!ss &&
												X &&
												z.loaded &&
												z.pagination.totalResults > 0 &&
												(0, t.Y)('div', { className: `${p}__sidebar`, children: (0, t.Y)(Y.B, { ...os.Sidebar, controller: E }) }),
											(0, t.FD)('div', {
												className: g()(`${p}__content`),
												children: [
													!I && (0, t.Y)(A.M, { ...os.MiddleToolbar, controller: E }),
													z.pagination.totalResults
														? (0, t.Y)(D.n, { ...os.Results, controller: E })
														: z.pagination.totalResults === 0 && (0, t.Y)($.a, { ...os.NoResults, controller: E }),
													!b && (0, t.Y)(A.M, { ...os.BottomToolbar, controller: E }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(ts, f, s) {
				s.d(f, { i: () => h });
				var t = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = (C, O, x) => {
					const [g, D] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							C.getController(x.id)
								.then((M) => {
									D(M);
								})
								.catch(() => {
									C.createController(O, x).then((M) => {
										D(M);
									});
								});
						}, []),
						g
					);
				};
			},
		},
	]);
})();

//# sourceMappingURL=5966.2698dbbc.iframe.bundle.js.map
