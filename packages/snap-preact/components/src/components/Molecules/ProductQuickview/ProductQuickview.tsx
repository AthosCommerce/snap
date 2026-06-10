import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { isObservableArray } from 'mobx';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { useComponent } from '../../../hooks';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Modal } from '../Modal';
import { VariantSelection, VariantSelectionTemplatesLegalProps } from '../VariantSelection';
import { Carousel } from '../Carousel';
import { Button } from '../../Atoms/Button';
import { Image } from '../../Atoms/Image';
import { Price } from '../../Atoms/Price';
import { OverlayBadge } from '../OverlayBadge';
import { CalloutBadge } from '../CalloutBadge';
import { Gallery } from '../Gallery';

import type { QuickviewController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';
import type { Swiper as SwiperType } from 'swiper';

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
		//   Autocomplete : 10002 (Autocomplete/AutocompleteLayout) — quickview must paint above it
		//   Modal overlay: 10005 (overridden below)
		//   Modal content: 10006
		//   Dropdown portal (e.g. variant <select> options): 10007  ← rendered to document.body
		//     from the VariantSelection Dropdown atom, z-index is hardcoded inline in
		//     Dropdown.tsx, so we instead keep our modal content BELOW it to let the
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
			zIndex: 10006,
			boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
			borderRadius: '4px',
		},
		// Lower the Modal's Overlay backdrop too so it stays below both the modal content
		// (10006) and the dropdown portal (10007) but above page content and autocomplete.
		'&.ss__product-quickview .ss__modal__overlay': {
			zIndex: '10005 !important' as any,
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
		'& .ss__product-quickview__details': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
		},
		'& .ss__product-quickview__title': {
			fontSize: '1.4em',
			paddingRight: '32px', // leave room for the close button
		},
		'& .ss__product-quickview__pricing': {
			fontSize: '1.2em',
			'& .ss__price--strike': {
				fontSize: '80%',
				marginRight: '6px',
			},
		},
		'& .ss__product-quickview__variant': {
			marginBottom: '12px',
			// Slideshow centers its track when there are fewer swatches than slidesPerView — left-align instead.
			'& .ss__slideshow__track--centered': {
				justifyContent: 'flex-start',
			},
		},
		'& .ss__product-quickview__variant-title': {
			marginBottom: '6px',
			fontWeight: 600,
		},
		'& .ss__product-quickview__image': {
			display: 'block',
			maxWidth: '100%',
			marginBottom: '12px',
			cursor: 'zoom-in',
			'& img': {
				display: 'block',
				maxWidth: '100%',
			},
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
		},
		'& .ss__product-quickview__description': {
			lineHeight: 1.4,
		},
		'& .ss__product-quickview__attributes': {
			width: '100%',
			borderCollapse: 'collapse',
			fontSize: '0.9em',
			'& tr': {
				borderBottom: '1px solid #eee',
			},
			'& tr:last-of-type': {
				borderBottom: 'none',
			},
			'& th, & td': {
				padding: '10px 0',
				textAlign: 'left',
				verticalAlign: 'top',
			},
			'& th': {
				width: '40%',
				paddingRight: '16px',
				fontWeight: 500,
				color: '#666',
				textTransform: 'uppercase',
				fontSize: '0.85em',
				letterSpacing: '0.02em',
			},
			'& td': {
				color: '#1a1a1a',
			},
		},
		'& .ss__product-quickview__actions': {
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

// Coerce an image-list field value into an array of image URL strings.
// Handles real arrays and MobX observable arrays; anything else → [].
const toImageArray = (value: unknown): string[] => {
	if (Array.isArray(value) || isObservableArray(value as any)) {
		return Array.from(value as Iterable<unknown>).filter((v): v is string => typeof v === 'string' && v.length > 0);
	}
	return [];
};

export const ProductQuickview = observer((properties: ProductQuickviewProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	// Fullscreen image gallery (lightbox) state. Declared before any conditional return so hook
	// order stays stable.
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const openGallery = (i: number) => {
		setGalleryIndex(i);
		setGalleryOpen(true);
	};

	const defaultProps: Partial<ProductQuickviewProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('productQuickview', globalTheme, defaultProps, properties);
	const { controller, className, internalClassName, disableStyles, treePath, customComponent, showBadges } = props;

	// Hoist the carousel-sync inputs before any conditional return so the hooks below
	// are unconditional. All reads use optional chaining and safely produce defaults when
	// controller/product are absent.
	const product = controller?.store?.product as Product | undefined;
	const core = product?.display?.mappings?.core || product?.mappings?.core;
	const image: string | undefined = core?.imageUrl || core?.thumbnailImageUrl;
	// Resolve the image-list field. `config.imagesField` accepts a single field name or an
	// array of candidate names; when omitted it defaults to trying 'images' then 'ss_images'.
	// Each candidate is looked up on mappings.core first, then attributes; the first that
	// resolves to MORE THAN ONE image wins and is rendered as a 1-per-view carousel. If none
	// qualify, the modal falls back to the single core image below.
	const configuredImagesField = controller?.store?.quickviewConfig?.imagesField;
	const imageFieldCandidates: string[] = configuredImagesField
		? Array.isArray(configuredImagesField)
			? configuredImagesField
			: [configuredImagesField]
		: ['images', 'ss_images'];
	const coreRecord = core as Record<string, unknown> | undefined;
	const allAttributes: Record<string, unknown> = product?.display?.attributes || product?.attributes || {};
	const activeVariant = product?.variants?.active;
	const variantCore = activeVariant?.mappings?.core as Record<string, unknown> | undefined;
	const variantAttributes = (activeVariant?.attributes as Record<string, unknown> | undefined) || {};
	const resolveImages = (coreData?: Record<string, unknown>, attrs?: Record<string, unknown>): string[] => {
		for (const field of imageFieldCandidates) {
			const candidate = toImageArray(coreData?.[field] ?? attrs?.[field]);
			if (candidate.length > 1) return candidate;
		}
		return [];
	};
	// Variant-aware image resolution. When a variant is active, use its own image array
	// for the carousel. If the variant has no multi-image field, show just its single
	// imageUrl (no carousel) rather than falling back to the parent's array — the parent
	// images may depict other variants and would be misleading.
	const variantImageList: string[] = activeVariant ? resolveImages(variantCore, variantAttributes) : [];
	const parentImageList: string[] = resolveImages(coreRecord, allAttributes);
	const imageList: string[] = activeVariant ? (variantImageList.length > 1 ? variantImageList : []) : parentImageList;
	const hasMultipleImages = imageList.length > 1;
	// When a variant is active, find its image in the carousel so we can navigate to the
	// correct slide instead of always staying on slide 0.
	let targetSlide = 0;
	if (activeVariant && hasMultipleImages && image) {
		const idx = imageList.indexOf(image);
		if (idx >= 0) targetSlide = idx;
	}

	// Keep a ref to the Swiper instance so we can programmatically navigate slides when
	// the active variant changes — avoids remounting the carousel (which causes a visible
	// flash and layout shift while images reload).
	const swiperRef = useRef<SwiperType | null>(null);

	// Dialog focus management: remember what had focus before the modal opened,
	// move focus to the close button on open, and restore on close.
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const previousFocusRef = useRef<HTMLElement | null>(null);
	const wasOpenRef = useRef(false);

	useEffect(() => {
		const isOpenNow = Boolean(controller?.store?.isOpen);
		if (isOpenNow && !wasOpenRef.current) {
			previousFocusRef.current = (document.activeElement as HTMLElement) || null;
			const closeEl = wrapperRef.current?.querySelector<HTMLElement>('.ss__product-quickview__close');
			closeEl?.focus();
		} else if (!isOpenNow && wasOpenRef.current) {
			previousFocusRef.current?.focus?.();
			previousFocusRef.current = null;
		}
		wasOpenRef.current = isOpenNow;
	});

	// Escape closes the quickview — unless the fullscreen gallery is layered on top,
	// in which case Gallery's own Escape handler closes the gallery first.
	useEffect(() => {
		const isOpenNow = Boolean(controller?.store?.isOpen);
		if (!isOpenNow) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && !galleryOpen) {
				controller.store.close();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [controller?.store?.isOpen, galleryOpen]);

	useEffect(() => {
		if (swiperRef.current && !swiperRef.current.destroyed && hasMultipleImages) {
			swiperRef.current.slideTo(targetSlide);
		}
	}, [targetSlide, hasMultipleImages]);

	// Unconditional useComponent call so hook order is stable regardless of customComponent.
	// Passes '' when no override is requested; the guard in useComponent silently no-ops for
	// empty names, so there is no console.warn spam on normal renders.
	const ComponentOverride = useComponent(
		((snap as SnapTemplates)?.templates?.library.import.component as any)?.productQuickview || {},
		customComponent || ''
	);
	if (customComponent && ComponentOverride) {
		return <ComponentOverride {...props} />;
	}

	const styling = mergeStyles<ProductQuickviewProps>(props, defaultStyles);

	if (!controller || controller.type !== 'quickview') {
		console.warn(`[ProductQuickview] No controller provided; quickview cannot function without a QuickviewController instance.`);
		return null;
	}

	const store = controller.store;
	const loading = Boolean(store.loading);
	const displayFields: string[] | undefined = store.quickviewConfig?.displayFields;
	const error: { message: string; cause?: unknown } | undefined = store.error;

	// Look up the display label for a field name from meta.facets[field].label.
	// Falls back to the raw field name when no meta entry exists.
	const metaFacets = controller.store.meta?.data?.facets as Record<string, { label?: string } | undefined> | undefined;
	const labelFor = (field: string): string => metaFacets?.[field]?.label || field;

	const isOpen = Boolean(store.isOpen);

	// Prefer `product.display` so the displayed name/image/attributes reflect the
	// currently active variant (Mask-merged), falling back to the base product data.
	const name: string | undefined = core?.name;
	const description: string | undefined = (core as Record<string, unknown> | undefined)?.description as string | undefined;
	const price: number | undefined = core?.price;
	const msrp: number | undefined = core?.msrp;
	const url: string | undefined = core?.url;
	const isOnSale = Boolean(msrp && price && msrp > price);

	const selections = product?.variants?.selections;

	// Images shown in the fullscreen gallery: the multi-image list when present, otherwise the
	// single core image (so clicking a lone image still opens the zoomable gallery).
	const galleryImages: string[] = hasMultipleImages ? imageList : image ? [image] : [];
	// Attributes are opt-in: with no `displayFields` configured, show none rather than dumping
	// every attribute. When configured, render only those fields (in the given order).
	const displayedAttributes: Record<string, unknown> = displayFields
		? Object.fromEntries(displayFields.filter((k) => k in allAttributes).map((k) => [k, allAttributes[k]]))
		: {};

	const onClose = () => store.close();

	// The media region: a 1-per-view carousel when there are multiple images, otherwise the
	// single core image. Clicking opens the fullscreen gallery at the clicked index.
	const media = hasMultipleImages ? (
		<Carousel
			className="ss__product-quickview__carousel"
			initialSlide={targetSlide}
			onAfterInit={(swiper) => {
				swiperRef.current = swiper;
			}}
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
				<Image
					key={`${src}-${i}`}
					className="ss__product-quickview__image"
					src={src}
					alt={name || ''}
					onClick={() => openGallery(i)}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			))}
		</Carousel>
	) : image ? (
		<Image
			className="ss__product-quickview__image"
			src={image}
			alt={name || ''}
			onClick={() => openGallery(0)}
			theme={props.theme}
			treePath={treePath}
			{...defined({ disableStyles })}
		/>
	) : null;

	// Render nothing at all while the shared quickview store is closed.
	if (!isOpen) return null;

	return (
		<CacheProvider>
			{/* stopPropagation keeps clicks inside the quickview (close icon, overlay, content) from
			    reaching the AutocompleteController's document click handler, which would otherwise
			    unfocus and close an open autocomplete behind the modal. */}
			<div
				{...styling}
				ref={wrapperRef}
				className={classnames('ss__product-quickview', className, internalClassName)}
				onClick={(e) => e.stopPropagation()}
			>
				{/* lockScroll is disabled: Modal's scroll-lock toggles `body { overflow: hidden }`,
				    which removes the page scrollbar and reflows the results wider by the scrollbar
				    width when the modal opens. The fixed full-viewport overlay already masks the
				    background and the fixed-centered content stays put, so locking isn't needed. */}
				<Modal open={isOpen} lockScroll={false} onOverlayClick={onClose} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
					{error ? (
						<div className="ss__product-quickview__content">
							<Button
								internalClassName="ss__product-quickview__close"
								icon="close-thin"
								aria-label="Close quickview"
								onClick={onClose}
								theme={props.theme}
								treePath={treePath}
								{...defined({ disableStyles })}
							/>
							<div className="ss__product-quickview__error" role="alert">
								{error.message}
							</div>
						</div>
					) : loading ? (
						<div className="ss__product-quickview__content">
							<Button
								internalClassName="ss__product-quickview__close"
								icon="close-thin"
								aria-label="Close quickview"
								onClick={onClose}
								theme={props.theme}
								treePath={treePath}
								{...defined({ disableStyles })}
							/>
							<div className="ss__product-quickview__loading">Loading…</div>
						</div>
					) : product ? (
						<div className="ss__product-quickview__content">
							<Button
								internalClassName="ss__product-quickview__close"
								icon="close-thin"
								aria-label="Close quickview"
								onClick={onClose}
								theme={props.theme}
								treePath={treePath}
								{...defined({ disableStyles })}
							/>
							<div className="ss__product-quickview__body">
								{/* Left column: image or carousel. When showBadges is set, overlay badges sit
								    over the media and callout badges render directly below it. */}
								<div className="ss__product-quickview__media">
									{media && showBadges ? (
										<OverlayBadge result={product} controller={controller} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
											{media}
										</OverlayBadge>
									) : (
										media
									)}
									{showBadges && <CalloutBadge result={product} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />}
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
														type={selection.type as VariantSelectionTemplatesLegalProps['type']}
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
												content="More info"
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
	controller: QuickviewController;
	customComponent?: string;
	// When true, overlay badges are shown over the media and callout badges below it. Opt-in (default false).
	showBadges?: boolean;
} & ComponentProps<ProductQuickviewProps>;
