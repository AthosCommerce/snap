(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9086],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(E, a, e) {
				'use strict';
				e.d(a, { Q: () => F });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					h = e.n(d),
					U = e('./components/src/components/Atoms/Image/Image.tsx'),
					v = e('./components/src/components/Atoms/Price/Price.tsx'),
					D = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					S = e('./components/src/types.ts'),
					A = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					L = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					W = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					s = e.n(o),
					r = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					n = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const P = () =>
						(0, O.AH)({
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
					F = (0, T.PA)((J) => {
						const z = (0, f.u)(),
							H = (0, x.LU)(),
							Z = {
								layout: S.V.grid,
								treePath: H,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							c = (0, B.v6)('result', z, Z, J),
							{
								result: u,
								hideBadge: N,
								hideTitle: $,
								hidePricing: Q,
								hideImage: X,
								detailSlot: G,
								fallback: q,
								disableStyles: R,
								className: ee,
								internalClassName: te,
								layout: oe,
								onClick: j,
								controller: I,
								hideVariantSelections: se,
								hideAddToCartButton: ne,
								onAddToCartClick: Y,
								addToCartButtonText: re,
								addToCartButtonSuccessText: le,
								addToCartButtonSuccessTimeout: ae,
								hideRating: ce,
								trackingRef: ie,
								treePath: M,
							} = c,
							{ overrideElement: me, shouldRenderDefault: de } = (0, i._)('result', {
								...c,
								customComponent: c.customComponent && c.customComponent !== 'Result' ? c.customComponent : void 0,
							});
						if (!de) return me;
						const l = u?.display?.mappings.core || u?.mappings?.core,
							[_e, w] = (0, p.J0)(!1),
							g = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: M,
								},
								price: { internalClassName: 'ss__result__price', ...(0, _.s)({ disableStyles: R }), theme: c.theme, treePath: M },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: u,
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: M,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: u,
									controller: I,
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: M,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: l?.name || '',
									src: l?.imageUrl || '',
									...(0, _.s)({ disableStyles: R, fallback: q }),
									theme: c.theme,
									treePath: M,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: l?.rating || 0,
									count: Number(l?.ratingCount || 0),
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: M,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (C) => {
										w(!0), Y && Y(C, u), I?.addToCart([u]), setTimeout(() => w(!1), ae);
									},
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: M,
								},
							};
						let V = l?.name;
						c.truncateTitle && (V = m.x(l?.name || '', c.truncateTitle.limit, c.truncateTitle.append));
						const ue = (0, y.Z)(c, P),
							pe = { addToCartButtonText: { value: _e ? le : re } },
							he = s()(pe, c.lang || {}),
							ge = (0, r.u)(he, { result: u, controller: I }),
							k = !!(l?.msrp && l?.price && l?.price < l?.msrp),
							Ee = I?.store?.config?.asyncState?.product?.price ? u.state.priceFetched : !0;
						return l
							? (0, t.Y)(D._, {
									children: (0, t.FD)('article', {
										...ue,
										className: h()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': k }, ee, te),
										ref: ie,
										children: [
											!X &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: l.url,
														onClick: (C) => {
															j && j(C);
														},
														children: N
															? (0, t.Y)(U._, { ...g.image })
															: (0, t.Y)(L.Q, { ...g.overlayBadge, controller: I, children: (0, t.Y)(U._, { ...g.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!N && (0, t.Y)(A.W, { ...g.calloutBadge, controller: I }),
													!$ &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: l.url,
																onClick: (C) => {
																	j && j(C);
																},
																dangerouslySetInnerHTML: { __html: V || '' },
															}),
														}),
													!ce && (0, t.Y)(K.G, { ...g.rating }),
													!Q && Ee && l.price && l.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: k
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(v.g, { ...g.price, value: l.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(v.g, { ...g.price, value: l.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(v.g, { ...g.price, value: l.price }),
														  })
														: null,
													(0, b.Y)(G, { result: u, treePath: M }),
													!se && u.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: u.variants?.selections.map((C) => (0, t.Y)(n.m, { ...g.variantSelection, type: C.type, selection: C })),
														  })
														: null,
													!ne &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(W.$, { ...g.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(E, a, e) {
				'use strict';
				e.d(a, { o: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/classnames/index.js'),
					d = e.n(O),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					U = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/createImpressionObserver.ts');
				const D = { ResultTracker: () => (0, p.AH)({}) },
					f = (0, T.PA)((x) => {
						const b = (0, h.u)(),
							_ = (0, U.v6)('resultTracker', b, {}, x),
							B = { impression: !0, click: !0 },
							{ children: y, result: m, track: S, controller: A, className: L, internalClassName: K, disableStyles: W, style: o } = _,
							s = { ...B, ...S },
							{ ref: r, inViewport: i } = (0, v.Q)();
						i && s.impression && A?.track.product.impression(m);
						const n = {};
						return (
							W ? o && (n.css = [o]) : (n.css = [D.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: d()('ss__result-tracker', `ss__${A?.type}-result-tracker`, L, K),
								onClick: (P) => {
									s.click && A?.track.product.click(P, m);
								},
								ref: r,
								...n,
								children: y,
							})
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(E, a, e) {
				'use strict';
				e.d(a, { F: () => t });
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
			'./components/src/utilities/componentNameToClassName.ts'(E, a, e) {
				'use strict';
				e.d(a, { b: () => t });
				const t = (p) => p.replace(/([A-Z])/g, (T) => '-' + T.toLowerCase());
			},
			'./components/src/utilities/snapify.ts'(E, a, e) {
				'use strict';
				e.d(a, { p: () => A });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					B = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					S = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(s) {
						const r = s.id;
						if (m[r]) return m[r];
						const i = (m[r] = K({ client: S, controller: s }));
						return (
							i.on('afterStore', async ({ controller: n }, P) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(s) {
						const r = s.id;
						if (m[r]) return m[r];
						const i = (m[r] = W({ client: S, controller: s }));
						return (
							i.on('afterStore', async ({ controller: n }, P) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static search(s) {
						const r = s.id;
						if (m[r]) return m[r];
						const i = (m[r] = L({ client: S, controller: s }));
						return (
							i.on('afterStore', async ({ controller: n }, P) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
				}
				function L(o) {
					const s = new D.V(new x.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), f.X);
					return new p.Tp(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new U.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new b.E(),
						profiler: new _.U(),
						logger: new B.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function K(o) {
					const s = new D.V(new x.E(), f.X).detach(!0);
					return new O.c(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new v.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new b.E(),
						profiler: new _.U(),
						logger: new B.V(),
						tracker: new y.J(o.client.globals),
					});
				}
				function W(o) {
					const s = new D.V(new x.E(), f.X).detach();
					return new T.Z(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new h.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new b.E(),
						profiler: new _.U(),
						logger: new B.V(),
						tracker: new y.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, a, e) {
				'use strict';
				e.d(a, { Z: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = 'prism-block',
					O = (d) => {
						const h = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								h.current && d.className?.includes('lang-') && !d.className?.includes(T) && window?.Prism?.highlightElement(h.current);
							}, [d.className, d.children, h]),
							(0, t.Y)('code', { ...d, ref: h, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (E.exports = a);
			},
			'./components/src/components/Templates/Search/readme.md'(E) {
				'use strict';
				E.exports = `# Search Template

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
The \`mobileDisplayAt\` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. The default breakpoint is "991px". You can also pass a boolean value to enable or disable mobile view regardless of screen size.

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={'400px'} />
\`\`\`

or 

\`\`\`tsx
<Search controller={controller} mobileDisplayAt={true} />
\`\`\`

### sidebarWidth
The \`sidebarWidth\` prop specifies the CSS width of the Sidebar component. By default, the sidebar width is \`"270px"\`.

\`\`\`tsx
<Search controller={controller} sidebarWidth={'300px'} />
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
