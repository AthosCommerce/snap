const o = 'ss-a11y',
	r =
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
function l(e, d, u, s) {
	const i = 'ssA11yFocusStyle';
	if (!document.querySelector(`#${i}`)) {
		const t = document.createElement('style');
		(t.type = 'text/css'),
			(t.id = i),
			(t.innerHTML = `[${o}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
			document.getElementsByTagName('head')[0].appendChild(t);
	}
	e &&
		!e.attributes?.[o] &&
		(e.setAttribute(o, !0),
		e.setAttribute('tabIndex', `${d || 0}`),
		e.addEventListener('keydown', (t) => {
			(t.code === 'Space' || t.code === 'Enter') && t.target === e && e.click();
		}),
		u &&
			e.addEventListener('keydown', function (t) {
				const n = e.querySelectorAll(r),
					a = n[0],
					c = n[n.length - 1];
				if (t.keyCode == 27) {
					e.focus(), s && s(t), t.preventDefault(), t.stopPropagation();
					return;
				}
				(t.key === 'Tab' || t.keyCode === 9) &&
					(t.shiftKey
						? document.activeElement === a && (c.focus(), t.preventDefault())
						: document.activeElement === c && (a.focus(), t.preventDefault()));
			}));
}
export { o as A, r as F, l as u };
