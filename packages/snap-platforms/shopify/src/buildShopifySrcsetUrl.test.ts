import { buildShopifySrcsetUrl } from './buildShopifySrcsetUrl';

describe('buildShopifySrcsetUrl', () => {
	const base = 'https://cdn.shopify.com/s/files/1/0001/files/';

	it('removes the size suffix and sets the width query parameter', () => {
		expect(buildShopifySrcsetUrl(`${base}shirt_600x600.jpg?v=123`, 320)).toBe(`${base}shirt.jpg?v=123&width=320`);
	});

	it('adds a query string when the url has none', () => {
		expect(buildShopifySrcsetUrl(`${base}shirt.jpg`, 320)).toBe(`${base}shirt.jpg?width=320`);
	});

	it('replaces an existing width parameter and keeps other parameters and the hash', () => {
		expect(buildShopifySrcsetUrl(`${base}shirt_grande.jpg?width=1920&v=123#top`, 320)).toBe(`${base}shirt.jpg?v=123&width=320#top`);
	});

	it('returns an empty string when the url is missing', () => {
		expect(buildShopifySrcsetUrl('', 320)).toBe('');
		expect(buildShopifySrcsetUrl(undefined as any, 320)).toBe('');
	});
});
