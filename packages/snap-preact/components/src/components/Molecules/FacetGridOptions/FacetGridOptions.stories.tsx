import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { FacetGridOptions, FacetGridOptionsProps } from './FacetGridOptions';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../FacetGridOptions/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Molecules/FacetGridOptions',
	component: FacetGridOptions,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		values: {
			description: 'Facet.values store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'facet values store array',
				},
			},
			control: false,
		},
		facet: {
			description: 'Facet store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'facet store object',
				},
			},
			control: false,
		},
		columns: {
			defaultValue: 4,
			description: 'Number of columns in grid. Not applicable if using horizontal prop',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 4 },
			},
			control: { type: 'number' },
		},
		gridSize: {
			defaultValue: '45px',
			description: 'Size of each grid item. Does not apply if using `columns` prop',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '45px' },
			},
			control: { type: 'text' },
		},
		gapSize: {
			defaultValue: '8px',
			description: 'Gap size between rows and columns',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '8px' },
			},
			control: { type: 'text' },
		},
		horizontal: {
			defaultValue: false,
			description: 'Render facet options horizontally',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		previewOnFocus: {
			description: 'Invoke facet value preview upon focus',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		valueProps: {
			description: 'Object of facet value props',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: '{}' },
			},
			control: false,
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

const snapInstance = Snapify.search({ id: 'FacetGridOptions', globals: { siteId: 'atkzs2' } });

const ObservableFacetGridOptions = observer(({ args, controller }: { args: FacetGridOptionsProps; controller: SearchController }) => {
	const sizeFacet = controller?.store?.facets.filter((facet) => facet.field == 'size').pop();

	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<FacetGridOptions {...args} values={sizeFacet.values} />
		</div>
	);
});

export const Default = {
	render: (args: FacetGridOptionsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <ObservableFacetGridOptions args={args} controller={controller} />;
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
