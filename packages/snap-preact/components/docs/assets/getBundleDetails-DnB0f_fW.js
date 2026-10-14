const o = async (s) =>
	new Promise((a, n) => {
		const e = new XMLHttpRequest();
		e.open('HEAD', s, !0),
			(e.onreadystatechange = () => {
				if (e.readyState === e.DONE) {
					const t = e.status,
						r = e.getResponseHeader('Last-Modified');
					(r && t === 0) || (t >= 200 && t < 400)
						? a({ url: s, lastModified: r?.split(',')[1]?.trim() || '' })
						: n({ message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' });
				}
			}),
			(e.onerror = () => n({ message: 'Branch load fail!', description: 'There was an error with the request.' })),
			e.send();
	});
export { o as getBundleDetails };
