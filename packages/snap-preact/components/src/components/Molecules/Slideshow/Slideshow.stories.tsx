import { h } from 'preact';
import { ArgsTable, Markdown, PRIMARY_STORY } from '@storybook/addon-docs';
import { Slideshow, SlideshowProps } from './Slideshow';
import { componentArgs, highlightedCode } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/Slideshow',
	component: Slideshow,
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
	decorators: [
		(Story: any) => (
			<div style={{ maxWidth: '750px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		slides: {
			description: 'Array of slides to display in the slideshow',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string[] | SlideshowImage[]',
				},
			},
			control: { type: 'object' },
		},
		fallbackImage: {
			description: 'Specifies a default image URL to display when an image fails to load',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '//cdn.athoscommerce.net/snap/images/fallback.png' },
			},
			control: { type: 'text' },
		},
		autoPlay: {
			description: 'Enable automatic slideshow progression',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		autoPlayInterval: {
			description: 'Time in milliseconds between auto-play transitions',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 3000 },
			},
			control: { type: 'number', min: 1000, max: 10000, step: 500 },
		},
		showNavigation: {
			description: 'Show previous/next navigation buttons',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		overlayNavigation: {
			description: 'Controls if the previous/next navigation buttons should overlay the images or render outside of them',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		showPagination: {
			description: 'Show pagination dots at bottom',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		loop: {
			description: 'Allow continuous looping of slides',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		alwaysShowNavigation: {
			description:
				'Always show navigation buttons even when slides count is below slidesPerView threshold. Useful for maintaining consistent layout in product card grids.',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		centerInsufficientSlides: {
			description: 'Center slides when there are fewer slides than slidesPerView',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		slidesToShow: {
			description: 'Number of slides visible at once',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 4 },
			},
			control: { type: 'number', min: 1, max: 8, step: 1 },
		},
		slideWidth: {
			description: 'Width of each slide in Number of px',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
			},
			control: { type: 'number' },
		},
		slidesToMove: {
			description: 'Number of slides to move on each navigation',
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'number',
				},
				defaultValue: { summary: 1 },
			},
			control: { type: 'number', min: 1, max: 4, step: 1 },
		},
		touchDragging: {
			description: 'Controls if the slideshow should have drag navigation enabled',
			table: {
				category: 'Templates Legal',
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		dragThreshold: {
			description: 'Sets the drag sensitivity in pixels',
			table: {
				category: 'Templates Legal',
				type: { summary: 'number' },
				defaultValue: { summary: 50 },
			},
			control: { type: 'number', min: 0, step: 10 },
		},
		slideImageAlt: {
			description: 'Provides default alt text for images, which will be appended with the image number for accessibility',
			table: {
				category: 'Templates Legal',
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		ariaLabel: {
			description: 'Provides an accessible label for the entire slideshow component',
			table: {
				category: 'Templates Legal',
				type: { summary: 'string' },
				defaultValue: { summary: '"slideshow"' },
			},
			control: { type: 'text' },
		},
		ariaLabelledBy: {
			description: 'References the ID of an element that labels the slideshow',
			table: {
				category: 'Templates Legal',
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		gap: {
			description: 'Sets the spacing between slides in pixels',
			table: {
				category: 'Templates Legal',
				type: { summary: 'number' },
				defaultValue: { summary: 10 },
			},
			control: { type: 'number', min: 0, step: 1 },
		},
		...componentArgs,
	},
};

// Sample image URLs for stories
const sampleImages = [
	'https://picsum.photos/400/300?random=1',
	'https://picsum.photos/400/300?random=2',
	'https://picsum.photos/400/300?random=3',
	'https://picsum.photos/400/300?random=4',
	'https://picsum.photos/400/300?random=5',
	'https://picsum.photos/400/300?random=6',
	'https://picsum.photos/400/300?random=7',
	'https://picsum.photos/400/300?random=8',
];

export const Default = (args: SlideshowProps) => <Slideshow {...args} />;
Default.args = {
	slides: sampleImages,
};

export const AutoPlay = (args: SlideshowProps) => <Slideshow {...args} />;
AutoPlay.args = {
	slides: sampleImages,
	slidesToShow: 3,
	slidesToMove: 1,
	autoPlay: true,
	autoPlayInterval: 2000,
};

export const Loop = (args: SlideshowProps) => <Slideshow {...args} />;
Loop.args = {
	slides: sampleImages,
	slidesToShow: 2,
	slidesToMove: 1,
	loop: true,
};

export const NoNavigation = (args: SlideshowProps) => <Slideshow {...args} />;
NoNavigation.args = {
	slides: sampleImages,
	slidesToShow: 3,
	showNavigation: false,
};

export const ClickableSlides = (args: SlideshowProps) => <Slideshow {...args} />;
ClickableSlides.args = {
	slides: [
		{
			src: 'https://picsum.photos/400/300?random=10',
			alt: 'Premium Headphones',
			productId: 'headphones-001',
			price: '$299.99',
			onClick: (image: any) => {
				console.log('Product clicked:', image);
				alert(`Opening product details for ${image.alt}\nPrice: ${image.price}\nProduct ID: ${image.productId}`);
			},
		},
		{
			src: 'https://picsum.photos/400/300?random=11',
			alt: 'Wireless Speaker',
			productId: 'speaker-002',
			price: '$199.99',
			onClick: (image: any) => {
				alert(`Adding ${image.alt} to cart\nPrice: ${image.price}`);
			},
		},
		{
			src: 'https://picsum.photos/400/300?random=12',
			alt: 'Smart Watch',
			productId: 'watch-003',
			price: '$399.99',
			onClick: (image: any) => {
				alert(`Quick view: ${image.alt}\nPrice: ${image.price}\nWould open product modal here`);
			},
		},
		{
			src: 'https://picsum.photos/400/300?random=13',
			alt: 'Laptop Stand',
			productId: 'stand-004',
			price: '$89.99',
			onClick: (image: any) => {
				alert(`${image.alt} details:\nPrice: ${image.price}\nClick tracked for analytics`);
			},
		},
	],
	slidesToShow: 2,
	slidesToMove: 1,
};
