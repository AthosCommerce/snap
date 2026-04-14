(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9935],
		{
			'../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'(v, r, e) {
				'use strict';
				e.d(r, { f: () => i });
				var s = e('../../node_modules/preact/compat/dist/compat.module.js'),
					d = async (m, u) =>
						new Promise((p) => {
							s.default.render(m, u, () => p(null));
						}),
					l = (m) => {
						s.default.unmountComponentAtNode(m);
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
						componentDidCatch(m) {
							let { showException: u } = this.props;
							u(m);
						}
						render() {
							let { hasError: m } = this.state,
								{ children: u } = this.props;
							return m ? null : s.default.createElement(s.default.Fragment, null, u);
						}
					},
					i = class {
						constructor() {
							(this.render = async (m, u, p) => {
								let o = { ...c, ...u?.components },
									h = a.kQ;
								return new Promise((y, b) => {
									e.e(5231)
										.then(e.bind(e, '../../node_modules/@mdx-js/react/index.js'))
										.then(({ MDXProvider: E }) =>
											d(
												s.default.createElement(
													t,
													{ showException: b, key: Math.random() },
													s.default.createElement(E, { components: o }, s.default.createElement(h, { context: m, docsParameter: u }))
												),
												p
											)
										)
										.then(() => y());
								});
							}),
								(this.unmount = (m) => {
									l(m);
								});
						}
					};
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.stories.tsx'(v, r, e) {
				'use strict';
				e.r(r),
					e.d(r, {
						AutoPlay: () => o,
						ClickableSlides: () => b,
						Default: () => p,
						Loop: () => h,
						NoNavigation: () => y,
						__namedExportsOrder: () => E,
						default: () => m,
					});
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const i = `# Slideshow

Renders an accessible, customizable slideshow component that displays multiple images with navigation controls, pagination, and optional click interactions.

## Sub-components
- Image
- Button

## Usage

\`\`\`jsx
<Slideshow slides={slidesArray} />
\`\`\`

### slides
The \`slides\` prop accepts an array of image URLs (strings) or slides objects with callbacks and metadata. slides objects allow for individual click handlers and custom properties.

\`\`\`jsx
<Slideshow slides={['img1.jpg', 'img2.jpg', 'img3.jpg']} />
\`\`\`

or

\`\`\`jsx
const slidesObjects = [
    {
        src: 'product1.jpg',
        alt: 'Premium Headphones',
        onClick: (slide, index) => openProductDetails(slide)
    },
    {
        onClick: (slide, index) => addToCart(slide),
        content: <div>slide 2</div>
    }
];
\`\`\`

\`\`\`jsx
<Slideshow slides={slidesObjects} />
\`\`\`

### slidesToShow
The \`slidesToShow\` prop specifies the number of slides visible at once in the slideshow.

\`\`\`jsx
<Slideshow slides={slidesArray} slidesToShow={4} />
\`\`\`

### slidesToMove
The \`slidesToMove\` prop specifies the number of slides to advance when using navigation controls.

\`\`\`jsx
<Slideshow slides={slidesArray} slidesToMove={2} />
\`\`\`

### gap
The \`gap\` prop sets the spacing between slides in pixels.

\`\`\`jsx
<Slideshow slides={slidesArray} gap={20} />
\`\`\`

### autoPlay
The \`autoPlay\` prop enables automatic progression through the slideshow.

\`\`\`jsx
<Slideshow slides={slidesArray} autoPlay={true} />
\`\`\`

### autoPlayInterval
The \`autoPlayInterval\` prop sets the time in milliseconds between automatic slide transitions.

\`\`\`jsx
<Slideshow slides={slidesArray} autoPlay={true} autoPlayInterval={5000} />
\`\`\`

### showNavigation
The \`showNavigation\` prop controls the visibility of previous/next navigation buttons.

\`\`\`jsx
<Slideshow slides={slidesArray} showNavigation={false} />
\`\`\`

### showPagination
The \`showPagination\` prop controls the visibility of pagination dots at the bottom of the slideshow.

\`\`\`jsx
<Slideshow slides={slidesArray} showPagination={false} />
\`\`\`

### overlayNavigation
The \`overlayNavigation\` prop controls if the previous/next navigation buttons should overlay the images or render outside of them. 

\`\`\`jsx
<Slideshow slides={slidesArray} overlayNavigation={false} />
\`\`\`

### touchDragging
The \`touchDragging\` prop controls if the slideshow should have drag navigation enabled. 

\`\`\`jsx
<Slideshow slides={slidesArray} touchDragging={true} />
\`\`\`

### dragThreshold
The \`dragThreshold\` prop sets the drag sensitivity. 

\`\`\`jsx
<Slideshow slides={slidesArray} dragThreshold={50} />
\`\`\`

### loop
The \`loop\` prop enables continuous looping through the slideshow when reaching the end.

\`\`\`jsx
<Slideshow slides={slidesArray} loop={false} />
\`\`\`

### fallbackImage
The \`fallbackImage\` prop specifies a default image URL to display when an image fails to load.

\`\`\`jsx
<Slideshow slides={slidesArray} fallbackImage="/path/to/default.jpg" />
\`\`\`

### slideImageAlt
The \`slideImageAlt\` prop provides default alt text for images, which will be appended with the image number for accessibility.

\`\`\`jsx
<Slideshow slides={slidesArray} slideImageAlt="Product image" />
\`\`\`

### ariaLabel
The \`ariaLabel\` prop provides an accessible label for the entire slideshow component.

\`\`\`jsx
<Slideshow slides={slidesArray} ariaLabel="Featured products slideshow" />
\`\`\`

### ariaLabelledBy
The \`ariaLabelledBy\` prop references the ID of an element that labels the slideshow.

\`\`\`jsx
<h2 id="slideshow-title">Our Products</h2>
<Slideshow slides={slidesArray} ariaLabelledBy="slideshow-title" />
\`\`\`

### alwaysShowNavigation
The \`alwaysShowNavigation\` prop ensures navigation buttons are always displayed and take up space, even when the number of slides is below the \`slidesPerView\` threshold. This is particularly useful when using the slideshow in a grid of product cards to maintain consistent layout and height across all cards.

\`\`\`jsx
<Slideshow slides={slidesArray} alwaysShowNavigation={true} />
\`\`\`

### centerInsufficientSlides
The \`centerInsufficientSlides\` prop centers slides when there are fewer slides than the \`slidesToShow\` setting. This is enabled by default.

\`\`\`jsx
<Slideshow slides={slidesArray} centerInsufficientSlides={true} />
\`\`\``,
					m = {
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
						decorators: [(n) => (0, s.Y)('div', { style: { maxWidth: '750px' }, children: (0, s.Y)(n, {}) })],
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
					p = (n) => (0, s.Y)(a.b, { ...n });
				p.args = { slides: u };
				const o = (n) => (0, s.Y)(a.b, { ...n });
				o.args = { slides: u, slidesToShow: 3, slidesToMove: 1, autoPlay: !0, autoPlayInterval: 2e3 };
				const h = (n) => (0, s.Y)(a.b, { ...n });
				h.args = { slides: u, slidesToShow: 2, slidesToMove: 1, loop: !0 };
				const y = (n) => (0, s.Y)(a.b, { ...n });
				y.args = { slides: u, slidesToShow: 3, showNavigation: !1 };
				const b = (n) => (0, s.Y)(a.b, { ...n });
				(b.args = {
					slides: [
						{
							src: 'https://picsum.photos/400/300?random=10',
							alt: 'Premium Headphones',
							productId: 'headphones-001',
							price: '$299.99',
							onClick: (n) => {
								console.log('Product clicked:', n),
									alert(`Opening product details for ${n.alt}
Price: ${n.price}
Product ID: ${n.productId}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=11',
							alt: 'Wireless Speaker',
							productId: 'speaker-002',
							price: '$199.99',
							onClick: (n) => {
								alert(`Adding ${n.alt} to cart
Price: ${n.price}`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=12',
							alt: 'Smart Watch',
							productId: 'watch-003',
							price: '$399.99',
							onClick: (n) => {
								alert(`Quick view: ${n.alt}
Price: ${n.price}
Would open product modal here`);
							},
						},
						{
							src: 'https://picsum.photos/400/300?random=13',
							alt: 'Laptop Stand',
							productId: 'stand-004',
							price: '$89.99',
							onClick: (n) => {
								alert(`${n.alt} details:
Price: ${n.price}
Click tracked for analytics`);
							},
						},
					],
					slidesToShow: 2,
					slidesToMove: 1,
				}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...p.parameters?.docs?.source },
						},
					}),
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...o.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...y.parameters?.docs?.source },
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: { originalSource: '(args: SlideshowProps) => <Slideshow {...args} />', ...b.parameters?.docs?.source },
						},
					});
				const E = ['Default', 'AutoPlay', 'Loop', 'NoNavigation', 'ClickableSlides'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(v, r, e) {
				'use strict';
				e.d(r, { $: () => I });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					a = e.n(l),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					E = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					n = e('./components/src/hooks/useLang.tsx'),
					k = e('./components/src/hooks/useComponent.tsx'),
					Y = e('../../node_modules/deepmerge/dist/cjs.js'),
					V = e.n(Y),
					$ = e('../../node_modules/color/index.js'),
					C = e.n($);
				const j = ({ native: A, color: T, backgroundColor: P, borderColor: B, theme: x }) => {
						const _ = new (C())(P || T || x?.variables?.colors?.primary || void 0).lightness(95);
						return A
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: T || x?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: P || '#fff',
									border: `1px solid ${B || T || x?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: _.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					I = (0, c.PA)((A) => {
						const T = (0, i.u)(),
							P = (0, m.uk)(),
							x = { disableA11y: !1, treePath: (0, u.LU)() },
							_ = (0, y.v6)('button', T, x, A),
							{
								content: w,
								children: D,
								disabled: O,
								native: U,
								onClick: W,
								disableA11y: R,
								disableStyles: F,
								className: N,
								internalClassName: H,
								icon: f,
								lang: L,
								treePath: S,
								customComponent: g,
								style: q,
								styleScript: ee,
								themeStyleScript: te,
								...J
							} = _;
						if (g) {
							const M = (0, k.x)(P?.templates?.library.import.component.button || {}, g);
							if (M) return (0, s.Y)(M, { ..._ });
						}
						const z = { icon: { internalClassName: 'ss__button__icon', ...(0, h.s)({ disableStyles: F }), theme: _?.theme, treePath: S } },
							Z = {
								...(0, b.Z)(_, j),
								className: a()('ss__button', { 'ss__button--native': U, 'ss__button--disabled': O }, N, H),
								disabled: O,
								onClick: (M) => !O && W && W(M),
								...J,
							},
							Q = { ref: (M) => (0, p.iy)(M) },
							G = {},
							X = V()(G, L || {}),
							K = (0, n.u)(X, {});
						return w || D || f || L?.button?.value
							? (0, s.Y)(t._, {
									children: U
										? (0, s.FD)('button', {
												...Z,
												children: [
													(0, s.FD)('span', {
														className: 'ss__button__content',
														...K.button?.all,
														children: [(0, o.Y)(w, { treePath: S }), (0, o.Y)(D, { treePath: S })],
													}),
													f && (0, s.Y)(E.I, { ...z.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  })
										: (0, s.FD)('div', {
												...(R ? {} : Q),
												role: 'button',
												'aria-disabled': O,
												...Z,
												...K.button?.attributes,
												children: [
													w || D || K.button?.value
														? (0, s.FD)('span', {
																className: 'ss__button__content',
																...K.button?.value,
																children: [(0, o.Y)(w, { treePath: S }), (0, o.Y)(D, { treePath: S })],
														  })
														: void 0,
													f && (0, s.Y)(E.I, { ...z.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(v, r, e) {
				'use strict';
				e.d(r, { _: () => E, t: () => y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					c = e.n(a),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useComponent.tsx');
				const y = '//cdn.athoscommerce.net/snap/images/fallback.png',
					b = ({ height: n }) =>
						(0, l.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: n || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function E(n) {
					const k = (0, i.u)(),
						Y = (0, m.uk)(),
						V = (0, u.LU)(),
						$ = { fallback: y, lazy: !0, treePath: V },
						C = (0, p.v6)('image', k, $, n),
						{
							alt: j,
							src: I,
							fallback: A,
							title: T,
							hoverSrc: P,
							lazy: B,
							onMouseOver: x,
							onMouseOut: _,
							onError: w,
							onLoad: D,
							onClick: O,
							className: U,
							internalClassName: W,
							customComponent: R,
						} = C;
					if (R) {
						const g = (0, h.x)(Y?.templates?.library.import.component.image || {}, R);
						if (g) return (0, s.Y)(g, { ...C });
					}
					const [F, N] = (0, d.J0)(!1),
						[H, f] = (0, d.J0)(!1),
						L = (0, d.li)('');
					(0, d.vJ)(() => {
						L.current = I;
					}),
						L.current && L.current != I && N(!1);
					const S = (0, o.Z)(C, b);
					return (0, s.Y)(t._, {
						children: (0, s.Y)('div', {
							...S,
							className: c()('ss__image', { 'ss__image--hidden': !F }, U, W),
							children: (0, s.Y)('img', {
								src: (H ? P : I) || A,
								alt: j,
								title: T || j,
								loading: B ? 'lazy' : void 0,
								onLoad: (g) => {
									N(!0), D && D(g);
								},
								onClick: (g) => O && O(g),
								onError: (g) => {
									(g.target.src = A || ''), w && w(g);
								},
								onMouseOver: (g) => {
									P && f(!0), x && x(g);
								},
								onMouseOut: (g) => {
									P && f(!1), _ && _(g);
								},
							}),
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(v, r, e) {
				'use strict';
				e.d(r, { DH: () => a, aZ: () => l, iy: () => c });
				const s = 9,
					d = 27,
					l = 'ss-a11y',
					a =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(t, i, m, u) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = p),
							(o.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					t &&
						!t.attributes?.[l] &&
						(t.setAttribute(l, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && t.click();
						}),
						m &&
							t.addEventListener('keydown', function (o) {
								const h = t.querySelectorAll(a),
									y = h[0],
									b = h[h.length - 1];
								if (o.keyCode == d) {
									t.focus(), u && u(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === s) &&
									(o.shiftKey
										? document.activeElement === y && (b.focus(), o.preventDefault())
										: document.activeElement === b && (y.focus(), o.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(v, r, e) {
				'use strict';
				e.d(r, { u: () => s });
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
			},
			'./components/src/utilities/componentArgs.ts'(v, r, e) {
				'use strict';
				e.d(r, { F: () => s });
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
			},
			'./components/src/utilities/defined.ts'(v, r, e) {
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
			'./components/src/utilities/storybook.tsx'(v, r, e) {
				'use strict';
				e.d(r, { Z: () => a });
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
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function r(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (v.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Slideshow-Slideshow-stories.ef44bb74.iframe.bundle.js.map
