(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[495],
		{
			'./components/src/components/Molecules/Modal/Modal.stories.tsx'(h, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => y, ExternalState: () => d, JSXContent: () => m, __namedExportsOrder: () => s, default: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```jsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```jsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```jsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```jsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```jsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```jsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
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
					y = (u) => (0, t.Y)(a.a, { ...u });
				y.args = { button: 'button text', content: 'content text' };
				const d = (u) => (0, t.Y)(a.a, { ...u });
				d.args = { button: 'button text', content: 'content text', open: !0 };
				const m = (u) => (0, t.Y)(a.a, { ...u });
				(m.args = {
					button: 'button text',
					content: (0, t.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				}),
					(y.parameters = {
						...y.parameters,
						docs: { ...y.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...y.parameters?.docs?.source } },
					}),
					(d.parameters = {
						...d.parameters,
						docs: { ...d.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...d.parameters?.docs?.source } },
					}),
					(m.parameters = {
						...m.parameters,
						docs: { ...m.parameters?.docs, source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...m.parameters?.docs?.source } },
					});
				const s = ['Default', 'ExternalState', 'JSXContent'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(h, n, e) {
				'use strict';
				e.d(n, { h: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					r = e.n(a),
					i = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/snap.tsx'),
					y = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/mergeProps.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useComponent.tsx'),
					u = e('./components/src/hooks/useA11y.tsx');
				const f = ({ transitionSpeed: b, color: O }) =>
					(0, l.AH)({
						transition: `background ${b} ease 0s, left 0s ease ${b}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${b} ease, left 0s ease`, background: O, left: '0' },
					});
				function E(b) {
					const O = (0, o.u)(),
						T = (0, _.uk)(),
						W = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, y.LU)() },
						C = (0, d.v6)('overlay', O, W, b),
						{ active: P, onClick: k, disableA11y: B, className: I, internalClassName: Y, customComponent: L } = C;
					if (L) {
						const v = (0, s.x)(T?.templates?.library.import.component.overlay || {}, L);
						if (v) return (0, t.Y)(v, { ...C });
					}
					const g = (0, m.Z)(C, f);
					return (0, t.Y)(i._, {
						children: (0, t.Y)('div', {
							onClick: (v) => k && P && k(v),
							ref: (v) => (B ? null : (0, u.iy)(v, P ? 0 : -1)),
							className: r()('ss__overlay', { 'ss__overlay--active': P }, I, Y),
							...g,
						}),
					});
				}
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(h, n, e) {
				'use strict';
				e.d(n, { a: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					_ = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					s = e('./components/src/hooks/useClickOutside.tsx'),
					u = e('./components/src/hooks/useComponent.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
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
					P = (0, o.PA)((k) => {
						const B = (0, y.u)(),
							I = (0, d.uk)(),
							L = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, m.LU)() },
							g = (0, b.v6)('modal', B, L, k),
							{
								button: v,
								content: w,
								buttonSelector: x,
								children: N,
								disabled: A,
								open: H,
								onClick: j,
								lockScroll: R,
								startOpen: Z,
								disableClickOutside: G,
								disableA11y: J,
								className: Q,
								internalClassName: q,
								disableStyles: ee,
								overlayColor: te,
								onOverlayClick: F,
								treePath: S,
								customComponent: V,
							} = g;
						if (V) {
							const c = (0, u.x)(I?.templates?.library.import.component.modal || {}, V);
							if (c) return (0, t.Y)(c, { ...g });
						}
						const oe = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (c) => {
									F && F(c), M();
								},
								...(0, E.s)({ disableStyles: ee, color: te }),
								theme: g?.theme,
								treePath: S,
							},
						};
						let p, D;
						const U = H === void 0;
						U ? ([p, D] = (0, l.J0)(Z)) : (p = H);
						let X;
						G ||
							(X = (0, s.L)(() => {
								p && (A || (U && D && D(!1)));
							}));
						const M = () => {
								U && D && D((c) => !c);
							},
							se = (0, O.Z)(g, C);
						return (
							(0, l.vJ)(
								() => (
									p && R ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[p, R]
							),
							(0, l.vJ)(() => {
								const c = x ? (typeof x == 'string' ? document.querySelector(x) : x) : null,
									z = (0, W.s)(() => {
										setTimeout(() => {
											p && R ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									$ = (ne) => {
										M(), j && j(ne);
									};
								return (
									c && (A || c.addEventListener('click', $)),
									window.addEventListener('resize', z),
									() => {
										window.removeEventListener('resize', z), c && c.removeEventListener('click', $);
									}
								);
							}, []),
							(0, t.Y)(_._, {
								children: (0, t.FD)('div', {
									...se,
									className: i()('ss__modal', { 'ss__modal--open': p }, { 'ss__modal--disabled': A }, Q, q),
									ref: X,
									children: [
										!x &&
											v &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (c) => (J ? null : (0, T.iy)(c)),
												'aria-expanded': p,
												role: 'button',
												onClick: (c) => {
													A || (M(), j && j(c));
												},
												children: (0, f.Y)(v, { open: p, toggleOpen: M, treePath: S }),
											}),
										(w || N) &&
											p &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (c) => (J ? null : (0, T.iy)(c)),
												children: [(0, f.Y)(w, { open: p, toggleOpen: M, treePath: S }), (0, f.Y)(N, { open: p, toggleOpen: M, treePath: S })],
											}),
										(0, t.Y)(K.h, { ...oe.overlay, active: !!p }),
									],
								}),
							})
						);
					});
			},
			'./components/src/hooks/useA11y.tsx'(h, n, e) {
				'use strict';
				e.d(n, { DH: () => r, aZ: () => a, iy: () => i });
				const t = 9,
					l = 27,
					a = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function i(o, _, y, d) {
					const m = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${m}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = m),
							(s.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					o &&
						!o.attributes?.[a] &&
						(o.setAttribute(a, !0),
						o.setAttribute('tabIndex', `${_ || 0}`),
						o.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && o.click();
						}),
						y &&
							o.addEventListener('keydown', function (s) {
								const u = o.querySelectorAll(r),
									f = u[0],
									E = u[u.length - 1];
								if (s.keyCode == l) {
									o.focus(), d && d(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === t) &&
									(s.shiftKey
										? document.activeElement === f && (E.focus(), s.preventDefault())
										: document.activeElement === E && (f.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(h, n, e) {
				'use strict';
				e.d(n, { L: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function l(a) {
					const r = (0, t.li)(),
						i = (0, t.li)();
					return (
						(0, t.vJ)(() => {
							r.current = a;
						}),
						(0, t.vJ)(() => {
							return document.addEventListener('click', o), () => document.removeEventListener('click', o);
							function o(_) {
								i.current && r.current && !i.current.contains(_.target) && r.current(_);
							}
						}, []),
						i
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(h, n, e) {
				'use strict';
				e.d(n, { F: () => t });
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
			'./components/src/utilities/defined.ts'(h, n, e) {
				'use strict';
				e.d(n, { s: () => t });
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
			'./components/src/utilities/storybook.tsx'(h, n, e) {
				'use strict';
				e.d(n, { Z: () => r });
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
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (h.exports = n);
			},
		},
	]);
})();
