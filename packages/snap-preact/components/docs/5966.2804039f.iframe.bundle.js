'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(te, L, e) {
				e.d(L, { _: () => S });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					g = e.n(T),
					C = e('./components/src/providers/cache.tsx'),
					D = e('./components/src/providers/controller.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					j = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/types.ts'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const F = ({ width: A }) =>
						(0, O.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: A,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					S = (0, D.Bk)(
						(0, E.W)(
							(0, Y.PA)((A) => {
								const I = (0, R.u)(),
									x = (0, P.LU)(),
									H = { layout: K.V.grid, width: 'auto', treePath: x },
									W = (0, j.v6)('inlineBanner', I, H, A),
									{ banner: d, className: M, internalClassName: b, disableA11y: B, layout: l, onClick: t } = W,
									{ overrideElement: r, shouldRenderDefault: v } = (0, f._)('inlineBanner', W);
								if (!v) return r;
								const a = (0, U.Z)(W, F);
								return d && d.value
									? (0, s.Y)(C._, {
											children: (0, s.Y)('div', {
												onClick: (i) => {
													t && t(i, d);
												},
												role: 'article',
												ref: (i) => {
													B || (0, $.iy)(i), A.trackingRef(i);
												},
												className: g()('ss__inline-banner', `ss__inline-banner--${l}`, M, b),
												...a,
												dangerouslySetInnerHTML: { __html: d.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(te, L, e) {
				e.d(L, { a: () => x });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					C = e.n(g),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					j = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					K = e('./components/src/hooks/useCreateController.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(Y),
					F = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useComponent.tsx'),
					A = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const I = ({}) => (0, T.AH)({}),
					x = (0, O.PA)((H) => {
						const W = (0, D.u)(),
							d = (0, R.uk)(),
							M = (0, E.LU)(),
							b = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: M,
							},
							B = (0, j.v6)('noResults', W, b, H),
							{
								contentSlot: l,
								suggestionsTitleText: t,
								hideSuggestionsTitleText: r,
								hideContactsTitleText: v,
								suggestionsList: a,
								hideContact: i,
								contactsTitleText: y,
								hideSuggestions: n,
								contactsList: c,
								controller: o,
								templates: m,
								className: _,
								internalClassName: z,
								treePath: X,
							} = B,
							{ overrideElement: N, shouldRenderDefault: w } = (0, A._)('noResults', B);
						if (!w) return N;
						const q = (0, U.Z)(B, I),
							oe = a && Array.isArray(a) && a.length !== 0,
							Z = c && Array.isArray(c) && c.length !== 0,
							G = !!m?.recommendation?.enabled,
							h = G ? m?.recommendation?.component || 'Recommendation' : void 0,
							Q = G ? String(m?.recommendation?.resultComponent || 'Result') : void 0,
							ee = d?.templates?.library.import.component.recommendation.default || {},
							J = d?.templates?.library.import.component.result || {},
							{ ComponentOverride: ne, shouldWaitForNamedOverride: le } = (0, S.x)(ee, h),
							{ ComponentOverride: k, shouldWaitForNamedOverride: ae } = (0, S.x)(J, Q),
							u = ne,
							se = k;
						let p;
						if (G && d?.templates) {
							const V = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, m?.recommendation?.config);
							(V.id = V.id || `search-${V.tag}`),
								(p = (0, K.i)(d, 'recommendation', V)),
								!p?.store?.loaded && !p?.store?.loading && p?.store.error?.type !== 'error' && p?.search();
						}
						const re = u,
							ie = se,
							ce = {
								suggestionsTitleText: { value: t },
								suggestionsList: {
									value: `${a ? a.map((V) => `<li class="ss__no-results__suggestions__list__option">${V}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: y },
								contactsList: {
									value: `${
										c
											? c
													.map(
														(V) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${$.p(
																V.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																V.title
															}</h4><p class="ss__no-results__contact__detail__content">${V.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							de = f()(ce, B.lang || {}),
							me = (0, F.u)(de, { controller: o });
						return (0, s.FD)('div', {
							className: C()('ss__no-results', _, z),
							...q,
							children: [
								l &&
									(typeof l == 'string'
										? (0, s.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: l } })
										: (0, s.Y)('div', { className: 'ss__no-results__slot', children: (0, P.Y)(l, { controller: o, treePath: X }) })),
								!n &&
									(t || oe) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											t && !r && (0, s.Y)('h3', { className: 'ss__no-results__suggestions__title', ...me.suggestionsTitleText?.all }),
											oe && (0, s.Y)('ul', { className: 'ss__no-results__suggestions__list', ...me.suggestionsList?.all }),
										],
									}),
								!i &&
									(y || Z) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											y && !v && (0, s.Y)('h3', { className: 'ss__no-results__contact__title', ...me.contactsTitleText?.all }),
											Z && (0, s.Y)('div', { ...me.contactsList?.all }),
										],
									}),
								re && p?.store?.loaded && !le && !ae
									? (0, s.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, s.Y)(re, {
												controller: p,
												title: p.store?.profile?.display?.templateParameters?.title,
												resultComponent: ie,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(te, L, e) {
				e.d(L, { n: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/classnames/index.js'),
					C = e.n(g),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(D),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					j = e('./components/src/components/Molecules/Result/Result.tsx'),
					U = e('./components/src/types.ts'),
					$ = e('./components/src/utilities/cloneWithProps.tsx'),
					K = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					F = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/withTracking.tsx'),
					I = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/hooks/useDisplaySettings.tsx'),
					W = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					d = e('./components/src/hooks/useComponent.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = ({ gapSize: t, columns: r }) =>
						(0, O.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: t,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${r}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / r}% - (${r - 1} * ${t} / ${r} ) )`,
								marginRight: t,
								marginBottom: t,
								[`&:nth-of-type(${r}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${r})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					B = (0, A.W)(j.Q),
					l = (0, T.PA)((t) => {
						const r = (0, S.u)(),
							v = (0, I.uk)(),
							a = (0, x.LU)(),
							i = {
								0: { columns: t.columns || 1 },
								540: { columns: t.columns || 2 },
								768: { columns: t.columns || 3 },
								991: { columns: t.columns || 4 },
							},
							y = { results: t.controller?.store?.results, columns: 4, gapSize: '20px', layout: U.V.grid, breakpoints: i, treePath: a };
						let n = (0, Y.v6)('results', r, y, t);
						if (!(t.theme?.type == 'templates' || r?.type == 'templates')) {
							const u = (0, H.X)(n?.breakpoints || {}),
								se = R()(n?.theme || {}, u?.theme || {}, { arrayMerge: (p, re) => re });
							n = { ...n, ...u, theme: se };
						}
						const { disableStyles: c, className: o, internalClassName: m, layout: _, theme: z, excludeBanners: X, controller: N, treePath: w } = n,
							q = n.resultComponent,
							{ overrideElement: oe, shouldRenderDefault: Z } = (0, M._)('results', n);
						if (!Z) return oe;
						const G = typeof q == 'string',
							h = G ? q : '',
							Q = v?.templates?.library.import.component.result || {},
							{ ComponentOverride: ee, shouldWaitForNamedOverride: J } = (0, d.x)(Q, G ? h : void 0),
							ne = G ? ee : q,
							le = {
								result: { internalClassName: 'ss__results__result', ...(0, K.s)({ disableStyles: c }), theme: n?.theme, treePath: w },
								inlineBanner: {
									controller: N,
									internalClassName: 'ss__results__inline-banner',
									...(0, K.s)({ disableStyles: c }),
									theme: n?.theme,
									treePath: w,
								},
							};
						let k = X ? n.results?.filter((u) => u.type !== E.c.BANNER) : n.results;
						n?.columns && n?.rows && n.columns > 0 && n.rows > 0 && (k = k?.slice(0, n.columns * n.rows));
						const ae = (0, f.Z)({ ...n, columns: _ == U.V.list ? 1 : n.columns }, b);
						return k?.length
							? (0, s.Y)(F._, {
									children: (0, s.Y)('div', {
										...ae,
										className: C()('ss__results', `ss__results-${n.layout}`, o, m),
										children: k.map((u) =>
											u.type === E.c.BANNER
												? (0, O.n)(P._, { ...le.inlineBanner, key: u.id, banner: u, layout: n.layout })
												: J
												? null
												: ne && N
												? (0, s.Y)(W.o, {
														result: u,
														controller: N,
														children: (0, $.Y)(ne, { key: u.id, controller: N, result: u, theme: z, treePath: w }),
												  })
												: (0, s.Y)(B, { ...le.result, result: u, layout: n.layout, controller: N }, u.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Sidebar/Sidebar.tsx'(te, L, e) {
				e.d(L, { B: () => A });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					g = e.n(T),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					U = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/components/Organisms/Layout/Layout.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(K),
					f = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const S = ({ stickyOffset: I }) =>
						(0, O.AH)({ '&.ss__sidebar--sticky': { position: 'sticky', top: I || 0 }, '& .ss__facets': { width: '100%' } }),
					A = (0, C.PA)((I) => {
						const x = (0, R.u)(),
							W = { titleText: 'Filters', treePath: (0, E.LU)(), layout: [['filterSummary'], ['sortBy', 'perPage'], ['facets'], ['banner.left']] },
							d = (0, j.v6)('sidebar', x, W, I),
							{
								controller: M,
								layout: b,
								hideTitleText: B,
								titleText: l,
								sticky: t,
								disableStyles: r,
								className: v,
								internalClassName: a,
								treePath: i,
							} = d,
							{ overrideElement: y, shouldRenderDefault: n } = (0, F._)('sidebar', d);
						if (!n) return y;
						const c = (0, U.Z)(d, S),
							o = { titleText: { value: l } },
							m = Y()(o, d.lang || {}),
							_ = (0, f.u)(m, { controller: M }),
							z = { Layout: { ...(0, P.s)({ disableStyles: r }), theme: d.theme, treePath: i } },
							X = b?.length;
						return M?.store?.loaded && M?.store?.pagination?.totalResults > 0 && X
							? (0, s.Y)(D._, {
									children: (0, s.FD)('div', {
										...c,
										className: g()('ss__sidebar', v, a, { 'ss__sidebar--sticky': t }),
										children: [
											B
												? (0, s.Y)(s.FK, {})
												: (0, s.Y)('h4', {
														className: g()('ss__sidebar__title'),
														'aria-atomic': 'true',
														'aria-live': 'polite',
														..._.titleText.all,
														children: l,
												  }),
											(0, s.Y)('div', { className: g()('ss__sidebar__inner'), children: (0, s.Y)($.P, { controller: M, layout: b, ...z.Layout }) }),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(te, L, e) {
				e.d(L, { M: () => f });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					g = e.n(T),
					C = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					j = e('./components/src/utilities/defined.ts'),
					U = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const Y = ({}) => (0, O.AH)({}),
					f = (0, C.PA)((F) => {
						const S = (0, R.u)(),
							I = { treePath: (0, E.LU)(), layout: ['mobileSidebar', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							x = (0, U.v6)('toolbar', S, I, F),
							{ controller: H, toggleSideBarButton: W, disableStyles: d, className: M, internalClassName: b, treePath: B, layout: l } = x,
							{ overrideElement: t, shouldRenderDefault: r } = (0, P._)('toolbar', x);
						if (!r) return t;
						const v = (0, $.Z)(x, Y),
							a = {
								Layout: {
									toggleSideBarButton: W,
									internalClassName: 'ss__toolbar__layout',
									...(0, j.s)({ disableStyles: d }),
									theme: x?.theme,
									treePath: B,
								},
							};
						return l?.length
							? (0, s.Y)(D._, {
									children: (0, s.Y)('div', {
										...v,
										className: g()('ss__toolbar', M, b),
										children: (0, s.Y)(K.P, { controller: H, layout: l, ...a.Layout }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Templates/Search/Search.tsx'(te, L, e) {
				e.d(L, { v: () => B });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					O = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					C = e('../../node_modules/classnames/index.js'),
					D = e.n(C),
					R = e('./components/src/components/Organisms/Results/Results.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					$ = e('./components/src/providers/treePath.tsx'),
					K = e('./components/src/providers/cache.tsx'),
					Y = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					f = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					F = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					S = e('./components/src/hooks/useMediaQuery.tsx'),
					A = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useA11y.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					H = e.n(x);
				const W = (l, t, r) => {
						const v = l.storage,
							i = v.get(t) || r || void 0,
							[y, n] = (0, O.J0)(i);
						return [
							y,
							(o) => {
								v.set(t, o), n(o);
							},
						];
					},
					d = (l, t) => {
						const r = l?.layoutOptions || [],
							v = (o, m) =>
								!o || !m
									? !1
									: o.value !== void 0 && m.value !== void 0
									? o.value === m.value
									: o.label !== void 0 && m.label !== void 0
									? o.label === m.label
									: !1,
							a = (o) => o && { value: o.value, label: o.label },
							[i, y] = W(l.controller, 'layoutOptions', a(r.filter((o) => o.default).pop()));
						if (!r.length) return;
						const n = r.find((o) => v(o, i));
						i && !n && y(a(r.filter((o) => o.default).pop())),
							(l.theme = l.theme || {}),
							(l.theme.components = {
								...(l.theme.components || {}),
								layoutSelector: {
									options: r,
									onSelect: (o, m) => {
										m && y(a(m));
									},
									selected: n,
								},
							});
						let c = !1;
						if (t.components && l.treePath) {
							const o = l.treePath.split(' ')[0];
							Object.keys(t.components).forEach((m) => {
								const _ = m.split(' '),
									z = _.splice(-1).pop() ?? '',
									[X] = z.split('.');
								if (
									t.components &&
									X == 'toolbar' &&
									(_[0] == o ||
										_[0] == `*${o}` ||
										_[0] == `*(M)${o}` ||
										_[0] == `*(T)${o}` ||
										_[0] == `*(D)${o}` ||
										_[0] == `(M)${o}` ||
										_[0] == `(T)${o}` ||
										_[0] == `(D)${o}` ||
										!_.length)
								) {
									const N = t.components[m];
									N?.layout && N.layout.toString().indexOf('layoutSelector') > -1 && (c = !0);
								}
							});
						}
						n?.overrides && c && (l.theme = H()(l.theme, { components: n.overrides.components }));
					};
				var M = e('./components/src/utilities/componentNameToClassName.ts');
				const b = (l) => {
						let t = 'ss__search';
						return (
							l.alias && (t = `ss__${(0, M.b)(l.alias)}`),
							(0, g.AH)({
								[`.${t}__header-section`]: { marginBottom: '20px' },
								[`.${t}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
								'.ss__sidebar': { flex: '0 1 auto', width: '270px', '&:empty': { display: 'none' } },
								[`.${t}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
							})
						);
					},
					B = (0, T.PA)((l) => {
						const t = (0, U.u)(),
							r = (0, $.LU)(),
							v = {
								toggleSidebarButtonText: 'Filters',
								hideToggleSidebarButton: !0,
								mobileDisplayAt: t?.variables?.breakpoints?.tablet ? `${t.variables?.breakpoints?.tablet}px` : '991px',
								treePath: r,
							},
							a = (0, E.v6)(l.alias || 'search', t, v, l),
							{
								disableStyles: i,
								className: y,
								internalClassName: n,
								controller: c,
								hideSidebar: o,
								toggleSidebarButtonText: m,
								hideTopToolbar: _,
								hideMiddleToolbar: z,
								hideBottomToolbar: X,
								resultComponent: N,
								hideToggleSidebarButton: w,
								mobileDisplayAt: q,
								toggleSidebarStartClosed: oe,
								treePath: Z,
								alias: G,
							} = a;
						let h = 'ss__search';
						a.alias && (h = `ss__${(0, M.b)(a.alias)}`), d(a, t);
						const Q = c.store,
							ee = (0, S.U)(`(max-width: ${q})`),
							[J, ne] = (0, O.J0)(G !== 'searchHorizontal' && !oe),
							le = { toggleSidebarButtonText: { value: m } },
							k = H()(le, a.lang || {}),
							ae = (0, A.u)(k, { filters: Q.filters, sidebarOpenState: J }),
							u = () =>
								(0, s.Y)('div', {
									className: D()(`${h}__sidebar-toggle`, J ? `${h}__sidebar-toggle--open` : ''),
									active: J,
									children: (0, s.Y)('span', { ...ae.toggleSidebarButtonText.all }),
								}),
							se = {
								onClick: () => {
									ne(!J),
										setTimeout(() => {
											if (!J) {
												const ie = document.querySelector('.ss__sidebar')?.querySelector(I.DH);
												ie && ie.focus();
											}
										});
								},
								children: !w && Q.loaded && !ee && (m || ae.toggleSidebarButtonText?.value) ? u : void 0,
							},
							p = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${h}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_', 'button.sidebar-toggle']],
									toggleSideBarButton: { ...se },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: Z,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${h}__content__toolbar--middle-toolbar`,
									layout: ee
										? [['paginationInfo', '_'], ['mobileSidebar', '_', 'sortBy'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...se },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: Z,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${h}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...se },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: Z,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: Z },
								Results: { resultComponent: N, ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: Z },
								NoResults: { ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: Z },
							},
							re = (0, j.Z)(a, b);
						return (0, s.Y)(K._, {
							children: (0, s.FD)('div', {
								...re,
								className: D()(h, y, n, J ? `${h}--sidebar-open` : ''),
								children: [
									(0, s.Y)('div', { className: `${h}__header-section`, children: !_ && (0, s.Y)(f.M, { ...p.TopToolbar, controller: c }) }),
									(0, s.FD)('div', {
										className: `${h}__main-section`,
										children: [
											!o &&
												!ee &&
												J &&
												Q.loaded &&
												Q.pagination.totalResults > 0 &&
												(0, s.Y)('div', { className: `${h}__sidebar`, children: (0, s.Y)(Y.B, { ...p.Sidebar, controller: c }) }),
											(0, s.FD)('div', {
												className: D()(`${h}__content`),
												children: [
													!z && (0, s.Y)(f.M, { ...p.MiddleToolbar, controller: c }),
													Q.pagination.totalResults
														? (0, s.Y)(R.n, { ...p.Results, controller: c })
														: Q.pagination.totalResults === 0 && (0, s.Y)(F.a, { ...p.NoResults, controller: c }),
													!X && (0, s.Y)(f.M, { ...p.BottomToolbar, controller: c }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(te, L, e) {
				e.d(L, { i: () => O });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const O = (T, g, C) => {
					const [D, R] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							T.getController(C.id)
								.then((E) => {
									R(E);
								})
								.catch(() => {
									T.createController(g, C).then((E) => {
										R(E);
									});
								});
						}, []),
						D
					);
				};
			},
		},
	]);
})();

//# sourceMappingURL=5966.2804039f.iframe.bundle.js.map
