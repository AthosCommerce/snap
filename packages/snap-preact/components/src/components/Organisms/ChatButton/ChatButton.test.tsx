import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { ChatButtonOrganism } from './ChatButton';

describe('ChatButtonOrganism Component', () => {
	const makeController = (storeOverrides: any = {}, handlerOverrides: any = {}) =>
		({
			config: { settings: {} },
			handlers: { button: { click: jest.fn(), ...handlerOverrides } },
			store: {
				chatEnabled: true,
				open: false,
				registerLauncher: jest.fn(() => jest.fn()),
				...storeOverrides,
			},
		} as any);

	it('renders an icon-only button by default', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} />);
		const button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;

		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe('BUTTON');
		expect(button.classList.contains('ss__button')).toBe(true);
		expect(button.querySelector('.ss__icon')).toBeInTheDocument();
		expect(button.querySelector('.ss__chat-button__content')).toBeNull();
	});

	it('renders text alongside the icon when content is provided', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} content="Ask AI" />);
		const button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;

		expect(button.querySelector('.ss__chat-button__content')?.textContent).toBe('Ask AI');
		expect(button.querySelector('.ss__icon')).toBeInTheDocument();
	});

	it('renders children as content', () => {
		const rendered = render(
			<ChatButtonOrganism controller={makeController()}>
				<span className="custom-child">Chat with us</span>
			</ChatButtonOrganism>
		);

		expect(rendered.container.querySelector('.ss__chat-button__content .custom-child')?.textContent).toBe('Chat with us');
	});

	it('renders text-only when icon is false', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} content="Ask AI" icon={false} />);
		const button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;

		expect(button.querySelector('.ss__chat-button__content')?.textContent).toBe('Ask AI');
		expect(button.querySelector('.ss__icon')).toBeNull();
	});

	it('supports a custom icon via icon props object', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} icon={{ icon: 'close' }} />);
		expect(rendered.container.querySelector('.ss__icon--close')).toBeInTheDocument();
	});

	it('toggles the chat via the controller button handler on click', () => {
		const controller = makeController();
		const rendered = render(<ChatButtonOrganism controller={controller} />);

		fireEvent.click(rendered.container.querySelector('.ss__chat-button')!);
		expect(controller.handlers.button.click).toHaveBeenCalledTimes(1);
	});

	it('reflects the open state via aria attributes and modifier class', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} />);
		let button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;
		expect(button).toHaveAttribute('aria-expanded', 'false');
		expect(button.getAttribute('aria-label')).toBe('Open chat');

		rendered.rerender(<ChatButtonOrganism controller={makeController({ open: true })} />);
		button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;
		expect(button).toHaveAttribute('aria-expanded', 'true');
		expect(button.getAttribute('aria-label')).toBe('Close chat');
		expect(button.classList.contains('ss__chat-button--open')).toBe(true);
	});

	it('registers as an external launcher on mount and unregisters on unmount', () => {
		const dispose = jest.fn();
		const controller = makeController({ registerLauncher: jest.fn(() => dispose) });
		const rendered = render(<ChatButtonOrganism controller={controller} />);

		expect(controller.store.registerLauncher).toHaveBeenCalledTimes(1);
		expect(dispose).not.toHaveBeenCalled();

		rendered.unmount();
		expect(dispose).toHaveBeenCalledTimes(1);
	});

	it('renders nothing when chat is disabled at bootstrap', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController({ chatEnabled: false })} />);
		expect(rendered.container.querySelector('.ss__chat-button')).toBeNull();
	});

	it('stays mounted when chat becomes disabled mid-session', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} />);
		expect(rendered.container.querySelector('.ss__chat-button')).not.toBeNull();

		rendered.rerender(<ChatButtonOrganism controller={makeController({ chatEnabled: false })} />);
		expect(rendered.container.querySelector('.ss__chat-button')).not.toBeNull();
	});

	it('supports lang overrides', () => {
		const rendered = render(
			<ChatButtonOrganism controller={makeController()} lang={{ openChatButton: { attributes: { 'aria-label': 'Launch assistant' } } }} />
		);
		expect(rendered.container.querySelector('.ss__chat-button')?.getAttribute('aria-label')).toBe('Launch assistant');
	});

	it('is themeable via components.chatButton', () => {
		const theme = { components: { chatButton: { content: 'Need help?' } } };
		const rendered = render(
			<ThemeProvider theme={theme as any}>
				<ChatButtonOrganism controller={makeController()} />
			</ThemeProvider>
		);
		expect(rendered.container.querySelector('.ss__chat-button__content')?.textContent).toBe('Need help?');
	});

	it('respects disableStyles', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} disableStyles />);
		const button = rendered.container.querySelector('.ss__chat-button') as HTMLElement;
		expect(Array.from(button.classList).filter((name) => name.startsWith('css-')).length).toBe(0);
	});

	it('renders custom className', () => {
		const rendered = render(<ChatButtonOrganism controller={makeController()} className="findMe" />);
		expect(rendered.container.querySelector('.ss__chat-button.findMe')).toBeInTheDocument();
	});
});
