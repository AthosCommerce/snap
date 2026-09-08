// A 0x0 root wrapper can prevent IntersectionObserver from ever reporting `isIntersecting`
// in some browsers, so lazyRender needs a non-zero min size on the root element at all times,
// even when disableStyles is set and the rest of defaultStyles is skipped.
export const lazyRenderMinSize = {
	minWidth: '1px',
	minHeight: '1px',
};
