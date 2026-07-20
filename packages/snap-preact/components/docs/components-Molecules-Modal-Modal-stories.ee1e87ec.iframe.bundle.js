(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[495],
		{
			'./components/src/components/Molecules/Modal/Modal.stories.tsx'(h, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => y, ExternalState: () => m, JSXContent: () => u, __namedExportsOrder: () => n, default: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const s =
						"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```tsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```tsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```tsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```tsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```tsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```tsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```tsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```tsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```tsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```tsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
					_ = {
						title: 'Molecules/Modal',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: s }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							button: {
								description: 'Button content to toggle the modal',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							buttonSelector: {
								description: 'Button selector to toggle the modal',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Modal overlay color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							onOverlayClick: {
								description: 'Function to call when the overlay is clicked',
								table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onOverlayClick',
							},
							content: {
								description: 'Content to be displayed in modal',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							children: {
								description: 'Content to be displayed in modal',
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
								control: { type: 'text' },
							},
							disabled: {
								description: 'Disable modal - prevents all click events',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							lockScroll: {
								description: 'Lock the Scroll on the body when the modal is open',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							open: {
								description: 'Pass a value here to control the state externally',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
								control: { type: 'boolean' },
							},
							startOpen: {
								description: 'modal state is open on initial render - used with internal state only',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								description: 'Ignore clicks outside of element',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'modal click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...i.F,
						},
					},
					y = (c) => (0, t.Y)(a.a, { ...c });
				y.args = { button: 'button text', content: 'content text' };
				const m = (c) => (0, t.Y)(a.a, { ...c });
				m.args = { button: 'button text', content: 'content text', open: !0 };
				const u = (c) => (0, t.Y)(a.a, { ...c });
				(u.args = {
					button: 'button text',
					content: (0, t.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				}),
					(y.parameters = {
						...y.parameters,
						docs: { ...y.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...y.parameters?.docs?.source } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...m.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...u.parameters?.docs?.source } },
					});
				const n = ['Default', 'ExternalState', 'JSXContent'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(h, o, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					r = e.n(a),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					c = e('./components/src/hooks/useA11y.tsx');
				const b = ({ transitionSpeed: v, color: g }) =>
						(0, l.AH)({
							transition: `background ${v} ease 0s, left 0s ease ${v}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${v} ease, left 0s ease`, background: g, left: '0' },
						}),
					E = (0, i.PA)((v) => {
						const g = (0, _.u)(),
							W = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, y.LU)() },
							C = (0, m.v6)('overlay', g, W, v),
							{ active: P, onClick: D, disableA11y: B, className: j, internalClassName: R } = C,
							{ overrideElement: M, shouldRenderDefault: T } = (0, n._)('overlay', C);
						if (!T) return M;
						const k = (0, u.Z)(C, b);
						return (0, t.Y)(s._, {
							children: (0, t.Y)('div', {
								onClick: (f) => D && P && D(f),
								ref: (f) => (B ? null : (0, c.iy)(f, P ? 0 : -1)),
								className: r()('ss__overlay', { 'ss__overlay--active': P }, j, R),
								...k,
							}),
						});
					});
				e.d(o, ['h', 0, E]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(h, o, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					_ = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/hooks/useClickOutside.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					c = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useA11y.tsx'),
					K = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					W = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const C = () =>
						(0, a.AH)({
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
					P = (0, s.PA)((D) => {
						const B = (0, y.u)(),
							R = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, m.LU)() },
							M = (0, E.v6)('modal', B, R, D),
							{
								button: T,
								content: k,
								buttonSelector: f,
								children: w,
								disabled: A,
								open: Y,
								onClick: L,
								lockScroll: I,
								startOpen: X,
								disableClickOutside: z,
								disableA11y: N,
								className: $,
								internalClassName: Z,
								disableStyles: G,
								overlayColor: Q,
								onOverlayClick: H,
								treePath: S,
							} = M,
							{ overrideElement: q, shouldRenderDefault: ee } = (0, n._)('modal', M);
						if (!ee) return q;
						const te = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (d) => {
									H && H(d), O();
								},
								...(0, b.s)({ disableStyles: G, color: Q }),
								theme: M?.theme,
								treePath: S,
							},
						};
						let p, x;
						const U = Y === void 0;
						U ? ([p, x] = (0, l.J0)(X)) : (p = Y);
						let J;
						z ||
							(J = (0, u.L)(() => {
								p && (A || (U && x && x(!1)));
							}));
						const O = () => {
								U && x && x((d) => !d);
							},
							oe = (0, v.Z)(M, C);
						return (
							(0, l.vJ)(
								() => (
									p && I ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[p, I]
							),
							(0, l.vJ)(() => {
								const d = f ? (typeof f == 'string' ? document.querySelector(f) : f) : null,
									F = (0, W.s)(() => {
										setTimeout(() => {
											p && I ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									V = (se) => {
										O(), L && L(se);
									};
								return (
									d && (A || d.addEventListener('click', V)),
									window.addEventListener('resize', F),
									() => {
										window.removeEventListener('resize', F), d && d.removeEventListener('click', V);
									}
								);
							}, []),
							(0, t.Y)(_._, {
								children: (0, t.FD)('div', {
									...oe,
									className: i()('ss__modal', { 'ss__modal--open': p }, { 'ss__modal--disabled': A }, $, Z),
									ref: J,
									children: [
										!f &&
											T &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (d) => (N ? null : (0, g.iy)(d)),
												'aria-expanded': p,
												role: 'button',
												onClick: (d) => {
													A || (O(), L && L(d));
												},
												children: (0, c.Y)(T, { open: p, toggleOpen: O, treePath: S }),
											}),
										(k || w) &&
											p &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (d) => (N ? null : (0, g.iy)(d)),
												children: [(0, c.Y)(k, { open: p, toggleOpen: O, treePath: S }), (0, c.Y)(w, { open: p, toggleOpen: O, treePath: S })],
											}),
										(0, t.Y)(K.h, { ...te.overlay, active: !!p }),
									],
								}),
							})
						);
					});
				e.d(o, ['a', 0, P]);
			},
			'./components/src/hooks/useA11y.tsx'(h, o, e) {
				'use strict';
				e.d(o, { iy: () => i });
				const t = 9,
					l = 27,
					a = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(s, _, y, m) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = u),
							(n.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					s &&
						!s.attributes?.[a] &&
						(s.setAttribute(a, !0),
						s.setAttribute('tabIndex', `${_ || 0}`),
						s.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && s.click();
						}),
						y &&
							s.addEventListener('keydown', function (n) {
								const c = s.querySelectorAll(r),
									b = c[0],
									E = c[c.length - 1];
								if (n.keyCode == l) {
									s.focus(), m && m(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === b && (E.focus(), n.preventDefault())
										: document.activeElement === E && (b.focus(), n.preventDefault()));
							}));
				}
				e.d(o, ['DH', 0, r, 'aZ', 0, a]);
			},
			'./components/src/hooks/useClickOutside.tsx'(h, o, e) {
				'use strict';
				e.d(o, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(a) {
					const r = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							r.current = a;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', s), () => document.removeEventListener('click', s);
							function s(_) {
								i.current && r.current && !i.current.contains(_.target) && r.current(_);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(h, o, e) {
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
				e.d(o, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(h, o, e) {
				'use strict';
				e.d(o, { s: () => t });
				function t(l) {
					const a = {};
					return (
						Object.keys(l).map((r) => {
							l[r] !== void 0 && (a[r] = l[r]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(h, o, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					r = (i) => {
						const s = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								s.current && i.className?.includes('lang-') && !i.className?.includes(a) && window?.Prism?.highlightElement(s.current);
							}, [i.className, i.children, s]),
							(0, t.Y)('code', { ...i, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(o, ['Z', 0, r]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function o(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (h.exports = o);
			},
		},
	]);
})();
