import type { Product } from '@athoscommerce/snap-store-mobx';
import type { AbstractController, SearchController } from '@athoscommerce/snap-controller';
import type { Next } from '@athoscommerce/snap-event-manager';
import type { AbstractPluginConfig } from '../../../common/src/types';

export type PluginKlaviyoEventsConfig = AbstractPluginConfig & {
	// TODO: config
};

export const pluginKlaviyoEvents = (cntrlr: AbstractController, config?: PluginKlaviyoEventsConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	// this will potentially need to be attached to multiple controller types:
	// 1. search
	// 2. autocomplete (maybe later)
	if (cntrlr.type !== 'search') return;

	// maybe just search
	cntrlr.on('afterStore', async ({ controller }: { controller: SearchController }, next: Next) => {
		// do something
		// a search has been stored!

		// build out the payload
		const klaviyoPayload = {
			'Search Term': controller.store.search.query?.string || '',
			'Total Number of Product Results': controller.store.pagination.totalResults,
		};

		controller.log.debug('pluginKlaviyoEvents', 'afterStore', klaviyoPayload);

		await next();
	});

	// maybe autocomplete and search
	cntrlr.on('track.product.clickThrough', async ({ controller, product }: { controller: SearchController; product: Product }, next: Next) => {
		// do something
		// product was clicked - segment based on "subject"

		// build out the payload
		const klaviyoPayload = {
			'Search Term': controller.store.search.query?.string || '',
			'Total Number of Product Results': controller.store.pagination.totalResults,
			'Product Clicked': {
				name: product.mappings?.core?.name,
			},
		};

		controller.log.debug('pluginKlaviyoEvents', 'track.product.clickThrough', klaviyoPayload);

		await next();
	});
};
