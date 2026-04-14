(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1921],
		{
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(w, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => v, __namedExportsOrder: () => R, default: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					g = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts');
				const D = `# Recommendation

Renders a carousel of product recommendations, built using the Carousel Component.

If using children, the provided children elements array length and order must match the results stored in the \`controller.store.results\` (or \`results\` prop) to avoid unexpected tracking behaviour.

Any modification to the results array and data are recommended to be made using an \`afterSearch\` and/or \`afterStore\` event via the Controller instead of making modifications in the component.


## Sub-components
- Carousel
- ResultTracker
- Result (default)

## Usage
\`\`\`jsx
import { Recommendation } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`jsx
<Recommendation controller={controller} />
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`jsx
<Recommendation controller={controller} loop={true} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`

If using children, the provided children elements array length and order must match the results stored in the \`results\` prop to avoid unexpected tracking behaviour.

\`\`\`jsx
<Recommendation controller={controller} results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

const CustomResult = ({
	controller 
	result
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Recommendation controller={controller} resultComponent={CustomResult} />
\`\`\`

### title
The \`title\` prop specifies the carousel title

\`\`\`jsx
<Recommendation controller={controller} title={'Recommended Products'} />
\`\`\`

### hideTitle
The \`hideTitle\` prop hides the carousel title

\`\`\`jsx
<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />
\`\`\`

### description
The \`description\` prop specifies the carousel description

\`\`\`jsx
<Recommendation controller={controller} description={'Recommended Products are so awesome!'} />
\`\`\`

### pagination
The \`pagination\` prop specifies if the carousel should display pagination dots. 

\`\`\`jsx
<Recommendation controller={controller} pagination={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`jsx
<Recommendation vertical={true}>{children}<Recommendation/>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`jsx
<Recommendation hideButtons={true}>{children}<Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Recommendation controller={controller} prevButton={'<'} />
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`jsx
<Recommendation controller={controller} nextButton={'>'} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`jsx
import { Scrollbar } from 'swiper';
<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<Recommendation controller={controller} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any Recommendation props\`**, or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

\`slidesPerView\` - number of products to display per page (for a peekaboo effect use a decimal number here)

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultRecommendationBreakpoints = {
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

const defaultVerticalRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
\`\`\`

\`\`\`jsx
<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`
`,
					y = {
						title: 'Templates/Recommendation',
						component: _.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: g.Z } }, children: D }), (0, t.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(m, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							hideTitle: {
								defaultValue: !1,
								description: 'hide title',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							description: {
								description: 'recommendation description',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							loop: {
								defaultValue: !0,
								description: 'Recommendation pagination loops',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							results: {
								description: 'Results store reference, overrides controller.store.results',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							modules: {
								description: 'Additional Swiper modules',
								table: { type: { summary: 'SwiperModule[]' }, defaultValue: { summary: '[Navigation, Pagination]' } },
								control: { type: 'none' },
							},
							pagination: {
								defaultValue: !1,
								description: 'Display pagination dots',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							scrollbar: {
								defaultValue: !1,
								description: 'Display scrollbar',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideButtons: {
								defaultValue: !1,
								description: 'Hide prev/next buttons',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							prevButton: {
								description: 'Previous button',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' } },
								control: { type: 'text' },
							},
							nextButton: {
								description: 'Next button',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' } },
								control: { type: 'text' },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'none' },
							},
							...o.F,
						},
					},
					c = f.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					v = (m, { loaded: { controller: u } }) => (0, t.Y)(_.A, { ...m, controller: u });
				(v.loaders = [
					async () => (
						c.on('afterStore', async ({ controller: m }, u) => {
							m.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await u();
						}),
						await c.search(),
						{ controller: c }
					),
				]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <Recommendation {...props} controller={controller} />;
}`,
								...v.parameters?.docs?.source,
							},
						},
					});
				const R = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(w, l, e) {
				'use strict';
				e.d(l, { FN: () => d, K: () => a, og: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					o = e.n(g),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(D),
					c = e('../../node_modules/swiper/swiper-react.mjs'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					R = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					h = e('../../node_modules/swiper/modules/index.mjs'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/snap.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					I = e('./components/src/hooks/useDisplaySettings.tsx'),
					S = e('./components/src/hooks/useComponent.tsx');
				const s = ({ vertical: r, theme: b }) =>
						(0, _.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: r ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: b?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: b?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: b?.variables?.colors?.primary || '#000' },
							},
						}),
					a = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					P = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					d = (0, f.PA)((r) => {
						const b = (0, U.u)(),
							ae = (0, O.uk)(),
							ie = (0, T.LU)(),
							K = {
								breakpoints: r.vertical ? JSON.parse(JSON.stringify(P)) : JSON.parse(JSON.stringify(a)),
								pagination: !1,
								slidesPerGroup: !r.breakpoints || !Object.keys(r.breakpoints).length ? 5 : void 0,
								slidesPerView: !r.breakpoints || !Object.keys(r.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ie,
							};
						let E = (0, m.v6)('carousel', b, K, r),
							A;
						if (
							!(r.theme?.name || b.name) &&
							E.breakpoints &&
							(Object.keys(E.breakpoints).forEach((n) => {
								const p = E.breakpoints[n];
								p.slidesPerView && (p.slidesPerView = Number(p.slidesPerView) || 1),
									p.slidesPerGroup && (p.slidesPerGroup = Number(p.slidesPerGroup) || 1);
							}),
							(A = (0, I.X)(E.breakpoints)),
							A && Object.keys(A).length)
						) {
							const n = y()(E?.theme || {}, A?.theme || {}, { arrayMerge: (p, le) => le });
							E.autoAdjustSlides &&
								E.children.length < A.slidesPerView &&
								((A.slidesPerView = E.children.length), (A.slidesPerGroup = E.children.length)),
								(E = { ...E, ...A, theme: n });
						}
						const {
							children: J,
							loop: x,
							nextButton: L,
							prevButton: ce,
							hideButtons: X,
							vertical: Y,
							onInit: H,
							onBeforeInit: Z,
							onAfterInit: $,
							onNextButtonClick: z,
							onPrevButtonClick: G,
							onClick: Q,
							disableStyles: de,
							customComponent: me,
							style: he,
							styleScript: Ee,
							themeStyleScript: _e,
							modules: q,
							className: ue,
							internalClassName: ee,
							treePath: te,
							...W
						} = E;
						if (me) {
							const n = (0, S.x)(ae?.templates?.library.import.component.carousel || {}, me);
							if (n) return (0, t.Y)(n, { ...E });
						}
						let B = E.pagination,
							k = E.navigation,
							V = E.scrollbar;
						const oe = { icon: { internalClassName: 'ss__carousel__icon', ...(0, R.s)({ disableStyles: de }), theme: E.theme, treePath: te } },
							ne = Array.isArray(q) ? [h.Vx, h.dK, h.Ze, h.Jq].concat(q) : [h.Vx, h.dK, h.Ze, h.Jq],
							se = ne.filter((n, p) => ne.indexOf(n) === p),
							re = (0, i.li)(null),
							F = (0, i.li)(null),
							N = (0, i.li)(null),
							pe = (0, u.Z)(E, s);
						(0, i.vJ)(() => {
							if (N.current) {
								const p = N.current.querySelector('.swiper');
								p?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									p?.classList.contains('swiper-vertical') && p.classList.add('swiper-container-vertical'),
									p?.classList.contains('swiper-horizontal') && p.classList.add('swiper-container-horizontal');
							}
							j();
						}, [r]),
							B && (typeof B == 'object' ? (B = { clickable: !0, ...B }) : (B = { clickable: !0 })),
							k && typeof k == 'object'
								? (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...k })
								: (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							V && (typeof V == 'object' ? (V = { enabled: !0, ...V }) : (V = { enabled: !0 }));
						const j = () => {
							if (N.current) {
								const p = N.current?.querySelectorAll('.swiper-slide-visible');
								p.forEach((le, fe) => {
									le.classList.remove('swiper-last-visible-slide'), fe == p.length - 1 && le.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete W.breakpoints,
							J?.length
								? (0, t.Y)(M._, {
										children: (0, t.FD)('div', {
											ref: N,
											...pe,
											className: o()('ss__carousel', Y ? 'ss__carousel-vertical' : '', ue, ee),
											children: [
												(0, t.Y)('div', {
													className: o()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': X }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: re,
														onClick: G && ((n) => G(n)),
														children: ce || (0, t.Y)(C.I, { icon: Y ? 'angle-up' : 'angle-left', ...oe.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(c.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														(n.params.navigation.prevEl = re.current ? re.current : void 0),
															(n.params.navigation.nextEl = F.current ? F.current : void 0),
															Z && Z(n);
													},
													onInit: (n) => {
														H && H(n);
													},
													onAfterInit: (n) => {
														(n.navigation.onPrevClick = (p) => {
															p.preventDefault(), !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
														}),
															(n.navigation.onNextClick = (p) => {
																p.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															}),
															$ && $(n);
													},
													onClick: (n, p) => {
														Q && Q(n, p);
													},
													direction: Y ? 'vertical' : 'horizontal',
													loop: x,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: se,
													...W,
													...A,
													controller: void 0,
													navigation: k,
													pagination: B,
													scrollbar: V,
													onResize: (n) => {
														W.onResize && W.onResize(), n.updateSlidesClasses(), j();
													},
													onTransitionEnd: () => {
														W.onTransitionEnd && W.onTransitionEnd(), j();
													},
													children: J.map((n) => (n != null ? (0, t.Y)(c.qr, { children: (0, v.Y)(n, { treePath: te }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: o()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': X }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: F,
														onClick: z && ((n) => z(n)),
														children: L || (0, t.Y)(C.I, { icon: Y ? 'angle-down' : 'angle-right', ...oe.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(w, l, e) {
				'use strict';
				e.d(l, { A: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					o = e.n(g),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(D),
					c = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					v = e('./components/src/components/Molecules/Result/Result.tsx'),
					R = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useIntersection.tsx'),
					M = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/hooks/useDisplaySettings.tsx'),
					I = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					s = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const a = ({ vertical: d }) => (0, _.AH)({ height: d ? '100%' : void 0, '.ss__result__image-wrapper': { height: d ? '85%' : void 0 } }),
					P = (0, f.PA)((d) => {
						const r = (0, U.u)(),
							b = (0, O.LU)(),
							ae = {
								breakpoints: d.vertical ? JSON.parse(JSON.stringify(c.og)) : JSON.parse(JSON.stringify(c.K)),
								pagination: !1,
								loop: !0,
								title: d.controller?.store?.profile?.display?.templateParameters?.title,
								description: d.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: b,
							},
							ie = { name: d.controller?.store?.profile?.tag?.toLowerCase(), ...d };
						let K = (0, u.v6)('recommendation', r, ae, ie),
							E;
						!(d.theme?.name || r.name) && K.breakpoints && ((E = (0, T.X)(K.breakpoints)), E && Object.keys(E).length && (K = { ...K, ...E }));
						const {
								title: A,
								description: J,
								controller: x,
								children: L,
								loop: ce,
								results: X,
								pagination: Y,
								nextButton: H,
								prevButton: Z,
								hideButtons: $,
								resultComponent: z,
								disableStyles: G,
								className: Q,
								internalClassName: de,
								style: me,
								styleScript: he,
								themeStyleScript: Ee,
								lazyRender: _e,
								vertical: q,
								hideTitle: ue,
								treePath: ee,
								...te
							} = K,
							W = { enabled: !0, offset: '10%', ..._e };
						if (!x || x.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const B = X || x.store?.results;
						if (Array.isArray(L) && L.length !== B.length)
							return (
								x.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const k = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, m.s)({ disableStyles: G, vertical: q }),
									theme: K?.theme,
									treePath: ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, m.s)({ disableStyles: G }), theme: K?.theme, treePath: ee },
							},
							V = (0, h.Z)(K, a),
							[oe, ne] = (0, i.J0)(!1),
							se = (0, i.li)(null);
						(!W?.enabled || (0, C.v)(se, `${W.offset} 0px ${W.offset} 0px`, !0)) && ne(!0);
						const F = { titleText: { value: `${A}` } },
							N = y()(F, K.lang || {}),
							pe = (0, S.u)(N, {});
						return (Array.isArray(L) && L.length) || B?.length
							? (0, t.Y)(M._, {
									children: (0, t.Y)('div', {
										...V,
										className: o()('ss__recommendation', Q, de),
										ref: se,
										children: oe
											? (0, t.FD)(I.l, {
													controller: x,
													children: [
														A && !ue && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...pe.titleText?.all, children: A }),
														J && (0, t.Y)('p', { className: 'ss__recommendation__description', children: J }),
														(0, t.Y)(c.FN, {
															prevButton: Z,
															nextButton: H,
															hideButtons: $,
															loop: ce,
															pagination: Y,
															...k.carousel,
															...te,
															children:
																Array.isArray(L) && L.length
																	? L.map((j, n) => (0, t.Y)(s.o, { controller: x, result: B[n], children: j }))
																	: B.map((j) =>
																			(0, t.Y)(s.o, {
																				controller: x,
																				result: j,
																				children:
																					z && x
																						? (0, R.Y)(z, { controller: x, result: j, treePath: k.result.treePath })
																						: (0, t.Y)(v.Q, { ...k.result, controller: x, result: j }, j.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(I.l, {
													controller: x,
													children:
														Array.isArray(L) && L.length
															? L.map((j, n) => (0, t.Y)(s.o, { controller: x, result: B[n], children: (0, t.Y)(t.FK, {}) }))
															: B.map((j) => (0, t.Y)(s.o, { controller: x, result: j, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(w, l, e) {
				'use strict';
				e.d(l, { l: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/dist/preact.module.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					f = e.n(o),
					D = e('./components/src/utilities/mergeStyles.ts');
				const y = () => (0, _.AH)({}),
					c = (0, g.PA)((v) => {
						const { children: R, className: m, internalClassName: u } = v,
							h = (0, i.v2)(R),
							C = (0, D.Z)(v, y);
						return h.length ? (0, t.Y)('div', { className: f()('ss__recommendation-profile-tracker', m, u), ...C, children: R }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(w, l, e) {
				'use strict';
				e.d(l, { o: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/classnames/index.js'),
					o = e.n(g),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, i.AH)({}) },
					v = (0, _.PA)((R) => {
						const m = (0, f.u)(),
							u = (0, D.v6)('resultTracker', m, {}, R),
							h = { impression: !0, click: !0 },
							{ children: C, result: M, track: U, controller: O, className: T, internalClassName: I, disableStyles: S, style: s } = u,
							a = { ...h, ...U },
							{ ref: P, inViewport: d } = (0, y.Q)();
						d && a.impression && O?.track.product.impression(M);
						const r = {};
						return (
							S ? s && (r.css = [s]) : (r.css = [c.ResultTracker(), s]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${O?.type}-result-tracker`, T, I),
								onClick: (b) => {
									a.click && O?.track.product.click(b, M);
								},
								ref: P,
								...r,
								children: C,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(w, l, e) {
				'use strict';
				e.d(l, { v: () => i });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (_, g = '0px', o = !1) => {
					const [f, D] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const y = new IntersectionObserver(
								([c]) => {
									D(c.isIntersecting), o && c.isIntersecting && y.unobserve(_.current);
								},
								{ rootMargin: g }
							);
							return (
								_.current && y.observe(_.current),
								() => {
									y.unobserve(_.current);
								}
							);
						}, []),
						f
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, l, e) {
				'use strict';
				e.d(l, { v: () => _ });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 250,
					_ = (o, f = {}) => {
						const { rootMargin: D = '0px', fireOnce: y = !1, threshold: c = 0, minVisibleTime: v = 0 } = f,
							[R, m] = (0, t.J0)(!1),
							u = (0, t.li)(null),
							h = (0, t.li)(null),
							[C, M] = (0, t.J0)(0),
							U = (0, t.hb)((O) => {
								(o.current = O), M((T) => T + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								m(!1);
								let O = null,
									T = null;
								if (!window.IntersectionObserver || !o.current) return;
								const I = () => {
										T && (window.clearInterval(T), (T = null));
									},
									S = () => {
										v > 0
											? ((h.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													m(!0), y && o.current && O && O.unobserve(o.current);
											  }, v)))
											: (m(!0), y && o.current && O && O.unobserve(o.current));
									},
									s = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (h.current = null), m(!1);
									};
								return (
									(O = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? o.current && g(o.current)
													? (I(), S())
													: (s(),
													  T ||
															(T = window.setInterval(() => {
																if (!o.current) {
																	I();
																	return;
																}
																g(o.current) && (I(), S());
															}, i)))
												: (I(), s());
										},
										{ rootMargin: D, threshold: c }
									)),
									o.current && O.observe(o.current),
									() => {
										m(!1), I(), u.current && window.clearTimeout(u.current), O && o.current && O.unobserve(o.current);
									}
								);
							}, [o, C]),
							{ inViewport: R, updateRef: U }
						);
					};
				function g(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(w, l, e) {
				'use strict';
				e.d(l, { F: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(w, l, e) {
				'use strict';
				e.d(l, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const _ = 0.7,
					g = 1e3;
				function o(f) {
					const D = (0, t.li)(null),
						{ inViewport: y, updateRef: c } = (0, i.v)(D, { ...f, fireOnce: !0, threshold: _, minVisibleTime: g });
					return { ref: D, inViewport: y, updateRef: c };
				}
			},
			'./components/src/utilities/snapify.ts'(w, l, e) {
				'use strict';
				e.d(l, { p: () => O });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					R = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					h = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const M = {},
					U = { globals: { siteId: 'atkzs2' } };
				class O {
					static recommendation(a) {
						const P = a.id;
						if (M[P]) return M[P];
						const d = (M[P] = I({ client: U, controller: a }));
						return (
							d.on('afterStore', async ({ controller: r }, b) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(a) {
						const P = a.id;
						if (M[P]) return M[P];
						const d = (M[P] = S({ client: U, controller: a }));
						return (
							d.on('afterStore', async ({ controller: r }, b) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
					static search(a) {
						const P = a.id;
						if (M[P]) return M[P];
						const d = (M[P] = T({ client: U, controller: a }));
						return (
							d.on('afterStore', async ({ controller: r }, b) => {
								r.log.debug('controller', r), r.log.debug('store', r.store.toJSON()), await b();
							}),
							d.init(),
							d
						);
					}
				}
				function T(s) {
					const a = new c.V(new R.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), v.X);
					return new i.Tp(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new D.U(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new C.J(s.client.globals),
					});
				}
				function I(s) {
					const a = new c.V(new R.E(), v.X).detach(!0);
					return new g.c(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new y.t(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new C.J(s.client.globals),
					});
				}
				function S(s) {
					const a = new c.V(new R.E(), v.X).detach();
					return new _.Z(s.controller, {
						client: new o.K(s.client.globals, s.client.config),
						store: new f.Y(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new h.V(),
						tracker: new C.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, l, e) {
				'use strict';
				e.d(l, { Z: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 'prism-block',
					g = (o) => {
						const f = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								f.current && o.className?.includes('lang-') && !o.className?.includes(_) && window?.Prism?.highlightElement(f.current);
							}, [o.className, o.children, f]),
							(0, t.Y)('code', { ...o, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (w.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.2afd0592.iframe.bundle.js.map
