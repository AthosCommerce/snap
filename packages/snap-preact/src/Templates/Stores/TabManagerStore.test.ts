import 'whatwg-fetch';

import { SearchStore, AutocompleteStore } from '@athoscommerce/snap-store-mobx';
import { SearchController, AutocompleteController } from '@athoscommerce/snap-controller';
import type { AutocompleteTabConfig, SearchTabConfig } from '@athoscommerce/snap-controller';
import { UrlManager, UrlTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';

import { TabManagerStore, TAB_ID_DEFAULT_PARAM } from './TabManagerStore';

const globals = { siteId: 'ga9kq2' };
const TAB_PARAM = 'tab';

// mocks fetch so the beacon client does not make network requests
jest.spyOn(global.window, 'fetch').mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

// detached url managers keep `go()` out of jsdom navigation and let a starting url be seeded
const createUrlManager = (url = '', tabParam = TAB_PARAM) => {
	const translator = new UrlTranslator({ parameters: { custom: { [tabParam]: { type: 'query' } } } });
	return new UrlManager(translator, reactLinker, undefined, undefined, undefined, [], { url });
};

const createController = (id: string, urlManager: UrlManager) => {
	const config = { id, globals: {}, settings: {} };

	return new SearchController(config, {
		client: new MockClient(globals, {}),
		store: new SearchStore(config, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	});
};

const setup = (tabs: SearchTabConfig[], startingUrl = '') => {
	const controllers = tabs.map((tab) => createController(tab.id, createUrlManager(startingUrl)));
	const searchSpies = controllers.map((controller) => jest.spyOn(controller, 'search').mockResolvedValue(undefined as any));

	return { controllers, searchSpies };
};

const createAutocompleteController = (id: string, urlManager: UrlManager) => {
	const config = { id, selector: `#${id}`, action: '', globals: {}, settings: {} };

	return new AutocompleteController(config, {
		client: new MockClient(globals, {}),
		store: new AutocompleteStore(config, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	});
};

const setupAutocomplete = (tabs: AutocompleteTabConfig[]) => tabs.map((tab) => createAutocompleteController(tab.id, createUrlManager()));

describe('TabManagerStore', () => {
	const tabs: SearchTabConfig[] = [
		{ id: 'Products', siteId: 'abc123' },
		{ id: 'Blog', siteId: 'xyz789' },
	];

	const config = {
		tabParam: TAB_PARAM,
		catalogs: {
			abc123: { param: 'prod' },
			xyz789: { param: 'blog' },
		},
	};

	describe('tab construction', () => {
		it('builds a tab for each config', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.tabs).toHaveLength(2);
			expect(tabManager.tabs.map((tab) => tab.id)).toEqual(['Products', 'Blog']);
			expect(tabManager.tabs[0].siteId).toBe('abc123');
		});

		it('uses the catalog param as the tab param value', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.param).toBe(TAB_PARAM);
			expect(tabManager.tabs.map((tab) => tab.param)).toEqual(['prod', 'blog']);
		});

		it('falls back to the tab id when the catalog has no param', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, { tabParam: TAB_PARAM });

			expect(tabManager.tabs.map((tab) => tab.param)).toEqual(['Products', 'Blog']);
		});

		it('falls back to the default tab param when none is configured', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers);

			expect(tabManager.param).toBe(TAB_ID_DEFAULT_PARAM);
		});

		it('carries the label through from config', () => {
			const labelled: SearchTabConfig[] = [
				{ id: 'Products', siteId: 'abc123', label: 'Shop' },
				{ id: 'Blog', siteId: 'xyz789' },
			];
			const { controllers } = setup(labelled);
			const tabManager = new TabManagerStore(labelled, controllers, config);

			expect(tabManager.tabs[0].label).toBe('Shop');
			expect(tabManager.tabs[1].label).toBeUndefined();
		});

		it('skips a tab config with no matching controller', () => {
			const { controllers } = setup(tabs);
			const withExtra: SearchTabConfig[] = [...tabs, { id: 'Missing', siteId: 'nomatch' }];
			const tabManager = new TabManagerStore(withExtra, controllers, config);

			expect(tabManager.tabs).toHaveLength(2);
			expect(tabManager.getTab('Missing')).toBeUndefined();
		});
	});

	describe('active tab resolution', () => {
		it('activates the first tab by default', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.active?.id).toBe('Products');
		});

		it('activates the tab flagged as default', () => {
			const withDefault: SearchTabConfig[] = [
				{ id: 'Products', siteId: 'abc123' },
				{ id: 'Blog', siteId: 'xyz789', default: true },
			];
			const { controllers } = setup(withDefault);
			const tabManager = new TabManagerStore(withDefault, controllers, config);

			expect(tabManager.active?.id).toBe('Blog');
		});

		it('activates the tab matching the url param value', () => {
			const { controllers } = setup(tabs, '?tab=blog');
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.active?.id).toBe('Blog');
		});

		it('falls back to the default tab when the url value matches no tab', () => {
			const { controllers } = setup(tabs, '?tab=nothing');
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.active?.id).toBe('Products');
		});
	});

	describe('setActive', () => {
		it('changes the active tab', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			tabManager.setActive('Blog');

			expect(tabManager.active?.id).toBe('Blog');
		});

		it('writes the tab param value to the url', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			tabManager.setActive('Blog');

			// the newly active tab's own url manager holds the state
			expect(controllers[1].urlManager.detached?.url).toContain(`${TAB_PARAM}=blog`);
		});

		it('ignores an unknown tab id', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			tabManager.setActive('Nope');

			expect(tabManager.active?.id).toBe('Products');
		});

		it('is a no-op when the tab is already active', () => {
			const { controllers, searchSpies } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			searchSpies.forEach((spy) => spy.mockClear());
			tabManager.setActive('Products');

			expect(controllers[0].urlManager.detached?.url).toBe('');
			expect(searchSpies[0]).not.toHaveBeenCalled();
		});
	});

	describe('prefetch', () => {
		it('searches every tab by default', () => {
			const { controllers, searchSpies } = setup(tabs);
			new TabManagerStore(tabs, controllers, config);

			expect(searchSpies[0]).toHaveBeenCalled();
			expect(searchSpies[1]).toHaveBeenCalled();
		});

		it('does not search a tab that opts out of prefetching', () => {
			const noPrefetch: SearchTabConfig[] = [
				{ id: 'Products', siteId: 'abc123' },
				{ id: 'Blog', siteId: 'xyz789', prefetch: false },
			];
			const { controllers, searchSpies } = setup(noPrefetch);
			new TabManagerStore(noPrefetch, controllers, config);

			expect(searchSpies[0]).toHaveBeenCalled();
			expect(searchSpies[1]).not.toHaveBeenCalled();
		});

		it('always searches the active tab even when it opts out of prefetching', () => {
			const noPrefetch: SearchTabConfig[] = [
				{ id: 'Products', siteId: 'abc123', prefetch: false },
				{ id: 'Blog', siteId: 'xyz789', prefetch: false, default: true },
			];
			const { controllers, searchSpies } = setup(noPrefetch);
			new TabManagerStore(noPrefetch, controllers, config);

			expect(searchSpies[0]).not.toHaveBeenCalled();
			expect(searchSpies[1]).toHaveBeenCalled();
		});

		it('searches a deferred tab when it becomes active', () => {
			const noPrefetch: SearchTabConfig[] = [
				{ id: 'Products', siteId: 'abc123' },
				{ id: 'Blog', siteId: 'xyz789', prefetch: false },
			];
			const { controllers, searchSpies } = setup(noPrefetch);
			const tabManager = new TabManagerStore(noPrefetch, controllers, config);

			expect(searchSpies[1]).not.toHaveBeenCalled();

			tabManager.setActive('Blog');

			expect(searchSpies[1]).toHaveBeenCalled();
		});
	});

	describe('lookups', () => {
		it('finds a tab by id and by param', () => {
			const { controllers } = setup(tabs);
			const tabManager = new TabManagerStore(tabs, controllers, config);

			expect(tabManager.getTab('Blog')?.id).toBe('Blog');
			expect(tabManager.getTabByParam('blog')?.id).toBe('Blog');
			expect(tabManager.getTab('blog')).toBeUndefined();
			expect(tabManager.getTabByParam('Blog')).toBeUndefined();
		});
	});

	describe('autocomplete tabs', () => {
		const acTabs: AutocompleteTabConfig[] = [
			{ id: 'ACProducts', siteId: 'abc123' },
			{ id: 'ACBlog', siteId: 'xyz789' },
		];

		const createForm = () => {
			const form = document.createElement('form');
			const input = document.createElement('input');
			input.name = 'q';
			form.append(input);
			document.body.append(form);

			return { form, input };
		};

		afterEach(() => {
			document.body.innerHTML = '';
		});

		it('adds a hidden input carrying the active tab on submit', async () => {
			const controllers = setupAutocomplete(acTabs);
			new TabManagerStore(acTabs, controllers, config);
			const { form, input } = createForm();

			await controllers[0].eventManager.fire('beforeSubmit', { controller: controllers[0], input });

			const hidden = form.querySelector('input[type="hidden"]') as HTMLInputElement;

			expect(hidden).toBeTruthy();
			expect(hidden.name).toBe(TAB_PARAM);
			expect(hidden.value).toBe('prod');
		});

		it('updates the existing hidden input rather than appending another', async () => {
			const controllers = setupAutocomplete(acTabs);
			const tabManager = new TabManagerStore(acTabs, controllers, config);
			const { form, input } = createForm();

			await controllers[0].eventManager.fire('beforeSubmit', { controller: controllers[0], input });

			tabManager.setActive('ACBlog');

			await controllers[0].eventManager.fire('beforeSubmit', { controller: controllers[0], input });

			const hidden = form.querySelectorAll('input[type="hidden"]');

			expect(hidden).toHaveLength(1);
			expect((hidden[0] as HTMLInputElement).value).toBe('blog');
		});

		it('does nothing when the input has no form', async () => {
			const controllers = setupAutocomplete(acTabs);
			new TabManagerStore(acTabs, controllers, config);
			const input = document.createElement('input');

			await controllers[0].eventManager.fire('beforeSubmit', { controller: controllers[0], input });

			expect(document.querySelectorAll('input[type="hidden"]')).toHaveLength(0);
		});

		it('carries the query across to the newly active tab', () => {
			const controllers = setupAutocomplete(acTabs);
			const tabManager = new TabManagerStore(acTabs, controllers, config);

			controllers[0].store.state.input = 'winter';

			tabManager.setActive('ACBlog');

			expect(controllers[1].store.state.input).toBe('winter');
		});
	});
});
