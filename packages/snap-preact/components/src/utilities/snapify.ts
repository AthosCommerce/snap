import { configure as configureMobx } from 'mobx';
import { SearchController, AutocompleteController, RecommendationController, ChatController } from '@athoscommerce/snap-controller';
import { Client } from '@athoscommerce/snap-client';
import { SearchStore, AutocompleteStore, RecommendationStore, ChatStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { ClientConfig, ClientGlobals } from '@athoscommerce/snap-client';
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

	static chat(config: ChatControllerConfig): ChatController {
		const id = config.id;
		if (controllers[id]) {
			return controllers[id] as ChatController;
		}

		const cntrlr: ChatController = (controllers[id] = createChatController({ client, controller: config }));

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
	const urlManager = new UrlManager(new UrlTranslator(), reactLinker);

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
