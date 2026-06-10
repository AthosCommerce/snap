import { transformSearchResponse, SearchResponseType } from './searchResponse';
import { SearchResponseModelFacetValue, SearchResponseModelSearchMatchTypeEnum } from '@athoscommerce/snapi-types';

const mockSingleResult = {
	intellisuggestData: 'eJwrLzbIKTBkYGDwCDcyMDC01HXy8db1CGcwBEITIwYjQ2MLhvSizBQAuS0I0Q',
	intellisuggestSignature: '73ed9559bc402f46f74ffdac2c207fa4eeaae2342f8cf41c9737d8faf4d62038',
	image_medium: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_medium.jpg?v=1594226901',
	variant_images_json: '[]',
	available: 'true',
	parentId: '12345',
	parentImageUrl: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_1024x1024.jpg?v=1594226901',
	product_price: '8',
	image_1024x1024: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_1024x1024.jpg?v=1594226901',
	collection_id: [
		'3176872',
		'155961393219',
		'82986691',
		'60361091',
		'59742403',
		'154366181443',
		'463850502',
		'185224134',
		'155889664067',
		'101560287299',
		'27304663',
		'479261510',
	],
	tags_badge: 'New',
	options:
		'[{&quot;id&quot;:5859713253443,&quot;product_id&quot;:4502421897283,&quot;name&quot;:&quot;Color&quot;,&quot;position&quot;:1,&quot;values&quot;:[&quot;Black&quot;]}]',
	variant_color: ['Black'],
	published_at: '2020-07-09T12:51:27-05:00',
	image: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK.jpg?v=1594226901',
	images:
		'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK.jpg?v=1594226901|https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITPERSPECTIVE.jpg?v=1594226901',
	variant_price: ['8'],
	sku_field: 'HW20019-BLK-HW',
	ss_published_at: '2020-07-09 12:51:27-05:00',
	ga_unique_purchases: '1709',
	image_grande: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_grande.jpg?v=1594226901',
	handle: 'over-this-shit-face-mask',
	variant_old_inventory_quantity: '606',
	variant_inventory_management: 'monopile',
	variant_inventory_quantity: ['606'],
	ss_exclude_oos: 'NO',
	tags: [
		'070920',
		'Badge: New',
		'bandana',
		'employee_30',
		'face mask',
		'face masks',
		'gift',
		'instagram',
		'mask',
		'masks',
		'presale',
		'quarantine',
		'social distancing',
	],
	published_scope: 'global',
	product_type: ['Headwear'],
	ss_in_stock: 'In Stock',
	days_since_published: '12',
	variant_sku: ['HW20019-BLK-HW'],
	variant_inventory_policy: 'deny',
	image_large: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_large.jpg?v=1594226901',
	new_boost: '9989',
	ss_newest_boost: '833.3333',
	ss_variants_inventory: '606',
	uid: '4502421897283',
	thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_1024x1024.jpg?v=1594226901',
	price: '8',
	imageUrl: 'https://cdn.shopify.com/s/files/1/0065/0022/products/OVERTHISSHITMASK_grande.jpg?v=1594226901',
	popularity: '12',
	name: 'Over This Shit Face Mask',
	product_type_unigram: 'mask',
	id: 'd55b14c8cfc53f23723527f10a4b87cd',
	sku: 'HW20019-BLK-HW',
	brand: 'Buy Me Brunch',
	url: 'http://www.thechivery.com/products/over-this-shit-face-mask',
};

const mockFilterSummary = [
	{
		field: 'color_family',
		value: 'Blue',
		label: 'Color: Blue',
		filterLabel: 'Color',
		filterValue: 'Blue',
	},
	{
		field: 'price',
		value: {
			rangeLow: '80',
			rangeHigh: '130',
		},
		label: 'Price: $80.00 - $130.00',
		filterLabel: 'Price',
		filterValue: '$80.00 - $130.00',
	},
];

