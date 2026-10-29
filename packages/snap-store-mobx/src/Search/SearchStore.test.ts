import { UrlManager, UrlTranslator } from '@athoscommerce/snap-url-manager';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockData } from '@athoscommerce/snap-shared';

import { SearchStore } from './SearchStore';
import { SearchResponseModel, MetaResponseModel } from '@athoscommerce/snapi-types';

const services = {
	urlManager: new UrlManager(new UrlTranslator()),
};

const searchConfig = {
	id: 'search',
};

const mockData = new MockData();

describe('Search Store', () => {
	let searchData: { search: SearchResponseModel; meta: MetaResponseModel };

	beforeEach(() => {
		searchData = { search: mockData.search(), meta: mockData.meta() };
	});

	it('returns correct initial state', () => {
		const searchStore = new SearchStore(searchConfig, services);

		expect(searchStore.loading).toBe(false);

		expect(searchStore.meta).toBeDefined();
		expect(searchStore.meta?.data).toStrictEqual({});

		expect(searchStore.merchandising).toBeDefined();
		expect(searchStore.merchandising).toEqual({ redirect: '', personalized: false, experiments: [], content: {}, campaigns: [], responseId: '' });

		expect(searchStore.search).toBeDefined();
		expect(searchStore.search).toEqual({ query: undefined });

		expect(searchStore.facets).toBeDefined();
		expect(searchStore.facets).toHaveLength(0);

		expect(searchStore.filters).toBeDefined();
		expect(searchStore.filters).toHaveLength(0);

		expect(searchStore.results).toBeDefined();
		expect(searchStore.results).toHaveLength(0);

		expect(searchStore.pagination).toBeDefined();
		expect(searchStore.pagination?.totalResults).toBeUndefined();

		expect(searchStore.sorting).toBeDefined();
		expect(searchStore.sorting?.options).toHaveLength(0);
	});

	it('can setService', () => {
		const searchStore = new SearchStore(searchConfig, { ...services });
		const tracker = new Tracker({ siteId: 'atkzs2' });
		const newUrlManager = new UrlManager(new UrlTranslator()).detach();

		expect(searchStore.services.tracker).toBeUndefined();
		expect(searchStore.services.urlManager).toBe(services.urlManager);

		searchStore.setService('tracker', tracker);
		searchStore.setService('urlManager', newUrlManager);

		expect(searchStore.services.tracker).toBe(tracker);
		expect(searchStore.services.urlManager).toBe(newUrlManager);
	});

	it('records history terms with the tracker service set with setService', () => {
		const searchStore = new SearchStore(searchConfig, { ...services });
		const tracker = new Tracker({ siteId: 'atkzs2' });
		tracker.cookies.searched.clear();

		searchStore.history.save('dress');

		expect(tracker.cookies.searched.get()).toEqual([]);

		searchStore.setService('tracker', tracker);
		searchStore.history.save('boots');

		expect(tracker.cookies.searched.get()).toEqual(['boots']);

		searchStore.history.reset();
	});

	it('update function updates all of the stores', () => {
		const searchStore = new SearchStore(searchConfig, services);
		searchStore.update(searchData);

		expect(searchStore.meta).toBeDefined();
		expect(searchStore.meta?.data).toStrictEqual(searchData.meta);

		expect(searchStore.search).toBeDefined();
		expect(searchStore.search?.query).toStrictEqual(searchData.search.search?.query);

		expect(searchStore.merchandising).toBeDefined();
		expect(searchStore.merchandising).toEqual({ ...searchData.search.merchandising, responseId: searchData.search.tracking.responseId });

		expect(searchStore.facets).toHaveLength(searchData.search.facets?.length!);

		expect(searchStore.filters).toHaveLength(0);

		expect(searchStore.results).toHaveLength(searchData.search.results?.length!);

		expect(searchStore.pagination?.totalResults).toBe(searchData.search.pagination?.totalResults);

		expect(searchStore.sorting?.options).toHaveLength(searchData.meta.sortOptions?.filter((option) => option.type == 'field').length!);
	});
});
