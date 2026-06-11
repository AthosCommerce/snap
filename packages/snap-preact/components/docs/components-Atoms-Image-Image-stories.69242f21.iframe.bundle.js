(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5126],
		{
			'./components/src/components/Atoms/Image/Image.stories.tsx'(u, s, e) {
				'use strict';
				e.r(s),
					e.d(s, { BrokenImg: () => d, Default: () => p, ManualFallBack: () => g, __namedExportsOrder: () => f, default: () => _, onhover: () => i });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Atoms/Image/Image.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const m =
						"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n```tsx\nimport { Image } from '@athoscommerce/snap-preact/components';\n```\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
					r = {
						product1: {
							image:
								'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647.png?v=1747685130&width=1920',
							name: 'Align Hoodie',
						},
						product2: {
							image:
								'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Zip_Jacket_-_Black_74fc7521-257b-44bb-9908-97b105126ee7.png?v=1747685170&width=1920',
							name: 'Align Zip Jacket',
						},
					},
					_ = {
						title: 'Atoms/Image',
						component: n._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(t.oz, { options: { overrides: { code: h.Z } }, children: m }), (0, o.Y)(t.uY, { story: t.h1 })],
									}),
							},
						},
						decorators: [(a) => (0, o.Y)('div', { style: { maxWidth: '300px' }, children: (0, o.Y)(a, {}) })],
						argTypes: {
							src: {
								description: 'Image url',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							alt: {
								description: 'Image alt text',
								type: { required: !0 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							height: { description: 'Image height', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
							fallback: {
								description: 'Fallback image url',
								defaultValue: n.t,
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'string' } },
								control: { type: 'text' },
							},
							lazy: {
								defaultValue: !0,
								description: 'Image lazy loading',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hoverSrc: {
								description: 'Image onHover url',
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							onError: {
								description: 'Image error event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onError',
							},
							onLoad: {
								description: 'Image loaded event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onLoad',
							},
							onClick: {
								description: 'Image click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							onMouseOver: {
								description: 'Image mouse enter event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onMouseOver',
							},
							onMouseOut: {
								description: 'Image mouse exit event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onMouseOut',
							},
							...c.F,
						},
					},
					p = (a) => (0, o.Y)(n._, { ...a, style: { width: '100%' } });
				p.args = { src: r.product1.image, alt: r.product1.name };
				const d = (a) => (0, o.Y)(n._, { ...a, style: { width: '100%' } });
				d.args = { src: 'intentionally_broken_image.jpg', alt: r.product1.name };
				const g = (a) => (0, o.Y)(n._, { ...a, style: { width: '100%' } });
				g.args = { src: 'intentionally_broken_image.jpg', alt: r.product1.name, fallback: r.product1.image };
				const i = (a) => (0, o.Y)(n._, { ...a, style: { width: '100%' } });
				(i.args = { src: r.product1.image, alt: r.product1.name, hoverSrc: r.product2.image }),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...d.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...g.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...i.parameters?.docs?.source,
							},
						},
					});
				const f = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(u, s, e) {
				'use strict';
				e.d(s, { _: () => a, t: () => i });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					c = e.n(h),
					m = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const i = '//cdn.athoscommerce.net/snap/images/fallback.png',
					f = ({ height: y }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: y || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function a(y) {
					const C = (0, r.u)(),
						U = (0, _.LU)(),
						A = { fallback: i, lazy: !0, treePath: U },
						v = (0, p.v6)('image', C, A, y),
						{
							alt: x,
							src: I,
							fallback: O,
							title: j,
							hoverSrc: b,
							lazy: w,
							onMouseOver: M,
							onMouseOut: k,
							onError: P,
							onLoad: L,
							onClick: T,
							className: B,
							internalClassName: S,
						} = v,
						{ overrideElement: W, shouldRenderDefault: K } = (0, g._)('image', v);
					if (!K) return W;
					const [Y, D] = (0, t.J0)(!1),
						[z, R] = (0, t.J0)(!1),
						E = (0, t.li)('');
					(0, t.vJ)(() => {
						E.current = I;
					}),
						E.current && E.current != I && D(!1);
					const F = (0, d.Z)(v, f);
					return (0, o.Y)(m._, {
						children: (0, o.Y)('div', {
							...F,
							className: c()('ss__image', { 'ss__image--hidden': !Y }, B, S),
							children: (0, o.Y)('img', {
								src: (z ? b : I) || O,
								alt: x,
								title: j || x,
								loading: w ? 'lazy' : void 0,
								onLoad: (l) => {
									D(!0), L && L(l);
								},
								onClick: (l) => T && T(l),
								onError: (l) => {
									(l.target.src = O || ''), P && P(l);
								},
								onMouseOver: (l) => {
									b && R(!0), M && M(l);
								},
								onMouseOut: (l) => {
									b && R(!1), k && k(l);
								},
							}),
						}),
					});
				}
			},
			'./components/src/utilities/componentArgs.ts'(u, s, e) {
				'use strict';
				e.d(s, { F: () => o });
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
			'./components/src/utilities/storybook.tsx'(u, s, e) {
				'use strict';
				e.d(s, { Z: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					h = (c) => {
						const m = (0, t.li)(null);
						return (
							(0, t.vJ)(() => {
								m.current && c.className?.includes('lang-') && !c.className?.includes(n) && window?.Prism?.highlightElement(m.current);
							}, [c.className, c.children, m]),
							(0, o.Y)('code', { ...c, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function s(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (u.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Image-Image-stories.69242f21.iframe.bundle.js.map
