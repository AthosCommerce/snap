(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3049],
		{
			'./components/src/components/Molecules/Carousel/Carousel.stories.tsx'(_, u, n) {
				'use strict';
				n.r(u), n.d(u, { Colors: () => v, __namedExportsOrder: () => b, default: () => c });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/@storybook/blocks/dist/index.mjs'),
					h = n('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					e = n('./components/src/utilities/storybook.tsx'),
					s = n('./components/src/utilities/componentArgs.ts'),
					r = n('./components/src/utilities/Colour/Colour.ts');
				const l = `# Carousel

Renders a carousel of slides using children, built with <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/get-started">Swiper v11</a>

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { Carousel } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

\`\`\`jsx
<Carousel>{children}</Carousel>
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`jsx
<Carousel loop={true}>{children}</Carousel>
\`\`\`

### pagination
The \`pagination\` prop can take a bool to enable pagination dots, or an object containing a SwiperOptions.pagination config object. Types can be found in <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#pagination">swiper docs</a>.

\`\`\`jsx
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
\`\`\`jsx
<Carousel pagination={paginationConfig}>{children}</Carousel>
\`\`\`

### vertical 
The \`vertical\` prop changes the carousel slide direction from horizontal, to vertical. 

\`\`\`jsx
<Carousel vertical={true}>{children}</Carousel>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`jsx
<Carousel hideButtons={true}>{children}</Carousel>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Carousel prevButton={'<'}>{children}</Carousel>
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Carousel nextButton={'>'}>{children}</Carousel>
\`\`\`

### onPrevButtonClick
The \`onPrevButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`jsx
<Carousel onPrevButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onNextButtonClick
The \`onNextButtonClick\` prop can be used to handle click events on the prevButton.

\`\`\`jsx
<Carousel onNextButtonClick={() => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onClick
The \`onClick\` prop can be used to handle click events on the swiper component.

\`\`\`jsx
<Carousel onClick={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### onInit
The \`onInit\` prop can be used to tie into the initialization event for swiper.

\`\`\`jsx
<Carousel onInit={(swiper, e) => { /* do something */ }}>{children}</Carousel>
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`jsx
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

\`\`\`jsx
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
					i = 10,
					a = Math.floor(180 / i),
					p = Array.from(Array(i).keys()),
					f = new r.V('#00aeef'),
					v = (w) =>
						(0, t.Y)('div', {
							style: { maxWidth: '800px', height: w?.vertical ? '300px' : void 0 },
							children: (0, t.Y)(h.FN, {
								...w,
								children: p.map((V, O) =>
									(0, t.Y)('div', {
										style: {
											height: w?.vertical ? '100%' : '100px',
											width: '100%',
											minHeight: '1px',
											minWidth: '1px',
											background: f.lighten(O * a).hex,
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
				const b = ['Colors'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(_, u, n) {
				'use strict';
				n.d(u, { FN: () => ne, K: () => A, og: () => L });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = n('../../node_modules/classnames/index.js'),
					s = n.n(e),
					r = n('../../node_modules/mobx-react-lite/es/index.js'),
					l = n('../../node_modules/deepmerge/dist/cjs.js'),
					c = n.n(l),
					i = n('../../node_modules/swiper/swiper-react.mjs'),
					a = n('./components/src/utilities/cloneWithProps.tsx'),
					p = n('./components/src/utilities/defined.ts'),
					f = n('./components/src/utilities/mergeProps.ts'),
					v = n('./components/src/utilities/mergeStyles.ts'),
					b = n('../../node_modules/swiper/modules/index.mjs'),
					w = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					V = n('./components/src/providers/cache.tsx'),
					O = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Z = n('./components/src/providers/snap.tsx'),
					Q = n('./components/src/providers/treePath.tsx'),
					q = n('./components/src/hooks/useDisplaySettings.tsx'),
					ee = n('./components/src/hooks/useComponent.tsx');
				const te = ({ vertical: y, theme: P }) =>
						(0, h.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: y ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: P?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: P?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: P?.variables?.colors?.primary || '#000' },
							},
						}),
					A = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					L = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					ne = (0, r.PA)((y) => {
						const P = (0, O.u)(),
							se = (0, Z.uk)(),
							oe = (0, Q.LU)(),
							re = {
								breakpoints: y.vertical ? JSON.parse(JSON.stringify(L)) : JSON.parse(JSON.stringify(A)),
								pagination: !1,
								slidesPerGroup: !y.breakpoints || !Object.keys(y.breakpoints).length ? 5 : void 0,
								slidesPerView: !y.breakpoints || !Object.keys(y.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: oe,
							};
						let g = (0, f.v6)('carousel', P, re, y),
							x;
						if (
							!(y.theme?.name || P.name) &&
							g.breakpoints &&
							(Object.keys(g.breakpoints).forEach((o) => {
								const d = g.breakpoints[o];
								d.slidesPerView && (d.slidesPerView = Number(d.slidesPerView) || 1),
									d.slidesPerGroup && (d.slidesPerGroup = Number(d.slidesPerGroup) || 1);
							}),
							(x = (0, q.X)(g.breakpoints)),
							x && Object.keys(x).length)
						) {
							const o = c()(g?.theme || {}, x?.theme || {}, { arrayMerge: (d, M) => M });
							g.autoAdjustSlides &&
								g.children.length < x.slidesPerView &&
								((x.slidesPerView = g.children.length), (x.slidesPerGroup = g.children.length)),
								(g = { ...g, ...x, theme: o });
						}
						const {
							children: R,
							loop: ie,
							nextButton: ae,
							prevButton: le,
							hideButtons: N,
							vertical: j,
							onInit: W,
							onBeforeInit: U,
							onAfterInit: K,
							onNextButtonClick: $,
							onPrevButtonClick: z,
							onClick: G,
							disableStyles: ce,
							customComponent: Y,
							style: ge,
							styleScript: fe,
							themeStyleScript: be,
							modules: H,
							className: pe,
							internalClassName: de,
							treePath: J,
							...C
						} = g;
						if (Y) {
							const o = (0, ee.x)(se?.templates?.library.import.component.carousel || {}, Y);
							if (o) return (0, t.Y)(o, { ...g });
						}
						let E = g.pagination,
							k = g.navigation,
							B = g.scrollbar;
						const F = { icon: { internalClassName: 'ss__carousel__icon', ...(0, p.s)({ disableStyles: ce }), theme: g.theme, treePath: J } },
							X = Array.isArray(H) ? [b.Vx, b.dK, b.Ze, b.Jq].concat(H) : [b.Vx, b.dK, b.Ze, b.Jq],
							ue = X.filter((o, d) => X.indexOf(o) === d),
							T = (0, m.li)(null),
							I = (0, m.li)(null),
							D = (0, m.li)(null),
							me = (0, v.Z)(g, te);
						(0, m.vJ)(() => {
							if (D.current) {
								const d = D.current.querySelector('.swiper');
								d?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									d?.classList.contains('swiper-vertical') && d.classList.add('swiper-container-vertical'),
									d?.classList.contains('swiper-horizontal') && d.classList.add('swiper-container-horizontal');
							}
							S();
						}, [y]),
							E && (typeof E == 'object' ? (E = { clickable: !0, ...E }) : (E = { clickable: !0 })),
							k && typeof k == 'object'
								? (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...k })
								: (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							B && (typeof B == 'object' ? (B = { enabled: !0, ...B }) : (B = { enabled: !0 }));
						const S = () => {
							if (D.current) {
								const d = D.current?.querySelectorAll('.swiper-slide-visible');
								d.forEach((M, he) => {
									M.classList.remove('swiper-last-visible-slide'), he == d.length - 1 && M.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete C.breakpoints,
							R?.length
								? (0, t.Y)(V._, {
										children: (0, t.FD)('div', {
											ref: D,
											...me,
											className: s()('ss__carousel', j ? 'ss__carousel-vertical' : '', pe, de),
											children: [
												(0, t.Y)('div', {
													className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': N }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: T,
														onClick: z && ((o) => z(o)),
														children: le || (0, t.Y)(w.I, { icon: j ? 'angle-up' : 'angle-left', ...F.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(i.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (o) => {
														(o.params.navigation.prevEl = T.current ? T.current : void 0),
															(o.params.navigation.nextEl = I.current ? I.current : void 0),
															U && U(o);
													},
													onInit: (o) => {
														W && W(o);
													},
													onAfterInit: (o) => {
														(o.navigation.onPrevClick = (d) => {
															d.preventDefault(), !(o.isBeginning && !o.params.loop && !o.params.rewind) && (o.slidePrev(), o.emit('navigationPrev'));
														}),
															(o.navigation.onNextClick = (d) => {
																d.preventDefault(), !(o.isEnd && !o.params.loop && !o.params.rewind) && (o.slideNext(), o.emit('navigationNext'));
															}),
															K && K(o);
													},
													onClick: (o, d) => {
														G && G(o, d);
													},
													direction: j ? 'vertical' : 'horizontal',
													loop: ie,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ue,
													...C,
													...x,
													controller: void 0,
													navigation: k,
													pagination: E,
													scrollbar: B,
													onResize: (o) => {
														C.onResize && C.onResize(), o.updateSlidesClasses(), S();
													},
													onTransitionEnd: () => {
														C.onTransitionEnd && C.onTransitionEnd(), S();
													},
													children: R.map((o) => (o != null ? (0, t.Y)(i.qr, { children: (0, a.Y)(o, { treePath: J }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': N }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: I,
														onClick: $ && ((o) => $(o)),
														children: ae || (0, t.Y)(w.I, { icon: j ? 'angle-down' : 'angle-right', ...F.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/hooks/useDeepCompareEffect.tsx'(_, u, n) {
				'use strict';
				n.d(u, { I: () => e, r: () => h });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('../../node_modules/dequal/dist/index.mjs');
				function h(s) {
					const r = (0, t.li)(s),
						l = (0, t.li)(0);
					return (0, m.j)(s, r.current) || ((r.current = s), (l.current += 1)), (0, t.Kr)(() => r.current, [l.current]);
				}
				function e(s, r) {
					return (0, t.vJ)(s, [h(r)]);
				}
			},
			'./components/src/hooks/useDisplaySettings.tsx'(_, u, n) {
				'use strict';
				n.d(u, { Q: () => s, X: () => e });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					h = n('./components/src/hooks/useDeepCompareEffect.tsx');
				function e(r) {
					if (!r || !Object.keys(r).length) return;
					const [l, c] = (0, t.J0)(s(r));
					let i;
					const a = () => {
						function p() {
							c(s(r));
						}
						(i = (0, m.s)(() => {
							p();
						}, 50)),
							window.addEventListener('resize', i);
					};
					return (
						(0, t.vJ)(() => (a(), () => window.removeEventListener('resize', i)), []),
						(0, h.I)(() => {
							c(s(r)), a();
						}, [r]),
						l
					);
				}
				const s = (r) => {
					let l;
					const c = window.innerWidth,
						i = Object.keys(r)
							.map((a) => +a)
							.sort((a, p) => a - p)
							.map((a) => ({ [a]: r[a] }));
					if (i.length) {
						for (let a = 0; a < i.length; a++) {
							const p = i[a],
								f = parseInt(Object.keys(p)[0]);
							if (a + 1 === i.length || (a === 0 && c < f)) {
								l = i[a][f];
								break;
							} else {
								const w = parseInt(Object.keys(i[a + 1])[0]);
								if (c >= f && c < w) {
									l = i[a][f];
									break;
								}
							}
						}
						return l;
					}
					return l;
				};
			},
			'./components/src/utilities/Colour/Colour.ts'(_, u, n) {
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
								r = parseInt(this.hexValue.slice(5, 7), 16),
								c = [e / 255, s / 255, r / 255].map((a) => (a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)));
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
							r = parseInt(e.slice(3, 5), 16),
							l = parseInt(e.slice(5, 7), 16),
							c = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(c) ? `rgba(${s}, ${r}, ${l}, ${m(c / 255)})` : `rgb(${s}, ${r}, ${l})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [s, r, l, c] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((i, a) => {
							if (a == 3) {
								i.match(/%/) && (i = (Number(i.replace('%', '').trim()) / 100).toString());
								let p = Number(i);
								(Number.isNaN(p) || p > 1) && (p = 1), p < 0 && (p = 0), (i = Math.floor(p * 255).toString());
							}
							return Number(i).toString(16).padStart(2, '0');
						});
						return `#${s}${r}${l}${c || ''}`;
					}
					static opacity(e, s) {
						let r = !1;
						if ((e && t.isRgb(e) && ((r = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(7, 9) || 'ff';
						let i = parseInt(l, 16) - s;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						const a = i.toString(16).padStart(2, '0'),
							p = `${e.slice(0, 7)}${a}`;
						return r ? t.hexToRgb(p) : p;
					}
					static brightness(e, s) {
						let r = !1;
						if ((e && t.isRgb(e) && ((r = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(s))) return e;
						s > 255 && (s = 255), s < -255 && (s = -255);
						const l = e.slice(1, 7),
							c = parseInt(l, 16);
						let i = (c & 255) + s;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						let a = ((c >> 8) & 255) + s;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						let p = (c >> 16) + s;
						p > 255 ? (p = 255) : p < 0 && (p = 0);
						const f = `#${(i | (a << 8) | (p << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return r ? t.hexToRgb(f) : f;
					}
				}
				function m(h) {
					const e = Math.floor(h),
						s = h - e;
					if (!s) return h;
					const r = Math.floor(s * 10) * 10,
						l = Math.round(h * 100 - r);
					return e + (r + l) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(_, u, n) {
				'use strict';
				n.d(u, { F: () => t });
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
			},
			'./components/src/utilities/defined.ts'(_, u, n) {
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
			'./components/src/utilities/storybook.tsx'(_, u, n) {
				'use strict';
				n.d(u, { Z: () => e });
				var t = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 'prism-block',
					e = (s) => {
						const r = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								r.current && s.className?.includes('lang-') && !s.className?.includes(h) && window?.Prism?.highlightElement(r.current);
							}, [s.className, s.children, r]),
							(0, t.Y)('code', { ...s, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function u(n) {
					var t = new Error("Cannot find module '" + n + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (_.exports = u);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Carousel-Carousel-stories.12beb083.iframe.bundle.js.map
