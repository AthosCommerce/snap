(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3715],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(C, i, e) {
				'use strict';
				e.d(i, { P: () => s });
				const s = (a) => a.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(C, i, e) {
				'use strict';
				e.d(i, { G: () => a });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(C, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
				function s(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const l = a(n, t.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(t.decimalPlaces, '0'));
					let r = l.join(t.decimalSeparator);
					return t.symbolAfter ? (r = r + t.symbol) : (r = t.symbol + r), r;
				}
				function a(n, o) {
					const t = n.toString(),
						l = t.indexOf('.'),
						r = l == -1 ? t.length : 1 + l + (o || -1);
					return t.substr(0, r);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(C, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(a) {
					if (typeof a != 'string') return a;
					let n = a.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(C, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(a, n, o) {
					if (typeof a != 'string' || a.length <= n) return a;
					const t = a.lastIndexOf(' ', n),
						l = t != -1 ? t : n - 1;
					return a.substr(0, l) + (o || '');
				}
			},
			'./components/src/components/Organisms/Results/Results.stories.tsx'(C, i, e) {
				'use strict';
				e.r(i), e.d(i, { Grid: () => p, List: () => f, __namedExportsOrder: () => c, default: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Organisms/Results/Results.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts'),
					r = e('./components/src/types.ts');
				const m = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`tsx
import { Results } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`tsx
<Results controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`tsx
<Results results={controller.store.results} />
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

<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />
\`\`\`

### excludeBanners
The \`excludeBanners\` prop specifies whether inline merchandising banners should be omitted from the rendered results.

\`\`\`tsx
<Results results={controller.store.results} excludeBanners={true} />
\`\`\`

### layout
The \`layout\` prop specifies if this result will be rendered in a \`grid\` or \`list\` layout.

\`\`\`tsx
<Results results={controller.store.results} layout={'grid'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display in a grid layout.

\`\`\`tsx
<Results results={controller.store.results} rows={2} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result within a grid layout.

\`\`\`tsx
<Results results={controller.store.results} gapSize={'10px'} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`js
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
<Results results={controller.store.results} breakpoints={breakpoints} />
\`\`\`
`,
					E = {
						title: 'Organisms/Results',
						component: n.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(a.oz, { options: { overrides: { code: o.Z } }, children: m }), (0, s.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, s.Y)(g, {})],
						argTypes: {
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Results layout',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [r.V.grid, r.V.list],
								control: { type: 'select' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid - adding this will put a hard limit on the results',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							excludeBanners: {
								defaultValue: !1,
								description: 'Exclude inline merchandising banners from the results list',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...t.F,
						},
					},
					u = l.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					p = (g, { loaded: { controller: O } }) =>
						(0, s.Y)('div', {
							style: { maxWidth: g?.layout == 'list' ? '650px' : '800px' },
							children: (0, s.Y)(n.n, { ...g, controller: O, results: O?.store?.results }),
						});
				(p.loaders = [async () => (await u.search(), { controller: u })]), (p.args = { layout: 'grid' });
				const f = (g, { loaded: { controller: O } }) =>
					(0, s.Y)('div', {
						style: { maxWidth: g?.layout == 'list' ? '650px' : '800px' },
						children: (0, s.Y)(n.n, { ...g, controller: O, results: O?.store?.results, layout: r.V.list }),
					});
				(f.loaders = [async () => (await u.search(), { controller: u })]),
					(f.args = { layout: 'list' }),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '800px'
  }}>
            <Results {...args} controller={controller} results={controller?.store?.results} />
        </div>;
}`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '800px'
  }}>
            <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />
        </div>;
}`,
								...f.parameters?.docs?.source,
							},
						},
					});
				const c = ['Grid', 'List'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(C, i, e) {
				'use strict';
				e.d(i, { _: () => R });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					o = e.n(n),
					t = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/providers/controller.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/withTracking.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useA11y.tsx'),
					c = e('./components/src/types.ts'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ width: v }) =>
						(0, a.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: v,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					R = (0, l.Bk)(
						(0, m.W)(
							(0, g.PA)((v) => {
								const M = (0, r.u)(),
									b = (0, E.LU)(),
									A = { layout: c.V.grid, width: 'auto', treePath: b },
									d = (0, u.v6)('inlineBanner', M, A, v),
									{ banner: _, className: D, internalClassName: y, disableA11y: T, layout: U, onClick: B } = d,
									{ overrideElement: W, shouldRenderDefault: $ } = (0, O._)('inlineBanner', d);
								if (!$) return W;
								const J = (0, p.Z)(d, P);
								return _ && _.value
									? (0, s.Y)(t._, {
											children: (0, s.Y)('div', {
												onClick: (w) => {
													B && B(w, _);
												},
												role: 'article',
												ref: (w) => {
													T || (0, f.iy)(w), v.trackingRef(w);
												},
												className: o()('ss__inline-banner', `ss__inline-banner--${U}`, D, y),
												...J,
												dangerouslySetInnerHTML: { __html: _.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => B });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					l = e.n(t),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					m = e('./components/src/components/Atoms/Price/Price.tsx'),
					E = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					R = e('./components/src/types.ts'),
					v = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					M = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					b = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					A = e('./components/src/components/Atoms/Button/Button.tsx'),
					d = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(d),
					D = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					T = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const U = () =>
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
					B = (0, n.PA)((W) => {
						const $ = (0, u.u)(),
							J = (0, p.LU)(),
							w = {
								layout: R.V.grid,
								treePath: J,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							x = (0, g.v6)('result', $, w, W),
							{
								result: h,
								hideBadge: H,
								hideTitle: q,
								hidePricing: ee,
								hideImage: te,
								detailSlot: F,
								fallback: se,
								disableStyles: j,
								className: G,
								internalClassName: V,
								layout: ne,
								onClick: Y,
								controller: K,
								hideVariantSelections: oe,
								hideAddToCartButton: re,
								onAddToCartClick: Z,
								addToCartButtonText: le,
								addToCartButtonSuccessText: Q,
								addToCartButtonSuccessTimeout: X,
								hideRating: z,
								trackingRef: ae,
								treePath: S,
							} = x,
							{ overrideElement: L, shouldRenderDefault: ie } = (0, y._)('result', {
								...x,
								customComponent: x.customComponent && x.customComponent !== 'Result' ? x.customComponent : void 0,
							});
						if (!ie) return L;
						const I = h?.display?.mappings.core || h?.mappings?.core,
							[ce, me] = (0, a.J0)(!1),
							k = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, c.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: S,
								},
								price: { internalClassName: 'ss__result__price', ...(0, c.s)({ disableStyles: j }), theme: x.theme, treePath: S },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: h,
									...(0, c.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: S,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: h,
									controller: K,
									...(0, c.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: S,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: I?.name || '',
									src: I?.imageUrl || '',
									...(0, c.s)({ disableStyles: j, fallback: se }),
									theme: x.theme,
									treePath: S,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: I?.rating || 0,
									count: Number(I?.ratingCount || 0),
									...(0, c.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: S,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (N) => {
										me(!0), Z && Z(N, h), K?.addToCart([h]), setTimeout(() => me(!1), X);
									},
									...(0, c.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: S,
								},
							};
						let de = I?.name;
						x.truncateTitle && (de = P.x(I?.name || '', x.truncateTitle.limit, x.truncateTitle.append));
						const _e = (0, O.Z)(x, U),
							pe = { addToCartButtonText: { value: ce ? Q : le } },
							fe = _()(pe, x.lang || {}),
							ge = (0, D.u)(fe, { result: h, controller: K }),
							ue = !!(I?.msrp && I?.price && I?.price < I?.msrp),
							he = K?.store?.config?.asyncState?.product?.price ? h.state.priceFetched : !0;
						return I
							? (0, s.Y)(E._, {
									children: (0, s.FD)('article', {
										..._e,
										className: l()('ss__result', `ss__result--${ne}`, { 'ss__result--sale': ue }, G, V),
										ref: ae,
										children: [
											!te &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: I.url,
														onClick: (N) => {
															Y && Y(N);
														},
														children: H
															? (0, s.Y)(r._, { ...k.image })
															: (0, s.Y)(M.Q, { ...k.overlayBadge, controller: K, children: (0, s.Y)(r._, { ...k.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!H && (0, s.Y)(v.W, { ...k.calloutBadge, controller: K }),
													!q &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: I.url,
																onClick: (N) => {
																	Y && Y(N);
																},
																dangerouslySetInnerHTML: { __html: de || '' },
															}),
														}),
													!z && (0, s.Y)(b.G, { ...k.rating }),
													!ee && he && I.price && I.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ue
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(m.g, { ...k.price, value: I.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(m.g, { ...k.price, value: I.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(m.g, { ...k.price, value: I.price }),
														  })
														: null,
													(0, f.Y)(F, { result: h, treePath: S }),
													!oe && h.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: h.variants?.selections.map((N) => (0, s.Y)(T.m, { ...k.variantSelection, type: N.type, selection: N })),
														  })
														: null,
													!re &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(A.$, { ...k.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(C, i, e) {
				'use strict';
				e.d(i, { n: () => U });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(l),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					E = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					u = e('./components/src/components/Molecules/Result/Result.tsx'),
					p = e('./components/src/types.ts'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/withTracking.tsx'),
					M = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					d = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					_ = e('./components/src/hooks/useComponent.tsx'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const y = ({ gapSize: B, columns: W }) =>
						(0, a.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: B,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${W}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / W}% - (${W - 1} * ${B} / ${W} ) )`,
								marginRight: B,
								marginBottom: B,
								[`&:nth-of-type(${W}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${W})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					T = (0, v.W)(u.Q),
					U = (0, n.PA)((B) => {
						const W = (0, R.u)(),
							$ = (0, M.uk)(),
							J = (0, b.LU)(),
							w = {
								0: { columns: B.columns || 1 },
								540: { columns: B.columns || 2 },
								768: { columns: B.columns || 3 },
								991: { columns: B.columns || 4 },
							},
							x = { results: B.controller?.store?.results, columns: 4, gapSize: '20px', layout: p.V.grid, breakpoints: w, treePath: J };
						let h = (0, g.v6)('results', W, x, B);
						if (!(B.theme?.type == 'templates' || W?.type == 'templates')) {
							const L = (0, A.X)(h?.breakpoints || {}),
								ie = r()(h?.theme || {}, L?.theme || {}, { arrayMerge: (I, ce) => ce });
							h = { ...h, ...L, theme: ie };
						}
						const { disableStyles: H, className: q, internalClassName: ee, layout: te, theme: F, excludeBanners: se, controller: j, treePath: G } = h,
							V = h.resultComponent,
							{ overrideElement: ne, shouldRenderDefault: Y } = (0, D._)('results', h);
						if (!Y) return ne;
						const K = typeof V == 'string',
							oe = K ? V : '',
							re = $?.templates?.library.import.component.result || {},
							{ ComponentOverride: Z, shouldWaitForNamedOverride: le } = (0, _.x)(re, K ? oe : void 0),
							Q = K ? Z : V,
							X = {
								result: { internalClassName: 'ss__results__result', ...(0, c.s)({ disableStyles: H }), theme: h?.theme, treePath: G },
								inlineBanner: {
									controller: j,
									internalClassName: 'ss__results__inline-banner',
									...(0, c.s)({ disableStyles: H }),
									theme: h?.theme,
									treePath: G,
								},
							};
						let z = se ? h.results?.filter((L) => L.type !== m.c.BANNER) : h.results;
						h?.columns && h?.rows && h.columns > 0 && h.rows > 0 && (z = z?.slice(0, h.columns * h.rows));
						const ae = (0, O.Z)({ ...h, columns: te == p.V.list ? 1 : h.columns }, y),
							S = K ? r()(F || {}, { components: { result: { customComponent: V } } }) : F;
						return z?.length
							? (0, s.Y)(P._, {
									children: (0, s.Y)('div', {
										...ae,
										className: t()('ss__results', `ss__results-${h.layout}`, q, ee),
										children: z.map((L) =>
											L.type === m.c.BANNER
												? (0, a.n)(E._, { ...X.inlineBanner, key: L.id, banner: L, layout: h.layout })
												: le
												? null
												: Q && j
												? (0, s.Y)(d.o, {
														result: L,
														controller: j,
														children: (0, f.Y)(Q, { key: L.id, controller: j, result: L, theme: S, treePath: G }),
												  })
												: (0, s.Y)(T, { ...X.result, result: L, layout: h.layout, controller: j }, L.id)
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(C, i, e) {
				'use strict';
				e.d(i, { o: () => u });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, a.AH)({}) },
					u = (0, n.PA)((p) => {
						const f = (0, l.u)(),
							c = (0, r.v6)('resultTracker', f, {}, p),
							g = { impression: !0, click: !0 },
							{ children: O, result: P, track: R, controller: v, className: M, internalClassName: b, disableStyles: A, style: d } = c,
							_ = { ...g, ...R },
							{ ref: D, inViewport: y } = (0, m.Q)();
						y && _.impression && v?.track.product.impression(P);
						const T = {};
						return (
							A ? d && (T.css = [d]) : (T.css = [E.ResultTracker(), d]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${v?.type}-result-tracker`, M, b),
								onClick: (U) => {
									_.click && v?.track.product.click(U, P);
								},
								ref: D,
								...T,
								children: O,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(C, i, e) {
				'use strict';
				e.d(i, { v: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					n = (t, l = {}) => {
						const { rootMargin: r = '0px', fireOnce: m = !1, threshold: E = 0, minVisibleTime: u = 0 } = l,
							[p, f] = (0, s.J0)(!1),
							c = (0, s.li)(null),
							g = (0, s.li)(null),
							[O, P] = (0, s.J0)(0),
							R = (0, s.hb)((v) => {
								(t.current = v), P((M) => M + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								f(!1);
								let v = null,
									M = null;
								if (!window.IntersectionObserver || !t.current) return;
								const b = () => {
										M && (window.clearInterval(M), (M = null));
									},
									A = () => {
										u > 0
											? ((g.current = Date.now()),
											  c.current && window.clearTimeout(c.current),
											  (c.current = window.setTimeout(() => {
													f(!0), m && t.current && v && v.unobserve(t.current);
											  }, u)))
											: (f(!0), m && t.current && v && v.unobserve(t.current));
									},
									d = () => {
										c.current && window.clearTimeout(c.current), (c.current = null), (g.current = null), f(!1);
									};
								return (
									(v = new IntersectionObserver(
										([_]) => {
											_.isIntersecting
												? t.current && o(t.current)
													? (b(), A())
													: (d(),
													  M ||
															(M = window.setInterval(() => {
																if (!t.current) {
																	b();
																	return;
																}
																o(t.current) && (b(), A());
															}, a)))
												: (b(), d());
										},
										{ rootMargin: r, threshold: E }
									)),
									t.current && v.observe(t.current),
									() => {
										f(!1), b(), c.current && window.clearTimeout(c.current), v && t.current && v.unobserve(t.current);
									}
								);
							}, [t, O]),
							{ inViewport: p, updateRef: R }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(C, i, e) {
				'use strict';
				e.d(i, { N: () => o, W: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('./components/src/utilities/createImpressionObserver.ts'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'sstracking';
				function t(l) {
					const r = l;
					return (E) => {
						const { controller: u, result: p, banner: f, type: c, content: g, ...O } = E;
						if (E.trackingRef) return (0, s.Y)(r, { ...E });
						!u && (!c || !g) && console.warn('Warning: No controller provided to withTracking', E),
							!p && !f && (!c || !g) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: P, inViewport: R, updateRef: v } = (0, a.Q)(),
							M = (p || f || (c && g?.[c]?.[0]))?.responseId,
							b = (0, n.li)(M),
							A = (0, n.li)(!1);
						b.current !== M && (A.current = !0),
							(0, n.vJ)(() => {
								b.current !== M && ((b.current = M), v(P.current));
							}, [M, v]),
							(0, n.vJ)(() => {
								A.current && !R && (A.current = !1);
							}, [R, M]);
						const d = c && g && !p && ['search', 'autocomplete'].includes(u?.type || '');
						R && !A.current && (d ? u?.track.banner.impression(g[c][0]) : p?.bundleSeed || u?.track.product.impression(p || f));
						const _ = (0, n.hb)(
							(y) => {
								d ? u?.track.banner.click(y, g[c][0]) : u?.track.product.click(y, p || f);
							},
							[u, p, f, c, g]
						);
						(0, n.vJ)(() => {
							const y = P.current;
							if (y)
								return (
									y.setAttribute(o, 'true'),
									y.addEventListener('click', _, !0),
									() => {
										y.removeEventListener('click', _, !0);
									}
								);
						}, [_]);
						const D = {
							...O,
							controller: u,
							result: p,
							banner: f,
							type: c,
							content: g,
							trackingRef: (0, n.hb)(
								(y) => {
									v(y);
								},
								[v]
							),
						};
						return (0, s.Y)(r, { ...D });
					};
				}
			},
			'./components/src/types.ts'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => a, V: () => s });
				var s = ((n) => ((n.grid = 'grid'), (n.list = 'list'), n))(s || {}),
					a = ((n) => (
						(n.GRID = 'grid'),
						(n.PALETTE = 'palette'),
						(n.LIST = 'list'),
						(n.SLIDER = 'slider'),
						(n.HIERARCHY = 'hierarchy'),
						(n.TOGGLE = 'toggle'),
						n
					))(a || {});
			},
			'./components/src/utilities/componentArgs.ts'(C, i, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(C, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					o = 1e3;
				function t(l) {
					const r = (0, s.li)(null),
						{ inViewport: m, updateRef: E } = (0, a.v)(r, { ...l, fireOnce: !0, threshold: n, minVisibleTime: o });
					return { ref: r, inViewport: m, updateRef: E };
				}
			},
			'./components/src/utilities/snapify.ts'(C, i, e) {
				'use strict';
				e.d(i, { p: () => v });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					R = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(_) {
						const D = _.id;
						if (P[D]) return P[D];
						const y = (P[D] = b({ client: R, controller: _ }));
						return (
							y.on('afterStore', async ({ controller: T }, U) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(_) {
						const D = _.id;
						if (P[D]) return P[D];
						const y = (P[D] = A({ client: R, controller: _ }));
						return (
							y.on('afterStore', async ({ controller: T }, U) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
					static search(_) {
						const D = _.id;
						if (P[D]) return P[D];
						const y = (P[D] = M({ client: R, controller: _ }));
						return (
							y.on('afterStore', async ({ controller: T }, U) => {
								T.log.debug('controller', T), T.log.debug('store', T.store.toJSON()), await U();
							}),
							y.init(),
							y
						);
					}
				}
				function M(d) {
					const _ = new E.V(new p.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), u.X);
					return new a.Tp(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new r.U(d.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new c.U(),
						logger: new g.V(),
						tracker: new O.J(d.client.globals),
					});
				}
				function b(d) {
					const _ = new E.V(new p.E(), u.X).detach(!0);
					return new o.c(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new m.t(d.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new c.U(),
						logger: new g.V(),
						tracker: new O.J(d.client.globals),
					});
				}
				function A(d) {
					const _ = new E.V(new p.E(), u.X).detach();
					return new n.Z(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new l.Y(d.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new f.E(),
						profiler: new c.U(),
						logger: new g.V(),
						tracker: new O.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, i, e) {
				'use strict';
				e.d(i, { Z: () => o });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					o = (t) => {
						const l = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								l.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(l.current);
							}, [t.className, t.children, l]),
							(0, s.Y)('code', { ...t, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(C, i, e) {
				'use strict';
				e.d(i, { A: () => s }), Object.defineProperty(s, 'name', { value: 'default', configurable: !0 });
				function s(a, n) {
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
					for (var l in o) t[o[l]] = l;
					var r = {};
					(a.prototype.toName = function (m) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var E,
							u,
							p = t[this.toHex()];
						if (p) return p;
						if (m?.closest) {
							var f = this.toRgb(),
								c = 1 / 0,
								g = 'black';
							if (!r.length) for (var O in o) r[O] = new a(o[O]).toRgb();
							for (var P in o) {
								var R = ((E = f), (u = r[P]), Math.pow(E.r - u.r, 2) + Math.pow(E.g - u.g, 2) + Math.pow(E.b - u.b, 2));
								R < c && ((c = R), (g = P));
							}
							return g;
						}
					}),
						n.string.push([
							function (m) {
								var E = m.toLowerCase(),
									u = E === 'transparent' ? '#0000' : o[E];
								return u ? new a(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(C, i, e) {
				'use strict';
				e.d(i, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function a(o, t, l) {
					for (l of o.keys()) if (n(l, t)) return l;
				}
				function n(o, t) {
					var l, r, m;
					if (o === t) return !0;
					if (o && t && (l = o.constructor) === t.constructor) {
						if (l === Date) return o.getTime() === t.getTime();
						if (l === RegExp) return o.toString() === t.toString();
						if (l === Array) {
							if ((r = o.length) === t.length) for (; r-- && n(o[r], t[r]); );
							return r === -1;
						}
						if (l === Set) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((m = r), (m && typeof m == 'object' && ((m = a(t, m)), !m)) || !t.has(m))) return !1;
							return !0;
						}
						if (l === Map) {
							if (o.size !== t.size) return !1;
							for (r of o) if (((m = r[0]), (m && typeof m == 'object' && ((m = a(t, m)), !m)) || !n(r[1], t.get(m)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (l === DataView) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((r = o.byteLength) === t.byteLength) for (; r-- && o[r] === t[r]; );
							return r === -1;
						}
						if (!l || typeof o == 'object') {
							r = 0;
							for (l in o) if ((s.call(o, l) && ++r && !s.call(t, l)) || !(l in t) || !n(o[l], t[l])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (C.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.7d63581b.iframe.bundle.js.map
