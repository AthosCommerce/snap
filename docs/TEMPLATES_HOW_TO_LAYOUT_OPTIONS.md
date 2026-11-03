## Layout Options & Layout Selector

The `layoutOptions` prop on the Search templates lets users switch between pre-defined result grid configurations at runtime. A `layoutSelector` widget in a toolbar renders the toggle UI. When a user selects an option, its `overrides.components` are applied to that template's component tree automatically.

### Basic Setup

Each option has a `value` (the only required field) and usually a `label` and/or display `icon`, an optional `default` flag, and an `overrides` block that is applied when that option is active. The option marked `default: true` is active until the user picks another; if no option is marked `default`, no option's overrides apply until the user picks one.

The overrides only take effect when a toolbar `layout` in the theme includes the `layoutSelector` module — none of the built-in toolbar layouts do, so add it in your overrides, either under an unscoped toolbar selector (`'toolbar.top'`) or under a toolbar selector that starts with the template name (`'search toolbar.top'`, as below). A toolbar override in a breakpoint group (`mobile`, `tablet`, `desktop`) only counts at that breakpoint. With tabbed search, `'search toolbar.top'` counts on every tab, and a selector that names one tab (`'search.products toolbar.top'`) only on that tab. The selector itself only renders when there are results and at least two options (set `showSingleOption: true` to show a single option).

```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				search: {
					layoutOptions: [
						{
							value: 1,
							label: '4 Wide',
							icon: 'layout-grid-4',
							default: true,
							overrides: {
								components: {
									'search results': {
										columns: 4,
									},
								},
							},
						},
						{
							value: 2,
							label: '3 Wide',
							icon: 'layout-grid-3',
							overrides: {
								components: {
									'search results': {
										columns: 3,
									},
								},
							},
						},
						{
							value: 3,
							label: '2 Wide',
							icon: 'layout-grid-2',
							overrides: {
								components: {
									'search results': {
										columns: 2,
									},
								},
							},
						},
					],
				},

				// Place the layoutSelector widget in the top toolbar
				// (sortBy and perPage stay in the default middle toolbar)
				'search toolbar.top': {
					layout: [
						['banner.header'],
						['searchHeader', '_', 'layoutSelector'],
					],
				},

				// Optional: configure the selector appearance
				'search layoutSelector': {
					type: 'list',
					hideLabel: true,
					hideOptionLabels: true,
				},
			},
		},
	},
	...
}));
```

### Responsive Layout Options

You can provide a different set of `layoutOptions` at each breakpoint. This is useful for limiting the available choices on smaller screens (e.g. only 1- or 2-column grids on mobile).

```tsx
new SnapTemplates(validateTemplatesConfig({
	...
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				search: {
					layoutOptions: [
						{
							value: 1,
							label: '4 Wide',
							icon: 'layout-grid-4',
							default: true,
							overrides: {
								components: { 'search results': { columns: 4 } },
							},
						},
						{
							value: 2,
							label: '3 Wide',
							icon: 'layout-grid-3',
							overrides: {
								components: { 'search results': { columns: 3 } },
							},
						},
					],
				},
				'search toolbar.top': {
					layout: [['banner.header'], ['searchHeader', '_', 'layoutSelector']],
				},
			},
			mobile: {
				search: {
					layoutOptions: [
						{
							value: 3,
							label: '2 Wide',
							icon: 'layout-grid-2',
							default: true,
							overrides: {
								components: { 'search results': { columns: 2 } },
							},
						},
						{
							value: 4,
							label: '1 Wide',
							icon: 'layout-grid-1',
							overrides: {
								components: { 'search results': { columns: 1 } },
							},
						},
					],
				},
			},
		},
	},
	...
}));
```

> [!NOTE]
> The user's selected layout option is persisted in the controller's storage (`sessionStorage`), so their preference is remembered across page navigations within the same browser session. The stored option is matched by `value`; if it is not in the current breakpoint's `layoutOptions`, the option marked `default` is selected instead.
