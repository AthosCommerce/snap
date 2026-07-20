(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[401],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(O, i, e) {
				'use strict';
				const s = (a) => a.replace(/_/g, '-').toLowerCase();
				e.d(i, ['P', 0, s]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(O, i, e) {
				'use strict';
				e.d(i, { G: () => a });
				var s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, s.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(O, i, e) {
				'use strict';
				e.d(i, { Z: () => s });
				function s(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const r = a(n, t.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(t.decimalPlaces, '0'));
					let l = r.join(t.decimalSeparator);
					return t.symbolAfter ? (l = l + t.symbol) : (l = t.symbol + l), l;
				}
				function a(n, o) {
					const t = n.toString(),
						r = t.indexOf('.'),
						l = r == -1 ? t.length : 1 + r + (o || -1);
					return t.substr(0, l);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(O, i, e) {
				'use strict';
				e.d(i, { p: () => s });
				function s(a) {
					if (typeof a != 'string') return a;
					let n = a.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(O, i, e) {
				'use strict';
				e.d(i, { x: () => s });
				function s(a, n, o) {
					if (typeof a != 'string' || a.length <= n) return a;
					const t = a.lastIndexOf(' ', n),
						r = t != -1 ? t : n - 1;
					return a.substr(0, r) + (o || '');
				}
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(O, i, e) {
				'use strict';
				e.r(i), e.d(i, { Grid: () => h, List: () => u, __namedExportsOrder: () => P, default: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const l = `# RecommendationGrid

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
										children: [(0, s.Y)(a.oz, { options: { overrides: { code: o.Z } }, children: l }), (0, s.Y)(a.uY, { story: a.h1 })],
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
					u = (m, { loaded: { controller: E } }) =>
						(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(n.q, { ...m, controller: E, results: E?.store?.results }) });
				(u.args = { columns: 10, rows: 1 }), (u.loaders = [async () => (await d.search(), { controller: d })]);
				const h = (m, { loaded: { controller: E } }) =>
					(0, s.Y)('div', { style: { maxWidth: '1200px' }, children: (0, s.Y)(n.q, { ...m, controller: E, results: E?.store?.results }) });
				(h.args = { columns: 4 }),
					(h.loaders = [async () => (await d.search(), { controller: d })]),
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
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					});
				const P = ['List', 'Grid'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					l = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					v = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					A = e('./components/src/types.ts'),
					y = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					x = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					j = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(p),
					M = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const L = () =>
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
					Z = (0, n.PA)((Q) => {
						const X = (0, u.u)(),
							_ = (0, h.LU)(),
							q = {
								layout: A.V.grid,
								treePath: _,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							T = (0, E.v6)('result', X, q, Q),
							{
								result: B,
								hideBadge: G,
								hideTitle: ee,
								hidePricing: te,
								hideImage: J,
								detailSlot: H,
								fallback: w,
								disableStyles: U,
								className: se,
								internalClassName: Y,
								layout: oe,
								onClick: V,
								controller: k,
								hideVariantSelections: ne,
								hideAddToCartButton: F,
								onAddToCartClick: z,
								addToCartButtonText: re,
								addToCartButtonSuccessText: D,
								addToCartButtonSuccessTimeout: le,
								hideRating: ae,
								trackingRef: ie,
								treePath: W,
							} = T,
							{ overrideElement: ce, shouldRenderDefault: I } = (0, R._)('result', {
								...T,
								customComponent: T.customComponent && T.customComponent !== 'Result' ? T.customComponent : void 0,
							});
						if (!I) return ce;
						const b = B?.display?.mappings.core || B?.mappings?.core,
							[me, $] = (0, a.J0)(!1),
							S = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: U }),
									theme: T.theme,
									treePath: W,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: U }), theme: T.theme, treePath: W },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: B,
									...(0, m.s)({ disableStyles: U }),
									theme: T.theme,
									treePath: W,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: B,
									controller: k,
									...(0, m.s)({ disableStyles: U }),
									theme: T.theme,
									treePath: W,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: b?.name || '',
									src: b?.imageUrl || '',
									...(0, m.s)({ disableStyles: U, fallback: w }),
									theme: T.theme,
									treePath: W,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: b?.rating || 0,
									count: Number(b?.ratingCount || 0),
									...(0, m.s)({ disableStyles: U }),
									theme: T.theme,
									treePath: W,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (N) => {
										$(!0), z && z(N, B), k?.addToCart([B]), setTimeout(() => $(!1), le);
									},
									...(0, m.s)({ disableStyles: U }),
									theme: T.theme,
									treePath: W,
								},
							};
						let de = b?.name;
						T.truncateTitle && (de = v.x(b?.name || '', T.truncateTitle.limit, T.truncateTitle.append));
						const _e = (0, C.Z)(T, L),
							pe = { addToCartButtonText: { value: me ? D : re } },
							fe = g()(pe, T.lang || {}),
							ge = (0, M.u)(fe, { result: B, controller: k }),
							ue = !!(b?.msrp && b?.price && b?.price < b?.msrp),
							he = k?.store?.config?.asyncState?.product?.price ? B.state.priceFetched : !0;
						return b
							? (0, s.Y)(d._, {
									children: (0, s.FD)('article', {
										..._e,
										className: r()('ss__result', `ss__result--${oe}`, { 'ss__result--sale': ue }, se, Y),
										ref: ie,
										children: [
											!J &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: b.url,
														onClick: (N) => {
															V && V(N);
														},
														children: G
															? (0, s.Y)(l._, { ...S.image })
															: (0, s.Y)(x.Q, { ...S.overlayBadge, controller: k, children: (0, s.Y)(l._, { ...S.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!G && (0, s.Y)(y.W, { ...S.calloutBadge, controller: k }),
													!ee &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: b.url,
																onClick: (N) => {
																	V && V(N);
																},
																dangerouslySetInnerHTML: { __html: de || '' },
															}),
														}),
													!ae && (0, s.Y)(j.G, { ...S.rating }),
													!te && he && b.price && b.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ue
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(c.g, { ...S.price, value: b.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(c.g, { ...S.price, value: b.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(c.g, { ...S.price, value: b.price }),
														  })
														: null,
													(0, P.Y)(H, { result: B, treePath: W }),
													!ne && B.variants?.selections.length
														? (0, s.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: B.variants?.selections.map((N) => (0, s.Y)(f.m, { ...S.variantSelection, type: N.type, selection: N })),
														  })
														: null,
													!F &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(K.$, { ...S.button, ...ge.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(i, ['Q', 0, Z]);
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(r),
					c = e('./components/src/components/Molecules/Result/Result.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/snap.tsx'),
					v = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					y = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					x = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					j = e('../../node_modules/preact/compat/dist/compat.module.js'),
					K = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/hooks/useIntersection.tsx'),
					g = e('./components/src/hooks/useComponent.tsx');
				const M = ({ gapSize: f, columns: L }) =>
						(0, n.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: f,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${L}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					R = (0, a.PA)((f) => {
						const L = (0, E.u)(),
							Z = (0, v.LU)(),
							Q = {
								results: f.controller?.store?.results,
								gapSize: '20px',
								title: f.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: Z,
							},
							X = { name: f.controller?.store?.profile?.tag?.toLowerCase(), ...f };
						let _ = (0, h.v6)('recommendationGrid', L, Q, X);
						if (!(f.theme?.type == 'templates' || L?.type == 'templates')) {
							const I = (0, A.X)(_?.breakpoints || {}),
								b = l()(_?.theme || {}, I?.theme || {}, { arrayMerge: (me, $) => $ });
							_ = { ..._, ...I, theme: b };
						}
						const {
								disableStyles: q,
								title: T,
								trim: B,
								lazyRender: G,
								className: ee,
								internalClassName: te,
								treePath: J,
								theme: H,
								controller: w,
							} = _,
							U = _.resultComponent,
							se = (0, C.uk)(),
							Y = typeof U == 'string',
							oe = Y ? U : '',
							V = se?.templates?.library.import.component.result || {},
							{ ComponentOverride: k, shouldWaitForNamedOverride: ne } = (0, g.x)(V, Y ? oe : void 0),
							F = Y ? k : U,
							z = { enabled: !0, offset: '10%', ...G },
							re = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, u.s)({ disableStyles: q }), theme: _?.theme } };
						let D = _.results || w.store.results;
						if (!_.columns && !_.rows) (_.rows = 1), (_.columns = D.length);
						else if (_.columns && !_.rows) {
							if (((_.rows = Math.floor(D.length / _.columns)), B)) {
								const I = D.length % _.columns;
								D = D.slice(0, D.length - I);
							}
						} else if (_.rows && !_.columns) {
							if (B) {
								const I = D.length % _.rows;
								D = D.slice(0, D.length - I);
							}
							_.columns = Math.ceil(D.length / _.rows);
						} else _?.columns && _?.rows && _.columns > 0 && _.rows > 0 && (D = D?.slice(0, _.columns * _.rows));
						const le = (0, P.Z)(_, M),
							[ae, ie] = (0, j.useState)(!1),
							W = (0, K.li)(null);
						return (
							(!z?.enabled || (0, p.v)(W, `${z.offset} 0px ${z.offset} 0px`, !0)) && ie(!0),
							D?.length
								? (0, s.Y)(m._, {
										children: (0, s.Y)('div', {
											...le,
											ref: W,
											className: t()('ss__recommendation-grid', ee, te),
											children: ae
												? (0, s.FD)(y.l, {
														controller: w,
														children: [
															T && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: T }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: D.map((I) =>
																	F && w
																		? (0, d.Y)(F, {
																				controller: w,
																				result: I,
																				theme: Y ? l()(H || {}, { components: { result: { customComponent: U } } }) : H,
																				treePath: J,
																		  })
																		: ne
																		? null
																		: (0, s.Y)(x.o, {
																				result: I,
																				controller: w,
																				children: (0, s.Y)(c.Q, { ...re.result, result: I, controller: w, treePath: J }, I.id),
																		  })
																),
															}),
														],
												  })
												: (0, s.Y)(y.l, {
														controller: w,
														children: D.map((I) => (0, s.Y)(x.o, { controller: w, result: I, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
				e.d(i, ['q', 0, R]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					l = e('./components/src/utilities/mergeStyles.ts');
				const c = () => (0, n.AH)({}),
					d = (0, o.PA)((u) => {
						const { children: h, className: P, internalClassName: m } = u,
							E = (0, a.v2)(h),
							C = (0, l.Z)(u, c);
						return E.length ? (0, s.Y)('div', { className: r()('ss__recommendation-profile-tracker', P, m), ...C, children: h }) : null;
					});
				e.d(i, ['l', 0, d]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, a.AH)({}) },
					u = (0, n.PA)((h) => {
						const P = (0, r.u)(),
							m = (0, l.v6)('resultTracker', P, {}, h),
							E = { impression: !0, click: !0 },
							{ children: C, result: v, track: A, controller: y, className: x, internalClassName: j, disableStyles: K, style: p } = m,
							g = { ...E, ...A },
							{ ref: M, inViewport: R } = (0, c.Q)();
						R && g.impression && y?.track.product.impression(v);
						const f = {};
						return (
							K ? p && (f.css = [p]) : (f.css = [d.ResultTracker(), p]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${y?.type}-result-tracker`, x, j),
								onClick: (L) => {
									g.click && y?.track.product.click(L, v);
								},
								ref: M,
								...f,
								children: C,
							})
						);
					});
				e.d(i, ['o', 0, u]);
			},
			'./components/src/hooks/useIntersection.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = (n, o = '0px', t = !1) => {
					const [r, l] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const c = new IntersectionObserver(
								([d]) => {
									l(d.isIntersecting), t && d.isIntersecting && c.unobserve(n.current);
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
				e.d(i, ['v', 0, a]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					n = (t, r = {}) => {
						const { rootMargin: l = '0px', fireOnce: c = !1, threshold: d = 0, minVisibleTime: u = 0 } = r,
							[h, P] = (0, s.J0)(!1),
							m = (0, s.li)(null),
							E = (0, s.li)(null),
							[C, v] = (0, s.J0)(0),
							A = (0, s.hb)((y) => {
								(t.current = y), v((x) => x + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								P(!1);
								let y = null,
									x = null;
								if (!window.IntersectionObserver || !t.current) return;
								const j = () => {
										x && (window.clearInterval(x), (x = null));
									},
									K = () => {
										u > 0
											? ((E.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													P(!0), c && t.current && y && y.unobserve(t.current);
											  }, u)))
											: (P(!0), c && t.current && y && y.unobserve(t.current));
									},
									p = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (E.current = null), P(!1);
									};
								return (
									(y = new IntersectionObserver(
										([g]) => {
											g.isIntersecting
												? t.current && o(t.current)
													? (j(), K())
													: (p(),
													  x ||
															(x = window.setInterval(() => {
																if (!t.current) {
																	j();
																	return;
																}
																o(t.current) && (j(), K());
															}, a)))
												: (j(), p());
										},
										{ rootMargin: l, threshold: d }
									)),
									t.current && y.observe(t.current),
									() => {
										P(!1), j(), m.current && window.clearTimeout(m.current), y && t.current && y.unobserve(t.current);
									}
								);
							}, [t, C]),
							{ inViewport: h, updateRef: A }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(i, ['v', 0, n]);
			},
			'./components/src/types.ts'(O, i, e) {
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
			'./components/src/utilities/componentArgs.ts'(O, i, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(O, i, e) {
				'use strict';
				e.d(i, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const n = 0.7,
					o = 1e3;
				function t(r) {
					const l = (0, s.li)(null),
						{ inViewport: c, updateRef: d } = (0, a.v)(l, { ...r, fireOnce: !0, threshold: n, minVisibleTime: o });
					return { ref: l, inViewport: c, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(O, i, e) {
				'use strict';
				e.d(i, { p: () => y });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					A = { globals: { siteId: 'atkzs2' } };
				class y {
					static recommendation(g) {
						const M = g.id;
						if (v[M]) return v[M];
						const R = (v[M] = j({ client: A, controller: g }));
						return (
							R.on('afterStore', async ({ controller: f }, L) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await L();
							}),
							R.init(),
							R
						);
					}
					static autocomplete(g) {
						const M = g.id;
						if (v[M]) return v[M];
						const R = (v[M] = K({ client: A, controller: g }));
						return (
							R.on('afterStore', async ({ controller: f }, L) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await L();
							}),
							R.init(),
							R
						);
					}
					static search(g) {
						const M = g.id;
						if (v[M]) return v[M];
						const R = (v[M] = x({ client: A, controller: g }));
						return (
							R.on('afterStore', async ({ controller: f }, L) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await L();
							}),
							R.init(),
							R
						);
					}
				}
				function x(p) {
					const g = new d.V(new h.E({ settings: { coreType: 'query', corePrefix: p.controller.id } }), u.X);
					return new a.Tp(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new l.U(p.controller, { urlManager: g }),
						urlManager: g,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new E.V(),
						tracker: new C.J(p.client.globals),
					});
				}
				function j(p) {
					const g = new d.V(new h.E(), u.X).detach(!0);
					return new o.c(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new c.t(p.controller, { urlManager: g }),
						urlManager: g,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new E.V(),
						tracker: new C.J(p.client.globals),
					});
				}
				function K(p) {
					const g = new d.V(new h.E(), u.X).detach();
					return new n.Z(p.controller, {
						client: new t.K(p.client.globals, p.client.config),
						store: new r.Y(p.controller, { urlManager: g }),
						urlManager: g,
						eventManager: new P.E(),
						profiler: new m.U(),
						logger: new E.V(),
						tracker: new C.J(p.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(O, i, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					o = (t) => {
						const r = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, s.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, o]);
			},
			'../../node_modules/colord/plugins/names.mjs'(O, i, e) {
				'use strict';
				e.d(i, { A: () => s }), e.dn(s);
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
					for (var r in o) t[o[r]] = r;
					var l = {};
					(a.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var d,
							u,
							h = t[this.toHex()];
						if (h) return h;
						if (c?.closest) {
							var P = this.toRgb(),
								m = 1 / 0,
								E = 'black';
							if (!l.length) for (var C in o) l[C] = new a(o[C]).toRgb();
							for (var v in o) {
								var A = ((d = P), (u = l[v]), Math.pow(d.r - u.r, 2) + Math.pow(d.g - u.g, 2) + Math.pow(d.b - u.b, 2));
								A < m && ((m = A), (E = v));
							}
							return E;
						}
					}),
						n.string.push([
							function (c) {
								var d = c.toLowerCase(),
									u = d === 'transparent' ? '#0000' : o[d];
								return u ? new a(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(O, i, e) {
				'use strict';
				e.d(i, { j: () => n });
				var s = Object.prototype.hasOwnProperty;
				function a(o, t, r) {
					for (r of o.keys()) if (n(r, t)) return r;
				}
				function n(o, t) {
					var r, l, c;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((l = o.length) === t.length) for (; l-- && n(o[l], t[l]); );
							return l === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (l of o) if (((c = l), (c && typeof c == 'object' && ((c = a(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (l of o) if (((c = l[0]), (c && typeof c == 'object' && ((c = a(t, c)), !c)) || !n(l[1], t.get(c)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((l = o.byteLength) === t.byteLength) for (; l-- && o.getInt8(l) === t.getInt8(l); );
							return l === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((l = o.byteLength) === t.byteLength) for (; l-- && o[l] === t[l]; );
							return l === -1;
						}
						if (!r || typeof o == 'object') {
							l = 0;
							for (r in o) if ((s.call(o, r) && ++l && !s.call(t, r)) || !(r in t) || !n(o[r], t[r])) return !1;
							return Object.keys(t).length === l;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function i(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (O.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.37fa834b.iframe.bundle.js.map
