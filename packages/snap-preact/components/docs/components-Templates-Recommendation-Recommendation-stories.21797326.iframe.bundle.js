(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1921],
		{
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(j, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => E, __namedExportsOrder: () => b, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					v = e('./components/src/utilities/storybook.tsx'),
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
					P = {
						title: 'Templates/Recommendation',
						component: u.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: v.Z } }, children: D }), (0, t.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, t.Y)('div', { style: { maxWidth: '900px', height: '500px' }, children: (0, t.Y)(p, {}) })],
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
					d = f.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					E = (p, { loaded: { controller: m } }) => (0, t.Y)(u.A, { ...p, controller: m });
				(E.loaders = [
					async () => (
						d.on('afterStore', async ({ controller: p }, m) => {
							p.store.results.forEach((_) => (_.mappings.core.url = 'javascript:void(0);')), await m();
						}),
						await d.search(),
						{ controller: d }
					),
				]),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
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
								...E.parameters?.docs?.source,
							},
						},
					});
				const b = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(j, l, e) {
				'use strict';
				e.d(l, { FN: () => i, K: () => I, og: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					o = e.n(v),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(D),
					d = e('../../node_modules/swiper/swiper-react.mjs'),
					E = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/swiper/modules/index.mjs'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/hooks/useDisplaySettings.tsx');
				const B = ({ vertical: s, theme: h }) =>
						(0, u.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: s ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: h?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: h?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: h?.variables?.colors?.primary || '#000' },
							},
						}),
					I = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					r = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					i = (0, f.PA)((s) => {
						const h = (0, L.u)(),
							g = (0, y.LU)(),
							U = {
								breakpoints: s.vertical ? JSON.parse(JSON.stringify(r)) : JSON.parse(JSON.stringify(I)),
								pagination: !1,
								slidesPerGroup: !s.breakpoints || !Object.keys(s.breakpoints).length ? 5 : void 0,
								slidesPerView: !s.breakpoints || !Object.keys(s.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: g,
							};
						let O = (0, p.v6)('carousel', h, U, s),
							R;
						if (
							!(s.theme?.name || h.name) &&
							O.breakpoints &&
							(Object.keys(O.breakpoints).forEach((n) => {
								const c = O.breakpoints[n];
								c.slidesPerView && (c.slidesPerView = Number(c.slidesPerView) || 1),
									c.slidesPerGroup && (c.slidesPerGroup = Number(c.slidesPerGroup) || 1);
							}),
							(R = (0, T.X)(O.breakpoints)),
							R && Object.keys(R).length)
						) {
							const n = P()(O?.theme || {}, R?.theme || {}, { arrayMerge: (c, A) => A });
							O.autoAdjustSlides &&
								O.children.length < R.slidesPerView &&
								((R.slidesPerView = O.children.length), (R.slidesPerGroup = O.children.length)),
								(O = { ...O, ...R, theme: n });
						}
						const {
							children: Y,
							loop: F,
							nextButton: Q,
							prevButton: x,
							hideButtons: w,
							vertical: z,
							onInit: q,
							onBeforeInit: ee,
							onAfterInit: te,
							onNextButtonClick: oe,
							onPrevButtonClick: ne,
							onClick: X,
							disableStyles: se,
							style: ce,
							styleScript: de,
							themeStyleScript: pe,
							modules: le,
							className: me,
							internalClassName: ae,
							treePath: re,
							...k
						} = O;
						let K = O.pagination,
							V = O.navigation,
							S = O.scrollbar;
						const W = { icon: { internalClassName: 'ss__carousel__icon', ...(0, b.s)({ disableStyles: se }), theme: O.theme, treePath: re } },
							G = Array.isArray(le) ? [_.Vx, _.dK, _.Ze, _.Jq].concat(le) : [_.Vx, _.dK, _.Ze, _.Jq],
							ie = G.filter((n, c) => G.indexOf(n) === c),
							H = (0, a.li)(null),
							Z = (0, a.li)(null),
							N = (0, a.li)(null),
							ue = (0, m.Z)(O, B);
						(0, a.vJ)(() => {
							if (N.current) {
								const c = N.current.querySelector('.swiper');
								c?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									c?.classList.contains('swiper-vertical') && c.classList.add('swiper-container-vertical'),
									c?.classList.contains('swiper-horizontal') && c.classList.add('swiper-container-horizontal');
							}
							$();
						}, [s]),
							K && (typeof K == 'object' ? (K = { clickable: !0, ...K }) : (K = { clickable: !0 })),
							V && typeof V == 'object'
								? (V = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...V })
								: (V = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							S && (typeof S == 'object' ? (S = { enabled: !0, ...S }) : (S = { enabled: !0 }));
						const $ = () => {
							if (N.current) {
								const c = N.current?.querySelectorAll('.swiper-slide-visible');
								c.forEach((A, J) => {
									A.classList.remove('swiper-last-visible-slide'), J == c.length - 1 && A.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete k.breakpoints,
							Y?.length
								? (0, t.Y)(M._, {
										children: (0, t.FD)('div', {
											ref: N,
											...ue,
											className: o()('ss__carousel', z ? 'ss__carousel-vertical' : '', me, ae),
											children: [
												(0, t.Y)('div', {
													className: o()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': w }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: H,
														onClick: ne && ((n) => ne(n)),
														children: x || (0, t.Y)(C.I, { icon: z ? 'angle-up' : 'angle-left', ...W.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(d.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (n) => {
														(n.params.navigation.prevEl = H.current ? H.current : void 0),
															(n.params.navigation.nextEl = Z.current ? Z.current : void 0),
															ee && ee(n);
													},
													onInit: (n) => {
														q && q(n);
													},
													onAfterInit: (n) => {
														(n.navigation.onPrevClick = (c) => {
															c.preventDefault(), !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), n.emit('navigationPrev'));
														}),
															(n.navigation.onNextClick = (c) => {
																c.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), n.emit('navigationNext'));
															}),
															te && te(n);
													},
													onClick: (n, c) => {
														X && X(n, c);
													},
													direction: z ? 'vertical' : 'horizontal',
													loop: F,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ie,
													...k,
													...R,
													controller: void 0,
													navigation: V,
													pagination: K,
													scrollbar: S,
													onResize: (n) => {
														k.onResize && k.onResize(), n.updateSlidesClasses(), $();
													},
													onTransitionEnd: () => {
														k.onTransitionEnd && k.onTransitionEnd(), $();
													},
													children: Y.map((n) => (n != null ? (0, t.Y)(d.qr, { children: (0, E.Y)(n, { treePath: re }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: o()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': w }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: Z,
														onClick: oe && ((n) => oe(n)),
														children: Q || (0, t.Y)(C.I, { icon: z ? 'angle-down' : 'angle-right', ...W.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(j, l, e) {
				'use strict';
				e.d(l, { A: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					o = e.n(v),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(D),
					d = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					E = e('./components/src/components/Molecules/Result/Result.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useIntersection.tsx'),
					C = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/hooks/useDisplaySettings.tsx'),
					T = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					B = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const r = ({ vertical: s }) => (0, u.AH)({ height: s ? '100%' : void 0, '.ss__result__image-wrapper': { height: s ? '85%' : void 0 } }),
					i = (0, f.PA)((s) => {
						const h = (0, M.u)(),
							g = (0, L.LU)(),
							U = {
								breakpoints: s.vertical ? JSON.parse(JSON.stringify(d.og)) : JSON.parse(JSON.stringify(d.K)),
								pagination: !1,
								loop: !0,
								title: s.controller?.store?.profile?.display?.templateParameters?.title,
								description: s.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: g,
							},
							O = { name: s.controller?.store?.profile?.tag?.toLowerCase(), ...s };
						let R = (0, p.v6)('recommendation', h, U, O),
							Y;
						!(s.theme?.name || h.name) && R.breakpoints && ((Y = (0, y.X)(R.breakpoints)), Y && Object.keys(Y).length && (R = { ...R, ...Y }));
						const {
								title: F,
								description: Q,
								controller: x,
								children: w,
								loop: z,
								results: q,
								pagination: ee,
								nextButton: te,
								prevButton: oe,
								hideButtons: ne,
								resultComponent: X,
								disableStyles: se,
								className: ce,
								internalClassName: de,
								style: pe,
								styleScript: le,
								themeStyleScript: me,
								lazyRender: ae,
								vertical: re,
								hideTitle: k,
								treePath: K,
								...V
							} = R,
							S = { enabled: !0, offset: '10%', ...ae };
						if (!x || x.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const W = q || x.store?.results;
						if (Array.isArray(w) && w.length !== W.length)
							return (
								x.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const G = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, b.s)({ disableStyles: se, vertical: re }),
									theme: R?.theme,
									treePath: K,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, b.s)({ disableStyles: se }), theme: R?.theme, treePath: K },
							},
							ie = (0, m.Z)(R, r),
							[H, Z] = (0, a.J0)(!1),
							N = (0, a.li)(null);
						(!S?.enabled || (0, _.v)(N, `${S.offset} 0px ${S.offset} 0px`, !0)) && Z(!0);
						const $ = { titleText: { value: `${F}` } },
							n = P()($, R.lang || {}),
							c = (0, B.u)(n, {});
						return (Array.isArray(w) && w.length) || W?.length
							? (0, t.Y)(C._, {
									children: (0, t.Y)('div', {
										...ie,
										className: o()('ss__recommendation', ce, de),
										ref: N,
										children: H
											? (0, t.FD)(T.l, {
													controller: x,
													children: [
														F && !k && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...c.titleText?.all, children: F }),
														Q && (0, t.Y)('p', { className: 'ss__recommendation__description', children: Q }),
														(0, t.Y)(d.FN, {
															prevButton: oe,
															nextButton: te,
															hideButtons: ne,
															loop: z,
															pagination: ee,
															...G.carousel,
															...V,
															children:
																Array.isArray(w) && w.length
																	? w.map((A, J) => (0, t.Y)(I.o, { controller: x, result: W[J], children: A }))
																	: W.map((A) =>
																			(0, t.Y)(I.o, {
																				controller: x,
																				result: A,
																				children: (() => {
																					if (X && x) {
																						const J = X;
																						return (0, t.Y)(J, { controller: x, result: A, treePath: G.result.treePath });
																					} else return (0, t.Y)(E.Q, { ...G.result, controller: x, result: A }, A.id);
																				})(),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(T.l, {
													controller: x,
													children:
														Array.isArray(w) && w.length
															? w.map((A, J) => (0, t.Y)(I.o, { controller: x, result: W[J], children: (0, t.Y)(t.FK, {}) }))
															: W.map((A) => (0, t.Y)(I.o, { controller: x, result: A, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(j, l, e) {
				'use strict';
				e.d(l, { l: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					f = e.n(o),
					D = e('./components/src/utilities/mergeStyles.ts');
				const P = () => (0, u.AH)({}),
					d = (0, v.PA)((E) => {
						const { children: b, className: p, internalClassName: m } = E,
							_ = (0, a.v2)(b),
							C = (0, D.Z)(E, P);
						return _.length ? (0, t.Y)('div', { className: f()('ss__recommendation-profile-tracker', p, m), ...C, children: b }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(j, l, e) {
				'use strict';
				e.d(l, { o: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('../../node_modules/classnames/index.js'),
					o = e.n(v),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, a.AH)({}) },
					E = (0, u.PA)((b) => {
						const p = (0, f.u)(),
							m = (0, D.v6)('resultTracker', p, {}, b),
							_ = { impression: !0, click: !0 },
							{ children: C, result: M, track: L, controller: y, className: T, internalClassName: B, disableStyles: I, style: r } = m,
							i = { ..._, ...L },
							{ ref: s, inViewport: h } = (0, P.Q)();
						h && i.impression && y?.track.product.impression(M);
						const g = {};
						return (
							I ? r && (g.css = [r]) : (g.css = [d.ResultTracker(), r]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${y?.type}-result-tracker`, T, B),
								onClick: (U) => {
									i.click && y?.track.product.click(U, M);
								},
								ref: s,
								...g,
								children: C,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(j, l, e) {
				'use strict';
				e.d(l, { v: () => a });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = (u, v = '0px', o = !1) => {
					const [f, D] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const P = new IntersectionObserver(
								([d]) => {
									D(d.isIntersecting), o && d.isIntersecting && P.unobserve(u.current);
								},
								{ rootMargin: v }
							);
							return (
								u.current && P.observe(u.current),
								() => {
									P.unobserve(u.current);
								}
							);
						}, []),
						f
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(j, l, e) {
				'use strict';
				e.d(l, { v: () => u });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 250,
					u = (o, f = {}) => {
						const { rootMargin: D = '0px', fireOnce: P = !1, threshold: d = 0, minVisibleTime: E = 0 } = f,
							[b, p] = (0, t.J0)(!1),
							m = (0, t.li)(null),
							_ = (0, t.li)(null),
							[C, M] = (0, t.J0)(0),
							L = (0, t.hb)((y) => {
								(o.current = y), M((T) => T + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								p(!1);
								let y = null,
									T = null;
								if (!window.IntersectionObserver || !o.current) return;
								const B = () => {
										T && (window.clearInterval(T), (T = null));
									},
									I = () => {
										E > 0
											? ((_.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													p(!0), P && o.current && y && y.unobserve(o.current);
											  }, E)))
											: (p(!0), P && o.current && y && y.unobserve(o.current));
									},
									r = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (_.current = null), p(!1);
									};
								return (
									(y = new IntersectionObserver(
										([i]) => {
											i.isIntersecting
												? o.current && v(o.current)
													? (B(), I())
													: (r(),
													  T ||
															(T = window.setInterval(() => {
																if (!o.current) {
																	B();
																	return;
																}
																v(o.current) && (B(), I());
															}, a)))
												: (B(), r());
										},
										{ rootMargin: D, threshold: d }
									)),
									o.current && y.observe(o.current),
									() => {
										p(!1), B(), m.current && window.clearTimeout(m.current), y && o.current && y.unobserve(o.current);
									}
								);
							}, [o, C]),
							{ inViewport: b, updateRef: L }
						);
					};
				function v(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(j, l, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(j, l, e) {
				'use strict';
				e.d(l, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const u = 0.7,
					v = 1e3;
				function o(f) {
					const D = (0, t.li)(null),
						{ inViewport: P, updateRef: d } = (0, a.v)(D, { ...f, fireOnce: !0, threshold: u, minVisibleTime: v });
					return { ref: D, inViewport: P, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(j, l, e) {
				'use strict';
				e.d(l, { p: () => y });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					_ = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const M = {},
					L = { globals: { siteId: 'atkzs2' } };
				class y {
					static recommendation(i) {
						const s = i.id;
						if (M[s]) return M[s];
						const h = (M[s] = B({ client: L, controller: i }));
						return (
							h.on('afterStore', async ({ controller: g }, U) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await U();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(i) {
						const s = i.id;
						if (M[s]) return M[s];
						const h = (M[s] = I({ client: L, controller: i }));
						return (
							h.on('afterStore', async ({ controller: g }, U) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await U();
							}),
							h.init(),
							h
						);
					}
					static search(i) {
						const s = i.id;
						if (M[s]) return M[s];
						const h = (M[s] = T({ client: L, controller: i }));
						return (
							h.on('afterStore', async ({ controller: g }, U) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await U();
							}),
							h.init(),
							h
						);
					}
				}
				function T(r) {
					const i = new d.V(new b.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), E.X);
					return new a.Tp(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new D.U(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new _.V(),
						tracker: new C.J(r.client.globals),
					});
				}
				function B(r) {
					const i = new d.V(new b.E(), E.X).detach(!0);
					return new v.c(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new P.t(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new _.V(),
						tracker: new C.J(r.client.globals),
					});
				}
				function I(r) {
					const i = new d.V(new b.E(), E.X).detach();
					return new u.Z(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new f.Y(r.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new p.E(),
						profiler: new m.U(),
						logger: new _.V(),
						tracker: new C.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(j, l, e) {
				'use strict';
				e.d(l, { Z: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					v = (o) => {
						const f = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								f.current && o.className?.includes('lang-') && !o.className?.includes(u) && window?.Prism?.highlightElement(f.current);
							}, [o.className, o.children, f]),
							(0, t.Y)('code', { ...o, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(j) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (j.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.21797326.iframe.bundle.js.map
