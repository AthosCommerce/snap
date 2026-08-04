import { Client } from '@athoscommerce/snap-client';
import { ChatStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, UrlTranslator, reactLinker, CoreMap, UrlTranslatorSettingsConfig } from '@athoscommerce/snap-url-manager';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';

import { createChatController } from './index';

import type { SnapChatControllerConfig } from '../types';
import type { UrlTranslatorConfig } from '@athoscommerce/snap-url-manager';

const createConfig: SnapChatControllerConfig = {
	client: {
		globals: {
			siteId: '8uyt2m',
		},
		config: {
			meta: {
				cache: {
					purgeable: false,
				},
			},
		},
	},
	controller: {
		id: 'chat',
	},
	context: {
		shopper: {
			id: 'snapdev',
		},
		custom: {
			testing: true,
		},
	},
};

describe('createChatController', () => {
	beforeEach(() => {
		delete window.athos;
	});

	it('throws when incomplete configuration is used', () => {
		expect(() => {
			// @ts-ignore - testing invalid config passed
			createChatController({});
		}).toThrow();

		expect(() => {
			const bareConfig = {
				controller: {
					id: 'chat',
				},
			};

			// @ts-ignore - testing invalid config passed
			createChatController(bareConfig);
		}).toThrow();
	});

	it('creates a chat controller', () => {
		const controller = createChatController(createConfig);

		expect(controller).toBeDefined();
		expect(controller.id).toBe(createConfig.controller.id);
		expect(controller.context).toBe(createConfig.context);

		// services
		expect(controller.client).toBeDefined();
		expect(controller.store).toBeDefined();
		expect(controller.urlManager).toBeDefined();
		expect(controller.eventManager).toBeDefined();
		expect(controller.profiler).toBeDefined();
		expect(controller.log).toBeDefined();
		expect(controller.tracker).toBeDefined();

		// other
		expect(controller.urlManager.detached).toBeDefined();
		// Property is private and only accessible within class
		// @ts-ignore
		expect(controller.client.globals.siteId).toBe(createConfig.client.globals.siteId);
		// Property is private and only accessible within class
		// @ts-ignore
		expect(controller.client.config.meta.cache.purgeable).toBe(createConfig.client.config.meta.cache.purgeable);
		// Property is private and only accessible within class
		// @ts-ignore
		expect(controller.tracker.globals.siteId).toBe(createConfig.client.globals.siteId);
	});

	it('creates a chat controller with custom UrlTranslator config', () => {
		const customUrlConfig = {
			...createConfig,
			url: {
				settings: {
					coreType: 'query',
					customType: 'query',
				},
				parameters: {
					core: {
						query: { name: 'query', type: 'query' },
						page: { name: 'p', type: 'query' },
					},
				},
			},
		};
		const controller = createChatController(customUrlConfig as SnapChatControllerConfig);

		expect(controller).toBeDefined();
		expect(controller.urlManager).toBeDefined();

		const translatorConfig = controller.urlManager.getTranslatorConfig() as UrlTranslatorConfig;
		// check for custom settings
		for (const [key, value] of Object.entries((customUrlConfig.url as UrlTranslatorConfig).settings || {})) {
			expect(translatorConfig.settings![key as keyof UrlTranslatorSettingsConfig]).toBe(value);
		}
		// check for custom parameter configuration
		for (const [key, value] of Object.entries((customUrlConfig.url as UrlTranslatorConfig).parameters!.core || {})) {
			expect(translatorConfig.parameters!.core![key as keyof CoreMap]).toStrictEqual(value);
		}
	});

	describe('custom services', () => {
		it('creates a chat controller with custom Client service', () => {
			const clientConfig = { siteId: 'custom' };
			const customClient = new Client(clientConfig);

			const controller = createChatController(createConfig, { client: customClient });

			expect(controller).toBeDefined();
			expect(controller.client).toBe(customClient);
			// Property is private and only accessible within class
			// @ts-ignore
			expect(controller.client.globals.siteId).toBe(clientConfig.siteId);
		});

		it('creates a chat controller with custom Store service', () => {
			const customUrlManager = new UrlManager(new UrlTranslator(), reactLinker);
			const customStore = new ChatStore(createConfig.controller, { urlManager: customUrlManager });

			const controller = createChatController(createConfig, { store: customStore });

			expect(controller).toBeDefined();
			expect(controller.store).toBe(customStore);
		});

		it('creates a chat controller with custom UrlManager service', () => {
			const customTranslatorConfig = {
				settings: {
					coreType: 'hash',
				},
			} as UrlTranslatorConfig;
			const customUrlManager = new UrlManager(new UrlTranslator(customTranslatorConfig), reactLinker);
			const controller = createChatController(createConfig, { urlManager: customUrlManager });

			expect(controller).toBeDefined();
			expect(controller.urlManager.detached).toBeDefined();

			const translatorConfig = controller.urlManager.getTranslatorConfig() as UrlTranslatorConfig;
			expect(translatorConfig.settings!.coreType).toBe(customTranslatorConfig.settings!.coreType);
		});

		it('creates a chat controller with custom EventManager service', () => {
			const customEventManager = new EventManager();

			const controller = createChatController(createConfig, { eventManager: customEventManager });

			expect(controller).toBeDefined();
			expect(controller.eventManager).toBe(customEventManager);
		});

		it('creates a chat controller with custom Profiler service', () => {
			const customProfiler = new Profiler('customProfiler');

			const controller = createChatController(createConfig, { profiler: customProfiler });

			expect(controller).toBeDefined();
			expect(controller.profiler).toBe(customProfiler);
			expect(controller.profiler.namespace).toBe('customProfiler');
		});

		it('creates a chat controller with custom Logger service', () => {
			const customLogger = new Logger({ prefix: 'customLogger' });

			const controller = createChatController(createConfig, { logger: customLogger });

			expect(controller).toBeDefined();
			expect(controller.log).toBe(customLogger);
		});

		it('creates a chat controller with custom Tracker service', () => {
			const customTracker = new Tracker({ siteId: 'custom' });

			const controller = createChatController(createConfig, { tracker: customTracker });

			expect(controller).toBeDefined();
			expect(controller.tracker).toBe(customTracker);
			// @ts-ignore - private property access
			expect(controller.tracker.globals.siteId).toBe('custom');
		});
	});
});
