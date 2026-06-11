'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1877],
		{
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(V, h, e) {
				e.d(h, { z: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = () => (0, P.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					L = (0, p.PA)((i) => {
						const v = (0, I.u)(),
							K = { treePath: (0, f.LU)() },
							l = (0, u.v6)('badgeImage', v, K, i),
							{ label: r, url: o, tag: t, className: n, internalClassName: c } = l,
							{ overrideElement: m, shouldRenderDefault: d } = (0, T._)('badgeImage', l);
						if (!d) return m;
						const a = (0, R.Z)(l, x);
						return o
							? (0, s.Y)(B._, {
									children: (0, s.Y)('img', {
										...a,
										className: g()('ss__badge-image', `ss__badge-image--${t}`, n, c),
										alt: r || `${t} badge`,
										src: o,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(V, h, e) {
				e.d(h, { L: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = ({ color: i, colorText: v }) =>
						(0, P.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: i,
							color: v,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					L = (0, p.PA)((i) => {
						const v = (0, I.u)(),
							K = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							l = (0, u.v6)('badgePill', v, K, i),
							{ value: r, tag: o, className: t, internalClassName: n } = l,
							{ overrideElement: c, shouldRenderDefault: m } = (0, T._)('badgePill', l);
						if (!m) return c;
						const d = (0, R.Z)(l, x);
						return r
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-pill', `ss__badge-pill--${o}`, t, n),
										children: (0, s.Y)('span', { className: 'ss__badge-pill__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(V, h, e) {
				e.d(h, { Z: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = ({ color: i, colorText: v }) =>
						(0, P.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: i,
							color: v,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					L = (0, p.PA)((i) => {
						const v = (0, I.u)(),
							K = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, f.LU)() },
							l = (0, u.v6)('badgeRectangle', v, K, i),
							{ value: r, tag: o, className: t, internalClassName: n } = l,
							{ overrideElement: c, shouldRenderDefault: m } = (0, T._)('badgeRectangle', l);
						if (!m) return c;
						const d = (0, R.Z)(l, x);
						return r
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-rectangle', `ss__badge-rectangle--${o}`, t, n),
										children: (0, s.Y)('span', { className: 'ss__badge-rectangle__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(V, h, e) {
				e.d(h, { p: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = ({ colorText: i }) =>
						(0, P.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					L = (0, p.PA)((i) => {
						const v = (0, I.u)(),
							K = { colorText: '#000000', treePath: (0, f.LU)() },
							l = (0, u.v6)('badgeText', v, K, i),
							{ value: r, tag: o, className: t, internalClassName: n } = l,
							{ overrideElement: c, shouldRenderDefault: m } = (0, T._)('badgeText', l);
						if (!m) return c;
						const d = (0, R.Z)(l, x);
						return r
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...d,
										className: g()('ss__badge-text', `ss__badge-text--${o}`, t, n),
										children: (0, s.Y)('span', { className: 'ss__badge-text__value', children: r }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(V, h, e) {
				e.d(h, { g: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/currency.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					p = e.n(g),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const x = ({ theme: i }) =>
					(0, O.AH)({ color: i?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function L(i) {
					const v = (0, I.u)(),
						K = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, f.LU)(),
						},
						l = (0, u.v6)('price', v, K, i),
						{
							lineThrough: r,
							value: o,
							symbol: t,
							decimalPlaces: n,
							padDecimalPlaces: c,
							thousandsSeparator: m,
							decimalSeparator: d,
							symbolAfter: a,
							raw: _,
							className: $,
							internalClassName: S,
						} = l,
						{ overrideElement: F, shouldRenderDefault: J } = (0, T._)('price', l);
					if (!J) return F;
					let U;
					o && (U = P.G(o, { symbol: '', decimalPlaces: n, padDecimalPlaces: c, thousandsSeparator: m, decimalSeparator: d }));
					const H = (0, R.Z)(l, x);
					return U
						? _
							? (0, s.Y)(s.FK, { children: U })
							: (0, s.Y)(B._, {
									children: (0, s.FD)('span', {
										...H,
										className: p()('ss__price', { 'ss__price--strike': r }, $, S),
										children: [
											t && !a ? (0, s.Y)('span', { className: 'ss__price__symbol', children: t }) : (0, s.Y)(s.FK, {}),
											(0, s.Y)('span', { className: 'ss__price__value', children: U }),
											t && a ? (0, s.Y)('span', { className: 'ss__price__symbol', children: t }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
						: null;
				}
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(V, h, e) {
				e.d(h, { W: () => K });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					L = e('./components/src/hooks/useComponent.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = () => (0, P.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					N = ({ badge: l, badgeComponentMap: r, treePath: o }) => {
						const { ComponentOverride: t } = (0, L.x)(r, l.component);
						return t ? (0, s.Y)(t, { ...l, ...l.parameters, treePath: o }) : null;
					},
					K = (0, p.PA)((l) => {
						const r = (0, I.u)(),
							o = (0, f.uk)(),
							n = { tag: 'callout', limit: 1, treePath: (0, u.LU)() },
							c = (0, R.v6)('calloutBadge', r, n, l),
							{ result: m, tag: d, renderEmpty: a, limit: _, className: $, internalClassName: S, treePath: F } = c,
							{ overrideElement: J, shouldRenderDefault: U } = (0, i._)('calloutBadge', c);
						if (!U) return J;
						const H = { ...x.q, ...(o?.templates?.library.import.component.badge || {}), ...c.componentMap },
							C = (0, T.Z)(c, v),
							b = m?.display.badges?.atLocation(d).slice(0, _);
						return a || b?.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...C,
										className: g()('ss__callout-badge', `ss__callout-badge--${d?.replace('/', '-')}`, $, S),
										children: b.map((j, Z) => (0, s.Y)(N, { badge: j, badgeComponentMap: H, treePath: F }, `${j.component}-${Z}`)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(V, h, e) {
				e.d(h, { B: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					p = e.n(g),
					B = e('../../node_modules/deepmerge/dist/cjs.js'),
					I = e.n(B),
					f = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					u = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					N = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/hooks/useLang.tsx'),
					l = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					r = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const o = ({ horizontal: n }) =>
					(0, O.AH)({
						display: 'flex',
						flexDirection: n ? 'row' : 'column',
						alignItems: n ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: n ? 'row' : 'column',
							alignItems: n ? 'center' : void 0,
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
				function t(n) {
					const c = (0, R.u)(),
						d = { treePath: (0, T.LU)() },
						a = (0, L.v6)('list', c, d, n),
						{
							titleText: _,
							onSelect: $,
							native: S,
							multiSelect: F,
							hideOptionLabels: J,
							hideOptionIcons: U,
							hideOptionCheckboxes: H,
							disabled: C,
							hideTitleText: b,
							options: j,
							requireSelection: Z,
							disableStyles: Q,
							className: G,
							internalClassName: w,
							treePath: M,
						} = a,
						{ overrideElement: W, shouldRenderDefault: E } = (0, l._)('list', a);
					if (!E) return W;
					let A = a.selected;
					const z = {
							checkbox: { native: S, ...(0, x.s)({ disableStyles: Q }), theme: a?.theme, treePath: M },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, x.s)({ disableStyles: Q }), theme: a?.theme, treePath: M },
						},
						q = (0, i.Z)(a, o);
					A && !Array.isArray(A) && (A = [A]);
					const [X, ee] = (0, P.J0)(A || []),
						[te] = (0, P.J0)(A || []);
					try {
						if (A) {
							const D = JSON.stringify(te),
								Y = JSON.stringify(A),
								y = JSON.stringify(X);
							D !== Y && Y !== y && ee(A);
						}
					} catch {}
					const oe = (D, Y) => {
							let y;
							F
								? X.find((k) => k.value === Y.value)
									? ((y = [...X]),
									  y.splice(
											y.findIndex((k) => k.value === Y.value),
											1
									  ),
									  y.length == 0 && Z && (y = [Y]))
									: (y = [...X, Y])
								: !Z && X.find((k) => k.value === Y.value)
								? (y = [])
								: (y = [Y]),
								$ && $(D, Y, y),
								ee(y);
						},
						ne = {},
						se = I()(ne, a.lang || {}),
						ae = (0, K.u)(se, { options: j, selectedOptions: X });
					return typeof j == 'object' && j?.length
						? (0, s.Y)(u._, {
								children: (0, s.FD)('div', {
									...q,
									className: p()('ss__list', { 'ss__list--native': S, 'ss__list--disabled': C }, G, w),
									children: [
										(_ || se?.title?.value) && !b && (0, s.Y)('h5', { className: 'ss__list__title', ...ae.title?.all, children: _ }),
										(0, s.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': _,
											children: j.map((D) => {
												const Y = X.some((y) => y.value == D.value);
												return (0, s.FD)('li', {
													className: p()(`ss__list__option ss__list__option--${f.p(D.value?.toString())}`, {
														'ss__list__option--selected': Y,
														'ss__list__option--disabled': D?.disabled,
														'ss__list__option--unavailable': D?.available === !1,
													}),
													ref: (y) => (0, N.iy)(y),
													onClick: (y) => !C && !D?.disabled && oe(y, D),
													title: D.label,
													role: 'option',
													'aria-selected': Y,
													'aria-disabled': D.disabled || D?.available === !1,
													children: [
														!H && (0, s.Y)(v.S, { ...z.checkbox, checked: Y, disableA11y: !0, 'aria-label': D.label }),
														D.icon && !U && (0, s.Y)(r.I, { ...z.icon, ...(typeof D.icon == 'string' ? { icon: D.icon } : D.icon) }),
														!J && (D.label || !D.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: D.label || D.value }),
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
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(V, h, e) {
				e.d(h, { Q: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('../../node_modules/classnames/index.js'),
					g = e.n(O),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					L = e('./components/src/hooks/useComponent.tsx'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const v = ({ section: r, top: o, bottom: t, index: n, tag: c }) =>
						(0, P.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: r == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !o && !t ? 'center' : t && !o ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: c,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - n, 1),
							width: '100%',
							height: '100%',
						}),
					N = ({ controller: r }) => {
						const t = r?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let n = {};
						if (t?.length && t[0]?.length) {
							const c = t.map((d) => `"${d.join(' ')}"`).join(' ');
							n = {
								gridTemplateColumns: `repeat(${t[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${t.length}, minmax(0, 1fr))`,
								gridTemplateAreas: c,
							};
						}
						return (0, P.AH)({
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
					K = ({ badge: r, badgeComponentMap: o, treePath: t }) => {
						const { ComponentOverride: n } = (0, L.x)(o, r.component);
						return n ? (0, s.Y)(n, { ...r, ...r.parameters, treePath: t }) : null;
					},
					l = (0, p.PA)((r) => {
						const o = (0, I.u)(),
							t = (0, f.uk)(),
							c = { limit: 1, treePath: (0, u.LU)() },
							m = (0, R.v6)('overlayBadge', o, c, r),
							{ result: d, children: a, controller: _, renderEmpty: $, limit: S, className: F, internalClassName: J, treePath: U } = m,
							{ overrideElement: H, shouldRenderDefault: C } = (0, i._)('overlayBadge', m);
						if (!C) return H;
						if (!a) return _?.log?.warn('OverlayBadge component must have children'), null;
						const b = _?.store?.meta;
						if (!b) return _?.log?.warn('Controller must have a meta store'), (0, s.Y)(s.FK, { children: a });
						const j = 'overlay',
							Z = { ...x.q, ...(t?.templates?.library.import.component.badge || {}), ...m.componentMap },
							G = b?.badges?.groups?.[j]?.sections
								?.map((M) => {
									const W = b?.data?.badges?.locations[M],
										E = W?.map((A, z) => ({
											tag: A.tag,
											name: A.name,
											top: z == 0,
											bottom: z == W.length - 1,
											badges: d?.display.badges?.atLocation(`${M}/${A.tag}`).slice(0, S),
										})).filter((A) => A.badges?.length);
									return { section: M, slots: E };
								})
								.filter((M) => M.slots?.length),
							w = (0, T.Z)(m, N);
						return $ || G?.length
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										...w,
										className: g()('ss__overlay-badge', F, J),
										children: [
											(0, s.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: G.map((M, W) =>
													M.slots?.map((E) => {
														const A = v({ ...m, tag: E.tag, section: M.section, index: W, top: E.top, bottom: E.bottom });
														return (0, s.Y)(
															'div',
															{
																className: g()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${E.tag}`),
																css: [A],
																children: E.badges.map((z, q) =>
																	(0, s.Y)(K, { badge: z, badgeComponentMap: Z, treePath: U }, `${E.tag}-${z.component}-${q}`)
																),
															},
															`${M.section}-${E.tag}`
														);
													})
												),
											}),
											a,
										],
									}),
							  })
							: (0, s.Y)(s.FK, { children: a });
					});
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(V, h, e) {
				e.d(h, { G: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					p = e.n(g),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					L = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const i = () =>
						(0, O.AH)({
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
					v = (0, P.PA)((N) => {
						const K = (0, I.u)(),
							r = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, f.LU)() },
							o = (0, R.v6)('rating', K, r, N),
							{
								alwaysRender: t,
								count: n,
								text: c,
								disablePartialFill: m,
								emptyIcon: d,
								fullIcon: a,
								disableStyles: _,
								className: $,
								internalClassName: S,
								treePath: F,
							} = o,
							{ overrideElement: J, shouldRenderDefault: U } = (0, L._)('rating', o);
						if (!U) return J;
						const H = {
							fullIcon: { name: 'star--full', ...(0, u.s)({ disableStyles: _ }), theme: o?.theme, treePath: F },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, u.s)({ disableStyles: _ }), theme: o?.theme, treePath: F },
						};
						let C = o.value;
						isNaN(C) && (C = Number(C) || 0), C < 0 && (C = 0), C > 5 && (C = 5);
						const b = (0, T.Z)(o, i),
							j = m ? Math.floor(C) : Math.ceil(C);
						return t || C || n
							? (0, s.Y)(B._, {
									children: (0, s.FD)('div', {
										className: p()('ss__rating', $, S),
										...b,
										children: [
											(0, s.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, s.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, s.Y)(x.I, { ...H.emptyIcon, ...(typeof d == 'string' ? { icon: d } : d) }),
															})
														),
													}),
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(j)].map((Z, Q) => {
															let G = 100;
															return (
																Q + 1 == j && !m && C % 1 != 0 && (G = (C % 1 || 1) * 100),
																(0, s.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${G}%` },
																	children: (0, s.Y)(x.I, { ...H.fullIcon, ...(typeof a == 'string' ? { icon: a } : a) }),
																})
															);
														}),
													}),
												],
											}),
											n ? (0, s.FD)('span', { className: 'ss__rating__count', children: ['(', n, ')'] }) : (0, s.Y)(s.FK, {}),
											c ? (0, s.Y)('span', { className: 'ss__rating__text', children: c }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(V, h, e) {
				e.d(h, { m: () => t });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					p = e.n(g),
					B = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					R = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/components/Molecules/List/List.tsx'),
					L = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					i = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					N = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					l = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const r = () =>
						(0, O.AH)({
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
					o = () =>
						(0, O.AH)({
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
					t = (0, P.PA)((n) => {
						const c = (0, I.u)(),
							m = (0, f.LU)(),
							d = { name: (0, l.P)(n.selection.field), treePath: m },
							a = (0, R.v6)('variantSelection', c, d, n),
							{ selection: _, onSelect: $, disableStyles: S, className: F, internalClassName: J, treePath: U } = a,
							{ overrideElement: H, shouldRenderDefault: C } = (0, K._)('variantSelection', a);
						if (!C) return H;
						let b = a.type;
						b || (_.type == 'swatch' ? (b = 'swatches') : (b = 'dropdown'));
						const j = (M, W) => {
								$ && $(M, W), _.select(W.value);
							},
							Z = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, u.s)({ disableStyles: S }),
									theme: a?.theme,
									treePath: U,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, u.s)({ disableStyles: S }),
									theme: a?.theme,
									treePath: U,
								},
								list: {
									titleText: _.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (M, W) => j(M, W),
									selected: _.selected,
									...(0, u.s)({ disableStyles: S }),
									theme: a?.theme,
									treePath: U,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (M, W) => j(M, W),
									selected: _.selected,
									...(0, u.s)({ disableStyles: S }),
									theme: a?.theme,
									treePath: U,
								},
							},
							Q = (0, T.Z)(a, r),
							G = (0, T.Z)(a, o),
							w = (M) => {
								const { toggleOpen: W } = M;
								return (0, s.Y)('ul', {
									...G,
									className: 'ss__variant-selection__options',
									ref: (E) => (0, N.iy)(E, -1, !0, () => W()),
									children: _.values.map((E) => {
										const A = _.selected?.value == E.value;
										return (0, s.Y)('li', {
											className: p()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': A,
												'ss__variant-selection__option--disabled': E.disabled,
												'ss__variant-selection__option--unavailable': E.available === !1,
											}),
											onClick: (z) => !E.disabled && j(z, E),
											ref: (z) => (0, N.iy)(z),
											'aria-selected': A,
											'aria-disabled': E.disabled || E.available === !1,
											children: E.label,
										});
									}),
								});
							};
						return _.values.length
							? (0, s.Y)(B._, {
									children: (0, s.Y)('div', {
										...Q,
										className: p()('ss__variant-selection', `ss__variant-selection--${b}`, `ss__variant-selection--${_.field}`, F, J),
										children: (() => {
											switch (b) {
												case 'dropdown':
													return (0, s.Y)(s.FK, {
														children: (() => {
															const M = (W) => {
																const { open: E } = W;
																return (0, s.FD)(s.FK, {
																	children: [
																		(0, s.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, s.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: _.label }),
																				_.selected
																					? (0, s.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', _.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, s.Y)(v.I, { icon: E ? 'angle-up' : 'angle-down', ...Z.icon, treePath: W.treePath }),
																	],
																});
															};
															return (0, s.Y)(i.m, { button: (0, s.Y)(M, { treePath: U }), ...Z.dropdown, content: (0, s.Y)(w, {}) });
														})(),
													});
												case 'list':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(x.B, { ...Z.list, options: _.values }) });
												case 'swatches':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(L.l, { ...Z.swatches, options: _.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(V, h, e) {
				e.d(h, { q: () => p });
				var s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					P = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					O = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					g = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const p = { BadgeText: () => s.p, BadgePill: () => P.L, BadgeRectangle: () => O.Z, BadgeImage: () => g.z };
			},
		},
	]);
})();
