import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Icon, Price } from '../../..';
import type { Product, VariantSelection } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatProductQueryMessageProps> = ({ primaryColor, primaryColorText }) => {
	const colorPrimary = primaryColor || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
		paddingBottom: '1em',

		'.ss__chat-product-query-message__header__back': {
			// Overlay banner pinned to the top of the secondary chat's scrollable messages
			// container so it stays visible while the product details scroll underneath.
			// Styling mirrors `.ss__chat__session-feedback` (dark primary bg, primary text,
			// 8px/15px padding, 10px gap, 14px font). Rendered as a direct child of the
			// component root (not the header) so sticky holds across the full scroll range.
			// Negative marginBottom cancels the root's `gap: 1em` so the banner sits flush
			// against the header below it.
			position: 'sticky',
			top: 0,
			zIndex: 2,
			marginBottom: '-1em',
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '8px 15px',
			background: new Colour(colorPrimary).darkenHex(0.1),
			color: colorPrimaryText,
			fontSize: '14px',
			cursor: 'pointer',
			border: 'none',
			font: 'inherit',
			width: 'auto',
			'&:focus-visible': {
				outline: `2px solid ${colorPrimaryText}`,
				outlineOffset: '-2px',
			},
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},

		'.ss__chat-product-query-message__header': {
			background: new Colour(colorPrimary).lightenHex(0.05),
			padding: '1em',
			display: 'flex',
			flexDirection: 'column',

			'.ss__price': {
				color: colorPrimaryText,
			},

			'.ss__chat-product-query-message__header__product': {
				display: 'flex',
				gap: '0.75em',
				alignItems: 'center',
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
						fontSize: '1.2em',

						a: {
							color: colorPrimaryText,
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
					},

					'.ss__chat-product-query-message__header__product__details__price': {
						fontWeight: 'bold',
						fontSize: '1.1em',
						color: '#D4A843',
						display: 'flex',
						gap: '0.5em',
						alignItems: 'center',
					},
				},

				'.ss__chat-product-query-message__header__product__actions': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					alignSelf: 'stretch',
					justifyContent: 'center',
					gap: '0.35em',
					flexShrink: 0,

					'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
						flexDirection: 'row-reverse',
						borderRadius: '0.5em',
						padding: '0.4em 0.75em',
						fontWeight: 'bold',
						border: 'none',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						fontSize: '0.8em',
						background: '#feeeae',
						color: '#000',
						justifyContent: 'center',
						width: '100%',
						textAlign: 'center',
						svg: {
							fill: '#000',
							stroke: '#000',
						},
						'&:not(.ss__button--disabled):hover': {
							background: '#fde68a',
						},
					},

					'.ss__chat-product-query-message__header__product__actions__show-similar .ss__button, .ss__chat-product-query-message__header__product__actions__discuss-product .ss__button':
						{
							flexDirection: 'row-reverse',
							borderRadius: '0.5em',
							padding: '0.4em 0.75em',
							fontWeight: 'bold',
							whiteSpace: 'nowrap',
							cursor: 'pointer',
							fontSize: '0.8em',
							background: '#000',
							color: '#fff',
							justifyContent: 'center',
							width: '100%',
							textAlign: 'center',
							svg: {
								fill: '#fff',
								stroke: '#fff',
							},
						},
				},
			},
		},

		'.ss__chat-product-query-message__variants': {
			padding: '0 2em',
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
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
					background: 'transparent',
					font: 'inherit',
					color: 'inherit',

					'&:hover': {
						borderColor: colorPrimary,
					},

					'&:focus-visible': {
						outline: `2px solid ${colorPrimary}`,
						outlineOffset: '2px',
					},

					'&[aria-disabled="true"]': {
						cursor: 'not-allowed',
					},

					'&.ss__chat-product-query-message__variants__swatch--selected': {
						borderColor: colorPrimary,
						borderWidth: '3px',
						padding: '0.15em',
					},

					'&.ss__chat-product-query-message__variants__swatch--unavailable': {
						opacity: 0.4,
					},

					'&.ss__chat-product-query-message__variants__swatch--text-only': {
						padding: '0.4em 0.75em',
						'&.ss__chat-product-query-message__variants__swatch--selected': {
							padding: '0.3em 0.65em',
						},
						'.ss__chat-product-query-message__variants__swatch__value': {
							fontSize: '1em',
							maxWidth: 'none',
						},
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
				background: colorPrimary,
				color: colorPrimaryText,
				padding: '0.5em 0.75em',
				fontWeight: 'bold',
				fontSize: '0.95em',
				borderRadius: '0.5em 0.5em 0 0',
			},

			'.ss__chat-product-query-message__section__table': {
				width: '100%',
				maxWidth: '100%',
				tableLayout: 'fixed',
				borderCollapse: 'separate',
				borderSpacing: 0,
				fontSize: '0.9em',
				border: `1px solid ${colorPrimary}`,
				borderTop: 'none',
				borderBottomLeftRadius: '0.5em',
				borderBottomRightRadius: '0.5em',
				overflow: 'hidden',

				tr: {
					borderBottom: '1px solid #E5E7EB',
				},

				'th, td': {
					padding: '0.6em 0.75em',
					verticalAlign: 'top',
					wordBreak: 'break-word',
					overflowWrap: 'anywhere',
					textAlign: 'left',
				},

				'th[scope="row"]': {
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

				'.ss__chat-product-query-message__section__table__price': {
					display: 'flex',
					gap: '0.5em',
					alignItems: 'center',
					justifyContent: 'flex-end',
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

		'.ss__chat-product-query-message__description': {
			padding: '0 1em',
			fontSize: '0.9em',
			color: '#374151',
			lineHeight: '1.5',
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

const collectFeatures = (display: any): string[] => {
	const attributes = display?.attributes || {};
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

const collectInfoRows = (display: any, displayFields?: string[]): { key: string; label: string; value: string; rawKey: string }[] => {
	const core = display?.mappings?.core || {};
	const attributes = display?.attributes || {};
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

	const product: Product | null | undefined = controller?.store.productQuickview;
	const productQuickviewError: string | null | undefined = controller?.store.productQuickviewError;

	const chatMessages = controller?.store.currentChat?.chat || [];
	const sourceMessage = chatItem.sourceMessageId ? chatMessages.find((m) => m.id === chatItem.sourceMessageId) : null;
	const cameFromInspiration = sourceMessage?.messageType === 'inspirationResult';
	const cameFromComparison = sourceMessage?.messageType === 'productComparison';

	if (!product) {
		return (
			<CacheProvider>
				<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
					<div className={classnames('ss__chat-product-query-message__header')}>
						<div className={classnames('ss__chat-product-query-message__header__product')}>
							<div className={classnames('ss__chat-product-query-message__header__product__details')}>
								<div className={classnames('ss__chat-product-query-message__header__product__details__name')}>
									{productQuickviewError || 'Loading product details...'}
								</div>
							</div>
						</div>
					</div>
				</div>
			</CacheProvider>
		);
	}

	const displayed = product.display;
	const displayedCore = displayed.mappings?.core || {};

	const variants = product.variants;
	const selections = variants?.selections || [];

	// Ensure every selection has an initial value picked. Without this, entering
	// the quickview from inspiration leaves all selections empty, and the first
	// variant click can't narrow `refineSelections` to a single variant — so the
	// active variant (and hero image) doesn't update until a second selection is
	// made. Pre-selecting the first available value for each selection on mount
	// matches the carousel behavior. Single-value selections also get hidden from
	// the UI (handled by `visibleSelections` below).
	useEffect(() => {
		selections.forEach((selection: VariantSelection) => {
			if (selection.selected) return;
			const target = selection.values.find((v) => v.available) || selection.values[0];
			if (target) {
				selection.select(target.value);
			}
		});
	}, [selections]);

	const visibleSelections = selections.filter((selection: VariantSelection) => selection.values.length > 1);

	const displayedData = {
		mappings: displayed.mappings,
		attributes: displayed.attributes || {},
	};

	const allInfoRows = collectInfoRows(displayedData, displayFields);
	const descriptionRow = allInfoRows.find((row) => row.rawKey.toLowerCase() === 'description');
	const infoRows = allInfoRows.filter((row) => row.rawKey.toLowerCase() !== 'description');
	const features = collectFeatures(displayedData);

	const handleBack = () => {
		controller?.store.currentChat?.popProductQueryMessage(chatItem.sourceMessageId);
		controller?.store.clearProductQuickview();
	};

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
				{(cameFromInspiration || cameFromComparison) && (
					<button
						type="button"
						className={classnames('ss__chat-product-query-message__header__back')}
						aria-label={cameFromComparison ? 'Back to comparison' : 'Back to inspiration'}
						onClick={handleBack}
					>
						<Icon icon="angle-left" size="14px" />
						<span>{cameFromComparison ? 'Back to comparison' : 'Back to inspiration'}</span>
					</button>
				)}
				<div className={classnames('ss__chat-product-query-message__header')}>
					<div className={classnames('ss__chat-product-query-message__header__product')}>
						{(displayedCore.imageUrl || displayedCore.parentImageUrl) && (
							<Image
								className={classnames('ss__chat-product-query-message__header__product__image')}
								src={(displayedCore.imageUrl || displayedCore.parentImageUrl) as string}
								alt={(displayedCore.name as string) || ''}
							/>
						)}
						<div className={classnames('ss__chat-product-query-message__header__product__details')}>
							{displayedCore.name && (
								<div className={classnames('ss__chat-product-query-message__header__product__details__name')}>
									{displayedCore.url ? (
										<a
											href={displayedCore.url as string}
											onClick={(e) => controller?.track.product.click(e as any, product)}
											target="_blank"
											rel="noopener noreferrer"
										>
											{displayedCore.name}
										</a>
									) : (
										displayedCore.name
									)}
								</div>
							)}
							{displayedCore.price != null && (
								<div className={classnames('ss__chat-product-query-message__header__product__details__price')}>
									{displayedCore.msrp != null && Number(displayedCore.msrp) > Number(displayedCore.price) && (
										<Price value={displayedCore.msrp} lineThrough={true} />
									)}
									<Price value={displayedCore.price} />
								</div>
							)}
						</div>
						<div className={classnames('ss__chat-product-query-message__header__product__actions')}>
							<div className={classnames('ss__chat-product-query-message__header__product__actions__add-to-cart')}>
								<Button
									icon="cart"
									content={'Add to Cart'}
									onClick={() => {
										controller?.track.product.addToCart(product);
										controller?.addToCart(product);
									}}
								/>
							</div>
							{controller?.store.features.similarProducts.enabled && (
								<div className={classnames('ss__chat-product-query-message__header__product__actions__show-similar')}>
									<Button icon="search-thin" content={'Show Similar'} onClick={() => controller?.productSimilar(sourceProduct as any)} />
								</div>
							)}
							<div className={classnames('ss__chat-product-query-message__header__product__actions__discuss-product')}>
								<Button icon="chat" content={'Discuss Product'} onClick={() => controller?.productQuery(sourceProduct as any)} />
							</div>
						</div>
					</div>
				</div>

				{visibleSelections.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__variants')} role="group" aria-label="Variant selection">
						{visibleSelections.map((selection: VariantSelection) => {
							// If every value in this selection shares the same thumbnail (or none have
							// one), the image carries no signal — show text only.
							const firstThumb = selection.values[0]?.thumbnailImageUrl;
							const allSameThumb = selection.values.every((v) => v.thumbnailImageUrl === firstThumb);
							const showThumbs = !allSameThumb;
							return (
								<div key={selection.field}>
									<div className={classnames('ss__chat-product-query-message__variants__label')} id={`ss__chat-pq-variant-${selection.field}`}>
										{formatLabel(selection.field)} ({selection.values.length})
									</div>
									<div
										className={classnames('ss__chat-product-query-message__variants__swatches')}
										role="radiogroup"
										aria-labelledby={`ss__chat-pq-variant-${selection.field}`}
									>
										{selection.values.map((selectionValue) => {
											const isUnavailable = !selectionValue.available;
											const isSelected = selection.selected?.value === selectionValue.value;

											return (
												<button
													type="button"
													key={selectionValue.value}
													className={classnames('ss__chat-product-query-message__variants__swatch', {
														'ss__chat-product-query-message__variants__swatch--selected': isSelected,
														'ss__chat-product-query-message__variants__swatch--unavailable': isUnavailable,
														'ss__chat-product-query-message__variants__swatch--text-only': !showThumbs,
													})}
													title={selectionValue.value}
													role="radio"
													aria-checked={isSelected}
													aria-disabled={isUnavailable}
													aria-label={`${formatLabel(selection.field)}: ${selectionValue.value}${isUnavailable ? ' (unavailable)' : ''}`}
													onClick={() => selection.select(selectionValue.value)}
												>
													{showThumbs && selectionValue.thumbnailImageUrl ? (
														<Image
															className={classnames('ss__chat-product-query-message__variants__swatch__image')}
															src={selectionValue.thumbnailImageUrl}
															alt={selectionValue.value}
														/>
													) : null}
													<span className={classnames('ss__chat-product-query-message__variants__swatch__value')}>{selectionValue.value}</span>
												</button>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				)}

				{descriptionRow && <div className={classnames('ss__chat-product-query-message__description')}>{descriptionRow.value}</div>}

				{infoRows.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__section')}>
						<div className={classnames('ss__chat-product-query-message__section__title')}>Product Information</div>
						<table className={classnames('ss__chat-product-query-message__section__table')} aria-label="Product information">
							<tbody>
								{infoRows.map((row) => (
									<tr key={row.key}>
										<th scope="row">{row.label}</th>
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
											) : row.rawKey.toLowerCase() === 'price' ? (
												<span className="ss__chat-product-query-message__section__table__price">
													{displayedCore.msrp != null && Number(displayedCore.msrp) > Number(row.value) && (
														<Price value={Number(displayedCore.msrp)} lineThrough={true} />
													)}
													<Price value={Number(row.value)} />
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
	displayFields?: string[];
	lang?: Partial<ChatProductQueryMessageLang>;
	primaryColor?: string;
	primaryColorText?: string;
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
