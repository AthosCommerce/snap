import { transformChatResponse } from './chatResponse';
import { MockData } from '@athoscommerce/snap-shared';
import type { MoiResponseModel } from '../apis/Chat';

const mockData = new MockData({ siteId: '8uyt2m' });

const minimalContext = { sessionId: 'test-session-001' };

describe('transformChatResponse', () => {
	it('transforms a text message', () => {
		const fixture = mockData.chat('default') as unknown as MoiResponseModel;
		const result = transformChatResponse(fixture);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('text');
		expect(item.id).toBe('msg-text-001');
		expect(item.text).toBeDefined();
	});

	it('transforms a productSearchResult — maps products and facets', () => {
		const response: MoiResponseModel = {
			responseId: 'resp-001',
			context: minimalContext,
			data: [
				{
					messageType: 'productSearchResult',
					id: 'msg-search-001',
					text: 'Here are some results',
					searchResult: {
						results: [
							{
								id: 'product-001',
								uid: '182146',
								name: 'Test Dress',
								price: '48',
								msrp: '50',
								url: '/product/test',
								thumbnailImageUrl: 'https://example.com/thumb.jpg',
								imageUrl: 'https://example.com/img.jpg',
								sku: 'TEST-SKU',
								parentId: 'parent-001',
								parentImageUrl: '',
								available: 'true',
							},
						],
						pagination: { totalResults: 1 },
						facets: [
							{
								field: 'color_family',
								label: 'Color',
								type: 'value',
								multiple: 'or',
								values: [{ value: 'White', label: 'White', count: 15, active: false, type: 'value' }],
							},
						],
						sorting: { options: [] },
						filterSummary: [],
					},
				},
			],
		};

		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('productSearchResult');
		expect(item.results).toHaveLength(1);
		// uid becomes the result id via mapProductToSearchResultProduct
		expect(item.results[0].id).toBe('182146');
		expect(item.facets).toBeDefined();
		expect(item.facets.length).toBeGreaterThan(0);
		expect(result.context.sessionId).toBe('test-session-001');
	});

	it('transforms a productAnswer — sourceProduct present', () => {
		const rawProduct = {
			id: 'product-001',
			uid: '182146',
			name: 'Test Dress',
			price: '48',
			url: '/product/test',
			thumbnailImageUrl: 'https://example.com/thumb.jpg',
			imageUrl: 'https://example.com/img.jpg',
			sku: 'TEST-SKU',
			parentId: 'parent-001',
			parentImageUrl: '',
			available: 'true',
		};
		const response: MoiResponseModel = {
			responseId: 'resp-003',
			context: minimalContext,
			data: [
				{
					messageType: 'productAnswer',
					id: 'msg-answer-001',
					note: '',
					text: 'This is the product.',
					sourceProduct: rawProduct as any,
				},
			],
		};

		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('productAnswer');
		expect(item.sourceProduct).toBeDefined();
		expect(item.sourceProduct.id).toBe('182146');
	});

	it('transforms a productComparison — comparisonData summary present', () => {
		const rawProduct = (uid: string, id: string) => ({
			id,
			uid,
			name: `Product ${uid}`,
			price: '48',
			url: '/product/test',
			thumbnailImageUrl: '',
			imageUrl: '',
			sku: `SKU-${uid}`,
			parentId: 'parent-001',
			parentImageUrl: '',
			available: 'true',
		});
		const response: MoiResponseModel = {
			responseId: 'resp-004',
			context: minimalContext,
			data: [
				{
					messageType: 'productComparison',
					id: 'msg-compare-001',
					searchResults: [rawProduct('182146', 'p1'), rawProduct('182147', 'p2')] as any,
					comparisonData: {
						features: [
							{
								featureName: 'Price',
								values: { p1: '$48', p2: '$55' },
							},
						],
						summary: 'Both are great options.',
					},
				},
			],
		};

		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('productComparison');
		expect(item.comparisonData?.summary).toBe('Both are great options.');
		expect(item.searchResults).toHaveLength(2);
	});

	it('handles inspirationResult with missing products — does not throw, section products is []', () => {
		const response: MoiResponseModel = {
			responseId: 'resp-002',
			context: minimalContext,
			data: [
				{
					messageType: 'inspirationResult',
					id: 'x',
					overallSummary: 's',
					inspirationSections: [
						{
							clusterTitle: 't',
							clusterDescription: 'd',
							searchQueries: [],
							// products intentionally omitted
						} as any,
					],
				},
			],
		};

		let result: any;
		expect(() => {
			result = transformChatResponse(response);
		}).not.toThrow();

		const item = result.data[0] as any;
		expect(item.messageType).toBe('inspirationResult');
		expect(item.inspirationSections[0].products).toEqual([]);
	});

	it('returns unknownError fallback when data is empty array', () => {
		const response = { data: [], context: minimalContext } as unknown as MoiResponseModel;
		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('errorResponse');
		expect(item.errorMessage).toBe('An unknown error has occurred');
	});

	it('returns unknownError fallback when data is missing', () => {
		const response = {} as unknown as MoiResponseModel;
		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('errorResponse');
		expect(item.errorMessage).toBe('An unknown error has occurred');
	});
});
