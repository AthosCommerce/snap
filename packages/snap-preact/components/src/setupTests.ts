import '@testing-library/jest-dom';

if (typeof global.ResizeObserver === 'undefined') {
	global.ResizeObserver = class ResizeObserver {
		// eslint-disable-next-line @typescript-eslint/no-empty-function --- IGNORE ---
		observe() {}
		// eslint-disable-next-line @typescript-eslint/no-empty-function --- IGNORE ---
		unobserve() {}
		// eslint-disable-next-line @typescript-eslint/no-empty-function --- IGNORE ---
		disconnect() {}
	};
}
