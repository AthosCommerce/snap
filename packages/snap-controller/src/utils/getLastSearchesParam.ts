// personalization.lastSearches is a comma separated list, so commas within a term are replaced with spaces
export function getLastSearchesParam(terms: string[]): string {
	return terms
		.map((term) => term.replace(/\s*,\s*/g, ' ').trim())
		.filter(Boolean)
		.join(',');
}
