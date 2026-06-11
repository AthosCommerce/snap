(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1921],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(A, a, e) {
				'use strict';
				e.d(a, { P: () => t });
				const t = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(A, a, e) {
				'use strict';
				e.d(a, { G: () => n });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(o, l) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(o, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(A, a, e) {
				'use strict';
				e.d(a, { Z: () => t });
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
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(A, a, e) {
				'use strict';
				e.d(a, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let o = n.toLowerCase();
					return (o = o.replace(/[^\w\s]/g, '').trim()), (o = o.replace(/\s/g, '-')), o;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(A, a, e) {
				'use strict';
				e.d(a, { x: () => t });
				function t(n, o, l) {
					if (typeof n != 'string' || n.length <= o) return n;
					const s = n.lastIndexOf(' ', o),
						i = s != -1 ? s : o - 1;
					return n.substr(0, i) + (l || '');
				}
			},
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(A, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => _, __namedExportsOrder: () => R, default: () => p });
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
					p = {
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
						decorators: [(g) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(g, {}) })],
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
					c = i.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					_ = (g, { loaded: { controller: d } }) => (0, t.Y)(o.A, { ...g, controller: d });
				(_.loaders = [
					async () => (
						c.on('afterStore', async ({ controller: g }, d) => {
							g.store.results.forEach((E) => (E.mappings.core.url = 'javascript:void(0);')), await d();
						}),
						await c.search(),
						{ controller: c }
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
				const R = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(A, a, e) {
				'use strict';
				e.d(a, { FN: () => y, K: () => m, og: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(u),
					c = e('../../node_modules/swiper/swiper-react.mjs'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					R = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					E = e('../../node_modules/swiper/modules/index.mjs'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/hooks/useDisplaySettings.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const N = ({ vertical: v, theme: h }) =>
						(0, o.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: v ? '100%' : void 0,
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
					m = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					f = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					y = (0, i.PA)((v) => {
						const h = (0, w.u)(),
							x = (0, T.LU)(),
							oe = {
								breakpoints: v.vertical ? JSON.parse(JSON.stringify(f)) : JSON.parse(JSON.stringify(m)),
								pagination: !1,
								navigation: !0,
								slidesPerGroup: !v.breakpoints || !Object.keys(v.breakpoints).length ? 5 : void 0,
								slidesPerView: !v.breakpoints || !Object.keys(v.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: x,
							};
						let C = (0, g.v6)('carousel', h, oe, v),
							k;
						if (
							!(v.theme?.type == 'templates' || h?.type == 'templates') &&
							C.breakpoints &&
							(Object.keys(C.breakpoints).forEach((r) => {
								const P = C.breakpoints[r];
								P.slidesPerView && (P.slidesPerView = Number(P.slidesPerView) || 1),
									P.slidesPerGroup && (P.slidesPerGroup = Number(P.slidesPerGroup) || 1);
							}),
							(k = (0, L.X)(C.breakpoints)),
							k && Object.keys(k).length)
						) {
							const r = p()(C?.theme || {}, k?.theme || {}, { arrayMerge: (P, X) => X });
							C.autoAdjustSlides &&
								C.children.length < k.slidesPerView &&
								((k.slidesPerView = C.children.length), (k.slidesPerGroup = C.children.length)),
								(C = { ...C, ...k, theme: r });
						}
						const {
								children: ne,
								loop: W,
								nextButton: b,
								prevButton: j,
								hideButtons: $,
								vertical: I,
								onInit: S,
								onBeforeInit: re,
								onAfterInit: ae,
								onNextButtonClick: le,
								onPrevButtonClick: V,
								onClick: ie,
								disableStyles: me,
								style: ue,
								styleScript: te,
								themeStyleScript: Q,
								modules: _e,
								className: ge,
								internalClassName: pe,
								treePath: ce,
								...G
							} = C,
							{ overrideElement: fe, shouldRenderDefault: de } = (0, K._)('carousel', C);
						if (!de) return fe;
						let H = C.pagination,
							M = C.navigation,
							F = C.scrollbar;
						const q = { icon: { internalClassName: 'ss__carousel__icon', ...(0, R.s)({ disableStyles: me }), theme: C.theme, treePath: ce } },
							D = Array.isArray(_e) ? [E.Vx, E.dK, E.Ze, E.Jq].concat(_e) : [E.Vx, E.dK, E.Ze, E.Jq],
							he = D.filter((r, P) => D.indexOf(r) === P),
							ee = (0, n.li)(null),
							U = (0, n.li)(null),
							J = (0, n.li)(null),
							se = (0, d.Z)(C, N);
						(0, n.vJ)(() => {
							if (J.current) {
								const P = J.current.querySelector('.swiper');
								P?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									P?.classList.contains('swiper-vertical') && P.classList.add('swiper-container-vertical'),
									P?.classList.contains('swiper-horizontal') && P.classList.add('swiper-container-horizontal');
							}
							Y();
						}, [v]),
							H && (typeof H == 'object' ? (H = { clickable: !0, ...H }) : (H = { clickable: !0 })),
							M &&
								(typeof M == 'object'
									? (M = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...M })
									: (M = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' })),
							F && (typeof F == 'object' ? (F = { enabled: !0, ...F }) : (F = { enabled: !0 }));
						const Y = () => {
							if (J.current) {
								const P = J.current?.querySelectorAll('.swiper-slide-visible');
								P.forEach((X, z) => {
									X.classList.remove('swiper-last-visible-slide'), z == P.length - 1 && X.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete G.breakpoints,
							ne?.length
								? (0, t.Y)(O._, {
										children: (0, t.FD)('div', {
											ref: J,
											...se,
											className: s()('ss__carousel', I ? 'ss__carousel-vertical' : '', ge, pe),
											children: [
												M !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': $ }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__prev',
															ref: ee,
															onClick: V && ((r) => V(r)),
															children: j || (0, t.Y)(B.I, { icon: I ? 'angle-up' : 'angle-left', ...q.icon, name: 'prev' }),
														}),
													}),
												(0, t.Y)(c.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (r) => {
														M &&
															r.params.navigation &&
															((r.params.navigation.prevEl = ee.current ? ee.current : void 0),
															(r.params.navigation.nextEl = U.current ? U.current : void 0)),
															re && re(r);
													},
													onInit: (r) => {
														S && S(r);
													},
													onAfterInit: (r) => {
														M &&
															r.navigation &&
															((r.navigation.onPrevClick = (P) => {
																P.preventDefault(),
																	!(r.isBeginning && !r.params.loop && !r.params.rewind) && (r.slidePrev(), r.emit('navigationPrev'));
															}),
															(r.navigation.onNextClick = (P) => {
																P.preventDefault(), !(r.isEnd && !r.params.loop && !r.params.rewind) && (r.slideNext(), r.emit('navigationNext'));
															})),
															ae && ae(r);
													},
													onClick: (r, P) => {
														ie && ie(r, P);
													},
													direction: I ? 'vertical' : 'horizontal',
													loop: W,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: he,
													...G,
													...k,
													controller: void 0,
													navigation: M,
													pagination: H,
													scrollbar: F,
													onResize: (r) => {
														G.onResize && G.onResize(), r.updateSlidesClasses(), Y();
													},
													onTransitionEnd: () => {
														G.onTransitionEnd && G.onTransitionEnd(), Y();
													},
													children: ne.map((r) => (r != null ? (0, t.Y)(c.qr, { children: (0, _.Y)(r, { treePath: ce }) }) : null)),
												}),
												M !== !1 &&
													(0, t.Y)('div', {
														className: s()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': $ }),
														children: (0, t.Y)('div', {
															className: 'ss__carousel__next',
															ref: U,
															onClick: le && ((r) => le(r)),
															children: b || (0, t.Y)(B.I, { icon: I ? 'angle-down' : 'angle-right', ...q.icon, name: 'next' }),
														}),
													}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(A, a, e) {
				'use strict';
				e.d(a, { Q: () => oe });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					i = e.n(s),
					u = e('./components/src/components/Atoms/Image/Image.tsx'),
					p = e('./components/src/components/Atoms/Price/Price.tsx'),
					c = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					R = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					O = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'),
					w = e('./components/src/types.ts'),
					T = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					L = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					K = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					N = e('./components/src/components/Atoms/Button/Button.tsx'),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(m),
					y = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const x = () =>
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
					oe = (0, o.PA)((C) => {
						const k = (0, _.u)(),
							ne = (0, R.LU)(),
							W = {
								layout: w.V.grid,
								treePath: ne,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							b = (0, E.v6)('result', k, W, C),
							{
								result: j,
								hideBadge: $,
								hideTitle: I,
								hidePricing: S,
								hideImage: re,
								detailSlot: ae,
								fallback: le,
								disableStyles: V,
								className: ie,
								internalClassName: me,
								layout: ue,
								onClick: te,
								controller: Q,
								hideVariantSelections: _e,
								hideAddToCartButton: ge,
								onAddToCartClick: pe,
								addToCartButtonText: ce,
								addToCartButtonSuccessText: G,
								addToCartButtonSuccessTimeout: fe,
								hideRating: de,
								trackingRef: H,
								treePath: M,
							} = b,
							{ overrideElement: F, shouldRenderDefault: q } = (0, v._)('result', {
								...b,
								customComponent: b.customComponent && b.customComponent !== 'Result' ? b.customComponent : void 0,
							});
						if (!q) return F;
						const D = j?.display?.mappings.core || j?.mappings?.core,
							[he, ee] = (0, n.J0)(!1),
							U = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, d.s)({ disableStyles: V }),
									theme: b.theme,
									treePath: M,
								},
								price: { internalClassName: 'ss__result__price', ...(0, d.s)({ disableStyles: V }), theme: b.theme, treePath: M },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: j,
									...(0, d.s)({ disableStyles: V }),
									theme: b.theme,
									treePath: M,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: j,
									controller: Q,
									...(0, d.s)({ disableStyles: V }),
									theme: b.theme,
									treePath: M,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: D?.name || '',
									src: D?.imageUrl || '',
									...(0, d.s)({ disableStyles: V, fallback: le }),
									theme: b.theme,
									treePath: M,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: D?.rating || 0,
									count: Number(D?.ratingCount || 0),
									...(0, d.s)({ disableStyles: V }),
									theme: b.theme,
									treePath: M,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (z) => {
										ee(!0), pe && pe(z, j), Q?.addToCart([j]), setTimeout(() => ee(!1), fe);
									},
									...(0, d.s)({ disableStyles: V }),
									theme: b.theme,
									treePath: M,
								},
							};
						let J = D?.name;
						b.truncateTitle && (J = O.x(D?.name || '', b.truncateTitle.limit, b.truncateTitle.append));
						const se = (0, B.Z)(b, x),
							Y = { addToCartButtonText: { value: he ? G : ce } },
							r = f()(Y, b.lang || {}),
							P = (0, y.u)(r, { result: j, controller: Q }),
							X = !!(D?.msrp && D?.price && D?.price < D?.msrp);
						return D
							? (0, t.Y)(c._, {
									children: (0, t.FD)('article', {
										...se,
										className: i()('ss__result', `ss__result--${ue}`, { 'ss__result--sale': X }, ie, me),
										ref: H,
										children: [
											!re &&
												(0, t.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, t.Y)('a', {
														href: D.url,
														onClick: (z) => {
															te && te(z);
														},
														children: $
															? (0, t.Y)(u._, { ...U.image })
															: (0, t.Y)(L.Q, { ...U.overlayBadge, controller: Q, children: (0, t.Y)(u._, { ...U.image }) }),
													}),
												}),
											(0, t.FD)('div', {
												className: 'ss__result__details',
												children: [
													!$ && (0, t.Y)(T.W, { ...U.calloutBadge, controller: Q }),
													!I &&
														(0, t.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, t.Y)('a', {
																href: D.url,
																onClick: (z) => {
																	te && te(z);
																},
																dangerouslySetInnerHTML: { __html: J || '' },
															}),
														}),
													!de && (0, t.Y)(K.G, { ...U.rating }),
													!S && D.price && D.price > 0
														? (0, t.Y)('div', {
																className: 'ss__result__details__pricing',
																children: X
																	? (0, t.FD)(t.FK, {
																			children: [
																				(0, t.Y)(p.g, { ...U.price, value: D.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, t.Y)(p.g, { ...U.price, value: D.price, name: 'price' }),
																			],
																	  })
																	: (0, t.Y)(p.g, { ...U.price, value: D.price }),
														  })
														: null,
													(0, g.Y)(ae, { result: j, treePath: M }),
													!_e && j.variants?.selections.length
														? (0, t.Y)('div', {
																className: 'ss__result__details__variant-selection',
																children: j.variants?.selections.map((z) => (0, t.Y)(h.m, { ...U.variantSelection, type: z.type, selection: z })),
														  })
														: null,
													!ge &&
														(0, t.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, t.Y)(N.$, { ...U.button, ...P.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(A, a, e) {
				'use strict';
				e.d(a, { A: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(u),
					c = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					_ = e('./components/src/components/Molecules/Result/Result.tsx'),
					R = e('./components/src/utilities/cloneWithProps.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/hooks/useIntersection.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					w = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					K = e('./components/src/providers/treePath.tsx'),
					N = e('./components/src/hooks/useDisplaySettings.tsx'),
					m = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					f = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const v = ({ vertical: x }) => (0, o.AH)({ height: x ? '100%' : void 0, '.ss__result__image-wrapper': { height: x ? '85%' : void 0 } }),
					h = (0, i.PA)((x) => {
						const oe = (0, T.u)(),
							C = (0, K.LU)(),
							k = {
								breakpoints: x.vertical ? JSON.parse(JSON.stringify(c.og)) : JSON.parse(JSON.stringify(c.K)),
								pagination: !1,
								loop: !0,
								title: x.controller?.store?.profile?.display?.templateParameters?.title,
								description: x.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: C,
							},
							ne = { name: x.controller?.store?.profile?.tag?.toLowerCase(), ...x };
						let W = (0, d.v6)('recommendation', oe, k, ne),
							b;
						!(x.theme?.type == 'templates' || oe?.type == 'templates') &&
							W.breakpoints &&
							((b = (0, N.X)(W.breakpoints)), b && Object.keys(b).length && (W = { ...W, ...b }));
						const {
								title: j,
								description: $,
								controller: I,
								children: S,
								loop: re,
								results: ae,
								pagination: le,
								nextButton: V,
								prevButton: ie,
								hideButtons: me,
								disableStyles: ue,
								className: te,
								internalClassName: Q,
								style: _e,
								styleScript: ge,
								themeStyleScript: pe,
								lazyRender: ce,
								vertical: G,
								hideTitle: fe,
								treePath: de,
								...H
							} = W,
							M = W.resultComponent,
							F = (0, L.uk)(),
							q = typeof M == 'string',
							D = q ? M : '',
							he = F?.templates?.library.import.component.result || {},
							{ ComponentOverride: ee, shouldWaitForNamedOverride: U } = (0, O.x)(he, q ? D : void 0),
							J = q ? ee : M,
							se = { enabled: !0, offset: '10%', ...ce };
						if (!I || I.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const Y = ae || I.store?.results;
						if (Array.isArray(S) && S.length !== Y.length)
							return (
								I.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const r = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, g.s)({ disableStyles: ue, vertical: G }),
									theme: W?.theme,
									treePath: de,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, g.s)({ disableStyles: ue }), theme: W?.theme, treePath: de },
							},
							P = (0, E.Z)(W, v),
							[X, z] = (0, n.J0)(!1),
							ve = (0, n.li)(null);
						(!se?.enabled || (0, B.v)(ve, `${se.offset} 0px ${se.offset} 0px`, !0)) && z(!0);
						const Pe = { titleText: { value: `${j}` } },
							ye = p()(Pe, W.lang || {}),
							be = (0, f.u)(ye, {});
						return (Array.isArray(S) && S.length) || Y?.length
							? (0, t.Y)(w._, {
									children: (0, t.Y)('div', {
										...P,
										className: s()('ss__recommendation', te, Q),
										ref: ve,
										children: X
											? (0, t.FD)(m.l, {
													controller: I,
													children: [
														j && !fe && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...be.titleText?.all, children: j }),
														$ && (0, t.Y)('p', { className: 'ss__recommendation__description', children: $ }),
														(0, t.Y)(c.FN, {
															prevButton: ie,
															nextButton: V,
															hideButtons: me,
															loop: re,
															pagination: le,
															...r.carousel,
															...H,
															children:
																Array.isArray(S) && S.length
																	? S.map((Z, Ee) => (0, t.Y)(y.o, { controller: I, result: Y[Ee], children: Z }))
																	: Y.map((Z) =>
																			(0, t.Y)(y.o, {
																				controller: I,
																				result: Z,
																				children:
																					J && I
																						? (0, R.Y)(J, { controller: I, result: Z, treePath: r.result.treePath })
																						: U
																						? null
																						: (0, t.Y)(_.Q, { ...r.result, controller: I, result: Z }, Z.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(m.l, {
													controller: I,
													children:
														Array.isArray(S) && S.length
															? S.map((Z, Ee) => (0, t.Y)(y.o, { controller: I, result: Y[Ee], children: (0, t.Y)(t.FK, {}) }))
															: Y.map((Z) => (0, t.Y)(y.o, { controller: I, result: Z, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(A, a, e) {
				'use strict';
				e.d(a, { l: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					i = e.n(s),
					u = e('./components/src/utilities/mergeStyles.ts');
				const p = () => (0, o.AH)({}),
					c = (0, l.PA)((_) => {
						const { children: R, className: g, internalClassName: d } = _,
							E = (0, n.v2)(R),
							B = (0, u.Z)(_, p);
						return E.length ? (0, t.Y)('div', { className: i()('ss__recommendation-profile-tracker', g, d), ...B, children: R }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(A, a, e) {
				'use strict';
				e.d(a, { o: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, n.AH)({}) },
					_ = (0, o.PA)((R) => {
						const g = (0, i.u)(),
							d = (0, u.v6)('resultTracker', g, {}, R),
							E = { impression: !0, click: !0 },
							{ children: B, result: O, track: w, controller: T, className: L, internalClassName: K, disableStyles: N, style: m } = d,
							f = { ...E, ...w },
							{ ref: y, inViewport: v } = (0, p.Q)();
						v && f.impression && T?.track.product.impression(O);
						const h = {};
						return (
							N ? m && (h.css = [m]) : (h.css = [c.ResultTracker(), m]),
							(0, t.Y)('div', {
								className: s()('ss__result-tracker', `ss__${T?.type}-result-tracker`, L, K),
								onClick: (x) => {
									f.click && T?.track.product.click(x, O);
								},
								ref: y,
								...h,
								children: B,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(A, a, e) {
				'use strict';
				e.d(a, { v: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = (o, l = '0px', s = !1) => {
					const [i, u] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const p = new IntersectionObserver(
								([c]) => {
									u(c.isIntersecting), s && c.isIntersecting && p.unobserve(o.current);
								},
								{ rootMargin: l }
							);
							return (
								o.current && p.observe(o.current),
								() => {
									p.unobserve(o.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(A, a, e) {
				'use strict';
				e.d(a, { v: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 250,
					o = (s, i = {}) => {
						const { rootMargin: u = '0px', fireOnce: p = !1, threshold: c = 0, minVisibleTime: _ = 0 } = i,
							[R, g] = (0, t.J0)(!1),
							d = (0, t.li)(null),
							E = (0, t.li)(null),
							[B, O] = (0, t.J0)(0),
							w = (0, t.hb)((T) => {
								(s.current = T), O((L) => L + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								g(!1);
								let T = null,
									L = null;
								if (!window.IntersectionObserver || !s.current) return;
								const K = () => {
										L && (window.clearInterval(L), (L = null));
									},
									N = () => {
										_ > 0
											? ((E.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													g(!0), p && s.current && T && T.unobserve(s.current);
											  }, _)))
											: (g(!0), p && s.current && T && T.unobserve(s.current));
									},
									m = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (E.current = null), g(!1);
									};
								return (
									(T = new IntersectionObserver(
										([f]) => {
											f.isIntersecting
												? s.current && l(s.current)
													? (K(), N())
													: (m(),
													  L ||
															(L = window.setInterval(() => {
																if (!s.current) {
																	K();
																	return;
																}
																l(s.current) && (K(), N());
															}, n)))
												: (K(), m());
										},
										{ rootMargin: u, threshold: c }
									)),
									s.current && T.observe(s.current),
									() => {
										g(!1), K(), d.current && window.clearTimeout(d.current), T && s.current && T.unobserve(s.current);
									}
								);
							}, [s, B]),
							{ inViewport: R, updateRef: w }
						);
					};
				function l(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/types.ts'(A, a, e) {
				'use strict';
				e.d(a, { Q: () => n, V: () => t });
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
			'./components/src/utilities/componentArgs.ts'(A, a, e) {
				'use strict';
				e.d(a, { F: () => t });
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
			'./components/src/utilities/createImpressionObserver.ts'(A, a, e) {
				'use strict';
				e.d(a, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					l = 1e3;
				function s(i) {
					const u = (0, t.li)(null),
						{ inViewport: p, updateRef: c } = (0, n.v)(u, { ...i, fireOnce: !0, threshold: o, minVisibleTime: l });
					return { ref: u, inViewport: p, updateRef: c };
				}
			},
			'./components/src/utilities/snapify.ts'(A, a, e) {
				'use strict';
				e.d(a, { p: () => T });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					R = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					B = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const O = {},
					w = { globals: { siteId: 'atkzs2' } };
				class T {
					static recommendation(f) {
						const y = f.id;
						if (O[y]) return O[y];
						const v = (O[y] = K({ client: w, controller: f }));
						return (
							v.on('afterStore', async ({ controller: h }, x) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await x();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(f) {
						const y = f.id;
						if (O[y]) return O[y];
						const v = (O[y] = N({ client: w, controller: f }));
						return (
							v.on('afterStore', async ({ controller: h }, x) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await x();
							}),
							v.init(),
							v
						);
					}
					static search(f) {
						const y = f.id;
						if (O[y]) return O[y];
						const v = (O[y] = L({ client: w, controller: f }));
						return (
							v.on('afterStore', async ({ controller: h }, x) => {
								h.log.debug('controller', h), h.log.debug('store', h.store.toJSON()), await x();
							}),
							v.init(),
							v
						);
					}
				}
				function L(m) {
					const f = new c.V(new R.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), _.X);
					return new n.Tp(m.controller, {
						client: new s.K(m.client.globals, m.client.config),
						store: new u.U(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new g.E(),
						profiler: new d.U(),
						logger: new E.V(),
						tracker: new B.J(m.client.globals),
					});
				}
				function K(m) {
					const f = new c.V(new R.E(), _.X).detach(!0);
					return new l.c(m.controller, {
						client: new s.K(m.client.globals, m.client.config),
						store: new p.t(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new g.E(),
						profiler: new d.U(),
						logger: new E.V(),
						tracker: new B.J(m.client.globals),
					});
				}
				function N(m) {
					const f = new c.V(new R.E(), _.X).detach();
					return new o.Z(m.controller, {
						client: new s.K(m.client.globals, m.client.config),
						store: new i.Y(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new g.E(),
						profiler: new d.U(),
						logger: new E.V(),
						tracker: new B.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(A, a, e) {
				'use strict';
				e.d(a, { Z: () => l });
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
			},
			'../../node_modules/colord/plugins/names.mjs'(A, a, e) {
				'use strict';
				e.d(a, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
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
					(n.prototype.toName = function (p) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var c,
							_,
							R = s[this.toHex()];
						if (R) return R;
						if (p?.closest) {
							var g = this.toRgb(),
								d = 1 / 0,
								E = 'black';
							if (!u.length) for (var B in l) u[B] = new n(l[B]).toRgb();
							for (var O in l) {
								var w = ((c = g), (_ = u[O]), Math.pow(c.r - _.r, 2) + Math.pow(c.g - _.g, 2) + Math.pow(c.b - _.b, 2));
								w < d && ((d = w), (E = O));
							}
							return E;
						}
					}),
						o.string.push([
							function (p) {
								var c = p.toLowerCase(),
									_ = c === 'transparent' ? '#0000' : l[c];
								return _ ? new n(_).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(A) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (A.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.201f40c1.iframe.bundle.js.map
