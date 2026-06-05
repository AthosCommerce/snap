import { h } from 'preact';
import { useState } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { isObservableArray } from 'mobx';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { useComponent } from '../../../hooks';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Modal } from '../Modal';
import { VariantSelection } from '../VariantSelection';
import { Carousel } from '../Carousel';
import { Button } from '../../Atoms/Button';
import { Price } from '../../Atoms/Price';
import { OverlayBadge } from '../OverlayBadge';
import { Gallery } from './Gallery';

import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<ProductQuickviewProps> = () => {
	return css({
		// Take the wrapper out of normal flow. `Result` renders this molecule as a sibling of the
		// result `<article>`, which makes it a direct child of the Results CSS grid — left in flow
		// it would occupy a grid cell and shift the layout when the modal opens. The modal's
		// content and overlay are both `position: fixed`, so an absolute, zero-size wrapper has no
		// visual effect while keeping it out of the grid.
		position: 'absolute',
		width: 0,
		height: 0,

		// Override the underlying Modal's `.ss__modal__content` positioning so the quickview
		// is centered in the viewport rather than positioned relative to the source Result tile.
		// Modal's default is `position: absolute` inside its (relative) wrapper, which lives
		// inside the Results grid cell — that's why the modal was being clipped to a tile.
		// We compound the wrapper class (`&.ss__product-quickview`) into the selector to beat
		// Modal's same-specificity rule (which would otherwise win on source-order since
		// Modal's styles are emitted after ours), and use !important on the positioning
		// properties so theme overrides can't accidentally re-anchor the modal to its tile.
		//
		// Z-index hierarchy:
		//   Page content : 0
		//   Modal overlay: 9990 (overridden below)
		//   Modal content: 9998
		//   Dropdown portal (e.g. variant <select> options): 9999  ← rendered to document.body
		//     from the VariantSelection Dropdown atom, z-index is hardcoded inline in
		//     Dropdown.tsx, so we instead keep our modal content BELOW 9999 to let the
		//     dropdown options paint on top.
		'&.ss__product-quickview .ss__modal__content': {
			position: 'fixed !important' as any,
			top: '50% !important' as any,
			left: '50% !important' as any,
			transform: 'translate(-50%, -50%) !important' as any,
			minWidth: 'auto',
			maxWidth: '90vw',
			maxHeight: '90vh',
			width: 'auto',
			overflow: 'auto',
			zIndex: 9998,
			boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
			borderRadius: '4px',
		},
		// Lower the Modal's Overlay backdrop too so it stays below both the modal content
		// (9998) and the dropdown portal (9999) but above page content.
		'&.ss__product-quickview .ss__modal__overlay': {
			zIndex: '9990 !important' as any,
		},
		'& .ss__product-quickview__content': {
			padding: '20px',
			minWidth: '320px',
			maxWidth: '600px',
			position: 'relative',
			boxSizing: 'border-box',
		},
		// Body wraps the media (left) and details (right) regions. Mobile = single column
		// (natural block flow); desktop switches to a 2-column flex layout (see media query below).
		'& .ss__product-quickview__media': {
			marginBottom: '12px',
		},
		'& .ss__product-quickview__title': {
			fontSize: '1.4em',
			marginBottom: '12px',
			paddingRight: '32px', // leave room for the close button
		},
		'& .ss__product-quickview__pricing': {
			marginBottom: '12px',
			fontSize: '1.2em',
			'& .ss__price--strike': {
				fontSize: '80%',
				marginRight: '6px',
			},
		},
		'& .ss__product-quickview__variant': {
			marginBottom: '12px',
		},
		'& .ss__product-quickview__variant-title': {
			marginBottom: '6px',
			fontWeight: 600,
		},
		'& .ss__product-quickview__image': {
			display: 'block',
			maxWidth: '100%',
			marginBottom: '12px',
		},
		'& .ss__product-quickview__carousel': {
			// Images inside carousel slides shouldn't carry the single-image bottom margin.
			'& .ss__product-quickview__image': {
				marginBottom: 0,
			},
		},
		'& .ss__product-quickview__variants': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			marginBottom: '12px',
		},
		'& .ss__product-quickview__description': {
			marginBottom: '12px',
			lineHeight: 1.4,
		},
		'& .ss__product-quickview__attributes': {
			width: '100%',
			borderCollapse: 'collapse',
			'& th, & td': {
				border: '1px solid #eee',
				padding: '6px 10px',
				textAlign: 'left',
			},
		},
		'& .ss__product-quickview__actions': {
			marginBottom: '12px',
			display: 'flex',
			flexWrap: 'wrap',
			gap: '12px',
		},
		'& .ss__product-quickview__close': {
			position: 'absolute',
			top: '8px',
			right: '8px',
			background: 'transparent',
			border: 'none',
			fontSize: '1.4em',
			cursor: 'pointer',
			lineHeight: 1,
			zIndex: 1,
		},
		'& .ss__product-quickview__loading': {
			padding: '40px',
			textAlign: 'center',
			minWidth: '200px',
		},
		'& .ss__product-quickview__error': {
			padding: '40px',
			textAlign: 'center',
			minWidth: '200px',
			color: '#b00020',
		},
		// Desktop: 2-column layout — image/carousel on the left, everything else on the right.
		'@media (min-width: 768px)': {
			'& .ss__product-quickview__content': {
				maxWidth: '880px',
			},
			'& .ss__product-quickview__body': {
				display: 'flex',
				alignItems: 'flex-start',
				gap: '24px',
			},
			'& .ss__product-quickview__media': {
				flex: '0 0 45%',
				maxWidth: '45%',
				marginBottom: 0,
			},
			'& .ss__product-quickview__details': {
				flex: '1 1 auto',
				minWidth: 0,
			},
		},
	});
};

