import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Image, ImageProps } from '../../Atoms/Image';
import { Icon, IconProps } from '../../Atoms/Icon';
import type { ChatController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ChatMessageUserProps> = ({ primaryColor, primaryColorText }) => {
	const colorPrimary = primaryColor || '#253B80';
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

function getRequestTypeLabel(chatItem: any): string | undefined {
	const requestType = chatItem.requestType;
	if (!requestType || requestType === 'general') return undefined;

	switch (requestType) {
		case 'productQuery':
			return 'Asking about product';
		case 'productComparison':
			return 'Comparing products';
		case 'productSearch':
			if (chatItem.request?.searchFilters?.length) {
				return 'Filtering products';
			}
			return 'Searching products';
		case 'imageSearch':
			return 'Searching by image';
		case 'productSimilar':
			return 'Finding similar products';
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

	const { controller, chatItem, onProductQuickView, disableStyles, className, internalClassName, treePath } = props;
	const { store } = controller;

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
	const requestTypeLabel = getRequestTypeLabel(chatItem);

	const handleProductAttachmentClick = (attachment: any): void => {
		if (!attachment?.productId) return;
		const chat = store.currentChat?.chat;
		const existingQuery = chat?.find((m: any) => m.messageType === 'productQuery' && m.sourceProduct?.id === attachment.productId) as any;
		if (existingQuery) {
			store.currentChat?.setActiveMessage(existingQuery.id);
			onProductQuickView?.(existingQuery.sourceProduct);
			return;
		}
		const product = findProductInChat(chat, attachment.productId);
		if (product) {
			controller.productQuickView(product);
			onProductQuickView?.(product);
		}
	};

	const handleProductAttachmentKeyDown = (e: any, attachment: any): void => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleProductAttachmentClick(attachment);
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
												<Image
													{...subProps.image}
													style={{ height: '200px', width: '200px' }}
													src={attachment.thumbnailUrl || attachment.base64 || ''}
													alt={''}
												/>
											</li>
										);
									case 'product': {
										const canOpen = !!findProductInChat(store.currentChat?.chat, attachment.productId);
										return (
											<li
												className={classnames('ss__chat-message-user__attachment__product', {
													'ss__chat-message-user__attachment__product--clickable': canOpen,
												})}
												key={attachment.id}
												role={canOpen ? 'button' : undefined}
												tabIndex={canOpen ? 0 : undefined}
												aria-label={canOpen ? `View details for ${attachment.name}` : undefined}
												onClick={canOpen ? () => handleProductAttachmentClick(attachment) : undefined}
												onKeyDown={canOpen ? (e: any) => handleProductAttachmentKeyDown(e, attachment) : undefined}
												title={canOpen ? `View details for ${attachment.name}` : undefined}
											>
												<Image
													{...subProps.image}
													style={{ height: '200px', width: '200px' }}
													src={attachment.thumbnailUrl || ''}
													alt={attachment.name}
												/>
											</li>
										);
									}
									default:
										return null;
								}
							})}
							{filterOptions.length > 0 && (
								<li
									className="ss__chat-message-user__attachment__facet"
									key="facet-first"
									title={`Filter: ${filterOptions[0].facetKey} = ${filterOptions[0].label}`}
									aria-label={`Filter: ${filterOptions[0].facetKey} = ${filterOptions[0].label}`}
								>
									<Icon {...subProps.icon} icon="filter-funnel" size={27} />
								</li>
							)}
							{hiddenFacetCount > 0 && (
								<li
									className="ss__chat-message-user__attachment__facet ss__chat-message-user__attachment__facet--overflow"
									key="facet-overflow"
									title={`${hiddenFacetCount} more filter${hiddenFacetCount === 1 ? '' : 's'}`}
									aria-label={`${hiddenFacetCount} additional filter${hiddenFacetCount === 1 ? '' : 's'}`}
								>
									<>+{hiddenFacetCount}</>
								</li>
							)}
						</ul>
					)}
					<div className="ss__chat-message-user__text-wrapper">
						{requestTypeLabel ? <div className="ss__chat-message-user__request-type">{requestTypeLabel}</div> : null}
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

export type ChatMessageUserProps = {
	chatItem: any;
	controller: ChatController;
	onProductQuickView?: (product: any) => void;
} & ChatMessageUserTemplatesLegalProps &
	ComponentProps<ChatMessageUserProps>;

export type ChatMessageUserTemplatesLegalProps = {
	primaryColor?: string;
	primaryColorText?: string;
};
