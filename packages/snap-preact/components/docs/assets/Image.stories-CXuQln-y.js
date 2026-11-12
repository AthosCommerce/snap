import { j as s } from './iframe-0uTqSs9S.js';
import { F as g, I as r } from './Image-C3O8T0nj.js';
import { c as h } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const d =
		"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n```tsx\nimport { Image } from '@athoscommerce/snap-preact/components';\n```\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### title\nThe `title` prop specifies the image `title` attribute. If not provided, the `alt` prop value is used.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' title='image title' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifies the URL of the alternative image to display on hover.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### srcset\nThe `srcset` prop sets the image `srcset` attribute. It accepts either a `srcset` string, or a function that receives an image URL and returns the `srcset` for it.\n\nA string is set on the attribute as-is, and may use width (`w`) or pixel density (`x`) descriptors. While hovering it is removed so that the `hoverSrc` image is displayed.\n\n```tsx\n<Image\n	src={searchResponse.results.mappings.core.imageUrl}\n	srcset={`${searchResponse.results.mappings.core.thumbnailImageUrl} 400w, ${searchResponse.results.mappings.core.imageUrl} 1200w`}\n	sizes='auto, (max-width: 600px) 100vw, 400px'\n	alt='image'\n/>\n```\n\nA function is called with the `src`, and with the `hoverSrc` while hovering, so it can be set once through the theme - for example on the result image (`'result image'`). Platform packages provide helpers for their image CDN - for Shopify, use `shopifyImageSrcset` from `@athoscommerce/snap-platforms/shopify` to generate candidates at a list of widths.\n\n```tsx\nimport { shopifyImageSrcset } from '@athoscommerce/snap-platforms/shopify';\n\n<Image\n	src={searchResponse.results.mappings.core.imageUrl}\n	srcset={(src) => shopifyImageSrcset(src, [320, 640, 960, 1280])}\n	sizes='auto, (max-width: 600px) 100vw, 400px'\n	alt='image'\n/>\n```\n\nThe `src` is used by browsers that do not support `srcset`. If a `srcset` candidate fails to load, the `srcset` is removed so that the browser retries with the `src`, and it is not set again until the `src` changes. If that also fails, the `fallback` image is displayed.\n\n### sizes\nThe `sizes` prop sets the image `sizes` attribute - a comma-separated list of media conditions and the width the image will be displayed at when each condition matches. It is used by the browser to choose between `srcset` candidates that use width (`w`) descriptors. Without it, browsers assume the image is displayed at the full viewport width.\n\nStart the list with `auto` so that browsers that support it use the rendered width of the image to choose a candidate. `auto` only applies to lazy loaded images (see the `lazy` prop, enabled by default); the rest of the list is used otherwise.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} srcset={srcset} sizes='auto, (max-width: 600px) 100vw, 400px' alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### draggable\nThe `draggable` prop sets the `draggable` attribute on the image element.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} draggable={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onPointerDown\nThe `onPointerDown` prop allows for a custom callback function when a pointer becomes active on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerDown={(e)=>{console.log(e)}} />\n```\n\n#### onPointerMove\nThe `onPointerMove` prop allows for a custom callback function when a pointer moves over the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerMove={(e)=>{console.log(e)}} />\n```\n\n#### onPointerUp\nThe `onPointerUp` prop allows for a custom callback function when a pointer is released on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerUp={(e)=>{console.log(e)}} />\n```\n\n#### onPointerLeave\nThe `onPointerLeave` prop allows for a custom callback function when a pointer leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerLeave={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error. It is invoked for each failed load, so when a `srcset` candidate fails and the `src` is retried it may be called twice.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
	{ fn: t } = __STORYBOOK_MODULE_TEST__,
	a = {
		product1: {
			image:
				'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647.png?v=1747685130&width=1920',
			name: 'Align Hoodie',
		},
		product2: {
			image:
				'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Zip_Jacket_-_Black_74fc7521-257b-44bb-9908-97b105126ee7.png?v=1747685170&width=1920',
		},
	},
	u = (e) => [320, 640, 960, 1280, 1920].map((m) => `${e.replace(/width=\d+/, `width=${m}`)} ${m}w`).join(', '),
	v = {
		title: 'Atoms/Image',
		component: r,
		parameters: { docs: { description: { component: d } } },
		decorators: [(e) => s('div', { style: { maxWidth: '300px' }, children: s(e, {}) })],
		args: {
			onError: t(),
			onLoad: t(),
			onClick: t(),
			onMouseOver: t(),
			onMouseOut: t(),
			onPointerDown: t(),
			onPointerMove: t(),
			onPointerUp: t(),
			onPointerLeave: t(),
		},
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
			title: { description: 'Image title attribute', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			height: { description: 'Image height', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			fallback: {
				description: 'Fallback image url',
				defaultValue: g,
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: g } },
				control: { type: 'text' },
			},
			lazy: {
				defaultValue: !0,
				description: 'Image lazy loading',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			hoverSrc: { description: 'Image onHover url', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			srcset: {
				description: 'Image srcset attribute, or a function that builds it from the image url (src, or hoverSrc while hovering)',
				table: { type: { summary: 'string | function' }, category: 'Templates Legal' },
				control: !1,
			},
			sizes: { description: 'Image sizes attribute', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			draggable: {
				description: 'Image draggable attribute',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
				control: { type: 'boolean' },
			},
			onError: { description: 'Image error event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			onLoad: { description: 'Image loaded event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			onClick: { description: 'Image click event handler', table: { type: { summary: 'function' }, category: 'Templates Legal' }, control: !1 },
			onMouseOver: {
				description: 'Image mouse enter event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onMouseOut: {
				description: 'Image mouse exit event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: !1,
			},
			onPointerDown: {
				description: 'Image pointer down event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onPointerMove: {
				description: 'Image pointer move event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onPointerUp: {
				description: 'Image pointer up event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			onPointerLeave: {
				description: 'Image pointer leave event handler',
				table: { type: { summary: 'function' }, category: 'Templates Legal' },
				control: { type: 'none' },
			},
			...h,
		},
	},
	n = { render: (e) => s(r, { ...e, style: { width: '100%' } }), args: { src: a.product1.image, alt: a.product1.name } },
	o = { render: (e) => s(r, { ...e, style: { width: '100%' } }), args: { src: 'intentionally_broken_image.jpg', alt: a.product1.name } },
	i = {
		render: (e) => s(r, { ...e, style: { width: '100%' } }),
		args: { src: 'intentionally_broken_image.jpg', alt: a.product1.name, fallback: a.product1.image },
	},
	c = { render: (e) => s(r, { ...e, style: { width: '100%' } }), args: { src: a.product1.image, alt: a.product1.name, hoverSrc: a.product2.image } },
	l = {
		render: (e) => s(r, { ...e, style: { width: '100%' } }),
		args: { src: a.product1.image, srcset: u, sizes: 'auto, (max-width: 600px) 100vw, 300px', alt: a.product1.name, hoverSrc: a.product2.image },
	},
	p = {
		render: (e) => s(r, { ...e, style: { width: '100%' } }),
		args: {
			src: a.product1.image,
			srcset: 'intentionally_broken_candidate.jpg 320w',
			sizes: '300px',
			alt: a.product1.name,
			hoverSrc: a.product2.image,
		},
	};
n.parameters = {
	...n.parameters,
	docs: {
		...n.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: searchResponse.product1.image,
    alt: searchResponse.product1.name
  }
}`,
			...n.parameters?.docs?.source,
		},
	},
};
o.parameters = {
	...o.parameters,
	docs: {
		...o.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: 'intentionally_broken_image.jpg',
    alt: searchResponse.product1.name
  }
}`,
			...o.parameters?.docs?.source,
		},
	},
};
i.parameters = {
	...i.parameters,
	docs: {
		...i.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: 'intentionally_broken_image.jpg',
    alt: searchResponse.product1.name,
    fallback: searchResponse.product1.image
  }
}`,
			...i.parameters?.docs?.source,
		},
	},
};
c.parameters = {
	...c.parameters,
	docs: {
		...c.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: searchResponse.product1.image,
    alt: searchResponse.product1.name,
    hoverSrc: searchResponse.product2.image
  }
}`,
			...c.parameters?.docs?.source,
		},
	},
};
l.parameters = {
	...l.parameters,
	docs: {
		...l.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: searchResponse.product1.image,
    srcset: storySrcset,
    sizes: 'auto, (max-width: 600px) 100vw, 300px',
    alt: searchResponse.product1.name,
    hoverSrc: searchResponse.product2.image
  }
}`,
			...l.parameters?.docs?.source,
		},
	},
};
p.parameters = {
	...p.parameters,
	docs: {
		...p.parameters?.docs,
		source: {
			originalSource: `{
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: searchResponse.product1.image,
    srcset: 'intentionally_broken_candidate.jpg 320w',
    sizes: '300px',
    alt: searchResponse.product1.name,
    hoverSrc: searchResponse.product2.image
  }
}`,
			...p.parameters?.docs?.source,
		},
	},
};
const I = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover', 'Srcset', 'SrcsetRetry'];
export { o as BrokenImg, n as Default, i as ManualFallBack, l as Srcset, p as SrcsetRetry, I as __namedExportsOrder, v as default, c as onhover };
