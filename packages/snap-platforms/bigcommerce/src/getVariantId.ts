export type GetVariantIdIds = {
	uid?: string;
	parentId?: string;
};

// Athos BigCommerce feeds identify a product with options as `{parentId}_{variantId}`; a uid in any other form carries
// no variant id, including a product without options, whose uid is its product id
export const getVariantId = ({ uid, parentId }: GetVariantIdIds): string | undefined => {
	if (!uid || !parentId) return undefined;

	const prefix = `${parentId}_`;
	if (!uid.startsWith(prefix)) return undefined;

	const variantId = uid.slice(prefix.length);
	return /^\d+$/.test(variantId) ? variantId : undefined;
};
