export type SearchOutcome = 'complete' | 'cancelled' | 'error';

export type SearchOperationOptions = {
	// a pending operation has been created but its search has not begun yet - used by the
	// autocomplete input debounce so the operation covers the whole keystroke to result span
	pending?: boolean;
	// called only by cancel() - the controller uses this to fire its `cancelled` event
	onCancel?: (reason?: string) => void;
	// called by both cancel() and supersede() - cleanup that must happen however the
	// operation is discarded (clearing a debounce timer, releasing a pending handle)
	onDiscard?: () => void;
};

export const SUPERSEDED = 'superseded';

/*
	A handle on a single controller search.

	The promise resolves with the outcome of the search and never rejects - the common trigger
	path (a UrlManager subscription) fires searches without retaining them, so a rejecting
	promise would surface as an unhandled rejection.

	`cancel()` is the public, integrator facing way to stop a search: it aborts the request and
	fires the controller's `cancelled` event. `supersede()` is the internal equivalent used when
	a newer search replaces this one - same mechanics, no event, since superseding is routine
	behavior rather than something a caller asked for.
*/
export class SearchOperation<ParamsType = unknown> {
	public params: ParamsType;
	public readonly promise: Promise<SearchOutcome>;
	public readonly signal?: AbortSignal;

	private abortController?: AbortController;
	private settleFn!: (outcome: SearchOutcome) => void;
	private settled = false;
	private _pending: boolean;
	private _cancelled = false;
	private _reason?: string;
	private onCancel?: (reason?: string) => void;
	private onDiscard?: () => void;

	constructor(params: ParamsType, options?: SearchOperationOptions) {
		this.params = params;
		this._pending = options?.pending || false;
		this.onCancel = options?.onCancel;
		this.onDiscard = options?.onDiscard;

		// only resolve is captured - rejection is structurally impossible
		this.promise = new Promise<SearchOutcome>((resolve) => {
			this.settleFn = resolve;
		});

		// use the document's own window AbortController to ensure realm compatibility (e.g. JSDOM)
		// and gracefully handle environments where AbortController is not available (e.g. IE11)
		try {
			const view = typeof document !== 'undefined' ? document.defaultView : undefined;
			const AbortControllerRef = ((view || (typeof window !== 'undefined' ? window : undefined)) as any)?.AbortController || AbortController;
			this.abortController = new AbortControllerRef();
			this.signal = this.abortController!.signal;
		} catch (e) {
			// AbortController not available - the operation still tracks outcome, it just cannot
			// abort the underlying request
		}
	}

	// true until start() is called - a pending operation has not begun its search
	public get pending(): boolean {
		return this._pending;
	}

	public get cancelled(): boolean {
		return this._cancelled;
	}

	// why the operation was cancelled, when a reason was given
	public get reason(): string | undefined {
		return this._reason;
	}

	// promotes a pending operation to an active one, finalizing the params it is searching for
	public start(params: ParamsType): void {
		this._pending = false;
		this.params = params;
	}

	// public API - stops the search and reports it to integrators via the controller's event
	public cancel = (reason?: string): void => {
		if (this.discard(reason)) {
			this.onCancel?.(reason);
		}
	};

	// internal - a newer search has replaced this one. Same mechanics as cancel() without the event
	public supersede(): void {
		this.discard(SUPERSEDED);
	}

	// internal - first write wins, so the first path to settle the operation decides its outcome
	public resolve(outcome: SearchOutcome): void {
		if (this.settled) {
			return;
		}

		this.settled = true;
		this.settleFn(outcome);
	}

	private discard(reason?: string): boolean {
		// already finished - nothing to stop
		if (this.settled) {
			return false;
		}

		this._cancelled = true;
		this._reason = reason;

		try {
			this.abortController?.abort();
		} catch (e) {
			// aborting is best effort - the operation is cancelled either way
		}

		this.resolve('cancelled');
		this.onDiscard?.();

		return true;
	}
}

/*
	Detects an aborted request. `API.request` in snap-client rewraps every rejection as
	`{ err, fetchDetails }`, so an AbortError arrives nested - both shapes are checked.
*/
export const isAbortError = (err: any): boolean => err?.name === 'AbortError' || err?.err?.name === 'AbortError';
