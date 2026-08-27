import { h, ComponentChildren } from 'preact';
import { useEffect, useRef, useState, type MutableRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { isObservableArray } from 'mobx';
import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { Lang, useA11y, useComponent, useCreateController, useCustomComponentOverride, useLang, useTracking } from '../../../hooks';
import { ComponentProps, StyleScript, JSXComponent } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { fieldNameToComponentName } from '@athoscommerce/snap-toolbox';
import { VariantSelection, VariantSelectionTemplatesLegalProps } from '../../Molecules/VariantSelection';
import { Slideshow } from '../../Molecules/Slideshow';
import { Button } from '../../Atoms/Button';
import { ProductDetail } from '../../Atoms/ProductDetail';
import { ProductDetailTable } from '../../Molecules/ProductDetailTable';
import { OverlayBadge } from '../../Molecules/OverlayBadge';
import { CalloutBadge } from '../../Molecules/CalloutBadge';
import { Gallery } from '../../Molecules/Gallery';
import { QuantityPicker } from '../../Molecules/QuantityPicker';

import type { Product, DisplayFieldConfig } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';
import type { RecommendationController, RecommendationControllerConfig, QuickviewManager } from '@athoscommerce/snap-controller';
import type { RecommendationProps, RecommendationGridProps } from '../../../';
import type { LibraryImports } from '../../../../../src/Templates/Stores/LibraryStore';

const defaultStyles: StyleScript<QuickviewLayoutProps> = ({ column1, column2, column3, column4 }) => {
	return css({
		'& .ss__quickview__content': {
			// extra top padding keeps the close button clear of top content (e.g. overlay badges)
			padding: '48px 20px 20px 20px',
			minWidth: '320px',
			maxWidth: '600px',
			position: 'relative',
			boxSizing: 'border-box',
		},
		// The module grid: a flex row of columns. Columns are full width below the desktop
		// breakpoint (single column) and use their configured widths side-by-side above it.
		'& .ss__quickview-layout__row': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			alignItems: 'flex-start',
			gap: '24px',
			// Flex items default to `min-width: auto`, which prevents a child from shrinking below
			// its content's intrinsic width. For a row whose child is the slideshow (an Image/Slideshow),
			// that means the image renders at its natural width — overflowing a narrow container such
			// as the Slideout's single-column layout. Allow row children to shrink to the row width so
			// the image's `max-width: 100%` can take effect. Column children (c1/c2) keep their own
			// width rules, which win on specificity.
			'& > *': {
				minWidth: 0,
				maxWidth: '100%',
			},
		},
		// Mobile-first: every column spans the full row width so a multi-column layout
		// stacks into a single column. Configured column widths apply at the desktop
		// breakpoint below.
		'& .ss__quickview-layout__column': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			minWidth: 0,
			flex: '1 1 100%',
			maxWidth: '100%',
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c1': {
			alignContent: column1?.alignContent,
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c2': {
			alignContent: column2?.alignContent,
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c3': {
			alignContent: column3?.alignContent,
		},
		'& .ss__quickview-layout__column.ss__quickview-layout__column--c4': {
			alignContent: column4?.alignContent,
		},
		// Modules whose element renders nothing (e.g. a ProductDetail resolving an absent field)
		// can leave an empty row/column in the DOM — hide it so the flex gap doesn't show.
		'& .ss__quickview-layout__column:empty, & .ss__quickview-layout__row:empty': {
			display: 'none',
		},
		// The `_` module: a flexible spacer that pushes its siblings apart.
		'& .ss__quickview-layout__separator': {
			flexGrow: 1,
			flexShrink: 1,
		},
		'& .ss__quickview__slideshow': {
			marginBottom: 0,
		},
		'& .ss__quickview__title': {
			fontSize: '1.4em',
			paddingRight: '32px', // leave room for the close button
		},
		'& .ss__quickview__variant': {
			marginBottom: '12px',
			// Slideshow centers its track when there are fewer swatches than slidesPerView — left-align instead.
			'& .ss__slideshow__track--centered': {
				justifyContent: 'flex-start',
			},
		},
		'& .ss__quickview__variant-title': {
			marginBottom: '6px',
			fontWeight: 600,
		},
		'& .ss__quickview__image': {
			display: 'block',
			maxWidth: '100%',
			marginBottom: '12px',
			cursor: 'zoom-in',
			'& img': {
				display: 'block',
				maxWidth: '100%',
			},
		},
		'& .ss__quickview__carousel': {
			// Slideshow defaults its slide images to objectFit:cover; the quickview hero image should
			// display uncropped at its natural aspect ratio instead.
			'& .ss__slideshow__slide img': {
				objectFit: 'contain',
				height: 'auto',
			},
			// Match the single-image zoom-in affordance (the clickable slide opens the lightbox).
			'& .ss__slideshow__slide--clickable': {
				cursor: 'zoom-in',
			},
			// Slideshow pins its nav buttons to width:10px; under a border-box reset the padding
			// collapses the content box and the arrow icon shrinks to nothing (a blank white box).
			// Let the buttons size to their icon so the prev/next angles actually render.
			'& .ss__slideshow__navigation .ss__button': {
				boxSizing: 'content-box',
				width: 'auto',
			},
		},
		'& .ss__quickview__variants': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			// Each layout entry is wrapped in a flex row whose children size to their content (no
			// flex-grow). Span the full row so the variant selectors — notably the swatch Slideshow,
			// whose track reserves `calc(100% - 60px)` for nav arrows and collapses to 0 width (hiding
			// every swatch) when its container is narrow — have room to render.
			width: '100%',
		},
		'& .ss__quickview__description': {
			lineHeight: 1.4,
		},
		'& .ss__quickview__close': {
			position: 'absolute',
			top: '12px',
			right: '12px',
			background: 'transparent',
			border: 'none',
			fontSize: '1.4em',
			cursor: 'pointer',
			lineHeight: 1,
			zIndex: 1,
		},
		'& .ss__quickview__loading': {
			padding: '40px',
			textAlign: 'center',
			minWidth: '200px',
		},
		'& .ss__quickview__error': {
			padding: '40px',
			textAlign: 'center',
			minWidth: '200px',
			color: '#b00020',
		},
		'@media (min-width: 768px)': {
			'& .ss__quickview__content': {
				maxWidth: '880px',
			},
			'& .ss__quickview-layout__column.ss__quickview-layout__column--c1': {
				flex: column1?.width == 'auto' ? '1 1 0' : `1 1 ${column1?.width}`,
				maxWidth: column1?.width == 'auto' ? 'none' : column1?.width,
			},
			'& .ss__quickview-layout__column.ss__quickview-layout__column--c2': {
				flex: column2?.width == 'auto' ? '1 1 0' : `1 1 ${column2?.width}`,
				maxWidth: column2?.width == 'auto' ? 'none' : column2?.width,
			},
			'& .ss__quickview-layout__column.ss__quickview-layout__column--c3': {
				flex: column3?.width == 'auto' ? '1 1 0' : `1 1 ${column3?.width}`,
				maxWidth: column3?.width == 'auto' ? 'none' : column3?.width,
			},
			'& .ss__quickview-layout__column.ss__quickview-layout__column--c4': {
				flex: column4?.width == 'auto' ? '1 1 0' : `1 1 ${column4?.width}`,
				maxWidth: column4?.width == 'auto' ? 'none' : column4?.width,
			},
		},
	});
};

