'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5615],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(G, O, s) {
				s.d(O, { Z: () => e });
				function e(t, g) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...g };
					if (typeof t != 'number' || Number.isNaN(t)) return;
					const d = _(t, o.decimalPlaces).split('.');
					(d[0] = d[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (d[1] = (d[1] || '').padEnd(o.decimalPlaces, '0'));
					let p = d.join(o.decimalSeparator);
					return o.symbolAfter ? (p = p + o.symbol) : (p = o.symbol + p), p;
				}
				function _(t, g) {
					const o = t.toString(),
						d = o.indexOf('.'),
						p = d == -1 ? o.length : 1 + d + (g || -1);
					return o.substr(0, p);
				}
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(G, O, s) {
				s.d(O, { z: () => D });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/hooks/useComponent.tsx');
				const I = () => (0, _.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					D = (0, o.PA)((M) => {
						const u = (0, p.u)(),
							P = (0, K.uk)(),
							E = { treePath: (0, N.LU)() },
							l = (0, A.v6)('badgeImage', u, E, M),
							{ label: a, url: r, tag: i, className: v, internalClassName: x, customComponent: j } = l;
						if (j) {
							const c = (0, b.x)(P?.templates?.library.import.component.badgeImage || {}, j);
							if (c) return (0, e.Y)(c, { ...l });
						}
						const B = (0, Y.Z)(l, I);
						return r
							? (0, e.Y)(d._, {
									children: (0, e.Y)('img', {
										...B,
										className: g()('ss__badge-image', `ss__badge-image--${i}`, v, x),
										alt: a || `${i} badge`,
										src: r,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(G, O, s) {
				s.d(O, { L: () => D });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/hooks/useComponent.tsx');
				const I = ({ color: M, colorText: u }) =>
						(0, _.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: M,
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					D = (0, o.PA)((M) => {
						const u = (0, p.u)(),
							P = (0, K.uk)(),
							E = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, N.LU)() },
							l = (0, A.v6)('badgePill', u, E, M),
							{ value: a, tag: r, className: i, internalClassName: v, customComponent: x } = l;
						if (x) {
							const B = (0, b.x)(P?.templates?.library.import.component.badgePill || {}, x);
							if (B) return (0, e.Y)(B, { ...l });
						}
						const j = (0, Y.Z)(l, I);
						return a
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...j,
										className: g()('ss__badge-pill', `ss__badge-pill--${r}`, i, v),
										children: (0, e.Y)('span', { className: 'ss__badge-pill__value', children: a }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(G, O, s) {
				s.d(O, { Z: () => D });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/hooks/useComponent.tsx');
				const I = ({ color: M, colorText: u }) =>
						(0, _.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: M,
							color: u,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					D = (0, o.PA)((M) => {
						const u = (0, p.u)(),
							P = (0, K.uk)(),
							E = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, N.LU)() },
							l = (0, A.v6)('badgeRectangle', u, E, M),
							{ value: a, tag: r, className: i, internalClassName: v, customComponent: x } = l;
						if (x) {
							const B = (0, b.x)(P?.templates?.library.import.component.badgeRectangle || {}, x);
							if (B) return (0, e.Y)(B, { ...l });
						}
						const j = (0, Y.Z)(l, I);
						return a
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...j,
										className: g()('ss__badge-rectangle', `ss__badge-rectangle--${r}`, i, v),
										children: (0, e.Y)('span', { className: 'ss__badge-rectangle__value', children: a }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(G, O, s) {
				s.d(O, { p: () => D });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/hooks/useComponent.tsx');
				const I = ({ colorText: M }) =>
						(0, _.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: M,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					D = (0, o.PA)((M) => {
						const u = (0, p.u)(),
							P = (0, K.uk)(),
							E = { colorText: '#000000', treePath: (0, N.LU)() },
							l = (0, A.v6)('badgeText', u, E, M),
							{ value: a, tag: r, className: i, internalClassName: v, customComponent: x } = l;
						if (x) {
							const B = (0, b.x)(P?.templates?.library.import.component.badgeText || {}, x);
							if (B) return (0, e.Y)(B, { ...l });
						}
						const j = (0, Y.Z)(l, I);
						return a
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...j,
										className: g()('ss__badge-text', `ss__badge-text--${r}`, i, v),
										children: (0, e.Y)('span', { className: 'ss__badge-text__value', children: a }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(G, O, s) {
				s.d(O, { g: () => M });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function t(u, P) {
					const R = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...P };
					return (0, _.Z)(u, R);
				}
				var g = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = s('../../node_modules/classnames/index.js'),
					d = s.n(o),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/providers/cache.tsx'),
					Y = s('./components/src/utilities/mergeProps.ts'),
					b = s('./components/src/utilities/mergeStyles.ts'),
					I = s('./components/src/hooks/useComponent.tsx');
				const D = ({ theme: u }) =>
					(0, g.AH)({ color: u?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function M(u) {
					const P = (0, p.u)(),
						R = (0, K.uk)(),
						l = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, N.LU)(),
						},
						a = (0, Y.v6)('price', P, l, u),
						{
							lineThrough: r,
							value: i,
							symbol: v,
							decimalPlaces: x,
							padDecimalPlaces: j,
							thousandsSeparator: B,
							decimalSeparator: c,
							symbolAfter: m,
							raw: F,
							className: S,
							internalClassName: $,
							customComponent: U,
						} = a;
					if (U) {
						const C = (0, I.x)(R?.templates?.library.import.component.price || {}, U);
						if (C) return (0, e.Y)(C, { ...a });
					}
					let y;
					i && (y = t(i, { symbol: '', decimalPlaces: x, padDecimalPlaces: j, thousandsSeparator: B, decimalSeparator: c }));
					const n = (0, b.Z)(a, D);
					return y
						? F
							? (0, e.Y)(e.FK, { children: y })
							: (0, e.Y)(A._, {
									children: (0, e.FD)('span', {
										...n,
										className: d()('ss__price', { 'ss__price--strike': r }, S, $),
										children: [
											v && !m ? (0, e.Y)('span', { className: 'ss__price__symbol', children: v }) : (0, e.Y)(e.FK, {}),
											(0, e.Y)('span', { className: 'ss__price__value', children: y }),
											v && m ? (0, e.Y)('span', { className: 'ss__price__symbol', children: v }) : (0, e.Y)(e.FK, {}),
										],
									}),
							  })
						: null;
				}
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(G, O, s) {
				s.d(O, { W: () => M });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/utilities/defaultBadgeComponentMap.ts'),
					I = s('./components/src/hooks/useComponent.tsx');
				const D = () => (0, _.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					M = (0, o.PA)((u) => {
						const P = (0, p.u)(),
							R = (0, K.uk)(),
							l = { tag: 'callout', limit: 1, treePath: (0, N.LU)() },
							a = (0, A.v6)('calloutBadge', P, l, u),
							{ result: r, tag: i, renderEmpty: v, limit: x, className: j, internalClassName: B, treePath: c, customComponent: m } = a;
						if (m) {
							const U = (0, I.x)(R?.templates?.library.import.component.calloutBadge || {}, m);
							if (U) return (0, e.Y)(U, { ...a });
						}
						const F = { ...b.q, ...(R?.templates?.library.import.component.badge || {}), ...a.componentMap },
							S = (0, Y.Z)(a, D),
							$ = r?.display.badges?.atLocation(i).slice(0, x);
						return v || $?.length
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...S,
										className: g()('ss__callout-badge', `ss__callout-badge--${i?.replace('/', '-')}`, j, B),
										children: $.map((U) => {
											const y = (0, I.x)(F, U.component);
											return y ? (0, e.Y)(y, { ...U, ...U.parameters, treePath: c }) : null;
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(G, O, s) {
				s.d(O, { B: () => r });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					t = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = s('../../node_modules/classnames/index.js'),
					o = s.n(g),
					d = s('../../node_modules/deepmerge/dist/cjs.js'),
					p = s.n(d),
					K = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					N = s('./components/src/providers/cache.tsx'),
					A = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = s('./components/src/providers/snap.tsx'),
					b = s('./components/src/providers/treePath.tsx'),
					I = s('./components/src/utilities/defined.ts'),
					D = s('./components/src/utilities/mergeProps.ts'),
					M = s('./components/src/utilities/mergeStyles.ts'),
					u = s('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					P = s('./components/src/hooks/useA11y.tsx'),
					R = s('./components/src/hooks/useLang.tsx'),
					E = s('./components/src/hooks/useComponent.tsx'),
					l = s('./components/src/components/Atoms/Icon/Icon.tsx');
				const a = ({ horizontal: i }) =>
					(0, t.AH)({
						display: 'flex',
						flexDirection: i ? 'row' : 'column',
						alignItems: i ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: i ? 'row' : 'column',
							alignItems: i ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function r(i) {
					const v = (0, A.u)(),
						x = (0, Y.uk)(),
						B = { treePath: (0, b.LU)() },
						c = (0, D.v6)('list', v, B, i),
						{
							titleText: m,
							onSelect: F,
							native: S,
							multiSelect: $,
							hideOptionLabels: U,
							hideOptionIcons: y,
							hideOptionCheckboxes: n,
							disabled: C,
							hideTitleText: Q,
							options: f,
							requireSelection: X,
							disableStyles: Z,
							className: w,
							internalClassName: W,
							treePath: L,
							customComponent: z,
						} = c;
					if (z) {
						const h = (0, E.x)(x?.templates?.library.import.component.list || {}, z);
						if (h) return (0, e.Y)(h, { ...c });
					}
					let J = c.selected;
					const es = {
							checkbox: { native: S, ...(0, I.s)({ disableStyles: Z }), theme: c?.theme, treePath: L },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, I.s)({ disableStyles: Z }), theme: c?.theme, treePath: L },
						},
						os = (0, M.Z)(c, a);
					J && !Array.isArray(J) && (J = [J]);
					const [k, ns] = (0, _.J0)(J || []),
						[is] = (0, _.J0)(J || []);
					try {
						if (J) {
							const h = JSON.stringify(is),
								V = JSON.stringify(J),
								T = JSON.stringify(k);
							h !== V && V !== T && ns(J);
						}
					} catch {}
					const as = (h, V) => {
							let T;
							$
								? k.find((ts) => ts.value === V.value)
									? ((T = [...k]),
									  T.splice(
											T.findIndex((ts) => ts.value === V.value),
											1
									  ),
									  T.length == 0 && X && (T = [V]))
									: (T = [...k, V])
								: !X && k.find((ts) => ts.value === V.value)
								? (T = [])
								: (T = [V]),
								F && F(h, V, T),
								ns(T);
						},
						ls = {},
						rs = p()(ls, c.lang || {}),
						cs = (0, R.u)(rs, { options: f, selectedOptions: k });
					return typeof f == 'object' && f?.length
						? (0, e.Y)(N._, {
								children: (0, e.FD)('div', {
									...os,
									className: o()('ss__list', { 'ss__list--native': S, 'ss__list--disabled': C }, w, W),
									children: [
										(m || rs?.title?.value) && !Q && (0, e.Y)('h5', { className: 'ss__list__title', ...cs.title?.all, children: m }),
										(0, e.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': m,
											children: f.map((h) => {
												const V = k.some((T) => T.value == h.value);
												return (0, e.FD)('li', {
													className: o()(`ss__list__option ss__list__option--${K.p(h.value?.toString())}`, {
														'ss__list__option--selected': V,
														'ss__list__option--disabled': h?.disabled,
														'ss__list__option--unavailable': h?.available === !1,
													}),
													ref: (T) => (0, P.iy)(T),
													onClick: (T) => !C && !h?.disabled && as(T, h),
													title: h.label,
													role: 'option',
													'aria-selected': V,
													'aria-disabled': h.disabled || h?.available === !1,
													children: [
														!n && (0, e.Y)(u.S, { ...es.checkbox, checked: V, disableA11y: !0, 'aria-label': h.label }),
														h.icon && !y && (0, e.Y)(l.I, { ...es.icon, ...(typeof h.icon == 'string' ? { icon: h.icon } : h.icon) }),
														!U && (h.label || !h.icon) && (0, e.Y)('label', { className: 'ss__list__option__label', children: h.label || h.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(G, O, s) {
				s.d(O, { Q: () => u });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = s('../../node_modules/classnames/index.js'),
					g = s.n(t),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/mergeProps.ts'),
					Y = s('./components/src/utilities/mergeStyles.ts'),
					b = s('./components/src/utilities/defaultBadgeComponentMap.ts'),
					I = s('./components/src/hooks/useComponent.tsx');
				const D = ({ section: P, top: R, bottom: E, index: l, tag: a }) =>
						(0, _.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: P == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !R && !E ? 'center' : E && !R ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: a,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - l, 1),
							width: '100%',
							height: '100%',
						}),
					M = ({ controller: P }) => {
						const E = P?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let l = {};
						if (E?.length && E[0]?.length) {
							const a = E.map((i) => `"${i.join(' ')}"`).join(' ');
							l = {
								gridTemplateColumns: `repeat(${E[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${E.length}, minmax(0, 1fr))`,
								gridTemplateAreas: a,
							};
						}
						return (0, _.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...l,
							},
						});
					},
					u = (0, o.PA)((P) => {
						const R = (0, p.u)(),
							E = (0, K.uk)(),
							a = { limit: 1, treePath: (0, N.LU)() },
							r = (0, A.v6)('overlayBadge', R, a, P),
							{
								result: i,
								children: v,
								controller: x,
								renderEmpty: j,
								limit: B,
								className: c,
								internalClassName: m,
								treePath: F,
								customComponent: S,
							} = r;
						if (S) {
							const f = (0, I.x)(E?.templates?.library.import.component.overlayBadge || {}, S);
							if (f) return (0, e.Y)(f, { ...r });
						}
						if (!v) return x?.log?.warn('OverlayBadge component must have children'), null;
						const $ = x?.store?.meta;
						if (!$) return x?.log?.warn('Controller must have a meta store'), (0, e.Y)(e.FK, { children: v });
						const U = 'overlay',
							y = { ...b.q, ...(E?.templates?.library.import.component.badge || {}), ...r.componentMap },
							C = $?.badges?.groups?.[U]?.sections
								?.map((f) => {
									const X = $?.data?.badges?.locations[f],
										Z = X?.map((w, W) => ({
											tag: w.tag,
											name: w.name,
											top: W == 0,
											bottom: W == X.length - 1,
											badges: i?.display.badges?.atLocation(`${f}/${w.tag}`).slice(0, B),
										})).filter((w) => w.badges?.length);
									return { section: f, slots: Z };
								})
								.filter((f) => f.slots?.length),
							Q = (0, Y.Z)(r, M);
						return j || C?.length
							? (0, e.Y)(d._, {
									children: (0, e.FD)('div', {
										...Q,
										className: g()('ss__overlay-badge', c, m),
										children: [
											(0, e.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: C.map((f, X) =>
													f.slots?.map((Z) => {
														const w = D({ ...r, tag: Z.tag, section: f.section, index: X, top: Z.top, bottom: Z.bottom });
														return (0, e.Y)('div', {
															className: g()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${Z.tag}`),
															css: [w],
															children: Z.badges.map((W) => {
																const L = (0, I.x)(y, W.component);
																return L ? (0, e.Y)(L, { ...W, ...W.parameters, treePath: F }) : null;
															}),
														});
													})
												),
											}),
											v,
										],
									}),
							  })
							: (0, e.Y)(e.FK, { children: v });
					});
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(G, O, s) {
				s.d(O, { G: () => u });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/mobx-react-lite/es/index.js'),
					t = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = s('../../node_modules/classnames/index.js'),
					o = s.n(g),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/defined.ts'),
					Y = s('./components/src/utilities/mergeProps.ts'),
					b = s('./components/src/utilities/mergeStyles.ts'),
					I = s('./components/src/components/Atoms/Icon/Icon.tsx'),
					D = s('./components/src/hooks/useComponent.tsx');
				const M = () =>
						(0, t.AH)({
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
					u = (0, _.PA)((P) => {
						const R = (0, p.u)(),
							E = (0, K.uk)(),
							a = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, N.LU)() },
							r = (0, Y.v6)('rating', R, a, P),
							{
								alwaysRender: i,
								count: v,
								text: x,
								disablePartialFill: j,
								emptyIcon: B,
								fullIcon: c,
								disableStyles: m,
								className: F,
								internalClassName: S,
								treePath: $,
								customComponent: U,
							} = r;
						if (U) {
							const f = (0, D.x)(E?.templates?.library.import.component.rating || {}, U);
							if (f) return (0, e.Y)(f, { ...r });
						}
						const y = {
							fullIcon: { name: 'star--full', ...(0, A.s)({ disableStyles: m }), theme: r?.theme, treePath: $ },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, A.s)({ disableStyles: m }), theme: r?.theme, treePath: $ },
						};
						let n = r.value;
						isNaN(n) && (n = Number(n) || 0), n < 0 && (n = 0), n > 5 && (n = 5);
						const C = (0, b.Z)(r, M),
							Q = j ? Math.floor(n) : Math.ceil(n);
						return i || n || v
							? (0, e.Y)(d._, {
									children: (0, e.FD)('div', {
										className: o()('ss__rating', F, S),
										...C,
										children: [
											(0, e.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, e.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, e.Y)(I.I, { ...y.emptyIcon, ...(typeof B == 'string' ? { icon: B } : B) }),
															})
														),
													}),
													(0, e.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(Q)].map((f, X) => {
															let Z = 100;
															return (
																X + 1 == Q && !j && n % 1 != 0 && (Z = (n % 1 || 1) * 100),
																(0, e.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${Z}%` },
																	children: (0, e.Y)(I.I, { ...y.fullIcon, ...(typeof c == 'string' ? { icon: c } : c) }),
																})
															);
														}),
													}),
												],
											}),
											v ? (0, e.FD)('span', { className: 'ss__rating__count', children: ['(', v, ')'] }) : (0, e.Y)(e.FK, {}),
											x ? (0, e.Y)('span', { className: 'ss__rating__text', children: x }) : (0, e.Y)(e.FK, {}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(G, O, s) {
				s.d(O, { Q: () => m });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					t = s('../../node_modules/mobx-react-lite/es/index.js'),
					g = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = s('../../node_modules/classnames/index.js'),
					d = s.n(o),
					p = s('./components/src/components/Atoms/Image/Image.tsx'),
					K = s('./components/src/components/Atoms/Price/Price.tsx'),
					N = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = s('./components/src/providers/snap.tsx'),
					Y = s('./components/src/providers/treePath.tsx'),
					b = s('./components/src/providers/cache.tsx'),
					I = s('./components/src/utilities/mergeProps.ts'),
					D = s('./components/src/utilities/defined.ts'),
					M = s('./components/src/utilities/mergeStyles.ts'),
					u = s('./components/src/utilities/cloneWithProps.tsx');
				function P(F, S, $) {
					if (typeof F != 'string' || F.length <= S) return F;
					const U = F.lastIndexOf(' ', S),
						y = U != -1 ? U : S - 1;
					return F.substr(0, y) + ($ || '');
				}
				var R = s('./components/src/types.ts'),
					E = s('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					l = s('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					a = s('./components/src/components/Molecules/Rating/Rating.tsx'),
					r = s('./components/src/components/Atoms/Button/Button.tsx'),
					i = s('../../node_modules/deepmerge/dist/cjs.js'),
					v = s.n(i),
					x = s('./components/src/hooks/useComponent.tsx'),
					j = s('./components/src/hooks/useLang.tsx'),
					B = s('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const c = () =>
						(0, g.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					m = (0, t.PA)((F) => {
						const S = (0, N.u)(),
							$ = (0, A.uk)(),
							U = (0, Y.LU)(),
							y = {
								layout: R.V.grid,
								treePath: U,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							n = (0, I.v6)('result', S, y, F),
							{
								result: C,
								hideBadge: Q,
								hideTitle: f,
								hidePricing: X,
								hideImage: Z,
								detailSlot: w,
								fallback: W,
								disableStyles: L,
								className: z,
								internalClassName: J,
								layout: es,
								onClick: os,
								controller: k,
								hideVariantSelections: ns,
								hideAddToCartButton: is,
								onAddToCartClick: as,
								addToCartButtonText: ls,
								addToCartButtonSuccessText: rs,
								addToCartButtonSuccessTimeout: cs,
								hideRating: h,
								trackingRef: V,
								treePath: T,
								customComponent: ts,
							} = n;
						if (ts) {
							const ss = (0, x.x)($?.templates?.library.import.component.result || {}, ts);
							if (ss) return (0, e.Y)(ss, { ...n });
						}
						const H = C?.display?.mappings.core || C?.mappings?.core,
							[ps, ms] = (0, _.J0)(!1),
							q = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, D.s)({ disableStyles: L }),
									theme: n.theme,
									treePath: T,
								},
								price: { internalClassName: 'ss__result__price', ...(0, D.s)({ disableStyles: L }), theme: n.theme, treePath: T },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: C,
									...(0, D.s)({ disableStyles: L }),
									theme: n.theme,
									treePath: T,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: C,
									controller: k,
									...(0, D.s)({ disableStyles: L }),
									theme: n.theme,
									treePath: T,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: H?.name || '',
									src: H?.imageUrl || '',
									...(0, D.s)({ disableStyles: L, fallback: W }),
									theme: n.theme,
									treePath: T,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: H?.rating || 0,
									count: Number(H?.ratingCount || 0),
									...(0, D.s)({ disableStyles: L }),
									theme: n.theme,
									treePath: T,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (ss) => {
										ms(!0), as && as(ss, C), k?.addToCart([C]), setTimeout(() => ms(!1), cs);
									},
									...(0, D.s)({ disableStyles: L }),
									theme: n.theme,
									treePath: T,
								},
							};
						let _s = H?.name;
						n.truncateTitle && (_s = P(H?.name || '', n.truncateTitle.limit, n.truncateTitle.append));
						const us = (0, M.Z)(n, c),
							Es = { addToCartButtonText: { value: ps ? rs : ls } },
							vs = v()(Es, n.lang || {}),
							gs = (0, j.u)(vs, { result: C, controller: k }),
							ds = !!(H?.msrp && H?.price && H?.price < H?.msrp);
						return H
							? (0, e.Y)(b._, {
									children: (0, e.FD)('article', {
										...us,
										className: d()('ss__result', `ss__result--${es}`, { 'ss__result--sale': ds }, z, J),
										ref: V,
										children: [
											!Z &&
												(0, e.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, e.Y)('a', {
														href: H.url,
														onClick: (ss) => {
															os && os(ss);
														},
														children: Q
															? (0, e.Y)(p._, { ...q.image })
															: (0, e.Y)(l.Q, { ...q.overlayBadge, controller: k, children: (0, e.Y)(p._, { ...q.image }) }),
													}),
												}),
											(0, e.FD)('div', {
												className: 'ss__result__details',
												children: [
													!Q && (0, e.Y)(E.W, { ...q.calloutBadge, controller: k }),
													!f &&
														(0, e.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, e.Y)('a', {
																href: H.url,
																onClick: (ss) => {
																	os && os(ss);
																},
																dangerouslySetInnerHTML: { __html: _s || '' },
															}),
														}),
													!h && (0, e.Y)(a.G, { ...q.rating }),
													!X && H.price && H.price > 0
														? (0, e.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ds
																	? (0, e.FD)(e.FK, {
																			children: [
																				(0, e.Y)(K.g, { ...q.price, value: H.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, e.Y)(K.g, { ...q.price, value: H.price, name: 'price' }),
																			],
																	  })
																	: (0, e.Y)(K.g, { ...q.price, value: H.price }),
														  })
														: null,
													(0, u.Y)(w, { result: C, treePath: T }),
													!ns &&
														C.variants?.selections.length &&
														(0, e.Y)('div', {
															className: 'ss__result__details__variant-selection',
															children: C.variants?.selections.map((ss) => (0, e.Y)(B.m, { ...q.variantSelection, selection: ss })),
														}),
													!is &&
														(0, e.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, e.Y)(r.$, { ...q.button, content: ls, ...gs.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(G, O, s) {
				s.d(O, { m: () => r });
				var e = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = s('../../node_modules/mobx-react-lite/es/index.js'),
					t = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = s('../../node_modules/classnames/index.js'),
					o = s.n(g),
					d = s('./components/src/providers/cache.tsx'),
					p = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = s('./components/src/providers/snap.tsx'),
					N = s('./components/src/providers/treePath.tsx'),
					A = s('./components/src/utilities/defined.ts'),
					Y = s('./components/src/utilities/mergeProps.ts'),
					b = s('./components/src/utilities/mergeStyles.ts'),
					I = s('./components/src/components/Molecules/List/List.tsx'),
					D = s('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					M = s('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					u = s('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = s('./components/src/hooks/useA11y.tsx'),
					R = s('./components/src/hooks/useComponent.tsx'),
					E = s('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const l = () =>
						(0, t.AH)({
							'.ss__variant-selection__dropdown': {
								'.ss__dropdown__button': {
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									'.ss__dropdown__button-wrapper': { display: 'flex', gap: '5px' },
								},
							},
						}),
					a = () =>
						(0, t.AH)({
							margin: '0px',
							padding: '5px',
							background: 'white',
							zIndex: 10,
							border: '1px solid black',
							'.ss__variant-selection__option': { cursor: 'pointer', position: 'relative' },
							'.ss__variant-selection__option:hover': { fontWeight: 'bold' },
							'.ss__variant-selection__option--selected': { fontWeight: 'bold' },
							'.ss__variant-selection__option--disabled': { pointerEvents: 'none', cursor: 'initial', color: 'red' },
							'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': {
								textDecoration: 'line-through',
								opacity: 0.5,
							},
						}),
					r = (0, _.PA)((i) => {
						const v = (0, p.u)(),
							x = (0, K.uk)(),
							j = (0, N.LU)(),
							B = { name: (0, E.P)(i.selection.field), treePath: j },
							c = (0, Y.v6)('variantSelection', v, B, i),
							{ selection: m, onSelect: F, disableStyles: S, className: $, internalClassName: U, treePath: y, customComponent: n } = c;
						if (n) {
							const W = (0, R.x)(x?.templates?.library.import.component.variantSelection || {}, n);
							if (W) return (0, e.Y)(W, { ...c });
						}
						let C = c.type;
						C || (m.type == 'swatch' ? (C = 'swatches') : (C = 'dropdown'));
						const Q = (W, L) => {
								F && F(W, L), m.select(L.value);
							},
							f = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, A.s)({ disableStyles: S }),
									theme: c?.theme,
									treePath: y,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, A.s)({ disableStyles: S }),
									theme: c?.theme,
									treePath: y,
								},
								list: {
									titleText: m.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (W, L) => Q(W, L),
									selected: m.selected,
									...(0, A.s)({ disableStyles: S }),
									theme: c?.theme,
									treePath: y,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (W, L) => Q(W, L),
									selected: m.selected,
									...(0, A.s)({ disableStyles: S }),
									theme: c?.theme,
									treePath: y,
								},
							},
							X = (0, b.Z)(c, l),
							Z = (0, b.Z)(c, a),
							w = (W) => {
								const { toggleOpen: L } = W;
								return (0, e.Y)('ul', {
									...Z,
									className: 'ss__variant-selection__options',
									ref: (z) => (0, P.iy)(z, -1, !0, () => L()),
									children: m.values.map((z) => {
										const J = m.selected?.value == z.value;
										return (0, e.Y)('li', {
											className: o()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': J,
												'ss__variant-selection__option--disabled': z.disabled,
												'ss__variant-selection__option--unavailable': z.available === !1,
											}),
											onClick: (es) => !z.disabled && Q(es, z),
											ref: (es) => (0, P.iy)(es),
											'aria-selected': J,
											'aria-disabled': z.disabled || z.available === !1,
											children: z.label,
										});
									}),
								});
							};
						return m.values.length
							? (0, e.Y)(d._, {
									children: (0, e.Y)('div', {
										...X,
										className: o()('ss__variant-selection', `ss__variant-selection--${C}`, `ss__variant-selection--${m.field}`, $, U),
										children: (() => {
											switch (C) {
												case 'dropdown':
													return (0, e.Y)(e.FK, {
														children: (() => {
															const W = (L) => {
																const { open: z } = L;
																return (0, e.FD)(e.FK, {
																	children: [
																		(0, e.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, e.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: m.label }),
																				m.selected
																					? (0, e.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', m.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, e.Y)(u.I, { icon: z ? 'angle-up' : 'angle-down', ...f.icon, treePath: L.treePath }),
																	],
																});
															};
															return (0, e.Y)(M.m, { button: (0, e.Y)(W, { treePath: y }), ...f.dropdown, content: (0, e.Y)(w, {}) });
														})(),
													});
												case 'list':
													return (0, e.Y)(e.FK, { children: (0, e.Y)(I.B, { ...f.list, options: m.values }) });
												case 'swatches':
													return (0, e.Y)(e.FK, { children: (0, e.Y)(D.l, { ...f.swatches, options: m.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
			},
			'./components/src/types.ts'(G, O, s) {
				s.d(O, { Q: () => _, V: () => e });
				var e = ((t) => ((t.grid = 'grid'), (t.list = 'list'), t))(e || {}),
					_ = ((t) => (
						(t.GRID = 'grid'),
						(t.PALETTE = 'palette'),
						(t.LIST = 'list'),
						(t.SLIDER = 'slider'),
						(t.HIERARCHY = 'hierarchy'),
						(t.TOGGLE = 'toggle'),
						t
					))(_ || {});
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(G, O, s) {
				s.d(O, { q: () => o });
				var e = s('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					_ = s('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					t = s('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					g = s('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const o = { BadgeText: () => e.p, BadgePill: () => _.L, BadgeRectangle: () => t.Z, BadgeImage: () => g.z };
			},
		},
	]);
})();
