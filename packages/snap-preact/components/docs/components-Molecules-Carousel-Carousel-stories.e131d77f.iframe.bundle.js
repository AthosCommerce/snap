(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3049],
		{
			'./components/src/components/Molecules/Carousel/Carousel.stories.tsx'(_, p, n) {
				'use strict';
				n.r(p), n.d(p, { Colors: () => v, __namedExportsOrder: () => B, default: () => c });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = n('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					e = n('./components/src/utilities/storybook.tsx'),
					s = n('./components/src/utilities/componentArgs.ts'),
					o = n('./components/src/utilities/Colour/Colour.ts');
				const l = `# Carousel

Renders a carousel of slides using children, built with <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/get-started">Swiper v11</a>

## Sub-components
- Icon

## Usage
\`\`\`tsx
import { Carousel } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

\`\`\`tsx
<Carousel>{children}</Carousel>
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`tsx
<Carousel loop={true}>{children}</Carousel>
\`\`\`

### pagination
The \`pagination\` prop can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#pagination">swiper docs</a>.

\`\`\`tsx
<Carousel pagination={true}>{children}</Carousel>
\`\`\`

or

\`\`\`js
const paginationConfig = {
	bulletActiveClass: "active",
	bulletClass: 'bullet',
	clickable: false
};
\`\`\`
\`\`\`tsx
<Carousel pagination={paginationConfig}>{children}</Carousel>
\`\`\`

### vertical 
The \`vertical\` prop changes the carousel slide direction from horizontal, to vertical. 

\`\`\`tsx
<Carousel vertical={true}>{children}</Carousel>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`tsx
<Carousel hideButtons={true}>{children}</Carousel>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Carousel prevButton={'<'}>{children}</Carousel>
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Carousel nextButton={'>'}>{children}</Carousel>
\`\`\`

### onPrevButtonClick
The \`onPrevButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`tsx
<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onNextButtonClick
The \`onNextButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`tsx
<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onClick
The \`onClick\` prop can be used to handle click events on the swiper component.

\`\`\`tsx
<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onInit
The \`onInit\` prop can be used to tie into the initialization event for swiper.

\`\`\`tsx
<Carousel onInit={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`tsx
import { Scrollbar } from 'swiper';
<Carousel modules={[Scrollbar]} scrollbar={{ draggable: true }}>{children}</Carousel>
\`\`\`

### autoAdjustSlides
The \`autoAdjustSlides\` prop when set to \`false\` will disable the carousel from automatically adjusting the \`slidesPerGroup\`, \`slidesPerView\` and \`loop\` props when the \`children\` length is less than the current \`slidesPerView\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specifies the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any Carousel props\`** or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

\`slidesPerView\` - number of products to display per page (for a peekaboo effect use a decimal number here)

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultCarouselBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
	480: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 10,
	},
};

const defaultVerticalCarouselBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
\`\`\`

\`\`\`tsx
<Carousel breakpoints={defaultCarouselBreakpoints}>{children}</Carousel>
\`\`\`
`,
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
							vertical: {
								defaultValue: !1,
								description: 'Carousel vertical slide direction',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							modules: {
								description: 'Additional Swiper modules',
								table: { type: { summary: 'SwiperModule[]' }, category: 'Templates Legal', defaultValue: { summary: '[Navigation, Pagination]' } },
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
							autoAdjustSlides: {
								defaultValue: !1,
								description:
									'If true and children length is less than the current breakpoint slidesPerView value, slidesPerView and slidesPerGroup will be set to the children length and loop to false',
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
							onInit: {
								description: 'Carousel onInit event handler (Swiper)',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onInit',
							},
							...s.F,
						},
					},
					r = 10,
					a = Math.floor(180 / r),
					d = Array.from(Array(r).keys()),
					f = new o.V('#00aeef'),
					v = (P) =>
						(0, t.Y)('div', {
							style: { maxWidth: '800px', height: P?.vertical ? '300px' : void 0 },
							children: (0, t.Y)(h.FN, {
								...P,
								children: d.map((I, M) =>
									(0, t.Y)('div', {
										style: {
											height: P?.vertical ? '100%' : '100px',
											width: '100%',
											minHeight: '1px',
											minWidth: '1px',
											background: f.lighten(M * a).hex,
											margin: '0 auto',
										},
									})
								),
							}),
						});
				(v.args = { pagination: !0, hideButtons: !0, loop: !1 }),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
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
								...v.parameters?.docs?.source,
							},
						},
					});
				const B = ['Colors'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(_, p, n) {
				'use strict';
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = n('../../node_modules/classnames/index.js'),
					s = n.n(e),
					o = n('../../node_modules/mobx-react-lite/es/index.js'),
					l = n('../../node_modules/deepmerge/dist/cjs.js'),
					c = n.n(l),
					r = n('../../node_modules/swiper/swiper-react.mjs'),
					a = n('./components/src/utilities/cloneWithProps.tsx'),
					d = n('./components/src/utilities/defined.ts'),
					f = n('./components/src/utilities/mergeProps.ts'),
					v = n('./components/src/utilities/mergeStyles.ts'),
					B = n('../../node_modules/swiper/modules/navigation.mjs'),
					P = n('../../node_modules/swiper/modules/pagination.mjs'),
					I = n('../../node_modules/swiper/modules/scrollbar.mjs'),
					M = n('../../node_modules/swiper/modules/a11y.mjs'),
					V = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					Z = n('./components/src/providers/cache.tsx'),
					Q = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					q = n('./components/src/providers/treePath.tsx'),
					ee = n('./components/src/hooks/useDisplaySettings.tsx'),
					te = n('./components/src/hooks/useCustomComponentOverride.tsx');
				const ne = ({ vertical: b, theme: w }) =>
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
							'.swiper-pagination-bullet-active': { background: w?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: w?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: w?.variables?.colors?.primary || '#000' },
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
						const w = (0, Q.u)(),
							oe = (0, q.LU)(),
							ie = {
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
						let g = (0, f.v6)('carousel', w, ie, b),
							x;
						if (
							!(b.theme?.type == 'templates' || w?.type == 'templates') &&
							g.breakpoints &&
							(Object.keys(g.breakpoints).forEach((i) => {
								const u = g.breakpoints[i];
								u.slidesPerView && (u.slidesPerView = Number(u.slidesPerView) || 1),
									u.slidesPerGroup && (u.slidesPerGroup = Number(u.slidesPerGroup) || 1);
							}),
							(x = (0, ee.X)(g.breakpoints)),
							x && Object.keys(x).length)
						) {
							const i = c()(g?.theme || {}, x?.theme || {}, { arrayMerge: (u, T) => T });
							g.autoAdjustSlides &&
								g.children.length < x.slidesPerView &&
								((x.slidesPerView = g.children.length), (x.slidesPerGroup = g.children.length)),
								(g = { ...g, ...x, theme: i });
						}
						const {
								children: N,
								loop: re,
								nextButton: ae,
								prevButton: le,
								hideButtons: W,
								vertical: O,
								onInit: U,
								onBeforeInit: K,
								onAfterInit: $,
								onNextButtonClick: z,
								onPrevButtonClick: G,
								onClick: Y,
								disableStyles: ce,
								style: be,
								styleScript: ye,
								themeStyleScript: _e,
								modules: H,
								className: de,
								internalClassName: ue,
								treePath: J,
								...E
							} = g,
							{ overrideElement: pe, shouldRenderDefault: me } = (0, te._)('carousel', g);
						if (!me) return pe;
						let C = g.pagination,
							y = g.navigation,
							D = g.scrollbar;
						const F = { icon: { internalClassName: 'ss__carousel__icon', ...(0, d.s)({ disableStyles: ce }), theme: g.theme, treePath: J } },
							X = Array.isArray(H) ? [B.A, P.A, I.A, M.A].concat(H) : [B.A, P.A, I.A, M.A],
							he = X.filter((i, u) => X.indexOf(i) === u),
							A = (0, m.li)(null),
							j = (0, m.li)(null),
							k = (0, m.li)(null),
							ge = (0, v.Z)(g, ne);
						(0, m.vJ)(() => {
							if (k.current) {
								const u = k.current.querySelector('.swiper');
								u?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									u?.classList.contains('swiper-vertical') && u.classList.add('swiper-container-vertical'),
									u?.classList.contains('swiper-horizontal') && u.classList.add('swiper-container-horizontal');
							}
							S();
						}, [b]),
							C && (typeof C == 'object' ? (C = { clickable: !0, ...C }) : (C = { clickable: !0 })),
							y &&
								(typeof y == 'object'
									? (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...y })
									: (y = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							D && (typeof D == 'object' ? (D = { enabled: !0, ...D }) : (D = { enabled: !0 }));
						const S = () => {
							if (k.current) {
								const u = k.current?.querySelectorAll('.swiper-slide-visible');
								u.forEach((T, fe) => {
									T.classList.remove('swiper-last-visible-slide'), fe == u.length - 1 && T.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete E.breakpoints,
							N?.length
								? (0, t.Y)(Z._, {
										children: (0, t.FD)('div', {
											ref: k,
											...ge,
											className: s()('ss__carousel', O ? 'ss__carousel-vertical' : '', de, ue),
											children: [
												y !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: A,
															onClick: G && ((i) => G(i)),
															children: le || (0, t.Y)(V.I, { icon: O ? 'angle-up' : 'angle-left', ...F.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(r.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (i) => {
														y &&
															i.params.navigation &&
															((i.params.navigation.prevEl = A.current ? A.current : void 0),
															(i.params.navigation.nextEl = j.current ? j.current : void 0)),
															K && K(i);
													},
													onInit: (i) => {
														U && U(i);
													},
													onAfterInit: (i) => {
														y &&
															i.navigation &&
															((i.navigation.onPrevClick = (u) => {
																u.preventDefault(),
																	!(i.isBeginning && !i.params.loop && !i.params.rewind) && (i.slidePrev(), i.emit('navigationPrev'));
															}),
															(i.navigation.onNextClick = (u) => {
																u.preventDefault(), !(i.isEnd && !i.params.loop && !i.params.rewind) && (i.slideNext(), i.emit('navigationNext'));
															})),
															$ && $(i);
													},
													onClick: (i, u) => {
														Y && Y(i, u);
													},
													direction: O ? 'vertical' : 'horizontal',
													loop: re,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: he,
													...E,
													...x,
													controller: void 0,
													navigation: y,
													pagination: C,
													scrollbar: D,
													onResize: (i) => {
														E.onResize && E.onResize(), i.updateSlidesClasses(), S();
													},
													onTransitionEnd: () => {
														E.onTransitionEnd && E.onTransitionEnd(), S();
													},
													children: N.map((i) => (i != null ? (0, t.Y)(r.qr, { children: (0, a.Y)(i, { treePath: J }) }) : null)),
												}),
												y !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: j,
															onClick: z && ((i) => z(i)),
															children: ae || (0, t.Y)(V.I, { icon: O ? 'angle-down' : 'angle-right', ...F.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				n.d(p, ['FN', 0, se, 'K', 0, L, 'og', 0, R]);
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(_, p, n) {
				'use strict';
				n.d(p, { I: () => e, r: () => h });
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
			'./components/src/hooks/useDisplaySettings.tsx'(_, p, n) {
				'use strict';
				n.d(p, { X: () => e });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					h = n('./components/src/hooks/useDeepCompareEffect.tsx');
				function e(o) {
					if (!o || !Object.keys(o).length) return;
					const [l, c] = (0, t.J0)(s(o));
					let r;
					const a = () => {
						function d() {
							c(s(o));
						}
						(r = (0, m.s)(() => {
							d();
						}, 50)),
							window.addEventListener('resize', r);
					};
					return (
						(0, t.vJ)(() => (a(), () => window.removeEventListener('resize', r)), []),
						(0, h.I)(() => {
							c(s(o)), a();
						}, [o]),
						l
					);
				}
				const s = (o) => {
					let l;
					const c = window.innerWidth,
						r = Object.keys(o)
							.map((a) => +a)
							.sort((a, d) => a - d)
							.map((a) => ({ [a]: o[a] }));
					if (r.length) {
						for (let a = 0; a < r.length; a++) {
							const d = r[a],
								f = parseInt(Object.keys(d)[0]);
							if (a + 1 === r.length || (a === 0 && c < f)) {
								l = r[a][f];
								break;
							} else {
								const P = parseInt(Object.keys(r[a + 1])[0]);
								if (c >= f && c < P) {
									l = r[a][f];
									break;
								}
							}
						}
						return l;
					}
					return l;
				};
				n.d(p, ['Q', 0, s]);
			},
			'./components/src/utilities/Colour/Colour.ts'(_, p, n) {
				'use strict';
				n.d(p, { V: () => t });
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
						const [s, o, l, c] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((r, a) => {
							if (a == 3) {
								r.match(/%/) && (r = (Number(r.replace('%', '').trim()) / 100).toString());
								let d = Number(r);
								(Number.isNaN(d) || d > 1) && (d = 1), d < 0 && (d = 0), (r = Math.floor(d * 255).toString());
							}
							return Number(r).toString(16).padStart(2, '0');
						});
						return `#${s}${o}${l}${c || ''}`;
					}
					static opacity(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(7, 9) || 'ff';
						let r = parseInt(l, 16) - s;
						r > 255 ? (r = 255) : r < 0 && (r = 0);
						const a = r.toString(16).padStart(2, '0'),
							d = `${e.slice(0, 7)}${a}`;
						return o ? t.hexToRgb(d) : d;
					}
					static brightness(e, s) {
						let o = !1;
						if ((e && t.isRgb(e) && ((o = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(1, 7),
							c = parseInt(l, 16);
						let r = (c & 255) + s;
						r > 255 ? (r = 255) : r < 0 && (r = 0);
						let a = ((c >> 8) & 255) + s;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						let d = (c >> 16) + s;
						d > 255 ? (d = 255) : d < 0 && (d = 0);
						const f = `#${(r | (a << 8) | (d << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return o ? t.hexToRgb(f) : f;
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
			'./components/src/utilities/componentArgs.ts'(_, p, n) {
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
				n.d(p, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(_, p, n) {
				'use strict';
				n.d(p, { s: () => t });
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
			'./components/src/utilities/storybook.tsx'(_, p, n) {
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
				n.d(p, ['Z', 0, e]);
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function p(n) {
					const t = new Error("Cannot find module '" + n + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (_.exports = p);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Carousel-Carousel-stories.e131d77f.iframe.bundle.js.map
