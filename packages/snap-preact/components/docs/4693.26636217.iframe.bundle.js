'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4693],
		{
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(u, m, i) {
				i.d(m, { O: () => T, i: () => v });
				var l = i('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = i('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = i('../../node_modules/mobx-react-lite/es/index.js'),
					t = i('../../node_modules/classnames/index.js'),
					e = i.n(t),
					n = i('./components/src/components/Molecules/Result/Result.tsx'),
					s = i('./components/src/utilities/cloneWithProps.tsx'),
					r = i('./components/src/utilities/defined.ts'),
					M = i('./components/src/utilities/mergeProps.ts'),
					D = i('./components/src/utilities/mergeStyles.ts'),
					R = i('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = i('./components/src/providers/treePath.tsx');
				const T = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					y = () => (0, a.AH)({}),
					v = (0, o.PA)((_) => {
						const A = (0, R.u)(),
							C = (0, g.LU)(),
							L = { resultWidth: '240px', name: _.controller?.store?.profile?.tag?.toLowerCase(), treePath: C },
							c = (0, M.v6)('recommendationEmail', A, L, _),
							{
								controller: d,
								results: B,
								resultComponent: E,
								resultProps: p,
								resultWidth: U,
								treePath: P,
								disableStyles: W,
								internalClassName: j,
								className: I,
							} = c,
							K = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, r.s)({ disableStyles: W }), theme: c?.theme, treePath: P },
							},
							x = (0, D.Z)(c, y),
							f = B || d?.store?.results || [];
						return f.length > 0
							? (0, l.Y)('div', {
									className: e()('ss__recommendation-email', I, j),
									...x,
									children: f.map((h, O) =>
										(0, l.Y)(
											'div',
											{
												id: `ss-emailrec${O}`,
												className: e()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: U },
												children: E
													? (0, s.Y)(E, { controller: d, result: h, ...p, email: !0, treePath: P })
													: (0, l.Y)(n.Q, { result: h, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...K.result, ...p }),
											},
											O
										)
									),
							  })
							: (0, l.Y)(l.FK, {});
					});
			},
			'./src/Templates/Stores/library/components/RecommendationEmail.ts'(u, m, i) {
				i.r(m), i.d(m, { RecommendationEmail: () => l.i });
				var l = i('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(u, m, i) {
				i.d(m, { j: () => o });
				var l = Object.prototype.hasOwnProperty;
				function a(t, e, n) {
					for (n of t.keys()) if (o(n, e)) return n;
				}
				function o(t, e) {
					var n, s, r;
					if (t === e) return !0;
					if (t && e && (n = t.constructor) === e.constructor) {
						if (n === Date) return t.getTime() === e.getTime();
						if (n === RegExp) return t.toString() === e.toString();
						if (n === Array) {
							if ((s = t.length) === e.length) for (; s-- && o(t[s], e[s]); );
							return s === -1;
						}
						if (n === Set) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((r = s), (r && typeof r == 'object' && ((r = a(e, r)), !r)) || !e.has(r))) return !1;
							return !0;
						}
						if (n === Map) {
							if (t.size !== e.size) return !1;
							for (s of t) if (((r = s[0]), (r && typeof r == 'object' && ((r = a(e, r)), !r)) || !o(s[1], e.get(r)))) return !1;
							return !0;
						}
						if (n === ArrayBuffer) (t = new Uint8Array(t)), (e = new Uint8Array(e));
						else if (n === DataView) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t.getInt8(s) === e.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((s = t.byteLength) === e.byteLength) for (; s-- && t[s] === e[s]; );
							return s === -1;
						}
						if (!n || typeof t == 'object') {
							s = 0;
							for (n in t) if ((l.call(t, n) && ++s && !l.call(e, n)) || !(n in e) || !o(t[n], e[n])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return t !== t && e !== e;
				}
			},
		},
	]);
})();
