# Breadcrumbs

Renders a list of breadcrumbs. 

## Usage
```tsx
import { Breadcrumbs } from '@athoscommerce/snap-preact/components';
```

### data
The `data` prop specifies an array of breadcrumb objects, or a function that returns an array of breadcrumb objects. The function is passed the controller if available.

#### breadcrumb object 

`label` - required, the breadcrumb label
 
`url` - optional, the URL of this breadcrumb

```js
const breadcrumbs = [
	{ url: '/', label: 'Home' },
	{ url: '/', label: 'Collections' },
	{ url: '/', label: 'Appliances' },
	{ label: 'Fridge' }
]

or 

const breadcrumbsFunction = (controller) => {
	const term = (controller as SearchController).store?.search?.query?.string;
	return [
		{ url: '/', label: 'Home' },
		{ url: '/', label: 'Search' },
		{ label: term }
	]
}

```

```tsx
<Breadcrumbs separator={'/'} data={breadcrumbs} />
```

### controller
The `controller` prop specifies a reference to the search controller. When provided, it is passed to a `data` function, and the default `data` becomes a `Search` crumb followed by a `Results for "<query>"` crumb (without a controller the default is a single `Search` crumb).

```tsx
<Breadcrumbs controller={controller} />
```

### separator
The `separator` prop spcifies a custom delimiter between each breadcrumb. The default separator is `'>'`. This can be a string or a JSX element.

```tsx
<Breadcrumbs separator={'>'} data={breadcrumbs} />
```


### separatorIcon
The `separatorIcon` prop spcifies an icon to render between each breadcrumb. 

```tsx
<Breadcrumbs separatorIcon={'angle-right'} data={breadcrumbs} />
```
