import type { MetaResponseModel, SearchResponseModel, AutocompleteResponseModel } from '@athoscommerce/snapi-types';
import { Client, ClientGlobals, ClientConfig, ClientRequestOptions, TrendingResponseModel } from '@athoscommerce/snap-client';
import { MockData } from '../MockData/MockData';

/*
	// typical usage

	mockClient = new MockClient(globals);
	mockClient.mockData.updateConfig({ autocomplete: 'autocomplete' });

*/

export type MockConfig = {
	delay?: number;
};

export class MockClient extends Client {
	mockData: MockData;
	mockConfig: MockConfig;

	constructor(global: ClientGlobals, config: ClientConfig = {}, mockConfig: MockConfig = {}) {
		super(global, config);

		this.mockConfig = mockConfig;
		this.mockData = new MockData({ siteId: global.siteId });
	}

	async meta() {
		if (this.mockConfig.delay) await wait(this.mockConfig.delay);

		return this.mockData.meta();
	}

	async search(_params?: any, options?: ClientRequestOptions) {
		const searchData = this.mockData.search();

		if (this.mockConfig.delay) await wait(this.mockConfig.delay, options?.signal);

		const [meta, search] = await Promise.all([this.meta() as MetaResponseModel, searchData as SearchResponseModel]);
		return { meta, search };
	}

	async category(_params?: any, options?: ClientRequestOptions) {
		return this.search(_params, options);
	}

	async finder(_params?: any, options?: ClientRequestOptions) {
		const searchData = this.mockData.search();

		if (this.mockConfig.delay) await wait(this.mockConfig.delay, options?.signal);

		const [meta, search] = await Promise.all([this.meta() as MetaResponseModel, searchData as SearchResponseModel]);
		return { meta, search };
	}

	async autocomplete(_params?: any, options?: ClientRequestOptions) {
		const autocompleteData = this.mockData.autocomplete();

		if (this.mockConfig.delay) await wait(this.mockConfig.delay, options?.signal);

		const [meta, search] = await Promise.all([this.meta() as MetaResponseModel, autocompleteData as AutocompleteResponseModel]);
		return { meta, search };
	}

	async recommend() {
		if (this.mockConfig.delay) await wait(this.mockConfig.delay);

		return this.mockData.recommend();
	}

	async trending(): Promise<TrendingResponseModel> {
		if (this.mockConfig.delay) await wait(this.mockConfig.delay);

		return this.mockData.trending();
	}
}

/*
	Waits out the configured mock delay, honoring an AbortSignal so tests can exercise
	cancellation. Rejects with the same `{ err, fetchDetails }` shape the real client throws
	so consumers detect aborts identically against mock and live traffic.
*/
function wait(time = 0, signal?: AbortSignal) {
	return new Promise((resolve, reject) => {
		const rejectAborted = () => {
			const err = new Error('The user aborted a request.');
			err.name = 'AbortError';
			reject({ err, fetchDetails: { status: undefined, message: 'ABORTED', url: 'mock://request' } });
		};

		if (signal?.aborted) {
			return rejectAborted();
		}

		const timeoutId = setTimeout(resolve, time);

		signal?.addEventListener('abort', () => {
			clearTimeout(timeoutId);
			rejectAborted();
		});
	});
}