const mockFacets = [
	{
		field: 'tags_artist',
		label: 'Artist',
		type: null,
		collapse: 0,
		facet_active: 0,
		values: [
			{
				active: false,
				type: 'value',
				value: 'Ballpark Blueprints',
				label: 'Ballpark Blueprints',
				count: 41,
			},
			{
				active: false,
				type: 'value',
				value: 'Emily Mercedes',
				label: 'Emily Mercedes',
				count: 18,
			},
			{
				active: false,
				type: 'value',
				value: 'Jason Eatherly',
				label: 'Jason Eatherly',
				count: 11,
			},
		],
	},

	{
		field: 'type',
		label: 'Type',
		type: null,
		multiple: 'multiple-union',
		collapse: 0,
		facet_active: 0,
		values: [
			{
				active: false,
				type: 'value',
				value: 'Beer Huggers',
				label: 'Beer Huggers',
				count: 5,
			},
			{
				active: false,
				type: 'value',
				value: 'Coolers',
				label: 'Coolers',
				count: 3,
			},
		],
	},
	{
		collapse: 0,
		facet_active: 1,
		field: 'category_hierarchy',
		hierarchyDelimiter: '>',
		label: 'Category',
		multiple: 'single',
		type: 'hierarchy',
		values: [
			{
				active: false,
				count: 3,
				label: 'Fantasy Fin Monofins',
				type: 'value',
				value: 'Mermaid>Mermaid Monofins>Fantasy Fin Monofins',
			},
			{
				active: false,
				count: 2,
				label: 'Monofin Replacement Parts',
				type: 'value',
				value: 'Mermaid>Mermaid Monofins>Monofin Replacement Parts',
			},
		],
	},
];

const mockMerchandising = {
	redirect: 'https://www.thechivery.com/collections/bill-murray',
	is_elevated: [],
	elevated: [],
	experiments: [],
	removed: [
		'5e3baeabe61f5a957b7a674f18e265d0',
		'fff8931dc9c670a8d4268c277f10aae4',
		'4fd38f9f3d9fb3a790a7abbbd2783e43',
		'c2d533279e25cfe9030d71140f57ad16',
		'0f504c25a85a391a6ad86a9d0dca9dd9',
		'7b693d9b07701757e05c9dd40d24bd40',
		'b7497aa49e0a2e01a30954e4ee95f111',
		'db1abf65eaf353140c84de30f04b9fff',
		'4f62a225694d7ff837794b27ae909aa3',
		'4e42bfbd32823c6eff8be9bad70f681e',
	],
	content: [],
	campaigns: [],
	facets: [],
	facetsHide: [],
	personalized: false,
};

const mockPersonalizedMerchandising = {
	redirect: '',
	is_elevated: [],
	elevated: [],
	removed: [],
	content: [],
	campaigns: [],
	facets: [],
	facetsHide: [],
	personalized: true,
};

const mockPagination = {
	totalResults: 2138,
	begin: 43,
	end: 84,
	currentPage: 2,
	totalPages: 51,
	previousPage: 1,
	nextPage: 3,
	perPage: 24,
	defaultPerPage: 42,
};

const mockSorting = {
	options: [
		{
			field: 'relevance',
			direction: 'desc',
			label: 'Best Match',
		},
		{
			field: 'salesrank',
			direction: 'desc',
			label: 'Best Selling',
		},
		{
			field: 'price',
			direction: 'asc',
			label: 'Lowest Price',
		},
		{
			field: 'price',
			direction: 'desc',
			label: 'Highest Price',
		},
	],
};

const mockDidYouMean = {
	query: 'red',
	highlight: '<em>red</em>',
};

const mockMatchType = {
	query: {
		matchType: 'expanded' as SearchResponseModelSearchMatchTypeEnum.Expanded,
	},
};

const mockResponse: SearchResponseType = {
	responseId: 'responseId-mock',
	results: [mockSingleResult, mockSingleResult],
	filterSummary: mockFilterSummary,
	facets: mockFacets,
	merchandising: mockMerchandising,
	pagination: mockPagination,
	sorting: mockSorting,
	...mockDidYouMean,
	...mockMatchType,
};

const mockRequest = {
	siteId: 'ga9kq2',
	search: {
		query: {
			string: 'red',
		},
	},
	filters: [],
};

