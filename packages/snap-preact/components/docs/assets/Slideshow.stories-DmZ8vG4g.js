import { j as l } from './iframe-Bc4KSH0T.js';
import { S as r } from './Slideshow-ChO0chUe.js';
import { c as d } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './Image-9Pub_w4s.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
const p =
		"# Slideshow\n\nRenders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.\n\n## Sub-components\n- Image\n- Button\n\n## Usage\n\n```tsx\n<Slideshow slides={slidesArray} />\n```\n\n### slides\nThe `slides` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.\n\n```tsx\n<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />\n```\n\nor\n\n```tsx\nconst slidesObjects = [\n    {\n        src: 'product1.jpg',\n        alt: 'Premium Headphones',\n        onClick: (slide, index) => openProductDetails(slide)\n    },\n    {\n        onClick: (slide, index) => addToCart(slide),\n        content: <div>slide 2</div>\n    }\n];\n```\n\n```tsx\n<Slideshow slides={slidesObjects} />\n```\n\n### slidesToShow\nThe `slidesToShow` prop specifies the number of slides visible at once in the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToShow={4} />\n```\n\n### slidesToMove\nThe `slidesToMove` prop specifies the number of slides to advance when using navigation controls.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToMove={2} />\n```\n\n### startIndex\nThe `startIndex` prop sets the initial slide index. When it changes after mount the slideshow navigates to that slide in place (clamped to the valid range) rather than remounting — useful for syncing the active slide to external state.\n\n```tsx\n<Slideshow slides={slidesArray} startIndex={2} />\n```\n\n### gap\nThe `gap` prop sets the spacing between slides in pixels.\n\n```tsx\n<Slideshow slides={slidesArray} gap={20} />\n```\n\n### autoPlay\nThe `autoPlay` prop enables automatic progression through the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} />\n```\n\n### autoPlayInterval\nThe `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />\n```\n\n### showNavigation\nThe `showNavigation` prop controls the visibility of previous/next navigation buttons.\n\n```tsx\n<Slideshow slides={slidesArray} showNavigation={false} />\n```\n\n### showPagination\nThe `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} showPagination={false} />\n```\n\n### overlayNavigation\nThe `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. \n\n```tsx\n<Slideshow slides={slidesArray} overlayNavigation={false} />\n```\n\n### touchDragging\nThe `touchDragging` prop controls if the slideshow should have drag navigation enabled. \n\n```tsx\n<Slideshow slides={slidesArray} touchDragging={true} />\n```\n\n### dragThreshold\nThe `dragThreshold` prop sets the drag sensitivity. \n\n```tsx\n<Slideshow slides={slidesArray} dragThreshold={50} />\n```\n\n### dragClickThreshold\nThe `dragClickThreshold` prop sets the number of pixels of drag travel before a drag is distinguished from a click, preventing the trailing click from triggering slide `onClick` handlers.\n\n```tsx\n<Slideshow slides={slidesArray} dragClickThreshold={10} />\n```\n\n### loop\nThe `loop` prop enables continuous looping through the slideshow when reaching the end.\n\n```tsx\n<Slideshow slides={slidesArray} loop={false} />\n```\n\n### fallbackImage\nThe `fallbackImage` prop specifies a default image URL to display when an image fails to load.\n\n```tsx\n<Slideshow slides={slidesArray} fallbackImage=\"/path/to/default.jpg\" />\n```\n\n### slideImageAlt\nThe `slideImageAlt` prop provides default alt text for images, which will be appended with the image number for accessibility.\n\n```tsx\n<Slideshow slides={slidesArray} slideImageAlt=\"Product image\" />\n```\n\n### ariaLabel\nThe `ariaLabel` prop provides an accessible label for the entire slideshow component.\n\n```tsx\n<Slideshow slides={slidesArray} ariaLabel=\"Featured products slideshow\" />\n```\n\n### ariaLabelledBy\nThe `ariaLabelledBy` prop references the ID of an element that labels the slideshow.\n\n```tsx\n<h2 id=\"slideshow-title\">Our Products</h2>\n<Slideshow slides={slidesArray} ariaLabelledBy=\"slideshow-title\" />\n```\n\n### alwaysShowNavigation\nThe `alwaysShowNavigation` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the `slidesPerView` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.\n\n```tsx\n<Slideshow slides={slidesArray} alwaysShowNavigation={true} />\n```\n\n### centerInsufficientSlides\nThe `centerInsufficientSlides` prop centers slides when there are fewer slides than the `slidesToShow` setting. This is enabled by default.\n\n```tsx\n<Slideshow slides={slidesArray} centerInsufficientSlides={true} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Slideshow component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `pauseButton` | Play/pause button text | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `paginationButton` | Pagination dot attributes | `index` (number), `totalDots` (number) |\n| `nextButton` | Next slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `prevButton` | Previous slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `slide` | Slide element attributes | `hasClickHandler` (boolean), `imageAlt` (string), `index` (number), `slidesLength` (number) |\n| `srInstructions` | Screen reader instruction text | `touchDragging` (boolean) |\n\n### Example\n\n```tsx\n<Slideshow\n	slides={slidesArray}\n	lang={{\n		pauseButton: {\n			value: (data) => data.isPlaying ? 'Pause' : 'Play',\n			attributes: {\n				'aria-label': (data) => data.isPlaying ? 'Pause slideshow' : 'Resume slideshow',\n			},\n		},\n		nextButton: {\n			attributes: {\n				'aria-label': (data) => `Next slide${data.isNextDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n		prevButton: {\n			attributes: {\n				'aria-label': (data) => `Previous slide${data.isPrevDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
	v = {
		title: 'Molecules/Slideshow',
		component: r,
		parameters: { docs: { description: { component: p } } },
		decorators: [(e) => l('div', { style: { maxWidth: '750px' }, children: l(e, {}) })],
		argTypes: {
			slides: {
				description: 'Array of slides to display in the slideshow',
				table: { category: 'Templates Legal', type: { summary: 'string[] | SlideshowImage[]' } },
				control: { type: 'object' },
			},
			fallbackImage: {
				description: 'Specifies a default image URL to display when an image fails to load',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string' },
					defaultValue: { summary: '//cdn.athoscommerce.net/snap/images/fallback.png' },
				},
				control: { type: 'text' },
			},
			autoPlay: {
				description: 'Enable automatic slideshow progression',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			autoPlayInterval: {
				description: 'Time in milliseconds between auto-play transitions',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 3e3 } },
				control: { type: 'number', min: 1e3, max: 1e4, step: 500 },
			},
			showNavigation: {
				description: 'Show previous/next navigation buttons',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			overlayNavigation: {
				description: 'Controls if the previous/next navigation buttons should overlay the images or render outside of them',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			showPagination: {
				description: 'Show pagination dots at bottom',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			loop: {
				description: 'Allow continuous looping of slides',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			alwaysShowNavigation: {
				description:
					'Always show navigation buttons even when slides count is below slidesPerView threshold. Useful for maintaining consistent layout in product card grids.',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			centerInsufficientSlides: {
				description: 'Center slides when there are fewer slides than slidesPerView',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			slidesToShow: {
				description: 'Number of slides visible at once',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
				control: { type: 'number', min: 1, max: 8, step: 1 },
			},
			slideWidth: {
				description: 'Width of each slide in Number of px',
				table: { category: 'Templates Legal', type: { summary: 'number' } },
				control: { type: 'number' },
			},
			slidesToMove: {
				description: 'Number of slides to move on each navigation',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
				control: { type: 'number', min: 1, max: 4, step: 1 },
			},
			startIndex: {
				description: 'Initial slide index; navigates to the slide in place when it changes after mount',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 0 } },
				control: { type: 'number', min: 0, step: 1 },
			},
			touchDragging: {
				description: 'Controls if the slideshow should have drag navigation enabled',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			dragThreshold: {
				description: 'Sets the drag sensitivity in pixels',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 50 } },
				control: { type: 'number', min: 0, step: 10 },
			},
			dragClickThreshold: {
				description: 'Sets the number of pixels of drag travel before a drag is distinguished from a click',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 10 } },
				control: { type: 'number', min: 0, step: 1 },
			},
			slideImageAlt: {
				description: 'Provides default alt text for images, which will be appended with the image number for accessibility',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			ariaLabel: {
				description: 'Provides an accessible label for the entire slideshow component',
				table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '"slideshow"' } },
				control: { type: 'text' },
			},
			ariaLabelledBy: {
				description: 'References the ID of an element that labels the slideshow',
				table: { category: 'Templates Legal', type: { summary: 'string' } },
				control: { type: 'text' },
			},
			gap: {
				description: 'Sets the spacing between slides in pixels',
				table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 10 } },
				control: { type: 'number', min: 0, step: 1 },
			},
			...d,
		},
	},
	i = [
		'https://picsum.photos/400/300?random=1',
		'https://picsum.photos/400/300?random=2',
		'https://picsum.photos/400/300?random=3',
		'https://picsum.photos/400/300?random=4',
		'https://picsum.photos/400/300?random=5',
		'https://picsum.photos/400/300?random=6',
		'https://picsum.photos/400/300?random=7',
		'https://picsum.photos/400/300?random=8',
	],
	t = { args: { slides: i } },
	s = { args: { slides: i, slidesToShow: 3, slidesToMove: 1, autoPlay: !0, autoPlayInterval: 2e3 } },
	a = { args: { slides: i, slidesToShow: 2, slidesToMove: 1, loop: !0 } },
	n = { args: { slides: i, slidesToShow: 3, showNavigation: !1 } },
	o = {
		args: {
			slides: [
				{
					src: 'https://picsum.photos/400/300?random=10',
					alt: 'Premium Headphones',
					productId: 'headphones-001',
					price: '$299.99',
					onClick: (e) => {
						console.log('Product clicked:', e),
							alert(`Opening product details for ${e.alt}
Price: ${e.price}
Product ID: ${e.productId}`);
					},
				},
				{
					src: 'https://picsum.photos/400/300?random=11',
					alt: 'Wireless Speaker',
					productId: 'speaker-002',
					price: '$199.99',
					onClick: (e) => {
						alert(`Adding ${e.alt} to cart
Price: ${e.price}`);
					},
				},
				{
					src: 'https://picsum.photos/400/300?random=12',
					alt: 'Smart Watch',
					productId: 'watch-003',
					price: '$399.99',
					onClick: (e) => {
						alert(`Quick view: ${e.alt}
Price: ${e.price}
Would open product modal here`);
					},
				},
				{
					src: 'https://picsum.photos/400/300?random=13',
					alt: 'Laptop Stand',
					productId: 'stand-004',
					price: '$89.99',
					onClick: (e) => {
						alert(`${e.alt} details:
Price: ${e.price}
Click tracked for analytics`);
					},
				},
			],
			slidesToShow: 2,
			slidesToMove: 1,
		},
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    slides: sampleImages
  }
}`,
			...t.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    slides: sampleImages,
    slidesToShow: 3,
    slidesToMove: 1,
    autoPlay: true,
    autoPlayInterval: 2000
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
a.parameters = {
	...a.parameters,
	docs: {
		...a.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    slides: sampleImages,
    slidesToShow: 2,
    slidesToMove: 1,
    loop: true
  }
}`,
			...a.parameters?.docs?.source,
		},
	},
};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    slides: sampleImages,
    slidesToShow: 3,
    showNavigation: false
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    slides: [{
      src: 'https://picsum.photos/400/300?random=10',
      alt: 'Premium Headphones',
      productId: 'headphones-001',
      price: '$299.99',
      onClick: (image: any) => {
        console.log('Product clicked:', image);
        alert(\`Opening product details for \${image.alt}\\nPrice: \${image.price}\\nProduct ID: \${image.productId}\`);
      }
    }, {
      src: 'https://picsum.photos/400/300?random=11',
      alt: 'Wireless Speaker',
      productId: 'speaker-002',
      price: '$199.99',
      onClick: (image: any) => {
        alert(\`Adding \${image.alt} to cart\\nPrice: \${image.price}\`);
      }
    }, {
      src: 'https://picsum.photos/400/300?random=12',
      alt: 'Smart Watch',
      productId: 'watch-003',
      price: '$399.99',
      onClick: (image: any) => {
        alert(\`Quick view: \${image.alt}\\nPrice: \${image.price}\\nWould open product modal here\`);
      }
    }, {
      src: 'https://picsum.photos/400/300?random=13',
      alt: 'Laptop Stand',
      productId: 'stand-004',
      price: '$89.99',
      onClick: (image: any) => {
        alert(\`\${image.alt} details:\\nPrice: \${image.price}\\nClick tracked for analytics\`);
      }
    }],
    slidesToShow: 2,
    slidesToMove: 1
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
const T = ['Default', 'AutoPlay', 'Loop', 'NoNavigation', 'ClickableSlides'];
export { s as AutoPlay, o as ClickableSlides, t as Default, a as Loop, n as NoNavigation, T as __namedExportsOrder, v as default };
