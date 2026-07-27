import { until, type UntilOptions } from './until';

const wait = (time = 1) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

describe('until', () => {
	const options: Partial<UntilOptions> = {
		checkMax: 5, // limit checks because max jest timer is 5s
		checkCount: 0,
		checkTime: 60,
		exponential: 1.1,
		defer: false,
		executeFunction: true,
	};

	it('should reject try/catch', async () => {
		const thing = undefined;
		expect.assertions(1);

		try {
			await until(thing, options);
		} catch (e) {
			expect(e).toBe(undefined);
		}
	});

	it('should reject .catch()', async () => {
		const thing = undefined;
		expect.assertions(1);

		const returnVal = await until(thing, options)
			.then(() => 'success')
			.catch(() => 'rejected');
		expect(returnVal).toBe('rejected');
	});

	it('should reject falsy values', async () => {
		const things = [false, 0, '', null, undefined, NaN];
		expect.assertions(things.length);

		for (let i = 0; i < things.length; i++) {
			const thing = things[i];
			const returnVal = await until(thing, options)
				.then(() => 'success')
				.catch(() => 'rejected');
			expect(returnVal).toBe('rejected');
		}
	});

	it('should resolve immediate - function', async () => {
		const thing = jest.fn(() => 'success');
		expect.assertions(2);

		const returnVal = await until(thing, options);
		expect(thing).toHaveBeenCalledTimes(1);
		expect(returnVal).toBe('success');
	});

	it('should not executeFunction', async () => {
		const thing = jest.fn(() => 'success');
		expect.assertions(2);

		// return the function reference instead of executing it
		const returnVal = await until(thing, { ...options, executeFunction: false });
		expect(thing).toHaveBeenCalledTimes(0);
		expect(returnVal).toBe(thing);
	});

	it('should resolve immediate - primitive', async () => {
		const thing = 'success';
		expect.assertions(1);

		const returnVal = await until(thing, options);
		expect(returnVal).toBe(thing);
	});

	it('should resolve truthy values', async () => {
		const things = [true, {}, [], jest.fn, 42, -42, 42.4, -42.5, 42n, Infinity, -Infinity, 'false', 'string', new Date()];
		expect.assertions(things.length);

		for (let i = 0; i < things.length; i++) {
			const thing = things[i];
			const returnVal = await until(thing, options)
				.then(() => 'success')
				.catch(() => 'rejected');
			expect(returnVal).toBe('success');
		}
	});

	it('should resolve defer - function', async () => {
		const thing = jest.fn(() => 'success');
		expect.assertions(1);

		const returnVal = await until(thing, { ...options, defer: true })
			.then((val) => val)
			.catch(() => 'rejected');
		expect(returnVal).toBe('success');
	});

	it('should resolve defer - primitive', async () => {
		const thing = 'success';
		expect.assertions(1);

		const returnVal = await until(thing, { ...options, defer: true })
			.then((val) => val)
			.catch(() => 'rejected');
		expect(returnVal).toBe('success');
	});

	it('should resolve eventually', async () => {
		let thing = '';
		expect.assertions(2);

		const delay = options.checkTime! * (options.checkCount! - 1);
		setTimeout(() => {
			thing = 'success';
		}, delay);

		until(() => thing, options);

		expect(thing).toBe('');

		await wait(delay);

		expect(thing).toBe('success');
	});

	it('should reject eventually', async () => {
		jest.useFakeTimers();

		try {
			let thing = '';
			expect.assertions(2);

			// attach the rejection expectation *before* draining the clock: it asserts the promise
			// actually rejects, and doubles as the handler so the rejection can never surface as an
			// unhandled rejection. runAllTimersAsync drains the exponential backoff across all
			// `checkMax` checks, so the schedule does not have to be reproduced here.
			const rejection = expect(until(() => thing, options)).rejects.toBeUndefined();

			await jest.runAllTimersAsync();
			await rejection;

			expect(thing).toBe('');
		} finally {
			jest.runOnlyPendingTimers();
			jest.useRealTimers();
		}
	});
});
