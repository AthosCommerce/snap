/*
	
	- add lastUpdated date or attach dates to each message and use first/last message

	General UI Improvements
	 * Add more icons that are needed
	 * Beautify?

	Feedback UI
		* state not updating after feedback given

	Quickview (more info CTA)
		* add more display
		* add "add to cart" button
		* clean up

	Attachments General Improvements
		* in chat history show which attachments were sent with which messages (add images to product attachments)
		* product attachments should be more detailed - larger and more obvious because they change the discussion topic (context)
		 + should show product name, image maybe other details
		* allow for previous attachments to be re-attached
	
	Future (after demo)
		*	Render product results
			+ use SearchResultStore
			+ should persist on page reload
		* Image Attachment Improvements
			+ ability to re-attach a previously attached image via '+' button (or similar)

*/

import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ChatControllerConfig, ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore, ChatMessage } from '@athoscommerce/snap-store-mobx';
import { ChatRequestModel, MoiRequestModel } from '@athoscommerce/snap-client';
import type {
	ChatAttachmentImage,
	ChatAttachmentProduct,
	ChatAttachmentFacet,
	Product,
	Banner,
	ChatSessionStore,
} from '@athoscommerce/snap-store-mobx';
import { AddtocartSchemaData, type Product as BeaconProduct } from '@athoscommerce/beacon';
import { Next } from '@athoscommerce/snap-event-manager';

const KEY_ENTER = 13;

const defaultConfig: Partial<ChatControllerConfig> = {
	id: 'chat',
};

type chatTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product | Banner) => void;
		click: (e: MouseEvent, result: Product | Banner) => void;
		impression: (result: Product | Banner) => void;
		addToCart: (result: Product) => void;
	};
};

export class ChatController extends AbstractController {
	public type = ControllerTypes.chat;
	declare store: ChatStore;
	declare config: ChatControllerConfig;

	constructor(
		config: ChatControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);

		this.store.setConfig(this.config);

		// attach config plugins and event middleware
		this.use(this.config);

		// initialization - check widget status
		this.eventManager.on('init', async (_, next) => {
			if (this.store.chatEnabled === null) {
				await this.checkChatStatus();
			}
			next();
		});

		this.eventManager.on('beforeSearch', async (data: { controller: ChatController; request: ChatRequestModel }, next: Next) => {
			// TODO: test this
			if (this.store.chatEnabled === false) {
				this.log.warn('Chat is disabled, preventing search request');
				this.store.error = {
					type: ErrorType.WARNING,
					message: 'Chat is currently unavailable. Please try again later.',
				};
				// stop search
				return;
			}

			if (this.store.currentChat?.sessionId && this.store.currentChat?.sessionId === data.request.context.sessionId) {
				return next();
			}

			// new chat
			try {
				const chat: ChatSessionStore | undefined = await this.startNewChat();
				if (chat?.sessionId) {
					data.request.context.sessionId = chat?.sessionId;
				}
				next();
			} catch {
				// stop middleware if startNewChat throws (chat is disabled)
				return false;
			}
		});

