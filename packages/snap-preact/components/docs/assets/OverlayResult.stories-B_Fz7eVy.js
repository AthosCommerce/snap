import { j as r } from './iframe-0uTqSs9S.js';
import { OverlayResult as i } from './OverlayResult--q8ZqDv4.js';
import { S as c } from './snapify-B992lD8l.js';
import { c as u } from './componentArgs-DfBuq-N1.js';
import { F as p } from './Image-C3O8T0nj.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-BvGmgneq.js';
import './defaultBadgeComponentMap-D0KDS9lo.js';
import './BadgeImage-Da4oBip1.js';
import './BadgeRectangle-CXAZN0pG.js';
import './BadgePill-H3I1Mrbf.js';
import './BadgeText-Dy4HZF31.js';
import './CalloutBadge-DXapTNdX.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-ERPkfVOZ.js';
import './Price-Dcne0zwV.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxtlQeSD.js';
import './Swatches-5Gnm_1_O.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-CrQOlxmk.js';
import './Slideshow-zOCrnuUn.js';
import './Button-CmsiLEAv.js';
import './useA11y-BuGQuOJb.js';
import './Grid-BRtXjrhJ.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-PZ5HrgK2.js';
import './Checkbox-7fOTHZL3.js';
import './Dropdown-CL17qjds.js';
import './useClickOutside-DOEh9Z-W.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-DAAYZShk.js';
import './AutocompleteController-CykzE5Xg.js';
const m =
		"# OverlayResult\n\nRenders a single product card with details overlaid on top of the product image.\n\n## Sub-components\n- OverlayBadge\n- CalloutBadge\n- Rating\n- Button\n- VariantSelection\n- Price\n- Image\n\n## Usage\n```tsx\nimport { OverlayResult } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} />\n```\n\n### controller\nThe `controller` prop specifies a reference to the Search, Autocomplete or Recommendation controller. It is used by the add to cart button (`controller.addToCart`) and the badges.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} controller={controller} />\n```\n\n### disableSlide\nThe `disableSlide` prop disables the hover slide animation and always shows all content in the overlay details area.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} disableSlide={true} />\n```\n\n### overlayBackground\nThe `overlayBackground` prop sets the background style for the overlay details panel.\n\n```tsx\n<OverlayResult\n	result={controller.store.results[0]}\n	overlayBackground={'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)'}\n/>\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<OverlayResult result={controller.store.results[0]} onAddToCartClick={clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst ProductDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```tsx\n<OverlayResult result={controller.store.results[0]} detailSlot={<ProductDetails product={controller.store.results[0]} />} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```tsx\n<OverlayResult result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```tsx\n<OverlayResult result={controller.store.results[0]} truncateTitle={{ limit: 5, append: '...' }} />\n```\n\n### onClick\nThe `onClick` prop is a function to be called when the result image or title link is clicked.\n\n```tsx\n<OverlayResult result={controller.store.results[0]} onClick={(e) => console.log(e)} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the OverlayResult component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `addToCartButtonText` | Add to cart button text | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n| `addToCartButtonSuccessText` | Text shown after item is added to cart | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n\n### Example\n\n```tsx\n<OverlayResult\n	result={controller.store.results[0]}\n	lang={{\n		addToCartButtonText: {\n			value: 'Add to Bag',\n		},\n		addToCartButtonSuccessText: {\n			value: 'Added!',\n		},\n	}}\n/>\n```\n",
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
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add To Cart' } },
				control: { type: 'text' },
			},
			addToCartButtonSuccessText: {
				description: 'add to cart button text to show after adding to cart',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Added!' } },
				control: { type: 'text' },
			},
			addToCartButtonSuccessTimeout: {
				description: 'time in ms to show the success button text before reverting back to standard text',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 2e3 } },
				control: { type: 'number' },
			},
			onAddToCartClick: {
				description: 'function to run on add to cart button click',
				table: { category: 'Templates Legal', type: { summary: '(e: React.MouseEvent, result: Product) => void' } },
				control: !1,
			},
			detailSlot: {
				description: 'Slot for more product details (under price)',
				table: { category: 'Templates Legal', type: { summary: 'JSX.Element | JSX.Element[]' } },
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
				table: { category: 'Templates Legal', type: { summary: '{ limit: number, append?: string }' } },
				control: { type: 'object' },
			},
			onClick: {
				description: 'Custom onClick event handler',
				table: { category: 'Templates Legal', type: { summary: '(e: React.MouseEvent) => void' } },
				control: !1,
			},
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
