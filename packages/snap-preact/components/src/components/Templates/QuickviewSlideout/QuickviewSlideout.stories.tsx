import { h } from 'preact';

import { QuickviewSlideout, QuickviewSlideoutProps } from './QuickviewSlideout';
import { componentArgs } from '../../../utilities';
import Readme from '../../Organisms/QuickviewLayout/readme.md';

// Build a fresh mock quickview manager per story so each Storybook story renders independently.
function buildMockController(overrides: any = {}): any {
	// Shallow-merge store overrides onto the defaults so partial overrides preserve them.
	const store = {
		meta: undefined,
		isOpen: true,
		loading: false,
		product: undefined,
		resolvedConfig: undefined,
		error: undefined,
		...(overrides.store || {}),
	};
	// Like QuickviewManager, dismissal lives on the manager (`close()`), not on the store.
	const manager: any = {
		type: 'quickview',
		...overrides,
		store,
		close: () => {
			manager.store.isOpen = false;
		},
	};
	return manager;
}

const sampleProduct = {
	id: 'sample',
	mappings: {
		core: {
			name: 'Sample Widget',
			imageUrl: 'https://placehold.co/400x400',
			thumbnailImageUrl: 'https://placehold.co/400x400',
			description: '<p>A sample product description, rendered in the slideout single-column layout.</p>',
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
		// While loading, QuickviewManager.show() has cleared `product`, `resolvedConfig` and `error`.
		product: undefined,
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
	title: 'Templates/QuickviewSlideout',
	component: QuickviewSlideout,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		quickviewManager: {
			description: 'QuickviewManager exposing `store` ({ isOpen, product, loading, resolvedConfig, error }); dismiss via `quickviewManager.close()`',
			type: { required: true },
			table: {
				type: {
					summary: 'QuickviewManager',
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
				defaultValue: {
					summary:
						"[['slideshow'], ['productDetail.mappings.core.name'], ['calloutBadge'], ['variantSelections'], ['quantityPicker'], ['button.add-to-cart'], ['productDetail.mappings.core.description'], ['productDetailTable'], ['button.more-info']]",
				},
			},
			control: 'none',
		},
		hideBadge: {
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
					summary: '{ layout, width, alignContent? }',
				},
			},
			control: 'none',
		},
		column2: {
			description: '`{ layout, width, alignContent }` config for the `c2` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout, width, alignContent? }',
				},
			},
			control: 'none',
		},
		column3: {
			description: '`{ layout, width, alignContent }` config for the `c3` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout, width, alignContent? }',
				},
			},
			control: 'none',
		},
		column4: {
			description: '`{ layout, width, alignContent }` config for the `c4` column',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ layout, width, alignContent? }',
				},
			},
			control: 'none',
		},
		recommendation: {
			description:
				'Config for `recommendation.<profile>` modules: `{ component?, resultComponent?, config? }`. Profile/tag comes from the module name.',
			table: { category: 'Templates Legal', type: { summary: '{ component?, resultComponent?, config? }' } },
			control: { type: 'object' },
		},
		slideDirection: {
			description: 'Direction the slideout enters from',
			table: {
				category: 'Templates Legal',
				type: {
					summary: "'left' | 'right' | 'top' | 'bottom'",
				},
				defaultValue: { summary: 'right' },
			},
			control: { type: 'select' },
			options: ['left', 'right', 'top', 'bottom'],
		},
		width: {
			description: 'Width of the slideout panel',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '500px' },
			},
			control: { type: 'text' },
		},
		overlayColor: {
			description: 'Color of the overlay behind the slideout',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'rgba(0,0,0,0.8)' },
			},
			control: { type: 'color' },
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
};

export const Default = {
	render: (args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={defaultController} />,
};

export const Loading = {
	render: (args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={loadingController} />,
};

export const ErrorState = {
	render: (args: QuickviewSlideoutProps) => <QuickviewSlideout {...args} quickviewManager={errorController} />,
};
