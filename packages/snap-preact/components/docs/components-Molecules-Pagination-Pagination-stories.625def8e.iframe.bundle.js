(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4401],
		{
			'./components/src/components/Molecules/Pagination/Pagination.stories.tsx'(P, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => d, __namedExportsOrder: () => O, default: () => x });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const L =
						"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```tsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```tsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} lastButton={'Prev'} />\n```",
					x = {
						title: 'Molecules/Pagination',
						component: g.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(c.oz, { options: { overrides: { code: s.Z } }, children: L }), (0, n.Y)(c.uY, { story: c.h1 })],
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
					y = o.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					M = (0, p.PA)(({ args: b, controller: f }) => (0, n.Y)(g.d, { ...b, pagination: f?.store?.pagination })),
					d = (b, { loaded: { controller: f } }) => (0, n.Y)(M, { args: b, controller: f });
				(d.loaders = [async () => (await y.search(), { controller: y })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
								...d.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(P, i, e) {
				'use strict';
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					s = e.n(g),
					t = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(O),
					f = e('./components/src/hooks/useLang.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = () =>
						(0, c.AH)({
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
					C = (0, p.PA)((j) => {
						const A = (0, o.u)(),
							r = { pages: 5, treePath: (0, L.LU)() },
							a = (0, y.v6)('pagination', A, r, j),
							{
								pagination: m,
								controller: _,
								pages: u,
								pagesLeft: E,
								pagesRight: U,
								hideFirst: V,
								hideLast: J,
								persistFirst: X,
								persistLast: H,
								hideEllipsis: K,
								hideNext: z,
								hidePrev: Z,
								nextButton: S,
								prevButton: W,
								firstButton: N,
								lastButton: w,
								disableStyles: $,
								className: G,
								internalClassName: Q,
								treePath: k,
							} = a,
							{ overrideElement: q, shouldRenderDefault: ee } = (0, h._)('pagination', a);
						if (!ee) return q;
						const F = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, x.s)({ disableStyles: $ }), theme: a?.theme, treePath: k },
							},
							l = m || _?.store?.pagination,
							te = Number.isInteger(E) && Number.isInteger(U) ? [E, U] : [u],
							R = l?.getPages(...te),
							T = R?.map((v) => v.number),
							ne = (0, M.Z)(a, D),
							se = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${l?.last.number}` } },
							},
							ae = b()(se, a.lang || {}),
							B = (0, f.u)(ae, { pagination: l });
						return T && T.length > 1 && l?.totalResults
							? (0, n.Y)(t._, {
									children: (0, n.Y)('div', {
										...ne,
										className: s()('ss__pagination', G, Q),
										children: (0, n.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												l.previous &&
													!Z &&
													(0, n.Y)('a', {
														...l.previous.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--previous'),
														...B.previous?.all,
														children: W || (0, n.Y)(d.I, { ...F.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!T.includes(l.first.number) || (X && l.page !== l.first.number)) &&
													!V &&
													(0, n.FD)(n.FK, {
														children: [
															(0, n.Y)('a', {
																...l.first.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--first'),
																...B.first?.all,
																children: N || l.first.number,
															}),
															!T.includes(2) && !K && (0, n.Y)('span', { children: '\u2026' }),
														],
													}),
												R &&
													R.map((v) => {
														const oe = { page: { attributes: { 'aria-label': `go to page ${v.number}` } } },
															re = b()(oe, a.lang || {}),
															Y = (0, f.u)(re, { pagination: l, page: v });
														return v.active
															? (0, n.Y)('span', {
																	className: s()('ss__pagination__page', 'ss__pagination__page--active'),
																	...Y.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: v.number,
															  })
															: (0, n.Y)('a', { ...v.url.link, className: 'ss__pagination__page', ...Y.page?.all, children: v.number });
													}),
												(!T.includes(l.last.number) || (H && l.page !== l.last.number)) &&
													!J &&
													(0, n.FD)(n.FK, {
														children: [
															!T.includes(l.totalPages - 1) && !K && (0, n.Y)('span', { children: '\u2026' }),
															(0, n.Y)('a', {
																...l.last.url.link,
																className: s()('ss__pagination__page', 'ss__pagination__page--last'),
																...B.last?.all,
																children: w || l.last.number,
															}),
														],
													}),
												l.next &&
													!z &&
													(0, n.Y)('a', {
														...l.next.url.link,
														className: s()('ss__pagination__page', 'ss__pagination__page--next'),
														...B.next?.all,
														children: S || (0, n.Y)(d.I, { ...F.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				e.d(i, ['d', 0, C]);
			},
			'./components/src/hooks/useLang.tsx'(P, i, e) {
				'use strict';
				const n = (p, c) => {
					const g = {};
					return (
						Object.keys(p).forEach((s) => {
							const t = p && p[s],
								o = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (o.value = { 'ss-lang': s, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((o.attributes = { 'ss-lang': s }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (o.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (o.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (o.attributes.title = t.attributes.title(c))
											: (o.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (o.attributes.alt = t.attributes.alt(c)) : (o.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = t.attributes.placeholder(c))
											: (o.attributes.placeholder = t.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': s })),
								(g[s] = o);
						}),
						g
					);
				};
				e.d(i, ['u', 0, n]);
			},
			'./components/src/utilities/componentArgs.ts'(P, i, e) {
				'use strict';
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
				e.d(i, ['F', 0, n]);
			},
			'./components/src/utilities/defined.ts'(P, i, e) {
				'use strict';
				e.d(i, { s: () => n });
				function n(p) {
					const c = {};
					return (
						Object.keys(p).map((g) => {
							p[g] !== void 0 && (c[g] = p[g]);
						}),
						c
					);
				}
			},
			'./components/src/utilities/snapify.ts'(P, i, e) {
				'use strict';
				e.d(i, { p: () => C });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					D = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(a) {
						const m = a.id;
						if (h[m]) return h[m];
						const _ = (h[m] = A({ client: D, controller: a }));
						return (
							_.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(a) {
						const m = a.id;
						if (h[m]) return h[m];
						const _ = (h[m] = I({ client: D, controller: a }));
						return (
							_.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
					static search(a) {
						const m = a.id;
						if (h[m]) return h[m];
						const _ = (h[m] = j({ client: D, controller: a }));
						return (
							_.on('afterStore', async ({ controller: u }, E) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await E();
							}),
							_.init(),
							_
						);
					}
				}
				function j(r) {
					const a = new x.V(new M.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), y.X);
					return new p.Tp(r.controller, {
						client: new s.K(r.client.globals, r.client.config),
						store: new o.U(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new O.U(),
						logger: new b.V(),
						tracker: new f.J(r.client.globals),
					});
				}
				function A(r) {
					const a = new x.V(new M.E(), y.X).detach(!0);
					return new g.c(r.controller, {
						client: new s.K(r.client.globals, r.client.config),
						store: new L.t(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new O.U(),
						logger: new b.V(),
						tracker: new f.J(r.client.globals),
					});
				}
				function I(r) {
					const a = new x.V(new M.E(), y.X).detach();
					return new c.Z(r.controller, {
						client: new s.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new O.U(),
						logger: new b.V(),
						tracker: new f.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, i, e) {
				'use strict';
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					g = (s) => {
						const t = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								t.current && s.className?.includes('lang-') && !s.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [s.className, s.children, t]),
							(0, n.Y)('code', { ...s, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, g]);
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function i(e) {
					const n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (P.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Pagination-Pagination-stories.625def8e.iframe.bundle.js.map
