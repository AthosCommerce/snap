import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { ChatButton } from './ChatButton';

describe('ChatButton Template', () => {
	const makeController = (overrides: any = {}) =>
		({
			config: { settings: {} },
			handlers: { button: { click: () => {} } },
			store: {
				chatEnabled: true,
				open: false,
				registerLauncher: jest.fn(() => jest.fn()),
				...overrides,
			},
		} as any);

	it('renders a wrapping ss__chat-button-template element around the ss__chat-button organism', () => {
		const rendered = render(<ChatButton controller={makeController()} />);
		const wrapper = rendered.container.querySelector('.ss__chat-button-template');
		expect(wrapper).toBeInTheDocument();
		expect(wrapper?.querySelector('.ss__chat-button')).toBeInTheDocument();
	});

	it('forwards content props to the underlying organism', () => {
		const rendered = render(<ChatButton controller={makeController()} content="Ask AI" />);
		expect(rendered.container.querySelector('.ss__chat-button__content')?.textContent).toBe('Ask AI');
	});

	it('respects chatEnabled=false by rendering no button inside the wrapper', () => {
		const rendered = render(<ChatButton controller={makeController({ chatEnabled: false })} />);
		expect(rendered.container.querySelector('.ss__chat-button')).toBeNull();
	});

	it('renders with classname on the wrapper only', () => {
		const rendered = render(<ChatButton controller={makeController()} className="classy" />);
		const wrapper = rendered.container.querySelector('.ss__chat-button-template');
		expect(wrapper).toHaveClass('classy');
		expect(rendered.container.querySelector('.ss__chat-button')).not.toHaveClass('classy');
	});

	it('is themeable with ThemeProvider via components.chatButton', () => {
		const globalTheme = {
			components: {
				chatButton: {
					className: 'classy',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme as any}>
				<ChatButton controller={makeController()} />
			</ThemeProvider>
		);
		const wrapper = rendered.container.querySelector('.ss__chat-button-template');
		expect(wrapper).toBeInTheDocument();
		expect(wrapper).toHaveClass(globalTheme.components.chatButton.className);
	});
});
