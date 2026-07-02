import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { ChatAttachmentContext } from './ChatAttachmentContext';

describe('ChatAttachmentContext Component', () => {
	const baseItems = [
		{ id: '1', name: 'attachment-one.png', imageUrl: '/a.png' },
		{ id: '2', name: 'attachment-two.png', imageUrl: '/b.png' },
	];

	it('renders', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} />);
		const root = rendered.container.querySelector('.ss__chat-attachment-context');
		expect(root).toBeInTheDocument();
	});

	it('renders the title', () => {
		const rendered = render(<ChatAttachmentContext title="My Title" items={baseItems} />);
		expect(rendered.getByText('My Title')).toBeInTheDocument();
	});

	it('renders one item per entry', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} />);
		const items = rendered.container.querySelectorAll('.ss__chat-attachment-context__item');
		expect(items.length).toBe(2);
	});

	it('returns an empty fragment when items is empty', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={[]} />);
		expect(rendered.container.querySelector('.ss__chat-attachment-context')).toBeNull();
	});

	it('makes items with onClick keyboard accessible', () => {
		const onClick = jest.fn();
		const rendered = render(<ChatAttachmentContext title="Attachments" items={[{ id: '1', name: 'a.png', onClick }]} />);
		const item = rendered.container.querySelector('.ss__chat-attachment-context__item') as HTMLElement;
		expect(item).toHaveAttribute('role', 'button');
		expect(item).toHaveAttribute('tabindex', '0');

		fireEvent.keyDown(item, { key: 'Enter' });
		expect(onClick).toHaveBeenCalled();
	});

	it('renders error state when hasError is set', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={[{ id: '1', name: 'a.png', hasError: true, errorMessage: 'oops' }]} />);
		const item = rendered.container.querySelector('.ss__chat-attachment-context__item--error');
		expect(item).toBeInTheDocument();
		expect(rendered.getByText('oops')).toBeInTheDocument();
	});
});
