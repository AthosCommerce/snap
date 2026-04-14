(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5114],
		{
			'./components/src/components/Atoms/BadgeText/BadgeText.stories.tsx'(l, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => r, __namedExportsOrder: () => p, default: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# BadgeText\n\nRenders a text badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n```jsx\nimport { BadgeText } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```jsx\n<BadgeText value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```jsx\n<BadgeText colorText={'#000000'} value={'30% Off'} />\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeText tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
					i = {
						title: 'Atoms/BadgeText',
						component: c.p,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: d.Z } }, children: a }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [
							(m) => (0, t.Y)('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: (0, t.Y)(m, {}) }),
						],
						argTypes: {
							value: {
								description: 'Badge text contents',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							colorText: {
								description: 'Badge text color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#000000' } },
								control: { type: 'color' },
							},
							tag: {
								description: 'Badge location tag',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							...o.F,
						},
					},
					r = (m) => (0, t.Y)(c.p, { ...m });
				(r.args = { value: '30% Off', colorText: '#000000' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeTextProps) => <BadgeText {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const p = ['Default'];
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(l, s, e) {
				'use strict';
				e.d(s, { p: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/snap.tsx'),
					p = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useComponent.tsx');
				const v = ({ colorText: u }) =>
						(0, n.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					E = (0, o.PA)((u) => {
						const h = (0, i.u)(),
							O = (0, r.uk)(),
							P = { colorText: '#000000', treePath: (0, p.LU)() },
							g = (0, m.v6)('badgeText', h, P, u),
							{ value: x, tag: B, className: D, internalClassName: b, customComponent: _ } = g;
						if (_) {
							const y = (0, f.x)(O?.templates?.library.import.component.badgeText || {}, _);
							if (y) return (0, t.Y)(y, { ...g });
						}
						const M = (0, T.Z)(g, v);
						return x
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...M,
										className: d()('ss__badge-text', `ss__badge-text--${B}`, D, b),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: x }),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(l, s, e) {
				'use strict';
				e.d(s, { F: () => t });
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
			'./components/src/utilities/storybook.tsx'(l, s, e) {
				'use strict';
				e.d(s, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					d = (o) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && o.className?.includes('lang-') && !o.className?.includes(c) && window?.Prism?.highlightElement(a.current);
							}, [o.className, o.children, a]),
							(0, t.Y)('code', { ...o, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(l) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (l.exports = s);
			},
		},
	]);
})();
