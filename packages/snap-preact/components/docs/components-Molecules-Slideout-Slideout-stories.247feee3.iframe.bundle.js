(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9487],
		{
			'./components/src/components/Molecules/Slideout/Slideout.stories.tsx'(p, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => c, __namedExportsOrder: () => h, default: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const n = `# Slideout

Renders a slideout with a background overlay. Typically used for a mobile menu slideout. 

## Sub-components
- Overlay

## Usage
\`\`\`tsx
import { Slideout } from '@athoscommerce/snap-preact/components';
\`\`\`

### buttonContent
The \`buttonContent\` prop accepts a string or JSX element to render a clickable button that toggles the slideout visibility. 

When using the \`buttonContent\` prop, render the component where you want the button to render. The slideout content position is fixed, therefore, the location of the component is only for the render location of the button itself. 

\`\`\`tsx
<Slideout buttonContent={'click me'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### children
The children provided to the component will be displayed within the slideout - the slideout content. When using a component here, it will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`tsx
<Slideout buttonContent={'click me'}>
	<span>slideout content (children)</span>
</Slideout>
\`\`\`

\`\`\`tsx
const SlideoutContent = (props) => {
	return (
		<div>
			<button onClick={() => props.toggleActive()}>close slideout</button>
			<div>the slideout is { props.active ? 'open' : 'closed' }</div>
		</div>
	)
}

<Slideout buttonContent={'click me'}>
	<SlideoutContent />
</Slideout>
\`\`\`

### width
The \`width\` prop is the width of the slideout.

\`\`\`tsx
<Slideout width={'300px'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### displayAt
The \`displayAt\` prop specifies a CSS media query for when the component will render. By default, the component will always render. 

\`\`\`tsx
<Slideout displayAt={'(max-width: 600px)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### transitionSpeed
The \`transitionSpeed\` prop changes the CSS transition speed animation for the slideout and overlay.

\`\`\`tsx
<Slideout transitionSpeed={'0.5s'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### overlayColor
The \`overlayColor\` prop sets the overlay color.

\`\`\`tsx
<Slideout overlayColor={'rgba(0,0,0,0.7)'}>
	<div>slideout content</div>
</Slideout>
\`\`\`


### slideDirection
The \`slideDirection\` prop sets the direction that the overlay slides in. Defaults to \`left\`. Available values are \`left\`, \`right\`, \`top\`, & \`bottom\`.

\`\`\`tsx
<Slideout slideDirection={'right'}>
	<div>slideout content</div>
</Slideout>
\`\`\`

### noButtonWrapper
The \`noButtonWrapper\` prop prevents the button wrapper div with className of \`ss__slideout__button\` from rendering. This element normally wraps \`buttonContent\` and handles toggling the \`active\` state via an onClick handler. By utilizing this prop, toggling of the \`active\` state must instead happen within the component passed into \`buttonContent\`. The \`buttonContent\` component will be passed additional props (\`active\` and \`toggleActive\`) from the slideout component which can be used for referencing and toggling of the \`active\` state.

\`\`\`tsx

const ButtonComponent = (props) => {
	return (
		<div onClick={() => props.toggleActive()}>
			Button to Toggle the Slideout
		</div>
	)
}

<Slideout buttonContent={<ButtonComponent/>} noButtonWrapper>
	<div>slideout content</div>
</Slideout>
\`\`\`

### active
The \`active\` prop is an optional way to specify the initial state of the slideout when rendered. It is recommended to let the component manage its own state internally by not using this prop.

\`\`\`tsx
<Slideout active={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### rerender
The \`rerender\` prop determines whether the slideout content should be re-rendered each time the slideout is closed and reopened. By default, this behavior is enabled to ensure better accessibility compliance by avoiding rendering content when the slideout is closed.  

\`\`\`tsx
<Slideout rerender={true}>
	<div>Hello World</div>
</Slideout>
\`\`\`

### buttonSelector
The \`buttonSelector\` prop specifies a selector of an element to query for, to listen for clicks, to trigger the slideout. This is primarily used if you want to have an external element trigger the slide out. 

\`\`\`tsx

<button value={'click me to open'} id="my-button">
<Slideout buttonSelector={'#my-button'}>
	<div>Hello World</div>
</Slideout>
\`\`\``,
					u = {
						title: 'Molecules/Slideout',
						component: r.S,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: d.Z } }, children: n }), (0, t.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								description: 'Initial state of the slideout.',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							slideDirection: {
								defaultValue: 'left',
								description: 'Slideout slide direction',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'left' } },
								control: { type: 'text' },
							},
							width: {
								defaultValue: '300px',
								description: 'Slideout width',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '300px' } },
								control: { type: 'text' },
							},
							displayAt: {
								defaultValue: '',
								description: 'Media query for when to render this component',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							buttonContent: {
								description: 'Slideout button content (children), appended to buttonText',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							transitionSpeed: {
								defaultValue: '0.25s',
								description: 'Overlay opening/closing transition speed',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
								control: { type: 'text' },
							},
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Slideout overlay color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							noButtonWrapper: {
								description: 'Prevent the wrapper element from rendering (this element has the onClick handler to toggle the state)',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							rerender: {
								description: 'determine if the content should be re-rendered when the slideout is closed and re-opened',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							buttonSelector: {
								description: 'external Slideout button selector',
								table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							...a.F,
						},
					},
					c = (y) => (0, t.Y)(r.S, { ...y, children: (0, t.Y)('div', { children: 'props.children will be rendered here' }) });
				(c.args = { active: !0, buttonContent: 'Click Me' }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: SlideoutProps) => <Slideout {...args}>
        <div>props.children will be rendered here</div>
    </Slideout>`,
								...c.parameters?.docs?.source,
							},
						},
					});
				const h = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(p, o, e) {
				'use strict';
				e.d(o, { h: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					d = e.n(r),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/hooks/useA11y.tsx');
				const C = ({ transitionSpeed: g, color: O }) =>
						(0, s.AH)({
							transition: `background ${g} ease 0s, left 0s ease ${g}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${g} ease, left 0s ease`, background: O, left: '0' },
						}),
					P = (0, a.PA)((g) => {
						const O = (0, u.u)(),
							L = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, c.LU)() },
							l = (0, h.v6)('overlay', O, L, g),
							{ active: b, onClick: m, disableA11y: B, className: S, internalClassName: W } = l,
							{ overrideElement: E, shouldRenderDefault: M } = (0, i._)('overlay', l);
						if (!M) return E;
						const T = (0, y.Z)(l, C);
						return (0, t.Y)(n._, {
							children: (0, t.Y)('div', {
								onClick: (v) => m && b && m(v),
								ref: (v) => (B ? null : (0, f.iy)(v, b ? 0 : -1)),
								className: d()('ss__overlay', { 'ss__overlay--active': b }, S, W),
								...T,
							}),
						});
					});
			},
			'./components/src/components/Molecules/Slideout/Slideout.tsx'(p, o, e) {
				'use strict';
				e.d(o, { S: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					n = e.n(a),
					u = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useMediaQuery.tsx'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
				const j = ({ slideDirection: l, transitionSpeed: b, width: m }) =>
						(0, d.AH)({
							display: 'block',
							position: 'fixed',
							transition: `${l || 'left'} ${b}`,
							left: l == 'left' ? `-${m}` : l != 'right' ? '0' : 'initial',
							right: l == 'right' ? `-${m}` : 'initial',
							bottom: l == 'bottom' ? '-100vh' : 'initial',
							top: l == 'top' ? '-100vh' : l == 'bottom' ? 'initial' : '0',
							height: '100%',
							zIndex: '10004',
							width: m?.endsWith('%') && parseInt(m.split('%')[0]) > 90 ? m : '90%',
							maxWidth: m,
							padding: '10px',
							background: '#fff',
							boxSizing: 'border-box',
							overflowY: 'auto',
							'&.ss__slideout--active': {
								left: l == 'left' || l != 'right' ? '0' : 'initial',
								right: l == 'right' ? '0' : 'initial',
								bottom: l == 'bottom' ? '0' : 'initial',
								top: l == 'top' ? '0' : l == 'bottom' ? 'initial' : '0',
							},
						}),
					L = (0, r.PA)((l) => {
						const b = (0, f.u)(),
							B = {
								active: !1,
								displayAt: '',
								slideDirection: 'left',
								width: '300px',
								overlayColor: 'rgba(0,0,0,0.8)',
								transitionSpeed: '0.25s',
								treePath: (0, C.LU)(),
								rerender: !0,
							},
							S = (0, h.v6)('slideout', b, B, l),
							{
								children: W,
								active: E,
								rerender: M,
								buttonContent: T,
								buttonSelector: v,
								noButtonWrapper: w,
								displayAt: k,
								transitionSpeed: Y,
								overlayColor: N,
								onChange: K,
								disableStyles: V,
								className: $,
								internalClassName: F,
								treePath: A,
							} = S,
							{ overrideElement: J, shouldRenderDefault: z } = (0, g._)('slideout', S);
						if (!z) return J;
						const H = {
								overlay: {
									internalClassName: 'ss__slideout__overlay',
									...(0, c.s)({ disableStyles: V, color: N, transitionSpeed: Y }),
									theme: S?.theme,
									treePath: A,
								},
							},
							[_, I] = (0, s.J0)(!!E),
							[Z, U] = (0, s.J0)(!!E),
							D = () => {
								const x = !_;
								_
									? (I(!1),
									  M &&
											setTimeout(() => {
												U(!1);
											}, 250))
									: (I(!0), U(!0)),
									(document.body.style.overflow = x ? 'hidden' : ''),
									K && K(x);
							};
						(0, s.vJ)(() => {
							U(!!E), I(!!E);
						}, [E]);
						const R = (0, P.U)(k, () => {
							document.body.style.overflow = '';
						});
						document.body.style.overflow = R && _ ? 'hidden' : '';
						const Q = (0, y.Z)(S, j);
						return (
							(0, s.vJ)(() => {
								if (v) {
									let x;
									typeof v == 'string' ? (x = document.querySelector(v)) : (x = v), x && x.addEventListener('click', () => D());
								}
							}, []),
							R || !M
								? (0, t.FD)(i._, {
										children: [
											T &&
												(w
													? (0, u.Y)(T, { toggleActive: D, active: _, treePath: A })
													: (0, t.Y)('div', {
															className: 'ss__slideout__button',
															onClick: () => D(),
															children: (0, u.Y)(T, { active: _, treePath: A }),
													  })),
											(0, t.Y)('div', {
												className: n()('ss__slideout', $, F, { 'ss__slideout--active': _ }),
												style: { visibility: M || R ? 'visible' : 'hidden' },
												...Q,
												children: Z && (0, u.Y)(W, { toggleActive: D, active: _, treePath: A }),
											}),
											(0, t.Y)(O.h, { ...H.overlay, active: _, onClick: D }),
										],
								  })
								: null
						);
					});
			},
			'./components/src/hooks/useA11y.tsx'(p, o, e) {
				'use strict';
				e.d(o, { DH: () => d, aZ: () => r, iy: () => a });
				const t = 9,
					s = 27,
					r = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(n, u, c, h) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = y),
							(i.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					n &&
						!n.attributes?.[r] &&
						(n.setAttribute(r, !0),
						n.setAttribute('tabIndex', `${u || 0}`),
						n.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && n.click();
						}),
						c &&
							n.addEventListener('keydown', function (i) {
								const f = n.querySelectorAll(d),
									C = f[0],
									P = f[f.length - 1];
								if (i.keyCode == s) {
									n.focus(), h && h(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === t) &&
									(i.shiftKey
										? document.activeElement === C && (P.focus(), i.preventDefault())
										: document.activeElement === P && (C.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useMediaQuery.tsx'(p, o, e) {
				'use strict';
				e.d(o, { U: () => s });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function s(r, d) {
					if (typeof window > 'u' || typeof window.matchMedia > 'u') return !1;
					const a = window.matchMedia(r),
						[n, u] = (0, t.J0)(!!a.matches);
					return (
						(0, t.vJ)(() => {
							u(!!a.matches);
							const c = () => u(!!a.matches);
							return (
								a.addListener(c),
								() => {
									d instanceof Function && d(), a.removeListener(c);
								}
							);
						}, [r]),
						n
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(p, o, e) {
				'use strict';
				e.d(o, { F: () => t });
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
			'./components/src/utilities/defined.ts'(p, o, e) {
				'use strict';
				e.d(o, { s: () => t });
				function t(s) {
					const r = {};
					return (
						Object.keys(s).map((d) => {
							s[d] !== void 0 && (r[d] = s[d]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(p, o, e) {
				'use strict';
				e.d(o, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					d = (a) => {
						const n = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								n.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(n.current);
							}, [a.className, a.children, n]),
							(0, t.Y)('code', { ...a, ref: n, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function o(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (p.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Slideout-Slideout-stories.247feee3.iframe.bundle.js.map
