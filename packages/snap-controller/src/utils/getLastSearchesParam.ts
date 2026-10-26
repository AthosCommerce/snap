// the API expects a comma separated list of terms, so commas within a term are replaced to keep each term intact
export function getLastSearchesParam(terms: string[]): string {
	return terms
		.map((term) => term.replace(/,/g, ' ').replace(/\s+/g, ' ').trim())
		.filter(Boolean)
		.join(',');
}
