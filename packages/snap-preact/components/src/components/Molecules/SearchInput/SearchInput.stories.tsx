import { h } from 'preact';

import { SearchInput } from './SearchInput';
import { componentArgs } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/SearchInput',
	component: SearchInput,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '500px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		value: {
			defaultValue: '',
			type: { required: true },
			description: 'sets the value for the input',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		onChange: {
			description: 'OnChange Callback',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onChange',
		},
		onKeyUp: {
			description: 'OnKeyUp Callback',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onKeyUp',
		},
		onKeyDown: {
			description: 'OnKeyDown Callback',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onKeyDown',
		},
		onClick: {
			description: 'OnClick Callback',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: false,
			action: 'onClick',
		},
		submitSearchButton: {
			description: 'Button component props for submit search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: `{ icon: 'search-thin' }`,
				},
			},
			control: { type: 'object' },
		},
		clearSearchButton: {
			description: 'Button component props for clear search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: `{ icon: 'close-thin' }`,
				},
			},
			control: { type: 'object' },
		},
		closeSearchButton: {
			description: 'Button component props for close search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: `{}`,
				},
			},
			control: { type: 'object' },
		},
		placeholderText: {
			defaultValue: 'Search',
			description: 'Display placeholder text',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'Search' },
			},
			control: { type: 'text' },
		},
		inputName: {
			description: 'sets the name attribute for the input',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		disabled: {
			description: 'boolean to set disabled attribute',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		hideSubmitSearchButton: {
			description: 'hides the submit search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		hideClearSearchButton: {
			description: 'hides the clear search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		hideCloseSearchButton: {
			description: 'hides the close search button',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

export const Default = {
	args: {
		submitSearchButton: { icon: 'search-thin' },
		clearSearchButton: { icon: 'close-thin' },
	},
};
