import { s as m, j as s } from './iframe-CXSVAHru.js';
import { T as a } from './Terms-irMOQ8EP.js';
import { S as i } from './snapify-CnhKBMyG.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './createHoverProps-B_zlUBHN.js';
import './RecommendationController-CRNIe9PS.js';
import './AutocompleteController-CNarJwx-.js';
const u =
		"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store.\n\n```tsx\n<Terms controller={controller} terms={terms} />\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```tsx\n<Terms controller={controller} terms={terms} title={'Suggestions'}/>\n```\n\n### vertical\n\nThe `vertical` prop is will specifies if the terms should render vertically.\n\n```tsx\n<Terms controller={controller} terms={terms} vertical={true}/>\n```\n\n### limit\n\nThe `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```tsx\n<Terms controller={controller} terms={terms} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```tsx\n<Terms controller={controller} terms={terms} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```tsx\n<Terms controller={controller} terms={terms} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```tsx\n<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Terms component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Title text above the terms list | `controller` (AutocompleteController) |\n| `term` | Individual term text/attributes | `index` (number), `numberOfTerms` (number), `term` (Term) |\n\n### Example\n\n```tsx\n<Terms\n	controller={controller}\n	terms={terms}\n	lang={{\n		title: {\n			value: 'Suggestions',\n		},\n		term: {\n			attributes: {\n				'aria-label': (data) => `suggestion ${data.index + 1} of ${data.numberOfTerms}, ${data.term.value}`,\n			},\n		},\n	}}\n/>\n```\n",
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	x = {
		title: 'Molecules/Terms',
		component: a,
		parameters: { docs: { description: { component: u } } },
		decorators: [(r) => s(r, {})],
		args: { onTermClick: p() },
		argTypes: {
			controller: {
				description: 'autocomplete controller reference',
				type: { required: !0 },
				table: { type: { summary: 'autocomplete controller object' } },
				control: !1,
			},
			terms: {
				description: 'autocomplete term store reference',
				type: { required: !0 },
				table: { type: { summary: 'autocomplete term store object' } },
				control: !1,
			},
			title: {
				description: 'terms title',
				type: { required: !1 },
				table: { type: { summary: 'string' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			limit: {
				description: 'adjust the number of terms to show',
				type: { required: !1 },
				table: { type: { summary: 'number' }, category: 'Templates Legal' },
				control: { type: 'number' },
			},
			previewOnHover: {
				description: 'invoke term preview upon focus',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			emIfy: {
				description: 'highlight the query matched section of the term',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
				control: { type: 'boolean' },
			},
			onTermClick: {
				description: 'custom onClick event handler for Terms',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			vertical: {
				description: 'boolean to adjust if each term should render in a vertically',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			...c,
		},
	},
	d = i.autocomplete({ id: 'Autocomplete-Terms', selector: '#searchInput2', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
	n = {
		render: (r, { loaded: { controller: o } }) => {
			const [e, t] = m(''),
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
					o.bind();
				}),
				s('div', { style: { maxWidth: r?.vertical ? '500px' : '1200px' }, children: s(a, { ...r, controller: o, terms: l }) })
			);
		},
		loaders: [async () => ({ controller: await d })],
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: TermsProps, {
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
    return <div style={{
      maxWidth: args?.vertical ? '500px' : '1200px'
    }}>
                <Terms {...args} controller={controller} terms={mockTerms} />
            </div>;
  },
  loaders: [async () => ({
    controller: await snapInstance
  })]
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const k = ['Default'];
export { n as Default, k as __namedExportsOrder, x as default };
