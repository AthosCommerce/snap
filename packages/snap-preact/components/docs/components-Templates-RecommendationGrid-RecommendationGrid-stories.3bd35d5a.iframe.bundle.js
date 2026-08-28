(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[401],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(v, i, e) {
				'use strict';
				const s = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(i, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(v, i, e) {
				'use strict';
				e.d(i, { G: () => l });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(v, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
				function s(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const r = l(n, t.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = r.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(n, o) {
					const t = n.toString(),
						r = t.indexOf('.'),
						a = r == -1 ? t.length : 1 + r + (o || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(v, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(l, n, o) {
					if (typeof l != 'string' || l.length <= n) return l;
					const t = l.lastIndexOf(' ', n),
						r = t != -1 ? t : n - 1;
					return l.substr(0, r) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(v, i, e) {
				'use strict';
				e.r(i), e.d(i, { Grid: () => g, List: () => u, __namedExportsOrder: () => P, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const a = `# RecommendationGrid

Renders a List of results utilizing \`<Result />\` components.

## Sub-components
- Result

## Usage

### controller
The \`controller\` prop specifies a reference to the recommendation controller.

\`\`\`tsx
<RecommendationGrid controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} />
\`\`\`

### title
The \`title\` prop specifies the title text to render.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} title={'Recommended For You'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display. 

\`\`\`tsx
<RecommendationGrid results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={2} />
\`\`\`

### trim
The \`trim\` prop specifies whether we should trim off excess results in order to have equal rows and columns.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} rows={3} trim={true} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result.

\`\`\`tsx
<RecommendationGrid results={controller.store.results} gapSize={'10px'} />
\`\`\`


### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationGrid results={controller.store.results} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`typescript
const breakpoints = {
	0: {
		columns: 1,
	},
	540: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};
\`\`\`

\`\`\`tsx
<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />
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

<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />
\`\`\``,
					c = {
						title: 'Templates/RecommendationGrid',
						component: n.q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, s.Y)(m, {})],
						argTypes: {
							controller: {
								description: 'Controller reference',
								table: { type: { summary: 'Controller' } },
								type: { required: !0 },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							columns: {
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							trim: {
								description: 'trim off extra results based on columns and rows?',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							...t.F,
						},
					},
					d = r.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					u = (m, { loaded: { controller: h } }) =>
						(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(n.q, { ...m, controller: h, results: h?.store?.results }) });
				(u.args = { columns: 10, rows: 1 }), (u.loaders = [async () => (await d.search(), { controller: d })]);
				const g = (m, { loaded: { controller: h } }) =>
					(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(n.q, { ...m, controller: h, results: h?.store?.results }) });
				(g.args = { columns: 4 }),
					(g.loaders = [async () => (await d.search(), { controller: d })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <div style={{
    maxWidth: '1200px'
  }}>
            <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...u.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <div style={{
    maxWidth: '1200px'
  }}>
            <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const P = ['List', 'Grid'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					U = e('./components/src/types.ts'),
					O = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					A = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					j = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					w = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(p),
					T = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					E = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const C = () =>
						(0, o.AH)({
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
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
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
					N = (0, n.PA)((q) => {
						const F = (0, u.u)(),
							ee = (0, g.LU)(),
							_ = {
								layout: U.V.grid,
								treePath: ee,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							M = (0, h.v6)('result', F, _, q),
							{
								result: L,
								hideBadge: G,
								hideTitle: te,
								hidePricing: se,
								hideImage: oe,
								detailSlot: Q,
								fallback: $,
								disableStyles: x,
								className: Y,
								internalClassName: ne,
								layout: z,
								onClick: V,
								controller: K,
								hideVariantSelections: re,
								hideAddToCartButton: ae,
								onAddToCartClick: H,
								addToCartButtonText: J,
								addToCartButtonSuccessText: le,
								addToCartButtonSuccessTimeout: D,
								hideRating: ie,
								hideQuickviewButton: ce,
								onQuickviewClick: Z,
								trackingRef: X,
								treePath: k,
							} = M,
							{ overrideElement: B, shouldRenderDefault: me } = (0, R._)('result', {
								...M,
								customComponent: M.customComponent && M.customComponent !== 'Result' ? M.customComponent : void 0,
							});
						if (!me) return B;
						const b = L?.display?.mappings.core || L?.mappings?.core,
							[de, ue] = (0, l.J0)(!1),
							W = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: x }), theme: M.theme, treePath: k },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: L,
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: L,
									controller: K,
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: b?.name || '',
									src: b?.imageUrl || '',
									...(0, m.s)({ disableStyles: x, fallback: $ }),
									theme: M.theme,
									treePath: k,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: b?.rating || 0,
									count: Number(b?.ratingCount || 0),
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (S) => {
										Z && Z(S, L), K?.quickview(L);
									},
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (S) => {
										ue(!0), H && H(S, L), K?.addToCart([L]), setTimeout(() => ue(!1), D);
									},
									...(0, m.s)({ disableStyles: x }),
									theme: M.theme,
									treePath: k,
								},
							};
						let _e = b?.name;
						M.truncateTitle && (_e = y.x(b?.name || '', M.truncateTitle.limit, M.truncateTitle.append));
						const ge = (0, I.Z)(M, C),
							he = { addToCartButtonText: { value: de ? le : J }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							Ee = f()(he, M.lang || {}),
							pe = (0, T.u)(Ee, { result: L, controller: K }, { activeBreakpoint: F?.activeBreakpoint }),
							fe = !!(b?.msrp && b?.price && b?.price < b?.msrp),
							ve = K?.store?.config?.asyncState?.product?.price ? L.state.priceFetched : !0;
						return b
							? (0, s.Y)(d._, {
									children: (0, s.FD)('article', {
										...ge,
										className: r()('ss__result', `ss__result--${z}`, { 'ss__result--sale': fe }, Y, ne),
										ref: X,
										children: [
											!oe &&
												(0, s.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, s.Y)('a', {
															href: b.url,
															onClick: (S) => {
																V && V(S);
															},
															children: G
																? (0, s.Y)(a._, { ...W.image })
																: (0, s.Y)(A.Q, { ...W.overlayBadge, controller: K, children: (0, s.Y)(a._, { ...W.image }) }),
														}),
														!ce && K?.quickviewManager && (0, s.Y)(w.$, { ...W.quickviewButton, ...pe.quickviewButtonText.attributes }),
													],
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!G && (0, s.Y)(O.W, { ...W.calloutBadge, controller: K }),
													!te &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: b.url,
																onClick: (S) => {
																	V && V(S);
																},
																dangerouslySetInnerHTML: { __html: _e || '' },
															}),
														}),
													!ie && (0, s.Y)(j.G, { ...W.rating }),
													!se && ve && b.price && b.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: fe
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(c.g, { ...W.price, value: b.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(c.g, { ...W.price, value: b.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(c.g, { ...W.price, value: b.price }),
														  })
														: null,
													(0, P.Y)(Q, { result: L, treePath: k }),
													!re && L.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: L.variants?.selections.map((S) => (0, s.Y)(E.m, { ...W.variantSelection, type: S.type, selection: S })),
														  })
														: null,
													!ae &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(w.$, { ...W.button, ...pe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(i, ['Q', 0, N]);
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(r),
					c = e('./components/src/components/Molecules/Result/Result.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/utilities/lazyRenderMinSize.ts'),
					h = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					U = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useDisplaySettings.tsx'),
					A = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					j = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					w = e('../../node_modules/preact/compat/dist/compat.module.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('./components/src/hooks/useIntersection.tsx'),
					T = e('./components/src/hooks/useComponent.tsx');
				const R = ({ gapSize: C, columns: N }) =>
						(0, n.AH)({
							...m.k,
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: C,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${N}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					E = (0, l.PA)((C) => {
						const N = (0, I.u)(),
							q = (0, U.LU)(),
							F = {
								results: C.controller?.store?.results,
								gapSize: '20px',
								title: C.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: q,
							},
							ee = { name: C.controller?.store?.profile?.tag?.toLowerCase(), ...C };
						let _ = (0, g.v6)('recommendationGrid', N, F, ee);
						if (!(C.theme?.type == 'templates' || N?.type == 'templates')) {
							const B = (0, O.X)(_?.breakpoints || {}),
								me = a()(_?.theme || {}, B?.theme || {}, { arrayMerge: (b, de) => de });
							_ = { ..._, ...B, theme: me };
						}
						const {
								disableStyles: M,
								title: L,
								trim: G,
								lazyRender: te,
								className: se,
								internalClassName: oe,
								treePath: Q,
								theme: $,
								controller: x,
							} = _,
							Y = _.resultComponent,
							ne = (0, y.uk)(),
							z = typeof Y == 'string',
							V = z ? Y : '',
							K = ne?.templates?.library.import.component.result || {},
							{ ComponentOverride: re, shouldWaitForNamedOverride: ae } = (0, T.x)(K, z ? V : void 0),
							H = z ? re : Y,
							J = { enabled: !0, offset: '10%', ...te },
							le = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, u.s)({ disableStyles: M }), theme: _?.theme } };
						let D = _.results || x.store.results;
						if (!_.columns && !_.rows) (_.rows = 1), (_.columns = D.length);
						else if (_.columns && !_.rows) {
							if (((_.rows = Math.floor(D.length / _.columns)), G)) {
								const B = D.length % _.columns;
								D = D.slice(0, D.length - B);
							}
						} else if (_.rows && !_.columns) {
							if (G) {
								const B = D.length % _.rows;
								D = D.slice(0, D.length - B);
							}
							_.columns = Math.ceil(D.length / _.rows);
						} else _?.columns && _?.rows && _.columns > 0 && _.rows > 0 && (D = D?.slice(0, _.columns * _.rows));
						const ie = (0, P.Z)(_, R),
							[ce, Z] = (0, w.useState)(!1),
							X = (0, p.li)(null);
						return (
							(!J?.enabled || (0, f.v)(X, `${J.offset} 0px ${J.offset} 0px`, !0)) && Z(!0),
							D?.length
								? (0, s.Y)(h._, {
										children: (0, s.Y)('div', {
											...ie,
											style: M ? m.k : void 0,
											ref: X,
											className: t()('ss__recommendation-grid', se, oe),
											children: ce
												? (0, s.FD)(A.l, {
														controller: x,
														children: [
															L && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: L }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: D.map((B) =>
																	H && x
																		? (0, d.Y)(H, {
																				controller: x,
																				result: B,
																				theme: z ? a()($ || {}, { components: { result: { customComponent: Y } } }) : $,
																				treePath: Q,
																		  })
																		: ae
																		? null
																		: (0, s.Y)(j.o, {
																				result: B,
																				controller: x,
																				children: (0, s.Y)(c.Q, { ...le.result, result: B, controller: x, treePath: Q }, B.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(A.l, {
														controller: x,
														children: D.map((B) => (0, s.Y)(j.o, { controller: x, result: B, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
				e.d(i, ['q', 0, E]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					a = e('./components/src/utilities/mergeStyles.ts');
				const c = () => (0, n.AH)({}),
					d = (0, o.PA)((u) => {
						const { children: g, className: P, internalClassName: m } = u,
							h = (0, l.v2)(g),
							I = (0, a.Z)(u, c);
						return h.length ? (0, s.Y)('div', { className: r()('ss__recommendation-profile-tracker', P, m), ...I, children: g }) : null;
					});
				e.d(i, ['l', 0, d]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, l.AH)({}) },
					u = (0, n.PA)((g) => {
						const P = (0, r.u)(),
							m = (0, a.v6)('resultTracker', P, {}, g),
							h = { impression: !0, click: !0 },
							{ children: I, result: y, track: U, controller: O, className: A, internalClassName: j, disableStyles: w, style: p } = m,
							f = { ...h, ...U },
							{ ref: T, inViewport: R } = (0, c.Q)();
						R && f.impression && O?.track.product.impression(y);
						const E = {};
						return (
							w ? p && (E.css = [p]) : (E.css = [d.ResultTracker(), p]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${O?.type}-result-tracker`, A, j),
								onClick: (C) => {
									f.click && O?.track.product.click(C, y);
								},
								ref: T,
								...E,
								children: I,
							})
						);
					});
				e.d(i, ['o', 0, u]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, o = '0px', t = !1) => {
					const [r, a] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const c = new IntersectionObserver(
								([d]) => {
									a(d.isIntersecting), t && d.isIntersecting && c.unobserve(n.current);
								},
								{ rootMargin: o }
							);
							return (
								n.current && c.observe(n.current),
								() => {
									c.unobserve(n.current);
								}
							);
						}, []),
						r
					);
				};
				e.d(i, ['v', 0, l]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					n = (t, r = {}) => {
						const { rootMargin: a = '0px', fireOnce: c = !1, threshold: d = 0, minVisibleTime: u = 0 } = r,
							[g, P] = (0, s.J0)(!1),
							m = (0, s.li)(null),
							h = (0, s.li)(null),
							[I, y] = (0, s.J0)(0),
							U = (0, s.hb)((O) => {
								(t.current = O), y((A) => A + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								P(!1);
								let O = null,
									A = null;
								if (!window.IntersectionObserver || !t.current) return;
								const j = () => {
										A && (window.clearInterval(A), (A = null));
									},
									w = () => {
										u > 0
											? ((h.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													P(!0), c && t.current && O && O.unobserve(t.current);
											  }, u)))
											: (P(!0), c && t.current && O && O.unobserve(t.current));
									},
									p = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (h.current = null), P(!1);
									};
								return (
									(O = new IntersectionObserver(
										([f]) => {
											f.isIntersecting
												? t.current && o(t.current)
													? (j(), w())
													: (p(),
													  A ||
															(A = window.setInterval(() => {
																if (!t.current) {
																	j();
																	return;
																}
																o(t.current) && (j(), w());
															}, l)))
												: (j(), p());
										},
										{ rootMargin: a, threshold: d }
									)),
									t.current && O.observe(t.current),
									() => {
										P(!1), j(), m.current && window.clearTimeout(m.current), O && t.current && O.unobserve(t.current);
									}
								);
							}, [t, I]),
							{ inViewport: g, updateRef: U }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(i, ['v', 0, n]);
			},
			'./components/src/types.ts'(v, i, e) {
				'use strict';
				e.d(i, { Q: () => l, V: () => s });
				var s = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(s || {}),
					l = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(v, i, e) {
				'use strict';
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
				e.d(i, ['F', 0, s]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					o = 1e3;
				function t(r) {
					const a = (0, s.li)(null),
						{ inViewport: c, updateRef: d } = (0, l.v)(a, { fireOnce: !0, threshold: n, minVisibleTime: o, ...r });
					return { ref: a, inViewport: c, updateRef: d };
				}
			},
			'./components/src/utilities/lazyRenderMinSize.ts'(v, i, e) {
				'use strict';
				const s = { minWidth: '1px', minHeight: '1px' };
				e.d(i, ['k', 0, s]);
			},
			'./components/src/utilities/snapify.ts'(v, i, e) {
				'use strict';
				e.d(i, { p: () => O });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					U = { globals: { siteId: 'atkzs2' } };
				class O {
					static recommendation(f) {
						const T = f.id;
						if (y[T]) return y[T];
						const R = (y[T] = j({ client: U, controller: f }));
						return (
							R.on('afterStore', async ({ controller: E }, C) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(f) {
						const T = f.id;
						if (y[T]) return y[T];
						const R = (y[T] = w({ client: U, controller: f }));
						return (
							R.on('afterStore', async ({ controller: E }, C) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
					static search(f) {
						const T = f.id;
						if (y[T]) return y[T];
						const R = (y[T] = A({ client: U, controller: f }));
						return (
							R.on('afterStore', async ({ controller: E }, C) => {
								E.log.debug('controller', E), E.log.debug('store', E.store.toJSON()), await C();
							}),
							R.init(),
							R
						);
					}
				}
				function A(p) {
					const f = new d.V(new g.E({ settings: { coreType: 'query', corePrefix: p.controller.id } }), u.X);
					return new l.Tp(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new a.U(p.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new h.V(),
						tracker: new I.J(p.client.globals),
					});
				}
				function j(p) {
					const f = new d.V(new g.E(), u.X).detach(!0);
					return new o.c(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new c.t(p.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new h.V(),
						tracker: new I.J(p.client.globals),
					});
				}
				function w(p) {
					const f = new d.V(new g.E(), u.X).detach();
					return new n.Z(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new r.Y(p.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new h.V(),
						tracker: new I.J(p.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					o = (t) => {
						const r = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, s.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, o]);
			},
			'../../node_modules/colord/plugins/names.mjs'(v, i, e) {
				'use strict';
				e.d(i, { A: () => s }), e.dn(s);
				function s(l, n) {
					var o = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						t = {};
					for (var r in o) t[o[r]] = r;
					var a = {};
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var d,
							u,
							g = t[this.toHex()];
						if (g) return g;
						if (c?.closest) {
							var P = this.toRgb(),
								m = 1 / 0,
								h = 'black';
							if (!a.length) for (var I in o) a[I] = new l(o[I]).toRgb();
							for (var y in o) {
								var U = ((d = P), (u = a[y]), Math.pow(d.r - u.r, 2) + Math.pow(d.g - u.g, 2) + Math.pow(d.b - u.b, 2));
								U < m && ((m = U), (h = y));
							}
							return h;
						}
					}),
						n.string.push([
							function (c) {
								var d = c.toLowerCase(),
									u = d === 'transparent' ? '#0000' : o[d];
								return u ? new l(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(v, i, e) {
				'use strict';
				e.d(i, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function l(o, t, r) {
					for (r of o.keys()) if (n(r, t)) return r;
				}
				function n(o, t) {
					var r, a, c;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((a = o.length) === t.length) for (; a-- && n(o[a], t[a]); );
							return a === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((c = a), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((c = a[0]), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !n(a[1], t.get(c)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o[a] === t[a]; );
							return a === -1;
						}
						if (!r || typeof o == 'object') {
							a = 0;
							for (r in o) if ((s.call(o, r) && ++a && !s.call(t, r)) || !(r in t) || !n(o[r], t[r])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.3bd35d5a.iframe.bundle.js.map
