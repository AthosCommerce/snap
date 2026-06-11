import { h } from 'preact';
import { render } from '@testing-library/preact';
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
		expect(buttons[0].tagName).toBe('BUTTON');
		expect(buttons[0]).toHaveAttribute('aria-label', 'Search for "waterproof jacket"');
	});
});
