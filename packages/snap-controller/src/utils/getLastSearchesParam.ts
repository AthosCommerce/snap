// personalization.lastSearches is a comma separated list, so terms are encoded to keep commas within a term (the client decodes each term)
export function getLastSearchesParam(terms: string[]): string {
	return terms
		.map((term) => encodeURIComponent(term))
		.filter(Boolean)
		.join(',');
}
