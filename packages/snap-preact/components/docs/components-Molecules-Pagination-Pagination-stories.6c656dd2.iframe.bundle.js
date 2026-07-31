(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4401],
		{
			'./components/src/components/Molecules/Pagination/Pagination.stories.tsx'(v, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => h, __namedExportsOrder: () => M, default: () => s });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					g = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = t('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					a = t('./components/src/utilities/storybook.tsx'),
					d = t('./components/src/utilities/componentArgs.ts'),
					b = t('./components/src/utilities/snapify.ts');
				const n =
						"# Pagination\n\nRenders pagination page links for the given search response. \n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Pagination } from '@athoscommerce/snap-preact/components';\n```\n\n### pagination\nThe required `pagination` prop specifies a reference to the pagination store object.\n\n```tsx\n<Pagination pagination={controller.store.pagination} />\n```\n\n### pages\nThe `pages` prop specifies the number of pages to retrieve. This value is passed to the `store.pagination.getPages()` method.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pages={5} />\n```\n\n### pagesLeft\nThe `pagesLeft` prop specifies the number of pages to retrieve before the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesRight`. Must be used with `pagesRight` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesLeft={2} />\n```\n\n### pagesRight\nThe `pagesLeft` prop specifies the number of pages to retrieve after the current page. This value is passed to the `store.pagination.getPages()` method along with `pagesLeft`. Must be used with `pagesLeft` prop.\n\n```tsx\n<Pagination pagination={controller.store.pagination} pagesRight={2} />\n```\n\n### hideFirst\nThe `hideFirst` prop disables the first page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideFirst={true} />\n```\n\n### hideLast\nThe `hideLast` prop disables the last page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideLast={true} />\n```\n\n### persistFirst\nThe `persistFirst` prop ensures that the first page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `firstButton` '<<' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistFirst={true} />\n```\n\n### persistLast\nThe `persistLast` prop ensures that the last page button renders, even if it is within the subset of the currently displayed 'pages'. The use case for this would be if a `lastButton` '>>' is used.\n\n```tsx\n<Pagination pagination={controller.store.pagination} persistLast={true} />\n```\n\n### hideEllipsis\nThe `hideEllipsis` prop disables the hideEllipsis after the first page, or the last page when applicable. \n\n```tsx\n<Pagination pagination={controller.store.pagination} hideEllipsis={true} />\n```\n\n### hidePages\nThe `hidePages` prop hides the main page number buttons (excludes first and last pages, which have their own hide props).\n\n```tsx\n<Pagination pagination={controller.store.pagination} hidePages={true} />\n```\n\n### ellipsisContent\nThe `ellipsisContent` prop specifies custom content to render in the ellipsis sections. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} ellipsisContent={'...'} />\n```\n\n### hideNext\nThe `hideNext` prop disables the next page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hideNext={true} />\n```\n\n### hidePrev\nThe `hidePrev` prop disables the previous page.\n\n```tsx\n<Pagination pagination={controller.store.pagination} hidePrev={true} />\n```\n\n### nextButton\nThe `nextButton` prop specifies the next page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} nextButton={'Next'} />\n```\n\nUsing a JSX element:\n\n```tsx\n<Pagination pagination={controller.store.pagination} nextButton={<Icon icon={'angle-right'} />} />\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} prevButton={'Prev'} />\n```\n\nUsing a JSX element:\n\n```tsx\n<Pagination pagination={controller.store.pagination} prevButton={<Icon icon={'angle-left'} />} />\n```\n\n### firstButton\nThe `firstButton` prop specifies the first page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} firstButton={'First'} />\n```\n\n### lastButton\nThe `lastButton` prop specifies the last page button content. This can be a string or JSX element.\n\n```tsx\n<Pagination pagination={controller.store.pagination} lastButton={'Last'} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Pagination component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `previous` | Previous page button text/attributes | `pagination` (SearchPaginationStore) |\n| `next` | Next page button text/attributes | `pagination` (SearchPaginationStore) |\n| `first` | First page button text/attributes | `pagination` (SearchPaginationStore) |\n| `last` | Last page button text/attributes | `pagination` (SearchPaginationStore) |\n| `page` | Individual page number text/attributes | `pagination` (SearchPaginationStore), `page` (Page) |\n\n### Example\n\n```tsx\n<Pagination\n	pagination={controller.store.pagination}\n	lang={{\n		previous: {\n			attributes: {\n				'aria-label': 'Go to previous page',\n			},\n		},\n		next: {\n			attributes: {\n				'aria-label': 'Go to next page',\n			},\n		},\n		first: {\n			attributes: {\n				'aria-label': 'Go to the first page',\n			},\n		},\n		last: {\n			value: (data) => `Go to page ${data.pagination.last.number}`,\n			attributes: {\n				'aria-label': (data) => `Go to last page, page ${data.pagination.last.number}`,\n			},\n		},\n		page: {\n			attributes: {\n				'aria-label': (data) => `Go to page ${data.page.number} of ${data.pagination.totalPages}`,\n			},\n		},\n	}}\n/>\n```\n\nWhen used with Snap Templates, these values can also be set via the `translations` config:\n\n```tsx\nnew SnapTemplates({\n	...\n	translations: {\n		en: {\n			pagination: {\n				previous: {\n					attributes: { 'aria-label': 'Previous page' },\n				},\n				next: {\n					attributes: { 'aria-label': 'Next page' },\n				},\n				page: {\n					attributes: {\n						'aria-label': (data) => `Page ${data.page.number} of ${data.pagination.totalPages}`,\n					},\n				},\n			},\n		},\n	},\n});\n```",
					s = {
						title: 'Molecules/Pagination',
						component: m.d,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(g.oz, { options: { overrides: { code: a.Z } }, children: n }), (0, e.Y)(g.uY, { story: g.h1 })],
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
							hidePages: {
								description: 'Hide main page number buttons (excludes first and last)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							ellipsisContent: {
								description: 'Custom content for the ellipsis sections',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
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
							...d.F,
						},
					},
					E = b.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					L = (0, c.PA)(({ args: P, controller: y }) => (0, e.Y)(m.d, { ...P, pagination: y?.store?.pagination })),
					h = (P, { loaded: { controller: y } }) => (0, e.Y)(L, { args: P, controller: y });
				(h.loaders = [async () => (await E.search(), { controller: E })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/Pagination/Pagination.tsx'(v, i, t) {
				'use strict';
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					g = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = t('../../node_modules/classnames/index.js'),
					a = t.n(m),
					d = t('./components/src/providers/cache.tsx'),
					b = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = t('./components/src/providers/treePath.tsx'),
					s = t('./components/src/utilities/defined.ts'),
					E = t('./components/src/utilities/mergeProps.ts'),
					L = t('./components/src/utilities/mergeStyles.ts'),
					h = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = t('../../node_modules/deepmerge/dist/cjs.js'),
					P = t.n(M),
					y = t('./components/src/hooks/useLang.tsx'),
					f = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = () =>
						(0, g.AH)({
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
					S = (0, c.PA)((A) => {
						const B = (0, b.u)(),
							r = { pages: 5, treePath: (0, n.LU)() },
							o = (0, E.v6)('pagination', B, r, A),
							{
								pagination: p,
								controller: _,
								pages: u,
								pagesLeft: x,
								pagesRight: R,
								hideFirst: V,
								hideLast: X,
								persistFirst: H,
								persistLast: $,
								hideEllipsis: U,
								hidePages: G,
								hideNext: z,
								hidePrev: Z,
								nextButton: K,
								prevButton: W,
								firstButton: N,
								lastButton: w,
								ellipsisContent: F,
								disableStyles: k,
								className: Q,
								internalClassName: q,
								treePath: tt,
							} = o,
							{ overrideElement: et, shouldRenderDefault: nt } = (0, f._)('pagination', o);
						if (!nt) return et;
						const Y = {
								icon: { internalClassName: 'ss__pagination__icon', size: '10px', ...(0, s.s)({ disableStyles: k }), theme: o?.theme, treePath: tt },
							},
							l = p || _?.store?.pagination,
							at = Number.isInteger(x) && Number.isInteger(R) ? [x, R] : [u],
							I = l?.getPages(...at),
							O = I?.map((T) => T.number),
							st = (0, L.Z)(o, D),
							ot = {
								previous: { attributes: { 'aria-label': 'go to previous page' } },
								next: { attributes: { 'aria-label': 'go to next page' } },
								first: { attributes: { 'aria-label': 'go to first page' } },
								last: { attributes: { 'aria-label': `go to last page ${l?.last.number}` } },
							},
							rt = P()(ot, o.lang || {}),
							C = (0, y.u)(rt, { pagination: l }, { activeBreakpoint: B?.activeBreakpoint });
						return O && O.length > 1 && l?.totalResults
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...st,
										className: a()('ss__pagination', Q, q),
										children: (0, e.FD)('nav', {
											role: 'navigation',
											'aria-label': 'Pagination',
											children: [
												l.previous &&
													!Z &&
													(0, e.Y)('a', {
														...l.previous.url.link,
														className: a()('ss__pagination__page', 'ss__pagination__page--previous'),
														...C.previous?.all,
														children: W || (0, e.Y)(h.I, { ...Y.icon, icon: 'angle-left', name: 'prev' }),
													}),
												(!O.includes(l.first.number) || (H && l.page !== l.first.number)) &&
													!V &&
													(0, e.FD)(e.FK, {
														children: [
															(0, e.Y)('a', {
																...l.first.url.link,
																className: a()('ss__pagination__page', 'ss__pagination__page--first'),
																...C.first?.all,
																children: N || l.first.number,
															}),
															!O.includes(2) && !U && (0, e.Y)('span', { children: F ?? (0, e.Y)(e.FK, { children: '\u2026' }) }),
														],
													}),
												!G &&
													I &&
													I.map((T) => {
														const it = { page: { attributes: { 'aria-label': `go to page ${T.number}` } } },
															lt = P()(it, o.lang || {}),
															J = (0, y.u)(lt, { pagination: l, page: T }, { activeBreakpoint: B?.activeBreakpoint });
														return T.active
															? (0, e.Y)('span', {
																	className: a()('ss__pagination__page', 'ss__pagination__page--active'),
																	...J.page?.all,
																	'aria-current': 'true',
																	'aria-live': 'polite',
																	children: T.number,
															  })
															: (0, e.Y)('a', { ...T.url.link, className: 'ss__pagination__page', ...J.page?.all, children: T.number });
													}),
												(!O.includes(l.last.number) || ($ && l.page !== l.last.number)) &&
													!X &&
													(0, e.FD)(e.FK, {
														children: [
															!O.includes(l.totalPages - 1) && !U && (0, e.Y)('span', { children: F ?? (0, e.Y)(e.FK, { children: '\u2026' }) }),
															(0, e.Y)('a', {
																...l.last.url.link,
																className: a()('ss__pagination__page', 'ss__pagination__page--last'),
																...C.last?.all,
																children: w || l.last.number,
															}),
														],
													}),
												l.next &&
													!z &&
													(0, e.Y)('a', {
														...l.next.url.link,
														className: a()('ss__pagination__page', 'ss__pagination__page--next'),
														...C.next?.all,
														children: K || (0, e.Y)(h.I, { ...Y.icon, icon: 'angle-right', name: 'next' }),
													}),
											],
										}),
									}),
							  })
							: null;
					});
				t.d(i, ['d', 0, S]);
			},
			'./components/src/hooks/useLang.tsx'(v, i, t) {
				'use strict';
				const e = (c, g, m) => {
					const a = m ? { ...g, ...m } : g,
						d = {};
					return (
						Object.keys(c).forEach((b) => {
							const n = c && c[b],
								s = {};
							n &&
								(n?.value &&
									(typeof n.value == 'function'
										? (s.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: n.value(a) } })
										: (s.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: n.value } })),
								n?.attributes &&
									Object.keys(n?.attributes).length &&
									((s.attributes = { 'ss-lang': b }),
									n?.attributes?.['aria-label'] &&
										(typeof n.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = n.attributes['aria-label'](a))
											: (s.attributes['aria-label'] = n.attributes['aria-label'])),
									n?.attributes?.['aria-valuetext'] &&
										(typeof n.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = n.attributes['aria-valuetext'](a))
											: (s.attributes['aria-valuetext'] = n.attributes['aria-valuetext'])),
									n?.attributes?.title &&
										(typeof n.attributes?.title == 'function'
											? (s.attributes.title = n.attributes.title(a))
											: (s.attributes.title = n.attributes.title)),
									n?.attributes?.alt &&
										(typeof n.attributes?.alt == 'function' ? (s.attributes.alt = n.attributes.alt(a)) : (s.attributes.alt = n.attributes.alt)),
									n?.attributes?.placeholder &&
										(typeof n.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = n.attributes.placeholder(a))
											: (s.attributes.placeholder = n.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': b })),
								(d[b] = s);
						}),
						d
					);
				};
				t.d(i, ['u', 0, e]);
			},
			'./components/src/utilities/componentArgs.ts'(v, i, t) {
				'use strict';
				const e = {
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
				t.d(i, ['F', 0, e]);
			},
			'./components/src/utilities/defined.ts'(v, i, t) {
				'use strict';
				t.d(i, { s: () => e });
				function e(c) {
					const g = {};
					return (
						Object.keys(c).map((m) => {
							c[m] !== void 0 && (g[m] = c[m]);
						}),
						g
					);
				}
			},
			'./components/src/utilities/snapify.ts'(v, i, t) {
				'use strict';
				t.d(i, { p: () => S });
				var e = t('../../node_modules/mobx/dist/mobx.esm.js'),
					c = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					g = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					d = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					b = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					s = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					L = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, e.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					D = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(o) {
						const p = o.id;
						if (f[p]) return f[p];
						const _ = (f[p] = B({ client: D, controller: o }));
						return (
							_.on('afterStore', async ({ controller: u }, x) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(o) {
						const p = o.id;
						if (f[p]) return f[p];
						const _ = (f[p] = j({ client: D, controller: o }));
						return (
							_.on('afterStore', async ({ controller: u }, x) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
					static search(o) {
						const p = o.id;
						if (f[p]) return f[p];
						const _ = (f[p] = A({ client: D, controller: o }));
						return (
							_.on('afterStore', async ({ controller: u }, x) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
				}
				function A(r) {
					const o = new s.V(new L.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), E.X);
					return new c.Tp(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new b.U(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new h.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new y.J(r.client.globals),
					});
				}
				function B(r) {
					const o = new s.V(new L.E(), E.X).detach(!0);
					return new m.c(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new n.t(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new h.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new y.J(r.client.globals),
					});
				}
				function j(r) {
					const o = new s.V(new L.E(), E.X).detach();
					return new g.Z(r.controller, {
						client: new a.K(r.client.globals, r.client.config),
						store: new d.Y(r.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new h.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new y.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, t) {
				'use strict';
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 'prism-block',
					m = (a) => {
						const d = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								d.current && a.className?.includes('lang-') && !a.className?.includes(g) && window?.Prism?.highlightElement(d.current);
							}, [a.className, a.children, d]),
							(0, e.Y)('code', { ...a, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(i, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(t) {
					const e = new Error("Cannot find module '" + t + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Pagination-Pagination-stories.6c656dd2.iframe.bundle.js.map