describe('search response transformer', () => {
	it('calls all relevant transforms', () => {
		const results = jest.spyOn(transformSearchResponse, 'results');
		const filters = jest.spyOn(transformSearchResponse, 'filters');
		const facets = jest.spyOn(transformSearchResponse, 'facets');
		const pagination = jest.spyOn(transformSearchResponse, 'pagination');
		const merchandising = jest.spyOn(transformSearchResponse, 'merchandising');
		const search = jest.spyOn(transformSearchResponse, 'search');
		const tracking = jest.spyOn(transformSearchResponse, 'tracking');

		transformSearchResponse(mockResponse, mockRequest);

		expect(results).toHaveBeenCalled();
		expect(filters).toHaveBeenCalled();
		expect(facets).toHaveBeenCalled();
		expect(pagination).toHaveBeenCalled();
		expect(merchandising).toHaveBeenCalled();
		expect(search).toHaveBeenCalled();
		expect(tracking).toHaveBeenCalled();

		expect(results.mock.calls[0][0]).toEqual(mockResponse);
		expect(filters.mock.calls[0][0]).toEqual(mockResponse);
		expect(facets.mock.calls[0][0]).toEqual(mockResponse);
		expect(pagination.mock.calls[0][0]).toEqual(mockResponse);
		expect(merchandising.mock.calls[0][0]).toEqual(mockResponse);
		expect(search.mock.calls[0][0]).toEqual(mockResponse);

		expect(typeof results.mock.results[0].value).toEqual('object');
		expect(typeof filters.mock.results[0].value).toEqual('object');
		expect(typeof facets.mock.results[0].value).toEqual('object');
		expect(typeof pagination.mock.results[0].value).toEqual('object');
		expect(typeof merchandising.mock.results[0].value).toEqual('object');
		expect(typeof search.mock.results[0].value).toEqual('object');

		results.mockRestore();
		filters.mockRestore();
		facets.mockRestore();
		pagination.mockRestore();
		merchandising.mockRestore();
		search.mockRestore();
	});
});

describe('search response transformer tracking', () => {
	it('transforms tracking', () => {
		const response = transformSearchResponse.tracking({
			responseId: 'mock-response-id',
		} as SearchResponseType);

		expect(response.responseId).toEqual('mock-response-id');
	});

	it('still returns object if passed undefined', () => {
		// @ts-ignore
		expect(typeof transformSearchResponse.pagination()).toEqual('object');
		expect(typeof transformSearchResponse.pagination({} as SearchResponseType)).toEqual('object');
	});
});

describe('search response transformer pagination', () => {
	it('transforms pagination', () => {
		const response = transformSearchResponse.pagination({
			pagination: mockPagination,
		} as SearchResponseType);

		expect(response.totalResults).toEqual(mockPagination.totalResults);
		expect(response.pageSize).toEqual(mockPagination.perPage);
		expect(response.totalPages).toEqual(mockPagination.totalPages);
		expect(response.page).toEqual(mockPagination.currentPage);
	});

	it('still returns object if passed undefined', () => {
		// @ts-ignore
		expect(typeof transformSearchResponse.pagination()).toEqual('object');
		expect(typeof transformSearchResponse.pagination({} as SearchResponseType)).toEqual('object');
	});
});

