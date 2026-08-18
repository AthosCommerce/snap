import { h } from 'preact';
import { render, fireEvent, act } from '@testing-library/preact';
import { observable, runInAction } from 'mobx';

// QuickviewLayout (rendered inside the Slideout) pulls in Carousel/VariantSelection/badges; mock the
// heavy molecules so these container tests stay focused on open/close + focus behavior.
jest.mock('../../Molecules/Carousel', () => {
	const { h: hh } = require('preact');
	return {
		Carousel: ({ children, className }: any) => hh('div', { className: `ss__carousel-mock ${className || ''}` }, children),
	};
});
jest.mock('../../Molecules/VariantSelection', () => {
	const { h: hh } = require('preact');
	return {
		VariantSelection: ({ selection, type }: any) =>
			hh('div', { className: 'ss__variant-selection-mock', 'data-field': selection?.field, 'data-type': type ?? '' }),
	};
});
jest.mock('../../Molecules/OverlayBadge', () => {
	const { h: hh } = require('preact');
	return {
		OverlayBadge: ({ children }: any) => hh('div', { className: 'ss__overlay-badge-mock' }, children),
	};
});
jest.mock('../../Molecules/CalloutBadge', () => {
	const { h: hh } = require('preact');
	return {
		CalloutBadge: () => hh('div', { className: 'ss__callout-badge-mock' }),
	};
});

import { ProductQuickviewSlideout } from './ProductQuickviewSlideout';

function makeQuickviewManager(overrides: any = {}) {
	const defaultStore = {
		isOpen: false,
		product: undefined,
		loading: false,
		quickviewConfig: undefined,
		error: undefined,
		close: jest.fn(),
	};

	const defaultTrack = {
		product: { clickThrough: jest.fn(), click: jest.fn(), impression: jest.fn(), addToCart: jest.fn() },
	};

	const quickviewManager: any = {
		type: 'quickview',
		store: defaultStore,
		track: defaultTrack,
		...overrides,
	};

	if (overrides.store) {
		quickviewManager.store = { ...defaultStore, ...overrides.store };
	}

	quickviewManager.store.close ??= jest.fn();
	const close = quickviewManager.store.close;
	return { quickviewManager, close };
}

const storeProduct = {
	id: 'mine',
	mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
	attributes: {},
};

