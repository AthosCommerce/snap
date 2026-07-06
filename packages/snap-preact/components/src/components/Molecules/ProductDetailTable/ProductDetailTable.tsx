import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { isObservableArray } from 'mobx';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import { ProductDetail, getProductFieldValue, renderDetailValue } from '../../Atoms/ProductDetail';
import { Price } from '../../Atoms/Price';
import { Image } from '../../Atoms/Image';
import { Rating } from '../Rating';

import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<ProductDetailTableProps> = () => {
	return css({
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
	});
};

export const ProductDetailTable = observer((properties: ProductDetailTableProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductDetailTableProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('productDetailTable', globalTheme, defaultProps, properties);

	const { result, details, disableStyles, className, internalClassName, customComponent, treePath } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.productDetailTable || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<ProductDetailTableProps>(props, defaultStyles);

	// Render only the configured details that resolve to a non-empty value (preserves the opt-in
	// behaviour: with no details, nothing renders).
	const displayedDetails = (details || []).filter((detail) => renderDetailValue(getProductFieldValue(result, detail.field)) !== '');

	if (displayedDetails.length === 0) return null;

	const renderValue = (detail: ProductDetailTableDetail): h.JSX.Element => {
		const rawValue = getProductFieldValue(result, detail.field);
		const componentProps = { theme: props.theme, treePath, ...defined({ disableStyles }) };

		switch (detail.type) {
			case 'price': {
				const value = Number(rawValue);
				if (!isNaN(value)) {
					return <Price value={value} {...componentProps} />;
				}
				break;
			}
			case 'rating': {
				const value = Number(rawValue);
				if (!isNaN(value)) {
					return <Rating value={value} {...componentProps} />;
				}
				break;
			}
			case 'image': {
				// An image field may resolve to an array of URLs — display the first.
				const src = Array.isArray(rawValue) || isObservableArray(rawValue as any) ? Array.from(rawValue as Iterable<unknown>)[0] : rawValue;
				if (typeof src === 'string' && src) {
					return <Image src={src} alt={detail.label || detail.field} {...componentProps} />;
				}
				break;
			}
			case 'html':
				return <ProductDetail result={result} field={detail.field} html={true} {...componentProps} />;
		}

		// 'text' (the default) — and the fallback when a typed value doesn't fit its type.
		return <ProductDetail result={result} field={detail.field} {...componentProps} />;
	};

	return (
		<CacheProvider>
			<table {...styling} className={classnames('ss__product-detail-table', className, internalClassName)}>
				<tbody>
					{displayedDetails.map((detail, index) => (
						<tr key={`${detail.field}-${index}`}>
							<th scope="row">{detail.label ?? detail.field}</th>
							<td>{renderValue(detail)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</CacheProvider>
	);
});

export type ProductDetailTableDetail = {
	// Explicit dot-path (e.g. `attributes.brand`) or bare field key resolved via `mappings.core` then `attributes`.
	field: string;
	// Display label (falls back to the raw field key).
	label?: string;
	// How to render the resolved value: `price` → Price, `rating` → Rating, `image` → Image,
	// `html` → rich HTML, `text` (default) → plain text via ProductDetail.
	type?: 'price' | 'image' | 'html' | 'rating' | 'text';
};

export type ProductDetailTableProps = {
	result?: Product;
} & ProductDetailTableTemplatesLegalProps &
	ComponentProps<ProductDetailTableProps>;

export type ProductDetailTableTemplatesLegalProps = {
	// The detail rows to display, in order.
	details?: ProductDetailTableDetail[];
};
