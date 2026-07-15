import 'whatwg-fetch';
import { v4 as uuidv4 } from 'uuid';

import { ChatStore } from '@athoscommerce/snap-store-mobx';
import type { ChatStoreConfig, Product } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { EventManager, Next } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Tracker } from '@athoscommerce/snap-tracker';
import { MockClient } from '@athoscommerce/snap-shared';
import type { ChatRequestModel, ProductsResponseModel } from '@athoscommerce/snap-client';

import { ChatController } from './ChatController';
import type { ChatControllerConfig } from '../types';

const globals = { siteId: '8uyt2m' };

const chatConfigDefault: ChatControllerConfig = {
	id: 'chat',
	settings: {
		feedbackAfterMessages: 3,
		quickview: {
			enabled: true,
		},
	},
};

let chatConfig: ChatControllerConfig;
const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);

// mocks fetch so beacon client does not make network requests
jest.spyOn(global.window, 'fetch').mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve({}) } as Response));

// mock window.matchMedia for jsdom (used by productQuery/productSimilar to detect mobile)
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

function createController(configOverrides?: Partial<ChatControllerConfig>, mockClient?: MockClient): ChatController {
	const config = { ...chatConfig, ...configOverrides };
	const client = mockClient || new MockClient(globals, {});
	return new ChatController(config, {
		client,
		store: new ChatStore(config, { urlManager }),
		urlManager,
		eventManager: new EventManager(),
		profiler: new Profiler(),
		logger: new Logger(),
		tracker: new Tracker(globals),
	});
}

