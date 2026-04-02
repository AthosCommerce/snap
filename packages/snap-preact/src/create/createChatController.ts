import { ChatController } from '@athoscommerce/snap-controller';
import { Client } from '@athoscommerce/snap-client';
import { ChatStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { SnapControllerServices, SnapChatControllerConfig } from '../types';

export default (config: SnapChatControllerConfig, services?: SnapControllerServices): ChatController => {
	const urlManager = services?.urlManager || new UrlManager(new UrlTranslator(config.url), reactLinker);

	// set client mode
	if (config.mode && config.client) {
		config.client.config = config.client.config || {};
		config.client.config.mode = config.mode;
	}

	const cntrlr = new ChatController(
		config.controller,
		{
			client: services?.client || new Client(config.client!.globals, config.client!.config),
			store: services?.store || new ChatStore(config.controller),
			urlManager,
			eventManager: services?.eventManager || new EventManager(),
			profiler: services?.profiler || new Profiler(),
			logger: services?.logger || new Logger({ mode: config.mode }),
			tracker: services?.tracker || new Tracker(config.client!.globals),
		},
		config.context
	);

	return cntrlr;
};
