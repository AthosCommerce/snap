// Flattens the nested `documents` tree (categories > links > sublinks > subsublinks)
// into a single ordered list spanning the whole site, in the same order it renders in the nav.
function flattenDocumentLinks(documents) {
	const flattened = [];
	function traverse(links) {
		if (!Array.isArray(links)) return;
		links.forEach((link) => {
			flattened.push(link);
			if (link.links && Array.isArray(link.links)) {
				traverse(link.links);
			}
		});
	}
	documents.forEach((doc) => {
		if (doc.links && Array.isArray(doc.links)) {
			traverse(doc.links);
		}
	});
	return flattened;
}

// Returns the { prev, next } links surrounding `currentRoute` in reading order.
// Hidden links (ex. legacy pages) and non-routable links (ex. external) are excluded.
function paginateDocs(documents, currentRoute) {
	const pages = flattenDocumentLinks(documents).filter((link) => link.route && !link.hidden);
	const currentIndex = pages.findIndex((link) => link.route === currentRoute);

	if (currentIndex === -1) {
		return { prev: null, next: null };
	}

	return {
		prev: currentIndex > 0 ? pages[currentIndex - 1] : null,
		next: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null,
	};
}
