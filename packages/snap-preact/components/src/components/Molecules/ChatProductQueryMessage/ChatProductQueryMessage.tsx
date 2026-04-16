import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { useState } from 'preact/hooks';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Icon, Price } from '../../..';

const defaultStyles: StyleScript<ChatProductQueryMessageProps> = () => {
	const colorPrimary = '#253B80';
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',

		'.ss__chat-product-query-message__header': {
			background: colorPrimary,
			padding: '1em',
			display: 'flex',
			flexDirection: 'column',

			'.ss__chat-product-query-message__header__back': {
				display: 'flex',
				alignItems: 'center',
				gap: '0.35em',
				color: '#fff',
				cursor: 'pointer',
				alignSelf: 'flex-start',
				padding: '0.5em 0',
				fontSize: '0.85em',
				opacity: 0.85,
				'&:hover': {
					opacity: 1,
				},
				svg: {
					fill: '#fff',
					stroke: '#fff',
				},
			},

			'.ss__price': {
				color: '#fff',
			},

			'.ss__chat-product-query-message__header__product': {
				display: 'flex',
				gap: '0.75em',
				alignItems: 'center',
				background: '#40528e',
				borderRadius: '0.75em',
				padding: '0.75em',

				'.ss__chat-product-query-message__header__product__image': {
					width: '25%',
					objectFit: 'contain',
					flexShrink: 0,
					borderRadius: '0.33em',
					overflow: 'hidden',
				},

				'.ss__chat-product-query-message__header__product__details': {
					display: 'flex',
					flexDirection: 'column',
					gap: '0.2em',
					flex: 1,

					'.ss__chat-product-query-message__header__product__details__name': {
						fontWeight: 'bold',
						fontSize: '0.95em',

						a: {
							color: '#FFFFFF',
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
					},

					'.ss__chat-product-query-message__header__product__details__brand': {
						fontSize: '0.8em',
						color: 'rgba(255, 255, 255, 0.7)',
					},

					'.ss__chat-product-query-message__header__product__details__price': {
						fontWeight: 'bold',
						fontSize: '1.1em',
						color: '#D4A843',
					},
				},

				'.ss__chat-product-query-message__header__product__actions': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
					alignSelf: 'stretch',
					justifyContent: 'center',
					gap: '0.35em',
					flexShrink: 0,

					'.ss__chat-product-query-message__header__product__actions__go-to-product': {
						a: {
							color: 'rgba(255, 255, 255, 0.85)',
							fontSize: '0.8em',
							textDecoration: 'underline',
							cursor: 'pointer',
							'&:hover': {
								color: '#FFFFFF',
							},
						},
					},

					'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
						borderRadius: '0.5em',
						padding: '0.4em 0.75em',
						fontWeight: 'bold',
						border: 'none',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						fontSize: '0.8em',
						background: '#D4A843',
						color: '#1F2937',
						'&:not(.ss__button--disabled):hover': {
							background: '#c49a3a',
						},
					},
				},
			},
		},

		'.ss__chat-product-query-message__variants': {
			padding: '0 2em',
			'.ss__chat-product-query-message__variants__label': {
				fontWeight: '600',
				fontSize: '0.9em',
				color: '#374151',
				textTransform: 'uppercase',
				marginBottom: '0.5em',
			},

			'.ss__chat-product-query-message__variants__swatches': {
				display: 'flex',
				flexWrap: 'wrap',
				gap: '0.5em',

				'.ss__chat-product-query-message__variants__swatch': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '0.25em',
					cursor: 'pointer',
					padding: '0.25em',
					borderRadius: '0.5em',
					border: '2px solid transparent',
					transition: 'border-color 0.15s ease',

					'&:hover': {
						borderColor: '#253B80',
					},

					'&.ss__chat-product-query-message__variants__swatch--selected': {
						borderColor: '#253B80',
					},

					'&.ss__chat-product-query-message__variants__swatch--unavailable': {
						opacity: 0.4,
					},

					'.ss__chat-product-query-message__variants__swatch__image': {
						width: '48px',
						height: '48px',
						objectFit: 'cover',
						borderRadius: '50%',
						border: '1px solid #E5E7EB',
					},

					'.ss__chat-product-query-message__variants__swatch__value': {
						fontSize: '0.75em',
						color: '#374151',
						textAlign: 'center',
						maxWidth: '60px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					},
				},
			},
		},

		'.ss__chat-product-query-message__section': {
			padding: '0 1em',
			'.ss__chat-product-query-message__section__title': {
				background: '#253B80',
				color: '#fff',
				padding: '0.5em 0.75em',
				fontWeight: 'bold',
				fontSize: '0.95em',
				borderRadius: '0.5em 0.5em 0 0',
			},

			'.ss__chat-product-query-message__section__table': {
				width: '100%',
				maxWidth: '100%',
				tableLayout: 'fixed',
				borderCollapse: 'collapse',
				fontSize: '0.9em',
				border: '0.33em solid #253B80',
				borderTop: 'none',

				tr: {
					borderBottom: '1px solid #E5E7EB',
				},

				td: {
					padding: '0.6em 0.75em',
					verticalAlign: 'top',
					wordBreak: 'break-word',
					overflowWrap: 'anywhere',
				},

				'td:first-of-type': {
					fontWeight: '600',
					color: '#374151',
					textTransform: 'uppercase',
					fontSize: '0.85em',
					width: '40%',
				},

				'td:last-of-type': {
					textAlign: 'right',
					color: '#374151',
				},

				'.ss__chat-product-query-message__section__table__availability--in-stock': {
					color: '#10B981',
					fontWeight: '600',
				},

				'.ss__chat-product-query-message__section__table__availability--out-of-stock': {
					color: '#DC2626',
					fontWeight: '600',
				},
			},

			'.ss__chat-product-query-message__section__description': {
				padding: '0.75em',
				fontSize: '0.9em',
				color: '#374151',
				lineHeight: '1.5',
				border: '0.33em solid #253B80',
				borderTop: 'none',
			},

			'.ss__chat-product-query-message__section__features': {
				margin: 0,
				padding: '0.5em 1.25em',
				fontSize: '0.9em',

				li: {
					padding: '0.3em 0',
					color: '#374151',
				},
			},
		},
	});
};

