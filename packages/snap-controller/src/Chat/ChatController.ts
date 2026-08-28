import deepmerge from 'deepmerge';
import { filters } from '@athoscommerce/snap-toolbox';
import { AbstractController } from '../Abstract/AbstractController';
import { ChatControllerConfig, ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore } from '@athoscommerce/snap-store-mobx';
import { ChatRequestModel, ChatTrackingContext, MoiRequestModel, ProductIdentity, CHAT_MAX_MESSAGE_LENGTH } from '@athoscommerce/snap-client';
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

const CHAT_DISABLED_MESSAGE = 'Service is temporarily unavailable. In the meantime, feel free to use the search bar above to find what you need!';
const CHAT_INPUT_SELECTOR = '.ss__chat__input input[type="text"]';
const FEEDBACK_DISMISS_DELAY = 3000;
/** Keep in sync with the theme breakpoint the Chat components use. */
const DEFAULT_MOBILE_BREAKPOINT = 767;

/** Data keys the chat API accepts for each requestType — used to prune stale keys
 * left behind when a request override changes the requestType of the merged params. */
const REQUEST_TYPE_DATA_KEYS: Record<MoiRequestModel['requestType'], string[]> = {
	general: ['message'],
	productQuery: ['message', 'productIdentity'],
	productSearch: ['message', 'searchTerm', 'searchFilters'],
	productComparison: ['message', 'productIdentities'],
	imageSearch: ['message', 'attachedImageId'],
	productSimilar: ['productIdentity'],
	inspiration: ['message'],
	content: ['message'],
};

/** Build the productIdentity payload node from a result's core mappings. The variant API
 * behind productQuery/productSimilar/productComparison needs the parent product id alongside
 * the product id — `parentId` equals `uid` when the result is not a variant, so fall back
 * to the product id when the field is absent. */
const productIdentityFromCore = (core?: { uid?: string; parentId?: string }): ProductIdentity | undefined => {
	const productId = core?.uid;
	if (!productId) return undefined;
	return { parentId: core?.parentId || productId, productId };
};

/** Same identity shape from a product attachment. `variantUid` captures the variant the
 * shopper had selected when attaching — the API identity — while `productId` remains the
 * chat-local result id components use for lookups. Attachments persisted before these
 * fields existed fall back to their product id. Keep the productId derivation in sync
 * with the productQuery attachment lookup in ChatSessionStore.request(). */
const productIdentityFromAttachment = (attachment: { productId: string; parentId?: string; variantUid?: string }): ProductIdentity => {
	return { parentId: attachment.parentId || attachment.productId, productId: attachment.variantUid || attachment.productId };
};

/** Pending requests persisted before the productIdentity payload migration still carry
 * `productId`/`productIds` — reshape them so a resumed request matches the current API. */
const migratePendingRequest = (pending: MoiRequestModel | null | undefined): MoiRequestModel | null | undefined => {
	if (!pending) return pending;
	const legacy = pending as MoiRequestModel & { productId?: string; productIds?: string[] };
	if ((pending.requestType === 'productQuery' || pending.requestType === 'productSimilar') && !pending.productIdentity && legacy.productId) {
		const { productId, ...rest } = legacy;
		return { ...rest, productIdentity: { parentId: productId!, productId: productId! } } as MoiRequestModel;
	}
	if (pending.requestType === 'productComparison' && !pending.productIdentities && legacy.productIds) {
		const { productIds, ...rest } = legacy;
		return { ...rest, productIdentities: productIds!.map((id) => ({ parentId: id, productId: id })) } as MoiRequestModel;
	}
	return pending;
};

const defaultConfig: ChatControllerConfig = {
	id: 'chat',
	beacon: {
		enabled: true,
	},
	settings: {
		feedbackAfterMessages: 3,
		inputSelector: CHAT_INPUT_SELECTOR,
	},
};

/** Accepted so the QuickviewManager can delegate tracking back to a chat source controller
 * (it flags delegated events with `quickView: true`); forwarded on the fired event payloads. */
type ChatTrackOverrides = { quickView?: boolean };

type ChatTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product | Banner, overrides?: ChatTrackOverrides) => void;
		click: (e: MouseEvent, result: Product | Banner, overrides?: ChatTrackOverrides) => void;
		impression: (result: Product | Banner, overrides?: ChatTrackOverrides) => void;
		addToCart: (result: Product, overrides?: ChatTrackOverrides) => void;
	};
	feedback: (thumbs: 'UP' | 'DOWN') => void;
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
		{ client, store, urlManager, eventManager, profiler, logger, tracker, quickviewManager }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker, quickviewManager }, context);

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);

		this.store.setConfig(this.config);

		// initialization - check widget status
		this.eventManager.on('init', async (_, next) => {
			if (this.store.chatEnabled === null) {
				await this.checkChatStatus();
			}
			await next();
		});

		// attach config plugins and event middleware
		this.use(this.config);
	}

	// chat requests are never URL-driven — skip the urlManager → search subscription so
	// browser back/forward navigation cannot submit unsent input text as a chat message
	protected subscribeToUrlManager = false;

	/** Returns true when the request can proceed, false to abort the search.
	 * Ensures chat is enabled and seeds the request with a session id (creating one if needed). */
	private prepareRequest = async (request: ChatRequestModel): Promise<boolean> => {
		if (this.store.chatEnabled === false) {
			this.log.warn('Chat is disabled, preventing search request');
			this.store.error = {
				type: ErrorType.WARNING,
				message: CHAT_DISABLED_MESSAGE,
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
				return true;
			}
			// startNewChat surfaced its own error — without a sessionId the request cannot succeed
			return false;
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
		try {
			const response = await this.client.chatStatus({ siteId: this.client.siteId, tracking: this.getChatTrackingContext() });
			return this.store.handleChatStatusResponse(response);
		} catch (err) {
			// disable in memory only — a transient failure must not be persisted,
			// otherwise chat stays disabled until the cached status expires
			this.log.warn('chat status request failed; disabling chat', err);
			this.store.chatEnabled = false;
			return false;
		}
	};
	startNewChat = async (): Promise<ChatSessionStore | undefined> => {
		const enabled = await this.checkChatStatus();
		if (!enabled) {
			this.log.warn(CHAT_DISABLED_MESSAGE);
			this.store.error = {
				type: ErrorType.WARNING,
				message: CHAT_DISABLED_MESSAGE,
			};
			throw new Error(CHAT_DISABLED_MESSAGE);
		}
		this.store.error = undefined;

		const { userId, sessionId, shopperId } = this.tracker.getContext();
		let chat: ChatSessionStore | undefined;

		// capture the chat this init belongs to — the user may switch chats while
		// chatInit is in flight, and the new session must not attach to that chat
		const chatAtRequest = this.store.currentChat;

		try {
			this.store.initChatLoading = true;
			const bgFilters = this.config.settings?.bgFilters;
			const response = await this.client.chatInit({
				siteId: this.client.siteId,
				userId,
				languageCode: this.config.settings?.languageCode || navigator.language,
				searchConfig: {
					sessionId,
					shopper: shopperId,
					...(bgFilters ? { bgFilters } : {}),
				},
				tracking: this.getChatTrackingContext(),
			});
			if (response) {
				const sessionEndTime = response.sessionEndTime ? new Date(response.sessionEndTime) : undefined;
				if (chatAtRequest && !chatAtRequest.sessionId) {
					chatAtRequest.sessionId = response.chatSessionId;
					chatAtRequest.sessionEndTime = sessionEndTime;
					chatAtRequest.save();
					chat = chatAtRequest;
				} else {
					chat = this.store.createChat({ sessionId: response.chatSessionId, sessionEndTime });
				}
			}
		} catch (e) {
			this.log.error('Error starting new chat:', e);
			this.store.error = {
				message: "We couldn't start a new chat just now. Please try again in a moment.",
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

		const productsToCompare = (this.store.currentChat?.comparisons.compared || [])
			.map((item) => {
				const d = item.result?.display || item.result;
				return productIdentityFromCore(d?.mappings?.core);
			})
			.filter((identity): identity is ProductIdentity => !!identity);

		const attachedImageIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'image' && attachment.state !== 'error')
			.map((attachment) => (attachment as ChatAttachmentImage).imageId);

		const attachedProductIdentities = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'product' && (attachment as ChatAttachmentProduct).requestType !== 'productComparison')
			.map((attachment) => productIdentityFromAttachment(attachment as ChatAttachmentProduct));

		// Only emit when the user has actually changed the facets; the urlManager is
		// seeded from the active productSearchResult's filtered values, so an untouched
		// facet bar would otherwise promote every follow-up message to productSearch.
		const searchFilters = this.store.hasPendingFacetChanges ? this.store.searchFilters : [];

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

		if (attachedProductIdentities.length == 1) {
			chatRequest = {
				requestType: 'productQuery',
				message: this.store.inputValue,
				productIdentity: attachedProductIdentities[0],
			};
		}

		if (productsToCompare.length > 1) {
			chatRequest = {
				requestType: 'productComparison',
				message: this.store.inputValue,
				productIdentities: productsToCompare,
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
			const activeComparisonIdentities =
				activeMessageType === 'productComparison' && !isDismissedComparison
					? ((activeMessage as any)?.searchResults || [])
							.map((result: any) => productIdentityFromCore(result?.mappings?.core))
							.filter((identity: ProductIdentity | undefined): identity is ProductIdentity => !!identity)
					: [];
			const committedComparisons = this.store.currentChat?.comparisons.committed || [];
			if (activeComparisonIdentities.length > 1) {
				chatRequest = {
					requestType: 'productComparison',
					message: this.store.inputValue,
					productIdentities: activeComparisonIdentities,
				};
			} else if (committedComparisons.length > 1 && !isDismissedComparison) {
				chatRequest = {
					requestType: 'productComparison',
					message: this.store.inputValue,
					productIdentities: committedComparisons
						.map((item: any) => productIdentityFromCore((item.result?.display || item.result)?.mappings?.core))
						.filter((identity: ProductIdentity | undefined): identity is ProductIdentity => !!identity),
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
						productIdentities: comparisonAttachments.map((item: any) => productIdentityFromAttachment(item)),
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
				productIdentity: productIdentityFromAttachment(similarProducts[0]),
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

		return deepmerge(request, this.config.globals || {});
	}

	handleFeedback = (thumbs: 'UP' | 'DOWN'): void => {
		const currentChat = this.store.currentChat;
		if (!currentChat) return;

		currentChat.feedback.rating = thumbs;
		currentChat.feedback.justGiven = true;
		currentChat.save();

		this.track.feedback(thumbs);

		setTimeout(() => {
			currentChat.feedback.dismissed = true;
			currentChat.save();
		}, FEEDBACK_DISMISS_DELAY);
	};

	upload = async (files: FileList | null): Promise<void> => {
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
			this.dismissSideChat();
		}

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const fileName = file.name.toLowerCase();
			let attachment: ChatAttachmentImage | undefined;

			try {
				const base64Image = await convertToBase64(file);

				attachment = this.store.currentChat?.attachments.add<ChatAttachmentImage>({ type: 'image', base64: base64Image, fileName });
				if (!attachment) continue;

				const response = await this.client.uploadImage({ image: file });
				attachment.update({
					imageId: response.imageId,
					imageUrl: response.imageUrl,
					thumbnailUrl: response.thumbnailUrl,
				});
			} catch (err: any) {
				const serverMessage = err?.responseBody?.errorMessage;
				const errorMessage =
					err?.fetchDetails?.status === 400 && serverMessage
						? `${serverMessage}. Please try again.`
						: 'Something went wrong behind the scenes. Please give it another shot in a moment.';

				// a file-read failure happens before the attachment exists — create one
				// so the failure still surfaces through the attachment error state
				attachment = attachment || this.store.currentChat?.attachments.add<ChatAttachmentImage>({ type: 'image', fileName });
				attachment?.update({
					error: {
						message: errorMessage,
					},
				});

				this.handleError(err?.err || err, err?.fetchDetails);
			}
		}
	};

	/** Open the product quickview panel through the shared QuickviewManager pipeline: the
	 * manager fetches /v1/products, clones the result, builds variants and populates its
	 * QuickviewStore — whose `isOpen` flag drives the chat secondary window for productQuery
	 * messages. Superseded loads and back-outs are handled by the manager's own guards
	 * (each show() supersedes the last; close() aborts an in-flight one). */
	private loadProductQuickview = async (result: Product): Promise<void> => {
		if (!this.quickviewManager) {
			this.log.warn(`product quickview ignored — no 'quickviewManager' service was passed to this controller`);
			return;
		}
		await this.quickviewManager.show(result, { controller: this });
	};

	/** Close the product quickview panel; also aborts an in-flight product load. */
	closeProductQuickview = (): void => {
		this.quickviewManager?.close();
	};

	/** Dismiss the secondary window: mark the active message dismissed and close the product
	 * quickview so a stale `isOpen` can't re-show a productQuery panel later. */
	dismissSideChat = (): void => {
		this.store.currentChat?.dismissSideChat();
		this.closeProductQuickview();
	};

	productQuickView = async (result: Product): Promise<void> => {
		if (!this.config.settings?.quickview?.enabled) return;
		if (!this.quickviewManager) {
			this.log.warn(`product quickview ignored — no 'quickviewManager' service was passed to this controller`);
			return;
		}

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

	/** Re-open an existing productQuery side-chat message (e.g. clicking the product
	 * circle on an earlier user message). The quickview store may be closed or hold
	 * another product by now — so set the message active AND reload the quickview
	 * for its product. */
	reopenProductQuery = async (message: { id: string; sourceProduct?: Product }): Promise<void> => {
		if (!message?.sourceProduct) return;
		this.store.currentChat?.setActiveMessage(message.id);
		await this.loadProductQuickview(message.sourceProduct);
	};

	/** Switch the active chat session and re-sync the product quickview panel. The
	 * QuickviewStore holds whichever product was last shown (possibly another chat's) —
	 * reload it for the target chat's active productQuery, or close it when the target
	 * chat's side panel isn't an (undismissed) product query. */
	switchChat = async (id: string): Promise<void> => {
		this.store.switchChat(id);

		const chat = this.store.currentChat;
		if (chat?.id !== id) return;

		const activeMessage = chat.activeMessage;
		const sourceProduct =
			activeMessage?.messageType === 'productQuery' && chat.dismissedSideChatMessageId !== activeMessage.id
				? ((activeMessage as any).sourceProduct as Product | undefined)
				: undefined;

		if (!sourceProduct) {
			this.closeProductQuickview();
			return;
		}

		const quickviewStore = this.quickviewManager?.store;
		if (quickviewStore?.isOpen && quickviewStore.product?.id === sourceProduct.id) return;

		await this.loadProductQuickview(sourceProduct);
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
			this.dismissSideChat();
		}

		// starting a new comparison — drop the previous committed set and close any
		// productComparison side chat so the old comparison doesn't stay active
		if (activeMessageType === 'productComparison') {
			this.store.currentChat?.comparisons.resetCommitted();
			this.store.currentChat?.dismissSideChat();
		}

		this.store.compareProduct(result);
	};

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
		const breakpoint = this.config.settings?.mobileBreakpoint ?? DEFAULT_MOBILE_BREAKPOINT;
		const isMobile = typeof window !== 'undefined' && window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
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
		// skip the reload when the quickview already shows this product (e.g. Discuss
		// clicked from the product information panel) — rebuilding it would wipe the
		// user's variant selections; still reload if it was closed or errored
		const quickviewStore = this.quickviewManager?.store;
		if (!(quickviewStore?.isOpen && quickviewStore.product?.id === result.id && !quickviewStore.error)) {
			this.loadProductQuickview(result);
		}
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
				if (this.store.open) {
					this.scheduleResume();
				}
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
		} else {
			this.scheduleResume();
		}
		if (!initialMessage) {
			setTimeout(() => {
				this.focusInput();
			});
		}
	};

	focusInput = (): void => {
		const input = document.querySelector(this.config.settings?.inputSelector || CHAT_INPUT_SELECTOR) as HTMLInputElement;
		if (input) {
			input.focus();
		}
	};

	/** Mirror the backend's per-requestType message rules at the submit boundary.
	 * Returns the shaped request data, or undefined when the request must not be sent. */
	private finalizeRequestData = (data: MoiRequestModel): MoiRequestModel | undefined => {
		const finalized = { ...data } as MoiRequestModel & { message?: string };

		// prune data keys that are not valid for the final requestType — merging
		// overrides into the store-derived params can change the requestType while
		// keys from the previous shape (productIdentities, searchFilters, ...) linger
		const validKeys = REQUEST_TYPE_DATA_KEYS[finalized.requestType];
		if (validKeys) {
			Object.keys(finalized).forEach((key) => {
				if (key !== 'requestType' && !validKeys.includes(key)) {
					delete (finalized as Record<string, unknown>)[key];
				}
			});
		}

		// Strip HTML at the submit boundary — the message flows into both the API
		// request body and the rendered user message, and override messages
		// (openChat initial message, controller/chat/send event, autocomplete input) bypass
		// the input flow, so sanitizing the finalized message covers every path.
		if (typeof finalized.message === 'string') {
			finalized.message = filters.stripHTML(finalized.message).trim();
		}

		if (finalized.requestType === 'productSimilar') {
			delete finalized.message;
			return finalized;
		}

		if ((finalized.message?.length || 0) > CHAT_MAX_MESSAGE_LENGTH) {
			this.log.warn(`chat message exceeds ${CHAT_MAX_MESSAGE_LENGTH} characters; request not sent`);
			// surface it — `search()` cleared store.error just above, so without this
			// the message simply vanishes with no feedback to the shopper
			this.store.error = {
				type: ErrorType.WARNING,
				message: `Message is too long. Please keep it under ${CHAT_MAX_MESSAGE_LENGTH} characters.`,
			};
			return undefined;
		}

		if (finalized.requestType === 'productComparison' || finalized.requestType === 'productSearch') {
			if (!finalized.message) {
				delete finalized.message;
			}
			return finalized;
		}

		if (!finalized.message) {
			this.log.warn(`chat requestType '${finalized.requestType}' requires a message; request not sent`);
			return undefined;
		}

		return finalized;
	};

	/** The user switched chats mid-request. Apply the response to the chat that made it and
	 * clear its pending request — otherwise reopening that chat re-POSTs the same message. */
	private applyResponseToBackgroundChat = (requestChatId: string | undefined, response: { chat: any; meta: any }): void => {
		if (!requestChatId) return;
		const requestChat = this.store.chats.find((chat) => chat.id === requestChatId);
		if (!requestChat) return;
		requestChat.update(response);
		requestChat.setPendingRequest(null);
	};

	search = async (overrides?: Partial<ChatRequestModel>): Promise<void> => {
		// Drop concurrent calls — a spam-click on a suggested question used to fire
		// one `search` per click since the await on prepareRequest yielded the loop
		// before `store.loading` was set; now the synchronous loading flag below
		// stops the second click in its tracks.
		if (this.store.loading) return;

		if (!this.initialized) {
			await this.init();
			// re-check the concurrency guard — another search may have started while init was awaited
			if (this.store.loading) return;
		}

		this.store.error = undefined;
		// an override array replaces rather than appends — deepmerge's default concat
		// would send every `searchFilters` entry twice when the params getter and the
		// caller both derive them from the same pending facet selection
		const params = deepmerge(this.params, overrides || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

		const finalizedData = this.finalizeRequestData(params.data);
		if (!finalizedData) return;
		params.data = finalizedData;

		// Ensure a chat exists synchronously so the user message can be pushed
		// without waiting for chatInit; startNewChat below will reuse this same
		// chat and attach the sessionId once the API roundtrips complete.
		if (!this.store.currentChat) {
			this.store.createChat();
		}

		// Push the user message synchronously so the chat feels responsive during
		// the chatStatus/chatInit network calls.
		this.store.request(params);
		this.store.inputValue = '';

		await this.send(params);
	};

	/** Network/error lifecycle for an already-shaped request. Called by search()
	 * (after pushing the user message) and by resumePendingRequest() (whose user
	 * message is already in the persisted history). */
	private send = async (params: ChatRequestModel): Promise<void> => {
		this.store.loading = true;
		// persist the in-flight request so navigating away before the response
		// leaves a resumable trail; cleared on response or surfaced error below
		this.store.currentChat?.setPendingRequest(params.data);
		// capture the chat this request belongs to so a response from a chat
		// the user has since left isn't applied to the new active chat
		const requestChatId: string | undefined = this.store.currentChat?.id;

		try {
			const proceed = await this.prepareRequest(params);
			// prepareRequest sets store.error when chat is disabled or session init
			// fails — the existing error banner surfaces that to the user.
			if (!proceed) {
				this.store.currentChat?.setPendingRequest(null);
				return;
			}

			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					this.store.currentChat?.setPendingRequest(null);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const response = await this.client.chat(params);

			searchProfile.stop();
			this.log.profile(searchProfile);

			// user started a new chat while this request was in flight — apply the
			// response to the chat that asked for it rather than the visible one
			if (this.store.currentChat?.id !== requestChatId) {
				this.applyResponseToBackgroundChat(requestChatId, response);
				return;
			}

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

			// re-check after awaiting afterSearch middleware — the user may have
			// switched chats while it ran, and update() writes to the current chat
			if (this.store.currentChat?.id !== requestChatId) {
				this.applyResponseToBackgroundChat(requestChatId, response);
				return;
			}

			this.store.update(response);
			this.store.currentChat?.setPendingRequest(null);

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
			// if user has switched away from this chat, suppress the error so it
			// doesn't surface (e.g. "failed to fetch") on the new chat
			if (requestChatId && this.store.currentChat?.id !== requestChatId) {
				return;
			}
			// the failure is surfaced to the user below — don't silently re-send it
			// the next time the chat opens
			this.store.currentChat?.setPendingRequest(null);
			if (err) {
				if (err.err && err.fetchDetails) {
					// session limit exceeded — flag the current chat so the UI can show a banner
					if (err.responseBody?.errorCode === 'CS_003') {
						if (this.store.currentChat) {
							this.store.currentChat.sessionLimitReached = true;
						}
					} else if (err.responseBody?.errorCode === 'CS_006') {
						this.store.error = {
							type: ErrorType.ERROR,
							message:
								err.responseBody?.errorMessage ||
								'Your message was blocked due to content policy restrictions. Please try again with different wording.',
						};
					} else {
						const errMessage: string = err.err?.message || '';
						const isRateLimited = err.fetchDetails.status === 429 || errMessage === 'Failed to fetch' || errMessage === 'Retry rate limit exceeded.';

						if (isRateLimited) {
							this.store.error = {
								code: 429,
								type: ErrorType.WARNING,
								message: "We couldn't process your request. Please wait a few seconds and try again.",
							};
						} else if (err.fetchDetails.status === 500) {
							this.store.error = {
								code: 500,
								type: ErrorType.ERROR,
								message: 'Something went wrong behind the scenes. Please give it another shot in a moment.',
							};
						} else if (err.fetchDetails.status === 400) {
							this.store.error = {
								code: 400,
								type: ErrorType.ERROR,
								message: "We couldn't send your message. Please try again.",
							};
						} else {
							this.store.error = {
								type: ErrorType.ERROR,
								message: 'Something went wrong behind the scenes. Please give it another shot in a moment.',
							};
						}
					}

					// CS_003 flags the chat rather than setting store.error — only log when an error object exists
					if (this.store.error) {
						this.log.error(this.store.error);
					}
					this.handleError(err.err, err.fetchDetails);
				} else {
					this.store.error = {
						type: ErrorType.ERROR,
						message: 'Something went wrong behind the scenes. Please give it another shot in a moment.',
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

	/** Re-send a request that never received a response (the user navigated away
	 * mid-flight). The user message is already in the persisted history, so the
	 * stored request data is sent verbatim without pushing a new message. */
	resumePendingRequest = async (): Promise<void> => {
		const pending = migratePendingRequest(this.store.currentChat?.pendingRequest);
		if (!pending || this.store.loading || this.store.currentChat?.isExpired) return;

		const { userId, shopperId } = this.tracker.getContext();
		const params: ChatRequestModel = {
			context: {
				sessionId: this.store.currentChat?.sessionId,
			},
			data: pending,
			tracking: {
				...this.getChatTrackingContext(),
				userId,
			},
		};
		if (shopperId) {
			params.personalization = { shopper: shopperId };
		}

		this.store.error = undefined;
		await this.send(params);
	};

	/** Schedule a resume for after the current tick, so an explicit send issued in
	 * the same tick (e.g. the controller/chat/send event fires openChat() then search())
	 * takes priority — by the time this runs, that send holds the loading flag
	 * and has replaced pendingRequest. */
	private scheduleResume = (): void => {
		setTimeout(() => {
			this.resumePendingRequest();
		});
	};

	track: ChatTrackMethods = {
		product: {
			addToCart: (result: Product, overrides?: ChatTrackOverrides): void => {
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
					price: Number(displayCore?.price) || 0,
				};
				const data: ChatAddtocartSchemaData = {
					chatSessionId,
					responseId,
					results: [product],
				};
				this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data, ...(overrides || {}) });
				this.config.beacon?.enabled && this.tracker.events.chat.addToCart({ data, siteId: this.config.siteId });
			},
			clickThrough: (e: MouseEvent, result: Product | Banner, overrides?: ChatTrackOverrides): void => {
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
				this.eventManager.fire('track.product.clickThrough', { controller: this, event: e, product: result, trackEvent: data, ...(overrides || {}) });
				this.config.beacon?.enabled && this.tracker.events.chat.clickThrough({ data, siteId: this.config.siteId });
			},
			click: (e: MouseEvent, result: Product | Banner, overrides?: ChatTrackOverrides): void => {
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
					this.track.product.clickThrough(e, result as Product, overrides);
					this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
					this.events[responseId].product[result.id].clickThrough = true;
					setTimeout(() => {
						if (this.events[responseId]?.product[result.id]) {
							this.events[responseId].product[result.id].clickThrough = false;
						}
					}, CLICK_DUPLICATION_TIMEOUT);
				}
			},
			impression: (result: Product | Banner, overrides?: ChatTrackOverrides): void => {
				if (!result) {
					this.log.warn('No result provided to track.product.impression');
					return;
				}

				const responseId = result.responseId;
				const chatSessionId = this.store.currentChat?.sessionId;
				const chatId = this.store.currentChat?.id;

				if (!responseId) {
					this.log.warn('No responseId found on result for track.product.impression');
					return;
				}

				if (!chatSessionId) {
					this.log.warn('No chatSessionId available for track.product.impression');
					return;
				}

				this.events[responseId] = this.events[responseId] || { product: {} };

				if (this.events[responseId]?.product[result.id]?.impression) {
					return;
				}

				const productId = '' + result.id;

				// Persisted dedup — survives page navigation so a product already
				// impressed for this chat + response is not re-impressed on reopen.
				if (chatId && responseId && this.store.impressionStorage.get([chatId, responseId, productId])) {
					this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
					this.events[responseId].product[result.id].impression = true;
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
				this.eventManager.fire('track.product.impression', { controller: this, product: result, trackEvent: data, ...(overrides || {}) });
				this.config.beacon?.enabled && this.tracker.events.chat.impression({ data, siteId: this.config.siteId });
				this.events[responseId].product[result.id] = this.events[responseId].product[result.id] || {};
				this.events[responseId].product[result.id].impression = true;

				if (chatId && responseId) {
					this.store.impressionStorage.set([chatId, responseId, productId], true);
				}
			},
		},
		feedback: (thumbs: 'UP' | 'DOWN'): void => {
			const chatSessionId = this.store.currentChat?.sessionId;

			if (!chatSessionId) {
				this.log.warn('No chatSessionId available for track.feedback');
				return;
			}

			const data: ChatFeedbackSchemaData = {
				chatSessionId,
				feedback: thumbs === 'UP' ? ChatFeedbackSchemaDataFeedbackEnum.Positive : ChatFeedbackSchemaDataFeedbackEnum.Negative,
			};
			this.eventManager.fire('track.feedback', { controller: this, trackEvent: data });
			this.config.beacon?.enabled && this.tracker.events.chat.feedback({ data, siteId: this.config.siteId });
		},
	};

	addToCart = async (_products: Product[] | Product, options?: ChatTrackOverrides): Promise<void> => {
		const products = typeof (_products as Product[])?.slice == 'function' ? (_products as Product[]).slice() : [_products];
		if (!_products || products.length === 0) {
			this.log.warn('No products provided to chat controller.addToCart');
			return;
		}
		(products as Product[]).forEach((product) => {
			this.track.product.addToCart(product, options);
		});
		if (products.length > 0) {
			this.eventManager.fire('addToCart', { controller: this, products, ...(options || {}) });
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
