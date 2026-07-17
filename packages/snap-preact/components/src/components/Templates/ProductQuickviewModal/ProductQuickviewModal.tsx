import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Modal } from '../../Molecules/Modal';
import { QuickviewLayout, QuickviewTracker, QuickviewLayoutLang, QuickviewLayoutTemplatesLegalProps } from '../../Organisms/QuickviewLayout';

import type { QuickviewController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ProductQuickviewModalProps> = () => {
	return css({
		// Take the wrapper out of normal flow. `Result` renders this template as a sibling of the
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
		// Below the desktop breakpoint (where QuickviewLayout stacks to a single column) the
		// modal spans the full viewport width instead of shrink-wrapping its content. The
		// wrapper class is compounded into the content selector so this beats QuickviewLayout's
		// same-specificity min/max width rule on the content div.
		'@media (max-width: 767px)': {
			'&.ss__product-quickview .ss__modal__content': {
				width: '100vw',
				maxWidth: '100vw',
				borderRadius: 0,
			},
			'&.ss__product-quickview .ss__product-quickview__content': {
				minWidth: 'auto',
				maxWidth: '100%',
			},
		},
	});
};

export const ProductQuickviewModal = observer((properties: ProductQuickviewModalProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductQuickviewModalProps> = {
		treePath: globalTreePath,
		disabledOverlayBadges: false,
	};

	const props = mergeProps('productQuickviewModal', globalTheme, defaultProps, properties);
	const {
		controller,
		className,
		internalClassName,
		disableStyles,
		treePath,
		layout,
		disabledOverlayBadges,
		column1,
		column2,
		column3,
		column4,
		recommendation,
		lang,
	} = props;

	// Dialog focus management: remember what had focus before the modal opened, move focus to
	// the close button on open, and restore on close. This lives in the container (not the
	// layout) because the layout unmounts when the Modal closes — only the always-mounted
	// container can run the restore-focus branch on the open→close transition.
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

	const styling = mergeStyles<ProductQuickviewModalProps>(props, defaultStyles);

	if (!controller || controller.type !== 'quickview') {
		console.warn(`[ProductQuickviewModal] No controller provided; quickview cannot function without a QuickviewController instance.`);
		return null;
	}

	const store = controller.store;
	const isOpen = Boolean(store.isOpen);
	const onClose = () => store.close();
	const product = store.product;

	const layoutProps: Partial<QuickviewLayoutTemplatesLegalProps> & { lang?: Partial<QuickviewLayoutLang> } = {
		...defined({ layout, disabledOverlayBadges, column1, column2, column3, column4, recommendation, lang }),
	};

	const layoutContent = (
		<QuickviewLayout
			controller={controller}
			onReset={onClose}
			theme={props.theme}
			treePath={treePath}
			{...layoutProps}
			{...defined({ disableStyles })}
		/>
	);

	return (
		<CacheProvider>
			{/* stopPropagation keeps clicks inside the quickview (close icon, overlay, content) from
			    reaching the AutocompleteController's document click handler, which would otherwise
			    unfocus and close an open autocomplete behind the modal. */}
			<div
				{...styling}
				ref={wrapperRef}
				className={classnames('ss__product-quickview', 'ss__product-quickview-modal', className, internalClassName)}
				onClick={(e) => e.stopPropagation()}
			>
				{/* lockScroll is disabled: Modal's scroll-lock toggles `body { overflow: hidden }`,
				    which removes the page scrollbar and reflows the results wider by the scrollbar
				    width when the modal opens. The fixed full-viewport overlay already masks the
				    background and the fixed-centered content stays put, so locking isn't needed. */}
				<Modal open={isOpen} lockScroll={false} onOverlayClick={onClose} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
					{/* keyed by response/product so a product change while open remounts the tracker
					    and the new product's impression is observed and tracked */}
					{product ? (
						<QuickviewTracker key={`${product.responseId}-${product.id}`} controller={controller} product={product}>
							{layoutContent}
						</QuickviewTracker>
					) : (
						layoutContent
					)}
				</Modal>
			</div>
		</CacheProvider>
	);
});

export type ProductQuickviewModalProps = {
	controller: QuickviewController;
	lang?: Partial<QuickviewLayoutLang>;
} & QuickviewLayoutTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;