// fields that have dedicated rendering in the product card; skip them in the info table
const CARD_FIELDS = new Set([
	'name',
	'brand',
	'price',
	'msrp',
	'imageUrl',
	'thumbnailImageUrl',
	'secureImageUrl',
	'secureThumbnailImageUrl',
	'url',
	'addToCartUrl',
	'uid',
	'sku',
	'parentId',
	'parentImageUrl',
	'description',
	'caption',
	'popularity',
	'stockMessage',
]);

// preferred ordering for the structured info table - any extras get appended after
const PREFERRED_INFO_ORDER = ['material', 'fit', 'color', 'sizes', 'size', 'category', 'rating', 'availability'];

const FEATURE_KEYS = ['features', 'feature_list', 'productFeatures', 'product_features', 'highlights'];

const formatLabel = (key: string): string => {
	return key
		.replace(/[_-]+/g, ' ')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.trim();
};

const stripHtml = (str: string): string => str.replace(/<[^>]*>/g, '');

const formatValue = (value: unknown): string => {
	if (Array.isArray(value)) {
		return stripHtml(value.filter((v) => v != null && v !== '').join(', '));
	}
	if (value == null) {
		return '';
	}
	return stripHtml(String(value));
};

const collectFeatures = (product: any): string[] => {
	const attributes = product?.attributes || {};
	for (const key of FEATURE_KEYS) {
		const raw = attributes[key];
		if (Array.isArray(raw) && raw.length > 0) {
			return raw.map((v) => String(v)).filter(Boolean);
		}
		if (typeof raw === 'string' && raw.trim()) {
			// allow comma- or newline-separated feature strings
			return raw
				.split(/\r?\n|,/)
				.map((v) => v.trim())
				.filter(Boolean);
		}
	}
	return [];
};

