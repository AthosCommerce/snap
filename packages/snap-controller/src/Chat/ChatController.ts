/*
	
	- add lastUpdated date or attach dates to each message and use first/last message

	General UI Improvements
	 * Add more icons that are needed
	 * Beautify?

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
import { filters } from '@athoscommerce/snap-toolbox';
import { AbstractController } from '../Abstract/AbstractController';
import { ChatControllerConfig, ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore } from '@athoscommerce/snap-store-mobx';
import { ChatRequestModel, ChatTrackingContext, MoiRequestModel } from '@athoscommerce/snap-client';
import type { ChatAttachmentImage, ChatAttachmentProduct, Product, Banner, ChatSessionStore } from '@athoscommerce/snap-store-mobx';
import {
	type Product as BeaconProduct,
	ChatImpressionSchemaData,
	ChatClickthroughSchemaData,
	ChatAddtocartSchemaData,
	ChatResultProduct,
	ChatFeedbackSchemaData,
	ChatFeedbackSchemaDataFeedbackEnum,
} from '@athoscommerce/beacon';
import { isClickWithinProductLink, CLICK_DUPLICATION_TIMEOUT } from '../utils/isClickWithinProductLink';

const KEY_ENTER = 13;

const defaultConfig: Partial<ChatControllerConfig> = {
	id: 'chat',
	beacon: {
		enabled: true,
	},
	settings: {
		feedbackAfterMessages: 3,
	},
};

type ChatTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product | Banner) => void;
		click: (e: MouseEvent, result: Product | Banner) => void;
		impression: (result: Product | Banner) => void;
		addToCart: (result: Product) => void;
		feedback: (thumbs: 'UP' | 'DOWN') => void;
	};
};

export class ChatController extends AbstractController {
	public type = ControllerTypes.chat;
	declare store: ChatStore;
	declare config: ChatControllerConfig;

	private events: {
		[responseId: string]: {
			product: {
				[id: string]: {
					clickThrough?: boolean;
					impression?: boolean;
				};
			};
		};
	} = {};

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

		this.init();
	}

	/** Returns true when the request can proceed, false to abort the search.
	 * Ensures chat is enabled and seeds the request with a session id (creating one if needed). */
	private prepareRequest = async (request: ChatRequestModel): Promise<boolean> => {
		if (this.store.chatEnabled === false) {
			this.log.warn('Chat is disabled, preventing search request');
			this.store.error = {
				type: ErrorType.WARNING,
				message: 'Chat is currently unavailable. Please try again later.',
			};
			return false;
		}

		if (this.store.currentChat?.sessionId && this.store.currentChat?.sessionId === request.context.sessionId) {
			return true;
		}

		try {
			const chat: ChatSessionStore | undefined = await this.startNewChat();
			if (chat?.sessionId) {
				request.context.sessionId = chat.sessionId;
			}
			return true;
		} catch {
			return false;
		}
	};

	private getChatTrackingContext = (): ChatTrackingContext => {
		const { sessionId, pageLoadId, pageUrl, shopperId, currency } = this.tracker.getContext();
		return {
			pageUrl,
			sessionId,
			pageLoadId,
			...(shopperId ? { shopperId } : {}),
			...(currency?.code ? { currency: currency.code } : {}),
		};
	};

	checkChatStatus = async (): Promise<boolean> => {
		// @ts-ignore - globals is private
		const siteId = this.client.globals.siteId;
		try {
			const response = await this.client.chatStatus({ siteId, tracking: this.getChatTrackingContext() });
			return this.store.handleChatStatusResponse(response);
		} catch (err) {
			this.log.warn('chat status request failed; disabling chat', err);
			return this.store.handleChatStatusResponse({
				chatbot: {
					status: {
						enabled: false,
					},
					suggestedQuestions: [],
					welcomeMessage: '',
				},
				features: {
					imageSearch: { enabled: false },
					similarProducts: { enabled: false },
				},
			});
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
		const siteId = this.client.globals.siteId; // TODO: get siteId from middleware request.siteId?
		let chat: ChatSessionStore | undefined;

		try {
			this.store.initChatLoading = true;
			// TODO: add store loading indicator for this api request
			const bgFilters = this.config.settings?.bgFilters as Record<string, string> | undefined;
			const response = await this.client.chatInit({
				siteId,
				userId,
				languageCode: (this.config.settings?.languageCode as string) || navigator.language,
				searchConfig: {
					sessionId,
					shopper: shopperId,
					...(bgFilters ? { bgFilters } : {}),
					// TODO: add these
					// landingPage: '',
					// tag: '',
					// includeFacets: '',
					// excludeFacets: '',
				},
				tracking: this.getChatTrackingContext(),
			});
			// TODO: handle if chatInit fails or denies new chat
			if (response) {
				const sessionEndTime = response.sessionEndTime ? new Date(response.sessionEndTime) : undefined;
				if (this.store.currentChat && !this.store.currentChat.sessionId) {
					this.store.currentChat.sessionId = response.chatSessionId;
					this.store.currentChat.sessionEndTime = sessionEndTime;
					this.store.currentChat.save();
					chat = this.store.currentChat;
				} else {
					chat = this.store.createChat({ sessionId: response.chatSessionId, sessionEndTime });
				}
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
		const { userId, shopperId } = this.tracker.getContext();
		const tracking = this.getChatTrackingContext();

		const productsToCompare = (this.store.currentChat?.comparisons.compared || []).map((item) => {
			const d = item.result?.display || item.result;
			return d.mappings.core.uid;
		});

		const attachedImageIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'image' && attachment.state !== 'error')
			.map((attachment) => (attachment as ChatAttachmentImage).imageId);

		const attachedProductIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'product' && (attachment as ChatAttachmentProduct).requestType !== 'productComparison')
			.map((attachment) => (attachment as ChatAttachmentProduct).productId);

		// Build searchFilters from the detached urlManager state — that's the
		// single source of truth for the in-progress facet selection on the
		// active facets display. Range/slider selections are emitted as
		// `{ low, high }` strings, value selections as `{ key }`.
		// Only emit when the user has actually changed the facets; the urlManager is
		// seeded from the active productSearchResult's filtered values, so an untouched
		// facet bar would otherwise promote every follow-up message to productSearch.
		const searchFilters: { key: string; options: ({ key: string } | { low: string; high: string })[] }[] = [];
		const filterState = (this.store.urlManager.state as any)?.filter as Record<string, any> | undefined;
		if (filterState && this.store.hasPendingFacetChanges) {
			Object.keys(filterState).forEach((field) => {
				const raw = filterState[field];
				const values = Array.isArray(raw) ? raw : [raw];
				const options: ({ key: string } | { low: string; high: string })[] = [];
				values.forEach((v) => {
					if (typeof v === 'object' && v !== null) {
						const low = v.low;
						const high = v.high;
						if (low == null && high == null) return;
						options.push({ low: low == null ? '*' : String(low), high: high == null ? '*' : String(high) });
					} else {
						options.push({ key: String(v) });
					}
				});
				if (options.length > 0) {
					searchFilters.push({ key: field, options });
				}
			});
		}

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
			// is still on-screen, keep the conversation scoped to those products.
			// when the user has navigated back to a historical productComparison
			// message, use that message's own products instead of the latest
			// committed snapshot. committed comparisons are also used as fallback
			// when the active message is a user follow-up (e.g. after a page
			// refresh where the last message is 'user' and the comparison context
			// was restored from storage)
			const activeMessage = this.store.currentChat?.activeMessage;
			const activeMessageType = activeMessage?.messageType;
			// Don't reuse a dismissed productComparison — the user intentionally closed it
			const isDismissedComparison = activeMessage && this.store.currentChat?.dismissedSideChatMessageId === activeMessage.id;
			const activeComparisonProductIds =
				activeMessageType === 'productComparison' && !isDismissedComparison
					? ((activeMessage as any)?.searchResults || [])
							.map((result: any) => result?.mappings?.core?.uid)
							.filter((uid: string | undefined): uid is string => !!uid)
					: [];
			const committedComparisons = this.store.currentChat?.comparisons.committed || [];
			if (activeComparisonProductIds.length > 1) {
				chatRequest = {
					requestType: 'productComparison',
					message: this.store.inputValue,
					productIds: activeComparisonProductIds,
				};
			} else if (committedComparisons.length > 1 && !isDismissedComparison) {
				chatRequest = {
					requestType: 'productComparison',
					message: this.store.inputValue,
					productIds: committedComparisons.map((item: any) => (item.result?.display || item.result).mappings.core.uid),
				};
			} else {
				// If the side chat was dismissed (via the toggle button) but the
				// comparison context bar is still visible (committed items remain),
				// use the comparison attachment product IDs so the request stays
				// scoped to the comparison. When the user explicitly closes the
				// context bar (resetCommitted + dismissSideChat), committedComparisons
				// is empty and we correctly fall through to 'general'.
				const comparisonAttachments = this.store.currentChat?.attachments.compared || [];
				if (comparisonAttachments.length > 1 && committedComparisons.length > 0) {
					chatRequest = {
						requestType: 'productComparison',
						message: this.store.inputValue,
						productIds: comparisonAttachments.map((item: any) => item.productId),
					};
				}
			}
		}

		if (this.store.hasPendingFacetChanges && chatRequest.requestType !== 'productComparison') {
			// `searchFilters` only lives on productSearch in the API model — promote
			// to productSearch when the user has changed the facet selection, but
			// preserve the user's typed message so a follow-up like "show me jackets"
			// doesn't get silently dropped. An empty `searchFilters: []` is intentional
			// when the user cleared all previously-applied filters — the backend needs
			// to see the cleared state.
			// Comparison requests skip this promotion: a Compare click is an explicit
			// user intent that takes priority over the in-progress facet selection,
			// and `searchFilters` cannot be attached to a productComparison anyway.
			const message = this.store.inputValue?.trim();
			chatRequest = {
				requestType: 'productSearch',
				...(message ? { message } : {}),
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
			},
			data: chatRequest,
			tracking: {
				...tracking,
				userId,
			},
		};

		if (shopperId) {
			request.personalization = {
				shopper: shopperId,
			};
		}

		return request;
	}

	handleFeedback = (thumbs: 'UP' | 'DOWN') => {
		const currentChat = this.store.currentChat;
		if (!currentChat) return;

		currentChat.sessionFeedback = { rating: thumbs };
		currentChat.feedbackJustGiven = true;
		currentChat.save();

		this.track.product.feedback(thumbs);

		// auto-dismiss the feedback bar after 3 seconds
		setTimeout(() => {
			currentChat.feedbackDismissed = true;
			currentChat.save();
		}, 3000);
	};

	upload = async (files: FileList | null) => {
		if (!files || files.length === 0) return;

		// ensure a chat exists (fresh session opened via bubble has no currentChat yet)
		if (!this.store.currentChat) {
			this.store.createChat();
		}

		// uploading a photo starts a fresh context — abandon any in-progress or committed comparisons
		// (previous attachments are already cleared by attachments.add for type 'image')
		if ((this.store.currentChat?.comparisons.compared.length || 0) > 0) {
			this.store.currentChat?.comparisons.reset();
		}
		if ((this.store.currentChat?.comparisons.committed.length || 0) > 0) {
			this.store.currentChat?.comparisons.resetCommitted();
		}

		// dismiss any side-chat tied to the previous context (productQuery/productAnswer/productComparison)
		const activeMessageType = this.store.currentChat?.activeMessage?.messageType;
		if (activeMessageType === 'productQuery' || activeMessageType === 'productAnswer' || activeMessageType === 'productComparison') {
			this.store.currentChat?.dismissSideChat();
		}

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const fileName = file.name.toLowerCase();

			const base64Image = await convertToBase64(file);
			const image = await base64ToBlob(base64Image);
			const params = {
				image,
			};

			const attachment = this.store.currentChat?.attachments.add<ChatAttachmentImage>({ type: 'image', base64: base64Image, fileName });

			if (attachment) {
				try {
					const response = await this.client.uploadImage(params);
					attachment.update({
						imageId: response.imageId,
						imageUrl: response.imageUrl,
						thumbnailUrl: response.thumbnailUrl,
					});
				} catch (err: any) {
					const errorMessage = err?.responseBody?.errorMessage || 'An unknown error has occurred.';
					attachment.update({
						error: {
							message: errorMessage,
						},
					});
				}
			}
		}
	};

	/** Monotonic counter so a slower, earlier products fetch can't overwrite a later one. */
	private quickviewRequestId = 0;

	private loadProductQuickview = async (result: Product): Promise<void> => {
		const parentId = (result.mappings?.core?.parentId as string) || result.id;
		const requestId = ++this.quickviewRequestId;

		// Don't replace the currently displayed product until the parent details
		// have arrived — otherwise the panel flashes the new product without
		// variants/mappings while the products API is in flight.
		const isStillTargeting = (): boolean => {
			if (this.quickviewRequestId !== requestId) return false;
			// User backed out (popProductQueryMessage) — the active message no longer
			// targets this product. Skip applying so the dismissed product doesn't
			// pop back into view when the fetch resolves.
			const activeMessage = this.store.currentChat?.activeMessage;
			return activeMessage?.messageType === 'productQuery' && (activeMessage as any).sourceProduct?.id === result.id;
		};

		try {
			const response = await this.client.products({ parentId });
			if (!isStillTargeting()) return;
			this.store.setProductQuickview(result);
			this.store.updateProductQuickview(response);
		} catch (err) {
			if (!isStillTargeting()) return;
			this.log.error('Failed to fetch product details', err);
			// Still swap to the new product so the user sees the error in context
			// rather than against the previous product's details.
			this.store.setProductQuickview(result);
			this.store.setProductQuickviewError('Failed to load product details. Please try again.');
		}
	};

	productQuickView = async (result: Product): Promise<void> => {
		if (!this.config.settings?.quickview?.enabled) return;

		if (!this.store.currentChat) {
			this.store.createChat();
		}

		// Focus has shifted to a new product — drop any prior 'discuss product'
		// (productQuery) attachment so the previous discussion target doesn't
		// linger as a chat attachment alongside the newly focused product.
		const previousProductQueryAttachments = (this.store.currentChat?.attachments.attached || []).filter(
			(item) =>
				item.type === 'product' &&
				(item as ChatAttachmentProduct).requestType === 'productQuery' &&
				(item as ChatAttachmentProduct).productId !== result.id
		);
		previousProductQueryAttachments.forEach((item) => {
			this.store.currentChat?.attachments.remove(item.id);
		});

		this.store.currentChat?.pushProductQueryMessage(result);
		await this.loadProductQuickview(result);
	};

	compareProduct = (result: Product): void => {
		// remove any 'discuss product' (productQuery) attachments so the previous product context disappears
		const productQueryAttachments = (this.store.currentChat?.attachments.attached || []).filter(
			(item) => item.type === 'product' && (item as ChatAttachmentProduct).requestType === 'productQuery'
		);
		productQueryAttachments.forEach((item) => {
			this.store.currentChat?.attachments.remove(item.id);
		});

		// dismiss the side-chat if it's currently showing a productQuery/productAnswer from a previous 'discuss product'
		const activeMessageType = this.store.currentChat?.activeMessage?.messageType;
		if (activeMessageType === 'productQuery' || activeMessageType === 'productAnswer') {
			this.store.currentChat?.dismissSideChat();
		}

		// starting a new comparison — drop the previous committed set and close any
		// productComparison side chat so the old comparison doesn't stay active
		if (activeMessageType === 'productComparison') {
			this.store.currentChat?.comparisons.resetCommitted();
			this.store.currentChat?.dismissSideChat();
		}

		this.store.compareProduct(result);
	};

	// TODO: to be added in future
	// inspirationRequest = (): void => {
	// 	this.search({ data: { requestType: 'inspiration', message: this.store.inputValue } });
	// };

	/** Shared prep for productQuery/productSimilar: discard any in-progress or committed
	 * comparison set so the new single-product flow starts cleanly. */
	private resetComparisonsForSingleProductFlow = (): void => {
		if ((this.store.currentChat?.comparisons.compared.length || 0) > 0) {
			this.store.currentChat?.comparisons.reset();
		}
		if ((this.store.currentChat?.comparisons.committed.length || 0) > 0) {
			this.store.currentChat?.comparisons.resetCommitted();
			this.store.currentChat?.dismissSideChat();
		}
	};

	/** Focus the input on desktop — skipped on mobile so the virtual keyboard doesn't pop up. */
	private focusInputDesktopOnly = (): void => {
		const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
		if (!isMobile) {
			this.focusInput();
		}
	};

	productQuery = (result: Product): void => {
		// ensure a chat exists — without one, sendProductQuery silently no-ops because
		// the attachment lives on currentChat (fresh-page firings hit this path)
		if (!this.store.currentChat) {
			this.store.createChat();
		}
		this.resetComparisonsForSingleProductFlow();
		this.store.sendProductQuery(result, { requestType: 'productQuery' });
		this.loadProductQuickview(result);
		this.focusInputDesktopOnly();
	};

	productSimilar = (result: Product): void => {
		// ensure a chat exists — without one, sendProductQuery silently no-ops because
		// the attachment lives on currentChat (fresh-page firings hit this path)
		if (!this.store.currentChat) {
			this.store.createChat();
		}
		this.resetComparisonsForSingleProductFlow();
		this.store.sendProductQuery(result, { requestType: 'productSimilar' });
		this.search();
		this.focusInputDesktopOnly();
	};

	handlers = {
		input: {
			enterKey: async (e: KeyboardEvent): Promise<void> => {
				if (e.keyCode == KEY_ENTER && this.store.inputValue.trim()) {
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
				// Opening into an expired session would just show the placeholder —
				// drop the user into a fresh chat instead. The expired UI is
				// reserved for sessions reached via the history switcher.
				if (!this.store.open && this.store.currentChat?.isExpired) {
					this.store.createChat();
				}
				this.store.open = !this.store.open;
			},
		},
	};

	openChat = (initialMessage?: string): void => {
		this.store.open = true;

		// If the persisted active chat has expired, drop into a fresh session so the
		// user isn't greeted with the "expired" placeholder. The expired-state UI
		// still renders for older sessions reached via the history switcher.
		if (this.store.currentChat?.isExpired) {
			this.store.createChat();
		}

		if (initialMessage) {
			this.search({ data: { message: initialMessage } } as Partial<ChatRequestModel>);
		} else if (!this.store.currentChat) {
			this.store.createChat();
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
		// Drop concurrent calls — a spam-click on a suggested question used to fire
		// one `search` per click since the await on prepareRequest yielded the loop
		// before `store.loading` was set; now the synchronous loading flag below
		// stops the second click in its tracks.
		if (this.store.loading) return;

		this.store.error = undefined;
		// Strip HTML from the input at the submit boundary — the value flows into
		// both the API request body (via this.params) and the rendered user message,
		// so sanitizing once here prevents tag injection / XSS in both flows.
		this.store.inputValue = filters.stripHTML(this.store.inputValue);
		const params = deepmerge(this.params, overrides || {});

		// Ensure a chat exists synchronously so the user message can be pushed
		// without waiting for chatInit; startNewChat below will reuse this same
		// chat and attach the sessionId once the API roundtrips complete.
		if (!this.store.currentChat) {
			this.store.createChat();
		}

		// Push the user message and flip loading on synchronously. Previously these
		// happened after `await prepareRequest`, which made the chat feel unresponsive
		// during the chatStatus/chatInit network calls and let spam clicks slip past
		// the loading guard.
		this.store.request(params);
		this.store.loading = true;
		this.store.inputValue = '';
		// capture the chat this request belongs to so a response from a chat
		// the user has since left isn't applied to the new active chat
		const requestChatId: string | undefined = this.store.currentChat?.id;

		try {
			const proceed = await this.prepareRequest(params);
			// prepareRequest sets store.error when chat is disabled or session init
			// fails — the existing error banner surfaces that to the user.
			if (!proceed) return;

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const response = await this.client.chat(params);

			searchProfile.stop();
			this.log.profile(searchProfile);

			// user started a new chat while this request was in flight — drop the response
			if (this.store.currentChat?.id !== requestChatId) {
				return;
			}

			this.store.update(response);
		} catch (err: any) {
			// if user has switched away from this chat, suppress the error so it
			// doesn't surface (e.g. "failed to fetch") on the new chat
			if (requestChatId && this.store.currentChat?.id !== requestChatId) {
				return;
			}
			if (err) {
				if (err.err && err.fetchDetails) {
					// session limit exceeded — flag the current chat so the UI can show a banner
					if (err.responseBody?.errorCode === 'CS_003') {
						if (this.store.currentChat) {
							this.store.currentChat.sessionLimitReached = true;
						}
					} else {
						const errMessage: string = err.err?.message || '';
						const isRateLimited = err.fetchDetails.status === 429 || errMessage === 'Failed to fetch' || errMessage === 'Retry rate limit exceeded.';

						if (isRateLimited) {
							this.store.error = {
								code: 429,
								type: ErrorType.WARNING,
								message: 'Failed to process request. Please try again shortly',
							};
						} else if (err.fetchDetails.status === 500) {
							this.store.error = {
								code: 500,
								type: ErrorType.ERROR,
								message: 'An unexpected error occured. Please try again.',
							};
						} else {
							this.store.error = {
								type: ErrorType.ERROR,
								message: errMessage || 'An unknown error has occurred.',
							};
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
			// only clear loading if we're still on the chat that initiated the
			// request — createChat() already cleared loading on the new chat
			if (!requestChatId || this.store.currentChat?.id === requestChatId) {
				this.store.loading = false;
			}
		}
	};

	track: ChatTrackMethods = {
		product: {
			addToCart: (result: Product): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.addToCart');
					return;
				}

				const responseId = result.responseId;
				const chatSessionId = this.store.currentChat?.sessionId;

				if (!chatSessionId) {
					this.log.warn('No chatSessionId available for track.product.addToCart');
					return;
				}

				const display = result.display;
				const displayCore = display.mappings.core;

				const product: BeaconProduct = {
					parentId: displayCore?.parentId != null ? '' + displayCore.parentId : '',
					uid: (displayCore?.uid as string) || display.id,
					sku: displayCore?.sku as string | undefined,
					qty: result.quantity || 1,
					price: Number(displayCore?.price),
				};
				const data: ChatAddtocartSchemaData = {
					chatSessionId,
					responseId,
					results: [product],
				};
				this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events.chat.addToCart({ data });
			},
			clickThrough: (e: MouseEvent, result: Product | Banner): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.clickThrough');
					return;
				}

				const responseId = result.responseId;
				const chatSessionId = this.store.currentChat?.sessionId;

				if (!chatSessionId) {
					this.log.warn('No chatSessionId available for track.product.clickThrough');
					return;
				}

				const display = (result as Product).display || result;
				const displayCore = display.mappings.core;

				const item: ChatResultProduct = {
					type: 'product',
					parentId: displayCore?.parentId != null ? '' + displayCore.parentId : '',
					uid: displayCore?.uid != null ? '' + displayCore.uid : '' + display.id,
					sku: displayCore?.sku != null ? '' + displayCore.sku : undefined,
				};

				const data: ChatClickthroughSchemaData = {
					chatSessionId,
					responseId,
					results: [item],
				};
				this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events.chat.clickThrough({ data });
			},
			click: (e: MouseEvent, result: Product | Banner): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.click');
					return;
				}

				const responseId = result.responseId;

				if (!responseId) {
					this.log.warn('No responseId found on result for track.product.click');
					return;
				}

				this.events[responseId] = this.events[responseId] || { product: {} };

				if (isClickWithinProductLink(e, result as Product)) {
					if (this.events[responseId]?.product[result.id]?.clickThrough) {
						return;
					}
					this.track.product.clickThrough(e, result as Product);
					this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
					this.events[responseId].product[result.id].clickThrough = true;
					setTimeout(() => {
						if (this.events[responseId]?.product[result.id]) {
							this.events[responseId].product[result.id].clickThrough = false;
						}
					}, CLICK_DUPLICATION_TIMEOUT);
				}
			},
			impression: (result: Product | Banner): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.impression');
					return;
				}

				const responseId = result.responseId;
				const chatSessionId = this.store.currentChat?.sessionId;

				if (!chatSessionId) {
					this.log.warn('No chatSessionId available for track.product.impression');
					return;
				}

				this.events[responseId] = this.events[responseId] || { product: {} };

				if (this.events[responseId]?.product[result.id]?.impression) {
					return;
				}

				const display = (result as Product).display || result;
				const displayCore = display.mappings.core;

				const item: ChatResultProduct = {
					type: 'product',
					parentId: displayCore?.parentId != null ? '' + displayCore.parentId : '',
					uid: displayCore?.uid != null ? '' + displayCore.uid : '' + display.id,
					sku: displayCore?.sku != null ? '' + displayCore.sku : undefined,
				};

				const data: ChatImpressionSchemaData = {
					chatSessionId,
					responseId,
					results: [item],
				};
				this.eventManager.fire('track.product.impression', { controller: this, product: result, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events.chat.impression({ data });
				this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
				this.events[responseId].product[result.id].impression = true;
			},
			feedback: (thumbs: 'UP' | 'DOWN'): void => {
				const chatSessionId = this.store.currentChat?.sessionId;

				if (!chatSessionId) {
					this.log.warn('No chatSessionId available for track.product.feedback');
					return;
				}

				const data: ChatFeedbackSchemaData = {
					chatSessionId,
					feedback: thumbs === 'UP' ? ChatFeedbackSchemaDataFeedbackEnum.Positive : ChatFeedbackSchemaDataFeedbackEnum.Negative,
				};
				this.eventManager.fire('track.product.feedback', { controller: this, trackEvent: data });
				this.config.beacon?.enabled && this.tracker.events.chat.feedback({ data });
			},
		},
	};

	addToCart = async (_products: Product[] | Product): Promise<void> => {
		const products = typeof (_products as Product[]).slice == 'function' ? (_products as Product[]).slice() : [_products];

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
