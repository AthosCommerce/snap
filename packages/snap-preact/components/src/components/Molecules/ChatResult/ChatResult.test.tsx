import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { ChatResult } from './ChatResult';

describe('ChatResult Component', () => {
	const mockResult = {
		id: 'abc123',
		display: {
			mappings: {
				core: {
					name: 'Test Product',
					imageUrl: 'https://example.com/image.jpg',
					price: 19.99,
				},
			},
		},
	};

	const mockController = {
		store: {
			currentChat: {
				comparisons: {
					items: [],
				},
			},
			features: {
				similarProducts: { enabled: true },
			},
		},
		track: { product: { addToCart: () => {}, click: () => {} } },
		productSimilar: () => {},
		compareProduct: () => {},
		productQuery: () => {},
		addToCart: () => {},
		productQuickView: () => {},
	};

	it('renders', () => {
		const rendered = render(<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} />);
		const rootElement = rendered.container.querySelector('.ss__chat-result');
		expect(rootElement).toBeInTheDocument();
	});

	it('renders the product name', () => {
		const rendered = render(<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} />);
		expect(rendered.getByText('Test Product')).toBeInTheDocument();
	});

	it('renders Similar + Compare buttons in the image overlay', () => {
		const rendered = render(<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} />);
		const buttons = rendered.container.querySelector('.ss__chat-result__image__buttons');
		expect(buttons).toBeInTheDocument();
		expect(buttons?.querySelector('.ss__chat-result__image__buttons__similar')).toBeInTheDocument();
		expect(buttons?.querySelector('.ss__chat-result__image__buttons__compare')).toBeInTheDocument();
	});

	it('adds to comparison when clicking Compare while not in comparison', () => {
		const compareProduct = jest.fn();
		const remove = jest.fn();
		const controller = {
			...mockController,
			compareProduct,
			store: { ...mockController.store, currentChat: { comparisons: { items: [], remove } } },
		};
		const rendered = render(<ChatResult result={mockResult as any} controller={controller as any} scrollToBottom={() => undefined} />);
		fireEvent.click(rendered.container.querySelector('.ss__chat-result__image__buttons__compare')!);
		expect(compareProduct).toHaveBeenCalledWith(mockResult);
		expect(remove).not.toHaveBeenCalled();
	});

	it('removes from comparison when clicking Compare while already in comparison', () => {
		const compareProduct = jest.fn();
		const remove = jest.fn();
		const controller = {
			...mockController,
			compareProduct,
			store: { ...mockController.store, currentChat: { comparisons: { items: [{ result: mockResult }], remove } } },
		};
		const rendered = render(<ChatResult result={mockResult as any} controller={controller as any} scrollToBottom={() => undefined} />);
		fireEvent.click(rendered.container.querySelector('.ss__chat-result__image__buttons__compare')!);
		expect(remove).toHaveBeenCalledWith(mockResult.id);
		expect(compareProduct).not.toHaveBeenCalled();
	});
});
