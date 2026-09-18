(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[774],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(d, s, e) {
				'use strict';
				e.d(s, { G: () => n });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(a, l) {
					const o = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(a, o);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(d, s, e) {
				'use strict';
				e.d(s, { Z: () => t });
				function t(a, l) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const r = n(a, o.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(o.decimalPlaces, '0'));
					let c = r.join(o.decimalSeparator);
					return o.symbolAfter ? (c = c + o.symbol) : (c = o.symbol + c), c;
				}
				function n(a, l) {
					const o = a.toString(),
						r = o.indexOf('.'),
						c = r == -1 ? o.length : 1 + r + (l || -1);
					return o.substr(0, c);
				}
			},
			'./components/src/components/Atoms/Price/Price.stories.tsx'(d, s, e) {
				'use strict';
				e.r(s), e.d(s, { CustomCurrency: () => u, Default: () => m, __namedExportsOrder: () => _, default: () => c, lineThrough: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Price/Price.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const r =
						"# Price\n\nUtilizes `currency` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```tsx\nimport { Price } from '@athoscommerce/snap-preact/components';\n```\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional props:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```tsx\n<Price value={1099.99} symbol=' \u20AC' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 \u20AC`~~\n\n### code\nThe `code` prop sets the ISO currency code rendered after the amount. In Snap Templates this is supplied automatically by the active currency locale, so it rarely needs to be set by hand.\n\n### showCode\nThe `showCode` prop renders the `code` after the amount, in addition to the symbol. It defaults to `false`, and the code and amount are separated by a non-breaking space so they never wrap apart.\n\n```tsx\n<Price value={1099.99} symbol='$' code='USD' showCode={true} />\n```\nFormatted output from above properties: `$1,099.99 USD`\n\nBoth props are ignored when a `format` function is supplied, since the function produces the entire string itself.\n",
					c = {
						title: 'Atoms/Price',
						component: a.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: l.Z } }, children: r }), (0, t.Y)(n.uY, { story: n.h1 })],
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
							code: {
								description: 'ISO currency code rendered after the amount - supplied by the active currency locale in Snap Templates',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							showCode: {
								description: 'Render the currency code after the amount, in addition to the symbol',
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
							...o.F,
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
				const _ = ['Default', 'lineThrough', 'CustomCurrency'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(d, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					r = e.n(o),
					c = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const D = ({ theme: b }) =>
						(0, l.AH)({ color: b?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					T = (0, n.PA)((b) => {
						const x = (0, m.u)(),
							O = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, i.LU)(),
							},
							g = (0, u.v6)('price', x, O, b),
							{
								lineThrough: C,
								value: P,
								format: y,
								symbol: h,
								decimalPlaces: A,
								padDecimalPlaces: M,
								thousandsSeparator: S,
								decimalSeparator: L,
								symbolAfter: E,
								code: v,
								showCode: j,
								raw: N,
								className: U,
								internalClassName: V,
							} = g,
							{ overrideElement: I, shouldRenderDefault: K } = (0, p._)('price', g);
						if (!K) return I;
						let f;
						P && (f = y ? y(P) : a.G(P, { symbol: '', decimalPlaces: A, padDecimalPlaces: M, thousandsSeparator: S, decimalSeparator: L }));
						const R = (0, _.Z)(g, D);
						return f
							? N
								? (0, t.Y)(t.FK, { children: f })
								: (0, t.Y)(c._, {
										children: (0, t.FD)('span', {
											...R,
											className: r()('ss__price', { 'ss__price--strike': C }, U, V),
											children: [
												!y && h && !E ? (0, t.Y)('span', { className: 'ss__price__symbol', children: h }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: f }),
												!y && h && E ? (0, t.Y)('span', { className: 'ss__price__symbol', children: h }) : (0, t.Y)(t.FK, {}),
												!y && j && v
													? (0, t.FD)(t.FK, { children: ['\xA0', (0, t.Y)('span', { className: 'ss__price__code', children: v })] })
													: (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(s, ['g', 0, T]);
			},
			'./components/src/utilities/componentArgs.ts'(d, s, e) {
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
				e.d(s, ['F', 0, t]);
			},
			'./components/src/utilities/storybook.tsx'(d, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					l = (o) => {
						const r = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								r.current && o.className?.includes('lang-') && !o.className?.includes(a) && window?.Prism?.highlightElement(r.current);
							}, [o.className, o.children, r]),
							(0, t.Y)('code', { ...o, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(s, ['Z', 0, l]);
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function s(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (d.exports = s);
			},
		},
	]);
})();
