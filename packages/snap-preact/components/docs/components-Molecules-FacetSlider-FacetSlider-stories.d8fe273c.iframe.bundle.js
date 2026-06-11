(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5019],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx'(z, S, l) {
				'use strict';
				l.r(S), l.d(S, { Price: () => d, __namedExportsOrder: () => b, default: () => B });
				var s = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = l('../../node_modules/@storybook/blocks/dist/index.mjs'),
					y = l('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					V = l('./components/src/utilities/storybook.tsx'),
					_ = l('./components/src/utilities/componentArgs.ts');
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
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(z, S, l) {
				'use strict';
				l.d(S, { l: () => I });
				var s = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = l('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = l('../../node_modules/mobx-react-lite/es/index.js'),
					V = l('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = l('../../node_modules/classnames/index.js'),
					t = l.n(_),
					v = l('../../node_modules/react-ranger/dist/react-ranger.mjs'),
					B = l('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = l('./components/src/providers/treePath.tsx'),
					b = l('./components/src/providers/cache.tsx'),
					a = l('./components/src/utilities/mergeProps.ts'),
					x = l('./components/src/utilities/mergeStyles.ts');
				function D(E, j) {
					for (var r = []; j > 0; r[--j] = E);
					return r.join('');
				}
				function k(...E) {
					for (var j = 0, r, M = E[j++], T = [], u, e, H, A; M; ) {
						if ((u = /^[^\x25]+/.exec(M))) T.push(u[0]);
						else if ((u = /^\x25{2}/.exec(M))) T.push('%');
						else if ((u = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(M))) {
							if ((r = E[u[1] || j++]) == null || r == null) throw 'Too few arguments.';
							if (/[^s]/.test(u[7]) && typeof r != 'number') throw 'Expecting number but found ' + typeof r;
							switch (u[7]) {
								case 'b':
									r = r.toString(2);
									break;
								case 'c':
									r = String.fromCharCode(r);
									break;
								case 'd':
									r = parseInt(r);
									break;
								case 'e':
									r = u[6] ? r.toExponential(u[6]) : r.toExponential();
									break;
								case 'f':
									r = u[6] ? parseFloat(r).toFixed(u[6]) : parseFloat(r);
									break;
								case 'o':
									r = r.toString(8);
									break;
								case 's':
									r = (r = String(r)) && u[6] ? r.substring(0, u[6]) : r;
									break;
								case 'u':
									r = Math.abs(r);
									break;
								case 'x':
									r = r.toString(16);
									break;
								case 'X':
									r = r.toString(16).toUpperCase();
									break;
							}
							(r = /[def]/.test(u[7]) && u[2] && r > 0 ? '+' + r : r),
								(H = u[3] ? (u[3] == '0' ? '0' : u[3].charAt(1)) : ' '),
								(A = u[5] - String(r).length),
								(e = u[5] ? D(H, A) : ''),
								T.push(u[4] ? r + e : e + r);
						} else throw 'Huh ?!';
						M = M.substring(u[0].length);
					}
					return T.join('');
				}
				var w = l('./components/src/hooks/useCustomComponentOverride.tsx'),
					C = l('./components/src/hooks/useLang.tsx'),
					W = l('./components/src/hooks/useA11y.tsx'),
					N = l('../../node_modules/deepmerge/dist/cjs.js'),
					q = l.n(N);
				const ee = ({
						railColor: E,
						trackColor: j,
						handleColor: r,
						valueTextColor: M,
						handleDraggingColor: T,
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
										background: r || A?.variables?.colors?.primary || '#333',
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
											background: T || r || A?.variables?.colors?.primary || '#000',
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
					I = (0, y.PA)((E) => {
						const j = (0, B.u)(),
							r = (0, d.LU)(),
							M = { tickSize: E.facet?.step ? E.facet?.step * 10 : 20, treePath: r },
							T = (0, a.v6)('facetSlider', j, M, E),
							{ showTicks: u, facet: e, stickyHandleLabel: H, separateHandles: A, onChange: U, onDrag: Z, className: X, internalClassName: G } = T,
							{ overrideElement: J, shouldRenderDefault: Y } = (0, w._)('facetSlider', T);
						if (!Y) return J;
						let { tickSize: K } = T;
						isNaN(Number(K)) || Number(K) <= 0 ? (K = E.facet?.step ? E.facet?.step * 10 : 20) : (K = Number(K));
						const [Q, te] = (0, h.J0)([e.active?.low, e.active?.high]),
							[ae, n] = (0, h.J0)([e.active?.low, e.active?.high]),
							o = (c) => {
								if (!A || !e.step) return c;
								const [i, F] = c,
									P = e.range?.low,
									R = e.range?.high,
									$ = e.step;
								return i === F ? (F + $ <= R ? [i, F + $] : i - $ >= P ? [i - $, F] : c) : c;
							};
						(((e.active?.low || e.active?.low === 0) && e.active?.high && Q[0] != e.active?.low) || Q[1] != e.active?.high) &&
							(n([e.active?.low, e.active?.high]), te([e.active?.low, e.active?.high]));
						const {
								getTrackProps: p,
								ticks: f,
								segments: m,
								handles: g,
							} = (0, v.d)({
								values: ae,
								onChange: (c) => {
									const i = o(c);
									n(i),
										U && U(i),
										e?.services?.urlManager &&
											(i[0] == e.range.low && i[1] == e.range.high
												? e.services.urlManager.remove('page').remove(`filter.${e.field}`).go()
												: e.services.urlManager.remove('page').set(`filter.${e.field}`, { low: i[0], high: i[1] }).go()),
										U && U(c);
								},
								onDrag: (c) => {
									const i = o(c);
									n(i), Z && Z(i);
								},
								min: e.range?.low,
								max: e.range?.high,
								stepSize: e.step,
								tickSize: K,
							}),
							L = (0, x.Z)(T, ee);
						return e.range && e.active && e.step
							? (0, s.Y)(b._, {
									children: (0, s.FD)('div', {
										className: t()('ss__facet-slider', X, G),
										...p(),
										...L,
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
														children: g.map(({ value: c, active: i, getHandleProps: F }, P) => {
															const R = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${e.label} button, current value ${c}, ${e.range?.low ? `min value ${e.range?.low},` : ''} ${
																				e.range?.high ? `max value ${e.range?.high}` : ''
																			}`,
																		},
																	},
																},
																$ = q()(R, T.lang || {}),
																re = (0, C.u)($, { facet: e, value: c });
															return (0, s.Y)('button', {
																type: 'button',
																...F({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...re.sliderHandle?.all,
																ref: (ne) => (0, W.iy)(ne),
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
																			children: k(e.formatValue, c),
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
															children: k(e.formatValue, c),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(z, S, l) {
				'use strict';
				l.d(S, { DH: () => V, aZ: () => y, iy: () => _ });
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
									k = x[x.length - 1];
								if (a.keyCode == h) {
									t.focus(), d && d(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === s) &&
									(a.shiftKey
										? document.activeElement === D && (k.focus(), a.preventDefault())
										: document.activeElement === k && (D.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(z, S, l) {
				'use strict';
				l.d(S, { u: () => s });
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
			},
			'./components/src/utilities/componentArgs.ts'(z, S, l) {
				'use strict';
				l.d(S, { F: () => s });
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
			},
			'./components/src/utilities/storybook.tsx'(z, S, l) {
				'use strict';
				l.d(S, { Z: () => V });
				var s = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = l('../../node_modules/preact/hooks/dist/hooks.module.js');
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
			},
			'../../node_modules/memoizerific sync recursive'(z) {
				function S(l) {
					var s = new Error("Cannot find module '" + l + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(S.keys = () => []), (S.resolve = S), (S.id = '../../node_modules/memoizerific sync recursive'), (z.exports = S);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(z, S, l) {
				'use strict';
				l.d(S, { d: () => B });
				var s = l('../../node_modules/preact/compat/dist/compat.module.js');
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
						k;
					for (k = 0; k < x.length; k++) (D = x[k]), !(b.indexOf(D) >= 0) && (a[D] = d[D]);
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
							var k = a.left,
								w = a.width,
								C = (b - k) / w,
								W = (D - x) * C;
							return W + x;
						},
					};
				function B(d) {
					var b = d.interpolator,
						a = b === void 0 ? v : b,
						x = d.tickSize,
						D = x === void 0 ? 10 : x,
						k = d.values,
						w = d.min,
						C = d.max,
						W = d.ticks,
						N = d.steps,
						q = d.onChange,
						ee = d.onDrag,
						I = d.stepSize,
						E = s.default.useState(null),
						j = E[0],
						r = E[1],
						M = s.default.useState(),
						T = M[0],
						u = M[1],
						e = t({ activeHandleIndex: j, onChange: q, onDrag: ee, values: k, tempValues: T }),
						H = s.default.useRef(),
						A = s.default.useCallback(
							function (n) {
								var o = V(H.current);
								return a.getValueForClientX(n, o, w, C);
							},
							[a, C, w]
						),
						U = s.default.useCallback(
							function (n, o) {
								if (N) {
									var p = N.indexOf(n),
										f = p + o;
									return f >= 0 && f < N.length ? N[f] : n;
								} else {
									var m = n + I * o;
									return m >= w && m <= C ? m : n;
								}
							},
							[C, w, I, N]
						),
						Z = s.default.useCallback(
							function (n) {
								var o = w,
									p = C;
								if (N)
									N.forEach(function (f) {
										f <= n && f > o && (o = f), f >= n && f < p && (p = f);
									});
								else {
									for (; o < n && o + I < n; ) o += I;
									p = Math.min(o + I, C);
								}
								return n - o < p - n ? o : p;
							},
							[C, w, I, N]
						),
						X = s.default.useCallback(
							function (n) {
								var o = e(),
									p = o.activeHandleIndex,
									f = o.onDrag,
									m = n.type === 'touchmove' ? n.changedTouches[0].clientX : n.clientX,
									g = A(m),
									L = Z(g),
									c = [].concat(k.slice(0, p), [L], k.slice(p + 1));
								f ? f(c) : u(c);
							},
							[e, A, Z, k]
						),
						G = s.default.useCallback(
							function (n, o) {
								var p = e(),
									f = p.values,
									m = p.onChange,
									g = m === void 0 ? function () {} : m;
								if (n.keyCode === 37 || n.keyCode === 39) {
									r(o);
									var L = n.keyCode === 37 ? -1 : 1,
										c = U(f[o], L),
										i = [].concat(f.slice(0, o), [c], f.slice(o + 1)),
										F = _(i);
									g(F);
								}
							},
							[e, U]
						),
						J = s.default.useCallback(
							function (n, o) {
								r(o);
								var p = function f(m) {
									var g = e(),
										L = g.tempValues,
										c = g.values,
										i = g.onChange,
										F = i === void 0 ? function () {} : i,
										P = g.onDrag,
										R = P === void 0 ? function () {} : P;
									document.removeEventListener('mousemove', X),
										document.removeEventListener('touchmove', X),
										document.removeEventListener('mouseup', f),
										document.removeEventListener('touchend', f);
									var $ = _(L || c);
									F($), R($), r(null), u();
								};
								document.addEventListener('mousemove', X),
									document.addEventListener('touchmove', X),
									document.addEventListener('mouseup', p),
									document.addEventListener('touchend', p);
							},
							[e, X]
						),
						Y = s.default.useCallback(
							function (n) {
								return a.getPercentageForValue(n, w, C);
							},
							[a, C, w]
						),
						K = s.default.useMemo(
							function () {
								var n = W || N;
								if (!n) {
									for (n = [w]; n[n.length - 1] < C - D; ) n.push(n[n.length - 1] + D);
									n.push(C);
								}
								return n.map(function (o, p) {
									return {
										value: o,
										getTickProps: function (m) {
											var g = m === void 0 ? {} : m,
												L = g.key,
												c = L === void 0 ? p : L,
												i = g.style,
												F = i === void 0 ? {} : i,
												P = y(g, ['key', 'style']);
											return h({ key: c, style: h({ position: 'absolute', width: 0, left: Y(o) + '%', transform: 'translateX(-50%)' }, F) }, P);
										},
									};
								});
							},
							[W, Y, C, w, N, D]
						),
						Q = s.default.useMemo(
							function () {
								var n = _(T || k);
								return [].concat(n, [C]).map(function (o, p) {
									return {
										value: o,
										getSegmentProps: function (m) {
											var g = m === void 0 ? {} : m,
												L = g.key,
												c = L === void 0 ? p : L,
												i = g.style,
												F = i === void 0 ? {} : i,
												P = y(g, ['key', 'style']),
												R = Y(n[p - 1] ? n[p - 1] : w),
												$ = Y(o) - R;
											return h({ key: c, style: h({ position: 'absolute', left: R + '%', width: $ + '%' }, F) }, P);
										},
									};
								});
							},
							[Y, C, w, T, k]
						),
						te = s.default.useMemo(
							function () {
								return (T || k).map(function (n, o) {
									return {
										value: n,
										active: o === j,
										getHandleProps: function (f) {
											var m = f === void 0 ? {} : f,
												g = m.key,
												L = g === void 0 ? o : g,
												c = m.ref,
												i = m.innerRef,
												F = m.onKeyDown,
												P = m.onMouseDown,
												R = m.onTouchStart,
												$ = m.style,
												re = $ === void 0 ? {} : $,
												ne = y(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return h(
												{
													key: L,
													onKeyDown: function (O) {
														O.persist(), G(O, o), F && F(O);
													},
													onMouseDown: function (O) {
														O.persist(), J(O, o), P && P(O);
													},
													onTouchStart: function (O) {
														O.persist(), J(O, o), R && R(O);
													},
													role: 'slider',
													'aria-valuemin': w,
													'aria-valuemax': C,
													'aria-valuenow': n,
													style: h(
														{ position: 'absolute', top: '50%', left: Y(n) + '%', zIndex: o === j ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												ne
											);
										},
									};
								});
							},
							[j, Y, G, J, w, C, T, k]
						),
						ae = function (o) {
							var p = o === void 0 ? {} : o,
								f = p.style,
								m = f === void 0 ? {} : f,
								g = p.ref,
								L = y(p, ['style', 'ref']);
							return h(
								{
									ref: function (i) {
										(H.current = i), g && (typeof g == 'function' ? g(i) : (g.current = i));
									},
									style: h({ position: 'relative', userSelect: 'none' }, m),
								},
								L
							);
						};
					return { activeHandleIndex: j, getTrackProps: ae, ticks: K, segments: Q, handles: te };
				}
			},
		},
	]);
})();
