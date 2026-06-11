(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6974],
		{
			'./components/src/components/Atoms/Skeleton/Skeleton.stories.tsx'(c, o, e) {
				'use strict';
				e.r(o), e.d(o, { Circle: () => i, Default: () => a, __namedExportsOrder: () => y, default: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/components/Atoms/Skeleton/Skeleton.tsx');
				const r = `# Skeleton

Renders a div with a animation for use when building loading skeletons. 

## Usage
\`\`\`tsx
import { Skeleton } from '@athoscommerce/snap-preact/components';
\`\`\`

### Height
The \`height\` prop specifies the css height of the skeleton div.

\`\`\`tsx
<Skeleton height='200px' width='150px'/>
\`\`\`

### Width

The \`width\` prop specifies the css width of the skeleton div.

\`\`\`tsx
<Skeleton height='200px' width='150px'/>
\`\`\`

### Round

The \`round\` prop is used for when you are wanting to render a circle instead of a block.

\`\`\`tsx
<Skeleton height='200px' width='150px' round="true"/>
\`\`\`

### backgroundColor

The \`backgroundColor\` prop is used for changing the background color of the skeleton.

\`\`\`tsx
<Skeleton height='200px' width='150px' backgroundColor='#333333'/>
\`\`\`

### animatedColor

The \`animatedColor\` prop is used for changing the color of the moving vertical loading bar.

\`\`\`tsx
<Skeleton height='200px' width='150px' backgroundColor='#333333' animatedColor="#000000" />
\`\`\``,
					g = {
						title: 'Atoms/Skeleton',
						component: s.E,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: m.Z } }, children: r }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [
							(l) =>
								(0, t.Y)('div', { style: { width: '200px', height: '200px', position: 'relative' }, children: (0, t.Y)(l, { height: '200px' }) }),
						],
						argTypes: {
							height: {
								description: 'CSS sizing to set the height of the Skeleton',
								defaultValue: '100px',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							width: {
								description: 'CSS sizing to set the width of the Skeleton',
								defaultValue: '100px',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							round: { table: { type: { summary: 'boolean' }, category: 'Templates Legal' }, control: { type: 'boolean' } },
							backgroundColor: {
								description: 'Background color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#ebebeb' } },
								control: { type: 'color' },
							},
							animatedColor: {
								description: 'Color setting for the vertical animated bar',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '#f5f5f5' } },
								control: { type: 'color' },
							},
							...d.F,
						},
					},
					a = (l) => (0, t.Y)(s.E, { ...l });
				a.args = { width: '100px', height: '100px' };
				const i = (l) => (0, t.Y)(s.E, { ...l });
				(i.args = { width: '100px', height: '100px', round: !0 }),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: { originalSource: '(args: SkeletonProps) => <Skeleton {...args} />', ...a.parameters?.docs?.source },
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: { originalSource: '(args: SkeletonProps) => <Skeleton {...args} />', ...i.parameters?.docs?.source },
						},
					});
				const y = ['Default', 'Circle'];
			},
			'./components/src/components/Atoms/Skeleton/Skeleton.tsx'(c, o, e) {
				'use strict';
				e.d(o, { E: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					d = e.n(m),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					l = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const E = ({ width: h, height: f, round: x, backgroundColor: p, animatedColor: u }) => {
						const _ = (0, n.i7)({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
						return (0, n.AH)({
							width: h,
							height: f,
							borderRadius: x ? h : '0.25rem',
							backgroundColor: p,
							display: 'inline-flex',
							lineHeight: '1',
							position: 'relative',
							overflow: 'hidden',
							zIndex: '1',
							'&:after': {
								content: '""',
								display: 'block',
								position: 'absolute',
								left: '0',
								right: '0',
								height: '100%',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `linear-gradient(90deg, ${p}, ${u}, ${p})`,
								transform: 'translateX(-100%)',
								animation: `${_} 1.5s linear infinite`,
								animationTimingFunction: 'ease-in-out',
							},
						});
					},
					v = (0, s.PA)((h) => {
						const f = (0, g.u)(),
							p = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: (0, a.LU)() },
							u = (0, i.v6)('skeleton', f, p, h),
							{ className: _, internalClassName: b } = u,
							{ overrideElement: k, shouldRenderDefault: P } = (0, l._)('skeleton', u);
						if (!P) return k;
						const C = (0, y.Z)(u, E);
						return (0, t.Y)(r._, { children: (0, t.Y)('div', { ...C, className: d()('ss__skeleton', _, b) }) });
					});
			},
			'./components/src/utilities/componentArgs.ts'(c, o, e) {
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
			'./components/src/utilities/storybook.tsx'(c, o, e) {
				'use strict';
				e.d(o, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					d = (s) => {
						const r = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								r.current && s.className?.includes('lang-') && !s.className?.includes(m) && window?.Prism?.highlightElement(r.current);
							}, [s.className, s.children, r]),
							(0, t.Y)('code', { ...s, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(c) {
				function o(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (c.exports = o);
			},
		},
	]);
})();
