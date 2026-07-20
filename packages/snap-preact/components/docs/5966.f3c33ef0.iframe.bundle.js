'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					W = e.n(R),
					f = e('./components/src/providers/cache.tsx'),
					D = e('./components/src/providers/controller.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					X = e('./components/src/hooks/useA11y.tsx'),
					N = e('./components/src/types.ts'),
					j = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const G = ({ width: U }) =>
						(0, p.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: U,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					$ = (0, D.Bk)(
						(0, O.W)(
							(0, j.PA)((U) => {
								const k = (0, M.u)(),
									y = (0, P.LU)(),
									Y = { layout: N.V.grid, width: 'auto', treePath: y },
									b = (0, z.v6)('inlineBanner', k, Y, U),
									{ banner: g, className: F, internalClassName: w, disableA11y: B, layout: T, onClick: s } = b,
									{ overrideElement: n, shouldRenderDefault: r } = (0, I._)('inlineBanner', b);
								if (!r) return n;
								const i = (0, K.Z)(b, G);
								return g && g.value
									? (0, t.Y)(f._, {
											children: (0, t.Y)('div', {
												onClick: (a) => {
													s && s(a, g);
												},
												role: 'article',
												ref: (a) => {
													B || (0, X.iy)(a), U.trackingRef(a);
												},
												className: W()('ss__inline-banner', `ss__inline-banner--${T}`, F, w),
												...i,
												dangerouslySetInnerHTML: { __html: g.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(L, ['_', 0, $]);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					f = e.n(W),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					z = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					X = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					N = e('./components/src/hooks/useCreateController.tsx'),
					j = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(j),
					G = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useComponent.tsx'),
					U = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const k = ({}) => (0, R.AH)({}),
					y = (0, p.PA)((Y) => {
						const b = (0, D.u)(),
							g = (0, M.uk)(),
							F = (0, O.LU)(),
							w = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: F,
							},
							B = (0, z.v6)('noResults', b, w, Y),
							{
								contentSlot: T,
								suggestionsTitleText: s,
								hideSuggestionsTitleText: n,
								hideContactsTitleText: r,
								suggestionsList: i,
								hideContact: a,
								contactsTitleText: m,
								hideSuggestions: l,
								contactsList: _,
								controller: u,
								templates: o,
								className: c,
								internalClassName: E,
								treePath: oe,
							} = B,
							{ overrideElement: S, shouldRenderDefault: H } = (0, U._)('noResults', B);
						if (!H) return S;
						const te = (0, K.Z)(B, k),
							se = i && Array.isArray(i) && i.length !== 0,
							ne = _ && Array.isArray(_) && _.length !== 0,
							v = !!o?.recommendation?.enabled,
							re = v ? o?.recommendation?.component || 'Recommendation' : void 0,
							d = v ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							J = g?.templates?.library.import.component.recommendation.default || {},
							A = g?.templates?.library.import.component.result || {},
							{ ComponentOverride: C, shouldWaitForNamedOverride: Z } = (0, $.x)(J, re),
							{ ComponentOverride: q, shouldWaitForNamedOverride: ie } = (0, $.x)(A, d),
							me = C,
							h = q;
						let x;
						if (v && g?.templates) {
							const V = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, o?.recommendation?.config);
							(V.id = V.id || `search-${V.tag}`),
								(x = (0, N.i)(g, 'recommendation', V)),
								!x?.store?.loaded && !x?.store?.loading && x?.store.error?.type !== 'error' && x?.search();
						}
						const ce = me,
							le = h,
							Q = {
								suggestionsTitleText: { value: s },
								suggestionsList: {
									value: `${i ? i.map((V) => `<li class="ss__no-results__suggestions__list__option">${V}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: m },
								contactsList: {
									value: `${
										_
											? _.map(
													(V) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${X.p(
															V.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															V.title
														}</h4><p class="ss__no-results__contact__detail__content">${V.content}</p></div>`
											  ).join('')
											: void 0
									}`,
								},
							},
							de = I()(Q, B.lang || {}),
							ee = (0, G.u)(de, { controller: u });
						return (0, t.FD)('div', {
							className: f()('ss__no-results', c, E),
							...te,
							children: [
								T &&
									(typeof T == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: T } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, P.Y)(T, { controller: u, treePath: oe }) })),
								!l &&
									(s || se) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											s && !n && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...ee.suggestionsTitleText?.all }),
											se && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...ee.suggestionsList?.all }),
										],
									}),
								!a &&
									(m || ne) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											m && !r && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...ee.contactsTitleText?.all }),
											ne && (0, t.Y)('div', { ...ee.contactsList?.all }),
										],
									}),
								ce && x?.store?.loaded && !Z && !ie
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(ce, {
												controller: x,
												title: x.store?.profile?.display?.templateParameters?.title,
												resultComponent: le,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
				e.d(L, ['a', 0, y]);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/classnames/index.js'),
					f = e.n(W),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(D),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					z = e('./components/src/components/Molecules/Result/Result.tsx'),
					K = e('./components/src/types.ts'),
					X = e('./components/src/utilities/cloneWithProps.tsx'),
					N = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/providers/cache.tsx'),
					$ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					U = e('./components/src/providers/withTracking.tsx'),
					k = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					Y = e('./components/src/hooks/useDisplaySettings.tsx'),
					b = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					g = e('./components/src/hooks/useComponent.tsx'),
					F = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({ gapSize: s, columns: n }) =>
						(0, p.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: s,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${n}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / n}% - (${n - 1} * ${s} / ${n} ) )`,
								marginRight: s,
								marginBottom: s,
								[`&:nth-of-type(${n}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${n})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					B = (0, U.W)(z.Q),
					T = (0, R.PA)((s) => {
						const n = (0, $.u)(),
							r = (0, k.uk)(),
							i = (0, y.LU)(),
							a = {
								0: { columns: s.columns || 1 },
								540: { columns: s.columns || 2 },
								768: { columns: s.columns || 3 },
								991: { columns: s.columns || 4 },
							},
							m = { results: s.controller?.store?.results, columns: 4, gapSize: '20px', layout: K.V.grid, breakpoints: a, treePath: i };
						let l = (0, j.v6)('results', n, m, s);
						if (!(s.theme?.type == 'templates' || n?.type == 'templates')) {
							const h = (0, Y.X)(l?.breakpoints || {}),
								x = M()(l?.theme || {}, h?.theme || {}, { arrayMerge: (ce, le) => le });
							l = { ...l, ...h, theme: x };
						}
						const { disableStyles: _, className: u, internalClassName: o, layout: c, theme: E, excludeBanners: oe, controller: S, treePath: H } = l,
							te = l.resultComponent,
							{ overrideElement: se, shouldRenderDefault: ne } = (0, F._)('results', l);
						if (!ne) return se;
						const v = typeof te == 'string',
							re = v ? te : '',
							d = r?.templates?.library.import.component.result || {},
							{ ComponentOverride: J, shouldWaitForNamedOverride: A } = (0, g.x)(d, v ? re : void 0),
							C = v ? J : te,
							Z = {
								result: { internalClassName: 'ss__results__result', ...(0, N.s)({ disableStyles: _ }), theme: l?.theme, treePath: H },
								inlineBanner: {
									controller: S,
									internalClassName: 'ss__results__inline-banner',
									...(0, N.s)({ disableStyles: _ }),
									theme: l?.theme,
									treePath: H,
								},
							};
						let q = oe ? l.results?.filter((h) => h.type !== O.c.BANNER) : l.results;
						l?.columns && l?.rows && l.columns > 0 && l.rows > 0 && (q = q?.slice(0, l.columns * l.rows));
						const ie = (0, I.Z)({ ...l, columns: c == K.V.list ? 1 : l.columns }, w),
							me = v ? M()(E || {}, { components: { result: { customComponent: te } } }) : E;
						return q?.length
							? (0, t.Y)(G._, {
									children: (0, t.Y)('div', {
										...ie,
										className: f()('ss__results', `ss__results-${l.layout}`, u, o),
										children: q.map((h) =>
											h.type === O.c.BANNER
												? (0, p.n)(P._, { ...Z.inlineBanner, key: h.id, banner: h, layout: l.layout })
												: A
												? null
												: C && S
												? (0, t.Y)(b.o, {
														result: h,
														controller: S,
														children: (0, X.Y)(C, { key: h.id, controller: S, result: h, theme: me, treePath: H }),
												  })
												: (0, t.Y)(B, { ...Z.result, result: h, layout: l.layout, controller: S }, h.id)
										),
									}),
							  })
							: null;
					});
				e.d(L, ['n', 0, T]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					W = e.n(R),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					z = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const j = ({}) => (0, p.AH)({}),
					I = (0, f.PA)((G) => {
						const $ = (0, M.u)(),
							k = { treePath: (0, O.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							y = (0, K.v6)('toolbar', $, k, G),
							{ controller: Y, toggleSideBarButton: b, disableStyles: g, className: F, internalClassName: w, treePath: B, layout: T } = y,
							{ overrideElement: s, shouldRenderDefault: n } = (0, P._)('toolbar', y);
						if (!n) return s;
						const r = (0, X.Z)(y, j),
							i = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									...(0, z.s)({ toggleSideBarButton: b, disableStyles: g }),
									theme: y?.theme,
									treePath: B,
								},
							};
						return T?.length
							? (0, t.Y)(D._, {
									children: (0, t.Y)('div', {
										...r,
										className: W()('ss__toolbar', F, w),
										children: (0, t.Y)(N.P, { controller: Y, layout: T, ...i.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(L, ['M', 0, I]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(ae, L, e) {
				e.d(L, { v: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					D = e.n(f),
					M = e('./components/src/components/Organisms/Results/Results.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/defined.ts'),
					z = e('./components/src/utilities/mergeStyles.ts'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					N = e('./components/src/providers/cache.tsx'),
					j = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					I = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					G = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					$ = e('./components/src/hooks/useMediaQuery.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					Y = e.n(y);
				const b = (s, n, r) => {
						const i = s.storage,
							m = i.get(n) || r || void 0,
							[l, _] = (0, p.J0)(m);
						return [
							l,
							(o) => {
								i.set(n, o), _(o);
							},
						];
					},
					g = (s, n) => {
						const r = s?.layoutOptions || [],
							i = (o, c) =>
								!o || !c
									? !1
									: o.value !== void 0 && c.value !== void 0
									? o.value === c.value
									: o.label !== void 0 && c.label !== void 0
									? o.label === c.label
									: !1,
							a = (o) => o && { value: o.value, label: o.label },
							[m, l] = b(s.controller, 'layoutOptions', a(r.filter((o) => o.default).pop()));
						if (!r.length) return;
						const _ = r.find((o) => i(o, m));
						m && !_ && l(a(r.filter((o) => o.default).pop())),
							(s.theme = s.theme || {}),
							(s.theme.components = {
								...(s.theme.components || {}),
								layoutSelector: {
									options: r,
									onSelect: (o, c) => {
										c && l(a(c));
									},
									selected: _,
								},
							});
						let u = !1;
						if (n.components && s.treePath) {
							const o = s.treePath.split(' ')[0];
							Object.keys(n.components).forEach((c) => {
								const E = c.split(' '),
									oe = E.splice(-1).pop() ?? '',
									[S] = oe.split('.');
								if (
									n.components &&
									S == 'toolbar' &&
									(E[0] == o ||
										E[0] == `*${o}` ||
										E[0] == `*(M)${o}` ||
										E[0] == `*(T)${o}` ||
										E[0] == `*(D)${o}` ||
										E[0] == `(M)${o}` ||
										E[0] == `(T)${o}` ||
										E[0] == `(D)${o}` ||
										!E.length)
								) {
									const H = n.components[c];
									H?.layout && H.layout.toString().indexOf('layoutSelector') > -1 && (u = !0);
								}
							});
						}
						_?.overrides && u && (s.theme = Y()(s.theme, { components: _.overrides.components }));
					};
				var F = e('./components/src/utilities/componentNameToClassName.ts'),
					w = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
				const B = (s) => {
						let n = 'ss__search';
						s.alias && (n = `ss__${(0, F.b)(s.alias)}`);
						const r = s.mobileDisplayAt
							? typeof s.mobileDisplayAt == 'boolean'
								? '(min-width: 0px)'
								: `(max-width: ${s.mobileDisplayAt})`
							: '(max-width: 0px)';
						return (0, W.AH)({
							[`.${n}__header-section`]: { marginBottom: '20px' },
							[`.${n}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: s.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${r}`]: { width: '100%' } },
							[`.${n}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						});
					},
					T = (0, R.PA)((s) => {
						const n = (0, K.u)(),
							r = (0, X.LU)(),
							i = {
								toggleSidebarButtonText: 'Filters',
								sidebarWidth: '270px',
								mobileDisplayAt: n?.variables?.breakpoints?.tablet ? `${n.variables?.breakpoints?.tablet}px` : '991px',
								treePath: r,
							},
							a = (0, O.v6)(s.alias || 'search', n, i, s),
							{
								disableStyles: m,
								className: l,
								internalClassName: _,
								controller: u,
								hideSidebar: o,
								toggleSidebarButtonText: c,
								hideTopToolbar: E,
								hideMiddleToolbar: oe,
								hideBottomToolbar: S,
								resultComponent: H,
								hideToggleSidebarButton: te,
								mobileDisplayAt: se,
								toggleSidebarStartClosed: ne,
								treePath: v,
								alias: re,
							} = a;
						let d = 'ss__search';
						a.alias && (d = `ss__${(0, F.b)(a.alias)}`), g(a, n);
						const J = u.store,
							A = (0, $.U)(se ? (typeof se == 'boolean' ? '(min-width: 0px)' : `(max-width: ${se})`) : '(max-width: 0px)'),
							[C, Z] = (0, p.J0)(re !== 'searchHorizontal' && !ne && !A),
							q = (0, p.li)(A),
							ie = A && !q.current;
						(0, p.vJ)(() => {
							q.current = A;
						}),
							(0, p.vJ)(() => {
								Z(A ? !1 : !ne);
							}, [A]);
						const me = { toggleSidebarButtonText: { value: c } },
							h = Y()(me, a.lang || {}),
							x = (0, U.u)(h, { filters: J.filters, sidebarOpenState: C }),
							ce = () =>
								(0, t.Y)('div', {
									className: D()(`${d}__sidebar-toggle`, C ? `${d}__sidebar-toggle--open` : ''),
									active: C,
									children: (0, t.Y)('span', { ...x.toggleSidebarButtonText.all }),
								}),
							le = {
								onClick: () => {
									Z(!C),
										setTimeout(() => {
											if (!C) {
												const ee = document.querySelector('.ss__sidebar')?.querySelector(k.DH);
												ee && ee.focus();
											}
										});
								},
								children: !te && J.loaded && (c || x.toggleSidebarButtonText?.value) ? ce : void 0,
							},
							Q = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${d}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: m }),
									theme: a.theme,
									treePath: v,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${d}__content__toolbar--middle-toolbar`,
									layout: A
										? [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: m }),
									theme: a.theme,
									treePath: v,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${d}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: m }),
									theme: a.theme,
									treePath: v,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, P.s)({ disableStyles: m }), theme: a.theme, treePath: v },
								Results: { resultComponent: H, ...(0, P.s)({ disableStyles: m }), theme: a.theme, treePath: v },
								NoResults: { ...(0, P.s)({ disableStyles: m }), theme: a.theme, treePath: v },
								Slideout: {
									width: a.sidebarWidth,
									internalClassName: `${d}__slideout`,
									onChange: (ee) => Z(ee),
									...(0, P.s)({ disableStyles: m }),
									theme: a.theme,
									treePath: v,
								},
							},
							de = (0, z.Z)(a, B);
						return (0, t.Y)(N._, {
							children: (0, t.FD)('div', {
								...de,
								className: D()(d, l, _, C ? `${d}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${d}__header-section`, children: !E && (0, t.Y)(I.M, { ...Q.TopToolbar, controller: u }) }),
									(0, t.FD)('div', {
										className: `${d}__main-section`,
										children: [
											!o &&
												J.loaded &&
												J.pagination.totalResults > 0 &&
												(A
													? (0, t.Y)(w.S, {
															...Q.Slideout,
															active: ie ? !1 : C,
															children: (0, t.Y)('div', { className: `${d}__sidebar`, children: (0, t.Y)(j.B, { ...Q.Sidebar, controller: u }) }),
													  })
													: C
													? (0, t.Y)('div', { className: `${d}__sidebar`, children: (0, t.Y)(j.B, { ...Q.Sidebar, controller: u }) })
													: null),
											(0, t.FD)('div', {
												className: D()(`${d}__content`),
												children: [
													!oe && (0, t.Y)(I.M, { ...Q.MiddleToolbar, controller: u }),
													J.pagination.totalResults
														? (0, t.Y)(M.n, { ...Q.Results, controller: u })
														: J.pagination.totalResults === 0 && (0, t.Y)(G.a, { ...Q.NoResults, controller: u }),
													!S && (0, t.Y)(I.M, { ...Q.BottomToolbar, controller: u }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(ae, L, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = (R, W, f) => {
					const [D, M] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							R.getController(f.id)
								.then((O) => {
									M(O);
								})
								.catch(() => {
									R.createController(W, f).then((O) => {
										M(O);
									});
								});
						}, []),
						D
					);
				};
				e.d(L, ['i', 0, p]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.f3c33ef0.iframe.bundle.js.map
