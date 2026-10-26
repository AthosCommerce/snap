import { StorageStore } from '@athoscommerce/snap-toolbox';
import type { AutocompleteStoreConfig, SearchStoreConfig, StoreServices } from '../../types';
import { Query } from './SearchQueryStore';

type SearchHistoryStoreConfig = {
	services: StoreServices;
	config: Partial<AutocompleteStoreConfig | SearchStoreConfig>;
};

export class SearchHistoryStore {
	private config: Partial<AutocompleteStoreConfig | SearchStoreConfig>;
	private storage: StorageStore;
	private services: StoreServices;
	private max: number;

	constructor(params: SearchHistoryStoreConfig) {
		const { services, config } = params || {};
		this.config = config;
		this.services = services;

		this.max = this.config.settings?.history?.max ?? 25;

		if (this.config.settings?.history?.url) {
			this.services.urlManager = this.services.urlManager.withConfig((translatorConfig: any) => {
				return {
					...translatorConfig,
					urlRoot: this.config.settings?.history?.url,
				};
			});
		}

		this.storage = new StorageStore({
			type: 'local',
			key: `athos-history${this.config.globals?.siteId ? `-${this.config.globals?.siteId}` : ``}`,
		});

		// clear and trim only the history here - last searches are not limited by the history max
		// only a configured max changes the shared history, so stores using the default max (autocomplete) do not trim it
		if (typeof this.config.settings?.history?.max == 'number') {
			if (this.max === 0) {
				this.storage.clear();
			}

			const storedData = this.getStoredData();
			if (storedData.length > this.max) {
				this.storage.set('history', JSON.stringify(storedData.slice(0, this.max)));
			}
		}
	}

	get queries(): Query[] {
		const queries = this.getStoredData(this.max);
		return queries.map((query) => new Query(this.services, query));
	}

	public save(term: string) {
		// adding term to array if max is not zero
		if (this.max) {
			const history = this.getStoredData();

			// removing term if already present
			const index = history.indexOf(term);
			if (index != -1) {
				history.splice(index, 1);
			}

			history.unshift(term);

			this.storage.set('history', JSON.stringify(history.slice(0, this.max)));
		}

		// last searches are stored separately and are not limited by the history max
		// they are recorded even when personalization is disabled, which only omits them from requests
		this.services?.tracker?.cookies.searched.add([term], this.config.globals?.siteId);
	}

	public remove(term: string) {
		const history = this.getStoredData();

		// removing term if already present
		const index = history.indexOf(term);
		if (index != -1) {
			history.splice(index, 1);
			this.storage.set('history', JSON.stringify(history));
		}

		this.services?.tracker?.cookies.searched.remove([term], this.config.globals?.siteId);
	}

	public reset(): void {
		this.storage.clear();
		this.services?.tracker?.cookies.searched.clear(this.config.globals?.siteId);
	}

	public getStoredData(limit?: number): string[] {
		const storedHistory = this.storage.get('history');
		if (storedHistory) {
			try {
				const history = JSON.parse(storedHistory);
				if (Array.isArray(history)) {
					if (limit && Number.isInteger(limit)) {
						return history.slice(0, limit);
					}
					return history;
				}
			} catch (err) {
				// storage corrupted - resetting it
				this.storage.clear();
			}
		}

		return [];
	}
}
