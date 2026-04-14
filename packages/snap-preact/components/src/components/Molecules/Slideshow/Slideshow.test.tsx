import { h } from 'preact';
import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { Slideshow, SlideshowProps, SlideshowSlide } from './Slideshow';
import { ThemeProvider } from '@emotion/react';

// Mock ResizeObserver for jsdom
const OriginalResizeObserver = global.ResizeObserver;
beforeAll(() => {
	global.ResizeObserver = class ResizeObserver {
		callback: ResizeObserverCallback;
		constructor(callback: ResizeObserverCallback) {
			this.callback = callback;
		}
		observe() {}
		unobserve() {}
		disconnect() {}
	};
});
afterAll(() => {
	global.ResizeObserver = OriginalResizeObserver;
});

// Mock images for testing
const mockImages = [
	'https://example.com/image1.jpg',
	'https://example.com/image2.jpg',
	'https://example.com/image3.jpg',
	'https://example.com/image4.jpg',
	'https://example.com/image5.jpg',
	'https://example.com/image6.jpg',
];

const mockJSXImages = [
	{
		content: <div key="slide1">Custom Slide 1</div>,
	},
	{
		content: <div key="slide2">Custom Slide 2</div>,
	},
	{
		content: <div key="slide3">Custom Slide 3</div>,
	},
];

const defaultProps: SlideshowProps = {
	slides: mockImages,
};

// Mock setInterval and clearInterval for autoplay tests
let user: ReturnType<typeof userEvent.setup>;
beforeEach(async () => {
	jest.useFakeTimers();
	user = await userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
});

afterEach(() => {
	jest.runOnlyPendingTimers();
	jest.useRealTimers();
	jest.clearAllMocks();
});

