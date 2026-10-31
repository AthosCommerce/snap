import { j as a, o as d } from './iframe-Bc4KSH0T.js';
import { S as i } from './Swatches-BkfGTCkC.js';
import { c } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-7OChHsa4.js';
import './defined-CdKp_MB-.js';
import './Image-9Pub_w4s.js';
import './Slideshow-ChO0chUe.js';
import './useLang-Dx66cFD0.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './Grid-BgRdvrCD.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
const b = `# Swatches

Renders a swatch component.

## Components Used
- Slideshow
- Swatches
- Image

## Usage
\`\`\`tsx
import { Swatches } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. 
if no background or backgroundImageUrl provided, the value will be used as the css background color. 

\`\`\`tsx
const options: SwatchOption = [
        {
            value: 'Rainbow',
            label: 'Rainbow',
            background: \`linear-gradient(
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
            )\`,
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
\`\`\`

### type
The optional \`type\` prop specifies if what the swatch options should be rendered as. Type options are \`carousel\` or \`grid\`, with \`carousel\` as default. When a type is set, you can optionally pass additional child props to be spread in to each sub component. 

\`\`\`tsx
const carouselProps: Partial<CarouselProps> = {
    loop: true,
    nextButton: 'Next',
    prevButton: "Prev"
}

<Swatches options={options} type={"carousel"} carousel={carouselProps}/>
\`\`\`
or
\`\`\`tsx
const gridProps: Partial<GridProps> = {
    rows: 1, 
    columns: 6,
}

<Swatches options={options} type={"grid"} grid={gridProps}/>
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`tsx
<Swatches options={options} hideLabels={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`tsx
const onSelectFunc = (event, clickedOption) => {
    console.log(event, clickedOption)
}

<Swatches options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the Swatches title. 

\`\`\`tsx
<Swatches options={options} titleText={"Swatches Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option if the selected state is handled outside of the component. 

\`\`\`tsx

const selectedOption: SwatchOption = { value: 'Red', label: 'Red', disabled: false },

<Swatches options={options} selected={selectedOption} />
\`\`\`


### breakpoints
An object that modifies the responsive behavior of the swatches at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

Depending on the \`type\` prop passed, the default configuration contains the following properties, however **\`any swatches props\`**, can be specified. 

\`\`\`js
    const defaultCarouselBreakpoints = {
		0: {
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			}
		},
		768: {
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			}
		},
		1200: {
			carousel: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 10,
			}
		},
	};

	const defaultGridBreakpoints = {
		0: {
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
	};

    const customBreakpoints = {
        0: {
            type={'carousel'}
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			},
            hideLabels: true,
            
		},
		768: {
            type={'carousel'}
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
            hideLabels: true,
		},
		1200: {
            type={'grid'}
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
    }
\`\`\`

\`\`\`tsx
<Swatches options={options} breakpoints={customBreakpoints} />
\`\`\`

`,
	{ fn: p } = __STORYBOOK_MODULE_TEST__,
	x = {
		title: 'Molecules/Swatches',
		component: i,
		parameters: { docs: { description: { component: b } } },
		decorators: [(e) => a('div', { style: { maxWidth: '300px' }, children: a(e, {}) })],
		args: { onSelect: p() },
		argTypes: {
			onSelect: { description: 'option onSelect event handler', table: { category: 'Templates Legal', type: { summary: 'function' } }, control: !1 },
			options: {
				description: 'list of options to display',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'SwatchOption[]' } },
				control: { type: 'object' },
			},
			selected: {
				description: 'Current selected option',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'SwatchOption' } },
				control: !1,
			},
			hideLabels: {
				description: 'enable/disable option labels',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			breakpoints: {
				defaultValue: void 0,
				description: 'Carousel breakpoints',
				table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
				control: { type: 'object' },
			},
			type: {
				description: 'swatches type to render',
				table: { category: 'Templates Legal', type: { summary: 'swatches type' }, defaultValue: { summary: 'carousel' } },
				options: ['carousel', 'grid'],
				control: { type: 'select' },
			},
			...c,
		},
	},
	n = d(({ args: e }) => a(i, { ...e })),
	t = {
		render: (e) => a(n, { args: e }),
		args: {
			options: [
				{ value: 'Red', label: 'Red', disabled: !1 },
				{ value: 'Blue', label: 'Blue', disabled: !1 },
				{ value: 'Green', label: 'Green', disabled: !1 },
				{ value: 'Orange', label: 'Orange', disabled: !1 },
				{ value: 'Tan', label: 'Tan', disabled: !1 },
				{ value: 'Pink', label: 'Pink', disabled: !1 },
				{ value: 'Black', label: 'Black', disabled: !1 },
				{ value: 'White', label: 'White', disabled: !1 },
			],
		},
	},
	l = {
		render: (e) => a(n, { args: e }),
		args: {
			options: [
				{ value: 'Red', label: 'Red', disabled: !1 },
				{ value: 'Blue', label: 'Blue', disabled: !1 },
				{ value: 'Green', label: 'Green', disabled: !1 },
				{ value: 'Orange', label: 'Orange', disabled: !1 },
				{ value: 'Tan', label: 'Tan', disabled: !1 },
				{ value: 'Pink', label: 'Pink', disabled: !1 },
				{ value: 'Black', label: 'Black', disabled: !1 },
				{ value: 'White', label: 'White', disabled: !1 },
			],
			type: 'grid',
		},
	},
	s = {
		render: (e) => a(n, { args: e }),
		args: {
			options: [
				{ value: 'Red', label: 'Red', disabled: !0 },
				{ value: 'Blue', label: 'Blue', disabled: !1 },
				{ value: 'Green', label: 'Green', disabled: !0 },
				{ value: 'Orange', label: 'Orange', disabled: !1 },
				{ value: 'Tan', label: 'Tan', disabled: !1 },
				{ value: 'Pink', label: 'Pink', disabled: !0 },
				{ value: 'Black', label: 'Black', disabled: !1 },
				{ value: 'White', label: 'White', disabled: !0 },
			],
			type: 'slideshow',
		},
	},
	r = {
		render: (e) => a(n, { args: e }),
		args: {
			options: [
				{
					value: 'Rainbow',
					label: 'Rainbow',
					disabled: !1,
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
				{ value: 'Red', label: 'Red', disabled: !0 },
				{ value: 'Blue', label: 'Blue', disabled: !1 },
				{ value: 'Green', label: 'Green', disabled: !0 },
				{ value: 'Orange', label: 'Orange', disabled: !1 },
				{ value: 'Tan', label: 'Tan', disabled: !1 },
			],
		},
	},
	o = {
		render: (e) => a(n, { args: e }),
		args: {
			carousel: { slidesPerView: 3, spaceBetween: 10 },
			breakpoints: {},
			options: [
				{
					value: 'Faded Khaki',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7_100x.jpg?v=1706125264',
				},
				{
					value: 'Indigo',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb_100x.jpg',
				},
				{
					value: 'Mirage',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b_100x.jpg?v=1706125265',
				},
				{
					value: 'Toasted',
					backgroundImageUrl:
						'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb_100x.jpg?v=1706125264',
				},
			],
		},
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SwatchesProps) => {
    return <ObservableSelection args={args} />;
  },
  args: {
    options: [{
      value: 'Red',
      label: 'Red',
      disabled: false
    }, {
      value: 'Blue',
      label: 'Blue',
      disabled: false
    }, {
      value: 'Green',
      label: 'Green',
      disabled: false
    }, {
      value: 'Orange',
      label: 'Orange',
      disabled: false
    }, {
      value: 'Tan',
      label: 'Tan',
      disabled: false
    }, {
      value: 'Pink',
      label: 'Pink',
      disabled: false
    }, {
      value: 'Black',
      label: 'Black',
      disabled: false
    }, {
      value: 'White',
      label: 'White',
      disabled: false
    }]
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SwatchesProps) => {
    return <ObservableSelection args={args} />;
  },
  args: {
    options: [{
      value: 'Red',
      label: 'Red',
      disabled: false
    }, {
      value: 'Blue',
      label: 'Blue',
      disabled: false
    }, {
      value: 'Green',
      label: 'Green',
      disabled: false
    }, {
      value: 'Orange',
      label: 'Orange',
      disabled: false
    }, {
      value: 'Tan',
      label: 'Tan',
      disabled: false
    }, {
      value: 'Pink',
      label: 'Pink',
      disabled: false
    }, {
      value: 'Black',
      label: 'Black',
      disabled: false
    }, {
      value: 'White',
      label: 'White',
      disabled: false
    }],
    type: 'grid'
  } as SwatchesProps
}`,
			...l.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SwatchesProps) => {
    return <ObservableSelection args={args} />;
  },
  args: {
    options: [{
      value: 'Red',
      label: 'Red',
      disabled: true
    }, {
      value: 'Blue',
      label: 'Blue',
      disabled: false
    }, {
      value: 'Green',
      label: 'Green',
      disabled: true
    }, {
      value: 'Orange',
      label: 'Orange',
      disabled: false
    }, {
      value: 'Tan',
      label: 'Tan',
      disabled: false
    }, {
      value: 'Pink',
      label: 'Pink',
      disabled: true
    }, {
      value: 'Black',
      label: 'Black',
      disabled: false
    }, {
      value: 'White',
      label: 'White',
      disabled: true
    }],
    type: 'slideshow'
  } as SwatchesProps
}`,
			...s.parameters?.docs?.source,
		},
	},
};
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SwatchesProps) => {
    return <ObservableSelection args={args} />;
  },
  args: {
    options: [{
      value: 'Rainbow',
      label: 'Rainbow',
      disabled: false,
      background: \`linear-gradient(
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
                )\`
    }, {
      value: 'Red',
      label: 'Red',
      disabled: true
    }, {
      value: 'Blue',
      label: 'Blue',
      disabled: false
    }, {
      value: 'Green',
      label: 'Green',
      disabled: true
    }, {
      value: 'Orange',
      label: 'Orange',
      disabled: false
    }, {
      value: 'Tan',
      label: 'Tan',
      disabled: false
    }]
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: SwatchesProps) => {
    return <ObservableSelection args={args} />;
  },
  args: {
    carousel: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    breakpoints: {},
    options: [{
      value: 'Faded Khaki',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7_100x.jpg?v=1706125264'
    }, {
      value: 'Indigo',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb_100x.jpg'
    }, {
      value: 'Mirage',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b_100x.jpg?v=1706125265'
    }, {
      value: 'Toasted',
      backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb_100x.jpg?v=1706125264'
    }]
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const R = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
export { t as Default, s as Disabled, r as GradientBackground, l as Grid, o as Images, R as __namedExportsOrder, x as default };
