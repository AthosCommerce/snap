import { h } from 'preact';
import { css } from '@emotion/react';
import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';

describe('ChatLoadingIndicator Component', () => {
	it('renders nothing when loading is false', () => {
		const rendered = render(<ChatLoadingIndicator loading={false} />);
		expect(rendered.container.querySelector('.ss__chat-loading-indicator')).toBeNull();
	});

	it('renders when loading is true', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator');
		expect(root).toBeInTheDocument();
	});

	it('has role="status" and aria-live="polite" for screen readers', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator') as HTMLElement;
		expect(root).toHaveAttribute('role', 'status');
		expect(root).toHaveAttribute('aria-live', 'polite');
	});

	it('renders a verb', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} verbs={['Brewing']} />);
		expect(rendered.getByText('Brewing...')).toBeInTheDocument();
	});

	it('falls back to the default verbs when verbs is an empty array', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} verbs={[]} />);
		const verbElement = rendered.container.querySelector('.ss__chat-loading-indicator__verb');
		expect(verbElement).toBeInTheDocument();
		expect(['Thinking...', 'Searching...', 'Analyzing...', 'Generating...', 'Processing...']).toContain(verbElement?.textContent);
	});

	it('uses lang overrides for the default verbs', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} lang={{ thinkingVerb: { value: 'Pondering' } }} />);
		expect(rendered.getByText('Pondering...')).toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<ChatLoadingIndicator loading={true} className={className} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} disableStyles={true} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ background: 'rgb(10, 20, 30)' });
		const rendered = render(<ChatLoadingIndicator loading={true} styleScript={styleScript} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator')!;
		const styles = getComputedStyle(root);
		expect(styles.background).toBe('rgb(10, 20, 30)');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatLoadingIndicator: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatLoadingIndicator loading={true} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-loading-indicator');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatLoadingIndicator.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatLoadingIndicator: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<ChatLoadingIndicator loading={true} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__chat-loading-indicator');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatLoadingIndicator.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatLoadingIndicator: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatLoadingIndicator: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatLoadingIndicator loading={true} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-loading-indicator');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatLoadingIndicator.className);
			expect(element).not.toHaveClass(globalTheme.components.chatLoadingIndicator.className);
		});
	});
});
