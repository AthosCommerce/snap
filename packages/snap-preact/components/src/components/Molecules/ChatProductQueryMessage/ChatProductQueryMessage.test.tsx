import { h } from 'preact';
import { css } from '@emotion/react';
import { render, fireEvent } from '@testing-library/preact';
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

	it('renders the action buttons with their labels', () => {
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
		const addToCart = rendered.container.querySelector('.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button');
		const similar = rendered.container.querySelector('.ss__chat-product-query-message__header__product__actions__show-similar .ss__button');
		const discuss = rendered.container.querySelector('.ss__chat-product-query-message__header__product__actions__discuss-product .ss__button');
		expect(addToCart).toHaveTextContent('Add to Cart');
		expect(similar).toHaveTextContent('Similar');
		expect(discuss).toHaveTextContent('Discuss');
	});

	it('auto-selects the variant whose uid matches the clicked result id', () => {
		const select = jest.fn();
		const product = {
			display: { mappings: { core: { name: 'Boots' } }, attributes: {} },
			variants: {
				data: [
					{ available: true, mappings: { core: { uid: 'variant-black' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { uid: 'variant-brown' } }, options: { color: { value: 'brown' } } },
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
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'variant-brown' } } as any}
				controller={makeController(product)}
			/>
		);
		expect(select).toHaveBeenCalledWith('brown');
	});

	it('falls back to the first available value when no variant uid matches', () => {
		const select = jest.fn();
		const product = {
			display: { mappings: { core: { name: 'Boots' } }, attributes: {} },
			variants: {
				data: [
					{ available: false, mappings: { core: { uid: 'variant-black' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { uid: 'variant-brown' } }, options: { color: { value: 'brown' } } },
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
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'variant-unknown' } } as any}
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

	it('does not select unavailable swatches on click', () => {
		const select = jest.fn();
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
						select,
					},
				],
			},
		};
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={makeController(product)} />
		);
		const swatches = rendered.container.querySelectorAll('.ss__chat-product-query-message__variants__swatch');
		fireEvent.click(swatches[1]);
		expect(select).not.toHaveBeenCalled();

		fireEvent.click(swatches[0]);
		expect(select).toHaveBeenCalledWith('black');
	});

	it('discusses the quickview product so the attachment reflects the selected variant', () => {
		const productQuery = jest.fn();
		const product = {
			id: 'variant-black',
			display: { mappings: { core: { name: 'Boots', thumbnailImageUrl: 'variant-brown.jpg' } }, attributes: {} },
			variants: { selections: [] },
		};
		const controller = makeController(product);
		controller.productQuery = productQuery;
		const sourceProduct = { id: 'variant-black', display: { mappings: { core: { name: 'Boots', thumbnailImageUrl: 'variant-black.jpg' } } } };
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct } as any} controller={controller} />
		);
		const discuss = rendered.container.querySelector('.ss__chat-product-query-message__header__product__actions__discuss-product .ss__button')!;
		fireEvent.click(discuss);
		expect(productQuery).toHaveBeenCalledWith(product);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any}
				controller={makeController(null)}
				className={className}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-product-query-message');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any}
				controller={makeController(null)}
				disableStyles={true}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-product-query-message');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any}
				controller={makeController(null)}
				styleScript={styleScript}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-product-query-message')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});
});
