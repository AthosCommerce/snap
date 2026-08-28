(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4781, 8554],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'(O, l, e) {
				'use strict';
				const o = (c) => c.replace(/_/g, '-').toLowerCase();
				e.d(l, ['P', 0, o]);
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'(O, l, e) {
				'use strict';
				e.d(l, { G: () => c });
				var o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function c(r, s) {
					const t = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...s };
					return (0, o.Z)(r, t);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(O, l, e) {
				'use strict';
				e.d(l, { Z: () => o });
				function o(r, s) {
					const t = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...s };
					if (typeof r != 'number' || Number.isNaN(r)) return;
					const a = c(r, t.decimalPlaces).split('.');
					(a[0] = a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + t.thousandsSeparator)),
						t.decimalPlaces > 0 && t.padDecimalPlaces && (a[1] = (a[1] || '').padEnd(t.decimalPlaces, '0'));
					let n = a.join(t.decimalSeparator);
					return t.symbolAfter ? (n = n + t.symbol) : (n = t.symbol + n), n;
				}
				function c(r, s) {
					const t = r.toString(),
						a = t.indexOf('.'),
						n = a == -1 ? t.length : 1 + a + (s || -1);
					return t.substr(0, n);
				}
			},
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(O, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(c) {
					if (typeof c != 'string') return c;
					let r = c.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(O, l, e) {
				'use strict';
				e.d(l, { z: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = () => (0, c.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					h = (0, t.PA)((g) => {
						const E = (0, n.u)(),
							C = { treePath: (0, d.LU)() },
							p = (0, u.v6)('badgeImage', E, C, g),
							{ label: i, url: m, tag: _, className: f, internalClassName: b } = p,
							{ overrideElement: D, shouldRenderDefault: M } = (0, y._)('badgeImage', p);
						if (!M) return D;
						const x = (0, v.Z)(p, P);
						return m
							? (0, o.Y)(a._, {
									children: (0, o.Y)('img', {
										...x,
										className: s()('ss__badge-image', `ss__badge-image--${_}`, f, b),
										alt: i || `${_} badge`,
										src: m,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(O, l, e) {
				'use strict';
				e.d(l, { L: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ color: g, colorText: E }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: g,
							color: E,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					h = (0, t.PA)((g) => {
						const E = (0, n.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, d.LU)() },
							p = (0, u.v6)('badgePill', E, C, g),
							{ value: i, tag: m, className: _, internalClassName: f } = p,
							{ overrideElement: b, shouldRenderDefault: D } = (0, y._)('badgePill', p);
						if (!D) return b;
						const M = (0, v.Z)(p, P);
						return i
							? (0, o.Y)(a._, {
									children: (0, o.Y)('div', {
										...M,
										className: s()('ss__badge-pill', `ss__badge-pill--${m}`, _, f),
										children: (0, o.Y)('span', { className: 'ss__badge-pill__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(O, l, e) {
				'use strict';
				e.d(l, { Z: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ color: g, colorText: E }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: g,
							color: E,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					h = (0, t.PA)((g) => {
						const E = (0, n.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, d.LU)() },
							p = (0, u.v6)('badgeRectangle', E, C, g),
							{ value: i, tag: m, className: _, internalClassName: f } = p,
							{ overrideElement: b, shouldRenderDefault: D } = (0, y._)('badgeRectangle', p);
						if (!D) return b;
						const M = (0, v.Z)(p, P);
						return i
							? (0, o.Y)(a._, {
									children: (0, o.Y)('div', {
										...M,
										className: s()('ss__badge-rectangle', `ss__badge-rectangle--${m}`, _, f),
										children: (0, o.Y)('span', { className: 'ss__badge-rectangle__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(O, l, e) {
				'use strict';
				e.d(l, { p: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const P = ({ colorText: g }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: g,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					h = (0, t.PA)((g) => {
						const E = (0, n.u)(),
							C = { colorText: '#000000', treePath: (0, d.LU)() },
							p = (0, u.v6)('badgeText', E, C, g),
							{ value: i, tag: m, className: _, internalClassName: f } = p,
							{ overrideElement: b, shouldRenderDefault: D } = (0, y._)('badgeText', p);
						if (!D) return b;
						const M = (0, v.Z)(p, P);
						return i
							? (0, o.Y)(a._, {
									children: (0, o.Y)('div', {
										...M,
										className: s()('ss__badge-text', `ss__badge-text--${m}`, _, f),
										children: (0, o.Y)('span', { className: 'ss__badge-text__value', children: i }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					P = e('./components/src/hooks/useA11y.tsx');
				const h = ({ transitionSpeed: E, color: T }) =>
						(0, c.AH)({
							transition: `background ${E} ease 0s, left 0s ease ${E}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${E} ease, left 0s ease`, background: T, left: '0' },
						}),
					g = (0, t.PA)((E) => {
						const T = (0, n.u)(),
							p = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, d.LU)() },
							i = (0, u.v6)('overlay', T, p, E),
							{ active: m, onClick: _, disableA11y: f, className: b, internalClassName: D } = i,
							{ overrideElement: M, shouldRenderDefault: x } = (0, y._)('overlay', i);
						if (!x) return M;
						const A = (0, v.Z)(i, h);
						return (0, o.Y)(a._, {
							children: (0, o.Y)('div', {
								onClick: (B) => _ && m && _(B),
								ref: (B) => (f ? null : (0, P.iy)(B, m ? 0 : -1)),
								className: s()('ss__overlay', { 'ss__overlay--active': m }, b, D),
								...A,
							}),
						});
					});
				e.d(l, ['h', 0, g]);
			},
			'./components/src/components/Atoms/Price/Price.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					a = e.n(t),
					n = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({ theme: E }) =>
						(0, s.AH)({ color: E?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					g = (0, c.PA)((E) => {
						const T = (0, d.u)(),
							p = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, u.LU)(),
							},
							i = (0, v.v6)('price', T, p, E),
							{
								lineThrough: m,
								value: _,
								format: f,
								symbol: b,
								decimalPlaces: D,
								padDecimalPlaces: M,
								thousandsSeparator: x,
								decimalSeparator: A,
								symbolAfter: B,
								raw: U,
								className: k,
								internalClassName: K,
							} = i,
							{ overrideElement: j, shouldRenderDefault: W } = (0, P._)('price', i);
						if (!W) return j;
						let w;
						_ && (w = f ? f(_) : r.G(_, { symbol: '', decimalPlaces: D, padDecimalPlaces: M, thousandsSeparator: x, decimalSeparator: A }));
						const I = (0, y.Z)(i, h);
						return w
							? U
								? (0, o.Y)(o.FK, { children: w })
								: (0, o.Y)(n._, {
										children: (0, o.FD)('span', {
											...I,
											className: a()('ss__price', { 'ss__price--strike': m }, k, K),
											children: [
												!f && b && !B ? (0, o.Y)('span', { className: 'ss__price__symbol', children: b }) : (0, o.Y)(o.FK, {}),
												(0, o.Y)('span', { className: 'ss__price__value', children: w }),
												!f && b && B ? (0, o.Y)('span', { className: 'ss__price__symbol', children: b }) : (0, o.Y)(o.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(l, ['g', 0, g]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					g = e('./components/src/hooks/useComponent.tsx'),
					E = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const T = () => (0, c.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					C = ({ badge: i, badgeComponentMap: m, treePath: _ }) => {
						const { ComponentOverride: f } = (0, g.x)(m, i.component);
						return f ? (0, o.Y)(f, { ...i, ...i.parameters, treePath: _ }) : null;
					},
					p = (0, t.PA)((i) => {
						const m = (0, n.u)(),
							_ = (0, d.uk)(),
							f = (0, u.LU)(),
							b = { name: i.tag ? (0, h.P)(i.tag) : void 0, tag: 'callout', limit: 1, treePath: f },
							D = (0, v.v6)('calloutBadge', m, b, i),
							{ result: M, tag: x, renderEmpty: A, limit: B, className: U, internalClassName: k, treePath: K } = D,
							{ overrideElement: j, shouldRenderDefault: W } = (0, E._)('calloutBadge', D);
						if (!W) return j;
						const w = { ...P.q, ...(_?.templates?.library.import.component.badge || {}), ...D.componentMap },
							I = (0, y.Z)(D, T),
							S = M?.display?.badges?.atLocation(x).slice(0, B);
						return A || S?.length
							? (0, o.Y)(a._, {
									children: (0, o.Y)('div', {
										...I,
										className: s()('ss__callout-badge', `ss__callout-badge--${x?.replace('/', '-')}`, U, k),
										children: S.map((Y, F) => (0, o.Y)(C, { badge: Y, badgeComponentMap: w, treePath: K }, `${Y.component}-${F}`)),
									}),
							  })
							: null;
					});
				e.d(l, ['W', 0, p]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					s = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					h = e('./components/src/hooks/useComponent.tsx'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const E = ({ section: i, top: m, bottom: _, index: f, tag: b }) =>
						(0, c.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: i == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !m && !_ ? 'center' : _ && !m ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: b,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - f, 1),
							width: '100%',
							height: '100%',
						}),
					T = ({ controller: i }) => {
						const _ = i?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let f = {};
						if (_?.length && _[0]?.length) {
							const b = _.map((M) => `"${M.join(' ')}"`).join(' ');
							f = {
								gridTemplateColumns: `repeat(${_[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${_.length}, minmax(0, 1fr))`,
								gridTemplateAreas: b,
							};
						}
						return (0, c.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...f,
							},
						});
					},
					C = ({ badge: i, badgeComponentMap: m, treePath: _ }) => {
						const { ComponentOverride: f } = (0, h.x)(m, i.component);
						return f ? (0, o.Y)(f, { ...i, ...i.parameters, treePath: _ }) : null;
					},
					p = (0, t.PA)((i) => {
						const m = (0, n.u)(),
							_ = (0, d.uk)(),
							b = { limit: 1, treePath: (0, u.LU)() },
							D = (0, v.v6)('overlayBadge', m, b, i),
							{ result: M, children: x, controller: A, renderEmpty: B, limit: U, className: k, internalClassName: K, treePath: j } = D,
							{ overrideElement: W, shouldRenderDefault: w } = (0, g._)('overlayBadge', D);
						if (!w) return W;
						if (!x) return A?.log?.warn('OverlayBadge component must have children'), null;
						const I = A?.store?.meta;
						if (!I) return A?.log?.warn('Controller must have a meta store'), (0, o.Y)(o.FK, { children: x });
						const S = 'overlay',
							Y = { ...P.q, ...(_?.templates?.library.import.component.badge || {}), ...D.componentMap },
							Q = I?.badges?.groups?.[S]?.sections
								?.map((R) => {
									const V = I?.data?.badges?.locations[R],
										L = V?.map((N, $) => ({
											tag: N.tag,
											name: N.name,
											top: $ == 0,
											bottom: $ == V.length - 1,
											badges: M?.display?.badges?.atLocation(`${R}/${N.tag}`).slice(0, U),
										})).filter((N) => N.badges?.length);
									return { section: R, slots: L };
								})
								.filter((R) => R.slots?.length),
							z = (0, y.Z)(D, T);
						return B || Q?.length
							? (0, o.Y)(a._, {
									children: (0, o.FD)('div', {
										...z,
										className: s()('ss__overlay-badge', k, K),
										children: [
											(0, o.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: Q.map((R, V) =>
													R.slots?.map((L) => {
														const N = E({ ...D, tag: L.tag, section: R.section, index: V, top: L.top, bottom: L.bottom });
														return (0, o.Y)(
															'div',
															{
																className: s()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${L.tag}`),
																css: [N],
																children: L.badges.map(($, H) =>
																	(0, o.Y)(C, { badge: $, badgeComponentMap: Y, treePath: j }, `${L.tag}-${$.component}-${H}`)
																),
															},
															`${R.section}-${L.tag}`
														);
													})
												),
											}),
											x,
										],
									}),
							  })
							: (0, o.Y)(o.FK, { children: x });
					});
				e.d(l, ['Q', 0, p]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					a = e('./components/src/providers/cache.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = () =>
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
					E = (0, c.PA)((T) => {
						const C = (0, n.u)(),
							i = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, d.LU)() },
							m = (0, v.v6)('rating', C, i, T),
							{
								alwaysRender: _,
								count: f,
								text: b,
								disablePartialFill: D,
								emptyIcon: M,
								fullIcon: x,
								disableStyles: A,
								className: B,
								internalClassName: U,
								treePath: k,
							} = m,
							{ overrideElement: K, shouldRenderDefault: j } = (0, h._)('rating', m);
						if (!j) return K;
						const W = {
							fullIcon: { name: 'star--full', ...(0, u.s)({ disableStyles: A }), theme: m?.theme, treePath: k },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, u.s)({ disableStyles: A }), theme: m?.theme, treePath: k },
						};
						let w = m.value;
						isNaN(w) && (w = Number(w) || 0), w < 0 && (w = 0), w > 5 && (w = 5);
						const I = (0, y.Z)(m, g),
							S = D ? Math.floor(w) : Math.ceil(w);
						return _ || w || f
							? (0, o.Y)(a._, {
									children: (0, o.FD)('div', {
										className: t()('ss__rating', B, U),
										...I,
										children: [
											(0, o.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, o.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, o.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, o.Y)(P.I, { ...W.emptyIcon, ...(typeof M == 'string' ? { icon: M } : M) }),
															})
														),
													}),
													(0, o.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(S)].map((Y, F) => {
															let Q = 100;
															return (
																F + 1 == S && !D && w % 1 != 0 && (Q = (w % 1 || 1) * 100),
																(0, o.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${Q}%` },
																	children: (0, o.Y)(P.I, { ...W.fullIcon, ...(typeof x == 'string' ? { icon: x } : x) }),
																})
															);
														}),
													}),
												],
											}),
											f ? (0, o.FD)('span', { className: 'ss__rating__count', children: ['(', f, ')'] }) : (0, o.Y)(o.FK, {}),
											b ? (0, o.Y)('span', { className: 'ss__rating__text', children: b }) : (0, o.Y)(o.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(l, ['G', 0, E]);
			},
			'./components/src/hooks/useCreateController.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (r, s, t) => {
					const [a, n] = (0, o.J0)(void 0);
					return (
						(0, o.vJ)(() => {
							r.getController(t.id)
								.then((d) => {
									n(d);
								})
								.catch(async () => {
									let d = t;
									if (s === 'recommendation' && !t.plugins && !t.middleware)
										try {
											const u = await r.getInstantiator('recommendation');
											d = { ...t, plugins: u.config.config.plugins, middleware: u.config.config.middleware };
										} catch {}
									try {
										const u = await r.createController(s, d);
										n(u);
									} catch (u) {
										console.error(`useCreateController: failed to create controller "${t.id}"`, u);
									}
								});
						}, []),
						a
					);
				};
				e.d(l, ['i', 0, c]);
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					r = (t, a = {}) => {
						const { rootMargin: n = '0px', fireOnce: d = !1, threshold: u = 0, minVisibleTime: v = 0 } = a,
							[y, P] = (0, o.J0)(!1),
							h = (0, o.li)(null),
							g = (0, o.li)(null),
							[E, T] = (0, o.J0)(0),
							C = (0, o.hb)((p) => {
								(t.current = p), T((i) => i + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								P(!1);
								let p = null,
									i = null;
								if (!window.IntersectionObserver || !t.current) return;
								const m = () => {
										i && (window.clearInterval(i), (i = null));
									},
									_ = () => {
										v > 0
											? ((g.current = Date.now()),
											  h.current && window.clearTimeout(h.current),
											  (h.current = window.setTimeout(() => {
													P(!0), d && t.current && p && p.unobserve(t.current);
											  }, v)))
											: (P(!0), d && t.current && p && p.unobserve(t.current));
									},
									f = () => {
										h.current && window.clearTimeout(h.current), (h.current = null), (g.current = null), P(!1);
									};
								return (
									(p = new IntersectionObserver(
										([b]) => {
											b.isIntersecting
												? t.current && s(t.current)
													? (m(), _())
													: (f(),
													  i ||
															(i = window.setInterval(() => {
																if (!t.current) {
																	m();
																	return;
																}
																s(t.current) && (m(), _());
															}, c)))
												: (m(), f());
										},
										{ rootMargin: n, threshold: u }
									)),
									t.current && p.observe(t.current),
									() => {
										P(!1), m(), h.current && window.clearTimeout(h.current), p && t.current && p.unobserve(t.current);
									}
								);
							}, [t, E]),
							{ inViewport: y, updateRef: C }
						);
					};
				function s(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
				e.d(l, ['v', 0, r]);
			},
			'./components/src/providers/withTracking.tsx'(O, l, e) {
				'use strict';
				e.d(l, { N: () => s, W: () => t });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('./components/src/utilities/createImpressionObserver.ts'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'sstracking';
				function t(a) {
					const n = a;
					return (u) => {
						const { controller: v, result: y, banner: P, type: h, content: g, ...E } = u;
						if (u.trackingRef) return (0, o.Y)(n, { ...u });
						!v && (!h || !g) && console.warn('Warning: No controller provided to withTracking', u),
							!y && !P && (!h || !g) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: T, inViewport: C, updateRef: p } = (0, c.Q)(),
							i = (y || P || (h && g?.[h]?.[0]))?.responseId,
							m = (0, r.li)(i),
							_ = (0, r.li)(!1);
						m.current !== i && (_.current = !0),
							(0, r.vJ)(() => {
								m.current !== i && ((m.current = i), p(T.current));
							}, [i, p]),
							(0, r.vJ)(() => {
								_.current && !C && (_.current = !1);
							}, [C, i]);
						const f = h && g && !y && ['search', 'autocomplete'].includes(v?.type || '');
						C && !_.current && (f ? v?.track.banner.impression(g[h][0]) : y?.bundleSeed || v?.track.product.impression(y || P));
						const b = (0, r.hb)(
							(M) => {
								f ? v?.track.banner.click(M, g[h][0]) : v?.track.product.click(M, y || P);
							},
							[v, y, P, h, g]
						);
						(0, r.vJ)(() => {
							const M = T.current;
							if (M)
								return (
									M.setAttribute(s, 'true'),
									M.addEventListener('click', b, !0),
									() => {
										M.removeEventListener('click', b, !0);
									}
								);
						}, [b]);
						const D = {
							...E,
							controller: v,
							result: y,
							banner: P,
							type: h,
							content: g,
							trackingRef: (0, r.hb)(
								(M) => {
									p(M);
								},
								[p]
							),
						};
						return (0, o.Y)(n, { ...D });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(O, l, e) {
				'use strict';
				const o = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
				e.d(l, ['F', 0, o]);
			},
			'./components/src/utilities/createImpressionObserver.ts'(O, l, e) {
				'use strict';
				e.d(l, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					s = 1e3;
				function t(a) {
					const n = (0, o.li)(null),
						{ inViewport: d, updateRef: u } = (0, c.v)(n, { fireOnce: !0, threshold: r, minVisibleTime: s, ...a });
					return { ref: n, inViewport: d, updateRef: u };
				}
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(O, l, e) {
				'use strict';
				e.d(l, { q: () => t });
				var o = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					c = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					r = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					s = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const t = { BadgeText: () => o.p, BadgePill: () => c.L, BadgeRectangle: () => r.Z, BadgeImage: () => s.z };
			},
			'./components/src/utilities/storybook.tsx'(O, l, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					s = (t) => {
						const a = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								a.current && t.className?.includes('lang-') && !t.className?.includes(r) && window?.Prism?.highlightElement(a.current);
							}, [t.className, t.children, a]),
							(0, o.Y)('code', { ...t, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, s]);
			},
			'../../node_modules/colord/plugins/names.mjs'(O, l, e) {
				'use strict';
				e.d(l, { A: () => o }), e.dn(o);
				function o(c, r) {
					var s = {
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
						t = {};
					for (var a in s) t[s[a]] = a;
					var n = {};
					(c.prototype.toName = function (d) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var u,
							v,
							y = t[this.toHex()];
						if (y) return y;
						if (d?.closest) {
							var P = this.toRgb(),
								h = 1 / 0,
								g = 'black';
							if (!n.length) for (var E in s) n[E] = new c(s[E]).toRgb();
							for (var T in s) {
								var C = ((u = P), (v = n[T]), Math.pow(u.r - v.r, 2) + Math.pow(u.g - v.g, 2) + Math.pow(u.b - v.b, 2));
								C < h && ((h = C), (g = T));
							}
							return g;
						}
					}),
						r.string.push([
							function (d) {
								var u = d.toLowerCase(),
									v = u === 'transparent' ? '#0000' : s[u];
								return v ? new c(v).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(O, l, e) {
				'use strict';
				e.d(l, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function c(s, t, a) {
					for (a of s.keys()) if (r(a, t)) return a;
				}
				function r(s, t) {
					var a, n, d;
					if (s === t) return !0;
					if (s && t && (a = s.constructor) === t.constructor) {
						if (a === Date) return s.getTime() === t.getTime();
						if (a === RegExp) return s.toString() === t.toString();
						if (a === Array) {
							if ((n = s.length) === t.length) for (; n-- && r(s[n], t[n]); );
							return n === -1;
						}
						if (a === Set) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((d = n), (d && typeof d == 'object' && ((d = c(t, d)), !d)) || !t.has(d))) return !1;
							return !0;
						}
						if (a === Map) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((d = n[0]), (d && typeof d == 'object' && ((d = c(t, d)), !d)) || !r(n[1], t.get(d)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (s = new Uint8Array(s)), (t = new Uint8Array(t));
						else if (a === DataView) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s.getInt8(n) === t.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s[n] === t[n]; );
							return n === -1;
						}
						if (!a || typeof s == 'object') {
							n = 0;
							for (a in s) if ((o.call(s, a) && ++n && !o.call(t, a)) || !(a in t) || !r(s[a], t[a])) return !1;
							return Object.keys(t).length === n;
						}
					}
					return s !== s && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function l(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (O.exports = l);
			},
			'./components/src/components/Organisms/QuickviewLayout/readme.md'(O) {
				'use strict';
				O.exports =
					"# QuickviewLayout\n\n`QuickviewLayout` is the rendering engine of the Quickview feature. It is a MobX `observer` that subscribes to a `QuickviewManager`'s store and renders the active quickview product (`quickviewManager.store.product`) \u2014 image(s), name, variant selectors, action buttons, description, and an attributes table \u2014 arranged by a configurable, module-based `layout` prop (the same pattern as `AutocompleteLayout`).\n\nIt is composed inside a presentation container that owns the open/close shell:\n\n- **`QuickviewModal`** (`Templates/QuickviewModal`) \u2014 renders `QuickviewLayout` inside a centered `Modal`. This is the default variant injected by Snap templates.\n- **`QuickviewSlideout`** (`Templates/QuickviewSlideout`) \u2014 renders `QuickviewLayout` inside a side-panel `Slideout`.\n\nThe state half of the feature lives on `QuickviewManager` (`@athoscommerce/snap-controller`) and its `QuickviewStore` (`@athoscommerce/snap-store-mobx`). A quickview is opened by calling `quickview(result)` on a source controller (`SearchController`, `AutocompleteController`, or `RecommendationController`) \u2014 the `Result` molecule's quickview button does this \u2014 which forwards to the shared `QuickviewManager` the controller received as its `quickview` service.\n\n## Usage\n\nWhen using Snap templates a quickview controller is always created and a single container is injected into `<body>` (in a `#athos-quickview` element). `QuickviewModal` is the default; supply a `quickview` controller definition that resolves `QuickviewSlideout` from the library to use the slide-out instead.\n\n```tsx\n// Default (centered modal)\n<QuickviewModal quickviewManager={quickviewManager} />\n\n// Slide-out panel\n<QuickviewSlideout quickviewManager={quickviewManager} slideDirection=\"right\" width=\"500px\" />\n\n// The layout engine on its own (rare \u2014 normally used via a container)\n<QuickviewLayout quickviewManager={quickviewManager} />\n```\n\nThe `quickviewManager` must be a `QuickviewManager` \u2014 the components warn and render `null` when it is missing. Because the feature is driven by the shared singleton store, only one container needs to be mounted; there is no per-`Result` scoping.\n\n## Layout\n\n`QuickviewLayout` renders a flex grid of named **modules** described by the `layout` prop, resolved at render time by a recursive `findModule()` engine (mirroring `AutocompleteLayout`).\n\nEach module name maps to a library component (so theme selectors and `customComponent` overrides resolve, the same way `AutocompleteLayout` uses `terms.history` / `button.see-more`):\n\n- `slideshow` \u2014 the slideshow region (a `Slideshow` of one or more images; nav/pagination appear only for multiple images). Wrapped in `OverlayBadge` so overlay badges paint over it, unless `hideBadge` is set.\n- `calloutBadge` \u2014 the `CalloutBadge` molecule (callout badges rendered as their own block). Use `calloutBadge.<tag>` to pass a custom `tag` prop to `CalloutBadge` (e.g. `calloutBadge.callout-secondary`); the bare `calloutBadge` uses the component's default tag (`callout`). A custom tag also names the component, so `calloutBadge.<tag>` theme selectors can target it.\n- `variantSelections` \u2014 one `VariantSelection` per variant selection.\n- `variantSelection.<field>` \u2014 a single `VariantSelection` for the matching selection field (e.g. `variantSelection.color`). The field also matches its component-name form (`color_family` \u2192 `color-family`), so `variantSelection.<field>` theme selectors can target it. A bare `variantSelection` module is not supported.\n- `productDetail.<path>` \u2014 a single product field via the `ProductDetail` atom, resolved from an explicit dot-path (e.g. `productDetail.mappings.core.name` or `productDetail.attributes.brand`). `productDetail.mappings.core.name` is the title; `productDetail.mappings.core.description` renders as rich HTML. Any product path is valid. The path's final segment names the component, so `productDetail.<name>` theme selectors can target it (e.g. `productDetail.description`).\n- `button.add-to-cart` / `button.more-info` \u2014 the action `Button`s (More info only renders when the product has a `url`). Clicking More info tracks a clickThrough for the product (`controller.track.product.clickThrough`, delegated with `quickView: true`) before navigating to the product page.\n- `quantityPicker` \u2014 the `QuantityPicker` molecule bound to the observable `product.quantity`, so `button.add-to-cart` adds the selected quantity to the cart. Part of both default layouts, between `variantSelections` and the action buttons.\n- `productDetailTable` \u2014 the `ProductDetailTable` molecule (opt-in via the `displayFields` config).\n- `recommendation.<profile>` \u2014 a recommendation carousel for the named profile. `<profile>` becomes the `RecommendationController` **tag**; the controller is seeded with the currently-viewed product (`mappings.core.parentId || product.id`) and rendered through the theme's `Recommendation` component (configurable via the `recommendation` prop). The profile also names the component, so `recommendation.<profile>` theme selectors can target it. Renders `null` until the controller's store is loaded.\n- `_` \u2014 a flexible separator.\n\nColumns `c1`\u2013`c4` recurse into their own `column1`\u2013`column4` layouts.\n\n- **`QuickviewModal` default** \u2014 a two-column row: `layout: [['c1', 'c2']]` with `column1 = { layout: ['slideshow'], width: '45%' }` and `column2 = { layout: [['productDetail.mappings.core.name'],['calloutBadge'],['variantSelections'],['quantityPicker'],['button.add-to-cart','button.more-info'],['productDetail.mappings.core.description'],['productDetailTable']], width: 'auto' }`. Columns stack into a single column below the `768px` breakpoint; configured column widths apply from `768px` up. (`QuickviewModal` sets no layout of its own, so it inherits these `QuickviewLayout` defaults.)\n- **`QuickviewSlideout` default** \u2014 a single stacked column: `layout: [['slideshow'], ['productDetail.mappings.core.name'], ['calloutBadge'], ['variantSelections'], ['quantityPicker'], ['button.add-to-cart', 'button.more-info'], ['productDetail.mappings.core.description'], ['productDetailTable']]`.\n\nEach module returns `null` when it has nothing to show (no description, no displayed attributes, no variant selections, no slideshow), so empty columns and rows collapse.\n\n## Props\n\n| prop | type | required | description |\n|---|---|:---:|---|\n| `quickviewManager` | `QuickviewManager` | \u2714\uFE0F | The component subscribes to `quickviewManager.store`. Renders `null` (with a console warning) when missing. |\n| `onClose` | `() => void` | | Hook into the quickview close. Will always call `quickviewManager.close()` in addition. |\n| `layout` | `ModuleNamesWithColumns[]` | | The module/column arrangement (see Layout). |\n| `hideBadge` | `boolean` | | Defaults to `false`. When `true`, the `slideshow` module renders without the `OverlayBadge` wrapper. |\n| `column1`\u2013`column4` | `Column` | | `{ layout, width, alignContent }` configs for the `c1`\u2013`c4` columns. |\n| `recommendation` | `{ component?, resultComponent?, config? }` | | Config for every `recommendation.<profile>` module (see Recommendations). |\n| `customComponent` | `string` | | Name of a custom template component override, resolved via the Snap templates library. |\n| `className`, `internalClassName`, `disableStyles`, `theme`, `treePath` | inherited | | Standard `ComponentProps`. |\n\n`QuickviewModal` / `QuickviewSlideout` accept the same `layout` / `column1`\u2013`column4` props and pass them through to `QuickviewLayout`. `QuickviewSlideout` additionally accepts `slideDirection`, `width`, and `overlayColor`.\n\n## States\n\n`QuickviewLayout` has three render branches, picked in priority order:\n\n1. **Error** \u2014 when `store.error` is set. Renders a red `role=\"alert\"` div with the error message.\n2. **Loading** \u2014 when `store.loading` is true (while the controller awaits `/v1/products`). Renders a \"Loading\u2026\" placeholder so the panel appears instantly on click.\n3. **Product** \u2014 when `store.product` is set. Renders the configured module layout.\n\nAll three branches include a close button (top-right `close-thin` icon `Button`, `aria-label` via `lang.closeButton`, default `\"Close quickview\"`).\n\n## Fullscreen gallery (lightbox)\n\nClicking the image (or any slide) opens a fullscreen `Gallery` overlay, portaled to `document.body` so it sits above the container. It provides zoom (`+`/`\u2212`, drag to pan), prev/next navigation with a `n / total` counter, touch swipe, and keyboard control (`Esc` closes, `\u2190`/`\u2192` navigate, `+`/`\u2212` zoom). The gallery shows the same image set as the slideshow region (the multi-image list when present, otherwise the single core image). `Gallery` is also exported for standalone use.\n\n## Images\n\nBy default the product branch renders a single image from `mappings.core.imageUrl || thumbnailImageUrl`.\n\n`config.imagesField` (read from `store.resolvedConfig`) controls which field(s) hold the **list** of image URLs. It accepts a single field name or an array of candidate names tried in order; each is looked up on `mappings.core` first, then `attributes`, and the first that resolves to **more than one** image renders in a 1-per-view `Slideshow`. When omitted it defaults to trying `'images'` then `'ss_images'`. If none qualifies, it falls back to the single core image (rendered through the same `Slideshow` with navigation and pagination hidden).\n\nImage resolution is variant-aware: when a variant is active its own image list is used; if the variant has no multi-image field only its single `imageUrl` is shown (no slideshow nav) rather than the parent's array. When the active variant's image appears in the slideshow, the `Slideshow`'s `startIndex` navigates to that slide in place (no remount).\n\n## Variant selection\n\nWhen `product.variants.selections` is non-empty the `variantSelections` module renders one `VariantSelection` molecule per selection, while `variantSelection.<field>` renders only the matching selection. Each renders as **swatches** or a **dropdown** based on the field's `optionConfig.type`. Because the layout reads `product.display.mappings.core` / `product.display.attributes` (which compose `mask` over base data), the displayed name, image, and attributes refresh automatically when a variant is selected.\n\n## `displayFields` and labels\n\n`store.resolvedConfig.displayFields` is an optional `DisplayFieldConfig[]` \u2014 or a `(result) => DisplayFieldConfig[]` function receiving the modal's product \u2014 selecting which attributes appear in the `productDetailTable` module (order preserved). Attributes are **opt-in**: with no `displayFields`, no table renders. Each entry is `{ field, label?, type? }`, the same shape `ProductDetailTable`'s `displayFields` prop consumes: `label` sets the row label and `type` picks the value rendering (`text` default, `price`, `rating`, `image`, `html`). When an entry has no `label`, `QuickviewLayout` resolves one from the originating controller's meta store, `quickviewManager.sourceController?.store.meta?.data?.facets[field]?.label` (falling back to the raw field name), before passing the fields to `ProductDetailTable`. Array values render comma-separated; objects fall back to `JSON.stringify`.\n\n## Recommendations\n\nPlace a `recommendation.<profile>` module anywhere in the `layout` (or a column layout) to render a recommendation carousel below/around the product. The `<profile>` segment is the `RecommendationController` **tag** (e.g. `recommendation.similar`, `recommendation.crosssell`).\n\nBecause `QuickviewLayout` cannot call hooks inside its recursive module renderer, it scans the resolved layout for every `recommendation.*` profile up front and resolves one `RecommendationController` (id `quickview-<profile>`) and the render/result components per profile. Each controller is seeded with the active product (`mappings.core.parentId || product.id`) and re-searches whenever the viewed product changes.\n\nThe optional `recommendation` prop configures every recommendation module (the profile/tag still comes from the module name):\n\n| field | type | default | description |\n|---|---|---|---|\n| `component` | library `recommendation` component name | `Recommendation` | The carousel/grid component resolved from the theme library. |\n| `resultComponent` | library `result` component name | `Result` | The per-result component passed to the recommendation component. |\n| `config` | `Partial<RecommendationControllerConfig>` | \u2796 | Extra controller config (e.g. `limit`, `globals`). `tag` is always overridden by the module name; `id` defaults to `quickview-<profile>`. |\n\nRecommendations require a Snap templates context (`useSnap().templates`); rendered standalone without one, the module collapses to nothing.\n\n## Tracking\n\nBoth containers wrap the layout in the exported `QuickviewTracker` component whenever a product is displayed. It uses the `useTracking` hook (`track: { click: false }`) to observe the quickview content and calls `quickviewManager.track.product.impression(product)` once the content has actually been viewed (the standard impression thresholds apply: \u226570% visible for at least 1s). The `QuickviewManager` delegates the call to the controller that opened the quickview with `{ quickView: true }`, and quickview impressions dedup separately from grid impressions there \u2014 one of each kind per product per response.\n\nThe tracker is keyed by `responseId`-`product.id`, so displaying a different product (or the same product from a new search response) remounts it and the new product view is observed and tracked. Because the impression fires from the containers, a standalone `QuickviewLayout` does not track impressions on its own.\n\nGeneric click tracking is disabled inside the quickview (`track: { click: false }` \u2014 clicks on the content do not send click/clickThrough events). The only click-type event is the **More info** button, which tracks a clickThrough for the product before navigating to the product page. Add-to-cart tracking runs through `controller.addToCart`, which delegates to the originating controller's cart integration (also flagged `quickView: true`).\n\n## Styling & containers\n\n`QuickviewModal` positions the `Modal` content `fixed` and centered (`translate(-50%, -50%)`, with `!important` so theme overrides cannot re-anchor it to the source `Result` tile). The z-index hierarchy is: autocomplete (`10002`) < overlay (`10005`) < content (`10006`) < dropdown portals (`10007`), so the quickview paints above an open autocomplete while variant `<select>` lists still paint above it. The container wrapper is taken out of flow (`position: absolute`, zero size) so mounting inside a CSS grid doesn't shift layout, and scroll lock is disabled so opening doesn't reflow the page.\n\n`QuickviewSlideout` keeps the same z-index ladder and syncs an overlay dismiss back to `store.close()` via the `Slideout`'s `onToggle` callback, so `store.isOpen` stays the single source of truth.\n\n## Accessibility\n\n- The content is a dialog (`role=\"dialog\"`, `aria-modal=\"true\"`, `aria-label` via `lang.quickview`) with a `useA11y` focus trap (same pattern as `AutocompleteModal`/`AutocompleteSlideout`): `Tab`/`Shift+Tab` cycle within the content, and `Escape` fires the trap's callback.\n- Error branch has `role=\"alert\"`.\n- Close button is a `Button` (keyboard focusable, `Space`/`Enter` activation via `useA11y`) with `aria-label=\"Close quickview\"` via `lang.closeButton`.\n- Clicking the overlay invokes `store.close()`.\n- `Escape` closes the quickview \u2014 unless the fullscreen gallery is open, in which case it closes the gallery first. Handled by the `useA11y` escape callback when focus is inside the content, with a window `keydown` fallback when it is not.\n- Focus management lives in the container (always mounted): on open, focus moves to the close button; on close, focus is restored to the previously focused element.\n\n## Lang\n\n`QuickviewLayout` (and both containers, which forward the prop) accepts a `lang` prop following the standard `defaultLang` \u2192 `deepmerge` \u2192 `useLang` pattern:\n\n- `quickview` \u2014 attributes for the dialog content (default `aria-label=\"Quickview\"`).\n- `closeButton` \u2014 attributes for the close button (default `aria-label=\"Close quickview\"`).\n- `addToCartButton` \u2014 value for the add-to-cart button (default `Add to Cart`).\n- `moreInfoButton` \u2014 value for the more-info button (default `More info`).\n- `loadingText` \u2014 value for the loading indicator (default `Loading\u2026`).\n\n## Notes\n\n- Rendered inside a `CacheProvider` so emotion styles are scoped correctly when portaled.\n- Container clicks call `stopPropagation` so they don't reach the `AutocompleteController`'s document click handler (which would close an open autocomplete behind the quickview).\n- The layout does not fetch data; `QuickviewManager` loads product data (`/v1/products`) and the layout renders whatever the store provides.\n";
			},
		},
	]);
})();
