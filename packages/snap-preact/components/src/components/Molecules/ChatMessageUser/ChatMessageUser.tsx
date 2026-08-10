import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useLang, useA11y, useCustomComponentOverride } from '../../../hooks';
import { Image, ImageProps } from '../../Atoms/Image';
import { Icon, IconProps } from '../../Atoms/Icon';
import type { ChatController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ChatMessageUserProps> = ({ primaryColor, primaryColorText, theme }) => {
	const colorPrimary = primaryColor || Colour.concrete(theme?.variables?.colors?.primary) || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	return css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginLeft: '40px',
		'.ss__chat-message-user__request-type': {
			fontStyle: 'italic',
			color: '#999',
			fontSize: '0.8em',
			marginBottom: '4px',
			textAlign: 'right',
		},
		'.ss__chat-message-user__row': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '10px',
		},
		'.ss__chat-message-user__text-wrapper': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
		},
		'.ss__chat-message-user__text': {
			padding: '0.5em 1em',
			borderRadius: '12px',
			borderBottomRightRadius: '3px',
			backgroundColor: colorPrimary,
			color: colorPrimaryText,
		},
		'.ss__chat-message-user__attachments': {
			listStyleType: 'none',
			padding: 0,
			margin: 0,
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '4px',
			alignSelf: 'end',
			'.ss__chat-message-user__attachment__product, .ss__chat-message-user__attachment__image, .ss__chat-message-user__attachment__facet': {
				width: '40px',
				height: '40px',
				borderRadius: '50%',
				border: '2px solid #eee',
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'.ss__image': {
					aspectRatio: '1 / 1',
					width: '100%',
					height: '100%',
				},
				'.ss__icon': {
					display: 'flex',
				},
			},
			'.ss__chat-message-user__attachment__product--clickable': {
				cursor: 'pointer',
				transition: 'border-color 0.15s ease',
				'&:hover': {
					borderColor: colorPrimary,
				},
				'&:focus-visible': {
					outline: `2px solid ${colorPrimary}`,
					outlineOffset: '2px',
				},
			},
			'.ss__chat-message-user__attachment__facet--overflow': {
				fontSize: '12px',
				fontWeight: 600,
				color: '#555',
			},
		},
	});
};

function getRequestTypeLangKey(chatItem: ChatMessageUserItem): RequestTypeLangKey | undefined {
	const requestType = chatItem.requestType;
	if (!requestType || requestType === 'general') return undefined;

	switch (requestType) {
		case 'productQuery':
			return 'requestTypeProductQuery';
		case 'productComparison':
			return 'requestTypeProductComparison';
		case 'productSearch':
			if (chatItem.request?.searchFilters?.length && !chatItem.request?.searchTerm) {
				return 'requestTypeProductFilter';
			}
			return 'requestTypeProductSearch';
		case 'imageSearch':
			return 'requestTypeImageSearch';
		case 'productSimilar':
			return 'requestTypeProductSimilar';
		default:
			return undefined;
	}
}

function findProductInChat(chat: any[] | undefined, productId: string): any | null {
	if (!chat || !productId) return null;
	for (const msg of chat) {
		if ((msg.messageType === 'productQuery' || msg.messageType === 'productAnswer') && msg.sourceProduct?.id === productId) {
			return msg.sourceProduct;
		}
		const candidateLists: any[] = [];
		if (Array.isArray(msg.results)) candidateLists.push(msg.results);
		if (Array.isArray(msg.searchResults)) candidateLists.push(msg.searchResults);
		if (Array.isArray(msg.inspirationSections)) {
			msg.inspirationSections.forEach((section: any) => {
				if (Array.isArray(section.products)) candidateLists.push(section.products);
			});
		}
		if (Array.isArray(msg.recommendationResult)) {
			msg.recommendationResult.forEach((rec: any) => {
				if (Array.isArray(rec.results)) candidateLists.push(rec.results);
			});
		}
		for (const list of candidateLists) {
			const match = list.find((r: any) => r?.id === productId);
			if (match) return match;
		}
	}
	return null;
}

