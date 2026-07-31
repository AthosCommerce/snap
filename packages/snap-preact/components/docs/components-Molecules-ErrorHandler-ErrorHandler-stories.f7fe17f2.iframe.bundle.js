(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9753],
		{
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.stories.tsx'(E, u, r) {
				'use strict';
				r.r(u), r.d(u, { CustomError: () => _, Error: () => l, Info: () => a, Warning: () => s, __namedExportsOrder: () => v, default: () => n });
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = r('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = r('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					e = r('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'),
					o = r('./components/src/utilities/storybook.tsx'),
					i = r('./components/src/utilities/componentArgs.ts');
				const d = `# ErrorHandler

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
					n = {
						title: 'Molecules/ErrorHandler',
						component: e.z,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: o.Z } }, children: d }), (0, t.Y)(m.uY, { story: m.h1 })],
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
							...i.F,
						},
					},
					s = (p) => (0, t.Y)(e.z, { ...p });
				s.args = { controller: { store: { error: { code: 429, type: c.B.WARNING, message: 'Too many requests try again later' } } } };
				const l = (p) => (0, t.Y)(e.z, { ...p });
				l.args = { controller: { store: { error: { code: 500, type: c.B.ERROR, message: 'Invalid Search Request or Service Unavailable' } } } };
				const a = (p) => (0, t.Y)(e.z, { ...p });
				a.args = { controller: { store: { error: { code: 200, type: c.B.INFO, message: 'Something important happened' } } } };
				const _ = (p) => (0, t.Y)(e.z, { ...p });
				(_.args = { error: { type: c.B.INFO, message: 'Custom error using info type' } }),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...s.parameters?.docs?.source },
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...l.parameters?.docs?.source },
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ...a.parameters?.docs?.source },
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: { originalSource: '(args: ErrorHandlerProps) => <ErrorHandler {...args} />', ..._.parameters?.docs?.source },
						},
					});
				const v = ['Warning', 'Error', 'Info', 'CustomError'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(E, u, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = r('../../node_modules/classnames/index.js'),
					e = r.n(c),
					o = r('../../node_modules/mobx-react-lite/es/index.js'),
					i = r('./components/src/providers/cache.tsx'),
					d = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = r('./components/src/providers/treePath.tsx'),
					s = r('./components/src/hooks/useA11y.tsx'),
					l = r('./components/src/utilities/cloneWithProps.tsx'),
					a = r('./components/src/utilities/defined.ts'),
					_ = r('./components/src/utilities/mergeProps.ts'),
					v = r('./components/src/utilities/mergeStyles.ts'),
					p = r('./components/src/components/Atoms/Icon/Icon.tsx'),
					M = r('./components/src/hooks/useLang.tsx'),
					K = r('./components/src/hooks/useCustomComponentOverride.tsx'),
					S = r('../../node_modules/deepmerge/dist/cjs.js'),
					Y = r.n(S);
				const $ = ({ native: O, color: f, backgroundColor: W, borderColor: A, theme: g }) =>
						O
							? (0, m.AH)({})
							: (0, m.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: f || g?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: W || '#fff',
									border: `1px solid ${A || f || g?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					h = (0, o.PA)((O) => {
						const f = (0, d.u)(),
							A = { disableA11y: !1, treePath: (0, n.LU)() },
							g = (0, _.v6)('button', f, A, O),
							{
								content: D,
								children: C,
								disabled: I,
								native: x,
								onClick: R,
								disableA11y: V,
								disableStyles: j,
								className: N,
								internalClassName: F,
								icon: b,
								lang: B,
								treePath: T,
								style: Z,
								styleScript: L,
								themeStyleScript: y,
								...U
							} = g,
							{ overrideElement: k, shouldRenderDefault: w } = (0, K._)('button', g);
						if (!w) return k;
						const P = { icon: { internalClassName: 'ss__button__icon', ...(0, a.s)({ disableStyles: j }), theme: g?.theme, treePath: T } },
							J = {
								...(0, v.Z)(g, $),
								className: e()('ss__button', { 'ss__button--native': x, 'ss__button--disabled': I }, N, F),
								disabled: I,
								onClick: (z) => !I && R && R(z),
								...U,
							},
							Q = { ref: (z) => (0, s.iy)(z) },
							X = {},
							q = Y()(X, B || {}),
							H = (0, M.u)(q, {}, { activeBreakpoint: f?.activeBreakpoint }),
							ee = !!U.dangerouslySetInnerHTML;
						return D || C || b || B?.button?.value || ee
							? (0, t.Y)(i._, {
									children: x
										? (0, t.FD)('button', {
												...J,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...H.button?.all,
														children: [(0, l.Y)(D, { treePath: T }), (0, l.Y)(C, { treePath: T })],
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
													D || C || H.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...H.button?.value,
																children: [(0, l.Y)(D, { treePath: T }), (0, l.Y)(C, { treePath: T })],
														  })
														: void 0,
													b && (0, t.Y)(p.I, { ...P.icon, ...(typeof b == 'string' ? { icon: b } : b) }),
												],
										  }),
							  })
							: null;
					});
				r.d(u, ['$', 0, h]);
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(E, u, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = r('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = r('../../node_modules/classnames/index.js'),
					e = r.n(c),
					o = r('../../node_modules/mobx-react-lite/es/index.js'),
					i = r('./components/src/components/Atoms/Icon/Icon.tsx'),
					d = r('./components/src/components/Atoms/Button/Button.tsx'),
					n = r('./components/src/utilities/defined.ts'),
					s = r('./components/src/utilities/Colour/Colour.ts'),
					l = r('./components/src/utilities/mergeProps.ts'),
					a = r('./components/src/utilities/mergeStyles.ts'),
					_ = r('./components/src/providers/cache.tsx'),
					v = r('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = r('./components/src/providers/treePath.tsx'),
					M = r('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/types.js'),
					K = r('./components/src/hooks/useLang.tsx'),
					S = r('./components/src/hooks/useCustomComponentOverride.tsx'),
					Y = r('../../node_modules/deepmerge/dist/cjs.js'),
					$ = r.n(Y);
				const h = new s.V('#ecaa15'),
					O = new s.V('#cc1212'),
					f = new s.V('#4c3ce2'),
					W = ({ theme: g }) =>
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
								backgroundColor: f.lighten(180).hex,
								borderLeftColor: f.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: f.hex } },
							},
						}),
					A = (0, o.PA)((g) => {
						const D = (0, v.u)(),
							I = { treePath: (0, p.LU)() },
							x = (0, l.v6)('errorHandler', D, I, g),
							{ controller: R, error: V, disableStyles: j, onRetryClick: N, className: F, internalClassName: b, treePath: B } = x,
							{ overrideElement: T, shouldRenderDefault: Z } = (0, S._)('errorHandler', x);
						if (!Z) return T;
						const L = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, n.s)({ disableStyles: j }), theme: x.theme, treePath: B },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, n.s)({ disableStyles: j }),
									theme: x.theme,
									treePath: B,
								},
							},
							y = R?.store?.error || V,
							U = (0, a.Z)(x, W),
							k = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							w = $()(k, x.lang || {}),
							P = (0, K.u)(w, { controller: R }, { activeBreakpoint: D?.activeBreakpoint });
						return Object.values(M.B).includes(y?.type) && y?.message
							? (0, t.Y)(_._, {
									children: (0, t.Y)('div', {
										className: e()('ss__error-handler', `ss__error-handler--${y.type}`, F, b),
										...U,
										children: (() => {
											switch (y.type) {
												case M.B.WARNING:
													return (0, t.FD)(t.FK, {
														children: [
															(0, t.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, t.Y)(i.I, { ...L.icon, icon: 'warn' }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.warningText?.all }),
																	(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: y.message }),
																],
															}),
															y?.code == 429
																? (0, t.Y)(d.$, {
																		...L.buttonRetry,
																		onClick: (G) => {
																			N ? N(G) : R?.search();
																		},
																		...P.reloadText.attributes,
																		children: (0, t.Y)('span', { className: 'ss__error-handler__button__text', ...P.reloadText.value }),
																  })
																: null,
														],
													});
												case M.B.ERROR:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(i.I, { ...L.icon, icon: 'error' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.errorText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: y.message }),
														],
													});
												case M.B.INFO:
													return (0, t.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, t.Y)(i.I, { ...L.icon, icon: 'info' }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__type', ...P.infoText?.all }),
															(0, t.Y)('span', { className: 'ss__error-handler__message__content', children: y.message }),
														],
													});
											}
										})(),
									}),
							  })
							: null;
					});
				r.d(u, ['z', 0, A]);
			},
			'./components/src/hooks/useA11y.tsx'(E, u, r) {
				'use strict';
				r.d(u, { iy: () => o });
				const t = 9,
					m = 27,
					c = 'ss-a11y',
					e =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function o(i, d, n, s) {
					const l = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${l}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = l),
							(a.innerHTML = `[${c}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					i &&
						!i.attributes?.[c] &&
						(i.setAttribute(c, !0),
						i.setAttribute('tabIndex', `${d || 0}`),
						i.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && i.click();
						}),
						n &&
							i.addEventListener('keydown', function (a) {
								const _ = i.querySelectorAll(e),
									v = _[0],
									p = _[_.length - 1];
								if (a.keyCode == m) {
									i.focus(), s && s(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === t) &&
									(a.shiftKey
										? document.activeElement === v && (p.focus(), a.preventDefault())
										: document.activeElement === p && (v.focus(), a.preventDefault()));
							}));
				}
				r.d(u, ['DH', 0, e, 'aZ', 0, c]);
			},
			'./components/src/hooks/useLang.tsx'(E, u, r) {
				'use strict';
				const t = (m, c, e) => {
					const o = e ? { ...c, ...e } : c,
						i = {};
					return (
						Object.keys(m).forEach((d) => {
							const n = m && m[d],
								s = {};
							n &&
								(n?.value &&
									(typeof n.value == 'function'
										? (s.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: n.value(o) } })
										: (s.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: n.value } })),
								n?.attributes &&
									Object.keys(n?.attributes).length &&
									((s.attributes = { 'ss-lang': d }),
									n?.attributes?.['aria-label'] &&
										(typeof n.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = n.attributes['aria-label'](o))
											: (s.attributes['aria-label'] = n.attributes['aria-label'])),
									n?.attributes?.['aria-valuetext'] &&
										(typeof n.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = n.attributes['aria-valuetext'](o))
											: (s.attributes['aria-valuetext'] = n.attributes['aria-valuetext'])),
									n?.attributes?.title &&
										(typeof n.attributes?.title == 'function'
											? (s.attributes.title = n.attributes.title(o))
											: (s.attributes.title = n.attributes.title)),
									n?.attributes?.alt &&
										(typeof n.attributes?.alt == 'function' ? (s.attributes.alt = n.attributes.alt(o)) : (s.attributes.alt = n.attributes.alt)),
									n?.attributes?.placeholder &&
										(typeof n.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = n.attributes.placeholder(o))
											: (s.attributes.placeholder = n.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': d })),
								(i[d] = s);
						}),
						i
					);
				};
				r.d(u, ['u', 0, t]);
			},
			'./components/src/utilities/Colour/Colour.ts'(E, u, r) {
				'use strict';
				r.d(u, { V: () => t });
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
								i = parseInt(this.hexValue.slice(5, 7), 16),
								n = [e / 255, o / 255, i / 255].map((l) => (l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)));
							return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2] <= 0.179 ? '#ffffff' : '#000000';
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
							i = parseInt(e.slice(3, 5), 16),
							d = parseInt(e.slice(5, 7), 16),
							n = parseInt(e.slice(7, 9), 16);
						return Number.isInteger(n) ? `rgba(${o}, ${i}, ${d}, ${m(n / 255)})` : `rgb(${o}, ${i}, ${d})`;
					}
					static rgbToHex(e) {
						if (!t.isRgb(e)) throw 'invalid rgb supplied';
						const [o, i, d, n] = (e.match(/[0-9]?\.?[0-9]+%?/g) || []).map((s, l) => {
							if (l == 3) {
								s.match(/%/) && (s = (Number(s.replace('%', '').trim()) / 100).toString());
								let a = Number(s);
								(Number.isNaN(a) || a > 1) && (a = 1), a < 0 && (a = 0), (s = Math.floor(a * 255).toString());
							}
							return Number(s).toString(16).padStart(2, '0');
						});
						return `#${o}${i}${d}${n || ''}`;
					}
					static opacity(e, o) {
						let i = !1;
						if ((e && t.isRgb(e) && ((i = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(o))) return e;
						o > 255 && (o = 255), o < -255 && (o = -255);
						const d = e.slice(7, 9) || 'ff';
						let s = parseInt(d, 16) - o;
						s > 255 ? (s = 255) : s < 0 && (s = 0);
						const l = s.toString(16).padStart(2, '0'),
							a = `${e.slice(0, 7)}${l}`;
						return i ? t.hexToRgb(a) : a;
					}
					static brightness(e, o) {
						let i = !1;
						if ((e && t.isRgb(e) && ((i = !0), (e = t.rgbToHex(e))), !e || !t.isHex(e) || !Number.isInteger(o))) return e;
						o > 255 && (o = 255), o < -255 && (o = -255);
						const d = e.slice(1, 7),
							n = parseInt(d, 16);
						let s = (n & 255) + o;
						s > 255 ? (s = 255) : s < 0 && (s = 0);
						let l = ((n >> 8) & 255) + o;
						l > 255 ? (l = 255) : l < 0 && (l = 0);
						let a = (n >> 16) + o;
						a > 255 ? (a = 255) : a < 0 && (a = 0);
						const _ = `#${(s | (l << 8) | (a << 16)).toString(16).padStart(6, '0')}${e.slice(7, 9)}`;
						return i ? t.hexToRgb(_) : _;
					}
				}
				function m(c) {
					const e = Math.floor(c),
						o = c - e;
					if (!o) return c;
					const i = Math.floor(o * 10) * 10,
						d = Math.round(c * 100 - i);
					return e + (i + d) / 100;
				}
			},
			'./components/src/utilities/componentArgs.ts'(E, u, r) {
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
				r.d(u, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(E, u, r) {
				'use strict';
				r.d(u, { s: () => t });
				function t(m) {
					const c = {};
					return (
						Object.keys(m).map((e) => {
							m[e] !== void 0 && (c[e] = m[e]);
						}),
						c
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(E, u, r) {
				'use strict';
				var t = r('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = r('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					e = (o) => {
						const i = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								i.current && o.className?.includes('lang-') && !o.className?.includes(c) && window?.Prism?.highlightElement(i.current);
							}, [o.className, o.children, i]),
							(0, t.Y)('code', { ...o, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
				r.d(u, ['Z', 0, e]);
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function u(r) {
					const t = new Error("Cannot find module '" + r + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (E.exports = u);
			},
		},
	]);
})();
