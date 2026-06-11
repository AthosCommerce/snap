import { AbstractController, ChatController } from '@athoscommerce/snap-controller';
import type {
	MoiRequestModelProductQuery,
	MoiRequestModelProductSearch,
	MoiRequestModelProductComparison,
	MoiRequestModelImageSearch,
	MoiRequestModelProductSimilar,
	MoiRequestModelInspiration,
	MoiRequestModelContent,
} from '@athoscommerce/snap-client';
import { EventManager, Next } from '@athoscommerce/snap-event-manager';
import { Product, SearchStore } from '@athoscommerce/snap-store-mobx';

type ControllerSelectVariantOptionsData = {
	options: Record<string, string[]>;
	controllerIds: (string | RegExp)[];
};
type ControllerRecommendationUpdateData = {
	controllerIds?: (string | RegExp)[];
};

type ControllerChatSendBase = {
	controllerIds?: (string | RegExp)[];
};

/** Payload for the `chat/send` global event. Carries an optional chat request to fire
 * after opening the chat. The request shape is the same discriminated union the controller
 * uses internally — `requestType` may be omitted, in which case it defaults to `'general'`
 * when a `message` is supplied. */
export type ControllerChatSendData =
	| (ControllerChatSendBase & { requestType?: 'general'; message?: string })
	| (ControllerChatSendBase & MoiRequestModelProductQuery)
	| (ControllerChatSendBase & MoiRequestModelProductSearch)
	| (ControllerChatSendBase & MoiRequestModelProductComparison)
	| (ControllerChatSendBase & MoiRequestModelImageSearch)
	| (ControllerChatSendBase & MoiRequestModelProductSimilar)
	| (ControllerChatSendBase & MoiRequestModelInspiration)
	| (ControllerChatSendBase & MoiRequestModelContent);

type ControllerChatProductActionData = {
	controllerIds?: (string | RegExp)[];
	result?: any;
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

	eventManager.on('chat/send', async (data: ControllerChatSendData, next: Next) => {
		const { controllerIds, ...payload } = (data || {}) as ControllerChatSendData & { [key: string]: any };

		const controllers = matchControllers(controllerIds).filter((controller) => {
			return Boolean(controller.type === 'chat');
		});

		// A request is dispatched only when the payload carries either an explicit
		// requestType or a message. With nothing to send the event still opens the chat.
		const hasRequest = 'requestType' in payload || 'message' in payload;
		const requestData = hasRequest ? { requestType: 'general', ...payload } : null;

		controllers.map((controller) => {
			const chatController = controller as ChatController;
			chatController.openChat();
			if (requestData) {
				chatController.search({ data: requestData as any });
			}
		});

		await next();
	});

	eventManager.on('chat/productQuery', async (data: ControllerChatProductActionData, next: Next) => {
		const { controllerIds, result } = data || {};

		const controllers = matchControllers(controllerIds).filter((controller) => {
			return Boolean(controller.type === 'chat');
		});

		controllers.map((controller) => {
			(controller as ChatController).productQuery(result);
			(controller as ChatController).openChat();
		});

		await next();
	});

	eventManager.on('chat/productSimilar', async (data: ControllerChatProductActionData, next: Next) => {
		const { controllerIds, result } = data || {};

		const controllers = matchControllers(controllerIds).filter((controller) => {
			return Boolean(controller.type === 'chat');
		});

		controllers.map((controller) => {
			(controller as ChatController).productSimilar(result);
			(controller as ChatController).openChat();
		});

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
