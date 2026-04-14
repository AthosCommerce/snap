'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1116],
		{
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(m, i, o) {
				o.d(i, { n: () => R });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = o('../../node_modules/classnames/index.js'),
					l = o.n(d),
					p = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = o('./components/src/utilities/defined.ts'),
					P = o('./components/src/utilities/mergeProps.ts'),
					D = o('./components/src/utilities/mergeStyles.ts'),
					M = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = o('./components/src/providers/snap.tsx'),
					I = o('./components/src/providers/treePath.tsx'),
					B = o('./components/src/hooks/useComponent.tsx');
				const T = ({ componentTheme: t }) =>
						(0, c.AH)({
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
							background: t.main.background,
							color: t.main.color,
							border: t.main.border,
							borderTopLeftRadius: '10px',
							borderBottomLeftRadius: '10px',
							boxShadow: t.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-323px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px 5px',
								background: t.top.background,
								borderBottom: t.top.border,
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
									border: t.top.button.border,
									color: t.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: t.bottom.branch.style,
									color: t.bottom.branch.color,
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
									color: t.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					s = {
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
					R = (t) => {
						const A = (0, M.u)(),
							y = (0, C.uk)(),
							S = { treePath: (0, I.LU)() },
							_ = (0, P.v6)('branchOverride', A, S, t),
							{
								branch: h,
								details: b,
								error: a,
								className: W,
								internalClassName: L,
								darkMode: g,
								disableStyles: k,
								onRemoveClick: v,
								treePath: K,
								customComponent: x,
							} = _;
						if (x) {
							const r = (0, B.x)(y?.templates?.library.import.component.branchOverride || {}, x);
							if (r) return (0, e.Y)(r, { ..._ });
						}
						const u = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, O.s)({ disableStyles: k }),
									theme: _?.theme,
									treePath: K,
								},
							},
							U = typeof g == 'boolean' ? g : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[n, N] = (0, p.J0)(U ? 'darkTheme' : 'lightTheme'),
							[w, E] = (0, p.J0)(0);
						a && N('failureTheme');
						const Y = (0, D.Z)({ ..._, componentTheme: s[n] }, T);
						return (b || a) && h
							? (0, e.FD)('div', {
									className: l()('ss__branch-override', s[n].class, { 'ss__branch-override--collapsed': w }, W, L),
									...Y,
									onClick: (r) => {
										r.preventDefault(), r.stopPropagation(), E(0);
									},
									children: [
										(0, e.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, e.Y)('img', { className: 'ss__branch-override__top__logo', src: s[n].top.logo.src }),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (r) => {
														r.preventDefault(), r.stopPropagation(), E(1);
													},
													children: (0, e.Y)(f.I, { size: '18px', color: s[n].top.close.fill, ...u.icon, icon: 'close-thin' }),
												}),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (r) => {
														r.preventDefault(), r.stopPropagation(), v && v(r, h);
													},
													children: s[n].top.button.content,
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, e.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: a
														? (0, e.FD)(e.FK, {
																children: [
																	(0, e.Y)(f.I, { size: '12px', color: s[n].bottom.branch.color, ...u.icon, icon: 'warn' }),
																	(0, e.Y)('span', { children: a.message }),
																],
														  })
														: h,
												}),
												(0, e.Y)('span', { className: 'ss__branch-override__bottom__right', children: a ? h : b?.lastModified }),
												(0, e.Y)('div', { className: 'ss__branch-override__bottom__content', children: a?.description || s[n].bottom.content }),
											],
										}),
									],
							  })
							: null;
					};
			},
			'./components/src/components/Organisms/BranchOverride/index.ts'(m, i, o) {
				o.r(i), o.d(i, { BranchOverride: () => e.n });
				var e = o('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx');
			},
			'./components/src/utilities/defined.ts'(m, i, o) {
				o.d(i, { s: () => e });
				function e(c) {
					const d = {};
					return (
						Object.keys(c).map((l) => {
							c[l] !== void 0 && (d[l] = c[l]);
						}),
						d
					);
				}
			},
		},
	]);
})();
