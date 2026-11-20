# Badges

> [!NOTE]
> This page covers Snap Templates. For a standard Snap integration, see [Badges](https://github.com/athoscommerce/snap/blob/main/docs/SNAP_BADGES.md) under Snap Integration.

Badges are configured in the Athos Search & Product Discovery Console (ASD) - which products get a badge, which badge template it uses, and where it is placed.

> [!NOTE]
> This feature may not be enabled by default. Please contact your account manager to enable this feature.

## Displaying Badges

The default `result` component renders badges automatically, in two kinds of location:

- **Overlay** badges are placed over the product image, in the `left` and `right` slots (`overlayBadge`).
- **Callout** badges are placed inline in the product details (`calloutBadge`).

Badges show in search and recommendation results, and are hidden in the autocomplete templates by the default theme.

The built-in badge templates render with the `BadgeText`, `BadgePill`, `BadgeRectangle` and `BadgeImage` components - see the [Preact Component Library](https://athoscommerce.github.io/snap/preact-components) for each.

Use theme overrides to hide badges or change how many render in each slot:

| Selector | Prop | Description | Default |
| :--- | :--- | :--- | :---: |
| `result` | `hideBadge` | Hides both the overlay and callout badges on the result | ➖ |
| `overlayBadge` | `limit` | Number of badges to render in each overlay slot. Badges beyond one stack in the order set in ASD | `1` |
| `calloutBadge` | `limit` | Number of badges to render in the callout slot | `1` |
| `overlayBadge`, `calloutBadge` | `renderEmpty` | Render the badge wrapper element even when there are no badges | ➖ |

```tsx
import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';

new SnapTemplates(validateTemplatesConfig({
	config: {
		siteId: 'REPLACE_WITH_YOUR_SITE_ID',
	},
	theme: {
		extends: 'pike',
		overrides: {
			default: {
				// hide badges on results in the carousel recommendation template
				'recommendation result': {
					hideBadge: true,
				},
				// stack up to two badges in each overlay slot
				overlayBadge: {
					limit: 2,
				},
			},
		},
	},
	search: {
		targets: [{ selector: '#athos-templates', component: 'Search' }],
	},
}));
```

## Custom Badge Components

A custom badge template lets you design your own badge component and its settings, and select it in ASD like the built-in ones. It takes three steps:

1. **Create the badge template** with the Snapfu CLI, which generates the badge component and a `.json` file describing the template:

```sh
snapfu badges init CustomBadge
```

2. **Sync it to ASD**, so it can be selected when configuring badges:

```sh
snapfu badges sync CustomBadge
```

3. **Register the component** under `components.badge`. The key must match the `component` value in the badge template's `.json` file exactly (it is case-sensitive):

```tsx
new SnapTemplates(validateTemplatesConfig({
	// ...
	components: {
		badge: {
			CustomBadge: async () => (await import('./components/Badges/CustomBadge/CustomBadge')).CustomBadge,
		},
	},
}));
```

Registered badge components are used by both `overlayBadge` and `calloutBadge`, wherever a badge with that template is placed. A registered component with the same name as a built-in one (for example `BadgePill`) replaces it.

The badge component receives the badge's data as props - including its `tag`, `value` and `location` - and each template parameter as its own prop, named after the parameter (also available together as `parameters`):

```jsx
// src/components/Badges/CustomBadge/CustomBadge.jsx
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

export const CustomBadge = observer((props) => {
	const { tag, value, bg_color } = props;

	return (
		<div css={css({ background: bg_color })} className={`ss__badge-custombadge ss__badge-custombadge--${tag}`}>
			{value}
		</div>
	);
});
```

For the badge template `.json` fields, parameter types and custom badge locations, see the [Custom Badge Templates](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_CUSTOM_BADGE_TEMPLATES.md#badge-template-overview-json-file) reference - the template files are the same for Snap and Snap Templates.
