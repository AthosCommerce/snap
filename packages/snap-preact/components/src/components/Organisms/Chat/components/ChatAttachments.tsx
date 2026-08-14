import { h } from 'preact';

import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatMessage, ChatAttachmentProduct, ChatAttachmentImage } from '@athoscommerce/snap-store-mobx';
import { ChatResponseProductComparisonData } from '@athoscommerce/snap-client';
import { Theme } from '../../../../providers';
import { ChatAttachmentContext, ChatAttachmentContextItem, ChatAttachmentContextProps } from '../../../Molecules/ChatAttachmentContext';
import { ChatLang, chatDefaultLang, langTextOf } from '../Chat.lang';

const isProductAttachment = (item: { type: string }): item is ChatAttachmentProduct => item.type === 'product';
const isImageAttachment = (item: { type: string }): item is ChatAttachmentImage => item.type === 'image';

/**
 * Renders the attachment-context strips above the composer: committed / active
 * comparisons, product attachments (ask-about / compare), and image attachments.
 * Pure fragment — styling comes from the ChatAttachmentContext molecule itself.
 */
export const ChatAttachments = observer((props: ChatAttachmentsProps): JSX.Element => {
	const { controller, activeMessage, sideChatOpen, mobile, onProductQuickView, disableStyles, theme, treePath } = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});

	const subProps: { attachmentContext: Partial<ChatAttachmentContextProps> } = {
		attachmentContext: {
			disableStyles,
			theme,
			treePath,
		},
	};

	const activeComparisonSearchResults =
		sideChatOpen && activeMessage?.messageType === 'productComparison'
			? (activeMessage as ChatResponseProductComparisonData).searchResults || []
			: null;

	const showCommittedComparisons =
		!activeComparisonSearchResults &&
		store.currentChat?.comparisons.committed &&
		store.currentChat.comparisons.committed.length > 0 &&
		(activeMessage?.messageType === 'user' || activeMessage?.messageType === 'productComparison' || activeMessage?.messageType === 'productQuery');

	const visibleAttachments =
		store.currentChat?.attachments.attached.filter(
			(item) => item.state === 'attached' || item.state === 'active' || item.state === 'loading' || item.state === 'error'
		) || [];

	const productAttachments = visibleAttachments.filter(
		(item): item is ChatAttachmentProduct =>
			isProductAttachment(item) && item.requestType !== 'productSimilar' && item.requestType !== 'productComparison'
	);
	const imageAttachments = visibleAttachments.filter(isImageAttachment);

	const comparisonItems: ChatAttachmentContextItem[] = activeComparisonSearchResults
		? activeComparisonSearchResults.map((result: any) => {
				const d = result?.display || result;
				return {
					id: result?.id,
					name: d?.mappings?.core?.name || '',
					imageUrl: d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || d?.mappings?.core?.parentImageUrl || '',
					onClick: () => {
						controller.productQuickView(result);
						if (mobile) onProductQuickView && onProductQuickView();
					},
				};
		  })
		: showCommittedComparisons
		? (store.currentChat?.comparisons.committed || []).map((comparisonItem) => {
				const d = (comparisonItem.result?.display || comparisonItem.result) as any;
				return {
					id: comparisonItem.result?.id,
					name: d?.mappings?.core?.name || '',
					imageUrl: d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || d?.mappings?.core?.parentImageUrl || '',
					onClick: () => {
						controller.productQuickView(comparisonItem.result);
						if (mobile) onProductQuickView && onProductQuickView();
					},
				};
		  })
		: [];

	const dismissProductAttachment = (id: string): void => {
		store.currentChat?.attachments.remove(id);
		props.onProductAttachmentsRemoved && props.onProductAttachmentsRemoved();
		store.currentChat?.dismissSideChat();
	};

	const productItems: ChatAttachmentContextItem[] = productAttachments.map((item) => {
		const remove = () => dismissProductAttachment(item.id);
		return {
			id: item.id,
			name: item.name || '',
			imageUrl: item.thumbnailUrl || '',
			onClick: remove,
			onRemove: remove,
		};
	});

	const imageItems: ChatAttachmentContextItem[] = imageAttachments.map((item) => ({
		id: item.id,
		name: item.fileName || 'Image',
		imageUrl: item.base64 || item.thumbnailUrl || '',
		isLoading: item.state === 'loading',
		hasError: !!item.error,
		errorMessage: item.error?.message,
		onRemove: () => store.currentChat?.attachments.remove(item.id),
	}));

	const productTitle = (productItems.length > 1 ? langTextOf(lang.attachmentCompareTitle) : langTextOf(lang.attachmentAskProductTitle)) || '';
	const hasImageError = imageItems.some((item) => item.hasError);
	const imageTitle = (imageItems.length > 0 && !hasImageError ? langTextOf(lang.attachmentImageSimilarTitle) : '') || '';

	return (
		<>
			{comparisonItems.length > 0 && (
				<ChatAttachmentContext
					{...subProps.attachmentContext}
					title={langTextOf(lang.attachmentCompareTitle) || ''}
					items={comparisonItems}
					onClose={() => {
						store.currentChat?.comparisons.resetCommitted();
						store.currentChat?.dismissSideChat();
					}}
				/>
			)}
			{productItems.length > 0 && (
				<ChatAttachmentContext
					{...subProps.attachmentContext}
					title={productTitle}
					items={productItems}
					onClose={() => {
						productAttachments.forEach((item) => store.currentChat?.attachments.remove(item.id));
						props.onProductAttachmentsRemoved && props.onProductAttachmentsRemoved();
						store.currentChat?.dismissSideChat();
					}}
				/>
			)}
			{imageItems.length > 0 && <ChatAttachmentContext {...subProps.attachmentContext} title={imageTitle} items={imageItems} />}
		</>
	);
});

export type ChatAttachmentsProps = {
	controller: ChatController;
	activeMessage?: ChatMessage | null;
	sideChatOpen?: boolean;
	mobile?: boolean;
	onProductQuickView?: () => void;
	/** Called when product attachments are removed (closes the mobile product info panel). */
	onProductAttachmentsRemoved?: () => void;
	lang?: Partial<ChatLang>;
	disableStyles?: boolean;
	theme?: Theme;
	treePath?: string;
};
