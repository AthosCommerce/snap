import { h } from 'preact';

import { Dropdown, DropdownProps } from './Dropdown';
import { componentArgs } from '../../../utilities';
import Readme from '../Dropdown/readme.md';

export default {
	title: 'Atoms/Dropdown',
	component: Dropdown,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
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
			control: false,
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
			control: false,
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
		onToggle: {
			description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
			table: {
				type: {
					summary: 'function(e: Event, open: boolean)',
				},
				category: 'Templates Legal',
			},
			control: false,
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

export const Default = {
	args: {
		button: 'button text',
		content: 'content text',
	},
};

export const Hoverable = {
	args: {
		button: 'hover over me',
		content: 'content text',
		toggleOnHover: true,
	},
};

export const ExternalState = {
	args: {
		button: 'button text',
		content: 'content text',
		open: true,
	},
};

export const JSXContent = {
	args: {
		button: 'button text',
		content: <div>jsx content - (note this component received the open state as a prop)</div>,
	},
};

export const JSXChildren = {
	render: (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>,

	args: {
		button: 'button text',
		content: <div>jsx content - (note this component received the open state as a prop)</div>,
	},
};

export const StringChildren = {
	render: (args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>,

	args: {
		button: 'button text',
		content: 'string content - (note this component received the open state as a prop)',
	},
};
