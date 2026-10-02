import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { FacetHierarchyOptions, FacetHierarchyOptionsProps } from './FacetHierarchyOptions';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import { FacetDisplay } from '../../../types';
import Readme from '../FacetHierarchyOptions/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';
import { iconPaths } from '../../Atoms/Icon';

export default {
	title: 'Molecules/FacetHierarchyOptions',
	component: FacetHierarchyOptions,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		values: {
			description: 'Facet.values store reference',
			type: { required: false },
			table: {
				type: {
					summary: 'object',
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
		returnIcon: {
			description: 'return Icon name',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		hideCount: {
			defaultValue: false,
			description: 'Hide facet option count',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
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

const snapInstance = Snapify.search({ id: 'FacetHierarchyOptions', globals: { siteId: 'atkzs2' } });

const ObservableFacetHierarchyOptions = observer(({ args, controller }: { args: FacetHierarchyOptionsProps; controller: SearchController }) => {
	const hierarchyValues = controller?.store?.facets
		.filter((facet) => facet.display === FacetDisplay.HIERARCHY)
		.shift()
		.values.slice(0, 12);

	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<FacetHierarchyOptions {...args} values={hierarchyValues} />
		</div>
	);
});

export const Default = {
	render: (args: FacetHierarchyOptionsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <ObservableFacetHierarchyOptions args={args} controller={controller} />;
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
