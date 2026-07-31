import { h } from 'preact';

import { Facets, FacetsProps } from './Facets';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from '../Facets/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Organisms/Facets',
	component: Facets,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '300px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		facets: {
			description: 'Facets store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Facets store object',
				},
			},
			control: false,
		},
		limit: {
			description: 'Maximum number of facets to display',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		controller: {
			description: 'Controller reference',
			type: { required: false },
			table: {
				type: {
					summary: 'Controller object',
				},
			},
			control: false,
		},
		onFacetOptionClick: {
			description: 'Callback function for when a facet option is clicked',
			table: {
				category: 'Templates Legal',
				type: { summary: 'function' },
			},
			control: false,
			action: 'onFacetOnClick',
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Facets', globals: { siteId: 'atkzs2' } });

export const Default = {
	render: (args: FacetsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <Facets {...args} controller={controller} />;
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
