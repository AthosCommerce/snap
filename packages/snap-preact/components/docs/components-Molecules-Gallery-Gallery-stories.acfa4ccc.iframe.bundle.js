(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6915],
		{
			'./components/src/components/Molecules/Gallery/Gallery.stories.tsx'(S, m, e) {
				'use strict';
				e.r(m),
					e.d(m, {
						Default: () => _,
						SingleImage: () => b,
						StartAtIndex: () => i,
						ThumbnailTrigger: () => g,
						__namedExportsOrder: () => D,
						default: () => o,
					});
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/Gallery/Gallery.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts');
				const y =
						'# Gallery\n\nRenders a fullscreen lightbox-style image gallery overlay with navigation, zoom controls, and keyboard/touch support. The gallery is portalled to `document.body` and renders above all other content.\n\n## Sub-components\n- Button\n\n## Usage\n\n```tsx\nimport { Gallery } from \'@athoscommerce/snap-preact/components\';\n```\n\n```tsx\n<Gallery images={imageUrls} open={isOpen} onClose={() => setIsOpen(false)} />\n```\n\n### images\nThe `images` prop accepts an array of image URL strings to display in the gallery. If the array is empty, the gallery is not rendered.\n\n```tsx\n<Gallery images={[\'img1.jpg\', \'img2.jpg\', \'img3.jpg\']} open={true} />\n```\n\n### open\nThe `open` prop controls the visibility of the gallery overlay.\n\n```tsx\n<Gallery images={imageUrls} open={true} />\n```\n\n### startIndex\nThe `startIndex` prop specifies which image to display when the gallery opens. Defaults to `0`.\n\n```tsx\n<Gallery images={imageUrls} open={true} startIndex={2} />\n```\n\n### onClose\nThe `onClose` prop is a callback invoked when the gallery is dismissed via the close button, the Escape key, or clicking the backdrop.\n\n```tsx\n<Gallery images={imageUrls} open={true} onClose={() => setIsOpen(false)} />\n```\n\n### alt\nThe `alt` prop provides alt text for the displayed image.\n\n```tsx\n<Gallery images={imageUrls} open={true} alt="Product image" />\n```\n\n### zoomMin\nThe `zoomMin` prop sets the minimum zoom level. Defaults to `1`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomMin={1} />\n```\n\n### zoomMax\nThe `zoomMax` prop sets the maximum zoom level. Defaults to `4`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomMax={6} />\n```\n\n### zoomStep\nThe `zoomStep` prop sets the zoom increment applied per zoom in/out action. Defaults to `0.5`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomStep={1} />\n```\n\n### swipeThreshold\nThe `swipeThreshold` prop sets the number of pixels of horizontal touch travel required before a swipe navigates to the next or previous image. Defaults to `40`.\n\n```tsx\n<Gallery images={imageUrls} open={true} swipeThreshold={60} />\n```\n\n### lang\nThe `lang` prop customizes the accessible labels following the standard component lang pattern:\n\n- `gallery` \u2014 attributes for the dialog root (default `aria-label="Image gallery"`).\n- `zoomOutButton` \u2014 attributes for the zoom-out button (default `aria-label="Zoom out"`).\n- `zoomInButton` \u2014 attributes for the zoom-in button (default `aria-label="Zoom in"`).\n- `closeButton` \u2014 attributes for the close button (default `aria-label="Close gallery"`).\n- `prevButton` \u2014 attributes for the previous-image button (default `aria-label="Previous image"`).\n- `nextButton` \u2014 attributes for the next-image button (default `aria-label="Next image"`).\n\n```tsx\n<Gallery images={imageUrls} open={true} lang={{ gallery: { attributes: { \'aria-label\': \'Bildergalerie\' } } }} />\n```\n\n## Features\n\n### Keyboard Controls\n- **Escape** - Close the gallery\n- **ArrowLeft / ArrowRight** - Navigate between images\n- **+ / =** - Zoom in\n- **- / _** - Zoom out\n\n### Zoom\nZoom ranges from `zoomMin` (default 1x) to `zoomMax` (default 4x) in `zoomStep` (default 0.5x) increments. When zoomed in, drag-to-pan is enabled.\n\n### Touch Swipe\nOn mobile, dominantly-horizontal swipe gestures past `swipeThreshold` (default 40px) navigate between images when not zoomed in.\n\n### Wrap-around Navigation\nNavigation wraps around from the last image to the first and vice versa. The previous/next navigation buttons and the image counter are hidden when there is only one image.\n\n### Accessibility\nThe gallery root is a dialog (`role="dialog"`, `aria-modal="true"`) with a `useA11y` focus trap: `Tab`/`Shift+Tab` cycle within the gallery controls and `Escape` invokes `onClose`. On open, focus moves to the close button; on close, focus is restored to the previously focused element. Because the gallery portals to `document.body`, its trap operates independently of any surrounding dialog\'s trap (e.g. the quickview).\n',
					o = {
						title: 'Molecules/Gallery',
						component: d.Z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: p.Z } }, children: y }), (0, t.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						argTypes: {
							images: {
								description: 'Array of image URLs to display in the gallery',
								table: { type: { summary: 'string[]' } },
								control: { type: 'object' },
							},
							open: {
								description: 'Controls visibility of the gallery overlay',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							startIndex: {
								description: 'Index of the image to display when the gallery opens',
								table: { type: { summary: 'number' }, defaultValue: { summary: 0 } },
								control: { type: 'number', min: 0 },
							},
							onClose: {
								description: 'Callback invoked when the gallery is closed',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClose',
							},
							alt: { description: 'Alt text applied to the displayed image', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							zoomMin: {
								description: 'Minimum zoom level',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 1 } },
								control: { type: 'number', min: 0.1, step: 0.1 },
							},
							zoomMax: {
								description: 'Maximum zoom level',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number', min: 0.1, step: 0.1 },
							},
							zoomStep: {
								description: 'Zoom increment applied per zoom in/out action',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 0.5 } },
								control: { type: 'number', min: 0.1, step: 0.1 },
							},
							swipeThreshold: {
								description: 'Pixels of horizontal touch travel required before a swipe paginates',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 40 } },
								control: { type: 'number', min: 0 },
							},
							lang: {
								description:
									'Custom language keys for the accessible labels (`gallery`, `zoomOutButton`, `zoomInButton`, `closeButton`, `prevButton`, `nextButton`)',
								table: { type: { summary: 'Partial<GalleryLang>' } },
								control: { type: 'object' },
							},
							...u.F,
						},
					},
					l = [
						'https://picsum.photos/800/600?random=1',
						'https://picsum.photos/800/600?random=2',
						'https://picsum.photos/800/600?random=3',
						'https://picsum.photos/800/600?random=4',
						'https://picsum.photos/800/600?random=5',
					],
					_ = (O) => {
						const [f, h] = (0, c.J0)(!1);
						return (0, t.FD)('div', {
							children: [
								(0, t.Y)('button', { onClick: () => h(!0), children: 'Open Gallery' }),
								(0, t.Y)(d.Z, { ...O, open: f, onClose: () => h(!1) }),
							],
						});
					};
				_.args = { images: l, startIndex: 0, alt: 'Gallery image' };
				const i = (O) => {
					const [f, h] = (0, c.J0)(!1);
					return (0, t.FD)('div', {
						children: [
							(0, t.Y)('button', { onClick: () => h(!0), children: 'Open at Image 3' }),
							(0, t.Y)(d.Z, { ...O, open: f, onClose: () => h(!1) }),
						],
					});
				};
				i.args = { images: l, startIndex: 2, alt: 'Gallery image' };
				const b = (O) => {
					const [f, h] = (0, c.J0)(!1);
					return (0, t.FD)('div', {
						children: [
							(0, t.Y)('button', { onClick: () => h(!0), children: 'Open Single Image' }),
							(0, t.Y)(d.Z, { ...O, open: f, onClose: () => h(!1) }),
						],
					});
				};
				b.args = { images: ['https://picsum.photos/800/600?random=10'], alt: 'Single gallery image' };
				const g = (O) => {
					const [f, h] = (0, c.J0)(!1),
						[I, F] = (0, c.J0)(0);
					return (0, t.FD)('div', {
						children: [
							(0, t.Y)('div', {
								style: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
								children: l.map((z, T) =>
									(0, t.Y)('img', {
										src: z,
										alt: `Thumbnail ${T + 1}`,
										style: { width: '100px', height: '75px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px' },
										onClick: () => {
											F(T), h(!0);
										},
									})
								),
							}),
							(0, t.Y)(d.Z, { ...O, images: l, open: f, startIndex: I, onClose: () => h(!1) }),
						],
					});
				};
				(g.args = { alt: 'Product image' }),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: GalleryProps) => {
  const [open, setOpen] = useState(false);
  return <div>
            <button onClick={() => setOpen(true)}>Open Gallery</button>
            <Gallery {...args} open={open} onClose={() => setOpen(false)} />
        </div>;
}`,
								..._.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: GalleryProps) => {
  const [open, setOpen] = useState(false);
  return <div>
            <button onClick={() => setOpen(true)}>Open at Image 3</button>
            <Gallery {...args} open={open} onClose={() => setOpen(false)} />
        </div>;
}`,
								...i.parameters?.docs?.source,
							},
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: {
								originalSource: `(args: GalleryProps) => {
  const [open, setOpen] = useState(false);
  return <div>
            <button onClick={() => setOpen(true)}>Open Single Image</button>
            <Gallery {...args} open={open} onClose={() => setOpen(false)} />
        </div>;
}`,
								...b.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  return <div>
            <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
                {sampleImages.map((src, i) => <img src={src} alt={\`Thumbnail \${i + 1}\`} style={{
        width: '100px',
        height: '75px',
        objectFit: 'cover',
        cursor: 'pointer',
        borderRadius: '4px'
      }} onClick={() => {
        setStartIndex(i);
        setOpen(true);
      }} />)}
            </div>
            <Gallery {...args} images={sampleImages} open={open} startIndex={startIndex} onClose={() => setOpen(false)} />
        </div>;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const D = ['Default', 'StartAtIndex', 'SingleImage', 'ThumbnailTrigger'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					d = e.n(a),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useA11y.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/hooks/useLang.tsx'),
					f = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(h);
				const F = ({ native: T, color: A, backgroundColor: w, borderColor: $, theme: M }) =>
						T
							? (0, c.AH)({})
							: (0, c.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: A || M?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: w || '#fff',
									border: `1px solid ${$ || A || M?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					z = (0, p.PA)((T) => {
						const A = (0, y.u)(),
							$ = { disableA11y: !1, treePath: (0, o.LU)() },
							M = (0, b.v6)('button', A, $, T),
							{
								content: r,
								children: U,
								disabled: x,
								native: j,
								onClick: E,
								disableA11y: J,
								disableStyles: V,
								className: X,
								internalClassName: P,
								icon: v,
								lang: Z,
								treePath: W,
								style: q,
								styleScript: k,
								themeStyleScript: ee,
								...L
							} = M,
							{ overrideElement: K, shouldRenderDefault: Y } = (0, f._)('button', M);
						if (!Y) return K;
						const R = { icon: { internalClassName: 'ss__button__icon', ...(0, i.s)({ disableStyles: V }), theme: M?.theme, treePath: W } },
							G = {
								...(0, g.Z)(M, F),
								className: d()('ss__button', { 'ss__button--native': j, 'ss__button--disabled': x }, X, P),
								disabled: x,
								onClick: (H) => !x && E && E(H),
								...L,
							},
							n = { ref: (H) => (0, l.iy)(H) },
							oe = {},
							N = I()(oe, Z || {}),
							Q = (0, O.u)(N, {}, { activeBreakpoint: A?.activeBreakpoint }),
							te = !!L.dangerouslySetInnerHTML;
						return r || U || v || Z?.button?.value || te
							? (0, t.Y)(u._, {
									children: j
										? (0, t.FD)('button', {
												...G,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...Q.button?.all,
														children: [(0, _.Y)(r, { treePath: W }), (0, _.Y)(U, { treePath: W })],
													}),
													v && (0, t.Y)(D.I, { ...R.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, t.FD)('div', {
												...(J ? {} : n),
												role: 'button',
												'aria-disabled': x,
												...G,
												...Q.button?.attributes,
												children: [
													r || U || Q.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...Q.button?.value,
																children: [(0, _.Y)(r, { treePath: W }), (0, _.Y)(U, { treePath: W })],
														  })
														: void 0,
													v && (0, t.Y)(D.I, { ...R.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
				e.d(m, ['$', 0, z]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					p = e.n(d),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					y = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = '//cdn.athoscommerce.net/snap/images/fallback.png',
					D = ({ height: f }) =>
						(0, a.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: f || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					O = (0, u.PA)((f) => {
						const h = (0, o.u)(),
							I = (0, l.LU)(),
							F = { fallback: g, lazy: !0, treePath: I },
							z = (0, _.v6)('image', h, F, f),
							{
								alt: T,
								src: A,
								fallback: w,
								title: $,
								hoverSrc: M,
								lazy: r,
								onMouseOver: U,
								onMouseOut: x,
								onError: j,
								onLoad: E,
								onClick: J,
								onPointerDown: V,
								onPointerMove: X,
								onPointerUp: P,
								onPointerLeave: v,
								className: Z,
								internalClassName: W,
								draggable: q,
							} = z,
							{ overrideElement: k, shouldRenderDefault: ee } = (0, b._)('image', z);
						if (!ee) return k;
						const [L, K] = (0, c.J0)(!1),
							[Y, R] = (0, c.J0)(!1),
							C = (0, c.li)('');
						(0, c.vJ)(() => {
							C.current = A;
						}),
							C.current && C.current != A && K(!1);
						const G = (0, i.Z)(z, D);
						return (0, t.Y)(y._, {
							children: (0, t.Y)('div', {
								...G,
								className: p()('ss__image', { 'ss__image--hidden': !L }, Z, W),
								children: (0, t.Y)('img', {
									src: (Y ? M : A) || w,
									alt: T,
									title: $ || T,
									loading: r ? 'lazy' : void 0,
									onLoad: (n) => {
										K(!0), E && E(n);
									},
									onClick: (n) => J && J(n),
									onError: (n) => {
										(n.target.src = w || ''), j && j(n);
									},
									onMouseOver: (n) => {
										M && R(!0), U && U(n);
									},
									onMouseOut: (n) => {
										M && R(!1), x && x(n);
									},
									onPointerDown: (n) => {
										V && V(n);
									},
									onPointerMove: (n) => {
										X && X(n);
									},
									onPointerUp: (n) => {
										P && P(n);
									},
									onPointerLeave: (n) => {
										v && v(n);
									},
									draggable: q,
								}),
							}),
						});
					});
				e.d(m, ['_', 0, O, 't', 0, g]);
			},
			'./components/src/components/Molecules/Gallery/Gallery.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/compat/dist/compat.module.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					y = e.n(u),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(o),
					_ = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/components/Atoms/Button/Button.tsx'),
					F = e('./components/src/components/Atoms/Image/Image.tsx');
				const z = () =>
						(0, p.AH)({
							position: 'fixed',
							inset: 0,
							zIndex: 10010,
							display: 'flex',
							flexDirection: 'column',
							background: 'rgba(0, 0, 0, 0.9)',
							'& .ss__gallery__toolbar': { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', padding: '12px 16px' },
							'& .ss__gallery__button': {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 0,
								boxSizing: 'border-box',
								borderRadius: '4px',
								width: '40px',
								height: '40px',
								fontSize: '1.3em',
								lineHeight: 1,
								cursor: 'pointer',
								'&.ss__button--disabled': { opacity: 0.4, cursor: 'default' },
							},
							'& .ss__gallery__counter': { color: '#fff', marginRight: 'auto', padding: '0 8px', fontSize: '0.9em' },
							'& .ss__gallery__stage': {
								position: 'relative',
								flex: '1 1 auto',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								overflow: 'hidden',
							},
							'& .ss__gallery__image': {
								maxWidth: '90vw',
								maxHeight: '80vh',
								objectFit: 'contain',
								userSelect: 'none',
								touchAction: 'none',
								transformOrigin: 'center center',
								transition: 'transform 0.05s linear',
							},
							'& .ss__gallery__nav': {
								position: 'absolute',
								top: 0,
								bottom: 0,
								height: '100%',
								width: '64px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 0,
								boxSizing: 'border-box',
								borderRadius: 0,
								fontSize: '2em',
								lineHeight: 1,
								cursor: 'pointer',
								zIndex: 1,
								'&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.085))' },
							},
							'& .ss__gallery__nav--prev': { left: 0 },
							'& .ss__gallery__nav--next': { right: 0 },
						}),
					T = (0, d.PA)((A) => {
						const w = (0, i.u)(),
							M = { treePath: (0, b.LU)(), startIndex: 0, zoomMin: 1, zoomMax: 4, zoomStep: 0.5, swipeThreshold: 40 },
							r = (0, D.v6)('gallery', w, M, A),
							{ images: U, open: x, startIndex: j, onClose: E, alt: J, className: V, internalClassName: X } = r,
							P = r.zoomMin,
							v = r.zoomMax,
							Z = r.zoomStep,
							W = r.swipeThreshold,
							q = (s) => Math.min(v, Math.max(P, s)),
							[k, ee] = (0, a.J0)(j || 0),
							[L, K] = (0, a.J0)(P),
							[Y, R] = (0, a.J0)({ x: 0, y: 0 }),
							C = (0, a.li)(null),
							G = (0, a.li)(null),
							n = U?.length || 0,
							oe = {
								gallery: { attributes: { 'aria-label': 'Image gallery' } },
								zoomOutButton: { attributes: { 'aria-label': 'Zoom out' } },
								zoomInButton: { attributes: { 'aria-label': 'Zoom in' } },
								closeButton: { attributes: { 'aria-label': 'Close gallery' } },
								prevButton: { attributes: { 'aria-label': 'Previous image' } },
								nextButton: { attributes: { 'aria-label': 'Next image' } },
							},
							N = l()(oe, r.lang || {}),
							Q = (0, h.u)(N, {});
						(0, a.vJ)(() => {
							x && (ee(Math.min(Math.max(j || 0, 0), Math.max(n - 1, 0))), K(P), R({ x: 0, y: 0 }));
						}, [x, j, n]);
						const te = (s) => {
								if (n === 0) return;
								const B = (s + n) % n;
								ee(B), K(P), R({ x: 0, y: 0 });
							},
							H = () => te(k - 1),
							se = () => te(k + 1),
							ce = () => K((s) => q(s + Z)),
							ue = () =>
								K((s) => {
									const B = q(s - Z);
									return B === P && R({ x: 0, y: 0 }), B;
								});
						(0, a.vJ)(() => {
							if (!x) return;
							const s = (B) => {
								switch (B.key) {
									case 'Escape':
										E && E();
										break;
									case 'ArrowRight':
										se();
										break;
									case 'ArrowLeft':
										H();
										break;
									case '+':
									case '=':
										ce();
										break;
									case '-':
									case '_':
										ue();
										break;
								}
							};
							return window.addEventListener('keydown', s), () => window.removeEventListener('keydown', s);
						}, [x, k, n]);
						const ne = (0, a.li)(null),
							ae = (0, a.li)(null),
							re = (0, a.li)(!1);
						(0, a.vJ)(() => {
							const s = !!(x && n > 0);
							s && !re.current
								? ((ae.current = document.activeElement || null), (ne.current?.querySelector('.ss__gallery__close') || ne.current)?.focus())
								: !s && re.current && (ae.current?.focus?.(), (ae.current = null)),
								(re.current = s);
						});
						const pe = (0, O.Z)(r, z);
						if (!x || n === 0) return null;
						const ge = (s) => {
								L <= P ||
									(s.preventDefault(),
									s.currentTarget?.setPointerCapture?.(s.pointerId),
									(C.current = { startX: s.clientX, startY: s.clientY, baseX: Y.x, baseY: Y.y }));
							},
							_e = (s) => {
								C.current && R({ x: C.current.baseX + (s.clientX - C.current.startX), y: C.current.baseY + (s.clientY - C.current.startY) });
							},
							me = () => {
								C.current = null;
							},
							de = (s) => {
								s.target === s.currentTarget && E && E();
							},
							he = (s) => {
								s.touches && s.touches.length === 1 && (G.current = { x: s.touches[0].clientX, y: s.touches[0].clientY });
							},
							ye = (s) => {
								const B = G.current;
								if (((G.current = null), !B || L > P || n <= 1)) return;
								const le = s.changedTouches && s.changedTouches[0];
								if (!le) return;
								const ie = le.clientX - B.x,
									fe = le.clientY - B.y;
								Math.abs(ie) > W && Math.abs(ie) > Math.abs(fe) && (ie < 0 ? se() : H());
							},
							be = U[k];
						return (0, c.createPortal)(
							(0, t.Y)(_._, {
								children: (0, t.FD)('div', {
									...pe,
									className: y()('ss__gallery', V, X),
									role: 'dialog',
									'aria-modal': 'true',
									...Q.gallery?.attributes,
									ref: (s) => {
										(ne.current = s), (0, f.iy)(s, 0, !0, () => E && E());
									},
									onClick: de,
									children: [
										(0, t.FD)('div', {
											className: 'ss__gallery__toolbar',
											children: [
												n > 1 && (0, t.FD)('span', { className: 'ss__gallery__counter', children: [k + 1, ' / ', n] }),
												(0, t.Y)(I.$, {
													name: 'zoom-out',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-out',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'minus', color: 'currentColor' },
													lang: { button: N.zoomOutButton },
													disabled: L <= P,
													onClick: ue,
													theme: r.theme,
													treePath: r.treePath,
													...(0, g.s)({ disableStyles: r.disableStyles }),
												}),
												(0, t.Y)(I.$, {
													name: 'zoom-in',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-in',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'plus', color: 'currentColor' },
													lang: { button: N.zoomInButton },
													disabled: L >= v,
													onClick: ce,
													theme: r.theme,
													treePath: r.treePath,
													...(0, g.s)({ disableStyles: r.disableStyles }),
												}),
												(0, t.Y)(I.$, {
													name: 'close',
													internalClassName: 'ss__gallery__button ss__gallery__close',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'close', color: 'currentColor' },
													lang: { button: N.closeButton },
													onClick: () => E && E(),
													theme: r.theme,
													treePath: r.treePath,
													...(0, g.s)({ disableStyles: r.disableStyles }),
												}),
											],
										}),
										(0, t.FD)('div', {
											className: 'ss__gallery__stage',
											onClick: de,
											onTouchStart: he,
											onTouchEnd: ye,
											children: [
												n > 1 &&
													(0, t.Y)(I.$, {
														name: 'prev',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--prev',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-left', color: 'currentColor' },
														lang: { button: N.prevButton },
														onClick: H,
														theme: r.theme,
														treePath: r.treePath,
														...(0, g.s)({ disableStyles: r.disableStyles }),
													}),
												(0, t.Y)(F._, {
													internalClassName: 'ss__gallery__image',
													src: be,
													alt: J || '',
													draggable: !1,
													style: {
														transform: `translate(${Y.x}px, ${Y.y}px) scale(${L})`,
														cursor: L > P ? (C.current ? 'grabbing' : 'grab') : 'default',
													},
													onPointerDown: ge,
													onPointerMove: _e,
													onPointerUp: me,
													onPointerLeave: me,
													theme: r.theme,
													treePath: r.treePath,
													...(0, g.s)({ disableStyles: r.disableStyles }),
												}),
												n > 1 &&
													(0, t.Y)(I.$, {
														name: 'next',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--next',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-right', color: 'currentColor' },
														lang: { button: N.nextButton },
														onClick: se,
														theme: r.theme,
														treePath: r.treePath,
														...(0, g.s)({ disableStyles: r.disableStyles }),
													}),
											],
										}),
									],
								}),
							}),
							document.body
						);
					});
				e.d(m, ['Z', 0, T]);
			},
			'./components/src/hooks/useA11y.tsx'(S, m, e) {
				'use strict';
				e.d(m, { iy: () => p });
				const t = 9,
					c = 27,
					a = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(u, y, o, l) {
					const _ = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${_}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = _),
							(i.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					u &&
						!u.attributes?.[a] &&
						(u.setAttribute(a, !0),
						u.setAttribute('tabIndex', `${y || 0}`),
						u.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && i.target === u && u.click();
						}),
						o &&
							u.addEventListener('keydown', function (i) {
								const b = u.querySelectorAll(d),
									g = b[0],
									D = b[b.length - 1];
								if (i.keyCode == c) {
									u.focus(), l && l(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === t) &&
									(i.shiftKey
										? document.activeElement === g && (D.focus(), i.preventDefault())
										: document.activeElement === D && (g.focus(), i.preventDefault()));
							}));
				}
				e.d(m, ['DH', 0, d, 'aZ', 0, a]);
			},
			'./components/src/hooks/useLang.tsx'(S, m, e) {
				'use strict';
				const t = (c, a, d) => {
					const p = d ? { ...a, ...d } : a,
						u = {};
					return (
						Object.keys(c).forEach((y) => {
							const o = c && c[y],
								l = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (l.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: o.value(p) } })
										: (l.value = { 'ss-lang': y, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((l.attributes = { 'ss-lang': y }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = o.attributes['aria-label'](p))
											: (l.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](p))
											: (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (l.attributes.title = o.attributes.title(p))
											: (l.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (l.attributes.alt = o.attributes.alt(p)) : (l.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = o.attributes.placeholder(p))
											: (l.attributes.placeholder = o.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': y })),
								(u[y] = l);
						}),
						u
					);
				};
				e.d(m, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(S, m, e) {
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
				e.d(m, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(S, m, e) {
				'use strict';
				e.d(m, { s: () => t });
				function t(c) {
					const a = {};
					return (
						Object.keys(c).map((d) => {
							c[d] !== void 0 && (a[d] = c[d]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(S, m, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					d = (p) => {
						const u = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								u.current && p.className?.includes('lang-') && !p.className?.includes(a) && window?.Prism?.highlightElement(u.current);
							}, [p.className, p.children, u]),
							(0, t.Y)('code', { ...p, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(m, ['Z', 0, d]);
			},
			'../../node_modules/memoizerific sync recursive'(S) {
				function m(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(m.keys = () => []), (m.resolve = m), (m.id = '../../node_modules/memoizerific sync recursive'), (S.exports = m);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Gallery-Gallery-stories.acfa4ccc.iframe.bundle.js.map
