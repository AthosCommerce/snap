(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9797],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx'(I, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => m, __namedExportsOrder: () => _, default: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const f =
					"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```tsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```tsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered\n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```tsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```tsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var g = e('./components/src/components/Atoms/Icon/paths.tsx');
				const h = {
						title: 'Templates/RecommendationBundleList',
						component: r.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(d.oz, { options: { overrides: { code: p.Z } }, children: f }), (0, t.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '500px' }, children: (0, t.Y)(y, {}) })],
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
							hideSeed: {
								description: 'Hide/show seed result',
								defaultValue: !1,
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSeedText: {
								description: 'hide the seed text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							hideCheckboxes: {
								description: 'hide the checkboxes',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
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
								control: { type: 'select', options: [...Object.keys(g.c)] },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
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
							...n.F,
						},
					},
					C = { id: 'RecommendationBundle', tag: 'bundley', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					E = u.p.recommendation(C),
					m = (y, { loaded: { controller: P } }) => (0, t.Y)(r.a, { ...y, controller: P, results: P.store.results });
				(m.loaders = [
					async () => (
						E.on('afterStore', async ({ controller: y }, P) => {
							y.store.results.forEach((b) => (b.mappings.core.url = 'javascript:void(0);')), await P();
						}),
						await E.search(),
						{ controller: E }
					),
				]),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleListProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleList {...props} controller={controller} results={controller.store.results} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(I, a, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					h = e('./components/src/components/Atoms/Price/Price.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx'),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					m = e('./components/src/components/Atoms/Image/Image.tsx'),
					_ = e('./components/src/utilities/componentNameToClassName.ts'),
					y = e('../../node_modules/classnames/index.js'),
					P = e.n(y),
					b = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(B),
					x = e('./components/src/hooks/useLang.tsx');
				const O = () =>
						(0, d.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					R = 'recommendationBundleList',
					l = (0, p.PA)((o) => {
						const i = (0, r.u)(),
							s = { name: o.controller?.store?.profile?.tag?.toLowerCase(), ...o },
							{ treePath: v, disableStyles: D, controller: L, style: S, styleScript: w, themeStyleScript: A, ...M } = s,
							j = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (W) => (0, t.Y)(c, { ...W }),
									vertical: !0,
									separatorIcon: !1,
									alias: R,
									...(0, n.s)({ disableStyles: D }),
									theme: s?.theme,
									treePath: v,
								},
							},
							U = (0, u.v6)(R, i, {}, s),
							K = (0, f.Z)(U, O);
						return (0, t.Y)(g.g, { controller: L, ...K, ...j.recommendationBundle, ...M });
					}),
					c = (0, p.PA)((o) => {
						const i = o.cartStore,
							s = `ss__${(0, _.b)(R)}`;
						o.onAddToCart = (A) => {
							D(!0), o.onAddToCart(A), setTimeout(() => D(!1), o.ctaButtonSuccessTimeout);
						};
						const [v, D] = (0, b.J0)(!1);
						o.addedToCart = v;
						const L = {
								image: { className: `${s}__wrapper__cta__image`, theme: o?.theme, treePath: o.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${s}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: o?.theme,
									treePath: o.treePath,
								},
								icon: { name: 'bundle-cart', className: `${s}__wrapper__cta__icon`, size: 50, theme: o?.theme, treePath: o.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${s}__wrapper__cta__price--strike`, theme: o?.theme, treePath: o.treePath },
								subtotalPrice: { className: `${s}__wrapper__cta__price`, name: 'bundle-price', theme: o?.theme, treePath: o.treePath },
								button: { className: `${s}__wrapper__cta__button`, theme: o?.theme, treePath: o.treePath },
							},
							S = T()({}, o.lang || {}),
							w = (0, x.u)(S, {});
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${s}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${s}__wrapper__cta__inner__images`,
											children: i.items.map((A) => {
												const M = A.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${s}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: M.url, children: (0, t.Y)(m._, { src: M.thumbnailImageUrl, alt: M.name, lazy: !1 }) }),
														(0, t.Y)(E.I, { ...L.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${s}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												o.ctaIcon
													? (0, t.Y)('div', {
															className: `${s}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(E.I, { ...L.icon, ...(typeof o.ctaIcon == 'string' ? { icon: o.ctaIcon } : o.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${s}__wrapper__cta__subtotal__title`, children: `Subtotal for ${i.count} items` }),
												(0, t.FD)('div', {
													className: `${s}__wrapper__cta__subtotal__prices`,
													children: [
														i.msrp && i.msrp !== i.price
															? (0, t.FD)('label', {
																	className: `${s}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(h.g, { ...L.subtotalStrike, lineThrough: !0, value: i.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${s}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(h.g, { ...L.subtotalPrice, value: i.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${s}__cta__button__wrapper`,
									children: (0, t.Y)(C.$, {
										...L.button,
										disabled: i.items.length == 0,
										disableStyles: !0,
										internalClassName: P()(`${s}__cta__button`, { [`${s}__cta__button--added`]: v }),
										'aria-live': v,
										onClick: (A) => o.onAddToCart(A),
										...(v ? w.ctaButtonSuccessText?.all : w.ctaButtonText?.all),
										children: o.addedToCart ? o.ctaButtonSuccessText : o.ctaButtonText,
									}),
								}),
							],
						});
					});
				e.d(a, ['X', 0, c, 'a', 0, l]);
			},
			'./components/src/hooks/useIntersection.tsx'(I, a, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (r, p = '0px', n = !1) => {
					const [u, f] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const g = new IntersectionObserver(
								([h]) => {
									f(h.isIntersecting), n && h.isIntersecting && g.unobserve(r.current);
								},
								{ rootMargin: p }
							);
							return (
								r.current && g.observe(r.current),
								() => {
									g.unobserve(r.current);
								}
							);
						}, []),
						u
					);
				};
				e.d(a, ['v', 0, d]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(I, a, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 250,
					r = (n, u = {}) => {
						const { rootMargin: f = '0px', fireOnce: g = !1, threshold: h = 0, minVisibleTime: C = 0 } = u,
							[E, m] = (0, t.J0)(!1),
							_ = (0, t.li)(null),
							y = (0, t.li)(null),
							[P, b] = (0, t.J0)(0),
							B = (0, t.hb)((T) => {
								(n.current = T), b((x) => x + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								m(!1);
								let T = null,
									x = null;
								if (!window.IntersectionObserver || !n.current) return;
								const O = () => {
										x && (window.clearInterval(x), (x = null));
									},
									R = () => {
										C > 0
											? ((y.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													m(!0), g && n.current && T && T.unobserve(n.current);
											  }, C)))
											: (m(!0), g && n.current && T && T.unobserve(n.current));
									},
									l = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (y.current = null), m(!1);
									};
								return (
									(T = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? n.current && p(n.current)
													? (O(), R())
													: (l(),
													  x ||
															(x = window.setInterval(() => {
																if (!n.current) {
																	O();
																	return;
																}
																p(n.current) && (O(), R());
															}, d)))
												: (O(), l());
										},
										{ rootMargin: f, threshold: h }
									)),
									n.current && T.observe(n.current),
									() => {
										m(!1), O(), _.current && window.clearTimeout(_.current), T && n.current && T.unobserve(n.current);
									}
								);
							}, [n, P]),
							{ inViewport: E, updateRef: B }
						);
					};
				function p(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(a, ['v', 0, r]);
			},
			'./components/src/types.ts'(I, a, e) {
				'use strict';
				e.d(a, { Q: () => d, V: () => t });
				var t = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(t || {}),
					d = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(d || {});
			},
			'./components/src/utilities/componentArgs.ts'(I, a, e) {
				'use strict';
				const t = {
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
				e.d(a, ['F', 0, t]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(I, a, e) {
				'use strict';
				e.d(a, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					p = 1e3;
				function n(u) {
					const f = (0, t.li)(null),
						{ inViewport: g, updateRef: h } = (0, d.v)(f, { ...u, fireOnce: !0, threshold: r, minVisibleTime: p });
					return { ref: f, inViewport: g, updateRef: h };
				}
			},
			'./components/src/utilities/snapify.ts'(I, a, e) {
				'use strict';
				e.d(a, { p: () => T });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const b = {},
					B = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(c) {
						const o = c.id;
						if (b[o]) return b[o];
						const i = (b[o] = O({ client: B, controller: c }));
						return (
							i.on('afterStore', async ({ controller: s }, v) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await v();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(c) {
						const o = c.id;
						if (b[o]) return b[o];
						const i = (b[o] = R({ client: B, controller: c }));
						return (
							i.on('afterStore', async ({ controller: s }, v) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await v();
							}),
							i.init(),
							i
						);
					}
					static search(c) {
						const o = c.id;
						if (b[o]) return b[o];
						const i = (b[o] = x({ client: B, controller: c }));
						return (
							i.on('afterStore', async ({ controller: s }, v) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await v();
							}),
							i.init(),
							i
						);
					}
				}
				function x(l) {
					const c = new h.V(new E.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), C.X);
					return new d.Tp(l.controller, {
						client: new n.K(l.client.globals, l.client.config),
						store: new f.U(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new m.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function O(l) {
					const c = new h.V(new E.E(), C.X).detach(!0);
					return new p.c(l.controller, {
						client: new n.K(l.client.globals, l.client.config),
						store: new g.t(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new m.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function R(l) {
					const c = new h.V(new E.E(), C.X).detach();
					return new r.Z(l.controller, {
						client: new n.K(l.client.globals, l.client.config),
						store: new u.Y(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new m.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new P.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, a, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					p = (n) => {
						const u = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								u.current && n.className?.includes('lang-') && !n.className?.includes(r) && window?.Prism?.highlightElement(u.current);
							}, [n.className, n.children, u]),
							(0, t.Y)('code', { ...n, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, p]);
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function a(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (I.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleList-RecommendationBundleList-stories.100db81a.iframe.bundle.js.map
