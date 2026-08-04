import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ProductDetailProps, ProductDetail } from './ProductDetail';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../ProductDetail/readme.md';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
			description: '<p>A rich <strong>HTML</strong> description.</p>',
		},
	},
	attributes: {
		brand: 'Acme',
		colors: ['Red', 'Blue'],
	},
} as any;

export default {
	title: 'Atoms/ProductDetail',
	component: ProductDetail,
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
			description: 'Product to read the field from',
			type: { required: false },
			table: {
				type: { summary: 'Product' },
			},
			control: false,
		},
		field: {
			description: 'Explicit dot-path to resolve (e.g. `mappings.core.name` or `attributes.brand`)',
			type: { required: true },
			table: {
				type: { summary: 'string' },
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		html: {
			description: 'Render the resolved value as raw HTML',
			table: {
				type: { summary: 'boolean' },
				category: 'Templates Legal',
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		tag: {
			description: 'Extra identifying classname modifier',
			table: {
				type: { summary: 'string' },
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

export const Default = (args: ProductDetailProps) => <ProductDetail {...args} />;
Default.args = {
	result: mockResult,
	field: 'mappings.core.name',
};

export const Description = (args: ProductDetailProps) => <ProductDetail {...args} />;
Description.args = {
	result: mockResult,
	field: 'mappings.core.description',
	html: true,
};
