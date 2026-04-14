(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4401],
		{
			'./components/src/components/Molecules/Pagination/Pagination.stories.tsx'(y, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => _, __namedExportsOrder: () => E, default: () => x });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const L =
						"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```jsx\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```jsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```jsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```jsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```jsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```jsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```jsx\n<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />\n```",
					x = {
						title: 'Molecules/Pagination',
						component: d.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: s.Z } }, children: L }), (0, n.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								type: { required: !1 },
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Pagination store reference',
								type: { required: !1 },
								table: { type: { summary: 'pagination store object' } },
								control: { type: 'none' },
							},
							pages: {
								description:
									'Number of pages shown - recommend using an odd number as it includes the current page with an even spread to the left and right (excluding first and last)',
								defaultValue: 5,
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 5 } },
								control: { type: 'number' },
							},
							pagesLeft: {
								description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							pagesRight: {
								description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							nextButton: {
								description: 'Pagination next button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							prevButton: {
								description: 'Pagination prev button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							firstButton: {
								description: 'Pagination first button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							lastButton: {
								description: 'Pagination last button content',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							hideFirst: {
								description: 'Hide first button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideLast: {
								description: 'Hide last button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistFirst: {
								description: 'persists the first page button (when not on first page)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							persistLast: {
								description: 'persists the last page button (when not on last page)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideEllipsis: {
								description: 'Hide ellipsis',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideNext: {
								description: 'Hide next button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hidePrev: {
								description: 'Hide previous button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...t.F,
						},
					},
					v = a.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					M = (0, m.PA)(({ args: P, controller: f }) => (0, n.Y)(d.d, { ...P, pagination: f?.store?.pagination })),
					_ = (P, { loaded: { controller: f } }) => (0, n.Y)(M, { args: P, controller: f });
				(_.loaders = [async () => (await v.search(), { controller: v })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: PaginationProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservablePagination args={args} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default'];
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(y, r, e) {
				'use strict';
				e.d(r, { d: () => B });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					s = e.n(d),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(P),
					h = e('./components/src/hooks/useLang.tsx'),
					D = e('./components/src/hooks/useComponent.tsx');
				const C = () =>
						(0, l.AH)({
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
					B = (0, m.PA)((A) => {
						const R = (0, a.u)(),
							o = (0, L.uk)(),
							u = { pages: 5, treePath: (0, x.LU)() },
							p = (0, M.v6)('pagination', R, u, A),
							{
								pagination: g,
								controller: O,
								pages: X,
								pagesLeft: U,
								pagesRight: K,
								hideFirst: H,
								hideLast: z,
								persistFirst: Z,
								persistLast: $,
								hideEllipsis: S,
								hideNext: G,
								hidePrev: Q,
								nextButton: W,
								prevButton: N,
								firstButton: w,
								lastButton: F,
								disableStyles: k,
								className: q,
								internalClassName: ee,
								treePath: te,
								customComponent: Y,
							} = p;
						if (Y) {
							const b = (0, D.x)(o?.templates?.library.import.component.pagination || {}, Y);
							if (b) return (0, n.Y)(b, { ...p });
						}
						const V = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, v.s)({ disableStyles: k }), theme: p?.theme, treePath: te },
							},
							i = g || O?.store?.pagination,
							ne = Number.isInteger(U) && Number.isInteger(K) ? [U, K] : [X],
							I = i?.getPages(...ne),
							T = I?.map((b) => b.number),
							se = (0, _.Z)(p, C),
							ae = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${i?.last.number}` } },
							},
							oe = f()(ae, p.lang || {}),
							j = (0, h.u)(oe, { pagination: i });
						return T && T.length > 1 && i?.totalResults
							? (0, n.Y)(t._, {
									children: (0, n.Y)('div', {
										...se,
										className: s()('ss__pagination', q, ee),
										children: (0, n.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												i.previous &&
													!Q &&
													(0, n.Y)('a', {
														...i.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...j.previous?.all,
														children: N || (0, n.Y)(E.I, { ...V.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!T.includes(i.first.number) || (Z && i.page !== i.first.number)) &&
													!H &&
													(0, n.FD)(n.FK, {
														children: [
															(0, n.Y)('a', {
																...i.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...j.first?.all,
																children: w || i.first.number,
															}),
															!T.includes(2) && !S && (0, n.Y)('span', { children: '\u2026' }),
														],
													}),
												I &&
													I.map((b) => {
														const re = { page: { attributes: { 'aria-label': `go to page ${b.number}` } } },
															ie = f()(re, p.lang || {}),
															J = (0, h.u)(ie, { pagination: i, page: b });
														return b.active
															? (0, n.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...J.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: b.number,
															  })
															: (0, n.Y)('a', { ...b.url.link, className: 'ss__pagination__page', ...J.page?.all, children: b.number });
													}),
												(!T.includes(i.last.number) || ($ && i.page !== i.last.number)) &&
													!z &&
													(0, n.FD)(n.FK, {
														children: [
															!T.includes(i.totalPages - 1) && !S && (0, n.Y)('span', { children: '\u2026' }),
															(0, n.Y)('a', {
																...i.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...j.last?.all,
																children: F || i.last.number,
															}),
														],
													}),
												i.next &&
													!G &&
													(0, n.Y)('a', {
														...i.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...j.next?.all,
														children: W || (0, n.Y)(E.I, { ...V.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(y, r, e) {
				'use strict';
				e.d(r, { u: () => n });
				const n = (m, l) => {
					const d = {};
					return (
						Object.keys(m).forEach((s) => {
							const t = m && m[s],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (a.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': s }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(l))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(l)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(l))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': s })),
								(d[s] = a);
						}),
						d
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, r, e) {
				'use strict';
				e.d(r, { F: () => n });
				const n = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/defined.ts'(y, r, e) {
				'use strict';
				e.d(r, { s: () => n });
				function n(m) {
					const l = {};
					return (
						Object.keys(m).map((d) => {
							m[d] !== void 0 && (l[d] = m[d]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, r, e) {
				'use strict';
				e.d(r, { p: () => C });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					D = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const p = (h[u] = A({ client: D, controller: c }));
						return (
							p.on('afterStore', async ({ controller: g }, O) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await O();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const p = (h[u] = R({ client: D, controller: c }));
						return (
							p.on('afterStore', async ({ controller: g }, O) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await O();
							}),
							p.init(),
							p
						);
					}
					static search(c) {
						const u = c.id;
						if (h[u]) return h[u];
						const p = (h[u] = B({ client: D, controller: c }));
						return (
							p.on('afterStore', async ({ controller: g }, O) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await O();
							}),
							p.init(),
							p
						);
					}
				}
				function B(o) {
					const c = new x.V(new M.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), v.X);
					return new m.Tp(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new a.U(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function A(o) {
					const c = new x.V(new M.E(), v.X).detach(!0);
					return new d.c(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new L.t(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
				function R(o) {
					const c = new x.V(new M.E(), v.X).detach();
					return new l.Z(o.controller, {
						client: new s.K(o.client.globals, o.client.config),
						store: new t.Y(o.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new _.E(),
						profiler: new E.U(),
						logger: new P.V(),
						tracker: new f.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, r, e) {
				'use strict';
				e.d(r, { Z: () => d });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					d = (s) => {
						const t = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								t.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [s.className, s.children, t]),
							(0, n.Y)('code', { ...s, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function r(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (y.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Pagination-Pagination-stories.ede5f80b.iframe.bundle.js.map
