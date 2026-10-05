import { shopifyPriceFormat } from './shopifyPriceFormat';

describe('shopifyPriceFormat', () => {
	it('uses default amount format when context format is unavailable', () => {
		expect(shopifyPriceFormat(1234.5)).toBe('$1,234.50');
	});

	it('supports amount format', () => {
		expect(shopifyPriceFormat(1234.5, '${{amount}}')).toBe('$1,234.50');
	});

	it('supports amount_no_decimals format', () => {
		expect(shopifyPriceFormat(1234.5, '${{amount_no_decimals}}')).toBe('$1,235');
	});

	it('supports amount_with_comma_separator format', () => {
		expect(shopifyPriceFormat('1234.5', '€{{amount_with_comma_separator}}')).toBe('€1.234,50');
	});

	it('supports amount_with_apostrophe_separator format', () => {
		expect(shopifyPriceFormat(1234.5, 'CHF {{amount_with_apostrophe_separator}}')).toBe("CHF 1'234.50");
	});

	it('supports amount_no_decimals_with_comma_separator format', () => {
		expect(shopifyPriceFormat(1234.5, '€{{amount_no_decimals_with_comma_separator}}')).toBe('€1.235');
	});

	it('returns 0 when input is not a valid number', () => {
		expect(shopifyPriceFormat('abc', '${{amount}}')).toBe('$0');
	});
});