// Coerce an image-list field value into an array of image URL strings.
// Handles real arrays and MobX observable arrays; anything else → [].
const toImageArray = (value: unknown): string[] => {
	if (Array.isArray(value) || isObservableArray(value as any)) {
		return Array.from(value as Iterable<unknown>).filter((v): v is string => typeof v === 'string' && v.length > 0);
	}
	return [];
};

// Collect every `recommendation.<profile>` profile the active `layout` will actually render. Walks
// the layout and, on a column token (`c1`..`c4`), descends into that column's layout — mirroring
// findModule, which only renders a column the layout references. Columns the layout never references
// are skipped so their profiles don't spawn phantom controllers/searches. Deduped + sorted so the
// per-profile hook calls below keep a stable count/order across renders.
const collectRecommendationProfiles = (layout: unknown, columns: Record<string, unknown>): string[] => {
	const profiles = new Set<string>();
	const visitedColumns = new Set<string>();
	const walk = (node: unknown): void => {
		if (typeof node === 'string') {
			if (node.startsWith('recommendation.')) {
				profiles.add(node.slice('recommendation.'.length));
			} else if (node in columns && !visitedColumns.has(node)) {
				visitedColumns.add(node);
				walk(columns[node]);
			}
		} else if (Array.isArray(node)) {
			node.forEach(walk);
		}
	};
	walk(layout);
	return Array.from(profiles).sort();
};

