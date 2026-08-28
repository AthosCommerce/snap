(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[495],
		{
			'./components/src/components/Molecules/Modal/Modal.stories.tsx'(h, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => c, ExternalState: () => p, JSXContent: () => y, __namedExportsOrder: () => n, default: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```tsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```tsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```tsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```tsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```tsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```tsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```tsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```tsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```tsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```tsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
					_ = {
						title: 'Molecules/Modal',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: r.Z } }, children: o }), (0, t.Y)(l.uY, { story: l.h1 })],
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
					c = (d) => (0, t.Y)(a.a, { ...d });
				c.args = { button: 'button text', content: 'content text' };
				const p = (d) => (0, t.Y)(a.a, { ...d });
				p.args = { button: 'button text', content: 'content text', open: !0 };
				const y = (d) => (0, t.Y)(a.a, { ...d });
				(y.args = {
					button: 'button text',
					content: (0, t.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				}),
					(c.parameters = {
						...c.parameters,
						docs: { ...c.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...c.parameters?.docs?.source } },
					}),
					(p.parameters = {
						...p.parameters,
						docs: { ...p.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...p.parameters?.docs?.source } },
					}),
					(y.parameters = {
						...y.parameters,
						docs: { ...y.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...y.parameters?.docs?.source } },
					});
				const n = ['Default', 'ExternalState', 'JSXContent'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(h, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					r = e.n(a),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					d = e('./components/src/hooks/useA11y.tsx');
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
							R = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, c.LU)() },
							C = (0, p.v6)('overlay', g, R, v),
							{ active: P, onClick: D, disableA11y: B, className: w, internalClassName: I } = C,
							{ overrideElement: M, shouldRenderDefault: T } = (0, n._)('overlay', C);
						if (!T) return M;
						const k = (0, y.Z)(C, b);
						return (0, t.Y)(o._, {
							children: (0, t.Y)('div', {
								onClick: (f) => D && P && D(f),
								ref: (f) => (B ? null : (0, d.iy)(f, P ? 0 : -1)),
								className: r()('ss__overlay', { 'ss__overlay--active': P }, w, I),
								...k,
							}),
						});
					});
				e.d(s, ['h', 0, E]);
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(h, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					_ = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/hooks/useClickOutside.tsx'),
					n = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useA11y.tsx'),
					j = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					R = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
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
					P = (0, o.PA)((D) => {
						const B = (0, c.u)(),
							I = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, p.LU)() },
							M = (0, E.v6)('modal', B, I, D),
							{
								button: T,
								content: k,
								buttonSelector: f,
								children: Y,
								disabled: A,
								open: N,
								onClick: L,
								lockScroll: S,
								startOpen: G,
								disableClickOutside: Q,
								disableA11y: H,
								className: q,
								internalClassName: ee,
								disableStyles: te,
								overlayColor: oe,
								onOverlayClick: J,
								treePath: W,
							} = M,
							{ overrideElement: ne, shouldRenderDefault: se } = (0, n._)('modal', M);
						if (!se) return ne;
						const le = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (u) => {
									J && J(u), O();
								},
								...(0, b.s)({ disableStyles: te, color: oe }),
								theme: M?.theme,
								treePath: W,
							},
						};
						let m, x;
						const U = N === void 0;
						U ? ([m, x] = (0, l.J0)(G)) : (m = N);
						let F;
						Q ||
							(F = (0, y.L)(() => {
								m && (A || (U && x && x(!1)));
							}));
						const O = () => {
								U && x && x((u) => !u);
							},
							ae = (0, v.Z)(M, C);
						(0, l.vJ)(
							() => (
								m && S ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[m, S]
						);
						const V = (0, l.li)(m),
							X = (0, l.li)(S);
						return (
							(V.current = m),
							(X.current = S),
							(0, l.vJ)(() => {
								const u = f ? (typeof f == 'string' ? document.querySelector(f) : f) : null;
								let z = !1,
									K;
								const $ = (0, R.s)(() => {
										clearTimeout(K),
											(K = setTimeout(() => {
												z || (V.current && X.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									Z = (re) => {
										O(), L && L(re);
									};
								return (
									u && (A || u.addEventListener('click', Z)),
									window.addEventListener('resize', $),
									() => {
										(z = !0), clearTimeout(K), window.removeEventListener('resize', $), u && u.removeEventListener('click', Z);
									}
								);
							}, []),
							(0, t.Y)(_._, {
								children: (0, t.FD)('div', {
									...ae,
									className: i()('ss__modal', { 'ss__modal--open': m }, { 'ss__modal--disabled': A }, q, ee),
									ref: F,
									children: [
										!f &&
											T &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (u) => (H ? null : (0, g.iy)(u)),
												'aria-expanded': m,
												role: 'button',
												onClick: (u) => {
													A || (O(), L && L(u));
												},
												children: (0, d.Y)(T, { open: m, toggleOpen: O, treePath: W }),
											}),
										(k || Y) &&
											m &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (u) => (H ? null : (0, g.iy)(u)),
												children: [(0, d.Y)(k, { open: m, toggleOpen: O, treePath: W }), (0, d.Y)(Y, { open: m, toggleOpen: O, treePath: W })],
											}),
										(0, t.Y)(j.h, { ...le.overlay, active: !!m }),
									],
								}),
							})
						);
					});
				e.d(s, ['a', 0, P]);
			},
			'./components/src/hooks/useA11y.tsx'(h, s, e) {
				'use strict';
				e.d(s, { iy: () => i });
				const t = 9,
					l = 27,
					a = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(o, _, c, p) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = y),
							(n.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					o &&
						!o.attributes?.[a] &&
						(o.setAttribute(a, !0),
						o.setAttribute('tabIndex', `${_ || 0}`),
						o.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && n.target === o && o.click();
						}),
						c &&
							o.addEventListener('keydown', function (n) {
								const d = o.querySelectorAll(r),
									b = d[0],
									E = d[d.length - 1];
								if (n.keyCode == l) {
									o.focus(), p && p(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === t) &&
									(n.shiftKey
										? document.activeElement === b && (E.focus(), n.preventDefault())
										: document.activeElement === E && (b.focus(), n.preventDefault()));
							}));
				}
				e.d(s, ['DH', 0, r, 'aZ', 0, a]);
			},
			'./components/src/hooks/useClickOutside.tsx'(h, s, e) {
				'use strict';
				e.d(s, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(a, r = !1) {
					const i = (0, t.li)(),
						o = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							i.current = a;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', _, r), () => document.removeEventListener('click', _, r);
							function _(c) {
								o.current && i.current && !o.current.contains(c.target) && i.current(c);
							}
						}, []),
						o
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(h, s, e) {
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
				e.d(s, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(h, s, e) {
				'use strict';
				e.d(s, { s: () => t });
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
			'./components/src/utilities/storybook.tsx'(h, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					r = (i) => {
						const o = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								o.current && i.className?.includes('lang-') && !i.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [i.className, i.children, o]),
							(0, t.Y)('code', { ...i, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(s, ['Z', 0, r]);
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function s(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (h.exports = s);
			},
		},
	]);
})();
