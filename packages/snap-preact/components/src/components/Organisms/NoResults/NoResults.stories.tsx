import { h } from 'preact';

import { NoResults } from './NoResults';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Organisms/NoResults',
	component: NoResults,
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
					maxWidth: '900px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		contentSlot: {
			description: 'Slot for adding custom content',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, JSX',
				},
			},
			control: { type: 'text' },
		},
		hideSuggestions: {
			description: 'Hide suggestions',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		suggestionsTitleText: {
			description: 'Suggestions title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: `Suggestions` },
			},
			control: { type: 'text' },
		},
		suggestionsList: {
			description: 'list of suggestions to display',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string[]',
				},
			},
			control: { type: 'object', defaultValue: [] },
		},
		hideContact: {
			description: 'Hide contact section',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideContactsTitleText: {
			description: 'Hide contact section title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		hideSuggestionsTitleText: {
			description: 'Hide suggestions section title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		contactsTitleText: {
			description: 'contact section title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: `Still can't find what you're looking for? <a href="/contact-us">Contact us</a>.` },
			},
			control: { type: 'text' },
		},
		contactsList: {
			description: 'list of contact lines to display',
			table: {
				category: 'Templates Legal',
				type: {
					summary: '{ title, content }[]',
				},
			},
			control: { type: 'object' },
		},
		templates: {
			description: 'templates to render',
			table: {
				category: 'Templates Legal',
				type: { summary: 'object' },
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

export const Default = {};

export const WithRecommendations = {
	args: {
		templates: {
			recommendation: {
				enabled: true,
			},
		},
	},
};
