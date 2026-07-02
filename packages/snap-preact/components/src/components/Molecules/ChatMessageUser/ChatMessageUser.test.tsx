import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatMessageUser } from './ChatMessageUser';

describe('ChatMessageUser Component', () => {
	const makeController = () =>
		({
			store: {
				currentChat: {
					chat: [],
					attachments: { get: () => null },
				},
			},
			productQuickView: () => {},
		} as any);

	it('renders', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} />);
		expect(rendered.container.querySelector('.ss__chat-message-user')).toBeInTheDocument();
	});

	it('renders the chatItem text', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} />);
		expect(rendered.getByText('Hello there')).toBeInTheDocument();
	});

	it('renders the request type label for productSearch', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'sneakers', requestType: 'productSearch' }} controller={makeController()} />);
		expect(rendered.getByText('Searching products')).toBeInTheDocument();
	});

	it('renders the "Filtering products" label when the request has only searchFilters', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{
					id: '1',
					text: 'Filter by product_type Benches',
					requestType: 'productSearch',
					request: { requestType: 'productSearch', searchFilters: [{ key: 'product_type', options: [{ key: 'Benches' }] }] },
				}}
				controller={makeController()}
			/>
		);
		expect(rendered.getByText('Filtering products')).toBeInTheDocument();
	});

	it('renders the "Searching products" label when the request has a searchTerm alongside searchFilters', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{
					id: '1',
					text: 'short modern bench for dog to reach the bed',
					requestType: 'productSearch',
					request: {
						requestType: 'productSearch',
						searchTerm: 'short modern bench for dog to reach the bed',
						searchFilters: [{ key: 'product_type', options: [{ key: 'Furniture/Living Room Furniture/Benches' }] }],
					},
				}}
				controller={makeController()}
			/>
		);
		expect(rendered.getByText('Searching products')).toBeInTheDocument();
		// applied filters still render as pills
		expect(rendered.getByLabelText('Filter: product_type = Furniture/Living Room Furniture/Benches')).toBeInTheDocument();
	});

	it('hides the request type label when hideMessageTypeIndicatorText is true', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{ id: '1', text: 'sneakers', requestType: 'productSearch' }}
				controller={makeController()}
				hideMessageTypeIndicatorText={true}
			/>
		);
		expect(rendered.queryByText('Searching products')).not.toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__chat-message-user__request-type')).not.toBeInTheDocument();
	});
});
