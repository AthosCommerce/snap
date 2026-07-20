(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4901],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx'(x, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => a, __namedExportsOrder: () => i, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					_ = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					d = e('./components/src/utilities/snapify.ts');
				const T =
					"# RecommendationBundleEasyAdd\n\nRenders a single recommended product and bundle CTA section that includes a visually hidden seed product. Like all of the bundle components, the first result passed will be treated as the seed. The Seed will not be rendered, but will be included in the cartstore, bundle pricing, and items included when adding to the cart. \n\n## Sub-components\n- RecommendationBundle\n\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline with the bundle.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```tsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleEasyAdd controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var y = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Templates/RecommendationBundleEasyAdd',
						component: n.F,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: _.Z } }, children: T }), (0, o.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, o.Y)('div', { style: { maxWidth: '500px' }, children: (0, o.Y)(m, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							results: {
								description: 'Results store reference, overrides controller.store.results',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							title: {
								description: 'recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onAddToCart: {
								description: 'onClick event handler for add bundle to cart button in CTA',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onAddToCart',
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(y.c)] },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaInline: {
								description: 'boolean to enable the stacked add to cart button display',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							ctaSlot: {
								description: 'Slot for custom add to cart component',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					f = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					A = d.p.recommendation(f),
					a = (m, { loaded: { controller: b } }) => (0, o.Y)(n.F, { ...m, controller: b, results: b.store.results });
				(a.loaders = [
					async () => (
						A.on('afterStore', async ({ controller: m }, b) => {
							m.store.results.forEach((p) => (p.mappings.core.url = 'javascript:void(0);')), await b();
						}),
						await A.search(),
						{ controller: A }
					),
				]),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleEasyAddProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleEasyAdd {...props} controller={controller} results={controller.store.results} />;
}`,
								...a.parameters?.docs?.source,
							},
						},
					});
				const i = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(x, s, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const h = () => (0, c.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					f = 'recommendationBundleEasyAdd',
					A = (0, _.PA)((a) => {
						const i = (0, n.u)(),
							m = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a },
							{ treePath: b, disableStyles: p, controller: P, style: E, styleScript: R, themeStyleScript: I, ...B } = m,
							r = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: f,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, t.s)({ disableStyles: p }),
									theme: m?.theme,
									treePath: b,
								},
							},
							l = (0, d.v6)(f, i, {}, m),
							u = (0, T.Z)(l, h);
						return (0, o.Y)(y.g, { controller: P, ...u, ...r.recommendationBundle, ...B });
					});
				e.d(s, ['F', 0, A]);
			},
			'./components/src/hooks/useIntersection.tsx'(x, s, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (n, _ = '0px', t = !1) => {
					const [d, T] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const y = new IntersectionObserver(
								([h]) => {
									T(h.isIntersecting), t && h.isIntersecting && y.unobserve(n.current);
								},
								{ rootMargin: _ }
							);
							return (
								n.current && y.observe(n.current),
								() => {
									y.unobserve(n.current);
								}
							);
						}, []),
						d
					);
				};
				e.d(s, ['v', 0, c]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(x, s, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					n = (t, d = {}) => {
						const { rootMargin: T = '0px', fireOnce: y = !1, threshold: h = 0, minVisibleTime: f = 0 } = d,
							[A, a] = (0, o.J0)(!1),
							i = (0, o.li)(null),
							m = (0, o.li)(null),
							[b, p] = (0, o.J0)(0),
							P = (0, o.hb)((E) => {
								(t.current = E), p((R) => R + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								a(!1);
								let E = null,
									R = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										R && (window.clearInterval(R), (R = null));
									},
									B = () => {
										f > 0
											? ((m.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													a(!0), y && t.current && E && E.unobserve(t.current);
											  }, f)))
											: (a(!0), y && t.current && E && E.unobserve(t.current));
									},
									r = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (m.current = null), a(!1);
									};
								return (
									(E = new IntersectionObserver(
										([l]) => {
											l.isIntersecting
												? t.current && _(t.current)
													? (I(), B())
													: (r(),
													  R ||
															(R = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																_(t.current) && (I(), B());
															}, c)))
												: (I(), r());
										},
										{ rootMargin: T, threshold: h }
									)),
									t.current && E.observe(t.current),
									() => {
										a(!1), I(), i.current && window.clearTimeout(i.current), E && t.current && E.unobserve(t.current);
									}
								);
							}, [t, b]),
							{ inViewport: A, updateRef: P }
						);
					};
				function _(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(s, ['v', 0, n]);
			},
			'./components/src/types.ts'(x, s, e) {
				'use strict';
				e.d(s, { Q: () => c, V: () => o });
				var o = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(o || {}),
					c = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(c || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, s, e) {
				'use strict';
				const o = {
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
				e.d(s, ['F', 0, o]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(x, s, e) {
				'use strict';
				e.d(s, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					_ = 1e3;
				function t(d) {
					const T = (0, o.li)(null),
						{ inViewport: y, updateRef: h } = (0, c.v)(T, { ...d, fireOnce: !0, threshold: n, minVisibleTime: _ });
					return { ref: T, inViewport: y, updateRef: h };
				}
			},
			'./components/src/utilities/snapify.ts'(x, s, e) {
				'use strict';
				e.d(s, { p: () => E });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					d = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					a = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					i = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					m = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					b = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					P = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(l) {
						const u = l.id;
						if (p[u]) return p[u];
						const v = (p[u] = I({ client: P, controller: l }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(l) {
						const u = l.id;
						if (p[u]) return p[u];
						const v = (p[u] = B({ client: P, controller: l }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
					static search(l) {
						const u = l.id;
						if (p[u]) return p[u];
						const v = (p[u] = R({ client: P, controller: l }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
				}
				function R(r) {
					const l = new h.V(new A.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), f.X);
					return new c.Tp(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new T.U(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new a.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new b.J(r.client.globals),
					});
				}
				function I(r) {
					const l = new h.V(new A.E(), f.X).detach(!0);
					return new _.c(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new y.t(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new a.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new b.J(r.client.globals),
					});
				}
				function B(r) {
					const l = new h.V(new A.E(), f.X).detach();
					return new n.Z(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new d.Y(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new a.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new b.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, s, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					_ = (t) => {
						const d = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								d.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(d.current);
							}, [t.className, t.children, d]),
							(0, o.Y)('code', { ...t, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(s, ['Z', 0, _]);
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function s(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (x.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleEasyAdd-RecommendationBundleEasyAdd-stories.2113a5f2.iframe.bundle.js.map
