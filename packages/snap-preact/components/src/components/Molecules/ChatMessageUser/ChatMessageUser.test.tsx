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
});