const renderAttributeValue = (value: unknown): string => {
	if (value === null || value === undefined) return '';

	if (Array.isArray(value) || isObservableArray(value as any)) {
		return Array.from(value as Iterable<unknown>)
			.map((v) => (typeof v === 'object' ? JSON.stringify(v) : String(v)))
			.join(', ');
	}

	if (typeof value === 'object') return JSON.stringify(value);
	return String(value);
};

// Candidate delimiters tried (in order) when auto-detecting how a single string value packs
// multiple image URLs. `|` is first because it cannot appear unencoded in a URL, making it the
// most reliable separator; the rest are common fallbacks. Comma is last since it can legitimately
// appear inside URL query/matrix params.
const IMAGE_DELIMITER_CANDIDATES = ['|', '\n', '\t', ';', ','];

const splitNonEmpty = (value: string, delimiter: string): string[] =>
	value
		.split(delimiter)
		.map((part) => part.trim())
		.filter((part) => part.length > 0);

// Split a single delimited string of image URLs into an array.
// - With an explicit `delimiter`, split strictly on it (a single resulting part means one image).
// - Without one, auto-detect: use the first candidate delimiter that's present AND yields >1 part.
// - If nothing splits it, the string is treated as a single image URL.
const splitImageString = (value: string, delimiter?: string): string[] => {
	if (delimiter) {
		return splitNonEmpty(value, delimiter);
	}
	for (const candidate of IMAGE_DELIMITER_CANDIDATES) {
		if (value.includes(candidate)) {
			const parts = splitNonEmpty(value, candidate);
			if (parts.length > 1) return parts;
		}
	}
	const trimmed = value.trim();
	return trimmed.length ? [trimmed] : [];
};

// Coerce an image-list field value into an array of image URL strings.
// Handles real arrays, MobX observable arrays, JSON-encoded array strings, and delimited strings
// (e.g. 'a.jpg|b.jpg'). `delimiter` overrides delimiter auto-detection for the string case.
// Anything else → [].
const toImageArray = (value: unknown, delimiter?: string): string[] => {
	if (value === null || value === undefined) return [];

	if (Array.isArray(value) || isObservableArray(value as any)) {
		return Array.from(value as Iterable<unknown>).filter((v): v is string => typeof v === 'string' && v.length > 0);
	}

	if (typeof value === 'string') {
		// A JSON-encoded array string takes precedence over delimiter splitting.
		try {
			const parsed = JSON.parse(value);
			if (Array.isArray(parsed)) {
				return parsed.filter((v): v is string => typeof v === 'string' && v.length > 0);
			}
		} catch {
			// Not JSON — fall through to delimiter handling.
		}
		return splitImageString(value, delimiter);
	}

	return [];
};

