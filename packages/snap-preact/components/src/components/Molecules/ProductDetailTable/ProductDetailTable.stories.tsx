import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ProductDetailTableProps, ProductDetailTable } from './ProductDetailTable';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ProductDetailTable/readme.md';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
			price: 19.99,
			thumbnailImageUrl:
				'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647.png?v=1747685130&width=1920',
		},
	},
	attributes: {
		brand: 'Acme',
		material: 'Cotton',
		colors: ['Red', 'Blue'],
		rating: 4.5,
	},
} as any;

export default {
	title: 'Molecules/ProductDetailTable',
	component: ProductDetailTable,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	argTypes: {
		result: {
			description: 'Product to read the fields from',
			table: {
				type: { summary: 'Product' },
			},
			control: false,
		},
		displayFields: {
			description: 'Ordered fields to display as label / value rows: field, optional label, and optional render type',
			table: {
				type: { summary: 'DisplayFieldConfig[]' },
				category: 'Templates Legal',
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

export const Default = (args: ProductDetailTableProps) => <ProductDetailTable {...args} />;
Default.args = {
	result: mockResult,
	displayFields: [
		{ field: 'brand', label: 'Brand' },
		{ field: 'material', label: 'Material' },
		{ field: 'colors', label: 'Colors' },
		{ field: 'price', label: 'Price', type: 'price' },
		{ field: 'rating', label: 'Rating', type: 'rating' },
		{ field: 'thumbnailImageUrl', label: 'Image', type: 'image' },
	],
};
