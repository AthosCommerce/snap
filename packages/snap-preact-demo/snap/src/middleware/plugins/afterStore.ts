import type { SearchResultStore } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';

export function afterStore(controller: AbstractController) {
	controller.on('init', async (_ctx: unknown, next: Next) => {
		controller.log.debug('initialization...');
		await next();
	});

	controller.on('afterStore', async ({ controller }: { controller: SearchController }, next: Next) => {
		mutateFacets(controller.store.facets);
		await next();
	});

	// log the store
	controller.on('afterStore', async ({ controller }: { controller: AbstractController }, next: Next) => {
		controller.log.debug('store', controller.store.toJSON());
		await next();
	});

	controller.on('restorePosition', restorePosition);
}

export function mutateResultsURL(controller: AbstractController) {
	controller.on('afterStore', async ({ controller }: { controller: SearchController }, next: Next) => {
		mutateResults(controller.store.results);
		await next();
	});
}

function mutateResults(results: SearchResultStore) {
	for (let i = 0; i < results.length; i++) {
		const result = results[i];
		//need to ensure at least 2 products are on sale for testing
		if (i < 2) {
			result.mappings.core = {
				...result.mappings.core,
				msrp: 200,
			};
		}
	}
}

function mutateFacets(facets: SearchFacetsStore) {
	for (const facet of facets) {
		let limit = 12;
		if (facet.display == 'palette' || facet.display == 'grid') {
			limit = 16;
		}

		facet.overflow?.setLimit(limit);
	}
}

async function restorePosition({ controller, element }: { controller: SearchController; element: any }, next: Next) {
	// scroll to top only if we are not going to be scrolling to stored element
	if (!element) {
		// prevent scroll to top when using infinite
		if (!(controller.config.settings?.infinite?.enabled && controller.store.pagination.page != 1)) {
			setTimeout(() => {
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			});
		}
	}

	await next();
}
