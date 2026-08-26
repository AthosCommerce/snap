# Terms

Renders a list of terms for autocomplete. 

## Usage

### Controller

The `controller` prop specifies a reference to the autocomplete controller.

```tsx
<Terms controller={controller} terms={terms}/>
```

### Terms

The `terms` prop specifies a reference to an autocomplete term store.

```tsx
<Terms controller={controller} terms={terms} />
```

### title

The `title` prop is will display the given text above the terms area. The default value is blank. 

```tsx
<Terms controller={controller} terms={terms} title={'Suggestions'}/>
```

### vertical

The `vertical` prop is will specifies if the terms should render vertically.

```tsx
<Terms controller={controller} terms={terms} vertical={true}/>
```

### limit

The `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  

```tsx
<Terms controller={controller} terms={terms} limit={4}/>
```

### previewOnHover

The `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.

```tsx
<Terms controller={controller} terms={terms} previewOnHover={true}/>
```

### emify

The `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. 

```tsx
<Terms controller={controller} terms={terms} emify={true}/>
```

### onTermClick

The `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. 

```tsx
<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Terms component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `title` | Title text above the terms list | `controller` (AutocompleteController) |
| `term` | Individual term text/attributes | `index` (number), `numberOfTerms` (number), `term` (Term) |

### Example

```tsx
<Terms
	controller={controller}
	terms={terms}
	lang={{
		title: {
			value: 'Suggestions',
		},
		term: {
			attributes: {
				'aria-label': (data) => `suggestion ${data.index + 1} of ${data.numberOfTerms}, ${data.term.value}`,
			},
		},
	}}
/>
```
