import { stripShopifyImageSize } from './stripShopifyImageSize';

describe('stripShopifyImageSize', () => {
	const base = 'https://cdn.shopify.com/s/files/1/0001/files/';

	it('removes the size suffix and keeps the query string', () => {
		expect(stripShopifyImageSize(`${base}shirt_600x600.png?v=123`)).toBe(`${base}shirt.png?v=123`);
	});

	it('removes width only, height only, crop and density suffix variants', () => {
		['shirt_600x.jpg', 'shirt_x600.jpg', 'shirt_600x600_crop_center.jpg', 'shirt_600x600@2x.jpg'].forEach((file) => {
			expect(stripShopifyImageSize(`${base}${file}`)).toBe(`${base}shirt.jpg`);
		});
	});

	it('removes named size and progressive suffix variants', () => {
		['shirt_grande.jpg', 'shirt_large.jpg', 'shirt_master.jpg', 'shirt_600x.progressive.jpg', 'shirt_grande.progressive.jpg'].forEach((file) => {
			expect(stripShopifyImageSize(`${base}${file}`)).toBe(`${base}shirt.jpg`);
		});
	});

	it('supports protocol relative and store /cdn/shop/ urls', () => {
		expect(stripShopifyImageSize('//cdn.shopify.com/s/files/1/0001/files/shirt_600x600.jpg')).toBe(
			'//cdn.shopify.com/s/files/1/0001/files/shirt.jpg'
		);
		expect(stripShopifyImageSize('https://store.example.com/cdn/shop/files/shirt_600x.jpg?v=1')).toBe(
			'https://store.example.com/cdn/shop/files/shirt.jpg?v=1'
		);
	});

	it('preserves a hash fragment', () => {
		expect(stripShopifyImageSize(`${base}shirt_600x600.jpg?v=1#top`)).toBe(`${base}shirt.jpg?v=1#top`);
		expect(stripShopifyImageSize(`${base}shirt_600x600.jpg#top`)).toBe(`${base}shirt.jpg#top`);
	});

	it('only removes a suffix directly before the file extension', () => {
		expect(stripShopifyImageSize(`${base}shirt_600x600_front.jpg`)).toBe(`${base}shirt_600x600_front.jpg`);
		expect(stripShopifyImageSize(`${base}shirt.jpg?crop=_600x600.jpg`)).toBe(`${base}shirt.jpg?crop=_600x600.jpg`);
	});

	it('returns urls without a size suffix unchanged', () => {
		expect(stripShopifyImageSize(`${base}shirt.jpg?v=1`)).toBe(`${base}shirt.jpg?v=1`);
	});

	it('returns an empty string when the url is missing', () => {
		expect(stripShopifyImageSize('')).toBe('');
		expect(stripShopifyImageSize(undefined)).toBe('');
	});
});
