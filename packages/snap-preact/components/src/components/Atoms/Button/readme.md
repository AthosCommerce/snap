# Button

Renders a native or custom button.

## Usage
```tsx
import { Button } from '@athoscommerce/snap-preact/components';
```

### content
The `content` prop specifies the button text. This can be a string or a JSX element.

```tsx
<Button content={"click me!"} />
```
 
Or alternatively as children:

```tsx
<Button>click me!</Button>
```

### disabled
The `disabled` prop will disable the button from being clickable.

```tsx
<Button content={"click me!"} disabled />
```

### native
The `native` prop will use a native html `<button>` element.

```tsx
<Button content={"click me!"} native />
```

### backgroundColor
The `backgroundColor` prop specifies the button background color.

```tsx
<Button content={"click me!"} backgroundColor={'#eeeeee'} />
```

### icon
The `icon` prop specifies the name of the icon you wish to add to the button content. Note this currently only supports icons from our list of available icons. (see Icon Component for more details)

```tsx
<Button content={"click me!"} icon={'cog'} />
```

### borderColor
The `borderColor` prop specifies the button border color.

```tsx
<Button content={"click me!"} borderColor={'#cccccc'} />
```
### color
The `color` prop specifies the button text color.

```tsx
<Button content={"click me!"} color={'#222222'} />
```

### disableA11y
The `disableA11y` prop specifies a boolean to disable the autoset ally properties.

```tsx
<Button content={"click me!"} disableA11y />
```

### Events

#### onClick
The `onClick` prop allows for a custom callback function for when the button is clicked.

```tsx
<Button content={"click me!"} onClick={(e)=>{console.log(e)}} />
```

## Lang

The `lang` prop allows you to override translatable text strings used by the Button component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).

| Lang Key | Description | Data Provided |
|---|---|---|
| `button` | Button element text/attributes | _(none)_ |

### Example

```tsx
<Button
	content={"click me!"}
	lang={{
		button: {
			attributes: {
				'aria-label': 'Click this button',
			},
		},
	}}
/>
```
