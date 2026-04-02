(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[774],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(p, r, e) {
				'use strict';
				e.d(r, { Z: () => t });
				function t(a, c) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...c };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const o = n(a, s.decimalPlaces).split('.');
					(o[0] = o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (o[1] = (o[1] || '').padEnd(s.decimalPlaces, '0'));
					let l = o.join(s.decimalSeparator);
					return s.symbolAfter ? (l = l + s.symbol) : (l = s.symbol + l), l;
				}
				function n(a, c) {
					const s = a.toString(),
						o = s.indexOf('.'),
						l = o == -1 ? s.length : 1 + o + (c || -1);
					return s.substr(0, l);
				}
			},
			'./components/src/components/Atoms/Price/Price.stories.tsx'(p, r, e) {
				'use strict';
				e.r(r), e.d(r, { CustomCurrency: () => u, Default: () => m, __namedExportsOrder: () => g, default: () => l, lineThrough: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Atoms/Price/Price.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Price\n\nUtilizes `currency` from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://athoscommerce.github.io/snap/reference-toolbox-filters\">@athoscommerce/snap-toolbox</a> to render a `<span>` containing a formatted number.\n\n## Usage\n```jsx\nimport { Price } from '@athoscommerce/snap-preact/components';\n```\n\nThe `Price` component utilizes all props from the `FormattedNumber` component with the following additional prop:\n\n### lineThrough\nThe `lineThrough` prop will style the formatted number with a line-through.\n\n```jsx\n<Price value={1099.99} symbol=' \u20AC' lineThrough={true} thousandsSeparator='.' decimalSeparator=',' symbolAfter={true} />\n```\nFormatted output from above properties: ~~`1.099,99 \u20AC`~~\n",
					l = {
						title: 'Atoms/Price',
						component: a.g,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: c.Z } }, children: o }), (0, t.Y)(n.uY, { story: n.h1 })],
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
					m = (d) => (0, t.Y)(a.g, { ...d });
				m.args = { value: 1099.99 };
				const i = (d) => (0, t.Y)(a.g, { ...d });
				i.args = { value: 1199.99, lineThrough: !0 };
				const u = (d) => (0, t.Y)(a.g, { ...d });
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
				const g = ['Default', 'lineThrough', 'CustomCurrency'];
			},
			'./components/src/components/Atoms/Price/Price.tsx'(p, r, e) {
				'use strict';
				e.d(r, { g: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function a(y, b) {
					const P = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...b };
					return (0, n.Z)(y, P);
				}
				var c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					o = e.n(s),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts');
				const d = ({ theme: y }) =>
					(0, c.AH)({ color: y?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function j(y) {
					const b = (0, l.u)(),
						S = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, m.LU)(),
						},
						v = (0, u.v6)('price', b, S, y),
						{
							lineThrough: N,
							value: x,
							symbol: f,
							decimalPlaces: C,
							padDecimalPlaces: A,
							thousandsSeparator: D,
							decimalSeparator: V,
							symbolAfter: T,
							raw: L,
							className: Y,
							internalClassName: E,
						} = v;
					let h;
					x && (h = a(x, { symbol: '', decimalPlaces: C, padDecimalPlaces: A, thousandsSeparator: D, decimalSeparator: V }));
					const O = (0, g.Z)(v, d);
					return h
						? L
							? (0, t.Y)(t.FK, { children: h })
							: (0, t.Y)(i._, {
									children: (0, t.FD)('span', {
										...O,
										className: o()('ss__price', { 'ss__price--strike': N }, Y, E),
										children: [
											f && !T ? (0, t.Y)('span', { className: 'ss__price__symbol', children: f }) : (0, t.Y)(t.FK, {}),
											(0, t.Y)('span', { className: 'ss__price__value', children: h }),
											f && T ? (0, t.Y)('span', { className: 'ss__price__symbol', children: f }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
						: null;
				}
			},
			'./components/src/utilities/componentArgs.ts'(p, r, e) {
				'use strict';
				e.d(r, { F: () => t });
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
			'./components/src/utilities/storybook.tsx'(p, r, e) {
				'use strict';
				e.d(r, { Z: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					c = (s) => {
						const o = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								o.current && s.className?.includes('lang-') && !s.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [s.className, s.children, o]),
							(0, t.Y)('code', { ...s, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function r(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (p.exports = r);
			},
		},
	]);
})();
