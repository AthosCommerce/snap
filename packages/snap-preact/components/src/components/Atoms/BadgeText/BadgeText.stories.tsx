import { h } from 'preact';

import { BadgeText } from './BadgeText';
import { componentArgs } from '../../../utilities';
import Readme from '../BadgeText/readme.md';

export default {
	title: 'Atoms/BadgeText',
	component: BadgeText,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div
				style={{
					width: '200px',
					height: '200px',
					border: '2px dotted lightgrey',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		value: {
			description: 'Badge text contents',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		colorText: {
			description: 'Badge text color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '#000000' },
			},
			control: { type: 'color' },
		},
		tag: {
			description: 'Badge location tag',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		value: '30% Off',
		colorText: '#000000',
	},
};
