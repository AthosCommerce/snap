import { h } from 'preact';
import { render } from '@testing-library/preact';
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

	it('renders a wrapping ss__chat element', () => {
		const rendered = render(<Chat controller={makeController()} />);
		expect(rendered.container.querySelector('.ss__chat')).toBeInTheDocument();
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
});
