import { debounce } from './debounce';

describe('debounce', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});

	it('can debounce an event', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func);
		debouncedFunc();
		debouncedFunc();
		debouncedFunc();
		expect(func).not.toHaveBeenCalled();

		// the default debounce delay is 200ms - halfway through, nothing has fired yet
		jest.advanceTimersByTime(100);

		expect(func).not.toHaveBeenCalled();

		jest.advanceTimersByTime(100);

		expect(func).toHaveBeenCalled();
		expect(func).toHaveBeenCalledTimes(1);
	});

	it('can debounce an event using custom delay', () => {
		const delay = 500;
		const func = jest.fn();
		const debouncedFunc = debounce(func, delay);
		debouncedFunc();
		debouncedFunc();
		debouncedFunc();
		expect(func).not.toHaveBeenCalled();

		jest.advanceTimersByTime(delay / 2);
		expect(func).not.toHaveBeenCalled();
		jest.advanceTimersByTime(delay / 2);

		expect(func).toHaveBeenCalled();
		expect(func).toHaveBeenCalledTimes(1);
	});
});
