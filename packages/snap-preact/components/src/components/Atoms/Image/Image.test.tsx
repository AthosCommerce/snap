import { h } from 'preact';

import { ThemeProvider } from '../../../providers';
import { render, waitFor, fireEvent } from '@testing-library/preact';

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
		const src = 'https://cdn.example.com/image.jpg';
		const hoverSrc = 'https://cdn.example.com/hover.jpg';
		const srcset = `${src} 1x, https://cdn.example.com/image@2x.jpg 2x`;
		const sizes = '(max-width: 600px) 100vw, 300px';
		const srcsetFunction = (url: string) => `${url}?width=320 320w, ${url}?width=640 640w`;

		it('does not render srcset or sizes attributes when not provided', () => {
			const rendered = render(<Image alt="image" src={src} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).not.toHaveAttribute('srcset');
			expect(imageElement).not.toHaveAttribute('sizes');
		});

		it('renders srcset and sizes attributes', () => {
			const rendered = render(<Image alt="image" src={src} srcset={srcset} sizes={sizes} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute('src', src);
			expect(imageElement).toHaveAttribute('srcset', srcset);
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('removes a srcset string on hover so hoverSrc is displayed, and restores it on mouse out', async () => {
			const rendered = render(<Image alt="image" src={src} srcset={srcset} sizes={sizes} hoverSrc={hoverSrc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')! as HTMLImageElement;
			expect(imageElement).toHaveAttribute('srcset', srcset);

			await userEvent.hover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', hoverSrc));
			expect(imageElement.srcset).toBe('');
			expect(imageElement).toHaveAttribute('sizes', sizes);

			await userEvent.unhover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', src));
			expect(imageElement).toHaveAttribute('srcset', srcset);
		});

		it('calls a srcset function with src and renders the result', () => {
			const srcsetMock = jest.fn(srcsetFunction);
			const rendered = render(<Image alt="image" src={src} srcset={srcsetMock} sizes={sizes} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(srcsetMock).toHaveBeenCalledWith(src);
			expect(imageElement).toHaveAttribute('src', src);
			expect(imageElement).toHaveAttribute(
				'srcset',
				'https://cdn.example.com/image.jpg?width=320 320w, https://cdn.example.com/image.jpg?width=640 640w'
			);
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('applies a srcset function to hoverSrc on hover, and restores it on mouse out', async () => {
			const rendered = render(<Image alt="image" src={src} srcset={srcsetFunction} hoverSrc={hoverSrc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

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
				'https://cdn.example.com/image.jpg?width=320 320w, https://cdn.example.com/image.jpg?width=640 640w'
			);
		});

		it('does not render srcset when a srcset function returns an empty value', () => {
			const rendered = render(<Image alt="image" src={src} srcset={() => ''} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).not.toHaveAttribute('srcset');
		});

		it('does not call the srcset function or render srcset when src is empty and the fallback is displayed', () => {
			const srcsetMock = jest.fn(srcsetFunction);
			const rendered = render(<Image alt="image" src="" srcset={srcsetMock} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(srcsetMock).not.toHaveBeenCalled();
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
			expect(imageElement).not.toHaveAttribute('srcset');
		});

		it('can set a srcset function and sizes through the theme', () => {
			const globalTheme = {
				components: {
					image: {
						srcset: srcsetFunction,
						sizes,
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Image alt="image" src={src} />
				</ThemeProvider>
			);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute(
				'srcset',
				'https://cdn.example.com/image.jpg?width=320 320w, https://cdn.example.com/image.jpg?width=640 640w'
			);
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('sets the loading attribute before src so that auto in sizes applies to lazy images', () => {
			const rendered = render(<Image alt="image" src={src} srcset={srcset} sizes={`auto, ${sizes}`} />);
			const attributeNames = rendered.container.querySelector('.ss__image img')!.getAttributeNames();
			expect(attributeNames[0]).toBe('loading');
			expect(attributeNames.indexOf('loading')).toBeLessThan(attributeNames.indexOf('src'));
		});

		it('sets the srcset again after a failure when src changes from empty', async () => {
			const rendered = render(<Image alt="image" src="" srcset={srcset} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;
			expect(imageElement).toHaveAttribute('srcset', srcset);

			fireEvent.error(imageElement);
			await waitFor(() => expect(imageElement).not.toHaveAttribute('srcset'));

			rendered.rerender(<Image alt="image" src={src} srcset={srcset} />);
			await waitFor(() => expect(imageElement).toHaveAttribute('srcset', srcset));
			expect(imageElement).toHaveAttribute('src', src);
		});

		it('retries with src when a srcset candidate fails to load', async () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt="image" src={src} srcset={srcset} sizes={sizes} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(1);
			await waitFor(() => expect(imageElement).not.toHaveAttribute('srcset'));
			expect(imageElement).toHaveAttribute('src', src);
			expect(imageElement).toHaveAttribute('sizes', sizes);
		});

		it('does not set a failed srcset again after hovering', async () => {
			const rendered = render(<Image alt="image" src={src} srcset={srcset} hoverSrc={hoverSrc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')! as HTMLImageElement;

			fireEvent.error(imageElement);
			await waitFor(() => expect(imageElement).not.toHaveAttribute('srcset'));

			await userEvent.hover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', hoverSrc));
			await userEvent.unhover(imageElement);
			await waitFor(() => expect(imageElement).toHaveAttribute('src', src));
			expect(imageElement.srcset).toBe('');
		});

		it('sets the srcset again after a failure when src changes', async () => {
			const newSrc = 'https://cdn.example.com/new.jpg';
			const rendered = render(<Image alt="image" src={src} srcset={srcsetFunction} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			await waitFor(() => expect(imageElement).not.toHaveAttribute('srcset'));

			rendered.rerender(<Image alt="image" src={newSrc} srcset={srcsetFunction} />);
			await waitFor(() =>
				expect(imageElement).toHaveAttribute(
					'srcset',
					'https://cdn.example.com/new.jpg?width=320 320w, https://cdn.example.com/new.jpg?width=640 640w'
				)
			);
		});

		it('displays the fallback when src also fails to load after the srcset retry', async () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt="image" src={src} srcset={srcset} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			await waitFor(() => expect(imageElement).not.toHaveAttribute('srcset'));
			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(2);
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
			expect(imageElement).not.toHaveAttribute('srcset');
		});

		it('displays the fallback on the first error when there is no srcset', () => {
			const onErrorFunc = jest.fn();
			const rendered = render(<Image alt="image" src={src} onError={onErrorFunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img')!;

			fireEvent.error(imageElement);
			expect(onErrorFunc).toHaveBeenCalledTimes(1);
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
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
