import { s as i, j as o, l as c } from './iframe-U9T2Y9ZS.js';
import { T as a } from './TermsList-CMxULoaE.js';
import { S as m } from './snapify-Df13VkEj.js';
import { c as u } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './Terms-B39jsyt0.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './defined-CdKp_MB-.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const p = `# TermsList

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`tsx
<TermsList controller={controller} />
\`\`\`

### layout

The \`layout\` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';

The \`_\` module is used a seperator module to center|left|right justify the other elements in the layout.

\`\`\`tsx
<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>
\`\`\`

### horizontal

The \`horizontal\` prop specifies if the terms should be rendered horizontally.

\`\`\`tsx
<TermsList controller={controller} horizontal={true}/>
\`\`\` 

### verticalOptions

The \`verticalOptions\` prop specifies if the terms options should be rendered vertically.

\`\`\`tsx
<TermsList controller={controller} verticalOptions={true}/>
\`\`\` 

### historyTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`tsx
<TermsList controller={controller} historyTitle={'History Terms'}/>
\`\`\`

### suggestionTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`tsx
<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>
\`\`\`

### trendingTitle

The \`trendingTitle\` prop specifies the title to render above the trending terms.

\`\`\`tsx
<TermsList controller={controller} trendingTitle={'Trending Terms'}/>
\`\`\`


### retainHistory

The \`retainHistory\` prop will cause the history terms to always render. 

\`\`\`tsx
<TermsList controller={controller} retainHistory={true}/>
\`\`\`

### retainTrending

The \`retainTrending\` prop will cause the Trending terms to always render. 

\`\`\`tsx
<TermsList controller={controller} retainTrending={true}/>
\`\`\`
`,
	M = {
		title: 'Organisms/TermsList',
		component: a,
		parameters: { docs: { description: { component: p } } },
		decorators: [
			(n) =>
				c('div', {
					style: { maxWidth: '1200px', position: 'relative' },
					children: [
						o('input', {
							type: 'text',
							id: 'searchInput',
							placeholder: 'try me!',
							autoComplete: 'off',
							style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb', marginBottom: '20px' },
						}),
						o(n, {}),
					],
				}),
		],
		argTypes: {
			controller: {
				description: 'autocomplete controller reference',
				type: { required: !0 },
				table: { type: { summary: 'autocomplete controller object' } },
				control: !1,
			},
			layout: {
				description: 'array of modules to render in specified order',
				table: {
					category: 'Templates Legal',
					type: { summary: "['History' | 'Trending' | 'Suggestions' | '_']" },
					defaultValue: { summary: "[['Suggestions'], ['Trending'], ['History']]" },
				},
				control: 'none',
			},
			historyTitle: {
				description: 'history terms title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Recent Searches' } },
				control: { type: 'text' },
			},
			verticalOptions: {
				description: 'boolean to specify if the terms should be displayed vertically',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: void 0 } },
				control: { type: 'boolean' },
			},
			suggestionTitle: {
				description: 'suggested terms title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Search Suggestions' } },
				control: { type: 'text' },
			},
			trendingTitle: {
				description: 'trending terms title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Popular Searches' } },
				control: { type: 'text' },
			},
			retainHistory: {
				description: 'boolean to specify if the history terms should always be rendered',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			retainTrending: {
				description: 'boolean to specify if the trending terms should always be rendered',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			...u,
		},
	},
	d = m.autocomplete({ id: 'Autocomplete-TermsList', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
	r = {
		render: (n, { loaded: { controller: s } }) => {
			const [e, t] = i(''),
				l = [
					{ active: e === 'dress', preview: () => t('dress'), value: 'dress', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shirt', preview: () => t('shirt'), value: 'shirt', type: 'suggested', url: { href: '#' } },
					{ active: e === 'shoes', preview: () => t('shoes'), value: 'shoes', type: 'suggested', url: { href: '#' } },
					{ active: e === 'hat', preview: () => t('hat'), value: 'hat', type: 'suggested', url: { href: '#' } },
					{ active: e === 'pants', preview: () => t('pants'), value: 'pants', type: 'suggested', url: { href: '#' } },
					{ active: e === 'socks', preview: () => t('socks'), value: 'socks', type: 'suggested', url: { href: '#' } },
				];
			return (
				setTimeout(() => {
					s.bind();
				}),
				(s.store.history = l),
				o(a, { ...n, controller: s })
			);
		},
		args: { retainHistory: !0, retainTrending: !0 },
		loaders: [async () => ({ controller: await d })],
	};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: TermsListProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: AutocompleteController;
    };
  }) => {
    const [termState, setTermState] = useState('');
    const mockTerms: AutocompleteTermStore = [{
      active: termState === 'dress',
      preview: () => setTermState('dress'),
      value: 'dress',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'shirt',
      preview: () => setTermState('shirt'),
      value: 'shirt',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'shoes',
      preview: () => setTermState('shoes'),
      value: 'shoes',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'hat',
      preview: () => setTermState('hat'),
      value: 'hat',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'pants',
      preview: () => setTermState('pants'),
      value: 'pants',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }, {
      active: termState === 'socks',
      preview: () => setTermState('socks'),
      value: 'socks',
      type: 'suggested' as AutocompleteRequestModelSearchSourceEnum,
      url: {
        href: '#'
      } as UrlManager
    }];
    setTimeout(() => {
      controller.bind();
    });
    controller.store.history = mockTerms;
    return <TermsList {...args} controller={controller} />;
  },
  args: {
    retainHistory: true,
    retainTrending: true
  },
  loaders: [async () => ({
    controller: await snapInstance
  })]
}`,
			...r.parameters?.docs?.source,
		},
	},
};
const k = ['Default'];
export { r as Default, k as __namedExportsOrder, M as default };
