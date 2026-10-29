import { getVariantId } from './getVariantId';

describe('bigcommerce/getVariantId', () => {
	it('returns the variant id from a {parentId}_{variantId} uid', () => {
		expect(getVariantId({ uid: '19936_20252', parentId: '19936' })).toBe('20252');
	});

	it('accepts a numeric parentId', () => {
		expect(getVariantId({ uid: '19936_20252', parentId: 19936 })).toBe('20252');
	});

	it('returns undefined for a product without options, whose uid is its parentId', () => {
		expect(getVariantId({ uid: '22585', parentId: '22585' })).toBeUndefined();
		expect(getVariantId({ uid: 22585, parentId: 22585 })).toBeUndefined();
	});

	it('returns undefined when the uid prefix is not the parentId', () => {
		expect(getVariantId({ uid: '19937_20252', parentId: '19936' })).toBeUndefined();
		// a parentId that is only the start of the uid's product id
		expect(getVariantId({ uid: '199360_20252', parentId: '19936' })).toBeUndefined();
	});

	it('returns undefined when the part after the underscore is not a numeric id', () => {
		expect(getVariantId({ uid: '19936_', parentId: '19936' })).toBeUndefined();
		expect(getVariantId({ uid: '19936_abc', parentId: '19936' })).toBeUndefined();
		expect(getVariantId({ uid: '19936_20252_1', parentId: '19936' })).toBeUndefined();
	});

	it('returns undefined when the uid or the parentId is missing', () => {
		expect(getVariantId({ uid: '19936_20252' })).toBeUndefined();
		expect(getVariantId({ parentId: '19936' })).toBeUndefined();
		expect(getVariantId({ uid: '19936_20252', parentId: '' })).toBeUndefined();
		expect(getVariantId({ uid: null, parentId: null })).toBeUndefined();
	});
});
