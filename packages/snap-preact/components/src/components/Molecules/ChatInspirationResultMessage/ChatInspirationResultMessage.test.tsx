import { h } from 'preact';
import { css } from '@emotion/react';
import { render, fireEvent } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { ChatInspirationResultMessage } from './ChatInspirationResultMessage';

describe('ChatInspirationResultMessage Component', () => {
	const makeController = () =>
		({
			store: { loading: false, blocked: false },
			search: jest.fn(),
			track: { product: { click: () => {} } },
			productQuickView: () => {},
		} as any);

	const baseChatItem = {
		messageType: 'inspirationResult' as const,
		inspirationSections: [
			{
				clusterTitle: 'Outdoor Looks',
				clusterDescription: 'Great picks for chilly weather',
				searchQueries: ['waterproof jacket', 'wool hat'],
				products: [],
			},
		],
	};

	it('renders nothing when messageType is wrong', () => {
		const rendered = render(<ChatInspirationResultMessage chatItem={{ messageType: 'general' } as any} controller={makeController()} />);
		expect(rendered.container.querySelector('.ss__chat-inspiration-result-message')).toBeNull();
	});

	it('renders the cluster title and description', () => {
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} />);
		expect(rendered.getByText('Outdoor Looks')).toBeInTheDocument();
		expect(rendered.getByText('Great picks for chilly weather')).toBeInTheDocument();
	});

	it('renders search-query buttons that are keyboard accessible', () => {
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} />);
		const buttons = rendered.container.querySelectorAll('.ss__chat-inspiration-result-message__inspiration-sections__section__queries__query');
		expect(buttons.length).toBe(2);
		expect(buttons[0]).toHaveClass('ss__button');
		expect(buttons[0]).toHaveAttribute('role', 'button');
		expect(buttons[0]).toHaveAttribute('tabindex', '0');
		expect(buttons[0]).toHaveAttribute('aria-label', 'Search for "waterproof jacket"');
	});

	it('sends the searchTerm without searchFilters when the section has no filterSummary', () => {
		const controller = makeController();
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={controller} />);
		const button = rendered.container.querySelector(
			'.ss__chat-inspiration-result-message__inspiration-sections__section__queries__query'
		) as HTMLElement;

		fireEvent.click(button);
		expect(controller.search).toHaveBeenCalledWith({
			data: { requestType: 'productSearch', searchTerm: 'waterproof jacket' },
		});
	});

	it('sends the section filterSummary as searchFilters when a query is clicked', () => {
		const controller = makeController();
		const chatItem = {
			messageType: 'inspirationResult' as const,
			inspirationSections: [
				{
					filterSummary: [
						{
							field: 'product_type',
							value: 'Furniture/Living Room Furniture/Benches',
							label: 'Product Type: Furniture/Living Room Furniture/Benches',
							filterLabel: 'Product Type',
							filterValue: 'Furniture/Living Room Furniture/Benches',
						},
						{
							field: 'product_type',
							value: 'Furniture/Bedroom Furniture/Bedroom Benches',
							label: 'Product Type: Furniture/Bedroom Furniture/Bedroom Benches',
							filterLabel: 'Product Type',
							filterValue: 'Furniture/Bedroom Furniture/Bedroom Benches',
						},
						{
							field: 'color_family',
							value: 'Grey',
							label: 'Color: Grey',
							filterLabel: 'Color',
							filterValue: 'Grey',
						},
					],
					clusterTitle: 'Benches',
					clusterDescription: 'Low benches',
					searchQueries: ['short modern bench for dog to reach the bed'],
					products: [],
				},
			],
		};

		const rendered = render(<ChatInspirationResultMessage chatItem={chatItem as any} controller={controller} />);
		const button = rendered.container.querySelector(
			'.ss__chat-inspiration-result-message__inspiration-sections__section__queries__query'
		) as HTMLElement;

		fireEvent.click(button);
		expect(controller.search).toHaveBeenCalledWith({
			data: {
				requestType: 'productSearch',
				searchTerm: 'short modern bench for dog to reach the bed',
				searchFilters: [
					{
						key: 'product_type',
						options: [{ key: 'Furniture/Living Room Furniture/Benches' }, { key: 'Furniture/Bedroom Furniture/Bedroom Benches' }],
					},
					{ key: 'color_family', options: [{ key: 'Grey' }] },
				],
			},
		});
	});

	const chatItemWithProduct = {
		messageType: 'inspirationResult' as const,
		inspirationSections: [
			{
				clusterTitle: 'Outdoor Looks',
				clusterDescription: 'Great picks for chilly weather',
				searchQueries: [],
				products: [{ id: 'p1', display: { mappings: { core: { name: 'Cool Jacket', imageUrl: 'http://example.com/1.jpg' } } } }],
			},
		],
	};

	it('opens the product quick view when a product is clicked', () => {
		const controller = makeController();
		const productQuickView = jest.fn();
		controller.productQuickView = productQuickView;

		const rendered = render(<ChatInspirationResultMessage chatItem={chatItemWithProduct as any} controller={controller} />);
		const product = rendered.container.querySelector(
			'.ss__chat-inspiration-result-message__inspiration-sections__section__products__product'
		) as HTMLElement;
		expect(product).not.toBeNull();

		fireEvent.click(product);
		expect(productQuickView).toHaveBeenCalledTimes(1);
	});

	it('opens the product quick view via keyboard', () => {
		const controller = makeController();
		const productQuickView = jest.fn();
		controller.productQuickView = productQuickView;

		const rendered = render(<ChatInspirationResultMessage chatItem={chatItemWithProduct as any} controller={controller} />);
		const product = rendered.container.querySelector(
			'.ss__chat-inspiration-result-message__inspiration-sections__section__products__product'
		) as HTMLElement;

		fireEvent.keyDown(product, { code: 'Enter' });
		expect(productQuickView).toHaveBeenCalledTimes(1);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} className={className} />);
		const root = rendered.container.querySelector('.ss__chat-inspiration-result-message');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} disableStyles={true} />);
		const root = rendered.container.querySelector('.ss__chat-inspiration-result-message');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} styleScript={styleScript} />);
		const root = rendered.container.querySelector('.ss__chat-inspiration-result-message')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatInspirationResultMessage: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-inspiration-result-message');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatInspirationResultMessage.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatInspirationResultMessage: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__chat-inspiration-result-message');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatInspirationResultMessage.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatInspirationResultMessage: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatInspirationResultMessage: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatInspirationResultMessage chatItem={baseChatItem as any} controller={makeController()} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-inspiration-result-message');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatInspirationResultMessage.className);
			expect(element).not.toHaveClass(globalTheme.components.chatInspirationResultMessage.className);
		});
	});
});
