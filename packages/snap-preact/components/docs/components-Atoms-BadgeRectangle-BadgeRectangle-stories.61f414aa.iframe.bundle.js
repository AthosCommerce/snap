(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9440],
		{
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx'(l, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => r, __namedExportsOrder: () => g, default: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts');
				const a =
						"# BadgeRectangle\n\nRenders a text badge in the shape of a rectangle. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n```jsx\nimport { BadgeRectangle } from '@athoscommerce/snap-preact/components';\n```\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```jsx\n<BadgeRectangle value={'30% Off'} />\n```\n\n### color\nThe `color` prop specifies the badge background color.\n\n```jsx\n<BadgeRectangle color={'rgba(255, 255, 255, 0.5)'} value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```jsx\n<BadgeRectangle colorText={'#000000'} value={'30% Off'} />\n```\n\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeRectangle tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
					i = {
						title: 'Atoms/BadgeRectangle',
						component: c.Z,
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
					r = (m) => (0, t.Y)(c.Z, { ...m });
				(r.args = { value: '30% Off', color: '#0000FF', colorText: '#FFFFFF' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeRectangleProps) => <BadgeRectangle {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(l, o, e) {
				'use strict';
				e.d(o, { Z: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/hooks/useComponent.tsx');
				const E = ({ color: p, colorText: u }) =>
						(0, n.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: p,
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					b = (0, s.PA)((p) => {
						const u = (0, i.u)(),
							O = (0, r.uk)(),
							P = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, g.LU)() },
							_ = (0, m.v6)('badgeRectangle', u, P, p),
							{ value: f, tag: B, className: R, internalClassName: D, customComponent: y } = _;
						if (y) {
							const x = (0, v.x)(O?.templates?.library.import.component.badgeRectangle || {}, y);
							if (x) return (0, t.Y)(x, { ..._ });
						}
						const T = (0, h.Z)(_, E);
						return f
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...T,
										className: d()('ss__badge-rectangle', `ss__badge-rectangle--${B}`, R, D),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: f }),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(l, o, e) {
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
			'./components/src/utilities/storybook.tsx'(l, o, e) {
				'use strict';
				e.d(o, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					d = (s) => {
						const a = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								a.current && s.className?.includes('lang-') && !s.className?.includes(c) && window?.Prism?.highlightElement(a.current);
							}, [s.className, s.children, a]),
							(0, t.Y)('code', { ...s, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(l) {
				function o(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (l.exports = o);
			},
		},
	]);
})();
