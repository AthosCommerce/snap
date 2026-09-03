# Finder 🧭

>[!IMPORTANT]
>If you have not yet initialized your snap project, please make sure to follow the steps in the Setup guide before continuing with Feature controllers.

## What is a Finder
A Finder is a guided-selling experience that narrows down products through a sequence of dropdown selections, rather than a shopper-entered query — for example, a wheel finder that walks through Year, Make, Model, and Wheel Size to land on the exact fitting part. It's distinct from [Search](https://athoscommerce.github.io/snap/snap-search): Search assumes the shopper already knows roughly what they're looking for, while Finder is built for structured, sequential narrowing when they don't.

<img src='/images/finder-example.png'/>

---

## Finder Controller
To set up a product Finder using Snap, we'll need to define a finder controller in our Snap configuration.

>[!TIP]
>See [FinderController reference](https://athoscommerce.github.io/snap/reference-controller-finder) for all available configuration options.

## Configuration
There are two types of Finder configurations, a **Hierarchy** and **Non-Hierarchy**. The difference is the type of field being used and how it is configured in the Athos Search & Product Discovery Console.

>[!IMPORTANT]
>Before configuring Finder, make sure the field you'll be using is set up correctly in the Athos Search & Product Discovery Console:
>- Marked for 'Filter' on the [Field Settings page](https://console.athoscommerce.net/data-configurations/field-settings)
>- Set as a hierarchy display type under Site Customizations > Display Settings > Filtering, with the 'Hierarchy Delimiter' (under advanced settings) matching the delimiter your field's values actually use

### Hierarchy Configuration
To use a Hierarchy configuration, ensure that the config's `fields` array contain a single entry, and that the field is of type `hierarchy` in the Athos Search & Product Discovery Console. Here is an example of a Hierarchy `FinderControllerConfig` object:

```js
// src/index.js

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		finder: [
			{
				config: {
					id: 'finder',
					url: '/search',
					fields: [{
						field: 'ss_tire',
						label: 'Wheel Finder',
						levels: ['Year', 'Make', 'Model', 'Wheel Size']
					}]
				},
				targeters: [
					{
						selector: '#athos-finder',
						component: async () => {
							return (await import('./components/Finder/Finder')).Finder;
						},
					},
				],
			},
		],
	},
});
```

### Non-Hierarchy Configuration
To use a Non-Hierarchy configuration, multiple `fields` are specified. All fields must have a `type` or `value` and NOT `hierarchy`. Facet types can be configured in the Athos Search & Product Discovery Console. Here is an example of a Non-Hierarchy `FinderControllerConfig` object:

```js
// src/index.js

const snap = new Snap({
	client: {
		globals: {
			siteId: 'REPLACE_WITH_YOUR_SITE_ID',
		},
	},
	controllers: {
		finder: [
			{
				config: {
					id: 'finder',
					url: '/search',
					fields: [
						{
							field: 'custom_wheel_size',
							label: 'Size'
						},
						{
							field: 'custom_wheel_width',
							label: 'Width'
						},
						{
							field: 'custom_wheel_bolt_pattern',
							label: 'Bolt Pattern'
						},
						{
							field: 'custom_color',
							label: 'Color'
						}
					]
				},
				targeters: [
					{
						selector: '#athos-finder',
						component: async () => {
							return (await import('./components/Finder/Finder')).Finder;
						},
					},
				],
			},
		],
	},
});
```

>[!NOTE]
>When using fields that are not of hierarchy type, `levels` are not required. Specifying `levels` will display a dropdown for each hierarchy level. Finders that use hierarchy fields will enforce selecting dropdowns in order by disabling the following dropdowns. If `levels` are not defined, a single dropdown will be displayed on the initial load. Each selection will dynamically append additional dropdowns until there are no more available selections.
---
## Component Example

```js
// src/components/Finder/Finder.jsx

import { h } from 'preact';
import { observer } from 'mobx-react-lite';

export const Finder = observer((props) => {
	const { controller } = props;
	const { store } = controller;
	const { selections, loading } = store;
	const allAreSelected = selections.every((selection) => selection.selected);

	return selections?.length > 0 ? (
		<div className="ss__finder">
			<ul className="ss__finder__selections">
				{selections.map((selection, i) => (
					<li key={i}>
						<label>
							{selection.config.label}
						</label>
						<select
							onChange={(e) => {
								selection.select(e.target.value);
							}}
							disabled={loading || selection.disabled}
						>
							{selection.values?.map((value) => {
								return (
									<option key={value.value} value={value.value} selected={selection.selected === value.value}>
										{value.label}
									</option>
								);
							})}
						</select>
					</li>
				))}
			</ul>
			<div className="ss__finder__actions">
				<button
					disabled={!allAreSelected ? 'disabled' : null}
					onClick={async (e) => {
						e.preventDefault();
						e.stopPropagation();
						controller.find();
					}}
				>
					Find
				</button>
				<button
					onClick={() => {
						controller.reset();
					}}
				>
					Reset
				</button>
			</div>
		</div>
	) : null
});
```

---
## Troubleshooting FAQ ❓

**Q: Finder renders nothing — no dropdowns show up at all. Why?**
<br>
**A:** Confirm the field is marked for 'Filter' on the [Field Settings page](https://console.athoscommerce.net/data-configurations/field-settings) in the Athos Search & Product Discovery Console — without that, the store's `selections` array stays empty and the component has nothing to render.

**Q: My hierarchy dropdowns don't cascade in order — they all show unselected values at once instead of enforcing a sequence. Why?**
<br>
**A:** Confirm the field is actually set as a hierarchy display type in Site Customizations > Display Settings > Filtering, and that the 'Hierarchy Delimiter' matches the delimiter your field's values actually use. A mismatched delimiter prevents Finder from parsing the hierarchy levels correctly.

**Q: The "Find" button stays disabled no matter what I select. Why?**
<br>
**A:** This is expected — `allAreSelected` requires every entry in `selections` to have a value before enabling Find. If a hierarchy level has no valid options for the current path, that selection can never complete, and the button will stay disabled until the config or data resolves it.

**Q: All levels show as separate dropdowns immediately, instead of appending one at a time as I make selections. Why?**
<br>
**A:** This is controlled by whether `levels` is set on the field config — specifying `levels` renders a dropdown for each one upfront, while omitting it renders a single dropdown that dynamically appends further dropdowns as selections are made.