import { h } from 'preact';
import { render } from '@testing-library/preact';
import { observable } from 'mobx';

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
				triggeringResultId: undefined,
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
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: true,
					product: undefined,
					triggeringResultId: 'mine',
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

	it('mounts during error state when result.id matches triggeringResultId (no product yet)', () => {
		// Mirrors the loading-state mount-before-product behavior: the modal scoped to a
		// specific Result must still mount during the error branch so the user sees the
		// error message attached to the tile they clicked, not nothing.
		const { controller } = makeController({
			store: {
				quickview: {
					isOpen: true,
					loading: false,
					product: undefined,
					triggeringResultId: 'mine',
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
					product: undefined,
					triggeringResultId: 'mine',
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
});
