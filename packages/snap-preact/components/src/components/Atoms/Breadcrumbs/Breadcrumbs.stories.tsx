import { h } from 'preact';

import { Breadcrumbs } from './Breadcrumbs';
import { componentArgs } from '../../../utilities';
import Readme from '../Breadcrumbs/readme.md';
import { iconPaths } from '../Icon';

export default {
	title: 'Atoms/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: false,
		},
		data: {
			description: 'Breadcrumb data object',
			table: {
				type: {
					summary: 'object | function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'object' },
		},
		separator: {
			description: 'Breadcrumb delimiter',
			table: {
				type: {
					summary: 'string, JSX, or false',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '>' },
			},
			control: { type: 'text' },
		},
		separatorIcon: {
			description: 'Separator Icon name',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			options: [...Object.keys(iconPaths)],
			control: {
				type: 'select',
			},
		},
		...componentArgs,
	},
};

export const categoryPage = {
	args: {
		data: [
			{
				url: '/',
				label: 'Home',
			},
			{
				url: '/',
				label: 'Collections',
			},
			{
				url: '/',
				label: 'Appliances',
			},
			{
				label: 'Fridge',
			},
		],
	},
};

export const SearchPage = {
	args: {
		data: [
			{
				url: '/',
				label: 'Home',
			},
			{
				label: 'Search',
			},
		],
	},
};
