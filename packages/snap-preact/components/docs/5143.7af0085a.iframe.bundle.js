'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5143],
		{
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'),
					c = e('../../node_modules/classnames/index.js'),
					v = e.n(c),
					A = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const U = () => (0, T.AH)({}),
					f = (0, _.PA)((C) => {
						const O = (0, L.u)(),
							u = {
								symbol: '',
								decimalPlaces: 3,
								padDecimalPlaces: !0,
								thousandsSeparator: '',
								decimalSeparator: '.',
								symbolAfter: !0,
								treePath: (0, n.LU)(),
							},
							W = (0, l.v6)('formattedNumber', O, u, C),
							{
								value: P,
								symbol: r,
								decimalPlaces: E,
								padDecimalPlaces: y,
								thousandsSeparator: i,
								decimalSeparator: D,
								symbolAfter: h,
								className: Y,
								internalClassName: p,
								raw: R,
							} = W,
							{ overrideElement: N, shouldRenderDefault: H } = (0, M._)('formattedNumber', W);
						if (!H) return N;
						const s = o.Z(P, { symbol: r, decimalPlaces: E, padDecimalPlaces: y, thousandsSeparator: i, decimalSeparator: D, symbolAfter: h }),
							b = (0, a.Z)(W, U);
						return R
							? (0, t.Y)(t.FK, { children: s })
							: (0, t.Y)(A._, { children: (0, t.Y)('span', { className: v()('ss__formatted-number', Y, p), ...b, children: s }) });
					});
				e.d(x, ['G', 0, f]);
			},
			'./components/src/components/Atoms/Icon/index.ts'(q, x, e) {
				e.d(x, { I: () => t.I, c: () => _.c });
				var t = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					_ = e('./components/src/components/Atoms/Icon/paths.tsx');
			},
			'./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					a = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = ({ color: f, height: C, backgroundColor: O, theme: I }) => {
						const u = (0, T.i7)({
							from: { left: '-200px', width: '30%' },
							'50%': { width: '30%' },
							'70%': { width: '70%' },
							'80%': { left: '50%' },
							'95%': { left: '120%' },
							to: { left: '100%' },
						});
						return (0, T.AH)({
							height: C,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: O || I?.variables?.colors?.secondary || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${f || I?.variables?.colors?.primary || '#ccc'}`,
								animation: `${u} 2s linear infinite`,
							},
						});
					},
					U = (0, _.PA)((f) => {
						const C = (0, A.u)(),
							I = { height: '5px', treePath: (0, L.LU)() },
							u = (0, n.v6)('loadingBar', C, I, f),
							{ active: W, className: P, internalClassName: r } = u,
							{ overrideElement: E, shouldRenderDefault: y } = (0, a._)('loadingBar', u);
						if (!y) return E;
						const i = (0, l.Z)(u, M);
						return W
							? (0, t.Y)(v._, {
									children: (0, t.Y)('div', {
										...i,
										className: c()('ss__loading-bar', P, r),
										children: (0, t.Y)('div', { className: 'ss__loading-bar__bar' }),
									}),
							  })
							: null;
					});
				e.d(x, ['G', 0, U]);
			},
			'./components/src/components/Atoms/ProductDetail/index.ts'(q, x, e) {
				e.d(x, { J: () => t.J_ });
				var t = e('./components/src/components/Atoms/ProductDetail/ProductDetail.tsx');
			},
			'./components/src/components/Atoms/Skeleton/Skeleton.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					o = e.n(T),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					a = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const M = ({ width: f, height: C, round: O, backgroundColor: I, animatedColor: u }) => {
						const W = (0, _.i7)({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
						return (0, _.AH)({
							width: f,
							height: C,
							borderRadius: O ? f : '0.25rem',
							backgroundColor: I,
							display: 'inline-flex',
							lineHeight: '1',
							position: 'relative',
							overflow: 'hidden',
							zIndex: '1',
							'&:after': {
								content: '""',
								display: 'block',
								position: 'absolute',
								left: '0',
								right: '0',
								height: '100%',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `linear-gradient(90deg, ${I}, ${u}, ${I})`,
								transform: 'translateX(-100%)',
								animation: `${W} 1.5s linear infinite`,
								animationTimingFunction: 'ease-in-out',
							},
						});
					},
					U = (0, c.PA)((f) => {
						const C = (0, A.u)(),
							I = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: (0, L.LU)() },
							u = (0, n.v6)('skeleton', C, I, f),
							{ className: W, internalClassName: P } = u,
							{ overrideElement: r, shouldRenderDefault: E } = (0, a._)('skeleton', u);
						if (!E) return r;
						const y = (0, l.Z)(u, M);
						return (0, t.Y)(v._, { children: (0, t.Y)('div', { ...y, className: o()('ss__skeleton', W, P) }) });
					});
				e.d(x, ['E', 0, U]);
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					o = e.n(T),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					A = e('./components/src/components/Atoms/Button/Button.tsx'),
					L = e('./components/src/utilities/defined.ts'),
					n = e('./components/src/utilities/Colour/Colour.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/providers/cache.tsx'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					C = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					O = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					u = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(u);
				const P = new n.V('#ecaa15'),
					r = new n.V('#cc1212'),
					E = new n.V('#4c3ce2'),
					y = ({ theme: D }) =>
						(0, _.AH)({
							borderRadius: '2px',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							borderLeft: '4px solid',
							'.ss__error-handler__message': {
								padding: '10px',
								display: 'flex',
								alignItems: 'center',
								'.ss__error-handler__message__type': { fontWeight: 'bold', marginRight: '5px' },
								'.ss__icon': { marginRight: '10px' },
							},
							'& .ss__error-handler__button': {
								backgroundColor: 'unset',
								color: 'inherit',
								borderColor: D?.variables?.colors?.primary,
								width: ['150px', 'fit-content'],
								margin: '5px 10px',
								'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
								'.ss__icon': { margin: '0 5px 0 0' },
							},
							'&.ss__error-handler--error': {
								backgroundColor: r.lighten(180).hex,
								borderLeftColor: r.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: r.hex } },
							},
							'&.ss__error-handler--warning': {
								backgroundColor: P.lighten(180).hex,
								borderLeftColor: P.hex,
								'.ss__icon': { fill: P.hex, stroke: P.hex },
								'.ss__error-handler__button': {
									color: P.hex,
									borderColor: P.hex,
									fontWeight: 'bold',
									textTransform: 'uppercase',
									display: 'inline-flex',
									alignItems: 'center',
									'.ss__button__content': { order: 2 },
									'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: P.hex, stroke: P.hex },
									'&:hover': {
										color: P.darken(30).hex,
										borderColor: P.darken(30).hex,
										'.ss__button__icon': { fill: P.darken(30).hex, stroke: P.darken(30).hex },
									},
								},
							},
							'&.ss__error-handler--info': {
								backgroundColor: E.lighten(180).hex,
								borderLeftColor: E.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: E.hex } },
							},
						}),
					i = (0, c.PA)((D) => {
						const h = (0, U.u)(),
							p = { treePath: (0, f.LU)() },
							R = (0, l.v6)('errorHandler', h, p, D),
							{ controller: N, error: H, disableStyles: s, onRetryClick: b, className: $, internalClassName: Z, treePath: z } = R,
							{ overrideElement: j, shouldRenderDefault: J } = (0, I._)('errorHandler', R);
						if (!J) return j;
						const k = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, L.s)({ disableStyles: s }), theme: R.theme, treePath: z },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, L.s)({ disableStyles: s }),
									theme: R.theme,
									treePath: z,
								},
							},
							V = N?.store?.error || H,
							d = (0, a.Z)(R, y),
							m = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							B = W()(m, R.lang || {}),
							g = (0, O.u)(B, { controller: N }, { activeBreakpoint: h?.activeBreakpoint });
						return Object.values(C.B).includes(V?.type) && V?.message
							? (0, t.Y)(M._, {
									children: (0, t.Y)('div', {
										className: o()('ss__error-handler', `ss__error-handler--${V.type}`, $, Z),
										...d,
										children: (() => {
											switch (V.type) {
												case C.B.WARNING:
													return (0, t.FD)(t.FK, {
														children: [
															(0, t.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, t.Y)(v.I, { ...k.icon, icon: 'warn' }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...g.warningText?.all }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: V.message }),
																],
															}),
															V?.code == 429
																? (0, t.Y)(A.$, {
																		...k.buttonRetry,
																		onClick: (K) => {
																			b ? b(K) : N?.search();
																		},
																		...g.reloadText.attributes,
																		children: (0, t.Y)('span', { className: 'ss__error-handler__button__text', ...g.reloadText.value }),
																  })
																: null,
														],
													});
												case C.B.ERROR:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(v.I, { ...k.icon, icon: 'error' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...g.errorText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: V.message }),
														],
													});
												case C.B.INFO:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(v.I, { ...k.icon, icon: 'info' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...g.infoText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: V.message }),
														],
													});
											}
										})(),
									}),
							  })
							: null;
					});
				e.d(x, ['z', 0, i]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useClickOutside.tsx'),
					a = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					M = e('./components/src/utilities/cloneWithProps.tsx'),
					U = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useA11y.tsx'),
					I = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					u = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const W = () =>
						(0, T.AH)({
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
					P = (0, v.PA)((r) => {
						const E = (0, L.u)(),
							i = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, n.LU)() },
							D = (0, f.v6)('modal', E, i, r),
							{
								button: h,
								content: Y,
								buttonSelector: p,
								children: R,
								disabled: N,
								open: H,
								onClick: s,
								lockScroll: b,
								startOpen: $,
								disableClickOutside: Z,
								disableA11y: z,
								className: j,
								internalClassName: J,
								disableStyles: k,
								overlayColor: V,
								onOverlayClick: d,
								treePath: m,
							} = D,
							{ overrideElement: B, shouldRenderDefault: g } = (0, a._)('modal', D);
						if (!g) return B;
						const K = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (ee) => {
									d && d(ee), w();
								},
								...(0, U.s)({ disableStyles: k, color: V }),
								theme: D?.theme,
								treePath: m,
							},
						};
						let S, G;
						const X = H === void 0;
						X ? ([S, G] = (0, _.J0)($)) : (S = H);
						let F;
						Z ||
							(F = (0, l.L)(() => {
								S && (N || (X && G && G(!1)));
							}));
						const w = () => {
								X && G && G((ee) => !ee);
							},
							oe = (0, C.Z)(D, W);
						(0, _.vJ)(
							() => (
								S && b ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[S, b]
						);
						const Q = (0, _.li)(S),
							ne = (0, _.li)(b);
						return (
							(Q.current = S),
							(ne.current = b),
							(0, _.vJ)(() => {
								const ee = p ? (typeof p == 'string' ? document.querySelector(p) : p) : null;
								let le = !1,
									re;
								const se = (0, u.s)(() => {
										clearTimeout(re),
											(re = setTimeout(() => {
												le || (Q.current && ne.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									te = (ce) => {
										w(), s && s(ce);
									};
								return (
									ee && (N || ee.addEventListener('click', te)),
									window.addEventListener('resize', se),
									() => {
										(le = !0), clearTimeout(re), window.removeEventListener('resize', se), ee && ee.removeEventListener('click', te);
									}
								);
							}, []),
							(0, t.Y)(A._, {
								children: (0, t.FD)('div', {
									...oe,
									className: c()('ss__modal', { 'ss__modal--open': S }, { 'ss__modal--disabled': N }, j, J),
									ref: F,
									children: [
										!p &&
											h &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (ee) => (z ? null : (0, O.iy)(ee)),
												'aria-expanded': S,
												role: 'button',
												onClick: (ee) => {
													N || (w(), s && s(ee));
												},
												children: (0, M.Y)(h, { open: S, toggleOpen: w, treePath: m }),
											}),
										(Y || R) &&
											S &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (ee) => (z ? null : (0, O.iy)(ee)),
												children: [(0, M.Y)(Y, { open: S, toggleOpen: w, treePath: m }), (0, M.Y)(R, { open: S, toggleOpen: w, treePath: m })],
											}),
										(0, t.Y)(I.h, { ...K.overlay, active: !!S }),
									],
								}),
							})
						);
					});
				e.d(x, ['a', 0, P]);
			},
			'./components/src/components/Molecules/TemplatesEditor/TemplatesEditor.tsx'(q, x, e) {
				e.d(x, { j: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					o = e.n(T),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					v = e('./components/src/providers/cache.tsx');
				const A = () =>
					(0, t.Y)('svg', {
						id: 'Layer_2',
						className: 'athos-logo',
						'data-name': 'Layer 2',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 271.84 40',
						children: (0, t.Y)('g', {
							id: 'Layer_1-2',
							'data-name': 'Layer 1',
							children: (0, t.FD)('g', {
								children: [
									(0, t.FD)('g', {
										children: [
											(0, t.FD)('g', {
												children: [
													(0, t.Y)('path', {
														className: 'cls-2',
														d: 'M50.86,18.26c.58-1.16,1.37-2.05,2.37-2.67,1-.62,2.11-.94,3.34-.94,1.05,0,1.97.21,2.77.64.79.43,1.4.99,1.83,1.68v-2.11h4.57v14.92h-4.57v-2.11c-.45.69-1.07,1.26-1.86,1.68-.79.43-1.72.64-2.77.64-1.21,0-2.32-.32-3.31-.95-1-.63-1.79-1.53-2.37-2.7s-.87-2.52-.87-4.05.29-2.88.87-4.04ZM60.22,19.62c-.63-.66-1.4-.99-2.3-.99-.66,0-1.31.2-1.85.58-.95.66-1.42,1.69-1.42,3.09,0,1.14.32,2.05.95,2.71.78.82,1.77,1.14,2.96.95.2-.03.41-.1.6-.19,1.34-.64,2.01-1.79,2.01-3.45,0-1.14-.32-2.04-.95-2.7Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-2',
														d: 'M77.07,25.91v3.88h-2.33c-1.66,0-2.95-.41-3.88-1.22s-1.39-2.13-1.39-3.97v-5.94h-1.82v-3.8h1.82v-3.64h4.57v3.64h2.99v3.8h-2.99v5.99c0,.45.11.77.32.96s.57.29,1.07.29h1.63Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-2',
														d: 'M92.29,16.4c1.03,1.13,1.55,2.69,1.55,4.66v8.72h-4.55v-8.1c0-1-.26-1.77-.78-2.33s-1.21-.83-2.08-.83-1.57.28-2.08.83c-.52.55-.78,1.33-.78,2.33v8.1h-4.57V10h4.57v6.87c.46-.66,1.1-1.19,1.9-1.58.8-.39,1.7-.59,2.7-.59,1.71,0,3.08.57,4.12,1.7Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-2',
														d: 'M99.47,29.06c-1.17-.62-2.08-1.52-2.75-2.67-.67-1.16-1-2.51-1-4.06s.34-2.88,1.02-4.05c.68-1.17,1.6-2.06,2.78-2.69s2.49-.94,3.96-.94,2.78.31,3.96.94,2.1,1.52,2.78,2.69c.68,1.17,1.02,2.52,1.02,4.05s-.34,2.88-1.03,4.05c-.69,1.17-1.62,2.06-2.81,2.69-1.19.62-2.51.94-3.97.94s-2.78-.31-3.94-.94ZM105.65,25.08c.61-.64.92-1.56.92-2.75s-.3-2.11-.9-2.75c-.6-.64-1.33-.96-2.21-.96s-1.63.32-2.22.95c-.59.63-.88,1.56-.88,2.77s.29,2.11.87,2.75c.58.64,1.31.96,2.18.96s1.62-.32,2.23-.96Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-2',
														d: 'M116.45,29.33c-1.02-.45-1.82-1.06-2.41-1.83-.59-.78-.92-1.65-.99-2.61h4.52c.05.52.3.94.72,1.26.43.32.95.48,1.58.48.57,0,1.01-.11,1.32-.33.31-.22.47-.51.47-.87,0-.43-.22-.74-.67-.95-.45-.2-1.17-.43-2.17-.68-1.07-.25-1.96-.51-2.67-.79-.71-.28-1.33-.71-1.84-1.31-.52-.6-.78-1.4-.78-2.42,0-.86.24-1.63.71-2.34.47-.7,1.17-1.26,2.09-1.67s2.01-.61,3.28-.61c1.87,0,3.35.46,4.42,1.39s1.7,2.16,1.86,3.69h-4.22c-.07-.52-.3-.93-.68-1.23-.38-.3-.89-.45-1.51-.45-.53,0-.95.1-1.23.31s-.43.49-.43.84c0,.43.23.75.68.96s1.16.43,2.13.64c1.1.29,2.01.57,2.7.84.7.28,1.31.72,1.83,1.34s.8,1.44.82,2.47c0,.87-.25,1.65-.74,2.34-.49.69-1.19,1.23-2.11,1.62-.92.39-1.98.59-3.2.59-1.3,0-2.46-.22-3.48-.67Z',
													}),
												],
											}),
											(0, t.FD)('g', {
												children: [
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M133.64,18.4c.61-1.14,1.46-2.02,2.54-2.65,1.08-.62,2.31-.93,3.7-.93,1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M152.31,29.07c-1.11-.62-1.98-1.5-2.62-2.65-.64-1.14-.96-2.48-.96-4.01s.32-2.87.97-4.01,1.53-2.02,2.65-2.65c1.12-.62,2.37-.93,3.75-.93s2.64.31,3.77.93c1.12.62,2.01,1.5,2.65,2.65.64,1.14.96,2.48.96,4.01s-.32,2.84-.97,4c-.65,1.15-1.54,2.04-2.67,2.66-1.13.62-2.39.93-3.78.93s-2.63-.31-3.74-.93ZM158.75,27.69c.83-.44,1.5-1.11,2.01-2,.51-.89.77-1.98.77-3.28s-.25-2.39-.76-3.28-1.17-1.56-2-2c-.83-.44-1.73-.66-2.7-.66s-1.87.22-2.7.66-1.49,1.11-1.99,2c-.49.89-.74,1.99-.74,3.28s.25,2.39.74,3.28c.5.89,1.15,1.56,1.97,2,.82.44,1.72.66,2.69.66s1.87-.22,2.7-.66Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M187.32,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M212.8,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M230.57,23.14h-12.23c.05,1.12.32,2.07.81,2.86s1.12,1.39,1.92,1.8c.79.4,1.66.61,2.59.61,1.22,0,2.26-.3,3.09-.89s1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52s-2.66,1.36-4.44,1.36c-1.39,0-2.63-.31-3.73-.93-1.1-.62-1.96-1.5-2.58-2.65-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.56-2.65s2.35-.92,3.75-.92,2.63.31,3.69.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM228.05,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35-.99.9-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M236.49,15.53c.85-.5,1.9-.76,3.15-.76v1.97h-.51c-1.37,0-2.47.37-3.29,1.11-.83.74-1.24,1.97-1.24,3.7v8.23h-1.89v-14.74h1.89v2.62c.41-.92,1.05-1.63,1.9-2.13Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M242.55,18.4c.61-1.14,1.46-2.02,2.54-2.65s2.31-.93,3.7-.93c1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
													}),
													(0, t.Y)('path', {
														className: 'cls-1',
														d: 'M271.79,23.14h-12.23c.05,1.12.32,2.07.81,2.86.49.79,1.12,1.39,1.92,1.8.79.4,1.66.61,2.59.61,1.22,0,2.25-.3,3.09-.89.84-.59,1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52-1.18.91-2.66,1.36-4.44,1.36-1.39,0-2.63-.31-3.73-.93s-1.96-1.5-2.58-2.65c-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.57-2.65s2.35-.92,3.75-.92,2.63.31,3.68.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM269.26,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35s-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
													}),
												],
											}),
										],
									}),
									(0, t.FD)('g', {
										children: [
											(0, t.Y)('path', {
												className: 'cls-2',
												d: 'M40,13.34c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
											}),
											(0, t.Y)('path', {
												className: 'cls-1',
												d: 'M40,34.79c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
											}),
											(0, t.Y)('path', {
												className: 'cls-1',
												d: 'M0,5.2C0,2.34,2.1,0,4.7,0h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,18.54.02,16.21.02,13.34l-.02-8.14Z',
											}),
											(0, t.Y)('path', {
												className: 'cls-2',
												d: 'M0,26.66c0-2.87,2.1-5.2,4.7-5.2h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,40,.02,37.66.02,34.8l-.02-8.14Z',
											}),
										],
									}),
								],
							}),
						}),
					});
				var L = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = () =>
						(0, t.FD)('svg', {
							fill: '#000000',
							viewBox: '0 0 1920 1920',
							xmlns: 'http://www.w3.org/2000/svg',
							children: [
								(0, t.Y)('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }),
								(0, t.Y)('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }),
								(0, t.Y)('g', {
									id: 'SVGRepo_iconCarrier',
									children: (0, t.Y)('path', {
										d: 'M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0',
										fillRule: 'evenodd',
									}),
								}),
							],
						}),
					l = (0, c.PA)((O) => {
						const { type: I, label: u, description: W, onReset: P, display: r, showReset: E, value: y, options: i, onChange: D } = O,
							[h, Y] = (0, L.J0)(y);
						return (
							(0, L.vJ)(() => {
								Y(y);
							}, [y]),
							r === 'hidden'
								? null
								: (0, t.Y)('div', {
										className: `control ${I} ${r}`,
										children: (0, t.FD)('div', {
											className: 'option checkbox',
											children: [
												(0, t.Y)('label', { children: u }),
												(0, t.Y)('div', {
													className: 'reset',
													children: E
														? (0, t.Y)('button', {
																title: 'Reset',
																onClick: () => {
																	P();
																},
																children: (0, t.Y)(n, {}),
														  })
														: null,
												}),
												(0, t.Y)('div', {
													className: 'value',
													title: W,
													children: (() => {
														switch (I) {
															case 'text':
																return (0, t.Y)('input', { type: 'text', value: y, onChange: (p) => D(p.target.value), disabled: r === 'disabled' });
															case 'number':
																return (0, t.Y)('input', {
																	type: 'number',
																	value: y,
																	onChange: (p) => D(Number(p.target.value)),
																	disabled: r === 'disabled',
																});
															case 'checkbox':
																return (0, t.Y)('input', {
																	type: 'checkbox',
																	checked: y,
																	onChange: (p) => D(p.target.checked),
																	disabled: r === 'disabled',
																});
															case 'dropdown':
																return (0, t.Y)('select', {
																	onChange: (p) => D(p.target.value),
																	disabled: r === 'disabled',
																	value: y,
																	children: i?.map((p, R) =>
																		p.group
																			? (0, t.Y)(
																					'optgroup',
																					{
																						label: p.group,
																						children: p.options.map((N, H) =>
																							(0, t.Y)('option', { value: N.value, children: N.label || N.value }, `${R}-${H}`)
																						),
																					},
																					R
																			  )
																			: p.options.map((N, H) => (0, t.Y)('option', { value: N.value, children: N.label || N.value }, `${R}-${H}`))
																	),
																});
															case 'color':
																return (0, t.FD)(t.FK, {
																	children: [
																		(0, t.Y)('input', {
																			type: 'color',
																			value: y,
																			onChange: (p) => {
																				Y(p.target.value), D(p.target.value);
																			},
																			disabled: r === 'disabled',
																		}),
																		(0, t.Y)('input', {
																			type: 'text',
																			className: a(h) ? '' : 'invalid',
																			value: h,
																			onChange: (p) => {
																				Y(p.target.value), a(p.target.value) && D(p.target.value);
																			},
																			disabled: r === 'disabled',
																		}),
																	],
																});
															default:
																return null;
														}
													})(),
												}),
											],
										}),
								  })
						);
					}),
					a = (O) => !!/^#[0-9A-F]{6}$/i.test(O),
					M = { AbstractedControls: ({}) => (0, _.AH)({}) },
					U = (0, c.PA)((O) => {
						const I = { css: [M.AbstractedControls({ ...O })] },
							{ title: u, enableGroupReset: W, feature: P, editorStore: r, data: E } = O,
							[y, i] = P.split('/'),
							D = r.uiAbstractions[y],
							h = D?.[i];
						if (!h) return console.warn(`No controls found for feature: ${P}`, D, h), null;
						const Y = W && h.some((R) => R.controls.some((N) => N.shouldShowReset(E))),
							p = () => {
								h.forEach((R) => {
									R.controls.forEach((N) => {
										N.shouldShowReset(E) && N.onReset(E);
									});
								});
							};
						return (0, t.FD)('div', {
							className: 'ss__template-editor__abstracted-controls',
							...I,
							children: [
								u &&
									(0, t.FD)('div', {
										className: 'control-title',
										children: [
											(0, t.Y)('h3', { children: u }),
											Y &&
												(0, t.Y)('span', {
													className: 'reset',
													children: (0, t.Y)('button', {
														title: 'Reset',
														onClick: () => {
															p();
														},
														children: (0, t.Y)(n, {}),
													}),
												}),
										],
									}),
								h.map((R) => {
									const N = R.showReset && R.controls.some((s) => s.shouldShowReset(E)),
										H = () => {
											R.controls.forEach((s) => {
												s.shouldShowReset(E) && s.onReset(E);
											});
										};
									return (0, t.FD)(
										'div',
										{
											className: 'group',
											children: [
												R.title &&
													(0, t.FD)('div', {
														className: 'group-title',
														children: [
															(0, t.Y)('h4', { title: R.description, children: R.title }),
															N &&
																(0, t.Y)('span', {
																	className: 'reset',
																	children: N
																		? (0, t.Y)('button', {
																				title: 'Reset',
																				onClick: () => {
																					H();
																				},
																				children: (0, t.Y)(n, {}),
																		  })
																		: null,
																}),
														],
													}),
												R.controls.map((s, b) =>
													(0, t.Y)(
														l,
														{
															type: s.type,
															label: s.label,
															description: s.description,
															showReset: s.shouldShowReset(E),
															onChange: ($) => s.onValueChange($, E),
															onReset: () => s.onReset(E),
															display: s.getDisplayState ? s.getDisplayState(E) : 'visible',
															value: s.getValue(E),
															options: s.getOptions ? s.getOptions(E) : [],
														},
														b
													)
												),
											],
										},
										R.title
									);
								}),
							],
						});
					}),
					f = {
						TemplatesEditor: ({}) =>
							(0, _.AH)({
								display: 'flex',
								flexDirection: 'column',
								minWidth: '400px',
								overflow: 'hidden',
								fontSize: '14px',
								position: 'fixed',
								zIndex: '10003',
								cursor: 'auto',
								top: '10px',
								right: 0,
								color: '#333',
								borderRight: 0,
								borderTopLeftRadius: '5px',
								borderBottomLeftRadius: '5px',
								boxShadow: 'rgba(81, 81, 81, 0.5) -1px 0px 3px 0px',
								border: '1px solid #D0E0F3',
								background: '#F2F6FC',
								transition: 'right ease 0.2s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
								boxSizing: 'border-box',
								width: '400px',
								maxWidth: '90vw',
								maxHeight: 'calc(100vh - 20px)',
								'*': { boxSizing: 'border-box' },
								'.ss__template-editor__header': {
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '8px 8px 4px 8px',
									'.athos-logo': { maxWidth: '100%', width: '200px', '.cls-1': { fill: '#00aeef' }, '.cls-2': { fill: '#1d4990' } },
									'.header-actions': { display: 'flex', gap: '10px', '& button': { width: 'unset' } },
								},
								'>aside': {
									overflow: 'hidden',
									flexGrow: 1,
									display: 'flex',
									flexDirection: 'column',
									'.tab-selection': {
										display: 'flex',
										alignItems: 'center',
										padding: '0 5px',
										gap: '4px',
										height: '33px',
										flexShrink: 0,
										'.tab': {
											fontSize: '12px',
											position: 'relative',
											boxShadow: 'rgb(110 110 110 / 50%) 0px -1px 2px -1px',
											textTransform: 'capitalize',
											top: '6px',
											fontWeight: 'bold',
											border: '1px solid #D0E0F3',
											borderBottom: 'none',
											padding: '5px 10px 4px 10px',
											height: '100%',
											color: '#9eaab8',
											backgroundColor: '#dce3eb',
											borderTopLeftRadius: '5px',
											borderTopRightRadius: '5px',
											cursor: 'pointer',
											transition: 'font-size 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
											'&:hover': { backgroundColor: '#d2deed', color: '#7a838e' },
											'&.active': { fontSize: '14px', backgroundColor: '#fff', color: '#283E57', paddingTop: '7px', top: '2px', zIndex: 4 },
										},
									},
									'.tab-view': {
										position: 'relative',
										zIndex: 3,
										borderTop: '2px solid #D0E0F3',
										background: '#fff',
										flexGrow: 1,
										display: 'flex',
										flexDirection: 'column',
										minHeight: 0,
										'.tab-view-shadow': {
											position: 'absolute',
											top: 0,
											left: 0,
											right: '10px',
											bottom: 0,
											boxShadow: 'inset 5px 12px 6px 0px #fff',
											pointerEvents: 'none',
											'&.bottom': { boxShadow: 'inset 0 -12px 6px 0px #fff' },
										},
										'.tab-view-content': {
											padding: '0 10px 10px',
											flexGrow: 1,
											overflowY: 'auto',
											minHeight: 0,
											'&::-webkit-scrollbar': { width: '8px' },
											'&::-webkit-scrollbar-track': { background: '#f5f5f5' },
											'&::-webkit-scrollbar-thumb': { background: '#96aabe' },
										},
									},
								},
								'&.ss__template-editor--collapsed': {
									right: '-354px',
									transition: 'right ease 0.5s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
									height: '48px',
									maxHeight: '48px',
									cursor: 'pointer',
									overflow: 'hidden',
								},
								'input, select, option, optgroup, button, h1, h2, h3, h4, h5, h6, i': { all: 'revert', color: '#283E57' },
								h1: { fontSize: '20px' },
								h2: { fontSize: '18px' },
								h3: { fontSize: '16px' },
								h4: { fontSize: '14px' },
								h5: { fontSize: '12px' },
								h6: { fontSize: '10px' },
								'input[type="text"], input[type="number"], select, button': {
									border: '1px solid #ccc',
									height: '30px',
									minHeight: '30px',
									padding: '0 10px',
									borderRadius: '5px',
									fontSize: '12px',
									color: '#333',
									backgroundColor: '#fff',
									boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
									width: '100%',
									'&:hover': { color: 'unset', background: 'unset' },
									'&:disabled': { borderColor: '#ddd', boxShadow: 'none', opacity: 1, color: '#999', cursor: 'default' },
								},
								'input[type="checkbox"]': { height: '18px', width: '18px', margin: '6px 0', border: '1px solid #ccc' },
								button: {
									border: 0,
									outline: 0,
									cursor: 'pointer',
									borderRadius: '4px',
									color: '#fff',
									backgroundColor: '#283e57',
									'&:hover': { color: '#fff', backgroundColor: '#0e1f33ff' },
								},
								'input[type="number"]': { width: '50px' },
								'input[type="color"]': {
									width: '70px',
									height: '30px',
									border: '1px solid #ccc',
									borderRadius: '5px',
									outline: 'none',
									boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
									padding: 0,
									margin: '0 5px 0 0',
									'&::-moz-color-swatch': { border: 'none' },
									'&::-webkit-color-swatch-wrapper': { padding: 0, borderRadius: 0 },
									'&::-webkit-color-swatch': { border: 'none' },
								},
								textarea: { width: '100%', height: '200px', border: '1px solid #ccc', color: '#777', padding: '10px' },
								'.reset': {
									flex: '0 0 30px',
									display: 'flex',
									justifyContent: 'flex-end',
									button: {
										'&:hover': { background: 'unset' },
										margin: '0 0.5em',
										padding: 0,
										background: 'unset',
										border: 'unset',
										cursor: 'pointer',
										boxShadow: 'unset',
										height: 'unset',
										svg: { fill: '#1c71bf', height: '15px' },
									},
								},
								'.control-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
								'.group-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
								'.option': {
									display: 'flex',
									alignItems: 'center',
									marginBottom: '5px',
									fontSize: '12px',
									label: { flex: '0 0 12em' },
									'.value': {
										flex: '1 1 auto',
										display: 'flex',
										alignItems: 'center',
										'.invalid': { border: '1px solid #cc0000', outline: '1px solid #cc0000' },
									},
									'&.color-picker': { alignItems: 'center', '.value': { alignItems: 'center' } },
								},
							}),
					},
					C = (0, c.PA)((O) => {
						const { onRemoveClick: I, editorStore: u, snap: W } = O,
							P = { css: [f.TemplatesEditor(O)] };
						return (0, t.Y)(v._, {
							children: (0, t.FD)('div', {
								className: o()('ss__template-editor', { 'ss__template-editor--collapsed': u.storedState.hidden }),
								...P,
								onClick: (r) => {
									r.stopPropagation(), u.toggleHide(!1);
								},
								children: [
									(0, t.FD)('div', {
										className: 'ss__template-editor__header',
										children: [
											(0, t.Y)('div', {
												className: 'logo',
												onClick: (r) => {
													r.stopPropagation(), u.toggleHide(!1);
												},
												children: (0, t.Y)(A, {}),
											}),
											(0, t.FD)('div', {
												className: 'header-actions',
												onClick: (r) => {
													r.preventDefault(), r.stopPropagation(), u.toggleHide(!0);
												},
												children: [
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: (r) => {
																r.stopPropagation(), confirm('Closing the editor will disable modification.') && I();
															},
															children: 'Close',
														}),
													}),
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: (r) => {
																r.stopPropagation();
																const E = u.generateTemplatesConfig();
																navigator.clipboard.writeText(JSON.stringify(E, null, 4)), alert('Configuration copied to clipboard');
															},
															children: 'Copy',
														}),
													}),
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: () => {
																u.toggleHide(!0);
															},
															children: 'Hide',
														}),
													}),
												],
											}),
										],
									}),
									(0, t.FD)('aside', {
										children: [
											(0, t.Y)('div', {
												className: 'tab-selection',
												children: u.tabs.map((r, E) =>
													(0, t.Y)(
														'div',
														{
															className: o()('tab', { active: u.storedState.activeTab === r }),
															onClick: () => {
																u.switchTabs(r);
															},
															children: r,
														},
														E
													)
												),
											}),
											(0, t.FD)('div', {
												className: 'tab-view',
												children: [
													(0, t.Y)('div', { className: 'tab-view-shadow' }),
													(0, t.FD)('div', {
														className: 'tab-view-content',
														children: [
															u.storedState.activeTab === 'templates'
																? (0, t.FD)(t.FK, {
																		children: [
																			(0, t.Y)('h1', { children: 'Search' }),
																			(0, t.Y)(U, { editorStore: u, data: 0, feature: 'targets/search' }),
																			(0, t.Y)(U, { editorStore: u, data: W.getTemplateController('search'), feature: 'controllers/search' }),
																			(0, t.Y)('h1', { children: 'Autocomplete' }),
																			(0, t.Y)(U, { editorStore: u, data: 0, feature: 'targets/autocomplete' }),
																			(0, t.Y)(U, {
																				editorStore: u,
																				data: W.getTemplateController('autocomplete'),
																				feature: 'controllers/autocomplete',
																			}),
																		],
																  })
																: '',
															u.storedState.activeTab === 'configuration'
																? (0, t.FD)(t.FK, {
																		children: [
																			(0, t.Y)(U, { title: 'Project Configuration', editorStore: u, feature: 'templates/config' }),
																			(0, t.Y)(U, { title: 'Theme Configuration', editorStore: u, feature: 'templates/theme' }),
																		],
																  })
																: '',
														],
													}),
													(0, t.Y)('div', { className: 'tab-view-shadow bottom' }),
												],
											}),
										],
									}),
									(0, t.Y)('footer', {}),
								],
							}),
						});
					});
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useLang.tsx'),
					U = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(f);
				const O = ({ vertical: P, theme: r }) =>
						(0, T.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: P ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: r?.variables?.colors?.primary } },
								},
							},
						}),
					I = (P) => P?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					u = (P, r) => {
						if (P && r) {
							const E = P.match(I(r));
							if (r && P && E && typeof E.index == 'number') {
								const y = P.slice(0, E.index),
									i = P.slice(E.index + r.length, P.length);
								return `${y ? `<em>${y}</em>` : ''}${r}${i ? `<em>${i}</em>` : ''}`;
							}
						}
						return `<em>${P}</em>`;
					},
					W = (0, _.PA)((P) => {
						const r = (0, A.u)(),
							y = { vertical: !0, previewOnHover: !0, treePath: (0, L.LU)() },
							i = (0, l.v6)('terms', r, y, P),
							{ title: D, onTermClick: h, limit: Y, previewOnHover: p, emIfy: R, className: N, internalClassName: H, controller: s } = i,
							b = s?.store?.state?.input,
							$ = i.terms,
							{ overrideElement: Z, shouldRenderDefault: z } = (0, U._)('terms', i);
						if (!z) return Z;
						const j = (0, a.Z)(i, O),
							J = (B, g) => {
								h && h(B, g), s?.setFocused && s?.setFocused();
							},
							k = Y ? $?.slice(0, Y) : $,
							V = { title: { value: D } },
							d = C()(V, i.lang || {}),
							m = (0, M.u)({ title: d.title }, { controller: s }, { activeBreakpoint: r?.activeBreakpoint });
						return k?.length
							? (0, t.Y)(v._, {
									children: (0, t.FD)('div', {
										...j,
										className: c()('ss__terms', N, H),
										children: [
											D ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...m.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': D,
												children: k?.map((B, g) => {
													const K = {
															term: {
																value: `${R ? u(B.value, b || '') : B.value}`,
																attributes: { 'aria-label': `${D || ''} item ${g + 1} of ${k.length}, ${B.value}` },
															},
														},
														S = C()(K, i.lang || {}),
														G = (0, M.u)({ term: S.term }, { index: g, numberOfTerms: k.length, term: B }, { activeBreakpoint: r?.activeBreakpoint });
													return (0, t.Y)('li', {
														className: c()('ss__terms__option', { 'ss__terms__option--active': B.active }),
														children: (0, t.Y)('a', { onClick: (X) => J(X, B), href: B.url.href, ...(p ? (0, n.l)(B.preview) : {}), ...G.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(x, ['i', 0, W]);
			},
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					o = e.n(T),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					A = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					n = e('./components/src/utilities/mergeStyles.ts'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const U = ({ componentTheme: W }) =>
						(0, _.AH)({
							width: '360px',
							height: '120px',
							overflow: 'hidden',
							fontSize: '14px',
							position: 'fixed',
							zIndex: '9999',
							cursor: 'auto',
							bottom: '50px',
							right: 0,
							padding: '0 5px',
							background: W.main.background,
							color: W.main.color,
							border: W.main.border,
							borderTopLeftRadius: '10px',
							borderBottomLeftRadius: '10px',
							boxShadow: W.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-323px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px 5px',
								background: W.top.background,
								borderBottom: W.top.border,
								'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
								'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', paddingTop: '7px', cursor: 'pointer' },
								'.ss__branch-override__top__button': {
									borderRadius: '5px',
									padding: '6px',
									height: '100%',
									lineHeight: '14px',
									textAlign: 'center',
									cursor: 'pointer',
									fontSize: '10px',
									border: W.top.button.border,
									color: W.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: W.bottom.branch.style,
									color: W.bottom.branch.color,
									fontSize: '14px',
									lineHeight: '20px',
									display: 'inline-flex',
									alignItems: 'center',
									maxWidth: '180px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									svg: { marginRight: '10px' },
								},
								'.ss__branch-override__bottom__right': {
									float: 'right',
									fontStyle: 'italic',
									color: W.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					I = {
						darkTheme: {
							class: 'ss__branch-override--dark',
							main: { border: '0', background: 'rgba(26, 29, 36, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #454c5f',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
						lightTheme: {
							class: 'ss__branch-override--light',
							main: { border: '0', background: 'rgba(29, 73, 144, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #3c78d7',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
						failureTheme: {
							class: 'ss__branch-override--error',
							main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #e50b0b',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Incorrect branch name or branch no longer exists.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
					},
					u = (W) => {
						const P = (0, l.u)(),
							E = { treePath: (0, a.LU)() },
							y = (0, L.v6)('branchOverride', P, E, W),
							{
								branch: i,
								details: D,
								error: h,
								className: Y,
								internalClassName: p,
								darkMode: R,
								disableStyles: N,
								onRemoveClick: H,
								treePath: s,
							} = y,
							{ overrideElement: b, shouldRenderDefault: $ } = (0, M._)('branchOverride', y);
						if (!$) return b;
						const Z = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, A.s)({ disableStyles: N }),
									theme: y?.theme,
									treePath: s,
								},
							},
							z = typeof R == 'boolean' ? R : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[j, J] = (0, c.J0)(z ? 'darkTheme' : 'lightTheme'),
							[k, V] = (0, c.J0)(0);
						h && J('failureTheme');
						const d = (0, n.Z)({ ...y, componentTheme: I[j] }, U);
						return (D || h) && i
							? (0, t.FD)('div', {
									className: o()('ss__branch-override', I[j].class, { 'ss__branch-override--collapsed': k }, Y, p),
									...d,
									onClick: (m) => {
										m.preventDefault(), m.stopPropagation(), V(0);
									},
									children: [
										(0, t.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, t.Y)('img', { className: 'ss__branch-override__top__logo', src: I[j].top.logo.src }),
												(0, t.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (m) => {
														m.preventDefault(), m.stopPropagation(), V(1);
													},
													children: (0, t.Y)(v.I, { size: '18px', color: I[j].top.close.fill, ...Z.icon, icon: 'close-thin' }),
												}),
												(0, t.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (m) => {
														m.preventDefault(), m.stopPropagation(), H && H(m, i);
													},
													children: I[j].top.button.content,
												}),
											],
										}),
										(0, t.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, t.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: h
														? (0, t.FD)(t.FK, {
																children: [
																	(0, t.Y)(v.I, { size: '12px', color: I[j].bottom.branch.color, ...Z.icon, icon: 'warn' }),
																	(0, t.Y)('span', { children: h.message }),
																],
														  })
														: i,
												}),
												(0, t.Y)('span', { className: 'ss__branch-override__bottom__right', children: h ? i : D?.lastModified }),
												(0, t.Y)('div', { className: 'ss__branch-override__bottom__content', children: h?.description || I[j].bottom.content }),
											],
										}),
									],
							  })
							: null;
					};
				e.d(x, ['n', 0, u]);
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('./components/src/providers/cache.tsx'),
					A = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const f = ({}) =>
						(0, T.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					C = (0, _.PA)((O) => {
						const I = (0, A.u)(),
							u = (0, L.LU)(),
							W = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: u,
							},
							P = (0, a.v6)('termsList', I, W, O),
							{
								layout: r,
								historyTitle: E,
								verticalOptions: y,
								trendingTitle: i,
								suggestionTitle: D,
								retainHistory: h,
								retainTrending: Y,
								treePath: p,
								disableStyles: R,
								className: N,
								internalClassName: H,
								controller: s,
							} = P,
							{ overrideElement: b, shouldRenderDefault: $ } = (0, n._)('termsList', P);
						if (!$) return b;
						const Z = { terms: { vertical: !!y, ...(0, l.s)({ disableStyles: R }), theme: P.theme, treePath: p } },
							z = (0, M.Z)(P, f),
							j = s?.store.history || [],
							J = s?.store.terms || [],
							k = s?.store.trending || [],
							V = k?.filter((F) => F.active).pop(),
							d = j?.filter((F) => F.active).pop(),
							{ loaded: m, results: B, state: g } = s?.store;
						let K = !1;
						k?.length && ((Y && m) || (!B.length && !g.input)) && (K = !0);
						let S = !1;
						j?.length && ((h && m) || (!B.length && !g.input)) && (S = !0),
							!s.store.state.input && (d || V) && (j?.length && (S = !0), k?.length && (K = !0));
						const G = (F) => {
								if (typeof F != 'string') {
									const w = F?.map((Q) => G(Q));
									return F?.some((Q, ne) => Q !== '_' && w[ne]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: w }) : null;
								}
								if (F == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if (F == 'History' && S)
									return (0, t.Y)(U.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: E,
										terms: j,
										controller: s,
										name: 'history',
										limit: s.config.settings?.history?.limit,
										...Z.terms,
									});
								if (F == 'Trending' && K)
									return (0, t.Y)(U.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: i,
										terms: k,
										controller: s,
										name: 'trending',
										limit: s.config.settings?.trending?.limit,
										...Z.terms,
									});
								if (F == 'Suggestions')
									return J.length
										? (0, t.Y)(U.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: D,
												terms: J,
												controller: s,
												name: 'suggestions',
												...Z.terms,
										  })
										: null;
							},
							X = r?.map((F) => G(F));
						return X?.some(Boolean)
							? (0, t.Y)(v._, { children: (0, t.Y)('div', { ...z, className: c()('ss__terms-list', N, H), children: X }) })
							: null;
					});
				e.d(x, ['G', 0, C]);
			},
			'./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					v = e.n(c),
					A = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					f = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const C = () =>
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
					O = (0, T.PA)((I) => {
						const u = (0, L.u)(),
							P = {
								treePath: (0, n.LU)(),
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
							r = (0, a.v6)('quickviewModal', u, P, I),
							{
								quickviewManager: E,
								className: y,
								internalClassName: i,
								disableStyles: D,
								treePath: h,
								layout: Y,
								hideBadge: p,
								column1: R,
								column2: N,
								column3: H,
								column4: s,
								recommendation: b,
								lang: $,
							} = r,
							Z = (0, _.li)(null),
							z = (0, _.li)(null),
							j = (0, _.li)(!1);
						(0, _.vJ)(() => {
							const K = !!E?.store?.isOpen;
							K && !j.current
								? ((z.current = document.activeElement || null), Z.current?.querySelector('.ss__quickview__close')?.focus())
								: !K && j.current && (z.current?.focus?.(), (z.current = null)),
								(j.current = K);
						});
						const J = (0, M.Z)(r, C);
						if (!E)
							return (
								console.warn('[QuickviewModal] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const k = E.store,
							V = k.product,
							d = !!k.isOpen,
							m = () => E.close(),
							B = {
								quickviewLayout: {
									onClose: m,
									...(0, l.s)({ hideBadge: p, column1: R, column2: N, column3: H, column4: s, recommendation: b, lang: $ }),
									...(0, l.s)({ disableStyles: D }),
									theme: r?.theme,
									treePath: h,
								},
								modal: { onOverlayClick: m, ...(0, l.s)({ disableStyles: D }), theme: r?.theme, treePath: h },
							},
							g = (0, t.Y)(f.p, { quickviewManager: E, ...B.quickviewLayout, layout: Y });
						return (0, t.Y)(A._, {
							children: (0, t.Y)('div', {
								...J,
								ref: Z,
								className: v()('ss__quickview-modal', y, i),
								onClick: (K) => K.stopPropagation(),
								children: (0, t.Y)(U.a, {
									...B.modal,
									open: d,
									children: V ? (0, t.Y)(f.n, { quickviewManager: E, product: V, children: g }, `${V.responseId}-${V.id}`) : g,
								}),
							}),
						});
					});
				e.d(x, ['_', 0, O]);
			},
			'./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					v = e.n(c),
					A = e('./components/src/providers/cache.tsx'),
					L = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					f = e('./components/src/components/Organisms/QuickviewLayout/QuickviewLayout.tsx');
				const C = () =>
						(0, o.AH)({
							'& .ss__slideout': { zIndex: 10006 },
							'& .ss__slideout__overlay': { zIndex: '10005 !important' },
							'& .ss__quickview__content': { minWidth: 'auto', maxWidth: '100%' },
						}),
					O = (0, T.PA)((I) => {
						const u = (0, L.u)(),
							P = {
								treePath: (0, n.LU)(),
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
							r = (0, a.v6)('quickviewSlideout', u, P, I),
							{
								quickviewManager: E,
								className: y,
								internalClassName: i,
								disableStyles: D,
								treePath: h,
								layout: Y,
								hideBadge: p,
								column1: R,
								column2: N,
								column3: H,
								column4: s,
								recommendation: b,
								slideDirection: $,
								width: Z,
								overlayColor: z,
								lang: j,
							} = r,
							[J, k] = (0, _.J0)(!1);
						(0, _.vJ)(() => {
							k(!0);
						}, []);
						const V = (0, _.li)(null),
							d = (0, _.li)(null),
							m = (0, _.li)(!1);
						(0, _.vJ)(() => {
							const w = !!E?.store?.isOpen && J;
							w && !m.current
								? ((d.current = document.activeElement || null), V.current?.querySelector('.ss__quickview__close')?.focus())
								: !w && m.current && (d.current?.focus?.(), (d.current = null)),
								(m.current = w);
						});
						const B = (0, M.Z)(r, C);
						if (!E)
							return (
								console.warn('[QuickviewSlideout] No quickviewManager provided; quickview cannot function without a QuickviewManager instance.'), null
							);
						const g = E.store,
							K = g.product,
							S = !!g.isOpen && J,
							G = () => E.close(),
							X = {
								quickviewLayout: {
									onClose: G,
									...(0, l.s)({ hideBadge: p, column1: R, column2: N, column3: H, column4: s, recommendation: b, lang: j }),
									...(0, l.s)({ disableStyles: D }),
									theme: r?.theme,
									treePath: h,
								},
								slideout: {
									rerender: !1,
									slideDirection: $,
									width: Z,
									overlayColor: z,
									onChange: (w) => {
										w || G();
									},
									...(0, l.s)({ disableStyles: D }),
									theme: r?.theme,
									treePath: h,
								},
							},
							F = (0, t.Y)(f.p, { quickviewManager: E, ...X.quickviewLayout, layout: Y });
						return (0, t.Y)(A._, {
							children: (0, t.Y)('div', {
								...B,
								ref: V,
								className: v()('ss__quickview-slideout', y, i),
								onClick: (w) => w.stopPropagation(),
								children: (0, t.Y)(U.S, {
									...X.slideout,
									active: S,
									children: K ? (0, t.Y)(f.n, { quickviewManager: E, product: K, children: F }, `${K.responseId}-${K.id}`) : F,
								}),
							}),
						});
					});
				e.d(x, ['S', 0, O]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					L = e.n(A),
					n = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					l = e('./components/src/components/Molecules/Result/Result.tsx'),
					a = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					U = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/utilities/lazyRenderMinSize.ts'),
					O = e('./components/src/hooks/useIntersection.tsx'),
					I = e('./components/src/hooks/useComponent.tsx'),
					u = e('./components/src/providers/cache.tsx'),
					W = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/snap.tsx'),
					r = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/hooks/useDisplaySettings.tsx'),
					y = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					i = e('./components/src/hooks/useLang.tsx'),
					D = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const h = ({ vertical: p }) =>
						(0, T.AH)({ ...C.k, height: p ? '100%' : void 0, '.ss__result__image-wrapper': { height: p ? '85%' : void 0 } }),
					Y = (0, v.PA)((p) => {
						const R = (0, W.u)(),
							N = (0, r.LU)(),
							H = {
								breakpoints: p.vertical ? JSON.parse(JSON.stringify(n.og)) : JSON.parse(JSON.stringify(n.K)),
								pagination: !1,
								loop: !0,
								title: p.controller?.store?.profile?.display?.templateParameters?.title,
								description: p.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: N,
							},
							s = { name: p.controller?.store?.profile?.tag?.toLowerCase(), ...p };
						let b = (0, U.v6)('recommendation', R, H, s),
							$;
						!(p.theme?.type == 'templates' || R?.type == 'templates') &&
							b.breakpoints &&
							(($ = (0, E.X)(b.breakpoints)), $ && Object.keys($).length && (b = { ...b, ...$ }));
						const {
								title: Z,
								description: z,
								controller: j,
								children: J,
								loop: k,
								results: V,
								pagination: d,
								nextButton: m,
								prevButton: B,
								hideButtons: g,
								disableStyles: K,
								className: S,
								internalClassName: G,
								style: X,
								styleScript: F,
								themeStyleScript: w,
								lazyRender: oe,
								vertical: Q,
								hideTitle: ne,
								treePath: ee,
								...le
							} = b,
							re = b.resultComponent,
							se = (0, P.uk)(),
							te = typeof re == 'string',
							ce = te ? re : '',
							Ee = se?.templates?.library.import.component.result || {},
							{ ComponentOverride: me, shouldWaitForNamedOverride: Me } = (0, I.x)(Ee, te ? ce : void 0),
							he = te ? me : re,
							_e = { enabled: !0, offset: '10%', ...oe };
						if (!j || j.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const ie = V || j.store?.results;
						if (Array.isArray(J) && J.length !== ie.length)
							return (
								j.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const de = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, M.s)({ disableStyles: K, vertical: Q }),
									theme: b?.theme,
									treePath: ee,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, M.s)({ disableStyles: K }), theme: b?.theme, treePath: ee },
							},
							Oe = (0, f.Z)(b, h),
							[De, ge] = (0, _.J0)(!1),
							Pe = (0, _.li)(null);
						(!_e?.enabled || (0, O.v)(Pe, `${_e.offset} 0px ${_e.offset} 0px`, !0)) && ge(!0);
						const xe = { titleText: { value: `${Z}` } },
							Te = L()(xe, b.lang || {}),
							ve = (0, i.u)(Te, {}, { activeBreakpoint: R?.activeBreakpoint });
						return (Array.isArray(J) && J.length) || ie?.length
							? (0, t.Y)(u._, {
									children: (0, t.Y)('div', {
										...Oe,
										style: K ? C.k : void 0,
										className: c()('ss__recommendation', S, G),
										ref: Pe,
										children: De
											? (0, t.FD)(y.l, {
													controller: j,
													children: [
														Z && !ne && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...ve.titleText?.all, children: Z }),
														z && (0, t.Y)('p', { className: 'ss__recommendation__description', children: z }),
														(0, t.Y)(n.FN, {
															prevButton: B,
															nextButton: m,
															hideButtons: g,
															loop: k,
															pagination: d,
															...de.carousel,
															...le,
															children:
																Array.isArray(J) && J.length
																	? J.map((ae, ue) => (0, t.Y)(D.o, { controller: j, result: ie[ue], children: ae }))
																	: ie.map((ae) =>
																			(0, t.Y)(D.o, {
																				controller: j,
																				result: ae,
																				children:
																					he && j
																						? (0, a.Y)(he, {
																								controller: j,
																								result: ae,
																								treePath: de.result.treePath,
																								theme: te ? L()(b.theme || {}, { components: { result: { customComponent: re } } }) : b.theme,
																						  })
																						: Me
																						? null
																						: (0, t.Y)(l.Q, { ...de.result, controller: j, result: ae }, ae.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(y.l, {
													controller: j,
													children:
														Array.isArray(J) && J.length
															? J.map((ae, ue) => (0, t.Y)(D.o, { controller: j, result: ie[ue], children: (0, t.Y)(t.FK, {}) }))
															: ie.map((ae) => (0, t.Y)(D.o, { controller: j, result: ae, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(x, ['A', 0, Y]);
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const n = () => (0, _.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					l = 'recommendationBundleEasyAdd',
					a = (0, o.PA)((M) => {
						const U = (0, T.u)(),
							f = { name: M.controller?.store?.profile?.tag?.toLowerCase(), ...M },
							{ treePath: C, disableStyles: O, controller: I, style: u, styleScript: W, themeStyleScript: P, ...r } = f,
							E = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: l,
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, c.s)({ disableStyles: O }),
									theme: f?.theme,
									treePath: C,
								},
							},
							y = (0, v.v6)(l, U, {}, f),
							i = (0, A.Z)(y, n);
						return (0, t.Y)(L.g, { controller: I, ...i, ...E.recommendationBundle, ...r });
					});
				e.d(x, ['F', 0, a]);
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					n = e('./components/src/components/Atoms/Price/Price.tsx'),
					l = e('./components/src/components/Atoms/Button/Button.tsx'),
					a = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = e('./components/src/components/Atoms/Image/Image.tsx'),
					U = e('./components/src/utilities/componentNameToClassName.ts'),
					f = e('../../node_modules/classnames/index.js'),
					C = e.n(f),
					O = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = e('../../node_modules/deepmerge/dist/cjs.js'),
					u = e.n(I),
					W = e('./components/src/hooks/useLang.tsx');
				const P = () =>
						(0, _.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					r = 'recommendationBundleList',
					E = (0, o.PA)((i) => {
						const D = (0, T.u)(),
							h = { name: i.controller?.store?.profile?.tag?.toLowerCase(), ...i },
							{ treePath: Y, disableStyles: p, controller: R, style: N, styleScript: H, themeStyleScript: s, ...b } = h,
							$ = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (j) => (0, t.Y)(y, { ...j }),
									vertical: !0,
									separatorIcon: !1,
									alias: r,
									...(0, c.s)({ disableStyles: p }),
									theme: h?.theme,
									treePath: Y,
								},
							},
							Z = (0, v.v6)(r, D, {}, h),
							z = (0, A.Z)(Z, P);
						return (0, t.Y)(L.g, { controller: R, ...z, ...$.recommendationBundle, ...b });
					}),
					y = (0, o.PA)((i) => {
						const D = i.cartStore,
							h = `ss__${(0, U.b)(r)}`;
						i.onAddToCart = (s) => {
							p(!0), i.onAddToCart(s), setTimeout(() => p(!1), i.ctaButtonSuccessTimeout);
						};
						const [Y, p] = (0, O.J0)(!1);
						i.addedToCart = Y;
						const R = {
								image: { className: `${h}__wrapper__cta__image`, theme: i?.theme, treePath: i.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${h}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: i?.theme,
									treePath: i.treePath,
								},
								icon: { name: 'bundle-cart', className: `${h}__wrapper__cta__icon`, size: 50, theme: i?.theme, treePath: i.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${h}__wrapper__cta__price--strike`, theme: i?.theme, treePath: i.treePath },
								subtotalPrice: { className: `${h}__wrapper__cta__price`, name: 'bundle-price', theme: i?.theme, treePath: i.treePath },
								button: { className: `${h}__wrapper__cta__button`, theme: i?.theme, treePath: i.treePath },
							},
							N = u()({}, i.lang || {}),
							H = (0, W.u)(N, {}, { activeBreakpoint: i?.theme?.activeBreakpoint });
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${h}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${h}__wrapper__cta__inner__images`,
											children: D.items.map((s) => {
												const b = s.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${h}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: b.url, children: (0, t.Y)(M._, { src: b.thumbnailImageUrl, alt: b.name, lazy: !1 }) }),
														(0, t.Y)(a.I, { ...R.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${h}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												i.ctaIcon
													? (0, t.Y)('div', {
															className: `${h}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(a.I, { ...R.icon, ...(typeof i.ctaIcon == 'string' ? { icon: i.ctaIcon } : i.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${h}__wrapper__cta__subtotal__title`, children: `Subtotal for ${D.count} items` }),
												(0, t.FD)('div', {
													className: `${h}__wrapper__cta__subtotal__prices`,
													children: [
														D.msrp && D.msrp !== D.price
															? (0, t.FD)('label', {
																	className: `${h}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(n.g, { ...R.subtotalStrike, lineThrough: !0, value: D.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${h}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(n.g, { ...R.subtotalPrice, value: D.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${h}__cta__button__wrapper`,
									children: (0, t.Y)(l.$, {
										...R.button,
										disabled: D.items.length == 0,
										disableStyles: !0,
										internalClassName: C()(`${h}__cta__button`, { [`${h}__cta__button--added`]: Y }),
										'aria-live': Y,
										onClick: (s) => i.onAddToCart(s),
										...(Y ? H.ctaButtonSuccessText?.all : H.ctaButtonText?.all),
										children: i.addedToCart ? i.ctaButtonSuccessText : i.ctaButtonText,
									}),
								}),
							],
						});
					});
				e.d(x, ['X', 0, y, 'a', 0, E]);
			},
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					L = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const n = () =>
						(0, _.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					l = 'recommendationBundleVertical',
					a = (0, o.PA)((M) => {
						const U = (0, T.u)(),
							f = { name: M.controller?.store?.profile?.tag?.toLowerCase(), ...M },
							{ treePath: C, disableStyles: O, controller: I, style: u, styleScript: W, themeStyleScript: P, ...r } = f,
							E = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: l,
									...(0, c.s)({ disableStyles: O }),
									theme: f?.theme,
									treePath: C,
								},
							},
							y = (0, v.v6)(l, U, {}, f),
							i = (0, A.Z)(y, n);
						return (0, t.Y)(L.g, { controller: I, ...i, ...E.recommendationBundle, ...r });
					});
				e.d(x, ['a', 0, a]);
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					c = e.n(o),
					v = e('../../node_modules/classnames/index.js'),
					A = e.n(v),
					L = e('./components/src/components/Molecules/Result/Result.tsx'),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					U = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useComponent.tsx');
				const I = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					u = () => (0, _.AH)({}),
					W = (0, T.PA)((P) => {
						const r = (0, U.u)(),
							E = (0, C.LU)(),
							y = { resultWidth: '240px', name: P.controller?.store?.profile?.tag?.toLowerCase(), treePath: E },
							i = (0, a.v6)('recommendationEmail', r, y, P),
							{ controller: D, results: h, resultWidth: Y, treePath: p, disableStyles: R, internalClassName: N, className: H } = i,
							s = i.resultComponent,
							b = (0, f.uk)(),
							$ = typeof s == 'string',
							Z = $ ? s : '',
							z = b?.templates?.library.import.component.result || {},
							{ ComponentOverride: j, shouldWaitForNamedOverride: J } = (0, O.x)(z, $ ? Z : void 0),
							k = $ ? j : s,
							V = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, l.s)({ disableStyles: R }), theme: i?.theme, treePath: p },
							},
							d = (0, M.Z)(i, u),
							m = h || D?.store?.results || [];
						return m.length > 0
							? (0, t.Y)('div', {
									className: A()('ss__recommendation-email', H, N),
									...d,
									children: m.map((B, g) =>
										(0, t.Y)(
											'div',
											{
												id: `ss-emailrec${g}`,
												className: A()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: Y },
												children: k
													? (0, n.Y)(k, {
															controller: D,
															result: B,
															email: !0,
															theme: $ ? c()(i.theme || {}, { components: { result: { customComponent: s }, image: { lazy: !1 } } }) : i.theme,
															treePath: p,
													  })
													: J
													? null
													: (0, t.Y)(L.Q, { result: B, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...V.result }),
											},
											g
										)
									),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(x, ['O', 0, I, 'i', 0, W]);
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					c = e.n(o),
					v = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(v),
					L = e('./components/src/components/Molecules/Result/Result.tsx'),
					n = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					a = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/utilities/lazyRenderMinSize.ts'),
					f = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/snap.tsx'),
					I = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useDisplaySettings.tsx'),
					W = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					P = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = e('../../node_modules/preact/compat/dist/compat.module.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = e('./components/src/hooks/useIntersection.tsx'),
					i = e('./components/src/hooks/useComponent.tsx');
				const D = ({ gapSize: Y, columns: p }) =>
						(0, T.AH)({
							...U.k,
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: Y,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${p}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					h = (0, _.PA)((Y) => {
						const p = (0, C.u)(),
							R = (0, I.LU)(),
							N = {
								results: Y.controller?.store?.results,
								gapSize: '20px',
								title: Y.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: R,
							},
							H = { name: Y.controller?.store?.profile?.tag?.toLowerCase(), ...Y };
						let s = (0, a.v6)('recommendationGrid', p, N, H);
						if (!(Y.theme?.type == 'templates' || p?.type == 'templates')) {
							const te = (0, u.X)(s?.breakpoints || {}),
								ce = A()(s?.theme || {}, te?.theme || {}, { arrayMerge: (Ee, me) => me });
							s = { ...s, ...te, theme: ce };
						}
						const {
								disableStyles: b,
								title: $,
								trim: Z,
								lazyRender: z,
								className: j,
								internalClassName: J,
								treePath: k,
								theme: V,
								controller: d,
							} = s,
							m = s.resultComponent,
							B = (0, O.uk)(),
							g = typeof m == 'string',
							K = g ? m : '',
							S = B?.templates?.library.import.component.result || {},
							{ ComponentOverride: G, shouldWaitForNamedOverride: X } = (0, i.x)(S, g ? K : void 0),
							F = g ? G : m,
							w = { enabled: !0, offset: '10%', ...z },
							oe = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, l.s)({ disableStyles: b }), theme: s?.theme } };
						let Q = s.results || d.store.results;
						if (!s.columns && !s.rows) (s.rows = 1), (s.columns = Q.length);
						else if (s.columns && !s.rows) {
							if (((s.rows = Math.floor(Q.length / s.columns)), Z)) {
								const te = Q.length % s.columns;
								Q = Q.slice(0, Q.length - te);
							}
						} else if (s.rows && !s.columns) {
							if (Z) {
								const te = Q.length % s.rows;
								Q = Q.slice(0, Q.length - te);
							}
							s.columns = Math.ceil(Q.length / s.rows);
						} else s?.columns && s?.rows && s.columns > 0 && s.rows > 0 && (Q = Q?.slice(0, s.columns * s.rows));
						const ne = (0, M.Z)(s, D),
							[ee, le] = (0, r.useState)(!1),
							re = (0, E.li)(null);
						return (
							(!w?.enabled || (0, y.v)(re, `${w.offset} 0px ${w.offset} 0px`, !0)) && le(!0),
							Q?.length
								? (0, t.Y)(f._, {
										children: (0, t.Y)('div', {
											...ne,
											style: b ? U.k : void 0,
											ref: re,
											className: c()('ss__recommendation-grid', j, J),
											children: ee
												? (0, t.FD)(W.l, {
														controller: d,
														children: [
															$ && (0, t.Y)('h3', { className: 'ss__recommendation-grid__title', children: $ }),
															(0, t.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: Q.map((te) =>
																	F && d
																		? (0, n.Y)(F, {
																				controller: d,
																				result: te,
																				theme: g ? A()(V || {}, { components: { result: { customComponent: m } } }) : V,
																				treePath: k,
																		  })
																		: X
																		? null
																		: (0, t.Y)(P.o, {
																				result: te,
																				controller: d,
																				children: (0, t.Y)(L.Q, { ...oe.result, result: te, controller: d, treePath: k }, te.id),
																		  })
																),
															}),
														],
												  })
												: (0, t.Y)(W.l, {
														controller: d,
														children: Q.map((te) => (0, t.Y)(P.o, { controller: d, result: te, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
				e.d(x, ['q', 0, h]);
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/providers/cache.tsx'),
					o = e('./components/src/components/Templates/Search/Search.tsx');
				const c = (0, _.PA)((v) => (0, t.Y)(T._, { children: (0, t.Y)(o.v, { ...v, alias: 'searchCollapsible' }) }));
				e.d(x, ['x', 0, c]);
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(q, x, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/providers/cache.tsx'),
					o = e('./components/src/components/Templates/Search/Search.tsx');
				const c = (0, _.PA)((v) =>
					(0, t.Y)(T._, { children: (0, t.Y)(o.v, { ...v, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(x, ['j', 0, c]);
			},
			'./components/src/components/Trackers/ResultTracker/index.ts'() {},
			'./components/src/hooks/useConstructor.tsx'(q, x, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (T = () => {}) => {
					const o = (0, t.li)(!1);
					o.current || (T(), (o.current = !0));
				};
				e.d(x, ['Q', 0, _]);
			},
			'./components/src/index.ts'(q, x, e) {
				e.r(x),
					e.d(x, {
						A11Y_ATTRIBUTE: () => Ce.aZ,
						Autocomplete: () => _e.j,
						BadgeImage: () => t.z,
						BadgePill: () => _.L,
						BadgeRectangle: () => T.Z,
						BadgeText: () => o.p,
						Banner: () => c.l,
						BranchOverride: () => le.n,
						Breadcrumbs: () => v.B,
						Button: () => A.$,
						CTASlot: () => fe.X,
						CalloutBadge: () => P.W,
						Carousel: () => r.FN,
						Checkbox: () => E.S,
						Dropdown: () => L.m,
						ErrorHandler: () => y.z,
						FALLBACK_IMAGE_URL: () => a.t,
						FOCUSABLE_ELEMENTS: () => Ce.DH,
						Facet: () => re.s,
						FacetDisplay: () => Be.Q,
						FacetGridOptions: () => i.S,
						FacetHierarchyOptions: () => D.T,
						FacetListOptions: () => h.C,
						FacetPaletteOptions: () => Y.P,
						FacetSlider: () => p.l,
						Facets: () => se.J,
						FacetsHorizontal: () => te.b,
						Filter: () => R.d,
						FilterSummary: () => ce.r,
						FormattedNumber: () => n.G,
						Gallery: () => k.Z,
						Grid: () => b.x,
						Icon: () => l.I,
						Image: () => a._,
						InlineBanner: () => M._,
						Lang: () => Ie.Lang,
						LayoutSelector: () => N.s,
						List: () => H.B,
						LoadMore: () => s.e,
						LoadingBar: () => U.G,
						Modal: () => $.a,
						NoResults: () => Ee.a,
						Overlay: () => f.h,
						OverlayBadge: () => Z.Q,
						Pagination: () => z.d,
						PaginationInfo: () => C.R,
						PerPage: () => j.F,
						Price: () => O.g,
						ProductDetail: () => I.J,
						ProductDetailTable: () => J.X,
						QuantityPicker: () => V.w,
						QuickviewModal: () => de._,
						QuickviewSlideout: () => Oe.S,
						Radio: () => d.s,
						RadioList: () => m.q,
						Rating: () => B.G,
						Recommendation: () => De.A,
						RecommendationBundle: () => ge.g,
						RecommendationBundleEasyAdd: () => Pe.F,
						RecommendationBundleList: () => fe.a,
						RecommendationBundleVertical: () => xe.a,
						RecommendationEmail: () => ve.i,
						RecommendationGrid: () => Te.q,
						RecommendationProfileTracker: () => Se.l,
						RecommendationResultTracker: () => Ae.o,
						RecommendationResultTrackerProps: () => be.ResultTrackerProps,
						Result: () => g.Q,
						ResultTracker: () => Ae.o,
						Results: () => me.n,
						ResultsLayout: () => Be.V,
						Search: () => ae.v,
						SearchCollapsible: () => Ue.x,
						SearchHeader: () => u.w,
						SearchHorizontal: () => ue.j,
						SearchInput: () => K.D,
						Select: () => S.l,
						Sidebar: () => Me.B,
						Skeleton: () => W.E,
						Slideout: () => G.S,
						Slideshow: () => Q.b,
						SortBy: () => X.g,
						Swatches: () => oe.l,
						TabSelection: () => F.E,
						TemplatesEditor: () => w.j,
						Terms: () => ee.i,
						TermsList: () => ie.G,
						Toolbar: () => he.M,
						VariantSelection: () => ne.m,
						base: () => pe.E3,
						bocachica: () => pe.SE,
						createHoverProps: () => ke.l,
						defaultCarouselBreakpoints: () => r.K,
						defaultVerticalCarouselBreakpoints: () => r.og,
						getDisplaySettings: () => Le.Q,
						iconPaths: () => l.c,
						pike: () => pe.Ct,
						recommendationEmailThemeComponentProps: () => ve.O,
						snapnco: () => pe.NZ,
						snappy: () => pe.mJ,
						useA11y: () => Ce.iy,
						useClickOutside: () => Ne.L,
						useConstructor: () => je.Q,
						useCreateController: () => ze.i,
						useDeepCompareEffect: () => ye.I,
						useDeepCompareMemoize: () => ye.r,
						useDisplaySettings: () => Le.X,
						useFuncDebounce: () => $e.d,
						useIntersection: () => Fe.v,
						useIntersectionAdvanced: () => He.v,
						useLang: () => Ie.u,
						useMediaQuery: () => Ye.U,
						useTracking: () => Ve.z,
					});
				var t = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'),
					_ = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					T = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					o = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					c = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					v = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					A = e('./components/src/components/Atoms/Button/Button.tsx'),
					L = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					n = e('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
					l = e('./components/src/components/Atoms/Icon/index.ts'),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					M = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					U = e('./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'),
					f = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					C = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					O = e('./components/src/components/Atoms/Price/Price.tsx'),
					I = e('./components/src/components/Atoms/ProductDetail/index.ts'),
					u = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					W = e('./components/src/components/Atoms/Skeleton/Skeleton.tsx'),
					P = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					r = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					E = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					y = e('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
					i = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					D = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					h = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
					Y = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					R = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					N = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					H = e('./components/src/components/Molecules/List/List.tsx'),
					s = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					b = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					$ = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					Z = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					z = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					j = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					J = e('./components/src/components/Molecules/ProductDetailTable/ProductDetailTable.tsx'),
					k = e('./components/src/components/Molecules/Gallery/Gallery.tsx'),
					V = e('./components/src/components/Molecules/QuantityPicker/QuantityPicker.tsx'),
					d = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					m = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					B = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					g = e('./components/src/components/Molecules/Result/Result.tsx'),
					K = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					S = e('./components/src/components/Molecules/Select/Select.tsx'),
					G = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					X = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					F = e('./components/src/components/Molecules/TabSelection/TabSelection.tsx'),
					w = e('./components/src/components/Molecules/TemplatesEditor/TemplatesEditor.tsx'),
					oe = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					Q = e('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					ne = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'),
					ee = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					le = e('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
					re = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					se = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					te = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					ce = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					Ee = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					me = e('./components/src/components/Organisms/Results/Results.tsx'),
					Me = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					he = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					_e = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					ie = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					de = e('./components/src/components/Templates/QuickviewModal/QuickviewModal.tsx'),
					Oe = e('./components/src/components/Templates/QuickviewSlideout/QuickviewSlideout.tsx'),
					De = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					ge = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					Pe = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					fe = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					xe = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'),
					Te = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					ve = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					ae = e('./components/src/components/Templates/Search/Search.tsx'),
					ue = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'),
					Ue = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'),
					Be = e('./components/src/types.ts'),
					Se = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					Ae = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					be = e('./components/src/components/Trackers/ResultTracker/index.ts'),
					Ne = e('./components/src/hooks/useClickOutside.tsx'),
					je = e('./components/src/hooks/useConstructor.tsx'),
					Ye = e('./components/src/hooks/useMediaQuery.tsx'),
					Fe = e('./components/src/hooks/useIntersection.tsx'),
					He = e('./components/src/hooks/useIntersectionAdvanced.tsx'),
					Le = e('./components/src/hooks/useDisplaySettings.tsx'),
					$e = e('./components/src/hooks/useFuncDebounce.tsx'),
					Ce = e('./components/src/hooks/useA11y.tsx'),
					Ie = e('./components/src/hooks/useLang.tsx'),
					ye = e('./components/src/hooks/useDeepCompareEffect.tsx'),
					ze = e('./components/src/hooks/useCreateController.tsx'),
					Ve = e('./components/src/hooks/useTracking.tsx'),
					We = e('./components/src/providers/index.ts'),
					Ke = {};
				for (const Re in We)
					[
						'RecommendationResultTracker',
						'RecommendationResultTrackerProps',
						'useLang',
						'Lang',
						'default',
						'BadgeImage',
						'BadgePill',
						'BadgeRectangle',
						'BadgeText',
						'Banner',
						'Breadcrumbs',
						'Button',
						'Dropdown',
						'FormattedNumber',
						'Icon',
						'iconPaths',
						'FALLBACK_IMAGE_URL',
						'Image',
						'InlineBanner',
						'LoadingBar',
						'Overlay',
						'PaginationInfo',
						'Price',
						'ProductDetail',
						'SearchHeader',
						'Skeleton',
						'CalloutBadge',
						'Carousel',
						'defaultCarouselBreakpoints',
						'defaultVerticalCarouselBreakpoints',
						'Checkbox',
						'ErrorHandler',
						'FacetGridOptions',
						'FacetHierarchyOptions',
						'FacetListOptions',
						'FacetPaletteOptions',
						'FacetSlider',
						'Filter',
						'LayoutSelector',
						'List',
						'LoadMore',
						'Grid',
						'Modal',
						'OverlayBadge',
						'Pagination',
						'PerPage',
						'ProductDetailTable',
						'Gallery',
						'QuantityPicker',
						'Radio',
						'RadioList',
						'Rating',
						'Result',
						'SearchInput',
						'Select',
						'Slideout',
						'SortBy',
						'TabSelection',
						'TemplatesEditor',
						'Swatches',
						'Slideshow',
						'VariantSelection',
						'Terms',
						'BranchOverride',
						'Facet',
						'Facets',
						'FacetsHorizontal',
						'FilterSummary',
						'NoResults',
						'Results',
						'Sidebar',
						'Toolbar',
						'Autocomplete',
						'TermsList',
						'QuickviewModal',
						'QuickviewSlideout',
						'Recommendation',
						'RecommendationBundle',
						'RecommendationBundleEasyAdd',
						'CTASlot',
						'RecommendationBundleList',
						'RecommendationBundleVertical',
						'RecommendationGrid',
						'RecommendationEmail',
						'recommendationEmailThemeComponentProps',
						'Search',
						'SearchHorizontal',
						'SearchCollapsible',
						'FacetDisplay',
						'ResultsLayout',
						'RecommendationProfileTracker',
						'ResultTracker',
						'useClickOutside',
						'useConstructor',
						'useMediaQuery',
						'useIntersection',
						'useIntersectionAdvanced',
						'getDisplaySettings',
						'useDisplaySettings',
						'useFuncDebounce',
						'A11Y_ATTRIBUTE',
						'FOCUSABLE_ELEMENTS',
						'useA11y',
						'useDeepCompareEffect',
						'useDeepCompareMemoize',
						'useCreateController',
						'useTracking',
					].indexOf(Re) < 0 && (Ke[Re] = () => We[Re]);
				e.d(x, Ke);
				var ke = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					pe = e('./components/src/themes/index.ts');
			},
			'./components/src/providers/index.ts'(q, x, e) {
				e.r(x),
					e.d(x, {
						ALL_CUSTOM_COMPONENT_TYPES: () => v.C,
						CacheProvider: () => t._,
						ControllerProvider: () => _.e2,
						DEFAULT_CUSTOM_COMPONENT_TYPES: () => v.o,
						SnapProvider: () => l.Mz,
						StoreProvider: () => T.tv,
						TRACKING_ATTRIBUTE: () => c.N,
						ThemeProvider: () => o.NP,
						TreePathProvider: () => a.p3,
						css: () => o.AH,
						defaultTheme: () => o.zQ,
						useController: () => _.as,
						useSnap: () => l.uk,
						useStore: () => T.Pj,
						useTheme: () => o.DP,
						useTreePath: () => a.LU,
						withController: () => _.Bk,
						withSnap: () => l.b$,
						withStore: () => T.aH,
						withTheme: () => o.SL,
						withTracking: () => c.W,
						withTreePath: () => a.QE,
					});
				var t = e('./components/src/providers/cache.tsx'),
					_ = e('./components/src/providers/controller.tsx'),
					T = e('./components/src/providers/store.tsx'),
					o = e('./components/src/providers/theme.ts'),
					c = e('./components/src/providers/withTracking.tsx'),
					v = e('./components/src/providers/themeComponents.ts'),
					A = e('./components/src/providers/langComponents.ts'),
					L = e.n(A),
					n = {};
				for (const M in A)
					[
						'default',
						'CacheProvider',
						'ControllerProvider',
						'useController',
						'withController',
						'StoreProvider',
						'useStore',
						'withStore',
						'ThemeProvider',
						'css',
						'defaultTheme',
						'useTheme',
						'withTheme',
						'TRACKING_ATTRIBUTE',
						'withTracking',
						'ALL_CUSTOM_COMPONENT_TYPES',
						'DEFAULT_CUSTOM_COMPONENT_TYPES',
					].indexOf(M) < 0 && (n[M] = () => A[M]);
				e.d(x, n);
				var l = e('./components/src/providers/snap.tsx'),
					a = e('./components/src/providers/treePath.tsx');
			},
			'./components/src/providers/langComponents.ts'() {},
			'./components/src/providers/store.tsx'(q, x, e) {
				e.d(x, { aH: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/dist/preact.module.js'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = (0, _.q6)(null),
					c = o.Provider,
					v = ({ children: n, store: l }) => (0, t.Y)(c, { value: l, children: n }),
					A = () => (0, T.NT)(o);
				function L(n) {
					return (l) => {
						const a = n;
						return (0, t.Y)(a, { store: A(), ...l });
					};
				}
				e.d(x, ['Pj', 0, A, 'tv', 0, v]);
			},
			'./components/src/themes/index.ts'(q, x, e) {
				e.d(x, { Ct: () => T.pike, E3: () => t.E, NZ: () => o.N, SE: () => _.S, mJ: () => c.m });
				var t = e('./components/src/themes/base/base.ts'),
					_ = e('./components/src/themes/bocachica/bocachica.ts'),
					T = e('./components/src/themes/pike/pike.ts'),
					o = e('./components/src/themes/snapnco/snapnco.ts'),
					c = e('./components/src/themes/snappy/snappy.ts');
			},
			'./components/src/utilities/Colour/Colour.ts'(q, x, e) {
				e.d(x, { V: () => t });
				class t {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const o = parseInt(this.hexValue.slice(1, 3), 16),
								c = parseInt(this.hexValue.slice(3, 5), 16),
								v = parseInt(this.hexValue.slice(5, 7), 16),
								L = [o / 255, c / 255, v / 255].map((l) => (l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)));
							return 0.2126 * L[0] + 0.7152 * L[1] + 0.0722 * L[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(o) {
						(this.value = o),
							o &&
								(o.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (o = `#${o[1].repeat(2)}${o[2].repeat(2)}${o[3].repeat(2)}`),
								t.isHex(o)
									? ((this.hexValue = o), (this.rgbValue = t.hexToRgb(o)))
									: t.isRgb(o) && ((this.rgbValue = o), (this.hexValue = t.rgbToHex(o))));
					}
					shift(o) {
						return new t(t.brightness(this.hex, o));
					}
					lighten(o) {
						return o < 0 ? this : new t(t.brightness(this.hex, o));
					}
					darken(o) {
						return o < 0 ? this : new t(t.brightness(this.hex, -o));
					}
					opacity(o) {
						return new t(t.opacity(this.hex, o));
					}
					transparency(o) {
						return o < 0 ? this : new t(t.opacity(this.hex, o));
					}
					opaque(o) {
						return o < 0 ? this : new t(t.opacity(this.hex, -o));
					}
					static isRgb(o) {
						return !!(
							o.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							o.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(o) {
						return !!(o.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || o.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(o) {
						if (!t.isHex(o)) throw 'invalid hex supplied';
						const c = parseInt(o.slice(1, 3), 16),
							v = parseInt(o.slice(3, 5), 16),
							A = parseInt(o.slice(5, 7), 16),
							L = parseInt(o.slice(7, 9), 16);
						return Number.isInteger(L) ? `rgba(${c}, ${v}, ${A}, ${_(L / 255)})` : `rgb(${c}, ${v}, ${A})`;
					}
					static rgbToHex(o) {
						if (!t.isRgb(o)) throw 'invalid rgb supplied';
						const [c, v, A, L] = (o.match(/[0-9]?\.?[0-9]+%?/g) || []).map((n, l) => {
							if (l == 3) {
								n.match(/%/) && (n = (Number(n.replace('%', '').trim()) / 100).toString());
								let a = Number(n);
								(Number.isNaN(a) || a > 1) && (a = 1), a < 0 && (a = 0), (n = Math.floor(a * 255).toString());
							}
							return Number(n).toString(16).padStart(2, '0');
						});
						return `#${c}${v}${A}${L || ''}`;
					}
					static opacity(o, c) {
						let v = !1;
						if ((o && t.isRgb(o) && ((v = !0), (o = t.rgbToHex(o))), !o || !t.isHex(o) || !Number.isInteger(c))) return o;
						c > 255 && (c = 255), c < -255 && (c = -255);
						const A = o.slice(7, 9) || 'ff';
						let n = parseInt(A, 16) - c;
						n > 255 ? (n = 255) : n < 0 && (n = 0);
						const l = n.toString(16).padStart(2, '0'),
							a = `${o.slice(0, 7)}${l}`;
						return v ? t.hexToRgb(a) : a;
					}
					static brightness(o, c) {
						let v = !1;
						if ((o && t.isRgb(o) && ((v = !0), (o = t.rgbToHex(o))), !o || !t.isHex(o) || !Number.isInteger(c))) return o;
						c > 255 && (c = 255), c < -255 && (c = -255);
						const A = o.slice(1, 7),
							L = parseInt(A, 16);
						let n = (L & 255) + c;
						n > 255 ? (n = 255) : n < 0 && (n = 0);
						let l = ((L >> 8) & 255) + c;
						l > 255 ? (l = 255) : l < 0 && (l = 0);
						let a = (L >> 16) + c;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						const M = `#${(n | (l << 8) | (a << 16)).toString(16).padStart(6, '0')}${o.slice(7, 9)}`;
						return v ? t.hexToRgb(M) : M;
					}
				}
				function _(T) {
					const o = Math.floor(T),
						c = T - o;
					if (!c) return T;
					const v = Math.floor(c * 10) * 10,
						A = Math.round(T * 100 - v);
					return o + (v + A) / 100;
				}
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(q, x, e) {
				e.d(x, { d: () => L });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function _() {
					return (
						(_ =
							Object.assign ||
							function (n) {
								for (var l = 1; l < arguments.length; l++) {
									var a = arguments[l];
									for (var M in a) Object.prototype.hasOwnProperty.call(a, M) && (n[M] = a[M]);
								}
								return n;
							}),
						_.apply(this, arguments)
					);
				}
				function T(n, l) {
					if (n == null) return {};
					var a = {},
						M = Object.keys(n),
						U,
						f;
					for (f = 0; f < M.length; f++) (U = M[f]), !(l.indexOf(U) >= 0) && (a[U] = n[U]);
					return a;
				}
				var o = function (l) {
						var a = l.getBoundingClientRect();
						return { left: Math.ceil(a.left), width: Math.ceil(a.width) };
					},
					c = function (l) {
						return [].concat(l).sort(function (a, M) {
							return Number(a) - Number(M);
						});
					},
					v = function (l) {
						var a = t.default.useRef(l);
						return (
							(a.current = l),
							t.default.useCallback(function () {
								return a.current;
							}, [])
						);
					},
					A = {
						getPercentageForValue: function (l, a, M) {
							return Math.max(0, Math.min(100, ((l - a) / (M - a)) * 100));
						},
						getValueForClientX: function (l, a, M, U) {
							var f = a.left,
								C = a.width,
								O = (l - f) / C,
								I = (U - M) * O;
							return I + M;
						},
					};
				function L(n) {
					var l = n.interpolator,
						a = l === void 0 ? A : l,
						M = n.tickSize,
						U = M === void 0 ? 10 : M,
						f = n.values,
						C = n.min,
						O = n.max,
						I = n.ticks,
						u = n.steps,
						W = n.onChange,
						P = n.onDrag,
						r = n.stepSize,
						E = t.default.useState(null),
						y = E[0],
						i = E[1],
						D = t.default.useState(),
						h = D[0],
						Y = D[1],
						p = v({ activeHandleIndex: y, onChange: W, onDrag: P, values: f, tempValues: h }),
						R = t.default.useRef(),
						N = t.default.useCallback(
							function (d) {
								var m = o(R.current);
								return a.getValueForClientX(d, m, C, O);
							},
							[a, O, C]
						),
						H = t.default.useCallback(
							function (d, m) {
								if (u) {
									var B = u.indexOf(d),
										g = B + m;
									return g >= 0 && g < u.length ? u[g] : d;
								} else {
									var K = d + r * m;
									return K >= C && K <= O ? K : d;
								}
							},
							[O, C, r, u]
						),
						s = t.default.useCallback(
							function (d) {
								var m = C,
									B = O;
								if (u)
									u.forEach(function (g) {
										g <= d && g > m && (m = g), g >= d && g < B && (B = g);
									});
								else {
									for (; m < d && m + r < d; ) m += r;
									B = Math.min(m + r, O);
								}
								return d - m < B - d ? m : B;
							},
							[O, C, r, u]
						),
						b = t.default.useCallback(
							function (d) {
								var m = p(),
									B = m.activeHandleIndex,
									g = m.onDrag,
									K = d.type === 'touchmove' ? d.changedTouches[0].clientX : d.clientX,
									S = N(K),
									G = s(S),
									X = [].concat(f.slice(0, B), [G], f.slice(B + 1));
								g ? g(X) : Y(X);
							},
							[p, N, s, f]
						),
						$ = t.default.useCallback(
							function (d, m) {
								var B = p(),
									g = B.values,
									K = B.onChange,
									S = K === void 0 ? function () {} : K;
								if (d.keyCode === 37 || d.keyCode === 39) {
									i(m);
									var G = d.keyCode === 37 ? -1 : 1,
										X = H(g[m], G),
										F = [].concat(g.slice(0, m), [X], g.slice(m + 1)),
										w = c(F);
									S(w);
								}
							},
							[p, H]
						),
						Z = t.default.useCallback(
							function (d, m) {
								i(m);
								var B = function g(K) {
									var S = p(),
										G = S.tempValues,
										X = S.values,
										F = S.onChange,
										w = F === void 0 ? function () {} : F,
										oe = S.onDrag,
										Q = oe === void 0 ? function () {} : oe;
									document.removeEventListener('mousemove', b),
										document.removeEventListener('touchmove', b),
										document.removeEventListener('mouseup', g),
										document.removeEventListener('touchend', g);
									var ne = c(G || X);
									w(ne), Q(ne), i(null), Y();
								};
								document.addEventListener('mousemove', b),
									document.addEventListener('touchmove', b),
									document.addEventListener('mouseup', B),
									document.addEventListener('touchend', B);
							},
							[p, b]
						),
						z = t.default.useCallback(
							function (d) {
								return a.getPercentageForValue(d, C, O);
							},
							[a, O, C]
						),
						j = t.default.useMemo(
							function () {
								var d = I || u;
								if (!d) {
									for (d = [C]; d[d.length - 1] < O - U; ) d.push(d[d.length - 1] + U);
									d.push(O);
								}
								return d.map(function (m, B) {
									return {
										value: m,
										getTickProps: function (K) {
											var S = K === void 0 ? {} : K,
												G = S.key,
												X = G === void 0 ? B : G,
												F = S.style,
												w = F === void 0 ? {} : F,
												oe = T(S, ['key', 'style']);
											return _({ key: X, style: _({ position: 'absolute', width: 0, left: z(m) + '%', transform: 'translateX(-50%)' }, w) }, oe);
										},
									};
								});
							},
							[I, z, O, C, u, U]
						),
						J = t.default.useMemo(
							function () {
								var d = c(h || f);
								return [].concat(d, [O]).map(function (m, B) {
									return {
										value: m,
										getSegmentProps: function (K) {
											var S = K === void 0 ? {} : K,
												G = S.key,
												X = G === void 0 ? B : G,
												F = S.style,
												w = F === void 0 ? {} : F,
												oe = T(S, ['key', 'style']),
												Q = z(d[B - 1] ? d[B - 1] : C),
												ne = z(m) - Q;
											return _({ key: X, style: _({ position: 'absolute', left: Q + '%', width: ne + '%' }, w) }, oe);
										},
									};
								});
							},
							[z, O, C, h, f]
						),
						k = t.default.useMemo(
							function () {
								return (h || f).map(function (d, m) {
									return {
										value: d,
										active: m === y,
										getHandleProps: function (g) {
											var K = g === void 0 ? {} : g,
												S = K.key,
												G = S === void 0 ? m : S,
												X = K.ref,
												F = K.innerRef,
												w = K.onKeyDown,
												oe = K.onMouseDown,
												Q = K.onTouchStart,
												ne = K.style,
												ee = ne === void 0 ? {} : ne,
												le = T(K, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return _(
												{
													key: G,
													onKeyDown: function (se) {
														se.persist(), $(se, m), w && w(se);
													},
													onMouseDown: function (se) {
														se.persist(), Z(se, m), oe && oe(se);
													},
													onTouchStart: function (se) {
														se.persist(), Z(se, m), Q && Q(se);
													},
													role: 'slider',
													'aria-valuemin': C,
													'aria-valuemax': O,
													'aria-valuenow': d,
													style: _(
														{ position: 'absolute', top: '50%', left: z(d) + '%', zIndex: m === y ? '1' : '0', transform: 'translate(-50%, -50%)' },
														ee
													),
												},
												le
											);
										},
									};
								});
							},
							[y, z, $, Z, C, O, h, f]
						),
						V = function (m) {
							var B = m === void 0 ? {} : m,
								g = B.style,
								K = g === void 0 ? {} : g,
								S = B.ref,
								G = T(B, ['style', 'ref']);
							return _(
								{
									ref: function (F) {
										(R.current = F), S && (typeof S == 'function' ? S(F) : (S.current = F));
									},
									style: _({ position: 'relative', userSelect: 'none' }, K),
								},
								G
							);
						};
					return { activeHandleIndex: y, getTrackProps: V, ticks: j, segments: J, handles: k };
				}
			},
		},
	]);
})();
