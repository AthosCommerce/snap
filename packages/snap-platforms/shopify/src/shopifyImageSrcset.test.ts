import { shopifyImageSrcset } from './shopifyImageSrcset';

describe('shopifyImageSrcset', () => {
	const base = 'https://cdn.shopify.com/s/files/1/0001/files/';

	it('builds width descriptor candidates, removing the size suffix and keeping the query string', () => {
		expect(shopifyImageSrcset(`${base}shirt_600x600.jpg?v=123`, [320, 640])).toBe(
			`${base}shirt.jpg?v=123&width=320 320w, ${base}shirt.jpg?v=123&width=640 640w`
		);
	});

	it('adds a query string when the url has none', () => {
		expect(shopifyImageSrcset(`${base}shirt.jpg`, [320])).toBe(`${base}shirt.jpg?width=320 320w`);
	});

	it('replaces an existing width parameter and keeps other parameters and the hash', () => {
		expect(shopifyImageSrcset(`${base}shirt.jpg?width=1920&v=123&crop=center#top`, [320])).toBe(
			`${base}shirt.jpg?v=123&crop=center&width=320#top 320w`
		);
	});

	it('removes numeric, named, crop, density and progressive size suffix variants', () => {
		[
			'shirt_600x.jpg',
			'shirt_x600.jpg',
			'shirt_grande.jpg',
			'shirt_master.jpg',
			'shirt_600x600_crop_center.jpg',
			'shirt_600x600@2x.jpg',
			'shirt_600x.progressive.jpg',
		].forEach((file) => {
			expect(shopifyImageSrcset(`${base}${file}`, [320])).toBe(`${base}shirt.jpg?width=320 320w`);
		});
	});

	it('only removes a suffix directly before the file extension', () => {
		expect(shopifyImageSrcset(`${base}shirt_600x600_front.jpg`, [320])).toBe(`${base}shirt_600x600_front.jpg?width=320 320w`);
		expect(shopifyImageSrcset(`${base}shirt-612x612.jpg`, [320])).toBe(`${base}shirt-612x612.jpg?width=320 320w`);
	});

	it('supports protocol relative and store /cdn/shop/ urls', () => {
		expect(shopifyImageSrcset('//cdn.shopify.com/s/files/1/0001/files/shirt_600x600.jpg', [320])).toBe(
			'//cdn.shopify.com/s/files/1/0001/files/shirt.jpg?width=320 320w'
		);
		expect(shopifyImageSrcset('https://store.example.com/cdn/shop/files/shirt_600x.jpg?v=1', [320])).toBe(
			'https://store.example.com/cdn/shop/files/shirt.jpg?v=1&width=320 320w'
		);
	});

	it('encodes whitespace in candidate urls', () => {
		expect(shopifyImageSrcset(`${base}Blue Shirt_600x600.jpg`, [320])).toBe(`${base}Blue%20Shirt.jpg?width=320 320w`);
	});

	it('returns an empty string when the url is missing or there are no widths', () => {
		expect(shopifyImageSrcset('', [320])).toBe('');
		expect(shopifyImageSrcset(undefined, [320])).toBe('');
		expect(shopifyImageSrcset(`${base}shirt.jpg`, [])).toBe('');
	});
});
