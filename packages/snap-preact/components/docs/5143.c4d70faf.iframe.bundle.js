'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5143],
		{
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					g = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const K = () => (0, f.AH)({}),
					x = (0, p.PA)((A) => {
						const O = (0, M.u)(),
							_ = {
								symbol: '',
								decimalPlaces: 3,
								padDecimalPlaces: !0,
								thousandsSeparator: '',
								decimalSeparator: '.',
								symbolAfter: !0,
								treePath: (0, o.LU)(),
							},
							W = (0, l.v6)('formattedNumber', O, _, A),
							{
								value: E,
								symbol: c,
								decimalPlaces: T,
								padDecimalPlaces: U,
								thousandsSeparator: a,
								decimalSeparator: B,
								symbolAfter: d,
								className: S,
								internalClassName: D,
								raw: L,
							} = W,
							{ overrideElement: N, shouldRenderDefault: v } = (0, h._)('formattedNumber', W);
						if (!v) return N;
						const i = s.Z(E, { symbol: c, decimalPlaces: T, padDecimalPlaces: U, thousandsSeparator: a, decimalSeparator: B, symbolAfter: d }),
							F = (0, r.Z)(W, K);
						return L
							? (0, t.Y)(t.FK, { children: i })
							: (0, t.Y)(g._, { children: (0, t.Y)('span', { className: m()('ss__formatted-number', S, D), ...F, children: i }) });
					});
				e.d(R, ['G', 0, x]);
			},
			'./components/src/components/Atoms/Icon/index.ts'(ee, R, e) {
				e.d(R, { I: () => t.I, c: () => p.c });
				var t = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					p = e('./components/src/components/Atoms/Icon/paths.tsx');
			},
			'./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({ color: x, height: A, backgroundColor: O, theme: y }) => {
						const _ = (0, f.i7)({
							from: { left: '-200px', width: '30%' },
							'50%': { width: '30%' },
							'70%': { width: '70%' },
							'80%': { left: '50%' },
							'95%': { left: '120%' },
							to: { left: '100%' },
						});
						return (0, f.AH)({
							height: A,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: O || y?.variables?.colors?.secondary || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${x || y?.variables?.colors?.primary || '#ccc'}`,
								animation: `${_} 2s linear infinite`,
							},
						});
					},
					K = (0, p.PA)((x) => {
						const A = (0, g.u)(),
							y = { height: '5px', treePath: (0, M.LU)() },
							_ = (0, o.v6)('loadingBar', A, y, x),
							{ active: W, className: E, internalClassName: c } = _,
							{ overrideElement: T, shouldRenderDefault: U } = (0, r._)('loadingBar', _);
						if (!U) return T;
						const a = (0, l.Z)(_, h);
						return W
							? (0, t.Y)(m._, {
									children: (0, t.Y)('div', {
										...a,
										className: n()('ss__loading-bar', E, c),
										children: (0, t.Y)('div', { className: 'ss__loading-bar__bar' }),
									}),
							  })
							: null;
					});
				e.d(R, ['G', 0, K]);
			},
			'./components/src/components/Atoms/Skeleton/Skeleton.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					s = e.n(f),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/mergeStyles.ts'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = ({ width: x, height: A, round: O, backgroundColor: y, animatedColor: _ }) => {
						const W = (0, p.i7)({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
						return (0, p.AH)({
							width: x,
							height: A,
							borderRadius: O ? x : '0.25rem',
							backgroundColor: y,
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
								backgroundImage: `linear-gradient(90deg, ${y}, ${_}, ${y})`,
								transform: 'translateX(-100%)',
								animation: `${W} 1.5s linear infinite`,
								animationTimingFunction: 'ease-in-out',
							},
						});
					},
					K = (0, n.PA)((x) => {
						const A = (0, g.u)(),
							y = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: (0, M.LU)() },
							_ = (0, o.v6)('skeleton', A, y, x),
							{ className: W, internalClassName: E } = _,
							{ overrideElement: c, shouldRenderDefault: T } = (0, r._)('skeleton', _);
						if (!T) return c;
						const U = (0, l.Z)(_, h);
						return (0, t.Y)(m._, { children: (0, t.Y)('div', { ...U, className: s()('ss__skeleton', W, E) }) });
					});
				e.d(R, ['E', 0, K]);
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					s = e.n(f),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/Colour/Colour.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/providers/cache.tsx'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					A = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					O = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					_ = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(_);
				const E = new o.V('#ecaa15'),
					c = new o.V('#cc1212'),
					T = new o.V('#4c3ce2'),
					U = ({ theme: B }) =>
						(0, p.AH)({
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
								borderColor: B?.variables?.colors?.primary,
								width: ['150px', 'fit-content'],
								margin: '5px 10px',
								'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
								'.ss__icon': { margin: '0 5px 0 0' },
							},
							'&.ss__error-handler--error': {
								backgroundColor: c.lighten(180).hex,
								borderLeftColor: c.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: c.hex } },
							},
							'&.ss__error-handler--warning': {
								backgroundColor: E.lighten(180).hex,
								borderLeftColor: E.hex,
								'.ss__icon': { fill: E.hex, stroke: E.hex },
								'.ss__error-handler__button': {
									color: E.hex,
									borderColor: E.hex,
									fontWeight: 'bold',
									textTransform: 'uppercase',
									display: 'inline-flex',
									alignItems: 'center',
									'.ss__button__content': { order: 2 },
									'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: E.hex, stroke: E.hex },
									'&:hover': {
										color: E.darken(30).hex,
										borderColor: E.darken(30).hex,
										'.ss__button__icon': { fill: E.darken(30).hex, stroke: E.darken(30).hex },
									},
								},
							},
							'&.ss__error-handler--info': {
								backgroundColor: T.lighten(180).hex,
								borderLeftColor: T.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: T.hex } },
							},
						}),
					a = (0, n.PA)((B) => {
						const d = (0, K.u)(),
							D = { treePath: (0, x.LU)() },
							L = (0, l.v6)('errorHandler', d, D, B),
							{ controller: N, error: v, disableStyles: i, onRetryClick: F, className: k, internalClassName: Q, treePath: j } = L,
							{ overrideElement: H, shouldRenderDefault: te } = (0, y._)('errorHandler', L);
						if (!te) return H;
						const X = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, M.s)({ disableStyles: i }), theme: L.theme, treePath: j },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, M.s)({ disableStyles: i }),
									theme: L.theme,
									treePath: j,
								},
							},
							z = N?.store?.error || v,
							P = (0, r.Z)(L, U),
							u = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							C = W()(u, L.lang || {}),
							I = (0, O.u)(C, { controller: N });
						return Object.values(A.B).includes(z?.type) && z?.message
							? (0, t.Y)(h._, {
									children: (0, t.Y)('div', {
										className: s()('ss__error-handler', `ss__error-handler--${z.type}`, k, Q),
										...P,
										children: (() => {
											switch (z.type) {
												case A.B.WARNING:
													return (0, t.FD)(t.FK, {
														children: [
															(0, t.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, t.Y)(m.I, { ...X.icon, icon: 'warn' }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...I.warningText?.all }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: z.message }),
																],
															}),
															z?.code == 429
																? (0, t.Y)(g.$, {
																		...X.buttonRetry,
																		onClick: (Y) => {
																			F ? F(Y) : N?.search();
																		},
																		...I.reloadText.attributes,
																		children: (0, t.Y)('span', { className: 'ss__error-handler__button__text', ...I.reloadText.value }),
																  })
																: null,
														],
													});
												case A.B.ERROR:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(m.I, { ...X.icon, icon: 'error' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...I.errorText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: z.message }),
														],
													});
												case A.B.INFO:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(m.I, { ...X.icon, icon: 'info' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...I.infoText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: z.message }),
														],
													});
											}
										})(),
									}),
							  })
							: null;
					});
				e.d(R, ['z', 0, a]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useClickOutside.tsx'),
					r = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					K = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/hooks/useA11y.tsx'),
					y = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					_ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const W = () =>
						(0, f.AH)({
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
					E = (0, m.PA)((c) => {
						const T = (0, M.u)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, o.LU)() },
							B = (0, x.v6)('modal', T, a, c),
							{
								button: d,
								content: S,
								buttonSelector: D,
								children: L,
								disabled: N,
								open: v,
								onClick: i,
								lockScroll: F,
								startOpen: k,
								disableClickOutside: Q,
								disableA11y: j,
								className: H,
								internalClassName: te,
								disableStyles: X,
								overlayColor: z,
								onOverlayClick: P,
								treePath: u,
							} = B,
							{ overrideElement: C, shouldRenderDefault: I } = (0, r._)('modal', B);
						if (!I) return C;
						const Y = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (G) => {
									P && P(G), q();
								},
								...(0, K.s)({ disableStyles: X, color: z }),
								theme: B?.theme,
								treePath: u,
							},
						};
						let b, J;
						const w = v === void 0;
						w ? ([b, J] = (0, p.J0)(k)) : (b = v);
						let $;
						Q ||
							($ = (0, l.L)(() => {
								b && (N || (w && J && J(!1)));
							}));
						const q = () => {
								w && J && J((G) => !G);
							},
							V = (0, A.Z)(B, W);
						return (
							(0, p.vJ)(
								() => (
									b && F ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[b, F]
							),
							(0, p.vJ)(() => {
								const G = D ? (typeof D == 'string' ? document.querySelector(D) : D) : null,
									se = (0, _.s)(() => {
										setTimeout(() => {
											b && F ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									re = (oe) => {
										q(), i && i(oe);
									};
								return (
									G && (N || G.addEventListener('click', re)),
									window.addEventListener('resize', se),
									() => {
										window.removeEventListener('resize', se), G && G.removeEventListener('click', re);
									}
								);
							}, []),
							(0, t.Y)(g._, {
								children: (0, t.FD)('div', {
									...V,
									className: n()('ss__modal', { 'ss__modal--open': b }, { 'ss__modal--disabled': N }, H, te),
									ref: $,
									children: [
										!D &&
											d &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (G) => (j ? null : (0, O.iy)(G)),
												'aria-expanded': b,
												role: 'button',
												onClick: (G) => {
													N || (q(), i && i(G));
												},
												children: (0, h.Y)(d, { open: b, toggleOpen: q, treePath: u }),
											}),
										(S || L) &&
											b &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (G) => (j ? null : (0, O.iy)(G)),
												children: [(0, h.Y)(S, { open: b, toggleOpen: q, treePath: u }), (0, h.Y)(L, { open: b, toggleOpen: q, treePath: u })],
											}),
										(0, t.Y)(y.h, { ...Y.overlay, active: !!b }),
									],
								}),
							})
						);
					});
				e.d(R, ['a', 0, E]);
			},
			'./components/src/components/Molecules/TemplatesEditor/TemplatesEditor.tsx'(ee, R, e) {
				e.d(R, { j: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					s = e.n(f),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('./components/src/providers/cache.tsx');
				const g = () =>
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
				var M = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = () =>
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
					l = (0, n.PA)((O) => {
						const { type: y, label: _, description: W, onReset: E, display: c, showReset: T, value: U, options: a, onChange: B } = O,
							[d, S] = (0, M.J0)(U);
						return (
							(0, M.vJ)(() => {
								S(U);
							}, [U]),
							c === 'hidden'
								? null
								: (0, t.Y)('div', {
										className: `control ${y} ${c}`,
										children: (0, t.FD)('div', {
											className: 'option checkbox',
											children: [
												(0, t.Y)('label', { children: _ }),
												(0, t.Y)('div', {
													className: 'reset',
													children: T
														? (0, t.Y)('button', {
																title: 'Reset',
																onClick: () => {
																	E();
																},
																children: (0, t.Y)(o, {}),
														  })
														: null,
												}),
												(0, t.Y)('div', {
													className: 'value',
													title: W,
													children: (() => {
														switch (y) {
															case 'text':
																return (0, t.Y)('input', { type: 'text', value: U, onChange: (D) => B(D.target.value), disabled: c === 'disabled' });
															case 'number':
																return (0, t.Y)('input', {
																	type: 'number',
																	value: U,
																	onChange: (D) => B(Number(D.target.value)),
																	disabled: c === 'disabled',
																});
															case 'checkbox':
																return (0, t.Y)('input', {
																	type: 'checkbox',
																	checked: U,
																	onChange: (D) => B(D.target.checked),
																	disabled: c === 'disabled',
																});
															case 'dropdown':
																return (0, t.Y)('select', {
																	onChange: (D) => B(D.target.value),
																	disabled: c === 'disabled',
																	value: U,
																	children: a?.map((D, L) =>
																		D.group
																			? (0, t.Y)(
																					'optgroup',
																					{
																						label: D.group,
																						children: D.options.map((N, v) =>
																							(0, t.Y)('option', { value: N.value, children: N.label || N.value }, `${L}-${v}`)
																						),
																					},
																					L
																			  )
																			: D.options.map((N, v) => (0, t.Y)('option', { value: N.value, children: N.label || N.value }, `${L}-${v}`))
																	),
																});
															case 'color':
																return (0, t.FD)(t.FK, {
																	children: [
																		(0, t.Y)('input', {
																			type: 'color',
																			value: U,
																			onChange: (D) => {
																				S(D.target.value), B(D.target.value);
																			},
																			disabled: c === 'disabled',
																		}),
																		(0, t.Y)('input', {
																			type: 'text',
																			className: r(d) ? '' : 'invalid',
																			value: d,
																			onChange: (D) => {
																				S(D.target.value), r(D.target.value) && B(D.target.value);
																			},
																			disabled: c === 'disabled',
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
					r = (O) => !!/^#[0-9A-F]{6}$/i.test(O),
					h = { AbstractedControls: ({}) => (0, p.AH)({}) },
					K = (0, n.PA)((O) => {
						const y = { css: [h.AbstractedControls({ ...O })] },
							{ title: _, enableGroupReset: W, feature: E, editorStore: c, data: T } = O,
							[U, a] = E.split('/'),
							B = c.uiAbstractions[U],
							d = B?.[a];
						if (!d) return console.warn(`No controls found for feature: ${E}`, B, d), null;
						const S = W && d.some((L) => L.controls.some((N) => N.shouldShowReset(T))),
							D = () => {
								d.forEach((L) => {
									L.controls.forEach((N) => {
										N.shouldShowReset(T) && N.onReset(T);
									});
								});
							};
						return (0, t.FD)('div', {
							className: 'ss__template-editor__abstracted-controls',
							...y,
							children: [
								_ &&
									(0, t.FD)('div', {
										className: 'control-title',
										children: [
											(0, t.Y)('h3', { children: _ }),
											S &&
												(0, t.Y)('span', {
													className: 'reset',
													children: (0, t.Y)('button', {
														title: 'Reset',
														onClick: () => {
															D();
														},
														children: (0, t.Y)(o, {}),
													}),
												}),
										],
									}),
								d.map((L) => {
									const N = L.showReset && L.controls.some((i) => i.shouldShowReset(T)),
										v = () => {
											L.controls.forEach((i) => {
												i.shouldShowReset(T) && i.onReset(T);
											});
										};
									return (0, t.FD)(
										'div',
										{
											className: 'group',
											children: [
												L.title &&
													(0, t.FD)('div', {
														className: 'group-title',
														children: [
															(0, t.Y)('h4', { title: L.description, children: L.title }),
															N &&
																(0, t.Y)('span', {
																	className: 'reset',
																	children: N
																		? (0, t.Y)('button', {
																				title: 'Reset',
																				onClick: () => {
																					v();
																				},
																				children: (0, t.Y)(o, {}),
																		  })
																		: null,
																}),
														],
													}),
												L.controls.map((i, F) =>
													(0, t.Y)(
														l,
														{
															type: i.type,
															label: i.label,
															description: i.description,
															showReset: i.shouldShowReset(T),
															onChange: (k) => i.onValueChange(k, T),
															onReset: () => i.onReset(T),
															display: i.getDisplayState ? i.getDisplayState(T) : 'visible',
															value: i.getValue(T),
															options: i.getOptions ? i.getOptions(T) : [],
														},
														F
													)
												),
											],
										},
										L.title
									);
								}),
							],
						});
					}),
					x = {
						TemplatesEditor: ({}) =>
							(0, p.AH)({
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
					A = (0, n.PA)((O) => {
						const { onRemoveClick: y, editorStore: _, snap: W } = O,
							E = { css: [x.TemplatesEditor(O)] };
						return (0, t.Y)(m._, {
							children: (0, t.FD)('div', {
								className: s()('ss__template-editor', { 'ss__template-editor--collapsed': _.storedState.hidden }),
								...E,
								onClick: (c) => {
									c.stopPropagation(), _.toggleHide(!1);
								},
								children: [
									(0, t.FD)('div', {
										className: 'ss__template-editor__header',
										children: [
											(0, t.Y)('div', {
												className: 'logo',
												onClick: (c) => {
													c.stopPropagation(), _.toggleHide(!1);
												},
												children: (0, t.Y)(g, {}),
											}),
											(0, t.FD)('div', {
												className: 'header-actions',
												onClick: (c) => {
													c.preventDefault(), c.stopPropagation(), _.toggleHide(!0);
												},
												children: [
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: (c) => {
																c.stopPropagation(), confirm('Closing the editor will disable modification.') && y();
															},
															children: 'Close',
														}),
													}),
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: (c) => {
																c.stopPropagation();
																const T = _.generateTemplatesConfig();
																navigator.clipboard.writeText(JSON.stringify(T, null, 4)), alert('Configuration copied to clipboard');
															},
															children: 'Copy',
														}),
													}),
													(0, t.Y)('div', {
														className: '',
														children: (0, t.Y)('button', {
															onClick: () => {
																_.toggleHide(!0);
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
												children: _.tabs.map((c, T) =>
													(0, t.Y)(
														'div',
														{
															className: s()('tab', { active: _.storedState.activeTab === c }),
															onClick: () => {
																_.switchTabs(c);
															},
															children: c,
														},
														T
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
															_.storedState.activeTab === 'templates'
																? (0, t.FD)(t.FK, {
																		children: [
																			(0, t.Y)('h1', { children: 'Search' }),
																			(0, t.Y)(K, { editorStore: _, data: 0, feature: 'targets/search' }),
																			(0, t.Y)(K, { editorStore: _, data: W.controllers.search, feature: 'controllers/search' }),
																			(0, t.Y)('h1', { children: 'Autocomplete' }),
																			(0, t.Y)(K, { editorStore: _, data: 0, feature: 'targets/autocomplete' }),
																			(0, t.Y)(K, { editorStore: _, data: W.controllers.autocomplete, feature: 'controllers/autocomplete' }),
																		],
																  })
																: '',
															_.storedState.activeTab === 'configuration'
																? (0, t.FD)(t.FK, {
																		children: [
																			(0, t.Y)(K, { title: 'Project Configuration', editorStore: _, feature: 'templates/config' }),
																			(0, t.Y)(K, { title: 'Theme Configuration', editorStore: _, feature: 'templates/theme' }),
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
			'./components/src/components/Molecules/Terms/Terms.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					l = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useLang.tsx'),
					K = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(x);
				const O = ({ vertical: E, theme: c }) =>
						(0, f.AH)({
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
								flexDirection: E ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: c?.variables?.colors?.primary } },
								},
							},
						}),
					y = (E) => E?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					_ = (E, c) => {
						if (E && c) {
							const T = E.match(y(c));
							if (c && E && T && typeof T.index == 'number') {
								const U = E.slice(0, T.index),
									a = E.slice(T.index + c.length, E.length);
								return `${U ? `<em>${U}</em>` : ''}${c}${a ? `<em>${a}</em>` : ''}`;
							}
						}
						return `<em>${E}</em>`;
					},
					W = (0, p.PA)((E) => {
						const c = (0, g.u)(),
							U = { vertical: !0, previewOnHover: !0, treePath: (0, M.LU)() },
							a = (0, l.v6)('terms', c, U, E),
							{ title: B, onTermClick: d, limit: S, previewOnHover: D, emIfy: L, className: N, internalClassName: v, controller: i } = a,
							F = i?.store?.state?.input,
							k = a.terms,
							{ overrideElement: Q, shouldRenderDefault: j } = (0, K._)('terms', a);
						if (!j) return Q;
						const H = (0, r.Z)(a, O),
							te = (C, I) => {
								d && d(C, I), i?.setFocused && i?.setFocused();
							},
							X = S ? k?.slice(0, S) : k,
							z = { title: { value: B } },
							P = A()(z, a.lang || {}),
							u = (0, h.u)({ title: P.title }, { controller: i });
						return X?.length
							? (0, t.Y)(m._, {
									children: (0, t.FD)('div', {
										...H,
										className: n()('ss__terms', N, v),
										children: [
											B ? (0, t.Y)('div', { className: 'ss__terms__title', children: (0, t.Y)('h5', { ...u.title.all }) }) : null,
											(0, t.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': B,
												children: X?.map((C, I) => {
													const Y = {
															term: {
																value: `${L ? _(C.value, F || '') : C.value}`,
																attributes: { 'aria-label': `${B || ''} item ${I + 1} of ${X.length}, ${C.value}` },
															},
														},
														b = A()(Y, a.lang || {}),
														J = (0, h.u)({ term: b.term }, { index: I, numberOfTerms: X.length, term: C });
													return (0, t.Y)('li', {
														className: n()('ss__terms__option', { 'ss__terms__option--active': C.active }),
														children: (0, t.Y)('a', {
															onClick: (w) => te(w, C),
															href: C.url.href,
															...(D ? (0, o.l)(C.preview) : {}),
															...J.term?.all,
														}),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
				e.d(R, ['i', 0, W]);
			},
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/classnames/index.js'),
					s = e.n(f),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const K = ({ componentTheme: W }) =>
						(0, p.AH)({
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
					y = {
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
					_ = (W) => {
						const E = (0, l.u)(),
							T = { treePath: (0, r.LU)() },
							U = (0, M.v6)('branchOverride', E, T, W),
							{
								branch: a,
								details: B,
								error: d,
								className: S,
								internalClassName: D,
								darkMode: L,
								disableStyles: N,
								onRemoveClick: v,
								treePath: i,
							} = U,
							{ overrideElement: F, shouldRenderDefault: k } = (0, h._)('branchOverride', U);
						if (!k) return F;
						const Q = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, g.s)({ disableStyles: N }),
									theme: U?.theme,
									treePath: i,
								},
							},
							j = typeof L == 'boolean' ? L : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[H, te] = (0, n.J0)(j ? 'darkTheme' : 'lightTheme'),
							[X, z] = (0, n.J0)(0);
						d && te('failureTheme');
						const P = (0, o.Z)({ ...U, componentTheme: y[H] }, K);
						return (B || d) && a
							? (0, t.FD)('div', {
									className: s()('ss__branch-override', y[H].class, { 'ss__branch-override--collapsed': X }, S, D),
									...P,
									onClick: (u) => {
										u.preventDefault(), u.stopPropagation(), z(0);
									},
									children: [
										(0, t.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, t.Y)('img', { className: 'ss__branch-override__top__logo', src: y[H].top.logo.src }),
												(0, t.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (u) => {
														u.preventDefault(), u.stopPropagation(), z(1);
													},
													children: (0, t.Y)(m.I, { size: '18px', color: y[H].top.close.fill, ...Q.icon, icon: 'close-thin' }),
												}),
												(0, t.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (u) => {
														u.preventDefault(), u.stopPropagation(), v && v(u, a);
													},
													children: y[H].top.button.content,
												}),
											],
										}),
										(0, t.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, t.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: d
														? (0, t.FD)(t.FK, {
																children: [
																	(0, t.Y)(m.I, { size: '12px', color: y[H].bottom.branch.color, ...Q.icon, icon: 'warn' }),
																	(0, t.Y)('span', { children: d.message }),
																],
														  })
														: a,
												}),
												(0, t.Y)('span', { className: 'ss__branch-override__bottom__right', children: d ? a : B?.lastModified }),
												(0, t.Y)('div', { className: 'ss__branch-override__bottom__content', children: d?.description || y[H].bottom.content }),
											],
										}),
									],
							  })
							: null;
					};
				e.d(R, ['n', 0, _]);
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					o = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const x = ({}) =>
						(0, f.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					A = (0, p.PA)((O) => {
						const y = (0, g.u)(),
							_ = (0, M.LU)(),
							W = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'Recent Searches',
								trendingTitle: 'Popular Searches',
								suggestionTitle: 'Search Suggestions',
								treePath: _,
							},
							E = (0, r.v6)('termsList', y, W, O),
							{
								layout: c,
								historyTitle: T,
								verticalOptions: U,
								trendingTitle: a,
								suggestionTitle: B,
								retainHistory: d,
								retainTrending: S,
								treePath: D,
								disableStyles: L,
								className: N,
								internalClassName: v,
								controller: i,
							} = E,
							{ overrideElement: F, shouldRenderDefault: k } = (0, o._)('termsList', E);
						if (!k) return F;
						const Q = { terms: { vertical: !!U, ...(0, l.s)({ disableStyles: L }), theme: E.theme, treePath: D } },
							j = (0, h.Z)(E, x),
							H = i?.store.history || [],
							te = i?.store.terms || [],
							X = i?.store.trending || [],
							z = X?.filter(($) => $.active).pop(),
							P = H?.filter(($) => $.active).pop(),
							{ loaded: u, results: C, state: I } = i?.store;
						let Y = !1;
						X?.length && ((S && u) || (!C.length && !I.input)) && (Y = !0);
						let b = !1;
						H?.length && ((d && u) || (!C.length && !I.input)) && (b = !0),
							!i.store.state.input && (P || z) && (H?.length && (b = !0), X?.length && (Y = !0));
						const J = ($) => {
								if (typeof $ != 'string') {
									const q = $?.map((G) => J(G));
									return $?.some((G, se) => G !== '_' && q[se]) ? (0, t.Y)('div', { className: 'ss__terms-list__row', children: q }) : null;
								}
								if ($ == '_') return (0, t.Y)('div', { className: 'ss__terms-list__separator' });
								if ($ == 'History' && b)
									return (0, t.Y)(K.i, {
										internalClassName: 'ss__terms-list__terms--history',
										title: T,
										terms: H,
										controller: i,
										name: 'history',
										limit: i.config.settings?.history?.limit,
										...Q.terms,
									});
								if ($ == 'Trending' && Y)
									return (0, t.Y)(K.i, {
										internalClassName: 'ss__terms-list__terms--trending',
										title: a,
										terms: X,
										controller: i,
										name: 'trending',
										limit: i.config.settings?.trending?.limit,
										...Q.terms,
									});
								if ($ == 'Suggestions')
									return te.length
										? (0, t.Y)(K.i, {
												internalClassName: 'ss__terms-list__terms--suggestions',
												title: B,
												terms: te,
												controller: i,
												name: 'suggestions',
												...Q.terms,
										  })
										: null;
							},
							w = c?.map(($) => J($));
						return w?.some(Boolean)
							? (0, t.Y)(m._, { children: (0, t.Y)('div', { ...j, className: n()('ss__terms-list', N, v), children: w }) })
							: null;
					});
				e.d(R, ['G', 0, A]);
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					g = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(g),
					o = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					l = e('./components/src/components/Molecules/Result/Result.tsx'),
					r = e('./components/src/utilities/cloneWithProps.tsx'),
					h = e('./components/src/utilities/defined.ts'),
					K = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/hooks/useIntersection.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					y = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					W = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/hooks/useDisplaySettings.tsx'),
					T = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					U = e('./components/src/hooks/useLang.tsx'),
					a = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const B = ({ vertical: S }) => (0, f.AH)({ height: S ? '100%' : void 0, '.ss__result__image-wrapper': { height: S ? '85%' : void 0 } }),
					d = (0, m.PA)((S) => {
						const D = (0, _.u)(),
							L = (0, E.LU)(),
							N = {
								breakpoints: S.vertical ? JSON.parse(JSON.stringify(o.og)) : JSON.parse(JSON.stringify(o.K)),
								pagination: !1,
								loop: !0,
								title: S.controller?.store?.profile?.display?.templateParameters?.title,
								description: S.controller?.store?.profile?.display?.templateParameters?.description,
								treePath: L,
							},
							v = { name: S.controller?.store?.profile?.tag?.toLowerCase(), ...S };
						let i = (0, K.v6)('recommendation', D, N, v),
							F;
						!(S.theme?.type == 'templates' || D?.type == 'templates') &&
							i.breakpoints &&
							((F = (0, c.X)(i.breakpoints)), F && Object.keys(F).length && (i = { ...i, ...F }));
						const {
								title: k,
								description: Q,
								controller: j,
								children: H,
								loop: te,
								results: X,
								pagination: z,
								nextButton: P,
								prevButton: u,
								hideButtons: C,
								disableStyles: I,
								className: Y,
								internalClassName: b,
								style: J,
								styleScript: w,
								themeStyleScript: $,
								lazyRender: q,
								vertical: V,
								hideTitle: G,
								treePath: se,
								...re
							} = i,
							oe = i.resultComponent,
							le = (0, W.uk)(),
							Z = typeof oe == 'string',
							ie = Z ? oe : '',
							pe = le?.templates?.library.import.component.result || {},
							{ ComponentOverride: ce, shouldWaitForNamedOverride: Oe } = (0, O.x)(pe, Z ? ie : void 0),
							he = Z ? ce : oe,
							me = { enabled: !0, offset: '10%', ...q };
						if (!j || j.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const ae = X || j.store?.results;
						if (Array.isArray(H) && H.length !== ae.length)
							return (
								j.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								null
							);
						const _e = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, h.s)({ disableStyles: I, vertical: V }),
									theme: i?.theme,
									treePath: se,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, h.s)({ disableStyles: I }), theme: i?.theme, treePath: se },
							},
							ge = (0, x.Z)(i, B),
							[Ee, De] = (0, p.J0)(!1),
							Pe = (0, p.li)(null);
						(!me?.enabled || (0, A.v)(Pe, `${me.offset} 0px ${me.offset} 0px`, !0)) && De(!0);
						const ve = { titleText: { value: `${k}` } },
							fe = M()(ve, i.lang || {}),
							Me = (0, U.u)(fe, {});
						return (Array.isArray(H) && H.length) || ae?.length
							? (0, t.Y)(y._, {
									children: (0, t.Y)('div', {
										...ge,
										className: n()('ss__recommendation', Y, b),
										ref: Pe,
										children: Ee
											? (0, t.FD)(T.l, {
													controller: j,
													children: [
														k && !G && (0, t.Y)('h3', { className: 'ss__recommendation__title', ...Me.titleText?.all, children: k }),
														Q && (0, t.Y)('p', { className: 'ss__recommendation__description', children: Q }),
														(0, t.Y)(o.FN, {
															prevButton: u,
															nextButton: P,
															hideButtons: C,
															loop: te,
															pagination: z,
															..._e.carousel,
															...re,
															children:
																Array.isArray(H) && H.length
																	? H.map((ne, de) => (0, t.Y)(a.o, { controller: j, result: ae[de], children: ne }))
																	: ae.map((ne) =>
																			(0, t.Y)(a.o, {
																				controller: j,
																				result: ne,
																				children:
																					he && j
																						? (0, r.Y)(he, {
																								controller: j,
																								result: ne,
																								treePath: _e.result.treePath,
																								theme: Z ? M()(i.theme || {}, { components: { result: { customComponent: oe } } }) : i.theme,
																						  })
																						: Oe
																						? null
																						: (0, t.Y)(l.Q, { ..._e.result, controller: j, result: ne }, ne.id),
																			})
																	  ),
														}),
													],
											  })
											: (0, t.Y)(T.l, {
													controller: j,
													children:
														Array.isArray(H) && H.length
															? H.map((ne, de) => (0, t.Y)(a.o, { controller: j, result: ae[de], children: (0, t.Y)(t.FK, {}) }))
															: ae.map((ne) => (0, t.Y)(a.o, { controller: j, result: ne, children: (0, t.Y)(t.FK, {}) })),
											  }),
									}),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(R, ['A', 0, d]);
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const o = () => (0, p.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					l = 'recommendationBundleEasyAdd',
					r = (0, s.PA)((h) => {
						const K = (0, f.u)(),
							x = { name: h.controller?.store?.profile?.tag?.toLowerCase(), ...h },
							{ treePath: A, disableStyles: O, controller: y, style: _, styleScript: W, themeStyleScript: E, ...c } = x,
							T = {
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
									...(0, n.s)({ disableStyles: O }),
									theme: x?.theme,
									treePath: A,
								},
							},
							U = (0, m.v6)(l, K, {}, x),
							a = (0, g.Z)(U, o);
						return (0, t.Y)(M.g, { controller: y, ...a, ...T.recommendationBundle, ...c });
					});
				e.d(R, ['F', 0, r]);
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					o = e('./components/src/components/Atoms/Price/Price.tsx'),
					l = e('./components/src/components/Atoms/Button/Button.tsx'),
					r = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					h = e('./components/src/components/Atoms/Image/Image.tsx'),
					K = e('./components/src/utilities/componentNameToClassName.ts'),
					x = e('../../node_modules/classnames/index.js'),
					A = e.n(x),
					O = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					_ = e.n(y),
					W = e('./components/src/hooks/useLang.tsx');
				const E = () =>
						(0, p.AH)({
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
					c = 'recommendationBundleList',
					T = (0, s.PA)((a) => {
						const B = (0, f.u)(),
							d = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a },
							{ treePath: S, disableStyles: D, controller: L, style: N, styleScript: v, themeStyleScript: i, ...F } = d,
							k = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (H) => (0, t.Y)(U, { ...H }),
									vertical: !0,
									separatorIcon: !1,
									alias: c,
									...(0, n.s)({ disableStyles: D }),
									theme: d?.theme,
									treePath: S,
								},
							},
							Q = (0, m.v6)(c, B, {}, d),
							j = (0, g.Z)(Q, E);
						return (0, t.Y)(M.g, { controller: L, ...j, ...k.recommendationBundle, ...F });
					}),
					U = (0, s.PA)((a) => {
						const B = a.cartStore,
							d = `ss__${(0, K.b)(c)}`;
						a.onAddToCart = (i) => {
							D(!0), a.onAddToCart(i), setTimeout(() => D(!1), a.ctaButtonSuccessTimeout);
						};
						const [S, D] = (0, O.J0)(!1);
						a.addedToCart = S;
						const L = {
								image: { className: `${d}__wrapper__cta__image`, theme: a?.theme, treePath: a.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${d}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: a?.theme,
									treePath: a.treePath,
								},
								icon: { name: 'bundle-cart', className: `${d}__wrapper__cta__icon`, size: 50, theme: a?.theme, treePath: a.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${d}__wrapper__cta__price--strike`, theme: a?.theme, treePath: a.treePath },
								subtotalPrice: { className: `${d}__wrapper__cta__price`, name: 'bundle-price', theme: a?.theme, treePath: a.treePath },
								button: { className: `${d}__wrapper__cta__button`, theme: a?.theme, treePath: a.treePath },
							},
							N = _()({}, a.lang || {}),
							v = (0, W.u)(N, {});
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${d}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${d}__wrapper__cta__inner__images`,
											children: B.items.map((i) => {
												const F = i.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${d}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: F.url, children: (0, t.Y)(h._, { src: F.thumbnailImageUrl, alt: F.name, lazy: !1 }) }),
														(0, t.Y)(r.I, { ...L.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${d}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												a.ctaIcon
													? (0, t.Y)('div', {
															className: `${d}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(r.I, { ...L.icon, ...(typeof a.ctaIcon == 'string' ? { icon: a.ctaIcon } : a.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${d}__wrapper__cta__subtotal__title`, children: `Subtotal for ${B.count} items` }),
												(0, t.FD)('div', {
													className: `${d}__wrapper__cta__subtotal__prices`,
													children: [
														B.msrp && B.msrp !== B.price
															? (0, t.FD)('label', {
																	className: `${d}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(o.g, { ...L.subtotalStrike, lineThrough: !0, value: B.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${d}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(o.g, { ...L.subtotalPrice, value: B.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${d}__cta__button__wrapper`,
									children: (0, t.Y)(l.$, {
										...L.button,
										disabled: B.items.length == 0,
										disableStyles: !0,
										internalClassName: A()(`${d}__cta__button`, { [`${d}__cta__button--added`]: S }),
										'aria-live': S,
										onClick: (i) => a.onAddToCart(i),
										...(S ? v.ctaButtonSuccessText?.all : v.ctaButtonText?.all),
										children: a.addedToCart ? a.ctaButtonSuccessText : a.ctaButtonText,
									}),
								}),
							],
						});
					});
				e.d(R, ['X', 0, U, 'a', 0, T]);
			},
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const o = () =>
						(0, p.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					l = 'recommendationBundleVertical',
					r = (0, s.PA)((h) => {
						const K = (0, f.u)(),
							x = { name: h.controller?.store?.profile?.tag?.toLowerCase(), ...h },
							{ treePath: A, disableStyles: O, controller: y, style: _, styleScript: W, themeStyleScript: E, ...c } = x,
							T = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: l,
									...(0, n.s)({ disableStyles: O }),
									theme: x?.theme,
									treePath: A,
								},
							},
							U = (0, m.v6)(l, K, {}, x),
							a = (0, g.Z)(U, o);
						return (0, t.Y)(M.g, { controller: y, ...a, ...T.recommendationBundle, ...c });
					});
				e.d(R, ['a', 0, r]);
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(s),
					m = e('../../node_modules/classnames/index.js'),
					g = e.n(m),
					M = e('./components/src/components/Molecules/Result/Result.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					K = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/hooks/useComponent.tsx');
				const y = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					_ = () => (0, p.AH)({}),
					W = (0, f.PA)((E) => {
						const c = (0, K.u)(),
							T = (0, A.LU)(),
							U = { resultWidth: '240px', name: E.controller?.store?.profile?.tag?.toLowerCase(), treePath: T },
							a = (0, r.v6)('recommendationEmail', c, U, E),
							{ controller: B, results: d, resultWidth: S, treePath: D, disableStyles: L, internalClassName: N, className: v } = a,
							i = a.resultComponent,
							F = (0, x.uk)(),
							k = typeof i == 'string',
							Q = k ? i : '',
							j = F?.templates?.library.import.component.result || {},
							{ ComponentOverride: H, shouldWaitForNamedOverride: te } = (0, O.x)(j, k ? Q : void 0),
							X = k ? H : i,
							z = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, l.s)({ disableStyles: L }), theme: a?.theme, treePath: D },
							},
							P = (0, h.Z)(a, _),
							u = d || B?.store?.results || [];
						return u.length > 0
							? (0, t.Y)('div', {
									className: g()('ss__recommendation-email', v, N),
									...P,
									children: u.map((C, I) =>
										(0, t.Y)(
											'div',
											{
												id: `ss-emailrec${I}`,
												className: g()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: S },
												children: X
													? (0, o.Y)(X, {
															controller: B,
															result: C,
															email: !0,
															theme: k ? n()(a.theme || {}, { components: { result: { customComponent: i }, image: { lazy: !1 } } }) : a.theme,
															treePath: D,
													  })
													: te
													? null
													: (0, t.Y)(M.Q, { result: C, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...z.result }),
											},
											I
										)
									),
							  })
							: (0, t.Y)(t.FK, {});
					});
				e.d(R, ['O', 0, y, 'i', 0, W]);
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					m = e('../../node_modules/deepmerge/dist/cjs.js'),
					g = e.n(m),
					M = e('./components/src/components/Molecules/Result/Result.tsx'),
					o = e('./components/src/utilities/cloneWithProps.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					r = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/hooks/useDisplaySettings.tsx'),
					_ = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					W = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					E = e('../../node_modules/preact/compat/dist/compat.module.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('./components/src/hooks/useIntersection.tsx'),
					U = e('./components/src/hooks/useComponent.tsx');
				const a = ({ gapSize: d, columns: S }) =>
						(0, f.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: d,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${S}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					B = (0, p.PA)((d) => {
						const S = (0, x.u)(),
							D = (0, O.LU)(),
							L = {
								results: d.controller?.store?.results,
								gapSize: '20px',
								title: d.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: D,
							},
							N = { name: d.controller?.store?.profile?.tag?.toLowerCase(), ...d };
						let v = (0, r.v6)('recommendationGrid', S, L, N);
						if (!(d.theme?.type == 'templates' || S?.type == 'templates')) {
							const Z = (0, y.X)(v?.breakpoints || {}),
								ie = g()(v?.theme || {}, Z?.theme || {}, { arrayMerge: (pe, ce) => ce });
							v = { ...v, ...Z, theme: ie };
						}
						const {
								disableStyles: i,
								title: F,
								trim: k,
								lazyRender: Q,
								className: j,
								internalClassName: H,
								treePath: te,
								theme: X,
								controller: z,
							} = v,
							P = v.resultComponent,
							u = (0, A.uk)(),
							C = typeof P == 'string',
							I = C ? P : '',
							Y = u?.templates?.library.import.component.result || {},
							{ ComponentOverride: b, shouldWaitForNamedOverride: J } = (0, U.x)(Y, C ? I : void 0),
							w = C ? b : P,
							$ = { enabled: !0, offset: '10%', ...Q },
							q = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, l.s)({ disableStyles: i }), theme: v?.theme } };
						let V = v.results || z.store.results;
						if (!v.columns && !v.rows) (v.rows = 1), (v.columns = V.length);
						else if (v.columns && !v.rows) {
							if (((v.rows = Math.floor(V.length / v.columns)), k)) {
								const Z = V.length % v.columns;
								V = V.slice(0, V.length - Z);
							}
						} else if (v.rows && !v.columns) {
							if (k) {
								const Z = V.length % v.rows;
								V = V.slice(0, V.length - Z);
							}
							v.columns = Math.ceil(V.length / v.rows);
						} else v?.columns && v?.rows && v.columns > 0 && v.rows > 0 && (V = V?.slice(0, v.columns * v.rows));
						const G = (0, h.Z)(v, a),
							[se, re] = (0, E.useState)(!1),
							oe = (0, c.li)(null);
						return (
							(!$?.enabled || (0, T.v)(oe, `${$.offset} 0px ${$.offset} 0px`, !0)) && re(!0),
							V?.length
								? (0, t.Y)(K._, {
										children: (0, t.Y)('div', {
											...G,
											ref: oe,
											className: n()('ss__recommendation-grid', j, H),
											children: se
												? (0, t.FD)(_.l, {
														controller: z,
														children: [
															F && (0, t.Y)('h3', { className: 'ss__recommendation-grid__title', children: F }),
															(0, t.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: V.map((Z) =>
																	w && z
																		? (0, o.Y)(w, {
																				controller: z,
																				result: Z,
																				theme: C ? g()(X || {}, { components: { result: { customComponent: P } } }) : X,
																				treePath: te,
																		  })
																		: J
																		? null
																		: (0, t.Y)(W.o, {
																				result: Z,
																				controller: z,
																				children: (0, t.Y)(M.Q, { ...q.result, result: Z, controller: z, treePath: te }, Z.id),
																		  })
																),
															}),
														],
												  })
												: (0, t.Y)(_.l, {
														controller: z,
														children: V.map((Z) => (0, t.Y)(W.o, { controller: z, result: Z, children: (0, t.Y)(t.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
				e.d(R, ['q', 0, B]);
			},
			'./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					s = e('./components/src/components/Templates/Search/Search.tsx');
				const n = (0, p.PA)((m) => (0, t.Y)(f._, { children: (0, t.Y)(s.v, { ...m, alias: 'searchCollapsible' }) }));
				e.d(R, ['x', 0, n]);
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(ee, R, e) {
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					s = e('./components/src/components/Templates/Search/Search.tsx');
				const n = (0, p.PA)((m) =>
					(0, t.Y)(f._, { children: (0, t.Y)(s.v, { ...m, alias: 'searchHorizontal', internalClassName: 'ss__search-horizontal' }) })
				);
				e.d(R, ['j', 0, n]);
			},
			'./components/src/components/Trackers/ResultTracker/index.ts'() {},
			'./components/src/hooks/useConstructor.tsx'(ee, R, e) {
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = (f = () => {}) => {
					const s = (0, t.li)(!1);
					s.current || (f(), (s.current = !0));
				};
				e.d(R, ['Q', 0, p]);
			},
			'./components/src/hooks/useTracking.tsx'(ee, R, e) {
				e.d(R, { z: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/utilities/createImpressionObserver.ts'),
					f = e('./components/src/providers/withTracking.tsx');
				function s({ controller: n, result: m, banner: g, type: M, content: o }) {
					n || console.warn('Warning: No controller provided to useTracking'),
						m || console.warn('Warning: No result provided to useTracking'),
						!m && !g && (!M || !o) && console.warn('Warning: No result or banner provided to withTracking');
					const { ref: l, inViewport: r } = (0, p.Q)();
					return (
						(0, t.vJ)(() => {
							r &&
								(M && o && !m && ['search', 'autocomplete'].includes(n?.type || '')
									? n?.track.banner.impression(o[M][0])
									: m?.bundleSeed || n?.track.product.impression(m || g));
						}, [r]),
						(0, t.vJ)(() => {
							const h = l.current;
							if (h) {
								const K = (x) => {
									M && o && !m && ['search', 'autocomplete'].includes(n?.type || '')
										? n?.track.banner.click(x, o[M][0])
										: n?.track.product.click(x, m || g);
								};
								return (
									h.setAttribute(f.N, 'true'),
									h.addEventListener('click', K),
									() => {
										h.removeEventListener('click', K);
									}
								);
							}
						}, [n, m, g, M, o]),
						{ trackingRef: l }
					);
				}
			},
			'./components/src/index.ts'(ee, R, e) {
				e.r(R),
					e.d(R, {
						A11Y_ATTRIBUTE: () => xe.aZ,
						Autocomplete: () => pe.j,
						BadgeImage: () => t.z,
						BadgePill: () => p.L,
						BadgeRectangle: () => f.Z,
						BadgeText: () => s.p,
						Banner: () => n.l,
						BranchOverride: () => q.n,
						Breadcrumbs: () => m.B,
						Button: () => g.$,
						CTASlot: () => ae.X,
						CalloutBadge: () => W.W,
						Carousel: () => E.FN,
						Checkbox: () => c.S,
						Dropdown: () => M.m,
						ErrorHandler: () => T.z,
						FALLBACK_IMAGE_URL: () => r.t,
						FOCUSABLE_ELEMENTS: () => xe.DH,
						Facet: () => V.s,
						FacetDisplay: () => ve.Q,
						FacetGridOptions: () => U.S,
						FacetHierarchyOptions: () => a.T,
						FacetListOptions: () => B.C,
						FacetPaletteOptions: () => d.P,
						FacetSlider: () => S.l,
						Facets: () => G.J,
						FacetsHorizontal: () => se.b,
						Filter: () => D.d,
						FilterSummary: () => re.r,
						FormattedNumber: () => o.G,
						Grid: () => i.x,
						Icon: () => l.I,
						Image: () => r._,
						InlineBanner: () => h._,
						Lang: () => Ae.Lang,
						LayoutSelector: () => L.s,
						List: () => N.B,
						LoadMore: () => v.e,
						LoadingBar: () => K.G,
						Modal: () => F.a,
						NoResults: () => oe.a,
						Overlay: () => x.h,
						OverlayBadge: () => k.Q,
						Pagination: () => Q.d,
						PaginationInfo: () => A.R,
						PerPage: () => j.F,
						Price: () => O.g,
						Radio: () => H.s,
						RadioList: () => te.q,
						Rating: () => X.G,
						Recommendation: () => Oe.A,
						RecommendationBundle: () => he.g,
						RecommendationBundleEasyAdd: () => me.F,
						RecommendationBundleList: () => ae.a,
						RecommendationBundleVertical: () => _e.a,
						RecommendationEmail: () => Ee.i,
						RecommendationGrid: () => ge.q,
						RecommendationProfileTracker: () => fe.l,
						RecommendationResultTracker: () => Me.o,
						RecommendationResultTrackerProps: () => ne.ResultTrackerProps,
						Result: () => z.Q,
						ResultTracker: () => Me.o,
						Results: () => le.n,
						ResultsLayout: () => ve.V,
						Search: () => De.v,
						SearchCollapsible: () => Ce.x,
						SearchHeader: () => y.w,
						SearchHorizontal: () => Pe.j,
						SearchInput: () => P.D,
						Select: () => u.l,
						Sidebar: () => Z.B,
						Skeleton: () => _.E,
						Slideout: () => C.S,
						Slideshow: () => J.b,
						SortBy: () => I.g,
						Swatches: () => b.l,
						TemplatesEditor: () => Y.j,
						Terms: () => $.i,
						TermsList: () => ce.G,
						Toolbar: () => ie.M,
						VariantSelection: () => w.m,
						base: () => ue.E3,
						bocachica: () => ue.SE,
						createHoverProps: () => Ye.l,
						defaultCarouselBreakpoints: () => E.K,
						defaultVerticalCarouselBreakpoints: () => E.og,
						getDisplaySettings: () => Re.Q,
						iconPaths: () => l.c,
						pike: () => ue.Ct,
						recommendationEmailThemeComponentProps: () => Ee.O,
						snapnco: () => ue.NZ,
						snappy: () => ue.mJ,
						useA11y: () => xe.iy,
						useClickOutside: () => de.L,
						useConstructor: () => ye.Q,
						useCreateController: () => Se.i,
						useDeepCompareEffect: () => Be.I,
						useDeepCompareMemoize: () => Be.r,
						useDisplaySettings: () => Re.X,
						useFuncDebounce: () => be.d,
						useIntersection: () => Ke.v,
						useIntersectionAdvanced: () => Ue.v,
						useLang: () => Ae.u,
						useMediaQuery: () => We.U,
						useTracking: () => Ne.z,
					});
				var t = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'),
					p = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					f = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					n = e('./components/src/components/Atoms/Banner/Banner.tsx'),
					m = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					M = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					o = e('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'),
					l = e('./components/src/components/Atoms/Icon/index.ts'),
					r = e('./components/src/components/Atoms/Image/Image.tsx'),
					h = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					K = e('./components/src/components/Atoms/LoadingBar/LoadingBar.tsx'),
					x = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					A = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx'),
					O = e('./components/src/components/Atoms/Price/Price.tsx'),
					y = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
					_ = e('./components/src/components/Atoms/Skeleton/Skeleton.tsx'),
					W = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					E = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					c = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					T = e('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
					U = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					a = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					B = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
					d = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					S = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					D = e('./components/src/components/Molecules/Filter/Filter.tsx'),
					L = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx'),
					N = e('./components/src/components/Molecules/List/List.tsx'),
					v = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					i = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					F = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					k = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					Q = e('./components/src/components/Molecules/Pagination/Pagination.tsx'),
					j = e('./components/src/components/Molecules/PerPage/PerPage.tsx'),
					H = e('./components/src/components/Molecules/Radio/Radio.tsx'),
					te = e('./components/src/components/Molecules/RadioList/RadioList.tsx'),
					X = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					z = e('./components/src/components/Molecules/Result/Result.tsx'),
					P = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					u = e('./components/src/components/Molecules/Select/Select.tsx'),
					C = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					I = e('./components/src/components/Molecules/SortBy/SortBy.tsx'),
					Y = e('./components/src/components/Molecules/TemplatesEditor/TemplatesEditor.tsx'),
					b = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					J = e('./components/src/components/Molecules/Slideshow/Slideshow.tsx'),
					w = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'),
					$ = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					q = e('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
					V = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					G = e('./components/src/components/Organisms/Facets/Facets.tsx'),
					se = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
					re = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx'),
					oe = e('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					le = e('./components/src/components/Organisms/Results/Results.tsx'),
					Z = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx'),
					ie = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
					pe = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					ce = e('./components/src/components/Organisms/TermsList/TermsList.tsx'),
					Oe = e('./components/src/components/Templates/Recommendation/Recommendation.tsx'),
					he = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					me = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					ae = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					_e = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'),
					ge = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					Ee = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					De = e('./components/src/components/Templates/Search/Search.tsx'),
					Pe = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'),
					Ce = e('./components/src/components/Templates/SearchCollapsible/SearchCollapsible.tsx'),
					ve = e('./components/src/types.ts'),
					fe = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					Me = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					ne = e('./components/src/components/Trackers/ResultTracker/index.ts'),
					de = e('./components/src/hooks/useClickOutside.tsx'),
					ye = e('./components/src/hooks/useConstructor.tsx'),
					We = e('./components/src/hooks/useMediaQuery.tsx'),
					Ke = e('./components/src/hooks/useIntersection.tsx'),
					Ue = e('./components/src/hooks/useIntersectionAdvanced.tsx'),
					Re = e('./components/src/hooks/useDisplaySettings.tsx'),
					be = e('./components/src/hooks/useFuncDebounce.tsx'),
					xe = e('./components/src/hooks/useA11y.tsx'),
					Ae = e('./components/src/hooks/useLang.tsx'),
					Be = e('./components/src/hooks/useDeepCompareEffect.tsx'),
					Se = e('./components/src/hooks/useCreateController.tsx'),
					Ne = e('./components/src/hooks/useTracking.tsx'),
					Le = e('./components/src/providers/index.ts'),
					Ie = {};
				for (const Te in Le)
					[
						'default',
						'RecommendationResultTracker',
						'RecommendationResultTrackerProps',
						'useLang',
						'Lang',
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
						'Radio',
						'RadioList',
						'Rating',
						'Result',
						'SearchInput',
						'Select',
						'Slideout',
						'SortBy',
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
					].indexOf(Te) < 0 && (Ie[Te] = () => Le[Te]);
				e.d(R, Ie);
				var Ye = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					ue = e('./components/src/themes/index.ts');
			},
			'./components/src/providers/index.ts'(ee, R, e) {
				e.r(R),
					e.d(R, {
						ALL_CUSTOM_COMPONENT_TYPES: () => m.C,
						CacheProvider: () => t._,
						ControllerProvider: () => p.e2,
						DEFAULT_CUSTOM_COMPONENT_TYPES: () => m.o,
						SnapProvider: () => l.Mz,
						StoreProvider: () => f.tv,
						TRACKING_ATTRIBUTE: () => n.N,
						ThemeProvider: () => s.NP,
						TreePathProvider: () => r.p3,
						css: () => s.AH,
						defaultTheme: () => s.zQ,
						useController: () => p.as,
						useSnap: () => l.uk,
						useStore: () => f.Pj,
						useTheme: () => s.DP,
						useTreePath: () => r.LU,
						withController: () => p.Bk,
						withSnap: () => l.b$,
						withStore: () => f.aH,
						withTheme: () => s.SL,
						withTracking: () => n.W,
						withTreePath: () => r.QE,
					});
				var t = e('./components/src/providers/cache.tsx'),
					p = e('./components/src/providers/controller.tsx'),
					f = e('./components/src/providers/store.tsx'),
					s = e('./components/src/providers/theme.ts'),
					n = e('./components/src/providers/withTracking.tsx'),
					m = e('./components/src/providers/themeComponents.ts'),
					g = e('./components/src/providers/langComponents.ts'),
					M = e.n(g),
					o = {};
				for (const h in g)
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
					].indexOf(h) < 0 && (o[h] = () => g[h]);
				e.d(R, o);
				var l = e('./components/src/providers/snap.tsx'),
					r = e('./components/src/providers/treePath.tsx');
			},
			'./components/src/providers/langComponents.ts'() {},
			'./components/src/providers/store.tsx'(ee, R, e) {
				e.d(R, { aH: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					f = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = (0, p.q6)(null),
					n = s.Provider,
					m = ({ children: o, store: l }) => (0, t.Y)(n, { value: l, children: o }),
					g = () => (0, f.NT)(s);
				function M(o) {
					return (l) => {
						const r = o;
						return (0, t.Y)(r, { store: g(), ...l });
					};
				}
				e.d(R, ['Pj', 0, g, 'tv', 0, m]);
			},
			'./components/src/themes/index.ts'(ee, R, e) {
				e.d(R, { Ct: () => f.pike, E3: () => t.E, NZ: () => s.N, SE: () => p.S, mJ: () => n.m });
				var t = e('./components/src/themes/base/base.ts'),
					p = e('./components/src/themes/bocachica/bocachica.ts'),
					f = e('./components/src/themes/pike/pike.ts'),
					s = e('./components/src/themes/snapnco/snapnco.ts'),
					n = e('./components/src/themes/snappy/snappy.ts');
			},
			'./components/src/utilities/Colour/Colour.ts'(ee, R, e) {
				e.d(R, { V: () => t });
				class t {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const s = parseInt(this.hexValue.slice(1, 3), 16),
								n = parseInt(this.hexValue.slice(3, 5), 16),
								m = parseInt(this.hexValue.slice(5, 7), 16),
								M = [s / 255, n / 255, m / 255].map((l) => (l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)));
							return 0.2126 * M[0] + 0.7152 * M[1] + 0.0722 * M[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(s) {
						(this.value = s),
							s &&
								(s.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (s = `#${s[1].repeat(2)}${s[2].repeat(2)}${s[3].repeat(2)}`),
								t.isHex(s)
									? ((this.hexValue = s), (this.rgbValue = t.hexToRgb(s)))
									: t.isRgb(s) && ((this.rgbValue = s), (this.hexValue = t.rgbToHex(s))));
					}
					shift(s) {
						return new t(t.brightness(this.hex, s));
					}
					lighten(s) {
						return s < 0 ? this : new t(t.brightness(this.hex, s));
					}
					darken(s) {
						return s < 0 ? this : new t(t.brightness(this.hex, -s));
					}
					opacity(s) {
						return new t(t.opacity(this.hex, s));
					}
					transparency(s) {
						return s < 0 ? this : new t(t.opacity(this.hex, s));
					}
					opaque(s) {
						return s < 0 ? this : new t(t.opacity(this.hex, -s));
					}
					static isRgb(s) {
						return !!(
							s.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							s.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(s) {
						return !!(s.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || s.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(s) {
						if (!t.isHex(s)) throw 'invalid hex supplied';
						const n = parseInt(s.slice(1, 3), 16),
							m = parseInt(s.slice(3, 5), 16),
							g = parseInt(s.slice(5, 7), 16),
							M = parseInt(s.slice(7, 9), 16);
						return Number.isInteger(M) ? `rgba(${n}, ${m}, ${g}, ${p(M / 255)})` : `rgb(${n}, ${m}, ${g})`;
					}
					static rgbToHex(s) {
						if (!t.isRgb(s)) throw 'invalid rgb supplied';
						const [n, m, g, M] = (s.match(/[0-9]?\.?[0-9]+%?/g) || []).map((o, l) => {
							if (l == 3) {
								o.match(/%/) && (o = (Number(o.replace('%', '').trim()) / 100).toString());
								let r = Number(o);
								(Number.isNaN(r) || r > 1) && (r = 1), r < 0 && (r = 0), (o = Math.floor(r * 255).toString());
							}
							return Number(o).toString(16).padStart(2, '0');
						});
						return `#${n}${m}${g}${M || ''}`;
					}
					static opacity(s, n) {
						let m = !1;
						if ((s && t.isRgb(s) && ((m = !0), (s = t.rgbToHex(s))), !s || !t.isHex(s) || !Number.isInteger(n))) return s;
						n > 255 && (n = 255), n < -255 && (n = -255);
						const g = s.slice(7, 9) || 'ff';
						let o = parseInt(g, 16) - n;
						o > 255 ? (o = 255) : o < 0 && (o = 0);
						const l = o.toString(16).padStart(2, '0'),
							r = `${s.slice(0, 7)}${l}`;
						return m ? t.hexToRgb(r) : r;
					}
					static brightness(s, n) {
						let m = !1;
						if ((s && t.isRgb(s) && ((m = !0), (s = t.rgbToHex(s))), !s || !t.isHex(s) || !Number.isInteger(n))) return s;
						n > 255 && (n = 255), n < -255 && (n = -255);
						const g = s.slice(1, 7),
							M = parseInt(g, 16);
						let o = (M & 255) + n;
						o > 255 ? (o = 255) : o < 0 && (o = 0);
						let l = ((M >> 8) & 255) + n;
						l > 255 ? (l = 255) : l < 0 && (l = 0);
						let r = (M >> 16) + n;
						r > 255 ? (r = 255) : r < 0 && (r = 0);
						const h = `#${(o | (l << 8) | (r << 16)).toString(16).padStart(6, '0')}${s.slice(7, 9)}`;
						return m ? t.hexToRgb(h) : h;
					}
				}
				function p(f) {
					const s = Math.floor(f),
						n = f - s;
					if (!n) return f;
					const m = Math.floor(n * 10) * 10,
						g = Math.round(f * 100 - m);
					return s + (m + g) / 100;
				}
			},
			'../../node_modules/react-ranger/dist/react-ranger.mjs'(ee, R, e) {
				e.d(R, { d: () => M });
				var t = e('../../node_modules/preact/compat/dist/compat.module.js');
				function p() {
					return (
						(p =
							Object.assign ||
							function (o) {
								for (var l = 1; l < arguments.length; l++) {
									var r = arguments[l];
									for (var h in r) Object.prototype.hasOwnProperty.call(r, h) && (o[h] = r[h]);
								}
								return o;
							}),
						p.apply(this, arguments)
					);
				}
				function f(o, l) {
					if (o == null) return {};
					var r = {},
						h = Object.keys(o),
						K,
						x;
					for (x = 0; x < h.length; x++) (K = h[x]), !(l.indexOf(K) >= 0) && (r[K] = o[K]);
					return r;
				}
				var s = function (l) {
						var r = l.getBoundingClientRect();
						return { left: Math.ceil(r.left), width: Math.ceil(r.width) };
					},
					n = function (l) {
						return [].concat(l).sort(function (r, h) {
							return Number(r) - Number(h);
						});
					},
					m = function (l) {
						var r = t.default.useRef(l);
						return (
							(r.current = l),
							t.default.useCallback(function () {
								return r.current;
							}, [])
						);
					},
					g = {
						getPercentageForValue: function (l, r, h) {
							return Math.max(0, Math.min(100, ((l - r) / (h - r)) * 100));
						},
						getValueForClientX: function (l, r, h, K) {
							var x = r.left,
								A = r.width,
								O = (l - x) / A,
								y = (K - h) * O;
							return y + h;
						},
					};
				function M(o) {
					var l = o.interpolator,
						r = l === void 0 ? g : l,
						h = o.tickSize,
						K = h === void 0 ? 10 : h,
						x = o.values,
						A = o.min,
						O = o.max,
						y = o.ticks,
						_ = o.steps,
						W = o.onChange,
						E = o.onDrag,
						c = o.stepSize,
						T = t.default.useState(null),
						U = T[0],
						a = T[1],
						B = t.default.useState(),
						d = B[0],
						S = B[1],
						D = m({ activeHandleIndex: U, onChange: W, onDrag: E, values: x, tempValues: d }),
						L = t.default.useRef(),
						N = t.default.useCallback(
							function (P) {
								var u = s(L.current);
								return r.getValueForClientX(P, u, A, O);
							},
							[r, O, A]
						),
						v = t.default.useCallback(
							function (P, u) {
								if (_) {
									var C = _.indexOf(P),
										I = C + u;
									return I >= 0 && I < _.length ? _[I] : P;
								} else {
									var Y = P + c * u;
									return Y >= A && Y <= O ? Y : P;
								}
							},
							[O, A, c, _]
						),
						i = t.default.useCallback(
							function (P) {
								var u = A,
									C = O;
								if (_)
									_.forEach(function (I) {
										I <= P && I > u && (u = I), I >= P && I < C && (C = I);
									});
								else {
									for (; u < P && u + c < P; ) u += c;
									C = Math.min(u + c, O);
								}
								return P - u < C - P ? u : C;
							},
							[O, A, c, _]
						),
						F = t.default.useCallback(
							function (P) {
								var u = D(),
									C = u.activeHandleIndex,
									I = u.onDrag,
									Y = P.type === 'touchmove' ? P.changedTouches[0].clientX : P.clientX,
									b = N(Y),
									J = i(b),
									w = [].concat(x.slice(0, C), [J], x.slice(C + 1));
								I ? I(w) : S(w);
							},
							[D, N, i, x]
						),
						k = t.default.useCallback(
							function (P, u) {
								var C = D(),
									I = C.values,
									Y = C.onChange,
									b = Y === void 0 ? function () {} : Y;
								if (P.keyCode === 37 || P.keyCode === 39) {
									a(u);
									var J = P.keyCode === 37 ? -1 : 1,
										w = v(I[u], J),
										$ = [].concat(I.slice(0, u), [w], I.slice(u + 1)),
										q = n($);
									b(q);
								}
							},
							[D, v]
						),
						Q = t.default.useCallback(
							function (P, u) {
								a(u);
								var C = function I(Y) {
									var b = D(),
										J = b.tempValues,
										w = b.values,
										$ = b.onChange,
										q = $ === void 0 ? function () {} : $,
										V = b.onDrag,
										G = V === void 0 ? function () {} : V;
									document.removeEventListener('mousemove', F),
										document.removeEventListener('touchmove', F),
										document.removeEventListener('mouseup', I),
										document.removeEventListener('touchend', I);
									var se = n(J || w);
									q(se), G(se), a(null), S();
								};
								document.addEventListener('mousemove', F),
									document.addEventListener('touchmove', F),
									document.addEventListener('mouseup', C),
									document.addEventListener('touchend', C);
							},
							[D, F]
						),
						j = t.default.useCallback(
							function (P) {
								return r.getPercentageForValue(P, A, O);
							},
							[r, O, A]
						),
						H = t.default.useMemo(
							function () {
								var P = y || _;
								if (!P) {
									for (P = [A]; P[P.length - 1] < O - K; ) P.push(P[P.length - 1] + K);
									P.push(O);
								}
								return P.map(function (u, C) {
									return {
										value: u,
										getTickProps: function (Y) {
											var b = Y === void 0 ? {} : Y,
												J = b.key,
												w = J === void 0 ? C : J,
												$ = b.style,
												q = $ === void 0 ? {} : $,
												V = f(b, ['key', 'style']);
											return p({ key: w, style: p({ position: 'absolute', width: 0, left: j(u) + '%', transform: 'translateX(-50%)' }, q) }, V);
										},
									};
								});
							},
							[y, j, O, A, _, K]
						),
						te = t.default.useMemo(
							function () {
								var P = n(d || x);
								return [].concat(P, [O]).map(function (u, C) {
									return {
										value: u,
										getSegmentProps: function (Y) {
											var b = Y === void 0 ? {} : Y,
												J = b.key,
												w = J === void 0 ? C : J,
												$ = b.style,
												q = $ === void 0 ? {} : $,
												V = f(b, ['key', 'style']),
												G = j(P[C - 1] ? P[C - 1] : A),
												se = j(u) - G;
											return p({ key: w, style: p({ position: 'absolute', left: G + '%', width: se + '%' }, q) }, V);
										},
									};
								});
							},
							[j, O, A, d, x]
						),
						X = t.default.useMemo(
							function () {
								return (d || x).map(function (P, u) {
									return {
										value: P,
										active: u === U,
										getHandleProps: function (I) {
											var Y = I === void 0 ? {} : I,
												b = Y.key,
												J = b === void 0 ? u : b,
												w = Y.ref,
												$ = Y.innerRef,
												q = Y.onKeyDown,
												V = Y.onMouseDown,
												G = Y.onTouchStart,
												se = Y.style,
												re = se === void 0 ? {} : se,
												oe = f(Y, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
											return p(
												{
													key: J,
													onKeyDown: function (Z) {
														Z.persist(), k(Z, u), q && q(Z);
													},
													onMouseDown: function (Z) {
														Z.persist(), Q(Z, u), V && V(Z);
													},
													onTouchStart: function (Z) {
														Z.persist(), Q(Z, u), G && G(Z);
													},
													role: 'slider',
													'aria-valuemin': A,
													'aria-valuemax': O,
													'aria-valuenow': P,
													style: p(
														{ position: 'absolute', top: '50%', left: j(P) + '%', zIndex: u === U ? '1' : '0', transform: 'translate(-50%, -50%)' },
														re
													),
												},
												oe
											);
										},
									};
								});
							},
							[U, j, k, Q, A, O, d, x]
						),
						z = function (u) {
							var C = u === void 0 ? {} : u,
								I = C.style,
								Y = I === void 0 ? {} : I,
								b = C.ref,
								J = f(C, ['style', 'ref']);
							return p(
								{
									ref: function ($) {
										(L.current = $), b && (typeof b == 'function' ? b($) : (b.current = $));
									},
									style: p({ position: 'relative', userSelect: 'none' }, Y),
								},
								J
							);
						};
					return { activeHandleIndex: U, getTrackProps: z, ticks: H, segments: te, handles: X };
				}
			},
		},
	]);
})();
