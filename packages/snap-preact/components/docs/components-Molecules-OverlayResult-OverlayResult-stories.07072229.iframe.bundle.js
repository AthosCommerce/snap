(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1663],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(E, i, e) {
				'use strict';
				e.d(i, { P: () => r });
				const r = (l) => l.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(E, i, e) {
				'use strict';
				e.d(i, { G: () => l });
				var r = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(n, o) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, r.Z)(n, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(E, i, e) {
				'use strict';
				e.d(i, { Z: () => r });
				function r(n, o) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof n != 'number' || Number.isNaN(n)) return;
					const s = l(n, t.decimalPlaces).split('.');
					(s[0] = s[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (s[1] = (s[1] || '').padEnd(t.decimalPlaces, '0'));
					let a = s.join(t.decimalSeparator);
					return t.symbolAfter ? (a = a + t.symbol) : (a = t.symbol + a), a;
				}
				function l(n, o) {
					const t = n.toString(),
						s = t.indexOf('.'),
						a = s == -1 ? t.length : 1 + s + (o || -1);
					return t.substr(0, a);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(E, i, e) {
				'use strict';
				e.d(i, { p: () => r });
				function r(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(E, i, e) {
				'use strict';
				e.d(i, { x: () => r });
				function r(l, n, o) {
					if (typeof l != 'string' || l.length <= n) return l;
					const t = l.lastIndexOf(' ', n),
						s = t != -1 ? t : n - 1;
					return l.substr(0, s) + (o || '');
				}
			},
			'./components/src/components/Molecules/OverlayResult/OverlayResult.stories.tsx'(E, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => x, __namedExportsOrder: () => B, default: () => T, hideSections: () => C, truncateTitle: () => c });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/OverlayResult/OverlayResult.tsx'),
					o = e('./components/src/components/Atoms/Image/Image.tsx'),
					t = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts'),
					a = e('./components/src/utilities/snapify.ts');
				const d = `# OverlayResult

Renders a single product card with details overlaid on top of the product image.

## Sub-components
- Badge
- CalloutBadge
- Rating
- Button
- VariantSelection
- Price
- Image

## Usage
\`\`\`tsx
import { OverlayResult } from '@athoscommerce/snap-preact/components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} />
\`\`\`

### disableSlide
The \`disableSlide\` prop disables the hover slide animation and always shows all content in the overlay details area.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} disableSlide={true} />
\`\`\`

### overlayBackground
The \`overlayBackground\` prop sets the background style for the overlay details panel.

\`\`\`tsx
<OverlayResult
	result={controller.store.results[0]}
	overlayBackground={'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)'}
/>
\`\`\`

### hideBadge
The \`hideBadge\` prop will prevent the \`<OverlayBadge />\` and \`<CalloutBadge />\` components from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideBadge={true} />
\`\`\`

### hideTitle
The \`hideTitle\` prop will prevent to product title from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideTitle={true} />
\`\`\`

### hideRating
The \`hideRating\` prop will prevent to product rating from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideRating={true} />
\`\`\`

### hideAddToCartButton
The \`hideAddToCartButton\` prop will prevent to product add to cart button from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideAddToCartButton={true} />
\`\`\`

### addToCartButtonText
The \`addToCartButtonText\` prop will will change the text rendered in the add to cart button.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />
\`\`\`

### hidePricing
The \`hidePricing\` prop will prevent the pricing from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hidePricing={true} />
\`\`\`

### onAddToCartClick
The \`onAddToCartClick\` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. 

\`\`\`tsx

const clickFunc = (e, result) => {
	console.log('added!', e, result);
}

<OverlayResult result={controller.store.results[0]} onAddToCartClick={clickFunc} />
\`\`\`

### hideVariantSelections
The \`hideVariantSelections\` prop will prevent the VariantSelections components from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideVariantSelections={true} />
\`\`\`

### addToCartButtonSuccessText
The \`addToCartButtonSuccessText\` prop will change the text rendered in the add to cart button temporarily after clicking.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />
\`\`\`

### addToCartButtonSuccessTimeout
The \`addToCartButtonSuccessTimeout\` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />
\`\`\`

### hideImage
The \`hideImage\` prop will prevent the image from rendering.

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} hideImage={true} />
\`\`\`

### detailSlot
The \`detailSlot\` prop is a JSX element to used display additional content below the title and pricing sections.

\`\`\`js
const ProductDetails = (props) => {
	const listEntries = props?.product?.attributes?.descriptionList.split('|');
	return (
		listEntries && (
			<ul>
				{listEntries.map(entry => (
					<li>{entry}</li>
				))}
			</ul>
		)
	)
}
\`\`\`

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} detailSlot={<ProductDetails product={controller.store.results[0]} />} />
\`\`\`

### fallback
The \`fallback\` prop will be passed to the \`<Image />\` sub-component. If the primary image does not display, this fallback image will be displayed instead. 

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />
\`\`\`

### truncateTitle
The \`truncateTitle\` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as "..."

\`\`\`tsx
<OverlayResult result={controller.store.results[0]} truncateTitle={{ limit: 5, append: '...' }} />
\`\`\``,
					T = {
						title: 'Molecules/OverlayResult',
						component: n.O,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(l.oz, { options: { overrides: { code: t.Z } }, children: d }), (0, r.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, r.Y)(h, {})],
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
							disableSlide: {
								description: 'Disables hover slide animation and always shows full details',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							overlayBackground: {
								description: 'Background style for the details overlay panel',
								table: {
									category: 'Templates Legal',
									type: { summary: 'string' },
									defaultValue: { summary: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' },
								},
								control: { type: 'text' },
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
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: o.t } },
								control: { type: 'text' },
							},
							truncateTitle: {
								defaultValue: {},
								description: 'truncate title options object',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
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
					m = a.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					x = (h, { loaded: { controller: p } }) => {
						const _ = p?.store?.results[7];
						return (
							(_.display.mappings.core = { ..._.display.mappings.core, rating: 4.5 }),
							(0, r.Y)('div', { style: { maxWidth: '300px' }, children: (0, r.Y)(n.O, { ...h, result: _ }) })
						);
					};
				x.loaders = [async () => (await m.search(), { controller: m })];
				const C = (h, { loaded: { controller: p } }) => {
					const _ = p?.store?.results[7];
					return (
						(_.display.mappings.core = { ..._.display.mappings.core, rating: 4.5 }),
						(0, r.Y)('div', { style: { maxWidth: '300px' }, children: (0, r.Y)(n.O, { ...h, result: _ }) })
					);
				};
				(C.loaders = [async () => (await m.search(), { controller: m })]), (C.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const c = (h, { loaded: { controller: p } }) => {
					const _ = p?.store?.results[7];
					return (
						(_.display.mappings.core = { ..._.display.mappings.core, rating: 4.5 }),
						(0, r.Y)('div', { style: { maxWidth: '300px' }, children: (0, r.Y)(n.O, { ...h, result: _ }) })
					);
				};
				(c.loaders = [async () => (await m.search(), { controller: m })]),
					(c.args = { truncateTitle: { limit: 5, append: '...' } }),
					(x.parameters = {
						...x.parameters,
						docs: {
							...x.parameters?.docs,
							source: {
								originalSource: `(args: OverlayResultProps, {
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
    maxWidth: '300px'
  }}>
            <OverlayResult {...args} result={resultToUse} />
        </div>;
}`,
								...x.parameters?.docs?.source,
							},
						},
					}),
					(C.parameters = {
						...C.parameters,
						docs: {
							...C.parameters?.docs,
							source: {
								originalSource: `(args: OverlayResultProps, {
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
    maxWidth: '300px'
  }}>
            <OverlayResult {...args} result={resultToUse} />
        </div>;
}`,
								...C.parameters?.docs?.source,
							},
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: OverlayResultProps, {
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
    maxWidth: '300px'
  }}>
            <OverlayResult {...args} result={resultToUse} />
        </div>;
}`,
								...c.parameters?.docs?.source,
							},
						},
					});
				const B = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/components/Molecules/OverlayResult/OverlayResult.tsx'(E, i, e) {
				'use strict';
				e.d(i, { O: () => M });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					s = e.n(t),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					d = e('./components/src/components/Atoms/Price/Price.tsx'),
					T = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					B = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					_ = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					j = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					I = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					k = e('./components/src/components/Atoms/Button/Button.tsx'),
					W = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(W),
					f = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const b = (K) => {
						const { overlayBackground: N, disableSlide: S } = K;
						return (0, o.AH)({
							position: 'relative',
							overflow: 'hidden',
							'& .ss__overlay-result__image-wrapper': {
								position: 'relative',
								width: '100%',
								'& .ss__overlay-result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
								'& .ss__overlay-result__image': { display: 'block', width: '100%', objectFit: 'cover' },
							},
							'& .ss__overlay-result__details': {
								position: 'absolute',
								bottom: 0,
								left: 0,
								right: 0,
								width: '100%',
								boxSizing: 'border-box',
								padding: '18px 10px 10px',
								background: N,
								color: '#fff',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-end',
								alignItems: 'flex-start',
								textAlign: 'left',
								transform: 'translateY(0)',
								transition: S ? 'none' : 'transform 260ms ease',
								'& .ss__overlay-result__details__title': { marginBottom: '4px', '& a': { color: 'inherit', textDecoration: 'none' } },
								'& .ss__overlay-result__details__pricing': {
									marginBottom: '4px',
									'& .ss__overlay-result__price': { color: '#fff', fontSize: '1.3em' },
									'& .ss__price--strike': { color: 'rgba(255,255,255,0.7)', fontSize: '0.9em' },
								},
								'& .ss__overlay-result__rating': { marginBottom: '4px' },
								'& .ss__overlay-result__button--addToCart': { marginTop: '6px' },
								'& .ss__overlay-result__details__extra': {
									display: 'grid',
									gridTemplateRows: S ? '1fr' : '0fr',
									opacity: S ? 1 : 0,
									transform: S ? 'translateY(0)' : 'translateY(1px)',
									transition: S ? 'none' : 'grid-template-rows 260ms ease, opacity 220ms ease, transform 260ms ease',
									width: '100%',
									'& .ss__overlay-result__details__extra-inner': { overflow: 'hidden', minHeight: 0 },
								},
							},
							'&:hover .ss__overlay-result__details': { transform: 'translateY(0)' },
							'&:hover .ss__overlay-result__details .ss__overlay-result__details__extra': {
								gridTemplateRows: '1fr',
								opacity: 1,
								transform: 'translateY(0)',
							},
							'&:focus-within .ss__overlay-result__details': { transform: 'translateY(0)' },
							'&:focus-within .ss__overlay-result__details .ss__overlay-result__details__extra': {
								gridTemplateRows: '1fr',
								opacity: 1,
								transform: 'translateY(0)',
							},
							'@media (hover: none)': {
								'& .ss__overlay-result__details .ss__overlay-result__details__extra': {
									gridTemplateRows: '1fr',
									opacity: 1,
									transform: 'translateY(0)',
								},
							},
						});
					},
					M = (0, n.PA)((K) => {
						const N = (0, m.u)(),
							Z = {
								treePath: (0, x.LU)(),
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								overlayBackground: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
							},
							y = (0, B.v6)('overlayResult', N, Z, K),
							{
								result: P,
								hideBadge: Y,
								hideTitle: X,
								hidePricing: $,
								hideImage: G,
								detailSlot: Q,
								fallback: q,
								disableStyles: A,
								className: ee,
								internalClassName: te,
								onClick: U,
								controller: L,
								hideVariantSelections: re,
								hideAddToCartButton: oe,
								onAddToCartClick: V,
								addToCartButtonText: z,
								addToCartButtonSuccessText: se,
								addToCartButtonSuccessTimeout: ae,
								hideRating: ne,
								trackingRef: le,
								treePath: D,
							} = y,
							{ overrideElement: ie, shouldRenderDefault: de } = (0, v._)('overlayResult', {
								...y,
								customComponent:
									!D?.split(' ')?.includes('result') && y.customComponent && y.customComponent !== 'OverlayResult' ? y.customComponent : void 0,
							});
						if (!de) return ie;
						const g = P?.display?.mappings.core || P?.mappings?.core,
							[ce, F] = (0, l.J0)(!1),
							R = {
								variantSelection: {
									internalClassName: 'ss__overlay-result__variant-selection',
									...(0, c.s)({ disableStyles: A }),
									theme: y.theme,
									treePath: D,
								},
								price: { internalClassName: 'ss__overlay-result__price', ...(0, c.s)({ disableStyles: A }), theme: y.theme, treePath: D },
								calloutBadge: {
									internalClassName: 'ss__overlay-result__callout-badge',
									result: P,
									...(0, c.s)({ disableStyles: A }),
									theme: y.theme,
									treePath: D,
								},
								overlayBadge: {
									internalClassName: 'ss__overlay-result__overlay-badge',
									result: P,
									controller: L,
									...(0, c.s)({ disableStyles: A }),
									theme: y.theme,
									treePath: D,
								},
								image: {
									internalClassName: 'ss__overlay-result__image',
									alt: g?.name || '',
									src: g?.imageUrl || '',
									...(0, c.s)({ disableStyles: A, fallback: q }),
									theme: y.theme,
									treePath: D,
								},
								rating: {
									internalClassName: 'ss__overlay-result__rating',
									value: g?.rating || 0,
									count: Number(g?.ratingCount || 0),
									...(0, c.s)({ disableStyles: A }),
									theme: y.theme,
									treePath: D,
								},
								button: {
									internalClassName: 'ss__overlay-result__button--addToCart',
									onClick: (w) => {
										F(!0), V && V(w, P), L?.addToCart([P]), setTimeout(() => F(!1), ae);
									},
									...(0, c.s)({ disableStyles: A }),
									theme: y.theme,
									treePath: D,
								},
							};
						let H = g?.name;
						y.truncateTitle && (H = p.x(g?.name || '', y.truncateTitle.limit, y.truncateTitle.append));
						const ue = (0, h.Z)(y, b),
							me = { addToCartButtonText: { value: ce ? se : z } },
							pe = u()(me, y.lang || {}),
							_e = (0, f.u)(pe, { result: P, controller: L }),
							J = !!(g?.msrp && g?.price && g?.price < g?.msrp),
							fe = L?.store?.config?.asyncState?.product?.price ? P.state.priceFetched : !0;
						return g
							? (0, r.Y)(T._, {
									children: (0, r.FD)('article', {
										...ue,
										className: s()('ss__overlay-result', { 'ss__overlay-result--sale': J }, ee, te),
										ref: le,
										children: [
											!G &&
												(0, r.Y)('div', {
													className: 'ss__overlay-result__image-wrapper',
													children: (0, r.Y)('a', {
														href: g.url,
														onClick: (w) => {
															U && U(w);
														},
														children: Y
															? (0, r.Y)(a._, { ...R.image })
															: (0, r.Y)(j.Q, { ...R.overlayBadge, controller: L, children: (0, r.Y)(a._, { ...R.image }) }),
													}),
												}),
											(0, r.FD)('div', {
												className: 'ss__overlay-result__details',
												children: [
													!X &&
														(0, r.Y)('div', {
															className: 'ss__overlay-result__details__title',
															children: (0, r.Y)('a', {
																href: g.url,
																onClick: (w) => {
																	U && U(w);
																},
																dangerouslySetInnerHTML: { __html: H || '' },
															}),
														}),
													(0, r.Y)('div', {
														className: 'ss__overlay-result__details__extra',
														children: (0, r.FD)('div', {
															className: 'ss__overlay-result__details__extra-inner',
															children: [
																!Y && (0, r.Y)(_.W, { ...R.calloutBadge, controller: L }),
																!ne && (0, r.Y)(I.G, { ...R.rating }),
																!$ && fe && g.price && g.price > 0
																	? (0, r.Y)('div', {
																			className: 'ss__overlay-result__details__pricing',
																			children: J
																				? (0, r.FD)(r.FK, {
																						children: [
																							(0, r.Y)(d.g, { ...R.price, value: g.msrp, lineThrough: !0, name: 'msrp' }),
																							'\xA0',
																							(0, r.Y)(d.g, { ...R.price, value: g.price, name: 'price' }),
																						],
																				  })
																				: (0, r.Y)(d.g, { ...R.price, value: g.price }),
																	  })
																	: null,
																(0, C.Y)(Q, { result: P, treePath: D }),
																!re && P.variants?.selections.length
																	? (0, r.Y)('div', {
																			className: 'ss__overlay-result__details__variant-selection',
																			children: P.variants?.selections.map((w) => (0, r.Y)(O.m, { ...R.variantSelection, selection: w })),
																	  })
																	: null,
																!oe &&
																	(0, r.Y)('div', {
																		className: 'ss__overlay-result__add-to-cart-wrapper',
																		children: (0, r.Y)(k.$, { ...R.button, content: z, ..._e.addToCartButtonText.all }),
																	}),
															],
														}),
													}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(E, i, e) {
				'use strict';
				e.d(i, { F: () => r });
				const r = {
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
			'./components/src/utilities/snapify.ts'(E, i, e) {
				'use strict';
				e.d(i, { p: () => j });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					C = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					B = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const p = {},
					_ = { globals: { siteId: 'atkzs2' } };
				class j {
					static recommendation(f) {
						const v = f.id;
						if (p[v]) return p[v];
						const O = (p[v] = k({ client: _, controller: f }));
						return (
							O.on('afterStore', async ({ controller: b }, M) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await M();
							}),
							O.init(),
							O
						);
					}
					static autocomplete(f) {
						const v = f.id;
						if (p[v]) return p[v];
						const O = (p[v] = W({ client: _, controller: f }));
						return (
							O.on('afterStore', async ({ controller: b }, M) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await M();
							}),
							O.init(),
							O
						);
					}
					static search(f) {
						const v = f.id;
						if (p[v]) return p[v];
						const O = (p[v] = I({ client: _, controller: f }));
						return (
							O.on('afterStore', async ({ controller: b }, M) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await M();
							}),
							O.init(),
							O
						);
					}
				}
				function I(u) {
					const f = new T.V(new x.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), m.X);
					return new l.Tp(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new a.U(u.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new C.E(),
						profiler: new c.U(),
						logger: new B.V(),
						tracker: new h.J(u.client.globals),
					});
				}
				function k(u) {
					const f = new T.V(new x.E(), m.X).detach(!0);
					return new o.c(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new d.t(u.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new C.E(),
						profiler: new c.U(),
						logger: new B.V(),
						tracker: new h.J(u.client.globals),
					});
				}
				function W(u) {
					const f = new T.V(new x.E(), m.X).detach();
					return new n.Z(u.controller, {
						client: new t.K(u.client.globals, u.client.config),
						store: new s.Y(u.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new C.E(),
						profiler: new c.U(),
						logger: new B.V(),
						tracker: new h.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, i, e) {
				'use strict';
				e.d(i, { Z: () => o });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					o = (t) => {
						const s = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								s.current && t.className?.includes('lang-') && !t.className?.includes(n) && window?.Prism?.highlightElement(s.current);
							}, [t.className, t.children, s]),
							(0, r.Y)('code', { ...t, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(E, i, e) {
				'use strict';
				e.d(i, { A: () => r }), Object.defineProperty(r, 'name', { value: 'default', configurable: !0 });
				function r(l, n) {
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
					for (var s in o) t[o[s]] = s;
					var a = {};
					(l.prototype.toName = function (d) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var T,
							m,
							x = t[this.toHex()];
						if (x) return x;
						if (d?.closest) {
							var C = this.toRgb(),
								c = 1 / 0,
								B = 'black';
							if (!a.length) for (var h in o) a[h] = new l(o[h]).toRgb();
							for (var p in o) {
								var _ = ((T = C), (m = a[p]), Math.pow(T.r - m.r, 2) + Math.pow(T.g - m.g, 2) + Math.pow(T.b - m.b, 2));
								_ < c && ((c = _), (B = p));
							}
							return B;
						}
					}),
						n.string.push([
							function (d) {
								var T = d.toLowerCase(),
									m = T === 'transparent' ? '#0000' : o[T];
								return m ? new l(m).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(E, i, e) {
				'use strict';
				e.d(i, { j: () => n });
				var r = Object.prototype.hasOwnProperty;
				function l(o, t, s) {
					for (s of o.keys()) if (n(s, t)) return s;
				}
				function n(o, t) {
					var s, a, d;
					if (o === t) return !0;
					if (o && t && (s = o.constructor) === t.constructor) {
						if (s === Date) return o.getTime() === t.getTime();
						if (s === RegExp) return o.toString() === t.toString();
						if (s === Array) {
							if ((a = o.length) === t.length) for (; a-- && n(o[a], t[a]); );
							return a === -1;
						}
						if (s === Set) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((d = a), (d && typeof d == 'object' && ((d = l(t, d)), !d)) || !t.has(d))) return !1;
							return !0;
						}
						if (s === Map) {
							if (o.size !== t.size) return !1;
							for (a of o) if (((d = a[0]), (d && typeof d == 'object' && ((d = l(t, d)), !d)) || !n(a[1], t.get(d)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (s === DataView) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o.getInt8(a) === t.getInt8(a); );
							return a === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((a = o.byteLength) === t.byteLength) for (; a-- && o[a] === t[a]; );
							return a === -1;
						}
						if (!s || typeof o == 'object') {
							a = 0;
							for (s in o) if ((r.call(o, s) && ++a && !r.call(t, s)) || !(s in t) || !n(o[s], t[s])) return !1;
							return Object.keys(t).length === a;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function i(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (E.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-OverlayResult-OverlayResult-stories.07072229.iframe.bundle.js.map
