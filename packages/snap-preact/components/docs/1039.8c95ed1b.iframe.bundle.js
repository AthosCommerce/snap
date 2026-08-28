'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1039, 8554],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(B, m, e) {
				const t = (i) => i.replace(/_/g, '-').toLowerCase();
				e.d(m, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(B, m, e) {
				e.d(m, { G: () => i });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function i(a, o) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, t.Z)(a, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(B, m, e) {
				e.d(m, { Z: () => t });
				function t(a, o) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof a != 'number' || Number.isNaN(a)) return;
					const l = i(a, s.decimalPlaces).split('.');
					(l[0] = l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (l[1] = (l[1] || '').padEnd(s.decimalPlaces, '0'));
					let n = l.join(s.decimalSeparator);
					return s.symbolAfter ? (n = n + s.symbol) : (n = s.symbol + n), n;
				}
				function i(a, o) {
					const s = a.toString(),
						l = s.indexOf('.'),
						n = l == -1 ? s.length : 1 + l + (o || -1);
					return s.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(B, m, e) {
				e.d(m, { p: () => t });
				function t(i) {
					if (typeof i != 'string') return i;
					let a = i.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(B, m, e) {
				e.d(m, { z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = () => (0, i.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					P = (0, s.PA)((g) => {
						const h = (0, n.u)(),
							T = { treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeImage', h, T, g),
							{ label: r, url: _, tag: d, className: u, internalClassName: O } = f,
							{ overrideElement: C, shouldRenderDefault: p } = (0, D._)('badgeImage', f);
						if (!p) return C;
						const x = (0, v.Z)(f, M);
						return _
							? (0, t.Y)(l._, {
									children: (0, t.Y)('img', {
										...x,
										className: o()('ss__badge-image', `ss__badge-image--${d}`, u, O),
										alt: r || `${d} badge`,
										src: _,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(B, m, e) {
				e.d(m, { L: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = ({ color: g, colorText: h }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: g,
							color: h,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					P = (0, s.PA)((g) => {
						const h = (0, n.u)(),
							T = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgePill', h, T, g),
							{ value: r, tag: _, className: d, internalClassName: u } = f,
							{ overrideElement: O, shouldRenderDefault: C } = (0, D._)('badgePill', f);
						if (!C) return O;
						const p = (0, v.Z)(f, M);
						return r
							? (0, t.Y)(l._, {
									children: (0, t.Y)('div', {
										...p,
										className: o()('ss__badge-pill', `ss__badge-pill--${_}`, d, u),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(B, m, e) {
				e.d(m, { Z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = ({ color: g, colorText: h }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: g,
							color: h,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					P = (0, s.PA)((g) => {
						const h = (0, n.u)(),
							T = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeRectangle', h, T, g),
							{ value: r, tag: _, className: d, internalClassName: u } = f,
							{ overrideElement: O, shouldRenderDefault: C } = (0, D._)('badgeRectangle', f);
						if (!C) return O;
						const p = (0, v.Z)(f, M);
						return r
							? (0, t.Y)(l._, {
									children: (0, t.Y)('div', {
										...p,
										className: o()('ss__badge-rectangle', `ss__badge-rectangle--${_}`, d, u),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(B, m, e) {
				e.d(m, { p: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = ({ colorText: g }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: g,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					P = (0, s.PA)((g) => {
						const h = (0, n.u)(),
							T = { colorText: '#000000', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeText', h, T, g),
							{ value: r, tag: _, className: d, internalClassName: u } = f,
							{ overrideElement: O, shouldRenderDefault: C } = (0, D._)('badgeText', f);
						if (!C) return O;
						const p = (0, v.Z)(f, M);
						return r
							? (0, t.Y)(l._, {
									children: (0, t.Y)('div', {
										...p,
										className: o()('ss__badge-text', `ss__badge-text--${_}`, d, u),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('./components/src/hooks/useA11y.tsx');
				const P = ({ transitionSpeed: h, color: A }) =>
						(0, i.AH)({
							transition: `background ${h} ease 0s, left 0s ease ${h}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${h} ease, left 0s ease`, background: A, left: '0' },
						}),
					g = (0, s.PA)((h) => {
						const A = (0, n.u)(),
							f = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, c.LU)() },
							r = (0, E.v6)('overlay', A, f, h),
							{ active: _, onClick: d, disableA11y: u, className: O, internalClassName: C } = r,
							{ overrideElement: p, shouldRenderDefault: x } = (0, D._)('overlay', r);
						if (!x) return p;
						const b = (0, v.Z)(r, P);
						return (0, t.Y)(l._, {
							children: (0, t.Y)('div', {
								onClick: (R) => d && _ && d(R),
								ref: (R) => (u ? null : (0, M.iy)(R, _ ? 0 : -1)),
								className: o()('ss__overlay', { 'ss__overlay--active': _ }, O, C),
								...b,
							}),
						});
					});
				e.d(m, ['h', 0, g]);
			},
			'./components/src/components/Atoms/Price/Price.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					l = e.n(s),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ theme: h }) =>
						(0, o.AH)({ color: h?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					g = (0, i.PA)((h) => {
						const A = (0, c.u)(),
							f = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, E.LU)(),
							},
							r = (0, v.v6)('price', A, f, h),
							{
								lineThrough: _,
								value: d,
								format: u,
								symbol: O,
								decimalPlaces: C,
								padDecimalPlaces: p,
								thousandsSeparator: x,
								decimalSeparator: b,
								symbolAfter: R,
								raw: w,
								className: S,
								internalClassName: $,
							} = r,
							{ overrideElement: k, shouldRenderDefault: U } = (0, M._)('price', r);
						if (!U) return k;
						let I;
						d && (I = u ? u(d) : a.G(d, { symbol: '', decimalPlaces: C, padDecimalPlaces: p, thousandsSeparator: x, decimalSeparator: b }));
						const K = (0, D.Z)(r, P);
						return I
							? w
								? (0, t.Y)(t.FK, { children: I })
								: (0, t.Y)(n._, {
										children: (0, t.FD)('span', {
											...K,
											className: l()('ss__price', { 'ss__price--strike': _ }, S, $),
											children: [
												!u && O && !R ? (0, t.Y)('span', { className: 'ss__price__symbol', children: O }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: I }),
												!u && O && R ? (0, t.Y)('span', { className: 'ss__price__symbol', children: O }) : (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(m, ['g', 0, g]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					g = e('./components/src/hooks/useComponent.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = () => (0, i.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					T = ({ badge: r, badgeComponentMap: _, treePath: d }) => {
						const { ComponentOverride: u } = (0, g.x)(_, r.component);
						return u ? (0, t.Y)(u, { ...r, ...r.parameters, treePath: d }) : null;
					},
					f = (0, s.PA)((r) => {
						const _ = (0, n.u)(),
							d = (0, c.uk)(),
							u = (0, E.LU)(),
							O = { name: r.tag ? (0, P.P)(r.tag) : void 0, tag: 'callout', limit: 1, treePath: u },
							C = (0, v.v6)('calloutBadge', _, O, r),
							{ result: p, tag: x, renderEmpty: b, limit: R, className: w, internalClassName: S, treePath: $ } = C,
							{ overrideElement: k, shouldRenderDefault: U } = (0, h._)('calloutBadge', C);
						if (!U) return k;
						const I = { ...M.q, ...(d?.templates?.library.import.component.badge || {}), ...C.componentMap },
							K = (0, D.Z)(C, A),
							z = p?.display?.badges?.atLocation(x).slice(0, R);
						return b || z?.length
							? (0, t.Y)(l._, {
									children: (0, t.Y)('div', {
										...K,
										className: o()('ss__callout-badge', `ss__callout-badge--${x?.replace('/', '-')}`, w, S),
										children: z.map((N, F) => (0, t.Y)(T, { badge: N, badgeComponentMap: I, treePath: $ }, `${N.component}-${F}`)),
									}),
							  })
							: null;
					});
				e.d(m, ['W', 0, f]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					o = e.n(a),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					P = e('./components/src/hooks/useComponent.tsx'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({ section: r, top: _, bottom: d, index: u, tag: O }) =>
						(0, i.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: r == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !_ && !d ? 'center' : d && !_ ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: O,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - u, 1),
							width: '100%',
							height: '100%',
						}),
					A = ({ controller: r }) => {
						const d = r?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let u = {};
						if (d?.length && d[0]?.length) {
							const O = d.map((p) => `"${p.join(' ')}"`).join(' ');
							u = {
								gridTemplateColumns: `repeat(${d[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${d.length}, minmax(0, 1fr))`,
								gridTemplateAreas: O,
							};
						}
						return (0, i.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...u,
							},
						});
					},
					T = ({ badge: r, badgeComponentMap: _, treePath: d }) => {
						const { ComponentOverride: u } = (0, P.x)(_, r.component);
						return u ? (0, t.Y)(u, { ...r, ...r.parameters, treePath: d }) : null;
					},
					f = (0, s.PA)((r) => {
						const _ = (0, n.u)(),
							d = (0, c.uk)(),
							O = { limit: 1, treePath: (0, E.LU)() },
							C = (0, v.v6)('overlayBadge', _, O, r),
							{ result: p, children: x, controller: b, renderEmpty: R, limit: w, className: S, internalClassName: $, treePath: k } = C,
							{ overrideElement: U, shouldRenderDefault: I } = (0, g._)('overlayBadge', C);
						if (!I) return U;
						if (!x) return b?.log?.warn('OverlayBadge component must have children'), null;
						const K = b?.store?.meta;
						if (!K) return b?.log?.warn('Controller must have a meta store'), (0, t.Y)(t.FK, { children: x });
						const z = 'overlay',
							N = { ...M.q, ...(d?.templates?.library.import.component.badge || {}), ...C.componentMap },
							H = K?.badges?.groups?.[z]?.sections
								?.map((y) => {
									const Y = K?.data?.badges?.locations[y],
										j = Y?.map((W, L) => ({
											tag: W.tag,
											name: W.name,
											top: L == 0,
											bottom: L == Y.length - 1,
											badges: p?.display?.badges?.atLocation(`${y}/${W.tag}`).slice(0, w),
										})).filter((W) => W.badges?.length);
									return { section: y, slots: j };
								})
								.filter((y) => y.slots?.length),
							Z = (0, D.Z)(C, A);
						return R || H?.length
							? (0, t.Y)(l._, {
									children: (0, t.FD)('div', {
										...Z,
										className: o()('ss__overlay-badge', S, $),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: H.map((y, Y) =>
													y.slots?.map((j) => {
														const W = h({ ...C, tag: j.tag, section: y.section, index: Y, top: j.top, bottom: j.bottom });
														return (0, t.Y)(
															'div',
															{
																className: o()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${j.tag}`),
																css: [W],
																children: j.badges.map((L, V) =>
																	(0, t.Y)(T, { badge: L, badgeComponentMap: N, treePath: k }, `${j.tag}-${L.component}-${V}`)
																),
															},
															`${y.section}-${j.tag}`
														);
													})
												),
											}),
											x,
										],
									}),
							  })
							: (0, t.Y)(t.FK, { children: x });
					});
				e.d(m, ['Q', 0, f]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					s = e.n(o),
					l = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = () =>
						(0, a.AH)({
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
					h = (0, i.PA)((A) => {
						const T = (0, n.u)(),
							r = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, c.LU)() },
							_ = (0, v.v6)('rating', T, r, A),
							{
								alwaysRender: d,
								count: u,
								text: O,
								disablePartialFill: C,
								emptyIcon: p,
								fullIcon: x,
								disableStyles: b,
								className: R,
								internalClassName: w,
								treePath: S,
							} = _,
							{ overrideElement: $, shouldRenderDefault: k } = (0, P._)('rating', _);
						if (!k) return $;
						const U = {
							fullIcon: { name: 'star--full', ...(0, E.s)({ disableStyles: b }), theme: _?.theme, treePath: S },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, E.s)({ disableStyles: b }), theme: _?.theme, treePath: S },
						};
						let I = _.value;
						isNaN(I) && (I = Number(I) || 0), I < 0 && (I = 0), I > 5 && (I = 5);
						const K = (0, D.Z)(_, g),
							z = C ? Math.floor(I) : Math.ceil(I);
						return d || I || u
							? (0, t.Y)(l._, {
									children: (0, t.FD)('div', {
										className: s()('ss__rating', R, w),
										...K,
										children: [
											(0, t.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, t.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, t.Y)(M.I, { ...U.emptyIcon, ...(typeof p == 'string' ? { icon: p } : p) }),
															})
														),
													}),
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(z)].map((N, F) => {
															let H = 100;
															return (
																F + 1 == z && !C && I % 1 != 0 && (H = (I % 1 || 1) * 100),
																(0, t.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${H}%` },
																	children: (0, t.Y)(M.I, { ...U.fullIcon, ...(typeof x == 'string' ? { icon: x } : x) }),
																})
															);
														}),
													}),
												],
											}),
											u ? (0, t.FD)('span', { className: 'ss__rating__count', children: ['(', u, ')'] }) : (0, t.Y)(t.FK, {}),
											O ? (0, t.Y)('span', { className: 'ss__rating__text', children: O }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(m, ['G', 0, h]);
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					l = e.n(s),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					D = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/hooks/useMediaQuery.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const T = ({ slideDirection: r, transitionSpeed: _, width: d }) =>
						(0, o.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${r || 'left'} ${_}`,
							left: r == 'left' ? `-${d}` : r != 'right' ? '0' : 'initial',
							right: r == 'right' ? `-${d}` : 'initial',
							bottom: r == 'bottom' ? '-100vh' : 'initial',
							top: r == 'top' ? '-100vh' : r == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: d?.endsWith('%') && parseInt(d.split('%')[0]) > 90 ? d : '90%',
							maxWidth: d,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: r == 'left' || r != 'right' ? '0' : 'initial',
								right: r == 'right' ? '0' : 'initial',
								bottom: r == 'bottom' ? '0' : 'initial',
								top: r == 'top' ? '0' : r == 'bottom' ? 'initial' : '0',
							},
						}),
					f = (0, a.PA)((r) => {
						const _ = (0, M.u)(),
							u = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, P.LU)(),
								rerender: !0,
							},
							O = (0, E.v6)('slideout', _, u, r),
							{
								children: C,
								active: p,
								rerender: x,
								buttonContent: b,
								buttonSelector: R,
								noButtonWrapper: w,
								displayAt: S,
								transitionSpeed: $,
								overlayColor: k,
								onChange: U,
								disableStyles: I,
								className: K,
								internalClassName: z,
								treePath: N,
							} = O,
							{ overrideElement: F, shouldRenderDefault: H } = (0, h._)('slideout', O);
						if (!H) return F;
						const Z = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, c.s)({ disableStyles: I, color: k, transitionSpeed: $ }),
									theme: O?.theme,
									treePath: N,
								},
							},
							[y, Y] = (0, i.J0)(!!p),
							[j, W] = (0, i.J0)(!!p),
							L = () => {
								const Q = !y;
								y
									? (Y(!1),
									  x &&
											setTimeout(() => {
												W(!1);
											}, 250))
									: (Y(!0), W(!0)),
									(document.body.style.overflow = Q ? 'hidden' : ''),
									U && U(Q);
							};
						(0, i.Nf)(() => {
							W(!!p), Y(!!p);
						}, [p]);
						const V = (0, g.U)(S, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = V && y ? 'hidden' : '';
						const G = (0, v.Z)(O, T);
						return (
							(0, i.vJ)(() => {
								if (R) {
									let Q;
									typeof R == 'string' ? (Q = document.querySelector(R)) : (Q = R), Q && Q.addEventListener('click', () => L());
								}
							}, []),
							V || !x
								? (0, t.FD)(D._, {
										children: [
											b &&
												(w
													? (0, n.Y)(b, { toggleActive: L, active: y, treePath: N })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => L(),
															children: (0, n.Y)(b, { active: y, treePath: N }),
													  })),
											(0, t.Y)('div', {
												className: l()('ss__slideout', K, z, { 'ss__slideout--active': y }),
												style: { visibility: x || V ? 'visible' : 'hidden' },
												...G,
												children: j && (0, n.Y)(C, { toggleActive: L, active: y, treePath: N }),
											}),
											(0, t.Y)(A.h, { ...Z.overlay, active: y, onClick: L }),
										],
								  })
								: null
						);
					});
				e.d(m, ['S', 0, f]);
			},
			'./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx'(B, m, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					l = e.n(s),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					D = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					g = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const h = () =>
						(0, o.AH)({
							'& .ss__slideout': { zIndex: 10006 },
							'& .ss__slideout__overlay': { zIndex: '10005 !important' },
							'& .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
						}),
					A = (0, a.PA)((T) => {
						const f = (0, c.u)(),
							_ = {
								treePath: (0, E.LU)(),
								slideDirection: 'right',
								width: '500px',
								overlayColor: 'rgba(0,0,0,0.8)',
								hideBadge: !1,
								layout: [
									['slideshow'],
									['productDetail.mappings.core.name'],
									['calloutBadge'],
									['variantSelections'],
									['quantityPicker'],
									['button.add-to-cart'],
									['productDetail.mappings.core.description'],
									['productDetailTable'],
									['button.more-info'],
								],
							},
							d = (0, D.v6)('quickviewSlideout', f, _, T),
							{
								quickviewManager: u,
								className: O,
								internalClassName: C,
								disableStyles: p,
								treePath: x,
								layout: b,
								hideBadge: R,
								column1: w,
								column2: S,
								column3: $,
								column4: k,
								recommendation: U,
								slideDirection: I,
								width: K,
								overlayColor: z,
								lang: N,
							} = d,
							[F, H] = (0, i.J0)(!1);
						(0, i.vJ)(() => {
							H(!0);
						}, []);
						const Z = (0, i.li)(null),
							y = (0, i.li)(null),
							Y = (0, i.li)(!1);
						(0, i.vJ)(() => {
							const J = !!u?.store?.isOpen && F;
							J && !Y.current
								? ((y.current = document.activeElement || null), Z.current?.querySelector('.ss__quickview__close')?.focus())
								: !J && Y.current && (y.current?.focus?.(), (y.current = null)),
								(Y.current = J);
						});
						const j = (0, M.Z)(d, h);
						if (!u)
							return (
								console.warn('[QuickviewSlideout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const W = u.store,
							L = W.product,
							V = !!W.isOpen && F,
							G = () => u.close(),
							Q = {
								quickviewLayout: {
									onClose: G,
									...(0, v.s)({ hideBadge: R, column1: w, column2: S, column3: $, column4: k, recommendation: U, lang: N }),
									...(0, v.s)({ disableStyles: p }),
									theme: d?.theme,
									treePath: x,
								},
								slideout: {
									rerender: !1,
									slideDirection: I,
									width: K,
									overlayColor: z,
									onChange: (J) => {
										J || G();
									},
									...(0, v.s)({ disableStyles: p }),
									theme: d?.theme,
									treePath: x,
								},
							},
							X = (0, t.Y)(g.p, { quickviewManager: u, ...Q.quickviewLayout, layout: b });
						return (0, t.Y)(n._, {
							children: (0, t.Y)('div', {
								...j,
								ref: Z,
								className: l()('ss__quickview-slideout', O, C),
								onClick: (J) => J.stopPropagation(),
								children: (0, t.Y)(P.S, {
									...Q.slideout,
									active: V,
									children: L ? (0, t.Y)(g.n, { quickviewManager: u, product: L, children: X }, `${L.responseId}-${L.id}`) : X,
								}),
							}),
						});
					});
				e.d(m, ['S', 0, A]);
			},
			'./components/src/hooks/useCreateController.tsx'(B, m, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (a, o, s) => {
					const [l, n] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							a.getController(s.id)
								.then((c) => {
									n(c);
								})
								.catch(async () => {
									let c = s;
									if (o === 'recommendation' && !s.plugins && !s.middleware)
										try {
											const E = await a.getInstantiator('recommendation');
											c = { ...s, plugins: E.config.config.plugins, middleware: E.config.config.middleware };
										} catch {}
									try {
										const E = await a.createController(o, c);
										n(E);
									} catch (E) {
										console.error(`useCreateController: failed to create controller "${s.id}"`, E);
									}
								});
						}, []),
						l
					);
				};
				e.d(m, ['i', 0, i]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, m, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 250,
					a = (s, l = {}) => {
						const { rootMargin: n = '0px', fireOnce: c = !1, threshold: E = 0, minVisibleTime: v = 0 } = l,
							[D, M] = (0, t.J0)(!1),
							P = (0, t.li)(null),
							g = (0, t.li)(null),
							[h, A] = (0, t.J0)(0),
							T = (0, t.hb)((f) => {
								(s.current = f), A((r) => r + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								M(!1);
								let f = null,
									r = null;
								if (!window.IntersectionObserver || !s.current) return;
								const _ = () => {
										r && (window.clearInterval(r), (r = null));
									},
									d = () => {
										v > 0
											? ((g.current = Date.now()),
											  P.current && window.clearTimeout(P.current),
											  (P.current = window.setTimeout(() => {
													M(!0), c && s.current && f && f.unobserve(s.current);
											  }, v)))
											: (M(!0), c && s.current && f && f.unobserve(s.current));
									},
									u = () => {
										P.current && window.clearTimeout(P.current), (P.current = null), (g.current = null), M(!1);
									};
								return (
									(f = new IntersectionObserver(
										([O]) => {
											O.isIntersecting
												? s.current && o(s.current)
													? (_(), d())
													: (u(),
													  r ||
															(r = window.setInterval(() => {
																if (!s.current) {
																	_();
																	return;
																}
																o(s.current) && (_(), d());
															}, i)))
												: (_(), u());
										},
										{ rootMargin: n, threshold: E }
									)),
									s.current && f.observe(s.current),
									() => {
										M(!1), _(), P.current && window.clearTimeout(P.current), f && s.current && f.unobserve(s.current);
									}
								);
							}, [s, h]),
							{ inViewport: D, updateRef: T }
						);
					};
				function o(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(m, ['v', 0, a]);
			},
			'./components/src/hooks/useMediaQuery.tsx'(B, m, e) {
				e.d(m, { U: () => i });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function i(a, o) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const s = window.matchMedia(a),
						[l, n] = (0, t.J0)(!!s.matches);
					return (
						(0, t.vJ)(() => {
							n(!!s.matches);
							const c = () => n(!!s.matches);
							return (
								s.addListener(c),
								() => {
									o instanceof Function && o(), s.removeListener(c);
								}
							);
						}, [a]),
						l
					);
				}
			},
			'./components/src/providers/withTracking.tsx'(B, m, e) {
				e.d(m, { N: () => o, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('./components/src/utilities/createImpressionObserver.ts'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'sstracking';
				function s(l) {
					const n = l;
					return (E) => {
						const { controller: v, result: D, banner: M, type: P, content: g, ...h } = E;
						if (E.trackingRef) return (0, t.Y)(n, { ...E });
						!v && (!P || !g) && console.warn('Warning: No controller provided to withTracking', E),
							!D && !M && (!P || !g) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: A, inViewport: T, updateRef: f } = (0, i.Q)(),
							r = (D || M || (P && g?.[P]?.[0]))?.responseId,
							_ = (0, a.li)(r),
							d = (0, a.li)(!1);
						_.current !== r && (d.current = !0),
							(0, a.vJ)(() => {
								_.current !== r && ((_.current = r), f(A.current));
							}, [r, f]),
							(0, a.vJ)(() => {
								d.current && !T && (d.current = !1);
							}, [T, r]);
						const u = P && g && !D && ['search', 'autocomplete'].includes(v?.type || '');
						T && !d.current && (u ? v?.track.banner.impression(g[P][0]) : D?.bundleSeed || v?.track.product.impression(D || M));
						const O = (0, a.hb)(
							(p) => {
								u ? v?.track.banner.click(p, g[P][0]) : v?.track.product.click(p, D || M);
							},
							[v, D, M, P, g]
						);
						(0, a.vJ)(() => {
							const p = A.current;
							if (p)
								return (
									p.setAttribute(o, 'true'),
									p.addEventListener('click', O, !0),
									() => {
										p.removeEventListener('click', O, !0);
									}
								);
						}, [O]);
						const C = {
							...h,
							controller: v,
							result: D,
							banner: M,
							type: P,
							content: g,
							trackingRef: (0, a.hb)(
								(p) => {
									f(p);
								},
								[f]
							),
						};
						return (0, t.Y)(n, { ...C });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(B, m, e) {
				e.d(m, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					o = 1e3;
				function s(l) {
					const n = (0, t.li)(null),
						{ inViewport: c, updateRef: E } = (0, i.v)(n, { fireOnce: !0, threshold: a, minVisibleTime: o, ...l });
					return { ref: n, inViewport: c, updateRef: E };
				}
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(B, m, e) {
				e.d(m, { q: () => s });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					i = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					a = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					o = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const s = { BadgeText: () => t.p, BadgePill: () => i.L, BadgeRectangle: () => a.Z, BadgeImage: () => o.z };
			},
			'./src/Templates/Stores/library/components/QuickviewSlideout.ts'(B, m, e) {
				e.r(m), e.d(m, { QuickviewSlideout: () => t.S });
				var t = e('./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(B, m, e) {
				e.d(m, { A: () => t }), e.dn(t);
				function t(i, a) {
					var o = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						s = {};
					for (var l in o) s[o[l]] = l;
					var n = {};
					(i.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var E,
							v,
							D = s[this.toHex()];
						if (D) return D;
						if (c?.closest) {
							var M = this.toRgb(),
								P = 1 / 0,
								g = 'black';
							if (!n.length) for (var h in o) n[h] = new i(o[h]).toRgb();
							for (var A in o) {
								var T = ((E = M), (v = n[A]), Math.pow(E.r - v.r, 2) + Math.pow(E.g - v.g, 2) + Math.pow(E.b - v.b, 2));
								T < P && ((P = T), (g = A));
							}
							return g;
						}
					}),
						a.string.push([
							function (c) {
								var E = c.toLowerCase(),
									v = E === 'transparent' ? '#0000' : o[E];
								return v ? new i(v).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(B, m, e) {
				e.d(m, { j: () => a });
				var t = Object.prototype.hasOwnProperty;
				function i(o, s, l) {
					for (l of o.keys()) if (a(l, s)) return l;
				}
				function a(o, s) {
					var l, n, c;
					if (o === s) return !0;
					if (o && s && (l = o.constructor) === s.constructor) {
						if (l === Date) return o.getTime() === s.getTime();
						if (l === RegExp) return o.toString() === s.toString();
						if (l === Array) {
							if ((n = o.length) === s.length) for (; n-- && a(o[n], s[n]); );
							return n === -1;
						}
						if (l === Set) {
							if (o.size !== s.size) return !1;
							for (n of o) if (((c = n), (c && typeof c == 'object' && ((c = i(s, c)), !c)) || !s.has(c))) return !1;
							return !0;
						}
						if (l === Map) {
							if (o.size !== s.size) return !1;
							for (n of o) if (((c = n[0]), (c && typeof c == 'object' && ((c = i(s, c)), !c)) || !a(n[1], s.get(c)))) return !1;
							return !0;
						}
						if (l === ArrayBuffer) (o = new Uint8Array(o)), (s = new Uint8Array(s));
						else if (l === DataView) {
							if ((n = o.byteLength) === s.byteLength) for (; n-- && o.getInt8(n) === s.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((n = o.byteLength) === s.byteLength) for (; n-- && o[n] === s[n]; );
							return n === -1;
						}
						if (!l || typeof o == 'object') {
							n = 0;
							for (l in o) if ((t.call(o, l) && ++n && !t.call(s, l)) || !(l in s) || !a(o[l], s[l])) return !1;
							return Object.keys(s).length === n;
						}
					}
					return o !== o && s !== s;
				}
			},
		},
	]);
})();
