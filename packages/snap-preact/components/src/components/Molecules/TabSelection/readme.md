# TabSelection

Renders a set of tabs for switching between the catalogs configured in the TabManagerStore. Each tab is bound to its own controller, and selecting one makes that controller's results the active set.

## Sub-components
- Button

## Usage

### tabManager
The required `tabManager` prop specifies a reference to the `TabManagerStore`. Nothing is rendered without it, or when it contains no tabs.

When using Snap Templates the `tabManager` is created for you from the `tabs` config and passed down through the layout, so it rarely needs to be provided by hand.

```tsx
<TabSelection tabManager={tabManager} />
```

### titleText
The `titleText` prop renders an `h4` heading above the tabs. No heading is rendered unless it, or a `lang.title` value, is set.

```tsx
<TabSelection tabManager={tabManager} titleText={'Search In'} />
```

### showResultCount
The `showResultCount` prop displays the number of results each tab returned next to its label. Counts only appear once a tab's controller has loaded, so tabs configured with `prefetch: false` show no count until they are selected. Default: `true`

```tsx
<TabSelection tabManager={tabManager} showResultCount={false} />
```

### enableEmptyTabs
By default a tab whose controller returned zero results is rendered disabled, so shoppers are not sent to an empty result set. Setting `enableEmptyTabs` to `true` leaves those tabs selectable. Default: `false`

The currently active tab is never disabled, even when it has no results.

Tabs that have not loaded yet are not treated as empty - their result count is unknown, so they stay enabled.

```tsx
<TabSelection tabManager={tabManager} enableEmptyTabs={true} />
```

### onTabClick
The `onTabClick` prop specifies a callback invoked with the click event and the clicked tab. It fires before the tab is made active, and does not prevent the switch.

```tsx
<TabSelection tabManager={tabManager} onTabClick={(e, tab) => console.log('tab selected', tab.id)} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the TabSelection component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `title` | Heading text/attributes | `tabManager` (TabManagerStore) |
| `tabList` | Tab list container attributes | `tabManager` (TabManagerStore) |
| `tabButton` | Individual tab text/attributes | `tab` (Tab), `resultCount` (number \| undefined), `active` (boolean) |

### Example

```tsx
<TabSelection
	tabManager={tabManager}
	titleText={'Search In'}
	lang={{
		title: {
			value: 'Search across our catalogs',
		},
		tabList: {
			attributes: {
				'aria-label': 'Catalogs',
			},
		},
		tabButton: {
			value: (data) => `${data.tab.label || data.tab.id}${data.active ? ' (viewing)' : ''}`,
			attributes: {
				'aria-label': (data) => `${data.tab.label || data.tab.id}, ${data.resultCount} results`,
			},
		},
	}}
/>
```

