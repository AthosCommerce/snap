import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

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

	if (overrides.store) {
		controller.store = { ...defaultStore, ...overrides.store };
	}

	controller.store.close ??= jest.fn();
	const close = controller.store.close;
	return { controller, close };
}

const storeProduct = {
	id: 'mine',
	mappings: { core: { name: 'Mine', imageUrl: 'http://example.com/main.jpg' } },
	attributes: {},
};

describe('ProductQuickviewSlideout', () => {
	it('renders no slideout content when the store is closed', () => {
		const { controller } = makeController({ store: { isOpen: false, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).toBeNull();
	});

	it('renders the quickview layout content inside the slideout when open', () => {
		const { controller } = makeController({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview__content')).not.toBeNull();
		expect(rendered.getByText('Mine')).toBeInTheDocument();
	});

	it('renders null and warns when no quickview controller is provided', () => {
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
		const { controller } = makeController({ type: 'search', store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout controller={controller} />);
		expect(rendered.container.querySelector('.ss__product-quickview')).toBeNull();
		expect(warn).toHaveBeenCalled();
		warn.mockRestore();
	});

	it('closes the store when the overlay is clicked (onToggle sync)', () => {
		const { controller, close } = makeController({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout controller={controller} />);
		const overlay = rendered.container.querySelector('.ss__slideout__overlay') as HTMLElement;
		expect(overlay).not.toBeNull();
		fireEvent.click(overlay);
		expect(close).toHaveBeenCalled();
	});

	it('closes the store when the close button is clicked', () => {
		const { controller, close } = makeController({ store: { isOpen: true, product: storeProduct } });
		const rendered = render(<ProductQuickviewSlideout controller={controller} />);
		const closeEl = rendered.container.querySelector('.ss__product-quickview__close') as HTMLElement;
		fireEvent.click(closeEl);
		expect(close).toHaveBeenCalled();
	});

	it('focuses the close button when the slideout opens', () => {
		const { controller } = makeController({ store: { isOpen: true, product: storeProduct } });
		render(<ProductQuickviewSlideout controller={controller} />);
		const closeEl = document.querySelector('.ss__product-quickview__close') as HTMLElement;
		expect(closeEl).not.toBeNull();
		expect(document.activeElement).toBe(closeEl);
	});

	it('forwards lang to the quickview layout', () => {
		const { controller } = makeController({ store: { isOpen: true, product: storeProduct } });
		const lang = {
			quickview: { attributes: { 'aria-label': 'Schnellansicht' } },
			closeButton: { attributes: { 'aria-label': 'Schließen' } },
		};
		const rendered = render(<ProductQuickviewSlideout controller={controller} lang={lang} />);

		expect(rendered.container.querySelector('.ss__product-quickview__content')).toHaveAttribute('aria-label', 'Schnellansicht');
		expect(rendered.container.querySelector('.ss__product-quickview__close')).toHaveAttribute('aria-label', 'Schließen');
	});
});
