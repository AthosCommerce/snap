import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SlideDirectionType, Slideout } from '../../Molecules/Slideout';
import { QuickviewLayout, QuickviewLayoutTemplatesLegalProps } from '../../Organisms/QuickviewLayout';

import type { QuickviewController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ProductQuickviewSlideoutProps> = () => {
	return css({
		// The wrapper sits out of flow; the Slideout itself is `position: fixed`. Keep its panel
		// and overlay above autocomplete (10002) like the Modal variant does.
		'& .ss__slideout': {
			zIndex: 10006,
		},
		'& .ss__slideout__overlay': {
			zIndex: '10005 !important' as any,
		},
		// Inside a single-column panel the content shouldn't be width-capped to the desktop modal size.
		'& .ss__product-quickview__content': {
			minWidth: 'auto',
			maxWidth: '100%',
		},
	});
};

export const ProductQuickviewSlideout = observer((properties: ProductQuickviewSlideoutProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductQuickviewSlideoutProps> = {
		treePath: globalTreePath,
		slideDirection: 'right',
		width: '500px',
		overlayColor: 'rgba(0,0,0,0.8)',
		layout: [['image'], ['title'], ['price'], ['variants'], ['actions'], ['description'], ['attributes']],
	};

	const props = mergeProps('productQuickviewSlideout', globalTheme, defaultProps, properties);
	const {
		controller,
		className,
		internalClassName,
		disableStyles,
		treePath,
		showBadges,
		layout,
		column1,
		column2,
		slideDirection,
		width,
		overlayColor,
	} = props;

	// Dialog focus management — see ProductQuickviewModal for the rationale (effect lives in the
	// always-mounted container so the restore-focus branch survives the open→close transition).
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

	const styling = mergeStyles<ProductQuickviewSlideoutProps>(props, defaultStyles);

	if (!controller || controller.type !== 'quickview') {
		console.warn(`[ProductQuickviewSlideout] No controller provided; quickview cannot function without a QuickviewController instance.`);
		return null;
	}

	const store = controller.store;
	const isOpen = Boolean(store.isOpen);
	const onClose = () => store.close();

	const layoutProps: Partial<QuickviewLayoutTemplatesLegalProps> = {
		...defined({ showBadges, layout, column1, column2 }),
	};

	return (
		<CacheProvider>
			<div
				{...styling}
				ref={wrapperRef}
				className={classnames('ss__product-quickview', 'ss__product-quickview-slideout', className, internalClassName)}
				onClick={(e) => e.stopPropagation()}
			>
				<Slideout
					active={isOpen}
					rerender={false}
					slideDirection={slideDirection}
					width={width}
					overlayColor={overlayColor}
					// Sync an overlay dismiss back to the store so `store.isOpen` stays the single source of truth.
					onToggle={(active) => {
						if (!active) onClose();
					}}
					theme={props.theme}
					treePath={treePath}
					{...defined({ disableStyles })}
				>
					<QuickviewLayout
						controller={controller}
						onReset={onClose}
						theme={props.theme}
						treePath={treePath}
						{...layoutProps}
						{...defined({ disableStyles })}
					/>
				</Slideout>
			</div>
		</CacheProvider>
	);
});

export type ProductQuickviewSlideoutProps = {
	controller: QuickviewController;
	slideDirection?: SlideDirectionType;
	width?: string;
	overlayColor?: string;
} & QuickviewLayoutTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;
