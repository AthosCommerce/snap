import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import { Gallery } from './Gallery';

const IMAGES = ['http://example.com/a.jpg', 'http://example.com/b.jpg', 'http://example.com/c.jpg'];

// jsdom's TouchEvent constructor drops plain {clientX} points (it requires real Touch
// instances), so build a generic event and attach the touch list as an own property. preact
// passes the native event straight to the handler, which reads `touches`/`changedTouches`.
const fireTouch = (node: Element, type: 'touchstart' | 'touchend', point: { clientX: number; clientY: number }) => {
	const event = new Event(type, { bubbles: true, cancelable: true });
	const key = type === 'touchstart' ? 'touches' : 'changedTouches';
	(event as any)[key] = [point];
	fireEvent(node, event);
};

describe('Gallery', () => {
	it('renders nothing when closed', () => {
		render(<Gallery images={IMAGES} open={false} />);
		expect(document.querySelector('.ss__gallery')).toBeNull();
	});

	it('renders nothing when there are no images', () => {
		render(<Gallery images={[]} open={true} />);
		expect(document.querySelector('.ss__gallery')).toBeNull();
	});

	it('opens at the provided startIndex and shows that image', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={1} />);
		const img = document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		expect(img).not.toBeNull();
		expect(img.getAttribute('src')).toBe(IMAGES[1]);
		// Counter reflects 1-based position.
		expect(document.querySelector('.ss__gallery__counter')!.textContent).toBe('2 / 3');
	});

	it('advances to the next image (and wraps around)', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={2} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		expect(img().getAttribute('src')).toBe(IMAGES[2]);

		fireEvent.click(document.querySelector('.ss__gallery__nav--next')!);
		// Wraps from last back to first.
		expect(img().getAttribute('src')).toBe(IMAGES[0]);
	});

	it('goes to the previous image (and wraps around)', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={0} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;

		fireEvent.click(document.querySelector('.ss__gallery__nav--prev')!);
		expect(img().getAttribute('src')).toBe(IMAGES[2]);
	});

	it('zooms in and out via the toolbar buttons (scale transform)', () => {
		render(<Gallery images={IMAGES} open={true} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const zoomIn = document.querySelector('.ss__gallery__zoom-in') as HTMLButtonElement;
		const zoomOut = document.querySelector('.ss__gallery__zoom-out') as HTMLButtonElement;

		// Starts at scale(1); zoom-out disabled at minimum.
		expect(img().style.transform).toContain('scale(1)');
		expect(zoomOut.disabled).toBe(true);

		fireEvent.click(zoomIn);
		expect(img().style.transform).toContain('scale(1.5)');
		expect(zoomOut.disabled).toBe(false);

		fireEvent.click(zoomOut);
		expect(img().style.transform).toContain('scale(1)');
	});

	it('does not zoom past the maximum', () => {
		render(<Gallery images={IMAGES} open={true} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const zoomIn = document.querySelector('.ss__gallery__zoom-in') as HTMLButtonElement;

		// MIN=1, MAX=4, STEP=0.5 → 6 clicks would be 4.0 (clamped). Click extra to ensure clamp.
		for (let i = 0; i < 10; i++) fireEvent.click(zoomIn);
		expect(img().style.transform).toContain('scale(4)');
		expect(zoomIn.disabled).toBe(true);
	});

	it('invokes onClose when the close button is clicked', () => {
		const onClose = jest.fn();
		render(<Gallery images={IMAGES} open={true} onClose={onClose} />);

		fireEvent.click(document.querySelector('.ss__gallery__close')!);
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('invokes onClose on Escape and navigates with arrow keys', () => {
		const onClose = jest.fn();
		render(<Gallery images={IMAGES} open={true} startIndex={0} onClose={onClose} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;

		fireEvent.keyDown(window, { key: 'ArrowRight' });
		expect(img().getAttribute('src')).toBe(IMAGES[1]);

		fireEvent.keyDown(window, { key: 'Escape' });
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('dismisses when the backdrop (stage) is clicked, but not when the image is clicked', () => {
		const onClose = jest.fn();
		render(<Gallery images={IMAGES} open={true} onClose={onClose} />);

		// Clicking the image must NOT close.
		fireEvent.click(document.querySelector('img.ss__gallery__image')!);
		expect(onClose).not.toHaveBeenCalled();

		// Clicking the stage backdrop itself closes.
		fireEvent.click(document.querySelector('.ss__gallery__stage')!);
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('paginates to the next image on a left swipe (touch)', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={0} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const stage = document.querySelector('.ss__gallery__stage')!;

		// Swipe left (start right, end left) → next image.
		fireTouch(stage, 'touchstart', { clientX: 200, clientY: 100 });
		fireTouch(stage, 'touchend', { clientX: 120, clientY: 105 });
		expect(img().getAttribute('src')).toBe(IMAGES[1]);
	});

	it('paginates to the previous image on a right swipe (touch)', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={1} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const stage = document.querySelector('.ss__gallery__stage')!;

		// Swipe right (start left, end right) → previous image.
		fireTouch(stage, 'touchstart', { clientX: 100, clientY: 100 });
		fireTouch(stage, 'touchend', { clientX: 220, clientY: 110 });
		expect(img().getAttribute('src')).toBe(IMAGES[0]);
	});

	it('ignores small or vertical swipes', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={0} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const stage = document.querySelector('.ss__gallery__stage')!;

		// Below threshold → no change.
		fireTouch(stage, 'touchstart', { clientX: 200, clientY: 100 });
		fireTouch(stage, 'touchend', { clientX: 180, clientY: 100 });
		expect(img().getAttribute('src')).toBe(IMAGES[0]);

		// Dominantly vertical → no change.
		fireTouch(stage, 'touchstart', { clientX: 200, clientY: 100 });
		fireTouch(stage, 'touchend', { clientX: 150, clientY: 300 });
		expect(img().getAttribute('src')).toBe(IMAGES[0]);
	});

	it('does not paginate on swipe while zoomed in', () => {
		render(<Gallery images={IMAGES} open={true} startIndex={0} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const stage = document.querySelector('.ss__gallery__stage')!;

		// Zoom in first; horizontal drag then pans rather than paginating.
		fireEvent.click(document.querySelector('.ss__gallery__zoom-in')!);
		fireTouch(stage, 'touchstart', { clientX: 200, clientY: 100 });
		fireTouch(stage, 'touchend', { clientX: 120, clientY: 105 });
		expect(img().getAttribute('src')).toBe(IMAGES[0]);
	});

	it('hides the prev/next navigation when there is only one image', () => {
		render(<Gallery images={['http://example.com/only.jpg']} open={true} />);
		expect(document.querySelector('.ss__gallery__nav--next')).toBeNull();
		expect(document.querySelector('.ss__gallery__nav--prev')).toBeNull();
		// Counter only shown for multiple images.
		expect(document.querySelector('.ss__gallery__counter')).toBeNull();
		// But the (zoomable) image is still rendered.
		expect(document.querySelector('img.ss__gallery__image')).not.toBeNull();
	});
});
