import { h } from 'preact';
import { css } from '@emotion/react';
import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
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

	it('exposes a keyboard-accessible product title button instead of a nested-interactive wrapper', () => {
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		const resultWrapper = rendered.container.querySelector('.ss__chat-results-display__result');
		expect(resultWrapper).not.toHaveAttribute('role');
		expect(resultWrapper).not.toHaveAttribute('tabindex');

		const titleButton = rendered.container.querySelector('.ss__chat-result__content__title--primary.ss__button');
		expect(titleButton).toBeInTheDocument();
		expect(titleButton).toHaveAttribute('role', 'button');
		expect(titleButton).toHaveAttribute('tabindex', '0');
		expect(titleButton).toHaveAttribute('aria-label', 'Open Result 1');
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
				className={className}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-results-display');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
				disableStyles={true}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-results-display');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(
			<ChatResultsDisplay
				chatItem={{ messageType: 'productSearch', results: [mockResult('1')] }}
				controller={makeController()}
				scrollToBottom={() => undefined}
				styleScript={styleScript}
			/>
		);
		const root = rendered.container.querySelector('.ss__chat-results-display')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatResultsDisplay: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatResultsDisplay
						chatItem={{ messageType: 'productSearch', results: [mockResult('1'), mockResult('2')] }}
						controller={makeController()}
						scrollToBottom={() => undefined}
					/>
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-results-display');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatResultsDisplay.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatResultsDisplay: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ChatResultsDisplay
					chatItem={{ messageType: 'productSearch', results: [mockResult('1'), mockResult('2')] }}
					controller={makeController()}
					scrollToBottom={() => undefined}
					theme={propTheme}
				/>
			);
			const element = rendered.container.querySelector('.ss__chat-results-display');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatResultsDisplay.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatResultsDisplay: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatResultsDisplay: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatResultsDisplay
						chatItem={{ messageType: 'productSearch', results: [mockResult('1'), mockResult('2')] }}
						controller={makeController()}
						scrollToBottom={() => undefined}
						theme={propTheme}
					/>
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-results-display');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatResultsDisplay.className);
			expect(element).not.toHaveClass(globalTheme.components.chatResultsDisplay.className);
		});
	});
});