describe('search response transformer result', () => {
	it('builds response format', () => {
		const result = transformSearchResponse.result(mockSingleResult, mockResponse);

		expect(result.id).toEqual(mockSingleResult.uid);

		expect(typeof result.mappings).toEqual('object');
		expect(typeof result.mappings?.core).toEqual('object');
		expect(typeof result.attributes).toEqual('object');
	});

	it('builds core fields', () => {
		const result = transformSearchResponse.result(mockSingleResult, mockResponse);

		// TODO: Add all core fields
		expect(result.mappings?.core?.name).toEqual(mockSingleResult.name);
		expect(result.mappings?.core?.sku).toEqual(mockSingleResult.sku);
		expect(result.mappings?.core?.imageUrl).toEqual(mockSingleResult.imageUrl);
		expect(result.mappings?.core?.thumbnailImageUrl).toEqual(mockSingleResult.thumbnailImageUrl);
		expect(result.mappings?.core?.price).toEqual(+mockSingleResult.price);
		expect(result.mappings?.core?.brand).toEqual(mockSingleResult.brand);
		expect(result.mappings?.core?.url).toEqual(mockSingleResult.url);
		expect(result.mappings?.core?.uid).toEqual(mockSingleResult.uid);
		expect(result.mappings?.core?.available).toEqual(true);
		expect(result.mappings?.core?.parentId).toEqual(mockSingleResult.parentId);
		expect(result.mappings?.core?.parentImageUrl).toEqual(mockSingleResult.parentImageUrl);
	});

	it('leaves core fields out of attributes', () => {
		const result = transformSearchResponse.result(mockSingleResult, mockResponse);

		// TODO: Add all core fields

		expect(typeof result.attributes?.name).toEqual('undefined');
		expect(typeof result.attributes?.sku).toEqual('undefined');
		expect(typeof result.attributes?.imageUrl).toEqual('undefined');
		expect(typeof result.attributes?.thumbnailImageUrl).toEqual('undefined');
		expect(typeof result.attributes?.price).toEqual('undefined');
		expect(typeof result.attributes?.brand).toEqual('undefined');
		expect(typeof result.attributes?.url).toEqual('undefined');
		expect(typeof result.attributes?.uid).toEqual('undefined');
	});

	it('builds attributes', () => {
		const result = transformSearchResponse.result(mockSingleResult, mockResponse);

		expect(result.attributes?.ss_in_stock).toEqual('In Stock');
		expect(result.attributes?.handle).toEqual('over-this-shit-face-mask');
		expect(result.attributes?.variant_color).toEqual(['Black']);
	});

	it('maps all results through result transformer', () => {
		const response = transformSearchResponse.results({
			...mockResponse,
			results: [mockSingleResult, mockSingleResult, mockSingleResult],
		} as SearchResponseType);

		expect(response.length).toEqual(3);
	});

	it('still returns array if passed undefined', () => {
		// @ts-ignore
		expect(transformSearchResponse.results() instanceof Array).toEqual(true);
		// @ts-ignore
		expect(transformSearchResponse.results({}) instanceof Array).toEqual(true);
	});

	it('search response search transforms badges', () => {
		const resultWithBadgeFeature = {
			...mockSingleResult,
			badges: [
				{
					tag: 'qa-badge-2910',
					value: 'QA Badge 2910',
				},
				{
					tag: 'qa-off-29',
					value: 'QA Off 29',
				},
				{
					tag: 'gift-guide',
					value: 'Gift Guide',
				},
			],
		};
		const resultWithRandomBadgeField = {
			...mockSingleResult,
			badges: ['1', '2', '3'],
		};
		const resultWithRandomBadgeField2 = {
			...mockSingleResult,
			badges: {
				name: '1',
				name2: '2',
				name3: '3',
			},
		};

		const result = transformSearchResponse.result(resultWithBadgeFeature, mockResponse);
		expect(result.attributes?.badges).toBeUndefined();
		expect(result.badges).toEqual(resultWithBadgeFeature.badges);

		// @ts-ignore - typings are wrong intentionally here
		const result2 = transformSearchResponse.result(resultWithRandomBadgeField, mockResponse);
		expect(result2.attributes?.badges).toEqual(resultWithRandomBadgeField.badges);
		expect(result2.badges).toEqual([]);

		// @ts-ignore - typings are wrong intentionally here
		const result3 = transformSearchResponse.result(resultWithRandomBadgeField2, mockResponse);
		expect(result3.badges).toEqual([]);
	});
});

describe('search response facet transformer', () => {
	it('has facets', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: mockFacets });

		expect(response.length).toEqual(3);
	});

	it('has correct top-level keys for list facets', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: mockFacets });

		response.forEach((facet) => {
			expect(Object.keys(facet)).toEqual(['field', 'type', 'filtered', 'values']);
		});
	});

	it('limits the number of facets', () => {
		const request = {
			facets: {
				limit: 1,
			},
		};

		const response = transformSearchResponse.facets({ ...mockResponse, facets: mockFacets }, request);

		expect(response).toHaveLength(request.facets.limit);
	});

	it('limits the number of facet options', () => {
		const request = {
			facets: {
				valueLimit: 1,
			},
		};

		const response = transformSearchResponse.facets({ ...mockResponse, facets: mockFacets }, request);

		expect((response[0] as SearchResponseModelFacetValue).values!.length).toEqual(request.facets.valueLimit);
		expect((response[1] as SearchResponseModelFacetValue).values!.length).toEqual(request.facets.valueLimit);
	});

	it('has some values', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: mockFacets });

		expect((response[0] as SearchResponseModelFacetValue).values!.length).toEqual(3);
		expect((response[1] as SearchResponseModelFacetValue).values!.length).toEqual(2);
	});

	it('still returns object if passed undefined', () => {
		// @ts-ignore
		expect(typeof transformSearchResponse.facets()).toEqual('object');
		// @ts-ignore
		expect(typeof transformSearchResponse.facets({})).toEqual('object');
	});
});

