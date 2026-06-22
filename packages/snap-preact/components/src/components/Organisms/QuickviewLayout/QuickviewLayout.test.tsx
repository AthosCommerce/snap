import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { observable } from 'mobx';

// Mock the Carousel molecule so these tests assert QuickviewLayout's carousel-vs-single-image
// decision without depending on Swiper rendering in jsdom (the real Carousel suite is disabled
// for that reason). The mock renders its children directly inside a tagged wrapper.
jest.mock('../../Molecules/Carousel', () => {
	const { h: hh } = require('preact');
	return {
		Carousel: ({ children, className }: any) => hh('div', { className: `ss__carousel-mock ${className || ''}` }, children),
	};
});

// Mock VariantSelection to capture the `type` QuickviewLayout passes (swatches vs dropdown)
// without rendering the heavy real Swatches/Dropdown atoms.
jest.mock('../../Molecules/VariantSelection', () => {
	const { h: hh } = require('preact');
	return {
		VariantSelection: ({ selection, type }: any) =>
			hh('div', { className: 'ss__variant-selection-mock', 'data-field': selection?.field, 'data-type': type ?? '' }),
	};
});

// Mock OverlayBadge to a simple wrapper so we can assert whether the media is wrapped
// (badges enabled) without standing up a full meta/badges fixture.
jest.mock('../../Molecules/OverlayBadge', () => {
	const { h: hh } = require('preact');
	return {
		OverlayBadge: ({ children }: any) => hh('div', { className: 'ss__overlay-badge-mock' }, children),
	};
});

// Mock CalloutBadge to a simple element so we can assert whether callout badges render
// below the media without standing up a full badges fixture.
jest.mock('../../Molecules/CalloutBadge', () => {
	const { h: hh } = require('preact');
	return {
		CalloutBadge: () => hh('div', { className: 'ss__callout-badge-mock' }),
	};
});

import { QuickviewLayout } from './QuickviewLayout';

// Build a controller-shaped object whose `store` mirrors the QuickviewStore API the
// component reads. Tests set modal state directly on `store`. The shape matches what a
// real QuickviewController exposes via QuickviewStore.
function makeController(overrides: any = {}) {
	const defaultStore = {
		isOpen: false,
		product: undefined,
		loading: false,
		quickviewConfig: undefined,
		error: undefined,
		close: jest.fn(),
	};

	const controller: any = {
		type: 'quickview',
		store: defaultStore,
		...overrides,
	};

	// Merge override store properties into default store
	if (overrides.store) {
		controller.store = { ...defaultStore, ...overrides.store };
	}

	controller.store.close ??= jest.fn();
	const close = controller.store.close;
	return { controller, close };
}

