import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { QuickviewLayout, QuickviewLayoutProps } from './QuickviewLayout';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from './readme.md';

// Build a fresh mock controller per story so each Storybook story renders independently.
function buildMockController(overrides: any = {}): any {
	const base: any = {
		type: 'quickview',
		store: {
			meta: undefined,
			isOpen: true,
			loading: false,
			product: undefined,
			quickviewConfig: undefined,
			error: undefined,
			close: () => {
				base.store.isOpen = false;
			},
		},
	};
	// Shallow-merge store overrides onto base so partial overrides preserve defaults.
	const mergedStore = { ...base.store, ...(overrides.store || {}) };
	return { ...base, ...overrides, store: mergedStore };
}

const sampleProduct = {
	id: 'sample',
	mappings: {
		core: {
			name: 'Sample Widget',
			imageUrl: 'https://placehold.co/400x400',
			thumbnailImageUrl: 'https://placehold.co/400x400',
			description: '<p>A sample product description. Resize the viewport past 768px to see the two-column desktop layout.</p>',
		},
	},
	attributes: {
		color: 'red',
		size: 'M',
		sku: 'SW-001',
	},
};

const defaultController = buildMockController({
	store: { isOpen: true, product: sampleProduct },
});

const loadingController = buildMockController({
	store: {
		isOpen: true,
		loading: true,
		// During loading the store holds the source result as `product` (set by setLoading).
		product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} },
	},
});

const errorController = buildMockController({
	store: {
		isOpen: true,
		loading: false,
		product: { id: 'sample', mappings: { core: { name: 'Sample Widget' } }, attributes: {} },
		error: { message: 'Failed to display quickview' },
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
	store: { isOpen: true, product: variantsProduct },
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
		quickviewConfig: { displayFields: ['size', 'color'] },
	},
});

const imageCarouselController = buildMockController({
	store: {
		isOpen: true,
		product: {
			id: 'image-carousel',
			mappings: {
				core: {
					name: 'Image Carousel Demo',
					imageUrl: 'https://placehold.co/400x400?text=1',
					images: ['https://placehold.co/400x400?text=1', 'https://placehold.co/400x400?text=2', 'https://placehold.co/400x400?text=3'],
				},
			},
			attributes: { sku: 'IC-001' },
		},
		quickviewConfig: { imagesField: 'images' },
	},
});

export default {
	title: 'Organisms/QuickviewLayout',
	component: QuickviewLayout,
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
			description: 'QuickviewController exposing `store` ({ isOpen, product, loading, quickviewConfig, error, close }); dismiss via `store.close()`',
			table: {
				type: {
					summary: 'QuickviewController',
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
		showBadges: {
			description: 'Render overlay badges over the product media and callout badges below it',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
	args: {},
};

export const Default = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={defaultController} />;
Default.args = {};

export const Loading = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={loadingController} />;
Loading.args = {};

export const ErrorState = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={errorController} />;
ErrorState.args = {};

export const WithVariantSelectors = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={variantsController} />;
WithVariantSelectors.args = {};

export const WithDisplayFields = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={displayFieldsController} />;
WithDisplayFields.args = {};

export const WithImageCarousel = (args: QuickviewLayoutProps) => <QuickviewLayout {...args} controller={imageCarouselController} />;
WithImageCarousel.args = {};
