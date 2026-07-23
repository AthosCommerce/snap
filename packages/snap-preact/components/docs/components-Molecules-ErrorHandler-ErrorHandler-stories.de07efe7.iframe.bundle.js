(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9753],
		{
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx'(E, d, r) {
				'use strict';
				r.r(d), r.d(d, { CustomError: () => _, Error: () => c, Info: () => o, Warning: () => i, __namedExportsOrder: () => y, default: () => m });
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = r('../../node_modules/@storybook/blocks/dist/index.mjs'),
					l = r('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					e = r('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
					n = r('./components/src/utilities/storybook.tsx'),
					s = r('./components/src/utilities/componentArgs.ts');
				const a = `# ErrorHandler

Renders error messages.

## Sub-components
- Icon
- Button

## Usage
\`\`\`tsx
import { ErrorHandler } from '@athoscommerce/snap-preact/components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to a Snap controller. This is the standard usage.

\`\`\`tsx
<ErrorHandler controller={controller} />
\`\`\`

### error
The \`error\` prop provides an alternative means of utilizing the component to display errors messages.

\`\`\`tsx
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

\`\`\`tsx
<ErrorHandler controller={controller} onRetryClick={(e) => {
    // do something
    controller.search();
}}/>
\`\`\`

\`\`\`tsx
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
\`\`\`
## Lang

The \`lang\` prop allows you to override translatable text strings used by the ErrorHandler component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`warningText\` | Warning message prefix text | \`controller\` (AbstractController) |
| \`infoText\` | Info message prefix text | \`controller\` (AbstractController) |
| \`errorText\` | Error message prefix text | \`controller\` (AbstractController) |
| \`reloadText\` | Retry button text | \`controller\` (AbstractController) |

### Example

\`\`\`tsx
<ErrorHandler
	controller={controller}
	lang={{
		warningText: {
			value: 'Warning:',
		},
		errorText: {
			value: 'Something went wrong:',
		},
		reloadText: {
			value: 'Try Again',
		},
	}}
/>
\`\`\`
`,
					m = {
						title: 'Molecules/ErrorHandler',
						component: e.z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: n.Z } }, children: a }), (0, t.Y)(u.uY, { story: u.h1 })],
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
							...s.F,
						},
					},
					i = (p) => (0, t.Y)(e.z, { ...p });
				i.args = { controller: { store: { error: { code: 429, type: l.B.WARNING, message: 'Too many requests try again later' } } } };
				const c = (p) => (0, t.Y)(e.z, { ...p });
				c.args = { controller: { store: { error: { code: 500, type: l.B.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } };
				const o = (p) => (0, t.Y)(e.z, { ...p });
				o.args = { controller: { store: { error: { code: 200, type: l.B.INFO, message: 'Something important happened' } } } };
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
					(o.parameters = {
						...o.parameters,
						docs: {
							...o.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...o.parameters?.docs?.source },
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
			'./components/src/components/Atoms/Button/Button.tsx'(E, d, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = r('../../node_modules/classnames/index.js'),
					e = r.n(l),
					n = r('../../node_modules/mobx-react-lite/es/index.js'),
					s = r('./components/src/providers/cache.tsx'),
					a = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = r('./components/src/providers/treePath.tsx'),
					i = r('./components/src/hooks/useA11y.tsx'),
					c = r('./components/src/utilities/cloneWithProps.tsx'),
					o = r('./components/src/utilities/defined.ts'),
					_ = r('./components/src/utilities/mergeProps.ts'),
					y = r('./components/src/utilities/mergeStyles.ts'),
					p = r('./components/src/components/Atoms/Icon/Icon.tsx'),
					T = r('./components/src/hooks/useLang.tsx'),
					K = r('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = r('../../node_modules/deepmerge/dist/cjs.js'),
					Y = r.n(S);
				const $ = ({ native: O, color: v, backgroundColor: W, borderColor: A, theme: g }) =>
						O
							? (0, u.AH)({})
							: (0, u.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: v || g?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: W || '#fff',
									border: `1px solid ${A || v || g?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					h = (0, n.PA)((O) => {
						const v = (0, a.u)(),
							A = { disableA11y: !1, treePath: (0, m.LU)() },
							g = (0, _.v6)('button', v, A, O),
							{
								content: M,
								children: C,
								disabled: I,
								native: f,
								onClick: R,
								disableA11y: V,
								disableStyles: j,
								className: N,
								internalClassName: F,
								icon: b,
								lang: L,
								treePath: D,
								style: Z,
								styleScript: B,
								themeStyleScript: x,
								...U
							} = g,
							{ overrideElement: k, shouldRenderDefault: w } = (0, K._)('button', g);
						if (!w) return k;
						const P = { icon: { internalClassName: 'ss__button__icon', ...(0, o.s)({ disableStyles: j }), theme: g?.theme, treePath: D } },
							J = {
								...(0, y.Z)(g, $),
								className: e()('ss__button', { 'ss__button--native': f, 'ss__button--disabled': I }, N, F),
								disabled: I,
								onClick: (z) => !I && R && R(z),
								...U,
							},
							Q = { ref: (z) => (0, i.iy)(z) },
							X = {},
							q = Y()(X, L || {}),
							H = (0, T.u)(q, {}),
							ee = !!U.dangerouslySetInnerHTML;
						return M || C || b || L?.button?.value || ee
							? (0, t.Y)(s._, {
									children: f
										? (0, t.FD)('button', {
												...J,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...H.button?.all,
														children: [(0, c.Y)(M, { treePath: D }), (0, c.Y)(C, { treePath: D })],
													}),
													b && (0, t.Y)(p.I, { ...P.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
												],
										  })
										: (0, t.FD)('div', {
												...(V ? {} : Q),
												role: 'button',
												'aria-disabled': I,
												...J,
												...H.button?.attributes,
												children: [
													M || C || H.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...H.button?.value,
																children: [(0, c.Y)(M, { treePath: D }), (0, c.Y)(C, { treePath: D })],
														  })
														: void 0,
													b && (0, t.Y)(p.I, { ...P.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
												],
										  }),
							  })
							: null;
					});
				r.d(d, ['$', 0, h]);
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(E, d, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = r('../../node_modules/classnames/index.js'),
					e = r.n(l),
					n = r('../../node_modules/mobx-react-lite/es/index.js'),
					s = r('./components/src/components/Atoms/Icon/Icon.tsx'),
					a = r('./components/src/components/Atoms/Button/Button.tsx'),
					m = r('./components/src/utilities/defined.ts'),
					i = r('./components/src/utilities/Colour/Colour.ts'),
					c = r('./components/src/utilities/mergeProps.ts'),
					o = r('./components/src/utilities/mergeStyles.ts'),
					_ = r('./components/src/providers/cache.tsx'),
					y = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = r('./components/src/providers/treePath.tsx'),
					T = r('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					K = r('./components/src/hooks/useLang.tsx'),
					S = r('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = r('../../node_modules/deepmerge/dist/cjs.js'),
					$ = r.n(Y);
				const h = new i.V('#ecaa15'),
					O = new i.V('#cc1212'),
					v = new i.V('#4c3ce2'),
					W = ({ theme: g }) =>
						(0, u.AH)({
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
								borderColor: g?.variables?.colors?.primary,
								width: ['150px', 'fit-content'],
								margin: '5px 10px',
								'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
								'.ss__icon': { margin: '0 5px 0 0' },
							},
							'&.ss__error-handler--error': {
								backgroundColor: O.lighten(180).hex,
								borderLeftColor: O.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: O.hex } },
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
								backgroundColor: v.lighten(180).hex,
								borderLeftColor: v.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: v.hex } },
							},
						}),
					A = (0, n.PA)((g) => {
						const M = (0, y.u)(),
							I = { treePath: (0, p.LU)() },
							f = (0, c.v6)('errorHandler', M, I, g),
							{ controller: R, error: V, disableStyles: j, onRetryClick: N, className: F, internalClassName: b, treePath: L } = f,
							{ overrideElement: D, shouldRenderDefault: Z } = (0, S._)('errorHandler', f);
						if (!Z) return D;
						const B = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, m.s)({ disableStyles: j }), theme: f.theme, treePath: L },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, m.s)({ disableStyles: j }),
									theme: f.theme,
									treePath: L,
								},
							},
							x = R?.store?.error || V,
							U = (0, o.Z)(f, W),
							k = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							w = $()(k, f.lang || {}),
							P = (0, K.u)(w, { controller: R });
						return Object.values(T.B).includes(x?.type) && x?.message
							? (0, t.Y)(_._, {
									children: (0, t.Y)('div', {
										className: e()('ss__error-handler', `ss__error-handler--${x.type}`, F, b),
										...U,
										children: (() => {
											switch (x.type) {
												case T.B.WARNING:
													return (0, t.FD)(t.FK, {
														children: [
															(0, t.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, t.Y)(s.I, { ...B.icon, icon: 'warn' }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.warningText?.all }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: x.message }),
																],
															}),
															x?.code == 429
																? (0, t.Y)(a.$, {
																		...B.buttonRetry,
																		onClick: (G) => {
																			N ? N(G) : R?.search();
																		},
																		...P.reloadText.attributes,
																		children: (0, t.Y)('span', { className: 'ss__error-handler__button__text', ...P.reloadText.value }),
																  })
																: null,
														],
													});
												case T.B.ERROR:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(s.I, { ...B.icon, icon: 'error' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.errorText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: x.message }),
														],
													});
												case T.B.INFO:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(s.I, { ...B.icon, icon: 'info' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.infoText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: x.message }),
														],
													});
											}
										})(),
									}),
							  })
							: null;
					});
				r.d(d, ['z', 0, A]);
			},
			'./components/src/hooks/useA11y.tsx'(E, d, r) {
				'use strict';
				r.d(d, { iy: () => n });
				const t = 9,
					u = 27,
					l = 'ss-a11y',
					e =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function n(s, a, m, i) {
					const c = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${c}`)) {
						const o = document.createElement('style');
						(o.type = 'text/css'),
							(o.id = c),
							(o.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(o);
					}
					s &&
						!s.attributes?.[l] &&
						(s.setAttribute(l, !0),
						s.setAttribute('tabIndex', `${a || 0}`),
						s.addEventListener('keydown', (o) => {
							(o.code === 'Space' || o.code === 'Enter') && s.click();
						}),
						m &&
							s.addEventListener('keydown', function (o) {
								const _ = s.querySelectorAll(e),
									y = _[0],
									p = _[_.length - 1];
								if (o.keyCode == u) {
									s.focus(), i && i(o), o.preventDefault(), o.stopPropagation();
									return;
								}
								(o.key === 'Tab' || o.keyCode === t) &&
									(o.shiftKey
										? document.activeElement === y && (p.focus(), o.preventDefault())
										: document.activeElement === p && (y.focus(), o.preventDefault()));
							}));
				}
				r.d(d, ['DH', 0, e, 'aZ', 0, l]);
			},
			'./components/src/hooks/useLang.tsx'(E, d, r) {
				'use strict';
				const t = (u, l) => {
					const e = {};
					return (
						Object.keys(u).forEach((n) => {
							const s = u && u[n],
								a = {};
							s &&
								(s?.value &&
									(typeof s.value == 'function'
										? (a.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: s.value(l) } })
										: (a.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: s.value } })),
								s?.attributes &&
									Object.keys(s?.attributes).length &&
									((a.attributes = { 'ss-lang': n }),
									s?.attributes?.['aria-label'] &&
										(typeof s.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = s.attributes['aria-label'](l))
											: (a.attributes['aria-label'] = s.attributes['aria-label'])),
									s?.attributes?.['aria-valuetext'] &&
										(typeof s.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = s.attributes['aria-valuetext'](l))
											: (a.attributes['aria-valuetext'] = s.attributes['aria-valuetext'])),
									s?.attributes?.title &&
										(typeof s.attributes?.title == 'function'
											? (a.attributes.title = s.attributes.title(l))
											: (a.attributes.title = s.attributes.title)),
									s?.attributes?.alt &&
										(typeof s.attributes?.alt == 'function' ? (a.attributes.alt = s.attributes.alt(l)) : (a.attributes.alt = s.attributes.alt)),
									s?.attributes?.placeholder &&
										(typeof s.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = s.attributes.placeholder(l))
											: (a.attributes.placeholder = s.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': n })),
								(e[n] = a);
						}),
						e
					);
				};
				r.d(d, ['u', 0, t]);
			},
			'./components/src/utilities/Colour/Colour.ts'(E, d, r) {
				'use strict';
				r.d(d, { V: () => t });
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
								n = parseInt(this.hexValue.slice(3, 5), 16),
								s = parseInt(this.hexValue.slice(5, 7), 16),
								m = [e / 255, n / 255, s / 255].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
							return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2] <= 0.179 ? '#ffffff' : '#000000';
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
						const n = parseInt(e.slice(1, 3), 16),
							s = parseInt(e.slice(3, 5), 16),
							a = parseInt(e.slice(5, 7), 16),
							m = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(m) ? `rgba(${n}, ${s}, ${a}, ${u(m / 255)})` : `rgb(${n}, ${s}, ${a})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [n, s, a, m] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((i, c) => {
							if (c == 3) {
								i.match(/%/) && (i = (Number(i.replace('%', '').trim()) / 100).toString());
								let o = Number(i);
								(Number.isNaN(o) || o > 1) && (o = 1), o < 0 && (o = 0), (i = Math.floor(o * 255).toString());
							}
							return Number(i).toString(16).padStart(2, '0');
						});
						return `#${n}${s}${a}${m || ''}`;
					}
					static opacity(e, n) {
						let s = !1;
						if ((e && t.isRgb(e) && ((s = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(n))) return e;
						n > 255 && (n = 255), n < -255 && (n = -255);
						const a = e.slice(7, 9) || 'ff';
						let i = parseInt(a, 16) - n;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						const c = i.toString(16).padStart(2, '0'),
							o = `${e.slice(0, 7)}${c}`;
						return s ? t.hexToRgb(o) : o;
					}
					static brightness(e, n) {
						let s = !1;
						if ((e && t.isRgb(e) && ((s = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(n))) return e;
						n > 255 && (n = 255), n < -255 && (n = -255);
						const a = e.slice(1, 7),
							m = parseInt(a, 16);
						let i = (m & 255) + n;
						i > 255 ? (i = 255) : i < 0 && (i = 0);
						let c = ((m >> 8) & 255) + n;
						c > 255 ? (c = 255) : c < 0 && (c = 0);
						let o = (m >> 16) + n;
						o > 255 ? (o = 255) : o < 0 && (o = 0);
						const _ = `#${(i | (c << 8) | (o << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return s ? t.hexToRgb(_) : _;
					}
				}
				function u(l) {
					const e = Math.floor(l),
						n = l - e;
					if (!n) return l;
					const s = Math.floor(n * 10) * 10,
						a = Math.round(l * 100 - s);
					return e + (s + a) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(E, d, r) {
				'use strict';
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
				r.d(d, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(E, d, r) {
				'use strict';
				r.d(d, { s: () => t });
				function t(u) {
					const l = {};
					return (
						Object.keys(u).map((e) => {
							u[e] !== void 0 && (l[e] = u[e]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(E, d, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = r('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					e = (n) => {
						const s = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								s.current && n.className?.includes('lang-') && !n.className?.includes(l) && window?.Prism?.highlightElement(s.current);
							}, [n.className, n.children, s]),
							(0, t.Y)('code', { ...n, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
				r.d(d, ['Z', 0, e]);
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function d(r) {
					const t = new Error("Cannot find module '" + r + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (E.exports = d);
			},
		},
	]);
})();
