'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8554],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(W, g, s) {
				s.d(g, { z: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = () => (0, d.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					B = (0, v.PA)((m) => {
						const i = (0, M.u)(),
							A = { treePath: (0, h.LU)() },
							_ = (0, D.v6)('badgeImage', i, A, m),
							{ label: t, url: a, tag: o, className: n, internalClassName: l } = _,
							{ overrideElement: r, shouldRenderDefault: c } = (0, C._)('badgeImage', _);
						if (!c) return r;
						const T = (0, x.Z)(_, O);
						return a
							? (0, e.Y)(u._, {
									children: (0, e.Y)('img', {
										...T,
										className: E()('ss__badge-image', `ss__badge-image--${o}`, n, l),
										alt: t || `${o} badge`,
										src: a,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(W, g, s) {
				s.d(g, { L: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ color: m, colorText: i }) =>
						(0, d.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					B = (0, v.PA)((m) => {
						const i = (0, M.u)(),
							A = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							_ = (0, D.v6)('badgePill', i, A, m),
							{ value: t, tag: a, className: o, internalClassName: n } = _,
							{ overrideElement: l, shouldRenderDefault: r } = (0, C._)('badgePill', _);
						if (!r) return l;
						const c = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...c,
										className: E()('ss__badge-pill', `ss__badge-pill--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-pill__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(W, g, s) {
				s.d(g, { Z: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ color: m, colorText: i }) =>
						(0, d.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					B = (0, v.PA)((m) => {
						const i = (0, M.u)(),
							A = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							_ = (0, D.v6)('badgeRectangle', i, A, m),
							{ value: t, tag: a, className: o, internalClassName: n } = _,
							{ overrideElement: l, shouldRenderDefault: r } = (0, C._)('badgeRectangle', _);
						if (!r) return l;
						const c = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...c,
										className: E()('ss__badge-rectangle', `ss__badge-rectangle--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-rectangle__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(W, g, s) {
				s.d(g, { p: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ colorText: m }) =>
						(0, d.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: m,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					B = (0, v.PA)((m) => {
						const i = (0, M.u)(),
							A = { colorText: '#000000', treePath: (0, h.LU)() },
							_ = (0, D.v6)('badgeText', i, A, m),
							{ value: t, tag: a, className: o, internalClassName: n } = _,
							{ overrideElement: l, shouldRenderDefault: r } = (0, C._)('badgeText', _);
						if (!r) return l;
						const c = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...c,
										className: E()('ss__badge-text', `ss__badge-text--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-text__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(W, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/mobx-react-lite/es/index.js'),
					p = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = s('../../node_modules/classnames/index.js'),
					u = s.n(v),
					M = s('./components/src/providers/cache.tsx'),
					h = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = s('./components/src/providers/treePath.tsx'),
					x = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					O = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const B = ({ theme: i }) =>
						(0, E.AH)({ color: i?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					m = (0, d.PA)((i) => {
						const R = (0, h.u)(),
							_ = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, D.LU)(),
							},
							t = (0, x.v6)('price', R, _, i),
							{
								lineThrough: a,
								value: o,
								format: n,
								symbol: l,
								decimalPlaces: r,
								padDecimalPlaces: c,
								thousandsSeparator: T,
								decimalSeparator: L,
								symbolAfter: y,
								code: j,
								showCode: b,
								raw: Y,
								className: S,
								internalClassName: N,
							} = t,
							{ overrideElement: P, shouldRenderDefault: f } = (0, O._)('price', t);
						if (!f) return P;
						let I;
						o && (I = n ? n(o) : p.G(o, { symbol: '', decimalPlaces: r, padDecimalPlaces: c, thousandsSeparator: T, decimalSeparator: L }));
						const $ = (0, C.Z)(t, B);
						return I
							? Y
								? (0, e.Y)(e.FK, { children: I })
								: (0, e.Y)(M._, {
										children: (0, e.FD)('span', {
											...$,
											className: u()('ss__price', { 'ss__price--strike': a }, S, N),
											children: [
												!n && l && !y ? (0, e.Y)('span', { className: 'ss__price__symbol', children: l }) : (0, e.Y)(e.FK, {}),
												(0, e.Y)('span', { className: 'ss__price__value', children: I }),
												!n && l && y ? (0, e.Y)('span', { className: 'ss__price__symbol', children: l }) : (0, e.Y)(e.FK, {}),
												!n && b && j
													? (0, e.FD)(e.FK, { children: ['\xA0', (0, e.Y)('span', { className: 'ss__price__code', children: j })] })
													: (0, e.Y)(e.FK, {}),
											],
										}),
								  })
							: null;
					});
				s.d(g, ['g', 0, m]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(W, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/snap.tsx'),
					D = s('./components/src/providers/treePath.tsx'),
					x = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					O = s('./components/src/utilities/defaultBadgeComponentMap.ts'),
					B = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					m = s('./components/src/hooks/useComponent.tsx'),
					i = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const R = () => (0, d.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					A = ({ badge: t, badgeComponentMap: a, treePath: o }) => {
						const { ComponentOverride: n } = (0, m.x)(a, t.component);
						return n ? (0, e.Y)(n, { ...t, ...t.parameters, treePath: o }) : null;
					},
					_ = (0, v.PA)((t) => {
						const a = (0, M.u)(),
							o = (0, h.uk)(),
							n = (0, D.LU)(),
							l = { name: t.tag ? (0, B.P)(t.tag) : void 0, tag: 'callout', limit: 1, treePath: n },
							r = (0, x.v6)('calloutBadge', a, l, t),
							{ result: c, tag: T, renderEmpty: L, limit: y, className: j, internalClassName: b, treePath: Y } = r,
							{ overrideElement: S, shouldRenderDefault: N } = (0, i._)('calloutBadge', r);
						if (!N) return S;
						const P = { ...O.q, ...(o?.templates?.library.import.component.badge || {}), ...r.componentMap },
							f = (0, C.Z)(r, R),
							I = c?.display?.badges?.atLocation(T).slice(0, y);
						return L || I?.length
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...f,
										className: E()('ss__callout-badge', `ss__callout-badge--${T?.replace('/', '-')}`, j, b),
										children: I.map(($, z) => (0, e.Y)(A, { badge: $, badgeComponentMap: P, treePath: Y }, `${$.component}-${z}`)),
									}),
							  })
							: null;
					});
				s.d(g, ['W', 0, _]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(W, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					E = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/snap.tsx'),
					D = s('./components/src/providers/treePath.tsx'),
					x = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					O = s('./components/src/utilities/defaultBadgeComponentMap.ts'),
					B = s('./components/src/hooks/useComponent.tsx'),
					m = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const i = ({ section: t, top: a, bottom: o, index: n, tag: l }) =>
						(0, d.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: t == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !a && !o ? 'center' : o && !a ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: l,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - n, 1),
							width: '100%',
							height: '100%',
						}),
					R = ({ controller: t }) => {
						const o = t?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let n = {};
						if (o?.length && o[0]?.length) {
							const l = o.map((c) => `"${c.join(' ')}"`).join(' ');
							n = {
								gridTemplateColumns: `repeat(${o[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${o.length}, minmax(0, 1fr))`,
								gridTemplateAreas: l,
							};
						}
						return (0, d.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...n,
							},
						});
					},
					A = ({ badge: t, badgeComponentMap: a, treePath: o }) => {
						const { ComponentOverride: n } = (0, B.x)(a, t.component);
						return n ? (0, e.Y)(n, { ...t, ...t.parameters, treePath: o }) : null;
					},
					_ = (0, v.PA)((t) => {
						const a = (0, M.u)(),
							o = (0, h.uk)(),
							l = { limit: 1, treePath: (0, D.LU)() },
							r = (0, x.v6)('overlayBadge', a, l, t),
							{ result: c, children: T, controller: L, renderEmpty: y, limit: j, className: b, internalClassName: Y, treePath: S } = r,
							{ overrideElement: N, shouldRenderDefault: P } = (0, m._)('overlayBadge', r);
						if (!P) return N;
						if (!T) return L?.log?.warn('OverlayBadge component must have children'), null;
						const f = L?.store?.meta;
						if (!f) return L?.log?.warn('Controller must have a meta store'), (0, e.Y)(e.FK, { children: T });
						const I = 'overlay',
							$ = { ...O.q, ...(o?.templates?.library.import.component.badge || {}), ...r.componentMap },
							H = f?.badges?.groups?.[I]?.sections
								?.map((K) => {
									const G = f?.data?.badges?.locations[K],
										U = G?.map((F, Z) => ({
											tag: F.tag,
											name: F.name,
											top: Z == 0,
											bottom: Z == G.length - 1,
											badges: c?.display?.badges?.atLocation(`${K}/${F.tag}`).slice(0, j),
										})).filter((F) => F.badges?.length);
									return { section: K, slots: U };
								})
								.filter((K) => K.slots?.length),
							Q = (0, C.Z)(r, R);
						return y || H?.length
							? (0, e.Y)(u._, {
									children: (0, e.FD)('div', {
										...Q,
										className: E()('ss__overlay-badge', b, Y),
										children: [
											(0, e.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: H.map((K, G) =>
													K.slots?.map((U) => {
														const F = i({ ...r, tag: U.tag, section: K.section, index: G, top: U.top, bottom: U.bottom });
														return (0, e.Y)(
															'div',
															{
																className: E()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${U.tag}`),
																css: [F],
																children: U.badges.map((Z, J) =>
																	(0, e.Y)(A, { badge: Z, badgeComponentMap: $, treePath: S }, `${U.tag}-${Z.component}-${J}`)
																),
															},
															`${K.section}-${U.tag}`
														);
													})
												),
											}),
											T,
										],
									}),
							  })
							: (0, e.Y)(e.FK, { children: T });
					});
				s.d(g, ['Q', 0, _]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(W, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = s('../../node_modules/mobx-react-lite/es/index.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = s('../../node_modules/classnames/index.js'),
					v = s.n(E),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/defined.ts'),
					x = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					O = s('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = () =>
						(0, p.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							'& .ss__rating__icons': { position: 'relative' },
							'& .ss__rating__stars': {
								width: '100%',
								display: 'inline-grid',
								gridTemplateColumns: '20% 20% 20% 20% 20%',
								'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
								'&.ss__rating__stars--empty': { position: 'relative' },
							},
							'& .ss__rating__stars__star': { overflow: 'hidden' },
							'& .ss__icon': { maxWidth: 'max-content' },
						}),
					i = (0, d.PA)((R) => {
						const A = (0, M.u)(),
							t = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, h.LU)() },
							a = (0, x.v6)('rating', A, t, R),
							{
								alwaysRender: o,
								count: n,
								text: l,
								disablePartialFill: r,
								emptyIcon: c,
								fullIcon: T,
								disableStyles: L,
								className: y,
								internalClassName: j,
								treePath: b,
							} = a,
							{ overrideElement: Y, shouldRenderDefault: S } = (0, B._)('rating', a);
						if (!S) return Y;
						const N = {
							fullIcon: { name: 'star--full', ...(0, D.s)({ disableStyles: L }), theme: a?.theme, treePath: b },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, D.s)({ disableStyles: L }), theme: a?.theme, treePath: b },
						};
						let P = a.value;
						isNaN(P) && (P = Number(P) || 0), P < 0 && (P = 0), P > 5 && (P = 5);
						const f = (0, C.Z)(a, m),
							I = r ? Math.floor(P) : Math.ceil(P);
						return o || P || n
							? (0, e.Y)(u._, {
									children: (0, e.FD)('div', {
										className: v()('ss__rating', y, j),
										...f,
										children: [
											(0, e.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, e.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, e.Y)(O.I, { ...N.emptyIcon, ...(typeof c == 'string' ? { icon: c } : c) }),
															})
														),
													}),
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(I)].map(($, z) => {
															let H = 100;
															return (
																z + 1 == I && !r && P % 1 != 0 && (H = (P % 1 || 1) * 100),
																(0, e.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${H}%` },
																	children: (0, e.Y)(O.I, { ...N.fullIcon, ...(typeof T == 'string' ? { icon: T } : T) }),
																})
															);
														}),
													}),
												],
											}),
											n ? (0, e.FD)('span', { className: 'ss__rating__count', children: ['(', n, ')'] }) : (0, e.Y)(e.FK, {}),
											l ? (0, e.Y)('span', { className: 'ss__rating__text', children: l }) : (0, e.Y)(e.FK, {}),
										],
									}),
							  })
							: null;
					});
				s.d(g, ['G', 0, i]);
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(W, g, s) {
				s.d(g, { q: () => v });
				var e = s('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					d = s('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					p = s('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					E = s('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const v = { BadgeText: () => e.p, BadgePill: () => d.L, BadgeRectangle: () => p.Z, BadgeImage: () => E.z };
			},
		},
	]);
})();
