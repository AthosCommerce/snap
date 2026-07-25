import { h } from 'preact';

import { BadgeImage } from './BadgeImage';
import { componentArgs } from '../../../utilities';
import Readme from '../BadgeImage/readme.md';

export default {
	title: 'Atoms/BadgeImage',
	component: BadgeImage,
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
		url: {
			description: 'Badge image url',
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
		label: {
			description: 'Badge image alt text',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		url: '//cdn.searchspring.net/ajax_search/img/star-badge-new-blue.png',
		label: 'placeholder badge image',
	},
};
