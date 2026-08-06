import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { Chat } from './Chat';

describe('Chat Template', () => {
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
				createChat: () => {},
				...overrides,
			},
		} as any);

	it('renders a wrapping ss__chat-template element around the ss__chat organism', () => {
		const rendered = render(<Chat controller={makeController()} />);
		const wrapper = rendered.container.querySelector('.ss__chat-template');
		expect(wrapper).toBeInTheDocument();
		expect(wrapper?.querySelector('.ss__chat')).toBeInTheDocument();
	});

	it('does not duplicate the ss__chat classname on two levels', () => {
		const rendered = render(<Chat controller={makeController()} />);
		expect(rendered.container.querySelectorAll('.ss__chat')).toHaveLength(1);
	});

	it('forwards controller props to the underlying organism (bubble renders)', () => {
		const rendered = render(<Chat controller={makeController()} />);
		const bubble = rendered.container.querySelector('.ss__chat__bubble') as HTMLElement;
		expect(bubble).toBeInTheDocument();
		expect(bubble.tagName).toBe('BUTTON');
	});

	it('respects chatEnabled=false by rendering no bubble inside the wrapper', () => {
		const rendered = render(<Chat controller={makeController({ chatEnabled: false })} />);
		expect(rendered.container.querySelector('.ss__chat__bubble')).toBeNull();
	});

	it('renders with classname on the wrapper only', () => {
		const rendered = render(<Chat controller={makeController()} className="classy" />);
		const wrapper = rendered.container.querySelector('.ss__chat-template');
		expect(wrapper).toHaveClass('classy');
		expect(rendered.container.querySelector('.ss__chat')).not.toHaveClass('classy');
	});

	it('disables styles', () => {
		const rendered = render(<Chat controller={makeController()} className="classy" disableStyles={true} />);
		const wrapper = rendered.container.querySelector('.ss__chat-template');
		// ss__chat-template + classy (no emotion-generated class)
		expect(wrapper?.classList).toHaveLength(2);
	});

	describe('Chat template theming works', () => {
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
					<Chat controller={makeController()} />
				</ThemeProvider>
			);
			const wrapper = rendered.container.querySelector('.ss__chat-template');
			expect(wrapper).toBeInTheDocument();
			expect(wrapper).toHaveClass(globalTheme.components.chat.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chat: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<Chat controller={makeController()} theme={propTheme as any} />);
			const wrapper = rendered.container.querySelector('.ss__chat-template');
			expect(wrapper).toBeInTheDocument();
			expect(wrapper).toHaveClass(propTheme.components.chat.className);
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
					<Chat controller={makeController()} theme={propTheme as any} />
				</ThemeProvider>
			);
			const wrapper = rendered.container.querySelector('.ss__chat-template');
			expect(wrapper).toBeInTheDocument();
			expect(wrapper).toHaveClass(propTheme.components.chat.className);
			expect(wrapper).not.toHaveClass('not classy');
		});
	});
});
