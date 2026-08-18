'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1877],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(J, h, e) {
				e.d(h, { z: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = () => (0, v.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					T = (0, u.PA)((c) => {
						const m = (0, I.u)(),
							K = { treePath: (0, f.LU)() },
							l = (0, D.v6)('badgeImage', m, K, c),
							{ label: o, url: n, tag: t, className: a, internalClassName: _ } = l,
							{ overrideElement: r, shouldRenderDefault: d } = (0, C._)('badgeImage', l);
						if (!d) return r;
						const E = (0, R.Z)(l, A);
						return n
							? (0, s.Y)(B._, {
									children: (0, s.Y)('img', {
										...E,
										className: g()('ss__badge-image', `ss__badge-image--${t}`, a, _),
										alt: o || `${t} badge`,
										src: n,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(J, h, e) {
				e.d(h, { L: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ color: c, colorText: m }) =>
						(0, v.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: c,
							color: m,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					T = (0, u.PA)((c) => {
						const m = (0, I.u)(),
							K = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							l = (0, D.v6)('badgePill', m, K, c),
							{ value: o, tag: n, className: t, internalClassName: a } = l,
							{ overrideElement: _, shouldRenderDefault: r } = (0, C._)('badgePill', l);
						if (!r) return _;
						const d = (0, R.Z)(l, A);
						return o
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-pill', `ss__badge-pill--${n}`, t, a),
										children: (0, s.Y)('span', { className: 'ss__badge-pill__value', children: o }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(J, h, e) {
				e.d(h, { Z: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ color: c, colorText: m }) =>
						(0, v.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: c,
							color: m,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					T = (0, u.PA)((c) => {
						const m = (0, I.u)(),
							K = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							l = (0, D.v6)('badgeRectangle', m, K, c),
							{ value: o, tag: n, className: t, internalClassName: a } = l,
							{ overrideElement: _, shouldRenderDefault: r } = (0, C._)('badgeRectangle', l);
						if (!r) return _;
						const d = (0, R.Z)(l, A);
						return o
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-rectangle', `ss__badge-rectangle--${n}`, t, a),
										children: (0, s.Y)('span', { className: 'ss__badge-rectangle__value', children: o }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(J, h, e) {
				e.d(h, { p: () => T });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const A = ({ colorText: c }) =>
						(0, v.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					T = (0, u.PA)((c) => {
						const m = (0, I.u)(),
							K = { colorText: '#000000', treePath: (0, f.LU)() },
							l = (0, D.v6)('badgeText', m, K, c),
							{ value: o, tag: n, className: t, internalClassName: a } = l,
							{ overrideElement: _, shouldRenderDefault: r } = (0, C._)('badgeText', l);
						if (!r) return _;
						const d = (0, R.Z)(l, A);
						return o
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-text', `ss__badge-text--${n}`, t, a),
										children: (0, s.Y)('span', { className: 'ss__badge-text__value', children: o }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					B = e.n(u),
					I = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const T = ({ theme: m }) =>
						(0, g.AH)({ color: m?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } }),
					c = (0, v.PA)((m) => {
						const y = (0, f.u)(),
							l = {
								symbol: '$',
								decimalPlaces: 2,
								padDecimalPlaces: !0,
								thousandsSeparator: ',',
								decimalSeparator: '.',
								symbolAfter: !1,
								lineThrough: !1,
								treePath: (0, D.LU)(),
							},
							o = (0, R.v6)('price', y, l, m),
							{
								lineThrough: n,
								value: t,
								format: a,
								symbol: _,
								decimalPlaces: r,
								padDecimalPlaces: d,
								thousandsSeparator: E,
								decimalSeparator: i,
								symbolAfter: L,
								raw: b,
								className: Y,
								internalClassName: $,
							} = o,
							{ overrideElement: N, shouldRenderDefault: F } = (0, A._)('price', o);
						if (!F) return N;
						let P;
						t && (P = a ? a(t) : M.G(t, { symbol: '', decimalPlaces: r, padDecimalPlaces: d, thousandsSeparator: E, decimalSeparator: i }));
						const U = (0, C.Z)(o, T);
						return P
							? b
								? (0, s.Y)(s.FK, { children: P })
								: (0, s.Y)(I._, {
										children: (0, s.FD)('span', {
											...U,
											className: B()('ss__price', { 'ss__price--strike': n }, Y, $),
											children: [
												!a && _ && !L ? (0, s.Y)('span', { className: 'ss__price__symbol', children: _ }) : (0, s.Y)(s.FK, {}),
												(0, s.Y)('span', { className: 'ss__price__value', children: P }),
												!a && _ && L ? (0, s.Y)('span', { className: 'ss__price__symbol', children: _ }) : (0, s.Y)(s.FK, {}),
											],
										}),
								  })
							: null;
					});
				e.d(h, ['g', 0, c]);
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					T = e('./components/src/hooks/useComponent.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = () => (0, v.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					y = ({ badge: l, badgeComponentMap: o, treePath: n }) => {
						const { ComponentOverride: t } = (0, T.x)(o, l.component);
						return t ? (0, s.Y)(t, { ...l, ...l.parameters, treePath: n }) : null;
					},
					K = (0, u.PA)((l) => {
						const o = (0, I.u)(),
							n = (0, f.uk)(),
							a = { tag: 'callout', limit: 1, treePath: (0, D.LU)() },
							_ = (0, R.v6)('calloutBadge', o, a, l),
							{ result: r, tag: d, renderEmpty: E, limit: i, className: L, internalClassName: b, treePath: Y } = _,
							{ overrideElement: $, shouldRenderDefault: N } = (0, c._)('calloutBadge', _);
						if (!N) return $;
						const F = { ...A.q, ...(n?.templates?.library.import.component.badge || {}), ..._.componentMap },
							P = (0, C.Z)(_, m),
							U = r?.display.badges?.atLocation(d).slice(0, i);
						return E || U?.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...P,
										className: g()('ss__callout-badge', `ss__callout-badge--${d?.replace('/', '-')}`, L, b),
										children: U.map((S, Z) => (0, s.Y)(y, { badge: S, badgeComponentMap: F, treePath: Y }, `${S.component}-${Z}`)),
									}),
							  })
							: null;
					});
				e.d(h, ['W', 0, K]);
			},
			'./components/src/components/Molecules/List/List.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					u = e.n(g),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(B),
					f = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/utilities/selectionKey.ts'),
					K = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					l = e('./components/src/hooks/useA11y.tsx'),
					o = e('./components/src/hooks/useLang.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					t = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const a = ({ horizontal: r }) =>
						(0, M.AH)({
							display: 'flex',
							flexDirection: r ? 'row' : 'column',
							alignItems: r ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
							'.ss__list__options': {
								border: 'none',
								listStyle: 'none',
								padding: '0px',
								margin: '0px',
								display: 'flex',
								flexDirection: r ? 'row' : 'column',
								alignItems: r ? 'center' : void 0,
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
					_ = (0, D.PA)((r) => {
						const d = (0, C.u)(),
							i = { treePath: (0, A.LU)() },
							L = (0, c.v6)('list', d, i, r),
							{
								titleText: b,
								onSelect: Y,
								native: $,
								multiSelect: N,
								hideOptionLabels: F,
								hideOptionIcons: P,
								hideOptionCheckboxes: U,
								disabled: S,
								hideTitleText: Z,
								options: X,
								requireSelection: Q,
								disableStyles: w,
								className: x,
								internalClassName: W,
								treePath: p,
							} = L,
							{ overrideElement: H, shouldRenderDefault: z } = (0, n._)('list', L);
						if (!z) return H;
						let V = L.selected;
						const ee = {
								checkbox: { native: $, ...(0, T.s)({ disableStyles: w }), theme: L?.theme, treePath: p },
								icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, T.s)({ disableStyles: w }), theme: L?.theme, treePath: p },
							},
							oe = (0, m.Z)(L, a);
						V && !Array.isArray(V) && (V = [V]);
						const [k, se] = (0, v.J0)(V || []),
							[ne, ae] = (0, v.J0)(() => (0, y.i)(V));
						if (V) {
							const O = (0, y.i)(V);
							O !== ne && (ae(O), se(V));
						}
						const le = (O, G) => {
								let j;
								N
									? k.find((q) => q.value === G.value)
										? ((j = [...k]),
										  j.splice(
												j.findIndex((q) => q.value === G.value),
												1
										  ),
										  j.length == 0 && Q && (j = [G]))
										: (j = [...k, G])
									: !Q && k.find((q) => q.value === G.value)
									? (j = [])
									: (j = [G]),
									Y && Y(O, G, j),
									se(j);
							},
							_e = {},
							te = I()(_e, L.lang || {}),
							re = (0, o.u)(te, { options: X, selectedOptions: k }, { activeBreakpoint: d?.activeBreakpoint });
						return typeof X == 'object' && X?.length
							? (0, s.Y)(R._, {
									children: (0, s.FD)('div', {
										...oe,
										className: u()('ss__list', { 'ss__list--native': $, 'ss__list--disabled': S }, x, W),
										children: [
											(b || te?.title?.value) && !Z && (0, s.Y)('h5', { className: 'ss__list__title', ...re.title?.all, children: b }),
											(0, s.Y)('ul', {
												className: 'ss__list__options',
												role: 'listbox',
												'aria-label': b,
												children: X.map((O) => {
													const G = k.some((j) => j.value == O.value);
													return (0, s.FD)('li', {
														className: u()(`ss__list__option ss__list__option--${f.p(O.value?.toString())}`, {
															'ss__list__option--selected': G,
															'ss__list__option--disabled': O?.disabled,
															'ss__list__option--unavailable': O?.available === !1,
														}),
														ref: (j) => (0, l.iy)(j),
														onClick: (j) => !S && !O?.disabled && le(j, O),
														title: O.label,
														role: 'option',
														'aria-selected': G,
														'aria-disabled': O.disabled || O?.available === !1,
														children: [
															!U && (0, s.Y)(K.S, { ...ee.checkbox, checked: G, disableA11y: !0, 'aria-label': O.label }),
															O.icon && !P && (0, s.Y)(t.I, { ...ee.icon, ...(typeof O.icon == 'string' ? { icon: O.icon } : O.icon) }),
															!F && (O.label || !O.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: O.label || O.value }),
														],
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(h, ['B', 0, _]);
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('../../node_modules/classnames/index.js'),
					g = e.n(M),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					T = e('./components/src/hooks/useComponent.tsx'),
					c = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const m = ({ section: o, top: n, bottom: t, index: a, tag: _ }) =>
						(0, v.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: o == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !n && !t ? 'center' : t && !n ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: _,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - a, 1),
							width: '100%',
							height: '100%',
						}),
					y = ({ controller: o }) => {
						const t = o?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let a = {};
						if (t?.length && t[0]?.length) {
							const _ = t.map((d) => `"${d.join(' ')}"`).join(' ');
							a = {
								gridTemplateColumns: `repeat(${t[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${t.length}, minmax(0, 1fr))`,
								gridTemplateAreas: _,
							};
						}
						return (0, v.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...a,
							},
						});
					},
					K = ({ badge: o, badgeComponentMap: n, treePath: t }) => {
						const { ComponentOverride: a } = (0, T.x)(n, o.component);
						return a ? (0, s.Y)(a, { ...o, ...o.parameters, treePath: t }) : null;
					},
					l = (0, u.PA)((o) => {
						const n = (0, I.u)(),
							t = (0, f.uk)(),
							_ = { limit: 1, treePath: (0, D.LU)() },
							r = (0, R.v6)('overlayBadge', n, _, o),
							{ result: d, children: E, controller: i, renderEmpty: L, limit: b, className: Y, internalClassName: $, treePath: N } = r,
							{ overrideElement: F, shouldRenderDefault: P } = (0, c._)('overlayBadge', r);
						if (!P) return F;
						if (!E) return i?.log?.warn('OverlayBadge component must have children'), null;
						const U = i?.store?.meta;
						if (!U) return i?.log?.warn('Controller must have a meta store'), (0, s.Y)(s.FK, { children: E });
						const S = 'overlay',
							Z = { ...A.q, ...(t?.templates?.library.import.component.badge || {}), ...r.componentMap },
							Q = U?.badges?.groups?.[S]?.sections
								?.map((x) => {
									const W = U?.data?.badges?.locations[x],
										p = W?.map((H, z) => ({
											tag: H.tag,
											name: H.name,
											top: z == 0,
											bottom: z == W.length - 1,
											badges: d?.display.badges?.atLocation(`${x}/${H.tag}`).slice(0, b),
										})).filter((H) => H.badges?.length);
									return { section: x, slots: p };
								})
								.filter((x) => x.slots?.length),
							w = (0, C.Z)(r, y);
						return L || Q?.length
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										...w,
										className: g()('ss__overlay-badge', Y, $),
										children: [
											(0, s.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: Q.map((x, W) =>
													x.slots?.map((p) => {
														const H = m({ ...r, tag: p.tag, section: x.section, index: W, top: p.top, bottom: p.bottom });
														return (0, s.Y)(
															'div',
															{
																className: g()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${p.tag}`),
																css: [H],
																children: p.badges.map((z, V) =>
																	(0, s.Y)(K, { badge: z, badgeComponentMap: Z, treePath: N }, `${p.tag}-${z.component}-${V}`)
																),
															},
															`${x.section}-${p.tag}`
														);
													})
												),
											}),
											E,
										],
									}),
							  })
							: (0, s.Y)(s.FK, { children: E });
					});
				e.d(h, ['Q', 0, l]);
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					u = e.n(g),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const c = () =>
						(0, M.AH)({
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
					m = (0, v.PA)((y) => {
						const K = (0, I.u)(),
							o = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, f.LU)() },
							n = (0, R.v6)('rating', K, o, y),
							{
								alwaysRender: t,
								count: a,
								text: _,
								disablePartialFill: r,
								emptyIcon: d,
								fullIcon: E,
								disableStyles: i,
								className: L,
								internalClassName: b,
								treePath: Y,
							} = n,
							{ overrideElement: $, shouldRenderDefault: N } = (0, T._)('rating', n);
						if (!N) return $;
						const F = {
							fullIcon: { name: 'star--full', ...(0, D.s)({ disableStyles: i }), theme: n?.theme, treePath: Y },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, D.s)({ disableStyles: i }), theme: n?.theme, treePath: Y },
						};
						let P = n.value;
						isNaN(P) && (P = Number(P) || 0), P < 0 && (P = 0), P > 5 && (P = 5);
						const U = (0, C.Z)(n, c),
							S = r ? Math.floor(P) : Math.ceil(P);
						return t || P || a
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										className: u()('ss__rating', L, b),
										...U,
										children: [
											(0, s.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, s.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, s.Y)(A.I, { ...F.emptyIcon, ...(typeof d == 'string' ? { icon: d } : d) }),
															})
														),
													}),
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(S)].map((Z, X) => {
															let Q = 100;
															return (
																X + 1 == S && !r && P % 1 != 0 && (Q = (P % 1 || 1) * 100),
																(0, s.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${Q}%` },
																	children: (0, s.Y)(A.I, { ...F.fullIcon, ...(typeof E == 'string' ? { icon: E } : E) }),
																})
															);
														}),
													}),
												],
											}),
											a ? (0, s.FD)('span', { className: 'ss__rating__count', children: ['(', a, ')'] }) : (0, s.Y)(s.FK, {}),
											_ ? (0, s.Y)('span', { className: 'ss__rating__text', children: _ }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(h, ['G', 0, m]);
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(J, h, e) {
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					u = e.n(g),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Molecules/List/List.tsx'),
					T = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					c = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					l = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const o = () =>
						(0, M.AH)({
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
					n = () =>
						(0, M.AH)({
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
					t = (0, v.PA)((a) => {
						const _ = (0, I.u)(),
							r = (0, f.LU)(),
							d = { name: (0, l.P)(a.selection.field), treePath: r },
							E = (0, R.v6)('variantSelection', _, d, a),
							{ selection: i, onSelect: L, disableStyles: b, className: Y, internalClassName: $, treePath: N } = E,
							{ overrideElement: F, shouldRenderDefault: P } = (0, K._)('variantSelection', E);
						if (!P) return F;
						let U = E.type;
						U || (i.type == 'swatch' ? (U = 'swatches') : (U = 'dropdown'));
						const S = (x, W) => {
								L && L(x, W), i.select(W.value);
							},
							Z = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, D.s)({ disableStyles: b }),
									theme: E?.theme,
									treePath: N,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, D.s)({ disableStyles: b }),
									theme: E?.theme,
									treePath: N,
								},
								list: {
									titleText: i.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (x, W) => S(x, W),
									selected: i.selected,
									...(0, D.s)({ disableStyles: b }),
									theme: E?.theme,
									treePath: N,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (x, W) => S(x, W),
									selected: i.selected,
									...(0, D.s)({ disableStyles: b }),
									theme: E?.theme,
									treePath: N,
								},
							},
							X = (0, C.Z)(E, o),
							Q = (0, C.Z)(E, n),
							w = (x) => {
								const { toggleOpen: W } = x;
								return (0, s.Y)('ul', {
									...Q,
									className: 'ss__variant-selection__options',
									ref: (p) => (0, y.iy)(p, -1, !0, () => W()),
									children: i.values.map((p) => {
										const H = i.selected?.value == p.value;
										return (0, s.Y)('li', {
											className: u()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': H,
												'ss__variant-selection__option--disabled': p.disabled,
												'ss__variant-selection__option--unavailable': p.available === !1,
											}),
											onClick: (z) => !p.disabled && S(z, p),
											ref: (z) => (0, y.iy)(z),
											'aria-selected': H,
											'aria-disabled': p.disabled || p.available === !1,
											children: p.label,
										});
									}),
								});
							};
						return i.values.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...X,
										className: u()('ss__variant-selection', `ss__variant-selection--${U}`, `ss__variant-selection--${i.field}`, Y, $),
										children: (() => {
											switch (U) {
												case 'dropdown':
													return (0, s.Y)(s.FK, {
														children: (() => {
															const x = (W) => {
																const { open: p } = W;
																return (0, s.FD)(s.FK, {
																	children: [
																		(0, s.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, s.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: i.label }),
																				i.selected
																					? (0, s.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', i.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, s.Y)(m.I, { icon: p ? 'angle-up' : 'angle-down', ...Z.icon, treePath: W.treePath }),
																	],
																});
															};
															return (0, s.Y)(c.m, { button: (0, s.Y)(x, { treePath: N }), ...Z.dropdown, content: (0, s.Y)(w, {}) });
														})(),
													});
												case 'list':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(A.B, { ...Z.list, options: i.values }) });
												case 'swatches':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(T.l, { ...Z.swatches, options: i.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
				e.d(h, ['m', 0, t]);
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(J, h, e) {
				e.d(h, { q: () => u });
				var s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					v = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					M = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					g = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const u = { BadgeText: () => s.p, BadgePill: () => v.L, BadgeRectangle: () => M.Z, BadgeImage: () => g.z };
			},
		},
	]);
})();
