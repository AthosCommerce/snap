import { configure as configureMobx } from 'mobx';
import { SearchController, AutocompleteController, RecommendationController, ChatController } from '@athoscommerce/snap-controller';
import { Client } from '@athoscommerce/snap-client';
import { SearchStore, AutocompleteStore, RecommendationStore, ChatStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type {
	ClientConfig,
	ClientGlobals,
	ChatStatusResponseModel,
	ChatInitResponseModel,
	UploadImageResponseModel,
} from '@athoscommerce/snap-client';
import type {
	SearchControllerConfig,
	AutocompleteControllerConfig,
	RecommendationControllerConfig,
	ChatControllerConfig,
} from '@athoscommerce/snap-controller';

type CreateConfig = {
	client: {
		globals: ClientGlobals;
		config?: ClientConfig;
	};
	controller: SearchControllerConfig | AutocompleteControllerConfig | RecommendationControllerConfig | ChatControllerConfig;
};

// configure MobX
configureMobx({ useProxies: 'always', isolateGlobalState: true, enforceActions: 'never' });

const controllers: {
	[id: string]: SearchController | AutocompleteController | RecommendationController | ChatController;
} = {};

const client = {
	globals: { siteId: 'atkzs2' },
};

type ChatMock = {
	status: ChatStatusResponseModel;
};

const MOCK_CHAT_SESSION_ID = 'storybook-chat-session';

const MOCK_CHAT_RESULTS = ['Alpine Wool Beanie', 'Trailhead Cap', 'Summit Toque', 'Glacier Liner', 'Ridgeway Hat', 'Harbor Knit Cap'].map(
	(name, index) => {
		const id = `storybook-product-${index + 1}`;
		const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(name)}/480/480`;

		return {
			id,
			uid: id,
			sku: id,
			parentId: id,
			name,
			price: String(24 + index * 6),
			msrp: String(30 + index * 6),
			url: `#${id}`,
			imageUrl,
			thumbnailImageUrl: imageUrl,
			parentImageUrl: '',
			available: 'true',
		};
	}
);

// Storybook has no chat backend, so the chat endpoints are answered from fixtures; meta and every
// other request still reach the network. Every message gets the same sample products back.
const mockChatFetch = ({ status }: ChatMock): WindowOrWorkerGlobalScope['fetch'] => {
	let responseCount = 0;
	const json = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } });

	return async (input, init) => {
		const url = new URL(input instanceof Request ? input.url : input.toString(), window.location.href);

		if (url.pathname.endsWith('/v1/chat/status')) {
			return json(status);
		}

		if (url.pathname.endsWith('/v1/chat/init')) {
			const session: ChatInitResponseModel = {
				chatSessionId: MOCK_CHAT_SESSION_ID,
				sessionEndTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
			};
			return json(session);
		}

		if (url.pathname.endsWith('/v1/chat/upload-image')) {
			const file = init?.body instanceof FormData ? init.body.get('file') : null;
			const imageUrl = file instanceof Blob ? URL.createObjectURL(file) : '';
			const upload: UploadImageResponseModel = { imageId: `storybook-image-${Date.now()}`, imageUrl, thumbnailUrl: imageUrl };
			return json(upload);
		}

		if (url.pathname.endsWith('/v1/chat/send')) {
			responseCount++;
			return json({
				responseId: `storybook-response-${responseCount}`,
				context: { sessionId: url.searchParams.get('chatSessionId') || MOCK_CHAT_SESSION_ID },
				data: [
					{
						messageType: 'productSearchResult',
						id: `storybook-message-${responseCount}`,
						text: 'Storybook has no chat backend, so every message gets these sample products.',
						searchResult: {
							results: MOCK_CHAT_RESULTS,
							pagination: { totalResults: MOCK_CHAT_RESULTS.length },
							facets: [],
							sorting: { options: [] },
							filterSummary: [],
						},
					},
				],
			});
		}

		return fetch(input, init);
	};
};

