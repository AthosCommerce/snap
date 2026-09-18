'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9340],
		{
			'./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'(yt, et, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = t('../../node_modules/classnames/index.js'),
					st = t.n(v),
					P = t('../../node_modules/mobx-react-lite/es/index.js'),
					B = t('../../node_modules/mobx/dist/mobx.esm.js'),
					Y = t('./components/src/providers/cache.tsx'),
					K = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = t('./components/src/providers/treePath.tsx'),
					H = t('./components/src/utilities/mergeProps.ts'),
					z = t('./components/src/utilities/mergeStyles.ts'),
					G = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					L = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					A = t('./components/src/components/Atoms/Price/Price.tsx');
				const X = ['price', 'msrp'],
					q = (l) => {
						if (!l) return !1;
						const d = l.split('.'),
							V = d[d.length - 1];
						return X.includes(V) ? (d.length === 1 ? !0 : d[d.length - 2] === 'core' && d[d.length - 3] === 'mappings') : !1;
					},
					tt = (l, d) => {
						if (!l || !d) return;
						const V = (M) => d.split('.').reduce((n, $) => (n && typeof n == 'object' ? n[$] : void 0), M),
							T = V(l?.display) ?? V(l);
						if (T !== void 0) return T;
						if (!d.includes('.')) {
							const M = l?.display?.mappings?.core || l?.mappings?.core,
								n = l?.display?.attributes || l?.attributes;
							return M?.[d] ?? n?.[d];
						}
					},
					F = (l) =>
						l == null
							? ''
							: Array.isArray(l) || (0, B.Fq)(l)
							? Array.from(l)
									.map((d) => (typeof d == 'object' ? JSON.stringify(d) : String(d)))
									.join(', ')
							: typeof l == 'object'
							? JSON.stringify(l)
							: String(l),
					pt = () => (0, y.AH)({}),
					f = (0, P.PA)((l) => {
						const d = (0, K.u)(),
							T = { treePath: (0, N.LU)(), name: l.field ? (0, L.P)(l.field.split('.').pop() || '') : void 0 },
							M = (0, H.v6)('productDetail', d, T, l),
							{ result: n, field: $, name: C, html: Z, tag: g, className: it, internalClassName: at } = M,
							{ overrideElement: rt, shouldRenderDefault: b } = (0, G._)('productDetail', M);
						if (!b) return rt;
						const ot = (0, z.Z)(M, pt),
							h = tt(n, $),
							W = F(h);
						if (!W) return null;
						const _ = q($) && typeof h == 'number',
							r = C || $.split('.').pop(),
							x = st()('ss__product-detail', r && `ss__product-detail--${r}`, g && `ss__product-detail--${g}`, it, at);
						return (0, e.Y)(Y._, {
							children: Z
								? (0, e.Y)('div', { ...ot, className: x, dangerouslySetInnerHTML: { __html: W } })
								: (0, e.Y)('div', { ...ot, className: x, children: _ ? (0, e.Y)(A.g, { value: h, treePath: M.treePath }) : W }),
						});
					});
				t.d(et, ['$I', 0, tt, 'J_', 0, f, 'ZI', 0, F]);
			},
			'./components/src/components/Molecules/Gallery/Gallery.tsx'(yt, et, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/compat/dist/compat.module.js'),
					v = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					st = t('../../node_modules/mobx-react-lite/es/index.js'),
					P = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = t('../../node_modules/classnames/index.js'),
					Y = t.n(B),
					K = t('../../node_modules/deepmerge/dist/cjs.js'),
					N = t.n(K),
					H = t('./components/src/providers/cache.tsx'),
					z = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = t('./components/src/providers/treePath.tsx'),
					L = t('./components/src/utilities/defined.ts'),
					A = t('./components/src/utilities/mergeProps.ts'),
					X = t('./components/src/utilities/mergeStyles.ts'),
					q = t('./components/src/hooks/useA11y.tsx'),
					tt = t('./components/src/hooks/useLang.tsx'),
					F = t('./components/src/components/Atoms/Button/Button.tsx'),
					pt = t('./components/src/components/Atoms/Image/Image.tsx');
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
					l = (0, st.PA)((d) => {
						const V = (0, z.u)(),
							M = { treePath: (0, G.LU)(), startIndex: 0, zoomMin: 1, zoomMax: 4, zoomStep: 0.5, swipeThreshold: 40 },
							n = (0, A.v6)('gallery', V, M, d),
							{ images: $, open: C, startIndex: Z, onClose: g, alt: it, className: at, internalClassName: rt } = n,
							b = n.zoomMin,
							ot = n.zoomMax,
							h = n.zoomStep,
							W = n.swipeThreshold,
							_ = (o) => Math.min(ot, Math.max(b, o)),
							[r, x] = (0, v.J0)(Z || 0),
							[D, J] = (0, v.J0)(b),
							[O, ht] = (0, v.J0)({ x: 0, y: 0 }),
							k = (0, v.li)(null),
							lt = (0, v.li)(null),
							U = $?.length || 0,
							Ct = {
								gallery: { attributes: { 'aria-label': 'Image gallery' } },
								zoomOutButton: { attributes: { 'aria-label': 'Zoom out' } },
								zoomInButton: { attributes: { 'aria-label': 'Zoom in' } },
								closeButton: { attributes: { 'aria-label': 'Close gallery' } },
								prevButton: { attributes: { 'aria-label': 'Previous image' } },
								nextButton: { attributes: { 'aria-label': 'Next image' } },
							},
							c = N()(Ct, n.lang || {}),
							u = (0, tt.u)(c, {});
						(0, v.vJ)(() => {
							C && (x(Math.min(Math.max(Z || 0, 0), Math.max(U - 1, 0))), J(b), ht({ x: 0, y: 0 }));
						}, [C, Z, U]);
						const gt = (o) => {
								if (U === 0) return;
								const R = (o + U) % U;
								x(R), J(b), ht({ x: 0, y: 0 });
							},
							vt = () => gt(r - 1),
							I = () => gt(r + 1),
							w = () => J((o) => _(o + h)),
							Et = () =>
								J((o) => {
									const R = _(o - h);
									return R === b && ht({ x: 0, y: 0 }), R;
								});
						(0, v.vJ)(() => {
							if (!C) return;
							const o = (R) => {
								switch (R.key) {
									case 'Escape':
										g && g();
										break;
									case 'ArrowRight':
										I();
										break;
									case 'ArrowLeft':
										vt();
										break;
									case '+':
									case '=':
										w();
										break;
									case '-':
									case '_':
										Et();
										break;
								}
							};
							return window.addEventListener('keydown', o), () => window.removeEventListener('keydown', o);
						}, [C, r, U]);
						const ct = (0, v.li)(null),
							_t = (0, v.li)(null),
							mt = (0, v.li)(!1);
						(0, v.vJ)(() => {
							const o = !!(C && U > 0);
							o && !mt.current
								? ((_t.current = document.activeElement || null), (ct.current?.querySelector('.ss__gallery__close') || ct.current)?.focus())
								: !o && mt.current && (_t.current?.focus?.(), (_t.current = null)),
								(mt.current = o);
						});
						const dt = (0, X.Z)(n, f);
						if (!C || U === 0) return null;
						const ut = (o) => {
								D <= b ||
									(o.preventDefault(),
									o.currentTarget?.setPointerCapture?.(o.pointerId),
									(k.current = { startX: o.clientX, startY: o.clientY, baseX: O.x, baseY: O.y }));
							},
							S = (o) => {
								k.current && ht({ x: k.current.baseX + (o.clientX - k.current.startX), y: k.current.baseY + (o.clientY - k.current.startY) });
							},
							E = () => {
								k.current = null;
							},
							Pt = (o) => {
								o.target === o.currentTarget && g && g();
							},
							Mt = (o) => {
								o.touches && o.touches.length === 1 && (lt.current = { x: o.touches[0].clientX, y: o.touches[0].clientY });
							},
							At = (o) => {
								const R = lt.current;
								if (((lt.current = null), !R || D > b || U <= 1)) return;
								const ft = o.changedTouches && o.changedTouches[0];
								if (!ft) return;
								const xt = ft.clientX - R.x,
									Wt = ft.clientY - R.y;
								Math.abs(xt) > W && Math.abs(xt) > Math.abs(Wt) && (xt < 0 ? I() : vt());
							},
							m = $[r];
						return (0, y.createPortal)(
							(0, e.Y)(H._, {
								children: (0, e.FD)('div', {
									...dt,
									className: Y()('ss__gallery', at, rt),
									role: 'dialog',
									'aria-modal': 'true',
									...u.gallery?.attributes,
									ref: (o) => {
										(ct.current = o), (0, q.iy)(o, 0, !0, () => g && g());
									},
									onClick: Pt,
									children: [
										(0, e.FD)('div', {
											className: 'ss__gallery__toolbar',
											children: [
												U > 1 && (0, e.FD)('span', { className: 'ss__gallery__counter', children: [r + 1, ' / ', U] }),
												(0, e.Y)(F.$, {
													name: 'zoom-out',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-out',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'minus', color: 'currentColor' },
													lang: { button: c.zoomOutButton },
													disabled: D <= b,
													onClick: Et,
													theme: n.theme,
													treePath: n.treePath,
													...(0, L.s)({ disableStyles: n.disableStyles }),
												}),
												(0, e.Y)(F.$, {
													name: 'zoom-in',
													internalClassName: 'ss__gallery__button ss__gallery__zoom-in',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'plus', color: 'currentColor' },
													lang: { button: c.zoomInButton },
													disabled: D >= ot,
													onClick: w,
													theme: n.theme,
													treePath: n.treePath,
													...(0, L.s)({ disableStyles: n.disableStyles }),
												}),
												(0, e.Y)(F.$, {
													name: 'close',
													internalClassName: 'ss__gallery__button ss__gallery__close',
													color: '#fff',
													backgroundColor: 'rgba(255, 255, 255, 0.12)',
													borderColor: 'transparent',
													icon: { icon: 'close', color: 'currentColor' },
													lang: { button: c.closeButton },
													onClick: () => g && g(),
													theme: n.theme,
													treePath: n.treePath,
													...(0, L.s)({ disableStyles: n.disableStyles }),
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__gallery__stage',
											onClick: Pt,
											onTouchStart: Mt,
											onTouchEnd: At,
											children: [
												U > 1 &&
													(0, e.Y)(F.$, {
														name: 'prev',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--prev',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-left', color: 'currentColor' },
														lang: { button: c.prevButton },
														onClick: vt,
														theme: n.theme,
														treePath: n.treePath,
														...(0, L.s)({ disableStyles: n.disableStyles }),
													}),
												(0, e.Y)(pt._, {
													internalClassName: 'ss__gallery__image',
													src: m,
													alt: it || '',
													draggable: !1,
													style: {
														transform: `translate(${O.x}px, ${O.y}px) scale(${D})`,
														cursor: D > b ? (k.current ? 'grabbing' : 'grab') : 'default',
													},
													onPointerDown: ut,
													onPointerMove: S,
													onPointerUp: E,
													onPointerLeave: E,
													theme: n.theme,
													treePath: n.treePath,
													...(0, L.s)({ disableStyles: n.disableStyles }),
												}),
												U > 1 &&
													(0, e.Y)(F.$, {
														name: 'next',
														internalClassName: 'ss__gallery__nav ss__gallery__nav--next',
														color: '#fff',
														backgroundColor: 'rgba(255, 255, 255, 0.06)',
														borderColor: 'transparent',
														icon: { icon: 'angle-right', color: 'currentColor' },
														lang: { button: c.nextButton },
														onClick: I,
														theme: n.theme,
														treePath: n.treePath,
														...(0, L.s)({ disableStyles: n.disableStyles }),
													}),
											],
										}),
									],
								}),
							}),
							document.body
						);
					});
				t.d(et, ['Z', 0, l]);
			},
			'./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'(yt, et, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					v = t('../../node_modules/classnames/index.js'),
					st = t.n(v),
					P = t('../../node_modules/mobx-react-lite/es/index.js'),
					B = t('../../node_modules/mobx/dist/mobx.esm.js'),
					Y = t('./components/src/providers/cache.tsx'),
					K = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = t('./components/src/providers/treePath.tsx'),
					H = t('./components/src/utilities/defined.ts'),
					z = t('./components/src/utilities/mergeProps.ts'),
					G = t('./components/src/utilities/mergeStyles.ts'),
					L = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = t('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					X = t('./components/src/components/Atoms/Price/Price.tsx'),
					q = t('./components/src/components/Atoms/Image/Image.tsx'),
					tt = t('./components/src/components/Molecules/Rating/Rating.tsx');
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
					pt = (0, P.PA)((f) => {
						const l = (0, K.u)(),
							V = { treePath: (0, N.LU)() },
							T = (0, z.v6)('productDetailTable', l, V, f),
							{ result: M, displayFields: n, disableStyles: $, className: C, internalClassName: Z, treePath: g } = T,
							{ overrideElement: it, shouldRenderDefault: at } = (0, L._)('productDetailTable', T);
						if (!at) return it;
						const rt = (0, G.Z)(T, F),
							b = (n || []).filter((h) => (0, A.ZI)((0, A.$I)(M, h.field)) !== '');
						if (b.length === 0) return null;
						const ot = (h) => {
							const W = (0, A.$I)(M, h.field),
								_ = { theme: T.theme, treePath: g, ...(0, H.s)({ disableStyles: $ }) };
							switch (h.type) {
								case 'price': {
									const r = Number(W);
									if (!isNaN(r)) return (0, e.Y)(X.g, { value: r, ..._ });
									break;
								}
								case 'rating': {
									const r = Number(W);
									if (!isNaN(r)) return (0, e.Y)(tt.G, { value: r, ..._ });
									break;
								}
								case 'image': {
									const r = Array.isArray(W) || (0, B.Fq)(W) ? Array.from(W)[0] : W;
									if (typeof r == 'string' && r) return (0, e.Y)(q._, { src: r, alt: h.label || h.field, ..._ });
									break;
								}
								case 'html':
									return (0, e.Y)(A.J_, { result: M, field: h.field, html: !0, ..._ });
							}
							return (0, e.Y)(A.J_, { result: M, field: h.field, ..._ });
						};
						return (0, e.Y)(Y._, {
							children: (0, e.Y)('table', {
								...rt,
								className: st()('ss__product-detail-table', C, Z),
								children: (0, e.Y)('tbody', {
									children: b.map((h, W) =>
										(0, e.FD)(
											'tr',
											{ children: [(0, e.Y)('th', { scope: 'row', children: h.label ?? h.field }), (0, e.Y)('td', { children: ot(h) })] },
											`${h.field}-${W}`
										)
									),
								}),
							}),
						});
					});
				t.d(et, ['X', 0, pt]);
			},
			'./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx'(yt, et, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					st = t('../../node_modules/classnames/index.js'),
					P = t.n(st),
					B = t('../../node_modules/mobx-react-lite/es/index.js'),
					Y = t('../../node_modules/deepmerge/dist/cjs.js'),
					K = t.n(Y),
					N = t('./components/src/utilities/defined.ts'),
					H = t('./components/src/utilities/mergeProps.ts'),
					z = t('./components/src/utilities/mergeStyles.ts'),
					G = t('./components/src/providers/cache.tsx'),
					L = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = t('./components/src/providers/treePath.tsx'),
					X = t('./components/src/hooks/useLang.tsx'),
					q = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					tt = t('./components/src/components/Atoms/Button/Button.tsx');
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
					pt = (0, B.PA)((f) => {
						const l = (0, L.u)(),
							V = { min: 1, step: 1, treePath: (0, A.LU)() },
							T = (0, H.v6)('quantityPicker', l, V, f),
							{
								value: M,
								startValue: n,
								min: $,
								max: C,
								step: Z,
								disabled: g,
								hideButtons: it,
								label: at,
								onChange: rt,
								disableStyles: b,
								className: ot,
								internalClassName: h,
								theme: W,
								treePath: _,
								lang: r,
								style: x,
								styleScript: D,
								themeStyleScript: J,
								name: O,
								...ht
							} = T,
							k = Math.max(0, Math.trunc($)),
							lt = (S) => {
								let E = Math.trunc(S);
								return isNaN(E) && (E = k), (E = Math.max(k, E)), typeof C == 'number' && (E = Math.min(Math.trunc(C), E)), E;
							},
							[U, Ct] = (0, y.J0)(lt(n ?? k)),
							c = M === void 0,
							u = c ? U : lt(M),
							[gt, vt] = (0, y.J0)(void 0),
							{ overrideElement: I, shouldRenderDefault: w } = (0, q._)('quantityPicker', T);
						if (!w) return I;
						const Et = (S, E) => {
								if (g) return;
								const Pt = lt(E);
								c && Ct(Pt), Pt !== u && rt && rt(S, Pt);
							},
							ct = (0, z.Z)(T, F),
							_t = {
								quantityInput: { attributes: { 'aria-label': 'quantity' } },
								decrementButton: { attributes: { 'aria-label': 'decrease quantity' } },
								incrementButton: { attributes: { 'aria-label': 'increase quantity' } },
							},
							mt = K()(_t, r || {}),
							dt = (0, X.u)(mt, { quantity: u, min: k, max: C, disabled: g }, { activeBreakpoint: l?.activeBreakpoint }),
							ut = { button: { internalClassName: 'ss__quantity-picker__button', ...(0, N.s)({ disableStyles: b }), theme: T.theme, treePath: _ } };
						return (0, e.Y)(G._, {
							children: (0, e.FD)('div', {
								...ct,
								className: P()('ss__quantity-picker', { 'ss__quantity-picker--disabled': g }, ot, h),
								...ht,
								children: [
									at &&
										(0, e.Y)('div', {
											className: 'ss__quantity-picker__label-wrapper',
											children: (0, e.Y)('span', { className: 'ss__quantity-picker__label', children: at }),
										}),
									(0, e.FD)('div', {
										className: 'ss__quantity-picker__controls-wrapper',
										children: [
											!it &&
												(0, e.Y)(tt.$, {
													...ut.button,
													name: 'decrement',
													internalClassName: P()(ut.button.internalClassName, 'ss__quantity-picker__button--decrement'),
													disabled: g || u <= k,
													onClick: (S) => Et(S, u - Z),
													icon: 'minus-thin',
													...dt.decrementButton?.attributes,
												}),
											(0, e.Y)('input', {
												className: 'ss__quantity-picker__input',
												type: 'number',
												inputMode: 'numeric',
												min: k,
												max: C,
												step: Z,
												value: gt ?? u,
												disabled: g,
												onInput: (S) => vt(S.target.value),
												onBlur: (S) => {
													if (gt !== void 0) {
														const E = parseFloat(gt);
														Et(S, isNaN(E) ? u : E), vt(void 0);
													}
												},
												...dt.quantityInput?.all,
											}),
											!it &&
												(0, e.Y)(tt.$, {
													...ut.button,
													name: 'increment',
													internalClassName: P()(ut.button.internalClassName, 'ss__quantity-picker__button--increment'),
													disabled: g || (typeof C == 'number' && u >= C),
													onClick: (S) => Et(S, u + Z),
													icon: 'plus-thin',
													...dt.incrementButton?.attributes,
												}),
										],
									}),
								],
							}),
						});
					});
				t.d(et, ['w', 0, pt]);
			},
			'./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx'(yt, et, t) {
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					y = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = t('../../node_modules/mobx-react-lite/es/index.js'),
					st = t('../../node_modules/mobx/dist/mobx.esm.js'),
					P = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = t('../../node_modules/classnames/index.js'),
					Y = t.n(B),
					K = t('../../node_modules/deepmerge/dist/cjs.js'),
					N = t.n(K),
					H = t('./components/src/providers/cache.tsx'),
					z = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					G = t('./components/src/providers/snap.tsx'),
					L = t('./components/src/providers/treePath.tsx'),
					A = t('./components/src/hooks/useA11y.tsx'),
					X = t('./components/src/hooks/useLang.tsx'),
					q = t('./components/src/hooks/useCreateController.tsx'),
					tt = t('./components/src/hooks/useComponent.tsx'),
					F = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					pt = t('./components/src/hooks/useTracking.tsx'),
					f = t('./components/src/utilities/defined.ts'),
					l = t('./components/src/utilities/mergeProps.ts'),
					d = t('./components/src/utilities/mergeStyles.ts'),
					V = t('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js'),
					T = t('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'),
					M = t('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					n = t('./components/src/components/Atoms/Button/Button.tsx'),
					$ = t('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx'),
					C = t('./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'),
					Z = t('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					g = t('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					it = t('./components/src/components/Molecules/Gallery/Gallery.tsx'),
					at = t('./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx');
				const rt = ({ column1: _, column2: r, column3: x, column4: D }) =>
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
							'& .ss__quickview__column.ss__quickview__column--c1': { alignContent: _?.alignContent },
							'& .ss__quickview__column.ss__quickview__column--c2': { alignContent: r?.alignContent },
							'& .ss__quickview__column.ss__quickview__column--c3': { alignContent: x?.alignContent },
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
									flex: _?.width == 'auto' ? '1 1 0' : `1 1 ${_?.width}`,
									maxWidth: _?.width == 'auto' ? 'none' : _?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c2': {
									flex: r?.width == 'auto' ? '1 1 0' : `1 1 ${r?.width}`,
									maxWidth: r?.width == 'auto' ? 'none' : r?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c3': {
									flex: x?.width == 'auto' ? '1 1 0' : `1 1 ${x?.width}`,
									maxWidth: x?.width == 'auto' ? 'none' : x?.width,
								},
								'& .ss__quickview__column.ss__quickview__column--c4': {
									flex: D?.width == 'auto' ? '1 1 0' : `1 1 ${D?.width}`,
									maxWidth: D?.width == 'auto' ? 'none' : D?.width,
								},
							},
						}),
					b = (_) => (Array.isArray(_) || (0, st.Fq)(_) ? Array.from(_).filter((r) => typeof r == 'string' && r.length > 0) : []),
					ot = (_, r) => {
						const x = new Set(),
							D = new Set(),
							J = (O) => {
								typeof O == 'string'
									? O.startsWith('recommendation.')
										? x.add(O.slice(15))
										: O in r && !D.has(O) && (D.add(O), J(r[O]))
									: Array.isArray(O) && O.forEach(J);
							};
						return J(_), Array.from(x).sort();
					},
					h = ({ quickviewManager: _, product: r, children: x }) => {
						const { trackingRef: D } = (0, pt.z)({ controller: _, result: r, track: { click: !1, options: { threshold: 0 } } });
						return (0, e.Y)('div', { className: 'ss__quickview__tracker', ref: D, children: x });
					},
					W = (0, v.PA)((_) => {
						const r = (0, z.u)(),
							x = (0, G.uk)(),
							D = (0, L.LU)(),
							[J, O] = (0, y.J0)(!1),
							[ht, k] = (0, y.J0)(0),
							lt = (0, y.li)(!1);
						lt.current = J;
						const U = (s) => {
								k(s), O(!0);
							},
							Ct = { treePath: D, hideBadge: !1 },
							c = (0, l.v6)('quickviewLayout', r, Ct, _),
							{
								quickviewManager: u,
								className: gt,
								internalClassName: vt,
								disableStyles: I,
								treePath: w,
								hideBadge: Et,
								column1: ct,
								column2: _t,
								column3: mt,
								column4: dt,
								recommendation: ut,
							} = c,
							{ overrideElement: S, shouldRenderDefault: E } = (0, F._)('quickview', c),
							Pt = {
								quickview: { attributes: { 'aria-label': 'Quickview' } },
								closeButton: { attributes: { 'aria-label': 'Close quickview' } },
								addToCartButton: { value: 'Add to Cart' },
								moreInfoButton: { value: 'More info' },
								loadingText: { value: 'Loading\u2026' },
							},
							Mt = N()(Pt, c.lang || {}),
							At = (0, X.u)(Mt, { quickviewManager: u }),
							m = u?.store?.product,
							o = m?.display?.mappings?.core || m?.mappings?.core,
							R = o?.imageUrl || o?.thumbnailImageUrl,
							ft = u?.store?.resolvedConfig?.imagesField,
							xt = ft ? (Array.isArray(ft) ? ft : [ft]) : ['images', 'ss_images'],
							Wt = o,
							qt = m?.display?.attributes || m?.attributes || {},
							Ot = m?.variants?.active,
							te = Ot?.mappings?.core,
							ee = Ot?.attributes || {},
							zt = (s, Q) => {
								for (const i of xt) {
									const a = b(s?.[i] ?? Q?.[i]);
									if (a.length > 1) return a;
								}
								return [];
							},
							Ft = Ot ? zt(te, ee) : [],
							se = zt(Wt, qt),
							Tt = Ot ? (Ft.length > 1 ? Ft : []) : se,
							kt = Tt.length > 1;
						let $t = 0;
						if (Ot && kt && R) {
							const s = Tt.indexOf(R);
							s >= 0 && ($t = s);
						}
						(0, y.vJ)(() => {
							const s = !!u?.store?.isOpen;
							if (!E || !s) return;
							const Q = (i) => {
								i.key === 'Escape' && !J && u.close();
							};
							return window.addEventListener('keydown', Q), () => window.removeEventListener('keydown', Q);
						}, [E, u?.store?.isOpen, J]);
						const bt = (0, y.li)(ot(c.layout, { c1: ct?.layout, c2: _t?.layout, c3: mt?.layout, c4: dt?.layout })).current,
							It = new Map(),
							Rt = x,
							Ut = (0, y.li)(!!Rt?.templates).current,
							Jt = bt.length > 0,
							oe = Ut && Jt ? ut?.component || 'Recommendation' : void 0,
							ne = Ut && Jt ? ut?.resultComponent || 'Result' : void 0,
							ie = (0, tt.x)(Rt?.templates?.library.import.component.result || {}, ne).ComponentOverride,
							ae = (0, tt.x)(Rt?.templates?.library.import.component.recommendation.default || {}, oe).ComponentOverride;
						for (const s of bt) {
							const Q = Object.assign({ id: '', tag: s, branch: 'production' }, ut?.config);
							(Q.tag = s), (Q.id = Q.id || `quickview-${s}`);
							const i = Ut ? (0, q.i)(Rt, 'recommendation', Q) : void 0;
							It.set(s, { Component: ae, ResultComponent: ie, recsController: i });
						}
						const Bt = o?.parentId || m?.id,
							re = bt.map((s) => (It.get(s)?.recsController ? s : '')).join(','),
							Qt = (0, y.li)(new Map());
						if (
							((0, y.vJ)(() => {
								!E ||
									!Bt ||
									It.forEach(({ recsController: s }) => {
										s &&
											Qt.current.get(s.config.id) !== Bt &&
											(Qt.current.set(s.config.id, Bt), (s.config.globals = { ...s.config.globals, products: [Bt] }), s.search());
									});
							}, [E, Bt, bt.join(','), re]),
							!E)
						)
							return S;
						const le = (0, d.Z)(c, rt);
						if (!u)
							return (
								console.warn('[QuickviewLayout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const wt = u.store,
							Vt = !!wt.loading,
							Kt = wt.resolvedConfig?.displayFields,
							ce = typeof Kt == 'function' ? (m ? Kt(m) : void 0) : Kt,
							Nt = wt.error,
							_e = u.sourceController?.store.meta?.data?.facets,
							me = (s) => _e?.[s]?.label || s,
							Zt = () => {
								u.close(), c.onClose && c.onClose();
							},
							de = () => {
								lt.current ? O(!1) : Zt();
							},
							ue = {
								className: 'ss__quickview__content',
								role: 'dialog',
								'aria-modal': 'true',
								ref: (s) => (0, A.iy)(s, 0, !0, de),
								...At.quickview?.attributes,
							},
							Ht = o?.name,
							Gt = o?.url,
							Lt = m?.variants?.selections,
							pe = kt ? Tt : R ? [R] : [],
							St = kt ? Tt : R ? [R] : [],
							Xt = St.length === 1,
							jt =
								St.length > 0
									? (0, e.Y)(M.b, {
											className: 'ss__quickview__carousel',
											startIndex: $t,
											slidesToShow: 1,
											slidesToMove: 1,
											showNavigation: !Xt,
											overlayNavigation: !0,
											showPagination: !Xt,
											loop: !1,
											slides: St.map((s, Q) => ({ src: s, alt: Ht || '', onClick: () => U(Q) })),
											theme: c.theme,
											treePath: w,
											...(0, f.s)({ disableStyles: I }),
									  })
									: null,
							Dt = (s, Q) => {
								if (typeof s != 'string') {
									const i = s.map((j) => Dt(j, Q));
									return s.some((j, p) => j !== '_' && i[p])
										? (0, e.Y)('div', { className: `ss__quickview__row ss__quickview__row--${Q.value++}`, children: i })
										: null;
								}
								if (s == 'c1' && ct?.layout?.length) {
									const i = { value: 0 },
										a = ct.layout.map((p) => Dt(p, i));
									return ct.layout.some((p, nt) => (Array.isArray(p) || p !== '_') && !!a[nt])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c1', children: a })
										: null;
								}
								if (s == 'c2' && _t?.layout?.length) {
									const i = { value: 0 },
										a = _t.layout.map((p) => Dt(p, i));
									return _t.layout.some((p, nt) => (Array.isArray(p) || p !== '_') && !!a[nt])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c2', children: a })
										: null;
								}
								if (s == 'c3' && mt?.layout?.length) {
									const i = { value: 0 },
										a = mt.layout.map((p) => Dt(p, i));
									return mt.layout.some((p, nt) => (Array.isArray(p) || p !== '_') && !!a[nt])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c3', children: a })
										: null;
								}
								if (s == 'c4' && dt?.layout?.length) {
									const i = { value: 0 },
										a = dt.layout.map((p) => Dt(p, i));
									return dt.layout.some((p, nt) => (Array.isArray(p) || p !== '_') && !!a[nt])
										? (0, e.Y)('div', { className: 'ss__quickview__column ss__quickview__column--c4', children: a })
										: null;
								}
								if (s == 'slideshow')
									return !jt || !m
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__slideshow',
												children: Et
													? jt
													: (0, e.Y)(Z.Q, {
															result: m,
															controller: u.sourceController,
															theme: c.theme,
															treePath: w,
															...(0, f.s)({ disableStyles: I }),
															children: jt,
													  }),
										  });
								if (s == 'calloutBadge' || s.startsWith('calloutBadge.')) {
									if (!m) return null;
									const i = s.startsWith('calloutBadge.') ? s.slice(13) : void 0;
									return (0, e.Y)(g.W, { result: m, theme: c.theme, treePath: w, ...(0, f.s)({ disableStyles: I, tag: i }) });
								}
								if (s.startsWith('productDetail.')) {
									const i = s.slice(14),
										a = i.split('.').pop() || '';
									if (!i || !m) return null;
									const j = a === 'name' ? 'ss__quickview__title' : a === 'description' ? 'ss__quickview__description' : `ss__quickview__${a}`;
									return (0, e.Y)($.J_, {
										result: m,
										field: i,
										html: a === 'description',
										className: j,
										theme: c.theme,
										treePath: w,
										...(0, f.s)({ disableStyles: I }),
									});
								}
								if (s == 'variantSelections')
									return !Lt || Lt.length === 0
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__variants',
												children: Lt.map((i) =>
													(0, e.FD)(
														'div',
														{
															className: 'ss__quickview__variant',
															children: [
																(0, e.Y)('div', { className: 'ss__quickview__variant-title', children: i.label || i.field }),
																(0, e.Y)(T.m, { selection: i, type: i.type, theme: c.theme, treePath: w, ...(0, f.s)({ disableStyles: I }) }),
															],
														},
														i.field
													)
												),
										  });
								if (s.startsWith('variantSelection.')) {
									const i = s.slice(17),
										a = Lt?.find((j) => j.field === i || (0, V.P)(j.field) === i);
									return !i || !a
										? null
										: (0, e.FD)('div', {
												className: 'ss__quickview__variant',
												children: [
													(0, e.Y)('div', { className: 'ss__quickview__variant-title', children: a.label || a.field }),
													(0, e.Y)(T.m, { selection: a, type: a.type, theme: c.theme, treePath: w, ...(0, f.s)({ disableStyles: I }) }),
												],
										  });
								}
								if (s == 'button.add-to-cart')
									return m
										? (0, e.Y)(n.$, {
												name: 'add-to-cart',
												internalClassName: 'ss__quickview__add-to-cart',
												lang: { button: Mt.addToCartButton },
												onClick: () => m && u.addToCart([m]),
												theme: c.theme,
												treePath: w,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'button.more-info')
									return Gt
										? (0, e.Y)(n.$, {
												name: 'more-info',
												internalClassName: 'ss__quickview__go-to-product',
												lang: { button: Mt.moreInfoButton },
												onClick: (i) => {
													m && u.track.product.clickThrough(i, m), (window.location.href = Gt);
												},
												theme: c.theme,
												treePath: w,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'quantityPicker')
									return m
										? (0, e.Y)(at.w, {
												internalClassName: 'ss__quickview__quantity-picker',
												value: m.quantity,
												onChange: (i, a) => (m.quantity = a),
												theme: c.theme,
												treePath: w,
												...(0, f.s)({ disableStyles: I }),
										  })
										: null;
								if (s == 'productDetailTable') {
									if (!m) return null;
									const i = (ce || []).map((a) => ({ ...a, label: a.label ?? me(a.field) }));
									return (0, e.Y)(C.X, {
										result: m,
										displayFields: i,
										className: 'ss__quickview__attributes',
										theme: c.theme,
										treePath: w,
										...(0, f.s)({ disableStyles: I }),
									});
								}
								if (s.startsWith('recommendation.')) {
									const i = s.slice(15),
										a = It.get(i),
										j = a?.Component,
										p = a?.recsController;
									return !j || !p?.store?.loaded
										? null
										: (0, e.Y)('div', {
												className: 'ss__quickview__recommendations',
												children: (0, e.Y)(j, {
													controller: p,
													title: p.store?.profile?.display?.templateParameters?.title,
													resultComponent: a?.ResultComponent,
													name: i,
												}),
										  });
								}
								return s == '_' ? (0, e.Y)('div', { className: 'ss__quickview__separator' }) : null;
							};
						let Yt = c.layout;
						typeof Yt == 'string' && (u.sourceController?.log.warn(`unsupported layout found. ${c.layout}`), (Yt = []));
						const he = { value: 0 },
							ge = (0, e.Y)(n.$, {
								name: 'close',
								internalClassName: 'ss__quickview__close',
								icon: 'close-thin',
								lang: { button: Mt.closeButton },
								onClick: () => Zt(),
								theme: c.theme,
								treePath: w,
								...(0, f.s)({ disableStyles: I }),
							});
						return (0, e.Y)(H._, {
							children: (0, e.Y)('div', {
								...le,
								className: Y()('ss__quickview', gt, vt),
								children:
									Nt || Vt || m
										? (0, e.FD)('div', {
												...ue,
												children: [
													ge,
													Nt
														? (0, e.Y)('div', { className: 'ss__quickview__error', role: 'alert', children: Nt.message })
														: Vt
														? (0, e.Y)('div', { className: 'ss__quickview__loading', ...At.loadingText?.all })
														: (0, e.FD)(e.FK, {
																children: [
																	Yt?.map((s) => Dt(s, he)),
																	(0, e.Y)(it.Z, {
																		images: pe,
																		open: J,
																		startIndex: ht,
																		onClose: () => O(!1),
																		alt: Ht,
																		theme: c.theme,
																		treePath: w,
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
				t.d(et, ['n', 0, h, 'p', 0, W]);
			},
			'./components/src/hooks/useTracking.tsx'(yt, et, t) {
				t.d(et, { z: () => st });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = t('./components/src/utilities/createImpressionObserver.ts'),
					v = t('./components/src/providers/withTracking.tsx');
				function st({ controller: P, result: B, banner: Y, type: K, content: N, track: H }) {
					P || console.warn('Warning: No controller provided to useTracking'),
						B || console.warn('Warning: No result provided to useTracking'),
						!B && !Y && (!K || !N) && console.warn('Warning: No result or banner provided to withTracking');
					const z = { impression: !0, click: !0, ...H },
						{ ref: G, inViewport: L } = (0, y.Q)(H?.options);
					return (
						(0, e.vJ)(() => {
							L &&
								z.impression &&
								(K && N && !B && ['search', 'autocomplete'].includes(P?.type || '')
									? P?.track.banner.impression(N[K][0])
									: B?.bundleSeed || P?.track.product.impression(B || Y));
						}, [L]),
						(0, e.vJ)(() => {
							const A = G.current;
							if (A && z.click) {
								const X = (q) => {
									K && N && !B && ['search', 'autocomplete'].includes(P?.type || '')
										? P?.track.banner.click(q, N[K][0])
										: P?.track.product.click(q, B || Y);
								};
								return (
									A.setAttribute(v.N, 'true'),
									A.addEventListener('click', X),
									() => {
										A.removeEventListener('click', X);
									}
								);
							}
						}, [P, B, Y, K, N, z.click, z.impression]),
						{ trackingRef: G }
					);
				}
			},
		},
	]);
})();
