import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SlideDirectionType, Slideout, SlideoutProps } from '../../Molecules/Slideout';
import {
	QuickviewLayout,
	QuickviewLayoutProps,
	QuickviewTracker,
	QuickviewLayoutLang,
	QuickviewLayoutTemplatesLegalProps,
} from '../../Organisms/QuickviewLayout';

import type { QuickviewManager } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<QuickviewSlideoutProps> = () => {
	return css({
		// The wrapper sits out of flow; the Slideout itself is `position: fixed`. Keep its panel
		// and overlay above autocomplete (10002) like the Modal variant does.
		'& .ss__slideout': {
			zIndex: 10006,
		},
		'& .ss__slideout__overlay': {
			zIndex: '10005 !important' as any,
		},
		// Content sizing/padding for the slideout surface — owned here (not by QuickviewLayout) so
		// other surfaces don't inherit it. Inside a single-column panel the content is not
		// width-capped to the desktop modal size.
		'& .ss__quickview__content': {
			// extra top padding keeps the close button clear of top content (e.g. overlay badges)
			padding: '48px 20px 20px 20px',
			minWidth: 'auto',
			maxWidth: '100%',
			position: 'relative',
			boxSizing: 'border-box',
		},
	});
};

export const QuickviewSlideout = observer((properties: QuickviewSlideoutProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<QuickviewSlideoutProps> = {
		treePath: globalTreePath,
		slideDirection: 'right',
		width: '500px',
		overlayColor: 'rgba(0,0,0,0.8)',
		hideBadge: false,
		layout: [
			['slideshow'],
			['productDetail.mappings.core.name'],
			['calloutBadge'],
			['variantSelections'],
			['quantityPicker'],
			['button.add-to-cart'],
			['productDetail.mappings.core.description'],
			['productDetailTable'],
			['button.more-info'],
		],
	};

	const props = mergeProps('quickviewSlideout', globalTheme, defaultProps, properties);
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
		slideDirection,
		width,
		overlayColor,
		lang,
	} = props;

	// painted state used to ensure transition works with dynamic loading
	const [painted, setPainted] = useState(false);
	useEffect(() => {
		setPainted(true);
	}, []);

	// Dialog focus management — see QuickviewModal for the rationale (effect lives in the
	// always-mounted container so the restore-focus branch survives the open→close transition).
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const previousFocusRef = useRef<HTMLElement | null>(null);
	const wasOpenRef = useRef(false);

	useEffect(() => {
		const isOpenNow = Boolean(quickviewManager?.store?.isOpen) && painted;
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

	const styling = mergeStyles<QuickviewSlideoutProps>(props, defaultStyles);

	if (!quickviewManager) {
		console.warn(`[QuickviewSlideout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.`);
		return null;
	}

	const store = quickviewManager.store;
	const product = store.product as Product | undefined;
	const isOpen = Boolean(store.isOpen) && painted;
	const onClose = () => quickviewManager.close();

	const subProps: QuickviewSlideoutSubProps = {
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
		slideout: {
			// default props
			rerender: false,
			slideDirection: slideDirection,
			width: width,
			overlayColor: overlayColor,
			// Sync an overlay dismiss back to the store so `store.isOpen` stays the single source of truth.
			onChange: (active: boolean) => {
				if (!active) onClose();
			},
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
			<div
				{...styling}
				ref={wrapperRef}
				className={classnames('ss__quickview', 'ss__quickview-slideout', className, internalClassName)}
				onClick={(e) => e.stopPropagation()}
			>
				<Slideout {...subProps.slideout} active={isOpen}>
					{/* keyed by response/product so a product change remounts the tracker and the new
					    product's impression is observed and tracked (the Slideout keeps children
					    mounted across open/close since rerender is false) */}
					{product ? (
						<QuickviewTracker key={`${product.responseId}-${product.id}`} quickviewManager={quickviewManager} product={product}>
							{layoutContent}
						</QuickviewTracker>
					) : (
						layoutContent
					)}
				</Slideout>
			</div>
		</CacheProvider>
	);
});

interface QuickviewSlideoutSubProps {
	quickviewLayout: Partial<QuickviewLayoutProps>;
	slideout: Partial<SlideoutProps>;
}

export type QuickviewSlideoutProps = {
	quickviewManager: QuickviewManager;
	slideDirection?: SlideDirectionType;
	width?: string;
	overlayColor?: string;
	lang?: Partial<QuickviewLayoutLang>;
	// `layout` is optional here (unlike on QuickviewLayout) because the container supplies a default
	layout?: QuickviewLayoutTemplatesLegalProps['layout'];
} & Omit<QuickviewLayoutTemplatesLegalProps, 'layout'> &
	Omit<ComponentProps, 'customComponent'>;
