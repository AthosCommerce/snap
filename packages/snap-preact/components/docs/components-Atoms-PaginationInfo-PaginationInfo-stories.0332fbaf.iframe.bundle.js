(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(b, l, t) {
				'use strict';
				t.r(l), t.d(l, { Default: () => _, __namedExportsOrder: () => O, default: () => v });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = t('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					a = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts'),
					n = t('./components/src/utilities/snapify.ts');
				const x =
						"# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```tsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```tsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the PaginationInfo component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `infoText` | The pagination info display text | `pagination` (SearchPaginationStore) |\n\n### Example\n\n```tsx\n<PaginationInfo\n	controller={controller}\n	lang={{\n		infoText: {\n			value: (data) => `Showing ${data.pagination?.begin}-${data.pagination?.end} of ${data.pagination?.totalResults} products`,\n			attributes: {\n				'aria-label': (data) => `Displaying ${data.pagination?.totalResults} results`,\n			},\n		},\n	}}\n/>\n```\n",
					v = {
						title: 'Atoms/PaginationInfo',
						component: g.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(i.oz, { options: { overrides: { code: a.Z } }, children: x }), (0, r.Y)(i.uY, { story: i.h1 })],
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
							infoText: {
								description: 'Pagination info text to display',
								table: { type: { summary: 'string, ()=>string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							...e.F,
						},
					},
					P = n.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					y = (0, p.PA)(({ args: E, controller: h }) => (0, r.Y)(g.R, { ...E, pagination: h?.store?.pagination })),
					_ = (E, { loaded: { controller: h } }) => (0, r.Y)(y, { args: E, controller: h });
				(_.loaders = [async () => (await P.search(), { controller: P })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: PaginationInfoProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservablePaginationInfo args={args} controller={controller} />;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(b, l, t) {
				'use strict';
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/mobx-react-lite/es/index.js'),
					i = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = t('../../node_modules/classnames/index.js'),
					a = t.n(g),
					e = t('./components/src/providers/cache.tsx'),
					n = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = t('./components/src/providers/treePath.tsx'),
					v = t('./components/src/utilities/mergeProps.ts'),
					P = t('./components/src/utilities/mergeStyles.ts'),
					y = t('../../node_modules/deepmerge/dist/cjs.js'),
					_ = t.n(y),
					O = t('./components/src/hooks/useLang.tsx'),
					E = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({}) => (0, i.AH)({}),
					f = (0, p.PA)((M) => {
						const T = (0, n.u)(),
							I = (0, x.LU)(),
							u = M.controller?.store.pagination || M.pagination,
							C = {
								infoText: `${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${`${u?.totalResults} result${u?.totalResults == 1 ? '' : 's'}`}`,
								treePath: I,
							},
							o = (0, v.v6)('paginationInfo', T, C, M),
							{ controller: s, infoText: c, className: d, internalClassName: m } = o,
							{ overrideElement: D, shouldRenderDefault: A } = (0, E._)('paginationInfo', o);
						if (!A) return D;
						const R = u || s?.store?.pagination,
							j = (0, P.Z)(o, h),
							L = {
								infoText: {
									value: c,
									attributes: {
										'aria-label': `displaying ${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${u?.totalResults} result${
											u?.totalResults == 1 ? '' : 's'
										} ${s?.store?.search.query ? `for "${s?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							U = _()(L, o.lang || {}),
							K = (0, O.u)(U, { pagination: R });
						return R?.totalResults
							? (0, r.Y)(e._, {
									children: (0, r.Y)('div', {
										...j,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: a()('ss__pagination-info', d, m),
										...K.infoText?.all,
									}),
							  })
							: null;
					});
				t.d(l, ['R', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(b, l, t) {
				'use strict';
				const r = (p, i) => {
					const g = {};
					return (
						Object.keys(p).forEach((a) => {
							const e = p && p[a],
								n = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: e.value(i) } })
										: (n.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((n.attributes = { 'ss-lang': a }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = e.attributes['aria-label'](i))
											: (n.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](i))
											: (n.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (n.attributes.title = e.attributes.title(i))
											: (n.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (n.attributes.alt = e.attributes.alt(i)) : (n.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = e.attributes.placeholder(i))
											: (n.attributes.placeholder = e.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': a })),
								(g[a] = n);
						}),
						g
					);
				};
				t.d(l, ['u', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(b, l, t) {
				'use strict';
				const r = {
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
				t.d(l, ['F', 0, r]);
			},
			'./components/src/utilities/snapify.ts'(b, l, t) {
				'use strict';
				t.d(l, { p: () => T });
				var r = t('../../node_modules/mobx/dist/mobx.esm.js'),
					p = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					i = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					e = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					y = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					M = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(s) {
						const c = s.id;
						if (f[c]) return f[c];
						const d = (f[c] = u({ client: M, controller: s }));
						return (
							d.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(s) {
						const c = s.id;
						if (f[c]) return f[c];
						const d = (f[c] = C({ client: M, controller: s }));
						return (
							d.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							d.init(),
							d
						);
					}
					static search(s) {
						const c = s.id;
						if (f[c]) return f[c];
						const d = (f[c] = I({ client: M, controller: s }));
						return (
							d.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							d.init(),
							d
						);
					}
				}
				function I(o) {
					const s = new v.V(new y.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), P.X);
					return new p.Tp(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new n.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new h.J(o.client.globals),
					});
				}
				function u(o) {
					const s = new v.V(new y.E(), P.X).detach(!0);
					return new g.c(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new x.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new h.J(o.client.globals),
					});
				}
				function C(o) {
					const s = new v.V(new y.E(), P.X).detach();
					return new i.Z(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new e.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new E.V(),
						tracker: new h.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, l, t) {
				'use strict';
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					g = (a) => {
						const e = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								e.current && a.className?.includes('lang-') && !a.className?.includes(i) && window?.Prism?.highlightElement(e.current);
							}, [a.className, a.children, e]),
							(0, r.Y)('code', { ...a, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(l, ['Z', 0, g]);
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function l(t) {
					const r = new Error("Cannot find module '" + t + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (b.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.0332fbaf.iframe.bundle.js.map
