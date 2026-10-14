import { j as n } from './iframe-CXSVAHru.js';
import { Result as i } from './Result-BacvSyPr.js';
import { S as d } from './snapify-CnhKBMyG.js';
import { R as c } from './types-DqusP3LW.js';
import { c as p } from './componentArgs-DfBuq-N1.js';
import { F as m } from './Image-BTbXUZuZ.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-D2AY0vGx.js';
import './defaultBadgeComponentMap-Cn64buQ1.js';
import './BadgeImage-Jovka7wU.js';
import './BadgeRectangle-BL-P_I0J.js';
import './BadgePill-DSYYU2W7.js';
import './BadgeText-D-f5TEPn.js';
import './Button-YZishUF-.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-CahbTmzQ.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bdkm_1kb.js';
import './Price-hlxD57mt.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-C5HykCjo.js';
import './Swatches-BAeMNyN2.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-D0_uZPs4.js';
import './Slideshow-KsKNhuXs.js';
import './Grid-gPB0UN_F.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-DGhdnIhb.js';
import './Checkbox-CXNoFSPC.js';
import './Dropdown-WSImKrUZ.js';
import './useClickOutside-G4DBoznB.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const g =
		"# Result\n\nRenders a single product card. \n\n## Sub-components\n- OverlayBadge\n- CalloutBadge\n- Rating\n- Button\n- Icon\n- VariantSelection\n- Price\n- Image\n\n## Usage\n```tsx\nimport { Result } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```tsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```tsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideQuickviewButton\nThe `hideQuickviewButton` prop prevents the quickview `<Button />` (with an eye `<Icon />`) from being rendered overlaid on the product image. Clicking the button (or pressing Enter/Space while focused) invokes `controller.quickview(result)`. Defaults to `true`. The button only renders when a `controller` prop has also been provided and the image is not hidden.\n\n```tsx\n<Result result={controller.store.results[0]} controller={controller} hideQuickviewButton={false} />\n```\n\n### onQuickviewClick\nThe `onQuickviewClick` prop is a function to be called on quickview button click. In addition to the built in quickview function on the controller.\n\n```tsx\n\nconst clickFunc = (e, result) => {\n	console.log('quickview!', e, result);\n}\n\n<Result result={controller.store.results[0]} controller={controller} hideQuickviewButton={false} onQuickviewClick={clickFunc} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```tsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```tsx\n<Result result={controller.store.results[0]} detailSlot={<ProductDetails product={controller.store.results[0]} />} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```tsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```tsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```tsx\n<Result result={controller.store.results[0]} truncateTitle={{ limit: 5, append: '...' }} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Result component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `addToCartButtonText` | Add to cart button text | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n| `addToCartButtonSuccessText` | Text shown after item is added to cart | `result` (Product), `controller` (SearchController \\| AutocompleteController \\| RecommendationController) |\n\n### Example\n\n```tsx\n<Result\n	result={controller.store.results[0]}\n	lang={{\n		addToCartButtonText: {\n			value: 'Add to Bag',\n		},\n		addToCartButtonSuccessText: {\n			value: 'Added!',\n		},\n	}}\n/>\n```\n",
	{ fn: u } = __STORYBOOK_MODULE_TEST__,
	Z = {
		title: 'Molecules/Result',
		component: i,
		parameters: { docs: { description: { component: g } } },
		decorators: [(e) => n(e, {})],
		args: { onAddToCartClick: u(), onQuickviewClick: u(), onClick: u() },
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
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: m } },
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
				defaultValue: c.grid,
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				options: [c.grid, c.list],
				control: { type: 'select' },
			},
			onClick: { description: 'Custom onClick event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			...p,
		},
	},
	r = d.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
	l = {
		render: (e, { loaded: { controller: o } }) => {
			const t = o?.store?.results[7];
			return (
				(t.display.mappings.core = { ...t.display.mappings.core, rating: 4.5 }),
				n('div', { style: { maxWidth: e?.layout == 'list' ? '650px' : '300px' }, children: n(i, { ...e, result: t }) })
			);
		},
		loaders: [async () => (await r.search(), { controller: r })],
	},
	a = {
		render: (e, { loaded: { controller: o } }) => {
			const t = o?.store?.results[7];
			return (
				(t.display.mappings.core = { ...t.display.mappings.core, rating: 4.5 }),
				n('div', { style: { maxWidth: e?.layout == 'list' ? '650px' : '300px' }, children: n(i, { ...e, result: t }) })
			);
		},
		loaders: [async () => (await r.search(), { controller: r })],
		args: { hideBadge: !0, hideTitle: !0, hidePricing: !0 },
	},
	s = {
		render: (e, { loaded: { controller: o } }) => {
			const t = o?.store?.results[7];
			return (
				(t.display.mappings.core = { ...t.display.mappings.core, rating: 4.5 }),
				n('div', { style: { maxWidth: e?.layout == 'list' ? '650px' : '300px' }, children: n(i, { ...e, result: t }) })
			);
		},
		loaders: [async () => (await r.search(), { controller: r })],
		args: { truncateTitle: { limit: 5, append: '...' } },
	};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ResultProps, {
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
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...l.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ResultProps, {
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
			...a.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ResultProps, {
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
const $ = ['Default', 'hideSections', 'truncateTitle'];
export { l as Default, $ as __namedExportsOrder, Z as default, a as hideSections, s as truncateTitle };
