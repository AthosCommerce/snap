(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3049],
		{
			'./components/src/components/Molecules/Carousel/Carousel.stories.tsx'(v, u, n) {
				'use strict';
				n.r(u), n.d(u, { Colors: () => _, __namedExportsOrder: () => T, default: () => c });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = n('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					e = n('./components/src/utilities/storybook.tsx'),
					s = n('./components/src/utilities/componentArgs.ts'),
					o = n('./components/src/utilities/Colour/Colour.ts');
				const l =
						'# Carousel\n\nRenders a carousel of slides using children, built with <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/get-started">Swiper v11</a>\n\n## Sub-components\n- Icon\n\n## Usage\n```tsx\nimport { Carousel } from \'@athoscommerce/snap-preact/components\';\n```\n\nAdditional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.\nAdditional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n```tsx\n<Carousel>{children}</Carousel>\n```\n### loop\nThe `loop` prop (defaults to `true`) enables \'infinite\' looping through the result set when swiping or using the arrow buttons.\n\n```tsx\n<Carousel loop={true}>{children}</Carousel>\n```\n\n### pagination\nThe `pagination` prop (defaults to `false`) can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#pagination">swiper docs</a>. When enabled, `clickable` is set to `true` unless overridden in the config object.\n\n```tsx\n<Carousel pagination={true}>{children}</Carousel>\n```\n\nor\n\n```js\nconst paginationConfig = {\n	bulletActiveClass: "active",\n	bulletClass: \'bullet\',\n	clickable: false\n};\n```\n```tsx\n<Carousel pagination={paginationConfig}>{children}</Carousel>\n```\n\n### scrollbar\nThe `scrollbar` prop can take a bool to enable a scrollbar track beneath the slides, or an object containing a SwiperOptions.scrollbar config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#scrollbar">swiper docs</a>. The `Scrollbar` module is included by default, so no additional module import is needed. The track color is `#d9d9d9` and the drag handle uses the theme\'s primary color.\n\n```tsx\n<Carousel scrollbar={true}>{children}</Carousel>\n```\n\nor\n\n```js\nconst scrollbarConfig = {\n	draggable: true,\n	hide: false,\n	snapOnRelease: true,\n};\n```\n```tsx\n<Carousel scrollbar={scrollbarConfig}>{children}</Carousel>\n```\n\n### navigation\nThe `navigation` prop can take a bool (defaults to `true`) to enable the prev/next buttons, or an object containing a SwiperOptions.navigation config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#navigation">swiper docs</a>. The `nextEl` and `prevEl` options are managed internally and bound to the rendered `prevButton` and `nextButton` elements. To hide the buttons while keeping navigation enabled, use the `hideButtons` prop.\n\n```tsx\n<Carousel navigation={false}>{children}</Carousel>\n```\n\nor\n\n```js\nconst navigationConfig = {\n	disabledClass: \'disabled\',\n	hiddenClass: \'hidden\',\n};\n```\n```tsx\n<Carousel navigation={navigationConfig}>{children}</Carousel>\n```\n\n### vertical \nThe `vertical` prop changes the carousel slide direction from horizontal, to vertical. \n\n```tsx\n<Carousel vertical={true}>{children}</Carousel>\n```\n\n### hideButtons\nThe `hideButtons` prop specifies if the carousel should hide prev/next buttons.\n\n```tsx\n<Carousel hideButtons={true}>{children}</Carousel>\n```\n\n### prevButton\nThe `prevButton` prop specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```tsx\n<Carousel prevButton={\'<\'}>{children}</Carousel>\n```\n\n### nextButton\nThe `nextButton` prop specifies the next button element of the carousel. This can be a string or JSX element. \n\n```tsx\n<Carousel nextButton={\'>\'}>{children}</Carousel>\n```\n\n### onPrevButtonClick\nThe `onPrevButtonClick` prop can be used to handle click events on the prevButton.\n\n```tsx\n<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onNextButtonClick\nThe `onNextButtonClick` prop can be used to handle click events on the nextButton.\n\n```tsx\n<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onClick\nThe `onClick` prop can be used to handle click events on the swiper component.\n\n```tsx\n<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onBeforeInit\nThe `onBeforeInit` prop can be used to tie into the swiper `beforeInit` event. It is called after the carousel has bound its prev/next button elements to the swiper navigation params.\n\n```tsx\n<Carousel onBeforeInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onInit\nThe `onInit` prop can be used to tie into the initialization event for swiper.\n\n```tsx\n<Carousel onInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onAfterInit\nThe `onAfterInit` prop can be used to tie into the swiper `afterInit` event. It is called after the carousel has attached its own prev/next click handlers.\n\n```tsx\n<Carousel onAfterInit={(swiper) => { /* do something */ }}>{children}</Carousel>\n```\n\n### onResize\nThe `onResize` prop can be used to tie into the swiper `resize` event. Unlike the native swiper event, no arguments are passed to the handler.\n\n```tsx\n<Carousel onResize={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### onTransitionEnd\nThe `onTransitionEnd` prop can be used to tie into the swiper `transitionEnd` event. Unlike the native swiper event, no arguments are passed to the handler.\n\n```tsx\n<Carousel onTransitionEnd={() => { /* do something */ }}>{children}</Carousel>\n```\n\n### modules\nThe `modules` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include `Navigation`, `Pagination`, `Scrollbar` and `A11y` modules by default.\n\n```tsx\nimport { Autoplay } from \'swiper/modules\';\n<Carousel modules={[Autoplay]} autoplay={{ delay: 3000 }}>{children}</Carousel>\n```\n\n### slidesPerView\nThe `slidesPerView` prop specifies the number of slides visible at once. Accepts a number (use a decimal for a peekaboo effect) or `\'auto\'`. Values from `breakpoints` (including the defaults below) take precedence over this prop, so pass an empty `breakpoints` object to use a single value at all viewports.\n\n```tsx\n<Carousel slidesPerView={3} breakpoints={{}}>{children}</Carousel>\n```\n\n### autoAdjustSlides\nThe `autoAdjustSlides` prop (defaults to `false`) when set to `true` will automatically adjust the `slidesPerView` and `slidesPerGroup` values to match the `children` length when there are fewer children than the current `slidesPerView`. The `loop` prop is not affected.\n\n```tsx\n<Carousel autoAdjustSlides={true}>{children}</Carousel>\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nNote: breakpoints are ignored when the component or global theme is a `templates` type theme.\n\nThe object key specifies the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any Carousel props`** or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. \n\n`slidesPerView` - number of products to display per page (for a peekaboo effect use a decimal number here)\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```js\nconst defaultCarouselBreakpoints = {\n	0: {\n		slidesPerView: 1,\n		slidesPerGroup: 1,\n		spaceBetween: 0,\n	},\n	480: {\n		slidesPerView: 2,\n		slidesPerGroup: 2,\n		spaceBetween: 10,\n	},\n	768: {\n		slidesPerView: 3,\n		slidesPerGroup: 3,\n		spaceBetween: 10,\n	},\n	1024: {\n		slidesPerView: 4,\n		slidesPerGroup: 4,\n		spaceBetween: 10,\n	},\n	1200: {\n		slidesPerView: 5,\n		slidesPerGroup: 5,\n		spaceBetween: 10,\n	},\n};\n\nconst defaultVerticalCarouselBreakpoints = {\n	0: {\n		slidesPerView: 1,\n		slidesPerGroup: 1,\n		spaceBetween: 0,\n	},\n};\n```\n\n```tsx\n<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>\n```\n',
					c = {
						title: 'Molecules/Carousel',
						component: h.FN,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: e.Z } }, children: l }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
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
								control: { type: 'none' },
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
								control: { type: 'none' },
								action: 'onNextButtonClick',
							},
							onPrevButtonClick: {
								description: 'Carousel prev button click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onPrevButtonClick',
							},
							onClick: {
								description: 'Carousel onClick event handler (Swiper)',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							onBeforeInit: {
								description: 'Carousel onBeforeInit event handler (Swiper)',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onBeforeInit',
							},
							onInit: {
								description: 'Carousel onInit event handler (Swiper)',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onInit',
							},
							onAfterInit: {
								description: 'Carousel onAfterInit event handler (Swiper)',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onAfterInit',
							},
							onResize: {
								description: 'Carousel onResize event handler (Swiper); receives no arguments',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onResize',
							},
							onTransitionEnd: {
								description: 'Carousel onTransitionEnd event handler (Swiper); receives no arguments',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onTransitionEnd',
							},
							...s.F,
						},
					},
					i = 10,
					a = Math.floor(180 / i),
					d = Array.from(Array(i).keys()),
					g = new o.V('#00aeef'),
					_ = (w) =>
						(0, t.Y)('div', {
							style: { maxWidth: '800px', height: w?.vertical ? '300px' : void 0 },
							children: (0, t.Y)(h.FN, {
								...w,
								children: d.map((A, D) =>
									(0, t.Y)('div', {
										style: {
											height: w?.vertical ? '100%' : '100px',
											width: '100%',
											minHeight: '1px',
											minWidth: '1px',
											background: g.lighten(D * a).hex,
											margin: '0 auto',
										},
									})
								),
							}),
						});
				(_.args = { pagination: !0, hideButtons: !0, loop: !1 }),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(props: CarouselProps) => {
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
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const T = ['Colors'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(v, u, n) {
				'use strict';
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = n('../../node_modules/classnames/index.js'),
					s = n.n(e),
					o = n('../../node_modules/mobx-react-lite/es/index.js'),
					l = n('../../node_modules/deepmerge/dist/cjs.js'),
					c = n.n(l),
					i = n('../../node_modules/swiper/swiper-react.mjs'),
					a = n('./components/src/utilities/cloneWithProps.tsx'),
					d = n('./components/src/utilities/defined.ts'),
					g = n('./components/src/utilities/mergeProps.ts'),
					_ = n('./components/src/utilities/mergeStyles.ts'),
					T = n('../../node_modules/swiper/modules/navigation.mjs'),
					w = n('../../node_modules/swiper/modules/pagination.mjs'),
					A = n('../../node_modules/swiper/modules/scrollbar.mjs'),
					D = n('../../node_modules/swiper/modules/a11y.mjs'),
					V = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					Z = n('./components/src/providers/cache.tsx'),
					Q = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					q = n('./components/src/providers/treePath.tsx'),
					ee = n('./components/src/hooks/useDisplaySettings.tsx'),
					te = n('./components/src/hooks/useCustomComponentOverride.tsx');
				const ne = ({ vertical: b, theme: C }) =>
						(0, h.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: b ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.swiper-pagination-bullet-active': { background: C?.variables?.colors?.primary || 'inherit' },
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
								width: '100%',
							},
							'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: C?.variables?.colors?.primary || '#000' },
							},
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
							'.swiper-horizontal': { touchAction: 'pan-y' },
							'.swiper-vertical': { touchAction: 'pan-x' },
							'.swiper-scrollbar': {
								position: 'absolute',
								bottom: '0',
								left: '0',
								width: '100%',
								height: '2px',
								backgroundColor: '#d9d9d9',
								'&:empty': { display: 'none' },
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: C?.variables?.colors?.primary || '#000' },
							},
						}),
					L = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					R = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					se = (0, o.PA)((b) => {
						const C = (0, Q.u)(),
							oe = (0, q.LU)(),
							re = {
								breakpoints: b.vertical ? JSON.parse(JSON.stringify(R)) : JSON.parse(JSON.stringify(L)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !b.breakpoints || !Object.keys(b.breakpoints).length ? 5 : void 0,
								slidesPerView: !b.breakpoints || !Object.keys(b.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: oe,
							};
						let f = (0, g.v6)('carousel', C, re, b),
							x;
						if (
							!(b.theme?.type == 'templates' || C?.type == 'templates') &&
							f.breakpoints &&
							(Object.keys(f.breakpoints).forEach((r) => {
								const p = f.breakpoints[r];
								p.slidesPerView && (p.slidesPerView = Number(p.slidesPerView) || 1),
									p.slidesPerGroup && (p.slidesPerGroup = Number(p.slidesPerGroup) || 1);
							}),
							(x = (0, ee.X)(f.breakpoints)),
							x && Object.keys(x).length)
						) {
							const r = c()(f?.theme || {}, x?.theme || {}, { arrayMerge: (p, O) => O });
							f.autoAdjustSlides &&
								f.children.length < x.slidesPerView &&
								((x.slidesPerView = f.children.length), (x.slidesPerGroup = f.children.length)),
								(f = { ...f, ...x, theme: r });
						}
						const {
								children: N,
								loop: ie,
								nextButton: ae,
								prevButton: le,
								hideButtons: W,
								vertical: I,
								onInit: U,
								onBeforeInit: K,
								onAfterInit: z,
								onNextButtonClick: $,
								onPrevButtonClick: G,
								onClick: Y,
								disableStyles: ce,
								style: be,
								styleScript: ye,
								themeStyleScript: ve,
								modules: H,
								className: de,
								internalClassName: pe,
								treePath: J,
								...P
							} = f,
							{ overrideElement: ue, shouldRenderDefault: me } = (0, te._)('carousel', f);
						if (!me) return ue;
						let E = f.pagination,
							y = f.navigation,
							k = f.scrollbar;
						const F = { icon: { internalClassName: 'ss__carousel__icon', ...(0, d.s)({ disableStyles: ce }), theme: f.theme, treePath: J } },
							X = Array.isArray(H) ? [T.A, w.A, A.A, D.A].concat(H) : [T.A, w.A, A.A, D.A],
							he = X.filter((r, p) => X.indexOf(r) === p),
							M = (0, m.li)(null),
							j = (0, m.li)(null),
							B = (0, m.li)(null),
							fe = (0, _.Z)(f, ne);
						(0, m.vJ)(() => {
							if (B.current) {
								const p = B.current.querySelector('.swiper');
								p?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									p?.classList.contains('swiper-vertical') && p.classList.add('swiper-container-vertical'),
									p?.classList.contains('swiper-horizontal') && p.classList.add('swiper-container-horizontal');
							}
							S();
						}, [b]),
							E && (typeof E == 'object' ? (E = { clickable: !0, ...E }) : (E = { clickable: !0 })),
							y &&
								(typeof y == 'object'
									? (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...y })
									: (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							k && (typeof k == 'object' ? (k = { enabled: !0, ...k }) : (k = { enabled: !0 }));
						const S = () => {
							if (B.current) {
								const p = B.current?.querySelectorAll('.swiper-slide-visible');
								p.forEach((O, ge) => {
									O.classList.remove('swiper-last-visible-slide'), ge == p.length - 1 && O.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete P.breakpoints,
							N?.length
								? (0, t.Y)(Z._, {
										children: (0, t.FD)('div', {
											ref: B,
											...fe,
											className: s()('ss__carousel', I ? 'ss__carousel-vertical' : '', de, pe),
											children: [
												y !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: M,
															onClick: G && ((r) => G(r)),
															children: le || (0, t.Y)(V.I, { icon: I ? 'angle-up' : 'angle-left', ...F.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(i.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (r) => {
														y &&
															r.params.navigation &&
															((r.params.navigation.prevEl = M.current ? M.current : void 0),
															(r.params.navigation.nextEl = j.current ? j.current : void 0)),
															K && K(r);
													},
													onInit: (r) => {
														U && U(r);
													},
													onAfterInit: (r) => {
														y &&
															r.navigation &&
															((r.navigation.onPrevClick = (p) => {
																p.preventDefault(),
																	!(r.isBeginning && !r.params.loop && !r.params.rewind) && (r.slidePrev(), r.emit('navigationPrev'));
															}),
															(r.navigation.onNextClick = (p) => {
																p.preventDefault(), !(r.isEnd && !r.params.loop && !r.params.rewind) && (r.slideNext(), r.emit('navigationNext'));
															})),
															z && z(r);
													},
													onClick: (r, p) => {
														Y && Y(r, p);
													},
													direction: I ? 'vertical' : 'horizontal',
													loop: ie,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: he,
													...P,
													...x,
													controller: void 0,
													navigation: y,
													pagination: E,
													scrollbar: k,
													onResize: (r) => {
														P.onResize && P.onResize(), r.updateSlidesClasses(), S();
													},
													onTransitionEnd: () => {
														P.onTransitionEnd && P.onTransitionEnd(), S();
													},
													children: N.map((r) => (r != null ? (0, t.Y)(i.qr, { children: (0, a.Y)(r, { treePath: J }) }) : null)),
												}),
												y !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: j,
															onClick: $ && ((r) => $(r)),
															children: ae || (0, t.Y)(V.I, { icon: I ? 'angle-down' : 'angle-right', ...F.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				n.d(u, ['FN', 0, se, 'K', 0, L, 'og', 0, R]);
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(v, u, n) {
				'use strict';
				n.d(u, { I: () => e, r: () => h });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('../../node_modules/dequal/dist/index.mjs');
				function h(s) {
					const o = (0, t.li)(s),
						l = (0, t.li)(0);
					return (0, m.j)(s, o.current) || ((o.current = s), (l.current += 1)), (0, t.Kr)(() => o.current, [l.current]);
				}
				function e(s, o) {
					return (0, t.vJ)(s, [h(o)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(v, u, n) {
				'use strict';
				n.d(u, { X: () => e });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					h = n('./components/src/hooks/useDeepCompareEffect.tsx');
				function e(o) {
					if (!o || !Object.keys(o).length) return;
					const [l, c] = (0, t.J0)(s(o));
					let i;
					const a = () => {
						function d() {
							c(s(o));
						}
						(i = (0, m.s)(() => {
							d();
						}, 50)),
							window.addEventListener('resize', i);
					};
					return (
						(0, t.vJ)(() => (a(), () => window.removeEventListener('resize', i)), []),
						(0, h.I)(() => {
							c(s(o)), a();
						}, [o]),
						l
					);
				}
				const s = (o) => {
					let l;
					const c = window.innerWidth,
						i = Object.keys(o)
							.map((a) => +a)
							.sort((a, d) => a - d)
							.map((a) => ({ [a]: o[a] }));
					if (i.length) {
						for (let a = 0; a < i.length; a++) {
							const d = i[a],
								g = parseInt(Object.keys(d)[0]);
							if (a + 1 === i.length || (a === 0 && c < g)) {
								l = i[a][g];
								break;
							} else {
								const w = parseInt(Object.keys(i[a + 1])[0]);
								if (c >= g && c < w) {
									l = i[a][g];
									break;
								}
							}
						}
						return l;
					}
					return l;
				};
				n.d(u, ['Q', 0, s]);
			},
			'./components/src/utilities/Colour/Colour.ts'(v, u, n) {
				'use strict';
				n.d(u, { V: () => t });
				class t {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const e = parseInt(this.hexValue.slice(1, 3), 16),
								s = parseInt(this.hexValue.slice(3, 5), 16),
								o = parseInt(this.hexValue.slice(5, 7), 16),
								c = [e / 255, s / 255, o / 255].map((a) => (a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)));
							return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(e) {
						(this.value = e),
							e &&
								(e.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (e = `#${e[1].repeat(2)}${e[2].repeat(2)}${e[3].repeat(2)}`),
								t.isHex(e)
									? ((this.hexValue = e), (this.rgbValue = t.hexToRgb(e)))
									: t.isRgb(e) && ((this.rgbValue = e), (this.hexValue = t.rgbToHex(e))));
					}
					shift(e) {
						return new t(t.brightness(this.hex, e));
					}
					lighten(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, e));
					}
					darken(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, -e));
					}
					opacity(e) {
						return new t(t.opacity(this.hex, e));
					}
					transparency(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, e));
					}
					opaque(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, -e));
					}
					static isRgb(e) {
						return !!(
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(e) {
						return !!(e.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || e.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(e) {
						if (!t.isHex(e)) throw 'invalid hex supplied';
						const s = parseInt(e.slice(1, 3), 16),
							o = parseInt(e.slice(3, 5), 16),
							l = parseInt(e.slice(5, 7), 16),
							c = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(c) ? `rgba(${s}, ${o}, ${l}, ${m(c / 255)})` : `rgb(${s}, ${o}, ${l})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [s, o, l, c] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((i, a) => {
							if (a == 3) {
								i.match(/%/) && (i = (Number(i.replace('%', '').trim()) / 100).toString());
								let d = Number(i);
								(Number.isNaN(d) || d > 1) && (d = 1), d < 0 && (d = 0), (i = Math.floor(d * 255).toString());
							}
							return Number(i).toString(16).padStart(2, '0');
						});
						return `#${s}${o}${l}${c || ''}`;
					}
					static opacity(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(7, 9) || 'ff';
						let i = parseInt(l, 16) - s;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						const a = i.toString(16).padStart(2, '0'),
							d = `${e.slice(0, 7)}${a}`;
						return o ? t.hexToRgb(d) : d;
					}
					static brightness(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(1, 7),
							c = parseInt(l, 16);
						let i = (c & 255) + s;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						let a = ((c >> 8) & 255) + s;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						let d = (c >> 16) + s;
						d > 255 ? (d = 255) : d < 0 && (d = 0);
						const g = `#${(i | (a << 8) | (d << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return o ? t.hexToRgb(g) : g;
					}
				}
				function m(h) {
					const e = Math.floor(h),
						s = h - e;
					if (!s) return h;
					const o = Math.floor(s * 10) * 10,
						l = Math.round(h * 100 - o);
					return e + (o + l) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(v, u, n) {
				'use strict';
				const t = {
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
				n.d(u, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(v, u, n) {
				'use strict';
				n.d(u, { s: () => t });
				function t(m) {
					const h = {};
					return (
						Object.keys(m).map((e) => {
							m[e] !== void 0 && (h[e] = m[e]);
						}),
						h
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(v, u, n) {
				'use strict';
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					e = (s) => {
						const o = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								o.current && s.className?.includes('lang-') && !s.className?.includes(h) && window?.Prism?.highlightElement(o.current);
							}, [s.className, s.children, o]),
							(0, t.Y)('code', { ...s, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
				n.d(u, ['Z', 0, e]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function u(n) {
					const t = new Error("Cannot find module '" + n + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (v.exports = u);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Carousel-Carousel-stories.f5b4f1ce.iframe.bundle.js.map