export const ChatMessageUser = observer((properties: ChatMessageUserProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatMessageUserProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatMessageUser', globalTheme, defaultProps, properties);

	const { controller, chatItem, onProductQuickView, hideMessageTypeIndicatorText, disableStyles, className, internalClassName, treePath } = props;
	const { store } = controller;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatMessageUser', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const subProps: ChatMessageUserSubProps = {
		image: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		icon: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatMessageUserProps>(props, defaultStyles);

	const requestTypeLangKey = getRequestTypeLangKey(chatItem);

	const handleProductAttachmentClick = (attachment: any): void => {
		if (!attachment?.productId) return;
		const chat = store.currentChat?.chat;
		const existingQuery = chat?.find((m: any) => m.messageType === 'productQuery' && m.sourceProduct?.id === attachment.productId) as any;
		if (existingQuery) {
			controller.reopenProductQuery(existingQuery);
			onProductQuickView?.(existingQuery.sourceProduct);
			return;
		}
		const product = findProductInChat(chat, attachment.productId);
		if (product) {
			controller.productQuickView(product);
			onProductQuickView?.(product);
		}
	};

	const resolved = (chatItem.attachments || []).map((id: string) => store.currentChat?.attachments.get(id)).filter(Boolean);
	// Facets are no longer chat attachments — they live on the request that was
	// stored on the message, derived from urlManager filter state at send-time.
	const filterOptions: { facetKey: string; label: string }[] = [];
	const searchFilters = chatItem.request?.searchFilters as
		| { key: string; options?: ({ key: string } | { low: string; high: string })[] }[]
		| undefined;
	searchFilters?.forEach((filter) => {
		filter.options?.forEach((option) => {
			if ('low' in option || 'high' in option) {
				const low = (option as { low: string }).low ?? '*';
				const high = (option as { high: string }).high ?? '*';
				filterOptions.push({ facetKey: filter.key, label: `${low}-${high}` });
			} else {
				filterOptions.push({ facetKey: filter.key, label: (option as { key: string }).key });
			}
		});
	});

	const hasAttachments = resolved.length > 0 || filterOptions.length > 0;
	const hiddenFacetCount = Math.max(0, filterOptions.length - 1);

	//initialize lang
	const defaultLang: Partial<ChatMessageUserLang> = {
		requestTypeProductQuery: {
			value: 'Asking about product',
		},
		requestTypeProductComparison: {
			value: 'Comparing products',
		},
		requestTypeProductFilter: {
			value: 'Filtering products',
		},
		requestTypeProductSearch: {
			value: 'Searching products',
		},
		requestTypeImageSearch: {
			value: 'Searching by image',
		},
		requestTypeProductSimilar: {
			value: 'Finding similar products',
		},
		facetAttachment: {
			attributes: {
				'aria-label': filterOptions.length ? `Filter: ${filterOptions[0].facetKey} = ${filterOptions[0].label}` : '',
				title: filterOptions.length ? `Filter: ${filterOptions[0].facetKey} = ${filterOptions[0].label}` : '',
			},
		},
		facetOverflow: {
			attributes: {
				'aria-label': `${hiddenFacetCount} additional filter${hiddenFacetCount === 1 ? '' : 's'}`,
				title: `${hiddenFacetCount} more filter${hiddenFacetCount === 1 ? '' : 's'}`,
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(
		lang as any,
		{
			controller,
			chatItem,
		},
		{ activeBreakpoint: globalTheme?.activeBreakpoint }
	);

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-message-user', className, internalClassName)} {...styling}>
				<div className="ss__chat-message-user__row">
					{hasAttachments && (
						<ul className="ss__chat-message-user__attachments">
							{resolved.map((attachment: any) => {
								switch (attachment.type) {
									case 'image':
										return (
											<li className="ss__chat-message-user__attachment__image" key={attachment.id}>
												<Image {...subProps.image} src={attachment.thumbnailUrl || attachment.base64 || ''} alt={''} />
											</li>
										);
									case 'product': {
										const canOpen = !!findProductInChat(store.currentChat?.chat, attachment.productId);
										const attachmentDefaultLang = {
											productAttachmentButton: {
												attributes: {
													'aria-label': `View details for ${attachment.name}`,
													title: `View details for ${attachment.name}`,
												},
											},
										};
										const attachmentLang = deepmerge(attachmentDefaultLang, props.lang || {});
										const attachmentMergedLang = useLang(
											attachmentLang as any,
											{
												controller,
												chatItem,
												attachment,
											},
											{ activeBreakpoint: globalTheme?.activeBreakpoint }
										);
										return (
											<li
												className={classnames('ss__chat-message-user__attachment__product', {
													'ss__chat-message-user__attachment__product--clickable': canOpen,
												})}
												key={attachment.id}
												ref={(e) => canOpen && useA11y(e)}
												role={canOpen ? 'button' : undefined}
												onClick={canOpen ? () => handleProductAttachmentClick(attachment) : undefined}
												{...(canOpen ? attachmentMergedLang.productAttachmentButton.attributes : {})}
											>
												<Image {...subProps.image} src={attachment.thumbnailUrl || ''} alt={attachment.name} />
											</li>
										);
									}
									default:
										return null;
								}
							})}
							{filterOptions.length > 0 && (
								<li className="ss__chat-message-user__attachment__facet" key="facet-first" {...mergedLang.facetAttachment.attributes}>
									<Icon {...subProps.icon} icon="filter-funnel" size={27} />
								</li>
							)}
							{hiddenFacetCount > 0 && (
								<li
									className="ss__chat-message-user__attachment__facet ss__chat-message-user__attachment__facet--overflow"
									key="facet-overflow"
									{...mergedLang.facetOverflow.attributes}
								>
									<>+{hiddenFacetCount}</>
								</li>
							)}
						</ul>
					)}
					<div className="ss__chat-message-user__text-wrapper">
						{requestTypeLangKey && !hideMessageTypeIndicatorText ? (
							<div className="ss__chat-message-user__request-type" {...mergedLang[requestTypeLangKey].all} />
						) : null}
						{chatItem.text ? <div className="ss__chat-message-user__text">{chatItem.text}</div> : null}
					</div>
				</div>
			</div>
		</CacheProvider>
	);
});

interface ChatMessageUserSubProps {
	image: Partial<ImageProps>;
	icon: Partial<IconProps>;
}

// mirrors the ChatUserMessage type from the snap-store-mobx ChatSessionStore, with a
// loose `messageType` so the full ChatMessage union can be passed by the Chat organism
export type ChatMessageUserItem = {
	id: string;
	messageType?: string;
	text?: string;
	attachments?: string[];
	requestType?: string;
	request?: Record<string, any>;
};

export type ChatMessageUserProps = {
	chatItem: ChatMessageUserItem;
	controller: ChatController;
	onProductQuickView?: (product: any) => void;
	lang?: Partial<ChatMessageUserLang>;
} & ChatMessageUserTemplatesLegalProps &
	ComponentProps<ChatMessageUserProps>;

export type ChatMessageUserTemplatesLegalProps = {
	primaryColor?: string;
	primaryColorText?: string;
	hideMessageTypeIndicatorText?: boolean;
};

type RequestTypeLangKey = keyof ChatMessageUserLang;

export interface ChatMessageUserLang {
	requestTypeProductQuery?: Lang<never>;
	requestTypeProductComparison?: Lang<never>;
	requestTypeProductFilter?: Lang<never>;
	requestTypeProductSearch?: Lang<never>;
	requestTypeImageSearch?: Lang<never>;
	requestTypeProductSimilar?: Lang<never>;
	productAttachmentButton?: Lang<never>;
	facetAttachment?: Lang<never>;
	facetOverflow?: Lang<never>;
}
