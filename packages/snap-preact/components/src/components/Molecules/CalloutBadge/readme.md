# CalloutBadge

Renders callout badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a `Result` component to display callout badges.

## Usage
```tsx
import { CalloutBadge } from '@athoscommerce/snap-preact/components';
```

### result
The required `result` prop specifies a reference to a product object from the `results` store array.

```tsx
<CalloutBadge result={result} />
```

### componentMap
The `componentMap` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

```tsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
```

The `componentMap` also supports async functions for dynamic importing of badges.

```tsx
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
/>
```

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element `ss__callout-badge` to render.

```tsx
<CalloutBadge
    renderEmpty
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
```

### limit
The callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the callout slot. The order of the stack is determined by the ASD badge configuration.

```tsx
<CalloutBadge
    limit={3}
    result={result} 
/>
```

### tag
The `tag` prop specifies the location name of this callout location, the default value is `callout`. 

When a custom `tag` is provided it also becomes the component `name`, so named theme selectors (e.g. `'calloutBadge.callout-secondary'`) can target that instance. Default usage (no `tag` prop) remains unnamed.

```tsx
<CalloutBadge tag={'callout'} result={result} />
```
