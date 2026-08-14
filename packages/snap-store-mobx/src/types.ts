import type { UrlManager } from '@athoscommerce/snap-url-manager';
import type { ChatRequestModel, RecommendRequestModel } from '@athoscommerce/snap-client';
import type {
	SearchResponseModelFacetValueAllOfValues,
	AutocompleteRequestModel,
	SearchRequestModel,
	MetaResponseModelBadgeTag,
	SearchResponseModelResultBadges,
} from '@athoscommerce/snapi-types';

export type BeaconSettings = {
	enabled: boolean;
};

// Abstract
export type StoreConfig = {
	id: string;
	beacon?: BeaconSettings;
	asyncState?: {
		product?: {
			price?: boolean;
		};
	};
	[any: string]: unknown;
};

export type SearchStoreConfigSettings = {
	redirects?: {
		merchandising?: boolean;
		singleResult?: boolean;
	};
	facets?: FacetStoreConfig & {
		fields?: {
			[field: string]: FacetStoreConfig;
		};
	};
	filters?: FilterStoreConfig & {
		fields?: {
			[field: string]: FilterStoreConfig;
		};
	};
	infinite?: {
		enabled?: boolean;
		backfill?: number;
	};
	restorePosition?: {
		enabled: boolean;
		onPageShow?: boolean;
	};
	variants?: VariantConfig;
	history?: {
		url?: string;
		max?: number;
	};
	pagination?: {
		pageSizeOptions?: {
			label: string;
			value: number;
		}[];
	};
};
export type VariantConfigFilterTypes = 'first' | 'unaltered';

export type VariantConfig = {
	realtime?: {
		enabled: boolean;
		filters?: VariantConfigFilterTypes[];
	};
	options?: {
		[optionField: string]: VariantOptionConfig;
	};
	showDisabledSelectionValues?: boolean;
	autoSelect?: boolean;
};

export type VariantOptionConfig = {
	label?: string;
	preSelected?: string[];
	thumbnailBackgroundImages?: boolean;
	mappings?: VariantOptionConfigMappings;
};

export type VariantOptionConfigMappings = {
	[optionValue: string]: {
		label?: string;
		background?: string;
		backgroundImageUrl?: string;
	};
};

// Shared by Search/Autocomplete/Recommendation settings and Chat config
export type QuickviewConfig = {
	enabled: boolean;
	displayFields?: string[];
};

// Chat Config
export type ChatStoreConfig = StoreConfig & {
	globals?: Partial<ChatRequestModel>;
	settings?: ChatStoreConfigSettings;
	/** Kept top-level (not in `globals`) because ChatRequestModel has no siteId —
	 * it is only used to namespace the chat localStorage keys per site. */
	siteId?: string;
};

/** A chat facet selection: a plain option value, or the bounds of a range bucket.
 * Callers pass the shape directly — the store never infers one from the other. */
export type ChatFacetValue = string | { low?: number; high?: number };

export type ChatStoreConfigSettings = {
	/** CSS selector used by focusInput to locate the chat text input. */
	inputSelector?: string;
	/** Max viewport width treated as mobile — should match the theme breakpoint. Defaults to 767. */
	mobileBreakpoint?: number;
	variants?: VariantConfig;
	quickview?: QuickviewConfig;
	comparison?: {
		max?: number;
	};
	feedbackAfterMessages?: number;
	/** Background filters forwarded to the chat init API as `searchConfig.bgFilters`. */
	bgFilters?: Record<string, string>;
	/** Language code forwarded to chat init as `languageCode`. Sourced from the Snap
	 * Templates configured locale; falls back to `navigator.language` when absent. */
	languageCode?: string;
};

// Search Config
export type SearchStoreConfig = StoreConfig & {
	globals?: Partial<SearchRequestModel>;
	settings?: SearchStoreConfigSettings;
};

export type FilterStoreConfig = {
	rangeFormatValue?: string;
	hierarchy?: {
		enabled?: boolean;
		displayDelimiter?: string;
		showFullPath?: boolean;
	};
};

export type FacetStoreConfig = {
	trim?: boolean;
	pinFiltered?: boolean;
	storeRange?: boolean;
	autoOpenActive?: boolean;
};

// Finder Config
export type FinderStoreConfig = StoreConfig & {
	globals?: any;
	url?: string;
	fields: FinderFieldConfig[];
	persist?: {
		enabled: boolean;
		lockSelections?: boolean;
		expiration?: number;
	};
};

export type FinderFieldConfig = {
	field: string;
	label?: string;
	levels?: string[];
};

export type AutocompleteStoreConfigSettings = {
	initializeFromUrl?: boolean;
	syncInputs?: boolean;
	serializeForm?: boolean;
	disableClickOutside?: boolean;
	facets?: FacetStoreConfig & {
		fields?: {
			[field: string]: FacetStoreConfig;
		};
	};
	trending?: {
		enabled?: boolean;
		limit?: number;
		showResults?: boolean;
	};
	variants?: VariantConfig;
	history?: {
		enabled?: boolean;
		limit?: number;
		showResults?: boolean;
		max?: number;
		url?: string;
	};
	redirects?: {
		merchandising?: boolean;
		singleResult?: boolean;
	};
	bind?: {
		input?: boolean;
		submit?: boolean;
	};
};

// Autocomplete config
export type AutocompleteStoreConfig = StoreConfig & {
	globals?: Partial<AutocompleteRequestModel>;
	selector: string;
	action?: string;
	settings?: AutocompleteStoreConfigSettings;
};

// Recommendation config
export type RecommendationStoreConfig = StoreConfig & {
	globals?: Partial<RecommendRequestModel>;
	tag: string;
	branch?: string;
	realtime?: boolean;
	batched?: boolean;
	order?: number;
	batchId?: number;
	settings?: {
		variants?: VariantConfig;
		searchOnPageShow?: boolean;
	};
};

export type StoreConfigs = SearchStoreConfig | AutocompleteStoreConfig | FinderStoreConfig | RecommendationStoreConfig | ChatStoreConfig;

export type StoreServices = {
	urlManager: UrlManager;
};

export enum ErrorType {
	WARNING = 'warning',
	INFO = 'info',
	ERROR = 'error',
}

export type SelectedSelection = {
	selected: string;
	data: SearchResponseModelFacetValueAllOfValues[];
	facet: any;
};

export type ResultBadge = MetaResponseModelBadgeTag & SearchResponseModelResultBadges;
