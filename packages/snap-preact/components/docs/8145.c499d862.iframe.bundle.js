'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8145, 8554],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(y, u, e) {
				const t = (l) => l.replace(/_/g, '-').toLowerCase();
				e.d(u, ['P', 0, t]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(y, u, e) {
				e.d(u, { G: () => l });
				var t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function l(r, o) {
					const s = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...o };
					return (0, t.Z)(r, s);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(y, u, e) {
				e.d(u, { Z: () => t });
				function t(r, o) {
					const s = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...o };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const a = l(r, s.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + s.thousandsSeparator)),
						s.decimalPlaces > 0 && s.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(s.decimalPlaces, '0'));
					let n = a.join(s.decimalSeparator);
					return s.symbolAfter ? (n = n + s.symbol) : (n = s.symbol + n), n;
				}
				function l(r, o) {
					const s = r.toString(),
						a = s.indexOf('.'),
						n = a == -1 ? s.length : 1 + a + (o || -1);
					return s.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(y, u, e) {
				e.d(u, { p: () => t });
				function t(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(y, u, e) {
				e.d(u, { z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = () => (0, l.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					P = (0, s.PA)((p) => {
						const O = (0, n.u)(),
							x = { treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeImage', O, x, p),
							{ label: i, url: _, tag: d, className: m, internalClassName: D } = f,
							{ overrideElement: C, shouldRenderDefault: h } = (0, M._)('badgeImage', f);
						if (!h) return C;
						const I = (0, v.Z)(f, g);
						return _
							? (0, t.Y)(a._, {
									children: (0, t.Y)('img', {
										...I,
										className: o()('ss__badge-image', `ss__badge-image--${d}`, m, D),
										alt: i || `${d} badge`,
										src: _,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(y, u, e) {
				e.d(u, { L: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ color: p, colorText: O }) =>
						(0, l.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: p,
							color: O,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					P = (0, s.PA)((p) => {
						const O = (0, n.u)(),
							x = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgePill', O, x, p),
							{ value: i, tag: _, className: d, internalClassName: m } = f,
							{ overrideElement: D, shouldRenderDefault: C } = (0, M._)('badgePill', f);
						if (!C) return D;
						const h = (0, v.Z)(f, g);
						return i
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...h,
										className: o()('ss__badge-pill', `ss__badge-pill--${_}`, d, m),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(y, u, e) {
				e.d(u, { Z: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ color: p, colorText: O }) =>
						(0, l.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: p,
							color: O,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					P = (0, s.PA)((p) => {
						const O = (0, n.u)(),
							x = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeRectangle', O, x, p),
							{ value: i, tag: _, className: d, internalClassName: m } = f,
							{ overrideElement: D, shouldRenderDefault: C } = (0, M._)('badgeRectangle', f);
						if (!C) return D;
						const h = (0, v.Z)(f, g);
						return i
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...h,
										className: o()('ss__badge-rectangle', `ss__badge-rectangle--${_}`, d, m),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(y, u, e) {
				e.d(u, { p: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = ({ colorText: p }) =>
						(0, l.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: p,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					P = (0, s.PA)((p) => {
						const O = (0, n.u)(),
							x = { colorText: '#000000', treePath: (0, c.LU)() },
							f = (0, E.v6)('badgeText', O, x, p),
							{ value: i, tag: _, className: d, internalClassName: m } = f,
							{ overrideElement: D, shouldRenderDefault: C } = (0, M._)('badgeText', f);
						if (!C) return D;
						const h = (0, v.Z)(f, g);
						return i
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...h,
										className: o()('ss__badge-text', `ss__badge-text--${_}`, d, m),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/hooks/useA11y.tsx');
				const P = ({ transitionSpeed: O, color: T }) =>
						(0, l.AH)({
							transition: `background ${O} ease 0s, left 0s ease ${O}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${O} ease, left 0s ease`, background: T, left: '0' },
						}),
					p = (0, s.PA)((O) => {
						const T = (0, n.u)(),
							f = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, c.LU)() },
							i = (0, E.v6)('overlay', T, f, O),
							{ active: _, onClick: d, disableA11y: m, className: D, internalClassName: C } = i,
							{ overrideElement: h, shouldRenderDefault: I } = (0, M._)('overlay', i);
						if (!I) return h;
						const R = (0, v.Z)(i, P);
						return (0, t.Y)(a._, {
							children: (0, t.Y)('div', {
								onClick: (B) => d && _ && d(B),
								ref: (B) => (m ? null : (0, g.iy)(B, _ ? 0 : -1)),
								className: o()('ss__overlay', { 'ss__overlay--active': _ }, D, C),
								...R,
							}),
						});
					});
				e.d(u, ['h', 0, p]);
			},
			'./components/src/components/Atoms/Price/Price.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					a = e.n(s),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ theme: O }) =>
						(0, o.AH)({ color: O?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					p = (0, l.PA)((O) => {
						const T = (0, c.u)(),
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
							i = (0, v.v6)('price', T, f, O),
							{
								lineThrough: _,
								value: d,
								format: m,
								symbol: D,
								decimalPlaces: C,
								padDecimalPlaces: h,
								thousandsSeparator: I,
								decimalSeparator: R,
								symbolAfter: B,
								raw: k,
								className: L,
								internalClassName: $,
							} = i,
							{ overrideElement: U, shouldRenderDefault: W } = (0, g._)('price', i);
						if (!W) return U;
						let A;
						d && (A = m ? m(d) : r.G(d, { symbol: '', decimalPlaces: C, padDecimalPlaces: h, thousandsSeparator: I, decimalSeparator: R }));
						const K = (0, M.Z)(i, P);
						return A
							? k
								? (0, t.Y)(t.FK, { children: A })
								: (0, t.Y)(n._, {
										children: (0, t.FD)('span', {
											...K,
											className: a()('ss__price', { 'ss__price--strike': _ }, L, $),
											children: [
												!m && D && !B ? (0, t.Y)('span', { className: 'ss__price__symbol', children: D }) : (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: 'ss__price__value', children: A }),
												!m && D && B ? (0, t.Y)('span', { className: 'ss__price__symbol', children: D }) : (0, t.Y)(t.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(u, ['g', 0, p]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					p = e('./components/src/hooks/useComponent.tsx'),
					O = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const T = () => (0, l.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					x = ({ badge: i, badgeComponentMap: _, treePath: d }) => {
						const { ComponentOverride: m } = (0, p.x)(_, i.component);
						return m ? (0, t.Y)(m, { ...i, ...i.parameters, treePath: d }) : null;
					},
					f = (0, s.PA)((i) => {
						const _ = (0, n.u)(),
							d = (0, c.uk)(),
							m = (0, E.LU)(),
							D = { name: i.tag ? (0, P.P)(i.tag) : void 0, tag: 'callout', limit: 1, treePath: m },
							C = (0, v.v6)('calloutBadge', _, D, i),
							{ result: h, tag: I, renderEmpty: R, limit: B, className: k, internalClassName: L, treePath: $ } = C,
							{ overrideElement: U, shouldRenderDefault: W } = (0, O._)('calloutBadge', C);
						if (!W) return U;
						const A = { ...g.q, ...(d?.templates?.library.import.component.badge || {}), ...C.componentMap },
							K = (0, M.Z)(C, T),
							j = h?.display?.badges?.atLocation(I).slice(0, B);
						return R || j?.length
							? (0, t.Y)(a._, {
									children: (0, t.Y)('div', {
										...K,
										className: o()('ss__callout-badge', `ss__callout-badge--${I?.replace('/', '-')}`, k, L),
										children: j.map((F, V) => (0, t.Y)(x, { badge: F, badgeComponentMap: A, treePath: $ }, `${F.component}-${V}`)),
									}),
							  })
							: null;
					});
				e.d(u, ['W', 0, f]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					s = e.n(o),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/hooks/useClickOutside.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					x = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					f = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const i = () =>
						(0, r.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					_ = (0, a.PA)((d) => {
						const m = (0, c.u)(),
							C = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, E.LU)() },
							h = (0, p.v6)('modal', m, C, d),
							{
								button: I,
								content: R,
								buttonSelector: B,
								children: k,
								disabled: L,
								open: $,
								onClick: U,
								lockScroll: W,
								startOpen: A,
								disableClickOutside: K,
								disableA11y: j,
								className: F,
								internalClassName: V,
								disableStyles: Q,
								overlayColor: Z,
								onOverlayClick: N,
								treePath: z,
							} = h,
							{ overrideElement: S, shouldRenderDefault: H } = (0, M._)('modal', h);
						if (!H) return S;
						const Y = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (w) => {
									N && N(w), J();
								},
								...(0, P.s)({ disableStyles: Q, color: Z }),
								theme: h?.theme,
								treePath: z,
							},
						};
						let b, G;
						const X = $ === void 0;
						X ? ([b, G] = (0, l.J0)(A)) : (b = $);
						let ee;
						K ||
							(ee = (0, v.L)(() => {
								b && (L || (X && G && G(!1)));
							}));
						const J = () => {
								X && G && G((w) => !w);
							},
							ae = (0, O.Z)(h, i);
						(0, l.vJ)(
							() => (
								b && W ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[b, W]
						);
						const te = (0, l.li)(b),
							se = (0, l.li)(W);
						return (
							(te.current = b),
							(se.current = W),
							(0, l.vJ)(() => {
								const w = B ? (typeof B == 'string' ? document.querySelector(B) : B) : null;
								let oe = !1,
									q;
								const ne = (0, f.s)(() => {
										clearTimeout(q),
											(q = setTimeout(() => {
												oe || (te.current && se.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									re = (le) => {
										J(), U && U(le);
									};
								return (
									w && (L || w.addEventListener('click', re)),
									window.addEventListener('resize', ne),
									() => {
										(oe = !0), clearTimeout(q), window.removeEventListener('resize', ne), w && w.removeEventListener('click', re);
									}
								);
							}, []),
							(0, t.Y)(n._, {
								children: (0, t.FD)('div', {
									...ae,
									className: s()('ss__modal', { 'ss__modal--open': b }, { 'ss__modal--disabled': L }, F, V),
									ref: ee,
									children: [
										!B &&
											I &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (w) => (j ? null : (0, T.iy)(w)),
												'aria-expanded': b,
												role: 'button',
												onClick: (w) => {
													L || (J(), U && U(w));
												},
												children: (0, g.Y)(I, { open: b, toggleOpen: J, treePath: z }),
											}),
										(R || k) &&
											b &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (w) => (j ? null : (0, T.iy)(w)),
												children: [(0, g.Y)(R, { open: b, toggleOpen: J, treePath: z }), (0, g.Y)(k, { open: b, toggleOpen: J, treePath: z })],
											}),
										(0, t.Y)(x.h, { ...Y.overlay, active: !!b }),
									],
								}),
							})
						);
					});
				e.d(u, ['a', 0, _]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					o = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					P = e('./components/src/hooks/useComponent.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const O = ({ section: i, top: _, bottom: d, index: m, tag: D }) =>
						(0, l.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: i == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !_ && !d ? 'center' : d && !_ ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: D,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - m, 1),
							width: '100%',
							height: '100%',
						}),
					T = ({ controller: i }) => {
						const d = i?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let m = {};
						if (d?.length && d[0]?.length) {
							const D = d.map((h) => `"${h.join(' ')}"`).join(' ');
							m = {
								gridTemplateColumns: `repeat(${d[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${d.length}, minmax(0, 1fr))`,
								gridTemplateAreas: D,
							};
						}
						return (0, l.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...m,
							},
						});
					},
					x = ({ badge: i, badgeComponentMap: _, treePath: d }) => {
						const { ComponentOverride: m } = (0, P.x)(_, i.component);
						return m ? (0, t.Y)(m, { ...i, ...i.parameters, treePath: d }) : null;
					},
					f = (0, s.PA)((i) => {
						const _ = (0, n.u)(),
							d = (0, c.uk)(),
							D = { limit: 1, treePath: (0, E.LU)() },
							C = (0, v.v6)('overlayBadge', _, D, i),
							{ result: h, children: I, controller: R, renderEmpty: B, limit: k, className: L, internalClassName: $, treePath: U } = C,
							{ overrideElement: W, shouldRenderDefault: A } = (0, p._)('overlayBadge', C);
						if (!A) return W;
						if (!I) return R?.log?.warn('OverlayBadge component must have children'), null;
						const K = R?.store?.meta;
						if (!K) return R?.log?.warn('Controller must have a meta store'), (0, t.Y)(t.FK, { children: I });
						const j = 'overlay',
							F = { ...g.q, ...(d?.templates?.library.import.component.badge || {}), ...C.componentMap },
							Q = K?.badges?.groups?.[j]?.sections
								?.map((N) => {
									const z = K?.data?.badges?.locations[N],
										S = z
											?.map((H, Y) => ({
												tag: H.tag,
												name: H.name,
												top: Y == 0,
												bottom: Y == z.length - 1,
												badges: h?.display?.badges?.atLocation(`${N}/${H.tag}`).slice(0, k),
											}))
											.filter((H) => H.badges?.length);
									return { section: N, slots: S };
								})
								.filter((N) => N.slots?.length),
							Z = (0, M.Z)(C, T);
						return B || Q?.length
							? (0, t.Y)(a._, {
									children: (0, t.FD)('div', {
										...Z,
										className: o()('ss__overlay-badge', L, $),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: Q.map((N, z) =>
													N.slots?.map((S) => {
														const H = O({ ...C, tag: S.tag, section: N.section, index: z, top: S.top, bottom: S.bottom });
														return (0, t.Y)(
															'div',
															{
																className: o()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${S.tag}`),
																css: [H],
																children: S.badges.map((Y, b) =>
																	(0, t.Y)(x, { badge: Y, badgeComponentMap: F, treePath: U }, `${S.tag}-${Y.component}-${b}`)
																),
															},
															`${N.section}-${S.tag}`
														);
													})
												),
											}),
											I,
										],
									}),
							  })
							: (0, t.Y)(t.FK, { children: I });
					});
				e.d(u, ['Q', 0, f]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					s = e.n(o),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const p = () =>
						(0, r.AH)({
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
					O = (0, l.PA)((T) => {
						const x = (0, n.u)(),
							i = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, c.LU)() },
							_ = (0, v.v6)('rating', x, i, T),
							{
								alwaysRender: d,
								count: m,
								text: D,
								disablePartialFill: C,
								emptyIcon: h,
								fullIcon: I,
								disableStyles: R,
								className: B,
								internalClassName: k,
								treePath: L,
							} = _,
							{ overrideElement: $, shouldRenderDefault: U } = (0, P._)('rating', _);
						if (!U) return $;
						const W = {
							fullIcon: { name: 'star--full', ...(0, E.s)({ disableStyles: R }), theme: _?.theme, treePath: L },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, E.s)({ disableStyles: R }), theme: _?.theme, treePath: L },
						};
						let A = _.value;
						isNaN(A) && (A = Number(A) || 0), A < 0 && (A = 0), A > 5 && (A = 5);
						const K = (0, M.Z)(_, p),
							j = C ? Math.floor(A) : Math.ceil(A);
						return d || A || m
							? (0, t.Y)(a._, {
									children: (0, t.FD)('div', {
										className: s()('ss__rating', B, k),
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
																children: (0, t.Y)(g.I, { ...W.emptyIcon, ...(typeof h == 'string' ? { icon: h } : h) }),
															})
														),
													}),
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(j)].map((F, V) => {
															let Q = 100;
															return (
																V + 1 == j && !C && A % 1 != 0 && (Q = (A % 1 || 1) * 100),
																(0, t.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${Q}%` },
																	children: (0, t.Y)(g.I, { ...W.fullIcon, ...(typeof I == 'string' ? { icon: I } : I) }),
																})
															);
														}),
													}),
												],
											}),
											m ? (0, t.FD)('span', { className: 'ss__rating__count', children: ['(', m, ')'] }) : (0, t.Y)(t.FK, {}),
											D ? (0, t.Y)('span', { className: 'ss__rating__text', children: D }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(u, ['G', 0, O]);
			},
			'./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx'(y, u, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					a = e.n(s),
					n = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					p = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const O = () =>
						(0, o.AH)({
							position: 'absolute',
							width: 0,
							height: 0,
							'&.ss__quickview-modal .ss__modal__content': {
								position: 'fixed !important',
								top: '50% !important',
								left: '50% !important',
								transform: 'translate(-50%, -50%) !important',
								minWidth: 'auto',
								maxWidth: '90vw',
								maxHeight: '90vh',
								width: 'auto',
								overflow: 'auto',
								zIndex: 10006,
								boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							},
							'&.ss__quickview-modal .ss__modal__overlay': { zIndex: '10005 !important' },
							'@media (max-width: 767px)': {
								'&.ss__quickview-modal .ss__modal__content': { width: '100vw', maxWidth: '100vw', borderRadius: 0 },
								'&.ss__quickview-modal .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
							},
						}),
					T = (0, r.PA)((x) => {
						const f = (0, c.u)(),
							_ = {
								treePath: (0, E.LU)(),
								hideBadge: !1,
								layout: [['c1', 'c2']],
								column1: { layout: ['slideshow'], width: '45%' },
								column2: {
									layout: [
										['productDetail.mappings.core.name'],
										['calloutBadge'],
										['variantSelections'],
										['quantityPicker'],
										['button.add-to-cart'],
										['productDetail.mappings.core.description'],
										['productDetailTable'],
										['button.more-info'],
									],
									width: 'auto',
								},
							},
							d = (0, M.v6)('quickviewModal', f, _, x),
							{
								quickviewManager: m,
								className: D,
								internalClassName: C,
								disableStyles: h,
								treePath: I,
								layout: R,
								hideBadge: B,
								column1: k,
								column2: L,
								column3: $,
								column4: U,
								recommendation: W,
								lang: A,
							} = d,
							K = (0, l.li)(null),
							j = (0, l.li)(null),
							F = (0, l.li)(!1);
						(0, l.vJ)(() => {
							const Y = !!m?.store?.isOpen;
							Y && !F.current
								? ((j.current = document.activeElement || null), K.current?.querySelector('.ss__quickview__close')?.focus())
								: !Y && F.current && (j.current?.focus?.(), (j.current = null)),
								(F.current = Y);
						});
						const V = (0, g.Z)(d, O);
						if (!m)
							return (
								console.warn('[QuickviewModal] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const Q = m.store,
							Z = Q.product,
							N = !!Q.isOpen,
							z = () => m.close(),
							S = {
								quickviewLayout: {
									onClose: z,
									...(0, v.s)({ hideBadge: B, column1: k, column2: L, column3: $, column4: U, recommendation: W, lang: A }),
									...(0, v.s)({ disableStyles: h }),
									theme: d?.theme,
									treePath: I,
								},
								modal: { onOverlayClick: z, ...(0, v.s)({ disableStyles: h }), theme: d?.theme, treePath: I },
							},
							H = (0, t.Y)(p.p, { quickviewManager: m, ...S.quickviewLayout, layout: R });
						return (0, t.Y)(n._, {
							children: (0, t.Y)('div', {
								...V,
								ref: K,
								className: a()('ss__quickview-modal', D, C),
								onClick: (Y) => Y.stopPropagation(),
								children: (0, t.Y)(P.a, {
									...S.modal,
									open: N,
									children: Z ? (0, t.Y)(p.n, { quickviewManager: m, product: Z, children: H }, `${Z.responseId}-${Z.id}`) : H,
								}),
							}),
						});
					});
				e.d(u, ['_', 0, T]);
			},
			'./components/src/hooks/useCreateController.tsx'(y, u, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (r, o, s) => {
					const [a, n] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							r.getController(s.id)
								.then((c) => {
									n(c);
								})
								.catch(async () => {
									let c = s;
									if (o === 'recommendation' && !s.plugins && !s.middleware)
										try {
											const E = await r.getInstantiator('recommendation');
											c = { ...s, plugins: E.config.config.plugins, middleware: E.config.config.middleware };
										} catch {}
									try {
										const E = await r.createController(o, c);
										n(E);
									} catch (E) {
										console.error(`useCreateController: failed to create controller "${s.id}"`, E);
									}
								});
						}, []),
						a
					);
				};
				e.d(u, ['i', 0, l]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(y, u, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 250,
					r = (s, a = {}) => {
						const { rootMargin: n = '0px', fireOnce: c = !1, threshold: E = 0, minVisibleTime: v = 0 } = a,
							[M, g] = (0, t.J0)(!1),
							P = (0, t.li)(null),
							p = (0, t.li)(null),
							[O, T] = (0, t.J0)(0),
							x = (0, t.hb)((f) => {
								(s.current = f), T((i) => i + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								g(!1);
								let f = null,
									i = null;
								if (!window.IntersectionObserver || !s.current) return;
								const _ = () => {
										i && (window.clearInterval(i), (i = null));
									},
									d = () => {
										v > 0
											? ((p.current = Date.now()),
											  P.current && window.clearTimeout(P.current),
											  (P.current = window.setTimeout(() => {
													g(!0), c && s.current && f && f.unobserve(s.current);
											  }, v)))
											: (g(!0), c && s.current && f && f.unobserve(s.current));
									},
									m = () => {
										P.current && window.clearTimeout(P.current), (P.current = null), (p.current = null), g(!1);
									};
								return (
									(f = new IntersectionObserver(
										([D]) => {
											D.isIntersecting
												? s.current && o(s.current)
													? (_(), d())
													: (m(),
													  i ||
															(i = window.setInterval(() => {
																if (!s.current) {
																	_();
																	return;
																}
																o(s.current) && (_(), d());
															}, l)))
												: (_(), m());
										},
										{ rootMargin: n, threshold: E }
									)),
									s.current && f.observe(s.current),
									() => {
										g(!1), _(), P.current && window.clearTimeout(P.current), f && s.current && f.unobserve(s.current);
									}
								);
							}, [s, O]),
							{ inViewport: M, updateRef: x }
						);
					};
				function o(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(u, ['v', 0, r]);
			},
			'./components/src/providers/withTracking.tsx'(y, u, e) {
				e.d(u, { N: () => o, W: () => s });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('./components/src/utilities/createImpressionObserver.ts'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'sstracking';
				function s(a) {
					const n = a;
					return (E) => {
						const { controller: v, result: M, banner: g, type: P, content: p, ...O } = E;
						if (E.trackingRef) return (0, t.Y)(n, { ...E });
						!v && (!P || !p) && console.warn('Warning: No controller provided to withTracking', E),
							!M && !g && (!P || !p) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: T, inViewport: x, updateRef: f } = (0, l.Q)(),
							i = (M || g || (P && p?.[P]?.[0]))?.responseId,
							_ = (0, r.li)(i),
							d = (0, r.li)(!1);
						_.current !== i && (d.current = !0),
							(0, r.vJ)(() => {
								_.current !== i && ((_.current = i), f(T.current));
							}, [i, f]),
							(0, r.vJ)(() => {
								d.current && !x && (d.current = !1);
							}, [x, i]);
						const m = P && p && !M && ['search', 'autocomplete'].includes(v?.type || '');
						x && !d.current && (m ? v?.track.banner.impression(p[P][0]) : M?.bundleSeed || v?.track.product.impression(M || g));
						const D = (0, r.hb)(
							(h) => {
								m ? v?.track.banner.click(h, p[P][0]) : v?.track.product.click(h, M || g);
							},
							[v, M, g, P, p]
						);
						(0, r.vJ)(() => {
							const h = T.current;
							if (h)
								return (
									h.setAttribute(o, 'true'),
									h.addEventListener('click', D, !0),
									() => {
										h.removeEventListener('click', D, !0);
									}
								);
						}, [D]);
						const C = {
							...O,
							controller: v,
							result: M,
							banner: g,
							type: P,
							content: p,
							trackingRef: (0, r.hb)(
								(h) => {
									f(h);
								},
								[f]
							),
						};
						return (0, t.Y)(n, { ...C });
					};
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(y, u, e) {
				e.d(u, { Q: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					o = 1e3;
				function s(a) {
					const n = (0, t.li)(null),
						{ inViewport: c, updateRef: E } = (0, l.v)(n, { fireOnce: !0, threshold: r, minVisibleTime: o, ...a });
					return { ref: n, inViewport: c, updateRef: E };
				}
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(y, u, e) {
				e.d(u, { q: () => s });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					l = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					r = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					o = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const s = { BadgeText: () => t.p, BadgePill: () => l.L, BadgeRectangle: () => r.Z, BadgeImage: () => o.z };
			},
			'./src/Templates/Stores/library/components/QuickviewModal.ts'(y, u, e) {
				e.r(u), e.d(u, { QuickviewModal: () => t._ });
				var t = e('./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx');
			},
			'../../node_modules/colord/plugins/names.mjs'(y, u, e) {
				e.d(u, { A: () => t }), e.dn(t);
				function t(l, r) {
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
					for (var a in o) s[o[a]] = a;
					var n = {};
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var E,
							v,
							M = s[this.toHex()];
						if (M) return M;
						if (c?.closest) {
							var g = this.toRgb(),
								P = 1 / 0,
								p = 'black';
							if (!n.length) for (var O in o) n[O] = new l(o[O]).toRgb();
							for (var T in o) {
								var x = ((E = g), (v = n[T]), Math.pow(E.r - v.r, 2) + Math.pow(E.g - v.g, 2) + Math.pow(E.b - v.b, 2));
								x < P && ((P = x), (p = T));
							}
							return p;
						}
					}),
						r.string.push([
							function (c) {
								var E = c.toLowerCase(),
									v = E === 'transparent' ? '#0000' : o[E];
								return v ? new l(v).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(y, u, e) {
				e.d(u, { j: () => r });
				var t = Object.prototype.hasOwnProperty;
				function l(o, s, a) {
					for (a of o.keys()) if (r(a, s)) return a;
				}
				function r(o, s) {
					var a, n, c;
					if (o === s) return !0;
					if (o && s && (a = o.constructor) === s.constructor) {
						if (a === Date) return o.getTime() === s.getTime();
						if (a === RegExp) return o.toString() === s.toString();
						if (a === Array) {
							if ((n = o.length) === s.length) for (; n-- && r(o[n], s[n]); );
							return n === -1;
						}
						if (a === Set) {
							if (o.size !== s.size) return !1;
							for (n of o) if (((c = n), (c && typeof c == 'object' && ((c = l(s, c)), !c)) || !s.has(c))) return !1;
							return !0;
						}
						if (a === Map) {
							if (o.size !== s.size) return !1;
							for (n of o) if (((c = n[0]), (c && typeof c == 'object' && ((c = l(s, c)), !c)) || !r(n[1], s.get(c)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (o = new Uint8Array(o)), (s = new Uint8Array(s));
						else if (a === DataView) {
							if ((n = o.byteLength) === s.byteLength) for (; n-- && o.getInt8(n) === s.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((n = o.byteLength) === s.byteLength) for (; n-- && o[n] === s[n]; );
							return n === -1;
						}
						if (!a || typeof o == 'object') {
							n = 0;
							for (a in o) if ((t.call(o, a) && ++n && !t.call(s, a)) || !(a in s) || !r(o[a], s[a])) return !1;
							return Object.keys(s).length === n;
						}
					}
					return o !== o && s !== s;
				}
			},
		},
	]);
})();