export const ProductQuickview = observer((properties: ProductQuickviewProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	// Fullscreen image gallery (lightbox) state. Declared before any early return so hook
	// order stays stable.
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const openGallery = (i: number) => {
		setGalleryIndex(i);
		setGalleryOpen(true);
	};

	const defaultProps: Partial<ProductQuickviewProps> = {
		treePath: globalTreePath,
		disableBadges: false,
	};

	const props = mergeProps('productQuickview', globalTheme, defaultProps, properties);
	const { controller, result, className, internalClassName, disableStyles, treePath, customComponent, disableBadges } = props;

	if (customComponent) {
		const ComponentOverride = useComponent(
			((snap as SnapTemplates)?.templates?.library.import.component as any)?.productQuickview || {},
			customComponent
		);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<ProductQuickviewProps>(props, defaultStyles);

	const quickview = controller.store?.quickview;
	const product = quickview?.product as Product | undefined;
	const loading = Boolean(quickview?.loading);
	const displayFields: string[] | undefined = quickview?.config?.displayFields;
	const error: { message: string; cause?: unknown } | undefined = quickview?.error;

	// Look up the display label for a field name from meta.facets[field].label.
	// Falls back to the raw field name when no meta entry exists.
	const metaFacets: Record<string, { label?: string } | undefined> | undefined = (controller.store as any)?.meta?.data?.facets;
	const labelFor = (field: string): string => metaFacets?.[field]?.label || field;

	// Scope the modal to its result by product id. The store sets `product` to the source
	// result the moment `setLoading` runs (before the fetch resolves), so this holds through
	// the loading, error, and loaded phases. When no `result` prop is given (standalone usage),
	// the modal opens whenever the store is open.
	const isOpen = Boolean(quickview?.isOpen && (!result || product?.id === result.id));

	// Prefer `product.display` so the displayed name/image/attributes reflect the
	// currently active variant (Mask-merged), falling back to the base product data.
	const core = product?.display?.mappings?.core || product?.mappings?.core;
	const name: string | undefined = core?.name;
	const description: string | undefined = (core as Record<string, unknown> | undefined)?.description as string | undefined;
	const image: string | undefined = core?.imageUrl || core?.thumbnailImageUrl;
	const price: number | undefined = core?.price;
	const msrp: number | undefined = core?.msrp;
	const url: string | undefined = core?.url;
	const isOnSale = Boolean(msrp && price && msrp > price);
	const allAttributes: Record<string, unknown> = product?.display?.attributes || product?.attributes || {};

	// Resolve the image-list field. `config.imagesField` accepts a single field name or an
	// array of candidate names; when omitted it defaults to trying 'images' then 'ss_images'.
	// Each candidate is looked up on mappings.core first, then attributes; the first that
	// resolves to MORE THAN ONE image wins and is rendered as a 1-per-view carousel. If none
	// qualify, the modal falls back to the single core image below.
	const configuredImagesField = quickview?.config?.imagesField;
	const imageFieldCandidates: string[] = configuredImagesField
		? Array.isArray(configuredImagesField)
			? configuredImagesField
			: [configuredImagesField]
		: ['images', 'ss_images'];

	const imagesDelimiter: string | undefined = quickview?.config?.imagesDelimiter;
	const coreRecord = core as Record<string, unknown> | undefined;
	let imageList: string[] = [];
	for (const field of imageFieldCandidates) {
		const candidate = toImageArray(coreRecord?.[field] ?? allAttributes[field], imagesDelimiter);
		if (candidate.length > 1) {
			imageList = candidate;
			break;
		}
	}
	const hasMultipleImages = imageList.length > 1;
	// Images shown in the fullscreen gallery: the multi-image list when present, otherwise the
	// single core image (so clicking a lone image still opens the zoomable gallery).
	const galleryImages: string[] = hasMultipleImages ? imageList : image ? [image] : [];
	const displayedAttributes: Record<string, unknown> = displayFields
		? Object.fromEntries(displayFields.filter((k) => k in allAttributes).map((k) => [k, allAttributes[k]]))
		: allAttributes;
	const selections = product?.variants?.selections;

	const onClose = () => controller.closeQuickView();

	// The media region: a 1-per-view carousel when there are multiple images, otherwise the
	// single core image. Clicking opens the fullscreen gallery at the clicked index.
	const media = hasMultipleImages ? (
		<Carousel
			className="ss__product-quickview__carousel"
			// Force a single slide at every viewport width. The Carousel defaults to a
			// responsive breakpoints map (1→5 slides). Without an explicit `breakpoints`
			// override, `useDisplaySettings` resolves the viewport breakpoint and spreads
			// its `slidesPerView` over props — clobbering the top-level `slidesPerView={1}`.
			slidesPerView={1}
			slidesPerGroup={1}
			breakpoints={{ 0: { slidesPerView: 1, slidesPerGroup: 1 } }}
			pagination={true}
			loop={false}
			theme={props.theme}
			treePath={treePath}
			{...defined({ disableStyles })}
		>
			{imageList.map((src, i) => (
				<img
					key={`${src}-${i}`}
					className="ss__product-quickview__image"
					src={src}
					alt={name || ''}
					style={{ cursor: 'zoom-in' }}
					onClick={() => openGallery(i)}
				/>
			))}
		</Carousel>
	) : image ? (
		<img className="ss__product-quickview__image" src={image} alt={name || ''} style={{ cursor: 'zoom-in' }} onClick={() => openGallery(0)} />
	) : null;

	// Render nothing at all when this instance isn't the active quickview. This is what lets
	// `Result` mount one `<ProductQuickview>` per tile unconditionally without adding stray DOM
	// to the results grid — only the active instance produces output.
	if (!isOpen) return null;

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__product-quickview', className, internalClassName)}>
				{/* lockScroll is disabled: Modal's scroll-lock toggles `body { overflow: hidden }`,
				    which removes the page scrollbar and reflows the results wider by the scrollbar
				    width when the modal opens. The fixed full-viewport overlay already masks the
				    background and the fixed-centered content stays put, so locking isn't needed. */}
				<Modal open={isOpen} lockScroll={false} onOverlayClick={onClose} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
					{error ? (
						<div className="ss__product-quickview__content">
							<button type="button" className="ss__product-quickview__close" aria-label="Close quickview" onClick={onClose}>
								×
							</button>
							<div className="ss__product-quickview__error" role="alert">
								{error.message}
							</div>
						</div>
					) : loading ? (
						<div className="ss__product-quickview__content">
							<button type="button" className="ss__product-quickview__close" aria-label="Close quickview" onClick={onClose}>
								×
							</button>
							<div className="ss__product-quickview__loading">Loading…</div>
						</div>
					) : product ? (
						<div className="ss__product-quickview__content">
							<button type="button" className="ss__product-quickview__close" aria-label="Close quickview" onClick={onClose}>
								×
							</button>
							<div className="ss__product-quickview__body">
								{/* Left column: image or carousel only, with badges overlaid unless disabled. */}
								<div className="ss__product-quickview__media">
									{media && !disableBadges ? (
										<OverlayBadge result={product} controller={controller} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
											{media}
										</OverlayBadge>
									) : (
										media
									)}
								</div>

								{/* Right column: title, price, variants, description, attributes, actions. */}
								<div className="ss__product-quickview__details">
									{name && <div className="ss__product-quickview__title">{name}</div>}
									{price ? (
										<div className="ss__product-quickview__pricing">
											{isOnSale ? (
												<>
													<Price value={msrp} lineThrough={true} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />
													&nbsp;
													<Price value={price} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />
												</>
											) : (
												<Price value={price} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />
											)}
										</div>
									) : null}
									{selections && selections.length > 0 && (
										<div className="ss__product-quickview__variants">
											{selections.map((selection) => (
												<div key={selection.field} className="ss__product-quickview__variant">
													<div className="ss__product-quickview__variant-title">{selection.label || selection.field}</div>
													<VariantSelection
														selection={selection}
														// Honor the API's optionConfig type: render Swatches for 'swatches',
														// a dropdown for 'dropdown'. When the field has no type, leave it
														// undefined so VariantSelection applies its own default.
														type={selection.type === 'swatches' ? 'swatches' : selection.type === 'dropdown' ? 'dropdown' : undefined}
														theme={props.theme}
														treePath={treePath}
														{...defined({ disableStyles })}
													/>
												</div>
											))}
										</div>
									)}
									<div className="ss__product-quickview__actions">
										<Button
											internalClassName="ss__product-quickview__add-to-cart"
											content="Add to Cart"
											onClick={() => product && controller.addToCart([product])}
											theme={props.theme}
											treePath={treePath}
											{...defined({ disableStyles })}
										/>
										{url && (
											<Button
												internalClassName="ss__product-quickview__go-to-product"
												content="Go to Product"
												onClick={() => {
													window.location.href = url;
												}}
												theme={props.theme}
												treePath={treePath}
												{...defined({ disableStyles })}
											/>
										)}
									</div>
									{description && <div className="ss__product-quickview__description" dangerouslySetInnerHTML={{ __html: description }} />}
									{Object.keys(displayedAttributes).length > 0 && (
										<table className="ss__product-quickview__attributes">
											<tbody>
												{Object.entries(displayedAttributes).map(([key, value]) => (
													<tr key={key}>
														<th scope="row">{labelFor(key)}</th>
														<td>{renderAttributeValue(value)}</td>
													</tr>
												))}
											</tbody>
										</table>
									)}
								</div>
							</div>
							<Gallery
								images={galleryImages}
								open={galleryOpen}
								startIndex={galleryIndex}
								onClose={() => setGalleryOpen(false)}
								alt={name}
								theme={props.theme}
								treePath={treePath}
								{...defined({ disableStyles })}
							/>
						</div>
					) : null}
				</Modal>
			</div>
		</CacheProvider>
	);
});

export type ProductQuickviewProps = {
	controller: SearchController | AutocompleteController | RecommendationController;
	result?: Product;
	customComponent?: string;
	// When false (default), badges are overlaid on the image/carousel. Set true to hide them.
	disableBadges?: boolean;
} & ComponentProps<ProductQuickviewProps>;
