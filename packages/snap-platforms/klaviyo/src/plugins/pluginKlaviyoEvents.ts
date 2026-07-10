import type { Product } from '@athoscommerce/snap-store-mobx';
import type { AbstractController, AutocompleteController, SearchController } from '@athoscommerce/snap-controller';
import type { Next } from '@athoscommerce/snap-event-manager';
import type { AbstractPluginConfig } from '../../../common/src/types';

export type PluginKlaviyoEventsConfig = AbstractPluginConfig & {
	// TODO: config
};

type LearnqCommand = [string, ...unknown[]];

// adding _learnq to window type
declare global {
	interface Window {
		_learnq?: {
			push: (command: LearnqCommand) => void;
		};
	}
}

export const pluginKlaviyoEvents = (cntrlr: AbstractController, config?: PluginKlaviyoEventsConfig) => {
	// do nothing if plugin is disabled
	if (config?.enabled === false) return;

	// this will potentially need to be attached to multiple controller types:
	// 1. search
	// 2. autocomplete
	if (cntrlr.type !== 'search' && cntrlr.type !== 'autocomplete') return;

	// autocomplete and search clickthrough
	cntrlr.on(
		'track.product.clickThrough',
		async ({ controller, product }: { controller: SearchController | AutocompleteController; product: Product }, next: Next) => {
			// product was clicked - segment based on "subject"

			// build out the payload
			const klaviyoClickPayload = {
				query: controller.store.search.query?.string || '',
				subject: '', // TODO
				totalResults: controller.store.pagination.totalResults,
				product: extractProductDetails(product),
				results: controller.store.results
					.filter((result) => result.type == 'product' && result.id !== product.id)
					.map((result) => extractProductDetails(result as Product)),
			};

			try {
				window?._learnq?.push(['track', `Athos Commerce ${controller.type} click`, klaviyoClickPayload]);
				controller.log.debug('pluginKlaviyoEvents', 'track.product.clickThrough', klaviyoClickPayload);
			} catch (e) {
				controller.log.error('pluginKlaviyoEvents', 'track.product.clickThrough', klaviyoClickPayload);
				controller.log.error(e);
			}

			await next();
		}
	);
};

const extractProductDetails = (product: Product) => ({
	id: product.id,
	name: product.mappings?.core?.name,
	url: product.mappings?.core?.url,
	thumbnailImageUrl: product.mappings?.core?.thumbnailImageUrl,
	imageUrl: product.mappings?.core?.imageUrl,
	price: product.mappings?.core?.price,
	msrp: product.mappings?.core?.msrp,
});
