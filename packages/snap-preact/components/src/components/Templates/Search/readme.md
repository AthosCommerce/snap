# Search Template

Renders a Search Results Page.

## Sub-components

- Results
- NoResults
- Sidebar
- Toolbar

## Usage

### controller
The required `controller` prop specifies a reference to the search controller.

```tsx
<Search controller={controller} />
```

### resultComponent
The `resultComponent` prop specifies a custom result component to render.

```tsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Search controller={controller} resultComponent={CustomResult} />
```

### mobileDisplayAt
The `mobileDisplayAt` prop defines a CSS media query that determines when the Sidebar component switches to mobile view with a slideout. The default breakpoint is "991px". You can also pass a boolean value to enable or disable mobile view regardless of screen size.

```tsx
<Search controller={controller} mobileDisplayAt={'400px'} />
```

or 

```tsx
<Search controller={controller} mobileDisplayAt={true} />
```

### sidebarWidth
The `sidebarWidth` prop specifies the CSS width of the Sidebar component. By default, the sidebar width is `"270px"`.

```tsx
<Search controller={controller} sidebarWidth={'300px'} />
```

### hideSidebar
The `hideSidebar` prop specifies if the Sidebar component should be rendered.  

```tsx
<Search controller={controller} hideSidebar={true} />
```

### hideTopToolbar
The `hideTopToolbar` prop specifies if the top ToolBar component should be rendered.  

```tsx
<Search controller={controller} hideTopToolbar={true} />
```

### hideMiddleToolbar
The `hideMiddleToolbar` prop specifies if the middle ToolBar component should be rendered.  

```tsx
<Search controller={controller} hideMiddleToolbar={true} />
```

### hideBottomToolbar
The `hideBottomToolbar` prop specifies if the bottom ToolBar component should be rendered.  

```tsx
<Search controller={controller} hideBottomToolbar={true} />
```

### toggleSidebarButtonText
The `toggleSidebarButtonText` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. 

```tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />
```

### toggleSidebarStartClosed
The `toggleSidebarStartClosed` prop specifies if the sidebar toggle should start closed.

```tsx
<Search controller={controller} toggleSidebarStartClosed={true} />
```

### hideToggleSidebarButton
The `hideToggleSidebarButton` prop hides the Sidebar toggle button.

```tsx
<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />
```

### layoutOptions
The `layoutOptions` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. 




```tsx

type ListOption = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    default?: boolean;
    icon?: IconType | Partial<IconProps>;
    overrides?: ThemeMinimal;
    url?: UrlManager;
    available?: boolean;
}

const layoutOptions: ListOption[] = [
	{
		value: 1,
		label: 'Single Column',
		icon: 'square',
		overrides: {
			components: {
				'search results': {
					columns: 1,
				},
			},
		},
	},
	{
		value: 2,
		label: 'Two Columns',
		default: true,
		icon: 'layout-large',
		overrides: {
			components: {
				'search results': {
					columns: 2,
				},
			},
		},
	},
]

<Search controller={controller} layoutOptions={layoutOptions} />
```