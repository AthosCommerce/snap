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
import { VariantSelection, VariantSelectionTemplatesLegalProps } from '../../Molecules/VariantSelection';
import { Carousel } from '../../Molecules/Carousel';
import { Button } from '../../Atoms/Button';
import { Image } from '../../Atoms/Image';
import { Price } from '../../Atoms/Price';
import { OverlayBadge } from '../../Molecules/OverlayBadge';
import { CalloutBadge } from '../../Molecules/CalloutBadge';
import { Gallery } from '../../Molecules/Gallery';

import type { QuickviewController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';
import type { Swiper as SwiperType } from 'swiper';

const defaultStyles: StyleScript<QuickviewLayoutProps> = ({ column1, column2 }) => {
	return css({
		'& .ss__product-quickview__content': {
			padding: '20px',
			minWidth: '320px',
			maxWidth: '600px',
			position: 'relative',
			boxSizing: 'border-box',
		},
		// The module grid: a flex row of columns. Columns wrap on narrow viewports (single
		// column) and sit side-by-side once there's room (2-column on desktop).
		'& .ss__quickview-layout__row': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			alignItems: 'flex-start',
			gap: '24px',
			// Flex items default to `min-width: auto`, which prevents a child from shrinking below
			// its content's intrinsic width. For a row whose child is the media (an Image/Carousel),
			// that means the image renders at its natural width — overflowing a narrow container such
			// as the Slideout's single-column layout. Allow row children to shrink to the row width so
			// the image's `max-width: 100%` can take effect. Column children (c1/c2) keep their own
			// width rules, which win on specificity.
			'& > *': {
				minWidth: 0,
				maxWidth: '100%',
			},
		},
		'& .ss__quickview-layout__column': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			minWidth: 0,
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c1': {
			flex: column1?.width == 'auto' ? '1 1 auto' : `1 1 ${column1?.width}`,
			maxWidth: column1?.width == 'auto' ? 'auto' : column1?.width,
			alignContent: column1?.alignContent,
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c2': {
			flex: column2?.width == 'auto' ? '1 1 auto' : `1 1 ${column2?.width}`,
			maxWidth: column2?.width == 'auto' ? 'auto' : column2?.width,
			alignContent: column2?.alignContent,
		},
		'& .ss__product-quickview__media': {
			marginBottom: 0,
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
		'@media (min-width: 768px)': {
			'& .ss__product-quickview__content': {
				maxWidth: '880px',
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

export const QuickviewLayout = observer((properties: QuickviewLayoutProps) => {
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

	const defaultProps: Partial<QuickviewLayoutProps> = {
		treePath: globalTreePath,
		showBadges: false,
		layout: [['c1', 'c2']],
		column1: {
			layout: ['image'],
			width: '45%',
		},
		column2: {
			layout: ['title', 'price', 'variants', 'actions', 'description', 'attributes'],
			width: 'auto',
		},
	};

	const props = mergeProps('quickviewLayout', globalTheme, defaultProps, properties);
	const { controller, className, internalClassName, disableStyles, treePath, customComponent, showBadges, onReset, column1, column2 } = props;

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

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.quickview || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<QuickviewLayoutProps>(props, defaultStyles);

	if (!controller || controller.type !== 'quickview') {
		console.warn(`[QuickviewLayout] No controller provided; quickview cannot function without a QuickviewController instance.`);
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

	// Close is delegated to the container (Modal/Slideout) via onReset; fall back to the
	// store directly so the layout still works when rendered standalone.
	const onClose = onReset || (() => store.close());

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

	// The media region: a 1-per-view carousel when there are multiple images, otherwise the
	// single core image. Clicking opens the fullscreen gallery at the clicked index.
	const mediaContent = hasMultipleImages ? (
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

	// Module renderers. Each returns the corresponding region, or null when it has nothing to
	// show (so empty columns/rows collapse). Columns (c1/c2) recurse into their own layouts.
	const findModule = (module: ModuleNamesWithColumns): h.JSX.Element | null => {
		// new row
		if (typeof module !== 'string') {
			const children = module.map((subModule) => findModule(subModule));
			const hasContent = (module as string[]).some((subModule, i) => subModule !== '_' && children[i]);
			if (!hasContent) return null;
			return <div className="ss__quickview-layout__row">{children}</div>;
		}

		if (module == 'c1' && column1?.layout?.length) {
			const children = (column1.layout as ModuleNamesWithColumns[]).map((m) => findModule(m));
			const hasContent = (column1.layout as any[]).some((m, i) => (Array.isArray(m) ? Boolean(children[i]) : m !== '_' && Boolean(children[i])));
			if (!hasContent) return null;
			return <div className="ss__quickview-layout__column ss__quickview-layout__column--c1">{children}</div>;
		}
		if (module == 'c2' && column2?.layout?.length) {
			const children = (column2.layout as ModuleNamesWithColumns[]).map((m) => findModule(m));
			const hasContent = (column2.layout as any[]).some((m, i) => (Array.isArray(m) ? Boolean(children[i]) : m !== '_' && Boolean(children[i])));
			if (!hasContent) return null;
			return <div className="ss__quickview-layout__column ss__quickview-layout__column--c2">{children}</div>;
		}

		if (module == 'image') {
			if (!mediaContent || !product) return null;
			return (
				<div className="ss__product-quickview__media">
					{showBadges ? (
						<OverlayBadge result={product} controller={controller} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
							{mediaContent}
						</OverlayBadge>
					) : (
						mediaContent
					)}
					{showBadges && <CalloutBadge result={product} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />}
				</div>
			);
		}

		if (module == 'title') {
			if (!name) return null;
			return <div className="ss__product-quickview__title">{name}</div>;
		}

		if (module == 'price') {
			if (!price) return null;
			return (
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
			);
		}

		if (module == 'variants') {
			if (!selections || selections.length === 0) return null;
			return (
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
			);
		}

		if (module == 'actions') {
			return (
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
			);
		}

		if (module == 'description') {
			if (!description) return null;
			return <div className="ss__product-quickview__description" dangerouslySetInnerHTML={{ __html: description }} />;
		}

		if (module == 'attributes') {
			if (Object.keys(displayedAttributes).length === 0) return null;
			return (
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
			);
		}

		if (module == '_') {
			return <div className="ss__quickview-layout__separator"></div>;
		}

		return null;
	};

	let layout = props.layout;
	if (typeof layout === 'string') {
		controller.log.warn(`unsupported layout found. ${props.layout}`);
		layout = [];
	}

	const closeButton = (
		<Button
			internalClassName="ss__product-quickview__close"
			icon="close-thin"
			aria-label="Close quickview"
			onClick={() => onClose()}
			theme={props.theme}
			treePath={treePath}
			{...defined({ disableStyles })}
		/>
	);

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__quickview-layout', className, internalClassName)}>
				{error ? (
					<div className="ss__product-quickview__content">
						{closeButton}
						<div className="ss__product-quickview__error" role="alert">
							{error.message}
						</div>
					</div>
				) : loading ? (
					<div className="ss__product-quickview__content">
						{closeButton}
						<div className="ss__product-quickview__loading">Loading…</div>
					</div>
				) : product ? (
					<div className="ss__product-quickview__content">
						{closeButton}
						{(layout as ModuleNamesWithColumns[])?.map((module) => findModule(module))}
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
			</div>
		</CacheProvider>
	);
});

//can add modules here in the future
export type QuickviewModuleNames = 'image' | 'title' | 'price' | 'variants' | 'actions' | 'description' | 'attributes' | '_';
type ColumnsNames = 'c1' | 'c2';
type ModuleNamesWithColumns = QuickviewModuleNames | ColumnsNames | QuickviewModuleNames[] | ColumnsNames[];

export type QuickviewColumn = {
	layout: QuickviewModuleNames[][] | QuickviewModuleNames[];
	width: string | 'auto';
	alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
};

export type QuickviewLayoutProps = {
	controller: QuickviewController;
	onReset?: () => void;
} & QuickviewLayoutTemplatesLegalProps &
	ComponentProps<QuickviewLayoutProps>;

export type QuickviewLayoutTemplatesLegalProps = {
	// When true, overlay badges are shown over the media and callout badges below it. Opt-in (default false).
	showBadges?: boolean;
	layout?: ModuleNamesWithColumns[];
	column1?: QuickviewColumn;
	column2?: QuickviewColumn;
};
