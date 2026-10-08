import { h } from 'preact';

import { Recommendation, RecommendationProps } from './Recommendation';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';

export default {
	title: 'Templates/Recommendation',
	component: Recommendation,
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
					maxWidth: '1200px',
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
		title: {
			description: 'Recommendation title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		hideTitle: {
			defaultValue: false,
			description: 'hide title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		description: {
			description: 'recommendation description',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		loop: {
			defaultValue: true,
			description: 'Recommendation pagination loops',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		results: {
			description: 'Results store reference, overrides controller.store.results',
			type: { required: false },
			table: {
				category: 'Templates Legal',
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
		modules: {
			description: 'Additional Swiper modules',
			table: {
				type: {
					summary: 'SwiperModule[]',
				},
				defaultValue: { summary: '[Navigation, Pagination]' },
			},
			control: false,
		},
		pagination: {
			defaultValue: false,
			description: 'Display pagination dots',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		scrollbar: {
			defaultValue: false,
			description: 'Display scrollbar',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideButtons: {
			defaultValue: false,
			description: 'Hide prev/next buttons',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		prevButton: {
			description: 'Previous button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
			},
			control: { type: 'text' },
		},
		nextButton: {
			description: 'Next button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string | JSX Element',
				},
			},
			control: { type: 'text' },
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
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Breakpoint object' },
			},
			control: false,
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } });

export const Default = {
	render: (props: RecommendationProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
		return <Recommendation {...props} controller={controller} />;
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
