import { getLastSearchesParam } from './getLastSearchesParam';

describe('getLastSearchesParam', () => {
	it('joins terms with commas keeping their order', () => {
		expect(getLastSearchesParam(['boots', 'red shoes'])).toBe('boots,red shoes');
	});

	it('replaces commas within a term with a space so the term is not split', () => {
		expect(getLastSearchesParam(['red, blue dress', 'boots'])).toBe('red blue dress,boots');
		expect(getLastSearchesParam(['red,blue'])).toBe('red blue');
		expect(getLastSearchesParam(['red & blue , 50% off'])).toBe('red & blue 50% off');
	});

	it('removes commas at the start or end of a term', () => {
		expect(getLastSearchesParam(['shoes,', ', boots'])).toBe('shoes,boots');
	});

	it('drops terms that are empty or only commas', () => {
		expect(getLastSearchesParam(['', 'boots', ',', ' , '])).toBe('boots');
	});

	it('returns an empty string when there are no terms', () => {
		expect(getLastSearchesParam([])).toBe('');
	});
});
