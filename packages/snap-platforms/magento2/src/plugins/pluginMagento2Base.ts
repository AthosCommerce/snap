import deepmerge from 'deepmerge';
import type { AbstractController } from '@athoscommerce/snap-controller';
import type { Next } from '@athoscommerce/snap-event-manager';
import type { AbstractPluginConfig } from '../../../common/src/types';
import { getFormKey } from '../getFormKey';
import { getUenc } from '../getUenc';
import type { SearchResultStore } from '@athoscommerce/snap-store-mobx';

export type Magento2BaseConfig = {
	formKey?: string;
	uenc?: string;
};

export type PluginMagento2BaseConfig = AbstractPluginConfig & Magento2BaseConfig;

export const pluginMagento2Base = (cntrlr: AbstractController, config?: PluginMagento2BaseConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	// get shopper id from magento cache
	let mageCacheStorage;
	try {
		mageCacheStorage = JSON.parse(localStorage.getItem('mage-cache-storage') || '{}');
	} catch (e) {
		cntrlr.log.warn('Failed to parse mage-cache-storage from localStorage', e);
	}

	const shopperId = mageCacheStorage?.['athoscommerce-tracking']?.shopper_id ? mageCacheStorage['athoscommerce-tracking'].shopper_id : false;

	// track shopperId
	if (shopperId) {
		cntrlr.tracker.track.shopper.login({
			id: shopperId,
		});
	}

	cntrlr.store.custom = deepmerge(cntrlr.store.custom || {}, {
		m2: {
			domain: window.location.hostname,
			formKey: config?.formKey || getFormKey(),
			uenc: config?.uenc || getUenc(),
		},
	});

	cntrlr.on('afterStore', async ({ controller }: any, next: Next) => {
		const store = controller.store;
		const results = store.results as SearchResultStore;

		results.forEach((result) => {
			if (result.type != 'banner') {
				const core = result.mappings.core;
				const custom: {
					wishlist?: string;
					compare?: string;
					addToCart?: string;
				} = {};

				// shared magento2 action config
				const sharedData: {
					data: {
						product?: string;
						uenc: string;
					};
					action?: string;
				} = {
					data: {
						product: core?.uid,
						uenc: controller.store.custom.m2.uenc,
					},
				};

				// magento2 wishlist action
				const wishlistData = {
					...sharedData,
					action: '//' + controller.store.custom.m2.domain + '/wishlist/index/add/',
				};
				custom.wishlist = JSON.stringify(wishlistData).replace(/\//g, '\\/');

				// magento2 compare action
				const compareData = {
					...sharedData,
					action: '//' + controller.store.custom.m2.domain + '/catalog/product_compare/add/',
				};
				custom.compare = JSON.stringify(compareData).replace(/\//g, '\\/');

				// magento2 Add to Cart action
				custom.addToCart =
					'//' + controller.store.custom.m2.domain + '/checkout/cart/add/uenc/' + controller.store.custom.m2.uenc + '/product/' + core?.uid + '/';

				result.custom = deepmerge(result.custom || {}, custom);
			}
		});

		await next();
	});
};
