(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5126],
		{
			'./components/src/components/Atoms/Image/Image.stories.tsx'(u, n, e) {
				'use strict';
				e.r(n),
					e.d(n, { BrokenImg: () => p, Default: () => m, ManualFallBack: () => g, __namedExportsOrder: () => y, default: () => _, onhover: () => d });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const c =
						"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n```tsx\nimport { Image } from '@athoscommerce/snap-preact/components';\n```\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### draggable\nThe `draggable` prop sets the `draggable` attribute on the image element.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} draggable={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onPointerDown\nThe `onPointerDown` prop allows for a custom callback function when a pointer becomes active on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerDown={(e)=>{console.log(e)}} />\n```\n\n#### onPointerMove\nThe `onPointerMove` prop allows for a custom callback function when a pointer moves over the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerMove={(e)=>{console.log(e)}} />\n```\n\n#### onPointerUp\nThe `onPointerUp` prop allows for a custom callback function when a pointer is released on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerUp={(e)=>{console.log(e)}} />\n```\n\n#### onPointerLeave\nThe `onPointerLeave` prop allows for a custom callback function when a pointer leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerLeave={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
					l = {
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
						component: r._,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: h.Z } }, children: c }), (0, o.Y)(s.uY, { story: s.h1 })],
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
								defaultValue: r.t,
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
							draggable: {
								description: 'Image draggable attribute',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
								control: { type: 'boolean' },
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
							onPointerDown: {
								description: 'Image pointer down event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onPointerDown',
							},
							onPointerMove: {
								description: 'Image pointer move event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onPointerMove',
							},
							onPointerUp: {
								description: 'Image pointer up event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onPointerUp',
							},
							onPointerLeave: {
								description: 'Image pointer leave event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onPointerLeave',
							},
							...i.F,
						},
					},
					m = (a) => (0, o.Y)(r._, { ...a, style: { width: '100%' } });
				m.args = { src: l.product1.image, alt: l.product1.name };
				const p = (a) => (0, o.Y)(r._, { ...a, style: { width: '100%' } });
				p.args = { src: 'intentionally_broken_image.jpg', alt: l.product1.name };
				const g = (a) => (0, o.Y)(r._, { ...a, style: { width: '100%' } });
				g.args = { src: 'intentionally_broken_image.jpg', alt: l.product1.name, fallback: l.product1.image };
				const d = (a) => (0, o.Y)(r._, { ...a, style: { width: '100%' } });
				(d.args = { src: l.product1.image, alt: l.product1.name, hoverSrc: l.product2.image }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: ImageProps) => <Image {...args} style={{
  width: '100%'
}} />`,
								...m.parameters?.docs?.source,
							},
						},
					}),
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
					});
				const y = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(u, n, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					h = e('../../node_modules/classnames/index.js'),
					i = e.n(h),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const y = '//cdn.athoscommerce.net/snap/images/fallback.png',
					a = ({ height: f }) =>
						(0, r.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: f || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					j = (0, c.PA)((f) => {
						const B = (0, _.u)(),
							W = (0, m.LU)(),
							S = { fallback: y, lazy: !0, treePath: W },
							v = (0, p.v6)('image', B, S, f),
							{
								alt: x,
								src: b,
								fallback: E,
								title: K,
								hoverSrc: I,
								lazy: Y,
								onMouseOver: M,
								onMouseOut: L,
								onError: T,
								onLoad: O,
								onClick: U,
								onPointerDown: k,
								onPointerMove: D,
								onPointerUp: R,
								onPointerLeave: w,
								className: z,
								internalClassName: F,
								draggable: N,
							} = v,
							{ overrideElement: V, shouldRenderDefault: H } = (0, d._)('image', v);
						if (!H) return V;
						const [J, C] = (0, s.J0)(!1),
							[Z, A] = (0, s.J0)(!1),
							P = (0, s.li)('');
						(0, s.vJ)(() => {
							P.current = b;
						}),
							P.current && P.current != b && C(!1);
						const G = (0, g.Z)(v, a);
						return (0, o.Y)(l._, {
							children: (0, o.Y)('div', {
								...G,
								className: i()('ss__image', { 'ss__image--hidden': !J }, z, F),
								children: (0, o.Y)('img', {
									src: (Z ? I : b) || E,
									alt: x,
									title: K || x,
									loading: Y ? 'lazy' : void 0,
									onLoad: (t) => {
										C(!0), O && O(t);
									},
									onClick: (t) => U && U(t),
									onError: (t) => {
										(t.target.src = E || ''), T && T(t);
									},
									onMouseOver: (t) => {
										I && A(!0), M && M(t);
									},
									onMouseOut: (t) => {
										I && A(!1), L && L(t);
									},
									onPointerDown: (t) => {
										k && k(t);
									},
									onPointerMove: (t) => {
										D && D(t);
									},
									onPointerUp: (t) => {
										R && R(t);
									},
									onPointerLeave: (t) => {
										w && w(t);
									},
									draggable: N,
								}),
							}),
						});
					});
				e.d(n, ['_', 0, j, 't', 0, y]);
			},
			'./components/src/utilities/componentArgs.ts'(u, n, e) {
				'use strict';
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
				e.d(n, ['F', 0, o]);
			},
			'./components/src/utilities/storybook.tsx'(u, n, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					h = (i) => {
						const c = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								c.current && i.className?.includes('lang-') && !i.className?.includes(r) && window?.Prism?.highlightElement(c.current);
							}, [i.className, i.children, c]),
							(0, o.Y)('code', { ...i, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(n, ['Z', 0, h]);
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function n(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (u.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Image-Image-stories.f38b4701.iframe.bundle.js.map
