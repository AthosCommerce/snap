import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Price } from '../../..';

const defaultStyles: StyleScript<ChatProductQueryMessageProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',

		'.ss__chat-product-query-message__product-card': {
			display: 'flex',
			gap: '1em',
			alignItems: 'center',
			padding: '1em',
			background: '#F9FAFB',
			borderRadius: '1em',

			'.ss__chat-product-query-message__product-card__image': {
				width: '80px',
				height: '80px',
				objectFit: 'contain',
				flexShrink: 0,
				borderRadius: '0.5em',
			},

			'.ss__chat-product-query-message__product-card__details': {
				display: 'flex',
				flexDirection: 'column',
				gap: '0.25em',
				flex: 1,

				'.ss__chat-product-query-message__product-card__details__name': {
					fontWeight: 'bold',
					fontSize: '1em',
				},

				'.ss__chat-product-query-message__product-card__details__brand': {
					fontSize: '0.85em',
					color: '#6B7280',
				},

				'.ss__chat-product-query-message__product-card__details__price': {
					fontWeight: 'bold',
					fontSize: '1.1em',
				},
			},

			'.ss__chat-product-query-message__product-card__action': {
				flexShrink: 0,

				'.ss__button': {
					background: '#253B80',
					color: '#fff',
					borderRadius: '0.5em',
					padding: '0.5em 1em',
					fontWeight: 'bold',
					border: 'none',
					whiteSpace: 'nowrap',

					'&:not(.ss__button--disabled):hover': {
						background: '#1a2d66',
					},
				},
			},
		},

		'.ss__chat-product-query-message__section': {
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

const formatValue = (value: unknown): string => {
	if (Array.isArray(value)) {
		return value.filter((v) => v != null && v !== '').join(', ');
	}
	if (value == null) {
		return '';
	}
	return String(value);
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

const collectInfoRows = (product: any): { key: string; label: string; value: string; rawKey: string }[] => {
	const core = product?.mappings?.core || {};
	const attributes = product?.attributes || {};

	const merged: Record<string, unknown> = {};

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
		if (CARD_FIELDS.has(key)) return;
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

	return ordered;
};

export const ChatProductQueryMessage = observer((properties: ChatProductQueryMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductQueryMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatProductQueryMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, className, internalClassName } = props;

	const styling = mergeStyles<ChatProductQueryMessageProps>(props, defaultStyles);

	const { messageType, sourceProduct } = chatItem;
	if (messageType !== 'productQuery') {
		console.warn('ChatProductQueryMessage received message with unsupported type:', messageType, 'Expected type: productQuery');
		return null;
	}

	const core = sourceProduct?.mappings?.core;
	if (!core) return null;

	const infoRows = collectInfoRows(sourceProduct);
	const features = collectFeatures(sourceProduct);

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
				<div className={classnames('ss__chat-product-query-message__product-card')}>
					{core.imageUrl && (
						<Image
							className={classnames('ss__chat-product-query-message__product-card__image')}
							src={core.imageUrl as string}
							alt={(core.name as string) || ''}
							onClick={() => controller?.viewProduct(sourceProduct as any)}
						/>
					)}
					<div className={classnames('ss__chat-product-query-message__product-card__details')}>
						{core.name && <div className={classnames('ss__chat-product-query-message__product-card__details__name')}>{core.name}</div>}
						{core.brand && <div className={classnames('ss__chat-product-query-message__product-card__details__brand')}>{core.brand}</div>}
						{core.price != null && (
							<div className={classnames('ss__chat-product-query-message__product-card__details__price')}>
								<Price value={core.price} />
							</div>
						)}
					</div>
					<div className={classnames('ss__chat-product-query-message__product-card__action')}>
						<Button content={'Add to Cart'} onClick={() => controller?.viewProduct(sourceProduct as any)} />
					</div>
				</div>

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
	lang?: Partial<ChatProductQueryMessageLang>;
} & ChatProductQueryMessageTemplatesLegalProps &
	ComponentProps<ChatProductQueryMessageProps>;

export type ChatProductQueryMessageItem = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: any;
};

export type ChatProductQueryMessageTemplatesLegalProps = {
	chatItem: ChatProductQueryMessageItem;
};

export interface ChatProductQueryMessageLang {
	// placeholder for future lang overrides
}