		this.init();
	}

	checkChatStatus = async (): Promise<boolean> => {
		// @ts-ignore - globals is private
		let siteId = this.client.globals.siteId;
		if (siteId == 'ck4bj7') {
			// TODO: temporary - remove
			siteId = 'test-mattel-demo';
		}
		try {
			const response = await this.client.chatStatus({ siteId });
			return this.store.handleChatStatusResponse(response);
		} catch {
			const response = {
				chatbot: {
					status: {
						enabled: true,
					},
					suggestedQuestions: ['I want to buy barbie dolls', 'Do you have Formula 1 cars?', 'I am looking for toys from Toy Story'],
					welcomeMessage: 'Hi there! How can I assist you today?',
				},
				features: {
					imageSearch: { enabled: true },
					similarProducts: { enabled: true },
				},
			};
			return this.store.handleChatStatusResponse(response);
		}
	};
	startNewChat = async (): Promise<ChatSessionStore | undefined> => {
		const enabled = await this.checkChatStatus();
		if (!enabled) {
			const message = 'Chat is currently unavailable. Please try again later.';
			this.log.warn(message);
			this.store.error = {
				type: ErrorType.WARNING,
				message,
			};
			throw new Error(message);
		}
		this.store.error = undefined;

		const { userId, sessionId, shopperId } = this.tracker.getContext();
		// @ts-ignore - globals is private
		let siteId = this.client.globals.siteId; // TODO: get siteId from middleware request.siteId?
		let chat: ChatSessionStore | undefined;

		// TODO: temporary - remove
		if (siteId == 'ck4bj7') {
			siteId = 'test-mattel-demo';
		}

		try {
			this.store.initChatLoading = true;
			// TODO: add store loading indicator for this api request
			const response = await this.client.chatInit({
				siteId,
				userId,
				languageCode: navigator.language, // TODO: get language from templates config? Or currency from tracker?
				searchConfig: {
					sessionId,
					shopper: shopperId,
					// TODO: add these
					// bgFilters: [],
					// landingPage: '',
					// tag: '',
					// includeFacets: '',
					// excludeFacets: '',
				},
			});
			// TODO: handle if chatInit fails or denies new chat
			if (response) {
				chat = this.store.createChat({ sessionId: response.chatSessionId });
			}
		} catch (e) {
			this.log.error('Error starting new chat:', e);
			this.store.error = {
				message: 'Failed to start new chat.',
				type: ErrorType.ERROR,
			};
		} finally {
			this.store.initChatLoading = false;
		}
		return chat;
	};

	get params(): ChatRequestModel {
		const { userId, shopperId, sessionId, pageLoadId } = this.tracker.getContext();

		const productsToCompare = (this.store.currentChat?.comparisons.compared || []).map((item) => item.result.mappings.core.uid);

		const attachedImageIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'image')
			.map((attachment) => (attachment as ChatAttachmentImage).imageId);

		const attachedProductIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'product')
			.map((attachment) => (attachment as ChatAttachmentProduct).productId);

		const searchFilters = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'facet')
			.reduce((filters: any[], attachment) => {
				const facetAttachment = attachment as ChatAttachmentFacet;

				const exisitingFacet = filters.find((filter) => filter.key === facetAttachment.key);
				if (exisitingFacet) {
					exisitingFacet.options.push({
						key: facetAttachment.value,
					});
				} else {
					filters.push({
						key: facetAttachment.key,
						options: [
							{
								key: facetAttachment.value,
							},
						],
					});
				}
				return filters;
			}, []);

		const attachedImageId = attachedImageIds.length > 0 ? attachedImageIds[0] : undefined;
		const similarProducts = this.store.currentChat?.attachments.attached.filter(
			(attachment) => attachment.type === 'product' && attachment.requestType === 'productSimilar'
		) as ChatAttachmentProduct[];
		let chatRequest: MoiRequestModel = {
			requestType: 'general',
			message: this.store.inputValue,
		};

		if (attachedImageId) {
			chatRequest = {
				requestType: 'imageSearch',
				message: this.store.inputValue,
				attachedImageId,
			};
		}

		if (attachedProductIds.length == 1) {
			chatRequest = {
				requestType: 'productQuery',
				message: this.store.inputValue,
				productId: attachedProductIds[0],
			};
		}

		if (productsToCompare.length > 1) {
			chatRequest = {
				requestType: 'productComparison',
				message: this.store.inputValue,
				productIds: productsToCompare,
			};
		} else {
			// if no new comparison is being assembled but a committed comparison
			// is still on-screen (last message is a productComparison), keep the
			// conversation scoped to those products
			const committedComparisons = this.store.currentChat?.comparisons.committed || [];
			const activeMessageType = this.store.currentChat?.activeMessage?.messageType;
			if (committedComparisons.length > 1 && activeMessageType === 'productComparison') {
				chatRequest = {
					requestType: 'productComparison',
					message: this.store.inputValue,
					productIds: committedComparisons.map((item: any) => item.result.mappings.core.uid),
				};
			}
		}

		if (searchFilters.length > 0) {
			chatRequest = {
				requestType: 'productSearch',
				searchFilters,
			};
		}

		if (similarProducts?.length === 1) {
			chatRequest = {
				requestType: 'productSimilar',
				message: this.store.inputValue,
				productId: similarProducts[0].productId,
			};
		}

		const request: ChatRequestModel = {
			context: {
				sessionId: this.store.currentChat?.sessionId,
				widgetId: this.config.settings.widgetId,
			},
			data: chatRequest,
			tracking: {
				userId,
				domain: window.location.href,
				sessionId,
				pageLoadId,
			},
		};

		if (shopperId) {
			request.personalization = {
				shopper: shopperId,
			};
		}

		return request;
	}

	feedback = async (chatItem: ChatMessage, thumbs: 'UP' | 'DOWN', reason?: string) => {
		try {
			const existingFeedback = this.store.currentChat?.feedbacks.find((fb) => fb.messageId === chatItem.id);
			if (existingFeedback?.rating === thumbs) {
				return;
			}
			const { userId, shopperId } = this.tracker.getContext();
			const params = {
				context: {
					pqaWidgetId: this.config.settings.widgetId,
					sessionId: this.store.currentChat?.sessionId,
					visitorId: shopperId || userId,
				},
				feedback: {
					messageId: chatItem.id,
					thumbs,
					reason,
				},
			};
			await this.client.chatFeedback(params);
			if (existingFeedback) {
				existingFeedback.rating = thumbs;
			} else {
				this.store.currentChat?.feedbacks.push({ messageId: chatItem.id, rating: thumbs });
			}
		} catch (err) {
			this.log.error('Feedback Error:', err);
		}
	};

	upload = async (files: FileList | null) => {
		if (!files || files.length === 0) return;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const fileName = file.name.toLowerCase();
			const base64Image = await convertToBase64(file);
			const image = await base64ToBlob(base64Image);
			const params = {
				context: {
					widgetId: this.config.settings.widgetId,
				},
				image,
			};

			const attachment = this.store.currentChat?.attachments.add<ChatAttachmentImage>({ type: 'image', base64: base64Image, fileName });

			if (attachment) {
				try {
					const response = await this.client.uploadImage(params);
					if (response.success) {
						attachment.update({
							imageId: response.imageId,
							imageUrl: response.imageUrl,
							thumbnailUrl: response.thumbnailUrl,
						});
					} else if (response.error) {
						attachment.update({
							error: {
								message: response.error.errorMessage,
							},
						});
					}
				} catch (err) {
					attachment.update({
						error: {
							message: 'Upload Failed',
						},
					});
				}
			}
		}
	};

	viewProduct = (result: Product): void => {
		this.store.setQuickViewResult(result);
	};

	compareProduct = (result: Product): void => {
		this.store.compareProduct(result);
	};

	// TODO: to be added in future
	// inspirationRequest = (): void => {
	// 	this.search({ data: { requestType: 'inspiration', message: this.store.inputValue } });
	// };

	discussProduct = (result: Product, options: { requestType: 'productQuery' | 'productSimilar' | 'productComparison' }): void => {
		this.store.sendProductQuery(result, options);
		if (options.requestType === 'productSimilar') {
			this.search();
		}

		// focus the input
		const input = document.querySelector('.ss__chat__footer input[type="text"]') as HTMLInputElement;
		if (input) {
			input.focus();
		}
	};

	handlers = {
		input: {
			enterKey: async (e: KeyboardEvent): Promise<void> => {
				if (e.keyCode == KEY_ENTER) {
					this.search();
				}
			},
			input: (e: Event) => {
				const value = (e.target as HTMLInputElement).value;

				this.store.inputValue = value;
			},
		},
		button: {
			click: () => {
				this.store.open = !this.store.open;
			},
		},
	};

	openChat = (initialMessage?: string): void => {
		this.store.open = true;

		if (initialMessage) {
			this.store.inputValue = initialMessage;
			this.search();
		} else if (!this.store.currentChat?.sessionId) {
			this.startNewChat();
		}
		if (!initialMessage) {
			setTimeout(() => {
				this.focusInput();
			});
		}
	};

	focusInput = (): void => {
		const input = document.querySelector('.ss__chat__input input[type="text"]') as HTMLInputElement;
		if (input) {
			input.focus();
		}
	};

	search = async (overrides?: Partial<ChatRequestModel>): Promise<void> => {
		this.store.error = undefined;
		try {
			// TODO: add middleware
			const params = deepmerge(this.params, overrides || {});

			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			this.store.request(params);
			this.store.loading = true;

			// clear input value
			this.store.inputValue = '';

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const response = await this.client.chat(params);

			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterSearch' middleware cancelled`);
					afterSearchProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterSearch' middleware`);
					throw err;
				}
			}

			afterSearchProfile.stop();
			this.log.profile(afterSearchProfile);

			this.store.update(response);

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterStore' middleware cancelled`);
					afterStoreProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterStore' middleware`);
					throw err;
				}
			}

			afterStoreProfile.stop();
			this.log.profile(afterStoreProfile);
		} catch (err: any) {
			if (err) {
				if (err.err && err.fetchDetails) {
					switch (err.fetchDetails.status) {
						case 429: {
							this.store.error = {
								code: 429,
								type: ErrorType.WARNING,
								message: 'Too many frequent requests. Please try again later',
							};
							break;
						}

						case 500: {
							this.store.error = {
								code: 500,
								type: ErrorType.ERROR,
								message: 'An unexpected error occured. Please try again.',
							};
							break;
						}

						default: {
							this.store.error = {
								type: ErrorType.ERROR,
								message: err.err.message,
							};
							break;
						}
					}

					this.log.error(this.store.error);
					this.handleError(err.err, err.fetchDetails);
				} else {
					this.store.error = {
						type: ErrorType.ERROR,
						message: `Something went wrong... - ${err}`,
					};
					this.log.error(err);
					this.handleError(err);
				}
			}
		} finally {
			this.store.loading = false;
		}
	};

	track: chatTrackMethods = {
		product: {
			addToCart: (result: Product): void => {
				const responseId = result.responseId;
				const product: BeaconProduct = {
					parentId: result.id,
					uid: result.id,
					sku: result.mappings.core?.sku,
					qty: result.quantity || 1,
					price: Number(result.mappings.core?.price),
				};
				const data: AddtocartSchemaData = {
					responseId,
					results: [product],
				};
				this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data });
			},
			clickThrough: (e: MouseEvent, result: Product | Banner): void => {
				console.log(e, result);
			},
			click: (e: MouseEvent, result: Product | Banner): void => {
				console.log(e, result);
			},
			impression: (result: Product | Banner): void => {
				console.log(result);
			},
		},
	};

	addToCart = async (_products: Product[] | Product): Promise<void> => {
		const products = typeof (_products as Product[]).slice == 'function' ? (_products as Product[]).slice() : [_products];

		//todo add tracking
		// (products as Product[]).forEach((product) => {
		// 	this.track.product.addToCart(product);
		// });
		if (products.length > 0) {
			this.eventManager.fire('addToCart', { controller: this, products });
		}
	};
}

function convertToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
}

async function base64ToBlob(base64Image: string): Promise<Blob> {
	const fetchedImage = await fetch(base64Image);
	const blob = await fetchedImage.blob();
	return blob;
}
