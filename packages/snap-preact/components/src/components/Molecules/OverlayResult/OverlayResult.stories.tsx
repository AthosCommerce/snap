import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { OverlayResult, OverlayResultProps } from './OverlayResult';
import { FALLBACK_IMAGE_URL } from '../../Atoms/Image';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
// import Readme from '../OverlayResult/README.md';
import { ResultsLayout } from '../../../types';
import type { SearchController } from '@athoscommerce/snap-controller';
import { Product } from '@athoscommerce/snap-store-mobx';

export default {
	title: 'Molecules/OverlayResult',
	component: OverlayResult,
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
						{/* {Readme} */}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: { type: 'none' },
		},
		result: {
			description: 'Result store Product reference',
			type: { required: true },
			table: {
				type: {
					summary: 'result store Product object',
				},
			},
			control: { type: 'none' },
		},
		hideBadge: {
			description: 'Hide badge',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideVariantSelections: {
			description: 'Hide variant Selections',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideTitle: {
			description: 'Hide title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hidePricing: {
			description: 'Hide pricing',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideImage: {
			description: 'Hide image',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideRating: {
			description: 'Hide ratings',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		hideAddToCartButton: {
			description: 'Hide add to cart button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		disableSlide: {
			description: 'Disables hover slide animation and always shows full details',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
			},
			control: { type: 'boolean' },
		},
		overlayBackgroundColor: {
			description: 'Background style for the details overlay panel',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)' },
			},
			control: { type: 'text' },
		},
		addToCartButtonText: {
			description: 'add to cart button text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		addToCartButtonSuccessText: {
			description: 'add to cart button text to show after adding to cart',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		addToCartButtonSuccessTimeout: {
			description: 'time in ms to show the success button text before reverting back to standard text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		onAddToCartClick: {
			description: 'function to run on add to cart button click',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
				defaultValue: { summary: 'Add To Cart' },
			},
			control: { type: 'none' },
			action: 'onClick',
		},
		detailSlot: {
			description: 'Slot for more product details (under price)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		fallback: {
			defaultValue: '',
			description: 'Fallback image url',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: FALLBACK_IMAGE_URL },
			},
			control: { type: 'text' },
		},
		truncateTitle: {
			defaultValue: {},
			description: 'truncate title options object',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
			},
			control: {
				type: 'object',
			},
		},
		layout: {
			description: 'Results layout',
			defaultValue: ResultsLayout.grid,
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [ResultsLayout.grid, ResultsLayout.list],
			control: {
				type: 'select',
			},
		},
		onClick: {
			description: 'Custom onClick event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onClick',
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Result', globals: { siteId: 'atkzs2' } });

export const Default = (args: OverlayResultProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	const resultToUse = controller?.store?.results[7] as Product;
	//force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
	resultToUse.display.mappings.core = {
		...resultToUse.display.mappings.core,
		rating: 4.5,
	};
	return (
		<div style={{ maxWidth: '300px' }}>
			<OverlayResult {...args} result={resultToUse} />
		</div>
	);
};

Default.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

export const hideSections = (args: OverlayResultProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	const resultToUse = controller?.store?.results[7] as Product;
	//force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
	resultToUse.display.mappings.core = {
		...resultToUse.display.mappings.core,
		rating: 4.5,
	};
	return (
		<div style={{ maxWidth: '300px' }}>
			<OverlayResult {...args} result={resultToUse} />
		</div>
	);
};

hideSections.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
hideSections.args = {
	hideBadge: true,
	hideTitle: true,
	hidePricing: true,
};

export const truncateTitle = (args: OverlayResultProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
	const resultToUse = controller?.store?.results[7] as Product;
	//force a rating to show up for the demo since ratings are hidden by default and not all products have ratings
	resultToUse.display.mappings.core = {
		...resultToUse.display.mappings.core,
		rating: 4.5,
	};
	return (
		<div style={{ maxWidth: '300px' }}>
			<OverlayResult {...args} result={resultToUse} />
		</div>
	);
};

truncateTitle.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
truncateTitle.args = {
	truncateTitle: { limit: 5, append: '...' },
};
