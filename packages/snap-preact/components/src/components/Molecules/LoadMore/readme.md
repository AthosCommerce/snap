# LoadMore

Renders a "Load More" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config

## Sub-components
- Button

## Usage

### pagination / controller
The required `pagination` (or `controller`) prop specifies a reference to the pagination store object.

```tsx
<LoadMore pagination={controller.store.pagination} />
```

```tsx
<LoadMore controller={controller} />
```

### autoFetch
The `autoFetch` prop will not render a "Show More" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. 

```tsx
<LoadMore pagination={controller.store.pagination} autoFetch={true} />
```

Can be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:

```tsx
<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />
```

### intersectionOffset + autoFetch
Requires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`

```tsx
<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />
```

### loading
The `loading` prop is not required if the `controller` prop is provided.

If the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the "Load More" button to be disabled and the spinner icon visible while fetching results.

```tsx
<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />
```

### loadMoreText
The `loadMoreText` prop sets the button text. Default value: "Load More"

```tsx
<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />
```

### color
The `color` prop specifies the color of the indicator active state.

```tsx
<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />
```

### backgroundColor
The `backgroundColor` prop specifies the background color of the indicator.

```tsx
<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />
```

### progressIndicatorWidth
The `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.

```tsx
<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />
```

### progressIndicatorSize
The `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. 

```tsx
<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />
```

### hideProgressIndicator
The `hideProgressIndicator` prop hides the progress indicator.

```tsx
<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />
```

### hideProgressText
The `hideProgressText` prop hides the progress text.

```tsx
<LoadMore pagination={controller.store.pagination} hideProgressText={true} />
```

### hideProgressIndicator + hideProgressText
When both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.

```tsx
<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />
```

### loadingIcon
The `loadingIcon` prop defines the icon used when loading. Default: `spinner`

```tsx
<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />
```

### loadingLocation
The `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the "Load More" button. Alternative value of `outside` will display the loading icon in place of the button.

### onClick
The `onClick` prop allows for a custom callback function for when the button is clicked.

```tsx
<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the LoadMore component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `loadMoreButton` | Load more button text | `pagination` (SearchPaginationStore) |
| `progressText` | Progress indicator text | `pagination` (SearchPaginationStore) |

### Example

```tsx
<LoadMore
	pagination={controller.store.pagination}
	lang={{
		loadMoreButton: {
			value: 'Load More Products',
			attributes: {
				'aria-label': 'Load more products',
			},
		},
		progressText: {
			value: (data) => `You've viewed ${data.pagination?.end} of ${data.pagination?.totalResults} products`,
		},
	}}
/>
```
