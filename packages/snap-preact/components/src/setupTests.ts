import '@testing-library/jest-dom';

// jsdom does not implement ResizeObserver, which the Slideshow component relies on.
if (typeof global.ResizeObserver === 'undefined') {
	global.ResizeObserver = class ResizeObserver {
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
