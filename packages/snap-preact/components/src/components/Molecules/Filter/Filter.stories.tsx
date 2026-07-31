import { h } from 'preact';

import { Filter, FilterProps } from './Filter';
import { iconPaths } from '../../Atoms/Icon/paths';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Filter/readme.md';

import type { SearchRequestModelFilterValue } from '@athoscommerce/snapi-types';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Molecules/Filter',
	component: Filter,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		filter: {
			description: 'Filter store object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: false,
		},
		facetLabel: {
			description: 'Filter field',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		valueLabel: {
			description: 'Filter value',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		url: {
			description: 'URL manager object',
			table: {
				type: {
					summary: 'object',
				},
			},
			control: { type: 'object' },
		},
		hideFacetLabel: {
			description: 'Hide facet label',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
		},
		separator: {
			description: 'Filter delimiter',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		icon: {
			defaultValue: 'close-thin',
			description: 'Icon name',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'close-thin' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		onClick: {
			description: 'Facet option click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onClick',
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({
	id: 'Filter',
	globals: {
		siteId: 'atkzs2',
		filters: [
			{
				type: 'value',
				field: 'color_family',
				value: 'Blue',
			} as SearchRequestModelFilterValue,
		],
	},
});

export const Default = {
	render: (args: FilterProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Filter
			{...args}
			facetLabel={controller?.store?.facets.filter((facet) => facet.type === 'value').shift().label}
			valueLabel={
				controller?.store?.facets
					.filter((facet) => facet.type === 'value')
					.shift()
					.values.shift().value
			}
		/>
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],
};

export const NoFacetLabel = {
	render: (args: FilterProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Filter
			{...args}
			facetLabel={controller?.store?.facets.filter((facet) => facet.type === 'value').shift().label}
			valueLabel={
				controller?.store?.facets
					.filter((facet) => facet.type === 'value')
					.shift()
					.values.shift().value
			}
		/>
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		hideFacetLabel: true,
	},
};
