import { h } from 'preact';
import { useRef, useEffect, MutableRef } from 'preact/hooks';

export function useClickOutside(
	callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
	capture = false
): MutableRef<HTMLElement | undefined> {
	const callbackRef: MutableRef<((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined> = useRef();

	const innerRef: MutableRef<HTMLElement | undefined> = useRef();

	useEffect(() => {
		callbackRef.current = callback;
	});

	useEffect(() => {
		// capture phase (opt-in) sees the outside click even when an element between the target and
		// document stops propagation (e.g. the quickview wrapper shielding autocomplete's document handler).
		// Default stays bubble phase so inner/portaled content can keep a container open via stopPropagation().
		document.addEventListener('click', handleClick as unknown as EventListenerOrEventListenerObject, capture);

		return () => document.removeEventListener('click', handleClick as unknown as EventListenerOrEventListenerObject, capture);

		function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
			if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target as HTMLElement)) callbackRef.current(e);
		}
	}, []);

	return innerRef;
}
