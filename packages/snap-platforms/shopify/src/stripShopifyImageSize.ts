// matches Shopify's legacy size suffix at the end of a filename (eg. `_600x600`, `_600x`, `_x600`, `_600x600_crop_center`, `_600x600@2x`)
const SHOPIFY_SIZE_SUFFIX = /_(?:\d+x\d*|x\d+)(?:_crop_[a-z]+)?(?:@\d+x)?(?=\.[a-z0-9]+$)/i;

// removes the legacy size suffix from a Shopify CDN image url, so that the image can be resized with the `width` query parameter
export const stripShopifyImageSize = (url: string): string => {
	if (typeof url != 'string') return url;

	const suffixIndex = url.search(/[?#]/);
	const path = suffixIndex === -1 ? url : url.slice(0, suffixIndex);
	const suffix = suffixIndex === -1 ? '' : url.slice(suffixIndex);

	return `${path.replace(SHOPIFY_SIZE_SUFFIX, '')}${suffix}`;
};