describe('search response sorting transformer', () => {
	it('is empty when there are no active sorts', () => {
		const response = transformSearchResponse.sorting({
			...mockResponse,
			sorting: mockSorting,
		});

		expect(response).toEqual([]);
	});

	it('contains one entry when there is one active sort', () => {
		const activeSorting = mockSorting;
		(activeSorting.options[0] as any).active = true;

		const response = transformSearchResponse.sorting({
			...mockResponse,
			sorting: activeSorting,
		});

		expect(response.length).toEqual(1);

		expect(response[0]).toEqual({
			field: 'relevance',
			direction: 'desc',
		});
	});

	it('contains two entries when there are two active sorts', () => {
		const activeSorting = mockSorting;
		(activeSorting.options[0] as any).active = true;
		(activeSorting.options[1] as any).active = true;

		const response = transformSearchResponse.sorting({
			...mockResponse,
			sorting: activeSorting,
		});

		expect(response.length).toEqual(2);

		expect(response[0]).toEqual({
			field: 'relevance',
			direction: 'desc',
		});

		expect(response[1]).toEqual({
			field: 'salesrank',
			direction: 'desc',
		});
	});
});

describe('search response filterSummary transformer', () => {
	it('has same values', () => {
		const response = transformSearchResponse.filters({
			...mockResponse,
			filterSummary: mockFilterSummary,
		});

		expect(Array.isArray(response)).toBe(true);
		expect(response.length).toBe(mockFilterSummary.length);

		response.forEach((filter: any, index: any) => {
			const mockFilter = mockFilterSummary[index];

			expect(filter.field).toBe(mockFilter.field);
			expect(filter.label).toBe(mockFilter.filterValue);

			if (typeof mockFilter.value == 'object') {
				expect(filter.type).toBe('range');
				expect(filter.value.low).toBe(Number(mockFilter.value.rangeLow));
				expect(filter.value.high).toBe(Number(mockFilter.value.rangeHigh));
			} else {
				expect(filter.value).toBe(mockFilter.value);
				expect(filter.type).toBe('value');
			}
		});
	});

	it('treats a range filter with a zero lower bound as a range type', () => {
		const zeroLowFilter = [
			{
				field: 'price',
				value: { rangeLow: '0', rangeHigh: '50' },
				label: 'Price: $0.00 - $50.00',
				filterLabel: 'Price',
				filterValue: '$0.00 - $50.00',
			},
		];

		const response = transformSearchResponse.filters({
			...mockResponse,
			filterSummary: zeroLowFilter,
		});

		expect(response[0].type).toBe('range');
		expect((response[0] as any).value.low).toBe(0);
		expect((response[0] as any).value.high).toBe(50);
	});

	it('treats a range filter with a zero upper bound as a range type', () => {
		const zeroHighFilter = [
			{
				field: 'temperature',
				value: { rangeLow: '-50', rangeHigh: '0' },
				label: 'Temp: -50 to 0',
				filterLabel: 'Temperature',
				filterValue: 'Temp: -50 to 0',
			},
		];

		const response = transformSearchResponse.filters({
			...mockResponse,
			filterSummary: zeroHighFilter,
		});

		expect(response[0].type).toBe('range');
		expect((response[0] as any).value.low).toBe(-50);
		expect((response[0] as any).value.high).toBe(0);
	});

	it('returns empty array if passed no data', () => {
		// @ts-ignore
		expect(Array.isArray(transformSearchResponse.filters())).toBe(true);
		// @ts-ignore
		expect(Array.isArray(transformSearchResponse.filters([]))).toBe(true);
	});
});

describe('search response merch transformer', () => {
	// TODO: Finish up merch

	it('has same values', () => {
		const response = transformSearchResponse.merchandising({
			...mockResponse,
			merchandising: mockMerchandising,
		});

		expect(response).toEqual({
			redirect: mockMerchandising.redirect,
			content: mockMerchandising.content,
			experiments: mockMerchandising.experiments,
			personalized: mockMerchandising.personalized,
			campaigns: mockMerchandising.campaigns,
		});
	});

	it('ensures content is always an object', () => {
		const response = transformSearchResponse.merchandising({
			...mockResponse,
			merchandising: mockMerchandising,
		});

		expect(typeof response.content).toEqual('object');
		expect(Array.isArray(response.content)).toBe(false);
	});

	it('ensures personalization exists', () => {
		const response = transformSearchResponse.merchandising({
			...mockResponse,
			merchandising: mockPersonalizedMerchandising,
		});

		expect(typeof response.content).toEqual('object');
		expect(response.personalized).toBe(true);
	});
});

