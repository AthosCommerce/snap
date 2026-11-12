import { transformChatResponse } from './chatResponse';
import { MockData } from '@athoscommerce/snap-shared';
import type { SearchResponseModelResult } from '@athoscommerce/snapi-types';
import type {
	MoiResponseModel,
	MoiResponseModelContent,
	MoiResponseModelError,
	MoiResponseModelProductRecommendation,
	MoiResponseModelProductSearchResult,
	MoiResponseModelText,
	MoiResponseModelTopicDrift,
} from '../../types';

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

	it('transforms a productSearchResult — maps products', () => {
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

	it('passes through inspirationResult section filterSummary and defaults to [] when missing', () => {
		const filterSummary = [
			{
				field: 'product_type',
				value: 'Furniture/Bedroom Furniture/Bedroom Benches',
				label: 'Product Type: Furniture/Bedroom Furniture/Bedroom Benches',
				filterLabel: 'Product Type',
				filterValue: 'Furniture/Bedroom Furniture/Bedroom Benches',
			},
		];
		const response: MoiResponseModel = {
			responseId: 'resp-003',
			context: minimalContext,
			data: [
				{
					messageType: 'inspirationResult',
					id: 'x',
					overallSummary: 's',
					inspirationSections: [
						{
							filterSummary,
							clusterTitle: 't',
							clusterDescription: 'd',
							searchQueries: ['low bench'],
							products: [],
						},
						{
							clusterTitle: 't2',
							clusterDescription: 'd2',
							searchQueries: [],
							products: [],
						},
					],
				},
			],
		};

		const result = transformChatResponse(response);

		const item = result.data[0] as any;
		expect(item.inspirationSections[0].filterSummary).toEqual(filterSummary);
		expect(item.inspirationSections[1].filterSummary).toEqual([]);
	});

	it('drops unknown messageTypes and keeps known ones', () => {
		const response = {
			responseId: 'resp-005',
			context: minimalContext,
			data: [
				{ messageType: 'someFutureType', id: 'future-1' },
				{ messageType: 'text', id: 'msg-text-001', text: 'hello' },
			],
		} as unknown as MoiResponseModel;

		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		expect(result.data[0].messageType).toBe('text');
	});

	it('drops actions messages', () => {
		const response = {
			responseId: 'resp-007',
			context: minimalContext,
			data: [
				{ messageType: 'actions', actions: [{ message: 'Show me dresses', request: { requestType: 'general', message: 'Show me dresses' } }] },
				{ messageType: 'text', id: 'msg-text-001', text: 'hello' },
			],
		} as unknown as MoiResponseModel;

		const result = transformChatResponse(response);

		expect(result.data).toEqual([{ messageType: 'text', id: 'msg-text-001', text: 'hello' }]);
	});

	it('returns unknownError fallback when all messageTypes are dropped', () => {
		const response = {
			responseId: 'resp-006',
			context: minimalContext,
			data: [
				{ messageType: 'someFutureType', id: 'future-1' },
				{ messageType: 'actions', actions: [{ message: 'Show me dresses', request: { requestType: 'general', message: 'Show me dresses' } }] },
			],
		} as unknown as MoiResponseModel;

		const result = transformChatResponse(response);

		expect(result).toEqual({
			data: [{ messageType: 'errorResponse', id: '', errorMessage: 'Something went wrong. Please try again.' }],
			context: minimalContext,
		});
	});

	it('returns unknownError fallback when data is empty array', () => {
		const response = { data: [], context: minimalContext } as unknown as MoiResponseModel;
		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('errorResponse');
		expect(item.errorMessage).toBe('Something went wrong. Please try again.');
	});

	it('returns unknownError fallback when data is missing', () => {
		const response = {} as unknown as MoiResponseModel;
		const result = transformChatResponse(response);

		expect(result.data).toHaveLength(1);
		const item = result.data[0] as any;
		expect(item.messageType).toBe('errorResponse');
		expect(item.errorMessage).toBe('Something went wrong. Please try again.');
	});
});

describe('transformChatResponse.text', () => {
	it('constructs a fresh object', () => {
		const data: MoiResponseModelText = { messageType: 'text', id: 'msg-1', text: 'hello' };
		const result = transformChatResponse.text(data);

		expect(result).toEqual({ messageType: 'text', id: 'msg-1', text: 'hello' });
		expect(result).not.toBe(data);
	});
});

describe('transformChatResponse.content', () => {
	it('constructs a fresh object', () => {
		const data: MoiResponseModelContent = { messageType: 'content', id: 'msg-2', text: 'some content' };
		const result = transformChatResponse.content(data);

		expect(result).toEqual({ messageType: 'content', id: 'msg-2', text: 'some content' });
		expect(result).not.toBe(data);
	});
});

describe('transformChatResponse.topicDrift', () => {
	it('maps all drift properties', () => {
		const data: MoiResponseModelTopicDrift = {
			messageType: 'topicDrift',
			id: 'drift-1',
			driftType: 'CATEGORY_DRIFT',
			messageForDrift: 'Looks like you changed topics',
			recommendedAction: 'CATEGORY_SWITCH_CONFIRM',
		};

		const result = transformChatResponse.topicDrift(data);

		expect(result).toEqual({
			messageType: 'topicDrift',
			id: 'drift-1',
			driftType: 'CATEGORY_DRIFT',
			messageForDrift: 'Looks like you changed topics',
			recommendedAction: 'CATEGORY_SWITCH_CONFIRM',
		});
		expect(result).not.toBe(data);
	});
});