// Impression-tracking wrapper used by the quickview containers (QuickviewModal /
// QuickviewSlideout). Containers mount it keyed by response/product so each displayed
// product is observed and tracked once via the standard useTracking hook. Tracking goes through
// the manager, which delegates to the originating controller with `quickView: true` — that flag
// both marks the beacon event as a quickview view and gives it its own dedup slot, so the
// impression still sends for a product whose grid impression was already tracked on the same
// response. Click tracking is disabled — quickview interactions are not clickThroughs; only the
// "More info" button tracks one.
export const QuickviewTracker = ({
	quickviewManager,
	product,
	children,
}: {
	quickviewManager: QuickviewManager;
	product: Product;
	children: ComponentChildren;
}) => {
	const { trackingRef } = useTracking({ controller: quickviewManager, result: product, track: { click: false, options: { threshold: 0 } } });
	return (
		<div className="ss__quickview__tracker" ref={trackingRef as MutableRef<HTMLDivElement>}>
			{children}
		</div>
	);
};

export const QuickviewLayout = observer((properties: QuickviewLayoutProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	// Fullscreen image gallery (lightbox) state. Declared before any conditional return so hook
	// order stays stable.
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	// Mirrors galleryOpen for the useA11y escape callback, which binds once per content element
	// and would otherwise capture a stale value.
	const galleryOpenRef = useRef(false);
	galleryOpenRef.current = galleryOpen;
	const openGallery = (i: number) => {
		setGalleryIndex(i);
		setGalleryOpen(true);
	};

	const defaultProps: Partial<QuickviewLayoutProps> = {
		treePath: globalTreePath,
		hideBadge: false,
	};

	const props = mergeProps('quickviewLayout', globalTheme, defaultProps, properties);
	const { quickviewManager, className, internalClassName, disableStyles, treePath, hideBadge, column1, column2, column3, column4, recommendation } =
		props;

	// NOTE: the `!shouldRenderDefault` return lives below the last hook call — every hook in this
	// component must run unconditionally on every render (shouldRenderDefault can flip while
	// mounted, e.g. when a pending customComponent import resolves or fails).
	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('quickview', props);

	//initialize lang
	const defaultLang = {
		quickview: {
			attributes: {
				'aria-label': 'Quickview',
			},
		},
		closeButton: {
			attributes: {
				'aria-label': 'Close quickview',
			},
		},
		addToCartButton: {
			value: 'Add to Cart',
		},
		moreInfoButton: {
			value: 'More info',
		},
		loadingText: {
			value: 'Loading…',
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		quickviewManager,
	});

	// Hoist the slide-sync inputs before any conditional return so the hooks below
	// are unconditional. All reads use optional chaining and safely produce defaults when
	// the manager/product are absent.
	const product = quickviewManager?.store?.product as Product | undefined;
	const core = product?.display?.mappings?.core || product?.mappings?.core;
	const image: string | undefined = core?.imageUrl || core?.thumbnailImageUrl;
	// Resolve the image-list field. `config.imagesField` accepts a single field name or an
	// array of candidate names; when omitted it defaults to trying 'images' then 'ss_images'.
	// Each candidate is looked up on mappings.core first, then attributes; the first that
	// resolves to MORE THAN ONE image wins and is rendered as a 1-per-view slideshow. If none
	// qualify, the modal falls back to the single core image below.
	const configuredImagesField = quickviewManager?.store?.resolvedConfig?.imagesField;
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
	// for the slideshow. If the variant has no multi-image field, show just its single
	// imageUrl (no slideshow) rather than falling back to the parent's array — the parent
	// images may depict other variants and would be misleading.
	const variantImageList: string[] = activeVariant ? resolveImages(variantCore, variantAttributes) : [];
	const parentImageList: string[] = resolveImages(coreRecord, allAttributes);
	const imageList: string[] = activeVariant ? (variantImageList.length > 1 ? variantImageList : []) : parentImageList;
	const hasMultipleImages = imageList.length > 1;
	// When a variant is active, find its image in the slideshow so we can navigate to the
	// correct slide instead of always staying on slide 0.
	let targetSlide = 0;
	if (activeVariant && hasMultipleImages && image) {
		const idx = imageList.indexOf(image);
		if (idx >= 0) targetSlide = idx;
	}

	// Escape closes the quickview — unless the fullscreen gallery is layered on top,
	// in which case Gallery's own Escape handler closes the gallery first.
	// This window listener is the fallback for when focus sits outside the content focus
	// trap (useA11y on the content div handles Escape — with stopPropagation — when focus
	// is within it).
	useEffect(() => {
		const isOpenNow = Boolean(quickviewManager?.store?.isOpen);
		if (!shouldRenderDefault || !isOpenNow) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && !galleryOpen) {
				quickviewManager.close();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [shouldRenderDefault, quickviewManager?.store?.isOpen, galleryOpen]);

	// Recommendation modules. `findModule` runs inside .map()/recursion and must not call hooks, so
	// resolve every referenced profile's controller + components here (stable order) and let
	// findModule read from this map. Mirrors Organisms/NoResults.
	// The profile list and template availability are frozen on mount: the per-profile hook calls
	// below must keep a stable count/order for the lifetime of this instance, and a responsive
	// theme override could otherwise change the list while mounted. Profiles added by such a
	// change render only after a remount.
	const recommendationProfiles = useRef(
		collectRecommendationProfiles(props.layout, {
			c1: column1?.layout,
			c2: column2?.layout,
			c3: column3?.layout,
			c4: column4?.layout,
		})
	).current;

	type RecEntry = {
		Component?: (p: RecommendationProps | RecommendationGridProps) => h.JSX.Element | null;
		ResultComponent?: JSXComponent;
		recsController?: RecommendationController;
	};
	const recsByProfile = new Map<string, RecEntry>();
	const snapTemplates = snap as SnapTemplates;
	const hasTemplates = useRef(Boolean(snapTemplates?.templates)).current;

	// only resolve component names when the layout actually references a `recommendation.<profile>`
	const hasRecommendationModules = recommendationProfiles.length > 0;
	const componentName = hasTemplates && hasRecommendationModules ? recommendation?.component || 'Recommendation' : undefined;
	const resultComponentName = hasTemplates && hasRecommendationModules ? ((recommendation?.resultComponent || 'Result') as string) : undefined;

	const ResultComponent = useComponent(snapTemplates?.templates?.library.import.component.result || {}, resultComponentName).ComponentOverride;
	const Component = useComponent(snapTemplates?.templates?.library.import.component.recommendation.default || {}, componentName).ComponentOverride;

	for (const profile of recommendationProfiles) {
		const mergedConfig = Object.assign({ id: '', tag: profile, branch: 'production' }, recommendation?.config) as RecommendationControllerConfig & {
			id: string;
		};
		mergedConfig.tag = profile; // the module name always wins for tag
		mergedConfig.id = mergedConfig.id || `quickview-${profile}`;

		const recsController = hasTemplates ? useCreateController<RecommendationController>(snapTemplates, 'recommendation', mergedConfig) : undefined;

		recsByProfile.set(profile, {
			Component: Component as RecEntry['Component'],
			ResultComponent,
			recsController,
		});
	}

	// Seed each recommendation with the currently-viewed product and (re)search when it changes.
	// The controllers are resolved once by id (useCreateController), so the seed is applied here.
	const recommendationSeed = ((core as Record<string, unknown> | undefined)?.parentId as string | undefined) || product?.id;
	// useCreateController resolves its controller asynchronously — on the render where this effect first
	// runs the controllers are still undefined. Key the effect on which profiles have a resolved controller
	// so it re-runs (and finally seeds + searches) once they resolve; otherwise the search is skipped and
	// never retried because the seed/profile deps don't change after mount.
	const resolvedRecsKey = recommendationProfiles.map((profile) => (recsByProfile.get(profile)?.recsController ? profile : '')).join(',');
	// The seed each controller was last searched with. The effect re-runs whenever ANOTHER
	// profile's controller resolves (resolvedRecsKey), so without this an already-seeded
	// controller would get search() called again — re-firing middleware and re-sending the
	// render beacon.
	const seededRecsRef = useRef(new Map<string, string>());
	useEffect(() => {
		if (!shouldRenderDefault || !recommendationSeed) return;
		recsByProfile.forEach(({ recsController }) => {
			if (!recsController) return;
			if (seededRecsRef.current.get(recsController.config.id) === recommendationSeed) return;
			seededRecsRef.current.set(recsController.config.id, recommendationSeed);
			recsController.config.globals = { ...recsController.config.globals, products: [recommendationSeed] };
			recsController.search();
		});
		// recsByProfile is rebuilt each render but holds the same (memoized) controller instances;
		// re-run when the seed, the set of profiles, or the set of resolved controllers changes.
	}, [shouldRenderDefault, recommendationSeed, recommendationProfiles.join(','), resolvedRecsKey]);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const styling = mergeStyles<QuickviewLayoutProps>(props, defaultStyles);

	if (!quickviewManager) {
		console.warn(`[QuickviewLayout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.`);
		return null;
	}

	const store = quickviewManager.store;
	const loading = Boolean(store.loading);
	const configuredDisplayFields = store.resolvedConfig?.displayFields;
	const displayFields: DisplayFieldConfig[] | undefined =
		typeof configuredDisplayFields === 'function' ? (product ? configuredDisplayFields(product) : undefined) : configuredDisplayFields;
	const error: { message: string; cause?: unknown } | undefined = store.error;

	// Look up the display label for a field name from meta.facets[field].label.
	// Falls back to the raw field name when no meta entry exists.
	const metaFacets = quickviewManager.sourceController?.store.meta?.data?.facets as Record<string, { label?: string } | undefined> | undefined;
	const labelFor = (field: string): string => metaFacets?.[field]?.label || field;

	// Close is delegated to the container (Modal/Slideout) via onClose; fall back to the
	// manager directly so the layout still works when rendered standalone.
	const onClose = () => {
		quickviewManager.close();
		props.onClose && props.onClose();
	};

	// Escape inside the focus trap: the gallery layers above the quickview, so close it
	// first; otherwise close the quickview itself.
	const handleEscape = () => {
		if (galleryOpenRef.current) {
			setGalleryOpen(false);
		} else {
			onClose();
		}
	};

	// Dialog semantics + focus trap for the quickview content, following the autocomplete
	// containers (AutocompleteModal/AutocompleteSlideout): useA11y traps Tab within the
	// content and wires Escape to the callback above.
	const contentProps = {
		className: 'ss__quickview__content',
		role: 'dialog' as const,
		'aria-modal': 'true' as const,
		ref: (e: HTMLDivElement | null) => useA11y(e, 0, true, handleEscape),
		...mergedLang.quickview?.attributes,
	};

	// Prefer `product.display` so the displayed name/image/attributes reflect the
	// currently active variant (Mask-merged), falling back to the base product data.
	const name: string | undefined = core?.name;
	const url: string | undefined = core?.url;

	const selections = product?.variants?.selections;

	// Images shown in the fullscreen gallery: the multi-image list when present, otherwise the
	// single core image (so clicking a lone image still opens the zoomable gallery).
	const galleryImages: string[] = hasMultipleImages ? imageList : image ? [image] : [];

	// Prepare slides for the slideshow. Use imageList when available, otherwise use the single image.
	const slidesData = hasMultipleImages ? imageList : image ? [image] : [];
	const hasSingleImage = slidesData.length === 1;

	// The slideshow region: always use Slideshow component. When there's only one image, hide navigation and pagination.
	// Clicking a slide opens the fullscreen gallery at that index. When the active variant changes,
	// `startIndex` navigates to the variant's image without remounting.
	const slideshowContent =
		slidesData.length > 0 ? (
			<Slideshow
				className="ss__quickview__carousel"
				startIndex={targetSlide}
				slidesToShow={1}
				slidesToMove={1}
				showNavigation={!hasSingleImage}
				overlayNavigation={true}
				showPagination={!hasSingleImage}
				loop={false}
				slides={slidesData.map((src, i) => ({
					src,
					alt: name || '',
					onClick: () => openGallery(i),
				}))}
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
		if (module == 'c3' && column3?.layout?.length) {
			const children = (column3.layout as ModuleNamesWithColumns[]).map((m) => findModule(m));
			const hasContent = (column3.layout as any[]).some((m, i) => (Array.isArray(m) ? Boolean(children[i]) : m !== '_' && Boolean(children[i])));
			if (!hasContent) return null;
			return <div className="ss__quickview-layout__column ss__quickview-layout__column--c3">{children}</div>;
		}
		if (module == 'c4' && column4?.layout?.length) {
			const children = (column4.layout as ModuleNamesWithColumns[]).map((m) => findModule(m));
			const hasContent = (column4.layout as any[]).some((m, i) => (Array.isArray(m) ? Boolean(children[i]) : m !== '_' && Boolean(children[i])));
			if (!hasContent) return null;
			return <div className="ss__quickview-layout__column ss__quickview-layout__column--c4">{children}</div>;
		}

		if (module == 'slideshow') {
			if (!slideshowContent || !product) return null;
			return (
				<div className="ss__quickview__slideshow">
					{hideBadge ? (
						slideshowContent
					) : (
						<OverlayBadge
							result={product}
							controller={quickviewManager.sourceController!}
							theme={props.theme}
							treePath={treePath}
							{...defined({ disableStyles })}
						>
							{slideshowContent}
						</OverlayBadge>
					)}
				</div>
			);
		}

		// `calloutBadge` renders badges at the default tag; `calloutBadge.<tag>` renders badges
		// at a custom tag location (e.g. `calloutBadge.callout-secondary`).
		if (module == 'calloutBadge' || module.startsWith('calloutBadge.')) {
			if (!product) return null;
			const tag = module.startsWith('calloutBadge.') ? module.slice('calloutBadge.'.length) : undefined;
			return <CalloutBadge result={product} theme={props.theme} treePath={treePath} {...defined({ disableStyles, tag })} />;
		}

		// `productDetail.<path>` renders a single product field resolved from an explicit dot-path
		// (e.g. `productDetail.mappings.core.name` or `productDetail.attributes.brand`). The product
		// name is the "title", the `description` field renders as rich HTML; any other field renders
		// as text. ProductDetail resolves the path and returns null when empty.
		if (module.startsWith('productDetail.')) {
			const path = module.slice('productDetail.'.length);
			const field = path.split('.').pop() || '';
			if (!path || !product) return null;
			// Preserve the legacy quickview classnames so existing styles/themes/tests keep matching.
			const legacyClass =
				field === 'name' ? 'ss__quickview__title' : field === 'description' ? 'ss__quickview__description' : `ss__quickview__${field}`;
			return (
				<ProductDetail
					result={product}
					field={path}
					html={field === 'description'}
					className={legacyClass}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			);
		}

		// `variantSelections` renders every variant selection; `variantSelection.<field>` renders only
		// the selection whose field matches (e.g. `variantSelection.color`). The field also matches its
		// component-name form (`color_family` → `color-family`). A bare `variantSelection` module is
		// not supported.
		if (module == 'variantSelections') {
			if (!selections || selections.length === 0) return null;
			return (
				<div className="ss__quickview__variants">
					{selections.map((selection) => (
						<div key={selection.field} className="ss__quickview__variant">
							<div className="ss__quickview__variant-title">{selection.label || selection.field}</div>
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

		if (module.startsWith('variantSelection.')) {
			const name = module.slice('variantSelection.'.length);
			const selection = selections?.find((selection) => selection.field === name || fieldNameToComponentName(selection.field) === name);
			if (!name || !selection) return null;
			return (
				<div className="ss__quickview__variant">
					<div className="ss__quickview__variant-title">{selection.label || selection.field}</div>
					<VariantSelection
						selection={selection}
						type={selection.type as VariantSelectionTemplatesLegalProps['type']}
						theme={props.theme}
						treePath={treePath}
						{...defined({ disableStyles })}
					/>
				</div>
			);
		}

		if (module == 'button.add-to-cart') {
			if (!product) return null;
			return (
				<Button
					name="add-to-cart"
					internalClassName="ss__quickview__add-to-cart"
					lang={{ button: lang.addToCartButton }}
					onClick={() => product && quickviewManager.addToCart([product])}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			);
		}

		if (module == 'button.more-info') {
			if (!url) return null;
			return (
				<Button
					name="more-info"
					internalClassName="ss__quickview__go-to-product"
					lang={{ button: lang.moreInfoButton }}
					onClick={(e) => {
						// track the redirect to the product page as a quickview clickThrough
						// before navigating away (delegated with `quickView: true`)
						if (product) {
							quickviewManager.track.product.clickThrough(e as unknown as MouseEvent, product);
						}
						window.location.href = url;
					}}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			);
		}

		// `quantityPicker` binds to the observable `product.quantity`, which `button.add-to-cart`
		// (via the cart store) picks up when the product is added.
		if (module == 'quantityPicker') {
			if (!product) return null;
			return (
				<QuantityPicker
					internalClassName="ss__quickview__quantity-picker"
					value={product.quantity}
					onChange={(e, value) => (product.quantity = value)}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			);
		}

		if (module == 'productDetailTable') {
			if (!product) return null;
			// Label precedence: explicit config label, then the meta facet label, then the raw field key.
			const labeledFields = (displayFields || []).map((detail) => ({ ...detail, label: detail.label ?? labelFor(detail.field) }));
			return (
				<ProductDetailTable
					result={product}
					displayFields={labeledFields}
					className="ss__quickview__attributes"
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				/>
			);
		}

		if (module.startsWith('recommendation.')) {
			const profile = module.slice('recommendation.'.length);
			const entry = recsByProfile.get(profile);
			const RecComponent = entry?.Component;
			const recsController = entry?.recsController;
			if (!RecComponent || !recsController?.store?.loaded) return null;
			return (
				<div className="ss__quickview__recommendations">
					<RecComponent
						controller={recsController}
						title={recsController.store?.profile?.display?.templateParameters?.title}
						resultComponent={entry?.ResultComponent}
						name={profile}
					/>
				</div>
			);
		}

		if (module == '_') {
			return <div className="ss__quickview-layout__separator"></div>;
		}

		return null;
	};

	let layout = props.layout;
	if (typeof layout === 'string') {
		quickviewManager.sourceController?.log.warn(`unsupported layout found. ${props.layout}`);
		layout = [];
	}

	const closeButton = (
		<Button
			name="close"
			internalClassName="ss__quickview__close"
			icon="close-thin"
			lang={{ button: lang.closeButton }}
			onClick={() => onClose()}
			theme={props.theme}
			treePath={treePath}
			{...defined({ disableStyles })}
		/>
	);

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__quickview-layout', className, internalClassName)}>
				{/* The dialog div only exists while there is something to show — the Slideout keeps
				    children mounted while closed, and an empty `aria-modal` dialog would tell
				    assistive tech the rest of the page is inert. */}
				{error || loading || product ? (
					<div {...contentProps}>
						{closeButton}
						{error ? (
							<div className="ss__quickview__error" role="alert">
								{error.message}
							</div>
						) : loading ? (
							<div className="ss__quickview__loading" {...mergedLang.loadingText?.all}></div>
						) : (
							<>
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
							</>
						)}
					</div>
				) : null}
			</div>
		</CacheProvider>
	);
});

//can add modules here in the future
export type QuickviewModuleNames =
	| 'slideshow'
	| 'calloutBadge'
	| `calloutBadge.${string}`
	| 'variantSelections'
	| `variantSelection.${string}`
	| `productDetail.${string}`
	| 'button.add-to-cart'
	| 'button.more-info'
	| 'quantityPicker'
	| 'productDetailTable'
	| `recommendation.${string}`
	| '_';
type ColumnsNames = 'c1' | 'c2' | 'c3' | 'c4';
type ModuleNamesWithColumns = QuickviewModuleNames | ColumnsNames | QuickviewModuleNames[] | ColumnsNames[];

export type QuickviewColumn = {
	layout: QuickviewModuleNames[][] | QuickviewModuleNames[];
	width: string | 'auto';
	alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
};

export type QuickviewLayoutProps = {
	quickviewManager: QuickviewManager;
	onClose?: () => void;
	lang?: Partial<QuickviewLayoutLang>;
} & QuickviewLayoutTemplatesLegalProps &
	ComponentProps<QuickviewLayoutProps>;

export interface QuickviewLayoutLang {
	quickview: Lang<{
		quickviewManager: QuickviewManager;
	}>;
	closeButton: Lang<never>;
	addToCartButton: Lang<never>;
	moreInfoButton: Lang<never>;
	loadingText: Lang<{
		quickviewManager: QuickviewManager;
	}>;
}

export type QuickviewLayoutTemplatesLegalProps = {
	layout: ModuleNamesWithColumns[];
	hideBadge?: boolean;
	column1?: QuickviewColumn;
	column2?: QuickviewColumn;
	column3?: QuickviewColumn;
	column4?: QuickviewColumn;
	recommendation?: {
		component?: keyof LibraryImports['component']['recommendation']['default'];
		resultComponent?: keyof LibraryImports['component']['result'] | (string & NonNullable<unknown>);
		config?: Partial<RecommendationControllerConfig>;
	};
};
