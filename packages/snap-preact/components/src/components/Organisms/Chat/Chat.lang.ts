import { Lang } from '../../../hooks';
import { LangAttributes, LangValue } from '../../../hooks/useLang';

export interface ChatLang {
	// bubble + suggested questions
	openChatButton: Lang<never>;
	closeChatButton: Lang<never>;
	// primary header
	newChatButton: Lang<never>;
	chatHistoryButton: Lang<never>;
	historyTitle: Lang<never>;
	historyClearButton: Lang<never>;
	historyNewChatLabel: Lang<never>;
	// side chat
	sideChatRegionLabel: Lang<never>;
	inspirationResultTitle: Lang<never>;
	inspirationResultSubtitle: Lang<never>;
	productComparisonTitle: Lang<never>;
	productComparisonSubtitle: Lang<{ count: number | string }>;
	// messages
	chatMessagesLabel: Lang<never>;
	newMessagesButton: Lang<never>;
	// loading indicator verbs (comma-separated lists)
	loadingVerbsProductQuery: Lang<never>;
	loadingVerbsProductSearch: Lang<never>;
	loadingVerbsProductComparison: Lang<never>;
	loadingVerbsImageSearch: Lang<never>;
	loadingVerbsProductSimilar: Lang<never>;
	loadingVerbsInspirationRequest: Lang<never>;
	// session feedback
	feedbackPrompt: Lang<never>;
	feedbackThanks: Lang<never>;
	feedbackThumbsUpButton: Lang<never>;
	feedbackThumbsDownButton: Lang<never>;
	feedbackDismissButton: Lang<never>;
	// comparisons tray
	comparisonsTitle: Lang<{ count: number; max: number }>;
	comparisonsClearButton: Lang<never>;
	comparisonsAddText: Lang<never>;
	comparisonsCompareButton: Lang<never>;
	comparisonsRemoveButton: Lang<{ name: string }>;
	// footer messaging
	chatUnavailableMessage: Lang<never>;
	highVolumeMessage: Lang<never>;
	highVolumeSubMessage: Lang<never>;
	newSessionButton: Lang<never>;
	// facets
	facetsTitle: Lang<never>;
	facetsApplyButton: Lang<{ count: number }>;
	facetsClearButton: Lang<never>;
	// attachment context titles
	attachmentCompareTitle: Lang<never>;
	attachmentAskProductTitle: Lang<never>;
	attachmentImageSimilarTitle: Lang<never>;
	// topic drift
	topicDriftScopeMessage: Lang<never>;
	topicDriftScopeSubMessage: Lang<never>;
	topicDriftMessage: Lang<never>;
	topicDriftSubMessage: Lang<never>;
	topicDriftDismissButton: Lang<never>;
	// composer
	inputPlaceholder: Lang<never>;
	inputPlaceholderAskProduct: Lang<never>;
	inputPlaceholderCompare: Lang<never>;
	inputPlaceholderComparedProducts: Lang<never>;
	inputPlaceholderAskImage: Lang<never>;
	inputPlaceholderAddCompare: Lang<never>;
	uploadImageButton: Lang<never>;
	sendMessageButton: Lang<never>;
	dropOverlayText: Lang<never>;
	disclaimerText: Lang<never>;
	privacyPolicyLinkText: Lang<never>;
	// expired chat
	expiredMessage: Lang<never>;
}

