import { h } from 'preact';

import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { createHoverProps } from './createHoverProps';

const HOVER_FOCUS_ATTRIBUTE = 'ss-hover-focus';

describe('createHoverProps', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});

	it('calls the callback provided after the default time', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		const callback = jest.fn();
		const delay = 333;
		const hoverProps = createHoverProps(callback, { delay, focusElem: false });

		// @ts-ignore --- testing-library doesn't like the types
		const rendered = render(<div className="hover-element" {...hoverProps}></div>);

		const element = rendered.container.querySelector('.hover-element');
		await user.hover(element!);

		await jest.advanceTimersByTimeAsync(delay);

		expect(callback).toHaveBeenCalled();
		expect(element).not.toHaveFocus();
	});

	it('focuses the hovered element without a focus ring until it is used from the keyboard', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		const hoverProps = createHoverProps();

		// @ts-ignore --- testing-library doesn't like the types
		const rendered = render(<a className="hover-element" href="#" {...hoverProps}></a>);

		const element = rendered.container.querySelector('.hover-element') as HTMLElement;
		const focus = jest.spyOn(element, 'focus');
		expect(element).not.toHaveFocus();
		expect(element.hasAttribute(HOVER_FOCUS_ATTRIBUTE)).toBe(false);

		await user.hover(element);
		await jest.advanceTimersByTimeAsync(333);

		expect(element).toHaveFocus();
		expect(focus).toHaveBeenCalledWith({ focusVisible: false });
		expect(element.hasAttribute(HOVER_FOCUS_ATTRIBUTE)).toBe(true);
		expect(document.getElementById('ssHoverFocusStyle')?.innerHTML).toBe(
			`[${HOVER_FOCUS_ATTRIBUTE}][${HOVER_FOCUS_ATTRIBUTE}]:focus-visible { outline: none !important; }`
		);

		// a key pressed on the hovered element brings its focus ring back
		await user.keyboard('{ArrowDown}');
		expect(element).toHaveFocus();
		expect(element.hasAttribute(HOVER_FOCUS_ATTRIBUTE)).toBe(false);
	});

	it('clears the hover focus mark when the element loses focus', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		const hoverProps = createHoverProps();

		// @ts-ignore --- testing-library doesn't like the types
		const rendered = render(<a className="hover-element" href="#" {...hoverProps}></a>);

		const element = rendered.container.querySelector('.hover-element') as HTMLElement;
		await user.hover(element);
		await jest.advanceTimersByTimeAsync(333);
		expect(element.hasAttribute(HOVER_FOCUS_ATTRIBUTE)).toBe(true);

		element.blur();

		expect(element).not.toHaveFocus();
		expect(element.hasAttribute(HOVER_FOCUS_ATTRIBUTE)).toBe(false);
	});

	it('does not call the callback provided if hover stops before delay', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		const callback = jest.fn();
		const delay = 333;
		const hoverProps = createHoverProps(callback, { delay });

		// @ts-ignore --- testing-library doesn't like the types
		const rendered = render(<div className="hover-element" {...hoverProps}></div>);

		const element = rendered.container.querySelector('.hover-element');
		await user.hover(element!);

		// don't elapse the full delay, then unhover
		await jest.advanceTimersByTimeAsync(delay - 200);
		expect(callback).not.toHaveBeenCalled();

		await user.unhover(element!);

		// draining every remaining timer proves the pending callback was cleared,
		// not merely that it had yet to fire
		await jest.runAllTimersAsync();

		expect(callback).not.toHaveBeenCalled();
	});
});