describe('QuickviewLayout', () => {
	it('renders nothing visible when closed', () => {
		const { controller } = makeController();
		const rendered = render(<QuickviewLayout controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();
	});

	it('renders the product name, image, and attributes when open', () => {
		const product = {
			mappings: { core: { name: 'Widget', thumbnailImageUrl: 'http://example.com/widget.jpg' } },
			attributes: { color: 'red', size: 'M' },
		};
		const { controller } = makeController({
			store: { isOpen: true, product, quickviewConfig: { displayFields: ['color', 'size'] } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		expect(rendered.getByText('Widget')).toBeInTheDocument();
		const img = rendered.container.querySelector('.ss__product-quickview__image img') as HTMLImageElement | null;
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe('http://example.com/widget.jpg');
		expect(rendered.getByText('color')).toBeInTheDocument();
		expect(rendered.getByText('red')).toBeInTheDocument();
		expect(rendered.getByText('size')).toBeInTheDocument();
		expect(rendered.getByText('M')).toBeInTheDocument();
	});

	it('invokes store.close when the close button is clicked', () => {
		const product = { mappings: { core: { name: 'Widget' } }, attributes: {} };
		const { controller, close } = makeController({
			store: { isOpen: true, product, close: jest.fn() },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);
		const closeButton = rendered.container.querySelector('.ss__product-quickview__close') as HTMLElement;
		expect(closeButton).not.toBeNull();
		fireEvent.click(closeButton);

		expect(close).toHaveBeenCalledTimes(1);
	});

	it('opens when the store quickview is open and renders the product', () => {
		const storeProduct = { id: 'mine', mappings: { core: { name: 'Mine' } }, attributes: { size: 'M' } };
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		expect(rendered.container.querySelector('.ss__product-quickview__content')).not.toBeNull();
		expect(rendered.getByText('Mine')).toBeInTheDocument();
	});

	it('renders a loading indicator when store.loading is true', () => {
		// During loading the store holds the source result as `product` (set by setLoading)
		// before the cloned/fetched product replaces it.
		const { controller } = makeController({
			store: {
				isOpen: true,
				loading: true,
				product: { id: 'mine', mappings: { core: {}, attributes: {} } },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
				isOpen: true,
				loading: false,
				product: storeProduct,
				quickviewConfig: { displayFields: ['size'] },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
				isOpen: true,
				loading: false,
				product: storeProduct,
				quickviewConfig: { displayFields: ['size', 'color'] },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { meta: { data: { facets: {} } }, isOpen: true, loading: false, product: storeProduct, quickviewConfig: { displayFields: ['sku'] } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
				isOpen: true,
				loading: false,
				product: storeProduct,
				quickviewConfig: { displayFields: ['tags'] },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
				isOpen: true,
				loading: false,
				product: storeProduct,
				quickviewConfig: { displayFields: ['tags'] },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		expect(rendered.getByText('new, sale, featured')).toBeInTheDocument();
	});

	it('mounts during error state while the store is open (source product retained)', () => {
		// On error the store still holds the source result as `product` (setLoading set it,
		// update never replaced it), so the shared modal mounts and shows the error message.
		const { controller } = makeController({
			store: {
				isOpen: true,
				loading: false,
				product: { id: 'mine', mappings: { core: {}, attributes: {} } },
				error: { message: 'Failed to display quickview' },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview__error')).not.toBeNull();
	});

	it('renders the error message when quickview.error is set', () => {
		const { controller } = makeController({
			store: {
				isOpen: true,
				loading: false,
				product: { id: 'mine', mappings: { core: {}, attributes: {} } },
				error: { message: 'Failed to display quickview' },
			},
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		// One slide image per URL in the list.
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(3);
	});

	it('reads imagesField from attributes when not present on mappings.core', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: { gallery: ['http://example.com/a.jpg', 'http://example.com/b.jpg'] },
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'gallery' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(2);
	});

	it('coerces a MobX observable array of images into carousel slides', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', images: observable.array(['http://example.com/a.jpg', 'http://example.com/b.jpg']) } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(2);
	});

	it('falls back to the single image when imagesField resolves to a single image', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', images: ['http://example.com/only.jpg'] } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('.ss__product-quickview__image img') as HTMLImageElement | null;
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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// No imagesField configured → default candidate 'images' has >1 → carousel.
		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(2);
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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(2);
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
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: ['primaryImages', 'gallery'] } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		// 'primaryImages' has only 1 → skipped; 'gallery' has 3 → used.
		expect(carousel!.querySelectorAll('.ss__product-quickview__image img')).toHaveLength(3);
	});

	it('renders the single image when neither the configured nor default image fields have multiple images', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// No images/ss_images present → no carousel, single core image only.
		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('.ss__product-quickview__image img') as HTMLImageElement | null;
		expect(img!.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it('renders each image in the array as a carousel slide in order', () => {
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: { name: 'Mine', images: ['http://example.com/a.jpg', 'http://example.com/b.jpg', 'http://example.com/c.jpg'] },
			},
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const imgs = rendered.container.querySelectorAll('.ss__product-quickview__carousel .ss__product-quickview__image img');
		expect(imgs).toHaveLength(3);
		expect(imgs[0].getAttribute('src')).toBe('http://example.com/a.jpg');
		expect(imgs[1].getAttribute('src')).toBe('http://example.com/b.jpg');
		expect(imgs[2].getAttribute('src')).toBe('http://example.com/c.jpg');
	});

	it('treats a single-element array as one image (no carousel)', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg', images: ['http://example.com/only.jpg'] } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// One image in the list → fall back to the single core image.
		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('.ss__product-quickview__image img') as HTMLImageElement | null;
		expect(img!.getAttribute('src')).toBe('http://example.com/main.jpg');
	});

	it('shows the active variant single image instead of the parent image array', () => {
		// Parent carries a multi-image array; the active variant has its own distinct single
		// imageUrl and NO own images array. The displayed media should be the variant image.
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: {
					name: 'Mine',
					imageUrl: 'http://example.com/parent.jpg',
					images: ['http://example.com/p1.jpg', 'http://example.com/p2.jpg', 'http://example.com/p3.jpg'],
				},
			},
			attributes: {},
			display: {
				// Variant-merged: the variant's imageUrl wins, parent images array persists.
				mappings: {
					core: {
						name: 'Mine',
						imageUrl: 'http://example.com/variant.jpg',
						images: ['http://example.com/p1.jpg', 'http://example.com/p2.jpg', 'http://example.com/p3.jpg'],
					},
				},
				attributes: {},
			},
			variants: {
				active: {
					mappings: { core: { imageUrl: 'http://example.com/variant.jpg' } },
					attributes: {},
				},
				selections: [{ field: 'color', label: 'Color', selected: { value: 'Blue' }, values: [], select: () => undefined }],
			},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// No carousel — the active variant has no own images array, so the single variant image renders.
		expect(rendered.container.querySelector('.ss__product-quickview__carousel')).toBeNull();
		const img = rendered.container.querySelector('.ss__product-quickview__image img') as HTMLImageElement | null;
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe('http://example.com/variant.jpg');
	});

	it('shows the active variant image array as a carousel when the variant provides one', () => {
		const storeProduct = {
			id: 'mine',
			mappings: {
				core: {
					name: 'Mine',
					imageUrl: 'http://example.com/parent.jpg',
					images: ['http://example.com/p1.jpg', 'http://example.com/p2.jpg', 'http://example.com/p3.jpg'],
				},
			},
			attributes: {},
			display: {
				mappings: {
					core: {
						name: 'Mine',
						imageUrl: 'http://example.com/variant.jpg',
						images: ['http://example.com/v1.jpg', 'http://example.com/v2.jpg'],
					},
				},
				attributes: {},
			},
			variants: {
				active: {
					mappings: { core: { imageUrl: 'http://example.com/variant.jpg', images: ['http://example.com/v1.jpg', 'http://example.com/v2.jpg'] } },
					attributes: {},
				},
				selections: [{ field: 'color', label: 'Color', selected: { value: 'Blue' }, values: [], select: () => undefined }],
			},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const carousel = rendered.container.querySelector('.ss__product-quickview__carousel');
		expect(carousel).not.toBeNull();
		const imgs = carousel!.querySelectorAll('.ss__product-quickview__image img');
		expect(imgs).toHaveLength(2);
		expect((imgs[0] as HTMLImageElement).getAttribute('src')).toBe('http://example.com/v1.jpg');
		expect((imgs[1] as HTMLImageElement).getAttribute('src')).toBe('http://example.com/v2.jpg');
	});

	it('lays out the image in the media column and the rest in the details column', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: { color: 'red' },
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct, quickviewConfig: { displayFields: ['color'] } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const mediaColumn = rendered.container.querySelector('.ss__quickview-layout__column--c1');
		const detailsColumn = rendered.container.querySelector('.ss__quickview-layout__column--c2');
		expect(mediaColumn).not.toBeNull();
		expect(detailsColumn).not.toBeNull();
		// Image lives in the media column…
		expect(mediaColumn!.querySelector('.ss__product-quickview__media .ss__product-quickview__image img')).not.toBeNull();
		// …and the title, attributes table, and add-to-cart live in the details column.
		expect(detailsColumn!.querySelector('.ss__product-quickview__title')).not.toBeNull();
		expect(detailsColumn!.querySelector('.ss__product-quickview__attributes')).not.toBeNull();
		expect(detailsColumn!.querySelector('.ss__product-quickview__add-to-cart')).not.toBeNull();
		// Image is NOT in the details column.
		expect(detailsColumn!.querySelector('.ss__product-quickview__image img')).toBeNull();
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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const vs = rendered.container.querySelector('.ss__variant-selection-mock[data-field="color"]');
		// Empty data-type → QuickviewLayout passed `undefined`, letting VariantSelection default.
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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

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
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const pricing = rendered.container.querySelector('.ss__product-quickview__pricing')!;
		expect(pricing.querySelector('.ss__price--strike')).not.toBeNull();
		expect(pricing.textContent).toContain('15');
		expect(pricing.textContent).toContain('20');
	});

	it('renders a "More info" button that navigates to the product url', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', url: '/products/apex-bottle' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		const button = rendered.container.querySelector('.ss__product-quickview__go-to-product') as HTMLElement;
		expect(button).not.toBeNull();

		// Stub navigation to assert the target without leaving the test page.
		const original = window.location.href;
		Object.defineProperty(window, 'location', { value: { href: original }, writable: true, configurable: true });
		button.click();
		expect((window.location as any).href).toBe('/products/apex-bottle');
	});

	it('hides overlay and callout badges by default (showBadges defaults to false)', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// Neither badge variant renders when showBadges is not set.
		expect(rendered.container.querySelector('.ss__overlay-badge-mock')).toBeNull();
		expect(rendered.container.querySelector('.ss__callout-badge-mock')).toBeNull();
		// The image still renders, just not wrapped in the badge overlay.
		expect(rendered.container.querySelector('.ss__product-quickview__media .ss__product-quickview__image img')).not.toBeNull();
	});

	it('shows overlay badges over the media and callout badges below it when showBadges is true', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} showBadges={true} />);

		// Overlay wraps the media.
		const overlay = rendered.container.querySelector('.ss__product-quickview__media .ss__overlay-badge-mock');
		expect(overlay).not.toBeNull();
		expect(overlay!.querySelector('.ss__product-quickview__image img')).not.toBeNull();
		// Callout badges render inside the media region.
		expect(rendered.container.querySelector('.ss__product-quickview__media .ss__callout-badge-mock')).not.toBeNull();
	});

	it('omits the "More info" button when the product has no url', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		expect(rendered.container.querySelector('.ss__product-quickview__go-to-product')).toBeNull();
	});

	it('opens the fullscreen gallery when the single image is clicked', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({
			store: { isOpen: true, product: storeProduct },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// Gallery not open initially.
		expect(document.querySelector('.ss__gallery')).toBeNull();

		const img = rendered.container.querySelector('.ss__product-quickview__media .ss__product-quickview__image img') as HTMLElement;
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
			store: { isOpen: true, product: storeProduct, quickviewConfig: { imagesField: 'images' } },
		});

		const rendered = render(<QuickviewLayout controller={controller} />);

		// Click the third carousel image (index 2).
		const imgs = rendered.container.querySelectorAll('.ss__product-quickview__carousel .ss__product-quickview__image img');
		fireEvent.click(imgs[2] as HTMLElement);

		const galleryImg = document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		expect(galleryImg).not.toBeNull();
		expect(galleryImg.getAttribute('src')).toBe('http://example.com/c.jpg');
		// Counter shows position 3 of 3.
		expect(document.querySelector('.ss__gallery__counter')!.textContent).toBe('3 / 3');
	});

	it('controller appearing after first render does not crash (hook-order regression)', () => {
		const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

		// First render: no controller — component should render null without throwing.
		const rendered = render(<QuickviewLayout controller={undefined as any} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();

		// Second render: real controller with an open store and a product.
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller } = makeController({ store: { isOpen: true, product: storeProduct } });

		expect(() => {
			rendered.rerender(<QuickviewLayout controller={controller} />);
		}).not.toThrow();

		// No hook-order error logged by Preact.
		const hookOrderErrors = consoleError.mock.calls.filter(([msg]) => typeof msg === 'string' && /hook/i.test(msg));
		expect(hookOrderErrors).toHaveLength(0);

		// Modal content renders after controller appears.
		expect(rendered.container.querySelector('.ss__product-quickview__content')).not.toBeNull();
		expect(rendered.getByText('Mine')).toBeInTheDocument();

		consoleError.mockRestore();
	});

	it('Escape key closes the modal when gallery is not open', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const { controller, close } = makeController({ store: { isOpen: true, product: storeProduct } });

		render(<QuickviewLayout controller={controller} />);

		fireEvent.keyDown(window, { key: 'Escape' });
		expect(close).toHaveBeenCalledTimes(1);
	});

	it('Escape key does NOT close the modal while the gallery is open, but closes it after gallery closes', () => {
		const storeProduct = {
			id: 'mine',
			mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
			attributes: {},
		};
		const close = jest.fn();
		const { controller } = makeController({ store: { isOpen: true, product: storeProduct, close } });

		const rendered = render(<QuickviewLayout controller={controller} />);

		// Open the gallery by clicking the product image.
		const img = rendered.container.querySelector('.ss__product-quickview__media .ss__product-quickview__image img') as HTMLElement;
		fireEvent.click(img);

		// Gallery is now open; Escape should NOT call store.close.
		fireEvent.keyDown(window, { key: 'Escape' });
		expect(close).not.toHaveBeenCalled();

		// Gallery's own Escape handler calls its onClose: setGalleryOpen(false).
		// After that re-render galleryOpen is false; next Escape should close the modal.
		const galleryClose = document.querySelector('.ss__gallery__close') as HTMLElement;
		if (galleryClose) fireEvent.click(galleryClose);

		fireEvent.keyDown(window, { key: 'Escape' });
		expect(close).toHaveBeenCalledTimes(1);
	});
});
