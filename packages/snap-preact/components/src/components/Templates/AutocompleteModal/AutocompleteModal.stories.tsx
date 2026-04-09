import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { AutocompleteModal, AutocompleteModalProps } from './AutocompleteModal';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';
import Readme from './readme.md';
import type { AutocompleteController } from '@athoscommerce/snap-controller';
import { useEffect, useState } from 'preact/hooks';
import { AutocompleteTermStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager } from '@athoscommerce/snap-url-manager';

export default {
	title: 'Templates/AutocompleteModal',
	component: AutocompleteModal,
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
	decorators: [
		(Story: any) => (
			<div
				style={{
					maxWidth: '1200px',
					position: 'relative',
				}}
			>
				<input
					type="text"
					id="searchInput"
					placeholder="try me!"
					autoComplete="off"
					style={{
						width: '100%',
						padding: '10px',
						boxSizing: 'border-box',
						border: '1px solid #ebebeb',
					}}
				/>
				<span style={{ margin: '15px', textAlign: 'center', display: 'block' }}>
					Storybook bug: if no autocomplete renders. please refresh the page.{' '}
				</span>
				<Story />
			</div>
		),
	],
	argTypes: {
		buttonSelector: {
			description: 'Modal button selector. (defaults to input)',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string, jsx',
				},
			},
			control: { type: 'text' },
		},
		renderInput: {
			defaultValue: true,
			description: 'render a second input inside autocomplete window that gets auto focused on open.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		controller: {
			description: 'Autocomplete controller reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Autocomplete controller object',
				},
			},
			control: { type: 'none' },
		},
		input: {
			description: 'input element reference',
			type: { required: true },
			table: {
				type: {
					summary: 'Element or String as CSS Selector',
				},
			},
			control: { type: 'none' },
		},
		layout: {
			description: 'array of modules to render in specified layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
				},
				defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
			},
			control: 'none',
		},
		column1: {
			description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
				},
				defaultValue: {
					summary: `{
					layout: ['Terms'],
					width: '150px'
				}`,
				},
			},
			control: 'none',
		},
		column2: {
			description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
				},
				defaultValue: {
					summary: `{
					layout: ['Facets'],
					width: '150px'
				}`,
				},
			},
			control: 'none',
		},
		column3: {
			description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
				},
				defaultValue: {
					summary: `{
					layout: [['Content'], ['_', 'SeeMore']],
					width: 'auto'
				}`,
				},
			},
			control: 'none',
		},
		column4: {
			description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
			table: {
				category: 'Templates Legal',
				type: {
					summary:
						"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
				},
			},
			control: 'none',
		},
		width: {
			defaultValue: '500px',
			description: 'Change width of the component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '500px' },
			},
			control: { type: 'text' },
		},
		height: {
			description: 'set the height of the component',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		excludeBanners: {
			defaultValue: false,
			description: 'automatically add merchandising banners',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		facetsTitle: {
			defaultValue: '',
			description: 'Change facets header title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		contentTitle: {
			defaultValue: '',
			description: 'Change content header title',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '' },
			},
			control: { type: 'text' },
		},
		overlayColor: {
			description: 'specifies the color of the overlay',
			defaultValue: 'rgba(0, 0, 0, 0.8)',
			table: {
				category: 'Templates Legal',
				type: { summary: 'string' },
				defaultValue: { summary: 'rgba(0, 0, 0, 0.8)' },
			},
			control: { type: 'color' },
		},
		...componentArgs,
	},
};

const snapInstance = Snapify.autocomplete({
	id: 'AutocompleteModal',
	selector: '#searchInput',
	globals: {
		siteId: 'atkzs2',
	},
	settings: {
		trending: {
			limit: 5,
		},
	},
});

export const Default = (args: AutocompleteModalProps, { loaded: { controller } }: { loaded: { controller: AutocompleteController } }) => {
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

	controller.store.history = mockTerms;

	const [inputFound, setInputFound] = useState(false);

	useEffect(() => {
		if (document.querySelector('#searchInput')) {
			setInputFound(true);
		}
	}, []);

	return inputFound ? <AutocompleteModal {...args} controller={controller} input={controller?.config.selector} /> : <></>;
};

Default.loaders = [
	async () => ({
		controller: await snapInstance,
	}),
];
