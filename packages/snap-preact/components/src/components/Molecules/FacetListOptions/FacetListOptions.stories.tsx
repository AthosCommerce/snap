import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { FacetListOptions, FacetListOptionsProps } from './FacetListOptions';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../FacetListOptions/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Molecules/FacetListOptions',
	component: FacetListOptions,
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
		hideCheckbox: {
			defaultValue: false,
			description: 'Hide facet option checkbox',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		respectSingleSelect: {
			defaultValue: false,
			description: 'will render radios instead of checkboxes if facet.multiple == "single"',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
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
		hideCountParenthesis: {
			defaultValue: false,
			description: 'Hide facet option count parenthesis',
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

const snapInstance = Snapify.search({ id: 'FacetListOptions', globals: { siteId: 'atkzs2' } });

const ObservableFacetListOptions = observer(({ args, controller }: { args: FacetListOptionsProps; controller: SearchController }) => {
	const brandFacet = controller?.store?.facets.filter((facet) => facet.field == 'color').pop();

	return (
		<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
			<FacetListOptions {...args} values={brandFacet.values} />
		</div>
	);
});

export const Default = {
	render: (args: FacetListOptionsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return <ObservableFacetListOptions args={args} controller={controller} />;
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
