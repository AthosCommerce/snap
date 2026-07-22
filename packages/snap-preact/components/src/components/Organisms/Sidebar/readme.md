# Sidebar

Renders a sidebar element containing a title, FilterSummary, SortBy, PerPage, and Facets components.


## Components Used
- FilterSummary
- Facets
- SortBy
- PerPage
- Button

## Usage

### controller
The required `controller` prop specifies a reference to the search controller.

```tsx
<Sidebar controller={controller} />
```

### layout 
The `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.

The `_` module is used a seperator module to center|left|right justify the other elements in the layout.

available modules to use in the layout are 

`filterSummary`, `sortBy`, `perPage`, `facets`, `banner.left`, `paginationInfo`, `layoutSelector`, `_`;

```tsx
<Sidebar controller={controller} layout={['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left']}/>
```

### hideTitleText
The `hideTitleText` prop will disable the sidebar title from rendering.

```tsx
<Sidebar controller={controller} hideTitleText />
```

### titleText
The `titleText` prop will change the inner text of the sidebar title.

```tsx
<Sidebar controller={controller} titleText={'Filter By: '} />
```

### sticky
The `sticky` prop enables the sidebar to remain fixed at the top of the viewport as the user scrolls the page.

```tsx
<Sidebar controller={controller} sticky={true} />
```

### stickyOffset
The `stickyOffset` prop sets the number of pixels from the top of the viewport that the sticky sidebar should be offset. This is useful if you have a fixed header or other elements at the top of the page and want the sidebar to remain visible below them when scrolling.

```tsx
<Sidebar controller={controller} stickyOffset={50} />
```

### hideHeader
The `hideHeader` prop will disable the sidebar header from rendering. 

```tsx
<Sidebar controller={controller} hideHeader />
```

### hideCloseButton
The `hideCloseButton` prop will disable the close Button component from rendering.

```tsx
<Sidebar controller={controller} hideCloseButton />
```

### closeButtonIcon 
The `closeButtonIcon` prop specifies the name of an icon to add to the close sidebar button.

```tsx
<Sidebar controller={controller} closeButtonIcon={'close'} />
```

### closeButtonText
The `closeButtonText` prop will change the inner text of the sidebar close button.

```tsx
<Sidebar controller={controller} closeButtonText={'Close Sidebar'} />
```

### hideFooter
The `hideFooter` prop will disable the sidebar footer from rendering. 

```tsx
<Sidebar controller={controller} hideFooter />
```

### hideApplyButton
The `hideApplyButton` prop will disable the apply Button component from rendering.

```tsx
<Sidebar controller={controller} hideApplyButton />
```

### applyButtonText
The `applyButtonText` prop will change the inner text of the apply Button component.

```tsx
<Sidebar controller={controller} applyButtonText={'Apply Changees'} />
```

### applyButtonIcon 
The `applyButtonIcon` prop specifies the name of an icon to add to the sidebar apply filters button.

```tsx
<Sidebar controller={controller} applyButtonIcon={'cog'} />
```

### hideClearButton
The `hideClearButton` prop will disable the clear all Button component from rendering.

```tsx
<Sidebar controller={controller} hideClearButton />
```

### clearButtonText
The `clearButtonText` prop will change the inner text of the clear all Button component.

```tsx
<Sidebar controller={controller} clearButtonText={'Start Over'} />
```

### clearButtonIcon 
The `clearButtonIcon` prop specifies the name of an icon to add to the sidebar clear all filters button.

```tsx
<Sidebar controller={controller} clearButtonIcon={'close'} />
```


### hideOpenButtonText 
The `hideOpenButtonText` prop hides the open button text.

```tsx
<Sidebar controller={controller} openButtonText={'open'} hideOpenButtonText={true} />
```

### hideClearButtonText 
The `hideClearButtonText` prop hides the clear button text.

```tsx
<Sidebar controller={controller} clearButtonText={'start over'} hideClearButtonText={true} />
```

### hideApplyButtonText 
The `hideApplyButtonText` prop hides the apply button text.

```tsx
<Sidebar controller={controller} applyButtonText={'Apply Changees'} hideApplyButtonText={true} />
```

### hideCloseButtonText 
The `hideCloseButtonText` prop hides the close button text.

```tsx
<Sidebar controller={controller} closeButtonText={'close'} hideCloseButtonText={true} />
```