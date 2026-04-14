(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4578],
		{
			'./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx'(_, a, e) {
				'use strict';
				e.r(a),
					e.d(a, {
						Default: () => b,
						ExternalState: () => h,
						Hoverable: () => m,
						JSXChildren: () => p,
						JSXContent: () => n,
						StringChildren: () => y,
						__namedExportsOrder: () => g,
						default: () => f,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts');
				const r =
						"# Dropdown\n\nRenders a button and content. Clicking the button toggles content visibility. Typically used as an alternative to a `<select>` dropdown or to collapse content. By default any clicks outside of the element will hide the content.\n\n## Usage\n```jsx\nimport { Dropdown } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe `content` prop specifies the dropdown contents. This can be a string or a JSX element. The Dropdown component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Dropdown content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Dropdown>Hello World!</Dropdown>\n```\n\nNote you can only render either the content, or the children, if both are passed in, it will default to the content prop. \n\n\n### button\nThe `button` prop specifies the dropdown button. This button toggles the visibility of the content when clicked. This can be a string or a JSX element.\n\n```jsx\n<Dropdown button={'click me!'}>Hello World!</Dropdown>\n```\n\n### toggleOnHover\nThe `toggleOnHover` prop controls if hover events (onMouseEnter and onMouseLeave) will toggle the dropdown. This is disabled by default.\n\n```jsx\n<Dropdown button={'click me!'} toggleOnHover>Hello World!</Dropdown>\n```\n\n### open\nThe `open` prop sets the dropdown visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Dropdown open={true}>Hello World!</Dropdown>\n```\n\n### startOpen\nThe `startOpen` prop sets the dropdown initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown startOpen>Hello World!</Dropdown>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the dropdown content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Dropdown disabled>Hello World!</Dropdown>\n```\n\n### disableClick\nThe `disableClick` prop specifies a boolean which will disable the default click behavior; this is useful if you want to only allow for hovering to toggle the state. Be aware that this will cause the dropdown to not work as expected in mobile (where touch events are used).\n\n```jsx\n<Dropdown disableClick>Hello World!</Dropdown>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Dropdown disableA11y>Hello World!</Dropdown>\n```\n\n### focusTrapContent\nThe `focusTrapContent` prop specifies if the content should trap the user in a focus trap for a11y keyboard navigation.\n\n```jsx\n<Dropdown focusTrapContent={true} >Hello World!</Dropdown>\n```\n\n### disableOverlay\nThe `disableOverlay` prop will disable the dropdown contents from being rendered as an overlay. If set to `true`, dropdown contents will instead be rendered as a block and affect the height of its parent element. Typically used if Dropdown is intended to act as a header (ie. Facet)\n\n```jsx\n<Dropdown disableOverlay>Hello World!</Dropdown>\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Dropdown disableClickOutside>Hello World!</Dropdown>\n```\n\n### usePortal\nThe `usePortal` prop specifies if the dropdown content should be rendered in a portal. This will render the content directly on the body, and dynamically position itself. This is useful if the dropdown content is being cut off by a parent container with `overflow: hidden`.\n\n```jsx\n<Dropdown usePortal>Hello World!</Dropdown>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the dropdown button is clicked.\n\n```jsx\n<Dropdown onClick={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseEnter\nThe `onMouseEnter` prop allows for a custom callback function for when the dropdown has been hovered.\n\n```jsx\n<Dropdown onMouseEnter={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseLeave\nThe `onMouseLeave` prop allows for a custom callback function for when the dropdown has been un-hovered.\n\n```jsx\n<Dropdown onMouseLeave={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onToggle\nThe `onToggle` prop allows for a custom callback function for when the dropdown visibility is toggled. This only applies if using internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown onToggle={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n",
					f = {
						title: 'Atoms/Dropdown',
						component: s.m,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(d.oz, { options: { overrides: { code: c.Z } }, children: r }), (0, o.Y)(d.uY, { story: d.h1 })],
									}),
							},
						},
						argTypes: {
							button: {
								description: 'Button content to toggle the dropdown',
								type: { required: !0 },
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							content: {
								description: 'Content to be displayed in dropdown',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							children: {
								description: 'Content to be displayed in dropdown using children',
								table: { type: { summary: 'string, JSX' }, category: 'Templates Legal' },
								control: { type: 'none' },
							},
							disabled: {
								description: 'Disable dropdown - prevents all click events',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableOverlay: {
								description: 'Disable dropdown overlay and renders as block',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							toggleOnHover: {
								description: 'open and close dropdown on hover',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							open: {
								description: 'Pass a value here to control the state externally',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: 'undefined' } },
								control: { type: 'boolean' },
							},
							startOpen: {
								description: 'Dropdown state is open on initial render - used with internal state only',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableClickOutside: {
								description: 'Ignore clicks outside of element',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onClick: {
								description: 'Dropdown click event handler',
								table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							onMouseEnter: {
								description: 'Dropdown mouse enter event handler',
								table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
								action: 'onMouseEnter',
							},
							onMouseLeave: {
								description: 'Dropdown mouse leave event handler',
								table: { type: { summary: 'function(e: Event)' }, category: 'Templates Legal' },
								action: 'onMouseLeave',
							},
							usePortal: {
								description: 'boolean to specify if the dropdown content should be rendered in a portal.',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onToggle: {
								description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
								table: { type: { summary: 'function(e: Event, open: boolean)' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onToggle',
							},
							focusTrapContent: {
								description: 'boolean to enable ally focustrap',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
								control: { type: 'boolean' },
							},
							disableClick: {
								description: 'boolean to disable clicking of the button',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							disableA11y: {
								description: 'boolean to disable autoset ally properties',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...l.F,
						},
					},
					b = (i) => (0, o.Y)(s.m, { ...i });
				b.args = { button: 'button text', content: 'content text' };
				const m = (i) => (0, o.Y)(s.m, { ...i });
				m.args = { button: 'hover over me', content: 'content text', toggleOnHover: !0 };
				const h = (i) => (0, o.Y)(s.m, { ...i });
				h.args = { button: 'button text', content: 'content text', open: !0 };
				const n = (i) => (0, o.Y)(s.m, { ...i });
				n.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const p = (i) => (0, o.Y)(s.m, { button: i.button, children: i.content });
				p.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const y = (i) => (0, o.Y)(s.m, { button: i.button, children: i.content });
				(y.args = { button: 'button text', content: 'string content - (note this component receieved the open state as a prop)' }),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...b.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(n.parameters = {
						...n.parameters,
						docs: {
							...n.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...n.parameters?.docs?.source },
						},
					}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...p.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...y.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default', 'Hoverable', 'ExternalState', 'JSXContent', 'JSXChildren', 'StringChildren'];
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(_, a, e) {
				'use strict';
				e.d(a, { m: () => ee });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/compat/dist/compat.module.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					r = e.n(l),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					n = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/hooks/useClickOutside.tsx'),
					y = e('./components/src/hooks/useComponent.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					i = e('./components/src/utilities/mergeProps.ts'),
					Q = e('./components/src/utilities/mergeStyles.ts'),
					U = e('./components/src/hooks/useA11y.tsx');
				const q = ({ disableOverlay: E }) =>
						(0, c.AH)({
							position: 'relative',
							'&.ss__dropdown--open, &.ss__dropdown__portal--open': {
								'& .ss__dropdown__content': { position: E ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
							},
							'.ss__dropdown__button': { cursor: `${E ? 'default' : 'pointer'}` },
							'.ss__dropdown__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
							},
						}),
					ee = (0, f.PA)((E) => {
						const oe = (0, m.u)(),
							te = (0, h.uk)(),
							ne = { startOpen: !1, disableA11y: !1, treePath: (0, n.LU)() },
							L = (0, i.v6)('dropdown', oe, ne, E),
							{
								button: se,
								content: M,
								children: A,
								disabled: T,
								open: K,
								toggleOnHover: C,
								onMouseEnter: j,
								onMouseLeave: W,
								disableClick: re,
								onClick: x,
								onToggle: O,
								focusTrapContent: ae,
								startOpen: le,
								disableClickOutside: ie,
								disableA11y: Y,
								className: J,
								internalClassName: N,
								treePath: S,
								usePortal: P,
								customComponent: X,
							} = L;
						if (X) {
							const t = (0, y.x)(te?.templates?.library.import.component.dropdown || {}, X);
							if (t) return (0, o.Y)(t, { ...L });
						}
						let u, D;
						const k = K === void 0;
						k ? ([u, D] = (0, s.J0)(le)) : (u = K);
						const [V, F] = (0, s.J0)(!1),
							I = (0, s.li)(null),
							B = (0, s.li)(null),
							[H, de] = (0, s.J0)({ top: 0, left: 0, width: 0 });
						let z;
						ie ||
							(z = (0, p.L)((t) => {
								(P && B.current && B.current.contains(t.target)) || (u && (T || (k && D && D(!1), O && O(t, !1))));
							})),
							(0, s.vJ)(() => {
								if (P && u) {
									const t = () => {
										if (I.current) {
											const w = I.current.getBoundingClientRect();
											de({ top: w.bottom + window.scrollY, left: w.left + window.scrollX, width: w.width });
										}
									};
									return (
										t(),
										window.addEventListener('resize', t),
										window.addEventListener('scroll', t, !0),
										() => {
											window.removeEventListener('resize', t), window.removeEventListener('scroll', t, !0);
										}
									);
								}
							}, [P, u]);
						const v = (t, w) => {
								k &&
									D &&
									D((G) => {
										const R = w ?? !G;
										return R != G && O && O(t, R), R;
									});
							},
							$ = (0, Q.Z)(L, q),
							ce = {
								onMouseEnter:
									(C || j) &&
									((t) => {
										V || (C && !T && v(t, !0), j && j(t));
									}),
								onMouseLeave:
									(C || W) &&
									((t) => {
										V || (C && !T && v(t, !1), W && W(t));
									}),
							},
							Z = (0, o.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (t) => {
									(B.current = t),
										Y ||
											(0, U.iy)(t, 0, !!ae, (w) => {
												k ? v(w) : x && x(w);
											});
								},
								children: [(0, g.Y)(M, { open: u, toggleOpen: v, treePath: S }), (0, g.Y)(A, { open: u, toggleOpen: v, treePath: S })],
							});
						return (0, o.Y)(b._, {
							children: (0, o.FD)('div', {
								...$,
								className: r()('ss__dropdown', { 'ss__dropdown--open': u }, J, N),
								ref: z,
								...ce,
								children: [
									(0, o.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (t) => {
											(I.current = t), Y || (0, U.iy)(t);
										},
										'aria-expanded': u,
										role: 'button',
										onTouchStart: () => {
											F(!0);
										},
										onClick: (t) => {
											!T && !re && (v(t), x && x(t)),
												setTimeout(() => {
													F(!1);
												}, 300);
										},
										children: (0, g.Y)(se, { open: u, toggleOpen: v, treePath: S }),
									}),
									P
										? u &&
										  (M || A) &&
										  (0, d.createPortal)(
												(0, o.Y)('div', {
													className: r()('ss__dropdown__portal', J, N, { 'ss__dropdown__portal--open': u }),
													css: $.css,
													style: { position: 'absolute', top: H.top, left: H.left, width: H.width, zIndex: 9999 },
													children: Z,
												}),
												document.body
										  )
										: (M || A) && Z,
								],
							}),
						});
					});
			},
			'./components/src/hooks/useA11y.tsx'(_, a, e) {
				'use strict';
				e.d(a, { DH: () => c, aZ: () => s, iy: () => l });
				const o = 9,
					d = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(r, f, b, m) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const n = document.createElement('style');
						(n.type = 'text/css'),
							(n.id = h),
							(n.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(n);
					}
					r &&
						!r.attributes?.[s] &&
						(r.setAttribute(s, !0),
						r.setAttribute('tabIndex', `${f || 0}`),
						r.addEventListener('keydown', (n) => {
							(n.code === 'Space' || n.code === 'Enter') && r.click();
						}),
						b &&
							r.addEventListener('keydown', function (n) {
								const p = r.querySelectorAll(c),
									y = p[0],
									g = p[p.length - 1];
								if (n.keyCode == d) {
									r.focus(), m && m(n), n.preventDefault(), n.stopPropagation();
									return;
								}
								(n.key === 'Tab' || n.keyCode === o) &&
									(n.shiftKey
										? document.activeElement === y && (g.focus(), n.preventDefault())
										: document.activeElement === g && (y.focus(), n.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useClickOutside.tsx'(_, a, e) {
				'use strict';
				e.d(a, { L: () => d });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function d(s) {
					const c = (0, o.li)(),
						l = (0, o.li)();
					return (
						(0, o.vJ)(() => {
							c.current = s;
						}),
						(0, o.vJ)(() => {
							return document.addEventListener('click', r), () => document.removeEventListener('click', r);
							function r(f) {
								l.current && c.current && !l.current.contains(f.target) && c.current(f);
							}
						}, []),
						l
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(_, a, e) {
				'use strict';
				e.d(a, { F: () => o });
				const o = {
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
			'./components/src/utilities/storybook.tsx'(_, a, e) {
				'use strict';
				e.d(a, { Z: () => c });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (l) => {
						const r = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								r.current && l.className?.includes('lang-') && !l.className?.includes(s) && window?.Prism?.highlightElement(r.current);
							}, [l.className, l.children, r]),
							(0, o.Y)('code', { ...l, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function a(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (_.exports = a);
			},
		},
	]);
})();
