import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatResultsDisplay } from './ChatResultsDisplay';

describe('ChatResultsDisplay Component', () => {
	const makeController = () =>
		({
			store: {
				currentChat: {
					comparisons: { items: [] },
				},
				features: { similarProducts: { enabled: false } },
			},
			track: { product: { click: () => {}, addToCart: () => {} } },
			productQuickView: () => {},
			productSimilar: () => {},
			compareProduct: () => {},
			productQuery: () => {},
			addToCart: () => {},
		} as any);

	const mockResult = (id: string) => ({
		id,
		display: { mappings: { core: { name: `Result ${id}`, imageUrl: '/x.png', price: 9.99 } } },
	});

	it('returns null when chatItem has no results', () => {
		const rendered = render(
			<ChatResultsDisplay chatItem={{ messageType: 'productSearch', results: [] }} controller={makeController()} scrollToBottom={() => undefined} />
		);
		expect(rendered.container.querySelector('.ss__chat-results-display')).toBeNull();
	});

	it('renders when chatItem.results has items', () => {
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1'), mockResult('2')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-results-display')).toBeInTheDocument();
	});

	it('marks each result wrapper as a keyboard-accessible button', () => {
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		const resultWrapper = rendered.container.querySelector('.ss__chat-results-display__result');
		expect(resultWrapper).toHaveAttribute('role', 'button');
		expect(resultWrapper).toHaveAttribute('tabindex', '0');
	});
});
