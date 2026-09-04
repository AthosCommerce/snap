import type { AbstractController } from '@athoscommerce/snap-controller';
import { AbstractPluginConfig } from '../../../common/src/types';

export type PluginShopifyCurrencyConfig = AbstractPluginConfig;

// minimal structural view of the pieces of the Snap Templates store the plugin needs - snap-platforms cannot
// import from snap-preact, so the store is duck typed and passed in by the templates integration
export type PluginShopifyCurrencyStore = {
	currency?: string;
	setCurrency: (currencyCode: string) => void | Promise<void>;
	library?: {
		import?: {
			currency?: Record<string, unknown>;
		};
	};
};

type ShopifyCurrencyObj = {
	currency?: {
		active?: string;
		rate?: string;
	};
	[key: string]: unknown;
};

// the same store is shared by every controller on the page - track what has been requested so the currency
// locale is only imported and applied once
const requestedCurrencies = new WeakMap<PluginShopifyCurrencyStore, string>();

export const pluginShopifyCurrency = (cntrlr: AbstractController, config?: PluginShopifyCurrencyConfig, store?: PluginShopifyCurrencyStore): void => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	if (typeof store?.setCurrency !== 'function') {
		cntrlr.log?.warn?.('[shopifyCurrency] No templates store provided - currency not applied.');
		return;
	}

	const shopify = window?.Shopify as ShopifyCurrencyObj | undefined;

	// when the templates store exposes its currency library, unsupported codes are left alone
	const supportedCurrencies = store.library?.import?.currency;
	const isSupported = (code?: string): code is string =>
		typeof code === 'string' && code.length > 0 && (!supportedCurrencies || code.toLowerCase() in supportedCurrencies);

	const activeCurrency = shopify?.currency?.active;

	// doing nothing leaves the currency from `config.currency` in place
	if (!isSupported(activeCurrency)) {
		cntrlr.log?.warn?.(
			`[shopifyCurrency] Storefront currency ${JSON.stringify(activeCurrency)} is unavailable or unsupported - keeping the configured currency.`
		);
		return;
	}

	const currencyCode = activeCurrency.toLowerCase();

	if (store.currency?.toLowerCase() === currencyCode || requestedCurrencies.get(store) === currencyCode) return;

	requestedCurrencies.set(store, currencyCode);

	Promise.resolve(store.setCurrency(currencyCode)).catch((error) => {
		requestedCurrencies.delete(store);
		cntrlr.log?.warn?.('[shopifyCurrency] Failed to apply currency:', error);
	});
};
