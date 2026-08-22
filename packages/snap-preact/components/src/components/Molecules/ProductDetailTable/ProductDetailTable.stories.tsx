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
		details: {
			description: 'Ordered detail rows to display: field, optional label, and optional render type',
			table: {
				type: { summary: 'ProductDetailTableDetail[]' },
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
	details: [
		{ field: 'brand', label: 'Brand' },
		{ field: 'material', label: 'Material' },
		{ field: 'colors', label: 'Colors' },
		{ field: 'price', label: 'Price', type: 'price' },
		{ field: 'rating', label: 'Rating', type: 'rating' },
	],
};
