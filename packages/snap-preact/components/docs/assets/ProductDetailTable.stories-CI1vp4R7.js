import { P as t } from './ProductDetailTable-DbeQxRpu.js';
import { c as a } from './componentArgs-DfBuq-N1.js';
import './iframe-Bc4KSH0T.js';
import './preload-helper-PPVm8Dsz.js';
import './ProductDetail-DckP_cuC.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Price-BreE7qNQ.js';
import './formatNumber-C6zKvI-v.js';
import './defined-CdKp_MB-.js';
import './Image-9Pub_w4s.js';
import './Rating-B-yVUDqy.js';
const l =
		"# ProductDetailTable\n\nRenders a two-column table of product details (label / value), one row per configured detail. It is the component behind the Quickview `productDetailTable` module. Values resolve from an explicit dot-path when given (e.g. `attributes.brand`) or fall back to `mappings.core` first, then `attributes`, for bare field keys.\n\n## Usage\n\n```tsx\nimport { ProductDetailTable } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from.\n\n### displayFields\nThe `displayFields` prop is the ordered list of fields to display as label / value rows. Each entry is an object with:\n\n- `field` (required) — an explicit dot-path (e.g. `attributes.brand`) or a bare field key (resolved against `mappings.core` then `attributes`).\n- `label` (optional) — the display label; falls back to the raw field key.\n- `type` (optional) — how to render the resolved value:\n  - `'text'` (default) — plain text via `ProductDetail`; arrays render comma-separated.\n  - `'price'` — the `Price` component (formatted currency).\n  - `'rating'` — the `Rating` component (star display).\n  - `'image'` — the `Image` component (arrays use the first entry).\n  - `'html'` — rich HTML via `ProductDetail`'s `html` mode.\n\n  When a typed value doesn't fit its type (e.g. a non-numeric `price`), the value falls back to text rendering.\n\nOnly fields that resolve to a non-empty value are rendered; if none do, the component renders `null` (display fields are opt-in).\n\n```tsx\n<ProductDetailTable\n	result={product}\n	displayFields={[\n		{ field: 'brand', label: 'Brand' },\n		{ field: 'material', label: 'Material' },\n		{ field: 'price', label: 'Price', type: 'price' },\n		{ field: 'rating', label: 'Rating', type: 'rating' },\n	]}\n/>\n```\n",
	r = {
		mappings: {
			core: {
				name: 'Sample Product',
				price: 19.99,
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647.png?v=1747685130&width=1920',
			},
		},
		attributes: { brand: 'Acme', material: 'Cotton', colors: ['Red', 'Blue'], rating: 4.5 },
	},
	g = {
		title: 'Molecules/ProductDetailTable',
		component: t,
		parameters: { docs: { description: { component: l } } },
		argTypes: {
			result: { description: 'Product to read the fields from', table: { type: { summary: 'Product' } }, control: !1 },
			displayFields: {
				description: 'Ordered fields to display as label / value rows: field, optional label, and optional render type',
				table: { type: { summary: 'DisplayFieldConfig[]' }, category: 'Templates Legal' },
				control: { type: 'object' },
			},
			...a,
		},
	},
	e = {
		args: {
			result: r,
			displayFields: [
				{ field: 'brand', label: 'Brand' },
				{ field: 'material', label: 'Material' },
				{ field: 'colors', label: 'Colors' },
				{ field: 'price', label: 'Price', type: 'price' },
				{ field: 'rating', label: 'Rating', type: 'rating' },
				{ field: 'thumbnailImageUrl', label: 'Image', type: 'image' },
			],
		},
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    result: mockResult,
    displayFields: [{
      field: 'brand',
      label: 'Brand'
    }, {
      field: 'material',
      label: 'Material'
    }, {
      field: 'colors',
      label: 'Colors'
    }, {
      field: 'price',
      label: 'Price',
      type: 'price'
    }, {
      field: 'rating',
      label: 'Rating',
      type: 'rating'
    }, {
      field: 'thumbnailImageUrl',
      label: 'Image',
      type: 'image'
    }]
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const y = ['Default'];
export { e as Default, y as __namedExportsOrder, g as default };
