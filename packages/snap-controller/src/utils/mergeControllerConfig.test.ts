import deepmerge from 'deepmerge';

import { mergeControllerConfig } from './mergeControllerConfig';

class FakeStore {
	currency = 'usd';
	setCurrency(code: string) {
		this.currency = code;
	}
}

describe('mergeControllerConfig', () => {
	it('merges plain config values with the defaults', () => {
		const merged = mergeControllerConfig({ settings: { history: 5 } } as any, { id: 'search', settings: { infinite: true } } as any);

		expect(merged).toEqual({ id: 'search', settings: { history: 5, infinite: true } });
	});

	it('preserves plugin arguments by reference so class instances keep their prototype', () => {
		const store = new FakeStore();
		const plugin = jest.fn();
		const plugins = [[plugin, { enabled: true }, store]];

		const merged = mergeControllerConfig({ settings: {} } as any, { id: 'search', plugins } as any) as any;

		// deepmerge would clone the store into a plain object and strip setCurrency
		expect(merged.plugins).toBe(plugins);
		expect(merged.plugins[0][2]).toBe(store);
		expect(typeof merged.plugins[0][2].setCurrency).toBe('function');
	});

	it('preserves middleware by reference', () => {
		const middleware = { afterStore: jest.fn() };

		const merged = mergeControllerConfig({ settings: {} } as any, { id: 'search', middleware } as any) as any;

		expect(merged.middleware).toBe(middleware);
	});

	it('leaves the fields absent when they are not provided', () => {
		const merged = mergeControllerConfig({ settings: {} } as any, { id: 'search' } as any) as any;

		expect('plugins' in merged).toBe(false);
		expect('middleware' in merged).toBe(false);
	});

	/*
		The safety property for the change that introduced this helper: it must produce the same config
		*values* as the plain deepmerge it replaced, so the only observable difference is that `plugins` and
		`middleware` are the caller's own references. Anything else changing here would alter behaviour for
		every controller in every integration.
	*/
	it('produces values identical to a plain deepmerge for a realistic controller config', () => {
		const plugin = jest.fn();
		const store = new FakeStore();
		const defaults = {
			settings: {
				infinite: undefined,
				history: 0,
				restorePosition: { enabled: true },
				redirects: { merchandising: true, singleResult: false },
			},
		};
		const provided = {
			id: 'search',
			globals: { siteId: '8uyt2m', filters: [{ type: 'value', field: 'color', value: 'blue' }] },
			settings: {
				history: 5,
				restorePosition: { enabled: false },
				facets: { pinFiltered: true },
			},
			plugins: [[plugin, { enabled: true }, store]],
			middleware: { afterStore: [jest.fn(), jest.fn()] },
		};

		const merged = mergeControllerConfig(defaults as any, provided as any) as any;
		const plain = deepmerge(defaults as any, provided as any) as any;

		// every value is the same, including the deeply merged settings
		expect(merged).toEqual(plain);
		// ...and the attachments are the caller's objects rather than clones of them
		expect(merged.plugins).toBe(provided.plugins);
		expect(merged.middleware).toBe(provided.middleware);
		expect(plain.plugins).not.toBe(provided.plugins);
	});

	it('does not mutate either input', () => {
		const plugins = [[jest.fn(), {}]];
		const defaults = { settings: { history: 0 } };
		const provided = { id: 'search', plugins };

		mergeControllerConfig(defaults as any, provided as any);

		expect(defaults).toStrictEqual({ settings: { history: 0 } });
		expect(provided).toStrictEqual({ id: 'search', plugins });
		expect(provided.plugins).toBe(plugins);
	});
});
