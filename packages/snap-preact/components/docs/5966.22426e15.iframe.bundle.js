'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(le, j, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					g = e.n(D),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/cloneWithProps.tsx'),
					Q = e('./components/src/utilities/mergeProps.ts'),
					Z = e('./components/src/utilities/mergeStyles.ts'),
					G = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					V = e('./components/src/hooks/useCreateController.tsx'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(U),
					X = e('./components/src/hooks/useLang.tsx'),
					$ = e('./components/src/hooks/useComponent.tsx'),
					ne = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const k = ({}) => (0, x.AH)({}),
					R = (0, v.PA)((K) => {
						const Y = (0, O.u)(),
							S = (0, y.uk)(),
							F = (0, E.LU)(),
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
							B = (0, Q.v6)('noResults', Y, w, K),
							{
								contentSlot: M,
								suggestionsTitleText: s,
								hideSuggestionsTitleText: a,
								hideContactsTitleText: d,
								suggestionsList: _,
								hideContact: n,
								contactsTitleText: i,
								hideSuggestions: L,
								contactsList: h,
								controller: A,
								templates: o,
								className: u,
								internalClassName: r,
								treePath: q,
							} = B,
							{ overrideElement: ee, shouldRenderDefault: H } = (0, ne._)('noResults', B);
						if (!H) return ee;
						const re = (0, Z.Z)(B, k),
							J = _ && Array.isArray(_) && _.length !== 0,
							te = h && Array.isArray(h) && h.length !== 0,
							p = !!o?.recommendation?.enabled,
							ie = p ? o?.recommendation?.component || 'Recommendation' : void 0,
							T = p ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							c = S?.templates?.library.import.component.recommendation.default || {},
							N = S?.templates?.library.import.component.result || {},
							{ ComponentOverride: P, shouldWaitForNamedOverride: C } = (0, $.x)(c, ie),
							{ ComponentOverride: W, shouldWaitForNamedOverride: ae } = (0, $.x)(N, T),
							me = P,
							ce = W;
						let f;
						if (p && S?.templates) {
							const m = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, o?.recommendation?.config);
							(m.id = m.id || `search-${m.tag}`),
								(f = (0, V.i)(S, 'recommendation', m)),
								!f?.store?.loaded && !f?.store?.loading && f?.store.error?.type !== 'error' && f?.search();
						}
						const oe = me,
							de = ce,
							se = {
								suggestionsTitleText: { value: s },
								suggestionsList: {
									value: `${_ ? _.map((m) => `<li class="ss__no-results__suggestions__list__option">${m}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: i },
								contactsList: {
									value: `${
										h
											? h
													.map(
														(m) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${G.p(
																m.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																m.title
															}</h4><p class="ss__no-results__contact__detail__content">${m.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							b = I()(se, B.lang || {}),
							z = (0, X.u)(b, { controller: A }, { activeBreakpoint: Y?.activeBreakpoint });
						return (0, t.FD)('div', {
							className: g()('ss__no-results', u, r),
							...re,
							children: [
								M &&
									(typeof M == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: M } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, l.Y)(M, { controller: A, treePath: q }) })),
								!L &&
									(s || J) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											s && !a && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...z.suggestionsTitleText?.all }),
											J && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...z.suggestionsList?.all }),
										],
									}),
								!n &&
									(i || te) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											i && !d && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...z.contactsTitleText?.all }),
											te && (0, t.Y)('div', { ...z.contactsList?.all }),
										],
									}),
								oe && f?.store?.loaded && !C && !ae
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(oe, {
												controller: f,
												title: f.store?.profile?.display?.templateParameters?.title,
												resultComponent: de,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
				e.d(j, ['a', 0, R]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(le, j, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('../../node_modules/classnames/index.js'),
					D = e.n(x),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Q = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					V = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const U = ({}) => (0, v.AH)({}),
					I = (0, g.PA)((X) => {
						const $ = (0, y.u)(),
							k = { treePath: (0, E.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							R = (0, Z.v6)('toolbar', $, k, X),
							{
								controller: K,
								toggleSideBarButton: Y,
								disableStyles: S,
								className: F,
								internalClassName: w,
								treePath: B,
								layout: M,
								tabManager: s,
							} = R,
							{ overrideElement: a, shouldRenderDefault: d } = (0, l._)('toolbar', R);
						if (!d) return a;
						const _ = (0, G.Z)(R, U),
							n = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									tabManager: s,
									...(0, Q.s)({ toggleSideBarButton: Y, disableStyles: S }),
									theme: R?.theme,
									treePath: B,
								},
							};
						return M?.length
							? (0, t.Y)(O._, {
									children: (0, t.Y)('div', {
										..._,
										className: D()('ss__toolbar', F, w),
										children: (0, t.Y)(V.P, { controller: K, layout: M, ...n.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(j, ['M', 0, I]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(le, j, e) {
				e.d(j, { v: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					O = e.n(g),
					y = e('./components/src/components/Organisms/Results/Results.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/defined.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = e('./components/src/providers/treePath.tsx'),
					V = e('./components/src/providers/cache.tsx'),
					U = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					I = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					X = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					$ = e('./components/src/hooks/useMediaQuery.tsx'),
					ne = e('./components/src/hooks/useLang.tsx'),
					k = e('./components/src/hooks/useA11y.tsx'),
					R = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(R);
				const Y = (s, a, d) => {
						const _ = s.storage,
							i = _.get(a) || d || void 0,
							[L, h] = (0, v.J0)(i);
						return [
							L,
							(o) => {
								_.set(a, o), h(o);
							},
						];
					},
					S = (s, a) => {
						const d = s?.layoutOptions || [],
							_ = (o, u) =>
								!o || !u
									? !1
									: o.value !== void 0 && u.value !== void 0
									? o.value === u.value
									: o.label !== void 0 && u.label !== void 0
									? o.label === u.label
									: !1,
							n = (o) => o && { value: o.value, label: o.label },
							[i, L] = Y(s.controller, 'layoutOptions', n(d.filter((o) => o.default).pop()));
						if (!d.length) return;
						const h = d.find((o) => _(o, i));
						i && !h && L(n(d.filter((o) => o.default).pop())),
							(s.theme = s.theme || {}),
							(s.theme.components = {
								...(s.theme.components || {}),
								layoutSelector: {
									options: d,
									onSelect: (o, u) => {
										u && L(n(u));
									},
									selected: h,
								},
							});
						let A = !1;
						if (a.components && s.treePath) {
							const o = s.treePath.split(' ')[0];
							Object.keys(a.components).forEach((u) => {
								const r = u.split(' '),
									q = r.splice(-1).pop() ?? '',
									[ee] = q.split('.');
								if (
									a.components &&
									ee == 'toolbar' &&
									(r[0] == o ||
										r[0] == `*${o}` ||
										r[0] == `*(M)${o}` ||
										r[0] == `*(T)${o}` ||
										r[0] == `*(D)${o}` ||
										r[0] == `(M)${o}` ||
										r[0] == `(T)${o}` ||
										r[0] == `(D)${o}` ||
										!r.length)
								) {
									const H = a.components[u];
									H?.layout && H.layout.toString().indexOf('layoutSelector') > -1 && (A = !0);
								}
							});
						}
						h?.overrides && A && (s.theme = K()(s.theme, { components: h.overrides.components }));
					};
				var F = e('./components/src/utilities/componentNameToClassName.ts'),
					w = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
				const B = (s) => {
						let a = 'ss__search';
						s.alias && (a = `ss__${(0, F.b)(s.alias)}`);
						const d = s.mobileDisplayAt
							? typeof s.mobileDisplayAt == 'boolean'
								? '(min-width: 0px)'
								: `(max-width: ${s.mobileDisplayAt})`
							: '(max-width: 0px)';
						return (0, D.AH)({
							[`.${a}__header-section`]: { marginBottom: '20px' },
							[`.${a}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: s.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${d}`]: { width: '100%' } },
							[`.${a}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						});
					},
					M = (0, x.PA)((s) => {
						const a = (0, Z.u)(),
							d = (0, G.LU)(),
							_ = {
								toggleSidebarButtonText: 'Filters',
								sidebarWidth: '270px',
								mobileDisplayAt: a?.variables?.breakpoints?.tablet ? `${a.variables?.breakpoints?.tablet}px` : '991px',
								treePath: d,
							},
							n = (0, E.v6)(s.alias || 'search', a, _, s),
							{
								disableStyles: i,
								className: L,
								internalClassName: h,
								hideSidebar: A,
								toggleSidebarButtonText: o,
								hideTopToolbar: u,
								tabManager: r,
								hideMiddleToolbar: q,
								hideBottomToolbar: ee,
								resultComponent: H,
								hideToggleSidebarButton: re,
								mobileDisplayAt: J,
								toggleSidebarStartClosed: te,
								treePath: p,
								alias: ie,
							} = n;
						let T = n.controller,
							c = 'ss__search';
						n.alias && (c = `ss__${(0, F.b)(n.alias)}`), S(n, a), r && r.active && (T = r.active?.controller);
						const N = T.store,
							P = (0, $.U)(J ? (typeof J == 'boolean' ? '(min-width: 0px)' : `(max-width: ${J})`) : '(max-width: 0px)'),
							[C, W] = (0, v.J0)(ie !== 'searchHorizontal' && !te && !P),
							ae = (0, v.li)(P),
							me = P && !ae.current;
						(0, v.vJ)(() => {
							ae.current = P;
						}),
							(0, v.vJ)(() => {
								W(P ? !1 : !te);
							}, [P]);
						const ce = { toggleSidebarButtonText: { value: o } },
							f = K()(ce, n.lang || {}),
							oe = (0, ne.u)(f, { filters: N.filters, sidebarOpenState: C }, { activeBreakpoint: a?.activeBreakpoint }),
							de = () =>
								(0, t.Y)('div', {
									className: O()(`${c}__sidebar-toggle`, C ? `${c}__sidebar-toggle--open` : ''),
									active: C,
									children: (0, t.Y)('span', { ...oe.toggleSidebarButtonText.all }),
								}),
							se = {
								onClick: () => {
									W(!C),
										setTimeout(() => {
											if (!C) {
												const m = document.querySelector('.ss__sidebar')?.querySelector(k.DH);
												m && m.focus();
											}
										});
								},
								children: !re && N.loaded && (o || oe.toggleSidebarButtonText?.value) ? de : void 0,
							},
							b = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${c}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_']],
									toggleSideBarButton: { ...se },
									tabManager: r,
									...(0, l.s)({ disableStyles: i }),
									theme: n.theme,
									treePath: p,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${c}__content__toolbar--middle-toolbar`,
									layout: P
										? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
										: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...se },
									tabManager: r,
									...(0, l.s)({ disableStyles: i }),
									theme: n.theme,
									treePath: p,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${c}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...se },
									tabManager: r,
									...(0, l.s)({ disableStyles: i }),
									theme: n.theme,
									treePath: p,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, l.s)({ disableStyles: i }), theme: n.theme, treePath: p },
								MobileSidebar: {
									layout: [['filterSummary'], ['facets'], ['banner.left']],
									hideApplyButton: !1,
									hideClearButton: !1,
									hideCloseButton: !1,
									onToggleSidebar: () => W((m) => !m),
									...(0, l.s)({ disableStyles: i }),
									theme: n.theme,
									treePath: `${p} slideout`,
								},
								Results: { resultComponent: H, ...(0, l.s)({ disableStyles: i }), theme: n.theme, treePath: p },
								NoResults: { ...(0, l.s)({ disableStyles: i }), theme: n.theme, treePath: p },
								Slideout: {
									width: n.sidebarWidth,
									internalClassName: `${c}__slideout`,
									onChange: (m) => W(m),
									...(0, l.s)({ disableStyles: i }),
									theme: n.theme,
									treePath: p,
								},
							},
							z = (0, Q.Z)(n, B);
						return (0, t.Y)(V._, {
							children: (0, t.FD)('div', {
								...z,
								className: O()(c, L, h, C ? `${c}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${c}__header-section`, children: !u && (0, t.Y)(I.M, { ...b.TopToolbar, controller: T }) }),
									(0, t.FD)('div', {
										className: `${c}__main-section`,
										children: [
											!A &&
												N.loaded &&
												N.pagination.totalResults > 0 &&
												(P
													? (0, t.Y)(w.S, {
															...b.Slideout,
															active: me ? !1 : C,
															children: (0, t.Y)('div', {
																className: `${c}__sidebar`,
																children: (0, t.Y)(U.B, { ...b.MobileSidebar, controller: T }),
															}),
													  })
													: C
													? (0, t.Y)('div', { className: `${c}__sidebar`, children: (0, t.Y)(U.B, { ...b.Sidebar, controller: T }) })
													: null),
											(0, t.FD)('div', {
												className: O()(`${c}__content`),
												children: [
													!q && (0, t.Y)(I.M, { ...b.MiddleToolbar, controller: T }),
													N.pagination.totalResults
														? (0, t.Y)(y.n, { ...b.Results, controller: T })
														: N.pagination.totalResults === 0 && (0, t.Y)(X.a, { ...b.NoResults, controller: T }),
													!ee && (0, t.Y)(I.M, { ...b.BottomToolbar, controller: T }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(le, j, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = (x, D, g) => {
					const [O, y] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							x.getController(g.id)
								.then((E) => {
									y(E);
								})
								.catch(async () => {
									let E = g;
									if (D === 'recommendation' && !g.plugins && !g.middleware)
										try {
											const l = await x.getInstantiator('recommendation');
											E = { ...g, plugins: l.config.config.plugins, middleware: l.config.config.middleware };
										} catch {}
									try {
										const l = await x.createController(D, E);
										y(l);
									} catch (l) {
										console.error(`useCreateController: failed to create controller "${g.id}"`, l);
									}
								});
						}, []),
						O
					);
				};
				e.d(j, ['i', 0, v]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.22426e15.iframe.bundle.js.map
