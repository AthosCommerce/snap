import { h } from 'preact';
import { css } from '@emotion/react';
import { render, fireEvent } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
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

	it('renders a $0 price', () => {
		const zeroPriceResult = {
			...mockResult,
			display: { mappings: { core: { ...mockResult.display.mappings.core, price: 0 } } },
		};
		const rendered = render(<ChatResult result={zeroPriceResult as any} controller={mockController as any} scrollToBottom={() => undefined} />);
		expect(rendered.container.querySelector('.ss__chat-result__content__price')).toBeInTheDocument();
	});

	it('renders the title as a keyboard-accessible button when onProductClick is provided', () => {
		const onProductClick = jest.fn();
		const rendered = render(
			<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} onProductClick={onProductClick} />
		);
		const titleButton = rendered.container.querySelector('.ss__chat-result__content__title--primary.ss__button') as HTMLElement;
		expect(titleButton).toBeInTheDocument();
		expect(titleButton).toHaveAttribute('role', 'button');
		expect(titleButton).toHaveAttribute('tabindex', '0');
		expect(titleButton).toHaveAttribute('aria-label', 'Open Test Product');

		fireEvent.click(titleButton);
		expect(onProductClick).toHaveBeenCalledTimes(1);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(
			<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} className={className} />
		);
		const root = rendered.container.querySelector('.ss__chat-result');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(
			<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} disableStyles={true} />
		);
		const root = rendered.container.querySelector('.ss__chat-result');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(
			<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} styleScript={styleScript} />
		);
		const root = rendered.container.querySelector('.ss__chat-result')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatResult: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-result');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatResult.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatResult: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} theme={propTheme} />
			);
			const element = rendered.container.querySelector('.ss__chat-result');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatResult.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatResult: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatResult: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatResult result={mockResult as any} controller={mockController as any} scrollToBottom={() => undefined} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-result');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatResult.className);
			expect(element).not.toHaveClass(globalTheme.components.chatResult.className);
		});
	});
});
