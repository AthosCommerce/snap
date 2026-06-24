import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import { ProductDetail, getProductFieldValue, renderDetailValue } from '../../Atoms/ProductDetail';

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

	const { result, fields, labels, disableStyles, className, internalClassName, customComponent, treePath } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.productDetailTable || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<ProductDetailTableProps>(props, defaultStyles);

	// Render only the configured fields that resolve to a non-empty value (preserves the opt-in
	// behaviour: with no fields, nothing renders).
	const displayedFields = (fields || []).filter((field) => renderDetailValue(getProductFieldValue(result, field)) !== '');

	if (displayedFields.length === 0) return null;

	return (
		<CacheProvider>
			<table {...styling} className={classnames('ss__product-detail-table', className, internalClassName)}>
				<tbody>
					{displayedFields.map((field) => (
						<tr key={field}>
							<th scope="row">{labels?.[field] ?? field}</th>
							<td>
								<ProductDetail result={result} field={field} name={field} theme={props.theme} treePath={treePath} {...defined({ disableStyles })} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</CacheProvider>
	);
});

export type ProductDetailTableProps = {
	result?: Product;
} & ProductDetailTableTemplatesLegalProps &
	ComponentProps<ProductDetailTableProps>;

export type ProductDetailTableTemplatesLegalProps = {
	// The detail fields to display, in order. Each is an explicit dot-path (e.g. `attributes.brand`).
	fields?: string[];
	// Optional map of field key -> display label (falls back to the raw field key).
	labels?: Record<string, string>;
};
