import { h } from 'preact';

import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { createHoverProps } from './createHoverProps';

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
