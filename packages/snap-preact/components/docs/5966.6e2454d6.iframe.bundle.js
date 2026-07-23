'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					W = e.n(R),
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
					I = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const k = ({ width: b }) =>
						(0, v.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: b,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					F = (0, M.Bk)(
						(0, O.W)(
							(0, Y.PA)((b) => {
								const w = (0, D.u)(),
									y = (0, P.LU)(),
									H = { layout: $.V.grid, width: 'auto', treePath: y },
									S = (0, X.v6)('inlineBanner', w, H, b),
									{ banner: g, className: J, internalClassName: q, disableA11y: B, layout: T, onClick: s } = S,
									{ overrideElement: n, shouldRenderDefault: r } = (0, I._)('inlineBanner', S);
								if (!r) return n;
								const m = (0, j.Z)(S, k);
								return g && g.value
									? (0, t.Y)(f._, {
											children: (0, t.Y)('div', {
												onClick: (a) => {
													s && s(a, g);
												},
												role: 'article',
												ref: (a) => {
													B || (0, G.iy)(a), b.trackingRef(a);
												},
												className: W()('ss__inline-banner', `ss__inline-banner--${T}`, J, q),
												...m,
												dangerouslySetInnerHTML: { __html: g.value },
											}),
									  })
									: null;
							})
						)
					);
				e.d(L, ['_', 0, F]);
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					f = e.n(W),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					X = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					$ = e('./components/src/hooks/useCreateController.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(Y),
					k = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({}) => (0, R.AH)({}),
					y = (0, v.PA)((H) => {
						const S = (0, M.u)(),
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
							B = (0, X.v6)('noResults', S, q, H),
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
							} = B,
							{ overrideElement: U, shouldRenderDefault: Z } = (0, b._)('noResults', B);
						if (!Z) return U;
						const te = (0, j.Z)(B, w),
							se = m && Array.isArray(m) && m.length !== 0,
							ne = _ && Array.isArray(_) && _.length !== 0,
							E = !!o?.recommendation?.enabled,
							re = E ? o?.recommendation?.component || 'Recommendation' : void 0,
							d = E ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							Q = g?.templates?.library.import.component.recommendation.default || {},
							A = g?.templates?.library.import.component.result || {},
							{ ComponentOverride: C, shouldWaitForNamedOverride: K } = (0, F.x)(Q, re),
							{ ComponentOverride: ee, shouldWaitForNamedOverride: ie } = (0, F.x)(A, d),
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
							de = I()(V, B.lang || {}),
							N = (0, k.u)(de, { controller: u });
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
				e.d(L, ['a', 0, y]);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/classnames/index.js'),
					f = e.n(W),
					M = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(M),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					P = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					X = e('./components/src/components/Molecules/Result/Result.tsx'),
					j = e('./components/src/types.ts'),
					G = e('./components/src/utilities/cloneWithProps.tsx'),
					$ = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					k = e('./components/src/providers/cache.tsx'),
					F = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/withTracking.tsx'),
					w = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					H = e('./components/src/hooks/useDisplaySettings.tsx'),
					S = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
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
					B = (0, b.W)(X.Q),
					T = (0, R.PA)((s) => {
						const n = (0, F.u)(),
							r = (0, w.uk)(),
							m = (0, y.LU)(),
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
							{ ComponentOverride: Q, shouldWaitForNamedOverride: A } = (0, g.x)(d, E ? re : void 0),
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
						const ie = (0, I.Z)({ ...l, columns: c == j.V.list ? 1 : l.columns }, q),
							me = E ? D()(h || {}, { components: { result: { customComponent: te } } }) : h;
						return ee?.length
							? (0, t.Y)(k._, {
									children: (0, t.Y)('div', {
										...ie,
										className: f()('ss__results', `ss__results-${l.layout}`, u, o),
										children: ee.map((p) =>
											p.type === O.c.BANNER
												? (0, v.n)(P._, { ...K.inlineBanner, key: p.id, banner: p, layout: l.layout })
												: A
												? null
												: C && U
												? (0, t.Y)(S.o, {
														result: p,
														controller: U,
														children: (0, G.Y)(C, { key: p.id, controller: U, result: p, theme: me, treePath: Z }),
												  })
												: (0, t.Y)(B, { ...K.result, result: p, layout: l.layout, controller: U }, p.id)
										),
									}),
							  })
							: null;
					});
				e.d(L, ['n', 0, T]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(ae, L, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					W = e.n(R),
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
					I = (0, f.PA)((k) => {
						const F = (0, D.u)(),
							w = { treePath: (0, O.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							y = (0, j.v6)('toolbar', F, w, k),
							{ controller: H, toggleSideBarButton: S, disableStyles: g, className: J, internalClassName: q, treePath: B, layout: T } = y,
							{ overrideElement: s, shouldRenderDefault: n } = (0, P._)('toolbar', y);
						if (!n) return s;
						const r = (0, G.Z)(y, Y),
							m = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									...(0, X.s)({ toggleSideBarButton: S, disableStyles: g }),
									theme: y?.theme,
									treePath: B,
								},
							};
						return T?.length
							? (0, t.Y)(M._, {
									children: (0, t.Y)('div', {
										...r,
										className: W()('ss__toolbar', J, q),
										children: (0, t.Y)($.P, { controller: H, layout: T, ...m.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(L, ['M', 0, I]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(ae, L, e) {
				e.d(L, { v: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
					I = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					k = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					F = e('./components/src/hooks/useMediaQuery.tsx'),
					b = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useA11y.tsx'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					H = e.n(y);
				const S = (s, n, r) => {
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
							[i, l] = S(s.controller, 'layoutOptions', a(r.filter((o) => o.default).pop()));
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
				const B = (s) => {
						let n = 'ss__search';
						s.alias && (n = `ss__${(0, J.b)(s.alias)}`);
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
							A = (0, F.U)(se ? (typeof se == 'boolean' ? '(min-width: 0px)' : `(max-width: ${se})`) : '(max-width: 0px)'),
							[C, K] = (0, v.J0)(re !== 'searchHorizontal' && !ne && !A),
							ee = (0, v.li)(A),
							ie = A && !ee.current;
						(0, v.vJ)(() => {
							ee.current = A;
						}),
							(0, v.vJ)(() => {
								K(A ? !1 : !ne);
							}, [A]);
						const me = { toggleSidebarButtonText: { value: c } },
							p = H()(me, a.lang || {}),
							x = (0, b.u)(p, { filters: Q.filters, sidebarOpenState: C }),
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
									layout: A
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
									treePath: E,
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
							de = (0, X.Z)(a, B);
						return (0, t.Y)($._, {
							children: (0, t.FD)('div', {
								...de,
								className: M()(d, l, _, C ? `${d}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${d}__header-section`, children: !h && (0, t.Y)(I.M, { ...V.TopToolbar, controller: u }) }),
									(0, t.FD)('div', {
										className: `${d}__main-section`,
										children: [
											!o &&
												Q.loaded &&
												Q.pagination.totalResults > 0 &&
												(A
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
													!oe && (0, t.Y)(I.M, { ...V.MiddleToolbar, controller: u }),
													Q.pagination.totalResults
														? (0, t.Y)(D.n, { ...V.Results, controller: u })
														: Q.pagination.totalResults === 0 && (0, t.Y)(k.a, { ...V.NoResults, controller: u }),
													!U && (0, t.Y)(I.M, { ...V.BottomToolbar, controller: u }),
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
				const v = (R, W, f) => {
					const [M, D] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							R.getController(f.id)
								.then((O) => {
									D(O);
								})
								.catch(() => {
									R.createController(W, f).then((O) => {
										D(O);
									});
								});
						}, []),
						M
					);
				};
				e.d(L, ['i', 0, v]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.6e2454d6.iframe.bundle.js.map
