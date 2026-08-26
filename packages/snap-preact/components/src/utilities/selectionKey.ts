import type { ListOption } from '../types';

// identifies a selection by the fields that options are matched on when rendering, so that a store
// handing back an equivalent - but not identical - option counts as the same selection. option
// objects themselves are not comparable: those built by the stores carry a UrlManager that picks up
// every url change, which would read as a new selection on each navigation
export function selectionKey(selected?: ListOption | ListOption[]): string {
	const options = selected == undefined ? [] : Array.isArray(selected) ? selected : [selected];

	// label is included so that options without a value still produce distinct keys
	return options.map((option) => `${option?.value}:${option?.label}`).join('|');
}
