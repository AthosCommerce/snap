import { h } from 'preact';
import { css } from '@emotion/react';
import { render, fireEvent } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { ChatSuggestedQuestions } from './ChatSuggestedQuestions';

describe('ChatSuggestedQuestions Component', () => {
	const makeController = (openChat = jest.fn()) =>
		({
			openChat,
		} as any);

	it('renders', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['What is on sale?']} />);
		const root = rendered.container.querySelector('.ss__chat-suggested-questions');
		expect(root).toBeInTheDocument();
	});

	it('renders one button per question', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['One', 'Two', 'Three']} />);
		expect(rendered.container.querySelectorAll('.ss__chat-suggested-questions__item').length).toBe(3);
	});

	it('falls back to actions when questions is omitted', () => {
		const rendered = render(
			<ChatSuggestedQuestions controller={makeController()} actions={[{ message: 'Action A' } as any, { message: 'Action B' } as any]} />
		);
		expect(rendered.getByText('Action A')).toBeInTheDocument();
		expect(rendered.getByText('Action B')).toBeInTheDocument();
	});

	it('renders nothing when there are no items', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={[]} />);
		expect(rendered.container.querySelector('.ss__chat-suggested-questions')).toBeNull();
	});

	it('invokes controller.openChat on click', () => {
		const openChat = jest.fn();
		const rendered = render(<ChatSuggestedQuestions controller={makeController(openChat)} questions={['Hello']} />);
		const button = rendered.container.querySelector('.ss__chat-suggested-questions__item') as HTMLElement;
		fireEvent.click(button);
		expect(openChat).toHaveBeenCalledWith('Hello');
	});

	it('renders keyboard-accessible question buttons', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['Hello']} />);
		const button = rendered.container.querySelector('.ss__chat-suggested-questions__item');
		expect(button).toHaveClass('ss__button');
		expect(button).toHaveAttribute('role', 'button');
		expect(button).toHaveAttribute('tabindex', '0');
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['Hello']} className={className} />);
		const root = rendered.container.querySelector('.ss__chat-suggested-questions');
		expect(root).toBeInTheDocument();
		expect(root).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['Hello']} disableStyles={true} />);
		const root = rendered.container.querySelector('.ss__chat-suggested-questions');
		expect(root?.classList).toHaveLength(1);
	});

	it('renders with a custom styleScript', () => {
		const styleScript = () => css({ padding: '11px' });
		const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['Hello']} styleScript={styleScript} />);
		const root = rendered.container.querySelector('.ss__chat-suggested-questions')!;
		expect(getComputedStyle(root).padding).toBe('11px');
	});

	it('falls back to the default primary color when the theme color is currentColor', () => {
		const theme = { variables: { colors: { primary: 'currentColor' } } };
		render(<ChatSuggestedQuestions controller={makeController()} questions={['Hello']} theme={theme as any} />);
		const styles = Array.from(document.styleSheets)
			.flatMap((sheet) => Array.from(sheet.cssRules))
			.map((rule) => rule.cssText)
			.filter((cssText) => cssText.includes('ss__chat-suggested-questions'))
			.join('');
		expect(styles).toMatch(/#253B80|rgb\(37, 59, 128\)/i);
		expect(styles.toLowerCase()).not.toContain('currentcolor');
	});

	describe('theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatSuggestedQuestions: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatSuggestedQuestions controller={makeController()} questions={['What is on sale?']} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-suggested-questions');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.chatSuggestedQuestions.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					chatSuggestedQuestions: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<ChatSuggestedQuestions controller={makeController()} questions={['What is on sale?']} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__chat-suggested-questions');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatSuggestedQuestions.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					chatSuggestedQuestions: {
						className: 'classy',
					},
				},
			};
			const propTheme = {
				components: {
					chatSuggestedQuestions: {
						className: 'classier',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<ChatSuggestedQuestions controller={makeController()} questions={['What is on sale?']} theme={propTheme} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__chat-suggested-questions');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.chatSuggestedQuestions.className);
			expect(element).not.toHaveClass(globalTheme.components.chatSuggestedQuestions.className);
		});
	});
});
