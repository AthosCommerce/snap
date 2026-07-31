import { h } from 'preact';

import { RecommendationBundleEasyAdd, RecommendationBundleEasyAddProps } from './RecommendationBundleEasyAdd';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';
import { iconPaths } from '../../Atoms/Icon';
import type { RecommendationControllerConfig } from '@athoscommerce/snap-controller';

export default {
	title: 'Templates/RecommendationBundleEasyAdd',
	component: RecommendationBundleEasyAdd,
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
		ctaInline: {
			description: 'boolean to enable the stacked add to cart button display',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
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
	render: (props: RecommendationBundleEasyAddProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
		return <RecommendationBundleEasyAdd {...props} controller={controller} results={controller.store.results} />;
	},

	loaders: [
		async () => {
			snapInstance.on('afterStore', async ({ controller }: { controller: RecommendationController }, next: Next) => {
				// neutralize mock links. '#' is safe here because recommendations hold no UrlManager state —
				// in a Search or Autocomplete story it would clear the hash-stored filter/sort/pageSize params.
				controller.store.results.forEach((result: Product) => (result.mappings.core!.url = '#'));
				await next();
			});
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};
