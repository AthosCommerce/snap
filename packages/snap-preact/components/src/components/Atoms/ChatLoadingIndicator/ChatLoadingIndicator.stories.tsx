import { h } from 'preact';

import { ChatLoadingIndicator } from './ChatLoadingIndicator';
import { componentArgs } from '../../../utilities';
import Readme from '../ChatLoadingIndicator/readme.md';

export default {
	title: 'Atoms/ChatLoadingIndicator',
	component: ChatLoadingIndicator,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	argTypes: {
		loading: {
			description: 'whether the indicator should be visible and animating',
			table: { category: 'Templates Legal', type: { summary: 'boolean' } },
			control: { type: 'boolean' },
		},
		verbs: {
			description: 'list of verbs to cycle through',
			table: { category: 'Templates Legal', type: { summary: 'string[]' } },
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		loading: true,
	},
};

export const CustomVerbs = {
	args: {
		loading: true,
		verbs: ['Brewing', 'Stirring', 'Pouring'],
	},
};
