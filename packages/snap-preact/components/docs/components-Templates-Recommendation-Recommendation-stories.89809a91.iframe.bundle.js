(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1921],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(R, a, e) {
				'use strict';
				e.d(a, { P: () => t });
				const t = (n) => n.replace(/_/g, '-').toLowerCase();
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(R, a, e) {
				'use strict';
				e.d(a, { G: () => n });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(r, l) {
					const o = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(r, o);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(R, a, e) {
				'use strict';
				e.d(a, { Z: () => t });
				function t(r, l) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const i = n(r, o.decimalPlaces).split('.');
					(i[0] = i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (i[1] = (i[1] || '').padEnd(o.decimalPlaces, '0'));
					let u = i.join(o.decimalSeparator);
					return o.symbolAfter ? (u = u + o.symbol) : (u = o.symbol + u), u;
				}
				function n(r, l) {
					const o = r.toString(),
						i = o.indexOf('.'),
						u = i == -1 ? o.length : 1 + i + (l || -1);
					return o.substr(0, u);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(R, a, e) {
				'use strict';
				e.d(a, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let r = n.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/truncate.js'(R, a, e) {
				'use strict';
				e.d(a, { x: () => t });
				function t(n, r, l) {
					if (typeof n != 'string' || n.length <= r) return n;
					const o = n.lastIndexOf(' ', r),
						i = o != -1 ? o : r - 1;
					return n.substr(0, i) + (l || '');
				}
			},
			'./components/src/components/Templates/Recommendation/Recommendation.stories.tsx'(R, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => p, __namedExportsOrder: () => M, default: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
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
					b = {
						title: 'Templates/Recommendation',
						component: r.A,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: l.Z } }, children: u }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(h, {}) })],
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
					c = i.p.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					p = (h, { loaded: { controller: _ } }) => (0, t.Y)(r.A, { ...h, controller: _ });
				(p.loaders = [
					async () => (
						c.on('afterStore', async ({ controller: h }, _) => {
							h.store.results.forEach((g) => (g.mappings.core.url = 'javascript:void(0);')), await _();
						}),
						await c.search(),
						{ controller: c }
					),
				]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
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
								...p.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(R, a, e) {
				'use strict';
				e.d(a, { FN: () => v, K: () => f, og: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					o = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(u),
					c = e('../../node_modules/swiper/swiper-react.mjs'),
					p = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/swiper/modules/index.mjs'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useDisplaySettings.tsx'),
					U = e('./components/src/hooks/useComponent.tsx');
				const d = ({ vertical: m, theme: T }) =>
						(0, r.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: m ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: T?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: T?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: T?.variables?.colors?.primary || '#000' },
							},
						}),
					f = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					O = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					v = (0, i.PA)((m) => {
						const T = (0, I.u)(),
							le = (0, D.uk)(),
							ie = (0, C.LU)(),
							S = {
								breakpoints: m.vertical ? JSON.parse(JSON.stringify(O)) : JSON.parse(JSON.stringify(f)),
								pagination: !1,
								slidesPerGroup: !m.breakpoints || !Object.keys(m.breakpoints).length ? 5 : void 0,
								slidesPerView: !m.breakpoints || !Object.keys(m.breakpoints).length ? 5 : void 0,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: ie,
							};
						let y = (0, h.v6)('carousel', T, S, m),
							B;
						if (
							!(m.theme?.type == 'templates' || T?.type == 'templates') &&
							y.breakpoints &&
							(Object.keys(y.breakpoints).forEach((s) => {
								const E = y.breakpoints[s];
								E.slidesPerView && (E.slidesPerView = Number(E.slidesPerView) || 1),
									E.slidesPerGroup && (E.slidesPerGroup = Number(E.slidesPerGroup) || 1);
							}),
							(B = (0, A.X)(y.breakpoints)),
							B && Object.keys(B).length)
						) {
							const s = b()(y?.theme || {}, B?.theme || {}, { arrayMerge: (E, ae) => ae });
							y.autoAdjustSlides &&
								y.children.length < B.slidesPerView &&
								((B.slidesPerView = y.children.length), (B.slidesPerGroup = y.children.length)),
								(y = { ...y, ...B, theme: s });
						}
						const {
							children: z,
							loop: w,
							nextButton: k,
							prevButton: ce,
							hideButtons: X,
							vertical: Y,
							onInit: H,
							onBeforeInit: Z,
							onAfterInit: $,
							onNextButtonClick: J,
							onPrevButtonClick: G,
							onClick: Q,
							disableStyles: de,
							customComponent: me,
							style: fe,
							styleScript: he,
							themeStyleScript: _e,
							modules: q,
							className: ue,
							internalClassName: ee,
							treePath: te,
							...K
						} = y;
						if (me) {
							const s = (0, U.x)(le?.templates?.library.import.component.carousel || {}, me);
							if (s) return (0, t.Y)(s, { ...y });
						}
						let L = y.pagination,
							W = y.navigation,
							N = y.scrollbar;
						const oe = { icon: { internalClassName: 'ss__carousel__icon', ...(0, M.s)({ disableStyles: de }), theme: y.theme, treePath: te } },
							ne = Array.isArray(q) ? [g.Vx, g.dK, g.Ze, g.Jq].concat(q) : [g.Vx, g.dK, g.Ze, g.Jq],
							se = ne.filter((s, E) => ne.indexOf(s) === E),
							re = (0, n.li)(null),
							F = (0, n.li)(null),
							V = (0, n.li)(null),
							pe = (0, _.Z)(y, d);
						(0, n.vJ)(() => {
							if (V.current) {
								const E = V.current.querySelector('.swiper');
								E?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									E?.classList.contains('swiper-vertical') && E.classList.add('swiper-container-vertical'),
									E?.classList.contains('swiper-horizontal') && E.classList.add('swiper-container-horizontal');
							}
							j();
						}, [m]),
							L && (typeof L == 'object' ? (L = { clickable: !0, ...L }) : (L = { clickable: !0 })),
							W && typeof W == 'object'
								? (W = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...W })
								: (W = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							N && (typeof N == 'object' ? (N = { enabled: !0, ...N }) : (N = { enabled: !0 }));
						const j = () => {
							if (V.current) {
								const E = V.current?.querySelectorAll('.swiper-slide-visible');
								E.forEach((ae, ge) => {
									ae.classList.remove('swiper-last-visible-slide'), ge == E.length - 1 && ae.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete K.breakpoints,
							z?.length
								? (0, t.Y)(P._, {
										children: (0, t.FD)('div', {
											ref: V,
											...pe,
											className: o()('ss__carousel', Y ? 'ss__carousel-vertical' : '', ue, ee),
											children: [
												(0, t.Y)('div', {
													className: o()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': X }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__prev',
														ref: re,
														onClick: G && ((s) => G(s)),
														children: ce || (0, t.Y)(x.I, { icon: Y ? 'angle-up' : 'angle-left', ...oe.icon, name: 'prev' }),
													}),
												}),
												(0, t.Y)(c.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (s) => {
														(s.params.navigation.prevEl = re.current ? re.current : void 0),
															(s.params.navigation.nextEl = F.current ? F.current : void 0),
															Z && Z(s);
													},
													onInit: (s) => {
														H && H(s);
													},
													onAfterInit: (s) => {
														(s.navigation.onPrevClick = (E) => {
															E.preventDefault(), !(s.isBeginning && !s.params.loop && !s.params.rewind) && (s.slidePrev(), s.emit('navigationPrev'));
														}),
															(s.navigation.onNextClick = (E) => {
																E.preventDefault(), !(s.isEnd && !s.params.loop && !s.params.rewind) && (s.slideNext(), s.emit('navigationNext'));
															}),
															$ && $(s);
													},
													onClick: (s, E) => {
														Q && Q(s, E);
													},
													direction: Y ? 'vertical' : 'horizontal',
													loop: w,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: se,
													...K,
													...B,
													controller: void 0,
													navigation: W,
													pagination: L,
													scrollbar: N,
													onResize: (s) => {
														K.onResize && K.onResize(), s.updateSlidesClasses(), j();
													},
													onTransitionEnd: () => {
														K.onTransitionEnd && K.onTransitionEnd(), j();
													},
													children: z.map((s) => (s != null ? (0, t.Y)(c.qr, { children: (0, p.Y)(s, { treePath: te }) }) : null)),
												}),
												(0, t.Y)('div', {
													className: o()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': X }),
													children: (0, t.Y)('div', {
														className: 'ss__carousel__next',
														ref: F,
														onClick: J && ((s) => J(s)),
														children: k || (0, t.Y)(x.I, { icon: Y ? 'angle-down' : 'angle-right', ...oe.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(R, a, e) {
				'use strict';
				e.d(a, { A: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					o = e.n(l),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(u),
					c = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					p = e('./components/src/components/Molecules/Result/Result.tsx'),
					M = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/hooks/useIntersection.tsx'),
					P = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useDisplaySettings.tsx'),
					A = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					d = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const f = ({ vertical: v }) => (0, r.AH)({ height: v ? '100%' : void 0, '.ss__result__image-wrapper': { height: v ? '85%' : void 0 } }),
					O = (0, i.PA)((v) => {
						const m = (0, I.u)(),
							T = (0, D.LU)(),
							le = {
								breakpoints: v.vertical ? JSON.parse(JSON.stringify(c.og)) : JSON.parse(JSON.stringify(c.K)),
								pagination: !1,
								loop: !0,
								title: v.controller?.store?.profile?.display?.templateParameters?.title,
								description: v.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: T,
							},
							ie = { name: v.controller?.store?.profile?.tag?.toLowerCase(), ...v };
						let S = (0, _.v6)('recommendation', m, le, ie),
							y;
						!(v.theme?.type == 'templates' || m?.type == 'templates') &&
							S.breakpoints &&
							((y = (0, C.X)(S.breakpoints)), y && Object.keys(y).length && (S = { ...S, ...y }));
						const {
								title: B,
								description: z,
								controller: w,
								children: k,
								loop: ce,
								results: X,
								pagination: Y,
								nextButton: H,
								prevButton: Z,
								hideButtons: $,
								resultComponent: J,
								disableStyles: G,
								className: Q,
								internalClassName: de,
								style: me,
								styleScript: fe,
								themeStyleScript: he,
								lazyRender: _e,
								vertical: q,
								hideTitle: ue,
								treePath: ee,
								...te
							} = S,
							K = { enabled: !0, offset: '10%', ..._e };
						if (!w || w.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const L = X || w.store?.results;
						if (Array.isArray(k) && k.length !== L.length)
							return (
								w.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const W = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, h.s)({ disableStyles: G, vertical: q }),
									theme: S?.theme,
									treePath: ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, h.s)({ disableStyles: G }), theme: S?.theme, treePath: ee },
							},
							N = (0, g.Z)(S, f),
							[oe, ne] = (0, n.J0)(!1),
							se = (0, n.li)(null);
						(!K?.enabled || (0, x.v)(se, `${K.offset} 0px ${K.offset} 0px`, !0)) && ne(!0);
						const F = { titleText: { value: `${B}` } },
							V = b()(F, S.lang || {}),
							pe = (0, U.u)(V, {});
						return (Array.isArray(k) && k.length) || L?.length
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...N,
										className: o()('ss__recommendation', Q, de),
										ref: se,
										children: oe
											? (0, t.FD)(A.l, {
													controller: w,
													children: [
														B && !ue && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...pe.titleText?.all, children: B }),
														z && (0, t.Y)('p', { className: 'ss__recommendation__description', children: z }),
														(0, t.Y)(c.FN, {
															prevButton: Z,
															nextButton: H,
															hideButtons: $,
															loop: ce,
															pagination: Y,
															...W.carousel,
															...te,
															children:
																Array.isArray(k) && k.length
																	? k.map((j, s) => (0, t.Y)(d.o, { controller: w, result: L[s], children: j }))
																	: L.map((j) =>
																			(0, t.Y)(d.o, {
																				controller: w,
																				result: j,
																				children:
																					J && w
																						? (0, M.Y)(J, { controller: w, result: j, treePath: W.result.treePath })
																						: (0, t.Y)(p.Q, { ...W.result, controller: w, result: j }, j.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(A.l, {
													controller: w,
													children:
														Array.isArray(k) && k.length
															? k.map((j, s) => (0, t.Y)(d.o, { controller: w, result: L[s], children: (0, t.Y)(t.FK, {}) }))
															: L.map((j) => (0, t.Y)(d.o, { controller: w, result: j, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, a, e) {
				'use strict';
				e.d(a, { l: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/dist/preact.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					i = e.n(o),
					u = e('./components/src/utilities/mergeStyles.ts');
				const b = () => (0, r.AH)({}),
					c = (0, l.PA)((p) => {
						const { children: M, className: h, internalClassName: _ } = p,
							g = (0, n.v2)(M),
							x = (0, u.Z)(p, b);
						return g.length ? (0, t.Y)('div', { className: i()('ss__recommendation-profile-tracker', h, _), ...x, children: M }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, a, e) {
				'use strict';
				e.d(a, { o: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/classnames/index.js'),
					o = e.n(l),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/createImpressionObserver.ts');
				const c = { ResultTracker: () => (0, n.AH)({}) },
					p = (0, r.PA)((M) => {
						const h = (0, i.u)(),
							_ = (0, u.v6)('resultTracker', h, {}, M),
							g = { impression: !0, click: !0 },
							{ children: x, result: P, track: I, controller: D, className: C, internalClassName: A, disableStyles: U, style: d } = _,
							f = { ...g, ...I },
							{ ref: O, inViewport: v } = (0, b.Q)();
						v && f.impression && D?.track.product.impression(P);
						const m = {};
						return (
							U ? d && (m.css = [d]) : (m.css = [c.ResultTracker(), d]),
							(0, t.Y)('div', {
								className: o()('ss__result-tracker', `ss__${D?.type}-result-tracker`, C, A),
								onClick: (T) => {
									f.click && D?.track.product.click(T, P);
								},
								ref: O,
								...m,
								children: x,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, a, e) {
				'use strict';
				e.d(a, { v: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = (r, l = '0px', o = !1) => {
					const [i, u] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const b = new IntersectionObserver(
								([c]) => {
									u(c.isIntersecting), o && c.isIntersecting && b.unobserve(r.current);
								},
								{ rootMargin: l }
							);
							return (
								r.current && b.observe(r.current),
								() => {
									b.unobserve(r.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, a, e) {
				'use strict';
				e.d(a, { v: () => r });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 250,
					r = (o, i = {}) => {
						const { rootMargin: u = '0px', fireOnce: b = !1, threshold: c = 0, minVisibleTime: p = 0 } = i,
							[M, h] = (0, t.J0)(!1),
							_ = (0, t.li)(null),
							g = (0, t.li)(null),
							[x, P] = (0, t.J0)(0),
							I = (0, t.hb)((D) => {
								(o.current = D), P((C) => C + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								h(!1);
								let D = null,
									C = null;
								if (!window.IntersectionObserver || !o.current) return;
								const A = () => {
										C && (window.clearInterval(C), (C = null));
									},
									U = () => {
										p > 0
											? ((g.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													h(!0), b && o.current && D && D.unobserve(o.current);
											  }, p)))
											: (h(!0), b && o.current && D && D.unobserve(o.current));
									},
									d = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (g.current = null), h(!1);
									};
								return (
									(D = new IntersectionObserver(
										([f]) => {
											f.isIntersecting
												? o.current && l(o.current)
													? (A(), U())
													: (d(),
													  C ||
															(C = window.setInterval(() => {
																if (!o.current) {
																	A();
																	return;
																}
																l(o.current) && (A(), U());
															}, n)))
												: (A(), d());
										},
										{ rootMargin: u, threshold: c }
									)),
									o.current && D.observe(o.current),
									() => {
										h(!1), A(), _.current && window.clearTimeout(_.current), D && o.current && D.unobserve(o.current);
									}
								);
							}, [o, x]),
							{ inViewport: M, updateRef: I }
						);
					};
				function l(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(R, a, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(R, a, e) {
				'use strict';
				e.d(a, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					l = 1e3;
				function o(i) {
					const u = (0, t.li)(null),
						{ inViewport: b, updateRef: c } = (0, n.v)(u, { ...i, fireOnce: !0, threshold: r, minVisibleTime: l });
					return { ref: u, inViewport: b, updateRef: c };
				}
			},
			'./components/src/utilities/snapify.ts'(R, a, e) {
				'use strict';
				e.d(a, { p: () => D });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					h = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					I = { globals: { siteId: 'atkzs2' } };
				class D {
					static recommendation(f) {
						const O = f.id;
						if (P[O]) return P[O];
						const v = (P[O] = A({ client: I, controller: f }));
						return (
							v.on('afterStore', async ({ controller: m }, T) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await T();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(f) {
						const O = f.id;
						if (P[O]) return P[O];
						const v = (P[O] = U({ client: I, controller: f }));
						return (
							v.on('afterStore', async ({ controller: m }, T) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await T();
							}),
							v.init(),
							v
						);
					}
					static search(f) {
						const O = f.id;
						if (P[O]) return P[O];
						const v = (P[O] = C({ client: I, controller: f }));
						return (
							v.on('afterStore', async ({ controller: m }, T) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await T();
							}),
							v.init(),
							v
						);
					}
				}
				function C(d) {
					const f = new c.V(new M.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), p.X);
					return new n.Tp(d.controller, {
						client: new o.K(d.client.globals, d.client.config),
						store: new u.U(d.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new h.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new x.J(d.client.globals),
					});
				}
				function A(d) {
					const f = new c.V(new M.E(), p.X).detach(!0);
					return new l.c(d.controller, {
						client: new o.K(d.client.globals, d.client.config),
						store: new b.t(d.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new h.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new x.J(d.client.globals),
					});
				}
				function U(d) {
					const f = new c.V(new M.E(), p.X).detach();
					return new r.Z(d.controller, {
						client: new o.K(d.client.globals, d.client.config),
						store: new i.Y(d.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new h.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new x.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, a, e) {
				'use strict';
				e.d(a, { Z: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					l = (o) => {
						const i = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								i.current && o.className?.includes('lang-') && !o.className?.includes(r) && window?.Prism?.highlightElement(i.current);
							}, [o.className, o.children, i]),
							(0, t.Y)('code', { ...o, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(R, a, e) {
				'use strict';
				e.d(a, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(n, r) {
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
						o = {};
					for (var i in l) o[l[i]] = i;
					var u = {};
					(n.prototype.toName = function (b) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var c,
							p,
							M = o[this.toHex()];
						if (M) return M;
						if (b?.closest) {
							var h = this.toRgb(),
								_ = 1 / 0,
								g = 'black';
							if (!u.length) for (var x in l) u[x] = new n(l[x]).toRgb();
							for (var P in l) {
								var I = ((c = h), (p = u[P]), Math.pow(c.r - p.r, 2) + Math.pow(c.g - p.g, 2) + Math.pow(c.b - p.b, 2));
								I < _ && ((_ = I), (g = P));
							}
							return g;
						}
					}),
						r.string.push([
							function (b) {
								var c = b.toLowerCase(),
									p = c === 'transparent' ? '#0000' : l[c];
								return p ? new n(p).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (R.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-Recommendation-Recommendation-stories.89809a91.iframe.bundle.js.map
