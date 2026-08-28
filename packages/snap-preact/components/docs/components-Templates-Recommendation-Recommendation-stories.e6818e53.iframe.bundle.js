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
				function n(s, i) {
					const o = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...i };
					return (0, t.Z)(s, o);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(R, r, e) {
				'use strict';
				e.d(r, { Z: () => t });
				function t(s, i) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...i };
					if (typeof s != 'number' || Number.isNaN(s)) return;
					const c = n(s, o.decimalPlaces).split('.');
					(c[0] = c[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (c[1] = (c[1] || '').padEnd(o.decimalPlaces, '0'));
					let u = c.join(o.decimalSeparator);
					return o.symbolAfter ? (u = u + o.symbol) : (u = o.symbol + u), u;
				}
				function n(s, i) {
					const o = s.toString(),
						c = o.indexOf('.'),
						u = c == -1 ? o.length : 1 + c + (i || -1);
					return o.substr(0, u);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, r, e) {
				'use strict';
				e.d(r, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let s = n.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(R, r, e) {
				'use strict';
				e.d(r, { x: () => t });
				function t(n, s, i) {
					if (typeof n != 'string' || n.length <= s) return n;
					const o = n.lastIndexOf(' ', s),
						c = o != -1 ? o : s - 1;
					return n.substr(0, c) + (i || '');
				}
			},
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(R, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => _, __namedExportsOrder: () => x, default: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					c = e('./components/src/utilities/snapify.ts');
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

## Lang

The \`lang\` prop allows you to override translatable text strings used by the Recommendation component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`titleText\` | Recommendation carousel title | \`controller\` (RecommendationController) |

### Example

\`\`\`tsx
<Recommendation
	controller={controller}
	lang={{
		titleText: {
			value: 'You May Also Like',
		},
	}}
/>
\`\`\`
`,
					f = {
						title: 'Templates/Recommendation',
						component: s.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: i.Z } }, children: u }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(E, {}) })],
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
					m = c.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					_ = (E, { loaded: { controller: d } }) => (0, t.Y)(s.A, { ...E, controller: d });
				(_.loaders = [
					async () => (
						m.on('afterStore', async ({ controller: E }, d) => {
							E.store.results.forEach((M) => (M.mappings.core.url = 'javascript:void(0);')), await d();
						}),
						await m.search(),
						{ controller: m }
					),
				]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
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
								..._.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(u),
					m = e('../../node_modules/swiper/swiper-react.mjs'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					M = e('../../node_modules/swiper/modules/navigation.mjs'),
					B = e('../../node_modules/swiper/modules/pagination.mjs'),
					P = e('../../node_modules/swiper/modules/scrollbar.mjs'),
					w = e('../../node_modules/swiper/modules/a11y.mjs'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					U = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useDisplaySettings.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = ({ vertical: T, theme: J }) =>
						(0, s.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: T ? '100%' : void 0,
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
					b = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					v = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					V = (0, c.PA)((T) => {
						const J = (0, K.u)(),
							ne = (0, N.LU)(),
							pe = {
								breakpoints: T.vertical ? JSON.parse(JSON.stringify(v)) : JSON.parse(JSON.stringify(b)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !T.breakpoints || !Object.keys(T.breakpoints).length ? 5 : void 0,
								slidesPerView: !T.breakpoints || !Object.keys(T.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ne,
							};
						let C = (0, E.v6)('carousel', J, pe, T),
							l;
						if (
							!(T.theme?.type == 'templates' || J?.type == 'templates') &&
							C.breakpoints &&
							(Object.keys(C.breakpoints).forEach((a) => {
								const g = C.breakpoints[a];
								g.slidesPerView && (g.slidesPerView = Number(g.slidesPerView) || 1),
									g.slidesPerGroup && (g.slidesPerGroup = Number(g.slidesPerGroup) || 1);
							}),
							(l = (0, p.X)(C.breakpoints)),
							l && Object.keys(l).length)
						) {
							const a = f()(C?.theme || {}, l?.theme || {}, { arrayMerge: (g, $) => $ });
							C.autoAdjustSlides &&
								C.children.length < l.slidesPerView &&
								((l.slidesPerView = C.children.length), (l.slidesPerGroup = C.children.length)),
								(C = { ...C, ...l, theme: a });
						}
						const {
								children: A,
								loop: q,
								nextButton: re,
								prevButton: j,
								hideButtons: W,
								vertical: ee,
								onInit: ae,
								onBeforeInit: Y,
								onAfterInit: le,
								onNextButtonClick: ie,
								onPrevButtonClick: ce,
								onClick: H,
								disableStyles: G,
								style: Ee,
								styleScript: Pe,
								themeStyleScript: ve,
								modules: fe,
								className: he,
								internalClassName: ge,
								treePath: de,
								...F
							} = C,
							{ overrideElement: me, shouldRenderDefault: te } = (0, h._)('carousel', C);
						if (!te) return me;
						let I = C.pagination,
							k = C.navigation,
							X = C.scrollbar;
						const O = { icon: { internalClassName: 'ss__carousel__icon', ...(0, x.s)({ disableStyles: G }), theme: C.theme, treePath: de } },
							ue = Array.isArray(fe) ? [M.A, B.A, P.A, w.A].concat(fe) : [M.A, B.A, P.A, w.A],
							_e = ue.filter((a, g) => ue.indexOf(a) === g),
							L = (0, n.li)(null),
							Q = (0, n.li)(null),
							S = (0, n.li)(null),
							oe = (0, d.Z)(C, D);
						(0, n.vJ)(() => {
							if (S.current) {
								const g = S.current.querySelector('.swiper');
								g?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									g?.classList.contains('swiper-vertical') && g.classList.add('swiper-container-vertical'),
									g?.classList.contains('swiper-horizontal') && g.classList.add('swiper-container-horizontal');
							}
							se();
						}, [T]),
							I && (typeof I == 'object' ? (I = { clickable: !0, ...I }) : (I = { clickable: !0 })),
							k &&
								(typeof k == 'object'
									? (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...k })
									: (k = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							X && (typeof X == 'object' ? (X = { enabled: !0, ...X }) : (X = { enabled: !0 }));
						const se = () => {
							if (S.current) {
								const g = S.current?.querySelectorAll('.swiper-slide-visible');
								g.forEach(($, z) => {
									$.classList.remove('swiper-last-visible-slide'), z == g.length - 1 && $.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete F.breakpoints,
							A?.length
								? (0, t.Y)(U._, {
										children: (0, t.FD)('div', {
											ref: S,
											...oe,
											className: o()('ss__carousel', ee ? 'ss__carousel-vertical' : '', he, ge),
											children: [
												k !== !1 &&
													(0, t.Y)('div', {
														className: o()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: L,
															onClick: ce && ((a) => ce(a)),
															children: j || (0, t.Y)(y.I, { icon: ee ? 'angle-up' : 'angle-left', ...O.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(m.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (a) => {
														k &&
															a.params.navigation &&
															((a.params.navigation.prevEl = L.current ? L.current : void 0),
															(a.params.navigation.nextEl = Q.current ? Q.current : void 0)),
															Y && Y(a);
													},
													onInit: (a) => {
														ae && ae(a);
													},
													onAfterInit: (a) => {
														k &&
															a.navigation &&
															((a.navigation.onPrevClick = (g) => {
																g.preventDefault(),
																	!(a.isBeginning && !a.params.loop && !a.params.rewind) && (a.slidePrev(), a.emit('navigationPrev'));
															}),
															(a.navigation.onNextClick = (g) => {
																g.preventDefault(), !(a.isEnd && !a.params.loop && !a.params.rewind) && (a.slideNext(), a.emit('navigationNext'));
															})),
															le && le(a);
													},
													onClick: (a, g) => {
														H && H(a, g);
													},
													direction: ee ? 'vertical' : 'horizontal',
													loop: q,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: _e,
													...F,
													...l,
													controller: void 0,
													navigation: k,
													pagination: I,
													scrollbar: X,
													onResize: (a) => {
														F.onResize && F.onResize(), a.updateSlidesClasses(), se();
													},
													onTransitionEnd: () => {
														F.onTransitionEnd && F.onTransitionEnd(), se();
													},
													children: A.map((a) => (a != null ? (0, t.Y)(m.qr, { children: (0, _.Y)(a, { treePath: de }) }) : null)),
												}),
												k !== !1 &&
													(0, t.Y)('div', {
														className: o()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': W }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: Q,
															onClick: ie && ((a) => ie(a)),
															children: re || (0, t.Y)(y.I, { icon: ee ? 'angle-down' : 'angle-right', ...O.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
				e.d(r, ['FN', 0, V, 'K', 0, b, 'og', 0, v]);
			},
			'./components/src/components/Molecules/Result/Result.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					u = e('./components/src/components/Atoms/Image/Image.tsx'),
					f = e('./components/src/components/Atoms/Price/Price.tsx'),
					m = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					w = e('./components/src/types.ts'),
					y = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					U = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					N = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('../../node_modules/deepmerge/dist/cjs.js'),
					h = e.n(p),
					D = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					v = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const V = () =>
						(0, i.AH)({
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
								'& .ss__result__quickview': {
									position: 'absolute',
									bottom: '10px',
									right: '10px',
									display: 'flex',
									background: 'transparent',
									border: 0,
									padding: '5px',
									cursor: 'pointer',
								},
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
					T = (0, s.PA)((J) => {
						const ne = (0, _.u)(),
							pe = (0, x.LU)(),
							C = {
								layout: w.V.grid,
								treePath: pe,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
								hideQuickviewButton: !0,
							},
							l = (0, M.v6)('result', ne, C, J),
							{
								result: A,
								hideBadge: q,
								hideTitle: re,
								hidePricing: j,
								hideImage: W,
								detailSlot: ee,
								fallback: ae,
								disableStyles: Y,
								className: le,
								internalClassName: ie,
								layout: ce,
								onClick: H,
								controller: G,
								hideVariantSelections: Ee,
								hideAddToCartButton: Pe,
								onAddToCartClick: ve,
								addToCartButtonText: fe,
								addToCartButtonSuccessText: he,
								addToCartButtonSuccessTimeout: ge,
								hideRating: de,
								hideQuickviewButton: F,
								onQuickviewClick: me,
								trackingRef: te,
								treePath: I,
							} = l,
							{ overrideElement: k, shouldRenderDefault: X } = (0, b._)('result', {
								...l,
								customComponent: l.customComponent && l.customComponent !== 'Result' ? l.customComponent : void 0,
							});
						if (!X) return k;
						const O = A?.display?.mappings.core || A?.mappings?.core,
							[ue, _e] = (0, n.J0)(!1),
							L = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: Y }), theme: l.theme, treePath: I },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: A,
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: A,
									controller: G,
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: O?.name || '',
									src: O?.imageUrl || '',
									...(0, d.s)({ disableStyles: Y, fallback: ae }),
									theme: l.theme,
									treePath: I,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: O?.rating || 0,
									count: Number(O?.ratingCount || 0),
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
								quickviewButton: {
									name: 'quickview',
									internalClassName: 'ss__result__quickview',
									icon: { internalClassName: 'ss__result__quickview__icon', icon: 'eye', size: '20px' },
									onClick: (z) => {
										me && me(z, A), G?.quickview(A);
									},
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (z) => {
										_e(!0), ve && ve(z, A), G?.addToCart([A]), setTimeout(() => _e(!1), ge);
									},
									...(0, d.s)({ disableStyles: Y }),
									theme: l.theme,
									treePath: I,
								},
							};
						let Q = O?.name;
						l.truncateTitle && (Q = P.x(O?.name || '', l.truncateTitle.limit, l.truncateTitle.append));
						const S = (0, B.Z)(l, V),
							oe = { addToCartButtonText: { value: ue ? he : fe }, quickviewButtonText: { attributes: { 'aria-label': 'Quick View' } } },
							se = h()(oe, l.lang || {}),
							a = (0, D.u)(se, { result: A, controller: G }, { activeBreakpoint: ne?.activeBreakpoint }),
							g = !!(O?.msrp && O?.price && O?.price < O?.msrp),
							$ = G?.store?.config?.asyncState?.product?.price ? A.state.priceFetched : !0;
						return O
							? (0, t.Y)(m._, {
									children: (0, t.FD)('article', {
										...S,
										className: c()('ss__result', `ss__result--${ce}`, { 'ss__result--sale': g }, le, ie),
										ref: te,
										children: [
											!W &&
												(0, t.FD)('div', {
													className: 'ss__result__image-wrapper',
													children: [
														(0, t.Y)('a', {
															href: O.url,
															onClick: (z) => {
																H && H(z);
															},
															children: q
																? (0, t.Y)(u._, { ...L.image })
																: (0, t.Y)(U.Q, { ...L.overlayBadge, controller: G, children: (0, t.Y)(u._, { ...L.image }) }),
														}),
														!F && G?.quickviewManager && (0, t.Y)(N.$, { ...L.quickviewButton, ...a.quickviewButtonText.attributes }),
													],
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!q && (0, t.Y)(y.W, { ...L.calloutBadge, controller: G }),
													!re &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: O.url,
																onClick: (z) => {
																	H && H(z);
																},
																dangerouslySetInnerHTML: { __html: Q || '' },
															}),
														}),
													!de && (0, t.Y)(K.G, { ...L.rating }),
													!j && $ && O.price && O.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: g
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(f.g, { ...L.price, value: O.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(f.g, { ...L.price, value: O.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(f.g, { ...L.price, value: O.price }),
														  })
														: null,
													(0, E.Y)(ee, { result: A, treePath: I }),
													!Ee && A.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: A.variants?.selections.map((z) => (0, t.Y)(v.m, { ...L.variantSelection, type: z.type, selection: z })),
														  })
														: null,
													!Pe &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(N.$, { ...L.button, ...a.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
				e.d(r, ['Q', 0, T]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(u),
					m = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					_ = e('./components/src/components/Molecules/Result/Result.tsx'),
					x = e('./components/src/utilities/cloneWithProps.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/utilities/lazyRenderMinSize.ts'),
					P = e('./components/src/hooks/useIntersection.tsx'),
					w = e('./components/src/hooks/useComponent.tsx'),
					y = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/snap.tsx'),
					N = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useDisplaySettings.tsx'),
					h = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					D = e('./components/src/hooks/useLang.tsx'),
					b = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const v = ({ vertical: T }) =>
						(0, s.AH)({ ...B.k, height: T ? '100%' : void 0, '.ss__result__image-wrapper': { height: T ? '85%' : void 0 } }),
					V = (0, c.PA)((T) => {
						const J = (0, U.u)(),
							ne = (0, N.LU)(),
							pe = {
								breakpoints: T.vertical ? JSON.parse(JSON.stringify(m.og)) : JSON.parse(JSON.stringify(m.K)),
								pagination: !1,
								loop: !0,
								title: T.controller?.store?.profile?.display?.templateParameters?.title,
								description: T.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: ne,
							},
							C = { name: T.controller?.store?.profile?.tag?.toLowerCase(), ...T };
						let l = (0, d.v6)('recommendation', J, pe, C),
							A;
						!(T.theme?.type == 'templates' || J?.type == 'templates') &&
							l.breakpoints &&
							((A = (0, p.X)(l.breakpoints)), A && Object.keys(A).length && (l = { ...l, ...A }));
						const {
								title: q,
								description: re,
								controller: j,
								children: W,
								loop: ee,
								results: ae,
								pagination: Y,
								nextButton: le,
								prevButton: ie,
								hideButtons: ce,
								disableStyles: H,
								className: G,
								internalClassName: Ee,
								style: Pe,
								styleScript: ve,
								themeStyleScript: fe,
								lazyRender: he,
								vertical: ge,
								hideTitle: de,
								treePath: F,
								...me
							} = l,
							te = l.resultComponent,
							I = (0, K.uk)(),
							k = typeof te == 'string',
							X = k ? te : '',
							O = I?.templates?.library.import.component.result || {},
							{ ComponentOverride: ue, shouldWaitForNamedOverride: _e } = (0, w.x)(O, k ? X : void 0),
							L = k ? ue : te,
							Q = { enabled: !0, offset: '10%', ...he };
						if (!j || j.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const S = ae || j.store?.results;
						if (Array.isArray(W) && W.length !== S.length)
							return (
								j.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const oe = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, E.s)({ disableStyles: H, vertical: ge }),
									theme: l?.theme,
									treePath: F,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, E.s)({ disableStyles: H }), theme: l?.theme, treePath: F },
							},
							se = (0, M.Z)(l, v),
							[a, g] = (0, n.J0)(!1),
							$ = (0, n.li)(null);
						(!Q?.enabled || (0, P.v)($, `${Q.offset} 0px ${Q.offset} 0px`, !0)) && g(!0);
						const be = { titleText: { value: `${q}` } },
							Oe = f()(be, l.lang || {}),
							Me = (0, D.u)(Oe, {}, { activeBreakpoint: J?.activeBreakpoint });
						return (Array.isArray(W) && W.length) || S?.length
							? (0, t.Y)(y._, {
									children: (0, t.Y)('div', {
										...se,
										style: H ? B.k : void 0,
										className: o()('ss__recommendation', G, Ee),
										ref: $,
										children: a
											? (0, t.FD)(h.l, {
													controller: j,
													children: [
														q && !de && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...Me.titleText?.all, children: q }),
														re && (0, t.Y)('p', { className: 'ss__recommendation__description', children: re }),
														(0, t.Y)(m.FN, {
															prevButton: ie,
															nextButton: le,
															hideButtons: ce,
															loop: ee,
															pagination: Y,
															...oe.carousel,
															...me,
															children:
																Array.isArray(W) && W.length
																	? W.map((Z, ye) => (0, t.Y)(b.o, { controller: j, result: S[ye], children: Z }))
																	: S.map((Z) =>
																			(0, t.Y)(b.o, {
																				controller: j,
																				result: Z,
																				children:
																					L && j
																						? (0, x.Y)(L, {
																								controller: j,
																								result: Z,
																								treePath: oe.result.treePath,
																								theme: k ? f()(l.theme || {}, { components: { result: { customComponent: te } } }) : l.theme,
																						  })
																						: _e
																						? null
																						: (0, t.Y)(_.Q, { ...oe.result, controller: j, result: Z }, Z.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(h.l, {
													controller: j,
													children:
														Array.isArray(W) && W.length
															? W.map((Z, ye) => (0, t.Y)(b.o, { controller: j, result: S[ye], children: (0, t.Y)(t.FK, {}) }))
															: S.map((Z) => (0, t.Y)(b.o, { controller: j, result: Z, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(r, ['A', 0, V]);
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					u = e('./components/src/utilities/mergeStyles.ts');
				const f = () => (0, s.AH)({}),
					m = (0, i.PA)((_) => {
						const { children: x, className: E, internalClassName: d } = _,
							M = (0, n.v2)(x),
							B = (0, u.Z)(_, f);
						return M.length ? (0, t.Y)('div', { className: c()('ss__recommendation-profile-tracker', E, d), ...B, children: x }) : null;
					});
				e.d(r, ['l', 0, m]);
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/classnames/index.js'),
					o = e.n(i),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/createImpressionObserver.ts');
				const m = { ResultTracker: () => (0, n.AH)({}) },
					_ = (0, s.PA)((x) => {
						const E = (0, c.u)(),
							d = (0, u.v6)('resultTracker', E, {}, x),
							M = { impression: !0, click: !0 },
							{ children: B, result: P, track: w, controller: y, className: U, internalClassName: K, disableStyles: N, style: p } = d,
							h = { ...M, ...w },
							{ ref: D, inViewport: b } = (0, f.Q)();
						b && h.impression && y?.track.product.impression(P);
						const v = {};
						return (
							N ? p && (v.css = [p]) : (v.css = [m.ResultTracker(), p]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${y?.type}-result-tracker`, U, K),
								onClick: (V) => {
									h.click && y?.track.product.click(V, P);
								},
								ref: D,
								...v,
								children: B,
							})
						);
					});
				e.d(r, ['o', 0, _]);
			},
			'./components/src/hooks/useIntersection.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = (s, i = '0px', o = !1) => {
					const [c, u] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const f = new IntersectionObserver(
								([m]) => {
									u(m.isIntersecting), o && m.isIntersecting && f.unobserve(s.current);
								},
								{ rootMargin: i }
							);
							return (
								s.current && f.observe(s.current),
								() => {
									f.unobserve(s.current);
								}
							);
						}, []),
						c
					);
				};
				e.d(r, ['v', 0, n]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 250,
					s = (o, c = {}) => {
						const { rootMargin: u = '0px', fireOnce: f = !1, threshold: m = 0, minVisibleTime: _ = 0 } = c,
							[x, E] = (0, t.J0)(!1),
							d = (0, t.li)(null),
							M = (0, t.li)(null),
							[B, P] = (0, t.J0)(0),
							w = (0, t.hb)((y) => {
								(o.current = y), P((U) => U + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								E(!1);
								let y = null,
									U = null;
								if (!window.IntersectionObserver || !o.current) return;
								const K = () => {
										U && (window.clearInterval(U), (U = null));
									},
									N = () => {
										_ > 0
											? ((M.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													E(!0), f && o.current && y && y.unobserve(o.current);
											  }, _)))
											: (E(!0), f && o.current && y && y.unobserve(o.current));
									},
									p = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (M.current = null), E(!1);
									};
								return (
									(y = new IntersectionObserver(
										([h]) => {
											h.isIntersecting
												? o.current && i(o.current)
													? (K(), N())
													: (p(),
													  U ||
															(U = window.setInterval(() => {
																if (!o.current) {
																	K();
																	return;
																}
																i(o.current) && (K(), N());
															}, n)))
												: (K(), p());
										},
										{ rootMargin: u, threshold: m }
									)),
									o.current && y.observe(o.current),
									() => {
										E(!1), K(), d.current && window.clearTimeout(d.current), y && o.current && y.unobserve(o.current);
									}
								);
							}, [o, B]),
							{ inViewport: x, updateRef: w }
						);
					};
				function i(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(r, ['v', 0, s]);
			},
			'./components/src/types.ts'(R, r, e) {
				'use strict';
				e.d(r, { Q: () => n, V: () => t });
				var t = ((s) => ((s.grid = 'grid'), (s.list = 'list'), s))(t || {}),
					n = ((s) => (
						(s.GRID = 'grid'),
						(s.PALETTE = 'palette'),
						(s.LIST = 'list'),
						(s.SLIDER = 'slider'),
						(s.HIERARCHY = 'hierarchy'),
						(s.TOGGLE = 'toggle'),
						s
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
				e.d(r, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const s = 0.7,
					i = 1e3;
				function o(c) {
					const u = (0, t.li)(null),
						{ inViewport: f, updateRef: m } = (0, n.v)(u, { fireOnce: !0, threshold: s, minVisibleTime: i, ...c });
					return { ref: u, inViewport: f, updateRef: m };
				}
			},
			'./components/src/utilities/lazyRenderMinSize.ts'(R, r, e) {
				'use strict';
				const t = { minWidth: '1px', minHeight: '1px' };
				e.d(r, ['k', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(R, r, e) {
				'use strict';
				e.d(r, { p: () => y });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					B = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					w = { globals: { siteId: 'atkzs2' } };
				class y {
					static recommendation(h) {
						const D = h.id;
						if (P[D]) return P[D];
						const b = (P[D] = K({ client: w, controller: h }));
						return (
							b.on('afterStore', async ({ controller: v }, V) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await V();
							}),
							b.init(),
							b
						);
					}
					static autocomplete(h) {
						const D = h.id;
						if (P[D]) return P[D];
						const b = (P[D] = N({ client: w, controller: h }));
						return (
							b.on('afterStore', async ({ controller: v }, V) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await V();
							}),
							b.init(),
							b
						);
					}
					static search(h) {
						const D = h.id;
						if (P[D]) return P[D];
						const b = (P[D] = U({ client: w, controller: h }));
						return (
							b.on('afterStore', async ({ controller: v }, V) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await V();
							}),
							b.init(),
							b
						);
					}
				}
				function U(p) {
					const h = new m.V(new x.E({ settings: { coreType: 'query', corePrefix: p.controller.id } }), _.X);
					return new n.Tp(p.controller, {
						client: new o.K(p.client.globals, p.client.config),
						store: new u.U(p.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new M.V(),
						tracker: new B.J(p.client.globals),
					});
				}
				function K(p) {
					const h = new m.V(new x.E(), _.X).detach(!0);
					return new i.c(p.controller, {
						client: new o.K(p.client.globals, p.client.config),
						store: new f.t(p.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new M.V(),
						tracker: new B.J(p.client.globals),
					});
				}
				function N(p) {
					const h = new m.V(new x.E(), _.X).detach();
					return new s.Z(p.controller, {
						client: new o.K(p.client.globals, p.client.config),
						store: new c.Y(p.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new M.V(),
						tracker: new B.J(p.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, r, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					i = (o) => {
						const c = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								c.current && o.className?.includes('lang-') && !o.className?.includes(s) && window?.Prism?.highlightElement(c.current);
							}, [o.className, o.children, c]),
							(0, t.Y)('code', { ...o, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(r, ['Z', 0, i]);
			},
			'../../node_modules/colord/plugins/names.mjs'(R, r, e) {
				'use strict';
				e.d(r, { A: () => t }), e.dn(t);
				function t(n, s) {
					var i = {
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
						o = {};
					for (var c in i) o[i[c]] = c;
					var u = {};
					(n.prototype.toName = function (f) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var m,
							_,
							x = o[this.toHex()];
						if (x) return x;
						if (f?.closest) {
							var E = this.toRgb(),
								d = 1 / 0,
								M = 'black';
							if (!u.length) for (var B in i) u[B] = new n(i[B]).toRgb();
							for (var P in i) {
								var w = ((m = E), (_ = u[P]), Math.pow(m.r - _.r, 2) + Math.pow(m.g - _.g, 2) + Math.pow(m.b - _.b, 2));
								w < d && ((d = w), (M = P));
							}
							return M;
						}
					}),
						s.string.push([
							function (f) {
								var m = f.toLowerCase(),
									_ = m === 'transparent' ? '#0000' : i[m];
								return _ ? new n(_).toRgb() : null;
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

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.e6818e53.iframe.bundle.js.map
