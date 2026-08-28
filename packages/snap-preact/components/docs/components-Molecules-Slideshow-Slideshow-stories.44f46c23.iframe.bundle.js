(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9935],
		{
			'../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'(g, o, s) {
				'use strict';
				s.d(o, { f: () => b });
				var e = s('../../node_modules/preact/compat/dist/compat.module.js'),
					y = async (n, i) =>
						new Promise((l) => {
							e.default.render(n, i, () => l(null));
						}),
					h = (n) => {
						e.default.unmountComponentAtNode(n);
					},
					a = s('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = { code: a.XA, a: a.zE, ...a.Sw },
					d = class extends e.Component {
						constructor() {
							super(...arguments), (this.state = { hasError: !1 });
						}
						static getDerivedStateFromError() {
							return { hasError: !0 };
						}
						componentDidCatch(n) {
							let { showException: i } = this.props;
							i(n);
						}
						render() {
							let { hasError: n } = this.state,
								{ children: i } = this.props;
							return n ? null : e.default.createElement(e.default.Fragment, null, i);
						}
					},
					b = class {
						constructor() {
							(this.render = async (n, i, l) => {
								let c = { ...r, ...i?.components },
									u = a.kQ;
								return new Promise((p, m) => {
									s.e(5231)
										.then(s.bind(s, '../../node_modules/@mdx-js/react/index.js'))
										.then(({ MDXProvider: w }) =>
											y(
												e.default.createElement(
													d,
													{ showException: m, key: Math.random() },
													e.default.createElement(w, { components: c }, e.default.createElement(u, { context: n, docsParameter: i }))
												),
												l
											)
										)
										.then(() => p());
								});
							}),
								(this.unmount = (n) => {
									h(n);
								});
						}
					};
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.stories.tsx'(g, o, s) {
				'use strict';
				s.r(o),
					s.d(o, {
						AutoPlay: () => c,
						ClickableSlides: () => m,
						Default: () => l,
						Loop: () => u,
						NoNavigation: () => p,
						__namedExportsOrder: () => w,
						default: () => n,
					});
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'),
					h = s('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = s('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					r = s('./components/src/utilities/storybook.tsx'),
					d = s('./components/src/utilities/componentArgs.ts');
				const b =
						"# Slideshow\n\nRenders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.\n\n## Sub-components\n- Image\n- Button\n\n## Usage\n\n```tsx\n<Slideshow slides={slidesArray} />\n```\n\n### slides\nThe `slides` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.\n\n```tsx\n<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />\n```\n\nor\n\n```tsx\nconst slidesObjects = [\n    {\n        src: 'product1.jpg',\n        alt: 'Premium Headphones',\n        onClick: (slide, index) => openProductDetails(slide)\n    },\n    {\n        onClick: (slide, index) => addToCart(slide),\n        content: <div>slide 2</div>\n    }\n];\n```\n\n```tsx\n<Slideshow slides={slidesObjects} />\n```\n\n### slidesToShow\nThe `slidesToShow` prop specifies the number of slides visible at once in the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToShow={4} />\n```\n\n### slidesToMove\nThe `slidesToMove` prop specifies the number of slides to advance when using navigation controls.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToMove={2} />\n```\n\n### startIndex\nThe `startIndex` prop sets the initial slide index. When it changes after mount the slideshow navigates to that slide in place (clamped to the valid range) rather than remounting \u2014 useful for syncing the active slide to external state.\n\n```tsx\n<Slideshow slides={slidesArray} startIndex={2} />\n```\n\n### gap\nThe `gap` prop sets the spacing between slides in pixels.\n\n```tsx\n<Slideshow slides={slidesArray} gap={20} />\n```\n\n### autoPlay\nThe `autoPlay` prop enables automatic progression through the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} />\n```\n\n### autoPlayInterval\nThe `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />\n```\n\n### showNavigation\nThe `showNavigation` prop controls the visibility of previous/next navigation buttons.\n\n```tsx\n<Slideshow slides={slidesArray} showNavigation={false} />\n```\n\n### showPagination\nThe `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} showPagination={false} />\n```\n\n### overlayNavigation\nThe `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. \n\n```tsx\n<Slideshow slides={slidesArray} overlayNavigation={false} />\n```\n\n### touchDragging\nThe `touchDragging` prop controls if the slideshow should have drag navigation enabled. \n\n```tsx\n<Slideshow slides={slidesArray} touchDragging={true} />\n```\n\n### dragThreshold\nThe `dragThreshold` prop sets the drag sensitivity. \n\n```tsx\n<Slideshow slides={slidesArray} dragThreshold={50} />\n```\n\n### loop\nThe `loop` prop enables continuous looping through the slideshow when reaching the end.\n\n```tsx\n<Slideshow slides={slidesArray} loop={false} />\n```\n\n### fallbackImage\nThe `fallbackImage` prop specifies a default image URL to display when an image fails to load.\n\n```tsx\n<Slideshow slides={slidesArray} fallbackImage=\"/path/to/default.jpg\" />\n```\n\n### slideImageAlt\nThe `slideImageAlt` prop provides default alt text for images, which will be appended with the image number for accessibility.\n\n```tsx\n<Slideshow slides={slidesArray} slideImageAlt=\"Product image\" />\n```\n\n### ariaLabel\nThe `ariaLabel` prop provides an accessible label for the entire slideshow component.\n\n```tsx\n<Slideshow slides={slidesArray} ariaLabel=\"Featured products slideshow\" />\n```\n\n### ariaLabelledBy\nThe `ariaLabelledBy` prop references the ID of an element that labels the slideshow.\n\n```tsx\n<h2 id=\"slideshow-title\">Our Products</h2>\n<Slideshow slides={slidesArray} ariaLabelledBy=\"slideshow-title\" />\n```\n\n### alwaysShowNavigation\nThe `alwaysShowNavigation` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the `slidesPerView` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.\n\n```tsx\n<Slideshow slides={slidesArray} alwaysShowNavigation={true} />\n```\n\n### centerInsufficientSlides\nThe `centerInsufficientSlides` prop centers slides when there are fewer slides than the `slidesToShow` setting. This is enabled by default.\n\n```tsx\n<Slideshow slides={slidesArray} centerInsufficientSlides={true} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Slideshow component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `pauseButton` | Play/pause button text | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `paginationButton` | Pagination dot attributes | `index` (number), `totalDots` (number) |\n| `nextButton` | Next slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `prevButton` | Previous slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `slide` | Slide element attributes | `hasClickHandler` (boolean), `imageAlt` (string), `index` (number), `slidesLength` (number) |\n| `srInstructions` | Screen reader instruction text | `touchDragging` (boolean) |\n\n### Example\n\n```tsx\n<Slideshow\n	slides={slidesArray}\n	lang={{\n		pauseButton: {\n			value: (data) => data.isPlaying ? 'Pause' : 'Play',\n			attributes: {\n				'aria-label': (data) => data.isPlaying ? 'Pause slideshow' : 'Resume slideshow',\n			},\n		},\n		nextButton: {\n			attributes: {\n				'aria-label': (data) => `Next slide${data.isNextDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n		prevButton: {\n			attributes: {\n				'aria-label': (data) => `Previous slide${data.isPrevDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
					n = {
						title: 'Molecules/Slideshow',
						component: a.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(h.oz, { options: { overrides: { code: r.Z } }, children: b }), (0, e.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [(t) => (0, e.Y)('div', { style: { maxWidth: '750px' }, children: (0, e.Y)(t, {}) })],
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
							...d.F,
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
					l = (t) => (0, e.Y)(a.b, { ...t });
				l.args = { slides: i };
				const c = (t) => (0, e.Y)(a.b, { ...t });
				c.args = { slides: i, slidesToShow: 3, slidesToMove: 1, autoPlay: !0, autoPlayInterval: 2e3 };
				const u = (t) => (0, e.Y)(a.b, { ...t });
				u.args = { slides: i, slidesToShow: 2, slidesToMove: 1, loop: !0 };
				const p = (t) => (0, e.Y)(a.b, { ...t });
				p.args = { slides: i, slidesToShow: 3, showNavigation: !1 };
				const m = (t) => (0, e.Y)(a.b, { ...t });
				(m.args = {
					slides: [
						{
							src: 'https://picsum.photos/400/300?random=10',
							alt: 'Premium Headphones',
							productId: 'headphones-001',
							price: '$299.99',
							onClick: (t) => {
								console.log('Product clicked:', t),
									alert(`Opening product details for ${t.alt}
Price: ${t.price}
Product ID: ${t.productId}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=11',
							alt: 'Wireless Speaker',
							productId: 'speaker-002',
							price: '$199.99',
							onClick: (t) => {
								alert(`Adding ${t.alt} to cart
Price: ${t.price}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=12',
							alt: 'Smart Watch',
							productId: 'watch-003',
							price: '$399.99',
							onClick: (t) => {
								alert(`Quick view: ${t.alt}
Price: ${t.price}
Would open product modal here`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=13',
							alt: 'Laptop Stand',
							productId: 'stand-004',
							price: '$89.99',
							onClick: (t) => {
								alert(`${t.alt} details:
Price: ${t.price}
Click tracked for analytics`);
							},
						},
					],
					slidesToShow: 2,
					slidesToMove: 1,
				}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...l.parameters?.docs?.source },
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...c.parameters?.docs?.source },
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...u.parameters?.docs?.source },
						},
					}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...p.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...m.parameters?.docs?.source },
						},
					});
				const w = ['Default', 'AutoPlay', 'Loop', 'NoNavigation', 'ClickableSlides'];
			},
			'./components/src/utilities/componentArgs.ts'(g, o, s) {
				'use strict';
				const e = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				s.d(o, ['F', 0, e]);
			},
			'./components/src/utilities/storybook.tsx'(g, o, s) {
				'use strict';
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					a = (r) => {
						const d = (0, y.li)(null);
						return (
							(0, y.vJ)(() => {
								d.current && r.className?.includes('lang-') && !r.className?.includes(h) && window?.Prism?.highlightElement(d.current);
							}, [r.className, r.children, d]),
							(0, e.Y)('code', { ...r, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
				s.d(o, ['Z', 0, a]);
			},
			'../../node_modules/memoizerific sync recursive'(g) {
				function o(s) {
					const e = new Error("Cannot find module '" + s + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (g.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Slideshow-Slideshow-stories.44f46c23.iframe.bundle.js.map
