(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[774],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(d, o, e) {
				'use strict';
				e.d(o, { G: () => n });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function n(a, l) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...l };
					return (0, t.Z)(a, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(d, o, e) {
				'use strict';
				e.d(o, { Z: () => t });
				function t(a, l) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...l };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const r = n(a, s.decimalPlaces).split('.');
					(r[0] = r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (r[1] = (r[1] || '').padEnd(s.decimalPlaces, '0'));
					let c = r.join(s.decimalSeparator);
					return s.symbolAfter ? (c = c + s.symbol) : (c = s.symbol + c), c;
				}
				function n(a, l) {
					const s = a.toString(),
						r = s.indexOf('.'),
						c = r == -1 ? s.length : 1 + r + (l || -1);
					return s.substr(0, c);
				}
			},
			'./components/src/components/Atoms/Price/Price.stories.tsx'(d, o, e) {
				'use strict';
				e.r(o), e.d(o, { CustomCurrency: () => u, Default: () => m, __namedExportsOrder: () => _, default: () => c, lineThrough: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Price/Price.tsx'),
					l = e('./components/src/utilities/storybook.tsx'),
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
				const _ = ['Default', 'lineThrough', 'CustomCurrency'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(d, o, e) {
				'use strict';
				e.d(o, { g: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					r = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/snap.tsx'),
					i = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					_ = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useComponent.tsx');
				const D = ({ theme: h }) =>
					(0, a.AH)({ color: h?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function T(h) {
					const x = (0, c.u)(),
						O = (0, m.uk)(),
						C = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, i.LU)(),
						},
						g = (0, u.v6)('price', x, C, h),
						{
							lineThrough: A,
							value: b,
							symbol: y,
							decimalPlaces: M,
							padDecimalPlaces: L,
							thousandsSeparator: j,
							decimalSeparator: S,
							symbolAfter: P,
							raw: N,
							className: U,
							internalClassName: V,
							customComponent: E,
						} = g;
					if (E) {
						const v = (0, p.x)(O?.templates?.library.import.component.price || {}, E);
						if (v) return (0, t.Y)(v, { ...g });
					}
					let f;
					b && (f = n.G(b, { symbol: '', decimalPlaces: M, padDecimalPlaces: L, thousandsSeparator: j, decimalSeparator: S }));
					const K = (0, _.Z)(g, D);
					return f
						? N
							? (0, t.Y)(t.FK, { children: f })
							: (0, t.Y)(r._, {
									children: (0, t.FD)('span', {
										...K,
										className: s()('ss__price', { 'ss__price--strike': A }, U, V),
										children: [
											y && !P ? (0, t.Y)('span', { className: 'ss__price__symbol', children: y }) : (0, t.Y)(t.FK, {}),
											(0, t.Y)('span', { className: 'ss__price__value', children: f }),
											y && P ? (0, t.Y)('span', { className: 'ss__price__symbol', children: y }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
						: null;
				}
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
				e.d(o, { Z: () => l });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					l = (s) => {
						const r = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
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
