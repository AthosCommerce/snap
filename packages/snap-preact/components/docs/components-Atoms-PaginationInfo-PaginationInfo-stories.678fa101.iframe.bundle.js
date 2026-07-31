(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(y, l, t) {
				'use strict';
				t.r(l), t.d(l, { Default: () => f, __namedExportsOrder: () => M, default: () => o });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/mobx-react-lite/es/index.js'),
					_ = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = t('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					a = t('./components/src/utilities/storybook.tsx'),
					m = t('./components/src/utilities/componentArgs.ts'),
					g = t('./components/src/utilities/snapify.ts');
				const e =
						"# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```tsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```tsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the PaginationInfo component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `infoText` | The pagination info display text | `pagination` (SearchPaginationStore) |\n\n### Example\n\n```tsx\n<PaginationInfo\n	controller={controller}\n	lang={{\n		infoText: {\n			value: (data) => `Showing ${data.pagination?.begin}-${data.pagination?.end} of ${data.pagination?.totalResults} products`,\n			attributes: {\n				'aria-label': (data) => `Displaying ${data.pagination?.totalResults} results`,\n			},\n		},\n	}}\n/>\n```\n",
					o = {
						title: 'Atoms/PaginationInfo',
						component: E.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(_.oz, { options: { overrides: { code: a.Z } }, children: e }), (0, r.Y)(_.uY, { story: _.h1 })],
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
							...m.F,
						},
					},
					v = g.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					O = (0, p.PA)(({ args: P, controller: b }) => (0, r.Y)(E.R, { ...P, pagination: b?.store?.pagination })),
					f = (P, { loaded: { controller: b } }) => (0, r.Y)(O, { args: P, controller: b });
				(f.loaders = [async () => (await v.search(), { controller: v })]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(y, l, t) {
				'use strict';
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/mobx-react-lite/es/index.js'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = t('../../node_modules/classnames/index.js'),
					a = t.n(E),
					m = t('./components/src/providers/cache.tsx'),
					g = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					e = t('./components/src/providers/treePath.tsx'),
					o = t('./components/src/utilities/mergeProps.ts'),
					v = t('./components/src/utilities/mergeStyles.ts'),
					O = t('../../node_modules/deepmerge/dist/cjs.js'),
					f = t.n(O),
					M = t('./components/src/hooks/useLang.tsx'),
					P = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = ({}) => (0, _.AH)({}),
					h = (0, p.PA)((D) => {
						const T = (0, g.u)(),
							I = (0, e.LU)(),
							u = D.controller?.store.pagination || D.pagination,
							C = {
								infoText: `${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${`${u?.totalResults} result${u?.totalResults == 1 ? '' : 's'}`}`,
								treePath: I,
							},
							n = (0, o.v6)('paginationInfo', T, C, D),
							{ controller: s, infoText: i, className: d, internalClassName: c } = n,
							{ overrideElement: x, shouldRenderDefault: A } = (0, P._)('paginationInfo', n);
						if (!A) return x;
						const R = u || s?.store?.pagination,
							j = (0, v.Z)(n, b),
							L = {
								infoText: {
									value: i,
									attributes: {
										'aria-label': `displaying ${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${u?.totalResults} result${
											u?.totalResults == 1 ? '' : 's'
										} ${s?.store?.search.query ? `for "${s?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							U = f()(L, n.lang || {}),
							K = (0, M.u)(U, { pagination: R }, { activeBreakpoint: T?.activeBreakpoint });
						return R?.totalResults
							? (0, r.Y)(m._, {
									children: (0, r.Y)('div', {
										...j,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: a()('ss__pagination-info', d, c),
										...K.infoText?.all,
									}),
							  })
							: null;
					});
				t.d(l, ['R', 0, h]);
			},
			'./components/src/hooks/useLang.tsx'(y, l, t) {
				'use strict';
				const r = (p, _, E) => {
					const a = E ? { ..._, ...E } : _,
						m = {};
					return (
						Object.keys(p).forEach((g) => {
							const e = p && p[g],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: e.value(a) } })
										: (o.value = { 'ss-lang': g, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': g }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](a))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](a))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(a))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(a)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(a))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': g })),
								(m[g] = o);
						}),
						m
					);
				};
				t.d(l, ['u', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(y, l, t) {
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
			'./components/src/utilities/snapify.ts'(y, l, t) {
				'use strict';
				t.d(l, { p: () => T });
				var r = t('../../node_modules/mobx/dist/mobx.esm.js'),
					p = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = t('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = t('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					g = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					e = t('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					o = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = t('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = t('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = t('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					P = t('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = t('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					D = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(s) {
						const i = s.id;
						if (h[i]) return h[i];
						const d = (h[i] = u({ client: D, controller: s }));
						return (
							d.on('afterStore', async ({ controller: c }, x) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await x();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(s) {
						const i = s.id;
						if (h[i]) return h[i];
						const d = (h[i] = C({ client: D, controller: s }));
						return (
							d.on('afterStore', async ({ controller: c }, x) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await x();
							}),
							d.init(),
							d
						);
					}
					static search(s) {
						const i = s.id;
						if (h[i]) return h[i];
						const d = (h[i] = I({ client: D, controller: s }));
						return (
							d.on('afterStore', async ({ controller: c }, x) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await x();
							}),
							d.init(),
							d
						);
					}
				}
				function I(n) {
					const s = new o.V(new O.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), v.X);
					return new p.Tp(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new g.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new b.J(n.client.globals),
					});
				}
				function u(n) {
					const s = new o.V(new O.E(), v.X).detach(!0);
					return new E.c(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new e.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new b.J(n.client.globals),
					});
				}
				function C(n) {
					const s = new o.V(new O.E(), v.X).detach();
					return new _.Z(n.controller, {
						client: new a.K(n.client.globals, n.client.config),
						store: new m.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new f.E(),
						profiler: new M.U(),
						logger: new P.V(),
						tracker: new b.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, l, t) {
				'use strict';
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					E = (a) => {
						const m = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								m.current && a.className?.includes('lang-') && !a.className?.includes(_) && window?.Prism?.highlightElement(m.current);
							}, [a.className, a.children, m]),
							(0, r.Y)('code', { ...a, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
				t.d(l, ['Z', 0, E]);
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function l(t) {
					const r = new Error("Cannot find module '" + t + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (y.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.678fa101.iframe.bundle.js.map
