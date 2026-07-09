import { shopifyMarketsPriceFormat } from './shopifyMarketsPriceFormat';
import { getContext } from '@athoscommerce/snap-toolbox';

jest.mock('@athoscommerce/snap-toolbox', () => ({
	getContext: jest.fn(),
}));

describe('shopifyMarketsPriceFormat', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('uses default amount format when context format is unavailable', () => {
		(getContext as jest.Mock).mockReturnValue(undefined);

		expect(shopifyMarketsPriceFormat(1234.5)).toBe('$1,234.50');
	});

	it('requests both format and iso from context', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '${{amount}}' });

		shopifyMarketsPriceFormat(10);

		expect(getContext).toHaveBeenCalledWith(['format']);
	});

	it('supports amount_no_decimals format', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '${{amount_no_decimals}}' });

		expect(shopifyMarketsPriceFormat(1234.5)).toBe('$1,235');
	});

	it('supports amount_with_comma_separator format', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '€{{amount_with_comma_separator}}' });

		expect(shopifyMarketsPriceFormat('1234.5')).toBe('€1.234,50');
	});

	it('supports amount_with_apostrophe_separator format', () => {
		(getContext as jest.Mock).mockReturnValue({ format: 'CHF {{amount_with_apostrophe_separator}}' });

		expect(shopifyMarketsPriceFormat(1234.5)).toBe("CHF 1'234.50");
	});

	it('supports amount_no_decimals_with_comma_separator format', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '€{{amount_no_decimals_with_comma_separator}}' });

		expect(shopifyMarketsPriceFormat(1234.5)).toBe('€1.235');
	});

	it('prefixes formatted value with iso when provided in context', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '{{amount}}', iso: 'USD ' });

		expect(shopifyMarketsPriceFormat(1234.5)).toBe('USD 1,234.50');
	});

	it('returns 0 when input is not a valid number', () => {
		(getContext as jest.Mock).mockReturnValue({ format: '${{amount}}' });

		expect(shopifyMarketsPriceFormat('abc')).toBe('$0');
	});
});
