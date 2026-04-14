(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8422],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(p, s, e) {
				'use strict';
				e.d(s, { Z: () => o });
				function o(r, l) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const a = n(r, t.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(t.decimalPlaces, '0'));
					let m = a.join(t.decimalSeparator);
					return t.symbolAfter ? (m = m + t.symbol) : (m = t.symbol + m), m;
				}
				function n(r, l) {
					const t = r.toString(),
						a = t.indexOf('.'),
						m = a == -1 ? t.length : 1 + a + (l || -1);
					return t.substr(0, m);
				}
			},
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.stories.tsx'(p, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => c, Length: () => d, Temperature: () => u, __namedExportsOrder: () => b, default: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# Formatted Number\n\nUtilizes `formatNumber` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```jsx\nimport { FormattedNumber } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the number to be formatted. \n\n```jsx\n<FormattedNumber value={99.99} />\n```\nFormatted output from above properties: `99.990`\n\n### symbol\nThe `symbol` prop specifies an optional symbol to be included. Typically used when adding a unit of measure to a number.\n\n```jsx\n<FormattedNumber value={99} symbol={' \xB0C'} /> \n```\nFormatted output from above properties: `99.000 \xB0C`\n\n### decimalPlaces\nThe `decimalPlaces` prop specifies how many decimal places to format.\n\n```jsx\n<FormattedNumber value={99} decimalPlaces={2} /> \n```\nFormatted output from above properties: `99.00`\n\n### padDecimalPlaces\nThe `padDecimalPlaces` prop pads excess decimal places with zeros.\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={true} /> \n```\nFormatted output from above properties: `99.9900`\n\n```jsx\n<FormattedNumber value={99.99} decimalPlaces={4} padDecimalPlaces={false} /> \n```\nFormatted output from above properties: `99.99`\n\n### thousandsSeparator\nThe `thousandsSeparator` prop specifies the thousands separator character.\n\n```jsx\n<FormattedNumber value={10999.99} thousandsSeparator={','} /> \n```\nFormatted output from above properties: `10,999.990`\n\n### decimalSeparator\nThe `decimalSeparator` prop specifies the decimal separator character.\n\n```jsx\n<FormattedNumber value={10999.99} decimalSeparator={','} decimalPlaces={2} /> \n```\nFormatted output from above properties: `10999,99`\n\n### symbolAfter\nThe `symbolAfter` prop specifies if the provided `symbol` prop should be placed after the formatted `value`.\n\n```jsx\n<FormattedNumber value={999.999} symbol={'km'} symbolAfter={true} /> \n```\nFormatted output from above properties: `999.999km`\n",
					m = {
						title: 'Atoms/FormattedNumber',
						component: r.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(n.oz, { options: { overrides: { code: l.Z } }, children: a }), (0, o.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						argTypes: {
							value: {
								description: 'Numeric value to be formatted',
								type: { required: !0 },
								table: { type: { summary: 'number' }, category: 'Templates Legal' },
								control: { type: 'number' },
							},
							symbol: {
								defaultValue: '',
								description: 'Unit symbol',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							symbolAfter: {
								defaultValue: !0,
								description: 'Place unit symbol after the value',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							decimalPlaces: {
								defaultValue: 3,
								description: 'Number of decimal places',
								table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: 3 } },
								control: { type: 'number' },
							},
							padDecimalPlaces: {
								defaultValue: !0,
								description: 'Pad decimal places with zeros',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							thousandsSeparator: {
								defaultValue: '',
								description: 'Character used to separate thousands',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							decimalSeparator: {
								defaultValue: '.',
								description: 'Character used to separate decimal values',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '.' } },
								control: { type: 'text' },
							},
							raw: {
								description: 'Returns raw value without wrapping DOM node',
								defaultValue: !1,
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...t.F,
						},
					},
					c = (i) => (0, o.Y)(r.G, { ...i });
				c.args = { value: 1099.99 };
				const u = (i) => (0, o.Y)(r.G, { ...i });
				u.args = { value: 100, symbol: ' \xB0C', decimalPlaces: 2 };
				const d = (i) => (0, o.Y)(r.G, { ...i });
				(d.args = { value: 100, symbol: ' mm', decimalPlaces: 2 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...c.parameters?.docs?.source },
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...u.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: FormattedNumberProps) => <FormattedNumber {...args} />', ...d.parameters?.docs?.source },
						},
					});
				const b = ['Default', 'Temperature', 'Length'];
			},
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'(p, s, e) {
				'use strict';
				e.d(s, { G: () => P });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'),
					l = e('../../node_modules/classnames/index.js'),
					t = e.n(l),
					a = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/hooks/useComponent.tsx');
				const g = () => (0, n.AH)({});
				function P(v) {
					const E = (0, m.u)(),
						N = (0, c.uk)(),
						x = {
							symbol: '',
							decimalPlaces: 3,
							padDecimalPlaces: !0,
							thousandsSeparator: '',
							decimalSeparator: '.',
							symbolAfter: !0,
							treePath: (0, u.LU)(),
						},
						y = (0, d.v6)('formattedNumber', E, x, v),
						{
							value: D,
							symbol: F,
							decimalPlaces: T,
							padDecimalPlaces: O,
							thousandsSeparator: j,
							decimalSeparator: A,
							symbolAfter: C,
							className: M,
							internalClassName: L,
							raw: S,
							customComponent: f,
						} = y;
					if (f) {
						const _ = (0, i.x)(N?.templates?.library.import.component.formattedNumber || {}, f);
						if (_) return (0, o.Y)(_, { ...y });
					}
					const h = r.Z(D, { symbol: F, decimalPlaces: T, padDecimalPlaces: O, thousandsSeparator: j, decimalSeparator: A, symbolAfter: C }),
						U = (0, b.Z)(y, g);
					return S
						? (0, o.Y)(o.FK, { children: h })
						: (0, o.Y)(a._, { children: (0, o.Y)('span', { className: t()('ss__formatted-number', M, L), ...U, children: h }) });
				}
			},
			'./components/src/utilities/componentArgs.ts'(p, s, e) {
				'use strict';
				e.d(s, { F: () => o });
				const o = {
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
			'./components/src/utilities/storybook.tsx'(p, s, e) {
				'use strict';
				e.d(s, { Z: () => l });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					l = (t) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && t.className?.includes('lang-') && !t.className?.includes(r) && window?.Prism?.highlightElement(a.current);
							}, [t.className, t.children, a]),
							(0, o.Y)('code', { ...t, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function s(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (p.exports = s);
			},
		},
	]);
})();
