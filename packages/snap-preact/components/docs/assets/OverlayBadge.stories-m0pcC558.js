import { j as n, l, o as s } from './iframe-Bc4KSH0T.js';
import { O as a } from './OverlayBadge-BuHm4cAU.js';
import { S as i } from './snapify-DBnzfZp8.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defaultBadgeComponentMap-B7jXcfLJ.js';
import './BadgeImage-Cpq7Tc6O.js';
import './BadgeRectangle--m1iQp74.js';
import './BadgePill-BRp2jyPp.js';
import './BadgeText-DsdAO3KH.js';
import './RecommendationController-DCG7vrHg.js';
import './AutocompleteController-BKsvVDGS.js';
const p = `# OverlayBadge

Renders overlay badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to wrap elements (children) that should have overlay badges.

## Usage
\`\`\`tsx
import { OverlayBadge } from '@athoscommerce/snap-preact/components';
\`\`\`

### children
The required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. 

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### controller
The required \`controller\` prop specifies a reference to the controller.

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`tsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`tsx
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__overlay-badge\` to render.

\`\`\`tsx
<OverlayBadge
    renderEmpty
    controller={controller}
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### limit
The overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the ASD badge configuration.

\`\`\`tsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
/>
\`\`\`
`,
	S = {
		title: 'Molecules/OverlayBadge',
		component: a,
		parameters: { docs: { description: { component: p } } },
		decorators: [
			(e) =>
				l('div', {
					style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
					children: [n(e, {}), n('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } })],
				}),
		],
		argTypes: {
			result: {
				description: 'Result store Product reference',
				type: { required: !0 },
				table: { type: { summary: 'result store Product object' } },
				control: !1,
			},
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			children: {
				description: 'Overlay content to be displayed',
				type: { required: !0 },
				table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
			},
			componentMap: {
				description: 'Component map containing custom badge component',
				table: { category: 'Templates Legal', type: { summary: 'object' } },
				control: { type: 'object' },
			},
			renderEmpty: {
				description: 'Render wrapper element even when there are no badges',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			limit: {
				description: 'Number of badges per slot',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: '1' } },
				control: { type: 'number' },
			},
			...c,
		},
	},
	o = i.search({ id: 'OverlayBadge', globals: { siteId: 'atkzs2' } }),
	d = s(({ args: e, controller: r }) =>
		n(a, { ...e, controller: r, result: r?.store?.results[0], children: n('div', { style: { height: '300px', border: '2px dotted lightgrey' } }) })
	),
	t = {
		render: (e, { loaded: { controller: r } }) => n(d, { args: e, controller: r }),
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
										location: 'left/left',
										component: 'BadgeRectangle',
										priority: 1,
										enabled: !0,
										parameters: { color: '#1d4990', colorText: '#FFFFFF' },
									},
									'last-one': {
										location: 'left/left',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#515151', colorText: '#FFFFFF' },
									},
									'inventory-remaining': {
										location: 'left/left',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#382F5A', colorText: '#FFFFFF' },
									},
									'on-sale': {
										location: 'right/right',
										component: 'BadgePill',
										priority: 1,
										enabled: !0,
										parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
									},
									'save-percent': {
										location: 'right/right',
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
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: OverlayBadgeProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    return <ObservableOverlayBadge args={args} controller={controller} />;
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
              location: 'left/left',
              component: 'BadgeRectangle',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#1d4990',
                colorText: '#FFFFFF'
              }
            },
            'last-one': {
              location: 'left/left',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#515151',
                colorText: '#FFFFFF'
              }
            },
            'inventory-remaining': {
              location: 'left/left',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#382F5A',
                colorText: '#FFFFFF'
              }
            },
            'on-sale': {
              location: 'right/right',
              component: 'BadgePill',
              priority: 1,
              enabled: true,
              parameters: {
                color: '#00CEE1',
                colorText: '#FFFFFF'
              }
            },
            'save-percent': {
              location: 'right/right',
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
  }]
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const T = ['Default'];
export { t as Default, T as __namedExportsOrder, S as default };
