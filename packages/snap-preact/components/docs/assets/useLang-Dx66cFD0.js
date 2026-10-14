const b = (r, l, u) => {
	const a = u ? { ...l, ...u } : l,
		s = {};
	return (
		Object.keys(r).forEach((i) => {
			const t = r && r[i],
				e = {};
			t &&
				(t?.value &&
					(typeof t.value == 'function'
						? (e.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value(a) } })
						: (e.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: t.value } })),
				t?.attributes &&
					Object.keys(t?.attributes).length &&
					((e.attributes = { 'ss-lang': i }),
					t?.attributes?.['aria-label'] &&
						(typeof t.attributes?.['aria-label'] == 'function'
							? (e.attributes['aria-label'] = t.attributes['aria-label'](a))
							: (e.attributes['aria-label'] = t.attributes['aria-label'])),
					t?.attributes?.['aria-valuetext'] &&
						(typeof t.attributes?.['aria-valuetext'] == 'function'
							? (e.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](a))
							: (e.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
					t?.attributes?.title &&
						(typeof t.attributes?.title == 'function' ? (e.attributes.title = t.attributes.title(a)) : (e.attributes.title = t.attributes.title)),
					t?.attributes?.alt &&
						(typeof t.attributes?.alt == 'function' ? (e.attributes.alt = t.attributes.alt(a)) : (e.attributes.alt = t.attributes.alt)),
					t?.attributes?.placeholder &&
						(typeof t.attributes?.placeholder == 'function'
							? (e.attributes.placeholder = t.attributes.placeholder(a))
							: (e.attributes.placeholder = t.attributes.placeholder))),
				(e.all = { ...e.value, ...e.attributes, 'ss-lang': i })),
				(s[i] = e);
		}),
		s
	);
};
export { b as u };
