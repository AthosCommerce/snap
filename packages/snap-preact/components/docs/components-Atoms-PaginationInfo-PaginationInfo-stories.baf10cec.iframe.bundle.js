(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(b, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => p, __namedExportsOrder: () => M, default: () => v });
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					g = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const x =
						'# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```tsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```tsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```tsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```',
					v = {
						title: 'Atoms/PaginationInfo',
						component: g.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, a.FD)('div', {
										children: [(0, a.Y)(i.oz, { options: { overrides: { code: r.Z } }, children: x }), (0, a.Y)(i.uY, { story: i.h1 })],
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
							...t.F,
						},
					},
					h = n.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					O = (0, _.PA)(({ args: E, controller: P }) => (0, a.Y)(g.R, { ...E, pagination: P?.store?.pagination })),
					p = (E, { loaded: { controller: P } }) => (0, a.Y)(O, { args: E, controller: P });
				(p.loaders = [async () => (await h.search(), { controller: h })]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
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
								...p.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(b, l, e) {
				'use strict';
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					r = e.n(g),
					t = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(O),
					M = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({}) => (0, i.AH)({}),
					f = (0, _.PA)((y) => {
						const I = (0, n.u)(),
							T = (0, x.LU)(),
							u = y.controller?.store.pagination || y.pagination,
							C = {
								infoText: `${u?.multiplePages ? `${u?.begin} - ${u?.end} of` : ''} ${`${u?.totalResults} result${u?.totalResults == 1 ? '' : 's'}`}`,
								treePath: T,
							},
							o = (0, v.v6)('paginationInfo', I, C, y),
							{ controller: s, infoText: c, className: d, internalClassName: m } = o,
							{ overrideElement: D, shouldRenderDefault: R } = (0, E._)('paginationInfo', o);
						if (!R) return D;
						const A = u || s?.store?.pagination,
							j = (0, h.Z)(o, P),
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
							U = p()(L, o.lang || {}),
							K = (0, M.u)(U, { pagination: A });
						return A?.totalResults
							? (0, a.Y)(t._, {
									children: (0, a.Y)('div', {
										...j,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: r()('ss__pagination-info', d, m),
										...K.infoText?.all,
									}),
							  })
							: null;
					});
				e.d(l, ['R', 0, f]);
			},
			'./components/src/hooks/useLang.tsx'(b, l, e) {
				'use strict';
				const a = (_, i) => {
					const g = {};
					return (
						Object.keys(_).forEach((r) => {
							const t = _ && _[r],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(i) } })
										: (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](i))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](i))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(i))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(i)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(i))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': r })),
								(g[r] = n);
						}),
						g
					);
				};
				e.d(l, ['u', 0, a]);
			},
			'./components/src/utilities/componentArgs.ts'(b, l, e) {
				'use strict';
				const a = {
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
				e.d(l, ['F', 0, a]);
			},
			'./components/src/utilities/snapify.ts'(b, l, e) {
				'use strict';
				e.d(l, { p: () => I });
				var a = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, a.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					y = { globals: { siteId: 'atkzs2' } };
				class I {
					static recommendation(s) {
						const c = s.id;
						if (f[c]) return f[c];
						const d = (f[c] = u({ client: y, controller: s }));
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
						const d = (f[c] = C({ client: y, controller: s }));
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
						const d = (f[c] = T({ client: y, controller: s }));
						return (
							d.on('afterStore', async ({ controller: m }, D) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await D();
							}),
							d.init(),
							d
						);
					}
				}
				function T(o) {
					const s = new v.V(new O.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), h.X);
					return new _.Tp(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new n.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new E.V(),
						tracker: new P.J(o.client.globals),
					});
				}
				function u(o) {
					const s = new v.V(new O.E(), h.X).detach(!0);
					return new g.c(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new x.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new E.V(),
						tracker: new P.J(o.client.globals),
					});
				}
				function C(o) {
					const s = new v.V(new O.E(), h.X).detach();
					return new i.Z(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new t.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new M.U(),
						logger: new E.V(),
						tracker: new P.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, l, e) {
				'use strict';
				var a = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					g = (r) => {
						const t = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(i) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, a.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, g]);
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function l(e) {
					const a = new Error("Cannot find module '" + e + "'");
					throw ((a.code = 'MODULE_NOT_FOUND'), a);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (b.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.baf10cec.iframe.bundle.js.map