describe('transformChatResponse.error', () => {
	it('maps the error message', () => {
		const data: MoiResponseModelError = { messageType: 'errorResponse', id: 'err-1', errorMessage: 'something broke' };
		const result = transformChatResponse.error(data);

		expect(result).toEqual({ messageType: 'errorResponse', id: 'err-1', errorMessage: 'something broke' });
	});
});

describe('transformChatResponse.productRecommendation', () => {
	const rawProduct = {
		id: 'product-001',
		uid: '182146',
		name: 'Test Dress',
		price: '48',
		url: '/product/test',
		thumbnailImageUrl: '',
		imageUrl: '',
		sku: 'TEST-SKU',
		parentId: 'parent-001',
		parentImageUrl: '',
		available: 'true',
	};

	const shapedProduct: SearchResponseModelResult = {
		id: '48006265438402',
		mappings: {
			core: {
				uid: '48006265438402',
				parentId: '8687667151042',
				name: 'Comfortable Linen Cargo Pants',
				sku: 'ATH-BCEF9D45C4',
				msrp: 53.8,
				price: 53.8,
				url: '/products/blue-linen-cargo-pants-60bc91',
				imageUrl: 'https://cdn.example.com/blue-linen-cargo-pants.png',
				available: true,
			},
		},
		attributes: {
			collection_name: ['Pants - Cargo Pants', 'Pants'],
		},
	};

	const data: MoiResponseModelProductRecommendation = {
		messageType: 'productRecommendation',
		id: 'rec-1',
		recommendationResult: [
			{
				results: [shapedProduct],
				profile: { name: 'Similar', tag: 'similar', type: 'product', limit: 4 },
			},
		],
		sourceProduct: rawProduct as any,
		text: 'You might also like these',
	};

	it('maps recommendation results and sourceProduct with the responseId', () => {
		const result = transformChatResponse.productRecommendation(data, 'resp-123');

		expect(result.messageType).toBe('productRecommendation');
		expect(result.id).toBe('rec-1');
		expect(result.text).toBe('You might also like these');
		expect(result.sourceProduct.id).toBe('182146');
		expect((result.sourceProduct as any).responseId).toBe('resp-123');
		expect(result.recommendationResult).toHaveLength(1);
		expect(result.recommendationResult[0].profile.tag).toBe('similar');
		expect((result.recommendationResult[0].results[0] as any).responseId).toBe('resp-123');
	});

	it('runs the raw sourceProduct through the product transform', () => {
		const { sourceProduct } = transformChatResponse.productRecommendation(data, 'resp-123');

		// `id` is the uid, not the catalog id
		expect(sourceProduct.id).toBe('182146');
		expect(sourceProduct.mappings?.core).toEqual(expect.objectContaining({ name: 'Test Dress', sku: 'TEST-SKU', uid: '182146' }));
	});

	it('passes recommendation results through unchanged apart from the responseId', () => {
		const recommended = transformChatResponse.productRecommendation(data, 'resp-123').recommendationResult[0].results[0];

		expect(recommended).toEqual({ ...shapedProduct, responseId: 'resp-123' });
		expect(shapedProduct).not.toHaveProperty('responseId');
	});
});

describe('transformChatResponse.productData', () => {
	const buildSearchResultData = (): MoiResponseModelProductSearchResult => ({
		messageType: 'productSearchResult',
		id: 'msg-search-001',
		text: 'results',
		searchResult: {
			results: [],
			pagination: { totalResults: 0 },
			sorting: { options: [] },
			filterSummary: [],
		},
	});

	it('drops searchResult.facets', () => {
		const data = buildSearchResultData();
		(data.searchResult as any).facets = [
			{
				field: 'color_family',
				label: 'Color',
				type: 'value',
				multiple: 'or',
				values: [{ value: 'White', label: 'White', count: 15, active: false, type: 'value' }],
			},
		];

		const result = transformChatResponse.productData(data, 'resp-1');

		expect(result).toEqual({ messageType: 'productSearchResult', id: 'msg-search-001', text: 'results', results: [], filterSummary: [] });
	});

	it('passes filterSummary through and maps results with the responseId', () => {
		const data = buildSearchResultData();
		data.searchResult.filterSummary = [{ field: 'color', value: 'Blue', label: 'Color: Blue', filterLabel: 'Color', filterValue: 'Blue' }];
		data.searchResult.results = [
			{
				id: 'product-001',
				uid: '182146',
				name: 'Test Dress',
				price: '48',
				url: '/product/test',
				thumbnailImageUrl: '',
				imageUrl: '',
				sku: 'TEST-SKU',
				parentId: 'parent-001',
				parentImageUrl: '',
				available: 'true',
			} as any,
		];

		const result = transformChatResponse.productData(data, 'resp-1');

		expect(result.filterSummary).toEqual(data.searchResult.filterSummary);
		expect(result.results[0].id).toBe('182146');
		expect((result.results[0] as any).responseId).toBe('resp-1');
	});
});
