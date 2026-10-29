export type GetVariantIdIds = {
	uid?: string | number | null;
	parentId?: string | number | null;
};

// Athos BigCommerce feeds identify a product with options as `{parentId}_{variantId}`; a uid in any other form carries
// no variant id, including a product without options, whose uid is its product id
export const getVariantId = ({ uid, parentId }: GetVariantIdIds): string | undefined => {
	if (uid === undefined || uid === null || parentId === undefined || parentId === null) return undefined;

	const parent = String(parentId);
	const id = String(uid);
	const prefix = `${parent}_`;

	if (parent === '' || !id.startsWith(prefix)) return undefined;

	const variantId = id.slice(prefix.length);
	return /^\d+$/.test(variantId) ? variantId : undefined;
};
