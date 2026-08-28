(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4055],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(x, i, e) {
				'use strict';
				const o = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(i, ['P', 0, o]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(x, i, e) {
				'use strict';
				e.d(i, { G: () => l });
				var o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(r, n) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...n };
					return (0, o.Z)(r, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(x, i, e) {
				'use strict';
				e.d(i, { Z: () => o });
				function o(r, n) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...n };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const s = l(r, t.decimalPlaces).split('.');
					(s[0] = s[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (s[1] = (s[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = s.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(r, n) {
					const t = r.toString(),
						s = t.indexOf('.'),
						a = s == -1 ? t.length : 1 + s + (n || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(x, i, e) {
				'use strict';
				e.d(i, { p: () => o });
				function o(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(x, i, e) {
				'use strict';
				e.d(i, { x: () => o });
				function o(l, r, n) {
					if (typeof l != 'string' || l.length <= r) return l;
					const t = l.lastIndexOf(' ', r),
						s = t != -1 ? t : r - 1;
					return l.substr(0, s) + (n || '');
				}
			},
			'./components/src/components/Molecules/Result/Result.stories.tsx'(x, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => E, __namedExportsOrder: () => O, default: () => T, hideSections: () => u, truncateTitle: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/Result/Result.tsx'),
					n = e('./components/src/components/Atoms/Image/Image.tsx'),
					t = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const c =
					"# Result\n\nRenders a single product card. \n\n## Sub-components\n- OverlayBadge\n- CalloutBadge\n- Rating\n- Button\n- Icon\n- VariantSelection\n- Price\n- Image\n\n## Usage\n```tsx\nimport { Result } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```tsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideQuickviewButton\nThe `hideQuickviewButton` prop prevents the quickview `<Button />` (with an eye `<Icon />`) from being rendered overlaid on the product image. Clicking the button (or pressing Enter/Space while focused) invokes `controller.quickview(result)`. Defaults to `true`. The button only renders when a `controller` prop has also been provided and the image is not hidden.\n\n```tsx\n<Result result={controller.store.results[0]} controller={controller} hideQuickviewButton={false} />\n```\n\n### onQuickviewClick\nThe `onQuickviewClick` prop is a function to be called on quickview button click. In addition to the built in quickview function on the controller.\n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('quickview!', e, result);\n}\n\n<Result result={controller.store.results[0]} controller={controller} hideQuickviewButton={false} onQuickviewClick={clickFunc} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```tsx\n<Result result={controller.store.results[0]} detailSlot={<ProductDetails product={controller.store.results[0]} />} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```tsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```tsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```tsx\n<Result result={controller.store.results[0]} truncateTitle={{ limit: 5, append: '...' }} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Result component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `addToCartButtonText` | Add to cart button text | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n| `addToCartButtonSuccessText` | Text shown after item is added to cart | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n\n### Example\n\n```tsx\n<Result\n	result={controller.store.results[0]}\n	lang={{\n		addToCartButtonText: {\n			value: 'Add to Bag',\n		},\n		addToCartButtonSuccessText: {\n			value: 'Added!',\n		},\n	}}\n/>\n```\n";
				var _ = e('./components/src/types.ts');
				const T = {
						title: 'Molecules/Result',
						component: r.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: t.Z } }, children: c }), (0, o.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, o.Y)(d, {})],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							hideBadge: {
								description: 'Hide badge',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideVariantSelections: {
								description: 'Hide variant Selections',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideTitle: {
								description: 'Hide title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hidePricing: {
								description: 'Hide pricing',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideImage: {
								description: 'Hide image',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideRating: {
								description: 'Hide ratings',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hideAddToCartButton: {
								description: 'Hide add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							addToCartButtonText: {
								description: 'add to cart button text',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							addToCartButtonSuccessText: {
								description: 'add to cart button text to show after adding to cart',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							addToCartButtonSuccessTimeout: {
								description: 'time in ms to show the success button text before reverting back to standard text',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideQuickviewButton: {
								description: 'Hide quickview button overlaid on the result image',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							onQuickviewClick: {
								description: 'function to run on quickview button click',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
							},
							onAddToCartClick: {
								description: 'function to run on add to cart button click',
								table: { category: 'Templates Legal', type: { summary: 'function' }, defaultValue: { summary: 'Add To Cart' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							detailSlot: {
								description: 'Slot for more product details (under price)',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							fallback: {
								defaultValue: '',
								description: 'Fallback image url',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: n.t } },
								control: { type: 'text' },
							},
							truncateTitle: {
								defaultValue: {},
								description: 'truncate title options object',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							layout: {
								description: 'Results layout',
								defaultValue: _.V.grid,
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [_.V.grid, _.V.list],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...s.F,
						},
					},
					v = a.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					E = (d, { loaded: { controller: P } }) => {
						const C = P?.store?.results[7];
						return (
							(C.display.mappings.core = { ...C.display.mappings.core, rating: 4.5 }),
							(0, o.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, o.Y)(r.Q, { ...d, result: C }) })
						);
					};
				E.loaders = [async () => (await v.search(), { controller: v })];
				const u = (d, { loaded: { controller: P } }) => {
					const C = P?.store?.results[7];
					return (
						(C.display.mappings.core = { ...C.display.mappings.core, rating: 4.5 }),
						(0, o.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, o.Y)(r.Q, { ...d, result: C }) })
					);
				};
				(u.loaders = [async () => (await v.search(), { controller: v })]), (u.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const h = (d, { loaded: { controller: P } }) => {
					const C = P?.store?.results[7];
					return (
						(C.display.mappings.core = { ...C.display.mappings.core, rating: 4.5 }),
						(0, o.Y)('div', { style: { maxWidth: d?.layout == 'list' ? '650px' : '300px' }, children: (0, o.Y)(r.Q, { ...d, result: C }) })
					);
				};
				(h.loaders = [async () => (await v.search(), { controller: v })]),
					(h.args = { truncateTitle: { limit: 5, append: '...' } }),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
        </div>;
}`,
								...E.parameters?.docs?.source,
							},
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
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
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const resultToUse = controller?.store?.results[7] as Product;
  //force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
  resultToUse.display.mappings.core = {
    ...resultToUse.display.mappings.core,
    rating: 4.5
  };
  return <div style={{
    maxWidth: args?.layout == 'list' ? '650px' : '300px'
  }}>
            <Result {...args} result={resultToUse} />
        </div>;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/components/Molecules/Result/Result.tsx'(x, i, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					s = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					c = e('./components/src/components/Atoms/Price/Price.tsx'),
					_ = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/cloneWithProps.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					d = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					P = e('./components/src/types.ts'),
					C = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					U = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					j = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					L = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(m),
					y = e('./components/src/hooks/useLang.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const S = () =>
						(0, n.AH)({
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
					F = (0, r.PA)((J) => {
						const W = (0, T.u)(),
							G = (0, v.LU)(),
							Z = {
								layout: P.V.grid,
								treePath: G,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							g = (0, h.v6)('result', W, Z, J),
							{
								result: R,
								hideBadge: K,
								hideTitle: $,
								hidePricing: X,
								hideImage: q,
								detailSlot: ee,
								fallback: te,
								disableStyles: A,
								className: oe,
								internalClassName: ne,
								layout: re,
								onClick: I,
								controller: k,
								hideVariantSelections: se,
								hideAddToCartButton: ae,
								onAddToCartClick: N,
								addToCartButtonText: le,
								addToCartButtonSuccessText: ie,
								addToCartButtonSuccessTimeout: ce,
								hideRating: de,
								hideQuickviewButton: ue,
								onQuickviewClick: V,
								trackingRef: me,
								treePath: D,
							} = g,
							{ overrideElement: pe, shouldRenderDefault: ge } = (0, B._)('result', {
								...g,
								customComponent: g.customComponent && g.customComponent !== 'Result' ? g.customComponent : void 0,
							});
						if (!ge) return pe;
						const f = R?.display?.mappings.core || R?.mappings?.core,
							[fe, Y] = (0, l.J0)(!1),
							M = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
								price: { internalClassName: 'ss__result__price', ...(0, u.s)({ disableStyles: A }), theme: g.theme, treePath: D },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: R,
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: R,
									controller: k,
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: f?.name || '',
									src: f?.imageUrl || '',
									...(0, u.s)({ disableStyles: A, fallback: te }),
									theme: g.theme,
									treePath: D,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: f?.rating || 0,
									count: Number(f?.ratingCount || 0),
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (w) => {
										V && V(w, R), k?.quickview(R);
									},
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (w) => {
										Y(!0), N && N(w, R), k?.addToCart([R]), setTimeout(() => Y(!1), ce);
									},
									...(0, u.s)({ disableStyles: A }),
									theme: g.theme,
									treePath: D,
								},
							};
						let Q = f?.name;
						g.truncateTitle && (Q = d.x(f?.name || '', g.truncateTitle.limit, g.truncateTitle.append));
						const _e = (0, O.Z)(g, S),
							he = { addToCartButtonText: { value: fe ? ie : le }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							ye = p()(he, g.lang || {}),
							z = (0, y.u)(ye, { result: R, controller: k }, { activeBreakpoint: W?.activeBreakpoint }),
							H = !!(f?.msrp && f?.price && f?.price < f?.msrp),
							be = k?.store?.config?.asyncState?.product?.price ? R.state.priceFetched : !0;
						return f
							? (0, o.Y)(_._, {
									children: (0, o.FD)('article', {
										..._e,
										className: s()('ss__result', `ss__result--${re}`, { 'ss__result--sale': H }, oe, ne),
										ref: me,
										children: [
											!q &&
												(0, o.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, o.Y)('a', {
															href: f.url,
															onClick: (w) => {
																I && I(w);
															},
															children: K
																? (0, o.Y)(a._, { ...M.image })
																: (0, o.Y)(U.Q, { ...M.overlayBadge, controller: k, children: (0, o.Y)(a._, { ...M.image }) }),
														}),
														!ue && k?.quickviewManager && (0, o.Y)(L.$, { ...M.quickviewButton, ...z.quickviewButtonText.attributes }),
													],
												}),
											(0, o.FD)('div', {
												className: 'ss__result__details',
												children: [
													!K && (0, o.Y)(C.W, { ...M.calloutBadge, controller: k }),
													!$ &&
														(0, o.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, o.Y)('a', {
																href: f.url,
																onClick: (w) => {
																	I && I(w);
																},
																dangerouslySetInnerHTML: { __html: Q || '' },
															}),
														}),
													!de && (0, o.Y)(j.G, { ...M.rating }),
													!X && be && f.price && f.price > 0
														? (0, o.Y)('div', {
																className: 'ss__result__details__pricing',
																children: H
																	? (0, o.FD)(o.FK, {
																			children: [
																				(0, o.Y)(c.g, { ...M.price, value: f.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, o.Y)(c.g, { ...M.price, value: f.price, name: 'price' }),
																			],
																	  })
																	: (0, o.Y)(c.g, { ...M.price, value: f.price }),
														  })
														: null,
													(0, E.Y)(ee, { result: R, treePath: D }),
													!se && R.variants?.selections.length
														? (0, o.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: R.variants?.selections.map((w) => (0, o.Y)(b.m, { ...M.variantSelection, type: w.type, selection: w })),
														  })
														: null,
													!ae &&
														(0, o.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, o.Y)(L.$, { ...M.button, ...z.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(i, ['Q', 0, F]);
			},
			'./components/src/types.ts'(x, i, e) {
				'use strict';
				e.d(i, { Q: () => l, V: () => o });
				var o = ((r) => ((r.grid = 'grid'), (r.list = 'list'), r))(o || {}),
					l = ((r) => (
						(r.GRID = 'grid'),
						(r.PALETTE = 'palette'),
						(r.LIST = 'list'),
						(r.SLIDER = 'slider'),
						(r.HIERARCHY = 'hierarchy'),
						(r.TOGGLE = 'toggle'),
						r
					))(l || {});
			},
			'./components/src/utilities/componentArgs.ts'(x, i, e) {
				'use strict';
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
				e.d(i, ['F', 0, o]);
			},
			'./components/src/utilities/snapify.ts'(x, i, e) {
				'use strict';
				e.d(i, { p: () => C });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					O = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const d = {},
					P = { globals: { siteId: 'atkzs2' } };
				class C {
					static recommendation(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const B = (d[y] = j({ client: P, controller: p }));
						return (
							B.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							B.init(),
							B
						);
					}
					static autocomplete(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const B = (d[y] = L({ client: P, controller: p }));
						return (
							B.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							B.init(),
							B
						);
					}
					static search(p) {
						const y = p.id;
						if (d[y]) return d[y];
						const B = (d[y] = U({ client: P, controller: p }));
						return (
							B.on('afterStore', async ({ controller: b }, S) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await S();
							}),
							B.init(),
							B
						);
					}
				}
				function U(m) {
					const p = new _.V(new v.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), T.X);
					return new l.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new a.U(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new O.J(m.client.globals),
					});
				}
				function j(m) {
					const p = new _.V(new v.E(), T.X).detach(!0);
					return new n.c(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new c.t(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new O.J(m.client.globals),
					});
				}
				function L(m) {
					const p = new _.V(new v.E(), T.X).detach();
					return new r.Z(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new s.Y(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new E.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new O.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, i, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					n = (t) => {
						const s = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								s.current && t.className?.includes('lang-') && !t.className?.includes(r) && window?.Prism?.highlightElement(s.current);
							}, [t.className, t.children, s]),
							(0, o.Y)('code', { ...t, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, n]);
			},
			'../../node_modules/colord/plugins/names.mjs'(x, i, e) {
				'use strict';
				e.d(i, { A: () => o }), e.dn(o);
				function o(l, r) {
					var n = {
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
					for (var s in n) t[n[s]] = s;
					var a = {};
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var _,
							T,
							v = t[this.toHex()];
						if (v) return v;
						if (c?.closest) {
							var E = this.toRgb(),
								u = 1 / 0,
								h = 'black';
							if (!a.length) for (var O in n) a[O] = new l(n[O]).toRgb();
							for (var d in n) {
								var P = ((_ = E), (T = a[d]), Math.pow(_.r - T.r, 2) + Math.pow(_.g - T.g, 2) + Math.pow(_.b - T.b, 2));
								P < u && ((u = P), (h = d));
							}
							return h;
						}
					}),
						r.string.push([
							function (c) {
								var _ = c.toLowerCase(),
									T = _ === 'transparent' ? '#0000' : n[_];
								return T ? new l(T).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(x, i, e) {
				'use strict';
				e.d(i, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function l(n, t, s) {
					for (s of n.keys()) if (r(s, t)) return s;
				}
				function r(n, t) {
					var s, a, c;
					if (n === t) return !0;
					if (n && t && (s = n.constructor) === t.constructor) {
						if (s === Date) return n.getTime() === t.getTime();
						if (s === RegExp) return n.toString() === t.toString();
						if (s === Array) {
							if ((a = n.length) === t.length) for (; a-- && r(n[a], t[a]); );
							return a === -1;
						}
						if (s === Set) {
							if (n.size !== t.size) return !1;
							for (a of n) if (((c = a), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !t.has(c))) return !1;
							return !0;
						}
						if (s === Map) {
							if (n.size !== t.size) return !1;
							for (a of n) if (((c = a[0]), (c && typeof c == 'object' && ((c = l(t, c)), !c)) || !r(a[1], t.get(c)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (s === DataView) {
							if ((a = n.byteLength) === t.byteLength) for (; a-- && n.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((a = n.byteLength) === t.byteLength) for (; a-- && n[a] === t[a]; );
							return a === -1;
						}
						if (!s || typeof n == 'object') {
							a = 0;
							for (s in n) if ((o.call(n, s) && ++a && !o.call(t, s)) || !(s in t) || !r(n[s], t[s])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return n !== n && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function i(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (x.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Result-Result-stories.76080e1d.iframe.bundle.js.map
