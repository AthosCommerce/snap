import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { Carousel, CarouselProps } from './Carousel';
import { componentArgs, Colour, highlightedCode } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/Carousel',
	component: Carousel,
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
		loop: {
			defaultValue: true,
			description: 'Carousel slides loop',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		pagination: {
			defaultValue: false,
			description: 'Configuration for pagination dots',
			table: {
				type: {
					summary: 'boolean | SwiperOptions.pagination',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		vertical: {
			defaultValue: false,
			description: 'Carousel vertical slide direction',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		modules: {
			description: 'Additional Swiper modules',
			table: {
				type: {
					summary: 'SwiperModule[]',
				},
				category: 'Templates Legal',
				defaultValue: { summary: '[Navigation, Pagination]' },
			},
			control: { type: 'none' },
		},
		hideButtons: {
			defaultValue: false,
			description: 'Hide prev/next buttons',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		prevButton: {
			description: 'Previous button',
			table: {
				type: {
					summary: 'string | JSX Element',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		nextButton: {
			description: 'Next button',
			table: {
				type: {
					summary: 'string | JSX Element',
				},
				category: 'Templates Legal',
			},
			control: { type: 'text' },
		},
		breakpoints: {
			defaultValue: undefined,
			description: 'Carousel breakpoints',
			table: {
				type: {
					summary: 'object',
				},
				defaultValue: { summary: 'Breakpoint object' },
			},
			control: { type: 'object' },
		},
		autoAdjustSlides: {
			defaultValue: false,
			description:
				'If true and children length is less than the current breakpoint slidesPerView value, slidesPerView and slidesPerGroup will be set to the children length and loop to false',
			table: {
				type: {
					summary: 'boolean',
				},
				category: 'Templates Legal',
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		onNextButtonClick: {
			description: 'Carousel next button click event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onNextButtonClick',
		},
		onPrevButtonClick: {
			description: 'Carousel prev button click event handler',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onPrevButtonClick',
		},
		onClick: {
			description: 'Carousel onClick event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onClick',
		},
		onInit: {
			description: 'Carousel onInit event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onInit',
		},
		...componentArgs,
	},
};

const count = 10;
const carouselStep = Math.floor(180 / count);
const colors = Array.from(Array(count).keys());
const color = new Colour('#00aeef');

export const Colors = (props: CarouselProps) => {
	return (
		<div style={{ maxWidth: '800px', height: props?.vertical ? '300px' : undefined }}>
			<Carousel {...props}>
				{colors.map((number, index) => (
					<div
						style={{
							height: props?.vertical ? '100%' : '100px',
							width: '100%',
							minHeight: '1px',
							minWidth: '1px',
							background: color.lighten(index * carouselStep).hex,
							margin: '0 auto',
						}}
					></div>
				))}
			</Carousel>
		</div>
	);
};
Colors.args = {
	pagination: true,
	hideButtons: true,
	loop: false,
};
