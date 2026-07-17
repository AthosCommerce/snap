import { h } from 'preact';
import { useState } from 'preact/hooks';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Gallery, GalleryProps } from './Gallery';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/Gallery',
	component: Gallery,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	argTypes: {
		images: {
			description: 'Array of image URLs to display in the gallery',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string[]',
				},
			},
			control: { type: 'object' },
		},
		open: {
			description: 'Controls visibility of the gallery overlay',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		startIndex: {
			description: 'Index of the image to display when the gallery opens',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 0 },
			},
			control: { type: 'number', min: 0 },
		},
		onClose: {
			description: 'Callback invoked when the gallery is closed',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'function',
				},
			},
			control: { type: 'none' },
			action: 'onClose',
		},
		alt: {
			description: 'Alt text applied to the displayed image',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'text' },
		},
		zoomMin: {
			description: 'Minimum zoom level',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 1 },
			},
			control: { type: 'number', min: 0.1, step: 0.1 },
		},
		zoomMax: {
			description: 'Maximum zoom level',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 4 },
			},
			control: { type: 'number', min: 0.1, step: 0.1 },
		},
		zoomStep: {
			description: 'Zoom increment applied per zoom in/out action',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 0.5 },
			},
			control: { type: 'number', min: 0.1, step: 0.1 },
		},
		swipeThreshold: {
			description: 'Pixels of horizontal touch travel required before a swipe paginates',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 40 },
			},
			control: { type: 'number', min: 0 },
		},
		lang: {
			description:
				'Custom language keys for the accessible labels (`gallery`, `zoomOutButton`, `zoomInButton`, `closeButton`, `prevButton`, `nextButton`)',
			table: {
				type: {
					summary: 'Partial<GalleryLang>',
				},
			},
			control: { type: 'object' },
		},
		...componentArgs,
	},
};

const sampleImages = [
	'https://picsum.photos/800/600?random=1',
	'https://picsum.photos/800/600?random=2',
	'https://picsum.photos/800/600?random=3',
	'https://picsum.photos/800/600?random=4',
	'https://picsum.photos/800/600?random=5',
];

export const Default = (args: GalleryProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpen(true)}>Open Gallery</button>
			<Gallery {...args} open={open} onClose={() => setOpen(false)} />
		</div>
	);
};
Default.args = {
	images: sampleImages,
	startIndex: 0,
	alt: 'Gallery image',
};

export const StartAtIndex = (args: GalleryProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpen(true)}>Open at Image 3</button>
			<Gallery {...args} open={open} onClose={() => setOpen(false)} />
		</div>
	);
};
StartAtIndex.args = {
	images: sampleImages,
	startIndex: 2,
	alt: 'Gallery image',
};

export const SingleImage = (args: GalleryProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpen(true)}>Open Single Image</button>
			<Gallery {...args} open={open} onClose={() => setOpen(false)} />
		</div>
	);
};
SingleImage.args = {
	images: ['https://picsum.photos/800/600?random=10'],
	alt: 'Single gallery image',
};

export const ThumbnailTrigger = (args: GalleryProps) => {
	const [open, setOpen] = useState(false);
	const [startIndex, setStartIndex] = useState(0);

	return (
		<div>
			<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
				{sampleImages.map((src, i) => (
					<img
						src={src}
						alt={`Thumbnail ${i + 1}`}
						style={{ width: '100px', height: '75px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px' }}
						onClick={() => {
							setStartIndex(i);
							setOpen(true);
						}}
					/>
				))}
			</div>
			<Gallery {...args} images={sampleImages} open={open} startIndex={startIndex} onClose={() => setOpen(false)} />
		</div>
	);
};
ThumbnailTrigger.args = {
	alt: 'Product image',
};
