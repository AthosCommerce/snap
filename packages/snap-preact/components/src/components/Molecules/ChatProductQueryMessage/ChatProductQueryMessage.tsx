import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useLang, useCustomComponentOverride } from '../../../hooks';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Image } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Price } from '../../Atoms/Price';
import type { Product, VariantSelection } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatProductQueryMessageProps> = ({ primaryColor, primaryColorText, theme }) => {
	const colorPrimary = primaryColor || Colour.concrete(theme?.variables?.colors?.primary) || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	const colorAccent = Colour.concrete(theme?.variables?.colors?.accent) || '#D4A843';
	const colorCta = Colour.concrete(theme?.variables?.colors?.accent) || '#feeeae';
	// neutral colors — no theme variable equivalents
	const colorText = '#374151';
	const colorBorder = '#E5E7EB';

	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
		paddingBottom: '1em',

		'.ss__chat-product-query-message__header__back.ss__button': {
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
			flexDirection: 'row-reverse',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '10px',
			padding: '8px 15px',
			background: colorPrimary,
			color: colorPrimaryText,
			fontSize: '14px',
			cursor: 'pointer',
			border: 'none',
			font: 'inherit',
			width: 'auto',
			'.ss__button__content': {
				width: 'auto',
			},
			// pin the background so the Chat organism's generic `.ss__button:hover`
			// lightening rule (higher specificity) doesn't recolor the banner
			'&:not(.ss__button--disabled):hover': {
				background: colorPrimary,
			},
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
			background: colorPrimary,
			padding: '1em',
			display: 'flex',
			flexDirection: 'column',

			'.ss__price': {
				color: colorPrimaryText,
			},

			'.ss__chat-product-query-message__header__product': {
				display: 'flex',
				gap: '1em',

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
					gap: '0.5em',
					flex: 1,
					justifyContent: 'space-evenly',

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
						color: colorAccent,
						display: 'flex',
						gap: '0.5em',
						alignItems: 'center',
					},
				},

				'.ss__chat-product-query-message__header__product__actions': {
					display: 'flex',
					flexDirection: 'row',
					gap: '0.5em',

					'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
						flexDirection: 'row-reverse',
						borderRadius: '0.5em',
						padding: '0.4em 0.75em',
						fontWeight: 'bold',
						border: 'none',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						fontSize: '0.8em',
						background: colorCta,
						color: '#000',
						justifyContent: 'center',
						width: '100%',
						textAlign: 'center',
						svg: {
							fill: '#000',
							stroke: '#000',
						},
						'&:not(.ss__button--disabled):hover': {
							filter: 'brightness(0.97)',
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
				color: colorText,
				textTransform: 'uppercase',
				marginBottom: '0.5em',
			},

			'.ss__chat-product-query-message__variants__swatches': {
				display: 'flex',
				flexWrap: 'wrap',
				gap: '0.5em',

				'.ss__chat-product-query-message__variants__swatch.ss__button': {
					display: 'flex',
					flex: '1 1 auto',
					cursor: 'pointer',
					padding: '0.25em',
					borderRadius: '0.5em',
					border: '2px solid transparent',
					transition: 'border-color 0.15s ease',
					background: 'transparent',
					font: 'inherit',
					color: 'inherit',

					'.ss__button__content': {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '0.25em',
					},

					'&:not(.ss__button--disabled):hover': {
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
						border: `1px solid ${colorBorder}`,
					},

					'.ss__chat-product-query-message__variants__swatch__value': {
						fontSize: '0.75em',
						color: colorText,
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

			'.ss__chat-product-query-message__section__table': {
				width: '100%',
				maxWidth: '100%',
				tableLayout: 'fixed',
				borderCollapse: 'separate',
				borderSpacing: 0,
				fontSize: '0.9em',

				'tbody tr': {
					transition: 'background-color 0.15s ease',
				},

				'tbody tr:hover': {
					background: '#F3F4F6',
				},

				'th, td': {
					padding: '0.75em 1em',
					verticalAlign: 'top',
					wordBreak: 'break-word',
					overflowWrap: 'anywhere',
					textAlign: 'left',
					borderBottom: `1px solid ${colorBorder}`,
				},

				'tbody tr:last-of-type th, tbody tr:last-of-type td': {
					borderBottom: 'none',
				},

				'th[scope="row"]': {
					fontWeight: '600',
					color: '#6B7280',
					textTransform: 'uppercase',
					fontSize: '0.8em',
					letterSpacing: '0.03em',
					width: '40%',
				},

				'td:last-of-type': {
					textAlign: 'right',
					color: '#111827',
					fontWeight: '500',
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
		},

		'.ss__chat-product-query-message__description': {
			padding: '0 1em',
			fontSize: '0.9em',
			color: colorText,
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

const collectInfoRows = (
	display: any,
	availabilityLabels: { inStock: string; outOfStock: string },
	displayFields?: string[]
): { key: string; label: string; value: string; rawKey: string }[] => {
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
		merged.availability = core.available ? availabilityLabels.inStock : availabilityLabels.outOfStock;
	}

	// merge product attributes, skipping ones already shown on the card
	Object.entries(attributes).forEach(([key, value]) => {
		if (!filterByDisplayFields && CARD_FIELDS.has(key)) return;
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

const resolveLangValue = (langEntry?: { value?: unknown }): string | undefined =>
	typeof langEntry?.value == 'function' ? (langEntry.value as () => string)() : (langEntry?.value as string | undefined);

let warnedUnsupportedMessageType = false;

export const ChatProductQueryMessage = observer((properties: ChatProductQueryMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductQueryMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatProductQueryMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, displayFields, disableStyles, className, internalClassName, treePath } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatProductQueryMessage', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const subProps: ChatProductQueryMessageSubProps = {
		button: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatProductQueryMessageProps>(props, defaultStyles);

	const { messageType, sourceProduct } = chatItem;

	const product: Product | null | undefined = controller?.store.productQuickview;
	const productQuickviewError: string | null | undefined = controller?.store.productQuickviewError;

	const chatMessages = controller?.store.currentChat?.chat || [];
	const sourceMessage = chatItem.sourceMessageId ? chatMessages.find((m) => m.id === chatItem.sourceMessageId) : null;
	const cameFromInspiration = sourceMessage?.messageType === 'inspirationResult';
	const cameFromComparison = sourceMessage?.messageType === 'productComparison';

	const variants = product?.variants;
	const selections = variants?.selections || [];

	// Ensure every selection has an initial value picked. Without this, entering
	// the quickview from inspiration leaves all selections empty, and the first
	// variant click can't narrow `refineSelections` to a single variant — so the
	// active variant (and hero image) doesn't update until a second selection is
	// made. Prefer the variant whose own id (uid) matches the clicked result's id
	// so the panel reflects exactly the variant the user clicked; fall back to the
	// first available value. Single-value selections also get hidden from the UI
	// (handled by `visibleSelections` below).
	useEffect(() => {
		if (messageType !== 'productQuery' || !product) return;

		const sourceId = sourceProduct?.id;
		const matchedVariant = sourceId != null ? variants?.data?.find((variant) => variant.mappings?.core?.uid === sourceId) : undefined;

		selections.forEach((selection: VariantSelection) => {
			if (selection.selected) return;
			const matchedValue = matchedVariant?.options?.[selection.field]?.value;
			const target =
				(matchedValue != null && selection.values.find((v) => v.available && v.value == matchedValue)) ||
				selection.values.find((v) => v.available) ||
				selection.values[0];
			if (target) {
				selection.select(target.value);
			}
		});
	}, [selections]);

	//initialize lang
	const defaultLang: Partial<ChatProductQueryMessageLang> = {
		loadingText: {
			value: 'Loading product details...',
		},
		backToComparisonButton: {
			value: 'Back to comparison',
			attributes: {
				'aria-label': 'Back to comparison',
			},
		},
		backToInspirationButton: {
			value: 'Back to inspiration',
			attributes: {
				'aria-label': 'Back to inspiration',
			},
		},
		addToCartButton: {
			value: 'Add to Cart',
		},
		similarButton: {
			value: 'Similar',
		},
		discussButton: {
			value: 'Discuss',
		},
		inStockText: {
			value: 'In Stock',
		},
		outOfStockText: {
			value: 'Out of Stock',
		},
		unavailableText: {
			value: 'unavailable',
		},
		variantsGroup: {
			attributes: {
				'aria-label': 'Variant selection',
			},
		},
		productInformationTable: {
			attributes: {
				'aria-label': 'Product information',
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		controller,
		chatItem,
	});

	if (messageType !== 'productQuery') {
		if (!warnedUnsupportedMessageType) {
			console.warn('ChatProductQueryMessage received message with unsupported type:', messageType, 'Expected type: productQuery');
			warnedUnsupportedMessageType = true;
		}
		return null;
	}

	if (!product) {
		return (
			<CacheProvider>
				<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
					<div className={classnames('ss__chat-product-query-message__header')}>
						<div className={classnames('ss__chat-product-query-message__header__product')}>
							<div className={classnames('ss__chat-product-query-message__header__product__details')}>
								<div className={classnames('ss__chat-product-query-message__header__product__details__name')}>
									{productQuickviewError || resolveLangValue(lang.loadingText)}
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

	const visibleSelections = selections.filter((selection: VariantSelection) => selection.values.length > 1);

	const displayedData = {
		mappings: displayed.mappings,
		attributes: displayed.attributes || {},
	};

	const allInfoRows = collectInfoRows(
		displayedData,
		{ inStock: resolveLangValue(lang.inStockText)!, outOfStock: resolveLangValue(lang.outOfStockText)! },
		displayFields
	);
	const descriptionRow = allInfoRows.find((row) => row.rawKey.toLowerCase() === 'description');
	const infoRows = allInfoRows.filter((row) => row.rawKey.toLowerCase() !== 'description');

	const handleBack = () => {
		controller?.store.currentChat?.popProductQueryMessage(chatItem.sourceMessageId);
		controller?.store.clearProductQuickview();
	};

	const unavailableText = resolveLangValue(lang.unavailableText);

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
				{(cameFromInspiration || cameFromComparison) && (
					<Button
						{...subProps.button}
						internalClassName={classnames('ss__chat-product-query-message__header__back')}
						icon={{ icon: 'angle-left', size: '14px' }}
						onClick={handleBack}
						lang={{ button: cameFromComparison ? lang.backToComparisonButton : lang.backToInspirationButton }}
					/>
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
										<a href={displayedCore.url as string} onClick={(e) => controller?.track.product.click(e as any, product)}>
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
							<div className={classnames('ss__chat-product-query-message__header__product__actions')}>
								<div className={classnames('ss__chat-product-query-message__header__product__actions__add-to-cart')}>
									<Button
										{...subProps.button}
										icon="cart"
										onClick={() => {
											controller?.track.product.addToCart(product);
											controller?.addToCart(product);
										}}
										lang={{ button: lang.addToCartButton }}
									/>
								</div>
								{controller?.store.features.similarProducts.enabled && (
									<div className={classnames('ss__chat-product-query-message__header__product__actions__show-similar')}>
										<Button
											{...subProps.button}
											icon="search-thin"
											onClick={() => controller?.productSimilar(sourceProduct)}
											lang={{ button: lang.similarButton }}
										/>
									</div>
								)}
								<div className={classnames('ss__chat-product-query-message__header__product__actions__discuss-product')}>
									<Button
										{...subProps.button}
										icon="chat"
										// pass the quickview product (not sourceProduct) — its display is masked
										// to the active variant, so the attachment shows the selected variant
										onClick={() => controller?.productQuery(product)}
										lang={{ button: lang.discussButton }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{visibleSelections.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__variants')} role="group" {...mergedLang.variantsGroup.attributes}>
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
												<Button
													{...subProps.button}
													key={selectionValue.value}
													internalClassName={classnames('ss__chat-product-query-message__variants__swatch', {
														'ss__chat-product-query-message__variants__swatch--selected': isSelected,
														'ss__chat-product-query-message__variants__swatch--unavailable': isUnavailable,
														'ss__chat-product-query-message__variants__swatch--text-only': !showThumbs,
													})}
													{...({ role: 'radio', 'aria-checked': isSelected } as any)}
													disabled={isUnavailable}
													lang={{
														button: {
															attributes: {
																title: selectionValue.value,
																'aria-label': `${formatLabel(selection.field)}: ${selectionValue.value}${
																	isUnavailable ? ` (${unavailableText})` : ''
																}`,
															},
														},
													}}
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
												</Button>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				)}

				{infoRows.length > 0 && (
					<div className={classnames('ss__chat-product-query-message__section')}>
						<table className={classnames('ss__chat-product-query-message__section__table')} {...mergedLang.productInformationTable.attributes}>
							<tbody>
								{infoRows.map((row) => (
									<tr key={row.key}>
										<th scope="row">{row.label}</th>
										<td>
											{row.rawKey === 'availability' ? (
												<span
													className={classnames({
														'ss__chat-product-query-message__section__table__availability--in-stock': displayedCore.available,
														'ss__chat-product-query-message__section__table__availability--out-of-stock': !displayedCore.available,
													})}
												>
													{displayedCore.available ? `✓ ${row.value}` : row.value}
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
				{descriptionRow && <div className={classnames('ss__chat-product-query-message__description')}>{descriptionRow.value}</div>}
			</div>
		</CacheProvider>
	);
});

interface ChatProductQueryMessageSubProps {
	button: Partial<ButtonProps>;
}

export type ChatProductQueryMessageProps = {
	chatItem: ChatProductQueryMessageItem;
	controller?: ChatController;
	lang?: Partial<ChatProductQueryMessageLang>;
} & ChatProductQueryMessageTemplatesLegalProps &
	ComponentProps<ChatProductQueryMessageProps>;

export type ChatProductQueryMessageItem = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: Product;
	sourceMessageId?: string;
};

export type ChatProductQueryMessageTemplatesLegalProps = {
	displayFields?: string[];
	primaryColor?: string;
	primaryColorText?: string;
};

export interface ChatProductQueryMessageLang {
	loadingText?: Lang<never>;
	backToComparisonButton?: Lang<never>;
	backToInspirationButton?: Lang<never>;
	addToCartButton?: Lang<never>;
	similarButton?: Lang<never>;
	discussButton?: Lang<never>;
	inStockText?: Lang<never>;
	outOfStockText?: Lang<never>;
	unavailableText?: Lang<never>;
	variantsGroup?: Lang<never>;
	productInformationTable?: Lang<never>;
}
