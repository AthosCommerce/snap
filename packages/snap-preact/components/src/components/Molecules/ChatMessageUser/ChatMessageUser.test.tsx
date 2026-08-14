import { h } from 'preact';
import { css } from '@emotion/react';
import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { ChatMessageUser } from './ChatMessageUser';

describe('ChatMessageUser Component', () => {
	const makeController = () =>
		({
			store: {
				currentChat: {
					chat: [],
					attachments: { get: () => null },
				},
			},
			productQuickView: () => {},
		} as any);

	it('renders', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} />);
		expect(rendered.container.querySelector('.ss__chat-message-user')).toBeInTheDocument();
	});

	it('renders the chatItem text', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} />);
		expect(rendered.getByText('Hello there')).toBeInTheDocument();
	});

	it('renders the request type label for productSearch', () => {
		const rendered = render(<ChatMessageUser chatItem={{ id: '1', text: 'sneakers', requestType: 'productSearch' }} controller={makeController()} />);
		expect(rendered.getByText('Searching products')).toBeInTheDocument();
	});

	it('renders the "Filtering products" label when the request has only searchFilters', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{
					id: '1',
					text: 'Filter by product_type Benches',
					requestType: 'productSearch',
					request: { requestType: 'productSearch', searchFilters: [{ key: 'product_type', options: [{ key: 'Benches' }] }] },
				}}
				controller={makeController()}
			/>
		);
		expect(rendered.getByText('Filtering products')).toBeInTheDocument();
	});

	it('renders the "Searching products" label when the request has a searchTerm alongside searchFilters', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{
					id: '1',
					text: 'short modern bench for dog to reach the bed',
					requestType: 'productSearch',
					request: {
						requestType: 'productSearch',
						searchTerm: 'short modern bench for dog to reach the bed',
						searchFilters: [{ key: 'product_type', options: [{ key: 'Furniture/Living Room Furniture/Benches' }] }],
					},
				}}
				controller={makeController()}
			/>
		);
		expect(rendered.getByText('Searching products')).toBeInTheDocument();
		// applied filters still render as pills
		expect(rendered.getByLabelText('Filter: product_type = Furniture/Living Room Furniture/Benches')).toBeInTheDocument();
	});

	it('hides the request type label when hideMessageTypeIndicatorText is true', () => {
		const rendered = render(
			<ChatMessageUser
				chatItem={{ id: '1', text: 'sneakers', requestType: 'productSearch' }}
				controller={makeController()}
				hideMessageTypeIndicatorText={true}
			/>
		);
		expect(rendered.queryByText('Searching products')).not.toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__chat-message-user__request-type')).not.toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(
			<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} className={className} />
		);
		const root = rendered.container.querySelector('.ss__chat-message-user');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(
			<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} disableStyles={true} />
		);
		const root = rendered.container.querySelector('.ss__chat-message-user');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(
			<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} styleScript={styleScript} />
		);
		const root = rendered.container.querySelector('.ss__chat-message-user')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatMessageUser: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-message-user');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatMessageUser.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatMessageUser: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} theme={propTheme} />
			);
			const element = rendered.container.querySelector('.ss__chat-message-user');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatMessageUser.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatMessageUser: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatMessageUser: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatMessageUser chatItem={{ id: '1', text: 'Hello there', requestType: 'general' }} controller={makeController()} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-message-user');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatMessageUser.className);
			expect(element).not.toHaveClass(globalTheme.components.chatMessageUser.className);
		});
	});
});