describe('Chat Controller', () => {
	beforeEach(() => {
		chatConfig = { ...chatConfigDefault };
		chatConfig.id = uuidv4().split('-').join('');
	});

	describe('instantiation', () => {
		it('can create a ChatController instance', () => {
			const controller = createController();

			expect(controller instanceof ChatController).toBeTruthy();
			expect(controller.store instanceof ChatStore).toBeTruthy();
			expect(controller.config.id).toBe(chatConfig.id);
			expect(controller.type).toBe('chat');
		});

		it('deep merges config with defaults', () => {
			const controller = createController({
				settings: {
					feedbackAfterMessages: 5,
				},
			});

			expect(controller.config.settings?.feedbackAfterMessages).toBe(5);
		});

		it('applies default config values', () => {
			const controller = createController({});

			// defaultConfig sets feedbackAfterMessages to 3 via deepmerge in constructor
			expect(controller.config.settings?.feedbackAfterMessages).toBe(3);
		});
	});

	describe('checkChatStatus', () => {
		it('checks chat status and sets store values when enabled', async () => {
			const controller = createController();

			const result = await controller.checkChatStatus();

			expect(result).toBe(true);
			expect(controller.store.chatEnabled).toBe(true);
			expect(controller.store.suggestedQuestions.length).toBeGreaterThan(0);
			expect(controller.store.welcomeMessage).toBeTruthy();
			expect(controller.store.features.imageSearch.enabled).toBe(true);
			expect(controller.store.features.similarProducts.enabled).toBe(true);
		});

		it('checks chat status and sets store values when disabled', async () => {
			const mockClient = new MockClient(globals, {});
			mockClient.mockData.updateConfig({ chatStatus: 'chatStatus.disabled' });
			const controller = createController({}, mockClient);

			const result = await controller.checkChatStatus();

			expect(result).toBe(false);
			expect(controller.store.chatEnabled).toBe(false);
			expect(controller.store.suggestedQuestions).toEqual([]);
			expect(controller.store.welcomeMessage).toBe('');
			expect(controller.store.features.imageSearch.enabled).toBe(false);
		});

		it('disables chat when chatStatus API throws', async () => {
			const controller = createController();
			controller.client.chatStatus = jest.fn().mockRejectedValue(new Error('Network error'));

			const result = await controller.checkChatStatus();

			expect(result).toBe(false);
			expect(controller.store.chatEnabled).toBe(false);
		});
	});

	describe('startNewChat', () => {
		it('creates a new chat session', async () => {
			const controller = createController();
			controller.store.chatEnabled = null; // force status check

			const chat = await controller.startNewChat();

			expect(chat).toBeDefined();
			expect(chat!.sessionId).toBe('test-session-001');
			expect(controller.store.currentChat).toBeDefined();
		});

		it('throws when chat is disabled', async () => {
			const mockClient = new MockClient(globals, {});
			mockClient.mockData.updateConfig({ chatStatus: 'chatStatus.disabled' });
			const controller = createController({}, mockClient);

			await expect(controller.startNewChat()).rejects.toThrow('Service is temporarily unavailable');
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('warning');
		});

		it('sets initChatLoading during initialization', async () => {
			const controller = createController();
			controller.store.chatEnabled = null;

			// capture loading state during the call
			let loadingDuringInit = false;
			const originalChatInit = controller.client.chatInit.bind(controller.client);
			controller.client.chatInit = jest.fn(async (params) => {
				loadingDuringInit = controller.store.initChatLoading;
				return originalChatInit(params);
			});

			await controller.startNewChat();

			expect(loadingDuringInit).toBe(true);
			expect(controller.store.initChatLoading).toBe(false); // reset after completion
		});

		it('handles chatInit API error', async () => {
			const controller = createController();
			controller.store.chatEnabled = null;
			controller.client.chatInit = jest.fn().mockRejectedValue(new Error('Init failed'));
			const logSpy = jest.spyOn(controller.log, 'error');

			const chat = await controller.startNewChat();

			expect(chat).toBeUndefined();
			expect(logSpy).toHaveBeenCalledWith('Error starting new chat:', expect.any(Error));
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.message).toBe("We couldn't start a new chat just now. Please try again in a moment.");
			logSpy.mockClear();
		});
	});

	describe('search', () => {
		it('sends a chat message and updates the store', async () => {
			const controller = createController();
			// pre-create a chat session so the search doesn't trigger startNewChat
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'show me dresses';

			await controller.search();

			expect(controller.store.loading).toBe(false);
			expect(controller.store.inputValue).toBe('');
		});

		it('sets loading state during search', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';

			let loadingDuringSearch = false;
			const originalChat = controller.client.chat.bind(controller.client);
			controller.client.chat = jest.fn(async (params) => {
				loadingDuringSearch = controller.store.loading;
				return originalChat(params);
			});

			await controller.search();

			expect(loadingDuringSearch).toBe(true);
			expect(controller.store.loading).toBe(false);
		});

		it('clears input value after sending', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test query';

			await controller.search();

			expect(controller.store.inputValue).toBe('');
		});

		it('can send search with overrides', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');

			await controller.search({ data: { requestType: 'general', message: 'override message' } } as Partial<ChatRequestModel>);

			expect(chatSpy).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.objectContaining({
						message: 'override message',
					}),
				})
			);
			chatSpy.mockClear();
		});

		it('handles 429 rate limiting error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';
			const handleError = jest.spyOn(controller, 'handleError');
			const error = new Error('Too many requests');

			controller.client.chat = jest.fn(() => {
				throw { err: error, fetchDetails: { status: 429, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.error).toStrictEqual({
				code: 429,
				type: 'warning',
				message: "We couldn't process your request. Please wait a few seconds and try again.",
			});
			expect(handleError).toHaveBeenCalledWith(error, { status: 429, url: 'test.com' });
			handleError.mockClear();
		});

		it('handles 500 server error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';
			const handleError = jest.spyOn(controller, 'handleError');
			const error = new Error('Server error');

			controller.client.chat = jest.fn(() => {
				throw { err: error, fetchDetails: { status: 500, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.error).toStrictEqual({
				code: 500,
				type: 'error',
				message: 'Something went wrong behind the scenes. Please give it another shot in a moment.',
			});
			expect(handleError).toHaveBeenCalledWith(error, { status: 500, url: 'test.com' });
			handleError.mockClear();
		});

		it('handles session limit exceeded error (CS_003)', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';

			controller.client.chat = jest.fn(() => {
				throw {
					err: new Error('Session limit exceeded'),
					fetchDetails: { status: 400, url: 'test.com' },
					responseBody: { errorCode: 'CS_003' },
				};
			});

			await controller.search();

			expect(controller.store.currentChat!.sessionLimitReached).toBe(true);
		});

		it('displays the returned errorMessage for CS_006 errors', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';

			controller.client.chat = jest.fn(() => {
				throw {
					err: new Error('Your message could not be processed.'),
					fetchDetails: { status: 200, url: 'test.com' },
					responseBody: { errorCode: 'CS_006', errorMessage: 'Your message could not be processed.' },
				};
			});

			await controller.search();

			expect(controller.store.error).toStrictEqual({
				type: 'error',
				message: 'Your message could not be processed.',
			});
		});

		it('handles unknown error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';
			const logSpy = jest.spyOn(controller.log, 'error');

			controller.client.chat = jest.fn(() => {
				throw new Error('Unknown error');
			});

			await controller.search();

			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('error');
			expect(logSpy).toHaveBeenCalled();
			logSpy.mockClear();
		});

		it('resets loading to false even after error', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';

			controller.client.chat = jest.fn(() => {
				throw { err: new Error('fail'), fetchDetails: { status: 500, url: 'test.com' } };
			});

			await controller.search();

			expect(controller.store.loading).toBe(false);
		});
	});

	describe('request preparation', () => {
		it('prevents search when chat is disabled', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = false;
			controller.store.inputValue = 'test message';
			const logSpy = jest.spyOn(controller.log, 'warn');

			await controller.search();

			expect(logSpy).toHaveBeenCalledWith('Chat is disabled, preventing search request');
			expect(controller.store.error).toBeDefined();
			expect(controller.store.error!.type).toBe('warning');
			logSpy.mockClear();
		});

		it('starts a new chat when no session exists', async () => {
			const controller = createController();
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test message';
			expect(controller.store.currentChat).toBeUndefined();

			const chatInitSpy = jest.spyOn(controller.client, 'chatInit');
			await controller.search();

			expect(chatInitSpy).toHaveBeenCalled();
			expect(controller.store.currentChat).toBeDefined();
			chatInitSpy.mockClear();
		});
	});

	describe('params', () => {
		it('constructs general request params', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.inputValue = 'hello';

			const params = controller.params;

			expect(params.context.sessionId).toBe('test-session-001');
			expect(params.data).toEqual({ requestType: 'general', message: 'hello' });
			expect(params.tracking).toBeDefined();
			expect(params.tracking.pageUrl).toBe(window.location.href);
		});

		it('constructs request with personalization when shopperId exists', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const shopper = { id: 'shopper123' };
			controller.tracker.track.shopper.login(shopper);

			const params = controller.params;

			expect(params.personalization?.shopper).toBe('shopper123');
		});
	});

	describe('productQuickView', () => {
		it('sets productQuickview on store and fetches product data', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			const mockResponse: ProductsResponseModel = {
				mappings: { core: { name: 'Test Product' } },
				variants: { optionConfig: {}, data: [] },
			};
			controller.client.products = jest.fn().mockResolvedValue(mockResponse);

			const result = {
				id: 'prod1',
				mappings: { core: { parentId: 'parent1', name: 'Test Product' } },
			} as unknown as Product;

			await controller.productQuickView(result);

			expect(controller.store.productQuickview).toBeDefined();
			expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'parent1' });
		});

		it('falls back to result.id when parentId is missing', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.client.products = jest.fn().mockResolvedValue({
				mappings: { core: {} },
				variants: { optionConfig: {}, data: [] },
			});

			const result = { id: 'fallback-id', mappings: { core: {} } } as unknown as Product;
			await controller.productQuickView(result);

			expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'fallback-id' });
		});

		it('sets error when products API fails', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const logSpy = jest.spyOn(controller.log, 'error');

			controller.client.products = jest.fn().mockRejectedValue(new Error('Network error'));

			const result = {
				id: 'prod1',
				mappings: { core: { parentId: 'parent1' } },
			} as unknown as Product;

			await controller.productQuickView(result);

			expect(logSpy).toHaveBeenCalledWith('Failed to fetch product details', expect.any(Error));
			expect(controller.store.productQuickviewError).toBe('Failed to load product details. Please try again.');
			logSpy.mockClear();
		});

		it('creates a chat if none exists', async () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			controller.client.products = jest.fn().mockResolvedValue({
				mappings: { core: {} },
				variants: { optionConfig: {}, data: [] },
			});

			const result = { id: 'prod1', mappings: { core: {} } } as unknown as Product;
			await controller.productQuickView(result);

			expect(controller.store.currentChat).toBeDefined();
		});
	});

	describe('reopenProductQuery', () => {
		it('reactivates the message and reloads the quickview for its product when the slot is stale', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.client.products = jest.fn().mockResolvedValue({
				mappings: { core: { name: 'Discussed Product' } },
				variants: { optionConfig: {}, data: [] },
			});

			const product = {
				id: 'prod1',
				mappings: { core: { parentId: 'parent1', name: 'Discussed Product' } },
			} as unknown as Product;

			controller.store.currentChat!.pushProductQueryMessage(product);
			const message = controller.store.currentChat!.chat.find((m) => m.messageType === 'productQuery')!;

			// The single quickview slot has been cleared (or holds another product) since
			// the message was created — reopening must restore it.
			controller.store.clearProductQuickview();
			expect(controller.store.productQuickview).toBeNull();

			await controller.reopenProductQuery(message);

			expect(controller.store.currentChat!.activeMessageId).toBe(message.id);
			expect(controller.store.productQuickview).not.toBeNull();
			expect(controller.client.products).toHaveBeenCalledWith({ parentId: 'parent1' });
		});
	});

	describe('compareProduct', () => {
		it('adds a product to the comparison set', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			const result = {
				id: 'prod1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;

			controller.compareProduct(result);

			expect(controller.store.currentChat!.comparisons.compared.length).toBe(1);
		});

		it('removes productQuery attachments when comparing', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			// add a productQuery attachment first
			controller.store.sendProductQuery(
				{ id: 'prod-q', display: { mappings: { core: { name: 'Query Product', thumbnailImageUrl: 'thumb.jpg' } } } },
				{ requestType: 'productQuery' }
			);
			const productQueryAttachments = controller.store.currentChat!.attachments.attached.filter((item) => item.type === 'product');
			expect(productQueryAttachments.length).toBe(1);

			const result = {
				id: 'prod1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;

			controller.compareProduct(result);

			// productQuery attachments should be removed
			const remainingProductQuery = controller.store.currentChat!.attachments.attached.filter(
				(item) => item.type === 'product' && (item as any).requestType === 'productQuery'
			);
			expect(remainingProductQuery.length).toBe(0);
		});
	});

	describe('productQuery', () => {
		it('sends a product query attachment', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			const sendSpy = jest.spyOn(controller.store, 'sendProductQuery');

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test', thumbnailImageUrl: 'thumb.jpg' } },
			} as unknown as Product;

			controller.productQuery(result);

			expect(sendSpy).toHaveBeenCalledWith(result, { requestType: 'productQuery' });
			sendSpy.mockClear();
		});

		it('resets comparisons before sending the product query', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			const compareResult1 = {
				id: 'comp1',
				display: { mappings: { core: { uid: 'uid1' } } },
				mappings: { core: { uid: 'uid1' } },
			} as unknown as Product;
			controller.store.compareProduct(compareResult1);
			expect(controller.store.currentChat!.comparisons.compared.length).toBe(1);

			const resetSpy = jest.spyOn(controller.store.currentChat!.comparisons, 'reset');

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test' } },
			} as unknown as Product;

			controller.productQuery(result);

			expect(resetSpy).toHaveBeenCalled();
			resetSpy.mockRestore();
		});
	});

	describe('productSimilar', () => {
		it('attaches the product and triggers a search', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const sendSpy = jest.spyOn(controller.store, 'sendProductQuery');
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const result = {
				id: 'prod1',
				mappings: { core: { name: 'Test', thumbnailImageUrl: 'thumb.jpg' } },
			} as unknown as Product;

			controller.productSimilar(result);

			expect(sendSpy).toHaveBeenCalledWith(result, { requestType: 'productSimilar' });
			expect(searchSpy).toHaveBeenCalled();
			sendSpy.mockClear();
			searchSpy.mockRestore();
		});
	});

	describe('openChat', () => {
		it('opens the chat UI', () => {
			const controller = createController();

			controller.openChat();

			expect(controller.store.open).toBe(true);
		});

		it('creates a chat if none exists when opening without a message', () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			controller.openChat();

			expect(controller.store.currentChat).toBeDefined();
		});

		it('sends an initial message when provided', async () => {
			const controller = createController();
			controller.store.chatEnabled = true;
			const searchSpy = jest.spyOn(controller, 'search');

			controller.openChat('test message');

			expect(controller.store.open).toBe(true);
			expect(searchSpy).toHaveBeenCalledWith({ data: { message: 'test message' } });
			searchSpy.mockClear();
		});
	});

	describe('handlers', () => {
		it('input.enterKey triggers search on Enter', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'test query';
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const event = { keyCode: 13 } as KeyboardEvent;
			await controller.handlers.input.enterKey(event);

			expect(searchSpy).toHaveBeenCalled();
			searchSpy.mockRestore();
		});

		it('input.enterKey does not trigger search on non-Enter key', async () => {
			const controller = createController();
			const searchSpy = jest.spyOn(controller, 'search').mockResolvedValue();

			const event = { keyCode: 65 } as KeyboardEvent; // 'a' key
			await controller.handlers.input.enterKey(event);

			expect(searchSpy).not.toHaveBeenCalled();
			searchSpy.mockRestore();
		});

		it('input.input updates store inputValue', () => {
			const controller = createController();
			const event = { target: { value: 'test input' } } as unknown as Event;

			controller.handlers.input.input(event);

			expect(controller.store.inputValue).toBe('test input');
		});

		it('button.click toggles store open state', () => {
			const controller = createController();
			expect(controller.store.open).toBe(false);

			controller.handlers.button.click();
			expect(controller.store.open).toBe(true);

			controller.handlers.button.click();
			expect(controller.store.open).toBe(false);
		});
	});

	describe('handleFeedback', () => {
		it('records thumbs up feedback', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('UP');

			expect(controller.store.currentChat!.feedback.rating).toBe('UP');
			expect(controller.store.currentChat!.feedback.justGiven).toBe(true);
		});

		it('records thumbs down feedback', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('DOWN');

			expect(controller.store.currentChat!.feedback.rating).toBe('DOWN');
		});

		it('does nothing when no current chat exists', () => {
			const controller = createController();
			expect(controller.store.currentChat).toBeUndefined();

			// should not throw
			controller.handleFeedback('UP');
		});

		it('auto-dismisses feedback after timeout', () => {
			jest.useFakeTimers();
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.handleFeedback('UP');
			expect(controller.store.currentChat!.feedback.dismissed).toBeFalsy();

			jest.advanceTimersByTime(3000);
			expect(controller.store.currentChat!.feedback.dismissed).toBe(true);

			jest.useRealTimers();
		});
	});

	describe('addToCart', () => {
		it('fires addToCart event with single product', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const product = { id: 'prod1', mappings: { core: {} } } as unknown as Product;
			await controller.addToCart(product);

			expect(eventSpy).toHaveBeenCalledWith('addToCart', {
				controller,
				products: [product],
			});
			eventSpy.mockClear();
		});

		it('fires addToCart event with multiple products', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const products = [
				{ id: 'prod1', mappings: { core: {} } },
				{ id: 'prod2', mappings: { core: {} } },
			] as unknown as Product[];

			await controller.addToCart(products);

			expect(eventSpy).toHaveBeenCalledWith('addToCart', {
				controller,
				products,
			});
			eventSpy.mockClear();
		});

		it('does not fire event for empty products', async () => {
			const controller = createController();
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			await controller.addToCart([] as unknown as Product[]);

			expect(eventSpy).not.toHaveBeenCalled();
			eventSpy.mockClear();
		});
	});

	describe('addToCart middleware', () => {
		it('invokes a configured addToCart middleware when controller.addToCart is called', async () => {
			const addToCartMiddleware = jest.fn(async (_data: any, next: Next) => {
				next();
			});
			const controller = createController({
				middleware: {
					addToCart: addToCartMiddleware,
				},
			});

			const products = [{ id: 'prod1', mappings: { core: {} } }] as unknown as Product[];
			await controller.addToCart(products);

			expect(addToCartMiddleware).toHaveBeenCalledWith(expect.objectContaining({ controller, products }), expect.any(Function));
		});
	});

	describe('tracking', () => {
		it('track.product.impression fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			controller.track.product.impression(result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.impression', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.impression deduplicates calls', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			controller.track.product.impression(result);
			controller.track.product.impression(result);

			// only fires once for the same product/response
			const impressionCalls = eventSpy.mock.calls.filter((call) => call[0] === 'track.product.impression');
			expect(impressionCalls.length).toBe(1);
			eventSpy.mockClear();
		});

		it('track.product.impression persists a seen flag to impressionStorage', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-persist' });
			const chatId = controller.store.currentChat!.id;

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			controller.track.product.impression(result);

			expect(controller.store.impressionStorage.get([chatId, 'resp1', 'prod1'])).toBe(true);
		});

		it('track.product.impression does not re-fire when the flag is already persisted (post-navigation)', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-nav' });
			const chatId = controller.store.currentChat!.id;

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			// Simulate a previous page view having already impressed this product:
			// storage is populated, but this controller's in-memory events map is empty.
			controller.store.impressionStorage.set([chatId, 'resp1', 'prod1'], true);

			const eventSpy = jest.spyOn(controller.eventManager, 'fire');
			controller.track.product.impression(result);

			const impressionCalls = eventSpy.mock.calls.filter((call) => call[0] === 'track.product.impression');
			expect(impressionCalls.length).toBe(0);
		});

		it('track.product.impression fires again for the same product under a different responseId', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-resp' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const base = { id: 'prod1', mappings: { core: { parentId: 'p', uid: 'u', sku: 's' } } };
			controller.track.product.impression({ ...base, responseId: 'resp1' } as unknown as Product);
			controller.track.product.impression({ ...base, responseId: 'resp2' } as unknown as Product);

			const impressionCalls = eventSpy.mock.calls.filter((call) => call[0] === 'track.product.impression');
			expect(impressionCalls.length).toBe(2);
		});

		it("a fresh controller does not treat one chat's impressions as another's (chatId isolation)", () => {
			// The in-memory events map is keyed by responseId only, so chatId isolation
			// lives entirely in storage. A fresh controller (empty events) is what makes
			// this observable — the same page-navigation scenario, but into a different chat.
			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'p', uid: 'u', sku: 's' } },
			} as unknown as Product;

			// Controller 1 impresses prod1/resp1 in chat A (shares localStorage key via chatConfig.id).
			const c1 = createController({ beacon: { enabled: true } });
			c1.store.createChat({ sessionId: 'session-a' });
			const chatAId = c1.store.currentChat!.id;
			c1.track.product.impression(result);

			// Fresh controller (navigation) whose current chat is a different chat B.
			const c2 = createController({ beacon: { enabled: true } });
			c2.store.createChat({ sessionId: 'session-b' });
			const chatBId = c2.store.currentChat!.id;
			expect(chatBId).not.toBe(chatAId);

			const eventSpy = jest.spyOn(c2.eventManager, 'fire');
			c2.track.product.impression(result);

			const impressionCalls = eventSpy.mock.calls.filter((call) => call[0] === 'track.product.impression');
			expect(impressionCalls.length).toBe(1);
		});

		it('track.product.impression does not throw or persist when responseId is missing', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'session-noresp' });
			const chatId = controller.store.currentChat!.id;

			const result = {
				id: 'prod1',
				mappings: { core: { parentId: 'p', uid: 'u', sku: 's' } },
			} as unknown as Product;

			expect(() => controller.track.product.impression(result)).not.toThrow();
			expect(controller.store.impressionStorage.get([chatId, 'undefined', 'prod1'])).not.toBe(true);
		});

		it('track.product.clickThrough fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1' } },
			} as unknown as Product;

			const event = new MouseEvent('click');
			controller.track.product.clickThrough(event, result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.clickThrough', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.addToCart fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				quantity: 1,
				display: { mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1', price: 48 } } },
				mappings: { core: { parentId: 'parent1', uid: 'uid1', sku: 'sku1', price: 48 } },
			} as unknown as Product;

			controller.track.product.addToCart(result);

			expect(eventSpy).toHaveBeenCalledWith('track.product.addToCart', expect.objectContaining({ controller, product: result }));
			eventSpy.mockClear();
		});

		it('track.product.feedback fires event', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const eventSpy = jest.spyOn(controller.eventManager, 'fire');

			controller.track.product.feedback('UP');

			expect(eventSpy).toHaveBeenCalledWith('track.product.feedback', expect.objectContaining({ controller }));
			eventSpy.mockClear();
		});

		it('track methods warn when no chatSessionId', () => {
			const controller = createController({ beacon: { enabled: true } });
			// no chat created - so no sessionId
			const logSpy = jest.spyOn(controller.log, 'warn');

			const result = {
				id: 'prod1',
				responseId: 'resp1',
				mappings: { core: { parentId: 'parent1' } },
			} as unknown as Product;

			controller.track.product.impression(result);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.impression');

			logSpy.mockClear();

			controller.track.product.clickThrough(new MouseEvent('click'), result);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.clickThrough');

			logSpy.mockClear();

			controller.track.product.addToCart(result as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.addToCart');

			logSpy.mockClear();

			controller.track.product.feedback('UP');
			expect(logSpy).toHaveBeenCalledWith('No chatSessionId available for track.product.feedback');

			logSpy.mockClear();
		});

		it('track methods warn when no result provided', () => {
			const controller = createController({ beacon: { enabled: true } });
			controller.store.createChat({ sessionId: 'test-session-001' });
			const logSpy = jest.spyOn(controller.log, 'warn');

			controller.track.product.impression(undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.impression');

			logSpy.mockClear();

			controller.track.product.clickThrough(new MouseEvent('click'), undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.clickThrough');

			logSpy.mockClear();

			controller.track.product.addToCart(undefined as unknown as Product);
			expect(logSpy).toHaveBeenCalledWith('No result provided to track.product.addToCart');

			logSpy.mockClear();
		});
	});

	describe('facet selection', () => {
		it('addFacet updates urlManager state and isFacetSelected returns true', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			expect(controller.store.isFacetSelected('color', 'red')).toBe(false);

			controller.store.addFacet({ key: 'color', value: 'red' });

			expect(controller.store.isFacetSelected('color', 'red')).toBe(true);
		});

		it('removeFacet clears the value from urlManager state', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });
			expect(controller.store.isFacetSelected('color', 'red')).toBe(true);

			controller.store.removeFacet('color', 'red');

			expect(controller.store.isFacetSelected('color', 'red')).toBe(false);
		});

		it('removeFacet removes specific value while keeping others for the same field', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });
			controller.store.addFacet({ key: 'color', value: 'blue' });

			expect(controller.store.isFacetSelected('color', 'red')).toBe(true);
			expect(controller.store.isFacetSelected('color', 'blue')).toBe(true);

			controller.store.removeFacet('color', 'red');

			expect(controller.store.isFacetSelected('color', 'red')).toBe(false);
			expect(controller.store.isFacetSelected('color', 'blue')).toBe(true);
		});

		it('removeFacet removes the filter key entirely when the last value is removed', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });
			controller.store.removeFacet('color', 'red');

			const filterState = (controller.store.urlManager.state as any)?.filter;
			expect(filterState?.color).toBeUndefined();
		});

		it('setActiveFacets seeds the urlManager with server-reported filtered values', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [
							{ value: 'red', label: 'Red', count: 5, filtered: true },
							{ value: 'blue', label: 'Blue', count: 3, filtered: false },
						],
					} as any,
				],
				'msg-1'
			);

			expect(controller.store.isFacetSelected('color', 'red')).toBe(true);
			expect(controller.store.isFacetSelected('color', 'blue')).toBe(false);
		});

		it('removing a seeded facet value updates isFacetSelected', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [
							{ value: 'red', label: 'Red', count: 5, filtered: true },
							{ value: 'blue', label: 'Blue', count: 3, filtered: false },
						],
					} as any,
				],
				'msg-1'
			);

			expect(controller.store.isFacetSelected('color', 'red')).toBe(true);

			controller.store.removeFacet('color', 'red');

			expect(controller.store.isFacetSelected('color', 'red')).toBe(false);
		});

		it('removing a seeded facet value removes it from urlManager filter state', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [{ value: 'red', label: 'Red', count: 5, filtered: true }],
					} as any,
				],
				'msg-1'
			);

			const filterBefore = (controller.store.urlManager.state as any)?.filter;
			expect(filterBefore?.color).toBeDefined();

			controller.store.removeFacet('color', 'red');

			const filterAfter = (controller.store.urlManager.state as any)?.filter;
			expect(filterAfter?.color).toBeUndefined();
		});

		it('clearPendingFacets removes all filter state', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });
			controller.store.addFacet({ key: 'size', value: 'large' });

			controller.store.clearPendingFacets();

			expect(controller.store.isFacetSelected('color', 'red')).toBe(false);
			expect(controller.store.isFacetSelected('size', 'large')).toBe(false);
		});

		it('addFacet with range-bucket value works with isFacetSelected', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			// Use non-zero low to avoid UrlManager falsy-value serialization issue
			controller.store.addFacet({ key: 'price', value: '10:50' });

			expect(controller.store.isFacetSelected('price', '10:50')).toBe(true);
			expect(controller.store.isFacetSelected('price', '50:100')).toBe(false);
		});

		it('removeFacet with range-bucket value clears the selection', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'price', value: '10:50' });
			controller.store.removeFacet('price', '10:50');

			expect(controller.store.isFacetSelected('price', '10:50')).toBe(false);
		});
	});

	describe('hasPendingFacetChanges', () => {
		it('is false when no facets have been changed', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			expect(controller.store.hasPendingFacetChanges).toBe(false);
		});

		it('is true after addFacet', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });

			expect(controller.store.hasPendingFacetChanges).toBe(true);
		});

		it('is true after removing a seeded facet value', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [{ value: 'red', label: 'Red', count: 5, filtered: true }],
					} as any,
				],
				'msg-1'
			);

			// snapshot was taken — no changes yet
			expect(controller.store.hasPendingFacetChanges).toBe(false);

			controller.store.removeFacet('color', 'red');

			expect(controller.store.hasPendingFacetChanges).toBe(true);
		});

		it('is false when changes match the applied snapshot', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [{ value: 'red', label: 'Red', count: 5, filtered: true }],
					} as any,
				],
				'msg-1'
			);

			// remove then re-add the same value — should match the snapshot again
			controller.store.removeFacet('color', 'red');
			expect(controller.store.hasPendingFacetChanges).toBe(true);

			controller.store.addFacet({ key: 'color', value: 'red' });
			expect(controller.store.hasPendingFacetChanges).toBe(false);
		});
	});

	describe('params with facet filters', () => {
		it('includes searchFilters when hasPendingFacetChanges is true', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });

			const params = controller.params;

			expect(params.data.requestType).toBe('productSearch');
			expect((params.data as any).searchFilters).toEqual([{ key: 'color', options: [{ key: 'red' }] }]);
		});

		it('includes multiple values for the same field', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.addFacet({ key: 'color', value: 'red' });
			controller.store.addFacet({ key: 'color', value: 'blue' });

			const params = controller.params;
			const colorFilter = (params.data as any).searchFilters.find((f: any) => f.key === 'color');

			expect(colorFilter.options).toEqual(expect.arrayContaining([{ key: 'red' }, { key: 'blue' }]));
		});

		it('includes range-bucket filter as low/high', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			// Use non-zero low to avoid UrlManager falsy-value serialization issue
			controller.store.addFacet({ key: 'price', value: '10:50' });

			const params = controller.params;
			const priceFilter = (params.data as any).searchFilters.find((f: any) => f.key === 'price');

			expect(priceFilter.options).toEqual([{ low: '10', high: '50' }]);
		});

		it('does not include searchFilters when there are no pending changes', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.inputValue = 'show me jackets';

			const params = controller.params;

			expect(params.data.requestType).toBe('general');
			expect((params.data as any).searchFilters).toBeUndefined();
		});

		it('sends empty searchFilters when all seeded facets are removed', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });

			controller.store.setActiveFacets(
				[
					{
						field: 'color',
						type: 'value',
						values: [{ value: 'red', label: 'Red', count: 5, filtered: true }],
					} as any,
				],
				'msg-1'
			);

			controller.store.removeFacet('color', 'red');

			const params = controller.params;

			expect(params.data.requestType).toBe('productSearch');
			expect((params.data as any).searchFilters).toEqual([]);
		});

		it('preserves user message when promoting to productSearch', () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.inputValue = 'show me jackets';

			controller.store.addFacet({ key: 'color', value: 'red' });

			const params = controller.params;

			expect(params.data.requestType).toBe('productSearch');
			expect((params.data as any).message).toBe('show me jackets');
			expect((params.data as any).searchFilters).toEqual([{ key: 'color', options: [{ key: 'red' }] }]);
		});
	});

	describe('request validation', () => {
		it('drops general requests with a blank message and warns', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			const warnSpy = jest.spyOn(controller.log, 'warn');
			controller.store.inputValue = '   ';

			await controller.search();

			expect(chatSpy).not.toHaveBeenCalled();
			expect(warnSpy).toHaveBeenCalled();
			expect(controller.store.currentChat?.chat.length).toBe(0);
			expect(controller.store.loading).toBe(false);
		});

		it('drops requests with a message over 256 characters and warns', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			const warnSpy = jest.spyOn(controller.log, 'warn');
			controller.store.inputValue = 'a'.repeat(257);

			await controller.search();

			expect(chatSpy).not.toHaveBeenCalled();
			expect(warnSpy).toHaveBeenCalled();
			expect(controller.store.currentChat?.chat.length).toBe(0);
		});

		it('sends a message of exactly 256 characters', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			controller.store.inputValue = 'a'.repeat(256);

			await controller.search();

			expect(chatSpy).toHaveBeenCalledTimes(1);
		});

		it('never sends a message field on productSimilar requests', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			controller.store.inputValue = 'show me similar stuff';

			await controller.search({ data: { requestType: 'productSimilar', productId: 'prod-1' } } as any);

			expect(chatSpy).toHaveBeenCalledTimes(1);
			const sentData = chatSpy.mock.calls[0][0].data;
			expect(sentData.requestType).toBe('productSimilar');
			expect(sentData).not.toHaveProperty('message');
		});

		it('omits a blank message on productComparison requests but still sends', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			controller.store.inputValue = '';

			await controller.search({ data: { requestType: 'productComparison', productIds: ['prod-1', 'prod-2'] } } as any);

			expect(chatSpy).toHaveBeenCalledTimes(1);
			const sentData = chatSpy.mock.calls[0][0].data;
			expect(sentData.requestType).toBe('productComparison');
			expect(sentData).not.toHaveProperty('message');
		});

		it('keeps a non-blank message on productComparison requests', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			controller.store.inputValue = 'which is warmer?';

			await controller.search({ data: { requestType: 'productComparison', productIds: ['prod-1', 'prod-2'] } } as any);

			expect(chatSpy).toHaveBeenCalledTimes(1);
			expect((chatSpy.mock.calls[0][0].data as any).message).toBe('which is warmer?');
		});

		it('omits a blank message on productSearch requests but still sends', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');
			controller.store.inputValue = '   ';

			await controller.search({ data: { requestType: 'productSearch' } } as any);

			expect(chatSpy).toHaveBeenCalledTimes(1);
			const sentData = chatSpy.mock.calls[0][0].data;
			expect(sentData.requestType).toBe('productSearch');
			expect(sentData).not.toHaveProperty('message');
		});
	});

	describe('pendingRequest resume', () => {
		it('search sets pendingRequest while in flight and clears it on response', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'show me dresses';

			let pendingDuringFlight;
			const originalChat = controller.client.chat.bind(controller.client);
			controller.client.chat = jest.fn(async (params) => {
				pendingDuringFlight = controller.store.currentChat?.pendingRequest;
				return originalChat(params);
			});

			await controller.search();

			expect(pendingDuringFlight).toEqual(expect.objectContaining({ requestType: 'general', message: 'show me dresses' }));
			expect(controller.store.currentChat?.pendingRequest).toBeNull();
		});

		it('clears pendingRequest when the request errors', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.inputValue = 'show me dresses';
			controller.client.chat = jest.fn().mockRejectedValue({ err: new Error('boom'), fetchDetails: { status: 500 } });

			await controller.search();

			expect(controller.store.currentChat?.pendingRequest).toBeNull();
			expect(controller.store.error).toBeDefined();
		});

		it('re-sends a pending request on openChat without pushing a duplicate user message', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.currentChat?.setPendingRequest({ requestType: 'general', message: 'lost message' });
			const chatSpy = jest.spyOn(controller.client, 'chat');

			controller.openChat();
			// resume is deferred a tick, then awaits the mocked network roundtrip
			await new Promise((resolve) => setTimeout(resolve, 10));

			expect(chatSpy).toHaveBeenCalledTimes(1);
			expect(chatSpy.mock.calls[0][0].data).toEqual({ requestType: 'general', message: 'lost message' });
			const userMessages = controller.store.currentChat?.chat.filter((m) => m.messageType === 'user') || [];
			expect(userMessages.length).toBe(0);
			expect(controller.store.currentChat?.pendingRequest).toBeNull();
		});

		it('re-sends a pending request when the chat is opened via the bubble toggle', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.currentChat?.setPendingRequest({ requestType: 'general', message: 'lost message' });
			const chatSpy = jest.spyOn(controller.client, 'chat');

			controller.handlers.button.click();
			await new Promise((resolve) => setTimeout(resolve, 10));

			expect(controller.store.open).toBe(true);
			expect(chatSpy).toHaveBeenCalledTimes(1);
		});

		it('does not re-send when nothing is pending', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			const chatSpy = jest.spyOn(controller.client, 'chat');

			controller.openChat();
			await new Promise((resolve) => setTimeout(resolve, 10));

			expect(chatSpy).not.toHaveBeenCalled();
		});

		it('does not resume when the session has expired', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.currentChat!.sessionEndTime = new Date(Date.now() - 1000);
			controller.store.currentChat?.setPendingRequest({ requestType: 'general', message: 'lost message' });
			const chatSpy = jest.spyOn(controller.client, 'chat');

			await controller.resumePendingRequest();

			expect(chatSpy).not.toHaveBeenCalled();
			expect(controller.store.currentChat?.pendingRequest).toEqual({ requestType: 'general', message: 'lost message' });
		});

		it('does not resume while a request is already loading', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.loading = true;
			controller.store.currentChat?.setPendingRequest({ requestType: 'general', message: 'lost message' });
			const chatSpy = jest.spyOn(controller.client, 'chat');

			await controller.resumePendingRequest();

			expect(chatSpy).not.toHaveBeenCalled();
		});

		it('a new message sent right after opening wins over the pending resume', async () => {
			const controller = createController();
			controller.store.createChat({ sessionId: 'test-session-001' });
			controller.store.chatEnabled = true;
			controller.store.currentChat?.setPendingRequest({ requestType: 'general', message: 'lost message' });
			const chatSpy = jest.spyOn(controller.client, 'chat');

			// mirrors the setupEvents chat/send flow: openChat() then search() in the same tick
			controller.openChat();
			const searchPromise = controller.search({ data: { requestType: 'general', message: 'new message' } } as any);
			await searchPromise;
			await new Promise((resolve) => setTimeout(resolve, 10));

			expect(chatSpy).toHaveBeenCalledTimes(1);
			expect((chatSpy.mock.calls[0][0].data as any).message).toBe('new message');
		});
	});
});
