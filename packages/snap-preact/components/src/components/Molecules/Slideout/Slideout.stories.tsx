import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Slideout, SlideoutProps } from './Slideout';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../Slideout/readme.md';

export default {
	title: 'Molecules/Slideout',
	component: Slideout,
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
	argTypes: {
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
		onToggle: {
			description: 'called with the new active state whenever the slideout is toggled',
			table: {
				type: {
					summary: '(active: boolean) => void',
				},
			},
			control: 'none',
		},
		...componentArgs,
	},
};

export const Default = (args: SlideoutProps) => (
	<Slideout {...args}>
		<div>props.children will be rendered here</div>
	</Slideout>
);

Default.args = {
	active: true,
	buttonContent: 'Click Me',
};
