(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9935],
		{
			'../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'(_, r, e) {
				'use strict';
				e.d(r, { f: () => i });
				var s = e('../../node_modules/preact/compat/dist/compat.module.js'),
					d = async (p, u) =>
						new Promise((m) => {
							s.default.render(p, u, () => m(null));
						}),
					l = (p) => {
						s.default.unmountComponentAtNode(p);
					},
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = { code: a.XA, a: a.zE, ...a.Sw },
					t = class extends s.Component {
						constructor() {
							super(...arguments), (this.state = { hasError: !1 });
						}
						static getDerivedStateFromError() {
							return { hasError: !0 };
						}
						componentDidCatch(p) {
							let { showException: u } = this.props;
							u(p);
						}
						render() {
							let { hasError: p } = this.state,
								{ children: u } = this.props;
							return p ? null : s.default.createElement(s.default.Fragment, null, u);
						}
					},
					i = class {
						constructor() {
							(this.render = async (p, u, m) => {
								let n = { ...c, ...u?.components },
									h = a.kQ;
								return new Promise((b, g) => {
									e.e(5231)
										.then(e.bind(e, '../../node_modules/@mdx-js/react/index.js'))
										.then(({ MDXProvider: x }) =>
											d(
												s.default.createElement(
													t,
													{ showException: g, key: Math.random() },
													s.default.createElement(x, { components: n }, s.default.createElement(h, { context: p, docsParameter: u }))
												),
												m
											)
										)
										.then(() => b());
								});
							}),
								(this.unmount = (p) => {
									l(p);
								});
						}
					};
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.stories.tsx'(_, r, e) {
				'use strict';
				e.r(r),
					e.d(r, {
						AutoPlay: () => n,
						ClickableSlides: () => g,
						Default: () => m,
						Loop: () => h,
						NoNavigation: () => b,
						__namedExportsOrder: () => x,
						default: () => p,
					});
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const i =
						"# Slideshow\n\nRenders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.\n\n## Sub-components\n- Image\n- Button\n\n## Usage\n\n```tsx\n<Slideshow slides={slidesArray} />\n```\n\n### slides\nThe `slides` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.\n\n```tsx\n<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />\n```\n\nor\n\n```tsx\nconst slidesObjects = [\n    {\n        src: 'product1.jpg',\n        alt: 'Premium Headphones',\n        onClick: (slide, index) => openProductDetails(slide)\n    },\n    {\n        onClick: (slide, index) => addToCart(slide),\n        content: <div>slide 2</div>\n    }\n];\n```\n\n```tsx\n<Slideshow slides={slidesObjects} />\n```\n\n### slidesToShow\nThe `slidesToShow` prop specifies the number of slides visible at once in the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToShow={4} />\n```\n\n### slidesToMove\nThe `slidesToMove` prop specifies the number of slides to advance when using navigation controls.\n\n```tsx\n<Slideshow slides={slidesArray} slidesToMove={2} />\n```\n\n### gap\nThe `gap` prop sets the spacing between slides in pixels.\n\n```tsx\n<Slideshow slides={slidesArray} gap={20} />\n```\n\n### autoPlay\nThe `autoPlay` prop enables automatic progression through the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} />\n```\n\n### autoPlayInterval\nThe `autoPlayInterval` prop sets the time in milliseconds between automatic slide transitions.\n\n```tsx\n<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />\n```\n\n### showNavigation\nThe `showNavigation` prop controls the visibility of previous/next navigation buttons.\n\n```tsx\n<Slideshow slides={slidesArray} showNavigation={false} />\n```\n\n### showPagination\nThe `showPagination` prop controls the visibility of pagination dots at the bottom of the slideshow.\n\n```tsx\n<Slideshow slides={slidesArray} showPagination={false} />\n```\n\n### overlayNavigation\nThe `overlayNavigation` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. \n\n```tsx\n<Slideshow slides={slidesArray} overlayNavigation={false} />\n```\n\n### touchDragging\nThe `touchDragging` prop controls if the slideshow should have drag navigation enabled. \n\n```tsx\n<Slideshow slides={slidesArray} touchDragging={true} />\n```\n\n### dragThreshold\nThe `dragThreshold` prop sets the drag sensitivity. \n\n```tsx\n<Slideshow slides={slidesArray} dragThreshold={50} />\n```\n\n### loop\nThe `loop` prop enables continuous looping through the slideshow when reaching the end.\n\n```tsx\n<Slideshow slides={slidesArray} loop={false} />\n```\n\n### fallbackImage\nThe `fallbackImage` prop specifies a default image URL to display when an image fails to load.\n\n```tsx\n<Slideshow slides={slidesArray} fallbackImage=\"/path/to/default.jpg\" />\n```\n\n### slideImageAlt\nThe `slideImageAlt` prop provides default alt text for images, which will be appended with the image number for accessibility.\n\n```tsx\n<Slideshow slides={slidesArray} slideImageAlt=\"Product image\" />\n```\n\n### ariaLabel\nThe `ariaLabel` prop provides an accessible label for the entire slideshow component.\n\n```tsx\n<Slideshow slides={slidesArray} ariaLabel=\"Featured products slideshow\" />\n```\n\n### ariaLabelledBy\nThe `ariaLabelledBy` prop references the ID of an element that labels the slideshow.\n\n```tsx\n<h2 id=\"slideshow-title\">Our Products</h2>\n<Slideshow slides={slidesArray} ariaLabelledBy=\"slideshow-title\" />\n```\n\n### alwaysShowNavigation\nThe `alwaysShowNavigation` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the `slidesPerView` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.\n\n```tsx\n<Slideshow slides={slidesArray} alwaysShowNavigation={true} />\n```\n\n### centerInsufficientSlides\nThe `centerInsufficientSlides` prop centers slides when there are fewer slides than the `slidesToShow` setting. This is enabled by default.\n\n```tsx\n<Slideshow slides={slidesArray} centerInsufficientSlides={true} />\n```\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the Slideshow component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `pauseButton` | Play/pause button text | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `paginationButton` | Pagination dot attributes | `index` (number), `totalDots` (number) |\n| `nextButton` | Next slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `prevButton` | Previous slide button text/attributes | `isPlaying` (boolean), `isNextDisabled` (boolean), `isPrevDisabled` (boolean) |\n| `slide` | Slide element attributes | `hasClickHandler` (boolean), `imageAlt` (string), `index` (number), `slidesLength` (number) |\n| `srInstructions` | Screen reader instruction text | `touchDragging` (boolean) |\n\n### Example\n\n```tsx\n<Slideshow\n	slides={slidesArray}\n	lang={{\n		pauseButton: {\n			value: (data) => data.isPlaying ? 'Pause' : 'Play',\n			attributes: {\n				'aria-label': (data) => data.isPlaying ? 'Pause slideshow' : 'Resume slideshow',\n			},\n		},\n		nextButton: {\n			attributes: {\n				'aria-label': (data) => `Next slide${data.isNextDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n		prevButton: {\n			attributes: {\n				'aria-label': (data) => `Previous slide${data.isPrevDisabled ? ' (disabled)' : ''}`,\n			},\n		},\n	}}\n/>\n```\n",
					p = {
						title: 'Molecules/Slideshow',
						component: a.b,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: i }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(o) => (0, s.Y)('div', { style: { maxWidth: '750px' }, children: (0, s.Y)(o, {}) })],
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
							...t.F,
						},
					},
					u = [
						'https://picsum.photos/400/300?random=1',
						'https://picsum.photos/400/300?random=2',
						'https://picsum.photos/400/300?random=3',
						'https://picsum.photos/400/300?random=4',
						'https://picsum.photos/400/300?random=5',
						'https://picsum.photos/400/300?random=6',
						'https://picsum.photos/400/300?random=7',
						'https://picsum.photos/400/300?random=8',
					],
					m = (o) => (0, s.Y)(a.b, { ...o });
				m.args = { slides: u };
				const n = (o) => (0, s.Y)(a.b, { ...o });
				n.args = { slides: u, slidesToShow: 3, slidesToMove: 1, autoPlay: !0, autoPlayInterval: 2e3 };
				const h = (o) => (0, s.Y)(a.b, { ...o });
				h.args = { slides: u, slidesToShow: 2, slidesToMove: 1, loop: !0 };
				const b = (o) => (0, s.Y)(a.b, { ...o });
				b.args = { slides: u, slidesToShow: 3, showNavigation: !1 };
				const g = (o) => (0, s.Y)(a.b, { ...o });
				(g.args = {
					slides: [
						{
							src: 'https://picsum.photos/400/300?random=10',
							alt: 'Premium Headphones',
							productId: 'headphones-001',
							price: '$299.99',
							onClick: (o) => {
								console.log('Product clicked:', o),
									alert(`Opening product details for ${o.alt}
Price: ${o.price}
Product ID: ${o.productId}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=11',
							alt: 'Wireless Speaker',
							productId: 'speaker-002',
							price: '$199.99',
							onClick: (o) => {
								alert(`Adding ${o.alt} to cart
Price: ${o.price}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=12',
							alt: 'Smart Watch',
							productId: 'watch-003',
							price: '$399.99',
							onClick: (o) => {
								alert(`Quick view: ${o.alt}
Price: ${o.price}
Would open product modal here`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=13',
							alt: 'Laptop Stand',
							productId: 'stand-004',
							price: '$89.99',
							onClick: (o) => {
								alert(`${o.alt} details:
Price: ${o.price}
Click tracked for analytics`);
							},
						},
					],
					slidesToShow: 2,
					slidesToMove: 1,
				}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...n.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...b.parameters?.docs?.source },
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...g.parameters?.docs?.source },
						},
					});
				const x = ['Default', 'AutoPlay', 'Loop', 'NoNavigation', 'ClickableSlides'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, r, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					a = e.n(l),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useA11y.tsx'),
					m = e('./components/src/utilities/cloneWithProps.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = e('./components/src/hooks/useLang.tsx'),
					o = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(U);
				const K = ({ native: D, color: P, backgroundColor: L, borderColor: O, theme: f }) =>
						D
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: P || f?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: L || '#fff',
									border: `1px solid ${O || P || f?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					A = (0, c.PA)((D) => {
						const P = (0, i.u)(),
							O = { disableA11y: !1, treePath: (0, p.LU)() },
							f = (0, h.v6)('button', P, O, D),
							{
								content: S,
								children: T,
								disabled: w,
								native: M,
								onClick: I,
								disableA11y: C,
								disableStyles: k,
								className: Y,
								internalClassName: V,
								icon: v,
								lang: j,
								treePath: E,
								style: F,
								styleScript: $,
								themeStyleScript: B,
								...N
							} = f,
							{ overrideElement: y, shouldRenderDefault: J } = (0, o._)('button', f);
						if (!J) return y;
						const z = { icon: { internalClassName: 'ss__button__icon', ...(0, n.s)({ disableStyles: k }), theme: f?.theme, treePath: E } },
							Z = {
								...(0, b.Z)(f, K),
								className: a()('ss__button', { 'ss__button--native': M, 'ss__button--disabled': w }, Y, V),
								disabled: w,
								onClick: (H) => !w && I && I(H),
								...N,
							},
							Q = { ref: (H) => (0, u.iy)(H) },
							G = {},
							X = W()(G, j || {}),
							R = (0, x.u)(X, {}),
							q = !!N.dangerouslySetInnerHTML;
						return S || T || v || j?.button?.value || q
							? (0, s.Y)(t._, {
									children: M
										? (0, s.FD)('button', {
												...Z,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...R.button?.all,
														children: [(0, m.Y)(S, { treePath: E }), (0, m.Y)(T, { treePath: E })],
													}),
													v && (0, s.Y)(g.I, { ...z.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, s.FD)('div', {
												...(C ? {} : Q),
												role: 'button',
												'aria-disabled': w,
												...Z,
												...R.button?.attributes,
												children: [
													S || T || R.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...R.button?.value,
																children: [(0, m.Y)(S, { treePath: E }), (0, m.Y)(T, { treePath: E })],
														  })
														: void 0,
													v && (0, s.Y)(g.I, { ...z.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
				e.d(r, ['$', 0, A]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(_, r, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					c = e.n(a),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = '//cdn.athoscommerce.net/snap/images/fallback.png',
					g = ({ height: o }) =>
						(0, l.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: o || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					x = (0, t.PA)((o) => {
						const U = (0, p.u)(),
							W = (0, u.LU)(),
							K = { fallback: b, lazy: !0, treePath: W },
							A = (0, m.v6)('image', U, K, o),
							{
								alt: D,
								src: P,
								fallback: L,
								title: O,
								hoverSrc: f,
								lazy: S,
								onMouseOver: T,
								onMouseOut: w,
								onError: M,
								onLoad: I,
								onClick: C,
								className: k,
								internalClassName: Y,
							} = A,
							{ overrideElement: V, shouldRenderDefault: v } = (0, h._)('image', A);
						if (!v) return V;
						const [j, E] = (0, d.J0)(!1),
							[F, $] = (0, d.J0)(!1),
							B = (0, d.li)('');
						(0, d.vJ)(() => {
							B.current = P;
						}),
							B.current && B.current != P && E(!1);
						const N = (0, n.Z)(A, g);
						return (0, s.Y)(i._, {
							children: (0, s.Y)('div', {
								...N,
								className: c()('ss__image', { 'ss__image--hidden': !j }, k, Y),
								children: (0, s.Y)('img', {
									src: (F ? f : P) || L,
									alt: D,
									title: O || D,
									loading: S ? 'lazy' : void 0,
									onLoad: (y) => {
										E(!0), I && I(y);
									},
									onClick: (y) => C && C(y),
									onError: (y) => {
										(y.target.src = L || ''), M && M(y);
									},
									onMouseOver: (y) => {
										f && $(!0), T && T(y);
									},
									onMouseOut: (y) => {
										f && $(!1), w && w(y);
									},
								}),
							}),
						});
					});
				e.d(r, ['_', 0, x, 't', 0, b]);
			},
			'./components/src/hooks/useA11y.tsx'(_, r, e) {
				'use strict';
				e.d(r, { iy: () => c });
				const s = 9,
					d = 27,
					l = 'ss-a11y',
					a =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(t, i, p, u) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = m),
							(n.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					t &&
						!t.attributes?.[l] &&
						(t.setAttribute(l, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && t.click();
						}),
						p &&
							t.addEventListener('keydown', function (n) {
								const h = t.querySelectorAll(a),
									b = h[0],
									g = h[h.length - 1];
								if (n.keyCode == d) {
									t.focus(), u && u(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === s) &&
									(n.shiftKey
										? document.activeElement === b && (g.focus(), n.preventDefault())
										: document.activeElement === g && (b.focus(), n.preventDefault()));
							}));
				}
				e.d(r, ['DH', 0, a, 'aZ', 0, l]);
			},
			'./components/src/hooks/useLang.tsx'(_, r, e) {
				'use strict';
				const s = (d, l) => {
					const a = {};
					return (
						Object.keys(d).forEach((c) => {
							const t = d && d[c],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value(l) } })
										: (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': c }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = t.attributes['aria-label'](l))
											: (i.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](l))
											: (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (i.attributes.title = t.attributes.title(l))
											: (i.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (i.attributes.alt = t.attributes.alt(l)) : (i.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = t.attributes.placeholder(l))
											: (i.attributes.placeholder = t.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': c })),
								(a[c] = i);
						}),
						a
					);
				};
				e.d(r, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(_, r, e) {
				'use strict';
				const s = {
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
				e.d(r, ['F', 0, s]);
			},
			'./components/src/utilities/defined.ts'(_, r, e) {
				'use strict';
				e.d(r, { s: () => s });
				function s(d) {
					const l = {};
					return (
						Object.keys(d).map((a) => {
							d[a] !== void 0 && (l[a] = d[a]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, r, e) {
				'use strict';
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					a = (c) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && c.className?.includes('lang-') && !c.className?.includes(l) && window?.Prism?.highlightElement(t.current);
							}, [c.className, c.children, t]),
							(0, s.Y)('code', { ...c, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, a]);
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function r(e) {
					const s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (_.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Slideshow-Slideshow-stories.8cad810e.iframe.bundle.js.map
