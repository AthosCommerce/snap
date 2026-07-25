import { h } from 'preact';

import { Modal } from './Modal';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/Modal',
	component: Modal,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		button: {
			description: 'Button content to toggle the modal',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		buttonSelector: {
			description: 'Button selector to toggle the modal',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		overlayColor: {
			defaultValue: 'rgba(0,0,0,0.8)',
			description: 'Modal overlay color',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'rgba(0,0,0,0.0)' },
			},
			control: { type: 'color' },
		},
		onOverlayClick: {
			description: 'Function to call when the overlay is clicked',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function(e: Event)',
				},
			},
			control: false,
			action: 'onOverlayClick',
		},
		content: {
			description: 'Content to be displayed in modal',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		children: {
			description: 'Content to be displayed in modal',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		disabled: {
			description: 'Disable modal - prevents all click events',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		lockScroll: {
			description: 'Lock the Scroll on the body when the modal is open',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		open: {
			description: 'Pass a value here to control the state externally',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'undefined' },
			},
			control: { type: 'boolean' },
		},
		startOpen: {
			description: 'modal state is open on initial render - used with internal state only',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disableClickOutside: {
			description: 'Ignore clicks outside of element',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onClick: {
			description: 'modal click event handler',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function(e: Event)',
				},
			},
			control: false,
			action: 'onClick',
		},
		disableA11y: {
			description: 'boolean to disable autoset ally properties',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
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
		content: <div>jsx content - (note this component receieved the open state as a prop)</div>,
	},
};
