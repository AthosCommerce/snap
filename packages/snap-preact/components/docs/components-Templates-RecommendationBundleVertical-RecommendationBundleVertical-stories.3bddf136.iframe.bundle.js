(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6969],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx'(R, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => l, __namedExportsOrder: () => d, default: () => y });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'),
					_ = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const f = `# RecommendationBundleVertical

Vertically renders a recommended bundle of products with seed, recommendations and add to cart display.

## Sub-components
- RecommendationBundle

## Usage

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### onAddToCart 
the \`onAddToCart\` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. 

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`. Note the first result will be displayed as the \`seed\` product. 

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />
\`\`\`


### hideSeed
The \`hideSeed\` prop specifies if the seed result should be rendered or not.  

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />
\`\`\`

### title
The \`title\` prop specifies the bundle title

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />
\`\`\`

### resultComponent
The \`resultComponent\` prop allows for a custom result component to be rendered. This component will be passed the following props -

\`\`\`jsx
	{ 
		result: Product, 
		seed: boolean, 
		selected: boolean, 
		onProductSelect: (result:Product) => void
	}
\`\`\`

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />
\`\`\`

### ctaButtonText
The \`ctaButtonText\` prop specifies the inner text to render in the add to cart button.

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />
\`\`\`

### ctaButtonSuccessText
The \`ctaButtonSuccessText\` prop specifies text to temporarily render in the add to cart button after it is clicked.

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />
\`\`\`

### ctaButtonSuccessTimeout
The \`ctaButtonSuccessTimeout\` prop specifies number of ms to show success text in add to cart button before reverting back to normal text

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />
\`\`\`

### ctaIcon
The \`ctaIcon\` prop specifies the icon to render in the CTA. Takes an object with \`Icon\` component props or a string.     

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />
\`\`\`

### ctaSlot
The \`ctaSlot\` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -

\`\`\`jsx	
	{ 
		cartStore: CartStore;
		onclick: (e:any) => void
	}
\`\`\`

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />
\`\`\`

### preselectedCount
The \`preselectedCount\` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example \`preselectedCount={3}\` would be \`seed\` + 2 preselected items. If not provided, this will default to however many products are initially visible. 

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />
\`\`\`

### seedText
The \`seedText\` prop specifies text to be rendered as a badge in the seed product.   

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={"Main Product"} />
\`\`\`

### separatorIcon
The \`separatorIcon\` prop specifies the icon to render between products. Takes an object with \`Icon\` component props or a string.     

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />
\`\`\`

### separatorIconSeedOnly
The \`separatorIconSeedOnly\` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />
\`\`\`


### hideCheckboxes
The \`hideCheckboxes\` prop specifies if the bundle checkboxes should be rendered. 

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\` and \`Pagination\` modules by default.

\`\`\`jsx
import { Scrollbar } from 'swiper';
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationBundleVertical controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the bundle at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The configuration can take any **\`RecommendationBundleVertical props\`**, 

\`\`\`typescript
const customRecommendationBreakpoints = {
	0: {
		limit: 2
	},
	768: {
		limit: 3
	},
	1024: {
		limit: 4
	},
	1200: {
		limit: 5
	},
};
\`\`\`

\`\`\`jsx
<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={customRecommendationBreakpoints} />
\`\`\`

`;
				var p = e('./components/src/components/Atoms/Icon/paths.tsx');
				const y = {
						title: 'Templates/RecommendationBundleVertical',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(c.oz, { options: { overrides: { code: _.Z } }, children: f }), (0, o.Y)(c.uY, { story: c.h1 })],
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
							limit: {
								description: 'limit the number of results rendered',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideCheckboxes: {
								defaultValue: !1,
								description: 'Hide/show bundle checkboxes in results',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIconSeedOnly: {
								description: 'boolean to only have seperator Icon for the seed product',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIcon: {
								defaultValue: 'plus',
								description: 'Icon to render between results',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
								control: { type: 'select', options: [...Object.keys(p.c)] },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(p.c)] },
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
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					E = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					v = i.p.recommendation(E),
					l = (m, { loaded: { controller: T } }) => (0, o.Y)(a.a, { ...m, controller: T, results: T.store.results });
				(l.loaders = [
					async () => (
						v.on('afterStore', async ({ controller: m }, T) => {
							m.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await T();
						}),
						await v.search(),
						{ controller: v }
					),
				]),
					(l.args = { limit: 3 }),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleVerticalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleVertical {...props} controller={controller} results={controller.store.results} />;
}`,
								...l.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(R, r, e) {
				'use strict';
				e.d(r, { a: () => v });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const y = () =>
						(0, c.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					E = 'recommendationBundleVertical',
					v = (0, _.PA)((l) => {
						const d = (0, a.u)(),
							m = { name: l.controller?.store?.profile?.tag?.toLowerCase(), ...l },
							{ treePath: T, disableStyles: h, controller: B, style: g, styleScript: C, themeStyleScript: I, ...P } = m,
							n = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: E,
									...(0, t.s)({ disableStyles: h }),
									theme: m?.theme,
									treePath: T,
								},
							},
							s = (0, i.v6)(E, d, {}, m),
							u = (0, f.Z)(s, y);
						return (0, o.Y)(p.g, { controller: B, ...u, ...n.recommendationBundle, ...P });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, r, e) {
				'use strict';
				e.d(r, { v: () => c });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (a, _ = '0px', t = !1) => {
					const [i, f] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const p = new IntersectionObserver(
								([y]) => {
									f(y.isIntersecting), t && y.isIntersecting && p.unobserve(a.current);
								},
								{ rootMargin: _ }
							);
							return (
								a.current && p.observe(a.current),
								() => {
									p.unobserve(a.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, r, e) {
				'use strict';
				e.d(r, { v: () => a });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					a = (t, i = {}) => {
						const { rootMargin: f = '0px', fireOnce: p = !1, threshold: y = 0, minVisibleTime: E = 0 } = i,
							[v, l] = (0, o.J0)(!1),
							d = (0, o.li)(null),
							m = (0, o.li)(null),
							[T, h] = (0, o.J0)(0),
							B = (0, o.hb)((g) => {
								(t.current = g), h((C) => C + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								l(!1);
								let g = null,
									C = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										C && (window.clearInterval(C), (C = null));
									},
									P = () => {
										E > 0
											? ((m.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													l(!0), p && t.current && g && g.unobserve(t.current);
											  }, E)))
											: (l(!0), p && t.current && g && g.unobserve(t.current));
									},
									n = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (m.current = null), l(!1);
									};
								return (
									(g = new IntersectionObserver(
										([s]) => {
											s.isIntersecting
												? t.current && _(t.current)
													? (I(), P())
													: (n(),
													  C ||
															(C = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																_(t.current) && (I(), P());
															}, c)))
												: (I(), n());
										},
										{ rootMargin: f, threshold: y }
									)),
									t.current && g.observe(t.current),
									() => {
										l(!1), I(), d.current && window.clearTimeout(d.current), g && t.current && g.unobserve(t.current);
									}
								);
							}, [t, T]),
							{ inViewport: v, updateRef: B }
						);
					};
				function _(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(R, r, e) {
				'use strict';
				e.d(r, { F: () => o });
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
			'./components/src/utilities/createImpressionObserver.ts'(R, r, e) {
				'use strict';
				e.d(r, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					_ = 1e3;
				function t(i) {
					const f = (0, o.li)(null),
						{ inViewport: p, updateRef: y } = (0, c.v)(f, { ...i, fireOnce: !0, threshold: a, minVisibleTime: _ });
					return { ref: f, inViewport: p, updateRef: y };
				}
			},
			'./components/src/utilities/snapify.ts'(R, r, e) {
				'use strict';
				e.d(r, { p: () => g });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					l = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					m = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					B = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(s) {
						const u = s.id;
						if (h[u]) return h[u];
						const x = (h[u] = I({ client: B, controller: s }));
						return (
							x.on('afterStore', async ({ controller: b }, O) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await O();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(s) {
						const u = s.id;
						if (h[u]) return h[u];
						const x = (h[u] = P({ client: B, controller: s }));
						return (
							x.on('afterStore', async ({ controller: b }, O) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await O();
							}),
							x.init(),
							x
						);
					}
					static search(s) {
						const u = s.id;
						if (h[u]) return h[u];
						const x = (h[u] = C({ client: B, controller: s }));
						return (
							x.on('afterStore', async ({ controller: b }, O) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await O();
							}),
							x.init(),
							x
						);
					}
				}
				function C(n) {
					const s = new y.V(new v.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), E.X);
					return new c.Tp(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new f.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function I(n) {
					const s = new y.V(new v.E(), E.X).detach(!0);
					return new _.c(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new p.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
				function P(n) {
					const s = new y.V(new v.E(), E.X).detach();
					return new a.Z(n.controller, {
						client: new t.K(n.client.globals, n.client.config),
						store: new i.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new m.V(),
						tracker: new T.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, r, e) {
				'use strict';
				e.d(r, { Z: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					_ = (t) => {
						const i = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								i.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(i.current);
							}, [t.className, t.children, i]),
							(0, o.Y)('code', { ...t, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function r(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (R.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleVertical-RecommendationBundleVertical-stories.3bddf136.iframe.bundle.js.map
