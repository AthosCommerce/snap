import { transformChatResponse } from './chatResponse';
import { MockData } from '@athoscommerce/snap-shared';
import type {
	MoiResponseModel,
	MoiResponseModelActions,
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

	it('returns empty data when all messageTypes are unknown', () => {
		const response = {
			responseId: 'resp-006',
			context: minimalContext,
			data: [{ messageType: 'someFutureType', id: 'future-1' }],
		} as unknown as MoiResponseModel;

		const result = transformChatResponse(response);

		expect(result.data).toEqual([]);
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

describe('transformChatResponse.actions', () => {
	it('passes actions through', () => {
		const data: MoiResponseModelActions = {
			messageType: 'actions',
			actions: [
				{ message: 'Show me dresses', request: { requestType: 'productSearch', searchTerm: 'dresses' } },
				{ message: 'Compare these', request: { requestType: 'productComparison', productIds: ['1', '2'] } },
			],
		};

		const result = transformChatResponse.actions(data);

		expect(result.messageType).toBe('actions');
		expect(result.actions).toEqual(data.actions);
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

	it('maps recommendation results and sourceProduct with the responseId', () => {
		const data: MoiResponseModelProductRecommendation = {
			messageType: 'productRecommendation',
			id: 'rec-1',
			recommendationResult: [
				{
					results: [rawProduct as any],
					profile: { name: 'Similar', tag: 'similar', type: 'product', limit: 4 },
				},
			],
			sourceProduct: rawProduct as any,
			text: 'You might also like these',
		};

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
});

describe('transformChatResponse.productData facets', () => {
	const buildSearchResultData = (facets: any[]): MoiResponseModelProductSearchResult => ({
		messageType: 'productSearchResult',
		id: 'msg-search-001',
		text: 'results',
		searchResult: {
			results: [],
			pagination: { totalResults: 0 },
			facets,
			sorting: { options: [] },
			filterSummary: [],
		},
	});

	it('transforms a slider facet with tuple range/active payloads', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'slider',
					multiple: '',
					range: ['0', '100'],
					active: ['20', '80'],
					step: 5,
					values: [],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([
			{
				field: 'price',
				label: 'Price',
				type: 'range',
				range: { low: 0, high: 100 },
				active: { low: 20, high: 80 },
				step: 5,
				filtered: true,
			},
		]);
	});

	it('transforms a slider facet with object range payloads and defaults active to range', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'slider',
					multiple: '',
					range: { low: '10', high: '200' },
					values: [],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([
			{
				field: 'price',
				label: 'Price',
				type: 'range',
				range: { low: 10, high: 200 },
				active: { low: 10, high: 200 },
				step: 1,
				filtered: false,
			},
		]);
	});

	it('fills open-ended active bounds from the range when active contains `*` sentinels', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'slider',
					multiple: '',
					range: ['0', '100'],
					active: ['*', '80'],
					values: [],
				},
			]),
			'resp-1'
		);

		expect(result.facets[0]).toMatchObject({
			type: 'range',
			range: { low: 0, high: 100 },
			active: { low: 0, high: 80 },
			filtered: true,
		});
	});

	it('falls through when a slider has unusable bounds (`*` range)', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'slider',
					multiple: '',
					range: ['*', '100'],
					values: [],
				},
			]),
			'resp-1'
		);

		// no usable slider bounds and no values — plain value facet without options
		expect(result.facets).toEqual([{ field: 'price', label: 'Price', type: 'value' }]);
	});

	it('falls through when a slider has no range payload at all', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'slider',
					multiple: '',
					values: [],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([{ field: 'price', label: 'Price', type: 'value' }]);
	});

	it('synthesizes a slider from price range buckets', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'range',
					multiple: '',
					values: [
						{ type: 'range', low: '0', high: '50', label: '$0 - $50', count: 10, active: false },
						{ type: 'range', low: '50', high: '100', label: '$50 - $100', count: 5, active: true },
						{ type: 'range', low: '100', high: '*', label: '$100+', count: 2, active: false },
					],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([
			{
				field: 'price',
				label: 'Price',
				type: 'range',
				range: { low: 0, high: 100 },
				active: { low: 50, high: 100 },
				step: 1,
				filtered: true,
			},
		]);
	});

	it('defaults synthesized price slider active to the full range when no buckets are active', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'price',
					label: 'Price',
					type: 'range',
					multiple: '',
					values: [
						{ type: 'range', low: '0', high: '50', label: '$0 - $50', count: 10, active: false },
						{ type: 'range', low: '50', high: '100', label: '$50 - $100', count: 5, active: false },
					],
				},
			]),
			'resp-1'
		);

		expect(result.facets[0]).toMatchObject({
			type: 'range',
			range: { low: 0, high: 100 },
			active: { low: 0, high: 100 },
			filtered: false,
		});
	});

	it('transforms non-price range buckets to range-buckets with `*` mapped to undefined', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'weight',
					label: 'Weight',
					type: 'range',
					multiple: '',
					values: [
						{ type: 'range', low: '*', high: '10', label: 'Under 10', count: 3, active: false },
						{ type: 'range', low: '10', high: '*', label: '10+', count: 7, active: true },
					],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([
			{
				field: 'weight',
				label: 'Weight',
				type: 'range-buckets',
				values: [
					{ filtered: false, low: undefined, high: 10, label: 'Under 10', count: 3 },
					{ filtered: true, low: 10, high: undefined, label: '10+', count: 7 },
				],
			},
		]);
	});

	it('transforms hierarchy facets to value facets', () => {
		const result = transformChatResponse.productData(
			buildSearchResultData([
				{
					field: 'category',
					label: 'Category',
					type: 'hierarchy',
					multiple: '',
					values: [{ value: 'Dresses', label: 'Dresses', count: 20, active: true, type: 'value' }],
				},
			]),
			'resp-1'
		);

		expect(result.facets).toEqual([
			{
				field: 'category',
				label: 'Category',
				type: 'value',
				values: [{ filtered: true, value: 'Dresses', label: 'Dresses', count: 20 }],
			},
		]);
	});

	it('passes filterSummary through and maps results with the responseId', () => {
		const data = buildSearchResultData([]);
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
