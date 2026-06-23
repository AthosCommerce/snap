import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatMessageText } from './ChatMessageText';

describe('ChatMessageText Component', () => {
	const makeController = () =>
		({
			store: {
				currentChat: { activeMessage: undefined },
			},
			track: { product: { click: () => {}, addToCart: () => {} } },
			productQuickView: () => {},
		} as any);

	it('renders', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Hello world', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text')).toBeInTheDocument();
	});

	it('renders the chatItem text', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Hello world', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		// marked wraps text in a paragraph; just check the substring exists
		expect(rendered.container.textContent).toContain('Hello world');
	});

	it('renders the side-chat toggle button for inspirationResult messages', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Inspiration', messageType: 'inspirationResult' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text__view-side-chat')).toBeInTheDocument();
	});

	it('renders an explore button below the message instead of the icon button when buttonBelowMessage is true', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Inspiration', messageType: 'inspirationResult' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
				buttonBelowMessage={true}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text__view-side-chat')).not.toBeInTheDocument();
		const exploreButton = rendered.container.querySelector('.ss__chat-message-text__explore');
		expect(exploreButton).toBeInTheDocument();
		expect(exploreButton?.textContent).toContain('Explore Inspiration Scenarios');
		// The button sits below the message, not inside the bubble
		expect(exploreButton?.closest('.ss__chat-message-text__bubble')).toBeNull();
	});

	it('uses the comparison label for the explore button on productComparison messages', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Comparison', messageType: 'productComparison' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
				buttonBelowMessage={true}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text__explore')?.textContent).toContain('Explore Comparison Data');
	});

	it('strips script tags from LLM output', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'hello <script>window.__xss = true</script> world', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		const textEl = rendered.container.querySelector('.ss__chat-message-text__text-wrapper__text');
		expect(textEl?.innerHTML).not.toContain('<script');
		expect(textEl?.innerHTML).toContain('hello');
	});

	it('strips event-handler attributes from LLM output', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: '<img src=x onerror="window.__xss=true">', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		const textEl = rendered.container.querySelector('.ss__chat-message-text__text-wrapper__text');
		expect(textEl?.innerHTML).not.toContain('onerror');
	});

	it('preserves legitimate plain text content', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Safe content for the user', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.textContent).toContain('Safe content for the user');
	});
});
