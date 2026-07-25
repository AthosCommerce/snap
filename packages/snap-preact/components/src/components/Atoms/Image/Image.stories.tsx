import { h } from 'preact';

import { Image, FALLBACK_IMAGE_URL, ImageProps } from './Image';
import { componentArgs } from '../../../utilities';

const searchResponse = {
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
};

import Readme from '../Image/readme.md';

export default {
	title: 'Atoms/Image',
	component: Image,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
		},
	},
	decorators: [
		(Story: any) => (
			<div
				style={{
					maxWidth: '300px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		src: {
			description: 'Image url',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		alt: {
			description: 'Image alt text',
			type: { required: true },
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		height: {
			description: 'Image height',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		fallback: {
			description: 'Fallback image url',
			defaultValue: FALLBACK_IMAGE_URL,
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
				defaultValue: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		lazy: {
			defaultValue: true,
			description: 'Image lazy loading',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		hoverSrc: {
			description: 'Image onHover url',
			table: {
				type: {
					summary: 'string',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		onError: {
			description: 'Image error event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onError',
		},
		onLoad: {
			description: 'Image loaded event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onLoad',
		},
		onClick: {
			description: 'Image click event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onClick',
		},
		onMouseOver: {
			description: 'Image mouse enter event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onMouseOver',
		},
		onMouseOut: {
			description: 'Image mouse exit event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onMouseOut',
		},
		...componentArgs,
	},
};

export const Default = {
	render: (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />,

	args: {
		src: searchResponse.product1.image,
		alt: searchResponse.product1.name,
	},
};

export const BrokenImg = {
	render: (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />,

	args: {
		src: 'intentionally_broken_image.jpg',
		alt: searchResponse.product1.name,
	},
};

export const ManualFallBack = {
	render: (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />,

	args: {
		src: 'intentionally_broken_image.jpg',
		alt: searchResponse.product1.name,
		fallback: searchResponse.product1.image,
	},
};

export const onhover = {
	render: (args: ImageProps) => <Image {...args} style={{ width: '100%' }} />,

	args: {
		src: searchResponse.product1.image,
		alt: searchResponse.product1.name,
		hoverSrc: searchResponse.product2.image,
	},
};
