import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { componentArgs, highlightedCode } from '../../../utilities';
import { Terms, TermsProps } from './Terms';
import Readme from './readme.md';
import { AutocompleteController } from '@athoscommerce/snap-controller';
import { Snapify } from '../../../utilities/snapify';
import { AutocompleteTermStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager } from '@athoscommerce/snap-url-manager';
import { useState } from 'preact/hooks';

export default {
	title: 'Molecules/Terms',
	component: Terms,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		controller: {
			description: 'autocomplete controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'autocomplete controller object',
				},
			},
			control: { type: 'none' },
		},
		terms: {
			description: 'autocomplete term store reference',
			type: { required: true },
			table: {
				type: {
					summary: 'autocomplete term store object',
				},
			},
			control: { type: 'none' },
		},
		title: {
			description: 'terms title',
			type: { required: false },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		limit: {
			description: 'adjust the number of terms to show',
			type: { required: false },
			table: {
				type: {
					summary: 'number',
				},
				category: 'Templates Legal',
			},
			control: { type: 'number' },
		},
		previewOnHover: {
			description: 'invoke term preview upon focus',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		emIfy: {
			description: 'highlight the query matched section of the term',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
			},
			control: { type: 'boolean' },
		},
		onTermClick: {
			description: 'custom onClick event handler for Terms',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onTermClick',
		},
		vertical: {
			description: 'boolean to adjust if each term should render in a vertically',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.autocomplete({
	id: 'Autocomplete-Terms',
	selector: '#searchInput2',
	globals: {
		siteId: 'atkzs2',
	},
	settings: {
		trending: {
			limit: 5,
		},
	},
});

export const Default = (args: TermsProps, { loaded: { controller } }: { loaded: { controller: AutocompleteController } }) => {
	const [termState, setTermState] = useState(false);

	const mockTerms: AutocompleteTermStore = [
		{
			active: termState === 'dress',
			preview: () => setTermState('dress'),
			value: 'dress',
			url: {
				href: '#',
			} as UrlManager,
		},
		{
			active: termState === 'shirt',
			preview: () => setTermState('shirt'),
			value: 'shirt',
			url: {
				href: '#',
			} as UrlManager,
		},
		{
			active: termState === 'shoes',
			preview: () => setTermState('shoes'),
			value: 'shoes',
			url: {
				href: '#',
			} as UrlManager,
		},
		{
			active: termState === 'hat',
			preview: () => setTermState('hat'),
			value: 'hat',
			url: {
				href: '#',
			} as UrlManager,
		},
		{
			active: termState === 'pants',
			preview: () => setTermState('pants'),
			value: 'pants',
			url: {
				href: '#',
			} as UrlManager,
		},
		{
			active: termState === 'socks',
			preview: () => setTermState('socks'),
			value: 'socks',
			url: {
				href: '#',
			} as UrlManager,
		},
	];

	setTimeout(() => {
		controller.bind();
	});

	return (
		<div style={{ maxWidth: args?.vertical ? '500px' : '1200px' }}>
			<Terms {...args} controller={controller} terms={mockTerms} />
		</div>
	);
};

Default.loaders = [
	async () => ({
		controller: await snapInstance,
	}),
];
