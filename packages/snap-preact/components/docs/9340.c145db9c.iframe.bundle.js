'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9340],
		{
			'./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'(Mt, tt, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = t('../../node_modules/classnames/index.js'),
					et = t.n(v),
					P = t('../../node_modules/mobx-react-lite/es/index.js'),
					B = t('../../node_modules/mobx/dist/mobx.esm.js'),
					Y = t('./components/src/providers/cache.tsx'),
					N = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = t('./components/src/providers/treePath.tsx'),
					Z = t('./components/src/utilities/mergeProps.ts'),
					z = t('./components/src/utilities/mergeStyles.ts'),
					H = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					A = t('./components/src/components/Atoms/Price/Price.tsx');
				const G = ['price', 'msrp'],
					X = (l) => {
						if (!l) return !1;
						const u = l.split('.'),
							Q = u[u.length - 1];
						return G.includes(Q) ? (u.length === 1 ? !0 : u[u.length - 2] === 'core' && u[u.length - 3] === 'mappings') : !1;
					},
					q = (l, u) => {
						if (!l || !u) return;
						const Q = (M) => u.split('.').reduce((i, $) => (i && typeof i == 'object' ? i[$] : void 0), M),
							T = Q(l?.display) ?? Q(l);
						if (T !== void 0) return T;
						if (!u.includes('.')) {
							const M = l?.display?.mappings?.core || l?.mappings?.core,
								i = l?.display?.attributes || l?.attributes;
							return M?.[u] ?? i?.[u];
						}
					},
					F = (l) =>
						l == null
							? ''
							: Array.isArray(l) || (0, B.Fq)(l)
							? Array.from(l)
									.map((u) => (typeof u == 'object' ? JSON.stringify(u) : String(u)))
									.join(', ')
							: typeof l == 'object'
							? JSON.stringify(l)
							: String(l),
					dt = () => (0, y.AH)({}),
					f = (0, P.PA)((l) => {
						const u = (0, N.u)(),
							T = { treePath: (0, S.LU)(), name: l.field ? (0, L.P)(l.field.split('.').pop() || '') : void 0 },
							M = (0, Z.v6)('productDetail', u, T, l),
							{ result: i, field: $, name: x, html: V, tag: g, className: ot, internalClassName: nt } = M,
							{ overrideElement: it, shouldRenderDefault: b } = (0, H._)('productDetail', M);
						if (!b) return it;
						const st = (0, z.Z)(M, dt),
							h = q(i, $),
							W = F(h);
						if (!W) return null;
						const m = X($) && typeof h == 'number',
							a = x || $.split('.').pop(),
							C = et()('ss__product-detail', a && `ss__product-detail--${a}`, g && `ss__product-detail--${g}`, ot, nt);
						return (0, e.Y)(Y._, {
							children: V
								? (0, e.Y)('div', { ...st, className: C, dangerouslySetInnerHTML: { __html: W } })
								: (0, e.Y)('div', { ...st, className: C, children: m ? (0, e.Y)(A.g, { value: h, treePath: M.treePath }) : W }),
						});
					});
				t.d(tt, ['$I', 0, q, 'J_', 0, f, 'ZI', 0, F]);
			},
			'./components/src/components/Molecules/Gallery/Gallery.tsx'(Mt, tt, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/compat/dist/compat.module.js'),
					v = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					et = t('../../node_modules/mobx-react-lite/es/index.js'),
					P = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = t('../../node_modules/classnames/index.js'),
					Y = t.n(B),
					N = t('../../node_modules/deepmerge/dist/cjs.js'),
					S = t.n(N),
					Z = t('./components/src/providers/cache.tsx'),
					z = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = t('./components/src/providers/treePath.tsx'),
					L = t('./components/src/utilities/defined.ts'),
					A = t('./components/src/utilities/mergeProps.ts'),
					G = t('./components/src/utilities/mergeStyles.ts'),
					X = t('./components/src/hooks/useA11y.tsx'),
					q = t('./components/src/hooks/useLang.tsx'),
					F = t('./components/src/components/Atoms/Button/Button.tsx'),
					dt = t('./components/src/components/Atoms/Image/Image.tsx');
				const f = () =>
						(0, P.AH)({
							position: 'fixed',
							inset: 0,
							zIndex: 10010,
							display: 'flex',
							flexDirection: 'column',
							background: 'rgba(0, 0, 0, 0.9)',
							'& .ss__gallery__toolbar': { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', padding: '12px 16px' },
							'& .ss__gallery__button': {
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 0,
								boxSizing: 'border-box',
								borderRadius: '4px',
								width: '40px',
								height: '40px',
								fontSize: '1.3em',
								lineHeight: 1,
								cursor: 'pointer',
								'&.ss__button--disabled': { opacity: 0.4, cursor: 'default' },
							},
							'& .ss__gallery__counter': { color: '#fff', marginRight: 'auto', padding: '0 8px', fontSize: '0.9em' },
							'& .ss__gallery__stage': {
								position: 'relative',
								flex: '1 1 auto',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								overflow: 'hidden',
							},
							'& .ss__gallery__image': {
								maxWidth: '90vw',
								maxHeight: '80vh',
								objectFit: 'contain',
								userSelect: 'none',
								touchAction: 'none',
								transformOrigin: 'center center',
								transition: 'transform 0.05s linear',
							},
							'& .ss__gallery__nav': {
								position: 'absolute',
								top: 0,
								bottom: 0,
								height: '100%',
								width: '64px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 0,
								boxSizing: 'border-box',
								borderRadius: 0,
								fontSize: '2em',
								lineHeight: 1,
								cursor: 'pointer',
								zIndex: 1,
								'&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.085))' },
							},
							'& .ss__gallery__nav--prev': { left: 0 },
							'& .ss__gallery__nav--next': { right: 0 },
						}),
					l = (0, et.PA)((u) => {
						const Q = (0, z.u)(),
							M = { treePath: (0, H.LU)(), startIndex: 0, zoomMin: 1, zoomMax: 4, zoomStep: 0.5, swipeThreshold: 40 },
							i = (0, A.v6)('gallery', Q, M, u),
							{ images: $, open: x, startIndex: V, onClose: g, alt: ot, className: nt, internalClassName: it } = i,
							b = i.zoomMin,
							st = i.zoomMax,
							h = i.zoomStep,
							W = i.swipeThreshold,
							m = (n) => Math.min(st, Math.max(b, n)),
							[a, C] = (0, v.J0)(V || 0),
							[D, J] = (0, v.J0)(b),
							[O, ut] = (0, v.J0)({ x: 0, y: 0 }),
							k = (0, v.li)(null),
							at = (0, v.li)(null),
							U = $?.length || 0,
							Dt = {
								gallery: { attributes: { 'aria-label': 'Image gallery' } },
								zoomOutButton: { attributes: { 'aria-label': 'Zoom out' } },
								zoomInButton: { attributes: { 'aria-label': 'Zoom in' } },
								closeButton: { attributes: { 'aria-label': 'Close gallery' } },
								prevButton: { attributes: { 'aria-label': 'Previous image' } },
								nextButton: { attributes: { 'aria-label': 'Next image' } },
							},
							_ = S()(Dt, i.lang || {}),
							p = (0, q.u)(_, {});
						(0, v.vJ)(() => {
							x && (C(Math.min(Math.max(V || 0, 0), Math.max(U - 1, 0))), J(b), ut({ x: 0, y: 0 }));
						}, [x, V, U]);
						const pt = (n) => {
								if (U === 0) return;
								const R = (n + U) % U;
								C(R), J(b), ut({ x: 0, y: 0 });
							},
							ht = () => pt(a - 1),
							I = () => pt(a + 1),
							K = () => J((n) => m(n + h)),
							gt = () =>
								J((n) => {
									const R = m(n - h);
									return R === b && ut({ x: 0, y: 0 }), R;
								});
						(0, v.vJ)(() => {
							if (!x) return;
							const n = (R) => {
								switch (R.key) {
									case 'Escape':
										g && g();
										break;
									case 'ArrowRight':
										I();
										break;
									case 'ArrowLeft':
										ht();
										break;
									case '+':
									case '=':
										K();
										break;
									case '-':
									case '_':
										gt();
										break;
								}
							};
							return window.addEventListener('keydown', n), () => window.removeEventListener('keydown', n);
						}, [x, a, U]);
						const rt = (0, v.li)(null),
							lt = (0, v.li)(null),
							ct = (0, v.li)(!1);
						(0, v.vJ)(() => {
							const n = !!(x && U > 0);
							n && !ct.current
								? ((lt.current = document.activeElement || null), (rt.current?.querySelector('.ss__gallery__close') || rt.current)?.focus())
								: !n && ct.current && (lt.current?.focus?.(), (lt.current = null)),
								(ct.current = n);
						});
						const _t = (0, G.Z)(i, f);
						if (!x || U === 0) return null;
						const mt = (n) => {
								D <= b ||
									(n.preventDefault(),
									n.currentTarget?.setPointerCapture?.(n.pointerId),
									(k.current = { startX: n.clientX, startY: n.clientY, baseX: O.x, baseY: O.y }));
							},
							j = (n) => {
								k.current && ut({ x: k.current.baseX + (n.clientX - k.current.startX), y: k.current.baseY + (n.clientY - k.current.startY) });
							},
							E = () => {
								k.current = null;
							},
							vt = (n) => {
								n.target === n.currentTarget && g && g();
							},
							Pt = (n) => {
								n.touches && n.touches.length === 1 && (at.current = { x: n.touches[0].clientX, y: n.touches[0].clientY });
							},
							Ot = (n) => {
								const R = at.current;
								if (((at.current = null), !R || D > b || U <= 1)) return;
								const Et = n.changedTouches && n.changedTouches[0];
								if (!Et) return;
								const yt = Et.clientX - R.x,
									Rt = Et.clientY - R.y;
								Math.abs(yt) > W && Math.abs(yt) > Math.abs(Rt) && (yt < 0 ? I() : ht());
							},
							d = $[a];
						return (0, y.createPortal)(
							(0, e.Y)(Z._, {
								children: (0, e.FD)('div', {
									..._t,
									className: Y()('ss__gallery', nt, it),
									role: 'dialog',
									'aria-modal': 'true',
									...p.gallery?.attributes,
									ref: (n) => {
										(rt.current = n), (0, X.iy)(n, 0, !0, () => g && g());
									},
									onClick: vt,
									children: [
										(0, e.FD)('div', {
											className: 'ss__gallery__toolbar',
											children: [
												U > 1 && (0, e.FD)('span', { className: 'ss__gallery__counter', children: [a + 1, ' / ', U] }),
												(0, e.Y)(F.$, {
													name: 'zoom-out',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-out',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'minus', color: 'currentColor' },
													lang: { button: _.zoomOutButton },
													disabled: D <= b,
													onClick: gt,
													theme: i.theme,
													treePath: i.treePath,
													...(0, L.s)({ disableStyles: i.disableStyles }),
												}),
												(0, e.Y)(F.$, {
													name: 'zoom-in',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-in',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'plus', color: 'currentColor' },
													lang: { button: _.zoomInButton },
													disabled: D >= st,
													onClick: K,
													theme: i.theme,
													treePath: i.treePath,
													...(0, L.s)({ disableStyles: i.disableStyles }),
												}),
												(0, e.Y)(F.$, {
													name: 'close',
													internalClassName: 'ss__gallery__button ss__gallery__close',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'close', color: 'currentColor' },
													lang: { button: _.closeButton },
													onClick: () => g && g(),
													theme: i.theme,
													treePath: i.treePath,
													...(0, L.s)({ disableStyles: i.disableStyles }),
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__gallery__stage',
											onClick: vt,
											onTouchStart: Pt,
											onTouchEnd: Ot,
											children: [
												U > 1 &&
													(0, e.Y)(F.$, {
														name: 'prev',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--prev',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-left', color: 'currentColor' },
														lang: { button: _.prevButton },
														onClick: ht,
														theme: i.theme,
														treePath: i.treePath,
														...(0, L.s)({ disableStyles: i.disableStyles }),
													}),
												(0, e.Y)(dt._, {
													internalClassName: 'ss__gallery__image',
													src: d,
													alt: ot || '',
													draggable: !1,
													style: {
														transform: `translate(${O.x}px, ${O.y}px) scale(${D})`,
														cursor: D > b ? (k.current ? 'grabbing' : 'grab') : 'default',
													},
													onPointerDown: mt,
													onPointerMove: j,
													onPointerUp: E,
													onPointerLeave: E,
													theme: i.theme,
													treePath: i.treePath,
													...(0, L.s)({ disableStyles: i.disableStyles }),
												}),
												U > 1 &&
													(0, e.Y)(F.$, {
														name: 'next',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--next',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-right', color: 'currentColor' },
														lang: { button: _.nextButton },
														onClick: I,
														theme: i.theme,
														treePath: i.treePath,
														...(0, L.s)({ disableStyles: i.disableStyles }),
													}),
											],
										}),
									],
								}),
							}),
							document.body
						);
					});
				t.d(tt, ['Z', 0, l]);
			},
			'./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'(Mt, tt, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = t('../../node_modules/classnames/index.js'),
					et = t.n(v),
					P = t('../../node_modules/mobx-react-lite/es/index.js'),
					B = t('../../node_modules/mobx/dist/mobx.esm.js'),
					Y = t('./components/src/providers/cache.tsx'),
					N = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					S = t('./components/src/providers/treePath.tsx'),
					Z = t('./components/src/utilities/defined.ts'),
					z = t('./components/src/utilities/mergeProps.ts'),
					H = t('./components/src/utilities/mergeStyles.ts'),
					L = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = t('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					G = t('./components/src/components/Atoms/Price/Price.tsx'),
					X = t('./components/src/components/Atoms/Image/Image.tsx'),
					q = t('./components/src/components/Molecules/Rating/Rating.tsx');
				const F = () =>
						(0, y.AH)({
							width: '100%',
							borderCollapse: 'collapse',
							fontSize: '0.9em',
							'& tr': { borderBottom: '1px solid #eee' },
							'& tr:last-of-type': { borderBottom: 'none' },
							'& th, & td': { padding: '10px 0', textAlign: 'left', verticalAlign: 'top' },
							'& th': {
								width: '40%',
								paddingRight: '16px',
								fontWeight: 500,
								color: '#666',
								textTransform: 'uppercase',
								fontSize: '0.85em',
								letterSpacing: '0.02em',
							},
							'& td': {
								color: '#1a1a1a',
								'& .ss__rating': { justifyContent: 'flex-start' },
								'& .ss__image': { alignItems: 'flex-start', '& img': { maxHeight: '100px' } },
							},
						}),
					dt = (0, P.PA)((f) => {
						const l = (0, N.u)(),
							Q = { treePath: (0, S.LU)() },
							T = (0, z.v6)('productDetailTable', l, Q, f),
							{ result: M, displayFields: i, disableStyles: $, className: x, internalClassName: V, treePath: g } = T,
							{ overrideElement: ot, shouldRenderDefault: nt } = (0, L._)('productDetailTable', T);
						if (!nt) return ot;
						const it = (0, H.Z)(T, F),
							b = (i || []).filter((h) => (0, A.ZI)((0, A.$I)(M, h.field)) !== '');
						if (b.length === 0) return null;
						const st = (h) => {
							const W = (0, A.$I)(M, h.field),
								m = { theme: T.theme, treePath: g, ...(0, Z.s)({ disableStyles: $ }) };
							switch (h.type) {
								case 'price': {
									const a = Number(W);
									if (!isNaN(a)) return (0, e.Y)(G.g, { value: a, ...m });
									break;
								}
								case 'rating': {
									const a = Number(W);
									if (!isNaN(a)) return (0, e.Y)(q.G, { value: a, ...m });
									break;
								}
								case 'image': {
									const a = Array.isArray(W) || (0, B.Fq)(W) ? Array.from(W)[0] : W;
									if (typeof a == 'string' && a) return (0, e.Y)(X._, { src: a, alt: h.label || h.field, ...m });
									break;
								}
								case 'html':
									return (0, e.Y)(A.J_, { result: M, field: h.field, html: !0, ...m });
							}
							return (0, e.Y)(A.J_, { result: M, field: h.field, ...m });
						};
						return (0, e.Y)(Y._, {
							children: (0, e.Y)('table', {
								...it,
								className: et()('ss__product-detail-table', x, V),
								children: (0, e.Y)('tbody', {
									children: b.map((h, W) =>
										(0, e.FD)(
											'tr',
											{ children: [(0, e.Y)('th', { scope: 'row', children: h.label ?? h.field }), (0, e.Y)('td', { children: st(h) })] },
											`${h.field}-${W}`
										)
									),
								}),
							}),
						});
					});
				t.d(tt, ['X', 0, dt]);
			},
			'./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx'(Mt, tt, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					et = t('../../node_modules/classnames/index.js'),
					P = t.n(et),
					B = t('../../node_modules/mobx-react-lite/es/index.js'),
					Y = t('../../node_modules/deepmerge/dist/cjs.js'),
					N = t.n(Y),
					S = t('./components/src/utilities/defined.ts'),
					Z = t('./components/src/utilities/mergeProps.ts'),
					z = t('./components/src/utilities/mergeStyles.ts'),
					H = t('./components/src/providers/cache.tsx'),
					L = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = t('./components/src/providers/treePath.tsx'),
					G = t('./components/src/hooks/useLang.tsx'),
					X = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					q = t('./components/src/components/Atoms/Button/Button.tsx');
				const F = () =>
						(0, v.AH)({
							display: 'inline-flex',
							alignItems: 'center',
							gap: '5px',
							'&.ss__quantity-picker--disabled': { opacity: 0.7 },
							'& .ss__quantity-picker__label-wrapper': { display: 'inline-flex', alignItems: 'center' },
							'& .ss__quantity-picker__controls-wrapper': { display: 'inline-flex', alignItems: 'center', gap: '5px' },
							'& .ss__quantity-picker__input': { width: '60px', textAlign: 'center', padding: '5px', boxSizing: 'border-box' },
						}),
					dt = (0, B.PA)((f) => {
						const l = (0, L.u)(),
							Q = { min: 1, step: 1, treePath: (0, A.LU)() },
							T = (0, Z.v6)('quantityPicker', l, Q, f),
							{
								value: M,
								startValue: i,
								min: $,
								max: x,
								step: V,
								disabled: g,
								hideButtons: ot,
								label: nt,
								onChange: it,
								disableStyles: b,
								className: st,
								internalClassName: h,
								theme: W,
								treePath: m,
								lang: a,
								style: C,
								styleScript: D,
								themeStyleScript: J,
								name: O,
								...ut
							} = T,
							k = Math.max(0, Math.trunc($)),
							at = (j) => {
								let E = Math.trunc(j);
								return isNaN(E) && (E = k), (E = Math.max(k, E)), typeof x == 'number' && (E = Math.min(Math.trunc(x), E)), E;
							},
							[U, Dt] = (0, y.J0)(at(i ?? k)),
							_ = M === void 0,
							p = _ ? U : at(M),
							[pt, ht] = (0, y.J0)(void 0),
							{ overrideElement: I, shouldRenderDefault: K } = (0, X._)('quantityPicker', T);
						if (!K) return I;
						const gt = (j, E) => {
								if (g) return;
								const vt = at(E);
								_ && Dt(vt), vt !== p && it && it(j, vt);
							},
							rt = (0, z.Z)(T, F),
							lt = {
								quantityInput: { attributes: { 'aria-label': 'quantity' } },
								decrementButton: { attributes: { 'aria-label': 'decrease quantity' } },
								incrementButton: { attributes: { 'aria-label': 'increase quantity' } },
							},
							ct = N()(lt, a || {}),
							_t = (0, G.u)(ct, { quantity: p, min: k, max: x, disabled: g }, { activeBreakpoint: l?.activeBreakpoint }),
							mt = { button: { internalClassName: 'ss__quantity-picker__button', ...(0, S.s)({ disableStyles: b }), theme: T.theme, treePath: m } };
						return (0, e.Y)(H._, {
							children: (0, e.FD)('div', {
								...rt,
								className: P()('ss__quantity-picker', { 'ss__quantity-picker--disabled': g }, st, h),
								...ut,
								children: [
									nt &&
										(0, e.Y)('div', {
											className: 'ss__quantity-picker__label-wrapper',
											children: (0, e.Y)('span', { className: 'ss__quantity-picker__label', children: nt }),
										}),
									(0, e.FD)('div', {
										className: 'ss__quantity-picker__controls-wrapper',
										children: [
											!ot &&
												(0, e.Y)(q.$, {
													...mt.button,
													name: 'decrement',
													internalClassName: P()(mt.button.internalClassName, 'ss__quantity-picker__button--decrement'),
													disabled: g || p <= k,
													onClick: (j) => gt(j, p - V),
													icon: 'minus-thin',
													..._t.decrementButton?.attributes,
												}),
											(0, e.Y)('input', {
												className: 'ss__quantity-picker__input',
												type: 'number',
												inputMode: 'numeric',
												min: k,
												max: x,
												step: V,
												value: pt ?? p,
												disabled: g,
												onInput: (j) => ht(j.target.value),
												onBlur: (j) => {
													if (pt !== void 0) {
														const E = parseFloat(pt);
														gt(j, isNaN(E) ? p : E), ht(void 0);
													}
												},
												..._t.quantityInput?.all,
											}),
											!ot &&
												(0, e.Y)(q.$, {
													...mt.button,
													name: 'increment',
													internalClassName: P()(mt.button.internalClassName, 'ss__quantity-picker__button--increment'),
													disabled: g || (typeof x == 'number' && p >= x),
													onClick: (j) => gt(j, p + V),
													icon: 'plus-thin',
													..._t.incrementButton?.attributes,
												}),
										],
									}),
								],
							}),
						});
					});
				t.d(tt, ['w', 0, dt]);
			},
			'./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx'(Mt, tt, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = t('../../node_modules/mobx-react-lite/es/index.js'),
					et = t('../../node_modules/mobx/dist/mobx.esm.js'),
					P = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = t('../../node_modules/classnames/index.js'),
					Y = t.n(B),
					N = t('../../node_modules/deepmerge/dist/cjs.js'),
					S = t.n(N),
					Z = t('./components/src/providers/cache.tsx'),
					z = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					H = t('./components/src/providers/snap.tsx'),
					L = t('./components/src/providers/treePath.tsx'),
					A = t('./components/src/hooks/useA11y.tsx'),
					G = t('./components/src/hooks/useLang.tsx'),
					X = t('./components/src/hooks/useCreateController.tsx'),
					q = t('./components/src/hooks/useComponent.tsx'),
					F = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					dt = t('./components/src/hooks/useTracking.tsx'),
					f = t('./components/src/utilities/defined.ts'),
					l = t('./components/src/utilities/mergeProps.ts'),
					u = t('./components/src/utilities/mergeStyles.ts'),
					Q = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					T = t('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'),
					M = t('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					i = t('./components/src/components/Atoms/Button/Button.tsx'),
					$ = t('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					x = t('./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'),
					V = t('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					g = t('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					ot = t('./components/src/components/Molecules/Gallery/Gallery.tsx'),
					nt = t('./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx');
				const it = ({ column1: m, column2: a, column3: C, column4: D }) =>
						(0, P.AH)({
							'& .ss__quickview__content': {
								padding: '48px 20px 20px 20px',
								minWidth: '320px',
								maxWidth: '600px',
								position: 'relative',
								boxSizing: 'border-box',
							},
							'& .ss__quickview__row': {
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								alignItems: 'flex-start',
								gap: '24px',
								'& > *': { minWidth: 0, maxWidth: '100%' },
							},
							'& .ss__quickview__column': { display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, flex: '1 1 100%', maxWidth: '100%' },
							'& .ss__quickview__column.ss__quickview__column--c1': { alignContent: m?.alignContent },
							'& .ss__quickview__column.ss__quickview__column--c2': { alignContent: a?.alignContent },
							'& .ss__quickview__column.ss__quickview__column--c3': { alignContent: C?.alignContent },
							'& .ss__quickview__column.ss__quickview__column--c4': { alignContent: D?.alignContent },
							'& .ss__quickview__column:empty, & .ss__quickview__row:empty': { display: 'none' },
							'& .ss__quickview__separator': { flexGrow: 1, flexShrink: 1 },
							'& .ss__quickview__slideshow': { marginBottom: 0 },
							'& .ss__quickview__title': { fontSize: '1.4em', paddingRight: '32px' },
							'& .ss__quickview__variant': { marginBottom: '12px', '& .ss__slideshow__track--centered': { justifyContent: 'flex-start' } },
							'& .ss__quickview__variant-title': { marginBottom: '6px', fontWeight: 600 },
							'& .ss__quickview__image': {
								display: 'block',
								maxWidth: '100%',
								marginBottom: '12px',
								cursor: 'zoom-in',
								'& img': { display: 'block', maxWidth: '100%' },
							},
							'& .ss__quickview__carousel': {
								'& .ss__slideshow__slide img': { objectFit: 'contain', height: 'auto' },
								'& .ss__slideshow__slide--clickable': { cursor: 'zoom-in' },
								'& .ss__slideshow__navigation .ss__button': { boxSizing: 'content-box', width: 'auto' },
							},
							'& .ss__quickview__variants': { display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' },
							'& .ss__quickview__description': { lineHeight: 1.4 },
							'& .ss__quickview__close': {
								position: 'absolute',
								top: '12px',
								right: '12px',
								background: 'transparent',
								border: 'none',
								fontSize: '1.4em',
								cursor: 'pointer',
								lineHeight: 1,
								zIndex: 1,
							},
							'& .ss__quickview__loading': { padding: '40px', textAlign: 'center', minWidth: '200px' },
							'& .ss__quickview__error': { padding: '40px', textAlign: 'center', minWidth: '200px', color: '#b00020' },
							'@media (min-width: 768px)': {
								'& .ss__quickview__content': { maxWidth: '880px' },
								'& .ss__quickview__column.ss__quickview__column--c1': {
									flex: m?.width == 'auto' ? '1 1 0' : `1 1 ${m?.width}`,
									maxWidth: m?.width == 'auto' ? 'none' : m?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c2': {
									flex: a?.width == 'auto' ? '1 1 0' : `1 1 ${a?.width}`,
									maxWidth: a?.width == 'auto' ? 'none' : a?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c3': {
									flex: C?.width == 'auto' ? '1 1 0' : `1 1 ${C?.width}`,
									maxWidth: C?.width == 'auto' ? 'none' : C?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c4': {
									flex: D?.width == 'auto' ? '1 1 0' : `1 1 ${D?.width}`,
									maxWidth: D?.width == 'auto' ? 'none' : D?.width,
								},
							},
						}),
					b = (m) => (Array.isArray(m) || (0, et.Fq)(m) ? Array.from(m).filter((a) => typeof a == 'string' && a.length > 0) : []),
					st = (m, a) => {
						const C = new Set(),
							D = new Set(),
							J = (O) => {
								typeof O == 'string'
									? O.startsWith('recommendation.')
										? C.add(O.slice(15))
										: O in a && !D.has(O) && (D.add(O), J(a[O]))
									: Array.isArray(O) && O.forEach(J);
							};
						return J(m), Array.from(C).sort();
					},
					h = ({ quickviewManager: m, product: a, children: C }) => {
						const { trackingRef: D } = (0, dt.z)({ controller: m, result: a, track: { click: !1, options: { threshold: 0 } } });
						return (0, e.Y)('div', { className: 'ss__quickview__tracker', ref: D, children: C });
					},
					W = (0, v.PA)((m) => {
						const a = (0, z.u)(),
							C = (0, H.uk)(),
							D = (0, L.LU)(),
							[J, O] = (0, y.J0)(!1),
							[ut, k] = (0, y.J0)(0),
							at = (0, y.li)(!1);
						at.current = J;
						const U = (s) => {
								k(s), O(!0);
							},
							Dt = { treePath: D, hideBadge: !1 },
							_ = (0, l.v6)('quickviewLayout', a, Dt, m),
							{
								quickviewManager: p,
								className: pt,
								internalClassName: ht,
								disableStyles: I,
								treePath: K,
								hideBadge: gt,
								column1: rt,
								column2: lt,
								column3: ct,
								column4: _t,
								recommendation: mt,
							} = _,
							{ overrideElement: j, shouldRenderDefault: E } = (0, F._)('quickview', _),
							vt = {
								quickview: { attributes: { 'aria-label': 'Quickview' } },
								closeButton: { attributes: { 'aria-label': 'Close quickview' } },
								addToCartButton: { value: 'Add to Cart' },
								moreInfoButton: { value: 'More info' },
								loadingText: { value: 'Loading\u2026' },
							},
							Pt = S()(vt, _.lang || {}),
							Ot = (0, G.u)(Pt, { quickviewManager: p }),
							d = p?.store?.product,
							n = d?.display?.mappings?.core || d?.mappings?.core,
							R = n?.imageUrl || n?.thumbnailImageUrl,
							Et = p?.store?.resolvedConfig?.imagesField,
							yt = Et ? (Array.isArray(Et) ? Et : [Et]) : ['images', 'ss_images'],
							Rt = n,
							Gt = d?.display?.attributes || d?.attributes || {},
							xt = d?.variants?.active,
							Xt = xt?.mappings?.core,
							qt = xt?.attributes || {},
							jt = (s, o) => {
								for (const c of yt) {
									const r = b(s?.[c] ?? o?.[c]);
									if (r.length > 1) return r;
								}
								return [];
							},
							Yt = xt ? jt(Xt, qt) : [],
							te = jt(Rt, Gt),
							Bt = xt ? (Yt.length > 1 ? Yt : []) : te,
							Lt = Bt.length > 1;
						let zt = 0;
						if (xt && Lt && R) {
							const s = Bt.indexOf(R);
							s >= 0 && (zt = s);
						}
						(0, y.vJ)(() => {
							const s = !!p?.store?.isOpen;
							if (!E || !s) return;
							const o = (c) => {
								c.key === 'Escape' && !J && p.close();
							};
							return window.addEventListener('keydown', o), () => window.removeEventListener('keydown', o);
						}, [E, p?.store?.isOpen, J]);
						const At = (0, y.li)(st(_.layout, { c1: rt?.layout, c2: lt?.layout, c3: ct?.layout, c4: _t?.layout })).current,
							Tt = new Map(),
							bt = C,
							Wt = (0, y.li)(!!bt?.templates).current,
							Ft = At.length > 0,
							ee = Wt && Ft ? mt?.component || 'Recommendation' : void 0,
							se = Wt && Ft ? mt?.resultComponent || 'Result' : void 0,
							oe = (0, q.x)(bt?.templates?.library.import.component.result || {}, se).ComponentOverride,
							ne = (0, q.x)(bt?.templates?.library.import.component.recommendation.default || {}, ee).ComponentOverride;
						for (const s of At) {
							const o = Object.assign({ id: '', tag: s, branch: 'production' }, mt?.config);
							(o.tag = s), (o.id = o.id || `quickview-${s}`);
							const c = Wt ? (0, X.i)(bt, 'recommendation', o) : void 0;
							Tt.set(s, { Component: ne, ResultComponent: oe, recsController: c });
						}
						const Ct = n?.parentId || d?.id,
							ie = At.map((s) => (Tt.get(s)?.recsController ? s : '')).join(','),
							$t = (0, y.li)(new Map());
						if (
							((0, y.vJ)(() => {
								!E ||
									!Ct ||
									Tt.forEach(({ recsController: s }) => {
										s &&
											$t.current.get(s.config.id) !== Ct &&
											($t.current.set(s.config.id, Ct), (s.config.globals = { ...s.config.globals, products: [Ct] }), s.search());
									});
							}, [E, Ct, At.join(','), ie]),
							!E)
						)
							return j;
						const ae = (0, u.Z)(_, it);
						if (!p)
							return (
								console.warn('[QuickviewLayout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const kt = p.store,
							Jt = !!kt.loading,
							Ut = kt.resolvedConfig?.displayFields,
							re = typeof Ut == 'function' ? (d ? Ut(d) : void 0) : Ut,
							Kt = kt.error,
							le = p.sourceController?.store.meta?.data?.facets,
							ce = (s) => le?.[s]?.label || s,
							Qt = () => {
								p.close(), _.onClose && _.onClose();
							},
							_e = () => {
								at.current ? O(!1) : Qt();
							},
							me = {
								className: 'ss__quickview__content',
								role: 'dialog',
								'aria-modal': 'true',
								ref: (s) => (0, A.iy)(s, 0, !0, _e),
								...Ot.quickview?.attributes,
							},
							Vt = n?.name,
							Zt = n?.url,
							It = d?.variants?.selections,
							de = Lt ? Bt : R ? [R] : [],
							wt = Lt ? Bt : R ? [R] : [],
							Ht = wt.length === 1,
							Nt =
								wt.length > 0
									? (0, e.Y)(M.b, {
											className: 'ss__quickview__carousel',
											startIndex: zt,
											slidesToShow: 1,
											slidesToMove: 1,
											showNavigation: !Ht,
											overlayNavigation: !0,
											showPagination: !Ht,
											loop: !1,
											slides: wt.map((s, o) => ({ src: s, alt: Vt || '', onClick: () => U(o) })),
											theme: _.theme,
											treePath: K,
											...(0, f.s)({ disableStyles: I }),
									  })
									: null,
							ft = (s) => {
								if (typeof s != 'string') {
									const o = s.map((r) => ft(r));
									return s.some((r, w) => r !== '_' && o[w]) ? (0, e.Y)('div', { className: 'ss__quickview__row', children: o }) : null;
								}
								if (s == 'c1' && rt?.layout?.length) {
									const o = rt.layout.map((r) => ft(r));
									return rt.layout.some((r, w) => (Array.isArray(r) || r !== '_') && !!o[w])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c1', children: o })
										: null;
								}
								if (s == 'c2' && lt?.layout?.length) {
									const o = lt.layout.map((r) => ft(r));
									return lt.layout.some((r, w) => (Array.isArray(r) || r !== '_') && !!o[w])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c2', children: o })
										: null;
								}
								if (s == 'c3' && ct?.layout?.length) {
									const o = ct.layout.map((r) => ft(r));
									return ct.layout.some((r, w) => (Array.isArray(r) || r !== '_') && !!o[w])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c3', children: o })
										: null;
								}
								if (s == 'c4' && _t?.layout?.length) {
									const o = _t.layout.map((r) => ft(r));
									return _t.layout.some((r, w) => (Array.isArray(r) || r !== '_') && !!o[w])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c4', children: o })
										: null;
								}
								if (s == 'slideshow')
									return !Nt || !d
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__slideshow',
												children: gt
													? Nt
													: (0, e.Y)(V.Q, {
															result: d,
															controller: p.sourceController,
															theme: _.theme,
															treePath: K,
															...(0, f.s)({ disableStyles: I }),
															children: Nt,
													  }),
										  });
								if (s == 'calloutBadge' || s.startsWith('calloutBadge.')) {
									if (!d) return null;
									const o = s.startsWith('calloutBadge.') ? s.slice(13) : void 0;
									return (0, e.Y)(g.W, { result: d, theme: _.theme, treePath: K, ...(0, f.s)({ disableStyles: I, tag: o }) });
								}
								if (s.startsWith('productDetail.')) {
									const o = s.slice(14),
										c = o.split('.').pop() || '';
									if (!o || !d) return null;
									const r = c === 'name' ? 'ss__quickview__title' : c === 'description' ? 'ss__quickview__description' : `ss__quickview__${c}`;
									return (0, e.Y)($.J_, {
										result: d,
										field: o,
										html: c === 'description',
										className: r,
										theme: _.theme,
										treePath: K,
										...(0, f.s)({ disableStyles: I }),
									});
								}
								if (s == 'variantSelections')
									return !It || It.length === 0
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__variants',
												children: It.map((o) =>
													(0, e.FD)(
														'div',
														{
															className: 'ss__quickview__variant',
															children: [
																(0, e.Y)('div', { className: 'ss__quickview__variant-title', children: o.label || o.field }),
																(0, e.Y)(T.m, { selection: o, type: o.type, theme: _.theme, treePath: K, ...(0, f.s)({ disableStyles: I }) }),
															],
														},
														o.field
													)
												),
										  });
								if (s.startsWith('variantSelection.')) {
									const o = s.slice(17),
										c = It?.find((r) => r.field === o || (0, Q.P)(r.field) === o);
									return !o || !c
										? null
										: (0, e.FD)('div', {
												className: 'ss__quickview__variant',
												children: [
													(0, e.Y)('div', { className: 'ss__quickview__variant-title', children: c.label || c.field }),
													(0, e.Y)(T.m, { selection: c, type: c.type, theme: _.theme, treePath: K, ...(0, f.s)({ disableStyles: I }) }),
												],
										  });
								}
								if (s == 'button.add-to-cart')
									return d
										? (0, e.Y)(i.$, {
												name: 'add-to-cart',
												internalClassName: 'ss__quickview__add-to-cart',
												lang: { button: Pt.addToCartButton },
												onClick: () => d && p.addToCart([d]),
												theme: _.theme,
												treePath: K,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'button.more-info')
									return Zt
										? (0, e.Y)(i.$, {
												name: 'more-info',
												internalClassName: 'ss__quickview__go-to-product',
												lang: { button: Pt.moreInfoButton },
												onClick: (o) => {
													d && p.track.product.clickThrough(o, d), (window.location.href = Zt);
												},
												theme: _.theme,
												treePath: K,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'quantityPicker')
									return d
										? (0, e.Y)(nt.w, {
												internalClassName: 'ss__quickview__quantity-picker',
												value: d.quantity,
												onChange: (o, c) => (d.quantity = c),
												theme: _.theme,
												treePath: K,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'productDetailTable') {
									if (!d) return null;
									const o = (re || []).map((c) => ({ ...c, label: c.label ?? ce(c.field) }));
									return (0, e.Y)(x.X, {
										result: d,
										displayFields: o,
										className: 'ss__quickview__attributes',
										theme: _.theme,
										treePath: K,
										...(0, f.s)({ disableStyles: I }),
									});
								}
								if (s.startsWith('recommendation.')) {
									const o = s.slice(15),
										c = Tt.get(o),
										r = c?.Component,
										w = c?.recsController;
									return !r || !w?.store?.loaded
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__recommendations',
												children: (0, e.Y)(r, {
													controller: w,
													title: w.store?.profile?.display?.templateParameters?.title,
													resultComponent: c?.ResultComponent,
													name: o,
												}),
										  });
								}
								return s == '_' ? (0, e.Y)('div', { className: 'ss__quickview__separator' }) : null;
							};
						let St = _.layout;
						typeof St == 'string' && (p.sourceController?.log.warn(`unsupported layout found. ${_.layout}`), (St = []));
						const ue = (0, e.Y)(i.$, {
							name: 'close',
							internalClassName: 'ss__quickview__close',
							icon: 'close-thin',
							lang: { button: Pt.closeButton },
							onClick: () => Qt(),
							theme: _.theme,
							treePath: K,
							...(0, f.s)({ disableStyles: I }),
						});
						return (0, e.Y)(Z._, {
							children: (0, e.Y)('div', {
								...ae,
								className: Y()('ss__quickview', pt, ht),
								children:
									Kt || Jt || d
										? (0, e.FD)('div', {
												...me,
												children: [
													ue,
													Kt
														? (0, e.Y)('div', { className: 'ss__quickview__error', role: 'alert', children: Kt.message })
														: Jt
														? (0, e.Y)('div', { className: 'ss__quickview__loading', ...Ot.loadingText?.all })
														: (0, e.FD)(e.FK, {
																children: [
																	St?.map((s) => ft(s)),
																	(0, e.Y)(ot.Z, {
																		images: de,
																		open: J,
																		startIndex: ut,
																		onClose: () => O(!1),
																		alt: Vt,
																		theme: _.theme,
																		treePath: K,
																		...(0, f.s)({ disableStyles: I }),
																	}),
																],
														  }),
												],
										  })
										: null,
							}),
						});
					});
				t.d(tt, ['n', 0, h, 'p', 0, W]);
			},
			'./components/src/hooks/useTracking.tsx'(Mt, tt, t) {
				t.d(tt, { z: () => et });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = t('./components/src/utilities/createImpressionObserver.ts'),
					v = t('./components/src/providers/withTracking.tsx');
				function et({ controller: P, result: B, banner: Y, type: N, content: S, track: Z }) {
					P || console.warn('Warning: No controller provided to useTracking'),
						B || console.warn('Warning: No result provided to useTracking'),
						!B && !Y && (!N || !S) && console.warn('Warning: No result or banner provided to withTracking');
					const z = { impression: !0, click: !0, ...Z },
						{ ref: H, inViewport: L } = (0, y.Q)(Z?.options);
					return (
						(0, e.vJ)(() => {
							L &&
								z.impression &&
								(N && S && !B && ['search', 'autocomplete'].includes(P?.type || '')
									? P?.track.banner.impression(S[N][0])
									: B?.bundleSeed || P?.track.product.impression(B || Y));
						}, [L]),
						(0, e.vJ)(() => {
							const A = H.current;
							if (A && z.click) {
								const G = (X) => {
									N && S && !B && ['search', 'autocomplete'].includes(P?.type || '')
										? P?.track.banner.click(X, S[N][0])
										: P?.track.product.click(X, B || Y);
								};
								return (
									A.setAttribute(v.N, 'true'),
									A.addEventListener('click', G),
									() => {
										A.removeEventListener('click', G);
									}
								);
							}
						}, [P, B, Y, N, S, z.click, z.impression]),
						{ trackingRef: H }
					);
				}
			},
		},
	]);
})();
