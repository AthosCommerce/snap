(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5019],
		{
			'./components/src/components/Molecules/FacetSlider/FacetSlider.stories.tsx'(u, s, o) {
				'use strict';
				o.r(s), o.d(s, { Price: () => d, __namedExportsOrder: () => p, default: () => f });
				var r = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = o('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					c = o('./components/src/utilities/storybook.tsx'),
					l = o('./components/src/utilities/componentArgs.ts');
				const e = `# Facet Slider

Renders a slider to be used with any slider facet. Built using <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannerlinsley/react-ranger">react-ranger</a>.

## Usage
\`\`\`jsx
import { FacetSlider } from '@athoscommerce/snap-preact/components';
\`\`\`

### facet
The required \`facet\` prop specifies a reference to a facet within the facets store array. The facet must be a range facet (\`display\` type of \`'slider'\`).

\`\`\`jsx
<FacetSlider facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} />
\`\`\`

### showTicks
The \`showTicks\` prop will render reference ticks below the slider track.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
/>
\`\`\`

### tickSize
The \`tickSize\` prop specifies the unit number between ticks. Must be used with \`showTicks\` prop.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickSize={20}
/>
\`\`\`

### tickTextColor
The \`tickTextColor\` prop specifies ticks text color. Must be used with \`showTicks\` prop.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	showTicks={true}
	tickTextColor={'#cccccc'}
/>
\`\`\`

### handleColor
The \`handleColor\` prop specifies the handle color.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleColor={'#0000ff'}
/>
\`\`\`

### stickyHandleLabel
The \`stickyHandleLabel\` prop specifies if the handle value text should display above each handle.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	stickyHandleLabel={true}
/>
\`\`\`

### separateHandles
The \`separateHandles\` prop prevents the minimum and maximum slider values from being equal. When enabled, if a user attempts to set both handles to the same value, they will be automatically separated by one step value. The component intelligently determines whether to adjust the min or max value based on the available range.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	separateHandles={true}
/>
\`\`\`

### handleDraggingColor
The \`handleDraggingColor\` prop specifies the handle color while dragging.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	handleDraggingColor={'0000ff'}
/>
\`\`\`

### valueTextColor
The \`valueTextColor\` prop specifies the value text color.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	valueTextColor={'#222222'}
/>
\`\`\`

### trackColor
The \`trackColor\` prop specifies the slider track (background) color.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	trackColor={'#cccccc'}
/>
\`\`\`

### railColor
The \`railColor\` prop specifies the slider rail (foreground) color.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	railColor={'#0000ff'}
/>
\`\`\`

### Events

#### onChange
The \`onChange\` prop allows for a custom callback function for when a slider handle has been changed. This callback is invoked **before** the URL manager updates occur, allowing for mutation of values or other operations prior to API request.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onChange={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`

#### onDrag
The \`onDrag\` prop allows for a custom callback function for when a slider handle is being dragged.

\`\`\`jsx
<FacetSlider 
	facet={controller.store.facets.filter(facet => facet.display === 'slider').pop()} 
	onDrag={(values)=>{ console.log(\`low: \${values[0]} high: \${values[1]}\`) }}
/>
\`\`\`
`,
					t = {
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
					f = {
						title: 'Molecules/FacetSlider',
						component: n.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(i.oz, { options: { overrides: { code: c.Z } }, children: e }), (0, r.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(a) => (0, r.Y)('div', { style: { maxWidth: '300px' }, children: (0, r.Y)(a, {}) })],
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
							...l.F,
						},
					},
					d = (a) => (0, r.Y)(n.l, { ...a, facet: t });
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
				const p = ['Price'];
			},
			'./components/src/hooks/useA11y.tsx'(u, s, o) {
				'use strict';
				o.d(s, { DH: () => c, aZ: () => n, iy: () => l });
				const r = 9,
					i = 27,
					n = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(e, t, f, d) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = p),
							(a.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					e &&
						!e.attributes?.[n] &&
						(e.setAttribute(n, !0),
						e.setAttribute('tabIndex', `${t || 0}`),
						e.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && e.click();
						}),
						f &&
							e.addEventListener('keydown', function (a) {
								const m = e.querySelectorAll(c),
									y = m[0],
									b = m[m.length - 1];
								if (a.keyCode == i) {
									e.focus(), d && d(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === r) &&
									(a.shiftKey
										? document.activeElement === y && (b.focus(), a.preventDefault())
										: document.activeElement === b && (y.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(u, s, o) {
				'use strict';
				o.d(s, { u: () => r });
				const r = (i, n) => {
					const c = {};
					return (
						Object.keys(i).forEach((l) => {
							const e = i && i[l],
								t = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (t.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (t.value = { 'ss-lang': l, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((t.attributes = { 'ss-lang': l }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (t.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (t.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (t.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (t.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (t.attributes.title = e.attributes.title(n))
											: (t.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (t.attributes.alt = e.attributes.alt(n)) : (t.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (t.attributes.placeholder = e.attributes.placeholder(n))
											: (t.attributes.placeholder = e.attributes.placeholder))),
								(t.all = { ...t.value, ...t.attributes, 'ss-lang': l })),
								(c[l] = t);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(u, s, o) {
				'use strict';
				o.d(s, { F: () => r });
				const r = {
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
			'./components/src/utilities/storybook.tsx'(u, s, o) {
				'use strict';
				o.d(s, { Z: () => c });
				var r = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					c = (l) => {
						const e = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								e.current && l.className?.includes('lang-') && !l.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [l.className, l.children, e]),
							(0, r.Y)('code', { ...l, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function s(o) {
					var r = new Error("Cannot find module '" + o + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (u.exports = s);
			},
		},
	]);
})();
