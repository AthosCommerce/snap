'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1877],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(V, h, e) {
				e.d(h, { z: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = () => (0, p.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					T = (0, v.PA)((m) => {
						const d = (0, I.u)(),
							W = { treePath: (0, f.LU)() },
							_ = (0, u.v6)('badgeImage', d, W, m),
							{ label: n, url: a, tag: t, className: r, internalClassName: o } = _,
							{ overrideElement: i, shouldRenderDefault: D } = (0, C._)('badgeImage', _);
						if (!D) return i;
						const c = (0, R.Z)(_, A);
						return a
							? (0, s.Y)(B._, {
									children: (0, s.Y)('img', {
										...c,
										className: M()('ss__badge-image', `ss__badge-image--${t}`, r, o),
										alt: n || `${t} badge`,
										src: a,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(V, h, e) {
				e.d(h, { L: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ color: m, colorText: d }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					T = (0, v.PA)((m) => {
						const d = (0, I.u)(),
							W = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							_ = (0, u.v6)('badgePill', d, W, m),
							{ value: n, tag: a, className: t, internalClassName: r } = _,
							{ overrideElement: o, shouldRenderDefault: i } = (0, C._)('badgePill', _);
						if (!i) return o;
						const D = (0, R.Z)(_, A);
						return n
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...D,
										className: M()('ss__badge-pill', `ss__badge-pill--${a}`, t, r),
										children: (0, s.Y)('span', { className: 'ss__badge-pill__value', children: n }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(V, h, e) {
				e.d(h, { Z: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ color: m, colorText: d }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: m,
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					T = (0, v.PA)((m) => {
						const d = (0, I.u)(),
							W = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							_ = (0, u.v6)('badgeRectangle', d, W, m),
							{ value: n, tag: a, className: t, internalClassName: r } = _,
							{ overrideElement: o, shouldRenderDefault: i } = (0, C._)('badgeRectangle', _);
						if (!i) return o;
						const D = (0, R.Z)(_, A);
						return n
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...D,
										className: M()('ss__badge-rectangle', `ss__badge-rectangle--${a}`, t, r),
										children: (0, s.Y)('span', { className: 'ss__badge-rectangle__value', children: n }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(V, h, e) {
				e.d(h, { p: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ colorText: m }) =>
						(0, p.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: m,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					T = (0, v.PA)((m) => {
						const d = (0, I.u)(),
							W = { colorText: '#000000', treePath: (0, f.LU)() },
							_ = (0, u.v6)('badgeText', d, W, m),
							{ value: n, tag: a, className: t, internalClassName: r } = _,
							{ overrideElement: o, shouldRenderDefault: i } = (0, C._)('badgeText', _);
						if (!i) return o;
						const D = (0, R.Z)(_, A);
						return n
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...D,
										className: M()('ss__badge-text', `ss__badge-text--${a}`, t, r),
										children: (0, s.Y)('span', { className: 'ss__badge-text__value', children: n }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = e('../../node_modules/classnames/index.js'),
					B = e.n(v),
					I = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const T = ({ theme: d }) =>
						(0, M.AH)({ color: d?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					m = (0, p.PA)((d) => {
						const b = (0, f.u)(),
							_ = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, u.LU)(),
							},
							n = (0, R.v6)('price', b, _, d),
							{
								lineThrough: a,
								value: t,
								format: r,
								symbol: o,
								decimalPlaces: i,
								padDecimalPlaces: D,
								thousandsSeparator: c,
								decimalSeparator: l,
								symbolAfter: j,
								raw: N,
								className: F,
								internalClassName: J,
							} = n,
							{ overrideElement: S, shouldRenderDefault: Z } = (0, A._)('price', n);
						if (!Z) return S;
						let E;
						t && (E = r ? r(t) : g.G(t, { symbol: '', decimalPlaces: i, padDecimalPlaces: D, thousandsSeparator: c, decimalSeparator: l }));
						const L = (0, C.Z)(n, T);
						return E
							? N
								? (0, s.Y)(s.FK, { children: E })
								: (0, s.Y)(I._, {
										children: (0, s.FD)('span', {
											...L,
											className: B()('ss__price', { 'ss__price--strike': a }, F, J),
											children: [
												!r && o && !j ? (0, s.Y)('span', { className: 'ss__price__symbol', children: o }) : (0, s.Y)(s.FK, {}),
												(0, s.Y)('span', { className: 'ss__price__value', children: E }),
												!r && o && j ? (0, s.Y)('span', { className: 'ss__price__symbol', children: o }) : (0, s.Y)(s.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(h, ['g', 0, m]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					T = e('./components/src/hooks/useComponent.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const d = () => (0, p.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					b = ({ badge: _, badgeComponentMap: n, treePath: a }) => {
						const { ComponentOverride: t } = (0, T.x)(n, _.component);
						return t ? (0, s.Y)(t, { ..._, ..._.parameters, treePath: a }) : null;
					},
					W = (0, v.PA)((_) => {
						const n = (0, I.u)(),
							a = (0, f.uk)(),
							r = { tag: 'callout', limit: 1, treePath: (0, u.LU)() },
							o = (0, R.v6)('calloutBadge', n, r, _),
							{ result: i, tag: D, renderEmpty: c, limit: l, className: j, internalClassName: N, treePath: F } = o,
							{ overrideElement: J, shouldRenderDefault: S } = (0, m._)('calloutBadge', o);
						if (!S) return J;
						const Z = { ...A.q, ...(a?.templates?.library.import.component.badge || {}), ...o.componentMap },
							E = (0, C.Z)(o, d),
							L = i?.display.badges?.atLocation(D).slice(0, l);
						return c || L?.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...E,
										className: M()('ss__callout-badge', `ss__callout-badge--${D?.replace('/', '-')}`, j, N),
										children: L.map((H, Y) => (0, s.Y)(b, { badge: H, badgeComponentMap: Z, treePath: F }, `${H.component}-${Y}`)),
									}),
							  })
							: null;
					});
				e.d(h, ['W', 0, W]);
			},
			'./components/src/components/Molecules/List/List.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					v = e.n(M),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(B),
					f = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					W = e('./components/src/hooks/useA11y.tsx'),
					_ = e('./components/src/hooks/useLang.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					a = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const t = ({ horizontal: o }) =>
						(0, g.AH)({
							display: 'flex',
							flexDirection: o ? 'row' : 'column',
							alignItems: o ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: o ? 'row' : 'column',
								alignItems: o ? 'center' : void 0,
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
						}),
					r = (0, u.PA)((o) => {
						const i = (0, C.u)(),
							c = { treePath: (0, A.LU)() },
							l = (0, m.v6)('list', i, c, o),
							{
								titleText: j,
								onSelect: N,
								native: F,
								multiSelect: J,
								hideOptionLabels: S,
								hideOptionIcons: Z,
								hideOptionCheckboxes: E,
								disabled: L,
								hideTitleText: H,
								options: Y,
								requireSelection: Q,
								disableStyles: G,
								className: w,
								internalClassName: x,
								treePath: K,
							} = l,
							{ overrideElement: P, shouldRenderDefault: z } = (0, n._)('list', l);
						if (!z) return P;
						let U = l.selected;
						const q = {
								checkbox: { native: F, ...(0, T.s)({ disableStyles: G }), theme: l?.theme, treePath: K },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, T.s)({ disableStyles: G }), theme: l?.theme, treePath: K },
							},
							te = (0, d.Z)(l, t);
						U && !Array.isArray(U) && (U = [U]);
						const [X, ee] = (0, p.J0)(U || []),
							[oe] = (0, p.J0)(U || []);
						try {
							if (U) {
								const O = JSON.stringify(oe),
									$ = JSON.stringify(U),
									y = JSON.stringify(X);
								O !== $ && $ !== y && ee(U);
							}
						} catch {}
						const ne = (O, $) => {
								let y;
								J
									? X.find((k) => k.value === $.value)
										? ((y = [...X]),
										  y.splice(
												y.findIndex((k) => k.value === $.value),
												1
										  ),
										  y.length == 0 && Q && (y = [$]))
										: (y = [...X, $])
									: !Q && X.find((k) => k.value === $.value)
									? (y = [])
									: (y = [$]),
									N && N(O, $, y),
									ee(y);
							},
							ae = {},
							se = I()(ae, l.lang || {}),
							le = (0, _.u)(se, { options: Y, selectedOptions: X }, { activeBreakpoint: i?.activeBreakpoint });
						return typeof Y == 'object' && Y?.length
							? (0, s.Y)(R._, {
									children: (0, s.FD)('div', {
										...te,
										className: v()('ss__list', { 'ss__list--native': F, 'ss__list--disabled': L }, w, x),
										children: [
											(j || se?.title?.value) && !H && (0, s.Y)('h5', { className: 'ss__list__title', ...le.title?.all, children: j }),
											(0, s.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': j,
												children: Y.map((O) => {
													const $ = X.some((y) => y.value == O.value);
													return (0, s.FD)('li', {
														className: v()(`ss__list__option ss__list__option--${f.p(O.value?.toString())}`, {
															'ss__list__option--selected': $,
															'ss__list__option--disabled': O?.disabled,
															'ss__list__option--unavailable': O?.available === !1,
														}),
														ref: (y) => (0, W.iy)(y),
														onClick: (y) => !L && !O?.disabled && ne(y, O),
														title: O.label,
														role: 'option',
														'aria-selected': $,
														'aria-disabled': O.disabled || O?.available === !1,
														children: [
															!E && (0, s.Y)(b.S, { ...q.checkbox, checked: $, disableA11y: !0, 'aria-label': O.label }),
															O.icon && !Z && (0, s.Y)(a.I, { ...q.icon, ...(typeof O.icon == 'string' ? { icon: O.icon } : O.icon) }),
															!S && (O.label || !O.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: O.label || O.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(h, ['B', 0, r]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					M = e.n(g),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					T = e('./components/src/hooks/useComponent.tsx'),
					m = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const d = ({ section: n, top: a, bottom: t, index: r, tag: o }) =>
						(0, p.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: n == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !a && !t ? 'center' : t && !a ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: o,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - r, 1),
							width: '100%',
							height: '100%',
						}),
					b = ({ controller: n }) => {
						const t = n?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let r = {};
						if (t?.length && t[0]?.length) {
							const o = t.map((D) => `"${D.join(' ')}"`).join(' ');
							r = {
								gridTemplateColumns: `repeat(${t[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${t.length}, minmax(0, 1fr))`,
								gridTemplateAreas: o,
							};
						}
						return (0, p.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...r,
							},
						});
					},
					W = ({ badge: n, badgeComponentMap: a, treePath: t }) => {
						const { ComponentOverride: r } = (0, T.x)(a, n.component);
						return r ? (0, s.Y)(r, { ...n, ...n.parameters, treePath: t }) : null;
					},
					_ = (0, v.PA)((n) => {
						const a = (0, I.u)(),
							t = (0, f.uk)(),
							o = { limit: 1, treePath: (0, u.LU)() },
							i = (0, R.v6)('overlayBadge', a, o, n),
							{ result: D, children: c, controller: l, renderEmpty: j, limit: N, className: F, internalClassName: J, treePath: S } = i,
							{ overrideElement: Z, shouldRenderDefault: E } = (0, m._)('overlayBadge', i);
						if (!E) return Z;
						if (!c) return l?.log?.warn('OverlayBadge component must have children'), null;
						const L = l?.store?.meta;
						if (!L) return l?.log?.warn('Controller must have a meta store'), (0, s.Y)(s.FK, { children: c });
						const H = 'overlay',
							Y = { ...A.q, ...(t?.templates?.library.import.component.badge || {}), ...i.componentMap },
							G = L?.badges?.groups?.[H]?.sections
								?.map((x) => {
									const K = L?.data?.badges?.locations[x],
										P = K?.map((z, U) => ({
											tag: z.tag,
											name: z.name,
											top: U == 0,
											bottom: U == K.length - 1,
											badges: D?.display.badges?.atLocation(`${x}/${z.tag}`).slice(0, N),
										})).filter((z) => z.badges?.length);
									return { section: x, slots: P };
								})
								.filter((x) => x.slots?.length),
							w = (0, C.Z)(i, b);
						return j || G?.length
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										...w,
										className: M()('ss__overlay-badge', F, J),
										children: [
											(0, s.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: G.map((x, K) =>
													x.slots?.map((P) => {
														const z = d({ ...i, tag: P.tag, section: x.section, index: K, top: P.top, bottom: P.bottom });
														return (0, s.Y)(
															'div',
															{
																className: M()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${P.tag}`),
																css: [z],
																children: P.badges.map((U, q) =>
																	(0, s.Y)(W, { badge: U, badgeComponentMap: Y, treePath: S }, `${P.tag}-${U.component}-${q}`)
																),
															},
															`${x.section}-${P.tag}`
														);
													})
												),
											}),
											c,
										],
									}),
							  })
							: (0, s.Y)(s.FK, { children: c });
					});
				e.d(h, ['Q', 0, _]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					v = e.n(M),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = () =>
						(0, g.AH)({
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
					d = (0, p.PA)((b) => {
						const W = (0, I.u)(),
							n = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, f.LU)() },
							a = (0, R.v6)('rating', W, n, b),
							{
								alwaysRender: t,
								count: r,
								text: o,
								disablePartialFill: i,
								emptyIcon: D,
								fullIcon: c,
								disableStyles: l,
								className: j,
								internalClassName: N,
								treePath: F,
							} = a,
							{ overrideElement: J, shouldRenderDefault: S } = (0, T._)('rating', a);
						if (!S) return J;
						const Z = {
							fullIcon: { name: 'star--full', ...(0, u.s)({ disableStyles: l }), theme: a?.theme, treePath: F },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, u.s)({ disableStyles: l }), theme: a?.theme, treePath: F },
						};
						let E = a.value;
						isNaN(E) && (E = Number(E) || 0), E < 0 && (E = 0), E > 5 && (E = 5);
						const L = (0, C.Z)(a, m),
							H = i ? Math.floor(E) : Math.ceil(E);
						return t || E || r
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										className: v()('ss__rating', j, N),
										...L,
										children: [
											(0, s.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, s.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, s.Y)(A.I, { ...Z.emptyIcon, ...(typeof D == 'string' ? { icon: D } : D) }),
															})
														),
													}),
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(H)].map((Y, Q) => {
															let G = 100;
															return (
																Q + 1 == H && !i && E % 1 != 0 && (G = (E % 1 || 1) * 100),
																(0, s.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${G}%` },
																	children: (0, s.Y)(A.I, { ...Z.fullIcon, ...(typeof c == 'string' ? { icon: c } : c) }),
																})
															);
														}),
													}),
												],
											}),
											r ? (0, s.FD)('span', { className: 'ss__rating__count', children: ['(', r, ')'] }) : (0, s.Y)(s.FK, {}),
											o ? (0, s.Y)('span', { className: 'ss__rating__text', children: o }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(h, ['G', 0, d]);
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(V, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					v = e.n(M),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Molecules/List/List.tsx'),
					T = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					m = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					d = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					b = e('./components/src/hooks/useA11y.tsx'),
					W = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					_ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const n = () =>
						(0, g.AH)({
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
						(0, g.AH)({
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
					t = (0, p.PA)((r) => {
						const o = (0, I.u)(),
							i = (0, f.LU)(),
							D = { name: (0, _.P)(r.selection.field), treePath: i },
							c = (0, R.v6)('variantSelection', o, D, r),
							{ selection: l, onSelect: j, disableStyles: N, className: F, internalClassName: J, treePath: S } = c,
							{ overrideElement: Z, shouldRenderDefault: E } = (0, W._)('variantSelection', c);
						if (!E) return Z;
						let L = c.type;
						L || (l.type == 'swatch' ? (L = 'swatches') : (L = 'dropdown'));
						const H = (x, K) => {
								j && j(x, K), l.select(K.value);
							},
							Y = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, u.s)({ disableStyles: N }),
									theme: c?.theme,
									treePath: S,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, u.s)({ disableStyles: N }),
									theme: c?.theme,
									treePath: S,
								},
								list: {
									titleText: l.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (x, K) => H(x, K),
									selected: l.selected,
									...(0, u.s)({ disableStyles: N }),
									theme: c?.theme,
									treePath: S,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (x, K) => H(x, K),
									selected: l.selected,
									...(0, u.s)({ disableStyles: N }),
									theme: c?.theme,
									treePath: S,
								},
							},
							Q = (0, C.Z)(c, n),
							G = (0, C.Z)(c, a),
							w = (x) => {
								const { toggleOpen: K } = x;
								return (0, s.Y)('ul', {
									...G,
									className: 'ss__variant-selection__options',
									ref: (P) => (0, b.iy)(P, -1, !0, () => K()),
									children: l.values.map((P) => {
										const z = l.selected?.value == P.value;
										return (0, s.Y)('li', {
											className: v()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': z,
												'ss__variant-selection__option--disabled': P.disabled,
												'ss__variant-selection__option--unavailable': P.available === !1,
											}),
											onClick: (U) => !P.disabled && H(U, P),
											ref: (U) => (0, b.iy)(U),
											'aria-selected': z,
											'aria-disabled': P.disabled || P.available === !1,
											children: P.label,
										});
									}),
								});
							};
						return l.values.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...Q,
										className: v()('ss__variant-selection', `ss__variant-selection--${L}`, `ss__variant-selection--${l.field}`, F, J),
										children: (() => {
											switch (L) {
												case 'dropdown':
													return (0, s.Y)(s.FK, {
														children: (() => {
															const x = (K) => {
																const { open: P } = K;
																return (0, s.FD)(s.FK, {
																	children: [
																		(0, s.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, s.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: l.label }),
																				l.selected
																					? (0, s.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', l.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, s.Y)(d.I, { icon: P ? 'angle-up' : 'angle-down', ...Y.icon, treePath: K.treePath }),
																	],
																});
															};
															return (0, s.Y)(m.m, { button: (0, s.Y)(x, { treePath: S }), ...Y.dropdown, content: (0, s.Y)(w, {}) });
														})(),
													});
												case 'list':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(A.B, { ...Y.list, options: l.values }) });
												case 'swatches':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(T.l, { ...Y.swatches, options: l.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
				e.d(h, ['m', 0, t]);
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(V, h, e) {
				e.d(h, { q: () => v });
				var s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					p = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					g = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					M = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const v = { BadgeText: () => s.p, BadgePill: () => p.L, BadgeRectangle: () => g.Z, BadgeImage: () => M.z };
			},
		},
	]);
})();
