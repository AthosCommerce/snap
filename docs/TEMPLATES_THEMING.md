## Templates Theming
Theming in Snap Templates is the primary method of customizing a template. A theme configuration defines a theme from the library to extend, theme variables, component props and responsive changes via overrides as well as global styles and product cart component specification.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'base',
		style: globalStyles,
		variables: { ... },
		overrides: { ... },
	},
	search: {
		targets: [
			{
				selector: '#athos-templates',
				component: 'Search',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input#search-input',
				component: 'AutocompleteFixed',
			},
		],
	},
	...
});
```

### Theme Configuration Overview
The project theme contains the following properties:

| Configuration Option | Description | Type | Required |
|----------------------|-------------|------|---------|
| `theme` | Theme configurations | Object | ✔️ |
| `theme.extends` | Base theme to extend | String | ✔️ |
| `theme.variables` | Theme variables (colors, breakpoints, etc.) | Object | ➖ |
| `theme.style` | Global styles | Function | ➖ |
| `theme.overrides` | Component overrides | Object | ➖ |


### Theme `extends`
The `extends` property is the base theme name to start from and will already contain variables, breakpoint overrides, and component props by default (unless choosing a blank theme)


### Theme `variables`
Each theme includes a common set of shared variables (for example, colors and breakpoints) that remain compatible when switching between themes.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'base',
		variables: {
			breakpoints: { mobile: 768, tablet: 1024, desktop: 1280 },
			colors: {
				primary: '#202223',
				secondary: '#6d7175',
				accent: '#000000',
			},
		},
	},
	...
});
```

### Theme `style`
Specifies a function that returns [emotion object styles](https://emotion.sh/docs/object-styles). This function receives theme variables as props and allows you to create styles that respond to specific breakpoints. The resulting styles are injected into the document's `<head>` element.

```tsx
const globalStyles = (theme) => {
	const { variables } = theme;
	return {
		'.ss__result': {
			background: variables.colors.primary,
		},
		[`@media (max-width: ${variables.breakpoints.tablet}px)`]: {
			'.ss__result': {
				background: variables.colors.secondary,
			},
		},
	};
};

new SnapTemplates({
	...
	theme: {
		extends: 'base',
		style: globalStyles,
	},
	...
});
```

### Theme `overrides`
Themes and components provide their own default component prop configurations. The `overrides` property in a theme configuration allows you to customize these defaults.

`overrides` is organized by breakpoint keys:

1. `default`: Base component overrides that apply to all viewport sizes.
2. Responsive keys such as `mobile`, `tablet`, and `desktop`: Breakpoint-specific overrides that are merged on top of `default`.


#### Templates Legal Props

When customizing components via theme overrides, not all component props are available. Each component defines a subset of its props as "templates legal" — these are the props that are safe and supported for use within theme configuration. Props that are not templates legal are restricted to internal use and cannot be configured through the theme.

This distinction exists to provide a stable, supported API surface for template customization while preventing access to internal props that could lead to unexpected behavior or break compatibility with future updates.

To see the full list of templates legal props for each component, refer to the **Storybook component library**. Each component's documentation in Storybook will indicate which props are available for use in theme overrides. To access the full set of component props in overrides, you must use an unlocked configuration. See [Unlocked Configuration](./templates-config#unlocked-configuration) for more details.


```tsx
import { css } from '@emotion/react';

new SnapTemplates({
	...
	theme: {
		extends: 'base',
		overrides: {
			default: {
				image: {
					lazy: false,
					style: {
						boxShadow: '2px 2px rgba(0,0,0,0.2)',
					},
				},
				button: {
					native: true,
				},
			},
		},
	},
	...
});
```


#### Theme `overrides` with Cascading Component Props
While the previous example demonstrated overriding all instances of image and button components, you may often need to target specific sub-components within a larger component or template. This is where cascading component props come into play.

Cascading component props within override groups such as `overrides.default` (and breakpoint groups like `overrides.mobile`) are available as TypeScript types. It's strongly recommended to use your IDE's IntelliSense (code completion) feature to explore available cascading component prop selectors and values.

Some components contain multiple subcomponents of the same type. For instance, the `<Pagination>` component includes icons for both `<Icon name='next'>` and `<Icon name='prev'>`. To target a specific icon, you can add a "class-like" suffix to the component selector, which will target that particular icon by its `name` attribute. When named, components will contain a `ss-name` attribute in the DOM with the available name to target.

Here's an example that demonstrates targeting specific subcomponents:

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'carousel icon.next': {
					icon: 'angle-right',
				},
				'carousel icon.prev': {
					icon: 'angle-left',
				},
				'autocompleteFixed image': {
					lazy: false,
					style: {
						boxShadow: '2px 2px rgba(0,0,0,0.2)',
					},
				},
				'autocompleteFixed button': {
					native: true,
				},
			},
		},
	},
	...
});
```

#### The `customComponent` Override Prop

All Atom, Molecule, and Organism components support a `customComponent` prop that allows you to completely replace a component with your own custom implementation. This is particularly useful when you need more control than what standard prop overrides provide.

The `customComponent` prop accepts a string that references a component registered in your configuration's `components` section. When specified, the entire component is replaced with your custom component, which receives all of the original component's props.

> [!NOTE]
> When using a locked configuration (the default), only the `result` component supports the `customComponent` prop. To use `customComponent` with other components, you must use an unlocked configuration. See [Unlocked Configuration](./templates-config#unlocked-configuration) for more details.

**Usage Example:**

First, register your custom component in the configuration:

```tsx
import { MyCustomResult } from './components/MyCustomResult';

