import { h } from 'preact';

import { Banner, BannerProps } from './Banner';
import { componentArgs } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import { SearchController } from '@athoscommerce/snap-controller';

export default {
	title: 'Atoms/Banner',
	component: Banner,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		content: {
			description: 'Banner content store reference',
			type: { required: true },
			table: {
				type: {
					summary: 'banner content store object',
				},
				category: 'Templates Legal',
			},
			control: false,
		},
		type: {
			description: 'Banner position type',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			options: ['header', 'footer', 'left', 'inline', 'banner'],
			control: {
				type: 'select',
			},
		},
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: false,
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.search({ id: 'Banner', globals: { siteId: 'atkzs2', search: { query: { string: 'jacket' } } } });

export const Header = {
	render: (args: BannerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Banner {...args} content={controller?.store?.merchandising?.content} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		type: 'header',
	},
};

export const Footer = {
	render: (args: BannerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Banner {...args} content={controller?.store?.merchandising?.content} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		type: 'footer',
	},
};

export const Secondary = {
	render: (args: BannerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Banner {...args} content={controller?.store?.merchandising?.content} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		type: 'banner',
	},
};

export const Left = {
	render: (args: BannerProps, { loaded: { controller } }: { loaded: { controller: SearchController } }) => (
		<Banner {...args} content={controller?.store?.merchandising?.content} />
	),

	loaders: [
		async () => {
			await snapInstance.search();
			return {
				controller: snapInstance,
			};
		},
	],

	args: {
		type: 'left',
	},
};