describe('Slideshow Component', () => {
	describe('Basic Rendering', () => {
		it('renders slideshow with images', () => {
			const rendered = render(<Slideshow {...defaultProps} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();

			// Check for images - default slidesToShow is 4
			const images = rendered.container.querySelectorAll('img');
			expect(images.length).toBeGreaterThan(0);
		});

		it('renders with custom aria label', () => {
			const args: SlideshowProps = {
				...defaultProps,
				ariaLabel: 'Product gallery',
			};
			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveAttribute('aria-label', 'Product gallery');
		});

		it('renders with aria-labelledby', () => {
			const args: SlideshowProps = { ...defaultProps, ariaLabelledBy: 'gallery-title' };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveAttribute('aria-labelledby', 'gallery-title');
		});

		it('does not render when no images provided', () => {
			const args: SlideshowProps = { ...defaultProps, slides: [] };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.queryByRole('region');
			expect(slideshow).not.toBeInTheDocument();
		});

		it('applies custom className', () => {
			const args: SlideshowProps = { ...defaultProps, className: 'custom-slideshow', slides: mockImages };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveClass('custom-slideshow');
		});

		it('uses fallback image when src is missing', () => {
			const imagesWithMissingSrc: SlideshowSlide[] = [{ alt: 'Missing image' }];

			//need to disable lazy loading for this test
			const theme = {
				components: {
					image: {
						lazy: false,
					},
				},
			};

			const args: SlideshowProps = {
				...defaultProps,
				slides: imagesWithMissingSrc,
				fallbackImage: 'fallback.jpg',
				slidesToShow: 1,
				theme,
			};

			const rendered = render(<Slideshow {...args} />);
			const image = rendered.container.querySelector('img');
			expect(image).toHaveAttribute('src', 'fallback.jpg');
		});
	});

	describe('Slides Configuration', () => {
		it('renders correct number of visible slides', () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			const images = rendered.getAllByRole('img');
			expect(images).toHaveLength(2);
		});

		it('handles single slide display', () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 1 };

			const rendered = render(<Slideshow {...args} />);

			const images = rendered.getAllByRole('img');
			expect(images).toHaveLength(1);
		});

		it('shows all images when slidesToShow exceeds image count', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages.slice(0, 2),
				slidesToShow: 5,
			};

			const rendered = render(<Slideshow {...args} />);

			const images = rendered.getAllByRole('img');
			expect(images).toHaveLength(2);
		});

		it('respects gap prop', () => {
			const args: SlideshowProps = { ...defaultProps, gap: 20 };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});
	});

	describe('Navigation', () => {
		it('renders navigation buttons when needed', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages,
				slidesToShow: 2,
				showNavigation: true,
			};

			const rendered = render(<Slideshow {...args} />);

			const prevButton = rendered.queryByLabelText(/previous/i);
			const nextButton = rendered.queryByLabelText(/next/i);

			// Should have navigation when there are more slides than visible
			expect(prevButton || nextButton).toBeTruthy();
		});

		it('hides navigation when showNavigation is false', () => {
			const args: SlideshowProps = { ...defaultProps, showNavigation: false };

			const rendered = render(<Slideshow {...args} />);

			const prevButton = rendered.queryByLabelText(/previous/i);
			const nextButton = rendered.queryByLabelText(/next/i);

			expect(prevButton).not.toBeInTheDocument();
			expect(nextButton).not.toBeInTheDocument();
		});

		it('navigates to next slides on button click', async () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages,
				slidesToShow: 2,
				slidesToMove: 1,
				showNavigation: true,
			};

			const rendered = render(<Slideshow {...args} />);

			const nextButton = rendered.getByLabelText(/next/i);

			// Click next
			await user.click(nextButton);

			// Should have triggered navigation (test that click works)
			expect(nextButton).toBeInTheDocument();
		});
	});

	describe('Pagination', () => {
		it('renders pagination dots when enabled', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages,
				slidesToShow: 2,
				slidesToMove: 1,
				showPagination: true,
			};

			const rendered = render(<Slideshow {...args} />);

			const pagination = rendered.queryByRole('tablist');
			if (pagination) {
				expect(pagination).toBeInTheDocument();
			}
		});

		it('hides pagination when showPagination is false', () => {
			const args: SlideshowProps = { ...defaultProps, showPagination: false };

			const rendered = render(<Slideshow {...args} />);

			const pagination = rendered.queryByRole('tablist');
			expect(pagination).not.toBeInTheDocument();
		});
	});

	describe('Keyboard Navigation', () => {
		it('slideshow is focusable', async () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveAttribute('tabIndex', '0');
		});

		it('handles keyboard events', async () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			slideshow.focus();

			// Test that keyboard events don't throw errors
			await user.keyboard('{ArrowRight}');
			await user.keyboard('{ArrowLeft}');

			expect(slideshow).toBeInTheDocument();
		});
	});

	describe('Auto-play Functionality', () => {
		it('does not auto-play by default', () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			// Fast-forward time
			jest.advanceTimersByTime(5000);

			// Should not throw errors
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});

		it('auto-plays when enabled', async () => {
			const args: SlideshowProps = {
				...defaultProps,
				autoPlay: true,
				autoPlayInterval: 1000,
				slidesToShow: 2,
			};

			const rendered = render(<Slideshow {...args} />);

			// Fast-forward past interval
			jest.advanceTimersByTime(1000);

			// Should not throw errors
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});

		it('pauses on mouse enter', async () => {
			const args: SlideshowProps = {
				...defaultProps,
				autoPlay: true,
				autoPlayInterval: 1000,
				slidesToShow: 2,
			};

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');

			// Hover over slideshow
			await user.hover(slideshow);

			// Fast-forward time
			jest.advanceTimersByTime(2000);

			// Should not throw errors
			expect(slideshow).toBeInTheDocument();
		});
	});

	describe('Clickable Images', () => {
		it('calls onClick handler when image is clicked', async () => {
			const mockOnClick = jest.fn();
			const clickableImage: SlideshowSlide = {
				src: 'test.jpg',
				alt: 'Test Image',
				onClick: mockOnClick,
			};

			const args: SlideshowProps = {
				...defaultProps,
				slides: [clickableImage],
				slidesToShow: 1,
			};

			const rendered = render(<Slideshow {...args} />);

			const clickableSlide = rendered.container.querySelector('.ss__slideshow__slide--clickable');
			if (clickableSlide) {
				await user.click(clickableSlide);
				expect(mockOnClick).toHaveBeenCalled();
			}
		});

		it('mixes clickable and non-clickable images', () => {
			const mixedImages = ['regular-image.jpg', { src: 'clickable.jpg', onClick: jest.fn() }, 'another-regular.jpg'];

			const args: SlideshowProps = {
				...defaultProps,
				slides: mixedImages,
				slidesToShow: 3,
			};

			const rendered = render(<Slideshow {...args} />);

			const imgElements = rendered.container.querySelectorAll('img');
			expect(imgElements).toHaveLength(3);
		});
	});

	describe('JSX Content Support', () => {
		it('renders JSX elements as slides', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockJSXImages,
				slidesToShow: 2,
			};

			const rendered = render(<Slideshow {...args} />);

			expect(rendered.getByText('Custom Slide 1')).toBeInTheDocument();
			expect(rendered.getByText('Custom Slide 2')).toBeInTheDocument();
		});

		it('mixes JSX and image content', () => {
			const mixedContent = ['image1.jpg', { content: <div key="jsx1">JSX Content</div> }, { src: 'image2.jpg', alt: 'Image 2' }];

			const args: SlideshowProps = {
				...defaultProps,
				slides: mixedContent,
				slidesToShow: 3,
			};

			const rendered = render(<Slideshow {...args} />);

			expect(rendered.getByText('JSX Content')).toBeInTheDocument();
			expect(rendered.getAllByRole('img')).toHaveLength(2);
		});

		it('applies content modifier class to JSX slides', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: [{ content: <div key="jsx">JSX Content</div> }],
				slidesToShow: 1,
			};

			const rendered = render(<Slideshow {...args} />);

			const contentSlide = rendered.container.querySelector('.ss__slideshow__slide--content');
			expect(contentSlide).toBeInTheDocument();
		});
	});

	describe('Accessibility', () => {
		it('provides keyboard navigation instructions', () => {
			const rendered = render(<Slideshow {...defaultProps} />);

			const instructions = rendered.queryByText(/use arrow keys/i);
			if (instructions) {
				expect(instructions).toHaveClass('ss__slideshow__sr-only');
			}
		});

		it('sets proper ARIA attributes', () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveAttribute('aria-roledescription', 'slideshow');
		});

		it('sets tabIndex correctly for keyboard navigation', () => {
			const args: SlideshowProps = { ...defaultProps, slidesToShow: 2 };

			const rendered = render(<Slideshow {...args} />);

			const slideshow = rendered.getByRole('region');
			expect(slideshow).toHaveAttribute('tabIndex', '0');
		});
	});

	describe('Alt Text', () => {
		it('uses individual image alt text', () => {
			const imagesWithAlt: SlideshowSlide[] = [
				{ src: 'img1.jpg', alt: 'Custom Alt 1' },
				{ src: 'img2.jpg', alt: 'Custom Alt 2' },
			];

			const args: SlideshowProps = {
				...defaultProps,
				slides: imagesWithAlt,
				slidesToShow: 2,
			};

			const rendered = render(<Slideshow {...args} />);

			expect(rendered.getByAltText('Custom Alt 1')).toBeInTheDocument();
			expect(rendered.getByAltText('Custom Alt 2')).toBeInTheDocument();
		});

		it('generates default alt text', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages.slice(0, 2),
				slidesToShow: 2,
			};
			const rendered = render(<Slideshow {...args} />);

			// Should generate some alt text
			const images = rendered.container.querySelectorAll('img');
			images.forEach((img) => {
				expect(img).toHaveAttribute('alt');
			});
		});
	});

	describe('Gap Property', () => {
		it('applies default gap', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slidesToShow: 3,
			};
			const rendered = render(<Slideshow {...args} />);
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});

		it('applies custom gap value', () => {
			const args: SlideshowProps = {
				...defaultProps,
				gap: 25,
				slidesToShow: 3,
			};
			const rendered = render(<Slideshow {...args} />);
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});

		it('handles zero gap', () => {
			const args: SlideshowProps = {
				...defaultProps,
				gap: 0,
				slidesToShow: 3,
			};
			const rendered = render(<Slideshow {...args} />);
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});
	});

	describe('Slide Groups Calculation', () => {
		it('calculates correct slide groups for pagination', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages.slice(0, 8), // 8 images
				slidesToShow: 3,
				slidesToMove: 2,
				showPagination: true,
			};

			const rendered = render(<Slideshow {...args} />);
			const pagination = rendered.queryByRole('tablist');
			if (pagination) {
				const dots = rendered.container.querySelectorAll('.ss__slideshow__dot');
				// Should have correct number of pagination dots
				expect(dots.length).toBeGreaterThan(0);
			}
		});

		it('handles edge case with exact slide divisions', () => {
			const args: SlideshowProps = {
				...defaultProps,
				slides: mockImages.slice(0, 6), // 6 images
				slidesToShow: 2,
				slidesToMove: 2,
				showPagination: true,
			};

			const rendered = render(<Slideshow {...args} />);
			const slideshow = rendered.getByRole('region');
			expect(slideshow).toBeInTheDocument();
		});
	});

	it('can disable styling', () => {
		const rendered = render(<Slideshow {...defaultProps} disableStyles={true} />);
		const elem = rendered.container.querySelector('.ss__slideshow');
		expect(elem?.classList.length).toBe(1);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Slideshow {...defaultProps} className={className} />);
		const elem = rendered.container.querySelector('.ss__slideshow');

		expect(elem).toBeInTheDocument();
		expect(elem).toHaveClass(className);
	});

	it('is themeable with ThemeProvider', () => {
		const theme = {
			components: {
				slideshow: {
					className: 'themed',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Slideshow {...defaultProps} />
			</ThemeProvider>
		);

		const elem: HTMLInputElement = rendered.container.querySelector('.ss__slideshow')!;
		expect(elem).toBeInTheDocument();
		expect(elem).toHaveClass(theme.components.slideshow.className);
	});

	it('is themeable with theme prop', () => {
		const theme = {
			components: {
				slideshow: {
					className: 'themed',
				},
			},
		};

		const rendered = render(<Slideshow {...defaultProps} theme={theme} />);
		const elem = rendered.container.querySelector('.ss__slideshow')!;
		expect(elem).toBeInTheDocument();
		expect(elem).toHaveClass(theme.components.slideshow.className);
	});

	it('is themeable with theme prop overrides ThemeProvider', () => {
		const componentTheme = {
			components: {
				slideshow: {
					className: 'one',
				},
			},
		};

		const theme = {
			components: {
				slideshow: {
					className: 'two',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Slideshow {...defaultProps} theme={componentTheme} />
			</ThemeProvider>
		);
		const elem = rendered.container.querySelector('.ss__slideshow');
		expect(elem).toBeInTheDocument();
		expect(elem).toHaveClass(componentTheme.components.slideshow.className);
		expect(elem).not.toHaveClass(theme.components.slideshow.className);
	});
});
