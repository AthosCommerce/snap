import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ProductDetailTableProps, ProductDetailTable } from './ProductDetailTable';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ProductDetailTable/readme.md';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
		},
	},
	attributes: {
		brand: 'Acme',
		material: 'Cotton',
		colors: ['Red', 'Blue'],
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
		fields: {
			description: 'Ordered detail keys to display',
			table: {
				type: { summary: 'string[]' },
				category: 'Templates Legal',
			},
			control: { type: 'object' },
		},
		labels: {
			description: 'Map of field key -> display label',
			table: {
				type: { summary: 'Record<string, string>' },
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
	fields: ['brand', 'material', 'colors'],
	labels: { brand: 'Brand', material: 'Material', colors: 'Colors' },
};