export class Snapify {
	static recommendation(config: RecommendationControllerConfig): RecommendationController {
		const id = config.id;
		if (controllers[id]) {
			return controllers[id] as RecommendationController;
		}

		const cntrlr: RecommendationController = (controllers[id] = createRecommendationController({ client, controller: config }));

		cntrlr.on('afterStore', async ({ controller }: { controller: RecommendationController }, next) => {
			controller.log.debug('controller', controller);
			controller.log.debug('store', controller.store.toJSON());
			await next();
		});

		cntrlr.init();

		return cntrlr;
	}
	static autocomplete(config: AutocompleteControllerConfig): AutocompleteController {
		const id = config.id;
		if (controllers[id]) {
			return controllers[id] as AutocompleteController;
		}

		const cntrlr: AutocompleteController = (controllers[id] = createAutocompleteController({ client, controller: config }));

		cntrlr.on('afterStore', async ({ controller }: { controller: AutocompleteController }, next) => {
			controller.log.debug('controller', controller);
			controller.log.debug('store', controller.store.toJSON());
			await next();
		});

		cntrlr.init();

		return cntrlr;
	}

	static chat(config: ChatControllerConfig, mock: ChatMock): ChatController {
		const id = config.id;
		if (controllers[id]) {
			return controllers[id] as ChatController;
		}

		// the mock goes in at construction because init() sends its status request before this returns
		const cntrlr: ChatController = (controllers[id] = createChatController({
			client: { ...client, config: { fetchApi: mockChatFetch(mock) } },
			controller: config,
		}));

		// a status cached in sessionStorage by an earlier load would make init() skip the request, so apply the fixture directly
		cntrlr.store.handleChatStatusResponse(mock.status);

		cntrlr.on('afterStore', async ({ controller }: { controller: ChatController }, next) => {
			controller.log.debug('controller', controller);
			controller.log.debug('store', controller.store.toJSON());
			await next();
		});

		cntrlr.init();

		return cntrlr;
	}

	static search(config: SearchControllerConfig): SearchController {
		const id = config.id;
		if (controllers[id]) {
			return controllers[id] as SearchController;
		}

		const cntrlr: SearchController = (controllers[id] = createSearchController({ client, controller: config }));

		cntrlr.on('afterStore', async ({ controller }: { controller: SearchController }, next) => {
			controller.log.debug('controller', controller);
			controller.log.debug('store', controller.store.toJSON());
			await next();
		});

		cntrlr.init();

		return cntrlr;
	}
}

function createSearchController(config: CreateConfig): SearchController {
	const urlManager = new UrlManager(new UrlTranslator({ settings: { coreType: 'query', corePrefix: config.controller.id } }), reactLinker);

	const cntrlr = new SearchController(config.controller as SearchControllerConfig, {
		client: new Client(config.client.globals, config.client.config),
		store: new SearchStore(config.controller as SearchControllerConfig, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(config.client.globals),
	});

	return cntrlr;
}

function createRecommendationController(config: CreateConfig): RecommendationController {
	const urlManager = new UrlManager(new UrlTranslator(), reactLinker).detach(true);
	const cntrlr = new RecommendationController(config.controller as RecommendationControllerConfig, {
		client: new Client(config.client.globals, config.client.config),
		store: new RecommendationStore(config.controller as RecommendationControllerConfig, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(config.client.globals),
	});

	return cntrlr;
}

function createChatController(config: CreateConfig): ChatController {
	const urlManager = new UrlManager(new UrlTranslator(), reactLinker).detach(true);

	const cntrlr = new ChatController(config.controller as ChatControllerConfig, {
		client: new Client(config.client.globals, config.client.config),
		store: new ChatStore({ ...(config.controller as ChatControllerConfig), siteId: config.client.globals.siteId }, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(config.client.globals),
	});

	return cntrlr;
}

function createAutocompleteController(config: CreateConfig): AutocompleteController {
	const urlManager = new UrlManager(new UrlTranslator(), reactLinker).detach();

	const cntrlr = new AutocompleteController(config.controller as AutocompleteControllerConfig, {
		client: new Client(config.client.globals, config.client.config),
		store: new AutocompleteStore(config.controller as AutocompleteControllerConfig, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(config.client.globals),
	});

	return cntrlr;
}
