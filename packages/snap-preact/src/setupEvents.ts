import { AbstractController, QuickviewController } from '@athoscommerce/snap-controller';
import { EventManager, Next } from '@athoscommerce/snap-event-manager';
import { Product, SearchStore } from '@athoscommerce/snap-store-mobx';

type ControllerSelectVariantOptionsData = {
	options: Record<string, string[]>;
	controllerIds: (string | RegExp)[];
};
type ControllerRecommendationUpdateData = {
	controllerIds?: (string | RegExp)[];
};
type ControllerQuickviewData = {
	result: Product;
	productsData?: any;
	parentId?: string;
	config?: any;
	// The originating controller's MetaStore, forwarded for badge/facet-label rendering.
	meta?: any;
	// The controller that opened the quickview, used to delegate actions like add-to-cart.
	controller?: any;
};

export const setupEvents = () => {
	const eventManager = new EventManager();

	eventManager.on('controller/selectVariantOptions', async (data: ControllerSelectVariantOptionsData, next: Next) => {
		const { options, controllerIds } = data;

		//filter through all controllers for matches with profileIds
		const controllers = matchControllers(controllerIds);

		//then run set makeSelections on each result in that controller result store with the passed variant data
		controllers.map((controller) => {
			if ((controller.store as SearchStore)?.results) {
				(controller.store as SearchStore)?.results.forEach((result) => {
					//no banner types
					if (result.type == 'product') {
						(result as Product).variants?.makeSelections(options);
					}
				});
			}
		});

		await next();
	});

	eventManager.on('controller/recommendation/update', async (data: ControllerRecommendationUpdateData, next: Next) => {
		const { controllerIds } = data || {};

		//filter through all recommendation controllers for matches with profileIds and realtime config
		const controllers = matchControllers(controllerIds).filter((controller) => {
			return Boolean(controller.type === 'recommendation' && controller.config?.realtime);
		});

		controllers.map((controller) => {
			controller.search();
		});

		await next();
	});

	eventManager.on('controller/quickview', async (data: ControllerQuickviewData, next: Next) => {
		const controller = window.athos?.controller?.['quickview'] as QuickviewController | undefined;

		if (controller && controller.type === 'quickview') {
			await controller.quickview(data);
		} else {
			console.warn(`[quickview] No controller with id 'quickview' found; quickview ignored.`);
		}

		await next();
	});

	return eventManager;
};

const matchControllers = (matchIds: (string | RegExp)[] | undefined): AbstractController[] => {
	return Object.keys(window.athos.controller || {}).reduce((arr, id) => {
		const controller = window.athos.controller[id] as AbstractController;

		if (!matchIds) {
			arr.push(controller);
			return arr;
		}

		if (Array.isArray(matchIds)) {
			matchIds.forEach((idToFind) => {
				if (idToFind instanceof RegExp) {
					if (id.match(idToFind)?.length) {
						arr.push(controller);
						return arr;
					}
				} else if (id == idToFind) {
					arr.push(controller);
					return arr;
				}
			});
		}

		if (typeof matchIds == 'string' && matchIds === id) {
			arr.push(controller);
			return arr;
		}

		return arr;
	}, [] as AbstractController[]);
};
