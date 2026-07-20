(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7698],
		{
			'./components/src/components/Atoms/BadgePill/BadgePill.stories.tsx'(c, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => r, __namedExportsOrder: () => u, default: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# BadgePill\n\nRenders a text badge in the shape of a pill. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n```tsx\nimport { BadgePill } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```tsx\n<BadgePill value={'30% Off'} />\n```\n\n### color\nThe `color` prop specifies the badge background color.\n\n```tsx\n<BadgePill color={'rgba(255, 255, 255, 0.5)'} value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```tsx\n<BadgePill colorText={'#000000'} value={'30% Off'} />\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```tsx\n<BadgePill tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
					m = {
						title: 'Atoms/BadgePill',
						component: l.L,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: i.Z } }, children: a }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [
							(d) => (0, t.Y)('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: (0, t.Y)(d, {}) }),
						],
						argTypes: {
							value: {
								description: 'Badge text contents',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							color: {
								description: 'Badge background color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'rgba(58, 35, 173, 1)' } },
								control: { type: 'color' },
							},
							colorText: {
								description: 'Badge text color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#ffffff' } },
								control: { type: 'color' },
							},
							tag: {
								description: 'Badge location tag',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							...s.F,
						},
					},
					r = (d) => (0, t.Y)(l.L, { ...d });
				(r.args = { value: '30% Off', color: '#0000FF', colorText: '#FFFFFF' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgePillProps) => <BadgePill {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const u = ['Default'];
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(c, o, e) {
				'use strict';
				e.d(o, { L: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					i = e.n(l),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ color: p, colorText: g }) =>
						(0, n.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: p,
							color: g,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					x = (0, s.PA)((p) => {
						const g = (0, m.u)(),
							h = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, r.LU)() },
							_ = (0, u.v6)('badgePill', g, h, p),
							{ value: f, tag: v, className: E, internalClassName: b } = _,
							{ overrideElement: O, shouldRenderDefault: B } = (0, y._)('badgePill', _);
						if (!B) return O;
						const D = (0, d.Z)(_, P);
						return f
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...D,
										className: i()('ss__badge-pill', `ss__badge-pill--${v}`, E, b),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: f }),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(c, o, e) {
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
				e.d(o, ['F', 0, t]);
			},
			'./components/src/utilities/storybook.tsx'(c, o, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					i = (s) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && s.className?.includes('lang-') && !s.className?.includes(l) && window?.Prism?.highlightElement(a.current);
							}, [s.className, s.children, a]),
							(0, t.Y)('code', { ...s, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(o, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(c) {
				function o(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (c.exports = o);
			},
		},
	]);
})();
