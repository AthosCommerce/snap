'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(re, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					L = e.n(T),
					O = e('./components/src/providers/cache.tsx'),
					C = e('./components/src/providers/controller.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/withTracking.tsx'),
					r = e('./components/src/providers/treePath.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					G = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/types.ts'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const k = ({ width: N }) =>
						(0, P.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: N,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					F = (0, C.Bk)(
						(0, M.W)(
							(0, Y.PA)((N) => {
								const w = (0, x.u)(),
									b = (0, r.LU)(),
									H = { layout: $.V.grid, width: 'auto', treePath: b },
									I = (0, X.v6)('inlineBanner', w, H, N),
									{ banner: D, className: J, internalClassName: q, disableA11y: W, layout: R, onClick: s } = I,
									{ overrideElement: n, shouldRenderDefault: c } = (0, K._)('inlineBanner', I);
								if (!c) return n;
								const d = (0, j.Z)(I, k);
								return D && D.value
									? (0, t.Y)(O._, {
											children: (0, t.Y)('div', {
												onClick: (l) => {
													s && s(l, D);
												},
												role: 'article',
												ref: (l) => {
													W || (0, G.iy)(l), N.trackingRef(l);
												},
												className: L()('ss__inline-banner', `ss__inline-banner--${R}`, J, q),
												...d,
												dangerouslySetInnerHTML: { __html: D.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(U, ['_', 0, F]);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(re, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					L = e('../../node_modules/classnames/index.js'),
					O = e.n(L),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/utilities/cloneWithProps.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					$ = e('./components/src/hooks/useCreateController.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(Y),
					k = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					N = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({}) => (0, T.AH)({}),
					b = (0, P.PA)((H) => {
						const I = (0, C.u)(),
							D = (0, x.uk)(),
							J = (0, M.LU)(),
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
							W = (0, X.v6)('noResults', I, q, H),
							{
								contentSlot: R,
								suggestionsTitleText: s,
								hideSuggestionsTitleText: n,
								hideContactsTitleText: c,
								suggestionsList: d,
								hideContact: l,
								contactsTitleText: m,
								hideSuggestions: a,
								contactsList: u,
								controller: Z,
								templates: o,
								className: h,
								internalClassName: i,
								treePath: se,
							} = W,
							{ overrideElement: E, shouldRenderDefault: Q } = (0, N._)('noResults', W);
						if (!Q) return E;
						const ee = (0, j.Z)(W, w),
							te = d && Array.isArray(d) && d.length !== 0,
							oe = u && Array.isArray(u) && u.length !== 0,
							p = !!o?.recommendation?.enabled,
							ie = p ? o?.recommendation?.component || 'Recommendation' : void 0,
							f = p ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							_ = D?.templates?.library.import.component.recommendation.default || {},
							V = D?.templates?.library.import.component.result || {},
							{ ComponentOverride: y, shouldWaitForNamedOverride: B } = (0, F.x)(_, ie),
							{ ComponentOverride: A, shouldWaitForNamedOverride: ne } = (0, F.x)(V, f),
							me = y,
							v = A;
						let S;
						if (p && D?.templates) {
							const g = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, o?.recommendation?.config);
							(g.id = g.id || `search-${g.tag}`),
								(S = (0, $.i)(D, 'recommendation', g)),
								!S?.store?.loaded && !S?.store?.loading && S?.store.error?.type !== 'error' && S?.search();
						}
						const le = me,
							ce = v,
							de = {
								suggestionsTitleText: { value: s },
								suggestionsList: {
									value: `${d ? d.map((g) => `<li class="ss__no-results__suggestions__list__option">${g}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: m },
								contactsList: {
									value: `${
										u
											? u
													.map(
														(g) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${G.p(
																g.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																g.title
															}</h4><p class="ss__no-results__contact__detail__content">${g.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							z = K()(de, W.lang || {}),
							ae = (0, k.u)(z, { controller: Z }, { activeBreakpoint: I?.activeBreakpoint });
						return (0, t.FD)('div', {
							className: O()('ss__no-results', h, i),
							...ee,
							children: [
								R &&
									(typeof R == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: R } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, r.Y)(R, { controller: Z, treePath: se }) })),
								!a &&
									(s || te) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											s && !n && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...ae.suggestionsTitleText?.all }),
											te && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...ae.suggestionsList?.all }),
										],
									}),
								!l &&
									(m || oe) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											m && !c && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...ae.contactsTitleText?.all }),
											oe && (0, t.Y)('div', { ...ae.contactsList?.all }),
										],
									}),
								le && S?.store?.loaded && !B && !ne
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(le, {
												controller: S,
												title: S.store?.profile?.display?.templateParameters?.title,
												resultComponent: ce,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
				e.d(U, ['a', 0, b]);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(re, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('../../node_modules/classnames/index.js'),
					O = e.n(L),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(C),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					r = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					X = e('./components/src/components/Molecules/Result/Result.tsx'),
					j = e('./components/src/types.ts'),
					G = e('./components/src/utilities/cloneWithProps.tsx'),
					$ = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					K = e('./components/src/utilities/mergeStyles.ts'),
					k = e('./components/src/providers/cache.tsx'),
					F = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/withTracking.tsx'),
					w = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/hooks/useDisplaySettings.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					D = e('./components/src/hooks/useComponent.tsx'),
					J = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const q = ({ gapSize: s, columns: n }) =>
						(0, P.AH)({
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
					W = (0, N.W)(X.Q),
					R = (0, T.PA)((s) => {
						const n = (0, F.u)(),
							c = (0, w.uk)(),
							d = (0, b.LU)(),
							l = {
								0: { columns: s.columns || 1 },
								540: { columns: s.columns || 2 },
								768: { columns: s.columns || 3 },
								991: { columns: s.columns || 4 },
							},
							m = { results: s.controller?.store?.results, columns: 4, gapSize: '20px', layout: j.V.grid, breakpoints: l, treePath: d };
						let a = (0, Y.v6)('results', n, m, s);
						if (!(s.theme?.type == 'templates' || n?.type == 'templates')) {
							const v = (0, H.X)(a?.breakpoints || {}),
								S = x()(a?.theme || {}, v?.theme || {}, { arrayMerge: (le, ce) => ce });
							a = { ...a, ...v, theme: S };
						}
						const { disableStyles: u, className: Z, internalClassName: o, layout: h, theme: i, excludeBanners: se, controller: E, treePath: Q } = a,
							ee = a.resultComponent,
							{ overrideElement: te, shouldRenderDefault: oe } = (0, J._)('results', a);
						if (!oe) return te;
						const p = typeof ee == 'string',
							ie = p ? ee : '',
							f = c?.templates?.library.import.component.result || {},
							{ ComponentOverride: _, shouldWaitForNamedOverride: V } = (0, D.x)(f, p ? ie : void 0),
							y = p ? _ : ee,
							B = {
								result: { internalClassName: 'ss__results__result', ...(0, $.s)({ disableStyles: u }), theme: a?.theme, treePath: Q },
								inlineBanner: {
									controller: E,
									internalClassName: 'ss__results__inline-banner',
									...(0, $.s)({ disableStyles: u }),
									theme: a?.theme,
									treePath: Q,
								},
							};
						let A = se ? a.results?.filter((v) => v.type !== M.c.BANNER) : a.results;
						a?.columns && a?.rows && a.columns > 0 && a.rows > 0 && (A = A?.slice(0, a.columns * a.rows));
						const ne = (0, K.Z)({ ...a, columns: h == j.V.list ? 1 : a.columns }, q),
							me = p ? x()(i || {}, { components: { result: { customComponent: ee } } }) : i;
						return A?.length
							? (0, t.Y)(k._, {
									children: (0, t.Y)('div', {
										...ne,
										className: O()('ss__results', `ss__results-${a.layout}`, Z, o),
										children: A.map((v) =>
											v.type === M.c.BANNER
												? (0, P.n)(r._, { ...B.inlineBanner, key: `${E?.id ? `${E?.id}-` : ''}${v.id}`, banner: v, layout: a.layout })
												: V
												? null
												: y && E
												? (0, t.Y)(I.o, {
														result: v,
														controller: E,
														children: (0, G.Y)(y, { key: `${E?.id ? `${E?.id}-` : ''}${v.id}`, controller: E, result: v, theme: me, treePath: Q }),
												  })
												: (0, t.Y)(W, { ...B.result, result: v, layout: a.layout, controller: E }, `${E?.id ? `${E?.id}-` : ''}${v.id}`)
										),
									}),
							  })
							: null;
					});
				e.d(U, ['n', 0, R]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(re, U, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					L = e.n(T),
					O = e('../../node_modules/mobx-react-lite/es/index.js'),
					C = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					X = e('./components/src/utilities/defined.ts'),
					j = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					$ = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const Y = ({}) => (0, P.AH)({}),
					K = (0, O.PA)((k) => {
						const F = (0, x.u)(),
							w = { treePath: (0, M.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							b = (0, j.v6)('toolbar', F, w, k),
							{
								controller: H,
								toggleSideBarButton: I,
								disableStyles: D,
								className: J,
								internalClassName: q,
								treePath: W,
								layout: R,
								tabManager: s,
							} = b,
							{ overrideElement: n, shouldRenderDefault: c } = (0, r._)('toolbar', b);
						if (!c) return n;
						const d = (0, G.Z)(b, Y),
							l = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									tabManager: s,
									...(0, X.s)({ toggleSideBarButton: I, disableStyles: D }),
									theme: b?.theme,
									treePath: W,
								},
							};
						return R?.length
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...d,
										className: L()('ss__toolbar', J, q),
										children: (0, t.Y)($.P, { controller: H, layout: R, ...l.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(U, ['M', 0, K]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(re, U, e) {
				e.d(U, { v: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					C = e.n(O),
					x = e('./components/src/components/Organisms/Results/Results.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					$ = e('./components/src/providers/cache.tsx'),
					Y = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					K = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					k = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					F = e('./components/src/hooks/useMediaQuery.tsx'),
					N = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useA11y.tsx'),
					b = e('../../node_modules/deepmerge/dist/cjs.js'),
					H = e.n(b);
				const I = (s, n, c) => {
						const d = s.storage,
							m = d.get(n) || c || void 0,
							[a, u] = (0, P.J0)(m);
						return [
							a,
							(o) => {
								d.set(n, o), u(o);
							},
						];
					},
					D = (s, n) => {
						const c = s?.layoutOptions || [],
							d = (o, h) =>
								!o || !h
									? !1
									: o.value !== void 0 && h.value !== void 0
									? o.value === h.value
									: o.label !== void 0 && h.label !== void 0
									? o.label === h.label
									: !1,
							l = (o) => o && { value: o.value, label: o.label },
							[m, a] = I(s.controller, 'layoutOptions', l(c.filter((o) => o.default).pop()));
						if (!c.length) return;
						const u = c.find((o) => d(o, m));
						m && !u && a(l(c.filter((o) => o.default).pop())),
							(s.theme = s.theme || {}),
							(s.theme.components = {
								...(s.theme.components || {}),
								layoutSelector: {
									options: c,
									onSelect: (o, h) => {
										h && a(l(h));
									},
									selected: u,
								},
							});
						let Z = !1;
						if (n.components && s.treePath) {
							const o = s.treePath.split(' ')[0];
							Object.keys(n.components).forEach((h) => {
								const i = h.split(' '),
									se = i.splice(-1).pop() ?? '',
									[E] = se.split('.');
								if (
									n.components &&
									E == 'toolbar' &&
									(i[0] == o ||
										i[0] == `*${o}` ||
										i[0] == `*(M)${o}` ||
										i[0] == `*(T)${o}` ||
										i[0] == `*(D)${o}` ||
										i[0] == `(M)${o}` ||
										i[0] == `(T)${o}` ||
										i[0] == `(D)${o}` ||
										!i.length)
								) {
									const Q = n.components[h];
									Q?.layout && Q.layout.toString().indexOf('layoutSelector') > -1 && (Z = !0);
								}
							});
						}
						u?.overrides && Z && (s.theme = H()(s.theme, { components: u.overrides.components }));
					};
				var J = e('./components/src/utilities/componentNameToClassName.ts'),
					q = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
				const W = (s) => {
						let n = 'ss__search';
						s.alias && (n = `ss__${(0, J.b)(s.alias)}`);
						const c = s.mobileDisplayAt
							? typeof s.mobileDisplayAt == 'boolean'
								? '(min-width: 0px)'
								: `(max-width: ${s.mobileDisplayAt})`
							: '(max-width: 0px)';
						return (0, L.AH)({
							[`.${n}__header-section`]: { marginBottom: '20px' },
							[`.${n}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: s.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${c}`]: { width: '100%' } },
							[`.${n}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						});
					},
					R = (0, T.PA)((s) => {
						const n = (0, j.u)(),
							c = (0, G.LU)(),
							d = {
								toggleSidebarButtonText: 'Filters',
								sidebarWidth: '270px',
								mobileDisplayAt: n?.variables?.breakpoints?.tablet ? `${n.variables?.breakpoints?.tablet}px` : '991px',
								treePath: c,
							},
							l = (0, M.v6)(s.alias || 'search', n, d, s),
							{
								disableStyles: m,
								className: a,
								internalClassName: u,
								hideSidebar: Z,
								toggleSidebarButtonText: o,
								hideTopToolbar: h,
								tabManager: i,
								hideMiddleToolbar: se,
								hideBottomToolbar: E,
								resultComponent: Q,
								hideToggleSidebarButton: ee,
								mobileDisplayAt: te,
								toggleSidebarStartClosed: oe,
								treePath: p,
								alias: ie,
							} = l;
						let f = l.controller,
							_ = 'ss__search';
						l.alias && (_ = `ss__${(0, J.b)(l.alias)}`), D(l, n), i && i.active && (f = i.active?.controller);
						const V = f.store,
							y = (0, F.U)(te ? (typeof te == 'boolean' ? '(min-width: 0px)' : `(max-width: ${te})`) : '(max-width: 0px)'),
							[B, A] = (0, P.J0)(ie !== 'searchHorizontal' && !oe && !y),
							ne = (0, P.li)(y),
							me = y && !ne.current;
						(0, P.vJ)(() => {
							ne.current = y;
						}),
							(0, P.vJ)(() => {
								A(y ? !1 : !oe);
							}, [y]);
						const v = { toggleSidebarButtonText: { value: o } },
							S = H()(v, l.lang || {}),
							le = (0, N.u)(S, { filters: V.filters, sidebarOpenState: B }, { activeBreakpoint: n?.activeBreakpoint }),
							ce = () =>
								(0, t.Y)('div', {
									className: C()(`${_}__sidebar-toggle`, B ? `${_}__sidebar-toggle--open` : ''),
									active: B,
									children: (0, t.Y)('span', { ...le.toggleSidebarButtonText.all }),
								}),
							de = {
								onClick: () => {
									A(!B),
										setTimeout(() => {
											if (!B) {
												const g = document.querySelector('.ss__sidebar')?.querySelector(w.DH);
												g && g.focus();
											}
										});
								},
								children: !ee && V.loaded && (o || le.toggleSidebarButtonText?.value) ? ce : void 0,
							},
							z = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${_}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_']],
									toggleSideBarButton: { ...de },
									tabManager: i,
									...(0, r.s)({ disableStyles: m }),
									theme: l.theme,
									treePath: p,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${_}__content__toolbar--middle-toolbar`,
									layout: y
										? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
										: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...de },
									tabManager: i,
									...(0, r.s)({ disableStyles: m }),
									theme: l.theme,
									treePath: p,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${_}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...de },
									tabManager: i,
									...(0, r.s)({ disableStyles: m }),
									theme: l.theme,
									treePath: p,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, r.s)({ disableStyles: m }), theme: l.theme, treePath: p },
								MobileSidebar: {
									layout: [['filterSummary'], ['facets'], ['banner.left']],
									hideApplyButton: !1,
									hideClearButton: !1,
									hideCloseButton: !1,
									onToggleSidebar: () => A((g) => !g),
									...(0, r.s)({ disableStyles: m }),
									theme: l.theme,
									treePath: `${p} slideout`,
								},
								Results: { resultComponent: Q, ...(0, r.s)({ disableStyles: m }), theme: l.theme, treePath: p },
								NoResults: { ...(0, r.s)({ disableStyles: m }), theme: l.theme, treePath: p },
								Slideout: {
									width: l.sidebarWidth,
									internalClassName: `${_}__slideout`,
									onChange: (g) => A(g),
									...(0, r.s)({ disableStyles: m }),
									theme: l.theme,
									treePath: p,
								},
							},
							ae = (0, X.Z)(l, W);
						return (0, t.Y)($._, {
							children: (0, t.FD)('div', {
								...ae,
								className: C()(_, a, u, B ? `${_}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${_}__header-section`, children: !h && (0, t.Y)(K.M, { ...z.TopToolbar, controller: f }) }),
									(0, t.FD)('div', {
										className: `${_}__main-section`,
										children: [
											!Z &&
												V.loaded &&
												V.pagination.totalResults > 0 &&
												(y
													? (0, t.Y)(q.S, {
															...z.Slideout,
															active: me ? !1 : B,
															children: (0, t.Y)('div', {
																className: `${_}__sidebar`,
																children: (0, t.Y)(Y.B, { ...z.MobileSidebar, controller: f }),
															}),
													  })
													: B
													? (0, t.Y)('div', { className: `${_}__sidebar`, children: (0, t.Y)(Y.B, { ...z.Sidebar, controller: f }) })
													: null),
											(0, t.FD)('div', {
												className: C()(`${_}__content`),
												children: [
													!se && (0, t.Y)(K.M, { ...z.MiddleToolbar, controller: f }),
													V.pagination.totalResults
														? (0, t.Y)(x.n, { ...z.Results, controller: f })
														: V.pagination.totalResults === 0 && (0, t.Y)(k.a, { ...z.NoResults, controller: f }),
													!E && (0, t.Y)(K.M, { ...z.BottomToolbar, controller: f }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(re, U, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = (T, L, O) => {
					const [C, x] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							T.getController(O.id)
								.then((M) => {
									x(M);
								})
								.catch(async () => {
									let M = O;
									if (L === 'recommendation' && !O.plugins && !O.middleware)
										try {
											const r = await T.getInstantiator('recommendation');
											M = { ...O, plugins: r.config.config.plugins, middleware: r.config.config.middleware };
										} catch {}
									try {
										const r = await T.createController(L, M);
										x(r);
									} catch (r) {
										console.error(`useCreateController: failed to create controller "${O.id}"`, r);
									}
								});
						}, []),
						C
					);
				};
				e.d(U, ['i', 0, P]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.58b2e354.iframe.bundle.js.map
