import { h } from 'preact';
import { css } from '@emotion/react';
import { render, fireEvent } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
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
		const itemMain = rendered.container.querySelector('.ss__chat-attachment-context__item__main') as HTMLElement;
		expect(itemMain).toHaveAttribute('role', 'button');
		expect(itemMain).toHaveAttribute('tabindex', '0');
		expect(itemMain).toHaveAttribute('aria-label', 'Open a.png');

		fireEvent.keyDown(itemMain, { code: 'Enter' });
		expect(onClick).toHaveBeenCalled();
	});

	it('renders error state when hasError is set', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={[{ id: '1', name: 'a.png', hasError: true, errorMessage: 'oops' }]} />);
		const item = rendered.container.querySelector('.ss__chat-attachment-context__item--error');
		expect(item).toBeInTheDocument();
		expect(rendered.getByText('oops')).toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} className={className} />);
		const root = rendered.container.querySelector('.ss__chat-attachment-context');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} disableStyles={true} />);
		const root = rendered.container.querySelector('.ss__chat-attachment-context');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} styleScript={styleScript} />);
		const root = rendered.container.querySelector('.ss__chat-attachment-context')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatAttachmentContext: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatAttachmentContext title="Attachments" items={baseItems} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-attachment-context');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatAttachmentContext.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatAttachmentContext: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<ChatAttachmentContext title="Attachments" items={baseItems} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__chat-attachment-context');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatAttachmentContext.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatAttachmentContext: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatAttachmentContext: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatAttachmentContext title="Attachments" items={baseItems} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-attachment-context');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatAttachmentContext.className);
			expect(element).not.toHaveClass(globalTheme.components.chatAttachmentContext.className);
		});
	});
});