describe('ProductQuickviewSlideout', () => {
	it('renders no slideout content when the store is closed', () => {
		const { quickviewManager } = makeQuickviewManager({ store: { isOpen: false, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();
	});

	it('renders the quickview layout content inside the slideout when open', () => {
		const { quickviewManager } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).not.toBeNull();
		expect(rendered.getByText('Mine')).toBeInTheDocument();
	});

	it('renders null and warns when no quickview manager is provided', () => {
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
		// @ts-ignore - omitting the required manager is the case under test
		const rendered = render(<ProductQuickviewSlideout />);
		expect(rendered.container.querySelector('.ss__product-quickview')).toBeNull();
		expect(warn).toHaveBeenCalled();
		warn.mockRestore();
	});

	it('closes the store when the overlay is clicked (onChange sync)', () => {
		const { quickviewManager, close } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		const overlay = rendered.container.querySelector('.ss__slideout__overlay') as HTMLElement;
		expect(overlay).not.toBeNull();
		fireEvent.click(overlay);
		expect(close).toHaveBeenCalled();
	});

	it('closes the store when the close button is clicked', () => {
		const { quickviewManager, close } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		const closeEl = rendered.container.querySelector('.ss__product-quickview__close') as HTMLElement;
		fireEvent.click(closeEl);
		expect(close).toHaveBeenCalled();
	});

	it('focuses the close button when the slideout opens', () => {
		const { quickviewManager } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
		render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		const closeEl = document.querySelector('.ss__product-quickview__close') as HTMLElement;
		expect(closeEl).not.toBeNull();
		expect(document.activeElement).toBe(closeEl);
	});

	it('focuses the close button when the store opens after mount', async () => {
		// The store must be observable so the (memoized) observer template re-renders on open,
		// matching how the real QuickviewManager store drives it. Assigned after the factory
		// because makeQuickviewManager spreads the store, which would strip observability.
		const { quickviewManager } = makeQuickviewManager();
		quickviewManager.store = observable({ isOpen: false, product: storeProduct, loading: false, close: jest.fn() });
		render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);
		expect(document.querySelector('.ss__product-quickview__close')).toBeNull();

		await act(async () => {
			runInAction(() => {
				quickviewManager.store.isOpen = true;
			});
		});

		const closeEl = document.querySelector('.ss__product-quickview__close') as HTMLElement;
		expect(closeEl).not.toBeNull();
		expect(document.activeElement).toBe(closeEl);
	});

	it('forwards lang to the quickview layout', () => {
		const { quickviewManager } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
		const lang = {
			quickview: { attributes: { 'aria-label': 'Schnellansicht' } },
			closeButton: { attributes: { 'aria-label': 'Schließen' } },
		};
		const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} lang={lang} />);

		expect(rendered.container.querySelector('.ss__product-quickview__content')).toHaveAttribute('aria-label', 'Schnellansicht');
		expect(rendered.container.querySelector('.ss__product-quickview__close')).toHaveAttribute('aria-label', 'Schließen');
	});

	describe('impression tracking', () => {
		let observerCallbacks: Map<Element, IntersectionObserverCallback>;

		beforeEach(() => {
			jest.useFakeTimers();
			observerCallbacks = new Map();

			const mockIntersectionObserver = jest.fn((callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => ({
				observe: jest.fn((element: Element) => {
					observerCallbacks.set(element, callback);
				}),
				unobserve: jest.fn((element: Element) => {
					observerCallbacks.delete(element);
				}),
				disconnect: jest.fn(() => {
					observerCallbacks.clear();
				}),
				root: null,
				rootMargin: options?.rootMargin || '0px',
				thresholds: Array.isArray(options?.threshold) ? options.threshold : [options?.threshold || 0],
				takeRecords: jest.fn(() => []),
			}));

			//@ts-ignore
			window.IntersectionObserver = mockIntersectionObserver;
		});

		afterEach(() => {
			jest.runOnlyPendingTimers();
			jest.useRealTimers();
			observerCallbacks.clear();
			//@ts-ignore
			delete window.IntersectionObserver;
		});

		const triggerIntersection = () => {
			observerCallbacks.forEach((callback, element) => {
				callback(
					[
						{
							target: element,
							isIntersecting: true,
							intersectionRatio: 0.8,
							boundingClientRect: element.getBoundingClientRect(),
							intersectionRect: element.getBoundingClientRect(),
							rootBounds: null,
							time: Date.now(),
						} as IntersectionObserverEntry,
					],
					{} as IntersectionObserver
				);
			});
			// satisfy the impression observer's minimum visible time (1000ms)
			act(() => {
				jest.advanceTimersByTime(1000);
			});
		};

		it('tracks an impression for the displayed product when the quickview content is viewed', () => {
			const { quickviewManager } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
			render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);

			triggerIntersection();

			expect(quickviewManager.track.product.impression).toHaveBeenCalledTimes(1);
			expect(quickviewManager.track.product.impression).toHaveBeenCalledWith(storeProduct);
		});

		it('does not track a click when the quickview content is clicked', () => {
			const { quickviewManager } = makeQuickviewManager({ store: { isOpen: true, product: storeProduct } });
			const rendered = render(<ProductQuickviewSlideout quickviewManager={quickviewManager} />);

			triggerIntersection();

			const content = rendered.container.querySelector('.ss__product-quickview__content') as HTMLElement;
			fireEvent.click(content);

			expect(quickviewManager.track.product.click).not.toHaveBeenCalled();
			expect(quickviewManager.track.product.clickThrough).not.toHaveBeenCalled();
		});
	});
});
