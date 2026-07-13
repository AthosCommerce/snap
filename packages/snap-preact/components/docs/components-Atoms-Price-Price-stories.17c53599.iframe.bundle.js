(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[774],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(d, o, e) {
				'use strict';
				e.d(o, { G: () => l });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(a, n) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...n };
					return (0, t.Z)(a, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(d, o, e) {
				'use strict';
				e.d(o, { Z: () => t });
				function t(a, n) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...n };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const r = l(a, s.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(s.decimalPlaces, '0'));
					let c = r.join(s.decimalSeparator);
					return s.symbolAfter ? (c = c + s.symbol) : (c = s.symbol + c), c;
				}
				function l(a, n) {
					const s = a.toString(),
						r = s.indexOf('.'),
						c = r == -1 ? s.length : 1 + r + (n || -1);
					return s.substr(0, c);
				}
			},
			'./components/src/components/Atoms/Price/Price.stories.tsx'(d, o, e) {
				'use strict';
				e.r(o), e.d(o, { CustomCurrency: () => u, Default: () => m, __namedExportsOrder: () => h, default: () => c, lineThrough: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Price/Price.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts');
				const r =
						"# Price\n\nUtilizes `currency` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```tsx\nimport { Price } from '@athoscommerce/snap-preact/components';\n```\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional prop:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```tsx\n<Price value={1099.99} symbol=' \u20AC' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 \u20AC`~~\n",
					c = {
						title: 'Atoms/Price',
						component: a.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, t.Y)(l.uY, { story: l.h1 })],
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
								description: 'Currency symbol',
								defaultValue: '$',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '$' } },
								control: { type: 'text' },
							},
							symbolAfter: {
								description: 'Place currency symbol after the value',
								defaultValue: !1,
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							decimalPlaces: {
								description: 'Number of decimal places',
								defaultValue: 2,
								table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: 2 } },
								control: { type: 'number' },
							},
							padDecimalPlaces: {
								description: 'Pad decimal places with zeros',
								defaultValue: !0,
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							thousandsSeparator: {
								description: 'Character used to separate thousands',
								defaultValue: ',',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: ',' } },
								control: { type: 'text' },
							},
							decimalSeparator: {
								description: 'Character used to separate decimal values',
								defaultValue: '.',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '.' } },
								control: { type: 'text' },
							},
							lineThrough: {
								description: 'Add line through styling',
								defaultValue: !1,
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							raw: {
								description: 'Returns raw value without wrapping DOM node',
								defaultValue: !1,
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...s.F,
						},
					},
					m = (p) => (0, t.Y)(a.g, { ...p });
				m.args = { value: 1099.99 };
				const i = (p) => (0, t.Y)(a.g, { ...p });
				i.args = { value: 1199.99, lineThrough: !0 };
				const u = (p) => (0, t.Y)(a.g, { ...p });
				(u.args = { value: 999.99, symbol: ' \u20AC', thousandsSeparator: '.', decimalSeparator: ',', symbolAfter: !0 }),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...m.parameters?.docs?.source } },
					}),
					(i.parameters = {
						...i.parameters,
						docs: { ...i.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...i.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: PriceProps) => <Price {...args} />', ...u.parameters?.docs?.source } },
					});
				const h = ['Default', 'lineThrough', 'CustomCurrency'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(d, o, e) {
				'use strict';
				e.d(o, { g: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					r = e.n(s),
					c = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = ({ theme: g }) =>
						(0, n.AH)({ color: g?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					D = (0, l.PA)((g) => {
						const x = (0, m.u)(),
							T = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, i.LU)(),
							},
							b = (0, u.v6)('price', x, T, g),
							{
								lineThrough: O,
								value: P,
								format: y,
								symbol: _,
								decimalPlaces: C,
								padDecimalPlaces: A,
								thousandsSeparator: M,
								decimalSeparator: j,
								symbolAfter: E,
								raw: L,
								className: S,
								internalClassName: N,
							} = b,
							{ overrideElement: U, shouldRenderDefault: V } = (0, p._)('price', b);
						if (!V) return U;
						let f;
						P && (f = y ? y(P) : a.G(P, { symbol: '', decimalPlaces: C, padDecimalPlaces: A, thousandsSeparator: M, decimalSeparator: j }));
						const K = (0, h.Z)(b, v);
						return f
							? L
								? (0, t.Y)(t.FK, { children: f })
								: (0, t.Y)(c._, {
										children: (0, t.FD)('span', {
											...K,
											className: r()('ss__price', { 'ss__price--strike': O }, S, N),
											children: [
												!y && _ && !E ? (0, t.Y)('span', { className: 'ss__price__symbol', children: _ }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: f }),
												!y && _ && E ? (0, t.Y)('span', { className: 'ss__price__symbol', children: _ }) : (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(d, o, e) {
				'use strict';
				e.d(o, { F: () => t });
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
			'./components/src/utilities/storybook.tsx'(d, o, e) {
				'use strict';
				e.d(o, { Z: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					n = (s) => {
						const r = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								r.current && s.className?.includes('lang-') && !s.className?.includes(a) && window?.Prism?.highlightElement(r.current);
							}, [s.className, s.children, r]),
							(0, t.Y)('code', { ...s, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function o(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (d.exports = o);
			},
		},
	]);
})();
