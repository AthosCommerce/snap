# Badges

> [!NOTE]
> This page covers standard Snap integrations. For Snap Templates, see [Badges](https://github.com/athoscommerce/snap/blob/main/docs/TEMPLATES_BADGES.md) under Templates Integration.

Badges are self-configured in the Athos Search & Product Discovery Console. 

> [!NOTE]
> This feature may not be enabled by default. Please contact your account manager to enable this feature.

To displays badges the Result card must include the [OverlayBadge](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fmolecules-overlaybadge--default) and [CalloutBadge](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fmolecules-calloutbadge--default) components


## OverlayBadge

The `OverlayBadge` component wraps elements (children) that should have badges overlayed - typically the product image

```tsx
<OverlayBadge controller={controller} result={controller.store.results[0]}>
	<img src='/images/example.png'/>
</OverlayBadge>
```

## CalloutBadge

The `CalloutBadge` component displays badges inline and can be placed in any position in the Result card

```tsx
<CalloutBadge result={controller.store.results[0]} />
```

## Badge Components
The `OverlayBadge` and `CalloutBadge` components are responsible for displaying badges

The default badges available: 

- [BadgePill](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-badgepill--default)
- [BadgeText](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-badgetext--default)
- [BadgeRectangle](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-badgerectangle--default)
- [BadgeImage](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-badgeimage--default)

Additional custom badge components can be created and synced to the Athos Search & Product Discovery Console using the Snapfu CLI. See [Custom Badge Templates reference](https://github.com/athoscommerce/snap/blob/main/docs/REFERENCE_CUSTOM_BADGE_TEMPLATES.md)