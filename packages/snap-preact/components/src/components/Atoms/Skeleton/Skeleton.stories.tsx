import { h } from 'preact';

import { componentArgs } from '../../../utilities';
import { Skeleton } from './Skeleton';
import Readme from '../Skeleton/readme.md';

export default {
	title: 'Atoms/Skeleton',
	component: Skeleton,
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
					position: 'relative',
				}}
			>
				<Story height="200px" />
			</div>
		),
	],
	argTypes: {
		height: {
			description: 'CSS sizing to set the height of the Skeleton',
			defaultValue: '100px',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		width: {
			description: 'CSS sizing to set the width of the Skeleton',
			defaultValue: '100px',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		round: {
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
			},
			control: { type: 'boolean' },
		},
		backgroundColor: {
			description: 'Background color',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '#ebebeb' },
			},
			control: { type: 'color' },
		},
		animatedColor: {
			description: 'Color setting for the vertical animated bar',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '#f5f5f5' },
			},
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		width: '100px',
		height: '100px',
	},
};

export const Circle = {
	args: {
		width: '100px',
		height: '100px',
		round: true,
	},
};
