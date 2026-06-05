import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { observable } from 'mobx';

// Mock the Carousel molecule so these tests assert ProductQuickview's carousel-vs-single-image
// decision without depending on Swiper rendering in jsdom (the real Carousel suite is disabled
// for that reason). The mock renders its children directly inside a tagged wrapper.
jest.mock('../Carousel', () => {
	const { h: hh } = require('preact');
	return {
		Carousel: ({ children, className }: any) => hh('div', { className: `ss__carousel-mock ${className || ''}` }, children),
	};
});

// Mock VariantSelection to capture the `type` ProductQuickview passes (swatches vs dropdown)
// without rendering the heavy real Swatches/Dropdown atoms.
jest.mock('../VariantSelection', () => {
	const { h: hh } = require('preact');
	return {
		VariantSelection: ({ selection, type }: any) =>
			hh('div', { className: 'ss__variant-selection-mock', 'data-field': selection?.field, 'data-type': type ?? '' }),
	};
});

// Mock OverlayBadge to a simple wrapper so we can assert whether the media is wrapped
// (badges enabled) without standing up a full meta/badges fixture.
jest.mock('../OverlayBadge', () => {
	const { h: hh } = require('preact');
	return {
		OverlayBadge: ({ children }: any) => hh('div', { className: 'ss__overlay-badge-mock' }, children),
	};
});

import { ProductQuickview } from './ProductQuickview';

function makeController(overrides: any = {}) {
	const close = jest.fn();
	const controller: any = {
		store: {
			quickview: {
				isOpen: false,
				product: undefined,
				loading: false,
				config: undefined,
				error: undefined,
			},
		},
		closeQuickView: close,
		...overrides,
	};
	return { controller, close };
}

