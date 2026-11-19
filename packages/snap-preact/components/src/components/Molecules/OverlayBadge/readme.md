# OverlayBadge

Renders overlay badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a `Result` component to wrap elements (children) that should have overlay badges.

## Usage
```tsx
import { OverlayBadge } from '@athoscommerce/snap-preact/components';
```

### children
The required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. 

```tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

### controller
The required `controller` prop specifies a reference to the controller.

```tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

### result
The required `result` prop specifies a reference to a product object from the `results` store array.

```tsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

### componentMap
The `componentMap` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

```tsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

The `componentMap` also supports async functions for dynamic importing of badges.

```tsx
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element `ss__overlay-badge` to render.

```tsx
<OverlayBadge
    renderEmpty
    controller={controller}
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```

### limit
The overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the ASD badge configuration.

```tsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
```
