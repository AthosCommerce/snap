export const shopifyMarketsPriceFormat = (number: number | string, format: string = '${{amount}}') => {
	// ensure number is a number
	number = typeof number === 'string' ? parseFloat(number) : number;

	// function for formatting number
	const formatWithDelimiters = (number: number | null, precision = 2, thousands = ',', decimal = '.'): string => {
		if (number == null || Number.isNaN(number)) {
			return '0';
		}

		const fixedNumber = number.toFixed(precision);
		const parts = fixedNumber.split('.');
		const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousands}`);
		const centsAmount = parts[1] ? decimal + parts[1] : '';
		return dollarsAmount + centsAmount;
	};

	const formatRegex = /\{\{\s*(\w+)\s*\}\}/;
	const match = format.match(formatRegex);
	const formatKey = match?.[1] || 'amount';
	let value: string = '';

	switch (formatKey) {
		case 'amount':
			value = formatWithDelimiters(number, 2);
			break;
		case 'amount_no_decimals':
			value = formatWithDelimiters(number, 0);
			break;
		case 'amount_with_comma_separator':
			value = formatWithDelimiters(number, 2, '.', ',');
			break;
		case 'amount_no_decimals_with_comma_separator':
			value = formatWithDelimiters(number, 0, '.', ',');
			break;
		case 'amount_with_apostrophe_separator':
			value = formatWithDelimiters(number, 2, "'", '.');
			break;
		default:
			value = formatWithDelimiters(number, 2);
			break;
	}

	return format.replace(formatRegex, value);
};
