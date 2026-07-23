(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5019],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx'(z, k, o) {
				'use strict';
				o.r(k), o.d(k, { Price: () => d, __namedExportsOrder: () => b, default: () => B });
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					y = o('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					V = o('./components/src/utilities/storybook.tsx'),
					_ = o('./components/src/utilities/componentArgs.ts');
				const t = `# Facet Slider

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
					v = {
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
					B = {
						title: 'Molecules/FacetSlider',
						component: y.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(h.oz, { options: { overrides: { code: V.Z } }, children: t }), (0, s.Y)(h.uY, { story: h.h1 })],
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
							..._.F,
						},
					},
					d = (a) => (0, s.Y)(y.l, { ...a, facet: v });
				d.parameters = {
					...d.parameters,
					docs: {
						...d.parameters?.docs,
						source: {
							originalSource: '(args: FacetSliderProps) => <FacetSlider {...args} facet={sliderFacetMock as RangeFacet} />',
							...d.parameters?.docs?.source,
						},
					},
				};
				const b = ['Price'];
			},
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(z, k, o) {
				'use strict';
				o.d(k, { l: () => I });
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = o('../../node_modules/mobx-react-lite/es/index.js'),
					V = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = o('../../node_modules/classnames/index.js'),
					t = o.n(_),
					v = o('../../node_modules/react-ranger/dist/react-ranger.mjs'),
					B = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = o('./components/src/providers/treePath.tsx'),
					b = o('./components/src/providers/cache.tsx'),
					a = o('./components/src/utilities/mergeProps.ts'),
					x = o('./components/src/utilities/mergeStyles.ts');
				function D(E, j) {
					for (var n = []; j > 0; n[--j] = E);
					return n.join('');
				}
				function S(...E) {
					for (var j = 0, n, $ = E[j++], w = [], u, e, H, A; $; ) {
						if ((u = /^[^\x25]+/.exec($))) w.push(u[0]);
						else if ((u = /^\x25{2}/.exec($))) w.push('%');
						else if ((u = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec($))) {
							if ((n = E[u[1] || j++]) == null || n == null) throw 'Too few arguments.';
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
								(H = u[3] ? (u[3] == '0' ? '0' : u[3].charAt(1)) : ' '),
								(A = u[5] - String(n).length),
								(e = u[5] ? D(H, A) : ''),
								w.push(u[4] ? n + e : e + n);
						} else throw 'Huh ?!';
						$ = $.substring(u[0].length);
					}
					return w.join('');
				}
				var T = o('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = o('./components/src/hooks/useLang.tsx'),
					W = o('./components/src/hooks/useA11y.tsx'),
					N = o('../../node_modules/deepmerge/dist/cjs.js'),
					q = o.n(N);
				const ee = ({
						railColor: E,
						trackColor: j,
						handleColor: n,
						valueTextColor: $,
						handleDraggingColor: w,
						showTicks: u,
						stickyHandleLabel: e,
						tickTextColor: H,
						theme: A,
					}) =>
						(0, V.AH)({
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
									color: H,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: E || A?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: j || A?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: n || A?.variables?.colors?.primary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: $ || 'initial',
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
											background: w || n || A?.variables?.colors?.primary || '#000',
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
								color: $,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						}),
					I = (0, y.PA)((E) => {
						const j = (0, B.u)(),
							n = (0, d.LU)(),
							$ = { tickSize: E.facet?.step ? E.facet?.step * 10 : 20, treePath: n },
							w = (0, a.v6)('facetSlider', j, $, E),
							{ showTicks: u, facet: e, stickyHandleLabel: H, separateHandles: A, onChange: U, onDrag: Z, className: X, internalClassName: G } = w,
							{ overrideElement: J, shouldRenderDefault: Y } = (0, T._)('facetSlider', w);
						if (!Y) return J;
						let { tickSize: K } = w;
						isNaN(Number(K)) || Number(K) <= 0 ? (K = E.facet?.step ? E.facet?.step * 10 : 20) : (K = Number(K));
						const [Q, te] = (0, h.J0)([e.active?.low, e.active?.high]),
							[ae, r] = (0, h.J0)([e.active?.low, e.active?.high]),
							l = (c) => {
								if (!A || !e.step) return c;
								const [i, L] = c,
									P = e.range?.low,
									R = e.range?.high,
									M = e.step;
								return i === L ? (L + M <= R ? [i, L + M] : i - M >= P ? [i - M, L] : c) : c;
							};
						(((e.active?.low || e.active?.low === 0) && e.active?.high && Q[0] != e.active?.low) || Q[1] != e.active?.high) &&
							(r([e.active?.low, e.active?.high]), te([e.active?.low, e.active?.high]));
						const {
								getTrackProps: p,
								ticks: f,
								segments: m,
								handles: g,
							} = (0, v.d)({
								values: ae,
								onChange: (c) => {
									const i = l(c);
									r(i),
										U && U(i),
										e?.services?.urlManager &&
											(i[0] == e.range.low && i[1] == e.range.high
												? e.services.urlManager.remove('page').remove(`filter.${e.field}`).go()
												: e.services.urlManager.remove('page').set(`filter.${e.field}`, { low: i[0], high: i[1] }).go()),
										U && U(c);
								},
								onDrag: (c) => {
									const i = l(c);
									r(i), Z && Z(i);
								},
								min: e.range?.low,
								max: e.range?.high,
								stepSize: e.step,
								tickSize: K,
							}),
							F = (0, x.Z)(w, ee);
						return e.range && e.active && e.step
							? (0, s.Y)(b._, {
									children: (0, s.FD)('div', {
										className: t()('ss__facet-slider', X, G),
										...p(),
										...F,
										children: [
											(0, s.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													u &&
														f.map(({ value: c, getTickProps: i }) =>
															(0, s.Y)('div', {
																className: 'ss__facet-slider__tick',
																...i(),
																children: (0, s.Y)('div', { className: 'ss__facet-slider__tick__label', children: c }),
															})
														),
													m.map(({ getSegmentProps: c }, i) =>
														(0, s.Y)('div', { className: `${i === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...c() })
													),
													(0, s.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: g.map(({ value: c, active: i, getHandleProps: L }, P) => {
															const R = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${e.label} button, current value ${c}, ${e.range?.low ? `min value ${e.range?.low},` : ''} ${
																				e.range?.high ? `max value ${e.range?.high}` : ''
																			}`,
																		},
																	},
																},
																M = q()(R, w.lang || {}),
																ne = (0, C.u)(M, { facet: e, value: c });
															return (0, s.Y)('button', {
																type: 'button',
																...L({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...ne.sliderHandle?.all,
																ref: (re) => (0, W.iy)(re),
																children: (0, s.Y)('div', {
																	className: t()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': i }),
																	children:
																		H &&
																		(0, s.Y)('label', {
																			className: t()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${P}`,
																				{ 'ss__facet-slider__handle__label--pinleft': P == 0 && c == e?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': P == 1 && c == e?.range?.high }
																			),
																			children: S(e.formatValue, c),
																		}),
																}),
															});
														}),
													}),
												],
											}),
											!H &&
												(0, s.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: g.map(({ value: c }, i) =>
														(0, s.Y)('label', {
															className: t()('ss__facet-slider__label', `ss__facet-slider__label--${i}`),
															children: S(e.formatValue, c),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(z, k, o) {
				'use strict';
				o.d(k, { iy: () => _ });
				const s = 9,
					h = 27,
					y = 'ss-a11y',
					V =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function _(t, v, B, d) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = b),
							(a.innerHTML = `[${y}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					t &&
						!t.attributes?.[y] &&
						(t.setAttribute(y, !0),
						t.setAttribute('tabIndex', `${v || 0}`),
						t.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && t.click();
						}),
						B &&
							t.addEventListener('keydown', function (a) {
								const x = t.querySelectorAll(V),
									D = x[0],
									S = x[x.length - 1];
								if (a.keyCode == h) {
									t.focus(), d && d(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === s) &&
									(a.shiftKey
										? document.activeElement === D && (S.focus(), a.preventDefault())
										: document.activeElement === S && (D.focus(), a.preventDefault()));
							}));
				}
				o.d(k, ['DH', 0, V, 'aZ', 0, y]);
			},
			'./components/src/hooks/useLang.tsx'(z, k, o) {
				'use strict';
				const s = (h, y) => {
					const V = {};
					return (
						Object.keys(h).forEach((_) => {
							const t = h && h[_],
								v = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (v.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: t.value(y) } })
										: (v.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((v.attributes = { 'ss-lang': _ }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (v.attributes['aria-label'] = t.attributes['aria-label'](y))
											: (v.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (v.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](y))
											: (v.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (v.attributes.title = t.attributes.title(y))
											: (v.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (v.attributes.alt = t.attributes.alt(y)) : (v.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (v.attributes.placeholder = t.attributes.placeholder(y))
											: (v.attributes.placeholder = t.attributes.placeholder))),
								(v.all = { ...v.value, ...v.attributes, 'ss-lang': _ })),
								(V[_] = v);
						}),
						V
					);
				};
				o.d(k, ['u', 0, s]);
			},
			'./components/src/utilities/componentArgs.ts'(z, k, o) {
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
				o.d(k, ['F', 0, s]);
			},
			'./components/src/utilities/storybook.tsx'(z, k, o) {
				'use strict';
				var s = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const y = 'prism-block',
					V = (_) => {
						const t = (0, h.li)(null);
						return (
							(0, h.vJ)(() => {
								t.current && _.className?.includes('lang-') && !_.className?.includes(y) && window?.Prism?.highlightElement(t.current);
							}, [_.className, _.children, t]),
							(0, s.Y)('code', { ..._, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				o.d(k, ['Z', 0, V]);
			},
			'../../node_modules/memoizerific sync recursive'(z) {
				function k(o) {
					const s = new Error("Cannot find module '" + o + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(k.keys = () => []), (k.resolve = k), (k.id = '../../node_modules/memoizerific sync recursive'), (z.exports = k);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(z, k, o) {
				'use strict';
				o.d(k, { d: () => B });
				var s = o('../../node_modules/preact/compat/dist/compat.module.js');
				function h() {
					return (
						(h =
							Object.assign ||
							function (d) {
								for (var b = 1; b < arguments.length; b++) {
									var a = arguments[b];
									for (var x in a) Object.prototype.hasOwnProperty.call(a, x) && (d[x] = a[x]);
								}
								return d;
							}),
						h.apply(this, arguments)
					);
				}
				function y(d, b) {
					if (d == null) return {};
					var a = {},
						x = Object.keys(d),
						D,
						S;
					for (S = 0; S < x.length; S++) (D = x[S]), !(b.indexOf(D) >= 0) && (a[D] = d[D]);
					return a;
				}
				var V = function (b) {
						var a = b.getBoundingClientRect();
						return { left: Math.ceil(a.left), width: Math.ceil(a.width) };
					},
					_ = function (b) {
						return [].concat(b).sort(function (a, x) {
							return Number(a) - Number(x);
						});
					},
					t = function (b) {
						var a = s.default.useRef(b);
						return (
							(a.current = b),
							s.default.useCallback(function () {
								return a.current;
							}, [])
						);
					},
					v = {
						getPercentageForValue: function (b, a, x) {
							return Math.max(0, Math.min(100, ((b - a) / (x - a)) * 100));
						},
						getValueForClientX: function (b, a, x, D) {
							var S = a.left,
								T = a.width,
								C = (b - S) / T,
								W = (D - x) * C;
							return W + x;
						},
					};
				function B(d) {
					var b = d.interpolator,
						a = b === void 0 ? v : b,
						x = d.tickSize,
						D = x === void 0 ? 10 : x,
						S = d.values,
						T = d.min,
						C = d.max,
						W = d.ticks,
						N = d.steps,
						q = d.onChange,
						ee = d.onDrag,
						I = d.stepSize,
						E = s.default.useState(null),
						j = E[0],
						n = E[1],
						$ = s.default.useState(),
						w = $[0],
						u = $[1],
						e = t({ activeHandleIndex: j, onChange: q, onDrag: ee, values: S, tempValues: w }),
						H = s.default.useRef(),
						A = s.default.useCallback(
							function (r) {
								var l = V(H.current);
								return a.getValueForClientX(r, l, T, C);
							},
							[a, C, T]
						),
						U = s.default.useCallback(
							function (r, l) {
								if (N) {
									var p = N.indexOf(r),
										f = p + l;
									return f >= 0 && f < N.length ? N[f] : r;
								} else {
									var m = r + I * l;
									return m >= T && m <= C ? m : r;
								}
							},
							[C, T, I, N]
						),
						Z = s.default.useCallback(
							function (r) {
								var l = T,
									p = C;
								if (N)
									N.forEach(function (f) {
										f <= r && f > l && (l = f), f >= r && f < p && (p = f);
									});
								else {
									for (; l < r && l + I < r; ) l += I;
									p = Math.min(l + I, C);
								}
								return r - l < p - r ? l : p;
							},
							[C, T, I, N]
						),
						X = s.default.useCallback(
							function (r) {
								var l = e(),
									p = l.activeHandleIndex,
									f = l.onDrag,
									m = r.type === 'touchmove' ? r.changedTouches[0].clientX : r.clientX,
									g = A(m),
									F = Z(g),
									c = [].concat(S.slice(0, p), [F], S.slice(p + 1));
								f ? f(c) : u(c);
							},
							[e, A, Z, S]
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
										c = U(f[l], F),
										i = [].concat(f.slice(0, l), [c], f.slice(l + 1)),
										L = _(i);
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
										c = g.values,
										i = g.onChange,
										L = i === void 0 ? function () {} : i,
										P = g.onDrag,
										R = P === void 0 ? function () {} : P;
									document.removeEventListener('mousemove', X),
										document.removeEventListener('touchmove', X),
										document.removeEventListener('mouseup', f),
										document.removeEventListener('touchend', f);
									var M = _(F || c);
									L(M), R(M), n(null), u();
								};
								document.addEventListener('mousemove', X),
									document.addEventListener('touchmove', X),
									document.addEventListener('mouseup', p),
									document.addEventListener('touchend', p);
							},
							[e, X]
						),
						Y = s.default.useCallback(
							function (r) {
								return a.getPercentageForValue(r, T, C);
							},
							[a, C, T]
						),
						K = s.default.useMemo(
							function () {
								var r = W || N;
								if (!r) {
									for (r = [T]; r[r.length - 1] < C - D; ) r.push(r[r.length - 1] + D);
									r.push(C);
								}
								return r.map(function (l, p) {
									return {
										value: l,
										getTickProps: function (m) {
											var g = m === void 0 ? {} : m,
												F = g.key,
												c = F === void 0 ? p : F,
												i = g.style,
												L = i === void 0 ? {} : i,
												P = y(g, ['key', 'style']);
											return h({ key: c, style: h({ position: 'absolute', width: 0, left: Y(l) + '%', transform: 'translateX(-50%)' }, L) }, P);
										},
									};
								});
							},
							[W, Y, C, T, N, D]
						),
						Q = s.default.useMemo(
							function () {
								var r = _(w || S);
								return [].concat(r, [C]).map(function (l, p) {
									return {
										value: l,
										getSegmentProps: function (m) {
											var g = m === void 0 ? {} : m,
												F = g.key,
												c = F === void 0 ? p : F,
												i = g.style,
												L = i === void 0 ? {} : i,
												P = y(g, ['key', 'style']),
												R = Y(r[p - 1] ? r[p - 1] : T),
												M = Y(l) - R;
											return h({ key: c, style: h({ position: 'absolute', left: R + '%', width: M + '%' }, L) }, P);
										},
									};
								});
							},
							[Y, C, T, w, S]
						),
						te = s.default.useMemo(
							function () {
								return (w || S).map(function (r, l) {
									return {
										value: r,
										active: l === j,
										getHandleProps: function (f) {
											var m = f === void 0 ? {} : f,
												g = m.key,
												F = g === void 0 ? l : g,
												c = m.ref,
												i = m.innerRef,
												L = m.onKeyDown,
												P = m.onMouseDown,
												R = m.onTouchStart,
												M = m.style,
												ne = M === void 0 ? {} : M,
												re = y(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return h(
												{
													key: F,
													onKeyDown: function (O) {
														O.persist(), G(O, l), L && L(O);
													},
													onMouseDown: function (O) {
														O.persist(), J(O, l), P && P(O);
													},
													onTouchStart: function (O) {
														O.persist(), J(O, l), R && R(O);
													},
													role: 'slider',
													'aria-valuemin': T,
													'aria-valuemax': C,
													'aria-valuenow': r,
													style: h(
														{ position: 'absolute', top: '50%', left: Y(r) + '%', zIndex: l === j ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ne
													),
												},
												re
											);
										},
									};
								});
							},
							[j, Y, G, J, T, C, w, S]
						),
						ae = function (l) {
							var p = l === void 0 ? {} : l,
								f = p.style,
								m = f === void 0 ? {} : f,
								g = p.ref,
								F = y(p, ['style', 'ref']);
							return h(
								{
									ref: function (i) {
										(H.current = i), g && (typeof g == 'function' ? g(i) : (g.current = i));
									},
									style: h({ position: 'relative', userSelect: 'none' }, m),
								},
								F
							);
						};
					return { activeHandleIndex: j, getTrackProps: ae, ticks: K, segments: Q, handles: te };
				}
			},
		},
	]);
})();
