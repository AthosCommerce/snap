import { j as n, l, o as s } from './iframe-U9T2Y9ZS.js';
import { C as r } from './CalloutBadge-hFFhia-q.js';
import { S as c } from './snapify-Df13VkEj.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const p = `# CalloutBadge

Renders callout badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to display callout badges.

## Usage
\`\`\`tsx
import { CalloutBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`tsx
<CalloutBadge result={result} />
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`tsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`tsx
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
/>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__callout-badge\` to render.

\`\`\`tsx
<CalloutBadge
    renderEmpty
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

### limit
The callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the callout slot. The order of the stack is determined by the ASD badge configuration.

\`\`\`tsx
<CalloutBadge
    limit={3}
    result={result} 
/>
\`\`\`

### tag
The \`tag\` prop specifies the location name of this callout location, the default value is \`callout\`. 

When a custom \`tag\` is provided it also becomes the component \`name\`, so named theme selectors (e.g. \`'calloutBadge.callout-secondary'\`) can target that instance. Default usage (no \`tag\` prop) remains unnamed.

\`\`\`tsx
<CalloutBadge tag={'callout'} result={result} />
\`\`\`
`,
	T = {
		title: 'Molecules/CalloutBadge',
		component: r,
		parameters: { docs: { description: { component: p } } },
		decorators: [
			(e) =>
				l('div', {
					style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
					children: [
						n('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
						n('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } }),
						n(e, {}),
					],
				}),
		],
		argTypes: {
			result: {
				description: 'Result store Product reference',
				type: { required: !0 },
				table: { type: { summary: 'result store Product object' } },
				control: !1,
			},
			componentMap: {
				description: 'Component map containing custom badge component',
				table: { type: { summary: 'object' }, category: 'Templates Legal' },
				control: { type: 'object' },
			},
			renderEmpty: {
				description: 'Render wrapper element even when there are no badges',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			limit: {
				description: 'Number of badges per slot',
				table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: '1' } },
				control: { type: 'number' },
			},
			tag: {
				description: 'Callout location tag; a custom tag also names the component so `calloutBadge.<tag>` theme selectors can target it',
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'callout' } },
				control: { type: 'text' },
			},
			...i,
		},
	},
	o = c.search({ id: 'CalloutBadge', globals: { siteId: 'atkzs2' } }),
	u = s(({ args: e, controller: a }) => n(r, { ...e, result: a?.store?.results[0] })),
	t = {
		render: (e, { loaded: { controller: a } }) => n(u, { args: e, controller: a }),
		loaders: [
			async () => (
				o.on('afterSearch', ({ response: e }) => {
					(e.search.results[0].badges = [
						{ tag: 'free-shipping', value: 'Free Shipping' },
						{ tag: 'last-one', value: 'Last One!' },
						{ tag: 'on-sale', value: 'On Sale' },
						{ tag: 'save-percent', value: 'Save 30%' },
						{ tag: 'inventory-remaining', value: '1 in stock' },
					]),
						(e.meta = {
							...e.meta,
							badges: {
								locations: {
									left: [{ tag: 'left', name: 'Left' }],
									right: [{ tag: 'right', name: 'Right' }],
									callout: [{ tag: 'callout', name: 'Callout' }],
								},
								tags: {
									'free-shipping': {
										location: 'callout/callout',
										component: 'BadgeRectangle',
										priority: 1,
										enabled: !0,
										parameters: { color: '#1d4990', colorText: '#FFFFFF' },
									},
									'last-one': {
										location: 'callout/callout',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#515151', colorText: '#FFFFFF' },
									},
									'inventory-remaining': {
										location: 'callout/callout',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#382F5A', colorText: '#FFFFFF' },
									},
									'on-sale': {
										location: 'left/left',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
									},
									'save-percent': {
										location: 'left/left',
										component: 'BadgeRectangle',
										priority: 1,
										enabled: !0,
										parameters: { color: '#8F6CF6', colorText: '#FFFFFF' },
									},
								},
							},
						});
				}),
				await o.search(),
				{ controller: o }
			),
		],
		args: { tag: 'callout' },
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: CalloutBadgeProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableCalloutBadge args={args} controller={controller} />;
  },
  loaders: [async () => {
    snapInstance.on('afterSearch', ({
      response
    }: any) => {
      /**
       * Mock badge response - TODO: remove when badges are available in response
       *
       * Controller is shared between stories, therefore both badges are defined
       * here so that when switching between OverlayBadge and CalloutBadge stories,
       * a page reload is not required
       */

      response.search.results[0].badges = [{
        tag: 'free-shipping',
        value: 'Free Shipping'
      }, {
        tag: 'last-one',
        value: 'Last One!'
      }, {
        tag: 'on-sale',
        value: 'On Sale'
      }, {
        tag: 'save-percent',
        value: 'Save 30%'
      }, {
        tag: 'inventory-remaining',
        value: '1 in stock'
      }];
      response.meta = {
        ...response.meta,
        badges: {
          locations: {
            left: [{
              tag: 'left',
              name: 'Left'
            }],
            right: [{
              tag: 'right',
              name: 'Right'
            }],
            callout: [{
              tag: 'callout',
              name: 'Callout'
            }]
          },
          tags: {
            'free-shipping': {
              location: 'callout/callout',
              component: 'BadgeRectangle',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#1d4990',
                colorText: '#FFFFFF'
              }
            },
            'last-one': {
              location: 'callout/callout',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#515151',
                colorText: '#FFFFFF'
              }
            },
            'inventory-remaining': {
              location: 'callout/callout',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#382F5A',
                colorText: '#FFFFFF'
              }
            },
            'on-sale': {
              location: 'left/left',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#00CEE1',
                colorText: '#FFFFFF'
              }
            },
            'save-percent': {
              location: 'left/left',
              component: 'BadgeRectangle',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#8F6CF6',
                colorText: '#FFFFFF'
              }
            }
          }
        }
      };
    });
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }],
  args: {
    tag: 'callout'
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const w = ['Default'];
export { t as Default, w as __namedExportsOrder, T as default };
