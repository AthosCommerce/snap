'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4340],
		{
			'./src/getBundleDetails/getBundleDetails.ts'(d, t, n) {
				n.r(t);
				const c = async (a) =>
					new Promise((i, r) => {
						const e = new XMLHttpRequest();
						e.open('HEAD', a, !0),
							(e.onreadystatechange = () => {
								if (e.readyState === e.DONE) {
									const s = e.status,
										o = e.getResponseHeader('Last-Modified');
									(o && s === 0) || (s >= 200 && s < 400)
										? i({ url: a, lastModified: o?.split(',')[1]?.trim() || '' })
										: r({ message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' });
								}
							}),
							(e.onerror = () => r({ message: 'Branch load fail!', description: 'There was an error with the request.' })),
							e.send();
					});
				n.d(t, ['getBundleDetails', 0, c]);
			},
		},
	]);
})();
