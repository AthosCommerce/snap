(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1314],
		{
			'./components/src/components/Atoms/LoadingBar/LoadingBar.stories.tsx'(c, t, e) {
				'use strict';
				e.r(t), e.d(t, { Active: () => r, __namedExportsOrder: () => p, default: () => u });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs');
				const n =
						"# Loading Bar\n\nRenders a Loading Bar.\n\n## Usage\n```tsx\nimport { LoadingBar } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```tsx\n<LoadingBar active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the loading bar.\n\n```tsx\n<LoadingBar active={true} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the loading bar.\n\n```tsx\n<LoadingBar active={true} backgroundColor={'#eeeeee'} />\n```\n\n\n### height\nThe `height` prop specifies the height of the loading bar.\n\n```tsx\n<LoadingBar active={true} height={'10px'} />\n```\n",
					u = {
						title: 'Atoms/LoadingBar',
						component: a.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: i.Z } }, children: n }), (0, o.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								defaultValue: !1,
								description: 'LoadingBar is displayed',
								type: { required: !0 },
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							color: {
								description: 'Bar color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Background color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'theme.variables.colors.secondary' } },
								control: { type: 'color' },
							},
							height: {
								defaultValue: '5px',
								description: 'LoadingBar height',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '5px' } },
								control: { type: 'text' },
							},
							...l.F,
						},
					},
					r = (g) => (0, o.Y)(a.G, { ...g, style: { maxWidth: '1200px', margin: '1rem', overflow: 'hidden' } });
				(r.args = { active: !0 }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: {
								originalSource: `(args: LoadingBarProps) => {
  return <LoadingBar {...args} style={{
    maxWidth: '1200px',
    margin: '1rem',
    overflow: 'hidden'
  }} />;
}`,
								...r.parameters?.docs?.source,
							},
						},
					});
				const p = ['Active'];
			},
			'./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'(c, t, e) {
				'use strict';
				e.d(t, { G: () => E });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					n = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = ({ color: _, height: h, backgroundColor: y, theme: d }) => {
						const m = (0, i.i7)({
							from: { left: '-200px', width: '30%' },
							'50%': { width: '30%' },
							'70%': { width: '70%' },
							'80%': { left: '50%' },
							'95%': { left: '120%' },
							to: { left: '100%' },
						});
						return (0, i.AH)({
							height: h,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: y || d?.variables?.colors?.secondary || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${_ || d?.variables?.colors?.primary || '#ccc'}`,
								animation: `${m} 2s linear infinite`,
							},
						});
					},
					E = (0, a.PA)((_) => {
						const h = (0, u.u)(),
							d = { height: '5px', treePath: (0, r.LU)() },
							m = (0, p.v6)('loadingBar', h, d, _),
							{ active: x, className: b, internalClassName: L } = m,
							{ overrideElement: P, shouldRenderDefault: B } = (0, f._)('loadingBar', m);
						if (!B) return P;
						const O = (0, g.Z)(m, v);
						return x
							? (0, o.Y)(n._, {
									children: (0, o.Y)('div', {
										...O,
										className: s()('ss__loading-bar', b, L),
										children: (0, o.Y)('div', { className: 'ss__loading-bar__bar' }),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(c, t, e) {
				'use strict';
				e.d(t, { F: () => o });
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
			'./components/src/utilities/storybook.tsx'(c, t, e) {
				'use strict';
				e.d(t, { Z: () => l });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					l = (s) => {
						const n = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								n.current && s.className?.includes('lang-') && !s.className?.includes(i) && window?.Prism?.highlightElement(n.current);
							}, [s.className, s.children, n]),
							(0, o.Y)('code', { ...s, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(c) {
				function t(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(t.keys = () => []), (t.resolve = t), (t.id = '../../node_modules/memoizerific sync recursive'), (c.exports = t);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-LoadingBar-LoadingBar-stories.27b1a80e.iframe.bundle.js.map
