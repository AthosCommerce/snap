import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { Pagination, PaginationProps } from './Pagination';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Pagination/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Molecules/Pagination',
	component: Pagination,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		controller: {
			description: 'Search Controller reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Search controller object',
				},
			},
			control: false,
		},
		pagination: {
			description: 'Pagination store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'pagination store object',
				},
			},
			control: false,
		},
		pages: {
			description:
				'Number of pages shown - recommend using an odd number as it includes the current page with an even spread to the left and right (excluding first and last)',
			defaultValue: 5,
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 5 },
			},
			control: { type: 'number' },
		},
		pagesLeft: {
			description: 'Number of pages shown to the left (excluding first) - must be used with pagesRight',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		pagesRight: {
			description: 'Number of pages shown to the right (excluding last) - must be used with pagesLeft',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		nextButton: {
			description: 'Pagination next button content',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		prevButton: {
			description: 'Pagination prev button content',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		firstButton: {
			description: 'Pagination first button content',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		lastButton: {
			description: 'Pagination last button content',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		hideFirst: {
			description: 'Hide first button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideLast: {
			description: 'Hide last button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		persistFirst: {
			description: 'persists the first page button (when not on first page)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		persistLast: {
			description: 'persists the last page button (when not on last page)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideEllipsis: {
			description: 'Hide ellipsis',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideNext: {
			description: 'Hide next button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hidePrev: {
			description: 'Hide previous button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Pagination', globals: { siteId: 'atkzs2' } });

const ObservablePagination = observer(({ args, controller }: { args: PaginationProps; controller: SearchController }) => {
	return <Pagination {...args} pagination={controller?.store?.pagination} />;
});

export const Default = {
	render: (args: PaginationProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <ObservablePagination args={args} controller={controller} />;
	},

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};
