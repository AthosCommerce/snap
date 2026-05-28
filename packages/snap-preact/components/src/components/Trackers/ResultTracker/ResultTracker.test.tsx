import 'whatwg-fetch';
import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../providers/theme';
import { RecommendationStore, RecommendationStoreConfig } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { Tracker } from '@athoscommerce/snap-tracker';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { MockClient } from '@athoscommerce/snap-shared';
import { RecommendationController } from '@athoscommerce/snap-controller';
import { ResultTracker } from './ResultTracker';

const globals = { siteId: '8uyt2m' };

const recommendConfig: RecommendationStoreConfig = {
	id: 'search',
	tag: 'trending',
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager,
};

const theme = {
	components: {
		resultTracker: {
			className: 'themeClass',
		},
	},
};

describe('ResultTracker Component', () => {
	let mockIntersectionObserver: any;
	let observerCallbacks: Map<Element, IntersectionObserverCallback>;

	beforeEach(() => {
		jest.useFakeTimers();
		observerCallbacks = new Map();

		mockIntersectionObserver = jest.fn((callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
			return {
				observe: jest.fn((element: Element) => {
					observerCallbacks.set(element, callback);
				}),
				unobserve: jest.fn((element: Element) => {
					observerCallbacks.delete(element);
				}),
				disconnect: jest.fn(() => {
					observerCallbacks.clear();
				}),
				root: null,
				rootMargin: options?.rootMargin || '0px',
				thresholds: Array.isArray(options?.threshold) ? options.threshold : [options?.threshold || 0],
				takeRecords: jest.fn(() => []),
			};
		});

		//@ts-ignore
		window.IntersectionObserver = mockIntersectionObserver;
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
		observerCallbacks.clear();
		//@ts-ignore
		window.IntersectionObserver.mockReset();
		jest.clearAllMocks();
	});

	afterAll(() => {
		// @ts-ignore
		window.IntersectionObserver.mockReset();
	});

	describe('RecommendationController Usage', () => {
		it('tracks as expected', async () => {
			const user = await userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			const impressionTrackfn = jest.spyOn(controller.track.product, 'impression');
			const clickTrackfn = jest.spyOn(controller.track.product, 'click');

			await controller.search();

			const rendered = render(
				<>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result}>
							<div className={`findMe findMe${idx}`} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);

			// Trigger intersection for all observed elements
			observerCallbacks.forEach((callback, element) => {
				callback(
					[
						{
							target: element,
							isIntersecting: true,
							intersectionRatio: 0.8,
							boundingClientRect: element.getBoundingClientRect(),
							intersectionRect: element.getBoundingClientRect(),
							rootBounds: null,
							time: Date.now(),
						} as IntersectionObserverEntry,
					],
					{} as IntersectionObserver
				);
			});

			// Fast-forward timers to satisfy the minimum visible time requirement (1000ms)
			jest.advanceTimersByTime(1000);

			await waitFor(() => {
				expect(impressionTrackfn).toHaveBeenCalledTimes(20);
			});

			// results should have done impression tracking
			controller.store.results.map((result) => {
				expect(impressionTrackfn).toHaveBeenCalledWith(result);
			});

			impressionTrackfn.mockClear();

			const resultElem = rendered.container.querySelector('.findMe0');
			expect(resultElem).toBeInTheDocument();

			await user.click(resultElem!);

			expect(clickTrackfn).toHaveBeenCalledWith(expect.anything(), controller.store.results[0]);

			clickTrackfn.mockClear();
		});

		it('can use track prop to disable tracking for impressions', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			const impressionTrackfn = jest.spyOn(controller.track.product, 'impression');

			await controller.search();

			const rendered = render(
				<>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} track={{ impression: false }}>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);

			// Trigger intersection for all observed elements
			observerCallbacks.forEach((callback, element) => {
				callback(
					[
						{
							target: element,
							isIntersecting: true,
							intersectionRatio: 0.8,
							boundingClientRect: element.getBoundingClientRect(),
							intersectionRect: element.getBoundingClientRect(),
							rootBounds: null,
							time: Date.now(),
						} as IntersectionObserverEntry,
					],
					{} as IntersectionObserver
				);
			});

			// Fast-forward timers to satisfy the minimum visible time requirement (1000ms)
			jest.advanceTimersByTime(1000);

			await waitFor(() => {
				expect(impressionTrackfn).not.toHaveBeenCalled();
			});

			impressionTrackfn.mockClear();
		});

		it('does not send impression events for bundle seed products', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			const impressionTrackfn = jest.spyOn(controller.track.product, 'impression');

			await controller.search();

			const seedResult = controller.store.results[0];
			const nonSeedResults = controller.store.results.slice(1);

			// RecommendationBundle passes track={{ impression: false }} for the seed and
			// track={{ impression: true }} (default) for every other result in the carousel.
			render(
				<>
					<ResultTracker controller={controller} result={seedResult} track={{ impression: false }}>
						<div className="seed">seed</div>
					</ResultTracker>
					{nonSeedResults.map((result, idx) => (
						<ResultTracker controller={controller} result={result} key={idx}>
							<div className={`findMe findMe${idx}`}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);

			// Trigger intersection for all observed elements
			observerCallbacks.forEach((callback, element) => {
				callback(
					[
						{
							target: element,
							isIntersecting: true,
							intersectionRatio: 0.8,
							boundingClientRect: element.getBoundingClientRect(),
							intersectionRect: element.getBoundingClientRect(),
							rootBounds: null,
							time: Date.now(),
						} as IntersectionObserverEntry,
					],
					{} as IntersectionObserver
				);
			});

			jest.advanceTimersByTime(1000);

			await waitFor(() => {
				// Only non-seed results should have fired impressions
				expect(impressionTrackfn).toHaveBeenCalledTimes(nonSeedResults.length);
			});

			// Seed must never have triggered an impression
			expect(impressionTrackfn).not.toHaveBeenCalledWith(seedResult);

			// Every non-seed result should have triggered an impression
			nonSeedResults.forEach((result) => {
				expect(impressionTrackfn).toHaveBeenCalledWith(result);
			});

			impressionTrackfn.mockClear();
		});

		it('can use track prop to disable tracking for clicks', async () => {
			const user = await userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			const clickTrackfn = jest.spyOn(controller.track.product, 'click');

			await controller.search();

			const rendered = render(
				<div>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} track={{ click: false }}>
							<div className={`findMe findMe${idx}`} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</div>
			);
			const resultElem = rendered.container.querySelector('.findMe0');

			await user.click(resultElem!);

			expect(clickTrackfn).not.toHaveBeenCalledWith(expect.anything(), controller.store.results[0]);

			clickTrackfn.mockClear();
		});

		it('can disable styling', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			await controller.search();

			const rendered = render(
				<>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} disableStyles>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);

			const CarouselElement = rendered.container.querySelector('.ss__recommendation-result-tracker');
			expect(Array.from(CarouselElement!.classList)).toStrictEqual(['ss__result-tracker', 'ss__recommendation-result-tracker']);
		});

		it('renders with classname', async () => {
			const className = 'classy';
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			await controller.search();

			const rendered = render(
				<>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} className={className}>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);
			const CarouselElement = rendered.container.querySelector('.ss__recommendation-result-tracker');
			expect(CarouselElement).toBeInTheDocument();
			expect(CarouselElement).toHaveClass(className);
		});

		it('is themeable with ThemeProvider', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			await controller.search();

			const rendered = render(
				<ThemeProvider theme={theme}>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result}>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</ThemeProvider>
			);

			const ChildElement = rendered.container.querySelector('.findMe');
			expect(ChildElement).toBeInTheDocument();

			const CarouselElement = rendered.container.querySelector('.ss__recommendation-result-tracker');
			expect(CarouselElement).toBeInTheDocument();
			expect(CarouselElement).toHaveClass(theme.components.resultTracker.className);
		});

		it('is themeable with theme prop', async () => {
			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			await controller.search();

			const rendered = render(
				<>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} theme={theme}>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</>
			);

			const ChildElement = rendered.container.querySelector('.findMe');
			expect(ChildElement).toBeInTheDocument();

			const CarouselElement = rendered.container.querySelector('.ss__recommendation-result-tracker');
			expect(CarouselElement).toBeInTheDocument();
			expect(CarouselElement).toHaveClass(theme.components.resultTracker.className);
		});

		it('is themeable with theme prop overrides ThemeProvider', async () => {
			const themeOverride = {
				components: {
					resultTracker: {
						className: 'newTheme',
					},
				},
			};

			const controller = new RecommendationController(recommendConfig, {
				client: new MockClient(globals, {}),
				store: new RecommendationStore(recommendConfig, services),
				urlManager,
				eventManager: new EventManager(),
				profiler: new Profiler(),
				logger: new Logger(),
				tracker: new Tracker(globals, { mode: 'development' }),
			});

			await controller.search();

			const rendered = render(
				<ThemeProvider theme={theme}>
					{controller.store.results.map((result, idx) => (
						<ResultTracker controller={controller} result={result} theme={themeOverride}>
							<div className={'findMe'} key={idx}>
								<div className="result">{result.mappings.core?.name}</div>
							</div>
						</ResultTracker>
					))}
				</ThemeProvider>
			);
			const ChildElement = rendered.container.querySelector('.findMe');
			expect(ChildElement).toBeInTheDocument();

			const CarouselElement = rendered.container.querySelector('.ss__recommendation-result-tracker');
			expect(CarouselElement).toBeInTheDocument();
			expect(CarouselElement).not.toHaveClass(theme.components.resultTracker.className);
			expect(CarouselElement).toHaveClass(themeOverride.components.resultTracker.className);
		});
	});
});