describe('ProductQuickview', () => {
	it('renders nothing visible when closed', () => {
		const { controller } = makeController();
		const rendered = render(<ProductQuickview controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();
	});

	it('renders the product name, image, and attributes when open', () => {
		const product = {
			mappings: { core: { name: 'Widget', thumbnailImageUrl: 'http://example.com/widget.jpg' } },
			attributes: { color: 'red', size: 'M' },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product } },
		});

		const rendered = render(<ProductQuickview controller={controller} />);

		expect(rendered.getByText('Widget')).toBeInTheDocument();
		const img = rendered.container.querySelector('img.ss__product-quickview__image') as HTMLImageElement | null;
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe('http://example.com/widget.jpg');
		expect(rendered.getByText('color')).toBeInTheDocument();
		expect(rendered.getByText('red')).toBeInTheDocument();
		expect(rendered.getByText('size')).toBeInTheDocument();
		expect(rendered.getByText('M')).toBeInTheDocument();
	});

	it('invokes controller.closeQuickView when the close button is clicked', () => {
		const product = { mappings: { core: { name: 'Widget' } }, attributes: {} };
		const { controller, close } = makeController({
			store: { quickview: { isOpen: true, product } },
		});

		const rendered = render(<ProductQuickview controller={controller} />);
		const closeButton = rendered.container.querySelector('.ss__product-quickview__close') as HTMLElement;
		expect(closeButton).not.toBeNull();
		closeButton.click();

		expect(close).toHaveBeenCalledTimes(1);
	});

	it('does not open when result prop is provided and store product has a different id', () => {
		const storeProduct = { id: 'other', mappings: { core: { name: 'Other' } }, attributes: {} };
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// Quickview is open in the store, but for a different product — this instance should stay closed.
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();
	});

	it('opens when result prop is provided and matches the store product id', () => {
		const storeProduct = { id: 'mine', mappings: { core: { name: 'Mine' } }, attributes: { size: 'M' } };
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.container.querySelector('.ss__product-quickview__content')).not.toBeNull();
		expect(rendered.getByText('Mine')).toBeInTheDocument();
	});

	it('renders a loading indicator when store.quickview.loading is true', () => {
		// During loading the store holds the source result as `product` (set by setLoading),
		// which is how the modal scopes to this result before the clone is built.
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: true,
					product: { id: 'mine', mappings: { core: {} }, attributes: {} },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.container.querySelector('.ss__product-quickview__loading')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__product-quickview__title')).toBeNull();
	});

	it('filters attributes by displayFields', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: { color: 'red', size: 'M' },
		};
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: storeProduct,
					config: { displayFields: ['size'] },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.getByText('size')).toBeInTheDocument();
		expect(rendered.getByText('M')).toBeInTheDocument();
		expect(rendered.queryByText('color')).toBeNull();
		expect(rendered.queryByText('red')).toBeNull();
	});

	it('renders the field label from meta.facets[field].label instead of the field name', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: { color: 'red', size: 'M' },
		};
		const { controller } = makeController({
			store: {
				meta: {
					data: {
						facets: {
							size: { label: 'Size' },
							color: { label: 'Color' },
						},
					},
				},
				quickview: {
					isOpen: true,
					loading: false,
					product: storeProduct,
					config: { displayFields: ['size', 'color'] },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// Pretty labels are rendered…
		expect(rendered.getByText('Size')).toBeInTheDocument();
		expect(rendered.getByText('Color')).toBeInTheDocument();
		// …and the raw field names are not.
		expect(rendered.queryByText('size')).toBeNull();
		expect(rendered.queryByText('color')).toBeNull();
	});

	it('falls back to the field name when meta has no label for a field', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: { sku: 'ABC-123' },
		};
		const { controller } = makeController({
			store: {
				meta: { data: { facets: {} } },
				quickview: {
					isOpen: true,
					loading: false,
					product: storeProduct,
					config: { displayFields: ['sku'] },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.getByText('sku')).toBeInTheDocument();
		expect(rendered.getByText('ABC-123')).toBeInTheDocument();
	});

	it('joins array attribute values with commas', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: { tags: ['new', 'sale', 'featured'] },
		};
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: storeProduct,
					config: { displayFields: ['tags'] },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.getByText('new, sale, featured')).toBeInTheDocument();
	});

	it('joins MobX observable array attribute values with commas (Array.isArray returns false for these)', () => {
		// Under real MobX wrapping the attribute value is an `observable.array(...)`, which is a
		// proxy that `Array.isArray()` does NOT recognise — confirm the fallback to
		// `isObservableArray` + Array.from still produces a comma-separated string.
		const observableTags = observable.array(['new', 'sale', 'featured']);
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: { tags: observableTags },
		};
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: storeProduct,
					config: { displayFields: ['tags'] },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.getByText('new, sale, featured')).toBeInTheDocument();
	});

	it('mounts during error state for the scoped result (source product retained)', () => {
		// On error the store still holds the source result as `product` (setLoading set it,
		// update never replaced it), so the modal scoped to that Result mounts and shows the
		// error message — while a Result scoped to a different id stays closed.
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: { id: 'mine', mappings: { core: {} }, attributes: {} },
					error: { message: 'Failed to display quickview' },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;
		const otherResult = { id: 'other', mappings: {}, attributes: {} } as any;

		const matching = render(<ProductQuickview controller={controller} result={myResult} />);
		expect(matching.container.querySelector('.ss__product-quickview__error')).not.toBeNull();

		const mismatched = render(<ProductQuickview controller={controller} result={otherResult} />);
		expect(mismatched.container.querySelector('.ss__product-quickview__error')).toBeNull();
	});

	it('renders the error message when quickview.error is set', () => {
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: { id: 'mine', mappings: { core: {} }, attributes: {} },
					error: { message: 'Failed to display quickview' },
				},
			},
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const errorEl = rendered.container.querySelector('.ss__product-quickview__error');
		expect(errorEl).not.toBeNull();
		expect(errorEl!.textContent).toBe('Failed to display quickview');
		// Loading and product branches must NOT render.
		expect(rendered.container.querySelector('.ss__product-quickview__loading')).toBeNull();
		expect(rendered.container.querySelector('.ss__product-quickview__title')).toBeNull();
	});

	it('renders a carousel when the configured imagesField resolves to multiple images', () => {
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: {
					name: 'Mine',
					imageUrl: 'http://example.com/main.jpg',
					images: ['http://example.com/a.jpg', 'http://example.com/b.jpg', 'http://example.com/c.jpg'],
				},
			},
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		// One slide image per URL in the list.
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(3);
	});

	it('reads imagesField from attributes when not present on mappings.core', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: { gallery: ['http://example.com/a.jpg', 'http://example.com/b.jpg'] },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'gallery' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(2);
	});

	it('coerces a MobX observable array of images into carousel slides', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: observable.array(['http://example.com/a.jpg', 'http://example.com/b.jpg']) } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(2);
	});

	it('falls back to the single image when imagesField resolves to a single image', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', images: ['http://example.com/only.jpg'] } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('img.ss__product-quickview__image') as HTMLImageElement | null;
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it("defaults to the 'images' field when no imagesField is configured", () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', images: ['http://example.com/a.jpg', 'http://example.com/b.jpg'] } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// No imagesField configured → default candidate 'images' has >1 → carousel.
		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(2);
	});

	it("defaults to the 'ss_images' field when no imagesField is configured and 'images' is absent", () => {
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', ss_images: ['http://example.com/a.jpg', 'http://example.com/b.jpg'] },
			},
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(2);
	});

	it('accepts an array of candidate field names and uses the first that has multiple images', () => {
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: {
					name: 'Mine',
					imageUrl: 'http://example.com/main.jpg',
					primaryImages: ['http://example.com/only.jpg'], // single → skipped
					gallery: ['http://example.com/a.jpg', 'http://example.com/b.jpg', 'http://example.com/c.jpg'],
				},
			},
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: ['primaryImages', 'gallery'] } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		// 'primaryImages' has only 1 → skipped; 'gallery' has 3 → used.
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(3);
	});

	it('renders the single image when neither the configured nor default image fields have multiple images', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// No images/ss_images present → no carousel, single core image only.
		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('img.ss__product-quickview__image') as HTMLImageElement | null;
		expect(img!.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it("auto-detects the '|' delimiter when imagesField resolves to a pipe-delimited string", () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: 'http://example.com/a.jpg|http://example.com/b.jpg|http://example.com/c.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('img.ss__product-quickview__image')).toHaveLength(3);
	});

	it('auto-detects a comma delimiter and trims whitespace around parts', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: 'http://example.com/a.jpg, http://example.com/b.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const imgs = rendered.container.querySelectorAll('.ss__product-quickview__carousel img.ss__product-quickview__image');
		expect(imgs).toHaveLength(2);
		// Whitespace around the comma-split parts is trimmed.
		expect(imgs[1].getAttribute('src')).toBe('http://example.com/b.jpg');
	});

	it('uses the explicitly configured imagesDelimiter over auto-detection', () => {
		// The string contains commas inside each URL's query params; splitting on ',' would be wrong.
		// An explicit '|' delimiter splits correctly.
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: 'http://example.com/a.jpg?s=1,2|http://example.com/b.jpg?s=3,4' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images', imagesDelimiter: '|' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const imgs = rendered.container.querySelectorAll('.ss__product-quickview__carousel img.ss__product-quickview__image');
		expect(imgs).toHaveLength(2);
		expect(imgs[0].getAttribute('src')).toBe('http://example.com/a.jpg?s=1,2');
		expect(imgs[1].getAttribute('src')).toBe('http://example.com/b.jpg?s=3,4');
	});

	it('treats a single undelimited string as one image (no carousel)', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', images: 'http://example.com/only.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// One image after splitting → fall back to the single core image.
		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('img.ss__product-quickview__image') as HTMLImageElement | null;
		expect(img!.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it('lays out the image in the media column and the rest in the details column', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: { color: 'red' },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const media = rendered.container.querySelector('.ss__product-quickview__media');
		const details = rendered.container.querySelector('.ss__product-quickview__details');
		expect(media).not.toBeNull();
		expect(details).not.toBeNull();
		// Image lives in the media column…
		expect(media!.querySelector('img.ss__product-quickview__image')).not.toBeNull();
		// …and the title, attributes table, and add-to-cart live in the details column.
		expect(details!.querySelector('.ss__product-quickview__title')).not.toBeNull();
		expect(details!.querySelector('.ss__product-quickview__attributes')).not.toBeNull();
		expect(details!.querySelector('.ss__product-quickview__add-to-cart')).not.toBeNull();
		// Image is NOT in the details column.
		expect(details!.querySelector('img.ss__product-quickview__image')).toBeNull();
	});

	it('renders an Add to Cart button that calls controller.addToCart with the product', () => {
		const addToCart = jest.fn();
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			addToCart,
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const button = rendered.container.querySelector('.ss__product-quickview__add-to-cart') as HTMLElement;
		expect(button).not.toBeNull();
		button.click();

		expect(addToCart).toHaveBeenCalledTimes(1);
		expect(addToCart).toHaveBeenCalledWith([storeProduct]);
	});

	it('renders the description from mappings.core.description', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', description: '<p>A great product.</p>' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const desc = rendered.container.querySelector('.ss__product-quickview__description');
		expect(desc).not.toBeNull();
		expect(desc!.innerHTML).toContain('A great product.');
	});

	it('omits the description block when mappings.core.description is absent', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.container.querySelector('.ss__product-quickview__description')).toBeNull();
	});

	it('passes type="swatches" to VariantSelection when the selection type is swatches', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
			variants: { selections: [{ field: 'color', type: 'swatches', values: [], select: () => undefined }] },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const vs = rendered.container.querySelector('.ss__variant-selection-mock[data-field="color"]');
		expect(vs).not.toBeNull();
		expect(vs!.getAttribute('data-type')).toBe('swatches');
	});

	it('passes type="dropdown" to VariantSelection when the selection type is dropdown', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
			variants: { selections: [{ field: 'size', type: 'dropdown', values: [], select: () => undefined }] },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const vs = rendered.container.querySelector('.ss__variant-selection-mock[data-field="size"]');
		expect(vs!.getAttribute('data-type')).toBe('dropdown');
	});

	it('leaves type unset on VariantSelection when the selection has no type', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
			variants: { selections: [{ field: 'color', values: [], select: () => undefined }] },
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const vs = rendered.container.querySelector('.ss__variant-selection-mock[data-field="color"]');
		// Empty data-type → ProductQuickview passed `undefined`, letting VariantSelection default.
		expect(vs!.getAttribute('data-type')).toBe('');
	});

	it('renders the variant title as the field label only (no selected value appended)', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
			variants: {
				selections: [{ field: 'color', label: 'Color', type: 'swatches', selected: { value: 'Indigo' }, values: [], select: () => undefined }],
			},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const title = rendered.container.querySelector('.ss__product-quickview__variant-title');
		expect(title).not.toBeNull();
		// Only the label — the selected value is not appended.
		expect(title!.textContent).toBe('Color');
	});

	it('falls back to the field name for the variant title when no label is set', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
			variants: {
				selections: [{ field: 'color', type: 'swatches', values: [], select: () => undefined }],
			},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const title = rendered.container.querySelector('.ss__product-quickview__variant-title');
		expect(title!.textContent).toBe('color');
	});

	it('renders the price via the Price component from core mappings', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', price: 20 } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const pricing = rendered.container.querySelector('.ss__product-quickview__pricing');
		expect(pricing).not.toBeNull();
		// Price atom renders a .ss__price element with the formatted value.
		expect(pricing!.querySelector('.ss__price')).not.toBeNull();
		expect(pricing!.textContent).toContain('20');
	});

	it('renders a struck msrp alongside the sale price when on sale', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', price: 15, msrp: 20 } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const pricing = rendered.container.querySelector('.ss__product-quickview__pricing')!;
		expect(pricing.querySelector('.ss__price--strike')).not.toBeNull();
		expect(pricing.textContent).toContain('15');
		expect(pricing.textContent).toContain('20');
	});

	it('renders a "Go to Product" button that navigates to the product url', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', url: '/products/apex-bottle' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const button = rendered.container.querySelector('.ss__product-quickview__go-to-product') as HTMLElement;
		expect(button).not.toBeNull();

		// Stub navigation to assert the target without leaving the test page.
		const original = window.location.href;
		Object.defineProperty(window, 'location', { value: { href: original }, writable: true, configurable: true });
		button.click();
		expect((window.location as any).href).toBe('/products/apex-bottle');
	});

	it('overlays badges on the media by default (disableBadges defaults to false)', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		const overlay = rendered.container.querySelector('.ss__product-quickview__media .ss__overlay-badge-mock');
		expect(overlay).not.toBeNull();
		// The image is rendered inside the badge overlay.
		expect(overlay!.querySelector('img.ss__product-quickview__image')).not.toBeNull();
	});

	it('does not overlay badges when disableBadges is true', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} disableBadges={true} />);

		expect(rendered.container.querySelector('.ss__overlay-badge-mock')).toBeNull();
		// The image still renders, just not wrapped in the badge overlay.
		expect(rendered.container.querySelector('.ss__product-quickview__media img.ss__product-quickview__image')).not.toBeNull();
	});

	it('omits the "Go to Product" button when the product has no url', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		expect(rendered.container.querySelector('.ss__product-quickview__go-to-product')).toBeNull();
	});

	it('opens the fullscreen gallery when the single image is clicked', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// Gallery not open initially.
		expect(document.querySelector('.ss__gallery')).toBeNull();

		const img = rendered.container.querySelector('.ss__product-quickview__media img.ss__product-quickview__image') as HTMLElement;
		fireEvent.click(img);

		// Gallery (portaled to body) now shows the clicked image.
		const galleryImg = document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		expect(galleryImg).not.toBeNull();
		expect(galleryImg.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it('opens the gallery at the clicked carousel image index', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: ['http://example.com/a.jpg', 'http://example.com/b.jpg', 'http://example.com/c.jpg'] } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { quickview: { isOpen: true, product: storeProduct, config: { imagesField: 'images' } } },
		});
		const myResult = { id: 'mine', mappings: {}, attributes: {} } as any;

		const rendered = render(<ProductQuickview controller={controller} result={myResult} />);

		// Click the third carousel image (index 2).
		const imgs = rendered.container.querySelectorAll('.ss__product-quickview__carousel img.ss__product-quickview__image');
		fireEvent.click(imgs[2] as HTMLElement);

		const galleryImg = document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		expect(galleryImg).not.toBeNull();
		expect(galleryImg.getAttribute('src')).toBe('http://example.com/c.jpg');
		// Counter shows position 3 of 3.
		expect(document.querySelector('.ss__gallery__counter')!.textContent).toBe('3 / 3');
	});
});
