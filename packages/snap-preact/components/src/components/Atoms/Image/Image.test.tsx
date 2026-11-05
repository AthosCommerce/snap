import { h } from 'preact';

import { ThemeProvider } from '../../../providers';
import { render, waitFor, fireEvent, act } from '@testing-library/preact';
import { observable } from 'mobx';

import { Image, FALLBACK_IMAGE_URL } from './Image';
import userEvent from '@testing-library/user-event';

import { MockData } from '@athoscommerce/snap-shared';
import { SearchResponseModel } from '@athoscommerce/snapi-types';

const mockData = new MockData();
const searchResponse: SearchResponseModel = mockData.search();

describe('image Component', () => {
	const result = searchResponse.results![1].mappings?.core;
	const badResult = searchResponse.results![0].mappings?.core;
	badResult!.imageUrl = '';
	badResult!.thumbnailImageUrl = '';
	const rolloverImage = searchResponse.results![2].mappings?.core?.thumbnailImageUrl;

	it('renders', () => {
		const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} />);
		const imageElement = rendered.container.querySelector('.ss__image img');
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
		expect(imageElement).toHaveAttribute('alt', result?.name);
		expect(imageElement).toHaveAttribute('title', result?.name);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Image className={className} alt={result?.name!} src={result?.thumbnailImageUrl!} />);
		const imageElement = rendered.container.querySelector('.ss__image');

		expect(imageElement).toHaveClass(className);
	});

	it('disables styles', () => {
		const rendered = render(<Image disableStyles alt={result?.name!} src={result?.thumbnailImageUrl!} />);
		const imageElement = rendered.container.querySelector('.ss__image');

		expect(imageElement?.classList).toHaveLength(2);
	});

	describe('Working Image', () => {
		it('renders image', () => {
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toBeInTheDocument();
			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
		});

		it('can set a custom height on the image', () => {
			const height = '300px';
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} height={height} />);
			const imageWrapperElement = rendered.container.querySelector('.ss__image');
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageWrapperElement).toBeInTheDocument();
			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
			const styles = getComputedStyle(imageWrapperElement!);
			expect(styles.height).toBe(height);
		});
	});

	describe('Broken Image', () => {
		it('should display default fallback image', () => {
			const rendered = render(<Image alt={badResult?.name!} src={badResult?.thumbnailImageUrl!} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
		});

		it('should display custom fallback image', () => {
			const fallbackImage = 'https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200';
			const rendered = render(<Image alt={badResult?.name!} src={badResult?.thumbnailImageUrl!} fallback={fallbackImage} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toHaveAttribute('src', fallbackImage);
		});
	});

	describe('hover src', () => {
		it('should change src on hover & run a custom onhoverfunc prop', async () => {
			const onHoverFunc = jest.fn();
			const rendered = render(<Image alt={badResult?.name!} onMouseOver={onHoverFunc} src={result?.thumbnailImageUrl!} hoverSrc={rolloverImage} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
			await userEvent.hover(imageElement);
			await waitFor(() => expect(onHoverFunc).toHaveBeenCalled());
			expect(imageElement).toHaveAttribute('src', rolloverImage);
		});
	});

	describe('srcset and sizes', () => {
		const srcset = `${result?.thumbnailImageUrl} 1x, ${result?.imageUrl} 2x`;
		const hoverSrcset = `${rolloverImage} 1x`;
		const sizes = '(max-width: 600px) 100vw, 300px';

		it('does not render srcset or sizes attributes when not provided', () => {
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).not.toHaveAttribute('srcset');
			expect(imageElement).not.toHaveAttribute('sizes');
		});

		it('renders srcset and sizes attributes', () => {
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} srcset={srcset} sizes={sizes} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
			expect(imageElement).toHaveAttribute('srcset', srcset);
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('swaps srcset for hoverSrcset on hover and restores it on mouse out', async () => {
			const rendered = render(
				<Image
					alt={result?.name!}
					src={result?.thumbnailImageUrl!}
					srcset={srcset}
					sizes={sizes}
					hoverSrc={rolloverImage}
					hoverSrcset={hoverSrcset}
				/>
			);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute('srcset', srcset);

			await userEvent.hover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', rolloverImage));
			expect(imageElement).toHaveAttribute('srcset', hoverSrcset);
			expect(imageElement).toHaveAttribute('sizes', sizes);

			await userEvent.unhover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl));
			expect(imageElement).toHaveAttribute('srcset', srcset);
		});

		it('removes srcset on hover when hoverSrcset is not provided so hoverSrc is displayed', async () => {
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} srcset={srcset} hoverSrc={rolloverImage} />);
			const imageElement = rendered.container.querySelector('.ss__image img')! as HTMLImageElement;
			expect(imageElement).toHaveAttribute('srcset', srcset);

			await userEvent.hover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', rolloverImage));
			expect(imageElement.srcset).toBe('');
		});

		it('retries with src when a srcset candidate fails to load', () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} srcset={srcset} sizes={sizes} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute('srcset', srcset);

			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(1);
			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
			expect(imageElement).not.toHaveAttribute('srcset');
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('displays the fallback when src also fails to load after the srcset retry', () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} srcset={srcset} sizes={sizes} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(2);
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
			expect(imageElement).not.toHaveAttribute('srcset');
		});

		it('displays the fallback on the first error when there is no srcset', () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(1);
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
		});

		describe('array of widths', () => {
			const src = 'https://cdn.example.com/image.jpg?v=123';
			const hoverSrc = 'https://cdn.example.com/hover.jpg';

			it('generates width descriptor candidates from src using the width query parameter', () => {
				const rendered = render(<Image alt="image" src={src} srcset={[320, 640]} sizes={sizes} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('src', src);
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/image.jpg?v=123&width=320 320w, https://cdn.example.com/image.jpg?v=123&width=640 640w'
				);
				expect(imageElement).toHaveAttribute('sizes', sizes);
			});

			it('adds a query string when src has none', () => {
				const rendered = render(<Image alt="image" src="https://cdn.example.com/image.jpg" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?width=320 320w');
			});

			it('replaces an existing width query parameter and keeps other parameters', () => {
				const rendered = render(<Image alt="image" src="https://cdn.example.com/image.jpg?width=1920&v=123&crop=center" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?v=123&crop=center&width=320 320w');
			});

			it('preserves a hash fragment', () => {
				const rendered = render(<Image alt="image" src="https://cdn.example.com/image.jpg?v=123#top" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?v=123&width=320#top 320w');
			});

			it('supports protocol relative urls', () => {
				const rendered = render(<Image alt="image" src="//cdn.example.com/image.jpg" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', '//cdn.example.com/image.jpg?width=320 320w');
			});

			it('encodes whitespace in candidate urls', () => {
				const rendered = render(<Image alt="image" src="https://cdn.example.com/Blue Shirt.jpg" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/Blue%20Shirt.jpg?width=320 320w');
			});

			it('coerces numeric string widths from loosely typed config', () => {
				const rendered = render(<Image alt="image" src={src} srcset={['320', '640'] as any} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/image.jpg?v=123&width=320 320w, https://cdn.example.com/image.jpg?v=123&width=640 640w'
				);
			});

			it('uses a custom buildSrcsetUrl function', () => {
				const buildSrcsetUrl = jest.fn((src: string, width: number) => src.replace('/images/', `/images/${width}w/`));
				const rendered = render(
					<Image alt="image" src="https://cdn.example.com/images/image.jpg" srcset={[320, 640]} buildSrcsetUrl={buildSrcsetUrl} />
				);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(buildSrcsetUrl).toHaveBeenCalledWith('https://cdn.example.com/images/image.jpg', 320);
				expect(buildSrcsetUrl).toHaveBeenCalledWith('https://cdn.example.com/images/image.jpg', 640);
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/images/320w/image.jpg 320w, https://cdn.example.com/images/640w/image.jpg 640w'
				);
			});

			it('uses the custom buildSrcsetUrl function for hoverSrc', async () => {
				const buildSrcsetUrl = (src: string, width: number) => `${src}?w=${width}`;
				const rendered = render(
					<Image alt="image" src="https://cdn.example.com/image.jpg" srcset={[320]} hoverSrc={hoverSrc} buildSrcsetUrl={buildSrcsetUrl} />
				);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?w=320 320w');

				await userEvent.hover(imageElement);
				await waitFor(() => expect(imageElement).toHaveAttribute('src', hoverSrc));
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/hover.jpg?w=320 320w');
			});

			it('can set buildSrcsetUrl through the theme', () => {
				const globalTheme = {
					components: {
						image: {
							buildSrcsetUrl: (src: string, width: number) => `${src}?w=${width}`,
						},
					},
				};
				const rendered = render(
					<ThemeProvider theme={globalTheme}>
						<Image alt="image" src="https://cdn.example.com/image.jpg" srcset={[320]} />
					</ThemeProvider>
				);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?w=320 320w');
			});

			it('updates when an observable widths array from the theme changes in place', async () => {
				const globalTheme = observable({ components: { image: { srcset: [320] } } });
				const rendered = render(
					<ThemeProvider theme={globalTheme}>
						<Image alt="image" src="https://cdn.example.com/image.jpg" />
					</ThemeProvider>
				);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/image.jpg?width=320 320w');

				act(() => {
					globalTheme.components.image.srcset.push(640);
				});
				await waitFor(() =>
					expect(imageElement).toHaveAttribute(
						'srcset',
						'https://cdn.example.com/image.jpg?width=320 320w, https://cdn.example.com/image.jpg?width=640 640w'
					)
				);
			});

			it('ignores invalid and duplicate widths', () => {
				const rendered = render(<Image alt="image" src={src} srcset={[320, 320, 0, -100, 640.5, 640]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/image.jpg?v=123&width=320 320w, https://cdn.example.com/image.jpg?v=123&width=640 640w'
				);
			});

			it('does not render srcset when no widths are valid', () => {
				const rendered = render(<Image alt="image" src={src} srcset={[]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).not.toHaveAttribute('srcset');
			});

			it('does not render srcset when src is empty and the fallback is displayed', () => {
				const rendered = render(<Image alt="image" src="" srcset={[320]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
				expect(imageElement).not.toHaveAttribute('srcset');
			});

			it('applies the same widths to hoverSrc on hover when hoverSrcset is not provided', async () => {
				const rendered = render(<Image alt="image" src={src} srcset={[320, 640]} hoverSrc={hoverSrc} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/image.jpg?v=123&width=320 320w, https://cdn.example.com/image.jpg?v=123&width=640 640w'
				);

				await userEvent.hover(imageElement);
				await waitFor(() => expect(imageElement).toHaveAttribute('src', hoverSrc));
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/hover.jpg?width=320 320w, https://cdn.example.com/hover.jpg?width=640 640w'
				);

				await userEvent.unhover(imageElement);
				await waitFor(() => expect(imageElement).toHaveAttribute('src', src));
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/image.jpg?v=123&width=320 320w, https://cdn.example.com/image.jpg?v=123&width=640 640w'
				);
			});

			it('uses hoverSrcset widths on hover when provided', async () => {
				const rendered = render(<Image alt="image" src={src} srcset={[320, 640]} hoverSrc={hoverSrc} hoverSrcset={[100]} />);
				const imageElement = rendered.container.querySelector('.ss__image img')!;

				await userEvent.hover(imageElement);
				await waitFor(() => expect(imageElement).toHaveAttribute('src', hoverSrc));
				expect(imageElement).toHaveAttribute('srcset', 'https://cdn.example.com/hover.jpg?width=100 100w');
			});
		});
	});

	describe('click func', () => {
		it('custom onclick src on hover', async () => {
			const clickfunc = jest.fn();

			const rendered = render(<Image alt={badResult?.name!} src={result?.thumbnailImageUrl!} onClick={clickfunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			expect(imageElement).toHaveAttribute('src', result?.thumbnailImageUrl);
			await userEvent.click(imageElement);
			expect(clickfunc).toHaveBeenCalled();
		});
	});
});

describe('Image theming works', () => {
	const result = searchResponse.results![0].mappings?.core;

	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Image alt={result?.name!} src={result?.thumbnailImageUrl!} />
			</ThemeProvider>
		);
		const image = rendered.container.querySelector('.ss__image');
		expect(image).toBeInTheDocument();
		expect(image?.classList.length).toBe(2);
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(<Image alt={result?.name!} src={result?.thumbnailImageUrl!} theme={propTheme} />);
		const image = rendered.container.querySelector('.ss__image');
		expect(image).toBeInTheDocument();
		expect(image?.classList.length).toBe(2);
	});

	it('is theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				image: {
					disableStyles: false,
				},
			},
		};
		const propTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Image alt={result?.name!} src={result?.thumbnailImageUrl!} theme={propTheme} />
			</ThemeProvider>
		);

		const image = rendered.container.querySelector('.ss__image');
		expect(image).toBeInTheDocument();
		expect(image?.classList.length).toBe(2);
	});
});
