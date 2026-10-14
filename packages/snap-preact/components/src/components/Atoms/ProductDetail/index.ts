// Curated: the field-resolution helpers in ProductDetail.tsx are internal (used by
// ProductDetailTable and unit tests via direct file imports) and must not reach the package API.
export { ProductDetail } from './ProductDetail';
export type { ProductDetailProps, ProductDetailTemplatesLegalProps } from './ProductDetail';
