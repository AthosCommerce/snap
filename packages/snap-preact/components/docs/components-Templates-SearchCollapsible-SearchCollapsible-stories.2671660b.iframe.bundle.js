(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5497],
		{
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.stories.tsx'(C, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => p, NoResults: () => h, __namedExportsOrder: () => d, default: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/utilities/componentArgs.ts'),
					P = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/snapify.ts'),
					u = e('./components/src/components/Templates/Search/readme.md'),
					M = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx');
				const v = {
						title: 'Templates/SearchCollapsible',
						component: M.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: P.Z } }, children: u }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(T, {}) })],
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
							...E.F,
						},
					},
					O = l.p.search({ id: 'Search', globals: { siteId: 'atkzs2' } }),
					D = l.p.search({ id: 'Search-noResults', globals: { siteId: 'atkzs2', search: { query: { string: 'eijworhufsbgd' } } } }),
					p = (T, { loaded: { controller: y } }) => (0, t.Y)(M.x, { ...T, controller: y });
				p.loaders = [async () => (await O.search(), { controller: O })];
				const h = (T, { loaded: { controller: y } }) => (0, t.Y)(M.x, { ...T, controller: y });
				(h.loaders = [async () => (await D.search(), { controller: D })]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
}`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: SearchCollapsibleProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <SearchCollapsible {...args} controller={controller} />;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default', 'NoResults'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(C, s, e) {
				'use strict';
				e.d(s, { Q: () => z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					u = e.n(l),
					M = e('./components/src/components/Atoms/Image/Image.tsx'),
					v = e('./components/src/components/Atoms/Price/Price.tsx'),
					O = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					T = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					A = e('./components/src/types.ts'),
					R = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					I = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					U = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(o),
					a = e('./components/src/hooks/useLang.tsx'),
					_ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					r = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const x = () =>
						(0, P.AH)({
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
					z = (0, E.PA)((J) => {
						const Z = (0, D.u)(),
							k = (0, p.LU)(),
							H = {
								layout: A.V.grid,
								treePath: k,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							i = (0, T.v6)('result', Z, H, J),
							{
								result: b,
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
								onAddToCartClick: Y,
								addToCartButtonText: re,
								addToCartButtonSuccessText: le,
								addToCartButtonSuccessTimeout: ae,
								hideRating: ce,
								trackingRef: ie,
								treePath: S,
							} = i,
							{ overrideElement: me, shouldRenderDefault: de } = (0, _._)('result', {
								...i,
								customComponent: i.customComponent && i.customComponent !== 'Result' ? i.customComponent : void 0,
							});
						if (!de) return me;
						const c = b?.display?.mappings.core || b?.mappings?.core,
							[_e, V] = (0, m.J0)(!1),
							f = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: L }),
									theme: i.theme,
									treePath: S,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: L }), theme: i.theme, treePath: S },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: b,
									...(0, d.s)({ disableStyles: L }),
									theme: i.theme,
									treePath: S,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: b,
									controller: W,
									...(0, d.s)({ disableStyles: L }),
									theme: i.theme,
									treePath: S,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: c?.name || '',
									src: c?.imageUrl || '',
									...(0, d.s)({ disableStyles: L, fallback: q }),
									theme: i.theme,
									treePath: S,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: c?.rating || 0,
									count: Number(c?.ratingCount || 0),
									...(0, d.s)({ disableStyles: L }),
									theme: i.theme,
									treePath: S,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (B) => {
										V(!0), Y && Y(B, b), W?.addToCart([b]), setTimeout(() => V(!1), ae);
									},
									...(0, d.s)({ disableStyles: L }),
									theme: i.theme,
									treePath: S,
								},
							};
						let w = c?.name;
						i.truncateTitle && (w = g.x(c?.name || '', i.truncateTitle.limit, i.truncateTitle.append));
						const ue = (0, y.Z)(i, x),
							pe = { addToCartButtonText: { value: _e ? le : re } },
							he = n()(pe, i.lang || {}),
							ge = (0, a.u)(he, { result: b, controller: W }),
							F = !!(c?.msrp && c?.price && c?.price < c?.msrp);
						return c
							? (0, t.Y)(O._, {
									children: (0, t.FD)('article', {
										...ue,
										className: u()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': F }, ee, te),
										ref: ie,
										children: [
											!Q &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: c.url,
														onClick: (B) => {
															j && j(B);
														},
														children: N
															? (0, t.Y)(M._, { ...f.image })
															: (0, t.Y)(I.Q, { ...f.overlayBadge, controller: W, children: (0, t.Y)(M._, { ...f.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!N && (0, t.Y)(R.W, { ...f.calloutBadge, controller: W }),
													!X &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: c.url,
																onClick: (B) => {
																	j && j(B);
																},
																dangerouslySetInnerHTML: { __html: w || '' },
															}),
														}),
													!ce && (0, t.Y)(U.G, { ...f.rating }),
													!$ && c.price && c.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: F
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(v.g, { ...f.price, value: c.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(v.g, { ...f.price, value: c.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(v.g, { ...f.price, value: c.price }),
														  })
														: null,
													(0, h.Y)(G, { result: b, treePath: S }),
													!se && b.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: b.variants?.selections.map((B) => (0, t.Y)(r.m, { ...f.variantSelection, type: B.type, selection: B })),
														  })
														: null,
													!ne &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(K.$, { ...f.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(C, s, e) {
				'use strict';
				e.d(s, { x: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/providers/cache.tsx'),
					P = e('./components/src/components/Templates/Search/Search.tsx');
				const l = (0, m.PA)((u) => (0, t.Y)(E._, { children: (0, t.Y)(P.v, { ...u, alias: 'searchCollapsible' }) }));
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(C, s, e) {
				'use strict';
				e.d(s, { o: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('../../node_modules/classnames/index.js'),
					l = e.n(P),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/createImpressionObserver.ts');
				const O = { ResultTracker: () => (0, m.AH)({}) },
					D = (0, E.PA)((p) => {
						const h = (0, u.u)(),
							d = (0, M.v6)('resultTracker', h, {}, p),
							T = { impression: !0, click: !0 },
							{ children: y, result: g, track: A, controller: R, className: I, internalClassName: U, disableStyles: K, style: o } = d,
							n = { ...T, ...A },
							{ ref: a, inViewport: _ } = (0, v.Q)();
						_ && n.impression && R?.track.product.impression(g);
						const r = {};
						return (
							K ? o && (r.css = [o]) : (r.css = [O.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: l()('ss__result-tracker', `ss__${R?.type}-result-tracker`, I, U),
								onClick: (x) => {
									n.click && R?.track.product.click(x, g);
								},
								ref: a,
								...r,
								children: y,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(C, s, e) {
				'use strict';
				e.d(s, { F: () => t });
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
			'./components/src/utilities/componentNameToClassName.ts'(C, s, e) {
				'use strict';
				e.d(s, { b: () => t });
				const t = (m) => m.replace(/([A-Z])/g, (E) => '-' + E.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(C, s, e) {
				'use strict';
				e.d(s, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					A = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(n) {
						const a = n.id;
						if (g[a]) return g[a];
						const _ = (g[a] = U({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, x) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(n) {
						const a = n.id;
						if (g[a]) return g[a];
						const _ = (g[a] = K({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, x) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
					static search(n) {
						const a = n.id;
						if (g[a]) return g[a];
						const _ = (g[a] = I({ client: A, controller: n }));
						return (
							_.on('afterStore', async ({ controller: r }, x) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await x();
							}),
							_.init(),
							_
						);
					}
				}
				function I(o) {
					const n = new O.V(new p.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), D.X);
					return new m.Tp(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new M.U(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new h.E(),
						profiler: new d.U(),
						logger: new T.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function U(o) {
					const n = new O.V(new p.E(), D.X).detach(!0);
					return new P.c(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new v.t(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new h.E(),
						profiler: new d.U(),
						logger: new T.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function K(o) {
					const n = new O.V(new p.E(), D.X).detach();
					return new E.Z(o.controller, {
						client: new l.K(o.client.globals, o.client.config),
						store: new u.Y(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new h.E(),
						profiler: new d.U(),
						logger: new T.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, s, e) {
				'use strict';
				e.d(s, { Z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 'prism-block',
					P = (l) => {
						const u = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								u.current && l.className?.includes('lang-') && !l.className?.includes(E) && window?.Prism?.highlightElement(u.current);
							}, [l.className, l.children, u]),
							(0, t.Y)('code', { ...l, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (C.exports = s);
			},
			'./components/src/components/Templates/Search/readme.md'(C) {
				'use strict';
				C.exports = `# Search Template

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

//# sourceMappingURL=components-Templates-SearchCollapsible-SearchCollapsible-stories.2671660b.iframe.bundle.js.map
