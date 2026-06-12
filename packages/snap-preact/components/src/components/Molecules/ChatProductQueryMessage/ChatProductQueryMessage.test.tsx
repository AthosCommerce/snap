import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatProductQueryMessage } from './ChatProductQueryMessage';

describe('ChatProductQueryMessage Component', () => {
	const makeController = (productQuickview: any = null) =>
		({
			store: {
				productQuickview,
				productQuickviewError: null,
				currentChat: { chat: [], popProductQueryMessage: () => {} },
				clearProductQuickview: () => {},
				features: { similarProducts: { enabled: true } },
			},
			track: { product: { click: () => {}, addToCart: () => {} } },
			addToCart: () => {},
			productSimilar: () => {},
			productQuery: () => {},
		} as any);

	it('renders nothing for non-productQuery messages', () => {
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'general', sourceProduct: {} } as any} controller={makeController()} />
		);
		expect(rendered.container.querySelector('.ss__chat-product-query-message')).toBeNull();
	});

	it('renders a placeholder when no productQuickview is loaded', () => {
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={makeController(null)} />
		);
		expect(rendered.getByText('Loading product details...')).toBeInTheDocument();
	});

	it('renders the product name when productQuickview is loaded', () => {
		const product = {
			display: {
				mappings: { core: { name: 'Wool Hat', price: 25 } },
				attributes: {},
			},
			variants: { selections: [] },
		};
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={makeController(product)} />
		);
		expect(rendered.getByText('Wool Hat')).toBeInTheDocument();
	});

	it('auto-selects the variant whose image matches the clicked product image', () => {
		const select = jest.fn();
		const product = {
			display: { mappings: { core: { name: 'Boots' } }, attributes: {} },
			variants: {
				data: [
					{ available: true, mappings: { core: { imageUrl: 'https://img/black.jpg' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { imageUrl: 'https://img/brown.jpg' } }, options: { color: { value: 'brown' } } },
				],
				selections: [
					{
						field: 'color',
						values: [
							{ value: 'black', available: true },
							{ value: 'brown', available: true },
						],
						selected: undefined,
						select,
					},
				],
			},
		};
		render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { mappings: { core: { imageUrl: 'https://img/brown.jpg' } } } } as any}
				controller={makeController(product)}
			/>
		);
		expect(select).toHaveBeenCalledWith('brown');
	});

	it('falls back to the first available value when no variant image matches', () => {
		const select = jest.fn();
		const product = {
			display: { mappings: { core: { name: 'Boots' } }, attributes: {} },
			variants: {
				data: [
					{ available: false, mappings: { core: { imageUrl: 'https://img/black.jpg' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { imageUrl: 'https://img/brown.jpg' } }, options: { color: { value: 'brown' } } },
				],
				selections: [
					{
						field: 'color',
						values: [
							{ value: 'black', available: false },
							{ value: 'brown', available: true },
						],
						selected: undefined,
						select,
					},
				],
			},
		};
		render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { mappings: { core: { imageUrl: 'https://img/other.jpg' } } } } as any}
				controller={makeController(product)}
			/>
		);
		expect(select).toHaveBeenCalledWith('brown');
	});

	it('renders variant swatches with radio semantics', () => {
		const product = {
			display: { mappings: { core: { name: 'Boots' } }, attributes: {} },
			variants: {
				selections: [
					{
						field: 'color',
						values: [
							{ value: 'black', available: true },
							{ value: 'brown', available: false },
						],
						selected: { value: 'black' },
						select: () => {},
					},
				],
			},
		};
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={makeController(product)} />
		);
		const swatches = rendered.container.querySelectorAll('.ss__chat-product-query-message__variants__swatch');
		expect(swatches.length).toBe(2);
		expect(swatches[0]).toHaveAttribute('role', 'radio');
		expect(swatches[0]).toHaveAttribute('aria-checked', 'true');
		expect(swatches[1]).toHaveAttribute('aria-disabled', 'true');
	});
});
