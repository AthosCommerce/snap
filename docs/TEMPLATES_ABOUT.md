## Templates

Snap Templates is an alternative method of creating a Athos integration. The documentation in this 'Templates' section is only applicable if you are utilizing the `SnapTemplates` export. While there is overlap across other pages in the documentation, this section aims to outline the differences.

```tsx
import { SnapTemplates } from '@athoscommerce/snap-preact';
```

Snap and Snap Templates offer different approaches to creating a Athos integration. While Snap offers more flexibility, Snap Templates provides a streamlined solution for those seeking a faster integration process with pre-designed, customizable templates.

Standard Snap:
  - Provides full control over the configuration and component tree
  - Allows for custom component creation and arrangement
  - Requires more development effort and expertise

Snap Templates:
  - Utilizes pre-built, Athos-managed templates and themes
  - Enables rapid integration and customization
  - Leverages Snap's existing library of [Preact Components](https://github.com/athoscommerce/snap/tree/main/packages/snap-preact/components)
  - Requires less development effort, ideal for quick implementations
  - Offers a more guided, configuration-based approach
  - Allows for some customization through theming and overrides


### Basic Usage

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import { Content, Sidebar } from './components';
import { globalStyles } from './styles';

const templatesConfig = validateTemplatesConfig({
	config: {
		siteId: 'atkzs2',
		language: 'en',
		currency: 'usd',
		platform: 'shopify',
	},
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
	theme: {
		extends: 'base',
		variables: {
			breakpoints: {
				mobile: 767,
				tablet: 1024,
				desktop: 1280,
			},
			colors: {
				primary: '#6d7175',
				secondary: '#202223',
				accent: '#333333',
			},
		},
		style: globalStyles,
	},
	search: {
		targets: [
			{
				selector: '#athos-layout',
				component: 'Search',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.athos-ac',
				component: 'AutocompleteFixed',
			},
		]
	},
});

new SnapTemplates(templatesConfig);
```

## Transitioning from Templates to Standard Snap (SnapHybrid)

As your integration needs grow, you may find that you need more control than what Snap Templates provides. The `SnapHybrid` class allows you to transition from a Snap Templates integration to a standard Snap integration while preserving all the work you've done in your templates configuration—including themes, variables, translations, and custom components.

### Why Use SnapHybrid?

SnapHybrid bridges the gap between Snap Templates and standard Snap by:

- **Preserving your theme work**: All theme variables, colors, breakpoints, and style overrides continue to work
- **Keeping your translations**: Language translations defined in your templates config are maintained
- **Retaining custom components**: Custom result and badge components remain available
- **Enabling full Snap control**: You gain complete control over controllers, targets, and the component tree

### When to Use SnapHybrid

Consider transitioning to SnapHybrid when you need to:

- Create custom layouts that go beyond the pre-built templates
- Have fine-grained control over controller configuration
- Implement complex targeting logic with custom `onTarget` handlers
- Add multiple search or autocomplete controllers
- Integrate with advanced features not supported in Snap Templates

### Basic Usage

```tsx
import { SnapHybrid, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import { Content, Sidebar } from './components';
import { globalStyles } from './styles';

// Your existing templates configuration
const templatesConfig = validateTemplatesConfig({
	config: {
		siteId: 'atkzs2',
		language: 'en',
		currency: 'usd',
		platform: 'shopify',
	},
	theme: {
		extends: 'pike',
		variables: {
			colors: {
				primary: '#202223',
				secondary: '#6d7175',
			},
		},
		overrides: {
			default: {
				results: {
					columns: 4,
				},
			},
			mobile: {
				results: {
					columns: 2,
				},
			},
		},
	},
	translations: {
		en: {
			searchHeader: {
				titleText: {
					value: 'Search Results',
				},
			},
		},
	},
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
});

// Standard Snap configuration for full control
const snapConfig = {
	client: {
		globals: {
			siteId: 'atkzs2',
		},
	},
	controllers: {
		search: [
			{
				config: {
					id: 'search',
					plugins: [],
					settings: {
						redirects: {
							merchandising: false,
						},
					},
				},
				targets: [
					{
						selector: '#athos-content',
						component: () => Content,
						hideTarget: true,
					},
					{
						selector: '#athos-sidebar',
						component: () => Sidebar,
						hideTarget: true,
					},
				],
			},
		],
	},
};

// Create the hybrid instance
const snap = new SnapHybrid({
	templatesConfig,
	snapConfig,
});
```

### Configuration Structure

The `SnapHybrid` constructor accepts an object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `templatesConfig` | `SnapTemplatesConfig` | Your existing Snap Templates configuration |
| `snapConfig` | `SnapConfig` | Standard Snap configuration for controllers, targets, etc. |
| `services` | `SnapServices` (optional) | Custom services to override defaults |

