(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5019],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx'(I, k, l) {
				'use strict';
				l.r(k), l.d(k, { Price: () => d, __namedExportsOrder: () => h, default: () => X });
				var n = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = l('../../node_modules/@storybook/blocks/dist/index.mjs'),
					y = l('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					M = l('./components/src/utilities/storybook.tsx'),
					_ = l('./components/src/utilities/componentArgs.ts');
				const e = `# Facet Slider

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
					b = {
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
					X = {
						title: 'Molecules/FacetSlider',
						component: y.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(g.oz, { options: { overrides: { code: M.Z } }, children: e }), (0, n.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [(t) => (0, n.Y)('div', { style: { maxWidth: '300px' }, children: (0, n.Y)(t, {}) })],
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
					d = (t) => (0, n.Y)(y.l, { ...t, facet: b });
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
				const h = ['Price'];
			},
			'./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'(I, k, l) {
				'use strict';
				l.d(k, { l: () => G });
				var n = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = l('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = l('../../node_modules/mobx-react-lite/es/index.js'),
					M = l('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = l('../../node_modules/classnames/index.js'),
					e = l.n(_),
					b = l('../../node_modules/react-ranger/dist/react-ranger.mjs'),
					X = l('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = l('./components/src/providers/snap.tsx'),
					h = l('./components/src/providers/treePath.tsx'),
					t = l('./components/src/providers/cache.tsx'),
					x = l('./components/src/utilities/mergeProps.ts'),
					E = l('./components/src/utilities/mergeStyles.ts');
				function S(T, $) {
					for (var r = []; $ > 0; r[--$] = T);
					return r.join('');
				}
				function w(...T) {
					for (var $ = 0, r, F = T[$++], R = [], i, j, a, V; F; ) {
						if ((i = /^[^\x25]+/.exec(F))) R.push(i[0]);
						else if ((i = /^\x25{2}/.exec(F))) R.push('%');
						else if ((i = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(F))) {
							if ((r = T[i[1] || $++]) == null || r == null) throw 'Too few arguments.';
							if (/[^s]/.test(i[7]) && typeof r != 'number') throw 'Expecting number but found ' + typeof r;
							switch (i[7]) {
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
									r = i[6] ? r.toExponential(i[6]) : r.toExponential();
									break;
								case 'f':
									r = i[6] ? parseFloat(r).toFixed(i[6]) : parseFloat(r);
									break;
								case 'o':
									r = r.toString(8);
									break;
								case 's':
									r = (r = String(r)) && i[6] ? r.substring(0, i[6]) : r;
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
							(r = /[def]/.test(i[7]) && i[2] && r > 0 ? '+' + r : r),
								(a = i[3] ? (i[3] == '0' ? '0' : i[3].charAt(1)) : ' '),
								(V = i[5] - String(r).length),
								(j = i[5] ? S(a, V) : ''),
								R.push(i[4] ? r + j : j + r);
						} else throw 'Huh ?!';
						F = F.substring(i[0].length);
					}
					return R.join('');
				}
				var C = l('./components/src/hooks/useComponent.tsx'),
					W = l('./components/src/hooks/useLang.tsx'),
					A = l('./components/src/hooks/useA11y.tsx'),
					ae = l('../../node_modules/deepmerge/dist/cjs.js'),
					ne = l.n(ae);
				const K = ({
						railColor: T,
						trackColor: $,
						handleColor: r,
						valueTextColor: F,
						handleDraggingColor: R,
						showTicks: i,
						stickyHandleLabel: j,
						tickTextColor: a,
						theme: V,
					}) =>
						(0, M.AH)({
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5px',
							marginBottom: i && j ? '20px' : i || j ? '10px' : '5px',
							'& .ss__facet-slider__slider': {
								position: 'relative',
								display: 'inline-block',
								height: '8px',
								width: 'calc(100% - 2rem)',
								margin: j ? '1rem' : '0 1rem',
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
									color: a,
									top: '100%',
									transform: 'translate(-50%, 1.2rem)',
									whiteSpace: 'nowrap',
								},
							},
							'& .ss__facet-slider__rail': { background: T || V?.variables?.colors?.primary || '#333', height: '100%' },
							'& .ss__facet-slider__segment': { background: $ || V?.variables?.colors?.secondary || '#ccc', height: '100%' },
							'& .ss__facet-slider__handles': {
								textAlign: 'center',
								'& button': {
									'& .ss__facet-slider__handle': {
										background: r || V?.variables?.colors?.primary || '#333',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '1.6rem',
										height: '1.6rem',
										borderRadius: '100%',
										fontSize: '0.7rem',
										whiteSpace: 'nowrap',
										color: F || 'initial',
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
											background: R || r || V?.variables?.colors?.primary || '#000',
											'& label.ss__facet-slider__handle__label': { background: '#fff', padding: '0 5px' },
										},
										'& label.ss__facet-slider__handle__label': {
											display: 'inline-block',
											marginTop: i && !j ? '35px' : '20px',
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
								marginTop: i && !j ? '40px' : '20px',
								color: F,
								'& .ss__facet-slider__label--0': { '&:after': { content: '"-"', padding: '5px' } },
							},
						}),
					G = (0, y.PA)((T) => {
						const $ = (0, X.u)(),
							r = (0, d.uk)(),
							F = (0, h.LU)(),
							R = { tickSize: T.facet?.step ? T.facet?.step * 10 : 20, treePath: F },
							i = (0, x.v6)('facetSlider', $, R, T),
							{
								showTicks: j,
								facet: a,
								stickyHandleLabel: V,
								separateHandles: Q,
								onChange: Y,
								onDrag: Z,
								className: J,
								internalClassName: z,
								customComponent: q,
							} = i;
						if (q) {
							const c = (0, C.x)(r?.templates?.library.import.component.facetSlider || {}, q);
							if (c) return (0, n.Y)(c, { ...i });
						}
						let { tickSize: B } = i;
						isNaN(Number(B)) || Number(B) <= 0 ? (B = T.facet?.step ? T.facet?.step * 10 : 20) : (B = Number(B));
						const [ee, re] = (0, g.J0)([a.active?.low, a.active?.high]),
							[s, o] = (0, g.J0)([a.active?.low, a.active?.high]),
							f = (c) => {
								if (!Q || !a.step) return c;
								const [u, D] = c,
									N = a.range?.low,
									O = a.range?.high,
									U = a.step;
								return u === D ? (D + U <= O ? [u, D + U] : u - U >= N ? [u - U, D] : c) : c;
							};
						(((a.active?.low || a.active?.low === 0) && a.active?.high && ee[0] != a.active?.low) || ee[1] != a.active?.high) &&
							(o([a.active?.low, a.active?.high]), re([a.active?.low, a.active?.high]));
						const {
								getTrackProps: p,
								ticks: m,
								segments: v,
								handles: L,
							} = (0, b.d)({
								values: s,
								onChange: (c) => {
									const u = f(c);
									o(u),
										Y && Y(u),
										a?.services?.urlManager &&
											(u[0] == a.range.low && u[1] == a.range.high
												? a.services.urlManager.remove('page').remove(`filter.${a.field}`).go()
												: a.services.urlManager.remove('page').set(`filter.${a.field}`, { low: u[0], high: u[1] }).go()),
										Y && Y(c);
								},
								onDrag: (c) => {
									const u = f(c);
									o(u), Z && Z(u);
								},
								min: a.range?.low,
								max: a.range?.high,
								stepSize: a.step,
								tickSize: B,
							}),
							P = (0, E.Z)(i, K);
						return a.range && a.active && a.step
							? (0, n.Y)(t._, {
									children: (0, n.FD)('div', {
										className: e()('ss__facet-slider', J, z),
										...p(),
										...P,
										children: [
											(0, n.FD)('div', {
												className: 'ss__facet-slider__slider',
												children: [
													j &&
														m.map(({ value: c, getTickProps: u }) =>
															(0, n.Y)('div', {
																className: 'ss__facet-slider__tick',
																...u(),
																children: (0, n.Y)('div', { className: 'ss__facet-slider__tick__label', children: c }),
															})
														),
													v.map(({ getSegmentProps: c }, u) =>
														(0, n.Y)('div', { className: `${u === 1 ? 'ss__facet-slider__rail' : 'ss__facet-slider__segment'}`, ...c() })
													),
													(0, n.Y)('div', {
														className: 'ss__facet-slider__handles',
														children: L.map(({ value: c, active: u, getHandleProps: D }, N) => {
															const O = {
																	sliderHandle: {
																		attributes: {
																			'aria-label': `${a.label} button, current value ${c}, ${a.range?.low ? `min value ${a.range?.low},` : ''} ${
																				a.range?.high ? `max value ${a.range?.high}` : ''
																			}`,
																		},
																	},
																},
																U = ne()(O, i.lang || {}),
																se = (0, W.u)(U, { facet: a, value: c });
															return (0, n.Y)('button', {
																type: 'button',
																...D({ style: { appearance: 'none', border: 'none', background: 'transparent', outline: 'none' } }),
																...se.sliderHandle?.all,
																ref: (te) => (0, A.iy)(te),
																children: (0, n.Y)('div', {
																	className: e()('ss__facet-slider__handle', { 'ss__facet-slider__handle--active': u }),
																	children:
																		V &&
																		(0, n.Y)('label', {
																			className: e()(
																				'ss__facet-slider__handle__label',
																				'ss__facet-slider__handle__label--sticky',
																				`ss__facet-slider__handle__label--${N}`,
																				{ 'ss__facet-slider__handle__label--pinleft': N == 0 && c == a?.range?.low },
																				{ 'ss__facet-slider__handle__label--pinright': N == 1 && c == a?.range?.high }
																			),
																			children: w(a.formatValue, c),
																		}),
																}),
															});
														}),
													}),
												],
											}),
											!V &&
												(0, n.Y)('div', {
													className: 'ss__facet-slider__labels',
													children: L.map(({ value: c }, u) =>
														(0, n.Y)('label', {
															className: e()('ss__facet-slider__label', `ss__facet-slider__label--${u}`),
															children: w(a.formatValue, c),
														})
													),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(I, k, l) {
				'use strict';
				l.d(k, { DH: () => M, aZ: () => y, iy: () => _ });
				const n = 9,
					g = 27,
					y = 'ss-a11y',
					M =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function _(e, b, X, d) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = h),
							(t.innerHTML = `[${y}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					e &&
						!e.attributes?.[y] &&
						(e.setAttribute(y, !0),
						e.setAttribute('tabIndex', `${b || 0}`),
						e.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && e.click();
						}),
						X &&
							e.addEventListener('keydown', function (t) {
								const x = e.querySelectorAll(M),
									E = x[0],
									S = x[x.length - 1];
								if (t.keyCode == g) {
									e.focus(), d && d(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === n) &&
									(t.shiftKey
										? document.activeElement === E && (S.focus(), t.preventDefault())
										: document.activeElement === S && (E.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(I, k, l) {
				'use strict';
				l.d(k, { u: () => n });
				const n = (g, y) => {
					const M = {};
					return (
						Object.keys(g).forEach((_) => {
							const e = g && g[_],
								b = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (b.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: e.value(y) } })
										: (b.value = { 'ss-lang': _, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((b.attributes = { 'ss-lang': _ }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (b.attributes['aria-label'] = e.attributes['aria-label'](y))
											: (b.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (b.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](y))
											: (b.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (b.attributes.title = e.attributes.title(y))
											: (b.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (b.attributes.alt = e.attributes.alt(y)) : (b.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (b.attributes.placeholder = e.attributes.placeholder(y))
											: (b.attributes.placeholder = e.attributes.placeholder))),
								(b.all = { ...b.value, ...b.attributes, 'ss-lang': _ })),
								(M[_] = b);
						}),
						M
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(I, k, l) {
				'use strict';
				l.d(k, { F: () => n });
				const n = {
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
			'./components/src/utilities/storybook.tsx'(I, k, l) {
				'use strict';
				l.d(k, { Z: () => M });
				var n = l('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = l('../../node_modules/preact/hooks/dist/hooks.module.js');
				const y = 'prism-block',
					M = (_) => {
						const e = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								e.current && _.className?.includes('lang-') && !_.className?.includes(y) && window?.Prism?.highlightElement(e.current);
							}, [_.className, _.children, e]),
							(0, n.Y)('code', { ..._, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function k(l) {
					var n = new Error("Cannot find module '" + l + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(k.keys = () => []), (k.resolve = k), (k.id = '../../node_modules/memoizerific sync recursive'), (I.exports = k);
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(I, k, l) {
				'use strict';
				l.d(k, { d: () => X });
				var n = l('../../node_modules/preact/compat/dist/compat.module.js');
				function g() {
					return (
						(g =
							Object.assign ||
							function (d) {
								for (var h = 1; h < arguments.length; h++) {
									var t = arguments[h];
									for (var x in t) Object.prototype.hasOwnProperty.call(t, x) && (d[x] = t[x]);
								}
								return d;
							}),
						g.apply(this, arguments)
					);
				}
				function y(d, h) {
					if (d == null) return {};
					var t = {},
						x = Object.keys(d),
						E,
						S;
					for (S = 0; S < x.length; S++) (E = x[S]), !(h.indexOf(E) >= 0) && (t[E] = d[E]);
					return t;
				}
				var M = function (h) {
						var t = h.getBoundingClientRect();
						return { left: Math.ceil(t.left), width: Math.ceil(t.width) };
					},
					_ = function (h) {
						return [].concat(h).sort(function (t, x) {
							return Number(t) - Number(x);
						});
					},
					e = function (h) {
						var t = n.default.useRef(h);
						return (
							(t.current = h),
							n.default.useCallback(function () {
								return t.current;
							}, [])
						);
					},
					b = {
						getPercentageForValue: function (h, t, x) {
							return Math.max(0, Math.min(100, ((h - t) / (x - t)) * 100));
						},
						getValueForClientX: function (h, t, x, E) {
							var S = t.left,
								w = t.width,
								C = (h - S) / w,
								W = (E - x) * C;
							return W + x;
						},
					};
				function X(d) {
					var h = d.interpolator,
						t = h === void 0 ? b : h,
						x = d.tickSize,
						E = x === void 0 ? 10 : x,
						S = d.values,
						w = d.min,
						C = d.max,
						W = d.ticks,
						A = d.steps,
						ae = d.onChange,
						ne = d.onDrag,
						K = d.stepSize,
						G = n.default.useState(null),
						T = G[0],
						$ = G[1],
						r = n.default.useState(),
						F = r[0],
						R = r[1],
						i = e({ activeHandleIndex: T, onChange: ae, onDrag: ne, values: S, tempValues: F }),
						j = n.default.useRef(),
						a = n.default.useCallback(
							function (s) {
								var o = M(j.current);
								return t.getValueForClientX(s, o, w, C);
							},
							[t, C, w]
						),
						V = n.default.useCallback(
							function (s, o) {
								if (A) {
									var f = A.indexOf(s),
										p = f + o;
									return p >= 0 && p < A.length ? A[p] : s;
								} else {
									var m = s + K * o;
									return m >= w && m <= C ? m : s;
								}
							},
							[C, w, K, A]
						),
						Q = n.default.useCallback(
							function (s) {
								var o = w,
									f = C;
								if (A)
									A.forEach(function (p) {
										p <= s && p > o && (o = p), p >= s && p < f && (f = p);
									});
								else {
									for (; o < s && o + K < s; ) o += K;
									f = Math.min(o + K, C);
								}
								return s - o < f - s ? o : f;
							},
							[C, w, K, A]
						),
						Y = n.default.useCallback(
							function (s) {
								var o = i(),
									f = o.activeHandleIndex,
									p = o.onDrag,
									m = s.type === 'touchmove' ? s.changedTouches[0].clientX : s.clientX,
									v = a(m),
									L = Q(v),
									P = [].concat(S.slice(0, f), [L], S.slice(f + 1));
								p ? p(P) : R(P);
							},
							[i, a, Q, S]
						),
						Z = n.default.useCallback(
							function (s, o) {
								var f = i(),
									p = f.values,
									m = f.onChange,
									v = m === void 0 ? function () {} : m;
								if (s.keyCode === 37 || s.keyCode === 39) {
									$(o);
									var L = s.keyCode === 37 ? -1 : 1,
										P = V(p[o], L),
										c = [].concat(p.slice(0, o), [P], p.slice(o + 1)),
										u = _(c);
									v(u);
								}
							},
							[i, V]
						),
						J = n.default.useCallback(
							function (s, o) {
								$(o);
								var f = function p(m) {
									var v = i(),
										L = v.tempValues,
										P = v.values,
										c = v.onChange,
										u = c === void 0 ? function () {} : c,
										D = v.onDrag,
										N = D === void 0 ? function () {} : D;
									document.removeEventListener('mousemove', Y),
										document.removeEventListener('touchmove', Y),
										document.removeEventListener('mouseup', p),
										document.removeEventListener('touchend', p);
									var O = _(L || P);
									u(O), N(O), $(null), R();
								};
								document.addEventListener('mousemove', Y),
									document.addEventListener('touchmove', Y),
									document.addEventListener('mouseup', f),
									document.addEventListener('touchend', f);
							},
							[i, Y]
						),
						z = n.default.useCallback(
							function (s) {
								return t.getPercentageForValue(s, w, C);
							},
							[t, C, w]
						),
						q = n.default.useMemo(
							function () {
								var s = W || A;
								if (!s) {
									for (s = [w]; s[s.length - 1] < C - E; ) s.push(s[s.length - 1] + E);
									s.push(C);
								}
								return s.map(function (o, f) {
									return {
										value: o,
										getTickProps: function (m) {
											var v = m === void 0 ? {} : m,
												L = v.key,
												P = L === void 0 ? f : L,
												c = v.style,
												u = c === void 0 ? {} : c,
												D = y(v, ['key', 'style']);
											return g({ key: P, style: g({ position: 'absolute', width: 0, left: z(o) + '%', transform: 'translateX(-50%)' }, u) }, D);
										},
									};
								});
							},
							[W, z, C, w, A, E]
						),
						B = n.default.useMemo(
							function () {
								var s = _(F || S);
								return [].concat(s, [C]).map(function (o, f) {
									return {
										value: o,
										getSegmentProps: function (m) {
											var v = m === void 0 ? {} : m,
												L = v.key,
												P = L === void 0 ? f : L,
												c = v.style,
												u = c === void 0 ? {} : c,
												D = y(v, ['key', 'style']),
												N = z(s[f - 1] ? s[f - 1] : w),
												O = z(o) - N;
											return g({ key: P, style: g({ position: 'absolute', left: N + '%', width: O + '%' }, u) }, D);
										},
									};
								});
							},
							[z, C, w, F, S]
						),
						ee = n.default.useMemo(
							function () {
								return (F || S).map(function (s, o) {
									return {
										value: s,
										active: o === T,
										getHandleProps: function (p) {
											var m = p === void 0 ? {} : p,
												v = m.key,
												L = v === void 0 ? o : v,
												P = m.ref,
												c = m.innerRef,
												u = m.onKeyDown,
												D = m.onMouseDown,
												N = m.onTouchStart,
												O = m.style,
												U = O === void 0 ? {} : O,
												se = y(m, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return g(
												{
													key: L,
													onKeyDown: function (H) {
														H.persist(), Z(H, o), u && u(H);
													},
													onMouseDown: function (H) {
														H.persist(), J(H, o), D && D(H);
													},
													onTouchStart: function (H) {
														H.persist(), J(H, o), N && N(H);
													},
													role: 'slider',
													'aria-valuemin': w,
													'aria-valuemax': C,
													'aria-valuenow': s,
													style: g(
														{ position: 'absolute', top: '50%', left: z(s) + '%', zIndex: o === T ? '1' : '0', transform: 'translate(-50%, -50%)' },
														U
													),
												},
												se
											);
										},
									};
								});
							},
							[T, z, Z, J, w, C, F, S]
						),
						re = function (o) {
							var f = o === void 0 ? {} : o,
								p = f.style,
								m = p === void 0 ? {} : p,
								v = f.ref,
								L = y(f, ['style', 'ref']);
							return g(
								{
									ref: function (c) {
										(j.current = c), v && (typeof v == 'function' ? v(c) : (v.current = c));
									},
									style: g({ position: 'relative', userSelect: 'none' }, m),
								},
								L
							);
						};
					return { activeHandleIndex: T, getTrackProps: re, ticks: q, segments: B, handles: ee };
				}
			},
		},
	]);
})();
