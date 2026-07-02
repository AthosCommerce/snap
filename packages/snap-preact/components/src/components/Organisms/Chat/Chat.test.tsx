import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatOrganism } from './Chat';

// jsdom lacks scrollTo and ResizeObserver, both used by the chat organism when open
beforeAll(() => {
	Element.prototype.scrollTo = function () {} as any;
	(globalThis as any).ResizeObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
});

describe('ChatOrganism Component', () => {
	const makeController = (overrides: any = {}) =>
		({
			config: { settings: {} },
			handlers: { button: { click: () => {} } },
			focusInput: () => {},
			upload: () => {},
			store: {
				chatEnabled: true,
				open: false,
				loading: false,
				blocked: false,
				error: undefined,
				inputValue: '',
				suggestedQuestions: [],
				facets: [],
				hasPendingFacetChanges: false,
				features: {
					imageSearch: { enabled: false },
					similarProducts: { enabled: false },
				},
				chats: [],
				currentChat: undefined,
				welcomeMessage: undefined,
				createChat: () => {},
				...overrides,
			},
		} as any);

	it('renders nothing when chat is disabled', () => {
		const rendered = render(<ChatOrganism controller={makeController({ chatEnabled: false })} />);
		expect(rendered.container.querySelector('.ss__chat')).toBeNull();
	});

	it('stays mounted with a disabled input and unavailable message when chat becomes disabled mid-session', () => {
		const rendered = render(<ChatOrganism controller={makeController({ open: true })} />);
		expect(rendered.container.querySelector('.ss__chat')).not.toBeNull();

		rendered.rerender(<ChatOrganism controller={makeController({ open: true, chatEnabled: false })} />);

		expect(rendered.container.querySelector('.ss__chat')).not.toBeNull();
		const input = rendered.container.querySelector('input[name="ss-chat-input"]') as HTMLInputElement;
		expect(input).toBeInTheDocument();
		expect(input.disabled).toBe(true);
		expect(rendered.container.querySelector('.ss__chat__error')?.textContent).toContain('Service is temporarily unavailable');
	});

	it('renders the chat bubble as a keyboard-accessible button', () => {
		const rendered = render(<ChatOrganism controller={makeController()} />);
		const bubble = rendered.container.querySelector('.ss__chat__bubble') as HTMLElement;
		expect(bubble).toBeInTheDocument();
		expect(bubble.tagName).toBe('BUTTON');
		expect(bubble).toHaveAttribute('aria-label');
		expect(bubble).toHaveAttribute('aria-expanded', 'false');
	});

	it('marks aria-expanded=true when chat is open', () => {
		const rendered = render(<ChatOrganism controller={makeController({ open: true })} />);
		const bubble = rendered.container.querySelector('.ss__chat__bubble') as HTMLElement;
		expect(bubble).toHaveAttribute('aria-expanded', 'true');
	});

	it('marks the messages container as an accessible live region', () => {
		const rendered = render(<ChatOrganism controller={makeController({ open: true })} />);
		const messages = rendered.container.querySelector('.ss__chat__messages') as HTMLElement;
		expect(messages).toHaveAttribute('role', 'log');
		expect(messages).toHaveAttribute('aria-live', 'polite');
	});
});
