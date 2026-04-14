import { h } from 'preact';
import { observer } from 'mobx-react-lite';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Facet, FacetProps } from './Facet';
import { iconPaths } from '../../Atoms/Icon';
import { FacetDisplay } from '../../../types';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from '../Facet/readme.md';
import type { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Organisms/Facet',
	component: Facet,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
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
		facet: {
			description: 'Facet store reference',
			type: { required: true },
			table: {
				type: {
					summary: 'facet store object',
				},
			},
			control: { type: 'none' },
		},
		limit: {
			defaultValue: 12,
			description: 'Number of facet options to display',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 12 },
			},
			control: { type: 'number' },
		},
		disableOverflow: {
			defaultValue: false,
			description: 'Enable the use of an overflow (show more/less)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		searchable: {
			defaultValue: false,
			description: 'Enables facet search within functionality',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		rangeInputs: {
			defaultValue: false,
			description: 'Enables facet range inputs',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		rangeInputsSubmitButtonText: {
			defaultValue: 'Submit',
			description: 'Range input submit button text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Submit' },
			},
			control: { type: 'text' },
		},
		rangeInputsPrefix: {
			description: 'Range inputs prefix text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		rangeInputsInheritDefaultValues: {
			defaultValue: false,
			description: 'Enables facet range input values to default to the facet low and high limits',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		rangeInputsSeparatorText: {
			description: 'Range inputs separator text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: ' - ' },
			},
			control: { type: 'text' },
		},
		color: {
			description: 'Select color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
		iconColor: {
			description: 'Select icon color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '#333' },
			},
			control: { type: 'color' },
		},
		showSelectedCount: {
			description: 'shows the number of selected options within this facet in the facet header',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideSelectedCountParenthesis: {
			description: 'specifies if the parenthesis should render around the selected count',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		showClearAllText: {
			description: 'specifies if the clear all text should render',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		clearAllText: {
			description: 'text to show in the clear all link',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Clear All' },
			},
			control: { type: 'text' },
		},
		clearAllIcon: {
			description: 'Icon to show in the clear all link',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		disableCollapse: {
			description: 'Disable collapse - used with internal state only',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		iconExpand: {
			defaultValue: 'angle-down',
			description: 'Icon for when facet is collapsed',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'angle-down' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		iconCollapse: {
			defaultValue: 'angle-up',
			description: 'Icon for when facet is expanded',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'angle-up' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		showMoreText: {
			defaultValue: 'Show More',
			description: "Change 'Show More' button text",
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Show More' },
			},
			control: { type: 'text' },
		},
		showLessText: {
			defaultValue: 'Show Less',
			description: "Change 'Show Less' button text",
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Show Less' },
			},
			control: { type: 'text' },
		},
		hideShowMoreLessText: {
			defaultValue: false,
			description: 'hide show more / show less text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		iconOverflowMore: {
			defaultValue: 'plus',
			description: 'Icon for when facet can show more',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'plus' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		iconOverflowLess: {
			defaultValue: 'minus',
			description: 'Icon for when facet can show less',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'minus' },
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		overflowSlot: {
			description: 'Slot for custom overflow (show more/less) button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'component',
				},
			},
			control: { type: 'none' },
		},
		optionsSlot: {
			description: 'Slot for custom facet option components',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'component',
				},
			},
			control: { type: 'none' },
		},
		justContent: {
			defaultValue: false,
			description: 'Render just the facet options. Excludes rendering of the Dropdown sub-component.',
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
			control: { type: 'object' },
		},
		fields: {
			defaultValue: {},
			description: 'Change props per facet',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
			},
			control: {
				type: 'object',
			},
		},
		display: {
			defaultValue: {},
			description: 'Change props per facet display type',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'object',
				},
			},
			control: {
				type: 'object',
			},
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Facet', globals: { siteId: 'atkzs2' } });

// List Facet

const ObservableListFacet = observer(({ args, controller }: { args: FacetProps; controller: SearchController }) => {
	return <Facet {...args} facet={controller?.store?.facets.filter((facet) => facet.display === FacetDisplay.LIST).shift()} />;
});

export const List = (args: FacetProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<ObservableListFacet args={args} controller={controller} />
);

List.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

// Slider Facet

const ObservableSliderFacet = observer(({ args, controller }: { args: FacetProps; controller: SearchController }) => {
	const facet = controller?.store?.facets.filter((facet) => facet.display === FacetDisplay.SLIDER).shift();
	if (facet) {
		return <Facet {...args} facet={facet} />;
	}

	// prevent error when no facet is found...
	return <div></div>;
});

export const Slider = (args: FacetProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<ObservableSliderFacet args={args} controller={controller} />
);

Slider.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

// Palette Facet

const ObservablePaletteFacet = observer(({ args, controller }: { args: FacetProps; controller: SearchController }) => {
	const facet = controller?.store?.facets.filter((facet) => facet.display === FacetDisplay.PALETTE).shift();
	if (facet) {
		return <Facet {...args} facet={facet} />;
	}

	// prevent error when no facet is found...
	return <div></div>;
});

export const Palette = (args: FacetProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<ObservablePaletteFacet args={args} controller={controller} />
);

Palette.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

// Grid Facet

const ObservableGridFacet = observer(({ args, controller }: { args: FacetProps; controller: SearchController }) => {
	const facet = controller?.store?.facets.filter((facet) => facet.display === FacetDisplay.GRID).shift();
	if (facet) {
		return <Facet {...args} facet={facet} />;
	}

	// prevent error when no facet is found...
	return <div></div>;
});

export const Grid = (args: FacetProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<ObservableGridFacet args={args} controller={controller} />
);
Grid.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];

// HIERARCHY Facet

const ObservableHierarchyFacet = observer(({ args, controller }: { args: FacetProps; controller: SearchController }) => {
	const facet = controller?.store?.facets.filter((facet) => facet.display === FacetDisplay.HIERARCHY).shift();
	if (facet) {
		return <Facet {...args} facet={facet} />;
	}
	// prevent error when no facet is found...
	return <div></div>;
});

export const Hierarchy = (args: FacetProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
	<ObservableHierarchyFacet args={args} controller={controller} />
);
Hierarchy.loaders = [
	async () => {
		await snapInstance.search();
		return {
			controller: snapInstance,
		};
	},
];
