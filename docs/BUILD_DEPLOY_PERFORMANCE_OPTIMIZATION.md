# Performance Optimization

## Script Loading Optimization

### Script Placement

Search and Category pages are critical to the initial display of content. Therefore it is recommended to install the Snap script tag in the `<head>` so that content is fetched and displayed as soon as possible.


### Async/Defer Script Attributes

On Search and Category pages, it is not recommended to use `async` or `defer` attributes on the script tag as these will prevent the Snap script from executing immediately and will further delay the initial display of content. 

For other pages that only contain Recommendations, Autocomplete, or Finders (non-critical content), the `defer` attribute can be added conditionally to improve page load performance.

### Resource Hints

Use link tags with `preconnect` and `dns-prefetch` attributes to establish early connections to Snap CDN and Athos API domains:

```html
<head>
  <!-- Preconnect to Snap CDN -->
  <link rel="preconnect" href="https://snapui.athoscommerce.io">
  <link rel="dns-prefetch" href="https://snapui.athoscommerce.io">
  
  <!-- Preconnect to Athos API -->
  <link rel="preconnect" href="https://[siteId].a.athoscommerce.net">
  <link rel="dns-prefetch" href="https://[siteId].a.athoscommerce.net">
</head>
```


## Optimizing Largest Contentful Paint (LCP)


### Image Optimization

For images that are part of the LCP element (above the fold), consider disabling lazy loading.

The [Image](https://athoscommerce.github.io/snap/preact-components?params=%3Fpath%3D%2Fstory%2Fatoms-image--default) component has lazy loading enabled by default. 

Otherwise, if you are not using the `Image` component, ensure product images are optimized by setting the `loading` attribute to `lazy`: 

```tsx
<img 
  src={result.imageUrl} 
  alt={result.name}
  loading="lazy"
/>
```

### Prefetch Strategies

On pages whose context declares `page = { type: 'search' }` or `page = { type: 'category' }`, search targeters prefetch by default: the controller's search is issued as soon as the bundle executes, before the target element is found in the DOM. Set `prefetch: true` on a targeter to force this on any page, or `prefetch: false` to opt a targeter out (for example when the page type is set but the results are rendered elsewhere).

Use `prefetch: true` sparingly and only for components that are likely to be viewed:

```tsx
const config = {
  controllers: {
    search: [{
      config: {
        id: 'search',
      },
      targeters: [{
        selector: '#search-results',
        prefetch: true // Triggers search immediately, before target is found
      }]
    }]
  }
};
```

Avoid prefetching when:
- Component is below the fold
- Component might not be needed (conditional rendering)
- Page already has heavy resource usage

## Optimizing Interaction to Next Paint (INP)

### Optimize Event Middleware

Snap's event middleware system allows you to hook into controller lifecycle events. When adding middleware, ensure you're not adding synchronous work that blocks the main thread:

```tsx
// Good: Use async middleware for non-blocking operations
controller.on('beforeSearch', async ({ controller, request }, next) => {
  // Perform async work that doesn't block interaction
  await someAsyncOperation();
  await next();
});

// Avoid: Adding heavy synchronous operations in middleware
// This will delay INP response
controller.on('beforeSearch', ({ controller, request }, next) => {
  // Heavy synchronous computation - blocks INP
  heavyComputation();
  next();
});
```


## Optimizing Cumulative Layout Shift (CLS)

### Reserve Space for Components

By adding a `min-height` to elements that are being targeted by Snap components, you can always reserve space for Snap components to prevent layout shifts. This is especially important for elements that are above the fold. By default, the `min-height` style will automatically be removed when the component is rendered.

```html
<div id="athos-content" style="min-height: 100vh;">
  <!-- Component will render here -->
</div>
```

### Use Skeleton Components

We recommended using server-side rendered skeletons inside the target elements for the best LCP performance. If this is the case, also set the `renderAfterSearch` property to `true`.

```html
<div id="athos-content" style="min-height: 100vh;">
  <div style="width: 25%; height: 300px; background-color: #f0f0f0;"></div>
  <div style="width: 25%; height: 300px; background-color: #f0f0f0;"></div>
  <div style="width: 25%; height: 300px; background-color: #f0f0f0;"></div>
  <div style="width: 25%; height: 300px; background-color: #f0f0f0;"></div>
</div>
```

```tsx
import { Snap } from '@athos/snap-preact';

const config = {
  controllers: {
    search: [{
      config: {
        id: 'search',
      },
      targeters: [{
        selector: '#athos-content',
        component: () => import('./Search'),
        renderAfterSearch: true, // Render the skeleton after search is ready
      }]
    }]
  }
};
```

### Set Image Dimensions

Ensure product images have defined dimensions to prevent layout shifts:

```css
.ss__image img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* Maintain aspect ratio */
}
```

Or use the `style` prop on Image components:

```tsx
<Image 
  src={result.imageUrl}
  alt={result.name}
  style={{ aspectRatio: '1 / 1' }}
/>
```

