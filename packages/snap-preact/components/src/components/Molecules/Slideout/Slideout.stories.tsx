import { h } from 'preact';

import { Slideout, SlideoutProps } from './Slideout';
import { componentArgs } from '../../../utilities';
import Readme from '../Slideout/readme.md';

export default {
	title: 'Molecules/Slideout',
	component: Slideout,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		buttonContent: {
			description: 'Slideout button content (children), appended to buttonText',
			type: { required: true },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, jsx',
				},
			},
			control: { type: 'text' },
		},
		active: {
			description: 'Initial state of the slideout.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		slideDirection: {
			defaultValue: 'left',
			description: 'Slideout slide direction',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'left' },
			},
			control: { type: 'text' },
		},
		width: {
			defaultValue: '300px',
			description: 'Slideout width',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '300px' },
			},
			control: { type: 'text' },
		},
		displayAt: {
			defaultValue: '',
			description: 'Media query for when to render this component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		transitionSpeed: {
			defaultValue: '0.25s',
			description: 'Overlay opening/closing transition speed',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '0.25s' },
			},
			control: { type: 'text' },
		},
		overlayColor: {
			defaultValue: 'rgba(0,0,0,0.8)',
			description: 'Slideout overlay color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'rgba(0,0,0,0.8)' },
			},
			control: { type: 'color' },
		},
		noButtonWrapper: {
			description: 'Prevent the wrapper element from rendering (this element has the onClick handler to toggle the state)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		rerender: {
			description: 'determine if the content should be re-rendered when the slideout is closed and re-opened',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		buttonSelector: {
			description: 'external Slideout button selector',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, jsx',
				},
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

export const Default = {
	render: (args: SlideoutProps) => (
		<Slideout {...args}>
			<div>props.children will be rendered here</div>
		</Slideout>
	),

	args: {
		active: true,
		buttonContent: 'Click Me',
	},
};
