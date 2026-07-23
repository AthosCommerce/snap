(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9086],
		{
			'./components/src/components/Molecules/Result/Result.tsx'(E, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					h = e.n(d),
					U = e('./components/src/components/Atoms/Image/Image.tsx'),
					v = e('./components/src/components/Atoms/Price/Price.tsx'),
					D = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					y = e('./components/src/types.ts'),
					A = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					I = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					W = e('./components/src/components/Atoms/Button/Button.tsx'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(o),
					r = e('./components/src/hooks/useLang.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					s = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
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
					k = (0, T.PA)((J) => {
						const z = (0, b.u)(),
							H = (0, x.LU)(),
							Z = {
								layout: y.V.grid,
								treePath: H,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							c = (0, S.v6)('result', z, Z, J),
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
								controller: L,
								hideVariantSelections: ne,
								hideAddToCartButton: se,
								onAddToCartClick: Y,
								addToCartButtonText: re,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: le,
								hideRating: ce,
								trackingRef: ie,
								treePath: C,
							} = c,
							{ overrideElement: me, shouldRenderDefault: de } = (0, i._)('result', {
								...c,
								customComponent: c.customComponent && c.customComponent !== 'Result' ? c.customComponent : void 0,
							});
						if (!de) return me;
						const a = u?.display?.mappings.core || u?.mappings?.core,
							[_e, w] = (0, p.J0)(!1),
							g = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: C,
								},
								price: { internalClassName: 'ss__result__price', ...(0, _.s)({ disableStyles: R }), theme: c.theme, treePath: C },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: u,
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: C,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: u,
									controller: L,
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: C,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: a?.name || '',
									src: a?.imageUrl || '',
									...(0, _.s)({ disableStyles: R, fallback: q }),
									theme: c.theme,
									treePath: C,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: a?.rating || 0,
									count: Number(a?.ratingCount || 0),
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: C,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (M) => {
										w(!0), Y && Y(M, u), L?.addToCart([u]), setTimeout(() => w(!1), le);
									},
									...(0, _.s)({ disableStyles: R }),
									theme: c.theme,
									treePath: C,
								},
							};
						let V = a?.name;
						c.truncateTitle && (V = m.x(a?.name || '', c.truncateTitle.limit, c.truncateTitle.append));
						const ue = (0, B.Z)(c, P),
							pe = { addToCartButtonText: { value: _e ? ae : re } },
							he = n()(pe, c.lang || {}),
							ge = (0, r.u)(he, { result: u, controller: L }),
							F = !!(a?.msrp && a?.price && a?.price < a?.msrp),
							Ee = L?.store?.config?.asyncState?.product?.price ? u.state.priceFetched : !0;
						return a
							? (0, t.Y)(D._, {
									children: (0, t.FD)('article', {
										...ue,
										className: h()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': F }, ee, te),
										ref: ie,
										children: [
											!X &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: a.url,
														onClick: (M) => {
															j && j(M);
														},
														children: N
															? (0, t.Y)(U._, { ...g.image })
															: (0, t.Y)(I.Q, { ...g.overlayBadge, controller: L, children: (0, t.Y)(U._, { ...g.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!N && (0, t.Y)(A.W, { ...g.calloutBadge, controller: L }),
													!$ &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: a.url,
																onClick: (M) => {
																	j && j(M);
																},
																dangerouslySetInnerHTML: { __html: V || '' },
															}),
														}),
													!ce && (0, t.Y)(K.G, { ...g.rating }),
													!Q && Ee && a.price && a.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: F
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(v.g, { ...g.price, value: a.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(v.g, { ...g.price, value: a.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(v.g, { ...g.price, value: a.price }),
														  })
														: null,
													(0, f.Y)(G, { result: u, treePath: C }),
													!ne && u.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: u.variants?.selections.map((M) => (0, t.Y)(s.m, { ...g.variantSelection, type: M.type, selection: M })),
														  })
														: null,
													!se &&
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
				e.d(l, ['Q', 0, k]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(E, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/classnames/index.js'),
					d = e.n(O),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					U = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/createImpressionObserver.ts');
				const D = { ResultTracker: () => (0, p.AH)({}) },
					b = (0, T.PA)((x) => {
						const f = (0, h.u)(),
							_ = (0, U.v6)('resultTracker', f, {}, x),
							S = { impression: !0, click: !0 },
							{ children: B, result: m, track: y, controller: A, className: I, internalClassName: K, disableStyles: W, style: o } = _,
							n = { ...S, ...y },
							{ ref: r, inViewport: i } = (0, v.Q)();
						i && n.impression && A?.track.product.impression(m);
						const s = {};
						return (
							W ? o && (s.css = [o]) : (s.css = [D.ResultTracker(), o]),
							(0, t.Y)('div', {
								className: d()('ss__result-tracker', `ss__${A?.type}-result-tracker`, I, K),
								onClick: (P) => {
									n.click && A?.track.product.click(P, m);
								},
								ref: r,
								...s,
								children: B,
							})
						);
					});
				e.d(l, ['o', 0, b]);
			},
			'./components/src/utilities/componentArgs.ts'(E, l, e) {
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
				e.d(l, ['F', 0, t]);
			},
			'./components/src/utilities/componentNameToClassName.ts'(E, l, e) {
				'use strict';
				const t = (p) => p.replace(/([A-Z])/g, (T) => '-' + T.toLowerCase());
				e.d(l, ['b', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(E, l, e) {
				'use strict';
				e.d(l, { p: () => A });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					O = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					U = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					S = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					B = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					y = { globals: { siteId: 'atkzs2' } };
				class A {
					static recommendation(n) {
						const r = n.id;
						if (m[r]) return m[r];
						const i = (m[r] = K({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: s }, P) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(n) {
						const r = n.id;
						if (m[r]) return m[r];
						const i = (m[r] = W({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: s }, P) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
					static search(n) {
						const r = n.id;
						if (m[r]) return m[r];
						const i = (m[r] = I({ client: y, controller: n }));
						return (
							i.on('afterStore', async ({ controller: s }, P) => {
								s.log.debug('controller', s), s.log.debug('store', s.store.toJSON()), await P();
							}),
							i.init(),
							i
						);
					}
				}
				function I(o) {
					const n = new D.V(new x.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), b.X);
					return new p.Tp(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new U.U(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new _.U(),
						logger: new S.V(),
						tracker: new B.J(o.client.globals),
					});
				}
				function K(o) {
					const n = new D.V(new x.E(), b.X).detach(!0);
					return new O.c(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new v.t(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new _.U(),
						logger: new S.V(),
						tracker: new B.J(o.client.globals),
					});
				}
				function W(o) {
					const n = new D.V(new x.E(), b.X).detach();
					return new T.Z(o.controller, {
						client: new d.K(o.client.globals, o.client.config),
						store: new h.Y(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new _.U(),
						logger: new S.V(),
						tracker: new B.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, l, e) {
				'use strict';
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
				e.d(l, ['Z', 0, O]);
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function l(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (E.exports = l);
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
\`\`\`
## Lang

The \`lang\` prop allows you to override translatable text strings used by the Search component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`toggleSidebarButtonText\` | Sidebar toggle button text | \`filters\` (SearchFilterStore), \`sidebarOpenState\` (boolean) |

### Example

\`\`\`tsx
<Search
	controller={controller}
	lang={{
		toggleSidebarButtonText: {
			value: (data) => {
				if (data.sidebarOpenState) {
					return 'Close Sidebar';
				}
				return 'Open Sidebar';
			},
		},
	}}
/>
\`\`\`
`;
			},
		},
	]);
})();
