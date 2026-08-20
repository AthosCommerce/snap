import 'whatwg-fetch';
import { v4 as uuidv4 } from 'uuid';

import { SearchStore } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager, Middleware, Next } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';
import { DomTargeter } from '@athoscommerce/snap-toolbox';

import { AbstractController } from './AbstractController';
import { FinderController } from '../Finder/FinderController';
import { SearchController } from '../Search/SearchController';
import { FinderStore } from '@athoscommerce/snap-store-mobx';
import type { ControllerConfig } from '../types';

describe('Search Controller', () => {
	const globals = { siteId: 'ga9kq2' };

	const controllerConfigDefault: ControllerConfig = {
		id: 'abstract',
	};

	class TestController extends AbstractController {
		async search() {
			return;
		}
	}

	let searchConfig: ControllerConfig;
	const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
	const services = { urlManager };

	beforeEach(() => {
		searchConfig = { ...controllerConfigDefault };
		searchConfig.id = uuidv4().split('-').join('');
	});

	it('throws if invalid config', async () => {
		expect(() => {
			// @ts-ignore
			new TestController(
				// @ts-ignore
				{ id: 123 },
				{
					client: new MockClient(globals, {}),
					store: new SearchStore(searchConfig, services),
					urlManager,
					eventManager: new EventManager(),
					profiler: new Profiler(),
					logger: new Logger(),
					tracker: new Tracker(globals),
				}
			);
		}).toThrow();
	});

	it('throws if invalid services', async () => {
		expect(() => {
			new TestController(searchConfig, {
				// @ts-ignore
				client: 'invalid',
				store: new SearchStore(searchConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				// @ts-ignore
				store: 'invalid',
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				store: new SearchStore(searchConfig, services),
				// @ts-ignore
				urlManager: 'invalid',
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				store: new SearchStore(searchConfig, services),
				urlManager,
				// @ts-ignore
				eventManager: 'invalid',
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				store: new SearchStore(searchConfig, services),
				urlManager,
				eventManager: new EventManager(),
				// @ts-ignore
				profiler: 'invalid',
				logger: new Logger(),
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				store: new SearchStore(searchConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				// @ts-ignore
				logger: 'invalid',
				tracker: new Tracker(globals),
			});
		}).toThrow();

		expect(() => {
			new TestController(searchConfig, {
				client: new MockClient(globals, {}),
				store: new SearchStore(searchConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				// @ts-ignore
				tracker: 'invalid', // invalid tracker
			});
		}).toThrow();
	});

	it('is uninitialized when constructed', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		expect(controller.initialized).toBe(false);
	});

	it('warns if init is recalled', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const spy = jest.spyOn(controller.log, 'warn');

		await controller.init();
		expect(spy).toHaveBeenCalledTimes(0);
		await controller.init();
		expect(spy).toHaveBeenCalledWith(`'init' middleware recalled`);
	});

	it('can attach middleware via controller.plugin', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const initfn = jest.fn();
		const paramPlugin = (controller: AbstractController) => {
			controller.on('init', async ({}: { controller: AbstractController }, next: Next) => {
				initfn();
				await next();
			});
		};

		// @ts-ignore
		controller.plugin(paramPlugin);

		expect(initfn).not.toHaveBeenCalled();

		await controller.init();

		expect(initfn).toHaveBeenCalled();
	});

	it('can attach middleware via controller.use', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const initfn = jest.fn();

		const initMiddleware: Middleware<{ controller: AbstractController }> = async ({}: { controller: AbstractController }, next: Next) => {
			initfn();
			await next();
		};

		const plugin = (controller: AbstractController) => {
			controller.on('init', async ({}: { controller: AbstractController }, next: Next) => {
				initfn();
				await next();
			});
		};

		const paramPlugin = (controller: AbstractController) => {
			controller.on('init', async ({}: { controller: AbstractController }, next: Next) => {
				initfn();
				await next();
			});
		};

		controller.use({
			middleware: {
				init: [initMiddleware],
			},
			plugins: [
				// @ts-ignore
				[plugin],
				// @ts-ignore
				[paramPlugin, 'param1', 'param2'],
			],
		});

		expect(initfn).not.toHaveBeenCalled();

		await controller.init();

		expect(initfn).toHaveBeenCalledTimes(3);
	});

	it('throws if controller.use is invalid format', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});
		const initfn = jest.fn();
		const spy = jest.spyOn(controller.log, 'warn');

		const plugin = (controller: AbstractController) => {
			controller.on('init', async ({}: { controller: AbstractController }, next: Next) => {
				initfn();
				await next();
			});
		};

		// test if plugins is not an array
		controller.use({
			// @ts-ignore
			plugins: plugin,
		});
		expect(spy).toHaveBeenCalledWith('plugins not attached - use format [func, ...args?][]');
		spy.mockClear();

		// test if plugins is not an array of arrays
		controller.use({
			plugins: [
				// @ts-ignore
				plugin,
			],
		});
		expect(spy).toHaveBeenCalledWith('plugins not attached - use format [func, ...args?][]');
		spy.mockClear();

		// test if middleware is not an array (should be converted to an array internally)
		const initMiddleware: Middleware<{ controller: AbstractController }> = async ({}: { controller: AbstractController }, next: Next) => {
			initfn();
			await next();
		};

		controller.use({
			middleware: {
				init: initMiddleware,
			},
		});
		await controller.init();
		expect(initfn).toBeCalledTimes(1);
	});

	it('can create a targeter', () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		controller.createTargeter(
			{
				name: 'newtarget',
				selector: 'ss__dne',
			},
			() => {
				// will not run
			}
		);

		expect(controller.targeters).toHaveProperty('newtarget');
	});

	it('can create a targeter', () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		controller.createTargeter(
			{
				name: 'newTargeter',
				selector: 'ss__dne',
			},
			() => {
				// will not run
			}
		);

		expect(controller.targeters).toHaveProperty('newTargeter');
	});

	it('can add a targeter', () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const targeter = new DomTargeter(
			[
				{
					name: 'addedTargeter',
					selector: 'ss__dne',
				},
			],
			() => {
				// will not run
			}
		);

		controller.addTargeter(targeter);

		expect(controller.targeters).toHaveProperty('addedTargeter');
	});

	it('can call retarget on all targeters', () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		controller.createTargeter(
			{
				name: 'newTargeter',
				selector: 'ss__dne',
			},
			() => {
				// will not run
			}
		);

		expect(controller.targeters).toHaveProperty('newTargeter');

		const targeter = new DomTargeter(
			[
				{
					name: 'addedTargeter',
					selector: 'ss__dne',
				},
			],
			() => {
				// will not run
			}
		);

		controller.addTargeter(targeter);

		expect(controller.targeters).toHaveProperty('addedTargeter');

		const retargetFn = jest.fn();

		// mocking target functions of controller targeters
		controller.targeters.newTargeter.retarget = retargetFn;
		controller.targeters.addedTargeter.retarget = retargetFn;

		controller.retarget();

		expect(retargetFn).toHaveBeenCalledTimes(2);
	});

	it('invokes handleError if string is thrown', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const error = 'string error';

		const trackerTrackError = jest.spyOn(controller.tracker.track, 'error');

		controller.handleError(error);

		expect(trackerTrackError).toHaveBeenCalled();

		trackerTrackError.mockClear();
	});

	it('handleError fires error eventManager event', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		let err;

		controller.on('error', async (eventData: any, next) => {
			const { error } = eventData;
			err = error;
			await next();
		});

		const error = 'string error';

		const trackerTrackError = jest.spyOn(controller.tracker.track, 'error');
		const eventManagerSpy = jest.spyOn(controller.eventManager, 'fire');

		expect(err).toBe(undefined);

		controller.handleError(error);

		expect(trackerTrackError).toHaveBeenCalled();
		expect(eventManagerSpy).toHaveBeenCalled();
		expect(err).toBe(error);

		trackerTrackError.mockClear();
	});

	it('invokes handleError if object is thrown', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const error = {
			error: 'object error',
		};

		const trackerTrackError = jest.spyOn(controller.tracker.track, 'error');

		controller.handleError(error);

		expect(trackerTrackError).toHaveBeenCalled();

		trackerTrackError.mockClear();
	});

	it('invokes handleError if ErrorEvent is thrown', async () => {
		const controller = new TestController(searchConfig, {
			client: new MockClient(globals, {}),
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		const error = new ErrorEvent('error', {
			error: new Error('test error'),
			message: 'something went wrong!',
			lineno: 1,
			filename: 'https://snapui.athoscommerce.io/test.js',
		});

		const addedDetails = {
			stuff: 'and things',
		};

		const trackerTrackError = jest.spyOn(controller.tracker.track, 'error');

		controller.handleError(error, addedDetails);

		expect(trackerTrackError).toHaveBeenCalledWith({
			context: {
				controller: {
					type: 'abstract',
					id: searchConfig.id,
				},
			},
			details: addedDetails,
			filename: error.filename,
			stack: error.error.stack,
			message: error.message,
			colno: error.colno,
			lineno: error.lineno,
			errortimestamp: error.timeStamp,
		});

		trackerTrackError.mockClear();
	});

	describe('AbstractController quickview', () => {
		const result: any = { id: 'child-1', type: 'product', mappings: { core: { parentId: 'parent-1' } } };

		// A search controller is the realistic opener: the manager delegates add-to-cart and product
		// tracking back to whoever opened the quickview, which finder controllers cannot service.
		const searchController = (quickviewManager?: any) => {
			const config = { id: 'test-search' };
			const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker).detach();

			return new SearchController(config, {
				client: new MockClient(globals, {}),
				store: new SearchStore(config, { urlManager }),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
				quickviewManager,
			});
		};

		it('forwards to the injected quickview manager with the result, products data and itself', async () => {
			const show = jest.fn();
			const controller = searchController({ show });

			const productsData: any = { variants: { data: [] } };

			await controller.quickview(result, productsData, { displayFields: ['color'] });

			// a thin forwarder — the manager derives parentId, meta and the effective config itself
			expect(show).toHaveBeenCalledTimes(1);
			expect(show).toHaveBeenCalledWith(
				result,
				expect.objectContaining({
					productsData,
					config: { displayFields: ['color'] },
					controller,
				})
			);
		});

		it('exposes the injected manager as quickviewManager', () => {
			const manager = { show: jest.fn() };
			expect(searchController(manager).quickviewManager).toBe(manager);
		});

		it('warns when no quickview service was passed', async () => {
			const controller = searchController();
			const spy = jest.spyOn(controller.log, 'warn');

			await controller.quickview(result);

			expect(spy).toHaveBeenCalledWith(`quickview ignored — no 'quickview' service was passed to this controller`);
		});

		it('throws when the quickview service cannot show', () => {
			expect(() => searchController({})).toThrow(`Invalid service 'quickview' passed to controller. Missing "show" function.`);
		});

		it('warns and does not forward for controller types that cannot open the quickview', async () => {
			const show = jest.fn();
			const finderConfig = {
				id: 'test-finder',
				url: '',
				fields: [{ field: 'category' }],
			};

			const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker).detach();

			const controller = new FinderController(finderConfig, {
				client: new MockClient(globals, {}),
				store: new FinderStore(finderConfig, { urlManager }),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals),
				quickviewManager: { show } as any,
			});

			const spy = jest.spyOn(controller.log, 'warn');

			await controller.quickview(result);

			// finder has no addToCart or product tracking for the manager to delegate back to
			expect(show).not.toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(`quickview ignored — 'finder' controllers cannot open the quickview`);
		});
	});
});