describe('search response search transformer facets', () => {
	it('has didYouMean and query', () => {
		const response = transformSearchResponse.search(
			{
				...mockResponse,
				didYouMean: mockDidYouMean,
			},
			mockRequest
		);

		expect(response.didYouMean).toEqual(mockDidYouMean.query);
		expect(response.query).toEqual(mockRequest.search.query.string);
	});

	it('has matchType', () => {
		const response = transformSearchResponse.search(mockResponse, mockRequest);

		expect(response.matchType).toEqual(mockMatchType.query.matchType);
	});

	it('has query and originalQuery', () => {
		const mockSpellCorrectedQuery = {
			query: {
				corrected: 'term',
				original: 'term2',
			},
		};
		const response = transformSearchResponse.search(
			{
				...mockResponse,
				...mockSpellCorrectedQuery,
			},
			mockRequest
		);

		expect(response.query).toEqual(mockSpellCorrectedQuery.query.corrected);
		expect(response.originalQuery).toEqual(mockSpellCorrectedQuery.query.original);
	});
});

describe('hierarchy facets', () => {
	it('adds parent values', () => {
		const mockRequest = {
			filters: [{ type: 'value' as any, field: 'category_hierarchy', value: 'Mermaid>Mermaid Monofins' }],
		};

		const response = transformSearchResponse.facets(
			{
				...mockResponse,
				facets: mockFacets,
			},
			mockRequest
		);

		const hierarchyFacet = response[2] as SearchResponseModelFacetValue;

		const values = hierarchyFacet.values!.map((v) => v.value);
		const labels = hierarchyFacet.values!.map((v) => v.label);

		expect(values).toEqual([
			undefined,
			'Mermaid',
			'Mermaid>Mermaid Monofins',
			'Mermaid>Mermaid Monofins>Fantasy Fin Monofins',
			'Mermaid>Mermaid Monofins>Monofin Replacement Parts',
		]);

		expect(labels).toEqual(['View All', 'Mermaid', 'Mermaid Monofins', 'Fantasy Fin Monofins', 'Monofin Replacement Parts']);

		expect(hierarchyFacet.values![0].filtered).toBe(false);
		expect(hierarchyFacet.values![1].filtered).toBe(false);
		expect(hierarchyFacet.values![2].filtered).toBe(true);
		expect(hierarchyFacet.values![3].filtered).toBe(false);
		expect(hierarchyFacet.values![4].filtered).toBe(false);
	});

	it("doesn't add parent value if bg filter", () => {
		const mockRequest = {
			filters: [
				{
					type: 'value' as any,
					field: 'category_hierarchy',
					value: 'Mermaid>Mermaid Monofins',
					background: true,
				},
			],
		};

		const response = transformSearchResponse.facets(
			{
				...mockResponse,
				facets: mockFacets,
			},
			mockRequest
		);

		const hierarchyFacet = response[2] as SearchResponseModelFacetValue;

		const values = hierarchyFacet.values!.map((v) => v.value);
		const labels = hierarchyFacet.values!.map((v) => v.label);

		expect(values).toEqual(['Mermaid>Mermaid Monofins>Fantasy Fin Monofins', 'Mermaid>Mermaid Monofins>Monofin Replacement Parts']);

		expect(labels).toEqual(['Fantasy Fin Monofins', 'Monofin Replacement Parts']);

		expect(hierarchyFacet.values![0].filtered).toBe(false);
		expect(hierarchyFacet.values![1].filtered).toBe(false);
	});
});

describe('range-bucket facet value coercion', () => {
	const rangeBucketFacet = [
		{
			field: 'price',
			label: 'Price',
			type: null,
			collapse: 0,
			facet_active: 0,
			values: [
				{ active: false, type: 'range', low: '0', high: '25', label: '$0 - $25', count: 5 },
				{ active: false, type: 'range', low: '25', high: '50', label: '$25 - $50', count: 8 },
				{ active: false, type: 'range', low: '50', high: '*', label: '$50+', count: 3 },
				{ active: false, type: 'range', low: '*', high: '0', label: 'Up to 0', count: 1 },
			],
		},
	];

	it('coerces a zero lower bound to 0, not undefined', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: rangeBucketFacet as any });
		const values = (response[0] as any).values;

		expect(values[0].low).toBe(0);
		expect(values[0].high).toBe(25);
	});

	it('coerces a zero upper bound to 0, not undefined', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: rangeBucketFacet as any });
		const values = (response[0] as any).values;

		expect(values[3].low).toBeNull();
		expect(values[3].high).toBe(0);
	});

	it('maps the wildcard sentinel "*" to null for both bounds', () => {
		const response = transformSearchResponse.facets({ ...mockResponse, facets: rangeBucketFacet as any });
		const values = (response[0] as any).values;

		// low: '50', high: '*'
		expect(values[2].low).toBe(50);
		expect(values[2].high).toBeNull();

		// low: '*', high: '0'
		expect(values[3].low).toBeNull();
	});
});