export const chatDefaultLang: Partial<ChatLang> = {
	openChatButton: {
		attributes: { 'aria-label': 'Open chat', title: 'Open Chat' },
	},
	closeChatButton: {
		attributes: { 'aria-label': 'Close chat', title: 'Close Chat' },
	},
	newChatButton: {
		attributes: { 'aria-label': 'New chat', title: 'New Chat' },
	},
	chatHistoryButton: {
		attributes: { 'aria-label': 'Chat History', title: 'Chat History' },
	},
	historyTitle: { value: 'History' },
	historyClearButton: { value: 'clear' },
	historyNewChatLabel: { value: 'New Chat' },
	sideChatRegionLabel: {
		attributes: { 'aria-label': 'Conversation details' },
	},
	inspirationResultTitle: { value: 'Inspiration Scenarios' },
	inspirationResultSubtitle: { value: 'Choose a style direction to explore' },
	productComparisonTitle: { value: 'Product Comparison' },
	productComparisonSubtitle: { value: (data) => `Comparing ${data?.count ?? ''} products` },
	chatMessagesLabel: {
		attributes: { 'aria-label': 'Chat messages' },
	},
	newMessagesButton: { value: 'New messages' },
	loadingVerbsProductQuery: { value: 'Thinking, Searching, Analyzing, Gathering details' },
	loadingVerbsProductSearch: { value: 'Searching, Browsing catalog, Finding products, Curating results' },
	loadingVerbsProductComparison: { value: 'Comparing, Analyzing, Evaluating, Weighing options' },
	loadingVerbsImageSearch: { value: 'Analyzing image, Identifying, Searching, Matching' },
	loadingVerbsProductSimilar: { value: 'Finding similar items, Searching, Matching, Curating' },
	loadingVerbsInspirationRequest: { value: 'Brainstorming, Imagining, Curating, Inspiring' },
	feedbackPrompt: { value: "How's your experience so far?" },
	feedbackThanks: { value: 'Thank you for your feedback' },
	feedbackThumbsUpButton: {
		attributes: { 'aria-label': 'Thumbs Up', title: 'Thumbs Up' },
	},
	feedbackThumbsDownButton: {
		attributes: { 'aria-label': 'Thumbs Down', title: 'Thumbs Down' },
	},
	feedbackDismissButton: {
		attributes: { 'aria-label': 'Dismiss feedback' },
	},
	comparisonsTitle: { value: (data) => `Compare Products (${data?.count ?? 0}/${data?.max ?? 0})` },
	comparisonsClearButton: { value: 'clear' },
	comparisonsAddText: { value: 'Add' },
	comparisonsCompareButton: {
		value: 'Compare',
		attributes: { title: 'Compare' },
	},
	comparisonsRemoveButton: {
		attributes: { 'aria-label': (data) => `Remove ${data?.name || 'product'} from comparison` },
	},
	chatUnavailableMessage: {
		value: 'Service is temporarily unavailable. In the meantime, feel free to use the search bar above to find what you need!',
	},
	highVolumeMessage: { value: 'Chat is currently unavailable due to high volume.' },
	highVolumeSubMessage: { value: 'In the meantime, feel free to use the search bar above to find what you need!' },
	newSessionButton: { value: 'New Session' },
	facetsTitle: { value: 'Filter by:' },
	facetsApplyButton: { value: (data) => `Apply (${data?.count ?? 0})` },
	facetsClearButton: { value: 'Clear facets' },
	attachmentCompareTitle: { value: 'Compare these products' },
	attachmentAskProductTitle: { value: 'Ask about this product' },
	attachmentImageSimilarTitle: { value: 'Find products similar to this image:' },
	topicDriftScopeMessage: { value: "I'm here to help with shopping" },
	topicDriftScopeSubMessage: { value: 'Try asking about products, comparisons, or recommendations' },
	topicDriftMessage: { value: 'Looking for something new?' },
	topicDriftSubMessage: { value: 'Start a fresh session for better assistance, or keep going in this one?' },
	topicDriftDismissButton: {
		attributes: { 'aria-label': 'Dismiss' },
	},
	inputPlaceholder: { value: 'Type your message...' },
	inputPlaceholderAskProduct: { value: 'Ask about this product...' },
	inputPlaceholderCompare: { value: 'What would you like to compare?' },
	inputPlaceholderComparedProducts: { value: 'Ask about the compared products...' },
	inputPlaceholderAskImage: { value: 'Ask about this image...' },
	inputPlaceholderAddCompare: { value: 'Add another product to compare...' },
	uploadImageButton: {
		attributes: { 'aria-label': 'Upload Image', title: 'Upload Image' },
	},
	sendMessageButton: {
		attributes: { 'aria-label': 'Send Message', title: 'Send Message' },
	},
	dropOverlayText: { value: 'Drop image to upload' },
	disclaimerText: { value: 'AI-powered assistant. It sometimes makes mistakes. Avoid sharing personal data.' },
	privacyPolicyLinkText: { value: 'Privacy Policy' },
	expiredMessage: { value: 'This chat is expired. Please start a new chat.' },
};

/** Resolves the plain-text `value` of a lang entry (invoking value functions with `data`). */
export function langTextOf<T>(entry: (Partial<LangValue<T>> & Partial<LangAttributes<T>>) | undefined, data?: T): string | undefined {
	const value = entry?.value;
	return typeof value === 'function' ? value(data as T) : value;
}

/** Resolves a single attribute of a lang entry (invoking attribute functions with `data`). */
export function langAttrOf<T>(
	entry: (Partial<LangValue<T>> & Partial<LangAttributes<T>>) | undefined,
	attribute: 'aria-label' | 'aria-valuetext' | 'title' | 'alt' | 'placeholder',
	data?: T
): string | undefined {
	const value = entry?.attributes?.[attribute];
	return typeof value === 'function' ? value(data as T) : value;
}
