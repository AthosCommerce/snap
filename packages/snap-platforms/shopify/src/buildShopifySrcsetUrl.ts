import { stripShopifyImageSize } from './stripShopifyImageSize';

// builds the url of a Shopify CDN image at a given width - for use as the `buildSrcsetUrl` prop of the Image component
// the legacy size suffix is removed (the CDN ignores the `width` query parameter when the filename has one) and the `width` query parameter is set
export const buildShopifySrcsetUrl = (src: string, width: number): string => {
	const url = stripShopifyImageSize(src);
	if (!url) return '';

	const hashIndex = url.indexOf('#');
	const hash = hashIndex === -1 ? '' : url.slice(hashIndex);
	const urlWithoutHash = hashIndex === -1 ? url : url.slice(0, hashIndex);
	const queryIndex = urlWithoutHash.indexOf('?');
	const path = queryIndex === -1 ? urlWithoutHash : urlWithoutHash.slice(0, queryIndex);
	const params = (queryIndex === -1 ? [] : urlWithoutHash.slice(queryIndex + 1).split('&')).filter((param) => param && !param.startsWith('width='));
	params.push(`width=${width}`);

	return `${path}?${params.join('&')}${hash}`;
};
