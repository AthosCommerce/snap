(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8536],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.stories.tsx'(l, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => r, __namedExportsOrder: () => g, default: () => i });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts');
				const n =
						"# BadgeImage\n\nRenders an image badge. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n```tsx\nimport { BadgeImage } from '@athoscommerce/snap-preact/components';\n```\n\n### url\nThe required `url` prop specifies the badge image `src` attribute.\n\n```tsx\n<BadgeImage url={'/images/example.png'}/>\n```\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```tsx\n<BadgeImage tag={'30-off-promo'} url={'/images/example.png'}/>\n```\n\n### label\nThe `label` prop specifies the badge image `alt` attribute. \n\n```tsx\n<BadgeImage label={'example badge'} url={'/images/example.png'} />\n```\n",
					i = {
						title: 'Atoms/BadgeImage',
						component: m.z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: d.Z } }, children: n }), (0, t.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [
							(c) => (0, t.Y)('div', { style: { width: '200px', height: '200px', border: '2px dotted lightgrey' }, children: (0, t.Y)(c, {}) }),
						],
						argTypes: {
							tag: {
								description: 'Badge location tag',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							url: {
								description: 'Badge image url',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							label: {
								description: 'Badge image alt text',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							...o.F,
						},
					},
					r = (c) => (0, t.Y)(m.z, { ...c });
				(r.args = { url: '//cdn.searchspring.net/ajax_search/img/star-badge-new-blue.png', label: 'placeholder badge image' }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: BadgeImageProps) => <BadgeImage {...args} />', ...r.parameters?.docs?.source },
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(l, s, e) {
				'use strict';
				e.d(s, { z: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					d = e.n(m),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = () => (0, a.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					x = (0, o.PA)((E) => {
						const b = (0, i.u)(),
							f = { treePath: (0, r.LU)() },
							u = (0, g.v6)('badgeImage', b, f, E),
							{ label: P, url: p, tag: _, className: B, internalClassName: v } = u,
							{ overrideElement: D, shouldRenderDefault: I } = (0, y._)('badgeImage', u);
						if (!I) return D;
						const O = (0, c.Z)(u, h);
						return p
							? (0, t.Y)(n._, {
									children: (0, t.Y)('img', {
										...O,
										className: d()('ss__badge-image', `ss__badge-image--${_}`, B, v),
										alt: P || `${_} badge`,
										src: p,
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(l, s, e) {
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
			'./components/src/utilities/storybook.tsx'(l, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					d = (o) => {
						const n = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								n.current && o.className?.includes('lang-') && !o.className?.includes(m) && window?.Prism?.highlightElement(n.current);
							}, [o.className, o.children, n]),
							(0, t.Y)('code', { ...o, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(s, ['Z', 0, d]);
			},
			'../../node_modules/memoizerific sync recursive'(l) {
				function s(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (l.exports = s);
			},
		},
	]);
})();
