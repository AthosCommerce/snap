import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { isObservableArray } from 'mobx';

import { Theme, useTheme, CacheProvider, useSnap, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import { fieldNameToComponentName } from '@athoscommerce/snap-toolbox';
import { Price } from '../Price';

import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';

// Core mapping fields whose values represent monetary amounts and should be formatted by `Price`.
const CORE_PRICE_FIELDS = ['price', 'msrp'];

// A field is a core-mapping price when its final segment is a known price field and it resolves
// from core mappings — either a bare key (which falls back to `mappings.core`) or an explicit
// `...mappings.core.<priceField>` path. `attributes.price` and the like are excluded.
export const isCorePriceField = (field: string): boolean => {
	if (!field) return false;

	const segments = field.split('.');
	const last = segments[segments.length - 1];
	if (!CORE_PRICE_FIELDS.includes(last)) return false;

	if (segments.length === 1) return true;

	return segments[segments.length - 2] === 'core' && segments[segments.length - 3] === 'mappings';
};

// Resolve a product field value. An explicit dot-path (e.g. `mappings.core.name` or
// `attributes.brand`) states exactly where to read from and is resolved against the variant-aware
// `display` view first, then the product itself. A bare field key (no dot) falls back to the
// legacy lookup — `mappings.core` first, then `attributes` — so config-driven field lists keep
// working. Returns the raw value (string, number, array, object); formatting is left to
// `renderDetailValue`.
export const getProductFieldValue = (result: Product | undefined, field: string): unknown => {
	if (!result || !field) return undefined;

	const resolvePath = (root: unknown): unknown =>
		field.split('.').reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined), root);

	const explicit = resolvePath((result as { display?: unknown })?.display) ?? resolvePath(result);
	if (explicit !== undefined) return explicit;

	if (!field.includes('.')) {
		const core = (result?.display?.mappings?.core || result?.mappings?.core) as Record<string, unknown> | undefined;
		const attributes = (result?.display?.attributes || result?.attributes) as Record<string, unknown> | undefined;
		return core?.[field] ?? attributes?.[field];
	}

	return undefined;
};

// Coerce a resolved value into a display string: arrays (and MobX observable arrays) are
// comma-joined, objects fall back to JSON, everything else is stringified.
export const renderDetailValue = (value: unknown): string => {
	if (value === null || value === undefined) return '';

	if (Array.isArray(value) || isObservableArray(value as any)) {
		return Array.from(value as Iterable<unknown>)
			.map((v) => (typeof v === 'object' ? JSON.stringify(v) : String(v)))
			.join(', ');
	}

	if (typeof value === 'object') return JSON.stringify(value);
	return String(value);
};

const defaultStyles: StyleScript<ProductDetailProps> = () => {
	return css({});
};

export const ProductDetail = observer((properties: ProductDetailProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductDetailProps> = {
		treePath: globalTreePath,
		// the field's final segment names the component (`productDetail.<name>` theme selectors)
		name: properties.field ? fieldNameToComponentName(properties.field.split('.').pop() || '') : undefined,
	};

	const props = mergeProps('productDetail', globalTheme, defaultProps, properties);

	const { result, field, name, html, tag, className, internalClassName, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.productDetail || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<ProductDetailProps>(props, defaultStyles);

	const rawValue = getProductFieldValue(result, field);
	const value = renderDetailValue(rawValue);

	if (!value) return null;

	const isPrice = isCorePriceField(field) && typeof rawValue === 'number';

	// Theme/style modifier: the named selector suffix (`productDetail.<name>`) when present,
	// otherwise the resolved field path's final segment.
	const modifier = name || field.split('.').pop();
	const classNames = classnames(
		'ss__product-detail',
		modifier && `ss__product-detail--${modifier}`,
		tag && `ss__product-detail--${tag}`,
		className,
		internalClassName
	);

	return (
		<CacheProvider>
			{html ? (
				<div {...styling} className={classNames} dangerouslySetInnerHTML={{ __html: value }} />
			) : (
				<div {...styling} className={classNames}>
					{isPrice ? <Price value={rawValue as number} treePath={props.treePath} /> : value}
				</div>
			)}
		</CacheProvider>
	);
});

export type ProductDetailProps = {
	result?: Product;
	field: string;
} & ProductDetailTemplatesLegalProps &
	ComponentProps<ProductDetailProps>;

export type ProductDetailTemplatesLegalProps = {
	// Render the resolved value as raw HTML via dangerouslySetInnerHTML (e.g. a rich description).
	html?: boolean;
	// Optional extra identifying classname modifier.
	tag?: string;
};
