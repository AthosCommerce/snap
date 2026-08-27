import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Modal, ModalProps } from '../../Molecules/Modal';
import {
	QuickviewLayout,
	QuickviewLayoutProps,
	QuickviewTracker,
	QuickviewLayoutLang,
	QuickviewLayoutTemplatesLegalProps,
} from '../../Organisms/QuickviewLayout';

import type { QuickviewManager } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<QuickviewModalProps> = () => {
	return css({
		// Take the wrapper out of normal flow. The modal is injected into its own container at the
		// end of `<body>`, but a consumer may still render it inside a grid (e.g. as a sibling of a
		// result `<article>`), where in-flow it would occupy a cell and shift the layout when opened.
		// The modal's content and overlay are both `position: fixed`, so an absolute, zero-size
		// wrapper has no visual effect while keeping it out of any grid.
		position: 'absolute',
		width: 0,
		height: 0,

		// Override the underlying Modal's `.ss__modal__content` positioning so the quickview
		// is centered in the viewport rather than positioned relative to the source Result tile.
		// Modal's default is `position: absolute` inside its (relative) wrapper, which lives
		// inside the Results grid cell — that's why the modal was being clipped to a tile.
		// We compound the wrapper class (`&.ss__quickview`) into the selector to beat
		// Modal's same-specificity rule (which would otherwise win on source-order since
		// Modal's styles are emitted after ours), and use !important on the positioning
		// properties so theme overrides can't accidentally re-anchor the modal to its tile.
		'&.ss__quickview .ss__modal__content': {
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
		'&.ss__quickview .ss__modal__overlay': {
			zIndex: '10005 !important' as any,
		},
		// Below the desktop breakpoint (where QuickviewLayout stacks to a single column) the
		// modal spans the full viewport width instead of shrink-wrapping its content. The
		// wrapper class is compounded into the content selector so this beats QuickviewLayout's
		// same-specificity min/max width rule on the content div.
		'@media (max-width: 767px)': {
			'&.ss__quickview .ss__modal__content': {
				width: '100vw',
				maxWidth: '100vw',
				borderRadius: 0,
			},
			'&.ss__quickview .ss__quickview__content': {
				minWidth: 'auto',
				maxWidth: '100%',
			},
		},
	});
};

export const QuickviewModal = observer((properties: QuickviewModalProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<QuickviewModalProps> = {
		treePath: globalTreePath,
		hideBadge: false,
		layout: [['c1', 'c2']],
		column1: {
			layout: ['slideshow'],
			width: '45%',
		},
		column2: {
			layout: [
				['productDetail.mappings.core.name'],
				['calloutBadge'],
				['variantSelections'],
				['quantityPicker'],
				['button.add-to-cart'],
				['productDetail.mappings.core.description'],
				['productDetailTable'],
				['button.more-info'],
			],
			width: 'auto',
		},
	};

	const props = mergeProps('quickviewModal', globalTheme, defaultProps, properties);
	const {
		quickviewManager,
		className,
		internalClassName,
		disableStyles,
		treePath,
		layout,
		hideBadge,
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
		const isOpenNow = Boolean(quickviewManager?.store?.isOpen);
		if (isOpenNow && !wasOpenRef.current) {
			previousFocusRef.current = (document.activeElement as HTMLElement) || null;
			const closeEl = wrapperRef.current?.querySelector<HTMLElement>('.ss__quickview__close');
			closeEl?.focus();
		} else if (!isOpenNow && wasOpenRef.current) {
			previousFocusRef.current?.focus?.();
			previousFocusRef.current = null;
		}
		wasOpenRef.current = isOpenNow;
	});

	const styling = mergeStyles<QuickviewModalProps>(props, defaultStyles);

	if (!quickviewManager) {
		console.warn(`[QuickviewModal] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.`);
		return null;
	}

	const store = quickviewManager.store;
	const product = store.product as Product | undefined;
	const isOpen = Boolean(store.isOpen);
	const onClose = () => quickviewManager.close();

	const subProps: QuickviewModalSubProps = {
		quickviewLayout: {
			// default props
			onClose,
			...defined({ hideBadge, column1, column2, column3, column4, recommendation, lang }),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		modal: {
			onOverlayClick: onClose,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	// non-null: defaultProps always supplies a layout
	const layoutContent = <QuickviewLayout quickviewManager={quickviewManager} {...subProps.quickviewLayout} layout={layout!} />;

	return (
		<CacheProvider>
			{/* stopPropagation keeps clicks inside the quickview (close icon, overlay, content) from
			    reaching the AutocompleteController's document click handler, which would otherwise
			    unfocus and close an open autocomplete behind the modal. */}
			<div
				{...styling}
				ref={wrapperRef}
				className={classnames('ss__quickview', 'ss__quickview-modal', className, internalClassName)}
				onClick={(e) => e.stopPropagation()}
			>
				<Modal {...subProps.modal} open={isOpen}>
					{/* keyed by response/product so a product change while open remounts the tracker
					    and the new product's impression is observed and tracked */}
					{product ? (
						<QuickviewTracker key={`${product.responseId}-${product.id}`} quickviewManager={quickviewManager} product={product}>
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

interface QuickviewModalSubProps {
	quickviewLayout: Partial<QuickviewLayoutProps>;
	modal: Partial<ModalProps>;
}

export type QuickviewModalProps = {
	quickviewManager: QuickviewManager;
	lang?: Partial<QuickviewLayoutLang>;
	// `layout` is optional here (unlike on QuickviewLayout) because the container supplies a default
	layout?: QuickviewLayoutTemplatesLegalProps['layout'];
} & Omit<QuickviewLayoutTemplatesLegalProps, 'layout'> &
	Omit<ComponentProps, 'customComponent'>;
