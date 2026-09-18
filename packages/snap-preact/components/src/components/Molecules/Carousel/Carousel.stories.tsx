import { h } from 'preact';

import { Carousel, CarouselProps } from './Carousel';
import { componentArgs, Colour } from '../../../utilities';
import Readme from './readme.md';

export default {
	title: 'Molecules/Carousel',
	component: Carousel,
	parameters: {
		docs: {
			description: {
				component: Readme,
			},
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
		navigation: {
			defaultValue: true,
			description: 'Configuration for prev/next navigation; false removes the buttons from the DOM',
			table: {
				type: {
					summary: 'boolean | SwiperOptions.navigation',
				},
				category: 'Templates Legal',
				defaultValue: { summary: true },
			},
			control: { type: 'boolean' },
		},
		scrollbar: {
			defaultValue: false,
			description: 'Configuration for the scrollbar track',
			table: {
				type: {
					summary: 'boolean | SwiperOptions.scrollbar',
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
				defaultValue: { summary: '[Navigation, Pagination, Scrollbar, A11y]' },
			},
			control: false,
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
		slidesPerView: {
			description: 'Number of slides visible at once; overridden by breakpoints values when breakpoints are in use',
			table: {
				type: {
					summary: "number | 'auto'",
				},
				category: 'Templates Legal',
			},
			control: { type: 'number' },
		},
		autoAdjustSlides: {
			defaultValue: false,
			description:
				'If true and children length is less than the current breakpoint slidesPerView value, slidesPerView and slidesPerGroup will be set to the children length',
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
			control: false,
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
			control: false,
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
			control: false,
			action: 'onClick',
		},
		onBeforeInit: {
			description: 'Carousel onBeforeInit event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onBeforeInit',
		},
		onInit: {
			description: 'Carousel onInit event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: false,
			action: 'onInit',
		},
		onAfterInit: {
			description: 'Carousel onAfterInit event handler (Swiper)',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onAfterInit',
		},
		onResize: {
			description: 'Carousel onResize event handler (Swiper); receives no arguments',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onResize',
		},
		onTransitionEnd: {
			description: 'Carousel onTransitionEnd event handler (Swiper); receives no arguments',
			table: {
				type: {
					summary: 'function',
				},
				category: 'Templates Legal',
			},
			control: { type: 'none' },
			action: 'onTransitionEnd',
		},
		...componentArgs,
	},
};

const count = 10;
const carouselStep = Math.floor(180 / count);
const colors = Array.from(Array(count).keys());
const color = new Colour('#00aeef');

export const Colors = {
	render: (props: CarouselProps) => {
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
	},

	args: {
		pagination: true,
		hideButtons: true,
		loop: false,
	},
};
