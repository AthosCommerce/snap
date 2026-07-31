import { h } from 'preact';

import { Overlay } from './Overlay';
import { componentArgs } from '../../../utilities';
import Readme from '../Overlay/readme.md';

export default {
	title: 'Atoms/Overlay',
	component: Overlay,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		active: {
			description: 'Overlay is displayed',
			type: { required: true },
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		color: {
			defaultValue: 'rgba(0,0,0,0.8)',
			description: 'Overlay color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 'rgba(0,0,0,0.8)' },
			},
			control: { type: 'color' },
		},
		transitionSpeed: {
			defaultValue: '0.25s',
			description: 'Overlay opening/closing transition speed',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '0.25s' },
			},
			control: { type: 'text' },
		},
		onClick: {
			description: 'Overlay click event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onClick',
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		active: true,
	},
};
