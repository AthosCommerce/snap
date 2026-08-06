import { h } from 'preact';
import '@testing-library/jest-dom';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { setupEvents } from './setupEvents';

describe('setupEvents', () => {
	let eventManager: EventManager;
	const makeSelectionsSpy = jest.fn();
	const makeSearchSpy = jest.fn();
	const makeRecs1Spy = jest.fn();
	const makeRecs2Spy = jest.fn();
	const makeRecs3Spy = jest.fn();
	const openChatSpy = jest.fn();
	const chatSearchSpy = jest.fn();
	const productQuerySpy = jest.fn();
	const productSimilarSpy = jest.fn();

	beforeAll(() => {
		eventManager = setupEvents();

		window.athos = {
			controller: {
				search: {
					search: makeSearchSpy,
					store: {
						results: [
							{
								type: 'product',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
							{
								type: 'product',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
							{
								type: 'product',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
							{
								type: 'banner',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
						],
					},
				},
				recommend_similar_0: {
					type: 'recommendation',
					config: {
						realtime: true,
					},
					search: makeRecs1Spy,
					store: {
						results: [
							{
								type: 'product',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
							{
								type: 'product',
								variants: {
									makeSelections: makeSelectionsSpy,
								},
							},
						],
					},
				},
				recommend_similar_1: {
					type: 'recommendation',
					config: {
						realtime: true,
					},
					search: makeRecs2Spy,
				},
				recommend_trending_0: {
					type: 'recommendation',
					config: {
						realtime: false,
					},
					search: makeRecs3Spy,
				},
				chat: {
					type: 'chat',
					openChat: openChatSpy,
					search: chatSearchSpy,
					productQuery: productQuerySpy,
					productSimilar: productSimilarSpy,
				},
			},
		};
	});

	beforeEach(() => {
		expect(makeSelectionsSpy).not.toHaveBeenCalled();
		expect(makeSearchSpy).not.toHaveBeenCalled();
		expect(makeRecs1Spy).not.toHaveBeenCalled();
		expect(makeRecs2Spy).not.toHaveBeenCalled();
		expect(makeRecs3Spy).not.toHaveBeenCalled();
		expect(openChatSpy).not.toHaveBeenCalled();
		expect(chatSearchSpy).not.toHaveBeenCalled();
		expect(productQuerySpy).not.toHaveBeenCalled();
		expect(productSimilarSpy).not.toHaveBeenCalled();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('creates and returns an eventManager', () => {
		expect(eventManager).toBeDefined();
		expect(eventManager.events).toBeDefined();
		expect(eventManager.fire).toBeDefined();
		expect(eventManager.on).toBeDefined();

		expect(makeSelectionsSpy).not.toHaveBeenCalled();
	});

	describe('controller/selectVariantOptions', () => {
		it('can listen for controller/selectVariantOptions event', () => {
			//no data passed at all
			expect(() => {
				eventManager.fire('controller/selectVariantOptions');
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(5);
			//resets selections if no data is passed
			expect(makeSelectionsSpy).toHaveBeenCalledWith(undefined);
		});

		it('can pass options in the data', () => {
			const options = {
				size: 'm',
				color: ['red', 'blue'],
			};

			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { options: options });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(5);
			expect(makeSelectionsSpy).toHaveBeenCalledWith(options);
		});

		it('can pass exact match controllerId', () => {
			const options = {
				size: 'm',
				color: ['red', 'blue'],
			};

			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { options: options, controllerIds: ['search'] });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(3);
			expect(makeSelectionsSpy).toHaveBeenCalledWith(options);
		});

		it('can pass controllerId with no options', () => {
			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { controllerIds: ['search'] });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(3);
			//reset
			expect(makeSelectionsSpy).toHaveBeenCalledWith(undefined);
		});

		it('can pass multiple exact match controllerId', () => {
			const options = {
				size: 'm',
				color: ['red', 'blue'],
			};

			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { options: options, controllerIds: ['search', 'recommend_similar_0'] });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(5);
			expect(makeSelectionsSpy).toHaveBeenCalledWith(options);
		});

		it('can pass regex match controllerId', () => {
			const options = {
				size: 'm',
				color: ['red', 'blue'],
			};

			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { options: options, controllerIds: [/^recommend_/] });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(2);
			expect(makeSelectionsSpy).toHaveBeenCalledWith(options);
		});

		it('can pass regex and exact match controllerIds in an array', () => {
			const options = {
				size: 'm',
				color: ['red', 'blue'],
			};

			expect(() => {
				eventManager.fire('controller/selectVariantOptions', { options: options, controllerIds: [/^recommend_/, 'search'] });
			}).not.toThrow();

			expect(makeSelectionsSpy).toHaveBeenCalledTimes(5);
			expect(makeSelectionsSpy).toHaveBeenCalledWith(options);
		});
	});

	describe('controller/recommendation/update', () => {
		it('can listen for event and invoked without parameters', () => {
			//no data passed at all
			expect(() => {
				eventManager.fire('controller/recommendation/update');
			}).not.toThrow();

			expect(makeRecs1Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs2Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs3Spy).not.toHaveBeenCalled();
		});

		it('can pass exact match controllerId', () => {
			const controllerIds = 'recommend_similar_0';
			expect(() => {
				eventManager.fire('controller/recommendation/update', { controllerIds });
			}).not.toThrow();

			expect(makeRecs1Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs2Spy).not.toHaveBeenCalled();
			expect(makeRecs3Spy).not.toHaveBeenCalled();
		});

		it('can pass partial regex match controllerId', () => {
			const controllerIds = [/^recommend_/];
			expect(() => {
				eventManager.fire('controller/recommendation/update', { controllerIds });
			}).not.toThrow();

			expect(makeRecs1Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs2Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs3Spy).not.toHaveBeenCalled();
		});

		it('only invokes for recommendation type and if exists', () => {
			const controllerIds = ['recommend_similar_0', 'search', 'dne'];
			expect(() => {
				eventManager.fire('controller/recommendation/update', { controllerIds });
			}).not.toThrow();

			expect(makeRecs1Spy).toHaveBeenCalledTimes(1);
			expect(makeRecs2Spy).not.toHaveBeenCalled();
			expect(makeRecs3Spy).not.toHaveBeenCalled();
		});

		it('does not invoke if config.realtime is false', () => {
			const controllerIds = ['recommend_trending_1', 'search', 'dne'];
			expect(() => {
				eventManager.fire('controller/recommendation/update', { controllerIds });
			}).not.toThrow();

			expect(makeRecs1Spy).not.toHaveBeenCalled();
			expect(makeRecs2Spy).not.toHaveBeenCalled();
			expect(makeRecs3Spy).not.toHaveBeenCalled();
		});
	});

	describe('controller/chat/send', () => {
		it('opens the chat without dispatching a request when no data is passed', () => {
			expect(() => {
				eventManager.fire('controller/chat/send');
			}).not.toThrow();

			expect(openChatSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).not.toHaveBeenCalled();
		});

		it('dispatches a general request when a message is passed', () => {
			expect(() => {
				eventManager.fire('controller/chat/send', { message: 'hello' });
			}).not.toThrow();

			expect(openChatSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).toHaveBeenCalledWith({ data: { requestType: 'general', message: 'hello' } });
		});

		it('dispatches a request with an explicit requestType', () => {
			expect(() => {
				eventManager.fire('controller/chat/send', { requestType: 'inspiration', message: 'outfit ideas' });
			}).not.toThrow();

			expect(openChatSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).toHaveBeenCalledWith({ data: { requestType: 'inspiration', message: 'outfit ideas' } });
		});

		it('only invokes chat type controllers', () => {
			expect(() => {
				eventManager.fire('controller/chat/send', { controllerIds: ['search'], message: 'hello' });
			}).not.toThrow();

			expect(openChatSpy).not.toHaveBeenCalled();
			expect(chatSearchSpy).not.toHaveBeenCalled();
		});

		it('can pass exact match controllerId', () => {
			expect(() => {
				eventManager.fire('controller/chat/send', { controllerIds: ['chat'], message: 'hello' });
			}).not.toThrow();

			expect(openChatSpy).toHaveBeenCalledTimes(1);
			expect(chatSearchSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('controller/chat/productQuery', () => {
		it('invokes productQuery with the result and opens the chat', () => {
			const result = { id: 'product123' };

			expect(() => {
				eventManager.fire('controller/chat/productQuery', { result });
			}).not.toThrow();

			expect(productQuerySpy).toHaveBeenCalledTimes(1);
			expect(productQuerySpy).toHaveBeenCalledWith(result);
			expect(openChatSpy).toHaveBeenCalledTimes(1);
		});

		it('only invokes chat type controllers', () => {
			expect(() => {
				eventManager.fire('controller/chat/productQuery', { controllerIds: ['search'], result: { id: 'product123' } });
			}).not.toThrow();

			expect(productQuerySpy).not.toHaveBeenCalled();
			expect(openChatSpy).not.toHaveBeenCalled();
		});

		it('opens the chat before dispatching the product query', () => {
			// openChat replaces an expired session with a fresh chat — it must run
			// first or the attachment added by productQuery is discarded with it
			const order: string[] = [];
			openChatSpy.mockImplementationOnce(() => order.push('openChat'));
			productQuerySpy.mockImplementationOnce(() => order.push('productQuery'));

			eventManager.fire('controller/chat/productQuery', { result: { id: 'product123' } });

			expect(order).toEqual(['openChat', 'productQuery']);
		});
	});

	describe('controller/chat/productSimilar', () => {
		it('invokes productSimilar with the result and opens the chat', () => {
			const result = { id: 'product123' };

			expect(() => {
				eventManager.fire('controller/chat/productSimilar', { result });
			}).not.toThrow();

			expect(productSimilarSpy).toHaveBeenCalledTimes(1);
			expect(productSimilarSpy).toHaveBeenCalledWith(result);
			expect(openChatSpy).toHaveBeenCalledTimes(1);
		});

		it('only invokes chat type controllers', () => {
			expect(() => {
				eventManager.fire('controller/chat/productSimilar', { controllerIds: ['search'], result: { id: 'product123' } });
			}).not.toThrow();

			expect(productSimilarSpy).not.toHaveBeenCalled();
			expect(openChatSpy).not.toHaveBeenCalled();
		});

		it('opens the chat before dispatching the similar-products search', () => {
			// openChat replaces an expired session with a fresh chat — it must run
			// first or the search productSimilar fires targets the discarded session
			const order: string[] = [];
			openChatSpy.mockImplementationOnce(() => order.push('openChat'));
			productSimilarSpy.mockImplementationOnce(() => order.push('productSimilar'));

			eventManager.fire('controller/chat/productSimilar', { result: { id: 'product123' } });

			expect(order).toEqual(['openChat', 'productSimilar']);
		});
	});
});
