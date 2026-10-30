import { P as a } from './ProductDetail-CHIUhkMw.js';
import { c as o } from './componentArgs-DfBuq-N1.js';
import './iframe-U9T2Y9ZS.js';
import './preload-helper-PPVm8Dsz.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
const s =
		"# ProductDetail\n\nRenders a single product field — resolved from an explicit dot-path on the product (e.g. `mappings.core.name` or `attributes.brand`) — as text or raw HTML. It is the building block behind the Quickview `title` (`productDetail.mappings.core.name`) and `description` (`productDetail.mappings.core.description`) modules and is reused for the value cells of `ProductDetailTable`.\n\n## Usage\n\n```tsx\nimport { ProductDetail } from '@athoscommerce/snap-preact/components';\n```\n\n### result\nThe `result` prop is the product (`Product` from `@athoscommerce/snap-store-mobx`) to read from. The variant-aware `display` view is preferred, so values stay in sync with the active variant.\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.name'} />\n```\n\n### field\nThe required `field` prop is an explicit dot-path stating where to read the value from — for example `mappings.core.name` or `attributes.brand`. The path is resolved against the product's `display` view first, then the product itself. Array values render comma-separated; objects fall back to `JSON.stringify`. The component renders `null` when the resolved value is empty.\n\n```tsx\n<ProductDetail result={product} field={'attributes.brand'} />\n```\n\nWhen the field is a core-mapping price (`mappings.core.price`, `mappings.core.msrp`, or the bare `price`/`msrp` keys) and the resolved value is numeric, it is formatted with the `Price` component rather than rendered as plain text. Non-core price fields such as `attributes.price` are left as text.\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.price'} />\n```\n\n### html\nWhen `html` is true the resolved value is rendered via `dangerouslySetInnerHTML` (used for rich descriptions).\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.description'} html={true} />\n```\n\n### name\nThe optional `name` prop drives the `productDetail.<name>` theme selector (the `${module}.${name}` pattern) and the `ss__product-detail--<name>` classname modifier. When omitted the field path's final segment is used, normalized to its component-name form (underscores become dashes, lowercased — e.g. `color_family` → `color-family`).\n\n```tsx\n<ProductDetail result={product} field={'mappings.core.name'} name={'name'} />\n```\n",
	r = {
		mappings: { core: { name: 'Sample Product', description: '<p>A rich <strong>HTML</strong> description.</p>' } },
		attributes: { brand: 'Acme', colors: ['Red', 'Blue'] },
	},
	u = {
		title: 'Atoms/ProductDetail',
		component: a,
		parameters: { docs: { description: { component: s } } },
		argTypes: {
			result: { description: 'Product to read the field from', type: { required: !1 }, table: { type: { summary: 'Product' } }, control: !1 },
			field: {
				description: 'Explicit dot-path to resolve (e.g. `mappings.core.name` or `attributes.brand`)',
				type: { required: !0 },
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			html: {
				description: 'Render the resolved value as raw HTML',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: 'false' } },
				control: { type: 'boolean' },
			},
			tag: {
				description: 'Extra identifying classname modifier',
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			...o,
		},
	},
	e = { args: { result: r, field: 'mappings.core.name' } },
	t = { args: { result: r, field: 'mappings.core.description', html: !0 } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    result: mockResult,
    field: 'mappings.core.name'
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    result: mockResult,
    field: 'mappings.core.description',
    html: true
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const h = ['Default', 'Description'];
export { e as Default, t as Description, h as __namedExportsOrder, u as default };
