// matches Shopify's legacy size suffix at the end of a filename
// eg. `_600x600`, `_600x`, `_x600`, `_grande`, `_600x600@2x`, `_600x.progressive`
const SHOPIFY_SIZE_SUFFIX =
	/_(?:\d+x\d*|x\d+|pico|icon|thumb|small|compact|medium|large|grande|original|master)(?:@\d+x)?(?:\.progressive)?(?=\.[a-z0-9]+$)/i;

// matches a crop suffix at the end of a filename (eg. `_300x150_crop_center`) - the crop changes the image itself, not just its size
const SHOPIFY_CROP_SUFFIX = /_crop_[a-z]+(?:@\d+x)?(?:\.progressive)?\.[a-z0-9]+$/i;

// removes the legacy size suffix from a Shopify CDN image url - the CDN ignores the `width` query parameter when the filename has one
const stripSizeSuffix = (url: string): string => {
	const suffixIndex = url.search(/[?#]/);
	const path = suffixIndex === -1 ? url : url.slice(0, suffixIndex);
	const rest = suffixIndex === -1 ? '' : url.slice(suffixIndex);
	return `${path.replace(SHOPIFY_SIZE_SUFFIX, '')}${rest}`;
};

// sets the `width` query parameter on a url, keeping the other parameters and the hash
const setWidth = (url: string, width: number): string => {
	const hashIndex = url.indexOf('#');
	const hash = hashIndex === -1 ? '' : url.slice(hashIndex);
	const urlWithoutHash = hashIndex === -1 ? url : url.slice(0, hashIndex);
	const queryIndex = urlWithoutHash.indexOf('?');
	const path = queryIndex === -1 ? urlWithoutHash : urlWithoutHash.slice(0, queryIndex);
	const params = (queryIndex === -1 ? [] : urlWithoutHash.slice(queryIndex + 1).split('&')).filter((param) => param && !param.startsWith('width='));
	params.push(`width=${width}`);
	return `${path}?${params.join('&')}${hash}`;
};

// builds a srcset of a Shopify CDN image at each of the given widths, for the `srcset` prop of the Image component
// eg. `shirt_600x600.jpg?v=1` at `[320, 640]` becomes `shirt.jpg?v=1&width=320 320w, shirt.jpg?v=1&width=640 640w`
export const shopifyImageSrcset = (url: string | undefined, widths: number[]): string => {
	if (!url) return '';

	// resized candidates of a cropped image would be the uncropped original, so no srcset is built and the image stays on its `src`
	if (SHOPIFY_CROP_SUFFIX.test(url.split(/[?#]/)[0])) return '';

	const originalUrl = stripSizeSuffix(url);
	// whitespace separates a candidate url from its descriptor, so it must be encoded within the url
	return widths.map((width) => `${setWidth(originalUrl, width).replace(/\s/g, (char) => encodeURIComponent(char))} ${width}w`).join(', ');
};
