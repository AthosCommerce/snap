(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9800],
		{
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.stories.tsx'(h, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => _, __namedExportsOrder: () => O, default: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					p = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					n = e('./components/src/utilities/snapify.ts');
				const y =
						'# PaginationInfo\n\nRenders a current count of the current products available.\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<PaginationInfo controller={controller} />\n```\n\n### Store Props\nAlternatively to using the `controller` prop, you can pass the required pagination store individually. The `pagination` prop specifies a reference to the SearchPaginationStore. \n\n```jsx\n<PaginationInfo pagination={SearchPaginationStore} />\n```\n\n### infoText\nThe `infoText` prop specifies the text to render in the component. This can be either a string, or a function that returns a string, functions are passed the pagination store for reference to build out custom text.\n\n```jsx\n<PaginationInfo controller={controller} infoText={(pagination) => (`${pagination.totalResults} Results`)}/>\n```',
					v = {
						title: 'Atoms/PaginationInfo',
						component: p.R,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(c.oz, { options: { overrides: { code: r.Z } }, children: y }), (0, s.Y)(c.uY, { story: c.h1 })],
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
					P = n.p.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } }),
					b = (0, d.PA)(({ args: f, controller: E }) => (0, s.Y)(p.R, { ...f, pagination: E?.store?.pagination })),
					_ = (f, { loaded: { controller: E } }) => (0, s.Y)(b, { args: f, controller: E });
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
			'./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'(h, i, e) {
				'use strict';
				e.d(i, { R: () => D });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = e('../../node_modules/classnames/index.js'),
					r = e.n(p),
					t = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					v = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					O = e.n(_),
					f = e('./components/src/hooks/useLang.tsx'),
					E = e('./components/src/hooks/useComponent.tsx');
				const g = ({}) => (0, c.AH)({}),
					D = (0, d.PA)((x) => {
						const I = (0, n.u)(),
							T = (0, y.uk)(),
							C = (0, v.LU)(),
							o = x.controller?.store.pagination || x.pagination,
							a = {
								infoText: `${o?.multiplePages ? `${o?.begin} - ${o?.end} of` : ''} ${`${o?.totalResults} result${o?.totalResults == 1 ? '' : 's'}`}`,
								treePath: C,
							},
							l = (0, P.v6)('paginationInfo', I, a, x),
							{ controller: u, infoText: m, className: M, internalClassName: L, customComponent: j } = l;
						if (j) {
							const R = (0, E.x)(T?.templates?.library.import.component.paginationInfo || {}, j);
							if (R) return (0, s.Y)(R, { ...l });
						}
						const A = o || u?.store?.pagination,
							U = (0, b.Z)(l, g),
							K = {
								infoText: {
									value: m,
									attributes: {
										'aria-label': `displaying ${o?.multiplePages ? `${o?.begin} - ${o?.end} of` : ''} ${o?.totalResults} result${
											o?.totalResults == 1 ? '' : 's'
										} ${u?.store?.search.query ? `for "${u?.store?.search.query.string}"` : ''}`,
									},
								},
							},
							B = O()(K, l.lang || {}),
							S = (0, f.u)(B, { pagination: A });
						return A?.totalResults
							? (0, s.Y)(t._, {
									children: (0, s.Y)('div', {
										...U,
										'aria-atomic': !0,
										'aria-live': 'assertive',
										className: r()('ss__pagination-info', M, L),
										...S.infoText?.all,
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(h, i, e) {
				'use strict';
				e.d(i, { u: () => s });
				const s = (d, c) => {
					const p = {};
					return (
						Object.keys(d).forEach((r) => {
							const t = d && d[r],
								n = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (n.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((n.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (n.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (n.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (n.attributes.title = t.attributes.title(c))
											: (n.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (n.attributes.alt = t.attributes.alt(c)) : (n.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = t.attributes.placeholder(c))
											: (n.attributes.placeholder = t.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': r })),
								(p[r] = n);
						}),
						p
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(h, i, e) {
				'use strict';
				e.d(i, { F: () => s });
				const s = {
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
			'./components/src/utilities/snapify.ts'(h, i, e) {
				'use strict';
				e.d(i, { p: () => x });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					_ = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					f = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					D = { globals: { siteId: 'atkzs2' } };
				class x {
					static recommendation(a) {
						const l = a.id;
						if (g[l]) return g[l];
						const u = (g[l] = T({ client: D, controller: a }));
						return (
							u.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							u.init(),
							u
						);
					}
					static autocomplete(a) {
						const l = a.id;
						if (g[l]) return g[l];
						const u = (g[l] = C({ client: D, controller: a }));
						return (
							u.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							u.init(),
							u
						);
					}
					static search(a) {
						const l = a.id;
						if (g[l]) return g[l];
						const u = (g[l] = I({ client: D, controller: a }));
						return (
							u.on('afterStore', async ({ controller: m }, M) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await M();
							}),
							u.init(),
							u
						);
					}
				}
				function I(o) {
					const a = new v.V(new b.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), P.X);
					return new d.Tp(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new n.U(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new f.V(),
						tracker: new E.J(o.client.globals),
					});
				}
				function T(o) {
					const a = new v.V(new b.E(), P.X).detach(!0);
					return new p.c(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new y.t(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new f.V(),
						tracker: new E.J(o.client.globals),
					});
				}
				function C(o) {
					const a = new v.V(new b.E(), P.X).detach();
					return new c.Z(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new t.Y(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new _.E(),
						profiler: new O.U(),
						logger: new f.V(),
						tracker: new E.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(h, i, e) {
				'use strict';
				e.d(i, { Z: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					p = (r) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, s.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (h.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-PaginationInfo-PaginationInfo-stories.ced63656.iframe.bundle.js.map
