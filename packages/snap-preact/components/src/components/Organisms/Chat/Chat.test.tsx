import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { ChatOrganism } from './Chat';

// jsdom lacks scrollTo, used by the chat organism when open (ResizeObserver comes from setupTests.ts)
beforeAll(() => {
	Element.prototype.scrollTo = function () {} as any;
});

describe('ChatOrganism Component', () => {
	const makeController = (overrides: any = {}) =>
		({
			config: { settings: {} },
			handlers: { button: { click: () => {} } },
			focusInput: () => {},
			upload: () => {},
			openChat: () => {},
			switchChat: () => {},
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

	const makeCurrentChat = (overrides: any = {}) => ({
		id: 'chat-1',
		chat: [],
		attachments: { attached: [], remove: () => {} },
		comparisons: { compared: [], committed: [], maxItems: 4, reset: () => {}, resetCommitted: () => {}, remove: () => {} },
		feedback: { rating: null, dismissed: false, justGiven: false },
		isExpired: false,
		sessionLimitReached: false,
		topicDrift: undefined,
		activeMessage: undefined,
		activeMessageId: undefined,
		dismissedSideChatMessageId: undefined,
		requestType: '',
		createdAt: new Date(),
		dismissSideChat: () => {},
		save: () => {},
		...overrides,
	});

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

	it('hides the bubble and suggested questions while an external launcher is registered', () => {
		const controller = makeController({ hasExternalLauncher: true, suggestedQuestions: ['What is new?'] });
		const rendered = render(<ChatOrganism controller={controller} />);

		expect(rendered.container.querySelector('.ss__chat')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__chat__bubble')).toBeNull();
		expect(rendered.container.querySelector('.ss__chat__suggested-questions')).toBeNull();
	});

	it('hides the bubble and suggested questions when hideBubble is set', () => {
		const controller = makeController({ suggestedQuestions: ['What is new?'] });
		const rendered = render(<ChatOrganism controller={controller} hideBubble />);

		expect(rendered.container.querySelector('.ss__chat__bubble')).toBeNull();
		expect(rendered.container.querySelector('.ss__chat__suggested-questions')).toBeNull();
	});

	it('shows suggested questions next to the bubble when closed with no session', () => {
		const controller = makeController({ suggestedQuestions: ['What is new?'] });
		const rendered = render(<ChatOrganism controller={controller} />);

		expect(rendered.container.querySelector('.ss__chat__bubble')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__chat__suggested-questions')?.textContent).toContain('What is new?');
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

	it('limits the chat input to 256 characters', () => {
		const rendered = render(<ChatOrganism controller={makeController({ open: true })} />);
		const input = rendered.container.querySelector('input[name="ss-chat-input"]') as HTMLInputElement;
		expect(input).toHaveAttribute('maxlength', '256');
	});

	it('shows a character counter once the input reaches 200 characters', () => {
		const rendered = render(<ChatOrganism controller={makeController({ open: true, inputValue: 'a'.repeat(199) })} />);
		expect(rendered.container.querySelector('.ss__chat__input__counter')).toBeNull();

		rendered.rerender(<ChatOrganism controller={makeController({ open: true, inputValue: 'a'.repeat(200) })} />);
		expect(rendered.container.querySelector('.ss__chat__input__counter')?.textContent).toBe('200/256');
	});

	it('renders messages from the current chat when open', () => {
		const currentChat = makeCurrentChat({
			chat: [
				{ id: 'msg-1', messageType: 'user', text: 'hello there' },
				{ id: 'msg-2', messageType: 'text', text: 'hi, how can I help?' },
			],
		});
		const rendered = render(<ChatOrganism controller={makeController({ open: true, currentChat })} />);

		const messages = rendered.container.querySelectorAll('.ss__chat__message');
		expect(messages).toHaveLength(2);
		expect(rendered.container.querySelector('.ss__chat__message--user')).toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__chat__message--text')).toBeInTheDocument();
		expect(rendered.container.textContent).toContain('hello there');
	});

	it('opens the history dropdown when the history button is clicked', () => {
		const currentChat = makeCurrentChat();
		const chats = [
			{ id: 'chat-1', chat: [], createdAt: new Date() },
			{ id: 'chat-2', chat: [{ id: 'msg-1', messageType: 'user', text: 'older conversation' }], createdAt: new Date() },
		];
		const rendered = render(
			<ChatOrganism
				controller={makeController({ open: true, currentChat, chats, currentChatId: 'chat-1', clearHistory: () => {}, switchChat: () => {} })}
			/>
		);

		const historyDropdown = rendered.container.querySelector('.ss__chat__header__dropdown-history') as HTMLElement;
		expect(historyDropdown).toBeInTheDocument();
		expect(historyDropdown).not.toHaveClass('ss__dropdown--open');
		// the ChatHistory styles attach to the dropdown root via the emotion css prop (cache key 'ss')
		expect(Array.from(historyDropdown.classList).some((cls) => /^(ss|css)-[a-z0-9]+$/.test(cls))).toBe(true);

		const historyButton = historyDropdown.querySelector('.ss__dropdown__button') as HTMLElement;
		fireEvent.click(historyButton);

		expect(rendered.container.querySelector('.ss__dropdown--open')).toBeInTheDocument();
		const popup = rendered.container.querySelector('.ss__chat__history') as HTMLElement;
		expect(popup).toBeInTheDocument();
		expect(popup.textContent).toContain('older conversation');
	});

	it('renders with classname', () => {
		const rendered = render(<ChatOrganism controller={makeController()} className="classy" />);
		const chat = rendered.container.querySelector('.ss__chat');
		expect(chat).toHaveClass('classy');
	});

	it('disables styles', () => {
		const rendered = render(<ChatOrganism controller={makeController()} className="classy" disableStyles={true} />);
		const chat = rendered.container.querySelector('.ss__chat');
		// ss__chat + ss__chat--minimized + classy (no emotion-generated class)
		expect(chat?.classList).toHaveLength(3);
	});

	it('applies user styleScript even when default styles are disabled', () => {
		const styleScript = jest.fn(() => ({ background: 'red' }));
		render(<ChatOrganism controller={makeController()} disableStyles={true} styleScript={styleScript as any} />);
		expect(styleScript).toHaveBeenCalled();
	});

	describe('ChatOrganism theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chat: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme as any}>
					<ChatOrganism controller={makeController()} />
				</ThemeProvider>
			);
			const chat = rendered.container.querySelector('.ss__chat');
			expect(chat).toBeInTheDocument();
			expect(chat).toHaveClass(globalTheme.components.chat.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chat: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<ChatOrganism controller={makeController()} theme={propTheme as any} />);
			const chat = rendered.container.querySelector('.ss__chat');
			expect(chat).toBeInTheDocument();
			expect(chat).toHaveClass(propTheme.components.chat.className);
		});

		it('falls back to default colors when theme variables are contextual keywords like currentColor', () => {
			// the base templates theme defines colors as 'currentColor' when unconfigured; those
			// must not defeat the chat's fallback colors (background: currentColor paints the
			// text color and makes the header/bubble white-on-white)
			const globalTheme = {
				variables: {
					colors: {
						primary: 'currentColor',
						secondary: 'currentColor',
						accent: 'currentColor',
					},
				},
			};
			render(
				<ThemeProvider theme={globalTheme as any}>
					<ChatOrganism controller={makeController({ open: true })} />
				</ThemeProvider>
			);
			// emotion injects via CSSOM insertRule, so rules are only readable through styleSheets
			const styles = Array.from(document.styleSheets)
				.flatMap((sheet) => Array.from(sheet.cssRules))
				.map((rule) => rule.cssText)
				.join('');
			expect(styles).toMatch(/#253B80|rgb\(37, 59, 128\)/i);
			expect(styles.toLowerCase()).not.toContain('currentcolor');
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chat: {
						className: 'not classy',
					},
				},
			};
			const propTheme = {
				components: {
					chat: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme as any}>
					<ChatOrganism controller={makeController()} theme={propTheme as any} />
				</ThemeProvider>
			);

			const chat = rendered.container.querySelector('.ss__chat');
			expect(chat).toBeInTheDocument();
			expect(chat).toHaveClass(propTheme.components.chat.className);
			expect(chat).not.toHaveClass('not classy');
		});
	});

	describe('ChatOrganism lang works', () => {
		it('renders a lang override for the expired message', () => {
			const currentChat = makeCurrentChat({ isExpired: true });
			const rendered = render(
				<ChatOrganism controller={makeController({ open: true, currentChat })} lang={{ expiredMessage: { value: 'Sesión expirada' } }} />
			);
			expect(rendered.container.querySelector('.ss__chat__expired__message')?.textContent).toBe('Sesión expirada');
		});

		it('renders a lang override for the composer placeholder', () => {
			const rendered = render(
				<ChatOrganism controller={makeController({ open: true })} lang={{ inputPlaceholder: { value: 'Escribe tu mensaje...' } }} />
			);
			const input = rendered.container.querySelector('input[name="ss-chat-input"]') as HTMLInputElement;
			expect(input).toHaveAttribute('placeholder', 'Escribe tu mensaje...');
		});
	});
});
