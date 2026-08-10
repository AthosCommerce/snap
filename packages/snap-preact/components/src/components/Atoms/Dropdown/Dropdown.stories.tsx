import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Dropdown, DropdownProps } from './Dropdown';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from '../Dropdown/readme.md';

export default {
	title: 'Atoms/Dropdown',
	component: Dropdown,
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
		button: {
			description: 'Button content to toggle the dropdown',
			type: { required: true },
			table: {
				type: {
					summary: 'string, JSX',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		content: {
			description: 'Content to be displayed in dropdown',
			table: {
				type: {
					summary: 'string, JSX',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		children: {
			description: 'Content to be displayed in dropdown using children',
			table: {
				type: {
					summary: 'string, JSX',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
		},
		disabled: {
			description: 'Disable dropdown - prevents all click events',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disableOverlay: {
			description: 'Disable dropdown overlay and renders as block',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		toggleOnHover: {
			description: 'open and close dropdown on hover',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		open: {
			description: 'Pass a value here to control the state externally',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 'undefined' },
			},
			control: { type: 'boolean' },
		},
		startOpen: {
			description: 'Dropdown state is open on initial render - used with internal state only',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disableClickOutside: {
			description: 'Ignore clicks outside of element',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onClick: {
			description: 'Dropdown click event handler',
			table: {
				type: {
					summary: 'function(e: Event)',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onClick',
		},
		onMouseEnter: {
			description: 'Dropdown mouse enter event handler',
			table: {
				type: {
					summary: 'function(e: Event)',
				},
				category: 'Templates Legal',
			},
			action: 'onMouseEnter',
		},
		onMouseLeave: {
			description: 'Dropdown mouse leave event handler',
			table: {
				type: {
					summary: 'function(e: Event)',
				},
				category: 'Templates Legal',
			},
			action: 'onMouseLeave',
		},
		usePortal: {
			description: 'boolean to specify if the dropdown content should be rendered in a portal.',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		dropUp: {
			description: 'boolean to anchor portalled content above the button instead of below it (requires usePortal).',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		boundaryRef: {
			description: 'ref to an element that constrains portalled content horizontally instead of the viewport (requires usePortal).',
			table: {
				type: {
					summary: 'MutableRef<HTMLElement | null>',
				},
			},
			control: { type: 'none' },
		},
		onToggle: {
			description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
			table: {
				type: {
					summary: 'function(e: Event, open: boolean)',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onToggle',
		},
		focusTrapContent: {
			description: 'boolean to enable ally focustrap',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
			},
			control: { type: 'boolean' },
		},
		disableClick: {
			description: 'boolean to disable clicking of the button',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disableA11y: {
			description: 'boolean to disable autoset ally properties',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

export const Default = (args: DropdownProps) => <Dropdown {...args} />;
Default.args = {
	button: 'button text',
	content: 'content text',
};

export const Hoverable = (args: DropdownProps) => <Dropdown {...args} />;
Hoverable.args = {
	button: 'hover over me',
	content: 'content text',
	toggleOnHover: true,
};

export const ExternalState = (args: DropdownProps) => <Dropdown {...args} />;
ExternalState.args = {
	button: 'button text',
	content: 'content text',
	open: true,
};

export const JSXContent = (args: DropdownProps) => <Dropdown {...args} />;
JSXContent.args = {
	button: 'button text',
	content: <div>jsx content - (note this component receieved the open state as a prop)</div>,
};

export const JSXChildren = (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>;
JSXChildren.args = {
	button: 'button text',
	content: <div>jsx content - (note this component receieved the open state as a prop)</div>,
};

export const StringChildren = (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>;
StringChildren.args = {
	button: 'button text',
	content: 'string content - (note this component receieved the open state as a prop)',
};
