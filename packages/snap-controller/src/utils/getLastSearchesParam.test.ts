import { getLastSearchesParam } from './getLastSearchesParam';

describe('getLastSearchesParam', () => {
	it('joins terms with commas keeping their order', () => {
		expect(getLastSearchesParam(['boots', 'red shoes'])).toBe('boots,red shoes');
	});

	it('replaces commas within a term so the term is not split', () => {
		expect(getLastSearchesParam(['red, blue dress', 'boots'])).toBe('red blue dress,boots');
		expect(getLastSearchesParam(['red & blue, 50% off'])).toBe('red & blue 50% off');
	});

	it('drops terms that are empty once commas are replaced', () => {
		expect(getLastSearchesParam([',', ' , ', 'boots'])).toBe('boots');
	});

	it('returns an empty string when there are no terms', () => {
		expect(getLastSearchesParam([])).toBe('');
	});
});
