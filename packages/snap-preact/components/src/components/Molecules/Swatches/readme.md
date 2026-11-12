# Swatches

Renders a swatch component.

## Components Used
- Slideshow
- Grid
- Image

## Usage
```tsx
import { Swatches } from '@athoscommerce/snap-preact/components';
```

### options
The required `options` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. 
if no background or backgroundImageUrl provided, the value will be used as the css background color. 

```tsx
const options: SwatchOption = [
        {
            value: 'Rainbow',
            label: 'Rainbow',
            background: `linear-gradient(
                90deg,
                rgba(255, 0, 0, 1) 0%,
                rgba(255, 154, 0, 1) 10%,
                rgba(208, 222, 33, 1) 20%,
                rgba(79, 220, 74, 1) 30%,
                rgba(63, 218, 216, 1) 40%,
                rgba(47, 201, 226, 1) 50%,
                rgba(28, 127, 238, 1) 60%,
                rgba(95, 21, 242, 1) 70%,
                rgba(186, 12, 248, 1) 80%,
                rgba(251, 7, 217, 1) 90%,
                rgba(255, 0, 0, 1) 100%
            )`,
        },
        {
            value: 'red',
            label: 'red',
            backgroundImageUrl:
                'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',
        },
		{ value: 'Blue', label: 'Blue' },
		{ value: 'Green', label: 'Green' },
		{ value: 'Orange', label: 'Orange', disabled: true },
		{ value: 'Tan', label: 'Tan' },
		{ value: 'Pink', label: 'Pink'},
		{ value: 'Black', label: 'Black' },
		{ value: 'White', label: 'White'},
	],

<Swatches options={options} />
```

### type
The optional `type` prop specifies if what the swatch options should be rendered as. Type options are `slideshow` or `grid`, with `slideshow` as default. When a type is set, you can optionally pass additional child props (`slideshow` or `grid`) to be spread in to each sub component. 

```tsx
const slideshowProps: Partial<SlideshowProps> = {
    loop: true,
    gap: 4,
}

<Swatches options={options} type={"slideshow"} slideshow={slideshowProps}/>
```
or
```tsx
const gridProps: Partial<GridProps> = {
    rows: 1, 
    columns: 6,
}

<Swatches options={options} type={"grid"} grid={gridProps}/>
```

### hideLabels
The optional `hideLabels` prop specifies if option labels should be hidden. 

```tsx
<Swatches options={options} hideLabels={true} />
```

### onSelect
The optional `onSelect` prop specifies callback function to be called on option click. 

```tsx
const onSelectFunc = (event, clickedOption) => {
    console.log(event, clickedOption)
}

<Swatches options={options} onSelect={onSelectFunc} />
```

### disabled
The optional `disabled` prop prevents option selection and the `onSelect` callback from being invoked.

```tsx
<Swatches options={options} disabled={true} />
```

### selected
The optional `selected` prop specifies the selected option if the selected state is handled outside of the component. 

```tsx

const selectedOption: SwatchOption = { value: 'Red', label: 'Red', disabled: false },

<Swatches options={options} selected={selectedOption} />
```


### breakpoints
An object that modifies the responsive behavior of the swatches at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

When the `type` prop is `slideshow`, the default configuration contains the following properties (there is no default for `grid`), however **`any swatches props`**, can be specified. 

```js
    const defaultCarouselBreakpoints = {
		0: {
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			}
		},
		768: {
			carousel: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 10,
			}
		},
		1200: {
			carousel: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: 10,
			}
		},
	};

    const customBreakpoints = {
        0: {
            type: 'slideshow',
			slideshow: {
				gap: 4,
			},
            hideLabels: true,
            
		},
		768: {
            type: 'slideshow',
			slideshow: {
				gap: 8,
			},
            hideLabels: true,
		},
		1200: {
            type: 'grid',
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
    }
```

```tsx
<Swatches options={options} breakpoints={customBreakpoints} />
```

