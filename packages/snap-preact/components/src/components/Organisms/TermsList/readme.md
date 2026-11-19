# TermsList

Renders a list of terms for autocomplete. 

## Usage

### Controller

The `controller` prop specifies a reference to the autocomplete controller.

```tsx
<TermsList controller={controller} />
```

### layout

The `layout` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';

The `_` module is used a seperator module to center|left|right justify the other elements in the layout.

```tsx
<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>
```

### verticalOptions

The `verticalOptions` prop specifies if the terms options should be rendered vertically.

```tsx
<TermsList controller={controller} verticalOptions={true}/>
``` 

### historyTitle

The `historyTitle` prop specifies the title to render above the history terms.

```tsx
<TermsList controller={controller} historyTitle={'History Terms'}/>
```

### suggestionTitle

The `suggestionTitle` prop specifies the title to render above the suggested terms.

```tsx
<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>
```

### trendingTitle

The `trendingTitle` prop specifies the title to render above the trending terms.

```tsx
<TermsList controller={controller} trendingTitle={'Trending Terms'}/>
```


### retainHistory

The `retainHistory` prop will cause the history terms to always render. 

```tsx
<TermsList controller={controller} retainHistory={true}/>
```

### retainTrending

The `retainTrending` prop will cause the Trending terms to always render. 

```tsx
<TermsList controller={controller} retainTrending={true}/>
```
