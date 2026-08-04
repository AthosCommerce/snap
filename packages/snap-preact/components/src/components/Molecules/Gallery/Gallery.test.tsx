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

	it('renders the controls via the Button atom (svg icons, not glyphs)', () => {
		render(<Gallery images={IMAGES} open={true} />);
		for (const hook of [
			'.ss__gallery__zoom-out',
			'.ss__gallery__zoom-in',
			'.ss__gallery__close',
			'.ss__gallery__nav--prev',
			'.ss__gallery__nav--next',
		]) {
			const control = document.querySelector(hook)!;
			expect(control).not.toBeNull();
			expect(control.querySelector('svg')).not.toBeNull();
		}
	});

	it('zooms in and out via the toolbar buttons (scale transform)', () => {
		render(<Gallery images={IMAGES} open={true} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const zoomIn = document.querySelector('.ss__gallery__zoom-in')!;
		const zoomOut = document.querySelector('.ss__gallery__zoom-out')!;

		// Starts at scale(1); zoom-out disabled at minimum.
		expect(img().style.transform).toContain('scale(1)');
		expect(zoomOut.className).toContain('ss__button--disabled');

		// Clicking the disabled zoom-out must not drop below the minimum scale.
		const transformAtMin = img().style.transform;
		fireEvent.click(zoomOut);
		expect(img().style.transform).toBe(transformAtMin);
		expect(img().style.transform).toContain('scale(1)');

		fireEvent.click(zoomIn);
		expect(img().style.transform).toContain('scale(1.5)');
		expect(zoomOut.className).not.toContain('ss__button--disabled');

		fireEvent.click(zoomOut);
		expect(img().style.transform).toContain('scale(1)');
	});

	it('does not zoom past the maximum', () => {
		render(<Gallery images={IMAGES} open={true} />);
		const img = () => document.querySelector('img.ss__gallery__image') as HTMLImageElement;
		const zoomIn = document.querySelector('.ss__gallery__zoom-in')!;

		// MIN=1, MAX=4, STEP=0.5 → 6 clicks would be 4.0 (clamped). Click extra to ensure clamp.
		for (let i = 0; i < 10; i++) fireEvent.click(zoomIn);
		expect(img().style.transform).toContain('scale(4)');
		expect(zoomIn.className).toContain('ss__button--disabled');

		// Clicking the now-disabled zoom-in must not push past the maximum scale.
		const transformAtMax = img().style.transform;
		fireEvent.click(zoomIn);
		expect(img().style.transform).toBe(transformAtMax);
		expect(img().style.transform).toContain('scale(4)');
	});

	it('invokes onClose when the close button is clicked', () => {
		const onClose = jest.fn();
		render(<Gallery images={IMAGES} open={true} onClose={onClose} />);

		const close = document.querySelector('.ss__gallery__close')!;
		expect(close.querySelector('svg')).not.toBeNull();
		fireEvent.click(close);
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

	describe('accessibility and lang', () => {
		it('exposes dialog semantics and a useA11y focus trap on the gallery root', () => {
			render(<Gallery images={IMAGES} open={true} />);
			const gallery = document.querySelector('.ss__gallery') as HTMLElement;
			expect(gallery).toHaveAttribute('role', 'dialog');
			expect(gallery).toHaveAttribute('aria-modal', 'true');
			expect(gallery).toHaveAttribute('aria-label', 'Image gallery');
			expect(gallery).toHaveAttribute('ss-a11y');
			expect(gallery).toHaveAttribute('tabindex', '0');
		});

		it('renders the default control aria-labels via lang', () => {
			render(<Gallery images={IMAGES} open={true} />);
			expect(document.querySelector('.ss__gallery__zoom-out')).toHaveAttribute('aria-label', 'Zoom out');
			expect(document.querySelector('.ss__gallery__zoom-in')).toHaveAttribute('aria-label', 'Zoom in');
			expect(document.querySelector('.ss__gallery__close')).toHaveAttribute('aria-label', 'Close gallery');
			expect(document.querySelector('.ss__gallery__nav--prev')).toHaveAttribute('aria-label', 'Previous image');
			expect(document.querySelector('.ss__gallery__nav--next')).toHaveAttribute('aria-label', 'Next image');
		});

		it('lang props override the default aria-labels', () => {
			const lang = {
				gallery: { attributes: { 'aria-label': 'Bildergalerie' } },
				closeButton: { attributes: { 'aria-label': 'Galerie schließen' } },
				nextButton: { attributes: { 'aria-label': 'Nächstes Bild' } },
			};
			render(<Gallery images={IMAGES} open={true} lang={lang} />);
			expect(document.querySelector('.ss__gallery')).toHaveAttribute('aria-label', 'Bildergalerie');
			expect(document.querySelector('.ss__gallery__close')).toHaveAttribute('aria-label', 'Galerie schließen');
			expect(document.querySelector('.ss__gallery__nav--next')).toHaveAttribute('aria-label', 'Nächstes Bild');
		});

		it('closes exactly once when Escape fires inside the focus trap (no double-handling by the window listener)', () => {
			const onClose = jest.fn();
			render(<Gallery images={IMAGES} open={true} onClose={onClose} />);
			const gallery = document.querySelector('.ss__gallery') as HTMLElement;
			fireEvent.keyDown(gallery, { key: 'Escape', keyCode: 27 });
			expect(onClose).toHaveBeenCalledTimes(1);
		});

		it('traps Tab within the gallery controls', () => {
			render(<Gallery images={IMAGES} open={true} />);
			const gallery = document.querySelector('.ss__gallery') as HTMLElement;
			const first = document.querySelector('.ss__gallery__zoom-out') as HTMLElement;
			const last = document.querySelector('.ss__gallery__nav--next') as HTMLElement;

			// Tab from the last focusable element wraps to the first.
			last.focus();
			fireEvent.keyDown(gallery, { key: 'Tab', keyCode: 9 });
			expect(document.activeElement).toBe(first);

			// Shift+Tab from the first focusable element wraps back to the last.
			fireEvent.keyDown(gallery, { key: 'Tab', keyCode: 9, shiftKey: true });
			expect(document.activeElement).toBe(last);
		});

		it('moves focus to the close button on open and restores it on close', () => {
			const outerButton = document.createElement('button');
			document.body.appendChild(outerButton);
			outerButton.focus();
			expect(document.activeElement).toBe(outerButton);

			const rendered = render(<Gallery images={IMAGES} open={false} />);
			rendered.rerender(<Gallery images={IMAGES} open={true} />);
			expect(document.activeElement).toBe(document.querySelector('.ss__gallery__close'));

			rendered.rerender(<Gallery images={IMAGES} open={false} />);
			expect(document.activeElement).toBe(outerButton);
			document.body.removeChild(outerButton);
		});
	});
});
