(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1921],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(R, r, e) {
				'use strict';
				const t = (n) => n.replace(/_/g, '-').toLowerCase();
				e.d(r, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(R, r, e) {
				'use strict';
				e.d(r, { G: () => n });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(o, l) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(o, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(R, r, e) {
				'use strict';
				e.d(r, { Z: () => t });
				function t(o, l) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof o != 'number' || Number.isNaN(o)) return;
					const i = n(o, s.decimalPlaces).split('.');
					(i[0] = i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (i[1] = (i[1] || '').padEnd(s.decimalPlaces, '0'));
					let u = i.join(s.decimalSeparator);
					return s.symbolAfter ? (u = u + s.symbol) : (u = s.symbol + u), u;
				}
				function n(o, l) {
					const s = o.toString(),
						i = s.indexOf('.'),
						u = i == -1 ? s.length : 1 + i + (l || -1);
					return s.substr(0, u);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, r, e) {
				'use strict';
				e.d(r, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let o = n.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(R, r, e) {
				'use strict';
				e.d(r, { x: () => t });
				function t(n, o, l) {
					if (typeof n != 'string' || n.length <= o) return n;
					const s = n.lastIndexOf(' ', o),
						i = s != -1 ? s : o - 1;
					return n.substr(0, i) + (l || '');
				}
			},
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(R, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => f, __namedExportsOrder: () => T, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const u = `# Recommendation

Renders a carousel of product recommendations, built using the Carousel Component.

If using children, the provided children elements array length and order must match the results stored in the \`controller.store.results\` (or \`results\` prop) to avoid unexpected tracking behaviour.

Any modification to the results array and data are recommended to be made using an \`afterSearch\` and/or \`afterStore\` event via the Controller instead of making modifications in the component.


## Sub-components
- Carousel
- ResultTracker
- Result (default)

## Usage
\`\`\`tsx
import { Recommendation } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`tsx
<Recommendation controller={controller} />
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`tsx
<Recommendation controller={controller} loop={true} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`

If using children, the provided children elements array length and order must match the results stored in the \`results\` prop to avoid unexpected tracking behaviour.

\`\`\`tsx
<Recommendation controller={controller} results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

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

\`\`\`tsx
<Recommendation controller={controller} title={'Recommended Products'} />
\`\`\`

### hideTitle
The \`hideTitle\` prop hides the carousel title

\`\`\`tsx
<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />
\`\`\`

### description
The \`description\` prop specifies the carousel description

\`\`\`tsx
<Recommendation controller={controller} description={'Recommended Products are so awesome!'} />
\`\`\`

### pagination
The \`pagination\` prop specifies if the carousel should display pagination dots. 

\`\`\`tsx
<Recommendation controller={controller} pagination={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`tsx
<Recommendation vertical={true}>{children}<Recommendation/>
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`tsx
<Recommendation hideButtons={true}>{children}<Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Recommendation controller={controller} prevButton={'<'} />
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Recommendation controller={controller} nextButton={'>'} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\` and \`A11y\` modules by default.

\`\`\`tsx
import { Scrollbar } from 'swiper';
<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={{ draggable: true }} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
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

\`\`\`tsx
<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`
`,
					E = {
						title: 'Templates/Recommendation',
						component: o.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: l.Z } }, children: u }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(v, {}) })],
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
							...s.F,
						},
					},
					d = i.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					f = (v, { loaded: { controller: m } }) => (0, t.Y)(o.A, { ...v, controller: m });
				(f.loaders = [
					async () => (
						d.on('afterStore', async ({ controller: v }, m) => {
							v.store.results.forEach((D) => (D.mappings.core.url = 'javascript:void(0);')), await m();
						}),
						await d.search(),
						{ controller: d }
					),
				]),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const T = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(u),
					d = e('../../node_modules/swiper/swiper-react.mjs'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					D = e('../../node_modules/swiper/modules/navigation.mjs'),
					A = e('../../node_modules/swiper/modules/pagination.mjs'),
					O = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					B = e('../../node_modules/swiper/modules/a11y.mjs'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					L = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/hooks/useDisplaySettings.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const y = ({ vertical: j, theme: J }) =>
						(0, o.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: j ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: J?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: J?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: J?.variables?.colors?.primary || '#000' },
							},
						}),
					x = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					b = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					C = (0, i.PA)((j) => {
						const J = (0, U.u)(),
							de = (0, N.LU)(),
							me = {
								breakpoints: j.vertical ? JSON.parse(JSON.stringify(b)) : JSON.parse(JSON.stringify(x)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !j.breakpoints || !Object.keys(j.breakpoints).length ? 5 : void 0,
								slidesPerView: !j.breakpoints || !Object.keys(j.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: de,
							};
						let p = (0, v.v6)('carousel', J, me, j),
							h;
						if (
							!(j.theme?.type == 'templates' || J?.type == 'templates') &&
							p.breakpoints &&
							(Object.keys(p.breakpoints).forEach((a) => {
								const c = p.breakpoints[a];
								c.slidesPerView && (c.slidesPerView = Number(c.slidesPerView) || 1),
									c.slidesPerGroup && (c.slidesPerGroup = Number(c.slidesPerGroup) || 1);
							}),
							(h = (0, _.X)(p.breakpoints)),
							h && Object.keys(h).length)
						) {
							const a = E()(p?.theme || {}, h?.theme || {}, { arrayMerge: (c, he) => he });
							p.autoAdjustSlides &&
								p.children.length < h.slidesPerView &&
								((h.slidesPerView = p.children.length), (h.slidesPerGroup = p.children.length)),
								(p = { ...p, ...h, theme: a });
						}
						const {
								children: I,
								loop: ee,
								nextButton: w,
								prevButton: S,
								hideButtons: re,
								vertical: Q,
								onInit: ae,
								onBeforeInit: V,
								onAfterInit: le,
								onNextButtonClick: ie,
								onPrevButtonClick: te,
								onClick: X,
								disableStyles: G,
								style: Ee,
								styleScript: ve,
								themeStyleScript: ge,
								modules: ce,
								className: ue,
								internalClassName: _e,
								treePath: se,
								...H
							} = p,
							{ overrideElement: K, shouldRenderDefault: pe } = (0, P._)('carousel', p);
						if (!pe) return K;
						let k = p.pagination,
							g = p.navigation,
							F = p.scrollbar;
						const oe = { icon: { internalClassName: 'ss__carousel__icon', ...(0, T.s)({ disableStyles: G }), theme: p.theme, treePath: se } },
							W = Array.isArray(ce) ? [D.A, A.A, O.A, B.A].concat(ce) : [D.A, A.A, O.A, B.A],
							ne = W.filter((a, c) => W.indexOf(a) === c),
							Z = (0, n.li)(null),
							Y = (0, n.li)(null),
							z = (0, n.li)(null),
							fe = (0, m.Z)(p, y);
						(0, n.vJ)(() => {
							if (z.current) {
								const c = z.current.querySelector('.swiper');
								c?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									c?.classList.contains('swiper-vertical') && c.classList.add('swiper-container-vertical'),
									c?.classList.contains('swiper-horizontal') && c.classList.add('swiper-container-horizontal');
							}
							q();
						}, [j]),
							k && (typeof k == 'object' ? (k = { clickable: !0, ...k }) : (k = { clickable: !0 })),
							g &&
								(typeof g == 'object'
									? (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...g })
									: (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							F && (typeof F == 'object' ? (F = { enabled: !0, ...F }) : (F = { enabled: !0 }));
						const q = () => {
							if (z.current) {
								const c = z.current?.querySelectorAll('.swiper-slide-visible');
								c.forEach((he, Pe) => {
									he.classList.remove('swiper-last-visible-slide'), Pe == c.length - 1 && he.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete H.breakpoints,
							I?.length
								? (0, t.Y)(L._, {
										children: (0, t.FD)('div', {
											ref: z,
											...fe,
											className: s()('ss__carousel', Q ? 'ss__carousel-vertical' : '', ue, _e),
											children: [
												g !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': re }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: Z,
															onClick: te && ((a) => te(a)),
															children: S || (0, t.Y)(M.I, { icon: Q ? 'angle-up' : 'angle-left', ...oe.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(d.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (a) => {
														g &&
															a.params.navigation &&
															((a.params.navigation.prevEl = Z.current ? Z.current : void 0),
															(a.params.navigation.nextEl = Y.current ? Y.current : void 0)),
															V && V(a);
													},
													onInit: (a) => {
														ae && ae(a);
													},
													onAfterInit: (a) => {
														g &&
															a.navigation &&
															((a.navigation.onPrevClick = (c) => {
																c.preventDefault(),
																	!(a.isBeginning && !a.params.loop && !a.params.rewind) && (a.slidePrev(), a.emit('navigationPrev'));
															}),
															(a.navigation.onNextClick = (c) => {
																c.preventDefault(), !(a.isEnd && !a.params.loop && !a.params.rewind) && (a.slideNext(), a.emit('navigationNext'));
															})),
															le && le(a);
													},
													onClick: (a, c) => {
														X && X(a, c);
													},
													direction: Q ? 'vertical' : 'horizontal',
													loop: ee,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ne,
													...H,
													...h,
													controller: void 0,
													navigation: g,
													pagination: k,
													scrollbar: F,
													onResize: (a) => {
														H.onResize && H.onResize(), a.updateSlidesClasses(), q();
													},
													onTransitionEnd: () => {
														H.onTransitionEnd && H.onTransitionEnd(), q();
													},
													children: I.map((a) => (a != null ? (0, t.Y)(d.qr, { children: (0, f.Y)(a, { treePath: se }) }) : null)),
												}),
												g !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': re }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: Y,
															onClick: ie && ((a) => ie(a)),
															children: w || (0, t.Y)(M.I, { icon: Q ? 'angle-down' : 'angle-right', ...oe.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(r, ['FN', 0, C, 'K', 0, x, 'og', 0, b]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					i = e.n(s),
					u = e('./components/src/components/Atoms/Image/Image.tsx'),
					E = e('./components/src/components/Atoms/Price/Price.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					m = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					O = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					B = e('./components/src/types.ts'),
					M = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					L = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					U = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					N = e('./components/src/components/Atoms/Button/Button.tsx'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(_),
					y = e('./components/src/hooks/useLang.tsx'),
					x = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					b = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const C = () =>
						(0, l.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					j = (0, o.PA)((J) => {
						const de = (0, f.u)(),
							me = (0, T.LU)(),
							p = {
								layout: B.V.grid,
								treePath: me,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							h = (0, D.v6)('result', de, p, J),
							{
								result: I,
								hideBadge: ee,
								hideTitle: w,
								hidePricing: S,
								hideImage: re,
								detailSlot: Q,
								fallback: ae,
								disableStyles: V,
								className: le,
								internalClassName: ie,
								layout: te,
								onClick: X,
								controller: G,
								hideVariantSelections: Ee,
								hideAddToCartButton: ve,
								onAddToCartClick: ge,
								addToCartButtonText: ce,
								addToCartButtonSuccessText: ue,
								addToCartButtonSuccessTimeout: _e,
								hideRating: se,
								trackingRef: H,
								treePath: K,
							} = h,
							{ overrideElement: pe, shouldRenderDefault: k } = (0, x._)('result', {
								...h,
								customComponent: h.customComponent && h.customComponent !== 'Result' ? h.customComponent : void 0,
							});
						if (!k) return pe;
						const g = I?.display?.mappings.core || I?.mappings?.core,
							[F, oe] = (0, n.J0)(!1),
							W = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, m.s)({ disableStyles: V }),
									theme: h.theme,
									treePath: K,
								},
								price: { internalClassName: 'ss__result__price', ...(0, m.s)({ disableStyles: V }), theme: h.theme, treePath: K },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: I,
									...(0, m.s)({ disableStyles: V }),
									theme: h.theme,
									treePath: K,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: I,
									controller: G,
									...(0, m.s)({ disableStyles: V }),
									theme: h.theme,
									treePath: K,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: g?.name || '',
									src: g?.imageUrl || '',
									...(0, m.s)({ disableStyles: V, fallback: ae }),
									theme: h.theme,
									treePath: K,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: g?.rating || 0,
									count: Number(g?.ratingCount || 0),
									...(0, m.s)({ disableStyles: V }),
									theme: h.theme,
									treePath: K,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (c) => {
										oe(!0), ge && ge(c, I), G?.addToCart([I]), setTimeout(() => oe(!1), _e);
									},
									...(0, m.s)({ disableStyles: V }),
									theme: h.theme,
									treePath: K,
								},
							};
						let ne = g?.name;
						h.truncateTitle && (ne = O.x(g?.name || '', h.truncateTitle.limit, h.truncateTitle.append));
						const Z = (0, A.Z)(h, C),
							Y = { addToCartButtonText: { value: F ? ue : ce } },
							z = P()(Y, h.lang || {}),
							fe = (0, y.u)(z, { result: I, controller: G }),
							q = !!(g?.msrp && g?.price && g?.price < g?.msrp),
							a = G?.store?.config?.asyncState?.product?.price ? I.state.priceFetched : !0;
						return g
							? (0, t.Y)(d._, {
									children: (0, t.FD)('article', {
										...Z,
										className: i()('ss__result', `ss__result--${te}`, { 'ss__result--sale': q }, le, ie),
										ref: H,
										children: [
											!re &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: g.url,
														onClick: (c) => {
															X && X(c);
														},
														children: ee
															? (0, t.Y)(u._, { ...W.image })
															: (0, t.Y)(L.Q, { ...W.overlayBadge, controller: G, children: (0, t.Y)(u._, { ...W.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!ee && (0, t.Y)(M.W, { ...W.calloutBadge, controller: G }),
													!w &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: g.url,
																onClick: (c) => {
																	X && X(c);
																},
																dangerouslySetInnerHTML: { __html: ne || '' },
															}),
														}),
													!se && (0, t.Y)(U.G, { ...W.rating }),
													!S && a && g.price && g.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: q
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(E.g, { ...W.price, value: g.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(E.g, { ...W.price, value: g.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(E.g, { ...W.price, value: g.price }),
														  })
														: null,
													(0, v.Y)(Q, { result: I, treePath: K }),
													!Ee && I.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: I.variants?.selections.map((c) => (0, t.Y)(b.m, { ...W.variantSelection, type: c.type, selection: c })),
														  })
														: null,
													!ve &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(N.$, { ...W.button, ...fe.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(r, ['Q', 0, j]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(u),
					d = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					f = e('./components/src/components/Molecules/Result/Result.tsx'),
					T = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/hooks/useIntersection.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					B = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					U = e('./components/src/providers/treePath.tsx'),
					N = e('./components/src/hooks/useDisplaySettings.tsx'),
					_ = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const x = ({ vertical: C }) => (0, o.AH)({ height: C ? '100%' : void 0, '.ss__result__image-wrapper': { height: C ? '85%' : void 0 } }),
					b = (0, i.PA)((C) => {
						const j = (0, M.u)(),
							J = (0, U.LU)(),
							de = {
								breakpoints: C.vertical ? JSON.parse(JSON.stringify(d.og)) : JSON.parse(JSON.stringify(d.K)),
								pagination: !1,
								loop: !0,
								title: C.controller?.store?.profile?.display?.templateParameters?.title,
								description: C.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: J,
							},
							me = { name: C.controller?.store?.profile?.tag?.toLowerCase(), ...C };
						let p = (0, m.v6)('recommendation', j, de, me),
							h;
						!(C.theme?.type == 'templates' || j?.type == 'templates') &&
							p.breakpoints &&
							((h = (0, N.X)(p.breakpoints)), h && Object.keys(h).length && (p = { ...p, ...h }));
						const {
								title: I,
								description: ee,
								controller: w,
								children: S,
								loop: re,
								results: Q,
								pagination: ae,
								nextButton: V,
								prevButton: le,
								hideButtons: ie,
								disableStyles: te,
								className: X,
								internalClassName: G,
								style: Ee,
								styleScript: ve,
								themeStyleScript: ge,
								lazyRender: ce,
								vertical: ue,
								hideTitle: _e,
								treePath: se,
								...H
							} = p,
							K = p.resultComponent,
							pe = (0, L.uk)(),
							k = typeof K == 'string',
							g = k ? K : '',
							F = pe?.templates?.library.import.component.result || {},
							{ ComponentOverride: oe, shouldWaitForNamedOverride: W } = (0, O.x)(F, k ? g : void 0),
							ne = k ? oe : K,
							Z = { enabled: !0, offset: '10%', ...ce };
						if (!w || w.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const Y = Q || w.store?.results;
						if (Array.isArray(S) && S.length !== Y.length)
							return (
								w.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const z = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, v.s)({ disableStyles: te, vertical: ue }),
									theme: p?.theme,
									treePath: se,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, v.s)({ disableStyles: te }), theme: p?.theme, treePath: se },
							},
							fe = (0, D.Z)(p, x),
							[q, a] = (0, n.J0)(!1),
							c = (0, n.li)(null);
						(!Z?.enabled || (0, A.v)(c, `${Z.offset} 0px ${Z.offset} 0px`, !0)) && a(!0);
						const Pe = { titleText: { value: `${I}` } },
							be = E()(Pe, p.lang || {}),
							Oe = (0, P.u)(be, {});
						return (Array.isArray(S) && S.length) || Y?.length
							? (0, t.Y)(B._, {
									children: (0, t.Y)('div', {
										...fe,
										className: s()('ss__recommendation', X, G),
										ref: c,
										children: q
											? (0, t.FD)(_.l, {
													controller: w,
													children: [
														I && !_e && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...Oe.titleText?.all, children: I }),
														ee && (0, t.Y)('p', { className: 'ss__recommendation__description', children: ee }),
														(0, t.Y)(d.FN, {
															prevButton: le,
															nextButton: V,
															hideButtons: ie,
															loop: re,
															pagination: ae,
															...z.carousel,
															...H,
															children:
																Array.isArray(S) && S.length
																	? S.map(($, ye) => (0, t.Y)(y.o, { controller: w, result: Y[ye], children: $ }))
																	: Y.map(($) =>
																			(0, t.Y)(y.o, {
																				controller: w,
																				result: $,
																				children:
																					ne && w
																						? (0, T.Y)(ne, {
																								controller: w,
																								result: $,
																								treePath: z.result.treePath,
																								theme: k ? E()(p.theme || {}, { components: { result: { customComponent: K } } }) : p.theme,
																						  })
																						: W
																						? null
																						: (0, t.Y)(f.Q, { ...z.result, controller: w, result: $ }, $.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(_.l, {
													controller: w,
													children:
														Array.isArray(S) && S.length
															? S.map(($, ye) => (0, t.Y)(y.o, { controller: w, result: Y[ye], children: (0, t.Y)(t.FK, {}) }))
															: Y.map(($) => (0, t.Y)(y.o, { controller: w, result: $, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(r, ['A', 0, b]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					i = e.n(s),
					u = e('./components/src/utilities/mergeStyles.ts');
				const E = () => (0, o.AH)({}),
					d = (0, l.PA)((f) => {
						const { children: T, className: v, internalClassName: m } = f,
							D = (0, n.v2)(T),
							A = (0, u.Z)(f, E);
						return D.length ? (0, t.Y)('div', { className: i()('ss__recommendation-profile-tracker', v, m), ...A, children: T }) : null;
					});
				e.d(r, ['l', 0, d]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/createImpressionObserver.ts');
				const d = { ResultTracker: () => (0, n.AH)({}) },
					f = (0, o.PA)((T) => {
						const v = (0, i.u)(),
							m = (0, u.v6)('resultTracker', v, {}, T),
							D = { impression: !0, click: !0 },
							{ children: A, result: O, track: B, controller: M, className: L, internalClassName: U, disableStyles: N, style: _ } = m,
							P = { ...D, ...B },
							{ ref: y, inViewport: x } = (0, E.Q)();
						x && P.impression && M?.track.product.impression(O);
						const b = {};
						return (
							N ? _ && (b.css = [_]) : (b.css = [d.ResultTracker(), _]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${M?.type}-result-tracker`, L, U),
								onClick: (C) => {
									P.click && M?.track.product.click(C, O);
								},
								ref: y,
								...b,
								children: A,
							})
						);
					});
				e.d(r, ['o', 0, f]);
			},
			'./components/src/hooks/useIntersection.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = (o, l = '0px', s = !1) => {
					const [i, u] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const E = new IntersectionObserver(
								([d]) => {
									u(d.isIntersecting), s && d.isIntersecting && E.unobserve(o.current);
								},
								{ rootMargin: l }
							);
							return (
								o.current && E.observe(o.current),
								() => {
									E.unobserve(o.current);
								}
							);
						}, []),
						i
					);
				};
				e.d(r, ['v', 0, n]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 250,
					o = (s, i = {}) => {
						const { rootMargin: u = '0px', fireOnce: E = !1, threshold: d = 0, minVisibleTime: f = 0 } = i,
							[T, v] = (0, t.J0)(!1),
							m = (0, t.li)(null),
							D = (0, t.li)(null),
							[A, O] = (0, t.J0)(0),
							B = (0, t.hb)((M) => {
								(s.current = M), O((L) => L + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								v(!1);
								let M = null,
									L = null;
								if (!window.IntersectionObserver || !s.current) return;
								const U = () => {
										L && (window.clearInterval(L), (L = null));
									},
									N = () => {
										f > 0
											? ((D.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													v(!0), E && s.current && M && M.unobserve(s.current);
											  }, f)))
											: (v(!0), E && s.current && M && M.unobserve(s.current));
									},
									_ = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (D.current = null), v(!1);
									};
								return (
									(M = new IntersectionObserver(
										([P]) => {
											P.isIntersecting
												? s.current && l(s.current)
													? (U(), N())
													: (_(),
													  L ||
															(L = window.setInterval(() => {
																if (!s.current) {
																	U();
																	return;
																}
																l(s.current) && (U(), N());
															}, n)))
												: (U(), _());
										},
										{ rootMargin: u, threshold: d }
									)),
									s.current && M.observe(s.current),
									() => {
										v(!1), U(), m.current && window.clearTimeout(m.current), M && s.current && M.unobserve(s.current);
									}
								);
							}, [s, A]),
							{ inViewport: T, updateRef: B }
						);
					};
				function l(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, o]);
			},
			'./components/src/types.ts'(R, r, e) {
				'use strict';
				e.d(r, { Q: () => n, V: () => t });
				var t = ((o) => ((o.grid = 'grid'), (o.list = 'list'), o))(t || {}),
					n = ((o) => (
						(o.GRID = 'grid'),
						(o.PALETTE = 'palette'),
						(o.LIST = 'list'),
						(o.SLIDER = 'slider'),
						(o.HIERARCHY = 'hierarchy'),
						(o.TOGGLE = 'toggle'),
						o
					))(n || {});
			},
			'./components/src/utilities/componentArgs.ts'(R, r, e) {
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
				e.d(r, ['F', 0, t]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(R, r, e) {
				'use strict';
				e.d(r, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					l = 1e3;
				function s(i) {
					const u = (0, t.li)(null),
						{ inViewport: E, updateRef: d } = (0, n.v)(u, { ...i, fireOnce: !0, threshold: o, minVisibleTime: l });
					return { ref: u, inViewport: E, updateRef: d };
				}
			},
			'./components/src/utilities/snapify.ts'(R, r, e) {
				'use strict';
				e.d(r, { p: () => M });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					v = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					D = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					A = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const O = {},
					B = { globals: { siteId: 'atkzs2' } };
				class M {
					static recommendation(P) {
						const y = P.id;
						if (O[y]) return O[y];
						const x = (O[y] = U({ client: B, controller: P }));
						return (
							x.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(P) {
						const y = P.id;
						if (O[y]) return O[y];
						const x = (O[y] = N({ client: B, controller: P }));
						return (
							x.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
					static search(P) {
						const y = P.id;
						if (O[y]) return O[y];
						const x = (O[y] = L({ client: B, controller: P }));
						return (
							x.on('afterStore', async ({ controller: b }, C) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
				}
				function L(_) {
					const P = new d.V(new T.E({ settings: { coreType: 'query', corePrefix: _.controller.id } }), f.X);
					return new n.Tp(_.controller, {
						client: new s.K(_.client.globals, _.client.config),
						store: new u.U(_.controller, { urlManager: P }),
						urlManager: P,
						eventManager: new v.E(),
						profiler: new m.U(),
						logger: new D.V(),
						tracker: new A.J(_.client.globals),
					});
				}
				function U(_) {
					const P = new d.V(new T.E(), f.X).detach(!0);
					return new l.c(_.controller, {
						client: new s.K(_.client.globals, _.client.config),
						store: new E.t(_.controller, { urlManager: P }),
						urlManager: P,
						eventManager: new v.E(),
						profiler: new m.U(),
						logger: new D.V(),
						tracker: new A.J(_.client.globals),
					});
				}
				function N(_) {
					const P = new d.V(new T.E(), f.X).detach();
					return new o.Z(_.controller, {
						client: new s.K(_.client.globals, _.client.config),
						store: new i.Y(_.controller, { urlManager: P }),
						urlManager: P,
						eventManager: new v.E(),
						profiler: new m.U(),
						logger: new D.V(),
						tracker: new A.J(_.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					l = (s) => {
						const i = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								i.current && s.className?.includes('lang-') && !s.className?.includes(o) && window?.Prism?.highlightElement(i.current);
							}, [s.className, s.children, i]),
							(0, t.Y)('code', { ...s, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, l]);
			},
			'../../node_modules/colord/plugins/names.mjs'(R, r, e) {
				'use strict';
				e.d(r, { A: () => t }), e.dn(t);
				function t(n, o) {
					var l = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						s = {};
					for (var i in l) s[l[i]] = i;
					var u = {};
					(n.prototype.toName = function (E) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var d,
							f,
							T = s[this.toHex()];
						if (T) return T;
						if (E?.closest) {
							var v = this.toRgb(),
								m = 1 / 0,
								D = 'black';
							if (!u.length) for (var A in l) u[A] = new n(l[A]).toRgb();
							for (var O in l) {
								var B = ((d = v), (f = u[O]), Math.pow(d.r - f.r, 2) + Math.pow(d.g - f.g, 2) + Math.pow(d.b - f.b, 2));
								B < m && ((m = B), (D = O));
							}
							return D;
						}
					}),
						o.string.push([
							function (E) {
								var d = E.toLowerCase(),
									f = d === 'transparent' ? '#0000' : l[d];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function r(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (R.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.f2d25669.iframe.bundle.js.map
