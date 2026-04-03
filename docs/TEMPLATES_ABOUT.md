## Templates

Snap Templates is an alternative method of creating a Athos integration. The documentation in this 'Templates' section is only applicable if you are utilizing the `SnapTemplates` export. While there is overlap across other pages in the documentation, this section aims to outline the differences.

```jsx
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

```jsx
import { SnapHybrid } from '@athoscommerce/snap-preact';
import { Content, Sidebar } from './components';

// Your existing templates configuration
const templatesConfig = {
	unlocked: true,
	config: {
		siteId: '8uyt2m',
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
};

// Standard Snap configuration for full control
const snapConfig = {
	client: {
		globals: {
			siteId: '8uyt2m',
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
| `templatesConfig` | `SnapIntegrationConfig` | Your existing Snap Templates configuration (must have `unlocked: true`) |
| `snapConfig` | `SnapConfig` | Standard Snap configuration for controllers, targets, etc. |
| `services` | `SnapServices` (optional) | Custom services to override defaults |

### What Transfers from Templates Config

When using SnapHybrid, the following from your `templatesConfig` are available:

| Config Section | What's Preserved |
|----------------|------------------|
| `config` | Site ID, language, currency, platform settings |
| `theme.extends` | Base theme selection |
| `theme.variables` | Colors, breakpoints, custom variables |
| `theme.overrides` | Component prop overrides (default and responsive) |
| `theme.style` | Global style function |
| `translations` | All language translations |
| `components` | Custom registered components |
