import { AutocompleteController } from '@athoscommerce/snap-controller';
import { Client } from '@athoscommerce/snap-client';
import { AutocompleteStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { SnapControllerServices, SnapAutocompleteControllerConfig } from '../types';

export default (config: SnapAutocompleteControllerConfig, services?: SnapControllerServices): AutocompleteController => {
	//grab the url globals and pull them out of the translatorConfig
	const { globals: urlGlobals, ...translatorConfig } = config.url || {};

	let urlManager = (services?.urlManager || new UrlManager(new UrlTranslator(translatorConfig), reactLinker)).detach();

	if (urlGlobals?.length) {
		urlManager = urlManager.withGlobals(Object.fromEntries(urlGlobals.map(({ param, value }) => [param, [value]])));
	}

	// set client mode
	if (config.mode && config.client) {
		config.client.config = config.client.config || {};
		config.client.config.mode = config.mode;
	}

	const cntrlr = new AutocompleteController(
		config.controller,
		{
			client: services?.client || new Client(config.client!.globals, config.client!.config),
			store: services?.store || new AutocompleteStore(config.controller, { urlManager }),
			urlManager,
			eventManager: services?.eventManager || new EventManager(),
			profiler: services?.profiler || new Profiler(),
			logger: services?.logger || new Logger({ mode: config.mode }),
			tracker: services?.tracker || new Tracker(config.client!.globals),
			quickviewManager: services?.quickviewManager,
		},
		config.context
	);

	return cntrlr;
};
