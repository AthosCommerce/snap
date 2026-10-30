import { j as n } from './iframe-U9T2Y9ZS.js';
import { N as s } from './NoResults-BrPIS2mH.js';
import { c as a } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useCreateController-B8azvRjq.js';
import './useLang-Dx66cFD0.js';
import './handleize-xLHhB8k5.js';
const i = `# NoResults

Renders no results verbiage. Props that accept strings in this component will render HTML contained within them.

## Usage

### contentSlot
The \`contentSlot\` prop provides a slot to provide custom content. This can be JSX, string, or stringified HTML. 

\`\`\`tsx
const slot = <div>Nothing found..</div>

<NoResults contentSlot={slot} />
\`\`\`

### hideSuggestions
The \`hideSuggestions\` prop will prevent the suggestions list and title from rendering.

\`\`\`tsx
<NoResults hideSuggestions={true} />
\`\`\`

### hideContactsTitleText
The \`hideContactsTitleText\` prop allows you to hide the contacts title.

\`\`\`tsx
<NoResults hideContactsTitleText={true} />
\`\`\`

### suggestionsTitleText
The \`suggestionsTitleText\` prop allows you to set the inner text of the suggestions title.

\`\`\`tsx
<NoResults suggestionsTitleText={'suggestions'} />
\`\`\`

### hideSuggestionsTitleText
The \`hideSuggestionsTitleText\` prop allows you to hide the suggestions title.

\`\`\`tsx
<NoResults hideSuggestionsTitleText={true} />
\`\`\`

### suggestionsList
The \`suggestionsList\` prop takes an array of strings to render as suggestions 

\`\`\`tsx
const list = [
	\`Check for misspellings.\`,
	\`Remove possible redundant keywords (ie. "products").\`,
	\`Use other words to describe what you are searching for.\`,
],

<NoResults suggestionsList={list} />
\`\`\`

### hideContact
The \`hideContact\` prop will prevent the contact list and title from rendering.

\`\`\`tsx
<NoResults hideContact={true} />
\`\`\`

### contactsTitleText
The \`contactsTitleText\` prop allows you to set the inner text contacts title.

\`\`\`tsx
<NoResults contactsTitleText={'contacts'} />
\`\`\`

### templates
The \`templates\` prop allows you to configure and display product recommendations when no search results are found. This prop accepts an object with a recommendation key, which can enable or customize the recommendation module.

Example usage:


\`\`\`tsx
const templatesConfig = {
    recommendation: {
      enabled: true,
      component: 'Recommendation', // (optional) custom recommendation component name
      resultComponent: 'Result',   // (optional) custom result component name
      config: {                    // (optional) additional configuration for recommendations
        id: 'my-recs-id',
        tag: 'no-results',
      },
    },
  }

<NoResults templates={templatesConfig} />
\`\`\`

### contactsList
The \`contactsList\` prop takes an array of contact objects to render in the contact section. each object takes a title, and content.

\`\`\`tsx
const list = [
			{
				title: \`Address\`,
				content: \`123 Street Address<br />City, State, Zipcode\`,
			},
			{
				title: \`Hours\`,
				content: \`Monday - Saturday, 00:00am - 00:00pm<br />Sunday, 00:00am - 00:00pm\`,
			},
			{
				title: \`Phone\`,
				content: \`<a href="tel:1234567890">123-456-7890</a>\`,
			},
			{
				title: \`Email\`,
				content: \`<a href="mailto:email@site.com">email@site.com</a>\`,
			},
		],

<NoResults contactsList={list} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the NoResults component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`suggestionsTitleText\` | Suggestions section title | \`controller\` (SearchController) |
| \`suggestionsList\` | Suggestions list HTML content | \`controller\` (SearchController) |
| \`contactsTitleText\` | Contact info section title | \`controller\` (SearchController) |
| \`contactsList\` | Contact info list HTML content | \`controller\` (SearchController) |

### Example

\`\`\`tsx
<NoResults
	controller={controller}
	lang={{
		suggestionsTitleText: {
			value: 'Try searching for:',
		},
		contactsTitleText: {
			value: 'Need help? Contact us:',
		},
	}}
/>
\`\`\`
`,
	d = {
		title: 'Organisms/NoResults',
		component: s,
		parameters: { docs: { description: { component: i } } },
		decorators: [(o) => n('div', { style: { maxWidth: '900px' }, children: n(o, {}) })],
		argTypes: {
			contentSlot: {
				description: 'Slot for adding custom content',
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
				control: { type: 'text' },
			},
			hideSuggestions: {
				description: 'Hide suggestions',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			suggestionsTitleText: {
				description: 'Suggestions title',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
				control: { type: 'text' },
			},
			suggestionsList: {
				description: 'list of suggestions to display',
				table: { category: 'Templates Legal', type: { summary: 'string[]' } },
				control: { type: 'object', defaultValue: [] },
			},
			hideContact: {
				description: 'Hide contact section',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideContactsTitleText: {
				description: 'Hide contact section title',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideSuggestionsTitleText: {
				description: 'Hide suggestions section title',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			contactsTitleText: {
				description: 'contact section title',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string' },
					defaultValue: { summary: `Still can't find what you're looking for? <a href="/contact-us">Contact us</a>.` },
				},
				control: { type: 'text' },
			},
			contactsList: {
				description: 'list of contact lines to display',
				table: { category: 'Templates Legal', type: { summary: '{ title, content }[]' } },
				control: { type: 'object' },
			},
			templates: {
				description: 'templates to render',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			...a,
		},
	},
	t = {},
	e = { args: { templates: { recommendation: { enabled: !0 } } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: '{}', ...t.parameters?.docs?.source } } };
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    templates: {
      recommendation: {
        enabled: true
      }
    }
  }
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const h = ['Default', 'WithRecommendations'];
export { t as Default, e as WithRecommendations, h as __namedExportsOrder, d as default };
