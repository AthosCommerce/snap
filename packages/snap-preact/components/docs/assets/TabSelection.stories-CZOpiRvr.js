import { ai as s, j as l } from './iframe-U9T2Y9ZS.js';
import { T as n } from './TabSelection-Cf26zrT4.js';
import { S as i } from './snapify-Df13VkEj.js';
import { c as b } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Button-rwG4FGUK.js';
import './useA11y-BuGQuOJb.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
const c =
		"# TabSelection\n\nRenders a set of tabs for switching between the catalogs configured in the TabManagerStore. Each tab is bound to its own controller, and selecting one makes that controller's results the active set.\n\n## Sub-components\n- Button\n\n## Usage\n\n### tabManager\nThe required `tabManager` prop specifies a reference to the `TabManagerStore`. Nothing is rendered without it, or when it contains no tabs.\n\nWhen using Snap Templates the `tabManager` is created for you from the `tabs` config and passed down through the layout, so it rarely needs to be provided by hand.\n\n```tsx\n<TabSelection tabManager={tabManager} />\n```\n\n### titleText\nThe `titleText` prop renders an `h4` heading above the tabs. No heading is rendered unless it, or a `lang.title` value, is set.\n\n```tsx\n<TabSelection tabManager={tabManager} titleText={'Search In'} />\n```\n\n### showResultCount\nThe `showResultCount` prop displays the number of results each tab returned next to its label. Counts only appear once a tab's controller has loaded, so tabs configured with `prefetch: false` show no count until they are selected. Default: `true`\n\n```tsx\n<TabSelection tabManager={tabManager} showResultCount={false} />\n```\n\n### enableEmptyTabs\nBy default a tab whose controller returned zero results is rendered disabled, so shoppers are not sent to an empty result set. Setting `enableEmptyTabs` to `true` leaves those tabs selectable. Default: `false`\n\nThe currently active tab is never disabled, even when it has no results.\n\nTabs that have not loaded yet are not treated as empty - their result count is unknown, so they stay enabled.\n\n```tsx\n<TabSelection tabManager={tabManager} enableEmptyTabs={true} />\n```\n\n### onTabClick\nThe `onTabClick` prop specifies a callback invoked with the click event and the clicked tab. It fires before the tab is made active, and does not prevent the switch.\n\n```tsx\n<TabSelection tabManager={tabManager} onTabClick={(e, tab) => console.log('tab selected', tab.id)} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the TabSelection component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `title` | Heading text/attributes | `tabManager` (TabManagerStore) |\n| `tabList` | Tab list container attributes | `tabManager` (TabManagerStore) |\n| `tabButton` | Individual tab text/attributes | `tab` (Tab), `resultCount` (number \\| undefined), `active` (boolean) |\n\n### Example\n\n```tsx\n<TabSelection\n	tabManager={tabManager}\n	titleText={'Search In'}\n	lang={{\n		title: {\n			value: 'Search across our catalogs',\n		},\n		tabList: {\n			attributes: {\n				'aria-label': 'Catalogs',\n			},\n		},\n		tabButton: {\n			value: (data) => `${data.tab.label || data.tab.id}${data.active ? ' (viewing)' : ''}`,\n			attributes: {\n				'aria-label': (data) => `${data.tab.label || data.tab.id}, ${data.resultCount} results`,\n			},\n		},\n	}}\n/>\n```\n\n",
	{ fn: d } = __STORYBOOK_MODULE_TEST__,
	w = {
		title: 'Molecules/TabSelection',
		component: n,
		parameters: { docs: { description: { component: c } } },
		args: { onTabClick: d() },
		argTypes: {
			tabManager: { description: 'Tab manager store reference', table: { type: { summary: 'tab manager store object' } }, control: { type: 'none' } },
			titleText: {
				description: 'Heading rendered above the tabs',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			showResultCount: {
				description: 'Display the result count alongside each tab label',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			enableEmptyTabs: {
				description: 'Keep tabs with no results selectable',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onTabClick: {
				description: 'Tab click event handler',
				table: { category: 'Templates Legal', type: { summary: 'function(e: Event, tab: Tab)' } },
				control: { type: 'none' },
			},
			...b,
		},
	},
	r = [
		{ id: 'TabSelectionProducts', siteId: 'atkzs2', param: 'products', label: 'Products' },
		{ id: 'TabSelectionSale', siteId: 'atkzs2', param: 'sale', label: 'Sale' },
	],
	a = r.map((e) => i.search({ id: e.id, globals: { siteId: e.siteId } })),
	t = {
		render: (e, { loaded: { tabManager: o } }) => l(n, { ...e, tabManager: o }),
		loaders: [async () => (await Promise.all(a.map((e) => e.search())), { tabManager: new s(r, a) })],
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: TabSelectionProps, {
    loaded: {
      tabManager
    }
  }: {
    loaded: {
      tabManager: TabManagerStore;
    };
  }) => {
    return <TabSelection {...args} tabManager={tabManager} />;
  },
  loaders: [async () => {
    await Promise.all(controllers.map(controller => controller.search()));
    return {
      tabManager: new TabManagerStore(tabConfigs, controllers)
    };
  }]
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const x = ['Default'];
export { t as Default, x as __namedExportsOrder, w as default };
