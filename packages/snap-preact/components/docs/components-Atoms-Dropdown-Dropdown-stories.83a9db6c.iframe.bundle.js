(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4578],
		{
			'./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx'(w, a, e) {
				'use strict';
				e.r(a),
					e.d(a, {
						Default: () => d,
						ExternalState: () => f,
						Hoverable: () => b,
						JSXChildren: () => u,
						JSXContent: () => t,
						StringChildren: () => c,
						__namedExportsOrder: () => _,
						default: () => y,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					l = e('./components/src/utilities/componentArgs.ts');
				const s =
						"# Dropdown\n\nRenders a button and content. Clicking the button toggles content visibility. Typically used as an alternative to a `<select>` dropdown or to collapse content. By default any clicks outside of the element will hide the content.\n\n## Usage\n```tsx\nimport { Dropdown } from '@athoscommerce/snap-preact/components';\n```\n\n### content\nThe `content` prop specifies the dropdown contents. This can be a string or a JSX element. The Dropdown component also passes the current open state and a toggle function to the JSX element under the `open: boolean` and `toggleOpen` props. \n\n```tsx\n<Dropdown content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```tsx\n<Dropdown>Hello World!</Dropdown>\n```\n\nNote you can only render either the content, or the children, if both are passed in, it will default to the content prop. \n\n\n### button\nThe `button` prop specifies the dropdown button. This button toggles the visibility of the content when clicked. This can be a string or a JSX element.\n\n```tsx\n<Dropdown button={'click me!'}>Hello World!</Dropdown>\n```\n\n### toggleOnHover\nThe `toggleOnHover` prop controls if hover events (onMouseEnter and onMouseLeave) will toggle the dropdown. This is disabled by default.\n\n```tsx\n<Dropdown button={'click me!'} toggleOnHover>Hello World!</Dropdown>\n```\n\n### open\nThe `open` prop sets the dropdown visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```tsx\n<Dropdown open={true}>Hello World!</Dropdown>\n```\n\n### startOpen\nThe `startOpen` prop sets the dropdown initial internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Dropdown startOpen>Hello World!</Dropdown>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the dropdown content, as well as preventing the `onClick` callback from being invoked.\n\n```tsx\n<Dropdown disabled>Hello World!</Dropdown>\n```\n\n### disableClick\nThe `disableClick` prop specifies a boolean which will disable the default click behavior; this is useful if you want to only allow for hovering to toggle the state. Be aware that this will cause the dropdown to not work as expected in mobile (where touch events are used).\n\n```tsx\n<Dropdown disableClick>Hello World!</Dropdown>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```tsx\n<Dropdown disableA11y>Hello World!</Dropdown>\n```\n\n### focusTrapContent\nThe `focusTrapContent` prop specifies if the content should trap the user in a focus trap for a11y keyboard navigation.\n\n```tsx\n<Dropdown focusTrapContent={true} >Hello World!</Dropdown>\n```\n\n### disableOverlay\nThe `disableOverlay` prop will disable the dropdown contents from being rendered as an overlay. If set to `true`, dropdown contents will instead be rendered as a block and affect the height of its parent element. Typically used if Dropdown is intended to act as a header (ie. Facet)\n\n```tsx\n<Dropdown disableOverlay>Hello World!</Dropdown>\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```tsx\n<Dropdown disableClickOutside>Hello World!</Dropdown>\n```\n\n### usePortal\nThe `usePortal` prop specifies if the dropdown content should be rendered in a portal. This will render the content directly on the body, and dynamically position itself below the dropdown button (repositioning on scroll and resize). This is useful if the dropdown content is being cut off by a parent container with `overflow: hidden`. Clicks within the portaled content are not treated as outside clicks and will not close the dropdown.\n\n```tsx\n<Dropdown usePortal>Hello World!</Dropdown>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the dropdown button is clicked.\n\n```tsx\n<Dropdown onClick={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseEnter\nThe `onMouseEnter` prop allows for a custom callback function for when the dropdown has been hovered.\n\n```tsx\n<Dropdown onMouseEnter={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onMouseLeave\nThe `onMouseLeave` prop allows for a custom callback function for when the dropdown has been un-hovered.\n\n```tsx\n<Dropdown onMouseLeave={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onToggle\nThe `onToggle` prop allows for a custom callback function for when the dropdown visibility is toggled. This only applies if using internal state. Cannot be used with the `open` prop.\n\n```tsx\n<Dropdown onToggle={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n",
					y = {
						title: 'Atoms/Dropdown',
						component: r.m,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(p.oz, { options: { overrides: { code: h.Z } }, children: s }), (0, o.Y)(p.uY, { story: p.h1 })],
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
					d = (i) => (0, o.Y)(r.m, { ...i });
				d.args = { button: 'button text', content: 'content text' };
				const b = (i) => (0, o.Y)(r.m, { ...i });
				b.args = { button: 'hover over me', content: 'content text', toggleOnHover: !0 };
				const f = (i) => (0, o.Y)(r.m, { ...i });
				f.args = { button: 'button text', content: 'content text', open: !0 };
				const t = (i) => (0, o.Y)(r.m, { ...i });
				t.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const u = (i) => (0, o.Y)(r.m, { button: i.button, children: i.content });
				u.args = {
					button: 'button text',
					content: (0, o.Y)('div', { children: 'jsx content - (note this component receieved the open state as a prop)' }),
				};
				const c = (i) => (0, o.Y)(r.m, { button: i.button, children: i.content });
				(c.args = { button: 'button text', content: 'string content - (note this component receieved the open state as a prop)' }),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...d.parameters?.docs?.source },
						},
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...b.parameters?.docs?.source },
						},
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...f.parameters?.docs?.source },
						},
					}),
					(t.parameters = {
						...t.parameters,
						docs: {
							...t.parameters?.docs,
							source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...t.parameters?.docs?.source },
						},
					}),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...u.parameters?.docs?.source,
							},
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
								...c.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default', 'Hoverable', 'ExternalState', 'JSXContent', 'JSXChildren', 'StringChildren'];
			},
			'./components/src/components/Atoms/Dropdown/Dropdown.tsx'(w, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/compat/dist/compat.module.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					s = e.n(l),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					d = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					t = e('./components/src/hooks/useClickOutside.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					c = e('./components/src/utilities/cloneWithProps.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					Y = e('./components/src/hooks/useA11y.tsx');
				const Q = ({ disableOverlay: E }) =>
						(0, h.AH)({
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
					q = (0, y.PA)((E) => {
						const L = (0, b.u)(),
							ee = { startOpen: !1, disableA11y: !1, treePath: (0, f.LU)() },
							M = (0, _.v6)('dropdown', L, ee, E),
							{
								button: oe,
								content: A,
								children: S,
								disabled: T,
								open: K,
								toggleOnHover: C,
								onMouseEnter: W,
								onMouseLeave: I,
								disableClick: te,
								onClick: O,
								onToggle: x,
								focusTrapContent: ne,
								startOpen: se,
								disableClickOutside: re,
								disableA11y: J,
								className: N,
								internalClassName: X,
								treePath: H,
								usePortal: P,
							} = M,
							{ overrideElement: ae, shouldRenderDefault: le } = (0, u._)('dropdown', M);
						if (!le) return ae;
						let m, D;
						const k = K === void 0;
						k ? ([m, D] = (0, r.J0)(se)) : (m = K);
						const [V, F] = (0, r.J0)(!1),
							R = (0, r.li)(null),
							B = (0, r.li)(null),
							[j, ie] = (0, r.J0)({ top: 0, left: 0, width: 0 });
						let z;
						re ||
							(z = (0, t.L)((n) => {
								(P && B.current && B.current.contains(n.target)) || (m && (T || (k && D && D(!1), x && x(n, !1))));
							}, !0)),
							(0, r.Nf)(() => {
								if (P && m) {
									const n = () => {
										if (R.current) {
											const g = R.current.getBoundingClientRect();
											ie({ top: g.bottom + window.scrollY, left: g.left + window.scrollX, width: g.width });
										}
									};
									return (
										n(),
										window.addEventListener('resize', n),
										window.addEventListener('scroll', n, !0),
										() => {
											window.removeEventListener('resize', n), window.removeEventListener('scroll', n, !0);
										}
									);
								}
							}, [P, m]);
						const v = (n, g) => {
								k &&
									D &&
									D((G) => {
										const U = g ?? !G;
										return U != G && x && x(n, U), U;
									});
							},
							$ = (0, i.Z)(M, Q),
							de = {
								onMouseEnter:
									(C || W) &&
									((n) => {
										V || (C && !T && v(n, !0), W && W(n));
									}),
								onMouseLeave:
									(C || I) &&
									((n) => {
										V || (C && !T && v(n, !1), I && I(n));
									}),
							},
							Z = (0, o.FD)('div', {
								className: 'ss__dropdown__content',
								ref: (n) => {
									(B.current = n),
										J ||
											(0, Y.iy)(n, 0, !!ne, (g) => {
												k ? v(g) : O && O(g);
											});
								},
								children: [(0, c.Y)(A, { open: m, toggleOpen: v, treePath: H }), (0, c.Y)(S, { open: m, toggleOpen: v, treePath: H })],
							});
						return (0, o.Y)(d._, {
							children: (0, o.FD)('div', {
								...$,
								className: s()('ss__dropdown', { 'ss__dropdown--open': m }, N, X),
								ref: z,
								...de,
								children: [
									(0, o.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (n) => {
											(R.current = n), J || (0, Y.iy)(n);
										},
										'aria-expanded': m,
										role: 'button',
										onTouchStart: () => {
											F(!0);
										},
										onClick: (n) => {
											!T && !te && (v(n), O && O(n)),
												setTimeout(() => {
													F(!1);
												}, 300);
										},
										children: (0, c.Y)(oe, { open: m, toggleOpen: v, treePath: H }),
									}),
									P
										? (A || S) &&
										  (0, p.createPortal)(
												(0, o.Y)('div', {
													className: L.name ? `ss__theme__${L.name}` : 'ss__theme__global',
													children: (0, o.Y)('div', {
														className: s()('ss__dropdown__portal', N, X, { 'ss__dropdown__portal--open': m }),
														css: $.css,
														style: {
															position: 'absolute',
															top: j.top,
															left: j.left,
															width: j.width,
															zIndex: 10007,
															pointerEvents: m ? 'auto' : 'none',
														},
														children: Z,
													}),
												}),
												document.body
										  )
										: (A || S) && Z,
								],
							}),
						});
					});
				e.d(a, ['m', 0, q]);
			},
			'./components/src/hooks/useA11y.tsx'(w, a, e) {
				'use strict';
				e.d(a, { iy: () => l });
				const o = 9,
					p = 27,
					r = 'ss-a11y',
					h =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function l(s, y, d, b) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = f),
							(t.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					s &&
						!s.attributes?.[r] &&
						(s.setAttribute(r, !0),
						s.setAttribute('tabIndex', `${y || 0}`),
						s.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && t.target === s && s.click();
						}),
						d &&
							s.addEventListener('keydown', function (t) {
								const u = s.querySelectorAll(h),
									c = u[0],
									_ = u[u.length - 1];
								if (t.keyCode == p) {
									s.focus(), b && b(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === o) &&
									(t.shiftKey
										? document.activeElement === c && (_.focus(), t.preventDefault())
										: document.activeElement === _ && (c.focus(), t.preventDefault()));
							}));
				}
				e.d(a, ['DH', 0, h, 'aZ', 0, r]);
			},
			'./components/src/hooks/useClickOutside.tsx'(w, a, e) {
				'use strict';
				e.d(a, { L: () => p });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function p(r, h = !1) {
					const l = (0, o.li)(),
						s = (0, o.li)();
					return (
						(0, o.vJ)(() => {
							l.current = r;
						}),
						(0, o.vJ)(() => {
							return document.addEventListener('click', y, h), () => document.removeEventListener('click', y, h);
							function y(d) {
								s.current && l.current && !s.current.contains(d.target) && l.current(d);
							}
						}, []),
						s
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(w, a, e) {
				'use strict';
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
				e.d(a, ['F', 0, o]);
			},
			'./components/src/utilities/storybook.tsx'(w, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					h = (l) => {
						const s = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								s.current && l.className?.includes('lang-') && !l.className?.includes(r) && window?.Prism?.highlightElement(s.current);
							}, [l.className, l.children, s]),
							(0, o.Y)('code', { ...l, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, h]);
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function a(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (w.exports = a);
			},
		},
	]);
})();
