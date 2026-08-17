/*
	Creates the error thrown when a request is aborted via an AbortSignal.

	A plain Error with the name reassigned is used instead of a DOMException so this works in
	environments without one (the client runs in browsers, workers and node). Consumers detect
	aborts by name - `fetch` rejects with its own AbortError, and both arrive at callers wrapped
	in the `{ err, fetchDetails }` shape thrown by `API.request`.
*/
export function abortError(message = 'The user aborted a request.'): Error {
	const err = new Error(message);
	err.name = 'AbortError';
	return err;
}
