(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9753],
		{
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx'(f, d, s) {
				'use strict';
				s.r(d), s.d(d, { CustomError: () => _, Error: () => c, Info: () => n, Warning: () => i, __namedExportsOrder: () => y, default: () => u });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = s('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					e = s('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
					o = s('./components/src/utilities/storybook.tsx'),
					r = s('./components/src/utilities/componentArgs.ts');
				const a = `# ErrorHandler

Renders error messages.

## Sub-components
- Icon
- Button

## Usage
\`\`\`jsx
import { ErrorHandler } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to a Snap controller. This is the standard usage.

\`\`\`jsx
<ErrorHandler controller={controller} />
\`\`\`

### error
The \`error\` prop provides an alternative means of utilizing the component to display errors messages.

\`\`\`jsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 500,
	type: ErrorType.ERROR,
	message: 'Invalid Search Request or Service Unavailable',
}

<ErrorHandler error={errorObject} />
\`\`\`

### onRetryClick
When a request has been rate limited, a 'warning' error with code \`429\` will be generated. For this error the component will render a 'retry' button to try the request again. By default the retry button will run the provided controller's \`search\` method unless the \`onRetryClick\` prop is provided.

\`\`\`jsx
<ErrorHandler controller={controller} onRetryClick={(e) => {
    // do something
    controller.search();
}}/>
\`\`\`

\`\`\`jsx
import { ErrorType } from '@athoscommerce/snap-store-mobx';
const errorObject = {
	code: 429,
	type: ErrorType.WARNING,
	message: 'Too many requests try again later',
}

<ErrorHandler error={errorObject} onRetryClick={(e) => {
    // do something
}}/>
\`\`\`


## ErrorHandle Types

\`\`\`js
import { ErrorType } from '@athoscommerce/snap-store-mobx';

export enum ErrorType {
	WARNING = 'warning',
	INFO = 'info',
	ERROR = 'error',
}
\`\`\``,
					u = {
						title: 'Molecules/ErrorHandler',
						component: e.z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: o.Z } }, children: a }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, t.Y)('div', { style: { maxWidth: '1200px' }, children: (0, t.Y)(p, {}) })],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller object' } }, control: { type: 'none' } },
							error: {
								description: 'Error object containing message and type',
								table: { type: { summary: 'Error object' } },
								control: { type: 'object' },
							},
							onRetryClick: {
								description: 'Retry button click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onRetryClick',
							},
							...r.F,
						},
					},
					i = (p) => (0, t.Y)(e.z, { ...p });
				i.args = { controller: { store: { error: { code: 429, type: l.B.WARNING, message: 'Too many requests try again later' } } } };
				const c = (p) => (0, t.Y)(e.z, { ...p });
				c.args = { controller: { store: { error: { code: 500, type: l.B.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } };
				const n = (p) => (0, t.Y)(e.z, { ...p });
				n.args = { controller: { store: { error: { code: 200, type: l.B.INFO, message: 'Something important happened' } } } };
				const _ = (p) => (0, t.Y)(e.z, { ...p });
				(_.args = { error: { type: l.B.INFO, message: 'Custom error using info type' } }),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...i.parameters?.docs?.source },
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...c.parameters?.docs?.source },
						},
					}),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...n.parameters?.docs?.source },
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ..._.parameters?.docs?.source },
						},
					});
				const y = ['Warning', 'Error', 'Info', 'CustomError'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(f, d, s) {
				'use strict';
				s.d(d, { $: () => B });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = s('../../node_modules/classnames/index.js'),
					e = s.n(l),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					r = s('./components/src/providers/cache.tsx'),
					a = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = s('./components/src/providers/snap.tsx'),
					i = s('./components/src/providers/treePath.tsx'),
					c = s('./components/src/hooks/useA11y.tsx'),
					n = s('./components/src/utilities/cloneWithProps.tsx'),
					_ = s('./components/src/utilities/defined.ts'),
					y = s('./components/src/utilities/mergeProps.ts'),
					p = s('./components/src/utilities/mergeStyles.ts'),
					U = s('./components/src/components/Atoms/Icon/Icon.tsx'),
					I = s('./components/src/hooks/useLang.tsx'),
					V = s('./components/src/hooks/useComponent.tsx'),
					F = s('../../node_modules/deepmerge/dist/cjs.js'),
					k = s.n(F),
					z = s('../../node_modules/color/index.js'),
					h = s.n(z);
				const L = ({ native: j, color: P, backgroundColor: x, borderColor: N, theme: O }) => {
						const D = new (h())(x || P || O?.variables?.colors?.primary || void 0).lightness(95);
						return j
							? (0, m.AH)({})
							: (0, m.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: P || O?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: x || '#fff',
									border: `1px solid ${N || P || O?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: D.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					B = (0, o.PA)((j) => {
						const P = (0, a.u)(),
							x = (0, u.uk)(),
							O = { disableA11y: !1, treePath: (0, i.LU)() },
							D = (0, y.v6)('button', P, O, j),
							{
								content: T,
								children: b,
								disabled: v,
								native: K,
								onClick: W,
								disableA11y: H,
								disableStyles: w,
								className: Z,
								internalClassName: S,
								icon: E,
								lang: M,
								treePath: g,
								customComponent: Y,
								style: G,
								styleScript: J,
								themeStyleScript: R,
								...C
							} = D;
						if (Y) {
							const A = (0, V.x)(x?.templates?.library.import.component.button || {}, Y);
							if (A) return (0, t.Y)(A, { ...D });
						}
						const Q = { icon: { internalClassName: 'ss__button__icon', ...(0, _.s)({ disableStyles: w }), theme: D?.theme, treePath: g } },
							X = {
								...(0, p.Z)(D, L),
								className: e()('ss__button', { 'ss__button--native': K, 'ss__button--disabled': v }, Z, S),
								disabled: v,
								onClick: (A) => !v && W && W(A),
								...C,
							},
							q = { ref: (A) => (0, c.iy)(A) },
							ee = {},
							te = k()(ee, M || {}),
							$ = (0, I.u)(te, {});
						return T || b || E || M?.button?.value
							? (0, t.Y)(r._, {
									children: K
										? (0, t.FD)('button', {
												...X,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...$.button?.all,
														children: [(0, n.Y)(T, { treePath: g }), (0, n.Y)(b, { treePath: g })],
													}),
													E && (0, t.Y)(U.I, { ...Q.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  })
										: (0, t.FD)('div', {
												...(H ? {} : q),
												role: 'button',
												'aria-disabled': v,
												...X,
												...$.button?.attributes,
												children: [
													T || b || $.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...$.button?.value,
																children: [(0, n.Y)(T, { treePath: g }), (0, n.Y)(b, { treePath: g })],
														  })
														: void 0,
													E && (0, t.Y)(U.I, { ...Q.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(f, d, s) {
				'use strict';
				s.d(d, { z: () => P });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = s('../../node_modules/classnames/index.js'),
					e = s.n(l),
					o = s('../../node_modules/mobx-react-lite/es/index.js'),
					r = s('./components/src/components/Atoms/Icon/Icon.tsx'),
					a = s('./components/src/components/Atoms/Button/Button.tsx'),
					u = s('./components/src/utilities/defined.ts'),
					i = s('./components/src/utilities/Colour/Colour.ts'),
					c = s('./components/src/utilities/mergeProps.ts'),
					n = s('./components/src/utilities/mergeStyles.ts'),
					_ = s('./components/src/providers/cache.tsx'),
					y = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = s('./components/src/providers/snap.tsx'),
					U = s('./components/src/providers/treePath.tsx'),
					I = s('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					V = s('./components/src/hooks/useLang.tsx'),
					F = s('./components/src/hooks/useComponent.tsx'),
					k = s('../../node_modules/deepmerge/dist/cjs.js'),
					z = s.n(k);
				const h = new i.V('#ecaa15'),
					L = new i.V('#cc1212'),
					B = new i.V('#4c3ce2'),
					j = ({ theme: x }) =>
						(0, m.AH)({
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
								borderColor: x?.variables?.colors?.primary,
								width: ['150px', 'fit-content'],
								margin: '5px 10px',
								'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
								'.ss__icon': { margin: '0 5px 0 0' },
							},
							'&.ss__error-handler--error': {
								backgroundColor: L.lighten(180).hex,
								borderLeftColor: L.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: L.hex } },
							},
							'&.ss__error-handler--warning': {
								backgroundColor: h.lighten(180).hex,
								borderLeftColor: h.hex,
								'.ss__icon': { fill: h.hex, stroke: h.hex },
								'.ss__error-handler__button': {
									color: h.hex,
									borderColor: h.hex,
									fontWeight: 'bold',
									textTransform: 'uppercase',
									display: 'inline-flex',
									alignItems: 'center',
									'.ss__button__content': { order: 2 },
									'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: h.hex, stroke: h.hex },
									'&:hover': {
										color: h.darken(30).hex,
										borderColor: h.darken(30).hex,
										'.ss__button__icon': { fill: h.darken(30).hex, stroke: h.darken(30).hex },
									},
								},
							},
							'&.ss__error-handler--info': {
								backgroundColor: B.lighten(180).hex,
								borderLeftColor: B.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: B.hex } },
							},
						}),
					P = (0, o.PA)((x) => {
						const N = (0, y.u)(),
							O = (0, p.uk)(),
							T = { treePath: (0, U.LU)() },
							b = (0, c.v6)('errorHandler', N, T, x),
							{ controller: v, error: K, disableStyles: W, onRetryClick: H, className: w, internalClassName: Z, treePath: S, customComponent: E } = b;
						if (E) {
							const C = (0, F.x)(O?.templates?.library.import.component.errorHandler || {}, E);
							if (C) return (0, t.Y)(C, { ...b });
						}
						const M = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, u.s)({ disableStyles: W }), theme: b.theme, treePath: S },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, u.s)({ disableStyles: W }),
									theme: b.theme,
									treePath: S,
								},
							},
							g = v?.store?.error || K,
							Y = (0, n.Z)(b, j),
							G = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							J = z()(G, b.lang || {}),
							R = (0, V.u)(J, { controller: v });
						return Object.values(I.B).includes(g?.type) && g?.message
							? (0, t.Y)(_._, {
									children: (0, t.Y)('div', {
										className: e()('ss__error-handler', `ss__error-handler--${g.type}`, w, Z),
										...Y,
										children: (() => {
											switch (g.type) {
												case I.B.WARNING:
													return (0, t.FD)(t.FK, {
														children: [
															(0, t.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, t.Y)(r.I, { ...M.icon, icon: 'warn' }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...R.warningText?.all }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: g.message }),
																],
															}),
															g?.code == 429
																? (0, t.Y)(a.$, {
																		...M.buttonRetry,
																		onClick: (C) => {
																			H ? H(C) : v?.search();
																		},
																		...R.reloadText.attributes,
																		children: (0, t.Y)('span', { className: 'ss__error-handler__button__text', ...R.reloadText.value }),
																  })
																: null,
														],
													});
												case I.B.ERROR:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(r.I, { ...M.icon, icon: 'error' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...R.errorText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: g.message }),
														],
													});
												case I.B.INFO:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(r.I, { ...M.icon, icon: 'info' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...R.infoText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: g.message }),
														],
													});
											}
										})(),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(f, d, s) {
				'use strict';
				s.d(d, { DH: () => e, aZ: () => l, iy: () => o });
				const t = 9,
					m = 27,
					l = 'ss-a11y',
					e =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function o(r, a, u, i) {
					const c = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${c}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = c),
							(n.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					r &&
						!r.attributes?.[l] &&
						(r.setAttribute(l, !0),
						r.setAttribute('tabIndex', `${a || 0}`),
						r.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && r.click();
						}),
						u &&
							r.addEventListener('keydown', function (n) {
								const _ = r.querySelectorAll(e),
									y = _[0],
									p = _[_.length - 1];
								if (n.keyCode == m) {
									r.focus(), i && i(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === y && (p.focus(), n.preventDefault())
										: document.activeElement === p && (y.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(f, d, s) {
				'use strict';
				s.d(d, { u: () => t });
				const t = (m, l) => {
					const e = {};
					return (
						Object.keys(m).forEach((o) => {
							const r = m && m[o],
								a = {};
							r &&
								(r?.value &&
									(typeof r.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: r.value(l) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: r.value } })),
								r?.attributes &&
									Object.keys(r?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									r?.attributes?.['aria-label'] &&
										(typeof r.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = r.attributes['aria-label'](l))
											: (a.attributes['aria-label'] = r.attributes['aria-label'])),
									r?.attributes?.['aria-valuetext'] &&
										(typeof r.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = r.attributes['aria-valuetext'](l))
											: (a.attributes['aria-valuetext'] = r.attributes['aria-valuetext'])),
									r?.attributes?.title &&
										(typeof r.attributes?.title == 'function'
											? (a.attributes.title = r.attributes.title(l))
											: (a.attributes.title = r.attributes.title)),
									r?.attributes?.alt &&
										(typeof r.attributes?.alt == 'function' ? (a.attributes.alt = r.attributes.alt(l)) : (a.attributes.alt = r.attributes.alt)),
									r?.attributes?.placeholder &&
										(typeof r.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = r.attributes.placeholder(l))
											: (a.attributes.placeholder = r.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(e[o] = a);
						}),
						e
					);
				};
			},
			'./components/src/utilities/Colour/Colour.ts'(f, d, s) {
				'use strict';
				s.d(d, { V: () => t });
				class t {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const e = parseInt(this.hexValue.slice(1, 3), 16),
								o = parseInt(this.hexValue.slice(3, 5), 16),
								r = parseInt(this.hexValue.slice(5, 7), 16),
								u = [e / 255, o / 255, r / 255].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
							return 0.2126 * u[0] + 0.7152 * u[1] + 0.0722 * u[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(e) {
						(this.value = e),
							e &&
								(e.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (e = `#${e[1].repeat(2)}${e[2].repeat(2)}${e[3].repeat(2)}`),
								t.isHex(e)
									? ((this.hexValue = e), (this.rgbValue = t.hexToRgb(e)))
									: t.isRgb(e) && ((this.rgbValue = e), (this.hexValue = t.rgbToHex(e))));
					}
					shift(e) {
						return new t(t.brightness(this.hex, e));
					}
					lighten(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, e));
					}
					darken(e) {
						return e < 0 ? this : new t(t.brightness(this.hex, -e));
					}
					opacity(e) {
						return new t(t.opacity(this.hex, e));
					}
					transparency(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, e));
					}
					opaque(e) {
						return e < 0 ? this : new t(t.opacity(this.hex, -e));
					}
					static isRgb(e) {
						return !!(
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							e.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(e) {
						return !!(e.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || e.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(e) {
						if (!t.isHex(e)) throw 'invalid hex supplied';
						const o = parseInt(e.slice(1, 3), 16),
							r = parseInt(e.slice(3, 5), 16),
							a = parseInt(e.slice(5, 7), 16),
							u = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(u) ? `rgba(${o}, ${r}, ${a}, ${m(u / 255)})` : `rgb(${o}, ${r}, ${a})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [o, r, a, u] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((i, c) => {
							if (c == 3) {
								i.match(/%/) && (i = (Number(i.replace('%', '').trim()) / 100).toString());
								let n = Number(i);
								(Number.isNaN(n) || n > 1) && (n = 1), n < 0 && (n = 0), (i = Math.floor(n * 255).toString());
							}
							return Number(i).toString(16).padStart(2, '0');
						});
						return `#${o}${r}${a}${u || ''}`;
					}
					static opacity(e, o) {
						let r = !1;
						if ((e && t.isRgb(e) && ((r = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(o))) return e;
						o > 255 && (o = 255), o < -255 && (o = -255);
						const a = e.slice(7, 9) || 'ff';
						let i = parseInt(a, 16) - o;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						const c = i.toString(16).padStart(2, '0'),
							n = `${e.slice(0, 7)}${c}`;
						return r ? t.hexToRgb(n) : n;
					}
					static brightness(e, o) {
						let r = !1;
						if ((e && t.isRgb(e) && ((r = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(o))) return e;
						o > 255 && (o = 255), o < -255 && (o = -255);
						const a = e.slice(1, 7),
							u = parseInt(a, 16);
						let i = (u & 255) + o;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						let c = ((u >> 8) & 255) + o;
						c > 255 ? (c = 255) : c < 0 && (c = 0);
						let n = (u >> 16) + o;
						n > 255 ? (n = 255) : n < 0 && (n = 0);
						const _ = `#${(i | (c << 8) | (n << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return r ? t.hexToRgb(_) : _;
					}
				}
				function m(l) {
					const e = Math.floor(l),
						o = l - e;
					if (!o) return l;
					const r = Math.floor(o * 10) * 10,
						a = Math.round(l * 100 - r);
					return e + (r + a) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(f, d, s) {
				'use strict';
				s.d(d, { F: () => t });
				const t = {
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
			},
			'./components/src/utilities/defined.ts'(f, d, s) {
				'use strict';
				s.d(d, { s: () => t });
				function t(m) {
					const l = {};
					return (
						Object.keys(m).map((e) => {
							m[e] !== void 0 && (l[e] = m[e]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(f, d, s) {
				'use strict';
				s.d(d, { Z: () => e });
				var t = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = s('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					e = (o) => {
						const r = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								r.current && o.className?.includes('lang-') && !o.className?.includes(l) && window?.Prism?.highlightElement(r.current);
							}, [o.className, o.children, r]),
							(0, t.Y)('code', { ...o, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(f) {
				function d(s) {
					var t = new Error("Cannot find module '" + s + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (f.exports = d);
			},
		},
	]);
})();