const collectInfoRows = (product: any, displayFields?: string[]): { key: string; label: string; value: string; rawKey: string }[] => {
	const core = product?.mappings?.core || {};
	const attributes = product?.attributes || {};
	const filterByDisplayFields = displayFields && displayFields.length > 0;
	const displayFieldsLower = filterByDisplayFields ? displayFields.map((f) => f.toLowerCase()) : [];

	const merged: Record<string, unknown> = {};

	// when displayFields is specified, include matching core fields that are normally skipped
	if (filterByDisplayFields) {
		Object.entries(core).forEach(([key, value]) => {
			if (displayFieldsLower.includes(key.toLowerCase()) && value != null) {
				merged[key] = value;
			}
		});
	}

	// pull selected core fields (rating + availability)
	if (core.rating != null) {
		const rating = core.rating;
		const ratingCount = core.ratingCount;
		merged.rating = ratingCount ? `${rating}/5.0 (${ratingCount} reviews)` : `${rating}/5.0`;
	}
	if (core.available != null) {
		merged.availability = core.available ? 'In Stock' : 'Out of Stock';
	}

	// merge product attributes, skipping ones already shown on the card and feature lists
	Object.entries(attributes).forEach(([key, value]) => {
		if (!filterByDisplayFields && CARD_FIELDS.has(key)) return;
		if (FEATURE_KEYS.includes(key)) return;
		const formatted = formatValue(value);
		if (!formatted) return;
		merged[key] = formatted;
	});

	const seen = new Set<string>();
	const ordered: { key: string; label: string; value: string; rawKey: string }[] = [];

	PREFERRED_INFO_ORDER.forEach((preferred) => {
		const match = Object.keys(merged).find((k) => k.toLowerCase() === preferred);
		if (match && !seen.has(match)) {
			seen.add(match);
			ordered.push({ key: match, rawKey: match, label: formatLabel(match), value: formatValue(merged[match]) });
		}
	});

	Object.keys(merged).forEach((key) => {
		if (seen.has(key)) return;
		seen.add(key);
		ordered.push({ key, rawKey: key, label: formatLabel(key), value: formatValue(merged[key]) });
	});

	// filter and sort by displayFields order
	if (filterByDisplayFields) {
		const filtered = ordered.filter((row) => displayFieldsLower.includes(row.rawKey.toLowerCase()));
		filtered.sort((a, b) => displayFieldsLower.indexOf(a.rawKey.toLowerCase()) - displayFieldsLower.indexOf(b.rawKey.toLowerCase()));
		return filtered;
	}

	return ordered;
};

