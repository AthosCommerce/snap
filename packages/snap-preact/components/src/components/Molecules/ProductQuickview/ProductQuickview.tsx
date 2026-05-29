import { h } from 'preact';
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

import type { SearchController, AutocompleteController, RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<ProductQuickviewProps> = () => {
	return css({
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
		},
		'& .ss__product-quickview__title': {
			fontSize: '1.4em',
			marginBottom: '12px',
			paddingRight: '32px', // leave room for the close button
		},
		'& .ss__product-quickview__image': {
			display: 'block',
			maxWidth: '100%',
			marginBottom: '12px',
		},
		'& .ss__product-quickview__variants': {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			marginBottom: '12px',
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
		'& .ss__product-quickview__close': {
			position: 'absolute',
			top: '8px',
			right: '8px',
			background: 'transparent',
			border: 'none',
			fontSize: '1.4em',
			cursor: 'pointer',
			lineHeight: 1,
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

export const ProductQuickview = observer((properties: ProductQuickviewProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductQuickviewProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('productQuickview', globalTheme, defaultProps, properties);
	const { controller, result, className, internalClassName, disableStyles, treePath, customComponent } = props;

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
	const triggeringResultId: string | undefined = quickview?.triggeringResultId;
	const displayFields: string[] | undefined = quickview?.config?.displayFields;
	const error: { message: string; cause?: unknown } | undefined = quickview?.error;

	// Look up the display label for a field name from meta.facets[field].label.
	// Falls back to the raw field name when no meta entry exists.
	const metaFacets: Record<string, { label?: string } | undefined> | undefined = (controller.store as any)?.meta?.data?.facets;
	const labelFor = (field: string): string => metaFacets?.[field]?.label || field;

	// During loading or error the store may not have a product yet — scope by the
	// triggering result id instead. Once the product is set, scope by product id.
	const isOpen = Boolean(
		quickview?.isOpen &&
			(!result || ((loading || error) && !product && triggeringResultId === result.id) || (product?.id !== undefined && product.id === result.id))
	);

	// Prefer `product.display` so the displayed name/image/attributes reflect the
	// currently active variant (Mask-merged), falling back to the base product data.
	const core = product?.display?.mappings?.core || product?.mappings?.core;
	const name: string | undefined = core?.name;
	const image: string | undefined = core?.imageUrl || core?.thumbnailImageUrl;
	const allAttributes: Record<string, unknown> = product?.display?.attributes || product?.attributes || {};
	const displayedAttributes: Record<string, unknown> = displayFields
		? Object.fromEntries(displayFields.filter((k) => k in allAttributes).map((k) => [k, allAttributes[k]]))
		: allAttributes;
	const selections = product?.variants?.selections;

	const onClose = () => controller.closeQuickView();

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__product-quickview', className, internalClassName)}>
				<Modal open={isOpen} onOverlayClick={onClose} theme={props.theme} treePath={treePath} {...defined({ disableStyles })}>
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
							{name && <div className="ss__product-quickview__title">{name}</div>}
							{image && <img className="ss__product-quickview__image" src={image} alt={name || ''} />}
							{selections && selections.length > 0 && (
								<div className="ss__product-quickview__variants">
									{selections.map((selection) => (
										<VariantSelection
											key={selection.field}
											selection={selection}
											theme={props.theme}
											treePath={treePath}
											{...defined({ disableStyles })}
										/>
									))}
								</div>
							)}
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
} & ComponentProps<ProductQuickviewProps>;
