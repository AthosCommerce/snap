import { h } from 'preact';
import { fn } from 'storybook/test';

import { RecommendationBundleList, RecommendationBundleListProps } from './RecommendationBundleList';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';
import type { RecommendationControllerConfig } from '@athoscommerce/snap-controller';
import { iconPaths } from '../../Atoms/Icon';

export default {
	title: 'Templates/RecommendationBundleList',
	component: RecommendationBundleList,
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
	args: {
		onAddToCart: fn(),
	},
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
				defaultValue: { summary: 'controller.store.profile.display.templateParameters.title' },
			},
			control: { type: 'text' },
		},
		description: {
			description: 'recommendation bundle description',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
				defaultValue: { summary: 'controller.store.profile.display.templateParameters.description' },
			},
			control: { type: 'text' },
		},
		onAddToCart: {
			description: 'onClick event handler for add bundle to cart button in CTA',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '(e: MouseEvent, items: Product[]) => void | Promise<void>',
				},
			},
		},
		limit: {
			description: 'limit the number of results rendered',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 5 },
			},
			control: { type: 'number' },
		},
		hideSeed: {
			description: 'Hide/show seed result',
			defaultValue: false,
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideSeedText: {
			description: 'hide the seed text',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		hideCheckboxes: {
			description: 'hide the checkboxes',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
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
			description: 'Icon to render between results',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'IconType | Partial<IconProps> | false',
				},
				defaultValue: { summary: false },
			},
			control: {
				type: 'select',
				options: [...Object.keys(iconPaths)],
			},
		},
		preselectedCount: {
			description: 'Number of results to have selected by default. (seed included)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 2 },
			},
			control: { type: 'number' },
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
		ctaButtonSuccessTimeout: {
			description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
			defaultValue: 2000,
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 2000 },
			},
			control: { type: 'number' },
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
		ctaSlot: {
			description: 'Slot for custom add to cart component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'component',
				},
				defaultValue: { summary: 'CTASlot' },
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
					summary: '{ enabled: boolean, offset?: string }',
				},
				defaultValue: { summary: "{ enabled: true, offset: '10%' }" },
			},
			control: { type: 'object' },
		},
		lang: {
			description: 'Custom language keys (`seedText`, `ctaButtonText`, `ctaButtonSuccessText`, `ctaSubtotalTitle`)',
			table: {
				type: {
					summary: 'Partial<RecommendationBundleLang>',
				},
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
	render: (props: RecommendationBundleListProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
		return <RecommendationBundleList {...props} controller={controller} results={controller.store.results} />;
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
