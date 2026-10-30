// the API expects a comma separated list of terms, so commas within a term are encoded
export function getLastSearchesParam(terms: string[]): string {
	return terms
		.map((term) => encodeURIComponent(term))
		.filter(Boolean)
		.join(',');
}
