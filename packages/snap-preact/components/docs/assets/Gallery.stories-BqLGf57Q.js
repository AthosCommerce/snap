import { s as o, l as u, j as t } from './iframe-Bc4KSH0T.js';
import { G as r } from './Gallery-CyOD8nQg.js';
import { c as h } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useLang-Dx66cFD0.js';
import './Button-C4cTOUHA.js';
import './useA11y-BuGQuOJb.js';
import './defined-CdKp_MB-.js';
import './Image-9Pub_w4s.js';
const b =
		'# Gallery\n\nRenders a fullscreen lightbox-style image gallery overlay with navigation, zoom controls, and keyboard/touch support. The gallery is portalled to `document.body` and renders above all other content.\n\n## Sub-components\n- Button\n\n## Usage\n\n```tsx\nimport { Gallery } from \'@athoscommerce/snap-preact/components\';\n```\n\n```tsx\n<Gallery images={imageUrls} open={isOpen} onClose={() => setIsOpen(false)} />\n```\n\n### images\nThe `images` prop accepts an array of image URL strings to display in the gallery. If the array is empty, the gallery is not rendered.\n\n```tsx\n<Gallery images={[\'img1.jpg\', \'img2.jpg\', \'img3.jpg\']} open={true} />\n```\n\n### open\nThe `open` prop controls the visibility of the gallery overlay.\n\n```tsx\n<Gallery images={imageUrls} open={true} />\n```\n\n### startIndex\nThe `startIndex` prop specifies which image to display when the gallery opens. Defaults to `0`.\n\n```tsx\n<Gallery images={imageUrls} open={true} startIndex={2} />\n```\n\n### onClose\nThe `onClose` prop is a callback invoked when the gallery is dismissed via the close button, the Escape key, or clicking the backdrop.\n\n```tsx\n<Gallery images={imageUrls} open={true} onClose={() => setIsOpen(false)} />\n```\n\n### alt\nThe `alt` prop provides alt text for the displayed image.\n\n```tsx\n<Gallery images={imageUrls} open={true} alt="Product image" />\n```\n\n### zoomMin\nThe `zoomMin` prop sets the minimum zoom level. Defaults to `1`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomMin={1} />\n```\n\n### zoomMax\nThe `zoomMax` prop sets the maximum zoom level. Defaults to `4`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomMax={6} />\n```\n\n### zoomStep\nThe `zoomStep` prop sets the zoom increment applied per zoom in/out action. Defaults to `0.5`.\n\n```tsx\n<Gallery images={imageUrls} open={true} zoomStep={1} />\n```\n\n### swipeThreshold\nThe `swipeThreshold` prop sets the number of pixels of horizontal touch travel required before a swipe navigates to the next or previous image. Defaults to `40`.\n\n```tsx\n<Gallery images={imageUrls} open={true} swipeThreshold={60} />\n```\n\n### lang\nThe `lang` prop customizes the accessible labels following the standard component lang pattern:\n\n- `gallery` — attributes for the dialog root (default `aria-label="Image gallery"`).\n- `zoomOutButton` — attributes for the zoom-out button (default `aria-label="Zoom out"`).\n- `zoomInButton` — attributes for the zoom-in button (default `aria-label="Zoom in"`).\n- `closeButton` — attributes for the close button (default `aria-label="Close gallery"`).\n- `prevButton` — attributes for the previous-image button (default `aria-label="Previous image"`).\n- `nextButton` — attributes for the next-image button (default `aria-label="Next image"`).\n\n```tsx\n<Gallery images={imageUrls} open={true} lang={{ gallery: { attributes: { \'aria-label\': \'Bildergalerie\' } } }} />\n```\n\n## Features\n\n### Keyboard Controls\n- **Escape** - Close the gallery\n- **ArrowLeft / ArrowRight** - Navigate between images\n- **+ / =** - Zoom in\n- **- / _** - Zoom out\n\n### Zoom\nZoom ranges from `zoomMin` (default 1x) to `zoomMax` (default 4x) in `zoomStep` (default 0.5x) increments. When zoomed in, drag-to-pan is enabled.\n\n### Touch Swipe\nOn mobile, dominantly-horizontal swipe gestures past `swipeThreshold` (default 40px) navigate between images when not zoomed in.\n\n### Wrap-around Navigation\nNavigation wraps around from the last image to the first and vice versa. The previous/next navigation buttons and the image counter are hidden when there is only one image.\n\n### Accessibility\nThe gallery root is a dialog (`role="dialog"`, `aria-modal="true"`) with a `useA11y` focus trap: `Tab`/`Shift+Tab` cycle within the gallery controls and `Escape` invokes `onClose`. On open, focus moves to the close button; on close, focus is restored to the previously focused element. Because the gallery portals to `document.body`, its trap operates independently of any surrounding dialog\'s trap (e.g. the quickview).\n',
	{ fn: f } = __STORYBOOK_MODULE_TEST__,
	C = {
		title: 'Molecules/Gallery',
		component: r,
		parameters: { docs: { description: { component: b } } },
		args: { onClose: f() },
		argTypes: {
			images: { description: 'Array of image URLs to display in the gallery', table: { type: { summary: 'string[]' } }, control: { type: 'object' } },
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
			...h,
		},
	},
	m = [
		'https://picsum.photos/800/600?random=1',
		'https://picsum.photos/800/600?random=2',
		'https://picsum.photos/800/600?random=3',
		'https://picsum.photos/800/600?random=4',
		'https://picsum.photos/800/600?random=5',
	],
	s = {
		render: (n) => {
			const [a, e] = o(!1);
			return u('div', { children: [t('button', { onClick: () => e(!0), children: 'Open Gallery' }), t(r, { ...n, open: a, onClose: () => e(!1) })] });
		},
		args: { images: m, startIndex: 0, alt: 'Gallery image' },
	},
	l = {
		render: (n) => {
			const [a, e] = o(!1);
			return u('div', {
				children: [t('button', { onClick: () => e(!0), children: 'Open at Image 3' }), t(r, { ...n, open: a, onClose: () => e(!1) })],
			});
		},
		args: { images: m, startIndex: 2, alt: 'Gallery image' },
	},
	i = {
		render: (n) => {
			const [a, e] = o(!1);
			return u('div', {
				children: [t('button', { onClick: () => e(!0), children: 'Open Single Image' }), t(r, { ...n, open: a, onClose: () => e(!1) })],
			});
		},
		args: { images: ['https://picsum.photos/800/600?random=10'], alt: 'Single gallery image' },
	},
	p = {
		render: (n) => {
			const [a, e] = o(!1),
				[d, c] = o(0);
			return u('div', {
				children: [
					t('div', {
						style: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
						children: m.map((y, g) =>
							t('img', {
								src: y,
								alt: `Thumbnail ${g + 1}`,
								style: { width: '100px', height: '75px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px' },
								onClick: () => {
									c(g), e(!0);
								},
							})
						),
					}),
					t(r, { ...n, images: m, open: a, startIndex: d, onClose: () => e(!1) }),
				],
			});
		},
		args: { alt: 'Product image' },
	};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: GalleryProps) => {
    const [open, setOpen] = useState(false);
    return <div>
                <button onClick={() => setOpen(true)}>Open Gallery</button>
                <Gallery {...args} open={open} onClose={() => setOpen(false)} />
            </div>;
  },
  args: {
    images: sampleImages,
    startIndex: 0,
    alt: 'Gallery image'
  }
}`,
			...s.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: GalleryProps) => {
    const [open, setOpen] = useState(false);
    return <div>
                <button onClick={() => setOpen(true)}>Open at Image 3</button>
                <Gallery {...args} open={open} onClose={() => setOpen(false)} />
            </div>;
  },
  args: {
    images: sampleImages,
    startIndex: 2,
    alt: 'Gallery image'
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
i.parameters = {
	...i.parameters,
	docs: {
		...i.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: GalleryProps) => {
    const [open, setOpen] = useState(false);
    return <div>
                <button onClick={() => setOpen(true)}>Open Single Image</button>
                <Gallery {...args} open={open} onClose={() => setOpen(false)} />
            </div>;
  },
  args: {
    images: ['https://picsum.photos/800/600?random=10'],
    alt: 'Single gallery image'
  }
}`,
			...i.parameters?.docs?.source,
		},
	},
};
p.parameters = {
	...p.parameters,
	docs: {
		...p.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: GalleryProps) => {
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
  },
  args: {
    alt: 'Product image'
  }
}`,
			...p.parameters?.docs?.source,
		},
	},
};
const k = ['Default', 'StartAtIndex', 'SingleImage', 'ThumbnailTrigger'];
export { s as Default, i as SingleImage, l as StartAtIndex, p as ThumbnailTrigger, k as __namedExportsOrder, C as default };
