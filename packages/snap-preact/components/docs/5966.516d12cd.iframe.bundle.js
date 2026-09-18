'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5966],
		{
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(re, $, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					y = e('../../node_modules/classnames/index.js'),
					g = e.n(y),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/cloneWithProps.tsx'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					V = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					X = e('./components/src/hooks/useCreateController.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(Y),
					k = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					ae = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const w = ({}) => (0, x.AH)({}),
					S = (0, v.PA)((H) => {
						const J = (0, O.u)(),
							B = (0, R.uk)(),
							z = (0, E.LU)(),
							q = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: z,
							},
							L = (0, Z.v6)('noResults', J, q, H),
							{
								contentSlot: M,
								suggestionsTitleText: s,
								hideSuggestionsTitleText: a,
								hideContactsTitleText: d,
								suggestionsList: u,
								hideContact: n,
								contactsTitleText: r,
								hideSuggestions: A,
								contactsList: _,
								controller: N,
								templates: o,
								className: i,
								internalClassName: D,
								treePath: ee,
							} = L,
							{ overrideElement: W, shouldRenderDefault: h } = (0, ae._)('noResults', L);
						if (!h) return W;
						const te = (0, G.Z)(L, w),
							j = u && Array.isArray(u) && u.length !== 0,
							oe = _ && Array.isArray(_) && _.length !== 0,
							p = !!o?.recommendation?.enabled,
							ie = p ? o?.recommendation?.component || 'Recommendation' : void 0,
							T = p ? String(o?.recommendation?.resultComponent || 'Result') : void 0,
							c = B?.templates?.library.import.component.recommendation.default || {},
							I = B?.templates?.library.import.component.result || {},
							{ ComponentOverride: P, shouldWaitForNamedOverride: C } = (0, F.x)(c, ie),
							{ ComponentOverride: U, shouldWaitForNamedOverride: le } = (0, F.x)(I, T),
							me = P,
							ce = U;
						let f;
						if (p && B?.templates) {
							const m = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, o?.recommendation?.config);
							(m.id = m.id || `search-${m.tag}`),
								(f = (0, X.i)(B, 'recommendation', m)),
								!f?.store?.loaded && !f?.store?.loading && f?.store.error?.type !== 'error' && f?.search();
						}
						const se = me,
							de = ce,
							ne = {
								suggestionsTitleText: { value: s },
								suggestionsList: {
									value: `${u ? u.map((m) => `<li class="ss__no-results__suggestions__list__option">${m}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: r },
								contactsList: {
									value: `${
										_
											? _.map(
													(m) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${V.p(
															m.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															m.title
														}</h4><p class="ss__no-results__contact__detail__content">${m.content}</p></div>`
											  ).join('')
											: void 0
									}`,
								},
							},
							b = K()(ne, L.lang || {}),
							Q = (0, k.u)(b, { controller: N }, { activeBreakpoint: J?.activeBreakpoint });
						return (0, t.FD)('div', {
							className: g()('ss__no-results', i, D),
							...te,
							children: [
								M &&
									(typeof M == 'string'
										? (0, t.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: M } })
										: (0, t.Y)('div', { className: 'ss__no-results__slot', children: (0, l.Y)(M, { controller: N, treePath: ee }) })),
								!A &&
									(s || j) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											s && !a && (0, t.Y)('h3', { className: 'ss__no-results__suggestions__title', ...Q.suggestionsTitleText?.all }),
											j && (0, t.Y)('ul', { className: 'ss__no-results__suggestions__list', ...Q.suggestionsList?.all }),
										],
									}),
								!n &&
									(r || oe) &&
									(0, t.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											r && !d && (0, t.Y)('h3', { className: 'ss__no-results__contact__title', ...Q.contactsTitleText?.all }),
											oe && (0, t.Y)('div', { ...Q.contactsList?.all }),
										],
									}),
								se && f?.store?.loaded && !C && !le
									? (0, t.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, t.Y)(se, {
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
				e.d($, ['a', 0, S]);
			},
			'./components/src/components/Organisms/Toolbar/Toolbar.tsx'(re, $, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('../../node_modules/classnames/index.js'),
					y = e.n(x),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					Z = e('./components/src/utilities/defined.ts'),
					G = e('./components/src/utilities/mergeProps.ts'),
					V = e('./components/src/utilities/mergeStyles.ts'),
					X = e('./components/src/components/Organisms/Layout/Layout.tsx');
				const Y = ({}) => (0, v.AH)({}),
					K = (0, g.PA)((k) => {
						const F = (0, R.u)(),
							w = { treePath: (0, E.LU)(), layout: ['button.sidebar-toggle', 'filterSummary', 'paginationInfo', 'sortBy', 'perPage', 'pagination'] },
							S = (0, G.v6)('toolbar', F, w, k),
							{
								controller: H,
								toggleSideBarButton: J,
								disableStyles: B,
								className: z,
								internalClassName: q,
								treePath: L,
								layout: M,
								tabManager: s,
							} = S,
							{ overrideElement: a, shouldRenderDefault: d } = (0, l._)('toolbar', S);
						if (!d) return a;
						const u = (0, V.Z)(S, Y),
							n = {
								Layout: {
									internalClassName: 'ss__toolbar__layout',
									tabManager: s,
									...(0, Z.s)({ toggleSideBarButton: J, disableStyles: B }),
									theme: S?.theme,
									treePath: L,
								},
							};
						return M?.length
							? (0, t.Y)(O._, {
									children: (0, t.Y)('div', {
										...u,
										className: y()('ss__toolbar', z, q),
										children: (0, t.Y)(X.P, { controller: H, layout: M, ...n.Layout }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d($, ['M', 0, K]);
			},
			'./components/src/components/Templates/Search/Search.tsx'(re, $, e) {
				e.d($, { v: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					O = e.n(g),
					R = e('./components/src/components/Organisms/Results/Results.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/defined.ts'),
					Z = e('./components/src/utilities/mergeStyles.ts'),
					G = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					V = e('./components/src/providers/treePath.tsx'),
					X = e('./components/src/providers/cache.tsx'),
					Y = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					K = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					k = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					F = e('./components/src/hooks/useMediaQuery.tsx'),
					ae = e('./components/src/hooks/useLang.tsx'),
					w = e('./components/src/hooks/useA11y.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					H = e.n(S);
				const J = (s, a, d) => {
						const u = s.storage,
							r = u.get(a) || d || void 0,
							[A, _] = (0, v.J0)(r);
						return [
							A,
							(o) => {
								u.set(a, o), _(o);
							},
						];
					},
					B = (s, a) => {
						const d = s?.layoutOptions || [],
							u = (o, i) =>
								!o || !i
									? !1
									: o.value !== void 0 && i.value !== void 0
									? o.value === i.value
									: o.label !== void 0 && i.label !== void 0
									? o.label === i.label
									: !1,
							n = (o) => o && { value: o.value, label: o.label },
							[r, A] = J(s.controller, 'layoutOptions', n(d.filter((o) => o.default).pop()));
						if (!d.length) return;
						const _ = d.find((o) => u(o, r));
						r && !_ && A(n(d.filter((o) => o.default).pop())),
							(s.theme = s.theme || {}),
							(s.theme.components = {
								...(s.theme.components || {}),
								layoutSelector: {
									options: d,
									onSelect: (o, i) => {
										i && A(n(i));
									},
									selected: _,
								},
							});
						let N = !1;
						if (a.components && s.treePath) {
							const o = s.treePath.split(' ')[0];
							Object.keys(a.components).forEach((i) => {
								const ee = (i.includes(',') ? i.split(/\s*,\s*/) : [i]).some((W) => {
									const h = W.split(' '),
										te = h.splice(-1).pop() ?? '',
										[j] = te.split('.');
									return (
										j == 'toolbar' &&
										(h[0] == o ||
											h[0] == `*${o}` ||
											h[0] == `*(M)${o}` ||
											h[0] == `*(T)${o}` ||
											h[0] == `*(D)${o}` ||
											h[0] == `(M)${o}` ||
											h[0] == `(T)${o}` ||
											h[0] == `(D)${o}` ||
											!h.length)
									);
								});
								if (a.components && ee) {
									const W = a.components[i];
									W?.layout && W.layout.toString().indexOf('layoutSelector') > -1 && (N = !0);
								}
							});
						}
						_?.overrides && N && (s.theme = H()(s.theme, { components: _.overrides.components }));
					};
				var z = e('./components/src/utilities/componentNameToClassName.ts'),
					q = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
				const L = (s) => {
						let a = 'ss__search';
						s.alias && (a = `ss__${(0, z.b)(s.alias)}`);
						const d = s.mobileDisplayAt
							? typeof s.mobileDisplayAt == 'boolean'
								? '(min-width: 0px)'
								: `(max-width: ${s.mobileDisplayAt})`
							: '(max-width: 0px)';
						return (0, y.AH)({
							[`.${a}__header-section`]: { marginBottom: '20px' },
							[`.${a}__main-section`]: { display: 'flex', minHeight: '600px', gap: '20px' },
							'.ss__sidebar': { flex: '0 1 auto', width: s.sidebarWidth, '&:empty': { display: 'none' }, [`@media ${d}`]: { width: '100%' } },
							[`.${a}__content`]: { width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1em' },
						});
					},
					M = (0, x.PA)((s) => {
						const a = (0, G.u)(),
							d = (0, V.LU)(),
							u = {
								toggleSidebarButtonText: 'Filters',
								sidebarWidth: '270px',
								mobileDisplayAt: a?.variables?.breakpoints?.tablet ? `${a.variables?.breakpoints?.tablet}px` : '991px',
								treePath: d,
							},
							n = (0, E.v6)(s.alias || 'search', a, u, s),
							{
								disableStyles: r,
								className: A,
								internalClassName: _,
								hideSidebar: N,
								toggleSidebarButtonText: o,
								hideTopToolbar: i,
								tabManager: D,
								hideMiddleToolbar: ee,
								hideBottomToolbar: W,
								resultComponent: h,
								hideToggleSidebarButton: te,
								mobileDisplayAt: j,
								toggleSidebarStartClosed: oe,
								treePath: p,
								alias: ie,
							} = n;
						let T = n.controller,
							c = 'ss__search';
						n.alias && (c = `ss__${(0, z.b)(n.alias)}`), B(n, a), D && D.active && (T = D.active?.controller);
						const I = T.store,
							P = (0, F.U)(j ? (typeof j == 'boolean' ? '(min-width: 0px)' : `(max-width: ${j})`) : '(max-width: 0px)'),
							[C, U] = (0, v.J0)(ie !== 'searchHorizontal' && !oe && !P),
							le = (0, v.li)(P),
							me = P && !le.current;
						(0, v.vJ)(() => {
							le.current = P;
						}),
							(0, v.vJ)(() => {
								U(P ? !1 : !oe);
							}, [P]);
						const ce = { toggleSidebarButtonText: { value: o } },
							f = H()(ce, n.lang || {}),
							se = (0, ae.u)(f, { filters: I.filters, sidebarOpenState: C }, { activeBreakpoint: a?.activeBreakpoint }),
							de = () =>
								(0, t.Y)('div', {
									className: O()(`${c}__sidebar-toggle`, C ? `${c}__sidebar-toggle--open` : ''),
									active: C,
									children: (0, t.Y)('span', { ...se.toggleSidebarButtonText.all }),
								}),
							ne = {
								onClick: () => {
									U(!C),
										setTimeout(() => {
											if (!C) {
												const m = document.querySelector('.ss__sidebar')?.querySelector(w.DH);
												m && m.focus();
											}
										});
								},
								children: !te && I.loaded && (o || se.toggleSidebarButtonText?.value) ? de : void 0,
							},
							b = {
								TopToolbar: {
									name: 'top',
									internalClassName: `${c}__header-section__toolbar--top-toolbar`,
									layout: [['banner.header'], ['searchHeader', '_']],
									toggleSideBarButton: { ...ne },
									tabManager: D,
									...(0, l.s)({ disableStyles: r }),
									theme: n.theme,
									treePath: p,
								},
								MiddleToolbar: {
									name: 'middle',
									internalClassName: `${c}__content__toolbar--middle-toolbar`,
									layout: P
										? [['tabSelection'], ['paginationInfo', '_'], ['button.sidebar-toggle', '_', 'sortBy'], ['banner.banner']]
										: [['tabSelection'], ['sortBy', 'perPage', '_', 'paginationInfo'], ['banner.banner']],
									toggleSideBarButton: { ...ne },
									tabManager: D,
									...(0, l.s)({ disableStyles: r }),
									theme: n.theme,
									treePath: p,
								},
								BottomToolbar: {
									name: 'bottom',
									internalClassName: `${c}__content__toolbar--bottom-toolbar`,
									layout: [['banner.footer'], ['_', 'pagination', '_']],
									toggleSideBarButton: { ...ne },
									tabManager: D,
									...(0, l.s)({ disableStyles: r }),
									theme: n.theme,
									treePath: p,
								},
								Sidebar: { layout: [['filterSummary'], ['facets'], ['banner.left']], ...(0, l.s)({ disableStyles: r }), theme: n.theme, treePath: p },
								MobileSidebar: {
									layout: [['filterSummary'], ['facets'], ['banner.left']],
									hideApplyButton: !1,
									hideClearButton: !1,
									hideCloseButton: !1,
									onToggleSidebar: () => U((m) => !m),
									...(0, l.s)({ disableStyles: r }),
									theme: n.theme,
									treePath: `${p} slideout`,
								},
								Results: { resultComponent: h, ...(0, l.s)({ disableStyles: r }), theme: n.theme, treePath: p },
								NoResults: { ...(0, l.s)({ disableStyles: r }), theme: n.theme, treePath: p },
								Slideout: {
									width: n.sidebarWidth,
									internalClassName: `${c}__slideout`,
									onChange: (m) => U(m),
									...(0, l.s)({ disableStyles: r }),
									theme: n.theme,
									treePath: p,
								},
							},
							Q = (0, Z.Z)(n, L);
						return (0, t.Y)(X._, {
							children: (0, t.FD)('div', {
								...Q,
								className: O()(c, A, _, C ? `${c}--sidebar-open` : ''),
								children: [
									(0, t.Y)('div', { className: `${c}__header-section`, children: !i && (0, t.Y)(K.M, { ...b.TopToolbar, controller: T }) }),
									(0, t.FD)('div', {
										className: `${c}__main-section`,
										children: [
											!N &&
												I.loaded &&
												I.pagination.totalResults > 0 &&
												(P
													? (0, t.Y)(q.S, {
															...b.Slideout,
															active: me ? !1 : C,
															children: (0, t.Y)('div', {
																className: `${c}__sidebar`,
																children: (0, t.Y)(Y.B, { ...b.MobileSidebar, controller: T }),
															}),
													  })
													: C
													? (0, t.Y)('div', { className: `${c}__sidebar`, children: (0, t.Y)(Y.B, { ...b.Sidebar, controller: T }) })
													: null),
											(0, t.FD)('div', {
												className: O()(`${c}__content`),
												children: [
													!ee && (0, t.Y)(K.M, { ...b.MiddleToolbar, controller: T }),
													I.pagination.totalResults
														? (0, t.Y)(R.n, { ...b.Results, controller: T })
														: I.pagination.totalResults === 0 && (0, t.Y)(k.a, { ...b.NoResults, controller: T }),
													!W && (0, t.Y)(K.M, { ...b.BottomToolbar, controller: T }),
												],
											}),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/hooks/useCreateController.tsx'(re, $, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = (x, y, g) => {
					const [O, R] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							x.getController(g.id)
								.then((E) => {
									R(E);
								})
								.catch(async () => {
									let E = g;
									if (y === 'recommendation' && !g.plugins && !g.middleware)
										try {
											const l = await x.getInstantiator('recommendation');
											E = { ...g, plugins: l.config.config.plugins, middleware: l.config.config.middleware };
										} catch {}
									try {
										const l = await x.createController(y, E);
										R(l);
									} catch (l) {
										console.error(`useCreateController: failed to create controller "${g.id}"`, l);
									}
								});
						}, []),
						O
					);
				};
				e.d($, ['i', 0, v]);
			},
		},
	]);
})();

//# sourceMappingURL=5966.516d12cd.iframe.bundle.js.map
