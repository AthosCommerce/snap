import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ProductQuickview, ProductQuickviewProps } from './ProductQuickview';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from './readme.md';

// Build a fresh mock controller per story so each Storybook story renders independently.
function buildMockController(overrides: any = {}): any {
	const base: any = {
		store: {
			meta: undefined,
			quickview: {
				isOpen: true,
				loading: false,
				product: undefined,
				config: undefined,
				triggeringResultId: undefined,
				error: undefined,
			},
		},
		closeQuickView: () => {
			base.store.quickview.isOpen = false;
		},
	};
	// Shallow-merge overrides onto base; merge store.quickview deep so partial overrides preserve defaults.
	const mergedQuickview = { ...base.store.quickview, ...((overrides.store && overrides.store.quickview) || {}) };
	const mergedStore = { ...base.store, ...(overrides.store || {}), quickview: mergedQuickview };
	return { ...base, ...overrides, store: mergedStore };
}

const sampleProduct = {
	id: 'sample',
	mappings: {
		core: {
			name: 'Sample Widget',
			imageUrl: 'https://placehold.co/200',
			thumbnailImageUrl: 'https://placehold.co/200',
		},
	},
	attributes: {
		color: 'red',
		size: 'M',
		sku: 'SW-001',
	},
};

const defaultController = buildMockController({
	store: { quickview: { isOpen: true, product: sampleProduct } },
});

const loadingController = buildMockController({
	store: {
		quickview: {
			isOpen: true,
			loading: true,
			product: undefined,
			triggeringResultId: 'sample',
		},
	},
});

const errorController = buildMockController({
	store: {
		quickview: {
			isOpen: true,
			loading: false,
			product: undefined,
			triggeringResultId: 'sample',
			error: { message: 'Failed to display quickview' },
		},
	},
});

// Plausibly-shaped variant selections. VariantSelection molecule renders whatever is
// structurally a VariantSelection instance; we cast through `any` to bypass the type system.
const variantsProduct = {
	id: 'sample-variants',
	mappings: {
		core: {
			name: 'Tee with Variants',
			imageUrl: 'https://placehold.co/200',
			thumbnailImageUrl: 'https://placehold.co/200',
		},
	},
	attributes: { sku: 'TEE-001' },
	variants: {
		selections: [
			{
				field: 'color',
				label: 'Color',
				values: [
					{ value: 'Red', label: 'Red', available: true, selected: true, custom: {} },
					{ value: 'Blue', label: 'Blue', available: true, selected: false, custom: {} },
				],
				select: () => {
					// noop
				},
			},
			{
				field: 'size',
				label: 'Size',
				values: [
					{ value: 'S', label: 'S', available: true, selected: true, custom: {} },
					{ value: 'M', label: 'M', available: true, selected: false, custom: {} },
					{ value: 'L', label: 'L', available: false, selected: false, custom: {} },
				],
				select: () => {
					// noop
				},
			},
		],
	},
} as any;

const variantsController = buildMockController({
	store: { quickview: { isOpen: true, product: variantsProduct } },
});

const displayFieldsController = buildMockController({
	store: {
		meta: {
			data: {
				facets: {
					size: { label: 'Size' },
					color: { label: 'Color' },
				},
			},
		},
		quickview: {
			isOpen: true,
			product: {
				id: 'display-fields',
				mappings: { core: { name: 'Display Fields Demo', thumbnailImageUrl: 'https://placehold.co/200' } },
				attributes: {
					size: 'L',
					color: 'green',
					sku: 'DFD-001',
					hiddenField: 'should not render',
				},
			},
			config: { displayFields: ['size', 'color'] },
		},
	},
});

const arrayAttrsController = buildMockController({
	store: {
		quickview: {
			isOpen: true,
			product: {
				id: 'array-attrs',
				mappings: { core: { name: 'Array Attributes Demo', thumbnailImageUrl: 'https://placehold.co/200' } },
				attributes: {
					tags: ['new', 'sale', 'featured'],
					sizes: ['S', 'M', 'L'],
				},
			},
		},
	},
});

export default {
	title: 'Molecules/ProductQuickview',
	component: ProductQuickview,
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
		controller: {
			description: 'Controller exposing `store.quickview` ({ isOpen, product, loading, config, triggeringResultId, error }) and `closeQuickView()`',
			table: {
				type: {
					summary: 'SearchController | AutocompleteController | RecommendationController',
				},
			},
			control: { type: 'none' },
		},
		customComponent: {
			description: 'Custom component override name',
			table: {
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
	args: {},
};

export const Default = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={defaultController} />;
Default.args = {};

export const Loading = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={loadingController} />;
Loading.args = {};

export const ErrorState = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={errorController} />;
ErrorState.args = {};

export const WithVariantSelectors = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={variantsController} />;
WithVariantSelectors.args = {};

export const WithDisplayFields = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={displayFieldsController} />;
WithDisplayFields.args = {};

export const WithArrayAttributes = (args: ProductQuickviewProps) => <ProductQuickview {...args} controller={arrayAttrsController} />;
WithArrayAttributes.args = {};
