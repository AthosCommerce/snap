import '@testing-library/jest-dom';

// jsdom does not implement ResizeObserver, which the Slideshow component relies on.
if (typeof globalThis.ResizeObserver === 'undefined') {
	globalThis.ResizeObserver = class ResizeObserver {
		observe() {
			/* no-op */
		}
		unobserve() {
			/* no-op */
		}
		disconnect() {
			/* no-op */
		}
	};
}
