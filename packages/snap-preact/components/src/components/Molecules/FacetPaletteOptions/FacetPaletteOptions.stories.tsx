import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { FacetPaletteOptions, FacetPaletteOptionsProps } from './FacetPaletteOptions';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../FacetPaletteOptions/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Molecules/FacetPaletteOptions',
	component: FacetPaletteOptions,
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
			description: 'Number of columns in palette. Not applicable if using horizontal prop',
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
			description: 'Size of each palette item. Does not apply if using `columns` prop',
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
		hideLabel: {
			description: 'Hide facet option label',
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
			description: 'Hide facet option count',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		hideCheckbox: {
			description: 'Hide facet option checkbox',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		layout: {
			description: 'facet option layout',
			defaultValue: 'grid',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			options: ['grid', 'list'],
			control: {
				type: 'select',
			},
		},
		hideIcon: {
			description: 'Hide facet option icon',
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
		colorMapping: {
			description: 'Object of color mapping values',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
				defaultValue: { summary: '{}' },
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } });

const ObservableFacetPaletteOptions = observer(({ args, controller }: { args: FacetPaletteOptionsProps; controller: SearchController }) => {
	const sizeFacet = controller?.store?.facets.filter((facet) => facet.field == 'color').pop();

	return <FacetPaletteOptions {...args} values={sizeFacet.values} />;
});

export const Default = {
	render: (args: FacetPaletteOptionsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
				<ObservableFacetPaletteOptions args={args} controller={controller} />
			</div>
		);
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

export const List = {
	render: (args: FacetPaletteOptionsProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => {
		return (
			<div style={{ maxWidth: args?.horizontal ? '1200px' : '500px' }}>
				<ObservableFacetPaletteOptions args={args} controller={controller} />
			</div>
		);
	},

	args: {
		layout: 'list',
		hideCount: false,
		hideCheckbox: false,
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
