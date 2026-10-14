const u = (o, t = { delay: 333, focusElem: !0 }) => {
	let e;
	return {
		onMouseEnter: (r) => {
			clearTimeout(e),
				(e = window.setTimeout(() => {
					t.focusElem && r.target.focus(), o && o();
				}, t.delay || 333));
		},
		onMouseLeave: () => {
			clearTimeout(e);
		},
	};
};
export { u as c };
