// marks an element that was focused by hovering it, so its focus ring stays hidden - focus moved from the search
// input counts as keyboard focus to the browser, and would otherwise draw a ring under the pointer
const HOVER_FOCUS_ATTRIBUTE = 'ss-hover-focus';

const hoverFocusStyleId = 'ssHoverFocusStyle';

const focusFromHover = (elem: HTMLElement) => {
	if (!document.getElementById(hoverFocusStyleId)) {
		const style = document.createElement('style');
		style.id = hoverFocusStyleId;
		// the doubled attribute out-specifies the `[ss-a11y]:focus-visible` ring injected by `useA11y`
		style.innerHTML = `[${HOVER_FOCUS_ATTRIBUTE}][${HOVER_FOCUS_ATTRIBUTE}]:focus-visible { outline: none !important; }`;
		document.head.appendChild(style);
	}

	if (!elem.hasAttribute(HOVER_FOCUS_ATTRIBUTE)) {
		elem.setAttribute(HOVER_FOCUS_ATTRIBUTE, '');
		// the ring comes back as soon as the element is used from the keyboard, and the mark goes when focus leaves
		const clear = () => {
			elem.removeAttribute(HOVER_FOCUS_ATTRIBUTE);
			elem.removeEventListener('keydown', clear);
			elem.removeEventListener('blur', clear);
		};
		elem.addEventListener('keydown', clear);
		elem.addEventListener('blur', clear);
	}

	// browsers that support `focusVisible` skip the ring themselves - the attribute covers the rest
	elem.focus({ focusVisible: false });
};

export const createHoverProps = (callback?: () => void, options: { delay?: number; focusElem?: boolean } = { delay: 333, focusElem: true }) => {
	let delayTimeout: number;

	return {
		onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			clearTimeout(delayTimeout);
			delayTimeout = window.setTimeout(() => {
				options.focusElem && focusFromHover(e.target as HTMLElement);
				callback && callback();
			}, options.delay || 333);
		},
		onMouseLeave: () => {
			clearTimeout(delayTimeout);
		},
	};
};
