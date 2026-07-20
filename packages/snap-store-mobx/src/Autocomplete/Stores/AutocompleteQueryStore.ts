import { observable, makeObservable } from 'mobx';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import type { SearchResponseModelSearchMatchTypeEnum } from '@athoscommerce/snapi-types';
import type { AutocompleteStoreConfig, StoreServices } from '../../types';
import { AutocompleteResponseModel } from '@athoscommerce/snapi-types';

type AutocompleteQueryStoreConfig = {
	config: AutocompleteStoreConfig;
	services: StoreServices;
	data: {
		autocomplete?: AutocompleteResponseModel;
	};
};

export class AutocompleteQueryStore {
	public query?: Query;
	public originalQuery?: Query;
	public correctedQuery?: Query;
	public matchType: SearchResponseModelSearchMatchTypeEnum;
	public subject?: Query;

	constructor(params: AutocompleteQueryStoreConfig) {
		const { services, data } = params || {};
		const { search, autocomplete } = data?.autocomplete || {};
		const observables: Observables = {};

		if (search?.query) {
			this.query = new Query(services.urlManager, search.query);
			observables.query = observable;
		}

		if (autocomplete?.correctedQuery) {
			this.correctedQuery = new Query(services.urlManager, autocomplete.correctedQuery);
			observables.correctedQuery = observable;
		}

		if (search?.subject) {
			this.subject = new Query(services.urlManager, search.subject);
			observables.subject = observable;
		}

		this.matchType = search?.matchType as SearchResponseModelSearchMatchTypeEnum;
		observables.matchType = observable;

		makeObservable(this, observables);
	}
}

type Observables = {
	originalQuery?: typeof observable;
	query?: typeof observable;
	correctedQuery?: typeof observable;
	matchType?: typeof observable;
	subject?: typeof observable;
};

class Query {
	public string: string;
	public url: UrlManager;

	constructor(urlManager: UrlManager, query: string) {
		this.string = query;

		this.url = urlManager.set({ query: this.string });

		makeObservable(this, {
			string: observable,
		});
	}
}
