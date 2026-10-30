import { j as o } from './iframe-U9T2Y9ZS.js';
import { F as i, I as r } from './Image-C5uuJXju.js';
import { c as m } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
const p =
		"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n```tsx\nimport { Image } from '@athoscommerce/snap-preact/components';\n```\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### draggable\nThe `draggable` prop sets the `draggable` attribute on the image element.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} draggable={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onPointerDown\nThe `onPointerDown` prop allows for a custom callback function when a pointer becomes active on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerDown={(e)=>{console.log(e)}} />\n```\n\n#### onPointerMove\nThe `onPointerMove` prop allows for a custom callback function when a pointer moves over the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerMove={(e)=>{console.log(e)}} />\n```\n\n#### onPointerUp\nThe `onPointerUp` prop allows for a custom callback function when a pointer is released on the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerUp={(e)=>{console.log(e)}} />\n```\n\n#### onPointerLeave\nThe `onPointerLeave` prop allows for a custom callback function when a pointer leaves the image.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onPointerLeave={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```tsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
	{ fn: a } = __STORYBOOK_MODULE_TEST__,
	n = {
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
	y = {
		title: 'Atoms/Image',
		component: r,
		parameters: { docs: { description: { component: p } } },
		decorators: [(e) => o('div', { style: { maxWidth: '300px' }, children: o(e, {}) })],
		args: {
			onError: a(),
			onLoad: a(),
			onClick: a(),
			onMouseOver: a(),
			onMouseOut: a(),
			onPointerDown: a(),
			onPointerMove: a(),
			onPointerUp: a(),
			onPointerLeave: a(),
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
			height: { description: 'Image height', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
			fallback: {
				description: 'Fallback image url',
				defaultValue: i,
				table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'string' } },
				control: { type: 'text' },
			},
			lazy: {
				defaultValue: !0,
				description: 'Image lazy loading',
				table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			hoverSrc: { description: 'Image onHover url', table: { type: { summary: 'string' }, category: 'Templates Legal' }, control: { type: 'text' } },
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
			...m,
		},
	},
	t = { render: (e) => o(r, { ...e, style: { width: '100%' } }), args: { src: n.product1.image, alt: n.product1.name } },
	s = { render: (e) => o(r, { ...e, style: { width: '100%' } }), args: { src: 'intentionally_broken_image.jpg', alt: n.product1.name } },
	l = {
		render: (e) => o(r, { ...e, style: { width: '100%' } }),
		args: { src: 'intentionally_broken_image.jpg', alt: n.product1.name, fallback: n.product1.image },
	},
	c = { render: (e) => o(r, { ...e, style: { width: '100%' } }), args: { src: n.product1.image, alt: n.product1.name, hoverSrc: n.product2.image } };
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
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
			...t.parameters?.docs?.source,
		},
	},
};
s.parameters = {
	...s.parameters,
	docs: {
		...s.parameters?.docs,
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
  render: (args: ImageProps) => <Image {...args} style={{
    width: '100%'
  }} />,
  args: {
    src: 'intentionally_broken_image.jpg',
    alt: searchResponse.product1.name,
    fallback: searchResponse.product1.image
  }
}`,
			...l.parameters?.docs?.source,
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
const f = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover'];
export { s as BrokenImg, t as Default, l as ManualFallBack, f as __namedExportsOrder, y as default, c as onhover };
