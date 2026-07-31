'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ae, W, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					I = e.n(R),
					f = e('./components/src/providers/cache.tsx'),
					M = e('./components/src/providers/controller.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/types.ts'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const k = ({ width: S }) =>
						(0, v.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: S,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					F = (0, M.Bk)(
						(0, O.W)(
							(0, Y.PA)((S) => {
								const w = (0, D.u)(),
									B = (0, P.LU)(),
									H = { layout: $.V.grid, width: 'auto', treePath: B },
									y = (0, X.v6)('inlineBanner', w, H, S),
									{ banner: g, className: J, internalClassName: q, disableA11y: A, layout: T, onClick: s } = y,
									{ overrideElement: n, shouldRenderDefault: r } = (0, b._)('inlineBanner', y);
								if (!r) return n;
								const m = (0, j.Z)(y, k);
								return g && g.value
									? (0, t.Y)(f._, {
											children: (0, t.Y)('div', {
												onClick: (a) => {
													s && s(a, g);
												},
												role: 'article',
												ref: (a) => {
													A || (0, G.iy)(a), S.trackingRef(a);
												},
												className: I()('ss__inline-banner', `ss__inline-banner--${T}`, J, q),
												...m,
												dangerouslySetInnerHTML: { __html: g.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(W, ['_', 0, F]);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(ae, W, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					I = e('../../node_modules/classnames/index.js'),
					f = e.n(I),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					$ = e('./components/src/hooks/useCreateController.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(Y),
					k = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					S = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({}) => (0, R.AH)({}),
					B = (0, v.PA)((H) => {
						const y = (0, M.u)(),
							g = (0, D.uk)(),
							J = (0, O.LU)(),
							q = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: J,
							},
							A = (0, X.v6)('noResults', y, q, H),
							{
								contentSlot: T,
								suggestionsTitleText: s,
								hideSuggestionsTitleText: n,
								hideContactsTitleText: r,
								suggestionsList: m,
								hideContact: a,
								contactsTitleText: i,
								hideSuggestions: l,
								contactsList: _,
								controller: u,
								templates: o,
								className: c,
								internalClassName: h,
								treePath: oe,
							} = A,
							{ overrideElement: U, shouldRenderDefault: Z } = (0, S._)('noResults', A);
						if (!Z) return U;
						const te = (0, j.Z)(A, w),
							se = m && Array.isArray(m) && m.length !== 0,
							ne = _ && Array.isArray(_) && _.length !== 0,
							E = !!o?.recommendation?.enabled,
							re = E ? o?.recommendation?.component || 'Recommendation' : void 0,
							d = E ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							Q = g?.templates?.library.import.component.recommendation.default || {},
							L = g?.templates?.library.import.component.result || {},
							{ ComponentOverride: C, shouldWaitForNamedOverride: K } = (0, F.x)(Q, re),
							{ ComponentOverride: ee, shouldWaitForNamedOverride: ie } = (0, F.x)(L, d),
							me = C,
							p = ee;
						let x;
						if (E && g?.templates) {
							const z = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, o?.recommendation?.config);
							(z.id = z.id || `search-${z.tag}`),
								(x = (0, $.i)(g, 'recommendation', z)),
								!x?.store?.loaded && !x?.store?.loading && x?.store.error?.type !== 'error' && x?.search();
						}
						const ce = me,
							le = p,
							V = {
								suggestionsTitleText: { value: s },
								suggestionsList: {
									value: `${m ? m.map((z) => `<li class="ss__no-results__suggestions__list__option">${z}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: i },
								contactsList: {
									value: `${
										_
											? _.map(
													(z) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${G.p(
															z.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															z.title
														}</h4><p class="ss__no-results__contact__detail__content">${z.content}</p></div>`
											  ).join('')
											: void 0
									}`,
								},
							},
							de = b()(V, A.lang || {}),
							N = (0, k.u)(de, { controller: u }, { activeBreakpoint: y?.activeBreakpoint });
						return (0, t.FD)('div', {
							className: f()('ss__no-results', c, h),
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
											s && !n && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...N.suggestionsTitleText?.all }),
											se && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...N.suggestionsList?.all }),
										],
									}),
								!a &&
									(i || ne) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											i && !r && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...N.contactsTitleText?.all }),
											ne && (0, t.Y)('div', { ...N.contactsList?.all }),
										],
									}),
								ce && x?.store?.loaded && !K && !ie
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
				e.d(W, ['a', 0, B]);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ae, W, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('../../node_modules/classnames/index.js'),
					f = e.n(I),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(M),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					X = e('./components/src/components/Molecules/Result/Result.tsx'),
					j = e('./components/src/types.ts'),
					G = e('./components/src/utilities/cloneWithProps.tsx'),
					$ = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					k = e('./components/src/providers/cache.tsx'),
					F = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = e('./components/src/providers/withTracking.tsx'),
					w = e('./components/src/providers/snap.tsx'),
					B = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/hooks/useDisplaySettings.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					g = e('./components/src/hooks/useComponent.tsx'),
					J = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const q = ({ gapSize: s, columns: n }) =>
						(0, v.AH)({
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
					A = (0, S.W)(X.Q),
					T = (0, R.PA)((s) => {
						const n = (0, F.u)(),
							r = (0, w.uk)(),
							m = (0, B.LU)(),
							a = {
								0: { columns: s.columns || 1 },
								540: { columns: s.columns || 2 },
								768: { columns: s.columns || 3 },
								991: { columns: s.columns || 4 },
							},
							i = { results: s.controller?.store?.results, columns: 4, gapSize: '20px', layout: j.V.grid, breakpoints: a, treePath: m };
						let l = (0, Y.v6)('results', n, i, s);
						if (!(s.theme?.type == 'templates' || n?.type == 'templates')) {
							const p = (0, H.X)(l?.breakpoints || {}),
								x = D()(l?.theme || {}, p?.theme || {}, { arrayMerge: (ce, le) => le });
							l = { ...l, ...p, theme: x };
						}
						const { disableStyles: _, className: u, internalClassName: o, layout: c, theme: h, excludeBanners: oe, controller: U, treePath: Z } = l,
							te = l.resultComponent,
							{ overrideElement: se, shouldRenderDefault: ne } = (0, J._)('results', l);
						if (!ne) return se;
						const E = typeof te == 'string',
							re = E ? te : '',
							d = r?.templates?.library.import.component.result || {},
							{ ComponentOverride: Q, shouldWaitForNamedOverride: L } = (0, g.x)(d, E ? re : void 0),
							C = E ? Q : te,
							K = {
								result: { internalClassName: 'ss__results__result', ...(0, $.s)({ disableStyles: _ }), theme: l?.theme, treePath: Z },
								inlineBanner: {
									controller: U,
									internalClassName: 'ss__results__inline-banner',
									...(0, $.s)({ disableStyles: _ }),
									theme: l?.theme,
									treePath: Z,
								},
							};
						let ee = oe ? l.results?.filter((p) => p.type !== O.c.BANNER) : l.results;
						l?.columns && l?.rows && l.columns > 0 && l.rows > 0 && (ee = ee?.slice(0, l.columns * l.rows));
						const ie = (0, b.Z)({ ...l, columns: c == j.V.list ? 1 : l.columns }, q),
							me = E ? D()(h || {}, { components: { result: { customComponent: te } } }) : h;
						return ee?.length
							? (0, t.Y)(k._, {
									children: (0, t.Y)('div', {
										...ie,
										className: f()('ss__results', `ss__results-${l.layout}`, u, o),
										children: ee.map((p) =>
											p.type === O.c.BANNER
												? (0, v.n)(P._, { ...K.inlineBanner, key: p.id, banner: p, layout: l.layout })
												: L
												? null
												: C && U
												? (0, t.Y)(y.o, {
														result: p,
														controller: U,
														children: (0, G.Y)(C, { key: p.id, controller: U, result: p, theme: me, treePath: Z }),
												  })
												: (0, t.Y)(A, { ...K.result, result: p, layout: l.layout, controller: U }, p.id)
										),
									}),
							  })
							: null;
					});
				e.d(W, ['n', 0, T]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(ae, W, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					I = e.n(R),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					X = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const Y = ({}) => (0, v.AH)({}),
					b = (0, f.PA)((k) => {
						const F = (0, D.u)(),
							w = { treePath: (0, O.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							B = (0, j.v6)('toolbar', F, w, k),
							{ controller: H, toggleSideBarButton: y, disableStyles: g, className: J, internalClassName: q, treePath: A, layout: T } = B,
							{ overrideElement: s, shouldRenderDefault: n } = (0, P._)('toolbar', B);
						if (!n) return s;
						const r = (0, G.Z)(B, Y),
							m = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									...(0, X.s)({ toggleSideBarButton: y, disableStyles: g }),
									theme: B?.theme,
									treePath: A,
								},
							};
						return T?.length
							? (0, t.Y)(M._, {
									children: (0, t.Y)('div', {
										...r,
										className: I()('ss__toolbar', J, q),
										children: (0, t.Y)($.P, { controller: H, layout: T, ...m.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(W, ['M', 0, b]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(ae, W, e) {
				e.d(W, { v: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					M = e.n(f),
					D = e('./components/src/components/Organisms/Results/Results.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					$ = e('./components/src/providers/cache.tsx'),
					Y = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					b = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					k = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					F = e('./components/src/hooks/useMediaQuery.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useA11y.tsx'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					H = e.n(B);
				const y = (s, n, r) => {
						const m = s.storage,
							i = m.get(n) || r || void 0,
							[l, _] = (0, v.J0)(i);
						return [
							l,
							(o) => {
								m.set(n, o), _(o);
							},
						];
					},
					g = (s, n) => {
						const r = s?.layoutOptions || [],
							m = (o, c) =>
								!o || !c
									? !1
									: o.value !== void 0 && c.value !== void 0
									? o.value === c.value
									: o.label !== void 0 && c.label !== void 0
									? o.label === c.label
									: !1,
							a = (o) => o && { value: o.value, label: o.label },
							[i, l] = y(s.controller, 'layoutOptions', a(r.filter((o) => o.default).pop()));
						if (!r.length) return;
						const _ = r.find((o) => m(o, i));
						i && !_ && l(a(r.filter((o) => o.default).pop())),
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
								const h = c.split(' '),
									oe = h.splice(-1).pop() ?? '',
									[U] = oe.split('.');
								if (
									n.components &&
									U == 'toolbar' &&
									(h[0] == o ||
										h[0] == `*${o}` ||
										h[0] == `*(M)${o}` ||
										h[0] == `*(T)${o}` ||
										h[0] == `*(D)${o}` ||
										h[0] == `(M)${o}` ||
										h[0] == `(T)${o}` ||
										h[0] == `(D)${o}` ||
										!h.length)
								) {
									const Z = n.components[c];
									Z?.layout && Z.layout.toString().indexOf('layoutSelector') > -1 && (u = !0);
								}
							});
						}
						_?.overrides && u && (s.theme = H()(s.theme, { components: _.overrides.components }));
					};
				var J = e('./components/src/utilities/componentNameToClassName.ts'),
					q = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
				const A = (s) => {
						let n = 'ss__search';
						s.alias && (n = `ss__${(0, J.b)(s.alias)}`);
						const r = s.mobileDisplayAt
							? typeof s.mobileDisplayAt == 'boolean'
								? '(min-width: 0px)'
								: `(max-width: ${s.mobileDisplayAt})`
							: '(max-width: 0px)';
						return (0, I.AH)({
							[`.${n}__header-section`]: { marginBottom: '20px' },
							[`.${n}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: s.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${r}`]: { width: '100%' } },
							[`.${n}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						});
					},
					T = (0, R.PA)((s) => {
						const n = (0, j.u)(),
							r = (0, G.LU)(),
							m = {
								toggleSidebarButtonText: 'Filters',
								sidebarWidth: '270px',
								mobileDisplayAt: n?.variables?.breakpoints?.tablet ? `${n.variables?.breakpoints?.tablet}px` : '991px',
								treePath: r,
							},
							a = (0, O.v6)(s.alias || 'search', n, m, s),
							{
								disableStyles: i,
								className: l,
								internalClassName: _,
								controller: u,
								hideSidebar: o,
								toggleSidebarButtonText: c,
								hideTopToolbar: h,
								hideMiddleToolbar: oe,
								hideBottomToolbar: U,
								resultComponent: Z,
								hideToggleSidebarButton: te,
								mobileDisplayAt: se,
								toggleSidebarStartClosed: ne,
								treePath: E,
								alias: re,
							} = a;
						let d = 'ss__search';
						a.alias && (d = `ss__${(0, J.b)(a.alias)}`), g(a, n);
						const Q = u.store,
							L = (0, F.U)(se ? (typeof se == 'boolean' ? '(min-width: 0px)' : `(max-width: ${se})`) : '(max-width: 0px)'),
							[C, K] = (0, v.J0)(re !== 'searchHorizontal' && !ne && !L),
							ee = (0, v.li)(L),
							ie = L && !ee.current;
						(0, v.vJ)(() => {
							ee.current = L;
						}),
							(0, v.vJ)(() => {
								K(L ? !1 : !ne);
							}, [L]);
						const me = { toggleSidebarButtonText: { value: c } },
							p = H()(me, a.lang || {}),
							x = (0, S.u)(p, { filters: Q.filters, sidebarOpenState: C }, { activeBreakpoint: n?.activeBreakpoint }),
							ce = () =>
								(0, t.Y)('div', {
									className: M()(`${d}__sidebar-toggle`, C ? `${d}__sidebar-toggle--open` : ''),
									active: C,
									children: (0, t.Y)('span', { ...x.toggleSidebarButtonText.all }),
								}),
							le = {
								onClick: () => {
									K(!C),
										setTimeout(() => {
											if (!C) {
												const N = document.querySelector('.ss__sidebar')?.querySelector(w.DH);
												N && N.focus();
											}
										});
								},
								children: !te && Q.loaded && (c || x.toggleSidebarButtonText?.value) ? ce : void 0,
							},
							V = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${d}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: E,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${d}__content__toolbar--middle-toolbar`,
									layout: L
										? [['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
										: [['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: E,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${d}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...le },
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: E,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: E },
								MobileSidebar: {
									layout: [['filterSummary'], ['facets'], ['banner.left']],
									hideApplyButton: !1,
									hideClearButton: !1,
									hideCloseButton: !1,
									onToggleSidebar: () => K((N) => !N),
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: `${E} slideout`,
								},
								Results: { resultComponent: Z, ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: E },
								NoResults: { ...(0, P.s)({ disableStyles: i }), theme: a.theme, treePath: E },
								Slideout: {
									width: a.sidebarWidth,
									internalClassName: `${d}__slideout`,
									onChange: (N) => K(N),
									...(0, P.s)({ disableStyles: i }),
									theme: a.theme,
									treePath: E,
								},
							},
							de = (0, X.Z)(a, A);
						return (0, t.Y)($._, {
							children: (0, t.FD)('div', {
								...de,
								className: M()(d, l, _, C ? `${d}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${d}__header-section`, children: !h && (0, t.Y)(b.M, { ...V.TopToolbar, controller: u }) }),
									(0, t.FD)('div', {
										className: `${d}__main-section`,
										children: [
											!o &&
												Q.loaded &&
												Q.pagination.totalResults > 0 &&
												(L
													? (0, t.Y)(q.S, {
															...V.Slideout,
															active: ie ? !1 : C,
															children: (0, t.Y)('div', {
																className: `${d}__sidebar`,
																children: (0, t.Y)(Y.B, { ...V.MobileSidebar, controller: u }),
															}),
													  })
													: C
													? (0, t.Y)('div', { className: `${d}__sidebar`, children: (0, t.Y)(Y.B, { ...V.Sidebar, controller: u }) })
													: null),
											(0, t.FD)('div', {
												className: M()(`${d}__content`),
												children: [
													!oe && (0, t.Y)(b.M, { ...V.MiddleToolbar, controller: u }),
													Q.pagination.totalResults
														? (0, t.Y)(D.n, { ...V.Results, controller: u })
														: Q.pagination.totalResults === 0 && (0, t.Y)(k.a, { ...V.NoResults, controller: u }),
													!U && (0, t.Y)(b.M, { ...V.BottomToolbar, controller: u }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(ae, W, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = (R, I, f) => {
					const [M, D] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							R.getController(f.id)
								.then((O) => {
									D(O);
								})
								.catch(() => {
									R.createController(I, f).then((O) => {
										D(O);
									});
								});
						}, []),
						M
					);
				};
				e.d(W, ['i', 0, v]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.bc714415.iframe.bundle.js.map
