import { h } from 'preact';

import { RecommendationBundleVertical, RecommendationBundleVerticalProps } from './RecommendationBundleVertical';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';
import { iconPaths } from '../../Atoms/Icon';
import type { RecommendationControllerConfig } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/RecommendationBundleVertical',
	component: RecommendationBundleVertical,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div
				style={{
					maxWidth: '500px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		controller: {
			description: 'Controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: false,
		},
		results: {
			description: 'Results store reference, overrides controller.store.results',
			type: { required: false },
			table: {
				type: {
					summary: 'Results store object',
				},
			},
			control: false,
		},
		resultComponent: {
			description: 'Slot for custom result component',
			table: {
				type: {
					summary: 'component',
				},
			},
		},
		title: {
			description: 'recommendation title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		onAddToCart: {
			description: 'onClick event handler for add bundle to cart button in CTA',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			action: 'onAddToCart',
		},
		limit: {
			description: 'limit the number of results rendered',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		preselectedCount: {
			description: 'Number of results to have selected by default. (seed included)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		hideCheckboxes: {
			defaultValue: false,
			description: 'Hide/show bundle checkboxes in results',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		seedText: {
			description: 'Text to render in seed product badge',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Seed Product' },
			},
			control: { type: 'text' },
		},
		hideSeed: {
			description: 'Hide/show seed result',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		separatorIconSeedOnly: {
			description: 'boolean to only have seperator Icon for the seed product',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		separatorIcon: {
			defaultValue: 'plus',
			description: 'Icon to render between results',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'plus' },
			},
			control: {
				type: 'select',
				options: [...Object.keys(iconPaths)],
			},
		},
		ctaButtonText: {
			description: 'text to render in add to cart button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Add All To Cart' },
			},
			control: { type: 'text' },
		},
		ctaIcon: {
			desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'bag' },
			},
			control: {
				type: 'select',
				options: [...Object.keys(iconPaths)],
			},
		},
		ctaButtonSuccessText: {
			description: 'text to temporarily render in the add to cart button after it is clicked',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Bundle Added!' },
			},
			control: { type: 'text' },
		},
		ctaButtonSuccessTimeout: {
			description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
			defaultValue: 2000,
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		ctaSlot: {
			description: 'Slot for custom add to cart component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'component',
				},
			},
		},
		lazyRender: {
			description: 'Lazy render settings object',
			defaultValue: {
				enabled: true,
				offset: '10%',
			},
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Lazy render settings object' },
			},
			control: { type: 'object' },
		},
		breakpoints: {
			defaultValue: undefined,
			description: 'Recommendation title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Breakpoint object' },
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

const config: RecommendationControllerConfig = {
	id: 'RecommendationBundle',
	tag: 'bundley',
	globals: {
		siteId: 'atkzs2',
		products: ['VW1982-UQZ-AS'],
	},
};

const snapInstance = Snapify.recommendation(config);

export const Default = {
	render: (props: RecommendationBundleVerticalProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
		return <RecommendationBundleVertical {...props} controller={controller} results={controller.store.results} />;
	},

	loaders: [
		async () => {
			snapInstance.on('afterStore', async ({ controller }: { controller: RecommendationController }, next: Next) => {
				controller.store.results.forEach((result: Product) => (result.mappings.core!.url = 'javascript:void(0);'));
				await next();
			});
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		limit: 3,
	},
};
