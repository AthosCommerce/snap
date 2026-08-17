import { MockClient } from './MockClient';

const globals = { siteId: '8uyt2m' };

describe('MockClient', () => {
	it('resolves search data without a delay configured', async () => {
		const client = new MockClient(globals, {});

		const { meta, search } = await client.search();

		expect(meta).toBeDefined();
		expect(search.pagination).toBeDefined();
	});

	it('rejects a delayed search when its signal aborts', async () => {
		const client = new MockClient(globals, {}, { delay: 1000 });
		const controller = new AbortController();

		const searchPromise = client.search({}, { signal: controller.signal });
		controller.abort();

		// the rejection mirrors the real client's wrapped shape so consumers detect aborts identically
		await expect(searchPromise).rejects.toMatchObject({
			err: expect.objectContaining({ name: 'AbortError' }),
			fetchDetails: expect.objectContaining({ message: 'ABORTED' }),
		});
	});

	it('rejects immediately when the signal is already aborted', async () => {
		const client = new MockClient(globals, {}, { delay: 1000 });
		const controller = new AbortController();
		controller.abort();

		await expect(client.autocomplete({}, { signal: controller.signal })).rejects.toMatchObject({
			err: expect.objectContaining({ name: 'AbortError' }),
		});
	});

	it('resolves a delayed search that is never aborted', async () => {
		const client = new MockClient(globals, {}, { delay: 10 });
		const controller = new AbortController();

		const { search } = await client.search({}, { signal: controller.signal });

		expect(search.pagination).toBeDefined();
		expect(controller.signal.aborted).toBe(false);
	});

	it('supports abort on finder and autocomplete traffic', async () => {
		const client = new MockClient(globals, {}, { delay: 1000 });

		const finderController = new AbortController();
		const finderPromise = client.finder({}, { signal: finderController.signal });
		finderController.abort();
		await expect(finderPromise).rejects.toMatchObject({ err: expect.objectContaining({ name: 'AbortError' }) });

		const acController = new AbortController();
		const acPromise = client.autocomplete({}, { signal: acController.signal });
		acController.abort();
		await expect(acPromise).rejects.toMatchObject({ err: expect.objectContaining({ name: 'AbortError' }) });
	});
});
