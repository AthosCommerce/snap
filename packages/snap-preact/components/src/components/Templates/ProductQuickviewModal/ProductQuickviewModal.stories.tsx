import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { ProductQuickviewModal, ProductQuickviewModalProps } from './ProductQuickviewModal';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../../Organisms/QuickviewLayout/readme.md';

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

export default {
	title: 'Templates/ProductQuickviewModal',
	component: ProductQuickviewModal,
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
			type: { required: true },
			table: {
				type: {
					summary: 'QuickviewController',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'Module/column arrangement passed through to `QuickviewLayout` (see the readme for available modules)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'ModuleNamesWithColumns[]',
				},
			},
			control: 'none',
		},
		disabledOverlayBadges: {
			description: 'Render the `slideshow` module without the `OverlayBadge` wrapper',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		column1: {
			description: '`{ layout, width, alignContent }` config for the `c1` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout?, width?, alignContent? }',
				},
			},
			control: 'none',
		},
		column2: {
			description: '`{ layout, width, alignContent }` config for the `c2` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout?, width?, alignContent? }',
				},
			},
			control: 'none',
		},
		column3: {
			description: '`{ layout, width, alignContent }` config for the `c3` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout?, width?, alignContent? }',
				},
			},
			control: 'none',
		},
		column4: {
			description: '`{ layout, width, alignContent }` config for the `c4` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout?, width?, alignContent? }',
				},
			},
			control: 'none',
		},
		recommendation: {
			description:
				'Config for `recommendation.<profile>` modules: `{ component?, resultComponent?, config? }`. Profile/tag comes from the module name.',
			table: { type: { summary: '{ component?, resultComponent?, config? }' } },
			control: { type: 'object' },
		},
		lang: {
			description:
				'Custom language keys forwarded to `QuickviewLayout` (`quickview`, `closeButton`, `addToCartButton`, `moreInfoButton`, `loadingText`)',
			table: {
				type: {
					summary: 'Partial<QuickviewLayoutLang>',
				},
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
	args: {},
};

export const Default = (args: ProductQuickviewModalProps) => <ProductQuickviewModal {...args} controller={defaultController} />;
Default.args = {};

export const Loading = (args: ProductQuickviewModalProps) => <ProductQuickviewModal {...args} controller={loadingController} />;
Loading.args = {};

export const ErrorState = (args: ProductQuickviewModalProps) => <ProductQuickviewModal {...args} controller={errorController} />;
ErrorState.args = {};
