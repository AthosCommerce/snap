import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { ChatSuggestedQuestions } from './ChatSuggestedQuestions';

describe('ChatSuggestedQuestions Component', () => {
	const makeController = (openChat = jest.fn()) =>
		({
			openChat,
		} as any);

	it('renders', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['What is on sale?']} />);
		const root = rendered.container.querySelector('.ss__chat-suggested-questions');
		expect(root).toBeInTheDocument();
	});

	it('renders one button per question', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['One', 'Two', 'Three']} />);
		expect(rendered.container.querySelectorAll('.ss__chat-suggested-questions__item').length).toBe(3);
	});

	it('falls back to actions when questions is omitted', () => {
		const rendered = render(
			<ChatSuggestedQuestions controller={makeController()} actions={[{ message: 'Action A' } as any, { message: 'Action B' } as any]} />
		);
		expect(rendered.getByText('Action A')).toBeInTheDocument();
		expect(rendered.getByText('Action B')).toBeInTheDocument();
	});

	it('renders nothing when there are no items', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={[]} />);
		expect(rendered.container.querySelector('.ss__chat-suggested-questions')).toBeNull();
	});

	it('invokes controller.openChat on click', () => {
		const openChat = jest.fn();
		const rendered = render(<ChatSuggestedQuestions controller={makeController(openChat)} questions={['Hello']} />);
		const button = rendered.container.querySelector('.ss__chat-suggested-questions__item') as HTMLElement;
		fireEvent.click(button);
		expect(openChat).toHaveBeenCalledWith('Hello');
	});
});
