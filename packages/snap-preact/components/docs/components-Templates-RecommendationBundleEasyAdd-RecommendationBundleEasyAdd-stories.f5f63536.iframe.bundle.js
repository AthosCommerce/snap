(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4901],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx'(R, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => l, __namedExportsOrder: () => i, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					_ = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					d = e('./components/src/utilities/snapify.ts');
				const b =
					"# RecommendationBundleEasyAdd\n\nRenders a single recommended product and bundle CTA section that includes a visually hidden seed product. Like all of the bundle components, the first result passed will be treated as the seed. The Seed will not be rendered, but will be included in the cartstore, bundle pricing, and items included when adding to the cart. \n\n## Sub-components\n- RecommendationBundle\n\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline with the bundle.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleEasyAdd controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var y = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Templates/RecommendationBundleEasyAdd',
						component: a.F,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: _.Z } }, children: b }), (0, o.Y)(c.uY, { story: c.h1 })],
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
					f = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					A = d.p.recommendation(f),
					l = (m, { loaded: { controller: T } }) => (0, o.Y)(a.F, { ...m, controller: T, results: T.store.results });
				(l.loaders = [
					async () => (
						A.on('afterStore', async ({ controller: m }, T) => {
							m.store.results.forEach((p) => (p.mappings.core.url = 'javascript:void(0);')), await T();
						}),
						await A.search(),
						{ controller: A }
					),
				]),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
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
								...l.parameters?.docs?.source,
							},
						},
					});
				const i = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(R, s, e) {
				'use strict';
				e.d(s, { F: () => A });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const h = () => (0, c.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					f = 'recommendationBundleEasyAdd',
					A = (0, _.PA)((l) => {
						const i = (0, a.u)(),
							m = { name: l.controller?.store?.profile?.tag?.toLowerCase(), ...l },
							{ treePath: T, disableStyles: p, controller: I, style: E, styleScript: x, themeStyleScript: P, ...B } = m,
							n = {
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
									treePath: T,
								},
							},
							r = (0, d.v6)(f, i, {}, m),
							u = (0, b.Z)(r, h);
						return (0, o.Y)(y.g, { controller: I, ...u, ...n.recommendationBundle, ...B });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, s, e) {
				'use strict';
				e.d(s, { v: () => c });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (a, _ = '0px', t = !1) => {
					const [d, b] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const y = new IntersectionObserver(
								([h]) => {
									b(h.isIntersecting), t && h.isIntersecting && y.unobserve(a.current);
								},
								{ rootMargin: _ }
							);
							return (
								a.current && y.observe(a.current),
								() => {
									y.unobserve(a.current);
								}
							);
						}, []),
						d
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, s, e) {
				'use strict';
				e.d(s, { v: () => a });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					a = (t, d = {}) => {
						const { rootMargin: b = '0px', fireOnce: y = !1, threshold: h = 0, minVisibleTime: f = 0 } = d,
							[A, l] = (0, o.J0)(!1),
							i = (0, o.li)(null),
							m = (0, o.li)(null),
							[T, p] = (0, o.J0)(0),
							I = (0, o.hb)((E) => {
								(t.current = E), p((x) => x + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								l(!1);
								let E = null,
									x = null;
								if (!window.IntersectionObserver || !t.current) return;
								const P = () => {
										x && (window.clearInterval(x), (x = null));
									},
									B = () => {
										f > 0
											? ((m.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													l(!0), y && t.current && E && E.unobserve(t.current);
											  }, f)))
											: (l(!0), y && t.current && E && E.unobserve(t.current));
									},
									n = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (m.current = null), l(!1);
									};
								return (
									(E = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? t.current && _(t.current)
													? (P(), B())
													: (n(),
													  x ||
															(x = window.setInterval(() => {
																if (!t.current) {
																	P();
																	return;
																}
																_(t.current) && (P(), B());
															}, c)))
												: (P(), n());
										},
										{ rootMargin: b, threshold: h }
									)),
									t.current && E.observe(t.current),
									() => {
										l(!1), P(), i.current && window.clearTimeout(i.current), E && t.current && E.unobserve(t.current);
									}
								);
							}, [t, T]),
							{ inViewport: A, updateRef: I }
						);
					};
				function _(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(R, s, e) {
				'use strict';
				e.d(s, { F: () => o });
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
			},
			'./components/src/utilities/createImpressionObserver.ts'(R, s, e) {
				'use strict';
				e.d(s, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					_ = 1e3;
				function t(d) {
					const b = (0, o.li)(null),
						{ inViewport: y, updateRef: h } = (0, c.v)(b, { ...d, fireOnce: !0, threshold: a, minVisibleTime: _ });
					return { ref: b, inViewport: y, updateRef: h };
				}
			},
			'./components/src/utilities/snapify.ts'(R, s, e) {
				'use strict';
				e.d(s, { p: () => E });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					d = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					l = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					i = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					m = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					I = { globals: { siteId: 'atkzs2' } };
				class E {
					static recommendation(r) {
						const u = r.id;
						if (p[u]) return p[u];
						const v = (p[u] = P({ client: I, controller: r }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(r) {
						const u = r.id;
						if (p[u]) return p[u];
						const v = (p[u] = B({ client: I, controller: r }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
					static search(r) {
						const u = r.id;
						if (p[u]) return p[u];
						const v = (p[u] = x({ client: I, controller: r }));
						return (
							v.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							v.init(),
							v
						);
					}
				}
				function x(n) {
					const r = new h.V(new A.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), f.X);
					return new c.Tp(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new b.U(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function P(n) {
					const r = new h.V(new A.E(), f.X).detach(!0);
					return new _.c(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new y.t(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function B(n) {
					const r = new h.V(new A.E(), f.X).detach();
					return new a.Z(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new d.Y(n.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new i.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, s, e) {
				'use strict';
				e.d(s, { Z: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					_ = (t) => {
						const d = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								d.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(d.current);
							}, [t.className, t.children, d]),
							(0, o.Y)('code', { ...t, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function s(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (R.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleEasyAdd-RecommendationBundleEasyAdd-stories.f5f63536.iframe.bundle.js.map
