(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5019],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx'(I, x, o) {
				'use strict';
				o.r(x), o.d(x, { Price: () => t, __namedExportsOrder: () => v, default: () => c });
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					C = o('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					N = o('./components/src/utilities/storybook.tsx'),
					y = o('./components/src/utilities/componentArgs.ts');
				const b = `# Facet Slider

Renders a slider to be used with any slider facet. Built using <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannerlinsley/react-ranger">react-ranger</a>.

## Usage
\`\`\`tsx
import { FacetSlider } from '@athoscommerce/snap-preact/components';
\`\`\`

### facet
The required \`facet\` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (\`display\` type of \`'slider'\`).

\`\`\`tsx
<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />
\`\`\`

### showTicks
The \`showTicks\` prop will render reference ticks below the slider track.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
/>
\`\`\`

### tickSize
The \`tickSize\` prop specifies the unit number between ticks. Must be used with \`showTicks\` prop.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickSize={20}
/>
\`\`\`

### tickTextColor
The \`tickTextColor\` prop specifies ticks text color. Must be used with \`showTicks\` prop.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickTextColor={'#cccccc'}
/>
\`\`\`

### handleColor
The \`handleColor\` prop specifies the handle color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleColor={'#0000ff'}
/>
\`\`\`

### stickyHandleLabel
The \`stickyHandleLabel\` prop specifies if the handle value text should display above each handle.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	stickyHandleLabel={true}
/>
\`\`\`

### separateHandles
The \`separateHandles\` prop prevents the minimum and maximum slider values from being equal. When enabled, if a user attempts to set both handles to the same value, they will be automatically separated by one step value. The component intelligently determines whether to adjust the min or max value based on the available range.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	separateHandles={true}
/>
\`\`\`

### handleDraggingColor
The \`handleDraggingColor\` prop specifies the handle color while dragging.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleDraggingColor={'0000ff'}
/>
\`\`\`

### valueTextColor
The \`valueTextColor\` prop specifies the value text color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	valueTextColor={'#222222'}
/>
\`\`\`

### trackColor
The \`trackColor\` prop specifies the slider track (background) color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	trackColor={'#cccccc'}
/>
\`\`\`

### railColor
The \`railColor\` prop specifies the slider rail (foreground) color.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	railColor={'#0000ff'}
/>
\`\`\`

### Events

#### onChange
The \`onChange\` prop allows for a custom callback function for when a slider handle has been changed. This callback is invoked **before** the URL manager updates occur, allowing for mutation of values or other operations prior to API request.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onChange={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`

#### onDrag
The \`onDrag\` prop allows for a custom callback function for when a slider handle is being dragged.

\`\`\`tsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onDrag={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetSlider component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`sliderHandle\` | Slider handle element text/attributes | \`facet\` (RangeFacet), \`value\` (number) |

### Example

\`\`\`tsx
<FacetSlider
	facet={rangeFacet}
	lang={{
		sliderHandle: {
			attributes: {
				'aria-label': (data) => \`\${data.facet.label} slider handle, current value \${data.value}\`,
			},
		},
	}}
/>
\`\`\`
`,
					$ = {
						field: 'price',
						label: 'Price',
						type: 'range',
						display: 'slider',
						filtered: !1,
						collapsed: !1,
						range: { low: 0, high: 120 },
						active: { low: 0, high: 120 },
						step: 1,
						formatValue: '$%01.2f',
					},
					c = {
						title: 'Molecules/FacetSlider',
						component: C.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(h.oz, { options: { overrides: { code: N.Z } }, children: b }), (0, s.Y)(h.uY, { story: h.h1 })],
									}),
							},
						},
						decorators: [(a) => (0, s.Y)('div', { style: { maxWidth: '300px' }, children: (0, s.Y)(a, {}) })],
						argTypes: {
							facet: {
								description: 'Facet store reference',
								type: { required: !0 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							showTicks: {
								description: 'enables/disables ticks',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							tickSize: {
								defaultValue: 20,
								description: 'distance between ticks',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 20 } },
								control: { type: 'number' },
							},
							tickTextColor: {
								description: 'ticks color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							trackColor: {
								description: 'Slider track color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							railColor: {
								description: 'Slider rail Color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							valueTextColor: {
								description: 'Slider value Text Color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							handleColor: {
								description: 'Slider handle color',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							stickyHandleLabel: {
								description: 'enables/disables sticky handle labels',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							separateHandles: {
								description: 'separates slider handles by one step value to prevent min and max from being equal',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							handleDraggingColor: {
								description: 'Slider handle color when dragging',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'color' },
							},
							onDrag: {
								description: 'Slider onDrag event handler - fires as the slider is dragged (should not be used to trigger searches)',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onDrag',
							},
							onChange: {
								description:
									'Slider onChange event handler - fires after touchEnd and before URL manager updates (used to trigger search and allows for value mutation)',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onChange',
							},
							...y.F,
						},
					},
					t = (a) => (0, s.Y)(C.l, { ...a, facet: $ });
				t.parameters = {
					...t.parameters,
					docs: {
						...t.parameters?.docs,
						source: {
							originalSource: '(args: FacetSliderProps) => <FacetSlider {...args} facet={sliderFacetMock as RangeFacet} />',
							...t.parameters?.docs?.source,
						},
					},
				};
				const v = ['Price'];
			},
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(I, x, o) {
				'use strict';
				o.d(x, { l: () => B });
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = o('../../node_modules/mobx-react-lite/es/index.js'),
					N = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					y = o('../../node_modules/classnames/index.js'),
					b = o.n(y),
					$ = o('../../node_modules/react-ranger/dist/react-ranger.mjs'),
					c = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = o('./components/src/providers/treePath.tsx'),
					v = o('./components/src/providers/cache.tsx'),
					a = o('./components/src/utilities/mergeProps.ts'),
					_ = o('./components/src/utilities/mergeStyles.ts');
				function E(j, D) {
					for (var n = []; D > 0; n[--D] = j);
					return n.join('');
				}
				function k(...j) {
					for (var D = 0, n, M = j[D++], w = [], u, e, Y, R; M; ) {
						if ((u = /^[^\x25]+/.exec(M))) w.push(u[0]);
						else if ((u = /^\x25{2}/.exec(M))) w.push('%');
						else if ((u = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(M))) {
							if ((n = j[u[1] || D++]) == null || n == null) throw 'Too few arguments.';
							if (/[^s]/.test(u[7]) && typeof n != 'number') throw 'Expecting number but found ' + typeof n;
							switch (u[7]) {
								case 'b':
									n = n.toString(2);
									break;
								case 'c':
									n = String.fromCharCode(n);
									break;
								case 'd':
									n = parseInt(n);
									break;
								case 'e':
									n = u[6] ? n.toExponential(u[6]) : n.toExponential();
									break;
								case 'f':
									n = u[6] ? parseFloat(n).toFixed(u[6]) : parseFloat(n);
									break;
								case 'o':
									n = n.toString(8);
									break;
								case 's':
									n = (n = String(n)) && u[6] ? n.substring(0, u[6]) : n;
									break;
								case 'u':
									n = Math.abs(n);
									break;
								case 'x':
									n = n.toString(16);
									break;
								case 'X':
									n = n.toString(16).toUpperCase();
									break;
							}
							(n = /[def]/.test(u[7]) && u[2] && n > 0 ? '+' + n : n),
								(Y = u[3] ? (u[3] == '0' ? '0' : u[3].charAt(1)) : ' '),
								(R = u[5] - String(n).length),
								(e = u[5] ? E(Y, R) : ''),
								w.push(u[4] ? n + e : e + n);
						} else throw 'Huh ?!';
						M = M.substring(u[0].length);
					}
					return w.join('');
				}
				var T = o('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = o('./components/src/hooks/useLang.tsx'),
					W = o('./components/src/hooks/useA11y.tsx'),
					A = o('../../node_modules/deepmerge/dist/cjs.js'),
					q = o.n(A);
				const ee = ({
						railColor: j,
						trackColor: D,
						handleColor: n,
						valueTextColor: M,
						handleDraggingColor: w,
						showTicks: u,
						stickyHandleLabel: e,
						tickTextColor: Y,
						theme: R,
					}) =>
						(0, N.AH)({
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5px',
							marginBottom: u && e ? '20px' : u || e ? '10px' : '5px',
							'& .ss__facet-slider__slider': {
								position: 'relative',
								display: 'inline-block',
								height: '8px',
								width: 'calc(100% - 2rem)',
								margin: e ? '1rem' : '0 1rem',
								top: '10px',
							},
							'& .ss__facet-slider__tick': {
								'&:before': {
									content: "''",
									position: 'absolute',
									left: '0',
									background: 'rgba(0, 0, 0, 0.2)',
									height: '5px',
									width: '2px',
									transform: 'translate(-50%, 0.7rem)',
								},
								'& .ss__facet-slider__tick__label': {
									position: 'absolute',
									fontSize: '0.6rem',
									color: Y,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: j || R?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: D || R?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: n || R?.variables?.colors?.primary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: M || 'initial',
										fontWeight: 'normal',
										transform: 'translateY(0) scale(0.9)',
										transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
										position: 'relative',
										cursor: 'pointer',
										'&:after': {
											backgroundColor: '#ffffff',
											width: '30%',
											height: '30%',
											top: '0',
											bottom: '0',
											left: '0',
											content: '""',
											position: 'absolute',
											right: '0',
											borderRadius: '12px',
											margin: 'auto',
											cursor: 'pointer',
										},
										'&.ss__facet-slider__handle--active': {
											background: w || n || R?.variables?.colors?.primary || '#000',
											'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
										},
										'& label.ss__facet-slider__handle__label': {
											display: 'inline-block',
											marginTop: u && !e ? '35px' : '20px',
											'&.ss__facet-slider__handle__label--pinleft': { left: '0px' },
											'&.ss__facet-slider__handle__label--pinright': { right: '0px' },
											'&.ss__facet-slider__handle__label--sticky': {
												position: 'absolute',
												top: '-20px',
												fontFamily: 'Roboto, Helvetica, Arial',
												fontSize: '14px',
												marginTop: '0px',
											},
										},
									},
								},
							},
							'& .ss__facet-slider__labels': {
								textAlign: 'center',
								marginTop: u && !e ? '40px' : '20px',
								color: M,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						}),
					B = (0, C.PA)((j) => {
						const D = (0, c.u)(),
							n = (0, t.LU)(),
							M = { tickSize: j.facet?.step ? j.facet?.step * 10 : 20, treePath: n },
							w = (0, a.v6)('facetSlider', D, M, j),
							{ showTicks: u, facet: e, stickyHandleLabel: Y, separateHandles: R, onChange: U, onDrag: Z, className: X, internalClassName: G } = w,
							{ overrideElement: J, shouldRenderDefault: z } = (0, T._)('facetSlider', w);
						if (!z) return J;
						let { tickSize: K } = w;
						isNaN(Number(K)) || Number(K) <= 0 ? (K = j.facet?.step ? j.facet?.step * 10 : 20) : (K = Number(K));
						const [Q, te] = (0, h.J0)([e.active?.low, e.active?.high]),
							[ae, r] = (0, h.J0)([e.active?.low, e.active?.high]),
							l = (d) => {
								if (!R || !e.step) return d;
								const [i, L] = d,
									P = e.range?.low,
									O = e.range?.high,
									V = e.step;
								return i === L ? (L + V <= O ? [i, L + V] : i - V >= P ? [i - V, L] : d) : d;
							};
						(((e.active?.low || e.active?.low === 0) && e.active?.high && Q[0] != e.active?.low) || Q[1] != e.active?.high) &&
							(r([e.active?.low, e.active?.high]), te([e.active?.low, e.active?.high]));
						const {
								getTrackProps: p,
								ticks: f,
								segments: m,
								handles: g,
							} = (0, $.d)({
								values: ae,
								onChange: (d) => {
									const i = l(d);
									r(i),
										U && U(i),
										e?.services?.urlManager &&
											(i[0] == e.range.low && i[1] == e.range.high
												? e.services.urlManager.remove('page').remove(`filter.${e.field}`).go()
												: e.services.urlManager.remove('page').set(`filter.${e.field}`, { low: i[0], high: i[1] }).go()),
										U && U(d);
								},
								onDrag: (d) => {
									const i = l(d);
									r(i), Z && Z(i);
								},
								min: e.range?.low,
								max: e.range?.high,
								stepSize: e.step,
								tickSize: K,
							}),
							F = (0, _.Z)(w, ee);
						return e.range && e.active && e.step
							? (0, s.Y)(v._, {
									children: (0, s.FD)('div', {
										className: b()('ss__facet-slider', X, G),
										...p(),
										...F,
										children: [
											(0, s.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													u &&
														f.map(({ value: d, getTickProps: i }) =>
															(0, s.Y)('div', {
																className: 'ss__facet-slider__tick',
																...i(),
																children: (0, s.Y)('div', { className: 'ss__facet-slider__tick__label', children: d }),
															})
														),
													m.map(({ getSegmentProps: d }, i) =>
														(0, s.Y)('div', { className: `${i === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...d() })
													),
													(0, s.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: g.map(({ value: d, active: i, getHandleProps: L }, P) => {
															const O = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${e.label} button, current value ${d}, ${e.range?.low ? `min value ${e.range?.low},` : ''} ${
																				e.range?.high ? `max value ${e.range?.high}` : ''
																			}`,
																		},
																	},
																},
																V = q()(O, w.lang || {}),
																ne = (0, S.u)(V, { facet: e, value: d }, { activeBreakpoint: D?.activeBreakpoint });
															return (0, s.Y)('button', {
																type: 'button',
																...L({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...ne.sliderHandle?.all,
																ref: (re) => (0, W.iy)(re),
																children: (0, s.Y)('div', {
																	className: b()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': i }),
																	children:
																		Y &&
																		(0, s.Y)('label', {
																			className: b()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${P}`,
																				{ 'ss__facet-slider__handle__label--pinleft': P == 0 && d == e?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': P == 1 && d == e?.range?.high }
																			),
																			children: k(e.formatValue, d),
																		}),
																}),
															});
														}),
													}),
												],
											}),
											!Y &&
												(0, s.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: g.map(({ value: d }, i) =>
														(0, s.Y)('label', {
															className: b()('ss__facet-slider__label', `ss__facet-slider__label--${i}`),
															children: k(e.formatValue, d),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(I, x, o) {
				'use strict';
				o.d(x, { iy: () => y });
				const s = 9,
					h = 27,
					C = 'ss-a11y',
					N =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function y(b, $, c, t) {
					const v = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${v}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = v),
							(a.innerHTML = `[${C}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					b &&
						!b.attributes?.[C] &&
						(b.setAttribute(C, !0),
						b.setAttribute('tabIndex', `${$ || 0}`),
						b.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && b.click();
						}),
						c &&
							b.addEventListener('keydown', function (a) {
								const _ = b.querySelectorAll(N),
									E = _[0],
									k = _[_.length - 1];
								if (a.keyCode == h) {
									b.focus(), t && t(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === s) &&
									(a.shiftKey
										? document.activeElement === E && (k.focus(), a.preventDefault())
										: document.activeElement === k && (E.focus(), a.preventDefault()));
							}));
				}
				o.d(x, ['DH', 0, N, 'aZ', 0, C]);
			},
			'./components/src/hooks/useLang.tsx'(I, x, o) {
				'use strict';
				const s = (h, C, N) => {
					const y = N ? { ...C, ...N } : C,
						b = {};
					return (
						Object.keys(h).forEach(($) => {
							const c = h && h[$],
								t = {};
							c &&
								(c?.value &&
									(typeof c.value == 'function'
										? (t.value = { 'ss-lang': $, dangerouslySetInnerHTML: { __html: c.value(y) } })
										: (t.value = { 'ss-lang': $, dangerouslySetInnerHTML: { __html: c.value } })),
								c?.attributes &&
									Object.keys(c?.attributes).length &&
									((t.attributes = { 'ss-lang': $ }),
									c?.attributes?.['aria-label'] &&
										(typeof c.attributes?.['aria-label'] == 'function'
											? (t.attributes['aria-label'] = c.attributes['aria-label'](y))
											: (t.attributes['aria-label'] = c.attributes['aria-label'])),
									c?.attributes?.['aria-valuetext'] &&
										(typeof c.attributes?.['aria-valuetext'] == 'function'
											? (t.attributes['aria-valuetext'] = c.attributes['aria-valuetext'](y))
											: (t.attributes['aria-valuetext'] = c.attributes['aria-valuetext'])),
									c?.attributes?.title &&
										(typeof c.attributes?.title == 'function'
											? (t.attributes.title = c.attributes.title(y))
											: (t.attributes.title = c.attributes.title)),
									c?.attributes?.alt &&
										(typeof c.attributes?.alt == 'function' ? (t.attributes.alt = c.attributes.alt(y)) : (t.attributes.alt = c.attributes.alt)),
									c?.attributes?.placeholder &&
										(typeof c.attributes?.placeholder == 'function'
											? (t.attributes.placeholder = c.attributes.placeholder(y))
											: (t.attributes.placeholder = c.attributes.placeholder))),
								(t.all = { ...t.value, ...t.attributes, 'ss-lang': $ })),
								(b[$] = t);
						}),
						b
					);
				};
				o.d(x, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(I, x, o) {
				'use strict';
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
				o.d(x, ['F', 0, s]);
			},
			'./components/src/utilities/storybook.tsx'(I, x, o) {
				'use strict';
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const C = 'prism-block',
					N = (y) => {
						const b = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								b.current && y.className?.includes('lang-') && !y.className?.includes(C) && window?.Prism?.highlightElement(b.current);
							}, [y.className, y.children, b]),
							(0, s.Y)('code', { ...y, ref: b, 'data-prismjs-copy': 'Copy' })
						);
					};
				o.d(x, ['Z', 0, N]);
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function x(o) {
					const s = new Error("Cannot find module '" + o + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(x.keys = () => []), (x.resolve = x), (x.id = '../../node_modules/memoizerific sync recursive'), (I.exports = x);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(I, x, o) {
				'use strict';
				o.d(x, { d: () => c });
				var s = o('../../node_modules/preact/compat/dist/compat.module.js');
				function h() {
					return (
						(h =
							Object.assign ||
							function (t) {
								for (var v = 1; v < arguments.length; v++) {
									var a = arguments[v];
									for (var _ in a) Object.prototype.hasOwnProperty.call(a, _) && (t[_] = a[_]);
								}
								return t;
							}),
						h.apply(this, arguments)
					);
				}
				function C(t, v) {
					if (t == null) return {};
					var a = {},
						_ = Object.keys(t),
						E,
						k;
					for (k = 0; k < _.length; k++) (E = _[k]), !(v.indexOf(E) >= 0) && (a[E] = t[E]);
					return a;
				}
				var N = function (v) {
						var a = v.getBoundingClientRect();
						return { left: Math.ceil(a.left), width: Math.ceil(a.width) };
					},
					y = function (v) {
						return [].concat(v).sort(function (a, _) {
							return Number(a) - Number(_);
						});
					},
					b = function (v) {
						var a = s.default.useRef(v);
						return (
							(a.current = v),
							s.default.useCallback(function () {
								return a.current;
							}, [])
						);
					},
					$ = {
						getPercentageForValue: function (v, a, _) {
							return Math.max(0, Math.min(100, ((v - a) / (_ - a)) * 100));
						},
						getValueForClientX: function (v, a, _, E) {
							var k = a.left,
								T = a.width,
								S = (v - k) / T,
								W = (E - _) * S;
							return W + _;
						},
					};
				function c(t) {
					var v = t.interpolator,
						a = v === void 0 ? $ : v,
						_ = t.tickSize,
						E = _ === void 0 ? 10 : _,
						k = t.values,
						T = t.min,
						S = t.max,
						W = t.ticks,
						A = t.steps,
						q = t.onChange,
						ee = t.onDrag,
						B = t.stepSize,
						j = s.default.useState(null),
						D = j[0],
						n = j[1],
						M = s.default.useState(),
						w = M[0],
						u = M[1],
						e = b({ activeHandleIndex: D, onChange: q, onDrag: ee, values: k, tempValues: w }),
						Y = s.default.useRef(),
						R = s.default.useCallback(
							function (r) {
								var l = N(Y.current);
								return a.getValueForClientX(r, l, T, S);
							},
							[a, S, T]
						),
						U = s.default.useCallback(
							function (r, l) {
								if (A) {
									var p = A.indexOf(r),
										f = p + l;
									return f >= 0 && f < A.length ? A[f] : r;
								} else {
									var m = r + B * l;
									return m >= T && m <= S ? m : r;
								}
							},
							[S, T, B, A]
						),
						Z = s.default.useCallback(
							function (r) {
								var l = T,
									p = S;
								if (A)
									A.forEach(function (f) {
										f <= r && f > l && (l = f), f >= r && f < p && (p = f);
									});
								else {
									for (; l < r && l + B < r; ) l += B;
									p = Math.min(l + B, S);
								}
								return r - l < p - r ? l : p;
							},
							[S, T, B, A]
						),
						X = s.default.useCallback(
							function (r) {
								var l = e(),
									p = l.activeHandleIndex,
									f = l.onDrag,
									m = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									g = R(m),
									F = Z(g),
									d = [].concat(k.slice(0, p), [F], k.slice(p + 1));
								f ? f(d) : u(d);
							},
							[e, R, Z, k]
						),
						G = s.default.useCallback(
							function (r, l) {
								var p = e(),
									f = p.values,
									m = p.onChange,
									g = m === void 0 ? function () {} : m;
								if (r.keyCode === 37 || r.keyCode === 39) {
									n(l);
									var F = r.keyCode === 37 ? -1 : 1,
										d = U(f[l], F),
										i = [].concat(f.slice(0, l), [d], f.slice(l + 1)),
										L = y(i);
									g(L);
								}
							},
							[e, U]
						),
						J = s.default.useCallback(
							function (r, l) {
								n(l);
								var p = function f(m) {
									var g = e(),
										F = g.tempValues,
										d = g.values,
										i = g.onChange,
										L = i === void 0 ? function () {} : i,
										P = g.onDrag,
										O = P === void 0 ? function () {} : P;
									document.removeEventListener('mousemove', X),
										document.removeEventListener('touchmove', X),
										document.removeEventListener('mouseup', f),
										document.removeEventListener('touchend', f);
									var V = y(F || d);
									L(V), O(V), n(null), u();
								};
								document.addEventListener('mousemove', X),
									document.addEventListener('touchmove', X),
									document.addEventListener('mouseup', p),
									document.addEventListener('touchend', p);
							},
							[e, X]
						),
						z = s.default.useCallback(
							function (r) {
								return a.getPercentageForValue(r, T, S);
							},
							[a, S, T]
						),
						K = s.default.useMemo(
							function () {
								var r = W || A;
								if (!r) {
									for (r = [T]; r[r.length - 1] < S - E; ) r.push(r[r.length - 1] + E);
									r.push(S);
								}
								return r.map(function (l, p) {
									return {
										value: l,
										getTickProps: function (m) {
											var g = m === void 0 ? {} : m,
												F = g.key,
												d = F === void 0 ? p : F,
												i = g.style,
												L = i === void 0 ? {} : i,
												P = C(g, ['key', 'style']);
											return h({ key: d, style: h({ position: 'absolute', width: 0, left: z(l) + '%', transform: 'translateX(-50%)' }, L) }, P);
										},
									};
								});
							},
							[W, z, S, T, A, E]
						),
						Q = s.default.useMemo(
							function () {
								var r = y(w || k);
								return [].concat(r, [S]).map(function (l, p) {
									return {
										value: l,
										getSegmentProps: function (m) {
											var g = m === void 0 ? {} : m,
												F = g.key,
												d = F === void 0 ? p : F,
												i = g.style,
												L = i === void 0 ? {} : i,
												P = C(g, ['key', 'style']),
												O = z(r[p - 1] ? r[p - 1] : T),
												V = z(l) - O;
											return h({ key: d, style: h({ position: 'absolute', left: O + '%', width: V + '%' }, L) }, P);
										},
									};
								});
							},
							[z, S, T, w, k]
						),
						te = s.default.useMemo(
							function () {
								return (w || k).map(function (r, l) {
									return {
										value: r,
										active: l === D,
										getHandleProps: function (f) {
											var m = f === void 0 ? {} : f,
												g = m.key,
												F = g === void 0 ? l : g,
												d = m.ref,
												i = m.innerRef,
												L = m.onKeyDown,
												P = m.onMouseDown,
												O = m.onTouchStart,
												V = m.style,
												ne = V === void 0 ? {} : V,
												re = C(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return h(
												{
													key: F,
													onKeyDown: function (H) {
														H.persist(), G(H, l), L && L(H);
													},
													onMouseDown: function (H) {
														H.persist(), J(H, l), P && P(H);
													},
													onTouchStart: function (H) {
														H.persist(), J(H, l), O && O(H);
													},
													role: 'slider',
													'aria-valuemin': T,
													'aria-valuemax': S,
													'aria-valuenow': r,
													style: h(
														{ position: 'absolute', top: '50%', left: z(r) + '%', zIndex: l === D ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ne
													),
												},
												re
											);
										},
									};
								});
							},
							[D, z, G, J, T, S, w, k]
						),
						ae = function (l) {
							var p = l === void 0 ? {} : l,
								f = p.style,
								m = f === void 0 ? {} : f,
								g = p.ref,
								F = C(p, ['style', 'ref']);
							return h(
								{
									ref: function (i) {
										(Y.current = i), g && (typeof g == 'function' ? g(i) : (g.current = i));
									},
									style: h({ position: 'relative', userSelect: 'none' }, m),
								},
								F
							);
						};
					return { activeHandleIndex: D, getTrackProps: ae, ticks: K, segments: Q, handles: te };
				}
			},
		},
	]);
})();
