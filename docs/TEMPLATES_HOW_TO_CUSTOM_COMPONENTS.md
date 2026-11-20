## Custom Component Overrides

The `customComponent` prop lets you completely replace a component in the tree with your own implementation. It works by referencing the name of a component you've registered in the `components` section of your configuration. This is only available in an **unlocked** configuration.

> [!IMPORTANT]
> `result` and the template components (such as `search` or `autocompleteFixed`) do not support `customComponent` - see [The `customComponent` Override Prop](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_THEMING.md#the-customcomponent-override-prop) for the full list and the alternatives.

### Setup

You need three things:

1. Wrap your config in `validateTemplatesConfigUnlocked` and set `unlocked: true`
2. Register your custom component in `components` under the correct component type key
3. Set `customComponent: 'YourRegisteredName'` in the appropriate theme override path

### Example: Replacing `perPage` with a Custom Component

First, write the custom component. It receives the same props the built-in `PerPage` would receive (with `customComponent` itself removed), typed as `PerPageProps`:

- `controller` - The controller instance, passed by the parent (in a Search toolbar, read the pagination store from `controller.store.pagination`, as the example below does)
- `theme` - The current theme configuration
- `treePath` - The component tree path for cascading props
- The original component's default props (for `PerPage`, `label` and `type`)
- Plus any additional props passed through overrides

`controller` is optional in that type, so guard it. Read store data from the controller rather than component-specific props: the toolbar does not pass a `pagination` prop to `perPage` (or a `sorting` prop to `sortBy`), so don't rely on those in a template.

```tsx
// components/MyPerPage.tsx
import type { PerPageProps } from '@athoscommerce/snap-preact/components';

export const MyPerPage = ({ controller }: PerPageProps) => {
	const pagination = controller?.store.pagination;
	if (!pagination) return null;

	return (
		<div className="my-per-page">
			<label>Show:</label>
			{pagination.pageSizeOptions.map((option) => (
				<button
					key={option.value}
					className={option.active ? 'active' : ''}
					onClick={() => pagination.setPageSize(option.value)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
};
```

Then register it and wire it in via `customComponent`. Because `customComponent` lives inside a theme override, the same cascading path syntax applies. You can also target a specific instance rather than replacing every `perPage` globally.

> [!NOTE]
> Async imports (`async () => (await import(...)).MyComponent`) are recommended for custom components so they are code-split and only loaded when a component that uses them first renders.

```tsx
import { SnapTemplates, validateTemplatesConfigUnlocked } from '@athoscommerce/snap-preact';

const config = validateTemplatesConfigUnlocked({
	unlocked: true,
	config: {
		siteId: '8uyt2m',
		platform: 'other',
	},
	components: {
		// Register under the 'perPage' component type
		perPage: {
			MyPerPage: async () => (await import('./components/MyPerPage')).MyPerPage,
		},
	},
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				// Replace every perPage in the theme with MyPerPage
				perPage: {
					customComponent: 'MyPerPage',
				},
				//or
				//Replace only specific perPage components based on the treePath. 
				'toolbar.top perPage': {
					customComponent: 'MyPerPage',
				}
			},
		},
	},
	search: {
		targets: [{ selector: '#search', component: 'Search' }],
	},
});

new SnapTemplates(config);
```