new SnapTemplates({
	config: { ... },
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
	theme: {
		extends: 'base',
		overrides: {
			default: {
				// Replace all Result components with MyCustomResult
				result: {
					customComponent: 'MyCustomResult',
				},
			},
		},
	},
	// ...
});
```

You can also target specific instances using more specific selectors:

```tsx
new SnapTemplates({
	config: { ... },
	components: {
		result: {
			SearchResult: async () => (await import('./components/Result')).SearchResult,
			AutocompleteResult: () => AutocompleteResult,
		},
	},
	theme: {
		extends: 'base',
		overrides: {
			default: {
				// Use different custom components in different contexts
				'search result': {
					customComponent: 'SearchResult',
				},
				'autocompleteFixed result': {
					customComponent: 'AutocompleteResult',
				},
			},
		},
	},
	// ...
});
```

**Custom Component Props:**

Your custom component will receive all the same props that the original component would receive. For example, a custom Result component receives:

- `result` - The product/result data object
- `controller` - The controller instance
- `theme` - The current theme configuration
- `treePath` - The component tree path for cascading props
- Plus any additional props passed through overrides

```tsx
// MyCustomResult.tsx
import type { ResultProps } from '@athoscommerce/snap-preact/components';
export const MyCustomResult = (props: ResultProps) => {
	const { result, controller, onClick } = props;
	const core = result?.display?.mappings.core || result?.mappings?.core;
	
	return (
		<div className="my-custom-result" onClick={onClick}>
			<img src={core?.thumbnailImageUrl} alt={core?.name} />
			<h3>{core?.name}</h3>
			<span>${core?.price}</span>
		</div>
	);
};
```


#### Responsive Theme Overrides
Responsive overrides in the `overrides` property allow you to define theme configurations for different screen sizes, such as mobile, tablet, and desktop. These settings adapt your theme to various viewport sizes, enabling responsive designs.

The breakpoints for these overrides are defined in `theme.variables.breakpoints`. For instance, if `theme.variables.breakpoints` is set to `{ mobile: 768, tablet: 1024, desktop: 1280 }`, the `mobile` overrides will apply for viewports between `0-768px`, `tablet` overrides for `769-1024px`, and `desktop` overrides for `1025-1280px`. Overrides specified in `default` apply across all screen sizes, while the active responsive overrides (based on the current viewport) take precedence.

Each responsive override object can define additional prop configurations that build on top of the `default` overrides for the applicable breakpoints.

In the following example, the number of columns for the `search results` component is adjusted for each breakpoint. The default configuration sets the number of columns to 4, but this is overridden for mobile (1 column), tablet (2 columns), and desktop (3 columns) based on the viewport size.

```tsx
new SnapTemplates({
	...
	theme: {
		extends: 'base',
		overrides: {
			default: {
				'search results': {
					columns: 4,
				},
			},
			mobile: {
				'search results': {
					columns: 1,
				},
			},
			tablet: {
				'search results': {
					columns: 2,
				},
			},
			desktop: {
				'search results': {
					columns: 3,
				},
			},
		},
	},
	...
});
```
