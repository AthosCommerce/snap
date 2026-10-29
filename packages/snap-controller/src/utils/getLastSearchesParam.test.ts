import { getLastSearchesParam } from './getLastSearchesParam';

describe('getLastSearchesParam', () => {
	it('joins encoded terms with commas keeping their order', () => {
		expect(getLastSearchesParam(['boots', 'red shoes'])).toBe('boots,red%20shoes');
	});

	it('encodes commas within a term so the term is not split', () => {
		expect(getLastSearchesParam(['red, blue dress', 'boots'])).toBe('red%2C%20blue%20dress,boots');
		expect(getLastSearchesParam(['red & blue, 50% off'])).toBe('red%20%26%20blue%2C%2050%25%20off');
	});

	it('produces terms that decode back to the originals after splitting on commas', () => {
		const terms = ['red, blue dress', 'boots', 'red & blue, 50% off'];

		expect(getLastSearchesParam(terms).split(',').map(decodeURIComponent)).toEqual(terms);
	});

	it('drops empty terms', () => {
		expect(getLastSearchesParam(['', 'boots', ''])).toBe('boots');
	});

	it('returns an empty string when there are no terms', () => {
		expect(getLastSearchesParam([])).toBe('');
	});
});
