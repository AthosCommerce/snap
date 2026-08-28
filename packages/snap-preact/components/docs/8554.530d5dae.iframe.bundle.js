'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8554],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(K, g, s) {
				s.d(g, { z: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = () => (0, E.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					B = (0, v.PA)((m) => {
						const i = (0, M.u)(),
							A = { treePath: (0, h.LU)() },
							_ = (0, D.v6)('badgeImage', i, A, m),
							{ label: t, url: a, tag: o, className: n, internalClassName: l } = _,
							{ overrideElement: r, shouldRenderDefault: d } = (0, C._)('badgeImage', _);
						if (!d) return r;
						const T = (0, x.Z)(_, O);
						return a
							? (0, e.Y)(u._, {
									children: (0, e.Y)('img', {
										...T,
										className: P()('ss__badge-image', `ss__badge-image--${o}`, n, l),
										alt: t || `${o} badge`,
										src: a,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(K, g, s) {
				s.d(g, { L: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ color: m, colorText: i }) =>
						(0, E.AH)({
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
						const d = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...d,
										className: P()('ss__badge-pill', `ss__badge-pill--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-pill__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(K, g, s) {
				s.d(g, { Z: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ color: m, colorText: i }) =>
						(0, E.AH)({
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
						const d = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...d,
										className: P()('ss__badge-rectangle', `ss__badge-rectangle--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-rectangle__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(K, g, s) {
				s.d(g, { p: () => B });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
					v = s('../../node_modules/mobx-react-lite/es/index.js'),
					u = s('./components/src/providers/cache.tsx'),
					M = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					x = s('./components/src/utilities/mergeStyles.ts'),
					C = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ colorText: m }) =>
						(0, E.AH)({
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
						const d = (0, x.Z)(_, O);
						return t
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...d,
										className: P()('ss__badge-text', `ss__badge-text--${a}`, o, n),
										children: (0, e.Y)('span', { className: 'ss__badge-text__value', children: t }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(K, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/mobx-react-lite/es/index.js'),
					p = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					P = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = s('../../node_modules/classnames/index.js'),
					u = s.n(v),
					M = s('./components/src/providers/cache.tsx'),
					h = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = s('./components/src/providers/treePath.tsx'),
					x = s('./components/src/utilities/mergeProps.ts'),
					C = s('./components/src/utilities/mergeStyles.ts'),
					O = s('./components/src/hooks/useCustomComponentOverride.tsx');
				const B = ({ theme: i }) =>
						(0, P.AH)({ color: i?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					m = (0, E.PA)((i) => {
						const I = (0, h.u)(),
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
							t = (0, x.v6)('price', I, _, i),
							{
								lineThrough: a,
								value: o,
								format: n,
								symbol: l,
								decimalPlaces: r,
								padDecimalPlaces: d,
								thousandsSeparator: T,
								decimalSeparator: R,
								symbolAfter: W,
								raw: b,
								className: y,
								internalClassName: N,
							} = t,
							{ overrideElement: Y, shouldRenderDefault: j } = (0, O._)('price', t);
						if (!j) return Y;
						let c;
						o && (c = n ? n(o) : p.G(o, { symbol: '', decimalPlaces: r, padDecimalPlaces: d, thousandsSeparator: T, decimalSeparator: R }));
						const L = (0, C.Z)(t, B);
						return c
							? b
								? (0, e.Y)(e.FK, { children: c })
								: (0, e.Y)(M._, {
										children: (0, e.FD)('span', {
											...L,
											className: u()('ss__price', { 'ss__price--strike': a }, y, N),
											children: [
												!n && l && !W ? (0, e.Y)('span', { className: 'ss__price__symbol', children: l }) : (0, e.Y)(e.FK, {}),
												(0, e.Y)('span', { className: 'ss__price__value', children: c }),
												!n && l && W ? (0, e.Y)('span', { className: 'ss__price__symbol', children: l }) : (0, e.Y)(e.FK, {}),
											],
										}),
								  })
							: null;
					});
				s.d(g, ['g', 0, m]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(K, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
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
				const I = () => (0, E.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
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
							{ result: d, tag: T, renderEmpty: R, limit: W, className: b, internalClassName: y, treePath: N } = r,
							{ overrideElement: Y, shouldRenderDefault: j } = (0, i._)('calloutBadge', r);
						if (!j) return Y;
						const c = { ...O.q, ...(o?.templates?.library.import.component.badge || {}), ...r.componentMap },
							L = (0, C.Z)(r, I),
							S = d?.display?.badges?.atLocation(T).slice(0, W);
						return R || S?.length
							? (0, e.Y)(u._, {
									children: (0, e.Y)('div', {
										...L,
										className: P()('ss__callout-badge', `ss__callout-badge--${T?.replace('/', '-')}`, b, y),
										children: S.map((F, z) => (0, e.Y)(A, { badge: F, badgeComponentMap: c, treePath: N }, `${F.component}-${z}`)),
									}),
							  })
							: null;
					});
				s.d(g, ['W', 0, _]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(K, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					p = s('../../node_modules/classnames/index.js'),
					P = s.n(p),
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
						(0, E.AH)({
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
					I = ({ controller: t }) => {
						const o = t?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let n = {};
						if (o?.length && o[0]?.length) {
							const l = o.map((d) => `"${d.join(' ')}"`).join(' ');
							n = {
								gridTemplateColumns: `repeat(${o[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${o.length}, minmax(0, 1fr))`,
								gridTemplateAreas: l,
							};
						}
						return (0, E.AH)({
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
							{ result: d, children: T, controller: R, renderEmpty: W, limit: b, className: y, internalClassName: N, treePath: Y } = r,
							{ overrideElement: j, shouldRenderDefault: c } = (0, m._)('overlayBadge', r);
						if (!c) return j;
						if (!T) return R?.log?.warn('OverlayBadge component must have children'), null;
						const L = R?.store?.meta;
						if (!L) return R?.log?.warn('Controller must have a meta store'), (0, e.Y)(e.FK, { children: T });
						const S = 'overlay',
							F = { ...O.q, ...(o?.templates?.library.import.component.badge || {}), ...r.componentMap },
							H = L?.badges?.groups?.[S]?.sections
								?.map((f) => {
									const G = L?.data?.badges?.locations[f],
										U = G?.map(($, Z) => ({
											tag: $.tag,
											name: $.name,
											top: Z == 0,
											bottom: Z == G.length - 1,
											badges: d?.display?.badges?.atLocation(`${f}/${$.tag}`).slice(0, b),
										})).filter(($) => $.badges?.length);
									return { section: f, slots: U };
								})
								.filter((f) => f.slots?.length),
							Q = (0, C.Z)(r, I);
						return W || H?.length
							? (0, e.Y)(u._, {
									children: (0, e.FD)('div', {
										...Q,
										className: P()('ss__overlay-badge', y, N),
										children: [
											(0, e.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: H.map((f, G) =>
													f.slots?.map((U) => {
														const $ = i({ ...r, tag: U.tag, section: f.section, index: G, top: U.top, bottom: U.bottom });
														return (0, e.Y)(
															'div',
															{
																className: P()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${U.tag}`),
																css: [$],
																children: U.badges.map((Z, J) =>
																	(0, e.Y)(A, { badge: Z, badgeComponentMap: F, treePath: Y }, `${U.tag}-${Z.component}-${J}`)
																),
															},
															`${f.section}-${U.tag}`
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
			'./components/src/components/Molecules/Rating/Rating.tsx'(K, g, s) {
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					E = s('../../node_modules/mobx-react-lite/es/index.js'),
					p = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					P = s('../../node_modules/classnames/index.js'),
					v = s.n(P),
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
					i = (0, E.PA)((I) => {
						const A = (0, M.u)(),
							t = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, h.LU)() },
							a = (0, x.v6)('rating', A, t, I),
							{
								alwaysRender: o,
								count: n,
								text: l,
								disablePartialFill: r,
								emptyIcon: d,
								fullIcon: T,
								disableStyles: R,
								className: W,
								internalClassName: b,
								treePath: y,
							} = a,
							{ overrideElement: N, shouldRenderDefault: Y } = (0, B._)('rating', a);
						if (!Y) return N;
						const j = {
							fullIcon: { name: 'star--full', ...(0, D.s)({ disableStyles: R }), theme: a?.theme, treePath: y },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, D.s)({ disableStyles: R }), theme: a?.theme, treePath: y },
						};
						let c = a.value;
						isNaN(c) && (c = Number(c) || 0), c < 0 && (c = 0), c > 5 && (c = 5);
						const L = (0, C.Z)(a, m),
							S = r ? Math.floor(c) : Math.ceil(c);
						return o || c || n
							? (0, e.Y)(u._, {
									children: (0, e.FD)('div', {
										className: v()('ss__rating', W, b),
										...L,
										children: [
											(0, e.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, e.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, e.Y)(O.I, { ...j.emptyIcon, ...(typeof d == 'string' ? { icon: d } : d) }),
															})
														),
													}),
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(S)].map((F, z) => {
															let H = 100;
															return (
																z + 1 == S && !r && c % 1 != 0 && (H = (c % 1 || 1) * 100),
																(0, e.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${H}%` },
																	children: (0, e.Y)(O.I, { ...j.fullIcon, ...(typeof T == 'string' ? { icon: T } : T) }),
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(K, g, s) {
				s.d(g, { q: () => v });
				var e = s('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					E = s('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					p = s('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					P = s('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const v = { BadgeText: () => e.p, BadgePill: () => E.L, BadgeRectangle: () => p.Z, BadgeImage: () => P.z };
			},
		},
	]);
})();
