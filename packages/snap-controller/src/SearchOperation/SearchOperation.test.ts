import { SearchOperation, isAbortError } from './SearchOperation';

describe('SearchOperation', () => {
	it('exposes the params it was created for', () => {
		const params = { search: { query: { string: 'dress' } } };
		const operation = new SearchOperation(params);

		expect(operation.params).toBe(params);
		expect(operation.cancelled).toBe(false);
		expect(operation.pending).toBe(false);
		expect(operation.reason).toBeUndefined();
		expect(operation.signal?.aborted).toBe(false);
	});

	it('resolves with the outcome it is given', async () => {
		const operation = new SearchOperation({});

		operation.resolve('complete');

		await expect(operation.promise).resolves.toBe('complete');
	});

	it('settles first write wins', async () => {
		const operation = new SearchOperation({});

		operation.resolve('complete');
		operation.resolve('error');
		operation.cancel();

		await expect(operation.promise).resolves.toBe('complete');
		// cancel after settling is a full no-op
		expect(operation.cancelled).toBe(false);
		expect(operation.signal?.aborted).toBe(false);
	});

	it('cancel aborts the signal, resolves cancelled and reports the reason', async () => {
		const onCancel = jest.fn();
		const onDiscard = jest.fn();
		const operation = new SearchOperation({}, { onCancel, onDiscard });

		operation.cancel('because');

		expect(operation.cancelled).toBe(true);
		expect(operation.reason).toBe('because');
		expect(operation.signal?.aborted).toBe(true);
		await expect(operation.promise).resolves.toBe('cancelled');

		expect(onCancel).toHaveBeenCalledTimes(1);
		expect(onCancel).toHaveBeenCalledWith('because');
		expect(onDiscard).toHaveBeenCalledTimes(1);
	});

	it('cancel is idempotent', () => {
		const onCancel = jest.fn();
		const onDiscard = jest.fn();
		const operation = new SearchOperation({}, { onCancel, onDiscard });

		operation.cancel('first');
		operation.cancel('second');

		expect(operation.reason).toBe('first');
		expect(onCancel).toHaveBeenCalledTimes(1);
		expect(onDiscard).toHaveBeenCalledTimes(1);
	});

	it('does not invoke callbacks when cancelled after resolving', () => {
		const onCancel = jest.fn();
		const onDiscard = jest.fn();
		const operation = new SearchOperation({}, { onCancel, onDiscard });

		operation.resolve('complete');
		operation.cancel();

		expect(onCancel).not.toHaveBeenCalled();
		expect(onDiscard).not.toHaveBeenCalled();
	});

	it('supersede cancels without firing the cancel callback', async () => {
		const onCancel = jest.fn();
		const onDiscard = jest.fn();
		const operation = new SearchOperation({}, { onCancel, onDiscard });

		operation.supersede();

		expect(operation.cancelled).toBe(true);
		expect(operation.reason).toBe('superseded');
		expect(operation.signal?.aborted).toBe(true);
		await expect(operation.promise).resolves.toBe('cancelled');

		// superseding is routine internal behavior - no event for integrators
		expect(onCancel).not.toHaveBeenCalled();
		// cleanup still runs
		expect(onDiscard).toHaveBeenCalledTimes(1);
	});

	it('tracks pending state until started', () => {
		const operation = new SearchOperation({ provisional: true }, { pending: true });

		expect(operation.pending).toBe(true);

		const finalParams = { provisional: false };
		operation.start(finalParams);

		expect(operation.pending).toBe(false);
		expect(operation.params).toBe(finalParams);
	});

	it('never rejects', async () => {
		const rejectionSpy = jest.fn();

		const completed = new SearchOperation({});
		const cancelled = new SearchOperation({});
		const superseded = new SearchOperation({});
		const errored = new SearchOperation({});

		[completed, cancelled, superseded, errored].forEach((operation) => operation.promise.catch(rejectionSpy));

		completed.resolve('complete');
		cancelled.cancel();
		superseded.supersede();
		errored.resolve('error');

		await expect(Promise.all([completed.promise, cancelled.promise, superseded.promise, errored.promise])).resolves.toEqual([
			'complete',
			'cancelled',
			'cancelled',
			'error',
		]);

		expect(rejectionSpy).not.toHaveBeenCalled();
	});
});

describe('isAbortError', () => {
	it('detects a bare AbortError', () => {
		const err = new Error('aborted');
		err.name = 'AbortError';

		expect(isAbortError(err)).toBe(true);
	});

	it('detects an AbortError wrapped by the client', () => {
		const err = new Error('aborted');
		err.name = 'AbortError';

		expect(isAbortError({ err, fetchDetails: { status: undefined } })).toBe(true);
	});

	it('ignores other errors', () => {
		expect(isAbortError(new Error('boom'))).toBe(false);
		expect(isAbortError({ err: new Error('boom') })).toBe(false);
		expect(isAbortError(undefined)).toBe(false);
		expect(isAbortError('cancelled')).toBe(false);
	});
});
