import { j as r } from './iframe-Bc4KSH0T.js';
import { OverlayResult as i } from './OverlayResult-DbeSfUyd.js';
import { S as c } from './snapify-DBnzfZp8.js';
import { c as u } from './componentArgs-DfBuq-N1.js';
import { F as p } from './Image-9Pub_w4s.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-BuHm4cAU.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './CalloutBadge-DSmlH766.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-B-yVUDqy.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BH5mZvcl.js';
import './Swatches-BkfGTCkC.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-7OChHsa4.js';
import './Slideshow-ChO0chUe.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhbbLEi.js';
import './Checkbox-4N2aMGfq.js';
import './Dropdown-tCLF6hwk.js';
import './useClickOutside-CoFEN31h.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const m = `# OverlayResult

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
\`\`\`
## Lang

The \`lang\` prop allows you to override translatable text strings used by the OverlayResult component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`addToCartButtonText\` | Add to cart button text | \`result\` (Product), \`controller\` (SearchController \\| AutocompleteController \\| RecommendationController) |
| \`addToCartButtonSuccessText\` | Text shown after item is added to cart | \`result\` (Product), \`controller\` (SearchController \\| AutocompleteController \\| RecommendationController) |

### Example

\`\`\`tsx
<OverlayResult
	result={controller.store.results[0]}
	lang={{
		addToCartButtonText: {
			value: 'Add to Bag',
		},
		addToCartButtonSuccessText: {
			value: 'Added!',
		},
	}}
/>
\`\`\`
`,
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	N = {
		title: 'Molecules/OverlayResult',
		component: i,
		parameters: { docs: { description: { component: m } } },
		decorators: [(t) => r(t, {})],
		args: { onAddToCartClick: d(), onClick: d() },
		argTypes: {
			result: {
				description: 'Result store Product reference',
				type: { required: !0 },
				table: { type: { summary: 'result store Product object' } },
				control: !1,
			},
			controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: !1 },
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
				control: !1,
			},
			detailSlot: {
				description: 'Slot for more product details (under price)',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			fallback: {
				defaultValue: '',
				description: 'Fallback image url',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: p } },
				control: { type: 'text' },
			},
			truncateTitle: {
				defaultValue: {},
				description: 'truncate title options object',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			onClick: { description: 'Custom onClick event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			...u,
		},
	},
	n = c.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
	a = {
		render: (t, { loaded: { controller: o } }) => {
			const e = o?.store?.results[7];
			return (
				(e.display.mappings.core = { ...e.display.mappings.core, rating: 4.5 }),
				r('div', { style: { maxWidth: '300px' }, children: r(i, { ...t, result: e }) })
			);
		},
		loaders: [async () => (await n.search(), { controller: n })],
	},
	l = {
		render: (t, { loaded: { controller: o } }) => {
			const e = o?.store?.results[7];
			return (
				(e.display.mappings.core = { ...e.display.mappings.core, rating: 4.5 }),
				r('div', { style: { maxWidth: '300px' }, children: r(i, { ...t, result: e }) })
			);
		},
		loaders: [async () => (await n.search(), { controller: n })],
		args: { hideBadge: !0, hideTitle: !0, hidePricing: !0 },
	},
	s = {
		render: (t, { loaded: { controller: o } }) => {
			const e = o?.store?.results[7];
			return (
				(e.display.mappings.core = { ...e.display.mappings.core, rating: 4.5 }),
				r('div', { style: { maxWidth: '300px' }, children: r(i, { ...t, result: e }) })
			);
		},
		loaders: [async () => (await n.search(), { controller: n })],
		args: { truncateTitle: { limit: 5, append: '...' } },
	};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: OverlayResultProps, {
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
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...a.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: OverlayResultProps, {
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
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    hideBadge: true,
    hideTitle: true,
    hidePricing: true
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: OverlayResultProps, {
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
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    truncateTitle: {
      limit: 5,
      append: '...'
    }
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
const Q = ['Default', 'hideSections', 'truncateTitle'];
export { a as Default, Q as __namedExportsOrder, N as default, l as hideSections, s as truncateTitle };
