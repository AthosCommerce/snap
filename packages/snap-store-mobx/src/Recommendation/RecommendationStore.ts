import { makeObservable, observable } from 'mobx';
import deepmerge from 'deepmerge';
import { AbstractStore } from '../Abstract/AbstractStore';
import { Product, SearchResultStore } from '../Search/Stores';
import { CartStore } from '../Cart/CartStore';
import { QuickViewStore } from '../QuickView/QuickViewStore';
import { RecommendationProfileStore } from './Stores';
import type { RecommendationStoreConfig, StoreServices } from '../types';
import type { RecommendCombinedResponseModel } from '@athoscommerce/snap-client';
import { MetaStore } from '../Meta/MetaStore';

export class RecommendationStore extends AbstractStore<RecommendationStoreConfig> {
	public services: StoreServices;
	public meta?: MetaStore;
	public loaded = false;
	public profile: RecommendationProfileStore | Record<string, any> = {};
	public results: Product[] = [];
	public cart?: CartStore;
	public quickview: QuickViewStore;

	constructor(config: RecommendationStoreConfig, services: StoreServices) {
		super(config);

		if (typeof services != 'object' || typeof services.urlManager?.subscribe != 'function') {
			throw new Error(`Invalid service 'urlManager' passed to AutocompleteStore. Missing "subscribe" function.`);
		}

		this.services = services;

		this.quickview = new QuickViewStore();

		makeObservable(this, {
			profile: observable,
			results: observable,
			quickview: observable,
		});
	}

	public reset(): void {
		this.error = undefined;
		this.loaded = false;
		this.profile = {};
		this.results = [];
	}

	public update(data: RecommendCombinedResponseModel): void {
		const { meta, profile, results } = data || {};

		this.error = undefined;
		this.meta = new MetaStore({
			data: {
				meta,
			},
		});

		this.profile = new RecommendationProfileStore({
			data: {
				profile: {
					profile: profile,
				},
			},
		});

		if (this.profile.type == 'bundle') {
			// enable autoSelect for bundles (to ensure selection has been made for add to cart)
			this.config.settings = deepmerge(this.config.settings || {}, {
				variants: {
					autoSelect: true,
				},
			});

			// only create a cart store when type is bundle
			this.cart = new CartStore();
		}
		this.results = new SearchResultStore({
			config: this.config,
			state: {
				loaded: this.loaded,
			},
			data: {
				search: {
					results,
					tracking: {
						responseId: data.responseId,
					},
				},
				meta: this.meta.data,
			},
		}) as Product[];

		this.loaded = !!profile;
	}
}
