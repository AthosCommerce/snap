import { j as o } from './iframe-Bc4KSH0T.js';
import { C as r } from './Carousel-C5sbdqFl.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import { C as l } from './Colour-BeIqPw58.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-7OChHsa4.js';
import './defined-CdKp_MB-.js';
const p =
		'# Carousel\n\nRenders a carousel of slides using children, built with <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/get-started">Swiper v11</a>\n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Carousel } from \'@athoscommerce/snap-preact/components\';\n```\n\nAdditional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.\nAdditional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n```tsx\n<Carousel>{children}</Carousel>\n```\n### loop\nThe `loop` prop (defaults to `true`) enables \'infinite\' looping through the result set when swiping or using the arrow buttons.\n\n```tsx\n<Carousel loop={true}>{children}</Carousel>\n```\n\n### pagination\nThe `pagination` prop (defaults to `false`) can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#pagination">swiper docs</a>. When enabled, `clickable` is set to `true` unless overridden in the config object.\n\n```tsx\n<Carousel pagination={true}>{children}</Carousel>\n```\n\nor\n\n```js\nconst paginationConfig = {\n	bulletActiveClass: "active",\n	bulletClass: \'bullet\',\n	clickable: false\n};\n```\n```tsx\n<Carousel pagination={paginationConfig}>{children}</Carousel>\n```\n\n### scrollbar\nThe `scrollbar` prop can take a bool to enable a scrollbar track beneath the slides, or an object containing a SwiperOptions.scrollbar config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#scrollbar">swiper docs</a>. The `Scrollbar` module is included by default, so no additional module import is needed. The track color is `#d9d9d9` and the drag handle uses the theme\'s primary color.\n\n```tsx\n<Carousel scrollbar={true}>{children}</Carousel>\n```\n\nor\n\n```js\nconst scrollbarConfig = {\n	draggable: true,\n	hide: false,\n	snapOnRelease: true,\n};\n```\n```tsx\n<Carousel scrollbar={scrollbarConfig}>{children}</Carousel>\n```\n\n### navigation\nThe `navigation` prop can take a bool (defaults to `true`) to enable the prev/next buttons, or an object containing a SwiperOptions.navigation config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#navigation">swiper docs</a>. The `nextEl` and `prevEl` options are managed internally and bound to the rendered `prevButton` and `nextButton` elements. To hide the buttons while keeping navigation enabled, use the `hideButtons` prop.\n\n```tsx\n<Carousel navigation={false}>{children}</Carousel>\n```\n\nor\n\n```js\nconst navigationConfig = {\n	disabledClass: \'disabled\',\n	hiddenClass: \'hidden\',\n};\n```\n```tsx\n<Carousel navigation={navigationConfig}>{children}</Carousel>\n```\n\n### vertical \nThe `vertical` prop changes the carousel slide direction from horizontal, to vertical. \n\n```tsx\n<Carousel vertical={true}>{children}</Carousel>\n```\n\n### hideButtons\nThe `hideButtons` prop specifies if the carousel should hide prev/next buttons.\n\n```tsx\n<Carousel hideButtons={true}>{children}</Carousel>\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```tsx\n<Carousel prevButton={\'<\'}>{children}</Carousel>\n```\n\n### nextButton\nThe `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. \n\n```tsx\n<Carousel nextButton={\'>\'}>{children}</Carousel>\n```\n\n### onPrevButtonClick\nThe `onPrevButtonClick` prop can be used to handle click events on the prevButton.\n\n```tsx\n<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onNextButtonClick\nThe `onNextButtonClick` prop can be used to handle click events on the nextButton.\n\n```tsx\n<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onClick\nThe `onClick` prop can be used to handle click events on the swiper component.\n\n```tsx\n<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onBeforeInit\nThe `onBeforeInit` prop can be used to tie into the swiper `beforeInit` event. It is called after the carousel has bound its prev/next button elements to the swiper navigation params.\n\n```tsx\n<Carousel onBeforeInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onInit\nThe `onInit` prop can be used to tie into the initialization event for swiper.\n\n```tsx\n<Carousel onInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onAfterInit\nThe `onAfterInit` prop can be used to tie into the swiper `afterInit` event. It is called after the carousel has attached its own prev/next click handlers.\n\n```tsx\n<Carousel onAfterInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onResize\nThe `onResize` prop can be used to tie into the swiper `resize` event. Unlike the native swiper event, no arguments are passed to the handler.\n\n```tsx\n<Carousel onResize={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onTransitionEnd\nThe `onTransitionEnd` prop can be used to tie into the swiper `transitionEnd` event. Unlike the native swiper event, no arguments are passed to the handler.\n\n```tsx\n<Carousel onTransitionEnd={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### modules\nThe `modules` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination`, `Scrollbar` and `A11y` modules by default.\n\n```tsx\nimport { Autoplay } from \'swiper/modules\';\n<Carousel modules={[Autoplay]} autoplay={{ delay: 3000 }}>{children}</Carousel>\n```\n\n### slidesPerView\nThe `slidesPerView` prop specifies the number of slides visible at once. Accepts a number (use a decimal for a peekaboo effect) or `\'auto\'`. Values from `breakpoints` (including the defaults below) take precedence over this prop, so pass an empty `breakpoints` object to use a single value at all viewports.\n\n```tsx\n<Carousel slidesPerView={3} breakpoints={{}}>{children}</Carousel>\n```\n\n### autoAdjustSlides\nThe `autoAdjustSlides` prop (defaults to `false`) when set to `true` will automatically adjust the `slidesPerView` and `slidesPerGroup` values to match the `children` length when there are fewer children than the current `slidesPerView`. The `loop` prop is not affected.\n\n```tsx\n<Carousel autoAdjustSlides={true}>{children}</Carousel>\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nNote: breakpoints are ignored when the component or global theme is a `templates` type theme.\n\nThe object key specifies the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any Carousel props`** or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. \n\n`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```js\nconst defaultCarouselBreakpoints = {\n	0: {\n		slidesPerView: 1,\n		slidesPerGroup: 1,\n		spaceBetween: 0,\n	},\n	480: {\n		slidesPerView: 2,\n		slidesPerGroup: 2,\n		spaceBetween: 10,\n	},\n	768: {\n		slidesPerView: 3,\n		slidesPerGroup: 3,\n		spaceBetween: 10,\n	},\n	1024: {\n		slidesPerView: 4,\n		slidesPerGroup: 4,\n		spaceBetween: 10,\n	},\n	1200: {\n		slidesPerView: 5,\n		slidesPerGroup: 5,\n		spaceBetween: 10,\n	},\n};\n\nconst defaultVerticalCarouselBreakpoints = {\n	0: {\n		slidesPerView: 1,\n		slidesPerGroup: 1,\n		spaceBetween: 0,\n	},\n};\n```\n\n```tsx\n<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>\n```\n',
	{ fn: e } = __STORYBOOK_MODULE_TEST__,
	v = {
		title: 'Molecules/Carousel',
		component: r,
		parameters: { docs: { description: { component: p } } },
		args: {
			onNextButtonClick: e(),
			onPrevButtonClick: e(),
			onClick: e(),
			onBeforeInit: e(),
			onInit: e(),
			onAfterInit: e(),
			onResize: e(),
			onTransitionEnd: e(),
		},
		argTypes: {
			loop: {
				defaultValue: !0,
				description: 'Carousel slides loop',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			pagination: {
				defaultValue: !1,
				description: 'Configuration for pagination dots',
				table: { type: { summary: 'boolean | SwiperOptions.pagination' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			navigation: {
				defaultValue: !0,
				description: 'Configuration for prev/next navigation; false removes the buttons from the DOM',
				table: { type: { summary: 'boolean | SwiperOptions.navigation' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			scrollbar: {
				defaultValue: !1,
				description: 'Configuration for the scrollbar track',
				table: { type: { summary: 'boolean | SwiperOptions.scrollbar' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			vertical: {
				defaultValue: !1,
				description: 'Carousel vertical slide direction',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			modules: {
				description: 'Additional Swiper modules',
				table: {
					type: { summary: 'SwiperModule[]' },
					category: 'Templates Legal',
					defaultValue: { summary: '[Navigation, Pagination, Scrollbar, A11y]' },
				},
				control: !1,
			},
			hideButtons: {
				defaultValue: !1,
				description: 'Hide prev/next buttons',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			prevButton: {
				description: 'Previous button',
				table: { type: { summary: 'string | JSX Element' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			nextButton: {
				description: 'Next button',
				table: { type: { summary: 'string | JSX Element' }, category: 'Templates Legal' },
				control: { type: 'text' },
			},
			breakpoints: {
				defaultValue: void 0,
				description: 'Carousel breakpoints',
				table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
				control: { type: 'object' },
			},
			slidesPerView: {
				description: 'Number of slides visible at once; overridden by breakpoints values when breakpoints are in use',
				table: { type: { summary: "number | 'auto'" }, category: 'Templates Legal' },
				control: { type: 'number' },
			},
			autoAdjustSlides: {
				defaultValue: !1,
				description:
					'If true and children length is less than the current breakpoint slidesPerView value, slidesPerView and slidesPerGroup will be set to the children length',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			onNextButtonClick: {
				description: 'Carousel next button click event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onPrevButtonClick: {
				description: 'Carousel prev button click event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onClick: {
				description: 'Carousel onClick event handler (Swiper)',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onBeforeInit: {
				description: 'Carousel onBeforeInit event handler (Swiper)',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onInit: {
				description: 'Carousel onInit event handler (Swiper)',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onAfterInit: {
				description: 'Carousel onAfterInit event handler (Swiper)',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onResize: {
				description: 'Carousel onResize event handler (Swiper); receives no arguments',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onTransitionEnd: {
				description: 'Carousel onTransitionEnd event handler (Swiper); receives no arguments',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			...i,
		},
	},
	a = 10,
	u = Math.floor(180 / a),
	c = Array.from(Array(a).keys()),
	d = new l('#00aeef'),
	n = {
		render: (t) =>
			o('div', {
				style: { maxWidth: '800px', height: t?.vertical ? '300px' : void 0 },
				children: o(r, {
					...t,
					children: c.map((h, s) =>
						o('div', {
							style: {
								height: t?.vertical ? '100%' : '100px',
								width: '100%',
								minHeight: '1px',
								minWidth: '1px',
								background: d.lighten(s * u).hex,
								margin: '0 auto',
							},
						})
					),
				}),
			}),
		args: { pagination: !0, hideButtons: !0, loop: !1 },
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (props: CarouselProps) => {
    return <div style={{
      maxWidth: '800px',
      height: props?.vertical ? '300px' : undefined
    }}>
                <Carousel {...props}>
                    {colors.map((number, index) => <div style={{
          height: props?.vertical ? '100%' : '100px',
          width: '100%',
          minHeight: '1px',
          minWidth: '1px',
          background: color.lighten(index * carouselStep).hex,
          margin: '0 auto'
        }}></div>)}
                </Carousel>
            </div>;
  },
  args: {
    pagination: true,
    hideButtons: true,
    loop: false
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
const x = ['Colors'];
export { n as Colors, x as __namedExportsOrder, v as default };
