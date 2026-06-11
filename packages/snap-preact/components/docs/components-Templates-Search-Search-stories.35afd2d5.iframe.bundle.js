(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8907],
		{
			'./components/src/components/Templates/Search/Search.stories.tsx'(P, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => u, NoResults: () => p, __namedExportsOrder: () => m, default: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					T = e('./components/src/utilities/componentArgs.ts'),
					v = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/snapify.ts'),
					E = e('./components/src/components/Templates/Search/readme.md'),
					M = e('./components/src/components/Templates/Search/Search.tsx');
				const b = {
						title: 'Templates/Search',
						component: M.v,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(_.oz, { options: { overrides: { code: v.Z } }, children: E }), (0, t.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(g, {}) })],
						argTypes: {
							controller: {
								description: 'Search Controller Reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							toggleSidebarButtonText: {
								description: 'Text to render in the toggle Sidebar button.',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							toggleSidebarStartClosed: {
								defaultValue: !1,
								description: 'determines if the sidebar toggle should start closed',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideToggleSidebarButton: {
								defaultValue: !1,
								description: 'hide the toggle Sidebar button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							mobileDisplayAt: {
								defaultValue: '',
								description: 'Media query for when to render the mobileSidebar',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideSidebar: {
								defaultValue: !1,
								description: 'prevents the sidebar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideTopToolbar: {
								defaultValue: !1,
								description: 'prevents the top Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideMiddleToolbar: {
								defaultValue: !1,
								description: 'prevents the middle Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideBottomToolbar: {
								defaultValue: !1,
								description: 'prevents the bottom Toolbar component from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							layoutOptions: {
								description: 'Options for layout selection',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'ListOption[]' } },
								control: { type: 'object' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							...T.F,
						},
					},
					O = i.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					C = i.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					u = (g, { loaded: { controller: y } }) => (0, t.Y)(M.v, { ...g, controller: y });
				u.loaders = [async () => (await O.search(), { controller: O })];
				const p = (g, { loaded: { controller: y } }) => (0, t.Y)(M.v, { ...g, controller: y });
				(p.loaders = [async () => (await C.search(), { controller: C })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: SearchProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Search {...args} controller={controller} />;
}`,
								...p.parameters?.docs?.source,
							},
						},
					});
				const m = ['Default', 'NoResults'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(P, n, e) {
				'use strict';
				e.d(n, { Q: () => z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					E = e.n(i),
					M = e('./components/src/components/Atoms/Image/Image.tsx'),
					b = e('./components/src/components/Atoms/Price/Price.tsx'),
					O = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					A = e('./components/src/types.ts'),
					R = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					I = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					U = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					s = e.n(o),
					a = e('./components/src/hooks/useLang.tsx'),
					d = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					r = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
						(0, v.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					z = (0, T.PA)((J) => {
						const k = (0, C.u)(),
							Z = (0, u.LU)(),
							H = {
								layout: A.V.grid,
								treePath: Z,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							c = (0, g.v6)('result', k, H, J),
							{
								result: f,
								hideBadge: N,
								hideTitle: X,
								hidePricing: $,
								hideImage: Q,
								detailSlot: G,
								fallback: q,
								disableStyles: L,
								className: ee,
								internalClassName: te,
								layout: oe,
								onClick: j,
								controller: W,
								hideVariantSelections: se,
								hideAddToCartButton: ne,
								onAddToCartClick: V,
								addToCartButtonText: re,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: le,
								hideRating: ce,
								trackingRef: ie,
								treePath: x,
							} = c,
							{ overrideElement: me, shouldRenderDefault: de } = (0, d._)('result', {
								...c,
								customComponent: c.customComponent && c.customComponent !== 'Result' ? c.customComponent : void 0,
							});
						if (!de) return me;
						const l = f?.display?.mappings.core || f?.mappings?.core,
							[_e, Y] = (0, _.J0)(!1),
							D = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: L }),
									theme: c.theme,
									treePath: x,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: L }), theme: c.theme, treePath: x },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: f,
									...(0, m.s)({ disableStyles: L }),
									theme: c.theme,
									treePath: x,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: f,
									controller: W,
									...(0, m.s)({ disableStyles: L }),
									theme: c.theme,
									treePath: x,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: l?.name || '',
									src: l?.imageUrl || '',
									...(0, m.s)({ disableStyles: L, fallback: q }),
									theme: c.theme,
									treePath: x,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: l?.rating || 0,
									count: Number(l?.ratingCount || 0),
									...(0, m.s)({ disableStyles: L }),
									theme: c.theme,
									treePath: x,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (B) => {
										Y(!0), V && V(B, f), W?.addToCart([f]), setTimeout(() => Y(!1), le);
									},
									...(0, m.s)({ disableStyles: L }),
									theme: c.theme,
									treePath: x,
								},
							};
						let w = l?.name;
						c.truncateTitle && (w = h.x(l?.name || '', c.truncateTitle.limit, c.truncateTitle.append));
						const ue = (0, y.Z)(c, S),
							pe = { addToCartButtonText: { value: _e ? ae : re } },
							he = s()(pe, c.lang || {}),
							ge = (0, a.u)(he, { result: f, controller: W }),
							F = !!(l?.msrp && l?.price && l?.price < l?.msrp);
						return l
							? (0, t.Y)(O._, {
									children: (0, t.FD)('article', {
										...ue,
										className: E()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': F }, ee, te),
										ref: ie,
										children: [
											!Q &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: l.url,
														onClick: (B) => {
															j && j(B);
														},
														children: N
															? (0, t.Y)(M._, { ...D.image })
															: (0, t.Y)(I.Q, { ...D.overlayBadge, controller: W, children: (0, t.Y)(M._, { ...D.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!N && (0, t.Y)(R.W, { ...D.calloutBadge, controller: W }),
													!X &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: l.url,
																onClick: (B) => {
																	j && j(B);
																},
																dangerouslySetInnerHTML: { __html: w || '' },
															}),
														}),
													!ce && (0, t.Y)(U.G, { ...D.rating }),
													!$ && l.price && l.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: F
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(b.g, { ...D.price, value: l.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(b.g, { ...D.price, value: l.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(b.g, { ...D.price, value: l.price }),
														  })
														: null,
													(0, p.Y)(G, { result: f, treePath: x }),
													!se && f.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: f.variants?.selections.map((B) => (0, t.Y)(r.m, { ...D.variantSelection, type: B.type, selection: B })),
														  })
														: null,
													!ne &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(K.$, { ...D.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(P, n, e) {
				'use strict';
				e.d(n, { o: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/classnames/index.js'),
					i = e.n(v),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/createImpressionObserver.ts');
				const O = { ResultTracker: () => (0, _.AH)({}) },
					C = (0, T.PA)((u) => {
						const p = (0, E.u)(),
							m = (0, M.v6)('resultTracker', p, {}, u),
							g = { impression: !0, click: !0 },
							{ children: y, result: h, track: A, controller: R, className: I, internalClassName: U, disableStyles: K, style: o } = m,
							s = { ...g, ...A },
							{ ref: a, inViewport: d } = (0, b.Q)();
						d && s.impression && R?.track.product.impression(h);
						const r = {};
						return (
							K ? o && (r.css = [o]) : (r.css = [O.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: i()('ss__result-tracker', `ss__${R?.type}-result-tracker`, I, U),
								onClick: (S) => {
									s.click && R?.track.product.click(S, h);
								},
								ref: a,
								...r,
								children: y,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(P, n, e) {
				'use strict';
				e.d(n, { F: () => t });
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
			},
			'./components/src/utilities/componentNameToClassName.ts'(P, n, e) {
				'use strict';
				e.d(n, { b: () => t });
				const t = (_) => _.replace(/([A-Z])/g, (T) => '-' + T.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(P, n, e) {
				'use strict';
				e.d(n, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					A = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(s) {
						const a = s.id;
						if (h[a]) return h[a];
						const d = (h[a] = U({ client: A, controller: s }));
						return (
							d.on('afterStore', async ({ controller: r }, S) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await S();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(s) {
						const a = s.id;
						if (h[a]) return h[a];
						const d = (h[a] = K({ client: A, controller: s }));
						return (
							d.on('afterStore', async ({ controller: r }, S) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await S();
							}),
							d.init(),
							d
						);
					}
					static search(s) {
						const a = s.id;
						if (h[a]) return h[a];
						const d = (h[a] = I({ client: A, controller: s }));
						return (
							d.on('afterStore', async ({ controller: r }, S) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await S();
							}),
							d.init(),
							d
						);
					}
				}
				function I(o) {
					const s = new O.V(new u.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), C.X);
					return new _.Tp(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new M.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new g.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function U(o) {
					const s = new O.V(new u.E(), C.X).detach(!0);
					return new v.c(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new b.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new g.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function K(o) {
					const s = new O.V(new u.E(), C.X).detach();
					return new T.Z(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new E.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new g.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, n, e) {
				'use strict';
				e.d(n, { Z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = 'prism-block',
					v = (i) => {
						const E = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								E.current && i.className?.includes('lang-') && !i.className?.includes(T) && window?.Prism?.highlightElement(E.current);
							}, [i.className, i.children, E]),
							(0, t.Y)('code', { ...i, ref: E, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (P.exports = n);
			},
			'./components/src/components/Templates/Search/readme.md'(P) {
				'use strict';
				P.exports = `# Search Template

Renders a Search Results Page.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<Search controller={controller} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Search controller={controller} resultComponent={CustomResult} />
\`\`\`

### mobileDisplayAt
The \`mobileDisplayAt\` prop specifies a CSS media query for when the MobileSidebar component will render. By default, the component will render at "991px".

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

### hideSidebar
The \`hideSidebar\` prop specifies if the Sidebar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideSidebar={true} />
\`\`\`

### hideTopToolbar
The \`hideTopToolbar\` prop specifies if the top ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideTopToolbar={true} />
\`\`\`

### hideMiddleToolbar
The \`hideMiddleToolbar\` prop specifies if the middle ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideMiddleToolbar={true} />
\`\`\`

### hideBottomToolbar
The \`hideBottomToolbar\` prop specifies if the bottom ToolBar component should be rendered.  

\`\`\`tsx
<Search controller={controller} hideBottomToolbar={true} />
\`\`\`

### toggleSidebarButtonText
The \`toggleSidebarButtonText\` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. 

\`\`\`tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
\`\`\`

### toggleSidebarStartClosed
The \`toggleSidebarStartClosed\` prop specifies if the sidebar toggle should start closed.

\`\`\`tsx
<Search controller={controller} toggleSidebarStartClosed={true} />
\`\`\`

### hideToggleSidebarButton
The \`hideToggleSidebarButton\` prop hides the Sidebar toggle button.

\`\`\`tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
\`\`\`

### layoutOptions
The \`layoutOptions\` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




\`\`\`tsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'search results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'search results': {
					columns: 2,
				},
			},
		},
	},
]

<Search controller={controller} layoutOptions={layoutOptions} />
\`\`\``;
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Search-Search-stories.35afd2d5.iframe.bundle.js.map
