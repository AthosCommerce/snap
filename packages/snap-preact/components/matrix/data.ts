import { SearchController, QuickviewManager } from '@athoscommerce/snap-controller';
import { Client } from '@athoscommerce/snap-client';
import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, NoopTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import type { UrlState } from '@athoscommerce/snap-url-manager';

const globals = { siteId: 'atkzs2' };

// one client for every matrix controller, so identical requests are served from its network cache
const client = new Client(globals);

// enables quickview buttons (results only render them when their controller has a quickview manager)
const quickviewManager = new QuickviewManager({});

// selections in every facet type - selected/filtered states and filter summaries
const filteredState: UrlState = {
	filter: {
		collection_name: ['Tops', 'Hers'],
		color: ['Black'],
		size: ['M'],
		ss_hierarchy: 'Hers',
	},
};

// matrix controllers keep their url state in memory (NoopTranslator) - a browser translator
// would rewrite the story iframe url and lose the story id
function createSearchController(id: string, state: UrlState): SearchController {
	const urlManager = new UrlManager(new NoopTranslator(), reactLinker).set(state);
	urlManager.go();

	const controller = new SearchController(
		{ id },
		{
			client,
			store: new SearchStore({ id }, { urlManager }),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
			quickviewManager,
		}
	);
	controller.init();

	return controller;
}

/*
	Every matrix cell needs its OWN controller: components write UI state into their stores while
	rendering (facet overflow limits, collapse state, ...), so cells sharing one store with
	different props re-render each other forever.
*/
const searches = new Map<string, { controller: SearchController; searched: Promise<void> }>();

// `state` selects the url state: false = unfiltered, true = selections in every facet, or any url state
const matrixSearch = (key: string, state: boolean | UrlState) => {
	const id = `${state === true ? 'filtered' : state ? 'custom' : 'default'}-${key}`;
	let search = searches.get(id);
	if (!search) {
		const controller = createSearchController(`Matrix-${id}`, state === true ? filteredState : state || {});
		search = { controller, searched: controller.search() };
		searches.set(id, search);
	}
	return search;
};

export const matrixController = (key: string, state: boolean | UrlState = false): SearchController => matrixSearch(key, state).controller;
export const matrixSearched = (key: string, state: boolean | UrlState = false): Promise<void> => matrixSearch(key, state).searched;

// story loaders warm the network cache so the cell controllers resolve from it
export const searchLoader = async () => ({ warmed: await matrixSearch('warm', false).searched });
export const filteredSearchLoader = async () => ({ warmed: await matrixSearch('warm', true).searched });