export const ChatProductQueryMessage = observer((properties: ChatProductQueryMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductQueryMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatProductQueryMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, displayFields, className, internalClassName } = props;

	const styling = mergeStyles<ChatProductQueryMessageProps>(props, defaultStyles);

	const { messageType, sourceProduct } = chatItem;
	if (messageType !== 'productQuery') {
		console.warn('ChatProductQueryMessage received message with unsupported type:', messageType, 'Expected type: productQuery');
		return null;
	}

	const core = sourceProduct?.mappings?.core;
	if (!core) return null;

	const chatMessages = controller?.store.currentChat?.chat || [];
	const sourceMessage = chatItem.sourceMessageId ? chatMessages.find((m) => m.id === chatItem.sourceMessageId) : null;
	const cameFromInspiration = sourceMessage?.messageType === 'inspirationResult';

	const allInfoRows = collectInfoRows(sourceProduct, displayFields);
	const descriptionRow = allInfoRows.find((row) => row.rawKey.toLowerCase() === 'description');
	const infoRows = allInfoRows.filter((row) => row.rawKey.toLowerCase() !== 'description');
	const features = collectFeatures(sourceProduct);
	const variants = sourceProduct?.variants;
	const variantData = variants?.data;
	const optionConfig = variants?.optionConfig;

	const [selectedVariantIndex, setSelectedVariantIndex] = useState<number | null>(null);
	const displayedCore =
		selectedVariantIndex != null && variantData?.[selectedVariantIndex]?.mappings?.core ? variantData[selectedVariantIndex].mappings.core : core;

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
				<div className={classnames('ss__chat-product-query-message__header')}>
					{cameFromInspiration && (
						<div
							className={classnames('ss__chat-product-query-message__header__back')}
							onClick={() => controller?.store.currentChat?.popProductQueryMessage(chatItem.sourceMessageId)}
						>
							<Icon icon="angle-left" size="14px" />
							<span>Back to inspiration</span>
						</div>
					)}
					<div className={classnames('ss__chat-product-query-message__header__product')}>
						{displayedCore.imageUrl && (
							<Image
								className={classnames('ss__chat-product-query-message__header__product__image')}
								src={displayedCore.imageUrl as string}
								alt={(displayedCore.name as string) || ''}
							/>
						)}
						<div className={classnames('ss__chat-product-query-message__header__product__details')}>
							{displayedCore.name && (
								<div className={classnames('ss__chat-product-query-message__header__product__details__name')}>
									{displayedCore.url ? (
										<a href={displayedCore.url as string} target="_blank" rel="noopener noreferrer">
											{displayedCore.name}
										</a>
									) : (
										displayedCore.name
									)}
								</div>
							)}
							{displayedCore.brand && (
								<div className={classnames('ss__chat-product-query-message__header__product__details__brand')}>{displayedCore.brand}</div>
							)}
							{displayedCore.price != null && (
								<div className={classnames('ss__chat-product-query-message__header__product__details__price')}>
									<Price value={displayedCore.price} />
								</div>
							)}
						</div>
						<div className={classnames('ss__chat-product-query-message__header__product__actions')}>
							{displayedCore.url && (
								<div className={classnames('ss__chat-product-query-message__header__product__actions__go-to-product')}>
									<a href={displayedCore.url as string} target="_blank" rel="noopener noreferrer">
										Go to product
									</a>
								</div>
							)}
							<div className={classnames('ss__chat-product-query-message__header__product__actions__add-to-cart')}>
								<Button content={'Add to Cart'} onClick={() => controller?.addToCart(sourceProduct as any)} />
							</div>
						</div>
					</div>
				</div>

				{optionConfig && variantData?.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__variants')}>
						{Object.entries(optionConfig).map(([optionName, config]: [string, any]) => (
							<div key={optionName}>
								<div className={classnames('ss__chat-product-query-message__variants__label')}>
									{formatLabel(optionName)} ({config.count})
								</div>
								<div className={classnames('ss__chat-product-query-message__variants__swatches')}>
									{variantData.map((variant: any, idx: number) => {
										const optionValue = variant.options?.[optionName]?.value;
										if (!optionValue) return null;
										const variantCore = variant.mappings?.core;
										const isUnavailable = variant.attributes?.available === false;
										const isSelected = selectedVariantIndex === idx;

										return (
											<div
												key={variantCore?.id || idx}
												className={classnames('ss__chat-product-query-message__variants__swatch', {
													'ss__chat-product-query-message__variants__swatch--selected': isSelected,
													'ss__chat-product-query-message__variants__swatch--unavailable': isUnavailable,
												})}
												title={optionValue}
												onClick={() => setSelectedVariantIndex(isSelected ? null : idx)}
											>
												{config.type === 'swatches' && variantCore?.thumbnailImageUrl ? (
													<Image
														className={classnames('ss__chat-product-query-message__variants__swatch__image')}
														src={variantCore.thumbnailImageUrl}
														alt={optionValue}
													/>
												) : null}
												<span className={classnames('ss__chat-product-query-message__variants__swatch__value')}>{optionValue}</span>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				)}

				{infoRows.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__section')}>
						<div className={classnames('ss__chat-product-query-message__section__title')}>Product Information</div>
						<table className={classnames('ss__chat-product-query-message__section__table')}>
							<tbody>
								{infoRows.map((row) => (
									<tr key={row.key}>
										<td>{row.label}</td>
										<td>
											{row.rawKey === 'availability' ? (
												<span
													className={classnames({
														'ss__chat-product-query-message__section__table__availability--in-stock': row.value === 'In Stock',
														'ss__chat-product-query-message__section__table__availability--out-of-stock': row.value === 'Out of Stock',
													})}
												>
													{row.value === 'In Stock' ? `\u2713 ${row.value}` : row.value}
												</span>
											) : (
												row.value
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{descriptionRow && (
					<div className={classnames('ss__chat-product-query-message__section')}>
						<div className={classnames('ss__chat-product-query-message__section__title')}>Description</div>
						<div className={classnames('ss__chat-product-query-message__section__description')}>{descriptionRow.value}</div>
					</div>
				)}

				{features.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__section')}>
						<div className={classnames('ss__chat-product-query-message__section__title')}>Features</div>
						<ul className={classnames('ss__chat-product-query-message__section__features')}>
							{features.map((feature, idx) => (
								<li key={idx}>{feature}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</CacheProvider>
	);
});

export type ChatProductQueryMessageProps = {
	chatItem: ChatProductQueryMessageItem;
	controller?: ChatController;
	displayFields?: string[];
	lang?: Partial<ChatProductQueryMessageLang>;
} & ChatProductQueryMessageTemplatesLegalProps &
	ComponentProps<ChatProductQueryMessageProps>;

export type ChatProductQueryMessageItem = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: any;
	sourceMessageId?: string;
};

export type ChatProductQueryMessageTemplatesLegalProps = {
	chatItem: ChatProductQueryMessageItem;
};

export interface ChatProductQueryMessageLang {
	// placeholder for future lang overrides
}
