import type {
	AbstractController,
	AutocompleteController,
	SearchController,
	FinderController,
	RecommendationController,
	QuickviewController,
} from './index';
import type { EventManager, Middleware } from '@athoscommerce/snap-event-manager';

import type { Client } from '@athoscommerce/snap-client';
import type {
	SearchStore,
	AutocompleteStore,
	FinderStore,
	RecommendationStore,
	QuickviewStore,
	StoreConfig,
	SearchStoreConfig,
	FinderStoreConfig,
	AutocompleteStoreConfig,
	RecommendationStoreConfig,
	QuickviewStoreConfig,
	Product,
	QuickviewConfig,
} from '@athoscommerce/snap-store-mobx';
import type { ProductsResponseModel } from '@athoscommerce/snap-client';
import type { Tracker, ProductViewEvent } from '@athoscommerce/snap-tracker';
import type { Profiler } from '@athoscommerce/snap-profiler';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import type { Logger } from '@athoscommerce/snap-logger';
import type {
	AutocompleteRequestModel,
	// AutocompleteResponseModel,
	// MetaResponseModel,
	SearchRequestModel,
	// SearchResponseModel,
} from '@athoscommerce/snapi-types';
// Middleware
export type PluginFunction = (cntrlr: AbstractController, ...args: any) => Promise<void> | void;
export type PluginGrouping = [func: PluginFunction, ...args: unknown[]];

export type BeforeSearchObj = {
	controller: AbstractController;
	request: any;
};

export type SearchAfterSearchObj = {
	controller: SearchController;
	// response: { search?: SearchResponseModel, meta?: MetaResponseModel };
	response: any;
	request: SearchRequestModel;
};

export type AutocompleteAfterSearchObj = {
	controller: AutocompleteController;
	// response: { autocomplete?: AutocompleteResponseModel, meta?: MetaResponseModel };
	response: any;
	request: AutocompleteRequestModel;
};

export type FinderAfterSearchObj = {
	controller: FinderController;
	// response: { search?: SearchResponseModel, meta?: MetaResponseModel };
	response: any;
	request: SearchRequestModel;
};

export type AfterSearchObj = SearchAfterSearchObj | AutocompleteAfterSearchObj | FinderAfterSearchObj;

export type AfterStoreObj = {
	controller: AbstractController;
	request: any;
	response: any;
};

export type RestorePositionObj = {
	controller: AbstractController;
	element?: ElementPositionObj;
};
export type ProductQuickviewObj = {
	controller: SearchController | AutocompleteController | RecommendationController | QuickviewController;
	result: Product;
	productsData?: ProductsResponseModel;
	config: QuickviewConfig;
};

export type ElementPositionObj = {
	href?: string;
	selector?: string;
	domRect?: DOMRect;
};

export enum ControllerTypes {
	search = 'search',
	autocomplete = 'autocomplete',
	finder = 'finder',
	recommendation = 'recommendation',
	quickview = 'quickview',
}

export type Controllers = SearchController | AutocompleteController | FinderController | RecommendationController | QuickviewController;

export type ControllerServices = {
	client: Client;
	store: SearchStore | AutocompleteStore | FinderStore | RecommendationStore | QuickviewStore;
	urlManager: UrlManager;
	eventManager: EventManager;
	profiler: Profiler;
	logger: Logger;
	tracker: Tracker;
};

export type Attachments = {
	middleware?: {
		[eventName: string]: Middleware<any> | Middleware<any>[];
	};
	plugins?: PluginGrouping[];
	[any: string]: unknown;
};

export type ContextVariables = {
	shopper?: {
		id: string;
		cart?: ProductViewEvent[];
		[variable: string]: any;
	};
	page?: PageContextVariable;
	[variable: string]: any;
};

export type PageContextVariable = {
	type: 'search' | 'category';
};

export type ControllerConfig = StoreConfig & Attachments;

// Search Config
export type SearchControllerConfig = ControllerConfig & SearchStoreConfig;
// Finder Config
export type FinderControllerConfig = ControllerConfig & FinderStoreConfig;
// Autocomplete config
export type AutocompleteControllerConfig = ControllerConfig & AutocompleteStoreConfig;
// Recommendation config
export type RecommendationControllerConfig = ControllerConfig & RecommendationStoreConfig;
// Quickview config
export type QuickviewControllerConfig = ControllerConfig & QuickviewStoreConfig;

export type ControllerConfigs =
	| SearchControllerConfig
	| AutocompleteControllerConfig
	| FinderControllerConfig
	| RecommendationControllerConfig
	| QuickviewControllerConfig;
