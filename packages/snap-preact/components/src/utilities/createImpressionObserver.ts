import { type MutableRef, useRef } from 'preact/hooks';
import { useIntersectionAdvanced, UseIntersectionOptions } from '../hooks';

const IMPRESSION_VISIBILITY_THRESHOLD = 0.7;
const IMPRESSION_MIN_VISIBLE_TIME = 1000;
export function createImpressionObserver(options?: UseIntersectionOptions): {
	ref: MutableRef<HTMLElement | null>;
	inViewport: boolean;
	updateRef: (el: HTMLElement | null) => void;
} {
	const ref = useRef<HTMLElement | null>(null);
	const { inViewport, updateRef } = useIntersectionAdvanced(ref, {
		fireOnce: true,
		threshold: IMPRESSION_VISIBILITY_THRESHOLD,
		minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
		...options,
	});
	return {
		ref,
		inViewport,
		updateRef,
	};
}
